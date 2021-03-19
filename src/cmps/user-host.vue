<template>
  <section>
    <!-- ORDERS REQUEST -->
      <user-orders :user="user" />
    <!-- LIST OF HOUSES REQUEST -->
      <user-stays :user="user" />
  </section>
</template>

<script>
import userOrders from "./user-orders";
import userStays from "./user-stays";
export default {
  props: ["user"],
  components: {
    userOrders,
    userStays,
  },
};
</script>

<style>
</style>