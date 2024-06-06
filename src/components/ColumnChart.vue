<template>
  <div>
    <apexchart
      type="bar"
      height="200%"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "ColumnChart",
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const list = ref(props.list);
    watch(
      () => props.list,
      (newVal) => {
        list.value = newVal;
      }
    );
    const chartOptions = ref({
      chart: {
        stacked: true,
        type: "bar",
      },

      dataLabels: {
        enabled: false,
      },

      xaxis: {
        categories: list.value.categories,
        title: {
          text: list.value.titleTextX,
        },
      },
      yaxis: {
        title: {
          text: list.value.titleTextY,
        },
      },
    });

    const series = ref(list.value.series);

    return {
      chartOptions,
      series,
    };
  },
});
</script>

<style >
</style>