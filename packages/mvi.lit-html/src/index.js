import { render } from 'lit-html';

function viewCreatorFactory(element, template) {
    return ({ state, commands }) => {
        return new View({ state, commands }, element, template);
    };
};

class View {
  constructor({ state, commands }, element, template) {
    this._element = element;
    this._commands = commands;
    this._redrawScheduled = false;
    this._template = template;
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
      render(this._template({ state: this._state, commands: this._commands }), this._element);
      this._redrawScheduled = false;
    });
  }
}

export { viewCreatorFactory };