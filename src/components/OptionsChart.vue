<template>
  <div>
    <apexchart
      type="donut"
      :options="chartOptions"
      :series="series"
      height="300px"
    ></apexchart>
  </div>
</template>

  
  <script>
import { ref, watch } from "vue";

export default {
  name: "OptionsChart",
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({ names: [], per: [] }),
    },
  },
  setup(props) {
    const data = ref(props.data);
    watch(
      () => props.data,
      (newVal) => {
        data.value = newVal;
      }
    );
    const chartOptions = ref({
      legend: {
        position: "bottom",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "70%",
            labels: {
              show: true,
              value: {
                show: true,
                fontSize: "26px",
                fontWeight: 800,
                color: "#FF0000",
                offsetY: 5,
              },
              total: {
                show: true,
                label: "Red Team",
                fontSize: "10px",
                fontWeight: 600,
                color: "grey",
                formatter: function () {
                  return Math.max.apply(null, data.value.per) + "%";
                },
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      labels: data.value.name,
      colors: ["#FF0000", "rgba(30, 144, 255)", "rgba(255, 165, 0)"],
    });
    const series = ref(data.value.per || []);

    return {
      chartOptions,
      series,
    };
  },
};
</script>
  
  <style >
</style>