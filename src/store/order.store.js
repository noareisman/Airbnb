import { stayService } from '../services/stay.service.js';
import { orderService } from '../services/order.service.js';

export const orderStore = {
  state: {
    orders: []
  },
  getters: {
    orders(state) {
      return state.orders;
    },
  },
  mutations: {
    setOrders(state, { orders }) {
      state.orders = orders;
    },
  },
  actions: {
    async loadOrders({ commit, state }, { user }) {
      try {
        const stays = await stayService.query(user);
        const orders = await orderService.query();
        console.log(orders);
        const myOrders = orders.filter(order => {
          return stays.find(stay => {
            return stay._id === order.stay._id;
          })
        })
        commit({ type: 'setOrders', orders: myOrders })
      } catch (err) {
        console.log('orderStore: Error in loadOrders', err)
        throw err
      }
    },
  },
  // updateOrderStatus
  // saveOrder

}