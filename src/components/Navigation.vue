<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
const router = useRouter();
const user = localStorage.getItem('user')
const items = ref([
  {
    label: "Events",
    icon: "pi pi-fw pi-calendar",
    to: "/events",
  },
  {
    label: "Login",
    to: "/login",
    visible: () => !user
  },
  {
    label: "Quit",
    icon: "pi pi-fw pi-power-off",
    visible: () => user,
    command: () => {
      localStorage.clear();
      router.push({ name: "home" });
    },
  },
]);
</script>

<template>
  <header>
    <Menubar :model="items">
      <template #start>
        <RouterLink to="/">Logo</RouterLink>
      </template>
    </Menubar>
  </header>

  <RouterView />
</template>

<style scoped></style>
