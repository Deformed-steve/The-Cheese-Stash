var ut = Array.isArray,
  gn = Array.prototype.indexOf,
  bn = Array.from,
  Je = Object.defineProperty,
  xe = Object.getOwnPropertyDescriptor,
  wn = Object.getOwnPropertyDescriptors,
  mn = Object.prototype,
  En = Array.prototype,
  Rt = Object.getPrototypeOf,
  wt = Object.isExtensible;

function Yr(e) {
  return typeof e == "function"
}
const Q = () => {};

function Hr(e) {
  return e()
}

function Ct(e) {
  for (var t = 0; t < e.length; t++) e[t]()
}

function Dt() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s
  });
  return {
    promise: n,
    resolve: e,
    reject: t
  }
}

function Ur(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n
}
const k = 2,
  ot = 4,
  He = 8,
  oe = 16,
  $ = 32,
  fe = 64,
  ft = 128,
  P = 256,
  qe = 512,
  E = 1024,
  I = 2048,
  ne = 4096,
  te = 8192,
  ge = 16384,
  ct = 32768,
  Ue = 65536,
  mt = 1 << 17,
  Pt = 1 << 18,
  be = 1 << 19,
  It = 1 << 20,
  Qe = 1 << 21,
  Be = 1 << 22,
  ie = 1 << 23,
  ae = Symbol("$state"),
  Br = Symbol("legacy props"),
  $r = Symbol(""),
  Se = new class extends Error {
    name = "StaleReactionError";
    message = "The reaction that called `getAbortSignal()` was re-run or destroyed"
  },
  Gr = 1,
  $e = 3,
  we = 8;

function me(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}

function Tn() {
  throw new Error("https://svelte.dev/e/async_derived_orphan")
}

function An(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function xn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function Sn(e) {
  throw new Error("https://svelte.dev/e/effect_orphan")
}

function kn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function Nn() {
  throw new Error("https://svelte.dev/e/get_abort_signal_outside_reaction")
}

function On() {
  throw new Error("https://svelte.dev/e/hydration_failed")
}

function Mt(e) {
  throw new Error("https://svelte.dev/e/lifecycle_legacy_only")
}

function zr(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value")
}

function Rn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function Cn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function Dn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}

function Pn() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")
}
const Kr = 1,
  Xr = 2,
  Zr = 4,
  Jr = 8,
  Qr = 16,
  es = 1,
  ts = 2,
  ns = 4,
  rs = 8,
  ss = 16,
  is = 4,
  In = 1,
  Mn = 2,
  _t = "[",
  Lt = "[!",
  Ft = "]",
  ve = {},
  m = Symbol(),
  as = "http://www.w3.org/1999/xhtml",
  ls = "http://www.w3.org/2000/svg",
  us = "@attach";

function We(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch")
}

function os() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value")
}

function Ln() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")
}
let b = !1;

function X(e) {
  b = e
}
let y;

function N(e) {
  if (e === null) throw We(), ve;
  return y = e
}

function dt() {
  return N(j(y))
}

function fs(e) {
  if (b) {
    if (j(y) !== null) throw We(), ve;
    y = e
  }
}

function Fn(e = 1) {
  if (b) {
    for (var t = e, n = y; t--;) n = j(n);
    y = n
  }
}

function jn(e = !0) {
  for (var t = 0, n = y;;) {
    if (n.nodeType === we) {
      var r = n.data;
      if (r === Ft) {
        if (t === 0) return n;
        t -= 1
      } else(r === _t || r === Lt) && (t += 1)
    }
    var s = j(n);
    e && n.remove(), n = s
  }
}

function cs(e) {
  if (!e || e.nodeType !== we) throw We(), ve;
  return e.data
}

function jt(e) {
  return e === this.v
}

function qt(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function"
}

function _s(e, t) {
  return e !== t
}

function Vt(e) {
  return !qt(e, this.v)
}
let Ce = !1;

function ds() {
  Ce = !0
}
let g = null;

function pe(e) {
  g = e
}

function qn(e) {
  return Ge().get(e)
}

function Vn(e, t) {
  return Ge().set(e, t), t
}

function Yn(e) {
  return Ge().has(e)
}

function Hn() {
  return Ge()
}

function Un(e, t = !1, n) {
  g = {
    p: g,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Ce && !t ? {
      s: null,
      u: null,
      $: []
    } : null
  }
}

function Bn(e) {
  var t = g,
    n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) en(r)
  }
  return g = t.p, {}
}

function De() {
  return !Ce || g !== null && g.l === null
}

function Ge(e) {
  return g === null && me(), g.c ??= new Map($n(g) || void 0)
}

function $n(e) {
  let t = e.p;
  for (; t !== null;) {
    const n = t.c;
    if (n !== null) return n;
    t = t.p
  }
  return null
}
let se = [];

function Yt() {
  var e = se;
  se = [], Ct(e)
}

function Pe(e) {
  if (se.length === 0 && !ke) {
    var t = se;
    queueMicrotask(() => {
      t === se && Yt()
    })
  }
  se.push(e)
}

function Wn() {
  for (; se.length > 0;) Yt()
}
const Gn = new WeakMap;

function Ht(e) {
  var t = v;
  if (t === null) return h.f |= ie, e;
  if ((t.f & ct) === 0) {
    if ((t.f & ft) === 0) throw !t.parent && e instanceof Error && Ut(e), e;
    t.b.error(e)
  } else ye(e, t)
}

function ye(e, t) {
  for (; t !== null;) {
    if ((t.f & ft) !== 0) try {
      t.b.error(e);
      return
    } catch (n) {
      e = n
    }
    t = t.parent
  }
  throw e instanceof Error && Ut(e), e
}

function Ut(e) {
  const t = Gn.get(e);
  t && (Je(e, "message", {
    value: t.message
  }), Je(e, "stack", {
    value: t.stack
  }))
}
const Fe = new Set;
let w = null,
  Ze = null,
  et = new Set,
  q = [],
  ze = null,
  tt = !1,
  ke = !1;
