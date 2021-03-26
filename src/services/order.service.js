// import { storageService } from './async-storage.service'
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
        var newPendingOrder = {
            createdAt: Date.now(),
            buyer: {
              _id: order.buyer._id,
              fullname: order.buyer.fullname
            },
            totalPrice: order.totalPrice,
            startDate: order.requestedDates[0],
            endDate: order.requestedDates[1],
            guests: {
              adults: order.guest.adultsNum,
              kids: order.guest.childrenNum + order.guest.infantsNum
            },
            stay: {
              _id: order.currStay._id,
              name: order.currStay.name,
              price: order.currStay.price
            },
            status: 'pending'
          }
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