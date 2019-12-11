import { UIEngine } from "../../src/react/engine";
import App from "./App";

const root = document.getElementById("app");
const engine = new UIEngine(App, root);

export { engine };
