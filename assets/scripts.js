(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const b of document.querySelectorAll('link[rel="modulepreload"]')) r(b);
  new MutationObserver((b) => {
    for (const m of b)
      if (m.type === "childList")
        for (const D of m.addedNodes)
          D.tagName === "LINK" && D.rel === "modulepreload" && r(D);
  }).observe(document, { childList: !0, subtree: !0 });
  function v(b) {
    const m = {};
    return (
      b.integrity && (m.integrity = b.integrity),
      b.referrerPolicy && (m.referrerPolicy = b.referrerPolicy),
      b.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : b.crossOrigin === "anonymous"
        ? (m.credentials = "omit")
        : (m.credentials = "same-origin"),
      m
    );
  }
  function r(b) {
    if (b.ep) return;
    b.ep = !0;
    const m = v(b);
    fetch(b.href, m);
  }
})();
function Md(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default")
    ? E.default
    : E;
}
var Pf = { exports: {} },
  Ae = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jo;
function Dd() {
  if (Jo) return Ae;
  Jo = 1;
  var E = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.fragment");
  function v(r, b, m) {
    var D = null;
    if (
      (m !== void 0 && (D = "" + m),
      b.key !== void 0 && (D = "" + b.key),
      "key" in b)
    ) {
      m = {};
      for (var N in b) N !== "key" && (m[N] = b[N]);
    } else m = b;
    return (
      (b = m.ref),
      { $$typeof: E, type: r, key: D, ref: b !== void 0 ? b : null, props: m }
    );
  }
  return (Ae.Fragment = s), (Ae.jsx = v), (Ae.jsxs = v), Ae;
}
var Wo;
function pd() {
  return Wo || ((Wo = 1), (Pf.exports = Dd())), Pf.exports;
}
var ll = pd(),
  If = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $o;
