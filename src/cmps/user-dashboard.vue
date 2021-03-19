<template>
  <section class="preview-card space-preview main-layout ">
    <ul> 
      <h1>{{user.fullname}} Favorites </h1>
      <li class="userLikes" v-for="(stayLiked, idx) in likes " :key="idx"> 
        <stay-preview :stay="stayLiked" class="preview-deshboard"/>

      </li>
    </ul>
  </section>
</template>

<script>
import stayPreview from './stay-preview.vue';
export default {
  components: { stayPreview },
  props: ["user"],

  computed:{
    likes(){
      const likes =  this.$store.getters.getAllUserLike
      console.log(likes)
      return likes
    }
  }
};
</script>

<style>
</style>