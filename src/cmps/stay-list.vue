

<template>
  <section class="list-container">
    <h1 v-if="place">Places to stay for you in {{place}} </h1>
    <h1 v-else>Places to stay for you </h1>
    <!-- <price-range/> -->
    <div class="sort-container"> 


  <el-button  class="sort-btn" @click="sortBy('price')" round>Price</el-button>
    <!-- <el-button class="sort-btn" @click="sortBy('rate')" round>Popularity</el-button> -->
  </div>
       <div v-if="isPrice"  class="block-range">
    <span class="demonstration">Limit Price</span>
    <el-slider input-size="mini" :max="500" v-model="price"></el-slider>
      <el-button style="color:rgb(175, 175, 175)"  class="search-btn" @click.native="seacrhByPrice">Search</el-button>

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
      place:'',
      price: 0,
      isPrice:false

    }
  },
  methods: {
    changePage(diff) {
      // this.$store.commit("changePage", diff);
    },
    sortBy(sortBy){
      this.isPrice = !this.isPrice
      // if(sortBy === 'price')
      // this.$store.getters.sortByPrice
      // else if(sortBy ==='rate') this.$store.getters.sortByPopularity

    },

    seacrhByPrice(){
      const filterBy = {}
      filterBy.price = this.price
      console.log(filterBy)
       this.$store.dispatch({ type: "loadStays", filterBy  });

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
