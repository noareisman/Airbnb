<template>
  <section class="user-details">
    <section class="user-profile">
      <div>
        <img :src="user.imgUrl" alt="User profile IMG" />
      </div>
      <h2>Hello, {{ userName }}</h2>
      <small>Joined in {{ userCreationTime }}</small>
      <br />
      <button @click="doLogout">Logout</button>
    </section>

    <section class="reservations">
      <reservations  :user="user" />
    </section>
    <section >
      <houses-to-host  />
    </section>
  </section>
</template>

<script>
import reservations from '../cmps/reservations.vue';
import housesToHost from '../cmps/houses-to-host.vue';
export default {
  props: ['user'],
  methods: {
    doLogout() {
      this.$emit("logout");
    },
  },
  computed: {
    userName() {
      return this.user.fullname;
    },
    userCreationTime() {
      // return this.loggedinUser. ?creation time?
      return "June 2010";
    },
  },
  components:{
    reservations,
    housesToHost
  }
};
</script>

<style>
</style>