<template>
  <section>
    <h2>Pending / Accepted reservations:</h2>
    <ul>
      <!-- <li v-for="order in orders" :key="order.id" class="reservation">
        <h3>{{ order.name }}</h3>
        <button v-if="order.status === 'pending'" class="reject">X</button>
        <button class="approve">V</button>
      </li> -->
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      orders: null,
    };
  },
  methods: {
    loadOrders() {
    //   this.$store.dispatch({ type: "loadOrders" });
    //   this.orders = this.$store.getters.orders;
    },
  },
  created() {
    this.loadOrders();
  },
};
</script>

<style>
</style>