import { userService } from '../services/user.service.js';


export const userStore = {
    state: {
        loggedInUser: userService.getLoggedinUser(),// no need for additional "isLoggedUser" as we can check if this is null
        // users: []
    },
    getters: {
        // users(state) {
        //     return state.users;
        // },
        loggedinUser(state) {
            return state.loggedInUser;
        },
        isAdmin(state) {
            return state.loggedInUser.isAdmin
        },
        isUserLogged(state) {
            return state.isUserLogged;
        }
    },

    mutations: {
        setUser(state, { user }) {
            state.loggedinUser = user;
        },
        setUsers(state, { users }) {
            state.users = users;
        },
        removeUser(state, { userId }) {
            state.users = state.users.filter(user => user._id !== userId)
        }
    },
    actions: {
        async login({ commit }, { userCred }) {
            try {
                console.log("userCred:", userCred);
                return
                const user = await userService.login(userCred);
                commit({ type: 'setUser', user })
                return user;
            } catch (err) {
                console.log('userStore: Error in login', err)
                throw err
            }
        },
        async signup({ commit }, { userCred }) {
            try {
                console.log("userCred:", userCred);
                return
                const user = await userService.signup(userCred)
                commit({ type: 'setUser', user })
                return user;
            } catch (err) {
                console.log('userStore: Error in signup', err)
                throw err
            }

        },
        async logout({ commit }) {
            try {
                await userService.logout()
                commit({ type: 'setUser', user: null })
            } catch (err) {
                console.log('userStore: Error in logout', err)
                throw err
            }
        },
        // async loadUsers({ commit }) {
        //     // TODO: loading
        //     try {
        //         const users = await userService.getUsers();
        //         commit({ type: 'setUsers', users })
        //     } catch (err) {
        //         console.log('userStore: Error in loadUsers', err)
        //         throw err
        //     }
        // },
        async removeUser({ commit }, { userId }) {
            try {
                await userService.remove(userId);
                commit({ type: 'removeUser', userId })
            } catch (err) {
                console.log('userStore: Error in removeUser', err)
                throw err
            }
        },
        async updateUser({ commit }, { user }) {
            try {
                user = await userService.update(user);
                commit({ type: 'setUser', user })
            } catch (err) {
                console.log('userStore: Error in updateUser', err)
                throw err
            }

        }

    }
}