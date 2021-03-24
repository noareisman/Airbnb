<template>
  <section>

      <el-tabs class="user-status-btns" v-model="hostCurrTab" >
          <el-tab-pane  class="inbox" label="Inbox" name="inbox"></el-tab-pane>
          <el-tab-pane class="host-stays" label="Listing" name="host-stays"></el-tab-pane>
          <!-- <el-tab-pane  class="reservations" label="Reservations" name="reservations"></el-tab-pane> -->
          <el-tab-pane class="add-stay" label="Add a list" name="add-stay"></el-tab-pane>
          <!-- <el-tab-pane class="statistics" label="Statistics" name="statistics"></el-tab-pane>  -->
      </el-tabs>
      
      <div>
        <host-orders v-if="hostCurrTab === 'inbox'" :hostOrders="host" />
        <host-stays v-if="hostCurrTab === 'host-stays'" :host="host" />
        <!-- <single-stay-order v-if="hostCurrTab === 'reservations'" :singleStayOrder="stay" /> -->
        <add-stay v-if="hostCurrTab === 'add-stay'" :host="host" />
        <!-- <statistics v-if="hostCurrTab === 'Statistics'" :hostStays="user" /> -->
      </div>
  </section>
</template>

<script>
import hostOrders from "./host-orders";
import hostStays from "./host-stays";
import singleStayOrder from './single-stay-order.vue';
import addStay from './add-stay.vue';
export default {
 name:'user-host',
 props: ['host'],
  data(){
    return{ 
    hostCurrTab:'inbox'
    }
  },
    components: {
      hostOrders,
      hostStays,
      singleStayOrder,
      addStay
    },
};
</script>

<
        SingleStayOrderstyle>
</style>