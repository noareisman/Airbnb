<template>
  <ul>
    <li v-for="stay in stays" :key="stay._id" class="user-stay">
      <h2>{{ stay.name }}</h2>
      <div class="user-stay-img">
        <img
          :src="require(`@/assets/imgs/airbnb-imgs/${stay.imgUrls[0]}.jpg`)"
          alt="img not find"
        />
      </div>
      <single-stay-order :stay="stay" />
    </li>
  </ul>
</template>

<script>
import singleStayOrder from '../cmps/single-stay-order.vue';

export default {
  props: ["host"],
  // data() {
  //   return {
  //     stays: null,
  //   };
  // },
  computed:{
    stays(){
      return this.$store.getters.staysForDisplay
    }
  },
  methods: {
    async loadStays() {
      const stays = await this.$store.dispatch({
        type: "loadStays",
        filterBy: this.host,
      });
      // this.stays = stays;
    }
  },
  created() {
    this.loadStays();
  },
  components:{
    singleStayOrder
  }
};
</script>
<style>
</style>