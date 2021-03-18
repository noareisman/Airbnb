<template>
  <section class="user-details">
    <section class="user-profile">
      <div>
        <img src="" alt="User profile IMG" />
      </div>
      <h2>Hello, {{ userName }}</h2>
      <small>Joined in {{ userCreationTime }}</small>
      <br />
      <button @click="doLogout">Logout</button>
    </section>
    <section class="reservations">
      <h2>Pending / Accepted reservations:</h2>
      <ul>
        <li v-for="reserv in user.myReservations" :key="reserv.id" class="reservation">
            <h3>{{ reserv.name }}</h3>
            <button v-if="reserv.status === 'pending'" class="reject">X</button>
            <button class="approve">V</button>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  props: ["loggedinUser"],
  data() {
    return {
      user: null,
    };
  },
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
  created() {
    this.user = this.loggedinUser;
  },
};
</script>

<style>
</style>