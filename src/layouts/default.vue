<template>
  <div>
    <NuxtLink to="/" class="font-semibold text-gray-50 hover:text-gray-400 duration-100">
      Home
    </NuxtLink>
    <NuxtLink to="/ui" class="font-semibold text-gray-50 hover:text-gray-400 duration-100">
      UI
    </NuxtLink>
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>