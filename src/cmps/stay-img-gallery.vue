<template>
  <section class="img-grid-container">
      <ul class="stay-details-img-grid-container">
        <img v-for="img in imgs" :key="img" class="stay-img"
            :src="require(`@/assets/imgs/airbnb-imgs/${img}.jpg`)">
      </ul>
  </section>
</template>

<script>
export default {
  name: "stay-img-gallery",
  props: {
    imgs: Array,
  },
};
</script>
