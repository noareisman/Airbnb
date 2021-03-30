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
            class="date-picker flex center"
            :stayId="stay._id"
            @pick="setDates"
          ></date-picker>
          <guest-settings
            class="guest-picker"
            @pickguests="setGuests"
          ></guest-settings>
        </div>

        <button v-if="!isTotalPriceClalculable" class="special-btn">
          <span class="middle-level">
            <span class="inner-level" @mousemove="mousemove" :style="mousePos">
              {{ mousePos }}
            </span>
          </span>
          <span class="special-btn-txt">Check availability</span>
        </button>

        <div v-else class="reservation-summary flex column center">
          <button class="special-btn" @click="sendOrderRequest()">
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
const Swal = require("sweetalert2");

export default {
  props: {
    stay: Object,
  },
  data() {
    return {
      msg:false,
      // mousePos:null,
      mouseX: 0,
      mouseY: 0,
      serviceFee: 10,
      orderSettings: {
        requestedDates: [],
        guest:{
            adultsNum:1,
            childrenNum:0,
            infantsNum:0,
        },
        buyer: null,
        totalPrice: 0,
        nightsNum: 5,
        currStay: this.stay,
      },
      isTotalPriceClalculable: false,
    };
  },
  methods: {
    setDates(value) {
      console.log(value)
      this.calcNightsNum(value)
      const startDate = value[0].split("-").join("/");
      const endDate = value[1].split("-").join("/");
      this.orderSettings.requestedDates = [startDate,endDate];
      this.isTotalPriceClalculable = true;
    },
    calcNightsNum(value){
      var start = value[0].split("-")
      var end = value[1].split("-")
      start = (new Date(start[2], start[1] - 1, start[0])).getTime();
      end = (new Date(end[2], end[1] - 1, end[0])).getTime();
      this.orderSettings.nightsNum=Math.round((end-start)/1000/3600/24)
    },
    setGuests(value) {
      this.orderSettings.guest = value;
    },
    async sendOrderRequest() {
      // console.log('tripSettings', this.orderSettings);
      try {
        console.log(this.orderSettings, 'this.orderSettings')
        await this.$store.dispatch({
          type: "setPendingOrder",
          orderSettings: this.orderSettings,
        });
        this.open1()
      } catch (err) {
        console.log(this.orderSettings, 'this.orderSettings')
        console.log("could not send order request", err);
        this.open4();
      }
    },
    open1() {
        this.$notify({
          title: 'Reservation sent successfully',
          message: 'Final order confirmation will be sent by mail',
          type: 'success',
          position:'bottom-right'
        });
      },
      
      open4() {
        this.$notify.error({
          title: 'Error',
          message: 'Please Try Again later'
        });
      },
    
    mousemove(e) {
      this.mouseX = e.offsetX;
      this.mouseY = e.offsetY;
      // this.mousePos= `{background-position: calc((100 - var(${this.mouseX}, 0)) * 1%) calc((100 - var(${this.mouseY}, 0)) * 1%)}`
      // console.log(this.mouseX);
    },
  },
  computed: {
    nights() {
      return (this.orderSettings.nightsNum = 5);
    
    },
    price() {
      return this.stay.price;
    },
    priceCalc() {
      var priceCalc = this.stay.price * this.orderSettings.nightsNum;
      this.orderSettings.totalPrice = priceCalc + this.serviceFee;
      return priceCalc;
    },
    mousePos() {
      // console.log(
      //   `background-position: calc((100 - var(${this.mouseX}, 0)) * 1%) calc((100 - var(${this.mouseY}, 0)) * 1%)`
      // );
      return {backgroundPosition: `${this.mouseX * 100}% ${this.mouseY * 100}% `}
      // return {backgroundPosition: `calc((100 - var(${this.mouseX}, 0)) * 1%) calc((100 - var(${this.mouseY}, 0)) * 1%)`}
    },
  },
  created() {
    this.orderSettings.buyer = this.$store.getters.loggedinUser;
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
  color: #ff385c;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>