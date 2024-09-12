<!--Samaple-->
<!-- TEST -->

<script setup lang="ts">
  import {ref} from "vue";

  const mainText = ref("Hello World");

  const changeText = (inputText: string) => {
    mainText.value = inputText;
  }

</script>

<template>
  <div>
    <p>{{mainText}}</p>
    <input v-model="mainText" type="text" />
    <button @click="changeText(mainText)">
      텍스트 바꾸기
    </button>
  </div>
</template>

<style scoped>

</style>
