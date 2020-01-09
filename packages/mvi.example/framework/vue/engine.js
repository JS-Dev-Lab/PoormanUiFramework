import { viewCreatorFactory } from "mvi.vue";
import App from "./App.vue";
const createView = viewCreatorFactory("#app", App);

export { createView };
