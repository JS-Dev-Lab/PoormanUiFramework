import { connectViaExtension, extractState } from "remotedev";

class RemoteDevHandler {
  constructor(state, viewName, updateState) {
    this.remoteDev = connectViaExtension();
    this.remoteDev.init(state, { name: `${viewName}` });
    this.remoteDev.subscribe(message => {
      const state = extractState(message);
      if (!state) {
        return;
      }
      updateState(state);
    });
  }

  update(state) {
    this.remoteDev.send("action", state);
  }
}

function getUpdaterForDebug(view) {
  if (!view.fullUpdate) {
    console.warn("Time travel not implemented");
    return () => { };
  }
  return view.fullUpdate.bind(view);
}

class DebugView {
  constructor({ view, state, viewName = "application name" }) {
    const updateForDebug = getUpdaterForDebug(view);
    this._remoteDev = new RemoteDevHandler(state, viewName, updateForDebug);
    this._view = view;
  }

  get state() { return this._view.state; }

  update(updater) {
    this._view.update(updater);
    this._remoteDev.update(this._view.state)
  }
}

function mapToDebug(createView) {
  return ({ state, commands }) => {
    const view = createView({ state, commands });
    return new DebugView({ view, state });
  };
}

export { DebugView, mapToDebug };
