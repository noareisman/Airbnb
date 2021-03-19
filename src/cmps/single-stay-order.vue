<template>
  <ul>
    <li v-for="order in singleStayOrders" :key="order._id">
      <div v-if="order.status === 'approve'">
        <div>
          <h3>Guest name:&nbsp;</h3>
          <p>{{ order.buyer.fullname }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["stay"],
  data() {
    return {
      stayOrders: null,
    };
  },
  methods: {
    loadOrders() {
      //   console.log(this.$store.getters.orders);
      //   console.log(this.stay);
      this.stayOrders = this.$store.getters.orders.filter((order) => {
        return order.stay._id === this.stay._id;
      });
      console.log(this.stay.name, this.stayOrders);
    },
  },
  computed: {
    singleStayOrders() {
      if (!this.stayOrders || !this.stayOrders.length) return;
      return this.stayOrders;
    },
  },
  created() {
    this.loadOrders();
  },
};
</script>

<style>
</style>