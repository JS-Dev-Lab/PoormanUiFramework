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

class DebugView {
  constructor({ view, state, viewName = "application name" }) {
    const updateForDebug = !!view.fullUpdate ? view.fullUpdate.bind(view) : console.warn("Time travel not implemented");
    this._remoteDev = new RemoteDevHandler(state, viewName, updateForDebug);
    this._view = view;
  }

  update(updater) {
    this._view.update(updater, (state) => this._remoteDev.update(state));
  }
}

function debugViewCreatorFactory(viewCreatorFactory, ...parameters) {
  return ({ state, commands }) => {
    const view = viewCreatorFactory(...parameters)({ state, commands });
    return new DebugView({ view, state });
  };
}

function mapToDebug(createView) {
  return ({ state, commands }) => {
    const view = createView({ state, commands });
    return new DebugView({ view, state });
  };
}

export { DebugView , mapToDebug};
