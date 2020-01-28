function run(createView) {
  const update = state => {
    state.count++;
  };

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
      addALot() {
        for (let i = 0; i < 1000000; i++) {
          view.update(update);
        }
      },
      addALotFast() {
        view.update(state => {
          for (let i = 0; i < 1000000; i++) {
            state.count++;
          }
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
