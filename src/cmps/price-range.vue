<template>
    <div class="price-range-container"> 
   <el-slider :show-input="true" input-size="mini" :show-input-controls="true" :max="1000" label="Price"	 v-model="value" range>
    </el-slider >
    </div>
</template>

<script>
 export default {
    data() {
      return {
        value: [0, 1000],
    
      }
    }
  }
</script>

<style>

</style>