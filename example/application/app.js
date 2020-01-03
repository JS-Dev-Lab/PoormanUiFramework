function run(createView) {
  const view = createView({
    state: {
      name: "universal application!!",
      count: 0,
      array: []
    },
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
