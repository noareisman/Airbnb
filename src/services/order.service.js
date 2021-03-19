import { storageService } from './async-storage.service'
import { httpService } from './http.service'

const gOrders = require ('../../data/airbnb.json')



export const orderService = {
    // login,
    // logout,
    // signup,
    query,
    // getById,
    // remove,
    // update,
    // getLoggedinUser,
}

async function query() {
    // return httpService.get(`order`)
    let orders = await storageService.query('order')
    if (!orders || !orders.length) {
        orders = JSON.parse(JSON.stringify(gOrders.order))
        storageService.save('order', orders)
    }
    return orders;
}