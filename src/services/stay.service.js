import {
    httpService
} from './http.service'
import {
    storageService
} from './async-storage.service'
import {
    utilService
} from './util.service'
const DB = require('../../data/airbnb.json')

export const stayService = {
    query,
    getById,
    remove,
    save,
    getReviewTemplate,
    getEmptyStay
    // addReview
}


function query(filterBy = { location: '', guests: 0}) {
    if(filterBy._id){
        console.log(filterBy)
    }
    var queryStr = (!filterBy) ? '' : `?location=${filterBy.location ||''}&guests=${filterBy.guests || 0}&price=${filterBy.price || 0}&amenities=${filterBy.amenities}&_id=${filterBy._id||null}`
    return httpService.get(`stay${queryStr}`)

    // let stays = await storageService.query('stay')
    // if (!stays.length) {
    //     stays = JSON.parse(JSON.stringify(DB.stay))
    //     storageService.save('stay', stays)
    // }
    // else if (filterBy._id) {
    //     stays = stays.filter(stay => {
    //         if (filterBy._id) return stay.host._id === filterBy._id;
    //     })
    // }
    // const regex = new RegExp(filterBy.location, 'i')
    // var toysForDisplay = stays.filter(stay => {
    //     return regex.test(stay.loc.address) && (stay.capacity >= filterBy.guests || !filterBy.guests)
    //     // && (JSON.stringify(toy.inStock) === filterBy.inStock || filterBy.inStock === 'all')
    // })

    // return toysForDisplay;
}

async function getById(stayId) {
    // const stay = await storageService.get('stay', stayId)
    // return stay
    return httpService.get(`stay/${stayId}`)
}

function remove(stayId) {
    return httpService.delete(`stay/${stayId}`)
    // return storageService.delete('stay', stayId)

}

async function save(stay) {
    if (stay._id) {
        return httpService.put(`stay/${stay._id}`, stay)
        // return storageService.put('stay', stay)
    } else {
        return httpService.post(`stay`, stay)
        // return storageService.post('stay', stay)
    }
    // user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    // if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
}

// function getReviewTemplate() {
//     return review = {
//         currStay:null,
//         id:utilService.makeId(),
// async function addReview(review, stay) {
//     var stayToUpdate = getById(stay._id)
//   save(stay)
//     return  stayToUpdate.reviews.unshift(review)
    
// }
// 

function getReviewTemplate() {
    return review = {
        id: utilService.makeId(),
        txt: '',
        avgRate: null,
        category: {
            Cleanliness: null,
            Accuracy: null,
            Communication: null,
            Location: null,
            CheckIn: null,
            Accessibility: null
        },
        by: {
            _id: '',
            fullname: '',
            imgUrl: '',
            time: Date.now()
        }
    }
}

function getEmptyStay(){ 
return stay= {
    name: "",
    imgUrls: [],
    price: null,
    summary: "",
    capacity: 1,
    favorites: [],
    amenities: [],
    host: {
      _id: this.host._id,
      fullname: this.host.fullname,
      imgUrl: this.host.imgUrl,
    },
    loc: {
      country: '',
      countryCode: '',
      address: '',
      lat: null,
      lng: null,
    },
    reviews: []
    }
}