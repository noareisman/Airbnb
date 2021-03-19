<template>
  <section class="slecet">
    <el-dropdown>
      <span class="el-dropdown-link">
        USER OPTIONS<i class="el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-if="!loggedInUser" @click.native="navTo"
          >Log-in</el-dropdown-item
        >
        <el-dropdown-item v-if="loggedInUser" @click.native="navTo"
          >My propfile</el-dropdown-item
        >
        <el-dropdown-item v-if="loggedInUser" @click.native="navTo"
          >Log-out</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
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
  },
};
</script>

<style>
.slecet * {
  outline: unset !important;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
</style>