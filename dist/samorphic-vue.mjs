import { defineComponent as l, openBlock as _, createElementBlock as c, renderSlot as r, createElementVNode as i, normalizeClass as v, ref as y, watch as f, withDirectives as h, vModelDynamic as S, toDisplayString as m, unref as b } from "vue";
import './index.css';const $ = ["disabled"], V = /* @__PURE__ */ l({
  __name: "SButton",
  props: {
    disabled: { type: Boolean }
  },
  setup(n) {
    return (t, s) => (_(), c("button", {
      class: "s-button",
      disabled: t.disabled
    }, [
      r(t.$slots, "default", {}, void 0, !0)
    ], 8, $));
  }
});
const d = (n, t) => {
  const s = n.__vccOpts || n;
  for (const [e, o] of t)
    s[e] = o;
  return s;
}, x = /* @__PURE__ */ d(V, [["__scopeId", "data-v-dcc6fa7a"]]), g = ["aria-pressed"], I = /* @__PURE__ */ l({
  __name: "SSwitch",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const s = n, e = t;
    function o() {
      e("update:modelValue", !s.modelValue);
    }
    return (a, p) => (_(), c("button", {
      class: "s-switch",
      onClick: o,
      "aria-pressed": a.modelValue,
      role: "switch"
    }, [
      i("div", {
        class: v(["s-thumb", { active: a.modelValue }])
      }, null, 2)
    ], 8, g));
  }
});
const F = /* @__PURE__ */ d(I, [["__scopeId", "data-v-06d59c3f"]]), B = { class: "s-input-wrapper" }, k = ["type", "placeholder"], w = /* @__PURE__ */ l({
  __name: "SInput",
  props: {
    modelValue: {},
    placeholder: {},
    type: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const s = n, e = t, o = y(s.modelValue);
    return f(
      () => s.modelValue,
      (a) => {
        a !== o.value && (o.value = a);
      }
    ), (a, p) => (_(), c("div", B, [
      h(i("input", {
        class: "s-input",
        type: a.type,
        placeholder: a.placeholder,
        "onUpdate:modelValue": p[0] || (p[0] = (u) => o.value = u),
        onInput: p[1] || (p[1] = (u) => e("update:modelValue", o.value))
      }, null, 40, k), [
        [S, o.value]
      ])
    ]));
  }
});
const G = /* @__PURE__ */ d(w, [["__scopeId", "data-v-0e0c92c6"]]), C = { class: "s-card" }, A = /* @__PURE__ */ l({
  __name: "SCard",
  props: {
    padding: {}
  },
  setup(n) {
    return (t, s) => (_(), c("div", C, [
      r(t.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const H = /* @__PURE__ */ d(A, [["__scopeId", "data-v-774e84bc"]]), D = { class: "s-avatar" }, E = { class: "s-avatar-img" }, U = ["src", "alt"], j = { key: 1 }, z = { class: "s-avatar-name" }, M = /* @__PURE__ */ l({
  __name: "SAvatar",
  props: {
    name: {},
    src: {},
    alt: {}
  },
  setup(n) {
    const s = n.name.split(" ").map((e) => e[0]).join("").slice(0, 2).toUpperCase();
    return (e, o) => (_(), c("div", D, [
      i("div", E, [
        e.src ? (_(), c("img", {
          key: 0,
          src: e.src,
          alt: e.alt || e.name
        }, null, 8, U)) : (_(), c("span", j, m(b(s)), 1))
      ]),
      i("div", z, m(e.name), 1)
    ]));
  }
});
const J = /* @__PURE__ */ d(M, [["__scopeId", "data-v-f21102d9"]]), N = ["disabled"], O = /* @__PURE__ */ l({
  __name: "SIconButton",
  props: {
    disabled: { type: Boolean }
  },
  emits: ["click"],
  setup(n, { emit: t }) {
    const s = t;
    return (e, o) => (_(), c("button", {
      class: "s-icon-button",
      disabled: e.disabled,
      onClick: o[0] || (o[0] = (a) => s("click"))
    }, [
      r(e.$slots, "default", {}, void 0, !0)
    ], 8, N));
  }
});
const K = /* @__PURE__ */ d(O, [["__scopeId", "data-v-7e6c0906"]]);
export {
  J as SAvatar,
  x as SButton,
  H as SCard,
  K as SIconButton,
  G as SInput,
  F as SSwitch
};
