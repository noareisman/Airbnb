import { stayService } from '../services/stay.service.js';
import { utilService } from '../services/util.service.js';


export const stayStore = {
    state: {
        stays: [],
        filterBy: {},
        // currStay
    },
    getters: {
        staysForDisplay(state) {
            return state.stays;
        },
        sortByPrice(state){
            state.stays.sort((a,b) =>{
                return a.price - b.price
            })
        },
        sortByPopularity(state){
            state.stays.sort((a,b) =>{
                return  b.favorites.length -  a.favorites.length
            })
        },
        getAllUserLike( state, getters ){
            const userId = getters.loggedinUser._id;
            console.log(userId)
            const stays = []
            state.stays.forEach(stay => {
            stay.favorites.forEach(fav => {
                if(fav.userId === userId){
                    stays.push(stay)
                }
            });
           });
            return stays
           
        },
 
        
    },

    mutations: {
        setStays(state, { stays }) {
            state.stays = stays;

        },

        updateStays(state, { updatedStay }) {
            const idx = state.stays.findIndex(({ _id }) => _id === updatedStay._id);
            state.stays.splice(idx, 1, updatedStay);
            console.log(updatedStay)
        },

    },
    actions: {
        async loadStays({ commit, state }, { filterBy = { location: '', guests: 0 }}) {
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
        postReview(context,{review}){
            var newReview=stayService.getReviewTemplate
            console.log(review);
            newReview={
                currStay:review.stay,
                id:utilService.makeId(),
                txt: review.txt,
                avgRate: review.avgRate,
                category: {
                    Cleanliness: review.category.Cleanliness,
                    Accuracy: review.category.Accuracy,
                    Communication: review.category.Communication,
                    Location: review.category.Location,
                    CheckIn: review.category.CheckIn,
                    Accessibility: review.category.Accessibility
                },
                by: {
                    _id: review.buyer._id,
                    fullname: review.buyer.fullname,
                    imgUrl: review.buyer.imgUrl,
                    time:Date.now()
                }
            }
            console.log(newReview);
            stayService.addReview(newReview,currStay)
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