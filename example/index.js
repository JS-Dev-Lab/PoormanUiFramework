import { App } from "../src/index";

const render = state => `<h1>${state.name}</h1>
<p>${state.count}</p>
<ul>${state.array.map(value => `<li>${value}</li>`).join("")}</ul>`;
const element = document.getElementById("app");

const app = new App(element, render);
const state = {
  name: "hello",
  count: 0,
  array: []
};
app.render(state);


setInterval(() => {
  state.count++;  
  if (state.count % 100 === 0) {
    state.array = [];
  }
  state.array.push(state.count);
  app.render(state);
}, 100);