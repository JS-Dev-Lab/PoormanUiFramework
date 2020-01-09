function basicRender({ state }) {
  return `<pre>${JSON.stringify(state, null, 2)}</pre>`;
}

export { basicRender };