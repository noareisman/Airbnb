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
import { socketService } from "./services/socket.service.js";

export default {
  name: "vueApp",
  data() {
    return {};
  },
  methods: {
    async loadOrder() {
      const host = this.$store.getters.loggedinUser;
      await this.$store.dispatch({ type: "loadHostOrders", host });
    },
  },
  async created() {
    await this.$store.dispatch({ type: "loadUsers" });
    await this.$store.dispatch({ type: "loadStays" });
    //connects a default user for demo mode - not used as if user logges out and refreshes it reconects it to the demo user
    // await this.$store.dispatch({
    //   type: "login",
    //   userCred: { username: "mor97", password: "secret" },
    // });

//relevant only if there is a loggedin user:
    const user = this.$store.getters.loggedinUser;
    await this.$store.dispatch({ type: "loadHostOrders", host: user });
    
    socketService.setup();
    socketService.on("loadOrders", this.loadOrder);
  },
  destroyed(){
    socketService.off('loadOrders')
  },
  components: {
    myHeader,
    myFooter,
  },
};
</script>


