<template>
  <section>
      <h1>stay details</h1>
      <trip-setting/>
  </section>
</template>

<script>

import tripSetting from '../cmps/trip-settings.vue'
import reviewList from '../cmps/reviewList.vue'
import { stayService } from "../services/stay.service.js";
import reviewList from "@/cmps/review-list.vue";

export default {
  components:{
    tripSetting,
    reviewList

  }
  }
</script>

<style>

</style>


<template>
  <section
    v-if="toy"
    class="toy-details main-container flex align-center space-evenly"
    :style="direction"
  >
    <div class="info-container flex column space-between">
      <h2>{{ toy.name }}</h2>
      <div class="details-info">
        <!-- <h3>id:</h3>
        <h4>{{ toy._id }}</h4> -->
        <h3>{{ $t("message.price") }}</h3>
        <h4>{{ formattedPrice }}</h4>
        <h3>{{ $t("message.type") }}:</h3>
        <h4>{{ toy.type }}</h4>
        <h3>{{ $t("message.in-stock") }}:</h3>
        <h4>{{ toy.inStock }}</h4>
        <h3>{{ $t("message.created-at") }}:</h3>
        <h4>{{ date }}</h4>
      </div>
      <div class="flex space-between align-center">
        <router-link class="btn back" to="/toy">{{
          $t("message.back")
        }}</router-link>
        <button @click="addReview" class="btn confirm">{{ $t("message.add-review") }}</button>
      </div>
    </div>
    <div class="img-container">
      <img class="details-img" :src="imgSrc" />
    </div>
    <review-list v-if="reviews" class="review-accordion" :reviews="reviews" :pageSize="3"/>
  </section>
</template>

<script>

export default {
  name: "toyDetails",
  data() {
    return {
      toy: null,
      reviews : null
    };
  },
  created() {
    const toyId = this.$route.params.toyId;
    toyService.getById(toyId).then((toy) => (this.toy = toy));
    this.setReviews(toyId);
  },
  methods: {
    addReview() {
      this.$router.push("/details/review/" + this.toy._id);
    },
    async setReviews(toyId){
      this.reviews = await reviewService.query({toyId})
    }
  },
  computed: {
    date() {
      return new Date(this.toy.createdAt).toLocaleDateString("he-IS");
    },
    imgSrc() {
      return require(`@/assets/imgs/${this.toy.url}`);
    },
    direction() {
      return this.$store.getters.direction;
    },
    formattedPrice() {
      const { locale, currency, multiplier } = this.$store.getters.getLocale;
      const price = this.toy.price * multiplier;
      return (
        "locale", price.toLocaleString(locale, { style: "currency", currency })
      );
    },

  },

};
</script>
