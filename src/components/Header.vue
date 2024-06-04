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
            <div>
                <v-btn class="burgerIcon" variant="text">
                <img src="/assets/menu50.png" alt="BM" >
            </v-btn>
            </div>
            
        </div>
        <div class="linksMenu">
            <v-select solo v-for="link,id in links" :key="id"
            :items="items" density="comfortable"
            :label="link" variant="underlined"
            class="linksMenu_select remove-underline" v-field--none ></v-select>
            <v-btn class="linksMenu_btn" size="x-small">Create</v-btn>
        </div>
        <div class="loginMenu">
            <v-text-field label="Search" append-inner-icon="mdi-magnify" variant="solo">
            </v-text-field>
            <v-select
            :items="items" density="comfortable"
            :label="link" variant="underlined"
            class="linksMenu_select remove-underline" v-field--none ></v-select>
        </div>
    </header>
</template>

<style lang="scss">
header{
    display: grid;
    grid-template-columns: 0.9fr 4fr 5fr;
    background-color: rgba(32, 80, 129);
    align-items:center;
    color: white;
    padding: 5px 0;
    div{
         display: flex;
        justify-content: left;
        align-items: center;
        gap: 5px;
    }
    .burgerIcon{
        img{
            width: 30px;
            height: 30px;
        }
    }
    .linksMenu,.loginMenu{
        display: flex;
        align-items: center;
        .linksMenu_select{
            font-size: 6px;
            min-width: 100px;
            .v-field__outline::before, .v-field__outline::after {
                width: 0;
            }
        }
        &_btn{
            background-color: rgba(59,129,197);
        }
    } 
    .v-select .v-field.v-field{
        font-size: 10px;
    }
    .v-input__details{
        display: none;
    }
    .v-field__append-inner, .v-field__input, .v-field.v-field--variant-underlined .v-field__append-inner{
        padding-top:0;
    }
    .v-label, .v-field__input{
        font-size: 13px;
    }
    .loginMenu{
        display: flex;
        justify-content: end;
        align-items: center;
        
        .v-field{
        --v-field-input-padding-top:none;
        background-color: rgba(65, 135, 214, 0.779);
        }
    }
    .v-input{
        max-width: 150px;
    }

    
}
</style>

