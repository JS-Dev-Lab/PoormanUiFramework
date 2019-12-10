import { UIEngine } from "../../react-example/React-UIEngine";
import App from "../../react-example/App";

const root = document.getElementById("app");
const engine = new UIEngine(App, root);

export {
    engine
}
