import { defineComponent as c, openBlock as _, createElementBlock as d, renderSlot as r, createElementVNode as i, normalizeClass as m, ref as v, watch as f, withDirectives as h, vModelDynamic as y } from "vue";
import './index.css';const S = ["disabled"], V = /* @__PURE__ */ c({
  __name: "SButton",
  props: {
    disabled: { type: Boolean }
  },
  setup(s) {
    return (e, t) => (_(), d("button", {
      class: "s-button",
      disabled: e.disabled
    }, [
      r(e.$slots, "default", {}, void 0, !0)
    ], 8, S));
  }
});
const p = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [a, o] of e)
    t[a] = o;
  return t;
}, x = /* @__PURE__ */ p(V, [["__scopeId", "data-v-dcc6fa7a"]]), b = ["aria-pressed"], $ = /* @__PURE__ */ c({
  __name: "SSwitch",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: e }) {
    const t = s, a = e;
    function o() {
      a("update:modelValue", !t.modelValue);
    }
    return (n, l) => (_(), d("button", {
      class: "s-switch",
      onClick: o,
      "aria-pressed": n.modelValue,
      role: "switch"
    }, [
      i("div", {
        class: m(["s-thumb", { active: n.modelValue }])
      }, null, 2)
    ], 8, b));
  }
});
const D = /* @__PURE__ */ p($, [["__scopeId", "data-v-06d59c3f"]]), g = { class: "s-input-wrapper" }, w = ["type", "placeholder"], I = /* @__PURE__ */ c({
  __name: "SInput",
  props: {
    modelValue: {},
    placeholder: {},
    type: {}
  },
  emits: ["update:modelValue"],
  setup(s, { emit: e }) {
    const t = s, a = e, o = v(t.modelValue);
    return f(
      () => t.modelValue,
      (n) => {
        n !== o.value && (o.value = n);
      }
    ), (n, l) => (_(), d("div", g, [
      h(i("input", {
        class: "s-input",
        type: n.type,
        placeholder: n.placeholder,
        "onUpdate:modelValue": l[0] || (l[0] = (u) => o.value = u),
        onInput: l[1] || (l[1] = (u) => a("update:modelValue", o.value))
      }, null, 40, w), [
        [y, o.value]
      ])
    ]));
  }
});
const E = /* @__PURE__ */ p(I, [["__scopeId", "data-v-0e0c92c6"]]), B = { class: "s-card" }, C = /* @__PURE__ */ c({
  __name: "SCard",
  props: {
    padding: {}
  },
  setup(s) {
    return (e, t) => (_(), d("div", B, [
      r(e.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const z = /* @__PURE__ */ p(C, [["__scopeId", "data-v-774e84bc"]]);
export {
  x as SButton,
  z as SCard,
  E as SInput,
  D as SSwitch
};
