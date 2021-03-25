<template>
  <section class="home main-layout">

    <section class="hero full main-layout">
      <hero />
    </section>
    <h2 class="location-header">Populate locations</h2>
    <div class="card-container">
      <div class="location">
        <router-link class="router" :to="`/stay/?location=Barcelona`">
          <img
            class="explore-img"
            src="../assets/imgs/explore-location/barcelona.jpg"
          />
          <p class="location-txt">Barcelona</p>
        </router-link>
      </div>
      <div class="location">
        <router-link class="router" :to="`/stay/?location=New York`">
          <img
            class="explore-img"
            src="../assets/imgs/explore-location/new-york.jpg"
          />
          <p class="location-txt">New York</p>
        </router-link>
      </div>
      <div class="location">
        <router-link class="router" :to="`/stay/?location=paris`">
          <img
            class="explore-img"
            src="../assets/imgs/explore-location/paris.jpg"
          />
          <p class="location-txt">Paris</p>
        </router-link>
      </div>
    </div>
      <h1 class="location-header Populate-header"> Populate Location</h1>
    <div v-if="staysPop" class="top-location"> 

      <div class="home-pop" v-for="stay in staysPop" :key="stay._id" :stay="stay" > 
        
         <section class="preview-card space-preview">
        <router-link class="router" :to="`/stay/${stay._id}`">
          <img
            class="explore-img"
            :src="require(`@/assets/imgs/airbnb-imgs/${stay.imgUrls[0]}.jpg`)"
          />
        </router-link>

    <div class="card-info">
      <star-rating :reviews="stay.reviews" />
      <span>
        {{ stay.name }} -
        <span class="stay-address"> {{ stay.loc.address }} </span>
      </span>

    </div>
  </section>
        
        
        </div>



    </div>
    <about />
    <home-bannar />
  </section>
</template>

<script>
// @ is an alias to /src

import hero from "../cmps/hero.vue";
import about from "../cmps/about.vue";
import homeBannar from "../cmps/bannar";
import StayPreview from '../cmps/stay-preview.vue';
import starRating from '../cmps/star-rating.vue';
export default {
  name: "home",
  data(){
    return{
      staysPop:null
    }
  },
  computed:{
  //  async staysPop(){
  //     const filterBy = {}
  //     const stays = await this.$store.dispatch({ type: "loadStays", filterBy });
  //     console.log(stays)
  //     return stays.splice(0,3)
  //     console.log(stays)
  //   }
  },
 async created(){
   const filterBy = {}
    const stays = await this.$store.dispatch({ type: "loadStays", filterBy }); 
    this.staysPop = stays.splice(0,3)
  },
  components: {
    hero,
    about,
    homeBannar,
    StayPreview,
    starRating
  },
};
</script>
