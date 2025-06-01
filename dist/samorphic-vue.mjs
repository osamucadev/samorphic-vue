import { openBlock as c, createElementBlock as s, renderSlot as r } from "vue";
const a = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, _] of e)
    o[n] = _;
  return o;
}, u = {}, d = { class: "s-button" };
function l(t, e) {
  return c(), s("button", d, [
    r(t.$slots, "default", {}, void 0, !0)
  ]);
}
const p = /* @__PURE__ */ a(u, [["render", l], ["__scopeId", "data-v-a8538837"]]);
export {
  p as SButton
};
