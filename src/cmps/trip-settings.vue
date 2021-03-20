<template>
  <section>
    <form>
      <div class="settings-container flex column center">
      <div class="value-for-money flex space-between">
        <span class="price">{{ price }}/ night</span>
        <star-rating :reviews="stay.reviews"/>
      </div>
        <date-picker :stayId="stay._id" @pick="setDates"></date-picker>
        <guest-settings @pickguests="setGuests"></guest-settings>
        <button class="call-to-action-btn" @click="sendOrderRequest()">
          Check availability
        </button>
      </div>
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
      orderSettings: {
        requestedDates: [],
        guest: {},
        buyer: null,
        totalPrice: 0,
        nightsNum: 5,
        currStay: this.stay,
      },
    };
  },
  methods: {
    setDates(value) {
      const startDate = value[0].split("-").join("/");
      const endDate = value[1].split("-").join("/");
      this.orderSettings.requestedDates = value;
      console.log([startDate, endDate]);
    },
    setGuests(value) {
      this.orderSettings.guest = value;
      console.log(this.orderSettings.guest);
    },
    sendOrderRequest() {
      // console.log('tripSettings', this.orderSettings);
      this.$store.dispatch({ type: "setPendingOrder", orderSettings:this.orderSettings });
    },
  },
  computed: {
    // nights() {
      // this.orderSettings.nightsNum = 5;
      // return this.requestedDates[1]-this.requestedDates[0]/////////////////////////////////////////////////////////////////////////////////////////////////////////
    // },
    price() {
      return "$" + this.stay.price ;
    },
    totalPrice() {
      this.orderSettings.totalPrice = "$" + this.stay.price * this.nightsNum;
    },
  },
  created() {
    this.orderSettings.buyer=this.$store.getters.loggedinUser;

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