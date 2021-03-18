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

    <button value='traveler' @click="changeStat">Travveler</button>
    <button value='host' @click="changeStat">Host</button>
    <div>
      <user-host v-if="userStatus === 'host'" :user="user" />
      <user-dashboard v-if="userStatus === 'traveler'" :user="user" />
    </div>
  </section>
</template>

<script>
import userHost from '../cmps/user-host.vue';
import userDashboard from '../cmps/user-dashboard.vue';

export default {
  data(){
    return {
      user: this.$store.getters.loggedinUser,
      userStatus: 'traveler'
    }
  },
  methods: {
     async doLogout() {
      await this.$store.dispatch({ type: "logout" });
      this.$router.push("/");
    },
    changeStat(ev){
      this.userStatus = ev.target.value;
    }
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
  created(){
    this.user = this.$store.getters.loggedinUser;
  },
  components:{
    userHost,
    userDashboard
  }
};
</script>

<style>
</style>