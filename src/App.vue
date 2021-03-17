<template>
  <div id="app">
      <my-header/>
    <router-view/>
  </div>
</template>

<script>
import myHeader from './cmps/app-header.vue'
export default {
  name: "vueApp",
  data() {
    return {};
  },
  created() {
    // this.$store.dispatch({ type: "loadStays" });
  },
  components: {
    myHeader
  },
};
</script>
 