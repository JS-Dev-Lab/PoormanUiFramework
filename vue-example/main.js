import { UiEngine } from "./VueUiEngine";
import App from "./App.vue";
import { MyCountApplication } from "../application/app";

const engine = new UiEngine("#app", App);
const application = new MyCountApplication(engine);

application.run();