class D {
  current = new Map;
  #r = new Map;
  #t = new Set;
  #u = 0;
  #i = null;
  #o = [];
  #s = [];
  #n = [];
  #e = [];
  #a = [];
  #f = [];
  skipped_effects = new Set;
  process(t) {
    q = [], Ze = null;
    var n = D.apply(this);
    for (const i of t) this.#c(i);
    if (this.#u === 0) {
      this.#_();
      var r = this.#s,
        s = this.#n;
      this.#s = [], this.#n = [], this.#e = [], Ze = this, w = null, Et(r), Et(s), this.#i?.resolve()
    } else this.#l(this.#s), this.#l(this.#n), this.#l(this.#e);
    n();
    for (const i of this.#o) Re(i);
    this.#o = []
  }
  #c(t) {
    t.f ^= E;
    for (var n = t.first; n !== null;) {
      var r = n.f,
        s = (r & ($ | fe)) !== 0,
        i = s && (r & E) !== 0,
        l = i || (r & te) !== 0 || this.skipped_effects.has(n);
      if (!l && n.fn !== null) {
        s ? n.f ^= E : (r & ot) !== 0 ? this.#n.push(n) : (r & E) === 0 && ((r & Be) !== 0 && n.b?.is_pending() ? this.#o.push(n) : Xe(n) && ((n.f & oe) !== 0 && this.#e.push(n), Re(n)));
        var u = n.first;
        if (u !== null) {
          n = u;
          continue
        }
      }
      var a = n.parent;
      for (n = n.next; n === null && a !== null;) n = a.next, a = a.parent
    }
  }
  #l(t) {
    for (const n of t)((n.f & I) !== 0 ? this.#a : this.#f).push(n), x(n, E);
    t.length = 0
  }
  capture(t, n) {
    this.#r.has(t) || this.#r.set(t, n), this.current.set(t, t.v)
  }
  activate() {
    w = this
  }
  deactivate() {
    w = null, Ze = null;
    for (const t of et)
      if (et.delete(t), t(), w !== null) break
  }
  flush() {
    if (q.length > 0) {
      if (this.activate(), nt(), w !== null && w !== this) return
    } else this.#u === 0 && this.#_();
    this.deactivate()
  }
  #_() {
    for (const t of this.#t) t();
    if (this.#t.clear(), Fe.size > 1) {
      this.#r.clear();
      let t = !0;
      for (const n of Fe) {
        if (n === this) {
          t = !1;
          continue
        }
        for (const [r, s] of this.current) {
          if (n.current.has(r))
            if (t) n.current.set(r, s);
            else continue;
          $t(r)
        }
        if (q.length > 0) {
          w = n;
          const r = D.apply(n);
          for (const s of q) n.#c(s);
          q = [], r()
        }
      }
      w = null
    }
    Fe.delete(this)
  }
  increment() {
    this.#u += 1
  }
  decrement() {
    if (this.#u -= 1, this.#u === 0) {
      for (const t of this.#a) x(t, I), ue(t);
      for (const t of this.#f) x(t, ne), ue(t);
      this.flush()
    } else this.deactivate()
  }
  add_callback(t) {
    this.#t.add(t)
  }
  settled() {
    return (this.#i ??= Dt()).promise
  }
  static ensure() {
    if (w === null) {
      const t = w = new D;
      Fe.add(w), ke || D.enqueue(() => {
        w === t && t.flush()
      })
    }
    return w
  }
  static enqueue(t) {
    Pe(t)
  }
  static apply(t) {
    return Q
  }
}

function Bt(e) {
  var t = ke;
  ke = !0;
  try {
    var n;
    for (e && (w !== null && nt(), n = e());;) {
      if (Wn(), q.length === 0 && (w?.flush(), q.length === 0)) return ze = null, n;
      nt()
    }
  } finally {
    ke = t
  }
}

function nt() {
  var e = he;
  tt = !0;
  try {
    var t = 0;
    for (St(!0); q.length > 0;) {
      var n = D.ensure();
      if (t++ > 1e3) {
        var r, s;
        zn()
      }
      n.process(q), ee.clear()
    }
  } finally {
    tt = !1, St(e), ze = null
  }
}

function zn() {
  try {
    kn()
  } catch (e) {
    ye(e, ze)
  }
}
let re = null;

function Et(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t;) {
      var r = e[n++];
      if ((r.f & (ge | te)) === 0 && Xe(r) && (re = [], Re(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? rn(r) : r.fn = null), re?.length > 0)) {
        ee.clear();
        for (const s of re) Re(s);
        re = []
      }
    }
    re = null
  }
}

function $t(e) {
  if (e.reactions !== null)
    for (const t of e.reactions) {
      const n = t.f;
      (n & k) !== 0 ? $t(t) : (n & (Be | oe)) !== 0 && (x(t, I), ue(t))
    }
}

function ue(e) {
  for (var t = ze = e; t.parent !== null;) {
    t = t.parent;
    var n = t.f;
    if (tt && t === v && (n & oe) !== 0) return;
    if ((n & (fe | $)) !== 0) {
      if ((n & E) === 0) return;
      t.f ^= E
    }
  }
  q.push(t)
}

function Kn(e) {
  let t = 0,
    n = Ie(0),
    r;
  return () => {
    or() && (J(n), dr(() => (t === 0 && (r = Me(() => e(() => Ne(n)))), t += 1, () => {
      Pe(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Ne(n))
      })
    })))
  }
}
var Xn = Ue | be | ft;

