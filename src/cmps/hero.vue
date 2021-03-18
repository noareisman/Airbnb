<template>
  <section>

     <div
        class="filter-container flex justify-center align-center scroll-serarch"
      >
       <stay-filter/>
      </div>
      <div class="h1-container">
        <h1 class="hero-header">Choose</h1>
        <h1 class="hero-header-2">
          Where To Live <span class="dot">. </span>
        </h1>
      </div>


  </section>
</template>

<script>
import stayFilter from '../cmps/stay-filter.vue'
export default {


components:{
  stayFilter
}
}
</script>

<style>

</style>