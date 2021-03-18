// import { orderService } from '../services/order.service.js';

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
    // async loadOrders({ commit, state }) {
    //   try {
    //     const orders = await orderService.getOrders();
    //     commit({ type: 'setOrders', orders })
    //   } catch (err) {
    //     console.log('orderStore: Error in loadOrders', err)
    //     throw err
    //   }
    // },
  },
  // updateOrderStatus
  // saveOrder

}