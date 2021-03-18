<template>
  <section>
    <!-- ORDERS REQUEST -->
    <section class="reservations">
      <reservations />
    </section>

    <!-- LIST OF HOUSES REQUEST -->
    <section>
      <stay-to-host :user="user" />
    </section>
  </section>
</template>

<script>
import reservations from "../cmps/reservations.vue";
import stayToHost from "../cmps/stay-to-host.vue";
export default {
  props: ['user'],
  components: {
    reservations,
    stayToHost,
  }
};
</script>

<style>
</style>