import { httpService } from './http.service'

const gOrders = require('../../data/airbnb.json')

export const orderService = {
    query,
    save,
    getById,
    remove//currently not in use 
}

function getById(id) {
    return httpService.get(`order/${id}`)
}

function remove(id) {
    return httpService.delete(`order/${id}`)
}

async function query() {
    return httpService.get(`order`)
}

async function save(order) {
    if (order._id) {
        return httpService.put(`order/${order._id}`, order)
    } else{
        var order = {
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

