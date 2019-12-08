import { UiEngine } from "../src/index";
import { render } from "./render";
import { MyCountApplication } from "../application/app";

const element = document.getElementById("app")
const engine = new UiEngine(element, render);

const application = new MyCountApplication(engine);
application.run();
