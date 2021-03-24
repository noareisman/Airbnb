<template>
  <section class="user-details">
    <section class="user-profile">
      <div>
        <img :src="user.imgUrl" alt="User profile IMG" />
      </div>
      <h2>{{ userName }}</h2>
      <small>Joined in {{ userCreationTime }}</small>
    </section>
    <section class="user-back-office">
       <el-tabs class="user-status-btns" v-model="userStatus" >
          <el-tab-pane class="host" label="Host" name="host"></el-tab-pane>
          <el-tab-pane label="Traveler" name="traveler"></el-tab-pane>
          <el-tab-pane label="Statistics" name="statistics"></el-tab-pane>

      </el-tabs>
      
      <div>
        <user-host v-if="userStatus === 'host'" :host="user" />
        <user-dashboard v-if="userStatus === 'traveler'" :user="user" />
        <user-statistics class="user-statistics" v-if="userStatus === 'statistics'" :user="user" />
      </div>
    </section>
  </section>
</template>

<script>
import userHost from "../cmps/user-host.vue";
import userStatistics from "../cmps/user-statistics.vue";
import userDashboard from "../cmps/user-dashboard.vue";

export default {
  data() {
    return {
      userStatus: null,
    };
  },
  computed: {
    userName() {
      return this.user.fullname;
    },
    user() {
      return this.$store.getters.loggedinUser;
    },
    userCreationTime() {
      return "June 2010";
    }
  },
  created() {
    this.userStatus = "host";
  },
  components: {
    userHost,
    userDashboard,
    userStatistics
  },
};
</script>