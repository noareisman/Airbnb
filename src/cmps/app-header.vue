<template>
  <header class="full main-layout header-container">
<<<<<<< HEAD
    <div class="nav-container">
      <el-menu
        class="el-menu-demo menu-flex"
        style="border: none; border: none"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <router-link class="router" :to="`/`">
            <span class="logo txt"> HomeAway </span>
          </router-link>
        </el-menu-item>
        <el-menu-item index="4"> </el-menu-item>
      </el-menu>
=======
    <div class="nav-container">  
    <el-menu class="el-menu-demo" style="border:none; border:none"  mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link class="router" :to="`/`">
          <span class="logo txt"> HomeAway </span>
        </router-link>
      </el-menu-item>

      <el-menu-item class="explore" index="4" >
        <router-link class="router" :to="`/stay`">
          <span @click="reloadStays" class="txt"> Explore </span>
        </router-link>
      </el-menu-item>
>>>>>>> a3c4438c279479ed59a221623d86a49738d45e1a

      <div class="header-right-corner flex">
      <router-link class="router explore-nav" :to="`/stay`">
        <span @click="reloadStays" class="txt"> Explore </span>
      </router-link>
        <div class="new-host">Become a host</div>
        <user-selections />
      </div>
    </div>
  </header>
</template>
<script>
import userSelections from "../cmps/user-selections.vue";
export default {
  name: "app-header",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {},
    async reloadStays() {
      await this.$store.dispatch({ type: "loadStays" });
    },
  },
  components: {
    userSelections,
  },
};
</script>