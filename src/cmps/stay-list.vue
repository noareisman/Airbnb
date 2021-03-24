<template>
  <section class="list-container">
    <h1 v-if="place">Places to stay for you in {{ place }}</h1>
    <h1 v-else>Places to stay for you</h1>
    <!-- <price-range/> -->
    <div class="filter-list-container"> 
    <div class="sort-container">
      <el-button class="sort-btn" @click="searchBy('price')" round
        >Price</el-button
      >
      <el-button class="sort-btn" @click="searchBy('amenities')" round
        > Amenities</el-button
      >
    </div>
    <div class="container-sss"> 


    <div v-if="isPrice" class="block-range">
      <span class="demonstration">Limit Price</span>
      <el-slider input-size="mini" :max="500" v-model="price"></el-slider>
      <button
          class="save-btn-list save-price"
        @click="seacrhByPrice"
        >Search</button>
    </div>
     
  <div v-if="isAmenities">
   
    <el-checkbox-group v-model="amenities" size="small" class="amenities-container">
        <el-checkbox label="TV" ></el-checkbox>
        <el-checkbox label="Wifi" ></el-checkbox>
        <el-checkbox label="Air-conditioning" ></el-checkbox>
        <el-checkbox label="Smoking allowed" ></el-checkbox>
        <el-checkbox label="Pets allowed" ></el-checkbox>
        <el-checkbox label="Cooking basics" ></el-checkbox>
 <button
        class="save-btn-list "
        @click="seacrhByAmenities"
        >Search</button>
    </el-checkbox-group>


</div>
</div> 
     </div>

    <ul v-if="stays" class="list-card-container">
      <stay-preview v-for="stay in stays" :key="stay._id" :stay="stay" />
    </ul>
    <!-- <button @click="changePage(1)">></button>
    <button @click="changePage(-1)">></button> -->
  </section>
</template>

<script>
import stayPreview from '../cmps/stay-preview.vue';
import priceRange from '../cmps/price-range.vue';
export default {
  name: 'stay-list',
  props: {
    stays: Array,
  },
  data() {
    return {
      place: '',
      price: 0,
      isPrice: false,
      isAmenities: false,
      amenities:[],
      // amenities:{
      //   TV:false,
      // }

    };
  },
  methods: {
    changePage(diff) {
      // this.$store.commit("changePage", diff);
    },
    searchBy(value) {
      if (value === 'price') this.isPrice = !this.isPrice;
      else this.isAmenities = !this.isAmenities;

      // if(sortBy === 'price')
      // this.$store.getters.sortByPrice
      // else if(sortBy ==='rate') this.$store.getters.sortByPopularity
    },

    seacrhByPrice() {
      const filterBy = {};
      filterBy.price = this.price;
      this.$store.dispatch({ type: 'loadStays', filterBy });
    },
    seacrhByAmenities(){
      const filterBy = {};
      filterBy.amenities = []
      this.amenities.forEach(amenitie => {
        filterBy.amenities.push(amenitie);
      });
        this.$store.dispatch({ type: 'loadStays', filterBy });
    }
  },
  mounted() {},
  created() {
    this.place = this.$route.query.location;
  },
  components: {
    stayPreview,
    priceRange,
  },
};
</script>
