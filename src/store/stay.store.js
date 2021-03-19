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
    },
    actions: {
        async loadStays({ commit, state} , {filterBy} ) {
            console.log(filterBy)
            try {
                const stays = await stayService.query(filterBy)
                console.log(stays);
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
        saveStay({ commit }, { stayId }) {

        },
        checkAvailability(context,stayId){

        },
        sendMsgToHost(context,payload){

        },
        addReview(context,payload){

        }

    }
}