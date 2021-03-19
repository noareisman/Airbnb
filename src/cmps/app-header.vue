<template>
  <header class="full main-layout header-container">
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link class="router" :to="`/`">
          <span class="logo txt"> HomeAway </span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="4" >
        <router-link class="router" :to="`/stay`">
          <span class="txt"> Explore </span>
        </router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
    <user-selections />
    </el-menu>

  </header>
</template>
<script>
import userSelections from '../cmps/user-selections.vue'
export default {
  name: "app-header",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
        
    },
 
  },
  components:{
    userSelections
  }
};
</script>