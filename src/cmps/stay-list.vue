

<template>
  <section>
    <h1>Places to stay for you</h1>
    <ul  v-if="stays" class="list-card-container">
      <stay-preview
        v-for="stay in stays"
        :key="stay._id"
        :stay="stay"
      />
    </ul>
    <button @click="changePage(1)">></button>
    <button @click="changePage(-1)">></button>
  </section>
</template>

<script>
import stayPreview from "../cmps/stay-preview.vue";

export default {
  name: "stay-list",
  props: {
    stays: Array,
  },
  methods: {
    changePage(diff) {
      // this.$store.commit("changePage", diff);
    },
  },
  mounted() {
    },
  created(){
    
    console.log(this.stays);
  },
  components: {
    stayPreview,
  },
};
</script>
