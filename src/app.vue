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
import {socketService} from "./services/socket.service.js"
export default {
  name: "vueApp",
  data() {
    return {};
  },
  async created() {
    await this.$store.dispatch({ type: "loadUsers" });
    await this.$store.dispatch({ type: "login", userCred: { username: "mor97", password: "secret" }});
    await this.$store.dispatch({ type: "loadStays" });
  socketService.setup();
  // socketService.on('loadOrders',)
  socketService.emit('test','hi')
  },
  // destroyed(){
  //   socketService.off('loadOrders',)
  // },
  components: {
    myHeader,
    myFooter,
  },
};
</script>
 
