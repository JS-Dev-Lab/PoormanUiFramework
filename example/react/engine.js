import { viewCreatorBuilder } from "../../src/react/engine";
import App from "./App";

const root = document.getElementById("app");
const createView = viewCreatorBuilder(App, root);

export { createView };
