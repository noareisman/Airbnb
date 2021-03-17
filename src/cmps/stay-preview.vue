<template>
  <section class="stay-card">
    <img class="stay-main-img" :src="require(`@/assets/imgs/airbnb-imgs/${this.stay.imgs[0]}`)"/>
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