function Zn(e, t, n) {
  new Jn(e, t, n)
}
class Jn {
  parent;
  #r = !1;
  #t;
  #u = b ? y : null;
  #i;
  #o;
  #s;
  #n = null;
  #e = null;
  #a = null;
  #f = null;
  #c = 0;
  #l = 0;
  #_ = !1;
  #d = null;
  #y = () => {
    this.#d && Ve(this.#d, this.#c)
  };
  #g = Kn(() => (this.#d = Ie(this.#c), () => {
    this.#d = null
  }));
  constructor(t, n, r) {
    this.#t = t, this.#i = n, this.#o = r, this.parent = v.b, this.#r = !!this.#i.pending, this.#s = yt(() => {
      if (v.b = this, b) {
        const s = this.#u;
        dt(), s.nodeType === we && s.data === Lt ? this.#w() : this.#b()
      } else {
        try {
          this.#n = z(() => r(this.#t))
        } catch (s) {
          this.error(s)
        }
        this.#l > 0 ? this.#v() : this.#r = !1
      }
    }, Xn), b && (this.#t = y)
  }
  #b() {
    try {
      this.#n = z(() => this.#o(this.#t))
    } catch (t) {
      this.error(t)
    }
    this.#r = !1
  }
  #w() {
    const t = this.#i.pending;
    t && (this.#e = z(() => t(this.#t)), D.enqueue(() => {
      this.#n = this.#h(() => (D.ensure(), z(() => this.#o(this.#t)))), this.#l > 0 ? this.#v() : (je(this.#e, () => {
        this.#e = null
      }), this.#r = !1)
    }))
  }
  is_pending() {
    return this.#r || !!this.parent && this.parent.is_pending()
  }
  has_pending_snippet() {
    return !!this.#i.pending
  }
  #h(t) {
    var n = v,
      r = h,
      s = g;
    Y(this.#s), S(this.#s), pe(this.#s.ctx);
    try {
      return t()
    } catch (i) {
      return Ht(i), null
    } finally {
      Y(n), S(r), pe(s)
    }
  }
  #v() {
    const t = this.#i.pending;
    this.#n !== null && (this.#f = document.createDocumentFragment(), Qn(this.#n, this.#f)), this.#e === null && (this.#e = z(() => t(this.#t)))
  }
  #p(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#p(t);
      return
    }
    this.#l += t, this.#l === 0 && (this.#r = !1, this.#e && je(this.#e, () => {
      this.#e = null
    }), this.#f && (this.#t.before(this.#f), this.#f = null))
  }
  update_pending_count(t) {
    this.#p(t), this.#c += t, et.add(this.#y)
  }
  get_effect_pending() {
    return this.#g(), J(this.#d)
  }
  error(t) {
    var n = this.#i.onerror;
    let r = this.#i.failed;
    if (this.#_ || !n && !r) throw t;
    this.#n && (L(this.#n), this.#n = null), this.#e && (L(this.#e), this.#e = null), this.#a && (L(this.#a), this.#a = null), b && (N(this.#u), Fn(), N(jn()));
    var s = !1,
      i = !1;
    const l = () => {
      if (s) {
        Ln();
        return
      }
      s = !0, i && Pn(), D.ensure(), this.#c = 0, this.#a !== null && je(this.#a, () => {
        this.#a = null
      }), this.#r = this.has_pending_snippet(), this.#n = this.#h(() => (this.#_ = !1, z(() => this.#o(this.#t)))), this.#l > 0 ? this.#v() : this.#r = !1
    };
    var u = h;
    try {
      S(null), i = !0, n?.(t, l), i = !1
    } catch (a) {
      ye(a, this.#s && this.#s.parent)
    } finally {
      S(u)
    }
    r && Pe(() => {
      this.#a = this.#h(() => {
        this.#_ = !0;
        try {
          return z(() => {
            r(this.#t, () => t, () => l)
          })
        } catch (a) {
          return ye(a, this.#s.parent), null
        } finally {
          this.#_ = !1
        }
      })
    })
  }
}

function Qn(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null;) {
    var s = n === r ? null : j(n);
    t.append(n), n = s
  }
}

function er(e, t, n) {
  const r = De() ? ht : rr;
  if (t.length === 0) {
    n(e.map(r));
    return
  }
  var s = w,
    i = v,
    l = tr(),
    u = b;
  Promise.all(t.map(a => nr(a))).then(a => {
    s?.activate(), l();
    try {
      n([...e.map(r), ...a])
    } catch (o) {
      (i.f & ge) === 0 && ye(o, i)
    }
    u && X(!1), s?.deactivate(), Wt()
  }).catch(a => {
    ye(a, i)
  })
}

function tr() {
  var e = v,
    t = h,
    n = g,
    r = w,
    s = b;
  if (s) var i = y;
  return function() {
    Y(e), S(t), pe(n), r?.activate(), s && (X(!0), N(i))
  }
}

function Wt() {
  Y(null), S(null), pe(null)
}

function ht(e) {
  var t = k | I,
    n = h !== null && (h.f & k) !== 0 ? h : null;
  return v === null || n !== null && (n.f & P) !== 0 ? t |= P : v.f |= be, {
    ctx: g,
    deps: null,
    effects: null,
    equals: jt,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: m,
    wv: 0,
    parent: n ?? v,
    ac: null
  }
}

function nr(e, t) {
  let n = v;
  n === null && Tn();
  var r = n.b,
    s = void 0,
    i = Ie(m),
    l = !h,
    u = new Map;
  return _r(() => {
    var a = Dt();
    s = a.promise;
    try {
      Promise.resolve(e()).then(a.resolve, a.reject)
    } catch (c) {
      a.reject(c)
    }
    var o = w,
      f = r.is_pending();
    l && (r.update_pending_count(1), f || (o.increment(), u.get(o)?.reject(Se), u.set(o, a)));
    const d = (c, _ = void 0) => {
      f || o.activate(), _ ? _ !== Se && (i.f |= ie, Ve(i, _)) : ((i.f & ie) !== 0 && (i.f ^= ie), Ve(i, c)), l && (r.update_pending_count(-1), f || o.decrement()), Wt()
    };
    a.promise.then(d, c => d(null, c || "unknown"))
  }), pt(() => {
    for (const a of u.values()) a.reject(Se)
  }), new Promise(a => {
    function o(f) {
      function d() {
        f === s ? a(i) : o(s)
      }
      f.then(d, d)
    }
    o(s)
  })
}

function hs(e) {
  const t = ht(e);
  return ln(t), t
}

function rr(e) {
  const t = ht(e);
  return t.equals = Vt, t
}

function Gt(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) L(t[n])
  }
}

function sr(e) {
  for (var t = e.parent; t !== null;) {
    if ((t.f & k) === 0) return t;
    t = t.parent
  }
  return null
}

function vt(e) {
  var t, n = v;
  Y(sr(e));
  try {
    Gt(e), t = cn(e)
  } finally {
    Y(n)
  }
  return t
}

function zt(e) {
  var t = vt(e);
  if (e.equals(t) || (e.v = t, e.wv = on()), !Ee) {
    var n = (Z || (e.f & P) !== 0) && e.deps !== null ? ne : E;
    x(e, n)
  }
}
const ee = new Map;

