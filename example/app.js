class MyCountApplication {
  constructor(uiEngine) {
    this._uiEngine = uiEngine;
  }

  run() {
    let view = this._uiEngine.initialRender({
      name: "hello",
      count: 0,
      array: []
    });

    setInterval(() => {
      view = view.update(current => {
        current.count++;
        if (current.count % 100 === 0) {
          current.array = [];
        }
        current.array.push(current.count);
      });
    }, 100);
  }
}

export {
  MyCountApplication
}