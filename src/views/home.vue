<template>
  <section class="home main-layout">
    <section class="hero full main-layout">
      <hero />
    </section>
    <h2 class="location-header">Explore locations</h2>
    <div class="card-container">
      <div class="location">
        <router-link class="router" :to="`/stay/?location=Barcelona`">
          <img
            class="explore-img"
            src="../assets/imgs/explore-location/barcelona.jpg"
          />
          <p class="location-txt">Barcelona</p>
        </router-link>
      </div>
      <div class="location">
        <router-link class="router" :to="`/stay/?location=New York`">
          <img
            class="explore-img"
            src="../assets/imgs/explore-location/new-york.jpg"
          />
          <p class="location-txt">New York</p>
        </router-link>
      </div>
      <div class="location">
        <router-link class="router" :to="`/stay/?location=paris`">
          <img
            class="explore-img"
            src="../assets/imgs/explore-location/paris.jpg"
          />
          <p class="location-txt">Paris</p>
        </router-link>
      </div>
    </div>
    <about />
    <home-bannar />
  </section>
</template>

<script>
// @ is an alias to /src

import hero from "../cmps/hero.vue";
import about from "../cmps/about.vue";
import homeBannar from "../cmps/bannar";
export default {
  name: "home",
  methods: {

  },
  components: {
    hero,
    about,
    homeBannar,
  },
};
</script>
