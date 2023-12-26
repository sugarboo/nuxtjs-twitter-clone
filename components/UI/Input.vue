<template>
  <div>
    <label
      v-if="props.label"
      for=""
      class="block ml-px pl-3 text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>
    <div class="mt-1">
      <input
        :value="props.modelValue"
        :type="props.type"
        :placeholder="props.placeholder"
        class="block w-full px-4 border-gray-300 rounded-full shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        @input="onInput"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    value: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    default: null,
  },
})

const emits = defineEmits(['update:modelValue'])

function onInput(event: Event) {
  emits('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>
