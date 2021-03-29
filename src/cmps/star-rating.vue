<template>
  <section v-if="reviews" class="star-rating">
    <span class="star-container">  
      <p class="star-txt"><i class="fas fa-star"></i> 
          {{avgRateFromAllReviewers}}
          (1{{ reviews.length }})
      </p>
      </span>
  </section>
</template>

<script>
export default {
  name: "star-rating",
  props: {
    reviews: Array,
    add:String
  },
  computed: {
    avgRateFromAllReviewers() {
      if (this.reviews) {
        let sum = this.reviews.reduce((acc, currVal) => {
          acc += currVal.avgRate;
          return acc;
        }, 0);
        return parseFloat(sum / this.reviews.length).toFixed(1);
      }
    },
  },
};
</script>