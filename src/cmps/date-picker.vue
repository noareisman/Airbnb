<template>
  <section>
    <el-date-picker
      style="width: 100%"
      @change="changed"
      v-model="value1"
      type="daterange"
      format="dd/MM/yyyy"
      value-format="dd-MM-yyyy"
      start-placeholder="Check In"
      end-placeholder=" Check Out"
      :picker-options="pickerOptions"
      unlink-panels
      align="right"
      prefix-icon="false"

    >
    </el-date-picker>
    <!-- <button @click="print()"></button> -->
  </section>
</template>

<script>
export default {
  name: "date-picker",
  props: { stayId: String },
  data() {
    return {
      pickerOptions: {
        disabledDate:(time)=> {
          return (       
          time.getTime() < Date.now() 
          ||
          ( 
          this.stayOrders && this.stayOrders.some((stayOrder)=>{
            return (time.getTime() > stayOrder[0]) && (time.getTime() <stayOrder[1])
          }))

          )},
        // shortcuts: [
        //   {
        //     text: "",
        //     onClick(picker) {
        //       const end = new Date();
        //       const start = new Date();
        //       start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        //       picker.$emit("pick", [start, end]);
        //     },
        //   },
        // ],
      },
      value1: "",
    };
  },
  methods: {
    changed() {
      this.$emit("pick", this.value1);
    },
    print() {
    },
  },
  computed:{
    stayOrders(){
      return this.$store.getters.getStayOrdersTimeStamps
    }
  }
};
</script>
