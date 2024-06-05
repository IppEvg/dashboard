import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css';
import VueApexCharts from 'vue3-apexcharts';

const app = createApp(App);

app.use(vuetify);
app.use(VueApexCharts);
app.mount('#app');