<template>
  <section>
    <div class="wrapper flex">
      <span class="box">
        <div class="location">
          <span class="title">Location</span>
          <input
            v-model="filterBy.location"
            type="text"
            placeholder="where are you going?"
            class="desc"
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
          <input v-model="filterBy.guests" type="text" placeholder="1 Guest" class="desc" @click="openGuests"/>
              <el-input-number v-model="filterBy.guests" v-if="isGuests" size="mini" style="position:absolute; top:60px;"></el-input-number>
        </div>
      </span>
      <div @click="submitSearch" class="search-icon">
        <div class="btn-search">
          <img src="../assets/imgs/icons/icon-search.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import datePicker from "../cmps/date-picker.vue";
export default {
  name: "stayFilter",
  data() {
    return {
      filterBy: {
        location: "",
        startDate: "",
        endDate: "",
        guests: 1,
      },
      isGuests:false
    };
  },
  methods: {
    datePick(date) {
      this.filterBy.startDate = date[0];
      this.filterBy.endDate = date[1];
      console.log(date);
    },
      openGuests(){
      console.log(this.isGuests)
       this.isGuests = !this.isGuests
    },
    async submitSearch(){
      const filterBy = JSON.parse(JSON.stringify(this.filterBy))
          const stays =  await this.$store.dispatch({type:"loadStays", filterBy })
      
    }
  },
  computed:{
  
  },
  components: {
    datePicker,
  },
};
</script>

<style>
</style>