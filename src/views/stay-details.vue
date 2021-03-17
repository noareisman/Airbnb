<template>
   <section v-if="stay" class="stay-details main-container flex align-center space-between">
       <h1>{{stay.summary}}</h1>
       <!-- TODO: finish routerLink -->
       <!-- <router-link to="/stay/:id/:location?">{{stay.loc.address}}</router-link> -->
       <button class="share-btn">Share</button>
       <button class="save-btn">Save</button>
       <div class="stay-details-img-grid">
          <img class="primary-stay-img" :src="require(`@/assets/imgs/airbnb-imgs/${this.stay.imgs[0]}.jpg`)"/>
          <ul class="stay-details-secondary-img-grid">
              <li v-for="img in stay.imgs" :key="img">
                <img class="secondary-stay-img" :src="require(`@/assets/imgs/airbnb-imgs/${img}.jpg`)"/>
              </li>
          </ul>
        </div>
        <h1>{{stay.name}} hosted by {{host}}</h1>
        <p>Up to {{guestAmount}}</p>

        
        <trip-settings/>
        <stay-map :location="stay.loc"/>
    </section>
</template>

<script>
import tripSettings from '../cmps/trip-settings.vue'
import reviewList from '../cmps/review-list.vue'
// import { stayService } from "../services/stay.service.js";

export default {
  name:"stay-details",
  props:{
    stay:Object
  },
  data(){
    return{

    }
  },
  computed:{
    guestAmount(){
      return 
    },
    host(){
      const hostFirstName= stay.host.fullname.split(" ")[0];
      return hostFirstName;
    }



  },
   components:{
     tripSettings,
     reviewList
   }

}
</script>



