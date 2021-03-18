<template>
<section>
<h1>review categories</h1>
<ul>
    <il v-for="cat in categoriesToRender" :key="cat">
        <el-progress :stroke-width="26" :percentage="categoriesToRender[1]">cat[0]</el-progress>
    </il>
</ul>
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
        categoriesToRender:null
      
    }
  },

    created(){
    if(this.reviews){
        // console.log(this.reviews[0].category);
    var categories=this.reviews.map(review=> {
        return {...review.category}})
        console.log(categories);
    var categoryMap={...categories[0]}
    // var categoryMap=JSON.parse(JSON.stringify(categories[0]))
    console.log(categoryMap);
    for (var i=1; i<categories.length;i++){
        var currCategory=categories[i];
        for (const cat in currCategory){
            categoryMap[currCategory]+=currCategory[cat]
        }
    }
    for (const cat in categoryMap){
        categoryMap[cat]/this.reviews.length
    }
    console.log(category);
    var categoriesToRender=Object.keys(category).map((key)=>[key,category[key]])
    this.categories=categoriesToRender
        console.log(categoriesToRender);
    }
}
}
</script>
