<!--Samaple-->
<!-- TEST -->

<script setup lang="ts">
import { computed, ref } from 'vue'
import {useCounterStore} from "stores/example-store";
import CustomButton from "components/CustomButton.vue";

  const mainText = ref("Hello World");

  const changeText = (inputText: string) => {
    mainText.value = inputText;
  }

  const textLength = computed(() => {
    return mainText.value.length;
  });

  const counterStore = useCounterStore();

  console.log(counterStore.counter);

  const handleClick = () => {
    alert('Button clicked!');
  };

  const emitEvent = () => {
    console.log('emitEvent');
  }

</script>

<template>
  <div>
    <h6>{{ mainText }}</h6>
    <input v-model="mainText" type="text" />
    <button @click="changeText(mainText)">
      텍스트 바꾸기
    </button>
    <p>Text length: {{ textLength }}</p> <!-- New computed property -->
  </div>

  <div>
    <h6>Using Pinia</h6>
    <p>카운터 {{counterStore.counter}}</p>
    <p>템프 카운터 {{counterStore.tempCounter}}</p>
    <p>카운터 더블 {{counterStore.doubleCount}}</p>
    <button @click="counterStore.increment()">증가시키기</button>
  </div>

  <div>
    <h6>Custom Component</h6>
    <CustomButton
      text="Click Me"
      :onClick="handleClick"
      @event="emitEvent"
    />
  </div>

</template>

<style scoped>

</style>
