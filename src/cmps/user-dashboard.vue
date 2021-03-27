<template>
  <section class="user-dashboard-container">
    <h2 class="dash-title">{{ user.fullname }} Favorites</h2>

    <section v-if="!likes.length" class="no-fav-container">
      <h2 class="no-fav-title">No Favorite</h2>
      <p>There is no favorite at the moment,</p>
      <p>to add some,</p>
      <router-link class="router explore-fav-btn" :to="`/stay`">
        <el-button
          title="Explore"
          type="primary"
          icon="el-icon-star-off"
          circle
        ></el-button>
      </router-link>
    </section>

    <el-row v-else>
      <div class="sort-container">
        <el-button class="sort-btn" @click="sortBy('price')" round
          >Price</el-button
        >
        <el-button class="sort-btn" @click="sortBy('rate')" round
          >Popularity</el-button
        >
      </div>

      <div class="home-pop" v-for="stay in likes" :key="stay._id" :stay="stay">
        <section class="preview-card space-preview">
          <router-link class="router" :to="`/stay/${stay._id}`">
            <img
              class="explore-img"
              :src="require(`@/assets/imgs/airbnb-imgs/${stay.imgUrls[0]}.jpg`)"
            />
          </router-link>

          <img
            title="Remove From Favorites"
            @click="ToggleLike(stay)"
            class="like-btn"
            src="../assets/imgs/icons/fillheart.png"
          />

          <div class="card-info">
            <star-rating :reviews="stay.reviews" />
            <span>
              {{ stay.name }} -
              <span class="stay-address"> {{ stay.loc.address }} </span>
            </span>

            <span>
              <span class="price-bold"> {{ stay.price }} </span> /Night</span
            >
          </div>
        </section>
      </div>
    </el-row>
  </section>
</template>

<script>
import starRating from "../cmps/star-rating.vue";
export default {
  props: ["user"],

  methods: {
    async ToggleLike(stay) {
      if (!this.$store.getters.loggedinUser) {
        Swal.fire("Its better to sign in :)");
        return;
      }
      try {
        await this.$store.dispatch({ type: "toggleLike", stay });
      } catch (err) {
        console.log(err);
      }
    },
    sortBy(sortBy) {
      if (sortBy === "price") this.$store.getters.sortByPrice;
      else if (sortBy === "rate") this.$store.getters.sortByPopularity;
    },
  },

  computed: {
    likes() {
      const likes = this.$store.getters.getAllUserLike;
      return likes;
    },
  },
  components: {
    starRating,
  },
};
</script>

<style>
</style>