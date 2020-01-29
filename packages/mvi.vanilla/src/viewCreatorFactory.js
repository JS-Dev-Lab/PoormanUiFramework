import { basicRender } from "./basicRender";
import { fullStateViewCreatorFactory } from "mvi.core";

function viewCreatorFactory(element, render = basicRender) {
  const renderer = ({state, commands}, element) => {
    window.commands = commands;
    element.innerHTML = render({state, commands}, element);
  }
  return fullStateViewCreatorFactory(element, renderer);
}

export { viewCreatorFactory };
