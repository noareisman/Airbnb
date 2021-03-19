import { storageService } from './async-storage.service'
import { httpService } from './http.service'

// const gUsers = require('../../data/user.json');
const gUsers = require ('../../data/airbnb.json')



export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    getLoggedinUser,
}

window.userService = userService
// Note: due to async, must run one by one...
// userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 100, isAdmin: false})
// userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 100, isAdmin: true})
// userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 100})

async function getUsers() {
    // return httpService.get(`user`)
    let users = await storageService.query('user')
    if (!users || !users.length) {
        users = JSON.parse(JSON.stringify(gUsers.user))
        storageService.save('user', users)
    }
    return users;
}

async function getById(userId) {
    // return httpService.get(`user/${userId}`)
    const user = await storageService.get('user', userId);
    return user;
}

function remove(userId) {
    // return httpService.delete(`user/${userId}`)
    return storageService.remove('user', userId)
}

async function update(user) {
    return storageService.put('user', user)
    // user = await httpService.put(`user/${user._id}`, user)

    // Handle case in which admin updates other user's details
    // if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
}

async function login(userCred) {
    const users = await storageService.query('user');
    const user = users.find(user => user.username === userCred.username);
    return _saveLocalUser(user);

    // const user = await httpService.post('auth/login', userCred)
    // if (user) return _saveLocalUser(user)
}

async function signup(userCred) {
    const user = await storageService.post('user', userCred)
    // const user = await httpService.post('auth/signup', userCred)
    // TODO
    user.myReservations = [];
    user.saved = [];
    user.imgProfileSrc = 'src';
    user.isAdmin = false;
    gUsers.user.push(user);
    storageService.save('user', gUsers.user)
    return _saveLocalUser(user)
}

async function logout() {
    sessionStorage.clear()
    // return await httpService.post('auth/logout')
}

function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user));
    return user;
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser'));
}

