import { viewCreatorFactory } from "mvi.lit-html";
import { template } from "./template";

const root = document.getElementById("app");
const createView = viewCreatorFactory(root, template);

export { createView };