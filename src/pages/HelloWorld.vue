<!--Samaple-->
<!-- TEST -->

<script setup lang="ts">
import { computed, ref } from 'vue'

  const mainText = ref("Hello World");

  const changeText = (inputText: string) => {
    mainText.value = inputText;
  }

  const textLength = computed(() => {
    return mainText.value.length;
  });

</script>

<template>
  <div>
    <p>{{ mainText }}</p>
    <input v-model="mainText" type="text" />
    <button @click="changeText(mainText)">
      텍스트 바꾸기
    </button>
    <p>Text length: {{ textLength }}</p> <!-- New computed property -->
  </div>
</template>

<style scoped>

</style>
