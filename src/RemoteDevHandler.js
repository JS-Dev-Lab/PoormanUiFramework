import { connectViaExtension, extractState } from "remotedev";

function getUpdaterForDebug(view) {
  if (!view.fullUpdate) {
    console.warn("Time travel not implemented");
    return () => { };
  }
  return view.fullUpdate.bind(view);
}

class RemoteDevHandler {
  constructor({state , view, viewName}) {
    const updateState = getUpdaterForDebug(view);
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

export { RemoteDevHandler };