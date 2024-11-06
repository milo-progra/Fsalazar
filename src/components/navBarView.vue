<script setup>
    import { watch } from 'vue';
    import {useRoute} from 'vue-router'

    const route = useRoute()

    
    watch(
        () => route.params,
        async newId => {
            console.log(route.name);
        }
)

</script>
<template>
    <div class="flex  h-14 items-center">
        <RouterLink :to="{ name: 'home' }" class="bg-white p-3 h-3 mr-10 rounded-full hover:h-10" exact-active-class="active-link"></RouterLink>
        <RouterLink :to="{ name: 'sobre_mi'}" class="bg-white p-3 h-3 mr-10 rounded-full hover:h-10" exact-active-class="active-link"></RouterLink>
        <RouterLink :to="{ name: 'skills'}" class="bg-white p-3 h-3 mr-10 rounded-full hover:h-10" exact-active-class="active-link"></RouterLink>
        <RouterLink :to="{ name: 'contact' }" class="bg-white p-3 h-3 mr-10 rounded-full hover:h-10" exact-active-class="active-link"></RouterLink>
    </div>
</template>
<style>

.active-link {
    background-color: #B2B1B1; /* Cambia esto al color que desees */
}

</style>