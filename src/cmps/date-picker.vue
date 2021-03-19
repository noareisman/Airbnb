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
    <button @click="print()">print orders</button>
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
            time.getTime() < Date.now() ||
            (time.getTime() > Date.now() + 3600 * 1000 * 24 * 2 &&
              time.getTime() < Date.now() + 3600 * 1000 * 24 * 4)
          );
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
    changed() {
      this.$emit("pick", this.value1);
    },
    print() {
      console.log(this.stayOrders);
    },
  },
  computed: {
  },
  created() {
    var stayOrders=this.$store.getters.getCurrStayOrders
    stayOrders=stayOrders.map((order) => {
        var start=order.startDate.split('/')
        start=new Date(parseInt(start[2], 10), parseInt(start[1], 10) - 1 , parseInt(start[0]), 10).getTime();
        var end= order.endDate.split('/')
        end =new Date(parseInt(end[2], 10), parseInt(end[1], 10) - 1 , parseInt(end[0]), 10).getTime();
        return 
      });
        console.log(stayOrders);
      this.stayOrders = stayOrders;
      // console.log(this.stayOrders);
  },
};
</script>
