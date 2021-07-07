<template>
  <section class="host-order-container">
    <h2 class="reservations-title">Pending Reservations</h2>
    <section class="host-orders">
      <p
        class="noReserv"
        v-if="
          !orders.filter((order) => order.status === 'pending') ||
          !orders.filter((order) => order.status === 'pending').length
        "
      >
        No reservations at the moment
      </p>
      <ul class="all-host-orders">
        <li
          v-for="order in orders.filter((order) => order.status === 'pending')"
          :key="order.id"
          class="host-order"
        >
          <h3 class="order-buyer-mobile">{{ order.buyer.fullname }}</h3>
          <div class="order-details cell-1">
            <h3 class="order-buyer">{{ order.buyer.fullname }}</h3>
            <h3 class="response-dates">Dates:</h3>
            <p>{{ order.startDate }}-{{ order.endDate }}</p>
          </div>
          <div class="order-details cell-2">
            <h3>Stay at:&nbsp;</h3>
            <p>"{{ order.stay.name }}"</p>
          </div>
          <div class="order-details cell-3">
            <h3>Guests:</h3>
            <p>
              Adults:&nbsp; {{ order.guests.adults }},<br class="br" />
              Kids:&nbsp;{{ order.guests.kids }}
            </p>
          </div>
          <div class="host-order-btns flex align-center cell-4">
              <button @click="changeOrderStat($event, order)" class="approve">
                Approve
              </button>
              <button @click="changeOrderStat($event, order)" class="reject">
                Reject
              </button>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import { socketService } from "../services/socket.service.js";
export default {
  props: ["host"],
  computed: {
    orders() {
      return this.$store.getters.getHostOrders;
    },
  },
  methods: {
    async loadOrders() {
      console.log(this.host);
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
      this.$emit("reloadStays");
      this.loadOrders();
      socketService.emit("updateAns", order);
    },
  },

  created() {
    this.loadOrders();
  },
};
</script>
