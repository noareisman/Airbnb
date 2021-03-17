<template>
<section> 
  
  <stay-filter/>
  <h1> stay app </h1>
  <stay-list/>
</section>
</template>

<script>
import stayFilter from '../cmps/stay-filter.vue';

import stayList from "../cmps/stay-list.vue";
export default {



components:{
  stayList,
stayFilter
}
}


</script>

<style>

</style>