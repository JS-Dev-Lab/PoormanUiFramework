import { UiEngine } from "./VueUiEngine";
import { MyCountApplication } from "../application/app";

const engine = new UiEngine("#app");
const application = new MyCountApplication(engine);

application.run();
