import { basicRender } from "./basicRender";
import { fullStateViewCreatorFactory } from "mvi.core/src/FullStateView";

function viewCreatorFactory(render = basicRender) {
  const renderer = states => render(states, console.log);
  return fullStateViewCreatorFactory(renderer);
}

module.exports = { viewCreatorFactory };