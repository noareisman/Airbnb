<template>
<section>
<h1>review categories</h1>
<ul>
    <il v-for="cat in categories" :key="cat">
        <el-progress :stroke-width="26" :percentage="this.category"></el-progress>
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
        categories:{},
        category:1
      
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
        var categories=Objectthis.reviews.keys(this.reviews.category)
        console.log(categories);
    }

    },
}
</script>
            "id": "qwer124",
            "txt": "Had a good time...",
            "avgRate": 4.5,
            "category":{
                "Cleanliness":5.0,
                "Accuracy":5.0,
                "Communication":5.0,
                "Location":4.0,
                "Check-in":4.0,
                "accessibility":4.0 
            },