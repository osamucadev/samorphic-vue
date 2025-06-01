import { defineComponent as d, openBlock as _, createElementBlock as c, renderSlot as m, createElementVNode as r, normalizeClass as v, ref as h, watch as y, withDirectives as f, vModelDynamic as S, toDisplayString as i, unref as V } from "vue";
import './index.css';const g = ["disabled"], $ = /* @__PURE__ */ d({
  __name: "SButton",
  props: {
    disabled: { type: Boolean }
  },
  setup(a) {
    return (t, s) => (_(), c("button", {
      class: "s-button",
      disabled: t.disabled
    }, [
      m(t.$slots, "default", {}, void 0, !0)
    ], 8, g));
  }
});
const p = (a, t) => {
  const s = a.__vccOpts || a;
  for (const [e, o] of t)
    s[e] = o;
  return s;
}, O = /* @__PURE__ */ p($, [["__scopeId", "data-v-dcc6fa7a"]]), b = ["aria-pressed"], I = /* @__PURE__ */ d({
  __name: "SSwitch",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const s = a, e = t;
    function o() {
      e("update:modelValue", !s.modelValue);
    }
    return (n, l) => (_(), c("button", {
      class: "s-switch",
      onClick: o,
      "aria-pressed": n.modelValue,
      role: "switch"
    }, [
      r("div", {
        class: v(["s-thumb", { active: n.modelValue }])
      }, null, 2)
    ], 8, b));
  }
});
const q = /* @__PURE__ */ p(I, [["__scopeId", "data-v-06d59c3f"]]), w = { class: "s-input-wrapper" }, B = ["type", "placeholder"], C = /* @__PURE__ */ d({
  __name: "SInput",
  props: {
    modelValue: {},
    placeholder: {},
    type: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const s = a, e = t, o = h(s.modelValue);
    return y(
      () => s.modelValue,
      (n) => {
        n !== o.value && (o.value = n);
      }
    ), (n, l) => (_(), c("div", w, [
      f(r("input", {
        class: "s-input",
        type: n.type,
        placeholder: n.placeholder,
        "onUpdate:modelValue": l[0] || (l[0] = (u) => o.value = u),
        onInput: l[1] || (l[1] = (u) => e("update:modelValue", o.value))
      }, null, 40, B), [
        [S, o.value]
      ])
    ]));
  }
});
const x = /* @__PURE__ */ p(C, [["__scopeId", "data-v-0e0c92c6"]]), k = { class: "s-card" }, A = /* @__PURE__ */ d({
  __name: "SCard",
  props: {
    padding: {}
  },
  setup(a) {
    return (t, s) => (_(), c("div", k, [
      m(t.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const F = /* @__PURE__ */ p(A, [["__scopeId", "data-v-774e84bc"]]), D = { class: "s-avatar" }, E = { class: "s-avatar-img" }, U = ["src", "alt"], j = { key: 1 }, z = { class: "s-avatar-name" }, M = /* @__PURE__ */ d({
  __name: "SAvatar",
  props: {
    name: {},
    src: {},
    alt: {}
  },
  setup(a) {
    const s = a.name.split(" ").map((e) => e[0]).join("").slice(0, 2).toUpperCase();
    return (e, o) => (_(), c("div", D, [
      r("div", E, [
        e.src ? (_(), c("img", {
          key: 0,
          src: e.src,
          alt: e.alt || e.name
        }, null, 8, U)) : (_(), c("span", j, i(V(s)), 1))
      ]),
      r("div", z, i(e.name), 1)
    ]));
  }
});
const G = /* @__PURE__ */ p(M, [["__scopeId", "data-v-f21102d9"]]);
export {
  G as SAvatar,
  O as SButton,
  F as SCard,
  x as SInput,
  q as SSwitch
};
