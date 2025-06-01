import { defineComponent as i, openBlock as a, createElementBlock as c, renderSlot as v, createElementVNode as p, normalizeClass as f, ref as y, watch as g, withDirectives as b, vModelDynamic as $, toDisplayString as m, unref as h, createCommentVNode as S, inject as V, Fragment as I, renderList as B, createBlock as C, mergeProps as k, reactive as T } from "vue";
import './index.css';const w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get SAvatar() {
    return R;
  },
  get SButton() {
    return O;
  },
  get SCard() {
    return L;
  },
  get SIconButton() {
    return Y;
  },
  get SInput() {
    return U;
  },
  get SSwitch() {
    return E;
  },
  get SToastContainer() {
    return ae;
  },
  get SamorphicVue() {
    return ie;
  },
  get toastState() {
    return l;
  },
  get useToast() {
    return _e;
  }
}, Symbol.toStringTag, { value: "Module" }));
const j = ["disabled"], A = /* @__PURE__ */ i({
  __name: "SButton",
  props: {
    disabled: { type: Boolean }
  },
  setup(n) {
    return (e, t) => (a(), c("button", {
      class: "s-button",
      disabled: e.disabled
    }, [
      v(e.$slots, "default", {}, void 0, !0)
    ], 8, j));
  }
});
const d = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [s, o] of e)
    t[s] = o;
  return t;
}, O = /* @__PURE__ */ d(A, [["__scopeId", "data-v-dcc6fa7a"]]), D = ["aria-pressed"], z = /* @__PURE__ */ i({
  __name: "SSwitch",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, s = e;
    function o() {
      s("update:modelValue", !t.modelValue);
    }
    return (_, r) => (a(), c("button", {
      class: "s-switch",
      onClick: o,
      "aria-pressed": _.modelValue,
      role: "switch"
    }, [
      p("div", {
        class: f(["s-thumb", { active: _.modelValue }])
      }, null, 2)
    ], 8, D));
  }
});
const E = /* @__PURE__ */ d(z, [["__scopeId", "data-v-06d59c3f"]]), M = { class: "s-input-wrapper" }, N = ["type", "placeholder"], P = /* @__PURE__ */ i({
  __name: "SInput",
  props: {
    modelValue: {},
    placeholder: {},
    type: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, s = e, o = y(t.modelValue);
    return g(
      () => t.modelValue,
      (_) => {
        _ !== o.value && (o.value = _);
      }
    ), (_, r) => (a(), c("div", M, [
      b(p("input", {
        class: "s-input",
        type: _.type,
        placeholder: _.placeholder,
        "onUpdate:modelValue": r[0] || (r[0] = (u) => o.value = u),
        onInput: r[1] || (r[1] = (u) => s("update:modelValue", o.value))
      }, null, 40, N), [
        [$, o.value]
      ])
    ]));
  }
});
const U = /* @__PURE__ */ d(P, [["__scopeId", "data-v-0e0c92c6"]]), x = { class: "s-card" }, F = /* @__PURE__ */ i({
  __name: "SCard",
  props: {
    padding: {}
  },
  setup(n) {
    return (e, t) => (a(), c("div", x, [
      v(e.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const L = /* @__PURE__ */ d(F, [["__scopeId", "data-v-774e84bc"]]), q = { class: "s-avatar" }, G = { class: "s-avatar-img" }, H = ["src", "alt"], J = { key: 1 }, K = { class: "s-avatar-name" }, Q = /* @__PURE__ */ i({
  __name: "SAvatar",
  props: {
    name: {},
    src: {},
    alt: {}
  },
  setup(n) {
    const t = n.name.split(" ").map((s) => s[0]).join("").slice(0, 2).toUpperCase();
    return (s, o) => (a(), c("div", q, [
      p("div", G, [
        s.src ? (a(), c("img", {
          key: 0,
          src: s.src,
          alt: s.alt || s.name
        }, null, 8, H)) : (a(), c("span", J, m(h(t)), 1))
      ]),
      p("div", K, m(s.name), 1)
    ]));
  }
});
const R = /* @__PURE__ */ d(Q, [["__scopeId", "data-v-f21102d9"]]), W = ["disabled"], X = /* @__PURE__ */ i({
  __name: "SIconButton",
  props: {
    disabled: { type: Boolean }
  },
  emits: ["click"],
  setup(n, { emit: e }) {
    const t = e;
    return (s, o) => (a(), c("button", {
      class: "s-icon-button",
      disabled: s.disabled,
      onClick: o[0] || (o[0] = (_) => t("click"))
    }, [
      v(s.$slots, "default", {}, void 0, !0)
    ], 8, W));
  }
});
const Y = /* @__PURE__ */ d(X, [["__scopeId", "data-v-7e6c0906"]]), Z = { key: 0 }, ee = { key: 1 }, te = /* @__PURE__ */ i({
  __name: "SToast",
  props: {
    title: {},
    message: {},
    type: {}
  },
  setup(n) {
    return (e, t) => (a(), c("div", {
      class: f(["s-toast", e.type])
    }, [
      e.title ? (a(), c("strong", Z, m(e.title), 1)) : S("", !0),
      e.message ? (a(), c("p", ee, m(e.message), 1)) : S("", !0)
    ], 2));
  }
});
const se = /* @__PURE__ */ d(te, [["__scopeId", "data-v-bb65467b"]]), oe = { class: "s-toast-container" }, ne = /* @__PURE__ */ i({
  __name: "SToastContainer",
  setup(n) {
    const e = V("samorphic-toasts");
    return (t, s) => (a(), c("div", oe, [
      (a(!0), c(I, null, B(h(e), (o) => (a(), C(se, k({
        key: o.id
      }, { ref_for: !0 }, o), null, 16))), 128))
    ]));
  }
});
const ae = /* @__PURE__ */ d(ne, [["__scopeId", "data-v-95a0aa15"]]);
let ce = 0;
const l = T([]);
function _e() {
  return function({
    title: e,
    message: t,
    type: s = "info",
    timeout: o = 4e3
  }) {
    const _ = {
      id: ce++,
      title: e,
      message: t,
      type: s
    };
    l.push(_), setTimeout(() => {
      const r = l.findIndex((u) => u.id === _.id);
      r !== -1 && l.splice(r, 1);
    }, o);
  };
}
const re = {
  install(n) {
    for (const [e, t] of Object.entries(w))
      t && typeof t == "object" && n.component(e, t);
    n.provide("samorphic-toasts", l);
  }
}, ie = re;
export {
  R as SAvatar,
  O as SButton,
  L as SCard,
  Y as SIconButton,
  U as SInput,
  E as SSwitch,
  ae as SToastContainer,
  ie as SamorphicVue,
  l as toastState,
  _e as useToast
};
