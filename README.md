# mvi.vanilla aka poorman framework
World's tiniest UI framework

[![Npm version](https://img.shields.io/npm/v/mvi.vanilla.svg)](https://www.npmjs.com/package/mvi.vanilla
)
[![MIT License](https://img.shields.io/github/license/David-Desmaisons/PoormanUiFramework.svg)](https://github.com/David-Desmaisons/PoormanUiFramework/blob/master/LICENSE)


**POC for demo only!**

# Features

* 3Kb unzipped
* Old browsers support
* Pure JS template 
* Only 2 APIs to avoid cognitive overload
* Support batch upload
* No virtual DOM
* 29 LOCs

# Install

```
npm install mvi.vanilla
```


# Usage

Init and create view
``` javascript
import { viewCreatorFactory } from "mvi.vanilla";

const render = ({state}) => `<h1>${state.name}</h1>
<p>${state.count}</p>
<ul>${state.array.map(value => `<li>${value}</li>`).join("")}</ul>`;

const element = document.getElementById("app");

const createView = viewCreatorFactory(element, render);
let view = createView({
  state: {
    name: "hello",
    count: 0,
    array: []
  }
});
```


Update View
``` javascript
view = view.update(current => {
  current.count++;
});
```

Implement a counter
``` javascript
import { viewCreatorFactory } from "mvi.vanilla";

const render = ({state}) => `<p>${state.count}</p>
<button onClick="commands.add()">My button</button>`;

const element = document.getElementById("app");
const createView = viewCreatorFactory(element, render);

let view = createView({
  state: {
    count: 0,
  },
  commands: {
    add() {
      view = view.update(state => {
        state.count++;
      });
    }
  }
});
```

Index.hml

``` html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```




