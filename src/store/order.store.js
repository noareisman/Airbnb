import { stayService } from '../services/stay.service.js';
import { orderService } from '../services/order.service.js';

export const orderStore = {
  state: {
    allOrders: [],
    currStayOrders: [],
    hostOrders: [],
    host: null,
    // currViewedStayId: null
  },
  getters: {
    getHostOrders(state) {
      return state.hostOrders;
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
      console.log(host)
      try {
        commit({ type: 'setHost', host })
        const stays = await stayService.query(host);
        const orders = await orderService.query();
        
        const hostOrders = orders.filter(order => {
          return stays.filter(stay => {
            return stay._id === order.stay._id;
          })
        })
        console.log('hostOrders are:',hostOrders);
        commit({ type: 'setHostOrders', hostOrders: hostOrders })
      } catch (err) {
        console.log('orderStore: Error in loadHostOrders', err)
        throw err
      }
    },
    async updateOrderStatus({ dispatch, state }, { order }) {
      await orderService.save(order)
      dispatch({ type: "loadHostOrders", order });
    },
    async setPendingOrder({dispatch}, { orderSettings }) {
      var host = orderSettings.currStay.host
      var newPendingOrder = {
        createdAt: Date.now(),
        buyer: {
          _id: orderSettings.buyer._id,
          fullname: orderSettings.buyer.fullname
        },
        totalPrice: orderSettings.totalPrice,
        startDate: orderSettings.requestedDates[0],
        endDate: orderSettings.requestedDates[1],
        guests: {
          adults: orderSettings.guest.adultsNum,
          kids: orderSettings.guest.childrenNum + orderSettings.guest.infantsNum
        },
        stay: {
          _id: orderSettings.currStay._id,
          name: orderSettings.currStay.name,
          price: orderSettings.currStay.price
        },
        status: 'pending'
      }
      await orderService.save(newPendingOrder)
      dispatch({ type: "loadHostOrders", host });
    }
  }
}


