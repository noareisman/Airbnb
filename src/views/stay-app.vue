<template>
  <section class="main-layout">
    <div
      class="filter-container flex justify-center align-center scroll-serarch"
    >
      <stay-filter />
    </div>
    <stay-list v-if="staysToShow && staysToShow.length" :stays="staysToShow" />
  </section>
</template>

<script>
import stayFilter from "../cmps/stay-filter.vue";
import stayList from "../cmps/stay-list.vue";
import myHeader from "../cmps/app-header.vue";
export default {
  computed: {
    staysToShow() {
      const x = JSON.parse(JSON.stringify(this.$store.getters.staysForDisplay));
      console.log(x);
      return x;
    },
  },
  created() {
    console.log("created");
    const filterBy = {};
    if (this.$route.query) {
      filterBy.location = this.$route.query.location;
    }
    this.$store.dispatch({ type: "loadStays", filterBy });
  },
  components: {
    stayList,
    stayFilter,
    myHeader,
  },
};
</script>

<style>
</style>