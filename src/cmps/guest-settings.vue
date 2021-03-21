<template>
  <section>
    <el-popover placement="right" width="400" trigger="click">
      <span> Adults: </span
      ><el-input-number
        v-model="guest.adultsNum"
        @change="handleChange"
        :min="1"
        :max="10"
        >Adults</el-input-number
      >
      <br /><span> Children: </span
      ><el-input-number
        v-model="guest.childrenNum"
        @change="handleChange"
        :min="0"
        :max="10"
        >Adults</el-input-number
      >
      <br /><span> Infants: </span
      ><el-input-number
        v-model="guest.infantsNum"
        @change="handleChange"
        :min="0"
        :max="10"
        >Adults</el-input-number
      >
      <el-button slot="reference">{{ guestCount }}</el-button>
    </el-popover>
  </section>
</template>


<script>
export default {
  data() {
    return {
        guest:{
            adultsNum:1,
            childrenNum:0,
            infantsNum:0,
        }
    };
  },
  methods:{
      handleChange(){
          this.$emit('pickguests',this.guest)
      }
  },
  computed:{
      guestCount(){
        var guestCount=this.guest.adultsNum + this.guest.childrenNum + this.guest.infantsNum
        return (guestCount>1)? guestCount+' Guests': guestCount+' Guest'
     }
  }
}
</script>