// import { httpService } from './http.service'
import { storageService } from './async-storage.service'
const DB = require ('../../data/airbnb.json')

export const stayService = {
    query,
    getById,
    remove,
    update
  }

  
async function query(filterBy) {
    // var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
    // return httpService.get(`review${queryStr}`)
    var stays =  await storageService.query('stay')
    if(!stays.length){
        // console.log(DB.stay)
        stays = JSON.parse(JSON.stringify(DB.stay)) 
        console.log(stays)
        storageService.save('stay' , stays)
    }
    return stays;
}
  
  
function getById(stayId) {
    return storageService.get('stay', stayId)
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