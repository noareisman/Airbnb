<template>
  <section class="host-order-container">
    <h2 class="reservations-title">Pending / Accepted reservations:</h2>
    <section class="host-orders">
      <h2 class="NoReserv"
        v-if="
          !orders.filter((order) => order.status === 'pending') ||
          !orders.filter((order) => order.status === 'pending').length
        "
      >
       No reservations at the moment
      </h2>
      <ul>
        <li
          v-for="order in orders.filter((order) => order.status === 'pending')"
          :key="order.id"
          class="host-order"
        >
          <h3 class="respons-buyer">{{ order.buyer.fullname }}</h3>
          <div class="host-order-bio cell-1">
            <h3 class="order-respons-buyer">{{ order.buyer.fullname }}</h3>
            <h3 class="respons-dates">Dates:</h3>
            <p>{{ order.startDate }}-{{ order.endDate }}</p>
          </div>
          <div class="host-order-bio cell-2">
            <h3>Stay at:&nbsp;</h3>
            <p>"{{ order.stay.name }}"</p>
          </div>
          <div class="host-order-bio cell-3">
            <h3>Guests:</h3>
            <p>
              Adults:&nbsp; {{ order.guests.adults }}, Kids:&nbsp;{{
                order.guests.kids
              }}
            </p>
          </div>
          <div class="host-order-btns flex">
            <button @click="changeOrderStat($event, order)" class="approve">
              Approve
              <!-- ✔️ -->
            </button>
            <!-- <p class="slash">/</p> -->
            <button @click="changeOrderStat($event, order)" class="reject">
              Reject
              <!-- ❌ -->
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
      return this.$store.getters.getHostOrders;
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