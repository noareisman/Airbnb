import { httpService} from './http.service'
import { utilService} from './util.service'

export const stayService = {
    query,
    getById,
    remove,
    save,
    getReviewTemplate,
    getEmptyStay
    // addReview
}

function query(filterBy = { location: '', guests: 0, _id: null }) {
    var queryStr = (!filterBy) ? '' : `?location=${filterBy.location || ''}&guests=${filterBy.guests || 0}&price=${filterBy.price || 0}&amenities=${filterBy.amenities}&_id=${filterBy._id || null}`
    return httpService.get(`stay${queryStr}`)
}

async function getById(stayId) {
    return httpService.get(`stay/${stayId}`)
}

function remove(stayId) {
    return httpService.delete(`stay/${stayId}`)
}

async function save(stay) {
    if (stay._id) {
        return httpService.put(`stay/${stay._id}`, stay)
    } else {
        return httpService.post(`stay`, stay)
    }
} 

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

function getEmptyStay() {
    return stay = {
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

