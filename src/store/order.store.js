import { stayService } from '../services/stay.service.js';
import { orderService } from '../services/order.service.js';

export const orderStore = {
  state: {
    allOrders: [],
    currStayOrders: [],
    hostOrders: [],
    host: null,
  },
  getters: {
    getHostOrders(state) {
     return state.hostOrders;
    }, 
    pendingOrders(state) {
      return state.hostOrders.filter(order => {
        return order.status === 'pending'
      });
    }, 
    getAllOrders(state) {
      return state.allOrders
    },
    getCurrStayOrders(state) {
      return state.currStayOrders
    },
    getStayOrdersTimeStamps(state) {
      return state.currStayOrders.map((order) => {
        var start = order.startDate.split('/')
        start = new Date(parseInt(start[2], 10), parseInt(start[1], 10) - 1, parseInt(start[0]), 10).getTime();
        var end = order.endDate.split('/')
        end = new Date(parseInt(end[2], 10), parseInt(end[1], 10) - 1, parseInt(end[0]), 10).getTime();
        return [start, end]
      })
    }
  },
  mutations: {
    setHostOrders(state, { hostOrders }) {
      state.hostOrders = hostOrders;
    },
    setHost(state, { host }) {
      state.host = host;
    },
    setAllOrders(state, { allOrders }) {
      state.allOrders = allOrders;
    },
    setCurrStayOrders(state, { stayId }) {
      state.currStayOrders = state.allOrders.filter(order => {
        return (order.stay._id === stayId)
      });
    },
  },
  actions: {
    loadAllOrders(context, { stayId }) {
      try {
        return orderService.query()
          .then(allOrders => {
            context.commit({ type: 'setAllOrders', allOrders })
            context.commit({ type: 'setCurrStayOrders', stayId })
          })
      } catch (err) {
        console.log('orderStore: Error in loadOrders', err)
        throw err
      }
    },
    async loadHostOrders({ commit, state }, { host }) {
      try {
        const filterBy = {}
        filterBy._id = host._id
        
        commit({ type: 'setHost', host })
        const stays = await stayService.query(filterBy);
        const orders = await orderService.query();
        
        const hostOrders = orders.filter(order => {
          return stays.find(stay => {
            return stay._id === order.stay._id;
          })
        })
        commit({ type: 'setHostOrders', hostOrders: hostOrders })
      } catch (err) {
        console.log('orderStore: Error in loadHostOrders', err)
        throw err
      }
    },
    async updateOrderStatus({ dispatch, state }, { order }) {
      await orderService.save(order)
      dispatch({ type: "loadHostOrders", host:order.buyer });
    },
    async setPendingOrder({ dispatch }, { orderSettings }) {
      var host = orderSettings.currStay.host
      await orderService.save(orderSettings)
      await socketService.emit('renderOrders',host )
      // dispatch({ type: "loadHostOrders", host });
      // socketService.emit('loadOrders',(newPendingOrder))
    },
  }
}