function Ie(e, t) {
  var n = {
    f: 0,
    v: e,
    reactions: null,
    equals: jt,
    rv: 0,
    wv: 0
  };
  return n
}

function G(e, t) {
  const n = Ie(e);
  return ln(n), n
}

function vs(e, t = !1, n = !0) {
  const r = Ie(e);
  return t || (r.equals = Vt), Ce && n && g !== null && g.l !== null && (g.l.s ??= []).push(r), r
}

function K(e, t, n = !1) {
  h !== null && (!M || (h.f & mt) !== 0) && De() && (h.f & (k | oe | Be | mt)) !== 0 && !U?.includes(e) && Dn();
  let r = n ? Te(t) : t;
  return Ve(e, r)
}

function Ve(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Ee ? ee.set(e, t) : ee.set(e, n), e.v = t;
    var r = D.ensure();
    r.capture(e, n), (e.f & k) !== 0 && ((e.f & I) !== 0 && vt(e), x(e, (e.f & P) === 0 ? E : ne)), e.wv = on(), Kt(e, I), De() && v !== null && (v.f & E) !== 0 && (v.f & ($ | fe)) === 0 && (C === null ? yr([e]) : C.push(e))
  }
  return t
}

function ps(e, t = 1) {
  var n = J(e),
    r = t === 1 ? n++ : n--;
  return K(e, n), r
}

function Ne(e) {
  K(e, e.v + 1)
}

function Kt(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = De(), s = n.length, i = 0; i < s; i++) {
      var l = n[i],
        u = l.f;
      if (!(!r && l === v)) {
        var a = (u & I) === 0;
        a && x(l, t), (u & k) !== 0 ? Kt(l, ne) : a && ((u & oe) !== 0 && re !== null && re.push(l), ue(l))
      }
    }
}

function Te(e) {
  if (typeof e != "object" || e === null || ae in e) return e;
  const t = Rt(e);
  if (t !== mn && t !== En) return e;
  var n = new Map,
    r = ut(e),
    s = G(0),
    i = le,
    l = u => {
      if (le === i) return u();
      var a = h,
        o = le;
      S(null), Nt(i);
      var f = u();
      return S(a), Nt(o), f
    };
  return r && n.set("length", G(e.length)), new Proxy(e, {
    defineProperty(u, a, o) {
      (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && Rn();
      var f = n.get(a);
      return f === void 0 ? f = l(() => {
        var d = G(o.value);
        return n.set(a, d), d
      }) : K(f, o.value, !0), !0
    },
    deleteProperty(u, a) {
      var o = n.get(a);
      if (o === void 0) {
        if (a in u) {
          const f = l(() => G(m));
          n.set(a, f), Ne(s)
        }
      } else K(o, m), Ne(s);
      return !0
    },
    get(u, a, o) {
      if (a === ae) return e;
      var f = n.get(a),
        d = a in u;
      if (f === void 0 && (!d || xe(u, a)?.writable) && (f = l(() => {
          var _ = Te(d ? u[a] : m),
            p = G(_);
          return p
        }), n.set(a, f)), f !== void 0) {
        var c = J(f);
        return c === m ? void 0 : c
      }
      return Reflect.get(u, a, o)
    },
    getOwnPropertyDescriptor(u, a) {
      var o = Reflect.getOwnPropertyDescriptor(u, a);
      if (o && "value" in o) {
        var f = n.get(a);
        f && (o.value = J(f))
      } else if (o === void 0) {
        var d = n.get(a),
          c = d?.v;
        if (d !== void 0 && c !== m) return {
          enumerable: !0,
          configurable: !0,
          value: c,
          writable: !0
        }
      }
      return o
    },
    has(u, a) {
      if (a === ae) return !0;
      var o = n.get(a),
        f = o !== void 0 && o.v !== m || Reflect.has(u, a);
      if (o !== void 0 || v !== null && (!f || xe(u, a)?.writable)) {
        o === void 0 && (o = l(() => {
          var c = f ? Te(u[a]) : m,
            _ = G(c);
          return _
        }), n.set(a, o));
        var d = J(o);
        if (d === m) return !1
      }
      return f
    },
    set(u, a, o, f) {
      var d = n.get(a),
        c = a in u;
      if (r && a === "length")
        for (var _ = o; _ < d.v; _ += 1) {
          var p = n.get(_ + "");
          p !== void 0 ? K(p, m) : _ in u && (p = l(() => G(m)), n.set(_ + "", p))
        }
      if (d === void 0)(!c || xe(u, a)?.writable) && (d = l(() => G(void 0)), K(d, Te(o)), n.set(a, d));
      else {
        c = d.v !== m;
        var T = l(() => Te(o));
        K(d, T)
      }
      var ce = Reflect.getOwnPropertyDescriptor(u, a);
      if (ce?.set && ce.set.call(f, o), !c) {
        if (r && typeof a == "string") {
          var Le = n.get("length"),
            W = Number(a);
          Number.isInteger(W) && W >= Le.v && K(Le, W + 1)
        }
        Ne(s)
      }
      return !0
    },
    ownKeys(u) {
      J(s);
      var a = Reflect.ownKeys(u).filter(d => {
        var c = n.get(d);
        return c === void 0 || c.v !== m
      });
      for (var [o, f] of n) f.v !== m && !(o in u) && a.push(o);
      return a
    },
    setPrototypeOf() {
      Cn()
    }
  })
}

function Tt(e) {
  try {
    if (e !== null && typeof e == "object" && ae in e) return e[ae]
  } catch {}
  return e
}

function ys(e, t) {
  return Object.is(Tt(e), Tt(t))
}
var At, ir, Xt, Zt, Jt;

function rt() {
  if (At === void 0) {
    At = window, ir = document, Xt = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    Zt = xe(t, "firstChild").get, Jt = xe(t, "nextSibling").get, wt(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), wt(n) && (n.__t = void 0)
  }
}

function B(e = "") {
  return document.createTextNode(e)
}

function V(e) {
  return Zt.call(e)
}

function j(e) {
  return Jt.call(e)
}

function gs(e, t) {
  if (!b) return V(e);
  var n = V(y);
  if (n === null) n = y.appendChild(B());
  else if (t && n.nodeType !== $e) {
    var r = B();
    return n?.before(r), N(r), r
  }
  return N(n), n
}

function bs(e, t = !1) {
  if (!b) {
    var n = V(e);
    return n instanceof Comment && n.data === "" ? j(n) : n
  }
  if (t && y?.nodeType !== $e) {
    var r = B();
    return y?.before(r), N(r), r
  }
  return y
}

function ws(e, t = 1, n = !1) {
  let r = b ? y : e;
  for (var s; t--;) s = r, r = j(r);
  if (!b) return r;
  if (n && r?.nodeType !== $e) {
    var i = B();
    return r === null ? s?.after(i) : r.before(i), N(i), i
  }
  return N(r), r
}

function ar(e) {
  e.textContent = ""
}

function ms() {
  return !1
}

function Es(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Pe(() => {
      document.activeElement === n && e.focus()
    })
  }
}
let xt = !1;

