import { viewCreatorBuilder } from "../../src/vue/engine";
import App from "./App.vue";
const createView = viewCreatorBuilder("#app", App);

export { createView };
