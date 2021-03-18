import { stayService } from '../services/stay.service.js';


export const stayStore = {
    state: {
        stays: [],
        // filterBy: {}
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
<<<<<<< HEAD
        async loadStays({ commit, state} , {filterBy} ) {
            try {
                const stays = await stayService.query(filterBy)
                
=======
        async loadStays({ commit, state }, { filterBy }) {
            try {
                const stays = await stayService.query(filterBy)

>>>>>>> 60e4545312596ec33f59000f9ea24829438c94ae
                commit({
                    type: 'setStays',
                    stays
                });

            } catch (err) {
                console.log('from Store: Cannot load stays', err);
                throw new Error('Cannot load stays');
            }
        },
        // loadStay?
        saveStay({ commit }, { stay }) {

        }

    }
}