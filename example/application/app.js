function run(uiEngine) {
  const view = uiEngine.initialRender({
    name: "universal application!!",
    count: 0,
    array: [],
    commands: {
      add() {
        view.update(state => {
          state.count++;
        });
      },
      setName(value) {
        view.update(state => {
          state.name = value;
        });
      }
    }
  });
}

export { run };
