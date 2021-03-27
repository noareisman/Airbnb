<template>
  <section>

<div class="block">
    <span class="demonstration">Switch when indicator is hovered (default)</span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in stayImg" :key="item">
    <img :src="`@/assets/imgs/airbnb-imgs/2.2a.jpg`">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>

  </section>
</template>

<script>
export default {
    name:'slideImg',
          props: {
    stayImg: Array,
  },

  created(){
  }

}
</script>