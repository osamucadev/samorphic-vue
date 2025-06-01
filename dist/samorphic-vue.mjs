import { defineComponent as _, openBlock as r, createElementBlock as d, createTextVNode as a, renderSlot as c } from "vue";
const l = ["disabled"], p = /* @__PURE__ */ _({
  __name: "SButton",
  props: {
    disabled: { type: Boolean }
  },
  setup(o) {
    return (t, e) => (r(), d("button", {
      class: "s-button",
      disabled: t.disabled
    }, [
      e[0] || (e[0] = a(" Teste ")),
      c(t.$slots, "default", {}, void 0, !0)
    ], 8, l));
  }
});
const u = (o, t) => {
  const e = o.__vccOpts || o;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, b = /* @__PURE__ */ u(p, [["__scopeId", "data-v-bfce1a62"]]);
export {
  b as SButton
};
