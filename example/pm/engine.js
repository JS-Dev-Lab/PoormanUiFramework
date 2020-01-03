import { viewCreatorFactory } from "../../src/pm/engine";
import { render } from "./render";

const element = document.getElementById("app");
const createView = viewCreatorFactory(element, render);

export { createView };
