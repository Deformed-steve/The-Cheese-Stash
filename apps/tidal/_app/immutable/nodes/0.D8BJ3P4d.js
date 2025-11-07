const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["../chunks/CdiA3-15.js", "../chunks/Dl3XAuxE.js", "../chunks/Cu9fi7rt.js", "../chunks/DsnmJJEf.js", "../chunks/CgOeFQae.js", "../chunks/DW1I4PKZ.js"]))) => i.map(i => d[i]);
import "../chunks/DsnmJJEf.js";
import {
  K as ur,
  L as Zr,
  b8 as Gr,
  b9 as Yr,
  ba as Xr,
  J as Jr,
  T as en,
  U as tn,
  V as an,
  X as rn,
  _ as nn,
  W as sn,
  Z as on,
  a6 as ln,
  bb as cn,
  M as dn,
  bc as un,
  bd as vn,
  e as kr,
  u as wr,
  be as fn,
  bf as xr,
  aj as pn,
  q as hn,
  a0 as ea,
  A as gn,
  a3 as ta,
  c as ge,
  f as V,
  a as k,
  d as Ja,
  p as qa,
  D as Fe,
  k as b,
  i as r,
  o as er,
  l as L,
  t as Y,
  av as Vt,
  g as Pa,
  n as h,
  s as oe,
  m as o,
  v as s,
  x as te,
  j as pt,
  w as Ae,
  au as Sr,
  bg as $r,
  b6 as Tr,
  h as mn,
  bh as _n,
  $ as yn
} from "../chunks/Cu9fi7rt.js";
import {
  l as We,
  s as Ke,
  p as bn,
  b as xt,
  i as F,
  a as tr,
  _ as Mr
} from "../chunks/DW1I4PKZ.js";
import {
  n as kn,
  I as Ze,
  s as Ge,
  c as je,
  l as ut,
  o as wn,
  p as C,
  a as ne,
  q as xn,
  t as Ba,
  v as Sn,
  e as Ea,
  X as ma,
  w as Wt,
  D as Ka,
  r as $n,
  b as qe,
  x as Tn,
  i as Za,
  y as Mn,
  z as ft,
  A as En,
  B as Ln,
  u as _a,
  C as qn,
  J as Pn,
  g as Cn,
  E as vr
} from "../chunks/Dl3XAuxE.js";
import {
  b as La
} from "../chunks/CMGKbhlM.js";
import {
  L as Ga,
  d as fr
} from "../chunks/CMJ4YqVY.js";
import "../chunks/CgOeFQae.js";
import {
  a as An,
  P as jn,
  n as Fn
} from "../chunks/Bjspi3f-.js";
import {
  S as zn
} from "../chunks/B8ZBYVEN.js";
import {
  C as Rn
} from "../chunks/CyZ77wti.js";
const On = !0;

function Hn(n, e, t) {
  ur && Zr();
  var l = n,
    c = sn,
    p, v, f = null,
    u = Gr() ? Yr : Xr;

  function _() {
    p && on(p), f !== null && (f.lastChild.remove(), l.before(f), f = null), p = v
  }
  Jr(() => {
    if (u(c, c = e())) {
      var x = l,
        H = rn();
      H && (f = document.createDocumentFragment(), f.append(x = en())), v = tn(() => t(x)), H ? an.add_callback(_) : _()
    }
  }), ur && (l = nn)
}
const Nn = () => performance.now(),
  Ft = {
    tick: n => requestAnimationFrame(n),
    now: () => Nn(),
    tasks: new Set
  };

function Er() {
  const n = Ft.now();
  Ft.tasks.forEach(e => {
    e.c(n) || (Ft.tasks.delete(e), e.f())
  }), Ft.tasks.size !== 0 && Ft.tick(Er)
}

function Dn(n) {
  let e;
  return Ft.tasks.size === 0 && Ft.tick(Er), {
    promise: new Promise(t => {
      Ft.tasks.add(e = {
        c: n,
        f: t
      })
    }),
    abort() {
      Ft.tasks.delete(e)
    }
  }
}

function Ta(n, e) {
  xr(() => {
    n.dispatchEvent(new CustomEvent(e))
  })
}

function In(n) {
  if (n === "float") return "cssFloat";
  if (n === "offset") return "cssOffset";
  if (n.startsWith("--")) return n;
  const e = n.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(t => t[0].toUpperCase() + t.slice(1)).join("")
}

function pr(n) {
  const e = {},
    t = n.split(";");
  for (const l of t) {
    const [c, p] = l.split(":");
    if (!c || p === void 0) break;
    const v = In(c.trim());
    e[v] = p.trim()
  }
  return e
}
const Un = n => n;

function Bn(n, e, t, l) {
  var c = (n & fn) !== 0,
    p = "both",
    v, f = e.inert,
    u = e.style.overflow,
    _, x;

  function H() {
    return xr(() => v ??= t()(e, l?.() ?? {}, {
      direction: p
    }))
  }
  var q = {
      is_global: c,
      in() {
        e.inert = f, Ta(e, "introstart"), _ = Ya(e, H(), x, 1, () => {
          Ta(e, "introend"), _?.abort(), _ = v = void 0, e.style.overflow = u
        })
      },
      out(z) {
        e.inert = !0, Ta(e, "outrostart"), x = Ya(e, H(), _, 0, () => {
          Ta(e, "outroend"), z?.()
        })
      },
      stop: () => {
        _?.abort(), x?.abort()
      }
    },
    N = ln;
  if ((N.transitions ??= []).push(q), cn) {
    var D = c;
    if (!D) {
      for (var A = N.parent; A && (A.f & dn) !== 0;)
        for (;
          (A = A.parent) && (A.f & un) === 0;);
      D = !A || (A.f & vn) !== 0
    }
    D && kr(() => {
      wr(() => q.in())
    })
  }
}

function Ya(n, e, t, l, c) {
  var p = l === 1;
  if (pn(e)) {
    var v, f = !1;
    return hn(() => {
      if (!f) {
        var z = e({
          direction: p ? "in" : "out"
        });
        v = Ya(n, z, t, l, c)
      }
    }), {
      abort: () => {
        f = !0, v?.abort()
      },
      deactivate: () => v.deactivate(),
      reset: () => v.reset(),
      t: () => v.t()
    }
  }
  if (t?.deactivate(), !e?.duration) return c(), {
    abort: ea,
    deactivate: ea,
    reset: ea,
    t: () => l
  };
  const {
    delay: u = 0,
    css: _,
    tick: x,
    easing: H = Un
  } = e;
  var q = [];
  if (p && t === void 0 && (x && x(0, 1), _)) {
    var N = pr(_(0, 1));
    q.push(N, N)
  }
  var D = () => 1 - l,
    A = n.animate(q, {
      duration: u,
      fill: "forwards"
    });
  return A.onfinish = () => {
    A.cancel();
    var z = t?.t() ?? 1 - l;
    t?.abort();
    var j = l - z,
      W = e.duration * Math.abs(j),
      le = [];
    if (W > 0) {
      var ze = !1;
      if (_)
        for (var ve = Math.ceil(W / 16.666666666666668), Re = 0; Re <= ve; Re += 1) {
          var Pe = z + j * H(Re / ve),
            Be = pr(_(Pe, 1 - Pe));
          le.push(Be), ze ||= Be.overflow === "hidden"
        }
      ze && (n.style.overflow = "hidden"), D = () => {
        var Qe = A.currentTime;
        return z + j * H(Qe / W)
      }, x && Dn(() => {
        if (A.playState !== "running") return !1;
        var Qe = D();
        return x(Qe, 1 - Qe), !0
      })
    }
    A = n.animate(le, {
      duration: W,
      fill: "forwards"
    }), A.onfinish = () => {
      D = () => l, x?.(l, 1 - l), c()
    }
  }, {
    abort: () => {
      A && (A.cancel(), A.effect = null, A.onfinish = ea)
    },
    deactivate: () => {
      c = ea
    },
    reset: () => {
      l === 0 && x?.(1, 0)
    },
    t: () => D()
  }
}
class ar {
  #e = new WeakMap;
  #t;
  #a;
  static entries = new WeakMap;
  constructor(e) {
    this.#a = e
  }
  observe(e, t) {
    var l = this.#e.get(e) || new Set;
    return l.add(t), this.#e.set(e, l), this.#r().observe(e, this.#a), () => {
      var c = this.#e.get(e);
      c.delete(t), c.size === 0 && (this.#e.delete(e), this.#t.unobserve(e))
    }
  }
  #r() {
    return this.#t ?? (this.#t = new ResizeObserver(e => {
      for (var t of e) {
        ar.entries.set(t.target, t);
        for (var l of this.#e.get(t.target) || []) l(t)
      }
    }))
  }
}
var Qn = new ar({
  box: "border-box"
});

function Vn(n, e, t) {
  var l = Qn.observe(n, () => t(n[e]));
  kr(() => (wr(() => t(n[e])), l))
}
const hr = On;

function Wn(n) {
  const e = n - 1;
  return e * e * e + 1
}

function Kn(n, {
  delay: e = 0,
  duration: t = 400,
  easing: l = Wn,
  axis: c = "y"
} = {}) {
  const p = getComputedStyle(n),
    v = +p.opacity,
    f = c === "y" ? "height" : "width",
    u = parseFloat(p[f]),
    _ = c === "y" ? ["top", "bottom"] : ["left", "right"],
    x = _.map(j => `${j[0].toUpperCase()}${j.slice(1)}`),
    H = parseFloat(p[`padding${x[0]}`]),
    q = parseFloat(p[`padding${x[1]}`]),
    N = parseFloat(p[`margin${x[0]}`]),
    D = parseFloat(p[`margin${x[1]}`]),
    A = parseFloat(p[`border${x[0]}Width`]),
    z = parseFloat(p[`border${x[1]}Width`]);
  return {
    delay: e,
    duration: t,
    easing: l,
    css: j => `overflow: hidden;opacity: ${Math.min(j*20,1)*v};${f}: ${j*u}px;padding-${_[0]}: ${j*H}px;padding-${_[1]}: ${j*q}px;margin-${_[0]}: ${j*N}px;margin-${_[1]}: ${j*D}px;border-${_[0]}-width: ${j*A}px;border-${_[1]}-width: ${j*z}px;min-${f}: 0`
  }
}
const Zn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.157%2022.819c-10.4-14.885-30.94-19.297-45.792-9.835L22.282%2029.608A29.92%2029.92%200%200%200%208.764%2049.65a31.5%2031.5%200%200%200%203.108%2020.231%2030%2030%200%200%200-4.477%2011.183%2031.9%2031.9%200%200%200%205.448%2024.116c10.402%2014.887%2030.942%2019.297%2045.791%209.835l26.083-16.624A29.92%2029.92%200%200%200%2098.235%2078.35a31.53%2031.53%200%200%200-3.105-20.232%2030%2030%200%200%200%204.474-11.182%2031.88%2031.88%200%200%200-5.447-24.116'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.817%20106.582a20.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.503%2018%2018%200%200%201%20.624-2.435l.49-1.498%201.337.981a33.6%2033.6%200%200%200%2010.203%205.098l.97.294-.09.968a5.85%205.85%200%200%200%201.052%203.878%206.24%206.24%200%200%200%206.695%202.485%205.8%205.8%200%200%200%201.603-.704L69.27%2076.28a5.43%205.43%200%200%200%202.45-3.631%205.8%205.8%200%200%200-.987-4.371%206.24%206.24%200%200%200-6.698-2.487%205.7%205.7%200%200%200-1.6.704l-9.953%206.345a19%2019%200%200%201-5.296%202.326%2020.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.502%2017.99%2017.99%200%200%201%208.13-12.052l26.081-16.623a19%2019%200%200%201%205.3-2.329%2020.72%2020.72%200%200%201%2022.237%208.243%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-.624%202.435l-.49%201.498-1.337-.98a33.6%2033.6%200%200%200-10.203-5.1l-.97-.294.09-.968a5.86%205.86%200%200%200-1.052-3.878%206.24%206.24%200%200%200-6.696-2.485%205.8%205.8%200%200%200-1.602.704L37.73%2051.72a5.42%205.42%200%200%200-2.449%203.63%205.79%205.79%200%200%200%20.986%204.372%206.24%206.24%200%200%200%206.698%202.486%205.8%205.8%200%200%200%201.602-.704l9.952-6.342a19%2019%200%200%201%205.295-2.328%2020.72%2020.72%200%200%201%2022.237%208.242%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-8.13%2012.053l-26.081%2016.622a19%2019%200%200%201-5.3%202.328'%20style='fill:%23fff'/%3e%3c/svg%3e",
  Gn = {
    open: !1,
    maximized: !1,
    track: null,
    refreshToken: 0
  };

function Yn() {
  const n = gn({
    ...Gn
  });
  let e = null;
  kn.subscribe(f => {
    e = f ?? null, n.update(u => {
      const _ = u.track?.id !== e?.id;
      return {
        ...u,
        track: e,
        refreshToken: _ ? u.refreshToken + 1 : u.refreshToken
      }
    })
  });

  function t(f) {
    const u = f ?? e;
    n.update(_ => ({
      ..._,
      open: !0,
      track: u ?? _.track,
      maximized: window.matchMedia("(max-width: 640px)").matches ? !0 : _.maximized,
      refreshToken: u && _.track?.id !== u.id ? _.refreshToken + 1 : _.refreshToken
    }))
  }

  function l() {
    n.update(f => ({
      ...f,
      open: !1,
      maximized: !1
    }))
  }

  function c() {
    ta(n).open ? l() : t()
  }

  function p() {
    n.update(f => ({
      ...f,
      maximized: !f.maximized
    }))
  }

  function v() {
    n.update(f => ({
      ...f,
      refreshToken: f.refreshToken + 1
    }))
  }
  return {
    subscribe: n.subscribe,
    open: t,
    close: l,
    toggle: c,
    toggleMaximize: p,
    refresh: v
  }
}
const wt = Yn();

function Xn(n) {
  const e = n - 1;
  return e * e * e + 1
}

