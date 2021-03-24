<template>
  <section class="img-grid-container">
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
