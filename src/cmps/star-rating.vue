<template>
  <section v-if="reviews" class="star-rating">
    <span class="star-container"><img class="star-img" src="../assets/imgs/icons/star.png">
<p>{{ avgRateFromAllReviewers }}({{ reviews.length }}) </p></span>
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
      const sum=this.reviews.reduce((acc, currVal)=>{
      acc+=currVal.avgRate
      return acc
      },0)
      return sum/reviews.length
    }
  }
};
</script>