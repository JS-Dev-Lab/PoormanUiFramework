import React from "react";
import ReactDOM from "react-dom";

class UIEngine {
  constructor(App, root) {
    this._App = App;
    this._root = root;
  }

  initialRender(state) {
    return new View(this._App, this._root, state);
  }
}

class View {
  constructor(App, root, state) {
    this._App = App;
    this._root = root;
    this._state = Object.freeze({ ...state });
    ReactDOM.render(<App state={this._state} />, root);
    window.view = this;
  }

  update(updater) {
    const newState = { ...this._state };
    updater(newState);
    return new View(this._App, this._root, newState);
  }
}

export { UIEngine };
