

<template>
  <section class="list-container">
    <h1 v-if="place">Places to stay for you in {{place}} </h1>
    <h1 v-else>Places to stay for you </h1>
    <!-- <price-range/> -->
    <h2> sort By</h2>
    <div class="sort-container"> 
  <el-button class="sort-btn" @click="sortBy('price')" round>Price</el-button>
  <el-button class="sort-btn" @click="sortBy('rate')" round>Popularity</el-button>
  </div>
    <ul  v-if="stays" class="list-card-container">
      <stay-preview
        v-for="stay in stays"
        :key="stay._id"
        :stay="stay"
      />
    </ul>
    <!-- <button @click="changePage(1)">></button>
    <button @click="changePage(-1)">></button> -->
  </section>
</template>

<script>
import stayPreview from "../cmps/stay-preview.vue";
import priceRange from '../cmps/price-range.vue'
export default {
  name: "stay-list",
  props: {
    stays: Array,
  },
    data(){
    return{
      place:''
    }
  },
  methods: {
    changePage(diff) {
      // this.$store.commit("changePage", diff);
    },
    sortBy(sortBy){
      if(sortBy === 'price')
      this.$store.getters.sortByPrice
      else if(sortBy ==='rate') this.$store.getters.sortByPopularity

    }
  },
  mounted() {
    },
  created(){
   this.place = this.$route.query.location
  },
  components: {
    stayPreview,
    priceRange
  },
};
</script>
