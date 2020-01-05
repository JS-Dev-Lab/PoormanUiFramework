import { RemoteDevHandler } from "./RemoteDevHandler";

class ObservableView {
  constructor({ view, state }) {
    this._view = view;
    this.listeners = [];
  }

  get state() { return this._view.state; }

  onStateChanged(callback) {
    this.listeners.push(callback);
    return () => { this.listeners = this.listeners.filter(listener => listener !== callback); }
  }

  update(updater) {
    this._view.update(updater);
    const state = this._view.state;
    this.listeners.forEach(listener => { listener(state); });
  }
}

function mapToDebug(createView, viewName = "application name") {
  return ({ state, commands }) => {
    const view = createView({ state, commands });
    const debugView = new ObservableView({ view, state });
    const remoteDev = new RemoteDevHandler({state, viewName, view});
    debugView.onStateChanged(newState => remoteDev.update(newState));
    return debugView;
  };
}

export { ObservableView, mapToDebug };
