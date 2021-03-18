<template>
  <section>
    <h2>Pending / Accepted reservations:</h2>
    <ul>
      <li
        v-for="reserv in user.myReservations" :key="reserv.id" class="reservation" >
        <h3>{{ reserv.name }}</h3>
        <button v-if="reserv.status === 'pending'" class="reject">X</button>
        <button class="approve">V</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
    props: ['user']
};
</script>

<style>
</style>