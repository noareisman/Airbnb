<template>
  <section class="review-card">
    <div>
      <img
        class="reviewer-img"
        :src="require(`@/assets/imgs/airbnb-imgs/${stay.imgUrls[0]}.jpg`)"
      />
      <h3>{{ date }}</h3>
      <p>{{ review.txt }}</p>
    </div>
  </section>
</template>
            
<script>
export default {
  name: "review-preview",
  props: {
    review: Object,
  },
  computed: {
    date() {
      return new Date(this.review.createdAt).toLocaleDateString("he-IL");
    },
  },
};
</script>




