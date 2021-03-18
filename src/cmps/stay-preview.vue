<template>
  <section class="preview-card space-preview">
    <div> 

      <!-- <slide-img stayImg:stay.imgUrls /> -->
<!-- style="width: 220px" -->
     <el-carousel :autoplay="false"  height="200px"    indicator-position="outside">
      <el-carousel-item style="background-color: #fff"   v-for="item,idx in stay.imgUrls" :key="item">
        <img class="stay-img" :src="require(`@/assets/imgs/airbnb-imgs/${stay.imgUrls[idx]}.jpg`)">
      </el-carousel-item>
    </el-carousel>


      <!-- <img @click="toDetails(stay._id)"
        class="stay-img"
        :src="require(`@/assets/imgs/airbnb-imgs/${stay.imgUrls[Imgidx]}.jpg`)"
      /> -->
  
      <!-- <button @click="changeImg(-1)" class="img-btn prev-img"> &#60;</button>
      <button @click="changeImg(1)" class="img-btn next-img">	&#62; </button> -->
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
      isLiked:false,
      false:false
    }
  },
  methods:{
    toDetails(stayId){
        this.$router.push(`/stay/${stayId}`);

    },
    // changeImg(val){
    //   if(this.Imgidx===0 && val ===-1) this.Imgidx = this.stay.imgUrls.length-1
    //   else if(this.Imgidx===4 && val ===1)this.Imgidx = 0
    //   console.log(this.Imgidx, 'imgidx' , val, 'val')
    //   this.Imgidx +=val
    // },
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


<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

