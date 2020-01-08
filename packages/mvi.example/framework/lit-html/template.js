import { html } from 'lit-html';

function template({ state: { array, name, count }, commands }) {
    return html`<h1>Hello ${name}</h1>
    <input value=${name} @input=${(e) => commands.setName(e.target.value)}/>
    <p>${name.length}</p>
    <p>${count}</p><button @click=${() => commands.add()}>My button</button>
    <ul>${array.map(value => html`<li>${value}</li>`)}</ul>`;
}

export { template };