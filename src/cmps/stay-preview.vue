<template>

  <section class="preview-card space-preview">
    <router-link class="router" :to="`/stay/${stay._id}`">
      <el-carousel :autoplay="false" height="200px" indicator-position="none">
        <el-carousel-item
          style="background-color: #fff"
          v-for="(item, idx) in stay.imgUrls"
          :key="item"
        >
          <img
            class="stay-img"
            :src="require(`@/assets/imgs/airbnb-imgs/${stay.imgUrls[idx]}.jpg`)"
          />
        </el-carousel-item>
      </el-carousel>
    </router-link>

    <div class="card-info">
      <img
        v-if="!isLiked"
        @click="ToggleLike(stay)"
        class="like-btn"
        src="../assets/imgs/icons/heart.png"
      />
      <img
        v-else
        @click="ToggleLike(stay)"
        class="like-btn"
        src="../assets/imgs/icons/fillheart.png"
      />
      <star-rating :reviews="stay.reviews" />
      <span> {{ stay.name }}</span>
      <span> {{ summary }}</span>
      <span> {{ price }}</span>
    </div>
  </section>
</template>
            
<script>
import slideImg from "../cmps/slide-img.vue";
import starRating from "../cmps/star-rating.vue";
const Swal = require('sweetalert2')

export default {
  name: "stay-preview",
  props: {
    stay: Object,
  },
  data() {
    return {
      Imgidx: 0,
    };
  },
  methods: {
    async ToggleLike(stay) {
        if (!this.$store.getters.loggedinUser) {
      Swal.fire('Its better to sign in :)')
        return
      }
      await this.$store.dispatch({ type: "toggleLike", stay });
    },
  },
  computed: {
    summary() {
      return this.stay.summary.substring(0, 25) + `...`;
    },
    price() {
      return "$" + this.stay.price + "/ Night";
    },
    isLiked() {
      const user = this.$store.getters.loggedinUser;
      if(!user) return
      return this.stay.favorites.some((element) => {
        return element.userId === user._id;
      });
    },
  },
  components: {
    starRating,
    slideImg,
  },
};
</script>


<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

