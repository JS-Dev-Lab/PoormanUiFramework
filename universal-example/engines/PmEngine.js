import { UiEngine } from "../../src/index";
import { render } from "../../pm-example/render";

const element = document.getElementById("app");
const engine = new UiEngine(element, render);

export {
    engine
}
