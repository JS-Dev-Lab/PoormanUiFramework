<template>
  <div id="app">
    <h1>Hello {{state.name}}</h1>
    <input
      :value="state.name"
      @input="setName"
    />
    <p>{{length}}</p>
    <p>{{state.count}}</p><button @click="state.commands.add">My button</button>
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: Object,
      required: true
    }
  },
  inheritAttrs: false,
  name: "app",
  methods: {
    setName(event) {
      this.state.commands.setName(event.target.value);
    }
  },
  computed: {
    length() {
      return this.state.name.length;
    }
  }
};
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  overflow: hidden;
}
</style>
