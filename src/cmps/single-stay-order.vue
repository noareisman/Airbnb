<template>
    <table>
      <thead>
        <tr>
          <td><h3>Guest name</h3></td>
          <td><h3>Guests</h3></td>
          <td><h3>Check in</h3></td>
          <td><h3>Check out</h3></td>
        </tr>
      </thead>
      <tbody>
      <h2 v-if="!singleStayOrders || !singleStayOrders.length">
        No orders for this place...
      </h2>
        <tr v-for="order in singleStayOrders" :key="order._id">
          <td v-if="order.status === 'approve'">
            <b>{{ order.buyer.fullname }}</b>
          </td>
          <td v-if="order.status === 'approve'">
            <p>
              Adults:&nbsp;{{ order.guests.adults }} | Kids: &nbsp;{{
                order.guests.kids
              }}
            </p>
          </td>
          <td v-if="order.status === 'approve'">
            <p>{{ order.startDate }}</p>
          </td>
          <td v-if="order.status === 'approve'">
            <p>{{ order.endDate }}</p>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  props: ["stay"],
  computed: {
    /////////////////////////////Noa: I think  maybe you can get it filtered
    ////////////////////straight from the store I wrote there a function just like it
    stayOrders() {
      return this.$store.getters.getHostOrders.filter((order) => {
        return order.stay._id === this.stay._id;
      });
      // return this.$store.getters.getCurrStayOrders;
    },
    singleStayOrders() {
      if (!this.stayOrders || !this.stayOrders.length) return;
      return this.stayOrders;
    },
  },
};
</script>

<style>
</style>