function lr() {
  xt || (xt = !0, document.addEventListener("reset", e => {
    Promise.resolve().then(() => {
      if (!e.defaultPrevented)
        for (const t of e.target.elements) t.__on_r?.()
    })
  }, {
    capture: !0
  }))
}

function Ke(e) {
  var t = h,
    n = v;
  S(null), Y(null);
  try {
    return e()
  } finally {
    S(t), Y(n)
  }
}

function Ts(e, t, n, r = n) {
  e.addEventListener(t, () => Ke(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(!0)
  } : e.__on_r = () => r(!0), lr()
}

function Qt(e) {
  v === null && h === null && Sn(), h !== null && (h.f & P) !== 0 && v === null && xn(), Ee && An()
}

function ur(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e)
}

function H(e, t, n, r = !0) {
  var s = v;
  s !== null && (s.f & te) !== 0 && (e |= te);
  var i = {
    ctx: g,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | I,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: s,
    b: s && s.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n) try {
    Re(i), i.f |= ct
  } catch (a) {
    throw L(i), a
  } else t !== null && ue(i);
  if (r) {
    var l = i;
    if (n && l.deps === null && l.teardown === null && l.nodes_start === null && l.first === l.last && (l.f & be) === 0 && (l = l.first), l !== null && (l.parent = s, s !== null && ur(l, s), h !== null && (h.f & k) !== 0 && (e & fe) === 0)) {
      var u = h;
      (u.effects ??= []).push(l)
    }
  }
  return i
}

function or() {
  return h !== null && !M
}

function pt(e) {
  const t = H(He, null, !1);
  return x(t, E), t.teardown = e, t
}

function fr(e) {
  Qt();
  var t = v.f,
    n = !h && (t & $) !== 0 && (t & ct) === 0;
  if (n) {
    var r = g;
    (r.e ??= []).push(e)
  } else return en(e)
}

function en(e) {
  return H(ot | It, e, !1)
}

function As(e) {
  return Qt(), H(He | It, e, !0)
}

function cr(e) {
  D.ensure();
  const t = H(fe | be, e, !0);
  return (n = {}) => new Promise(r => {
    n.outro ? je(t, () => {
      L(t), r(void 0)
    }) : (L(t), r(void 0))
  })
}

function xs(e) {
  return H(ot, e, !1)
}

function _r(e) {
  return H(Be | be, e, !0)
}

function dr(e, t = 0) {
  return H(He | t, e, !0)
}

function Ss(e, t = [], n = []) {
  er(t, n, r => {
    H(He, () => e(...r.map(J)), !0)
  })
}

function yt(e, t = 0) {
  var n = H(oe | t, e, !0);
  return n
}

function z(e, t = !0) {
  return H($ | be, e, !0, t)
}

function tn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ee,
      r = h;
    kt(!0), S(null);
    try {
      t.call(null)
    } finally {
      kt(n), S(r)
    }
  }
}

function nn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null;) {
    const s = n.ac;
    s !== null && Ke(() => {
      s.abort(Se)
    });
    var r = n.next;
    (n.f & fe) !== 0 ? n.parent = null : L(n, t), n = r
  }
}

function hr(e) {
  for (var t = e.first; t !== null;) {
    var n = t.next;
    (t.f & $) === 0 && L(t), t = n
  }
}

function L(e, t = !0) {
  var n = !1;
  (t || (e.f & Pt) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (vr(e.nodes_start, e.nodes_end), n = !0), nn(e, t && !n), Ye(e, 0), x(e, ge);
  var r = e.transitions;
  if (r !== null)
    for (const i of r) i.stop();
  tn(e);
  var s = e.parent;
  s !== null && s.first !== null && rn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null
}

function vr(e, t) {
  for (; e !== null;) {
    var n = e === t ? null : j(e);
    e.remove(), e = n
  }
}

function rn(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n))
}

function je(e, t) {
  var n = [];
  sn(e, n, !0), pr(n, () => {
    L(e), t && t()
  })
}

function pr(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var s of e) s.out(r)
  } else t()
}

function sn(e, t, n) {
  if ((e.f & te) === 0) {
    if (e.f ^= te, e.transitions !== null)
      for (const l of e.transitions)(l.is_global || n) && t.push(l);
    for (var r = e.first; r !== null;) {
      var s = r.next,
        i = (r.f & Ue) !== 0 || (r.f & $) !== 0;
      sn(r, t, i ? n : !1), r = s
    }
  }
}

function ks(e) {
  an(e, !0)
}

function an(e, t) {
  if ((e.f & te) !== 0) {
    e.f ^= te, (e.f & E) === 0 && (x(e, I), ue(e));
    for (var n = e.first; n !== null;) {
      var r = n.next,
        s = (n.f & Ue) !== 0 || (n.f & $) !== 0;
      an(n, s ? t : !1), n = r
    }
    if (e.transitions !== null)
      for (const i of e.transitions)(i.is_global || t) && i.in()
  }
}
let he = !1;

function St(e) {
  he = e
}
let Ee = !1;

function kt(e) {
  Ee = e
}
let h = null,
  M = !1;

function S(e) {
  h = e
}
let v = null;

function Y(e) {
  v = e
}
let U = null;

function ln(e) {
  h !== null && (U === null ? U = [e] : U.push(e))
}
let A = null,
  O = 0,
  C = null;

