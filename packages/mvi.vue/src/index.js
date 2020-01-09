import Vue from "vue";

Vue.config.productionTip = false;

function viewCreatorFactory(selector, App) {
  return ({ state, commands }) => {
    const vue = new Vue({
      render: function(h) {
        return h(App, {
          props: {
            state: this.state,
            commands
          }
        });
      },
      data: {
        state
      },
      methods: {
        update(updater) {
          updater(this.state);
        },
        fullUpdate(newState) {
          this.state = newState;
        }
      }
    }).$mount(selector);
    return new View(vue);
  };
}

class View {
  constructor(vueInstance) {
    this._vueInstance = vueInstance;
  }

  update(updater) {
    this._vueInstance.update(updater);
  }

  get state() {
    return this._vueInstance.state;
  }

  fullUpdate(newState) {
    this._vueInstance.fullUpdate(newState);
  }
}

export { viewCreatorFactory };
