<template>
  <section class="">
    <span class="star-container"><img class="star-img" src="../assets/imgs/icons/star.png">
<p> {{ reviews.avgRate }}({{ reviews.length }}) </p></span>
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
      const sum=this.reviews.reduce(acc,this.reviews.avgRate)
    }
  },
  created(){
    console.log(this.reviews);
  }
};
</script>