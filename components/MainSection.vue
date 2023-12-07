<template>
  <div class="border-x twitter-border-color">
    <div class="sticky top-0 font-bold text-gray-800 dark:text-gray-100">
      {{ props.title }}
    </div>

    <div
      v-if="props.loading"
      class="flex justify-center items-center p-4 border-b twitter-border-color"
    >
      <UISpinner />
    </div>
    <div v-else>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    requried: true,
  },
  loading: {
    type: Boolean,
    default: true,
  },
})
</script>
