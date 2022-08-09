var Sr = Object.defineProperty,
  Er = Object.defineProperties;
var Nr = Object.getOwnPropertyDescriptors;
var ei = Object.getOwnPropertySymbols;
var Ar = Object.prototype.hasOwnProperty,
  Dr = Object.prototype.propertyIsEnumerable;
var ti = (K, Z, ue) =>
    Z in K
      ? Sr(K, Z, { enumerable: !0, configurable: !0, writable: !0, value: ue })
      : (K[Z] = ue),
  lt = (K, Z) => {
    for (var ue in Z || (Z = {})) Ar.call(Z, ue) && ti(K, ue, Z[ue]);
    if (ei) for (var ue of ei(Z)) Dr.call(Z, ue) && ti(K, ue, Z[ue]);
    return K;
  },
  ni = (K, Z) => Er(K, Nr(Z));
(function (K) {
  typeof define == "function" && define.amd ? define(K) : K();
})(function () {
  var en, tn;
  ("use strict");
  const K = (L) => {
    const S = { top: -3 };
    L("#icons").fuwatto({ duration: 3e3 }),
      L("#rightToLeft").fuwatto({ slide: "right-left", adjustment: S }),
      L(".jqFuwattoAsClass").fuwatto({ slide: "left-right", adjustment: S }),
      L("#doesnotExist").fuwatto(),
      L("#doesnotExist").fuwatto({ slide: "top-bottom" });
  };
  ((tn = (en = window == null ? void 0 : window.$) == null ? void 0 : en.fn) ==
  null
    ? void 0
    : tn.fuwatto) && K(window.$);
  var Z =
      typeof globalThis != "undefined"
        ? globalThis
        : typeof window != "undefined"
        ? window
        : typeof global != "undefined"
        ? global
        : typeof self != "undefined"
        ? self
        : {},
    ue = { exports: {} };
  /*!
   * jQuery JavaScript Library v3.6.0
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2021-03-02T17:08Z
   */ (function (L) {
    (function (S, z) {
      L.exports = S.document
        ? z(S, !0)
        : function (U) {
            if (!U.document)
              throw new Error("jQuery requires a window with a document");
            return z(U);
          };
    })(typeof window != "undefined" ? window : Z, function (S, z) {
      var U = [],
        ee = Object.getPrototypeOf,
        ge = U.slice,
        Ne = U.flat
          ? function (e) {
              return U.flat.call(e);
            }
          : function (e) {
              return U.concat.apply([], e);
            },
        Te = U.push,
        je = U.indexOf,
        ke = {},
        nn = ke.toString,
        pt = ke.hasOwnProperty,
        rn = pt.toString,
        di = rn.call(Object),
        _ = {},
        P = function (t) {
          return (
            typeof t == "function" &&
            typeof t.nodeType != "number" &&
            typeof t.item != "function"
          );
        },
        Fe = function (t) {
          return t != null && t === t.window;
        },
        M = S.document,
        pi = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function on(e, t, n) {
        n = n || M;
        var i,
          o,
          u = n.createElement("script");
        if (((u.text = e), t))
          for (i in pi)
            (o = t[i] || (t.getAttribute && t.getAttribute(i))),
              o && u.setAttribute(i, o);
        n.head.appendChild(u).parentNode.removeChild(u);
      }
      function We(e) {
        return e == null
          ? e + ""
          : typeof e == "object" || typeof e == "function"
          ? ke[nn.call(e)] || "object"
          : typeof e;
      }
      var un = "3.6.0",
        r = function (e, t) {
          return new r.fn.init(e, t);
        };
      (r.fn = r.prototype = {
        jquery: un,
        constructor: r,
        length: 0,
        toArray: function () {
          return ge.call(this);
        },
        get: function (e) {
          return e == null
            ? ge.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = r.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return r.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            r.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(ge.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            r.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            r.grep(this, function (e, t) {
              return t % 2;
            })
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: Te,
        sort: U.sort,
        splice: U.splice,
      }),
        (r.extend = r.fn.extend = function () {
          var e,
            t,
            n,
            i,
            o,
            u,
            a = arguments[0] || {},
            l = 1,
            c = arguments.length,
            p = !1;
          for (
            typeof a == "boolean" && ((p = a), (a = arguments[l] || {}), l++),
              typeof a != "object" && !P(a) && (a = {}),
              l === c && ((a = this), l--);
            l < c;
            l++
          )
            if ((e = arguments[l]) != null)
              for (t in e)
                (i = e[t]),
                  !(t === "__proto__" || a === i) &&
                    (p && i && (r.isPlainObject(i) || (o = Array.isArray(i)))
                      ? ((n = a[t]),
                        o && !Array.isArray(n)
                          ? (u = [])
                          : !o && !r.isPlainObject(n)
                          ? (u = {})
                          : (u = n),
                        (o = !1),
                        (a[t] = r.extend(p, u, i)))
                      : i !== void 0 && (a[t] = i));
          return a;
        }),
        r.extend({
          expando: "jQuery" + (un + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return !e || nn.call(e) !== "[object Object]"
              ? !1
              : ((t = ee(e)),
                t
                  ? ((n = pt.call(t, "constructor") && t.constructor),
                    typeof n == "function" && rn.call(n) === di)
                  : !0);
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            on(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              i = 0;
            if (Dt(e))
              for (n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++);
            else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              e != null &&
                (Dt(Object(e))
                  ? r.merge(n, typeof e == "string" ? [e] : e)
                  : Te.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return t == null ? -1 : je.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++)
              e[o++] = t[i];
            return (e.length = o), e;
          },
          grep: function (e, t, n) {
            for (var i, o = [], u = 0, a = e.length, l = !n; u < a; u++)
              (i = !t(e[u], u)), i !== l && o.push(e[u]);
            return o;
          },
          map: function (e, t, n) {
            var i,
              o,
              u = 0,
              a = [];
            if (Dt(e))
              for (i = e.length; u < i; u++)
                (o = t(e[u], u, n)), o != null && a.push(o);
            else for (u in e) (o = t(e[u], u, n)), o != null && a.push(o);
            return Ne(a);
          },
          guid: 1,
          support: _,
        }),
        typeof Symbol == "function" &&
          (r.fn[Symbol.iterator] = U[Symbol.iterator]),
        r.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            ke["[object " + t + "]"] = t.toLowerCase();
          }
        );
      function Dt(e) {
        var t = !!e && "length" in e && e.length,
          n = We(e);
        return P(e) || Fe(e)
          ? !1
          : n === "array" ||
              t === 0 ||
              (typeof t == "number" && t > 0 && t - 1 in e);
      }
      var qe = (function (e) {
        var t,
          n,
          i,
          o,
          u,
          a,
          l,
          c,
          p,
          y,
          x,
          g,
          v,
          E,
          H,
          N,
          Q,
          G,
          ae,
          W = "sizzle" + 1 * new Date(),
          O = e.document,
          re = 0,
          R = 0,
          X = St(),
          ut = St(),
          Tt = St(),
          se = St(),
          Pe = function (s, f) {
            return s === f && (x = !0), 0;
          },
          Ie = {}.hasOwnProperty,
          oe = [],
          Ae = oe.pop,
          pe = oe.push,
          De = oe.push,
          Un = oe.slice,
          Me = function (s, f) {
            for (var d = 0, m = s.length; d < m; d++) if (s[d] === f) return d;
            return -1;
          },
          zt =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          F = "[\\x20\\t\\r\\n\\f]",
          Re =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            F +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          Vn =
            "\\[" +
            F +
            "*(" +
            Re +
            ")(?:" +
            F +
            "*([*^$|!~]?=)" +
            F +
            `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
            Re +
            "))|)" +
            F +
            "*\\]",
          Ut =
            ":(" +
            Re +
            `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
            Vn +
            ")*)|.*)\\)|)",
          lr = new RegExp(F + "+", "g"),
          wt = new RegExp(
            "^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$",
            "g"
          ),
          cr = new RegExp("^" + F + "*," + F + "*"),
          Xn = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
          dr = new RegExp(F + "|>"),
          pr = new RegExp(Ut),
          hr = new RegExp("^" + Re + "$"),
          Ct = {
            ID: new RegExp("^#(" + Re + ")"),
            CLASS: new RegExp("^\\.(" + Re + ")"),
            TAG: new RegExp("^(" + Re + "|[*])"),
            ATTR: new RegExp("^" + Vn),
            PSEUDO: new RegExp("^" + Ut),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                F +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                F +
                "*(?:([+-]|)" +
                F +
                "*(\\d+)|))" +
                F +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + zt + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                F +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                F +
                "*((?:-\\d)?\\d*)" +
                F +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          gr = /HTML$/i,
          yr = /^(?:input|select|textarea|button)$/i,
          vr = /^h\d$/i,
          at = /^[^{]+\{\s*\[native \w/,
          mr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          Vt = /[+~]/,
          Se = new RegExp(
            "\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          Ee = function (s, f) {
            var d = "0x" + s.slice(1) - 65536;
            return (
              f ||
              (d < 0
                ? String.fromCharCode(d + 65536)
                : String.fromCharCode((d >> 10) | 55296, (d & 1023) | 56320))
            );
          },
          Gn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          Qn = function (s, f) {
            return f
              ? s === "\0"
                ? "\uFFFD"
                : s.slice(0, -1) +
                  "\\" +
                  s.charCodeAt(s.length - 1).toString(16) +
                  " "
              : "\\" + s;
          },
          Yn = function () {
            g();
          },
          br = Nt(
            function (s) {
              return (
                s.disabled === !0 && s.nodeName.toLowerCase() === "fieldset"
              );
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          De.apply((oe = Un.call(O.childNodes)), O.childNodes),
            oe[O.childNodes.length].nodeType;
        } catch {
          De = {
            apply: oe.length
              ? function (f, d) {
                  pe.apply(f, Un.call(d));
                }
              : function (f, d) {
                  for (var m = f.length, h = 0; (f[m++] = d[h++]); );
                  f.length = m - 1;
                },
          };
        }
        function B(s, f, d, m) {
          var h,
            b,
            T,
            w,
            C,
            D,
            A,
            q = f && f.ownerDocument,
            I = f ? f.nodeType : 9;
          if (
            ((d = d || []),
            typeof s != "string" || !s || (I !== 1 && I !== 9 && I !== 11))
          )
            return d;
          if (!m && (g(f), (f = f || v), H)) {
            if (I !== 11 && (C = mr.exec(s)))
              if ((h = C[1])) {
                if (I === 9)
                  if ((T = f.getElementById(h))) {
                    if (T.id === h) return d.push(T), d;
                  } else return d;
                else if (
                  q &&
                  (T = q.getElementById(h)) &&
                  ae(f, T) &&
                  T.id === h
                )
                  return d.push(T), d;
              } else {
                if (C[2]) return De.apply(d, f.getElementsByTagName(s)), d;
                if (
                  (h = C[3]) &&
                  n.getElementsByClassName &&
                  f.getElementsByClassName
                )
                  return De.apply(d, f.getElementsByClassName(h)), d;
              }
            if (
              n.qsa &&
              !se[s + " "] &&
              (!N || !N.test(s)) &&
              (I !== 1 || f.nodeName.toLowerCase() !== "object")
            ) {
              if (((A = s), (q = f), I === 1 && (dr.test(s) || Xn.test(s)))) {
                for (
                  q = (Vt.test(s) && Gt(f.parentNode)) || f,
                    (q !== f || !n.scope) &&
                      ((w = f.getAttribute("id"))
                        ? (w = w.replace(Gn, Qn))
                        : f.setAttribute("id", (w = W))),
                    D = a(s),
                    b = D.length;
                  b--;

                )
                  D[b] = (w ? "#" + w : ":scope") + " " + Et(D[b]);
                A = D.join(",");
              }
              try {
                return De.apply(d, q.querySelectorAll(A)), d;
              } catch {
                se(s, !0);
              } finally {
                w === W && f.removeAttribute("id");
              }
            }
          }
          return c(s.replace(wt, "$1"), f, d, m);
        }
        function St() {
          var s = [];
          function f(d, m) {
            return (
              s.push(d + " ") > i.cacheLength && delete f[s.shift()],
              (f[d + " "] = m)
            );
          }
          return f;
        }
        function ve(s) {
          return (s[W] = !0), s;
        }
        function me(s) {
          var f = v.createElement("fieldset");
          try {
            return !!s(f);
          } catch {
            return !1;
          } finally {
            f.parentNode && f.parentNode.removeChild(f), (f = null);
          }
        }
        function Xt(s, f) {
          for (var d = s.split("|"), m = d.length; m--; )
            i.attrHandle[d[m]] = f;
        }
        function Jn(s, f) {
          var d = f && s,
            m =
              d &&
              s.nodeType === 1 &&
              f.nodeType === 1 &&
              s.sourceIndex - f.sourceIndex;
          if (m) return m;
          if (d) {
            for (; (d = d.nextSibling); ) if (d === f) return -1;
          }
          return s ? 1 : -1;
        }
        function xr(s) {
          return function (f) {
            var d = f.nodeName.toLowerCase();
            return d === "input" && f.type === s;
          };
        }
        function Tr(s) {
          return function (f) {
            var d = f.nodeName.toLowerCase();
            return (d === "input" || d === "button") && f.type === s;
          };
        }
        function Kn(s) {
          return function (f) {
            return "form" in f
              ? f.parentNode && f.disabled === !1
                ? "label" in f
                  ? "label" in f.parentNode
                    ? f.parentNode.disabled === s
                    : f.disabled === s
                  : f.isDisabled === s || (f.isDisabled !== !s && br(f) === s)
                : f.disabled === s
              : "label" in f
              ? f.disabled === s
              : !1;
          };
        }
        function _e(s) {
          return ve(function (f) {
            return (
              (f = +f),
              ve(function (d, m) {
                for (var h, b = s([], d.length, f), T = b.length; T--; )
                  d[(h = b[T])] && (d[h] = !(m[h] = d[h]));
              })
            );
          });
        }
        function Gt(s) {
          return s && typeof s.getElementsByTagName != "undefined" && s;
        }
        (n = B.support = {}),
          (u = B.isXML = function (s) {
            var f = s && s.namespaceURI,
              d = s && (s.ownerDocument || s).documentElement;
            return !gr.test(f || (d && d.nodeName) || "HTML");
          }),
          (g = B.setDocument = function (s) {
            var f,
              d,
              m = s ? s.ownerDocument || s : O;
            return (
              m == v ||
                m.nodeType !== 9 ||
                !m.documentElement ||
                ((v = m),
                (E = v.documentElement),
                (H = !u(v)),
                O != v &&
                  (d = v.defaultView) &&
                  d.top !== d &&
                  (d.addEventListener
                    ? d.addEventListener("unload", Yn, !1)
                    : d.attachEvent && d.attachEvent("onunload", Yn)),
                (n.scope = me(function (h) {
                  return (
                    E.appendChild(h).appendChild(v.createElement("div")),
                    typeof h.querySelectorAll != "undefined" &&
                      !h.querySelectorAll(":scope fieldset div").length
                  );
                })),
                (n.attributes = me(function (h) {
                  return (h.className = "i"), !h.getAttribute("className");
                })),
                (n.getElementsByTagName = me(function (h) {
                  return (
                    h.appendChild(v.createComment("")),
                    !h.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = at.test(v.getElementsByClassName)),
                (n.getById = me(function (h) {
                  return (
                    (E.appendChild(h).id = W),
                    !v.getElementsByName || !v.getElementsByName(W).length
                  );
                })),
                n.getById
                  ? ((i.filter.ID = function (h) {
                      var b = h.replace(Se, Ee);
                      return function (T) {
                        return T.getAttribute("id") === b;
                      };
                    }),
                    (i.find.ID = function (h, b) {
                      if (typeof b.getElementById != "undefined" && H) {
                        var T = b.getElementById(h);
                        return T ? [T] : [];
                      }
                    }))
                  : ((i.filter.ID = function (h) {
                      var b = h.replace(Se, Ee);
                      return function (T) {
                        var w =
                          typeof T.getAttributeNode != "undefined" &&
                          T.getAttributeNode("id");
                        return w && w.value === b;
                      };
                    }),
                    (i.find.ID = function (h, b) {
                      if (typeof b.getElementById != "undefined" && H) {
                        var T,
                          w,
                          C,
                          D = b.getElementById(h);
                        if (D) {
                          if (
                            ((T = D.getAttributeNode("id")), T && T.value === h)
                          )
                            return [D];
                          for (
                            C = b.getElementsByName(h), w = 0;
                            (D = C[w++]);

                          )
                            if (
                              ((T = D.getAttributeNode("id")),
                              T && T.value === h)
                            )
                              return [D];
                        }
                        return [];
                      }
                    })),
                (i.find.TAG = n.getElementsByTagName
                  ? function (h, b) {
                      if (typeof b.getElementsByTagName != "undefined")
                        return b.getElementsByTagName(h);
                      if (n.qsa) return b.querySelectorAll(h);
                    }
                  : function (h, b) {
                      var T,
                        w = [],
                        C = 0,
                        D = b.getElementsByTagName(h);
                      if (h === "*") {
                        for (; (T = D[C++]); ) T.nodeType === 1 && w.push(T);
                        return w;
                      }
                      return D;
                    }),
                (i.find.CLASS =
                  n.getElementsByClassName &&
                  function (h, b) {
                    if (typeof b.getElementsByClassName != "undefined" && H)
                      return b.getElementsByClassName(h);
                  }),
                (Q = []),
                (N = []),
                (n.qsa = at.test(v.querySelectorAll)) &&
                  (me(function (h) {
                    var b;
                    (E.appendChild(h).innerHTML =
                      "<a id='" +
                      W +
                      "'></a><select id='" +
                      W +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      h.querySelectorAll("[msallowcapture^='']").length &&
                        N.push("[*^$]=" + F + `*(?:''|"")`),
                      h.querySelectorAll("[selected]").length ||
                        N.push("\\[" + F + "*(?:value|" + zt + ")"),
                      h.querySelectorAll("[id~=" + W + "-]").length ||
                        N.push("~="),
                      (b = v.createElement("input")),
                      b.setAttribute("name", ""),
                      h.appendChild(b),
                      h.querySelectorAll("[name='']").length ||
                        N.push(
                          "\\[" + F + "*name" + F + "*=" + F + `*(?:''|"")`
                        ),
                      h.querySelectorAll(":checked").length ||
                        N.push(":checked"),
                      h.querySelectorAll("a#" + W + "+*").length ||
                        N.push(".#.+[+~]"),
                      h.querySelectorAll("\\\f"),
                      N.push("[\\r\\n\\f]");
                  }),
                  me(function (h) {
                    h.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var b = v.createElement("input");
                    b.setAttribute("type", "hidden"),
                      h.appendChild(b).setAttribute("name", "D"),
                      h.querySelectorAll("[name=d]").length &&
                        N.push("name" + F + "*[*^$|!~]?="),
                      h.querySelectorAll(":enabled").length !== 2 &&
                        N.push(":enabled", ":disabled"),
                      (E.appendChild(h).disabled = !0),
                      h.querySelectorAll(":disabled").length !== 2 &&
                        N.push(":enabled", ":disabled"),
                      h.querySelectorAll("*,:x"),
                      N.push(",.*:");
                  })),
                (n.matchesSelector = at.test(
                  (G =
                    E.matches ||
                    E.webkitMatchesSelector ||
                    E.mozMatchesSelector ||
                    E.oMatchesSelector ||
                    E.msMatchesSelector)
                )) &&
                  me(function (h) {
                    (n.disconnectedMatch = G.call(h, "*")),
                      G.call(h, "[s!='']:x"),
                      Q.push("!=", Ut);
                  }),
                (N = N.length && new RegExp(N.join("|"))),
                (Q = Q.length && new RegExp(Q.join("|"))),
                (f = at.test(E.compareDocumentPosition)),
                (ae =
                  f || at.test(E.contains)
                    ? function (h, b) {
                        var T = h.nodeType === 9 ? h.documentElement : h,
                          w = b && b.parentNode;
                        return (
                          h === w ||
                          !!(
                            w &&
                            w.nodeType === 1 &&
                            (T.contains
                              ? T.contains(w)
                              : h.compareDocumentPosition &&
                                h.compareDocumentPosition(w) & 16)
                          )
                        );
                      }
                    : function (h, b) {
                        if (b) {
                          for (; (b = b.parentNode); ) if (b === h) return !0;
                        }
                        return !1;
                      }),
                (Pe = f
                  ? function (h, b) {
                      if (h === b) return (x = !0), 0;
                      var T =
                        !h.compareDocumentPosition - !b.compareDocumentPosition;
                      return (
                        T ||
                        ((T =
                          (h.ownerDocument || h) == (b.ownerDocument || b)
                            ? h.compareDocumentPosition(b)
                            : 1),
                        T & 1 ||
                        (!n.sortDetached && b.compareDocumentPosition(h) === T)
                          ? h == v || (h.ownerDocument == O && ae(O, h))
                            ? -1
                            : b == v || (b.ownerDocument == O && ae(O, b))
                            ? 1
                            : y
                            ? Me(y, h) - Me(y, b)
                            : 0
                          : T & 4
                          ? -1
                          : 1)
                      );
                    }
                  : function (h, b) {
                      if (h === b) return (x = !0), 0;
                      var T,
                        w = 0,
                        C = h.parentNode,
                        D = b.parentNode,
                        A = [h],
                        q = [b];
                      if (!C || !D)
                        return h == v
                          ? -1
                          : b == v
                          ? 1
                          : C
                          ? -1
                          : D
                          ? 1
                          : y
                          ? Me(y, h) - Me(y, b)
                          : 0;
                      if (C === D) return Jn(h, b);
                      for (T = h; (T = T.parentNode); ) A.unshift(T);
                      for (T = b; (T = T.parentNode); ) q.unshift(T);
                      for (; A[w] === q[w]; ) w++;
                      return w
                        ? Jn(A[w], q[w])
                        : A[w] == O
                        ? -1
                        : q[w] == O
                        ? 1
                        : 0;
                    })),
              v
            );
          }),
          (B.matches = function (s, f) {
            return B(s, null, null, f);
          }),
          (B.matchesSelector = function (s, f) {
            if (
              (g(s),
              n.matchesSelector &&
                H &&
                !se[f + " "] &&
                (!Q || !Q.test(f)) &&
                (!N || !N.test(f)))
            )
              try {
                var d = G.call(s, f);
                if (
                  d ||
                  n.disconnectedMatch ||
                  (s.document && s.document.nodeType !== 11)
                )
                  return d;
              } catch {
                se(f, !0);
              }
            return B(f, v, null, [s]).length > 0;
          }),
          (B.contains = function (s, f) {
            return (s.ownerDocument || s) != v && g(s), ae(s, f);
          }),
          (B.attr = function (s, f) {
            (s.ownerDocument || s) != v && g(s);
            var d = i.attrHandle[f.toLowerCase()],
              m =
                d && Ie.call(i.attrHandle, f.toLowerCase())
                  ? d(s, f, !H)
                  : void 0;
            return m !== void 0
              ? m
              : n.attributes || !H
              ? s.getAttribute(f)
              : (m = s.getAttributeNode(f)) && m.specified
              ? m.value
              : null;
          }),
          (B.escape = function (s) {
            return (s + "").replace(Gn, Qn);
          }),
          (B.error = function (s) {
            throw new Error("Syntax error, unrecognized expression: " + s);
          }),
          (B.uniqueSort = function (s) {
            var f,
              d = [],
              m = 0,
              h = 0;
            if (
              ((x = !n.detectDuplicates),
              (y = !n.sortStable && s.slice(0)),
              s.sort(Pe),
              x)
            ) {
              for (; (f = s[h++]); ) f === s[h] && (m = d.push(h));
              for (; m--; ) s.splice(d[m], 1);
            }
            return (y = null), s;
          }),
          (o = B.getText = function (s) {
            var f,
              d = "",
              m = 0,
              h = s.nodeType;
            if (h) {
              if (h === 1 || h === 9 || h === 11) {
                if (typeof s.textContent == "string") return s.textContent;
                for (s = s.firstChild; s; s = s.nextSibling) d += o(s);
              } else if (h === 3 || h === 4) return s.nodeValue;
            } else for (; (f = s[m++]); ) d += o(f);
            return d;
          }),
          (i = B.selectors = {
            cacheLength: 50,
            createPseudo: ve,
            match: Ct,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (s) {
                return (
                  (s[1] = s[1].replace(Se, Ee)),
                  (s[3] = (s[3] || s[4] || s[5] || "").replace(Se, Ee)),
                  s[2] === "~=" && (s[3] = " " + s[3] + " "),
                  s.slice(0, 4)
                );
              },
              CHILD: function (s) {
                return (
                  (s[1] = s[1].toLowerCase()),
                  s[1].slice(0, 3) === "nth"
                    ? (s[3] || B.error(s[0]),
                      (s[4] = +(s[4]
                        ? s[5] + (s[6] || 1)
                        : 2 * (s[3] === "even" || s[3] === "odd"))),
                      (s[5] = +(s[7] + s[8] || s[3] === "odd")))
                    : s[3] && B.error(s[0]),
                  s
                );
              },
              PSEUDO: function (s) {
                var f,
                  d = !s[6] && s[2];
                return Ct.CHILD.test(s[0])
                  ? null
                  : (s[3]
                      ? (s[2] = s[4] || s[5] || "")
                      : d &&
                        pr.test(d) &&
                        (f = a(d, !0)) &&
                        (f = d.indexOf(")", d.length - f) - d.length) &&
                        ((s[0] = s[0].slice(0, f)), (s[2] = d.slice(0, f))),
                    s.slice(0, 3));
              },
            },
            filter: {
              TAG: function (s) {
                var f = s.replace(Se, Ee).toLowerCase();
                return s === "*"
                  ? function () {
                      return !0;
                    }
                  : function (d) {
                      return d.nodeName && d.nodeName.toLowerCase() === f;
                    };
              },
              CLASS: function (s) {
                var f = X[s + " "];
                return (
                  f ||
                  ((f = new RegExp("(^|" + F + ")" + s + "(" + F + "|$)")) &&
                    X(s, function (d) {
                      return f.test(
                        (typeof d.className == "string" && d.className) ||
                          (typeof d.getAttribute != "undefined" &&
                            d.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (s, f, d) {
                return function (m) {
                  var h = B.attr(m, s);
                  return h == null
                    ? f === "!="
                    : f
                    ? ((h += ""),
                      f === "="
                        ? h === d
                        : f === "!="
                        ? h !== d
                        : f === "^="
                        ? d && h.indexOf(d) === 0
                        : f === "*="
                        ? d && h.indexOf(d) > -1
                        : f === "$="
                        ? d && h.slice(-d.length) === d
                        : f === "~="
                        ? (" " + h.replace(lr, " ") + " ").indexOf(d) > -1
                        : f === "|="
                        ? h === d || h.slice(0, d.length + 1) === d + "-"
                        : !1)
                    : !0;
                };
              },
              CHILD: function (s, f, d, m, h) {
                var b = s.slice(0, 3) !== "nth",
                  T = s.slice(-4) !== "last",
                  w = f === "of-type";
                return m === 1 && h === 0
                  ? function (C) {
                      return !!C.parentNode;
                    }
                  : function (C, D, A) {
                      var q,
                        I,
                        $,
                        j,
                        Y,
                        J,
                        fe = b !== T ? "nextSibling" : "previousSibling",
                        V = C.parentNode,
                        st = w && C.nodeName.toLowerCase(),
                        ft = !A && !w,
                        le = !1;
                      if (V) {
                        if (b) {
                          for (; fe; ) {
                            for (j = C; (j = j[fe]); )
                              if (
                                w
                                  ? j.nodeName.toLowerCase() === st
                                  : j.nodeType === 1
                              )
                                return !1;
                            J = fe = s === "only" && !J && "nextSibling";
                          }
                          return !0;
                        }
                        if (((J = [T ? V.firstChild : V.lastChild]), T && ft)) {
                          for (
                            j = V,
                              $ = j[W] || (j[W] = {}),
                              I = $[j.uniqueID] || ($[j.uniqueID] = {}),
                              q = I[s] || [],
                              Y = q[0] === re && q[1],
                              le = Y && q[2],
                              j = Y && V.childNodes[Y];
                            (j =
                              (++Y && j && j[fe]) || (le = Y = 0) || J.pop());

                          )
                            if (j.nodeType === 1 && ++le && j === C) {
                              I[s] = [re, Y, le];
                              break;
                            }
                        } else if (
                          (ft &&
                            ((j = C),
                            ($ = j[W] || (j[W] = {})),
                            (I = $[j.uniqueID] || ($[j.uniqueID] = {})),
                            (q = I[s] || []),
                            (Y = q[0] === re && q[1]),
                            (le = Y)),
                          le === !1)
                        )
                          for (
                            ;
                            (j =
                              (++Y && j && j[fe]) || (le = Y = 0) || J.pop()) &&
                            !(
                              (w
                                ? j.nodeName.toLowerCase() === st
                                : j.nodeType === 1) &&
                              ++le &&
                              (ft &&
                                (($ = j[W] || (j[W] = {})),
                                (I = $[j.uniqueID] || ($[j.uniqueID] = {})),
                                (I[s] = [re, le])),
                              j === C)
                            );

                          );
                        return (
                          (le -= h), le === m || (le % m === 0 && le / m >= 0)
                        );
                      }
                    };
              },
              PSEUDO: function (s, f) {
                var d,
                  m =
                    i.pseudos[s] ||
                    i.setFilters[s.toLowerCase()] ||
                    B.error("unsupported pseudo: " + s);
                return m[W]
                  ? m(f)
                  : m.length > 1
                  ? ((d = [s, s, "", f]),
                    i.setFilters.hasOwnProperty(s.toLowerCase())
                      ? ve(function (h, b) {
                          for (var T, w = m(h, f), C = w.length; C--; )
                            (T = Me(h, w[C])), (h[T] = !(b[T] = w[C]));
                        })
                      : function (h) {
                          return m(h, 0, d);
                        })
                  : m;
              },
            },
            pseudos: {
              not: ve(function (s) {
                var f = [],
                  d = [],
                  m = l(s.replace(wt, "$1"));
                return m[W]
                  ? ve(function (h, b, T, w) {
                      for (var C, D = m(h, null, w, []), A = h.length; A--; )
                        (C = D[A]) && (h[A] = !(b[A] = C));
                    })
                  : function (h, b, T) {
                      return (
                        (f[0] = h), m(f, null, T, d), (f[0] = null), !d.pop()
                      );
                    };
              }),
              has: ve(function (s) {
                return function (f) {
                  return B(s, f).length > 0;
                };
              }),
              contains: ve(function (s) {
                return (
                  (s = s.replace(Se, Ee)),
                  function (f) {
                    return (f.textContent || o(f)).indexOf(s) > -1;
                  }
                );
              }),
              lang: ve(function (s) {
                return (
                  hr.test(s || "") || B.error("unsupported lang: " + s),
                  (s = s.replace(Se, Ee).toLowerCase()),
                  function (f) {
                    var d;
                    do
                      if (
                        (d = H
                          ? f.lang
                          : f.getAttribute("xml:lang") ||
                            f.getAttribute("lang"))
                      )
                        return (
                          (d = d.toLowerCase()),
                          d === s || d.indexOf(s + "-") === 0
                        );
                    while ((f = f.parentNode) && f.nodeType === 1);
                    return !1;
                  }
                );
              }),
              target: function (s) {
                var f = e.location && e.location.hash;
                return f && f.slice(1) === s.id;
              },
              root: function (s) {
                return s === E;
              },
              focus: function (s) {
                return (
                  s === v.activeElement &&
                  (!v.hasFocus || v.hasFocus()) &&
                  !!(s.type || s.href || ~s.tabIndex)
                );
              },
              enabled: Kn(!1),
              disabled: Kn(!0),
              checked: function (s) {
                var f = s.nodeName.toLowerCase();
                return (
                  (f === "input" && !!s.checked) ||
                  (f === "option" && !!s.selected)
                );
              },
              selected: function (s) {
                return (
                  s.parentNode && s.parentNode.selectedIndex, s.selected === !0
                );
              },
              empty: function (s) {
                for (s = s.firstChild; s; s = s.nextSibling)
                  if (s.nodeType < 6) return !1;
                return !0;
              },
              parent: function (s) {
                return !i.pseudos.empty(s);
              },
              header: function (s) {
                return vr.test(s.nodeName);
              },
              input: function (s) {
                return yr.test(s.nodeName);
              },
              button: function (s) {
                var f = s.nodeName.toLowerCase();
                return (f === "input" && s.type === "button") || f === "button";
              },
              text: function (s) {
                var f;
                return (
                  s.nodeName.toLowerCase() === "input" &&
                  s.type === "text" &&
                  ((f = s.getAttribute("type")) == null ||
                    f.toLowerCase() === "text")
                );
              },
              first: _e(function () {
                return [0];
              }),
              last: _e(function (s, f) {
                return [f - 1];
              }),
              eq: _e(function (s, f, d) {
                return [d < 0 ? d + f : d];
              }),
              even: _e(function (s, f) {
                for (var d = 0; d < f; d += 2) s.push(d);
                return s;
              }),
              odd: _e(function (s, f) {
                for (var d = 1; d < f; d += 2) s.push(d);
                return s;
              }),
              lt: _e(function (s, f, d) {
                for (var m = d < 0 ? d + f : d > f ? f : d; --m >= 0; )
                  s.push(m);
                return s;
              }),
              gt: _e(function (s, f, d) {
                for (var m = d < 0 ? d + f : d; ++m < f; ) s.push(m);
                return s;
              }),
            },
          }),
          (i.pseudos.nth = i.pseudos.eq);
        for (t in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          i.pseudos[t] = xr(t);
        for (t in { submit: !0, reset: !0 }) i.pseudos[t] = Tr(t);
        function Zn() {}
        (Zn.prototype = i.filters = i.pseudos),
          (i.setFilters = new Zn()),
          (a = B.tokenize = function (s, f) {
            var d,
              m,
              h,
              b,
              T,
              w,
              C,
              D = ut[s + " "];
            if (D) return f ? 0 : D.slice(0);
            for (T = s, w = [], C = i.preFilter; T; ) {
              (!d || (m = cr.exec(T))) &&
                (m && (T = T.slice(m[0].length) || T), w.push((h = []))),
                (d = !1),
                (m = Xn.exec(T)) &&
                  ((d = m.shift()),
                  h.push({ value: d, type: m[0].replace(wt, " ") }),
                  (T = T.slice(d.length)));
              for (b in i.filter)
                (m = Ct[b].exec(T)) &&
                  (!C[b] || (m = C[b](m))) &&
                  ((d = m.shift()),
                  h.push({ value: d, type: b, matches: m }),
                  (T = T.slice(d.length)));
              if (!d) break;
            }
            return f ? T.length : T ? B.error(s) : ut(s, w).slice(0);
          });
        function Et(s) {
          for (var f = 0, d = s.length, m = ""; f < d; f++) m += s[f].value;
          return m;
        }
        function Nt(s, f, d) {
          var m = f.dir,
            h = f.next,
            b = h || m,
            T = d && b === "parentNode",
            w = R++;
          return f.first
            ? function (C, D, A) {
                for (; (C = C[m]); )
                  if (C.nodeType === 1 || T) return s(C, D, A);
                return !1;
              }
            : function (C, D, A) {
                var q,
                  I,
                  $,
                  j = [re, w];
                if (A) {
                  for (; (C = C[m]); )
                    if ((C.nodeType === 1 || T) && s(C, D, A)) return !0;
                } else
                  for (; (C = C[m]); )
                    if (C.nodeType === 1 || T)
                      if (
                        (($ = C[W] || (C[W] = {})),
                        (I = $[C.uniqueID] || ($[C.uniqueID] = {})),
                        h && h === C.nodeName.toLowerCase())
                      )
                        C = C[m] || C;
                      else {
                        if ((q = I[b]) && q[0] === re && q[1] === w)
                          return (j[2] = q[2]);
                        if (((I[b] = j), (j[2] = s(C, D, A)))) return !0;
                      }
                return !1;
              };
        }
        function Qt(s) {
          return s.length > 1
            ? function (f, d, m) {
                for (var h = s.length; h--; ) if (!s[h](f, d, m)) return !1;
                return !0;
              }
            : s[0];
        }
        function wr(s, f, d) {
          for (var m = 0, h = f.length; m < h; m++) B(s, f[m], d);
          return d;
        }
        function At(s, f, d, m, h) {
          for (var b, T = [], w = 0, C = s.length, D = f != null; w < C; w++)
            (b = s[w]) && (!d || d(b, m, h)) && (T.push(b), D && f.push(w));
          return T;
        }
        function Yt(s, f, d, m, h, b) {
          return (
            m && !m[W] && (m = Yt(m)),
            h && !h[W] && (h = Yt(h, b)),
            ve(function (T, w, C, D) {
              var A,
                q,
                I,
                $ = [],
                j = [],
                Y = w.length,
                J = T || wr(f || "*", C.nodeType ? [C] : C, []),
                fe = s && (T || !f) ? At(J, $, s, C, D) : J,
                V = d ? (h || (T ? s : Y || m) ? [] : w) : fe;
              if ((d && d(fe, V, C, D), m))
                for (A = At(V, j), m(A, [], C, D), q = A.length; q--; )
                  (I = A[q]) && (V[j[q]] = !(fe[j[q]] = I));
              if (T) {
                if (h || s) {
                  if (h) {
                    for (A = [], q = V.length; q--; )
                      (I = V[q]) && A.push((fe[q] = I));
                    h(null, (V = []), A, D);
                  }
                  for (q = V.length; q--; )
                    (I = V[q]) &&
                      (A = h ? Me(T, I) : $[q]) > -1 &&
                      (T[A] = !(w[A] = I));
                }
              } else (V = At(V === w ? V.splice(Y, V.length) : V)), h ? h(null, w, V, D) : De.apply(w, V);
            })
          );
        }
        function Jt(s) {
          for (
            var f,
              d,
              m,
              h = s.length,
              b = i.relative[s[0].type],
              T = b || i.relative[" "],
              w = b ? 1 : 0,
              C = Nt(
                function (q) {
                  return q === f;
                },
                T,
                !0
              ),
              D = Nt(
                function (q) {
                  return Me(f, q) > -1;
                },
                T,
                !0
              ),
              A = [
                function (q, I, $) {
                  var j =
                    (!b && ($ || I !== p)) ||
                    ((f = I).nodeType ? C(q, I, $) : D(q, I, $));
                  return (f = null), j;
                },
              ];
            w < h;
            w++
          )
            if ((d = i.relative[s[w].type])) A = [Nt(Qt(A), d)];
            else {
              if (((d = i.filter[s[w].type].apply(null, s[w].matches)), d[W])) {
                for (m = ++w; m < h && !i.relative[s[m].type]; m++);
                return Yt(
                  w > 1 && Qt(A),
                  w > 1 &&
                    Et(
                      s
                        .slice(0, w - 1)
                        .concat({ value: s[w - 2].type === " " ? "*" : "" })
                    ).replace(wt, "$1"),
                  d,
                  w < m && Jt(s.slice(w, m)),
                  m < h && Jt((s = s.slice(m))),
                  m < h && Et(s)
                );
              }
              A.push(d);
            }
          return Qt(A);
        }
        function Cr(s, f) {
          var d = f.length > 0,
            m = s.length > 0,
            h = function (b, T, w, C, D) {
              var A,
                q,
                I,
                $ = 0,
                j = "0",
                Y = b && [],
                J = [],
                fe = p,
                V = b || (m && i.find.TAG("*", D)),
                st = (re += fe == null ? 1 : Math.random() || 0.1),
                ft = V.length;
              for (
                D && (p = T == v || T || D);
                j !== ft && (A = V[j]) != null;
                j++
              ) {
                if (m && A) {
                  for (
                    q = 0, !T && A.ownerDocument != v && (g(A), (w = !H));
                    (I = s[q++]);

                  )
                    if (I(A, T || v, w)) {
                      C.push(A);
                      break;
                    }
                  D && (re = st);
                }
                d && ((A = !I && A) && $--, b && Y.push(A));
              }
              if ((($ += j), d && j !== $)) {
                for (q = 0; (I = f[q++]); ) I(Y, J, T, w);
                if (b) {
                  if ($ > 0) for (; j--; ) Y[j] || J[j] || (J[j] = Ae.call(C));
                  J = At(J);
                }
                De.apply(C, J),
                  D &&
                    !b &&
                    J.length > 0 &&
                    $ + f.length > 1 &&
                    B.uniqueSort(C);
              }
              return D && ((re = st), (p = fe)), Y;
            };
          return d ? ve(h) : h;
        }
        return (
          (l = B.compile = function (s, f) {
            var d,
              m = [],
              h = [],
              b = Tt[s + " "];
            if (!b) {
              for (f || (f = a(s)), d = f.length; d--; )
                (b = Jt(f[d])), b[W] ? m.push(b) : h.push(b);
              (b = Tt(s, Cr(h, m))), (b.selector = s);
            }
            return b;
          }),
          (c = B.select = function (s, f, d, m) {
            var h,
              b,
              T,
              w,
              C,
              D = typeof s == "function" && s,
              A = !m && a((s = D.selector || s));
            if (((d = d || []), A.length === 1)) {
              if (
                ((b = A[0] = A[0].slice(0)),
                b.length > 2 &&
                  (T = b[0]).type === "ID" &&
                  f.nodeType === 9 &&
                  H &&
                  i.relative[b[1].type])
              ) {
                if (
                  ((f = (i.find.ID(T.matches[0].replace(Se, Ee), f) || [])[0]),
                  f)
                )
                  D && (f = f.parentNode);
                else return d;
                s = s.slice(b.shift().value.length);
              }
              for (
                h = Ct.needsContext.test(s) ? 0 : b.length;
                h-- && ((T = b[h]), !i.relative[(w = T.type)]);

              )
                if (
                  (C = i.find[w]) &&
                  (m = C(
                    T.matches[0].replace(Se, Ee),
                    (Vt.test(b[0].type) && Gt(f.parentNode)) || f
                  ))
                ) {
                  if ((b.splice(h, 1), (s = m.length && Et(b)), !s))
                    return De.apply(d, m), d;
                  break;
                }
            }
            return (
              (D || l(s, A))(
                m,
                f,
                !H,
                d,
                !f || (Vt.test(s) && Gt(f.parentNode)) || f
              ),
              d
            );
          }),
          (n.sortStable = W.split("").sort(Pe).join("") === W),
          (n.detectDuplicates = !!x),
          g(),
          (n.sortDetached = me(function (s) {
            return s.compareDocumentPosition(v.createElement("fieldset")) & 1;
          })),
          me(function (s) {
            return (
              (s.innerHTML = "<a href='#'></a>"),
              s.firstChild.getAttribute("href") === "#"
            );
          }) ||
            Xt("type|href|height|width", function (s, f, d) {
              if (!d)
                return s.getAttribute(f, f.toLowerCase() === "type" ? 1 : 2);
            }),
          (!n.attributes ||
            !me(function (s) {
              return (
                (s.innerHTML = "<input/>"),
                s.firstChild.setAttribute("value", ""),
                s.firstChild.getAttribute("value") === ""
              );
            })) &&
            Xt("value", function (s, f, d) {
              if (!d && s.nodeName.toLowerCase() === "input")
                return s.defaultValue;
            }),
          me(function (s) {
            return s.getAttribute("disabled") == null;
          }) ||
            Xt(zt, function (s, f, d) {
              var m;
              if (!d)
                return s[f] === !0
                  ? f.toLowerCase()
                  : (m = s.getAttributeNode(f)) && m.specified
                  ? m.value
                  : null;
            }),
          B
        );
      })(S);
      (r.find = qe),
        (r.expr = qe.selectors),
        (r.expr[":"] = r.expr.pseudos),
        (r.uniqueSort = r.unique = qe.uniqueSort),
        (r.text = qe.getText),
        (r.isXMLDoc = qe.isXML),
        (r.contains = qe.contains),
        (r.escapeSelector = qe.escape);
      var Be = function (e, t, n) {
          for (var i = [], o = n !== void 0; (e = e[t]) && e.nodeType !== 9; )
            if (e.nodeType === 1) {
              if (o && r(e).is(n)) break;
              i.push(e);
            }
          return i;
        },
        an = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            e.nodeType === 1 && e !== t && n.push(e);
          return n;
        },
        sn = r.expr.match.needsContext;
      function ce(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var fn = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function jt(e, t, n) {
        return P(t)
          ? r.grep(e, function (i, o) {
              return !!t.call(i, o, i) !== n;
            })
          : t.nodeType
          ? r.grep(e, function (i) {
              return (i === t) !== n;
            })
          : typeof t != "string"
          ? r.grep(e, function (i) {
              return je.call(t, i) > -1 !== n;
            })
          : r.filter(t, e, n);
      }
      (r.filter = function (e, t, n) {
        var i = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          t.length === 1 && i.nodeType === 1
            ? r.find.matchesSelector(i, e)
              ? [i]
              : []
            : r.find.matches(
                e,
                r.grep(t, function (o) {
                  return o.nodeType === 1;
                })
              )
        );
      }),
        r.fn.extend({
          find: function (e) {
            var t,
              n,
              i = this.length,
              o = this;
            if (typeof e != "string")
              return this.pushStack(
                r(e).filter(function () {
                  for (t = 0; t < i; t++) if (r.contains(o[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < i; t++) r.find(e, o[t], n);
            return i > 1 ? r.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(jt(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(jt(this, e || [], !0));
          },
          is: function (e) {
            return !!jt(
              this,
              typeof e == "string" && sn.test(e) ? r(e) : e || [],
              !1
            ).length;
          },
        });
      var ln,
        hi = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        gi = (r.fn.init = function (e, t, n) {
          var i, o;
          if (!e) return this;
          if (((n = n || ln), typeof e == "string"))
            if (
              (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3
                ? (i = [null, e, null])
                : (i = hi.exec(e)),
              i && (i[1] || !t))
            )
              if (i[1]) {
                if (
                  ((t = t instanceof r ? t[0] : t),
                  r.merge(
                    this,
                    r.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : M,
                      !0
                    )
                  ),
                  fn.test(i[1]) && r.isPlainObject(t))
                )
                  for (i in t) P(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              } else
                return (
                  (o = M.getElementById(i[2])),
                  o && ((this[0] = o), (this.length = 1)),
                  this
                );
            else
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
          else {
            if (e.nodeType) return (this[0] = e), (this.length = 1), this;
            if (P(e)) return n.ready !== void 0 ? n.ready(e) : e(r);
          }
          return r.makeArray(e, this);
        });
      (gi.prototype = r.fn), (ln = r(M));
      var yi = /^(?:parents|prev(?:Until|All))/,
        vi = { children: !0, contents: !0, next: !0, prev: !0 };
      r.fn.extend({
        has: function (e) {
          var t = r(e, this),
            n = t.length;
          return this.filter(function () {
            for (var i = 0; i < n; i++) if (r.contains(this, t[i])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            i = 0,
            o = this.length,
            u = [],
            a = typeof e != "string" && r(e);
          if (!sn.test(e)) {
            for (; i < o; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : n.nodeType === 1 && r.find.matchesSelector(n, e))
                ) {
                  u.push(n);
                  break;
                }
          }
          return this.pushStack(u.length > 1 ? r.uniqueSort(u) : u);
        },
        index: function (e) {
          return e
            ? typeof e == "string"
              ? je.call(r(e), this[0])
              : je.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(r.uniqueSort(r.merge(this.get(), r(e, t))));
        },
        addBack: function (e) {
          return this.add(
            e == null ? this.prevObject : this.prevObject.filter(e)
          );
        },
      });
      function cn(e, t) {
        for (; (e = e[t]) && e.nodeType !== 1; );
        return e;
      }
      r.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null;
          },
          parents: function (e) {
            return Be(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return Be(e, "parentNode", n);
          },
          next: function (e) {
            return cn(e, "nextSibling");
          },
          prev: function (e) {
            return cn(e, "previousSibling");
          },
          nextAll: function (e) {
            return Be(e, "nextSibling");
          },
          prevAll: function (e) {
            return Be(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return Be(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return Be(e, "previousSibling", n);
          },
          siblings: function (e) {
            return an((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return an(e.firstChild);
          },
          contents: function (e) {
            return e.contentDocument != null && ee(e.contentDocument)
              ? e.contentDocument
              : (ce(e, "template") && (e = e.content || e),
                r.merge([], e.childNodes));
          },
        },
        function (e, t) {
          r.fn[e] = function (n, i) {
            var o = r.map(this, t, n);
            return (
              e.slice(-5) !== "Until" && (i = n),
              i && typeof i == "string" && (o = r.filter(i, o)),
              this.length > 1 &&
                (vi[e] || r.uniqueSort(o), yi.test(e) && o.reverse()),
              this.pushStack(o)
            );
          };
        }
      );
      var be = /[^\x20\t\r\n\f]+/g;
      function mi(e) {
        var t = {};
        return (
          r.each(e.match(be) || [], function (n, i) {
            t[i] = !0;
          }),
          t
        );
      }
      r.Callbacks = function (e) {
        e = typeof e == "string" ? mi(e) : r.extend({}, e);
        var t,
          n,
          i,
          o,
          u = [],
          a = [],
          l = -1,
          c = function () {
            for (o = o || e.once, i = t = !0; a.length; l = -1)
              for (n = a.shift(); ++l < u.length; )
                u[l].apply(n[0], n[1]) === !1 &&
                  e.stopOnFalse &&
                  ((l = u.length), (n = !1));
            e.memory || (n = !1), (t = !1), o && (n ? (u = []) : (u = ""));
          },
          p = {
            add: function () {
              return (
                u &&
                  (n && !t && ((l = u.length - 1), a.push(n)),
                  (function y(x) {
                    r.each(x, function (g, v) {
                      P(v)
                        ? (!e.unique || !p.has(v)) && u.push(v)
                        : v && v.length && We(v) !== "string" && y(v);
                    });
                  })(arguments),
                  n && !t && c()),
                this
              );
            },
            remove: function () {
              return (
                r.each(arguments, function (y, x) {
                  for (var g; (g = r.inArray(x, u, g)) > -1; )
                    u.splice(g, 1), g <= l && l--;
                }),
                this
              );
            },
            has: function (y) {
              return y ? r.inArray(y, u) > -1 : u.length > 0;
            },
            empty: function () {
              return u && (u = []), this;
            },
            disable: function () {
              return (o = a = []), (u = n = ""), this;
            },
            disabled: function () {
              return !u;
            },
            lock: function () {
              return (o = a = []), !n && !t && (u = n = ""), this;
            },
            locked: function () {
              return !!o;
            },
            fireWith: function (y, x) {
              return (
                o ||
                  ((x = x || []),
                  (x = [y, x.slice ? x.slice() : x]),
                  a.push(x),
                  t || c()),
                this
              );
            },
            fire: function () {
              return p.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!i;
            },
          };
        return p;
      };
      function $e(e) {
        return e;
      }
      function ht(e) {
        throw e;
      }
      function dn(e, t, n, i) {
        var o;
        try {
          e && P((o = e.promise))
            ? o.call(e).done(t).fail(n)
            : e && P((o = e.then))
            ? o.call(e, t, n)
            : t.apply(void 0, [e].slice(i));
        } catch (u) {
          n.apply(void 0, [u]);
        }
      }
      r.extend({
        Deferred: function (e) {
          var t = [
              [
                "notify",
                "progress",
                r.Callbacks("memory"),
                r.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                r.Callbacks("once memory"),
                r.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                r.Callbacks("once memory"),
                r.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            n = "pending",
            i = {
              state: function () {
                return n;
              },
              always: function () {
                return o.done(arguments).fail(arguments), this;
              },
              catch: function (u) {
                return i.then(null, u);
              },
              pipe: function () {
                var u = arguments;
                return r
                  .Deferred(function (a) {
                    r.each(t, function (l, c) {
                      var p = P(u[c[4]]) && u[c[4]];
                      o[c[1]](function () {
                        var y = p && p.apply(this, arguments);
                        y && P(y.promise)
                          ? y
                              .promise()
                              .progress(a.notify)
                              .done(a.resolve)
                              .fail(a.reject)
                          : a[c[0] + "With"](this, p ? [y] : arguments);
                      });
                    }),
                      (u = null);
                  })
                  .promise();
              },
              then: function (u, a, l) {
                var c = 0;
                function p(y, x, g, v) {
                  return function () {
                    var E = this,
                      H = arguments,
                      N = function () {
                        var G, ae;
                        if (!(y < c)) {
                          if (((G = g.apply(E, H)), G === x.promise()))
                            throw new TypeError("Thenable self-resolution");
                          (ae =
                            G &&
                            (typeof G == "object" || typeof G == "function") &&
                            G.then),
                            P(ae)
                              ? v
                                ? ae.call(G, p(c, x, $e, v), p(c, x, ht, v))
                                : (c++,
                                  ae.call(
                                    G,
                                    p(c, x, $e, v),
                                    p(c, x, ht, v),
                                    p(c, x, $e, x.notifyWith)
                                  ))
                              : (g !== $e && ((E = void 0), (H = [G])),
                                (v || x.resolveWith)(E, H));
                        }
                      },
                      Q = v
                        ? N
                        : function () {
                            try {
                              N();
                            } catch (G) {
                              r.Deferred.exceptionHook &&
                                r.Deferred.exceptionHook(G, Q.stackTrace),
                                y + 1 >= c &&
                                  (g !== ht && ((E = void 0), (H = [G])),
                                  x.rejectWith(E, H));
                            }
                          };
                    y
                      ? Q()
                      : (r.Deferred.getStackHook &&
                          (Q.stackTrace = r.Deferred.getStackHook()),
                        S.setTimeout(Q));
                  };
                }
                return r
                  .Deferred(function (y) {
                    t[0][3].add(p(0, y, P(l) ? l : $e, y.notifyWith)),
                      t[1][3].add(p(0, y, P(u) ? u : $e)),
                      t[2][3].add(p(0, y, P(a) ? a : ht));
                  })
                  .promise();
              },
              promise: function (u) {
                return u != null ? r.extend(u, i) : i;
              },
            },
            o = {};
          return (
            r.each(t, function (u, a) {
              var l = a[2],
                c = a[5];
              (i[a[1]] = l.add),
                c &&
                  l.add(
                    function () {
                      n = c;
                    },
                    t[3 - u][2].disable,
                    t[3 - u][3].disable,
                    t[0][2].lock,
                    t[0][3].lock
                  ),
                l.add(a[3].fire),
                (o[a[0]] = function () {
                  return (
                    o[a[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                  );
                }),
                (o[a[0] + "With"] = l.fireWith);
            }),
            i.promise(o),
            e && e.call(o, o),
            o
          );
        },
        when: function (e) {
          var t = arguments.length,
            n = t,
            i = Array(n),
            o = ge.call(arguments),
            u = r.Deferred(),
            a = function (l) {
              return function (c) {
                (i[l] = this),
                  (o[l] = arguments.length > 1 ? ge.call(arguments) : c),
                  --t || u.resolveWith(i, o);
              };
            };
          if (
            t <= 1 &&
            (dn(e, u.done(a(n)).resolve, u.reject, !t),
            u.state() === "pending" || P(o[n] && o[n].then))
          )
            return u.then();
          for (; n--; ) dn(o[n], a(n), u.reject);
          return u.promise();
        },
      });
      var bi = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (r.Deferred.exceptionHook = function (e, t) {
        S.console &&
          S.console.warn &&
          e &&
          bi.test(e.name) &&
          S.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (r.readyException = function (e) {
          S.setTimeout(function () {
            throw e;
          });
        });
      var kt = r.Deferred();
      (r.fn.ready = function (e) {
        return (
          kt.then(e).catch(function (t) {
            r.readyException(t);
          }),
          this
        );
      }),
        r.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (e === !0 ? --r.readyWait : r.isReady) ||
              ((r.isReady = !0),
              !(e !== !0 && --r.readyWait > 0) && kt.resolveWith(M, [r]));
          },
        }),
        (r.ready.then = kt.then);
      function gt() {
        M.removeEventListener("DOMContentLoaded", gt),
          S.removeEventListener("load", gt),
          r.ready();
      }
      M.readyState === "complete" ||
      (M.readyState !== "loading" && !M.documentElement.doScroll)
        ? S.setTimeout(r.ready)
        : (M.addEventListener("DOMContentLoaded", gt),
          S.addEventListener("load", gt));
      var we = function (e, t, n, i, o, u, a) {
          var l = 0,
            c = e.length,
            p = n == null;
          if (We(n) === "object") {
            o = !0;
            for (l in n) we(e, t, l, n[l], !0, u, a);
          } else if (
            i !== void 0 &&
            ((o = !0),
            P(i) || (a = !0),
            p &&
              (a
                ? (t.call(e, i), (t = null))
                : ((p = t),
                  (t = function (y, x, g) {
                    return p.call(r(y), g);
                  }))),
            t)
          )
            for (; l < c; l++) t(e[l], n, a ? i : i.call(e[l], l, t(e[l], n)));
          return o ? e : p ? t.call(e) : c ? t(e[0], n) : u;
        },
        xi = /^-ms-/,
        Ti = /-([a-z])/g;
      function wi(e, t) {
        return t.toUpperCase();
      }
      function xe(e) {
        return e.replace(xi, "ms-").replace(Ti, wi);
      }
      var Ke = function (e) {
        return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
      };
      function Ze() {
        this.expando = r.expando + Ze.uid++;
      }
      (Ze.uid = 1),
        (Ze.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                Ke(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var i,
              o = this.cache(e);
            if (typeof t == "string") o[xe(t)] = n;
            else for (i in t) o[xe(i)] = t[i];
            return o;
          },
          get: function (e, t) {
            return t === void 0
              ? this.cache(e)
              : e[this.expando] && e[this.expando][xe(t)];
          },
          access: function (e, t, n) {
            return t === void 0 || (t && typeof t == "string" && n === void 0)
              ? this.get(e, t)
              : (this.set(e, t, n), n !== void 0 ? n : t);
          },
          remove: function (e, t) {
            var n,
              i = e[this.expando];
            if (i !== void 0) {
              if (t !== void 0)
                for (
                  Array.isArray(t)
                    ? (t = t.map(xe))
                    : ((t = xe(t)), (t = (t in i) ? [t] : t.match(be) || [])),
                    n = t.length;
                  n--;

                )
                  delete i[t[n]];
              (t === void 0 || r.isEmptyObject(i)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return t !== void 0 && !r.isEmptyObject(t);
          },
        });
      var k = new Ze(),
        te = new Ze(),
        Ci = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Si = /[A-Z]/g;
      function Ei(e) {
        return e === "true"
          ? !0
          : e === "false"
          ? !1
          : e === "null"
          ? null
          : e === +e + ""
          ? +e
          : Ci.test(e)
          ? JSON.parse(e)
          : e;
      }
      function pn(e, t, n) {
        var i;
        if (n === void 0 && e.nodeType === 1)
          if (
            ((i = "data-" + t.replace(Si, "-$&").toLowerCase()),
            (n = e.getAttribute(i)),
            typeof n == "string")
          ) {
            try {
              n = Ei(n);
            } catch {}
            te.set(e, t, n);
          } else n = void 0;
        return n;
      }
      r.extend({
        hasData: function (e) {
          return te.hasData(e) || k.hasData(e);
        },
        data: function (e, t, n) {
          return te.access(e, t, n);
        },
        removeData: function (e, t) {
          te.remove(e, t);
        },
        _data: function (e, t, n) {
          return k.access(e, t, n);
        },
        _removeData: function (e, t) {
          k.remove(e, t);
        },
      }),
        r.fn.extend({
          data: function (e, t) {
            var n,
              i,
              o,
              u = this[0],
              a = u && u.attributes;
            if (e === void 0) {
              if (
                this.length &&
                ((o = te.get(u)), u.nodeType === 1 && !k.get(u, "hasDataAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    ((i = a[n].name),
                    i.indexOf("data-") === 0 &&
                      ((i = xe(i.slice(5))), pn(u, i, o[i])));
                k.set(u, "hasDataAttrs", !0);
              }
              return o;
            }
            return typeof e == "object"
              ? this.each(function () {
                  te.set(this, e);
                })
              : we(
                  this,
                  function (l) {
                    var c;
                    if (u && l === void 0)
                      return (
                        (c = te.get(u, e)),
                        c !== void 0 || ((c = pn(u, e)), c !== void 0)
                          ? c
                          : void 0
                      );
                    this.each(function () {
                      te.set(this, e, l);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              te.remove(this, e);
            });
          },
        }),
        r.extend({
          queue: function (e, t, n) {
            var i;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (i = k.get(e, t)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = k.access(e, t, r.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = r.queue(e, t),
              i = n.length,
              o = n.shift(),
              u = r._queueHooks(e, t),
              a = function () {
                r.dequeue(e, t);
              };
            o === "inprogress" && ((o = n.shift()), i--),
              o &&
                (t === "fx" && n.unshift("inprogress"),
                delete u.stop,
                o.call(e, a, u)),
              !i && u && u.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              k.get(e, n) ||
              k.access(e, n, {
                empty: r.Callbacks("once memory").add(function () {
                  k.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        r.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              typeof e != "string" && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? r.queue(this[0], e)
                : t === void 0
                ? this
                : this.each(function () {
                    var i = r.queue(this, e, t);
                    r._queueHooks(this, e),
                      e === "fx" && i[0] !== "inprogress" && r.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              r.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              i = 1,
              o = r.Deferred(),
              u = this,
              a = this.length,
              l = function () {
                --i || o.resolveWith(u, [u]);
              };
            for (
              typeof e != "string" && ((t = e), (e = void 0)), e = e || "fx";
              a--;

            )
              (n = k.get(u[a], e + "queueHooks")),
                n && n.empty && (i++, n.empty.add(l));
            return l(), o.promise(t);
          },
        });
      var hn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        et = new RegExp("^(?:([+-])=|)(" + hn + ")([a-z%]*)$", "i"),
        Ce = ["Top", "Right", "Bottom", "Left"],
        Le = M.documentElement,
        ze = function (e) {
          return r.contains(e.ownerDocument, e);
        },
        Ni = { composed: !0 };
      Le.getRootNode &&
        (ze = function (e) {
          return (
            r.contains(e.ownerDocument, e) ||
            e.getRootNode(Ni) === e.ownerDocument
          );
        });
      var yt = function (e, t) {
        return (
          (e = t || e),
          e.style.display === "none" ||
            (e.style.display === "" && ze(e) && r.css(e, "display") === "none")
        );
      };
      function gn(e, t, n, i) {
        var o,
          u,
          a = 20,
          l = i
            ? function () {
                return i.cur();
              }
            : function () {
                return r.css(e, t, "");
              },
          c = l(),
          p = (n && n[3]) || (r.cssNumber[t] ? "" : "px"),
          y =
            e.nodeType &&
            (r.cssNumber[t] || (p !== "px" && +c)) &&
            et.exec(r.css(e, t));
        if (y && y[3] !== p) {
          for (c = c / 2, p = p || y[3], y = +c || 1; a--; )
            r.style(e, t, y + p),
              (1 - u) * (1 - (u = l() / c || 0.5)) <= 0 && (a = 0),
              (y = y / u);
          (y = y * 2), r.style(e, t, y + p), (n = n || []);
        }
        return (
          n &&
            ((y = +y || +c || 0),
            (o = n[1] ? y + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = p), (i.start = y), (i.end = o))),
          o
        );
      }
      var yn = {};
      function Ai(e) {
        var t,
          n = e.ownerDocument,
          i = e.nodeName,
          o = yn[i];
        return (
          o ||
          ((t = n.body.appendChild(n.createElement(i))),
          (o = r.css(t, "display")),
          t.parentNode.removeChild(t),
          o === "none" && (o = "block"),
          (yn[i] = o),
          o)
        );
      }
      function Ue(e, t) {
        for (var n, i, o = [], u = 0, a = e.length; u < a; u++)
          (i = e[u]),
            !!i.style &&
              ((n = i.style.display),
              t
                ? (n === "none" &&
                    ((o[u] = k.get(i, "display") || null),
                    o[u] || (i.style.display = "")),
                  i.style.display === "" && yt(i) && (o[u] = Ai(i)))
                : n !== "none" && ((o[u] = "none"), k.set(i, "display", n)));
        for (u = 0; u < a; u++) o[u] != null && (e[u].style.display = o[u]);
        return e;
      }
      r.fn.extend({
        show: function () {
          return Ue(this, !0);
        },
        hide: function () {
          return Ue(this);
        },
        toggle: function (e) {
          return typeof e == "boolean"
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                yt(this) ? r(this).show() : r(this).hide();
              });
        },
      });
      var tt = /^(?:checkbox|radio)$/i,
        vn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        mn = /^$|^module$|\/(?:java|ecma)script/i;
      (function () {
        var e = M.createDocumentFragment(),
          t = e.appendChild(M.createElement("div")),
          n = M.createElement("input");
        n.setAttribute("type", "radio"),
          n.setAttribute("checked", "checked"),
          n.setAttribute("name", "t"),
          t.appendChild(n),
          (_.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (t.innerHTML = "<textarea>x</textarea>"),
          (_.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
          (t.innerHTML = "<option></option>"),
          (_.option = !!t.lastChild);
      })();
      var de = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      (de.tbody = de.tfoot = de.colgroup = de.caption = de.thead),
        (de.th = de.td),
        _.option ||
          (de.optgroup = de.option = [
            1,
            "<select multiple='multiple'>",
            "</select>",
          ]);
      function ne(e, t) {
        var n;
        return (
          typeof e.getElementsByTagName != "undefined"
            ? (n = e.getElementsByTagName(t || "*"))
            : typeof e.querySelectorAll != "undefined"
            ? (n = e.querySelectorAll(t || "*"))
            : (n = []),
          t === void 0 || (t && ce(e, t)) ? r.merge([e], n) : n
        );
      }
      function qt(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          k.set(e[n], "globalEval", !t || k.get(t[n], "globalEval"));
      }
      var Di = /<|&#?\w+;/;
      function bn(e, t, n, i, o) {
        for (
          var u,
            a,
            l,
            c,
            p,
            y,
            x = t.createDocumentFragment(),
            g = [],
            v = 0,
            E = e.length;
          v < E;
          v++
        )
          if (((u = e[v]), u || u === 0))
            if (We(u) === "object") r.merge(g, u.nodeType ? [u] : u);
            else if (!Di.test(u)) g.push(t.createTextNode(u));
            else {
              for (
                a = a || x.appendChild(t.createElement("div")),
                  l = (vn.exec(u) || ["", ""])[1].toLowerCase(),
                  c = de[l] || de._default,
                  a.innerHTML = c[1] + r.htmlPrefilter(u) + c[2],
                  y = c[0];
                y--;

              )
                a = a.lastChild;
              r.merge(g, a.childNodes),
                (a = x.firstChild),
                (a.textContent = "");
            }
        for (x.textContent = "", v = 0; (u = g[v++]); ) {
          if (i && r.inArray(u, i) > -1) {
            o && o.push(u);
            continue;
          }
          if (
            ((p = ze(u)), (a = ne(x.appendChild(u), "script")), p && qt(a), n)
          )
            for (y = 0; (u = a[y++]); ) mn.test(u.type || "") && n.push(u);
        }
        return x;
      }
      var xn = /^([^.]*)(?:\.(.+)|)/;
      function Ve() {
        return !0;
      }
      function Xe() {
        return !1;
      }
      function ji(e, t) {
        return (e === ki()) == (t === "focus");
      }
      function ki() {
        try {
          return M.activeElement;
        } catch {}
      }
      function Lt(e, t, n, i, o, u) {
        var a, l;
        if (typeof t == "object") {
          typeof n != "string" && ((i = i || n), (n = void 0));
          for (l in t) Lt(e, l, n, i, t[l], u);
          return e;
        }
        if (
          (i == null && o == null
            ? ((o = n), (i = n = void 0))
            : o == null &&
              (typeof n == "string"
                ? ((o = i), (i = void 0))
                : ((o = i), (i = n), (n = void 0))),
          o === !1)
        )
          o = Xe;
        else if (!o) return e;
        return (
          u === 1 &&
            ((a = o),
            (o = function (c) {
              return r().off(c), a.apply(this, arguments);
            }),
            (o.guid = a.guid || (a.guid = r.guid++))),
          e.each(function () {
            r.event.add(this, t, o, i, n);
          })
        );
      }
      r.event = {
        global: {},
        add: function (e, t, n, i, o) {
          var u,
            a,
            l,
            c,
            p,
            y,
            x,
            g,
            v,
            E,
            H,
            N = k.get(e);
          if (!!Ke(e))
            for (
              n.handler && ((u = n), (n = u.handler), (o = u.selector)),
                o && r.find.matchesSelector(Le, o),
                n.guid || (n.guid = r.guid++),
                (c = N.events) || (c = N.events = Object.create(null)),
                (a = N.handle) ||
                  (a = N.handle = function (Q) {
                    return typeof r != "undefined" &&
                      r.event.triggered !== Q.type
                      ? r.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
                t = (t || "").match(be) || [""],
                p = t.length;
              p--;

            )
              (l = xn.exec(t[p]) || []),
                (v = H = l[1]),
                (E = (l[2] || "").split(".").sort()),
                !!v &&
                  ((x = r.event.special[v] || {}),
                  (v = (o ? x.delegateType : x.bindType) || v),
                  (x = r.event.special[v] || {}),
                  (y = r.extend(
                    {
                      type: v,
                      origType: H,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: o,
                      needsContext: o && r.expr.match.needsContext.test(o),
                      namespace: E.join("."),
                    },
                    u
                  )),
                  (g = c[v]) ||
                    ((g = c[v] = []),
                    (g.delegateCount = 0),
                    (!x.setup || x.setup.call(e, i, E, a) === !1) &&
                      e.addEventListener &&
                      e.addEventListener(v, a)),
                  x.add &&
                    (x.add.call(e, y),
                    y.handler.guid || (y.handler.guid = n.guid)),
                  o ? g.splice(g.delegateCount++, 0, y) : g.push(y),
                  (r.event.global[v] = !0));
        },
        remove: function (e, t, n, i, o) {
          var u,
            a,
            l,
            c,
            p,
            y,
            x,
            g,
            v,
            E,
            H,
            N = k.hasData(e) && k.get(e);
          if (!(!N || !(c = N.events))) {
            for (t = (t || "").match(be) || [""], p = t.length; p--; ) {
              if (
                ((l = xn.exec(t[p]) || []),
                (v = H = l[1]),
                (E = (l[2] || "").split(".").sort()),
                !v)
              ) {
                for (v in c) r.event.remove(e, v + t[p], n, i, !0);
                continue;
              }
              for (
                x = r.event.special[v] || {},
                  v = (i ? x.delegateType : x.bindType) || v,
                  g = c[v] || [],
                  l =
                    l[2] &&
                    new RegExp("(^|\\.)" + E.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  a = u = g.length;
                u--;

              )
                (y = g[u]),
                  (o || H === y.origType) &&
                    (!n || n.guid === y.guid) &&
                    (!l || l.test(y.namespace)) &&
                    (!i || i === y.selector || (i === "**" && y.selector)) &&
                    (g.splice(u, 1),
                    y.selector && g.delegateCount--,
                    x.remove && x.remove.call(e, y));
              a &&
                !g.length &&
                ((!x.teardown || x.teardown.call(e, E, N.handle) === !1) &&
                  r.removeEvent(e, v, N.handle),
                delete c[v]);
            }
            r.isEmptyObject(c) && k.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            i,
            o,
            u,
            a,
            l = new Array(arguments.length),
            c = r.event.fix(e),
            p = (k.get(this, "events") || Object.create(null))[c.type] || [],
            y = r.event.special[c.type] || {};
          for (l[0] = c, t = 1; t < arguments.length; t++) l[t] = arguments[t];
          if (
            ((c.delegateTarget = this),
            !(y.preDispatch && y.preDispatch.call(this, c) === !1))
          ) {
            for (
              a = r.event.handlers.call(this, c, p), t = 0;
              (o = a[t++]) && !c.isPropagationStopped();

            )
              for (
                c.currentTarget = o.elem, n = 0;
                (u = o.handlers[n++]) && !c.isImmediatePropagationStopped();

              )
                (!c.rnamespace ||
                  u.namespace === !1 ||
                  c.rnamespace.test(u.namespace)) &&
                  ((c.handleObj = u),
                  (c.data = u.data),
                  (i = (
                    (r.event.special[u.origType] || {}).handle || u.handler
                  ).apply(o.elem, l)),
                  i !== void 0 &&
                    (c.result = i) === !1 &&
                    (c.preventDefault(), c.stopPropagation()));
            return y.postDispatch && y.postDispatch.call(this, c), c.result;
          }
        },
        handlers: function (e, t) {
          var n,
            i,
            o,
            u,
            a,
            l = [],
            c = t.delegateCount,
            p = e.target;
          if (c && p.nodeType && !(e.type === "click" && e.button >= 1)) {
            for (; p !== this; p = p.parentNode || this)
              if (
                p.nodeType === 1 &&
                !(e.type === "click" && p.disabled === !0)
              ) {
                for (u = [], a = {}, n = 0; n < c; n++)
                  (i = t[n]),
                    (o = i.selector + " "),
                    a[o] === void 0 &&
                      (a[o] = i.needsContext
                        ? r(o, this).index(p) > -1
                        : r.find(o, this, null, [p]).length),
                    a[o] && u.push(i);
                u.length && l.push({ elem: p, handlers: u });
              }
          }
          return (
            (p = this),
            c < t.length && l.push({ elem: p, handlers: t.slice(c) }),
            l
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(r.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: P(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (n) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              });
            },
          });
        },
        fix: function (e) {
          return e[r.expando] ? e : new r.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                tt.test(t.type) &&
                  t.click &&
                  ce(t, "input") &&
                  vt(t, "click", Ve),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                tt.test(t.type) && t.click && ce(t, "input") && vt(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (tt.test(t.type) &&
                  t.click &&
                  ce(t, "input") &&
                  k.get(t, "click")) ||
                ce(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              e.result !== void 0 &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      };
      function vt(e, t, n) {
        if (!n) {
          k.get(e, t) === void 0 && r.event.add(e, t, Ve);
          return;
        }
        k.set(e, t, !1),
          r.event.add(e, t, {
            namespace: !1,
            handler: function (i) {
              var o,
                u,
                a = k.get(this, t);
              if (i.isTrigger & 1 && this[t]) {
                if (a.length)
                  (r.event.special[t] || {}).delegateType &&
                    i.stopPropagation();
                else if (
                  ((a = ge.call(arguments)),
                  k.set(this, t, a),
                  (o = n(this, t)),
                  this[t](),
                  (u = k.get(this, t)),
                  a !== u || o ? k.set(this, t, !1) : (u = {}),
                  a !== u)
                )
                  return (
                    i.stopImmediatePropagation(),
                    i.preventDefault(),
                    u && u.value
                  );
              } else
                a.length &&
                  (k.set(this, t, {
                    value: r.event.trigger(
                      r.extend(a[0], r.Event.prototype),
                      a.slice(1),
                      this
                    ),
                  }),
                  i.stopImmediatePropagation());
            },
          });
      }
      (r.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
        (r.Event = function (e, t) {
          if (!(this instanceof r.Event)) return new r.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (e.defaultPrevented === void 0 && e.returnValue === !1)
                  ? Ve
                  : Xe),
              (this.target =
                e.target && e.target.nodeType === 3
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && r.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[r.expando] = !0);
        }),
        (r.Event.prototype = {
          constructor: r.Event,
          isDefaultPrevented: Xe,
          isPropagationStopped: Xe,
          isImmediatePropagationStopped: Xe,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ve),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ve),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ve),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        r.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0,
          },
          r.event.addProp
        ),
        r.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          r.event.special[e] = {
            setup: function () {
              return vt(this, e, ji), !1;
            },
            trigger: function () {
              return vt(this, e), !0;
            },
            _default: function () {
              return !0;
            },
            delegateType: t,
          };
        }),
        r.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            r.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (n) {
                var i,
                  o = this,
                  u = n.relatedTarget,
                  a = n.handleObj;
                return (
                  (!u || (u !== o && !r.contains(o, u))) &&
                    ((n.type = a.origType),
                    (i = a.handler.apply(this, arguments)),
                    (n.type = t)),
                  i
                );
              },
            };
          }
        ),
        r.fn.extend({
          on: function (e, t, n, i) {
            return Lt(this, e, t, n, i);
          },
          one: function (e, t, n, i) {
            return Lt(this, e, t, n, i, 1);
          },
          off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
              return (
                (i = e.handleObj),
                r(e.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if (typeof e == "object") {
              for (o in e) this.off(o, t, e[o]);
              return this;
            }
            return (
              (t === !1 || typeof t == "function") && ((n = t), (t = void 0)),
              n === !1 && (n = Xe),
              this.each(function () {
                r.event.remove(this, e, n, t);
              })
            );
          },
        });
      var qi = /<script|<style|<link/i,
        Li = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Tn(e, t) {
        return (
          (ce(e, "table") &&
            ce(t.nodeType !== 11 ? t : t.firstChild, "tr") &&
            r(e).children("tbody")[0]) ||
          e
        );
      }
      function Hi(e) {
        return (e.type = (e.getAttribute("type") !== null) + "/" + e.type), e;
      }
      function Pi(e) {
        return (
          (e.type || "").slice(0, 5) === "true/"
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function wn(e, t) {
        var n, i, o, u, a, l, c;
        if (t.nodeType === 1) {
          if (k.hasData(e) && ((u = k.get(e)), (c = u.events), c)) {
            k.remove(t, "handle events");
            for (o in c)
              for (n = 0, i = c[o].length; n < i; n++)
                r.event.add(t, o, c[o][n]);
          }
          te.hasData(e) &&
            ((a = te.access(e)), (l = r.extend({}, a)), te.set(t, l));
        }
      }
      function Ii(e, t) {
        var n = t.nodeName.toLowerCase();
        n === "input" && tt.test(e.type)
          ? (t.checked = e.checked)
          : (n === "input" || n === "textarea") &&
            (t.defaultValue = e.defaultValue);
      }
      function Ge(e, t, n, i) {
        t = Ne(t);
        var o,
          u,
          a,
          l,
          c,
          p,
          y = 0,
          x = e.length,
          g = x - 1,
          v = t[0],
          E = P(v);
        if (E || (x > 1 && typeof v == "string" && !_.checkClone && Li.test(v)))
          return e.each(function (H) {
            var N = e.eq(H);
            E && (t[0] = v.call(this, H, N.html())), Ge(N, t, n, i);
          });
        if (
          x &&
          ((o = bn(t, e[0].ownerDocument, !1, e, i)),
          (u = o.firstChild),
          o.childNodes.length === 1 && (o = u),
          u || i)
        ) {
          for (a = r.map(ne(o, "script"), Hi), l = a.length; y < x; y++)
            (c = o),
              y !== g &&
                ((c = r.clone(c, !0, !0)), l && r.merge(a, ne(c, "script"))),
              n.call(e[y], c, y);
          if (l)
            for (
              p = a[a.length - 1].ownerDocument, r.map(a, Pi), y = 0;
              y < l;
              y++
            )
              (c = a[y]),
                mn.test(c.type || "") &&
                  !k.access(c, "globalEval") &&
                  r.contains(p, c) &&
                  (c.src && (c.type || "").toLowerCase() !== "module"
                    ? r._evalUrl &&
                      !c.noModule &&
                      r._evalUrl(
                        c.src,
                        { nonce: c.nonce || c.getAttribute("nonce") },
                        p
                      )
                    : on(c.textContent.replace(Oi, ""), c, p));
        }
        return e;
      }
      function Cn(e, t, n) {
        for (var i, o = t ? r.filter(t, e) : e, u = 0; (i = o[u]) != null; u++)
          !n && i.nodeType === 1 && r.cleanData(ne(i)),
            i.parentNode &&
              (n && ze(i) && qt(ne(i, "script")), i.parentNode.removeChild(i));
        return e;
      }
      r.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var i,
            o,
            u,
            a,
            l = e.cloneNode(!0),
            c = ze(e);
          if (
            !_.noCloneChecked &&
            (e.nodeType === 1 || e.nodeType === 11) &&
            !r.isXMLDoc(e)
          )
            for (a = ne(l), u = ne(e), i = 0, o = u.length; i < o; i++)
              Ii(u[i], a[i]);
          if (t)
            if (n)
              for (
                u = u || ne(e), a = a || ne(l), i = 0, o = u.length;
                i < o;
                i++
              )
                wn(u[i], a[i]);
            else wn(e, l);
          return (
            (a = ne(l, "script")),
            a.length > 0 && qt(a, !c && ne(e, "script")),
            l
          );
        },
        cleanData: function (e) {
          for (
            var t, n, i, o = r.event.special, u = 0;
            (n = e[u]) !== void 0;
            u++
          )
            if (Ke(n)) {
              if ((t = n[k.expando])) {
                if (t.events)
                  for (i in t.events)
                    o[i] ? r.event.remove(n, i) : r.removeEvent(n, i, t.handle);
                n[k.expando] = void 0;
              }
              n[te.expando] && (n[te.expando] = void 0);
            }
        },
      }),
        r.fn.extend({
          detach: function (e) {
            return Cn(this, e, !0);
          },
          remove: function (e) {
            return Cn(this, e);
          },
          text: function (e) {
            return we(
              this,
              function (t) {
                return t === void 0
                  ? r.text(this)
                  : this.empty().each(function () {
                      (this.nodeType === 1 ||
                        this.nodeType === 11 ||
                        this.nodeType === 9) &&
                        (this.textContent = t);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return Ge(this, arguments, function (e) {
              if (
                this.nodeType === 1 ||
                this.nodeType === 11 ||
                this.nodeType === 9
              ) {
                var t = Tn(this, e);
                t.appendChild(e);
              }
            });
          },
          prepend: function () {
            return Ge(this, arguments, function (e) {
              if (
                this.nodeType === 1 ||
                this.nodeType === 11 ||
                this.nodeType === 9
              ) {
                var t = Tn(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Ge(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Ge(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; (e = this[t]) != null; t++)
              e.nodeType === 1 &&
                (r.cleanData(ne(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = e == null ? !1 : e),
              (t = t == null ? e : t),
              this.map(function () {
                return r.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return we(
              this,
              function (t) {
                var n = this[0] || {},
                  i = 0,
                  o = this.length;
                if (t === void 0 && n.nodeType === 1) return n.innerHTML;
                if (
                  typeof t == "string" &&
                  !qi.test(t) &&
                  !de[(vn.exec(t) || ["", ""])[1].toLowerCase()]
                ) {
                  t = r.htmlPrefilter(t);
                  try {
                    for (; i < o; i++)
                      (n = this[i] || {}),
                        n.nodeType === 1 &&
                          (r.cleanData(ne(n, !1)), (n.innerHTML = t));
                    n = 0;
                  } catch {}
                }
                n && this.empty().append(t);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return Ge(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                r.inArray(this, e) < 0 &&
                  (r.cleanData(ne(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        r.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            r.fn[e] = function (n) {
              for (
                var i, o = [], u = r(n), a = u.length - 1, l = 0;
                l <= a;
                l++
              )
                (i = l === a ? this : this.clone(!0)),
                  r(u[l])[t](i),
                  Te.apply(o, i.get());
              return this.pushStack(o);
            };
          }
        );
      var Ot = new RegExp("^(" + hn + ")(?!px)[a-z%]+$", "i"),
        mt = function (e) {
          var t = e.ownerDocument.defaultView;
          return (!t || !t.opener) && (t = S), t.getComputedStyle(e);
        },
        Sn = function (e, t, n) {
          var i,
            o,
            u = {};
          for (o in t) (u[o] = e.style[o]), (e.style[o] = t[o]);
          i = n.call(e);
          for (o in t) e.style[o] = u[o];
          return i;
        },
        Mi = new RegExp(Ce.join("|"), "i");
      (function () {
        function e() {
          if (!!p) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (p.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              Le.appendChild(c).appendChild(p);
            var y = S.getComputedStyle(p);
            (n = y.top !== "1%"),
              (l = t(y.marginLeft) === 12),
              (p.style.right = "60%"),
              (u = t(y.right) === 36),
              (i = t(y.width) === 36),
              (p.style.position = "absolute"),
              (o = t(p.offsetWidth / 3) === 12),
              Le.removeChild(c),
              (p = null);
          }
        }
        function t(y) {
          return Math.round(parseFloat(y));
        }
        var n,
          i,
          o,
          u,
          a,
          l,
          c = M.createElement("div"),
          p = M.createElement("div");
        !p.style ||
          ((p.style.backgroundClip = "content-box"),
          (p.cloneNode(!0).style.backgroundClip = ""),
          (_.clearCloneStyle = p.style.backgroundClip === "content-box"),
          r.extend(_, {
            boxSizingReliable: function () {
              return e(), i;
            },
            pixelBoxStyles: function () {
              return e(), u;
            },
            pixelPosition: function () {
              return e(), n;
            },
            reliableMarginLeft: function () {
              return e(), l;
            },
            scrollboxSize: function () {
              return e(), o;
            },
            reliableTrDimensions: function () {
              var y, x, g, v;
              return (
                a == null &&
                  ((y = M.createElement("table")),
                  (x = M.createElement("tr")),
                  (g = M.createElement("div")),
                  (y.style.cssText =
                    "position:absolute;left:-11111px;border-collapse:separate"),
                  (x.style.cssText = "border:1px solid"),
                  (x.style.height = "1px"),
                  (g.style.height = "9px"),
                  (g.style.display = "block"),
                  Le.appendChild(y).appendChild(x).appendChild(g),
                  (v = S.getComputedStyle(x)),
                  (a =
                    parseInt(v.height, 10) +
                      parseInt(v.borderTopWidth, 10) +
                      parseInt(v.borderBottomWidth, 10) ===
                    x.offsetHeight),
                  Le.removeChild(y)),
                a
              );
            },
          }));
      })();
      function nt(e, t, n) {
        var i,
          o,
          u,
          a,
          l = e.style;
        return (
          (n = n || mt(e)),
          n &&
            ((a = n.getPropertyValue(t) || n[t]),
            a === "" && !ze(e) && (a = r.style(e, t)),
            !_.pixelBoxStyles() &&
              Ot.test(a) &&
              Mi.test(t) &&
              ((i = l.width),
              (o = l.minWidth),
              (u = l.maxWidth),
              (l.minWidth = l.maxWidth = l.width = a),
              (a = n.width),
              (l.width = i),
              (l.minWidth = o),
              (l.maxWidth = u))),
          a !== void 0 ? a + "" : a
        );
      }
      function En(e, t) {
        return {
          get: function () {
            if (e()) {
              delete this.get;
              return;
            }
            return (this.get = t).apply(this, arguments);
          },
        };
      }
      var Nn = ["Webkit", "Moz", "ms"],
        An = M.createElement("div").style,
        Dn = {};
      function Ri(e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = Nn.length; n--; )
          if (((e = Nn[n] + t), e in An)) return e;
      }
      function Ht(e) {
        var t = r.cssProps[e] || Dn[e];
        return t || (e in An ? e : (Dn[e] = Ri(e) || e));
      }
      var _i = /^(none|table(?!-c[ea]).+)/,
        jn = /^--/,
        Fi = { position: "absolute", visibility: "hidden", display: "block" },
        kn = { letterSpacing: "0", fontWeight: "400" };
      function qn(e, t, n) {
        var i = et.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
      }
      function Pt(e, t, n, i, o, u) {
        var a = t === "width" ? 1 : 0,
          l = 0,
          c = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          n === "margin" && (c += r.css(e, n + Ce[a], !0, o)),
            i
              ? (n === "content" && (c -= r.css(e, "padding" + Ce[a], !0, o)),
                n !== "margin" &&
                  (c -= r.css(e, "border" + Ce[a] + "Width", !0, o)))
              : ((c += r.css(e, "padding" + Ce[a], !0, o)),
                n !== "padding"
                  ? (c += r.css(e, "border" + Ce[a] + "Width", !0, o))
                  : (l += r.css(e, "border" + Ce[a] + "Width", !0, o)));
        return (
          !i &&
            u >= 0 &&
            (c +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    u -
                    c -
                    l -
                    0.5
                )
              ) || 0),
          c
        );
      }
      function Ln(e, t, n) {
        var i = mt(e),
          o = !_.boxSizingReliable() || n,
          u = o && r.css(e, "boxSizing", !1, i) === "border-box",
          a = u,
          l = nt(e, t, i),
          c = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ot.test(l)) {
          if (!n) return l;
          l = "auto";
        }
        return (
          ((!_.boxSizingReliable() && u) ||
            (!_.reliableTrDimensions() && ce(e, "tr")) ||
            l === "auto" ||
            (!parseFloat(l) && r.css(e, "display", !1, i) === "inline")) &&
            e.getClientRects().length &&
            ((u = r.css(e, "boxSizing", !1, i) === "border-box"),
            (a = c in e),
            a && (l = e[c])),
          (l = parseFloat(l) || 0),
          l + Pt(e, t, n || (u ? "border" : "content"), a, i, l) + "px"
        );
      }
      r.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = nt(e, "opacity");
                return n === "" ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
          if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
            var o,
              u,
              a,
              l = xe(t),
              c = jn.test(t),
              p = e.style;
            if (
              (c || (t = Ht(l)),
              (a = r.cssHooks[t] || r.cssHooks[l]),
              n !== void 0)
            ) {
              if (
                ((u = typeof n),
                u === "string" &&
                  (o = et.exec(n)) &&
                  o[1] &&
                  ((n = gn(e, t, o)), (u = "number")),
                n == null || n !== n)
              )
                return;
              u === "number" &&
                !c &&
                (n += (o && o[3]) || (r.cssNumber[l] ? "" : "px")),
                !_.clearCloneStyle &&
                  n === "" &&
                  t.indexOf("background") === 0 &&
                  (p[t] = "inherit"),
                (!a || !("set" in a) || (n = a.set(e, n, i)) !== void 0) &&
                  (c ? p.setProperty(t, n) : (p[t] = n));
            } else
              return a && "get" in a && (o = a.get(e, !1, i)) !== void 0
                ? o
                : p[t];
          }
        },
        css: function (e, t, n, i) {
          var o,
            u,
            a,
            l = xe(t),
            c = jn.test(t);
          return (
            c || (t = Ht(l)),
            (a = r.cssHooks[t] || r.cssHooks[l]),
            a && "get" in a && (o = a.get(e, !0, n)),
            o === void 0 && (o = nt(e, t, i)),
            o === "normal" && t in kn && (o = kn[t]),
            n === "" || n
              ? ((u = parseFloat(o)), n === !0 || isFinite(u) ? u || 0 : o)
              : o
          );
        },
      }),
        r.each(["height", "width"], function (e, t) {
          r.cssHooks[t] = {
            get: function (n, i, o) {
              if (i)
                return _i.test(r.css(n, "display")) &&
                  (!n.getClientRects().length ||
                    !n.getBoundingClientRect().width)
                  ? Sn(n, Fi, function () {
                      return Ln(n, t, o);
                    })
                  : Ln(n, t, o);
            },
            set: function (n, i, o) {
              var u,
                a = mt(n),
                l = !_.scrollboxSize() && a.position === "absolute",
                c = l || o,
                p = c && r.css(n, "boxSizing", !1, a) === "border-box",
                y = o ? Pt(n, t, o, p, a) : 0;
              return (
                p &&
                  l &&
                  (y -= Math.ceil(
                    n["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(a[t]) -
                      Pt(n, t, "border", !1, a) -
                      0.5
                  )),
                y &&
                  (u = et.exec(i)) &&
                  (u[3] || "px") !== "px" &&
                  ((n.style[t] = i), (i = r.css(n, t))),
                qn(n, i, y)
              );
            },
          };
        }),
        (r.cssHooks.marginLeft = En(_.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(nt(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  Sn(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        r.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (r.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var i = 0,
                  o = {},
                  u = typeof n == "string" ? n.split(" ") : [n];
                i < 4;
                i++
              )
                o[e + Ce[i] + t] = u[i] || u[i - 2] || u[0];
              return o;
            },
          }),
            e !== "margin" && (r.cssHooks[e + t].set = qn);
        }),
        r.fn.extend({
          css: function (e, t) {
            return we(
              this,
              function (n, i, o) {
                var u,
                  a,
                  l = {},
                  c = 0;
                if (Array.isArray(i)) {
                  for (u = mt(n), a = i.length; c < a; c++)
                    l[i[c]] = r.css(n, i[c], !1, u);
                  return l;
                }
                return o !== void 0 ? r.style(n, i, o) : r.css(n, i);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        });
      function ie(e, t, n, i, o) {
        return new ie.prototype.init(e, t, n, i, o);
      }
      (r.Tween = ie),
        (ie.prototype = {
          constructor: ie,
          init: function (e, t, n, i, o, u) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = o || r.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = u || (r.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = ie.propHooks[this.prop];
            return e && e.get ? e.get(this) : ie.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = ie.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = r.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : ie.propHooks._default.set(this),
              this
            );
          },
        }),
        (ie.prototype.init.prototype = ie.prototype),
        (ie.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return e.elem.nodeType !== 1 ||
                (e.elem[e.prop] != null && e.elem.style[e.prop] == null)
                ? e.elem[e.prop]
                : ((t = r.css(e.elem, e.prop, "")), !t || t === "auto" ? 0 : t);
            },
            set: function (e) {
              r.fx.step[e.prop]
                ? r.fx.step[e.prop](e)
                : e.elem.nodeType === 1 &&
                  (r.cssHooks[e.prop] || e.elem.style[Ht(e.prop)] != null)
                ? r.style(e.elem, e.prop, e.now + e.unit)
                : (e.elem[e.prop] = e.now);
            },
          },
        }),
        (ie.propHooks.scrollTop = ie.propHooks.scrollLeft = {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
        (r.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (r.fx = ie.prototype.init),
        (r.fx.step = {});
      var Qe,
        bt,
        Wi = /^(?:toggle|show|hide)$/,
        Bi = /queueHooks$/;
      function It() {
        bt &&
          (M.hidden === !1 && S.requestAnimationFrame
            ? S.requestAnimationFrame(It)
            : S.setTimeout(It, r.fx.interval),
          r.fx.tick());
      }
      function On() {
        return (
          S.setTimeout(function () {
            Qe = void 0;
          }),
          (Qe = Date.now())
        );
      }
      function xt(e, t) {
        var n,
          i = 0,
          o = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
          (n = Ce[i]), (o["margin" + n] = o["padding" + n] = e);
        return t && (o.opacity = o.width = e), o;
      }
      function Hn(e, t, n) {
        for (
          var i,
            o = (ye.tweeners[t] || []).concat(ye.tweeners["*"]),
            u = 0,
            a = o.length;
          u < a;
          u++
        )
          if ((i = o[u].call(n, t, e))) return i;
      }
      function $i(e, t, n) {
        var i,
          o,
          u,
          a,
          l,
          c,
          p,
          y,
          x = "width" in t || "height" in t,
          g = this,
          v = {},
          E = e.style,
          H = e.nodeType && yt(e),
          N = k.get(e, "fxshow");
        n.queue ||
          ((a = r._queueHooks(e, "fx")),
          a.unqueued == null &&
            ((a.unqueued = 0),
            (l = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || l();
            })),
          a.unqueued++,
          g.always(function () {
            g.always(function () {
              a.unqueued--, r.queue(e, "fx").length || a.empty.fire();
            });
          }));
        for (i in t)
          if (((o = t[i]), Wi.test(o))) {
            if (
              (delete t[i],
              (u = u || o === "toggle"),
              o === (H ? "hide" : "show"))
            )
              if (o === "show" && N && N[i] !== void 0) H = !0;
              else continue;
            v[i] = (N && N[i]) || r.style(e, i);
          }
        if (((c = !r.isEmptyObject(t)), !(!c && r.isEmptyObject(v)))) {
          x &&
            e.nodeType === 1 &&
            ((n.overflow = [E.overflow, E.overflowX, E.overflowY]),
            (p = N && N.display),
            p == null && (p = k.get(e, "display")),
            (y = r.css(e, "display")),
            y === "none" &&
              (p
                ? (y = p)
                : (Ue([e], !0),
                  (p = e.style.display || p),
                  (y = r.css(e, "display")),
                  Ue([e]))),
            (y === "inline" || (y === "inline-block" && p != null)) &&
              r.css(e, "float") === "none" &&
              (c ||
                (g.done(function () {
                  E.display = p;
                }),
                p == null && ((y = E.display), (p = y === "none" ? "" : y))),
              (E.display = "inline-block"))),
            n.overflow &&
              ((E.overflow = "hidden"),
              g.always(function () {
                (E.overflow = n.overflow[0]),
                  (E.overflowX = n.overflow[1]),
                  (E.overflowY = n.overflow[2]);
              })),
            (c = !1);
          for (i in v)
            c ||
              (N
                ? "hidden" in N && (H = N.hidden)
                : (N = k.access(e, "fxshow", { display: p })),
              u && (N.hidden = !H),
              H && Ue([e], !0),
              g.done(function () {
                H || Ue([e]), k.remove(e, "fxshow");
                for (i in v) r.style(e, i, v[i]);
              })),
              (c = Hn(H ? N[i] : 0, i, g)),
              i in N ||
                ((N[i] = c.start), H && ((c.end = c.start), (c.start = 0)));
        }
      }
      function zi(e, t) {
        var n, i, o, u, a;
        for (n in e)
          if (
            ((i = xe(n)),
            (o = t[i]),
            (u = e[n]),
            Array.isArray(u) && ((o = u[1]), (u = e[n] = u[0])),
            n !== i && ((e[i] = u), delete e[n]),
            (a = r.cssHooks[i]),
            a && "expand" in a)
          ) {
            (u = a.expand(u)), delete e[i];
            for (n in u) n in e || ((e[n] = u[n]), (t[n] = o));
          } else t[i] = o;
      }
      function ye(e, t, n) {
        var i,
          o,
          u = 0,
          a = ye.prefilters.length,
          l = r.Deferred().always(function () {
            delete c.elem;
          }),
          c = function () {
            if (o) return !1;
            for (
              var x = Qe || On(),
                g = Math.max(0, p.startTime + p.duration - x),
                v = g / p.duration || 0,
                E = 1 - v,
                H = 0,
                N = p.tweens.length;
              H < N;
              H++
            )
              p.tweens[H].run(E);
            return (
              l.notifyWith(e, [p, E, g]),
              E < 1 && N
                ? g
                : (N || l.notifyWith(e, [p, 1, 0]), l.resolveWith(e, [p]), !1)
            );
          },
          p = l.promise({
            elem: e,
            props: r.extend({}, t),
            opts: r.extend(
              !0,
              { specialEasing: {}, easing: r.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: Qe || On(),
            duration: n.duration,
            tweens: [],
            createTween: function (x, g) {
              var v = r.Tween(
                e,
                p.opts,
                x,
                g,
                p.opts.specialEasing[x] || p.opts.easing
              );
              return p.tweens.push(v), v;
            },
            stop: function (x) {
              var g = 0,
                v = x ? p.tweens.length : 0;
              if (o) return this;
              for (o = !0; g < v; g++) p.tweens[g].run(1);
              return (
                x
                  ? (l.notifyWith(e, [p, 1, 0]), l.resolveWith(e, [p, x]))
                  : l.rejectWith(e, [p, x]),
                this
              );
            },
          }),
          y = p.props;
        for (zi(y, p.opts.specialEasing); u < a; u++)
          if (((i = ye.prefilters[u].call(p, e, y, p.opts)), i))
            return (
              P(i.stop) &&
                (r._queueHooks(p.elem, p.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          r.map(y, Hn, p),
          P(p.opts.start) && p.opts.start.call(e, p),
          p
            .progress(p.opts.progress)
            .done(p.opts.done, p.opts.complete)
            .fail(p.opts.fail)
            .always(p.opts.always),
          r.fx.timer(r.extend(c, { elem: e, anim: p, queue: p.opts.queue })),
          p
        );
      }
      (r.Animation = r.extend(ye, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return gn(n.elem, e, et.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          P(e) ? ((t = e), (e = ["*"])) : (e = e.match(be));
          for (var n, i = 0, o = e.length; i < o; i++)
            (n = e[i]),
              (ye.tweeners[n] = ye.tweeners[n] || []),
              ye.tweeners[n].unshift(t);
        },
        prefilters: [$i],
        prefilter: function (e, t) {
          t ? ye.prefilters.unshift(e) : ye.prefilters.push(e);
        },
      })),
        (r.speed = function (e, t, n) {
          var i =
            e && typeof e == "object"
              ? r.extend({}, e)
              : {
                  complete: n || (!n && t) || (P(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !P(t) && t),
                };
          return (
            r.fx.off
              ? (i.duration = 0)
              : typeof i.duration != "number" &&
                (i.duration in r.fx.speeds
                  ? (i.duration = r.fx.speeds[i.duration])
                  : (i.duration = r.fx.speeds._default)),
            (i.queue == null || i.queue === !0) && (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
              P(i.old) && i.old.call(this), i.queue && r.dequeue(this, i.queue);
            }),
            i
          );
        }),
        r.fn.extend({
          fadeTo: function (e, t, n, i) {
            return this.filter(yt)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, i);
          },
          animate: function (e, t, n, i) {
            var o = r.isEmptyObject(e),
              u = r.speed(t, n, i),
              a = function () {
                var l = ye(this, r.extend({}, e), u);
                (o || k.get(this, "finish")) && l.stop(!0);
              };
            return (
              (a.finish = a),
              o || u.queue === !1 ? this.each(a) : this.queue(u.queue, a)
            );
          },
          stop: function (e, t, n) {
            var i = function (o) {
              var u = o.stop;
              delete o.stop, u(n);
            };
            return (
              typeof e != "string" && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var o = !0,
                  u = e != null && e + "queueHooks",
                  a = r.timers,
                  l = k.get(this);
                if (u) l[u] && l[u].stop && i(l[u]);
                else for (u in l) l[u] && l[u].stop && Bi.test(u) && i(l[u]);
                for (u = a.length; u--; )
                  a[u].elem === this &&
                    (e == null || a[u].queue === e) &&
                    (a[u].anim.stop(n), (o = !1), a.splice(u, 1));
                (o || !n) && r.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              e !== !1 && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = k.get(this),
                  i = n[e + "queue"],
                  o = n[e + "queueHooks"],
                  u = r.timers,
                  a = i ? i.length : 0;
                for (
                  n.finish = !0,
                    r.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = u.length;
                  t--;

                )
                  u[t].elem === this &&
                    u[t].queue === e &&
                    (u[t].anim.stop(!0), u.splice(t, 1));
                for (t = 0; t < a; t++)
                  i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        r.each(["toggle", "show", "hide"], function (e, t) {
          var n = r.fn[t];
          r.fn[t] = function (i, o, u) {
            return i == null || typeof i == "boolean"
              ? n.apply(this, arguments)
              : this.animate(xt(t, !0), i, o, u);
          };
        }),
        r.each(
          {
            slideDown: xt("show"),
            slideUp: xt("hide"),
            slideToggle: xt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            r.fn[e] = function (n, i, o) {
              return this.animate(t, n, i, o);
            };
          }
        ),
        (r.timers = []),
        (r.fx.tick = function () {
          var e,
            t = 0,
            n = r.timers;
          for (Qe = Date.now(); t < n.length; t++)
            (e = n[t]), !e() && n[t] === e && n.splice(t--, 1);
          n.length || r.fx.stop(), (Qe = void 0);
        }),
        (r.fx.timer = function (e) {
          r.timers.push(e), r.fx.start();
        }),
        (r.fx.interval = 13),
        (r.fx.start = function () {
          bt || ((bt = !0), It());
        }),
        (r.fx.stop = function () {
          bt = null;
        }),
        (r.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (r.fn.delay = function (e, t) {
          return (
            (e = (r.fx && r.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (n, i) {
              var o = S.setTimeout(n, e);
              i.stop = function () {
                S.clearTimeout(o);
              };
            })
          );
        }),
        (function () {
          var e = M.createElement("input"),
            t = M.createElement("select"),
            n = t.appendChild(M.createElement("option"));
          (e.type = "checkbox"),
            (_.checkOn = e.value !== ""),
            (_.optSelected = n.selected),
            (e = M.createElement("input")),
            (e.value = "t"),
            (e.type = "radio"),
            (_.radioValue = e.value === "t");
        })();
      var Pn,
        it = r.expr.attrHandle;
      r.fn.extend({
        attr: function (e, t) {
          return we(this, r.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            r.removeAttr(this, e);
          });
        },
      }),
        r.extend({
          attr: function (e, t, n) {
            var i,
              o,
              u = e.nodeType;
            if (!(u === 3 || u === 8 || u === 2)) {
              if (typeof e.getAttribute == "undefined") return r.prop(e, t, n);
              if (
                ((u !== 1 || !r.isXMLDoc(e)) &&
                  (o =
                    r.attrHooks[t.toLowerCase()] ||
                    (r.expr.match.bool.test(t) ? Pn : void 0)),
                n !== void 0)
              ) {
                if (n === null) {
                  r.removeAttr(e, t);
                  return;
                }
                return o && "set" in o && (i = o.set(e, n, t)) !== void 0
                  ? i
                  : (e.setAttribute(t, n + ""), n);
              }
              return o && "get" in o && (i = o.get(e, t)) !== null
                ? i
                : ((i = r.find.attr(e, t)), i == null ? void 0 : i);
            }
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!_.radioValue && t === "radio" && ce(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              i = 0,
              o = t && t.match(be);
            if (o && e.nodeType === 1)
              for (; (n = o[i++]); ) e.removeAttribute(n);
          },
        }),
        (Pn = {
          set: function (e, t, n) {
            return t === !1 ? r.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        r.each(r.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = it[t] || r.find.attr;
          it[t] = function (i, o, u) {
            var a,
              l,
              c = o.toLowerCase();
            return (
              u ||
                ((l = it[c]),
                (it[c] = a),
                (a = n(i, o, u) != null ? c : null),
                (it[c] = l)),
              a
            );
          };
        });
      var Ui = /^(?:input|select|textarea|button)$/i,
        Vi = /^(?:a|area)$/i;
      r.fn.extend({
        prop: function (e, t) {
          return we(this, r.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[r.propFix[e] || e];
          });
        },
      }),
        r.extend({
          prop: function (e, t, n) {
            var i,
              o,
              u = e.nodeType;
            if (!(u === 3 || u === 8 || u === 2))
              return (
                (u !== 1 || !r.isXMLDoc(e)) &&
                  ((t = r.propFix[t] || t), (o = r.propHooks[t])),
                n !== void 0
                  ? o && "set" in o && (i = o.set(e, n, t)) !== void 0
                    ? i
                    : (e[t] = n)
                  : o && "get" in o && (i = o.get(e, t)) !== null
                  ? i
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = r.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : Ui.test(e.nodeName) || (Vi.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        _.optSelected ||
          (r.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        r.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            r.propFix[this.toLowerCase()] = this;
          }
        );
      function Oe(e) {
        var t = e.match(be) || [];
        return t.join(" ");
      }
      function He(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function Mt(e) {
        return Array.isArray(e)
          ? e
          : typeof e == "string"
          ? e.match(be) || []
          : [];
      }
      r.fn.extend({
        addClass: function (e) {
          var t,
            n,
            i,
            o,
            u,
            a,
            l,
            c = 0;
          if (P(e))
            return this.each(function (p) {
              r(this).addClass(e.call(this, p, He(this)));
            });
          if (((t = Mt(e)), t.length)) {
            for (; (n = this[c++]); )
              if (
                ((o = He(n)), (i = n.nodeType === 1 && " " + Oe(o) + " "), i)
              ) {
                for (a = 0; (u = t[a++]); )
                  i.indexOf(" " + u + " ") < 0 && (i += u + " ");
                (l = Oe(i)), o !== l && n.setAttribute("class", l);
              }
          }
          return this;
        },
        removeClass: function (e) {
          var t,
            n,
            i,
            o,
            u,
            a,
            l,
            c = 0;
          if (P(e))
            return this.each(function (p) {
              r(this).removeClass(e.call(this, p, He(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if (((t = Mt(e)), t.length)) {
            for (; (n = this[c++]); )
              if (
                ((o = He(n)), (i = n.nodeType === 1 && " " + Oe(o) + " "), i)
              ) {
                for (a = 0; (u = t[a++]); )
                  for (; i.indexOf(" " + u + " ") > -1; )
                    i = i.replace(" " + u + " ", " ");
                (l = Oe(i)), o !== l && n.setAttribute("class", l);
              }
          }
          return this;
        },
        toggleClass: function (e, t) {
          var n = typeof e,
            i = n === "string" || Array.isArray(e);
          return typeof t == "boolean" && i
            ? t
              ? this.addClass(e)
              : this.removeClass(e)
            : P(e)
            ? this.each(function (o) {
                r(this).toggleClass(e.call(this, o, He(this), t), t);
              })
            : this.each(function () {
                var o, u, a, l;
                if (i)
                  for (u = 0, a = r(this), l = Mt(e); (o = l[u++]); )
                    a.hasClass(o) ? a.removeClass(o) : a.addClass(o);
                else
                  (e === void 0 || n === "boolean") &&
                    ((o = He(this)),
                    o && k.set(this, "__className__", o),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        o || e === !1 ? "" : k.get(this, "__className__") || ""
                      ));
              });
        },
        hasClass: function (e) {
          var t,
            n,
            i = 0;
          for (t = " " + e + " "; (n = this[i++]); )
            if (n.nodeType === 1 && (" " + Oe(He(n)) + " ").indexOf(t) > -1)
              return !0;
          return !1;
        },
      });
      var Xi = /\r/g;
      r.fn.extend({
        val: function (e) {
          var t,
            n,
            i,
            o = this[0];
          return arguments.length
            ? ((i = P(e)),
              this.each(function (u) {
                var a;
                this.nodeType === 1 &&
                  (i ? (a = e.call(this, u, r(this).val())) : (a = e),
                  a == null
                    ? (a = "")
                    : typeof a == "number"
                    ? (a += "")
                    : Array.isArray(a) &&
                      (a = r.map(a, function (l) {
                        return l == null ? "" : l + "";
                      })),
                  (t =
                    r.valHooks[this.type] ||
                    r.valHooks[this.nodeName.toLowerCase()]),
                  (!t || !("set" in t) || t.set(this, a, "value") === void 0) &&
                    (this.value = a));
              }))
            : o
            ? ((t = r.valHooks[o.type] || r.valHooks[o.nodeName.toLowerCase()]),
              t && "get" in t && (n = t.get(o, "value")) !== void 0
                ? n
                : ((n = o.value),
                  typeof n == "string"
                    ? n.replace(Xi, "")
                    : n == null
                    ? ""
                    : n))
            : void 0;
        },
      }),
        r.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = r.find.attr(e, "value");
                return t != null ? t : Oe(r.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  i,
                  o = e.options,
                  u = e.selectedIndex,
                  a = e.type === "select-one",
                  l = a ? null : [],
                  c = a ? u + 1 : o.length;
                for (u < 0 ? (i = c) : (i = a ? u : 0); i < c; i++)
                  if (
                    ((n = o[i]),
                    (n.selected || i === u) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !ce(n.parentNode, "optgroup")))
                  ) {
                    if (((t = r(n).val()), a)) return t;
                    l.push(t);
                  }
                return l;
              },
              set: function (e, t) {
                for (
                  var n, i, o = e.options, u = r.makeArray(t), a = o.length;
                  a--;

                )
                  (i = o[a]),
                    (i.selected =
                      r.inArray(r.valHooks.option.get(i), u) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), u;
              },
            },
          },
        }),
        r.each(["radio", "checkbox"], function () {
          (r.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = r.inArray(r(e).val(), t) > -1);
            },
          }),
            _.checkOn ||
              (r.valHooks[this].get = function (e) {
                return e.getAttribute("value") === null ? "on" : e.value;
              });
        }),
        (_.focusin = "onfocusin" in S);
      var In = /^(?:focusinfocus|focusoutblur)$/,
        Mn = function (e) {
          e.stopPropagation();
        };
      r.extend(r.event, {
        trigger: function (e, t, n, i) {
          var o,
            u,
            a,
            l,
            c,
            p,
            y,
            x,
            g = [n || M],
            v = pt.call(e, "type") ? e.type : e,
            E = pt.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((u = x = a = n = n || M),
            !(n.nodeType === 3 || n.nodeType === 8) &&
              !In.test(v + r.event.triggered) &&
              (v.indexOf(".") > -1 &&
                ((E = v.split(".")), (v = E.shift()), E.sort()),
              (c = v.indexOf(":") < 0 && "on" + v),
              (e = e[r.expando]
                ? e
                : new r.Event(v, typeof e == "object" && e)),
              (e.isTrigger = i ? 2 : 3),
              (e.namespace = E.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + E.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = n),
              (t = t == null ? [e] : r.makeArray(t, [e])),
              (y = r.event.special[v] || {}),
              !(!i && y.trigger && y.trigger.apply(n, t) === !1)))
          ) {
            if (!i && !y.noBubble && !Fe(n)) {
              for (
                l = y.delegateType || v, In.test(l + v) || (u = u.parentNode);
                u;
                u = u.parentNode
              )
                g.push(u), (a = u);
              a === (n.ownerDocument || M) &&
                g.push(a.defaultView || a.parentWindow || S);
            }
            for (o = 0; (u = g[o++]) && !e.isPropagationStopped(); )
              (x = u),
                (e.type = o > 1 ? l : y.bindType || v),
                (p =
                  (k.get(u, "events") || Object.create(null))[e.type] &&
                  k.get(u, "handle")),
                p && p.apply(u, t),
                (p = c && u[c]),
                p &&
                  p.apply &&
                  Ke(u) &&
                  ((e.result = p.apply(u, t)),
                  e.result === !1 && e.preventDefault());
            return (
              (e.type = v),
              !i &&
                !e.isDefaultPrevented() &&
                (!y._default || y._default.apply(g.pop(), t) === !1) &&
                Ke(n) &&
                c &&
                P(n[v]) &&
                !Fe(n) &&
                ((a = n[c]),
                a && (n[c] = null),
                (r.event.triggered = v),
                e.isPropagationStopped() && x.addEventListener(v, Mn),
                n[v](),
                e.isPropagationStopped() && x.removeEventListener(v, Mn),
                (r.event.triggered = void 0),
                a && (n[c] = a)),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var i = r.extend(new r.Event(), n, { type: e, isSimulated: !0 });
          r.event.trigger(i, null, t);
        },
      }),
        r.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              r.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return r.event.trigger(e, t, n, !0);
          },
        }),
        _.focusin ||
          r.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (i) {
              r.event.simulate(t, i.target, r.event.fix(i));
            };
            r.event.special[t] = {
              setup: function () {
                var i = this.ownerDocument || this.document || this,
                  o = k.access(i, t);
                o || i.addEventListener(e, n, !0), k.access(i, t, (o || 0) + 1);
              },
              teardown: function () {
                var i = this.ownerDocument || this.document || this,
                  o = k.access(i, t) - 1;
                o
                  ? k.access(i, t, o)
                  : (i.removeEventListener(e, n, !0), k.remove(i, t));
              },
            };
          });
      var rt = S.location,
        Rn = { guid: Date.now() },
        Rt = /\?/;
      r.parseXML = function (e) {
        var t, n;
        if (!e || typeof e != "string") return null;
        try {
          t = new S.DOMParser().parseFromString(e, "text/xml");
        } catch {}
        return (
          (n = t && t.getElementsByTagName("parsererror")[0]),
          (!t || n) &&
            r.error(
              "Invalid XML: " +
                (n
                  ? r.map(n.childNodes, function (i) {
                      return i.textContent;
                    }).join(`
`)
                  : e)
            ),
          t
        );
      };
      var Gi = /\[\]$/,
        _n = /\r?\n/g,
        Qi = /^(?:submit|button|image|reset|file)$/i,
        Yi = /^(?:input|select|textarea|keygen)/i;
      function _t(e, t, n, i) {
        var o;
        if (Array.isArray(t))
          r.each(t, function (u, a) {
            n || Gi.test(e)
              ? i(e, a)
              : _t(
                  e + "[" + (typeof a == "object" && a != null ? u : "") + "]",
                  a,
                  n,
                  i
                );
          });
        else if (!n && We(t) === "object")
          for (o in t) _t(e + "[" + o + "]", t[o], n, i);
        else i(e, t);
      }
      (r.param = function (e, t) {
        var n,
          i = [],
          o = function (u, a) {
            var l = P(a) ? a() : a;
            i[i.length] =
              encodeURIComponent(u) +
              "=" +
              encodeURIComponent(l == null ? "" : l);
          };
        if (e == null) return "";
        if (Array.isArray(e) || (e.jquery && !r.isPlainObject(e)))
          r.each(e, function () {
            o(this.name, this.value);
          });
        else for (n in e) _t(n, e[n], t, o);
        return i.join("&");
      }),
        r.fn.extend({
          serialize: function () {
            return r.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = r.prop(this, "elements");
              return e ? r.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !r(this).is(":disabled") &&
                  Yi.test(this.nodeName) &&
                  !Qi.test(e) &&
                  (this.checked || !tt.test(e))
                );
              })
              .map(function (e, t) {
                var n = r(this).val();
                return n == null
                  ? null
                  : Array.isArray(n)
                  ? r.map(n, function (i) {
                      return {
                        name: t.name,
                        value: i.replace(
                          _n,
                          `\r
`
                        ),
                      };
                    })
                  : {
                      name: t.name,
                      value: n.replace(
                        _n,
                        `\r
`
                      ),
                    };
              })
              .get();
          },
        });
      var Ji = /%20/g,
        Ki = /#.*$/,
        Zi = /([?&])_=[^&]*/,
        er = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        tr = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        nr = /^(?:GET|HEAD)$/,
        ir = /^\/\//,
        Fn = {},
        Ft = {},
        Wn = "*/".concat("*"),
        Wt = M.createElement("a");
      Wt.href = rt.href;
      function Bn(e) {
        return function (t, n) {
          typeof t != "string" && ((n = t), (t = "*"));
          var i,
            o = 0,
            u = t.toLowerCase().match(be) || [];
          if (P(n))
            for (; (i = u[o++]); )
              i[0] === "+"
                ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                : (e[i] = e[i] || []).push(n);
        };
      }
      function $n(e, t, n, i) {
        var o = {},
          u = e === Ft;
        function a(l) {
          var c;
          return (
            (o[l] = !0),
            r.each(e[l] || [], function (p, y) {
              var x = y(t, n, i);
              if (typeof x == "string" && !u && !o[x])
                return t.dataTypes.unshift(x), a(x), !1;
              if (u) return !(c = x);
            }),
            c
          );
        }
        return a(t.dataTypes[0]) || (!o["*"] && a("*"));
      }
      function Bt(e, t) {
        var n,
          i,
          o = r.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== void 0 && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && r.extend(!0, e, i), e;
      }
      function rr(e, t, n) {
        for (var i, o, u, a, l = e.contents, c = e.dataTypes; c[0] === "*"; )
          c.shift(),
            i === void 0 &&
              (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) {
          for (o in l)
            if (l[o] && l[o].test(i)) {
              c.unshift(o);
              break;
            }
        }
        if (c[0] in n) u = c[0];
        else {
          for (o in n) {
            if (!c[0] || e.converters[o + " " + c[0]]) {
              u = o;
              break;
            }
            a || (a = o);
          }
          u = u || a;
        }
        if (u) return u !== c[0] && c.unshift(u), n[u];
      }
      function or(e, t, n, i) {
        var o,
          u,
          a,
          l,
          c,
          p = {},
          y = e.dataTypes.slice();
        if (y[1]) for (a in e.converters) p[a.toLowerCase()] = e.converters[a];
        for (u = y.shift(); u; )
          if (
            (e.responseFields[u] && (n[e.responseFields[u]] = t),
            !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            (c = u),
            (u = y.shift()),
            u)
          ) {
            if (u === "*") u = c;
            else if (c !== "*" && c !== u) {
              if (((a = p[c + " " + u] || p["* " + u]), !a)) {
                for (o in p)
                  if (
                    ((l = o.split(" ")),
                    l[1] === u &&
                      ((a = p[c + " " + l[0]] || p["* " + l[0]]), a))
                  ) {
                    a === !0
                      ? (a = p[o])
                      : p[o] !== !0 && ((u = l[0]), y.unshift(l[1]));
                    break;
                  }
              }
              if (a !== !0)
                if (a && e.throws) t = a(t);
                else
                  try {
                    t = a(t);
                  } catch (x) {
                    return {
                      state: "parsererror",
                      error: a ? x : "No conversion from " + c + " to " + u,
                    };
                  }
            }
          }
        return { state: "success", data: t };
      }
      r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: rt.href,
          type: "GET",
          isLocal: tr.test(rt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Wn,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": r.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? Bt(Bt(e, r.ajaxSettings), t) : Bt(r.ajaxSettings, e);
        },
        ajaxPrefilter: Bn(Fn),
        ajaxTransport: Bn(Ft),
        ajax: function (e, t) {
          typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
          var n,
            i,
            o,
            u,
            a,
            l,
            c,
            p,
            y,
            x,
            g = r.ajaxSetup({}, t),
            v = g.context || g,
            E = g.context && (v.nodeType || v.jquery) ? r(v) : r.event,
            H = r.Deferred(),
            N = r.Callbacks("once memory"),
            Q = g.statusCode || {},
            G = {},
            ae = {},
            W = "canceled",
            O = {
              readyState: 0,
              getResponseHeader: function (R) {
                var X;
                if (c) {
                  if (!u)
                    for (u = {}; (X = er.exec(o)); )
                      u[X[1].toLowerCase() + " "] = (
                        u[X[1].toLowerCase() + " "] || []
                      ).concat(X[2]);
                  X = u[R.toLowerCase() + " "];
                }
                return X == null ? null : X.join(", ");
              },
              getAllResponseHeaders: function () {
                return c ? o : null;
              },
              setRequestHeader: function (R, X) {
                return (
                  c == null &&
                    ((R = ae[R.toLowerCase()] = ae[R.toLowerCase()] || R),
                    (G[R] = X)),
                  this
                );
              },
              overrideMimeType: function (R) {
                return c == null && (g.mimeType = R), this;
              },
              statusCode: function (R) {
                var X;
                if (R)
                  if (c) O.always(R[O.status]);
                  else for (X in R) Q[X] = [Q[X], R[X]];
                return this;
              },
              abort: function (R) {
                var X = R || W;
                return n && n.abort(X), re(0, X), this;
              },
            };
          if (
            (H.promise(O),
            (g.url = ((e || g.url || rt.href) + "").replace(
              ir,
              rt.protocol + "//"
            )),
            (g.type = t.method || t.type || g.method || g.type),
            (g.dataTypes = (g.dataType || "*").toLowerCase().match(be) || [""]),
            g.crossDomain == null)
          ) {
            l = M.createElement("a");
            try {
              (l.href = g.url),
                (l.href = l.href),
                (g.crossDomain =
                  Wt.protocol + "//" + Wt.host != l.protocol + "//" + l.host);
            } catch {
              g.crossDomain = !0;
            }
          }
          if (
            (g.data &&
              g.processData &&
              typeof g.data != "string" &&
              (g.data = r.param(g.data, g.traditional)),
            $n(Fn, g, t, O),
            c)
          )
            return O;
          (p = r.event && g.global),
            p && r.active++ === 0 && r.event.trigger("ajaxStart"),
            (g.type = g.type.toUpperCase()),
            (g.hasContent = !nr.test(g.type)),
            (i = g.url.replace(Ki, "")),
            g.hasContent
              ? g.data &&
                g.processData &&
                (g.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) === 0 &&
                (g.data = g.data.replace(Ji, "+"))
              : ((x = g.url.slice(i.length)),
                g.data &&
                  (g.processData || typeof g.data == "string") &&
                  ((i += (Rt.test(i) ? "&" : "?") + g.data), delete g.data),
                g.cache === !1 &&
                  ((i = i.replace(Zi, "$1")),
                  (x = (Rt.test(i) ? "&" : "?") + "_=" + Rn.guid++ + x)),
                (g.url = i + x)),
            g.ifModified &&
              (r.lastModified[i] &&
                O.setRequestHeader("If-Modified-Since", r.lastModified[i]),
              r.etag[i] && O.setRequestHeader("If-None-Match", r.etag[i])),
            ((g.data && g.hasContent && g.contentType !== !1) ||
              t.contentType) &&
              O.setRequestHeader("Content-Type", g.contentType),
            O.setRequestHeader(
              "Accept",
              g.dataTypes[0] && g.accepts[g.dataTypes[0]]
                ? g.accepts[g.dataTypes[0]] +
                    (g.dataTypes[0] !== "*" ? ", " + Wn + "; q=0.01" : "")
                : g.accepts["*"]
            );
          for (y in g.headers) O.setRequestHeader(y, g.headers[y]);
          if (g.beforeSend && (g.beforeSend.call(v, O, g) === !1 || c))
            return O.abort();
          if (
            ((W = "abort"),
            N.add(g.complete),
            O.done(g.success),
            O.fail(g.error),
            (n = $n(Ft, g, t, O)),
            !n)
          )
            re(-1, "No Transport");
          else {
            if (((O.readyState = 1), p && E.trigger("ajaxSend", [O, g]), c))
              return O;
            g.async &&
              g.timeout > 0 &&
              (a = S.setTimeout(function () {
                O.abort("timeout");
              }, g.timeout));
            try {
              (c = !1), n.send(G, re);
            } catch (R) {
              if (c) throw R;
              re(-1, R);
            }
          }
          function re(R, X, ut, Tt) {
            var se,
              Pe,
              Ie,
              oe,
              Ae,
              pe = X;
            c ||
              ((c = !0),
              a && S.clearTimeout(a),
              (n = void 0),
              (o = Tt || ""),
              (O.readyState = R > 0 ? 4 : 0),
              (se = (R >= 200 && R < 300) || R === 304),
              ut && (oe = rr(g, O, ut)),
              !se &&
                r.inArray("script", g.dataTypes) > -1 &&
                r.inArray("json", g.dataTypes) < 0 &&
                (g.converters["text script"] = function () {}),
              (oe = or(g, oe, O, se)),
              se
                ? (g.ifModified &&
                    ((Ae = O.getResponseHeader("Last-Modified")),
                    Ae && (r.lastModified[i] = Ae),
                    (Ae = O.getResponseHeader("etag")),
                    Ae && (r.etag[i] = Ae)),
                  R === 204 || g.type === "HEAD"
                    ? (pe = "nocontent")
                    : R === 304
                    ? (pe = "notmodified")
                    : ((pe = oe.state),
                      (Pe = oe.data),
                      (Ie = oe.error),
                      (se = !Ie)))
                : ((Ie = pe), (R || !pe) && ((pe = "error"), R < 0 && (R = 0))),
              (O.status = R),
              (O.statusText = (X || pe) + ""),
              se ? H.resolveWith(v, [Pe, pe, O]) : H.rejectWith(v, [O, pe, Ie]),
              O.statusCode(Q),
              (Q = void 0),
              p &&
                E.trigger(se ? "ajaxSuccess" : "ajaxError", [
                  O,
                  g,
                  se ? Pe : Ie,
                ]),
              N.fireWith(v, [O, pe]),
              p &&
                (E.trigger("ajaxComplete", [O, g]),
                --r.active || r.event.trigger("ajaxStop")));
          }
          return O;
        },
        getJSON: function (e, t, n) {
          return r.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return r.get(e, void 0, t, "script");
        },
      }),
        r.each(["get", "post"], function (e, t) {
          r[t] = function (n, i, o, u) {
            return (
              P(i) && ((u = u || o), (o = i), (i = void 0)),
              r.ajax(
                r.extend(
                  { url: n, type: t, dataType: u, data: i, success: o },
                  r.isPlainObject(n) && n
                )
              )
            );
          };
        }),
        r.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            t.toLowerCase() === "content-type" &&
              (e.contentType = e.headers[t] || "");
        }),
        (r._evalUrl = function (e, t, n) {
          return r.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (i) {
              r.globalEval(i, t, n);
            },
          });
        }),
        r.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (P(e) && (e = e.call(this[0])),
                (t = r(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var n = this; n.firstElementChild; )
                      n = n.firstElementChild;
                    return n;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return P(e)
              ? this.each(function (t) {
                  r(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = r(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = P(e);
            return this.each(function (n) {
              r(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  r(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (r.expr.pseudos.hidden = function (e) {
          return !r.expr.pseudos.visible(e);
        }),
        (r.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (r.ajaxSettings.xhr = function () {
          try {
            return new S.XMLHttpRequest();
          } catch {}
        });
      var ur = { 0: 200, 1223: 204 },
        ot = r.ajaxSettings.xhr();
      (_.cors = !!ot && "withCredentials" in ot),
        (_.ajax = ot = !!ot),
        r.ajaxTransport(function (e) {
          var t, n;
          if (_.cors || (ot && !e.crossDomain))
            return {
              send: function (i, o) {
                var u,
                  a = e.xhr();
                if (
                  (a.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (u in e.xhrFields) a[u] = e.xhrFields[u];
                e.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(e.mimeType),
                  !e.crossDomain &&
                    !i["X-Requested-With"] &&
                    (i["X-Requested-With"] = "XMLHttpRequest");
                for (u in i) a.setRequestHeader(u, i[u]);
                (t = function (l) {
                  return function () {
                    t &&
                      ((t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                      l === "abort"
                        ? a.abort()
                        : l === "error"
                        ? typeof a.status != "number"
                          ? o(0, "error")
                          : o(a.status, a.statusText)
                        : o(
                            ur[a.status] || a.status,
                            a.statusText,
                            (a.responseType || "text") !== "text" ||
                              typeof a.responseText != "string"
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = t()),
                  (n = a.onerror = a.ontimeout = t("error")),
                  a.onabort !== void 0
                    ? (a.onabort = n)
                    : (a.onreadystatechange = function () {
                        a.readyState === 4 &&
                          S.setTimeout(function () {
                            t && n();
                          });
                      }),
                  (t = t("abort"));
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (l) {
                  if (t) throw l;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        r.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        r.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return r.globalEval(e), e;
            },
          },
        }),
        r.ajaxPrefilter("script", function (e) {
          e.cache === void 0 && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        r.ajaxTransport("script", function (e) {
          if (e.crossDomain || e.scriptAttrs) {
            var t, n;
            return {
              send: function (i, o) {
                (t = r("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (u) {
                      t.remove(),
                        (n = null),
                        u && o(u.type === "error" ? 404 : 200, u.type);
                    })
                  )),
                  M.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
          }
        });
      var zn = [],
        $t = /(=)\?(?=&|$)|\?\?/;
      r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = zn.pop() || r.expando + "_" + Rn.guid++;
          return (this[e] = !0), e;
        },
      }),
        r.ajaxPrefilter("json jsonp", function (e, t, n) {
          var i,
            o,
            u,
            a =
              e.jsonp !== !1 &&
              ($t.test(e.url)
                ? "url"
                : typeof e.data == "string" &&
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) === 0 &&
                  $t.test(e.data) &&
                  "data");
          if (a || e.dataTypes[0] === "jsonp")
            return (
              (i = e.jsonpCallback = P(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace($t, "$1" + i))
                : e.jsonp !== !1 &&
                  (e.url += (Rt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
              (e.converters["script json"] = function () {
                return u || r.error(i + " was not called"), u[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = S[i]),
              (S[i] = function () {
                u = arguments;
              }),
              n.always(function () {
                o === void 0 ? r(S).removeProp(i) : (S[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), zn.push(i)),
                  u && P(o) && o(u[0]),
                  (u = o = void 0);
              }),
              "script"
            );
        }),
        (_.createHTMLDocument = (function () {
          var e = M.implementation.createHTMLDocument("").body;
          return (
            (e.innerHTML = "<form></form><form></form>"),
            e.childNodes.length === 2
          );
        })()),
        (r.parseHTML = function (e, t, n) {
          if (typeof e != "string") return [];
          typeof t == "boolean" && ((n = t), (t = !1));
          var i, o, u;
          return (
            t ||
              (_.createHTMLDocument
                ? ((t = M.implementation.createHTMLDocument("")),
                  (i = t.createElement("base")),
                  (i.href = M.location.href),
                  t.head.appendChild(i))
                : (t = M)),
            (o = fn.exec(e)),
            (u = !n && []),
            o
              ? [t.createElement(o[1])]
              : ((o = bn([e], t, u)),
                u && u.length && r(u).remove(),
                r.merge([], o.childNodes))
          );
        }),
        (r.fn.load = function (e, t, n) {
          var i,
            o,
            u,
            a = this,
            l = e.indexOf(" ");
          return (
            l > -1 && ((i = Oe(e.slice(l))), (e = e.slice(0, l))),
            P(t)
              ? ((n = t), (t = void 0))
              : t && typeof t == "object" && (o = "POST"),
            a.length > 0 &&
              r
                .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                .done(function (c) {
                  (u = arguments),
                    a.html(i ? r("<div>").append(r.parseHTML(c)).find(i) : c);
                })
                .always(
                  n &&
                    function (c, p) {
                      a.each(function () {
                        n.apply(this, u || [c.responseText, p, c]);
                      });
                    }
                ),
            this
          );
        }),
        (r.expr.pseudos.animated = function (e) {
          return r.grep(r.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (r.offset = {
          setOffset: function (e, t, n) {
            var i,
              o,
              u,
              a,
              l,
              c,
              p,
              y = r.css(e, "position"),
              x = r(e),
              g = {};
            y === "static" && (e.style.position = "relative"),
              (l = x.offset()),
              (u = r.css(e, "top")),
              (c = r.css(e, "left")),
              (p =
                (y === "absolute" || y === "fixed") &&
                (u + c).indexOf("auto") > -1),
              p
                ? ((i = x.position()), (a = i.top), (o = i.left))
                : ((a = parseFloat(u) || 0), (o = parseFloat(c) || 0)),
              P(t) && (t = t.call(e, n, r.extend({}, l))),
              t.top != null && (g.top = t.top - l.top + a),
              t.left != null && (g.left = t.left - l.left + o),
              "using" in t ? t.using.call(e, g) : x.css(g);
          },
        }),
        r.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return e === void 0
                ? this
                : this.each(function (o) {
                    r.offset.setOffset(this, e, o);
                  });
            var t,
              n,
              i = this[0];
            if (!!i)
              return i.getClientRects().length
                ? ((t = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 };
          },
          position: function () {
            if (!!this[0]) {
              var e,
                t,
                n,
                i = this[0],
                o = { top: 0, left: 0 };
              if (r.css(i, "position") === "fixed")
                t = i.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  r.css(e, "position") === "static";

                )
                  e = e.parentNode;
                e &&
                  e !== i &&
                  e.nodeType === 1 &&
                  ((o = r(e).offset()),
                  (o.top += r.css(e, "borderTopWidth", !0)),
                  (o.left += r.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - o.top - r.css(i, "marginTop", !0),
                left: t.left - o.left - r.css(i, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && r.css(e, "position") === "static";

              )
                e = e.offsetParent;
              return e || Le;
            });
          },
        }),
        r.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = t === "pageYOffset";
            r.fn[e] = function (i) {
              return we(
                this,
                function (o, u, a) {
                  var l;
                  if (
                    (Fe(o) ? (l = o) : o.nodeType === 9 && (l = o.defaultView),
                    a === void 0)
                  )
                    return l ? l[t] : o[u];
                  l
                    ? l.scrollTo(n ? l.pageXOffset : a, n ? a : l.pageYOffset)
                    : (o[u] = a);
                },
                e,
                i,
                arguments.length
              );
            };
          }
        ),
        r.each(["top", "left"], function (e, t) {
          r.cssHooks[t] = En(_.pixelPosition, function (n, i) {
            if (i)
              return (i = nt(n, t)), Ot.test(i) ? r(n).position()[t] + "px" : i;
          });
        }),
        r.each({ Height: "height", Width: "width" }, function (e, t) {
          r.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, i) {
              r.fn[i] = function (o, u) {
                var a = arguments.length && (n || typeof o != "boolean"),
                  l = n || (o === !0 || u === !0 ? "margin" : "border");
                return we(
                  this,
                  function (c, p, y) {
                    var x;
                    return Fe(c)
                      ? i.indexOf("outer") === 0
                        ? c["inner" + e]
                        : c.document.documentElement["client" + e]
                      : c.nodeType === 9
                      ? ((x = c.documentElement),
                        Math.max(
                          c.body["scroll" + e],
                          x["scroll" + e],
                          c.body["offset" + e],
                          x["offset" + e],
                          x["client" + e]
                        ))
                      : y === void 0
                      ? r.css(c, p, l)
                      : r.style(c, p, y, l);
                  },
                  t,
                  a ? o : void 0,
                  a
                );
              };
            }
          );
        }),
        r.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            r.fn[t] = function (n) {
              return this.on(t, n);
            };
          }
        ),
        r.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function (e, t, n) {
            return arguments.length === 1
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        r.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            r.fn[t] = function (n, i) {
              return arguments.length > 0
                ? this.on(t, null, n, i)
                : this.trigger(t);
            };
          }
        );
      var ar = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (r.proxy = function (e, t) {
        var n, i, o;
        if ((typeof t == "string" && ((n = e[t]), (t = e), (e = n)), !!P(e)))
          return (
            (i = ge.call(arguments, 2)),
            (o = function () {
              return e.apply(t || this, i.concat(ge.call(arguments)));
            }),
            (o.guid = e.guid = e.guid || r.guid++),
            o
          );
      }),
        (r.holdReady = function (e) {
          e ? r.readyWait++ : r.ready(!0);
        }),
        (r.isArray = Array.isArray),
        (r.parseJSON = JSON.parse),
        (r.nodeName = ce),
        (r.isFunction = P),
        (r.isWindow = Fe),
        (r.camelCase = xe),
        (r.type = We),
        (r.now = Date.now),
        (r.isNumeric = function (e) {
          var t = r.type(e);
          return (
            (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
          );
        }),
        (r.trim = function (e) {
          return e == null ? "" : (e + "").replace(ar, "");
        });
      var sr = S.jQuery,
        fr = S.$;
      return (
        (r.noConflict = function (e) {
          return (
            S.$ === r && (S.$ = fr), e && S.jQuery === r && (S.jQuery = sr), r
          );
        }),
        typeof z == "undefined" && (S.jQuery = S.$ = r),
        r
      );
    });
  })(ue);
  var he = ue.exports;
  const ii = ["", "left-right", "right-left", "bottom-top", "top-bottom"],
    ct = {
      duration: 2e3,
      slide: "",
      distance: 500,
      adjustment: { top: 0, left: 0 },
    },
    ri = (L, S) => {
      const z = { top: 0, left: 0 };
      return (
        L.slide === "left-right"
          ? ((z.top = S.top), (z.left = S.left - L.distance))
          : L.slide === "right-left"
          ? ((z.top = S.top), (z.left = S.left + L.distance))
          : L.slide === "bottom-top"
          ? ((z.top = S.top + L.distance), (z.left = S.left))
          : L.slide === "top-bottom" &&
            ((z.top = S.top - L.distance), (z.left = S.left)),
        z
      );
    },
    Ye = "[jqFuwatto] Option Parameter error",
    oi = "[jqFuwatto] Option Parameter warning",
    dt = (L) => typeof L == "number" && isFinite(L),
    ui = (L) => ii.includes(L),
    ai = ({
      duration: L,
      distance: S,
      slide: z,
      adjustment: { top: U, left: ee },
    }) =>
      !dt(L) && L < 0
        ? `${Ye} [duration]`
        : !dt(S) && S < 0
        ? `${Ye} [distance]`
        : dt(U)
        ? dt(ee)
          ? ui(z)
            ? ""
            : `${Ye} [slide]`
          : `${Ye} [left]`
        : `${Ye} [top]`,
    si = ({ height: L }) =>
      L === 0 ? `${oi} [Set height is recommended]` : "";
  let Je = [],
    Kt = window.innerHeight;
  const fi = ({ elem: L, options: S }) => {
      L.hide().fadeIn(S.duration);
    },
    li = ({ elem: L, clone: S, options: z, originalInfo: U }) => {
      S &&
        (he("body").css({ "overflow-x": "hidden" }),
        S.hide()
          .fadeIn(z.duration)
          .animate(
            { top: U.top, left: U.left },
            { duration: z.duration, queue: !1 }
          )),
        setTimeout(() => {
          L.css({ visibility: "visible" }),
            S == null || S.remove(),
            he("body").css({ "overflow-x": "auto" });
        }, z.duration);
    },
    Zt = () => {
      Je.length || he(window).off();
      const L = window.pageYOffset || document.documentElement.scrollTop,
        S = Kt + L,
        z = Je.filter(({ positionToShow: U }) => S > U);
      z.length &&
        z.forEach((U) => {
          U.side ? li(U) : fi(U), (Je = Je.filter(({ id: ee }) => ee !== U.id));
        });
    },
    ci = Object.assign(function (L = ct) {
      const S = lt(lt({}, ct.adjustment), L.adjustment);
      L = ni(lt(lt({}, ct), L), { adjustment: S });
      const z = ai(L);
      return z
        ? (console.error(z), this)
        : (this.each((U, ee) => {
            let ge = null;
            const Ne = he(ee).offset(),
              Te = { height: he(ee).height(), width: he(ee).width() },
              je = si(Te);
            if ((je && (console.warn(ee), console.warn(je)), L.slide)) {
              const ke = ri(L, Ne);
              (ge = he(ee)
                .clone(!0, !1)
                .appendTo("body")
                .css({
                  display: "none",
                  position: "absolute",
                  top: ke.top + L.adjustment.top,
                  left: ke.left + L.adjustment.left,
                  width: Te.width,
                  height: Te.height,
                })),
                he(ee).css({ visibility: "hidden" });
            }
            Je.push({
              id: Math.random(),
              positionToShow: Ne.top,
              elem: he(ee),
              options: L,
              originalInfo: {
                top: Ne.top + L.adjustment.top,
                left: Ne.left + L.adjustment.left,
                height: Te.height,
                width: Te.width,
              },
              clone: ge,
              side: !!L.slide,
            }),
              console.log(Ne);
          }),
          Zt(),
          this);
    }, ct);
  he(window).on("resize", () => (Kt = window.innerHeight)),
    he(window).on("scroll", Zt),
    (function (L) {
      L.fn.fuwatto = ci;
    })(jQuery);
});
//# sourceMappingURL=jqFuwatto.umd.js.map