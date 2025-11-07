const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./C0b1-sF3.js", "./DW1I4PKZ.js", "./Cu9fi7rt.js"]))) => i.map(i => d[i]);
import {
  J as et,
  K as se,
  L as Ve,
  i as Ce,
  ac as Fr,
  N as Or,
  O as Pr,
  P as Pt,
  Q as Me,
  R as ke,
  _ as Ae,
  aw as Dr,
  ax as Nr,
  U as Ie,
  X as Br,
  V as Mr,
  ay as Dt,
  T as St,
  a1 as jr,
  a7 as Nt,
  az as ar,
  aA as sr,
  aB as tt,
  Y as At,
  Z as or,
  aC as rt,
  aD as $r,
  aE as at,
  aF as Re,
  aG as Wr,
  aH as qr,
  aI as Zr,
  aJ as Hr,
  a6 as Et,
  aK as lr,
  aL as ur,
  q as cr,
  aM as Gr,
  aN as Qr,
  M as Vr,
  aO as Yr,
  aP as Kr,
  aQ as Jr,
  aR as Bt,
  e as fr,
  a4 as Xr,
  aS as en,
  aT as tn,
  aU as rn,
  aV as nn,
  aW as an,
  aX as sn,
  d as on,
  aY as ln,
  aZ as un,
  W as cn,
  a_ as fn,
  a$ as dn,
  b0 as hn,
  b1 as pn,
  b2 as mn,
  b3 as gn,
  b4 as Mt,
  ae as jt,
  b5 as yn,
  A as xt,
  a3 as dr,
  b6 as be,
  p as bn,
  y as wn,
  a as Ye,
  g as vn,
  u as $t,
  G as Oe,
  m as _n,
  n as kn,
  v as Sn,
  c as Tt,
  f as Ct,
  j as An,
  b7 as En
} from "./Cu9fi7rt.js";
import "./DsnmJJEf.js";
import {
  i as xn
} from "./CgOeFQae.js";
import {
  _ as Tn,
  l as Ke,
  p as xe,
  s as hr
} from "./DW1I4PKZ.js";

function Cn(n, r) {
  return r
}

function In(n, r, e) {
  for (var a = n.items, l = [], t = r.length, i = 0; i < t; i++) qr(r[i].e, l, !0);
  var s = t > 0 && l.length === 0 && e !== null;
  if (s) {
    var u = e.parentNode;
    Zr(u), u.append(e), a.clear(), ye(n, r[0].prev, r[t - 1].next)
  }
  Hr(l, () => {
    for (var h = 0; h < t; h++) {
      var v = r[h];
      s || (a.delete(v.k), ye(n, v.prev, v.next)), Re(v.e, !s)
    }
  })
}

function Rn(n, r, e, a, l, t = null) {
  var i = n,
    s = {
      flags: r,
      items: new Map,
      first: null
    },
    u = (r & ur) !== 0;
  if (u) {
    var h = n;
    i = se ? Me(lr(h)) : h.appendChild(St())
  }
  se && Ve();
  var v = null,
    b = !1,
    y = new Map,
    d = Fr(() => {
      var p = e();
      return sr(p) ? p : p == null ? [] : ar(p)
    }),
    g, f;

  function m() {
    Ln(f, g, s, y, i, l, r, a, e), t !== null && (g.length === 0 ? v ? At(v) : v = Ie(() => t(i)) : v !== null && or(v, () => {
      v = null
    }))
  }
  et(() => {
    f ??= Et, g = Ce(d);
    var p = g.length;
    if (b && p === 0) return;
    b = p === 0;
    let w = !1;
    if (se) {
      var A = Or(i) === Pr;
      A !== (p === 0) && (i = Pt(), Me(i), ke(!1), w = !0)
    }
    if (se) {
      for (var x = null, C, R = 0; R < p; R++) {
        if (Ae.nodeType === Dr && Ae.data === Nr) {
          i = Ae, w = !0, ke(!1);
          break
        }
        var k = g[R],
          E = a(k, R);
        C = pt(Ae, s, x, null, k, E, R, l, r, e), s.items.set(E, C), x = C
      }
      p > 0 && Me(Pt())
    }
    if (se) p === 0 && t && (v = Ie(() => t(i)));
    else if (Br()) {
      var I = new Set,
        O = Mr;
      for (R = 0; R < p; R += 1) {
        k = g[R], E = a(k, R);
        var H = s.items.get(E) ?? y.get(E);
        H ? (r & (rt | tt)) !== 0 && pr(H, k, R, r) : (C = pt(null, s, null, null, k, E, R, l, r, e, !0), y.set(E, C)), I.add(E)
      }
      for (const [T, D] of s.items) I.has(T) || O.skipped_effects.add(D.e);
      O.add_callback(m)
    } else m();
    w && ke(!0), Ce(d)
  }), se && (i = Ae)
}

function Ln(n, r, e, a, l, t, i, s, u) {
  var h = (i & Gr) !== 0,
    v = (i & (rt | tt)) !== 0,
    b = r.length,
    y = e.items,
    d = e.first,
    g = d,
    f, m = null,
    p, w = [],
    A = [],
    x, C, R, k;
  if (h)
    for (k = 0; k < b; k += 1) x = r[k], C = s(x, k), R = y.get(C), R !== void 0 && (R.a?.measure(), (p ??= new Set).add(R));
  for (k = 0; k < b; k += 1) {
    if (x = r[k], C = s(x, k), R = y.get(C), R === void 0) {
      var E = a.get(C);
      if (E !== void 0) {
        a.delete(C), y.set(C, E);
        var I = m ? m.next : g;
        ye(e, m, E), ye(e, E, I), st(E, I, l), m = E
      } else {
        var O = g ? g.e.nodes_start : l;
        m = pt(O, e, m, m === null ? e.first : m.next, x, C, k, t, i, u)
      }
      y.set(C, m), w = [], A = [], g = m.next;
      continue
    }
    if (v && pr(R, x, k, i), (R.e.f & at) !== 0 && (At(R.e), h && (R.a?.unfix(), (p ??= new Set).delete(R))), R !== g) {
      if (f !== void 0 && f.has(R)) {
        if (w.length < A.length) {
          var H = A[0],
            T;
          m = H.prev;
          var D = w[0],
            c = w[w.length - 1];
          for (T = 0; T < w.length; T += 1) st(w[T], H, l);
          for (T = 0; T < A.length; T += 1) f.delete(A[T]);
          ye(e, D.prev, c.next), ye(e, m, D), ye(e, c, H), g = H, m = c, k -= 1, w = [], A = []
        } else f.delete(R), st(R, g, l), ye(e, R.prev, R.next), ye(e, R, m === null ? e.first : m.next), ye(e, m, R), m = R;
        continue
      }
      for (w = [], A = []; g !== null && g.k !== C;)(g.e.f & at) === 0 && (f ??= new Set).add(g), A.push(g), g = g.next;
      if (g === null) continue;
      R = g
    }
    w.push(R), m = R, g = R.next
  }
  if (g !== null || f !== void 0) {
    for (var N = f === void 0 ? [] : ar(f); g !== null;)(g.e.f & at) === 0 && N.push(g), g = g.next;
    var K = N.length;
    if (K > 0) {
      var $ = (i & ur) !== 0 && b === 0 ? l : null;
      if (h) {
        for (k = 0; k < K; k += 1) N[k].a?.measure();
        for (k = 0; k < K; k += 1) N[k].a?.fix()
      }
      In(e, N, $)
    }
  }
  h && cr(() => {
    if (p !== void 0)
      for (R of p) R.a?.apply()
  }), n.first = e.first && e.first.e, n.last = m && m.e;
  for (var ee of a.values()) Re(ee.e);
  a.clear()
}

function pr(n, r, e, a) {
  (a & rt) !== 0 && Dt(n.v, r), (a & tt) !== 0 ? Dt(n.i, e) : n.i = e
}

function pt(n, r, e, a, l, t, i, s, u, h, v) {
  var b = (u & rt) !== 0,
    y = (u & $r) === 0,
    d = b ? y ? jr(l, !1, !1) : Nt(l) : l,
    g = (u & tt) === 0 ? i : Nt(i),
    f = {
      i: g,
      v: d,
      k: t,
      a: null,
      e: null,
      prev: e,
      next: a
    };
  try {
    if (n === null) {
      var m = document.createDocumentFragment();
      m.append(n = St())
    }
    return f.e = Ie(() => s(n, d, g, h), se), f.e.prev = e && e.e, f.e.next = a && a.e, e === null ? v || (r.first = f) : (e.next = f, e.e.next = f.e), a !== null && (a.prev = f, a.e.prev = f.e), f
  } finally {}
}

function st(n, r, e) {
  for (var a = n.next ? n.next.e.nodes_start : e, l = r ? r.e.nodes_start : e, t = n.e.nodes_start; t !== null && t !== a;) {
    var i = Wr(t);
    l.before(t), t = i
  }
}

function ye(n, r, e) {
  r === null ? n.first = e : (r.next = e, r.e.next = e && e.e), e !== null && (e.prev = r, e.e.prev = r && r.e)
}

function It(n, r, e, a, l) {
  se && Ve();
  var t = r.$$slots?.[e],
    i = !1;
  t === !0 && (t = r.children, i = !0), t === void 0 || t(n, i ? () => a : a)
}

function zn(n, r, e, a, l, t) {
  let i = se;
  se && Ve();
  var s, u, h = null;
  se && Ae.nodeType === Qr && (h = Ae, Ve());
  var v = se ? Ae : n,
    b;
  et(() => {
    const y = r() || null;
    var d = Yr;
    y !== s && (b && (y === null ? or(b, () => {
      b = null, u = null
    }) : y === u ? At(b) : (Re(b), Bt(!1))), y && y !== u && (b = Ie(() => {
      if (h = se ? h : document.createElementNS(d, y), Kr(h, h), a) {
        se && Jr(y) && h.append(document.createComment(""));
        var g = se ? lr(h) : h.appendChild(St());
        se && (g === null ? ke(!1) : Me(g)), a(h, g)
      }
      Et.nodes_end = h, v.before(h)
    })), s = y, s && (u = s), Bt(!0))
  }, Vr), i && (ke(!0), Me(v))
}

function Un(n, r) {
  var e = void 0,
    a;
  et(() => {
    e !== (e = r()) && (a && (Re(a), a = null), e && (a = Ie(() => {
      fr(() => e(n))
    })))
  })
}

function mr(n) {
  var r, e, a = "";
  if (typeof n == "string" || typeof n == "number") a += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var l = n.length;
      for (r = 0; r < l; r++) n[r] && (e = mr(n[r])) && (a && (a += " "), a += e)
    } else
      for (e in n) n[e] && (a && (a += " "), a += e);
  return a
}

function Fn() {
  for (var n, r, e = 0, a = "", l = arguments.length; e < l; e++)(n = arguments[e]) && (r = mr(n)) && (a && (a += " "), a += r);
  return a
}

function On(n) {
  return typeof n == "object" ? Fn(n) : n ?? ""
}
const Wt = [...` 	
\r\f \v\uFEFF`];

function Pn(n, r, e) {
  var a = n == null ? "" : "" + n;
  if (r && (a = a ? a + " " + r : r), e) {
    for (var l in e)
      if (e[l]) a = a ? a + " " + l : l;
      else if (a.length)
      for (var t = l.length, i = 0;
        (i = a.indexOf(l, i)) >= 0;) {
        var s = i + t;
        (i === 0 || Wt.includes(a[i - 1])) && (s === a.length || Wt.includes(a[s])) ? a = (i === 0 ? "" : a.substring(0, i)) + a.substring(s + 1): i = s
      }
  }
  return a === "" ? null : a
}

function qt(n, r = !1) {
  var e = r ? " !important;" : ";",
    a = "";
  for (var l in n) {
    var t = n[l];
    t != null && t !== "" && (a += " " + l + ": " + t + e)
  }
  return a
}

function ot(n) {
  return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n
}

function Dn(n, r) {
  if (r) {
    var e = "",
      a, l;
    if (Array.isArray(r) ? (a = r[0], l = r[1]) : a = r, n) {
      n = String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var t = !1,
        i = 0,
        s = !1,
        u = [];
      a && u.push(...Object.keys(a).map(ot)), l && u.push(...Object.keys(l).map(ot));
      var h = 0,
        v = -1;
      const f = n.length;
      for (var b = 0; b < f; b++) {
        var y = n[b];
        if (s ? y === "/" && n[b - 1] === "*" && (s = !1) : t ? t === y && (t = !1) : y === "/" && n[b + 1] === "*" ? s = !0 : y === '"' || y === "'" ? t = y : y === "(" ? i++ : y === ")" && i--, !s && t === !1 && i === 0) {
          if (y === ":" && v === -1) v = b;
          else if (y === ";" || b === f - 1) {
            if (v !== -1) {
              var d = ot(n.substring(h, v).trim());
              if (!u.includes(d)) {
                y !== ";" && b++;
                var g = n.substring(h, b).trim();
                e += " " + g + ";"
              }
            }
            h = b + 1, v = -1
          }
        }
      }
    }
    return a && (e += qt(a)), l && (e += qt(l, !0)), e = e.trim(), e === "" ? null : e
  }
  return n == null ? null : String(n)
}

function Nn(n, r, e, a, l, t) {
  var i = n.__className;
  if (se || i !== e || i === void 0) {
    var s = Pn(e, a, t);
    (!se || s !== n.getAttribute("class")) && (s == null ? n.removeAttribute("class") : r ? n.className = s : n.setAttribute("class", s)), n.__className = e
  } else if (t && l !== t)
    for (var u in t) {
      var h = !!t[u];
      (l == null || h !== !!l[u]) && n.classList.toggle(u, h)
    }
  return t
}

function lt(n, r = {}, e, a) {
  for (var l in e) {
    var t = e[l];
    r[l] !== t && (e[l] == null ? n.style.removeProperty(l) : n.style.setProperty(l, t, a))
  }
}

function Bn(n, r, e, a) {
  var l = n.__style;
  if (se || l !== r) {
    var t = Dn(r, a);
    (!se || t !== n.getAttribute("style")) && (t == null ? n.removeAttribute("style") : n.style.cssText = t), n.__style = r
  } else a && (Array.isArray(a) ? (lt(n, e?.[0], a[0]), lt(n, e?.[1], a[1], "important")) : lt(n, e, a));
  return a
}

function mt(n, r, e = !1) {
  if (n.multiple) {
    if (r == null) return;
    if (!sr(r)) return en();
    for (var a of n.options) a.selected = r.includes(Zt(a));
    return
  }
  for (a of n.options) {
    var l = Zt(a);
    if (tn(l, r)) {
      a.selected = !0;
      return
    }
  }(!e || r !== void 0) && (n.selectedIndex = -1)
}

function Mn(n) {
  var r = new MutationObserver(() => {
    mt(n, n.__value)
  });
  r.observe(n, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"]
  }), Xr(() => {
    r.disconnect()
  })
}

function Zt(n) {
  return "__value" in n ? n.__value : n.value
}
const Pe = Symbol("class"),
  De = Symbol("style"),
  gr = Symbol("is custom element"),
  yr = Symbol("is html");

function jn(n) {
  if (se) {
    var r = !1,
      e = () => {
        if (!r) {
          if (r = !0, n.hasAttribute("value")) {
            var a = n.value;
            $e(n, "value", null), n.value = a
          }
          if (n.hasAttribute("checked")) {
            var l = n.checked;
            $e(n, "checked", null), n.checked = l
          }
        }
      };
    n.__on_r = e, cr(e), fn()
  }
}

function ji(n, r) {
  var e = Rt(n);
  e.value === (e.value = r ?? void 0) || n.value === r && (r !== 0 || n.nodeName !== "PROGRESS") || (n.value = r ?? "")
}

function $n(n, r) {
  r ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected")
}

function $e(n, r, e, a) {
  var l = Rt(n);
  se && (l[r] = n.getAttribute(r), r === "src" || r === "srcset" || r === "href" && n.nodeName === "LINK") || l[r] !== (l[r] = e) && (r === "loading" && (n[pn] = e), e == null ? n.removeAttribute(r) : typeof e != "string" && Lt(n).includes(r) ? n[r] = e : n.setAttribute(r, e))
}

function $i(n, r, e) {
  var a = yn,
    l = Et;
  let t = se;
  se && ke(!1), Mt(null), jt(null);
  try {
    r !== "style" && (gt.has(n.getAttribute("is") || n.nodeName) || !customElements || customElements.get(n.getAttribute("is") || n.tagName.toLowerCase()) ? Lt(n).includes(r) : e && typeof e == "object") ? n[r] = e : $e(n, r, e == null ? e : String(e))
  } finally {
    Mt(a), jt(l), t && ke(!0)
  }
}

function Wn(n, r, e, a, l = !1, t = !1) {
  if (se && l && n.tagName === "INPUT") {
    var i = n,
      s = i.type === "checkbox" ? "defaultChecked" : "defaultValue";
    s in e || jn(i)
  }
  var u = Rt(n),
    h = u[gr],
    v = !u[yr];
  let b = se && h;
  b && ke(!1);
  var y = r || {},
    d = n.tagName === "OPTION";
  for (var g in r) g in e || (e[g] = null);
  e.class ? e.class = On(e.class) : e[Pe] && (e.class = null), e[De] && (e.style ??= null);
  var f = Lt(n);
  for (const R in e) {
    let k = e[R];
    if (d && R === "value" && k == null) {
      n.value = n.__value = "", y[R] = k;
      continue
    }
    if (R === "class") {
      var m = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      Nn(n, m, k, a, r?.[Pe], e[Pe]), y[R] = k, y[Pe] = e[Pe];
      continue
    }
    if (R === "style") {
      Bn(n, k, r?.[De], e[De]), y[R] = k, y[De] = e[De];
      continue
    }
    var p = y[R];
    if (!(k === p && !(k === void 0 && n.hasAttribute(R)))) {
      y[R] = k;
      var w = R[0] + R[1];
      if (w !== "$$")
        if (w === "on") {
          const E = {},
            I = "$$" + R;
          let O = R.slice(2);
          var A = mn(O);
          if (an(O) && (O = O.slice(0, -7), E.capture = !0), !A && p) {
            if (k != null) continue;
            n.removeEventListener(O, y[I], E), y[I] = null
          }
          if (k != null)
            if (A) n[`__${O}`] = k, on([O]);
            else {
              let H = function(T) {
                y[R].call(this, T)
              };
              y[I] = sn(O, n, H, E)
            }
          else A && (n[`__${O}`] = void 0)
        } else if (R === "style") $e(n, R, k);
      else if (R === "autofocus") ln(n, !!k);
      else if (!h && (R === "__value" || R === "value" && k != null)) n.value = n.__value = k;
      else if (R === "selected" && d) $n(n, k);
      else {
        var x = R;
        v || (x = un(x));
        var C = x === "defaultValue" || x === "defaultChecked";
        if (k == null && !h && !C)
          if (u[R] = null, x === "value" || x === "checked") {
            let E = n;
            const I = r === void 0;
            if (x === "value") {
              let O = E.defaultValue;
              E.removeAttribute(x), E.defaultValue = O, E.value = E.__value = I ? O : null
            } else {
              let O = E.defaultChecked;
              E.removeAttribute(x), E.defaultChecked = O, E.checked = I ? O : !1
            }
          } else n.removeAttribute(R);
        else C || f.includes(x) && (h || typeof k != "string") ? (n[x] = k, x in u && (u[x] = cn)) : typeof k != "function" && $e(n, x, k)
      }
    }
  }
  return b && ke(!0), y
}

function Ht(n, r, e = [], a = [], l, t = !1, i = !1) {
  rn(e, a, s => {
    var u = void 0,
      h = {},
      v = n.nodeName === "SELECT",
      b = !1;
    if (et(() => {
        var d = r(...s.map(Ce)),
          g = Wn(n, u, d, l, t, i);
        b && v && "value" in d && mt(n, d.value);
        for (let m of Object.getOwnPropertySymbols(h)) d[m] || Re(h[m]);
        for (let m of Object.getOwnPropertySymbols(d)) {
          var f = d[m];
          m.description === nn && (!u || f !== u[m]) && (h[m] && Re(h[m]), h[m] = Ie(() => Un(n, () => f))), g[m] = f
        }
        u = g
      }), v) {
      var y = n;
      fr(() => {
        mt(y, u.value, !0), Mn(y)
      })
    }
    b = !0
  })
}

function Rt(n) {
  return n.__attributes ??= {
    [gr]: n.nodeName.includes("-"),
    [yr]: n.namespaceURI === dn
  }
}
var gt = new Map;

function Lt(n) {
  var r = n.getAttribute("is") || n.nodeName,
    e = gt.get(r);
  if (e) return e;
  gt.set(r, e = []);
  for (var a, l = n, t = Element.prototype; t !== l;) {
    a = gn(l);
    for (var i in a) a[i].set && e.push(i);
    l = hn(l)
  }
  return e
}
const qn = ["HI_RES_LOSSLESS", "LOSSLESS", "HIGH", "LOW"],
  Zn = {
    HI_RES_LOSSLESS: ["HI_RES_LOSSLESS", "HIRES_LOSSLESS", "HIRESLOSSLESS", "HIFI_PLUS", "HI_RES_FLAC", "HI_RES", "HIRES", "MASTER", "MASTER_QUALITY", "MQA"],
    LOSSLESS: ["LOSSLESS", "HIFI"],
    HIGH: ["HIGH", "HIGH_QUALITY"],
    LOW: ["LOW", "LOW_QUALITY"]
  },
  Gt = new Map(qn.map((n, r) => [n, r])),
  Hn = n => n.trim().toUpperCase().replace(/[^A-Z0-9]+/g, "_");

function br(n) {
  if (!n) return null;
  const r = Hn(n);
  for (const [e, a] of Object.entries(Zn))
    if (a.includes(r)) return e;
  return null
}

function Qt(n) {
  if (!Array.isArray(n)) return null;
  const r = [];
  for (const e of n) {
    if (typeof e != "string") continue;
    const a = br(e);
    a && !r.includes(a) && r.push(a)
  }
  return wr(r)
}

function wr(n) {
  let r = null;
  for (const e of n) {
    if (!e) continue;
    if (!r) {
      r = e;
      continue
    }
    const a = Gt.get(e) ?? Number.POSITIVE_INFINITY,
      l = Gt.get(r) ?? Number.POSITIVE_INFINITY;
    a < l && (r = e)
  }
  return r
}

function vr(n) {
  if (!n) return null;
  const r = [Qt(n.mediaMetadata?.tags), Qt(n.album?.mediaMetadata?.tags), br(n.audioQuality)];
  return wr(r)
}
const Gn = {
    high: 3,
    medium: 2,
    low: 1
  },
  Vt = "[tidal-ui] performance";

function oe(n, r) {
  typeof console > "u" || (typeof r < "u" ? console.info(Vt, n, r) : console.info(Vt, n))
}
const Qn = ["swiftshader", "llvmpipe", "softpipe", "software", "basic render driver", "angle (software", "mesa llvmpipe", "d3d11warp", "gdi generic"];

function Vn(n) {
  return n >= 4 ? "high" : n >= 1 ? "medium" : "low"
}

function Yn(n) {
  switch (n) {
    case "advanced":
      return "high";
    case "standard":
      return "medium";
    default:
      return "low"
  }
}

function Kn(n, r) {
  try {
    const e = n.getParameter(r);
    if (typeof e == "number" && Number.isFinite(e)) return e
  } catch (e) {
    oe("Failed to read WebGL numeric parameter", {
      parameter: r,
      error: e
    })
  }
  return null
}

function ut(n, r, e) {
  let a, l;
  try {
    const b = n.getExtension("WEBGL_debug_renderer_info");
    b ? a = n.getParameter(b.UNMASKED_RENDERER_WEBGL) : a = n.getParameter(n.RENDERER)
  } catch (b) {
    oe("Failed to read WebGL renderer info", b)
  }
  try {
    l = n.getParameter(n.SHADING_LANGUAGE_VERSION)
  } catch (b) {
    oe("Failed to read WebGL shading language version", b)
  }
  const t = Kn(n, n.MAX_TEXTURE_SIZE),
    i = a?.toLowerCase() ?? "",
    s = Qn.some(b => i.includes(b));
  let u, h;
  return s ? (u = "software", h = "Software renderer detected") : e ? (u = "limited", h = "WebGL context only available with major performance caveat") : t !== null && t < 4096 ? (u = "limited", h = "Low max texture size") : r === "webgl2" ? (u = "advanced", h = "WebGL2 context available") : (u = "standard", h = "WebGL context available"), n.getExtension("WEBGL_lose_context")?.loseContext(), {
    tier: u,
    reason: h,
    renderer: a,
    maxTextureSize: t,
    shadingLanguage: l,
    contextType: r
  }
}
const yt = new Set;
let Ee = null,
  Ze = null,
  ct = !1;
const Jn = "medium";

function Yt(n) {
  return Gn[n]
}

function Xn(n, r) {
  return Yt(n) <= Yt(r) ? n : r
}

function _r(n) {
  Ee = n, oe("Performance level updated", {
    level: n
  });
  for (const r of yt) try {
    r(n)
  } catch (e) {
    console.warn("Performance listener threw an error", e)
  }
  typeof window < "u" && window.dispatchEvent(new CustomEvent("tidal:performance-detected", {
    detail: n
  }))
}

function ei() {
  if (Ee) return oe("Using cached performance level", {
    level: Ee
  }), bt(), Ee;
  const n = ti();
  return oe("Baseline performance estimated", {
    baseline: n
  }), _r(n), bt(), n
}

function Wi(n) {
  return Ee && n(Ee), yt.add(n), () => {
    yt.delete(n)
  }
}

function ti() {
  if (typeof window > "u") return Jn;
  const n = {
    cpuCores: navigator.hardwareConcurrency || 4
  };
  if ("deviceMemory" in navigator && (n.memory = navigator.deviceMemory), "connection" in navigator) {
    const i = navigator.connection;
    n.connection = i?.effectiveType
  }
  let r = 0;
  n.cpuCores >= 10 ? r += 3 : n.cpuCores >= 6 ? r += 2 : n.cpuCores >= 4 ? r += 1 : r -= 1, n.memory ? n.memory >= 12 ? r += 3 : n.memory >= 8 ? r += 2 : n.memory >= 4 ? r += 1 : n.memory < 3 && (r -= 2) : r += 1, n.connection && (n.connection === "4g" || n.connection === "5g" ? r += 1 : n.connection === "2g" ? r -= 2 : n.connection === "3g" && (r -= 1)), n.cpuCores <= 2 && (r -= 1.5);
  const e = Vn(r),
    a = ri();
  if (a.tier === "none" || a.tier === "software") return oe("Hardware baseline forced to low due to insufficient graphics support", {
    metrics: n,
    cpuScore: r,
    cpuLevel: e,
    graphics: a
  }), "low";
  const l = Yn(a.tier),
    t = e === "low" || l !== "high" ? "medium" : "high";
  return oe("Hardware baseline scored", {
    metrics: n,
    cpuScore: r,
    cpuLevel: e,
    gpuLevel: l,
    graphics: a,
    baseline: t
  }), t
}

function bt() {
  if (Ze) {
    oe("Graphics benchmark already running; skipping new request");
    return
  }
  if (!(typeof window > "u")) {
    if (typeof document < "u" && document.visibilityState === "hidden") {
      ct || (ct = !0, oe("Deferring graphics benchmark until tab becomes visible"), document.addEventListener("visibilitychange", () => {
        ct = !1, oe("Tab visible; retrying deferred graphics benchmark"), bt()
      }, {
        once: !0
      }));
      return
    }
    oe("Launching graphics benchmark to refine performance level"), Ze = ni().then(n => {
      if (Ze = null, !n) {
        oe("Graphics benchmark produced no result; keeping current level");
        return
      }
      const r = Ee ?? n,
        e = Xn(r, n);
      Ee !== e ? (_r(e), oe("Performance level adjusted after benchmark", {
        initial: r,
        benchmark: n,
        final: e
      })) : oe("Benchmark confirmed existing performance level", {
        initial: r,
        benchmark: n
      })
    }).catch(n => {
      Ze = null, oe("Graphics benchmark failed to run", n)
    })
  }
}

function ri() {
  if (typeof document > "u") {
    const r = {
      tier: "limited",
      reason: "Document unavailable for graphics probe"
    };
    return oe("Graphics capability detected", r), r
  }
  let n = {
    tier: "none",
    reason: "Unable to acquire any WebGL context"
  };
  try {
    const r = document.createElement("canvas"),
      e = {
        powerPreference: "high-performance",
        antialias: !1
      },
      a = r.getContext("webgl2", e);
    if (a) n = ut(a, "webgl2", !1);
    else {
      const l = {
          powerPreference: "high-performance",
          antialias: !1,
          failIfMajorPerformanceCaveat: !0
        },
        t = r.getContext("webgl", l);
      if (t) n = ut(t, "webgl", !1);
      else {
        const i = r.getContext("webgl", e) || r.getContext("experimental-webgl", e);
        if (i) {
          const s = i instanceof WebGL2RenderingContext ? "webgl2" : "webgl";
          n = ut(i, s, !0)
        }
      }
    }
  } catch (r) {
    oe("Graphics probing failed", {
      error: r
    }), n = {
      tier: "limited",
      reason: "Exception while probing graphics capabilities"
    }
  }
  return oe("Graphics capability detected", n), n
}

function ni() {
  return typeof window > "u" || typeof document > "u" ? (oe("Skipping graphics benchmark: window or document unavailable"), Promise.resolve(null)) : "requestAnimationFrame" in window ? document.visibilityState === "hidden" ? (oe("Skipping graphics benchmark: document hidden"), Promise.resolve(null)) : new Promise(n => {
    let r = !1,
      e = null;
    const a = t => {
        t && t.parentNode && t.parentNode.removeChild(t)
      },
      l = window.setTimeout(() => {
        r || (r = !0, oe("Graphics benchmark timed out; falling back to cached level"), a(), n(null))
      }, 1500);
    try {
      oe("Beginning graphics benchmark workload");
      const t = document.createElement("canvas");
      t.width = 640, t.height = 640, t.style.position = "fixed", t.style.left = "-9999px", t.style.pointerEvents = "none", t.style.opacity = "0", document.body.appendChild(t);
      const i = t.getContext("2d", {
        willReadFrequently: !1,
        alpha: !1
      });
      if (!i) {
        window.clearTimeout(l), a(t), oe("Canvas context unavailable; forcing low performance mode"), n("low");
        return
      }
      let s = 7;
      const u = ["#0f172a", "#1e293b", "#1d4ed8", "#2563eb", "#38bdf8"],
        h = () => (s = (s * 1664525 + 1013904223) % 4294967296, s / 4294967296),
        v = [],
        b = [],
        y = 60;
      let d = 0,
        g = 0;
      const f = () => {
          const w = performance.now();
          i.globalCompositeOperation = "lighter", i.clearRect(0, 0, t.width, t.height);
          for (let A = 0; A < 220; A += 1) {
            const x = 10 + (A + d) % 18 * 7,
              C = h() * (t.width + x) - x,
              R = h() * (t.height + x) - x;
            i.globalAlpha = .14 + A % 8 * .1, i.fillStyle = u[A % u.length], i.fillRect(C, R, x, x)
          }
          i.globalCompositeOperation = "source-over", b.push(performance.now() - w)
        },
        m = w => {
          r || (r = !0, window.clearTimeout(l), a(t), oe("Graphics benchmark completed", {
            result: w,
            summary: e
          }), n(w))
        },
        p = w => {
          if (d > 0 && v.push(w - g), g = w, f(), d += 1, d >= y) {
            const A = v.slice(5);
            if (!A.length) {
              m(null);
              return
            }
            const x = A.reduce((I, O) => I + O, 0) / A.length,
              C = Math.max(...A),
              R = b.reduce((I, O) => I + O, 0) / b.length,
              k = A.filter(I => I > 24).length / A.length;
            e = {
              averageFrame: x,
              worstFrame: C,
              averageWorkload: R,
              stutterRatio: k
            };
            let E = "high";
            x > 32 || C > 52 || R > 16 || k > .35 ? E = "low" : (x > 24 || C > 40 || R > 10 || k > .22) && (E = "medium"), m(E);
            return
          }
          window.requestAnimationFrame(p)
        };
      window.requestAnimationFrame(w => {
        g = w, window.requestAnimationFrame(p)
      })
    } catch (t) {
      console.warn("Graphics benchmark failed", t), window.clearTimeout(l), a(), n(null)
    }
  }) : (oe("Skipping graphics benchmark: requestAnimationFrame unsupported"), Promise.resolve(null))
}
const wt = "tidal-ui.userPreferences",
  Se = {
    playbackQuality: "HI_RES_LOSSLESS",
    convertAacToMp3: !1,
    downloadCoversSeperately: !1,
    performanceMode: "auto"
  };

