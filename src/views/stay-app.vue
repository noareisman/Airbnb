<template>
<section> 
  
  <stay-filter/>
  <h1> stay app </h1>
  <stay-list/>
</section>
</template>

<script>
import StayFilter from '../components/stay-filter.vue';

import stayList from "../components/stay-list.vue";
export default {



components:{
  stayList,
StayFilter
}
}


</script>

<style>

</style>