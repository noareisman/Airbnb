<template>
  <ul>
    <li v-for="stay in stays" :key="stay._id" >
      <h2>{{stay.name}}</h2>
    </li>
  </ul>
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
    async loadStays() {
      const stays = await this.$store.dispatch({
        type: "loadStays",
        filterBy: this.user,
      });
      this.stays = stays;
      console.log(this.stays);
    },
  },
  created() {
    this.loadStays();
  },
};
</script>
<style>
</style>