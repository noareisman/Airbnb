<template>
  <section class="user-dashboard-container">
    <h1 class="dash-title">{{ user.fullname }} Favorites</h1>
    <el-row>
      <el-col
        :span="8"
        v-for="(stayLiked, index) in likes"
        :key="index"
        :offset="index > 0 ? 2 : 2"
      >
        <el-card :body-style="{ padding: '0px', width: '400px' }">
          <el-carousel
            :autoplay="false"
            height="200px"
            indicator-position="none"
          >
            <el-carousel-item
              style="background-color: #fff"
              v-for="(item, idx) in stayLiked.imgUrls"
              :key="item"
            >
              <img
                class="stay-img"
                :src="
                  require(`@/assets/imgs/airbnb-imgs/${stayLiked.imgUrls[idx]}.jpg`)
                "
              />
            </el-carousel-item>
          </el-carousel>

          <div style="padding: 14px" class="dash-details">
            <span>{{ stayLiked.name }}</span>
            <span>{{ stayLiked.price }}/$ Night</span>
            <div class="bottom clearfix">
              <router-link class="router" :to="`/stay/${stayLiked._id}`">
                <span class="bottom clearfix"> View </span></router-link
              >
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  props: ["user"],
  computed: {
    likes() {
      const likes = this.$store.getters.getAllUserLike;
      console.log(likes);
      return likes;
    },
  },
};
</script>

<style>
</style>