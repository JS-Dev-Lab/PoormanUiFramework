import { viewCreatorFactory } from "mvi.react";
import App from "./App";

const root = document.getElementById("app");
const createView = viewCreatorFactory(App, root);

export { createView };
