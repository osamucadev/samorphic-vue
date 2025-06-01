import { defineComponent as c, openBlock as _, createElementBlock as r, renderSlot as d } from "vue";
import './index.css';const a = ["disabled"], l = /* @__PURE__ */ c({
  __name: "SButton",
  props: {
    disabled: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (_(), r("button", {
      class: "s-button",
      disabled: t.disabled
    }, [
      d(t.$slots, "default", {}, void 0, !0)
    ], 8, a));
  }
});
const p = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, i = /* @__PURE__ */ p(l, [["__scopeId", "data-v-8649c7cc"]]);
export {
  i as SButton
};
