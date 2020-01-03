import { viewCreatorFactory } from "../../src/react/engine";
import App from "./App";

const root = document.getElementById("app");
const createView = viewCreatorFactory(App, root);

export { createView };
