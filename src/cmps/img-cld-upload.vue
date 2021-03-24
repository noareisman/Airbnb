<template>
  <div>
    <img-upload @save="saveImg" />
    <!-- <img-list :imgUrls="imgUrls" @setAvatar="setAvatar" /> -->
  </div>
</template>

<script>

import imgUpload from '@/cmps/img-upload.cmp';
import imgList from '@/cmps/img-list.cmp';
export default {
  data() {
    return {
      imgUrls:[],
      userAvatar: null
    }
  },
  methods: {
    saveImg(imgUrl) {
      this.imgUrls.push(imgUrl)
    },
    // setAvatar(imgUrl) {
    //   this.userAvatar = imgUrl;
    // }
  },
  components: {
    imgUpload,
    imgList
  }
};
</script>


