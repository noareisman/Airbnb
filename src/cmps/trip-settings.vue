<template>
  <section>
    <form>
      <div class="settings-container flex column center">
        <div class="value-for-money flex space-between">
          <span
            ><span class="price">${{ price }}</span
            ><span>/ night</span></span
          >
          <star-rating :reviews="stay.reviews" />
        </div>
        <div class="settings flex column align-center">
          <date-picker
            class="date-picker"
            :stayId="stay._id"
            @pick="setDates"
          ></date-picker>
          <guest-settings
            class="guest-picker"
            @pickguests="setGuests"
          ></guest-settings>
        </div>
        <button
          v-if="!isTotalPriceClalculable"
          class="check-availability-btn"
        >
          Check availability
        </button>
        <div v-else class="reservation-summary flex column center">
          <button
            class="call-to-action-btn check-availability-btn"
            @click="sendOrderRequest()"
          >
            Reserve
          </button>
          <p>You won't be charged yet</p>
          <div class="price-calc flex space-between">
            <span class="underline"
              >${{ stay.price }} X {{ orderSettings.nightsNum }} nights</span
            >
            <span>${{ priceCalc }}</span>
          </div>
          <div class="service-fee flex space-between">
            <span class="underline">Service fee</span>
            <span>${{ serviceFee }}</span>
          </div>
          <div class="total-price flex space-between">
            <span>Total</span>
            <span>${{ orderSettings.totalPrice }}</span>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import datePicker from "./date-picker.vue";
import starRating from "./star-rating.vue";
import guestSettings from "./guest-settings.vue";
const Swal = require('sweetalert2')

export default {
  props: {
    stay: Object,
  },
  data() {
    return {
      serviceFee:10,
      orderSettings: {
        requestedDates: [],
        guest: {},
        buyer: null,
        totalPrice: 0,
        nightsNum: 5,
        currStay: this.stay,
      },
      isTotalPriceClalculable:false
    };
  },
  methods: {
    setDates(value) {
      const startDate = value[0].split("-").join("/");
      const endDate = value[1].split("-").join("/");
      this.orderSettings.requestedDates = value;
      console.log([startDate, endDate]);
      this.isTotalPriceClalculable=true;
    },
    setGuests(value) {
      this.orderSettings.guest = value;
      console.log(this.orderSettings.guest);
    },
    async sendOrderRequest() {
      // console.log('tripSettings', this.orderSettings);
    try{ 
      await this.$store.dispatch({ type: "setPendingOrder", orderSettings:this.orderSettings });
      Swal.fire('Your reservation was sent to the host for approval. Final order confirmation will be sent by mail. ')
    }catch(err){
      console.log('could not send order request',err);
      Swal.fire('Failed to set reservation. Try again later. ')
    }
    },
  },
  computed: {
    nights() {
      return this.orderSettings.nightsNum = 5;
      // return this.requestedDates[1]-this.requestedDates[0]/////////////////////////////////////////////////////////////////////////////////////////////////////////
    },
    price() {
      return this.stay.price ;
    },
    priceCalc() {
      var priceCalc= this.stay.price * this.orderSettings.nightsNum;
      this.orderSettings.totalPrice = priceCalc + this.serviceFee
      return priceCalc
      }
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
  color: #FF385C;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>