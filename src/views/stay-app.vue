<template>
<section> 
  
  <stay-filter/>
  <h1> stay app </h1>
  <stay-list v-if="staysToShow && staysToShow.length" :stays="staysToShow"/>
</section>
</template>

<script>
import stayFilter from '../cmps/stay-filter.vue';
import stayList from "../cmps/stay-list.vue";
export default {

  computed: {
    staysToShow() {
      const x =  JSON.parse(JSON.stringify(this.$store.getters.staysForDisplay));
      console.log(x)
      return x
    },
  }, 
 created() {
   console.log('created')
    this.$store.dispatch({ type: "loadStays" });
  },
components:{
stayList,
stayFilter
}
}


</script>

<style>
</style>