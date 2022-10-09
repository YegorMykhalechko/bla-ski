import { ref } from "vue";
import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", () => {
  const isLogin = ref(false);
  return {
    isLogin
  };
});
