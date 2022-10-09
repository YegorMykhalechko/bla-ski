<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useLoginStore } from "@/stores/login";
const router = useRouter();
const store = useLoginStore();
const items = ref([
  {
    label: "Events",
    icon: "pi pi-fw pi-calendar",
    to: "/events",
  },
  {
    label: "Login",
    to: "/login",
    visible: () => !store.isLogin,
  },
  {
    label: "Quit",
    icon: "pi pi-fw pi-power-off",
    visible: () => store.isLogin,
    command: () => {
      store.$patch({ isLogin: false });
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
