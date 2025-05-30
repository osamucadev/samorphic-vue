import { defineComponent as s, createElementBlock as r, openBlock as _, renderSlot as a } from "vue";
const u = { class: "ne-button" }, p = /* @__PURE__ */ s({
  __name: "NeButton",
  setup(t) {
    return (e, o) => (_(), r("button", u, [
      a(e.$slots, "default", {}, void 0, !0)
    ]));
  }
}), d = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, c] of e)
    o[n] = c;
  return o;
}, l = /* @__PURE__ */ d(p, [["__scopeId", "data-v-9cb7eb63"]]), i = { NeButton: l };
export {
  l as NeButton,
  i as default
};
