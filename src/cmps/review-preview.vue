<template>
  <section>
    <div class="review-card">
      <div class="flex">
      <img
        class="reviewer-img thumb-img"
        :src="review.by.imgUrl"
      />
      <div class="review-txt-section">
        <h3>{{review.by.fullname}}</h3>
        <!-- <p>{{date}}</p> -->
      </div>
      </div>
      <div>{{ review.txt }}</div>
    </div>
  </section>
</template>
            
<script>
export default {
  name: "review-preview",
  props: {
    review: Object,
  },
  // computed: {
  //   date() {
  //     var date=this.review.time
  //     var strDate=date.toString()
  //     return moment(strDate,"YYYYMMDD").fromNow()
  //   },
  // },
};
</script>




