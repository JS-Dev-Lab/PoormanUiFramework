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
    this._element = element;
    this._render = render;
    this.render(state);
  }

  update(updater) {
    const newState = { ...this._state };
    updater(newState);
    this.render(newState);
  }

  render(state) {
    this._state = Object.freeze(state);
    window.state = this._state;
    const html = this._render(this._state);
    this._element.innerHTML = html;
  }
}

export { UiEngine };
