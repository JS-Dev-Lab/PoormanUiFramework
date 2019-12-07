import { engine } from "./UIEngineBuilder";
import { MyCountApplication } from "../application/app";

const application = new MyCountApplication(engine);
application.run();
