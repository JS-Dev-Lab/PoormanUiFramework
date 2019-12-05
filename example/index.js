import { UiEngine } from "../src/index";
import { MyCountApplication } from "./app";


const render = state => `<h1>${state.name}</h1>
<p>${state.count}</p>
<ul>${state.array.map(value => `<li>${value}</li>`).join("")}</ul>`;
const element = document.getElementById("app");

const engine = new UiEngine(element, render);
const application = new MyCountApplication(engine);
application.run();
