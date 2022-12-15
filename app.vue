<template>
  <div>
    count:{{ count }}
    <button @click="inc()">inc</button>
  </div>
</template>
<script setup lang="ts">
const count = ref(0);
function inc() {
  count.value++;
}
</script>
