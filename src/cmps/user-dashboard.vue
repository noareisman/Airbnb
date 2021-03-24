<template>
  <section class="user-dashboard-container">
    <h2 class="dash-title">{{ user.fullname }} Favorites</h2>

<section v-if="!likes.length" class="no-fav-container">
  <h2 class="no-fav-title"> No Favorite </h2>
  <p> There is no favorite  at the moment, </p>
  <p> to add some, </p>
          <router-link class="router explore-fav-btn" :to="`/stay`">
    <el-button title="Explore" type="primary" icon="el-icon-star-off" circle></el-button>
          </router-link>
   </section>
   
    <el-row>
          <h2>  sort By</h2>
    <div class="sort-container"> 
    <el-button class="sort-btn" @click="sortBy('price')" round>Price</el-button>
    <el-button class="sort-btn" @click="sortBy('rate')" round>Popularity</el-button>
  </div>
      <el-col style="margin-bottom:20px"
        :span="12"
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
                class="stay-img-card"
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
      return likes;
    },
  },
  methods:{
      sortBy(sortBy){
      if(sortBy === 'price')
      this.$store.getters.sortByPrice
      else if(sortBy ==='rate')  this.$store.getters.sortByPopularity

    }
  }
};
</script>

<style>
</style>