import { UiEngine } from "../src/index";

function render({ array, name, count }) {
  return `<h1>Hello ${name}</h1>
 <input value="${name}" onInput="state.commands.setName(event.target.value)"></input>
 <p>${name.length}</p>
 <p>${count}</p><button onClick="state.commands.add()">My button</button>
 <ul>${array.map(value => `<li>${value}</li>`).join("")}</ul>`;
};
const element = document.getElementById("app")
const engine = new UiEngine(element, render);

export {
  engine
}
