import { App } from "../src/index";

const render = state => `<h1>${state.name}</h1>
<p>${state.count}</p>`;
const element = document.getElementById("app");

const app = new App(element, render);
const state = {
  name: "hello",
  count: 0
};
app.render(state);


setInterval(() => {
  state.count++;
  app.render(state);
}, 100);