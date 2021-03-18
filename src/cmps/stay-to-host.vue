<template>
  <section>
    list og hoouses

  </section>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      stays: null,
    };
  },
  methods: {
    loadStays() {
      // this.$store.dispatch();
      this.$store.dispatch({
        type: "loadStays",
        filterBy: { hostId: user._id },
      });
    },
  },
  created() {
    this.loadStays;
  },
};
</script>
<style>
</style>