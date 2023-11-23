import { defineStore } from "pinia";

export const useMyIndexStore = defineStore("main", () => {
  const count = ref(0);
  const increment = () => count.value++;
  return { count, increment };
});
