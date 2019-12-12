function run(uiEngine) {
  let view = uiEngine.initialRender({
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

export { run };
