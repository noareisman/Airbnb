<template>
  <section>
    <ul class="clean-list">
      <li>
        <span class="category">{{ categoryName[0] }}</span>
        <el-rate v-model="categoryMap.Cleanliness" :colors="colors"> </el-rate>
      </li>
      <li>
        <span class="category">{{ categoryName[1] }}</span>
        <el-rate v-model="categoryMap.Accuracy" :colors="colors"> </el-rate>
      </li>
      <li>
        <span class="category">{{ categoryName[2] }}</span>
        <el-rate v-model="categoryMap.Communication" :colors="colors"> </el-rate>
      </li>
      <li>
        <span class="category">{{ categoryName[3] }}</span>
        <el-rate v-model="categoryMap.Location" :colors="colors"> </el-rate>
      </li>
      <li>
        <span class="category">{{ categoryName[4] }}</span>
        <el-rate v-model="categoryMap.CheckIn" :colors="colors"> </el-rate>
      </li>
      <li>
        <span class="category">{{ categoryName[5] }}</span>
        <el-rate v-model="categoryMap.Accessibility" :colors="colors"> </el-rate>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "review-star-input",
  data() {
    return {
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      categoryMap: {
        Cleanliness: null,
        Accuracy: null,
        Communication: null,
        Location: null,
        CheckIn: null,
        Accessibility: null,
      },
    };
  },
  computed: {
    categoryName() {
      return Object.keys(this.categoryMap);
    },
  },
};
// var categories = this.reviews.map((review) => {
//         return { ...review.category };
//       });
//       var categoryMap = { ...categories[0] };
//       for (var i = 1; i < categories.length; i++) {
//         var currCategory = categories[i];
//         for (const cat in currCategory) {
//           categoryMap[cat] += currCategory[cat];
//         }
//       }
//       for (const cat in categoryMap) {
//         categoryMap[cat] /= this.reviews.length;
//       }
//       var categoriesToRender = Object.keys(categoryMap).map((key) => [
//         key,
//         categoryMap[key],
//       ]);
//       this.categories = categoriesToRender;
</script>

