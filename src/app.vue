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
  methods:{
    async loadOrder(){
      console.log( 'line 22 is back')
      debugger; 
      const host = this.$store.getters.loggedinUser
      await this.$store.dispatch({type:'loadHostOrders' ,host })
    }
  },
  async created() {
    await this.$store.dispatch({ type: "loadUsers" });
    await this.$store.dispatch({ type: "login", userCred: { username: "mor97", password: "secret" }});
    await this.$store.dispatch({ type: "loadStays" });
  socketService.setup();
    
  // socketService.on(, this.loadOrder)

  socketService.on('loadOrders', this.loadOrder)
  
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


