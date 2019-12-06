<template>
  <div id="app">
    Hello {{name}}
  </div>
</template>

<script>

export default {
  name: "app",
  data(){
    return {
      name: "vue"
    }
  }
};
</script>

<style lang="less">
html {
  height: 100%;
}

body {
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
