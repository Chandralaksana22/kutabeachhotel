<script setup>
import { onMounted } from 'vue'; 
import { useFlowbite } from '~/composables/useFlowbite'; 

onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
});
useHead({
  htmlAttrs: {
    lang: 'en',
  },
});
</script>
<template>
  <div class="light-bg">
    <NuxtPage />
  </div>
</template>