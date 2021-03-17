<template>
  <section>
    <h1>Stay list</h1>
    <ul class="card-grid">
      <li v-for="stay in stays" :key="stay._id">
        <stay-preview :stay="stay"></stay-preview>
      </li>
    </ul>
    <button @click="changePage(1)">></button>
    <button @click="changePage(-1)"></button>
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
      this.$store.commit("changePage", diff);
    },
  },
  components: {
    stayPreview,
  },
};
