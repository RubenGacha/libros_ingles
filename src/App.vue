<template>
  <nav>
    <NavMenu />
  </nav>
  <router-view />
</template>

<script>
import NavMenu from "@/components/NavMenu.vue"

export default ({
  components: {
    NavMenu,
  },
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFBA08;
  background-color: #03071E;
  min-height:100vh;
}
#cuerpo{
  margin: 1rem 10rem;
  padding: 0 0 6rem 0;
}

.enfasis {
    color: #E85D04;
}

.importante {
    background-color: #4d194d;
    padding: 2rem;
    margin: 2rem;
    border-style: dashed;
    border-color: #d00000;
}

.importante em {
    display: block;
    color: #D00000;
}

.significado {
  color: hsla(269, 100%, 62%, 1);
}

.menuValores {
  list-style: none;
  /* background-color: #000000; */
  display: inline-block;
  /* color: #ffffff; */
  /* margin: 10px; */
  padding: 1px;
  position: absolute;
  width: 150px;
}

.menuValores li {
  background-color: hsla(131, 100%, 10%, 1);
  color: #E85D04;
  border: 1px solid hsla(131, 100%, 50%, 1);
  padding: 6px 3px;
  text-indent: 0;
  text-transform: lowercase;
}

.menuValores li::first-letter {
  text-transform: uppercase;
}

.ocultar {
  display: none;
}
h1 {
    text-align: center;
    color: #E85D04;
    padding: 2rem 0;
}

h2 {
    color: #dc2f02;
    padding: 0 0.5rem;
    padding: 2rem 0;
}

h3 {
    color: #bb4d00;
    padding: 0 1.5rem;
    padding: 1rem 0;
}

h4 {
    color: #7400b8;
    padding: 0 2rem;
}

h5 {
    color: #adff02;
    padding: 0 2.5rem;
}

pre {
    padding: 1em 3em;
}

pre code {
    border-radius: 0.3em;
}

kbd {
    background-color: #7400b8;
    padding: 5px 5px;
    border-radius: 5px;
    display: inline;
    box-shadow: 0px 4px 8px -4px #555555;
}
</style>
