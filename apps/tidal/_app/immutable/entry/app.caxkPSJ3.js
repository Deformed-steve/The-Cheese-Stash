const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["../nodes/0.D8BJ3P4d.js", "../chunks/DsnmJJEf.js", "../chunks/Cu9fi7rt.js", "../chunks/DW1I4PKZ.js", "../chunks/Dl3XAuxE.js", "../chunks/CgOeFQae.js", "../chunks/CMGKbhlM.js", "../chunks/CMJ4YqVY.js", "../chunks/Bjspi3f-.js", "../chunks/v8ejrc4O.js", "../chunks/B8ZBYVEN.js", "../chunks/CyZ77wti.js", "../assets/0.BKfxzDJ6.css", "../nodes/1.DzxmEZee.js", "../nodes/2.Bsao_W6u.js", "../chunks/C61yF-TN.js", "../chunks/CDI0ADii.js", "../chunks/CW-Blk_o.js", "../assets/2.Dy61mSq3.css", "../nodes/3.D-DQ34WS.js", "../chunks/DoVIE7Ch.js", "../chunks/gXH1sMvH.js", "../assets/TrackList.D3oINjsv.css", "../nodes/4.BNDyZ0aE.js", "../nodes/5.C5HwRgVZ.js"]))) => i.map(i => d[i]);
import {
  p as R,
  i as x,
  _ as m
} from "../chunks/DW1I4PKZ.js";
import {
  K as C,
  L as G,
  J,
  M as K,
  T as U,
  U as X,
  V,
  X as Y,
  _ as Z,
  Z as B,
  k as P,
  ak as H,
  i as u,
  an as Q,
  ao as W,
  ap as $,
  a5 as tt,
  aq as et,
  a1 as rt,
  p as at,
  C as st,
  D as nt,
  o as ot,
  s as O,
  ar as it,
  l as w,
  f as p,
  n as ct,
  a as h,
  g as ut,
  c as k,
  m as lt,
  v as dt,
  j as T,
  z as ft,
  t as _t,
  x as mt
} from "../chunks/Cu9fi7rt.js";
import "../chunks/DsnmJJEf.js";
import {
  b as A
} from "../chunks/CMGKbhlM.js";

function D(i, t, a) {
  C && G();
  var n = i,
    s, e, r = null,
    o = null;

  function E() {
    e && (B(e), e = null), r && (r.lastChild.remove(), n.before(r), r = null), e = o, o = null
  }
  J(() => {
    if (s !== (s = t())) {
      var v = Y();
      if (s) {
        var g = n;
        v && (r = document.createDocumentFragment(), r.append(g = U()), e && V.skipped_effects.add(e)), o = X(() => a(g, s))
      }
      v ? V.add_callback(E) : E()
    }
  }, K), C && (n = Z)
}

