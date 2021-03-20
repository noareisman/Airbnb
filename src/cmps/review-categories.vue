<template>
  <section>
    <div class="review-section-title flex align-center">
      <star-rating :reviews="reviews"/>
      <div>({{reviews.length}} reviews)</div>
    </div>
    <ul class="two-column-grid categories">
        <li v-for="(cat,idx) in categories" :key="idx" class="clean-list two-column-grid">
            <p>{{categories[idx][0]}}</p>
            <div>
            <el-progress :show-text="false" color="#ca4c4c" :stroke-width="8" :percentage="starNum(idx)"></el-progress>
            <p>{{categories[idx][1]}}</p>
            </div>
        </li>
    </ul>
  </section>
</template>
<script>
import starRating from './star-rating.vue';
export default {
  components: { starRating },
  name: "review-category",
  props: {
    reviews: Array,
  },
  data() {
    return {
      categories: null,
    };
  },
  methods:{
      starNum(idx){
          return this.categories[idx][1]*20
      }
  },
  created() {
    if (this.reviews) {
      var categories = this.reviews.map((review) => {
        return { ...review.category };
      });
      var categoryMap = { ...categories[0] };
      for (var i = 1; i < categories.length; i++) {
        var currCategory = categories[i];
        for (const cat in currCategory) {
          categoryMap[cat] += currCategory[cat];
        }
      }
      for (const cat in categoryMap) {
        categoryMap[cat] /= this.reviews.length;
      }
      var categoriesToRender = Object.keys(categoryMap).map((key) => [
        key,
        categoryMap[key],
      ]);
      this.categories = categoriesToRender;
    }
  },
};
</script>
