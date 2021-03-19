<template>
  <section>
    i am user dashboard
    <ul> 
      <li class="userLikes" v-for="(stayLiked, idx) in likes " :key="idx"> {{stayLiked.name}} </li>
    </ul>
  </section>
</template>

<script>
export default {
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