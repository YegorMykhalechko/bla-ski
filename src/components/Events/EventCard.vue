<script setup lang="ts">
defineProps(['data'])
</script>

<template>
  <div class="col-12 md:col-5 lg:col-3 p-3">
    <Card>
      <template #header>
        <img
          class="card-img"
          src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png"
        />
      </template>
      <template #title>{{data.resort}}</template>
      <template #subtitle>
        <div>{{data.price}}</div>
      </template>
      <template #content>
        <div>{{data.date}}</div>
        <div>{{data.book_slots}}/{{data.slots}}</div>
        <p>{{data.description}}</p>
      </template>
      <template #footer>
        <Button icon="pi pi-check" label="Book" />
      </template>
    </Card>
  </div>
</template>

<style scoped>
.card-img {
  height: 10rem;
  object-fit: contain;
}
</style>
