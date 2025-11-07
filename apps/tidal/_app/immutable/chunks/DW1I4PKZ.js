import {
  J as Y,
  K as R,
  L as B,
  M as q,
  N as K,
  O as F,
  P as Z,
  Q as H,
  R as A,
  T as W,
  U as N,
  V as z,
  W as G,
  X as J,
  Y as Q,
  Z as V,
  _ as X,
  a0 as L,
  a1 as k,
  a2 as ee,
  k as $,
  a3 as re,
  i as g,
  a4 as ne,
  a5 as te,
  a6 as T,
  a7 as se,
  a8 as I,
  a9 as ie,
  aa as j,
  b as ae,
  ab as ue,
  H as le,
  ac as oe,
  ad as x,
  ae as D,
  af as fe,
  u as ce,
  ag as de,
  ah as _e,
  ai as pe,
  aj as E,
  S as C,
  ak as M,
  al as ve,
  am as he
} from "./Cu9fi7rt.js";

function we(e, r, t = !1) {
  R && B();
  var n = e,
    s = null,
    u = null,
    l = G,
    o = t ? q : 0,
    p = !1;
  const m = (f, a = !0) => {
    p = !0, d(a, f)
  };
  var i = null;

  function _() {
    i !== null && (i.lastChild.remove(), n.before(i), i = null);
    var f = l ? s : u,
      a = l ? u : s;
    f && Q(f), a && V(a, () => {
      l ? u = null : s = null
    })
  }
  const d = (f, a) => {
    if (l === (l = f)) return;
    let v = !1;
    if (R) {
      const y = K(n) === F;
      !!l === y && (n = Z(), H(n), A(!1), v = !0)
    }
    var P = J(),
      h = n;
    if (P && (i = document.createDocumentFragment(), i.append(h = W())), l ? s ??= a && N(() => a(h)) : u ??= a && N(() => a(h)), P) {
      var S = z,
        c = l ? s : u,
        b = l ? u : s;
      c && S.skipped_effects.delete(c), b && S.skipped_effects.add(b), S.add_callback(_)
    } else _();
    v && A(!0)
  };
  Y(() => {
    p = !1, r(m), p || d(null, null)
  }, o), R && (n = X)
}
let w = !1,
  O = Symbol();

function Re(e, r, t) {
  const n = t[r] ??= {
    store: null,
    source: k(void 0),
    unsubscribe: L
  };
  if (n.store !== e && !(O in t))
    if (n.unsubscribe(), n.store = e ?? null, e == null) n.source.v = void 0, n.unsubscribe = L;
    else {
      var s = !0;
      n.unsubscribe = ee(e, u => {
        s ? n.source.v = u : $(n.source, u)
      }), s = !1
    } return e && O in t ? re(e) : g(n.source)
}

function Ie() {
  const e = {};

  function r() {
    ne(() => {
      for (var t in e) e[t].unsubscribe();
      te(e, O, {
        enumerable: !1,
        value: !0
      })
    })
  }
  return [e, r]
}

function be(e) {
  var r = w;
  try {
    return w = !1, [e(), w]
  } finally {
    w = r
  }
}
const me = {
  get(e, r) {
    if (!e.exclude.includes(r)) return g(e.version), r in e.special ? e.special[r]() : e.props[r]
  },
  set(e, r, t) {
    if (!(r in e.special)) {
      var n = T;
      try {
        D(e.parent_effect), e.special[r] = Se({
          get [r]() {
            return e.props[r]
          }
        }, r, j)
      } finally {
        D(n)
      }
    }
    return e.special[r](t), x(e.version), !0
  },
  getOwnPropertyDescriptor(e, r) {
    if (!e.exclude.includes(r) && r in e.props) return {
      enumerable: !0,
      configurable: !0,
      value: e.props[r]
    }
  },
  deleteProperty(e, r) {
    return e.exclude.includes(r) || (e.exclude.push(r), x(e.version)), !0
  },
  has(e, r) {
    return e.exclude.includes(r) ? !1 : r in e.props
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter(r => !e.exclude.includes(r))
  }
};