function kr(n) {
  if (!n) return Se;
  try {
    const r = JSON.parse(n),
      e = r?.playbackQuality,
      a = r?.convertAacToMp3,
      l = r?.downloadCoversSeperately,
      t = r?.performanceMode;
    return {
      playbackQuality: e === "HI_RES_LOSSLESS" || e === "LOSSLESS" || e === "HIGH" || e === "LOW" ? e : Se.playbackQuality,
      convertAacToMp3: typeof a == "boolean" ? a : Se.convertAacToMp3,
      downloadCoversSeperately: typeof l == "boolean" ? l : Se.downloadCoversSeperately,
      performanceMode: t === "auto" || t === "high" || t === "medium" || t === "low" ? t : Se.performanceMode
    }
  } catch (r) {
    return console.warn("Failed to parse stored user preferences", r), Se
  }
}
const Kt = () => {
    try {
      return kr(localStorage.getItem(wt))
    } catch (n) {
      return console.warn("Unable to read user preferences from storage", n), Se
    }
  },
  ii = () => {
    const {
      subscribe: n,
      set: r,
      update: e
    } = xt(Kt());
    return n(a => {
      try {
        localStorage.setItem(wt, JSON.stringify(a))
      } catch (l) {
        console.warn("Failed to persist user preferences", l)
      }
    }), window.addEventListener("storage", a => {
      a.key === wt && r(kr(a.newValue))
    }), {
      subscribe: n,
      setPlaybackQuality(a) {
        e(l => l.playbackQuality === a ? l : {
          ...l,
          playbackQuality: a
        })
      },
      setConvertAacToMp3(a) {
        e(l => l.convertAacToMp3 === a ? l : {
          ...l,
          convertAacToMp3: a
        })
      },
      toggleConvertAacToMp3() {
        e(a => ({
          ...a,
          convertAacToMp3: !a.convertAacToMp3
        }))
      },
      setDownloadCoversSeperately(a) {
        e(l => l.downloadCoversSeperately === a ? l : {
          ...l,
          downloadCoversSeperately: a
        })
      },
      toggleDownloadCoversSeperately() {
        e(a => ({
          ...a,
          downloadCoversSeperately: !a.downloadCoversSeperately
        }))
      },
      setPerformanceMode(a) {
        e(l => l.performanceMode === a ? l : {
          ...l,
          performanceMode: a
        })
      },
      getEffectivePerformanceLevel() {
        const a = Kt();
        return a.performanceMode === "auto" ? ei() : a.performanceMode
      },
      reset() {
        r(Se)
      }
    }
  },
  Sr = ii(),
  ai = dr(Sr),
  Jt = {
    currentTrack: null,
    isPlaying: !1,
    currentTime: 0,
    duration: 0,
    volume: .8,
    quality: ai.playbackQuality,
    qualitySource: "manual",
    isLoading: !1,
    queue: [],
    queueIndex: -1,
    sampleRate: null
  };

function si() {
  const {
    subscribe: n,
    set: r,
    update: e
  } = xt(Jt), a = (t, i) => {
    if (t.qualitySource === "manual") return t;
    const u = vr(i) ?? "LOSSLESS";
    return t.quality === u ? t : {
      ...t,
      quality: u
    }
  }, l = (t, i) => t.currentTrack && i && t.currentTrack.id === i.id ? t.sampleRate : null;
  return {
    subscribe: n,
    setTrack: t => e(i => {
      const s = {
        ...i,
        currentTrack: t,
        duration: t.duration,
        isLoading: !0,
        sampleRate: l(i, t)
      };
      return a(s, t)
    }),
    play: () => e(t => ({
      ...t,
      isPlaying: !0
    })),
    pause: () => e(t => ({
      ...t,
      isPlaying: !1
    })),
    togglePlay: () => e(t => ({
      ...t,
      isPlaying: !t.isPlaying
    })),
    setCurrentTime: t => e(i => ({
      ...i,
      currentTime: t
    })),
    setDuration: t => e(i => ({
      ...i,
      duration: t
    })),
    setSampleRate: t => e(i => ({
      ...i,
      sampleRate: t
    })),
    setVolume: t => e(i => ({
      ...i,
      volume: t
    })),
    setQuality: t => e(i => (Sr.setPlaybackQuality(t), {
      ...i,
      quality: t,
      qualitySource: "manual"
    })),
    setLoading: t => e(i => ({
      ...i,
      isLoading: t
    })),
    setQueue: (t, i = 0) => e(s => {
      const u = t.length > 0,
        h = u ? Math.min(Math.max(i, 0), t.length - 1) : -1,
        v = u ? t[h] : null;
      let b = {
        ...s,
        queue: t,
        queueIndex: h,
        currentTrack: v,
        isPlaying: u ? s.isPlaying : !1,
        isLoading: u,
        currentTime: u ? s.currentTime : 0,
        duration: v?.duration ?? 0,
        sampleRate: l(s, v)
      };
      return u || (b = {
        ...b,
        queueIndex: -1,
        currentTrack: null,
        isPlaying: !1,
        isLoading: !1,
        currentTime: 0,
        duration: 0,
        sampleRate: null
      }), a(b, b.currentTrack)
    }),
    enqueue: t => e(i => {
      const s = i.queue.slice();
      if (s.length === 0) {
        const u = {
          ...i,
          queue: [t],
          queueIndex: 0,
          currentTrack: t,
          isPlaying: !0,
          isLoading: !0,
          currentTime: 0,
          duration: t.duration,
          sampleRate: l(i, t)
        };
        return a(u, t)
      }
      return s.push(t), {
        ...i,
        queue: s
      }
    }),
    enqueueNext: t => e(i => {
      const s = i.queue.slice();
      let u = i.queueIndex;
      if (s.length === 0 || u === -1) {
        const v = {
          ...i,
          queue: [t],
          queueIndex: 0,
          currentTrack: t,
          isPlaying: !0,
          isLoading: !0,
          currentTime: 0,
          duration: t.duration,
          sampleRate: l(i, t)
        };
        return a(v, t)
      }
      const h = Math.min(u + 1, s.length);
      return s.splice(h, 0, t), h <= u && (u += 1), {
        ...i,
        queue: s,
        queueIndex: u
      }
    }),
    next: () => e(t => {
      if (t.queueIndex < t.queue.length - 1) {
        const i = t.queueIndex + 1,
          s = t.queue[i] ?? null,
          u = {
            ...t,
            queueIndex: i,
            currentTrack: s,
            currentTime: 0,
            duration: s?.duration ?? 0,
            sampleRate: l(t, s)
          };
        return a(u, s)
      }
      return t
    }),
    previous: () => e(t => {
      if (t.queueIndex > 0) {
        const i = t.queueIndex - 1,
          s = t.queue[i] ?? null,
          u = {
            ...t,
            queueIndex: i,
            currentTrack: s,
            currentTime: 0,
            duration: s?.duration ?? 0,
            sampleRate: l(t, s)
          };
        return a(u, s)
      }
      return t
    }),
    shuffleQueue: () => e(t => {
      const {
        queue: i,
        queueIndex: s,
        currentTrack: u
      } = t;
      if (i.length <= 1) return t;
      const h = i.slice();
      let v = null;
      if (u) {
        const g = h.findIndex(f => f.id === u.id);
        g >= 0 && (v = h.splice(g, 1)[0] ?? null)
      }!v && s >= 0 && s < h.length && (v = h.splice(s, 1)[0] ?? null), !v && u && (v = u);
      for (let g = h.length - 1; g > 0; g -= 1) {
        const f = Math.floor(Math.random() * (g + 1));
        [h[g], h[f]] = [h[f], h[g]]
      }
      v && h.unshift(v);
      const b = h.length > 0 ? 0 : -1,
        y = h.length > 0 ? h[0] ?? null : null;
      let d = {
        ...t,
        queue: h,
        queueIndex: b,
        currentTrack: y,
        currentTime: 0,
        duration: y?.duration ?? 0,
        sampleRate: l(t, y)
      };
      return b === -1 && (d = {
        ...d,
        currentTrack: null,
        currentTime: 0,
        duration: 0,
        sampleRate: null
      }), a(d, d.currentTrack)
    }),
    playAtIndex: t => e(i => {
      if (t < 0 || t >= i.queue.length) return i;
      const s = i.queue[t] ?? null,
        u = {
          ...i,
          queueIndex: t,
          currentTrack: s,
          currentTime: 0,
          isPlaying: !0,
          isLoading: !0,
          duration: s?.duration ?? 0,
          sampleRate: l(i, s)
        };
      return a(u, s)
    }),
    removeFromQueue: t => e(i => {
      if (t < 0 || t >= i.queue.length) return i;
      const s = i.queue.slice();
      s.splice(t, 1);
      let u = i.queueIndex,
        h = i.currentTrack,
        v = i.isPlaying,
        b = i.currentTime,
        y = i.duration,
        d = i.isLoading;
      if (s.length === 0) {
        const m = {
          ...i,
          queue: s,
          queueIndex: -1,
          currentTrack: null,
          isPlaying: !1,
          isLoading: !1,
          currentTime: 0,
          duration: 0,
          sampleRate: null
        };
        return a(m, null)
      }
      t < u ? u -= 1 : t === u && (u >= s.length && (u = s.length - 1), h = s[u] ?? null, b = 0, y = h?.duration ?? 0, h ? d = !0 : (v = !1, d = !1));
      const g = i.currentTrack && h && i.currentTrack.id === h.id ? i.sampleRate : null,
        f = {
          ...i,
          queue: s,
          queueIndex: u,
          currentTrack: h,
          isPlaying: v,
          isLoading: d,
          currentTime: b,
          duration: y,
          sampleRate: g
        };
      return a(f, h)
    }),
    clearQueue: () => e(t => {
      const i = {
        ...t,
        queue: [],
        queueIndex: -1,
        currentTrack: null,
        isPlaying: !1,
        isLoading: !1,
        currentTime: 0,
        duration: 0,
        sampleRate: null
      };
      return a(i, null)
    }),
    reset: () => r(Jt)
  }
}
const Le = si(),
  qi = be(Le, n => n.currentTrack);
be(Le, n => n.isPlaying);
const Zi = be(Le, n => n.currentTime);
be(Le, n => n.duration);
be(Le, n => n.volume);
be(Le, n => n.duration > 0 ? n.currentTime / n.duration * 100 : 0);
const oi = [{
    name: "new-squid",
    baseUrl: "https://kraken.squid.wtf",
    weight: 20,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "squid-api",
    baseUrl: "https://triton.squid.wtf",
    weight: 20,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "squid-api-2",
    baseUrl: "https://zeus.squid.wtf",
    weight: 19,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "squid-api-3",
    baseUrl: "https://aether.squid.wtf",
    weight: 19,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "phoenix",
    baseUrl: "https://phoenix.squid.wtf",
    weight: 20,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "shiva",
    baseUrl: "https://shiva.squid.wtf",
    weight: 20,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "chaos",
    baseUrl: "https://chaos.squid.wtf",
    weight: 20,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "vercel-fastapi",
    baseUrl: "https://tidal-api-2.binimum.org",
    weight: 1,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "monochrome-jakarta",
    baseUrl: "https://jakarta.monochrome.tf",
    weight: 15,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "monochrome-california",
    baseUrl: "https://california.monochrome.tf",
    weight: 15,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "monochrome-london",
    baseUrl: "https://london.monochrome.tf",
    weight: 15,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "hund",
    baseUrl: "https://hund.qqdl.site",
    weight: 15,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "katze",
    baseUrl: "https://katze.qqdl.site",
    weight: 15,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "maus",
    baseUrl: "https://maus.qqdl.site",
    weight: 15,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "vogel",
    baseUrl: "https://vogel.qqdl.site",
    weight: 15,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "wolf",
    baseUrl: "https://wolf.qqdl.site",
    weight: 15,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "monochrome",
    baseUrl: "https://hifi.prigoana.com",
    weight: 15,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "monochrome-singapore",
    baseUrl: "https://singapore.monochrome.tf",
    weight: 15,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "monochrome-ohio",
    baseUrl: "https://ohio.monochrome.tf",
    weight: 15,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "monochrome-oregon",
    baseUrl: "https://oregon.monochrome.tf",
    weight: 15,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "monochrome-virginia",
    baseUrl: "https://virginia.monochrome.tf",
    weight: 15,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "monochrome-frankfurt",
    baseUrl: "https://frankfurt.monochrome.tf",
    weight: 15,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "monochrome-tokyo",
    baseUrl: "https://tokyo.monochrome.tf",
    weight: 15,
    requiresProxy: !1,
    category: "auto-only"
  }],
  li = [{
    name: "hund",
    baseUrl: "https://hund.qqdl.site",
    weight: 20,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "katze",
    baseUrl: "https://katze.qqdl.site",
    weight: 20,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "maus",
    baseUrl: "https://maus.qqdl.site",
    weight: 20,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "vogel",
    baseUrl: "https://vogel.qqdl.site",
    weight: 20,
    requiresProxy: !1,
    category: "auto-only"
  }, {
    name: "wolf",
    baseUrl: "https://wolf.qqdl.site",
    weight: 20,
    requiresProxy: !1,
    category: "auto-only"
  }],
  zt = {
    auto: [...oi],
    eu: [],
    us: [...li]
  },
  Xt = zt.auto,
  nt = {
    targets: Xt,
    baseUrl: Xt[0]?.baseUrl ?? "https://tidal.401658.xyz",
    proxyUrl: "/api/proxy"
  };
let ft = null;

function Ar(n) {
  const r = n.filter(l => {
    if (!l?.baseUrl || typeof l.baseUrl != "string" || l.weight <= 0) return !1;
    try {
      return new URL(l.baseUrl), !0
    } catch (t) {
      return console.error(`Invalid API target URL for ${l.name}:`, t), !1
    }
  });
  if (r.length === 0) throw new Error("No valid API targets configured");
  let e = 0;
  const a = [];
  for (const l of r) e += l.weight, a.push({
    ...l,
    cumulativeWeight: e
  });
  return a
}

function Ut() {
  return ft || (ft = Ar(nt.targets)), ft
}

function vt() {
  const n = Ut();
  return Er(n)
}

function _t() {
  return Ut()[0]
}

function Er(n) {
  if (n.length === 0) throw new Error("No weighted targets available for selection");
  const r = n[n.length - 1]?.cumulativeWeight ?? 0;
  if (r <= 0) return n[0];
  const e = Math.random() * r;
  for (const a of n)
    if (e < a.cumulativeWeight) return a;
  return n[0]
}

function xr(n = "auto") {
  const r = zt[n];
  return Array.isArray(r) ? r : []
}

function ui(n) {
  if (n === "auto") return vt();
  const r = xr(n);
  if (r.length === 0) return vt();
  const e = Ar(r);
  return Er(e)
}

function Hi(n) {
  return n === "auto" ? zt.auto.length > 0 : xr(n).length > 0
}

function Je(n) {
  try {
    return new URL(n.baseUrl)
  } catch (r) {
    return console.error(`Invalid API target base URL for ${n.name}:`, r), null
  }
}

function ci(n) {
  const r = _t();
  return Je(r)
}

function Xe(n) {
  return n === "/" ? n : n.replace(/\/+$/, "") || "/"
}

function fi(n, r) {
  const e = Xe(n),
    a = r.startsWith("/") ? r : `/${r}`;
  return e === "/" || e === "" ? a : a === "/" ? `${e}/` : `${e}${a}`
}

function di(n, r) {
  const e = Xe(r.pathname || "/"),
    a = n.pathname || "/";
  if (e === "/" || e === "") return a.startsWith("/") ? a : `/${a}`;
  if (!a.startsWith(e)) return a;
  const l = a.slice(e.length);
  return l ? l.startsWith("/") ? l : `/${l}` : "/"
}

function hi(n, r) {
  const e = Je(r);
  if (!e || n.origin !== e.origin) return !1;
  const a = Xe(e.pathname || "/");
  if (a === "/" || a === "") return !0;
  const l = Xe(n.pathname || "/");
  return l === a || l.startsWith(`${a}/`)
}

function Tr(n) {
  for (const r of nt.targets)
    if (hi(n, r)) return r;
  return null
}

function pi(n) {
  return Tr(n)?.requiresProxy === !0
}

function mi(n) {
  const r = n.pathname.toLowerCase();
  if (r.includes("/album/") || r.includes("/artist/") || r.includes("/playlist/")) return !0;
  if (r.includes("/search/")) {
    const e = n.searchParams;
    if (e.has("a") || e.has("al") || e.has("p")) return !0
  }
  return !1
}

function Cr(n) {
  try {
    return new URL(n)
  } catch {
    const r = ci();
    if (!r) return null;
    try {
      return new URL(n, r)
    } catch {
      return null
    }
  }
}

function er(n) {
  const r = Cr(n);
  return !r || !pi(r) ? n : `${nt.proxyUrl}?url=${encodeURIComponent(r.toString())}`
}

function tr(n) {
  if (!n || typeof n != "object") return !1;
  const r = n,
    e = typeof r.status == "number" ? r.status : void 0,
    a = typeof r.subStatus == "number" ? r.subStatus : void 0,
    l = typeof r.userMessage == "string" ? r.userMessage : void 0,
    t = typeof r.detail == "string" ? r.detail : void 0;
  if (typeof e == "number" && e >= 400 || typeof a == "number" && a >= 400) return !0;
  const i = /(token|invalid|unauthorized)/i;
  return !!(l && i.test(l) || t && i.test(t))
}

function gi(n) {
  return Array.isArray(n) ? n.some(r => tr(r)) : n && typeof n == "object" ? tr(n) : !1
}
async function yi(n) {
  if (!n.ok) return !1;
  const r = n.headers.get("content-type");
  if (!r || !r.toLowerCase().includes("application/json")) return !1;
  try {
    const e = await n.clone().json();
    return gi(e)
  } catch {
    return !1
  }
}
async function bi(n, r) {
  const e = Cr(n);
  if (!e) throw new Error(`Unable to resolve URL: ${n}`);
  const a = Tr(e);
  if (!a) return fetch(er(e.toString()), {
    ...r
  });
  const l = Ut(),
    t = [];
  if (mi(e)) {
    const d = _t();
    t.some(g => g.name === d.name) || t.push(d)
  }
  const i = vt();
  t.some(d => d.name === i.name) || t.push(i);
  for (const d of l) t.some(g => g.name === d.name) || t.push(d);
  let s = t.filter((d, g, f) => f.findIndex(m => m.name === d.name) === g);
  s.length === 0 && (s = [_t()]);
  const u = Je(a);
  if (!u) throw new Error("Invalid origin target configuration.");
  const h = Math.max(3, s.length);
  let v = null,
    b = null,
    y = null;
  for (let d = 0; d < h; d += 1) {
    const g = s[d % s.length],
      f = Je(g);
    if (!f) continue;
    const m = di(e, u),
      p = fi(f.pathname || "/", m),
      w = new URL(p + e.search + e.hash, f.origin),
      A = er(w.toString());
    try {
      const x = await fetch(A, {
        ...r
      });
      if (x.ok) {
        if (!await yi(x)) return x;
        y = x;
        continue
      }
      b = x
    } catch (x) {
      if (v = x, x instanceof TypeError && x.message.includes("CORS")) continue
    }
  }
  if (y) return y;
  if (b) return b;
  throw v ? v instanceof TypeError && typeof v.message == "string" && v.message.includes("CORS") ? new Error("CORS error detected. Please configure a proxy in src/lib/config.ts or enable CORS on your backend.") : v : new Error("All API targets failed without response.")
}
const wi = nt.baseUrl,
  Ne = "Too Many Requests. Please wait a moment and try again.",
  vi = "DASH_MANIFEST_UNAVAILABLE";
