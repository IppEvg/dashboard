<template>
  <div>
    <apexchart
      type="bar"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ColumnChart",
  setup() {
    const chartOptions = ref({
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        title: {
          text: "Value",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    });

    const series = ref([
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 71, 78, 80],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 102, 115, 123],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 59, 63, 60],
      },
    ]);

    return {
      chartOptions,
      series,
    };
  },
});
</script>

<style >
</style>