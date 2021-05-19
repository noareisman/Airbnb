import { stayService } from '../services/stay.service.js';
import { utilService } from '../services/util.service.js';


export const stayStore = {
    state: {
        stays: [],
        filterBy: {},
    },
    getters: {
        staysForDisplay(state) {
            return state.stays;
        },
        sortByPrice(state) {
            return state.stays.sort((a, b) => {
                return a.price - b.price
            })
        },
        sortByPopularity(state){
        return state.stays.sort((a,b) =>{
                return  b.reviews.length -  a.reviews.length
            })
        },
        getAllUserLike(state, getters) {
            const userId = getters.loggedinUser._id;
            const stays = []
            state.stays.forEach(stay => {
                stay.favorites.forEach(fav => {
                    if (fav.userId === userId) {
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
        filterByPrice(state, {price}){
        const staysToShow =  state.stays
         const stays =  staysToShow.forEach(stay => {
              return stay.price < price
          }); 
          return stays
        },

        updateStays(state, { updatedStay }) {
            const idx = state.stays.findIndex(({ _id }) => _id === updatedStay._id);
            state.stays.splice(idx, 1, updatedStay);
        },


    },
    actions: {
        async loadStays({ commit, state }, { filterBy = { location: '', guests: 0 , price: 0, amenities:null }  }) {
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
        async postReview(context, { review }) {
            var newReview = {
                currStay: review.stay,
                id: utilService.makeId(),
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
                    time: Date.now()
                }
            }
            newReview.currStay.reviews.unshift(newReview)
            try{
                const updatedStay= await stayService.save(currStay)
                commit({type:'updateStays',updatedStay})
                return updatedStay
            }catch (err){
                throw err
            }
            // const updatedStay= await stayService.addReview(newReview,currStay)
        },
 


    async toggleLike(context, { stay }) {
        const user = context.getters.loggedinUser; 
        const favIdx = stay.favorites && stay.favorites.findIndex(({userId}) => user._id === userId); 
        if (favIdx >= 0) stay.favorites.splice(favIdx, 1); 
        else stay.favorites = [{userId: user._id}]; 
        try {
            const updatedStay = await stayService.save(stay)
            context.commit({ type: 'updateStays', updatedStay })
            return updatedStay
        } catch (err) {
            console.log('from Store: Cannot toggleLike', err);
            throw new Error('Cannot toggleLike');
        } 
    }
},





    async saveStay(context, { stay }) {
        try {
            const savededStay = await stayService.save(stay)
            return savededStay
        } catch (err) {
            console.log('from Store: Cannot save stay', err);
            throw new Error('Cannot post review');
        }
    },
    // async toggleLike(context, { stay }) {
    //     console.log(context)
    //     const user = context.getters.loggedinUser;
    //     if (!stay.favorites) stay.favorites = []; //initialize array of favorites
    //     const isLiked = stay.favorites.some((element) => { //help to decide if to push the like or splice 
    //         return element.userId === user._id;
    //     });
    //     if (!isLiked) stay.favorites.push({ userId: user._id });
    //     else {
    //         const idx = stay.favorites.findIndex(
    //             (entity) => entity._id === user._id
    //         );
    //         stay.favorites.splice(idx, 1);
    //     }
    //     try {
    //         const updatedStay = await stayService.save(stay)
    //         context.commit({ type: 'updateStays', updatedStay })
    //     }
    //     catch (err) {
    //         console.log('cannt update stay')
    //         throw err
    //     }
    // },

    checkAvailability(context, stayId) {

    },
    sendMsgToHost(context, payload) {

    },

}
