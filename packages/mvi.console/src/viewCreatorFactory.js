import { basicRender } from "./basicRender";

function viewCreatorFactory(render = basicRender) {
  return ({ state, commands }) => {
    return new View({ state: { ...state }, commands }, render);
  }
}

class View {
  constructor({ state, commands }, render) {
    this._commands = commands;
    this._render = render;
    this.fullUpdate(state);
  }

  update(updater) {
    const newState = { ...this._state };
    updater(newState);
    this.fullUpdate(newState);
  }

  get state() {
    return this._state;
  }

  fullUpdate(state) {
    this._state = Object.freeze(state);
    this._render({ state: this._state, commands: this._commands }, console.log);
  }
}

module.exports = { viewCreatorFactory };