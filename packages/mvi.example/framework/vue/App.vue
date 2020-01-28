<template>
  <div id="app">
    <h1>Hello {{ state.name }}</h1>
    <input :value="state.name" @input="setName" />
    <p>{{ length }}</p>
    <p>{{ state.count }}</p>
    <button @click="commands.add">Add</button>
    <button @click="commands.addALot">Add a lot</button>
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: Object,
      required: true
    },
    commands: {
      type: Object
    }
  },
  name: "app",
  methods: {
    setName(event) {
      this.commands.setName(event.target.value);
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
