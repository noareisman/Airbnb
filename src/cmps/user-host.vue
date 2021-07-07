<template>
  <section>
      <el-tabs class="user-status-btns" v-model="hostCurrTab" >
          <el-tab-pane  class="inbox" label="Inbox" name="inbox"></el-tab-pane>
          <el-tab-pane class="host-stays" label="Bookings" name="host-stays"></el-tab-pane>
          <el-tab-pane class="add-stay" label="Add a list" name="add-stay"></el-tab-pane>
          <el-tab-pane class="statistics" label="Statistics" name="user-statistics"></el-tab-pane> 
      </el-tabs>
      <div>
        <host-orders v-if="hostCurrTab === 'inbox'" :host="host" />
        <host-stays v-if="hostCurrTab === 'host-stays'" :host="host" />
        <add-stay v-if="hostCurrTab === 'add-stay'" :host="host" />
        <user-statistics v-if="hostCurrTab === 'user-statistics'" class="user-statistics" />
      </div>
  </section>
</template>

<script>
import hostOrders from "./host-orders";
import hostStays from "./host-stays";
import addStay from './add-stay.vue';
import userStatistics from './user-statistics.vue';
export default {
 name:'user-host',
 props: ['host'],
  data(){
    return{ 
    hostCurrTab:'inbox'
    }
  },
    components: {
      userStatistics,
      hostOrders,
      hostStays,
      addStay
    },
};
</script>
