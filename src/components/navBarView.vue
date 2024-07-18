<script setup>
    import { RouterLink,  } from 'vue-router'


</script>
<template>
    <div class="flex">
        <RouterLink :to="{ name: 'home' }"><div class="bg-white p-3 mr-4 rounded-full"></div></RouterLink>
        <RouterLink :to="{ name: 'skills' }"><div class="bg-white p-3 mr-4 rounded-full"></div></RouterLink>
        <RouterLink :to="{ name: 'experience' }"><div class="bg-white p-3 mr-4 rounded-full"></div></RouterLink>
        <RouterLink :to="{ name: 'contact' }"><div class="bg-white p-3 mr-4 rounded-full"></div></RouterLink>
    </div>
</template>
<style>

</style>