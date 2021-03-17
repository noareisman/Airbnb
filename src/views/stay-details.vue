<template>
   <section v-if="stay" class="stay-details main-container flex align-center space-between">
       <h1>{{stay.name}}</h1>
       <!-- <router-link :to="/stay"> map page-->
       <div class="stay-details-img-grid">
          <img class="primary-stay-img" :src="require(`@/assets/imgs/airbnb-imgs/${this.stay.imgs[0]}.jpg`)"/>
          <ul class="stay-details-secondary-img-grid">
              <li v-for="img in stay.imgs" :key="img">
                <img class="secondary-stay-img" :src="require(`@/assets/imgs/airbnb-imgs/${img}.jpg`)"/>
              </li>
          </ul>
        </div>
        <trip-settings/>
        <stay-map :location="stay.loc"/>
    </section>
</template>

<script>
import tripSettings from '../cmps/trip-settings.vue'
import reviewList from '../cmps/reviewList.vue'
import { stayService } from "../services/stay.service.js";
import reviewList from '@/cmps/review-list.vue';

export default {
  name:"stay-details",
  props:{
    stay:Object
  },
  data(){
    return{

    }

  },
   components:{
     tripSettings,
     reviewList
   }

}
</script>



