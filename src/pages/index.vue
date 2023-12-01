<template>
  <div>
    <div class="text-red-700">
      Home
      {{ count + " " + double }}
      <button @click="increment()">
        <div class="bg-blue-700 p-3 aspect-square w-max h-max">
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useCounterStore();
const { increment } = store;
const { count, double } = storeToRefs(store);
</script>