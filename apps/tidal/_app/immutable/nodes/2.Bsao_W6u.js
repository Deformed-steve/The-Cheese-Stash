import "../chunks/DsnmJJEf.js";
import {
  as as sa,
  ar as oa,
  u as na,
  r as ia,
  K as la,
  V as Ee,
  at as da,
  c as V,
  f as Q,
  a as o,
  A as ca,
  d as va,
  p as Mt,
  s as J,
  b as me,
  k as T,
  au as ua,
  D as fa,
  i as e,
  l as f,
  n as d,
  m as s,
  t as I,
  av as At,
  g as zt,
  x as H,
  v as r,
  w as $e,
  y as Rt,
  j as Oe,
  z as Tt,
  h as ga,
  $ as pa
} from "../chunks/Cu9fi7rt.js";
import {
  l as Fe,
  s as Ie,
  i as w,
  a as _a,
  b as st
} from "../chunks/DW1I4PKZ.js";
import {
  I as Le,
  s as Ne,
  j as ot,
  k as ha,
  l as le,
  b as ke,
  m as ma,
  r as ba,
  e as be,
  i as we,
  a as z,
  p as He,
  c as ee,
  g as wa,
  u as xa,
  X as Ct,
  D as Pt,
  d as ya
} from "../chunks/Dl3XAuxE.js";
import {
  L as Sa,
  d as ka
} from "../chunks/CMJ4YqVY.js";
import "../chunks/CgOeFQae.js";
import {
  C as $a
} from "../chunks/CyZ77wti.js";
import {
  D as Aa
} from "../chunks/C61yF-TN.js";
import {
  U as Dt
} from "../chunks/CDI0ADii.js";
import {
  L as Ta
} from "../chunks/CW-Blk_o.js";

function Ca(a, n, c = n) {
  var h = new WeakSet;
  sa(a, "input", async g => {
    var $ = g ? a.defaultValue : a.value;
    if ($ = nt(a) ? it($) : $, c($), Ee !== null && h.add(Ee), await oa(), $ !== ($ = n())) {
      var A = a.selectionStart,
        m = a.selectionEnd;
      a.value = $ ?? "", m !== null && (a.selectionStart = A, a.selectionEnd = Math.min(m, a.value.length))
    }
  }), (la && a.defaultValue !== a.value || na(n) == null && a.value) && (c(nt(a) ? it(a.value) : a.value), Ee !== null && h.add(Ee)), ia(() => {
    var g = n();
    if (a === document.activeElement) {
      var $ = da ?? Ee;
      if (h.has($)) return
    }
    nt(a) && g === it(a.value) || a.type === "date" && !g && !a.value || g !== a.value && (a.value = g ?? "")
  })
}

function nt(a) {
  var n = a.type;
  return n === "number" || n === "range"
}

function it(a) {
  return a === "" ? null : +a
}

