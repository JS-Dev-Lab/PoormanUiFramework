class UiEngine {
  constructor(element, render) {
    this._render = render;
    this._element = element;
  }

  render(state) {
    const html = this._render(state);
    this._element.innerHTML = html;
  }

  initialRender(state) {
    return new View(state, this);
  }
}

class View {
  constructor(state, engine) {
    this._state = state;
    this._engine = engine;
    engine.render(state);
  }

  update(updater) {
    const { _engine, _state } = this;
    const state = { ..._state };
    updater(state);
    return new View(state, _engine);
  }
}

export {
  UiEngine
};