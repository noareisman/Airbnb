<template>
  <section>
    <!-- ORDERS REQUEST -->
      <host-orders :host="host" />
    <!-- LIST OF HOUSES REQUEST -->
      <host-stays :host="host" />
  </section>
</template>

<script>
import hostOrders from "./host-orders";
import hostStays from "./host-stays";
export default {
  props: ["host"],
  components: {
    hostOrders,
    hostStays,
  },
};
</script>

<style>
</style>