import { RemoteDevHandler } from "./RemoteDevHandler";

class ObservableView {
  constructor({ view }) {
    this._view = view;
    this.listeners = [];
  }

  get state() {
    return this._view.state;
  }

  onStateChanged(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  }

  fullUpdate(updater) {
    this._view.fullUpdate(updater);
  }

  update(updater) {
    this._view.update(updater);
    const state = this._view.state;
    this.listeners.forEach(listener => {
      listener(state);
    });
  }
}

function mapToObservable(createView) {
  return ({ state, commands }) => {
    const view = createView({ state, commands });
    return new ObservableView({ view, state });
  };
}

function mapToDebug(createView, viewName = "application name") {
  return ({ state, commands }) => {
    const view = mapToObservable(createView)({ state, commands });
    const remoteDev = new RemoteDevHandler({ state, viewName, view });
    view.onStateChanged(newState => remoteDev.update(newState));
    return view;
  };
}

export { ObservableView, mapToDebug, mapToObservable };
