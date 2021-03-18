<template>
  <section class="home main-layout">
    <section class="hero full main-layout">
      <hero />
    </section>
    <h2 class="location-header">Explore locations</h2>
    <div class="card-container">
      <div class="location">
        <img
          class="explore-img"
          src="../assets/imgs/explore-location/barcelona.jpg"
        />
        <p class="location-txt">Barcelona</p>
      </div>
      <div class="location">
        <img
          class="explore-img"
          src="../assets/imgs/explore-location/new-york.jpg"
        />
        <p class="location-txt">New York</p>
      </div>
      <div class="location">
        <img
          class="explore-img"
          src="../assets/imgs/explore-location/paris.jpg"
        />
        <p class="location-txt">Paris</p>
      </div>
    </div>
    <about />
  </section>
</template>

<script>
// @ is an alias to /src

import hero from "../cmps/hero.vue";
import about from "../cmps/about.vue";
export default {
  name: "home",
  components: {
    hero,
    about,
  },
};
</script>
