<template>
  <div class="rickandmorty min-vh-100 p-5 text-center">
    <div class="d-inline-flex text-center p-3">
      <h1 class="text-center text-success">Rick and Morty</h1>
    </div>
    <Character :data="listaPersonajes"/>
  </div>

</template>

<script>
  import Character from "@/components/Character";

  export default {
    name: "RickAndMorty",
    components: {Character},
    data() {
      return {
        listaPersonajes: []
      }
    },
    methods: {
      async llamarPersonajes() {
        try {
          const data = await fetch('https://rickandmortyapi.com/api/character/')
          const personajes = await data.json()
          this.listaPersonajes = personajes.results
        } catch (error) {
          console.warn(error)
        }
      },
    },
    created() {
      this.llamarPersonajes()
    }
  }
</script>

<style scoped>
.rickandmorty {
  background-image: url("../assets/img/rickandmortyBackground01.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>