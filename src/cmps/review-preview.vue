<template>
  <section class="review-card">
  <div>
    <p>{{}}<p>
    <img class="reviewer-img" :src="require(`@/assets/imgs/airbnb-imgs/${stay.imgUrls[0]}.jpg`)"/>
  </div> 

  </section>
</template>
            
<script>
export default {
    name:'review-preview',
    props:{
        reviews:Array
    },      
}
</script>

