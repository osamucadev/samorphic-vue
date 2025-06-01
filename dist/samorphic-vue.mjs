import { defineComponent as c, openBlock as l, createElementBlock as _, renderSlot as r, createElementVNode as u, normalizeClass as i } from "vue";
import './index.css';const p = ["disabled"], m = /* @__PURE__ */ c({
  __name: "SButton",
  props: {
    disabled: { type: Boolean }
  },
  setup(t) {
    return (e, o) => (l(), _("button", {
      class: "s-button",
      disabled: e.disabled
    }, [
      r(e.$slots, "default", {}, void 0, !0)
    ], 8, p));
  }
});
const d = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [s, n] of e)
    o[s] = n;
  return o;
}, b = /* @__PURE__ */ d(m, [["__scopeId", "data-v-dcc6fa7a"]]), f = ["aria-pressed"], v = /* @__PURE__ */ c({
  __name: "SSwitch",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = t, s = e;
    function n() {
      s("update:modelValue", !o.modelValue);
    }
    return (a, h) => (l(), _("button", {
      class: "s-switch",
      onClick: n,
      "aria-pressed": a.modelValue,
      role: "switch"
    }, [
      u("div", {
        class: i(["s-thumb", { active: a.modelValue }])
      }, null, 2)
    ], 8, f));
  }
});
const y = /* @__PURE__ */ d(v, [["__scopeId", "data-v-06d59c3f"]]);
export {
  b as SButton,
  y as SSwitch
};
