import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

class UiEngine {
  constructor(selector) {
    this._selector = selector;
  }

  initialRender(state) {
    const vue = new Vue({
      render: function (h) {
        return h(App, {
          props: {
            state: this.state
          }
        })
      },
      data: {
        state
      },
      methods: {
        update(updater) {
          updater(this.state);
        }
      }
    }).$mount(this._selector);
    return new View(vue);
  }
}

class View {
  constructor(vueInstance) {
    this._vueInstance = vueInstance;
  }

  update(updater) {
    this._vueInstance.update(updater);
    return this;
  }
}

export {
  UiEngine
};