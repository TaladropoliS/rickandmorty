<template>
  <div class="col-md-8 col-lg-6 mx-auto">
    <div class="card mb-3 text-success bg-transparent border-success rounded-3"
         v-for="(personaje, i) in data" :key="i">
      <div class="row p-2">
        <div class="col-3 col-md-2">
          <img :src="personaje.image"
               class="img-fluid rounded-circle" alt="Rick Sanchez">
        </div>
        <div class="col-9 col-md-10 my-auto text-start">
          <h4 class="card-title">{{ personaje.name }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Character",
    props: ['data'],
    data() {
      return {}
    },

  }
</script>

<style scoped>
h4 {
  text-shadow: 1px 1px #969696;
}
</style>