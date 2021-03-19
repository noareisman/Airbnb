import { stayService } from '../services/stay.service.js';


export const stayStore = {
    state: {
        stays: [],
        filterBy: {},
        // currStay
    },
    getters: {
        staysForDisplay(state) {
            return state.stays;
        }
    },

    mutations: {
        setStays(state, { stays }) {
            state.stays = stays;

        },

        updateStays(state, { updatedStay }) {
            const idx = state.stays.findIndex(({ _id }) => _id === updatedStay._id);
            state.stays.splice(idx, 1, updatedStay);
            console.log(updatedStay)
        }
    },
    actions: {
        async loadStays({ commit, state }, { filterBy }) {
            try {
                const stays = await stayService.query(filterBy)
                commit({
                    type: 'setStays',
                    stays
                });
                return stays
            } catch (err) {
                console.log('from Store: Cannot load stays', err);
                throw new Error('Cannot load stays');
            }
        },
        // loadStay?
        async toggleLike(context, { stay }) {
            const user = context.getters.loggedinUser;
            if (!stay.favorites) stay.favorites = []; //initialize array of favorites
            const isLiked = stay.favorites.some((element) => { //help to decide if to push the like or splice 
                return element.userId === user._id;
            });
            if (!isLiked) stay.favorites.push({ userId: user._id }); 
            else {
                const idx = stay.favorites.findIndex(
                    (entity) => entity._id === user._id
                );
                stay.favorites.splice(idx, 1);
            }
            console.log(user)
            console.log()

            try {
                const updatedStay = await stayService.save(stay)
                context.commit({ type: 'updateStays', updatedStay })
            }
            catch (err) {
                console.log('cannt update stay')
                throw err
            }
        },
        checkAvailability(context, stayId) {

        },
        sendMsgToHost(context, payload) {

        },
        addReview(context, payload) {

        }

    }
}