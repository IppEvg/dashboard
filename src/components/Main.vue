<script>
import { computed, onMounted, ref } from "vue";
import ChartComponent from "./ChartComponent.vue";
import ColumnChart from "./ColumnChart.vue";
import OptionsChart from "./OptionsChart.vue";

export default {
  name: "MainComp",
  components: { ChartComponent, ColumnChart, OptionsChart },
  setup() {
    let dataList = ref([]);
    const loadList = async () => {
      try {
        const loading = await fetch(
          "https://ippevg.github.io/PhServer/Data.json"
        );
        if (loading.ok) {
          const data = await loading.json();
          dataList.value = data.data;
        } else {
          console.error("Ошибка при загрузке данных:", loading.status);
        }
      } catch (error) {
        console.error("Ошибка сети или сервера:", error);
      }
    };
    onMounted(loadList);
    const totalIssues = computed(
      () => dataList.value[0].walidation + dataList.value[0].delivered
    );
    const total = computed(() => {
      return (
        dataList.value[0].backlog +
        dataList.value[0].wip +
        dataList.value[0].walidation +
        dataList.value[0].delivered
      );
    });
    const totalWork = computed(() => {
      return dataList.value[2].series.reduce(
        (sum, current) => sum + current.data[current.data.length - 1],
        0
      );
    });
    return { dataList, total, totalIssues, totalWork };
  },
};
</script>

<template>
  <div class="title">
    <div class="titleItem">
      <h1>Demo Dashboard</h1>
    </div>
    <div class="titleOptions">
      <v-btn class="no-uppercase" size="small">Add gadget </v-btn>
      <v-btn class="no-uppercase" size="small">Edit layout </v-btn>
      <v-btn class="no-uppercase" size="small">...</v-btn>
    </div>
  </div>
  <section v-if="dataList[4]">
    <div class="section_item">
      <div class="section_item_up">
        <div class="name">
          <h5>Demo/{{ dataList[0].title }}</h5>
        </div>
        <div class="info">
          <h5>
            <span class="span">Total</span> Story Points:
            <span class="span">{{ total }}</span>
          </h5>
          <div class="values">
            <div class="values_item" style="color: blue">
              <h2>{{ dataList[0].backlog }}</h2>
              <p>BACKLOG</p>
            </div>
            <div class="values_item" style="color: violet">
              <h2>{{ dataList[0].wip }}</h2>
              <p>WIP</p>
            </div>
            <div class="values_item" style="color: #999901">
              <h2>{{ dataList[0].walidation }}</h2>
              <p>WALIDATION</p>
            </div>
            <div class="values_item" style="color: green">
              <h2>{{ dataList[0].delivered }}</h2>
              <p>DELIVERED</p>
            </div>
          </div>
        </div>
        <div class="down">
          <div class="down_left">{{ totalIssues }} Total issues</div>
          <div class="down_right">
            Story Points <span class="span">by</span> {{ dataList[0].title }}
          </div>
        </div>
      </div>
      <div class="section_item_down">
        <div class="name">
          <h5>Demo/{{ dataList[1].title }}</h5>
        </div>
        <h5>
          <span class="span">Total</span> Issues Count:
          <span class="span">{{ totalIssues }}</span>
        </h5>
        <ChartComponent
          class="chartComp"
          :per="dataList[1].per"
        ></ChartComponent>
        <div class="down">
          <div class="down_left">{{ totalIssues }} Total issues</div>
          <div class="down_right">
            Story Points <span class="span">by</span> Risk
          </div>
        </div>
      </div>
    </div>
    <div class="section_item middle">
      <div class="name">
        <h5>Demo/{{ dataList[2].title }}</h5>
      </div>
      <ColumnChart class="colChart" :list="dataList[2]"></ColumnChart>
      <div class="down">
        <div class="down_left">{{ totalWork }} Total issues</div>
        <div class="down_right">
          Story Points <span class="span">by</span> Risk
        </div>
      </div>
    </div>
    <div class="section_item">
      <div class="section_item_up">
        <div class="name">
          <h5>Demo/{{ dataList[3].title }}</h5>
        </div>
        <div class="property">
          <div class="property_item">
            <v-btn
              class="no-uppercase"
              size="x-small"
              v-for="(el, idx) in dataList[3].property"
              :key="idx"
              >{{ el }}</v-btn
            >
          </div>
          <div class="property_item">
            <v-btn class="icons" variant="text" size="1.5rem">
              <img src="./assets/perezagruzit.png" alt="Reload" />
            </v-btn>
            <v-btn class="icons" variant="text" size="1.5rem">
              <img src="./assets/krest.png" alt="Krest" />
            </v-btn>
          </div>
        </div>
      </div>
      <div class="section_item_down">
        <div class="name">
          <div class="name_left">
            <h5>Demo/{{ dataList[4].title }}</h5>
          </div>
          <div class="name_right">
            <v-btn class="icons" variant="text" size="x-small">
              <img src="./assets/strelki.png" alt="png" />
            </v-btn>
            <v-btn class="icons" variant="text" size="x-small">
              <img src="./assets/svernut.png" alt="png" />
            </v-btn>
            <v-btn class="icons" variant="text" size="x-small">
              <img src="./assets/strelka_vniz.png" alt="png" />
            </v-btn>
          </div>
        </div>
        <OptionsChart :data="dataList[4]" class="optionsChart"></OptionsChart>
        <div class="down">
          <div class="down_left">{{ totalIssues }} Total issues</div>
          <div class="down_right">
            Remaining Emistate <span class="span">by</span> Team
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.title {
  display: flex;
  justify-content: space-between;
  .titleItem,
  .titleOptions {
    padding: 1rem;
  }
  .titleOptions {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
.no-uppercase {
  text-transform: none;
}
section {
  display: flex;
  justify-content: space-around;
  gap: 10px;
  margin: 0 1rem;
  flex-wrap: wrap;
}
.span {
  font-weight: 100;
}
.section_item {
  width: 30%;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  .section_item_up,
  .section_item_down {
    border: 1px solid grey;
    border-radius: 5px;
  }
  .name {
    background-color: rgba(32, 80, 129);
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    &_right {
      display: flex;
      justify-content: end;
    }
  }
  .values {
    display: flex;
    justify-content: space-around;
    align-items: space-between;
    margin-bottom: 15px;
    &_item {
      font-size: 1.1rem;
      padding: 1%;
      p {
        font-size: 0.8rem;
        border: 1px solid;
        border-radius: 5px;
        padding: 2px;
      }
    }
  }
  .down {
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
    font-size: 13px;
    border-top: 1px solid gray;
    &_left {
      color: rgba(32, 80, 129);
    }
    &_right {
      font-weight: 600;
    }
  }
}
.middle {
  border: 1px solid grey;
  border-radius: 5px;
  justify-content: space-between;
}
.colChart {
  padding: 5px;
}
.property {
  display: flex;
  justify-content: space-between;
  &_item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1px;
    margin: 10px;
    letter-spacing: 0ch;
  }
}

.icons {
  .v-btn,
  .v-btn--size-x-small {
    padding: 1px;
    min-width: 16px;
  }
}
@media (max-width: 650px) {
  .title {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    .titleItem,
    .titleOptions {
      padding: 3px;
    }
  }
}
// .optionsChart {
//   height: 100%;
// }
</style>
