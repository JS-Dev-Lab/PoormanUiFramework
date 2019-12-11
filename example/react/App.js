import React, { Component } from "react";

class App extends Component {
  render() {
    const { state } = this.props;
    const { commands } = state;
    const { add, setName } = commands;
    const onChange = event => {
      setName(event.target.value);
    };
    return (
      <div className="App">
        <h1>Hello {state.name}</h1>
        <input value={state.name} onChange={onChange}></input>
        <p>{state.name.length}</p>
        <p>{state.count}</p>
        <button onClick={add}>My button</button>
      </div>
    );
  }
}

export default App;
