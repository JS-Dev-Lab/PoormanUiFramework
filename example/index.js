import { App } from "../src/index";

const render = state => `<h1>${state.name}</h1>`;
const element = document.getElementById("app");

const app = new App(element, render);
console.log(app.render)
app.render({ name: "hello" });