class _i {
  baseUrl;
  metadataQueue = Promise.resolve();
  constructor(r = wi) {
    this.baseUrl = r
  }
  resolveRegionalBase(r = "auto") {
    try {
      const e = ui(r);
      if (e?.baseUrl) return e.baseUrl
    } catch (e) {
      console.warn("Falling back to default API base URL for region selection", {
        region: r,
        error: e
      })
    }
    return this.baseUrl
  }
  buildRegionalUrl(r, e = "auto") {
    const a = this.resolveRegionalBase(e).replace(/\/+$/, ""),
      l = r.startsWith("/") ? r : `/${r}`;
    return `${a}${l}`
  }
  normalizeSearchResponse(r, e) {
    const a = this.findSearchSection(r, e, new Set);
    return this.buildSearchResponse(a)
  }
  buildSearchResponse(r) {
    const e = r?.items,
      a = Array.isArray(e) ? e : [],
      l = typeof r?.limit == "number" ? r.limit : a.length,
      t = typeof r?.offset == "number" ? r.offset : 0,
      i = typeof r?.totalNumberOfItems == "number" ? r.totalNumberOfItems : a.length;
    return {
      items: a,
      limit: l,
      offset: t,
      totalNumberOfItems: i
    }
  }
  findSearchSection(r, e, a) {
    if (!r) return;
    if (Array.isArray(r)) {
      for (const t of r) {
        const i = this.findSearchSection(t, e, a);
        if (i) return i
      }
      return
    }
    if (typeof r != "object") return;
    const l = r;
    if (!a.has(l)) {
      if (a.add(l), !Array.isArray(r) && "items" in l && Array.isArray(l.items)) return l;
      if (e in l) {
        const t = l[e],
          i = this.findSearchSection(t, e, a);
        if (i) return i
      }
      for (const t of Object.values(l)) {
        const i = this.findSearchSection(t, e, a);
        if (i) return i
      }
    }
  }
  prepareTrack(r) {
    let e = r;
    !r.artist && Array.isArray(r.artists) && r.artists.length > 0 && (e = {
      ...r,
      artist: r.artists[0]
    });
    const a = vr(e);
    return a && e.audioQuality !== a && (e = {
      ...e,
      audioQuality: a
    }), e
  }
  prepareAlbum(r) {
    return !r.artist && Array.isArray(r.artists) && r.artists.length > 0 ? {
      ...r,
      artist: r.artists[0]
    } : r
  }
  prepareArtist(r) {
    return !r.type && Array.isArray(r.artistTypes) && r.artistTypes.length > 0 ? {
      ...r,
      type: r.artistTypes[0]
    } : r
  }
  ensureNotRateLimited(r) {
    if (r.status === 429) throw new Error(Ne)
  }
  async delay(r) {
    await new Promise(e => setTimeout(e, r))
  }
  parseTrackLookup(r) {
    const e = Array.isArray(r) ? r : [r];
    let a, l, t;
    for (const i of e)
      if (!(!i || typeof i != "object")) {
        if (!a && "album" in i && "artist" in i && "duration" in i) {
          a = i;
          continue
        }
        if (!l && "manifest" in i) {
          l = i;
          continue
        }
        if (!t && "OriginalTrackUrl" in i) {
          const s = i.OriginalTrackUrl;
          typeof s == "string" && (t = s)
        }
      } if (!a || !l) throw new Error("Malformed track response");
    return {
      track: a,
      info: l,
      originalTrackUrl: t
    }
  }
  extractStreamUrlFromManifest(r) {
    try {
      const e = atob(r);
      try {
        const l = JSON.parse(e);
        if (l && Array.isArray(l.urls) && l.urls.length > 0) return l.urls[0] ?? null
      } catch (l) {
        console.debug("Manifest JSON parse failed, falling back to pattern match", l)
      }
      const a = e.match(/https?:\/\/[\w\-.~:?#[\]@!$&'()*+,;=%/]+/);
      return a ? a[0] : null
    } catch (e) {
      return console.error("Failed to decode manifest:", e), null
    }
  }
  isDashManifestPayload(r, e) {
    const a = r.trim();
    return a ? e && e.toLowerCase().includes("xml") ? a.startsWith("<") : /^<\?xml/i.test(a) || /^<MPD[\s>]/i.test(a) || /^<\w+/i.test(a) : !1
  }
  parseJsonSafely(r) {
    try {
      return JSON.parse(r)
    } catch (e) {
      return console.debug("Failed to parse JSON payload from DASH response", e), null
    }
  }
  createDashUnavailableError(r) {
    const e = new Error(r);
    return e.code = vi, e
  }
  isXmlContentType(r) {
    return r ? /(application|text)\/(?:.+\+)?xml/i.test(r) || /dash\+xml|mpd/i.test(r) : !1
  }
  isJsonContentType(r) {
    return r ? /json/i.test(r) || /application\/vnd\.tidal\.bts/i.test(r) : !1
  }
  extractUrlsFromDashJsonPayload(r) {
    if (!r || typeof r != "object") return [];
    const e = r.urls;
    return Array.isArray(e) ? e.map(a => typeof a == "string" ? a.trim() : "").filter(a => a.length > 0) : []
  }
  isHiResQuality(r) {
    return String(r).toUpperCase() === "HI_RES_LOSSLESS"
  }
  async resolveHiResStreamFromDash(r) {
    const e = await this.getDashManifest(r, "HI_RES_LOSSLESS");
    if (e.kind === "flac") {
      const a = e.urls.find(l => typeof l == "string" && l.length > 0);
      if (a) return a;
      throw new Error("DASH manifest did not include any FLAC URLs.")
    }
    throw new Error("Hi-res DASH manifest does not expose a direct FLAC URL.")
  }
  async fetch(r, e) {
    return bi(r, e)
  }
  async searchTracks(r, e = "auto") {
    const a = await this.fetch(this.buildRegionalUrl(`/search/?s=${encodeURIComponent(r)}`, e));
    if (this.ensureNotRateLimited(a), !a.ok) throw new Error("Failed to search tracks");
    const l = await a.json(),
      t = this.normalizeSearchResponse(l, "tracks");
    return {
      ...t,
      items: t.items.map(i => this.prepareTrack(i))
    }
  }
  async searchArtists(r, e = "auto") {
    const a = await this.fetch(this.buildRegionalUrl(`/search/?a=${encodeURIComponent(r)}`, e));
    if (this.ensureNotRateLimited(a), !a.ok) throw new Error("Failed to search artists");
    const l = await a.json(),
      t = this.normalizeSearchResponse(l, "artists");
    return {
      ...t,
      items: t.items.map(i => this.prepareArtist(i))
    }
  }
  async searchAlbums(r, e = "auto") {
    const a = await this.fetch(this.buildRegionalUrl(`/search/?al=${encodeURIComponent(r)}`, e));
    if (this.ensureNotRateLimited(a), !a.ok) throw new Error("Failed to search albums");
    const l = await a.json(),
      t = this.normalizeSearchResponse(l, "albums");
    return {
      ...t,
      items: t.items.map(i => this.prepareAlbum(i))
    }
  }
  async searchPlaylists(r, e = "auto") {
    const a = await this.fetch(this.buildRegionalUrl(`/search/?p=${encodeURIComponent(r)}`, e));
    if (this.ensureNotRateLimited(a), !a.ok) throw new Error("Failed to search playlists");
    const l = await a.json();
    return this.normalizeSearchResponse(l, "playlists")
  }
  async getTrack(r, e = "LOSSLESS") {
    const a = `${this.baseUrl}/track/?id=${r}&quality=${e}`;
    let l = null;
    for (let t = 1; t <= 3; t += 1) {
      const i = await this.fetch(a);
      if (this.ensureNotRateLimited(i), i.ok) {
        const d = await i.json();
        return this.parseTrackLookup(d)
      }
      let s, u, h;
      try {
        const d = await i.json();
        typeof d?.detail == "string" && (s = d.detail), typeof d?.userMessage == "string" && (u = d.userMessage, s || (s = d.userMessage)), typeof d?.subStatus == "number" && (h = d.subStatus)
      } catch {}
      const v = i.status === 401 && h === 11002,
        b = s ?? `Failed to get track (status ${i.status})`;
      l = new Error(v ? u ?? b : b);
      const y = v || (s ? /quality not found/i.test(s) : i.status >= 500);
      if (t === 3 || !y) throw l;
      await this.delay(200 * t)
    }
    throw l ?? new Error("Failed to get track")
  }
  async getDashManifest(r, e = "HI_RES_LOSSLESS") {
    const a = `${this.baseUrl}/dash/?id=${r}&quality=${e}`;
    let l = null;
    for (let t = 1; t <= 3; t += 1) {
      const i = await this.fetch(a);
      this.ensureNotRateLimited(i);
      const s = i.headers.get("content-type");
      if (i.ok) {
        const u = await i.text();
        if (this.isXmlContentType(s) || this.isDashManifestPayload(u, s)) return {
          kind: "dash",
          manifest: u,
          contentType: s
        };
        if (this.isJsonContentType(s) || u.trim().startsWith("{")) {
          const h = this.parseJsonSafely(u);
          if (h && typeof h == "object" && h.detail && typeof h.detail == "string" && h.detail.toLowerCase() === "not found") l = this.createDashUnavailableError("Dash manifest not found for track");
          else {
            const v = this.extractUrlsFromDashJsonPayload(h);
            return {
              kind: "flac",
              manifestText: u,
              urls: v,
              contentType: s
            }
          }
        } else {
          if (this.isDashManifestPayload(u, s)) return {
            kind: "dash",
            manifest: u,
            contentType: s
          };
          const h = this.parseJsonSafely(u),
            v = this.extractUrlsFromDashJsonPayload(h);
          if (v.length > 0) return {
            kind: "flac",
            manifestText: u,
            urls: v,
            contentType: s
          };
          l = this.createDashUnavailableError("Received unexpected payload from dash endpoint.")
        }
      } else if (i.status === 404) {
        let u;
        try {
          const h = await i.clone().json();
          h && typeof h.detail == "string" && (u = h.detail)
        } catch {}
        u && u.toLowerCase() === "not found" ? l = this.createDashUnavailableError("Dash manifest not found for track") : l = new Error(`Failed to load dash manifest (status ${i.status})`)
      } else l = new Error(`Failed to load dash manifest (status ${i.status})`);
      t < 3 && await this.delay(200 * t)
    }
    throw l ?? this.createDashUnavailableError("Unable to load dash manifest for track")
  }
  async getSong(r, e = "LOSSLESS") {
    const a = await this.fetch(`${this.baseUrl}/song/?q=${encodeURIComponent(r)}&quality=${e}`);
    if (this.ensureNotRateLimited(a), !a.ok) throw new Error("Failed to get song");
    return a.json()
  }
  async getAlbum(r) {
    const e = await this.fetch(`${this.baseUrl}/album/?id=${r}`);
    if (this.ensureNotRateLimited(e), !e.ok) throw new Error("Failed to get album");
    const a = await e.json(),
      l = Array.isArray(a) ? a : [a];
    let t, i;
    for (const u of l)
      if (!(!u || typeof u != "object")) {
        if (!t && "title" in u && "id" in u && "cover" in u) {
          t = this.prepareAlbum(u);
          continue
        }!i && "items" in u && Array.isArray(u.items) && (i = u)
      } if (!t) throw new Error("Album not found");
    const s = [];
    if (i?.items)
      for (const u of i.items) {
        if (!u || typeof u != "object") continue;
        let h;
        if ("item" in u && u.item && typeof u.item == "object" ? h = u.item : h = u, !h) continue;
        const v = h.album ? h : {
          ...h,
          album: t
        };
        s.push(this.prepareTrack(v))
      }
    return {
      album: t,
      tracks: s
    }
  }
  async getPlaylist(r) {
    const e = await this.fetch(`${this.baseUrl}/playlist/?id=${r}`);
    if (this.ensureNotRateLimited(e), !e.ok) throw new Error("Failed to get playlist");
    const a = await e.json();
    return {
      playlist: Array.isArray(a) ? a[0] : a,
      items: Array.isArray(a) && a[1] ? a[1].items : []
    }
  }
  async getArtist(r) {
    const e = await this.fetch(`${this.baseUrl}/artist/?f=${r}`);
    if (this.ensureNotRateLimited(e), !e.ok) throw new Error("Failed to get artist");
    const a = await e.json(),
      l = Array.isArray(a) ? a : [a],
      t = new Set,
      i = new Map,
      s = new Map;
    let u;
    const h = k => {
        if (!k || typeof k != "object") return !1;
        const E = k,
          I = E.album;
        return typeof E.id == "number" && typeof E.title == "string" && typeof E.duration == "number" && "trackNumber" in E && I !== void 0 && I !== null && typeof I == "object"
      },
      v = k => {
        if (!k || typeof k != "object") return !1;
        const E = k;
        return typeof E.id == "number" && typeof E.title == "string" && "cover" in E
      },
      b = k => {
        if (!k || typeof k != "object") return !1;
        const E = k;
        return typeof E.id == "number" && typeof E.name == "string" && typeof E.type == "string" && ("artistRoles" in E || "artistTypes" in E || "url" in E)
      },
      y = k => {
        if (!k) return;
        const E = this.prepareArtist(k);
        (!u || u.id === E.id) && (u = E)
      },
      d = k => {
        if (!k || typeof k.id != "number") return;
        const E = this.prepareAlbum({
          ...k
        });
        i.set(E.id, E), y(E.artist ?? E.artists?.[0])
      },
      g = k => {
        if (!k || typeof k.id != "number") return;
        const E = this.prepareTrack({
          ...k
        });
        if (!E.album) return;
        d(E.album);
        const I = i.get(E.album.id);
        I && (E.album = I), s.set(E.id, E), y(E.artist)
      },
      f = k => {
        if (Array.isArray(k))
          for (const E of k) {
            if (!E || typeof E != "object") continue;
            const I = "item" in E ? E.item : E;
            if (v(I)) {
              d(I);
              const O = i.get(I.id);
              y(O?.artist ?? O?.artists?.[0]);
              continue
            }
            if (h(I)) {
              g(I);
              continue
            }
            m(I)
          }
      },
      m = k => {
        if (!k) return;
        if (Array.isArray(k)) {
          const I = k.filter(h);
          if (I.length > 0) {
            for (const O of I) g(O);
            return
          }
          for (const O of k) m(O);
          return
        }
        if (typeof k != "object") return;
        const E = k;
        if (!t.has(E)) {
          if (t.add(E), b(E) && y(E), "modules" in E && Array.isArray(E.modules))
            for (const I of E.modules) m(I);
          if ("pagedList" in E && E.pagedList && typeof E.pagedList == "object") {
            const I = E.pagedList;
            f(I.items)
          }
          "items" in E && Array.isArray(E.items) && f(E.items), "rows" in E && Array.isArray(E.rows) && f(E.rows), "listItems" in E && Array.isArray(E.listItems) && f(E.listItems);
          for (const I of Object.values(E)) m(I)
        }
      };
    for (const k of l) m(k);
    if (!u) {
      const k = Array.from(s.values()).map(I => I.artist ?? I.artists?.[0]).find(Boolean),
        E = Array.from(i.values()).map(I => I.artist ?? I.artists?.[0]).find(Boolean);
      y(k ?? E)
    }
    if (!u) try {
      const k = await this.fetch(`${this.baseUrl}/artist/?id=${r}`);
      if (this.ensureNotRateLimited(k), k.ok) {
        const E = await k.json(),
          I = Array.isArray(E) ? E[0] : E;
        I && typeof I == "object" && y(I)
      }
    } catch (k) {
      console.warn("Failed to fetch base artist details:", k)
    }
    if (!u) throw new Error("Artist not found");
    const p = Array.from(i.values()).map(k => !k.artist && u ? {
        ...k,
        artist: u
      } : k),
      w = new Map(p.map(k => [k.id, k])),
      A = Array.from(s.values()).map(k => {
        const E = k.artist ?? u,
          I = k.album,
          O = I ? w.get(I.id) ?? (u && !I.artist ? {
            ...I,
            artist: u
          } : I) : void 0;
        return {
          ...k,
          artist: E ?? k.artist,
          album: O ?? I
        }
      }),
      x = k => {
        if (!k) return Number.NaN;
        const E = Date.parse(k);
        return Number.isFinite(E) ? E : Number.NaN
      },
      C = p.sort((k, E) => {
        const I = x(k.releaseDate),
          O = x(E.releaseDate);
        return Number.isNaN(I) && Number.isNaN(O) ? (E.popularity ?? 0) - (k.popularity ?? 0) : Number.isNaN(I) ? 1 : Number.isNaN(O) ? -1 : O - I
      }),
      R = A.sort((k, E) => (E.popularity ?? 0) - (k.popularity ?? 0)).slice(0, 100);
    return {
      ...u,
      albums: C,
      tracks: R
    }
  }
  async getCover(r, e) {
    let a = `${this.baseUrl}/cover/?`;
    r && (a += `id=${r}`), e && (a += `q=${encodeURIComponent(e)}`);
    const l = await this.fetch(a);
    if (this.ensureNotRateLimited(l), !l.ok) throw new Error("Failed to get cover");
    return l.json()
  }
  async getLyrics(r) {
    const e = await this.fetch(`${this.baseUrl}/lyrics/?id=${r}`);
    if (this.ensureNotRateLimited(e), !e.ok) throw new Error("Failed to get lyrics");
    const a = await e.json();
    return Array.isArray(a) ? a[0] : a
  }
  async getStreamUrl(r, e = "LOSSLESS") {
    if (this.isHiResQuality(e)) try {
      return await this.resolveHiResStreamFromDash(r)
    } catch (l) {
      console.warn("Failed to resolve hi-res stream via DASH manifest", l), e = "LOSSLESS"
    }
    let a = null;
    for (let l = 1; l <= 3; l += 1) {
      try {
        const t = await this.getTrack(r, e);
        if (t.originalTrackUrl) return t.originalTrackUrl;
        const i = this.extractStreamUrlFromManifest(t.info.manifest);
        if (i) return i;
        a = new Error("Unable to resolve stream URL for track")
      } catch (t) {
        a = t instanceof Error ? t : new Error(String(t))
      }
      l < 3 && await this.delay(200 * l)
    }
    throw a ?? new Error("Unable to resolve stream URL for track")
  }
  async embedMetadataIntoBlob(r, e, a, l, t, i, s) {
    const u = this.metadataQueue.then(() => this.runMetadataEmbedding(r, e, a, l ?? void 0, t, i, s));
    this.metadataQueue = u.then(() => {}, () => {});
    try {
      return await u
    } catch (h) {
      return console.warn("Metadata embedding failed", h), null
    }
  }
  inferExtensionFromFilename(r) {
    const e = /\.([a-z0-9]+)(?:\?.*)?$/i.exec(r);
    return e ? e[1].toLowerCase() : null
  }
  inferExtensionFromMime(r) {
    if (!r) return null;
    switch (r.split(";")[0]?.trim().toLowerCase()) {
      case "audio/flac":
        return "flac";
      case "audio/x-flac":
        return "flac";
      case "audio/mpeg":
        return "mp3";
      case "audio/mp3":
        return "mp3";
      case "audio/mp4":
      case "audio/aac":
      case "audio/x-m4a":
        return "m4a";
      case "audio/wav":
      case "audio/x-wav":
        return "wav";
      case "audio/ogg":
        return "ogg";
      default:
        return null
    }
  }
  inferMimeFromExtension(r, e) {
    switch (r) {
      case "flac":
        return "audio/flac";
      case "mp3":
        return "audio/mpeg";
      case "m4a":
      case "aac":
        return "audio/mp4";
      case "wav":
        return "audio/wav";
      case "ogg":
        return "audio/ogg";
      default:
        return e
    }
  }
  validateImageData(r) {
    return !r || r.length < 4 ? !1 : r[0] === 255 && r[1] === 216 && r[2] === 255 || r[0] === 137 && r[1] === 80 && r[2] === 78 && r[3] === 71 || r.length >= 12 && r[0] === 82 && r[1] === 73 && r[2] === 70 && r[3] === 70 && r[8] === 87 && r[9] === 69 && r[10] === 66 && r[11] === 80
  }
  detectImageFormat(r) {
    return !r || r.length < 4 ? null : r[0] === 255 && r[1] === 216 && r[2] === 255 ? {
      extension: "jpg",
      mimeType: "image/jpeg"
    } : r[0] === 137 && r[1] === 80 && r[2] === 78 && r[3] === 71 ? {
      extension: "png",
      mimeType: "image/png"
    } : r.length >= 12 && r[0] === 82 && r[1] === 73 && r[2] === 70 && r[3] === 70 && r[8] === 87 && r[9] === 69 && r[10] === 66 && r[11] === 80 ? {
      extension: "webp",
      mimeType: "image/webp"
    } : null
  }
  buildMetadataEntries(r) {
    const e = [],
      {
        track: a
      } = r,
      l = a.album,
      t = a.artist?.name ?? a.artists?.[0]?.name,
      i = l?.artist?.name ?? (l?.artists && l.artists.length > 0 ? l.artists[0]?.name : void 0) ?? t;
    a.title && e.push(["title", a.title]), t && e.push(["artist", t]), i && e.push(["album_artist", i]), l?.title && e.push(["album", l.title]);
    const s = Number(a.trackNumber),
      u = Number(l?.numberOfTracks);
    if (Number.isFinite(s) && s > 0) {
      const y = Number.isFinite(u) && u > 0 ? `${s}/${u}` : `${s}`;
      e.push(["track", y])
    }
    const h = Number(a.volumeNumber),
      v = Number(l?.numberOfVolumes);
    if (Number.isFinite(h) && h > 0) {
      const y = Number.isFinite(v) && v > 0 ? `${h}/${v}` : `${h}`;
      e.push(["disc", y])
    }
    const b = l?.releaseDate ?? a.streamStartDate;
    if (b) {
      const y = /^(\d{4})/.exec(b);
      y?.[1] && (e.push(["date", y[1]]), e.push(["year", y[1]]))
    }
    return a.isrc && e.push(["ISRC", a.isrc]), l?.copyright && e.push(["copyright", l.copyright]), e.push(["comment", "Downloaded from music.binimum.org/tidal.squid.wtf"]), e
  }
  async runMetadataEmbedding(r, e, a, l, t, i, s) {
    if (typeof window > "u") return null;
    const u = this.inferExtensionFromMime(l),
      h = this.inferExtensionFromFilename(a),
      v = u ?? h;
    if (!v || !new Set(["flac", "mp3", "m4a", "aac", "wav", "ogg"]).has(v)) return null;
    const d = s && new Set(["m4a", "aac", "mp4"]).has(v),
      g = d ? "mp3" : v,
      f = i === "LOW" ? "96k" : "320k";
    let m = null;
    try {
      m = await Tn(() => import("./C0b1-sF3.js"), __vite__mapDeps([0, 1, 2]), import.meta.url)
    } catch (E) {
      return console.warn("Unable to load FFmpeg client module", E), t?.onFfmpegError?.(E), null
    }
    if (!m.isFFmpegSupported()) return null;
    if (t?.onFfmpegCountdown) try {
      const E = await m.estimateFfmpegDownloadSize?.();
      t.onFfmpegCountdown({
        totalBytes: E,
        autoTriggered: t.ffmpegAutoTriggered ?? !1
      })
    } catch (E) {
      console.debug("Failed to estimate FFmpeg size", E), t.onFfmpegCountdown({
        totalBytes: void 0,
        autoTriggered: t.ffmpegAutoTriggered ?? !1
      })
    }
    t?.onFfmpegStart?.();
    let p, w = null;
    try {
      const E = {
        signal: t?.signal,
        onProgress: ({
          receivedBytes: I,
          totalBytes: O
        }) => {
          O && O > 0 ? t?.onFfmpegProgress?.(Math.max(0, Math.min(1, I / O))) : I > 0 && t?.onFfmpegProgress?.(0)
        }
      };
      p = await m.getFFmpeg(E), w = ({
        progress: I
      }) => {
        t?.onProgress && I >= 0 && t.onProgress({
          stage: "embedding",
          progress: Math.min(1, I)
        })
      }, p.on("progress", w), t?.onFfmpegProgress?.(1), t?.onFfmpegComplete?.()
    } catch (E) {
      throw t?.onFfmpegError?.(E), E
    }
    const A = typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2,10)}`,
      x = `source-${A}.${v}`,
      C = `output-${A}.${g}`;
    let R = !1,
      k = "jpg";
    try {
      t?.onProgress && t.onProgress({
        stage: "embedding",
        progress: 0
      });
      const E = await r.arrayBuffer(),
        I = new Uint8Array(E);
      await p.writeFile(x, I);
      const O = e.track.album?.cover;
      if (O) {
        const Y = ["1280", "640", "320"];
        let U = !1;
        for (const F of Y) {
          if (U) break;
          const J = this.getCoverUrl(O, F),
            Q = [{
              name: "with-headers",
              options: {
                method: "GET",
                headers: {
                  Accept: "image/jpeg,image/jpg,image/png,image/*",
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
                },
                signal: AbortSignal.timeout(1e4)
              }
            }, {
              name: "simple",
              options: {
                method: "GET",
                signal: AbortSignal.timeout(1e4)
              }
            }];
          for (const G of Q) {
            if (U) break;
            try {
              const ie = await fetch(J, G.options);
              if (!ie.ok) continue;
              const fe = ie.headers.get("Content-Type"),
                te = ie.headers.get("Content-Length");
              if (te && parseInt(te, 10) === 0 || fe && !fe.startsWith("image/")) continue;
              let re;
              try {
                re = await ie.arrayBuffer()
              } catch {
                continue
              }
              if (!re || re.byteLength === 0) continue;
              const ue = new Uint8Array(re),
                le = this.detectImageFormat(ue);
              if (!le) continue;
              k = le.extension;
              const he = `cover-${A}.${k}`;
              await p.writeFile(he, ue), R = !0, U = !0;
              break
            } catch {}
          }
        }
      }
      const H = ["-i", x];
      if (R) {
        const Y = `cover-${A}.${k}`;
        H.push("-i", Y)
      }
      R ? (H.push("-map", "0:a"), H.push("-map", "1")) : H.push("-map", "0:a"), d ? (H.push("-codec:a", "libmp3lame"), H.push("-b:a", f)) : H.push("-codec", "copy");
      for (const [Y, U] of this.buildMetadataEntries(e)) H.push("-metadata", `${Y}=${U}`);
      R && (H.push("-metadata:s:v", "title=Album cover"), H.push("-metadata:s:v", "comment=Cover (front)"), H.push("-disposition:v", "attached_pic")), d && (H.push("-id3v2_version", "3"), H.push("-write_xing", "0")), H.push(C);
      const T = 18e4,
        D = p.exec(H),
        c = new Promise((Y, U) => {
          setTimeout(() => {
            U(new Error('FFmpeg execution timeout - processing took longer than 3 minutes. Try using "Download covers separately" option instead.'))
          }, T)
        });
      try {
        await Promise.race([D, c])
      } catch (Y) {
        const U = Y instanceof Error ? Y.message : String(Y);
        throw U.includes("timeout") ? new Error('FFmpeg timeout: Processing took too long. Enable "Download covers separately" option for FLAC files.') : U.includes("memory access out of bounds") || U.includes("RuntimeError") || U.includes("out of memory") ? new Error("FFmpeg memory error: File may be too large for browser processing. Try a smaller file or download without metadata embedding.") : Y
      }
      const N = await p.readFile(C);
      t?.onProgress && t.onProgress({
        stage: "embedding",
        progress: 1
      });
      let K;
      N instanceof Uint8Array ? K = N : typeof N == "string" ? K = new TextEncoder().encode(N) : K = new Uint8Array(N ?? new ArrayBuffer(0));
      const $ = new Uint8Array(K),
        ee = this.inferMimeFromExtension(g, l ?? (r.type && r.type.length > 0 ? r.type : void 0));
      return new Blob([$], {
        type: ee
      })
    } catch (E) {
      const I = E instanceof Error ? E.message : String(E);
      return I.includes("memory access out of bounds") || I.includes("RuntimeError") || I.includes("out of memory") || I.includes("memory error") ? t?.onFfmpegError?.(new Error("Memory error: File processed without metadata due to browser limitations")) : t?.onFfmpegError?.(E), null
    } finally {
      if (w && p && p.off("progress", w), p) {
        try {
          await p.deleteFile(x)
        } catch (E) {
          console.debug("Failed to delete FFmpeg input file", E)
        }
        try {
          await p.deleteFile(C)
        } catch (E) {
          console.debug("Failed to delete FFmpeg output file", E)
        }
        if (R) try {
          const E = `cover-${A}.${k}`;
          await p.deleteFile(E)
        } catch (E) {
          console.debug("Failed to delete FFmpeg cover file", E)
        }
      }
    }
  }
  async resolveTrackLookups(r, e) {
    const l = this.isHiResQuality(e) ? "LOSSLESS" : e,
      t = await this.getTrack(r, l);
    return {
      manifestLookup: t,
      metadataLookup: t,
      manifestQuality: l
    }
  }
  async getPreferredTrackMetadata(r, e = "LOSSLESS") {
    const {
      metadataLookup: a
    } = await this.resolveTrackLookups(r, e);
    return a
  }
  async fetchTrackBlob(r, e = "LOSSLESS", a, l) {
    try {
      const {
        manifestLookup: t,
        metadataLookup: i,
        manifestQuality: s
      } = await this.resolveTrackLookups(r, e);
      let u = i,
        h = null,
        v = null;
      if (v = t.originalTrackUrl || null, v) {
        if (h = await fetch(v, {
            signal: l?.signal
          }), h.status === 429) throw new Error(Ne);
        h.ok || (console.warn("OriginalTrackUrl download failed, falling back to manifest", {
          status: h.status
        }), h = null)
      }
      if (!h) {
        let w = t,
          A = this.extractStreamUrlFromManifest(w.info.manifest);
        if (!A && s !== "LOSSLESS") try {
          const x = await this.getTrack(r, "LOSSLESS"),
            C = this.extractStreamUrlFromManifest(x.info.manifest);
          C && (A = C, w = x)
        } catch (x) {
          console.warn("Failed to fetch lossless manifest for download fallback", x)
        }
        if (!A) throw new Error("Could not extract stream URL from manifest");
        if (v = A, h = await fetch(A, {
            signal: l?.signal
          }), h.status === 429) throw new Error(Ne);
        if (!h.ok) throw new Error("Failed to fetch audio stream");
        u = w
      }
      const b = Number(h.headers.get("Content-Length") ?? "0"),
        y = Number.isFinite(b) && b > 0 ? b : void 0;
      let d, g = 0;
      if (!h.body) d = await h.blob(), g = d.size, !y && g > 0 && l?.onProgress?.({
        stage: "downloading",
        receivedBytes: g,
        totalBytes: g
      });
      else {
        const w = h.body.getReader(),
          A = [];
        for (;;) {
          const {
            done: x,
            value: C
          } = await w.read();
          if (x) break;
          C && (g += C.byteLength, A.push(C), l?.onProgress?.({
            stage: "downloading",
            receivedBytes: g,
            totalBytes: y
          }))
        }
        d = new Blob(A, {
          type: h.headers.get("Content-Type") ?? "application/octet-stream"
        }), g === 0 && (g = d.size)
      }
      l?.onProgress?.({
        stage: "downloading",
        receivedBytes: g,
        totalBytes: y ?? d.size
      });
      const f = l?.convertAacToMp3 === !0 && (e === "HIGH" || e === "LOW");
      return {
        blob: await this.embedMetadataIntoBlob(d, u, a, h.headers.get("Content-Type"), l, e, f) ?? d,
        mimeType: h.headers.get("Content-Type") ?? void 0
      }
    } catch (t) {
      throw t instanceof DOMException && t.name === "AbortError" || t instanceof Error && t.message === Ne ? t : new Error("Download failed. The stream URL may require a proxy. Please try streaming instead.")
    }
  }
  async getTrackStreamUrl(r, e = "LOSSLESS") {
    this.isHiResQuality(e) && (e = "LOSSLESS");
    const a = await this.getTrack(r, e);
    if (a.originalTrackUrl) return a.originalTrackUrl;
    const l = this.extractStreamUrlFromManifest(a.info.manifest);
    if (!l) throw new Error("Could not resolve stream URL for track");
    return l
  }
  async downloadTrack(r, e = "LOSSLESS", a, l) {
    try {
      const {
        blob: t
      } = await this.fetchTrackBlob(r, e, a, l), i = URL.createObjectURL(t), s = document.createElement("a");
      if (s.href = i, s.download = a, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(i), l?.downloadCoverSeperately) try {
        const h = (await this.getPreferredTrackMetadata(r, e)).track.album?.cover;
        if (h) {
          console.log("[Cover Download] Fetching cover for separate download...");
          const v = ["1280", "640", "320"];
          let b = !1;
          for (const y of v) {
            if (b) break;
            const d = this.getCoverUrl(h, y);
            console.log(`[Cover Download] Attempting size ${y}:`, d);
            const g = [{
              name: "with-headers",
              options: {
                method: "GET",
                headers: {
                  Accept: "image/jpeg,image/jpg,image/png,image/*",
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
                },
                signal: AbortSignal.timeout(1e4)
              }
            }, {
              name: "simple",
              options: {
                method: "GET",
                signal: AbortSignal.timeout(1e4)
              }
            }];
            for (const f of g) {
              if (b) break;
              console.log(`[Cover Download] Trying strategy: ${f.name}`);
              try {
                const m = await fetch(d, f.options);
                if (console.log(`[Cover Download] Response status: ${m.status}, Content-Length: ${m.headers.get("Content-Length")}`), !m.ok) {
                  console.warn(`[Cover Download] Failed with status ${m.status} for size ${y}`);
                  continue
                }
                const p = m.headers.get("Content-Type"),
                  w = m.headers.get("Content-Length");
                if (w && parseInt(w, 10) === 0) {
                  console.warn(`[Cover Download] Content-Length is 0 for size ${y}`);
                  continue
                }
                if (p && !p.startsWith("image/")) {
                  console.warn(`[Cover Download] Invalid content type: ${p}`);
                  continue
                }
                const A = await m.arrayBuffer();
                if (!A || A.byteLength === 0) {
                  console.warn(`[Cover Download] Empty array buffer for size ${y}`);
                  continue
                }
                const x = new Uint8Array(A);
                if (console.log(`[Cover Download] Received ${x.length} bytes`), console.log("[Cover Download] First 16 bytes:", Array.from(x.slice(0, 16)).map(I => I.toString(16).padStart(2, "0")).join(" ")), !this.validateImageData(x)) {
                  console.warn(`[Cover Download] Invalid image data for size ${y}`);
                  continue
                }
                const C = this.detectImageFormat(x);
                if (!C) {
                  console.warn(`[Cover Download] Unknown image format for size ${y}`);
                  continue
                }
                const R = new Blob([x], {
                    type: C.mimeType
                  }),
                  k = URL.createObjectURL(R),
                  E = document.createElement("a");
                E.href = k, E.download = `cover.${C.extension}`, document.body.appendChild(E), E.click(), document.body.removeChild(E), URL.revokeObjectURL(k), b = !0, console.log(`[Cover Download] Successfully downloaded (${y}x${y}, format: ${C.extension}, strategy: ${f.name})`);
                break
              } catch (m) {
                console.warn(`[Cover Download] Failed at size ${y} with strategy ${f.name}:`, m)
              }
            }
          }
          b || console.warn("[Cover Download] All attempts failed")
        }
      } catch (u) {
        console.warn("Failed to download cover separately:", u)
      }
    } catch (t) {
      throw t instanceof DOMException && t.name === "AbortError" || (console.error("Download failed:", t), t instanceof Error && t.message === Ne) ? t : new Error("Download failed. The stream URL may require a proxy. Please try streaming instead.")
    }
  }
  formatDuration(r) {
    const e = Math.floor(r / 60),
      a = r % 60;
    return `${e}:${a.toString().padStart(2,"0")}`
  }
  getCoverUrl(r, e = "640") {
    return `https://resources.tidal.com/images/${r.replace(/-/g,"/")}/${e}x${e}.jpg`
  }
  getVideoCoverUrl(r, e = "640") {
    return `https://resources.tidal.com/videos/${r.replace(/-/g,"/")}/${e}x${e}.mp4`
  }
  getArtistPictureUrl(r, e = "750") {
    return `https://resources.tidal.com/images/${r.replace(/-/g,"/")}/${e}x${e}.jpg`
  }
}
const Te = new _i,
  ki = 4,
  kt = 5,
  Ir = {
    ffmpeg: {
      phase: "idle",
      countdownSeconds: kt,
      totalBytes: void 0,
      progress: 0,
      dismissible: !0,
      autoTriggered: !0,
      startedAt: void 0,
      updatedAt: void 0
    },
    tasks: []
  },
  de = xt(Ir),
  ve = new Map;
let Qe = null;

function Si(n) {
  return `${n}-${Date.now()}-${Math.random().toString(16).slice(2,8)}`
}

function dt(n) {
  return Number.isFinite(n ?? NaN) ? Math.max(0, Math.min(1, Number(n))) : 0
}

function _e() {
  Qe && (clearInterval(Qe), Qe = null)
}

function Ai() {
  _e(), Qe = setInterval(() => {
    de.update(n => {
      if (n.ffmpeg.phase !== "countdown") return _e(), n;
      const r = Math.max(0, n.ffmpeg.countdownSeconds - 1),
        e = r === 0 ? "loading" : "countdown";
      return {
        ...n,
        ffmpeg: {
          ...n.ffmpeg,
          phase: e,
          countdownSeconds: r,
          progress: 0,
          updatedAt: Date.now(),
          dismissible: e !== "loading"
        }
      }
    })
  }, 1e3)
}

function Ei(n) {
  de.update(r => {
    const e = r.tasks.findIndex(l => l.id === n.id),
      a = r.tasks.slice();
    return e >= 0 ? a[e] = {
      ...a[e],
      ...n,
      updatedAt: Date.now()
    } : a.unshift({
      ...n,
      updatedAt: Date.now()
    }), {
      ...r,
      tasks: a.slice(0, ki)
    }
  })
}

function Be(n, r) {
  de.update(e => {
    const a = e.tasks.findIndex(i => i.id === n);
    if (a === -1) return e;
    const l = e.tasks.slice(),
      t = r({
        ...l[a]
      });
    return l[a] = {
      ...t,
      updatedAt: Date.now()
    }, {
      ...e,
      tasks: l
    }
  })
}

function xi(n) {
  de.update(e => ({
    ...e,
    tasks: e.tasks.filter(a => a.id !== n)
  })), ve.get(n) && ve.delete(n)
}
const Gi = {
    subscribe: de.subscribe,
    reset() {
      _e(), de.set(Ir), ve.clear()
    },
    beginTrackDownload(n, r, e) {
      const a = Si("track"),
        l = new AbortController;
      return ve.set(a, l), Ei({
        id: a,
        trackId: n.id,
        title: n.title,
        subtitle: e?.subtitle ?? n.artist?.name ?? "Unknown artist",
        filename: r,
        status: "running",
        receivedBytes: 0,
        totalBytes: void 0,
        progress: 0,
        error: void 0,
        startedAt: Date.now(),
        updatedAt: Date.now(),
        cancellable: !0
      }), {
        taskId: a,
        controller: l
      }
    },
    updateTrackProgress(n, r, e) {
      Be(n, a => ({
        ...a,
        receivedBytes: r,
        totalBytes: e,
        progress: e ? dt(r / e) : a.progress
      }))
    },
    updateTrackStage(n, r) {
      Be(n, e => ({
        ...e,
        progress: dt(r)
      }))
    },
    completeTrackDownload(n) {
      ve.get(n) && ve.delete(n), Be(n, e => ({
        ...e,
        status: e.status === "cancelled" ? "cancelled" : "completed",
        progress: e.status === "cancelled" ? e.progress : 1,
        cancellable: !1
      }))
    },
    errorTrackDownload(n, r) {
      ve.get(n) && ve.delete(n), Be(n, a => ({
        ...a,
        status: "error",
        error: r instanceof Error ? r.message : typeof r == "string" ? r : "Download failed",
        cancellable: !1
      }))
    },
    cancelTrackDownload(n) {
      const r = ve.get(n);
      r && r.abort(), Be(n, e => ({
        ...e,
        status: "cancelled",
        error: void 0,
        cancellable: !1
      }))
    },
    dismissTrackTask(n) {
      xi(n)
    },
    startFfmpegCountdown(n, r) {
      const e = r?.autoTriggered ?? !0;
      de.set({
        ...dr(de),
        ffmpeg: {
          phase: e ? "countdown" : "loading",
          countdownSeconds: e ? kt : 0,
          totalBytes: n > 0 ? n : void 0,
          progress: 0,
          dismissible: e,
          autoTriggered: e,
          error: void 0,
          startedAt: Date.now(),
          updatedAt: Date.now()
        }
      }), e ? Ai() : _e()
    },
    skipFfmpegCountdown() {
      de.update(n => n.ffmpeg.phase !== "countdown" ? n : (_e(), {
        ...n,
        ffmpeg: {
          ...n.ffmpeg,
          phase: "loading",
          countdownSeconds: 0,
          progress: 0,
          dismissible: !1,
          updatedAt: Date.now()
        }
      }))
    },
    startFfmpegLoading() {
      _e(), de.update(n => ({
        ...n,
        ffmpeg: {
          ...n.ffmpeg,
          phase: "loading",
          countdownSeconds: 0,
          progress: 0,
          dismissible: !1,
          updatedAt: Date.now()
        }
      }))
    },
    updateFfmpegProgress(n) {
      de.update(r => ({
        ...r,
        ffmpeg: {
          ...r.ffmpeg,
          phase: "loading",
          progress: dt(n),
          dismissible: !1,
          updatedAt: Date.now()
        }
      }))
    },
    completeFfmpeg() {
      _e(), de.update(n => ({
        ...n,
        ffmpeg: {
          ...n.ffmpeg,
          phase: "ready",
          progress: 1,
          countdownSeconds: 0,
          dismissible: !0,
          updatedAt: Date.now()
        }
      }))
    },
    errorFfmpeg(n) {
      _e(), de.update(r => ({
        ...r,
        ffmpeg: {
          ...r.ffmpeg,
          phase: "error",
          progress: 0,
          dismissible: !0,
          error: n instanceof Error ? n.message : typeof n == "string" ? n : "Failed to load FFmpeg",
          updatedAt: Date.now()
        }
      }))
    },
    dismissFfmpeg() {
      _e(), de.update(n => ({
        ...n,
        ffmpeg: {
          phase: "idle",
          countdownSeconds: kt,
          totalBytes: void 0,
          progress: 0,
          dismissible: !0,
          autoTriggered: !0,
          error: void 0,
          startedAt: void 0,
          updatedAt: Date.now()
        }
      }))
    }
  },
  Qi = be(de, n => n.tasks.filter(r => r.status === "running"));
