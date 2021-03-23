// import { storageService } from './async-storage.service'
import { httpService } from './http.service'

// const gUsers = require('../../data/user.json');
const gUsers = require('../../data/airbnb.json')



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
    return httpService.get(`user`)
    // let users = await storageService.query('user')
    // if (!users || !users.length) {
    //     users = JSON.parse(JSON.stringify(gUsers.user))
    //     storageService.save('user', users)
    // }
    // return users;
}

async function getById(userId) {
    return httpService.get(`user/${userId}`)
    // const user = await storageService.get('user', userId);
    // return user;
}

function remove(userId) {
    return httpService.delete(`user/${userId}`)
    // return storageService.remove('user', userId)
}

async function update(user) {
    // return storageService.put('user', user)
    user = await httpService.put(`user/${user._id}`, user)

    // Handle case in which admin updates other user's details
    // if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
}

async function login(userCred) {
    const user = await httpService.post('auth/login', userCred);
    // console.log('user im somewhere lol', user);
    if (user) return _saveLocalUser(user);
    else return 'Incorrect username or password.';

    // return
    // const users = await storageService.query('user');
    // const user = users.find(user => user.username === userCred.username && user.password === userCred.password);
    // if (!user) return 'Incorrect username or password.';
    // else return _saveLocalUser(user);

}

async function signup(userCred) {


    // const users = await storageService.query('user');
    // gUsers.user.push(user);
    // const msg = 'Username is alrady taken.'
    // let user;
    // users.forEach(u => {
    //     if (u.username === userCred.username) {
    //         user = msg
    //         return;}
    // });
    // if (user === msg) return msg;
    // const user = await storageService.post('user', userCred)
    userCred.imgUrl = require(`@/assets/imgs/icons/userGuest.jpg`);
    userCred.isAdmin = false;
    userCred.messages = {};
    const user = await httpService.post('auth/signup', userCred)
    // storageService.save('user', gUsers.user)
    return _saveLocalUser(user)
}

async function logout() {
    sessionStorage.clear()
    return await httpService.post('auth/logout')
}

function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user));
    return user;
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser'));
}

