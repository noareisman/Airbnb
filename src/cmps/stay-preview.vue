<template>
  <section class="preview-card space-preview">
    <div> 

      <!-- <slide-img stayImg:stay.imgUrls /> -->
      <img @click="toDetails(stay._id)"
        class="stay-img slider"
        :src="require(`@/assets/imgs/airbnb-imgs/${stay.imgUrls[Imgidx]}.jpg`)"
      />
  
      <button @click="changeImg(-1)" class="img-btn prev-img"> &#60;</button>
      <button @click="changeImg(1)" class="img-btn next-img">	&#62; </button>
    </div>
    <div class="card-info">
      <img v-if="!isLiked" @click="ToggleLike(stay)" class="like-btn" src="../assets/imgs/icons/heart.png"> 
      <img v-else @click="ToggleLike(stay)" class="like-btn" src="../assets/imgs/icons/fillheart.png"> 
      <star-rating :reviews="stay.reviews" />
      <!-- <span>⭐{{ stay.reviews[0].avgRate }}</span> -->
      <span> {{ stay.name }}</span>
      <span> {{ summary }}</span>
      <span> {{ price }}</span> 
    </div>
  </section>
</template>
            
<script>
import slideImg from '../cmps/slide-img.vue'
import starRating from "../cmps/star-rating.vue";

export default {
  name: "stay-preview",
  props: {
    stay: Object,
  },
  data(){
    return{
      Imgidx:0,
      isLiked:false
    }
  },
  methods:{
    toDetails(stayId){
        this.$router.push(`/stay/${stayId}`);

    },
    changeImg(val){
      if(this.Imgidx===0 && val ===-1) this.Imgidx = this.stay.imgUrls.length-1
      else if(this.Imgidx===4 && val ===1)this.Imgidx = 0
      console.log(this.Imgidx, 'imgidx' , val, 'val')
      this.Imgidx +=val
    },
    ToggleLike(stayId){
      if(this.isLiked){
        //add to Liked array in  
      }else{
        //remove from liked array in user
      }
          this.isLiked = !this.isLiked

    },
    
  },
  computed: {
    summary() {
      return this.stay.summary.substring(0, 25) + `...`;
    },
    price() {
      return "$" + this.stay.price + "/ Night";
    },
  },
  components:{
        starRating,
        slideImg

  }
};
</script>

