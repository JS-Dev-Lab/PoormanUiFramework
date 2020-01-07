import { viewCreatorFactory } from "mvi.vanilla";
import { render } from "./render";

const element = document.getElementById("app");
const createView = viewCreatorFactory(element, render);

export { createView };
