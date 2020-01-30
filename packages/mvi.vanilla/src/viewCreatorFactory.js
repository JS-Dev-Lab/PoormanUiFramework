import { basicRender } from "./basicRender";
import { fullStateViewCreatorFactory } from "mvi.core/src/FullStateView";

function viewCreatorFactory(element, render = basicRender) {
  const renderer = ({state, commands}) => {
    window.commands = commands;
    element.innerHTML = render({state, commands});
  };
  return fullStateViewCreatorFactory(renderer);
}

export { viewCreatorFactory };
