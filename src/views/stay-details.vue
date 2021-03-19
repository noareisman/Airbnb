<template>
  <section v-if="stay" class="stay-details-container">
    <h1>{{ stay.summary }}</h1>
    <!-- TODO: finish routerLink -->
    <div>
      <star-rating :reviews="stay.reviews" />
      <!-- <router-link to="/stay/:id:location?">{{stay.loc.address}}</router-link> -->
    </div>
    <div>
    <i class="share-btn btn fas fa-share-square">Share</i>
    <i class="save-btn btn fas fa-heart" style="color:#ca4c4c" v-if="isLiked" @click="toggleLike()">Save</i>
    <i class="save-btn btn far fa-heart" v-if="!isLiked" @click="toggleLike()">Save</i>
    </div>
    <div class="img-gallery" :imgs="stay.imgUrls"/>
    <h1>{{ stay.name }} hosted by {{ stay.host.fullname }}</h1>
    <p>Up to {{ guestAmount }}</p>
    <img class="thumb-img" :src="stay.host.imgUrl"/>
    <stay-amenities :stay="stay"/>
    <trip-settings :stay="stay"/>
    <review-list :reviews="stay.reviews"/>
    <review-categories :reviews="stay.reviews"/>
    <div>Contact host
    <el-input
  type="textarea"
  :rows="2"
  placeholder="Please input"
  v-model="textarea">
</el-input>
<button class="call-to-action-btn">Send message</button>
</div>
    <!-- <stay-map :location="stay.loc" /> -->
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

export default {
  name: "stay-details",
  data() {
    return {
      stay: null,
      textarea: '',
      isLiked:false,
      stayOrders:
    };
  },
  methods:{
    toggleLike(){
      this.isLiked = !this.isLike
      if(this.isLiked){
        this.class="save-btn btn fas fa-heart"
        this.$store.dispatch('saveStay',this.stay.id)
      }else{
        this.class="save-btn btn far fa-heart"
        this.$store.dispatch('unsaveStay',this.stay._id)
      }
    },
  },
  computed: {
    guestAmount() {
      if (this.stay.capacity>1) {
        return this.stay.capacity.toString()+' guests' 
      }else{
        return this.stay.capacity.toString()+' guest'
      }
    },
  },
  created() {
    const _id = this.$route.params.id;
    stayService.getById(_id).then((stay) => {
      this.stay = stay;
    getStayOrders(stay.id){
this.$store.getters.
    }
    });
  },
  components: {
    stayImgGallery,
    tripSettings,
    reviewList,
    stayService,
    stayMap,
    reviewCategories,
    starRating,
    stayAmenities
  },
};
</script>



