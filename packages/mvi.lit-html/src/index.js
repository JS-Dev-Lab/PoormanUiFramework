import { fullStateViewCreatorFactory } from "mvi.core/src/FullStateView";

function viewCreatorFactory(element, template, render) {
  const renderer = ({state, commands}) => render(template({ state, commands }), element);
  return fullStateViewCreatorFactory(renderer);
}

export { viewCreatorFactory };