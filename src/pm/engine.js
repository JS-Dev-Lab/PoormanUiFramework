function viewCreatorFactory(element, render) {
  return ({ state, commands }) => {
    return new View({ state: { ...state }, commands }, element, render);
  }
}

class View {
  constructor({ state, commands }, element, render) {
    this._element = element;
    this._commands = commands;
    window.commands = commands;
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
    const html = this._render({ state: this._state, commands: this._commands });
    this._element.innerHTML = html;
  }
}

export { viewCreatorFactory };