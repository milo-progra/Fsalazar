<script setup>
import { RouterLink,  } from 'vue-router'

</script>

<template>

  <div class="h-screen">
    <div class="flex justify-center items-center  h-[93%]">
      <div class="rounded-lg w-5/6 h-5/6" style="background-color: rgba(0, 0, 0, 0.5);">
        <RouterView/>
      </div>
    </div>
    <div class="flex justify-center cursor-pointer">
      
      <svg class="w-8 rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
    </div>
  </div>
  
  
</template>

<style>
body{
  background-image: url('@/assets/img/fondo.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh; /* Ajusta según tus necesidades */
  width: 100%;
}

h1, h2, p {
  color: white;
}

</style>
