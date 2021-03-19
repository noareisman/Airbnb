<template>
  <section>
    <star-rating />
    <form>
      <div class="settings-container flex justify-center items-center">
        <date-picker @pick="setDates"></date-picker>
        <!-- <guest-settings @pickguests="setGuests"></guest-settings> -->
      </div>
      <span class="price">{{ price }}</span>
      <button class="call-to-action-btn">Check Availability</button>
    </form>
  </section>
</template>

<script>
import datePicker from "./date-picker.vue";
import starRating from "./star-rating.vue";
import guestSettings from "./guest-settings.vue";

export default {
  props: {
    stay: Object,
  },
  data() {
    return {
      requestedDates: [],
      guest: {},
    }
  },
  methods: {
    setDates(value) {
      this.requestedDates = value;
      console.log(this.requestedDates);
    },
    setGuests(value) {
      this.guest = value;
      console.log(this.guest);
    },
  },
  computed: {
    price() {
      return "$" + this.stay.price + "/ Night";
    },
  },
  components: {
    datePicker,
    starRating,
    guestSettings,
  },
};
</script>   

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>