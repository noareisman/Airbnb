<template>
  <section v-if="stay" class="stay-details-container">
    <h1>{{ stay.summary }}</h1>
    <!-- TODO: finish routerLink -->
    <div>
      <star-rating :reviews="stay.reviews" />
      <router-link to="/stay/:id/:location?">{{stay.loc.address}}</router-link>
    </div>
    <div>
      <button class="share-btn">Share</button>
      <button class="save-btn">Save</button>
    </div>
    <div class="img-gallery" :imgs="stay.imgUrls"/>
    <trip-settings/>
    <review-list :reviews="stay.reviews"/>
    <review-categories :reviews="stay.reviews"/>
    <!-- <h1>{{ stay.name }} hosted by {{ host }}</h1> -->
    <!-- <p>Up to {{ guestAmount }}</p> -->

    <!-- <trip-settings /> -->
    <!-- <stay-map :location="stay.loc" /> -->
  </section>
</template>
 
<script>
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
    };
  },
  computed: {
    guestAmount() {
      return;
    },
    host() {
      const hostFirstName = stay.host.fullname;
      return hostFirstName;
    },
  },
  created() {
    const _id = this.$route.params.id;
    stayService.getById(_id).then((stay) => {
      this.stay = stay;
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
  },
};
</script>