function Oe(e, r) {
  return new Proxy({
    props: e,
    exclude: r,
    special: {},
    version: se(0),
    parent_effect: T
  }, me)
}
const Pe = {
  get(e, r) {
    let t = e.props.length;
    for (; t--;) {
      let n = e.props[t];
      if (E(n) && (n = n()), typeof n == "object" && n !== null && r in n) return n[r]
    }
  },
  set(e, r, t) {
    let n = e.props.length;
    for (; n--;) {
      let s = e.props[n];
      E(s) && (s = s());
      const u = I(s, r);
      if (u && u.set) return u.set(t), !0
    }
    return !1
  },
  getOwnPropertyDescriptor(e, r) {
    let t = e.props.length;
    for (; t--;) {
      let n = e.props[t];
      if (E(n) && (n = n()), typeof n == "object" && n !== null && r in n) {
        const s = I(n, r);
        return s && !s.configurable && (s.configurable = !0), s
      }
    }
  },
  has(e, r) {
    if (r === C || r === M) return !1;
    for (let t of e.props)
      if (E(t) && (t = t()), t != null && r in t) return !0;
    return !1
  },
  ownKeys(e) {
    const r = [];
    for (let t of e.props)
      if (E(t) && (t = t()), !!t) {
        for (const n in t) r.includes(n) || r.push(n);
        for (const n of Object.getOwnPropertySymbols(t)) r.includes(n) || r.push(n)
      } return r
  }
};

function Te(...e) {
  return new Proxy({
    props: e
  }, Pe)
}

function Se(e, r, t, n) {
  var s = !de || (t & _e) !== 0,
    u = (t & fe) !== 0,
    l = (t & ve) !== 0,
    o = n,
    p = !0,
    m = () => (p && (p = !1, o = l ? ce(n) : n), o),
    i;
  if (u) {
    var _ = C in e || M in e;
    i = I(e, r)?.set ?? (_ && r in e ? c => e[r] = c : void 0)
  }
  var d, f = !1;
  u ? [d, f] = be(() => e[r]) : d = e[r], d === void 0 && n !== void 0 && (d = m(), i && (s && ie(), i(d)));
  var a;
  if (s ? a = () => {
      var c = e[r];
      return c === void 0 ? m() : (p = !0, c)
    } : a = () => {
      var c = e[r];
      return c !== void 0 && (o = void 0), c === void 0 ? o : c
    }, s && (t & j) === 0) return a;
  if (i) {
    var v = e.$$legacy;
    return (function(c, b) {
      return arguments.length > 0 ? ((!s || !b || v || f) && i(b ? a() : c), c) : a()
    })
  }
  var P = !1,
    h = ((t & pe) !== 0 ? le : oe)(() => (P = !1, a()));
  u && g(h);
  var S = T;
  return (function(c, b) {
    if (arguments.length > 0) {
      const y = b ? g(h) : s && u ? ae(c) : c;
      return $(h, y), P = !0, o !== void 0 && (o = y), c
    }
    return he && P || (S.f & ue) !== 0 ? h.v : g(h)
  })
}
const Ee = "modulepreload",
  ge = function(e, r) {
    return new URL(e, r).href
  },
  U = {},
  Ae = function(r, t, n) {
    let s = Promise.resolve();
    if (t && t.length > 0) {
      let m = function(i) {
        return Promise.all(i.map(_ => Promise.resolve(_).then(d => ({
          status: "fulfilled",
          value: d
        }), d => ({
          status: "rejected",
          reason: d
        }))))
      };
      const l = document.getElementsByTagName("link"),
        o = document.querySelector("meta[property=csp-nonce]"),
        p = o?.nonce || o?.getAttribute("nonce");
      s = m(t.map(i => {
        if (i = ge(i, n), i in U) return;
        U[i] = !0;
        const _ = i.endsWith(".css"),
          d = _ ? '[rel="stylesheet"]' : "";
        if (n)
          for (let a = l.length - 1; a >= 0; a--) {
            const v = l[a];
            if (v.href === i && (!_ || v.rel === "stylesheet")) return
          } else if (document.querySelector(`link[href="${i}"]${d}`)) return;
        const f = document.createElement("link");
        if (f.rel = _ ? "stylesheet" : Ee, _ || (f.as = "script"), f.crossOrigin = "", f.href = i, p && f.setAttribute("nonce", p), document.head.appendChild(f), _) return new Promise((a, v) => {
          f.addEventListener("load", a), f.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${i}`)))
        })
      }))
    }

    function u(l) {
      const o = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (o.payload = l, window.dispatchEvent(o), !o.defaultPrevented) throw l
    }
    return s.then(l => {
      for (const o of l || []) o.status === "rejected" && u(o.reason);
      return r().catch(u)
    })
  };
export {
  Ae as _, Ie as a, Re as b, we as i, Oe as l, Se as p, Te as s
};