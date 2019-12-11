import { UiEngine } from "../../src/pm/engine";
import { render } from "./render";

const element = document.getElementById("app");
const engine = new UiEngine(element, render);

export { engine };
