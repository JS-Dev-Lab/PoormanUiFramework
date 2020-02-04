function fullStateViewCreatorFactory(renderer) {
  return ({ state, commands }) => new View({ state: { ...state }, commands }, renderer);
}

const dispatcher = (typeof window !== "undefined") ? window.requestAnimationFrame : setImmediate;

class View {
  constructor({ state, commands }, renderer) {
    this._commands = commands;
    this._renderer = renderer;
    this._redrawScheduled = false;
    this._newState = null
    this.fullUpdate(state);
  }

  update(updater) {
    if (this._newState !== null) {
      updater(this._newState);
      return;
    }
    this._newState = { ...this._state };
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
    if (this._redrawScheduled) {
      return;
    }
    this._redrawScheduled = true;
    dispatcher(() => {
      this._renderer({ state: this._state, commands: this._commands });
      this._redrawScheduled = false;
    });
  }
}

export { fullStateViewCreatorFactory };