function Rd() {
  if ($o) return V;
  $o = 1;
  var E = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.portal"),
    v = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    b = Symbol.for("react.profiler"),
    m = Symbol.for("react.consumer"),
    D = Symbol.for("react.context"),
    N = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    O = Symbol.for("react.memo"),
    Q = Symbol.for("react.lazy"),
    al = Symbol.iterator;
  function el(o) {
    return o === null || typeof o != "object"
      ? null
      : ((o = (al && o[al]) || o["@@iterator"]),
        typeof o == "function" ? o : null);
  }
  var ol = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ml = Object.assign,
    Dl = {};
  function ql(o, M, C) {
    (this.props = o),
      (this.context = M),
      (this.refs = Dl),
      (this.updater = C || ol);
  }
  (ql.prototype.isReactComponent = {}),
    (ql.prototype.setState = function (o, M) {
      if (typeof o != "object" && typeof o != "function" && o != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, o, M, "setState");
    }),
    (ql.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, "forceUpdate");
    });
  function pl() {}
  pl.prototype = ql.prototype;
  function bl(o, M, C) {
    (this.props = o),
      (this.context = M),
      (this.refs = Dl),
      (this.updater = C || ol);
  }
  var Wl = (bl.prototype = new pl());
  (Wl.constructor = bl), Ml(Wl, ql.prototype), (Wl.isPureReactComponent = !0);
  var mt = Array.isArray,
    $ = { H: null, A: null, T: null, S: null },
    Vl = Object.prototype.hasOwnProperty;
  function $t(o, M, C, x, U, k) {
    return (
      (C = k.ref),
      { $$typeof: E, type: o, key: M, ref: C !== void 0 ? C : null, props: k }
    );
  }
  function kt(o, M) {
    return $t(o.type, M, void 0, void 0, void 0, o.props);
  }
  function G(o) {
    return typeof o == "object" && o !== null && o.$$typeof === E;
  }
  function tl(o) {
    var M = { "=": "=0", ":": "=2" };
    return (
      "$" +
      o.replace(/[=:]/g, function (C) {
        return M[C];
      })
    );
  }
  var ut = /\/+/g;
  function Ut(o, M) {
    return typeof o == "object" && o !== null && o.key != null
      ? tl("" + o.key)
      : M.toString(36);
  }
  function Tt() {}
  function Ht(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (
          (typeof o.status == "string"
            ? o.then(Tt, Tt)
            : ((o.status = "pending"),
              o.then(
                function (M) {
                  o.status === "pending" &&
                    ((o.status = "fulfilled"), (o.value = M));
                },
                function (M) {
                  o.status === "pending" &&
                    ((o.status = "rejected"), (o.reason = M));
                }
              )),
          o.status)
        ) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function Ll(o, M, C, x, U) {
    var k = typeof o;
    (k === "undefined" || k === "boolean") && (o = null);
    var L = !1;
    if (o === null) L = !0;
    else
      switch (k) {
        case "bigint":
        case "string":
        case "number":
          L = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case E:
            case s:
              L = !0;
              break;
            case Q:
              return (L = o._init), Ll(L(o._payload), M, C, x, U);
          }
      }
    if (L)
      return (
        (U = U(o)),
        (L = x === "" ? "." + Ut(o, 0) : x),
        mt(U)
          ? ((C = ""),
            L != null && (C = L.replace(ut, "$&/") + "/"),
            Ll(U, M, C, "", function (El) {
              return El;
            }))
          : U != null &&
            (G(U) &&
              (U = kt(
                U,
                C +
                  (U.key == null || (o && o.key === U.key)
                    ? ""
                    : ("" + U.key).replace(ut, "$&/") + "/") +
                  L
              )),
            M.push(U)),
        1
      );
    L = 0;
    var Ql = x === "" ? "." : x + ":";
    if (mt(o))
      for (var ul = 0; ul < o.length; ul++)
        (x = o[ul]), (k = Ql + Ut(x, ul)), (L += Ll(x, M, C, k, U));
    else if (((ul = el(o)), typeof ul == "function"))
      for (o = ul.call(o), ul = 0; !(x = o.next()).done; )
        (x = x.value), (k = Ql + Ut(x, ul++)), (L += Ll(x, M, C, k, U));
    else if (k === "object") {
      if (typeof o.then == "function") return Ll(Ht(o), M, C, x, U);
      throw (
        ((M = String(o)),
        Error(
          "Objects are not valid as a React child (found: " +
            (M === "[object Object]"
              ? "object with keys {" + Object.keys(o).join(", ") + "}"
              : M) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return L;
  }
  function R(o, M, C) {
    if (o == null) return o;
    var x = [],
      U = 0;
    return (
      Ll(o, x, "", "", function (k) {
        return M.call(C, k, U++);
      }),
      x
    );
  }
  function Z(o) {
    if (o._status === -1) {
      var M = o._result;
      (M = M()),
        M.then(
          function (C) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 1), (o._result = C));
          },
          function (C) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 2), (o._result = C));
          }
        ),
        o._status === -1 && ((o._status = 0), (o._result = M));
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var j =
    typeof reportError == "function"
      ? reportError
      : function (o) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var M = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof o == "object" &&
                o !== null &&
                typeof o.message == "string"
                  ? String(o.message)
                  : String(o),
              error: o,
            });
            if (!window.dispatchEvent(M)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", o);
            return;
          }
          console.error(o);
        };
  function cl() {}
  return (
    (V.Children = {
      map: R,
      forEach: function (o, M, C) {
        R(
          o,
          function () {
            M.apply(this, arguments);
          },
          C
        );
      },
      count: function (o) {
        var M = 0;
        return (
          R(o, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (o) {
        return (
          R(o, function (M) {
            return M;
          }) || []
        );
      },
      only: function (o) {
        if (!G(o))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return o;
      },
    }),
    (V.Component = ql),
    (V.Fragment = v),
    (V.Profiler = b),
    (V.PureComponent = bl),
    (V.StrictMode = r),
    (V.Suspense = p),
    (V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $),
    (V.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (V.cache = function (o) {
      return function () {
        return o.apply(null, arguments);
      };
    }),
    (V.cloneElement = function (o, M, C) {
      if (o == null)
        throw Error(
          "The argument must be a React element, but you passed " + o + "."
        );
      var x = Ml({}, o.props),
        U = o.key,
        k = void 0;
      if (M != null)
        for (L in (M.ref !== void 0 && (k = void 0),
        M.key !== void 0 && (U = "" + M.key),
        M))
          !Vl.call(M, L) ||
            L === "key" ||
            L === "__self" ||
            L === "__source" ||
            (L === "ref" && M.ref === void 0) ||
            (x[L] = M[L]);
      var L = arguments.length - 2;
      if (L === 1) x.children = C;
      else if (1 < L) {
        for (var Ql = Array(L), ul = 0; ul < L; ul++)
          Ql[ul] = arguments[ul + 2];
        x.children = Ql;
      }
      return $t(o.type, U, void 0, void 0, k, x);
    }),
    (V.createContext = function (o) {
      return (
        (o = {
          $$typeof: D,
          _currentValue: o,
          _currentValue2: o,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (o.Provider = o),
        (o.Consumer = { $$typeof: m, _context: o }),
        o
      );
    }),
    (V.createElement = function (o, M, C) {
      var x,
        U = {},
        k = null;
      if (M != null)
        for (x in (M.key !== void 0 && (k = "" + M.key), M))
          Vl.call(M, x) &&
            x !== "key" &&
            x !== "__self" &&
            x !== "__source" &&
            (U[x] = M[x]);
      var L = arguments.length - 2;
      if (L === 1) U.children = C;
      else if (1 < L) {
        for (var Ql = Array(L), ul = 0; ul < L; ul++)
          Ql[ul] = arguments[ul + 2];
        U.children = Ql;
      }
      if (o && o.defaultProps)
        for (x in ((L = o.defaultProps), L)) U[x] === void 0 && (U[x] = L[x]);
      return $t(o, k, void 0, void 0, null, U);
    }),
    (V.createRef = function () {
      return { current: null };
    }),
    (V.forwardRef = function (o) {
      return { $$typeof: N, render: o };
    }),
    (V.isValidElement = G),
    (V.lazy = function (o) {
      return { $$typeof: Q, _payload: { _status: -1, _result: o }, _init: Z };
    }),
    (V.memo = function (o, M) {
      return { $$typeof: O, type: o, compare: M === void 0 ? null : M };
    }),
    (V.startTransition = function (o) {
      var M = $.T,
        C = {};
      $.T = C;
      try {
        var x = o(),
          U = $.S;
        U !== null && U(C, x),
          typeof x == "object" &&
            x !== null &&
            typeof x.then == "function" &&
            x.then(cl, j);
      } catch (k) {
        j(k);
      } finally {
        $.T = M;
      }
    }),
    (V.unstable_useCacheRefresh = function () {
      return $.H.useCacheRefresh();
    }),
    (V.use = function (o) {
      return $.H.use(o);
    }),
    (V.useActionState = function (o, M, C) {
      return $.H.useActionState(o, M, C);
    }),
    (V.useCallback = function (o, M) {
      return $.H.useCallback(o, M);
    }),
    (V.useContext = function (o) {
      return $.H.useContext(o);
    }),
    (V.useDebugValue = function () {}),
    (V.useDeferredValue = function (o, M) {
      return $.H.useDeferredValue(o, M);
    }),
    (V.useEffect = function (o, M) {
      return $.H.useEffect(o, M);
    }),
    (V.useId = function () {
      return $.H.useId();
    }),
    (V.useImperativeHandle = function (o, M, C) {
      return $.H.useImperativeHandle(o, M, C);
    }),
    (V.useInsertionEffect = function (o, M) {
      return $.H.useInsertionEffect(o, M);
    }),
    (V.useLayoutEffect = function (o, M) {
      return $.H.useLayoutEffect(o, M);
    }),
    (V.useMemo = function (o, M) {
      return $.H.useMemo(o, M);
    }),
    (V.useOptimistic = function (o, M) {
      return $.H.useOptimistic(o, M);
    }),
    (V.useReducer = function (o, M, C) {
      return $.H.useReducer(o, M, C);
    }),
    (V.useRef = function (o) {
      return $.H.useRef(o);
    }),
    (V.useState = function (o) {
      return $.H.useState(o);
    }),
    (V.useSyncExternalStore = function (o, M, C) {
      return $.H.useSyncExternalStore(o, M, C);
    }),
    (V.useTransition = function () {
      return $.H.useTransition();
    }),
    (V.version = "19.0.0"),
    V
  );
}
var ko;
function fc() {
  return ko || ((ko = 1), (If.exports = Rd())), If.exports;
}
var Rt = fc();
const Xn = Md(Rt);
var lc = { exports: {} },
  Oe = {},
  tc = { exports: {} },
  ac = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fo;
function Ud() {
  return (
    Fo ||
      ((Fo = 1),
      (function (E) {
        function s(R, Z) {
          var j = R.length;
          R.push(Z);
          l: for (; 0 < j; ) {
            var cl = (j - 1) >>> 1,
              o = R[cl];
            if (0 < b(o, Z)) (R[cl] = Z), (R[j] = o), (j = cl);
            else break l;
          }
        }
        function v(R) {
          return R.length === 0 ? null : R[0];
        }
        function r(R) {
          if (R.length === 0) return null;
          var Z = R[0],
            j = R.pop();
          if (j !== Z) {
            R[0] = j;
            l: for (var cl = 0, o = R.length, M = o >>> 1; cl < M; ) {
              var C = 2 * (cl + 1) - 1,
                x = R[C],
                U = C + 1,
                k = R[U];
              if (0 > b(x, j))
                U < o && 0 > b(k, x)
                  ? ((R[cl] = k), (R[U] = j), (cl = U))
                  : ((R[cl] = x), (R[C] = j), (cl = C));
              else if (U < o && 0 > b(k, j)) (R[cl] = k), (R[U] = j), (cl = U);
              else break l;
            }
          }
          return Z;
        }
        function b(R, Z) {
          var j = R.sortIndex - Z.sortIndex;
          return j !== 0 ? j : R.id - Z.id;
        }
        if (
          ((E.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var m = performance;
          E.unstable_now = function () {
            return m.now();
          };
        } else {
          var D = Date,
            N = D.now();
          E.unstable_now = function () {
            return D.now() - N;
          };
        }
        var p = [],
          O = [],
          Q = 1,
          al = null,
          el = 3,
          ol = !1,
          Ml = !1,
          Dl = !1,
          ql = typeof setTimeout == "function" ? setTimeout : null,
          pl = typeof clearTimeout == "function" ? clearTimeout : null,
          bl = typeof setImmediate < "u" ? setImmediate : null;
        function Wl(R) {
          for (var Z = v(O); Z !== null; ) {
            if (Z.callback === null) r(O);
            else if (Z.startTime <= R)
              r(O), (Z.sortIndex = Z.expirationTime), s(p, Z);
            else break;
            Z = v(O);
          }
        }
        function mt(R) {
          if (((Dl = !1), Wl(R), !Ml))
            if (v(p) !== null) (Ml = !0), Ht();
            else {
              var Z = v(O);
              Z !== null && Ll(mt, Z.startTime - R);
            }
        }
        var $ = !1,
          Vl = -1,
          $t = 5,
          kt = -1;
        function G() {
          return !(E.unstable_now() - kt < $t);
        }
        function tl() {
          if ($) {
            var R = E.unstable_now();
            kt = R;
            var Z = !0;
            try {
              l: {
                (Ml = !1), Dl && ((Dl = !1), pl(Vl), (Vl = -1)), (ol = !0);
                var j = el;
                try {
                  t: {
                    for (
                      Wl(R), al = v(p);
                      al !== null && !(al.expirationTime > R && G());

                    ) {
                      var cl = al.callback;
                      if (typeof cl == "function") {
                        (al.callback = null), (el = al.priorityLevel);
                        var o = cl(al.expirationTime <= R);
                        if (((R = E.unstable_now()), typeof o == "function")) {
                          (al.callback = o), Wl(R), (Z = !0);
                          break t;
                        }
                        al === v(p) && r(p), Wl(R);
                      } else r(p);
                      al = v(p);
                    }
                    if (al !== null) Z = !0;
                    else {
                      var M = v(O);
                      M !== null && Ll(mt, M.startTime - R), (Z = !1);
                    }
                  }
                  break l;
                } finally {
                  (al = null), (el = j), (ol = !1);
                }
                Z = void 0;
              }
            } finally {
              Z ? ut() : ($ = !1);
            }
          }
        }
        var ut;
        if (typeof bl == "function")
          ut = function () {
            bl(tl);
          };
        else if (typeof MessageChannel < "u") {
          var Ut = new MessageChannel(),
            Tt = Ut.port2;
          (Ut.port1.onmessage = tl),
            (ut = function () {
              Tt.postMessage(null);
            });
        } else
          ut = function () {
            ql(tl, 0);
          };
        function Ht() {
          $ || (($ = !0), ut());
        }
        function Ll(R, Z) {
          Vl = ql(function () {
            R(E.unstable_now());
          }, Z);
        }
        (E.unstable_IdlePriority = 5),
          (E.unstable_ImmediatePriority = 1),
          (E.unstable_LowPriority = 4),
          (E.unstable_NormalPriority = 3),
          (E.unstable_Profiling = null),
          (E.unstable_UserBlockingPriority = 2),
          (E.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (E.unstable_continueExecution = function () {
            Ml || ol || ((Ml = !0), Ht());
          }),
          (E.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : ($t = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (E.unstable_getCurrentPriorityLevel = function () {
            return el;
          }),
          (E.unstable_getFirstCallbackNode = function () {
            return v(p);
          }),
          (E.unstable_next = function (R) {
            switch (el) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = el;
            }
            var j = el;
            el = Z;
            try {
              return R();
            } finally {
              el = j;
            }
          }),
          (E.unstable_pauseExecution = function () {}),
          (E.unstable_requestPaint = function () {}),
          (E.unstable_runWithPriority = function (R, Z) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var j = el;
            el = R;
            try {
              return Z();
            } finally {
              el = j;
            }
          }),
          (E.unstable_scheduleCallback = function (R, Z, j) {
            var cl = E.unstable_now();
            switch (
              (typeof j == "object" && j !== null
                ? ((j = j.delay),
                  (j = typeof j == "number" && 0 < j ? cl + j : cl))
                : (j = cl),
              R)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (o = j + o),
              (R = {
                id: Q++,
                callback: Z,
                priorityLevel: R,
                startTime: j,
                expirationTime: o,
                sortIndex: -1,
              }),
              j > cl
                ? ((R.sortIndex = j),
                  s(O, R),
                  v(p) === null &&
                    R === v(O) &&
                    (Dl ? (pl(Vl), (Vl = -1)) : (Dl = !0), Ll(mt, j - cl)))
                : ((R.sortIndex = o), s(p, R), Ml || ol || ((Ml = !0), Ht())),
              R
            );
          }),
          (E.unstable_shouldYield = G),
          (E.unstable_wrapCallback = function (R) {
            var Z = el;
            return function () {
              var j = el;
              el = Z;
              try {
                return R.apply(this, arguments);
              } finally {
                el = j;
              }
            };
          });
      })(ac)),
    ac
  );
}
var Po;
function Hd() {
  return Po || ((Po = 1), (tc.exports = Ud())), tc.exports;
}
var uc = { exports: {} },
  jl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Io;
function Nd() {
  if (Io) return jl;
  Io = 1;
  var E = fc();
  function s(p) {
    var O = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      O += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Q = 2; Q < arguments.length; Q++)
        O += "&args[]=" + encodeURIComponent(arguments[Q]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      O +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function v() {}
  var r = {
      d: {
        f: v,
        r: function () {
          throw Error(s(522));
        },
        D: v,
        C: v,
        L: v,
        m: v,
        X: v,
        S: v,
        M: v,
      },
      p: 0,
      findDOMNode: null,
    },
    b = Symbol.for("react.portal");
  function m(p, O, Q) {
    var al =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: b,
      key: al == null ? null : "" + al,
      children: p,
      containerInfo: O,
      implementation: Q,
    };
  }
  var D = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function N(p, O) {
    if (p === "font") return "";
    if (typeof O == "string") return O === "use-credentials" ? O : "";
  }
  return (
    (jl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (jl.createPortal = function (p, O) {
      var Q =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!O || (O.nodeType !== 1 && O.nodeType !== 9 && O.nodeType !== 11))
        throw Error(s(299));
      return m(p, O, null, Q);
    }),
    (jl.flushSync = function (p) {
      var O = D.T,
        Q = r.p;
      try {
        if (((D.T = null), (r.p = 2), p)) return p();
      } finally {
        (D.T = O), (r.p = Q), r.d.f();
      }
    }),
    (jl.preconnect = function (p, O) {
      typeof p == "string" &&
        (O
          ? ((O = O.crossOrigin),
            (O =
              typeof O == "string"
                ? O === "use-credentials"
                  ? O
                  : ""
                : void 0))
          : (O = null),
        r.d.C(p, O));
    }),
    (jl.prefetchDNS = function (p) {
      typeof p == "string" && r.d.D(p);
    }),
    (jl.preinit = function (p, O) {
      if (typeof p == "string" && O && typeof O.as == "string") {
        var Q = O.as,
          al = N(Q, O.crossOrigin),
          el = typeof O.integrity == "string" ? O.integrity : void 0,
          ol = typeof O.fetchPriority == "string" ? O.fetchPriority : void 0;
        Q === "style"
          ? r.d.S(p, typeof O.precedence == "string" ? O.precedence : void 0, {
              crossOrigin: al,
              integrity: el,
              fetchPriority: ol,
            })
          : Q === "script" &&
            r.d.X(p, {
              crossOrigin: al,
              integrity: el,
              fetchPriority: ol,
              nonce: typeof O.nonce == "string" ? O.nonce : void 0,
            });
      }
    }),
    (jl.preinitModule = function (p, O) {
      if (typeof p == "string")
        if (typeof O == "object" && O !== null) {
          if (O.as == null || O.as === "script") {
            var Q = N(O.as, O.crossOrigin);
            r.d.M(p, {
              crossOrigin: Q,
              integrity: typeof O.integrity == "string" ? O.integrity : void 0,
              nonce: typeof O.nonce == "string" ? O.nonce : void 0,
            });
          }
        } else O == null && r.d.M(p);
    }),
    (jl.preload = function (p, O) {
      if (
        typeof p == "string" &&
        typeof O == "object" &&
        O !== null &&
        typeof O.as == "string"
      ) {
        var Q = O.as,
          al = N(Q, O.crossOrigin);
        r.d.L(p, Q, {
          crossOrigin: al,
          integrity: typeof O.integrity == "string" ? O.integrity : void 0,
          nonce: typeof O.nonce == "string" ? O.nonce : void 0,
          type: typeof O.type == "string" ? O.type : void 0,
          fetchPriority:
            typeof O.fetchPriority == "string" ? O.fetchPriority : void 0,
          referrerPolicy:
            typeof O.referrerPolicy == "string" ? O.referrerPolicy : void 0,
          imageSrcSet:
            typeof O.imageSrcSet == "string" ? O.imageSrcSet : void 0,
          imageSizes: typeof O.imageSizes == "string" ? O.imageSizes : void 0,
          media: typeof O.media == "string" ? O.media : void 0,
        });
      }
    }),
    (jl.preloadModule = function (p, O) {
      if (typeof p == "string")
        if (O) {
          var Q = N(O.as, O.crossOrigin);
          r.d.m(p, {
            as: typeof O.as == "string" && O.as !== "script" ? O.as : void 0,
            crossOrigin: Q,
            integrity: typeof O.integrity == "string" ? O.integrity : void 0,
          });
        } else r.d.m(p);
    }),
    (jl.requestFormReset = function (p) {
      r.d.r(p);
    }),
    (jl.unstable_batchedUpdates = function (p, O) {
      return p(O);
    }),
    (jl.useFormState = function (p, O, Q) {
      return D.H.useFormState(p, O, Q);
    }),
    (jl.useFormStatus = function () {
      return D.H.useHostTransitionStatus();
    }),
    (jl.version = "19.0.0"),
    jl
  );
}
var l0;
function qd() {
  if (l0) return uc.exports;
  l0 = 1;
  function E() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (s) {
        console.error(s);
      }
  }
  return E(), (uc.exports = Nd()), uc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var t0;
function Yd() {
  if (t0) return Oe;
  t0 = 1;
  var E = Hd(),
    s = fc(),
    v = qd();
  function r(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function b(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  var m = Symbol.for("react.element"),
    D = Symbol.for("react.transitional.element"),
    N = Symbol.for("react.portal"),
    p = Symbol.for("react.fragment"),
    O = Symbol.for("react.strict_mode"),
    Q = Symbol.for("react.profiler"),
    al = Symbol.for("react.provider"),
    el = Symbol.for("react.consumer"),
    ol = Symbol.for("react.context"),
    Ml = Symbol.for("react.forward_ref"),
    Dl = Symbol.for("react.suspense"),
    ql = Symbol.for("react.suspense_list"),
    pl = Symbol.for("react.memo"),
    bl = Symbol.for("react.lazy"),
    Wl = Symbol.for("react.offscreen"),
    mt = Symbol.for("react.memo_cache_sentinel"),
    $ = Symbol.iterator;
  function Vl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = ($ && l[$]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var $t = Symbol.for("react.client.reference");
  function kt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === $t ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case p:
        return "Fragment";
      case N:
        return "Portal";
      case Q:
        return "Profiler";
      case O:
        return "StrictMode";
      case Dl:
        return "Suspense";
      case ql:
        return "SuspenseList";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ol:
          return (l.displayName || "Context") + ".Provider";
        case el:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ml:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case pl:
          return (
            (t = l.displayName || null), t !== null ? t : kt(l.type) || "Memo"
          );
        case bl:
          (t = l._payload), (l = l._init);
          try {
            return kt(l(t));
          } catch {}
      }
    return null;
  }
  var G = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    tl = Object.assign,
    ut,
    Ut;
  function Tt(l) {
    if (ut === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        (ut = (t && t[1]) || ""),
          (Ut =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      ut +
      l +
      Ut
    );
  }
  var Ht = !1;
  function Ll(l, t) {
    if (!l || Ht) return "";
    Ht = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var _ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(_.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(_, []);
                } catch (T) {
                  var S = T;
                }
                Reflect.construct(l, [], _);
              } else {
                try {
                  _.call();
                } catch (T) {
                  S = T;
                }
                l.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (T) {
                S = T;
              }
              (_ = l()) &&
                typeof _.catch == "function" &&
                _.catch(function () {});
            }
          } catch (T) {
            if (T && S && typeof T.stack == "string") return [T.stack, S.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e &&
        e.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = u.DetermineComponentFrameRoot(),
        i = n[0],
        f = n[1];
      if (i && f) {
        var c = i.split(`
`),
          d = f.split(`
`);
        for (
          e = u = 0;
          u < c.length && !c[u].includes("DetermineComponentFrameRoot");

        )
          u++;
        for (; e < d.length && !d[e].includes("DetermineComponentFrameRoot"); )
          e++;
        if (u === c.length || e === d.length)
          for (
            u = c.length - 1, e = d.length - 1;
            1 <= u && 0 <= e && c[u] !== d[e];

          )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (c[u] !== d[e]) {
            if (u !== 1 || e !== 1)
              do
                if ((u--, e--, 0 > e || c[u] !== d[e])) {
                  var z =
                    `
` + c[u].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      z.includes("<anonymous>") &&
                      (z = z.replace("<anonymous>", l.displayName)),
                    z
                  );
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      (Ht = !1), (Error.prepareStackTrace = a);
    }
    return (a = l ? l.displayName || l.name : "") ? Tt(a) : "";
  }
  function R(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Tt(l.type);
      case 16:
        return Tt("Lazy");
      case 13:
        return Tt("Suspense");
      case 19:
        return Tt("SuspenseList");
      case 0:
      case 15:
        return (l = Ll(l.type, !1)), l;
      case 11:
        return (l = Ll(l.type.render, !1)), l;
      case 1:
        return (l = Ll(l.type, !0)), l;
      default:
        return "";
    }
  }
  function Z(l) {
    try {
      var t = "";
      do (t += R(l)), (l = l.return);
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function j(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), t.flags & 4098 && (a = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function cl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function o(l) {
    if (j(l) !== l) throw Error(r(188));
  }
  function M(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = j(l)), t === null)) throw Error(r(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((u = e.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return o(e), l;
          if (n === u) return o(e), t;
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== u.return) (a = e), (u = n);
      else {
        for (var i = !1, f = e.child; f; ) {
          if (f === a) {
            (i = !0), (a = e), (u = n);
            break;
          }
          if (f === u) {
            (i = !0), (u = e), (a = n);
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = n.child; f; ) {
            if (f === a) {
              (i = !0), (a = n), (u = e);
              break;
            }
            if (f === u) {
              (i = !0), (u = n), (a = e);
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(r(189));
        }
      }
      if (a.alternate !== u) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? l : t;
  }
  function C(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = C(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var x = Array.isArray,
    U = v.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = { pending: !1, data: null, method: null, action: null },
    L = [],
    Ql = -1;
  function ul(l) {
    return { current: l };
  }
  function El(l) {
    0 > Ql || ((l.current = L[Ql]), (L[Ql] = null), Ql--);
  }
  function hl(l, t) {
    Ql++, (L[Ql] = l.current), (l.current = t);
  }
  var zt = ul(null),
    Mu = ul(null),
    Ft = ul(null),
    Me = ul(null);
  function De(l, t) {
    switch ((hl(Ft, t), hl(Mu, l), hl(zt, null), (l = t.nodeType), l)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? zo(t) : 0;
        break;
      default:
        if (
          ((l = l === 8 ? t.parentNode : t),
          (t = l.tagName),
          (l = l.namespaceURI))
        )
          (l = zo(l)), (t = Ao(l, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    El(zt), hl(zt, t);
  }
  function La() {
    El(zt), El(Mu), El(Ft);
  }
  function Zn(l) {
    l.memoizedState !== null && hl(Me, l);
    var t = zt.current,
      a = Ao(t, l.type);
    t !== a && (hl(Mu, l), hl(zt, a));
  }
  function pe(l) {
    Mu.current === l && (El(zt), El(Mu)),
      Me.current === l && (El(Me), (Se._currentValue = k));
  }
  var Vn = Object.prototype.hasOwnProperty,
    Ln = E.unstable_scheduleCallback,
    Kn = E.unstable_cancelCallback,
    e0 = E.unstable_shouldYield,
    n0 = E.unstable_requestPaint,
    At = E.unstable_now,
    i0 = E.unstable_getCurrentPriorityLevel,
    rc = E.unstable_ImmediatePriority,
    oc = E.unstable_UserBlockingPriority,
    Re = E.unstable_NormalPriority,
    f0 = E.unstable_LowPriority,
    hc = E.unstable_IdlePriority,
    c0 = E.log,
    s0 = E.unstable_setDisableYieldValue,
    Du = null,
    $l = null;
  function r0(l) {
    if ($l && typeof $l.onCommitFiberRoot == "function")
      try {
        $l.onCommitFiberRoot(Du, l, void 0, (l.current.flags & 128) === 128);
      } catch {}
  }
  function Pt(l) {
    if (
      (typeof c0 == "function" && s0(l),
      $l && typeof $l.setStrictMode == "function")
    )
      try {
        $l.setStrictMode(Du, l);
      } catch {}
  }
  var kl = Math.clz32 ? Math.clz32 : d0,
    o0 = Math.log,
    h0 = Math.LN2;
  function d0(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((o0(l) / h0) | 0)) | 0;
  }
  var Ue = 128,
    He = 4194304;
  function za(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ne(l, t) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      e = l.suspendedLanes,
      n = l.pingedLanes,
      i = l.warmLanes;
    l = l.finishedLanes !== 0;
    var f = a & 134217727;
    return (
      f !== 0
        ? ((a = f & ~e),
          a !== 0
            ? (u = za(a))
            : ((n &= f),
              n !== 0
                ? (u = za(n))
                : l || ((i = f & ~i), i !== 0 && (u = za(i)))))
        : ((f = a & ~e),
          f !== 0
            ? (u = za(f))
            : n !== 0
            ? (u = za(n))
            : l || ((i = a & ~i), i !== 0 && (u = za(i)))),
      u === 0
        ? 0
        : t !== 0 &&
          t !== u &&
          !(t & e) &&
          ((e = u & -u),
          (i = t & -t),
          e >= i || (e === 32 && (i & 4194176) !== 0))
        ? t
        : u
    );
  }
  function pu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function v0(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function dc() {
    var l = Ue;
    return (Ue <<= 1), !(Ue & 4194176) && (Ue = 128), l;
  }
  function vc() {
    var l = He;
    return (He <<= 1), !(He & 62914560) && (He = 4194304), l;
  }
  function wn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Ru(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function y0(l, t, a, u, e, n) {
    var i = l.pendingLanes;
    (l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0);
    var f = l.entanglements,
      c = l.expirationTimes,
      d = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var z = 31 - kl(a),
        _ = 1 << z;
      (f[z] = 0), (c[z] = -1);
      var S = d[z];
      if (S !== null)
        for (d[z] = null, z = 0; z < S.length; z++) {
          var T = S[z];
          T !== null && (T.lane &= -536870913);
        }
      a &= ~_;
    }
    u !== 0 && yc(l, u, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function yc(l, t, a) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var u = 31 - kl(t);
    (l.entangledLanes |= t),
      (l.entanglements[u] = l.entanglements[u] | 1073741824 | (a & 4194218));
  }
  function mc(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var u = 31 - kl(a),
        e = 1 << u;
      (e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e);
    }
  }
  function gc(l) {
    return (
      (l &= -l), 2 < l ? (8 < l ? (l & 134217727 ? 32 : 268435456) : 8) : 2
    );
  }
  function Sc() {
    var l = U.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Xo(l.type));
  }
  function m0(l, t) {
    var a = U.p;
    try {
      return (U.p = l), t();
    } finally {
      U.p = a;
    }
  }
  var It = Math.random().toString(36).slice(2),
    Gl = "__reactFiber$" + It,
    Kl = "__reactProps$" + It,
    Ka = "__reactContainer$" + It,
    Jn = "__reactEvents$" + It,
    g0 = "__reactListeners$" + It,
    S0 = "__reactHandles$" + It,
    bc = "__reactResources$" + It,
    Uu = "__reactMarker$" + It;
  function Wn(l) {
    delete l[Gl], delete l[Kl], delete l[Jn], delete l[g0], delete l[S0];
  }
  function Aa(l) {
    var t = l[Gl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[Ka] || a[Gl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = Mo(l); l !== null; ) {
            if ((a = l[Gl])) return a;
            l = Mo(l);
          }
        return t;
      }
      (l = a), (a = l.parentNode);
    }
    return null;
  }
  function wa(l) {
    if ((l = l[Gl] || l[Ka])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Hu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(r(33));
  }
  function Ja(l) {
    var t = l[bc];
    return (
      t ||
        (t = l[bc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Rl(l) {
    l[Uu] = !0;
  }
  var Ec = new Set(),
    Tc = {};
  function Oa(l, t) {
    Wa(l, t), Wa(l + "Capture", t);
  }
  function Wa(l, t) {
    for (Tc[l] = t, l = 0; l < t.length; l++) Ec.add(t[l]);
  }
  var Nt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    b0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    zc = {},
    Ac = {};
  function E0(l) {
    return Vn.call(Ac, l)
      ? !0
      : Vn.call(zc, l)
      ? !1
      : b0.test(l)
      ? (Ac[l] = !0)
      : ((zc[l] = !0), !1);
  }
  function qe(l, t, a) {
    if (E0(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Ye(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function qt(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function et(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Oc(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function T0(l) {
    var t = Oc(l) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      u = "" + l[t];
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var e = a.get,
        n = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (i) {
            (u = "" + i), n.call(this, i);
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (i) {
            u = "" + i;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function xe(l) {
    l._valueTracker || (l._valueTracker = T0(l));
  }
  function _c(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      u = "";
    return (
      l && (u = Oc(l) ? (l.checked ? "true" : "false") : l.value),
      (l = u),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function Be(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var z0 = /[\n"\\]/g;
  function nt(l) {
    return l.replace(z0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function $n(l, t, a, u, e, n, i, f) {
    (l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + et(t))
          : l.value !== "" + et(t) && (l.value = "" + et(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? kn(l, i, et(t))
        : a != null
        ? kn(l, i, et(a))
        : u != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.name = "" + et(f))
        : l.removeAttribute("name");
  }
  function Mc(l, t, a, u, e, n, i, f) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) return;
      (a = a != null ? "" + et(a) : ""),
        (t = t != null ? "" + et(t) : a),
        f || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (u = u ?? e),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (l.checked = f ? l.checked : !!u),
      (l.defaultChecked = !!u),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i);
  }
  function kn(l, t, a) {
    (t === "number" && Be(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function $a(l, t, a, u) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        (e = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== e && (l[a].selected = e),
          e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + et(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          (l[e].selected = !0), u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Dc(l, t, a) {
    if (
      t != null &&
      ((t = "" + et(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + et(a) : "";
  }
  function pc(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(r(92));
        if (x(u)) {
          if (1 < u.length) throw Error(r(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), (t = a);
    }
    (a = et(t)),
      (l.defaultValue = a),
      (u = l.textContent),
      u === a && u !== "" && u !== null && (l.value = u);
  }
  function ka(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var A0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Rc(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : u
      ? l.setProperty(t, a)
      : typeof a != "number" || a === 0 || A0.has(t)
      ? t === "float"
        ? (l.cssFloat = a)
        : (l[t] = ("" + a).trim())
      : (l[t] = a + "px");
  }
  function Uc(l, t, a) {
    if (t != null && typeof t != "object") throw Error(r(62));
    if (((l = l.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (t != null && t.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? l.setProperty(u, "")
            : u === "float"
            ? (l.cssFloat = "")
            : (l[u] = ""));
      for (var e in t)
        (u = t[e]), t.hasOwnProperty(e) && a[e] !== u && Rc(l, e, u);
    } else for (var n in t) t.hasOwnProperty(n) && Rc(l, n, t[n]);
  }
  function Fn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var O0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    _0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ge(l) {
    return _0.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var Pn = null;
  function In(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Fa = null,
    Pa = null;
  function Hc(l) {
    var t = wa(l);
    if (t && (l = t.stateNode)) {
      var a = l[Kl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            ($n(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + nt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Kl] || null;
                if (!e) throw Error(r(90));
                $n(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              (u = a[t]), u.form === l.form && _c(u);
          }
          break l;
        case "textarea":
          Dc(l, a.value, a.defaultValue);
          break l;
        case "select":
          (t = a.value), t != null && $a(l, !!a.multiple, t, !1);
      }
    }
  }
  var li = !1;
  function Nc(l, t, a) {
    if (li) return l(t, a);
    li = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (
        ((li = !1),
        (Fa !== null || Pa !== null) &&
          (Tn(), Fa && ((t = Fa), (l = Pa), (Pa = Fa = null), Hc(t), l)))
      )
        for (t = 0; t < l.length; t++) Hc(l[t]);
    }
  }
  function Nu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Kl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) ||
          ((l = l.type),
          (u = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !u);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(r(231, t, typeof a));
    return a;
  }
  var ti = !1;
  if (Nt)
    try {
      var qu = {};
      Object.defineProperty(qu, "passive", {
        get: function () {
          ti = !0;
        },
      }),
        window.addEventListener("test", qu, qu),
        window.removeEventListener("test", qu, qu);
    } catch {
      ti = !1;
    }
  var la = null,
    ai = null,
    Ce = null;
  function qc() {
    if (Ce) return Ce;
    var l,
      t = ai,
      a = t.length,
      u,
      e = "value" in la ? la.value : la.textContent,
      n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++);
    var i = a - l;
    for (u = 1; u <= i && t[a - u] === e[n - u]; u++);
    return (Ce = e.slice(l, 1 < u ? 1 - u : void 0));
  }
  function je(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Qe() {
    return !0;
  }
  function Yc() {
    return !1;
  }
  function wl(l) {
    function t(a, u, e, n, i) {
      (this._reactName = a),
        (this._targetInst = e),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null);
      for (var f in l)
        l.hasOwnProperty(f) && ((a = l[f]), (this[f] = a ? a(n) : n[f]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Qe
          : Yc),
        (this.isPropagationStopped = Yc),
        this
      );
    }
    return (
      tl(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Qe));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Qe));
        },
        persist: function () {},
        isPersistent: Qe,
      }),
      t
    );
  }
  var _a = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Xe = wl(_a),
    Yu = tl({}, _a, { view: 0, detail: 0 }),
    M0 = wl(Yu),
    ui,
    ei,
    xu,
    Ze = tl({}, Yu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ii,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== xu &&
              (xu && l.type === "mousemove"
                ? ((ui = l.screenX - xu.screenX), (ei = l.screenY - xu.screenY))
                : (ei = ui = 0),
              (xu = l)),
            ui);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : ei;
      },
    }),
    xc = wl(Ze),
    D0 = tl({}, Ze, { dataTransfer: 0 }),
    p0 = wl(D0),
    R0 = tl({}, Yu, { relatedTarget: 0 }),
    ni = wl(R0),
    U0 = tl({}, _a, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    H0 = wl(U0),
    N0 = tl({}, _a, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    q0 = wl(N0),
    Y0 = tl({}, _a, { data: 0 }),
    Bc = wl(Y0),
    x0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    B0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    G0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function C0(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = G0[l])
      ? !!t[l]
      : !1;
  }
  function ii() {
    return C0;
  }
  var j0 = tl({}, Yu, {
      key: function (l) {
        if (l.key) {
          var t = x0[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = je(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? B0[l.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ii,
      charCode: function (l) {
        return l.type === "keypress" ? je(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? je(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    Q0 = wl(j0),
    X0 = tl({}, Ze, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Gc = wl(X0),
    Z0 = tl({}, Yu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ii,
    }),
    V0 = wl(Z0),
    L0 = tl({}, _a, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    K0 = wl(L0),
    w0 = tl({}, Ze, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    J0 = wl(w0),
    W0 = tl({}, _a, { newState: 0, oldState: 0 }),
    $0 = wl(W0),
    k0 = [9, 13, 27, 32],
    fi = Nt && "CompositionEvent" in window,
    Bu = null;
  Nt && "documentMode" in document && (Bu = document.documentMode);
  var F0 = Nt && "TextEvent" in window && !Bu,
    Cc = Nt && (!fi || (Bu && 8 < Bu && 11 >= Bu)),
    jc = " ",
    Qc = !1;
  function Xc(l, t) {
    switch (l) {
      case "keyup":
        return k0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Zc(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ia = !1;
  function P0(l, t) {
    switch (l) {
      case "compositionend":
        return Zc(t);
      case "keypress":
        return t.which !== 32 ? null : ((Qc = !0), jc);
      case "textInput":
        return (l = t.data), l === jc && Qc ? null : l;
      default:
        return null;
    }
  }
  function I0(l, t) {
    if (Ia)
      return l === "compositionend" || (!fi && Xc(l, t))
        ? ((l = qc()), (Ce = ai = la = null), (Ia = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Cc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var lh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Vc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!lh[l.type] : t === "textarea";
  }
  function Lc(l, t, a, u) {
    Fa ? (Pa ? Pa.push(u) : (Pa = [u])) : (Fa = u),
      (t = Mn(t, "onChange")),
      0 < t.length &&
        ((a = new Xe("onChange", "change", null, a, u)),
        l.push({ event: a, listeners: t }));
  }
  var Gu = null,
    Cu = null;
  function th(l) {
    go(l, 0);
  }
  function Ve(l) {
    var t = Hu(l);
    if (_c(t)) return l;
  }
  function Kc(l, t) {
    if (l === "change") return t;
  }
  var wc = !1;
  if (Nt) {
    var ci;
    if (Nt) {
      var si = "oninput" in document;
      if (!si) {
        var Jc = document.createElement("div");
        Jc.setAttribute("oninput", "return;"),
          (si = typeof Jc.oninput == "function");
      }
      ci = si;
    } else ci = !1;
    wc = ci && (!document.documentMode || 9 < document.documentMode);
  }
  function Wc() {
    Gu && (Gu.detachEvent("onpropertychange", $c), (Cu = Gu = null));
  }
  function $c(l) {
    if (l.propertyName === "value" && Ve(Cu)) {
      var t = [];
      Lc(t, Cu, l, In(l)), Nc(th, t);
    }
  }
  function ah(l, t, a) {
    l === "focusin"
      ? (Wc(), (Gu = t), (Cu = a), Gu.attachEvent("onpropertychange", $c))
      : l === "focusout" && Wc();
  }
  function uh(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ve(Cu);
  }
  function eh(l, t) {
    if (l === "click") return Ve(t);
  }
  function nh(l, t) {
    if (l === "input" || l === "change") return Ve(t);
  }
  function ih(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var Fl = typeof Object.is == "function" ? Object.is : ih;
  function ju(l, t) {
    if (Fl(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Vn.call(t, e) || !Fl(l[e], t[e])) return !1;
    }
    return !0;
  }
  function kc(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Fc(l, t) {
    var a = kc(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (((u = l + a.textContent.length), l <= t && u >= t))
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = kc(a);
    }
  }
  function Pc(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Pc(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Ic(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Be(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Be(l.document);
    }
    return t;
  }
  function ri(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  function fh(l, t) {
    var a = Ic(t);
    t = l.focusedElem;
    var u = l.selectionRange;
    if (
      a !== t &&
      t &&
      t.ownerDocument &&
      Pc(t.ownerDocument.documentElement, t)
    ) {
      if (u !== null && ri(t)) {
        if (
          ((l = u.start),
          (a = u.end),
          a === void 0 && (a = l),
          "selectionStart" in t)
        )
          (t.selectionStart = l),
            (t.selectionEnd = Math.min(a, t.value.length));
        else if (
          ((a = ((l = t.ownerDocument || document) && l.defaultView) || window),
          a.getSelection)
        ) {
          a = a.getSelection();
          var e = t.textContent.length,
            n = Math.min(u.start, e);
          (u = u.end === void 0 ? n : Math.min(u.end, e)),
            !a.extend && n > u && ((e = u), (u = n), (n = e)),
            (e = Fc(t, n));
          var i = Fc(t, u);
          e &&
            i &&
            (a.rangeCount !== 1 ||
              a.anchorNode !== e.node ||
              a.anchorOffset !== e.offset ||
              a.focusNode !== i.node ||
              a.focusOffset !== i.offset) &&
            ((l = l.createRange()),
            l.setStart(e.node, e.offset),
            a.removeAllRanges(),
            n > u
              ? (a.addRange(l), a.extend(i.node, i.offset))
              : (l.setEnd(i.node, i.offset), a.addRange(l)));
        }
      }
      for (l = [], a = t; (a = a.parentNode); )
        a.nodeType === 1 &&
          l.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < l.length; t++)
        (a = l[t]),
          (a.element.scrollLeft = a.left),
          (a.element.scrollTop = a.top);
    }
  }
  var ch = Nt && "documentMode" in document && 11 >= document.documentMode,
    lu = null,
    oi = null,
    Qu = null,
    hi = !1;
  function ls(l, t, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    hi ||
      lu == null ||
      lu !== Be(u) ||
      ((u = lu),
      "selectionStart" in u && ri(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Qu && ju(Qu, u)) ||
        ((Qu = u),
        (u = Mn(oi, "onSelect")),
        0 < u.length &&
          ((t = new Xe("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: u }),
          (t.target = lu))));
  }
  function Ma(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var tu = {
      animationend: Ma("Animation", "AnimationEnd"),
      animationiteration: Ma("Animation", "AnimationIteration"),
      animationstart: Ma("Animation", "AnimationStart"),
      transitionrun: Ma("Transition", "TransitionRun"),
      transitionstart: Ma("Transition", "TransitionStart"),
      transitioncancel: Ma("Transition", "TransitionCancel"),
      transitionend: Ma("Transition", "TransitionEnd"),
    },
    di = {},
    ts = {};
  Nt &&
    ((ts = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete tu.animationend.animation,
      delete tu.animationiteration.animation,
      delete tu.animationstart.animation),
    "TransitionEvent" in window || delete tu.transitionend.transition);
  function Da(l) {
    if (di[l]) return di[l];
    if (!tu[l]) return l;
    var t = tu[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in ts) return (di[l] = t[a]);
    return l;
  }
  var as = Da("animationend"),
    us = Da("animationiteration"),
    es = Da("animationstart"),
    sh = Da("transitionrun"),
    rh = Da("transitionstart"),
    oh = Da("transitioncancel"),
    ns = Da("transitionend"),
    is = new Map(),
    fs =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function gt(l, t) {
    is.set(l, t), Oa(t, [l]);
  }
  var it = [],
    au = 0,
    vi = 0;
  function Le() {
    for (var l = au, t = (vi = au = 0); t < l; ) {
      var a = it[t];
      it[t++] = null;
      var u = it[t];
      it[t++] = null;
      var e = it[t];
      it[t++] = null;
      var n = it[t];
      if (((it[t++] = null), u !== null && e !== null)) {
        var i = u.pending;
        i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
          (u.pending = e);
      }
      n !== 0 && cs(a, e, n);
    }
  }
  function Ke(l, t, a, u) {
    (it[au++] = l),
      (it[au++] = t),
      (it[au++] = a),
      (it[au++] = u),
      (vi |= u),
      (l.lanes |= u),
      (l = l.alternate),
      l !== null && (l.lanes |= u);
  }
  function yi(l, t, a, u) {
    return Ke(l, t, a, u), we(l);
  }
  function ta(l, t) {
    return Ke(l, null, null, t), we(l);
  }
  function cs(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      (n.childLanes |= a),
        (u = n.alternate),
        u !== null && (u.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return);
    e &&
      t !== null &&
      l.tag === 3 &&
      ((n = l.stateNode),
      (e = 31 - kl(a)),
      (n = n.hiddenUpdates),
      (l = n[e]),
      l === null ? (n[e] = [t]) : l.push(t),
      (t.lane = a | 536870912));
  }
  function we(l) {
    if (50 < oe) throw ((oe = 0), (zf = null), Error(r(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var uu = {},
    ss = new WeakMap();
  function ft(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = ss.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: Z(t) }), ss.set(l, t), t);
    }
    return { value: l, source: t, stack: Z(t) };
  }
  var eu = [],
    nu = 0,
    Je = null,
    We = 0,
    ct = [],
    st = 0,
    pa = null,
    Yt = 1,
    xt = "";
  function Ra(l, t) {
    (eu[nu++] = We), (eu[nu++] = Je), (Je = l), (We = t);
  }
  function rs(l, t, a) {
    (ct[st++] = Yt), (ct[st++] = xt), (ct[st++] = pa), (pa = l);
    var u = Yt;
    l = xt;
    var e = 32 - kl(u) - 1;
    (u &= ~(1 << e)), (a += 1);
    var n = 32 - kl(t) + e;
    if (30 < n) {
      var i = e - (e % 5);
      (n = (u & ((1 << i) - 1)).toString(32)),
        (u >>= i),
        (e -= i),
        (Yt = (1 << (32 - kl(t) + e)) | (a << e) | u),
        (xt = n + l);
    } else (Yt = (1 << n) | (a << e) | u), (xt = l);
  }
  function mi(l) {
    l.return !== null && (Ra(l, 1), rs(l, 1, 0));
  }
  function gi(l) {
    for (; l === Je; )
      (Je = eu[--nu]), (eu[nu] = null), (We = eu[--nu]), (eu[nu] = null);
    for (; l === pa; )
      (pa = ct[--st]),
        (ct[st] = null),
        (xt = ct[--st]),
        (ct[st] = null),
        (Yt = ct[--st]),
        (ct[st] = null);
  }
  var Xl = null,
    Yl = null,
    P = !1,
    St = null,
    Ot = !1,
    Si = Error(r(519));
  function Ua(l) {
    var t = Error(r(418, ""));
    throw (Vu(ft(t, l)), Si);
  }
  function os(l) {
    var t = l.stateNode,
      a = l.type,
      u = l.memoizedProps;
    switch (((t[Gl] = l), (t[Kl] = u), a)) {
      case "dialog":
        W("cancel", t), W("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        W("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < de.length; a++) W(de[a], t);
        break;
      case "source":
        W("error", t);
        break;
      case "img":
      case "image":
      case "link":
        W("error", t), W("load", t);
        break;
      case "details":
        W("toggle", t);
        break;
      case "input":
        W("invalid", t),
          Mc(
            t,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0
          ),
          xe(t);
        break;
      case "select":
        W("invalid", t);
        break;
      case "textarea":
        W("invalid", t), pc(t, u.value, u.defaultValue, u.children), xe(t);
    }
    (a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      To(t.textContent, a)
        ? (u.popover != null && (W("beforetoggle", t), W("toggle", t)),
          u.onScroll != null && W("scroll", t),
          u.onScrollEnd != null && W("scrollend", t),
          u.onClick != null && (t.onclick = Dn),
          (t = !0))
        : (t = !1),
      t || Ua(l);
  }
  function hs(l) {
    for (Xl = l.return; Xl; )
      switch (Xl.tag) {
        case 3:
        case 27:
          Ot = !0;
          return;
        case 5:
        case 13:
          Ot = !1;
          return;
        default:
          Xl = Xl.return;
      }
  }
  function Xu(l) {
    if (l !== Xl) return !1;
    if (!P) return hs(l), (P = !0), !1;
    var t = !1,
      a;
    if (
      ((a = l.tag !== 3 && l.tag !== 27) &&
        ((a = l.tag === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || jf(l.type, l.memoizedProps))),
        (a = !a)),
      a && (t = !0),
      t && Yl && Ua(l),
      hs(l),
      l.tag === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(r(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((a = l.data), a === "/$")) {
              if (t === 0) {
                Yl = Et(l.nextSibling);
                break l;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          l = l.nextSibling;
        }
        Yl = null;
      }
    } else Yl = Xl ? Et(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Zu() {
    (Yl = Xl = null), (P = !1);
  }
  function Vu(l) {
    St === null ? (St = [l]) : St.push(l);
  }
  var Lu = Error(r(460)),
    ds = Error(r(474)),
    bi = { then: function () {} };
  function vs(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function $e() {}
  function ys(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then($e, $e), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), l === Lu ? Error(r(483)) : l);
      default:
        if (typeof t.status == "string") t.then($e, $e);
        else {
          if (((l = sl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(r(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "fulfilled"), (e.value = u);
                }
              },
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "rejected"), (e.reason = u);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), l === Lu ? Error(r(483)) : l);
        }
        throw ((Ku = t), Lu);
    }
  }
  var Ku = null;
  function ms() {
    if (Ku === null) throw Error(r(459));
    var l = Ku;
    return (Ku = null), l;
  }
  var iu = null,
    wu = 0;
  function ke(l) {
    var t = wu;
    return (wu += 1), iu === null && (iu = []), ys(iu, l, t);
  }
  function Ju(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function Fe(l, t) {
    throw t.$$typeof === m
      ? Error(r(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function gs(l) {
    var t = l._init;
    return t(l._payload);
  }
  function Ss(l) {
    function t(y, h) {
      if (l) {
        var g = y.deletions;
        g === null ? ((y.deletions = [h]), (y.flags |= 16)) : g.push(h);
      }
    }
    function a(y, h) {
      if (!l) return null;
      for (; h !== null; ) t(y, h), (h = h.sibling);
      return null;
    }
    function u(y) {
      for (var h = new Map(); y !== null; )
        y.key !== null ? h.set(y.key, y) : h.set(y.index, y), (y = y.sibling);
      return h;
    }
    function e(y, h) {
      return (y = da(y, h)), (y.index = 0), (y.sibling = null), y;
    }
    function n(y, h, g) {
      return (
        (y.index = g),
        l
          ? ((g = y.alternate),
            g !== null
              ? ((g = g.index), g < h ? ((y.flags |= 33554434), h) : g)
              : ((y.flags |= 33554434), h))
          : ((y.flags |= 1048576), h)
      );
    }
    function i(y) {
      return l && y.alternate === null && (y.flags |= 33554434), y;
    }
    function f(y, h, g, A) {
      return h === null || h.tag !== 6
        ? ((h = vf(g, y.mode, A)), (h.return = y), h)
        : ((h = e(h, g)), (h.return = y), h);
    }
    function c(y, h, g, A) {
      var H = g.type;
      return H === p
        ? z(y, h, g.props.children, A, g.key)
        : h !== null &&
          (h.elementType === H ||
            (typeof H == "object" &&
              H !== null &&
              H.$$typeof === bl &&
              gs(H) === h.type))
        ? ((h = e(h, g.props)), Ju(h, g), (h.return = y), h)
        : ((h = mn(g.type, g.key, g.props, null, y.mode, A)),
          Ju(h, g),
          (h.return = y),
          h);
    }
    function d(y, h, g, A) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== g.containerInfo ||
        h.stateNode.implementation !== g.implementation
        ? ((h = yf(g, y.mode, A)), (h.return = y), h)
        : ((h = e(h, g.children || [])), (h.return = y), h);
    }
    function z(y, h, g, A, H) {
      return h === null || h.tag !== 7
        ? ((h = Qa(g, y.mode, A, H)), (h.return = y), h)
        : ((h = e(h, g)), (h.return = y), h);
    }
    function _(y, h, g) {
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return (h = vf("" + h, y.mode, g)), (h.return = y), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case D:
            return (
              (g = mn(h.type, h.key, h.props, null, y.mode, g)),
              Ju(g, h),
              (g.return = y),
              g
            );
          case N:
            return (h = yf(h, y.mode, g)), (h.return = y), h;
          case bl:
            var A = h._init;
            return (h = A(h._payload)), _(y, h, g);
        }
        if (x(h) || Vl(h))
          return (h = Qa(h, y.mode, g, null)), (h.return = y), h;
        if (typeof h.then == "function") return _(y, ke(h), g);
        if (h.$$typeof === ol) return _(y, dn(y, h), g);
        Fe(y, h);
      }
      return null;
    }
    function S(y, h, g, A) {
      var H = h !== null ? h.key : null;
      if (
        (typeof g == "string" && g !== "") ||
        typeof g == "number" ||
        typeof g == "bigint"
      )
        return H !== null ? null : f(y, h, "" + g, A);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case D:
            return g.key === H ? c(y, h, g, A) : null;
          case N:
            return g.key === H ? d(y, h, g, A) : null;
          case bl:
            return (H = g._init), (g = H(g._payload)), S(y, h, g, A);
        }
        if (x(g) || Vl(g)) return H !== null ? null : z(y, h, g, A, null);
        if (typeof g.then == "function") return S(y, h, ke(g), A);
        if (g.$$typeof === ol) return S(y, h, dn(y, g), A);
        Fe(y, g);
      }
      return null;
    }
    function T(y, h, g, A, H) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (y = y.get(g) || null), f(h, y, "" + A, H);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case D:
            return (
              (y = y.get(A.key === null ? g : A.key) || null), c(h, y, A, H)
            );
          case N:
            return (
              (y = y.get(A.key === null ? g : A.key) || null), d(h, y, A, H)
            );
          case bl:
            var w = A._init;
            return (A = w(A._payload)), T(y, h, g, A, H);
        }
        if (x(A) || Vl(A)) return (y = y.get(g) || null), z(h, y, A, H, null);
        if (typeof A.then == "function") return T(y, h, g, ke(A), H);
        if (A.$$typeof === ol) return T(y, h, g, dn(h, A), H);
        Fe(h, A);
      }
      return null;
    }
    function q(y, h, g, A) {
      for (
        var H = null, w = null, Y = h, B = (h = 0), Nl = null;
        Y !== null && B < g.length;
        B++
      ) {
        Y.index > B ? ((Nl = Y), (Y = null)) : (Nl = Y.sibling);
        var I = S(y, Y, g[B], A);
        if (I === null) {
          Y === null && (Y = Nl);
          break;
        }
        l && Y && I.alternate === null && t(y, Y),
          (h = n(I, h, B)),
          w === null ? (H = I) : (w.sibling = I),
          (w = I),
          (Y = Nl);
      }
      if (B === g.length) return a(y, Y), P && Ra(y, B), H;
      if (Y === null) {
        for (; B < g.length; B++)
          (Y = _(y, g[B], A)),
            Y !== null &&
              ((h = n(Y, h, B)),
              w === null ? (H = Y) : (w.sibling = Y),
              (w = Y));
        return P && Ra(y, B), H;
      }
      for (Y = u(Y); B < g.length; B++)
        (Nl = T(Y, y, B, g[B], A)),
          Nl !== null &&
            (l &&
              Nl.alternate !== null &&
              Y.delete(Nl.key === null ? B : Nl.key),
            (h = n(Nl, h, B)),
            w === null ? (H = Nl) : (w.sibling = Nl),
            (w = Nl));
      return (
        l &&
          Y.forEach(function (Ea) {
            return t(y, Ea);
          }),
        P && Ra(y, B),
        H
      );
    }
    function X(y, h, g, A) {
      if (g == null) throw Error(r(151));
      for (
        var H = null, w = null, Y = h, B = (h = 0), Nl = null, I = g.next();
        Y !== null && !I.done;
        B++, I = g.next()
      ) {
        Y.index > B ? ((Nl = Y), (Y = null)) : (Nl = Y.sibling);
        var Ea = S(y, Y, I.value, A);
        if (Ea === null) {
          Y === null && (Y = Nl);
          break;
        }
        l && Y && Ea.alternate === null && t(y, Y),
          (h = n(Ea, h, B)),
          w === null ? (H = Ea) : (w.sibling = Ea),
          (w = Ea),
          (Y = Nl);
      }
      if (I.done) return a(y, Y), P && Ra(y, B), H;
      if (Y === null) {
        for (; !I.done; B++, I = g.next())
          (I = _(y, I.value, A)),
            I !== null &&
              ((h = n(I, h, B)),
              w === null ? (H = I) : (w.sibling = I),
              (w = I));
        return P && Ra(y, B), H;
      }
      for (Y = u(Y); !I.done; B++, I = g.next())
        (I = T(Y, y, B, I.value, A)),
          I !== null &&
            (l && I.alternate !== null && Y.delete(I.key === null ? B : I.key),
            (h = n(I, h, B)),
            w === null ? (H = I) : (w.sibling = I),
            (w = I));
      return (
        l &&
          Y.forEach(function (_d) {
            return t(y, _d);
          }),
        P && Ra(y, B),
        H
      );
    }
    function gl(y, h, g, A) {
      if (
        (typeof g == "object" &&
          g !== null &&
          g.type === p &&
          g.key === null &&
          (g = g.props.children),
        typeof g == "object" && g !== null)
      ) {
        switch (g.$$typeof) {
          case D:
            l: {
              for (var H = g.key; h !== null; ) {
                if (h.key === H) {
                  if (((H = g.type), H === p)) {
                    if (h.tag === 7) {
                      a(y, h.sibling),
                        (A = e(h, g.props.children)),
                        (A.return = y),
                        (y = A);
                      break l;
                    }
                  } else if (
                    h.elementType === H ||
                    (typeof H == "object" &&
                      H !== null &&
                      H.$$typeof === bl &&
                      gs(H) === h.type)
                  ) {
                    a(y, h.sibling),
                      (A = e(h, g.props)),
                      Ju(A, g),
                      (A.return = y),
                      (y = A);
                    break l;
                  }
                  a(y, h);
                  break;
                } else t(y, h);
                h = h.sibling;
              }
              g.type === p
                ? ((A = Qa(g.props.children, y.mode, A, g.key)),
                  (A.return = y),
                  (y = A))
                : ((A = mn(g.type, g.key, g.props, null, y.mode, A)),
                  Ju(A, g),
                  (A.return = y),
                  (y = A));
            }
            return i(y);
          case N:
            l: {
              for (H = g.key; h !== null; ) {
                if (h.key === H)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === g.containerInfo &&
                    h.stateNode.implementation === g.implementation
                  ) {
                    a(y, h.sibling),
                      (A = e(h, g.children || [])),
                      (A.return = y),
                      (y = A);
                    break l;
                  } else {
                    a(y, h);
                    break;
                  }
                else t(y, h);
                h = h.sibling;
              }
              (A = yf(g, y.mode, A)), (A.return = y), (y = A);
            }
            return i(y);
          case bl:
            return (H = g._init), (g = H(g._payload)), gl(y, h, g, A);
        }
        if (x(g)) return q(y, h, g, A);
        if (Vl(g)) {
          if (((H = Vl(g)), typeof H != "function")) throw Error(r(150));
          return (g = H.call(g)), X(y, h, g, A);
        }
        if (typeof g.then == "function") return gl(y, h, ke(g), A);
        if (g.$$typeof === ol) return gl(y, h, dn(y, g), A);
        Fe(y, g);
      }
      return (typeof g == "string" && g !== "") ||
        typeof g == "number" ||
        typeof g == "bigint"
        ? ((g = "" + g),
          h !== null && h.tag === 6
            ? (a(y, h.sibling), (A = e(h, g)), (A.return = y), (y = A))
            : (a(y, h), (A = vf(g, y.mode, A)), (A.return = y), (y = A)),
          i(y))
        : a(y, h);
    }
    return function (y, h, g, A) {
      try {
        wu = 0;
        var H = gl(y, h, g, A);
        return (iu = null), H;
      } catch (Y) {
        if (Y === Lu) throw Y;
        var w = dt(29, Y, null, y.mode);
        return (w.lanes = A), (w.return = y), w;
      } finally {
      }
    };
  }
  var Ha = Ss(!0),
    bs = Ss(!1),
    fu = ul(null),
    Pe = ul(0);
  function Es(l, t) {
    (l = wt), hl(Pe, l), hl(fu, t), (wt = l | t.baseLanes);
  }
  function Ei() {
    hl(Pe, wt), hl(fu, fu.current);
  }
  function Ti() {
    (wt = Pe.current), El(fu), El(Pe);
  }
  var rt = ul(null),
    _t = null;
  function aa(l) {
    var t = l.alternate;
    hl(Ol, Ol.current & 1),
      hl(rt, l),
      _t === null &&
        (t === null || fu.current !== null || t.memoizedState !== null) &&
        (_t = l);
  }
  function Ts(l) {
    if (l.tag === 22) {
      if ((hl(Ol, Ol.current), hl(rt, l), _t === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (_t = l);
      }
    } else ua();
  }
  function ua() {
    hl(Ol, Ol.current), hl(rt, rt.current);
  }
  function Bt(l) {
    El(rt), _t === l && (_t = null), El(Ol);
  }
  var Ol = ul(0);
  function Ie(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var hh =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  l.push(u);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                });
            };
          },
    dh = E.unstable_scheduleCallback,
    vh = E.unstable_NormalPriority,
    _l = {
      $$typeof: ol,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function zi() {
    return { controller: new hh(), data: new Map(), refCount: 0 };
  }
  function Wu(l) {
    l.refCount--,
      l.refCount === 0 &&
        dh(vh, function () {
          l.controller.abort();
        });
  }
  var $u = null,
    Ai = 0,
    cu = 0,
    su = null;
  function yh(l, t) {
    if ($u === null) {
      var a = ($u = []);
      (Ai = 0),
        (cu = Uf()),
        (su = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        });
    }
    return Ai++, t.then(zs, zs), t;
  }
  function zs() {
    if (--Ai === 0 && $u !== null) {
      su !== null && (su.status = "fulfilled");
      var l = $u;
      ($u = null), (cu = 0), (su = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function mh(l, t) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          a.push(e);
        },
      };
    return (
      l.then(
        function () {
          (u.status = "fulfilled"), (u.value = t);
          for (var e = 0; e < a.length; e++) (0, a[e])(t);
        },
        function (e) {
          for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
            (0, a[e])(void 0);
        }
      ),
      u
    );
  }
  var As = G.S;
  G.S = function (l, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      yh(l, t),
      As !== null && As(l, t);
  };
  var Na = ul(null);
  function Oi() {
    var l = Na.current;
    return l !== null ? l : sl.pooledCache;
  }
  function ln(l, t) {
    t === null ? hl(Na, Na.current) : hl(Na, t.pool);
  }
  function Os() {
    var l = Oi();
    return l === null ? null : { parent: _l._currentValue, pool: l };
  }
  var ea = 0,
    K = null,
    nl = null,
    Tl = null,
    tn = !1,
    ru = !1,
    qa = !1,
    an = 0,
    ku = 0,
    ou = null,
    gh = 0;
  function Sl() {
    throw Error(r(321));
  }
  function _i(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Fl(l[a], t[a])) return !1;
    return !0;
  }
  function Mi(l, t, a, u, e, n) {
    return (
      (ea = n),
      (K = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (G.H = l === null || l.memoizedState === null ? Ya : na),
      (qa = !1),
      (n = a(u, e)),
      (qa = !1),
      ru && (n = Ms(t, a, u, e)),
      _s(l),
      n
    );
  }
  function _s(l) {
    G.H = Mt;
    var t = nl !== null && nl.next !== null;
    if (((ea = 0), (Tl = nl = K = null), (tn = !1), (ku = 0), (ou = null), t))
      throw Error(r(300));
    l === null ||
      Ul ||
      ((l = l.dependencies), l !== null && hn(l) && (Ul = !0));
  }
  function Ms(l, t, a, u) {
    K = l;
    var e = 0;
    do {
      if ((ru && (ou = null), (ku = 0), (ru = !1), 25 <= e))
        throw Error(r(301));
      if (((e += 1), (Tl = nl = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (G.H = xa), (n = t(a, u));
    } while (ru);
    return n;
  }
  function Sh() {
    var l = G.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Fu(t) : t),
      (l = l.useState()[0]),
      (nl !== null ? nl.memoizedState : null) !== l && (K.flags |= 1024),
      t
    );
  }
  function Di() {
    var l = an !== 0;
    return (an = 0), l;
  }
  function pi(l, t, a) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a);
  }
  function Ri(l) {
    if (tn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      tn = !1;
    }
    (ea = 0), (Tl = nl = K = null), (ru = !1), (ku = an = 0), (ou = null);
  }
  function Jl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Tl === null ? (K.memoizedState = Tl = l) : (Tl = Tl.next = l), Tl;
  }
  function zl() {
    if (nl === null) {
      var l = K.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = nl.next;
    var t = Tl === null ? K.memoizedState : Tl.next;
    if (t !== null) (Tl = t), (nl = l);
    else {
      if (l === null)
        throw K.alternate === null ? Error(r(467)) : Error(r(310));
      (nl = l),
        (l = {
          memoizedState: nl.memoizedState,
          baseState: nl.baseState,
          baseQueue: nl.baseQueue,
          queue: nl.queue,
          next: null,
        }),
        Tl === null ? (K.memoizedState = Tl = l) : (Tl = Tl.next = l);
    }
    return Tl;
  }
  var un;
  un = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Fu(l) {
    var t = ku;
    return (
      (ku += 1),
      ou === null && (ou = []),
      (l = ys(ou, l, t)),
      (t = K),
      (Tl === null ? t.memoizedState : Tl.next) === null &&
        ((t = t.alternate),
        (G.H = t === null || t.memoizedState === null ? Ya : na)),
      l
    );
  }
  function en(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Fu(l);
      if (l.$$typeof === ol) return Cl(l);
    }
    throw Error(r(438, String(l)));
  }
  function Ui(l) {
    var t = null,
      a = K.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var u = K.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (t = {
              data: u.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = un()), (K.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = mt;
    return t.index++, a;
  }
  function Gt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function nn(l) {
    var t = zl();
    return Hi(t, nl, l);
  }
  function Hi(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(r(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var i = e.next;
        (e.next = n.next), (n.next = i);
      }
      (t.baseQueue = e = n), (u.pending = null);
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var f = (i = null),
        c = null,
        d = t,
        z = !1;
      do {
        var _ = d.lane & -536870913;
        if (_ !== d.lane ? (F & _) === _ : (ea & _) === _) {
          var S = d.revertLane;
          if (S === 0)
            c !== null &&
              (c = c.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: d.action,
                  hasEagerState: d.hasEagerState,
                  eagerState: d.eagerState,
                  next: null,
                }),
              _ === cu && (z = !0);
          else if ((ea & S) === S) {
            (d = d.next), S === cu && (z = !0);
            continue;
          } else
            (_ = {
              lane: 0,
              revertLane: d.revertLane,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
              c === null ? ((f = c = _), (i = n)) : (c = c.next = _),
              (K.lanes |= S),
              (va |= S);
          (_ = d.action),
            qa && a(n, _),
            (n = d.hasEagerState ? d.eagerState : a(n, _));
        } else
          (S = {
            lane: _,
            revertLane: d.revertLane,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null,
          }),
            c === null ? ((f = c = S), (i = n)) : (c = c.next = S),
            (K.lanes |= _),
            (va |= _);
        d = d.next;
      } while (d !== null && d !== t);
      if (
        (c === null ? (i = n) : (c.next = f),
        !Fl(n, l.memoizedState) && ((Ul = !0), z && ((a = su), a !== null)))
      )
        throw a;
      (l.memoizedState = n),
        (l.baseState = i),
        (l.baseQueue = c),
        (u.lastRenderedState = n);
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function Ni(l) {
    var t = zl(),
      a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch,
      e = a.pending,
      n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var i = (e = e.next);
      do (n = l(n, i.action)), (i = i.next);
      while (i !== e);
      Fl(n, t.memoizedState) || (Ul = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n);
    }
    return [n, u];
  }
  function Ds(l, t, a) {
    var u = K,
      e = zl(),
      n = P;
    if (n) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = t();
    var i = !Fl((nl || e).memoizedState, a);
    if (
      (i && ((e.memoizedState = a), (Ul = !0)),
      (e = e.queue),
      xi(Us.bind(null, u, e, l), [l]),
      e.getSnapshot !== t || i || (Tl !== null && Tl.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        hu(9, Rs.bind(null, u, e, a, t), { destroy: void 0 }, null),
        sl === null)
      )
        throw Error(r(349));
      n || ea & 60 || ps(u, t, a);
    }
    return a;
  }
  function ps(l, t, a) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = K.updateQueue),
      t === null
        ? ((t = un()), (K.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l));
  }
  function Rs(l, t, a, u) {
    (t.value = a), (t.getSnapshot = u), Hs(t) && Ns(l);
  }
  function Us(l, t, a) {
    return a(function () {
      Hs(t) && Ns(l);
    });
  }
  function Hs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Fl(l, a);
    } catch {
      return !0;
    }
  }
  function Ns(l) {
    var t = ta(l, 2);
    t !== null && Zl(t, l, 2);
  }
  function qi(l) {
    var t = Jl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), qa)) {
        Pt(!0);
        try {
          a();
        } finally {
          Pt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function qs(l, t, a, u) {
    return (l.baseState = a), Hi(l, nl, typeof u == "function" ? u : Gt);
  }
  function bh(l, t, a, u, e) {
    if (sn(l)) throw Error(r(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      G.T !== null ? a(!0) : (n.isTransition = !1),
        u(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), Ys(t, n))
          : ((n.next = a.next), (t.pending = a.next = n));
    }
  }
  function Ys(l, t) {
    var a = t.action,
      u = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = G.T,
        i = {};
      G.T = i;
      try {
        var f = a(e, u),
          c = G.S;
        c !== null && c(i, f), xs(l, t, f);
      } catch (d) {
        Yi(l, t, d);
      } finally {
        G.T = n;
      }
    } else
      try {
        (n = a(e, u)), xs(l, t, n);
      } catch (d) {
        Yi(l, t, d);
      }
  }
  function xs(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            Bs(l, t, u);
          },
          function (u) {
            return Yi(l, t, u);
          }
        )
      : Bs(l, t, a);
  }
  function Bs(l, t, a) {
    (t.status = "fulfilled"),
      (t.value = a),
      Gs(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), Ys(l, a)));
  }
  function Yi(l, t, a) {
    var u = l.pending;
    if (((l.pending = null), u !== null)) {
      u = u.next;
      do (t.status = "rejected"), (t.reason = a), Gs(t), (t = t.next);
      while (t !== u);
    }
    l.action = null;
  }
  function Gs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Cs(l, t) {
    return t;
  }
  function js(l, t) {
    if (P) {
      var a = sl.formState;
      if (a !== null) {
        l: {
          var u = K;
          if (P) {
            if (Yl) {
              t: {
                for (var e = Yl, n = Ot; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = Et(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                (n = e.data), (e = n === "F!" || n === "F" ? e : null);
              }
              if (e) {
                (Yl = Et(e.nextSibling)), (u = e.data === "F!");
                break l;
              }
            }
            Ua(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return (
      (a = Jl()),
      (a.memoizedState = a.baseState = t),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Cs,
        lastRenderedState: t,
      }),
      (a.queue = u),
      (a = ur.bind(null, K, u)),
      (u.dispatch = a),
      (u = qi(!1)),
      (n = Qi.bind(null, K, !1, u.queue)),
      (u = Jl()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (u.queue = e),
      (a = bh.bind(null, K, e, n, a)),
      (e.dispatch = a),
      (u.memoizedState = l),
      [t, a, !1]
    );
  }
  function Qs(l) {
    var t = zl();
    return Xs(t, nl, l);
  }
  function Xs(l, t, a) {
    (t = Hi(l, t, Cs)[0]),
      (l = nn(Gt)[0]),
      (t =
        typeof t == "object" && t !== null && typeof t.then == "function"
          ? Fu(t)
          : t);
    var u = zl(),
      e = u.queue,
      n = e.dispatch;
    return (
      a !== u.memoizedState &&
        ((K.flags |= 2048),
        hu(9, Eh.bind(null, e, a), { destroy: void 0 }, null)),
      [t, n, l]
    );
  }
  function Eh(l, t) {
    l.action = t;
  }
  function Zs(l) {
    var t = zl(),
      a = nl;
    if (a !== null) return Xs(t, a, l);
    zl(), (t = t.memoizedState), (a = zl());
    var u = a.queue.dispatch;
    return (a.memoizedState = l), [t, u, !1];
  }
  function hu(l, t, a, u) {
    return (
      (l = { tag: l, create: t, inst: a, deps: u, next: null }),
      (t = K.updateQueue),
      t === null && ((t = un()), (K.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((u = a.next), (a.next = l), (l.next = u), (t.lastEffect = l)),
      l
    );
  }
  function Vs() {
    return zl().memoizedState;
  }
  function fn(l, t, a, u) {
    var e = Jl();
    (K.flags |= l),
      (e.memoizedState = hu(
        1 | t,
        a,
        { destroy: void 0 },
        u === void 0 ? null : u
      ));
  }
  function cn(l, t, a, u) {
    var e = zl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    nl !== null && u !== null && _i(u, nl.memoizedState.deps)
      ? (e.memoizedState = hu(t, a, n, u))
      : ((K.flags |= l), (e.memoizedState = hu(1 | t, a, n, u)));
  }
  function Ls(l, t) {
    fn(8390656, 8, l, t);
  }
  function xi(l, t) {
    cn(2048, 8, l, t);
  }
  function Ks(l, t) {
    return cn(4, 2, l, t);
  }
  function ws(l, t) {
    return cn(4, 4, l, t);
  }
  function Js(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function Ws(l, t, a) {
    (a = a != null ? a.concat([l]) : null), cn(4, 4, Js.bind(null, t, l), a);
  }
  function Bi() {}
  function $s(l, t) {
    var a = zl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && _i(t, u[1]) ? u[0] : ((a.memoizedState = [l, t]), l);
  }
  function ks(l, t) {
    var a = zl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && _i(t, u[1])) return u[0];
    if (((u = l()), qa)) {
      Pt(!0);
      try {
        l();
      } finally {
        Pt(!1);
      }
    }
    return (a.memoizedState = [u, t]), u;
  }
  function Gi(l, t, a) {
    return a === void 0 || ea & 1073741824
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = Pr()), (K.lanes |= l), (va |= l), a);
  }
  function Fs(l, t, a, u) {
    return Fl(a, t)
      ? a
      : fu.current !== null
      ? ((l = Gi(l, a, u)), Fl(l, t) || (Ul = !0), l)
      : ea & 42
      ? ((l = Pr()), (K.lanes |= l), (va |= l), t)
      : ((Ul = !0), (l.memoizedState = a));
  }
  function Ps(l, t, a, u, e) {
    var n = U.p;
    U.p = n !== 0 && 8 > n ? n : 8;
    var i = G.T,
      f = {};
    (G.T = f), Qi(l, !1, t, a);
    try {
      var c = e(),
        d = G.S;
      if (
        (d !== null && d(f, c),
        c !== null && typeof c == "object" && typeof c.then == "function")
      ) {
        var z = mh(c, u);
        Pu(l, t, z, tt(l));
      } else Pu(l, t, u, tt(l));
    } catch (_) {
      Pu(l, t, { then: function () {}, status: "rejected", reason: _ }, tt());
    } finally {
      (U.p = n), (G.T = i);
    }
  }
  function Th() {}
  function Ci(l, t, a, u) {
    if (l.tag !== 5) throw Error(r(476));
    var e = Is(l).queue;
    Ps(
      l,
      e,
      t,
      k,
      a === null
        ? Th
        : function () {
            return lr(l), a(u);
          }
    );
  }
  function Is(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: k,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Gt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function lr(l) {
    var t = Is(l).next.queue;
    Pu(l, t, {}, tt());
  }
  function ji() {
    return Cl(Se);
  }
  function tr() {
    return zl().memoizedState;
  }
  function ar() {
    return zl().memoizedState;
  }
  function zh(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = tt();
          l = ca(a);
          var u = sa(t, l, a);
          u !== null && (Zl(u, t, a), te(u, t, a)),
            (t = { cache: zi() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Ah(l, t, a) {
    var u = tt();
    (a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      sn(l)
        ? er(t, a)
        : ((a = yi(l, t, a, u)), a !== null && (Zl(a, l, u), nr(a, t, u)));
  }
  function ur(l, t, a) {
    var u = tt();
    Pu(l, t, a, u);
  }
  function Pu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (sn(l)) er(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var i = t.lastRenderedState,
            f = n(i, a);
          if (((e.hasEagerState = !0), (e.eagerState = f), Fl(f, i)))
            return Ke(l, t, e, 0), sl === null && Le(), !1;
        } catch {
        } finally {
        }
      if (((a = yi(l, t, e, u)), a !== null))
        return Zl(a, l, u), nr(a, t, u), !0;
    }
    return !1;
  }
  function Qi(l, t, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: Uf(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      sn(l))
    ) {
      if (t) throw Error(r(479));
    } else (t = yi(l, a, u, 2)), t !== null && Zl(t, l, 2);
  }
  function sn(l) {
    var t = l.alternate;
    return l === K || (t !== null && t === K);
  }
  function er(l, t) {
    ru = tn = !0;
    var a = l.pending;
    a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t);
  }
  function nr(l, t, a) {
    if (a & 4194176) {
      var u = t.lanes;
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), mc(l, a);
    }
  }
  var Mt = {
    readContext: Cl,
    use: en,
    useCallback: Sl,
    useContext: Sl,
    useEffect: Sl,
    useImperativeHandle: Sl,
    useLayoutEffect: Sl,
    useInsertionEffect: Sl,
    useMemo: Sl,
    useReducer: Sl,
    useRef: Sl,
    useState: Sl,
    useDebugValue: Sl,
    useDeferredValue: Sl,
    useTransition: Sl,
    useSyncExternalStore: Sl,
    useId: Sl,
  };
  (Mt.useCacheRefresh = Sl),
    (Mt.useMemoCache = Sl),
    (Mt.useHostTransitionStatus = Sl),
    (Mt.useFormState = Sl),
    (Mt.useActionState = Sl),
    (Mt.useOptimistic = Sl);
  var Ya = {
    readContext: Cl,
    use: en,
    useCallback: function (l, t) {
      return (Jl().memoizedState = [l, t === void 0 ? null : t]), l;
    },
    useContext: Cl,
    useEffect: Ls,
    useImperativeHandle: function (l, t, a) {
      (a = a != null ? a.concat([l]) : null),
        fn(4194308, 4, Js.bind(null, t, l), a);
    },
    useLayoutEffect: function (l, t) {
      return fn(4194308, 4, l, t);
    },
    useInsertionEffect: function (l, t) {
      fn(4, 2, l, t);
    },
    useMemo: function (l, t) {
      var a = Jl();
      t = t === void 0 ? null : t;
      var u = l();
      if (qa) {
        Pt(!0);
        try {
          l();
        } finally {
          Pt(!1);
        }
      }
      return (a.memoizedState = [u, t]), u;
    },
    useReducer: function (l, t, a) {
      var u = Jl();
      if (a !== void 0) {
        var e = a(t);
        if (qa) {
          Pt(!0);
          try {
            a(t);
          } finally {
            Pt(!1);
          }
        }
      } else e = t;
      return (
        (u.memoizedState = u.baseState = e),
        (l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: l,
          lastRenderedState: e,
        }),
        (u.queue = l),
        (l = l.dispatch = Ah.bind(null, K, l)),
        [u.memoizedState, l]
      );
    },
    useRef: function (l) {
      var t = Jl();
      return (l = { current: l }), (t.memoizedState = l);
    },
    useState: function (l) {
      l = qi(l);
      var t = l.queue,
        a = ur.bind(null, K, t);
      return (t.dispatch = a), [l.memoizedState, a];
    },
    useDebugValue: Bi,
    useDeferredValue: function (l, t) {
      var a = Jl();
      return Gi(a, l, t);
    },
    useTransition: function () {
      var l = qi(!1);
      return (
        (l = Ps.bind(null, K, l.queue, !0, !1)),
        (Jl().memoizedState = l),
        [!1, l]
      );
    },
    useSyncExternalStore: function (l, t, a) {
      var u = K,
        e = Jl();
      if (P) {
        if (a === void 0) throw Error(r(407));
        a = a();
      } else {
        if (((a = t()), sl === null)) throw Error(r(349));
        F & 60 || ps(u, t, a);
      }
      e.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return (
        (e.queue = n),
        Ls(Us.bind(null, u, n, l), [l]),
        (u.flags |= 2048),
        hu(9, Rs.bind(null, u, n, a, t), { destroy: void 0 }, null),
        a
      );
    },
    useId: function () {
      var l = Jl(),
        t = sl.identifierPrefix;
      if (P) {
        var a = xt,
          u = Yt;
        (a = (u & ~(1 << (32 - kl(u) - 1))).toString(32) + a),
          (t = ":" + t + "R" + a),
          (a = an++),
          0 < a && (t += "H" + a.toString(32)),
          (t += ":");
      } else (a = gh++), (t = ":" + t + "r" + a.toString(32) + ":");
      return (l.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (Jl().memoizedState = zh.bind(null, K));
    },
  };
  (Ya.useMemoCache = Ui),
    (Ya.useHostTransitionStatus = ji),
    (Ya.useFormState = js),
    (Ya.useActionState = js),
    (Ya.useOptimistic = function (l) {
      var t = Jl();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = a), (t = Qi.bind(null, K, !0, a)), (a.dispatch = t), [l, t]
      );
    });
  var na = {
    readContext: Cl,
    use: en,
    useCallback: $s,
    useContext: Cl,
    useEffect: xi,
    useImperativeHandle: Ws,
    useInsertionEffect: Ks,
    useLayoutEffect: ws,
    useMemo: ks,
    useReducer: nn,
    useRef: Vs,
    useState: function () {
      return nn(Gt);
    },
    useDebugValue: Bi,
    useDeferredValue: function (l, t) {
      var a = zl();
      return Fs(a, nl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = nn(Gt)[0],
        t = zl().memoizedState;
      return [typeof l == "boolean" ? l : Fu(l), t];
    },
    useSyncExternalStore: Ds,
    useId: tr,
  };
  (na.useCacheRefresh = ar),
    (na.useMemoCache = Ui),
    (na.useHostTransitionStatus = ji),
    (na.useFormState = Qs),
    (na.useActionState = Qs),
    (na.useOptimistic = function (l, t) {
      var a = zl();
      return qs(a, nl, l, t);
    });
  var xa = {
    readContext: Cl,
    use: en,
    useCallback: $s,
    useContext: Cl,
    useEffect: xi,
    useImperativeHandle: Ws,
    useInsertionEffect: Ks,
    useLayoutEffect: ws,
    useMemo: ks,
    useReducer: Ni,
    useRef: Vs,
    useState: function () {
      return Ni(Gt);
    },
    useDebugValue: Bi,
    useDeferredValue: function (l, t) {
      var a = zl();
      return nl === null ? Gi(a, l, t) : Fs(a, nl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = Ni(Gt)[0],
        t = zl().memoizedState;
      return [typeof l == "boolean" ? l : Fu(l), t];
    },
    useSyncExternalStore: Ds,
    useId: tr,
  };
  (xa.useCacheRefresh = ar),
    (xa.useMemoCache = Ui),
    (xa.useHostTransitionStatus = ji),
    (xa.useFormState = Zs),
    (xa.useActionState = Zs),
    (xa.useOptimistic = function (l, t) {
      var a = zl();
      return nl !== null
        ? qs(a, nl, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    });
  function Xi(l, t, a, u) {
    (t = l.memoizedState),
      (a = a(u, t)),
      (a = a == null ? t : tl({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var Zi = {
    isMounted: function (l) {
      return (l = l._reactInternals) ? j(l) === l : !1;
    },
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var u = tt(),
        e = ca(u);
      (e.payload = t),
        a != null && (e.callback = a),
        (t = sa(l, e, u)),
        t !== null && (Zl(t, l, u), te(t, l, u));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var u = tt(),
        e = ca(u);
      (e.tag = 1),
        (e.payload = t),
        a != null && (e.callback = a),
        (t = sa(l, e, u)),
        t !== null && (Zl(t, l, u), te(t, l, u));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = tt(),
        u = ca(a);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = sa(l, u, a)),
        t !== null && (Zl(t, l, a), te(t, l, a));
    },
  };
  function ir(l, t, a, u, e, n, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(u, n, i)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ju(a, u) || !ju(e, n)
        : !0
    );
  }
  function fr(l, t, a, u) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, u),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, u),
      t.state !== l && Zi.enqueueReplaceState(t, t.state, null);
  }
  function Ba(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = tl({}, a));
      for (var e in l) a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  var rn =
    typeof reportError == "function"
      ? reportError
      : function (l) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == "object" &&
                l !== null &&
                typeof l.message == "string"
                  ? String(l.message)
                  : String(l),
              error: l,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", l);
            return;
          }
          console.error(l);
        };
  function cr(l) {
    rn(l);
  }
  function sr(l) {
    console.error(l);
  }
  function rr(l) {
    rn(l);
  }
  function on(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function or(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function Vi(l, t, a) {
    return (
      (a = ca(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        on(l, t);
      }),
      a
    );
  }
  function hr(l) {
    return (l = ca(l)), (l.tag = 3), l;
  }
  function dr(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      (l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          or(t, a, u);
        });
    }
    var i = a.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        or(t, a, u),
          typeof e != "function" &&
            (ya === null ? (ya = new Set([this])) : ya.add(this));
        var f = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function Oh(l, t, a, u, e) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && le(t, a, e, !0),
        (a = rt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              _t === null ? _f() : a.alternate === null && ml === 0 && (ml = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = e),
              u === bi
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([u])) : t.add(u),
                  Df(l, u, e)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === bi
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([u])) : a.add(u)),
                  Df(l, u, e)),
              !1
            );
        }
        throw Error(r(435, a.tag));
      }
      return Df(l, u, e), _f(), !1;
    }
    if (P)
      return (
        (t = rt.current),
        t !== null
          ? (!(t.flags & 65536) && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            u !== Si && ((l = Error(r(422), { cause: u })), Vu(ft(l, a))))
          : (u !== Si && ((t = Error(r(423), { cause: u })), Vu(ft(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (u = ft(u, a)),
            (e = Vi(l.stateNode, u, e)),
            ef(l, e),
            ml !== 4 && (ml = 2)),
        !1
      );
    var n = Error(r(520), { cause: u });
    if (
      ((n = ft(n, a)),
      se === null ? (se = [n]) : se.push(n),
      ml !== 4 && (ml = 2),
      t === null)
    )
      return !0;
    (u = ft(u, a)), (a = t);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = e & -e),
            (a.lanes |= l),
            (l = Vi(a.stateNode, u, l)),
            ef(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ya === null || !ya.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (e &= -e),
              (a.lanes |= e),
              (e = hr(e)),
              dr(e, l, a, u),
              ef(a, e),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var vr = Error(r(461)),
    Ul = !1;
  function xl(l, t, a, u) {
    t.child = l === null ? bs(t, null, a, u) : Ha(t, l.child, a, u);
  }
  function yr(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var i = {};
      for (var f in u) f !== "ref" && (i[f] = u[f]);
    } else i = u;
    return (
      Ca(t),
      (u = Mi(l, t, a, i, n, e)),
      (f = Di()),
      l !== null && !Ul
        ? (pi(l, t, e), Ct(l, t, e))
        : (P && f && mi(t), (t.flags |= 1), xl(l, t, u, e), t.child)
    );
  }
  function mr(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !df(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), gr(l, t, n, u, e))
        : ((l = mn(a.type, null, u, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !Pi(l, e))) {
      var i = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : ju), a(i, u) && l.ref === t.ref)
      )
        return Ct(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = da(n, u)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function gr(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (ju(n, u) && l.ref === t.ref)
        if (((Ul = !1), (t.pendingProps = u = n), Pi(l, e)))
          l.flags & 131072 && (Ul = !0);
        else return (t.lanes = l.lanes), Ct(l, t, e);
    }
    return Li(l, t, a, u, e);
  }
  function Sr(l, t, a) {
    var u = t.pendingProps,
      e = u.children,
      n = (t.stateNode._pendingVisibility & 2) !== 0,
      i = l !== null ? l.memoizedState : null;
    if ((Iu(l, t), u.mode === "hidden" || n)) {
      if (t.flags & 128) {
        if (((u = i !== null ? i.baseLanes | a : a), l !== null)) {
          for (e = t.child = l.child, n = 0; e !== null; )
            (n = n | e.lanes | e.childLanes), (e = e.sibling);
          t.childLanes = n & ~u;
        } else (t.childLanes = 0), (t.child = null);
        return br(l, t, u, a);
      }
      if (a & 536870912)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && ln(t, i !== null ? i.cachePool : null),
          i !== null ? Es(t, i) : Ei(),
          Ts(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          br(l, t, i !== null ? i.baseLanes | a : a, a)
        );
    } else
      i !== null
        ? (ln(t, i.cachePool), Es(t, i), ua(), (t.memoizedState = null))
        : (l !== null && ln(t, null), Ei(), ua());
    return xl(l, t, e, a), t.child;
  }
  function br(l, t, a, u) {
    var e = Oi();
    return (
      (e = e === null ? null : { parent: _l._currentValue, pool: e }),
      (t.memoizedState = { baseLanes: a, cachePool: e }),
      l !== null && ln(t, null),
      Ei(),
      Ts(t),
      l !== null && le(l, t, u, !0),
      null
    );
  }
  function Iu(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(r(284));
      (l === null || l.ref !== a) && (t.flags |= 2097664);
    }
  }
  function Li(l, t, a, u, e) {
    return (
      Ca(t),
      (a = Mi(l, t, a, u, void 0, e)),
      (u = Di()),
      l !== null && !Ul
        ? (pi(l, t, e), Ct(l, t, e))
        : (P && u && mi(t), (t.flags |= 1), xl(l, t, a, e), t.child)
    );
  }
  function Er(l, t, a, u, e, n) {
    return (
      Ca(t),
      (t.updateQueue = null),
      (a = Ms(t, u, a, e)),
      _s(l),
      (u = Di()),
      l !== null && !Ul
        ? (pi(l, t, n), Ct(l, t, n))
        : (P && u && mi(t), (t.flags |= 1), xl(l, t, a, n), t.child)
    );
  }
  function Tr(l, t, a, u, e) {
    if ((Ca(t), t.stateNode === null)) {
      var n = uu,
        i = a.contextType;
      typeof i == "object" && i !== null && (n = Cl(i)),
        (n = new a(u, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = Zi),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = u),
        (n.state = t.memoizedState),
        (n.refs = {}),
        af(t),
        (i = a.contextType),
        (n.context = typeof i == "object" && i !== null ? Cl(i) : uu),
        (n.state = t.memoizedState),
        (i = a.getDerivedStateFromProps),
        typeof i == "function" && (Xi(t, a, i, u), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && Zi.enqueueReplaceState(n, n.state, null),
          ue(t, u, n, e),
          ae(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (u = !0);
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps,
        c = Ba(a, f);
      n.props = c;
      var d = n.context,
        z = a.contextType;
      (i = uu), typeof z == "object" && z !== null && (i = Cl(z));
      var _ = a.getDerivedStateFromProps;
      (z =
        typeof _ == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (f = t.pendingProps !== f),
        z ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f || d !== i) && fr(t, n, u, i)),
        (fa = !1);
      var S = t.memoizedState;
      (n.state = S),
        ue(t, u, n, e),
        ae(),
        (d = t.memoizedState),
        f || S !== d || fa
          ? (typeof _ == "function" && (Xi(t, a, _, u), (d = t.memoizedState)),
            (c = fa || ir(t, a, c, u, S, d, i))
              ? (z ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = d)),
            (n.props = u),
            (n.state = d),
            (n.context = i),
            (u = c))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (u = !1));
    } else {
      (n = t.stateNode),
        uf(l, t),
        (i = t.memoizedProps),
        (z = Ba(a, i)),
        (n.props = z),
        (_ = t.pendingProps),
        (S = n.context),
        (d = a.contextType),
        (c = uu),
        typeof d == "object" && d !== null && (c = Cl(d)),
        (f = a.getDerivedStateFromProps),
        (d =
          typeof f == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== _ || S !== c) && fr(t, n, u, c)),
        (fa = !1),
        (S = t.memoizedState),
        (n.state = S),
        ue(t, u, n, e),
        ae();
      var T = t.memoizedState;
      i !== _ ||
      S !== T ||
      fa ||
      (l !== null && l.dependencies !== null && hn(l.dependencies))
        ? (typeof f == "function" && (Xi(t, a, f, u), (T = t.memoizedState)),
          (z =
            fa ||
            ir(t, a, z, u, S, T, c) ||
            (l !== null && l.dependencies !== null && hn(l.dependencies)))
            ? (d ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, T, c),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, T, c)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === l.memoizedProps && S === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && S === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = T)),
          (n.props = u),
          (n.state = T),
          (n.context = c),
          (u = z))
        : (typeof n.componentDidUpdate != "function" ||
            (i === l.memoizedProps && S === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && S === l.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      Iu(l, t),
      (u = (t.flags & 128) !== 0),
      n || u
        ? ((n = t.stateNode),
          (a =
            u && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && u
            ? ((t.child = Ha(t, l.child, null, e)),
              (t.child = Ha(t, null, a, e)))
            : xl(l, t, a, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Ct(l, t, e)),
      l
    );
  }
  function zr(l, t, a, u) {
    return Zu(), (t.flags |= 256), xl(l, t, a, u), t.child;
  }
  var Ki = { dehydrated: null, treeContext: null, retryLane: 0 };
  function wi(l) {
    return { baseLanes: l, cachePool: Os() };
  }
  function Ji(l, t, a) {
    return (l = l !== null ? l.childLanes & ~a : 0), t && (l |= vt), l;
  }
  function Ar(l, t, a) {
    var u = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (Ol.current & 2) !== 0),
      i && ((e = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (P) {
        if ((e ? aa(t) : ua(), P)) {
          var f = Yl,
            c;
          if ((c = f)) {
            l: {
              for (c = f, f = Ot; c.nodeType !== 8; ) {
                if (!f) {
                  f = null;
                  break l;
                }
                if (((c = Et(c.nextSibling)), c === null)) {
                  f = null;
                  break l;
                }
              }
              f = c;
            }
            f !== null
              ? ((t.memoizedState = {
                  dehydrated: f,
                  treeContext: pa !== null ? { id: Yt, overflow: xt } : null,
                  retryLane: 536870912,
                }),
                (c = dt(18, null, null, 0)),
                (c.stateNode = f),
                (c.return = t),
                (t.child = c),
                (Xl = t),
                (Yl = null),
                (c = !0))
              : (c = !1);
          }
          c || Ua(t);
        }
        if (
          ((f = t.memoizedState),
          f !== null && ((f = f.dehydrated), f !== null))
        )
          return f.data === "$!" ? (t.lanes = 16) : (t.lanes = 536870912), null;
        Bt(t);
      }
      return (
        (f = u.children),
        (u = u.fallback),
        e
          ? (ua(),
            (e = t.mode),
            (f = $i({ mode: "hidden", children: f }, e)),
            (u = Qa(u, e, a, null)),
            (f.return = t),
            (u.return = t),
            (f.sibling = u),
            (t.child = f),
            (e = t.child),
            (e.memoizedState = wi(a)),
            (e.childLanes = Ji(l, i, a)),
            (t.memoizedState = Ki),
            u)
          : (aa(t), Wi(t, f))
      );
    }
    if (
      ((c = l.memoizedState), c !== null && ((f = c.dehydrated), f !== null))
    ) {
      if (n)
        t.flags & 256
          ? (aa(t), (t.flags &= -257), (t = ki(l, t, a)))
          : t.memoizedState !== null
          ? (ua(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (ua(),
            (e = u.fallback),
            (f = t.mode),
            (u = $i({ mode: "visible", children: u.children }, f)),
            (e = Qa(e, f, a, null)),
            (e.flags |= 2),
            (u.return = t),
            (e.return = t),
            (u.sibling = e),
            (t.child = u),
            Ha(t, l.child, null, a),
            (u = t.child),
            (u.memoizedState = wi(a)),
            (u.childLanes = Ji(l, i, a)),
            (t.memoizedState = Ki),
            (t = e));
      else if ((aa(t), f.data === "$!")) {
        if (((i = f.nextSibling && f.nextSibling.dataset), i)) var d = i.dgst;
        (i = d),
          (u = Error(r(419))),
          (u.stack = ""),
          (u.digest = i),
          Vu({ value: u, source: null, stack: null }),
          (t = ki(l, t, a));
      } else if (
        (Ul || le(l, t, a, !1), (i = (a & l.childLanes) !== 0), Ul || i)
      ) {
        if (((i = sl), i !== null)) {
          if (((u = a & -a), u & 42)) u = 1;
          else
            switch (u) {
              case 2:
                u = 1;
                break;
              case 8:
                u = 4;
                break;
              case 32:
                u = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                u = 64;
                break;
              case 268435456:
                u = 134217728;
                break;
              default:
                u = 0;
            }
          if (
            ((u = u & (i.suspendedLanes | a) ? 0 : u),
            u !== 0 && u !== c.retryLane)
          )
            throw ((c.retryLane = u), ta(l, u), Zl(i, l, u), vr);
        }
        f.data === "$?" || _f(), (t = ki(l, t, a));
      } else
        f.data === "$?"
          ? ((t.flags |= 128),
            (t.child = l.child),
            (t = jh.bind(null, l)),
            (f._reactRetry = t),
            (t = null))
          : ((l = c.treeContext),
            (Yl = Et(f.nextSibling)),
            (Xl = t),
            (P = !0),
            (St = null),
            (Ot = !1),
            l !== null &&
              ((ct[st++] = Yt),
              (ct[st++] = xt),
              (ct[st++] = pa),
              (Yt = l.id),
              (xt = l.overflow),
              (pa = t)),
            (t = Wi(t, u.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (ua(),
        (e = u.fallback),
        (f = t.mode),
        (c = l.child),
        (d = c.sibling),
        (u = da(c, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = c.subtreeFlags & 31457280),
        d !== null ? (e = da(d, e)) : ((e = Qa(e, f, a, null)), (e.flags |= 2)),
        (e.return = t),
        (u.return = t),
        (u.sibling = e),
        (t.child = u),
        (u = e),
        (e = t.child),
        (f = l.child.memoizedState),
        f === null
          ? (f = wi(a))
          : ((c = f.cachePool),
            c !== null
              ? ((d = _l._currentValue),
                (c = c.parent !== d ? { parent: d, pool: d } : c))
              : (c = Os()),
            (f = { baseLanes: f.baseLanes | a, cachePool: c })),
        (e.memoizedState = f),
        (e.childLanes = Ji(l, i, a)),
        (t.memoizedState = Ki),
        u)
      : (aa(t),
        (a = l.child),
        (l = a.sibling),
        (a = da(a, { mode: "visible", children: u.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function Wi(l, t) {
    return (
      (t = $i({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function $i(l, t) {
    return $r(l, t, 0, null);
  }
  function ki(l, t, a) {
    return (
      Ha(t, l.child, null, a),
      (l = Wi(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Or(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), lf(l.return, t, a);
  }
  function Fi(l, t, a, u, e) {
    var n = l.memoizedState;
    n === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: e,
        })
      : ((n.isBackwards = t),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = u),
        (n.tail = a),
        (n.tailMode = e));
  }
  function _r(l, t, a) {
    var u = t.pendingProps,
      e = u.revealOrder,
      n = u.tail;
    if ((xl(l, t, u.children, a), (u = Ol.current), u & 2))
      (u = (u & 1) | 2), (t.flags |= 128);
    else {
      if (l !== null && l.flags & 128)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && Or(l, a, t);
          else if (l.tag === 19) Or(l, a, t);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      u &= 1;
    }
    switch ((hl(Ol, u), e)) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          (l = a.alternate),
            l !== null && Ie(l) === null && (e = a),
            (a = a.sibling);
        (a = e),
          a === null
            ? ((e = t.child), (t.child = null))
            : ((e = a.sibling), (a.sibling = null)),
          Fi(t, !1, e, a, n);
        break;
      case "backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && Ie(l) === null)) {
            t.child = e;
            break;
          }
          (l = e.sibling), (e.sibling = a), (a = e), (e = l);
        }
        Fi(t, !0, a, null, n);
        break;
      case "together":
        Fi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ct(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (va |= t.lanes),
      !(a & t.childLanes))
    )
      if (l !== null) {
        if ((le(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        l = t.child, a = da(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (a = a.sibling = da(l, l.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
    return t.child;
  }
  function Pi(l, t) {
    return l.lanes & t ? !0 : ((l = l.dependencies), !!(l !== null && hn(l)));
  }
  function _h(l, t, a) {
    switch (t.tag) {
      case 3:
        De(t, t.stateNode.containerInfo),
          ia(t, _l, l.memoizedState.cache),
          Zu();
        break;
      case 27:
      case 5:
        Zn(t);
        break;
      case 4:
        De(t, t.stateNode.containerInfo);
        break;
      case 10:
        ia(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (aa(t), (t.flags |= 128), null)
            : a & t.child.childLanes
            ? Ar(l, t, a)
            : (aa(t), (l = Ct(l, t, a)), l !== null ? l.sibling : null);
        aa(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((u = (a & t.childLanes) !== 0),
          u || (le(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
          e)
        ) {
          if (u) return _r(l, t, a);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          hl(Ol, Ol.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Sr(l, t, a);
      case 24:
        ia(t, _l, l.memoizedState.cache);
    }
    return Ct(l, t, a);
  }
  function Mr(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Ul = !0;
      else {
        if (!Pi(l, a) && !(t.flags & 128)) return (Ul = !1), _h(l, t, a);
        Ul = !!(l.flags & 131072);
      }
    else (Ul = !1), P && t.flags & 1048576 && rs(t, We, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var u = t.elementType,
            e = u._init;
          if (((u = e(u._payload)), (t.type = u), typeof u == "function"))
            df(u)
              ? ((l = Ba(u, l)), (t.tag = 1), (t = Tr(null, t, u, l, a)))
              : ((t.tag = 0), (t = Li(null, t, u, l, a)));
          else {
            if (u != null) {
              if (((e = u.$$typeof), e === Ml)) {
                (t.tag = 11), (t = yr(null, t, u, l, a));
                break l;
              } else if (e === pl) {
                (t.tag = 14), (t = mr(null, t, u, l, a));
                break l;
              }
            }
            throw ((t = kt(u) || u), Error(r(306, t, "")));
          }
        }
        return t;
      case 0:
        return Li(l, t, t.type, t.pendingProps, a);
      case 1:
        return (u = t.type), (e = Ba(u, t.pendingProps)), Tr(l, t, u, e, a);
      case 3:
        l: {
          if ((De(t, t.stateNode.containerInfo), l === null))
            throw Error(r(387));
          var n = t.pendingProps;
          (e = t.memoizedState), (u = e.element), uf(l, t), ue(t, n, null, a);
          var i = t.memoizedState;
          if (
            ((n = i.cache),
            ia(t, _l, n),
            n !== e.cache && tf(t, [_l], a, !0),
            ae(),
            (n = i.element),
            e.isDehydrated)
          )
            if (
              ((e = { element: n, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = e),
              (t.memoizedState = e),
              t.flags & 256)
            ) {
              t = zr(l, t, n, a);
              break l;
            } else if (n !== u) {
              (u = ft(Error(r(424)), t)), Vu(u), (t = zr(l, t, n, a));
              break l;
            } else
              for (
                Yl = Et(t.stateNode.containerInfo.firstChild),
                  Xl = t,
                  P = !0,
                  St = null,
                  Ot = !0,
                  a = bs(t, null, n, a),
                  t.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
          else {
            if ((Zu(), n === u)) {
              t = Ct(l, t, a);
              break l;
            }
            xl(l, t, n, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Iu(l, t),
          l === null
            ? (a = Uo(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : P ||
                ((a = t.type),
                (l = t.pendingProps),
                (u = pn(Ft.current).createElement(a)),
                (u[Gl] = t),
                (u[Kl] = l),
                Bl(u, a, l),
                Rl(u),
                (t.stateNode = u))
            : (t.memoizedState = Uo(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          Zn(t),
          l === null &&
            P &&
            ((u = t.stateNode = Do(t.type, t.pendingProps, Ft.current)),
            (Xl = t),
            (Ot = !0),
            (Yl = Et(u.firstChild))),
          (u = t.pendingProps.children),
          l !== null || P ? xl(l, t, u, a) : (t.child = Ha(t, null, u, a)),
          Iu(l, t),
          t.child
        );
      case 5:
        return (
          l === null &&
            P &&
            ((e = u = Yl) &&
              ((u = td(u, t.type, t.pendingProps, Ot)),
              u !== null
                ? ((t.stateNode = u),
                  (Xl = t),
                  (Yl = Et(u.firstChild)),
                  (Ot = !1),
                  (e = !0))
                : (e = !1)),
            e || Ua(t)),
          Zn(t),
          (e = t.type),
          (n = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (u = n.children),
          jf(e, n) ? (u = null) : i !== null && jf(e, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Mi(l, t, Sh, null, null, a)), (Se._currentValue = e)),
          Iu(l, t),
          xl(l, t, u, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            P &&
            ((l = a = Yl) &&
              ((a = ad(a, t.pendingProps, Ot)),
              a !== null
                ? ((t.stateNode = a), (Xl = t), (Yl = null), (l = !0))
                : (l = !1)),
            l || Ua(t)),
          null
        );
      case 13:
        return Ar(l, t, a);
      case 4:
        return (
          De(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          l === null ? (t.child = Ha(t, null, u, a)) : xl(l, t, u, a),
          t.child
        );
      case 11:
        return yr(l, t, t.type, t.pendingProps, a);
      case 7:
        return xl(l, t, t.pendingProps, a), t.child;
      case 8:
        return xl(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return xl(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return (
          (u = t.pendingProps),
          ia(t, t.type, u.value),
          xl(l, t, u.children, a),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (u = t.pendingProps.children),
          Ca(t),
          (e = Cl(e)),
          (u = u(e)),
          (t.flags |= 1),
          xl(l, t, u, a),
          t.child
        );
      case 14:
        return mr(l, t, t.type, t.pendingProps, a);
      case 15:
        return gr(l, t, t.type, t.pendingProps, a);
      case 19:
        return _r(l, t, a);
      case 22:
        return Sr(l, t, a);
      case 24:
        return (
          Ca(t),
          (u = Cl(_l)),
          l === null
            ? ((e = Oi()),
              e === null &&
                ((e = sl),
                (n = zi()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= a),
                (e = n)),
              (t.memoizedState = { parent: u, cache: e }),
              af(t),
              ia(t, _l, e))
            : (l.lanes & a && (uf(l, t), ue(t, null, null, a), ae()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== u
                ? ((e = { parent: u, cache: u }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  ia(t, _l, u))
                : ((u = n.cache),
                  ia(t, _l, u),
                  u !== e.cache && tf(t, [_l], a, !0))),
          xl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  var Ii = ul(null),
    Ga = null,
    jt = null;
  function ia(l, t, a) {
    hl(Ii, t._currentValue), (t._currentValue = a);
  }
  function Qt(l) {
    (l._currentValue = Ii.current), El(Ii);
  }
  function lf(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function tf(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var i = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var f = n;
          n = e;
          for (var c = 0; c < t.length; c++)
            if (f.context === t[c]) {
              (n.lanes |= a),
                (f = n.alternate),
                f !== null && (f.lanes |= a),
                lf(n.return, a, l),
                u || (i = null);
              break l;
            }
          n = f.next;
        }
      } else if (e.tag === 18) {
        if (((i = e.return), i === null)) throw Error(r(341));
        (i.lanes |= a),
          (n = i.alternate),
          n !== null && (n.lanes |= a),
          lf(i, a, l),
          (i = null);
      } else i = e.child;
      if (i !== null) i.return = e;
      else
        for (i = e; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((e = i.sibling), e !== null)) {
            (e.return = i.return), (i = e);
            break;
          }
          i = i.return;
        }
      e = i;
    }
  }
  function le(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if (e.flags & 524288) n = !0;
        else if (e.flags & 262144) break;
      }
      if (e.tag === 10) {
        var i = e.alternate;
        if (i === null) throw Error(r(387));
        if (((i = i.memoizedProps), i !== null)) {
          var f = e.type;
          Fl(e.pendingProps.value, i.value) ||
            (l !== null ? l.push(f) : (l = [f]));
        }
      } else if (e === Me.current) {
        if (((i = e.alternate), i === null)) throw Error(r(387));
        i.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(Se) : (l = [Se]));
      }
      e = e.return;
    }
    l !== null && tf(t, l, a, u), (t.flags |= 262144);
  }
  function hn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Fl(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ca(l) {
    (Ga = l),
      (jt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Cl(l) {
    return Dr(Ga, l);
  }
  function dn(l, t) {
    return Ga === null && Ca(l), Dr(l, t);
  }
  function Dr(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), jt === null)) {
      if (l === null) throw Error(r(308));
      (jt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else jt = jt.next = t;
    return a;
  }
  var fa = !1;
  function af(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function uf(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function ca(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function sa(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), vl & 2)) {
      var e = u.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (u.pending = t),
        (t = we(l)),
        cs(l, null, a),
        t
      );
    }
    return Ke(l, u, t, a), we(l);
  }
  function te(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194176) !== 0))
    ) {
      var u = t.lanes;
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), mc(l, a);
    }
  }
  function ef(l, t) {
    var a = l.updateQueue,
      u = l.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var e = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          n === null ? (e = n = i) : (n = n.next = i), (a = a.next);
        } while (a !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      (a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (l.updateQueue = a);
      return;
    }
    (l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t);
  }
  var nf = !1;
  function ae() {
    if (nf) {
      var l = su;
      if (l !== null) throw l;
    }
  }
  function ue(l, t, a, u) {
    nf = !1;
    var e = l.updateQueue;
    fa = !1;
    var n = e.firstBaseUpdate,
      i = e.lastBaseUpdate,
      f = e.shared.pending;
    if (f !== null) {
      e.shared.pending = null;
      var c = f,
        d = c.next;
      (c.next = null), i === null ? (n = d) : (i.next = d), (i = c);
      var z = l.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (f = z.lastBaseUpdate),
        f !== i &&
          (f === null ? (z.firstBaseUpdate = d) : (f.next = d),
          (z.lastBaseUpdate = c)));
    }
    if (n !== null) {
      var _ = e.baseState;
      (i = 0), (z = d = c = null), (f = n);
      do {
        var S = f.lane & -536870913,
          T = S !== f.lane;
        if (T ? (F & S) === S : (u & S) === S) {
          S !== 0 && S === cu && (nf = !0),
            z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var q = l,
              X = f;
            S = t;
            var gl = a;
            switch (X.tag) {
              case 1:
                if (((q = X.payload), typeof q == "function")) {
                  _ = q.call(gl, _, S);
                  break l;
                }
                _ = q;
                break l;
              case 3:
                q.flags = (q.flags & -65537) | 128;
              case 0:
                if (
                  ((q = X.payload),
                  (S = typeof q == "function" ? q.call(gl, _, S) : q),
                  S == null)
                )
                  break l;
                _ = tl({}, _, S);
                break l;
              case 2:
                fa = !0;
            }
          }
          (S = f.callback),
            S !== null &&
              ((l.flags |= 64),
              T && (l.flags |= 8192),
              (T = e.callbacks),
              T === null ? (e.callbacks = [S]) : T.push(S));
        } else
          (T = {
            lane: S,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            z === null ? ((d = z = T), (c = _)) : (z = z.next = T),
            (i |= S);
        if (((f = f.next), f === null)) {
          if (((f = e.shared.pending), f === null)) break;
          (T = f),
            (f = T.next),
            (T.next = null),
            (e.lastBaseUpdate = T),
            (e.shared.pending = null);
        }
      } while (!0);
      z === null && (c = _),
        (e.baseState = c),
        (e.firstBaseUpdate = d),
        (e.lastBaseUpdate = z),
        n === null && (e.shared.lanes = 0),
        (va |= i),
        (l.lanes = i),
        (l.memoizedState = _);
    }
  }
  function pr(l, t) {
    if (typeof l != "function") throw Error(r(191, l));
    l.call(t);
  }
  function Rr(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) pr(a[l], t);
  }
  function ee(l, t) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create,
              i = a.inst;
            (u = n()), (i.destroy = u);
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (f) {
      fl(t, t.return, f);
    }
  }
  function ra(l, t, a) {
    try {
      var u = t.updateQueue,
        e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var i = u.inst,
              f = i.destroy;
            if (f !== void 0) {
              (i.destroy = void 0), (e = t);
              var c = a;
              try {
                f();
              } catch (d) {
                fl(e, c, d);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (d) {
      fl(t, t.return, d);
    }
  }
  function Ur(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Rr(t, a);
      } catch (u) {
        fl(l, l.return, u);
      }
    }
  }
  function Hr(l, t, a) {
    (a.props = Ba(l.type, l.memoizedProps)), (a.state = l.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (u) {
      fl(l, t, u);
    }
  }
  function ja(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        var u = l.stateNode;
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = u;
            break;
          default:
            e = u;
        }
        typeof a == "function" ? (l.refCleanup = a(e)) : (a.current = e);
      }
    } catch (n) {
      fl(l, t, n);
    }
  }
  function Pl(l, t) {
    var a = l.ref,
      u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          fl(l, t, e);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          fl(l, t, e);
        }
      else a.current = null;
  }
  function Nr(l) {
    var t = l.type,
      a = l.memoizedProps,
      u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      fl(l, l.return, e);
    }
  }
  function qr(l, t, a) {
    try {
      var u = l.stateNode;
      kh(u, l.type, a, t), (u[Kl] = t);
    } catch (e) {
      fl(l, l.return, e);
    }
  }
  function Yr(l) {
    return (
      l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 || l.tag === 4
    );
  }
  function ff(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Yr(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 27 && l.tag !== 18;

      ) {
        if (l.flags & 2 || l.child === null || l.tag === 4) continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function cf(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode),
        t
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(l, t)
            : a.insertBefore(l, t)
          : (a.nodeType === 8
              ? ((t = a.parentNode), t.insertBefore(l, a))
              : ((t = a), t.appendChild(l)),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Dn));
    else if (u !== 4 && u !== 27 && ((l = l.child), l !== null))
      for (cf(l, t, a), l = l.sibling; l !== null; )
        cf(l, t, a), (l = l.sibling);
  }
  function vn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && u !== 27 && ((l = l.child), l !== null))
      for (vn(l, t, a), l = l.sibling; l !== null; )
        vn(l, t, a), (l = l.sibling);
  }
  var Xt = !1,
    yl = !1,
    sf = !1,
    xr = typeof WeakSet == "function" ? WeakSet : Set,
    Hl = null,
    Br = !1;
  function Mh(l, t) {
    if (((l = l.containerInfo), (Gf = Yn), (l = Ic(l)), ri(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset,
              n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var i = 0,
              f = -1,
              c = -1,
              d = 0,
              z = 0,
              _ = l,
              S = null;
            t: for (;;) {
              for (
                var T;
                _ !== a || (e !== 0 && _.nodeType !== 3) || (f = i + e),
                  _ !== n || (u !== 0 && _.nodeType !== 3) || (c = i + u),
                  _.nodeType === 3 && (i += _.nodeValue.length),
                  (T = _.firstChild) !== null;

              )
                (S = _), (_ = T);
              for (;;) {
                if (_ === l) break t;
                if (
                  (S === a && ++d === e && (f = i),
                  S === n && ++z === u && (c = i),
                  (T = _.nextSibling) !== null)
                )
                  break;
                (_ = S), (S = _.parentNode);
              }
              _ = T;
            }
            a = f === -1 || c === -1 ? null : { start: f, end: c };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Cf = { focusedElem: l, selectionRange: a }, Yn = !1, Hl = t;
      Hl !== null;

    )
      if (
        ((t = Hl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        (l.return = t), (Hl = l);
      else
        for (; Hl !== null; ) {
          switch (((t = Hl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (l & 1024 && n !== null) {
                (l = void 0),
                  (a = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (u = a.stateNode);
                try {
                  var q = Ba(a.type, e, a.elementType === a.type);
                  (l = u.getSnapshotBeforeUpdate(q, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = l);
                } catch (X) {
                  fl(a, a.return, X);
                }
              }
              break;
            case 3:
              if (l & 1024) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  Zf(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Zf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (l & 1024) throw Error(r(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (Hl = l);
            break;
          }
          Hl = t.return;
        }
    return (q = Br), (Br = !1), q;
  }
  function Gr(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Vt(l, a), u & 4 && ee(5, a);
        break;
      case 1:
        if ((Vt(l, a), u & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (f) {
              fl(a, a.return, f);
            }
          else {
            var e = Ba(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              fl(a, a.return, f);
            }
          }
        u & 64 && Ur(a), u & 512 && ja(a, a.return);
        break;
      case 3:
        if ((Vt(l, a), u & 64 && ((u = a.updateQueue), u !== null))) {
          if (((l = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                l = a.child.stateNode;
                break;
              case 1:
                l = a.child.stateNode;
            }
          try {
            Rr(u, l);
          } catch (f) {
            fl(a, a.return, f);
          }
        }
        break;
      case 26:
        Vt(l, a), u & 512 && ja(a, a.return);
        break;
      case 27:
      case 5:
        Vt(l, a), t === null && u & 4 && Nr(a), u & 512 && ja(a, a.return);
        break;
      case 12:
        Vt(l, a);
        break;
      case 13:
        Vt(l, a), u & 4 && Qr(l, a);
        break;
      case 22:
        if (((e = a.memoizedState !== null || Xt), !e)) {
          t = (t !== null && t.memoizedState !== null) || yl;
          var n = Xt,
            i = yl;
          (Xt = e),
            (yl = t) && !i ? oa(l, a, (a.subtreeFlags & 8772) !== 0) : Vt(l, a),
            (Xt = n),
            (yl = i);
        }
        u & 512 &&
          (a.memoizedProps.mode === "manual"
            ? ja(a, a.return)
            : Pl(a, a.return));
        break;
      default:
        Vt(l, a);
    }
  }
  function Cr(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), Cr(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && Wn(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var Al = null,
    Il = !1;
  function Zt(l, t, a) {
    for (a = a.child; a !== null; ) jr(l, t, a), (a = a.sibling);
  }
  function jr(l, t, a) {
    if ($l && typeof $l.onCommitFiberUnmount == "function")
      try {
        $l.onCommitFiberUnmount(Du, a);
      } catch {}
    switch (a.tag) {
      case 26:
        yl || Pl(a, t),
          Zt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        yl || Pl(a, t);
        var u = Al,
          e = Il;
        for (
          Al = a.stateNode, Zt(l, t, a), a = a.stateNode, t = a.attributes;
          t.length;

        )
          a.removeAttributeNode(t[0]);
        Wn(a), (Al = u), (Il = e);
        break;
      case 5:
        yl || Pl(a, t);
      case 6:
        e = Al;
        var n = Il;
        if (((Al = null), Zt(l, t, a), (Al = e), (Il = n), Al !== null))
          if (Il)
            try {
              (l = Al),
                (u = a.stateNode),
                l.nodeType === 8
                  ? l.parentNode.removeChild(u)
                  : l.removeChild(u);
            } catch (i) {
              fl(a, t, i);
            }
          else
            try {
              Al.removeChild(a.stateNode);
            } catch (i) {
              fl(a, t, i);
            }
        break;
      case 18:
        Al !== null &&
          (Il
            ? ((t = Al),
              (a = a.stateNode),
              t.nodeType === 8
                ? Xf(t.parentNode, a)
                : t.nodeType === 1 && Xf(t, a),
              ze(t))
            : Xf(Al, a.stateNode));
        break;
      case 4:
        (u = Al),
          (e = Il),
          (Al = a.stateNode.containerInfo),
          (Il = !0),
          Zt(l, t, a),
          (Al = u),
          (Il = e);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        yl || ra(2, a, t), yl || ra(4, a, t), Zt(l, t, a);
        break;
      case 1:
        yl ||
          (Pl(a, t),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && Hr(a, t, u)),
          Zt(l, t, a);
        break;
      case 21:
        Zt(l, t, a);
        break;
      case 22:
        yl || Pl(a, t),
          (yl = (u = yl) || a.memoizedState !== null),
          Zt(l, t, a),
          (yl = u);
        break;
      default:
        Zt(l, t, a);
    }
  }
  function Qr(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        ze(l);
      } catch (a) {
        fl(t, t.return, a);
      }
  }
  function Dh(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new xr()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new xr()),
          t
        );
      default:
        throw Error(r(435, l.tag));
    }
  }
  function rf(l, t) {
    var a = Dh(l);
    t.forEach(function (u) {
      var e = Qh.bind(null, l, u);
      a.has(u) || (a.add(u), u.then(e, e));
    });
  }
  function ot(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u],
          n = l,
          i = t,
          f = i;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
            case 5:
              (Al = f.stateNode), (Il = !1);
              break l;
            case 3:
              (Al = f.stateNode.containerInfo), (Il = !0);
              break l;
            case 4:
              (Al = f.stateNode.containerInfo), (Il = !0);
              break l;
          }
          f = f.return;
        }
        if (Al === null) throw Error(r(160));
        jr(n, i, e),
          (Al = null),
          (Il = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Xr(t, l), (t = t.sibling);
  }
  var bt = null;
  function Xr(l, t) {
    var a = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ot(t, l),
          ht(l),
          u & 4 && (ra(3, l, l.return), ee(3, l), ra(5, l, l.return));
        break;
      case 1:
        ot(t, l),
          ht(l),
          u & 512 && (yl || a === null || Pl(a, a.return)),
          u & 64 &&
            Xt &&
            ((l = l.updateQueue),
            l !== null &&
              ((u = l.callbacks),
              u !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? u : a.concat(u)))));
        break;
      case 26:
        var e = bt;
        if (
          (ot(t, l),
          ht(l),
          u & 512 && (yl || a === null || Pl(a, a.return)),
          u & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((u = l.memoizedState), a === null))
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  (u = l.type),
                    (a = l.memoizedProps),
                    (e = e.ownerDocument || e);
                  t: switch (u) {
                    case "title":
                      (n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Uu] ||
                          n[Gl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(u)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title")
                          )),
                        Bl(n, u, a),
                        (n[Gl] = l),
                        Rl(n),
                        (u = n);
                      break l;
                    case "link":
                      var i = qo("link", "href", e).get(u + (a.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (
                            ((n = i[f]),
                            n.getAttribute("href") ===
                              (a.href == null ? null : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            i.splice(f, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Bl(n, u, a),
                        e.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (i = qo("meta", "content", e).get(
                          u + (a.content || "")
                        ))
                      ) {
                        for (f = 0; f < i.length; f++)
                          if (
                            ((n = i[f]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            i.splice(f, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Bl(n, u, a),
                        e.head.appendChild(n);
                      break;
                    default:
                      throw Error(r(468, u));
                  }
                  (n[Gl] = l), Rl(n), (u = n);
                }
                l.stateNode = u;
              } else Yo(e, l.type, l.stateNode);
            else l.stateNode = No(e, u, l.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                u === null
                  ? Yo(e, l.type, l.stateNode)
                  : No(e, u, l.memoizedProps))
              : u === null &&
                l.stateNode !== null &&
                qr(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        if (u & 4 && l.alternate === null) {
          (e = l.stateNode), (n = l.memoizedProps);
          try {
            for (var c = e.firstChild; c; ) {
              var d = c.nextSibling,
                z = c.nodeName;
              c[Uu] ||
                z === "HEAD" ||
                z === "BODY" ||
                z === "SCRIPT" ||
                z === "STYLE" ||
                (z === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                e.removeChild(c),
                (c = d);
            }
            for (var _ = l.type, S = e.attributes; S.length; )
              e.removeAttributeNode(S[0]);
            Bl(e, _, n), (e[Gl] = l), (e[Kl] = n);
          } catch (q) {
            fl(l, l.return, q);
          }
        }
      case 5:
        if (
          (ot(t, l),
          ht(l),
          u & 512 && (yl || a === null || Pl(a, a.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            ka(e, "");
          } catch (q) {
            fl(l, l.return, q);
          }
        }
        u & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), qr(l, e, a !== null ? a.memoizedProps : e)),
          u & 1024 && (sf = !0);
        break;
      case 6:
        if ((ot(t, l), ht(l), u & 4)) {
          if (l.stateNode === null) throw Error(r(162));
          (u = l.memoizedProps), (a = l.stateNode);
          try {
            a.nodeValue = u;
          } catch (q) {
            fl(l, l.return, q);
          }
        }
        break;
      case 3:
        if (
          ((Hn = null),
          (e = bt),
          (bt = Rn(t.containerInfo)),
          ot(t, l),
          (bt = e),
          ht(l),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            ze(t.containerInfo);
          } catch (q) {
            fl(l, l.return, q);
          }
        sf && ((sf = !1), Zr(l));
        break;
      case 4:
        (u = bt),
          (bt = Rn(l.stateNode.containerInfo)),
          ot(t, l),
          ht(l),
          (bt = u);
        break;
      case 12:
        ot(t, l), ht(l);
        break;
      case 13:
        ot(t, l),
          ht(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (bf = At()),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), rf(l, u)));
        break;
      case 22:
        if (
          (u & 512 && (yl || a === null || Pl(a, a.return)),
          (c = l.memoizedState !== null),
          (d = a !== null && a.memoizedState !== null),
          (z = Xt),
          (_ = yl),
          (Xt = z || c),
          (yl = _ || d),
          ot(t, l),
          (yl = _),
          (Xt = z),
          ht(l),
          (t = l.stateNode),
          (t._current = l),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          u & 8192 &&
            ((t._visibility = c ? t._visibility & -2 : t._visibility | 1),
            c && ((t = Xt || yl), a === null || d || t || du(l)),
            l.memoizedProps === null || l.memoizedProps.mode !== "manual"))
        )
          l: for (a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (a === null) {
                d = a = t;
                try {
                  if (((e = d.stateNode), c))
                    (n = e.style),
                      typeof n.setProperty == "function"
                        ? n.setProperty("display", "none", "important")
                        : (n.display = "none");
                  else {
                    (i = d.stateNode), (f = d.memoizedProps.style);
                    var T =
                      f != null && f.hasOwnProperty("display")
                        ? f.display
                        : null;
                    i.style.display =
                      T == null || typeof T == "boolean" ? "" : ("" + T).trim();
                  }
                } catch (q) {
                  fl(d, d.return, q);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                d = t;
                try {
                  d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                } catch (q) {
                  fl(d, d.return, q);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), (t = t.return);
            }
            a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        u & 4 &&
          ((u = l.updateQueue),
          u !== null &&
            ((a = u.retryQueue),
            a !== null && ((u.retryQueue = null), rf(l, a))));
        break;
      case 19:
        ot(t, l),
          ht(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), rf(l, u)));
        break;
      case 21:
        break;
      default:
        ot(t, l), ht(l);
    }
  }
  function ht(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        if (l.tag !== 27) {
          l: {
            for (var a = l.return; a !== null; ) {
              if (Yr(a)) {
                var u = a;
                break l;
              }
              a = a.return;
            }
            throw Error(r(160));
          }
          switch (u.tag) {
            case 27:
              var e = u.stateNode,
                n = ff(l);
              vn(l, n, e);
              break;
            case 5:
              var i = u.stateNode;
              u.flags & 32 && (ka(i, ""), (u.flags &= -33));
              var f = ff(l);
              vn(l, f, i);
              break;
            case 3:
            case 4:
              var c = u.stateNode.containerInfo,
                d = ff(l);
              cf(l, d, c);
              break;
            default:
              throw Error(r(161));
          }
        }
      } catch (z) {
        fl(l, l.return, z);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Zr(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Zr(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function Vt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Gr(l, t.alternate, t), (t = t.sibling);
  }
  function du(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ra(4, t, t.return), du(t);
          break;
        case 1:
          Pl(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Hr(t, t.return, a),
            du(t);
          break;
        case 26:
        case 27:
        case 5:
          Pl(t, t.return), du(t);
          break;
        case 22:
          Pl(t, t.return), t.memoizedState === null && du(t);
          break;
        default:
          du(t);
      }
      l = l.sibling;
    }
  }
  function oa(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate,
        e = l,
        n = t,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          oa(e, n, a), ee(4, n);
          break;
        case 1:
          if (
            (oa(e, n, a),
            (u = n),
            (e = u.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (d) {
              fl(u, u.return, d);
            }
          if (((u = n), (e = u.updateQueue), e !== null)) {
            var f = u.stateNode;
            try {
              var c = e.shared.hiddenCallbacks;
              if (c !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < c.length; e++)
                  pr(c[e], f);
            } catch (d) {
              fl(u, u.return, d);
            }
          }
          a && i & 64 && Ur(n), ja(n, n.return);
          break;
        case 26:
        case 27:
        case 5:
          oa(e, n, a), a && u === null && i & 4 && Nr(n), ja(n, n.return);
          break;
        case 12:
          oa(e, n, a);
          break;
        case 13:
          oa(e, n, a), a && i & 4 && Qr(e, n);
          break;
        case 22:
          n.memoizedState === null && oa(e, n, a), ja(n, n.return);
          break;
        default:
          oa(e, n, a);
      }
      t = t.sibling;
    }
  }
  function of(l, t) {
    var a = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Wu(a));
  }
  function hf(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Wu(l));
  }
  function ha(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Vr(l, t, a, u), (t = t.sibling);
  }
  function Vr(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ha(l, t, a, u), e & 2048 && ee(9, t);
        break;
      case 3:
        ha(l, t, a, u),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Wu(l)));
        break;
      case 12:
        if (e & 2048) {
          ha(l, t, a, u), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              i = n.id,
              f = n.onPostCommit;
            typeof f == "function" &&
              f(
                i,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (c) {
            fl(t, t.return, c);
          }
        } else ha(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          t.memoizedState !== null
            ? n._visibility & 4
              ? ha(l, t, a, u)
              : ne(l, t)
            : n._visibility & 4
            ? ha(l, t, a, u)
            : ((n._visibility |= 4),
              vu(l, t, a, u, (t.subtreeFlags & 10256) !== 0)),
          e & 2048 && of(t.alternate, t);
        break;
      case 24:
        ha(l, t, a, u), e & 2048 && hf(t.alternate, t);
        break;
      default:
        ha(l, t, a, u);
    }
  }
  function vu(l, t, a, u, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l,
        i = t,
        f = a,
        c = u,
        d = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          vu(n, i, f, c, e), ee(8, i);
          break;
        case 23:
          break;
        case 22:
          var z = i.stateNode;
          i.memoizedState !== null
            ? z._visibility & 4
              ? vu(n, i, f, c, e)
              : ne(n, i)
            : ((z._visibility |= 4), vu(n, i, f, c, e)),
            e && d & 2048 && of(i.alternate, i);
          break;
        case 24:
          vu(n, i, f, c, e), e && d & 2048 && hf(i.alternate, i);
          break;
        default:
          vu(n, i, f, c, e);
      }
      t = t.sibling;
    }
  }
  function ne(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          u = t,
          e = u.flags;
        switch (u.tag) {
          case 22:
            ne(a, u), e & 2048 && of(u.alternate, u);
            break;
          case 24:
            ne(a, u), e & 2048 && hf(u.alternate, u);
            break;
          default:
            ne(a, u);
        }
        t = t.sibling;
      }
  }
  var ie = 8192;
  function yu(l) {
    if (l.subtreeFlags & ie)
      for (l = l.child; l !== null; ) Lr(l), (l = l.sibling);
  }
  function Lr(l) {
    switch (l.tag) {
      case 26:
        yu(l),
          l.flags & ie &&
            l.memoizedState !== null &&
            yd(bt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        yu(l);
        break;
      case 3:
      case 4:
        var t = bt;
        (bt = Rn(l.stateNode.containerInfo)), yu(l), (bt = t);
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = ie), (ie = 16777216), yu(l), (ie = t))
            : yu(l));
        break;
      default:
        yu(l);
    }
  }
  function Kr(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function fe(l) {
    var t = l.deletions;
    if (l.flags & 16) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          (Hl = u), Jr(u, l);
        }
      Kr(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) wr(l), (l = l.sibling);
  }
  function wr(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fe(l), l.flags & 2048 && ra(9, l, l.return);
        break;
      case 3:
        fe(l);
        break;
      case 12:
        fe(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 4 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -5), yn(l))
          : fe(l);
        break;
      default:
        fe(l);
    }
  }
  function yn(l) {
    var t = l.deletions;
    if (l.flags & 16) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          (Hl = u), Jr(u, l);
        }
      Kr(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          ra(8, t, t.return), yn(t);
          break;
        case 22:
          (a = t.stateNode),
            a._visibility & 4 && ((a._visibility &= -5), yn(t));
          break;
        default:
          yn(t);
      }
      l = l.sibling;
    }
  }
  function Jr(l, t) {
    for (; Hl !== null; ) {
      var a = Hl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ra(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Wu(a.memoizedState.cache);
      }
      if (((u = a.child), u !== null)) (u.return = a), (Hl = u);
      else
        l: for (a = l; Hl !== null; ) {
          u = Hl;
          var e = u.sibling,
            n = u.return;
          if ((Cr(u), u === a)) {
            Hl = null;
            break l;
          }
          if (e !== null) {
            (e.return = n), (Hl = e);
            break l;
          }
          Hl = n;
        }
    }
  }
  function ph(l, t, a, u) {
    (this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function dt(l, t, a, u) {
    return new ph(l, t, a, u);
  }
  function df(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function da(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = dt(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 31457280),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function Wr(l, t) {
    l.flags &= 31457282;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function mn(l, t, a, u, e, n) {
    var i = 0;
    if (((u = l), typeof l == "function")) df(l) && (i = 1);
    else if (typeof l == "string")
      i = dd(l, a, zt.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case p:
          return Qa(a.children, e, n, t);
        case O:
          (i = 8), (e |= 24);
          break;
        case Q:
          return (
            (l = dt(12, a, t, e | 2)), (l.elementType = Q), (l.lanes = n), l
          );
        case Dl:
          return (l = dt(13, a, t, e)), (l.elementType = Dl), (l.lanes = n), l;
        case ql:
          return (l = dt(19, a, t, e)), (l.elementType = ql), (l.lanes = n), l;
        case Wl:
          return $r(a, e, n, t);
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case al:
              case ol:
                i = 10;
                break l;
              case el:
                i = 9;
                break l;
              case Ml:
                i = 11;
                break l;
              case pl:
                i = 14;
                break l;
              case bl:
                (i = 16), (u = null);
                break l;
            }
          (i = 29),
            (a = Error(r(130, l === null ? "null" : typeof l, ""))),
            (u = null);
      }
    return (
      (t = dt(i, a, t, e)), (t.elementType = l), (t.type = u), (t.lanes = n), t
    );
  }
  function Qa(l, t, a, u) {
    return (l = dt(7, l, u, t)), (l.lanes = a), l;
  }
  function $r(l, t, a, u) {
    (l = dt(22, l, u, t)), (l.elementType = Wl), (l.lanes = a);
    var e = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var n = e._current;
        if (n === null) throw Error(r(456));
        if (!(e._pendingVisibility & 2)) {
          var i = ta(n, 2);
          i !== null && ((e._pendingVisibility |= 2), Zl(i, n, 2));
        }
      },
      attach: function () {
        var n = e._current;
        if (n === null) throw Error(r(456));
        if (e._pendingVisibility & 2) {
          var i = ta(n, 2);
          i !== null && ((e._pendingVisibility &= -3), Zl(i, n, 2));
        }
      },
    };
    return (l.stateNode = e), l;
  }
  function vf(l, t, a) {
    return (l = dt(6, l, null, t)), (l.lanes = a), l;
  }
  function yf(l, t, a) {
    return (
      (t = dt(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  function Lt(l) {
    l.flags |= 4;
  }
  function kr(l, t) {
    if (t.type !== "stylesheet" || t.state.loading & 4) l.flags &= -16777217;
    else if (((l.flags |= 16777216), !xo(t))) {
      if (
        ((t = rt.current),
        t !== null &&
          ((F & 4194176) === F
            ? _t !== null
            : ((F & 62914560) !== F && !(F & 536870912)) || t !== _t))
      )
        throw ((Ku = bi), ds);
      l.flags |= 8192;
    }
  }
  function gn(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? vc() : 536870912), (l.lanes |= t), (gu |= t));
  }
  function ce(l, t) {
    if (!P)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), (t = t.sibling);
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), (a = a.sibling);
          u === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        (a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags & 31457280),
          (u |= e.flags & 31457280),
          (e.return = l),
          (e = e.sibling);
    else
      for (e = l.child; e !== null; )
        (a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags),
          (u |= e.flags),
          (e.return = l),
          (e = e.sibling);
    return (l.subtreeFlags |= u), (l.childLanes = a), t;
  }
  function Rh(l, t, a) {
    var u = t.pendingProps;
    switch ((gi(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dl(t), null;
      case 1:
        return dl(t), null;
      case 3:
        return (
          (a = t.stateNode),
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          Qt(_l),
          La(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (Xu(t)
              ? Lt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), St !== null && (Af(St), (St = null)))),
          dl(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          l === null
            ? (Lt(t),
              a !== null ? (dl(t), kr(t, a)) : (dl(t), (t.flags &= -16777217)))
            : a
            ? a !== l.memoizedState
              ? (Lt(t), dl(t), kr(t, a))
              : (dl(t), (t.flags &= -16777217))
            : (l.memoizedProps !== u && Lt(t), dl(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        pe(t), (a = Ft.current);
        var e = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== u && Lt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(r(166));
            return dl(t), null;
          }
          (l = zt.current),
            Xu(t) ? os(t) : ((l = Do(e, u, a)), (t.stateNode = l), Lt(t));
        }
        return dl(t), null;
      case 5:
        if ((pe(t), (a = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== u && Lt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(r(166));
            return dl(t), null;
          }
          if (((l = zt.current), Xu(t))) os(t);
          else {
            switch (((e = pn(Ft.current)), l)) {
              case 1:
                l = e.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                l = e.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    l = e.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (l = e.createElement("div")),
                      (l.innerHTML = "<script></script>"),
                      (l = l.removeChild(l.firstChild));
                    break;
                  case "select":
                    (l =
                      typeof u.is == "string"
                        ? e.createElement("select", { is: u.is })
                        : e.createElement("select")),
                      u.multiple
                        ? (l.multiple = !0)
                        : u.size && (l.size = u.size);
                    break;
                  default:
                    l =
                      typeof u.is == "string"
                        ? e.createElement(a, { is: u.is })
                        : e.createElement(a);
                }
            }
            (l[Gl] = t), (l[Kl] = u);
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6) l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) break l;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
            t.stateNode = l;
            l: switch ((Bl(l, a, u), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!u.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Lt(t);
          }
        }
        return dl(t), (t.flags &= -16777217), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Lt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(r(166));
          if (((l = Ft.current), Xu(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (u = null),
              (e = Xl),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            (l[Gl] = t),
              (l = !!(
                l.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                To(l.nodeValue, a)
              )),
              l || Ua(t);
          } else (l = pn(l).createTextNode(u)), (l[Gl] = t), (t.stateNode = l);
        }
        return dl(t), null;
      case 13:
        if (
          ((u = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = Xu(t)), u !== null && u.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(r(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(r(317));
              e[Gl] = t;
            } else
              Zu(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            dl(t), (e = !1);
          } else St !== null && (Af(St), (St = null)), (e = !0);
          if (!e) return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
        }
        if ((Bt(t), t.flags & 128)) return (t.lanes = a), t;
        if (
          ((a = u !== null), (l = l !== null && l.memoizedState !== null), a)
        ) {
          (u = t.child),
            (e = null),
            u.alternate !== null &&
              u.alternate.memoizedState !== null &&
              u.alternate.memoizedState.cachePool !== null &&
              (e = u.alternate.memoizedState.cachePool.pool);
          var n = null;
          u.memoizedState !== null &&
            u.memoizedState.cachePool !== null &&
            (n = u.memoizedState.cachePool.pool),
            n !== e && (u.flags |= 2048);
        }
        return (
          a !== l && a && (t.child.flags |= 8192),
          gn(t, t.updateQueue),
          dl(t),
          null
        );
      case 4:
        return La(), l === null && Yf(t.stateNode.containerInfo), dl(t), null;
      case 10:
        return Qt(t.type), dl(t), null;
      case 19:
        if ((El(Ol), (e = t.memoizedState), e === null)) return dl(t), null;
        if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (u) ce(e, !1);
          else {
            if (ml !== 0 || (l !== null && l.flags & 128))
              for (l = t.child; l !== null; ) {
                if (((n = Ie(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      ce(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      gn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;

                  )
                    Wr(a, l), (a = a.sibling);
                  return hl(Ol, (Ol.current & 1) | 2), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null &&
              At() > Sn &&
              ((t.flags |= 128), (u = !0), ce(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = Ie(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                gn(t, l),
                ce(e, !0),
                e.tail === null &&
                  e.tailMode === "hidden" &&
                  !n.alternate &&
                  !P)
              )
                return dl(t), null;
            } else
              2 * At() - e.renderingStartTime > Sn &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), ce(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (e.last = n));
        }
        return e.tail !== null
          ? ((t = e.tail),
            (e.rendering = t),
            (e.tail = t.sibling),
            (e.renderingStartTime = At()),
            (t.sibling = null),
            (l = Ol.current),
            hl(Ol, u ? (l & 1) | 2 : l & 1),
            t)
          : (dl(t), null);
      case 22:
      case 23:
        return (
          Bt(t),
          Ti(),
          (u = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== u && (t.flags |= 8192)
            : u && (t.flags |= 8192),
          u
            ? a & 536870912 &&
              !(t.flags & 128) &&
              (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : dl(t),
          (a = t.updateQueue),
          a !== null && gn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (u = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (u = t.memoizedState.cachePool.pool),
          u !== a && (t.flags |= 2048),
          l !== null && El(Na),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Qt(_l),
          dl(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function Uh(l, t) {
    switch ((gi(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Qt(_l),
          La(),
          (l = t.flags),
          l & 65536 && !(l & 128) ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return pe(t), null;
      case 13:
        if (
          (Bt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          Zu();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return El(Ol), null;
      case 4:
        return La(), null;
      case 10:
        return Qt(t.type), null;
      case 22:
      case 23:
        return (
          Bt(t),
          Ti(),
          l !== null && El(Na),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return Qt(_l), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fr(l, t) {
    switch ((gi(t), t.tag)) {
      case 3:
        Qt(_l), La();
        break;
      case 26:
      case 27:
      case 5:
        pe(t);
        break;
      case 4:
        La();
        break;
      case 13:
        Bt(t);
        break;
      case 19:
        El(Ol);
        break;
      case 10:
        Qt(t.type);
        break;
      case 22:
      case 23:
        Bt(t), Ti(), l !== null && El(Na);
        break;
      case 24:
        Qt(_l);
    }
  }
  var Hh = {
      getCacheForType: function (l) {
        var t = Cl(_l),
          a = t.data.get(l);
        return a === void 0 && ((a = l()), t.data.set(l, a)), a;
      },
    },
    Nh = typeof WeakMap == "function" ? WeakMap : Map,
    vl = 0,
    sl = null,
    J = null,
    F = 0,
    rl = 0,
    lt = null,
    Kt = !1,
    mu = !1,
    mf = !1,
    wt = 0,
    ml = 0,
    va = 0,
    Xa = 0,
    gf = 0,
    vt = 0,
    gu = 0,
    se = null,
    Dt = null,
    Sf = !1,
    bf = 0,
    Sn = 1 / 0,
    bn = null,
    ya = null,
    En = !1,
    Za = null,
    re = 0,
    Ef = 0,
    Tf = null,
    oe = 0,
    zf = null;
  function tt() {
    if (vl & 2 && F !== 0) return F & -F;
    if (G.T !== null) {
      var l = cu;
      return l !== 0 ? l : Uf();
    }
    return Sc();
  }
  function Pr() {
    vt === 0 && (vt = !(F & 536870912) || P ? dc() : 536870912);
    var l = rt.current;
    return l !== null && (l.flags |= 32), vt;
  }
  function Zl(l, t, a) {
    ((l === sl && rl === 2) || l.cancelPendingCommit !== null) &&
      (Su(l, 0), Jt(l, F, vt, !1)),
      Ru(l, a),
      (!(vl & 2) || l !== sl) &&
        (l === sl && (!(vl & 2) && (Xa |= a), ml === 4 && Jt(l, F, vt, !1)),
        pt(l));
  }
  function Ir(l, t, a) {
    if (vl & 6) throw Error(r(327));
    var u = (!a && (t & 60) === 0 && (t & l.expiredLanes) === 0) || pu(l, t),
      e = u ? xh(l, t) : Mf(l, t, !0),
      n = u;
    do {
      if (e === 0) {
        mu && !u && Jt(l, t, 0, !1);
        break;
      } else if (e === 6) Jt(l, t, 0, !Kt);
      else {
        if (((a = l.current.alternate), n && !qh(a))) {
          (e = Mf(l, t, !1)), (n = !1);
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            (i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
          if (i !== 0) {
            t = i;
            l: {
              var f = l;
              e = se;
              var c = f.current.memoizedState.isDehydrated;
              if ((c && (Su(f, i).flags |= 256), (i = Mf(f, i, !1)), i !== 2)) {
                if (mf && !c) {
                  (f.errorRecoveryDisabledLanes |= n), (Xa |= n), (e = 4);
                  break l;
                }
                (n = Dt), (Dt = e), n !== null && Af(n);
              }
              e = i;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          Su(l, 0), Jt(l, t, 0, !0);
          break;
        }
        l: {
          switch (((u = l), e)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194176) === t) {
                Jt(u, t, vt, !Kt);
                break l;
              }
              break;
            case 2:
              Dt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if (
            ((u.finishedWork = a),
            (u.finishedLanes = t),
            (t & 62914560) === t && ((n = bf + 300 - At()), 10 < n))
          ) {
            if ((Jt(u, t, vt, !Kt), Ne(u, 0) !== 0)) break l;
            u.timeoutHandle = Oo(
              lo.bind(null, u, a, Dt, bn, Sf, t, vt, Xa, gu, Kt, 2, -0, 0),
              n
            );
            break l;
          }
          lo(u, a, Dt, bn, Sf, t, vt, Xa, gu, Kt, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    pt(l);
  }
  function Af(l) {
    Dt === null ? (Dt = l) : Dt.push.apply(Dt, l);
  }
  function lo(l, t, a, u, e, n, i, f, c, d, z, _, S) {
    var T = t.subtreeFlags;
    if (
      (T & 8192 || (T & 16785408) === 16785408) &&
      ((ge = { stylesheets: null, count: 0, unsuspend: vd }),
      Lr(t),
      (t = md()),
      t !== null)
    ) {
      (l.cancelPendingCommit = t(fo.bind(null, l, a, u, e, i, f, c, 1, _, S))),
        Jt(l, n, i, !d);
      return;
    }
    fo(l, a, u, e, i, f, c, z, _, S);
  }
  function qh(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var e = a[u],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!Fl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        (a.return = t), (t = a);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Jt(l, t, a, u) {
    (t &= ~gf),
      (t &= ~Xa),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      u && (l.warmLanes |= t),
      (u = l.expirationTimes);
    for (var e = t; 0 < e; ) {
      var n = 31 - kl(e),
        i = 1 << n;
      (u[n] = -1), (e &= ~i);
    }
    a !== 0 && yc(l, a, t);
  }
  function Tn() {
    return vl & 6 ? !0 : (he(0), !1);
  }
  function Of() {
    if (J !== null) {
      if (rl === 0) var l = J.return;
      else (l = J), (jt = Ga = null), Ri(l), (iu = null), (wu = 0), (l = J);
      for (; l !== null; ) Fr(l.alternate, l), (l = l.return);
      J = null;
    }
  }
  function Su(l, t) {
    (l.finishedWork = null), (l.finishedLanes = 0);
    var a = l.timeoutHandle;
    a !== -1 && ((l.timeoutHandle = -1), Ph(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      Of(),
      (sl = l),
      (J = a = da(l.current, null)),
      (F = t),
      (rl = 0),
      (lt = null),
      (Kt = !1),
      (mu = pu(l, t)),
      (mf = !1),
      (gu = vt = gf = Xa = va = ml = 0),
      (Dt = se = null),
      (Sf = !1),
      t & 8 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - kl(u),
          n = 1 << e;
        (t |= l[e]), (u &= ~n);
      }
    return (wt = t), Le(), a;
  }
  function to(l, t) {
    (K = null),
      (G.H = Mt),
      t === Lu
        ? ((t = ms()), (rl = 3))
        : t === ds
        ? ((t = ms()), (rl = 4))
        : (rl =
            t === vr
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (lt = t),
      J === null && ((ml = 1), on(l, ft(t, l.current)));
  }
  function ao() {
    var l = G.H;
    return (G.H = Mt), l === null ? Mt : l;
  }
  function uo() {
    var l = G.A;
    return (G.A = Hh), l;
  }
  function _f() {
    (ml = 4),
      Kt || ((F & 4194176) !== F && rt.current !== null) || (mu = !0),
      (!(va & 134217727) && !(Xa & 134217727)) ||
        sl === null ||
        Jt(sl, F, vt, !1);
  }
  function Mf(l, t, a) {
    var u = vl;
    vl |= 2;
    var e = ao(),
      n = uo();
    (sl !== l || F !== t) && ((bn = null), Su(l, t)), (t = !1);
    var i = ml;
    l: do
      try {
        if (rl !== 0 && J !== null) {
          var f = J,
            c = lt;
          switch (rl) {
            case 8:
              Of(), (i = 6);
              break l;
            case 3:
            case 2:
            case 6:
              rt.current === null && (t = !0);
              var d = rl;
              if (((rl = 0), (lt = null), bu(l, f, c, d), a && mu)) {
                i = 0;
                break l;
              }
              break;
            default:
              (d = rl), (rl = 0), (lt = null), bu(l, f, c, d);
          }
        }
        Yh(), (i = ml);
        break;
      } catch (z) {
        to(l, z);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (jt = Ga = null),
      (vl = u),
      (G.H = e),
      (G.A = n),
      J === null && ((sl = null), (F = 0), Le()),
      i
    );
  }
  function Yh() {
    for (; J !== null; ) eo(J);
  }
  function xh(l, t) {
    var a = vl;
    vl |= 2;
    var u = ao(),
      e = uo();
    sl !== l || F !== t
      ? ((bn = null), (Sn = At() + 500), Su(l, t))
      : (mu = pu(l, t));
    l: do
      try {
        if (rl !== 0 && J !== null) {
          t = J;
          var n = lt;
          t: switch (rl) {
            case 1:
              (rl = 0), (lt = null), bu(l, t, n, 1);
              break;
            case 2:
              if (vs(n)) {
                (rl = 0), (lt = null), no(t);
                break;
              }
              (t = function () {
                rl === 2 && sl === l && (rl = 7), pt(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              rl = 7;
              break l;
            case 4:
              rl = 5;
              break l;
            case 7:
              vs(n)
                ? ((rl = 0), (lt = null), no(t))
                : ((rl = 0), (lt = null), bu(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (J.tag) {
                case 26:
                  i = J.memoizedState;
                case 5:
                case 27:
                  var f = J;
                  if (!i || xo(i)) {
                    (rl = 0), (lt = null);
                    var c = f.sibling;
                    if (c !== null) J = c;
                    else {
                      var d = f.return;
                      d !== null ? ((J = d), zn(d)) : (J = null);
                    }
                    break t;
                  }
              }
              (rl = 0), (lt = null), bu(l, t, n, 5);
              break;
            case 6:
              (rl = 0), (lt = null), bu(l, t, n, 6);
              break;
            case 8:
              Of(), (ml = 6);
              break l;
            default:
              throw Error(r(462));
          }
        }
        Bh();
        break;
      } catch (z) {
        to(l, z);
      }
    while (!0);
    return (
      (jt = Ga = null),
      (G.H = u),
      (G.A = e),
      (vl = a),
      J !== null ? 0 : ((sl = null), (F = 0), Le(), ml)
    );
  }
  function Bh() {
    for (; J !== null && !e0(); ) eo(J);
  }
  function eo(l) {
    var t = Mr(l.alternate, l, wt);
    (l.memoizedProps = l.pendingProps), t === null ? zn(l) : (J = t);
  }
  function no(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Er(a, t, t.pendingProps, t.type, void 0, F);
        break;
      case 11:
        t = Er(a, t, t.pendingProps, t.type.render, t.ref, F);
        break;
      case 5:
        Ri(t);
      default:
        Fr(a, t), (t = J = Wr(t, wt)), (t = Mr(a, t, wt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? zn(l) : (J = t);
  }
  function bu(l, t, a, u) {
    (jt = Ga = null), Ri(t), (iu = null), (wu = 0);
    var e = t.return;
    try {
      if (Oh(l, e, t, a, F)) {
        (ml = 1), on(l, ft(a, l.current)), (J = null);
        return;
      }
    } catch (n) {
      if (e !== null) throw ((J = e), n);
      (ml = 1), on(l, ft(a, l.current)), (J = null);
      return;
    }
    t.flags & 32768
      ? (P || u === 1
          ? (l = !0)
          : mu || F & 536870912
          ? (l = !1)
          : ((Kt = l = !0),
            (u === 2 || u === 3 || u === 6) &&
              ((u = rt.current),
              u !== null && u.tag === 13 && (u.flags |= 16384))),
        io(t, l))
      : zn(t);
  }
  function zn(l) {
    var t = l;
    do {
      if (t.flags & 32768) {
        io(t, Kt);
        return;
      }
      l = t.return;
      var a = Rh(t.alternate, t, wt);
      if (a !== null) {
        J = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        J = t;
        return;
      }
      J = t = l;
    } while (t !== null);
    ml === 0 && (ml = 5);
  }
  function io(l, t) {
    do {
      var a = Uh(l.alternate, l);
      if (a !== null) {
        (a.flags &= 32767), (J = a);
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        J = l;
        return;
      }
      J = l = a;
    } while (l !== null);
    (ml = 6), (J = null);
  }
  function fo(l, t, a, u, e, n, i, f, c, d) {
    var z = G.T,
      _ = U.p;
    try {
      (U.p = 2), (G.T = null), Gh(l, t, a, u, _, e, n, i, f, c, d);
    } finally {
      (G.T = z), (U.p = _);
    }
  }
  function Gh(l, t, a, u, e, n, i, f) {
    do Eu();
    while (Za !== null);
    if (vl & 6) throw Error(r(327));
    var c = l.finishedWork;
    if (((u = l.finishedLanes), c === null)) return null;
    if (((l.finishedWork = null), (l.finishedLanes = 0), c === l.current))
      throw Error(r(177));
    (l.callbackNode = null),
      (l.callbackPriority = 0),
      (l.cancelPendingCommit = null);
    var d = c.lanes | c.childLanes;
    if (
      ((d |= vi),
      y0(l, u, d, n, i, f),
      l === sl && ((J = sl = null), (F = 0)),
      (!(c.subtreeFlags & 10256) && !(c.flags & 10256)) ||
        En ||
        ((En = !0),
        (Ef = d),
        (Tf = a),
        Xh(Re, function () {
          return Eu(), null;
        })),
      (a = (c.flags & 15990) !== 0),
      c.subtreeFlags & 15990 || a
        ? ((a = G.T),
          (G.T = null),
          (n = U.p),
          (U.p = 2),
          (i = vl),
          (vl |= 4),
          Mh(l, c),
          Xr(c, l),
          fh(Cf, l.containerInfo),
          (Yn = !!Gf),
          (Cf = Gf = null),
          (l.current = c),
          Gr(l, c.alternate, c),
          n0(),
          (vl = i),
          (U.p = n),
          (G.T = a))
        : (l.current = c),
      En ? ((En = !1), (Za = l), (re = u)) : co(l, d),
      (d = l.pendingLanes),
      d === 0 && (ya = null),
      r0(c.stateNode),
      pt(l),
      t !== null)
    )
      for (e = l.onRecoverableError, c = 0; c < t.length; c++)
        (d = t[c]), e(d.value, { componentStack: d.stack });
    return (
      re & 3 && Eu(),
      (d = l.pendingLanes),
      u & 4194218 && d & 42
        ? l === zf
          ? oe++
          : ((oe = 0), (zf = l))
        : (oe = 0),
      he(0),
      null
    );
  }
  function co(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Wu(t)));
  }
  function Eu() {
    if (Za !== null) {
      var l = Za,
        t = Ef;
      Ef = 0;
      var a = gc(re),
        u = G.T,
        e = U.p;
      try {
        if (((U.p = 32 > a ? 32 : a), (G.T = null), Za === null)) var n = !1;
        else {
          (a = Tf), (Tf = null);
          var i = Za,
            f = re;
          if (((Za = null), (re = 0), vl & 6)) throw Error(r(331));
          var c = vl;
          if (
            ((vl |= 4),
            wr(i.current),
            Vr(i, i.current, f, a),
            (vl = c),
            he(0, !1),
            $l && typeof $l.onPostCommitFiberRoot == "function")
          )
            try {
              $l.onPostCommitFiberRoot(Du, i);
            } catch {}
          n = !0;
        }
        return n;
      } finally {
        (U.p = e), (G.T = u), co(l, t);
      }
    }
    return !1;
  }
  function so(l, t, a) {
    (t = ft(a, t)),
      (t = Vi(l.stateNode, t, 2)),
      (l = sa(l, t, 2)),
      l !== null && (Ru(l, 2), pt(l));
  }
  function fl(l, t, a) {
    if (l.tag === 3) so(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          so(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (ya === null || !ya.has(u)))
          ) {
            (l = ft(a, l)),
              (a = hr(2)),
              (u = sa(t, a, 2)),
              u !== null && (dr(a, u, t, l), Ru(u, 2), pt(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Df(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new Nh();
      var e = new Set();
      u.set(t, e);
    } else (e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e));
    e.has(a) ||
      ((mf = !0), e.add(a), (l = Ch.bind(null, l, t, a)), t.then(l, l));
  }
  function Ch(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      sl === l &&
        (F & a) === a &&
        (ml === 4 || (ml === 3 && (F & 62914560) === F && 300 > At() - bf)
          ? !(vl & 2) && Su(l, 0)
          : (gf |= a),
        gu === F && (gu = 0)),
      pt(l);
  }
  function ro(l, t) {
    t === 0 && (t = vc()), (l = ta(l, t)), l !== null && (Ru(l, t), pt(l));
  }
  function jh(l) {
    var t = l.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), ro(l, a);
  }
  function Qh(l, t) {
    var a = 0;
    switch (l.tag) {
      case 13:
        var u = l.stateNode,
          e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    u !== null && u.delete(t), ro(l, a);
  }
  function Xh(l, t) {
    return Ln(l, t);
  }
  var An = null,
    Tu = null,
    pf = !1,
    On = !1,
    Rf = !1,
    Va = 0;
  function pt(l) {
    l !== Tu &&
      l.next === null &&
      (Tu === null ? (An = Tu = l) : (Tu = Tu.next = l)),
      (On = !0),
      pf || ((pf = !0), Vh(Zh));
  }
  function he(l, t) {
    if (!Rf && On) {
      Rf = !0;
      do
        for (var a = !1, u = An; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var i = u.suspendedLanes,
                f = u.pingedLanes;
              (n = (1 << (31 - kl(42 | l) + 1)) - 1),
                (n &= e & ~(i & ~f)),
                (n = n & 201326677 ? (n & 201326677) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((a = !0), vo(u, n));
          } else
            (n = F),
              (n = Ne(u, u === sl ? n : 0)),
              !(n & 3) || pu(u, n) || ((a = !0), vo(u, n));
          u = u.next;
        }
      while (a);
      Rf = !1;
    }
  }
  function Zh() {
    On = pf = !1;
    var l = 0;
    Va !== 0 && (Fh() && (l = Va), (Va = 0));
    for (var t = At(), a = null, u = An; u !== null; ) {
      var e = u.next,
        n = oo(u, t);
      n === 0
        ? ((u.next = null),
          a === null ? (An = e) : (a.next = e),
          e === null && (Tu = a))
        : ((a = u), (l !== 0 || n & 3) && (On = !0)),
        (u = e);
    }
    he(l);
  }
  function oo(l, t) {
    for (
      var a = l.suspendedLanes,
        u = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var i = 31 - kl(n),
        f = 1 << i,
        c = e[i];
      c === -1
        ? (!(f & a) || f & u) && (e[i] = v0(f, t))
        : c <= t && (l.expiredLanes |= f),
        (n &= ~f);
    }
    if (
      ((t = sl),
      (a = F),
      (a = Ne(l, l === t ? a : 0)),
      (u = l.callbackNode),
      a === 0 || (l === t && rl === 2) || l.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && Kn(u),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if (!(a & 3) || pu(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((u !== null && Kn(u), gc(a))) {
        case 2:
        case 8:
          a = oc;
          break;
        case 32:
          a = Re;
          break;
        case 268435456:
          a = hc;
          break;
        default:
          a = Re;
      }
      return (
        (u = ho.bind(null, l)),
        (a = Ln(a, u)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      u !== null && u !== null && Kn(u),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function ho(l, t) {
    var a = l.callbackNode;
    if (Eu() && l.callbackNode !== a) return null;
    var u = F;
    return (
      (u = Ne(l, l === sl ? u : 0)),
      u === 0
        ? null
        : (Ir(l, u, t),
          oo(l, At()),
          l.callbackNode != null && l.callbackNode === a
            ? ho.bind(null, l)
            : null)
    );
  }
  function vo(l, t) {
    if (Eu()) return null;
    Ir(l, t, !0);
  }
  function Vh(l) {
    Ih(function () {
      vl & 6 ? Ln(rc, l) : l();
    });
  }
  function Uf() {
    return Va === 0 && (Va = dc()), Va;
  }
  function yo(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : Ge("" + l);
  }
  function mo(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function Lh(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = yo((e[Kl] || null).action),
        i = u.submitter;
      i &&
        ((t = (t = i[Kl] || null)
          ? yo(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((n = t), (i = null)));
      var f = new Xe("action", "action", null, u, e);
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (Va !== 0) {
                  var c = i ? mo(e, i) : new FormData(e);
                  Ci(
                    a,
                    { pending: !0, data: c, method: e.method, action: n },
                    null,
                    c
                  );
                }
              } else
                typeof n == "function" &&
                  (f.preventDefault(),
                  (c = i ? mo(e, i) : new FormData(e)),
                  Ci(
                    a,
                    { pending: !0, data: c, method: e.method, action: n },
                    n,
                    c
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Hf = 0; Hf < fs.length; Hf++) {
    var Nf = fs[Hf],
      Kh = Nf.toLowerCase(),
      wh = Nf[0].toUpperCase() + Nf.slice(1);
    gt(Kh, "on" + wh);
  }
  gt(as, "onAnimationEnd"),
    gt(us, "onAnimationIteration"),
    gt(es, "onAnimationStart"),
    gt("dblclick", "onDoubleClick"),
    gt("focusin", "onFocus"),
    gt("focusout", "onBlur"),
    gt(sh, "onTransitionRun"),
    gt(rh, "onTransitionStart"),
    gt(oh, "onTransitionCancel"),
    gt(ns, "onTransitionEnd"),
    Wa("onMouseEnter", ["mouseout", "mouseover"]),
    Wa("onMouseLeave", ["mouseout", "mouseover"]),
    Wa("onPointerEnter", ["pointerout", "pointerover"]),
    Wa("onPointerLeave", ["pointerout", "pointerover"]),
    Oa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Oa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Oa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Oa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Oa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Oa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var de =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Jh = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(de)
    );
  function go(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a],
        e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = u.length - 1; 0 <= i; i--) {
            var f = u[i],
              c = f.instance,
              d = f.currentTarget;
            if (((f = f.listener), c !== n && e.isPropagationStopped()))
              break l;
            (n = f), (e.currentTarget = d);
            try {
              n(e);
            } catch (z) {
              rn(z);
            }
            (e.currentTarget = null), (n = c);
          }
        else
          for (i = 0; i < u.length; i++) {
            if (
              ((f = u[i]),
              (c = f.instance),
              (d = f.currentTarget),
              (f = f.listener),
              c !== n && e.isPropagationStopped())
            )
              break l;
            (n = f), (e.currentTarget = d);
            try {
              n(e);
            } catch (z) {
              rn(z);
            }
            (e.currentTarget = null), (n = c);
          }
      }
    }
  }
  function W(l, t) {
    var a = t[Jn];
    a === void 0 && (a = t[Jn] = new Set());
    var u = l + "__bubble";
    a.has(u) || (So(t, l, 2, !1), a.add(u));
  }
  function qf(l, t, a) {
    var u = 0;
    t && (u |= 4), So(a, l, u, t);
  }
  var _n = "_reactListening" + Math.random().toString(36).slice(2);
  function Yf(l) {
    if (!l[_n]) {
      (l[_n] = !0),
        Ec.forEach(function (a) {
          a !== "selectionchange" && (Jh.has(a) || qf(a, !1, l), qf(a, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[_n] || ((t[_n] = !0), qf("selectionchange", !1, t));
    }
  }
  function So(l, t, a, u) {
    switch (Xo(t)) {
      case 2:
        var e = bd;
        break;
      case 8:
        e = Ed;
        break;
      default:
        e = Jf;
    }
    (a = e.bind(null, t, a, l)),
      (e = void 0),
      !ti ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      u
        ? e !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: e })
          : l.addEventListener(t, a, !0)
        : e !== void 0
        ? l.addEventListener(t, a, { passive: e })
        : l.addEventListener(t, a, !1);
  }
  function xf(l, t, a, u, e) {
    var n = u;
    if (!(t & 1) && !(t & 2) && u !== null)
      l: for (;;) {
        if (u === null) return;
        var i = u.tag;
        if (i === 3 || i === 4) {
          var f = u.stateNode.containerInfo;
          if (f === e || (f.nodeType === 8 && f.parentNode === e)) break;
          if (i === 4)
            for (i = u.return; i !== null; ) {
              var c = i.tag;
              if (
                (c === 3 || c === 4) &&
                ((c = i.stateNode.containerInfo),
                c === e || (c.nodeType === 8 && c.parentNode === e))
              )
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (((i = Aa(f)), i === null)) return;
            if (((c = i.tag), c === 5 || c === 6 || c === 26 || c === 27)) {
              u = n = i;
              continue l;
            }
            f = f.parentNode;
          }
        }
        u = u.return;
      }
    Nc(function () {
      var d = n,
        z = In(a),
        _ = [];
      l: {
        var S = is.get(l);
        if (S !== void 0) {
          var T = Xe,
            q = l;
          switch (l) {
            case "keypress":
              if (je(a) === 0) break l;
            case "keydown":
            case "keyup":
              T = Q0;
              break;
            case "focusin":
              (q = "focus"), (T = ni);
              break;
            case "focusout":
              (q = "blur"), (T = ni);
              break;
            case "beforeblur":
            case "afterblur":
              T = ni;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              T = xc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = p0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = V0;
              break;
            case as:
            case us:
            case es:
              T = H0;
              break;
            case ns:
              T = K0;
              break;
            case "scroll":
            case "scrollend":
              T = M0;
              break;
            case "wheel":
              T = J0;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = q0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = Gc;
              break;
            case "toggle":
            case "beforetoggle":
              T = $0;
          }
          var X = (t & 4) !== 0,
            gl = !X && (l === "scroll" || l === "scrollend"),
            y = X ? (S !== null ? S + "Capture" : null) : S;
          X = [];
          for (var h = d, g; h !== null; ) {
            var A = h;
            if (
              ((g = A.stateNode),
              (A = A.tag),
              (A !== 5 && A !== 26 && A !== 27) ||
                g === null ||
                y === null ||
                ((A = Nu(h, y)), A != null && X.push(ve(h, A, g))),
              gl)
            )
              break;
            h = h.return;
          }
          0 < X.length &&
            ((S = new T(S, q, null, a, z)), _.push({ event: S, listeners: X }));
        }
      }
      if (!(t & 7)) {
        l: {
          if (
            ((S = l === "mouseover" || l === "pointerover"),
            (T = l === "mouseout" || l === "pointerout"),
            S &&
              a !== Pn &&
              (q = a.relatedTarget || a.fromElement) &&
              (Aa(q) || q[Ka]))
          )
            break l;
          if (
            (T || S) &&
            ((S =
              z.window === z
                ? z
                : (S = z.ownerDocument)
                ? S.defaultView || S.parentWindow
                : window),
            T
              ? ((q = a.relatedTarget || a.toElement),
                (T = d),
                (q = q ? Aa(q) : null),
                q !== null &&
                  ((gl = j(q)),
                  (X = q.tag),
                  q !== gl || (X !== 5 && X !== 27 && X !== 6)) &&
                  (q = null))
              : ((T = null), (q = d)),
            T !== q)
          ) {
            if (
              ((X = xc),
              (A = "onMouseLeave"),
              (y = "onMouseEnter"),
              (h = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((X = Gc),
                (A = "onPointerLeave"),
                (y = "onPointerEnter"),
                (h = "pointer")),
              (gl = T == null ? S : Hu(T)),
              (g = q == null ? S : Hu(q)),
              (S = new X(A, h + "leave", T, a, z)),
              (S.target = gl),
              (S.relatedTarget = g),
              (A = null),
              Aa(z) === d &&
                ((X = new X(y, h + "enter", q, a, z)),
                (X.target = g),
                (X.relatedTarget = gl),
                (A = X)),
              (gl = A),
              T && q)
            )
              t: {
                for (X = T, y = q, h = 0, g = X; g; g = zu(g)) h++;
                for (g = 0, A = y; A; A = zu(A)) g++;
                for (; 0 < h - g; ) (X = zu(X)), h--;
                for (; 0 < g - h; ) (y = zu(y)), g--;
                for (; h--; ) {
                  if (X === y || (y !== null && X === y.alternate)) break t;
                  (X = zu(X)), (y = zu(y));
                }
                X = null;
              }
            else X = null;
            T !== null && bo(_, S, T, X, !1),
              q !== null && gl !== null && bo(_, gl, q, X, !0);
          }
        }
        l: {
          if (
            ((S = d ? Hu(d) : window),
            (T = S.nodeName && S.nodeName.toLowerCase()),
            T === "select" || (T === "input" && S.type === "file"))
          )
            var H = Kc;
          else if (Vc(S))
            if (wc) H = nh;
            else {
              H = uh;
              var w = ah;
            }
          else
            (T = S.nodeName),
              !T ||
              T.toLowerCase() !== "input" ||
              (S.type !== "checkbox" && S.type !== "radio")
                ? d && Fn(d.elementType) && (H = Kc)
                : (H = eh);
          if (H && (H = H(l, d))) {
            Lc(_, H, a, z);
            break l;
          }
          w && w(l, S, d),
            l === "focusout" &&
              d &&
              S.type === "number" &&
              d.memoizedProps.value != null &&
              kn(S, "number", S.value);
        }
        switch (((w = d ? Hu(d) : window), l)) {
          case "focusin":
            (Vc(w) || w.contentEditable === "true") &&
              ((lu = w), (oi = d), (Qu = null));
            break;
          case "focusout":
            Qu = oi = lu = null;
            break;
          case "mousedown":
            hi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (hi = !1), ls(_, a, z);
            break;
          case "selectionchange":
            if (ch) break;
          case "keydown":
          case "keyup":
            ls(_, a, z);
        }
        var Y;
        if (fi)
          l: {
            switch (l) {
              case "compositionstart":
                var B = "onCompositionStart";
                break l;
              case "compositionend":
                B = "onCompositionEnd";
                break l;
              case "compositionupdate":
                B = "onCompositionUpdate";
                break l;
            }
            B = void 0;
          }
        else
          Ia
            ? Xc(l, a) && (B = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (B = "onCompositionStart");
        B &&
          (Cc &&
            a.locale !== "ko" &&
            (Ia || B !== "onCompositionStart"
              ? B === "onCompositionEnd" && Ia && (Y = qc())
              : ((la = z),
                (ai = "value" in la ? la.value : la.textContent),
                (Ia = !0))),
          (w = Mn(d, B)),
          0 < w.length &&
            ((B = new Bc(B, l, null, a, z)),
            _.push({ event: B, listeners: w }),
            Y ? (B.data = Y) : ((Y = Zc(a)), Y !== null && (B.data = Y)))),
          (Y = F0 ? P0(l, a) : I0(l, a)) &&
            ((B = Mn(d, "onBeforeInput")),
            0 < B.length &&
              ((w = new Bc("onBeforeInput", "beforeinput", null, a, z)),
              _.push({ event: w, listeners: B }),
              (w.data = Y))),
          Lh(_, l, d, a, z);
      }
      go(_, t);
    });
  }
  function ve(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function Mn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      (e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = Nu(l, a)),
          e != null && u.unshift(ve(l, e, n)),
          (e = Nu(l, t)),
          e != null && u.push(ve(l, e, n))),
        (l = l.return);
    }
    return u;
  }
  function zu(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function bo(l, t, a, u, e) {
    for (var n = t._reactName, i = []; a !== null && a !== u; ) {
      var f = a,
        c = f.alternate,
        d = f.stateNode;
      if (((f = f.tag), c !== null && c === u)) break;
      (f !== 5 && f !== 26 && f !== 27) ||
        d === null ||
        ((c = d),
        e
          ? ((d = Nu(a, n)), d != null && i.unshift(ve(a, d, c)))
          : e || ((d = Nu(a, n)), d != null && i.push(ve(a, d, c)))),
        (a = a.return);
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Wh = /\r\n?/g,
    $h = /\u0000|\uFFFD/g;
  function Eo(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        Wh,
        `
`
      )
      .replace($h, "");
  }
  function To(l, t) {
    return (t = Eo(t)), Eo(l) === t;
  }
  function Dn() {}
  function il(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? t === "body" || (t === "textarea" && u === "") || ka(l, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            t !== "body" &&
            ka(l, "" + u);
        break;
      case "className":
        Ye(l, "class", u);
        break;
      case "tabIndex":
        Ye(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ye(l, a, u);
        break;
      case "style":
        Uc(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          Ye(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        (u = Ge("" + u)), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && il(l, t, "name", e.name, e, null),
                il(l, t, "formEncType", e.formEncType, e, null),
                il(l, t, "formMethod", e.formMethod, e, null),
                il(l, t, "formTarget", e.formTarget, e, null))
              : (il(l, t, "encType", e.encType, e, null),
                il(l, t, "method", e.method, e, null),
                il(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        (u = Ge("" + u)), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = Dn);
        break;
      case "onScroll":
        u != null && W("scroll", l);
        break;
      case "onScrollEnd":
        u != null && W("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(r(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(r(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (a = Ge("" + u)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "" + u)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? l.setAttribute(a, "")
          : u !== !1 &&
            u != null &&
            typeof u != "function" &&
            typeof u != "symbol"
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? l.removeAttribute(a)
          : l.setAttribute(a, u);
        break;
      case "popover":
        W("beforetoggle", l), W("toggle", l), qe(l, "popover", u);
        break;
      case "xlinkActuate":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        qt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        qt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        qt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        qt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        qe(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = O0.get(a) || a), qe(l, a, u));
    }
  }
  function Bf(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Uc(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(r(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(r(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? ka(l, u)
          : (typeof u == "number" || typeof u == "bigint") && ka(l, "" + u);
        break;
      case "onScroll":
        u != null && W("scroll", l);
        break;
      case "onScrollEnd":
        u != null && W("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = Dn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Tc.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((e = a.endsWith("Capture")),
              (t = a.slice(2, e ? a.length - 7 : void 0)),
              (n = l[Kl] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof u == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, u, e);
              break l;
            }
            a in l
              ? (l[a] = u)
              : u === !0
              ? l.setAttribute(a, "")
              : qe(l, a, u);
          }
    }
  }
  function Bl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        W("error", l), W("load", l);
        var u = !1,
          e = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var i = a[n];
            if (i != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  il(l, t, n, i, a, null);
              }
          }
        e && il(l, t, "srcSet", a.srcSet, a, null),
          u && il(l, t, "src", a.src, a, null);
        return;
      case "input":
        W("invalid", l);
        var f = (n = i = e = null),
          c = null,
          d = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var z = a[u];
            if (z != null)
              switch (u) {
                case "name":
                  e = z;
                  break;
                case "type":
                  i = z;
                  break;
                case "checked":
                  c = z;
                  break;
                case "defaultChecked":
                  d = z;
                  break;
                case "value":
                  n = z;
                  break;
                case "defaultValue":
                  f = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null) throw Error(r(137, t));
                  break;
                default:
                  il(l, t, u, z, a, null);
              }
          }
        Mc(l, n, f, c, d, i, e, !1), xe(l);
        return;
      case "select":
        W("invalid", l), (u = i = n = null);
        for (e in a)
          if (a.hasOwnProperty(e) && ((f = a[e]), f != null))
            switch (e) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                u = f;
              default:
                il(l, t, e, f, a, null);
            }
        (t = n),
          (a = i),
          (l.multiple = !!u),
          t != null ? $a(l, !!u, t, !1) : a != null && $a(l, !!u, a, !0);
        return;
      case "textarea":
        W("invalid", l), (n = e = u = null);
        for (i in a)
          if (a.hasOwnProperty(i) && ((f = a[i]), f != null))
            switch (i) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                e = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(r(91));
                break;
              default:
                il(l, t, i, f, a, null);
            }
        pc(l, u, e, n), xe(l);
        return;
      case "option":
        for (c in a)
          if (a.hasOwnProperty(c) && ((u = a[c]), u != null))
            switch (c) {
              case "selected":
                l.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                il(l, t, c, u, a, null);
            }
        return;
      case "dialog":
        W("cancel", l), W("close", l);
        break;
      case "iframe":
      case "object":
        W("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < de.length; u++) W(de[u], l);
        break;
      case "image":
        W("error", l), W("load", l);
        break;
      case "details":
        W("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        W("error", l), W("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (d in a)
          if (a.hasOwnProperty(d) && ((u = a[d]), u != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                il(l, t, d, u, a, null);
            }
        return;
      default:
        if (Fn(t)) {
          for (z in a)
            a.hasOwnProperty(z) &&
              ((u = a[z]), u !== void 0 && Bf(l, t, z, u, a, void 0));
          return;
        }
    }
    for (f in a)
      a.hasOwnProperty(f) && ((u = a[f]), u != null && il(l, t, f, u, a, null));
  }
  function kh(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          i = null,
          f = null,
          c = null,
          d = null,
          z = null;
        for (T in a) {
          var _ = a[T];
          if (a.hasOwnProperty(T) && _ != null)
            switch (T) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = _;
              default:
                u.hasOwnProperty(T) || il(l, t, T, null, u, _);
            }
        }
        for (var S in u) {
          var T = u[S];
          if (((_ = a[S]), u.hasOwnProperty(S) && (T != null || _ != null)))
            switch (S) {
              case "type":
                n = T;
                break;
              case "name":
                e = T;
                break;
              case "checked":
                d = T;
                break;
              case "defaultChecked":
                z = T;
                break;
              case "value":
                i = T;
                break;
              case "defaultValue":
                f = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(r(137, t));
                break;
              default:
                T !== _ && il(l, t, S, T, u, _);
            }
        }
        $n(l, i, f, c, d, z, n, e);
        return;
      case "select":
        T = i = f = S = null;
        for (n in a)
          if (((c = a[n]), a.hasOwnProperty(n) && c != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                T = c;
              default:
                u.hasOwnProperty(n) || il(l, t, n, null, u, c);
            }
        for (e in u)
          if (
            ((n = u[e]),
            (c = a[e]),
            u.hasOwnProperty(e) && (n != null || c != null))
          )
            switch (e) {
              case "value":
                S = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== c && il(l, t, e, n, u, c);
            }
        (t = f),
          (a = i),
          (u = T),
          S != null
            ? $a(l, !!a, S, !1)
            : !!u != !!a &&
              (t != null ? $a(l, !!a, t, !0) : $a(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        T = S = null;
        for (f in a)
          if (
            ((e = a[f]),
            a.hasOwnProperty(f) && e != null && !u.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                il(l, t, f, null, u, e);
            }
        for (i in u)
          if (
            ((e = u[i]),
            (n = a[i]),
            u.hasOwnProperty(i) && (e != null || n != null))
          )
            switch (i) {
              case "value":
                S = e;
                break;
              case "defaultValue":
                T = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(r(91));
                break;
              default:
                e !== n && il(l, t, i, e, u, n);
            }
        Dc(l, S, T);
        return;
      case "option":
        for (var q in a)
          if (
            ((S = a[q]),
            a.hasOwnProperty(q) && S != null && !u.hasOwnProperty(q))
          )
            switch (q) {
              case "selected":
                l.selected = !1;
                break;
              default:
                il(l, t, q, null, u, S);
            }
        for (c in u)
          if (
            ((S = u[c]),
            (T = a[c]),
            u.hasOwnProperty(c) && S !== T && (S != null || T != null))
          )
            switch (c) {
              case "selected":
                l.selected =
                  S && typeof S != "function" && typeof S != "symbol";
                break;
              default:
                il(l, t, c, S, u, T);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var X in a)
          (S = a[X]),
            a.hasOwnProperty(X) &&
              S != null &&
              !u.hasOwnProperty(X) &&
              il(l, t, X, null, u, S);
        for (d in u)
          if (
            ((S = u[d]),
            (T = a[d]),
            u.hasOwnProperty(d) && S !== T && (S != null || T != null))
          )
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(r(137, t));
                break;
              default:
                il(l, t, d, S, u, T);
            }
        return;
      default:
        if (Fn(t)) {
          for (var gl in a)
            (S = a[gl]),
              a.hasOwnProperty(gl) &&
                S !== void 0 &&
                !u.hasOwnProperty(gl) &&
                Bf(l, t, gl, void 0, u, S);
          for (z in u)
            (S = u[z]),
              (T = a[z]),
              !u.hasOwnProperty(z) ||
                S === T ||
                (S === void 0 && T === void 0) ||
                Bf(l, t, z, S, u, T);
          return;
        }
    }
    for (var y in a)
      (S = a[y]),
        a.hasOwnProperty(y) &&
          S != null &&
          !u.hasOwnProperty(y) &&
          il(l, t, y, null, u, S);
    for (_ in u)
      (S = u[_]),
        (T = a[_]),
        !u.hasOwnProperty(_) ||
          S === T ||
          (S == null && T == null) ||
          il(l, t, _, S, u, T);
  }
  var Gf = null,
    Cf = null;
  function pn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function zo(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ao(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function jf(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Qf = null;
  function Fh() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Qf
        ? !1
        : ((Qf = l), !0)
      : ((Qf = null), !1);
  }
  var Oo = typeof setTimeout == "function" ? setTimeout : void 0,
    Ph = typeof clearTimeout == "function" ? clearTimeout : void 0,
    _o = typeof Promise == "function" ? Promise : void 0,
    Ih =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof _o < "u"
        ? function (l) {
            return _o.resolve(null).then(l).catch(ld);
          }
        : Oo;
  function ld(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function Xf(l, t) {
    var a = t,
      u = 0;
    do {
      var e = a.nextSibling;
      if ((l.removeChild(a), e && e.nodeType === 8))
        if (((a = e.data), a === "/$")) {
          if (u === 0) {
            l.removeChild(e), ze(t);
            return;
          }
          u--;
        } else (a !== "$" && a !== "$?" && a !== "$!") || u++;
      a = e;
    } while (a);
    ze(t);
  }
  function Zf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Zf(a), Wn(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function td(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[Uu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !== (e.href == null ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = Et(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function ad(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = Et(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Et(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  function Mo(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return l;
          t--;
        } else a === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Do(l, t, a) {
    switch (((t = pn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(r(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(r(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(r(454));
        return l;
      default:
        throw Error(r(451));
    }
  }
  var yt = new Map(),
    po = new Set();
  function Rn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.ownerDocument;
  }
  var Wt = U.d;
  U.d = { f: ud, r: ed, D: nd, C: id, L: fd, m: cd, X: rd, S: sd, M: od };
  function ud() {
    var l = Wt.f(),
      t = Tn();
    return l || t;
  }
  function ed(l) {
    var t = wa(l);
    t !== null && t.tag === 5 && t.type === "form" ? lr(t) : Wt.r(l);
  }
  var Au = typeof document > "u" ? null : document;
  function Ro(l, t, a) {
    var u = Au;
    if (u && typeof t == "string" && t) {
      var e = nt(t);
      (e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
        po.has(e) ||
          (po.add(e),
          (l = { rel: l, crossOrigin: a, href: t }),
          u.querySelector(e) === null &&
            ((t = u.createElement("link")),
            Bl(t, "link", l),
            Rl(t),
            u.head.appendChild(t)));
    }
  }
  function nd(l) {
    Wt.D(l), Ro("dns-prefetch", l, null);
  }
  function id(l, t) {
    Wt.C(l, t), Ro("preconnect", l, t);
  }
  function fd(l, t, a) {
    Wt.L(l, t, a);
    var u = Au;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + nt(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((e += '[imagesrcset="' + nt(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (e += '[imagesizes="' + nt(a.imageSizes) + '"]'))
        : (e += '[href="' + nt(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = Ou(l);
          break;
        case "script":
          n = _u(l);
      }
      yt.has(n) ||
        ((l = tl(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a
        )),
        yt.set(n, l),
        u.querySelector(e) !== null ||
          (t === "style" && u.querySelector(ye(n))) ||
          (t === "script" && u.querySelector(me(n))) ||
          ((t = u.createElement("link")),
          Bl(t, "link", l),
          Rl(t),
          u.head.appendChild(t)));
    }
  }
  function cd(l, t) {
    Wt.m(l, t);
    var a = Au;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + nt(u) + '"][href="' + nt(l) + '"]',
        n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = _u(l);
      }
      if (
        !yt.has(n) &&
        ((l = tl({ rel: "modulepreload", href: l }, t)),
        yt.set(n, l),
        a.querySelector(e) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(me(n))) return;
        }
        (u = a.createElement("link")),
          Bl(u, "link", l),
          Rl(u),
          a.head.appendChild(u);
      }
    }
  }
  function sd(l, t, a) {
    Wt.S(l, t, a);
    var u = Au;
    if (u && l) {
      var e = Ja(u).hoistableStyles,
        n = Ou(l);
      t = t || "default";
      var i = e.get(n);
      if (!i) {
        var f = { loading: 0, preload: null };
        if ((i = u.querySelector(ye(n)))) f.loading = 5;
        else {
          (l = tl({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = yt.get(n)) && Vf(l, a);
          var c = (i = u.createElement("link"));
          Rl(c),
            Bl(c, "link", l),
            (c._p = new Promise(function (d, z) {
              (c.onload = d), (c.onerror = z);
            })),
            c.addEventListener("load", function () {
              f.loading |= 1;
            }),
            c.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Un(i, t, u);
        }
        (i = { type: "stylesheet", instance: i, count: 1, state: f }),
          e.set(n, i);
      }
    }
  }
  function rd(l, t) {
    Wt.X(l, t);
    var a = Au;
    if (a && l) {
      var u = Ja(a).hoistableScripts,
        e = _u(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(me(e))),
        n ||
          ((l = tl({ src: l, async: !0 }, t)),
          (t = yt.get(e)) && Lf(l, t),
          (n = a.createElement("script")),
          Rl(n),
          Bl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function od(l, t) {
    Wt.M(l, t);
    var a = Au;
    if (a && l) {
      var u = Ja(a).hoistableScripts,
        e = _u(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(me(e))),
        n ||
          ((l = tl({ src: l, async: !0, type: "module" }, t)),
          (t = yt.get(e)) && Lf(l, t),
          (n = a.createElement("script")),
          Rl(n),
          Bl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Uo(l, t, a, u) {
    var e = (e = Ft.current) ? Rn(e) : null;
    if (!e) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Ou(a.href)),
            (a = Ja(e).hoistableStyles),
            (u = a.get(t)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = Ou(a.href);
          var n = Ja(e).hoistableStyles,
            i = n.get(l);
          if (
            (i ||
              ((e = e.ownerDocument || e),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, i),
              (n = e.querySelector(ye(l))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              yt.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                yt.set(l, a),
                n || hd(e, l, a, i.state))),
            t && u === null)
          )
            throw Error(r(528, ""));
          return i;
        }
        if (t && u !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = _u(a)),
              (a = Ja(e).hoistableScripts),
              (u = a.get(t)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, l));
    }
  }
  function Ou(l) {
    return 'href="' + nt(l) + '"';
  }
  function ye(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Ho(l) {
    return tl({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function hd(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (u.loading = 1)
      : ((t = l.createElement("link")),
        (u.preload = t),
        t.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Bl(t, "link", a),
        Rl(t),
        l.head.appendChild(t));
  }
  function _u(l) {
    return '[src="' + nt(l) + '"]';
  }
  function me(l) {
    return "script[async]" + l;
  }
  function No(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + nt(a.href) + '"]');
          if (u) return (t.instance = u), Rl(u), u;
          var e = tl({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (l.ownerDocument || l).createElement("style")),
            Rl(u),
            Bl(u, "style", e),
            Un(u, a.precedence, l),
            (t.instance = u)
          );
        case "stylesheet":
          e = Ou(a.href);
          var n = l.querySelector(ye(e));
          if (n) return (t.state.loading |= 4), (t.instance = n), Rl(n), n;
          (u = Ho(a)),
            (e = yt.get(e)) && Vf(u, e),
            (n = (l.ownerDocument || l).createElement("link")),
            Rl(n);
          var i = n;
          return (
            (i._p = new Promise(function (f, c) {
              (i.onload = f), (i.onerror = c);
            })),
            Bl(n, "link", u),
            (t.state.loading |= 4),
            Un(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = _u(a.src)),
            (e = l.querySelector(me(n)))
              ? ((t.instance = e), Rl(e), e)
              : ((u = a),
                (e = yt.get(n)) && ((u = tl({}, a)), Lf(u, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                Rl(e),
                Bl(e, "link", u),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        !(t.state.loading & 4) &&
        ((u = t.instance), (t.state.loading |= 4), Un(u, a.precedence, l));
    return t.instance;
  }
  function Un(l, t, a) {
    for (
      var u = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        e = u.length ? u[u.length - 1] : null,
        n = e,
        i = 0;
      i < u.length;
      i++
    ) {
      var f = u[i];
      if (f.dataset.precedence === t) n = f;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function Vf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function Lf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var Hn = null;
  function qo(l, t, a) {
    if (Hn === null) {
      var u = new Map(),
        e = (Hn = new Map());
      e.set(a, u);
    } else (e = Hn), (u = e.get(a)), u || ((u = new Map()), e.set(a, u));
    if (u.has(l)) return u;
    for (
      u.set(l, null), a = a.getElementsByTagName(l), e = 0;
      e < a.length;
      e++
    ) {
      var n = a[e];
      if (
        !(
          n[Uu] ||
          n[Gl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var f = u.get(i);
        f ? f.push(n) : u.set(i, [n]);
      }
    }
    return u;
  }
  function Yo(l, t, a) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function dd(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function xo(l) {
    return !(l.type === "stylesheet" && !(l.state.loading & 3));
  }
  var ge = null;
  function vd() {}
  function yd(l, t, a) {
    if (ge === null) throw Error(r(475));
    var u = ge;
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      !(t.state.loading & 4)
    ) {
      if (t.instance === null) {
        var e = Ou(a.href),
          n = l.querySelector(ye(e));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (u.count++, (u = Nn.bind(u)), l.then(u, u)),
            (t.state.loading |= 4),
            (t.instance = n),
            Rl(n);
          return;
        }
        (n = l.ownerDocument || l),
          (a = Ho(a)),
          (e = yt.get(e)) && Vf(a, e),
          (n = n.createElement("link")),
          Rl(n);
        var i = n;
        (i._p = new Promise(function (f, c) {
          (i.onload = f), (i.onerror = c);
        })),
          Bl(n, "link", a),
          (t.instance = n);
      }
      u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(t, l),
        (l = t.state.preload) &&
          !(t.state.loading & 3) &&
          (u.count++,
          (t = Nn.bind(u)),
          l.addEventListener("load", t),
          l.addEventListener("error", t));
    }
  }
  function md() {
    if (ge === null) throw Error(r(475));
    var l = ge;
    return (
      l.stylesheets && l.count === 0 && Kf(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((l.stylesheets && Kf(l, l.stylesheets), l.unsuspend)) {
                var u = l.unsuspend;
                (l.unsuspend = null), u();
              }
            }, 6e4);
            return (
              (l.unsuspend = t),
              function () {
                (l.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function Nn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Kf(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var qn = null;
  function Kf(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (qn = new Map()),
        t.forEach(gd, l),
        (qn = null),
        Nn.call(l));
  }
  function gd(l, t) {
    if (!(t.state.loading & 4)) {
      var a = qn.get(l);
      if (a) var u = a.get(null);
      else {
        (a = new Map()), qn.set(l, a);
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var i = e[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (a.set(i.dataset.precedence, i), (u = i));
        }
        u && a.set(null, u);
      }
      (e = t.instance),
        (i = e.getAttribute("data-precedence")),
        (n = a.get(i) || u),
        n === u && a.set(null, e),
        a.set(i, e),
        this.count++,
        (u = Nn.bind(this)),
        e.addEventListener("load", u),
        e.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Se = {
    $$typeof: ol,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0,
  };
  function Sd(l, t, a, u, e, n, i, f) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = wn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = wn(0)),
      (this.hiddenUpdates = wn(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map());
  }
  function Bo(l, t, a, u, e, n, i, f, c, d, z, _) {
    return (
      (l = new Sd(l, t, a, i, f, c, d, _)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = dt(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = zi()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: u, isDehydrated: a, cache: t }),
      af(n),
      l
    );
  }
  function Go(l) {
    return l ? ((l = uu), l) : uu;
  }
  function Co(l, t, a, u, e, n) {
    (e = Go(e)),
      u.context === null ? (u.context = e) : (u.pendingContext = e),
      (u = ca(t)),
      (u.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (a = sa(l, u, t)),
      a !== null && (Zl(a, l, t), te(a, l, t));
  }
  function jo(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function wf(l, t) {
    jo(l, t), (l = l.alternate) && jo(l, t);
  }
  function Qo(l) {
    if (l.tag === 13) {
      var t = ta(l, 67108864);
      t !== null && Zl(t, l, 67108864), wf(l, 67108864);
    }
  }
  var Yn = !0;
  function bd(l, t, a, u) {
    var e = G.T;
    G.T = null;
    var n = U.p;
    try {
      (U.p = 2), Jf(l, t, a, u);
    } finally {
      (U.p = n), (G.T = e);
    }
  }
  function Ed(l, t, a, u) {
    var e = G.T;
    G.T = null;
    var n = U.p;
    try {
      (U.p = 8), Jf(l, t, a, u);
    } finally {
      (U.p = n), (G.T = e);
    }
  }
  function Jf(l, t, a, u) {
    if (Yn) {
      var e = Wf(u);
      if (e === null) xf(l, t, u, xn, a), Zo(l, u);
      else if (zd(e, l, t, a, u)) u.stopPropagation();
      else if ((Zo(l, u), t & 4 && -1 < Td.indexOf(l))) {
        for (; e !== null; ) {
          var n = wa(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = za(n.pendingLanes);
                  if (i !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var c = 1 << (31 - kl(i));
                      (f.entanglements[1] |= c), (i &= ~c);
                    }
                    pt(n), !(vl & 6) && ((Sn = At() + 500), he(0));
                  }
                }
                break;
              case 13:
                (f = ta(n, 2)), f !== null && Zl(f, n, 2), Tn(), wf(n, 2);
            }
          if (((n = Wf(u)), n === null && xf(l, t, u, xn, a), n === e)) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else xf(l, t, u, null, a);
    }
  }
  function Wf(l) {
    return (l = In(l)), $f(l);
  }
  var xn = null;
  function $f(l) {
    if (((xn = null), (l = Aa(l)), l !== null)) {
      var t = j(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = cl(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (xn = l), null;
  }
  function Xo(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (i0()) {
          case rc:
            return 2;
          case oc:
            return 8;
          case Re:
          case f0:
            return 32;
          case hc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var kf = !1,
    ma = null,
    ga = null,
    Sa = null,
    be = new Map(),
    Ee = new Map(),
    ba = [],
    Td =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Zo(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ma = null;
        break;
      case "dragenter":
      case "dragleave":
        ga = null;
        break;
      case "mouseover":
      case "mouseout":
        Sa = null;
        break;
      case "pointerover":
      case "pointerout":
        be.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ee.delete(t.pointerId);
    }
  }
  function Te(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = wa(t)), t !== null && Qo(t)),
        l)
      : ((l.eventSystemFlags |= u),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function zd(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return (ma = Te(ma, l, t, a, u, e)), !0;
      case "dragenter":
        return (ga = Te(ga, l, t, a, u, e)), !0;
      case "mouseover":
        return (Sa = Te(Sa, l, t, a, u, e)), !0;
      case "pointerover":
        var n = e.pointerId;
        return be.set(n, Te(be.get(n) || null, l, t, a, u, e)), !0;
      case "gotpointercapture":
        return (
          (n = e.pointerId), Ee.set(n, Te(Ee.get(n) || null, l, t, a, u, e)), !0
        );
    }
    return !1;
  }
  function Vo(l) {
    var t = Aa(l.target);
    if (t !== null) {
      var a = j(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = cl(a)), t !== null)) {
            (l.blockedOn = t),
              m0(l.priority, function () {
                if (a.tag === 13) {
                  var u = tt(),
                    e = ta(a, u);
                  e !== null && Zl(e, a, u), wf(a, u);
                }
              });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Bn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = Wf(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        (Pn = u), a.target.dispatchEvent(u), (Pn = null);
      } else return (t = wa(a)), t !== null && Qo(t), (l.blockedOn = a), !1;
      t.shift();
    }
    return !0;
  }
  function Lo(l, t, a) {
    Bn(l) && a.delete(t);
  }
  function Ad() {
    (kf = !1),
      ma !== null && Bn(ma) && (ma = null),
      ga !== null && Bn(ga) && (ga = null),
      Sa !== null && Bn(Sa) && (Sa = null),
      be.forEach(Lo),
      Ee.forEach(Lo);
  }
  function Gn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      kf ||
        ((kf = !0),
        E.unstable_scheduleCallback(E.unstable_NormalPriority, Ad)));
  }
  var Cn = null;
  function Ko(l) {
    Cn !== l &&
      ((Cn = l),
      E.unstable_scheduleCallback(E.unstable_NormalPriority, function () {
        Cn === l && (Cn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            u = l[t + 1],
            e = l[t + 2];
          if (typeof u != "function") {
            if ($f(u || a) === null) continue;
            break;
          }
          var n = wa(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            Ci(n, { pending: !0, data: e, method: a.method, action: u }, u, e));
        }
      }));
  }
  function ze(l) {
    function t(c) {
      return Gn(c, l);
    }
    ma !== null && Gn(ma, l),
      ga !== null && Gn(ga, l),
      Sa !== null && Gn(Sa, l),
      be.forEach(t),
      Ee.forEach(t);
    for (var a = 0; a < ba.length; a++) {
      var u = ba[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < ba.length && ((a = ba[0]), a.blockedOn === null); )
      Vo(a), a.blockedOn === null && ba.shift();
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var e = a[u],
          n = a[u + 1],
          i = e[Kl] || null;
        if (typeof n == "function") i || Ko(a);
        else if (i) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (i = n[Kl] || null))) f = i.formAction;
            else if ($f(e) !== null) continue;
          } else f = i.action;
          typeof f == "function" ? (a[u + 1] = f) : (a.splice(u, 3), (u -= 3)),
            Ko(a);
        }
      }
  }
  function Ff(l) {
    this._internalRoot = l;
  }
  (jn.prototype.render = Ff.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var a = t.current,
        u = tt();
      Co(a, u, l, t, null, null);
    }),
    (jn.prototype.unmount = Ff.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          l.tag === 0 && Eu(),
            Co(l.current, 2, null, l, null, null),
            Tn(),
            (t[Ka] = null);
        }
      });
  function jn(l) {
    this._internalRoot = l;
  }
  jn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Sc();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ba.length && t !== 0 && t < ba[a].priority; a++);
      ba.splice(a, 0, l), a === 0 && Vo(l);
    }
  };
  var wo = s.version;
  if (wo !== "19.0.0") throw Error(r(527, wo, "19.0.0"));
  U.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(r(188))
        : ((l = Object.keys(l).join(",")), Error(r(268, l)));
    return (
      (l = M(t)),
      (l = l !== null ? C(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Od = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: G,
    findFiberByHostInstance: Aa,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qn.isDisabled && Qn.supportsFiber)
      try {
        (Du = Qn.inject(Od)), ($l = Qn);
      } catch {}
  }
  return (
    (Oe.createRoot = function (l, t) {
      if (!b(l)) throw Error(r(299));
      var a = !1,
        u = "",
        e = cr,
        n = sr,
        i = rr,
        f = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (f = t.unstable_transitionCallbacks)),
        (t = Bo(l, 1, !1, null, null, a, u, e, n, i, f, null)),
        (l[Ka] = t.current),
        Yf(l.nodeType === 8 ? l.parentNode : l),
        new Ff(t)
      );
    }),
    (Oe.hydrateRoot = function (l, t, a) {
      if (!b(l)) throw Error(r(299));
      var u = !1,
        e = "",
        n = cr,
        i = sr,
        f = rr,
        c = null,
        d = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (i = a.onCaughtError),
          a.onRecoverableError !== void 0 && (f = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (c = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (d = a.formState)),
        (t = Bo(l, 1, !0, t, a ?? null, u, e, n, i, f, c, d)),
        (t.context = Go(null)),
        (a = t.current),
        (u = tt()),
        (e = ca(u)),
        (e.callback = null),
        sa(a, e, u),
        (t.current.lanes = u),
        Ru(t, u),
        pt(t),
        (l[Ka] = t.current),
        Yf(l),
        new jn(t)
      );
    }),
    (Oe.version = "19.0.0"),
    Oe
  );
}
var a0;
function xd() {
  if (a0) return lc.exports;
  a0 = 1;
  function E() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (s) {
        console.error(s);
      }
  }
  return E(), (lc.exports = Yd()), lc.exports;
}
var Bd = xd();
function Gd(E) {
  for (var s = [], v = 1; v < arguments.length; v++) s[v - 1] = arguments[v];
  E && E.addEventListener && E.addEventListener.apply(E, s);
}
function Cd(E) {
  for (var s = [], v = 1; v < arguments.length; v++) s[v - 1] = arguments[v];
  E && E.removeEventListener && E.removeEventListener.apply(E, s);
}
var ec = typeof window < "u",
  jd = function (E) {
    Rt.useEffect(E, []);
  },
  Qd = function (E) {
    var s = Rt.useRef(E);
    (s.current = E),
      jd(function () {
        return function () {
          return s.current();
        };
      });
  },
  Xd = function (E) {
    var s = Rt.useRef(0),
      v = Rt.useState(E),
      r = v[0],
      b = v[1],
      m = Rt.useCallback(function (D) {
        cancelAnimationFrame(s.current),
          (s.current = requestAnimationFrame(function () {
            b(D);
          }));
      }, []);
    return (
      Qd(function () {
        cancelAnimationFrame(s.current);
      }),
      [r, m]
    );
  },
  Zd = function (E) {
    var s = {},
      v = s.initialWidth,
      r = v === void 0 ? 1 / 0 : v,
      b = s.initialHeight,
      m = b === void 0 ? 1 / 0 : b,
      D = s.onChange,
      N = Xd({
        width: ec ? window.innerWidth : r,
        height: ec ? window.innerHeight : m,
      }),
      p = N[0],
      O = N[1];
    return (
      Rt.useEffect(function () {
        if (ec) {
          var Q = function () {
            var al = window.innerWidth,
              el = window.innerHeight;
            O({ width: al, height: el }), D && D(al, el);
          };
          return (
            Gd(window, "resize", Q),
            function () {
              Cd(window, "resize", Q);
            }
          );
        }
      }, []),
      p
    );
  },
  nc,
  u0;
function Vd() {
  if (u0) return nc;
  u0 = 1;
  var E = {
    linear: function (s, v, r, b) {
      var m = r - v;
      return (m * s) / b + v;
    },
    easeInQuad: function (s, v, r, b) {
      var m = r - v;
      return m * (s /= b) * s + v;
    },
    easeOutQuad: function (s, v, r, b) {
      var m = r - v;
      return -m * (s /= b) * (s - 2) + v;
    },
    easeInOutQuad: function (s, v, r, b) {
      var m = r - v;
      return (s /= b / 2) < 1
        ? (m / 2) * s * s + v
        : (-m / 2) * (--s * (s - 2) - 1) + v;
    },
    easeInCubic: function (s, v, r, b) {
      var m = r - v;
      return m * (s /= b) * s * s + v;
    },
    easeOutCubic: function (s, v, r, b) {
      var m = r - v;
      return m * ((s = s / b - 1) * s * s + 1) + v;
    },
    easeInOutCubic: function (s, v, r, b) {
      var m = r - v;
      return (s /= b / 2) < 1
        ? (m / 2) * s * s * s + v
        : (m / 2) * ((s -= 2) * s * s + 2) + v;
    },
    easeInQuart: function (s, v, r, b) {
      var m = r - v;
      return m * (s /= b) * s * s * s + v;
    },
    easeOutQuart: function (s, v, r, b) {
      var m = r - v;
      return -m * ((s = s / b - 1) * s * s * s - 1) + v;
    },
    easeInOutQuart: function (s, v, r, b) {
      var m = r - v;
      return (s /= b / 2) < 1
        ? (m / 2) * s * s * s * s + v
        : (-m / 2) * ((s -= 2) * s * s * s - 2) + v;
    },
    easeInQuint: function (s, v, r, b) {
      var m = r - v;
      return m * (s /= b) * s * s * s * s + v;
    },
    easeOutQuint: function (s, v, r, b) {
      var m = r - v;
      return m * ((s = s / b - 1) * s * s * s * s + 1) + v;
    },
    easeInOutQuint: function (s, v, r, b) {
      var m = r - v;
      return (s /= b / 2) < 1
        ? (m / 2) * s * s * s * s * s + v
        : (m / 2) * ((s -= 2) * s * s * s * s + 2) + v;
    },
    easeInSine: function (s, v, r, b) {
      var m = r - v;
      return -m * Math.cos((s / b) * (Math.PI / 2)) + m + v;
    },
    easeOutSine: function (s, v, r, b) {
      var m = r - v;
      return m * Math.sin((s / b) * (Math.PI / 2)) + v;
    },
    easeInOutSine: function (s, v, r, b) {
      var m = r - v;
      return (-m / 2) * (Math.cos((Math.PI * s) / b) - 1) + v;
    },
    easeInExpo: function (s, v, r, b) {
      var m = r - v;
      return s == 0 ? v : m * Math.pow(2, 10 * (s / b - 1)) + v;
    },
    easeOutExpo: function (s, v, r, b) {
      var m = r - v;
      return s == b ? v + m : m * (-Math.pow(2, (-10 * s) / b) + 1) + v;
    },
    easeInOutExpo: function (s, v, r, b) {
      var m = r - v;
      return s === 0
        ? v
        : s === b
        ? v + m
        : (s /= b / 2) < 1
        ? (m / 2) * Math.pow(2, 10 * (s - 1)) + v
        : (m / 2) * (-Math.pow(2, -10 * --s) + 2) + v;
    },
    easeInCirc: function (s, v, r, b) {
      var m = r - v;
      return -m * (Math.sqrt(1 - (s /= b) * s) - 1) + v;
    },
    easeOutCirc: function (s, v, r, b) {
      var m = r - v;
      return m * Math.sqrt(1 - (s = s / b - 1) * s) + v;
    },
    easeInOutCirc: function (s, v, r, b) {
      var m = r - v;
      return (s /= b / 2) < 1
        ? (-m / 2) * (Math.sqrt(1 - s * s) - 1) + v
        : (m / 2) * (Math.sqrt(1 - (s -= 2) * s) + 1) + v;
    },
    easeInElastic: function (s, v, r, b) {
      var m = r - v,
        D,
        N,
        p;
      return (
        (p = 1.70158),
        (N = 0),
        (D = m),
        s === 0
          ? v
          : (s /= b) === 1
          ? v + m
          : (N || (N = b * 0.3),
            D < Math.abs(m)
              ? ((D = m), (p = N / 4))
              : (p = (N / (2 * Math.PI)) * Math.asin(m / D)),
            -(
              D *
              Math.pow(2, 10 * (s -= 1)) *
              Math.sin(((s * b - p) * (2 * Math.PI)) / N)
            ) + v)
      );
    },
    easeOutElastic: function (s, v, r, b) {
      var m = r - v,
        D,
        N,
        p;
      return (
        (p = 1.70158),
        (N = 0),
        (D = m),
        s === 0
          ? v
          : (s /= b) === 1
          ? v + m
          : (N || (N = b * 0.3),
            D < Math.abs(m)
              ? ((D = m), (p = N / 4))
              : (p = (N / (2 * Math.PI)) * Math.asin(m / D)),
            D *
              Math.pow(2, -10 * s) *
              Math.sin(((s * b - p) * (2 * Math.PI)) / N) +
              m +
              v)
      );
    },
    easeInOutElastic: function (s, v, r, b) {
      var m = r - v,
        D,
        N,
        p;
      return (
        (p = 1.70158),
        (N = 0),
        (D = m),
        s === 0
          ? v
          : (s /= b / 2) === 2
          ? v + m
          : (N || (N = b * (0.3 * 1.5)),
            D < Math.abs(m)
              ? ((D = m), (p = N / 4))
              : (p = (N / (2 * Math.PI)) * Math.asin(m / D)),
            s < 1
              ? -0.5 *
                  (D *
                    Math.pow(2, 10 * (s -= 1)) *
                    Math.sin(((s * b - p) * (2 * Math.PI)) / N)) +
                v
              : D *
                  Math.pow(2, -10 * (s -= 1)) *
                  Math.sin(((s * b - p) * (2 * Math.PI)) / N) *
                  0.5 +
                m +
                v)
      );
    },
    easeInBack: function (s, v, r, b, m) {
      var D = r - v;
      return (
        m === void 0 && (m = 1.70158), D * (s /= b) * s * ((m + 1) * s - m) + v
      );
    },
    easeOutBack: function (s, v, r, b, m) {
      var D = r - v;
      return (
        m === void 0 && (m = 1.70158),
        D * ((s = s / b - 1) * s * ((m + 1) * s + m) + 1) + v
      );
    },
    easeInOutBack: function (s, v, r, b, m) {
      var D = r - v;
      return (
        m === void 0 && (m = 1.70158),
        (s /= b / 2) < 1
          ? (D / 2) * (s * s * (((m *= 1.525) + 1) * s - m)) + v
          : (D / 2) * ((s -= 2) * s * (((m *= 1.525) + 1) * s + m) + 2) + v
      );
    },
    easeInBounce: function (s, v, r, b) {
      var m = r - v,
        D;
      return (D = E.easeOutBounce(b - s, 0, m, b)), m - D + v;
    },
    easeOutBounce: function (s, v, r, b) {
      var m = r - v;
      return (s /= b) < 1 / 2.75
        ? m * (7.5625 * s * s) + v
        : s < 2 / 2.75
        ? m * (7.5625 * (s -= 1.5 / 2.75) * s + 0.75) + v
        : s < 2.5 / 2.75
        ? m * (7.5625 * (s -= 2.25 / 2.75) * s + 0.9375) + v
        : m * (7.5625 * (s -= 2.625 / 2.75) * s + 0.984375) + v;
    },
    easeInOutBounce: function (s, v, r, b) {
      var m = r - v,
        D;
      return s < b / 2
        ? ((D = E.easeInBounce(s * 2, 0, m, b)), D * 0.5 + v)
        : ((D = E.easeOutBounce(s * 2 - b, 0, m, b)), D * 0.5 + m * 0.5 + v);
    },
  };
  return (nc = E), nc;
}
var Ld = Vd();
function Kd(E) {
  return (E * Math.PI) / 180;
}
function at(E, s) {
  return E + Math.random() * (s - E);
}
function wd(E, s) {
  return Math.floor(E + Math.random() * (s - E + 1));
}
var _e;
(function (E) {
  (E[(E.Circle = 0)] = "Circle"),
    (E[(E.Square = 1)] = "Square"),
    (E[(E.Strip = 2)] = "Strip");
})(_e || (_e = {}));
var Ta;
(function (E) {
  (E[(E.Positive = 1)] = "Positive"), (E[(E.Negative = -1)] = "Negative");
})(Ta || (Ta = {}));
class Jd {
  constructor(s, v, r, b) {
    this.getOptions = v;
    const {
      colors: m,
      initialVelocityX: D,
      initialVelocityY: N,
    } = this.getOptions();
    (this.context = s),
      (this.x = r),
      (this.y = b),
      (this.w = at(5, 20)),
      (this.h = at(5, 20)),
      (this.radius = at(5, 10)),
      (this.vx = typeof D == "number" ? at(-D, D) : at(D.min, D.max)),
      (this.vy = typeof N == "number" ? at(-N, 0) : at(N.min, N.max)),
      (this.shape = wd(0, 2)),
      (this.angle = Kd(at(0, 360))),
      (this.angularSpin = at(-0.2, 0.2)),
      (this.color = m[Math.floor(Math.random() * m.length)]),
      (this.rotateY = at(0, 1)),
      (this.rotationDirection = at(0, 1) ? Ta.Positive : Ta.Negative);
  }
  update() {
    const {
      gravity: s,
      wind: v,
      friction: r,
      opacity: b,
      drawShape: m,
    } = this.getOptions();
    (this.x += this.vx),
      (this.y += this.vy),
      (this.vy += s),
      (this.vx += v),
      (this.vx *= r),
      (this.vy *= r),
      this.rotateY >= 1 && this.rotationDirection === Ta.Positive
        ? (this.rotationDirection = Ta.Negative)
        : this.rotateY <= -1 &&
          this.rotationDirection === Ta.Negative &&
          (this.rotationDirection = Ta.Positive);
    const D = 0.1 * this.rotationDirection;
    if (
      ((this.rotateY += D),
      (this.angle += this.angularSpin),
      this.context.save(),
      this.context.translate(this.x, this.y),
      this.context.rotate(this.angle),
      this.context.scale(1, this.rotateY),
      this.context.rotate(this.angle),
      this.context.beginPath(),
      (this.context.fillStyle = this.color),
      (this.context.strokeStyle = this.color),
      (this.context.globalAlpha = b),
      (this.context.lineCap = "round"),
      (this.context.lineWidth = 2),
      m && typeof m == "function")
    )
      m.call(this, this.context);
    else
      switch (this.shape) {
        case _e.Circle: {
          this.context.beginPath(),
            this.context.arc(0, 0, this.radius, 0, 2 * Math.PI),
            this.context.fill();
          break;
        }
        case _e.Square: {
          this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
          break;
        }
        case _e.Strip: {
          this.context.fillRect(-this.w / 6, -this.h / 2, this.w / 3, this.h);
          break;
        }
      }
    this.context.closePath(), this.context.restore();
  }
}
class Wd {
  constructor(s, v) {
    (this.x = 0),
      (this.y = 0),
      (this.w = 0),
      (this.h = 0),
      (this.lastNumberOfPieces = 0),
      (this.tweenInitTime = Date.now()),
      (this.particles = []),
      (this.particlesGenerated = 0),
      (this.removeParticleAt = (b) => {
        this.particles.splice(b, 1);
      }),
      (this.getParticle = () => {
        const b = at(this.x, this.w + this.x),
          m = at(this.y, this.h + this.y);
        return new Jd(this.context, this.getOptions, b, m);
      }),
      (this.animate = () => {
        const {
            canvas: b,
            context: m,
            particlesGenerated: D,
            lastNumberOfPieces: N,
          } = this,
          {
            run: p,
            recycle: O,
            numberOfPieces: Q,
            debug: al,
            tweenFunction: el,
            tweenDuration: ol,
          } = this.getOptions();
        if (!p) return !1;
        const Ml = this.particles.length,
          Dl = O ? Ml : D,
          ql = Date.now();
        if (Dl < Q) {
          N !== Q && ((this.tweenInitTime = ql), (this.lastNumberOfPieces = Q));
          const { tweenInitTime: pl } = this,
            bl = ql - pl > ol ? ol : Math.max(0, ql - pl),
            Wl = el(bl, Dl, Q, ol),
            mt = Math.round(Wl - Dl);
          for (let $ = 0; $ < mt; $++) this.particles.push(this.getParticle());
          this.particlesGenerated += mt;
        }
        return (
          al &&
            ((m.font = "12px sans-serif"),
            (m.fillStyle = "#333"),
            (m.textAlign = "right"),
            m.fillText(`Particles: ${Ml}`, b.width - 10, b.height - 20)),
          this.particles.forEach((pl, bl) => {
            pl.update(),
              (pl.y > b.height ||
                pl.y < -100 ||
                pl.x > b.width + 100 ||
                pl.x < -100) &&
                (O && Dl <= Q
                  ? (this.particles[bl] = this.getParticle())
                  : this.removeParticleAt(bl));
          }),
          Ml > 0 || Dl < Q
        );
      }),
      (this.canvas = s);
    const r = this.canvas.getContext("2d");
    if (!r) throw new Error("Could not get canvas context");
    (this.context = r), (this.getOptions = v);
  }
}
const cc = {
  width: typeof window < "u" ? window.innerWidth : 300,
  height: typeof window < "u" ? window.innerHeight : 200,
  numberOfPieces: 200,
  friction: 0.99,
  wind: 0,
  gravity: 0.1,
  initialVelocityX: 4,
  initialVelocityY: 10,
  colors: [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548",
  ],
  opacity: 1,
  debug: !1,
  tweenFunction: Ld.easeInOutQuad,
  tweenDuration: 5e3,
  recycle: !0,
  run: !0,
};
class $d {
  constructor(s, v) {
    (this.lastFrameTime = Date.now()),
      (this.setOptionsWithDefaults = (b) => {
        const m = {
          confettiSource: { x: 0, y: 0, w: this.canvas.width, h: 0 },
        };
        (this._options = { ...m, ...cc, ...b }),
          Object.assign(this, b.confettiSource);
      }),
      (this.update = () => {
        const {
          options: { run: b, onConfettiComplete: m, frameRate: D },
          canvas: N,
          context: p,
        } = this;
        if (D) {
          const O = Date.now(),
            Q = O - this.lastFrameTime;
          if (Q < 1e3 / D) {
            this.rafId = requestAnimationFrame(this.update);
            return;
          }
          this.lastFrameTime = O - (Q % D);
        }
        b && ((p.fillStyle = "white"), p.clearRect(0, 0, N.width, N.height)),
          this.generator.animate()
            ? (this.rafId = requestAnimationFrame(this.update))
            : (m &&
                typeof m == "function" &&
                this.generator.particlesGenerated > 0 &&
                m.call(this, this),
              (this._options.run = !1));
      }),
      (this.reset = () => {
        this.generator &&
          this.generator.particlesGenerated > 0 &&
          ((this.generator.particlesGenerated = 0),
          (this.generator.particles = []),
          (this.generator.lastNumberOfPieces = 0));
      }),
      (this.stop = () => {
        (this.options = { run: !1 }),
          this.rafId &&
            (cancelAnimationFrame(this.rafId), (this.rafId = void 0));
      }),
      (this.canvas = s);
    const r = this.canvas.getContext("2d");
    if (!r) throw new Error("Could not get canvas context");
    (this.context = r),
      (this.generator = new Wd(this.canvas, () => this.options)),
      (this.options = v),
      this.update();
  }
  get options() {
    return this._options;
  }
  set options(s) {
    var b, m;
    const v = (b = this._options) == null ? void 0 : b.run,
      r = (m = this._options) == null ? void 0 : m.recycle;
    this.setOptionsWithDefaults(s),
      this.generator &&
        (Object.assign(this.generator, this.options.confettiSource),
        typeof s.recycle == "boolean" &&
          s.recycle &&
          r === !1 &&
          (this.generator.lastNumberOfPieces =
            this.generator.particles.length)),
      typeof s.run == "boolean" && s.run && v === !1 && this.update();
  }
}
const kd = Xn.createRef();
class sc extends Xn.Component {
  constructor(s) {
    super(s), (this.canvas = Xn.createRef()), (this.canvas = s.canvasRef || kd);
  }
  componentDidMount() {
    if (this.canvas.current) {
      const s = ic(this.props)[0];
      this.confetti = new $d(this.canvas.current, s);
    }
  }
  componentDidUpdate() {
    const s = ic(this.props)[0];
    this.confetti && (this.confetti.options = s);
  }
  componentWillUnmount() {
    this.confetti && this.confetti.stop(), (this.confetti = void 0);
  }
  render() {
    const [s, v] = ic(this.props),
      r = {
        zIndex: 2,
        position: "absolute",
        pointerEvents: "none",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        ...v.style,
      };
    return ll.jsx("canvas", {
      width: s.width,
      height: s.height,
      ref: this.canvas,
      ...v,
      style: r,
    });
  }
}
sc.defaultProps = { ...cc };
sc.displayName = "ReactConfetti";
function ic(E) {
  const s = {},
    v = {},
    r = {},
    b = [
      ...Object.keys(cc),
      "confettiSource",
      "drawShape",
      "onConfettiComplete",
      "frameRate",
    ],
    m = ["canvasRef"];
  for (const D in E) {
    const N = E[D];
    b.includes(D) ? (s[D] = N) : m.includes(D) ? (m[D] = N) : (r[D] = N);
  }
  return [s, r, v];
}
const Fd = Xn.forwardRef((E, s) => ll.jsx(sc, { canvasRef: s, ...E }));
function Pd({
  children: E,
  className: s = "",
  colors: v = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed: r = 8,
  showBorder: b = !1,
}) {
  const m = {
    backgroundImage: `linear-gradient(to right, ${v.join(", ")})`,
    animationDuration: `${r}s`,
  };
  return ll.jsxs("div", {
    className: `relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${s}`,
    children: [
      b &&
        ll.jsx("div", {
          className:
            "absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient",
          style: { ...m, backgroundSize: "300% 100%" },
          children: ll.jsx("div", {
            className: "absolute inset-0 bg-black rounded-[1.25rem] z-[-1]",
            style: {
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            },
          }),
        }),
      ll.jsx("div", {
        className:
          "inline-block relative z-2 text-transparent bg-cover animate-gradient",
        style: {
          ...m,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        },
        children: E,
      }),
    ],
  });
}
const Id = "/assets/nayy.jpg",
  lv = "/assets/song.mp3";
function tv() {
  const { width: E, height: s } = Zd(),
    [v, r] = Rt.useState(!1),
    [b, m] = Rt.useState(!1),
    D = () => {
      r(!0);
    },
    N = () => {
      m(!0);
    };
  return ll.jsxs(ll.Fragment, {
    children: [
      v && ll.jsx(Fd, { width: E, height: s }),
      ll.jsxs("div", {
        className: "mt-20 p-5",
        children: [
          ll.jsxs(Pd, {
            className:
              " text-center text-5xl lg:text-6xl font-bold break-after-avoid",
            children: [
              "Happy Valentine's Day, ",
              ll.jsx("span", {
                className:
                  "underline decoration-dotted pb-5 decoration-5 decoration-red-400",
                children: "Lala",
              }),
              " ",
            ],
          }),
          ll.jsx("div", {
            className:
              "w-[200px] h-[200px] shadow-red-300 shadow-2xl mx-auto mt-10 overflow-hidden rounded-full",
            children: ll.jsx("img", {
              className: " rounded-full shadow-red-800 shadow-2xl",
              src: Id,
              alt: "Lala",
            }),
          }),
        ],
      }),
      ll.jsxs("div", {
        className: `w-full h-auto   flex justify-center ${
          v ? "px-5" : "items-center"
        }`,
        children: [
          v
            ? ll.jsx(av, { toggleFlower: N, showFlower: b })
            : ll.jsxs("button", {
                onClick: D,
                className:
                  "animate__animated animate__ animate__infinite animate__delay-2 bg-red-400 text-white p-2 cursor-pointer font-bold animate__tada animate__animated animate__infinite animate__duration-2s rounded-sm shadow-2xl relative  flex justify-between items-center mt-5",
                children: [
                  "For my valentine ",
                  ll.jsx("img", {
                    className: " w-10 h-10",
                    src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWFldnQ3ajVveXgxcG9zeTRqcHIxbTdlZms1aXd3d2JvbDNhMHQzMCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/fGHSIjGVYSxq3HApkx/giphy.gif",
                    alt: "cadeau gif",
                  }),
                ],
              }),
          b && ll.jsx(uv, {}),
        ],
      }),
    ],
  });
}
const av = ({ toggleFlower: E, showFlower: s }) =>
    ll.jsx(ll.Fragment, {
      children: ll.jsxs("div", {
        className:
          "w-full lg:w-1/2 border-dashed max-h-[1450px] border-2 p-5 border-gray-300 relative animate__animated animate__fadeInUp",
        children: [
          ll.jsx("h1", {
            className: "italic",
            children: "14 February 2025 - Dari Olan",
          }),
          ll.jsx("hr", { className: "mt-5 text-gray-200" }),
          ll.jsx("p", {
            className: "mt-5 ",
            children:
              "i know that i can be a difficult person sometimes, but trust me, i do love you, yesterday, today and forever. You probably wanted a flower for this day and i'm sorry for that.  I can just give you this virtual flower, i promise i'll buy you one by myself one day. I love you Babe❤️, click to the button bellow to get your flower :-).",
          }),
          s &&
            ll.jsx("img", {
              className: "animate__animated animate__fadeInUp mx-auto",
              src: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXhheDcyd2FmYXZ0c2V2Z3F1NDh5MXI4a3NqMW5zcWU4YWZqcXpyZSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/L4NdxLGpIF1Rhft6n3/giphy.gif",
              alt: "cadeau fleur",
            }),
          ll.jsx("button", {
            onClick: E,
            className: `mt-5 animate__animated  bg-red-400 text-white p-2 cursor-pointer font-bold animate__tada animate__animated ${
              s ? "" : "animate__infinite"
            } animate__duration-2s rounded-sm shadow-2xl ${
              s ? "animate__hinge" : ""
            }`,
            children: "Get the flower 🌹",
          }),
        ],
      }),
    }),
  uv = () =>
    ll.jsx(ll.Fragment, {
      children: ll.jsx("audio", { autoPlay: !0, src: lv }),
    });
Bd.createRoot(document.getElementById("root")).render(
  ll.jsx(Rt.StrictMode, { children: ll.jsx(tv, {}) })
);