function gr(n, e) {
  const t = We(e, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const l = [
    ["rect", {
      width: "20",
      height: "5",
      x: "2",
      y: "3",
      rx: "1"
    }],
    ["path", {
      d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"
    }],
    ["path", {
      d: "M10 12h4"
    }]
  ];
  Ze(n, Ke({
    name: "archive"
  }, () => t, {
    get iconNode() {
      return l
    },
    children: (c, p) => {
      var v = ge(),
        f = V(v);
      Ge(f, e, "default", {}), k(c, v)
    },
    $$slots: {
      default: !0
    }
  }))
}

function ga(n, e) {
  const t = We(e, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const l = [
    ["path", {
      d: "M20 6 9 17l-5-5"
    }]
  ];
  Ze(n, Ke({
    name: "check"
  }, () => t, {
    get iconNode() {
      return l
    },
    children: (c, p) => {
      var v = ge(),
        f = V(v);
      Ge(f, e, "default", {}), k(c, v)
    },
    $$slots: {
      default: !0
    }
  }))
}

function Qa(n, e) {
  const t = We(e, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const l = [
    ["path", {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
    }],
    ["path", {
      d: "M14 2v4a2 2 0 0 0 2 2h4"
    }],
    ["path", {
      d: "M8 13h2"
    }],
    ["path", {
      d: "M14 13h2"
    }],
    ["path", {
      d: "M8 17h2"
    }],
    ["path", {
      d: "M14 17h2"
    }]
  ];
  Ze(n, Ke({
    name: "file-spreadsheet"
  }, () => t, {
    get iconNode() {
      return l
    },
    children: (c, p) => {
      var v = ge(),
        f = V(v);
      Ge(f, e, "default", {}), k(c, v)
    },
    $$slots: {
      default: !0
    }
  }))
}

function mr(n, e) {
  const t = We(e, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const l = [
    ["path", {
      d: "M16 5H3"
    }],
    ["path", {
      d: "M11 12H3"
    }],
    ["path", {
      d: "M11 19H3"
    }],
    ["path", {
      d: "M21 16V5"
    }],
    ["circle", {
      cx: "18",
      cy: "16",
      r: "3"
    }]
  ];
  Ze(n, Ke({
    name: "list-music"
  }, () => t, {
    get iconNode() {
      return l
    },
    children: (c, p) => {
      var v = ge(),
        f = V(v);
      Ge(f, e, "default", {}), k(c, v)
    },
    $$slots: {
      default: !0
    }
  }))
}

function Jn(n, e) {
  const t = We(e, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const l = [
    ["path", {
      d: "M15 3h6v6"
    }],
    ["path", {
      d: "m21 3-7 7"
    }],
    ["path", {
      d: "m3 21 7-7"
    }],
    ["path", {
      d: "M9 21H3v-6"
    }]
  ];
  Ze(n, Ke({
    name: "maximize-2"
  }, () => t, {
    get iconNode() {
      return l
    },
    children: (c, p) => {
      var v = ge(),
        f = V(v);
      Ge(f, e, "default", {}), k(c, v)
    },
    $$slots: {
      default: !0
    }
  }))
}

function es(n, e) {
  const t = We(e, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const l = [
    ["path", {
      d: "m14 10 7-7"
    }],
    ["path", {
      d: "M20 10h-6V4"
    }],
    ["path", {
      d: "m3 21 7-7"
    }],
    ["path", {
      d: "M4 14h6v6"
    }]
  ];
  Ze(n, Ke({
    name: "minimize-2"
  }, () => t, {
    get iconNode() {
      return l
    },
    children: (c, p) => {
      var v = ge(),
        f = V(v);
      Ge(f, e, "default", {}), k(c, v)
    },
    $$slots: {
      default: !0
    }
  }))
}

function ts(n, e) {
  const t = We(e, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const l = [
    ["path", {
      d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
    }],
    ["path", {
      d: "M21 3v5h-5"
    }],
    ["path", {
      d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
    }],
    ["path", {
      d: "M8 16H3v5"
    }]
  ];
  Ze(n, Ke({
    name: "refresh-cw"
  }, () => t, {
    get iconNode() {
      return l
    },
    children: (c, p) => {
      var v = ge(),
        f = V(v);
      Ge(f, e, "default", {}), k(c, v)
    },
    $$slots: {
      default: !0
    }
  }))
}

function as(n, e) {
  const t = We(e, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const l = [
    ["path", {
      d: "M15 12h-5"
    }],
    ["path", {
      d: "M15 8h-5"
    }],
    ["path", {
      d: "M19 17V5a2 2 0 0 0-2-2H4"
    }],
    ["path", {
      d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
    }]
  ];
  Ze(n, Ke({
    name: "scroll-text"
  }, () => t, {
    get iconNode() {
      return l
    },
    children: (c, p) => {
      var v = ge(),
        f = V(v);
      Ge(f, e, "default", {}), k(c, v)
    },
    $$slots: {
      default: !0
    }
  }))
}

function rs(n, e) {
  const t = We(e, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const l = [
    ["path", {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
    }],
    ["circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }]
  ];
  Ze(n, Ke({
    name: "settings"
  }, () => t, {
    get iconNode() {
      return l
    },
    children: (c, p) => {
      var v = ge(),
        f = V(v);
      Ge(f, e, "default", {}), k(c, v)
    },
    $$slots: {
      default: !0
    }
  }))
}

function ns(n, e) {
  const t = We(e, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const l = [
    ["path", {
      d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"
    }],
    ["path", {
      d: "M3 20V4"
    }]
  ];
  Ze(n, Ke({
    name: "skip-back"
  }, () => t, {
    get iconNode() {
      return l
    },
    children: (c, p) => {
      var v = ge(),
        f = V(v);
      Ge(f, e, "default", {}), k(c, v)
    },
    $$slots: {
      default: !0
    }
  }))
}

function ss(n, e) {
  const t = We(e, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const l = [
    ["path", {
      d: "M21 4v16"
    }],
    ["path", {
      d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"
    }]
  ];
  Ze(n, Ke({
    name: "skip-forward"
  }, () => t, {
    get iconNode() {
      return l
    },
    children: (c, p) => {
      var v = ge(),
        f = V(v);
      Ge(f, e, "default", {}), k(c, v)
    },
    $$slots: {
      default: !0
    }
  }))
}

function os(n, e) {
  const t = We(e, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const l = [
    ["path", {
      d: "M10 11v6"
    }],
    ["path", {
      d: "M14 11v6"
    }],
    ["path", {
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"
    }],
    ["path", {
      d: "M3 6h18"
    }],
    ["path", {
      d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
    }]
  ];
  Ze(n, Ke({
    name: "trash-2"
  }, () => t, {
    get iconNode() {
      return l
    },
    children: (c, p) => {
      var v = ge(),
        f = V(v);
      Ge(f, e, "default", {}), k(c, v)
    },
    $$slots: {
      default: !0
    }
  }))
}

function is(n, e) {
  const t = We(e, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const l = [
    ["path", {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
    }],
    ["path", {
      d: "M16 9a5 5 0 0 1 0 6"
    }],
    ["path", {
      d: "M19.364 18.364a9 9 0 0 0 0-12.728"
    }]
  ];
  Ze(n, Ke({
    name: "volume-2"
  }, () => t, {
    get iconNode() {
      return l
    },
    children: (c, p) => {
      var v = ge(),
        f = V(v);
      Ge(f, e, "default", {}), k(c, v)
    },
    $$slots: {
      default: !0
    }
  }))
}

function ls(n, e) {
  const t = We(e, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const l = [
    ["path", {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
    }],
    ["line", {
      x1: "22",
      x2: "16",
      y1: "9",
      y2: "15"
    }],
    ["line", {
      x1: "16",
      x2: "22",
      y1: "9",
      y2: "15"
    }]
  ];
  Ze(n, Ke({
    name: "volume-x"
  }, () => t, {
    get iconNode() {
      return l
    },
    children: (c, p) => {
      var v = ge(),
        f = V(v);
      Ge(f, e, "default", {}), k(c, v)
    },
    $$slots: {
      default: !0
    }
  }))
}

function cs(n, e) {
  b(e, !r(e))
}

function ds(n, e) {
  b(e, !1)
}
var us = L('<span class="text-blue-100/80 svelte-j1l7g3"> </span>'),
  vs = L('<p class="mt-1 text-xs text-blue-100/80 svelte-j1l7g3"> </p>'),
  fs = L('<p class="mt-1 text-xs text-blue-100/80 svelte-j1l7g3"> </p>'),
  ps = L('<p class="mt-1 text-xs text-blue-100/80 svelte-j1l7g3">FFmpeg is ready to use.</p>'),
  hs = L('<p class="mt-1 text-xs text-red-200 svelte-j1l7g3"> </p>'),
  gs = () => je.dismissFfmpeg(),
  ms = L('<button class="rounded-full p-1 text-blue-100/70 transition-colors hover:bg-blue-500/20 hover:text-blue-50 svelte-j1l7g3" aria-label="Dismiss FFmpeg download"><!></button>'),
  _s = L('<div class="mt-3 h-1.5 overflow-hidden rounded-full bg-blue-500/20 svelte-j1l7g3"><div class="h-full rounded-full bg-blue-400 transition-all duration-200 svelte-j1l7g3"></div></div>'),
  ys = L('<div class="ffmpeg-banner pointer-events-auto rounded-2xl border px-4 py-3 text-sm text-blue-100 shadow-xl svelte-j1l7g3"><div class="flex items-start gap-3 svelte-j1l7g3"><div class="min-w-0 flex-1 svelte-j1l7g3"><p class="leading-5 font-semibold text-blue-50 svelte-j1l7g3">Downloading FFmpeg <!></p> <!></div> <!></div> <!></div>'),
  bs = L('<p class="truncate text-xs text-gray-400 svelte-j1l7g3"> </p>'),
  ks = (n, e) => r(e).cancellable ? je.cancelTrackDownload(r(e).id) : je.dismissTrackTask(r(e).id),
  ws = L('<div class="download-popup pointer-events-auto rounded-2xl border px-4 py-3 text-sm text-gray-100 shadow-xl svelte-j1l7g3"><div class="flex items-start gap-3 svelte-j1l7g3"><div class="flex min-w-0 flex-1 flex-col gap-1 svelte-j1l7g3"><p class="flex items-center gap-2 text-sm font-semibold text-gray-50 svelte-j1l7g3"><!> <span class="truncate svelte-j1l7g3"> </span></p> <!> <div class="flex flex-wrap items-center gap-2 text-xs text-gray-400 svelte-j1l7g3"><span class="svelte-j1l7g3"> </span> <span aria-hidden="true" class="svelte-j1l7g3">•</span> <span class="svelte-j1l7g3"> </span></div></div> <button class="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white svelte-j1l7g3"><!></button></div> <div class="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-800 svelte-j1l7g3"><div class="h-full rounded-full bg-blue-500 transition-all duration-200 svelte-j1l7g3"></div></div></div>'),
  xs = L('<div class="pointer-events-none absolute top-0 right-0 left-0 -translate-y-full transform pb-4 svelte-j1l7g3"><div class="mx-auto flex w-full max-w-2xl flex-col gap-2 px-4 svelte-j1l7g3"><!> <!></div></div>'),
  Ss = L('<video class="h-14 w-14 rounded object-cover shadow-lg svelte-j1l7g3" autoplay loop playsinline="" preload="metadata"></video>', 2),
  $s = L('<img class="h-14 w-14 rounded object-cover shadow-lg svelte-j1l7g3"/>'),
  Ts = L('<span class="mx-1 text-gray-600 svelte-j1l7g3" aria-hidden="true">•</span> <span class="text-gray-500 svelte-j1l7g3"> </span>', 1),
  Ms = L('<span class="mx-1 text-gray-600 svelte-j1l7g3" aria-hidden="true">•</span> <span class="svelte-j1l7g3"> </span>', 1),
  Es = L('<li class="svelte-j1l7g3"><div tabindex="0" role="button"><span class="w-6 text-xs font-semibold text-gray-500 group-hover:text-gray-300 svelte-j1l7g3"></span> <div class="min-w-0 flex-1 svelte-j1l7g3"><p class="truncate text-sm font-medium svelte-j1l7g3"> </p> <p class="truncate text-xs text-gray-400 group-hover:text-gray-300 svelte-j1l7g3"> </p></div> <button class="rounded-full p-1 text-gray-500 transition-colors hover:text-red-400 svelte-j1l7g3" type="button"><!></button></div></li>'),
  Ls = L('<ul class="max-h-60 space-y-2 overflow-y-auto pr-1 svelte-j1l7g3"></ul>'),
  qs = L('<p class="rounded-lg border border-dashed border-gray-700 bg-gray-900/70 px-3 py-8 text-center text-gray-400 svelte-j1l7g3">Queue is empty</p>'),
  Ps = L('<div class="queue-panel mt-4 space-y-3 rounded-2xl border p-4 text-sm shadow-inner svelte-j1l7g3"><div class="flex items-center justify-between gap-2 svelte-j1l7g3"><div class="flex items-center gap-2 text-gray-300 svelte-j1l7g3"><!> <span class="font-medium svelte-j1l7g3">Playback Queue</span> <span class="rounded-full bg-gray-800 px-2 py-0.5 text-xs text-gray-400 svelte-j1l7g3"> </span></div> <div class="flex items-center gap-2 svelte-j1l7g3"><button class="flex items-center gap-1 rounded-full border border-transparent px-3 py-1 text-xs tracking-wide text-gray-400 uppercase transition-colors hover:border-blue-500 hover:text-blue-200 disabled:opacity-40 svelte-j1l7g3" type="button"><!> Shuffle</button> <button class="flex items-center gap-1 rounded-full border border-transparent px-3 py-1 text-xs tracking-wide text-gray-400 uppercase transition-colors hover:border-red-500 hover:text-red-400 svelte-j1l7g3" type="button"><!> Clear</button> <button class="rounded-full p-1 text-gray-400 transition-colors hover:text-white svelte-j1l7g3" aria-label="Close queue panel"><!></button></div></div> <!></div>'),
  Cs = L('<div class="loading-overlay svelte-j1l7g3"><div class="loading-equalizer svelte-j1l7g3" aria-hidden="true"><span class="bar svelte-j1l7g3" style="animation-delay: 0ms"></span> <span class="bar svelte-j1l7g3" style="animation-delay: 150ms"></span> <span class="bar svelte-j1l7g3" style="animation-delay: 300ms"></span> <span class="bar svelte-j1l7g3" style="animation-delay: 450ms"></span></div> <p class="text-sm font-medium text-gray-200 svelte-j1l7g3">Loading track…</p></div>'),
  As = L('<div class="mb-3 svelte-j1l7g3"><button class="group relative h-1 w-full cursor-pointer overflow-hidden rounded-full bg-gray-700 svelte-j1l7g3" type="button" aria-label="Seek position"><div class="pointer-events-none absolute inset-y-0 left-0 bg-blue-400/30 transition-all svelte-j1l7g3" aria-hidden="true"></div> <div class="pointer-events-none absolute inset-y-0 left-0 bg-blue-500 transition-all svelte-j1l7g3" aria-hidden="true"></div> <div class="pointer-events-none absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-blue-500 opacity-0 transition-opacity group-hover:opacity-100 svelte-j1l7g3" aria-hidden="true"></div></button> <div class="mt-1 flex justify-between text-xs text-gray-400 svelte-j1l7g3"><span class="svelte-j1l7g3"> </span> <span class="svelte-j1l7g3"> </span></div></div> <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between svelte-j1l7g3"><div class="flex min-w-0 items-center gap-3 sm:flex-1 svelte-j1l7g3"><!> <div class="min-w-0 flex-1 svelte-j1l7g3"><h3 class="truncate font-semibold text-white svelte-j1l7g3"> </h3> <p class="truncate text-sm text-gray-400 svelte-j1l7g3"> </p> <p class="text-xs text-gray-500 svelte-j1l7g3"><span class="svelte-j1l7g3"> </span> <!> <!></p></div></div> <div class="flex flex-wrap items-center justify-between gap-3 sm:flex-nowrap sm:justify-end sm:gap-4 svelte-j1l7g3"><div class="flex w-full flex-1 items-center justify-center gap-2 sm:w-auto sm:flex-none sm:justify-center svelte-j1l7g3"><button class="p-2 text-gray-400 transition-colors hover:text-white disabled:opacity-50 svelte-j1l7g3" aria-label="Previous track"><!></button> <button class="rounded-full bg-white p-3 text-gray-900 transition-transform hover:scale-105 svelte-j1l7g3"><!></button> <button class="p-2 text-gray-400 transition-colors hover:text-white disabled:opacity-50 svelte-j1l7g3" aria-label="Next track"><!></button></div> <div class="flex items-center gap-2 sm:flex-none svelte-j1l7g3"><button type="button"><!> <span class="hidden sm:inline svelte-j1l7g3">Lyrics</span></button> <button aria-label="Toggle queue panel" type="button"><!> <span class="hidden sm:inline svelte-j1l7g3"> </span></button></div> <div class="flex items-center gap-2 sm:flex-none svelte-j1l7g3"><button class="p-2 text-gray-400 transition-colors hover:text-white svelte-j1l7g3"><!></button> <input type="range" min="0" max="1" step="0.01" class="hidden h-1 w-24 cursor-pointer appearance-none rounded-lg bg-gray-700 accent-white sm:block svelte-j1l7g3" aria-label="Volume"/></div></div></div> <!> <!>', 1),
  js = L('<div class="flex h-20 items-center justify-center text-sm text-gray-400 svelte-j1l7g3">Nothing is playing</div>'),
  Fs = L('<audio class="hidden svelte-j1l7g3"></audio> <div class="audio-player-backdrop fixed inset-x-0 bottom-0 z-50 px-4 pt-16 pb-5 sm:px-6 sm:pt-16 sm:pb-6 svelte-j1l7g3"><div class="relative mx-auto w-full max-w-screen-2xl svelte-j1l7g3"><!> <div class="audio-player-glass overflow-hidden rounded-2xl border shadow-2xl svelte-j1l7g3"><div class="relative px-4 py-3 svelte-j1l7g3"><!></div></div></div></div>', 1);

function zs(n, e) {
  qa(e, !0);
  const t = () => xt(C, "$playerStore", v),
    l = () => xt(wn, "$ffmpegBanner", v),
    c = () => xt(xn, "$activeTrackDownloads", v),
    p = () => xt(wt, "$lyricsStore", v),
    [v, f] = tr();
  let u, _ = oe(""),
    x = oe(!1),
    H = .8,
    q = null,
    N = 0,
    D = oe(0),
    A = null,
    z = null,
    j = oe(null);
  const W = bn(e, "onHeightChange", 3, () => {});
  let le = null,
    ze = null,
    ve = oe(!1);
  const Re = new Map;
  let Pe = null;
  const Be = 12,
    Qe = new Set(["HI_RES_LOSSLESS"]),
    ce = new Map;
  let we = null,
    w = null,
    E = null,
    ee = !1;
  const I = pt(() => ot(t().sampleRate)),
    Ce = typeof navigator < "u" && /firefox/i.test(navigator.userAgent);
  let Me = !1,
    g = null,
    R = !1;
  const T = typeof navigator < "u" && "mediaSession" in navigator;
  let ae = null,
    K = null,
    Oe = "none";

  function fe(a, i) {
    return `${a}:${i}`
  }

  function Se(a) {
    return a ? Qe.has(a) : !1
  }

  function Ye() {
    E && (URL.revokeObjectURL(E), E = null)
  }
  async function He() {
    if (Ye(), w) {
      try {
        await w.destroy()
      } catch (a) {
        console.debug("Failed to destroy Shaka player", a)
      }
      w = null
    }
    ee = !1, Me = !1
  }
  async function St() {
    if (!u) throw new Error("Audio element not ready for Shaka initialization");
    if (!we) {
      const a = await Mr(() => import("../chunks/CdiA3-15.js").then(d => d.s), __vite__mapDeps([0, 1, 2, 3, 4, 5]), import.meta.url);
      if (we = a.default ?? a, we?.polyfill?.installAll) try {
        we.polyfill.installAll()
      } catch (d) {
        console.debug("Shaka polyfill installation failed", d)
      }
    }
    if (!we) throw new Error("Shaka namespace unavailable");
    if (!w) {
      w = new we.Player(u);
      const a = w.getNetworkingEngine?.();
      a && !ee && (a.registerRequestFilter((i, d) => {
        d.method === "HEAD" && (d.method = "GET"), Array.isArray(d.uris) && (d.uris = d.uris.map(m => Ba(m)))
      }), ee = !0)
    }
    return u.crossOrigin = "anonymous", w
  }

  function Ne() {
    const a = new Set,
      i = "HI_RES_LOSSLESS",
      d = t().currentTrack;
    d && a.add(fe(d.id, i));
    const {
      queue: m,
      queueIndex: y
    } = t(), re = m[y + 1];
    re && a.add(fe(re.id, i));
    for (const U of ce.keys()) a.has(U) || ce.delete(U)
  }

  function at(a, i) {
    if (i.kind !== "flac") return;
    const d = i.urls.find(y => typeof y == "string" && y.length > 0);
    if (!d) return;
    const m = Ba(d);
    Re.set(fe(a, "LOSSLESS"), m)
  }
  async function xe(a, i) {
    const d = i ?? t().quality;
    if (Se(d)) throw new Error("Attempted to resolve hi-res stream via standard resolver");
    const m = fe(a.id, d),
      y = Re.get(m);
    if (y) return y;
    const re = await ut.getStreamUrl(a.id, d),
      U = Ba(re);
    return Re.set(m, U), U
  }

  function De() {
    const a = t().quality,
      i = new Set,
      d = Se(a) ? ["LOSSLESS"] : [a],
      m = t().currentTrack;
    if (m)
      for (const Q of d) i.add(fe(m.id, Q));
    const {
      queue: y,
      queueIndex: re
    } = t(), U = y[re + 1];
    if (U)
      for (const Q of d) i.add(fe(U.id, Q));
    for (const Q of Re.keys()) i.has(Q) || Re.delete(Q)
  }
  async function $e(a) {
    const i = fe(a.id, "HI_RES_LOSSLESS");
    if (ce.has(i) || Pe === i) {
      const d = ce.get(i);
      d && at(a.id, d);
      return
    }
    Pe = i;
    try {
      const d = await ut.getDashManifest(a.id, "HI_RES_LOSSLESS");
      ce.set(i, d), at(a.id, d), Ne()
    } catch (d) {
      console.warn("Failed to preload dash manifest:", d)
    } finally {
      Pe === i && (Pe = null)
    }
  }
  async function Xe(a) {
    const i = fe(a.id, "HI_RES_LOSSLESS");
    ce.has(i) || Pe === i || await $e(a)
  }

  function Rt(a) {
    if (a > Be) return;
    const {
      queue: i,
      queueIndex: d
    } = t(), m = i[d + 1];
    if (!m) return;
    const y = fe(m.id, "HI_RES_LOSSLESS");
    ce.has(y) || Pe === y || Xe(m)
  }
  Fe(() => {
    const a = t().currentTrack;
    !u || !a ? a || (q = null, b(_, ""), b(D, 0), Me = !1, g = null, R = !1, A = null, z = null, b(j, null)) : a.id !== q && (q = a.id, b(_, ""), b(D, 0), Me = !1, g = null, R = !1, A = a.id, z = t().quality, b(j, null), Ve(a))
  }), Fe(() => {
    const a = t().currentTrack;
    if (!u || !a) return;
    const i = t().quality;
    A === a.id && z === i || (A = a.id, z = i, Ve(a))
  }), Fe(() => {
    r(ve) && t().queue.length === 0 && b(ve, !1)
  }), Fe(() => {
    T && Zt(t().currentTrack)
  }), Fe(() => {
    if (T) {
      const a = !!t().currentTrack;
      Ot(a ? t().isPlaying ? "playing" : "paused" : "none")
    }
  });

  function ht(a) {
    C.playAtIndex(a)
  }

  function $t(a, i) {
    i && i.stopPropagation(), C.removeFromQueue(a)
  }

  function Je() {
    C.clearQueue()
  }

  function X() {
    C.shuffleQueue()
  }
  Fe(() => {
    u && (u.volume = t().volume)
  }), Fe(() => {
    t().isPlaying && u ? u.play().catch(console.error) : !t().isPlaying && u && u.pause()
  });
  async function me(a, i, d) {
    await He(), Me = !1;
    const m = await xe(a, i);
    d === N && (b(_, m, !0), b(j, i, !0), De(), u && (u.crossOrigin = "anonymous", u.load()))
  }
  async function Ee(a, i, d) {
    const m = fe(a.id, i);
    let y = ce.get(m);
    if (y || (y = await ut.getDashManifest(a.id, i), ce.set(m, y)), at(a.id, y), y.kind === "flac") return Me = !1, y;
    Ye();
    const re = new Blob([y.manifest], {
      type: y.contentType ?? "application/dash+xml"
    });
    E = URL.createObjectURL(re);
    const U = await St();
    return d !== N || (u && (u.pause(), u.removeAttribute("src"), u.load()), await U.unload(), await U.load(E), Me = !0, b(_, ""), b(j, "HI_RES_LOSSLESS"), Ne()), y
  }
  async function rt(a, i, d) {
    try {
      const m = await ut.getPreferredTrackMetadata(a.id, i);
      if (d !== N || q !== a.id) return;
      const y = m.info?.sampleRate,
        re = typeof y == "number" && Number.isFinite(y) && y > 0 ? Math.round(y) : null;
      C.setSampleRate(re ?? null)
    } catch (m) {
      console.debug("Failed to update track sample rate", m), d === N && q === a.id && C.setSampleRate(null)
    }
  }
  async function Ve(a) {
    const i = ++N;
    C.setLoading(!0), b(D, 0), b(j, null);
    const d = t().quality,
      m = y => {
        rt(a, y, i)
      };
    g && g !== a.id && (g = null);
    try {
      if (Se(d)) {
        try {
          const y = "HI_RES_LOSSLESS";
          if ((await Ee(a, y, i)).kind === "dash") {
            m(y);
            return
          }
          console.info("Dash endpoint returned FLAC fallback. Using lossless stream.")
        } catch (y) {
          y?.code === Sn && ce.delete(fe(a.id, "HI_RES_LOSSLESS")), console.warn("DASH playback failed, falling back to lossless stream.", y)
        }
        m("LOSSLESS"), await me(a, "LOSSLESS", i);
        return
      }
      await me(a, d, i), m(d)
    } catch (y) {
      if (console.error("Failed to load track:", y), i === N && d !== "LOSSLESS" && !Se(d)) try {
        await me(a, "LOSSLESS", i), m("LOSSLESS")
      } catch (re) {
        console.error("Secondary lossless fallback failed:", re)
      }
    } finally {
      i === N && C.setLoading(!1)
    }
  }

  function nt() {
    if (u) {
      C.setCurrentTime(u.currentTime), mt();
      const a = (t().duration ?? 0) - u.currentTime;
      Rt(a), be()
    }
  }
  async function st(a) {
    if (R) return;
    const i = t().currentTrack;
    if (!i || g === i.id) return;
    R = !0, g = i.id;
    const d = ++N;
    console.warn(`Attempting lossless fallback after DASH playback error (${a}).`);
    try {
      Me = !1, C.setLoading(!0), b(D, 0), await me(i, "LOSSLESS", d), await rt(i, "LOSSLESS", d)
    } catch (m) {
      console.error("Lossless fallback after DASH playback error failed", m), d === N && C.setLoading(!1)
    } finally {
      R = !1
    }
  }

  function Tt(a) {
    if (!Me || !Ce) return;
    const d = a.currentTarget?.error ?? null,
      m = d?.code,
      y = d?.MEDIA_ERR_DECODE,
      U = (typeof m == "number" && typeof y == "number" ? m === y : !1) ? "decode error" : m ? `code ${m}` : "unknown error";
    st(U)
  }

  function gt() {
    u && (C.setDuration(u.duration), mt(), be())
  }

  function mt() {
    if (!u) {
      b(D, 0);
      return
    }
    const {
      duration: a,
      buffered: i,
      currentTime: d
    } = u;
    if (!Number.isFinite(a) || a <= 0 || i.length === 0) {
      b(D, 0);
      return
    }
    let m = 0;
    for (let y = 0; y < i.length; y += 1) {
      const re = i.start(y),
        U = i.end(y);
      if (re <= d && U >= d) {
        m = U;
        break
      }
      m = Math.max(m, U)
    }
    b(D, Math.max(0, Math.min(100, m / a * 100)), !0)
  }

  function _t() {
    mt()
  }

  function Mt() {
    C.setLoading(!1), mt(), be()
  }

  function Kt(a, i) {
    return !Number.isFinite(i) || i <= 0 ? 0 : Math.max(0, Math.min(100, a / i * 100))
  }

  function $() {
    C.next(), be()
  }

  function M(a) {
    const d = a.currentTarget.getBoundingClientRect(),
      y = (a.clientX - d.left) / d.width * t().duration;
    u && (u.currentTime = y, C.setCurrentTime(y), be())
  }

  function Z(a) {
    const i = a.target,
      d = parseFloat(i.value);
    C.setVolume(d), d > 0 && r(x) && b(x, !1)
  }

  function de(a) {
    const d = a.detail?.timeSeconds;
    if (typeof d != "number" || !u) return;
    const m = Math.max(0, d);
    u.currentTime = m, C.setCurrentTime(m), be(), ta(C).isPlaying || C.play(), u.play().catch(() => {})
  }

  function se() {
    r(x) ? (C.setVolume(H), b(x, !1)) : (H = t().volume, C.setVolume(0), b(x, !0))
  }

  function ye(a) {
    if (isNaN(a)) return "0:00";
    const i = Math.floor(a / 60),
      d = Math.floor(a % 60);
    return `${i}:${d.toString().padStart(2,"0")}`
  }

  function G(a) {
    if (!a) return "—";
    const i = a.toUpperCase();
    return i === "LOSSLESS" ? "CD" : i === "HI_RES_LOSSLESS" ? "Hi-Res" : a
  }

  function ot(a) {
    if (!Number.isFinite(a ?? NaN) || !a || a <= 0) return null;
    const i = a / 1e3,
      d = i >= 100 || Math.abs(i - Math.round(i)) < .05 ? 0 : 1;
    return `${i.toFixed(d).replace(/\.0$/,"")} kHz`
  }

  function J(a) {
    if (!Number.isFinite(a ?? NaN) || !a || a <= 0) return null;
    const i = a / (1024 * 1024),
      d = i >= 100 ? 0 : i >= 10 ? 1 : 2;
    return `${i.toFixed(d)} MB`
  }

  function it(a) {
    return Number.isFinite(a ?? NaN) ? `${Math.max(0,Math.min(100,Math.round((a??0)*100)))}%` : "0%"
  }

  function It(a, i) {
    const d = J(a) ?? "0 MB",
      m = J(i) ?? null;
    return m ? `${d} / ${m}` : d
  }
  Fe(() => {
    if (l().phase === "ready") {
      const a = setTimeout(() => {
        je.dismissFfmpeg()
      }, 3200);
      return () => clearTimeout(a)
    }
  });

  function Ca(a) {
    if (!a.album?.cover) return [];
    const i = ["80", "160", "320", "640", "1280"],
      d = [];
    for (const m of i) {
      const y = ut.getCoverUrl(a.album.cover, m);
      y && d.push({
        src: y,
        sizes: `${m}x${m}`,
        type: "image/jpeg"
      })
    }
    return d
  }

  function Zt(a) {
    if (T) {
      if (!a) {
        ae = null, Oe = "none";
        try {
          navigator.mediaSession.metadata = null, navigator.mediaSession.playbackState = "none"
        } catch (i) {
          console.debug("Media Session reset failed", i)
        }
        return
      }
      if (ae !== a.id) {
        ae = a.id;
        try {
          navigator.mediaSession.metadata = new MediaMetadata({
            title: a.title,
            artist: a.artist?.name ?? "",
            album: a.album?.title ?? "",
            artwork: Ca(a)
          })
        } catch (i) {
          console.debug("Unable to set Media Session metadata", i)
        }
        be()
      }
    }
  }

  function Ot(a) {
    if (T && Oe !== a) {
      Oe = a;
      try {
        navigator.mediaSession.playbackState = a
      } catch (i) {
        console.debug("Unable to set Media Session playback state", i)
      }
    }
  }

  function be() {
    if (!T || !u || typeof navigator.mediaSession.setPositionState != "function") return;
    const a = u.duration,
      i = ta(C),
      d = Number.isFinite(a) ? a : i.duration;
    try {
      navigator.mediaSession.setPositionState({
        duration: Number.isFinite(d) ? d : 0,
        playbackRate: u.playbackRate ?? 1,
        position: u.currentTime
      })
    } catch (m) {
      console.debug("Unable to set Media Session position state", m)
    }
  }

  function aa() {
    if (!T) return;
    const a = (d, m) => {
      try {
        navigator.mediaSession.setActionHandler(d, m)
      } catch (y) {
        console.debug(`Media Session action ${d} unsupported`, y)
      }
    };
    a("play", async () => {
      if (C.play(), !!u) {
        try {
          await u.play()
        } catch (d) {
          console.debug("Media Session play failed", d)
        }
        Ot("playing"), be()
      }
    }), a("pause", () => {
      C.pause(), u?.pause(), Ot("paused"), be()
    }), a("previoustrack", () => {
      C.previous()
    }), a("nexttrack", () => {
      C.next()
    });
    const i = d => m => {
      if (!u) return;
      const y = m.seekOffset ?? 10,
        re = d === "forward" ? y : -y,
        U = u.currentTime + re,
        Q = u.duration,
        ke = Number.isFinite(Q) ? Math.min(Math.max(0, U), Math.max(Q, 0)) : Math.max(0, U);
      u.currentTime = ke, C.setCurrentTime(ke), be()
    };
    a("seekforward", i("forward")), a("seekbackward", i("backward")), a("seekto", d => {
      if (!u || d.seekTime === void 0) return;
      const m = Math.max(0, d.seekTime);
      u.currentTime = m, C.setCurrentTime(m), be()
    }), a("stop", () => {
      C.pause(), u && (u.pause(), u.currentTime = 0), C.setCurrentTime(0), Ot("paused"), be()
    }), K = () => {
      const d = ["play", "pause", "previoustrack", "nexttrack", "seekforward", "seekbackward", "seekto", "stop"];
      for (const m of d) a(m, null);
      ae = null, Oe = "none"
    }
  }
  er(() => {
    let a = null;
    if (u && (u.volume = t().volume), le && (ra(), ze = new ResizeObserver(() => {
        ra()
      }), ze.observe(le)), T) {
      aa();
      const i = ta(C);
      Zt(i.currentTrack), Ot(i.currentTrack ? i.isPlaying ? "playing" : "paused" : "none"), be()
    }
    if (typeof window < "u") {
      const i = d => de(d);
      window.addEventListener("lyrics:seek", i), a = () => {
        window.removeEventListener("lyrics:seek", i)
      }
    }
    return () => {
      if (ze?.disconnect(), K?.(), K = null, a?.(), He().catch(i => {
          console.debug("Shaka cleanup failed", i)
        }), T) try {
        navigator.mediaSession.metadata = null, navigator.mediaSession.playbackState = "none"
      } catch (i) {
        console.debug("Failed to clean up Media Session", i)
      }
    }
  });

  function ra() {
    typeof W() == "function" && le && W()(le.offsetHeight ?? 0)
  }
  var ba = Fs(),
    lt = V(ba);
  La(lt, a => u = a, () => u);
  var na = h(lt, 2),
    Et = o(na),
    Gt = o(Et);
  {
    var ka = a => {
      var i = xs(),
        d = o(i),
        m = o(d);
      {
        var y = U => {
          var Q = ys(),
            ke = o(Q),
            et = o(ke),
            ct = o(et),
            Lt = h(o(ct));
          {
            var yt = S => {
              var P = us(),
                B = o(P);
              s(P), Y(_e => te(B, `(${_e??""})`), [() => J(l().totalBytes)]), k(S, P)
            };
            F(Lt, S => {
              J(l().totalBytes) && S(yt)
            })
          }
          s(ct);
          var qt = h(ct, 2);
          {
            var Ht = S => {
                var P = vs(),
                  B = o(P);
                s(P), Y(() => te(B, `Starting in ${l().countdownSeconds??""} seconds…`)), k(S, P)
              },
              vt = S => {
                var P = ge(),
                  B = V(P);
                {
                  var _e = pe => {
                      var he = fs(),
                        Ie = o(he);
                      s(he), Y(ie => te(Ie, `Preparing encoder… ${ie??""}`), [() => it(l().progress)]), k(pe, he)
                    },
                    Le = pe => {
                      var he = ge(),
                        Ie = V(he);
                      {
                        var ie = Te => {
                            var bt = ps();
                            k(Te, bt)
                          },
                          dt = Te => {
                            var bt = ge(),
                              ja = V(bt);
                            {
                              var Bt = oa => {
                                var ia = hs(),
                                  Fa = o(ia, !0);
                                s(ia), Y(() => te(Fa, l().error ?? "Failed to load FFmpeg.")), k(oa, ia)
                              };
                              F(ja, oa => {
                                l().phase === "error" && oa(Bt)
                              }, !0)
                            }
                            k(Te, bt)
                          };
                        F(Ie, Te => {
                          l().phase === "ready" ? Te(ie) : Te(dt, !1)
                        }, !0)
                      }
                      k(pe, he)
                    };
                  F(B, pe => {
                    l().phase === "loading" ? pe(_e) : pe(Le, !1)
                  }, !0)
                }
                k(S, P)
              };
            F(qt, S => {
              l().phase === "countdown" ? S(Ht) : S(vt, !1)
            })
          }
          s(et);
          var Pt = h(et, 2);
          {
            var Ct = S => {
              var P = ms();
              P.__click = [gs];
              var B = o(P);
              ma(B, {
                size: 16
              }), s(P), k(S, P)
            };
            F(Pt, S => {
              l().dismissible && S(Ct)
            })
          }
          s(ke);
          var At = h(ke, 2);
          {
            var Nt = S => {
              var P = _s(),
                B = o(P);
              s(P), Y(_e => Wt(B, `width: ${_e??""}%`), [() => Math.min(Math.max(l().progress * 100, 6), 100)]), k(S, P)
            };
            F(At, S => {
              l().phase === "loading" && S(Nt)
            })
          }
          s(Q), k(U, Q)
        };
        F(m, U => {
          l().phase !== "idle" && U(y)
        })
      }
      var re = h(m, 2);
      Ea(re, 1, c, U => U.id, (U, Q) => {
        var ke = ws(),
          et = o(ke),
          ct = o(et),
          Lt = o(ct),
          yt = o(Lt);
        {
          var qt = ie => {
              Ga(ie, {
                size: 16,
                class: "animate-spin text-blue-300"
              })
            },
            Ht = ie => {
              Ka(ie, {
                size: 16,
                class: "text-blue-300"
              })
            };
          F(yt, ie => {
            r(Q).progress < .02 ? ie(qt) : ie(Ht, !1)
          })
        }
        var vt = h(yt, 2),
          Pt = o(vt, !0);
        s(vt), s(Lt);
        var Ct = h(Lt, 2);
        {
          var At = ie => {
            var dt = bs(),
              Te = o(dt, !0);
            s(dt), Y(() => te(Te, r(Q).subtitle)), k(ie, dt)
          };
          F(Ct, ie => {
            r(Q).subtitle && ie(At)
          })
        }
        var Nt = h(Ct, 2),
          S = o(Nt),
          P = o(S, !0);
        s(S);
        var B = h(S, 4),
          _e = o(B, !0);
        s(B), s(Nt), s(ct);
        var Le = h(ct, 2);
        Le.__click = [ks, Q];
        var pe = o(Le);
        ma(pe, {
          size: 16
        }), s(Le), s(et);
        var he = h(et, 2),
          Ie = o(he);
        s(he), s(ke), Y((ie, dt, Te) => {
          te(Pt, r(Q).title), te(P, ie), te(_e, dt), ne(Le, "aria-label", r(Q).cancellable ? `Cancel download for ${r(Q).title}` : `Dismiss download for ${r(Q).title}`), Wt(Ie, `width: ${Te??""}%`)
        }, [() => It(r(Q).receivedBytes, r(Q).totalBytes), () => it(r(Q).progress), () => Math.min(Math.max(r(Q).progress * 100, 4), 100)]), k(U, ke)
      }), s(d), s(i), k(a, i)
    };
    F(Gt, a => {
      (l().phase !== "idle" || c().length > 0) && a(ka)
    })
  }
  var wa = h(Gt, 2),
    xa = o(wa),
    Aa = o(xa);
  {
    var Ut = a => {
        var i = As(),
          d = V(i),
          m = o(d);
        m.__click = M;
        var y = o(m),
          re = h(y, 2),
          U = h(re, 2);
        s(m);
        var Q = h(m, 2),
          ke = o(Q),
          et = o(ke, !0);
        s(ke);
        var ct = h(ke, 2),
          Lt = o(ct, !0);
        s(ct), s(Q), s(d);
        var yt = h(d, 2),
          qt = o(yt),
          Ht = o(qt);
        {
          var vt = O => {
              var ue = Ss();
              ue.muted = !0, Y((Ue, tt) => {
                ne(ue, "src", Ue), ne(ue, "poster", tt), ne(ue, "aria-label", t().currentTrack.title)
              }, [() => ut.getVideoCoverUrl(t().currentTrack.album.videoCover, "640"), () => t().currentTrack.album.cover ? ut.getCoverUrl(t().currentTrack.album.cover, "640") : void 0]), k(O, ue)
            },
            Pt = O => {
              var ue = ge(),
                Ue = V(ue);
              {
                var tt = kt => {
                  var Yt = $s();
                  Y(Oa => {
                    ne(Yt, "src", Oa), ne(Yt, "alt", t().currentTrack.title)
                  }, [() => ut.getCoverUrl(t().currentTrack.album.cover, "640")]), k(kt, Yt)
                };
                F(Ue, kt => {
                  t().currentTrack.album.cover && kt(tt)
                }, !0)
              }
              k(O, ue)
            };
          F(Ht, O => {
            t().currentTrack.album.videoCover ? O(vt) : O(Pt, !1)
          })
        }
        var Ct = h(Ht, 2),
          At = o(Ct),
          Nt = o(At, !0);
        s(At);
        var S = h(At, 2),
          P = o(S, !0);
        s(S);
        var B = h(S, 2),
          _e = o(B),
          Le = o(_e, !0);
        s(_e);
        var pe = h(_e, 2);
        {
          var he = O => {
            var ue = Ts(),
              Ue = h(V(ue), 2),
              tt = o(Ue);
            s(Ue), Y(kt => te(tt, `(${kt??""} available)`), [() => G(t().currentTrack.audioQuality)]), k(O, ue)
          };
          F(pe, O => {
            r(j) && t().currentTrack.audioQuality && r(j) !== t().currentTrack.audioQuality && O(he)
          })
        }
        var Ie = h(pe, 2);
        {
          var ie = O => {
            var ue = Ms(),
              Ue = h(V(ue), 2),
              tt = o(Ue, !0);
            s(Ue), Y(() => te(tt, r(I))), k(O, ue)
          };
          F(Ie, O => {
            r(I) && O(ie)
          })
        }
        s(B), s(Ct), s(qt);
        var dt = h(qt, 2),
          Te = o(dt),
          bt = o(Te);
        bt.__click = () => C.previous();
        var ja = o(bt);
        ns(ja, {
          size: 20
        }), s(bt);
        var Bt = h(bt, 2);
        Bt.__click = () => C.togglePlay();
        var oa = o(Bt);
        {
          var ia = O => {
              An(O, {
                size: 24,
                fill: "currentColor"
              })
            },
            Fa = O => {
              jn(O, {
                size: 24,
                fill: "currentColor"
              })
            };
          F(oa, O => {
            t().isPlaying ? O(ia) : O(Fa, !1)
          })
        }
        s(Bt);
        var Sa = h(Bt, 2);
        Sa.__click = () => C.next();
        var qr = o(Sa);
        ss(qr, {
          size: 20
        }), s(Sa), s(Te);
        var za = h(Te, 2),
          Qt = o(za);
        Qt.__click = () => wt.toggle();
        var Pr = o(Qt);
        as(Pr, {
          size: 18
        }), Ae(2), s(Qt);
        var la = h(Qt, 2);
        la.__click = [cs, ve];
        var nr = o(la);
        mr(nr, {
          size: 18
        });
        var sr = h(nr, 2),
          Cr = o(sr);
        s(sr), s(la), s(za);
        var or = h(za, 2),
          ca = o(or);
        ca.__click = se;
        var Ar = o(ca);
        {
          var jr = O => {
              ls(O, {
                size: 20
              })
            },
            Fr = O => {
              is(O, {
                size: 20
              })
            };
          F(Ar, O => {
            r(x) || t().volume === 0 ? O(jr) : O(Fr, !1)
          })
        }
        s(ca);
        var Ra = h(ca, 2);
        $n(Ra), Ra.__input = Z, s(or), s(dt), s(yt);
        var ir = h(yt, 2);
        {
          var zr = O => {
            var ue = Ps(),
              Ue = o(ue),
              tt = o(Ue),
              kt = o(tt);
            mr(kt, {
              size: 18
            });
            var Yt = h(kt, 4),
              Oa = o(Yt, !0);
            s(Yt), s(tt);
            var lr = h(tt, 2),
              da = o(lr);
            da.__click = X;
            var Hr = o(da);
            zn(Hr, {
              size: 14
            }), Ae(), s(da);
            var ua = h(da, 2);
            ua.__click = Je;
            var Nr = o(ua);
            os(Nr, {
              size: 14
            }), Ae(), s(ua);
            var Ha = h(ua, 2);
            Ha.__click = [ds, ve];
            var Dr = o(Ha);
            ma(Dr, {
              size: 16
            }), s(Ha), s(lr), s(Ue);
            var Ir = h(Ue, 2);
            {
              var Ur = Xt => {
                  var va = Ls();
                  Ea(va, 5, () => t().queue, Za, (Qr, Na, fa) => {
                    var Da = Es(),
                      pa = o(Da);
                    pa.__click = () => ht(fa), pa.__keydown = ha => {
                      (ha.key === "Enter" || ha.key === " ") && (ha.preventDefault(), ht(fa))
                    };
                    var cr = o(pa);
                    cr.textContent = fa + 1;
                    var Ia = h(cr, 2),
                      Ua = o(Ia),
                      Vr = o(Ua, !0);
                    s(Ua);
                    var dr = h(Ua, 2),
                      Wr = o(dr, !0);
                    s(dr), s(Ia);
                    var $a = h(Ia, 2);
                    $a.__click = ha => $t(fa, ha);
                    var Kr = o($a);
                    ma(Kr, {
                      size: 14
                    }), s($a), s(pa), s(Da), Y(() => {
                      qe(pa, 1, `group flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors ${fa===t().queueIndex?"bg-blue-500/10 text-white":"text-gray-200 hover:bg-gray-800/70"}`, "svelte-j1l7g3"), te(Vr, r(Na).title), te(Wr, r(Na).artist.name), ne($a, "aria-label", `Remove ${r(Na).title} from queue`)
                    }), k(Qr, Da)
                  }), s(va), k(Xt, va)
                },
                Br = Xt => {
                  var va = qs();
                  k(Xt, va)
                };
              F(Ir, Xt => {
                t().queue.length > 0 ? Xt(Ur) : Xt(Br, !1)
              })
            }
            s(ue), Y(() => {
              te(Oa, t().queue.length), da.disabled = t().queue.length <= 1, ua.disabled = t().queue.length === 0
            }), Bn(3, ue, () => Kn, () => ({
              duration: 220,
              easing: Xn
            })), k(O, ue)
          };
          F(ir, O => {
            r(ve) && O(zr)
          })
        }
        var Rr = h(ir, 2);
        {
          var Or = O => {
            var ue = Cs();
            k(O, ue)
          };
          F(Rr, O => {
            t().currentTrack && t().isLoading && O(Or)
          })
        }
        Y((O, ue, Ue, tt, kt) => {
          Wt(y, `width: ${r(D)??""}%`), Wt(re, `width: ${O??""}%`), Wt(U, `left: ${ue??""}%`), te(et, Ue), te(Lt, tt), te(Nt, t().currentTrack.title), te(P, t().currentTrack.artist.name), te(Le, kt), bt.disabled = t().queueIndex <= 0, ne(Bt, "aria-label", t().isPlaying ? "Pause" : "Play"), Sa.disabled = t().queueIndex >= t().queue.length - 1, qe(Qt, 1, `player-toggle-button ${p().open?"player-toggle-button--active":""}`, "svelte-j1l7g3"), ne(Qt, "aria-label", p().open ? "Hide lyrics popup" : "Show lyrics popup"), ne(Qt, "aria-expanded", p().open), qe(la, 1, `player-toggle-button ${r(ve)?"player-toggle-button--active":""}`, "svelte-j1l7g3"), ne(la, "aria-expanded", r(ve)), te(Cr, `Queue (${t().queue.length??""})`), ne(ca, "aria-label", r(x) ? "Unmute" : "Mute"), Tn(Ra, t().volume)
        }, [() => Kt(t().currentTime, t().duration), () => Kt(t().currentTime, t().duration), () => ye(t().currentTime), () => ye(t().duration), () => G(r(j) ?? void 0)]), k(a, i)
      },
      sa = a => {
        var i = js();
        k(a, i)
      };
    F(Aa, a => {
      t().currentTrack ? a(Ut) : a(sa, !1)
    })
  }
  s(xa), s(wa), s(Et), s(na), La(na, a => le = a, () => le), Y(() => ne(lt, "src", r(_))), Vt("timeupdate", lt, nt), Vt("durationchange", lt, gt), Vt("ended", lt, $), Vt("loadeddata", lt, Mt), Vt("loadedmetadata", lt, mt), Vt("progress", lt, _t), Vt("error", lt, Tt), k(n, ba), Pa(), f()
}
Ja(["click", "input", "keydown"]);

function Rs(n, e, t, l) {
  b(e, "idle"), b(t, null), l()
}
var Os = L('<p class="lyrics-album svelte-muah1a"> </p>'),
  Hs = L('<p class="lyrics-subtitle svelte-muah1a"> </p> <!>', 1),
  Ns = L('<p class="lyrics-subtitle svelte-muah1a">Start playback to load synced lyrics.</p>'),
  Ds = L('<div class="lyrics-placeholder svelte-muah1a"><p class="lyrics-message svelte-muah1a"> </p> <button type="button" class="lyrics-retry svelte-muah1a">Try again</button></div>'),
  Is = L('<div class="lyrics-placeholder svelte-muah1a"><p class="lyrics-message svelte-muah1a">Press play to fetch lyrics.</p></div>'),
  Us = L('<div class="lyrics-placeholder svelte-muah1a"><span class="spinner svelte-muah1a" aria-hidden="true"></span> Loading lyrics…</div>'),
  Bs = L("<am-lyrics></am-lyrics>", 2),
  Qs = L('<div class="lyrics-component-wrapper svelte-muah1a"><!></div>'),
  Vs = L('<div class="lyrics-overlay svelte-muah1a" role="presentation" tabindex="-1"><div role="dialog" aria-modal="true" aria-label="Lyrics"><header class="lyrics-header svelte-muah1a"><div class="lyrics-heading svelte-muah1a"><h2 class="lyrics-title svelte-muah1a">Lyrics</h2> <!></div> <div class="lyrics-header-actions svelte-muah1a"><button type="button" class="lyrics-icon-button svelte-muah1a" aria-label="Refresh lyrics" title="Refresh lyrics"><!></button> <button type="button" class="lyrics-icon-button lyrics-maximize-button svelte-muah1a"><!></button> <button type="button" class="lyrics-icon-button svelte-muah1a" aria-label="Close lyrics" title="Close lyrics"><!></button></div></header> <div class="lyrics-body svelte-muah1a"><!></div></div></div>');

function Ws(n, e) {
  qa(e, !0);
  const t = () => xt(Mn, "$currentTime", p),
    l = () => xt(C, "$playerStore", p),
    c = () => xt(wt, "$lyricsStore", p),
    [p, v] = tr(),
    f = "https://cdn.jsdelivr.net/npm/@uimaxbai/am-lyrics@0.5.3/dist/src/am-lyrics.min.js",
    u = 220;
  let _ = oe(null),
    x = oe("idle"),
    H = oe(null),
    q = null,
    N = !1,
    D = oe(0),
    A = oe("0:none"),
    z = oe(null),
    j = null,
    W = 0,
    le = null,
    ze = oe(null);
  Fe(() => {
    const g = t() ?? 0,
      R = l().isPlaying,
      T = Number.isFinite(g) ? Math.max(0, g * 1e3) : 0;
    if (b(D, T, !0), W = performance.now(), r(x) === "ready" && r(_)) {
      const ae = Number(r(_).currentTime ?? 0),
        K = Math.abs(ae - T);
      (!R || K > u) && (r(_).currentTime = T)
    }
  }), Fe(() => {
    b(A, `${c().refreshToken}:${c().track?.id??"none"}`)
  }), Fe(() => {
    c().open && hr && ve(), ce(c().open)
  }), Sr(() => {
    ce(!1)
  });
  async function ve() {
    if (r(x) !== "ready") {
      if (typeof customElements < "u" && customElements.get("am-lyrics")) {
        b(x, "ready"), b(H, null);
        return
      }
      if (q) {
        b(x, "loading");
        try {
          await q
        } catch {}
        return
      }
      b(x, "loading"), b(H, null), q = Re().then(() => {
        b(x, "ready"), b(H, null), r(_) && (r(_).currentTime = r(D))
      }).catch(g => {
        console.error("Failed to load Apple Music lyrics component", g), b(x, "error"), b(H, g instanceof Error ? g.message : "Unable to load lyrics component.", !0)
      }).finally(() => {
        q = null
      }), await q
    }
  }

  function Re() {
    return new Promise((g, R) => {
      const T = () => {
        typeof customElements < "u" && "whenDefined" in customElements ? customElements.whenDefined("am-lyrics").then(() => g()).catch(R) : g()
      };
      if (typeof customElements < "u" && customElements.get("am-lyrics")) {
        g();
        return
      }
      const ae = document.querySelector("script[data-am-lyrics]");
      if (ae) {
        if (ae.dataset.loaded === "true") {
          T();
          return
        }
        const Se = () => {
            ae.dataset.loaded = "true", T()
          },
          Ye = () => {
            ae.removeEventListener("load", Se), ae.removeEventListener("error", Ye), ae.remove(), R(new Error("Failed to load lyrics component."))
          };
        ae.addEventListener("load", Se, {
          once: !0
        }), ae.addEventListener("error", Ye, {
          once: !0
        });
        return
      }
      const K = document.createElement("script");
      K.type = "module", K.src = f, K.dataset.amLyrics = "true";
      const Oe = () => {
          K.dataset.loaded = "true", T()
        },
        fe = () => {
          K.removeEventListener("load", Oe), K.removeEventListener("error", fe), K.remove(), R(new Error("Failed to load lyrics component."))
        };
      K.addEventListener("load", Oe, {
        once: !0
      }), K.addEventListener("error", fe, {
        once: !0
      }), document.head.append(K)
    })
  }

  function Pe(g) {
    g.target === g.currentTarget && wt.close()
  }

  function Be(g) {
    g.target === g.currentTarget && (g.key === "Enter" || g.key === " ") && (g.preventDefault(), wt.close())
  }

  function Qe(g) {
    g.key === "Escape" && c().open && (g.preventDefault(), wt.close())
  }

  function ce(g) {
    g && !N ? (window.addEventListener("keydown", Qe), N = !0) : !g && N && (window.removeEventListener("keydown", Qe), N = !1)
  }

  function we() {
    j !== null && (cancelAnimationFrame(j), j = null)
  }

  function w() {
    c().track && wt.refresh(), r(x) !== "ready" && hr && (b(x, "idle"), b(H, null), ve())
  }

  function E(g) {
    const R = g.detail;
    if (!R) return;
    const T = R.timestamp / 1e3;
    C.play(), window.dispatchEvent(new CustomEvent("lyrics:seek", {
      detail: {
        timeSeconds: T
      }
    }))
  }

  function ee(g, R = 0) {
    if (!g || g.__tidalScrollPatched) return;
    const T = g.shadowRoot?.querySelector(".lyrics-container");
    if (!T) {
      if (R > 8) return;
      le !== null && cancelAnimationFrame(le), le = requestAnimationFrame(() => {
        ee(g, R + 1)
      });
      return
    }
    le = null, g.__tidalScrollPatched = !0;
    const ae = getComputedStyle(T),
      K = parseFloat(ae.paddingTop || "0"),
      Oe = parseFloat(ae.paddingBottom || "0"),
      fe = .32,
      Se = .18,
      Ye = .22,
      He = xe => {
        const De = T.getBoundingClientRect(),
          $e = xe.getBoundingClientRect(),
          Xe = $e.top - De.top + T.scrollTop,
          Rt = Xe + $e.height,
          ht = T.scrollTop,
          $t = ht + T.clientHeight,
          Je = ht + K + T.clientHeight * Se,
          X = $t - Oe - T.clientHeight * Ye;
        if (Xe >= Je && Rt <= X) return null;
        const me = xe.querySelector(".background-text.before"),
          Ee = me ? Math.min(me.clientHeight / 2, $e.height * .6) : 0,
          rt = Xe - K - T.clientHeight * fe - Ee,
          Ve = T.scrollHeight - T.clientHeight;
        return Math.max(0, Math.min(Ve, rt))
      },
      St = xe => {
        xe === null || Math.abs(T.scrollTop - xe) < 1 || T.scrollTo({
          top: xe,
          behavior: "smooth"
        })
      },
      Ne = g.scrollToActiveLine?.bind(g);
    g.scrollToActiveLine = function() {
      const xe = Array.isArray(g.activeLineIndices) ? g.activeLineIndices : [];
      if (!xe.length) {
        Ne?.();
        return
      }
      const De = Math.min(...xe),
        $e = T.querySelector(`.lyrics-line:nth-child(${De+1})`);
      if (!$e) {
        Ne?.();
        return
      }
      const Xe = He($e);
      Xe !== null && St(Xe)
    };
    const at = g.scrollToInstrumental?.bind(g);
    g.scrollToInstrumental = function(xe) {
      const De = T.querySelector(`.lyrics-line:nth-child(${xe+1})`);
      if (!De) {
        at?.(xe);
        return
      }
      const $e = He(De);
      $e !== null && St($e)
    }
  }
  Fe(() => {
    if (!r(_)) return;
    const g = R => E(R);
    return r(_).addEventListener("line-click", g), () => {
      r(_)?.removeEventListener("line-click", g)
    }
  }), Fe(() => {
    const g = r(_);
    !g || r(x) !== "ready" || ee(g)
  }), Fe(() => {
    const g = c().open,
      R = c().track?.id ?? null;
    if (!g || !R) {
      b(ze, g ? R : null, !0);
      return
    }
    R !== r(ze) && (b(ze, R, !0), wt.refresh())
  }), Fe(() => {
    if (!r(_)) {
      we();
      return
    }
    if (r(x) !== "ready" || !c().open) {
      we(), r(_).currentTime = r(D);
      return
    }
    if (!l().isPlaying) {
      we(), r(_).currentTime = r(D);
      return
    }
    const g = r(_),
      R = r(D),
      T = performance.now(),
      ae = W && Math.abs(T - W) < 1200 ? W : T,
      K = Oe => {
        const fe = Oe - ae,
          Se = R + fe;
        g.currentTime = Se, j = requestAnimationFrame(K)
      };
    return j = requestAnimationFrame(K), () => {
      we()
    }
  }), Fe(() => {
    const g = c().track;
    if (!g) {
      b(z, null);
      return
    }
    const R = g.title,
      T = g.artist?.name ?? "",
      ae = g.album?.title,
      K = typeof g.duration == "number" ? Math.max(0, Math.round(g.duration * 1e3)) : void 0;
    b(z, {
      title: R,
      artist: T,
      album: ae,
      query: `${R} ${T}`.trim(),
      durationMs: K,
      isrc: g.isrc ?? ""
    }, !0)
  });
  var I = ge(),
    Ce = V(I);
  {
    var Me = g => {
      var R = Vs();
      R.__click = Pe, R.__keydown = Be;
      var T = o(R),
        ae = o(T),
        K = o(ae),
        Oe = h(o(K), 2);
      {
        var fe = X => {
            var me = Hs(),
              Ee = V(me),
              rt = o(Ee);
            s(Ee);
            var Ve = h(Ee, 2);
            {
              var nt = st => {
                var Tt = Os(),
                  gt = o(Tt, !0);
                s(Tt), Y(() => te(gt, r(z).album)), k(st, Tt)
              };
              F(Ve, st => {
                r(z).album && st(nt)
              })
            }
            Y(() => te(rt, `${r(z).title??""} • ${r(z).artist??""}`)), k(X, me)
          },
          Se = X => {
            var me = Ns();
            k(X, me)
          };
        F(Oe, X => {
          r(z) ? X(fe) : X(Se, !1)
        })
      }
      s(K);
      var Ye = h(K, 2),
        He = o(Ye);
      He.__click = w;
      var St = o(He);
      {
        let X = pt(() => r(x) === "loading" ? "animate-spin" : "");
        ts(St, {
          size: 18,
          get class() {
            return r(X)
          }
        })
      }
      s(He);
      var Ne = h(He, 2);
      Ne.__click = () => wt.toggleMaximize();
      var at = o(Ne);
      {
        var xe = X => {
            es(X, {
              size: 18
            })
          },
          De = X => {
            Jn(X, {
              size: 18
            })
          };
        F(at, X => {
          c().maximized ? X(xe) : X(De, !1)
        })
      }
      s(Ne);
      var $e = h(Ne, 2);
      $e.__click = () => wt.close();
      var Xe = o($e);
      ma(Xe, {
        size: 18
      }), s($e), s(Ye), s(ae);
      var Rt = h(ae, 2),
        ht = o(Rt);
      {
        var $t = X => {
            var me = Ds(),
              Ee = o(me),
              rt = o(Ee, !0);
            s(Ee);
            var Ve = h(Ee, 2);
            Ve.__click = [Rs, x, H, ve], s(me), Y(() => te(rt, r(H) ?? "Unable to load lyrics right now.")), k(X, me)
          },
          Je = X => {
            var me = ge(),
              Ee = V(me);
            {
              var rt = nt => {
                  var st = Is();
                  k(nt, st)
                },
                Ve = nt => {
                  var st = ge(),
                    Tt = V(st);
                  {
                    var gt = _t => {
                        var Mt = Us();
                        k(_t, Mt)
                      },
                      mt = _t => {
                        var Mt = Qs(),
                          Kt = o(Mt);
                        Hn(Kt, () => r(A), $ => {
                          var M = Bs();
                          qe(M, 1, "am-lyrics-element svelte-muah1a"), Y(() => ft(M, "song-title", r(z).title)), Y(() => ft(M, "song-artist", r(z).artist)), Y(() => ft(M, "song-album", r(z).album || void 0)), Y(() => ft(M, "song-duration", r(z).durationMs)), Y(() => ft(M, "query", r(z).query)), Y(() => ft(M, "isrc", r(z).isrc || void 0)), ft(M, "highlight-color", "#93c5fd"), ft(M, "hover-background-color", "rgba(59, 130, 246, 0.14)"), ft(M, "font-family", "'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"), ft(M, "autoscroll", !0), ft(M, "interpolate", !0), La(M, Z => b(_, Z), () => r(_)), k($, M)
                        }), s(Mt), k(_t, Mt)
                      };
                    F(Tt, _t => {
                      r(x) === "loading" || r(x) === "idle" ? _t(gt) : _t(mt, !1)
                    }, !0)
                  }
                  k(nt, st)
                };
              F(Ee, nt => {
                r(z) ? nt(Ve, !1) : nt(rt)
              }, !0)
            }
            k(X, me)
          };
        F(ht, X => {
          r(x) === "error" ? X($t) : X(Je, !1)
        })
      }
      s(Rt), s(T), s(R), Y(() => {
        qe(T, 1, `lyrics-panel ${c().maximized?"lyrics-panel--maximized":""}`, "svelte-muah1a"), He.disabled = !r(z) || r(x) === "loading", ne(Ne, "aria-label", c().maximized ? "Restore window" : "Maximize window"), ne(Ne, "title", c().maximized ? "Restore window" : "Maximize window")
      }), k(g, R)
    };
    F(Ce, g => {
      c().open && g(Me)
    })
  }
  k(n, I), Pa(), v()
}
Ja(["click", "keydown"]);
const Ks = $r("medium", n => {
    n(En());
    const e = Ln(t => {
      n(t)
    });
    return () => {
      e()
    }
  }),
  rr = Tr([_a, Ks], ([n, e]) => n.performanceMode === "auto" ? e : n.performanceMode),
  Zs = $r(!1, n => {
    const e = window.matchMedia("(prefers-reduced-motion: reduce)");
    n(e.matches);
    const t = l => {
      n(l.matches)
    };
    return e.addEventListener("change", t), () => {
      e.removeEventListener("change", t)
    }
  }),
  Gs = Tr([rr, Zs], ([n, e]) => e ? !1 : n !== "low"),
  ya = {
    red: 15,
    green: 23,
    blue: 42
  },
  zt = (n, e = 0, t = 255) => Math.min(t, Math.max(e, n)),
  Lr = (n, e, t) => ({
    red: zt(Math.round(n.red + (e.red - n.red) * t)),
    green: zt(Math.round(n.green + (e.green - n.green) * t)),
    blue: zt(Math.round(n.blue + (e.blue - n.blue) * t))
  }),
  _r = (n, e) => {
    const t = n.red - e.red,
      l = n.green - e.green,
      c = n.blue - e.blue;
    return Math.sqrt(t * t + l * l + c * c)
  },
  Ys = ({
    red: n,
    green: e,
    blue: t
  }) => {
    const l = n / 255,
      c = e / 255,
      p = t / 255,
      v = Math.max(l, c, p),
      f = Math.min(l, c, p);
    if (v === f) return 0;
    const u = (v + f) / 2,
      _ = v - f;
    return u > .5 ? _ / (2 - v - f) : _ / (v + f)
  },
  jt = ({
    red: n,
    green: e,
    blue: t
  }, l) => {
    const c = Math.round(zt(n)),
      p = Math.round(zt(e)),
      v = Math.round(zt(t));
    if (l === void 0) return `rgb(${c}, ${p}, ${v})`;
    const f = Math.min(Math.max(l, 0), 1);
    return `rgba(${c}, ${p}, ${v}, ${f.toFixed(3)})`
  },
  Dt = (n, e) => Lr(n, {
    red: 255,
    green: 255,
    blue: 255
  }, e),
  Xa = (n, e) => Lr(n, {
    red: 0,
    green: 0,
    blue: 0
  }, e),
  yr = ({
    red: n,
    green: e,
    blue: t
  }) => {
    const l = n / 255,
      c = e / 255,
      p = t / 255,
      v = l <= .03928 ? l / 12.92 : Math.pow((l + .055) / 1.055, 2.4),
      f = c <= .03928 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4),
      u = p <= .03928 ? p / 12.92 : Math.pow((p + .055) / 1.055, 2.4);
    return .2126 * v + .7152 * f + .0722 * u
  },
  Ma = (n, e) => {
    const t = yr(n),
      l = yr(e),
      c = Math.max(t, l),
      p = Math.min(t, l);
    return (c + .05) / (p + .05)
  },
  Jt = n => {
    const e = {
        red: 255,
        green: 255,
        blue: 255
      },
      t = {
        red: 156,
        green: 163,
        blue: 175
      },
      l = 4.5,
      c = 3;
    let p = {
        ...n
      },
      v = Ma(p, e),
      f = Ma(p, t),
      u = 0;
    const _ = 20;
    for (;
      (v < l || f < c) && u < _;) p = Xa(p, .08), v = Ma(p, e), f = Ma(p, t), u++;
    return p
  },
  Va = {
    dominant: ya,
    accent: {
      red: 30,
      green: 64,
      blue: 175
    },
    palette: [ya]
  },
  br = n => ({
    red: zt(Math.round(n?.[0] ?? ya.red)),
    green: zt(Math.round(n?.[1] ?? ya.green)),
    blue: zt(Math.round(n?.[2] ?? ya.blue))
  }),
  Xs = (n, e) => {
    if (e.length === 0) return n;
    const t = e.filter(c => Ys(c) > .2);
    return (t.length > 0 ? t : e).slice().sort((c, p) => _r(n, p) - _r(n, c))[0] ?? n
  };
let Wa = null;
const Js = async () => (Wa || (Wa = Mr(() => import("../chunks/Cf9SoGPP.js"), [], import.meta.url).then(n => {
  const e = n.default ?? n;
  return new e
}).catch(n => (console.warn("Failed to load Color Thief", n), null))), Wa);
async function eo(n, e = 32) {
  const t = await Js();
  if (!t) return Va;
  const l = new Image;
  l.crossOrigin = "anonymous", l.decoding = "async";
  const c = new Promise((N, D) => {
    l.onload = () => N(l), l.onerror = A => D(A)
  });
  l.src = n;
  let p;
  try {
    p = await c
  } catch (N) {
    return console.warn("Failed to load image for palette extraction", N), Va
  }
  let v = [],
    f;
  const u = 6,
    _ = Math.max(1, Math.round(e / 4));
  try {
    v = t.getPalette(p, u, _) ?? [], f = v[0] ?? t.getColor(p, _)
  } catch (N) {
    return console.warn("Color Thief failed to extract palette", N), Va
  }
  const x = v.map(N => br(N)),
    H = br(f),
    q = Xs(H, x.slice(1));
  return {
    dominant: H,
    accent: q,
    palette: x.length > 0 ? x : [H]
  }
}
var to = L('<div class="dynamic-background__gradient svelte-p0g84h"></div> <div class="dynamic-background__vignette svelte-p0g84h"></div> <div class="dynamic-background__noise svelte-p0g84h"></div>', 1),
  ao = L('<div class="dynamic-background__fallback svelte-p0g84h"></div>'),
  ro = L('<div aria-hidden="true"><!></div>');

function no(n, e) {
  qa(e, !0);
  const t = {
      primary: "#0f172a",
      secondary: "#1e293b",
      accent: "#3b82f6",
      surface: "rgba(15, 23, 42, 0.95)",
      border: "rgba(148, 163, 184, 0.18)",
      highlight: "rgba(96, 165, 250, 0.45)",
      glow: "rgba(59, 130, 246, 0.35)",
      tertiary: "rgba(99, 102, 241, 0.32)",
      quaternary: "rgba(30, 64, 175, 0.28)"
    },
    l = w => {
      const E = Jt(w.dominant),
        ee = Jt(w.accent),
        I = Jt(w.palette[1] ?? Dt(E, .08)),
        Ce = Jt(w.palette[2] ?? Dt(ee, .2)),
        Me = Jt(w.palette[3] ?? Xa(ee, .15)),
        g = Jt(w.palette[4] ?? Dt(E, .12));
      return {
        primary: jt(Xa(E, .25)),
        secondary: jt(Dt(I, .12)),
        accent: jt(Dt(ee, .08)),
        surface: jt(Dt(E, .05), .95),
        border: jt(Dt(E, .4), .18),
        highlight: jt(Dt(ee, .25), .45),
        glow: jt(Ce, .38),
        tertiary: jt(Me, .32),
        quaternary: jt(g, .28)
      }
    };
  let c = t,
    p = oe(!1),
    v = oe(!0),
    f = oe("high"),
    u = oe(!0),
    _ = 0,
    x = {
      currentTrack: null
    },
    H = null,
    q = 0;
  const N = 3,
    D = 600,
    A = w => {
      const E = document.documentElement;
      E.style.setProperty("--bloom-primary", w.primary), E.style.setProperty("--bloom-secondary", w.secondary), E.style.setProperty("--bloom-accent", w.accent), E.style.setProperty("--bloom-glow", w.glow), E.style.setProperty("--bloom-tertiary", w.tertiary), E.style.setProperty("--bloom-quaternary", w.quaternary), E.style.setProperty("--surface-color", w.surface), E.style.setProperty("--surface-border", w.border), E.style.setProperty("--surface-highlight", w.highlight), E.style.setProperty("--accent-color", w.accent)
    },
    z = w => {
      c = l(w), A(c)
    },
    j = () => {
      c = t, A(c)
    },
    W = w => {
      if (!w) return null;
      const E = w.album?.cover ?? null;
      if (E) {
        const I = r(f) === "low" ? "320" : r(f) === "medium" ? "640" : "1280";
        return ut.getCoverUrl(E, I)
      }
      const ee = w.artist?.picture ?? w.artists?.find(I => !!I?.picture)?.picture ?? null;
      return ee ? ut.getArtistPictureUrl(ee, "750") : null
    },
    le = async (w = null) => {
      if (r(f) === "low") {
        j(), H = null, q = 0;
        return
      }
      const E = w ?? x,
        ee = ++_;
      if (!E?.currentTrack) {
        j(), H = null, q = 0;
        return
      }
      const I = W(E.currentTrack);
      if (!I) {
        j(), H = null, q = 0;
        return
      }
      if (I !== H) {
        H = I, q = 0;
        try {
          const Ce = await eo(I);
          ee === _ && z(Ce)
        } catch (Ce) {
          console.warn("Failed to extract palette from cover art", Ce), ee === _ && (H = null, q += 1, j(), q <= N ? setTimeout(() => {
            le()
          }, D) : q = 0)
        }
      }
    };
  let ze = () => {},
    ve = null;
  const Re = w => {
      x = w, b(p, w.isPlaying && !!w.currentTrack, !0);
      const E = w.currentTrack ? W(w.currentTrack) : null;
      r(u) && E === ve || (ve = r(u) ? E : null, le(w))
    },
    Pe = () => {
      ze = C.subscribe(w => {
        const E = {
          currentTrack: w.currentTrack ? {
            album: {
              cover: w.currentTrack.album?.cover ?? null,
              videoCover: w.currentTrack.album?.videoCover ?? null
            },
            artist: w.currentTrack.artist ? {
              picture: w.currentTrack.artist.picture ?? null
            } : null,
            artists: w.currentTrack.artists?.map(ee => ({
              picture: ee.picture ?? null
            })) ?? null
          } : null,
          isPlaying: w.isPlaying
        };
        Re(E)
      })
    };
  er(() => {
    A(c);
    const w = rr.subscribe(I => {
        const Ce = r(f);
        I !== Ce && (b(f, I, !0), b(u, I !== "low"), I === "low" ? (_ += 1, ve = null, H = null, q = 0, j()) : Ce === "low" && x?.currentTrack && (ve = null, H = null, q = 0, le(x)))
      }),
      E = Gs.subscribe(I => {
        b(v, I, !0)
      }),
      ee = ta(C);
    if (ee.currentTrack) {
      const I = {
          currentTrack: {
            album: {
              cover: ee.currentTrack.album?.cover ?? null,
              videoCover: ee.currentTrack.album?.videoCover ?? null
            },
            artist: ee.currentTrack.artist ? {
              picture: ee.currentTrack.artist.picture ?? null
            } : null,
            artists: ee.currentTrack.artists?.map(Me => ({
              picture: Me.picture ?? null
            })) ?? null
          },
          isPlaying: ee.isPlaying
        },
        Ce = W(I.currentTrack);
      b(u, r(f) !== "low"), ve = r(u) ? Ce : null, x = I, b(p, I.isPlaying && !!I.currentTrack, !0), le(I)
    }
    return Pe(), () => {
      w(), E()
    }
  }), Sr(() => {
    ze?.()
  });
  var Be = ro(),
    Qe = o(Be);
  {
    var ce = w => {
        var E = to();
        Ae(4), k(w, E)
      },
      we = w => {
        var E = ao();
        k(w, E)
      };
    F(Qe, w => {
      r(u) ? w(ce) : w(we, !1)
    })
  }
  s(Be), Y(() => {
    qe(Be, 1, `dynamic-background ${r(p)&&r(v)?"playing":""} ${r(u)?"":"is-disabled"}`, "svelte-p0g84h"), ne(Be, "data-performance", r(f))
  }), k(n, Be), Pa()
}
async function so(n, e, t, l) {
  const {
    tracks: c,
    quality: p
  } = e();
  if (c.length === 0) {
    b(t, !1), alert("Add tracks to the queue before exporting.");
    return
  }
  b(t, !1), await l(c, p)
}
async function oo(n, e, t, l, c, p, v, f) {
  if (r(e)) return;
  const {
    tracks: u,
    quality: _
  } = t();
  if (u.length === 0) {
    b(l, !1), alert("Add tracks to the queue before downloading.");
    return
  }
  if (b(l, !1), r(c) === "csv") {
    await p(u, _);
    return
  }
  if (r(c) === "zip" && u.length > 1) {
    await v(u, _);
    return
  }
  await f(u, _)
}
var io = L('<link rel="icon" class="svelte-12qhfyh"/> <link rel="manifest" href="/manifest.webmanifest" class="svelte-12qhfyh"/> <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" class="svelte-12qhfyh"/> <meta name="theme-color" content="#0f172a" class="svelte-12qhfyh"/> <meta name="apple-mobile-web-app-capable" content="yes" class="svelte-12qhfyh"/> <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" class="svelte-12qhfyh"/>', 1),
  lo = (n, e) => {
    b(e, !r(e))
  },
  co = (n, e, t) => e(r(t).value),
  uo = L('<button type="button"><div class="glass-option__content svelte-12qhfyh"><span class="glass-option__label svelte-12qhfyh"> </span> <span class="glass-option__description svelte-12qhfyh"> </span></div> <!></button>'),
  vo = (n, e) => e("individual"),
  fo = (n, e) => e("zip"),
  po = (n, e) => e("csv"),
  ho = (n, e, t) => e(r(t).value),
  go = L('<button type="button"><div class="glass-option__content svelte-12qhfyh"><span class="glass-option__label svelte-12qhfyh"> </span></div> <!></button>'),
  mo = L('<!> <span class="svelte-12qhfyh">Download queue</span>', 1),
  _o = L('<!> <span class="svelte-12qhfyh">Export queue links</span>', 1),
  yo = L('<!> <span class="svelte-12qhfyh">Download queue</span>', 1),
  bo = L(`<div class="settings-menu glass-popover svelte-12qhfyh"><div class="settings-grid svelte-12qhfyh"><section class="settings-section settings-section--wide svelte-12qhfyh"><p class="section-heading svelte-12qhfyh">Streaming & Downloads</p> <div class="option-grid svelte-12qhfyh"></div></section> <section class="settings-section settings-section--wide svelte-12qhfyh"><p class="section-heading svelte-12qhfyh">Conversions</p> <button type="button"><span class="glass-option__content svelte-12qhfyh"><span class="glass-option__label svelte-12qhfyh">Convert AAC downloads to MP3</span> <span class="glass-option__description svelte-12qhfyh">Applies to 320kbps and 96kbps downloads.</span></span> <span> </span></button> <button type="button"><span class="glass-option__content svelte-12qhfyh"><span class="glass-option__label svelte-12qhfyh">Download covers separately</span> <span class="glass-option__description svelte-12qhfyh">Save cover.jpg alongside audio files.</span></span> <span> </span></button></section> <section class="settings-section settings-section--wide svelte-12qhfyh"><p class="section-heading svelte-12qhfyh">Queue exports</p> <div class="option-grid option-grid--compact svelte-12qhfyh"><button type="button"><span class="glass-option__content svelte-12qhfyh"><span class="glass-option__label svelte-12qhfyh"><!> <span class="svelte-12qhfyh">Individual files</span></span></span> <!></button> <button type="button"><span class="glass-option__content svelte-12qhfyh"><span class="glass-option__label svelte-12qhfyh"><!> <span class="svelte-12qhfyh">ZIP archive</span></span></span> <!></button> <button type="button"><span class="glass-option__content svelte-12qhfyh"><span class="glass-option__label svelte-12qhfyh"><!> <span class="svelte-12qhfyh">Export links</span></span></span> <!></button></div></section> <section class="settings-section settings-section--wide svelte-12qhfyh"><p class="section-heading svelte-12qhfyh">Performance Mode</p> <div class="option-grid option-grid--compact svelte-12qhfyh"></div></section> <section class="settings-section settings-section--bordered svelte-12qhfyh"><p class="section-heading svelte-12qhfyh">Queue actions</p> <div class="actions-column svelte-12qhfyh"><button type="button" class="glass-action svelte-12qhfyh"><span class="glass-action__label svelte-12qhfyh"><!></span> <!></button> <button type="button" class="glass-action svelte-12qhfyh"><span class="glass-action__label svelte-12qhfyh"><!> <span class="svelte-12qhfyh">Export links as CSV</span></span> <!></button></div> <p class="section-footnote svelte-12qhfyh">Queue actions follow your selection above. ZIP bundles require at least two tracks,
											while CSV exports capture the track links without downloading audio.</p></section></div></div>`),
  ko = L('<div class="app-root svelte-12qhfyh"><!> <div class="app-shell svelte-12qhfyh"><header class="app-header glass-panel svelte-12qhfyh"><div class="app-header__inner svelte-12qhfyh"><a href="/" class="brand svelte-12qhfyh" aria-label="Home"><div class="brand__text svelte-12qhfyh"><h1 class="brand__title svelte-12qhfyh"> </h1> <p class="brand__subtitle svelte-12qhfyh">sailing on PCM tidal waves</p></div></a> <div class="toolbar svelte-12qhfyh"><div class="settings-trigger svelte-12qhfyh"><button type="button" aria-haspopup="true"><span class="toolbar-button__label svelte-12qhfyh"><!> <span class="toolbar-button__text svelte-12qhfyh">Settings</span></span> <span class="text-gray-400 svelte-12qhfyh"> </span> <span><!></span></button> <!></div> <a target="_blank" rel="noopener noreferrer" href="https://github.com/uimaxbai/tidal-ui" class="toolbar-icon svelte-12qhfyh" aria-label="Project GitHub"><svg viewBox="0 0 98 96" class="toolbar-icon__svg svelte-12qhfyh" aria-hidden="true" width="98" height="96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" class="svelte-12qhfyh"></path></svg></a></div></div></header> <main class="app-main glass-panel mb-56 sm:mb-40 svelte-12qhfyh"><div class="app-main__inner svelte-12qhfyh"><!></div></main> <!></div></div> <!>', 1);

function Co(n, e) {
  qa(e, !0);
  const t = () => xt(fr, "$downloadPreferencesStore", p),
    l = () => xt(C, "$playerStore", p),
    c = () => xt(_a, "$userPreferencesStore", p),
    [p, v] = tr(),
    f = pt(() => e.data?.title ?? "BiniTidal");
  let u = oe(0),
    _ = oe(0),
    x = oe(0),
    H = oe(null),
    q = oe(!1),
    N = oe("high"),
    D = oe(!1),
    A = oe(!1),
    z = oe(!1),
    j = null;
  const W = pt(() => t().mode),
    le = pt(() => r(W) === "zip" ? !!(r(D) || r(z) || r(A)) : r(W) === "csv" ? !!r(A) : !!r(z)),
    ze = pt(() => () => Math.max(0, r(x) - r(u) - r(_))),
    ve = pt(() => () => Math.max(r(_), 128)),
    Re = pt(() => () => Math.max(0, r(u) + 12)),
    Pe = [{
      value: "HI_RES_LOSSLESS",
      label: "Hi-Res",
      description: "24-bit FLAC (DASH) up to 192 kHz"
    }, {
      value: "LOSSLESS",
      label: "CD Lossless",
      description: "16-bit / 44.1 kHz FLAC"
    }, {
      value: "HIGH",
      label: "320kbps AAC",
      description: "High quality AAC streaming"
    }, {
      value: "LOW",
      label: "96kbps AAC",
      description: "Data saver AAC streaming"
    }],
    Be = [{
      value: "auto",
      label: "Auto",
      description: "Automatically detect device capabilities"
    }, {
      value: "high",
      label: "High Quality",
      description: "Full effects with blur and animations"
    }, {
      value: "medium",
      label: "Balanced",
      description: "Reduced effects for better performance"
    }, {
      value: "low",
      label: "Performance",
      description: "Minimal effects for low-end devices"
    }],
    Qe = pt(() => () => {
      const $ = l().quality;
      return $ === "HI_RES_LOSSLESS" ? "Hi-Res" : $ === "LOSSLESS" ? "CD" : Pe.find(M => M.value === $)?.label ?? "Quality"
    }),
    ce = pt(() => c().convertAacToMp3),
    we = pt(() => c().downloadCoversSeperately);

  function w($) {
    C.setQuality($), b(q, !1)
  }

  function E() {
    _a.toggleConvertAacToMp3()
  }

  function ee() {
    _a.toggleDownloadCoversSeperately()
  }

  function I($) {
    fr.setMode($)
  }

  function Ce($) {
    _a.setPerformanceMode($)
  }

  function Me() {
    const $ = ta(C);
    return {
      tracks: $.queue.length ? $.queue : $.currentTrack ? [$.currentTrack] : [],
      quality: $.quality
    }
  }

  function g($, M, Z) {
    const de = Cn(Z, r(ce)),
      se = `${M+1}`.padStart(2, "0"),
      ye = vr($.artist?.name ?? "Unknown Artist"),
      G = vr($.title ?? `Track ${se}`);
    return `${se} - ${ye} - ${G}.${de}`
  }

  function R($, M) {
    const Z = URL.createObjectURL($),
      de = document.createElement("a");
    de.href = Z, de.download = M, document.body.appendChild(de), de.click(), document.body.removeChild(de), URL.revokeObjectURL(Z)
  }

  function T($) {
    return `tidal-export-${new Date().toISOString().replace(/[:.]/g,"-")}.${$}`
  }
  async function ae($, M) {
    b(D, !0);
    try {
      const Z = new Pn;
      for (const [se, ye] of $.entries()) {
        const G = g(ye, se, M),
          {
            blob: ot
          } = await ut.fetchTrackBlob(ye.id, M, G, {
            ffmpegAutoTriggered: !1,
            convertAacToMp3: r(ce)
          });
        Z.file(G, ot)
      }
      const de = await Z.generateAsync({
        type: "blob",
        compression: "DEFLATE",
        compressionOptions: {
          level: 6
        }
      });
      R(de, T("zip"))
    } catch (Z) {
      console.error("Failed to build ZIP export", Z), alert("Unable to build ZIP export. Please try again.")
    } finally {
      b(D, !1)
    }
  }
  async function K($, M) {
    b(A, !0);
    try {
      const Z = await qn($, M),
        de = new Blob([Z], {
          type: "text/csv;charset=utf-8;"
        });
      R(de, T("csv"))
    } catch (Z) {
      console.error("Failed to export queue as CSV", Z), alert("Unable to export CSV. Please try again.")
    } finally {
      b(A, !1)
    }
  }
  async function Oe($, M) {
    if (r(z)) return;
    b(z, !0);
    const Z = [];
    try {
      for (const [de, se] of $.entries()) {
        const ye = g(se, de, M),
          {
            taskId: G,
            controller: ot
          } = je.beginTrackDownload(se, ye, {
            subtitle: se.album?.title ?? se.artist?.name
          });
        je.skipFfmpegCountdown();
        try {
          await ut.downloadTrack(se.id, M, ye, {
            signal: ot.signal,
            onProgress: J => {
              J.stage === "downloading" ? je.updateTrackProgress(G, J.receivedBytes, J.totalBytes) : je.updateTrackStage(G, J.progress)
            },
            onFfmpegCountdown: ({
              totalBytes: J
            }) => {
              const it = typeof J == "number" ? J : 0;
              je.startFfmpegCountdown(it, {
                autoTriggered: !1
              })
            },
            onFfmpegStart: () => je.startFfmpegLoading(),
            onFfmpegProgress: J => je.updateFfmpegProgress(J),
            onFfmpegComplete: () => je.completeFfmpeg(),
            onFfmpegError: J => je.errorFfmpeg(J),
            ffmpegAutoTriggered: !1,
            convertAacToMp3: r(ce),
            downloadCoverSeperately: r(we)
          }), je.completeTrackDownload(G)
        } catch (J) {
          if (J instanceof DOMException && J.name === "AbortError") {
            je.completeTrackDownload(G);
            continue
          }
          console.error("Failed to download track from queue:", J), je.errorTrackDownload(G, J);
          const it = `${se.artist?.name??"Unknown Artist"} - ${se.title??"Unknown Track"}`,
            It = J instanceof Error && J.message ? J.message : "Failed to download track. Please try again.";
          Z.push(`${it}: ${It}`)
        }
      }
      if (Z.length > 0) {
        const de = ["Unable to download some tracks individually:", ...Z.slice(0, 3), Z.length > 3 ? `…and ${Z.length-3} more` : void 0].filter(Boolean).join(`
`);
        alert(de)
      }
    } finally {
      b(z, !1)
    }
  }
  const fe = $ => {
    b(_, $, !0)
  };
  let Se = null;
  er(() => {
    const $ = rr.subscribe(se => {
        b(N, se, !0), typeof document < "u" && document.documentElement.setAttribute("data-performance", se)
      }),
      M = () => {
        b(x, window.innerHeight, !0)
      };
    M(), window.addEventListener("resize", M);
    const Z = se => {
      const ye = se.target;
      if (r(q)) {
        const G = j;
        (!G || !ye || !G.contains(ye)) && b(q, !1)
      }
    };
    document.addEventListener("click", Z);
    const de = Fn.subscribe(se => {
      b(H, se, !0)
    });
    if ("serviceWorker" in navigator) {
      (async () => {
        try {
          const G = await navigator.serviceWorker.register("/service-worker.js"),
            ot = () => {
              G.waiting && G.waiting.postMessage({
                type: "SKIP_WAITING"
              })
            };
          G.waiting && ot(), G.addEventListener("updatefound", () => {
            const J = G.installing;
            J && J.addEventListener("statechange", () => {
              J.state === "installed" && navigator.serviceWorker.controller && ot()
            })
          })
        } catch (G) {
          console.error("Service worker registration failed", G)
        }
      })();
      let ye = !1;
      Se = () => {
        ye || (ye = !0, window.location.reload())
      }, navigator.serviceWorker.addEventListener("controllerchange", Se)
    }
    return () => {
      window.removeEventListener("resize", M), document.removeEventListener("click", Z), de(), $(), Se && navigator.serviceWorker.removeEventListener("controllerchange", Se)
    }
  });
  var Ye = ko();
  mn($ => {
    var M = io(),
      Z = V(M);
    Ae(10), Y(() => {
      yn.title = r(f) ?? "", ne(Z, "href", Zn)
    }), k($, M)
  });
  var He = V(Ye),
    St = o(He);
  no(St, {});
  var Ne = h(St, 2),
    at = o(Ne),
    xe = o(at),
    De = o(xe),
    $e = o(De),
    Xe = o($e),
    Rt = o(Xe, !0);
  s(Xe), Ae(2), s($e), s(De);
  var ht = h(De, 2),
    $t = o(ht),
    Je = o($t);
  Je.__click = [lo, q];
  var X = o(Je),
    me = o(X);
  rs(me, {
    size: 16
  }), Ae(2), s(X);
  var Ee = h(X, 2),
    rt = o(Ee, !0);
  s(Ee);
  var Ve = h(Ee, 2),
    nt = o(Ve);
  Rn(nt, {
    size: 16
  }), s(Ve), s(Je);
  var st = h(Je, 2);
  {
    var Tt = $ => {
      var M = bo(),
        Z = o(M),
        de = o(Z),
        se = h(o(de), 2);
      Ea(se, 21, () => Pe, Za, (S, P) => {
        var B = uo();
        B.__click = [co, w, P];
        var _e = o(B),
          Le = o(_e),
          pe = o(Le, !0);
        s(Le);
        var he = h(Le, 2),
          Ie = o(he, !0);
        s(he), s(_e);
        var ie = h(_e, 2);
        {
          var dt = Te => {
            ga(Te, {
              size: 16,
              class: "glass-option__check"
            })
          };
          F(ie, Te => {
            r(P).value === l().quality && Te(dt)
          })
        }
        s(B), Y(() => {
          qe(B, 1, `glass-option ${r(P).value===l().quality?"is-active":""}`, "svelte-12qhfyh"), ne(B, "aria-pressed", r(P).value === l().quality), te(pe, r(P).label), te(Ie, r(P).description)
        }), k(S, B)
      }), s(se), s(de);
      var ye = h(de, 2),
        G = h(o(ye), 2);
      G.__click = E;
      var ot = h(o(G), 2),
        J = o(ot, !0);
      s(ot), s(G);
      var it = h(G, 2);
      it.__click = ee;
      var It = h(o(it), 2),
        Ca = o(It, !0);
      s(It), s(it), s(ye);
      var Zt = h(ye, 2),
        Ot = h(o(Zt), 2),
        be = o(Ot);
      be.__click = [vo, I];
      var aa = o(be),
        ra = o(aa),
        ba = o(ra);
      Ka(ba, {
        size: 16
      }), Ae(2), s(ra), s(aa);
      var lt = h(aa, 2);
      {
        var na = S => {
          ga(S, {
            size: 14,
            class: "glass-option__check"
          })
        };
        F(lt, S => {
          r(W) === "individual" && S(na)
        })
      }
      s(be);
      var Et = h(be, 2);
      Et.__click = [fo, I];
      var Gt = o(Et),
        ka = o(Gt),
        wa = o(ka);
      gr(wa, {
        size: 16
      }), Ae(2), s(ka), s(Gt);
      var xa = h(Gt, 2);
      {
        var Aa = S => {
          ga(S, {
            size: 14,
            class: "glass-option__check"
          })
        };
        F(xa, S => {
          r(W) === "zip" && S(Aa)
        })
      }
      s(Et);
      var Ut = h(Et, 2);
      Ut.__click = [po, I];
      var sa = o(Ut),
        a = o(sa),
        i = o(a);
      Qa(i, {
        size: 16
      }), Ae(2), s(a), s(sa);
      var d = h(sa, 2);
      {
        var m = S => {
          ga(S, {
            size: 14,
            class: "glass-option__check"
          })
        };
        F(d, S => {
          r(W) === "csv" && S(m)
        })
      }
      s(Ut), s(Ot), s(Zt);
      var y = h(Zt, 2),
        re = h(o(y), 2);
      Ea(re, 21, () => Be, Za, (S, P) => {
        var B = go();
        B.__click = [ho, Ce, P];
        var _e = o(B),
          Le = o(_e),
          pe = o(Le, !0);
        s(Le), s(_e);
        var he = h(_e, 2);
        {
          var Ie = ie => {
            ga(ie, {
              size: 14,
              class: "glass-option__check"
            })
          };
          F(he, ie => {
            r(P).value === c().performanceMode && ie(Ie)
          })
        }
        s(B), Y(() => {
          qe(B, 1, `glass-option glass-option--compact ${r(P).value===c().performanceMode?"is-active":""}`, "svelte-12qhfyh"), ne(B, "aria-pressed", r(P).value === c().performanceMode), te(pe, r(P).label)
        }), k(S, B)
      }), s(re), s(y);
      var U = h(y, 2),
        Q = h(o(U), 2),
        ke = o(Q);
      ke.__click = [oo, le, Me, q, W, K, ae, Oe];
      var et = o(ke),
        ct = o(et);
      {
        var Lt = S => {
            var P = mo(),
              B = V(P);
            gr(B, {
              size: 16
            }), Ae(2), k(S, P)
          },
          yt = S => {
            var P = ge(),
              B = V(P);
            {
              var _e = pe => {
                  var he = _o(),
                    Ie = V(he);
                  Qa(Ie, {
                    size: 16
                  }), Ae(2), k(pe, he)
                },
                Le = pe => {
                  var he = yo(),
                    Ie = V(he);
                  Ka(Ie, {
                    size: 16
                  }), Ae(2), k(pe, he)
                };
              F(B, pe => {
                r(W) === "csv" ? pe(_e) : pe(Le, !1)
              }, !0)
            }
            k(S, P)
          };
        F(ct, S => {
          r(W) === "zip" ? S(Lt) : S(yt, !1)
        })
      }
      s(et);
      var qt = h(et, 2);
      {
        var Ht = S => {
          Ga(S, {
            size: 16,
            class: "glass-action__spinner"
          })
        };
        F(qt, S => {
          r(le) && S(Ht)
        })
      }
      s(ke);
      var vt = h(ke, 2);
      vt.__click = [so, Me, q, K];
      var Pt = o(vt),
        Ct = o(Pt);
      Qa(Ct, {
        size: 16
      }), Ae(2), s(Pt);
      var At = h(Pt, 2);
      {
        var Nt = S => {
          Ga(S, {
            size: 16,
            class: "glass-action__spinner"
          })
        };
        F(At, S => {
          r(A) && S(Nt)
        })
      }
      s(vt), s(Q), Ae(2), s(U), s(Z), s(M), Y(S => {
        Wt(M, S), qe(G, 1, `glass-option ${r(ce)?"is-active":""}`, "svelte-12qhfyh"), ne(G, "aria-pressed", r(ce)), qe(ot, 1, `glass-option__chip ${r(ce)?"is-active":""}`, "svelte-12qhfyh"), te(J, r(ce) ? "On" : "Off"), qe(it, 1, `glass-option ${r(we)?"is-active":""}`, "svelte-12qhfyh"), ne(it, "aria-pressed", r(we)), qe(It, 1, `glass-option__chip ${r(we)?"is-active":""}`, "svelte-12qhfyh"), te(Ca, r(we) ? "On" : "Off"), qe(be, 1, `glass-option glass-option--compact ${r(W)==="individual"?"is-active":""}`, "svelte-12qhfyh"), ne(be, "aria-pressed", r(W) === "individual"), qe(Et, 1, `glass-option glass-option--compact ${r(W)==="zip"?"is-active":""}`, "svelte-12qhfyh"), ne(Et, "aria-pressed", r(W) === "zip"), qe(Ut, 1, `glass-option glass-option--compact ${r(W)==="csv"?"is-active":""}`, "svelte-12qhfyh"), ne(Ut, "aria-pressed", r(W) === "csv"), ke.disabled = r(le), vt.disabled = r(A)
      }, [() => `--settings-menu-offset: ${r(Re)()}px;`]), k($, M)
    };
    F(st, $ => {
      r(q) && $(Tt)
    })
  }
  s($t), La($t, $ => j = $, () => j), Ae(2), s(ht), s(xe), s(at);
  var gt = h(at, 2),
    mt = o(gt),
    _t = o(mt);
  _n(_t, () => e.children ?? ea), s(mt), s(gt);
  var Mt = h(gt, 2);
  zs(Mt, {
    onHeightChange: fe
  }), s(Ne), s(He);
  var Kt = h(He, 2);
  Ws(Kt, {}), Y(($, M) => {
    te(Rt, e.data.title), qe(Je, 1, `toolbar-button glass-button ${r(q)?"is-active":""}`, "svelte-12qhfyh"), ne(Je, "aria-expanded", r(q)), ne(Je, "aria-label", $), te(rt, M), qe(Ve, 1, `toolbar-button__chevron ${r(q)?"is-open":""}`, "svelte-12qhfyh"), Wt(gt, `min-height: ${r(ze)}px; margin-bottom: ${r(ve)}px;`)
  }, [() => `Settings menu (${r(Qe)()})`, () => r(Qe)()]), Vn(at, "clientHeight", $ => b(u, $)), k(n, Ye), Pa(), v()
}
Ja(["click"]);
export {
  Co as component
};