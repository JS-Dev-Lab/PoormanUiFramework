import { viewCreatorFactory } from "../../src/vue/engine";
import App from "./App.vue";
const createView = viewCreatorFactory("#app", App);

export { createView };
