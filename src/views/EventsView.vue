<script setup lang="ts"></script>

<template>
  <div class="grid grid-nogutter">
    <h1>Events</h1>
    <div class="col-12 p-3">
      <Card>
        <template #header>
          <img
            class="card-img"
            src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png"
          />
        </template>
        <template #title> Advanced Card </template>
        <template #subtitle> Card subtitle </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
        <template #footer>
          <Button icon="pi pi-check" label="Save" />
          <Button
            icon="pi pi-times"
            label="Cancel"
            class="p-button-secondary"
          />
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.card-img {
  height: 10rem;
  object-fit: contain;
}
</style>
