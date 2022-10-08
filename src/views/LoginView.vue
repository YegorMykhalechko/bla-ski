<script setup lang="ts">
import { ref } from "vue";
import {useRouter} from 'vue-router'
const username = ref('test');
const password = ref('');
const router = useRouter();

const auth = ()=> {
  localStorage.setItem('user', '1')
  router.push({name: 'createEvent'})
}
</script>

<template>
  <h1>Login</h1>
  <Button @click="auth">Login</Button>
</template>

<style scoped></style>
