    <template>
    <el-carousel :autoplay="false" height="200px" indicator-position="none">
      <el-carousel-item
        style="background-color: #fff"
        v-for="(item, idx) in stay.imgUrls"
        :key="item"
      >
        <router-link class="router" :to="`/stay/${stay._id}`">
          <img
            class="stay-img-prev"
            :src="require(`@/assets/imgs/airbnb-imgs/${stay.imgUrls[idx]}.jpg`)"
          />
        </router-link>
      </el-carousel-item>
    </el-carousel>
        
    </template>