<template>
  <div id="app">
    <my-header />
    <router-view />
    <my-footer />
  </div>
</template>

<script>
import myHeader from "./cmps/app-header.vue";
import myFooter from "./cmps/app-footer.vue";
export default {
  name: "vueApp",
  data() {
    return {};
  },
  async created() {
    await this.$store.dispatch({ type: "loadUsers" });
    await this.$store.dispatch({ type: "login", userCred: { username: "user1", password: "secret" }});
    await this.$store.dispatch({ type: "loadStays" });
  },
  components: {
    myHeader,
    myFooter,
  },
};
</script>
 
