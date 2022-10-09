<script setup lang="ts">
import { ref } from "vue";
import EventCard from "../components/Events/EventCard.vue";
const events = ref([
  {
    id: 1,
    resort: "Zieleniec Sport Arena Ośrodek narciarski",
    slots: 4,
    book_slots: 2,
    date: new Date(),
    price: 100,
    description: "",
  },
]);
</script>

<template>
  <div v-for="(event, index) in events" class="grid grid-nogutter">
    <EventCard :key="event.id" :data="event"/>
  </div>
</template>

<style scoped>
.card-img {
  height: 10rem;
  object-fit: contain;
}
</style>
