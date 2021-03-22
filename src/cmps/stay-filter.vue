<template>
  <section>
    <div ref="wrapper" class="wrapper flex" :class="{out:isOpen}">
      <span class="box">
        <div class="location">
          <span class="title">Location</span>
          <advanced-search
            v-model="model"
            @input.native="copyData"
            :options="options"
            style="border: none"
            class="advanced-input-section desc"
            placeholder="Where are we going?"
          />
        </div>
      </span>
      <span class="box">
        <div class="location">
          <span class="title">Dates</span>
          <date-picker @pick="datePick" />
        </div>
      </span>
      <span class="box">
        <div class="guests">
          <span class="title">Guests</span>
          <input
            v-model="filterBy.guests"
            type="text"
            placeholder="1 Guest"
            class="desc"
            @click="openGuests"
          />
          <el-input-number
            v-model="filterBy.guests"
            v-if="isGuests"
            size="mini"
            style="position: absolute; top: 60px"
          ></el-input-number>
        </div>
      </span>

      <div @click="submitSearch" class="search-icon">
        <div class="btn-search">
          <img src="../assets/imgs/icons/icon-search.png" />
        </div>
      </div>
    </div>
 
      <div v-if="isOpen" class="secondary wrapper">
      <span class="box">
        <div class="location">
          <span class="title">Location</span>
          <advanced-search
            v-model="model"
            @input.native="copyData"
            :options="options"
            style="border: none"
            class="advanced-input-section desc"
            placeholder="Where are we going?"
          />
        </div>
      </span>
      <span class="box">
        <div class="location">
          <span class="title">Dates</span>
          <date-picker @pick="datePick" />
        </div>
      </span>
      <span class="box">
        <div class="guests">
          <span class="title">Guests</span>
          <input
            v-model="filterBy.guests"
            type="text"
            placeholder="1 Guest"
            class="desc"
            @click="openGuests"
          />
          <el-input-number
            v-model="filterBy.guests"
            v-if="isGuests"
            size="mini"
            style="position: absolute; top: 60px"
          ></el-input-number>
        </div>
      </span>

      <div @click="submitSearch" class="search-icon">
        <div class="btn-search">
          <img src="../assets/imgs/icons/icon-search.png" />
        </div>
      </div>
    </div>

      <div @click="openSearch" class="search-btn-sticky" v-if="isSticky">
         <span v-if="filterBy.location" class="title-sticky"> 
           {{filterBy.location}} </span>  
           <span v-else class="title-sticky"> Start Searching</span>
       <div  class="search-icon sticy-search-icon">
        <div class="btn-search">
          <img src="../assets/imgs/icons/icon-search.png" />
        </div>
      </div>
      </div>

  </section>
</template>

<script>
import datePicker from "../cmps/date-picker.vue";
import AdvancedSearch from "vue-advanced-search";

export default {
  name: "stayFilter",
  data() {
    return {
      isSticky: false,
      isOpen:false,
      filterBy: {
        location: "",
        startDate: "",
        endDate: "",
        guests: 1,
      },
      isGuests: false,
      model: [],
      options: [
        { label: "barcelona", value: "barcelona" },
        { label: "paris", value: "paris" },
        { label: "new york", value: "new york" },
        { label: "porto", value: "porto" },
      ],
    };
  },
  methods: {
    datePick(date) {
      this.filterBy.startDate = date[0];
      this.filterBy.endDate = date[1];
    },
    openGuests() {
      this.isGuests = !this.isGuests;
    },
    async submitSearch() {
      const filterBy = JSON.parse(JSON.stringify(this.filterBy));
      if (this.$route.path === "/") await this.$router.push("/stay");
      await this.$store.dispatch({ type: "loadStays", filterBy });
    },
    copyData(ev) {
      this.filterBy.location = ev.target.value;
    },
    checkOffset() {
      if(!this.$refs.wrapper) return
      const sticky = this.$refs.wrapper.offsetTop
      if (window.pageYOffset > sticky) {
        this.isSticky=true;
      } else {
        this.isSticky=false;
      }
         this.isOpen = false;

    },
    openSearch(){
       this.isSticky=false;
      this.isOpen = true;
      console.log('open search')
    }
  },
  computed:{
    searchName(){
      const filter = this.$store.getters.currentFilter
      console.log(filter)
      if(filter.location) return filter.location
      else return "Start Searching" 
    }
  },
  created() {
    window.onscroll = () => {
     this.checkOffset();
    };
  },
  destroyed(){
  },
  
  components: {
    datePicker,
    AdvancedSearch,
  },
};
</script>
<style src="vue-advanced-search/dist/AdvancedSearch.css">
</style>
