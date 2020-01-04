import React from "react";
import ReactDOM from "react-dom";

function viewCreatorFactory(App, root) {
  return ({ state, commands }) => {
    const component = ReactDOM.render(<App state={state} commands={commands} />, root);
    return new View(component, state);
  }
}

class View {
  constructor(component, state) {
    this._state = Object.freeze({ ...state });
    this._component = component;
  }

  update(updater, callback) {
    const newState = { ...this._state };
    updater(newState);
    this.fullUpdate(newState);
    callback && callback(newState);
  }

  fullUpdate(newState) {
    this._state = newState;
    this._component.setState(newState);
  }
}

export { viewCreatorFactory };
