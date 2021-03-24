
<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  computed: {
    hostOrders() {
      return this.$store.getters.getHostOrders;
    },
  },
  async mounted() {
    // Overwriting base render method with actual data.
    console.log(this.hostOrders);
    const janOrders = this.hostOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 1) return order;
    }).length;
    const febOrders = this.hostOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 2) return order;
    }).length;
    const marchOrders = this.hostOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 3) return order;
    }).length;
    const aprilOrders = this.hostOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 4) return order;
    }).length;
    const mayOrders = this.hostOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 5) return order;
    }).length;
    const juneOrders = this.hostOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 6) return order;
    }).length;
    const julyOrders = this.hostOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 7) return order;
    }).length;
    const augustOrders = this.hostOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 8) return order;
    }).length;
    const sepOrders = this.hostOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 9) return order;
    }).length;
    const octOrders = this.hostOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 10) return order;
    }).length;
    const novOrders = this.hostOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 11) return order;
    }).length;
    const decOrders = this.hostOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 12) return order;
    }).length;

    this.renderChart({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Places orders:",
          backgroundColor: "#f87979",
          //   data: [40 * 1.5, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
          data: [
            janOrders,
            febOrders,
            marchOrders,
            aprilOrders,
            mayOrders,
            juneOrders,
            julyOrders,
            augustOrders,
            sepOrders,
            octOrders,
            novOrders,
            decOrders,
          ],
        },
      ],
    });
  },
};
</script>