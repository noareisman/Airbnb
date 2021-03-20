import { stayService } from '../services/stay.service.js';
import { orderService } from '../services/order.service.js';

export const orderStore = {
  state: {
    allOrders: [],
    currStayOrders: [],
    orders: [],
    host: null,
    // currViewedStayId: null
  },
  getters: {
    orders(state) {
      return state.orders;
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
    setOrders(state, { orders }) {
      state.orders = orders;
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

    //////////Noa: I think the filtering here is not done correctly /////////////////////////////////////////////////
    // and it should compare the user._id to the order.buyer._id//////////////////////////////////////////////////////////
    async loadHostOrders({ commit, state }, { host }) {
      try {
        commit({ type: 'setHost', host })
        const stays = await stayService.query(host);
        const orders = await orderService.query();

        const myOrders = orders.filter(order => {
          return stays.find(stay => {
            return stay._id === order.stay._id;
          })
        })
        commit({ type: 'setOrders', orders: myOrders })
      } catch (err) {
        console.log('orderStore: Error in loadHostOrders', err)
        throw err
      }
    },
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async updateOrderStatus({ dispatch, state }, { order }) {
      await orderService.save(order)
      dispatch({ type: "loadOrders", order });
    },
    async setPendingOrder(context, { orderSettings }) {
      // var newPendingOrder = orderService.getNewOrder()
      // console.log(newPendingOrder);
      var newPendingOrder = {
        createdAt: Date.now(),
        buyer: {
          _id: orderSettings.buyer._id,
          fullname: orderSettings.buyer.fullname
        },
        totalPrice: orderSettings.totalPrice,
        startDate: orderSettings.requestedDates[0],
        endDate: orderSettings.requestedDates[0],
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
      // console.log(newPendingOrder);
      await orderService.save(newPendingOrder)
      dispatch({ type: "loadHostOrders", order });
      console.log(newPendingOrder);
      log.state.orders
    }
  }
}


