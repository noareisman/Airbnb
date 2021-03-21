// import { httpService } from './http.service'
import { storageService } from './async-storage.service'
import { utilService } from './util.service'
const DB = require('../../data/airbnb.json')

export const stayService = {
    query,
    getById,
    remove,
    save,
    getReviewTemplate,
    addReview
}


async function query(filterBy = { location: '', startDate: '', endDate: '', guests: 0 }) {
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
    const regex = new RegExp(filterBy.location, 'i')
    var toysForDisplay = stays.filter(stay => {
        return regex.test(stay.loc.address) && (stay.capacity >= filterBy.guests || !filterBy.guests)
        // && (JSON.stringify(toy.inStock) === filterBy.inStock || filterBy.inStock === 'all')
    })

    return toysForDisplay;
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


async function save(stay) {
    if (stay._id) {
        return storageService.put('stay', stay)
    }
    else {
        return storageService.post('stay', stay)
    }
    // user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    // if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
}

async function addReview(review,stay){
    var stayToUpdate=getById(stay._id)
    stayToUpdate.reviews.unshift(review)
    save(stay)
    return
}


function getReviewTemplate() {
    return review = {
        id:utilService.makeId(),
        txt: '',
        avgRate: null,
        category: {
            Cleanliness: null,
            Accuracy: null,
            Communication: null,
            Location: null,
            CheckIn: null,
            accessibility: null
        },
        by: {
            _id: '',
            fullname: '',
            imgUrl: '',
            time:Date.now()
        }
    }
}
