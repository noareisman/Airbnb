<template>
  <section>
    <div class="wrapper flex">
      <span class="box">
        <div class="location">
          <span class="title">Location</span>

          <!-- <advanced-search input="copyData"
            v-model="model"
            style="display: block"
            placeholder="where are you going?"
            :options="options"
            class="desc"
          >
          </advanced-search> -->

          <advanced-search
            v-model="model"
            @input.native="copyData"
            :options="options"
            style="border: none"
            class="advanced-input-section"
            placeholder="Where are we going?"
          />

          <!-- <input
            v-model="filterBy.location"
            type="text"
            placeholder="where are you going?"
            class="desc"
          /> -->
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

      <!-- <router-link  class="router search-icon" :to="`/stay/?location=${filterBy.location}&guests=${filterBy.guests}`">
        <div class="btn-search">
          <img src="../assets/imgs/icons/icon-search.png" />
        </div>
      </router-link> -->

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
import AdvancedSearch from "vue-advanced-search";

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
      if(this.$route.path==='/') await this.$router.push('/stay')
      await this.$store.dispatch({ type: "loadStays", filterBy });
    },
    copyData(ev) {
      this.filterBy.location = ev.target.value;
    },
  },
  computed: {},
  components: {
    datePicker,
    AdvancedSearch,
  },
};
</script>
<style src="vue-advanced-search/dist/AdvancedSearch.css">

</style>