be(de, n => n.tasks.filter(r => r.status === "completed"));
be(de, n => n.tasks.filter(r => r.status === "error"));
const Vi = be(de, n => n.ffmpeg);
/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
const Ti = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
var Ci = wn("<svg><!><!></svg>");

function Rr(n, r) {
  const e = Ke(r, ["children", "$$slots", "$$events", "$$legacy"]),
    a = Ke(e, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  bn(r, !1);
  let l = xe(r, "name", 8, void 0),
    t = xe(r, "color", 8, "currentColor"),
    i = xe(r, "size", 8, 24),
    s = xe(r, "strokeWidth", 8, 2),
    u = xe(r, "absoluteStrokeWidth", 8, !1),
    h = xe(r, "iconNode", 24, () => []);
  const v = (...g) => g.filter((f, m, p) => !!f && p.indexOf(f) === m).join(" ");
  xn();
  var b = Ci();
  Ht(b, (g, f) => ({
    ...Ti,
    ...a,
    width: i(),
    height: i(),
    stroke: t(),
    "stroke-width": g,
    class: f
  }), [() => (Oe(u()), Oe(s()), Oe(i()), $t(() => u() ? Number(s()) * 24 / Number(i()) : s())), () => (Oe(l()), Oe(e), $t(() => v("lucide-icon", "lucide", l() ? `lucide-${l()}` : "", e.class)))]);
  var y = _n(b);
  Rn(y, 1, h, Cn, (g, f) => {
    var m = An(() => En(Ce(f), 2));
    let p = () => Ce(m)[0],
      w = () => Ce(m)[1];
    var A = Tt(),
      x = Ct(A);
    zn(x, p, !0, (C, R) => {
      Ht(C, () => ({
        ...w()
      }))
    }), Ye(g, A)
  });
  var d = kn(y);
  It(d, r, "default", {}), Sn(b), Ye(n, b), vn()
}

function Yi(n, r) {
  const e = Ke(r, ["children", "$$slots", "$$events", "$$legacy"]);
  /**
   * @license lucide-svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const a = [
    ["path", {
      d: "M12 15V3"
    }],
    ["path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }],
    ["path", {
      d: "m7 10 5 5 5-5"
    }]
  ];
  Rr(n, hr({
    name: "download"
  }, () => e, {
    get iconNode() {
      return a
    },
    children: (l, t) => {
      var i = Tt(),
        s = Ct(i);
      It(s, r, "default", {}), Ye(l, i)
    },
    $$slots: {
      default: !0
    }
  }))
}

function Ki(n, r) {
  const e = Ke(r, ["children", "$$slots", "$$events", "$$legacy"]);
  /**
   * @license lucide-svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const a = [
    ["path", {
      d: "M18 6 6 18"
    }],
    ["path", {
      d: "m6 6 12 12"
    }]
  ];
  Rr(n, hr({
    name: "x"
  }, () => e, {
    get iconNode() {
      return a
    },
    children: (l, t) => {
      var i = Tt(),
        s = Ct(i);
      It(s, r, "default", {}), Ye(l, i)
    },
    $$slots: {
      default: !0
    }
  }))
}
var He = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Ii(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}

function Ge(n) {
  throw new Error('Could not dynamically require "' + n + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var ht = {
  exports: {}
};
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
var rr;

function Ri() {
  return rr || (rr = 1, (function(n, r) {
    (function(e) {
      n.exports = e()
    })(function() {
      return (function e(a, l, t) {
        function i(h, v) {
          if (!l[h]) {
            if (!a[h]) {
              var b = typeof Ge == "function" && Ge;
              if (!v && b) return b(h, !0);
              if (s) return s(h, !0);
              var y = new Error("Cannot find module '" + h + "'");
              throw y.code = "MODULE_NOT_FOUND", y
            }
            var d = l[h] = {
              exports: {}
            };
            a[h][0].call(d.exports, function(g) {
              var f = a[h][1][g];
              return i(f || g)
            }, d, d.exports, e, a, l, t)
          }
          return l[h].exports
        }
        for (var s = typeof Ge == "function" && Ge, u = 0; u < t.length; u++) i(t[u]);
        return i
      })({
        1: [function(e, a, l) {
          var t = e("./utils"),
            i = e("./support"),
            s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          l.encode = function(u) {
            for (var h, v, b, y, d, g, f, m = [], p = 0, w = u.length, A = w, x = t.getTypeOf(u) !== "string"; p < u.length;) A = w - p, b = x ? (h = u[p++], v = p < w ? u[p++] : 0, p < w ? u[p++] : 0) : (h = u.charCodeAt(p++), v = p < w ? u.charCodeAt(p++) : 0, p < w ? u.charCodeAt(p++) : 0), y = h >> 2, d = (3 & h) << 4 | v >> 4, g = 1 < A ? (15 & v) << 2 | b >> 6 : 64, f = 2 < A ? 63 & b : 64, m.push(s.charAt(y) + s.charAt(d) + s.charAt(g) + s.charAt(f));
            return m.join("")
          }, l.decode = function(u) {
            var h, v, b, y, d, g, f = 0,
              m = 0,
              p = "data:";
            if (u.substr(0, p.length) === p) throw new Error("Invalid base64 input, it looks like a data url.");
            var w, A = 3 * (u = u.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
            if (u.charAt(u.length - 1) === s.charAt(64) && A--, u.charAt(u.length - 2) === s.charAt(64) && A--, A % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
            for (w = i.uint8array ? new Uint8Array(0 | A) : new Array(0 | A); f < u.length;) h = s.indexOf(u.charAt(f++)) << 2 | (y = s.indexOf(u.charAt(f++))) >> 4, v = (15 & y) << 4 | (d = s.indexOf(u.charAt(f++))) >> 2, b = (3 & d) << 6 | (g = s.indexOf(u.charAt(f++))), w[m++] = h, d !== 64 && (w[m++] = v), g !== 64 && (w[m++] = b);
            return w
          }
        }, {
          "./support": 30,
          "./utils": 32
        }],
        2: [function(e, a, l) {
          var t = e("./external"),
            i = e("./stream/DataWorker"),
            s = e("./stream/Crc32Probe"),
            u = e("./stream/DataLengthProbe");

          function h(v, b, y, d, g) {
            this.compressedSize = v, this.uncompressedSize = b, this.crc32 = y, this.compression = d, this.compressedContent = g
          }
          h.prototype = {
            getContentWorker: function() {
              var v = new i(t.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")),
                b = this;
              return v.on("end", function() {
                if (this.streamInfo.data_length !== b.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch")
              }), v
            },
            getCompressedWorker: function() {
              return new i(t.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression)
            }
          }, h.createWorkerFrom = function(v, b, y) {
            return v.pipe(new s).pipe(new u("uncompressedSize")).pipe(b.compressWorker(y)).pipe(new u("compressedSize")).withStreamInfo("compression", b)
          }, a.exports = h
        }, {
          "./external": 6,
          "./stream/Crc32Probe": 25,
          "./stream/DataLengthProbe": 26,
          "./stream/DataWorker": 27
        }],
        3: [function(e, a, l) {
          var t = e("./stream/GenericWorker");
          l.STORE = {
            magic: "\0\0",
            compressWorker: function() {
              return new t("STORE compression")
            },
            uncompressWorker: function() {
              return new t("STORE decompression")
            }
          }, l.DEFLATE = e("./flate")
        }, {
          "./flate": 7,
          "./stream/GenericWorker": 28
        }],
        4: [function(e, a, l) {
          var t = e("./utils"),
            i = (function() {
              for (var s, u = [], h = 0; h < 256; h++) {
                s = h;
                for (var v = 0; v < 8; v++) s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
                u[h] = s
              }
              return u
            })();
          a.exports = function(s, u) {
            return s !== void 0 && s.length ? t.getTypeOf(s) !== "string" ? (function(h, v, b, y) {
              var d = i,
                g = y + b;
              h ^= -1;
              for (var f = y; f < g; f++) h = h >>> 8 ^ d[255 & (h ^ v[f])];
              return -1 ^ h
            })(0 | u, s, s.length, 0) : (function(h, v, b, y) {
              var d = i,
                g = y + b;
              h ^= -1;
              for (var f = y; f < g; f++) h = h >>> 8 ^ d[255 & (h ^ v.charCodeAt(f))];
              return -1 ^ h
            })(0 | u, s, s.length, 0) : 0
          }
        }, {
          "./utils": 32
        }],
        5: [function(e, a, l) {
          l.base64 = !1, l.binary = !1, l.dir = !1, l.createFolders = !0, l.date = null, l.compression = null, l.compressionOptions = null, l.comment = null, l.unixPermissions = null, l.dosPermissions = null
        }, {}],
        6: [function(e, a, l) {
          var t = null;
          t = typeof Promise < "u" ? Promise : e("lie"), a.exports = {
            Promise: t
          }
        }, {
          lie: 37
        }],
        7: [function(e, a, l) {
          var t = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u",
            i = e("pako"),
            s = e("./utils"),
            u = e("./stream/GenericWorker"),
            h = t ? "uint8array" : "array";

          function v(b, y) {
            u.call(this, "FlateWorker/" + b), this._pako = null, this._pakoAction = b, this._pakoOptions = y, this.meta = {}
          }
          l.magic = "\b\0", s.inherits(v, u), v.prototype.processChunk = function(b) {
            this.meta = b.meta, this._pako === null && this._createPako(), this._pako.push(s.transformTo(h, b.data), !1)
          }, v.prototype.flush = function() {
            u.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0)
          }, v.prototype.cleanUp = function() {
            u.prototype.cleanUp.call(this), this._pako = null
          }, v.prototype._createPako = function() {
            this._pako = new i[this._pakoAction]({
              raw: !0,
              level: this._pakoOptions.level || -1
            });
            var b = this;
            this._pako.onData = function(y) {
              b.push({
                data: y,
                meta: b.meta
              })
            }
          }, l.compressWorker = function(b) {
            return new v("Deflate", b)
          }, l.uncompressWorker = function() {
            return new v("Inflate", {})
          }
        }, {
          "./stream/GenericWorker": 28,
          "./utils": 32,
          pako: 38
        }],
        8: [function(e, a, l) {
          function t(d, g) {
            var f, m = "";
            for (f = 0; f < g; f++) m += String.fromCharCode(255 & d), d >>>= 8;
            return m
          }

          function i(d, g, f, m, p, w) {
            var A, x, C = d.file,
              R = d.compression,
              k = w !== h.utf8encode,
              E = s.transformTo("string", w(C.name)),
              I = s.transformTo("string", h.utf8encode(C.name)),
              O = C.comment,
              H = s.transformTo("string", w(O)),
              T = s.transformTo("string", h.utf8encode(O)),
              D = I.length !== C.name.length,
              c = T.length !== O.length,
              N = "",
              K = "",
              $ = "",
              ee = C.dir,
              W = C.date,
              Y = {
                crc32: 0,
                compressedSize: 0,
                uncompressedSize: 0
              };
            g && !f || (Y.crc32 = d.crc32, Y.compressedSize = d.compressedSize, Y.uncompressedSize = d.uncompressedSize);
            var U = 0;
            g && (U |= 8), k || !D && !c || (U |= 2048);
            var F = 0,
              J = 0;
            ee && (F |= 16), p === "UNIX" ? (J = 798, F |= (function(G, ie) {
              var fe = G;
              return G || (fe = ie ? 16893 : 33204), (65535 & fe) << 16
            })(C.unixPermissions, ee)) : (J = 20, F |= (function(G) {
              return 63 & (G || 0)
            })(C.dosPermissions)), A = W.getUTCHours(), A <<= 6, A |= W.getUTCMinutes(), A <<= 5, A |= W.getUTCSeconds() / 2, x = W.getUTCFullYear() - 1980, x <<= 4, x |= W.getUTCMonth() + 1, x <<= 5, x |= W.getUTCDate(), D && (K = t(1, 1) + t(v(E), 4) + I, N += "up" + t(K.length, 2) + K), c && ($ = t(1, 1) + t(v(H), 4) + T, N += "uc" + t($.length, 2) + $);
            var Q = "";
            return Q += `
\0`, Q += t(U, 2), Q += R.magic, Q += t(A, 2), Q += t(x, 2), Q += t(Y.crc32, 4), Q += t(Y.compressedSize, 4), Q += t(Y.uncompressedSize, 4), Q += t(E.length, 2), Q += t(N.length, 2), {
              fileRecord: b.LOCAL_FILE_HEADER + Q + E + N,
              dirRecord: b.CENTRAL_FILE_HEADER + t(J, 2) + Q + t(H.length, 2) + "\0\0\0\0" + t(F, 4) + t(m, 4) + E + N + H
            }
          }
          var s = e("../utils"),
            u = e("../stream/GenericWorker"),
            h = e("../utf8"),
            v = e("../crc32"),
            b = e("../signature");

          function y(d, g, f, m) {
            u.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = g, this.zipPlatform = f, this.encodeFileName = m, this.streamFiles = d, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = []
          }
          s.inherits(y, u), y.prototype.push = function(d) {
            var g = d.meta.percent || 0,
              f = this.entriesCount,
              m = this._sources.length;
            this.accumulate ? this.contentBuffer.push(d) : (this.bytesWritten += d.data.length, u.prototype.push.call(this, {
              data: d.data,
              meta: {
                currentFile: this.currentFile,
                percent: f ? (g + 100 * (f - m - 1)) / f : 100
              }
            }))
          }, y.prototype.openedSource = function(d) {
            this.currentSourceOffset = this.bytesWritten, this.currentFile = d.file.name;
            var g = this.streamFiles && !d.file.dir;
            if (g) {
              var f = i(d, g, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
              this.push({
                data: f.fileRecord,
                meta: {
                  percent: 0
                }
              })
            } else this.accumulate = !0
          }, y.prototype.closedSource = function(d) {
            this.accumulate = !1;
            var g = this.streamFiles && !d.file.dir,
              f = i(d, g, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            if (this.dirRecords.push(f.dirRecord), g) this.push({
              data: (function(m) {
                return b.DATA_DESCRIPTOR + t(m.crc32, 4) + t(m.compressedSize, 4) + t(m.uncompressedSize, 4)
              })(d),
              meta: {
                percent: 100
              }
            });
            else
              for (this.push({
                  data: f.fileRecord,
                  meta: {
                    percent: 0
                  }
                }); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
            this.currentFile = null
          }, y.prototype.flush = function() {
            for (var d = this.bytesWritten, g = 0; g < this.dirRecords.length; g++) this.push({
              data: this.dirRecords[g],
              meta: {
                percent: 100
              }
            });
            var f = this.bytesWritten - d,
              m = (function(p, w, A, x, C) {
                var R = s.transformTo("string", C(x));
                return b.CENTRAL_DIRECTORY_END + "\0\0\0\0" + t(p, 2) + t(p, 2) + t(w, 4) + t(A, 4) + t(R.length, 2) + R
              })(this.dirRecords.length, f, d, this.zipComment, this.encodeFileName);
            this.push({
              data: m,
              meta: {
                percent: 100
              }
            })
          }, y.prototype.prepareNextSource = function() {
            this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume()
          }, y.prototype.registerPrevious = function(d) {
            this._sources.push(d);
            var g = this;
            return d.on("data", function(f) {
              g.processChunk(f)
            }), d.on("end", function() {
              g.closedSource(g.previous.streamInfo), g._sources.length ? g.prepareNextSource() : g.end()
            }), d.on("error", function(f) {
              g.error(f)
            }), this
          }, y.prototype.resume = function() {
            return !!u.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0))
          }, y.prototype.error = function(d) {
            var g = this._sources;
            if (!u.prototype.error.call(this, d)) return !1;
            for (var f = 0; f < g.length; f++) try {
              g[f].error(d)
            } catch {}
            return !0
          }, y.prototype.lock = function() {
            u.prototype.lock.call(this);
            for (var d = this._sources, g = 0; g < d.length; g++) d[g].lock()
          }, a.exports = y
        }, {
          "../crc32": 4,
          "../signature": 23,
          "../stream/GenericWorker": 28,
          "../utf8": 31,
          "../utils": 32
        }],
        9: [function(e, a, l) {
          var t = e("../compressions"),
            i = e("./ZipFileWorker");
          l.generateWorker = function(s, u, h) {
            var v = new i(u.streamFiles, h, u.platform, u.encodeFileName),
              b = 0;
            try {
              s.forEach(function(y, d) {
                b++;
                var g = (function(w, A) {
                    var x = w || A,
                      C = t[x];
                    if (!C) throw new Error(x + " is not a valid compression method !");
                    return C
                  })(d.options.compression, u.compression),
                  f = d.options.compressionOptions || u.compressionOptions || {},
                  m = d.dir,
                  p = d.date;
                d._compressWorker(g, f).withStreamInfo("file", {
                  name: y,
                  dir: m,
                  date: p,
                  comment: d.comment || "",
                  unixPermissions: d.unixPermissions,
                  dosPermissions: d.dosPermissions
                }).pipe(v)
              }), v.entriesCount = b
            } catch (y) {
              v.error(y)
            }
            return v
          }
        }, {
          "../compressions": 3,
          "./ZipFileWorker": 8
        }],
        10: [function(e, a, l) {
          function t() {
            if (!(this instanceof t)) return new t;
            if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
            this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function() {
              var i = new t;
              for (var s in this) typeof this[s] != "function" && (i[s] = this[s]);
              return i
            }
          }(t.prototype = e("./object")).loadAsync = e("./load"), t.support = e("./support"), t.defaults = e("./defaults"), t.version = "3.10.1", t.loadAsync = function(i, s) {
            return new t().loadAsync(i, s)
          }, t.external = e("./external"), a.exports = t
        }, {
          "./defaults": 5,
          "./external": 6,
          "./load": 11,
          "./object": 15,
          "./support": 30
        }],
        11: [function(e, a, l) {
          var t = e("./utils"),
            i = e("./external"),
            s = e("./utf8"),
            u = e("./zipEntries"),
            h = e("./stream/Crc32Probe"),
            v = e("./nodejsUtils");

          function b(y) {
            return new i.Promise(function(d, g) {
              var f = y.decompressed.getContentWorker().pipe(new h);
              f.on("error", function(m) {
                g(m)
              }).on("end", function() {
                f.streamInfo.crc32 !== y.decompressed.crc32 ? g(new Error("Corrupted zip : CRC32 mismatch")) : d()
              }).resume()
            })
          }
          a.exports = function(y, d) {
            var g = this;
            return d = t.extend(d || {}, {
              base64: !1,
              checkCRC32: !1,
              optimizedBinaryString: !1,
              createFolders: !1,
              decodeFileName: s.utf8decode
            }), v.isNode && v.isStream(y) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : t.prepareContent("the loaded zip file", y, !0, d.optimizedBinaryString, d.base64).then(function(f) {
              var m = new u(d);
              return m.load(f), m
            }).then(function(f) {
              var m = [i.Promise.resolve(f)],
                p = f.files;
              if (d.checkCRC32)
                for (var w = 0; w < p.length; w++) m.push(b(p[w]));
              return i.Promise.all(m)
            }).then(function(f) {
              for (var m = f.shift(), p = m.files, w = 0; w < p.length; w++) {
                var A = p[w],
                  x = A.fileNameStr,
                  C = t.resolve(A.fileNameStr);
                g.file(C, A.decompressed, {
                  binary: !0,
                  optimizedBinaryString: !0,
                  date: A.date,
                  dir: A.dir,
                  comment: A.fileCommentStr.length ? A.fileCommentStr : null,
                  unixPermissions: A.unixPermissions,
                  dosPermissions: A.dosPermissions,
                  createFolders: d.createFolders
                }), A.dir || (g.file(C).unsafeOriginalName = x)
              }
              return m.zipComment.length && (g.comment = m.zipComment), g
            })
          }
        }, {
          "./external": 6,
          "./nodejsUtils": 14,
          "./stream/Crc32Probe": 25,
          "./utf8": 31,
          "./utils": 32,
          "./zipEntries": 33
        }],
        12: [function(e, a, l) {
          var t = e("../utils"),
            i = e("../stream/GenericWorker");

          function s(u, h) {
            i.call(this, "Nodejs stream input adapter for " + u), this._upstreamEnded = !1, this._bindStream(h)
          }
          t.inherits(s, i), s.prototype._bindStream = function(u) {
            var h = this;
            (this._stream = u).pause(), u.on("data", function(v) {
              h.push({
                data: v,
                meta: {
                  percent: 0
                }
              })
            }).on("error", function(v) {
              h.isPaused ? this.generatedError = v : h.error(v)
            }).on("end", function() {
              h.isPaused ? h._upstreamEnded = !0 : h.end()
            })
          }, s.prototype.pause = function() {
            return !!i.prototype.pause.call(this) && (this._stream.pause(), !0)
          }, s.prototype.resume = function() {
            return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0)
          }, a.exports = s
        }, {
          "../stream/GenericWorker": 28,
          "../utils": 32
        }],
        13: [function(e, a, l) {
          var t = e("readable-stream").Readable;

          function i(s, u, h) {
            t.call(this, u), this._helper = s;
            var v = this;
            s.on("data", function(b, y) {
              v.push(b) || v._helper.pause(), h && h(y)
            }).on("error", function(b) {
              v.emit("error", b)
            }).on("end", function() {
              v.push(null)
            })
          }
          e("../utils").inherits(i, t), i.prototype._read = function() {
            this._helper.resume()
          }, a.exports = i
        }, {
          "../utils": 32,
          "readable-stream": 16
        }],
        14: [function(e, a, l) {
          a.exports = {
            isNode: typeof Buffer < "u",
            newBufferFrom: function(t, i) {
              if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(t, i);
              if (typeof t == "number") throw new Error('The "data" argument must not be a number');
              return new Buffer(t, i)
            },
            allocBuffer: function(t) {
              if (Buffer.alloc) return Buffer.alloc(t);
              var i = new Buffer(t);
              return i.fill(0), i
            },
            isBuffer: function(t) {
              return Buffer.isBuffer(t)
            },
            isStream: function(t) {
              return t && typeof t.on == "function" && typeof t.pause == "function" && typeof t.resume == "function"
            }
          }
        }, {}],
        15: [function(e, a, l) {
          function t(C, R, k) {
            var E, I = s.getTypeOf(R),
              O = s.extend(k || {}, v);
            O.date = O.date || new Date, O.compression !== null && (O.compression = O.compression.toUpperCase()), typeof O.unixPermissions == "string" && (O.unixPermissions = parseInt(O.unixPermissions, 8)), O.unixPermissions && 16384 & O.unixPermissions && (O.dir = !0), O.dosPermissions && 16 & O.dosPermissions && (O.dir = !0), O.dir && (C = p(C)), O.createFolders && (E = m(C)) && w.call(this, E, !0);
            var H = I === "string" && O.binary === !1 && O.base64 === !1;
            k && k.binary !== void 0 || (O.binary = !H), (R instanceof b && R.uncompressedSize === 0 || O.dir || !R || R.length === 0) && (O.base64 = !1, O.binary = !0, R = "", O.compression = "STORE", I = "string");
            var T = null;
            T = R instanceof b || R instanceof u ? R : g.isNode && g.isStream(R) ? new f(C, R) : s.prepareContent(C, R, O.binary, O.optimizedBinaryString, O.base64);
            var D = new y(C, T, O);
            this.files[C] = D
          }
          var i = e("./utf8"),
            s = e("./utils"),
            u = e("./stream/GenericWorker"),
            h = e("./stream/StreamHelper"),
            v = e("./defaults"),
            b = e("./compressedObject"),
            y = e("./zipObject"),
            d = e("./generate"),
            g = e("./nodejsUtils"),
            f = e("./nodejs/NodejsStreamInputAdapter"),
            m = function(C) {
              C.slice(-1) === "/" && (C = C.substring(0, C.length - 1));
              var R = C.lastIndexOf("/");
              return 0 < R ? C.substring(0, R) : ""
            },
            p = function(C) {
              return C.slice(-1) !== "/" && (C += "/"), C
            },
            w = function(C, R) {
              return R = R !== void 0 ? R : v.createFolders, C = p(C), this.files[C] || t.call(this, C, null, {
                dir: !0,
                createFolders: R
              }), this.files[C]
            };

          function A(C) {
            return Object.prototype.toString.call(C) === "[object RegExp]"
          }
          var x = {
            load: function() {
              throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
            },
            forEach: function(C) {
              var R, k, E;
              for (R in this.files) E = this.files[R], (k = R.slice(this.root.length, R.length)) && R.slice(0, this.root.length) === this.root && C(k, E)
            },
            filter: function(C) {
              var R = [];
              return this.forEach(function(k, E) {
                C(k, E) && R.push(E)
              }), R
            },
            file: function(C, R, k) {
              if (arguments.length !== 1) return C = this.root + C, t.call(this, C, R, k), this;
              if (A(C)) {
                var E = C;
                return this.filter(function(O, H) {
                  return !H.dir && E.test(O)
                })
              }
              var I = this.files[this.root + C];
              return I && !I.dir ? I : null
            },
            folder: function(C) {
              if (!C) return this;
              if (A(C)) return this.filter(function(I, O) {
                return O.dir && C.test(I)
              });
              var R = this.root + C,
                k = w.call(this, R),
                E = this.clone();
              return E.root = k.name, E
            },
            remove: function(C) {
              C = this.root + C;
              var R = this.files[C];
              if (R || (C.slice(-1) !== "/" && (C += "/"), R = this.files[C]), R && !R.dir) delete this.files[C];
              else
                for (var k = this.filter(function(I, O) {
                    return O.name.slice(0, C.length) === C
                  }), E = 0; E < k.length; E++) delete this.files[k[E].name];
              return this
            },
            generate: function() {
              throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
            },
            generateInternalStream: function(C) {
              var R, k = {};
              try {
                if ((k = s.extend(C || {}, {
                    streamFiles: !1,
                    compression: "STORE",
                    compressionOptions: null,
                    type: "",
                    platform: "DOS",
                    comment: null,
                    mimeType: "application/zip",
                    encodeFileName: i.utf8encode
                  })).type = k.type.toLowerCase(), k.compression = k.compression.toUpperCase(), k.type === "binarystring" && (k.type = "string"), !k.type) throw new Error("No output type specified.");
                s.checkSupport(k.type), k.platform !== "darwin" && k.platform !== "freebsd" && k.platform !== "linux" && k.platform !== "sunos" || (k.platform = "UNIX"), k.platform === "win32" && (k.platform = "DOS");
                var E = k.comment || this.comment || "";
                R = d.generateWorker(this, k, E)
              } catch (I) {
                (R = new u("error")).error(I)
              }
              return new h(R, k.type || "string", k.mimeType)
            },
            generateAsync: function(C, R) {
              return this.generateInternalStream(C).accumulate(R)
            },
            generateNodeStream: function(C, R) {
              return (C = C || {}).type || (C.type = "nodebuffer"), this.generateInternalStream(C).toNodejsStream(R)
            }
          };
          a.exports = x
        }, {
          "./compressedObject": 2,
          "./defaults": 5,
          "./generate": 9,
          "./nodejs/NodejsStreamInputAdapter": 12,
          "./nodejsUtils": 14,
          "./stream/GenericWorker": 28,
          "./stream/StreamHelper": 29,
          "./utf8": 31,
          "./utils": 32,
          "./zipObject": 35
        }],
        16: [function(e, a, l) {
          a.exports = e("stream")
        }, {
          stream: void 0
        }],
        17: [function(e, a, l) {
          var t = e("./DataReader");

          function i(s) {
            t.call(this, s);
            for (var u = 0; u < this.data.length; u++) s[u] = 255 & s[u]
          }
          e("../utils").inherits(i, t), i.prototype.byteAt = function(s) {
            return this.data[this.zero + s]
          }, i.prototype.lastIndexOfSignature = function(s) {
            for (var u = s.charCodeAt(0), h = s.charCodeAt(1), v = s.charCodeAt(2), b = s.charCodeAt(3), y = this.length - 4; 0 <= y; --y)
              if (this.data[y] === u && this.data[y + 1] === h && this.data[y + 2] === v && this.data[y + 3] === b) return y - this.zero;
            return -1
          }, i.prototype.readAndCheckSignature = function(s) {
            var u = s.charCodeAt(0),
              h = s.charCodeAt(1),
              v = s.charCodeAt(2),
              b = s.charCodeAt(3),
              y = this.readData(4);
            return u === y[0] && h === y[1] && v === y[2] && b === y[3]
          }, i.prototype.readData = function(s) {
            if (this.checkOffset(s), s === 0) return [];
            var u = this.data.slice(this.zero + this.index, this.zero + this.index + s);
            return this.index += s, u
          }, a.exports = i
        }, {
          "../utils": 32,
          "./DataReader": 18
        }],
        18: [function(e, a, l) {
          var t = e("../utils");

          function i(s) {
            this.data = s, this.length = s.length, this.index = 0, this.zero = 0
          }
          i.prototype = {
            checkOffset: function(s) {
              this.checkIndex(this.index + s)
            },
            checkIndex: function(s) {
              if (this.length < this.zero + s || s < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + s + "). Corrupted zip ?")
            },
            setIndex: function(s) {
              this.checkIndex(s), this.index = s
            },
            skip: function(s) {
              this.setIndex(this.index + s)
            },
            byteAt: function() {},
            readInt: function(s) {
              var u, h = 0;
              for (this.checkOffset(s), u = this.index + s - 1; u >= this.index; u--) h = (h << 8) + this.byteAt(u);
              return this.index += s, h
            },
            readString: function(s) {
              return t.transformTo("string", this.readData(s))
            },
            readData: function() {},
            lastIndexOfSignature: function() {},
            readAndCheckSignature: function() {},
            readDate: function() {
              var s = this.readInt(4);
              return new Date(Date.UTC(1980 + (s >> 25 & 127), (s >> 21 & 15) - 1, s >> 16 & 31, s >> 11 & 31, s >> 5 & 63, (31 & s) << 1))
            }
          }, a.exports = i
        }, {
          "../utils": 32
        }],
        19: [function(e, a, l) {
          var t = e("./Uint8ArrayReader");

          function i(s) {
            t.call(this, s)
          }
          e("../utils").inherits(i, t), i.prototype.readData = function(s) {
            this.checkOffset(s);
            var u = this.data.slice(this.zero + this.index, this.zero + this.index + s);
            return this.index += s, u
          }, a.exports = i
        }, {
          "../utils": 32,
          "./Uint8ArrayReader": 21
        }],
        20: [function(e, a, l) {
          var t = e("./DataReader");

          function i(s) {
            t.call(this, s)
          }
          e("../utils").inherits(i, t), i.prototype.byteAt = function(s) {
            return this.data.charCodeAt(this.zero + s)
          }, i.prototype.lastIndexOfSignature = function(s) {
            return this.data.lastIndexOf(s) - this.zero
          }, i.prototype.readAndCheckSignature = function(s) {
            return s === this.readData(4)
          }, i.prototype.readData = function(s) {
            this.checkOffset(s);
            var u = this.data.slice(this.zero + this.index, this.zero + this.index + s);
            return this.index += s, u
          }, a.exports = i
        }, {
          "../utils": 32,
          "./DataReader": 18
        }],
        21: [function(e, a, l) {
          var t = e("./ArrayReader");

          function i(s) {
            t.call(this, s)
          }
          e("../utils").inherits(i, t), i.prototype.readData = function(s) {
            if (this.checkOffset(s), s === 0) return new Uint8Array(0);
            var u = this.data.subarray(this.zero + this.index, this.zero + this.index + s);
            return this.index += s, u
          }, a.exports = i
        }, {
          "../utils": 32,
          "./ArrayReader": 17
        }],
        22: [function(e, a, l) {
          var t = e("../utils"),
            i = e("../support"),
            s = e("./ArrayReader"),
            u = e("./StringReader"),
            h = e("./NodeBufferReader"),
            v = e("./Uint8ArrayReader");
          a.exports = function(b) {
            var y = t.getTypeOf(b);
            return t.checkSupport(y), y !== "string" || i.uint8array ? y === "nodebuffer" ? new h(b) : i.uint8array ? new v(t.transformTo("uint8array", b)) : new s(t.transformTo("array", b)) : new u(b)
          }
        }, {
          "../support": 30,
          "../utils": 32,
          "./ArrayReader": 17,
          "./NodeBufferReader": 19,
          "./StringReader": 20,
          "./Uint8ArrayReader": 21
        }],
        23: [function(e, a, l) {
          l.LOCAL_FILE_HEADER = "PK", l.CENTRAL_FILE_HEADER = "PK", l.CENTRAL_DIRECTORY_END = "PK", l.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", l.ZIP64_CENTRAL_DIRECTORY_END = "PK", l.DATA_DESCRIPTOR = "PK\x07\b"
        }, {}],
        24: [function(e, a, l) {
          var t = e("./GenericWorker"),
            i = e("../utils");

          function s(u) {
            t.call(this, "ConvertWorker to " + u), this.destType = u
          }
          i.inherits(s, t), s.prototype.processChunk = function(u) {
            this.push({
              data: i.transformTo(this.destType, u.data),
              meta: u.meta
            })
          }, a.exports = s
        }, {
          "../utils": 32,
          "./GenericWorker": 28
        }],
        25: [function(e, a, l) {
          var t = e("./GenericWorker"),
            i = e("../crc32");

          function s() {
            t.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0)
          }
          e("../utils").inherits(s, t), s.prototype.processChunk = function(u) {
            this.streamInfo.crc32 = i(u.data, this.streamInfo.crc32 || 0), this.push(u)
          }, a.exports = s
        }, {
          "../crc32": 4,
          "../utils": 32,
          "./GenericWorker": 28
        }],
        26: [function(e, a, l) {
          var t = e("../utils"),
            i = e("./GenericWorker");

          function s(u) {
            i.call(this, "DataLengthProbe for " + u), this.propName = u, this.withStreamInfo(u, 0)
          }
          t.inherits(s, i), s.prototype.processChunk = function(u) {
            if (u) {
              var h = this.streamInfo[this.propName] || 0;
              this.streamInfo[this.propName] = h + u.data.length
            }
            i.prototype.processChunk.call(this, u)
          }, a.exports = s
        }, {
          "../utils": 32,
          "./GenericWorker": 28
        }],
        27: [function(e, a, l) {
          var t = e("../utils"),
            i = e("./GenericWorker");

          function s(u) {
            i.call(this, "DataWorker");
            var h = this;
            this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, u.then(function(v) {
              h.dataIsReady = !0, h.data = v, h.max = v && v.length || 0, h.type = t.getTypeOf(v), h.isPaused || h._tickAndRepeat()
            }, function(v) {
              h.error(v)
            })
          }
          t.inherits(s, i), s.prototype.cleanUp = function() {
            i.prototype.cleanUp.call(this), this.data = null
          }, s.prototype.resume = function() {
            return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, t.delay(this._tickAndRepeat, [], this)), !0)
          }, s.prototype._tickAndRepeat = function() {
            this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (t.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0))
          }, s.prototype._tick = function() {
            if (this.isPaused || this.isFinished) return !1;
            var u = null,
              h = Math.min(this.max, this.index + 16384);
            if (this.index >= this.max) return this.end();
            switch (this.type) {
              case "string":
                u = this.data.substring(this.index, h);
                break;
              case "uint8array":
                u = this.data.subarray(this.index, h);
                break;
              case "array":
              case "nodebuffer":
                u = this.data.slice(this.index, h)
            }
            return this.index = h, this.push({
              data: u,
              meta: {
                percent: this.max ? this.index / this.max * 100 : 0
              }
            })
          }, a.exports = s
        }, {
          "../utils": 32,
          "./GenericWorker": 28
        }],
        28: [function(e, a, l) {
          function t(i) {
            this.name = i || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
              data: [],
              end: [],
              error: []
            }, this.previous = null
          }
          t.prototype = {
            push: function(i) {
              this.emit("data", i)
            },
            end: function() {
              if (this.isFinished) return !1;
              this.flush();
              try {
                this.emit("end"), this.cleanUp(), this.isFinished = !0
              } catch (i) {
                this.emit("error", i)
              }
              return !0
            },
            error: function(i) {
              return !this.isFinished && (this.isPaused ? this.generatedError = i : (this.isFinished = !0, this.emit("error", i), this.previous && this.previous.error(i), this.cleanUp()), !0)
            },
            on: function(i, s) {
              return this._listeners[i].push(s), this
            },
            cleanUp: function() {
              this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = []
            },
            emit: function(i, s) {
              if (this._listeners[i])
                for (var u = 0; u < this._listeners[i].length; u++) this._listeners[i][u].call(this, s)
            },
            pipe: function(i) {
              return i.registerPrevious(this)
            },
            registerPrevious: function(i) {
              if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
              this.streamInfo = i.streamInfo, this.mergeStreamInfo(), this.previous = i;
              var s = this;
              return i.on("data", function(u) {
                s.processChunk(u)
              }), i.on("end", function() {
                s.end()
              }), i.on("error", function(u) {
                s.error(u)
              }), this
            },
            pause: function() {
              return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0)
            },
            resume: function() {
              if (!this.isPaused || this.isFinished) return !1;
              var i = this.isPaused = !1;
              return this.generatedError && (this.error(this.generatedError), i = !0), this.previous && this.previous.resume(), !i
            },
            flush: function() {},
            processChunk: function(i) {
              this.push(i)
            },
            withStreamInfo: function(i, s) {
              return this.extraStreamInfo[i] = s, this.mergeStreamInfo(), this
            },
            mergeStreamInfo: function() {
              for (var i in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, i) && (this.streamInfo[i] = this.extraStreamInfo[i])
            },
            lock: function() {
              if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
              this.isLocked = !0, this.previous && this.previous.lock()
            },
            toString: function() {
              var i = "Worker " + this.name;
              return this.previous ? this.previous + " -> " + i : i
            }
          }, a.exports = t
        }, {}],
        29: [function(e, a, l) {
          var t = e("../utils"),
            i = e("./ConvertWorker"),
            s = e("./GenericWorker"),
            u = e("../base64"),
            h = e("../support"),
            v = e("../external"),
            b = null;
          if (h.nodestream) try {
            b = e("../nodejs/NodejsStreamOutputAdapter")
          } catch {}

          function y(g, f) {
            return new v.Promise(function(m, p) {
              var w = [],
                A = g._internalType,
                x = g._outputType,
                C = g._mimeType;
              g.on("data", function(R, k) {
                w.push(R), f && f(k)
              }).on("error", function(R) {
                w = [], p(R)
              }).on("end", function() {
                try {
                  var R = (function(k, E, I) {
                    switch (k) {
                      case "blob":
                        return t.newBlob(t.transformTo("arraybuffer", E), I);
                      case "base64":
                        return u.encode(E);
                      default:
                        return t.transformTo(k, E)
                    }
                  })(x, (function(k, E) {
                    var I, O = 0,
                      H = null,
                      T = 0;
                    for (I = 0; I < E.length; I++) T += E[I].length;
                    switch (k) {
                      case "string":
                        return E.join("");
                      case "array":
                        return Array.prototype.concat.apply([], E);
                      case "uint8array":
                        for (H = new Uint8Array(T), I = 0; I < E.length; I++) H.set(E[I], O), O += E[I].length;
                        return H;
                      case "nodebuffer":
                        return Buffer.concat(E);
                      default:
                        throw new Error("concat : unsupported type '" + k + "'")
                    }
                  })(A, w), C);
                  m(R)
                } catch (k) {
                  p(k)
                }
                w = []
              }).resume()
            })
          }

          function d(g, f, m) {
            var p = f;
            switch (f) {
              case "blob":
              case "arraybuffer":
                p = "uint8array";
                break;
              case "base64":
                p = "string"
            }
            try {
              this._internalType = p, this._outputType = f, this._mimeType = m, t.checkSupport(p), this._worker = g.pipe(new i(p)), g.lock()
            } catch (w) {
              this._worker = new s("error"), this._worker.error(w)
            }
          }
          d.prototype = {
            accumulate: function(g) {
              return y(this, g)
            },
            on: function(g, f) {
              var m = this;
              return g === "data" ? this._worker.on(g, function(p) {
                f.call(m, p.data, p.meta)
              }) : this._worker.on(g, function() {
                t.delay(f, arguments, m)
              }), this
            },
            resume: function() {
              return t.delay(this._worker.resume, [], this._worker), this
            },
            pause: function() {
              return this._worker.pause(), this
            },
            toNodejsStream: function(g) {
              if (t.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
              return new b(this, {
                objectMode: this._outputType !== "nodebuffer"
              }, g)
            }
          }, a.exports = d
        }, {
          "../base64": 1,
          "../external": 6,
          "../nodejs/NodejsStreamOutputAdapter": 13,
          "../support": 30,
          "../utils": 32,
          "./ConvertWorker": 24,
          "./GenericWorker": 28
        }],
        30: [function(e, a, l) {
          if (l.base64 = !0, l.array = !0, l.string = !0, l.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", l.nodebuffer = typeof Buffer < "u", l.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") l.blob = !1;
          else {
            var t = new ArrayBuffer(0);
            try {
              l.blob = new Blob([t], {
                type: "application/zip"
              }).size === 0
            } catch {
              try {
                var i = new(self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                i.append(t), l.blob = i.getBlob("application/zip").size === 0
              } catch {
                l.blob = !1
              }
            }
          }
          try {
            l.nodestream = !!e("readable-stream").Readable
          } catch {
            l.nodestream = !1
          }
        }, {
          "readable-stream": 16
        }],
        31: [function(e, a, l) {
          for (var t = e("./utils"), i = e("./support"), s = e("./nodejsUtils"), u = e("./stream/GenericWorker"), h = new Array(256), v = 0; v < 256; v++) h[v] = 252 <= v ? 6 : 248 <= v ? 5 : 240 <= v ? 4 : 224 <= v ? 3 : 192 <= v ? 2 : 1;
          h[254] = h[254] = 1;

          function b() {
            u.call(this, "utf-8 decode"), this.leftOver = null
          }

          function y() {
            u.call(this, "utf-8 encode")
          }
          l.utf8encode = function(d) {
            return i.nodebuffer ? s.newBufferFrom(d, "utf-8") : (function(g) {
              var f, m, p, w, A, x = g.length,
                C = 0;
              for (w = 0; w < x; w++)(64512 & (m = g.charCodeAt(w))) == 55296 && w + 1 < x && (64512 & (p = g.charCodeAt(w + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (p - 56320), w++), C += m < 128 ? 1 : m < 2048 ? 2 : m < 65536 ? 3 : 4;
              for (f = i.uint8array ? new Uint8Array(C) : new Array(C), w = A = 0; A < C; w++)(64512 & (m = g.charCodeAt(w))) == 55296 && w + 1 < x && (64512 & (p = g.charCodeAt(w + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (p - 56320), w++), m < 128 ? f[A++] = m : (m < 2048 ? f[A++] = 192 | m >>> 6 : (m < 65536 ? f[A++] = 224 | m >>> 12 : (f[A++] = 240 | m >>> 18, f[A++] = 128 | m >>> 12 & 63), f[A++] = 128 | m >>> 6 & 63), f[A++] = 128 | 63 & m);
              return f
            })(d)
          }, l.utf8decode = function(d) {
            return i.nodebuffer ? t.transformTo("nodebuffer", d).toString("utf-8") : (function(g) {
              var f, m, p, w, A = g.length,
                x = new Array(2 * A);
              for (f = m = 0; f < A;)
                if ((p = g[f++]) < 128) x[m++] = p;
                else if (4 < (w = h[p])) x[m++] = 65533, f += w - 1;
              else {
                for (p &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && f < A;) p = p << 6 | 63 & g[f++], w--;
                1 < w ? x[m++] = 65533 : p < 65536 ? x[m++] = p : (p -= 65536, x[m++] = 55296 | p >> 10 & 1023, x[m++] = 56320 | 1023 & p)
              }
              return x.length !== m && (x.subarray ? x = x.subarray(0, m) : x.length = m), t.applyFromCharCode(x)
            })(d = t.transformTo(i.uint8array ? "uint8array" : "array", d))
          }, t.inherits(b, u), b.prototype.processChunk = function(d) {
            var g = t.transformTo(i.uint8array ? "uint8array" : "array", d.data);
            if (this.leftOver && this.leftOver.length) {
              if (i.uint8array) {
                var f = g;
                (g = new Uint8Array(f.length + this.leftOver.length)).set(this.leftOver, 0), g.set(f, this.leftOver.length)
              } else g = this.leftOver.concat(g);
              this.leftOver = null
            }
            var m = (function(w, A) {
                var x;
                for ((A = A || w.length) > w.length && (A = w.length), x = A - 1; 0 <= x && (192 & w[x]) == 128;) x--;
                return x < 0 || x === 0 ? A : x + h[w[x]] > A ? x : A
              })(g),
              p = g;
            m !== g.length && (i.uint8array ? (p = g.subarray(0, m), this.leftOver = g.subarray(m, g.length)) : (p = g.slice(0, m), this.leftOver = g.slice(m, g.length))), this.push({
              data: l.utf8decode(p),
              meta: d.meta
            })
          }, b.prototype.flush = function() {
            this.leftOver && this.leftOver.length && (this.push({
              data: l.utf8decode(this.leftOver),
              meta: {}
            }), this.leftOver = null)
          }, l.Utf8DecodeWorker = b, t.inherits(y, u), y.prototype.processChunk = function(d) {
            this.push({
              data: l.utf8encode(d.data),
              meta: d.meta
            })
          }, l.Utf8EncodeWorker = y
        }, {
          "./nodejsUtils": 14,
          "./stream/GenericWorker": 28,
          "./support": 30,
          "./utils": 32
        }],
        32: [function(e, a, l) {
          var t = e("./support"),
            i = e("./base64"),
            s = e("./nodejsUtils"),
            u = e("./external");

          function h(f) {
            return f
          }

          function v(f, m) {
            for (var p = 0; p < f.length; ++p) m[p] = 255 & f.charCodeAt(p);
            return m
          }
          e("setimmediate"), l.newBlob = function(f, m) {
            l.checkSupport("blob");
            try {
              return new Blob([f], {
                type: m
              })
            } catch {
              try {
                var p = new(self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                return p.append(f), p.getBlob(m)
              } catch {
                throw new Error("Bug : can't construct the Blob.")
              }
            }
          };
          var b = {
            stringifyByChunk: function(f, m, p) {
              var w = [],
                A = 0,
                x = f.length;
              if (x <= p) return String.fromCharCode.apply(null, f);
              for (; A < x;) m === "array" || m === "nodebuffer" ? w.push(String.fromCharCode.apply(null, f.slice(A, Math.min(A + p, x)))) : w.push(String.fromCharCode.apply(null, f.subarray(A, Math.min(A + p, x)))), A += p;
              return w.join("")
            },
            stringifyByChar: function(f) {
              for (var m = "", p = 0; p < f.length; p++) m += String.fromCharCode(f[p]);
              return m
            },
            applyCanBeUsed: {
              uint8array: (function() {
                try {
                  return t.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1
                } catch {
                  return !1
                }
              })(),
              nodebuffer: (function() {
                try {
                  return t.nodebuffer && String.fromCharCode.apply(null, s.allocBuffer(1)).length === 1
                } catch {
                  return !1
                }
              })()
            }
          };

          function y(f) {
            var m = 65536,
              p = l.getTypeOf(f),
              w = !0;
            if (p === "uint8array" ? w = b.applyCanBeUsed.uint8array : p === "nodebuffer" && (w = b.applyCanBeUsed.nodebuffer), w)
              for (; 1 < m;) try {
                return b.stringifyByChunk(f, p, m)
              } catch {
                m = Math.floor(m / 2)
              }
            return b.stringifyByChar(f)
          }

          function d(f, m) {
            for (var p = 0; p < f.length; p++) m[p] = f[p];
            return m
          }
          l.applyFromCharCode = y;
          var g = {};
          g.string = {
            string: h,
            array: function(f) {
              return v(f, new Array(f.length))
            },
            arraybuffer: function(f) {
              return g.string.uint8array(f).buffer
            },
            uint8array: function(f) {
              return v(f, new Uint8Array(f.length))
            },
            nodebuffer: function(f) {
              return v(f, s.allocBuffer(f.length))
            }
          }, g.array = {
            string: y,
            array: h,
            arraybuffer: function(f) {
              return new Uint8Array(f).buffer
            },
            uint8array: function(f) {
              return new Uint8Array(f)
            },
            nodebuffer: function(f) {
              return s.newBufferFrom(f)
            }
          }, g.arraybuffer = {
            string: function(f) {
              return y(new Uint8Array(f))
            },
            array: function(f) {
              return d(new Uint8Array(f), new Array(f.byteLength))
            },
            arraybuffer: h,
            uint8array: function(f) {
              return new Uint8Array(f)
            },
            nodebuffer: function(f) {
              return s.newBufferFrom(new Uint8Array(f))
            }
          }, g.uint8array = {
            string: y,
            array: function(f) {
              return d(f, new Array(f.length))
            },
            arraybuffer: function(f) {
              return f.buffer
            },
            uint8array: h,
            nodebuffer: function(f) {
              return s.newBufferFrom(f)
            }
          }, g.nodebuffer = {
            string: y,
            array: function(f) {
              return d(f, new Array(f.length))
            },
            arraybuffer: function(f) {
              return g.nodebuffer.uint8array(f).buffer
            },
            uint8array: function(f) {
              return d(f, new Uint8Array(f.length))
            },
            nodebuffer: h
          }, l.transformTo = function(f, m) {
            if (m = m || "", !f) return m;
            l.checkSupport(f);
            var p = l.getTypeOf(m);
            return g[p][f](m)
          }, l.resolve = function(f) {
            for (var m = f.split("/"), p = [], w = 0; w < m.length; w++) {
              var A = m[w];
              A === "." || A === "" && w !== 0 && w !== m.length - 1 || (A === ".." ? p.pop() : p.push(A))
            }
            return p.join("/")
          }, l.getTypeOf = function(f) {
            return typeof f == "string" ? "string" : Object.prototype.toString.call(f) === "[object Array]" ? "array" : t.nodebuffer && s.isBuffer(f) ? "nodebuffer" : t.uint8array && f instanceof Uint8Array ? "uint8array" : t.arraybuffer && f instanceof ArrayBuffer ? "arraybuffer" : void 0
          }, l.checkSupport = function(f) {
            if (!t[f.toLowerCase()]) throw new Error(f + " is not supported by this platform")
          }, l.MAX_VALUE_16BITS = 65535, l.MAX_VALUE_32BITS = -1, l.pretty = function(f) {
            var m, p, w = "";
            for (p = 0; p < (f || "").length; p++) w += "\\x" + ((m = f.charCodeAt(p)) < 16 ? "0" : "") + m.toString(16).toUpperCase();
            return w
          }, l.delay = function(f, m, p) {
            setImmediate(function() {
              f.apply(p || null, m || [])
            })
          }, l.inherits = function(f, m) {
            function p() {}
            p.prototype = m.prototype, f.prototype = new p
          }, l.extend = function() {
            var f, m, p = {};
            for (f = 0; f < arguments.length; f++)
              for (m in arguments[f]) Object.prototype.hasOwnProperty.call(arguments[f], m) && p[m] === void 0 && (p[m] = arguments[f][m]);
            return p
          }, l.prepareContent = function(f, m, p, w, A) {
            return u.Promise.resolve(m).then(function(x) {
              return t.blob && (x instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(x)) !== -1) && typeof FileReader < "u" ? new u.Promise(function(C, R) {
                var k = new FileReader;
                k.onload = function(E) {
                  C(E.target.result)
                }, k.onerror = function(E) {
                  R(E.target.error)
                }, k.readAsArrayBuffer(x)
              }) : x
            }).then(function(x) {
              var C = l.getTypeOf(x);
              return C ? (C === "arraybuffer" ? x = l.transformTo("uint8array", x) : C === "string" && (A ? x = i.decode(x) : p && w !== !0 && (x = (function(R) {
                return v(R, t.uint8array ? new Uint8Array(R.length) : new Array(R.length))
              })(x))), x) : u.Promise.reject(new Error("Can't read the data of '" + f + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))
            })
          }
        }, {
          "./base64": 1,
          "./external": 6,
          "./nodejsUtils": 14,
          "./support": 30,
          setimmediate: 54
        }],
        33: [function(e, a, l) {
          var t = e("./reader/readerFor"),
            i = e("./utils"),
            s = e("./signature"),
            u = e("./zipEntry"),
            h = e("./support");

          function v(b) {
            this.files = [], this.loadOptions = b
          }
          v.prototype = {
            checkSignature: function(b) {
              if (!this.reader.readAndCheckSignature(b)) {
                this.reader.index -= 4;
                var y = this.reader.readString(4);
                throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(y) + ", expected " + i.pretty(b) + ")")
              }
            },
            isSignature: function(b, y) {
              var d = this.reader.index;
              this.reader.setIndex(b);
              var g = this.reader.readString(4) === y;
              return this.reader.setIndex(d), g
            },
            readBlockEndOfCentral: function() {
              this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
              var b = this.reader.readData(this.zipCommentLength),
                y = h.uint8array ? "uint8array" : "array",
                d = i.transformTo(y, b);
              this.zipComment = this.loadOptions.decodeFileName(d)
            },
            readBlockZip64EndOfCentral: function() {
              this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
              for (var b, y, d, g = this.zip64EndOfCentralSize - 44; 0 < g;) b = this.reader.readInt(2), y = this.reader.readInt(4), d = this.reader.readData(y), this.zip64ExtensibleData[b] = {
                id: b,
                length: y,
                value: d
              }
            },
            readBlockZip64EndOfCentralLocator: function() {
              if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported")
            },
            readLocalFiles: function() {
              var b, y;
              for (b = 0; b < this.files.length; b++) y = this.files[b], this.reader.setIndex(y.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), y.readLocalPart(this.reader), y.handleUTF8(), y.processAttributes()
            },
            readCentralDir: function() {
              var b;
              for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(b = new u({
                zip64: this.zip64
              }, this.loadOptions)).readCentralPart(this.reader), this.files.push(b);
              if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length)
            },
            readEndOfCentral: function() {
              var b = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
              if (b < 0) throw this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
              this.reader.setIndex(b);
              var y = b;
              if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
                if (this.zip64 = !0, (b = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
                if (this.reader.setIndex(b), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral()
              }
              var d = this.centralDirOffset + this.centralDirSize;
              this.zip64 && (d += 20, d += 12 + this.zip64EndOfCentralSize);
              var g = y - d;
              if (0 < g) this.isSignature(y, s.CENTRAL_FILE_HEADER) || (this.reader.zero = g);
              else if (g < 0) throw new Error("Corrupted zip: missing " + Math.abs(g) + " bytes.")
            },
            prepareReader: function(b) {
              this.reader = t(b)
            },
            load: function(b) {
              this.prepareReader(b), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles()
            }
          }, a.exports = v
        }, {
          "./reader/readerFor": 22,
          "./signature": 23,
          "./support": 30,
          "./utils": 32,
          "./zipEntry": 34
        }],
        34: [function(e, a, l) {
          var t = e("./reader/readerFor"),
            i = e("./utils"),
            s = e("./compressedObject"),
            u = e("./crc32"),
            h = e("./utf8"),
            v = e("./compressions"),
            b = e("./support");

          function y(d, g) {
            this.options = d, this.loadOptions = g
          }
          y.prototype = {
            isEncrypted: function() {
              return (1 & this.bitFlag) == 1
            },
            useUTF8: function() {
              return (2048 & this.bitFlag) == 2048
            },
            readLocalPart: function(d) {
              var g, f;
              if (d.skip(22), this.fileNameLength = d.readInt(2), f = d.readInt(2), this.fileName = d.readData(this.fileNameLength), d.skip(f), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
              if ((g = (function(m) {
                  for (var p in v)
                    if (Object.prototype.hasOwnProperty.call(v, p) && v[p].magic === m) return v[p];
                  return null
                })(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + i.pretty(this.compressionMethod) + " unknown (inner file : " + i.transformTo("string", this.fileName) + ")");
              this.decompressed = new s(this.compressedSize, this.uncompressedSize, this.crc32, g, d.readData(this.compressedSize))
            },
            readCentralPart: function(d) {
              this.versionMadeBy = d.readInt(2), d.skip(2), this.bitFlag = d.readInt(2), this.compressionMethod = d.readString(2), this.date = d.readDate(), this.crc32 = d.readInt(4), this.compressedSize = d.readInt(4), this.uncompressedSize = d.readInt(4);
              var g = d.readInt(2);
              if (this.extraFieldsLength = d.readInt(2), this.fileCommentLength = d.readInt(2), this.diskNumberStart = d.readInt(2), this.internalFileAttributes = d.readInt(2), this.externalFileAttributes = d.readInt(4), this.localHeaderOffset = d.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
              d.skip(g), this.readExtraFields(d), this.parseZIP64ExtraField(d), this.fileComment = d.readData(this.fileCommentLength)
            },
            processAttributes: function() {
              this.unixPermissions = null, this.dosPermissions = null;
              var d = this.versionMadeBy >> 8;
              this.dir = !!(16 & this.externalFileAttributes), d == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), d == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0)
            },
            parseZIP64ExtraField: function() {
              if (this.extraFields[1]) {
                var d = t(this.extraFields[1].value);
                this.uncompressedSize === i.MAX_VALUE_32BITS && (this.uncompressedSize = d.readInt(8)), this.compressedSize === i.MAX_VALUE_32BITS && (this.compressedSize = d.readInt(8)), this.localHeaderOffset === i.MAX_VALUE_32BITS && (this.localHeaderOffset = d.readInt(8)), this.diskNumberStart === i.MAX_VALUE_32BITS && (this.diskNumberStart = d.readInt(4))
              }
            },
            readExtraFields: function(d) {
              var g, f, m, p = d.index + this.extraFieldsLength;
              for (this.extraFields || (this.extraFields = {}); d.index + 4 < p;) g = d.readInt(2), f = d.readInt(2), m = d.readData(f), this.extraFields[g] = {
                id: g,
                length: f,
                value: m
              };
              d.setIndex(p)
            },
            handleUTF8: function() {
              var d = b.uint8array ? "uint8array" : "array";
              if (this.useUTF8()) this.fileNameStr = h.utf8decode(this.fileName), this.fileCommentStr = h.utf8decode(this.fileComment);
              else {
                var g = this.findExtraFieldUnicodePath();
                if (g !== null) this.fileNameStr = g;
                else {
                  var f = i.transformTo(d, this.fileName);
                  this.fileNameStr = this.loadOptions.decodeFileName(f)
                }
                var m = this.findExtraFieldUnicodeComment();
                if (m !== null) this.fileCommentStr = m;
                else {
                  var p = i.transformTo(d, this.fileComment);
                  this.fileCommentStr = this.loadOptions.decodeFileName(p)
                }
              }
            },
            findExtraFieldUnicodePath: function() {
              var d = this.extraFields[28789];
              if (d) {
                var g = t(d.value);
                return g.readInt(1) !== 1 || u(this.fileName) !== g.readInt(4) ? null : h.utf8decode(g.readData(d.length - 5))
              }
              return null
            },
            findExtraFieldUnicodeComment: function() {
              var d = this.extraFields[25461];
              if (d) {
                var g = t(d.value);
                return g.readInt(1) !== 1 || u(this.fileComment) !== g.readInt(4) ? null : h.utf8decode(g.readData(d.length - 5))
              }
              return null
            }
          }, a.exports = y
        }, {
          "./compressedObject": 2,
          "./compressions": 3,
          "./crc32": 4,
          "./reader/readerFor": 22,
          "./support": 30,
          "./utf8": 31,
          "./utils": 32
        }],
        35: [function(e, a, l) {
          function t(g, f, m) {
            this.name = g, this.dir = m.dir, this.date = m.date, this.comment = m.comment, this.unixPermissions = m.unixPermissions, this.dosPermissions = m.dosPermissions, this._data = f, this._dataBinary = m.binary, this.options = {
              compression: m.compression,
              compressionOptions: m.compressionOptions
            }
          }
          var i = e("./stream/StreamHelper"),
            s = e("./stream/DataWorker"),
            u = e("./utf8"),
            h = e("./compressedObject"),
            v = e("./stream/GenericWorker");
          t.prototype = {
            internalStream: function(g) {
              var f = null,
                m = "string";
              try {
                if (!g) throw new Error("No output type specified.");
                var p = (m = g.toLowerCase()) === "string" || m === "text";
                m !== "binarystring" && m !== "text" || (m = "string"), f = this._decompressWorker();
                var w = !this._dataBinary;
                w && !p && (f = f.pipe(new u.Utf8EncodeWorker)), !w && p && (f = f.pipe(new u.Utf8DecodeWorker))
              } catch (A) {
                (f = new v("error")).error(A)
              }
              return new i(f, m, "")
            },
            async: function(g, f) {
              return this.internalStream(g).accumulate(f)
            },
            nodeStream: function(g, f) {
              return this.internalStream(g || "nodebuffer").toNodejsStream(f)
            },
            _compressWorker: function(g, f) {
              if (this._data instanceof h && this._data.compression.magic === g.magic) return this._data.getCompressedWorker();
              var m = this._decompressWorker();
              return this._dataBinary || (m = m.pipe(new u.Utf8EncodeWorker)), h.createWorkerFrom(m, g, f)
            },
            _decompressWorker: function() {
              return this._data instanceof h ? this._data.getContentWorker() : this._data instanceof v ? this._data : new s(this._data)
            }
          };
          for (var b = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], y = function() {
              throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
            }, d = 0; d < b.length; d++) t.prototype[b[d]] = y;
          a.exports = t
        }, {
          "./compressedObject": 2,
          "./stream/DataWorker": 27,
          "./stream/GenericWorker": 28,
          "./stream/StreamHelper": 29,
          "./utf8": 31
        }],
        36: [function(e, a, l) {
          (function(t) {
            var i, s, u = t.MutationObserver || t.WebKitMutationObserver;
            if (u) {
              var h = 0,
                v = new u(g),
                b = t.document.createTextNode("");
              v.observe(b, {
                characterData: !0
              }), i = function() {
                b.data = h = ++h % 2
              }
            } else if (t.setImmediate || t.MessageChannel === void 0) i = "document" in t && "onreadystatechange" in t.document.createElement("script") ? function() {
              var f = t.document.createElement("script");
              f.onreadystatechange = function() {
                g(), f.onreadystatechange = null, f.parentNode.removeChild(f), f = null
              }, t.document.documentElement.appendChild(f)
            } : function() {
              setTimeout(g, 0)
            };
            else {
              var y = new t.MessageChannel;
              y.port1.onmessage = g, i = function() {
                y.port2.postMessage(0)
              }
            }
            var d = [];

            function g() {
              var f, m;
              s = !0;
              for (var p = d.length; p;) {
                for (m = d, d = [], f = -1; ++f < p;) m[f]();
                p = d.length
              }
              s = !1
            }
            a.exports = function(f) {
              d.push(f) !== 1 || s || i()
            }
          }).call(this, typeof He < "u" ? He : typeof self < "u" ? self : typeof window < "u" ? window : {})
        }, {}],
        37: [function(e, a, l) {
          var t = e("immediate");

          function i() {}
          var s = {},
            u = ["REJECTED"],
            h = ["FULFILLED"],
            v = ["PENDING"];

          function b(p) {
            if (typeof p != "function") throw new TypeError("resolver must be a function");
            this.state = v, this.queue = [], this.outcome = void 0, p !== i && f(this, p)
          }

          function y(p, w, A) {
            this.promise = p, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof A == "function" && (this.onRejected = A, this.callRejected = this.otherCallRejected)
          }

          function d(p, w, A) {
            t(function() {
              var x;
              try {
                x = w(A)
              } catch (C) {
                return s.reject(p, C)
              }
              x === p ? s.reject(p, new TypeError("Cannot resolve promise with itself")) : s.resolve(p, x)
            })
          }

          function g(p) {
            var w = p && p.then;
            if (p && (typeof p == "object" || typeof p == "function") && typeof w == "function") return function() {
              w.apply(p, arguments)
            }
          }

          function f(p, w) {
            var A = !1;

            function x(k) {
              A || (A = !0, s.reject(p, k))
            }

            function C(k) {
              A || (A = !0, s.resolve(p, k))
            }
            var R = m(function() {
              w(C, x)
            });
            R.status === "error" && x(R.value)
          }

          function m(p, w) {
            var A = {};
            try {
              A.value = p(w), A.status = "success"
            } catch (x) {
              A.status = "error", A.value = x
            }
            return A
          }(a.exports = b).prototype.finally = function(p) {
            if (typeof p != "function") return this;
            var w = this.constructor;
            return this.then(function(A) {
              return w.resolve(p()).then(function() {
                return A
              })
            }, function(A) {
              return w.resolve(p()).then(function() {
                throw A
              })
            })
          }, b.prototype.catch = function(p) {
            return this.then(null, p)
          }, b.prototype.then = function(p, w) {
            if (typeof p != "function" && this.state === h || typeof w != "function" && this.state === u) return this;
            var A = new this.constructor(i);
            return this.state !== v ? d(A, this.state === h ? p : w, this.outcome) : this.queue.push(new y(A, p, w)), A
          }, y.prototype.callFulfilled = function(p) {
            s.resolve(this.promise, p)
          }, y.prototype.otherCallFulfilled = function(p) {
            d(this.promise, this.onFulfilled, p)
          }, y.prototype.callRejected = function(p) {
            s.reject(this.promise, p)
          }, y.prototype.otherCallRejected = function(p) {
            d(this.promise, this.onRejected, p)
          }, s.resolve = function(p, w) {
            var A = m(g, w);
            if (A.status === "error") return s.reject(p, A.value);
            var x = A.value;
            if (x) f(p, x);
            else {
              p.state = h, p.outcome = w;
              for (var C = -1, R = p.queue.length; ++C < R;) p.queue[C].callFulfilled(w)
            }
            return p
          }, s.reject = function(p, w) {
            p.state = u, p.outcome = w;
            for (var A = -1, x = p.queue.length; ++A < x;) p.queue[A].callRejected(w);
            return p
          }, b.resolve = function(p) {
            return p instanceof this ? p : s.resolve(new this(i), p)
          }, b.reject = function(p) {
            var w = new this(i);
            return s.reject(w, p)
          }, b.all = function(p) {
            var w = this;
            if (Object.prototype.toString.call(p) !== "[object Array]") return this.reject(new TypeError("must be an array"));
            var A = p.length,
              x = !1;
            if (!A) return this.resolve([]);
            for (var C = new Array(A), R = 0, k = -1, E = new this(i); ++k < A;) I(p[k], k);
            return E;

            function I(O, H) {
              w.resolve(O).then(function(T) {
                C[H] = T, ++R !== A || x || (x = !0, s.resolve(E, C))
              }, function(T) {
                x || (x = !0, s.reject(E, T))
              })
            }
          }, b.race = function(p) {
            var w = this;
            if (Object.prototype.toString.call(p) !== "[object Array]") return this.reject(new TypeError("must be an array"));
            var A = p.length,
              x = !1;
            if (!A) return this.resolve([]);
            for (var C = -1, R = new this(i); ++C < A;) k = p[C], w.resolve(k).then(function(E) {
              x || (x = !0, s.resolve(R, E))
            }, function(E) {
              x || (x = !0, s.reject(R, E))
            });
            var k;
            return R
          }
        }, {
          immediate: 36
        }],
        38: [function(e, a, l) {
          var t = {};
          (0, e("./lib/utils/common").assign)(t, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), a.exports = t
        }, {
          "./lib/deflate": 39,
          "./lib/inflate": 40,
          "./lib/utils/common": 41,
          "./lib/zlib/constants": 44
        }],
        39: [function(e, a, l) {
          var t = e("./zlib/deflate"),
            i = e("./utils/common"),
            s = e("./utils/strings"),
            u = e("./zlib/messages"),
            h = e("./zlib/zstream"),
            v = Object.prototype.toString,
            b = 0,
            y = -1,
            d = 0,
            g = 8;

          function f(p) {
            if (!(this instanceof f)) return new f(p);
            this.options = i.assign({
              level: y,
              method: g,
              chunkSize: 16384,
              windowBits: 15,
              memLevel: 8,
              strategy: d,
              to: ""
            }, p || {});
            var w = this.options;
            w.raw && 0 < w.windowBits ? w.windowBits = -w.windowBits : w.gzip && 0 < w.windowBits && w.windowBits < 16 && (w.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new h, this.strm.avail_out = 0;
            var A = t.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
            if (A !== b) throw new Error(u[A]);
            if (w.header && t.deflateSetHeader(this.strm, w.header), w.dictionary) {
              var x;
              if (x = typeof w.dictionary == "string" ? s.string2buf(w.dictionary) : v.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (A = t.deflateSetDictionary(this.strm, x)) !== b) throw new Error(u[A]);
              this._dict_set = !0
            }
          }

          function m(p, w) {
            var A = new f(w);
            if (A.push(p, !0), A.err) throw A.msg || u[A.err];
            return A.result
          }
          f.prototype.push = function(p, w) {
            var A, x, C = this.strm,
              R = this.options.chunkSize;
            if (this.ended) return !1;
            x = w === ~~w ? w : w === !0 ? 4 : 0, typeof p == "string" ? C.input = s.string2buf(p) : v.call(p) === "[object ArrayBuffer]" ? C.input = new Uint8Array(p) : C.input = p, C.next_in = 0, C.avail_in = C.input.length;
            do {
              if (C.avail_out === 0 && (C.output = new i.Buf8(R), C.next_out = 0, C.avail_out = R), (A = t.deflate(C, x)) !== 1 && A !== b) return this.onEnd(A), !(this.ended = !0);
              C.avail_out !== 0 && (C.avail_in !== 0 || x !== 4 && x !== 2) || (this.options.to === "string" ? this.onData(s.buf2binstring(i.shrinkBuf(C.output, C.next_out))) : this.onData(i.shrinkBuf(C.output, C.next_out)))
            } while ((0 < C.avail_in || C.avail_out === 0) && A !== 1);
            return x === 4 ? (A = t.deflateEnd(this.strm), this.onEnd(A), this.ended = !0, A === b) : x !== 2 || (this.onEnd(b), !(C.avail_out = 0))
          }, f.prototype.onData = function(p) {
            this.chunks.push(p)
          }, f.prototype.onEnd = function(p) {
            p === b && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), this.chunks = [], this.err = p, this.msg = this.strm.msg
          }, l.Deflate = f, l.deflate = m, l.deflateRaw = function(p, w) {
            return (w = w || {}).raw = !0, m(p, w)
          }, l.gzip = function(p, w) {
            return (w = w || {}).gzip = !0, m(p, w)
          }
        }, {
          "./utils/common": 41,
          "./utils/strings": 42,
          "./zlib/deflate": 46,
          "./zlib/messages": 51,
          "./zlib/zstream": 53
        }],
        40: [function(e, a, l) {
          var t = e("./zlib/inflate"),
            i = e("./utils/common"),
            s = e("./utils/strings"),
            u = e("./zlib/constants"),
            h = e("./zlib/messages"),
            v = e("./zlib/zstream"),
            b = e("./zlib/gzheader"),
            y = Object.prototype.toString;

          function d(f) {
            if (!(this instanceof d)) return new d(f);
            this.options = i.assign({
              chunkSize: 16384,
              windowBits: 0,
              to: ""
            }, f || {});
            var m = this.options;
            m.raw && 0 <= m.windowBits && m.windowBits < 16 && (m.windowBits = -m.windowBits, m.windowBits === 0 && (m.windowBits = -15)), !(0 <= m.windowBits && m.windowBits < 16) || f && f.windowBits || (m.windowBits += 32), 15 < m.windowBits && m.windowBits < 48 && (15 & m.windowBits) == 0 && (m.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new v, this.strm.avail_out = 0;
            var p = t.inflateInit2(this.strm, m.windowBits);
            if (p !== u.Z_OK) throw new Error(h[p]);
            this.header = new b, t.inflateGetHeader(this.strm, this.header)
          }

          function g(f, m) {
            var p = new d(m);
            if (p.push(f, !0), p.err) throw p.msg || h[p.err];
            return p.result
          }
          d.prototype.push = function(f, m) {
            var p, w, A, x, C, R, k = this.strm,
              E = this.options.chunkSize,
              I = this.options.dictionary,
              O = !1;
            if (this.ended) return !1;
            w = m === ~~m ? m : m === !0 ? u.Z_FINISH : u.Z_NO_FLUSH, typeof f == "string" ? k.input = s.binstring2buf(f) : y.call(f) === "[object ArrayBuffer]" ? k.input = new Uint8Array(f) : k.input = f, k.next_in = 0, k.avail_in = k.input.length;
            do {
              if (k.avail_out === 0 && (k.output = new i.Buf8(E), k.next_out = 0, k.avail_out = E), (p = t.inflate(k, u.Z_NO_FLUSH)) === u.Z_NEED_DICT && I && (R = typeof I == "string" ? s.string2buf(I) : y.call(I) === "[object ArrayBuffer]" ? new Uint8Array(I) : I, p = t.inflateSetDictionary(this.strm, R)), p === u.Z_BUF_ERROR && O === !0 && (p = u.Z_OK, O = !1), p !== u.Z_STREAM_END && p !== u.Z_OK) return this.onEnd(p), !(this.ended = !0);
              k.next_out && (k.avail_out !== 0 && p !== u.Z_STREAM_END && (k.avail_in !== 0 || w !== u.Z_FINISH && w !== u.Z_SYNC_FLUSH) || (this.options.to === "string" ? (A = s.utf8border(k.output, k.next_out), x = k.next_out - A, C = s.buf2string(k.output, A), k.next_out = x, k.avail_out = E - x, x && i.arraySet(k.output, k.output, A, x, 0), this.onData(C)) : this.onData(i.shrinkBuf(k.output, k.next_out)))), k.avail_in === 0 && k.avail_out === 0 && (O = !0)
            } while ((0 < k.avail_in || k.avail_out === 0) && p !== u.Z_STREAM_END);
            return p === u.Z_STREAM_END && (w = u.Z_FINISH), w === u.Z_FINISH ? (p = t.inflateEnd(this.strm), this.onEnd(p), this.ended = !0, p === u.Z_OK) : w !== u.Z_SYNC_FLUSH || (this.onEnd(u.Z_OK), !(k.avail_out = 0))
          }, d.prototype.onData = function(f) {
            this.chunks.push(f)
          }, d.prototype.onEnd = function(f) {
            f === u.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), this.chunks = [], this.err = f, this.msg = this.strm.msg
          }, l.Inflate = d, l.inflate = g, l.inflateRaw = function(f, m) {
            return (m = m || {}).raw = !0, g(f, m)
          }, l.ungzip = g
        }, {
          "./utils/common": 41,
          "./utils/strings": 42,
          "./zlib/constants": 44,
          "./zlib/gzheader": 47,
          "./zlib/inflate": 49,
          "./zlib/messages": 51,
          "./zlib/zstream": 53
        }],
        41: [function(e, a, l) {
          var t = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
          l.assign = function(u) {
            for (var h = Array.prototype.slice.call(arguments, 1); h.length;) {
              var v = h.shift();
              if (v) {
                if (typeof v != "object") throw new TypeError(v + "must be non-object");
                for (var b in v) v.hasOwnProperty(b) && (u[b] = v[b])
              }
            }
            return u
          }, l.shrinkBuf = function(u, h) {
            return u.length === h ? u : u.subarray ? u.subarray(0, h) : (u.length = h, u)
          };
          var i = {
              arraySet: function(u, h, v, b, y) {
                if (h.subarray && u.subarray) u.set(h.subarray(v, v + b), y);
                else
                  for (var d = 0; d < b; d++) u[y + d] = h[v + d]
              },
              flattenChunks: function(u) {
                var h, v, b, y, d, g;
                for (h = b = 0, v = u.length; h < v; h++) b += u[h].length;
                for (g = new Uint8Array(b), h = y = 0, v = u.length; h < v; h++) d = u[h], g.set(d, y), y += d.length;
                return g
              }
            },
            s = {
              arraySet: function(u, h, v, b, y) {
                for (var d = 0; d < b; d++) u[y + d] = h[v + d]
              },
              flattenChunks: function(u) {
                return [].concat.apply([], u)
              }
            };
          l.setTyped = function(u) {
            u ? (l.Buf8 = Uint8Array, l.Buf16 = Uint16Array, l.Buf32 = Int32Array, l.assign(l, i)) : (l.Buf8 = Array, l.Buf16 = Array, l.Buf32 = Array, l.assign(l, s))
          }, l.setTyped(t)
        }, {}],
        42: [function(e, a, l) {
          var t = e("./common"),
            i = !0,
            s = !0;
          try {
            String.fromCharCode.apply(null, [0])
          } catch {
            i = !1
          }
          try {
            String.fromCharCode.apply(null, new Uint8Array(1))
          } catch {
            s = !1
          }
          for (var u = new t.Buf8(256), h = 0; h < 256; h++) u[h] = 252 <= h ? 6 : 248 <= h ? 5 : 240 <= h ? 4 : 224 <= h ? 3 : 192 <= h ? 2 : 1;

          function v(b, y) {
            if (y < 65537 && (b.subarray && s || !b.subarray && i)) return String.fromCharCode.apply(null, t.shrinkBuf(b, y));
            for (var d = "", g = 0; g < y; g++) d += String.fromCharCode(b[g]);
            return d
          }
          u[254] = u[254] = 1, l.string2buf = function(b) {
            var y, d, g, f, m, p = b.length,
              w = 0;
            for (f = 0; f < p; f++)(64512 & (d = b.charCodeAt(f))) == 55296 && f + 1 < p && (64512 & (g = b.charCodeAt(f + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (g - 56320), f++), w += d < 128 ? 1 : d < 2048 ? 2 : d < 65536 ? 3 : 4;
            for (y = new t.Buf8(w), f = m = 0; m < w; f++)(64512 & (d = b.charCodeAt(f))) == 55296 && f + 1 < p && (64512 & (g = b.charCodeAt(f + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (g - 56320), f++), d < 128 ? y[m++] = d : (d < 2048 ? y[m++] = 192 | d >>> 6 : (d < 65536 ? y[m++] = 224 | d >>> 12 : (y[m++] = 240 | d >>> 18, y[m++] = 128 | d >>> 12 & 63), y[m++] = 128 | d >>> 6 & 63), y[m++] = 128 | 63 & d);
            return y
          }, l.buf2binstring = function(b) {
            return v(b, b.length)
          }, l.binstring2buf = function(b) {
            for (var y = new t.Buf8(b.length), d = 0, g = y.length; d < g; d++) y[d] = b.charCodeAt(d);
            return y
          }, l.buf2string = function(b, y) {
            var d, g, f, m, p = y || b.length,
              w = new Array(2 * p);
            for (d = g = 0; d < p;)
              if ((f = b[d++]) < 128) w[g++] = f;
              else if (4 < (m = u[f])) w[g++] = 65533, d += m - 1;
            else {
              for (f &= m === 2 ? 31 : m === 3 ? 15 : 7; 1 < m && d < p;) f = f << 6 | 63 & b[d++], m--;
              1 < m ? w[g++] = 65533 : f < 65536 ? w[g++] = f : (f -= 65536, w[g++] = 55296 | f >> 10 & 1023, w[g++] = 56320 | 1023 & f)
            }
            return v(w, g)
          }, l.utf8border = function(b, y) {
            var d;
            for ((y = y || b.length) > b.length && (y = b.length), d = y - 1; 0 <= d && (192 & b[d]) == 128;) d--;
            return d < 0 || d === 0 ? y : d + u[b[d]] > y ? d : y
          }
        }, {
          "./common": 41
        }],
        43: [function(e, a, l) {
          a.exports = function(t, i, s, u) {
            for (var h = 65535 & t | 0, v = t >>> 16 & 65535 | 0, b = 0; s !== 0;) {
              for (s -= b = 2e3 < s ? 2e3 : s; v = v + (h = h + i[u++] | 0) | 0, --b;);
              h %= 65521, v %= 65521
            }
            return h | v << 16 | 0
          }
        }, {}],
        44: [function(e, a, l) {
          a.exports = {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_TREES: 6,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_BUF_ERROR: -5,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            Z_BINARY: 0,
            Z_TEXT: 1,
            Z_UNKNOWN: 2,
            Z_DEFLATED: 8
          }
        }, {}],
        45: [function(e, a, l) {
          var t = (function() {
            for (var i, s = [], u = 0; u < 256; u++) {
              i = u;
              for (var h = 0; h < 8; h++) i = 1 & i ? 3988292384 ^ i >>> 1 : i >>> 1;
              s[u] = i
            }
            return s
          })();
          a.exports = function(i, s, u, h) {
            var v = t,
              b = h + u;
            i ^= -1;
            for (var y = h; y < b; y++) i = i >>> 8 ^ v[255 & (i ^ s[y])];
            return -1 ^ i
          }
        }, {}],
        46: [function(e, a, l) {
          var t, i = e("../utils/common"),
            s = e("./trees"),
            u = e("./adler32"),
            h = e("./crc32"),
            v = e("./messages"),
            b = 0,
            y = 4,
            d = 0,
            g = -2,
            f = -1,
            m = 4,
            p = 2,
            w = 8,
            A = 9,
            x = 286,
            C = 30,
            R = 19,
            k = 2 * x + 1,
            E = 15,
            I = 3,
            O = 258,
            H = O + I + 1,
            T = 42,
            D = 113,
            c = 1,
            N = 2,
            K = 3,
            $ = 4;

          function ee(o, B) {
            return o.msg = v[B], B
          }

          function W(o) {
            return (o << 1) - (4 < o ? 9 : 0)
          }

          function Y(o) {
            for (var B = o.length; 0 <= --B;) o[B] = 0
          }

          function U(o) {
            var B = o.state,
              P = B.pending;
            P > o.avail_out && (P = o.avail_out), P !== 0 && (i.arraySet(o.output, B.pending_buf, B.pending_out, P, o.next_out), o.next_out += P, B.pending_out += P, o.total_out += P, o.avail_out -= P, B.pending -= P, B.pending === 0 && (B.pending_out = 0))
          }

          function F(o, B) {
            s._tr_flush_block(o, 0 <= o.block_start ? o.block_start : -1, o.strstart - o.block_start, B), o.block_start = o.strstart, U(o.strm)
          }

          function J(o, B) {
            o.pending_buf[o.pending++] = B
          }

          function Q(o, B) {
            o.pending_buf[o.pending++] = B >>> 8 & 255, o.pending_buf[o.pending++] = 255 & B
          }

          function G(o, B) {
            var P, S, _ = o.max_chain_length,
              L = o.strstart,
              M = o.prev_length,
              j = o.nice_match,
              z = o.strstart > o.w_size - H ? o.strstart - (o.w_size - H) : 0,
              q = o.window,
              V = o.w_mask,
              Z = o.prev,
              X = o.strstart + O,
              ae = q[L + M - 1],
              ne = q[L + M];
            o.prev_length >= o.good_match && (_ >>= 2), j > o.lookahead && (j = o.lookahead);
            do
              if (q[(P = B) + M] === ne && q[P + M - 1] === ae && q[P] === q[L] && q[++P] === q[L + 1]) {
                L += 2, P++;
                do; while (q[++L] === q[++P] && q[++L] === q[++P] && q[++L] === q[++P] && q[++L] === q[++P] && q[++L] === q[++P] && q[++L] === q[++P] && q[++L] === q[++P] && q[++L] === q[++P] && L < X);
                if (S = O - (X - L), L = X - O, M < S) {
                  if (o.match_start = B, j <= (M = S)) break;
                  ae = q[L + M - 1], ne = q[L + M]
                }
              } while ((B = Z[B & V]) > z && --_ != 0);
            return M <= o.lookahead ? M : o.lookahead
          }

          function ie(o) {
            var B, P, S, _, L, M, j, z, q, V, Z = o.w_size;
            do {
              if (_ = o.window_size - o.lookahead - o.strstart, o.strstart >= Z + (Z - H)) {
                for (i.arraySet(o.window, o.window, Z, Z, 0), o.match_start -= Z, o.strstart -= Z, o.block_start -= Z, B = P = o.hash_size; S = o.head[--B], o.head[B] = Z <= S ? S - Z : 0, --P;);
                for (B = P = Z; S = o.prev[--B], o.prev[B] = Z <= S ? S - Z : 0, --P;);
                _ += Z
              }
              if (o.strm.avail_in === 0) break;
              if (M = o.strm, j = o.window, z = o.strstart + o.lookahead, q = _, V = void 0, V = M.avail_in, q < V && (V = q), P = V === 0 ? 0 : (M.avail_in -= V, i.arraySet(j, M.input, M.next_in, V, z), M.state.wrap === 1 ? M.adler = u(M.adler, j, V, z) : M.state.wrap === 2 && (M.adler = h(M.adler, j, V, z)), M.next_in += V, M.total_in += V, V), o.lookahead += P, o.lookahead + o.insert >= I)
                for (L = o.strstart - o.insert, o.ins_h = o.window[L], o.ins_h = (o.ins_h << o.hash_shift ^ o.window[L + 1]) & o.hash_mask; o.insert && (o.ins_h = (o.ins_h << o.hash_shift ^ o.window[L + I - 1]) & o.hash_mask, o.prev[L & o.w_mask] = o.head[o.ins_h], o.head[o.ins_h] = L, L++, o.insert--, !(o.lookahead + o.insert < I)););
            } while (o.lookahead < H && o.strm.avail_in !== 0)
          }

          function fe(o, B) {
            for (var P, S;;) {
              if (o.lookahead < H) {
                if (ie(o), o.lookahead < H && B === b) return c;
                if (o.lookahead === 0) break
              }
              if (P = 0, o.lookahead >= I && (o.ins_h = (o.ins_h << o.hash_shift ^ o.window[o.strstart + I - 1]) & o.hash_mask, P = o.prev[o.strstart & o.w_mask] = o.head[o.ins_h], o.head[o.ins_h] = o.strstart), P !== 0 && o.strstart - P <= o.w_size - H && (o.match_length = G(o, P)), o.match_length >= I)
                if (S = s._tr_tally(o, o.strstart - o.match_start, o.match_length - I), o.lookahead -= o.match_length, o.match_length <= o.max_lazy_match && o.lookahead >= I) {
                  for (o.match_length--; o.strstart++, o.ins_h = (o.ins_h << o.hash_shift ^ o.window[o.strstart + I - 1]) & o.hash_mask, P = o.prev[o.strstart & o.w_mask] = o.head[o.ins_h], o.head[o.ins_h] = o.strstart, --o.match_length != 0;);
                  o.strstart++
                } else o.strstart += o.match_length, o.match_length = 0, o.ins_h = o.window[o.strstart], o.ins_h = (o.ins_h << o.hash_shift ^ o.window[o.strstart + 1]) & o.hash_mask;
              else S = s._tr_tally(o, 0, o.window[o.strstart]), o.lookahead--, o.strstart++;
              if (S && (F(o, !1), o.strm.avail_out === 0)) return c
            }
            return o.insert = o.strstart < I - 1 ? o.strstart : I - 1, B === y ? (F(o, !0), o.strm.avail_out === 0 ? K : $) : o.last_lit && (F(o, !1), o.strm.avail_out === 0) ? c : N
          }

          function te(o, B) {
            for (var P, S, _;;) {
              if (o.lookahead < H) {
                if (ie(o), o.lookahead < H && B === b) return c;
                if (o.lookahead === 0) break
              }
              if (P = 0, o.lookahead >= I && (o.ins_h = (o.ins_h << o.hash_shift ^ o.window[o.strstart + I - 1]) & o.hash_mask, P = o.prev[o.strstart & o.w_mask] = o.head[o.ins_h], o.head[o.ins_h] = o.strstart), o.prev_length = o.match_length, o.prev_match = o.match_start, o.match_length = I - 1, P !== 0 && o.prev_length < o.max_lazy_match && o.strstart - P <= o.w_size - H && (o.match_length = G(o, P), o.match_length <= 5 && (o.strategy === 1 || o.match_length === I && 4096 < o.strstart - o.match_start) && (o.match_length = I - 1)), o.prev_length >= I && o.match_length <= o.prev_length) {
                for (_ = o.strstart + o.lookahead - I, S = s._tr_tally(o, o.strstart - 1 - o.prev_match, o.prev_length - I), o.lookahead -= o.prev_length - 1, o.prev_length -= 2; ++o.strstart <= _ && (o.ins_h = (o.ins_h << o.hash_shift ^ o.window[o.strstart + I - 1]) & o.hash_mask, P = o.prev[o.strstart & o.w_mask] = o.head[o.ins_h], o.head[o.ins_h] = o.strstart), --o.prev_length != 0;);
                if (o.match_available = 0, o.match_length = I - 1, o.strstart++, S && (F(o, !1), o.strm.avail_out === 0)) return c
              } else if (o.match_available) {
                if ((S = s._tr_tally(o, 0, o.window[o.strstart - 1])) && F(o, !1), o.strstart++, o.lookahead--, o.strm.avail_out === 0) return c
              } else o.match_available = 1, o.strstart++, o.lookahead--
            }
            return o.match_available && (S = s._tr_tally(o, 0, o.window[o.strstart - 1]), o.match_available = 0), o.insert = o.strstart < I - 1 ? o.strstart : I - 1, B === y ? (F(o, !0), o.strm.avail_out === 0 ? K : $) : o.last_lit && (F(o, !1), o.strm.avail_out === 0) ? c : N
          }

          function re(o, B, P, S, _) {
            this.good_length = o, this.max_lazy = B, this.nice_length = P, this.max_chain = S, this.func = _
          }

          function ue() {
            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new i.Buf16(2 * k), this.dyn_dtree = new i.Buf16(2 * (2 * C + 1)), this.bl_tree = new i.Buf16(2 * (2 * R + 1)), Y(this.dyn_ltree), Y(this.dyn_dtree), Y(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new i.Buf16(E + 1), this.heap = new i.Buf16(2 * x + 1), Y(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new i.Buf16(2 * x + 1), Y(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
          }

          function le(o) {
            var B;
            return o && o.state ? (o.total_in = o.total_out = 0, o.data_type = p, (B = o.state).pending = 0, B.pending_out = 0, B.wrap < 0 && (B.wrap = -B.wrap), B.status = B.wrap ? T : D, o.adler = B.wrap === 2 ? 0 : 1, B.last_flush = b, s._tr_init(B), d) : ee(o, g)
          }

          function he(o) {
            var B = le(o);
            return B === d && (function(P) {
              P.window_size = 2 * P.w_size, Y(P.head), P.max_lazy_match = t[P.level].max_lazy, P.good_match = t[P.level].good_length, P.nice_match = t[P.level].nice_length, P.max_chain_length = t[P.level].max_chain, P.strstart = 0, P.block_start = 0, P.lookahead = 0, P.insert = 0, P.match_length = P.prev_length = I - 1, P.match_available = 0, P.ins_h = 0
            })(o.state), B
          }

          function me(o, B, P, S, _, L) {
            if (!o) return g;
            var M = 1;
            if (B === f && (B = 6), S < 0 ? (M = 0, S = -S) : 15 < S && (M = 2, S -= 16), _ < 1 || A < _ || P !== w || S < 8 || 15 < S || B < 0 || 9 < B || L < 0 || m < L) return ee(o, g);
            S === 8 && (S = 9);
            var j = new ue;
            return (o.state = j).strm = o, j.wrap = M, j.gzhead = null, j.w_bits = S, j.w_size = 1 << j.w_bits, j.w_mask = j.w_size - 1, j.hash_bits = _ + 7, j.hash_size = 1 << j.hash_bits, j.hash_mask = j.hash_size - 1, j.hash_shift = ~~((j.hash_bits + I - 1) / I), j.window = new i.Buf8(2 * j.w_size), j.head = new i.Buf16(j.hash_size), j.prev = new i.Buf16(j.w_size), j.lit_bufsize = 1 << _ + 6, j.pending_buf_size = 4 * j.lit_bufsize, j.pending_buf = new i.Buf8(j.pending_buf_size), j.d_buf = 1 * j.lit_bufsize, j.l_buf = 3 * j.lit_bufsize, j.level = B, j.strategy = L, j.method = P, he(o)
          }
          t = [new re(0, 0, 0, 0, function(o, B) {
            var P = 65535;
            for (P > o.pending_buf_size - 5 && (P = o.pending_buf_size - 5);;) {
              if (o.lookahead <= 1) {
                if (ie(o), o.lookahead === 0 && B === b) return c;
                if (o.lookahead === 0) break
              }
              o.strstart += o.lookahead, o.lookahead = 0;
              var S = o.block_start + P;
              if ((o.strstart === 0 || o.strstart >= S) && (o.lookahead = o.strstart - S, o.strstart = S, F(o, !1), o.strm.avail_out === 0) || o.strstart - o.block_start >= o.w_size - H && (F(o, !1), o.strm.avail_out === 0)) return c
            }
            return o.insert = 0, B === y ? (F(o, !0), o.strm.avail_out === 0 ? K : $) : (o.strstart > o.block_start && (F(o, !1), o.strm.avail_out), c)
          }), new re(4, 4, 8, 4, fe), new re(4, 5, 16, 8, fe), new re(4, 6, 32, 32, fe), new re(4, 4, 16, 16, te), new re(8, 16, 32, 32, te), new re(8, 16, 128, 128, te), new re(8, 32, 128, 256, te), new re(32, 128, 258, 1024, te), new re(32, 258, 258, 4096, te)], l.deflateInit = function(o, B) {
            return me(o, B, w, 15, 8, 0)
          }, l.deflateInit2 = me, l.deflateReset = he, l.deflateResetKeep = le, l.deflateSetHeader = function(o, B) {
            return o && o.state ? o.state.wrap !== 2 ? g : (o.state.gzhead = B, d) : g
          }, l.deflate = function(o, B) {
            var P, S, _, L;
            if (!o || !o.state || 5 < B || B < 0) return o ? ee(o, g) : g;
            if (S = o.state, !o.output || !o.input && o.avail_in !== 0 || S.status === 666 && B !== y) return ee(o, o.avail_out === 0 ? -5 : g);
            if (S.strm = o, P = S.last_flush, S.last_flush = B, S.status === T)
              if (S.wrap === 2) o.adler = 0, J(S, 31), J(S, 139), J(S, 8), S.gzhead ? (J(S, (S.gzhead.text ? 1 : 0) + (S.gzhead.hcrc ? 2 : 0) + (S.gzhead.extra ? 4 : 0) + (S.gzhead.name ? 8 : 0) + (S.gzhead.comment ? 16 : 0)), J(S, 255 & S.gzhead.time), J(S, S.gzhead.time >> 8 & 255), J(S, S.gzhead.time >> 16 & 255), J(S, S.gzhead.time >> 24 & 255), J(S, S.level === 9 ? 2 : 2 <= S.strategy || S.level < 2 ? 4 : 0), J(S, 255 & S.gzhead.os), S.gzhead.extra && S.gzhead.extra.length && (J(S, 255 & S.gzhead.extra.length), J(S, S.gzhead.extra.length >> 8 & 255)), S.gzhead.hcrc && (o.adler = h(o.adler, S.pending_buf, S.pending, 0)), S.gzindex = 0, S.status = 69) : (J(S, 0), J(S, 0), J(S, 0), J(S, 0), J(S, 0), J(S, S.level === 9 ? 2 : 2 <= S.strategy || S.level < 2 ? 4 : 0), J(S, 3), S.status = D);
              else {
                var M = w + (S.w_bits - 8 << 4) << 8;
                M |= (2 <= S.strategy || S.level < 2 ? 0 : S.level < 6 ? 1 : S.level === 6 ? 2 : 3) << 6, S.strstart !== 0 && (M |= 32), M += 31 - M % 31, S.status = D, Q(S, M), S.strstart !== 0 && (Q(S, o.adler >>> 16), Q(S, 65535 & o.adler)), o.adler = 1
              } if (S.status === 69)
              if (S.gzhead.extra) {
                for (_ = S.pending; S.gzindex < (65535 & S.gzhead.extra.length) && (S.pending !== S.pending_buf_size || (S.gzhead.hcrc && S.pending > _ && (o.adler = h(o.adler, S.pending_buf, S.pending - _, _)), U(o), _ = S.pending, S.pending !== S.pending_buf_size));) J(S, 255 & S.gzhead.extra[S.gzindex]), S.gzindex++;
                S.gzhead.hcrc && S.pending > _ && (o.adler = h(o.adler, S.pending_buf, S.pending - _, _)), S.gzindex === S.gzhead.extra.length && (S.gzindex = 0, S.status = 73)
              } else S.status = 73;
            if (S.status === 73)
              if (S.gzhead.name) {
                _ = S.pending;
                do {
                  if (S.pending === S.pending_buf_size && (S.gzhead.hcrc && S.pending > _ && (o.adler = h(o.adler, S.pending_buf, S.pending - _, _)), U(o), _ = S.pending, S.pending === S.pending_buf_size)) {
                    L = 1;
                    break
                  }
                  L = S.gzindex < S.gzhead.name.length ? 255 & S.gzhead.name.charCodeAt(S.gzindex++) : 0, J(S, L)
                } while (L !== 0);
                S.gzhead.hcrc && S.pending > _ && (o.adler = h(o.adler, S.pending_buf, S.pending - _, _)), L === 0 && (S.gzindex = 0, S.status = 91)
              } else S.status = 91;
            if (S.status === 91)
              if (S.gzhead.comment) {
                _ = S.pending;
                do {
                  if (S.pending === S.pending_buf_size && (S.gzhead.hcrc && S.pending > _ && (o.adler = h(o.adler, S.pending_buf, S.pending - _, _)), U(o), _ = S.pending, S.pending === S.pending_buf_size)) {
                    L = 1;
                    break
                  }
                  L = S.gzindex < S.gzhead.comment.length ? 255 & S.gzhead.comment.charCodeAt(S.gzindex++) : 0, J(S, L)
                } while (L !== 0);
                S.gzhead.hcrc && S.pending > _ && (o.adler = h(o.adler, S.pending_buf, S.pending - _, _)), L === 0 && (S.status = 103)
              } else S.status = 103;
            if (S.status === 103 && (S.gzhead.hcrc ? (S.pending + 2 > S.pending_buf_size && U(o), S.pending + 2 <= S.pending_buf_size && (J(S, 255 & o.adler), J(S, o.adler >> 8 & 255), o.adler = 0, S.status = D)) : S.status = D), S.pending !== 0) {
              if (U(o), o.avail_out === 0) return S.last_flush = -1, d
            } else if (o.avail_in === 0 && W(B) <= W(P) && B !== y) return ee(o, -5);
            if (S.status === 666 && o.avail_in !== 0) return ee(o, -5);
            if (o.avail_in !== 0 || S.lookahead !== 0 || B !== b && S.status !== 666) {
              var j = S.strategy === 2 ? (function(z, q) {
                for (var V;;) {
                  if (z.lookahead === 0 && (ie(z), z.lookahead === 0)) {
                    if (q === b) return c;
                    break
                  }
                  if (z.match_length = 0, V = s._tr_tally(z, 0, z.window[z.strstart]), z.lookahead--, z.strstart++, V && (F(z, !1), z.strm.avail_out === 0)) return c
                }
                return z.insert = 0, q === y ? (F(z, !0), z.strm.avail_out === 0 ? K : $) : z.last_lit && (F(z, !1), z.strm.avail_out === 0) ? c : N
              })(S, B) : S.strategy === 3 ? (function(z, q) {
                for (var V, Z, X, ae, ne = z.window;;) {
                  if (z.lookahead <= O) {
                    if (ie(z), z.lookahead <= O && q === b) return c;
                    if (z.lookahead === 0) break
                  }
                  if (z.match_length = 0, z.lookahead >= I && 0 < z.strstart && (Z = ne[X = z.strstart - 1]) === ne[++X] && Z === ne[++X] && Z === ne[++X]) {
                    ae = z.strstart + O;
                    do; while (Z === ne[++X] && Z === ne[++X] && Z === ne[++X] && Z === ne[++X] && Z === ne[++X] && Z === ne[++X] && Z === ne[++X] && Z === ne[++X] && X < ae);
                    z.match_length = O - (ae - X), z.match_length > z.lookahead && (z.match_length = z.lookahead)
                  }
                  if (z.match_length >= I ? (V = s._tr_tally(z, 1, z.match_length - I), z.lookahead -= z.match_length, z.strstart += z.match_length, z.match_length = 0) : (V = s._tr_tally(z, 0, z.window[z.strstart]), z.lookahead--, z.strstart++), V && (F(z, !1), z.strm.avail_out === 0)) return c
                }
                return z.insert = 0, q === y ? (F(z, !0), z.strm.avail_out === 0 ? K : $) : z.last_lit && (F(z, !1), z.strm.avail_out === 0) ? c : N
              })(S, B) : t[S.level].func(S, B);
              if (j !== K && j !== $ || (S.status = 666), j === c || j === K) return o.avail_out === 0 && (S.last_flush = -1), d;
              if (j === N && (B === 1 ? s._tr_align(S) : B !== 5 && (s._tr_stored_block(S, 0, 0, !1), B === 3 && (Y(S.head), S.lookahead === 0 && (S.strstart = 0, S.block_start = 0, S.insert = 0))), U(o), o.avail_out === 0)) return S.last_flush = -1, d
            }
            return B !== y ? d : S.wrap <= 0 ? 1 : (S.wrap === 2 ? (J(S, 255 & o.adler), J(S, o.adler >> 8 & 255), J(S, o.adler >> 16 & 255), J(S, o.adler >> 24 & 255), J(S, 255 & o.total_in), J(S, o.total_in >> 8 & 255), J(S, o.total_in >> 16 & 255), J(S, o.total_in >> 24 & 255)) : (Q(S, o.adler >>> 16), Q(S, 65535 & o.adler)), U(o), 0 < S.wrap && (S.wrap = -S.wrap), S.pending !== 0 ? d : 1)
          }, l.deflateEnd = function(o) {
            var B;
            return o && o.state ? (B = o.state.status) !== T && B !== 69 && B !== 73 && B !== 91 && B !== 103 && B !== D && B !== 666 ? ee(o, g) : (o.state = null, B === D ? ee(o, -3) : d) : g
          }, l.deflateSetDictionary = function(o, B) {
            var P, S, _, L, M, j, z, q, V = B.length;
            if (!o || !o.state || (L = (P = o.state).wrap) === 2 || L === 1 && P.status !== T || P.lookahead) return g;
            for (L === 1 && (o.adler = u(o.adler, B, V, 0)), P.wrap = 0, V >= P.w_size && (L === 0 && (Y(P.head), P.strstart = 0, P.block_start = 0, P.insert = 0), q = new i.Buf8(P.w_size), i.arraySet(q, B, V - P.w_size, P.w_size, 0), B = q, V = P.w_size), M = o.avail_in, j = o.next_in, z = o.input, o.avail_in = V, o.next_in = 0, o.input = B, ie(P); P.lookahead >= I;) {
              for (S = P.strstart, _ = P.lookahead - (I - 1); P.ins_h = (P.ins_h << P.hash_shift ^ P.window[S + I - 1]) & P.hash_mask, P.prev[S & P.w_mask] = P.head[P.ins_h], P.head[P.ins_h] = S, S++, --_;);
              P.strstart = S, P.lookahead = I - 1, ie(P)
            }
            return P.strstart += P.lookahead, P.block_start = P.strstart, P.insert = P.lookahead, P.lookahead = 0, P.match_length = P.prev_length = I - 1, P.match_available = 0, o.next_in = j, o.input = z, o.avail_in = M, P.wrap = L, d
          }, l.deflateInfo = "pako deflate (from Nodeca project)"
        }, {
          "../utils/common": 41,
          "./adler32": 43,
          "./crc32": 45,
          "./messages": 51,
          "./trees": 52
        }],
        47: [function(e, a, l) {
          a.exports = function() {
            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
          }
        }, {}],
        48: [function(e, a, l) {
          a.exports = function(t, i) {
            var s, u, h, v, b, y, d, g, f, m, p, w, A, x, C, R, k, E, I, O, H, T, D, c, N;
            s = t.state, u = t.next_in, c = t.input, h = u + (t.avail_in - 5), v = t.next_out, N = t.output, b = v - (i - t.avail_out), y = v + (t.avail_out - 257), d = s.dmax, g = s.wsize, f = s.whave, m = s.wnext, p = s.window, w = s.hold, A = s.bits, x = s.lencode, C = s.distcode, R = (1 << s.lenbits) - 1, k = (1 << s.distbits) - 1;
            e: do {
              A < 15 && (w += c[u++] << A, A += 8, w += c[u++] << A, A += 8), E = x[w & R];
              t: for (;;) {
                if (w >>>= I = E >>> 24, A -= I, (I = E >>> 16 & 255) === 0) N[v++] = 65535 & E;
                else {
                  if (!(16 & I)) {
                    if ((64 & I) == 0) {
                      E = x[(65535 & E) + (w & (1 << I) - 1)];
                      continue t
                    }
                    if (32 & I) {
                      s.mode = 12;
                      break e
                    }
                    t.msg = "invalid literal/length code", s.mode = 30;
                    break e
                  }
                  O = 65535 & E, (I &= 15) && (A < I && (w += c[u++] << A, A += 8), O += w & (1 << I) - 1, w >>>= I, A -= I), A < 15 && (w += c[u++] << A, A += 8, w += c[u++] << A, A += 8), E = C[w & k];
                  r: for (;;) {
                    if (w >>>= I = E >>> 24, A -= I, !(16 & (I = E >>> 16 & 255))) {
                      if ((64 & I) == 0) {
                        E = C[(65535 & E) + (w & (1 << I) - 1)];
                        continue r
                      }
                      t.msg = "invalid distance code", s.mode = 30;
                      break e
                    }
                    if (H = 65535 & E, A < (I &= 15) && (w += c[u++] << A, (A += 8) < I && (w += c[u++] << A, A += 8)), d < (H += w & (1 << I) - 1)) {
                      t.msg = "invalid distance too far back", s.mode = 30;
                      break e
                    }
                    if (w >>>= I, A -= I, (I = v - b) < H) {
                      if (f < (I = H - I) && s.sane) {
                        t.msg = "invalid distance too far back", s.mode = 30;
                        break e
                      }
                      if (D = p, (T = 0) === m) {
                        if (T += g - I, I < O) {
                          for (O -= I; N[v++] = p[T++], --I;);
                          T = v - H, D = N
                        }
                      } else if (m < I) {
                        if (T += g + m - I, (I -= m) < O) {
                          for (O -= I; N[v++] = p[T++], --I;);
                          if (T = 0, m < O) {
                            for (O -= I = m; N[v++] = p[T++], --I;);
                            T = v - H, D = N
                          }
                        }
                      } else if (T += m - I, I < O) {
                        for (O -= I; N[v++] = p[T++], --I;);
                        T = v - H, D = N
                      }
                      for (; 2 < O;) N[v++] = D[T++], N[v++] = D[T++], N[v++] = D[T++], O -= 3;
                      O && (N[v++] = D[T++], 1 < O && (N[v++] = D[T++]))
                    } else {
                      for (T = v - H; N[v++] = N[T++], N[v++] = N[T++], N[v++] = N[T++], 2 < (O -= 3););
                      O && (N[v++] = N[T++], 1 < O && (N[v++] = N[T++]))
                    }
                    break
                  }
                }
                break
              }
            } while (u < h && v < y);
            u -= O = A >> 3, w &= (1 << (A -= O << 3)) - 1, t.next_in = u, t.next_out = v, t.avail_in = u < h ? h - u + 5 : 5 - (u - h), t.avail_out = v < y ? y - v + 257 : 257 - (v - y), s.hold = w, s.bits = A
          }
        }, {}],
        49: [function(e, a, l) {
          var t = e("../utils/common"),
            i = e("./adler32"),
            s = e("./crc32"),
            u = e("./inffast"),
            h = e("./inftrees"),
            v = 1,
            b = 2,
            y = 0,
            d = -2,
            g = 1,
            f = 852,
            m = 592;

          function p(T) {
            return (T >>> 24 & 255) + (T >>> 8 & 65280) + ((65280 & T) << 8) + ((255 & T) << 24)
          }

          function w() {
            this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new t.Buf16(320), this.work = new t.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
          }

          function A(T) {
            var D;
            return T && T.state ? (D = T.state, T.total_in = T.total_out = D.total = 0, T.msg = "", D.wrap && (T.adler = 1 & D.wrap), D.mode = g, D.last = 0, D.havedict = 0, D.dmax = 32768, D.head = null, D.hold = 0, D.bits = 0, D.lencode = D.lendyn = new t.Buf32(f), D.distcode = D.distdyn = new t.Buf32(m), D.sane = 1, D.back = -1, y) : d
          }

          function x(T) {
            var D;
            return T && T.state ? ((D = T.state).wsize = 0, D.whave = 0, D.wnext = 0, A(T)) : d
          }

          function C(T, D) {
            var c, N;
            return T && T.state ? (N = T.state, D < 0 ? (c = 0, D = -D) : (c = 1 + (D >> 4), D < 48 && (D &= 15)), D && (D < 8 || 15 < D) ? d : (N.window !== null && N.wbits !== D && (N.window = null), N.wrap = c, N.wbits = D, x(T))) : d
          }

          function R(T, D) {
            var c, N;
            return T ? (N = new w, (T.state = N).window = null, (c = C(T, D)) !== y && (T.state = null), c) : d
          }
          var k, E, I = !0;

          function O(T) {
            if (I) {
              var D;
              for (k = new t.Buf32(512), E = new t.Buf32(32), D = 0; D < 144;) T.lens[D++] = 8;
              for (; D < 256;) T.lens[D++] = 9;
              for (; D < 280;) T.lens[D++] = 7;
              for (; D < 288;) T.lens[D++] = 8;
              for (h(v, T.lens, 0, 288, k, 0, T.work, {
                  bits: 9
                }), D = 0; D < 32;) T.lens[D++] = 5;
              h(b, T.lens, 0, 32, E, 0, T.work, {
                bits: 5
              }), I = !1
            }
            T.lencode = k, T.lenbits = 9, T.distcode = E, T.distbits = 5
          }

          function H(T, D, c, N) {
            var K, $ = T.state;
            return $.window === null && ($.wsize = 1 << $.wbits, $.wnext = 0, $.whave = 0, $.window = new t.Buf8($.wsize)), N >= $.wsize ? (t.arraySet($.window, D, c - $.wsize, $.wsize, 0), $.wnext = 0, $.whave = $.wsize) : (N < (K = $.wsize - $.wnext) && (K = N), t.arraySet($.window, D, c - N, K, $.wnext), (N -= K) ? (t.arraySet($.window, D, c - N, N, 0), $.wnext = N, $.whave = $.wsize) : ($.wnext += K, $.wnext === $.wsize && ($.wnext = 0), $.whave < $.wsize && ($.whave += K))), 0
          }
          l.inflateReset = x, l.inflateReset2 = C, l.inflateResetKeep = A, l.inflateInit = function(T) {
            return R(T, 15)
          }, l.inflateInit2 = R, l.inflate = function(T, D) {
            var c, N, K, $, ee, W, Y, U, F, J, Q, G, ie, fe, te, re, ue, le, he, me, o, B, P, S, _ = 0,
              L = new t.Buf8(4),
              M = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            if (!T || !T.state || !T.output || !T.input && T.avail_in !== 0) return d;
            (c = T.state).mode === 12 && (c.mode = 13), ee = T.next_out, K = T.output, Y = T.avail_out, $ = T.next_in, N = T.input, W = T.avail_in, U = c.hold, F = c.bits, J = W, Q = Y, B = y;
            e: for (;;) switch (c.mode) {
              case g:
                if (c.wrap === 0) {
                  c.mode = 13;
                  break
                }
                for (; F < 16;) {
                  if (W === 0) break e;
                  W--, U += N[$++] << F, F += 8
                }
                if (2 & c.wrap && U === 35615) {
                  L[c.check = 0] = 255 & U, L[1] = U >>> 8 & 255, c.check = s(c.check, L, 2, 0), F = U = 0, c.mode = 2;
                  break
                }
                if (c.flags = 0, c.head && (c.head.done = !1), !(1 & c.wrap) || (((255 & U) << 8) + (U >> 8)) % 31) {
                  T.msg = "incorrect header check", c.mode = 30;
                  break
                }
                if ((15 & U) != 8) {
                  T.msg = "unknown compression method", c.mode = 30;
                  break
                }
                if (F -= 4, o = 8 + (15 & (U >>>= 4)), c.wbits === 0) c.wbits = o;
                else if (o > c.wbits) {
                  T.msg = "invalid window size", c.mode = 30;
                  break
                }
                c.dmax = 1 << o, T.adler = c.check = 1, c.mode = 512 & U ? 10 : 12, F = U = 0;
                break;
              case 2:
                for (; F < 16;) {
                  if (W === 0) break e;
                  W--, U += N[$++] << F, F += 8
                }
                if (c.flags = U, (255 & c.flags) != 8) {
                  T.msg = "unknown compression method", c.mode = 30;
                  break
                }
                if (57344 & c.flags) {
                  T.msg = "unknown header flags set", c.mode = 30;
                  break
                }
                c.head && (c.head.text = U >> 8 & 1), 512 & c.flags && (L[0] = 255 & U, L[1] = U >>> 8 & 255, c.check = s(c.check, L, 2, 0)), F = U = 0, c.mode = 3;
              case 3:
                for (; F < 32;) {
                  if (W === 0) break e;
                  W--, U += N[$++] << F, F += 8
                }
                c.head && (c.head.time = U), 512 & c.flags && (L[0] = 255 & U, L[1] = U >>> 8 & 255, L[2] = U >>> 16 & 255, L[3] = U >>> 24 & 255, c.check = s(c.check, L, 4, 0)), F = U = 0, c.mode = 4;
              case 4:
                for (; F < 16;) {
                  if (W === 0) break e;
                  W--, U += N[$++] << F, F += 8
                }
                c.head && (c.head.xflags = 255 & U, c.head.os = U >> 8), 512 & c.flags && (L[0] = 255 & U, L[1] = U >>> 8 & 255, c.check = s(c.check, L, 2, 0)), F = U = 0, c.mode = 5;
              case 5:
                if (1024 & c.flags) {
                  for (; F < 16;) {
                    if (W === 0) break e;
                    W--, U += N[$++] << F, F += 8
                  }
                  c.length = U, c.head && (c.head.extra_len = U), 512 & c.flags && (L[0] = 255 & U, L[1] = U >>> 8 & 255, c.check = s(c.check, L, 2, 0)), F = U = 0
                } else c.head && (c.head.extra = null);
                c.mode = 6;
              case 6:
                if (1024 & c.flags && (W < (G = c.length) && (G = W), G && (c.head && (o = c.head.extra_len - c.length, c.head.extra || (c.head.extra = new Array(c.head.extra_len)), t.arraySet(c.head.extra, N, $, G, o)), 512 & c.flags && (c.check = s(c.check, N, G, $)), W -= G, $ += G, c.length -= G), c.length)) break e;
                c.length = 0, c.mode = 7;
              case 7:
                if (2048 & c.flags) {
                  if (W === 0) break e;
                  for (G = 0; o = N[$ + G++], c.head && o && c.length < 65536 && (c.head.name += String.fromCharCode(o)), o && G < W;);
                  if (512 & c.flags && (c.check = s(c.check, N, G, $)), W -= G, $ += G, o) break e
                } else c.head && (c.head.name = null);
                c.length = 0, c.mode = 8;
              case 8:
                if (4096 & c.flags) {
                  if (W === 0) break e;
                  for (G = 0; o = N[$ + G++], c.head && o && c.length < 65536 && (c.head.comment += String.fromCharCode(o)), o && G < W;);
                  if (512 & c.flags && (c.check = s(c.check, N, G, $)), W -= G, $ += G, o) break e
                } else c.head && (c.head.comment = null);
                c.mode = 9;
              case 9:
                if (512 & c.flags) {
                  for (; F < 16;) {
                    if (W === 0) break e;
                    W--, U += N[$++] << F, F += 8
                  }
                  if (U !== (65535 & c.check)) {
                    T.msg = "header crc mismatch", c.mode = 30;
                    break
                  }
                  F = U = 0
                }
                c.head && (c.head.hcrc = c.flags >> 9 & 1, c.head.done = !0), T.adler = c.check = 0, c.mode = 12;
                break;
              case 10:
                for (; F < 32;) {
                  if (W === 0) break e;
                  W--, U += N[$++] << F, F += 8
                }
                T.adler = c.check = p(U), F = U = 0, c.mode = 11;
              case 11:
                if (c.havedict === 0) return T.next_out = ee, T.avail_out = Y, T.next_in = $, T.avail_in = W, c.hold = U, c.bits = F, 2;
                T.adler = c.check = 1, c.mode = 12;
              case 12:
                if (D === 5 || D === 6) break e;
              case 13:
                if (c.last) {
                  U >>>= 7 & F, F -= 7 & F, c.mode = 27;
                  break
                }
                for (; F < 3;) {
                  if (W === 0) break e;
                  W--, U += N[$++] << F, F += 8
                }
                switch (c.last = 1 & U, F -= 1, 3 & (U >>>= 1)) {
                  case 0:
                    c.mode = 14;
                    break;
                  case 1:
                    if (O(c), c.mode = 20, D !== 6) break;
                    U >>>= 2, F -= 2;
                    break e;
                  case 2:
                    c.mode = 17;
                    break;
                  case 3:
                    T.msg = "invalid block type", c.mode = 30
                }
                U >>>= 2, F -= 2;
                break;
              case 14:
                for (U >>>= 7 & F, F -= 7 & F; F < 32;) {
                  if (W === 0) break e;
                  W--, U += N[$++] << F, F += 8
                }
                if ((65535 & U) != (U >>> 16 ^ 65535)) {
                  T.msg = "invalid stored block lengths", c.mode = 30;
                  break
                }
                if (c.length = 65535 & U, F = U = 0, c.mode = 15, D === 6) break e;
              case 15:
                c.mode = 16;
              case 16:
                if (G = c.length) {
                  if (W < G && (G = W), Y < G && (G = Y), G === 0) break e;
                  t.arraySet(K, N, $, G, ee), W -= G, $ += G, Y -= G, ee += G, c.length -= G;
                  break
                }
                c.mode = 12;
                break;
              case 17:
                for (; F < 14;) {
                  if (W === 0) break e;
                  W--, U += N[$++] << F, F += 8
                }
                if (c.nlen = 257 + (31 & U), U >>>= 5, F -= 5, c.ndist = 1 + (31 & U), U >>>= 5, F -= 5, c.ncode = 4 + (15 & U), U >>>= 4, F -= 4, 286 < c.nlen || 30 < c.ndist) {
                  T.msg = "too many length or distance symbols", c.mode = 30;
                  break
                }
                c.have = 0, c.mode = 18;
              case 18:
                for (; c.have < c.ncode;) {
                  for (; F < 3;) {
                    if (W === 0) break e;
                    W--, U += N[$++] << F, F += 8
                  }
                  c.lens[M[c.have++]] = 7 & U, U >>>= 3, F -= 3
                }
                for (; c.have < 19;) c.lens[M[c.have++]] = 0;
                if (c.lencode = c.lendyn, c.lenbits = 7, P = {
                    bits: c.lenbits
                  }, B = h(0, c.lens, 0, 19, c.lencode, 0, c.work, P), c.lenbits = P.bits, B) {
                  T.msg = "invalid code lengths set", c.mode = 30;
                  break
                }
                c.have = 0, c.mode = 19;
              case 19:
                for (; c.have < c.nlen + c.ndist;) {
                  for (; re = (_ = c.lencode[U & (1 << c.lenbits) - 1]) >>> 16 & 255, ue = 65535 & _, !((te = _ >>> 24) <= F);) {
                    if (W === 0) break e;
                    W--, U += N[$++] << F, F += 8
                  }
                  if (ue < 16) U >>>= te, F -= te, c.lens[c.have++] = ue;
                  else {
                    if (ue === 16) {
                      for (S = te + 2; F < S;) {
                        if (W === 0) break e;
                        W--, U += N[$++] << F, F += 8
                      }
                      if (U >>>= te, F -= te, c.have === 0) {
                        T.msg = "invalid bit length repeat", c.mode = 30;
                        break
                      }
                      o = c.lens[c.have - 1], G = 3 + (3 & U), U >>>= 2, F -= 2
                    } else if (ue === 17) {
                      for (S = te + 3; F < S;) {
                        if (W === 0) break e;
                        W--, U += N[$++] << F, F += 8
                      }
                      F -= te, o = 0, G = 3 + (7 & (U >>>= te)), U >>>= 3, F -= 3
                    } else {
                      for (S = te + 7; F < S;) {
                        if (W === 0) break e;
                        W--, U += N[$++] << F, F += 8
                      }
                      F -= te, o = 0, G = 11 + (127 & (U >>>= te)), U >>>= 7, F -= 7
                    }
                    if (c.have + G > c.nlen + c.ndist) {
                      T.msg = "invalid bit length repeat", c.mode = 30;
                      break
                    }
                    for (; G--;) c.lens[c.have++] = o
                  }
                }
                if (c.mode === 30) break;
                if (c.lens[256] === 0) {
                  T.msg = "invalid code -- missing end-of-block", c.mode = 30;
                  break
                }
                if (c.lenbits = 9, P = {
                    bits: c.lenbits
                  }, B = h(v, c.lens, 0, c.nlen, c.lencode, 0, c.work, P), c.lenbits = P.bits, B) {
                  T.msg = "invalid literal/lengths set", c.mode = 30;
                  break
                }
                if (c.distbits = 6, c.distcode = c.distdyn, P = {
                    bits: c.distbits
                  }, B = h(b, c.lens, c.nlen, c.ndist, c.distcode, 0, c.work, P), c.distbits = P.bits, B) {
                  T.msg = "invalid distances set", c.mode = 30;
                  break
                }
                if (c.mode = 20, D === 6) break e;
              case 20:
                c.mode = 21;
              case 21:
                if (6 <= W && 258 <= Y) {
                  T.next_out = ee, T.avail_out = Y, T.next_in = $, T.avail_in = W, c.hold = U, c.bits = F, u(T, Q), ee = T.next_out, K = T.output, Y = T.avail_out, $ = T.next_in, N = T.input, W = T.avail_in, U = c.hold, F = c.bits, c.mode === 12 && (c.back = -1);
                  break
                }
                for (c.back = 0; re = (_ = c.lencode[U & (1 << c.lenbits) - 1]) >>> 16 & 255, ue = 65535 & _, !((te = _ >>> 24) <= F);) {
                  if (W === 0) break e;
                  W--, U += N[$++] << F, F += 8
                }
                if (re && (240 & re) == 0) {
                  for (le = te, he = re, me = ue; re = (_ = c.lencode[me + ((U & (1 << le + he) - 1) >> le)]) >>> 16 & 255, ue = 65535 & _, !(le + (te = _ >>> 24) <= F);) {
                    if (W === 0) break e;
                    W--, U += N[$++] << F, F += 8
                  }
                  U >>>= le, F -= le, c.back += le
                }
                if (U >>>= te, F -= te, c.back += te, c.length = ue, re === 0) {
                  c.mode = 26;
                  break
                }
                if (32 & re) {
                  c.back = -1, c.mode = 12;
                  break
                }
                if (64 & re) {
                  T.msg = "invalid literal/length code", c.mode = 30;
                  break
                }
                c.extra = 15 & re, c.mode = 22;
              case 22:
                if (c.extra) {
                  for (S = c.extra; F < S;) {
                    if (W === 0) break e;
                    W--, U += N[$++] << F, F += 8
                  }
                  c.length += U & (1 << c.extra) - 1, U >>>= c.extra, F -= c.extra, c.back += c.extra
                }
                c.was = c.length, c.mode = 23;
              case 23:
                for (; re = (_ = c.distcode[U & (1 << c.distbits) - 1]) >>> 16 & 255, ue = 65535 & _, !((te = _ >>> 24) <= F);) {
                  if (W === 0) break e;
                  W--, U += N[$++] << F, F += 8
                }
                if ((240 & re) == 0) {
                  for (le = te, he = re, me = ue; re = (_ = c.distcode[me + ((U & (1 << le + he) - 1) >> le)]) >>> 16 & 255, ue = 65535 & _, !(le + (te = _ >>> 24) <= F);) {
                    if (W === 0) break e;
                    W--, U += N[$++] << F, F += 8
                  }
                  U >>>= le, F -= le, c.back += le
                }
                if (U >>>= te, F -= te, c.back += te, 64 & re) {
                  T.msg = "invalid distance code", c.mode = 30;
                  break
                }
                c.offset = ue, c.extra = 15 & re, c.mode = 24;
              case 24:
                if (c.extra) {
                  for (S = c.extra; F < S;) {
                    if (W === 0) break e;
                    W--, U += N[$++] << F, F += 8
                  }
                  c.offset += U & (1 << c.extra) - 1, U >>>= c.extra, F -= c.extra, c.back += c.extra
                }
                if (c.offset > c.dmax) {
                  T.msg = "invalid distance too far back", c.mode = 30;
                  break
                }
                c.mode = 25;
              case 25:
                if (Y === 0) break e;
                if (G = Q - Y, c.offset > G) {
                  if ((G = c.offset - G) > c.whave && c.sane) {
                    T.msg = "invalid distance too far back", c.mode = 30;
                    break
                  }
                  ie = G > c.wnext ? (G -= c.wnext, c.wsize - G) : c.wnext - G, G > c.length && (G = c.length), fe = c.window
                } else fe = K, ie = ee - c.offset, G = c.length;
                for (Y < G && (G = Y), Y -= G, c.length -= G; K[ee++] = fe[ie++], --G;);
                c.length === 0 && (c.mode = 21);
                break;
              case 26:
                if (Y === 0) break e;
                K[ee++] = c.length, Y--, c.mode = 21;
                break;
              case 27:
                if (c.wrap) {
                  for (; F < 32;) {
                    if (W === 0) break e;
                    W--, U |= N[$++] << F, F += 8
                  }
                  if (Q -= Y, T.total_out += Q, c.total += Q, Q && (T.adler = c.check = c.flags ? s(c.check, K, Q, ee - Q) : i(c.check, K, Q, ee - Q)), Q = Y, (c.flags ? U : p(U)) !== c.check) {
                    T.msg = "incorrect data check", c.mode = 30;
                    break
                  }
                  F = U = 0
                }
                c.mode = 28;
              case 28:
                if (c.wrap && c.flags) {
                  for (; F < 32;) {
                    if (W === 0) break e;
                    W--, U += N[$++] << F, F += 8
                  }
                  if (U !== (4294967295 & c.total)) {
                    T.msg = "incorrect length check", c.mode = 30;
                    break
                  }
                  F = U = 0
                }
                c.mode = 29;
              case 29:
                B = 1;
                break e;
              case 30:
                B = -3;
                break e;
              case 31:
                return -4;
              case 32:
              default:
                return d
            }
            return T.next_out = ee, T.avail_out = Y, T.next_in = $, T.avail_in = W, c.hold = U, c.bits = F, (c.wsize || Q !== T.avail_out && c.mode < 30 && (c.mode < 27 || D !== 4)) && H(T, T.output, T.next_out, Q - T.avail_out) ? (c.mode = 31, -4) : (J -= T.avail_in, Q -= T.avail_out, T.total_in += J, T.total_out += Q, c.total += Q, c.wrap && Q && (T.adler = c.check = c.flags ? s(c.check, K, Q, T.next_out - Q) : i(c.check, K, Q, T.next_out - Q)), T.data_type = c.bits + (c.last ? 64 : 0) + (c.mode === 12 ? 128 : 0) + (c.mode === 20 || c.mode === 15 ? 256 : 0), (J == 0 && Q === 0 || D === 4) && B === y && (B = -5), B)
          }, l.inflateEnd = function(T) {
            if (!T || !T.state) return d;
            var D = T.state;
            return D.window && (D.window = null), T.state = null, y
          }, l.inflateGetHeader = function(T, D) {
            var c;
            return T && T.state ? (2 & (c = T.state).wrap) == 0 ? d : ((c.head = D).done = !1, y) : d
          }, l.inflateSetDictionary = function(T, D) {
            var c, N = D.length;
            return T && T.state ? (c = T.state).wrap !== 0 && c.mode !== 11 ? d : c.mode === 11 && i(1, D, N, 0) !== c.check ? -3 : H(T, D, N, N) ? (c.mode = 31, -4) : (c.havedict = 1, y) : d
          }, l.inflateInfo = "pako inflate (from Nodeca project)"
        }, {
          "../utils/common": 41,
          "./adler32": 43,
          "./crc32": 45,
          "./inffast": 48,
          "./inftrees": 50
        }],
        50: [function(e, a, l) {
          var t = e("../utils/common"),
            i = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
            s = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
            u = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
            h = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
          a.exports = function(v, b, y, d, g, f, m, p) {
            var w, A, x, C, R, k, E, I, O, H = p.bits,
              T = 0,
              D = 0,
              c = 0,
              N = 0,
              K = 0,
              $ = 0,
              ee = 0,
              W = 0,
              Y = 0,
              U = 0,
              F = null,
              J = 0,
              Q = new t.Buf16(16),
              G = new t.Buf16(16),
              ie = null,
              fe = 0;
            for (T = 0; T <= 15; T++) Q[T] = 0;
            for (D = 0; D < d; D++) Q[b[y + D]]++;
            for (K = H, N = 15; 1 <= N && Q[N] === 0; N--);
            if (N < K && (K = N), N === 0) return g[f++] = 20971520, g[f++] = 20971520, p.bits = 1, 0;
            for (c = 1; c < N && Q[c] === 0; c++);
            for (K < c && (K = c), T = W = 1; T <= 15; T++)
              if (W <<= 1, (W -= Q[T]) < 0) return -1;
            if (0 < W && (v === 0 || N !== 1)) return -1;
            for (G[1] = 0, T = 1; T < 15; T++) G[T + 1] = G[T] + Q[T];
            for (D = 0; D < d; D++) b[y + D] !== 0 && (m[G[b[y + D]]++] = D);
            if (k = v === 0 ? (F = ie = m, 19) : v === 1 ? (F = i, J -= 257, ie = s, fe -= 257, 256) : (F = u, ie = h, -1), T = c, R = f, ee = D = U = 0, x = -1, C = (Y = 1 << ($ = K)) - 1, v === 1 && 852 < Y || v === 2 && 592 < Y) return 1;
            for (;;) {
              for (E = T - ee, O = m[D] < k ? (I = 0, m[D]) : m[D] > k ? (I = ie[fe + m[D]], F[J + m[D]]) : (I = 96, 0), w = 1 << T - ee, c = A = 1 << $; g[R + (U >> ee) + (A -= w)] = E << 24 | I << 16 | O | 0, A !== 0;);
              for (w = 1 << T - 1; U & w;) w >>= 1;
              if (w !== 0 ? (U &= w - 1, U += w) : U = 0, D++, --Q[T] == 0) {
                if (T === N) break;
                T = b[y + m[D]]
              }
              if (K < T && (U & C) !== x) {
                for (ee === 0 && (ee = K), R += c, W = 1 << ($ = T - ee); $ + ee < N && !((W -= Q[$ + ee]) <= 0);) $++, W <<= 1;
                if (Y += 1 << $, v === 1 && 852 < Y || v === 2 && 592 < Y) return 1;
                g[x = U & C] = K << 24 | $ << 16 | R - f | 0
              }
            }
            return U !== 0 && (g[R + U] = T - ee << 24 | 64 << 16 | 0), p.bits = K, 0
          }
        }, {
          "../utils/common": 41
        }],
        51: [function(e, a, l) {
          a.exports = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version"
          }
        }, {}],
        52: [function(e, a, l) {
          var t = e("../utils/common"),
            i = 0,
            s = 1;

          function u(_) {
            for (var L = _.length; 0 <= --L;) _[L] = 0
          }
          var h = 0,
            v = 29,
            b = 256,
            y = b + 1 + v,
            d = 30,
            g = 19,
            f = 2 * y + 1,
            m = 15,
            p = 16,
            w = 7,
            A = 256,
            x = 16,
            C = 17,
            R = 18,
            k = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
            E = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            I = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
            O = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            H = new Array(2 * (y + 2));
          u(H);
          var T = new Array(2 * d);
          u(T);
          var D = new Array(512);
          u(D);
          var c = new Array(256);
          u(c);
          var N = new Array(v);
          u(N);
          var K, $, ee, W = new Array(d);

          function Y(_, L, M, j, z) {
            this.static_tree = _, this.extra_bits = L, this.extra_base = M, this.elems = j, this.max_length = z, this.has_stree = _ && _.length
          }

          function U(_, L) {
            this.dyn_tree = _, this.max_code = 0, this.stat_desc = L
          }

          function F(_) {
            return _ < 256 ? D[_] : D[256 + (_ >>> 7)]
          }

          function J(_, L) {
            _.pending_buf[_.pending++] = 255 & L, _.pending_buf[_.pending++] = L >>> 8 & 255
          }

          function Q(_, L, M) {
            _.bi_valid > p - M ? (_.bi_buf |= L << _.bi_valid & 65535, J(_, _.bi_buf), _.bi_buf = L >> p - _.bi_valid, _.bi_valid += M - p) : (_.bi_buf |= L << _.bi_valid & 65535, _.bi_valid += M)
          }

          function G(_, L, M) {
            Q(_, M[2 * L], M[2 * L + 1])
          }

          function ie(_, L) {
            for (var M = 0; M |= 1 & _, _ >>>= 1, M <<= 1, 0 < --L;);
            return M >>> 1
          }

          function fe(_, L, M) {
            var j, z, q = new Array(m + 1),
              V = 0;
            for (j = 1; j <= m; j++) q[j] = V = V + M[j - 1] << 1;
            for (z = 0; z <= L; z++) {
              var Z = _[2 * z + 1];
              Z !== 0 && (_[2 * z] = ie(q[Z]++, Z))
            }
          }

          function te(_) {
            var L;
            for (L = 0; L < y; L++) _.dyn_ltree[2 * L] = 0;
            for (L = 0; L < d; L++) _.dyn_dtree[2 * L] = 0;
            for (L = 0; L < g; L++) _.bl_tree[2 * L] = 0;
            _.dyn_ltree[2 * A] = 1, _.opt_len = _.static_len = 0, _.last_lit = _.matches = 0
          }

          function re(_) {
            8 < _.bi_valid ? J(_, _.bi_buf) : 0 < _.bi_valid && (_.pending_buf[_.pending++] = _.bi_buf), _.bi_buf = 0, _.bi_valid = 0
          }

          function ue(_, L, M, j) {
            var z = 2 * L,
              q = 2 * M;
            return _[z] < _[q] || _[z] === _[q] && j[L] <= j[M]
          }

          function le(_, L, M) {
            for (var j = _.heap[M], z = M << 1; z <= _.heap_len && (z < _.heap_len && ue(L, _.heap[z + 1], _.heap[z], _.depth) && z++, !ue(L, j, _.heap[z], _.depth));) _.heap[M] = _.heap[z], M = z, z <<= 1;
            _.heap[M] = j
          }

          function he(_, L, M) {
            var j, z, q, V, Z = 0;
            if (_.last_lit !== 0)
              for (; j = _.pending_buf[_.d_buf + 2 * Z] << 8 | _.pending_buf[_.d_buf + 2 * Z + 1], z = _.pending_buf[_.l_buf + Z], Z++, j === 0 ? G(_, z, L) : (G(_, (q = c[z]) + b + 1, L), (V = k[q]) !== 0 && Q(_, z -= N[q], V), G(_, q = F(--j), M), (V = E[q]) !== 0 && Q(_, j -= W[q], V)), Z < _.last_lit;);
            G(_, A, L)
          }

          function me(_, L) {
            var M, j, z, q = L.dyn_tree,
              V = L.stat_desc.static_tree,
              Z = L.stat_desc.has_stree,
              X = L.stat_desc.elems,
              ae = -1;
            for (_.heap_len = 0, _.heap_max = f, M = 0; M < X; M++) q[2 * M] !== 0 ? (_.heap[++_.heap_len] = ae = M, _.depth[M] = 0) : q[2 * M + 1] = 0;
            for (; _.heap_len < 2;) q[2 * (z = _.heap[++_.heap_len] = ae < 2 ? ++ae : 0)] = 1, _.depth[z] = 0, _.opt_len--, Z && (_.static_len -= V[2 * z + 1]);
            for (L.max_code = ae, M = _.heap_len >> 1; 1 <= M; M--) le(_, q, M);
            for (z = X; M = _.heap[1], _.heap[1] = _.heap[_.heap_len--], le(_, q, 1), j = _.heap[1], _.heap[--_.heap_max] = M, _.heap[--_.heap_max] = j, q[2 * z] = q[2 * M] + q[2 * j], _.depth[z] = (_.depth[M] >= _.depth[j] ? _.depth[M] : _.depth[j]) + 1, q[2 * M + 1] = q[2 * j + 1] = z, _.heap[1] = z++, le(_, q, 1), 2 <= _.heap_len;);
            _.heap[--_.heap_max] = _.heap[1], (function(ne, pe) {
              var ze, ge, Ue, ce, We, it, we = pe.dyn_tree,
                Ft = pe.max_code,
                Lr = pe.stat_desc.static_tree,
                zr = pe.stat_desc.has_stree,
                Ur = pe.stat_desc.extra_bits,
                Ot = pe.stat_desc.extra_base,
                Fe = pe.stat_desc.max_length,
                qe = 0;
              for (ce = 0; ce <= m; ce++) ne.bl_count[ce] = 0;
              for (we[2 * ne.heap[ne.heap_max] + 1] = 0, ze = ne.heap_max + 1; ze < f; ze++) Fe < (ce = we[2 * we[2 * (ge = ne.heap[ze]) + 1] + 1] + 1) && (ce = Fe, qe++), we[2 * ge + 1] = ce, Ft < ge || (ne.bl_count[ce]++, We = 0, Ot <= ge && (We = Ur[ge - Ot]), it = we[2 * ge], ne.opt_len += it * (ce + We), zr && (ne.static_len += it * (Lr[2 * ge + 1] + We)));
              if (qe !== 0) {
                do {
                  for (ce = Fe - 1; ne.bl_count[ce] === 0;) ce--;
                  ne.bl_count[ce]--, ne.bl_count[ce + 1] += 2, ne.bl_count[Fe]--, qe -= 2
                } while (0 < qe);
                for (ce = Fe; ce !== 0; ce--)
                  for (ge = ne.bl_count[ce]; ge !== 0;) Ft < (Ue = ne.heap[--ze]) || (we[2 * Ue + 1] !== ce && (ne.opt_len += (ce - we[2 * Ue + 1]) * we[2 * Ue], we[2 * Ue + 1] = ce), ge--)
              }
            })(_, L), fe(q, ae, _.bl_count)
          }

          function o(_, L, M) {
            var j, z, q = -1,
              V = L[1],
              Z = 0,
              X = 7,
              ae = 4;
            for (V === 0 && (X = 138, ae = 3), L[2 * (M + 1) + 1] = 65535, j = 0; j <= M; j++) z = V, V = L[2 * (j + 1) + 1], ++Z < X && z === V || (Z < ae ? _.bl_tree[2 * z] += Z : z !== 0 ? (z !== q && _.bl_tree[2 * z]++, _.bl_tree[2 * x]++) : Z <= 10 ? _.bl_tree[2 * C]++ : _.bl_tree[2 * R]++, q = z, ae = (Z = 0) === V ? (X = 138, 3) : z === V ? (X = 6, 3) : (X = 7, 4))
          }

          function B(_, L, M) {
            var j, z, q = -1,
              V = L[1],
              Z = 0,
              X = 7,
              ae = 4;
            for (V === 0 && (X = 138, ae = 3), j = 0; j <= M; j++)
              if (z = V, V = L[2 * (j + 1) + 1], !(++Z < X && z === V)) {
                if (Z < ae)
                  for (; G(_, z, _.bl_tree), --Z != 0;);
                else z !== 0 ? (z !== q && (G(_, z, _.bl_tree), Z--), G(_, x, _.bl_tree), Q(_, Z - 3, 2)) : Z <= 10 ? (G(_, C, _.bl_tree), Q(_, Z - 3, 3)) : (G(_, R, _.bl_tree), Q(_, Z - 11, 7));
                q = z, ae = (Z = 0) === V ? (X = 138, 3) : z === V ? (X = 6, 3) : (X = 7, 4)
              }
          }
          u(W);
          var P = !1;

          function S(_, L, M, j) {
            Q(_, (h << 1) + (j ? 1 : 0), 3), (function(z, q, V, Z) {
              re(z), J(z, V), J(z, ~V), t.arraySet(z.pending_buf, z.window, q, V, z.pending), z.pending += V
            })(_, L, M)
          }
          l._tr_init = function(_) {
            P || ((function() {
              var L, M, j, z, q, V = new Array(m + 1);
              for (z = j = 0; z < v - 1; z++)
                for (N[z] = j, L = 0; L < 1 << k[z]; L++) c[j++] = z;
              for (c[j - 1] = z, z = q = 0; z < 16; z++)
                for (W[z] = q, L = 0; L < 1 << E[z]; L++) D[q++] = z;
              for (q >>= 7; z < d; z++)
                for (W[z] = q << 7, L = 0; L < 1 << E[z] - 7; L++) D[256 + q++] = z;
              for (M = 0; M <= m; M++) V[M] = 0;
              for (L = 0; L <= 143;) H[2 * L + 1] = 8, L++, V[8]++;
              for (; L <= 255;) H[2 * L + 1] = 9, L++, V[9]++;
              for (; L <= 279;) H[2 * L + 1] = 7, L++, V[7]++;
              for (; L <= 287;) H[2 * L + 1] = 8, L++, V[8]++;
              for (fe(H, y + 1, V), L = 0; L < d; L++) T[2 * L + 1] = 5, T[2 * L] = ie(L, 5);
              K = new Y(H, k, b + 1, y, m), $ = new Y(T, E, 0, d, m), ee = new Y(new Array(0), I, 0, g, w)
            })(), P = !0), _.l_desc = new U(_.dyn_ltree, K), _.d_desc = new U(_.dyn_dtree, $), _.bl_desc = new U(_.bl_tree, ee), _.bi_buf = 0, _.bi_valid = 0, te(_)
          }, l._tr_stored_block = S, l._tr_flush_block = function(_, L, M, j) {
            var z, q, V = 0;
            0 < _.level ? (_.strm.data_type === 2 && (_.strm.data_type = (function(Z) {
              var X, ae = 4093624447;
              for (X = 0; X <= 31; X++, ae >>>= 1)
                if (1 & ae && Z.dyn_ltree[2 * X] !== 0) return i;
              if (Z.dyn_ltree[18] !== 0 || Z.dyn_ltree[20] !== 0 || Z.dyn_ltree[26] !== 0) return s;
              for (X = 32; X < b; X++)
                if (Z.dyn_ltree[2 * X] !== 0) return s;
              return i
            })(_)), me(_, _.l_desc), me(_, _.d_desc), V = (function(Z) {
              var X;
              for (o(Z, Z.dyn_ltree, Z.l_desc.max_code), o(Z, Z.dyn_dtree, Z.d_desc.max_code), me(Z, Z.bl_desc), X = g - 1; 3 <= X && Z.bl_tree[2 * O[X] + 1] === 0; X--);
              return Z.opt_len += 3 * (X + 1) + 5 + 5 + 4, X
            })(_), z = _.opt_len + 3 + 7 >>> 3, (q = _.static_len + 3 + 7 >>> 3) <= z && (z = q)) : z = q = M + 5, M + 4 <= z && L !== -1 ? S(_, L, M, j) : _.strategy === 4 || q === z ? (Q(_, 2 + (j ? 1 : 0), 3), he(_, H, T)) : (Q(_, 4 + (j ? 1 : 0), 3), (function(Z, X, ae, ne) {
              var pe;
              for (Q(Z, X - 257, 5), Q(Z, ae - 1, 5), Q(Z, ne - 4, 4), pe = 0; pe < ne; pe++) Q(Z, Z.bl_tree[2 * O[pe] + 1], 3);
              B(Z, Z.dyn_ltree, X - 1), B(Z, Z.dyn_dtree, ae - 1)
            })(_, _.l_desc.max_code + 1, _.d_desc.max_code + 1, V + 1), he(_, _.dyn_ltree, _.dyn_dtree)), te(_), j && re(_)
          }, l._tr_tally = function(_, L, M) {
            return _.pending_buf[_.d_buf + 2 * _.last_lit] = L >>> 8 & 255, _.pending_buf[_.d_buf + 2 * _.last_lit + 1] = 255 & L, _.pending_buf[_.l_buf + _.last_lit] = 255 & M, _.last_lit++, L === 0 ? _.dyn_ltree[2 * M]++ : (_.matches++, L--, _.dyn_ltree[2 * (c[M] + b + 1)]++, _.dyn_dtree[2 * F(L)]++), _.last_lit === _.lit_bufsize - 1
          }, l._tr_align = function(_) {
            Q(_, 2, 3), G(_, A, H), (function(L) {
              L.bi_valid === 16 ? (J(L, L.bi_buf), L.bi_buf = 0, L.bi_valid = 0) : 8 <= L.bi_valid && (L.pending_buf[L.pending++] = 255 & L.bi_buf, L.bi_buf >>= 8, L.bi_valid -= 8)
            })(_)
          }
        }, {
          "../utils/common": 41
        }],
        53: [function(e, a, l) {
          a.exports = function() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
          }
        }, {}],
        54: [function(e, a, l) {
          (function(t) {
            (function(i, s) {
              if (!i.setImmediate) {
                var u, h, v, b, y = 1,
                  d = {},
                  g = !1,
                  f = i.document,
                  m = Object.getPrototypeOf && Object.getPrototypeOf(i);
                m = m && m.setTimeout ? m : i, u = {}.toString.call(i.process) === "[object process]" ? function(x) {
                  process.nextTick(function() {
                    w(x)
                  })
                } : (function() {
                  if (i.postMessage && !i.importScripts) {
                    var x = !0,
                      C = i.onmessage;
                    return i.onmessage = function() {
                      x = !1
                    }, i.postMessage("", "*"), i.onmessage = C, x
                  }
                })() ? (b = "setImmediate$" + Math.random() + "$", i.addEventListener ? i.addEventListener("message", A, !1) : i.attachEvent("onmessage", A), function(x) {
                  i.postMessage(b + x, "*")
                }) : i.MessageChannel ? ((v = new MessageChannel).port1.onmessage = function(x) {
                  w(x.data)
                }, function(x) {
                  v.port2.postMessage(x)
                }) : f && "onreadystatechange" in f.createElement("script") ? (h = f.documentElement, function(x) {
                  var C = f.createElement("script");
                  C.onreadystatechange = function() {
                    w(x), C.onreadystatechange = null, h.removeChild(C), C = null
                  }, h.appendChild(C)
                }) : function(x) {
                  setTimeout(w, 0, x)
                }, m.setImmediate = function(x) {
                  typeof x != "function" && (x = new Function("" + x));
                  for (var C = new Array(arguments.length - 1), R = 0; R < C.length; R++) C[R] = arguments[R + 1];
                  var k = {
                    callback: x,
                    args: C
                  };
                  return d[y] = k, u(y), y++
                }, m.clearImmediate = p
              }

              function p(x) {
                delete d[x]
              }

              function w(x) {
                if (g) setTimeout(w, 0, x);
                else {
                  var C = d[x];
                  if (C) {
                    g = !0;
                    try {
                      (function(R) {
                        var k = R.callback,
                          E = R.args;
                        switch (E.length) {
                          case 0:
                            k();
                            break;
                          case 1:
                            k(E[0]);
                            break;
                          case 2:
                            k(E[0], E[1]);
                            break;
                          case 3:
                            k(E[0], E[1], E[2]);
                            break;
                          default:
                            k.apply(s, E)
                        }
                      })(C)
                    } finally {
                      p(x), g = !1
                    }
                  }
                }
              }

              function A(x) {
                x.source === i && typeof x.data == "string" && x.data.indexOf(b) === 0 && w(+x.data.slice(b.length))
              }
            })(typeof self > "u" ? t === void 0 ? this : t : self)
          }).call(this, typeof He < "u" ? He : typeof self < "u" ? self : typeof window < "u" ? window : {})
        }, {}]
      }, {}, [10])(10)
    })
  })(ht)), ht.exports
}
var Li = Ri();
const zi = Ii(Li);

function Ui(n) {
  return !n || n.length < 4 ? null : n[0] === 255 && n[1] === 216 && n[2] === 255 ? {
    extension: "jpg",
    mimeType: "image/jpeg"
  } : n[0] === 137 && n[1] === 80 && n[2] === 78 && n[3] === 71 ? {
    extension: "png",
    mimeType: "image/png"
  } : n.length >= 12 && n[0] === 82 && n[1] === 73 && n[2] === 70 && n[3] === 70 && n[8] === 87 && n[9] === 69 && n[10] === 66 && n[11] === 80 ? {
    extension: "webp",
    mimeType: "image/webp"
  } : null
}

function je(n) {
  return n ? n.replace(/[\\/:*?"<>|]/g, "_").replace(/\s+/g, " ").trim() : "Unknown"
}

function Fi(n, r = !1) {
  switch (n) {
    case "LOW":
    case "HIGH":
      return r ? "mp3" : "m4a";
    default:
      return "flac"
  }
}

function nr(n, r, e, a, l = !1) {
  const t = Fi(e, l),
    i = Number(r.volumeNumber),
    s = Number(r.trackNumber),
    u = n.numberOfVolumes && n.numberOfVolumes > 1 || Number.isFinite(i);
  let h;
  if (u) {
    const b = Number.isFinite(i) && i > 0 ? `${i}`.padStart(2, "0") : "01",
      y = Number.isFinite(s) && s > 0 ? `${s}`.padStart(2, "0") : "00";
    h = `${b}-${y}`
  } else h = Number.isFinite(s) && s > 0 ? `${s}`.padStart(2, "0") : "00";
  return `${[je(a??r.artist?.name??"Unknown Artist"),je(n.title??"Unknown Album"),`${h} ${je(r.title)}`].join(" - ")}.${t}`
}

function Oi(n) {
  const r = n.replace(/\r?\n|\r/g, " ");
  return /[",]/.test(r) ? `"${r.replace(/"/g,'""')}"` : r
}
async function Pi(n, r) {
  const e = ["Index", "Title", "Artist", "Album", "Duration", "FLAC URL"],
    a = [];
  for (const [l, t] of n.entries()) {
    const i = await Te.getTrackStreamUrl(t.id, r);
    a.push([`${l+1}`, t.title ?? "", t.artist?.name ?? "", t.album?.title ?? "", Te.formatDuration(t.duration ?? 0), i])
  }
  return [e, ...a].map(l => l.map(t => Oi(String(t ?? ""))).join(",")).join(`
`)
}

function ir(n, r) {
  const e = URL.createObjectURL(n),
    a = document.createElement("a");
  a.href = e, a.download = r, document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(e)
}
async function Ji(n, r, e, a, l) {
  const {
    album: t,
    tracks: i
  } = await Te.getAlbum(n.id), s = t ?? n, u = i.length;
  e?.onTotalResolved?.(u);
  const h = l?.mode ?? "individual",
    v = h === "zip" && u > 1,
    b = h === "csv",
    y = l?.convertAacToMp3 ?? !1,
    d = l?.downloadCoverSeperately ?? !1,
    g = je(a ?? s.artist?.name ?? "Unknown Artist"),
    f = je(s.title ?? "Unknown Album");
  if (b) {
    let p = 0;
    for (const x of i) p += 1, e?.onTrackDownloaded?.(p, u, x);
    const w = await Pi(i, r),
      A = new Blob([w], {
        type: "text/csv;charset=utf-8;"
      });
    ir(A, `${g} - ${f}.csv`);
    return
  }
  if (v) {
    const p = new zi;
    let w = 0;
    if (d && s.cover) try {
      console.log("[ZIP Cover Download] Fetching cover for album...");
      const x = ["1280", "640", "320"];
      let C = !1;
      for (const R of x) {
        if (C) break;
        const k = Te.getCoverUrl(s.cover, R);
        console.log(`[ZIP Cover Download] Attempting size ${R}:`, k);
        const E = [{
          name: "with-headers",
          options: {
            method: "GET",
            headers: {
              Accept: "image/jpeg,image/jpg,image/png,image/*",
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            },
            signal: AbortSignal.timeout(1e4)
          }
        }, {
          name: "simple",
          options: {
            method: "GET",
            signal: AbortSignal.timeout(1e4)
          }
        }];
        for (const I of E) {
          if (C) break;
          console.log(`[ZIP Cover Download] Trying strategy: ${I.name}`);
          try {
            const O = await fetch(k, I.options);
            if (console.log(`[ZIP Cover Download] Response status: ${O.status}, Content-Length: ${O.headers.get("Content-Length")}`), !O.ok) {
              console.warn(`[ZIP Cover Download] Failed with status ${O.status} for size ${R}`);
              continue
            }
            const H = O.headers.get("Content-Type"),
              T = O.headers.get("Content-Length");
            if (T && parseInt(T, 10) === 0) {
              console.warn(`[ZIP Cover Download] Content-Length is 0 for size ${R}`);
              continue
            }
            if (H && !H.startsWith("image/")) {
              console.warn(`[ZIP Cover Download] Invalid content type: ${H}`);
              continue
            }
            const D = await O.arrayBuffer();
            if (!D || D.byteLength === 0) {
              console.warn(`[ZIP Cover Download] Empty array buffer for size ${R}`);
              continue
            }
            const c = new Uint8Array(D);
            console.log(`[ZIP Cover Download] Received ${c.length} bytes`);
            const N = Ui(c);
            if (!N) {
              console.warn(`[ZIP Cover Download] Unknown image format for size ${R}`);
              continue
            }
            const K = `cover.${N.extension}`;
            p.file(K, c, {
              binary: !0,
              compression: "DEFLATE",
              compressionOptions: {
                level: 6
              }
            }), C = !0, console.log(`[ZIP Cover Download] Successfully added cover to ZIP (${R}x${R}, format: ${N.extension}, strategy: ${I.name})`);
            break
          } catch (O) {
            console.warn(`[ZIP Cover Download] Failed at size ${R} with strategy ${I.name}:`, O)
          }
        }
      }
      C || console.warn("[ZIP Cover Download] All attempts failed")
    } catch (x) {
      console.warn("Failed to download cover for ZIP:", x)
    }
    for (const x of i) {
      const C = nr(s, x, r, a, y),
        {
          blob: R
        } = await Te.fetchTrackBlob(x.id, r, C, {
          ffmpegAutoTriggered: !1,
          convertAacToMp3: y
        });
      p.file(C, R), w += 1, e?.onTrackDownloaded?.(w, u, x)
    }
    const A = await p.generateAsync({
      type: "blob",
      compression: "DEFLATE",
      compressionOptions: {
        level: 6
      }
    });
    ir(A, `${g} - ${f}.zip`);
    return
  }
  let m = 0;
  for (const p of i) {
    const w = nr(s, p, r, a, y);
    await Te.downloadTrack(p.id, r, w, {
      convertAacToMp3: y,
      downloadCoverSeperately: d
    }), m += 1, e?.onTrackDownloaded?.(m, u, p)
  }
}
export {
  ei as A, Wi as B, Pi as C, Yi as D, je as E, Rr as I, zi as J, Ki as X, $e as a, Nn as b, Gi as c, Ji as d, Rn as e, He as f, Fi as g, Ii as h, Cn as i, Hi as j, Mn as k, Te as l, mt as m, qi as n, Vi as o, Le as p, Qi as q, jn as r, It as s, er as t, Sr as u, vi as v, Bn as w, ji as x, Zi as y, $i as z
};