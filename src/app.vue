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
import { syntheticDataService } from "./services/synthetic-data.service.js";
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

    //connects a default user for demo mode
    // await this.$store.dispatch({
    //   type: "login",
    //   userCred: { username: "mor97", password: "secret" },
    // });
    await this.$store.dispatch({ type: "loadStays" });
    
    const user = this.$store.getters.loggedinUser;
    await this.$store.dispatch({ type: "loadHostOrders", host: user });
    
    // syntheticDataService.createStay()//creates synthetic data and prints it to the console 
    //-it does not insert the data to the collection... if console printing was successful json format can be copied from the console
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


