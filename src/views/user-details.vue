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

    <section class="user-back-office">
      <div class="user-status-btns">
        <button value="host" @click="changeStat">Host</button>
        <button value="traveler" @click="changeStat">Traveler</button>
      </div>
      <div>
        <user-host v-if="userStatus === 'host'" :user="user" />
        <user-dashboard v-if="userStatus === 'traveler'" :user="user" />
      </div>
    </section>
  </section>
</template>

<script>
import userHost from "../cmps/user-host.vue";
import userDashboard from "../cmps/user-dashboard.vue";

export default {
  data() {
    return {
      userStatus: "traveler",
    };
  },
  methods: {
    doLogout() {
      this.$router.push("/");
      this.$store.dispatch({ type: "logout" });
    },
    changeStat(ev) {
      this.userStatus = ev.target.value;
    },
  },
  computed: {
    userName() {
      return this.user.fullname;
    },
    user() {
      return this.$store.getters.loggedinUser;
    },
    userCreationTime() {
      // return this.loggedinUser. ?creation time?
      return "June 2010";
    },
  },
  // created() {
  //   this.user = this.$store.getters.loggedinUser;
  // },
  components: {
    userHost,
    userDashboard,
  },
};
</script>

<style>
</style>