import { viewCreatorFactory } from "mvi.lit-html";
import { render } from 'lit-html';
import { template } from "./template";

const root = document.getElementById("app");
const createView = viewCreatorFactory(root, template, render);

export { createView };