function ht(i) {
  return class extends vt {
    constructor(t) {
      super({
        component: i,
        ...t
      })
    }
  }
}
class vt {
  #e;
  #t;
  constructor(t) {
    var a = new Map,
      n = (e, r) => {
        var o = rt(r, !1, !1);
        return a.set(e, o), o
      };
    const s = new Proxy({
      ...t.props || {},
      $$events: {}
    }, {
      get(e, r) {
        return u(a.get(r) ?? n(r, Reflect.get(e, r)))
      },
      has(e, r) {
        return r === H ? !0 : (u(a.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r))
      },
      set(e, r, o) {
        return P(a.get(r) ?? n(r, o), o), Reflect.set(e, r, o)
      }
    });
    this.#t = (t.hydrate ? Q : W)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && $(), this.#e = s.$$events;
    for (const e of Object.keys(this.#t)) e === "$set" || e === "$destroy" || e === "$on" || tt(this, e, {
      get() {
        return this.#t[e]
      },
      set(r) {
        this.#t[e] = r
      },
      enumerable: !0
    });
    this.#t.$set = e => {
      Object.assign(s, e)
    }, this.#t.$destroy = () => {
      et(this.#t)
    }
  }
  $set(t) {
    this.#t.$set(t)
  }
  $on(t, a) {
    this.#e[t] = this.#e[t] || [];
    const n = (...s) => a.call(this, ...s);
    return this.#e[t].push(n), () => {
      this.#e[t] = this.#e[t].filter(s => s !== n)
    }
  }
  $destroy() {
    this.#t.$destroy()
  }
}
const Tt = {};
var gt = w('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),
  bt = w("<!> <!>", 1);

function yt(i, t) {
  at(t, !0);
  let a = R(t, "components", 23, () => []),
    n = R(t, "data_0", 3, null),
    s = R(t, "data_1", 3, null);
  st(() => t.stores.page.set(t.page)), nt(() => {
    t.stores, t.page, t.constructors, a(), t.form, n(), s(), t.stores.page.notify()
  });
  let e = O(!1),
    r = O(!1),
    o = O(null);
  ot(() => {
    const c = t.stores.page.subscribe(() => {
      u(e) && (P(r, !0), it().then(() => {
        P(o, document.title || "untitled page", !0)
      }))
    });
    return P(e, !0), c
  });
  const E = T(() => t.constructors[1]);
  var v = bt(),
    g = p(v);
  {
    var I = c => {
        const l = T(() => t.constructors[0]);
        var d = k(),
          b = p(d);
        D(b, () => u(l), (f, _) => {
          A(_(f, {
            get data() {
              return n()
            },
            get form() {
              return t.form
            },
            get params() {
              return t.page.params
            },
            children: (y, Pt) => {
              var L = k(),
                M = p(L);
              D(M, () => u(E), (N, q) => {
                A(q(N, {
                  get data() {
                    return s()
                  },
                  get form() {
                    return t.form
                  },
                  get params() {
                    return t.page.params
                  }
                }), z => a()[1] = z, () => a()?.[1])
              }), h(y, L)
            },
            $$slots: {
              default: !0
            }
          }), y => a()[0] = y, () => a()?.[0])
        }), h(c, d)
      },
      j = c => {
        const l = T(() => t.constructors[0]);
        var d = k(),
          b = p(d);
        D(b, () => u(l), (f, _) => {
          A(_(f, {
            get data() {
              return n()
            },
            get form() {
              return t.form
            },
            get params() {
              return t.page.params
            }
          }), y => a()[0] = y, () => a()?.[0])
        }), h(c, d)
      };
    x(g, c => {
      t.constructors[1] ? c(I) : c(j, !1)
    })
  }
  var S = ct(g, 2);
  {
    var F = c => {
      var l = gt(),
        d = lt(l);
      {
        var b = f => {
          var _ = ft();
          _t(() => mt(_, u(o))), h(f, _)
        };
        x(d, f => {
          u(r) && f(b)
        })
      }
      dt(l), h(c, l)
    };
    x(S, c => {
      u(e) && c(F)
    })
  }
  h(i, v), ut()
}
const At = ht(yt),
  Dt = [() => m(() => import("../nodes/0.D8BJ3P4d.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), import.meta.url), () => m(() => import("../nodes/1.DzxmEZee.js"), __vite__mapDeps([13, 1, 5, 2, 9]), import.meta.url), () => m(() => import("../nodes/2.Bsao_W6u.js"), __vite__mapDeps([14, 1, 2, 3, 4, 5, 7, 11, 15, 16, 17, 18]), import.meta.url), () => m(() => import("../nodes/3.D-DQ34WS.js"), __vite__mapDeps([19, 1, 2, 3, 4, 5, 8, 9, 20, 17, 21, 22, 7, 15, 10]), import.meta.url), () => m(() => import("../nodes/4.BNDyZ0aE.js"), __vite__mapDeps([23, 1, 2, 3, 4, 5, 8, 9, 17, 21, 7, 16]), import.meta.url), () => m(() => import("../nodes/5.C5HwRgVZ.js"), __vite__mapDeps([24, 1, 2, 3, 4, 5, 8, 9, 20, 17, 21, 22, 16]), import.meta.url)],
  Lt = [0],
  Ct = {
    "/": [-3],
    "/album/[id]": [3],
    "/artist/[id]": [4],
    "/playlist/[id]": [5]
  },
  Et = {
    handleError: (({
      error: i
    }) => {
      console.error(i)
    }),
    reroute: (() => {}),
    transport: {}
  },
  pt = Object.fromEntries(Object.entries(Et.transport).map(([i, t]) => [i, t.decode])),
  Vt = !1,
  wt = (i, t) => pt[i](t);
export {
  wt as decode, pt as decoders, Ct as dictionary, Vt as hash, Et as hooks, Tt as matchers, Dt as nodes, At as root, Lt as server_loads
};