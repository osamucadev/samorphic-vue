import { defineComponent as l, openBlock as a, createElementBlock as _, renderSlot as v, createElementVNode as p, normalizeClass as f, ref as S, watch as b, withDirectives as g, vModelDynamic as $, toDisplayString as u, unref as h, createCommentVNode as y, inject as I, Fragment as V, renderList as k, createBlock as B, mergeProps as C, reactive as w } from "vue";
import './index.css';const T = ["disabled"], A = /* @__PURE__ */ l({
  __name: "SButton",
  props: {
    disabled: { type: Boolean }
  },
  setup(n) {
    return (e, o) => (a(), _("button", {
      class: "s-button",
      disabled: e.disabled
    }, [
      v(e.$slots, "default", {}, void 0, !0)
    ], 8, T));
  }
});
const i = (n, e) => {
  const o = n.__vccOpts || n;
  for (const [t, s] of e)
    o[t] = s;
  return o;
}, ee = /* @__PURE__ */ i(A, [["__scopeId", "data-v-dcc6fa7a"]]), D = ["aria-pressed"], j = /* @__PURE__ */ l({
  __name: "SSwitch",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const o = n, t = e;
    function s() {
      t("update:modelValue", !o.modelValue);
    }
    return (c, d) => (a(), _("button", {
      class: "s-switch",
      onClick: s,
      "aria-pressed": c.modelValue,
      role: "switch"
    }, [
      p("div", {
        class: f(["s-thumb", { active: c.modelValue }])
      }, null, 2)
    ], 8, D));
  }
});
const te = /* @__PURE__ */ i(j, [["__scopeId", "data-v-06d59c3f"]]), E = { class: "s-input-wrapper" }, N = ["type", "placeholder"], U = /* @__PURE__ */ l({
  __name: "SInput",
  props: {
    modelValue: {},
    placeholder: {},
    type: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const o = n, t = e, s = S(o.modelValue);
    return b(
      () => o.modelValue,
      (c) => {
        c !== s.value && (s.value = c);
      }
    ), (c, d) => (a(), _("div", E, [
      g(p("input", {
        class: "s-input",
        type: c.type,
        placeholder: c.placeholder,
        "onUpdate:modelValue": d[0] || (d[0] = (r) => s.value = r),
        onInput: d[1] || (d[1] = (r) => t("update:modelValue", s.value))
      }, null, 40, N), [
        [$, s.value]
      ])
    ]));
  }
});
const se = /* @__PURE__ */ i(U, [["__scopeId", "data-v-0e0c92c6"]]), x = { class: "s-card" }, z = /* @__PURE__ */ l({
  __name: "SCard",
  props: {
    padding: {}
  },
  setup(n) {
    return (e, o) => (a(), _("div", x, [
      v(e.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const oe = /* @__PURE__ */ i(z, [["__scopeId", "data-v-774e84bc"]]), F = { class: "s-avatar" }, L = { class: "s-avatar-img" }, M = ["src", "alt"], O = { key: 1 }, P = { class: "s-avatar-name" }, q = /* @__PURE__ */ l({
  __name: "SAvatar",
  props: {
    name: {},
    src: {},
    alt: {}
  },
  setup(n) {
    const o = n.name.split(" ").map((t) => t[0]).join("").slice(0, 2).toUpperCase();
    return (t, s) => (a(), _("div", F, [
      p("div", L, [
        t.src ? (a(), _("img", {
          key: 0,
          src: t.src,
          alt: t.alt || t.name
        }, null, 8, M)) : (a(), _("span", O, u(h(o)), 1))
      ]),
      p("div", P, u(t.name), 1)
    ]));
  }
});
const ne = /* @__PURE__ */ i(q, [["__scopeId", "data-v-f21102d9"]]), G = ["disabled"], H = /* @__PURE__ */ l({
  __name: "SIconButton",
  props: {
    disabled: { type: Boolean }
  },
  emits: ["click"],
  setup(n, { emit: e }) {
    const o = e;
    return (t, s) => (a(), _("button", {
      class: "s-icon-button",
      disabled: t.disabled,
      onClick: s[0] || (s[0] = (c) => o("click"))
    }, [
      v(t.$slots, "default", {}, void 0, !0)
    ], 8, G));
  }
});
const ae = /* @__PURE__ */ i(H, [["__scopeId", "data-v-7e6c0906"]]), J = { key: 0 }, K = { key: 1 }, Q = /* @__PURE__ */ l({
  __name: "SToast",
  props: {
    title: {},
    message: {},
    type: {}
  },
  setup(n) {
    return (e, o) => (a(), _("div", {
      class: f(["s-toast", e.type])
    }, [
      e.title ? (a(), _("strong", J, u(e.title), 1)) : y("", !0),
      e.message ? (a(), _("p", K, u(e.message), 1)) : y("", !0)
    ], 2));
  }
});
const R = /* @__PURE__ */ i(Q, [["__scopeId", "data-v-bb65467b"]]), W = { class: "s-toast-container" }, X = /* @__PURE__ */ l({
  __name: "SToastContainer",
  setup(n) {
    const e = I("samorphic-toasts");
    return (o, t) => (a(), _("div", W, [
      (a(!0), _(V, null, k(h(e), (s) => (a(), B(R, C({
        key: s.id
      }, { ref_for: !0 }, s), null, 16))), 128))
    ]));
  }
});
const _e = /* @__PURE__ */ i(X, [["__scopeId", "data-v-95a0aa15"]]);
let Y = 0;
const m = w([]);
function ce() {
  return function({
    title: e,
    message: o,
    type: t = "info",
    timeout: s = 4e3
  }) {
    const c = {
      id: Y++,
      title: e,
      message: o,
      type: t
    };
    m.push(c), setTimeout(() => {
      const d = m.findIndex((r) => r.id === c.id);
      d !== -1 && m.splice(d, 1);
    }, s);
  };
}
export {
  ne as SAvatar,
  ee as SButton,
  oe as SCard,
  ae as SIconButton,
  se as SInput,
  te as SSwitch,
  _e as SToastContainer,
  m as toastState,
  ce as useToast
};
