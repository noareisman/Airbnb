<template>
  <section class="img-grid-container">
      
    <el-carousel class="stay-details-img-carousel-container" :autoplay="false" height="200px" indicator-position="none">
      <el-carousel-item
        style="background-color: #fff"
        v-for="(img, idx) in imgs"
        :key="idx"
      >
          <img
            class="stay-img-prev stay-details-img-prev"  
            :src= imgLink(img)
          />

            <!-- <img
        v-if="!isLiked"
        title="Save To Favorites"
        @click="toggleLike()"
        class="like-btn"
        src="../assets/imgs/icons/heart.png"
      />
      <img
        v-else
        title="Remove From Favorites"
        @click="toggleLike()"
        class="like-btn"
        src="../assets/imgs/icons/fillheart.png"
      /> -->
      </el-carousel-item>
    </el-carousel>
      <ul class="stay-details-img-grid-container">
        <img v-for="(img,idx) in imgs" :key="idx" class="stay-img"
            :src="imgLink(img)">
      </ul>
  </section>
</template>

<script>
export default {
  name: "stay-img-gallery",
  props: {
    // isLiked:Boolean,
    imgs: Array,
  },
  // data(){
  //   return{
  //     isLiked: false
  //   }
  // },
  methods:{
    // toggleLike(stay) {
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
    //   toggleLike() {
    //     this.$emit('toggleLike')
    //   if (this.isLiked) {
    //     this.class = "save-btn btn fas fa-heart";
    //   } else {
    //     this.class = "save-btn btn far fa-heart";
    //   }
    // },
    imgLink(img){
      if (img.startsWith('http')) {
        return imgUrl
      }else{
        return require(`@/assets/imgs/airbnb-imgs/${img}.jpg`)
      }
    }
    // isSrcHttp(){
    //   return (imgs[0].startsWith('http'))
    // }

  }
};
</script>
