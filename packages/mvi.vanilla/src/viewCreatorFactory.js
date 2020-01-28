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
    this._agendedRedraw = false;
    window.commands = commands;
    this._render = render;
    this._newState = null
    this.fullUpdate(state);
  }

  update(updater) {
    this._newState = this._newState || { ...this._state };
    updater(this._newState);
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
    if (this._agendedRedraw) {
      return;
    }
    this._agendedRedraw = true;
    window.requestAnimationFrame(() => {
      const html = this._render({ state: this._state, commands: this._commands });
      this._element.innerHTML = html;
      this._agendedRedraw = false;
    });
  }
}

export { viewCreatorFactory };
