<script>
import { ref } from 'vue'


export default {
    name: 'HeaderComp',
    setup() {
        const links = ref(['Dashboard', 'Projects', 'Issues','Agile'])
        return {
            links
        }
    }
}
</script>

<template>
    <header>
        <div class="burgerMenu">
            <v-btn class="burgerIcon" variant="text">
                <img src="@/assets/menu50.png" alt="BM">
            </v-btn>
        </div>
        <div class="linksMenu">
            <v-select solo v-for="link,id in links" :key="id"
            :items="items" density="comfortable"
            :label="link" variant="underlined"
            class="linksMenu_select remove-underline" v-field--none ></v-select>
            <v-btn>Create</v-btn>
        </div>
    </header>
</template>

<style lang="scss">
header{
    display: grid;
    grid-template-columns: 1fr 4fr 5fr;
    .burgerIcon{
        display: flex;
        justify-content: left;
    }
    .linksMenu{
        display: flex;
        .linksMenu_select{
            font-size: 12px;
            min-width: 100px;
        }
    } 
}
</style>

