<script setup lang="ts"></script>

<template>
  <div class="col-12 md:col-5 lg:col-3 p-3">
    <Card>
      <template #header>
        <img
          class="card-img"
          src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png"
        />
      </template>
      <template #title>Resort</template>
      <template #subtitle>
        <div>Date Time</div>
        <div>Price</div>
        <div>Slots(1/4)</div>
      </template>
      <template #content>
        <p>Description</p>
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
