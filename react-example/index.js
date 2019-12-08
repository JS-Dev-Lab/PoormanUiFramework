import { UIEngine } from "./React-UIEngine";
import App from './App';
import { MyCountApplication } from "../application/app";

const root = document.getElementById('app');
const engine = new UIEngine(App, root);
const application = new MyCountApplication(engine);
application.run();
