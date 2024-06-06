<script>
import { onMounted, onUnmounted, ref } from "vue";
import BurgerMenu from "./BurgerMenu.vue";

export default {
  components: { BurgerMenu },
  name: "HeaderComp",
  setup() {
    const isLargeScreen = ref(window.innerWidth > 800);

    const updateScreenSize = () => {
      isLargeScreen.value = window.innerWidth > 800;
    };
    const showBurgerMenu = () => {
      showen.value = !showen.value;
    };
    const showen = ref(false);
    onMounted(() => {
      window.addEventListener("resize", updateScreenSize);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateScreenSize);
    });
    const links = ref(["Dashboard", "Projects", "Issues", "Agile"]);
    return {
      links,
      isLargeScreen,
      showen,
      showBurgerMenu,
    };
  },
};
</script>

<template >
  <header>
    <div class="burgerMenu">
      <div>
        <v-btn class="burgerIcon" v-if="isLargeScreen" disabled variant="text">
          <img src="/assets/menu50.png" alt="BM" />
        </v-btn>
        <v-btn class="burgerIcon" v-else @click="showBurgerMenu" variant="text">
          <img src="/assets/menu50.png" alt="BM" />
        </v-btn>
      </div>
      <BurgerMenu
        class="burgerMenu_window"
        :links="links"
        v-if="showen"
      ></BurgerMenu>
    </div>
    <div class="linksMenu" v-show="isLargeScreen">
      <v-select
        solo
        v-for="(link, idx) in links"
        :key="idx"
        density="comfortable"
        :label="link"
        variant="underlined"
        class="linksMenu_select remove-underline"
      ></v-select>
      <v-btn class="linksMenu_btn" size="x-small">Create</v-btn>
    </div>
    <div class="loginMenu">
      <v-text-field
        label="Search"
        append-inner-icon="mdi-magnify"
        variant="solo"
      >
      </v-text-field>
      <v-btn
        class="burgerIcon loginMenu_item"
        :style="{ padding: '0px', minWidth: '0' }"
        variant="text"
      >
        <img src="/assets/help50.png" alt="Help" />
      </v-btn>
      <v-btn
        class="burgerIcon loginMenu_item"
        :style="{ padding: '0px', minWidth: '0' }"
        variant="text"
      >
        <img src="/assets/gear32.png" alt="Gear" />
      </v-btn>
      <v-btn
        class="burgerIcon loginMenu_item"
        :style="{ padding: '0px', minWidth: '0' }"
        variant="text"
      >
        <img src="/assets/account30.png" alt="Account" />
      </v-btn>
    </div>
  </header>
</template>

<style lang="scss">
header {
  display: grid;
  grid-template-columns: 0.9fr 4fr 5fr;
  background-color: rgba(32, 80, 129);
  align-items: center;
  color: white;
  padding: 5px 0;
  height: 55px;
  div {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 5px;
  }
  .burgerMenu {
    position: relative;
  }
  .burgerMenu_window {
    position: absolute;
    top: 100%;
    left: 10%;
    padding: 15% 30%;
    z-index: 5;
  }
  .burgerIcon {
    img {
      width: 30px;
      height: 30px;
    }
  }
  .v-label.v-field-label {
    max-width: fit-content;
  }
  .linksMenu,
  .loginMenu {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    .linksMenu_select {
      font-size: 6px;
      min-width: 100px;
      .v-field__outline::before,
      .v-field__outline::after {
        width: 0;
      }
    }
    &_btn {
      background-color: rgba(59, 129, 197);
    }
    &_item {
      --v-btn-size: 0.3rem;
      min-width: none;
      max-width: 30px;
    }
  }
  .v-select .v-field.v-field {
    font-size: 10px;
  }
  .v-input__details {
    display: none;
  }
  .v-field__append-inner,
  .v-field__input,
  .v-field.v-field--variant-underlined .v-field__append-inner {
    padding-top: 0;
  }
  .v-label,
  .v-field__input {
    font-size: 13px;
  }
  .loginMenu {
    display: flex;
    justify-content: end;
    align-items: center;

    .v-field {
      --v-field-input-padding-top: none;
      background-color: rgba(65, 135, 214, 0.779);
    }
  }
  .v-input {
    max-width: 150px;
  }
  .loginMenu_item {
    width: 30px;
    height: 30px;
    margin: 0 5px;
    img {
      width: 100%;
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: 0.9fr 9fr;
  }
}
</style>

