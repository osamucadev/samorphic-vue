import { defineComponent as r, createElementBlock as s, openBlock as _, renderSlot as a } from "vue";
const p = { class: "ne-button" }, u = /* @__PURE__ */ r({
  __name: "NeButton",
  setup(t) {
    return (e, o) => (_(), s("button", p, [
      a(e.$slots, "default", {}, void 0, !0)
    ]));
  }
}), l = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, c] of e)
    o[n] = c;
  return o;
}, f = /* @__PURE__ */ l(u, [["__scopeId", "data-v-9cb7eb63"]]);
export {
  f as NeButton
};
