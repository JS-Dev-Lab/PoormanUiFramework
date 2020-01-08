import { render } from 'lit-html';

function viewCreatorFactory(element, template) {
    return ({ state, commands }) => {
        return new View({ state, commands }, element, template);
    };
};

class View {
    constructor({ state, commands }, element, template) {
        this._element = element;
        this._template = template;
        this._commands = commands;
        this.fullUpdate({ ...state });
    }

    update(updater) {
        const newState = { ...this._state };
        updater(newState);
        this.fullUpdate(newState);
    }

    get state() {
        return this._state;
    }

    fullUpdate(newState) {
        this._state = Object.freeze(newState);
        render(this._template({ state: this._state, commands: this._commands }), this._element);
    }
}

export { viewCreatorFactory };