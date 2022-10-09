<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useLoginStore } from "@/stores/login";
const router = useRouter();
const store = useLoginStore();

const auth = () => {
  store.$patch({ isLogin: true });
  router.push({ name: "createEvent" });
};
</script>

<template>
  <h1>Login</h1>
  <Button @click="auth">Login</Button>
</template>

<style scoped></style>
