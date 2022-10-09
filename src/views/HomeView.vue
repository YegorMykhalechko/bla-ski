<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
</script>

<template>
  <h1>Home</h1>
  {{store.count}}
</template>

<style scoped></style>
