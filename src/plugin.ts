import type { App } from "vue";
import * as components from "./index";
import { toastState } from "./composables/useToast";

const SamorphicVue = {
  install(app: App) {
    for (const [name, component] of Object.entries(components)) {
      if (component && typeof component === "object") {
        app.component(name, component);
      }
    }

    app.provide("samorphic-toasts", toastState);
  },
};

export default SamorphicVue;
