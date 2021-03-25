<template>
    <section class="stay-order-details">
      <div class="stay-order-headlines">
          <div class="cell"><h3>Name</h3></div>
          <div class="cell"><h3>Guests</h3></div>
          <div class="cell check"><h3>Check in</h3></div>
          <div class="cell check"><h3>Check out</h3></div>
          <div class="cell check-respons"><h3>Check in/out</h3></div>
      </div>

      <div class="stay-full-orders">
        <div class="single-stay-order" v-for="order in singleStayOrders" :key="order._id">
          <div class="cell" v-if="order.status === 'approve'">
            <b>{{ order.buyer.fullname }}</b>
          </div>
          <div class="cell" v-if="order.status === 'approve'">
            <p>
              Adults:&nbsp;{{ order.guests.adults }} <span class="super-line">|</span> Kids: &nbsp;{{
                order.guests.kids
              }}
            </p>
          </div>
          <div class="cell date" v-if="order.status === 'approve'">
            <p>{{ order.startDate }}</p>
          </div>
          <div class="cell date" v-if="order.status === 'approve'">
            <p>{{ order.endDate }}</p>
          </div>
          
          <div class="cell dates-respons" v-if="order.status === 'approve'">
            <p>{{ order.startDate }}</p>
            <p>{{ order.endDate }}</p>
          </div>
        </div>
      </div>
    </section>
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