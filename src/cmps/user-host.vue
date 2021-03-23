<template>
  <section>

      <el-tabs class="user-status-btns" v-model="userStatus" >
          <el-tab-pane  class="inbox" label="Inbox" name="inbox"></el-tab-pane>
          <el-tab-pane  class="reservations" label="Reservations" name="reservations"></el-tab-pane>
          <el-tab-pane class="listing" label="Listing" name="listing"></el-tab-pane>
      </el-tabs>
      
      <div>
        <user-host v-if="hostCurrTab === 'inbox'" :hostOrders="user" />
        <single-stay-order v-if="hostCurrTab === 'reservations'" :singleStayOrder="stay" />
        <user-dashboard v-if="hostCurrTab === 'Listings'" :hostStays="user" />
      </div>
    <!-- ORDERS REQUEST -->
      <host-orders :host="host" />
    <!-- LIST OF HOUSES REQUEST -->
      <host-stays :host="host" />
  </section>
</template>

<script>
import hostOrders from "./host-orders";
import hostStays from "./host-stays";
import SingleStayOrder from './single-stay-order.vue';
export default {
 
 props: ["host"],
  data(){
    hostCurrTab=null;
  },
  created(){
    this.hostStays='inbox'
  },
    components: {
      hostOrders,
      hostStays,
      SingleStayOrder
    },
};
</script>

<
        SingleStayOrderstyle>
</style>