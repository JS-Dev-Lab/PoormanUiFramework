class MyCountApplication {
  constructor(uiEngine) {
    this._uiEngine = uiEngine;
  }

  run() {
    let view = this._uiEngine.initialRender({
      name: "hello",
      count: 0,
      array: [],
      commands:{
        add() {
          view = view.update(state => {
            state.count++;
          });
        }
      }
    });
  }
}

export {
  MyCountApplication
}