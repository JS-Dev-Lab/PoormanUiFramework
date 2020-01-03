import { viewCreatorBuilder } from "../../src/pm/engine";
import { render } from "./render";

const element = document.getElementById("app");
const createView = viewCreatorBuilder(element, render);

export { createView };
