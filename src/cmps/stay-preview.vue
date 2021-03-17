<template>
  <section class="stay-card">
  <div>
    <img class="stay-main-img" :src="require(`@/assets/imgs/airbnb-imgs/${stay.imgUrls[0]}.jpg`)"/>
    </div> 

  </section>
</template>
            
<script>
export default {
    name:'stay-preview',
    props:{
        stay:Object
    },      
}
</script>

