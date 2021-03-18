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
            Adults:&nbsp;	{{ order.guests.adults }}, Kids:&nbsp;{{ order.guests.kids }}
          </div>
          <p>{{order.stay.name}}</p>
          <button class="reject">X</button>
          <button class="approve">V</button>
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
  },
  created() {
    this.loadOrders();
  },
};
</script>

<style>
</style>