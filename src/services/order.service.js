import { storageService } from './async-storage.service'
import { utilService } from './util.service.js';
import { httpService } from './http.service'

const gOrders = require('../../data/airbnb.json')

export const orderService = {
    query,
    save,
    getNewOrder,
    getById,
    remove//not in use
}

function getById(id) {
    return httpService.get(`order/${id}`)
}

function remove(id) {
    return httpService.delete(`order/${id}`)
}

async function query() {
    return httpService.get(`order`)
    // let orders = await storageService.query('order')
    // if (!orders || !orders.length) {
    //     orders = JSON.parse(JSON.stringify(gOrders.order))
    //     storageService.save('order', orders)
    // }
    // return orders;
}

async function save(order) {
    // return storageService.put('order', order);
    if (order._id) {
        return httpService.put(`order/${order._id}`, order)
    } else{
    return httpService.post('order/', order)
    }    
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