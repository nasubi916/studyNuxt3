<template>
  <div>
    <p class="text-red-700">
      Home
      {{ count }}
      <span class="bg-blue-700  p-1 aspect-square w-max h-max">
        <button @click="increment()">
          +
        </button>
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
const { increment } = useCounterStore();
const { count } = storeToRefs(useCounterStore());
</script>
