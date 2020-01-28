import { basicRender } from "./basicRender";

function viewCreatorFactory(element, render = basicRender) {
  return ({ state, commands }) => {
    return new View({ state: { ...state }, commands }, element, render);
  };
}

class View {
  constructor({ state, commands }, element, render) {
    this._element = element;
    this._commands = commands;
    this._redrawScheduled = false;
    window.commands = commands;
    this._render = render;
    this._newState = null
    this.fullUpdate(state);
  }

  update(updater) {
    const needStateScheduledUpdate = this._newState == null;
    this._newState = this._newState || { ...this._state };
    updater(this._newState);
    if (!needStateScheduledUpdate){
      return;
    }
    Promise.resolve().then(() => {
      this.fullUpdate(this._newState);
      this._newState = null;
    });
  }

  get state() {
    return this._state;
  }

  fullUpdate(state) {
    this._state = Object.freeze(state);
    if (this._redrawScheduled) {
      return;
    }
    this._redrawScheduled = true;
    window.requestAnimationFrame(() => {
      const html = this._render({ state: this._state, commands: this._commands });
      this._element.innerHTML = html;
      this._redrawScheduled = false;
    });
  }
}

export { viewCreatorFactory };
