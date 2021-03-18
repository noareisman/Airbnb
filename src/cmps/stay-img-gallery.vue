<template>
  <section>
    <img class="main-img"
      :src="require(`@/assets/imgs/airbnb-imgs/${img}.jpg`)"/>
    <div class="secondary-imgs">
      <ul class="stay-details-img-grid-container">
        <li v-for="img in imgs" :key="img">
          <img class="stay-img"
            :src="require(`@/assets/imgs/airbnb-imgs/${img}.jpg`)"/>
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
};
</script>
