<script setup lang="ts">
defineOptions({
  name: 'CustomButton',
})

const props = defineProps<{
  text: string;
  onClick: () => void;
}>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();

</script>

<template>
  <button @click="() => { emit('click'); props.onClick(); }">
    {{ props.text }}
  </button>
</template>

<style scoped>

</style>
