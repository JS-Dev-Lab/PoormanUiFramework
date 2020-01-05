import { mapToDebug } from "../src/ObservableView.js"

async function getEngine(type) {
  try {
    const { createView } = await import(`./${type}/engine`);
    const createDebugView = mapToDebug(createView);
    return createDebugView;
  } catch {
    throw new Error(`invalid type: ${type}`);
  }
}

export { getEngine };
