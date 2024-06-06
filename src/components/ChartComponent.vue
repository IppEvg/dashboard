<template>
  <div>
    <apexchart
      type="radialBar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "ChartComponent",
  props: {
    per: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const chartOptions = ref({
      chart: {
        id: "vuechart-example",
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            color: "#c62929",
            background: "rgb(180, 180, 180)",
            startAngle: -90,
            endAngle: 90,
          },
          dataLabels: {
            showOn: "always",
            name: {
              show: true,
              color: "#FF0000",
              fontSize: "13px",
              style: {
                border: "1px",
                fontSize: "14px",
                colors: "#FF0000",
              },
            },
            value: {
              show: true,
              style: {
                fontSize: "50px",
                colors: "#FF0000",
              },
              offsetY: -50,
            },
          },
        },
      },
      labels: ["ITEMS AT RISK"],
      colors: ["#FF0000"],
    });

    const series = ref([props.per]);
    watch(
      () => props.per,
      (newVal) => {
        series.value = [newVal];
      }
    );
    return {
      chartOptions,
      series,
    };
  },
});
</script>

<style >
</style>
