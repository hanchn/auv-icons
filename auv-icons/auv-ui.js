import { reactive as r, toRefs as c, openBlock as a, createElementBlock as l, normalizeStyle as u, renderSlot as f } from "vue";
const p = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [o, s] of e)
    t[o] = s;
  return t;
}, i = {
  name: "auv-button",
  props: {
    style: Object
  },
  setup: (n, e) => {
    const t = r({});
    return {
      ...c(n),
      context: e,
      ...c(t)
    };
  }
};
function _(n, e, t, o, s, v) {
  return a(), l("button", {
    style: u(t.style)
  }, [
    f(n.$slots, "default")
  ], 4);
}
const d = /* @__PURE__ */ p(i, [["render", _]]);
function m(n) {
  return n.install;
}
function y(n) {
  [
    d
  ].forEach((t) => {
    m(t) ? n.use(t) : t.name && n.component(t.name, t);
  });
}
const b = { install: y };
export {
  d as Button,
  b as default,
  y as install
};
