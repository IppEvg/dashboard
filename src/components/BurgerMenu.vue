<template>
  <aside class="open_burger">
    <div class="open_burger_item">
      <v-select
        solo
        v-for="(link, index) in linkList"
        :key="index"
        density="comfortable"
        :label="link"
        variant="underlined"
        class="burger_linksMenu_select remove-underline"
      ></v-select>
    </div>
    <v-btn class="linksMenu_btn" size="x-small">Create</v-btn>
  </aside>
</template>
<script>
import { ref, watch } from "vue";
export default {
  name: "BurgerMenu",
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const linkList = ref([...props.links]);
    watch(
      () => props.links,
      (newLinks) => {
        linkList.value = [...newLinks];
      }
    );
    console.log(linkList);
    return {
      linkList,
    };
  },
};
</script>

<style scoped lang="scss">
.open_burger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: rgba(32, 80, 129);
  &_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}
.burger_linksMenu_select {
  font-size: 14px;
  min-width: 100px;
  .v-field__outline::before,
  .v-field__outline::after {
    width: 0;
  }
  &_btn {
    background-color: rgba(59, 129, 197);
  }
}
</style>
