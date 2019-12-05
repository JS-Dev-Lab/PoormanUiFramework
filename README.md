# PoormanUiFramework
Word's tiniest UI framework

# Features

* 3Kb Only
* Only JS
* Support old browser
* Write template in pure JS

# Install

```
npm install poor-man-ui-framework
```


# Usage

Init and create view
``` javascript
import {UiEngine} from "poor-man-ui-framework";

const render = state => `<h1>${state.name}</h1>
<p>${state.count}</p>
<ul>${state.array.map(value => `<li>${value}</li>`).join("")}</ul>`;

const element = document.getElementById("app");

const engine = new UiEngine(element, render);
let view = engine.initialRender({
  name: "hello",
  count: 0,
  array: []
});
```


Update View
``` javascript
view = view.update(current => {
  current.count++;
});
```
