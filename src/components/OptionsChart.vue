<template>
  <div>
    <apexchart
      type="donut"
      :options="chartOptions"
      :series="series"
      height="100%"
    ></apexchart>
  </div>
</template>

  
  <script>
import { ref, watch } from 'vue';

  export default({
    name:"OptionsChart",
    props: {
        data: {
            type: Object,
            required: true,
            default: () => ({ names: [], per: [] })
        }
    },
    setup(props) {
        const data = ref(props.data);
        watch(()=>props.data,(newVal) => {
        data.value = newVal;
      })
       const chartOptions = ref({
        labels: data.value.name,
        plotOptions: {
      pie: {
        customScale: 1
      }
    }
    })
       const series = ref(data.value.per||[]);
       
       return{
        chartOptions,series
       }
   }
  })
  </script>
  
  <style >
  </style>