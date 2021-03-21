<template>
  <section class="user-details">
    <section class="user-profile">
      <div>
        <img :src="user.imgUrl" alt="User profile IMG" />
      </div>
      <h2>{{ userName }}</h2>
      <small>Joined in {{ userCreationTime }}</small>
      <!-- <div class="user-profile-last-line"> -->
        <!-- <button @click="doLogout">Logout</button> -->
        <!-- <div> -->
        <!-- <span v-if="numOfUserMesseges" class="badge">{{numOfUserMesseges}}</span> -->
        <!-- <i class="fa fa-envelope" style="font-size: 33px"></i> -->
        <!-- </div> -->
      <!-- </div> -->
    </section>
    <section class="user-back-office">
      <div class="user-status-btns ">
        <button class="call-to-action-btn" value="host" @click="changeUserStatus">Host</button>
        <button class="traveler call-to-action-btn" value="traveler" @click="changeUserStatus">Traveler</button>
      </div>
      <div>
        <user-host v-if="userStatus === 'host'" :host="user" />
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
      userStatus: null,
    };
  },
  methods: {
    // doLogout() {
    //   this.$router.push("/");
    //   this.$store.dispatch({ type: "logout" });
    // },
    changeUserStatus(ev) {
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
    // numOfUserMesseges() {
    //   return Object.keys(this.user.messages).length;
    // },
  },
  created() {
    this.userStatus = "host";
  },
  components: {
    userHost,
    userDashboard,
  },
};
</script>

<style>
</style>