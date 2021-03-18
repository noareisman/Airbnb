<template>
  <section>
    <span>⭐{{ reviews.avgRate }}({{ reviews.length }})</span>
  </section>
</template>

<script>
export default {
  name: "star-rating",
  props: {
    reviews: Array,
  },
  computed(){
    avgRateFromAllReviewers(){
      const sum=this.reviews.reduce(acc,this.reviews.avgRate)
    }
  },
  created(){
    console.log(this.reviews);
  }
};
</script>