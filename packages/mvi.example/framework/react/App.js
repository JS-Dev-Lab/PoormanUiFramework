import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.state };
  }

  render() {
    const { state, props } = this;
    const {
      commands: { add, setName, addALot }
    } = props;
    const onChange = event => {
      setName(event.target.value);
    };
    return (
      <div className="App">
        <h1>Hello {state.name}</h1>
        <input value={state.name} onChange={onChange}></input>
        <p>{state.name.length}</p>
        <p>{state.count}</p>
        <button onClick={add}>Add</button>
        <button onClick={addALot}>Add a lot</button>
      </div>
    );
  }
}

export default App;
