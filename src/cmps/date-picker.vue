<template>
  <section>
    <el-date-picker 
      style="width: 220px"   @change="changed"
      v-model="value1"
      type="daterange"
            format="dd/MM/yyyy"
      value-format="dd-MM-yyyy"
      start-placeholder="Check In"
      end-placeholder="   Check Out"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
  </section>
</template>

<script>
export default {
  name: "date-picker",
  props:{stayId:String},
  data() {
    return {
      pickerOptions: {
            disabledDate(time) {
            return (time.getTime() < Date.now() 
            || (time.getTime() > Date.now()+3600*1000*24*2
            && time.getTime() < Date.now()+3600*1000*24*4));
          },
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
      changed(){
          this.$emit('pick' , this.value1)
      }
  },
  computed:{
    getStayBookedOrders(){
      this.$store.getters.
    }
  }
};
</script>
