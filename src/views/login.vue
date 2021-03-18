<template>
  <div>
    <p>{{ msg }}</p>

    <!-- <div v-if="loggedInUser"> -->
      <!-- <userDetails @logout="doLogout" :user="loggedInUser" /> -->
      <!-- <h2>loggedInUser
        Hello &nbsp; {{ loggedinUser.username }}.
        <button @click="doLogout">Logout</button>
      </h2> -->
    <!-- </div> -->

    <div class="login-page" v-if="!loggedInUser">
      <h2 class="login-page-headlines">Login</h2>
      <form @submit.prevent="doLogin">
        <input
          required
          type="text"
          v-model="loginCred.username"
          placeholder="User name"
        />
        <br />
        <input
          required
          type="password"
          v-model="loginCred.password"
          placeholder="Password"
        />
        <br />
        <button class="login-btn">Login</button>
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
      <form @submit.prevent="doSignup">
        <h2 class="login-page-headlines">Signup</h2>
        <input
          required
          type="text"
          v-model="signupCred.fullname"
          placeholder="Your full name"
        />
        <br />
        <input
          required
          type="text"
          v-model="signupCred.username"
          placeholder="Username"
        />
        <br />
        <input
          required
          type="password"
          v-model="signupCred.password"
          placeholder="Password"
        />
        <br />
        <button>Signup</button>
      </form>
    </div>
  </div>
</template>

<script>
import userDetails from "./user-details.vue";
export default {
  data() {
    return {
      msg: "",
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
      // return this.$store.getters.isUserLogged;
      return this.$store.getters.loggedinUser;
    },
  },
  methods: {
    async doLogin() {
      if (!this.loginCred.username) {
        this.msg = "Please enter username/password";
        return;
      }
      try {
        const user = await this.$store.dispatch({
          type: "login",
          userCred: JSON.parse(JSON.stringify(this.loginCred)),
        });
        // this.$router.push('/stay');
        this.$router.push("/stay");
      } catch (err) {
        console.log(err);
        this.msg = "Failed to login";
      }
    },
    // async doLogout() {
    //   await this.$store.dispatch({ type: "logout" });
    //   this.$router.push("/");
    // },
    async doSignup() {
      if (
        !this.signupCred.fullname ||
        !this.signupCred.password ||
        !this.signupCred.username
      )
        return;
      
      this.allUsers.forEach((user) => {
        if (user.username === this.signupCred.username) {
          console.log("userName is taken");
          return;
        }
      });

      await this.$store.dispatch({ type: "signup", userCred: this.signupCred });
      this.$router.push("/");
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