function yr(e) {
  C = e
}
let un = 1,
  Oe = 0,
  le = Oe;

function Nt(e) {
  le = e
}
let Z = !1;

function on() {
  return ++un
}

function Xe(e) {
  var t = e.f;
  if ((t & I) !== 0) return !0;
  if ((t & ne) !== 0) {
    var n = e.deps,
      r = (t & P) !== 0;
    if (n !== null) {
      var s, i, l = (t & qe) !== 0,
        u = r && v !== null && !Z,
        a = n.length;
      if ((l || u) && (v === null || (v.f & ge) === 0)) {
        var o = e,
          f = o.parent;
        for (s = 0; s < a; s++) i = n[s], (l || !i?.reactions?.includes(o)) && (i.reactions ??= []).push(o);
        l && (o.f ^= qe), u && f !== null && (f.f & P) === 0 && (o.f ^= P)
      }
      for (s = 0; s < a; s++)
        if (i = n[s], Xe(i) && zt(i), i.wv > e.wv) return !0
    }(!r || v !== null && !Z) && x(e, E)
  }
  return !1
}

function fn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !U?.includes(e))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & k) !== 0 ? fn(i, t, !1) : t === i && (n ? x(i, I) : (i.f & E) !== 0 && x(i, ne), ue(i))
    }
}

function cn(e) {
  var t = A,
    n = O,
    r = C,
    s = h,
    i = Z,
    l = U,
    u = g,
    a = M,
    o = le,
    f = e.f;
  A = null, O = 0, C = null, Z = (f & P) !== 0 && (M || !he || h === null), h = (f & ($ | fe)) === 0 ? e : null, U = null, pe(e.ctx), M = !1, le = ++Oe, e.ac !== null && (Ke(() => {
    e.ac.abort(Se)
  }), e.ac = null);
  try {
    e.f |= Qe;
    var d = e.fn,
      c = d(),
      _ = e.deps;
    if (A !== null) {
      var p;
      if (Ye(e, O), _ !== null && O > 0)
        for (_.length = O + A.length, p = 0; p < A.length; p++) _[O + p] = A[p];
      else e.deps = _ = A;
      if (!Z || (f & k) !== 0 && e.reactions !== null)
        for (p = O; p < _.length; p++)(_[p].reactions ??= []).push(e)
    } else _ !== null && O < _.length && (Ye(e, O), _.length = O);
    if (De() && C !== null && !M && _ !== null && (e.f & (k | ne | I)) === 0)
      for (p = 0; p < C.length; p++) fn(C[p], e);
    return s !== null && s !== e && (Oe++, C !== null && (r === null ? r = C : r.push(...C))), (e.f & ie) !== 0 && (e.f ^= ie), c
  } catch (T) {
    return Ht(T)
  } finally {
    e.f ^= Qe, A = t, O = n, C = r, h = s, Z = i, U = l, pe(u), M = a, le = o
  }
}

function gr(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = gn.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop())
    }
  }
  n === null && (t.f & k) !== 0 && (A === null || !A.includes(t)) && (x(t, ne), (t.f & (P | qe)) === 0 && (t.f ^= qe), Gt(t), Ye(t, 0))
}

function Ye(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++) gr(e, n[r])
}

function Re(e) {
  var t = e.f;
  if ((t & ge) === 0) {
    x(e, E);
    var n = v,
      r = he;
    v = e, he = !0;
    try {
      (t & oe) !== 0 ? hr(e) : nn(e), tn(e);
      var s = cn(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = un;
      var i
    } finally {
      he = r, v = n
    }
  }
}
async function br() {
  await Promise.resolve(), Bt()
}

function wr() {
  return D.ensure().settled()
}

function J(e) {
  var t = e.f,
    n = (t & k) !== 0;
  if (h !== null && !M) {
    var r = v !== null && (v.f & ge) !== 0;
    if (!r && !U?.includes(e)) {
      var s = h.deps;
      if ((h.f & Qe) !== 0) e.rv < Oe && (e.rv = Oe, A === null && s !== null && s[O] === e ? O++ : A === null ? A = [e] : (!Z || !A.includes(e)) && A.push(e));
      else {
        (h.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [h] : i.includes(h) || i.push(h)
      }
    }
  } else if (n && e.deps === null && e.effects === null) {
    var l = e,
      u = l.parent;
    u !== null && (u.f & P) === 0 && (l.f ^= P)
  }
  if (Ee) {
    if (ee.has(e)) return ee.get(e);
    if (n) {
      l = e;
      var a = l.v;
      return ((l.f & E) === 0 && l.reactions !== null || _n(l)) && (a = vt(l)), ee.set(l, a), a
    }
  } else n && (l = e, Xe(l) && zt(l));
  if ((e.f & ie) !== 0) throw e.v;
  return e.v
}

function _n(e) {
  if (e.v === m) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ee.has(t) || (t.f & k) !== 0 && _n(t)) return !0;
  return !1
}

function Me(e) {
  var t = M;
  try {
    return M = !0, e()
  } finally {
    M = t
  }
}
const mr = -7169;

function x(e, t) {
  e.f = e.f & mr | t
}

function Ns(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (ae in e) st(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && ae in n && st(n)
      }
  }
}

function st(e, t = new Set) {
  if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e) try {
      st(e[r], t)
    } catch {}
    const n = Rt(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = wn(n);
      for (let s in r) {
        const i = r[s].get;
        if (i) try {
          i.call(e)
        } catch {}
      }
    }
  }
}

function Os(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture"
}
const Er = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

function Rs(e) {
  return Er.includes(e)
}
const Tr = {
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};

function Cs(e) {
  return e = e.toLowerCase(), Tr[e] ?? e
}
const Ar = ["touchstart", "touchmove"];

function xr(e) {
  return Ar.includes(e)
}
const Sr = ["textarea", "script", "style", "title"];

function Ds(e) {
  return Sr.includes(e)
}
const dn = new Set,
  it = new Set;

