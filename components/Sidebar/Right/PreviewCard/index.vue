<template>
  <div class="m-2 overflow-hidden border rounded-2xl bg-gray-50 dark:bg-black/80 twitter-border-color">
    <h1 class="p-3 border-b text-xl font-extrabold text-gray-900 dark:text-white/90 twitter-border-color">
      {{ props.title }}
    </h1>
    <slot />
    <div class="p-3 text-sm text-twitter-blue cursor-pointer hover:bg-gray-100 dark:hover:bg-black/80 default-transition">
      Show more
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
