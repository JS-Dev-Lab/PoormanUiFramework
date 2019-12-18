import React from "react";
import ReactDOM from "react-dom";

class UIEngine {
  constructor(App, root) {
    this._App = App;
    this._root = root;
  }

  initialRender(state) {
    const component =  ReactDOM.render(<this._App state={state} />, this._root);
    return new View(component, state);
  }
}

class View {
  constructor(component, state) {
    this._state = Object.freeze({ ...state });
    this._component = component;
  }

  update(updater) {
    const newState = { ...this._state };
    updater(newState);
    this._component.setState(newState);
    return new View(this._component, newState);
  }
}

export { UIEngine };
