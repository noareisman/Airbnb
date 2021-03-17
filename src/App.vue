<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "vueApp",
  data() {
    return {};
  },
  created() {
    // this.$store.dispatch({ type: "loadStays" });
  },
  components: {
  },
};
</script>
 