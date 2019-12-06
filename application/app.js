class MyCountApplication {
  constructor(uiEngine) {
    this._uiEngine = uiEngine;
  }

  run() {
    let view = this._uiEngine.initialRender({
      name: "universal application!!",
      count: 0,
      array: [],
      commands: {
        add() {
          view = view.update(state => {
            state.count++;
          });
        },
        setName(value) {
          view = view.update(state => {
            state.name = value;
          });
        }
      }
    });
  }
}

export {
  MyCountApplication
}