<template>
  <section>
    <stay-filter />
    <h1>stay app</h1>
    <stay-list />
  </section>
</template>

<script>
import StayFilter from "../cmps/stay-filter.vue";

import stayList from "../cmps/stay-list.vue";
export default {
  components: {
    stayList,
    StayFilter,
  },
};
</script>

<style>
</style>