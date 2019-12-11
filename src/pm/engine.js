class UiEngine {
  constructor(element, render) {
    this._render = render;
    this._element = element;
  }

  initialRender(state) {
    return new View({ ...state }, this._element, this._render);
  }
}

class View {
  constructor(state, element, render) {
    this._state = Object.freeze(state);
    this._element = element;
    this._render = render;
    window.state = this._state;
    const html = render(this._state);
    element.innerHTML = html;
  }

  update(updater) {
    const newState = { ...this._state };
    updater(newState);
    return new View(newState, this._element, this._render);
  }
}

export { UiEngine };
