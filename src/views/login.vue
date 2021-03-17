<template>
  <div>
    <!-- <p>{{ msg }}</p> -->

    <div v-if="loggedinUser">
      <h2>
        Hello &nbsp; {{ loggedinUser.username }}.
        <button @click="doLogout">Logout</button>
      </h2>
    </div>

    <div class="login-page" v-else>
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
          v-model="signupCred.password"
          placeholder="Password"
        />
        <br />
        <input
          required
          type="text"
          v-model="signupCred.username"
          placeholder="Username"
        />
        <br />
        <button>Signup</button>
      </form>
    </div>

    <!-- <details>
      <summary>Admin Section</summary>
      <ul>
        <li v-for="user in users" :key="user._id">
          <pre>{{ user }}</pre>
          <button @click="removeUser(user._id)">x</button>
        </li>
      </ul>
    </details> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // msg: "",
      loginCred: { username: "", password: "" },
      signupCred: { username: "", password: "", fullname: "" },
    };
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  // created() {
  //   this.loadUsers();
  // },
  methods: {
    async doLogin() {
      // if (!this.loginCred.username) {
      //   this.msg = "Please enter username/password";
      //   return;
      // }
      try {
        await this.$store.dispatch({ type: "login", userCred: this.loginCred });
        this.resetCreds();
        this.$router.push("/");
      } catch (err) {
        console.log(err);
        this.msg = "Failed to login";
      }
    },
    doLogout() {
      this.$store.dispatch({ type: "logout" });
    },
    async doSignup() {
      // if (
      //   !this.signupCred.fullname ||
      //   !this.signupCred.password ||
      //   !this.signupCred.username
      // ) {
      //   this.msg = "Please fill up the form";
      //   return;
      // }
      await this.$store.dispatch({ type: "signup", userCred: this.signupCred });
      this.resetCreds();
      this.$router.push("/");
    },
    resetCreds() {
      this.loginCred = { username: "", password: "" };
      this.signupCred = { username: "", password: "", fullname: "" };
    },
    // loadUsers() {
    //   this.$store.dispatch({ type: "loadUsers" });
    // },
    // async removeUser(userId) {
    //   try {
    //     await this.$store.dispatch({ type: "removeUser", userId });
    //     this.msg = "User removed";
    //   } catch (err) {
    //     this.msg = "Failed to remove user";
    //   }
    // },
  },
};
</script>