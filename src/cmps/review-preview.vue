<template>
  <section class="review-card">
  <div>
    <img class="reviewer-img" :src="require(`@/assets/imgs/airbnb-imgs/${stay.imgUrls[0]}.jpg`)"/>
    <p>{{}}</p>
  </div> 

  </section>
</template>
            
<script>
export default {
    name:'review-preview',
    props:{
        review:Object
    },      
}
</script>

