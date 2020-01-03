async function getEngine(type) {
  try {
    const { createView } = await import(`./${type}/engine`);
    return createView;
  } catch {
    throw new Error(`invalid type: ${type}`);
  }
}

export { getEngine };
