<template>
  <section>
    <el-date-picker
      style="width: 220px"
      @change="changed"
      v-model="value1"
      type="daterange"
      format="dd/MM/yyyy"
      value-format="dd-MM-yyyy"
      start-placeholder="Check In"
      end-placeholder="   Check Out"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
    <!-- <button @click="print()">print orders</button> -->
  </section>
</template>

<script>
export default {
  name: "date-picker",
  props: { stayId: String },
  data() {
    return {
      stayOrders: [],
      pickerOptions: {
        disabledDate(time) {
          return (       
          time.getTime() < Date.now() 
          // || ((time.getTime() > this.stayOrders[0][0]) && (time.getTime() < this.stayOrders[0][1]))
          // ((time.getTime() > this.stayOrders[1][0]) && (time.getTime() < this.stayOrders[1][1]))
          )},
        shortcuts: [
          {
            text: "",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: "",
    };
  },
  methods: {
    changed() {
      this.$emit("pick", this.value1);
    },
    // print() {
    //   console.log(this.stayOrders);
    // },
  },
  created() {
    var stayOrders=this.$store.getters.getStayOrdersTimeStamps
      console.log(stayOrders);
      this.stayOrders = stayOrders;
      console.log(this.stayOrders);
  },
};
</script>
