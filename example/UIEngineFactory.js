async function getEngine(type) {
  try {
    const { engine } = await import(`./${type}/engine`);
    return engine;
  } catch {
    throw new Error(`invalid type: ${type}`);
  }
}

export { getEngine };
