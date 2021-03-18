// import { httpService } from './http.service'
import { storageService } from './async-storage.service'
const DB = require('../../data/airbnb.json')

export const stayService = {
    query,
    getById,
    remove,
    update
}


async function query(filterBy) {
    // var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
    // return httpService.get(`review${queryStr}`)
    let stays = await storageService.query('stay')
    if (!stays.length) {
        stays = JSON.parse(JSON.stringify(DB.stay))
        storageService.save('stay', stays)
    }
    else if (filterBy._id) {
        stays = stays.filter(stay => {
            if (filterBy._id) return stay.host._id === filterBy._id;
        })
    }
    return stays;
}

async function getById(stayId) {
    const stay = await storageService.get('stay', stayId)
    return stay


    // return httpService.get(`user/${userId}`)
}

function remove(stayId) {
    // return httpService.delete(`review/${reviewId}`)
    return storageService.delete('stay', stayId)

}


async function update(stay) {
    return storageService.put('stay', stay)
    // user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    // if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
}