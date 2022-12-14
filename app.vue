<template>
  <div>
    count:{{count}}
    <button @click="inc()">inc</button>
    <button @click="dec()">dec</button>
  </div>
</template>
<script setup lang="ts">
const count = ref(0);
function inc() {
  count.value++;
}
function dec() {
  count.value--;
}
</script>
