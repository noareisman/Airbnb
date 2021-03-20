<template>
  <section class="user-select">
    <el-dropdown>
      <span class="el-dropdown-link">
        <img
          class="user-menu-img"
          :src="require(`@/assets/imgs/icons/hamburger.png`)"
        />
        <img v-if="loggedInUser" class="user-menu-img" :src="userPic" />
        <img
          v-else
          class="user-menu-img"
          :src="require(`@/assets/imgs/icons/userGuest.jpg`)"
        />
        <!-- <i class="el-icon--right">= </i> -->
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-if="!loggedInUser" @click.native="navTo"
          >Log-in</el-dropdown-item
        >
        <el-dropdown-item v-if="loggedInUser" @click.native="navTo"
          >My profile</el-dropdown-item
        >
        <el-dropdown-item v-if="loggedInUser" @click.native="navTo"
          >Log-out</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
     <span v-if="numOfUserMesseges" class="badge">{{numOfUserMesseges}}</span>
    <!-- {{numOfUserMesseges}} -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
      ],
      value: "",
    };
  },
  methods: {
    navTo(ev) {
      switch (ev.target.textContent) {
        case "Log-in":
          this.$router.push("/login");
          break;
        case "Log-out":
          this.$router.push("/");
          this.$store.dispatch({ type: "logout" });
          break;
        case "My propfile":
          this.$router.push("/user");
          break;
      }
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
    userPic() {
      return this.$store.getters.loggedinUser.imgUrl;
    },
    numOfUserMesseges() {
      const user = this.loggedInUser;
      console.log(user); 
      return Object.keys(user.messages).length;
    },
  }
};
</script>
