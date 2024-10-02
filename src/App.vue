<template>
  <RouterView></RouterView>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
    width: 4px; 
    height: 1px; 
}

::-webkit-scrollbar-track {
    background-color: #f1f1f1; 
    border-radius: 6px; 
}


::-webkit-scrollbar-thumb {
    background-color: #4c88f8; 
    border-radius: 10px;
}


::-webkit-scrollbar-thumb:hover {
    background-color: #555; 
}

::-webkit-scrollbar-thumb:window-inactive {
    background-color: #aaa; 
}

</style>
