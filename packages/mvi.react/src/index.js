import React from "react";
import ReactDOM from "react-dom";
import { fullStateViewCreatorFactory } from "mvi.core/src/FullStateView";

function viewCreatorFactory(App, element) {
  return ({ state, commands }) => {
    const component = ReactDOM.render(
      <App state={state} commands={commands} />,
      element
    );
    const renderer = ({ state }) => component.setState(state);
    return fullStateViewCreatorFactory(renderer)({ state, commands });
  };
}

export { viewCreatorFactory };
