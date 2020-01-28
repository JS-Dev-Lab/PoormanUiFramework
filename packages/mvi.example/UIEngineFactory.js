//import { mapToDebug } from "mvi.core";

async function getEngine(type) {
  try {
    const { createView } = await import(
      /* webpackChunkName: "[request]" */
      `./framework/${type}/engine`
    );
    return createView;
    //mapToDebug(createView);
  } catch {
    throw new Error(`invalid type: ${type}`);
  }
}

export { getEngine };