function kr(e, t, n, r = {}) {
  function s(i) {
    if (r.capture || Ae.call(t, i), !i.cancelBubble) return Ke(() => n?.call(this, i))
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Pe(() => {
    t.addEventListener(e, s, r)
  }) : t.addEventListener(e, s, r), s
}

function Ps(e, t, n, r, s) {
  var i = {
      capture: r,
      passive: s
    },
    l = kr(e, t, n, i);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && pt(() => {
    t.removeEventListener(e, l, i)
  })
}

function Is(e) {
  for (var t = 0; t < e.length; t++) dn.add(e[t]);
  for (var n of it) n(e)
}
let Ot = null;

function Ae(e) {
  var t = this,
    n = t.ownerDocument,
    r = e.type,
    s = e.composedPath?.() || [],
    i = s[0] || e.target;
  Ot = e;
  var l = 0,
    u = Ot === e && e.__root;
  if (u) {
    var a = s.indexOf(u);
    if (a !== -1 && (t === document || t === window)) {
      e.__root = t;
      return
    }
    var o = s.indexOf(t);
    if (o === -1) return;
    a <= o && (l = a)
  }
  if (i = s[l] || e.target, i !== t) {
    Je(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n
      }
    });
    var f = h,
      d = v;
    S(null), Y(null);
    try {
      for (var c, _ = []; i !== null;) {
        var p = i.assignedSlot || i.parentNode || i.host || null;
        try {
          var T = i["__" + r];
          if (T != null && (!i.disabled || e.target === i))
            if (ut(T)) {
              var [ce, ...Le] = T;
              ce.apply(i, [e, ...Le])
            } else T.call(i, e)
        } catch (W) {
          c ? _.push(W) : c = W
        }
        if (e.cancelBubble || p === t || p === null) break;
        i = p
      }
      if (c) {
        for (let W of _) queueMicrotask(() => {
          throw W
        });
        throw c
      }
    } finally {
      e.__root = t, delete e.currentTarget, S(f), Y(d)
    }
  }
}
let R;

function Nr() {
  R = void 0
}

function Ms(e) {
  let t = null,
    n = b;
  var r;
  if (b) {
    for (t = y, R === void 0 && (R = V(document.head)); R !== null && (R.nodeType !== we || R.data !== _t);) R = j(R);
    R === null ? X(!1) : R = N(j(R))
  }
  b || (r = document.head.appendChild(B()));
  try {
    yt(() => e(r), Pt)
  } finally {
    n && (X(!0), R = y, N(t))
  }
}

function gt(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content
}

function F(e, t) {
  var n = v;
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t)
}

function Ls(e, t) {
  var n = (t & In) !== 0,
    r = (t & Mn) !== 0,
    s, i = !e.startsWith("<!>");
  return () => {
    if (b) return F(y, null), y;
    s === void 0 && (s = gt(i ? e : "<!>" + e), n || (s = V(s)));
    var l = r || Xt ? document.importNode(s, !0) : s.cloneNode(!0);
    if (n) {
      var u = V(l),
        a = l.lastChild;
      F(u, a)
    } else F(l, l);
    return l
  }
}

function Or(e, t, n = "svg") {
  var r = !e.startsWith("<!>"),
    s = `<${n}>${r?e:"<!>"+e}</${n}>`,
    i;
  return () => {
    if (b) return F(y, null), y;
    if (!i) {
      var l = gt(s),
        u = V(l);
      i = V(u)
    }
    var a = i.cloneNode(!0);
    return F(a, a), a
  }
}

function Fs(e, t) {
  return Or(e, t, "svg")
}

function js(e = "") {
  if (!b) {
    var t = B(e + "");
    return F(t, t), t
  }
  var n = y;
  return n.nodeType !== $e && (n.before(n = B()), N(n)), F(n, n), n
}

function qs() {
  if (b) return F(y, null), y;
  var e = document.createDocumentFragment(),
    t = document.createComment(""),
    n = B();
  return e.append(t, n), F(t, n), e
}

function Vs(e, t) {
  if (b) {
    v.nodes_end = y, dt();
    return
  }
  e !== null && e.before(t)
}
let at = !0;

function Ys(e) {
  at = e
}

function Hs(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "")
}

function hn(e, t) {
  return vn(e, t)
}

function Rr(e, t) {
  rt(), t.intro = t.intro ?? !1;
  const n = t.target,
    r = b,
    s = y;
  try {
    for (var i = V(n); i && (i.nodeType !== we || i.data !== _t);) i = j(i);
    if (!i) throw ve;
    X(!0), N(i);
    const l = vn(e, {
      ...t,
      anchor: i
    });
    return X(!1), l
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some(u => u.startsWith("https://svelte.dev/e/"))) throw l;
    return l !== ve && console.warn("Failed to hydrate: ", l), t.recover === !1 && On(), rt(), ar(n), X(!1), hn(e, t)
  } finally {
    X(r), N(s), Nr()
  }
}
const _e = new Map;

function vn(e, {
  target: t,
  anchor: n,
  props: r = {},
  events: s,
  context: i,
  intro: l = !0
}) {
  rt();
  var u = new Set,
    a = d => {
      for (var c = 0; c < d.length; c++) {
        var _ = d[c];
        if (!u.has(_)) {
          u.add(_);
          var p = xr(_);
          t.addEventListener(_, Ae, {
            passive: p
          });
          var T = _e.get(_);
          T === void 0 ? (document.addEventListener(_, Ae, {
            passive: p
          }), _e.set(_, 1)) : _e.set(_, T + 1)
        }
      }
    };
  a(bn(dn)), it.add(a);
  var o = void 0,
    f = cr(() => {
      var d = n ?? t.appendChild(B());
      return Zn(d, {
        pending: () => {}
      }, c => {
        if (i) {
          Un({});
          var _ = g;
          _.c = i
        }
        if (s && (r.$$events = s), b && F(c, null), at = l, o = e(c, r) || {}, at = !0, b && (v.nodes_end = y, y === null || y.nodeType !== we || y.data !== Ft)) throw We(), ve;
        i && Bn()
      }), () => {
        for (var c of u) {
          t.removeEventListener(c, Ae);
          var _ = _e.get(c);
          --_ === 0 ? (document.removeEventListener(c, Ae), _e.delete(c)) : _e.set(c, _)
        }
        it.delete(a), d !== n && d.parentNode?.removeChild(d)
      }
    });
  return lt.set(o, f), o
}
let lt = new WeakMap;

function Cr(e, t) {
  const n = lt.get(e);
  return n ? (lt.delete(e), n(t)) : Promise.resolve()
}

