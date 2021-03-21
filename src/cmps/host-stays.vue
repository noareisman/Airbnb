<template>
  <section class="host-stays-headline">
    <!--REAM: FIND NEW NAME -->
    <h2>Stays:</h2>
    <!--REAM: FIND NEW NAME -->

    <ul class="host-stays">
      <li v-for="stay in stays" :key="stay._id" class="host-stay-and-orders">
        <div class="host-stay">
          <div class="host-stay-img">
            <img
              :src="require(`@/assets/imgs/airbnb-imgs/${stay.imgUrls[0]}.jpg`)"
              alt="img not find"
            />
          </div>
          <h2>{{ stay.name }}</h2>
        </div>

        <single-stay-order :stay="stay" />
      </li>
    </ul>
  </section>
</template>

<script>
import singleStayOrder from "../cmps/single-stay-order.vue";

export default {
  props: ["host"],
  computed: {
    stays() {
      return this.$store.getters.staysForDisplay;
    },
  },
  components: {
    singleStayOrder,
  },
};
</script>
<style>
</style>