import { html } from 'lit-html';

function template({ state: { array, name, count }, commands:{add, addALot, setName} }) {
    return html`<h1>Hello ${name}</h1>
    <input value=${name} @input=${(e) => setName(e.target.value)}/>
    <p>${name.length}</p>
    <p>${count}</p>
    <button @click=${() => add()}>Add</button>
    <button @click=${() => addALot()}>Add a lot</button>
    <ul>${array.map(value => html`<li>${value}</li>`)}</ul>`;
}

export { template };