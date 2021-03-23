<template>
  <div>
    <div class="login-page" v-if="!loggedInUser">
      <h2 class="login-page-headlines">Login</h2>
      <form @submit.prevent="doLogin" class="login-form">
        <input
          autocomplete="off"
          type="text"
          v-model="loginCred.username"
          placeholder="User name"
        />
        <br />
        <input
          autocomplete="off"
          type="password"
          v-model="loginCred.password"
          placeholder="Password"
        />
        <br />
        <button class="login-btn">Login</button>
        <!-- <p
          v-if="
            msg === 'Incorrect username or password.' ||
            msg === 'Please enter username and password.'
          "
        > -->
      </form>
      <div class="middle-page flex">
        <div class="login-signup-supperline">
          <hr />
        </div>
        <h3>OR</h3>
        <div class="login-signup-supperline">
          <hr />
        </div>
      </div>
      <form @submit.prevent="doSignup" class="signup-form">
        <h2 class="login-page-headlines">Signup</h2>
        <input
          autocomplete="off"
          type="text"
          v-model="signupCred.fullname"
          placeholder="Your full name"
        />
        <br />
        <input
          autocomplete="off"
          type="text"
          v-model="signupCred.username"
          placeholder="Username"
        />
        <br />
        <input
          autocomplete="off"
          type="password"
          v-model="signupCred.password"
          placeholder="Password"
        />
        <br />
        <button>Signup</button>
        <p>
          {{ msg }}
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import userDetails from "./user-details.vue";
export default {
  data() {
    return {
      loginCred: { username: "", password: "" },
      signupCred: { username: "", password: "", fullname: "" },
      allUsers: null,
    };
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
    msg() {
      return this.$store.getters.msg;
    },
  },
  methods: {
    async doLogin() {
      if (!this.loginCred.username || !this.loginCred.password) {
        this.$store.commit({
          type: "setMsg",
          msg: "Please enter username and password.",
        });
        return;
      }
      try {
        const user = await this.$store.dispatch({
          type: "login",
          userCred: JSON.parse(JSON.stringify(this.loginCred)),
        });
        if (user._id) this.$router.push("/stay");
      } catch (err) {
        console.log(err);
      }
    },
    async doSignup() {
      if (
        !this.signupCred.fullname ||
        !this.signupCred.password ||
        !this.signupCred.username
      ) {
        this.$store.commit({
          type: "setMsg",
          msg: "Please enter your fullname, username and password.",
        });
        return;
      }
      const user = await this.$store.dispatch({
        type: "signup",
        userCred: this.signupCred,
      });
      if (user._id) this.$router.push("/");
    },
    loadUsers() {
      this.$store.dispatch({ type: "loadUsers" });
      this.allUsers = this.$store.getters.users;
    },
  },
  created() {
    this.loadUsers();
  },
  components: {
    userDetails,
  },
};
</script>