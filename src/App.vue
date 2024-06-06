<script>
import HeaderComp from "@/components/Header.vue";
import MainComp from "@/components/Main.vue";
import FooterComp from "./components/FooterComp.vue";
export default {
  components: { HeaderComp, MainComp, FooterComp },
};
</script>

<template>
  <v-app>
    <div class="wrapper">
      <HeaderComp></HeaderComp>
      <MainComp></MainComp>
    </div>
    <FooterComp></FooterComp>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
