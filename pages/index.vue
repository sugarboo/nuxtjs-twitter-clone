<template>
  <div>
    <MainSection title="Home" :loading="loading" />
  </div>
</template>

<script setup lang="ts">
const loading = ref(false)
</script>
