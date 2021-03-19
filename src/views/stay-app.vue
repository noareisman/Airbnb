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
      return JSON.parse(JSON.stringify(this.$store.getters.staysForDisplay));
    },
  },
  created() {
    console.log("created");
    var filterBy = {};
    if (this.$route.query) {
      filterBy.location = this.$route.query.location;
    }
      console.log("🚀 ~ file: stay-app.vue ~ line 29 ~ created ~ filterBy", filterBy)
    this.$store.dispatch({ type: "loadStays", filterBy });
  },

//   watch: { 
//      'this.$route': {
//         handler: function() {
//            console.log($route.params)
//         },
//         deep: t rue,
//         immediate: true
//       }
// },

  components: {
    stayList,
    stayFilter,
    myHeader,
  },
};
</script>

<style>
</style>