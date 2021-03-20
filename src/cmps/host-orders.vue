<template>
  <section>
    <h2>Pending / Accepted reservations:</h2>
    <section class="host-orders">
      <h2
        v-if="
          !orders.filter((order) => order.status === 'pending') ||
          !orders.filter((order) => order.status === 'pending').length
        "
      >
        No reservations to show...
      </h2>
      <ul>
        <li
          v-for="order in orders.filter((order) => order.status === 'pending')"
          :key="order.id"
          class="host-order"
        >
          <div class="host-order-bio cell-1">
            <h2>{{ order.buyer.fullname }}</h2>
            <p>{{ order.startDate }}-{{ order.endDate }}</p>
          </div>
          <div class="host-order-bio cell-2">
            <h4>Stay at:&nbsp;</h4>
            <p>"{{ order.stay.name }}"</p>
          </div>
          <div class="host-order-bio cell-3">
            <h4>Guests:</h4>
            <p>
              Adults:&nbsp; {{ order.guests.adults }}, Kids:&nbsp;{{
                order.guests.kids
              }}
            </p>
          </div>
          <div class="host-order-btns">
            <button @click="changeOrderStat($event, order)" class="reject">
              X
            </button>
            <button @click="changeOrderStat($event, order)" class="approve">
              V
            </button>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  props: ["host"],
  // data() {
  //   return {
  //     orders: null,
  //   };
  // },
  computed: {
    orders() {
      return this.$store.getters.orders;
    },
  },
  methods: {
    async loadOrders() {
      await this.$store.dispatch({
        type: "loadHostOrders",
        host: { ...this.host },
      });
      // this.orders = this.$store.getters.orders;
    },
    async changeOrderStat(event, order) {
      order = JSON.parse(JSON.stringify(order));

      switch (event.target.className) {
        case "reject":
          order.status = "deny";
          await this.$store.dispatch({ type: "updateOrderStatus", order });
          break;
        case "approve":
          order.status = "approve";
          await this.$store.dispatch({ type: "updateOrderStatus", order });
          break;
      }
      this.loadOrders();
      this.$emit("reloadStays");
    },
  },
  created() {
    this.loadOrders();
  },
};
</script>

<style>
</style>