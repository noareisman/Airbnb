<template>
  <div id="app">
    <my-header />
    <router-view class="app-main-content" />
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
    await this.$store.dispatch({ type: "loadStays" });
    await this.$store.dispatch({ type: "login", userCred: { username: 'user1', password: 'secret' }});
  },
  components: {
    myHeader,
    myFooter,
  },
};
</script>
 
