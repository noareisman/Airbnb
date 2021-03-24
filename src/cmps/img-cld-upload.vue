<template>
  <div id="app">
    <img-upload @save="saveImg" />
    <img-list :imgUrls="imgUrls" @setAvatar="setAvatar" />
    <!-- <user-avatar :imgUrl="userAvatar" /> -->
  </div>
</template>

<script>

import imgUpload from '@/cmps/img-upload.cmp';
import imgList from '@/cmps/img-list.cmp';
import userAvatar from '@/cmps/user-avatar.cmp';
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
    setAvatar(imgUrl) {
      this.userAvatar = imgUrl;
    }
  },
  components: {
    imgUpload,
    userAvatar,
    imgList
  }
};
</script>


