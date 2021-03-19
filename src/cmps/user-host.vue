<template>
  <section>
    <!-- ORDERS REQUEST -->
    <section>
      <user-reservations :user="user" />
    </section>

    <!-- LIST OF HOUSES REQUEST -->
    <section>
      <user-stays :user="user" />
    </section>
  </section>
</template>

<script>
import userReservations from "./user-reservations.vue";
import userStays from "./user-stays.vue";
export default {
  props: ["user"],
  components: {
    userReservations,
    userStays,
  },
};
</script>

<style>
</style>