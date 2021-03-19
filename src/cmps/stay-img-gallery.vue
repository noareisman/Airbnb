<template>
  <section class="img-grid-container">
    <img
      class="main-img"
      :src="require(`@/assets/imgs/airbnb-imgs/${primaryImg}.jpg`)"
    />
    <div class="secondary-imgs">
      <ul class="stay-details-img-grid-container">
        <li v-for="img in secondaryImgs" :key="img">
          <img
            class="stay-img"
            :src="require(`@/assets/imgs/airbnb-imgs/${img}.jpg`)"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "stay-img-gallery",
  props: {
    imgs: Array,
  },
  data() {
    return {
      primaryImg: this.imgs[0],
      secondaryImgs : imgs.slice(1,imgs.length-1)
    };
  },
};
</script>
