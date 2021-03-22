import { storageService } from './async-storage.service'
import { httpService } from './http.service'

const gOrders = require('../../data/airbnb.json')



export const orderService = {
    // login,
    // logout,
    // signup,
    query,
    // getById,
    // remove,
    save,
    // getLoggedinUser,
    getNewOrder
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

async function save(order) {
    if (order._id) return storageService.put('order', order);
    else return storageService.post('order', order);

    
    // user = await httpService.put(`user/${user._id}`, user)

    // Handle case in which admin updates other user's details
    // if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
}

function getNewOrder() {
    return order = {
        _id: '',
        createdAt: null,
        buyer: {
            _id: '',
            fullname: ''
        },
        totalPrice: 0,
        startDate: '',
        endDate: '',
        guests: {
            adults: 0,
            kids: 0
        },
        stay: {
            _id: '',
            name: '',
            price: 0
        },
        status: 'pending'
    }
}