function Us(e, t, ...n) {
  var r = e,
    s = Q,
    i;
  yt(() => {
    s !== (s = t()) && (i && (L(i), i = null), i = z(() => s(r, ...n)))
  }, Ue), b && (r = y)
}

function Dr(e) {
  return (t, ...n) => {
    var r = e(...n),
      s;
    if (b) s = y, dt();
    else {
      var i = r.render().trim(),
        l = gt(i);
      s = V(l), t.before(s)
    }
    const u = r.setup?.(s);
    F(s, s), typeof u == "function" && pt(u)
  }
}

function pn(e, t, n) {
  if (e == null) return t(void 0), n && n(void 0), Q;
  const r = Me(() => e.subscribe(t, n));
  return r.unsubscribe ? () => r.unsubscribe() : r
}
const de = [];

function Pr(e, t) {
  return {
    subscribe: Ir(e, t).subscribe
  }
}

function Ir(e, t = Q) {
  let n = null;
  const r = new Set;

  function s(u) {
    if (qt(e, u) && (e = u, n)) {
      const a = !de.length;
      for (const o of r) o[1](), de.push(o, e);
      if (a) {
        for (let o = 0; o < de.length; o += 2) de[o][0](de[o + 1]);
        de.length = 0
      }
    }
  }

  function i(u) {
    s(u(e))
  }

  function l(u, a = Q) {
    const o = [u, a];
    return r.add(o), r.size === 1 && (n = t(s, i) || Q), u(e), () => {
      r.delete(o), r.size === 0 && n && (n(), n = null)
    }
  }
  return {
    set: s,
    update: i,
    subscribe: l
  }
}

function Bs(e, t, n) {
  const r = !Array.isArray(e),
    s = r ? [e] : e;
  if (!s.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return Pr(n, (l, u) => {
    let a = !1;
    const o = [];
    let f = 0,
      d = Q;
    const c = () => {
        if (f) return;
        d();
        const p = t(r ? o[0] : o, l, u);
        i ? l(p) : d = typeof p == "function" ? p : Q
      },
      _ = s.map((p, T) => pn(p, ce => {
        o[T] = ce, f &= ~(1 << T), a && c()
      }, () => {
        f |= 1 << T
      }));
    return a = !0, c(),
      function() {
        Ct(_), d(), a = !1
      }
  })
}

function $s(e) {
  let t;
  return pn(e, n => t = n)(), t
}

function Mr() {
  return h === null && Nn(), (h.ac ??= new AbortController).signal
}

function yn(e) {
  g === null && me(), Ce && g.l !== null ? bt(g).m.push(e) : fr(() => {
    const t = Me(e);
    if (typeof t == "function") return t
  })
}

function Lr(e) {
  g === null && me(), yn(() => () => Me(e))
}

function Fr(e, t, {
  bubbles: n = !1,
  cancelable: r = !1
} = {}) {
  return new CustomEvent(e, {
    detail: t,
    bubbles: n,
    cancelable: r
  })
}

function jr() {
  const e = g;
  return e === null && me(), (t, n, r) => {
    const s = e.s.$$events?.[t];
    if (s) {
      const i = ut(s) ? s.slice() : [s],
        l = Fr(t, n, r);
      for (const u of i) u.call(e.x, l);
      return !l.defaultPrevented
    }
    return !0
  }
}

function qr(e) {
  g === null && me(), g.l === null && Mt(), bt(g).b.push(e)
}

function Vr(e) {
  g === null && me(), g.l === null && Mt(), bt(g).a.push(e)
}

function bt(e) {
  var t = e.l;
  return t.u ??= {
    a: [],
    b: [],
    m: []
  }
}
const Ws = Object.freeze(Object.defineProperty({
  __proto__: null,
  afterUpdate: Vr,
  beforeUpdate: qr,
  createEventDispatcher: jr,
  createRawSnippet: Dr,
  flushSync: Bt,
  getAbortSignal: Mr,
  getAllContexts: Hn,
  getContext: qn,
  hasContext: Yn,
  hydrate: Rr,
  mount: hn,
  onDestroy: Lr,
  onMount: yn,
  setContext: Vn,
  settled: wr,
  tick: br,
  unmount: Cr,
  untrack: Me
}, Symbol.toStringTag, {
  value: "Module"
}));
export {
  ir as $, Ir as A, g as B, As as C, fr as D, Hr as E, Ct as F, Ns as G, ht as H, ds as I, yt as J, b as K, dt as L, Ue as M, cs as N, Lt as O, jn as P, N as Q, X as R, ae as S, B as T, z as U, w as V, m as W, ms as X, ks as Y, je as Z, y as _, Vs as a, as as a$, Q as a0, vs as a1, pn as a2, $s as a3, pt as a4, Je as a5, v as a6, Ie as a7, xe as a8, zr as a9, ut as aA, Xr as aB, Kr as aC, Qr as aD, te as aE, L as aF, j as aG, sn as aH, ar as aI, pr as aJ, V as aK, Zr as aL, Jr as aM, Gr as aN, ls as aO, F as aP, Ds as aQ, Ys as aR, os as aS, ys as aT, er as aU, us as aV, Os as aW, kr as aX, Es as aY, Cs as aZ, lr as a_, ns as aa, ge as ab, rr as ac, ps as ad, Y as ae, rs as af, Ce as ag, ts as ah, es as ai, Yr as aj, Br as ak, ss as al, Ee as am, Rr as an, hn as ao, Bt as ap, Cr as aq, br as ar, Ts as as, Ze as at, Lr as au, Ps as av, we as aw, Ft as ax, Ve as ay, bn as az, Te as b, Rt as b0, $r as b1, Rs as b2, wn as b3, S as b4, h as b5, Bs as b6, Ur as b7, De as b8, _s as b9, qt as ba, at as bb, oe as bc, ct as bd, is as be, Ke as bf, Pr as bg, Us as bh, Ws as bi, qs as c, Is as d, xs as e, bs as f, Bn as g, Ms as h, J as i, hs as j, K as k, Ls as l, gs as m, ws as n, yn as o, Un as p, Pe as q, dr as r, G as s, Ss as t, Me as u, fs as v, Fn as w, Hs as x, Fs as y, js as z
};