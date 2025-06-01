import { defineComponent as _, openBlock as c, createElementBlock as d, renderSlot as r } from "vue";
const a = ["disabled"], l = /* @__PURE__ */ _({
  __name: "SButton",
  props: {
    disabled: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (c(), d("button", {
      class: "s-button",
      disabled: t.disabled
    }, [
      r(t.$slots, "default", {}, void 0, !0)
    ], 8, a));
  }
});
const p = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, f = /* @__PURE__ */ p(l, [["__scopeId", "data-v-c8fd2cf1"]]);
export {
  f as SButton
};
