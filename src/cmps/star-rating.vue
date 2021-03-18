<template>
  <section v-if="reviews" class="star-rating">
    <span class="star-container"><img class="star-img" src="../assets/imgs/icons/star.png">
<p> {{ avgRateFromAllReviewers }}({{ reviews.length }}) </p></span>
  </section>
</template>

<script> 
export default {
  name: "star-rating",
  props: {
    reviews: Array,
  },
  computed:{
    avgRateFromAllReviewers(){
      const sum=this.reviews.reduce((acc, currVal)=>{return acc+=this.reviews.avgRate},0)
      const avg= sum/reviews.length
      return avg
    }
  },
  created(){
    console.log(this.reviews);
  }
};
</script>