(function () {
    const m = document.createElement("link").relList;
    if (m && m.supports && m.supports("modulepreload")) return;
    for (const S of document.querySelectorAll('link[rel="modulepreload"]')) x(S);
    new MutationObserver((S) => {
        for (const C of S)
            if (C.type === "childList")
                for (const E of C.addedNodes)
                    E.tagName === "LINK" && E.rel === "modulepreload" && x(E);
    }).observe(document, { childList: !0, subtree: !0 });
    function c(S) {
        const C = {};
        return (
            S.integrity && (C.integrity = S.integrity),
            S.referrerPolicy && (C.referrerPolicy = S.referrerPolicy),
            S.crossOrigin === "use-credentials"
                ? (C.credentials = "include")
                : S.crossOrigin === "anonymous"
                  ? (C.credentials = "omit")
                  : (C.credentials = "same-origin"),
            C
        );
    }
    function x(S) {
        if (S.ep) return;
        S.ep = !0;
        const C = c(S);
        fetch(S.href, C);
    }
})();
function rd(u) {
    return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default")
        ? u.default
        : u;
}
var Ai = { exports: {} },
    Tr = {},
    $i = { exports: {} },
    b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hs;
function od() {
    if (Hs) return b;
    Hs = 1;
    var u = Symbol.for("react.element"),
        m = Symbol.for("react.portal"),
        c = Symbol.for("react.fragment"),
        x = Symbol.for("react.strict_mode"),
        S = Symbol.for("react.profiler"),
        C = Symbol.for("react.provider"),
        E = Symbol.for("react.context"),
        U = Symbol.for("react.forward_ref"),
        P = Symbol.for("react.suspense"),
        H = Symbol.for("react.memo"),
        W = Symbol.for("react.lazy"),
        K = Symbol.iterator;
    function Y(d) {
        return d === null || typeof d != "object"
            ? null
            : ((d = (K && d[K]) || d["@@iterator"]), typeof d == "function" ? d : null);
    }
    var re = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        G = Object.assign,
        O = {};
    function L(d, g, q) {
        (this.props = d), (this.context = g), (this.refs = O), (this.updater = q || re);
    }
    (L.prototype.isReactComponent = {}),
        (L.prototype.setState = function (d, g) {
            if (typeof d != "object" && typeof d != "function" && d != null)
                throw Error(
                    "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
                );
            this.updater.enqueueSetState(this, d, g, "setState");
        }),
        (L.prototype.forceUpdate = function (d) {
            this.updater.enqueueForceUpdate(this, d, "forceUpdate");
        });
    function Z() {}
    Z.prototype = L.prototype;
    function F(d, g, q) {
        (this.props = d), (this.context = g), (this.refs = O), (this.updater = q || re);
    }
    var j = (F.prototype = new Z());
    (j.constructor = F), G(j, L.prototype), (j.isPureReactComponent = !0);
    var B = Array.isArray,
        ue = Object.prototype.hasOwnProperty,
        ae = { current: null },
        X = { key: !0, ref: !0, __self: !0, __source: !0 };
    function J(d, g, q) {
        var ee,
            oe = {},
            le = null,
            pe = null;
        if (g != null)
            for (ee in (g.ref !== void 0 && (pe = g.ref),
            g.key !== void 0 && (le = "" + g.key),
            g))
                ue.call(g, ee) && !X.hasOwnProperty(ee) && (oe[ee] = g[ee]);
        var ce = arguments.length - 2;
        if (ce === 1) oe.children = q;
        else if (1 < ce) {
            for (var ge = Array(ce), tt = 0; tt < ce; tt++) ge[tt] = arguments[tt + 2];
            oe.children = ge;
        }
        if (d && d.defaultProps)
            for (ee in ((ce = d.defaultProps), ce))
                oe[ee] === void 0 && (oe[ee] = ce[ee]);
        return { $$typeof: u, type: d, key: le, ref: pe, props: oe, _owner: ae.current };
    }
    function Ce(d, g) {
        return {
            $$typeof: u,
            type: d.type,
            key: g,
            ref: d.ref,
            props: d.props,
            _owner: d._owner,
        };
    }
    function Le(d) {
        return typeof d == "object" && d !== null && d.$$typeof === u;
    }
    function Fe(d) {
        var g = { "=": "=0", ":": "=2" };
        return (
            "$" +
            d.replace(/[=:]/g, function (q) {
                return g[q];
            })
        );
    }
    var Re = /\/+/g;
    function Ie(d, g) {
        return typeof d == "object" && d !== null && d.key != null
            ? Fe("" + d.key)
            : g.toString(36);
    }
    function be(d, g, q, ee, oe) {
        var le = typeof d;
        (le === "undefined" || le === "boolean") && (d = null);
        var pe = !1;
        if (d === null) pe = !0;
        else
            switch (le) {
                case "string":
                case "number":
                    pe = !0;
                    break;
                case "object":
                    switch (d.$$typeof) {
                        case u:
                        case m:
                            pe = !0;
                    }
            }
        if (pe)
            return (
                (pe = d),
                (oe = oe(pe)),
                (d = ee === "" ? "." + Ie(pe, 0) : ee),
                B(oe)
                    ? ((q = ""),
                      d != null && (q = d.replace(Re, "$&/") + "/"),
                      be(oe, g, q, "", function (tt) {
                          return tt;
                      }))
                    : oe != null &&
                      (Le(oe) &&
                          (oe = Ce(
                              oe,
                              q +
                                  (!oe.key || (pe && pe.key === oe.key)
                                      ? ""
                                      : ("" + oe.key).replace(Re, "$&/") + "/") +
                                  d,
                          )),
                      g.push(oe)),
                1
            );
        if (((pe = 0), (ee = ee === "" ? "." : ee + ":"), B(d)))
            for (var ce = 0; ce < d.length; ce++) {
                le = d[ce];
                var ge = ee + Ie(le, ce);
                pe += be(le, g, q, ge, oe);
            }
        else if (((ge = Y(d)), typeof ge == "function"))
            for (d = ge.call(d), ce = 0; !(le = d.next()).done; )
                (le = le.value), (ge = ee + Ie(le, ce++)), (pe += be(le, g, q, ge, oe));
        else if (le === "object")
            throw (
                ((g = String(d)),
                Error(
                    "Objects are not valid as a React child (found: " +
                        (g === "[object Object]"
                            ? "object with keys {" + Object.keys(d).join(", ") + "}"
                            : g) +
                        "). If you meant to render a collection of children, use an array instead.",
                ))
            );
        return pe;
    }
    function et(d, g, q) {
        if (d == null) return d;
        var ee = [],
            oe = 0;
        return (
            be(d, ee, "", "", function (le) {
                return g.call(q, le, oe++);
            }),
            ee
        );
    }
    function je(d) {
        if (d._status === -1) {
            var g = d._result;
            (g = g()),
                g.then(
                    function (q) {
                        (d._status === 0 || d._status === -1) &&
                            ((d._status = 1), (d._result = q));
                    },
                    function (q) {
                        (d._status === 0 || d._status === -1) &&
                            ((d._status = 2), (d._result = q));
                    },
                ),
                d._status === -1 && ((d._status = 0), (d._result = g));
        }
        if (d._status === 1) return d._result.default;
        throw d._result;
    }
    var de = { current: null },
        T = { transition: null },
        V = {
            ReactCurrentDispatcher: de,
            ReactCurrentBatchConfig: T,
            ReactCurrentOwner: ae,
        };
    function R() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    return (
        (b.Children = {
            map: et,
            forEach: function (d, g, q) {
                et(
                    d,
                    function () {
                        g.apply(this, arguments);
                    },
                    q,
                );
            },
            count: function (d) {
                var g = 0;
                return (
                    et(d, function () {
                        g++;
                    }),
                    g
                );
            },
            toArray: function (d) {
                return (
                    et(d, function (g) {
                        return g;
                    }) || []
                );
            },
            only: function (d) {
                if (!Le(d))
                    throw Error(
                        "React.Children.only expected to receive a single React element child.",
                    );
                return d;
            },
        }),
        (b.Component = L),
        (b.Fragment = c),
        (b.Profiler = S),
        (b.PureComponent = F),
        (b.StrictMode = x),
        (b.Suspense = P),
        (b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V),
        (b.act = R),
        (b.cloneElement = function (d, g, q) {
            if (d == null)
                throw Error(
                    "React.cloneElement(...): The argument must be a React element, but you passed " +
                        d +
                        ".",
                );
            var ee = G({}, d.props),
                oe = d.key,
                le = d.ref,
                pe = d._owner;
            if (g != null) {
                if (
                    (g.ref !== void 0 && ((le = g.ref), (pe = ae.current)),
                    g.key !== void 0 && (oe = "" + g.key),
                    d.type && d.type.defaultProps)
                )
                    var ce = d.type.defaultProps;
                for (ge in g)
                    ue.call(g, ge) &&
                        !X.hasOwnProperty(ge) &&
                        (ee[ge] = g[ge] === void 0 && ce !== void 0 ? ce[ge] : g[ge]);
            }
            var ge = arguments.length - 2;
            if (ge === 1) ee.children = q;
            else if (1 < ge) {
                ce = Array(ge);
                for (var tt = 0; tt < ge; tt++) ce[tt] = arguments[tt + 2];
                ee.children = ce;
            }
            return { $$typeof: u, type: d.type, key: oe, ref: le, props: ee, _owner: pe };
        }),
        (b.createContext = function (d) {
            return (
                (d = {
                    $$typeof: E,
                    _currentValue: d,
                    _currentValue2: d,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null,
                }),
                (d.Provider = { $$typeof: C, _context: d }),
                (d.Consumer = d)
            );
        }),
        (b.createElement = J),
        (b.createFactory = function (d) {
            var g = J.bind(null, d);
            return (g.type = d), g;
        }),
        (b.createRef = function () {
            return { current: null };
        }),
        (b.forwardRef = function (d) {
            return { $$typeof: U, render: d };
        }),
        (b.isValidElement = Le),
        (b.lazy = function (d) {
            return { $$typeof: W, _payload: { _status: -1, _result: d }, _init: je };
        }),
        (b.memo = function (d, g) {
            return { $$typeof: H, type: d, compare: g === void 0 ? null : g };
        }),
        (b.startTransition = function (d) {
            var g = T.transition;
            T.transition = {};
            try {
                d();
            } finally {
                T.transition = g;
            }
        }),
        (b.unstable_act = R),
        (b.useCallback = function (d, g) {
            return de.current.useCallback(d, g);
        }),
        (b.useContext = function (d) {
            return de.current.useContext(d);
        }),
        (b.useDebugValue = function () {}),
        (b.useDeferredValue = function (d) {
            return de.current.useDeferredValue(d);
        }),
        (b.useEffect = function (d, g) {
            return de.current.useEffect(d, g);
        }),
        (b.useId = function () {
            return de.current.useId();
        }),
        (b.useImperativeHandle = function (d, g, q) {
            return de.current.useImperativeHandle(d, g, q);
        }),
        (b.useInsertionEffect = function (d, g) {
            return de.current.useInsertionEffect(d, g);
        }),
        (b.useLayoutEffect = function (d, g) {
            return de.current.useLayoutEffect(d, g);
        }),
        (b.useMemo = function (d, g) {
            return de.current.useMemo(d, g);
        }),
        (b.useReducer = function (d, g, q) {
            return de.current.useReducer(d, g, q);
        }),
        (b.useRef = function (d) {
            return de.current.useRef(d);
        }),
        (b.useState = function (d) {
            return de.current.useState(d);
        }),
        (b.useSyncExternalStore = function (d, g, q) {
            return de.current.useSyncExternalStore(d, g, q);
        }),
        (b.useTransition = function () {
            return de.current.useTransition();
        }),
        (b.version = "18.3.1"),
        b
    );
}
var Ws;
function Yi() {
    return Ws || ((Ws = 1), ($i.exports = od())), $i.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qs;
function ld() {
    if (Qs) return Tr;
    Qs = 1;
    var u = Yi(),
        m = Symbol.for("react.element"),
        c = Symbol.for("react.fragment"),
        x = Object.prototype.hasOwnProperty,
        S = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        C = { key: !0, ref: !0, __self: !0, __source: !0 };
    function E(U, P, H) {
        var W,
            K = {},
            Y = null,
            re = null;
        H !== void 0 && (Y = "" + H),
            P.key !== void 0 && (Y = "" + P.key),
            P.ref !== void 0 && (re = P.ref);
        for (W in P) x.call(P, W) && !C.hasOwnProperty(W) && (K[W] = P[W]);
        if (U && U.defaultProps)
            for (W in ((P = U.defaultProps), P)) K[W] === void 0 && (K[W] = P[W]);
        return { $$typeof: m, type: U, key: Y, ref: re, props: K, _owner: S.current };
    }
    return (Tr.Fragment = c), (Tr.jsx = E), (Tr.jsxs = E), Tr;
}
var Ks;
function id() {
    return Ks || ((Ks = 1), (Ai.exports = ld())), Ai.exports;
}
var Se = id(),
    se = Yi();
const he = rd(se);
var $o = {},
    Bi = { exports: {} },
    qe = {},
    Vi = { exports: {} },
    Hi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xs;
function ud() {
    return (
        Xs ||
            ((Xs = 1),
            (function (u) {
                function m(T, V) {
                    var R = T.length;
                    T.push(V);
                    e: for (; 0 < R; ) {
                        var d = (R - 1) >>> 1,
                            g = T[d];
                        if (0 < S(g, V)) (T[d] = V), (T[R] = g), (R = d);
                        else break e;
                    }
                }
                function c(T) {
                    return T.length === 0 ? null : T[0];
                }
                function x(T) {
                    if (T.length === 0) return null;
                    var V = T[0],
                        R = T.pop();
                    if (R !== V) {
                        T[0] = R;
                        e: for (var d = 0, g = T.length, q = g >>> 1; d < q; ) {
                            var ee = 2 * (d + 1) - 1,
                                oe = T[ee],
                                le = ee + 1,
                                pe = T[le];
                            if (0 > S(oe, R))
                                le < g && 0 > S(pe, oe)
                                    ? ((T[d] = pe), (T[le] = R), (d = le))
                                    : ((T[d] = oe), (T[ee] = R), (d = ee));
                            else if (le < g && 0 > S(pe, R))
                                (T[d] = pe), (T[le] = R), (d = le);
                            else break e;
                        }
                    }
                    return V;
                }
                function S(T, V) {
                    var R = T.sortIndex - V.sortIndex;
                    return R !== 0 ? R : T.id - V.id;
                }
                if (
                    typeof performance == "object" &&
                    typeof performance.now == "function"
                ) {
                    var C = performance;
                    u.unstable_now = function () {
                        return C.now();
                    };
                } else {
                    var E = Date,
                        U = E.now();
                    u.unstable_now = function () {
                        return E.now() - U;
                    };
                }
                var P = [],
                    H = [],
                    W = 1,
                    K = null,
                    Y = 3,
                    re = !1,
                    G = !1,
                    O = !1,
                    L = typeof setTimeout == "function" ? setTimeout : null,
                    Z = typeof clearTimeout == "function" ? clearTimeout : null,
                    F = typeof setImmediate < "u" ? setImmediate : null;
                typeof navigator < "u" &&
                    navigator.scheduling !== void 0 &&
                    navigator.scheduling.isInputPending !== void 0 &&
                    navigator.scheduling.isInputPending.bind(navigator.scheduling);
                function j(T) {
                    for (var V = c(H); V !== null; ) {
                        if (V.callback === null) x(H);
                        else if (V.startTime <= T)
                            x(H), (V.sortIndex = V.expirationTime), m(P, V);
                        else break;
                        V = c(H);
                    }
                }
                function B(T) {
                    if (((O = !1), j(T), !G))
                        if (c(P) !== null) (G = !0), je(ue);
                        else {
                            var V = c(H);
                            V !== null && de(B, V.startTime - T);
                        }
                }
                function ue(T, V) {
                    (G = !1), O && ((O = !1), Z(J), (J = -1)), (re = !0);
                    var R = Y;
                    try {
                        for (
                            j(V), K = c(P);
                            K !== null && (!(K.expirationTime > V) || (T && !Fe()));

                        ) {
                            var d = K.callback;
                            if (typeof d == "function") {
                                (K.callback = null), (Y = K.priorityLevel);
                                var g = d(K.expirationTime <= V);
                                (V = u.unstable_now()),
                                    typeof g == "function"
                                        ? (K.callback = g)
                                        : K === c(P) && x(P),
                                    j(V);
                            } else x(P);
                            K = c(P);
                        }
                        if (K !== null) var q = !0;
                        else {
                            var ee = c(H);
                            ee !== null && de(B, ee.startTime - V), (q = !1);
                        }
                        return q;
                    } finally {
                        (K = null), (Y = R), (re = !1);
                    }
                }
                var ae = !1,
                    X = null,
                    J = -1,
                    Ce = 5,
                    Le = -1;
                function Fe() {
                    return !(u.unstable_now() - Le < Ce);
                }
                function Re() {
                    if (X !== null) {
                        var T = u.unstable_now();
                        Le = T;
                        var V = !0;
                        try {
                            V = X(!0, T);
                        } finally {
                            V ? Ie() : ((ae = !1), (X = null));
                        }
                    } else ae = !1;
                }
                var Ie;
                if (typeof F == "function")
                    Ie = function () {
                        F(Re);
                    };
                else if (typeof MessageChannel < "u") {
                    var be = new MessageChannel(),
                        et = be.port2;
                    (be.port1.onmessage = Re),
                        (Ie = function () {
                            et.postMessage(null);
                        });
                } else
                    Ie = function () {
                        L(Re, 0);
                    };
                function je(T) {
                    (X = T), ae || ((ae = !0), Ie());
                }
                function de(T, V) {
                    J = L(function () {
                        T(u.unstable_now());
                    }, V);
                }
                (u.unstable_IdlePriority = 5),
                    (u.unstable_ImmediatePriority = 1),
                    (u.unstable_LowPriority = 4),
                    (u.unstable_NormalPriority = 3),
                    (u.unstable_Profiling = null),
                    (u.unstable_UserBlockingPriority = 2),
                    (u.unstable_cancelCallback = function (T) {
                        T.callback = null;
                    }),
                    (u.unstable_continueExecution = function () {
                        G || re || ((G = !0), je(ue));
                    }),
                    (u.unstable_forceFrameRate = function (T) {
                        0 > T || 125 < T
                            ? console.error(
                                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                              )
                            : (Ce = 0 < T ? Math.floor(1e3 / T) : 5);
                    }),
                    (u.unstable_getCurrentPriorityLevel = function () {
                        return Y;
                    }),
                    (u.unstable_getFirstCallbackNode = function () {
                        return c(P);
                    }),
                    (u.unstable_next = function (T) {
                        switch (Y) {
                            case 1:
                            case 2:
                            case 3:
                                var V = 3;
                                break;
                            default:
                                V = Y;
                        }
                        var R = Y;
                        Y = V;
                        try {
                            return T();
                        } finally {
                            Y = R;
                        }
                    }),
                    (u.unstable_pauseExecution = function () {}),
                    (u.unstable_requestPaint = function () {}),
                    (u.unstable_runWithPriority = function (T, V) {
                        switch (T) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                T = 3;
                        }
                        var R = Y;
                        Y = T;
                        try {
                            return V();
                        } finally {
                            Y = R;
                        }
                    }),
                    (u.unstable_scheduleCallback = function (T, V, R) {
                        var d = u.unstable_now();
                        switch (
                            (typeof R == "object" && R !== null
                                ? ((R = R.delay),
                                  (R = typeof R == "number" && 0 < R ? d + R : d))
                                : (R = d),
                            T)
                        ) {
                            case 1:
                                var g = -1;
                                break;
                            case 2:
                                g = 250;
                                break;
                            case 5:
                                g = 1073741823;
                                break;
                            case 4:
                                g = 1e4;
                                break;
                            default:
                                g = 5e3;
                        }
                        return (
                            (g = R + g),
                            (T = {
                                id: W++,
                                callback: V,
                                priorityLevel: T,
                                startTime: R,
                                expirationTime: g,
                                sortIndex: -1,
                            }),
                            R > d
                                ? ((T.sortIndex = R),
                                  m(H, T),
                                  c(P) === null &&
                                      T === c(H) &&
                                      (O ? (Z(J), (J = -1)) : (O = !0), de(B, R - d)))
                                : ((T.sortIndex = g),
                                  m(P, T),
                                  G || re || ((G = !0), je(ue))),
                            T
                        );
                    }),
                    (u.unstable_shouldYield = Fe),
                    (u.unstable_wrapCallback = function (T) {
                        var V = Y;
                        return function () {
                            var R = Y;
                            Y = V;
                            try {
                                return T.apply(this, arguments);
                            } finally {
                                Y = R;
                            }
                        };
                    });
            })(Hi)),
        Hi
    );
}
var Ys;
function ad() {
    return Ys || ((Ys = 1), (Vi.exports = ud())), Vi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gs;
function sd() {
    if (Gs) return qe;
    Gs = 1;
    var u = Yi(),
        m = ad();
    function c(e) {
        for (
            var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
            n < arguments.length;
            n++
        )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
    }
    var x = new Set(),
        S = {};
    function C(e, t) {
        E(e, t), E(e + "Capture", t);
    }
    function E(e, t) {
        for (S[e] = t, e = 0; e < t.length; e++) x.add(t[e]);
    }
    var U = !(
            typeof window > "u" ||
            typeof window.document > "u" ||
            typeof window.document.createElement > "u"
        ),
        P = Object.prototype.hasOwnProperty,
        H =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        W = {},
        K = {};
    function Y(e) {
        return P.call(K, e)
            ? !0
            : P.call(W, e)
              ? !1
              : H.test(e)
                ? (K[e] = !0)
                : ((W[e] = !0), !1);
    }
    function re(e, t, n, r) {
        if (n !== null && n.type === 0) return !1;
        switch (typeof t) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return r
                    ? !1
                    : n !== null
                      ? !n.acceptsBooleans
                      : ((e = e.toLowerCase().slice(0, 5)),
                        e !== "data-" && e !== "aria-");
            default:
                return !1;
        }
    }
    function G(e, t, n, r) {
        if (t === null || typeof t > "u" || re(e, t, n, r)) return !0;
        if (r) return !1;
        if (n !== null)
            switch (n.type) {
                case 3:
                    return !t;
                case 4:
                    return t === !1;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t;
            }
        return !1;
    }
    function O(e, t, n, r, o, l, i) {
        (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = i);
    }
    var L = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
            L[e] = new O(e, 0, !1, e, null, !1, !1);
        }),
        [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
            var t = e[0];
            L[t] = new O(t, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
            L[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
        }),
        [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
        ].forEach(function (e) {
            L[e] = new O(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
                L[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            L[e] = new O(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
            L[e] = new O(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
            L[e] = new O(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
            L[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
    var Z = /[\-:]([a-z])/g;
    function F(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
            var t = e.replace(Z, F);
            L[t] = new O(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
                var t = e.replace(Z, F);
                L[t] = new O(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(Z, F);
            L[t] = new O(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
            L[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (L.xlinkHref = new O(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
            L[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
    function j(e, t, n, r) {
        var o = L.hasOwnProperty(t) ? L[t] : null;
        (o !== null
            ? o.type !== 0
            : r ||
              !(2 < t.length) ||
              (t[0] !== "o" && t[0] !== "O") ||
              (t[1] !== "n" && t[1] !== "N")) &&
            (G(t, n, o, r) && (n = null),
            r || o === null
                ? Y(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
                : o.mustUseProperty
                  ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
                  : ((t = o.attributeName),
                    (r = o.attributeNamespace),
                    n === null
                        ? e.removeAttribute(t)
                        : ((o = o.type),
                          (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
                          r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var B = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        ue = Symbol.for("react.element"),
        ae = Symbol.for("react.portal"),
        X = Symbol.for("react.fragment"),
        J = Symbol.for("react.strict_mode"),
        Ce = Symbol.for("react.profiler"),
        Le = Symbol.for("react.provider"),
        Fe = Symbol.for("react.context"),
        Re = Symbol.for("react.forward_ref"),
        Ie = Symbol.for("react.suspense"),
        be = Symbol.for("react.suspense_list"),
        et = Symbol.for("react.memo"),
        je = Symbol.for("react.lazy"),
        de = Symbol.for("react.offscreen"),
        T = Symbol.iterator;
    function V(e) {
        return e === null || typeof e != "object"
            ? null
            : ((e = (T && e[T]) || e["@@iterator"]), typeof e == "function" ? e : null);
    }
    var R = Object.assign,
        d;
    function g(e) {
        if (d === void 0)
            try {
                throw Error();
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                d = (t && t[1]) || "";
            }
        return (
            `
` +
            d +
            e
        );
    }
    var q = !1;
    function ee(e, t) {
        if (!e || q) return "";
        q = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (
                    ((t = function () {
                        throw Error();
                    }),
                    Object.defineProperty(t.prototype, "props", {
                        set: function () {
                            throw Error();
                        },
                    }),
                    typeof Reflect == "object" && Reflect.construct)
                ) {
                    try {
                        Reflect.construct(t, []);
                    } catch (v) {
                        var r = v;
                    }
                    Reflect.construct(e, [], t);
                } else {
                    try {
                        t.call();
                    } catch (v) {
                        r = v;
                    }
                    e.call(t.prototype);
                }
            else {
                try {
                    throw Error();
                } catch (v) {
                    r = v;
                }
                e();
            }
        } catch (v) {
            if (v && r && typeof v.stack == "string") {
                for (
                    var o = v.stack.split(`
`),
                        l = r.stack.split(`
`),
                        i = o.length - 1,
                        a = l.length - 1;
                    1 <= i && 0 <= a && o[i] !== l[a];

                )
                    a--;
                for (; 1 <= i && 0 <= a; i--, a--)
                    if (o[i] !== l[a]) {
                        if (i !== 1 || a !== 1)
                            do
                                if ((i--, a--, 0 > a || o[i] !== l[a])) {
                                    var s =
                                        `
` + o[i].replace(" at new ", " at ");
                                    return (
                                        e.displayName &&
                                            s.includes("<anonymous>") &&
                                            (s = s.replace("<anonymous>", e.displayName)),
                                        s
                                    );
                                }
                            while (1 <= i && 0 <= a);
                        break;
                    }
            }
        } finally {
            (q = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : "") ? g(e) : "";
    }
    function oe(e) {
        switch (e.tag) {
            case 5:
                return g(e.type);
            case 16:
                return g("Lazy");
            case 13:
                return g("Suspense");
            case 19:
                return g("SuspenseList");
            case 0:
            case 2:
            case 15:
                return (e = ee(e.type, !1)), e;
            case 11:
                return (e = ee(e.type.render, !1)), e;
            case 1:
                return (e = ee(e.type, !0)), e;
            default:
                return "";
        }
    }
    function le(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case X:
                return "Fragment";
            case ae:
                return "Portal";
            case Ce:
                return "Profiler";
            case J:
                return "StrictMode";
            case Ie:
                return "Suspense";
            case be:
                return "SuspenseList";
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
                case Fe:
                    return (e.displayName || "Context") + ".Consumer";
                case Le:
                    return (e._context.displayName || "Context") + ".Provider";
                case Re:
                    var t = e.render;
                    return (
                        (e = e.displayName),
                        e ||
                            ((e = t.displayName || t.name || ""),
                            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                        e
                    );
                case et:
                    return (
                        (t = e.displayName || null), t !== null ? t : le(e.type) || "Memo"
                    );
                case je:
                    (t = e._payload), (e = e._init);
                    try {
                        return le(e(t));
                    } catch {}
            }
        return null;
    }
    function pe(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return (
                    (e = t.render),
                    (e = e.displayName || e.name || ""),
                    t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
                );
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return le(t);
            case 8:
                return t === J ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function") return t.displayName || t.name || null;
                if (typeof t == "string") return t;
        }
        return null;
    }
    function ce(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return "";
        }
    }
    function ge(e) {
        var t = e.type;
        return (
            (e = e.nodeName) &&
            e.toLowerCase() === "input" &&
            (t === "checkbox" || t === "radio")
        );
    }
    function tt(e) {
        var t = ge(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
        if (
            !e.hasOwnProperty(t) &&
            typeof n < "u" &&
            typeof n.get == "function" &&
            typeof n.set == "function"
        ) {
            var o = n.get,
                l = n.set;
            return (
                Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                        return o.call(this);
                    },
                    set: function (i) {
                        (r = "" + i), l.call(this, i);
                    },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                    getValue: function () {
                        return r;
                    },
                    setValue: function (i) {
                        r = "" + i;
                    },
                    stopTracking: function () {
                        (e._valueTracker = null), delete e[t];
                    },
                }
            );
        }
    }
    function zr(e) {
        e._valueTracker || (e._valueTracker = tt(e));
    }
    function Gi(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return (
            e && (r = ge(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r),
            e !== n ? (t.setValue(e), !0) : !1
        );
    }
    function Lr(e) {
        if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
            return null;
        try {
            return e.activeElement || e.body;
        } catch {
            return e.body;
        }
    }
    function Ko(e, t) {
        var n = t.checked;
        return R({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked,
        });
    }
    function Zi(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue,
            r = t.checked != null ? t.checked : t.defaultChecked;
        (n = ce(t.value != null ? t.value : n)),
            (e._wrapperState = {
                initialChecked: r,
                initialValue: n,
                controlled:
                    t.type === "checkbox" || t.type === "radio"
                        ? t.checked != null
                        : t.value != null,
            });
    }
    function Ji(e, t) {
        (t = t.checked), t != null && j(e, "checked", t, !1);
    }
    function Xo(e, t) {
        Ji(e, t);
        var n = ce(t.value),
            r = t.type;
        if (n != null)
            r === "number"
                ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
                : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value")
            ? Yo(e, t.type, n)
            : t.hasOwnProperty("defaultValue") && Yo(e, t.type, ce(t.defaultValue)),
            t.checked == null &&
                t.defaultChecked != null &&
                (e.defaultChecked = !!t.defaultChecked);
    }
    function qi(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
                !(
                    (r !== "submit" && r !== "reset") ||
                    (t.value !== void 0 && t.value !== null)
                )
            )
                return;
            (t = "" + e._wrapperState.initialValue),
                n || t === e.value || (e.value = t),
                (e.defaultValue = t);
        }
        (n = e.name),
            n !== "" && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            n !== "" && (e.name = n);
    }
    function Yo(e, t, n) {
        (t !== "number" || Lr(e.ownerDocument) !== e) &&
            (n == null
                ? (e.defaultValue = "" + e._wrapperState.initialValue)
                : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var $n = Array.isArray;
    function yn(e, t, n, r) {
        if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
                (o = t.hasOwnProperty("$" + e[n].value)),
                    e[n].selected !== o && (e[n].selected = o),
                    o && r && (e[n].defaultSelected = !0);
        } else {
            for (n = "" + ce(n), t = null, o = 0; o < e.length; o++) {
                if (e[o].value === n) {
                    (e[o].selected = !0), r && (e[o].defaultSelected = !0);
                    return;
                }
                t !== null || e[o].disabled || (t = e[o]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function Go(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(c(91));
        return R({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
        });
    }
    function bi(e, t) {
        var n = t.value;
        if (n == null) {
            if (((n = t.children), (t = t.defaultValue), n != null)) {
                if (t != null) throw Error(c(92));
                if ($n(n)) {
                    if (1 < n.length) throw Error(c(93));
                    n = n[0];
                }
                t = n;
            }
            t == null && (t = ""), (n = t);
        }
        e._wrapperState = { initialValue: ce(n) };
    }
    function eu(e, t) {
        var n = ce(t.value),
            r = ce(t.defaultValue);
        n != null &&
            ((n = "" + n),
            n !== e.value && (e.value = n),
            t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
            r != null && (e.defaultValue = "" + r);
    }
    function tu(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function nu(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function Zo(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml"
            ? nu(t)
            : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
              ? "http://www.w3.org/1999/xhtml"
              : e;
    }
    var Rr,
        ru = (function (e) {
            return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
                ? function (t, n, r, o) {
                      MSApp.execUnsafeLocalFunction(function () {
                          return e(t, n, r, o);
                      });
                  }
                : e;
        })(function (e, t) {
            if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
                e.innerHTML = t;
            else {
                for (
                    Rr = Rr || document.createElement("div"),
                        Rr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                        t = Rr.firstChild;
                    e.firstChild;

                )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
        });
    function Bn(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var Vn = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
        },
        uc = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Vn).forEach(function (e) {
        uc.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vn[t] = Vn[e]);
        });
    });
    function ou(e, t, n) {
        return t == null || typeof t == "boolean" || t === ""
            ? ""
            : n || typeof t != "number" || t === 0 || (Vn.hasOwnProperty(e) && Vn[e])
              ? ("" + t).trim()
              : t + "px";
    }
    function lu(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var r = n.indexOf("--") === 0,
                    o = ou(n, t[n], r);
                n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
            }
    }
    var ac = R(
        { menuitem: !0 },
        {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
        },
    );
    function Jo(e, t) {
        if (t) {
            if (ac[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
                throw Error(c(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(c(60));
                if (
                    typeof t.dangerouslySetInnerHTML != "object" ||
                    !("__html" in t.dangerouslySetInnerHTML)
                )
                    throw Error(c(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(c(62));
        }
    }
    function qo(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
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
    var bo = null;
    function el(e) {
        return (
            (e = e.target || e.srcElement || window),
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
        );
    }
    var tl = null,
        vn = null,
        hn = null;
    function iu(e) {
        if ((e = cr(e))) {
            if (typeof tl != "function") throw Error(c(280));
            var t = e.stateNode;
            t && ((t = eo(t)), tl(e.stateNode, e.type, t));
        }
    }
    function uu(e) {
        vn ? (hn ? hn.push(e) : (hn = [e])) : (vn = e);
    }
    function au() {
        if (vn) {
            var e = vn,
                t = hn;
            if (((hn = vn = null), iu(e), t)) for (e = 0; e < t.length; e++) iu(t[e]);
        }
    }
    function su(e, t) {
        return e(t);
    }
    function cu() {}
    var nl = !1;
    function fu(e, t, n) {
        if (nl) return e(t, n);
        nl = !0;
        try {
            return su(e, t, n);
        } finally {
            (nl = !1), (vn !== null || hn !== null) && (cu(), au());
        }
    }
    function Hn(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = eo(n);
        if (r === null) return null;
        n = r[t];
        e: switch (t) {
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
                (r = !r.disabled) ||
                    ((e = e.type),
                    (r = !(
                        e === "button" ||
                        e === "input" ||
                        e === "select" ||
                        e === "textarea"
                    ))),
                    (e = !r);
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(c(231, t, typeof n));
        return n;
    }
    var rl = !1;
    if (U)
        try {
            var Wn = {};
            Object.defineProperty(Wn, "passive", {
                get: function () {
                    rl = !0;
                },
            }),
                window.addEventListener("test", Wn, Wn),
                window.removeEventListener("test", Wn, Wn);
        } catch {
            rl = !1;
        }
    function sc(e, t, n, r, o, l, i, a, s) {
        var v = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, v);
        } catch (_) {
            this.onError(_);
        }
    }
    var Qn = !1,
        Ir = null,
        Or = !1,
        ol = null,
        cc = {
            onError: function (e) {
                (Qn = !0), (Ir = e);
            },
        };
    function fc(e, t, n, r, o, l, i, a, s) {
        (Qn = !1), (Ir = null), sc.apply(cc, arguments);
    }
    function dc(e, t, n, r, o, l, i, a, s) {
        if ((fc.apply(this, arguments), Qn)) {
            if (Qn) {
                var v = Ir;
                (Qn = !1), (Ir = null);
            } else throw Error(c(198));
            Or || ((Or = !0), (ol = v));
        }
    }
    function en(e) {
        var t = e,
            n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
            e = t;
            do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
            while (e);
        }
        return t.tag === 3 ? n : null;
    }
    function du(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (
                (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
                t !== null)
            )
                return t.dehydrated;
        }
        return null;
    }
    function pu(e) {
        if (en(e) !== e) throw Error(c(188));
    }
    function pc(e) {
        var t = e.alternate;
        if (!t) {
            if (((t = en(e)), t === null)) throw Error(c(188));
            return t !== e ? null : e;
        }
        for (var n = e, r = t; ; ) {
            var o = n.return;
            if (o === null) break;
            var l = o.alternate;
            if (l === null) {
                if (((r = o.return), r !== null)) {
                    n = r;
                    continue;
                }
                break;
            }
            if (o.child === l.child) {
                for (l = o.child; l; ) {
                    if (l === n) return pu(o), e;
                    if (l === r) return pu(o), t;
                    l = l.sibling;
                }
                throw Error(c(188));
            }
            if (n.return !== r.return) (n = o), (r = l);
            else {
                for (var i = !1, a = o.child; a; ) {
                    if (a === n) {
                        (i = !0), (n = o), (r = l);
                        break;
                    }
                    if (a === r) {
                        (i = !0), (r = o), (n = l);
                        break;
                    }
                    a = a.sibling;
                }
                if (!i) {
                    for (a = l.child; a; ) {
                        if (a === n) {
                            (i = !0), (n = l), (r = o);
                            break;
                        }
                        if (a === r) {
                            (i = !0), (r = l), (n = o);
                            break;
                        }
                        a = a.sibling;
                    }
                    if (!i) throw Error(c(189));
                }
            }
            if (n.alternate !== r) throw Error(c(190));
        }
        if (n.tag !== 3) throw Error(c(188));
        return n.stateNode.current === n ? e : t;
    }
    function mu(e) {
        return (e = pc(e)), e !== null ? yu(e) : null;
    }
    function yu(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null; ) {
            var t = yu(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var vu = m.unstable_scheduleCallback,
        hu = m.unstable_cancelCallback,
        mc = m.unstable_shouldYield,
        yc = m.unstable_requestPaint,
        Ee = m.unstable_now,
        vc = m.unstable_getCurrentPriorityLevel,
        ll = m.unstable_ImmediatePriority,
        gu = m.unstable_UserBlockingPriority,
        Dr = m.unstable_NormalPriority,
        hc = m.unstable_LowPriority,
        _u = m.unstable_IdlePriority,
        Mr = null,
        _t = null;
    function gc(e) {
        if (_t && typeof _t.onCommitFiberRoot == "function")
            try {
                _t.onCommitFiberRoot(Mr, e, void 0, (e.current.flags & 128) === 128);
            } catch {}
    }
    var dt = Math.clz32 ? Math.clz32 : kc,
        _c = Math.log,
        wc = Math.LN2;
    function kc(e) {
        return (e >>>= 0), e === 0 ? 32 : (31 - ((_c(e) / wc) | 0)) | 0;
    }
    var Fr = 64,
        jr = 4194304;
    function Kn(e) {
        switch (e & -e) {
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
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e;
        }
    }
    function Ur(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0,
            o = e.suspendedLanes,
            l = e.pingedLanes,
            i = n & 268435455;
        if (i !== 0) {
            var a = i & ~o;
            a !== 0 ? (r = Kn(a)) : ((l &= i), l !== 0 && (r = Kn(l)));
        } else (i = n & ~o), i !== 0 ? (r = Kn(i)) : l !== 0 && (r = Kn(l));
        if (r === 0) return 0;
        if (
            t !== 0 &&
            t !== r &&
            !(t & o) &&
            ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
        )
            return t;
        if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
            for (e = e.entanglements, t &= r; 0 < t; )
                (n = 31 - dt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
        return r;
    }
    function Sc(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
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
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1;
        }
    }
    function xc(e, t) {
        for (
            var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                l = e.pendingLanes;
            0 < l;

        ) {
            var i = 31 - dt(l),
                a = 1 << i,
                s = o[i];
            s === -1
                ? (!(a & n) || a & r) && (o[i] = Sc(a, t))
                : s <= t && (e.expiredLanes |= a),
                (l &= ~a);
        }
    }
    function il(e) {
        return (
            (e = e.pendingLanes & -1073741825),
            e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
        );
    }
    function wu() {
        var e = Fr;
        return (Fr <<= 1), !(Fr & 4194240) && (Fr = 64), e;
    }
    function ul(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
    }
    function Xn(e, t, n) {
        (e.pendingLanes |= t),
            t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            (e = e.eventTimes),
            (t = 31 - dt(t)),
            (e[t] = n);
    }
    function Ec(e, t) {
        var n = e.pendingLanes & ~t;
        (e.pendingLanes = t),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= t),
            (e.mutableReadLanes &= t),
            (e.entangledLanes &= t),
            (t = e.entanglements);
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n; ) {
            var o = 31 - dt(n),
                l = 1 << o;
            (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
        }
    }
    function al(e, t) {
        var n = (e.entangledLanes |= t);
        for (e = e.entanglements; n; ) {
            var r = 31 - dt(n),
                o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
        }
    }
    var fe = 0;
    function ku(e) {
        return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
    }
    var Su,
        sl,
        xu,
        Eu,
        Tu,
        cl = !1,
        Ar = [],
        Dt = null,
        Mt = null,
        Ft = null,
        Yn = new Map(),
        Gn = new Map(),
        jt = [],
        Tc =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
                " ",
            );
    function Cu(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                Dt = null;
                break;
            case "dragenter":
            case "dragleave":
                Mt = null;
                break;
            case "mouseover":
            case "mouseout":
                Ft = null;
                break;
            case "pointerover":
            case "pointerout":
                Yn.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Gn.delete(t.pointerId);
        }
    }
    function Zn(e, t, n, r, o, l) {
        return e === null || e.nativeEvent !== l
            ? ((e = {
                  blockedOn: t,
                  domEventName: n,
                  eventSystemFlags: r,
                  nativeEvent: l,
                  targetContainers: [o],
              }),
              t !== null && ((t = cr(t)), t !== null && sl(t)),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              o !== null && t.indexOf(o) === -1 && t.push(o),
              e);
    }
    function Cc(e, t, n, r, o) {
        switch (t) {
            case "focusin":
                return (Dt = Zn(Dt, e, t, n, r, o)), !0;
            case "dragenter":
                return (Mt = Zn(Mt, e, t, n, r, o)), !0;
            case "mouseover":
                return (Ft = Zn(Ft, e, t, n, r, o)), !0;
            case "pointerover":
                var l = o.pointerId;
                return Yn.set(l, Zn(Yn.get(l) || null, e, t, n, r, o)), !0;
            case "gotpointercapture":
                return (
                    (l = o.pointerId), Gn.set(l, Zn(Gn.get(l) || null, e, t, n, r, o)), !0
                );
        }
        return !1;
    }
    function Nu(e) {
        var t = tn(e.target);
        if (t !== null) {
            var n = en(t);
            if (n !== null) {
                if (((t = n.tag), t === 13)) {
                    if (((t = du(n)), t !== null)) {
                        (e.blockedOn = t),
                            Tu(e.priority, function () {
                                xu(n);
                            });
                        return;
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function $r(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = dl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                (bo = r), n.target.dispatchEvent(r), (bo = null);
            } else return (t = cr(n)), t !== null && sl(t), (e.blockedOn = n), !1;
            t.shift();
        }
        return !0;
    }
    function Pu(e, t, n) {
        $r(e) && n.delete(t);
    }
    function Nc() {
        (cl = !1),
            Dt !== null && $r(Dt) && (Dt = null),
            Mt !== null && $r(Mt) && (Mt = null),
            Ft !== null && $r(Ft) && (Ft = null),
            Yn.forEach(Pu),
            Gn.forEach(Pu);
    }
    function Jn(e, t) {
        e.blockedOn === t &&
            ((e.blockedOn = null),
            cl ||
                ((cl = !0), m.unstable_scheduleCallback(m.unstable_NormalPriority, Nc)));
    }
    function qn(e) {
        function t(o) {
            return Jn(o, e);
        }
        if (0 < Ar.length) {
            Jn(Ar[0], e);
            for (var n = 1; n < Ar.length; n++) {
                var r = Ar[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for (
            Dt !== null && Jn(Dt, e),
                Mt !== null && Jn(Mt, e),
                Ft !== null && Jn(Ft, e),
                Yn.forEach(t),
                Gn.forEach(t),
                n = 0;
            n < jt.length;
            n++
        )
            (r = jt[n]), r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < jt.length && ((n = jt[0]), n.blockedOn === null); )
            Nu(n), n.blockedOn === null && jt.shift();
    }
    var gn = B.ReactCurrentBatchConfig,
        Br = !0;
    function Pc(e, t, n, r) {
        var o = fe,
            l = gn.transition;
        gn.transition = null;
        try {
            (fe = 1), fl(e, t, n, r);
        } finally {
            (fe = o), (gn.transition = l);
        }
    }
    function zc(e, t, n, r) {
        var o = fe,
            l = gn.transition;
        gn.transition = null;
        try {
            (fe = 4), fl(e, t, n, r);
        } finally {
            (fe = o), (gn.transition = l);
        }
    }
    function fl(e, t, n, r) {
        if (Br) {
            var o = dl(e, t, n, r);
            if (o === null) zl(e, t, r, Vr, n), Cu(e, r);
            else if (Cc(o, e, t, n, r)) r.stopPropagation();
            else if ((Cu(e, r), t & 4 && -1 < Tc.indexOf(e))) {
                for (; o !== null; ) {
                    var l = cr(o);
                    if (
                        (l !== null && Su(l),
                        (l = dl(e, t, n, r)),
                        l === null && zl(e, t, r, Vr, n),
                        l === o)
                    )
                        break;
                    o = l;
                }
                o !== null && r.stopPropagation();
            } else zl(e, t, r, null, n);
        }
    }
    var Vr = null;
    function dl(e, t, n, r) {
        if (((Vr = null), (e = el(r)), (e = tn(e)), e !== null))
            if (((t = en(e)), t === null)) e = null;
            else if (((n = t.tag), n === 13)) {
                if (((e = du(t)), e !== null)) return e;
                e = null;
            } else if (n === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null;
            } else t !== e && (e = null);
        return (Vr = e), null;
    }
    function zu(e) {
        switch (e) {
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
                return 1;
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
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (vc()) {
                    case ll:
                        return 1;
                    case gu:
                        return 4;
                    case Dr:
                    case hc:
                        return 16;
                    case _u:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var Ut = null,
        pl = null,
        Hr = null;
    function Lu() {
        if (Hr) return Hr;
        var e,
            t = pl,
            n = t.length,
            r,
            o = "value" in Ut ? Ut.value : Ut.textContent,
            l = o.length;
        for (e = 0; e < n && t[e] === o[e]; e++);
        var i = n - e;
        for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
        return (Hr = o.slice(e, 1 < r ? 1 - r : void 0));
    }
    function Wr(e) {
        var t = e.keyCode;
        return (
            "charCode" in e
                ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
                : (e = t),
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
        );
    }
    function Qr() {
        return !0;
    }
    function Ru() {
        return !1;
    }
    function nt(e) {
        function t(n, r, o, l, i) {
            (this._reactName = n),
                (this._targetInst = o),
                (this.type = r),
                (this.nativeEvent = l),
                (this.target = i),
                (this.currentTarget = null);
            for (var a in e)
                e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
            return (
                (this.isDefaultPrevented = (
                    l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
                )
                    ? Qr
                    : Ru),
                (this.isPropagationStopped = Ru),
                this
            );
        }
        return (
            R(t.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var n = this.nativeEvent;
                    n &&
                        (n.preventDefault
                            ? n.preventDefault()
                            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                        (this.isDefaultPrevented = Qr));
                },
                stopPropagation: function () {
                    var n = this.nativeEvent;
                    n &&
                        (n.stopPropagation
                            ? n.stopPropagation()
                            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                        (this.isPropagationStopped = Qr));
                },
                persist: function () {},
                isPersistent: Qr,
            }),
            t
        );
    }
    var _n = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        ml = nt(_n),
        bn = R({}, _n, { view: 0, detail: 0 }),
        Lc = nt(bn),
        yl,
        vl,
        er,
        Kr = R({}, bn, {
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
            getModifierState: gl,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0
                    ? e.fromElement === e.srcElement
                        ? e.toElement
                        : e.fromElement
                    : e.relatedTarget;
            },
            movementX: function (e) {
                return "movementX" in e
                    ? e.movementX
                    : (e !== er &&
                          (er && e.type === "mousemove"
                              ? ((yl = e.screenX - er.screenX),
                                (vl = e.screenY - er.screenY))
                              : (vl = yl = 0),
                          (er = e)),
                      yl);
            },
            movementY: function (e) {
                return "movementY" in e ? e.movementY : vl;
            },
        }),
        Iu = nt(Kr),
        Rc = R({}, Kr, { dataTransfer: 0 }),
        Ic = nt(Rc),
        Oc = R({}, bn, { relatedTarget: 0 }),
        hl = nt(Oc),
        Dc = R({}, _n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        Mc = nt(Dc),
        Fc = R({}, _n, {
            clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            },
        }),
        jc = nt(Fc),
        Uc = R({}, _n, { data: 0 }),
        Ou = nt(Uc),
        Ac = {
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
        $c = {
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
        Bc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Vc(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Bc[e]) ? !!t[e] : !1;
    }
    function gl() {
        return Vc;
    }
    var Hc = R({}, bn, {
            key: function (e) {
                if (e.key) {
                    var t = Ac[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress"
                    ? ((e = Wr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                    : e.type === "keydown" || e.type === "keyup"
                      ? $c[e.keyCode] || "Unidentified"
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
            getModifierState: gl,
            charCode: function (e) {
                return e.type === "keypress" ? Wr(e) : 0;
            },
            keyCode: function (e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function (e) {
                return e.type === "keypress"
                    ? Wr(e)
                    : e.type === "keydown" || e.type === "keyup"
                      ? e.keyCode
                      : 0;
            },
        }),
        Wc = nt(Hc),
        Qc = R({}, Kr, {
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
        Du = nt(Qc),
        Kc = R({}, bn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: gl,
        }),
        Xc = nt(Kc),
        Yc = R({}, _n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        Gc = nt(Yc),
        Zc = R({}, Kr, {
            deltaX: function (e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
                return "deltaY" in e
                    ? e.deltaY
                    : "wheelDeltaY" in e
                      ? -e.wheelDeltaY
                      : "wheelDelta" in e
                        ? -e.wheelDelta
                        : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        Jc = nt(Zc),
        qc = [9, 13, 27, 32],
        _l = U && "CompositionEvent" in window,
        tr = null;
    U && "documentMode" in document && (tr = document.documentMode);
    var bc = U && "TextEvent" in window && !tr,
        Mu = U && (!_l || (tr && 8 < tr && 11 >= tr)),
        Fu = " ",
        ju = !1;
    function Uu(e, t) {
        switch (e) {
            case "keyup":
                return qc.indexOf(t.keyCode) !== -1;
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
    function Au(e) {
        return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
    }
    var wn = !1;
    function ef(e, t) {
        switch (e) {
            case "compositionend":
                return Au(t);
            case "keypress":
                return t.which !== 32 ? null : ((ju = !0), Fu);
            case "textInput":
                return (e = t.data), e === Fu && ju ? null : e;
            default:
                return null;
        }
    }
    function tf(e, t) {
        if (wn)
            return e === "compositionend" || (!_l && Uu(e, t))
                ? ((e = Lu()), (Hr = pl = Ut = null), (wn = !1), e)
                : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                }
                return null;
            case "compositionend":
                return Mu && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var nf = {
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
    function $u(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!nf[e.type] : t === "textarea";
    }
    function Bu(e, t, n, r) {
        uu(r),
            (t = Jr(t, "onChange")),
            0 < t.length &&
                ((n = new ml("onChange", "change", null, n, r)),
                e.push({ event: n, listeners: t }));
    }
    var nr = null,
        rr = null;
    function rf(e) {
        la(e, 0);
    }
    function Xr(e) {
        var t = Tn(e);
        if (Gi(t)) return e;
    }
    function of(e, t) {
        if (e === "change") return t;
    }
    var Vu = !1;
    if (U) {
        var wl;
        if (U) {
            var kl = "oninput" in document;
            if (!kl) {
                var Hu = document.createElement("div");
                Hu.setAttribute("oninput", "return;"),
                    (kl = typeof Hu.oninput == "function");
            }
            wl = kl;
        } else wl = !1;
        Vu = wl && (!document.documentMode || 9 < document.documentMode);
    }
    function Wu() {
        nr && (nr.detachEvent("onpropertychange", Qu), (rr = nr = null));
    }
    function Qu(e) {
        if (e.propertyName === "value" && Xr(rr)) {
            var t = [];
            Bu(t, rr, e, el(e)), fu(rf, t);
        }
    }
    function lf(e, t, n) {
        e === "focusin"
            ? (Wu(), (nr = t), (rr = n), nr.attachEvent("onpropertychange", Qu))
            : e === "focusout" && Wu();
    }
    function uf(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Xr(rr);
    }
    function af(e, t) {
        if (e === "click") return Xr(t);
    }
    function sf(e, t) {
        if (e === "input" || e === "change") return Xr(t);
    }
    function cf(e, t) {
        return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var pt = typeof Object.is == "function" ? Object.is : cf;
    function or(e, t) {
        if (pt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!P.call(t, o) || !pt(e[o], t[o])) return !1;
        }
        return !0;
    }
    function Ku(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
    }
    function Xu(e, t) {
        var n = Ku(e);
        e = 0;
        for (var r; n; ) {
            if (n.nodeType === 3) {
                if (((r = e + n.textContent.length), e <= t && r >= t))
                    return { node: n, offset: t - e };
                e = r;
            }
            e: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e;
                    }
                    n = n.parentNode;
                }
                n = void 0;
            }
            n = Ku(n);
        }
    }
    function Yu(e, t) {
        return e && t
            ? e === t
                ? !0
                : e && e.nodeType === 3
                  ? !1
                  : t && t.nodeType === 3
                    ? Yu(e, t.parentNode)
                    : "contains" in e
                      ? e.contains(t)
                      : e.compareDocumentPosition
                        ? !!(e.compareDocumentPosition(t) & 16)
                        : !1
            : !1;
    }
    function Gu() {
        for (var e = window, t = Lr(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = Lr(e.document);
        }
        return t;
    }
    function Sl(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
            t &&
            ((t === "input" &&
                (e.type === "text" ||
                    e.type === "search" ||
                    e.type === "tel" ||
                    e.type === "url" ||
                    e.type === "password")) ||
                t === "textarea" ||
                e.contentEditable === "true")
        );
    }
    function ff(e) {
        var t = Gu(),
            n = e.focusedElem,
            r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && Yu(n.ownerDocument.documentElement, n)) {
            if (r !== null && Sl(n)) {
                if (
                    ((t = r.start),
                    (e = r.end),
                    e === void 0 && (e = t),
                    "selectionStart" in n)
                )
                    (n.selectionStart = t),
                        (n.selectionEnd = Math.min(e, n.value.length));
                else if (
                    ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
                    e.getSelection)
                ) {
                    e = e.getSelection();
                    var o = n.textContent.length,
                        l = Math.min(r.start, o);
                    (r = r.end === void 0 ? l : Math.min(r.end, o)),
                        !e.extend && l > r && ((o = r), (r = l), (l = o)),
                        (o = Xu(n, l));
                    var i = Xu(n, r);
                    o &&
                        i &&
                        (e.rangeCount !== 1 ||
                            e.anchorNode !== o.node ||
                            e.anchorOffset !== o.offset ||
                            e.focusNode !== i.node ||
                            e.focusOffset !== i.offset) &&
                        ((t = t.createRange()),
                        t.setStart(o.node, o.offset),
                        e.removeAllRanges(),
                        l > r
                            ? (e.addRange(t), e.extend(i.node, i.offset))
                            : (t.setEnd(i.node, i.offset), e.addRange(t)));
                }
            }
            for (t = [], e = n; (e = e.parentNode); )
                e.nodeType === 1 &&
                    t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
                (e = t[n]),
                    (e.element.scrollLeft = e.left),
                    (e.element.scrollTop = e.top);
        }
    }
    var df = U && "documentMode" in document && 11 >= document.documentMode,
        kn = null,
        xl = null,
        lr = null,
        El = !1;
    function Zu(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        El ||
            kn == null ||
            kn !== Lr(r) ||
            ((r = kn),
            "selectionStart" in r && Sl(r)
                ? (r = { start: r.selectionStart, end: r.selectionEnd })
                : ((r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                  ).getSelection()),
                  (r = {
                      anchorNode: r.anchorNode,
                      anchorOffset: r.anchorOffset,
                      focusNode: r.focusNode,
                      focusOffset: r.focusOffset,
                  })),
            (lr && or(lr, r)) ||
                ((lr = r),
                (r = Jr(xl, "onSelect")),
                0 < r.length &&
                    ((t = new ml("onSelect", "select", null, t, n)),
                    e.push({ event: t, listeners: r }),
                    (t.target = kn))));
    }
    function Yr(e, t) {
        var n = {};
        return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
        );
    }
    var Sn = {
            animationend: Yr("Animation", "AnimationEnd"),
            animationiteration: Yr("Animation", "AnimationIteration"),
            animationstart: Yr("Animation", "AnimationStart"),
            transitionend: Yr("Transition", "TransitionEnd"),
        },
        Tl = {},
        Ju = {};
    U &&
        ((Ju = document.createElement("div").style),
        "AnimationEvent" in window ||
            (delete Sn.animationend.animation,
            delete Sn.animationiteration.animation,
            delete Sn.animationstart.animation),
        "TransitionEvent" in window || delete Sn.transitionend.transition);
    function Gr(e) {
        if (Tl[e]) return Tl[e];
        if (!Sn[e]) return e;
        var t = Sn[e],
            n;
        for (n in t) if (t.hasOwnProperty(n) && n in Ju) return (Tl[e] = t[n]);
        return e;
    }
    var qu = Gr("animationend"),
        bu = Gr("animationiteration"),
        ea = Gr("animationstart"),
        ta = Gr("transitionend"),
        na = new Map(),
        ra =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                " ",
            );
    function At(e, t) {
        na.set(e, t), C(t, [e]);
    }
    for (var Cl = 0; Cl < ra.length; Cl++) {
        var Nl = ra[Cl],
            pf = Nl.toLowerCase(),
            mf = Nl[0].toUpperCase() + Nl.slice(1);
        At(pf, "on" + mf);
    }
    At(qu, "onAnimationEnd"),
        At(bu, "onAnimationIteration"),
        At(ea, "onAnimationStart"),
        At("dblclick", "onDoubleClick"),
        At("focusin", "onFocus"),
        At("focusout", "onBlur"),
        At(ta, "onTransitionEnd"),
        E("onMouseEnter", ["mouseout", "mouseover"]),
        E("onMouseLeave", ["mouseout", "mouseover"]),
        E("onPointerEnter", ["pointerout", "pointerover"]),
        E("onPointerLeave", ["pointerout", "pointerover"]),
        C(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
                " ",
            ),
        ),
        C(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                " ",
            ),
        ),
        C("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
        C(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(" "),
        ),
        C(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(" "),
        ),
        C(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
        );
    var ir =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                " ",
            ),
        yf = new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));
    function oa(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = n), dc(r, t, void 0, e), (e.currentTarget = null);
    }
    function la(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                o = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t)
                    for (var i = r.length - 1; 0 <= i; i--) {
                        var a = r[i],
                            s = a.instance,
                            v = a.currentTarget;
                        if (((a = a.listener), s !== l && o.isPropagationStopped()))
                            break e;
                        oa(o, a, v), (l = s);
                    }
                else
                    for (i = 0; i < r.length; i++) {
                        if (
                            ((a = r[i]),
                            (s = a.instance),
                            (v = a.currentTarget),
                            (a = a.listener),
                            s !== l && o.isPropagationStopped())
                        )
                            break e;
                        oa(o, a, v), (l = s);
                    }
            }
        }
        if (Or) throw ((e = ol), (Or = !1), (ol = null), e);
    }
    function ye(e, t) {
        var n = t[Ml];
        n === void 0 && (n = t[Ml] = new Set());
        var r = e + "__bubble";
        n.has(r) || (ia(t, e, 2, !1), n.add(r));
    }
    function Pl(e, t, n) {
        var r = 0;
        t && (r |= 4), ia(n, e, r, t);
    }
    var Zr = "_reactListening" + Math.random().toString(36).slice(2);
    function ur(e) {
        if (!e[Zr]) {
            (e[Zr] = !0),
                x.forEach(function (n) {
                    n !== "selectionchange" && (yf.has(n) || Pl(n, !1, e), Pl(n, !0, e));
                });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Zr] || ((t[Zr] = !0), Pl("selectionchange", !1, t));
        }
    }
    function ia(e, t, n, r) {
        switch (zu(t)) {
            case 1:
                var o = Pc;
                break;
            case 4:
                o = zc;
                break;
            default:
                o = fl;
        }
        (n = o.bind(null, t, n, e)),
            (o = void 0),
            !rl || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0),
            r
                ? o !== void 0
                    ? e.addEventListener(t, n, { capture: !0, passive: o })
                    : e.addEventListener(t, n, !0)
                : o !== void 0
                  ? e.addEventListener(t, n, { passive: o })
                  : e.addEventListener(t, n, !1);
    }
    function zl(e, t, n, r, o) {
        var l = r;
        if (!(t & 1) && !(t & 2) && r !== null)
            e: for (;;) {
                if (r === null) return;
                var i = r.tag;
                if (i === 3 || i === 4) {
                    var a = r.stateNode.containerInfo;
                    if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
                    if (i === 4)
                        for (i = r.return; i !== null; ) {
                            var s = i.tag;
                            if (
                                (s === 3 || s === 4) &&
                                ((s = i.stateNode.containerInfo),
                                s === o || (s.nodeType === 8 && s.parentNode === o))
                            )
                                return;
                            i = i.return;
                        }
                    for (; a !== null; ) {
                        if (((i = tn(a)), i === null)) return;
                        if (((s = i.tag), s === 5 || s === 6)) {
                            r = l = i;
                            continue e;
                        }
                        a = a.parentNode;
                    }
                }
                r = r.return;
            }
        fu(function () {
            var v = l,
                _ = el(n),
                w = [];
            e: {
                var h = na.get(e);
                if (h !== void 0) {
                    var N = ml,
                        I = e;
                    switch (e) {
                        case "keypress":
                            if (Wr(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            N = Wc;
                            break;
                        case "focusin":
                            (I = "focus"), (N = hl);
                            break;
                        case "focusout":
                            (I = "blur"), (N = hl);
                            break;
                        case "beforeblur":
                        case "afterblur":
                            N = hl;
                            break;
                        case "click":
                            if (n.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            N = Iu;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            N = Ic;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            N = Xc;
                            break;
                        case qu:
                        case bu:
                        case ea:
                            N = Mc;
                            break;
                        case ta:
                            N = Gc;
                            break;
                        case "scroll":
                            N = Lc;
                            break;
                        case "wheel":
                            N = Jc;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            N = jc;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            N = Du;
                    }
                    var D = (t & 4) !== 0,
                        Te = !D && e === "scroll",
                        p = D ? (h !== null ? h + "Capture" : null) : h;
                    D = [];
                    for (var f = v, y; f !== null; ) {
                        y = f;
                        var k = y.stateNode;
                        if (
                            (y.tag === 5 &&
                                k !== null &&
                                ((y = k),
                                p !== null &&
                                    ((k = Hn(f, p)), k != null && D.push(ar(f, k, y)))),
                            Te)
                        )
                            break;
                        f = f.return;
                    }
                    0 < D.length &&
                        ((h = new N(h, I, null, n, _)),
                        w.push({ event: h, listeners: D }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (
                        ((h = e === "mouseover" || e === "pointerover"),
                        (N = e === "mouseout" || e === "pointerout"),
                        h &&
                            n !== bo &&
                            (I = n.relatedTarget || n.fromElement) &&
                            (tn(I) || I[Et]))
                    )
                        break e;
                    if (
                        (N || h) &&
                        ((h =
                            _.window === _
                                ? _
                                : (h = _.ownerDocument)
                                  ? h.defaultView || h.parentWindow
                                  : window),
                        N
                            ? ((I = n.relatedTarget || n.toElement),
                              (N = v),
                              (I = I ? tn(I) : null),
                              I !== null &&
                                  ((Te = en(I)),
                                  I !== Te || (I.tag !== 5 && I.tag !== 6)) &&
                                  (I = null))
                            : ((N = null), (I = v)),
                        N !== I)
                    ) {
                        if (
                            ((D = Iu),
                            (k = "onMouseLeave"),
                            (p = "onMouseEnter"),
                            (f = "mouse"),
                            (e === "pointerout" || e === "pointerover") &&
                                ((D = Du),
                                (k = "onPointerLeave"),
                                (p = "onPointerEnter"),
                                (f = "pointer")),
                            (Te = N == null ? h : Tn(N)),
                            (y = I == null ? h : Tn(I)),
                            (h = new D(k, f + "leave", N, n, _)),
                            (h.target = Te),
                            (h.relatedTarget = y),
                            (k = null),
                            tn(_) === v &&
                                ((D = new D(p, f + "enter", I, n, _)),
                                (D.target = y),
                                (D.relatedTarget = Te),
                                (k = D)),
                            (Te = k),
                            N && I)
                        )
                            t: {
                                for (D = N, p = I, f = 0, y = D; y; y = xn(y)) f++;
                                for (y = 0, k = p; k; k = xn(k)) y++;
                                for (; 0 < f - y; ) (D = xn(D)), f--;
                                for (; 0 < y - f; ) (p = xn(p)), y--;
                                for (; f--; ) {
                                    if (D === p || (p !== null && D === p.alternate))
                                        break t;
                                    (D = xn(D)), (p = xn(p));
                                }
                                D = null;
                            }
                        else D = null;
                        N !== null && ua(w, h, N, D, !1),
                            I !== null && Te !== null && ua(w, Te, I, D, !0);
                    }
                }
                e: {
                    if (
                        ((h = v ? Tn(v) : window),
                        (N = h.nodeName && h.nodeName.toLowerCase()),
                        N === "select" || (N === "input" && h.type === "file"))
                    )
                        var M = of;
                    else if ($u(h))
                        if (Vu) M = sf;
                        else {
                            M = uf;
                            var A = lf;
                        }
                    else
                        (N = h.nodeName) &&
                            N.toLowerCase() === "input" &&
                            (h.type === "checkbox" || h.type === "radio") &&
                            (M = af);
                    if (M && (M = M(e, v))) {
                        Bu(w, M, n, _);
                        break e;
                    }
                    A && A(e, h, v),
                        e === "focusout" &&
                            (A = h._wrapperState) &&
                            A.controlled &&
                            h.type === "number" &&
                            Yo(h, "number", h.value);
                }
                switch (((A = v ? Tn(v) : window), e)) {
                    case "focusin":
                        ($u(A) || A.contentEditable === "true") &&
                            ((kn = A), (xl = v), (lr = null));
                        break;
                    case "focusout":
                        lr = xl = kn = null;
                        break;
                    case "mousedown":
                        El = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        (El = !1), Zu(w, n, _);
                        break;
                    case "selectionchange":
                        if (df) break;
                    case "keydown":
                    case "keyup":
                        Zu(w, n, _);
                }
                var $;
                if (_l)
                    e: {
                        switch (e) {
                            case "compositionstart":
                                var Q = "onCompositionStart";
                                break e;
                            case "compositionend":
                                Q = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                Q = "onCompositionUpdate";
                                break e;
                        }
                        Q = void 0;
                    }
                else
                    wn
                        ? Uu(e, n) && (Q = "onCompositionEnd")
                        : e === "keydown" &&
                          n.keyCode === 229 &&
                          (Q = "onCompositionStart");
                Q &&
                    (Mu &&
                        n.locale !== "ko" &&
                        (wn || Q !== "onCompositionStart"
                            ? Q === "onCompositionEnd" && wn && ($ = Lu())
                            : ((Ut = _),
                              (pl = "value" in Ut ? Ut.value : Ut.textContent),
                              (wn = !0))),
                    (A = Jr(v, Q)),
                    0 < A.length &&
                        ((Q = new Ou(Q, e, null, n, _)),
                        w.push({ event: Q, listeners: A }),
                        $ ? (Q.data = $) : (($ = Au(n)), $ !== null && (Q.data = $)))),
                    ($ = bc ? ef(e, n) : tf(e, n)) &&
                        ((v = Jr(v, "onBeforeInput")),
                        0 < v.length &&
                            ((_ = new Ou("onBeforeInput", "beforeinput", null, n, _)),
                            w.push({ event: _, listeners: v }),
                            (_.data = $)));
            }
            la(w, t);
        });
    }
    function ar(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
    }
    function Jr(e, t) {
        for (var n = t + "Capture", r = []; e !== null; ) {
            var o = e,
                l = o.stateNode;
            o.tag === 5 &&
                l !== null &&
                ((o = l),
                (l = Hn(e, n)),
                l != null && r.unshift(ar(e, l, o)),
                (l = Hn(e, t)),
                l != null && r.push(ar(e, l, o))),
                (e = e.return);
        }
        return r;
    }
    function xn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function ua(e, t, n, r, o) {
        for (var l = t._reactName, i = []; n !== null && n !== r; ) {
            var a = n,
                s = a.alternate,
                v = a.stateNode;
            if (s !== null && s === r) break;
            a.tag === 5 &&
                v !== null &&
                ((a = v),
                o
                    ? ((s = Hn(n, l)), s != null && i.unshift(ar(n, s, a)))
                    : o || ((s = Hn(n, l)), s != null && i.push(ar(n, s, a)))),
                (n = n.return);
        }
        i.length !== 0 && e.push({ event: t, listeners: i });
    }
    var vf = /\r\n?/g,
        hf = /\u0000|\uFFFD/g;
    function aa(e) {
        return (typeof e == "string" ? e : "" + e)
            .replace(
                vf,
                `
`,
            )
            .replace(hf, "");
    }
    function qr(e, t, n) {
        if (((t = aa(t)), aa(e) !== t && n)) throw Error(c(425));
    }
    function br() {}
    var Ll = null,
        Rl = null;
    function Il(e, t) {
        return (
            e === "textarea" ||
            e === "noscript" ||
            typeof t.children == "string" ||
            typeof t.children == "number" ||
            (typeof t.dangerouslySetInnerHTML == "object" &&
                t.dangerouslySetInnerHTML !== null &&
                t.dangerouslySetInnerHTML.__html != null)
        );
    }
    var Ol = typeof setTimeout == "function" ? setTimeout : void 0,
        gf = typeof clearTimeout == "function" ? clearTimeout : void 0,
        sa = typeof Promise == "function" ? Promise : void 0,
        _f =
            typeof queueMicrotask == "function"
                ? queueMicrotask
                : typeof sa < "u"
                  ? function (e) {
                        return sa.resolve(null).then(e).catch(wf);
                    }
                  : Ol;
    function wf(e) {
        setTimeout(function () {
            throw e;
        });
    }
    function Dl(e, t) {
        var n = t,
            r = 0;
        do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && o.nodeType === 8))
                if (((n = o.data), n === "/$")) {
                    if (r === 0) {
                        e.removeChild(o), qn(t);
                        return;
                    }
                    r--;
                } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
            n = o;
        } while (n);
        qn(t);
    }
    function $t(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
                if (t === "/$") return null;
            }
        }
        return e;
    }
    function ca(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--;
                } else n === "/$" && t++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    var En = Math.random().toString(36).slice(2),
        wt = "__reactFiber$" + En,
        sr = "__reactProps$" + En,
        Et = "__reactContainer$" + En,
        Ml = "__reactEvents$" + En,
        kf = "__reactListeners$" + En,
        Sf = "__reactHandles$" + En;
    function tn(e) {
        var t = e[wt];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
            if ((t = n[Et] || n[wt])) {
                if (
                    ((n = t.alternate),
                    t.child !== null || (n !== null && n.child !== null))
                )
                    for (e = ca(e); e !== null; ) {
                        if ((n = e[wt])) return n;
                        e = ca(e);
                    }
                return t;
            }
            (e = n), (n = e.parentNode);
        }
        return null;
    }
    function cr(e) {
        return (
            (e = e[wt] || e[Et]),
            !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
        );
    }
    function Tn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(c(33));
    }
    function eo(e) {
        return e[sr] || null;
    }
    var Fl = [],
        Cn = -1;
    function Bt(e) {
        return { current: e };
    }
    function ve(e) {
        0 > Cn || ((e.current = Fl[Cn]), (Fl[Cn] = null), Cn--);
    }
    function me(e, t) {
        Cn++, (Fl[Cn] = e.current), (e.current = t);
    }
    var Vt = {},
        $e = Bt(Vt),
        Xe = Bt(!1),
        nn = Vt;
    function Nn(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Vt;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
        var o = {},
            l;
        for (l in n) o[l] = t[l];
        return (
            r &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = t),
                (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
        );
    }
    function Ye(e) {
        return (e = e.childContextTypes), e != null;
    }
    function to() {
        ve(Xe), ve($e);
    }
    function fa(e, t, n) {
        if ($e.current !== Vt) throw Error(c(168));
        me($e, t), me(Xe, n);
    }
    function da(e, t, n) {
        var r = e.stateNode;
        if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
        r = r.getChildContext();
        for (var o in r) if (!(o in t)) throw Error(c(108, pe(e) || "Unknown", o));
        return R({}, n, r);
    }
    function no(e) {
        return (
            (e =
                ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vt),
            (nn = $e.current),
            me($e, e),
            me(Xe, Xe.current),
            !0
        );
    }
    function pa(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(c(169));
        n
            ? ((e = da(e, t, nn)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              ve(Xe),
              ve($e),
              me($e, e))
            : ve(Xe),
            me(Xe, n);
    }
    var Tt = null,
        ro = !1,
        jl = !1;
    function ma(e) {
        Tt === null ? (Tt = [e]) : Tt.push(e);
    }
    function xf(e) {
        (ro = !0), ma(e);
    }
    function Ht() {
        if (!jl && Tt !== null) {
            jl = !0;
            var e = 0,
                t = fe;
            try {
                var n = Tt;
                for (fe = 1; e < n.length; e++) {
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                (Tt = null), (ro = !1);
            } catch (o) {
                throw (Tt !== null && (Tt = Tt.slice(e + 1)), vu(ll, Ht), o);
            } finally {
                (fe = t), (jl = !1);
            }
        }
        return null;
    }
    var Pn = [],
        zn = 0,
        oo = null,
        lo = 0,
        it = [],
        ut = 0,
        rn = null,
        Ct = 1,
        Nt = "";
    function on(e, t) {
        (Pn[zn++] = lo), (Pn[zn++] = oo), (oo = e), (lo = t);
    }
    function ya(e, t, n) {
        (it[ut++] = Ct), (it[ut++] = Nt), (it[ut++] = rn), (rn = e);
        var r = Ct;
        e = Nt;
        var o = 32 - dt(r) - 1;
        (r &= ~(1 << o)), (n += 1);
        var l = 32 - dt(t) + o;
        if (30 < l) {
            var i = o - (o % 5);
            (l = (r & ((1 << i) - 1)).toString(32)),
                (r >>= i),
                (o -= i),
                (Ct = (1 << (32 - dt(t) + o)) | (n << o) | r),
                (Nt = l + e);
        } else (Ct = (1 << l) | (n << o) | r), (Nt = e);
    }
    function Ul(e) {
        e.return !== null && (on(e, 1), ya(e, 1, 0));
    }
    function Al(e) {
        for (; e === oo; )
            (oo = Pn[--zn]), (Pn[zn] = null), (lo = Pn[--zn]), (Pn[zn] = null);
        for (; e === rn; )
            (rn = it[--ut]),
                (it[ut] = null),
                (Nt = it[--ut]),
                (it[ut] = null),
                (Ct = it[--ut]),
                (it[ut] = null);
    }
    var rt = null,
        ot = null,
        _e = !1,
        mt = null;
    function va(e, t) {
        var n = ft(5, null, null, 0);
        (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (t = e.deletions),
            t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
    }
    function ha(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return (
                    (t =
                        t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
                            ? null
                            : t),
                    t !== null
                        ? ((e.stateNode = t), (rt = e), (ot = $t(t.firstChild)), !0)
                        : !1
                );
            case 6:
                return (
                    (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                    t !== null ? ((e.stateNode = t), (rt = e), (ot = null), !0) : !1
                );
            case 13:
                return (
                    (t = t.nodeType !== 8 ? null : t),
                    t !== null
                        ? ((n = rn !== null ? { id: Ct, overflow: Nt } : null),
                          (e.memoizedState = {
                              dehydrated: t,
                              treeContext: n,
                              retryLane: 1073741824,
                          }),
                          (n = ft(18, null, null, 0)),
                          (n.stateNode = t),
                          (n.return = e),
                          (e.child = n),
                          (rt = e),
                          (ot = null),
                          !0)
                        : !1
                );
            default:
                return !1;
        }
    }
    function $l(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Bl(e) {
        if (_e) {
            var t = ot;
            if (t) {
                var n = t;
                if (!ha(e, t)) {
                    if ($l(e)) throw Error(c(418));
                    t = $t(n.nextSibling);
                    var r = rt;
                    t && ha(e, t)
                        ? va(r, n)
                        : ((e.flags = (e.flags & -4097) | 2), (_e = !1), (rt = e));
                }
            } else {
                if ($l(e)) throw Error(c(418));
                (e.flags = (e.flags & -4097) | 2), (_e = !1), (rt = e);
            }
        }
    }
    function ga(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
            e = e.return;
        rt = e;
    }
    function io(e) {
        if (e !== rt) return !1;
        if (!_e) return ga(e), (_e = !0), !1;
        var t;
        if (
            ((t = e.tag !== 3) &&
                !(t = e.tag !== 5) &&
                ((t = e.type),
                (t = t !== "head" && t !== "body" && !Il(e.type, e.memoizedProps))),
            t && (t = ot))
        ) {
            if ($l(e)) throw (_a(), Error(c(418)));
            for (; t; ) va(e, t), (t = $t(t.nextSibling));
        }
        if ((ga(e), e.tag === 13)) {
            if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(c(317));
            e: {
                for (e = e.nextSibling, t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                ot = $t(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                    }
                    e = e.nextSibling;
                }
                ot = null;
            }
        } else ot = rt ? $t(e.stateNode.nextSibling) : null;
        return !0;
    }
    function _a() {
        for (var e = ot; e; ) e = $t(e.nextSibling);
    }
    function Ln() {
        (ot = rt = null), (_e = !1);
    }
    function Vl(e) {
        mt === null ? (mt = [e]) : mt.push(e);
    }
    var Ef = B.ReactCurrentBatchConfig;
    function fr(e, t, n) {
        if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
            if (n._owner) {
                if (((n = n._owner), n)) {
                    if (n.tag !== 1) throw Error(c(309));
                    var r = n.stateNode;
                }
                if (!r) throw Error(c(147, e));
                var o = r,
                    l = "" + e;
                return t !== null &&
                    t.ref !== null &&
                    typeof t.ref == "function" &&
                    t.ref._stringRef === l
                    ? t.ref
                    : ((t = function (i) {
                          var a = o.refs;
                          i === null ? delete a[l] : (a[l] = i);
                      }),
                      (t._stringRef = l),
                      t);
            }
            if (typeof e != "string") throw Error(c(284));
            if (!n._owner) throw Error(c(290, e));
        }
        return e;
    }
    function uo(e, t) {
        throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
                c(
                    31,
                    e === "[object Object]"
                        ? "object with keys {" + Object.keys(t).join(", ") + "}"
                        : e,
                ),
            ))
        );
    }
    function wa(e) {
        var t = e._init;
        return t(e._payload);
    }
    function ka(e) {
        function t(p, f) {
            if (e) {
                var y = p.deletions;
                y === null ? ((p.deletions = [f]), (p.flags |= 16)) : y.push(f);
            }
        }
        function n(p, f) {
            if (!e) return null;
            for (; f !== null; ) t(p, f), (f = f.sibling);
            return null;
        }
        function r(p, f) {
            for (p = new Map(); f !== null; )
                f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
            return p;
        }
        function o(p, f) {
            return (p = Jt(p, f)), (p.index = 0), (p.sibling = null), p;
        }
        function l(p, f, y) {
            return (
                (p.index = y),
                e
                    ? ((y = p.alternate),
                      y !== null
                          ? ((y = y.index), y < f ? ((p.flags |= 2), f) : y)
                          : ((p.flags |= 2), f))
                    : ((p.flags |= 1048576), f)
            );
        }
        function i(p) {
            return e && p.alternate === null && (p.flags |= 2), p;
        }
        function a(p, f, y, k) {
            return f === null || f.tag !== 6
                ? ((f = Oi(y, p.mode, k)), (f.return = p), f)
                : ((f = o(f, y)), (f.return = p), f);
        }
        function s(p, f, y, k) {
            var M = y.type;
            return M === X
                ? _(p, f, y.props.children, k, y.key)
                : f !== null &&
                    (f.elementType === M ||
                        (typeof M == "object" &&
                            M !== null &&
                            M.$$typeof === je &&
                            wa(M) === f.type))
                  ? ((k = o(f, y.props)), (k.ref = fr(p, f, y)), (k.return = p), k)
                  : ((k = Io(y.type, y.key, y.props, null, p.mode, k)),
                    (k.ref = fr(p, f, y)),
                    (k.return = p),
                    k);
        }
        function v(p, f, y, k) {
            return f === null ||
                f.tag !== 4 ||
                f.stateNode.containerInfo !== y.containerInfo ||
                f.stateNode.implementation !== y.implementation
                ? ((f = Di(y, p.mode, k)), (f.return = p), f)
                : ((f = o(f, y.children || [])), (f.return = p), f);
        }
        function _(p, f, y, k, M) {
            return f === null || f.tag !== 7
                ? ((f = pn(y, p.mode, k, M)), (f.return = p), f)
                : ((f = o(f, y)), (f.return = p), f);
        }
        function w(p, f, y) {
            if ((typeof f == "string" && f !== "") || typeof f == "number")
                return (f = Oi("" + f, p.mode, y)), (f.return = p), f;
            if (typeof f == "object" && f !== null) {
                switch (f.$$typeof) {
                    case ue:
                        return (
                            (y = Io(f.type, f.key, f.props, null, p.mode, y)),
                            (y.ref = fr(p, null, f)),
                            (y.return = p),
                            y
                        );
                    case ae:
                        return (f = Di(f, p.mode, y)), (f.return = p), f;
                    case je:
                        var k = f._init;
                        return w(p, k(f._payload), y);
                }
                if ($n(f) || V(f)) return (f = pn(f, p.mode, y, null)), (f.return = p), f;
                uo(p, f);
            }
            return null;
        }
        function h(p, f, y, k) {
            var M = f !== null ? f.key : null;
            if ((typeof y == "string" && y !== "") || typeof y == "number")
                return M !== null ? null : a(p, f, "" + y, k);
            if (typeof y == "object" && y !== null) {
                switch (y.$$typeof) {
                    case ue:
                        return y.key === M ? s(p, f, y, k) : null;
                    case ae:
                        return y.key === M ? v(p, f, y, k) : null;
                    case je:
                        return (M = y._init), h(p, f, M(y._payload), k);
                }
                if ($n(y) || V(y)) return M !== null ? null : _(p, f, y, k, null);
                uo(p, y);
            }
            return null;
        }
        function N(p, f, y, k, M) {
            if ((typeof k == "string" && k !== "") || typeof k == "number")
                return (p = p.get(y) || null), a(f, p, "" + k, M);
            if (typeof k == "object" && k !== null) {
                switch (k.$$typeof) {
                    case ue:
                        return (
                            (p = p.get(k.key === null ? y : k.key) || null), s(f, p, k, M)
                        );
                    case ae:
                        return (
                            (p = p.get(k.key === null ? y : k.key) || null), v(f, p, k, M)
                        );
                    case je:
                        var A = k._init;
                        return N(p, f, y, A(k._payload), M);
                }
                if ($n(k) || V(k)) return (p = p.get(y) || null), _(f, p, k, M, null);
                uo(f, k);
            }
            return null;
        }
        function I(p, f, y, k) {
            for (
                var M = null, A = null, $ = f, Q = (f = 0), Me = null;
                $ !== null && Q < y.length;
                Q++
            ) {
                $.index > Q ? ((Me = $), ($ = null)) : (Me = $.sibling);
                var ie = h(p, $, y[Q], k);
                if (ie === null) {
                    $ === null && ($ = Me);
                    break;
                }
                e && $ && ie.alternate === null && t(p, $),
                    (f = l(ie, f, Q)),
                    A === null ? (M = ie) : (A.sibling = ie),
                    (A = ie),
                    ($ = Me);
            }
            if (Q === y.length) return n(p, $), _e && on(p, Q), M;
            if ($ === null) {
                for (; Q < y.length; Q++)
                    ($ = w(p, y[Q], k)),
                        $ !== null &&
                            ((f = l($, f, Q)),
                            A === null ? (M = $) : (A.sibling = $),
                            (A = $));
                return _e && on(p, Q), M;
            }
            for ($ = r(p, $); Q < y.length; Q++)
                (Me = N($, p, Q, y[Q], k)),
                    Me !== null &&
                        (e &&
                            Me.alternate !== null &&
                            $.delete(Me.key === null ? Q : Me.key),
                        (f = l(Me, f, Q)),
                        A === null ? (M = Me) : (A.sibling = Me),
                        (A = Me));
            return (
                e &&
                    $.forEach(function (qt) {
                        return t(p, qt);
                    }),
                _e && on(p, Q),
                M
            );
        }
        function D(p, f, y, k) {
            var M = V(y);
            if (typeof M != "function") throw Error(c(150));
            if (((y = M.call(y)), y == null)) throw Error(c(151));
            for (
                var A = (M = null), $ = f, Q = (f = 0), Me = null, ie = y.next();
                $ !== null && !ie.done;
                Q++, ie = y.next()
            ) {
                $.index > Q ? ((Me = $), ($ = null)) : (Me = $.sibling);
                var qt = h(p, $, ie.value, k);
                if (qt === null) {
                    $ === null && ($ = Me);
                    break;
                }
                e && $ && qt.alternate === null && t(p, $),
                    (f = l(qt, f, Q)),
                    A === null ? (M = qt) : (A.sibling = qt),
                    (A = qt),
                    ($ = Me);
            }
            if (ie.done) return n(p, $), _e && on(p, Q), M;
            if ($ === null) {
                for (; !ie.done; Q++, ie = y.next())
                    (ie = w(p, ie.value, k)),
                        ie !== null &&
                            ((f = l(ie, f, Q)),
                            A === null ? (M = ie) : (A.sibling = ie),
                            (A = ie));
                return _e && on(p, Q), M;
            }
            for ($ = r(p, $); !ie.done; Q++, ie = y.next())
                (ie = N($, p, Q, ie.value, k)),
                    ie !== null &&
                        (e &&
                            ie.alternate !== null &&
                            $.delete(ie.key === null ? Q : ie.key),
                        (f = l(ie, f, Q)),
                        A === null ? (M = ie) : (A.sibling = ie),
                        (A = ie));
            return (
                e &&
                    $.forEach(function (nd) {
                        return t(p, nd);
                    }),
                _e && on(p, Q),
                M
            );
        }
        function Te(p, f, y, k) {
            if (
                (typeof y == "object" &&
                    y !== null &&
                    y.type === X &&
                    y.key === null &&
                    (y = y.props.children),
                typeof y == "object" && y !== null)
            ) {
                switch (y.$$typeof) {
                    case ue:
                        e: {
                            for (var M = y.key, A = f; A !== null; ) {
                                if (A.key === M) {
                                    if (((M = y.type), M === X)) {
                                        if (A.tag === 7) {
                                            n(p, A.sibling),
                                                (f = o(A, y.props.children)),
                                                (f.return = p),
                                                (p = f);
                                            break e;
                                        }
                                    } else if (
                                        A.elementType === M ||
                                        (typeof M == "object" &&
                                            M !== null &&
                                            M.$$typeof === je &&
                                            wa(M) === A.type)
                                    ) {
                                        n(p, A.sibling),
                                            (f = o(A, y.props)),
                                            (f.ref = fr(p, A, y)),
                                            (f.return = p),
                                            (p = f);
                                        break e;
                                    }
                                    n(p, A);
                                    break;
                                } else t(p, A);
                                A = A.sibling;
                            }
                            y.type === X
                                ? ((f = pn(y.props.children, p.mode, k, y.key)),
                                  (f.return = p),
                                  (p = f))
                                : ((k = Io(y.type, y.key, y.props, null, p.mode, k)),
                                  (k.ref = fr(p, f, y)),
                                  (k.return = p),
                                  (p = k));
                        }
                        return i(p);
                    case ae:
                        e: {
                            for (A = y.key; f !== null; ) {
                                if (f.key === A)
                                    if (
                                        f.tag === 4 &&
                                        f.stateNode.containerInfo === y.containerInfo &&
                                        f.stateNode.implementation === y.implementation
                                    ) {
                                        n(p, f.sibling),
                                            (f = o(f, y.children || [])),
                                            (f.return = p),
                                            (p = f);
                                        break e;
                                    } else {
                                        n(p, f);
                                        break;
                                    }
                                else t(p, f);
                                f = f.sibling;
                            }
                            (f = Di(y, p.mode, k)), (f.return = p), (p = f);
                        }
                        return i(p);
                    case je:
                        return (A = y._init), Te(p, f, A(y._payload), k);
                }
                if ($n(y)) return I(p, f, y, k);
                if (V(y)) return D(p, f, y, k);
                uo(p, y);
            }
            return (typeof y == "string" && y !== "") || typeof y == "number"
                ? ((y = "" + y),
                  f !== null && f.tag === 6
                      ? (n(p, f.sibling), (f = o(f, y)), (f.return = p), (p = f))
                      : (n(p, f), (f = Oi(y, p.mode, k)), (f.return = p), (p = f)),
                  i(p))
                : n(p, f);
        }
        return Te;
    }
    var Rn = ka(!0),
        Sa = ka(!1),
        ao = Bt(null),
        so = null,
        In = null,
        Hl = null;
    function Wl() {
        Hl = In = so = null;
    }
    function Ql(e) {
        var t = ao.current;
        ve(ao), (e._currentValue = t);
    }
    function Kl(e, t, n) {
        for (; e !== null; ) {
            var r = e.alternate;
            if (
                ((e.childLanes & t) !== t
                    ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                    : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
                e === n)
            )
                break;
            e = e.return;
        }
    }
    function On(e, t) {
        (so = e),
            (Hl = In = null),
            (e = e.dependencies),
            e !== null &&
                e.firstContext !== null &&
                (e.lanes & t && (Ge = !0), (e.firstContext = null));
    }
    function at(e) {
        var t = e._currentValue;
        if (Hl !== e)
            if (((e = { context: e, memoizedValue: t, next: null }), In === null)) {
                if (so === null) throw Error(c(308));
                (In = e), (so.dependencies = { lanes: 0, firstContext: e });
            } else In = In.next = e;
        return t;
    }
    var ln = null;
    function Xl(e) {
        ln === null ? (ln = [e]) : ln.push(e);
    }
    function xa(e, t, n, r) {
        var o = t.interleaved;
        return (
            o === null ? ((n.next = n), Xl(t)) : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            Pt(e, r)
        );
    }
    function Pt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
            (e.childLanes |= t),
                (n = e.alternate),
                n !== null && (n.childLanes |= t),
                (n = e),
                (e = e.return);
        return n.tag === 3 ? n.stateNode : null;
    }
    var Wt = !1;
    function Yl(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
        };
    }
    function Ea(e, t) {
        (e = e.updateQueue),
            t.updateQueue === e &&
                (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects,
                });
    }
    function zt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
        };
    }
    function Qt(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (((r = r.shared), te & 2)) {
            var o = r.pending;
            return (
                o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
                (r.pending = t),
                Pt(e, n)
            );
        }
        return (
            (o = r.interleaved),
            o === null ? ((t.next = t), Xl(r)) : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            Pt(e, n)
        );
    }
    function co(e, t, n) {
        if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
            var r = t.lanes;
            (r &= e.pendingLanes), (n |= r), (t.lanes = n), al(e, n);
        }
    }
    function Ta(e, t) {
        var n = e.updateQueue,
            r = e.alternate;
        if (r !== null && ((r = r.updateQueue), n === r)) {
            var o = null,
                l = null;
            if (((n = n.firstBaseUpdate), n !== null)) {
                do {
                    var i = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null,
                    };
                    l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
                } while (n !== null);
                l === null ? (o = l = t) : (l = l.next = t);
            } else o = l = t;
            (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
            }),
                (e.updateQueue = n);
            return;
        }
        (e = n.lastBaseUpdate),
            e === null ? (n.firstBaseUpdate = t) : (e.next = t),
            (n.lastBaseUpdate = t);
    }
    function fo(e, t, n, r) {
        var o = e.updateQueue;
        Wt = !1;
        var l = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            a = o.shared.pending;
        if (a !== null) {
            o.shared.pending = null;
            var s = a,
                v = s.next;
            (s.next = null), i === null ? (l = v) : (i.next = v), (i = s);
            var _ = e.alternate;
            _ !== null &&
                ((_ = _.updateQueue),
                (a = _.lastBaseUpdate),
                a !== i &&
                    (a === null ? (_.firstBaseUpdate = v) : (a.next = v),
                    (_.lastBaseUpdate = s)));
        }
        if (l !== null) {
            var w = o.baseState;
            (i = 0), (_ = v = s = null), (a = l);
            do {
                var h = a.lane,
                    N = a.eventTime;
                if ((r & h) === h) {
                    _ !== null &&
                        (_ = _.next =
                            {
                                eventTime: N,
                                lane: 0,
                                tag: a.tag,
                                payload: a.payload,
                                callback: a.callback,
                                next: null,
                            });
                    e: {
                        var I = e,
                            D = a;
                        switch (((h = t), (N = n), D.tag)) {
                            case 1:
                                if (((I = D.payload), typeof I == "function")) {
                                    w = I.call(N, w, h);
                                    break e;
                                }
                                w = I;
                                break e;
                            case 3:
                                I.flags = (I.flags & -65537) | 128;
                            case 0:
                                if (
                                    ((I = D.payload),
                                    (h = typeof I == "function" ? I.call(N, w, h) : I),
                                    h == null)
                                )
                                    break e;
                                w = R({}, w, h);
                                break e;
                            case 2:
                                Wt = !0;
                        }
                    }
                    a.callback !== null &&
                        a.lane !== 0 &&
                        ((e.flags |= 64),
                        (h = o.effects),
                        h === null ? (o.effects = [a]) : h.push(a));
                } else
                    (N = {
                        eventTime: N,
                        lane: h,
                        tag: a.tag,
                        payload: a.payload,
                        callback: a.callback,
                        next: null,
                    }),
                        _ === null ? ((v = _ = N), (s = w)) : (_ = _.next = N),
                        (i |= h);
                if (((a = a.next), a === null)) {
                    if (((a = o.shared.pending), a === null)) break;
                    (h = a),
                        (a = h.next),
                        (h.next = null),
                        (o.lastBaseUpdate = h),
                        (o.shared.pending = null);
                }
            } while (!0);
            if (
                (_ === null && (s = w),
                (o.baseState = s),
                (o.firstBaseUpdate = v),
                (o.lastBaseUpdate = _),
                (t = o.shared.interleaved),
                t !== null)
            ) {
                o = t;
                do (i |= o.lane), (o = o.next);
                while (o !== t);
            } else l === null && (o.shared.lanes = 0);
            (sn |= i), (e.lanes = i), (e.memoizedState = w);
        }
    }
    function Ca(e, t, n) {
        if (((e = t.effects), (t.effects = null), e !== null))
            for (t = 0; t < e.length; t++) {
                var r = e[t],
                    o = r.callback;
                if (o !== null) {
                    if (((r.callback = null), (r = n), typeof o != "function"))
                        throw Error(c(191, o));
                    o.call(r);
                }
            }
    }
    var dr = {},
        kt = Bt(dr),
        pr = Bt(dr),
        mr = Bt(dr);
    function un(e) {
        if (e === dr) throw Error(c(174));
        return e;
    }
    function Gl(e, t) {
        switch ((me(mr, t), me(pr, e), me(kt, dr), (e = t.nodeType), e)) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Zo(null, "");
                break;
            default:
                (e = e === 8 ? t.parentNode : t),
                    (t = e.namespaceURI || null),
                    (e = e.tagName),
                    (t = Zo(t, e));
        }
        ve(kt), me(kt, t);
    }
    function Dn() {
        ve(kt), ve(pr), ve(mr);
    }
    function Na(e) {
        un(mr.current);
        var t = un(kt.current),
            n = Zo(t, e.type);
        t !== n && (me(pr, e), me(kt, n));
    }
    function Zl(e) {
        pr.current === e && (ve(kt), ve(pr));
    }
    var we = Bt(0);
    function po(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (
                    n !== null &&
                    ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
                )
                    return t;
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if (t.flags & 128) return t;
            } else if (t.child !== null) {
                (t.child.return = t), (t = t.child);
                continue;
            }
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return null;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
    }
    var Jl = [];
    function ql() {
        for (var e = 0; e < Jl.length; e++) Jl[e]._workInProgressVersionPrimary = null;
        Jl.length = 0;
    }
    var mo = B.ReactCurrentDispatcher,
        bl = B.ReactCurrentBatchConfig,
        an = 0,
        ke = null,
        Pe = null,
        Oe = null,
        yo = !1,
        yr = !1,
        vr = 0,
        Tf = 0;
    function Be() {
        throw Error(c(321));
    }
    function ei(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++) if (!pt(e[n], t[n])) return !1;
        return !0;
    }
    function ti(e, t, n, r, o, l) {
        if (
            ((an = l),
            (ke = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (mo.current = e === null || e.memoizedState === null ? zf : Lf),
            (e = n(r, o)),
            yr)
        ) {
            l = 0;
            do {
                if (((yr = !1), (vr = 0), 25 <= l)) throw Error(c(301));
                (l += 1),
                    (Oe = Pe = null),
                    (t.updateQueue = null),
                    (mo.current = Rf),
                    (e = n(r, o));
            } while (yr);
        }
        if (
            ((mo.current = go),
            (t = Pe !== null && Pe.next !== null),
            (an = 0),
            (Oe = Pe = ke = null),
            (yo = !1),
            t)
        )
            throw Error(c(300));
        return e;
    }
    function ni() {
        var e = vr !== 0;
        return (vr = 0), e;
    }
    function St() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
        };
        return Oe === null ? (ke.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe;
    }
    function st() {
        if (Pe === null) {
            var e = ke.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = Pe.next;
        var t = Oe === null ? ke.memoizedState : Oe.next;
        if (t !== null) (Oe = t), (Pe = e);
        else {
            if (e === null) throw Error(c(310));
            (Pe = e),
                (e = {
                    memoizedState: Pe.memoizedState,
                    baseState: Pe.baseState,
                    baseQueue: Pe.baseQueue,
                    queue: Pe.queue,
                    next: null,
                }),
                Oe === null ? (ke.memoizedState = Oe = e) : (Oe = Oe.next = e);
        }
        return Oe;
    }
    function hr(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function ri(e) {
        var t = st(),
            n = t.queue;
        if (n === null) throw Error(c(311));
        n.lastRenderedReducer = e;
        var r = Pe,
            o = r.baseQueue,
            l = n.pending;
        if (l !== null) {
            if (o !== null) {
                var i = o.next;
                (o.next = l.next), (l.next = i);
            }
            (r.baseQueue = o = l), (n.pending = null);
        }
        if (o !== null) {
            (l = o.next), (r = r.baseState);
            var a = (i = null),
                s = null,
                v = l;
            do {
                var _ = v.lane;
                if ((an & _) === _)
                    s !== null &&
                        (s = s.next =
                            {
                                lane: 0,
                                action: v.action,
                                hasEagerState: v.hasEagerState,
                                eagerState: v.eagerState,
                                next: null,
                            }),
                        (r = v.hasEagerState ? v.eagerState : e(r, v.action));
                else {
                    var w = {
                        lane: _,
                        action: v.action,
                        hasEagerState: v.hasEagerState,
                        eagerState: v.eagerState,
                        next: null,
                    };
                    s === null ? ((a = s = w), (i = r)) : (s = s.next = w),
                        (ke.lanes |= _),
                        (sn |= _);
                }
                v = v.next;
            } while (v !== null && v !== l);
            s === null ? (i = r) : (s.next = a),
                pt(r, t.memoizedState) || (Ge = !0),
                (t.memoizedState = r),
                (t.baseState = i),
                (t.baseQueue = s),
                (n.lastRenderedState = r);
        }
        if (((e = n.interleaved), e !== null)) {
            o = e;
            do (l = o.lane), (ke.lanes |= l), (sn |= l), (o = o.next);
            while (o !== e);
        } else o === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch];
    }
    function oi(e) {
        var t = st(),
            n = t.queue;
        if (n === null) throw Error(c(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
            o = n.pending,
            l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var i = (o = o.next);
            do (l = e(l, i.action)), (i = i.next);
            while (i !== o);
            pt(l, t.memoizedState) || (Ge = !0),
                (t.memoizedState = l),
                t.baseQueue === null && (t.baseState = l),
                (n.lastRenderedState = l);
        }
        return [l, r];
    }
    function Pa() {}
    function za(e, t) {
        var n = ke,
            r = st(),
            o = t(),
            l = !pt(r.memoizedState, o);
        if (
            (l && ((r.memoizedState = o), (Ge = !0)),
            (r = r.queue),
            li(Ia.bind(null, n, r, e), [e]),
            r.getSnapshot !== t || l || (Oe !== null && Oe.memoizedState.tag & 1))
        ) {
            if (
                ((n.flags |= 2048),
                gr(9, Ra.bind(null, n, r, o, t), void 0, null),
                De === null)
            )
                throw Error(c(349));
            an & 30 || La(n, t, o);
        }
        return o;
    }
    function La(e, t, n) {
        (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            (t = ke.updateQueue),
            t === null
                ? ((t = { lastEffect: null, stores: null }),
                  (ke.updateQueue = t),
                  (t.stores = [e]))
                : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
    }
    function Ra(e, t, n, r) {
        (t.value = n), (t.getSnapshot = r), Oa(t) && Da(e);
    }
    function Ia(e, t, n) {
        return n(function () {
            Oa(t) && Da(e);
        });
    }
    function Oa(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !pt(e, n);
        } catch {
            return !0;
        }
    }
    function Da(e) {
        var t = Pt(e, 1);
        t !== null && gt(t, e, 1, -1);
    }
    function Ma(e) {
        var t = St();
        return (
            typeof e == "function" && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: hr,
                lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Pf.bind(null, ke, e)),
            [t.memoizedState, e]
        );
    }
    function gr(e, t, n, r) {
        return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            (t = ke.updateQueue),
            t === null
                ? ((t = { lastEffect: null, stores: null }),
                  (ke.updateQueue = t),
                  (t.lastEffect = e.next = e))
                : ((n = t.lastEffect),
                  n === null
                      ? (t.lastEffect = e.next = e)
                      : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
            e
        );
    }
    function Fa() {
        return st().memoizedState;
    }
    function vo(e, t, n, r) {
        var o = St();
        (ke.flags |= e),
            (o.memoizedState = gr(1 | t, n, void 0, r === void 0 ? null : r));
    }
    function ho(e, t, n, r) {
        var o = st();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (Pe !== null) {
            var i = Pe.memoizedState;
            if (((l = i.destroy), r !== null && ei(r, i.deps))) {
                o.memoizedState = gr(t, n, l, r);
                return;
            }
        }
        (ke.flags |= e), (o.memoizedState = gr(1 | t, n, l, r));
    }
    function ja(e, t) {
        return vo(8390656, 8, e, t);
    }
    function li(e, t) {
        return ho(2048, 8, e, t);
    }
    function Ua(e, t) {
        return ho(4, 2, e, t);
    }
    function Aa(e, t) {
        return ho(4, 4, e, t);
    }
    function $a(e, t) {
        if (typeof t == "function")
            return (
                (e = e()),
                t(e),
                function () {
                    t(null);
                }
            );
        if (t != null)
            return (
                (e = e()),
                (t.current = e),
                function () {
                    t.current = null;
                }
            );
    }
    function Ba(e, t, n) {
        return (n = n != null ? n.concat([e]) : null), ho(4, 4, $a.bind(null, t, e), n);
    }
    function ii() {}
    function Va(e, t) {
        var n = st();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && ei(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
    }
    function Ha(e, t) {
        var n = st();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && ei(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function Wa(e, t, n) {
        return an & 21
            ? (pt(n, t) || ((n = wu()), (ke.lanes |= n), (sn |= n), (e.baseState = !0)),
              t)
            : (e.baseState && ((e.baseState = !1), (Ge = !0)), (e.memoizedState = n));
    }
    function Cf(e, t) {
        var n = fe;
        (fe = n !== 0 && 4 > n ? n : 4), e(!0);
        var r = bl.transition;
        bl.transition = {};
        try {
            e(!1), t();
        } finally {
            (fe = n), (bl.transition = r);
        }
    }
    function Qa() {
        return st().memoizedState;
    }
    function Nf(e, t, n) {
        var r = Gt(e);
        if (
            ((n = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
            Ka(e))
        )
            Xa(t, n);
        else if (((n = xa(e, t, n, r)), n !== null)) {
            var o = Qe();
            gt(n, e, r, o), Ya(n, t, r);
        }
    }
    function Pf(e, t, n) {
        var r = Gt(e),
            o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
        if (Ka(e)) Xa(t, o);
        else {
            var l = e.alternate;
            if (
                e.lanes === 0 &&
                (l === null || l.lanes === 0) &&
                ((l = t.lastRenderedReducer), l !== null)
            )
                try {
                    var i = t.lastRenderedState,
                        a = l(i, n);
                    if (((o.hasEagerState = !0), (o.eagerState = a), pt(a, i))) {
                        var s = t.interleaved;
                        s === null
                            ? ((o.next = o), Xl(t))
                            : ((o.next = s.next), (s.next = o)),
                            (t.interleaved = o);
                        return;
                    }
                } catch {
                } finally {
                }
            (n = xa(e, t, o, r)), n !== null && ((o = Qe()), gt(n, e, r, o), Ya(n, t, r));
        }
    }
    function Ka(e) {
        var t = e.alternate;
        return e === ke || (t !== null && t === ke);
    }
    function Xa(e, t) {
        yr = yo = !0;
        var n = e.pending;
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
    }
    function Ya(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            (r &= e.pendingLanes), (n |= r), (t.lanes = n), al(e, n);
        }
    }
    var go = {
            readContext: at,
            useCallback: Be,
            useContext: Be,
            useEffect: Be,
            useImperativeHandle: Be,
            useInsertionEffect: Be,
            useLayoutEffect: Be,
            useMemo: Be,
            useReducer: Be,
            useRef: Be,
            useState: Be,
            useDebugValue: Be,
            useDeferredValue: Be,
            useTransition: Be,
            useMutableSource: Be,
            useSyncExternalStore: Be,
            useId: Be,
            unstable_isNewReconciler: !1,
        },
        zf = {
            readContext: at,
            useCallback: function (e, t) {
                return (St().memoizedState = [e, t === void 0 ? null : t]), e;
            },
            useContext: at,
            useEffect: ja,
            useImperativeHandle: function (e, t, n) {
                return (
                    (n = n != null ? n.concat([e]) : null),
                    vo(4194308, 4, $a.bind(null, t, e), n)
                );
            },
            useLayoutEffect: function (e, t) {
                return vo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
                return vo(4, 2, e, t);
            },
            useMemo: function (e, t) {
                var n = St();
                return (
                    (t = t === void 0 ? null : t),
                    (e = e()),
                    (n.memoizedState = [e, t]),
                    e
                );
            },
            useReducer: function (e, t, n) {
                var r = St();
                return (
                    (t = n !== void 0 ? n(t) : t),
                    (r.memoizedState = r.baseState = t),
                    (e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t,
                    }),
                    (r.queue = e),
                    (e = e.dispatch = Nf.bind(null, ke, e)),
                    [r.memoizedState, e]
                );
            },
            useRef: function (e) {
                var t = St();
                return (e = { current: e }), (t.memoizedState = e);
            },
            useState: Ma,
            useDebugValue: ii,
            useDeferredValue: function (e) {
                return (St().memoizedState = e);
            },
            useTransition: function () {
                var e = Ma(!1),
                    t = e[0];
                return (e = Cf.bind(null, e[1])), (St().memoizedState = e), [t, e];
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
                var r = ke,
                    o = St();
                if (_e) {
                    if (n === void 0) throw Error(c(407));
                    n = n();
                } else {
                    if (((n = t()), De === null)) throw Error(c(349));
                    an & 30 || La(r, t, n);
                }
                o.memoizedState = n;
                var l = { value: n, getSnapshot: t };
                return (
                    (o.queue = l),
                    ja(Ia.bind(null, r, l, e), [e]),
                    (r.flags |= 2048),
                    gr(9, Ra.bind(null, r, l, n, t), void 0, null),
                    n
                );
            },
            useId: function () {
                var e = St(),
                    t = De.identifierPrefix;
                if (_e) {
                    var n = Nt,
                        r = Ct;
                    (n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
                        (t = ":" + t + "R" + n),
                        (n = vr++),
                        0 < n && (t += "H" + n.toString(32)),
                        (t += ":");
                } else (n = Tf++), (t = ":" + t + "r" + n.toString(32) + ":");
                return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
        },
        Lf = {
            readContext: at,
            useCallback: Va,
            useContext: at,
            useEffect: li,
            useImperativeHandle: Ba,
            useInsertionEffect: Ua,
            useLayoutEffect: Aa,
            useMemo: Ha,
            useReducer: ri,
            useRef: Fa,
            useState: function () {
                return ri(hr);
            },
            useDebugValue: ii,
            useDeferredValue: function (e) {
                var t = st();
                return Wa(t, Pe.memoizedState, e);
            },
            useTransition: function () {
                var e = ri(hr)[0],
                    t = st().memoizedState;
                return [e, t];
            },
            useMutableSource: Pa,
            useSyncExternalStore: za,
            useId: Qa,
            unstable_isNewReconciler: !1,
        },
        Rf = {
            readContext: at,
            useCallback: Va,
            useContext: at,
            useEffect: li,
            useImperativeHandle: Ba,
            useInsertionEffect: Ua,
            useLayoutEffect: Aa,
            useMemo: Ha,
            useReducer: oi,
            useRef: Fa,
            useState: function () {
                return oi(hr);
            },
            useDebugValue: ii,
            useDeferredValue: function (e) {
                var t = st();
                return Pe === null ? (t.memoizedState = e) : Wa(t, Pe.memoizedState, e);
            },
            useTransition: function () {
                var e = oi(hr)[0],
                    t = st().memoizedState;
                return [e, t];
            },
            useMutableSource: Pa,
            useSyncExternalStore: za,
            useId: Qa,
            unstable_isNewReconciler: !1,
        };
    function yt(e, t) {
        if (e && e.defaultProps) {
            (t = R({}, t)), (e = e.defaultProps);
            for (var n in e) t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function ui(e, t, n, r) {
        (t = e.memoizedState),
            (n = n(r, t)),
            (n = n == null ? t : R({}, t, n)),
            (e.memoizedState = n),
            e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var _o = {
        isMounted: function (e) {
            return (e = e._reactInternals) ? en(e) === e : !1;
        },
        enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Qe(),
                o = Gt(e),
                l = zt(r, o);
            (l.payload = t),
                n != null && (l.callback = n),
                (t = Qt(e, l, o)),
                t !== null && (gt(t, e, o, r), co(t, e, o));
        },
        enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Qe(),
                o = Gt(e),
                l = zt(r, o);
            (l.tag = 1),
                (l.payload = t),
                n != null && (l.callback = n),
                (t = Qt(e, l, o)),
                t !== null && (gt(t, e, o, r), co(t, e, o));
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Qe(),
                r = Gt(e),
                o = zt(n, r);
            (o.tag = 2),
                t != null && (o.callback = t),
                (t = Qt(e, o, r)),
                t !== null && (gt(t, e, r, n), co(t, e, r));
        },
    };
    function Ga(e, t, n, r, o, l, i) {
        return (
            (e = e.stateNode),
            typeof e.shouldComponentUpdate == "function"
                ? e.shouldComponentUpdate(r, l, i)
                : t.prototype && t.prototype.isPureReactComponent
                  ? !or(n, r) || !or(o, l)
                  : !0
        );
    }
    function Za(e, t, n) {
        var r = !1,
            o = Vt,
            l = t.contextType;
        return (
            typeof l == "object" && l !== null
                ? (l = at(l))
                : ((o = Ye(t) ? nn : $e.current),
                  (r = t.contextTypes),
                  (l = (r = r != null) ? Nn(e, o) : Vt)),
            (t = new t(n, l)),
            (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
            (t.updater = _o),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = o),
                (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
        );
    }
    function Ja(e, t, n, r) {
        (e = t.state),
            typeof t.componentWillReceiveProps == "function" &&
                t.componentWillReceiveProps(n, r),
            typeof t.UNSAFE_componentWillReceiveProps == "function" &&
                t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && _o.enqueueReplaceState(t, t.state, null);
    }
    function ai(e, t, n, r) {
        var o = e.stateNode;
        (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Yl(e);
        var l = t.contextType;
        typeof l == "object" && l !== null
            ? (o.context = at(l))
            : ((l = Ye(t) ? nn : $e.current), (o.context = Nn(e, l))),
            (o.state = e.memoizedState),
            (l = t.getDerivedStateFromProps),
            typeof l == "function" && (ui(e, t, l, n), (o.state = e.memoizedState)),
            typeof t.getDerivedStateFromProps == "function" ||
                typeof o.getSnapshotBeforeUpdate == "function" ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                ((t = o.state),
                typeof o.componentWillMount == "function" && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount(),
                t !== o.state && _o.enqueueReplaceState(o, o.state, null),
                fo(e, n, o, r),
                (o.state = e.memoizedState)),
            typeof o.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Mn(e, t) {
        try {
            var n = "",
                r = t;
            do (n += oe(r)), (r = r.return);
            while (r);
            var o = n;
        } catch (l) {
            o =
                `
Error generating stack: ` +
                l.message +
                `
` +
                l.stack;
        }
        return { value: e, source: t, stack: o, digest: null };
    }
    function si(e, t, n) {
        return { value: e, source: null, stack: n ?? null, digest: t ?? null };
    }
    function ci(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function () {
                throw n;
            });
        }
    }
    var If = typeof WeakMap == "function" ? WeakMap : Map;
    function qa(e, t, n) {
        (n = zt(-1, n)), (n.tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
            (n.callback = function () {
                Co || ((Co = !0), (Ti = r)), ci(e, t);
            }),
            n
        );
    }
    function ba(e, t, n) {
        (n = zt(-1, n)), (n.tag = 3);
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var o = t.value;
            (n.payload = function () {
                return r(o);
            }),
                (n.callback = function () {
                    ci(e, t);
                });
        }
        var l = e.stateNode;
        return (
            l !== null &&
                typeof l.componentDidCatch == "function" &&
                (n.callback = function () {
                    ci(e, t),
                        typeof r != "function" &&
                            (Xt === null ? (Xt = new Set([this])) : Xt.add(this));
                    var i = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: i !== null ? i : "",
                    });
                }),
            n
        );
    }
    function es(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new If();
            var o = new Set();
            r.set(t, o);
        } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
        o.has(n) || (o.add(n), (e = Kf.bind(null, e, t, n)), t.then(e, e));
    }
    function ts(e) {
        do {
            var t;
            if (
                ((t = e.tag === 13) &&
                    ((t = e.memoizedState),
                    (t = t !== null ? t.dehydrated !== null : !0)),
                t)
            )
                return e;
            e = e.return;
        } while (e !== null);
        return null;
    }
    function ns(e, t, n, r, o) {
        return e.mode & 1
            ? ((e.flags |= 65536), (e.lanes = o), e)
            : (e === t
                  ? (e.flags |= 65536)
                  : ((e.flags |= 128),
                    (n.flags |= 131072),
                    (n.flags &= -52805),
                    n.tag === 1 &&
                        (n.alternate === null
                            ? (n.tag = 17)
                            : ((t = zt(-1, 1)), (t.tag = 2), Qt(n, t, 1))),
                    (n.lanes |= 1)),
              e);
    }
    var Of = B.ReactCurrentOwner,
        Ge = !1;
    function We(e, t, n, r) {
        t.child = e === null ? Sa(t, null, n, r) : Rn(t, e.child, n, r);
    }
    function rs(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return (
            On(t, o),
            (r = ti(e, t, n, r, l, o)),
            (n = ni()),
            e !== null && !Ge
                ? ((t.updateQueue = e.updateQueue),
                  (t.flags &= -2053),
                  (e.lanes &= ~o),
                  Lt(e, t, o))
                : (_e && n && Ul(t), (t.flags |= 1), We(e, t, r, o), t.child)
        );
    }
    function os(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" &&
                !Ii(l) &&
                l.defaultProps === void 0 &&
                n.compare === null &&
                n.defaultProps === void 0
                ? ((t.tag = 15), (t.type = l), ls(e, t, l, r, o))
                : ((e = Io(n.type, null, r, t, t.mode, o)),
                  (e.ref = t.ref),
                  (e.return = t),
                  (t.child = e));
        }
        if (((l = e.child), !(e.lanes & o))) {
            var i = l.memoizedProps;
            if (((n = n.compare), (n = n !== null ? n : or), n(i, r) && e.ref === t.ref))
                return Lt(e, t, o);
        }
        return (
            (t.flags |= 1), (e = Jt(l, r)), (e.ref = t.ref), (e.return = t), (t.child = e)
        );
    }
    function ls(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (or(l, r) && e.ref === t.ref)
                if (((Ge = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
                    e.flags & 131072 && (Ge = !0);
                else return (t.lanes = e.lanes), Lt(e, t, o);
        }
        return fi(e, t, n, r, o);
    }
    function is(e, t, n) {
        var r = t.pendingProps,
            o = r.children,
            l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden")
            if (!(t.mode & 1))
                (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                    me(jn, lt),
                    (lt |= n);
            else {
                if (!(n & 1073741824))
                    return (
                        (e = l !== null ? l.baseLanes | n : n),
                        (t.lanes = t.childLanes = 1073741824),
                        (t.memoizedState = {
                            baseLanes: e,
                            cachePool: null,
                            transitions: null,
                        }),
                        (t.updateQueue = null),
                        me(jn, lt),
                        (lt |= e),
                        null
                    );
                (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                    (r = l !== null ? l.baseLanes : n),
                    me(jn, lt),
                    (lt |= r);
            }
        else
            l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
                me(jn, lt),
                (lt |= r);
        return We(e, t, o, n), t.child;
    }
    function us(e, t) {
        var n = t.ref;
        ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
    }
    function fi(e, t, n, r, o) {
        var l = Ye(n) ? nn : $e.current;
        return (
            (l = Nn(t, l)),
            On(t, o),
            (n = ti(e, t, n, r, l, o)),
            (r = ni()),
            e !== null && !Ge
                ? ((t.updateQueue = e.updateQueue),
                  (t.flags &= -2053),
                  (e.lanes &= ~o),
                  Lt(e, t, o))
                : (_e && r && Ul(t), (t.flags |= 1), We(e, t, n, o), t.child)
        );
    }
    function as(e, t, n, r, o) {
        if (Ye(n)) {
            var l = !0;
            no(t);
        } else l = !1;
        if ((On(t, o), t.stateNode === null))
            ko(e, t), Za(t, n, r), ai(t, n, r, o), (r = !0);
        else if (e === null) {
            var i = t.stateNode,
                a = t.memoizedProps;
            i.props = a;
            var s = i.context,
                v = n.contextType;
            typeof v == "object" && v !== null
                ? (v = at(v))
                : ((v = Ye(n) ? nn : $e.current), (v = Nn(t, v)));
            var _ = n.getDerivedStateFromProps,
                w =
                    typeof _ == "function" ||
                    typeof i.getSnapshotBeforeUpdate == "function";
            w ||
                (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof i.componentWillReceiveProps != "function") ||
                ((a !== r || s !== v) && Ja(t, i, r, v)),
                (Wt = !1);
            var h = t.memoizedState;
            (i.state = h),
                fo(t, r, i, o),
                (s = t.memoizedState),
                a !== r || h !== s || Xe.current || Wt
                    ? (typeof _ == "function" && (ui(t, n, _, r), (s = t.memoizedState)),
                      (a = Wt || Ga(t, n, a, r, h, s, v))
                          ? (w ||
                                (typeof i.UNSAFE_componentWillMount != "function" &&
                                    typeof i.componentWillMount != "function") ||
                                (typeof i.componentWillMount == "function" &&
                                    i.componentWillMount(),
                                typeof i.UNSAFE_componentWillMount == "function" &&
                                    i.UNSAFE_componentWillMount()),
                            typeof i.componentDidMount == "function" &&
                                (t.flags |= 4194308))
                          : (typeof i.componentDidMount == "function" &&
                                (t.flags |= 4194308),
                            (t.memoizedProps = r),
                            (t.memoizedState = s)),
                      (i.props = r),
                      (i.state = s),
                      (i.context = v),
                      (r = a))
                    : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
                      (r = !1));
        } else {
            (i = t.stateNode),
                Ea(e, t),
                (a = t.memoizedProps),
                (v = t.type === t.elementType ? a : yt(t.type, a)),
                (i.props = v),
                (w = t.pendingProps),
                (h = i.context),
                (s = n.contextType),
                typeof s == "object" && s !== null
                    ? (s = at(s))
                    : ((s = Ye(n) ? nn : $e.current), (s = Nn(t, s)));
            var N = n.getDerivedStateFromProps;
            (_ =
                typeof N == "function" ||
                typeof i.getSnapshotBeforeUpdate == "function") ||
                (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof i.componentWillReceiveProps != "function") ||
                ((a !== w || h !== s) && Ja(t, i, r, s)),
                (Wt = !1),
                (h = t.memoizedState),
                (i.state = h),
                fo(t, r, i, o);
            var I = t.memoizedState;
            a !== w || h !== I || Xe.current || Wt
                ? (typeof N == "function" && (ui(t, n, N, r), (I = t.memoizedState)),
                  (v = Wt || Ga(t, n, v, r, h, I, s) || !1)
                      ? (_ ||
                            (typeof i.UNSAFE_componentWillUpdate != "function" &&
                                typeof i.componentWillUpdate != "function") ||
                            (typeof i.componentWillUpdate == "function" &&
                                i.componentWillUpdate(r, I, s),
                            typeof i.UNSAFE_componentWillUpdate == "function" &&
                                i.UNSAFE_componentWillUpdate(r, I, s)),
                        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
                        typeof i.getSnapshotBeforeUpdate == "function" &&
                            (t.flags |= 1024))
                      : (typeof i.componentDidUpdate != "function" ||
                            (a === e.memoizedProps && h === e.memoizedState) ||
                            (t.flags |= 4),
                        typeof i.getSnapshotBeforeUpdate != "function" ||
                            (a === e.memoizedProps && h === e.memoizedState) ||
                            (t.flags |= 1024),
                        (t.memoizedProps = r),
                        (t.memoizedState = I)),
                  (i.props = r),
                  (i.state = I),
                  (i.context = s),
                  (r = v))
                : (typeof i.componentDidUpdate != "function" ||
                      (a === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 4),
                  typeof i.getSnapshotBeforeUpdate != "function" ||
                      (a === e.memoizedProps && h === e.memoizedState) ||
                      (t.flags |= 1024),
                  (r = !1));
        }
        return di(e, t, n, r, l, o);
    }
    function di(e, t, n, r, o, l) {
        us(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return o && pa(t, n, !1), Lt(e, t, l);
        (r = t.stateNode), (Of.current = t);
        var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return (
            (t.flags |= 1),
            e !== null && i
                ? ((t.child = Rn(t, e.child, null, l)), (t.child = Rn(t, null, a, l)))
                : We(e, t, a, l),
            (t.memoizedState = r.state),
            o && pa(t, n, !0),
            t.child
        );
    }
    function ss(e) {
        var t = e.stateNode;
        t.pendingContext
            ? fa(e, t.pendingContext, t.pendingContext !== t.context)
            : t.context && fa(e, t.context, !1),
            Gl(e, t.containerInfo);
    }
    function cs(e, t, n, r, o) {
        return Ln(), Vl(o), (t.flags |= 256), We(e, t, n, r), t.child;
    }
    var pi = { dehydrated: null, treeContext: null, retryLane: 0 };
    function mi(e) {
        return { baseLanes: e, cachePool: null, transitions: null };
    }
    function fs(e, t, n) {
        var r = t.pendingProps,
            o = we.current,
            l = !1,
            i = (t.flags & 128) !== 0,
            a;
        if (
            ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
            a
                ? ((l = !0), (t.flags &= -129))
                : (e === null || e.memoizedState !== null) && (o |= 1),
            me(we, o & 1),
            e === null)
        )
            return (
                Bl(t),
                (e = t.memoizedState),
                e !== null && ((e = e.dehydrated), e !== null)
                    ? (t.mode & 1
                          ? e.data === "$!"
                              ? (t.lanes = 8)
                              : (t.lanes = 1073741824)
                          : (t.lanes = 1),
                      null)
                    : ((i = r.children),
                      (e = r.fallback),
                      l
                          ? ((r = t.mode),
                            (l = t.child),
                            (i = { mode: "hidden", children: i }),
                            !(r & 1) && l !== null
                                ? ((l.childLanes = 0), (l.pendingProps = i))
                                : (l = Oo(i, r, 0, null)),
                            (e = pn(e, r, n, null)),
                            (l.return = t),
                            (e.return = t),
                            (l.sibling = e),
                            (t.child = l),
                            (t.child.memoizedState = mi(n)),
                            (t.memoizedState = pi),
                            e)
                          : yi(t, i))
            );
        if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
            return Df(e, t, i, r, a, o, n);
        if (l) {
            (l = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling);
            var s = { mode: "hidden", children: r.children };
            return (
                !(i & 1) && t.child !== o
                    ? ((r = t.child),
                      (r.childLanes = 0),
                      (r.pendingProps = s),
                      (t.deletions = null))
                    : ((r = Jt(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
                a !== null ? (l = Jt(a, l)) : ((l = pn(l, i, n, null)), (l.flags |= 2)),
                (l.return = t),
                (r.return = t),
                (r.sibling = l),
                (t.child = r),
                (r = l),
                (l = t.child),
                (i = e.child.memoizedState),
                (i =
                    i === null
                        ? mi(n)
                        : {
                              baseLanes: i.baseLanes | n,
                              cachePool: null,
                              transitions: i.transitions,
                          }),
                (l.memoizedState = i),
                (l.childLanes = e.childLanes & ~n),
                (t.memoizedState = pi),
                r
            );
        }
        return (
            (l = e.child),
            (e = l.sibling),
            (r = Jt(l, { mode: "visible", children: r.children })),
            !(t.mode & 1) && (r.lanes = n),
            (r.return = t),
            (r.sibling = null),
            e !== null &&
                ((n = t.deletions),
                n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
            (t.child = r),
            (t.memoizedState = null),
            r
        );
    }
    function yi(e, t) {
        return (
            (t = Oo({ mode: "visible", children: t }, e.mode, 0, null)),
            (t.return = e),
            (e.child = t)
        );
    }
    function wo(e, t, n, r) {
        return (
            r !== null && Vl(r),
            Rn(t, e.child, null, n),
            (e = yi(t, t.pendingProps.children)),
            (e.flags |= 2),
            (t.memoizedState = null),
            e
        );
    }
    function Df(e, t, n, r, o, l, i) {
        if (n)
            return t.flags & 256
                ? ((t.flags &= -257), (r = si(Error(c(422)))), wo(e, t, i, r))
                : t.memoizedState !== null
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((l = r.fallback),
                    (o = t.mode),
                    (r = Oo({ mode: "visible", children: r.children }, o, 0, null)),
                    (l = pn(l, o, i, null)),
                    (l.flags |= 2),
                    (r.return = t),
                    (l.return = t),
                    (r.sibling = l),
                    (t.child = r),
                    t.mode & 1 && Rn(t, e.child, null, i),
                    (t.child.memoizedState = mi(i)),
                    (t.memoizedState = pi),
                    l);
        if (!(t.mode & 1)) return wo(e, t, i, null);
        if (o.data === "$!") {
            if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
            return (r = a), (l = Error(c(419))), (r = si(l, r, void 0)), wo(e, t, i, r);
        }
        if (((a = (i & e.childLanes) !== 0), Ge || a)) {
            if (((r = De), r !== null)) {
                switch (i & -i) {
                    case 4:
                        o = 2;
                        break;
                    case 16:
                        o = 8;
                        break;
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
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        o = 32;
                        break;
                    case 536870912:
                        o = 268435456;
                        break;
                    default:
                        o = 0;
                }
                (o = o & (r.suspendedLanes | i) ? 0 : o),
                    o !== 0 &&
                        o !== l.retryLane &&
                        ((l.retryLane = o), Pt(e, o), gt(r, e, o, -1));
            }
            return Ri(), (r = si(Error(c(421)))), wo(e, t, i, r);
        }
        return o.data === "$?"
            ? ((t.flags |= 128),
              (t.child = e.child),
              (t = Xf.bind(null, e)),
              (o._reactRetry = t),
              null)
            : ((e = l.treeContext),
              (ot = $t(o.nextSibling)),
              (rt = t),
              (_e = !0),
              (mt = null),
              e !== null &&
                  ((it[ut++] = Ct),
                  (it[ut++] = Nt),
                  (it[ut++] = rn),
                  (Ct = e.id),
                  (Nt = e.overflow),
                  (rn = t)),
              (t = yi(t, r.children)),
              (t.flags |= 4096),
              t);
    }
    function ds(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), Kl(e.return, t, n);
    }
    function vi(e, t, n, r, o) {
        var l = e.memoizedState;
        l === null
            ? (e.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: r,
                  tail: n,
                  tailMode: o,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = o));
    }
    function ps(e, t, n) {
        var r = t.pendingProps,
            o = r.revealOrder,
            l = r.tail;
        if ((We(e, t, r.children, n), (r = we.current), r & 2))
            (r = (r & 1) | 2), (t.flags |= 128);
        else {
            if (e !== null && e.flags & 128)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13) e.memoizedState !== null && ds(e, n, t);
                    else if (e.tag === 19) ds(e, n, t);
                    else if (e.child !== null) {
                        (e.child.return = e), (e = e.child);
                        continue;
                    }
                    if (e === t) break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t) break e;
                        e = e.return;
                    }
                    (e.sibling.return = e.return), (e = e.sibling);
                }
            r &= 1;
        }
        if ((me(we, r), !(t.mode & 1))) t.memoizedState = null;
        else
            switch (o) {
                case "forwards":
                    for (n = t.child, o = null; n !== null; )
                        (e = n.alternate),
                            e !== null && po(e) === null && (o = n),
                            (n = n.sibling);
                    (n = o),
                        n === null
                            ? ((o = t.child), (t.child = null))
                            : ((o = n.sibling), (n.sibling = null)),
                        vi(t, !1, o, n, l);
                    break;
                case "backwards":
                    for (n = null, o = t.child, t.child = null; o !== null; ) {
                        if (((e = o.alternate), e !== null && po(e) === null)) {
                            t.child = o;
                            break;
                        }
                        (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                    }
                    vi(t, !0, n, null, l);
                    break;
                case "together":
                    vi(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null;
            }
        return t.child;
    }
    function ko(e, t) {
        !(t.mode & 1) &&
            e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function Lt(e, t, n) {
        if (
            (e !== null && (t.dependencies = e.dependencies),
            (sn |= t.lanes),
            !(n & t.childLanes))
        )
            return null;
        if (e !== null && t.child !== e.child) throw Error(c(153));
        if (t.child !== null) {
            for (
                e = t.child, n = Jt(e, e.pendingProps), t.child = n, n.return = t;
                e.sibling !== null;

            )
                (e = e.sibling), (n = n.sibling = Jt(e, e.pendingProps)), (n.return = t);
            n.sibling = null;
        }
        return t.child;
    }
    function Mf(e, t, n) {
        switch (t.tag) {
            case 3:
                ss(t), Ln();
                break;
            case 5:
                Na(t);
                break;
            case 1:
                Ye(t.type) && no(t);
                break;
            case 4:
                Gl(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context,
                    o = t.memoizedProps.value;
                me(ao, r._currentValue), (r._currentValue = o);
                break;
            case 13:
                if (((r = t.memoizedState), r !== null))
                    return r.dehydrated !== null
                        ? (me(we, we.current & 1), (t.flags |= 128), null)
                        : n & t.child.childLanes
                          ? fs(e, t, n)
                          : (me(we, we.current & 1),
                            (e = Lt(e, t, n)),
                            e !== null ? e.sibling : null);
                me(we, we.current & 1);
                break;
            case 19:
                if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                    if (r) return ps(e, t, n);
                    t.flags |= 128;
                }
                if (
                    ((o = t.memoizedState),
                    o !== null &&
                        ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                    me(we, we.current),
                    r)
                )
                    break;
                return null;
            case 22:
            case 23:
                return (t.lanes = 0), is(e, t, n);
        }
        return Lt(e, t, n);
    }
    var ms, hi, ys, vs;
    (ms = function (e, t) {
        for (var n = t.child; n !== null; ) {
            if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
            }
            if (n === t) break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) return;
                n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
        }
    }),
        (hi = function () {}),
        (ys = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
                (e = t.stateNode), un(kt.current);
                var l = null;
                switch (n) {
                    case "input":
                        (o = Ko(e, o)), (r = Ko(e, r)), (l = []);
                        break;
                    case "select":
                        (o = R({}, o, { value: void 0 })),
                            (r = R({}, r, { value: void 0 })),
                            (l = []);
                        break;
                    case "textarea":
                        (o = Go(e, o)), (r = Go(e, r)), (l = []);
                        break;
                    default:
                        typeof o.onClick != "function" &&
                            typeof r.onClick == "function" &&
                            (e.onclick = br);
                }
                Jo(n, r);
                var i;
                n = null;
                for (v in o)
                    if (!r.hasOwnProperty(v) && o.hasOwnProperty(v) && o[v] != null)
                        if (v === "style") {
                            var a = o[v];
                            for (i in a)
                                a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                        } else
                            v !== "dangerouslySetInnerHTML" &&
                                v !== "children" &&
                                v !== "suppressContentEditableWarning" &&
                                v !== "suppressHydrationWarning" &&
                                v !== "autoFocus" &&
                                (S.hasOwnProperty(v)
                                    ? l || (l = [])
                                    : (l = l || []).push(v, null));
                for (v in r) {
                    var s = r[v];
                    if (
                        ((a = o != null ? o[v] : void 0),
                        r.hasOwnProperty(v) && s !== a && (s != null || a != null))
                    )
                        if (v === "style")
                            if (a) {
                                for (i in a)
                                    !a.hasOwnProperty(i) ||
                                        (s && s.hasOwnProperty(i)) ||
                                        (n || (n = {}), (n[i] = ""));
                                for (i in s)
                                    s.hasOwnProperty(i) &&
                                        a[i] !== s[i] &&
                                        (n || (n = {}), (n[i] = s[i]));
                            } else n || (l || (l = []), l.push(v, n)), (n = s);
                        else
                            v === "dangerouslySetInnerHTML"
                                ? ((s = s ? s.__html : void 0),
                                  (a = a ? a.__html : void 0),
                                  s != null && a !== s && (l = l || []).push(v, s))
                                : v === "children"
                                  ? (typeof s != "string" && typeof s != "number") ||
                                    (l = l || []).push(v, "" + s)
                                  : v !== "suppressContentEditableWarning" &&
                                    v !== "suppressHydrationWarning" &&
                                    (S.hasOwnProperty(v)
                                        ? (s != null &&
                                              v === "onScroll" &&
                                              ye("scroll", e),
                                          l || a === s || (l = []))
                                        : (l = l || []).push(v, s));
                }
                n && (l = l || []).push("style", n);
                var v = l;
                (t.updateQueue = v) && (t.flags |= 4);
            }
        }),
        (vs = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
        });
    function _r(e, t) {
        if (!_e)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; t !== null; )
                        t.alternate !== null && (n = t), (t = t.sibling);
                    n === null ? (e.tail = null) : (n.sibling = null);
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var r = null; n !== null; )
                        n.alternate !== null && (r = n), (n = n.sibling);
                    r === null
                        ? t || e.tail === null
                            ? (e.tail = null)
                            : (e.tail.sibling = null)
                        : (r.sibling = null);
            }
    }
    function Ve(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            r = 0;
        if (t)
            for (var o = e.child; o !== null; )
                (n |= o.lanes | o.childLanes),
                    (r |= o.subtreeFlags & 14680064),
                    (r |= o.flags & 14680064),
                    (o.return = e),
                    (o = o.sibling);
        else
            for (o = e.child; o !== null; )
                (n |= o.lanes | o.childLanes),
                    (r |= o.subtreeFlags),
                    (r |= o.flags),
                    (o.return = e),
                    (o = o.sibling);
        return (e.subtreeFlags |= r), (e.childLanes = n), t;
    }
    function Ff(e, t, n) {
        var r = t.pendingProps;
        switch ((Al(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Ve(t), null;
            case 1:
                return Ye(t.type) && to(), Ve(t), null;
            case 3:
                return (
                    (r = t.stateNode),
                    Dn(),
                    ve(Xe),
                    ve($e),
                    ql(),
                    r.pendingContext &&
                        ((r.context = r.pendingContext), (r.pendingContext = null)),
                    (e === null || e.child === null) &&
                        (io(t)
                            ? (t.flags |= 4)
                            : e === null ||
                              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                              ((t.flags |= 1024), mt !== null && (Pi(mt), (mt = null)))),
                    hi(e, t),
                    Ve(t),
                    null
                );
            case 5:
                Zl(t);
                var o = un(mr.current);
                if (((n = t.type), e !== null && t.stateNode != null))
                    ys(e, t, n, r, o),
                        e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(c(166));
                        return Ve(t), null;
                    }
                    if (((e = un(kt.current)), io(t))) {
                        (r = t.stateNode), (n = t.type);
                        var l = t.memoizedProps;
                        switch (((r[wt] = t), (r[sr] = l), (e = (t.mode & 1) !== 0), n)) {
                            case "dialog":
                                ye("cancel", r), ye("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ye("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < ir.length; o++) ye(ir[o], r);
                                break;
                            case "source":
                                ye("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ye("error", r), ye("load", r);
                                break;
                            case "details":
                                ye("toggle", r);
                                break;
                            case "input":
                                Zi(r, l), ye("invalid", r);
                                break;
                            case "select":
                                (r._wrapperState = { wasMultiple: !!l.multiple }),
                                    ye("invalid", r);
                                break;
                            case "textarea":
                                bi(r, l), ye("invalid", r);
                        }
                        Jo(n, l), (o = null);
                        for (var i in l)
                            if (l.hasOwnProperty(i)) {
                                var a = l[i];
                                i === "children"
                                    ? typeof a == "string"
                                        ? r.textContent !== a &&
                                          (l.suppressHydrationWarning !== !0 &&
                                              qr(r.textContent, a, e),
                                          (o = ["children", a]))
                                        : typeof a == "number" &&
                                          r.textContent !== "" + a &&
                                          (l.suppressHydrationWarning !== !0 &&
                                              qr(r.textContent, a, e),
                                          (o = ["children", "" + a]))
                                    : S.hasOwnProperty(i) &&
                                      a != null &&
                                      i === "onScroll" &&
                                      ye("scroll", r);
                            }
                        switch (n) {
                            case "input":
                                zr(r), qi(r, l, !0);
                                break;
                            case "textarea":
                                zr(r), tu(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof l.onClick == "function" && (r.onclick = br);
                        }
                        (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
                    } else {
                        (i = o.nodeType === 9 ? o : o.ownerDocument),
                            e === "http://www.w3.org/1999/xhtml" && (e = nu(n)),
                            e === "http://www.w3.org/1999/xhtml"
                                ? n === "script"
                                    ? ((e = i.createElement("div")),
                                      (e.innerHTML = "<script><\/script>"),
                                      (e = e.removeChild(e.firstChild)))
                                    : typeof r.is == "string"
                                      ? (e = i.createElement(n, { is: r.is }))
                                      : ((e = i.createElement(n)),
                                        n === "select" &&
                                            ((i = e),
                                            r.multiple
                                                ? (i.multiple = !0)
                                                : r.size && (i.size = r.size)))
                                : (e = i.createElementNS(e, n)),
                            (e[wt] = t),
                            (e[sr] = r),
                            ms(e, t, !1, !1),
                            (t.stateNode = e);
                        e: {
                            switch (((i = qo(n, r)), n)) {
                                case "dialog":
                                    ye("cancel", e), ye("close", e), (o = r);
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    ye("load", e), (o = r);
                                    break;
                                case "video":
                                case "audio":
                                    for (o = 0; o < ir.length; o++) ye(ir[o], e);
                                    o = r;
                                    break;
                                case "source":
                                    ye("error", e), (o = r);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    ye("error", e), ye("load", e), (o = r);
                                    break;
                                case "details":
                                    ye("toggle", e), (o = r);
                                    break;
                                case "input":
                                    Zi(e, r), (o = Ko(e, r)), ye("invalid", e);
                                    break;
                                case "option":
                                    o = r;
                                    break;
                                case "select":
                                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                                        (o = R({}, r, { value: void 0 })),
                                        ye("invalid", e);
                                    break;
                                case "textarea":
                                    bi(e, r), (o = Go(e, r)), ye("invalid", e);
                                    break;
                                default:
                                    o = r;
                            }
                            Jo(n, o), (a = o);
                            for (l in a)
                                if (a.hasOwnProperty(l)) {
                                    var s = a[l];
                                    l === "style"
                                        ? lu(e, s)
                                        : l === "dangerouslySetInnerHTML"
                                          ? ((s = s ? s.__html : void 0),
                                            s != null && ru(e, s))
                                          : l === "children"
                                            ? typeof s == "string"
                                                ? (n !== "textarea" || s !== "") &&
                                                  Bn(e, s)
                                                : typeof s == "number" && Bn(e, "" + s)
                                            : l !== "suppressContentEditableWarning" &&
                                              l !== "suppressHydrationWarning" &&
                                              l !== "autoFocus" &&
                                              (S.hasOwnProperty(l)
                                                  ? s != null &&
                                                    l === "onScroll" &&
                                                    ye("scroll", e)
                                                  : s != null && j(e, l, s, i));
                                }
                            switch (n) {
                                case "input":
                                    zr(e), qi(e, r, !1);
                                    break;
                                case "textarea":
                                    zr(e), tu(e);
                                    break;
                                case "option":
                                    r.value != null &&
                                        e.setAttribute("value", "" + ce(r.value));
                                    break;
                                case "select":
                                    (e.multiple = !!r.multiple),
                                        (l = r.value),
                                        l != null
                                            ? yn(e, !!r.multiple, l, !1)
                                            : r.defaultValue != null &&
                                              yn(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof o.onClick == "function" && (e.onclick = br);
                            }
                            switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1;
                            }
                        }
                        r && (t.flags |= 4);
                    }
                    t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
                }
                return Ve(t), null;
            case 6:
                if (e && t.stateNode != null) vs(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(c(166));
                    if (((n = un(mr.current)), un(kt.current), io(t))) {
                        if (
                            ((r = t.stateNode),
                            (n = t.memoizedProps),
                            (r[wt] = t),
                            (l = r.nodeValue !== n) && ((e = rt), e !== null))
                        )
                            switch (e.tag) {
                                case 3:
                                    qr(r.nodeValue, n, (e.mode & 1) !== 0);
                                    break;
                                case 5:
                                    e.memoizedProps.suppressHydrationWarning !== !0 &&
                                        qr(r.nodeValue, n, (e.mode & 1) !== 0);
                            }
                        l && (t.flags |= 4);
                    } else
                        (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
                            (r[wt] = t),
                            (t.stateNode = r);
                }
                return Ve(t), null;
            case 13:
                if (
                    (ve(we),
                    (r = t.memoizedState),
                    e === null ||
                        (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
                ) {
                    if (_e && ot !== null && t.mode & 1 && !(t.flags & 128))
                        _a(), Ln(), (t.flags |= 98560), (l = !1);
                    else if (((l = io(t)), r !== null && r.dehydrated !== null)) {
                        if (e === null) {
                            if (!l) throw Error(c(318));
                            if (
                                ((l = t.memoizedState),
                                (l = l !== null ? l.dehydrated : null),
                                !l)
                            )
                                throw Error(c(317));
                            l[wt] = t;
                        } else
                            Ln(),
                                !(t.flags & 128) && (t.memoizedState = null),
                                (t.flags |= 4);
                        Ve(t), (l = !1);
                    } else mt !== null && (Pi(mt), (mt = null)), (l = !0);
                    if (!l) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128
                    ? ((t.lanes = n), t)
                    : ((r = r !== null),
                      r !== (e !== null && e.memoizedState !== null) &&
                          r &&
                          ((t.child.flags |= 8192),
                          t.mode & 1 &&
                              (e === null || we.current & 1
                                  ? ze === 0 && (ze = 3)
                                  : Ri())),
                      t.updateQueue !== null && (t.flags |= 4),
                      Ve(t),
                      null);
            case 4:
                return (
                    Dn(),
                    hi(e, t),
                    e === null && ur(t.stateNode.containerInfo),
                    Ve(t),
                    null
                );
            case 10:
                return Ql(t.type._context), Ve(t), null;
            case 17:
                return Ye(t.type) && to(), Ve(t), null;
            case 19:
                if ((ve(we), (l = t.memoizedState), l === null)) return Ve(t), null;
                if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
                    if (r) _r(l, !1);
                    else {
                        if (ze !== 0 || (e !== null && e.flags & 128))
                            for (e = t.child; e !== null; ) {
                                if (((i = po(e)), i !== null)) {
                                    for (
                                        t.flags |= 128,
                                            _r(l, !1),
                                            r = i.updateQueue,
                                            r !== null &&
                                                ((t.updateQueue = r), (t.flags |= 4)),
                                            t.subtreeFlags = 0,
                                            r = n,
                                            n = t.child;
                                        n !== null;

                                    )
                                        (l = n),
                                            (e = r),
                                            (l.flags &= 14680066),
                                            (i = l.alternate),
                                            i === null
                                                ? ((l.childLanes = 0),
                                                  (l.lanes = e),
                                                  (l.child = null),
                                                  (l.subtreeFlags = 0),
                                                  (l.memoizedProps = null),
                                                  (l.memoizedState = null),
                                                  (l.updateQueue = null),
                                                  (l.dependencies = null),
                                                  (l.stateNode = null))
                                                : ((l.childLanes = i.childLanes),
                                                  (l.lanes = i.lanes),
                                                  (l.child = i.child),
                                                  (l.subtreeFlags = 0),
                                                  (l.deletions = null),
                                                  (l.memoizedProps = i.memoizedProps),
                                                  (l.memoizedState = i.memoizedState),
                                                  (l.updateQueue = i.updateQueue),
                                                  (l.type = i.type),
                                                  (e = i.dependencies),
                                                  (l.dependencies =
                                                      e === null
                                                          ? null
                                                          : {
                                                                lanes: e.lanes,
                                                                firstContext:
                                                                    e.firstContext,
                                                            })),
                                            (n = n.sibling);
                                    return me(we, (we.current & 1) | 2), t.child;
                                }
                                e = e.sibling;
                            }
                        l.tail !== null &&
                            Ee() > Un &&
                            ((t.flags |= 128), (r = !0), _r(l, !1), (t.lanes = 4194304));
                    }
                else {
                    if (!r)
                        if (((e = po(i)), e !== null)) {
                            if (
                                ((t.flags |= 128),
                                (r = !0),
                                (n = e.updateQueue),
                                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                                _r(l, !0),
                                l.tail === null &&
                                    l.tailMode === "hidden" &&
                                    !i.alternate &&
                                    !_e)
                            )
                                return Ve(t), null;
                        } else
                            2 * Ee() - l.renderingStartTime > Un &&
                                n !== 1073741824 &&
                                ((t.flags |= 128),
                                (r = !0),
                                _r(l, !1),
                                (t.lanes = 4194304));
                    l.isBackwards
                        ? ((i.sibling = t.child), (t.child = i))
                        : ((n = l.last),
                          n !== null ? (n.sibling = i) : (t.child = i),
                          (l.last = i));
                }
                return l.tail !== null
                    ? ((t = l.tail),
                      (l.rendering = t),
                      (l.tail = t.sibling),
                      (l.renderingStartTime = Ee()),
                      (t.sibling = null),
                      (n = we.current),
                      me(we, r ? (n & 1) | 2 : n & 1),
                      t)
                    : (Ve(t), null);
            case 22:
            case 23:
                return (
                    Li(),
                    (r = t.memoizedState !== null),
                    e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
                    r && t.mode & 1
                        ? lt & 1073741824 &&
                          (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                        : Ve(t),
                    null
                );
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(c(156, t.tag));
    }
    function jf(e, t) {
        switch ((Al(t), t.tag)) {
            case 1:
                return (
                    Ye(t.type) && to(),
                    (e = t.flags),
                    e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                );
            case 3:
                return (
                    Dn(),
                    ve(Xe),
                    ve($e),
                    ql(),
                    (e = t.flags),
                    e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
                );
            case 5:
                return Zl(t), null;
            case 13:
                if (
                    (ve(we), (e = t.memoizedState), e !== null && e.dehydrated !== null)
                ) {
                    if (t.alternate === null) throw Error(c(340));
                    Ln();
                }
                return (
                    (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                );
            case 19:
                return ve(we), null;
            case 4:
                return Dn(), null;
            case 10:
                return Ql(t.type._context), null;
            case 22:
            case 23:
                return Li(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var So = !1,
        He = !1,
        Uf = typeof WeakSet == "function" ? WeakSet : Set,
        z = null;
    function Fn(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function")
                try {
                    n(null);
                } catch (r) {
                    xe(e, t, r);
                }
            else n.current = null;
    }
    function gi(e, t, n) {
        try {
            n();
        } catch (r) {
            xe(e, t, r);
        }
    }
    var hs = !1;
    function Af(e, t) {
        if (((Ll = Br), (e = Gu()), Sl(e))) {
            if ("selectionStart" in e)
                var n = { start: e.selectionStart, end: e.selectionEnd };
            else
                e: {
                    n = ((n = e.ownerDocument) && n.defaultView) || window;
                    var r = n.getSelection && n.getSelection();
                    if (r && r.rangeCount !== 0) {
                        n = r.anchorNode;
                        var o = r.anchorOffset,
                            l = r.focusNode;
                        r = r.focusOffset;
                        try {
                            n.nodeType, l.nodeType;
                        } catch {
                            n = null;
                            break e;
                        }
                        var i = 0,
                            a = -1,
                            s = -1,
                            v = 0,
                            _ = 0,
                            w = e,
                            h = null;
                        t: for (;;) {
                            for (
                                var N;
                                w !== n || (o !== 0 && w.nodeType !== 3) || (a = i + o),
                                    w !== l ||
                                        (r !== 0 && w.nodeType !== 3) ||
                                        (s = i + r),
                                    w.nodeType === 3 && (i += w.nodeValue.length),
                                    (N = w.firstChild) !== null;

                            )
                                (h = w), (w = N);
                            for (;;) {
                                if (w === e) break t;
                                if (
                                    (h === n && ++v === o && (a = i),
                                    h === l && ++_ === r && (s = i),
                                    (N = w.nextSibling) !== null)
                                )
                                    break;
                                (w = h), (h = w.parentNode);
                            }
                            w = N;
                        }
                        n = a === -1 || s === -1 ? null : { start: a, end: s };
                    } else n = null;
                }
            n = n || { start: 0, end: 0 };
        } else n = null;
        for (Rl = { focusedElem: e, selectionRange: n }, Br = !1, z = t; z !== null; )
            if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
                (e.return = t), (z = e);
            else
                for (; z !== null; ) {
                    t = z;
                    try {
                        var I = t.alternate;
                        if (t.flags & 1024)
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    break;
                                case 1:
                                    if (I !== null) {
                                        var D = I.memoizedProps,
                                            Te = I.memoizedState,
                                            p = t.stateNode,
                                            f = p.getSnapshotBeforeUpdate(
                                                t.elementType === t.type
                                                    ? D
                                                    : yt(t.type, D),
                                                Te,
                                            );
                                        p.__reactInternalSnapshotBeforeUpdate = f;
                                    }
                                    break;
                                case 3:
                                    var y = t.stateNode.containerInfo;
                                    y.nodeType === 1
                                        ? (y.textContent = "")
                                        : y.nodeType === 9 &&
                                          y.documentElement &&
                                          y.removeChild(y.documentElement);
                                    break;
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                    break;
                                default:
                                    throw Error(c(163));
                            }
                    } catch (k) {
                        xe(t, t.return, k);
                    }
                    if (((e = t.sibling), e !== null)) {
                        (e.return = t.return), (z = e);
                        break;
                    }
                    z = t.return;
                }
        return (I = hs), (hs = !1), I;
    }
    function wr(e, t, n) {
        var r = t.updateQueue;
        if (((r = r !== null ? r.lastEffect : null), r !== null)) {
            var o = (r = r.next);
            do {
                if ((o.tag & e) === e) {
                    var l = o.destroy;
                    (o.destroy = void 0), l !== void 0 && gi(t, n, l);
                }
                o = o.next;
            } while (o !== r);
        }
    }
    function xo(e, t) {
        if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
            var n = (t = t.next);
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r();
                }
                n = n.next;
            } while (n !== t);
        }
    }
    function _i(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = n;
                    break;
                default:
                    e = n;
            }
            typeof t == "function" ? t(e) : (t.current = e);
        }
    }
    function gs(e) {
        var t = e.alternate;
        t !== null && ((e.alternate = null), gs(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            e.tag === 5 &&
                ((t = e.stateNode),
                t !== null &&
                    (delete t[wt],
                    delete t[sr],
                    delete t[Ml],
                    delete t[kf],
                    delete t[Sf])),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
    }
    function _s(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function ws(e) {
        e: for (;;) {
            for (; e.sibling === null; ) {
                if (e.return === null || _s(e.return)) return null;
                e = e.return;
            }
            for (
                e.sibling.return = e.return, e = e.sibling;
                e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

            ) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                (e.child.return = e), (e = e.child);
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function wi(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6)
            (e = e.stateNode),
                t
                    ? n.nodeType === 8
                        ? n.parentNode.insertBefore(e, t)
                        : n.insertBefore(e, t)
                    : (n.nodeType === 8
                          ? ((t = n.parentNode), t.insertBefore(e, n))
                          : ((t = n), t.appendChild(e)),
                      (n = n._reactRootContainer),
                      n != null || t.onclick !== null || (t.onclick = br));
        else if (r !== 4 && ((e = e.child), e !== null))
            for (wi(e, t, n), e = e.sibling; e !== null; ) wi(e, t, n), (e = e.sibling);
    }
    function ki(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && ((e = e.child), e !== null))
            for (ki(e, t, n), e = e.sibling; e !== null; ) ki(e, t, n), (e = e.sibling);
    }
    var Ue = null,
        vt = !1;
    function Kt(e, t, n) {
        for (n = n.child; n !== null; ) ks(e, t, n), (n = n.sibling);
    }
    function ks(e, t, n) {
        if (_t && typeof _t.onCommitFiberUnmount == "function")
            try {
                _t.onCommitFiberUnmount(Mr, n);
            } catch {}
        switch (n.tag) {
            case 5:
                He || Fn(n, t);
            case 6:
                var r = Ue,
                    o = vt;
                (Ue = null),
                    Kt(e, t, n),
                    (Ue = r),
                    (vt = o),
                    Ue !== null &&
                        (vt
                            ? ((e = Ue),
                              (n = n.stateNode),
                              e.nodeType === 8
                                  ? e.parentNode.removeChild(n)
                                  : e.removeChild(n))
                            : Ue.removeChild(n.stateNode));
                break;
            case 18:
                Ue !== null &&
                    (vt
                        ? ((e = Ue),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? Dl(e.parentNode, n)
                              : e.nodeType === 1 && Dl(e, n),
                          qn(e))
                        : Dl(Ue, n.stateNode));
                break;
            case 4:
                (r = Ue),
                    (o = vt),
                    (Ue = n.stateNode.containerInfo),
                    (vt = !0),
                    Kt(e, t, n),
                    (Ue = r),
                    (vt = o);
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (
                    !He &&
                    ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
                ) {
                    o = r = r.next;
                    do {
                        var l = o,
                            i = l.destroy;
                        (l = l.tag),
                            i !== void 0 && (l & 2 || l & 4) && gi(n, t, i),
                            (o = o.next);
                    } while (o !== r);
                }
                Kt(e, t, n);
                break;
            case 1:
                if (
                    !He &&
                    (Fn(n, t),
                    (r = n.stateNode),
                    typeof r.componentWillUnmount == "function")
                )
                    try {
                        (r.props = n.memoizedProps),
                            (r.state = n.memoizedState),
                            r.componentWillUnmount();
                    } catch (a) {
                        xe(n, t, a);
                    }
                Kt(e, t, n);
                break;
            case 21:
                Kt(e, t, n);
                break;
            case 22:
                n.mode & 1
                    ? ((He = (r = He) || n.memoizedState !== null), Kt(e, t, n), (He = r))
                    : Kt(e, t, n);
                break;
            default:
                Kt(e, t, n);
        }
    }
    function Ss(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new Uf()),
                t.forEach(function (r) {
                    var o = Yf.bind(null, e, r);
                    n.has(r) || (n.add(r), r.then(o, o));
                });
        }
    }
    function ht(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var r = 0; r < n.length; r++) {
                var o = n[r];
                try {
                    var l = e,
                        i = t,
                        a = i;
                    e: for (; a !== null; ) {
                        switch (a.tag) {
                            case 5:
                                (Ue = a.stateNode), (vt = !1);
                                break e;
                            case 3:
                                (Ue = a.stateNode.containerInfo), (vt = !0);
                                break e;
                            case 4:
                                (Ue = a.stateNode.containerInfo), (vt = !0);
                                break e;
                        }
                        a = a.return;
                    }
                    if (Ue === null) throw Error(c(160));
                    ks(l, i, o), (Ue = null), (vt = !1);
                    var s = o.alternate;
                    s !== null && (s.return = null), (o.return = null);
                } catch (v) {
                    xe(o, t, v);
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null; ) xs(t, e), (t = t.sibling);
    }
    function xs(e, t) {
        var n = e.alternate,
            r = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if ((ht(t, e), xt(e), r & 4)) {
                    try {
                        wr(3, e, e.return), xo(3, e);
                    } catch (D) {
                        xe(e, e.return, D);
                    }
                    try {
                        wr(5, e, e.return);
                    } catch (D) {
                        xe(e, e.return, D);
                    }
                }
                break;
            case 1:
                ht(t, e), xt(e), r & 512 && n !== null && Fn(n, n.return);
                break;
            case 5:
                if (
                    (ht(t, e),
                    xt(e),
                    r & 512 && n !== null && Fn(n, n.return),
                    e.flags & 32)
                ) {
                    var o = e.stateNode;
                    try {
                        Bn(o, "");
                    } catch (D) {
                        xe(e, e.return, D);
                    }
                }
                if (r & 4 && ((o = e.stateNode), o != null)) {
                    var l = e.memoizedProps,
                        i = n !== null ? n.memoizedProps : l,
                        a = e.type,
                        s = e.updateQueue;
                    if (((e.updateQueue = null), s !== null))
                        try {
                            a === "input" &&
                                l.type === "radio" &&
                                l.name != null &&
                                Ji(o, l),
                                qo(a, i);
                            var v = qo(a, l);
                            for (i = 0; i < s.length; i += 2) {
                                var _ = s[i],
                                    w = s[i + 1];
                                _ === "style"
                                    ? lu(o, w)
                                    : _ === "dangerouslySetInnerHTML"
                                      ? ru(o, w)
                                      : _ === "children"
                                        ? Bn(o, w)
                                        : j(o, _, w, v);
                            }
                            switch (a) {
                                case "input":
                                    Xo(o, l);
                                    break;
                                case "textarea":
                                    eu(o, l);
                                    break;
                                case "select":
                                    var h = o._wrapperState.wasMultiple;
                                    o._wrapperState.wasMultiple = !!l.multiple;
                                    var N = l.value;
                                    N != null
                                        ? yn(o, !!l.multiple, N, !1)
                                        : h !== !!l.multiple &&
                                          (l.defaultValue != null
                                              ? yn(o, !!l.multiple, l.defaultValue, !0)
                                              : yn(
                                                    o,
                                                    !!l.multiple,
                                                    l.multiple ? [] : "",
                                                    !1,
                                                ));
                            }
                            o[sr] = l;
                        } catch (D) {
                            xe(e, e.return, D);
                        }
                }
                break;
            case 6:
                if ((ht(t, e), xt(e), r & 4)) {
                    if (e.stateNode === null) throw Error(c(162));
                    (o = e.stateNode), (l = e.memoizedProps);
                    try {
                        o.nodeValue = l;
                    } catch (D) {
                        xe(e, e.return, D);
                    }
                }
                break;
            case 3:
                if (
                    (ht(t, e), xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
                )
                    try {
                        qn(t.containerInfo);
                    } catch (D) {
                        xe(e, e.return, D);
                    }
                break;
            case 4:
                ht(t, e), xt(e);
                break;
            case 13:
                ht(t, e),
                    xt(e),
                    (o = e.child),
                    o.flags & 8192 &&
                        ((l = o.memoizedState !== null),
                        (o.stateNode.isHidden = l),
                        !l ||
                            (o.alternate !== null &&
                                o.alternate.memoizedState !== null) ||
                            (Ei = Ee())),
                    r & 4 && Ss(e);
                break;
            case 22:
                if (
                    ((_ = n !== null && n.memoizedState !== null),
                    e.mode & 1 ? ((He = (v = He) || _), ht(t, e), (He = v)) : ht(t, e),
                    xt(e),
                    r & 8192)
                ) {
                    if (
                        ((v = e.memoizedState !== null),
                        (e.stateNode.isHidden = v) && !_ && e.mode & 1)
                    )
                        for (z = e, _ = e.child; _ !== null; ) {
                            for (w = z = _; z !== null; ) {
                                switch (((h = z), (N = h.child), h.tag)) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        wr(4, h, h.return);
                                        break;
                                    case 1:
                                        Fn(h, h.return);
                                        var I = h.stateNode;
                                        if (typeof I.componentWillUnmount == "function") {
                                            (r = h), (n = h.return);
                                            try {
                                                (t = r),
                                                    (I.props = t.memoizedProps),
                                                    (I.state = t.memoizedState),
                                                    I.componentWillUnmount();
                                            } catch (D) {
                                                xe(r, n, D);
                                            }
                                        }
                                        break;
                                    case 5:
                                        Fn(h, h.return);
                                        break;
                                    case 22:
                                        if (h.memoizedState !== null) {
                                            Cs(w);
                                            continue;
                                        }
                                }
                                N !== null ? ((N.return = h), (z = N)) : Cs(w);
                            }
                            _ = _.sibling;
                        }
                    e: for (_ = null, w = e; ; ) {
                        if (w.tag === 5) {
                            if (_ === null) {
                                _ = w;
                                try {
                                    (o = w.stateNode),
                                        v
                                            ? ((l = o.style),
                                              typeof l.setProperty == "function"
                                                  ? l.setProperty(
                                                        "display",
                                                        "none",
                                                        "important",
                                                    )
                                                  : (l.display = "none"))
                                            : ((a = w.stateNode),
                                              (s = w.memoizedProps.style),
                                              (i =
                                                  s != null && s.hasOwnProperty("display")
                                                      ? s.display
                                                      : null),
                                              (a.style.display = ou("display", i)));
                                } catch (D) {
                                    xe(e, e.return, D);
                                }
                            }
                        } else if (w.tag === 6) {
                            if (_ === null)
                                try {
                                    w.stateNode.nodeValue = v ? "" : w.memoizedProps;
                                } catch (D) {
                                    xe(e, e.return, D);
                                }
                        } else if (
                            ((w.tag !== 22 && w.tag !== 23) ||
                                w.memoizedState === null ||
                                w === e) &&
                            w.child !== null
                        ) {
                            (w.child.return = w), (w = w.child);
                            continue;
                        }
                        if (w === e) break e;
                        for (; w.sibling === null; ) {
                            if (w.return === null || w.return === e) break e;
                            _ === w && (_ = null), (w = w.return);
                        }
                        _ === w && (_ = null),
                            (w.sibling.return = w.return),
                            (w = w.sibling);
                    }
                }
                break;
            case 19:
                ht(t, e), xt(e), r & 4 && Ss(e);
                break;
            case 21:
                break;
            default:
                ht(t, e), xt(e);
        }
    }
    function xt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var n = e.return; n !== null; ) {
                        if (_s(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(c(160));
                }
                switch (r.tag) {
                    case 5:
                        var o = r.stateNode;
                        r.flags & 32 && (Bn(o, ""), (r.flags &= -33));
                        var l = ws(e);
                        ki(e, l, o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo,
                            a = ws(e);
                        wi(e, a, i);
                        break;
                    default:
                        throw Error(c(161));
                }
            } catch (s) {
                xe(e, e.return, s);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function $f(e, t, n) {
        (z = e), Es(e);
    }
    function Es(e, t, n) {
        for (var r = (e.mode & 1) !== 0; z !== null; ) {
            var o = z,
                l = o.child;
            if (o.tag === 22 && r) {
                var i = o.memoizedState !== null || So;
                if (!i) {
                    var a = o.alternate,
                        s = (a !== null && a.memoizedState !== null) || He;
                    a = So;
                    var v = He;
                    if (((So = i), (He = s) && !v))
                        for (z = o; z !== null; )
                            (i = z),
                                (s = i.child),
                                i.tag === 22 && i.memoizedState !== null
                                    ? Ns(o)
                                    : s !== null
                                      ? ((s.return = i), (z = s))
                                      : Ns(o);
                    for (; l !== null; ) (z = l), Es(l), (l = l.sibling);
                    (z = o), (So = a), (He = v);
                }
                Ts(e);
            } else
                o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (z = l)) : Ts(e);
        }
    }
    function Ts(e) {
        for (; z !== null; ) {
            var t = z;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                He || xo(5, t);
                                break;
                            case 1:
                                var r = t.stateNode;
                                if (t.flags & 4 && !He)
                                    if (n === null) r.componentDidMount();
                                    else {
                                        var o =
                                            t.elementType === t.type
                                                ? n.memoizedProps
                                                : yt(t.type, n.memoizedProps);
                                        r.componentDidUpdate(
                                            o,
                                            n.memoizedState,
                                            r.__reactInternalSnapshotBeforeUpdate,
                                        );
                                    }
                                var l = t.updateQueue;
                                l !== null && Ca(t, l, r);
                                break;
                            case 3:
                                var i = t.updateQueue;
                                if (i !== null) {
                                    if (((n = null), t.child !== null))
                                        switch (t.child.tag) {
                                            case 5:
                                                n = t.child.stateNode;
                                                break;
                                            case 1:
                                                n = t.child.stateNode;
                                        }
                                    Ca(t, i, n);
                                }
                                break;
                            case 5:
                                var a = t.stateNode;
                                if (n === null && t.flags & 4) {
                                    n = a;
                                    var s = t.memoizedProps;
                                    switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            s.autoFocus && n.focus();
                                            break;
                                        case "img":
                                            s.src && (n.src = s.src);
                                    }
                                }
                                break;
                            case 6:
                                break;
                            case 4:
                                break;
                            case 12:
                                break;
                            case 13:
                                if (t.memoizedState === null) {
                                    var v = t.alternate;
                                    if (v !== null) {
                                        var _ = v.memoizedState;
                                        if (_ !== null) {
                                            var w = _.dehydrated;
                                            w !== null && qn(w);
                                        }
                                    }
                                }
                                break;
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25:
                                break;
                            default:
                                throw Error(c(163));
                        }
                    He || (t.flags & 512 && _i(t));
                } catch (h) {
                    xe(t, t.return, h);
                }
            }
            if (t === e) {
                z = null;
                break;
            }
            if (((n = t.sibling), n !== null)) {
                (n.return = t.return), (z = n);
                break;
            }
            z = t.return;
        }
    }
    function Cs(e) {
        for (; z !== null; ) {
            var t = z;
            if (t === e) {
                z = null;
                break;
            }
            var n = t.sibling;
            if (n !== null) {
                (n.return = t.return), (z = n);
                break;
            }
            z = t.return;
        }
    }
    function Ns(e) {
        for (; z !== null; ) {
            var t = z;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            xo(4, t);
                        } catch (s) {
                            xe(t, n, s);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var o = t.return;
                            try {
                                r.componentDidMount();
                            } catch (s) {
                                xe(t, o, s);
                            }
                        }
                        var l = t.return;
                        try {
                            _i(t);
                        } catch (s) {
                            xe(t, l, s);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            _i(t);
                        } catch (s) {
                            xe(t, i, s);
                        }
                }
            } catch (s) {
                xe(t, t.return, s);
            }
            if (t === e) {
                z = null;
                break;
            }
            var a = t.sibling;
            if (a !== null) {
                (a.return = t.return), (z = a);
                break;
            }
            z = t.return;
        }
    }
    var Bf = Math.ceil,
        Eo = B.ReactCurrentDispatcher,
        Si = B.ReactCurrentOwner,
        ct = B.ReactCurrentBatchConfig,
        te = 0,
        De = null,
        Ne = null,
        Ae = 0,
        lt = 0,
        jn = Bt(0),
        ze = 0,
        kr = null,
        sn = 0,
        To = 0,
        xi = 0,
        Sr = null,
        Ze = null,
        Ei = 0,
        Un = 1 / 0,
        Rt = null,
        Co = !1,
        Ti = null,
        Xt = null,
        No = !1,
        Yt = null,
        Po = 0,
        xr = 0,
        Ci = null,
        zo = -1,
        Lo = 0;
    function Qe() {
        return te & 6 ? Ee() : zo !== -1 ? zo : (zo = Ee());
    }
    function Gt(e) {
        return e.mode & 1
            ? te & 2 && Ae !== 0
                ? Ae & -Ae
                : Ef.transition !== null
                  ? (Lo === 0 && (Lo = wu()), Lo)
                  : ((e = fe),
                    e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : zu(e.type))),
                    e)
            : 1;
    }
    function gt(e, t, n, r) {
        if (50 < xr) throw ((xr = 0), (Ci = null), Error(c(185)));
        Xn(e, n, r),
            (!(te & 2) || e !== De) &&
                (e === De && (!(te & 2) && (To |= n), ze === 4 && Zt(e, Ae)),
                Je(e, r),
                n === 1 && te === 0 && !(t.mode & 1) && ((Un = Ee() + 500), ro && Ht()));
    }
    function Je(e, t) {
        var n = e.callbackNode;
        xc(e, t);
        var r = Ur(e, e === De ? Ae : 0);
        if (r === 0)
            n !== null && hu(n), (e.callbackNode = null), (e.callbackPriority = 0);
        else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((n != null && hu(n), t === 1))
                e.tag === 0 ? xf(zs.bind(null, e)) : ma(zs.bind(null, e)),
                    _f(function () {
                        !(te & 6) && Ht();
                    }),
                    (n = null);
            else {
                switch (ku(r)) {
                    case 1:
                        n = ll;
                        break;
                    case 4:
                        n = gu;
                        break;
                    case 16:
                        n = Dr;
                        break;
                    case 536870912:
                        n = _u;
                        break;
                    default:
                        n = Dr;
                }
                n = js(n, Ps.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
        }
    }
    function Ps(e, t) {
        if (((zo = -1), (Lo = 0), te & 6)) throw Error(c(327));
        var n = e.callbackNode;
        if (An() && e.callbackNode !== n) return null;
        var r = Ur(e, e === De ? Ae : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Ro(e, r);
        else {
            t = r;
            var o = te;
            te |= 2;
            var l = Rs();
            (De !== e || Ae !== t) && ((Rt = null), (Un = Ee() + 500), fn(e, t));
            do
                try {
                    Wf();
                    break;
                } catch (a) {
                    Ls(e, a);
                }
            while (!0);
            Wl(),
                (Eo.current = l),
                (te = o),
                Ne !== null ? (t = 0) : ((De = null), (Ae = 0), (t = ze));
        }
        if (t !== 0) {
            if ((t === 2 && ((o = il(e)), o !== 0 && ((r = o), (t = Ni(e, o)))), t === 1))
                throw ((n = kr), fn(e, 0), Zt(e, r), Je(e, Ee()), n);
            if (t === 6) Zt(e, r);
            else {
                if (
                    ((o = e.current.alternate),
                    !(r & 30) &&
                        !Vf(o) &&
                        ((t = Ro(e, r)),
                        t === 2 && ((l = il(e)), l !== 0 && ((r = l), (t = Ni(e, l)))),
                        t === 1))
                )
                    throw ((n = kr), fn(e, 0), Zt(e, r), Je(e, Ee()), n);
                switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                    case 0:
                    case 1:
                        throw Error(c(345));
                    case 2:
                        dn(e, Ze, Rt);
                        break;
                    case 3:
                        if (
                            (Zt(e, r),
                            (r & 130023424) === r && ((t = Ei + 500 - Ee()), 10 < t))
                        ) {
                            if (Ur(e, 0) !== 0) break;
                            if (((o = e.suspendedLanes), (o & r) !== r)) {
                                Qe(), (e.pingedLanes |= e.suspendedLanes & o);
                                break;
                            }
                            e.timeoutHandle = Ol(dn.bind(null, e, Ze, Rt), t);
                            break;
                        }
                        dn(e, Ze, Rt);
                        break;
                    case 4:
                        if ((Zt(e, r), (r & 4194240) === r)) break;
                        for (t = e.eventTimes, o = -1; 0 < r; ) {
                            var i = 31 - dt(r);
                            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
                        }
                        if (
                            ((r = o),
                            (r = Ee() - r),
                            (r =
                                (120 > r
                                    ? 120
                                    : 480 > r
                                      ? 480
                                      : 1080 > r
                                        ? 1080
                                        : 1920 > r
                                          ? 1920
                                          : 3e3 > r
                                            ? 3e3
                                            : 4320 > r
                                              ? 4320
                                              : 1960 * Bf(r / 1960)) - r),
                            10 < r)
                        ) {
                            e.timeoutHandle = Ol(dn.bind(null, e, Ze, Rt), r);
                            break;
                        }
                        dn(e, Ze, Rt);
                        break;
                    case 5:
                        dn(e, Ze, Rt);
                        break;
                    default:
                        throw Error(c(329));
                }
            }
        }
        return Je(e, Ee()), e.callbackNode === n ? Ps.bind(null, e) : null;
    }
    function Ni(e, t) {
        var n = Sr;
        return (
            e.current.memoizedState.isDehydrated && (fn(e, t).flags |= 256),
            (e = Ro(e, t)),
            e !== 2 && ((t = Ze), (Ze = n), t !== null && Pi(t)),
            e
        );
    }
    function Pi(e) {
        Ze === null ? (Ze = e) : Ze.push.apply(Ze, e);
    }
    function Vf(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && ((n = n.stores), n !== null))
                    for (var r = 0; r < n.length; r++) {
                        var o = n[r],
                            l = o.getSnapshot;
                        o = o.value;
                        try {
                            if (!pt(l(), o)) return !1;
                        } catch {
                            return !1;
                        }
                    }
            }
            if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
                (n.return = t), (t = n);
            else {
                if (t === e) break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
            }
        }
        return !0;
    }
    function Zt(e, t) {
        for (
            t &= ~xi,
                t &= ~To,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                e = e.expirationTimes;
            0 < t;

        ) {
            var n = 31 - dt(t),
                r = 1 << n;
            (e[n] = -1), (t &= ~r);
        }
    }
    function zs(e) {
        if (te & 6) throw Error(c(327));
        An();
        var t = Ur(e, 0);
        if (!(t & 1)) return Je(e, Ee()), null;
        var n = Ro(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = il(e);
            r !== 0 && ((t = r), (n = Ni(e, r)));
        }
        if (n === 1) throw ((n = kr), fn(e, 0), Zt(e, t), Je(e, Ee()), n);
        if (n === 6) throw Error(c(345));
        return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            dn(e, Ze, Rt),
            Je(e, Ee()),
            null
        );
    }
    function zi(e, t) {
        var n = te;
        te |= 1;
        try {
            return e(t);
        } finally {
            (te = n), te === 0 && ((Un = Ee() + 500), ro && Ht());
        }
    }
    function cn(e) {
        Yt !== null && Yt.tag === 0 && !(te & 6) && An();
        var t = te;
        te |= 1;
        var n = ct.transition,
            r = fe;
        try {
            if (((ct.transition = null), (fe = 1), e)) return e();
        } finally {
            (fe = r), (ct.transition = n), (te = t), !(te & 6) && Ht();
        }
    }
    function Li() {
        (lt = jn.current), ve(jn);
    }
    function fn(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        if ((n !== -1 && ((e.timeoutHandle = -1), gf(n)), Ne !== null))
            for (n = Ne.return; n !== null; ) {
                var r = n;
                switch ((Al(r), r.tag)) {
                    case 1:
                        (r = r.type.childContextTypes), r != null && to();
                        break;
                    case 3:
                        Dn(), ve(Xe), ve($e), ql();
                        break;
                    case 5:
                        Zl(r);
                        break;
                    case 4:
                        Dn();
                        break;
                    case 13:
                        ve(we);
                        break;
                    case 19:
                        ve(we);
                        break;
                    case 10:
                        Ql(r.type._context);
                        break;
                    case 22:
                    case 23:
                        Li();
                }
                n = n.return;
            }
        if (
            ((De = e),
            (Ne = e = Jt(e.current, null)),
            (Ae = lt = t),
            (ze = 0),
            (kr = null),
            (xi = To = sn = 0),
            (Ze = Sr = null),
            ln !== null)
        ) {
            for (t = 0; t < ln.length; t++)
                if (((n = ln[t]), (r = n.interleaved), r !== null)) {
                    n.interleaved = null;
                    var o = r.next,
                        l = n.pending;
                    if (l !== null) {
                        var i = l.next;
                        (l.next = o), (r.next = i);
                    }
                    n.pending = r;
                }
            ln = null;
        }
        return e;
    }
    function Ls(e, t) {
        do {
            var n = Ne;
            try {
                if ((Wl(), (mo.current = go), yo)) {
                    for (var r = ke.memoizedState; r !== null; ) {
                        var o = r.queue;
                        o !== null && (o.pending = null), (r = r.next);
                    }
                    yo = !1;
                }
                if (
                    ((an = 0),
                    (Oe = Pe = ke = null),
                    (yr = !1),
                    (vr = 0),
                    (Si.current = null),
                    n === null || n.return === null)
                ) {
                    (ze = 1), (kr = t), (Ne = null);
                    break;
                }
                e: {
                    var l = e,
                        i = n.return,
                        a = n,
                        s = t;
                    if (
                        ((t = Ae),
                        (a.flags |= 32768),
                        s !== null && typeof s == "object" && typeof s.then == "function")
                    ) {
                        var v = s,
                            _ = a,
                            w = _.tag;
                        if (!(_.mode & 1) && (w === 0 || w === 11 || w === 15)) {
                            var h = _.alternate;
                            h
                                ? ((_.updateQueue = h.updateQueue),
                                  (_.memoizedState = h.memoizedState),
                                  (_.lanes = h.lanes))
                                : ((_.updateQueue = null), (_.memoizedState = null));
                        }
                        var N = ts(i);
                        if (N !== null) {
                            (N.flags &= -257),
                                ns(N, i, a, l, t),
                                N.mode & 1 && es(l, v, t),
                                (t = N),
                                (s = v);
                            var I = t.updateQueue;
                            if (I === null) {
                                var D = new Set();
                                D.add(s), (t.updateQueue = D);
                            } else I.add(s);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                es(l, v, t), Ri();
                                break e;
                            }
                            s = Error(c(426));
                        }
                    } else if (_e && a.mode & 1) {
                        var Te = ts(i);
                        if (Te !== null) {
                            !(Te.flags & 65536) && (Te.flags |= 256),
                                ns(Te, i, a, l, t),
                                Vl(Mn(s, a));
                            break e;
                        }
                    }
                    (l = s = Mn(s, a)),
                        ze !== 4 && (ze = 2),
                        Sr === null ? (Sr = [l]) : Sr.push(l),
                        (l = i);
                    do {
                        switch (l.tag) {
                            case 3:
                                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                                var p = qa(l, s, t);
                                Ta(l, p);
                                break e;
                            case 1:
                                a = s;
                                var f = l.type,
                                    y = l.stateNode;
                                if (
                                    !(l.flags & 128) &&
                                    (typeof f.getDerivedStateFromError == "function" ||
                                        (y !== null &&
                                            typeof y.componentDidCatch == "function" &&
                                            (Xt === null || !Xt.has(y))))
                                ) {
                                    (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                                    var k = ba(l, a, t);
                                    Ta(l, k);
                                    break e;
                                }
                        }
                        l = l.return;
                    } while (l !== null);
                }
                Os(n);
            } catch (M) {
                (t = M), Ne === n && n !== null && (Ne = n = n.return);
                continue;
            }
            break;
        } while (!0);
    }
    function Rs() {
        var e = Eo.current;
        return (Eo.current = go), e === null ? go : e;
    }
    function Ri() {
        (ze === 0 || ze === 3 || ze === 2) && (ze = 4),
            De === null || (!(sn & 268435455) && !(To & 268435455)) || Zt(De, Ae);
    }
    function Ro(e, t) {
        var n = te;
        te |= 2;
        var r = Rs();
        (De !== e || Ae !== t) && ((Rt = null), fn(e, t));
        do
            try {
                Hf();
                break;
            } catch (o) {
                Ls(e, o);
            }
        while (!0);
        if ((Wl(), (te = n), (Eo.current = r), Ne !== null)) throw Error(c(261));
        return (De = null), (Ae = 0), ze;
    }
    function Hf() {
        for (; Ne !== null; ) Is(Ne);
    }
    function Wf() {
        for (; Ne !== null && !mc(); ) Is(Ne);
    }
    function Is(e) {
        var t = Fs(e.alternate, e, lt);
        (e.memoizedProps = e.pendingProps),
            t === null ? Os(e) : (Ne = t),
            (Si.current = null);
    }
    function Os(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (((e = t.return), t.flags & 32768)) {
                if (((n = jf(n, t)), n !== null)) {
                    (n.flags &= 32767), (Ne = n);
                    return;
                }
                if (e !== null)
                    (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
                else {
                    (ze = 6), (Ne = null);
                    return;
                }
            } else if (((n = Ff(n, t, lt)), n !== null)) {
                Ne = n;
                return;
            }
            if (((t = t.sibling), t !== null)) {
                Ne = t;
                return;
            }
            Ne = t = e;
        } while (t !== null);
        ze === 0 && (ze = 5);
    }
    function dn(e, t, n) {
        var r = fe,
            o = ct.transition;
        try {
            (ct.transition = null), (fe = 1), Qf(e, t, n, r);
        } finally {
            (ct.transition = o), (fe = r);
        }
        return null;
    }
    function Qf(e, t, n, r) {
        do An();
        while (Yt !== null);
        if (te & 6) throw Error(c(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(c(177));
        (e.callbackNode = null), (e.callbackPriority = 0);
        var l = n.lanes | n.childLanes;
        if (
            (Ec(e, l),
            e === De && ((Ne = De = null), (Ae = 0)),
            (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
                No ||
                ((No = !0),
                js(Dr, function () {
                    return An(), null;
                })),
            (l = (n.flags & 15990) !== 0),
            n.subtreeFlags & 15990 || l)
        ) {
            (l = ct.transition), (ct.transition = null);
            var i = fe;
            fe = 1;
            var a = te;
            (te |= 4),
                (Si.current = null),
                Af(e, n),
                xs(n, e),
                ff(Rl),
                (Br = !!Ll),
                (Rl = Ll = null),
                (e.current = n),
                $f(n),
                yc(),
                (te = a),
                (fe = i),
                (ct.transition = l);
        } else e.current = n;
        if (
            (No && ((No = !1), (Yt = e), (Po = o)),
            (l = e.pendingLanes),
            l === 0 && (Xt = null),
            gc(n.stateNode),
            Je(e, Ee()),
            t !== null)
        )
            for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
        if (Co) throw ((Co = !1), (e = Ti), (Ti = null), e);
        return (
            Po & 1 && e.tag !== 0 && An(),
            (l = e.pendingLanes),
            l & 1 ? (e === Ci ? xr++ : ((xr = 0), (Ci = e))) : (xr = 0),
            Ht(),
            null
        );
    }
    function An() {
        if (Yt !== null) {
            var e = ku(Po),
                t = ct.transition,
                n = fe;
            try {
                if (((ct.transition = null), (fe = 16 > e ? 16 : e), Yt === null))
                    var r = !1;
                else {
                    if (((e = Yt), (Yt = null), (Po = 0), te & 6)) throw Error(c(331));
                    var o = te;
                    for (te |= 4, z = e.current; z !== null; ) {
                        var l = z,
                            i = l.child;
                        if (z.flags & 16) {
                            var a = l.deletions;
                            if (a !== null) {
                                for (var s = 0; s < a.length; s++) {
                                    var v = a[s];
                                    for (z = v; z !== null; ) {
                                        var _ = z;
                                        switch (_.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                wr(8, _, l);
                                        }
                                        var w = _.child;
                                        if (w !== null) (w.return = _), (z = w);
                                        else
                                            for (; z !== null; ) {
                                                _ = z;
                                                var h = _.sibling,
                                                    N = _.return;
                                                if ((gs(_), _ === v)) {
                                                    z = null;
                                                    break;
                                                }
                                                if (h !== null) {
                                                    (h.return = N), (z = h);
                                                    break;
                                                }
                                                z = N;
                                            }
                                    }
                                }
                                var I = l.alternate;
                                if (I !== null) {
                                    var D = I.child;
                                    if (D !== null) {
                                        I.child = null;
                                        do {
                                            var Te = D.sibling;
                                            (D.sibling = null), (D = Te);
                                        } while (D !== null);
                                    }
                                }
                                z = l;
                            }
                        }
                        if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (z = i);
                        else
                            e: for (; z !== null; ) {
                                if (((l = z), l.flags & 2048))
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            wr(9, l, l.return);
                                    }
                                var p = l.sibling;
                                if (p !== null) {
                                    (p.return = l.return), (z = p);
                                    break e;
                                }
                                z = l.return;
                            }
                    }
                    var f = e.current;
                    for (z = f; z !== null; ) {
                        i = z;
                        var y = i.child;
                        if (i.subtreeFlags & 2064 && y !== null) (y.return = i), (z = y);
                        else
                            e: for (i = f; z !== null; ) {
                                if (((a = z), a.flags & 2048))
                                    try {
                                        switch (a.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                xo(9, a);
                                        }
                                    } catch (M) {
                                        xe(a, a.return, M);
                                    }
                                if (a === i) {
                                    z = null;
                                    break e;
                                }
                                var k = a.sibling;
                                if (k !== null) {
                                    (k.return = a.return), (z = k);
                                    break e;
                                }
                                z = a.return;
                            }
                    }
                    if (
                        ((te = o),
                        Ht(),
                        _t && typeof _t.onPostCommitFiberRoot == "function")
                    )
                        try {
                            _t.onPostCommitFiberRoot(Mr, e);
                        } catch {}
                    r = !0;
                }
                return r;
            } finally {
                (fe = n), (ct.transition = t);
            }
        }
        return !1;
    }
    function Ds(e, t, n) {
        (t = Mn(n, t)),
            (t = qa(e, t, 1)),
            (e = Qt(e, t, 1)),
            (t = Qe()),
            e !== null && (Xn(e, 1, t), Je(e, t));
    }
    function xe(e, t, n) {
        if (e.tag === 3) Ds(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Ds(t, e, n);
                    break;
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (
                        typeof t.type.getDerivedStateFromError == "function" ||
                        (typeof r.componentDidCatch == "function" &&
                            (Xt === null || !Xt.has(r)))
                    ) {
                        (e = Mn(n, e)),
                            (e = ba(t, e, 1)),
                            (t = Qt(t, e, 1)),
                            (e = Qe()),
                            t !== null && (Xn(t, 1, e), Je(t, e));
                        break;
                    }
                }
                t = t.return;
            }
    }
    function Kf(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t),
            (t = Qe()),
            (e.pingedLanes |= e.suspendedLanes & n),
            De === e &&
                (Ae & n) === n &&
                (ze === 4 || (ze === 3 && (Ae & 130023424) === Ae && 500 > Ee() - Ei)
                    ? fn(e, 0)
                    : (xi |= n)),
            Je(e, t);
    }
    function Ms(e, t) {
        t === 0 &&
            (e.mode & 1
                ? ((t = jr), (jr <<= 1), !(jr & 130023424) && (jr = 4194304))
                : (t = 1));
        var n = Qe();
        (e = Pt(e, t)), e !== null && (Xn(e, t, n), Je(e, n));
    }
    function Xf(e) {
        var t = e.memoizedState,
            n = 0;
        t !== null && (n = t.retryLane), Ms(e, n);
    }
    function Yf(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var r = e.stateNode,
                    o = e.memoizedState;
                o !== null && (n = o.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default:
                throw Error(c(314));
        }
        r !== null && r.delete(t), Ms(e, n);
    }
    var Fs;
    Fs = function (e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || Xe.current) Ge = !0;
            else {
                if (!(e.lanes & n) && !(t.flags & 128)) return (Ge = !1), Mf(e, t, n);
                Ge = !!(e.flags & 131072);
            }
        else (Ge = !1), _e && t.flags & 1048576 && ya(t, lo, t.index);
        switch (((t.lanes = 0), t.tag)) {
            case 2:
                var r = t.type;
                ko(e, t), (e = t.pendingProps);
                var o = Nn(t, $e.current);
                On(t, n), (o = ti(null, t, r, e, o, n));
                var l = ni();
                return (
                    (t.flags |= 1),
                    typeof o == "object" &&
                    o !== null &&
                    typeof o.render == "function" &&
                    o.$$typeof === void 0
                        ? ((t.tag = 1),
                          (t.memoizedState = null),
                          (t.updateQueue = null),
                          Ye(r) ? ((l = !0), no(t)) : (l = !1),
                          (t.memoizedState =
                              o.state !== null && o.state !== void 0 ? o.state : null),
                          Yl(t),
                          (o.updater = _o),
                          (t.stateNode = o),
                          (o._reactInternals = t),
                          ai(t, r, e, n),
                          (t = di(null, t, r, !0, l, n)))
                        : ((t.tag = 0),
                          _e && l && Ul(t),
                          We(null, t, o, n),
                          (t = t.child)),
                    t
                );
            case 16:
                r = t.elementType;
                e: {
                    switch (
                        (ko(e, t),
                        (e = t.pendingProps),
                        (o = r._init),
                        (r = o(r._payload)),
                        (t.type = r),
                        (o = t.tag = Zf(r)),
                        (e = yt(r, e)),
                        o)
                    ) {
                        case 0:
                            t = fi(null, t, r, e, n);
                            break e;
                        case 1:
                            t = as(null, t, r, e, n);
                            break e;
                        case 11:
                            t = rs(null, t, r, e, n);
                            break e;
                        case 14:
                            t = os(null, t, r, yt(r.type, e), n);
                            break e;
                    }
                    throw Error(c(306, r, ""));
                }
                return t;
            case 0:
                return (
                    (r = t.type),
                    (o = t.pendingProps),
                    (o = t.elementType === r ? o : yt(r, o)),
                    fi(e, t, r, o, n)
                );
            case 1:
                return (
                    (r = t.type),
                    (o = t.pendingProps),
                    (o = t.elementType === r ? o : yt(r, o)),
                    as(e, t, r, o, n)
                );
            case 3:
                e: {
                    if ((ss(t), e === null)) throw Error(c(387));
                    (r = t.pendingProps),
                        (l = t.memoizedState),
                        (o = l.element),
                        Ea(e, t),
                        fo(t, r, null, n);
                    var i = t.memoizedState;
                    if (((r = i.element), l.isDehydrated))
                        if (
                            ((l = {
                                element: r,
                                isDehydrated: !1,
                                cache: i.cache,
                                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                                transitions: i.transitions,
                            }),
                            (t.updateQueue.baseState = l),
                            (t.memoizedState = l),
                            t.flags & 256)
                        ) {
                            (o = Mn(Error(c(423)), t)), (t = cs(e, t, r, n, o));
                            break e;
                        } else if (r !== o) {
                            (o = Mn(Error(c(424)), t)), (t = cs(e, t, r, n, o));
                            break e;
                        } else
                            for (
                                ot = $t(t.stateNode.containerInfo.firstChild),
                                    rt = t,
                                    _e = !0,
                                    mt = null,
                                    n = Sa(t, null, r, n),
                                    t.child = n;
                                n;

                            )
                                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                    else {
                        if ((Ln(), r === o)) {
                            t = Lt(e, t, n);
                            break e;
                        }
                        We(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return (
                    Na(t),
                    e === null && Bl(t),
                    (r = t.type),
                    (o = t.pendingProps),
                    (l = e !== null ? e.memoizedProps : null),
                    (i = o.children),
                    Il(r, o) ? (i = null) : l !== null && Il(r, l) && (t.flags |= 32),
                    us(e, t),
                    We(e, t, i, n),
                    t.child
                );
            case 6:
                return e === null && Bl(t), null;
            case 13:
                return fs(e, t, n);
            case 4:
                return (
                    Gl(t, t.stateNode.containerInfo),
                    (r = t.pendingProps),
                    e === null ? (t.child = Rn(t, null, r, n)) : We(e, t, r, n),
                    t.child
                );
            case 11:
                return (
                    (r = t.type),
                    (o = t.pendingProps),
                    (o = t.elementType === r ? o : yt(r, o)),
                    rs(e, t, r, o, n)
                );
            case 7:
                return We(e, t, t.pendingProps, n), t.child;
            case 8:
                return We(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return We(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (
                        ((r = t.type._context),
                        (o = t.pendingProps),
                        (l = t.memoizedProps),
                        (i = o.value),
                        me(ao, r._currentValue),
                        (r._currentValue = i),
                        l !== null)
                    )
                        if (pt(l.value, i)) {
                            if (l.children === o.children && !Xe.current) {
                                t = Lt(e, t, n);
                                break e;
                            }
                        } else
                            for (
                                l = t.child, l !== null && (l.return = t);
                                l !== null;

                            ) {
                                var a = l.dependencies;
                                if (a !== null) {
                                    i = l.child;
                                    for (var s = a.firstContext; s !== null; ) {
                                        if (s.context === r) {
                                            if (l.tag === 1) {
                                                (s = zt(-1, n & -n)), (s.tag = 2);
                                                var v = l.updateQueue;
                                                if (v !== null) {
                                                    v = v.shared;
                                                    var _ = v.pending;
                                                    _ === null
                                                        ? (s.next = s)
                                                        : ((s.next = _.next),
                                                          (_.next = s)),
                                                        (v.pending = s);
                                                }
                                            }
                                            (l.lanes |= n),
                                                (s = l.alternate),
                                                s !== null && (s.lanes |= n),
                                                Kl(l.return, n, t),
                                                (a.lanes |= n);
                                            break;
                                        }
                                        s = s.next;
                                    }
                                } else if (l.tag === 10)
                                    i = l.type === t.type ? null : l.child;
                                else if (l.tag === 18) {
                                    if (((i = l.return), i === null)) throw Error(c(341));
                                    (i.lanes |= n),
                                        (a = i.alternate),
                                        a !== null && (a.lanes |= n),
                                        Kl(i, n, t),
                                        (i = l.sibling);
                                } else i = l.child;
                                if (i !== null) i.return = l;
                                else
                                    for (i = l; i !== null; ) {
                                        if (i === t) {
                                            i = null;
                                            break;
                                        }
                                        if (((l = i.sibling), l !== null)) {
                                            (l.return = i.return), (i = l);
                                            break;
                                        }
                                        i = i.return;
                                    }
                                l = i;
                            }
                    We(e, t, o.children, n), (t = t.child);
                }
                return t;
            case 9:
                return (
                    (o = t.type),
                    (r = t.pendingProps.children),
                    On(t, n),
                    (o = at(o)),
                    (r = r(o)),
                    (t.flags |= 1),
                    We(e, t, r, n),
                    t.child
                );
            case 14:
                return (
                    (r = t.type),
                    (o = yt(r, t.pendingProps)),
                    (o = yt(r.type, o)),
                    os(e, t, r, o, n)
                );
            case 15:
                return ls(e, t, t.type, t.pendingProps, n);
            case 17:
                return (
                    (r = t.type),
                    (o = t.pendingProps),
                    (o = t.elementType === r ? o : yt(r, o)),
                    ko(e, t),
                    (t.tag = 1),
                    Ye(r) ? ((e = !0), no(t)) : (e = !1),
                    On(t, n),
                    Za(t, r, o),
                    ai(t, r, o, n),
                    di(null, t, r, !0, e, n)
                );
            case 19:
                return ps(e, t, n);
            case 22:
                return is(e, t, n);
        }
        throw Error(c(156, t.tag));
    };
    function js(e, t) {
        return vu(e, t);
    }
    function Gf(e, t, n, r) {
        (this.tag = e),
            (this.key = n),
            (this.sibling =
                this.child =
                this.return =
                this.stateNode =
                this.type =
                this.elementType =
                    null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
                this.memoizedState =
                this.updateQueue =
                this.memoizedProps =
                    null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
    }
    function ft(e, t, n, r) {
        return new Gf(e, t, n, r);
    }
    function Ii(e) {
        return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function Zf(e) {
        if (typeof e == "function") return Ii(e) ? 1 : 0;
        if (e != null) {
            if (((e = e.$$typeof), e === Re)) return 11;
            if (e === et) return 14;
        }
        return 2;
    }
    function Jt(e, t) {
        var n = e.alternate;
        return (
            n === null
                ? ((n = ft(e.tag, t, e.key, e.mode)),
                  (n.elementType = e.elementType),
                  (n.type = e.type),
                  (n.stateNode = e.stateNode),
                  (n.alternate = e),
                  (e.alternate = n))
                : ((n.pendingProps = t),
                  (n.type = e.type),
                  (n.flags = 0),
                  (n.subtreeFlags = 0),
                  (n.deletions = null)),
            (n.flags = e.flags & 14680064),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
                t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
        );
    }
    function Io(e, t, n, r, o, l) {
        var i = 2;
        if (((r = e), typeof e == "function")) Ii(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else
            e: switch (e) {
                case X:
                    return pn(n.children, o, l, t);
                case J:
                    (i = 8), (o |= 8);
                    break;
                case Ce:
                    return (
                        (e = ft(12, n, t, o | 2)), (e.elementType = Ce), (e.lanes = l), e
                    );
                case Ie:
                    return (e = ft(13, n, t, o)), (e.elementType = Ie), (e.lanes = l), e;
                case be:
                    return (e = ft(19, n, t, o)), (e.elementType = be), (e.lanes = l), e;
                case de:
                    return Oo(n, o, l, t);
                default:
                    if (typeof e == "object" && e !== null)
                        switch (e.$$typeof) {
                            case Le:
                                i = 10;
                                break e;
                            case Fe:
                                i = 9;
                                break e;
                            case Re:
                                i = 11;
                                break e;
                            case et:
                                i = 14;
                                break e;
                            case je:
                                (i = 16), (r = null);
                                break e;
                        }
                    throw Error(c(130, e == null ? e : typeof e, ""));
            }
        return (t = ft(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t;
    }
    function pn(e, t, n, r) {
        return (e = ft(7, e, r, t)), (e.lanes = n), e;
    }
    function Oo(e, t, n, r) {
        return (
            (e = ft(22, e, r, t)),
            (e.elementType = de),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
        );
    }
    function Oi(e, t, n) {
        return (e = ft(6, e, null, t)), (e.lanes = n), e;
    }
    function Di(e, t, n) {
        return (
            (t = ft(4, e.children !== null ? e.children : [], e.key, t)),
            (t.lanes = n),
            (t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation,
            }),
            t
        );
    }
    function Jf(e, t, n, r, o) {
        (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
                this.pingCache =
                this.current =
                this.pendingChildren =
                    null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = ul(0)),
            (this.expirationTimes = ul(-1)),
            (this.entangledLanes =
                this.finishedLanes =
                this.mutableReadLanes =
                this.expiredLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = ul(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
    }
    function Mi(e, t, n, r, o, l, i, a, s) {
        return (
            (e = new Jf(e, t, n, a, s)),
            t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
            (l = ft(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
                element: r,
                isDehydrated: n,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null,
            }),
            Yl(l),
            e
        );
    }
    function qf(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: ae,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
        };
    }
    function Us(e) {
        if (!e) return Vt;
        e = e._reactInternals;
        e: {
            if (en(e) !== e || e.tag !== 1) throw Error(c(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (Ye(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e;
                        }
                }
                t = t.return;
            } while (t !== null);
            throw Error(c(171));
        }
        if (e.tag === 1) {
            var n = e.type;
            if (Ye(n)) return da(e, n, t);
        }
        return t;
    }
    function As(e, t, n, r, o, l, i, a, s) {
        return (
            (e = Mi(n, r, !0, e, o, l, i, a, s)),
            (e.context = Us(null)),
            (n = e.current),
            (r = Qe()),
            (o = Gt(n)),
            (l = zt(r, o)),
            (l.callback = t ?? null),
            Qt(n, l, o),
            (e.current.lanes = o),
            Xn(e, o, r),
            Je(e, r),
            e
        );
    }
    function Do(e, t, n, r) {
        var o = t.current,
            l = Qe(),
            i = Gt(o);
        return (
            (n = Us(n)),
            t.context === null ? (t.context = n) : (t.pendingContext = n),
            (t = zt(l, i)),
            (t.payload = { element: e }),
            (r = r === void 0 ? null : r),
            r !== null && (t.callback = r),
            (e = Qt(o, t, i)),
            e !== null && (gt(e, o, i, l), co(e, o, i)),
            i
        );
    }
    function Mo(e) {
        if (((e = e.current), !e.child)) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function $s(e, t) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function Fi(e, t) {
        $s(e, t), (e = e.alternate) && $s(e, t);
    }
    var Bs =
        typeof reportError == "function"
            ? reportError
            : function (e) {
                  console.error(e);
              };
    function ji(e) {
        this._internalRoot = e;
    }
    (Fo.prototype.render = ji.prototype.render =
        function (e) {
            var t = this._internalRoot;
            if (t === null) throw Error(c(409));
            Do(e, t, null, null);
        }),
        (Fo.prototype.unmount = ji.prototype.unmount =
            function () {
                var e = this._internalRoot;
                if (e !== null) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    cn(function () {
                        Do(null, e, null, null);
                    }),
                        (t[Et] = null);
                }
            });
    function Fo(e) {
        this._internalRoot = e;
    }
    Fo.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = Eu();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
            jt.splice(n, 0, e), n === 0 && Nu(e);
        }
    };
    function Ui(e) {
        return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
    }
    function jo(e) {
        return !(
            !e ||
            (e.nodeType !== 1 &&
                e.nodeType !== 9 &&
                e.nodeType !== 11 &&
                (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
        );
    }
    function Vs() {}
    function bf(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function () {
                    var v = Mo(i);
                    l.call(v);
                };
            }
            var i = As(t, r, e, 0, null, !1, !1, "", Vs);
            return (
                (e._reactRootContainer = i),
                (e[Et] = i.current),
                ur(e.nodeType === 8 ? e.parentNode : e),
                cn(),
                i
            );
        }
        for (; (o = e.lastChild); ) e.removeChild(o);
        if (typeof r == "function") {
            var a = r;
            r = function () {
                var v = Mo(s);
                a.call(v);
            };
        }
        var s = Mi(e, 0, !1, null, null, !1, !1, "", Vs);
        return (
            (e._reactRootContainer = s),
            (e[Et] = s.current),
            ur(e.nodeType === 8 ? e.parentNode : e),
            cn(function () {
                Do(t, s, n, r);
            }),
            s
        );
    }
    function Uo(e, t, n, r, o) {
        var l = n._reactRootContainer;
        if (l) {
            var i = l;
            if (typeof o == "function") {
                var a = o;
                o = function () {
                    var s = Mo(i);
                    a.call(s);
                };
            }
            Do(t, i, e, o);
        } else i = bf(n, t, e, o, r);
        return Mo(i);
    }
    (Su = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Kn(t.pendingLanes);
                    n !== 0 &&
                        (al(t, n | 1),
                        Je(t, Ee()),
                        !(te & 6) && ((Un = Ee() + 500), Ht()));
                }
                break;
            case 13:
                cn(function () {
                    var r = Pt(e, 1);
                    if (r !== null) {
                        var o = Qe();
                        gt(r, e, 1, o);
                    }
                }),
                    Fi(e, 1);
        }
    }),
        (sl = function (e) {
            if (e.tag === 13) {
                var t = Pt(e, 134217728);
                if (t !== null) {
                    var n = Qe();
                    gt(t, e, 134217728, n);
                }
                Fi(e, 134217728);
            }
        }),
        (xu = function (e) {
            if (e.tag === 13) {
                var t = Gt(e),
                    n = Pt(e, t);
                if (n !== null) {
                    var r = Qe();
                    gt(n, e, t, r);
                }
                Fi(e, t);
            }
        }),
        (Eu = function () {
            return fe;
        }),
        (Tu = function (e, t) {
            var n = fe;
            try {
                return (fe = e), t();
            } finally {
                fe = n;
            }
        }),
        (tl = function (e, t, n) {
            switch (t) {
                case "input":
                    if ((Xo(e, n), (t = n.name), n.type === "radio" && t != null)) {
                        for (n = e; n.parentNode; ) n = n.parentNode;
                        for (
                            n = n.querySelectorAll(
                                "input[name=" +
                                    JSON.stringify("" + t) +
                                    '][type="radio"]',
                            ),
                                t = 0;
                            t < n.length;
                            t++
                        ) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var o = eo(r);
                                if (!o) throw Error(c(90));
                                Gi(r), Xo(r, o);
                            }
                        }
                    }
                    break;
                case "textarea":
                    eu(e, n);
                    break;
                case "select":
                    (t = n.value), t != null && yn(e, !!n.multiple, t, !1);
            }
        }),
        (su = zi),
        (cu = cn);
    var ed = { usingClientEntryPoint: !1, Events: [cr, Tn, eo, uu, au, zi] },
        Er = {
            findFiberByHostInstance: tn,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
        },
        td = {
            bundleType: Er.bundleType,
            version: Er.version,
            rendererPackageName: Er.rendererPackageName,
            rendererConfig: Er.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: B.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
                return (e = mu(e)), e === null ? null : e.stateNode;
            },
            findFiberByHostInstance: Er.findFiberByHostInstance,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Ao = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ao.isDisabled && Ao.supportsFiber)
            try {
                (Mr = Ao.inject(td)), (_t = Ao);
            } catch {}
    }
    return (
        (qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ed),
        (qe.createPortal = function (e, t) {
            var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!Ui(t)) throw Error(c(200));
            return qf(e, t, null, n);
        }),
        (qe.createRoot = function (e, t) {
            if (!Ui(e)) throw Error(c(299));
            var n = !1,
                r = "",
                o = Bs;
            return (
                t != null &&
                    (t.unstable_strictMode === !0 && (n = !0),
                    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
                    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
                (t = Mi(e, 1, !1, null, null, n, !1, r, o)),
                (e[Et] = t.current),
                ur(e.nodeType === 8 ? e.parentNode : e),
                new ji(t)
            );
        }),
        (qe.findDOMNode = function (e) {
            if (e == null) return null;
            if (e.nodeType === 1) return e;
            var t = e._reactInternals;
            if (t === void 0)
                throw typeof e.render == "function"
                    ? Error(c(188))
                    : ((e = Object.keys(e).join(",")), Error(c(268, e)));
            return (e = mu(t)), (e = e === null ? null : e.stateNode), e;
        }),
        (qe.flushSync = function (e) {
            return cn(e);
        }),
        (qe.hydrate = function (e, t, n) {
            if (!jo(t)) throw Error(c(200));
            return Uo(null, e, t, !0, n);
        }),
        (qe.hydrateRoot = function (e, t, n) {
            if (!Ui(e)) throw Error(c(405));
            var r = (n != null && n.hydratedSources) || null,
                o = !1,
                l = "",
                i = Bs;
            if (
                (n != null &&
                    (n.unstable_strictMode === !0 && (o = !0),
                    n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
                    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
                (t = As(t, null, e, 1, n ?? null, o, !1, l, i)),
                (e[Et] = t.current),
                ur(e),
                r)
            )
                for (e = 0; e < r.length; e++)
                    (n = r[e]),
                        (o = n._getVersion),
                        (o = o(n._source)),
                        t.mutableSourceEagerHydrationData == null
                            ? (t.mutableSourceEagerHydrationData = [n, o])
                            : t.mutableSourceEagerHydrationData.push(n, o);
            return new Fo(t);
        }),
        (qe.render = function (e, t, n) {
            if (!jo(t)) throw Error(c(200));
            return Uo(null, e, t, !1, n);
        }),
        (qe.unmountComponentAtNode = function (e) {
            if (!jo(e)) throw Error(c(40));
            return e._reactRootContainer
                ? (cn(function () {
                      Uo(null, null, e, !1, function () {
                          (e._reactRootContainer = null), (e[Et] = null);
                      });
                  }),
                  !0)
                : !1;
        }),
        (qe.unstable_batchedUpdates = zi),
        (qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!jo(n)) throw Error(c(200));
            if (e == null || e._reactInternals === void 0) throw Error(c(38));
            return Uo(e, t, n, !1, r);
        }),
        (qe.version = "18.3.1-next-f1338f8080-20240426"),
        qe
    );
}
var Zs;
function cd() {
    if (Zs) return Bi.exports;
    Zs = 1;
    function u() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (m) {
                console.error(m);
            }
    }
    return u(), (Bi.exports = sd()), Bi.exports;
}
var Js;
function fd() {
    if (Js) return $o;
    Js = 1;
    var u = cd();
    return ($o.createRoot = u.createRoot), ($o.hydrateRoot = u.hydrateRoot), $o;
}
var dd = fd();
const Bo = async (u, m) => {
    try {
        const c = await fetch(`http://localhost:4000${u}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: m ? JSON.stringify({ ...m }) : null,
        });
        if (!c.ok) throw new Error(`HTTP error! Status: ${c.status}`);
        return await c.json();
    } catch (c) {
        throw c instanceof Error ? c : new Error("Unexpected error");
    }
};
function ec(u) {
    var m,
        c,
        x = "";
    if (typeof u == "string" || typeof u == "number") x += u;
    else if (typeof u == "object")
        if (Array.isArray(u)) {
            var S = u.length;
            for (m = 0; m < S; m++) u[m] && (c = ec(u[m])) && (x && (x += " "), (x += c));
        } else for (c in u) u[c] && (x && (x += " "), (x += c));
    return x;
}
function bt() {
    for (var u, m, c = 0, x = "", S = arguments.length; c < S; c++)
        (u = arguments[c]) && (m = ec(u)) && (x && (x += " "), (x += m));
    return x;
}
function pd(u) {
    if (typeof document > "u") return;
    let m = document.head || document.getElementsByTagName("head")[0],
        c = document.createElement("style");
    (c.type = "text/css"),
        m.firstChild ? m.insertBefore(c, m.firstChild) : m.appendChild(c),
        c.styleSheet
            ? (c.styleSheet.cssText = u)
            : c.appendChild(document.createTextNode(u));
}
pd(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var Nr = (u) => typeof u == "number" && !isNaN(u),
    mn = (u) => typeof u == "string",
    Ot = (u) => typeof u == "function",
    md = (u) => mn(u) || Nr(u),
    Wi = (u) => (mn(u) || Ot(u) ? u : null),
    yd = (u, m) => (u === !1 || (Nr(u) && u > 0) ? u : m),
    Qi = (u) => se.isValidElement(u) || mn(u) || Ot(u) || Nr(u);
function vd(u, m, c = 300) {
    let { scrollHeight: x, style: S } = u;
    requestAnimationFrame(() => {
        (S.minHeight = "initial"),
            (S.height = x + "px"),
            (S.transition = `all ${c}ms`),
            requestAnimationFrame(() => {
                (S.height = "0"), (S.padding = "0"), (S.margin = "0"), setTimeout(m, c);
            });
    });
}
function hd({
    enter: u,
    exit: m,
    appendPosition: c = !1,
    collapse: x = !0,
    collapseDuration: S = 300,
}) {
    return function ({
        children: C,
        position: E,
        preventExitTransition: U,
        done: P,
        nodeRef: H,
        isIn: W,
        playToast: K,
    }) {
        let Y = c ? `${u}--${E}` : u,
            re = c ? `${m}--${E}` : m,
            G = se.useRef(0);
        return (
            se.useLayoutEffect(() => {
                let O = H.current,
                    L = Y.split(" "),
                    Z = (F) => {
                        F.target === H.current &&
                            (K(),
                            O.removeEventListener("animationend", Z),
                            O.removeEventListener("animationcancel", Z),
                            G.current === 0 &&
                                F.type !== "animationcancel" &&
                                O.classList.remove(...L));
                    };
                O.classList.add(...L),
                    O.addEventListener("animationend", Z),
                    O.addEventListener("animationcancel", Z);
            }, []),
            se.useEffect(() => {
                let O = H.current,
                    L = () => {
                        O.removeEventListener("animationend", L), x ? vd(O, P, S) : P();
                    };
                W ||
                    (U
                        ? L()
                        : ((G.current = 1),
                          (O.className += ` ${re}`),
                          O.addEventListener("animationend", L)));
            }, [W]),
            he.createElement(he.Fragment, null, C)
        );
    };
}
function qs(u, m) {
    return {
        content: tc(u.content, u.props),
        containerId: u.props.containerId,
        id: u.props.toastId,
        theme: u.props.theme,
        type: u.props.type,
        data: u.props.data || {},
        isLoading: u.props.isLoading,
        icon: u.props.icon,
        reason: u.removalReason,
        status: m,
    };
}
function tc(u, m, c = !1) {
    return se.isValidElement(u) && !mn(u.type)
        ? se.cloneElement(u, {
              closeToast: m.closeToast,
              toastProps: m,
              data: m.data,
              isPaused: c,
          })
        : Ot(u)
          ? u({ closeToast: m.closeToast, toastProps: m, data: m.data, isPaused: c })
          : u;
}
function gd({ closeToast: u, theme: m, ariaLabel: c = "close" }) {
    return he.createElement(
        "button",
        {
            className: `Toastify__close-button Toastify__close-button--${m}`,
            type: "button",
            onClick: (x) => {
                x.stopPropagation(), u(!0);
            },
            "aria-label": c,
        },
        he.createElement(
            "svg",
            { "aria-hidden": "true", viewBox: "0 0 14 16" },
            he.createElement("path", {
                fillRule: "evenodd",
                d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
            }),
        ),
    );
}
function _d({
    delay: u,
    isRunning: m,
    closeToast: c,
    type: x = "default",
    hide: S,
    className: C,
    controlledProgress: E,
    progress: U,
    rtl: P,
    isIn: H,
    theme: W,
}) {
    let K = S || (E && U === 0),
        Y = { animationDuration: `${u}ms`, animationPlayState: m ? "running" : "paused" };
    E && (Y.transform = `scaleX(${U})`);
    let re = bt(
            "Toastify__progress-bar",
            E ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated",
            `Toastify__progress-bar-theme--${W}`,
            `Toastify__progress-bar--${x}`,
            { "Toastify__progress-bar--rtl": P },
        ),
        G = Ot(C) ? C({ rtl: P, type: x, defaultClassName: re }) : bt(re, C),
        O = {
            [E && U >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
                E && U < 1
                    ? null
                    : () => {
                          H && c();
                      },
        };
    return he.createElement(
        "div",
        { className: "Toastify__progress-bar--wrp", "data-hidden": K },
        he.createElement("div", {
            className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${W} Toastify__progress-bar--${x}`,
        }),
        he.createElement("div", {
            role: "progressbar",
            "aria-hidden": K ? "true" : "false",
            "aria-label": "notification timer",
            className: G,
            style: Y,
            ...O,
        }),
    );
}
var wd = 1,
    nc = () => `${wd++}`;
function kd(u, m, c) {
    let x = 1,
        S = 0,
        C = [],
        E = [],
        U = m,
        P = new Map(),
        H = new Set(),
        W = (F) => (H.add(F), () => H.delete(F)),
        K = () => {
            (E = Array.from(P.values())), H.forEach((F) => F());
        },
        Y = ({ containerId: F, toastId: j, updateId: B }) => {
            let ue = F ? F !== u : u !== 1,
                ae = P.has(j) && B == null;
            return ue || ae;
        },
        re = (F, j) => {
            P.forEach((B) => {
                var ue;
                (j == null || j === B.props.toastId) &&
                    ((ue = B.toggle) == null || ue.call(B, F));
            });
        },
        G = (F) => {
            var j, B;
            (B = (j = F.props) == null ? void 0 : j.onClose) == null ||
                B.call(j, F.removalReason),
                (F.isActive = !1);
        },
        O = (F) => {
            if (F == null) P.forEach(G);
            else {
                let j = P.get(F);
                j && G(j);
            }
            K();
        },
        L = () => {
            (S -= C.length), (C = []);
        },
        Z = (F) => {
            var j, B;
            let { toastId: ue, updateId: ae } = F.props,
                X = ae == null;
            F.staleId && P.delete(F.staleId),
                (F.isActive = !0),
                P.set(ue, F),
                K(),
                c(qs(F, X ? "added" : "updated")),
                X && ((B = (j = F.props).onOpen) == null || B.call(j));
        };
    return {
        id: u,
        props: U,
        observe: W,
        toggle: re,
        removeToast: O,
        toasts: P,
        clearQueue: L,
        buildToast: (F, j) => {
            if (Y(j)) return;
            let { toastId: B, updateId: ue, data: ae, staleId: X, delay: J } = j,
                Ce = ue == null;
            Ce && S++;
            let Le = {
                ...U,
                style: U.toastStyle,
                key: x++,
                ...Object.fromEntries(Object.entries(j).filter(([Re, Ie]) => Ie != null)),
                toastId: B,
                updateId: ue,
                data: ae,
                isIn: !1,
                className: Wi(j.className || U.toastClassName),
                progressClassName: Wi(j.progressClassName || U.progressClassName),
                autoClose: j.isLoading ? !1 : yd(j.autoClose, U.autoClose),
                closeToast(Re) {
                    (P.get(B).removalReason = Re), O(B);
                },
                deleteToast() {
                    let Re = P.get(B);
                    if (Re != null) {
                        if (
                            (c(qs(Re, "removed")),
                            P.delete(B),
                            S--,
                            S < 0 && (S = 0),
                            C.length > 0)
                        ) {
                            Z(C.shift());
                            return;
                        }
                        K();
                    }
                },
            };
            (Le.closeButton = U.closeButton),
                j.closeButton === !1 || Qi(j.closeButton)
                    ? (Le.closeButton = j.closeButton)
                    : j.closeButton === !0 &&
                      (Le.closeButton = Qi(U.closeButton) ? U.closeButton : !0);
            let Fe = { content: F, props: Le, staleId: X };
            U.limit && U.limit > 0 && S > U.limit && Ce
                ? C.push(Fe)
                : Nr(J)
                  ? setTimeout(() => {
                        Z(Fe);
                    }, J)
                  : Z(Fe);
        },
        setProps(F) {
            U = F;
        },
        setToggle: (F, j) => {
            let B = P.get(F);
            B && (B.toggle = j);
        },
        isToastActive: (F) => {
            var j;
            return (j = P.get(F)) == null ? void 0 : j.isActive;
        },
        getSnapshot: () => E,
    };
}
var Ke = new Map(),
    Cr = [],
    Ki = new Set(),
    Sd = (u) => Ki.forEach((m) => m(u)),
    rc = () => Ke.size > 0;
function xd() {
    Cr.forEach((u) => lc(u.content, u.options)), (Cr = []);
}
var Ed = (u, { containerId: m }) => {
    var c;
    return (c = Ke.get(m || 1)) == null ? void 0 : c.toasts.get(u);
};
function oc(u, m) {
    var c;
    if (m) return !!((c = Ke.get(m)) != null && c.isToastActive(u));
    let x = !1;
    return (
        Ke.forEach((S) => {
            S.isToastActive(u) && (x = !0);
        }),
        x
    );
}
function Td(u) {
    if (!rc()) {
        Cr = Cr.filter((m) => u != null && m.options.toastId !== u);
        return;
    }
    if (u == null || md(u))
        Ke.forEach((m) => {
            m.removeToast(u);
        });
    else if (u && ("containerId" in u || "id" in u)) {
        let m = Ke.get(u.containerId);
        m
            ? m.removeToast(u.id)
            : Ke.forEach((c) => {
                  c.removeToast(u.id);
              });
    }
}
var Cd = (u = {}) => {
    Ke.forEach((m) => {
        m.props.limit && (!u.containerId || m.id === u.containerId) && m.clearQueue();
    });
};
function lc(u, m) {
    Qi(u) &&
        (rc() || Cr.push({ content: u, options: m }),
        Ke.forEach((c) => {
            c.buildToast(u, m);
        }));
}
function Nd(u) {
    var m;
    (m = Ke.get(u.containerId || 1)) == null || m.setToggle(u.id, u.fn);
}
function ic(u, m) {
    Ke.forEach((c) => {
        (m == null ||
            !(m != null && m.containerId) ||
            (m == null ? void 0 : m.containerId) === c.id) &&
            c.toggle(u, m == null ? void 0 : m.id);
    });
}
function Pd(u) {
    let m = u.containerId || 1;
    return {
        subscribe(c) {
            let x = kd(m, u, Sd);
            Ke.set(m, x);
            let S = x.observe(c);
            return (
                xd(),
                () => {
                    S(), Ke.delete(m);
                }
            );
        },
        setProps(c) {
            var x;
            (x = Ke.get(m)) == null || x.setProps(c);
        },
        getSnapshot() {
            var c;
            return (c = Ke.get(m)) == null ? void 0 : c.getSnapshot();
        },
    };
}
function zd(u) {
    return (
        Ki.add(u),
        () => {
            Ki.delete(u);
        }
    );
}
function Ld(u) {
    return u && (mn(u.toastId) || Nr(u.toastId)) ? u.toastId : nc();
}
function Pr(u, m) {
    return lc(u, m), m.toastId;
}
function Ho(u, m) {
    return { ...m, type: (m && m.type) || u, toastId: Ld(m) };
}
function Wo(u) {
    return (m, c) => Pr(m, Ho(u, c));
}
function ne(u, m) {
    return Pr(u, Ho("default", m));
}
ne.loading = (u, m) =>
    Pr(
        u,
        Ho("default", {
            isLoading: !0,
            autoClose: !1,
            closeOnClick: !1,
            closeButton: !1,
            draggable: !1,
            ...m,
        }),
    );
function Rd(u, { pending: m, error: c, success: x }, S) {
    let C;
    m && (C = mn(m) ? ne.loading(m, S) : ne.loading(m.render, { ...S, ...m }));
    let E = {
            isLoading: null,
            autoClose: null,
            closeOnClick: null,
            closeButton: null,
            draggable: null,
        },
        U = (H, W, K) => {
            if (W == null) {
                ne.dismiss(C);
                return;
            }
            let Y = { type: H, ...E, ...S, data: K },
                re = mn(W) ? { render: W } : W;
            return C ? ne.update(C, { ...Y, ...re }) : ne(re.render, { ...Y, ...re }), K;
        },
        P = Ot(u) ? u() : u;
    return P.then((H) => U("success", x, H)).catch((H) => U("error", c, H)), P;
}
ne.promise = Rd;
ne.success = Wo("success");
ne.info = Wo("info");
ne.error = Wo("error");
ne.warning = Wo("warning");
ne.warn = ne.warning;
ne.dark = (u, m) => Pr(u, Ho("default", { theme: "dark", ...m }));
function Id(u) {
    Td(u);
}
ne.dismiss = Id;
ne.clearWaitingQueue = Cd;
ne.isActive = oc;
ne.update = (u, m = {}) => {
    let c = Ed(u, m);
    if (c) {
        let { props: x, content: S } = c,
            C = { delay: 100, ...x, ...m, toastId: m.toastId || u, updateId: nc() };
        C.toastId !== u && (C.staleId = u);
        let E = C.render || S;
        delete C.render, Pr(E, C);
    }
};
ne.done = (u) => {
    ne.update(u, { progress: 1 });
};
ne.onChange = zd;
ne.play = (u) => ic(!0, u);
ne.pause = (u) => ic(!1, u);
function Od(u) {
    var m;
    let { subscribe: c, getSnapshot: x, setProps: S } = se.useRef(Pd(u)).current;
    S(u);
    let C = (m = se.useSyncExternalStore(c, x, x)) == null ? void 0 : m.slice();
    function E(U) {
        if (!C) return [];
        let P = new Map();
        return (
            u.newestOnTop && C.reverse(),
            C.forEach((H) => {
                let { position: W } = H.props;
                P.has(W) || P.set(W, []), P.get(W).push(H);
            }),
            Array.from(P, (H) => U(H[0], H[1]))
        );
    }
    return {
        getToastToRender: E,
        isToastActive: oc,
        count: C == null ? void 0 : C.length,
    };
}
function Dd(u) {
    let [m, c] = se.useState(!1),
        [x, S] = se.useState(!1),
        C = se.useRef(null),
        E = se.useRef({
            start: 0,
            delta: 0,
            removalDistance: 0,
            canCloseOnClick: !0,
            canDrag: !1,
            didMove: !1,
        }).current,
        { autoClose: U, pauseOnHover: P, closeToast: H, onClick: W, closeOnClick: K } = u;
    Nd({ id: u.toastId, containerId: u.containerId, fn: c }),
        se.useEffect(() => {
            if (u.pauseOnFocusLoss)
                return (
                    Y(),
                    () => {
                        re();
                    }
                );
        }, [u.pauseOnFocusLoss]);
    function Y() {
        document.hasFocus() || Z(),
            window.addEventListener("focus", L),
            window.addEventListener("blur", Z);
    }
    function re() {
        window.removeEventListener("focus", L), window.removeEventListener("blur", Z);
    }
    function G(X) {
        if (u.draggable === !0 || u.draggable === X.pointerType) {
            F();
            let J = C.current;
            (E.canCloseOnClick = !0),
                (E.canDrag = !0),
                (J.style.transition = "none"),
                u.draggableDirection === "x"
                    ? ((E.start = X.clientX),
                      (E.removalDistance = J.offsetWidth * (u.draggablePercent / 100)))
                    : ((E.start = X.clientY),
                      (E.removalDistance =
                          (J.offsetHeight *
                              (u.draggablePercent === 80
                                  ? u.draggablePercent * 1.5
                                  : u.draggablePercent)) /
                          100));
        }
    }
    function O(X) {
        let {
            top: J,
            bottom: Ce,
            left: Le,
            right: Fe,
        } = C.current.getBoundingClientRect();
        X.nativeEvent.type !== "touchend" &&
        u.pauseOnHover &&
        X.clientX >= Le &&
        X.clientX <= Fe &&
        X.clientY >= J &&
        X.clientY <= Ce
            ? Z()
            : L();
    }
    function L() {
        c(!0);
    }
    function Z() {
        c(!1);
    }
    function F() {
        (E.didMove = !1),
            document.addEventListener("pointermove", B),
            document.addEventListener("pointerup", ue);
    }
    function j() {
        document.removeEventListener("pointermove", B),
            document.removeEventListener("pointerup", ue);
    }
    function B(X) {
        let J = C.current;
        if (E.canDrag && J) {
            (E.didMove = !0),
                m && Z(),
                u.draggableDirection === "x"
                    ? (E.delta = X.clientX - E.start)
                    : (E.delta = X.clientY - E.start),
                E.start !== X.clientX && (E.canCloseOnClick = !1);
            let Ce =
                u.draggableDirection === "x"
                    ? `${E.delta}px, var(--y)`
                    : `0, calc(${E.delta}px + var(--y))`;
            (J.style.transform = `translate3d(${Ce},0)`),
                (J.style.opacity = `${1 - Math.abs(E.delta / E.removalDistance)}`);
        }
    }
    function ue() {
        j();
        let X = C.current;
        if (E.canDrag && E.didMove && X) {
            if (((E.canDrag = !1), Math.abs(E.delta) > E.removalDistance)) {
                S(!0), u.closeToast(!0), u.collapseAll();
                return;
            }
            (X.style.transition = "transform 0.2s, opacity 0.2s"),
                X.style.removeProperty("transform"),
                X.style.removeProperty("opacity");
        }
    }
    let ae = { onPointerDown: G, onPointerUp: O };
    return (
        U && P && ((ae.onMouseEnter = Z), u.stacked || (ae.onMouseLeave = L)),
        K &&
            (ae.onClick = (X) => {
                W && W(X), E.canCloseOnClick && H(!0);
            }),
        {
            playToast: L,
            pauseToast: Z,
            isRunning: m,
            preventExitTransition: x,
            toastRef: C,
            eventHandlers: ae,
        }
    );
}
var Md = typeof window < "u" ? se.useLayoutEffect : se.useEffect,
    Qo = ({ theme: u, type: m, isLoading: c, ...x }) =>
        he.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "100%",
            height: "100%",
            fill: u === "colored" ? "currentColor" : `var(--toastify-icon-color-${m})`,
            ...x,
        });
function Fd(u) {
    return he.createElement(
        Qo,
        { ...u },
        he.createElement("path", {
            d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        }),
    );
}
function jd(u) {
    return he.createElement(
        Qo,
        { ...u },
        he.createElement("path", {
            d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        }),
    );
}
function Ud(u) {
    return he.createElement(
        Qo,
        { ...u },
        he.createElement("path", {
            d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        }),
    );
}
function Ad(u) {
    return he.createElement(
        Qo,
        { ...u },
        he.createElement("path", {
            d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        }),
    );
}
function $d() {
    return he.createElement("div", { className: "Toastify__spinner" });
}
var Xi = { info: jd, warning: Fd, success: Ud, error: Ad, spinner: $d },
    Bd = (u) => u in Xi;
function Vd({ theme: u, type: m, isLoading: c, icon: x }) {
    let S = null,
        C = { theme: u, type: m };
    return (
        x === !1 ||
            (Ot(x)
                ? (S = x({ ...C, isLoading: c }))
                : se.isValidElement(x)
                  ? (S = se.cloneElement(x, C))
                  : c
                    ? (S = Xi.spinner())
                    : Bd(m) && (S = Xi[m](C))),
        S
    );
}
var Hd = (u) => {
        let {
                isRunning: m,
                preventExitTransition: c,
                toastRef: x,
                eventHandlers: S,
                playToast: C,
            } = Dd(u),
            {
                closeButton: E,
                children: U,
                autoClose: P,
                onClick: H,
                type: W,
                hideProgressBar: K,
                closeToast: Y,
                transition: re,
                position: G,
                className: O,
                style: L,
                progressClassName: Z,
                updateId: F,
                role: j,
                progress: B,
                rtl: ue,
                toastId: ae,
                deleteToast: X,
                isIn: J,
                isLoading: Ce,
                closeOnClick: Le,
                theme: Fe,
                ariaLabel: Re,
            } = u,
            Ie = bt(
                "Toastify__toast",
                `Toastify__toast-theme--${Fe}`,
                `Toastify__toast--${W}`,
                { "Toastify__toast--rtl": ue },
                { "Toastify__toast--close-on-click": Le },
            ),
            be = Ot(O)
                ? O({ rtl: ue, position: G, type: W, defaultClassName: Ie })
                : bt(Ie, O),
            et = Vd(u),
            je = !!B || !P,
            de = { closeToast: Y, type: W, theme: Fe },
            T = null;
        return (
            E === !1 ||
                (Ot(E)
                    ? (T = E(de))
                    : se.isValidElement(E)
                      ? (T = se.cloneElement(E, de))
                      : (T = gd(de))),
            he.createElement(
                re,
                {
                    isIn: J,
                    done: X,
                    position: G,
                    preventExitTransition: c,
                    nodeRef: x,
                    playToast: C,
                },
                he.createElement(
                    "div",
                    {
                        id: ae,
                        tabIndex: 0,
                        onClick: H,
                        "data-in": J,
                        className: be,
                        ...S,
                        style: L,
                        ref: x,
                        ...(J && { role: j, "aria-label": Re }),
                    },
                    et != null &&
                        he.createElement(
                            "div",
                            {
                                className: bt("Toastify__toast-icon", {
                                    "Toastify--animate-icon Toastify__zoom-enter": !Ce,
                                }),
                            },
                            et,
                        ),
                    tc(U, u, !m),
                    T,
                    !u.customProgressBar &&
                        he.createElement(_d, {
                            ...(F && !je ? { key: `p-${F}` } : {}),
                            rtl: ue,
                            theme: Fe,
                            delay: P,
                            isRunning: m,
                            isIn: J,
                            closeToast: Y,
                            hide: K,
                            type: W,
                            className: Z,
                            controlledProgress: je,
                            progress: B || 0,
                        }),
                ),
            )
        );
    },
    Wd = (u, m = !1) => ({
        enter: `Toastify--animate Toastify__${u}-enter`,
        exit: `Toastify--animate Toastify__${u}-exit`,
        appendPosition: m,
    }),
    Qd = hd(Wd("bounce", !0)),
    Kd = {
        position: "top-right",
        transition: Qd,
        autoClose: 5e3,
        closeButton: !0,
        pauseOnHover: !0,
        pauseOnFocusLoss: !0,
        draggable: "touch",
        draggablePercent: 80,
        draggableDirection: "x",
        role: "alert",
        theme: "light",
        "aria-label": "Notifications Alt+T",
        hotKeys: (u) => u.altKey && u.code === "KeyT",
    };
function Xd(u) {
    let m = { ...Kd, ...u },
        c = u.stacked,
        [x, S] = se.useState(!0),
        C = se.useRef(null),
        { getToastToRender: E, isToastActive: U, count: P } = Od(m),
        { className: H, style: W, rtl: K, containerId: Y, hotKeys: re } = m;
    function G(L) {
        let Z = bt("Toastify__toast-container", `Toastify__toast-container--${L}`, {
            "Toastify__toast-container--rtl": K,
        });
        return Ot(H) ? H({ position: L, rtl: K, defaultClassName: Z }) : bt(Z, Wi(H));
    }
    function O() {
        c && (S(!0), ne.play());
    }
    return (
        Md(() => {
            var L;
            if (c) {
                let Z = C.current.querySelectorAll('[data-in="true"]'),
                    F = 12,
                    j = (L = m.position) == null ? void 0 : L.includes("top"),
                    B = 0,
                    ue = 0;
                Array.from(Z)
                    .reverse()
                    .forEach((ae, X) => {
                        let J = ae;
                        J.classList.add("Toastify__toast--stacked"),
                            X > 0 && (J.dataset.collapsed = `${x}`),
                            J.dataset.pos || (J.dataset.pos = j ? "top" : "bot");
                        let Ce = B * (x ? 0.2 : 1) + (x ? 0 : F * X);
                        J.style.setProperty("--y", `${j ? Ce : Ce * -1}px`),
                            J.style.setProperty("--g", `${F}`),
                            J.style.setProperty("--s", `${1 - (x ? ue : 0)}`),
                            (B += J.offsetHeight),
                            (ue += 0.025);
                    });
            }
        }, [x, P, c]),
        se.useEffect(() => {
            function L(Z) {
                var F;
                let j = C.current;
                re(Z) &&
                    ((F = j.querySelector('[tabIndex="0"]')) == null || F.focus(),
                    S(!1),
                    ne.pause()),
                    Z.key === "Escape" &&
                        (document.activeElement === j ||
                            (j != null && j.contains(document.activeElement))) &&
                        (S(!0), ne.play());
            }
            return (
                document.addEventListener("keydown", L),
                () => {
                    document.removeEventListener("keydown", L);
                }
            );
        }, [re]),
        he.createElement(
            "section",
            {
                ref: C,
                className: "Toastify",
                id: Y,
                onMouseEnter: () => {
                    c && (S(!1), ne.pause());
                },
                onMouseLeave: O,
                "aria-live": "polite",
                "aria-atomic": "false",
                "aria-relevant": "additions text",
                "aria-label": m["aria-label"],
            },
            E((L, Z) => {
                let F = Z.length ? { ...W } : { ...W, pointerEvents: "none" };
                return he.createElement(
                    "div",
                    {
                        tabIndex: -1,
                        className: G(L),
                        "data-stacked": c,
                        style: F,
                        key: `c-${L}`,
                    },
                    Z.map(({ content: j, props: B }) =>
                        he.createElement(
                            Hd,
                            {
                                ...B,
                                stacked: c,
                                collapseAll: O,
                                isIn: U(B.toastId, B.containerId),
                                key: `t-${B.key}`,
                            },
                            j,
                        ),
                    ),
                );
            }),
        )
    );
}
const bs = (u) => {
        const { host: m, port: c, user: x, database: S } = u;
        if (
            !/^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/.test(
                m,
            )
        )
            return ne.error("Введіть коректну IP-адресу."), !1;
        const E = parseInt(String(c), 10);
        return isNaN(E) || E < 1 || E > 65535
            ? (ne.error("Введіть коректний порт (1-65535)."), !1)
            : x.trim()
              ? String(S).trim()
                  ? !0
                  : (ne.error("Введіть назву бази даних."), !1)
              : (ne.error("Введіть ім'я користувача."), !1);
    },
    Yd = "_wrapper_vphsc_1",
    Gd = "_form_vphsc_9",
    It = {
        wrapper: Yd,
        form: Gd,
        "form-input": "_form-input_vphsc_21",
        "form-input-ip": "_form-input-ip_vphsc_23",
        "form-input-port": "_form-input-port_vphsc_25",
        "form-button-wrapper": "_form-button-wrapper_vphsc_53",
        "form-address-wrapper": "_form-address-wrapper_vphsc_63",
    },
    Zd = { "form-button": "_form-button_nx6dv_1" },
    Vo = (u) =>
        Se.jsx("button", {
            onClick: u.handler,
            type: u.type,
            className: bt(Zd["form-button"], u.className),
            children: u.children,
        }),
    Jd = () => {
        const [u, m] = se.useState(""),
            [c, x] = se.useState(""),
            [S, C] = se.useState(""),
            [E, U] = se.useState(""),
            [P, H] = se.useState(""),
            W = (G, O, L) => {
                setTimeout(() => {
                    ne.update(G, { type: O, render: L, isLoading: !1, autoClose: 3e3 });
                }, 200);
            },
            K = (G) => {
                const O = ne.loading("Зачекайте, обробляємо запит...");
                Bo(G, { host: u, port: c, user: S, password: E, database: P })
                    .then((L) => {
                        console.log(L),
                            L.success
                                ? W(O, "success", L.message)
                                : W(O, "error", L.message);
                    })
                    .catch((L) => {
                        W(O, "error", L.message);
                    });
            },
            Y = () => {
                bs({ host: u, port: Number(c), user: S, database: P }) &&
                    K("/check_db_connection");
            },
            re = () => {
                bs({ host: u, port: Number(c), user: S, database: P }) &&
                    K("/save_db_connection");
            };
        return (
            se.useEffect(() => {
                Bo("/get_db_connection_data").then((G) => {
                    const O = G.data;
                    m(O.host),
                        x(String(O.port)),
                        C(O.user),
                        U(O.password || ""),
                        H(O.database || "");
                });
            }, []),
            Se.jsxs("div", {
                className: It.wrapper,
                children: [
                    Se.jsx(Xd, {
                        autoClose: 5e3,
                        hideProgressBar: !1,
                        newestOnTop: !0,
                        pauseOnHover: !0,
                    }),
                    Se.jsxs("form", {
                        className: It.form,
                        children: [
                            Se.jsxs("div", {
                                className: It["form-address-wrapper"],
                                children: [
                                    Se.jsx("input", {
                                        type: "text",
                                        placeholder: "IP-адреса",
                                        value: u,
                                        onChange: (G) => m(G.target.value),
                                        className: It["form-input-ip"],
                                    }),
                                    Se.jsx("input", {
                                        type: "text",
                                        placeholder: "Порт",
                                        value: c,
                                        onChange: (G) => x(G.target.value),
                                        className: It["form-input-port"],
                                    }),
                                ],
                            }),
                            Se.jsx("input", {
                                type: "text",
                                placeholder: "Ім'я користувача",
                                value: S,
                                onChange: (G) => C(G.target.value),
                                className: It["form-input"],
                            }),
                            Se.jsx("input", {
                                type: "password",
                                placeholder: "Пароль",
                                value: E,
                                onChange: (G) => U(G.target.value),
                                className: It["form-input"],
                            }),
                            Se.jsx("input", {
                                type: "text",
                                placeholder: "Назва бази даних",
                                value: P,
                                onChange: (G) => H(G.target.value),
                                className: It["form-input"],
                            }),
                            Se.jsxs("div", {
                                className: It["form-button-wrapper"],
                                children: [
                                    Se.jsx(Vo, {
                                        handler: Y,
                                        type: "button",
                                        children: "Перевірити з'єднання",
                                    }),
                                    Se.jsx(Vo, {
                                        handler: re,
                                        type: "button",
                                        children: "Зберегти налаштування",
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    qd = "_wrapper_deny1_1",
    bd = { wrapper: qd },
    ep = "_wrapper_1o3os_1",
    tp = { wrapper: ep },
    np = () => {
        const u = () => {
                Bo("/transcribation_start").then((c) => {
                    console.log(c);
                });
            },
            m = () => {
                Bo("/transcribation_stop").then((c) => {
                    console.log(c);
                });
            };
        return Se.jsxs("div", {
            className: tp.wrapper,
            children: [
                Se.jsx(Vo, { handler: u, type: "button", children: "Старт" }),
                Se.jsx(Vo, { handler: m, type: "button", children: "Стоп" }),
            ],
        });
    },
    rp = () =>
        Se.jsxs("div", {
            className: bd.wrapper,
            children: [
                Se.jsx("h3", { children: "Налаштування підключення до бази даних" }),
                Se.jsx(Jd, {}),
                Se.jsx("hr", {}),
                Se.jsx(np, {}),
            ],
        });
dd.createRoot(document.getElementById("root")).render(
    Se.jsx(se.StrictMode, { children: Se.jsx(rp, {}) }),
);