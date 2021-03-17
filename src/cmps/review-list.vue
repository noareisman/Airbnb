<template>
  <section>
    <h1>Reviews</h1>
    <ul class="review-card-grid">
      <li v-for="review in reviews" :key="review._id">
        <stay-preview :review="review"></stay-preview>
      </li>
    </ul>
  </section>
</template>

<script>
import stayPreview from "../cmps/review-preview.vue";

export default {
  name: "review-list",
  props: {
    reviews: Array,
  },
  methods: {
  },
  components: {
    stayPreview,
  },
};
</script>