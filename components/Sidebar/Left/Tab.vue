<template>
  <nuxt-link
    to="#"
    class="flex items-center w-min p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white default-transition"
  >
    <div class="w-6 h-6 text-black">
      <slot name="icon" />
    </div>
    <div
      class="hidden ml-4 text-xl xl:block"
      :class="{
        'font-semibold': props.active,
        'font-normal': !props.active,
      }"
    >
      <slot name="name" />
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})
</script>
