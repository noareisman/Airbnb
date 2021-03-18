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
};
</script>