<template>
  <section v-if="stay" class="stay-details-container main-layout">
    <div class="stay-details-title flex column">
      <div class="stay-title-primary">{{ stay.summary }}</div>
      <div class="stay-title-secondary flex space-between">
        <div class="left flex space-between">
          <star-rating :reviews="this.reviews" /> <span> · </span>
        <!-- TODO: finish routerLink -->
          <router-link to="/stay/:id:location?">{{stay.loc.address}}</router-link>
        </div>
        <div class="right flex space-between">
          <button class="btn flex center space-evenly action-btn"><i class="share-btn btn fas fa-share-square"></i><span>Share</span></button>
          <button class="btn flex center space-evenly action-btn" v-if="isLiked" @click="toggleLike()"><i class="save-btn btn fas fa-heart" style="color: #ca4c4c"></i><span>Save</span></button>
          <button class="btn flex center space-evenly action-btn" v-if="!isLiked" @click="toggleLike()"><i class="save-btn btn far fa-heart"></i><span>Save</span></button>
        </div>
      </div>
    </div>
    <stay-img-gallery class="img-gallery" :imgs="stay.imgUrls" />
      <div class="flex space-between">
        <div class="stay-description bottom-border">
          <div class="stay-desctiption-title flex space-between bottom-border">
            <div>
              <h2>{{ stay.name }} hosted by {{ stay.host.fullname }}</h2>
              <p>Up to {{ guestAmount }}</p>
            </div>
            <img class="thumb-img" :src="stay.host.imgUrl" />
          </div>
          <div class="description-section flex column bottom-border">
          <div class="description-txt">Come to discover my appartment in the middle of Paris. It is located in the 18th, near Montmartre and close to the Moulin Rouge.
            This apartment can accommodate up to 8 people, it is on the 3rd floor (with a large lift) and is very well equipped.
            This accommodation is surrounded by shops for shopping, bakeries, groceries but also restaurants and bars ... Do not hesitate any more!</div>
           <a href="#msg" class="contact-host-btn underline">Contact Host</a>
          </div>
          <div>
          <stay-amenities :stay="stay" />
           <!-- <button @click="chatModal" class="contact-host-btn underline">Contact Host</button> -->
          </div>
        </div>

        <trip-settings class="trip-settings" :stay="stay" />
      </div>
      <div>
        <!-- <el-input
          type="textarea"
          :rows="2"
          placeholder="Please input"
          v-model="contactHostMsg"
        >
        </el-input>
        <button class="call-to-action-btn" @click="contactHost()">
          Send message
        </button> -->
      </div> 
    <div class="review-section bottom-border">
    <review-categories :reviews="this.reviews" />
    <review-list :reviews="this.reviews" />
    <review-add @postReview="postReview"></review-add>
    </div>

    <div> 
      <!-- Contact host
      <el-input
        type="textarea"
        :rows="2"
        placeholder="Please input"
        v-model="contactHostMsg"
      >
      </el-input>
      <button class="call-to-action-btn" @click="contactHost()">
        Send message
      </button> -->

       <!-- <button class="call-to-action-btn" @click="chatModal">
        send message to
      </button> -->
          <pop-up> 
            <!-- @updateToy="updateToy"  -->
      <!-- <app-chat id="msg" :stay="stay" slot="main" /> -->
    </pop-up> 
    </div>


    <stay-map :location="stay.loc" />
  </section>
</template> 
 
<script>
import stayAmenities from "../cmps/stay-amenities.vue";
import stayImgGallery from "../cmps/stay-img-gallery.vue";
import tripSettings from "../cmps/trip-settings.vue";
import reviewList from "../cmps/review-list.vue";
import reviewCategories from "../cmps/review-categories.vue";
import starRating from "../cmps/star-rating.vue";
import stayMap from "../cmps/stay-map.vue";
import { stayService } from "../services/stay.service.js";
// import { utilService } from "../services/util.service.js";
import appChat from '../cmps/app-chat.vue';
import popUp from '../cmps/pop-up.vue'
import reviewAdd from '../cmps/review-add.vue'

export default {
  name: "stay-details",
  data() {
    return {
      reviews:null,
      onChat: false,
      stay: null,
      contactHostMsg: '',
      review: {
        avgRate: null,
        category: {
          Cleanliness: null,
          Accuracy: null,
          Communication: null,
          Location: null,
          CheckIn: null,
          Accessibility: null,
        },
      },
      isLiked: false,
      stayOrders: [],
      buyer: null,
      host: null,
    };
  },
  methods: {
    contactHost() {
      var msg = {
        txt: this.contactHostMsg,
        buyerId: this.buyer._id,
        hostId: this.stay.host_id,
        stayId: this.stay._id,
        date: Date.now(),
      };
      this.$store.dispatch({ type: "contactHost", msg });
    },
     async postReview(postedReview) {
      var review = {
        txt: postedReview.reviewTxt,
        buyer: this.buyer,
        hostId: this.stay.host._id,
        stay: this.stay,
        time: Date.now(),
        avgRate:postedReview.userReviewAvgRate,
        category:{
          Cleanliness: postedReview.categoryMap.Cleanliness,
          Accuracy: postedReview.categoryMap.Accuracy,
          Communication: postedReview.categoryMap.Communication,
          Location: postedReview.categoryMap.Location,
          CheckIn: postedReview.categoryMap.CheckIn,
          Accessibility: postedReview.categoryMap.Accessibility,
        }
      }; 
      try{
      const updatedStay= await this.$store.dispatch({ type: "postReview",review });
      this.stay=updatedStay;
      }catch(err){
        console.log('could not update stay with new review:',err);
      }
    },
    async toggleLike() {
      this.isLiked = !this.isLiked;
      console.log(this.isLiked )
      if (this.isLiked) {
        this.class = "save-btn btn fas fa-heart";
      } else {
        this.class = "save-btn btn far fa-heart";
      }
      await this.$store.dispatch({ type: "toggleLike", stay: this.stay });
    },

    //   async ToggleLike(stay) {
    //   if (!this.$store.getters.loggedinUser) {
    //     Swal.fire("Its better to sign in :)");
    //     return;
    //   }
    //   try {
    //     await this.$store.dispatch({ type: "toggleLike", stay });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },

  chatModal(){
    this.onChat = !this.onChat
  }
    
  },
  computed: {
    guestAmount() {
      if (this.stay.capacity > 1) {
        return this.stay.capacity.toString() + " guests";
      } else {
        return this.stay.capacity.toString() + " guest";
      }
    },
  },
  created() {
    const _id = this.$route.params.id;
    stayService.getById(_id)
    .then((stay) => {
      if (stay){ 
      this.stay = stay;
      this.stay.host._id;
      this.reviews=stay.reviews
      this.$store.dispatch({ type: "loadAllOrders", stayId: stay._id });
    }});
    if (this.$store.getters.loggedinUser) {
      this.buyer = this.$store.getters.loggedinUser;
    }
  },
  components: {
    stayImgGallery,
    tripSettings,
    reviewList,
    stayService,
    stayMap,
    reviewCategories,
    starRating,
    stayAmenities,
    appChat,
    popUp,
    reviewAdd
  },
};
</script>



