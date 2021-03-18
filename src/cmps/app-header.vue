<template>
  <header class="full main-layout header-container">
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link class="router" :to="`/`">
          <span class="logo txt"> HomeAway </span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link class="router" :to="`/stay`">
          <span class="txt"> Explore </span>
        </router-link>
      </el-menu-item>
    </el-menu>

    <!-- <section className="loggedin-user" v-if="loggedInUser">
      <router-link :to="`/user/${loggedInUser._id}`">
        {{ loggedInUser.fullname }}
      </router-link>
      <span>{{ loggedInUser.score }}</span>
    </section> -->
    <select @change="changeTo">
      <option v-if="loggedInUser" value="" def>
        Hello {{ loggedInUser.fullname }}
      </option>
      <option v-if="!loggedInUser" value="" def>Hello gust</option>
      <option v-if="!loggedInUser" value="login">Log-in</option>
      <option v-if="loggedInUser" value="profile">My propfile</option>
      <option v-if="loggedInUser" value="logout">Log-out</option>
    </select>
  </header>
</template>
<script>
export default {
  name: "app-header",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
    },
    navTo(dest) {
      this.$router.push(dest);
    },
    async changeTo(ev) {
      switch (ev.target.value) {
        case "login":
          this.$router.push("/login");
          break;
        case "logout":
          await this.$store.dispatch({ type: "logout" });
          this.$router.push("/");
          break;
        case "profile":
          this.$router.push("/user");
          break;
      }
      // ev.target.value;
    },
  },
  computed: {
    loggedInUser() {
      // return this.$store.getters.isUserLogged;
      return this.$store.getters.loggedinUser;
    },
  },
};
</script>