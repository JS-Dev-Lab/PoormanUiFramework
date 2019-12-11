import { UiEngine } from "../../src/vue/engine";
import App from "./App.vue";

const engine = new UiEngine("#app", App);

export { engine };
