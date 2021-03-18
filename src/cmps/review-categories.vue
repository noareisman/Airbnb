<template>
<section>
<h1>review categories</h1>
<!-- <ul>
    <il v-for="cat in categories" :key="cat">
        <el-progress :stroke-width="26" :percentage="category"></el-progress>
    </il>
</ul> -->
</section>
</template>
<script>
export default {
  name: "review-category",
  props:{
      reviews:Array
  },
  data() {
    return {
        category:null
      
    }
  },

//   computed: {
//     avgPerCategory() {
//       return;
//     //   if (this.reviews) {
//     //       this.reviews.forEach(review=>{

//     //       })
//     //       let sum = this.reviews.reduce((acc, currVal) => {
//     //       Object.keys(this.reviews.category)
          
//     //       acc += currVal.avgRate;
//     //       return acc;
//     //     }, 0);
//     //     return parseFloat(sum / this.reviews.length).toFixed(1);
//     //   }
//     },
    created(){
    if(this.reviews){
    var categories=this.reviews.map(review=>review.category)
    var category={...categories[0]}
    for (var i=1; i<categories.length;i++){
        var currCategory=categories[i];
        for (const cat in currCategory){
            category[currCategoty]+=currCategory[cat]
        }
    }
    for (const cat in category){
        cat/this.reviews.length
    }
    this.category=category
    //     // var categoryKeys=Object.keys(category)
    //     // categoryKeys.forEach((key)=>{
    //     //     this.categories.key=this.category
        
    // }

    }
}
}
</script>
