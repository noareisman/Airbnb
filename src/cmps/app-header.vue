<template>
  <header class="full main-layout header-container">
    <div class="nav-container">
      <el-menu
        class="el-menu-demo menu-flex"
        style="border: none; border: none"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <router-link class="router" :to="`/`">
            <img
              class="logo-img"
              :src="require(`@/assets/imgs/icons/HomeAwaylogo.svg`)"
              alt="img not found"
            />
            <!-- <span class="logo txt"> HomeAway </span> -->
          </router-link>
        </el-menu-item>
        <el-menu-item index="4"> </el-menu-item>
      </el-menu>

      <div class="header-right-corner flex">
        <router-link class="router explore-nav" :to="`/stay`">
          <span @click="reloadStays" class="txt"> Explore </span>
        </router-link>
        <!-- <div class="new-host">Become a host</div> -->
        <!-- < class="new-host" :to=`/user/${loggedInUser._id}>Become a host</div> -->
        <!-- <router-link v-if="loggedinUser" class="new-host" :to="`/user/$loggedInUser._id}`">Become a host</router-link> -->
        <span class="new-host" @click="becomeHost()">Become a host</span>
        <user-selections />
      </div>
    </div>
  </header>
</template>
<script>
import userSelections from "../cmps/user-selections.vue";
export default {
  name: "app-header",
  data() {
    return {
      // loggedinUser: null,
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {},
    async reloadStays() {
      await this.$store.dispatch({ type: "loadStays" });
    },
    becomeHost() {
        if (
          this.loggedinUser &&
          this.$route.path !== `/user/${this.loggedinUser._id}`
        ) {
          this.$router.push(`/user/${this.loggedinUser._id}`);
        } else {
          this.$router.push("/login");
        }
      }
    },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  components: {
    userSelections,
  },
};
</script>