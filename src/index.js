class App {
  constructor(element, render) {
    this._render = render;
    this._element = element;
  }

  render(state) {
    const html = this._render(state);
    this._element.innerHTML = html;
  }
}

export {
  App
};