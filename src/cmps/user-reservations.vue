<template>
  <section>
    <h2>Pending / Accepted reservations:</h2>
    <ul>
      <li v-for="order in orders" :key="order.id">
        <div v-if="order.status === 'pending'" class="reservation">
          <h2>{{ order.buyer.fullname }}</h2>
          <p>{{ order.startDate }}-{{ order.endDate }}</p>
          <div>
            <h4>Guests:</h4>
            Adults:&nbsp; {{ order.guests.adults }}, Kids:&nbsp;{{
              order.guests.kids
            }}
          </div>
          <p>{{ order.stay.name }}</p>
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
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      orders: null,
    };
  },
  methods: {
    async loadOrders() {
      await this.$store.dispatch({
        type: "loadOrders",
        user: { ...this.user },
      });
      this.orders = this.$store.getters.orders;
    },
    changeOrderStat(event, order) {
      order = JSON.parse(JSON.stringify(order));

      switch (event.target.className) {
        case "reject":
          order.status = "deny";
          this.$store.dispatch({ type: "updateOrderStatus", order });
          break;
        case "approve":
          order.status = "approve";
          this.$store.dispatch({ type: "updateOrderStatus", order });
          break;
      }
    },
  },
  created() {
    this.loadOrders();
  },
};
</script>

<style>
</style>