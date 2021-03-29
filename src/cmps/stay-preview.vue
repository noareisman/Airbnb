<template>
  <section class="preview-card space-preview">
    <el-carousel :autoplay="false" height="200px" indicator-position="none">
      <el-carousel-item
        style="background-color: #fff"
        v-for="(item, idx) in stay.imgUrls"
        :key="item"
      >
        <router-link class="router" :to="`/stay/${stay._id}`">
          <img
            class="stay-img-prev"  
            :src= imgLink(stay.imgUrls[idx])
          />
        </router-link>
      </el-carousel-item>
    </el-carousel>

    <div class="card-info">
      <img
        v-if="!isLiked"
        title="Save To Favorites"
        @click="ToggleLike(stay)"
        class="like-btn"
        src="../assets/imgs/icons/heart.png"
      />
      <img
        v-else
        title="Remove From Favorites"
        @click="ToggleLike(stay)"
        class="like-btn"
        src="../assets/imgs/icons/fillheart.png"
      />
      <star-rating class="star-rating" :reviews="stay.reviews" />
      <span class="stay-prev-info">
        {{ stay.name }} -
        <span class="stay-address"> {{ stay.loc.address }} </span>
      </span>
      <span class="summary-txt"> {{ summary }}</span>
      <span>
        <span class="price-bold"> {{ price }} </span> / night</span
      >
    </div>
  </section>
</template>
            
<script>
import slideImg from "../cmps/slide-img.vue";
import starRating from "../cmps/star-rating.vue";
const Swal = require("sweetalert2");

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
        Swal.fire("Its better to sign in :)");
        return;
      }
      try {
        await this.$store.dispatch({ type: "toggleLike", stay });
      } catch (err) {
        console.log(err);
      }
    },
        imgLink(img){
      if (img.startsWith('http')) {
        return imgUrl
      }else{
        return require(`@/assets/imgs/airbnb-imgs/${img}.jpg`)
      }
    }
  },
  computed: {
    summary() {
      return this.stay.summary.substring(0, 25) + `...`;
    },
    price() {
      return "$" + this.stay.price;
    },

    
    isLiked() {
      const user = this.$store.getters.loggedinUser;
      if (!user) return;
      return this.stay.favorites.some(({userId}) => {
        return userId === user._id;
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

