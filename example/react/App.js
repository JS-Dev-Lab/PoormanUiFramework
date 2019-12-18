import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.state };
  }

  render() {
    const { state } = this;
    const { commands: { add, setName } } = state;
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