function Pa(a, n) {
  const c = Fe(n, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const h = [
    ["path", {
      d: "M21.54 15H17a2 2 0 0 0-2 2v4.54"
    }],
    ["path", {
      d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"
    }],
    ["path", {
      d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
    }],
    ["circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }]
  ];
  Le(a, Ie({
    name: "earth"
  }, () => c, {
    get iconNode() {
      return h
    },
    children: (g, $) => {
      var A = V(),
        m = Q(A);
      Ne(m, n, "default", {}), o(g, A)
    },
    $$slots: {
      default: !0
    }
  }))
}

function Da(a, n) {
  const c = Fe(n, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const h = [
    ["path", {
      d: "M21 5H3"
    }],
    ["path", {
      d: "M10 12H3"
    }],
    ["path", {
      d: "M10 19H3"
    }],
    ["path", {
      d: "M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"
    }]
  ];
  Le(a, Ie({
    name: "list-video"
  }, () => c, {
    get iconNode() {
      return h
    },
    children: (g, $) => {
      var A = V(),
        m = Q(A);
      Ne(m, n, "default", {}), o(g, A)
    },
    $$slots: {
      default: !0
    }
  }))
}

function Ma(a, n) {
  const c = Fe(n, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const h = [
    ["path", {
      d: "M9 18V5l12-2v13"
    }],
    ["circle", {
      cx: "6",
      cy: "18",
      r: "3"
    }],
    ["circle", {
      cx: "18",
      cy: "16",
      r: "3"
    }]
  ];
  Le(a, Ie({
    name: "music"
  }, () => c, {
    get iconNode() {
      return h
    },
    children: (g, $) => {
      var A = V(),
        m = Q(A);
      Ne(m, n, "default", {}), o(g, A)
    },
    $$slots: {
      default: !0
    }
  }))
}

function za(a, n) {
  const c = Fe(n, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const h = [
    ["path", {
      d: "M15 18h-5"
    }],
    ["path", {
      d: "M18 14h-8"
    }],
    ["path", {
      d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"
    }],
    ["rect", {
      width: "8",
      height: "4",
      x: "10",
      y: "6",
      rx: "1"
    }]
  ];
  Le(a, Ie({
    name: "newspaper"
  }, () => c, {
    get iconNode() {
      return h
    },
    children: (g, $) => {
      var A = V(),
        m = Q(A);
      Ne(m, n, "default", {}), o(g, A)
    },
    $$slots: {
      default: !0
    }
  }))
}

function Ra(a, n) {
  const c = Fe(n, ["children", "$$slots", "$$events", "$$legacy"]);
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
  const h = [
    ["path", {
      d: "m21 21-4.34-4.34"
    }],
    ["circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }]
  ];
  Le(a, Ie({
    name: "search"
  }, () => c, {
    get iconNode() {
      return h
    },
    children: (g, $) => {
      var A = V(),
        m = Q(A);
      Ne(m, n, "default", {}), o(g, A)
    },
    $$slots: {
      default: !0
    }
  }))
}
const lt = "tidal-ui.region",
  Ea = () => {
    const a = localStorage.getItem(lt);
    return a === "us" || a === "eu" || a === "auto" ? a : "auto"
  },
  Ha = () => {
    const {
      subscribe: a,
      set: n,
      update: c
    } = ca(Ea());
    return a(h => {
      try {
        localStorage.setItem(lt, h)
      } catch (g) {
        console.warn("Failed to persist region preference", g)
      }
    }), window.addEventListener("storage", h => {
      if (h.key !== lt) return;
      const g = h.newValue;
      (g === "us" || g === "eu" || g === "auto") && n(g)
    }), {
      subscribe: a,
      setRegion(h) {
        c(() => h)
      }
    }
  },
  dt = Ha();

function Fa(a, n, c, h, g, $) {
  const A = a.currentTarget;
  if (!A) return;
  const m = n(A.value);
  m !== e(c) && (dt.setRegion(m), e(h).trim() && g()), T($, !1)
}

function Ia(a, n) {
  a.currentTarget && T(n, !e(n))
}
var La = (a, n) => n("tracks"),
  Na = (a, n) => n("albums"),
  ja = (a, n) => n("artists"),
  qa = f('<div class="flex w-full items-center gap-3 rounded-lg bg-gray-800/70 p-3"><div class="h-12 w-12 flex-shrink-0 animate-pulse rounded bg-gray-700/80"></div> <div class="flex-1 space-y-2"><div class="h-4 w-2/3 animate-pulse rounded bg-gray-700/80"></div> <div class="h-3 w-1/3 animate-pulse rounded bg-gray-700/60"></div> <div class="h-3 w-1/4 animate-pulse rounded bg-gray-700/40"></div></div> <div class="h-6 w-12 animate-pulse rounded-full bg-gray-700/80"></div></div>'),
  Va = f('<div class="space-y-2"></div>'),
  Qa = f('<div class="space-y-3"><div class="aspect-square w-full animate-pulse rounded-lg bg-gray-800/70"></div> <div class="h-4 w-3/4 animate-pulse rounded bg-gray-700/80"></div> <div class="h-3 w-1/2 animate-pulse rounded bg-gray-700/60"></div></div>'),
  Ua = f('<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"></div>'),
  Oa = f('<div class="flex flex-col items-center gap-3"><div class="aspect-square w-full animate-pulse rounded-full bg-gray-800/70"></div> <div class="h-4 w-3/4 animate-pulse rounded bg-gray-700/80"></div> <div class="h-3 w-1/2 animate-pulse rounded bg-gray-700/60"></div></div>'),
  Za = f('<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"></div>'),
  Ka = f('<div class="flex items-center justify-center py-12"><div class="h-10 w-10 animate-spin rounded-full border-b-2 border-blue-500"></div></div>'),
  Ba = f('<div class="rounded-lg border border-red-900 bg-red-900/20 p-4 text-red-400"> </div>'),
  Wa = (a, n, c) => n(e(c)),
  Ya = (a, n, c) => n(a, e(c)),
  Ga = f('<img class="h-12 w-12 rounded object-cover"/>'),
  Xa = Rt('<svg class="inline h-4 w-4 flex-shrink-0 align-middle" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2ZM8 6h8a1 1 0 110 2H9v3h5a1 1 0 010 2H9v3h7a1 1 0 010 2H8a1 1 0 01-1-1V7a1 1 0 011-1Z"></path></svg>'),
  Ja = (a, n, c) => n(e(c), a),
  er = (a, n, c) => n(e(c), a),
  tr = (a, n, c, h, g) => e(n).has(e(c).id) ? h(e(c).id, a) : g(e(c), a),
  ar = f('<span class="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>'),
  rr = f('<span class="flex h-4 w-4 items-center justify-center"><!></span>'),
  sr = f('<div role="button" tabindex="0" class="track-glass group flex w-full cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none hover:brightness-110 svelte-14p3n6n"><!> <div class="min-w-0 flex-1"><h3 class="truncate font-semibold text-white group-hover:text-blue-400"> <!></h3> <p class="truncate text-sm text-gray-400"> </p> <p class="text-xs text-gray-500"> </p></div> <div class="flex items-center gap-2 text-sm text-gray-400"><button class="rounded-full p-2 text-gray-400 transition-colors hover:text-white" title="Play next"><!></button> <button class="rounded-full p-2 text-gray-400 transition-colors hover:text-white" title="Add to queue"><!></button> <button class="rounded-full p-2 text-gray-400 transition-colors hover:text-white"><!></button> <span> </span></div></div>'),
  or = f('<div class="space-y-2"></div>'),
  nr = (a, n, c) => n(e(c), a),
  ir = f('<video class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" autoplay loop playsinline="" preload="metadata"></video>', 2),
  lr = f('<img class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"/>'),
  dr = f('<div class="flex h-full w-full items-center justify-center bg-gray-800 text-sm text-gray-500">No artwork</div>'),
  cr = Rt('<svg class="inline h-4 w-4 flex-shrink-0 align-middle" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2ZM8 6h8a1 1 0 110 2H9v3h5a1 1 0 010 2H9v3h7a1 1 0 010 2H8a1 1 0 01-1-1V7a1 1 0 011-1Z"></path></svg>'),
  vr = f('<p class="truncate text-sm text-gray-400"> </p>'),
  ur = f('<p class="text-xs text-gray-500"> </p>'),
  fr = f('<p class="mt-2 text-xs text-blue-300">Downloading <!> tracks…</p>'),
  gr = f('<p class="mt-2 text-xs text-red-400" role="alert"> </p>'),
  pr = f('<div class="group relative text-left"><button type="button" class="absolute top-3 right-3 z-40 flex items-center justify-center rounded-full bg-black/50 p-2 text-gray-200 backdrop-blur-md transition-colors hover:bg-blue-600/80 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"><!></button> <a class="flex w-full flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900" data-sveltekit-preload-data=""><div class="relative mb-2 aspect-square overflow-hidden rounded-lg"><!></div> <h3 class="truncate font-semibold text-white group-hover:text-blue-400"> <!></h3> <!> <!></a> <!></div>'),
  _r = f('<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"></div>'),
  hr = f('<img class="h-full w-full object-cover transition-transform group-hover:scale-105"/>'),
  mr = f('<div class="flex h-full w-full items-center justify-center bg-gray-800"><!></div>'),
  br = f('<a class="group text-center" data-sveltekit-preload-data=""><div class="relative mb-2 aspect-square overflow-hidden rounded-full"><!></div> <h3 class="truncate font-semibold text-white group-hover:text-blue-400"> </h3> <p class="text-xs text-gray-500">Artist</p></a>'),
  wr = f('<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"></div>'),
  xr = f('<img class="h-full w-full object-cover transition-transform group-hover:scale-105"/>'),
  yr = f('<a class="group text-left" data-sveltekit-preload-data=""><div class="relative mb-2 aspect-square overflow-hidden rounded-lg"><!></div> <h3 class="truncate font-semibold text-white group-hover:text-blue-400"> </h3> <p class="truncate text-sm text-gray-400"> </p> <p class="text-xs text-gray-500"> </p></a>'),
  Sr = f('<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"></div>'),
  kr = f('<article class="news-card flex flex-col gap-3 rounded-lg border p-4 transition-transform hover:-translate-y-0.5 svelte-14p3n6n"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/40 text-blue-300"><!></div> <h3 class="text-lg font-semibold text-white"> </h3></div> <p class="text-sm text-gray-300"> </p></article>'),
  $r = f('<div class="news-container rounded-lg border p-4 svelte-14p3n6n"><h2 class="mb-4 text-3xl font-bold">News</h2> <section class="grid gap-4 text-left shadow-lg sm:grid-cols-2"></section></div>'),
  Ar = f('<div class="py-12 text-center text-gray-400"><p>No results found...</p></div>'),
  Tr = f('<div class="w-full"><div class="mb-6"><div class="search-glass rounded-lg border shadow-sm transition-colors focus-within:border-blue-500 py-2 px-3 pr-2 svelte-14p3n6n"><div class="flex gap-2 flex-row sm:items-center sm:justify-between"><div class="flex min-w-0 flex-1 items-center gap-2"><input type="text" placeholder="Search for anything..." class="w-full min-w-0 flex-1 border-none p-0 pl-1 bg-transparent text-white placeholder:text-gray-400 focus:outline-none ring-0 svelte-14p3n6n"/></div> <div class="flex gap-2 w-auto flex-row items-center"><div class="relative w-auto"><label class="sr-only" for="region-select">Region</label> <!> <select id="region-select" class="region-selector cursor-pointer appearance-none rounded-md border pl-9 pr-9 py-2 text-sm font-medium text-white transition-colors focus:outline-none ring-0 svelte-14p3n6n" title="Change search region"><option>Auto</option><option>US</option><option>EU</option></select> <span><!></span></div> <button class="search-button h-full flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto svelte-14p3n6n"><!> <span class="hidden sm:inline"> </span></button></div></div></div></div> <div class="mb-6 flex gap-2 overflow-auto border-b border-gray-700"><button><!> Tracks</button> <button><!> Albums</button> <button><!> Artists</button></div> <!> <!> <!></div>');

function Cr(a, n) {
  Mt(n, !0);
  const c = () => st(He, "$playerStore", $),
    h = () => st(ka, "$downloadPreferencesStore", $),
    g = () => st(xa, "$userPreferencesStore", $),
    [$, A] = _a();
  let m = J(""),
    U = J("tracks"),
    fe = J(!1),
    Ae = J(me([])),
    he = J(me([])),
    Te = J(me([])),
    Ze = J(me([])),
    se = J(me(new Set)),
    xe = J(me(new Map)),
    Se = J(me(new Set)),
    Ce = J(null);
  const Et = Oe(() => c().quality),
    Ht = Oe(() => h().mode),
    Ke = Oe(() => g().convertAacToMp3),
    ct = Oe(() => g().downloadCoversSeperately);
  let ge = J("auto"),
    je = J(!1);
  const Pe = {
      auto: ot("auto"),
      us: ot("us"),
      eu: ot("eu")
    },
    vt = t => t !== "auto" && !Pe[t] ? "auto" : t,
    Ft = dt.subscribe(t => {
      const i = vt(t);
      i !== t && dt.setRegion(i), T(ge, i, !0)
    });
  ua(Ft);
  let O = J(me({}));
  const It = [{
      title: "Redesign + QQDL",
      description: "Hi-Res downloading still a WIP but a cool redesign that I inspired off a very cool library called Color Thief is here - and the site is also now up at QQDL!"
    }, {
      title: "Hi-Res Audio",
      description: "Streaming for Hi-Res is now here. Stay tuned for Hi-Res downloading - I haven't gotten that one figured out yet. And video covers/lower quality streaming. Pretty cool."
    }, {
      title: "Even more changes!",
      description: "LYRICS!!! I've stabilised the API a bit and added a few more features such as ZIP download of albums, better error handling, etc. Stay tuned for word by word lyrics!"
    }, {
      title: "QOL changes",
      description: "This website is still very much in beta, but queue management and album/artist pages/downloads have been added as well as some bug squashing/QOL changes such as bigger album covers and download all for albums."
    }, {
      title: "Initial release!",
      description: "Two APIs fetch lossless CD-quality 16/44.1kHz FLACs. No support for Hi-Res yet but I'm working on it haha. No playlist saving or logging in either but downloading and streaming work."
    }],
    Lt = Array.from({
      length: 6
    }, (t, i) => i),
    ut = Array.from({
      length: 8
    }, (t, i) => i);
  async function Nt(t, i = 3, y = 250) {
    let S = null;
    for (let M = 1; M <= i; M += 1) try {
      return await t()
    } catch (C) {
      S = C, M < i && await new Promise(P => setTimeout(P, y * M))
    }
    throw S instanceof Error ? S : new Error("Request failed")
  }

  function ft(t) {
    const i = new Set(e(Se));
    i.add(t), T(Se, i, !0), setTimeout(() => {
      const y = new Set(e(Se));
      y.delete(t), T(Se, y, !0)
    }, 1500)
  }

  function jt(t, i) {
    i.stopPropagation();
    const y = e(xe).get(t);
    y && ee.cancelTrackDownload(y);
    const S = new Set(e(se));
    S.delete(t), T(se, S, !0);
    const M = new Map(e(xe));
    M.delete(t), T(xe, M, !0), ft(t)
  }
  async function qt(t, i) {
    i.stopPropagation();
    const y = new Set(e(se));
    y.add(t.id), T(se, y, !0);
    const S = c().quality,
      M = wa(S, e(Ke)),
      C = `${t.artist.name} - ${t.title}.${M}`,
      {
        taskId: P,
        controller: pe
      } = ee.beginTrackDownload(t, C, {
        subtitle: t.album?.title ?? t.artist?.name
      }),
      p = new Map(e(xe));
    p.set(t.id, P), T(xe, p, !0), ee.skipFfmpegCountdown();
    try {
      await le.downloadTrack(t.id, S, C, {
        signal: pe.signal,
        onProgress: _ => {
          _.stage === "downloading" ? ee.updateTrackProgress(P, _.receivedBytes, _.totalBytes) : ee.updateTrackStage(P, _.progress)
        },
        onFfmpegCountdown: ({
          totalBytes: _
        }) => {
          typeof _ == "number" ? ee.startFfmpegCountdown(_, {
            autoTriggered: !1
          }) : ee.startFfmpegCountdown(0, {
            autoTriggered: !1
          })
        },
        onFfmpegStart: () => ee.startFfmpegLoading(),
        onFfmpegProgress: _ => ee.updateFfmpegProgress(_),
        onFfmpegComplete: () => ee.completeFfmpeg(),
        onFfmpegError: _ => ee.errorFfmpeg(_),
        ffmpegAutoTriggered: !1,
        convertAacToMp3: e(Ke),
        downloadCoverSeperately: e(ct)
      }), ee.completeTrackDownload(P)
    } catch (_) {
      if (_ instanceof DOMException && _.name === "AbortError") ee.completeTrackDownload(P), ft(t.id);
      else {
        console.error("Failed to download track:", _);
        const L = _ instanceof Error && _.message ? _.message : "Failed to download track. Please try again.";
        ee.errorTrackDownload(P, L), alert(L)
      }
    } finally {
      const _ = new Set(e(se));
      _.delete(t.id), T(se, _, !0);
      const R = new Map(e(xe));
      R.delete(t.id), T(xe, R, !0)
    }
  }

  function De(t, i) {
    const y = e(O)[t] ?? {
      downloading: !1,
      completed: 0,
      total: 0,
      error: null
    };
    T(O, {
      ...e(O),
      [t]: {
        ...y,
        ...i
      }
    }, !0)
  }
  async function Vt(t, i) {
    if (i.preventDefault(), i.stopPropagation(), e(O)[t.id]?.downloading) return;
    De(t.id, {
      downloading: !0,
      completed: 0,
      total: t.numberOfTracks ?? 0,
      error: null
    });
    const y = e(Et);
    try {
      await ya(t, y, {
        onTotalResolved: M => {
          De(t.id, {
            total: M
          })
        },
        onTrackDownloaded: (M, C) => {
          De(t.id, {
            completed: M,
            total: C
          })
        }
      }, t.artist?.name, {
        mode: e(Ht),
        convertAacToMp3: e(Ke),
        downloadCoverSeperately: e(ct)
      });
      const S = e(O)[t.id];
      De(t.id, {
        downloading: !1,
        completed: S?.total ?? S?.completed ?? 0,
        error: null
      })
    } catch (S) {
      console.error("Failed to download album:", S);
      const M = S instanceof Error && S.message ? S.message : "Failed to download album. Please try again.";
      De(t.id, {
        downloading: !1,
        error: M
      })
    }
  }

  function gt(t) {
    n.onTrackSelect?.(t)
  }

  function Qt(t, i) {
    i.stopPropagation(), He.enqueue(t)
  }

  function Ut(t, i) {
    i.stopPropagation(), He.enqueueNext(t)
  }

  function Ot(t, i) {
    (t.key === "Enter" || t.key === " ") && (t.preventDefault(), gt(i))
  }
  fa(() => {
    const t = new Set(e(he).map(S => S.id));
    let i = !1;
    const y = {};
    for (const [S, M] of Object.entries(e(O))) {
      const C = Number(S);
      t.has(C) ? y[C] = M : i = !0
    }
    i && T(O, y, !0)
  });
  async function qe() {
    if (e(m).trim()) {
      T(fe, !0), T(Ce, null);
      try {
        switch (e(U)) {
          case "tracks": {
            const t = await Nt(() => le.searchTracks(e(m), e(ge)));
            T(Ae, Array.isArray(t?.items) ? t.items : [], !0);
            break
          }
          case "albums": {
            const t = await le.searchAlbums(e(m), e(ge));
            T(he, Array.isArray(t?.items) ? t.items : [], !0);
            break
          }
          case "artists": {
            const t = await le.searchArtists(e(m), e(ge));
            T(Te, Array.isArray(t?.items) ? t.items : [], !0);
            break
          }
          case "playlists": {
            const t = await le.searchPlaylists(e(m), e(ge));
            T(Ze, Array.isArray(t?.items) ? t.items : [], !0);
            break
          }
        }
      } catch (t) {
        T(Ce, t instanceof Error ? t.message : "Search failed", !0), console.error("Search error:", t)
      } finally {
        T(fe, !1)
      }
    }
  }

  function Zt(t) {
    t.key === "Enter" && qe()
  }

  function Be(t) {
    T(U, t, !0), e(m).trim() && qe()
  }

  function Kt(t) {
    return Number.isFinite(t) ? t && t > 0 ? t : t ?? 0 : 0
  }

  function Bt(t) {
    if (!t) return "—";
    const i = t.toUpperCase();
    return i === "LOSSLESS" ? "CD • 16-bit/44.1 kHz FLAC" : i === "HI_RES_LOSSLESS" ? "Hi-Res • up to 24-bit/192 kHz FLAC" : t
  }
  var We = Tr(),
    Ye = s(We),
    pt = s(Ye),
    _t = s(pt),
    Ge = s(_t),
    Xe = s(Ge);
  ba(Xe), r(Ge);
  var ht = d(Ge, 2),
    Je = s(ht),
    mt = d(s(Je), 2);
  Pa(mt, {
    size: 18,
    color: "#ffffff",
    class: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text0white",
    style: "color: #ffffff; z-index: 99;"
  });
  var ue = d(mt, 2);
  ue.__change = [Fa, vt, ge, m, qe, je], ue.__mousedown = [Ia, je];
  var et = s(ue);
  et.value = et.__value = "auto";
  var Me = d(et);
  let bt;
  Me.value = Me.__value = "us";
  var Ve = d(Me);
  let wt;
  Ve.value = Ve.__value = "eu", r(ue);
  var xt;
  ha(ue);
  var tt = d(ue, 2),
    Wt = s(tt);
  $a(Wt, {
    size: 16
  }), r(tt), r(Je);
  var Qe = d(Je, 2);
  Qe.__click = qe;
  var yt = s(Qe);
  Ra(yt, {
    size: 16,
    class: "text-white"
  });
  var St = d(yt, 2),
    Yt = s(St, !0);
  r(St), r(Qe), r(ht), r(_t), r(pt), r(Ye);
  var at = d(Ye, 2),
    ze = s(at);
  ze.__click = [La, Be];
  var Gt = s(ze);
  Ma(Gt, {
    size: 18
  }), $e(), r(ze);
  var Re = d(ze, 2);
  Re.__click = [Na, Be];
  var Xt = s(Re);
  Aa(Xt, {
    size: 18
  }), $e(), r(Re);
  var Ue = d(Re, 2);
  Ue.__click = [ja, Be];
  var Jt = s(Ue);
  Dt(Jt, {
    size: 18
  }), $e(), r(Ue), r(at);
  var kt = d(at, 2);
  {
    var ea = t => {
      var i = V(),
        y = Q(i);
      {
        var S = C => {
            var P = Va();
            be(P, 21, () => Lt, we, (pe, p) => {
              var _ = qa();
              o(pe, _)
            }), r(P), o(C, P)
          },
          M = C => {
            var P = V(),
              pe = Q(P);
            {
              var p = R => {
                  var L = Ua();
                  be(L, 21, () => ut, we, (de, u) => {
                    var oe = Qa();
                    o(de, oe)
                  }), r(L), o(R, L)
                },
                _ = R => {
                  var L = V(),
                    de = Q(L);
                  {
                    var u = D => {
                        var Z = Za();
                        be(Z, 21, () => ut, we, (ce, ne) => {
                          var K = Oa();
                          o(ce, K)
                        }), r(Z), o(D, Z)
                      },
                      oe = D => {
                        var Z = Ka();
                        o(D, Z)
                      };
                    w(de, D => {
                      e(U) === "artists" ? D(u) : D(oe, !1)
                    }, !0)
                  }
                  o(R, L)
                };
              w(pe, R => {
                e(U) === "albums" || e(U) === "playlists" ? R(p) : R(_, !1)
              }, !0)
            }
            o(C, P)
          };
        w(y, C => {
          e(U) === "tracks" ? C(S) : C(M, !1)
        })
      }
      o(t, i)
    };
    w(kt, t => {
      e(fe) && t(ea)
    })
  }
  var $t = d(kt, 2);
  {
    var ta = t => {
      var i = Ba(),
        y = s(i, !0);
      r(i), I(() => H(y, e(Ce))), o(t, i)
    };
    w($t, t => {
      e(Ce) && t(ta)
    })
  }
  var aa = d($t, 2);
  {
    var ra = t => {
      var i = V(),
        y = Q(i);
      {
        var S = C => {
            var P = or();
            be(P, 21, () => e(Ae), we, (pe, p) => {
              var _ = sr();
              _.__click = [Wa, gt, p], _.__keydown = [Ya, Ot, p];
              var R = s(_);
              {
                var L = k => {
                  var E = Ga();
                  I(Y => {
                    z(E, "src", Y), z(E, "alt", e(p).title)
                  }, [() => le.getCoverUrl(e(p).album.cover, "160")]), o(k, E)
                };
                w(R, k => {
                  e(p).album.cover && k(L)
                })
              }
              var de = d(R, 2),
                u = s(de),
                oe = s(u),
                D = d(oe);
              {
                var Z = k => {
                  var E = Xa();
                  o(k, E)
                };
                w(D, k => {
                  e(p).explicit && k(Z)
                })
              }
              r(u);
              var ce = d(u, 2),
                ne = s(ce, !0);
              r(ce);
              var K = d(ce, 2),
                B = s(K);
              r(K), r(de);
              var te = d(de, 2),
                ae = s(te);
              ae.__click = [Ja, Ut, p];
              var G = s(ae);
              Da(G, {
                size: 18
              }), r(ae);
              var F = d(ae, 2);
              F.__click = [er, Qt, p];
              var j = s(F);
              Ta(j, {
                size: 18
              }), r(F);
              var x = d(F, 2);
              x.__click = [tr, se, p, jt, qt];
              var N = s(x);
              {
                var W = k => {
                    var E = rr(),
                      Y = s(E);
                    {
                      var l = b => {
                          Ct(b, {
                            size: 14
                          })
                        },
                        v = b => {
                          var ve = ar();
                          o(b, ve)
                        };
                      w(Y, b => {
                        e(Se).has(e(p).id) ? b(l) : b(v, !1)
                      })
                    }
                    r(E), o(k, E)
                  },
                  ie = k => {
                    var E = V(),
                      Y = Q(E);
                    {
                      var l = b => {
                          Ct(b, {
                            size: 18
                          })
                        },
                        v = b => {
                          Pt(b, {
                            size: 18
                          })
                        };
                      w(Y, b => {
                        e(Se).has(e(p).id) ? b(l) : b(v, !1)
                      }, !0)
                    }
                    o(k, E)
                  };
                w(N, k => {
                  e(se).has(e(p).id) ? k(W) : k(ie, !1)
                })
              }
              r(x);
              var X = d(x, 2),
                _e = s(X, !0);
              r(X), r(te), r(_), I((k, E, Y, l, v, b) => {
                H(oe, `${e(p).title??""} `), H(ne, e(p).artist.name), H(B, `${e(p).album.title??""} • ${k??""}`), z(ae, "aria-label", `Play ${e(p).title} next`), z(F, "aria-label", `Add ${e(p).title} to queue`), z(x, "title", E), z(x, "aria-label", Y), z(x, "aria-busy", l), z(x, "aria-pressed", v), H(_e, b)
              }, [() => Bt(e(p).audioQuality), () => e(se).has(e(p).id) ? "Cancel download" : "Download track", () => e(se).has(e(p).id) ? `Cancel download for ${e(p).title}` : `Download ${e(p).title}`, () => e(se).has(e(p).id), () => e(se).has(e(p).id), () => le.formatDuration(e(p).duration)]), o(pe, _)
            }), r(P), o(C, P)
          },
          M = C => {
            var P = V(),
              pe = Q(P);
            {
              var p = R => {
                  var L = _r();
                  be(L, 21, () => e(he), we, (de, u) => {
                    var oe = pr(),
                      D = s(oe);
                    D.__click = [nr, Vt, u];
                    var Z = s(D);
                    {
                      var ce = l => {
                          Sa(l, {
                            size: 16,
                            class: "animate-spin"
                          })
                        },
                        ne = l => {
                          Pt(l, {
                            size: 16
                          })
                        };
                      w(Z, l => {
                        e(O)[e(u).id]?.downloading ? l(ce) : l(ne, !1)
                      })
                    }
                    r(D);
                    var K = d(D, 2),
                      B = s(K),
                      te = s(B);
                    {
                      var ae = l => {
                          var v = ir();
                          v.muted = !0, I((b, ve) => {
                            z(v, "src", b), z(v, "poster", ve), z(v, "aria-label", e(u).title)
                          }, [() => le.getVideoCoverUrl(e(u).videoCover, "640"), () => e(u).cover ? le.getCoverUrl(e(u).cover, "640") : void 0]), o(l, v)
                        },
                        G = l => {
                          var v = V(),
                            b = Q(v);
                          {
                            var ve = q => {
                                var re = lr();
                                I(rt => {
                                  z(re, "src", rt), z(re, "alt", e(u).title)
                                }, [() => le.getCoverUrl(e(u).cover, "640")]), o(q, re)
                              },
                              ye = q => {
                                var re = dr();
                                o(q, re)
                              };
                            w(b, q => {
                              e(u).cover ? q(ve) : q(ye, !1)
                            }, !0)
                          }
                          o(l, v)
                        };
                      w(te, l => {
                        e(u).videoCover ? l(ae) : l(G, !1)
                      })
                    }
                    r(B);
                    var F = d(B, 2),
                      j = s(F),
                      x = d(j);
                    {
                      var N = l => {
                        var v = cr();
                        o(l, v)
                      };
                      w(x, l => {
                        e(u).explicit && l(N)
                      })
                    }
                    r(F);
                    var W = d(F, 2);
                    {
                      var ie = l => {
                        var v = vr(),
                          b = s(v, !0);
                        r(v), I(() => H(b, e(u).artist.name)), o(l, v)
                      };
                      w(W, l => {
                        e(u).artist && l(ie)
                      })
                    }
                    var X = d(W, 2);
                    {
                      var _e = l => {
                        var v = ur(),
                          b = s(v, !0);
                        r(v), I(ve => H(b, ve), [() => e(u).releaseDate.split("-")[0]]), o(l, v)
                      };
                      w(X, l => {
                        e(u).releaseDate && l(_e)
                      })
                    }
                    r(K);
                    var k = d(K, 2);
                    {
                      var E = l => {
                          var v = fr(),
                            b = d(s(v));
                          {
                            var ve = q => {
                                var re = Tt();
                                I(rt => H(re, `${e(O)[e(u).id]?.completed??0??""}/${rt??""}`), [() => Kt(e(O)[e(u).id]?.total ?? 0)]), o(q, re)
                              },
                              ye = q => {
                                var re = Tt();
                                I(() => H(re, e(O)[e(u).id]?.completed ?? 0)), o(q, re)
                              };
                            w(b, q => {
                              e(O)[e(u).id]?.total ? q(ve) : q(ye, !1)
                            })
                          }
                          $e(), r(v), o(l, v)
                        },
                        Y = l => {
                          var v = V(),
                            b = Q(v);
                          {
                            var ve = ye => {
                              var q = gr(),
                                re = s(q, !0);
                              r(q), I(() => H(re, e(O)[e(u).id]?.error)), o(ye, q)
                            };
                            w(b, ye => {
                              e(O)[e(u).id]?.error && ye(ve)
                            }, !0)
                          }
                          o(l, v)
                        };
                      w(k, l => {
                        e(O)[e(u).id]?.downloading ? l(E) : l(Y, !1)
                      })
                    }
                    r(oe), I(() => {
                      D.disabled = e(O)[e(u).id]?.downloading, z(D, "aria-label", `Download ${e(u).title}`), z(K, "href", `/album/${e(u).id}`), H(j, `${e(u).title??""} `)
                    }), o(de, oe)
                  }), r(L), o(R, L)
                },
                _ = R => {
                  var L = V(),
                    de = Q(L);
                  {
                    var u = D => {
                        var Z = wr();
                        be(Z, 21, () => e(Te), we, (ce, ne) => {
                          var K = br(),
                            B = s(K),
                            te = s(B);
                          {
                            var ae = x => {
                                var N = hr();
                                I(W => {
                                  z(N, "src", W), z(N, "alt", e(ne).name)
                                }, [() => le.getArtistPictureUrl(e(ne).picture)]), o(x, N)
                              },
                              G = x => {
                                var N = mr(),
                                  W = s(N);
                                Dt(W, {
                                  size: 48,
                                  class: "text-gray-600"
                                }), r(N), o(x, N)
                              };
                            w(te, x => {
                              e(ne).picture ? x(ae) : x(G, !1)
                            })
                          }
                          r(B);
                          var F = d(B, 2),
                            j = s(F, !0);
                          r(F), $e(2), r(K), I(() => {
                            z(K, "href", `/artist/${e(ne).id}`), H(j, e(ne).name)
                          }), o(ce, K)
                        }), r(Z), o(D, Z)
                      },
                      oe = D => {
                        var Z = V(),
                          ce = Q(Z);
                        {
                          var ne = B => {
                              var te = Sr();
                              be(te, 21, () => e(Ze), we, (ae, G) => {
                                var F = yr(),
                                  j = s(F),
                                  x = s(j);
                                {
                                  var N = Y => {
                                    var l = xr();
                                    I(v => {
                                      z(l, "src", v), z(l, "alt", e(G).title)
                                    }, [() => le.getCoverUrl(e(G).image, "640")]), o(Y, l)
                                  };
                                  w(x, Y => {
                                    e(G).image && Y(N)
                                  })
                                }
                                r(j);
                                var W = d(j, 2),
                                  ie = s(W, !0);
                                r(W);
                                var X = d(W, 2),
                                  _e = s(X, !0);
                                r(X);
                                var k = d(X, 2),
                                  E = s(k);
                                r(k), r(F), I(() => {
                                  z(F, "href", `/playlist/${e(G).uuid}`), H(ie, e(G).title), H(_e, e(G).creator.name), H(E, `${e(G).numberOfTracks??""} tracks`)
                                }), o(ae, F)
                              }), r(te), o(B, te)
                            },
                            K = B => {
                              var te = V(),
                                ae = Q(te);
                              {
                                var G = j => {
                                    var x = $r(),
                                      N = d(s(x), 2);
                                    be(N, 21, () => It, we, (W, ie) => {
                                      var X = kr(),
                                        _e = s(X),
                                        k = s(_e),
                                        E = s(k);
                                      za(E, {
                                        size: 20
                                      }), r(k);
                                      var Y = d(k, 2),
                                        l = s(Y, !0);
                                      r(Y), r(_e);
                                      var v = d(_e, 2),
                                        b = s(v, !0);
                                      r(v), r(X), I(() => {
                                        H(l, e(ie).title), H(b, e(ie).description)
                                      }), o(W, X)
                                    }), r(N), r(x), o(j, x)
                                  },
                                  F = j => {
                                    var x = V(),
                                      N = Q(x);
                                    {
                                      var W = ie => {
                                        var X = Ar();
                                        o(ie, X)
                                      };
                                      w(N, ie => {
                                        e(m).trim() && !e(fe) && ie(W)
                                      }, !0)
                                    }
                                    o(j, x)
                                  };
                                w(ae, j => {
                                  e(m).trim() ? j(F, !1) : j(G)
                                }, !0)
                              }
                              o(B, te)
                            };
                          w(ce, B => {
                            e(U) === "playlists" && e(Ze).length > 0 ? B(ne) : B(K, !1)
                          }, !0)
                        }
                        o(D, Z)
                      };
                    w(de, D => {
                      e(U) === "artists" && e(Te).length > 0 ? D(u) : D(oe, !1)
                    }, !0)
                  }
                  o(R, L)
                };
              w(pe, R => {
                e(U) === "albums" && e(he).length > 0 ? R(p) : R(_, !1)
              }, !0)
            }
            o(C, P)
          };
        w(y, C => {
          e(U) === "tracks" && e(Ae).length > 0 ? C(S) : C(M, !1)
        })
      }
      o(t, i)
    };
    w(aa, t => {
      !e(fe) && !e(Ce) && t(ra)
    })
  }
  r(We), I((t, i, y) => {
    Me.disabled = !Pe.us, bt = ke(Me, 1, "", null, bt, t), Ve.disabled = !Pe.eu, wt = ke(Ve, 1, "", null, wt, i), xt !== (xt = e(ge)) && (ue.value = (ue.__value = e(ge)) ?? "", ma(ue, e(ge))), ke(tt, 1, `region-chevron pointer-events-none absolute right-3 top-1/2 text-gray-400 ${e(je)?"rotate-180":""}`, "svelte-14p3n6n"), Qe.disabled = y, H(Yt, e(fe) ? "Searching…" : "Search"), ke(ze, 1, `flex cursor-pointer items-center gap-2 border-b-2 px-4 py-2 transition-colors ${e(U)==="tracks"?"border-blue-500 text-blue-500":"border-transparent text-gray-300 hover:text-white"}`, "svelte-14p3n6n"), ke(Re, 1, `flex cursor-pointer items-center gap-2 border-b-2 px-4 py-2 transition-colors ${e(U)==="albums"?"border-blue-500 text-blue-500":"border-transparent text-gray-300 hover:text-white"}`, "svelte-14p3n6n"), ke(Ue, 1, `flex cursor-pointer items-center gap-2 border-b-2 px-4 py-2 transition-colors ${e(U)==="artists"?"border-blue-500 text-blue-500":"border-transparent text-gray-300 hover:text-white"}`, "svelte-14p3n6n")
  }, [() => ({
    "opacity-50": !Pe.us
  }), () => ({
    "opacity-50": !Pe.eu
  }), () => e(fe) || !e(m).trim()]), At("keypress", Xe, Zt), Ca(Xe, () => e(m), t => T(m, t)), At("blur", ue, () => T(je, !1)), o(a, We), zt(), A()
}
va(["change", "mousedown", "click", "keydown"]);
var Pr = f('<meta name="description" content="Cool music streaming haha"/>'),
  Dr = f('<div class="space-y-8"><div class="py-8 text-center"><div class="mb-4 flex items-end justify-center gap-2"><h2 class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-5xl font-bold text-transparent"> </h2> <span class="text-sm text-gray-400">v2.3</span></div> <p class="mx-auto max-w-2xl text-xl text-gray-400"> </p></div> <!></div>');

function qr(a, n) {
  Mt(n, !0);

  function c(he) {
    He.setQueue([he], 0), He.play()
  }
  var h = Dr();
  ga(he => {
    var Te = Pr();
    I(() => pa.title = n.data.title ?? ""), o(he, Te)
  });
  var g = s(h),
    $ = s(g),
    A = s($),
    m = s(A, !0);
  r(A), $e(2), r($);
  var U = d($, 2),
    fe = s(U, !0);
  r(U), r(g);
  var Ae = d(g, 2);
  Cr(Ae, {
    onTrackSelect: c
  }), r(h), I(() => {
    H(m, n.data.title), H(fe, n.data.slogan)
  }), o(a, h), zt()
}
export {
  qr as component
};