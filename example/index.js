import { UiEngine } from "../src/index";
import { MyCountApplication } from "../application/app";

function render({array, name, count, commands}) {
  return `<h1>Hello ${name}</h1>
 <input value="${name}" onInput="state.commands.setName(event.target.value)"></input>
 <p>${count}</p><button onClick="state.commands.add()">My button</button>
 <ul>${array.map(value => `<li>${value}</li>`).join("")}</ul>`;
};

const element = document.getElementById("app")

const engine = new UiEngine(element, render);
const application = new MyCountApplication(engine);

application.run();
