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
          <input type="text" placeholder="where are you going?" class="desc" />
        </div>
      </span>
      <div class="search-icon">
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
        guests: 0,
      },
    };
  },
  methods: {
    datePick(date) {
      this.filterBy.startDate = date[0];
      this.filterBy.endDate = date[1];
      console.log(date);
    },
  },
  components: {
    datePicker,
  },
};
</script>

<style>
</style>