function fullStateViewCreatorFactory(element, renderer) {
  return ({ state, commands }) => {
    return new View({ state: { ...state }, commands }, element, renderer);
  };
}

class View {
  constructor({ state, commands }, element, renderer) {
    this._element = element;
    this._commands = commands;
    this._renderer = renderer;
    this._redrawScheduled = false;
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
      this._renderer({ state: this._state, commands: this._commands }, this._element);
      this._redrawScheduled = false;
    });
  }
}

export { fullStateViewCreatorFactory };
