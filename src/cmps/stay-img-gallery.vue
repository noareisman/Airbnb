<template>
  <section class="img-grid-container">
      
    <el-carousel class="stay-details-img-carousel-container" :autoplay="false" height="200px" indicator-position="none">
      <el-carousel-item
        style="background-color: #fff"
        v-for="(img, idx) in imgs"
        :key="idx"
      >
          <img
            class="stay-img-prev"  
            :src= imgLink(img)
          />
      </el-carousel-item>
    </el-carousel>
      <ul class="stay-details-img-grid-container">
        <img v-for="(img,idx) in imgs" :key="idx" class="stay-img"
            :src="imgLink(img)">
      </ul>
      <!-- <ul v-else class="stay-details-img-grid-container">
        <img v-for="(img,idx) in imgs" :key="idx" class="stay-img"
            :src="require(`@/assets/imgs/airbnb-imgs/${img}.jpg`)">
      </ul> -->
  </section>
</template>

<script>
export default {
  name: "stay-img-gallery",
  props: {
    imgs: Array,
  },
  methods:{
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
