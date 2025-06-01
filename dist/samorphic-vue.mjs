import { defineComponent as c, openBlock as d, createElementBlock as u, renderSlot as r, createElementVNode as i, normalizeClass as m, ref as v, watch as f, withDirectives as h, vModelDynamic as y } from "vue";
import './index.css';const V = ["disabled"], S = /* @__PURE__ */ c({
  __name: "SButton",
  props: {
    disabled: { type: Boolean }
  },
  setup(n) {
    return (t, o) => (d(), u("button", {
      class: "s-button",
      disabled: t.disabled
    }, [
      r(t.$slots, "default", {}, void 0, !0)
    ], 8, V));
  }
});
const p = (n, t) => {
  const o = n.__vccOpts || n;
  for (const [l, e] of t)
    o[l] = e;
  return o;
}, k = /* @__PURE__ */ p(S, [["__scopeId", "data-v-dcc6fa7a"]]), b = ["aria-pressed"], w = /* @__PURE__ */ c({
  __name: "SSwitch",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const o = n, l = t;
    function e() {
      l("update:modelValue", !o.modelValue);
    }
    return (s, a) => (d(), u("button", {
      class: "s-switch",
      onClick: e,
      "aria-pressed": s.modelValue,
      role: "switch"
    }, [
      i("div", {
        class: m(["s-thumb", { active: s.modelValue }])
      }, null, 2)
    ], 8, b));
  }
});
const C = /* @__PURE__ */ p(w, [["__scopeId", "data-v-06d59c3f"]]), B = { class: "s-input-wrapper" }, I = ["type", "placeholder"], g = /* @__PURE__ */ c({
  __name: "SInput",
  props: {
    modelValue: {},
    placeholder: {},
    type: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const o = n, l = t, e = v(o.modelValue);
    return f(
      () => o.modelValue,
      (s) => {
        s !== e.value && (e.value = s);
      }
    ), (s, a) => (d(), u("div", B, [
      h(i("input", {
        class: "s-input",
        type: s.type,
        placeholder: s.placeholder,
        "onUpdate:modelValue": a[0] || (a[0] = (_) => e.value = _),
        onInput: a[1] || (a[1] = (_) => l("update:modelValue", e.value))
      }, null, 40, I), [
        [y, e.value]
      ])
    ]));
  }
});
const x = /* @__PURE__ */ p(g, [["__scopeId", "data-v-0e0c92c6"]]);
export {
  k as SButton,
  x as SInput,
  C as SSwitch
};
