<template>
<el-popover
  placement="right"
  width="400"
  trigger="click">
  Adults:
        <el-input-number
          v-model="guest.adultsNum"
          :min="1"
          :max="10"
        >
        </el-input-number>
        Children:
        <el-input-number
          v-model="guest.childrenNum"
          :min="0"
          :max="10"
        >
        </el-input-number>
        Infants:
        <el-input-number
          v-model="guest.infantsNum"
          :min="0"
          :max="10"
        >
        </el-input-number>
        </el-popover>
  <el-button slot="reference">Click to activate</el-button>
</el-popover>
    
<script>
export default {
  name: "guest-settings",
  data() {
    return {
      guest: {
        adultsNum: 1,
        childrenNum: 0,
        infantsNum: 0,
      },
    };
  },
  methods: {
    handleChange() {
      this.$emit("pickgusets", this.guest);
    },
  },
};
</script>
