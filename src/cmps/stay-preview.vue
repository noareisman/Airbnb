<template>
  <section class="preview-card space-preview">
    <div>
      <img @click="toDetails(stay._id)"
        class="stay-img"
        :src="require(`@/assets/imgs/airbnb-imgs/${stay.imgUrls[Imgidx]}.jpg`)"
      />
      <button @click="changeImg(-1)" class="img-btn prev-img"> &#60;</button>
      <button @click="changeImg(1)" class="img-btn next-img">	&#62; </button>
    </div>
    <div class="card-info">
      <span> ⭐{{ stay.reviews[0].avgRate }}</span>
      <span> {{ stay.name }}</span>
      <span> {{ summary }}</span>
      <span> {{ price }}</span>
    </div>
  </section>
</template>
            



<script>
export default {
  name: "stay-preview",
  props: {
    stay: Object,
  },
  data(){
    return{
      Imgidx:0
    }
  },
  methods:{
    toDetails(stayId){
        this.$router.push(`/stay/${stayId}`);

    },
    changeImg(val){
      if(this.Imgidx===0 && val ===-1) this.Imgidx = this.stay.imgUrls.length-1
      else if(this.Imgidx===4 && val ===1)this.Imgidx = 0
      console.log(this.Imgidx, 'imgidx' , val, 'val')
      this.Imgidx +=val
    }
  },
  computed: {
    summary() {
      return this.stay.summary.substring(0, 25) + `...`;
    },
    price() {
      return "$" + this.stay.price + "/ Night";
    },
  },
};
</script>
