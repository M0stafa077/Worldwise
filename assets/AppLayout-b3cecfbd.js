import {
    r as S,
    R as si,
    a as cs,
    c as fs,
    g as ds,
    u as _s,
    b as ms,
    j as k,
    B as ps,
    d as hi,
    N as zn,
    L as gs,
    O as vs,
    e as On,
} from "./index.js";
import { L as ys } from "./Logo-8eff5a47.js";
function Zn(d, c) {
    const a = S.useRef(c);
    S.useEffect(
        function () {
            c !== a.current &&
                d.attributionControl != null &&
                (a.current != null &&
                    d.attributionControl.removeAttribution(a.current),
                c != null && d.attributionControl.addAttribution(c)),
                (a.current = c);
        },
        [d, c]
    );
}
const ws = 1;
function xs(d) {
    return Object.freeze({ __version: ws, map: d });
}
function Ps(d, c) {
    return Object.freeze({ ...d, ...c });
}
const An = S.createContext(null),
    In = An.Provider;
function ui() {
    const d = S.useContext(An);
    if (d == null)
        throw new Error(
            "No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>"
        );
    return d;
}
function Ls(d) {
    function c(a, f) {
        const { instance: _, context: z } = d(a).current;
        return (
            S.useImperativeHandle(f, () => _),
            a.children == null
                ? null
                : si.createElement(In, { value: z }, a.children)
        );
    }
    return S.forwardRef(c);
}
function bs(d) {
    function c(a, f) {
        const [_, z] = S.useState(!1),
            { instance: g } = d(a, z).current;
        S.useImperativeHandle(f, () => g),
            S.useEffect(
                function () {
                    _ && g.update();
                },
                [g, _, a.children]
            );
        const W = g._contentNode;
        return W ? cs.createPortal(a.children, W) : null;
    }
    return S.forwardRef(c);
}
function Ts(d) {
    function c(a, f) {
        const { instance: _ } = d(a).current;
        return S.useImperativeHandle(f, () => _), null;
    }
    return S.forwardRef(c);
}
function Bn(d, c) {
    const a = S.useRef();
    S.useEffect(
        function () {
            return (
                c != null && d.instance.on(c),
                (a.current = c),
                function () {
                    a.current != null && d.instance.off(a.current),
                        (a.current = null);
                }
            );
        },
        [d, c]
    );
}
function li(d, c) {
    const a = d.pane ?? c.pane;
    return a ? { ...d, pane: a } : d;
}
function Cs(d, c) {
    return function (f, _) {
        const z = ui(),
            g = d(li(f, z), z);
        return (
            Zn(z.map, f.attribution),
            Bn(g.current, f.eventHandlers),
            c(g.current, z, f, _),
            g
        );
    };
}
var ri = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */ (function (d, c) {
    (function (a, f) {
        f(c);
    })(fs, function (a) {
        var f = "1.9.4";
        function _(t) {
            var e, i, n, o;
            for (i = 1, n = arguments.length; i < n; i++) {
                o = arguments[i];
                for (e in o) t[e] = o[e];
            }
            return t;
        }
        var z =
            Object.create ||
            (function () {
                function t() {}
                return function (e) {
                    return (t.prototype = e), new t();
                };
            })();
        function g(t, e) {
            var i = Array.prototype.slice;
            if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
            var n = i.call(arguments, 2);
            return function () {
                return t.apply(
                    e,
                    n.length ? n.concat(i.call(arguments)) : arguments
                );
            };
        }
        var W = 0;
        function v(t) {
            return "_leaflet_id" in t || (t._leaflet_id = ++W), t._leaflet_id;
        }
        function G(t, e, i) {
            var n, o, s, r;
            return (
                (r = function () {
                    (n = !1), o && (s.apply(i, o), (o = !1));
                }),
                (s = function () {
                    n
                        ? (o = arguments)
                        : (t.apply(i, arguments), setTimeout(r, e), (n = !0));
                }),
                s
            );
        }
        function at(t, e, i) {
            var n = e[1],
                o = e[0],
                s = n - o;
            return t === n && i ? t : ((((t - o) % s) + s) % s) + o;
        }
        function I() {
            return !1;
        }
        function $(t, e) {
            if (e === !1) return t;
            var i = Math.pow(10, e === void 0 ? 6 : e);
            return Math.round(t * i) / i;
        }
        function V(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
        }
        function ft(t) {
            return V(t).split(/\s+/);
        }
        function Z(t, e) {
            Object.prototype.hasOwnProperty.call(t, "options") ||
                (t.options = t.options ? z(t.options) : {});
            for (var i in e) t.options[i] = e[i];
            return t.options;
        }
        function $t(t, e, i) {
            var n = [];
            for (var o in t)
                n.push(
                    encodeURIComponent(i ? o.toUpperCase() : o) +
                        "=" +
                        encodeURIComponent(t[o])
                );
            return (!e || e.indexOf("?") === -1 ? "?" : "&") + n.join("&");
        }
        var te = /\{ *([\w_ -]+) *\}/g;
        function Pt(t, e) {
            return t.replace(te, function (i, n) {
                var o = e[n];
                if (o === void 0)
                    throw new Error("No value provided for variable " + i);
                return typeof o == "function" && (o = o(e)), o;
            });
        }
        var ot =
            Array.isArray ||
            function (t) {
                return Object.prototype.toString.call(t) === "[object Array]";
            };
        function xe(t, e) {
            for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
            return -1;
        }
        var ee = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        function Pe(t) {
            return (
                window["webkit" + t] || window["moz" + t] || window["ms" + t]
            );
        }
        var _i = 0;
        function mi(t) {
            var e = +new Date(),
                i = Math.max(0, 16 - (e - _i));
            return (_i = e + i), window.setTimeout(t, i);
        }
        var Le =
                window.requestAnimationFrame ||
                Pe("RequestAnimationFrame") ||
                mi,
            pi =
                window.cancelAnimationFrame ||
                Pe("CancelAnimationFrame") ||
                Pe("CancelRequestAnimationFrame") ||
                function (t) {
                    window.clearTimeout(t);
                };
        function K(t, e, i) {
            if (i && Le === mi) t.call(e);
            else return Le.call(window, g(t, e));
        }
        function tt(t) {
            t && pi.call(window, t);
        }
        var Rn = {
            __proto__: null,
            extend: _,
            create: z,
            bind: g,
            get lastId() {
                return W;
            },
            stamp: v,
            throttle: G,
            wrapNum: at,
            falseFn: I,
            formatNum: $,
            trim: V,
            splitWords: ft,
            setOptions: Z,
            getParamString: $t,
            template: Pt,
            isArray: ot,
            indexOf: xe,
            emptyImageUrl: ee,
            requestFn: Le,
            cancelFn: pi,
            requestAnimFrame: K,
            cancelAnimFrame: tt,
        };
        function dt() {}
        (dt.extend = function (t) {
            var e = function () {
                    Z(this),
                        this.initialize &&
                            this.initialize.apply(this, arguments),
                        this.callInitHooks();
                },
                i = (e.__super__ = this.prototype),
                n = z(i);
            (n.constructor = e), (e.prototype = n);
            for (var o in this)
                Object.prototype.hasOwnProperty.call(this, o) &&
                    o !== "prototype" &&
                    o !== "__super__" &&
                    (e[o] = this[o]);
            return (
                t.statics && _(e, t.statics),
                t.includes &&
                    (Dn(t.includes), _.apply(null, [n].concat(t.includes))),
                _(n, t),
                delete n.statics,
                delete n.includes,
                n.options &&
                    ((n.options = i.options ? z(i.options) : {}),
                    _(n.options, t.options)),
                (n._initHooks = []),
                (n.callInitHooks = function () {
                    if (!this._initHooksCalled) {
                        i.callInitHooks && i.callInitHooks.call(this),
                            (this._initHooksCalled = !0);
                        for (var s = 0, r = n._initHooks.length; s < r; s++)
                            n._initHooks[s].call(this);
                    }
                }),
                e
            );
        }),
            (dt.include = function (t) {
                var e = this.prototype.options;
                return (
                    _(this.prototype, t),
                    t.options &&
                        ((this.prototype.options = e),
                        this.mergeOptions(t.options)),
                    this
                );
            }),
            (dt.mergeOptions = function (t) {
                return _(this.prototype.options, t), this;
            }),
            (dt.addInitHook = function (t) {
                var e = Array.prototype.slice.call(arguments, 1),
                    i =
                        typeof t == "function"
                            ? t
                            : function () {
                                  this[t].apply(this, e);
                              };
                return (
                    (this.prototype._initHooks =
                        this.prototype._initHooks || []),
                    this.prototype._initHooks.push(i),
                    this
                );
            });
        function Dn(t) {
            if (!(typeof L > "u" || !L || !L.Mixin)) {
                t = ot(t) ? t : [t];
                for (var e = 0; e < t.length; e++)
                    t[e] === L.Mixin.Events &&
                        console.warn(
                            "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
                            new Error().stack
                        );
            }
        }
        var Q = {
            on: function (t, e, i) {
                if (typeof t == "object") for (var n in t) this._on(n, t[n], e);
                else {
                    t = ft(t);
                    for (var o = 0, s = t.length; o < s; o++)
                        this._on(t[o], e, i);
                }
                return this;
            },
            off: function (t, e, i) {
                if (!arguments.length) delete this._events;
                else if (typeof t == "object")
                    for (var n in t) this._off(n, t[n], e);
                else {
                    t = ft(t);
                    for (
                        var o = arguments.length === 1, s = 0, r = t.length;
                        s < r;
                        s++
                    )
                        o ? this._off(t[s]) : this._off(t[s], e, i);
                }
                return this;
            },
            _on: function (t, e, i, n) {
                if (typeof e != "function") {
                    console.warn("wrong listener type: " + typeof e);
                    return;
                }
                if (this._listens(t, e, i) === !1) {
                    i === this && (i = void 0);
                    var o = { fn: e, ctx: i };
                    n && (o.once = !0),
                        (this._events = this._events || {}),
                        (this._events[t] = this._events[t] || []),
                        this._events[t].push(o);
                }
            },
            _off: function (t, e, i) {
                var n, o, s;
                if (this._events && ((n = this._events[t]), !!n)) {
                    if (arguments.length === 1) {
                        if (this._firingCount)
                            for (o = 0, s = n.length; o < s; o++) n[o].fn = I;
                        delete this._events[t];
                        return;
                    }
                    if (typeof e != "function") {
                        console.warn("wrong listener type: " + typeof e);
                        return;
                    }
                    var r = this._listens(t, e, i);
                    if (r !== !1) {
                        var h = n[r];
                        this._firingCount &&
                            ((h.fn = I), (this._events[t] = n = n.slice())),
                            n.splice(r, 1);
                    }
                }
            },
            fire: function (t, e, i) {
                if (!this.listens(t, i)) return this;
                var n = _({}, e, {
                    type: t,
                    target: this,
                    sourceTarget: (e && e.sourceTarget) || this,
                });
                if (this._events) {
                    var o = this._events[t];
                    if (o) {
                        this._firingCount = this._firingCount + 1 || 1;
                        for (var s = 0, r = o.length; s < r; s++) {
                            var h = o[s],
                                u = h.fn;
                            h.once && this.off(t, u, h.ctx),
                                u.call(h.ctx || this, n);
                        }
                        this._firingCount--;
                    }
                }
                return i && this._propagateEvent(n), this;
            },
            listens: function (t, e, i, n) {
                typeof t != "string" &&
                    console.warn('"string" type argument expected');
                var o = e;
                typeof e != "function" &&
                    ((n = !!e), (o = void 0), (i = void 0));
                var s = this._events && this._events[t];
                if (s && s.length && this._listens(t, o, i) !== !1) return !0;
                if (n) {
                    for (var r in this._eventParents)
                        if (this._eventParents[r].listens(t, e, i, n))
                            return !0;
                }
                return !1;
            },
            _listens: function (t, e, i) {
                if (!this._events) return !1;
                var n = this._events[t] || [];
                if (!e) return !!n.length;
                i === this && (i = void 0);
                for (var o = 0, s = n.length; o < s; o++)
                    if (n[o].fn === e && n[o].ctx === i) return o;
                return !1;
            },
            once: function (t, e, i) {
                if (typeof t == "object")
                    for (var n in t) this._on(n, t[n], e, !0);
                else {
                    t = ft(t);
                    for (var o = 0, s = t.length; o < s; o++)
                        this._on(t[o], e, i, !0);
                }
                return this;
            },
            addEventParent: function (t) {
                return (
                    (this._eventParents = this._eventParents || {}),
                    (this._eventParents[v(t)] = t),
                    this
                );
            },
            removeEventParent: function (t) {
                return (
                    this._eventParents && delete this._eventParents[v(t)], this
                );
            },
            _propagateEvent: function (t) {
                for (var e in this._eventParents)
                    this._eventParents[e].fire(
                        t.type,
                        _({ layer: t.target, propagatedFrom: t.target }, t),
                        !0
                    );
            },
        };
        (Q.addEventListener = Q.on),
            (Q.removeEventListener = Q.clearAllEventListeners = Q.off),
            (Q.addOneTimeEventListener = Q.once),
            (Q.fireEvent = Q.fire),
            (Q.hasEventListeners = Q.listens);
        var Nt = dt.extend(Q);
        function x(t, e, i) {
            (this.x = i ? Math.round(t) : t), (this.y = i ? Math.round(e) : e);
        }
        var gi =
            Math.trunc ||
            function (t) {
                return t > 0 ? Math.floor(t) : Math.ceil(t);
            };
        x.prototype = {
            clone: function () {
                return new x(this.x, this.y);
            },
            add: function (t) {
                return this.clone()._add(w(t));
            },
            _add: function (t) {
                return (this.x += t.x), (this.y += t.y), this;
            },
            subtract: function (t) {
                return this.clone()._subtract(w(t));
            },
            _subtract: function (t) {
                return (this.x -= t.x), (this.y -= t.y), this;
            },
            divideBy: function (t) {
                return this.clone()._divideBy(t);
            },
            _divideBy: function (t) {
                return (this.x /= t), (this.y /= t), this;
            },
            multiplyBy: function (t) {
                return this.clone()._multiplyBy(t);
            },
            _multiplyBy: function (t) {
                return (this.x *= t), (this.y *= t), this;
            },
            scaleBy: function (t) {
                return new x(this.x * t.x, this.y * t.y);
            },
            unscaleBy: function (t) {
                return new x(this.x / t.x, this.y / t.y);
            },
            round: function () {
                return this.clone()._round();
            },
            _round: function () {
                return (
                    (this.x = Math.round(this.x)),
                    (this.y = Math.round(this.y)),
                    this
                );
            },
            floor: function () {
                return this.clone()._floor();
            },
            _floor: function () {
                return (
                    (this.x = Math.floor(this.x)),
                    (this.y = Math.floor(this.y)),
                    this
                );
            },
            ceil: function () {
                return this.clone()._ceil();
            },
            _ceil: function () {
                return (
                    (this.x = Math.ceil(this.x)),
                    (this.y = Math.ceil(this.y)),
                    this
                );
            },
            trunc: function () {
                return this.clone()._trunc();
            },
            _trunc: function () {
                return (this.x = gi(this.x)), (this.y = gi(this.y)), this;
            },
            distanceTo: function (t) {
                t = w(t);
                var e = t.x - this.x,
                    i = t.y - this.y;
                return Math.sqrt(e * e + i * i);
            },
            equals: function (t) {
                return (t = w(t)), t.x === this.x && t.y === this.y;
            },
            contains: function (t) {
                return (
                    (t = w(t)),
                    Math.abs(t.x) <= Math.abs(this.x) &&
                        Math.abs(t.y) <= Math.abs(this.y)
                );
            },
            toString: function () {
                return "Point(" + $(this.x) + ", " + $(this.y) + ")";
            },
        };
        function w(t, e, i) {
            return t instanceof x
                ? t
                : ot(t)
                ? new x(t[0], t[1])
                : t == null
                ? t
                : typeof t == "object" && "x" in t && "y" in t
                ? new x(t.x, t.y)
                : new x(t, e, i);
        }
        function B(t, e) {
            if (t)
                for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
                    this.extend(i[n]);
        }
        B.prototype = {
            extend: function (t) {
                var e, i;
                if (!t) return this;
                if (t instanceof x || typeof t[0] == "number" || "x" in t)
                    e = i = w(t);
                else if (((t = Y(t)), (e = t.min), (i = t.max), !e || !i))
                    return this;
                return (
                    !this.min && !this.max
                        ? ((this.min = e.clone()), (this.max = i.clone()))
                        : ((this.min.x = Math.min(e.x, this.min.x)),
                          (this.max.x = Math.max(i.x, this.max.x)),
                          (this.min.y = Math.min(e.y, this.min.y)),
                          (this.max.y = Math.max(i.y, this.max.y))),
                    this
                );
            },
            getCenter: function (t) {
                return w(
                    (this.min.x + this.max.x) / 2,
                    (this.min.y + this.max.y) / 2,
                    t
                );
            },
            getBottomLeft: function () {
                return w(this.min.x, this.max.y);
            },
            getTopRight: function () {
                return w(this.max.x, this.min.y);
            },
            getTopLeft: function () {
                return this.min;
            },
            getBottomRight: function () {
                return this.max;
            },
            getSize: function () {
                return this.max.subtract(this.min);
            },
            contains: function (t) {
                var e, i;
                return (
                    typeof t[0] == "number" || t instanceof x
                        ? (t = w(t))
                        : (t = Y(t)),
                    t instanceof B ? ((e = t.min), (i = t.max)) : (e = i = t),
                    e.x >= this.min.x &&
                        i.x <= this.max.x &&
                        e.y >= this.min.y &&
                        i.y <= this.max.y
                );
            },
            intersects: function (t) {
                t = Y(t);
                var e = this.min,
                    i = this.max,
                    n = t.min,
                    o = t.max,
                    s = o.x >= e.x && n.x <= i.x,
                    r = o.y >= e.y && n.y <= i.y;
                return s && r;
            },
            overlaps: function (t) {
                t = Y(t);
                var e = this.min,
                    i = this.max,
                    n = t.min,
                    o = t.max,
                    s = o.x > e.x && n.x < i.x,
                    r = o.y > e.y && n.y < i.y;
                return s && r;
            },
            isValid: function () {
                return !!(this.min && this.max);
            },
            pad: function (t) {
                var e = this.min,
                    i = this.max,
                    n = Math.abs(e.x - i.x) * t,
                    o = Math.abs(e.y - i.y) * t;
                return Y(w(e.x - n, e.y - o), w(i.x + n, i.y + o));
            },
            equals: function (t) {
                return t
                    ? ((t = Y(t)),
                      this.min.equals(t.getTopLeft()) &&
                          this.max.equals(t.getBottomRight()))
                    : !1;
            },
        };
        function Y(t, e) {
            return !t || t instanceof B ? t : new B(t, e);
        }
        function X(t, e) {
            if (t)
                for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
                    this.extend(i[n]);
        }
        X.prototype = {
            extend: function (t) {
                var e = this._southWest,
                    i = this._northEast,
                    n,
                    o;
                if (t instanceof O) (n = t), (o = t);
                else if (t instanceof X) {
                    if (((n = t._southWest), (o = t._northEast), !n || !o))
                        return this;
                } else return t ? this.extend(C(t) || D(t)) : this;
                return (
                    !e && !i
                        ? ((this._southWest = new O(n.lat, n.lng)),
                          (this._northEast = new O(o.lat, o.lng)))
                        : ((e.lat = Math.min(n.lat, e.lat)),
                          (e.lng = Math.min(n.lng, e.lng)),
                          (i.lat = Math.max(o.lat, i.lat)),
                          (i.lng = Math.max(o.lng, i.lng))),
                    this
                );
            },
            pad: function (t) {
                var e = this._southWest,
                    i = this._northEast,
                    n = Math.abs(e.lat - i.lat) * t,
                    o = Math.abs(e.lng - i.lng) * t;
                return new X(
                    new O(e.lat - n, e.lng - o),
                    new O(i.lat + n, i.lng + o)
                );
            },
            getCenter: function () {
                return new O(
                    (this._southWest.lat + this._northEast.lat) / 2,
                    (this._southWest.lng + this._northEast.lng) / 2
                );
            },
            getSouthWest: function () {
                return this._southWest;
            },
            getNorthEast: function () {
                return this._northEast;
            },
            getNorthWest: function () {
                return new O(this.getNorth(), this.getWest());
            },
            getSouthEast: function () {
                return new O(this.getSouth(), this.getEast());
            },
            getWest: function () {
                return this._southWest.lng;
            },
            getSouth: function () {
                return this._southWest.lat;
            },
            getEast: function () {
                return this._northEast.lng;
            },
            getNorth: function () {
                return this._northEast.lat;
            },
            contains: function (t) {
                typeof t[0] == "number" || t instanceof O || "lat" in t
                    ? (t = C(t))
                    : (t = D(t));
                var e = this._southWest,
                    i = this._northEast,
                    n,
                    o;
                return (
                    t instanceof X
                        ? ((n = t.getSouthWest()), (o = t.getNorthEast()))
                        : (n = o = t),
                    n.lat >= e.lat &&
                        o.lat <= i.lat &&
                        n.lng >= e.lng &&
                        o.lng <= i.lng
                );
            },
            intersects: function (t) {
                t = D(t);
                var e = this._southWest,
                    i = this._northEast,
                    n = t.getSouthWest(),
                    o = t.getNorthEast(),
                    s = o.lat >= e.lat && n.lat <= i.lat,
                    r = o.lng >= e.lng && n.lng <= i.lng;
                return s && r;
            },
            overlaps: function (t) {
                t = D(t);
                var e = this._southWest,
                    i = this._northEast,
                    n = t.getSouthWest(),
                    o = t.getNorthEast(),
                    s = o.lat > e.lat && n.lat < i.lat,
                    r = o.lng > e.lng && n.lng < i.lng;
                return s && r;
            },
            toBBoxString: function () {
                return [
                    this.getWest(),
                    this.getSouth(),
                    this.getEast(),
                    this.getNorth(),
                ].join(",");
            },
            equals: function (t, e) {
                return t
                    ? ((t = D(t)),
                      this._southWest.equals(t.getSouthWest(), e) &&
                          this._northEast.equals(t.getNorthEast(), e))
                    : !1;
            },
            isValid: function () {
                return !!(this._southWest && this._northEast);
            },
        };
        function D(t, e) {
            return t instanceof X ? t : new X(t, e);
        }
        function O(t, e, i) {
            if (isNaN(t) || isNaN(e))
                throw new Error(
                    "Invalid LatLng object: (" + t + ", " + e + ")"
                );
            (this.lat = +t), (this.lng = +e), i !== void 0 && (this.alt = +i);
        }
        O.prototype = {
            equals: function (t, e) {
                if (!t) return !1;
                t = C(t);
                var i = Math.max(
                    Math.abs(this.lat - t.lat),
                    Math.abs(this.lng - t.lng)
                );
                return i <= (e === void 0 ? 1e-9 : e);
            },
            toString: function (t) {
                return "LatLng(" + $(this.lat, t) + ", " + $(this.lng, t) + ")";
            },
            distanceTo: function (t) {
                return yt.distance(this, C(t));
            },
            wrap: function () {
                return yt.wrapLatLng(this);
            },
            toBounds: function (t) {
                var e = (180 * t) / 40075017,
                    i = e / Math.cos((Math.PI / 180) * this.lat);
                return D(
                    [this.lat - e, this.lng - i],
                    [this.lat + e, this.lng + i]
                );
            },
            clone: function () {
                return new O(this.lat, this.lng, this.alt);
            },
        };
        function C(t, e, i) {
            return t instanceof O
                ? t
                : ot(t) && typeof t[0] != "object"
                ? t.length === 3
                    ? new O(t[0], t[1], t[2])
                    : t.length === 2
                    ? new O(t[0], t[1])
                    : null
                : t == null
                ? t
                : typeof t == "object" && "lat" in t
                ? new O(t.lat, "lng" in t ? t.lng : t.lon, t.alt)
                : e === void 0
                ? null
                : new O(t, e, i);
        }
        var _t = {
                latLngToPoint: function (t, e) {
                    var i = this.projection.project(t),
                        n = this.scale(e);
                    return this.transformation._transform(i, n);
                },
                pointToLatLng: function (t, e) {
                    var i = this.scale(e),
                        n = this.transformation.untransform(t, i);
                    return this.projection.unproject(n);
                },
                project: function (t) {
                    return this.projection.project(t);
                },
                unproject: function (t) {
                    return this.projection.unproject(t);
                },
                scale: function (t) {
                    return 256 * Math.pow(2, t);
                },
                zoom: function (t) {
                    return Math.log(t / 256) / Math.LN2;
                },
                getProjectedBounds: function (t) {
                    if (this.infinite) return null;
                    var e = this.projection.bounds,
                        i = this.scale(t),
                        n = this.transformation.transform(e.min, i),
                        o = this.transformation.transform(e.max, i);
                    return new B(n, o);
                },
                infinite: !1,
                wrapLatLng: function (t) {
                    var e = this.wrapLng ? at(t.lng, this.wrapLng, !0) : t.lng,
                        i = this.wrapLat ? at(t.lat, this.wrapLat, !0) : t.lat,
                        n = t.alt;
                    return new O(i, e, n);
                },
                wrapLatLngBounds: function (t) {
                    var e = t.getCenter(),
                        i = this.wrapLatLng(e),
                        n = e.lat - i.lat,
                        o = e.lng - i.lng;
                    if (n === 0 && o === 0) return t;
                    var s = t.getSouthWest(),
                        r = t.getNorthEast(),
                        h = new O(s.lat - n, s.lng - o),
                        u = new O(r.lat - n, r.lng - o);
                    return new X(h, u);
                },
            },
            yt = _({}, _t, {
                wrapLng: [-180, 180],
                R: 6371e3,
                distance: function (t, e) {
                    var i = Math.PI / 180,
                        n = t.lat * i,
                        o = e.lat * i,
                        s = Math.sin(((e.lat - t.lat) * i) / 2),
                        r = Math.sin(((e.lng - t.lng) * i) / 2),
                        h = s * s + Math.cos(n) * Math.cos(o) * r * r,
                        u = 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
                    return this.R * u;
                },
            }),
            vi = 6378137,
            be = {
                R: vi,
                MAX_LATITUDE: 85.0511287798,
                project: function (t) {
                    var e = Math.PI / 180,
                        i = this.MAX_LATITUDE,
                        n = Math.max(Math.min(i, t.lat), -i),
                        o = Math.sin(n * e);
                    return new x(
                        this.R * t.lng * e,
                        (this.R * Math.log((1 + o) / (1 - o))) / 2
                    );
                },
                unproject: function (t) {
                    var e = 180 / Math.PI;
                    return new O(
                        (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) *
                            e,
                        (t.x * e) / this.R
                    );
                },
                bounds: (function () {
                    var t = vi * Math.PI;
                    return new B([-t, -t], [t, t]);
                })(),
            };
        function Te(t, e, i, n) {
            if (ot(t)) {
                (this._a = t[0]),
                    (this._b = t[1]),
                    (this._c = t[2]),
                    (this._d = t[3]);
                return;
            }
            (this._a = t), (this._b = e), (this._c = i), (this._d = n);
        }
        Te.prototype = {
            transform: function (t, e) {
                return this._transform(t.clone(), e);
            },
            _transform: function (t, e) {
                return (
                    (e = e || 1),
                    (t.x = e * (this._a * t.x + this._b)),
                    (t.y = e * (this._c * t.y + this._d)),
                    t
                );
            },
            untransform: function (t, e) {
                return (
                    (e = e || 1),
                    new x(
                        (t.x / e - this._b) / this._a,
                        (t.y / e - this._d) / this._c
                    )
                );
            },
        };
        function Rt(t, e, i, n) {
            return new Te(t, e, i, n);
        }
        var Ce = _({}, yt, {
                code: "EPSG:3857",
                projection: be,
                transformation: (function () {
                    var t = 0.5 / (Math.PI * be.R);
                    return Rt(t, 0.5, -t, 0.5);
                })(),
            }),
            Hn = _({}, Ce, { code: "EPSG:900913" });
        function yi(t) {
            return document.createElementNS("http://www.w3.org/2000/svg", t);
        }
        function wi(t, e) {
            var i = "",
                n,
                o,
                s,
                r,
                h,
                u;
            for (n = 0, s = t.length; n < s; n++) {
                for (h = t[n], o = 0, r = h.length; o < r; o++)
                    (u = h[o]), (i += (o ? "L" : "M") + u.x + " " + u.y);
                i += e ? (p.svg ? "z" : "x") : "";
            }
            return i || "M0 0";
        }
        var Me = document.documentElement.style,
            ie = "ActiveXObject" in window,
            Fn = ie && !document.addEventListener,
            xi = "msLaunchUri" in navigator && !("documentMode" in document),
            Se = ht("webkit"),
            Pi = ht("android"),
            Li = ht("android 2") || ht("android 3"),
            Wn = parseInt(
                /WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],
                10
            ),
            Un = Pi && ht("Google") && Wn < 537 && !("AudioNode" in window),
            ze = !!window.opera,
            bi = !xi && ht("chrome"),
            Ti = ht("gecko") && !Se && !ze && !ie,
            jn = !bi && ht("safari"),
            Ci = ht("phantom"),
            Mi = "OTransition" in Me,
            Gn = navigator.platform.indexOf("Win") === 0,
            Si = ie && "transition" in Me,
            Ee =
                "WebKitCSSMatrix" in window &&
                "m11" in new window.WebKitCSSMatrix() &&
                !Li,
            zi = "MozPerspective" in Me,
            Vn = !window.L_DISABLE_3D && (Si || Ee || zi) && !Mi && !Ci,
            Dt = typeof orientation < "u" || ht("mobile"),
            qn = Dt && Se,
            Kn = Dt && Ee,
            Ei = !window.PointerEvent && window.MSPointerEvent,
            ki = !!(window.PointerEvent || Ei),
            Oi = "ontouchstart" in window || !!window.TouchEvent,
            Yn = !window.L_NO_TOUCH && (Oi || ki),
            Xn = Dt && ze,
            Jn = Dt && Ti,
            Qn =
                (window.devicePixelRatio ||
                    window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
            $n = (function () {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function () {
                            t = !0;
                        },
                    });
                    window.addEventListener("testPassiveEventSupport", I, e),
                        window.removeEventListener(
                            "testPassiveEventSupport",
                            I,
                            e
                        );
                } catch {}
                return t;
            })(),
            to = (function () {
                return !!document.createElement("canvas").getContext;
            })(),
            ke = !!(document.createElementNS && yi("svg").createSVGRect),
            eo =
                !!ke &&
                (function () {
                    var t = document.createElement("div");
                    return (
                        (t.innerHTML = "<svg/>"),
                        (t.firstChild && t.firstChild.namespaceURI) ===
                            "http://www.w3.org/2000/svg"
                    );
                })(),
            io =
                !ke &&
                (function () {
                    try {
                        var t = document.createElement("div");
                        t.innerHTML = '<v:shape adj="1"/>';
                        var e = t.firstChild;
                        return (
                            (e.style.behavior = "url(#default#VML)"),
                            e && typeof e.adj == "object"
                        );
                    } catch {
                        return !1;
                    }
                })(),
            no = navigator.platform.indexOf("Mac") === 0,
            oo = navigator.platform.indexOf("Linux") === 0;
        function ht(t) {
            return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
        }
        var p = {
                ie,
                ielt9: Fn,
                edge: xi,
                webkit: Se,
                android: Pi,
                android23: Li,
                androidStock: Un,
                opera: ze,
                chrome: bi,
                gecko: Ti,
                safari: jn,
                phantom: Ci,
                opera12: Mi,
                win: Gn,
                ie3d: Si,
                webkit3d: Ee,
                gecko3d: zi,
                any3d: Vn,
                mobile: Dt,
                mobileWebkit: qn,
                mobileWebkit3d: Kn,
                msPointer: Ei,
                pointer: ki,
                touch: Yn,
                touchNative: Oi,
                mobileOpera: Xn,
                mobileGecko: Jn,
                retina: Qn,
                passiveEvents: $n,
                canvas: to,
                svg: ke,
                vml: io,
                inlineSvg: eo,
                mac: no,
                linux: oo,
            },
            Zi = p.msPointer ? "MSPointerDown" : "pointerdown",
            Ai = p.msPointer ? "MSPointerMove" : "pointermove",
            Ii = p.msPointer ? "MSPointerUp" : "pointerup",
            Bi = p.msPointer ? "MSPointerCancel" : "pointercancel",
            Oe = {
                touchstart: Zi,
                touchmove: Ai,
                touchend: Ii,
                touchcancel: Bi,
            },
            Ni = {
                touchstart: lo,
                touchmove: ne,
                touchend: ne,
                touchcancel: ne,
            },
            St = {},
            Ri = !1;
        function so(t, e, i) {
            return (
                e === "touchstart" && uo(),
                Ni[e]
                    ? ((i = Ni[e].bind(this, i)),
                      t.addEventListener(Oe[e], i, !1),
                      i)
                    : (console.warn("wrong event specified:", e), I)
            );
        }
        function ro(t, e, i) {
            if (!Oe[e]) {
                console.warn("wrong event specified:", e);
                return;
            }
            t.removeEventListener(Oe[e], i, !1);
        }
        function ao(t) {
            St[t.pointerId] = t;
        }
        function ho(t) {
            St[t.pointerId] && (St[t.pointerId] = t);
        }
        function Di(t) {
            delete St[t.pointerId];
        }
        function uo() {
            Ri ||
                (document.addEventListener(Zi, ao, !0),
                document.addEventListener(Ai, ho, !0),
                document.addEventListener(Ii, Di, !0),
                document.addEventListener(Bi, Di, !0),
                (Ri = !0));
        }
        function ne(t, e) {
            if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
                e.touches = [];
                for (var i in St) e.touches.push(St[i]);
                (e.changedTouches = [e]), t(e);
            }
        }
        function lo(t, e) {
            e.MSPOINTER_TYPE_TOUCH &&
                e.pointerType === e.MSPOINTER_TYPE_TOUCH &&
                j(e),
                ne(t, e);
        }
        function co(t) {
            var e = {},
                i,
                n;
            for (n in t) (i = t[n]), (e[n] = i && i.bind ? i.bind(t) : i);
            return (
                (t = e),
                (e.type = "dblclick"),
                (e.detail = 2),
                (e.isTrusted = !1),
                (e._simulated = !0),
                e
            );
        }
        var fo = 200;
        function _o(t, e) {
            t.addEventListener("dblclick", e);
            var i = 0,
                n;
            function o(s) {
                if (s.detail !== 1) {
                    n = s.detail;
                    return;
                }
                if (
                    !(
                        s.pointerType === "mouse" ||
                        (s.sourceCapabilities &&
                            !s.sourceCapabilities.firesTouchEvents)
                    )
                ) {
                    var r = ji(s);
                    if (
                        !(
                            r.some(function (u) {
                                return (
                                    u instanceof HTMLLabelElement &&
                                    u.attributes.for
                                );
                            }) &&
                            !r.some(function (u) {
                                return (
                                    u instanceof HTMLInputElement ||
                                    u instanceof HTMLSelectElement
                                );
                            })
                        )
                    ) {
                        var h = Date.now();
                        h - i <= fo ? (n++, n === 2 && e(co(s))) : (n = 1),
                            (i = h);
                    }
                }
            }
            return (
                t.addEventListener("click", o), { dblclick: e, simDblclick: o }
            );
        }
        function mo(t, e) {
            t.removeEventListener("dblclick", e.dblclick),
                t.removeEventListener("click", e.simDblclick);
        }
        var Ze = re([
                "transform",
                "webkitTransform",
                "OTransform",
                "MozTransform",
                "msTransform",
            ]),
            Ht = re([
                "webkitTransition",
                "transition",
                "OTransition",
                "MozTransition",
                "msTransition",
            ]),
            Hi =
                Ht === "webkitTransition" || Ht === "OTransition"
                    ? Ht + "End"
                    : "transitionend";
        function Fi(t) {
            return typeof t == "string" ? document.getElementById(t) : t;
        }
        function Ft(t, e) {
            var i = t.style[e] || (t.currentStyle && t.currentStyle[e]);
            if ((!i || i === "auto") && document.defaultView) {
                var n = document.defaultView.getComputedStyle(t, null);
                i = n ? n[e] : null;
            }
            return i === "auto" ? null : i;
        }
        function E(t, e, i) {
            var n = document.createElement(t);
            return (n.className = e || ""), i && i.appendChild(n), n;
        }
        function N(t) {
            var e = t.parentNode;
            e && e.removeChild(t);
        }
        function oe(t) {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
        }
        function zt(t) {
            var e = t.parentNode;
            e && e.lastChild !== t && e.appendChild(t);
        }
        function Et(t) {
            var e = t.parentNode;
            e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
        }
        function Ae(t, e) {
            if (t.classList !== void 0) return t.classList.contains(e);
            var i = se(t);
            return (
                i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
            );
        }
        function b(t, e) {
            if (t.classList !== void 0)
                for (var i = ft(e), n = 0, o = i.length; n < o; n++)
                    t.classList.add(i[n]);
            else if (!Ae(t, e)) {
                var s = se(t);
                Ie(t, (s ? s + " " : "") + e);
            }
        }
        function R(t, e) {
            t.classList !== void 0
                ? t.classList.remove(e)
                : Ie(t, V((" " + se(t) + " ").replace(" " + e + " ", " ")));
        }
        function Ie(t, e) {
            t.className.baseVal === void 0
                ? (t.className = e)
                : (t.className.baseVal = e);
        }
        function se(t) {
            return (
                t.correspondingElement && (t = t.correspondingElement),
                t.className.baseVal === void 0
                    ? t.className
                    : t.className.baseVal
            );
        }
        function et(t, e) {
            "opacity" in t.style
                ? (t.style.opacity = e)
                : "filter" in t.style && po(t, e);
        }
        function po(t, e) {
            var i = !1,
                n = "DXImageTransform.Microsoft.Alpha";
            try {
                i = t.filters.item(n);
            } catch {
                if (e === 1) return;
            }
            (e = Math.round(e * 100)),
                i
                    ? ((i.Enabled = e !== 100), (i.Opacity = e))
                    : (t.style.filter +=
                          " progid:" + n + "(opacity=" + e + ")");
        }
        function re(t) {
            for (
                var e = document.documentElement.style, i = 0;
                i < t.length;
                i++
            )
                if (t[i] in e) return t[i];
            return !1;
        }
        function Lt(t, e, i) {
            var n = e || new x(0, 0);
            t.style[Ze] =
                (p.ie3d
                    ? "translate(" + n.x + "px," + n.y + "px)"
                    : "translate3d(" + n.x + "px," + n.y + "px,0)") +
                (i ? " scale(" + i + ")" : "");
        }
        function H(t, e) {
            (t._leaflet_pos = e),
                p.any3d
                    ? Lt(t, e)
                    : ((t.style.left = e.x + "px"), (t.style.top = e.y + "px"));
        }
        function bt(t) {
            return t._leaflet_pos || new x(0, 0);
        }
        var Wt, Ut, Be;
        if ("onselectstart" in document)
            (Wt = function () {
                P(window, "selectstart", j);
            }),
                (Ut = function () {
                    A(window, "selectstart", j);
                });
        else {
            var jt = re([
                "userSelect",
                "WebkitUserSelect",
                "OUserSelect",
                "MozUserSelect",
                "msUserSelect",
            ]);
            (Wt = function () {
                if (jt) {
                    var t = document.documentElement.style;
                    (Be = t[jt]), (t[jt] = "none");
                }
            }),
                (Ut = function () {
                    jt &&
                        ((document.documentElement.style[jt] = Be),
                        (Be = void 0));
                });
        }
        function Ne() {
            P(window, "dragstart", j);
        }
        function Re() {
            A(window, "dragstart", j);
        }
        var ae, De;
        function He(t) {
            for (; t.tabIndex === -1; ) t = t.parentNode;
            t.style &&
                (he(),
                (ae = t),
                (De = t.style.outlineStyle),
                (t.style.outlineStyle = "none"),
                P(window, "keydown", he));
        }
        function he() {
            ae &&
                ((ae.style.outlineStyle = De),
                (ae = void 0),
                (De = void 0),
                A(window, "keydown", he));
        }
        function Wi(t) {
            do t = t.parentNode;
            while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
            return t;
        }
        function Fe(t) {
            var e = t.getBoundingClientRect();
            return {
                x: e.width / t.offsetWidth || 1,
                y: e.height / t.offsetHeight || 1,
                boundingClientRect: e,
            };
        }
        var go = {
            __proto__: null,
            TRANSFORM: Ze,
            TRANSITION: Ht,
            TRANSITION_END: Hi,
            get: Fi,
            getStyle: Ft,
            create: E,
            remove: N,
            empty: oe,
            toFront: zt,
            toBack: Et,
            hasClass: Ae,
            addClass: b,
            removeClass: R,
            setClass: Ie,
            getClass: se,
            setOpacity: et,
            testProp: re,
            setTransform: Lt,
            setPosition: H,
            getPosition: bt,
            get disableTextSelection() {
                return Wt;
            },
            get enableTextSelection() {
                return Ut;
            },
            disableImageDrag: Ne,
            enableImageDrag: Re,
            preventOutline: He,
            restoreOutline: he,
            getSizedParentNode: Wi,
            getScale: Fe,
        };
        function P(t, e, i, n) {
            if (e && typeof e == "object") for (var o in e) Ue(t, o, e[o], i);
            else {
                e = ft(e);
                for (var s = 0, r = e.length; s < r; s++) Ue(t, e[s], i, n);
            }
            return this;
        }
        var ut = "_leaflet_events";
        function A(t, e, i, n) {
            if (arguments.length === 1) Ui(t), delete t[ut];
            else if (e && typeof e == "object")
                for (var o in e) je(t, o, e[o], i);
            else if (((e = ft(e)), arguments.length === 2))
                Ui(t, function (h) {
                    return xe(e, h) !== -1;
                });
            else for (var s = 0, r = e.length; s < r; s++) je(t, e[s], i, n);
            return this;
        }
        function Ui(t, e) {
            for (var i in t[ut]) {
                var n = i.split(/\d/)[0];
                (!e || e(n)) && je(t, n, null, null, i);
            }
        }
        var We = {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            wheel: !("onwheel" in window) && "mousewheel",
        };
        function Ue(t, e, i, n) {
            var o = e + v(i) + (n ? "_" + v(n) : "");
            if (t[ut] && t[ut][o]) return this;
            var s = function (h) {
                    return i.call(n || t, h || window.event);
                },
                r = s;
            !p.touchNative && p.pointer && e.indexOf("touch") === 0
                ? (s = so(t, e, s))
                : p.touch && e === "dblclick"
                ? (s = _o(t, s))
                : "addEventListener" in t
                ? e === "touchstart" ||
                  e === "touchmove" ||
                  e === "wheel" ||
                  e === "mousewheel"
                    ? t.addEventListener(
                          We[e] || e,
                          s,
                          p.passiveEvents ? { passive: !1 } : !1
                      )
                    : e === "mouseenter" || e === "mouseleave"
                    ? ((s = function (h) {
                          (h = h || window.event), Ve(t, h) && r(h);
                      }),
                      t.addEventListener(We[e], s, !1))
                    : t.addEventListener(e, r, !1)
                : t.attachEvent("on" + e, s),
                (t[ut] = t[ut] || {}),
                (t[ut][o] = s);
        }
        function je(t, e, i, n, o) {
            o = o || e + v(i) + (n ? "_" + v(n) : "");
            var s = t[ut] && t[ut][o];
            if (!s) return this;
            !p.touchNative && p.pointer && e.indexOf("touch") === 0
                ? ro(t, e, s)
                : p.touch && e === "dblclick"
                ? mo(t, s)
                : "removeEventListener" in t
                ? t.removeEventListener(We[e] || e, s, !1)
                : t.detachEvent("on" + e, s),
                (t[ut][o] = null);
        }
        function Tt(t) {
            return (
                t.stopPropagation
                    ? t.stopPropagation()
                    : t.originalEvent
                    ? (t.originalEvent._stopped = !0)
                    : (t.cancelBubble = !0),
                this
            );
        }
        function Ge(t) {
            return Ue(t, "wheel", Tt), this;
        }
        function Gt(t) {
            return (
                P(t, "mousedown touchstart dblclick contextmenu", Tt),
                (t._leaflet_disable_click = !0),
                this
            );
        }
        function j(t) {
            return (
                t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
                this
            );
        }
        function Ct(t) {
            return j(t), Tt(t), this;
        }
        function ji(t) {
            if (t.composedPath) return t.composedPath();
            for (var e = [], i = t.target; i; ) e.push(i), (i = i.parentNode);
            return e;
        }
        function Gi(t, e) {
            if (!e) return new x(t.clientX, t.clientY);
            var i = Fe(e),
                n = i.boundingClientRect;
            return new x(
                (t.clientX - n.left) / i.x - e.clientLeft,
                (t.clientY - n.top) / i.y - e.clientTop
            );
        }
        var vo =
            p.linux && p.chrome
                ? window.devicePixelRatio
                : p.mac
                ? window.devicePixelRatio * 3
                : window.devicePixelRatio > 0
                ? 2 * window.devicePixelRatio
                : 1;
        function Vi(t) {
            return p.edge
                ? t.wheelDeltaY / 2
                : t.deltaY && t.deltaMode === 0
                ? -t.deltaY / vo
                : t.deltaY && t.deltaMode === 1
                ? -t.deltaY * 20
                : t.deltaY && t.deltaMode === 2
                ? -t.deltaY * 60
                : t.deltaX || t.deltaZ
                ? 0
                : t.wheelDelta
                ? (t.wheelDeltaY || t.wheelDelta) / 2
                : t.detail && Math.abs(t.detail) < 32765
                ? -t.detail * 20
                : t.detail
                ? (t.detail / -32765) * 60
                : 0;
        }
        function Ve(t, e) {
            var i = e.relatedTarget;
            if (!i) return !0;
            try {
                for (; i && i !== t; ) i = i.parentNode;
            } catch {
                return !1;
            }
            return i !== t;
        }
        var yo = {
                __proto__: null,
                on: P,
                off: A,
                stopPropagation: Tt,
                disableScrollPropagation: Ge,
                disableClickPropagation: Gt,
                preventDefault: j,
                stop: Ct,
                getPropagationPath: ji,
                getMousePosition: Gi,
                getWheelDelta: Vi,
                isExternalTarget: Ve,
                addListener: P,
                removeListener: A,
            },
            qi = Nt.extend({
                run: function (t, e, i, n) {
                    this.stop(),
                        (this._el = t),
                        (this._inProgress = !0),
                        (this._duration = i || 0.25),
                        (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
                        (this._startPos = bt(t)),
                        (this._offset = e.subtract(this._startPos)),
                        (this._startTime = +new Date()),
                        this.fire("start"),
                        this._animate();
                },
                stop: function () {
                    this._inProgress && (this._step(!0), this._complete());
                },
                _animate: function () {
                    (this._animId = K(this._animate, this)), this._step();
                },
                _step: function (t) {
                    var e = +new Date() - this._startTime,
                        i = this._duration * 1e3;
                    e < i
                        ? this._runFrame(this._easeOut(e / i), t)
                        : (this._runFrame(1), this._complete());
                },
                _runFrame: function (t, e) {
                    var i = this._startPos.add(this._offset.multiplyBy(t));
                    e && i._round(), H(this._el, i), this.fire("step");
                },
                _complete: function () {
                    tt(this._animId), (this._inProgress = !1), this.fire("end");
                },
                _easeOut: function (t) {
                    return 1 - Math.pow(1 - t, this._easeOutPower);
                },
            }),
            M = Nt.extend({
                options: {
                    crs: Ce,
                    center: void 0,
                    zoom: void 0,
                    minZoom: void 0,
                    maxZoom: void 0,
                    layers: [],
                    maxBounds: void 0,
                    renderer: void 0,
                    zoomAnimation: !0,
                    zoomAnimationThreshold: 4,
                    fadeAnimation: !0,
                    markerZoomAnimation: !0,
                    transform3DLimit: 8388608,
                    zoomSnap: 1,
                    zoomDelta: 1,
                    trackResize: !0,
                },
                initialize: function (t, e) {
                    (e = Z(this, e)),
                        (this._handlers = []),
                        (this._layers = {}),
                        (this._zoomBoundLayers = {}),
                        (this._sizeChanged = !0),
                        this._initContainer(t),
                        this._initLayout(),
                        (this._onResize = g(this._onResize, this)),
                        this._initEvents(),
                        e.maxBounds && this.setMaxBounds(e.maxBounds),
                        e.zoom !== void 0 &&
                            (this._zoom = this._limitZoom(e.zoom)),
                        e.center &&
                            e.zoom !== void 0 &&
                            this.setView(C(e.center), e.zoom, { reset: !0 }),
                        this.callInitHooks(),
                        (this._zoomAnimated =
                            Ht &&
                            p.any3d &&
                            !p.mobileOpera &&
                            this.options.zoomAnimation),
                        this._zoomAnimated &&
                            (this._createAnimProxy(),
                            P(this._proxy, Hi, this._catchTransitionEnd, this)),
                        this._addLayers(this.options.layers);
                },
                setView: function (t, e, i) {
                    if (
                        ((e = e === void 0 ? this._zoom : this._limitZoom(e)),
                        (t = this._limitCenter(
                            C(t),
                            e,
                            this.options.maxBounds
                        )),
                        (i = i || {}),
                        this._stop(),
                        this._loaded && !i.reset && i !== !0)
                    ) {
                        i.animate !== void 0 &&
                            ((i.zoom = _({ animate: i.animate }, i.zoom)),
                            (i.pan = _(
                                { animate: i.animate, duration: i.duration },
                                i.pan
                            )));
                        var n =
                            this._zoom !== e
                                ? this._tryAnimatedZoom &&
                                  this._tryAnimatedZoom(t, e, i.zoom)
                                : this._tryAnimatedPan(t, i.pan);
                        if (n) return clearTimeout(this._sizeTimer), this;
                    }
                    return (
                        this._resetView(t, e, i.pan && i.pan.noMoveStart), this
                    );
                },
                setZoom: function (t, e) {
                    return this._loaded
                        ? this.setView(this.getCenter(), t, { zoom: e })
                        : ((this._zoom = t), this);
                },
                zoomIn: function (t, e) {
                    return (
                        (t = t || (p.any3d ? this.options.zoomDelta : 1)),
                        this.setZoom(this._zoom + t, e)
                    );
                },
                zoomOut: function (t, e) {
                    return (
                        (t = t || (p.any3d ? this.options.zoomDelta : 1)),
                        this.setZoom(this._zoom - t, e)
                    );
                },
                setZoomAround: function (t, e, i) {
                    var n = this.getZoomScale(e),
                        o = this.getSize().divideBy(2),
                        s = t instanceof x ? t : this.latLngToContainerPoint(t),
                        r = s.subtract(o).multiplyBy(1 - 1 / n),
                        h = this.containerPointToLatLng(o.add(r));
                    return this.setView(h, e, { zoom: i });
                },
                _getBoundsCenterZoom: function (t, e) {
                    (e = e || {}), (t = t.getBounds ? t.getBounds() : D(t));
                    var i = w(e.paddingTopLeft || e.padding || [0, 0]),
                        n = w(e.paddingBottomRight || e.padding || [0, 0]),
                        o = this.getBoundsZoom(t, !1, i.add(n));
                    if (
                        ((o =
                            typeof e.maxZoom == "number"
                                ? Math.min(e.maxZoom, o)
                                : o),
                        o === 1 / 0)
                    )
                        return { center: t.getCenter(), zoom: o };
                    var s = n.subtract(i).divideBy(2),
                        r = this.project(t.getSouthWest(), o),
                        h = this.project(t.getNorthEast(), o),
                        u = this.unproject(r.add(h).divideBy(2).add(s), o);
                    return { center: u, zoom: o };
                },
                fitBounds: function (t, e) {
                    if (((t = D(t)), !t.isValid()))
                        throw new Error("Bounds are not valid.");
                    var i = this._getBoundsCenterZoom(t, e);
                    return this.setView(i.center, i.zoom, e);
                },
                fitWorld: function (t) {
                    return this.fitBounds(
                        [
                            [-90, -180],
                            [90, 180],
                        ],
                        t
                    );
                },
                panTo: function (t, e) {
                    return this.setView(t, this._zoom, { pan: e });
                },
                panBy: function (t, e) {
                    if (((t = w(t).round()), (e = e || {}), !t.x && !t.y))
                        return this.fire("moveend");
                    if (e.animate !== !0 && !this.getSize().contains(t))
                        return (
                            this._resetView(
                                this.unproject(
                                    this.project(this.getCenter()).add(t)
                                ),
                                this.getZoom()
                            ),
                            this
                        );
                    if (
                        (this._panAnim ||
                            ((this._panAnim = new qi()),
                            this._panAnim.on(
                                {
                                    step: this._onPanTransitionStep,
                                    end: this._onPanTransitionEnd,
                                },
                                this
                            )),
                        e.noMoveStart || this.fire("movestart"),
                        e.animate !== !1)
                    ) {
                        b(this._mapPane, "leaflet-pan-anim");
                        var i = this._getMapPanePos().subtract(t).round();
                        this._panAnim.run(
                            this._mapPane,
                            i,
                            e.duration || 0.25,
                            e.easeLinearity
                        );
                    } else this._rawPanBy(t), this.fire("move").fire("moveend");
                    return this;
                },
                flyTo: function (t, e, i) {
                    if (((i = i || {}), i.animate === !1 || !p.any3d))
                        return this.setView(t, e, i);
                    this._stop();
                    var n = this.project(this.getCenter()),
                        o = this.project(t),
                        s = this.getSize(),
                        r = this._zoom;
                    (t = C(t)), (e = e === void 0 ? r : e);
                    var h = Math.max(s.x, s.y),
                        u = h * this.getZoomScale(r, e),
                        l = o.distanceTo(n) || 1,
                        m = 1.42,
                        y = m * m;
                    function T(F) {
                        var we = F ? -1 : 1,
                            as = F ? u : h,
                            hs = u * u - h * h + we * y * y * l * l,
                            us = 2 * as * y * l,
                            ni = hs / us,
                            Sn = Math.sqrt(ni * ni + 1) - ni,
                            ls = Sn < 1e-9 ? -18 : Math.log(Sn);
                        return ls;
                    }
                    function q(F) {
                        return (Math.exp(F) - Math.exp(-F)) / 2;
                    }
                    function U(F) {
                        return (Math.exp(F) + Math.exp(-F)) / 2;
                    }
                    function nt(F) {
                        return q(F) / U(F);
                    }
                    var J = T(0);
                    function Bt(F) {
                        return h * (U(J) / U(J + m * F));
                    }
                    function ns(F) {
                        return (h * (U(J) * nt(J + m * F) - q(J))) / y;
                    }
                    function os(F) {
                        return 1 - Math.pow(1 - F, 1.5);
                    }
                    var ss = Date.now(),
                        Cn = (T(1) - J) / m,
                        rs = i.duration ? 1e3 * i.duration : 1e3 * Cn * 0.8;
                    function Mn() {
                        var F = (Date.now() - ss) / rs,
                            we = os(F) * Cn;
                        F <= 1
                            ? ((this._flyToFrame = K(Mn, this)),
                              this._move(
                                  this.unproject(
                                      n.add(
                                          o.subtract(n).multiplyBy(ns(we) / l)
                                      ),
                                      r
                                  ),
                                  this.getScaleZoom(h / Bt(we), r),
                                  { flyTo: !0 }
                              ))
                            : this._move(t, e)._moveEnd(!0);
                    }
                    return (
                        this._moveStart(!0, i.noMoveStart), Mn.call(this), this
                    );
                },
                flyToBounds: function (t, e) {
                    var i = this._getBoundsCenterZoom(t, e);
                    return this.flyTo(i.center, i.zoom, e);
                },
                setMaxBounds: function (t) {
                    return (
                        (t = D(t)),
                        this.listens("moveend", this._panInsideMaxBounds) &&
                            this.off("moveend", this._panInsideMaxBounds),
                        t.isValid()
                            ? ((this.options.maxBounds = t),
                              this._loaded && this._panInsideMaxBounds(),
                              this.on("moveend", this._panInsideMaxBounds))
                            : ((this.options.maxBounds = null), this)
                    );
                },
                setMinZoom: function (t) {
                    var e = this.options.minZoom;
                    return (
                        (this.options.minZoom = t),
                        this._loaded &&
                        e !== t &&
                        (this.fire("zoomlevelschange"),
                        this.getZoom() < this.options.minZoom)
                            ? this.setZoom(t)
                            : this
                    );
                },
                setMaxZoom: function (t) {
                    var e = this.options.maxZoom;
                    return (
                        (this.options.maxZoom = t),
                        this._loaded &&
                        e !== t &&
                        (this.fire("zoomlevelschange"),
                        this.getZoom() > this.options.maxZoom)
                            ? this.setZoom(t)
                            : this
                    );
                },
                panInsideBounds: function (t, e) {
                    this._enforcingBounds = !0;
                    var i = this.getCenter(),
                        n = this._limitCenter(i, this._zoom, D(t));
                    return (
                        i.equals(n) || this.panTo(n, e),
                        (this._enforcingBounds = !1),
                        this
                    );
                },
                panInside: function (t, e) {
                    e = e || {};
                    var i = w(e.paddingTopLeft || e.padding || [0, 0]),
                        n = w(e.paddingBottomRight || e.padding || [0, 0]),
                        o = this.project(this.getCenter()),
                        s = this.project(t),
                        r = this.getPixelBounds(),
                        h = Y([r.min.add(i), r.max.subtract(n)]),
                        u = h.getSize();
                    if (!h.contains(s)) {
                        this._enforcingBounds = !0;
                        var l = s.subtract(h.getCenter()),
                            m = h.extend(s).getSize().subtract(u);
                        (o.x += l.x < 0 ? -m.x : m.x),
                            (o.y += l.y < 0 ? -m.y : m.y),
                            this.panTo(this.unproject(o), e),
                            (this._enforcingBounds = !1);
                    }
                    return this;
                },
                invalidateSize: function (t) {
                    if (!this._loaded) return this;
                    t = _(
                        { animate: !1, pan: !0 },
                        t === !0 ? { animate: !0 } : t
                    );
                    var e = this.getSize();
                    (this._sizeChanged = !0), (this._lastCenter = null);
                    var i = this.getSize(),
                        n = e.divideBy(2).round(),
                        o = i.divideBy(2).round(),
                        s = n.subtract(o);
                    return !s.x && !s.y
                        ? this
                        : (t.animate && t.pan
                              ? this.panBy(s)
                              : (t.pan && this._rawPanBy(s),
                                this.fire("move"),
                                t.debounceMoveend
                                    ? (clearTimeout(this._sizeTimer),
                                      (this._sizeTimer = setTimeout(
                                          g(this.fire, this, "moveend"),
                                          200
                                      )))
                                    : this.fire("moveend")),
                          this.fire("resize", { oldSize: e, newSize: i }));
                },
                stop: function () {
                    return (
                        this.setZoom(this._limitZoom(this._zoom)),
                        this.options.zoomSnap || this.fire("viewreset"),
                        this._stop()
                    );
                },
                locate: function (t) {
                    if (
                        ((t = this._locateOptions =
                            _({ timeout: 1e4, watch: !1 }, t)),
                        !("geolocation" in navigator))
                    )
                        return (
                            this._handleGeolocationError({
                                code: 0,
                                message: "Geolocation not supported.",
                            }),
                            this
                        );
                    var e = g(this._handleGeolocationResponse, this),
                        i = g(this._handleGeolocationError, this);
                    return (
                        t.watch
                            ? (this._locationWatchId =
                                  navigator.geolocation.watchPosition(e, i, t))
                            : navigator.geolocation.getCurrentPosition(e, i, t),
                        this
                    );
                },
                stopLocate: function () {
                    return (
                        navigator.geolocation &&
                            navigator.geolocation.clearWatch &&
                            navigator.geolocation.clearWatch(
                                this._locationWatchId
                            ),
                        this._locateOptions &&
                            (this._locateOptions.setView = !1),
                        this
                    );
                },
                _handleGeolocationError: function (t) {
                    if (this._container._leaflet_id) {
                        var e = t.code,
                            i =
                                t.message ||
                                (e === 1
                                    ? "permission denied"
                                    : e === 2
                                    ? "position unavailable"
                                    : "timeout");
                        this._locateOptions.setView &&
                            !this._loaded &&
                            this.fitWorld(),
                            this.fire("locationerror", {
                                code: e,
                                message: "Geolocation error: " + i + ".",
                            });
                    }
                },
                _handleGeolocationResponse: function (t) {
                    if (this._container._leaflet_id) {
                        var e = t.coords.latitude,
                            i = t.coords.longitude,
                            n = new O(e, i),
                            o = n.toBounds(t.coords.accuracy * 2),
                            s = this._locateOptions;
                        if (s.setView) {
                            var r = this.getBoundsZoom(o);
                            this.setView(
                                n,
                                s.maxZoom ? Math.min(r, s.maxZoom) : r
                            );
                        }
                        var h = {
                            latlng: n,
                            bounds: o,
                            timestamp: t.timestamp,
                        };
                        for (var u in t.coords)
                            typeof t.coords[u] == "number" &&
                                (h[u] = t.coords[u]);
                        this.fire("locationfound", h);
                    }
                },
                addHandler: function (t, e) {
                    if (!e) return this;
                    var i = (this[t] = new e(this));
                    return (
                        this._handlers.push(i),
                        this.options[t] && i.enable(),
                        this
                    );
                },
                remove: function () {
                    if (
                        (this._initEvents(!0),
                        this.options.maxBounds &&
                            this.off("moveend", this._panInsideMaxBounds),
                        this._containerId !== this._container._leaflet_id)
                    )
                        throw new Error(
                            "Map container is being reused by another instance"
                        );
                    try {
                        delete this._container._leaflet_id,
                            delete this._containerId;
                    } catch {
                        (this._container._leaflet_id = void 0),
                            (this._containerId = void 0);
                    }
                    this._locationWatchId !== void 0 && this.stopLocate(),
                        this._stop(),
                        N(this._mapPane),
                        this._clearControlPos && this._clearControlPos(),
                        this._resizeRequest &&
                            (tt(this._resizeRequest),
                            (this._resizeRequest = null)),
                        this._clearHandlers(),
                        this._loaded && this.fire("unload");
                    var t;
                    for (t in this._layers) this._layers[t].remove();
                    for (t in this._panes) N(this._panes[t]);
                    return (
                        (this._layers = []),
                        (this._panes = []),
                        delete this._mapPane,
                        delete this._renderer,
                        this
                    );
                },
                createPane: function (t, e) {
                    var i =
                            "leaflet-pane" +
                            (t
                                ? " leaflet-" + t.replace("Pane", "") + "-pane"
                                : ""),
                        n = E("div", i, e || this._mapPane);
                    return t && (this._panes[t] = n), n;
                },
                getCenter: function () {
                    return (
                        this._checkIfLoaded(),
                        this._lastCenter && !this._moved()
                            ? this._lastCenter.clone()
                            : this.layerPointToLatLng(
                                  this._getCenterLayerPoint()
                              )
                    );
                },
                getZoom: function () {
                    return this._zoom;
                },
                getBounds: function () {
                    var t = this.getPixelBounds(),
                        e = this.unproject(t.getBottomLeft()),
                        i = this.unproject(t.getTopRight());
                    return new X(e, i);
                },
                getMinZoom: function () {
                    return this.options.minZoom === void 0
                        ? this._layersMinZoom || 0
                        : this.options.minZoom;
                },
                getMaxZoom: function () {
                    return this.options.maxZoom === void 0
                        ? this._layersMaxZoom === void 0
                            ? 1 / 0
                            : this._layersMaxZoom
                        : this.options.maxZoom;
                },
                getBoundsZoom: function (t, e, i) {
                    (t = D(t)), (i = w(i || [0, 0]));
                    var n = this.getZoom() || 0,
                        o = this.getMinZoom(),
                        s = this.getMaxZoom(),
                        r = t.getNorthWest(),
                        h = t.getSouthEast(),
                        u = this.getSize().subtract(i),
                        l = Y(this.project(h, n), this.project(r, n)).getSize(),
                        m = p.any3d ? this.options.zoomSnap : 1,
                        y = u.x / l.x,
                        T = u.y / l.y,
                        q = e ? Math.max(y, T) : Math.min(y, T);
                    return (
                        (n = this.getScaleZoom(q, n)),
                        m &&
                            ((n = Math.round(n / (m / 100)) * (m / 100)),
                            (n = e
                                ? Math.ceil(n / m) * m
                                : Math.floor(n / m) * m)),
                        Math.max(o, Math.min(s, n))
                    );
                },
                getSize: function () {
                    return (
                        (!this._size || this._sizeChanged) &&
                            ((this._size = new x(
                                this._container.clientWidth || 0,
                                this._container.clientHeight || 0
                            )),
                            (this._sizeChanged = !1)),
                        this._size.clone()
                    );
                },
                getPixelBounds: function (t, e) {
                    var i = this._getTopLeftPoint(t, e);
                    return new B(i, i.add(this.getSize()));
                },
                getPixelOrigin: function () {
                    return this._checkIfLoaded(), this._pixelOrigin;
                },
                getPixelWorldBounds: function (t) {
                    return this.options.crs.getProjectedBounds(
                        t === void 0 ? this.getZoom() : t
                    );
                },
                getPane: function (t) {
                    return typeof t == "string" ? this._panes[t] : t;
                },
                getPanes: function () {
                    return this._panes;
                },
                getContainer: function () {
                    return this._container;
                },
                getZoomScale: function (t, e) {
                    var i = this.options.crs;
                    return (
                        (e = e === void 0 ? this._zoom : e),
                        i.scale(t) / i.scale(e)
                    );
                },
                getScaleZoom: function (t, e) {
                    var i = this.options.crs;
                    e = e === void 0 ? this._zoom : e;
                    var n = i.zoom(t * i.scale(e));
                    return isNaN(n) ? 1 / 0 : n;
                },
                project: function (t, e) {
                    return (
                        (e = e === void 0 ? this._zoom : e),
                        this.options.crs.latLngToPoint(C(t), e)
                    );
                },
                unproject: function (t, e) {
                    return (
                        (e = e === void 0 ? this._zoom : e),
                        this.options.crs.pointToLatLng(w(t), e)
                    );
                },
                layerPointToLatLng: function (t) {
                    var e = w(t).add(this.getPixelOrigin());
                    return this.unproject(e);
                },
                latLngToLayerPoint: function (t) {
                    var e = this.project(C(t))._round();
                    return e._subtract(this.getPixelOrigin());
                },
                wrapLatLng: function (t) {
                    return this.options.crs.wrapLatLng(C(t));
                },
                wrapLatLngBounds: function (t) {
                    return this.options.crs.wrapLatLngBounds(D(t));
                },
                distance: function (t, e) {
                    return this.options.crs.distance(C(t), C(e));
                },
                containerPointToLayerPoint: function (t) {
                    return w(t).subtract(this._getMapPanePos());
                },
                layerPointToContainerPoint: function (t) {
                    return w(t).add(this._getMapPanePos());
                },
                containerPointToLatLng: function (t) {
                    var e = this.containerPointToLayerPoint(w(t));
                    return this.layerPointToLatLng(e);
                },
                latLngToContainerPoint: function (t) {
                    return this.layerPointToContainerPoint(
                        this.latLngToLayerPoint(C(t))
                    );
                },
                mouseEventToContainerPoint: function (t) {
                    return Gi(t, this._container);
                },
                mouseEventToLayerPoint: function (t) {
                    return this.containerPointToLayerPoint(
                        this.mouseEventToContainerPoint(t)
                    );
                },
                mouseEventToLatLng: function (t) {
                    return this.layerPointToLatLng(
                        this.mouseEventToLayerPoint(t)
                    );
                },
                _initContainer: function (t) {
                    var e = (this._container = Fi(t));
                    if (e) {
                        if (e._leaflet_id)
                            throw new Error(
                                "Map container is already initialized."
                            );
                    } else throw new Error("Map container not found.");
                    P(e, "scroll", this._onScroll, this),
                        (this._containerId = v(e));
                },
                _initLayout: function () {
                    var t = this._container;
                    (this._fadeAnimated =
                        this.options.fadeAnimation && p.any3d),
                        b(
                            t,
                            "leaflet-container" +
                                (p.touch ? " leaflet-touch" : "") +
                                (p.retina ? " leaflet-retina" : "") +
                                (p.ielt9 ? " leaflet-oldie" : "") +
                                (p.safari ? " leaflet-safari" : "") +
                                (this._fadeAnimated ? " leaflet-fade-anim" : "")
                        );
                    var e = Ft(t, "position");
                    e !== "absolute" &&
                        e !== "relative" &&
                        e !== "fixed" &&
                        e !== "sticky" &&
                        (t.style.position = "relative"),
                        this._initPanes(),
                        this._initControlPos && this._initControlPos();
                },
                _initPanes: function () {
                    var t = (this._panes = {});
                    (this._paneRenderers = {}),
                        (this._mapPane = this.createPane(
                            "mapPane",
                            this._container
                        )),
                        H(this._mapPane, new x(0, 0)),
                        this.createPane("tilePane"),
                        this.createPane("overlayPane"),
                        this.createPane("shadowPane"),
                        this.createPane("markerPane"),
                        this.createPane("tooltipPane"),
                        this.createPane("popupPane"),
                        this.options.markerZoomAnimation ||
                            (b(t.markerPane, "leaflet-zoom-hide"),
                            b(t.shadowPane, "leaflet-zoom-hide"));
                },
                _resetView: function (t, e, i) {
                    H(this._mapPane, new x(0, 0));
                    var n = !this._loaded;
                    (this._loaded = !0),
                        (e = this._limitZoom(e)),
                        this.fire("viewprereset");
                    var o = this._zoom !== e;
                    this._moveStart(o, i)._move(t, e)._moveEnd(o),
                        this.fire("viewreset"),
                        n && this.fire("load");
                },
                _moveStart: function (t, e) {
                    return (
                        t && this.fire("zoomstart"),
                        e || this.fire("movestart"),
                        this
                    );
                },
                _move: function (t, e, i, n) {
                    e === void 0 && (e = this._zoom);
                    var o = this._zoom !== e;
                    return (
                        (this._zoom = e),
                        (this._lastCenter = t),
                        (this._pixelOrigin = this._getNewPixelOrigin(t)),
                        n
                            ? i && i.pinch && this.fire("zoom", i)
                            : ((o || (i && i.pinch)) && this.fire("zoom", i),
                              this.fire("move", i)),
                        this
                    );
                },
                _moveEnd: function (t) {
                    return t && this.fire("zoomend"), this.fire("moveend");
                },
                _stop: function () {
                    return (
                        tt(this._flyToFrame),
                        this._panAnim && this._panAnim.stop(),
                        this
                    );
                },
                _rawPanBy: function (t) {
                    H(this._mapPane, this._getMapPanePos().subtract(t));
                },
                _getZoomSpan: function () {
                    return this.getMaxZoom() - this.getMinZoom();
                },
                _panInsideMaxBounds: function () {
                    this._enforcingBounds ||
                        this.panInsideBounds(this.options.maxBounds);
                },
                _checkIfLoaded: function () {
                    if (!this._loaded)
                        throw new Error("Set map center and zoom first.");
                },
                _initEvents: function (t) {
                    (this._targets = {}),
                        (this._targets[v(this._container)] = this);
                    var e = t ? A : P;
                    e(
                        this._container,
                        "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",
                        this._handleDOMEvent,
                        this
                    ),
                        this.options.trackResize &&
                            e(window, "resize", this._onResize, this),
                        p.any3d &&
                            this.options.transform3DLimit &&
                            (t ? this.off : this.on).call(
                                this,
                                "moveend",
                                this._onMoveEnd
                            );
                },
                _onResize: function () {
                    tt(this._resizeRequest),
                        (this._resizeRequest = K(function () {
                            this.invalidateSize({ debounceMoveend: !0 });
                        }, this));
                },
                _onScroll: function () {
                    (this._container.scrollTop = 0),
                        (this._container.scrollLeft = 0);
                },
                _onMoveEnd: function () {
                    var t = this._getMapPanePos();
                    Math.max(Math.abs(t.x), Math.abs(t.y)) >=
                        this.options.transform3DLimit &&
                        this._resetView(this.getCenter(), this.getZoom());
                },
                _findEventTargets: function (t, e) {
                    for (
                        var i = [],
                            n,
                            o = e === "mouseout" || e === "mouseover",
                            s = t.target || t.srcElement,
                            r = !1;
                        s;

                    ) {
                        if (
                            ((n = this._targets[v(s)]),
                            n &&
                                (e === "click" || e === "preclick") &&
                                this._draggableMoved(n))
                        ) {
                            r = !0;
                            break;
                        }
                        if (
                            (n &&
                                n.listens(e, !0) &&
                                ((o && !Ve(s, t)) || (i.push(n), o))) ||
                            s === this._container
                        )
                            break;
                        s = s.parentNode;
                    }
                    return (
                        !i.length &&
                            !r &&
                            !o &&
                            this.listens(e, !0) &&
                            (i = [this]),
                        i
                    );
                },
                _isClickDisabled: function (t) {
                    for (; t && t !== this._container; ) {
                        if (t._leaflet_disable_click) return !0;
                        t = t.parentNode;
                    }
                },
                _handleDOMEvent: function (t) {
                    var e = t.target || t.srcElement;
                    if (
                        !(
                            !this._loaded ||
                            e._leaflet_disable_events ||
                            (t.type === "click" && this._isClickDisabled(e))
                        )
                    ) {
                        var i = t.type;
                        i === "mousedown" && He(e), this._fireDOMEvent(t, i);
                    }
                },
                _mouseEvents: [
                    "click",
                    "dblclick",
                    "mouseover",
                    "mouseout",
                    "contextmenu",
                ],
                _fireDOMEvent: function (t, e, i) {
                    if (t.type === "click") {
                        var n = _({}, t);
                        (n.type = "preclick"), this._fireDOMEvent(n, n.type, i);
                    }
                    var o = this._findEventTargets(t, e);
                    if (i) {
                        for (var s = [], r = 0; r < i.length; r++)
                            i[r].listens(e, !0) && s.push(i[r]);
                        o = s.concat(o);
                    }
                    if (o.length) {
                        e === "contextmenu" && j(t);
                        var h = o[0],
                            u = { originalEvent: t };
                        if (
                            t.type !== "keypress" &&
                            t.type !== "keydown" &&
                            t.type !== "keyup"
                        ) {
                            var l =
                                h.getLatLng && (!h._radius || h._radius <= 10);
                            (u.containerPoint = l
                                ? this.latLngToContainerPoint(h.getLatLng())
                                : this.mouseEventToContainerPoint(t)),
                                (u.layerPoint = this.containerPointToLayerPoint(
                                    u.containerPoint
                                )),
                                (u.latlng = l
                                    ? h.getLatLng()
                                    : this.layerPointToLatLng(u.layerPoint));
                        }
                        for (r = 0; r < o.length; r++)
                            if (
                                (o[r].fire(e, u, !0),
                                u.originalEvent._stopped ||
                                    (o[r].options.bubblingMouseEvents === !1 &&
                                        xe(this._mouseEvents, e) !== -1))
                            )
                                return;
                    }
                },
                _draggableMoved: function (t) {
                    return (
                        (t = t.dragging && t.dragging.enabled() ? t : this),
                        (t.dragging && t.dragging.moved()) ||
                            (this.boxZoom && this.boxZoom.moved())
                    );
                },
                _clearHandlers: function () {
                    for (var t = 0, e = this._handlers.length; t < e; t++)
                        this._handlers[t].disable();
                },
                whenReady: function (t, e) {
                    return (
                        this._loaded
                            ? t.call(e || this, { target: this })
                            : this.on("load", t, e),
                        this
                    );
                },
                _getMapPanePos: function () {
                    return bt(this._mapPane) || new x(0, 0);
                },
                _moved: function () {
                    var t = this._getMapPanePos();
                    return t && !t.equals([0, 0]);
                },
                _getTopLeftPoint: function (t, e) {
                    var i =
                        t && e !== void 0
                            ? this._getNewPixelOrigin(t, e)
                            : this.getPixelOrigin();
                    return i.subtract(this._getMapPanePos());
                },
                _getNewPixelOrigin: function (t, e) {
                    var i = this.getSize()._divideBy(2);
                    return this.project(t, e)
                        ._subtract(i)
                        ._add(this._getMapPanePos())
                        ._round();
                },
                _latLngToNewLayerPoint: function (t, e, i) {
                    var n = this._getNewPixelOrigin(i, e);
                    return this.project(t, e)._subtract(n);
                },
                _latLngBoundsToNewLayerBounds: function (t, e, i) {
                    var n = this._getNewPixelOrigin(i, e);
                    return Y([
                        this.project(t.getSouthWest(), e)._subtract(n),
                        this.project(t.getNorthWest(), e)._subtract(n),
                        this.project(t.getSouthEast(), e)._subtract(n),
                        this.project(t.getNorthEast(), e)._subtract(n),
                    ]);
                },
                _getCenterLayerPoint: function () {
                    return this.containerPointToLayerPoint(
                        this.getSize()._divideBy(2)
                    );
                },
                _getCenterOffset: function (t) {
                    return this.latLngToLayerPoint(t).subtract(
                        this._getCenterLayerPoint()
                    );
                },
                _limitCenter: function (t, e, i) {
                    if (!i) return t;
                    var n = this.project(t, e),
                        o = this.getSize().divideBy(2),
                        s = new B(n.subtract(o), n.add(o)),
                        r = this._getBoundsOffset(s, i, e);
                    return Math.abs(r.x) <= 1 && Math.abs(r.y) <= 1
                        ? t
                        : this.unproject(n.add(r), e);
                },
                _limitOffset: function (t, e) {
                    if (!e) return t;
                    var i = this.getPixelBounds(),
                        n = new B(i.min.add(t), i.max.add(t));
                    return t.add(this._getBoundsOffset(n, e));
                },
                _getBoundsOffset: function (t, e, i) {
                    var n = Y(
                            this.project(e.getNorthEast(), i),
                            this.project(e.getSouthWest(), i)
                        ),
                        o = n.min.subtract(t.min),
                        s = n.max.subtract(t.max),
                        r = this._rebound(o.x, -s.x),
                        h = this._rebound(o.y, -s.y);
                    return new x(r, h);
                },
                _rebound: function (t, e) {
                    return t + e > 0
                        ? Math.round(t - e) / 2
                        : Math.max(0, Math.ceil(t)) -
                              Math.max(0, Math.floor(e));
                },
                _limitZoom: function (t) {
                    var e = this.getMinZoom(),
                        i = this.getMaxZoom(),
                        n = p.any3d ? this.options.zoomSnap : 1;
                    return (
                        n && (t = Math.round(t / n) * n),
                        Math.max(e, Math.min(i, t))
                    );
                },
                _onPanTransitionStep: function () {
                    this.fire("move");
                },
                _onPanTransitionEnd: function () {
                    R(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
                },
                _tryAnimatedPan: function (t, e) {
                    var i = this._getCenterOffset(t)._trunc();
                    return (e && e.animate) !== !0 &&
                        !this.getSize().contains(i)
                        ? !1
                        : (this.panBy(i, e), !0);
                },
                _createAnimProxy: function () {
                    var t = (this._proxy = E(
                        "div",
                        "leaflet-proxy leaflet-zoom-animated"
                    ));
                    this._panes.mapPane.appendChild(t),
                        this.on(
                            "zoomanim",
                            function (e) {
                                var i = Ze,
                                    n = this._proxy.style[i];
                                Lt(
                                    this._proxy,
                                    this.project(e.center, e.zoom),
                                    this.getZoomScale(e.zoom, 1)
                                ),
                                    n === this._proxy.style[i] &&
                                        this._animatingZoom &&
                                        this._onZoomTransitionEnd();
                            },
                            this
                        ),
                        this.on("load moveend", this._animMoveEnd, this),
                        this._on("unload", this._destroyAnimProxy, this);
                },
                _destroyAnimProxy: function () {
                    N(this._proxy),
                        this.off("load moveend", this._animMoveEnd, this),
                        delete this._proxy;
                },
                _animMoveEnd: function () {
                    var t = this.getCenter(),
                        e = this.getZoom();
                    Lt(
                        this._proxy,
                        this.project(t, e),
                        this.getZoomScale(e, 1)
                    );
                },
                _catchTransitionEnd: function (t) {
                    this._animatingZoom &&
                        t.propertyName.indexOf("transform") >= 0 &&
                        this._onZoomTransitionEnd();
                },
                _nothingToAnimate: function () {
                    return !this._container.getElementsByClassName(
                        "leaflet-zoom-animated"
                    ).length;
                },
                _tryAnimatedZoom: function (t, e, i) {
                    if (this._animatingZoom) return !0;
                    if (
                        ((i = i || {}),
                        !this._zoomAnimated ||
                            i.animate === !1 ||
                            this._nothingToAnimate() ||
                            Math.abs(e - this._zoom) >
                                this.options.zoomAnimationThreshold)
                    )
                        return !1;
                    var n = this.getZoomScale(e),
                        o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                    return i.animate !== !0 && !this.getSize().contains(o)
                        ? !1
                        : (K(function () {
                              this._moveStart(
                                  !0,
                                  i.noMoveStart || !1
                              )._animateZoom(t, e, !0);
                          }, this),
                          !0);
                },
                _animateZoom: function (t, e, i, n) {
                    this._mapPane &&
                        (i &&
                            ((this._animatingZoom = !0),
                            (this._animateToCenter = t),
                            (this._animateToZoom = e),
                            b(this._mapPane, "leaflet-zoom-anim")),
                        this.fire("zoomanim", {
                            center: t,
                            zoom: e,
                            noUpdate: n,
                        }),
                        this._tempFireZoomEvent ||
                            (this._tempFireZoomEvent =
                                this._zoom !== this._animateToZoom),
                        this._move(
                            this._animateToCenter,
                            this._animateToZoom,
                            void 0,
                            !0
                        ),
                        setTimeout(g(this._onZoomTransitionEnd, this), 250));
                },
                _onZoomTransitionEnd: function () {
                    this._animatingZoom &&
                        (this._mapPane && R(this._mapPane, "leaflet-zoom-anim"),
                        (this._animatingZoom = !1),
                        this._move(
                            this._animateToCenter,
                            this._animateToZoom,
                            void 0,
                            !0
                        ),
                        this._tempFireZoomEvent && this.fire("zoom"),
                        delete this._tempFireZoomEvent,
                        this.fire("move"),
                        this._moveEnd(!0));
                },
            });
        function wo(t, e) {
            return new M(t, e);
        }
        var st = dt.extend({
                options: { position: "topright" },
                initialize: function (t) {
                    Z(this, t);
                },
                getPosition: function () {
                    return this.options.position;
                },
                setPosition: function (t) {
                    var e = this._map;
                    return (
                        e && e.removeControl(this),
                        (this.options.position = t),
                        e && e.addControl(this),
                        this
                    );
                },
                getContainer: function () {
                    return this._container;
                },
                addTo: function (t) {
                    this.remove(), (this._map = t);
                    var e = (this._container = this.onAdd(t)),
                        i = this.getPosition(),
                        n = t._controlCorners[i];
                    return (
                        b(e, "leaflet-control"),
                        i.indexOf("bottom") !== -1
                            ? n.insertBefore(e, n.firstChild)
                            : n.appendChild(e),
                        this._map.on("unload", this.remove, this),
                        this
                    );
                },
                remove: function () {
                    return this._map
                        ? (N(this._container),
                          this.onRemove && this.onRemove(this._map),
                          this._map.off("unload", this.remove, this),
                          (this._map = null),
                          this)
                        : this;
                },
                _refocusOnMap: function (t) {
                    this._map &&
                        t &&
                        t.screenX > 0 &&
                        t.screenY > 0 &&
                        this._map.getContainer().focus();
                },
            }),
            Vt = function (t) {
                return new st(t);
            };
        M.include({
            addControl: function (t) {
                return t.addTo(this), this;
            },
            removeControl: function (t) {
                return t.remove(), this;
            },
            _initControlPos: function () {
                var t = (this._controlCorners = {}),
                    e = "leaflet-",
                    i = (this._controlContainer = E(
                        "div",
                        e + "control-container",
                        this._container
                    ));
                function n(o, s) {
                    var r = e + o + " " + e + s;
                    t[o + s] = E("div", r, i);
                }
                n("top", "left"),
                    n("top", "right"),
                    n("bottom", "left"),
                    n("bottom", "right");
            },
            _clearControlPos: function () {
                for (var t in this._controlCorners) N(this._controlCorners[t]);
                N(this._controlContainer),
                    delete this._controlCorners,
                    delete this._controlContainer;
            },
        });
        var Ki = st.extend({
                options: {
                    collapsed: !0,
                    position: "topright",
                    autoZIndex: !0,
                    hideSingleBase: !1,
                    sortLayers: !1,
                    sortFunction: function (t, e, i, n) {
                        return i < n ? -1 : n < i ? 1 : 0;
                    },
                },
                initialize: function (t, e, i) {
                    Z(this, i),
                        (this._layerControlInputs = []),
                        (this._layers = []),
                        (this._lastZIndex = 0),
                        (this._handlingClick = !1),
                        (this._preventClick = !1);
                    for (var n in t) this._addLayer(t[n], n);
                    for (n in e) this._addLayer(e[n], n, !0);
                },
                onAdd: function (t) {
                    this._initLayout(),
                        this._update(),
                        (this._map = t),
                        t.on("zoomend", this._checkDisabledLayers, this);
                    for (var e = 0; e < this._layers.length; e++)
                        this._layers[e].layer.on(
                            "add remove",
                            this._onLayerChange,
                            this
                        );
                    return this._container;
                },
                addTo: function (t) {
                    return (
                        st.prototype.addTo.call(this, t),
                        this._expandIfNotCollapsed()
                    );
                },
                onRemove: function () {
                    this._map.off("zoomend", this._checkDisabledLayers, this);
                    for (var t = 0; t < this._layers.length; t++)
                        this._layers[t].layer.off(
                            "add remove",
                            this._onLayerChange,
                            this
                        );
                },
                addBaseLayer: function (t, e) {
                    return (
                        this._addLayer(t, e), this._map ? this._update() : this
                    );
                },
                addOverlay: function (t, e) {
                    return (
                        this._addLayer(t, e, !0),
                        this._map ? this._update() : this
                    );
                },
                removeLayer: function (t) {
                    t.off("add remove", this._onLayerChange, this);
                    var e = this._getLayer(v(t));
                    return (
                        e && this._layers.splice(this._layers.indexOf(e), 1),
                        this._map ? this._update() : this
                    );
                },
                expand: function () {
                    b(this._container, "leaflet-control-layers-expanded"),
                        (this._section.style.height = null);
                    var t =
                        this._map.getSize().y -
                        (this._container.offsetTop + 50);
                    return (
                        t < this._section.clientHeight
                            ? (b(
                                  this._section,
                                  "leaflet-control-layers-scrollbar"
                              ),
                              (this._section.style.height = t + "px"))
                            : R(
                                  this._section,
                                  "leaflet-control-layers-scrollbar"
                              ),
                        this._checkDisabledLayers(),
                        this
                    );
                },
                collapse: function () {
                    return (
                        R(this._container, "leaflet-control-layers-expanded"),
                        this
                    );
                },
                _initLayout: function () {
                    var t = "leaflet-control-layers",
                        e = (this._container = E("div", t)),
                        i = this.options.collapsed;
                    e.setAttribute("aria-haspopup", !0), Gt(e), Ge(e);
                    var n = (this._section = E("section", t + "-list"));
                    i &&
                        (this._map.on("click", this.collapse, this),
                        P(
                            e,
                            {
                                mouseenter: this._expandSafely,
                                mouseleave: this.collapse,
                            },
                            this
                        ));
                    var o = (this._layersLink = E("a", t + "-toggle", e));
                    (o.href = "#"),
                        (o.title = "Layers"),
                        o.setAttribute("role", "button"),
                        P(
                            o,
                            {
                                keydown: function (s) {
                                    s.keyCode === 13 && this._expandSafely();
                                },
                                click: function (s) {
                                    j(s), this._expandSafely();
                                },
                            },
                            this
                        ),
                        i || this.expand(),
                        (this._baseLayersList = E("div", t + "-base", n)),
                        (this._separator = E("div", t + "-separator", n)),
                        (this._overlaysList = E("div", t + "-overlays", n)),
                        e.appendChild(n);
                },
                _getLayer: function (t) {
                    for (var e = 0; e < this._layers.length; e++)
                        if (this._layers[e] && v(this._layers[e].layer) === t)
                            return this._layers[e];
                },
                _addLayer: function (t, e, i) {
                    this._map && t.on("add remove", this._onLayerChange, this),
                        this._layers.push({ layer: t, name: e, overlay: i }),
                        this.options.sortLayers &&
                            this._layers.sort(
                                g(function (n, o) {
                                    return this.options.sortFunction(
                                        n.layer,
                                        o.layer,
                                        n.name,
                                        o.name
                                    );
                                }, this)
                            ),
                        this.options.autoZIndex &&
                            t.setZIndex &&
                            (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
                        this._expandIfNotCollapsed();
                },
                _update: function () {
                    if (!this._container) return this;
                    oe(this._baseLayersList),
                        oe(this._overlaysList),
                        (this._layerControlInputs = []);
                    var t,
                        e,
                        i,
                        n,
                        o = 0;
                    for (i = 0; i < this._layers.length; i++)
                        (n = this._layers[i]),
                            this._addItem(n),
                            (e = e || n.overlay),
                            (t = t || !n.overlay),
                            (o += n.overlay ? 0 : 1);
                    return (
                        this.options.hideSingleBase &&
                            ((t = t && o > 1),
                            (this._baseLayersList.style.display = t
                                ? ""
                                : "none")),
                        (this._separator.style.display = e && t ? "" : "none"),
                        this
                    );
                },
                _onLayerChange: function (t) {
                    this._handlingClick || this._update();
                    var e = this._getLayer(v(t.target)),
                        i = e.overlay
                            ? t.type === "add"
                                ? "overlayadd"
                                : "overlayremove"
                            : t.type === "add"
                            ? "baselayerchange"
                            : null;
                    i && this._map.fire(i, e);
                },
                _createRadioElement: function (t, e) {
                    var i =
                            '<input type="radio" class="leaflet-control-layers-selector" name="' +
                            t +
                            '"' +
                            (e ? ' checked="checked"' : "") +
                            "/>",
                        n = document.createElement("div");
                    return (n.innerHTML = i), n.firstChild;
                },
                _addItem: function (t) {
                    var e = document.createElement("label"),
                        i = this._map.hasLayer(t.layer),
                        n;
                    t.overlay
                        ? ((n = document.createElement("input")),
                          (n.type = "checkbox"),
                          (n.className = "leaflet-control-layers-selector"),
                          (n.defaultChecked = i))
                        : (n = this._createRadioElement(
                              "leaflet-base-layers_" + v(this),
                              i
                          )),
                        this._layerControlInputs.push(n),
                        (n.layerId = v(t.layer)),
                        P(n, "click", this._onInputClick, this);
                    var o = document.createElement("span");
                    o.innerHTML = " " + t.name;
                    var s = document.createElement("span");
                    e.appendChild(s), s.appendChild(n), s.appendChild(o);
                    var r = t.overlay
                        ? this._overlaysList
                        : this._baseLayersList;
                    return r.appendChild(e), this._checkDisabledLayers(), e;
                },
                _onInputClick: function () {
                    if (!this._preventClick) {
                        var t = this._layerControlInputs,
                            e,
                            i,
                            n = [],
                            o = [];
                        this._handlingClick = !0;
                        for (var s = t.length - 1; s >= 0; s--)
                            (e = t[s]),
                                (i = this._getLayer(e.layerId).layer),
                                e.checked ? n.push(i) : e.checked || o.push(i);
                        for (s = 0; s < o.length; s++)
                            this._map.hasLayer(o[s]) &&
                                this._map.removeLayer(o[s]);
                        for (s = 0; s < n.length; s++)
                            this._map.hasLayer(n[s]) ||
                                this._map.addLayer(n[s]);
                        (this._handlingClick = !1), this._refocusOnMap();
                    }
                },
                _checkDisabledLayers: function () {
                    for (
                        var t = this._layerControlInputs,
                            e,
                            i,
                            n = this._map.getZoom(),
                            o = t.length - 1;
                        o >= 0;
                        o--
                    )
                        (e = t[o]),
                            (i = this._getLayer(e.layerId).layer),
                            (e.disabled =
                                (i.options.minZoom !== void 0 &&
                                    n < i.options.minZoom) ||
                                (i.options.maxZoom !== void 0 &&
                                    n > i.options.maxZoom));
                },
                _expandIfNotCollapsed: function () {
                    return (
                        this._map && !this.options.collapsed && this.expand(),
                        this
                    );
                },
                _expandSafely: function () {
                    var t = this._section;
                    (this._preventClick = !0), P(t, "click", j), this.expand();
                    var e = this;
                    setTimeout(function () {
                        A(t, "click", j), (e._preventClick = !1);
                    });
                },
            }),
            xo = function (t, e, i) {
                return new Ki(t, e, i);
            },
            qe = st.extend({
                options: {
                    position: "topleft",
                    zoomInText: '<span aria-hidden="true">+</span>',
                    zoomInTitle: "Zoom in",
                    zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
                    zoomOutTitle: "Zoom out",
                },
                onAdd: function (t) {
                    var e = "leaflet-control-zoom",
                        i = E("div", e + " leaflet-bar"),
                        n = this.options;
                    return (
                        (this._zoomInButton = this._createButton(
                            n.zoomInText,
                            n.zoomInTitle,
                            e + "-in",
                            i,
                            this._zoomIn
                        )),
                        (this._zoomOutButton = this._createButton(
                            n.zoomOutText,
                            n.zoomOutTitle,
                            e + "-out",
                            i,
                            this._zoomOut
                        )),
                        this._updateDisabled(),
                        t.on(
                            "zoomend zoomlevelschange",
                            this._updateDisabled,
                            this
                        ),
                        i
                    );
                },
                onRemove: function (t) {
                    t.off(
                        "zoomend zoomlevelschange",
                        this._updateDisabled,
                        this
                    );
                },
                disable: function () {
                    return (this._disabled = !0), this._updateDisabled(), this;
                },
                enable: function () {
                    return (this._disabled = !1), this._updateDisabled(), this;
                },
                _zoomIn: function (t) {
                    !this._disabled &&
                        this._map._zoom < this._map.getMaxZoom() &&
                        this._map.zoomIn(
                            this._map.options.zoomDelta * (t.shiftKey ? 3 : 1)
                        );
                },
                _zoomOut: function (t) {
                    !this._disabled &&
                        this._map._zoom > this._map.getMinZoom() &&
                        this._map.zoomOut(
                            this._map.options.zoomDelta * (t.shiftKey ? 3 : 1)
                        );
                },
                _createButton: function (t, e, i, n, o) {
                    var s = E("a", i, n);
                    return (
                        (s.innerHTML = t),
                        (s.href = "#"),
                        (s.title = e),
                        s.setAttribute("role", "button"),
                        s.setAttribute("aria-label", e),
                        Gt(s),
                        P(s, "click", Ct),
                        P(s, "click", o, this),
                        P(s, "click", this._refocusOnMap, this),
                        s
                    );
                },
                _updateDisabled: function () {
                    var t = this._map,
                        e = "leaflet-disabled";
                    R(this._zoomInButton, e),
                        R(this._zoomOutButton, e),
                        this._zoomInButton.setAttribute(
                            "aria-disabled",
                            "false"
                        ),
                        this._zoomOutButton.setAttribute(
                            "aria-disabled",
                            "false"
                        ),
                        (this._disabled || t._zoom === t.getMinZoom()) &&
                            (b(this._zoomOutButton, e),
                            this._zoomOutButton.setAttribute(
                                "aria-disabled",
                                "true"
                            )),
                        (this._disabled || t._zoom === t.getMaxZoom()) &&
                            (b(this._zoomInButton, e),
                            this._zoomInButton.setAttribute(
                                "aria-disabled",
                                "true"
                            ));
                },
            });
        M.mergeOptions({ zoomControl: !0 }),
            M.addInitHook(function () {
                this.options.zoomControl &&
                    ((this.zoomControl = new qe()),
                    this.addControl(this.zoomControl));
            });
        var Po = function (t) {
                return new qe(t);
            },
            Yi = st.extend({
                options: {
                    position: "bottomleft",
                    maxWidth: 100,
                    metric: !0,
                    imperial: !0,
                },
                onAdd: function (t) {
                    var e = "leaflet-control-scale",
                        i = E("div", e),
                        n = this.options;
                    return (
                        this._addScales(n, e + "-line", i),
                        t.on(
                            n.updateWhenIdle ? "moveend" : "move",
                            this._update,
                            this
                        ),
                        t.whenReady(this._update, this),
                        i
                    );
                },
                onRemove: function (t) {
                    t.off(
                        this.options.updateWhenIdle ? "moveend" : "move",
                        this._update,
                        this
                    );
                },
                _addScales: function (t, e, i) {
                    t.metric && (this._mScale = E("div", e, i)),
                        t.imperial && (this._iScale = E("div", e, i));
                },
                _update: function () {
                    var t = this._map,
                        e = t.getSize().y / 2,
                        i = t.distance(
                            t.containerPointToLatLng([0, e]),
                            t.containerPointToLatLng([this.options.maxWidth, e])
                        );
                    this._updateScales(i);
                },
                _updateScales: function (t) {
                    this.options.metric && t && this._updateMetric(t),
                        this.options.imperial && t && this._updateImperial(t);
                },
                _updateMetric: function (t) {
                    var e = this._getRoundNum(t),
                        i = e < 1e3 ? e + " m" : e / 1e3 + " km";
                    this._updateScale(this._mScale, i, e / t);
                },
                _updateImperial: function (t) {
                    var e = t * 3.2808399,
                        i,
                        n,
                        o;
                    e > 5280
                        ? ((i = e / 5280),
                          (n = this._getRoundNum(i)),
                          this._updateScale(this._iScale, n + " mi", n / i))
                        : ((o = this._getRoundNum(e)),
                          this._updateScale(this._iScale, o + " ft", o / e));
                },
                _updateScale: function (t, e, i) {
                    (t.style.width =
                        Math.round(this.options.maxWidth * i) + "px"),
                        (t.innerHTML = e);
                },
                _getRoundNum: function (t) {
                    var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                        i = t / e;
                    return (
                        (i =
                            i >= 10
                                ? 10
                                : i >= 5
                                ? 5
                                : i >= 3
                                ? 3
                                : i >= 2
                                ? 2
                                : 1),
                        e * i
                    );
                },
            }),
            Lo = function (t) {
                return new Yi(t);
            },
            bo =
                '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
            Ke = st.extend({
                options: {
                    position: "bottomright",
                    prefix:
                        '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
                        (p.inlineSvg ? bo + " " : "") +
                        "Leaflet</a>",
                },
                initialize: function (t) {
                    Z(this, t), (this._attributions = {});
                },
                onAdd: function (t) {
                    (t.attributionControl = this),
                        (this._container = E(
                            "div",
                            "leaflet-control-attribution"
                        )),
                        Gt(this._container);
                    for (var e in t._layers)
                        t._layers[e].getAttribution &&
                            this.addAttribution(t._layers[e].getAttribution());
                    return (
                        this._update(),
                        t.on("layeradd", this._addAttribution, this),
                        this._container
                    );
                },
                onRemove: function (t) {
                    t.off("layeradd", this._addAttribution, this);
                },
                _addAttribution: function (t) {
                    t.layer.getAttribution &&
                        (this.addAttribution(t.layer.getAttribution()),
                        t.layer.once(
                            "remove",
                            function () {
                                this.removeAttribution(
                                    t.layer.getAttribution()
                                );
                            },
                            this
                        ));
                },
                setPrefix: function (t) {
                    return (this.options.prefix = t), this._update(), this;
                },
                addAttribution: function (t) {
                    return t
                        ? (this._attributions[t] || (this._attributions[t] = 0),
                          this._attributions[t]++,
                          this._update(),
                          this)
                        : this;
                },
                removeAttribution: function (t) {
                    return t
                        ? (this._attributions[t] &&
                              (this._attributions[t]--, this._update()),
                          this)
                        : this;
                },
                _update: function () {
                    if (this._map) {
                        var t = [];
                        for (var e in this._attributions)
                            this._attributions[e] && t.push(e);
                        var i = [];
                        this.options.prefix && i.push(this.options.prefix),
                            t.length && i.push(t.join(", ")),
                            (this._container.innerHTML = i.join(
                                ' <span aria-hidden="true">|</span> '
                            ));
                    }
                },
            });
        M.mergeOptions({ attributionControl: !0 }),
            M.addInitHook(function () {
                this.options.attributionControl && new Ke().addTo(this);
            });
        var To = function (t) {
            return new Ke(t);
        };
        (st.Layers = Ki),
            (st.Zoom = qe),
            (st.Scale = Yi),
            (st.Attribution = Ke),
            (Vt.layers = xo),
            (Vt.zoom = Po),
            (Vt.scale = Lo),
            (Vt.attribution = To);
        var lt = dt.extend({
            initialize: function (t) {
                this._map = t;
            },
            enable: function () {
                return this._enabled
                    ? this
                    : ((this._enabled = !0), this.addHooks(), this);
            },
            disable: function () {
                return this._enabled
                    ? ((this._enabled = !1), this.removeHooks(), this)
                    : this;
            },
            enabled: function () {
                return !!this._enabled;
            },
        });
        lt.addTo = function (t, e) {
            return t.addHandler(e, this), this;
        };
        var Co = { Events: Q },
            Xi = p.touch ? "touchstart mousedown" : "mousedown",
            wt = Nt.extend({
                options: { clickTolerance: 3 },
                initialize: function (t, e, i, n) {
                    Z(this, n),
                        (this._element = t),
                        (this._dragStartTarget = e || t),
                        (this._preventOutline = i);
                },
                enable: function () {
                    this._enabled ||
                        (P(this._dragStartTarget, Xi, this._onDown, this),
                        (this._enabled = !0));
                },
                disable: function () {
                    this._enabled &&
                        (wt._dragging === this && this.finishDrag(!0),
                        A(this._dragStartTarget, Xi, this._onDown, this),
                        (this._enabled = !1),
                        (this._moved = !1));
                },
                _onDown: function (t) {
                    if (
                        this._enabled &&
                        ((this._moved = !1),
                        !Ae(this._element, "leaflet-zoom-anim"))
                    ) {
                        if (t.touches && t.touches.length !== 1) {
                            wt._dragging === this && this.finishDrag();
                            return;
                        }
                        if (
                            !(
                                wt._dragging ||
                                t.shiftKey ||
                                (t.which !== 1 && t.button !== 1 && !t.touches)
                            ) &&
                            ((wt._dragging = this),
                            this._preventOutline && He(this._element),
                            Ne(),
                            Wt(),
                            !this._moving)
                        ) {
                            this.fire("down");
                            var e = t.touches ? t.touches[0] : t,
                                i = Wi(this._element);
                            (this._startPoint = new x(e.clientX, e.clientY)),
                                (this._startPos = bt(this._element)),
                                (this._parentScale = Fe(i));
                            var n = t.type === "mousedown";
                            P(
                                document,
                                n ? "mousemove" : "touchmove",
                                this._onMove,
                                this
                            ),
                                P(
                                    document,
                                    n ? "mouseup" : "touchend touchcancel",
                                    this._onUp,
                                    this
                                );
                        }
                    }
                },
                _onMove: function (t) {
                    if (this._enabled) {
                        if (t.touches && t.touches.length > 1) {
                            this._moved = !0;
                            return;
                        }
                        var e =
                                t.touches && t.touches.length === 1
                                    ? t.touches[0]
                                    : t,
                            i = new x(e.clientX, e.clientY)._subtract(
                                this._startPoint
                            );
                        (!i.x && !i.y) ||
                            Math.abs(i.x) + Math.abs(i.y) <
                                this.options.clickTolerance ||
                            ((i.x /= this._parentScale.x),
                            (i.y /= this._parentScale.y),
                            j(t),
                            this._moved ||
                                (this.fire("dragstart"),
                                (this._moved = !0),
                                b(document.body, "leaflet-dragging"),
                                (this._lastTarget = t.target || t.srcElement),
                                window.SVGElementInstance &&
                                    this._lastTarget instanceof
                                        window.SVGElementInstance &&
                                    (this._lastTarget =
                                        this._lastTarget.correspondingUseElement),
                                b(this._lastTarget, "leaflet-drag-target")),
                            (this._newPos = this._startPos.add(i)),
                            (this._moving = !0),
                            (this._lastEvent = t),
                            this._updatePosition());
                    }
                },
                _updatePosition: function () {
                    var t = { originalEvent: this._lastEvent };
                    this.fire("predrag", t),
                        H(this._element, this._newPos),
                        this.fire("drag", t);
                },
                _onUp: function () {
                    this._enabled && this.finishDrag();
                },
                finishDrag: function (t) {
                    R(document.body, "leaflet-dragging"),
                        this._lastTarget &&
                            (R(this._lastTarget, "leaflet-drag-target"),
                            (this._lastTarget = null)),
                        A(document, "mousemove touchmove", this._onMove, this),
                        A(
                            document,
                            "mouseup touchend touchcancel",
                            this._onUp,
                            this
                        ),
                        Re(),
                        Ut();
                    var e = this._moved && this._moving;
                    (this._moving = !1),
                        (wt._dragging = !1),
                        e &&
                            this.fire("dragend", {
                                noInertia: t,
                                distance: this._newPos.distanceTo(
                                    this._startPos
                                ),
                            });
                },
            });
        function Ji(t, e, i) {
            var n,
                o = [1, 4, 2, 8],
                s,
                r,
                h,
                u,
                l,
                m,
                y,
                T;
            for (s = 0, m = t.length; s < m; s++) t[s]._code = Mt(t[s], e);
            for (h = 0; h < 4; h++) {
                for (
                    y = o[h], n = [], s = 0, m = t.length, r = m - 1;
                    s < m;
                    r = s++
                )
                    (u = t[s]),
                        (l = t[r]),
                        u._code & y
                            ? l._code & y ||
                              ((T = ue(l, u, y, e, i)),
                              (T._code = Mt(T, e)),
                              n.push(T))
                            : (l._code & y &&
                                  ((T = ue(l, u, y, e, i)),
                                  (T._code = Mt(T, e)),
                                  n.push(T)),
                              n.push(u));
                t = n;
            }
            return t;
        }
        function Qi(t, e) {
            var i, n, o, s, r, h, u, l, m;
            if (!t || t.length === 0) throw new Error("latlngs not passed");
            it(t) ||
                (console.warn(
                    "latlngs are not flat! Only the first ring will be used"
                ),
                (t = t[0]));
            var y = C([0, 0]),
                T = D(t),
                q =
                    T.getNorthWest().distanceTo(T.getSouthWest()) *
                    T.getNorthEast().distanceTo(T.getNorthWest());
            q < 1700 && (y = Ye(t));
            var U = t.length,
                nt = [];
            for (i = 0; i < U; i++) {
                var J = C(t[i]);
                nt.push(e.project(C([J.lat - y.lat, J.lng - y.lng])));
            }
            for (h = u = l = 0, i = 0, n = U - 1; i < U; n = i++)
                (o = nt[i]),
                    (s = nt[n]),
                    (r = o.y * s.x - s.y * o.x),
                    (u += (o.x + s.x) * r),
                    (l += (o.y + s.y) * r),
                    (h += r * 3);
            h === 0 ? (m = nt[0]) : (m = [u / h, l / h]);
            var Bt = e.unproject(w(m));
            return C([Bt.lat + y.lat, Bt.lng + y.lng]);
        }
        function Ye(t) {
            for (var e = 0, i = 0, n = 0, o = 0; o < t.length; o++) {
                var s = C(t[o]);
                (e += s.lat), (i += s.lng), n++;
            }
            return C([e / n, i / n]);
        }
        var Mo = {
            __proto__: null,
            clipPolygon: Ji,
            polygonCenter: Qi,
            centroid: Ye,
        };
        function $i(t, e) {
            if (!e || !t.length) return t.slice();
            var i = e * e;
            return (t = Eo(t, i)), (t = zo(t, i)), t;
        }
        function tn(t, e, i) {
            return Math.sqrt(qt(t, e, i, !0));
        }
        function So(t, e, i) {
            return qt(t, e, i);
        }
        function zo(t, e) {
            var i = t.length,
                n = typeof Uint8Array != void 0 + "" ? Uint8Array : Array,
                o = new n(i);
            (o[0] = o[i - 1] = 1), Xe(t, o, e, 0, i - 1);
            var s,
                r = [];
            for (s = 0; s < i; s++) o[s] && r.push(t[s]);
            return r;
        }
        function Xe(t, e, i, n, o) {
            var s = 0,
                r,
                h,
                u;
            for (h = n + 1; h <= o - 1; h++)
                (u = qt(t[h], t[n], t[o], !0)), u > s && ((r = h), (s = u));
            s > i && ((e[r] = 1), Xe(t, e, i, n, r), Xe(t, e, i, r, o));
        }
        function Eo(t, e) {
            for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
                ko(t[n], t[o]) > e && (i.push(t[n]), (o = n));
            return o < s - 1 && i.push(t[s - 1]), i;
        }
        var en;
        function nn(t, e, i, n, o) {
            var s = n ? en : Mt(t, i),
                r = Mt(e, i),
                h,
                u,
                l;
            for (en = r; ; ) {
                if (!(s | r)) return [t, e];
                if (s & r) return !1;
                (h = s || r),
                    (u = ue(t, e, h, i, o)),
                    (l = Mt(u, i)),
                    h === s ? ((t = u), (s = l)) : ((e = u), (r = l));
            }
        }
        function ue(t, e, i, n, o) {
            var s = e.x - t.x,
                r = e.y - t.y,
                h = n.min,
                u = n.max,
                l,
                m;
            return (
                i & 8
                    ? ((l = t.x + (s * (u.y - t.y)) / r), (m = u.y))
                    : i & 4
                    ? ((l = t.x + (s * (h.y - t.y)) / r), (m = h.y))
                    : i & 2
                    ? ((l = u.x), (m = t.y + (r * (u.x - t.x)) / s))
                    : i & 1 && ((l = h.x), (m = t.y + (r * (h.x - t.x)) / s)),
                new x(l, m, o)
            );
        }
        function Mt(t, e) {
            var i = 0;
            return (
                t.x < e.min.x ? (i |= 1) : t.x > e.max.x && (i |= 2),
                t.y < e.min.y ? (i |= 4) : t.y > e.max.y && (i |= 8),
                i
            );
        }
        function ko(t, e) {
            var i = e.x - t.x,
                n = e.y - t.y;
            return i * i + n * n;
        }
        function qt(t, e, i, n) {
            var o = e.x,
                s = e.y,
                r = i.x - o,
                h = i.y - s,
                u = r * r + h * h,
                l;
            return (
                u > 0 &&
                    ((l = ((t.x - o) * r + (t.y - s) * h) / u),
                    l > 1
                        ? ((o = i.x), (s = i.y))
                        : l > 0 && ((o += r * l), (s += h * l))),
                (r = t.x - o),
                (h = t.y - s),
                n ? r * r + h * h : new x(o, s)
            );
        }
        function it(t) {
            return (
                !ot(t[0]) ||
                (typeof t[0][0] != "object" && typeof t[0][0] < "u")
            );
        }
        function on(t) {
            return (
                console.warn(
                    "Deprecated use of _flat, please use L.LineUtil.isFlat instead."
                ),
                it(t)
            );
        }
        function sn(t, e) {
            var i, n, o, s, r, h, u, l;
            if (!t || t.length === 0) throw new Error("latlngs not passed");
            it(t) ||
                (console.warn(
                    "latlngs are not flat! Only the first ring will be used"
                ),
                (t = t[0]));
            var m = C([0, 0]),
                y = D(t),
                T =
                    y.getNorthWest().distanceTo(y.getSouthWest()) *
                    y.getNorthEast().distanceTo(y.getNorthWest());
            T < 1700 && (m = Ye(t));
            var q = t.length,
                U = [];
            for (i = 0; i < q; i++) {
                var nt = C(t[i]);
                U.push(e.project(C([nt.lat - m.lat, nt.lng - m.lng])));
            }
            for (i = 0, n = 0; i < q - 1; i++)
                n += U[i].distanceTo(U[i + 1]) / 2;
            if (n === 0) l = U[0];
            else
                for (i = 0, s = 0; i < q - 1; i++)
                    if (
                        ((r = U[i]),
                        (h = U[i + 1]),
                        (o = r.distanceTo(h)),
                        (s += o),
                        s > n)
                    ) {
                        (u = (s - n) / o),
                            (l = [
                                h.x - u * (h.x - r.x),
                                h.y - u * (h.y - r.y),
                            ]);
                        break;
                    }
            var J = e.unproject(w(l));
            return C([J.lat + m.lat, J.lng + m.lng]);
        }
        var Oo = {
                __proto__: null,
                simplify: $i,
                pointToSegmentDistance: tn,
                closestPointOnSegment: So,
                clipSegment: nn,
                _getEdgeIntersection: ue,
                _getBitCode: Mt,
                _sqClosestPointOnSegment: qt,
                isFlat: it,
                _flat: on,
                polylineCenter: sn,
            },
            Je = {
                project: function (t) {
                    return new x(t.lng, t.lat);
                },
                unproject: function (t) {
                    return new O(t.y, t.x);
                },
                bounds: new B([-180, -90], [180, 90]),
            },
            Qe = {
                R: 6378137,
                R_MINOR: 6356752314245179e-9,
                bounds: new B(
                    [-2003750834279e-5, -1549657073972e-5],
                    [2003750834279e-5, 1876465623138e-5]
                ),
                project: function (t) {
                    var e = Math.PI / 180,
                        i = this.R,
                        n = t.lat * e,
                        o = this.R_MINOR / i,
                        s = Math.sqrt(1 - o * o),
                        r = s * Math.sin(n),
                        h =
                            Math.tan(Math.PI / 4 - n / 2) /
                            Math.pow((1 - r) / (1 + r), s / 2);
                    return (
                        (n = -i * Math.log(Math.max(h, 1e-10))),
                        new x(t.lng * e * i, n)
                    );
                },
                unproject: function (t) {
                    for (
                        var e = 180 / Math.PI,
                            i = this.R,
                            n = this.R_MINOR / i,
                            o = Math.sqrt(1 - n * n),
                            s = Math.exp(-t.y / i),
                            r = Math.PI / 2 - 2 * Math.atan(s),
                            h = 0,
                            u = 0.1,
                            l;
                        h < 15 && Math.abs(u) > 1e-7;
                        h++
                    )
                        (l = o * Math.sin(r)),
                            (l = Math.pow((1 - l) / (1 + l), o / 2)),
                            (u = Math.PI / 2 - 2 * Math.atan(s * l) - r),
                            (r += u);
                    return new O(r * e, (t.x * e) / i);
                },
            },
            Zo = {
                __proto__: null,
                LonLat: Je,
                Mercator: Qe,
                SphericalMercator: be,
            },
            Ao = _({}, yt, {
                code: "EPSG:3395",
                projection: Qe,
                transformation: (function () {
                    var t = 0.5 / (Math.PI * Qe.R);
                    return Rt(t, 0.5, -t, 0.5);
                })(),
            }),
            rn = _({}, yt, {
                code: "EPSG:4326",
                projection: Je,
                transformation: Rt(1 / 180, 1, -1 / 180, 0.5),
            }),
            Io = _({}, _t, {
                projection: Je,
                transformation: Rt(1, 0, -1, 0),
                scale: function (t) {
                    return Math.pow(2, t);
                },
                zoom: function (t) {
                    return Math.log(t) / Math.LN2;
                },
                distance: function (t, e) {
                    var i = e.lng - t.lng,
                        n = e.lat - t.lat;
                    return Math.sqrt(i * i + n * n);
                },
                infinite: !0,
            });
        (_t.Earth = yt),
            (_t.EPSG3395 = Ao),
            (_t.EPSG3857 = Ce),
            (_t.EPSG900913 = Hn),
            (_t.EPSG4326 = rn),
            (_t.Simple = Io);
        var rt = Nt.extend({
            options: {
                pane: "overlayPane",
                attribution: null,
                bubblingMouseEvents: !0,
            },
            addTo: function (t) {
                return t.addLayer(this), this;
            },
            remove: function () {
                return this.removeFrom(this._map || this._mapToAdd);
            },
            removeFrom: function (t) {
                return t && t.removeLayer(this), this;
            },
            getPane: function (t) {
                return this._map.getPane(
                    t ? this.options[t] || t : this.options.pane
                );
            },
            addInteractiveTarget: function (t) {
                return (this._map._targets[v(t)] = this), this;
            },
            removeInteractiveTarget: function (t) {
                return delete this._map._targets[v(t)], this;
            },
            getAttribution: function () {
                return this.options.attribution;
            },
            _layerAdd: function (t) {
                var e = t.target;
                if (e.hasLayer(this)) {
                    if (
                        ((this._map = e),
                        (this._zoomAnimated = e._zoomAnimated),
                        this.getEvents)
                    ) {
                        var i = this.getEvents();
                        e.on(i, this),
                            this.once(
                                "remove",
                                function () {
                                    e.off(i, this);
                                },
                                this
                            );
                    }
                    this.onAdd(e),
                        this.fire("add"),
                        e.fire("layeradd", { layer: this });
                }
            },
        });
        M.include({
            addLayer: function (t) {
                if (!t._layerAdd)
                    throw new Error("The provided object is not a Layer.");
                var e = v(t);
                return this._layers[e]
                    ? this
                    : ((this._layers[e] = t),
                      (t._mapToAdd = this),
                      t.beforeAdd && t.beforeAdd(this),
                      this.whenReady(t._layerAdd, t),
                      this);
            },
            removeLayer: function (t) {
                var e = v(t);
                return this._layers[e]
                    ? (this._loaded && t.onRemove(this),
                      delete this._layers[e],
                      this._loaded &&
                          (this.fire("layerremove", { layer: t }),
                          t.fire("remove")),
                      (t._map = t._mapToAdd = null),
                      this)
                    : this;
            },
            hasLayer: function (t) {
                return v(t) in this._layers;
            },
            eachLayer: function (t, e) {
                for (var i in this._layers) t.call(e, this._layers[i]);
                return this;
            },
            _addLayers: function (t) {
                t = t ? (ot(t) ? t : [t]) : [];
                for (var e = 0, i = t.length; e < i; e++) this.addLayer(t[e]);
            },
            _addZoomLimit: function (t) {
                (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) &&
                    ((this._zoomBoundLayers[v(t)] = t),
                    this._updateZoomLevels());
            },
            _removeZoomLimit: function (t) {
                var e = v(t);
                this._zoomBoundLayers[e] &&
                    (delete this._zoomBoundLayers[e], this._updateZoomLevels());
            },
            _updateZoomLevels: function () {
                var t = 1 / 0,
                    e = -1 / 0,
                    i = this._getZoomSpan();
                for (var n in this._zoomBoundLayers) {
                    var o = this._zoomBoundLayers[n].options;
                    (t = o.minZoom === void 0 ? t : Math.min(t, o.minZoom)),
                        (e = o.maxZoom === void 0 ? e : Math.max(e, o.maxZoom));
                }
                (this._layersMaxZoom = e === -1 / 0 ? void 0 : e),
                    (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
                    i !== this._getZoomSpan() && this.fire("zoomlevelschange"),
                    this.options.maxZoom === void 0 &&
                        this._layersMaxZoom &&
                        this.getZoom() > this._layersMaxZoom &&
                        this.setZoom(this._layersMaxZoom),
                    this.options.minZoom === void 0 &&
                        this._layersMinZoom &&
                        this.getZoom() < this._layersMinZoom &&
                        this.setZoom(this._layersMinZoom);
            },
        });
        var kt = rt.extend({
                initialize: function (t, e) {
                    Z(this, e), (this._layers = {});
                    var i, n;
                    if (t)
                        for (i = 0, n = t.length; i < n; i++)
                            this.addLayer(t[i]);
                },
                addLayer: function (t) {
                    var e = this.getLayerId(t);
                    return (
                        (this._layers[e] = t),
                        this._map && this._map.addLayer(t),
                        this
                    );
                },
                removeLayer: function (t) {
                    var e = t in this._layers ? t : this.getLayerId(t);
                    return (
                        this._map &&
                            this._layers[e] &&
                            this._map.removeLayer(this._layers[e]),
                        delete this._layers[e],
                        this
                    );
                },
                hasLayer: function (t) {
                    var e = typeof t == "number" ? t : this.getLayerId(t);
                    return e in this._layers;
                },
                clearLayers: function () {
                    return this.eachLayer(this.removeLayer, this);
                },
                invoke: function (t) {
                    var e = Array.prototype.slice.call(arguments, 1),
                        i,
                        n;
                    for (i in this._layers)
                        (n = this._layers[i]), n[t] && n[t].apply(n, e);
                    return this;
                },
                onAdd: function (t) {
                    this.eachLayer(t.addLayer, t);
                },
                onRemove: function (t) {
                    this.eachLayer(t.removeLayer, t);
                },
                eachLayer: function (t, e) {
                    for (var i in this._layers) t.call(e, this._layers[i]);
                    return this;
                },
                getLayer: function (t) {
                    return this._layers[t];
                },
                getLayers: function () {
                    var t = [];
                    return this.eachLayer(t.push, t), t;
                },
                setZIndex: function (t) {
                    return this.invoke("setZIndex", t);
                },
                getLayerId: function (t) {
                    return v(t);
                },
            }),
            Bo = function (t, e) {
                return new kt(t, e);
            },
            mt = kt.extend({
                addLayer: function (t) {
                    return this.hasLayer(t)
                        ? this
                        : (t.addEventParent(this),
                          kt.prototype.addLayer.call(this, t),
                          this.fire("layeradd", { layer: t }));
                },
                removeLayer: function (t) {
                    return this.hasLayer(t)
                        ? (t in this._layers && (t = this._layers[t]),
                          t.removeEventParent(this),
                          kt.prototype.removeLayer.call(this, t),
                          this.fire("layerremove", { layer: t }))
                        : this;
                },
                setStyle: function (t) {
                    return this.invoke("setStyle", t);
                },
                bringToFront: function () {
                    return this.invoke("bringToFront");
                },
                bringToBack: function () {
                    return this.invoke("bringToBack");
                },
                getBounds: function () {
                    var t = new X();
                    for (var e in this._layers) {
                        var i = this._layers[e];
                        t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
                    }
                    return t;
                },
            }),
            No = function (t, e) {
                return new mt(t, e);
            },
            Ot = dt.extend({
                options: {
                    popupAnchor: [0, 0],
                    tooltipAnchor: [0, 0],
                    crossOrigin: !1,
                },
                initialize: function (t) {
                    Z(this, t);
                },
                createIcon: function (t) {
                    return this._createIcon("icon", t);
                },
                createShadow: function (t) {
                    return this._createIcon("shadow", t);
                },
                _createIcon: function (t, e) {
                    var i = this._getIconUrl(t);
                    if (!i) {
                        if (t === "icon")
                            throw new Error(
                                "iconUrl not set in Icon options (see the docs)."
                            );
                        return null;
                    }
                    var n = this._createImg(
                        i,
                        e && e.tagName === "IMG" ? e : null
                    );
                    return (
                        this._setIconStyles(n, t),
                        (this.options.crossOrigin ||
                            this.options.crossOrigin === "") &&
                            (n.crossOrigin =
                                this.options.crossOrigin === !0
                                    ? ""
                                    : this.options.crossOrigin),
                        n
                    );
                },
                _setIconStyles: function (t, e) {
                    var i = this.options,
                        n = i[e + "Size"];
                    typeof n == "number" && (n = [n, n]);
                    var o = w(n),
                        s = w(
                            (e === "shadow" && i.shadowAnchor) ||
                                i.iconAnchor ||
                                (o && o.divideBy(2, !0))
                        );
                    (t.className =
                        "leaflet-marker-" + e + " " + (i.className || "")),
                        s &&
                            ((t.style.marginLeft = -s.x + "px"),
                            (t.style.marginTop = -s.y + "px")),
                        o &&
                            ((t.style.width = o.x + "px"),
                            (t.style.height = o.y + "px"));
                },
                _createImg: function (t, e) {
                    return (
                        (e = e || document.createElement("img")), (e.src = t), e
                    );
                },
                _getIconUrl: function (t) {
                    return (
                        (p.retina && this.options[t + "RetinaUrl"]) ||
                        this.options[t + "Url"]
                    );
                },
            });
        function Ro(t) {
            return new Ot(t);
        }
        var Kt = Ot.extend({
                options: {
                    iconUrl: "marker-icon.png",
                    iconRetinaUrl: "marker-icon-2x.png",
                    shadowUrl: "marker-shadow.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    tooltipAnchor: [16, -28],
                    shadowSize: [41, 41],
                },
                _getIconUrl: function (t) {
                    return (
                        typeof Kt.imagePath != "string" &&
                            (Kt.imagePath = this._detectIconPath()),
                        (this.options.imagePath || Kt.imagePath) +
                            Ot.prototype._getIconUrl.call(this, t)
                    );
                },
                _stripUrl: function (t) {
                    var e = function (i, n, o) {
                        var s = n.exec(i);
                        return s && s[o];
                    };
                    return (
                        (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)),
                        t && e(t, /^(.*)marker-icon\.png$/, 1)
                    );
                },
                _detectIconPath: function () {
                    var t = E(
                            "div",
                            "leaflet-default-icon-path",
                            document.body
                        ),
                        e =
                            Ft(t, "background-image") ||
                            Ft(t, "backgroundImage");
                    if (
                        (document.body.removeChild(t),
                        (e = this._stripUrl(e)),
                        e)
                    )
                        return e;
                    var i = document.querySelector('link[href$="leaflet.css"]');
                    return i ? i.href.substring(0, i.href.length - 11 - 1) : "";
                },
            }),
            an = lt.extend({
                initialize: function (t) {
                    this._marker = t;
                },
                addHooks: function () {
                    var t = this._marker._icon;
                    this._draggable || (this._draggable = new wt(t, t, !0)),
                        this._draggable
                            .on(
                                {
                                    dragstart: this._onDragStart,
                                    predrag: this._onPreDrag,
                                    drag: this._onDrag,
                                    dragend: this._onDragEnd,
                                },
                                this
                            )
                            .enable(),
                        b(t, "leaflet-marker-draggable");
                },
                removeHooks: function () {
                    this._draggable
                        .off(
                            {
                                dragstart: this._onDragStart,
                                predrag: this._onPreDrag,
                                drag: this._onDrag,
                                dragend: this._onDragEnd,
                            },
                            this
                        )
                        .disable(),
                        this._marker._icon &&
                            R(this._marker._icon, "leaflet-marker-draggable");
                },
                moved: function () {
                    return this._draggable && this._draggable._moved;
                },
                _adjustPan: function (t) {
                    var e = this._marker,
                        i = e._map,
                        n = this._marker.options.autoPanSpeed,
                        o = this._marker.options.autoPanPadding,
                        s = bt(e._icon),
                        r = i.getPixelBounds(),
                        h = i.getPixelOrigin(),
                        u = Y(
                            r.min._subtract(h).add(o),
                            r.max._subtract(h).subtract(o)
                        );
                    if (!u.contains(s)) {
                        var l = w(
                            (Math.max(u.max.x, s.x) - u.max.x) /
                                (r.max.x - u.max.x) -
                                (Math.min(u.min.x, s.x) - u.min.x) /
                                    (r.min.x - u.min.x),
                            (Math.max(u.max.y, s.y) - u.max.y) /
                                (r.max.y - u.max.y) -
                                (Math.min(u.min.y, s.y) - u.min.y) /
                                    (r.min.y - u.min.y)
                        ).multiplyBy(n);
                        i.panBy(l, { animate: !1 }),
                            this._draggable._newPos._add(l),
                            this._draggable._startPos._add(l),
                            H(e._icon, this._draggable._newPos),
                            this._onDrag(t),
                            (this._panRequest = K(
                                this._adjustPan.bind(this, t)
                            ));
                    }
                },
                _onDragStart: function () {
                    (this._oldLatLng = this._marker.getLatLng()),
                        this._marker.closePopup && this._marker.closePopup(),
                        this._marker.fire("movestart").fire("dragstart");
                },
                _onPreDrag: function (t) {
                    this._marker.options.autoPan &&
                        (tt(this._panRequest),
                        (this._panRequest = K(this._adjustPan.bind(this, t))));
                },
                _onDrag: function (t) {
                    var e = this._marker,
                        i = e._shadow,
                        n = bt(e._icon),
                        o = e._map.layerPointToLatLng(n);
                    i && H(i, n),
                        (e._latlng = o),
                        (t.latlng = o),
                        (t.oldLatLng = this._oldLatLng),
                        e.fire("move", t).fire("drag", t);
                },
                _onDragEnd: function (t) {
                    tt(this._panRequest),
                        delete this._oldLatLng,
                        this._marker.fire("moveend").fire("dragend", t);
                },
            }),
            le = rt.extend({
                options: {
                    icon: new Kt(),
                    interactive: !0,
                    keyboard: !0,
                    title: "",
                    alt: "Marker",
                    zIndexOffset: 0,
                    opacity: 1,
                    riseOnHover: !1,
                    riseOffset: 250,
                    pane: "markerPane",
                    shadowPane: "shadowPane",
                    bubblingMouseEvents: !1,
                    autoPanOnFocus: !0,
                    draggable: !1,
                    autoPan: !1,
                    autoPanPadding: [50, 50],
                    autoPanSpeed: 10,
                },
                initialize: function (t, e) {
                    Z(this, e), (this._latlng = C(t));
                },
                onAdd: function (t) {
                    (this._zoomAnimated =
                        this._zoomAnimated && t.options.markerZoomAnimation),
                        this._zoomAnimated &&
                            t.on("zoomanim", this._animateZoom, this),
                        this._initIcon(),
                        this.update();
                },
                onRemove: function (t) {
                    this.dragging &&
                        this.dragging.enabled() &&
                        ((this.options.draggable = !0),
                        this.dragging.removeHooks()),
                        delete this.dragging,
                        this._zoomAnimated &&
                            t.off("zoomanim", this._animateZoom, this),
                        this._removeIcon(),
                        this._removeShadow();
                },
                getEvents: function () {
                    return { zoom: this.update, viewreset: this.update };
                },
                getLatLng: function () {
                    return this._latlng;
                },
                setLatLng: function (t) {
                    var e = this._latlng;
                    return (
                        (this._latlng = C(t)),
                        this.update(),
                        this.fire("move", {
                            oldLatLng: e,
                            latlng: this._latlng,
                        })
                    );
                },
                setZIndexOffset: function (t) {
                    return (this.options.zIndexOffset = t), this.update();
                },
                getIcon: function () {
                    return this.options.icon;
                },
                setIcon: function (t) {
                    return (
                        (this.options.icon = t),
                        this._map && (this._initIcon(), this.update()),
                        this._popup &&
                            this.bindPopup(this._popup, this._popup.options),
                        this
                    );
                },
                getElement: function () {
                    return this._icon;
                },
                update: function () {
                    if (this._icon && this._map) {
                        var t = this._map
                            .latLngToLayerPoint(this._latlng)
                            .round();
                        this._setPos(t);
                    }
                    return this;
                },
                _initIcon: function () {
                    var t = this.options,
                        e =
                            "leaflet-zoom-" +
                            (this._zoomAnimated ? "animated" : "hide"),
                        i = t.icon.createIcon(this._icon),
                        n = !1;
                    i !== this._icon &&
                        (this._icon && this._removeIcon(),
                        (n = !0),
                        t.title && (i.title = t.title),
                        i.tagName === "IMG" && (i.alt = t.alt || "")),
                        b(i, e),
                        t.keyboard &&
                            ((i.tabIndex = "0"),
                            i.setAttribute("role", "button")),
                        (this._icon = i),
                        t.riseOnHover &&
                            this.on({
                                mouseover: this._bringToFront,
                                mouseout: this._resetZIndex,
                            }),
                        this.options.autoPanOnFocus &&
                            P(i, "focus", this._panOnFocus, this);
                    var o = t.icon.createShadow(this._shadow),
                        s = !1;
                    o !== this._shadow && (this._removeShadow(), (s = !0)),
                        o && (b(o, e), (o.alt = "")),
                        (this._shadow = o),
                        t.opacity < 1 && this._updateOpacity(),
                        n && this.getPane().appendChild(this._icon),
                        this._initInteraction(),
                        o &&
                            s &&
                            this.getPane(t.shadowPane).appendChild(
                                this._shadow
                            );
                },
                _removeIcon: function () {
                    this.options.riseOnHover &&
                        this.off({
                            mouseover: this._bringToFront,
                            mouseout: this._resetZIndex,
                        }),
                        this.options.autoPanOnFocus &&
                            A(this._icon, "focus", this._panOnFocus, this),
                        N(this._icon),
                        this.removeInteractiveTarget(this._icon),
                        (this._icon = null);
                },
                _removeShadow: function () {
                    this._shadow && N(this._shadow), (this._shadow = null);
                },
                _setPos: function (t) {
                    this._icon && H(this._icon, t),
                        this._shadow && H(this._shadow, t),
                        (this._zIndex = t.y + this.options.zIndexOffset),
                        this._resetZIndex();
                },
                _updateZIndex: function (t) {
                    this._icon && (this._icon.style.zIndex = this._zIndex + t);
                },
                _animateZoom: function (t) {
                    var e = this._map
                        ._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
                        .round();
                    this._setPos(e);
                },
                _initInteraction: function () {
                    if (
                        this.options.interactive &&
                        (b(this._icon, "leaflet-interactive"),
                        this.addInteractiveTarget(this._icon),
                        an)
                    ) {
                        var t = this.options.draggable;
                        this.dragging &&
                            ((t = this.dragging.enabled()),
                            this.dragging.disable()),
                            (this.dragging = new an(this)),
                            t && this.dragging.enable();
                    }
                },
                setOpacity: function (t) {
                    return (
                        (this.options.opacity = t),
                        this._map && this._updateOpacity(),
                        this
                    );
                },
                _updateOpacity: function () {
                    var t = this.options.opacity;
                    this._icon && et(this._icon, t),
                        this._shadow && et(this._shadow, t);
                },
                _bringToFront: function () {
                    this._updateZIndex(this.options.riseOffset);
                },
                _resetZIndex: function () {
                    this._updateZIndex(0);
                },
                _panOnFocus: function () {
                    var t = this._map;
                    if (t) {
                        var e = this.options.icon.options,
                            i = e.iconSize ? w(e.iconSize) : w(0, 0),
                            n = e.iconAnchor ? w(e.iconAnchor) : w(0, 0);
                        t.panInside(this._latlng, {
                            paddingTopLeft: n,
                            paddingBottomRight: i.subtract(n),
                        });
                    }
                },
                _getPopupAnchor: function () {
                    return this.options.icon.options.popupAnchor;
                },
                _getTooltipAnchor: function () {
                    return this.options.icon.options.tooltipAnchor;
                },
            });
        function Do(t, e) {
            return new le(t, e);
        }
        var xt = rt.extend({
                options: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 3,
                    opacity: 1,
                    lineCap: "round",
                    lineJoin: "round",
                    dashArray: null,
                    dashOffset: null,
                    fill: !1,
                    fillColor: null,
                    fillOpacity: 0.2,
                    fillRule: "evenodd",
                    interactive: !0,
                    bubblingMouseEvents: !0,
                },
                beforeAdd: function (t) {
                    this._renderer = t.getRenderer(this);
                },
                onAdd: function () {
                    this._renderer._initPath(this),
                        this._reset(),
                        this._renderer._addPath(this);
                },
                onRemove: function () {
                    this._renderer._removePath(this);
                },
                redraw: function () {
                    return this._map && this._renderer._updatePath(this), this;
                },
                setStyle: function (t) {
                    return (
                        Z(this, t),
                        this._renderer &&
                            (this._renderer._updateStyle(this),
                            this.options.stroke &&
                                t &&
                                Object.prototype.hasOwnProperty.call(
                                    t,
                                    "weight"
                                ) &&
                                this._updateBounds()),
                        this
                    );
                },
                bringToFront: function () {
                    return (
                        this._renderer && this._renderer._bringToFront(this),
                        this
                    );
                },
                bringToBack: function () {
                    return (
                        this._renderer && this._renderer._bringToBack(this),
                        this
                    );
                },
                getElement: function () {
                    return this._path;
                },
                _reset: function () {
                    this._project(), this._update();
                },
                _clickTolerance: function () {
                    return (
                        (this.options.stroke ? this.options.weight / 2 : 0) +
                        (this._renderer.options.tolerance || 0)
                    );
                },
            }),
            ce = xt.extend({
                options: { fill: !0, radius: 10 },
                initialize: function (t, e) {
                    Z(this, e),
                        (this._latlng = C(t)),
                        (this._radius = this.options.radius);
                },
                setLatLng: function (t) {
                    var e = this._latlng;
                    return (
                        (this._latlng = C(t)),
                        this.redraw(),
                        this.fire("move", {
                            oldLatLng: e,
                            latlng: this._latlng,
                        })
                    );
                },
                getLatLng: function () {
                    return this._latlng;
                },
                setRadius: function (t) {
                    return (
                        (this.options.radius = this._radius = t), this.redraw()
                    );
                },
                getRadius: function () {
                    return this._radius;
                },
                setStyle: function (t) {
                    var e = (t && t.radius) || this._radius;
                    return (
                        xt.prototype.setStyle.call(this, t),
                        this.setRadius(e),
                        this
                    );
                },
                _project: function () {
                    (this._point = this._map.latLngToLayerPoint(this._latlng)),
                        this._updateBounds();
                },
                _updateBounds: function () {
                    var t = this._radius,
                        e = this._radiusY || t,
                        i = this._clickTolerance(),
                        n = [t + i, e + i];
                    this._pxBounds = new B(
                        this._point.subtract(n),
                        this._point.add(n)
                    );
                },
                _update: function () {
                    this._map && this._updatePath();
                },
                _updatePath: function () {
                    this._renderer._updateCircle(this);
                },
                _empty: function () {
                    return (
                        this._radius &&
                        !this._renderer._bounds.intersects(this._pxBounds)
                    );
                },
                _containsPoint: function (t) {
                    return (
                        t.distanceTo(this._point) <=
                        this._radius + this._clickTolerance()
                    );
                },
            });
        function Ho(t, e) {
            return new ce(t, e);
        }
        var $e = ce.extend({
            initialize: function (t, e, i) {
                if (
                    (typeof e == "number" && (e = _({}, i, { radius: e })),
                    Z(this, e),
                    (this._latlng = C(t)),
                    isNaN(this.options.radius))
                )
                    throw new Error("Circle radius cannot be NaN");
                this._mRadius = this.options.radius;
            },
            setRadius: function (t) {
                return (this._mRadius = t), this.redraw();
            },
            getRadius: function () {
                return this._mRadius;
            },
            getBounds: function () {
                var t = [this._radius, this._radiusY || this._radius];
                return new X(
                    this._map.layerPointToLatLng(this._point.subtract(t)),
                    this._map.layerPointToLatLng(this._point.add(t))
                );
            },
            setStyle: xt.prototype.setStyle,
            _project: function () {
                var t = this._latlng.lng,
                    e = this._latlng.lat,
                    i = this._map,
                    n = i.options.crs;
                if (n.distance === yt.distance) {
                    var o = Math.PI / 180,
                        s = this._mRadius / yt.R / o,
                        r = i.project([e + s, t]),
                        h = i.project([e - s, t]),
                        u = r.add(h).divideBy(2),
                        l = i.unproject(u).lat,
                        m =
                            Math.acos(
                                (Math.cos(s * o) -
                                    Math.sin(e * o) * Math.sin(l * o)) /
                                    (Math.cos(e * o) * Math.cos(l * o))
                            ) / o;
                    (isNaN(m) || m === 0) &&
                        (m = s / Math.cos((Math.PI / 180) * e)),
                        (this._point = u.subtract(i.getPixelOrigin())),
                        (this._radius = isNaN(m)
                            ? 0
                            : u.x - i.project([l, t - m]).x),
                        (this._radiusY = u.y - r.y);
                } else {
                    var y = n.unproject(
                        n.project(this._latlng).subtract([this._mRadius, 0])
                    );
                    (this._point = i.latLngToLayerPoint(this._latlng)),
                        (this._radius =
                            this._point.x - i.latLngToLayerPoint(y).x);
                }
                this._updateBounds();
            },
        });
        function Fo(t, e, i) {
            return new $e(t, e, i);
        }
        var pt = xt.extend({
            options: { smoothFactor: 1, noClip: !1 },
            initialize: function (t, e) {
                Z(this, e), this._setLatLngs(t);
            },
            getLatLngs: function () {
                return this._latlngs;
            },
            setLatLngs: function (t) {
                return this._setLatLngs(t), this.redraw();
            },
            isEmpty: function () {
                return !this._latlngs.length;
            },
            closestLayerPoint: function (t) {
                for (
                    var e = 1 / 0,
                        i = null,
                        n = qt,
                        o,
                        s,
                        r = 0,
                        h = this._parts.length;
                    r < h;
                    r++
                )
                    for (
                        var u = this._parts[r], l = 1, m = u.length;
                        l < m;
                        l++
                    ) {
                        (o = u[l - 1]), (s = u[l]);
                        var y = n(t, o, s, !0);
                        y < e && ((e = y), (i = n(t, o, s)));
                    }
                return i && (i.distance = Math.sqrt(e)), i;
            },
            getCenter: function () {
                if (!this._map)
                    throw new Error(
                        "Must add layer to map before using getCenter()"
                    );
                return sn(this._defaultShape(), this._map.options.crs);
            },
            getBounds: function () {
                return this._bounds;
            },
            addLatLng: function (t, e) {
                return (
                    (e = e || this._defaultShape()),
                    (t = C(t)),
                    e.push(t),
                    this._bounds.extend(t),
                    this.redraw()
                );
            },
            _setLatLngs: function (t) {
                (this._bounds = new X()),
                    (this._latlngs = this._convertLatLngs(t));
            },
            _defaultShape: function () {
                return it(this._latlngs) ? this._latlngs : this._latlngs[0];
            },
            _convertLatLngs: function (t) {
                for (var e = [], i = it(t), n = 0, o = t.length; n < o; n++)
                    i
                        ? ((e[n] = C(t[n])), this._bounds.extend(e[n]))
                        : (e[n] = this._convertLatLngs(t[n]));
                return e;
            },
            _project: function () {
                var t = new B();
                (this._rings = []),
                    this._projectLatlngs(this._latlngs, this._rings, t),
                    this._bounds.isValid() &&
                        t.isValid() &&
                        ((this._rawPxBounds = t), this._updateBounds());
            },
            _updateBounds: function () {
                var t = this._clickTolerance(),
                    e = new x(t, t);
                this._rawPxBounds &&
                    (this._pxBounds = new B([
                        this._rawPxBounds.min.subtract(e),
                        this._rawPxBounds.max.add(e),
                    ]));
            },
            _projectLatlngs: function (t, e, i) {
                var n = t[0] instanceof O,
                    o = t.length,
                    s,
                    r;
                if (n) {
                    for (r = [], s = 0; s < o; s++)
                        (r[s] = this._map.latLngToLayerPoint(t[s])),
                            i.extend(r[s]);
                    e.push(r);
                } else for (s = 0; s < o; s++) this._projectLatlngs(t[s], e, i);
            },
            _clipPoints: function () {
                var t = this._renderer._bounds;
                if (
                    ((this._parts = []),
                    !(!this._pxBounds || !this._pxBounds.intersects(t)))
                ) {
                    if (this.options.noClip) {
                        this._parts = this._rings;
                        return;
                    }
                    var e = this._parts,
                        i,
                        n,
                        o,
                        s,
                        r,
                        h,
                        u;
                    for (i = 0, o = 0, s = this._rings.length; i < s; i++)
                        for (
                            u = this._rings[i], n = 0, r = u.length;
                            n < r - 1;
                            n++
                        )
                            (h = nn(u[n], u[n + 1], t, n, !0)),
                                h &&
                                    ((e[o] = e[o] || []),
                                    e[o].push(h[0]),
                                    (h[1] !== u[n + 1] || n === r - 2) &&
                                        (e[o].push(h[1]), o++));
                }
            },
            _simplifyPoints: function () {
                for (
                    var t = this._parts,
                        e = this.options.smoothFactor,
                        i = 0,
                        n = t.length;
                    i < n;
                    i++
                )
                    t[i] = $i(t[i], e);
            },
            _update: function () {
                this._map &&
                    (this._clipPoints(),
                    this._simplifyPoints(),
                    this._updatePath());
            },
            _updatePath: function () {
                this._renderer._updatePoly(this);
            },
            _containsPoint: function (t, e) {
                var i,
                    n,
                    o,
                    s,
                    r,
                    h,
                    u = this._clickTolerance();
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (i = 0, s = this._parts.length; i < s; i++)
                    for (
                        h = this._parts[i], n = 0, r = h.length, o = r - 1;
                        n < r;
                        o = n++
                    )
                        if (!(!e && n === 0) && tn(t, h[o], h[n]) <= u)
                            return !0;
                return !1;
            },
        });
        function Wo(t, e) {
            return new pt(t, e);
        }
        pt._flat = on;
        var Zt = pt.extend({
            options: { fill: !0 },
            isEmpty: function () {
                return !this._latlngs.length || !this._latlngs[0].length;
            },
            getCenter: function () {
                if (!this._map)
                    throw new Error(
                        "Must add layer to map before using getCenter()"
                    );
                return Qi(this._defaultShape(), this._map.options.crs);
            },
            _convertLatLngs: function (t) {
                var e = pt.prototype._convertLatLngs.call(this, t),
                    i = e.length;
                return (
                    i >= 2 &&
                        e[0] instanceof O &&
                        e[0].equals(e[i - 1]) &&
                        e.pop(),
                    e
                );
            },
            _setLatLngs: function (t) {
                pt.prototype._setLatLngs.call(this, t),
                    it(this._latlngs) && (this._latlngs = [this._latlngs]);
            },
            _defaultShape: function () {
                return it(this._latlngs[0])
                    ? this._latlngs[0]
                    : this._latlngs[0][0];
            },
            _clipPoints: function () {
                var t = this._renderer._bounds,
                    e = this.options.weight,
                    i = new x(e, e);
                if (
                    ((t = new B(t.min.subtract(i), t.max.add(i))),
                    (this._parts = []),
                    !(!this._pxBounds || !this._pxBounds.intersects(t)))
                ) {
                    if (this.options.noClip) {
                        this._parts = this._rings;
                        return;
                    }
                    for (var n = 0, o = this._rings.length, s; n < o; n++)
                        (s = Ji(this._rings[n], t, !0)),
                            s.length && this._parts.push(s);
                }
            },
            _updatePath: function () {
                this._renderer._updatePoly(this, !0);
            },
            _containsPoint: function (t) {
                var e = !1,
                    i,
                    n,
                    o,
                    s,
                    r,
                    h,
                    u,
                    l;
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (s = 0, u = this._parts.length; s < u; s++)
                    for (
                        i = this._parts[s], r = 0, l = i.length, h = l - 1;
                        r < l;
                        h = r++
                    )
                        (n = i[r]),
                            (o = i[h]),
                            n.y > t.y != o.y > t.y &&
                                t.x <
                                    ((o.x - n.x) * (t.y - n.y)) / (o.y - n.y) +
                                        n.x &&
                                (e = !e);
                return e || pt.prototype._containsPoint.call(this, t, !0);
            },
        });
        function Uo(t, e) {
            return new Zt(t, e);
        }
        var gt = mt.extend({
            initialize: function (t, e) {
                Z(this, e), (this._layers = {}), t && this.addData(t);
            },
            addData: function (t) {
                var e = ot(t) ? t : t.features,
                    i,
                    n,
                    o;
                if (e) {
                    for (i = 0, n = e.length; i < n; i++)
                        (o = e[i]),
                            (o.geometries ||
                                o.geometry ||
                                o.features ||
                                o.coordinates) &&
                                this.addData(o);
                    return this;
                }
                var s = this.options;
                if (s.filter && !s.filter(t)) return this;
                var r = fe(t, s);
                return r
                    ? ((r.feature = me(t)),
                      (r.defaultOptions = r.options),
                      this.resetStyle(r),
                      s.onEachFeature && s.onEachFeature(t, r),
                      this.addLayer(r))
                    : this;
            },
            resetStyle: function (t) {
                return t === void 0
                    ? this.eachLayer(this.resetStyle, this)
                    : ((t.options = _({}, t.defaultOptions)),
                      this._setLayerStyle(t, this.options.style),
                      this);
            },
            setStyle: function (t) {
                return this.eachLayer(function (e) {
                    this._setLayerStyle(e, t);
                }, this);
            },
            _setLayerStyle: function (t, e) {
                t.setStyle &&
                    (typeof e == "function" && (e = e(t.feature)),
                    t.setStyle(e));
            },
        });
        function fe(t, e) {
            var i = t.type === "Feature" ? t.geometry : t,
                n = i ? i.coordinates : null,
                o = [],
                s = e && e.pointToLayer,
                r = (e && e.coordsToLatLng) || ti,
                h,
                u,
                l,
                m;
            if (!n && !i) return null;
            switch (i.type) {
                case "Point":
                    return (h = r(n)), hn(s, t, h, e);
                case "MultiPoint":
                    for (l = 0, m = n.length; l < m; l++)
                        (h = r(n[l])), o.push(hn(s, t, h, e));
                    return new mt(o);
                case "LineString":
                case "MultiLineString":
                    return (
                        (u = de(n, i.type === "LineString" ? 0 : 1, r)),
                        new pt(u, e)
                    );
                case "Polygon":
                case "MultiPolygon":
                    return (
                        (u = de(n, i.type === "Polygon" ? 1 : 2, r)),
                        new Zt(u, e)
                    );
                case "GeometryCollection":
                    for (l = 0, m = i.geometries.length; l < m; l++) {
                        var y = fe(
                            {
                                geometry: i.geometries[l],
                                type: "Feature",
                                properties: t.properties,
                            },
                            e
                        );
                        y && o.push(y);
                    }
                    return new mt(o);
                case "FeatureCollection":
                    for (l = 0, m = i.features.length; l < m; l++) {
                        var T = fe(i.features[l], e);
                        T && o.push(T);
                    }
                    return new mt(o);
                default:
                    throw new Error("Invalid GeoJSON object.");
            }
        }
        function hn(t, e, i, n) {
            return t ? t(e, i) : new le(i, n && n.markersInheritOptions && n);
        }
        function ti(t) {
            return new O(t[1], t[0], t[2]);
        }
        function de(t, e, i) {
            for (var n = [], o = 0, s = t.length, r; o < s; o++)
                (r = e ? de(t[o], e - 1, i) : (i || ti)(t[o])), n.push(r);
            return n;
        }
        function ei(t, e) {
            return (
                (t = C(t)),
                t.alt !== void 0
                    ? [$(t.lng, e), $(t.lat, e), $(t.alt, e)]
                    : [$(t.lng, e), $(t.lat, e)]
            );
        }
        function _e(t, e, i, n) {
            for (var o = [], s = 0, r = t.length; s < r; s++)
                o.push(e ? _e(t[s], it(t[s]) ? 0 : e - 1, i, n) : ei(t[s], n));
            return !e && i && o.length > 0 && o.push(o[0].slice()), o;
        }
        function At(t, e) {
            return t.feature ? _({}, t.feature, { geometry: e }) : me(e);
        }
        function me(t) {
            return t.type === "Feature" || t.type === "FeatureCollection"
                ? t
                : { type: "Feature", properties: {}, geometry: t };
        }
        var ii = {
            toGeoJSON: function (t) {
                return At(this, {
                    type: "Point",
                    coordinates: ei(this.getLatLng(), t),
                });
            },
        };
        le.include(ii),
            $e.include(ii),
            ce.include(ii),
            pt.include({
                toGeoJSON: function (t) {
                    var e = !it(this._latlngs),
                        i = _e(this._latlngs, e ? 1 : 0, !1, t);
                    return At(this, {
                        type: (e ? "Multi" : "") + "LineString",
                        coordinates: i,
                    });
                },
            }),
            Zt.include({
                toGeoJSON: function (t) {
                    var e = !it(this._latlngs),
                        i = e && !it(this._latlngs[0]),
                        n = _e(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
                    return (
                        e || (n = [n]),
                        At(this, {
                            type: (i ? "Multi" : "") + "Polygon",
                            coordinates: n,
                        })
                    );
                },
            }),
            kt.include({
                toMultiPoint: function (t) {
                    var e = [];
                    return (
                        this.eachLayer(function (i) {
                            e.push(i.toGeoJSON(t).geometry.coordinates);
                        }),
                        At(this, { type: "MultiPoint", coordinates: e })
                    );
                },
                toGeoJSON: function (t) {
                    var e =
                        this.feature &&
                        this.feature.geometry &&
                        this.feature.geometry.type;
                    if (e === "MultiPoint") return this.toMultiPoint(t);
                    var i = e === "GeometryCollection",
                        n = [];
                    return (
                        this.eachLayer(function (o) {
                            if (o.toGeoJSON) {
                                var s = o.toGeoJSON(t);
                                if (i) n.push(s.geometry);
                                else {
                                    var r = me(s);
                                    r.type === "FeatureCollection"
                                        ? n.push.apply(n, r.features)
                                        : n.push(r);
                                }
                            }
                        }),
                        i
                            ? At(this, {
                                  geometries: n,
                                  type: "GeometryCollection",
                              })
                            : { type: "FeatureCollection", features: n }
                    );
                },
            });
        function un(t, e) {
            return new gt(t, e);
        }
        var jo = un,
            pe = rt.extend({
                options: {
                    opacity: 1,
                    alt: "",
                    interactive: !1,
                    crossOrigin: !1,
                    errorOverlayUrl: "",
                    zIndex: 1,
                    className: "",
                },
                initialize: function (t, e, i) {
                    (this._url = t), (this._bounds = D(e)), Z(this, i);
                },
                onAdd: function () {
                    this._image ||
                        (this._initImage(),
                        this.options.opacity < 1 && this._updateOpacity()),
                        this.options.interactive &&
                            (b(this._image, "leaflet-interactive"),
                            this.addInteractiveTarget(this._image)),
                        this.getPane().appendChild(this._image),
                        this._reset();
                },
                onRemove: function () {
                    N(this._image),
                        this.options.interactive &&
                            this.removeInteractiveTarget(this._image);
                },
                setOpacity: function (t) {
                    return (
                        (this.options.opacity = t),
                        this._image && this._updateOpacity(),
                        this
                    );
                },
                setStyle: function (t) {
                    return t.opacity && this.setOpacity(t.opacity), this;
                },
                bringToFront: function () {
                    return this._map && zt(this._image), this;
                },
                bringToBack: function () {
                    return this._map && Et(this._image), this;
                },
                setUrl: function (t) {
                    return (
                        (this._url = t),
                        this._image && (this._image.src = t),
                        this
                    );
                },
                setBounds: function (t) {
                    return (
                        (this._bounds = D(t)), this._map && this._reset(), this
                    );
                },
                getEvents: function () {
                    var t = { zoom: this._reset, viewreset: this._reset };
                    return (
                        this._zoomAnimated && (t.zoomanim = this._animateZoom),
                        t
                    );
                },
                setZIndex: function (t) {
                    return (
                        (this.options.zIndex = t), this._updateZIndex(), this
                    );
                },
                getBounds: function () {
                    return this._bounds;
                },
                getElement: function () {
                    return this._image;
                },
                _initImage: function () {
                    var t = this._url.tagName === "IMG",
                        e = (this._image = t ? this._url : E("img"));
                    if (
                        (b(e, "leaflet-image-layer"),
                        this._zoomAnimated && b(e, "leaflet-zoom-animated"),
                        this.options.className && b(e, this.options.className),
                        (e.onselectstart = I),
                        (e.onmousemove = I),
                        (e.onload = g(this.fire, this, "load")),
                        (e.onerror = g(this._overlayOnError, this, "error")),
                        (this.options.crossOrigin ||
                            this.options.crossOrigin === "") &&
                            (e.crossOrigin =
                                this.options.crossOrigin === !0
                                    ? ""
                                    : this.options.crossOrigin),
                        this.options.zIndex && this._updateZIndex(),
                        t)
                    ) {
                        this._url = e.src;
                        return;
                    }
                    (e.src = this._url), (e.alt = this.options.alt);
                },
                _animateZoom: function (t) {
                    var e = this._map.getZoomScale(t.zoom),
                        i = this._map._latLngBoundsToNewLayerBounds(
                            this._bounds,
                            t.zoom,
                            t.center
                        ).min;
                    Lt(this._image, i, e);
                },
                _reset: function () {
                    var t = this._image,
                        e = new B(
                            this._map.latLngToLayerPoint(
                                this._bounds.getNorthWest()
                            ),
                            this._map.latLngToLayerPoint(
                                this._bounds.getSouthEast()
                            )
                        ),
                        i = e.getSize();
                    H(t, e.min),
                        (t.style.width = i.x + "px"),
                        (t.style.height = i.y + "px");
                },
                _updateOpacity: function () {
                    et(this._image, this.options.opacity);
                },
                _updateZIndex: function () {
                    this._image &&
                        this.options.zIndex !== void 0 &&
                        this.options.zIndex !== null &&
                        (this._image.style.zIndex = this.options.zIndex);
                },
                _overlayOnError: function () {
                    this.fire("error");
                    var t = this.options.errorOverlayUrl;
                    t &&
                        this._url !== t &&
                        ((this._url = t), (this._image.src = t));
                },
                getCenter: function () {
                    return this._bounds.getCenter();
                },
            }),
            Go = function (t, e, i) {
                return new pe(t, e, i);
            },
            ln = pe.extend({
                options: {
                    autoplay: !0,
                    loop: !0,
                    keepAspectRatio: !0,
                    muted: !1,
                    playsInline: !0,
                },
                _initImage: function () {
                    var t = this._url.tagName === "VIDEO",
                        e = (this._image = t ? this._url : E("video"));
                    if (
                        (b(e, "leaflet-image-layer"),
                        this._zoomAnimated && b(e, "leaflet-zoom-animated"),
                        this.options.className && b(e, this.options.className),
                        (e.onselectstart = I),
                        (e.onmousemove = I),
                        (e.onloadeddata = g(this.fire, this, "load")),
                        t)
                    ) {
                        for (
                            var i = e.getElementsByTagName("source"),
                                n = [],
                                o = 0;
                            o < i.length;
                            o++
                        )
                            n.push(i[o].src);
                        this._url = i.length > 0 ? n : [e.src];
                        return;
                    }
                    ot(this._url) || (this._url = [this._url]),
                        !this.options.keepAspectRatio &&
                            Object.prototype.hasOwnProperty.call(
                                e.style,
                                "objectFit"
                            ) &&
                            (e.style.objectFit = "fill"),
                        (e.autoplay = !!this.options.autoplay),
                        (e.loop = !!this.options.loop),
                        (e.muted = !!this.options.muted),
                        (e.playsInline = !!this.options.playsInline);
                    for (var s = 0; s < this._url.length; s++) {
                        var r = E("source");
                        (r.src = this._url[s]), e.appendChild(r);
                    }
                },
            });
        function Vo(t, e, i) {
            return new ln(t, e, i);
        }
        var cn = pe.extend({
            _initImage: function () {
                var t = (this._image = this._url);
                b(t, "leaflet-image-layer"),
                    this._zoomAnimated && b(t, "leaflet-zoom-animated"),
                    this.options.className && b(t, this.options.className),
                    (t.onselectstart = I),
                    (t.onmousemove = I);
            },
        });
        function qo(t, e, i) {
            return new cn(t, e, i);
        }
        var ct = rt.extend({
            options: {
                interactive: !1,
                offset: [0, 0],
                className: "",
                pane: void 0,
                content: "",
            },
            initialize: function (t, e) {
                t && (t instanceof O || ot(t))
                    ? ((this._latlng = C(t)), Z(this, e))
                    : (Z(this, t), (this._source = e)),
                    this.options.content &&
                        (this._content = this.options.content);
            },
            openOn: function (t) {
                return (
                    (t = arguments.length ? t : this._source._map),
                    t.hasLayer(this) || t.addLayer(this),
                    this
                );
            },
            close: function () {
                return this._map && this._map.removeLayer(this), this;
            },
            toggle: function (t) {
                return (
                    this._map
                        ? this.close()
                        : (arguments.length
                              ? (this._source = t)
                              : (t = this._source),
                          this._prepareOpen(),
                          this.openOn(t._map)),
                    this
                );
            },
            onAdd: function (t) {
                (this._zoomAnimated = t._zoomAnimated),
                    this._container || this._initLayout(),
                    t._fadeAnimated && et(this._container, 0),
                    clearTimeout(this._removeTimeout),
                    this.getPane().appendChild(this._container),
                    this.update(),
                    t._fadeAnimated && et(this._container, 1),
                    this.bringToFront(),
                    this.options.interactive &&
                        (b(this._container, "leaflet-interactive"),
                        this.addInteractiveTarget(this._container));
            },
            onRemove: function (t) {
                t._fadeAnimated
                    ? (et(this._container, 0),
                      (this._removeTimeout = setTimeout(
                          g(N, void 0, this._container),
                          200
                      )))
                    : N(this._container),
                    this.options.interactive &&
                        (R(this._container, "leaflet-interactive"),
                        this.removeInteractiveTarget(this._container));
            },
            getLatLng: function () {
                return this._latlng;
            },
            setLatLng: function (t) {
                return (
                    (this._latlng = C(t)),
                    this._map && (this._updatePosition(), this._adjustPan()),
                    this
                );
            },
            getContent: function () {
                return this._content;
            },
            setContent: function (t) {
                return (this._content = t), this.update(), this;
            },
            getElement: function () {
                return this._container;
            },
            update: function () {
                this._map &&
                    ((this._container.style.visibility = "hidden"),
                    this._updateContent(),
                    this._updateLayout(),
                    this._updatePosition(),
                    (this._container.style.visibility = ""),
                    this._adjustPan());
            },
            getEvents: function () {
                var t = {
                    zoom: this._updatePosition,
                    viewreset: this._updatePosition,
                };
                return (
                    this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                );
            },
            isOpen: function () {
                return !!this._map && this._map.hasLayer(this);
            },
            bringToFront: function () {
                return this._map && zt(this._container), this;
            },
            bringToBack: function () {
                return this._map && Et(this._container), this;
            },
            _prepareOpen: function (t) {
                var e = this._source;
                if (!e._map) return !1;
                if (e instanceof mt) {
                    e = null;
                    var i = this._source._layers;
                    for (var n in i)
                        if (i[n]._map) {
                            e = i[n];
                            break;
                        }
                    if (!e) return !1;
                    this._source = e;
                }
                if (!t)
                    if (e.getCenter) t = e.getCenter();
                    else if (e.getLatLng) t = e.getLatLng();
                    else if (e.getBounds) t = e.getBounds().getCenter();
                    else throw new Error("Unable to get source layer LatLng.");
                return this.setLatLng(t), this._map && this.update(), !0;
            },
            _updateContent: function () {
                if (this._content) {
                    var t = this._contentNode,
                        e =
                            typeof this._content == "function"
                                ? this._content(this._source || this)
                                : this._content;
                    if (typeof e == "string") t.innerHTML = e;
                    else {
                        for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
                        t.appendChild(e);
                    }
                    this.fire("contentupdate");
                }
            },
            _updatePosition: function () {
                if (this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng),
                        e = w(this.options.offset),
                        i = this._getAnchor();
                    this._zoomAnimated
                        ? H(this._container, t.add(i))
                        : (e = e.add(t).add(i));
                    var n = (this._containerBottom = -e.y),
                        o = (this._containerLeft =
                            -Math.round(this._containerWidth / 2) + e.x);
                    (this._container.style.bottom = n + "px"),
                        (this._container.style.left = o + "px");
                }
            },
            _getAnchor: function () {
                return [0, 0];
            },
        });
        M.include({
            _initOverlay: function (t, e, i, n) {
                var o = e;
                return (
                    o instanceof t || (o = new t(n).setContent(e)),
                    i && o.setLatLng(i),
                    o
                );
            },
        }),
            rt.include({
                _initOverlay: function (t, e, i, n) {
                    var o = i;
                    return (
                        o instanceof t
                            ? (Z(o, n), (o._source = this))
                            : ((o = e && !n ? e : new t(n, this)),
                              o.setContent(i)),
                        o
                    );
                },
            });
        var ge = ct.extend({
                options: {
                    pane: "popupPane",
                    offset: [0, 7],
                    maxWidth: 300,
                    minWidth: 50,
                    maxHeight: null,
                    autoPan: !0,
                    autoPanPaddingTopLeft: null,
                    autoPanPaddingBottomRight: null,
                    autoPanPadding: [5, 5],
                    keepInView: !1,
                    closeButton: !0,
                    autoClose: !0,
                    closeOnEscapeKey: !0,
                    className: "",
                },
                openOn: function (t) {
                    return (
                        (t = arguments.length ? t : this._source._map),
                        !t.hasLayer(this) &&
                            t._popup &&
                            t._popup.options.autoClose &&
                            t.removeLayer(t._popup),
                        (t._popup = this),
                        ct.prototype.openOn.call(this, t)
                    );
                },
                onAdd: function (t) {
                    ct.prototype.onAdd.call(this, t),
                        t.fire("popupopen", { popup: this }),
                        this._source &&
                            (this._source.fire(
                                "popupopen",
                                { popup: this },
                                !0
                            ),
                            this._source instanceof xt ||
                                this._source.on("preclick", Tt));
                },
                onRemove: function (t) {
                    ct.prototype.onRemove.call(this, t),
                        t.fire("popupclose", { popup: this }),
                        this._source &&
                            (this._source.fire(
                                "popupclose",
                                { popup: this },
                                !0
                            ),
                            this._source instanceof xt ||
                                this._source.off("preclick", Tt));
                },
                getEvents: function () {
                    var t = ct.prototype.getEvents.call(this);
                    return (
                        (this.options.closeOnClick !== void 0
                            ? this.options.closeOnClick
                            : this._map.options.closePopupOnClick) &&
                            (t.preclick = this.close),
                        this.options.keepInView &&
                            (t.moveend = this._adjustPan),
                        t
                    );
                },
                _initLayout: function () {
                    var t = "leaflet-popup",
                        e = (this._container = E(
                            "div",
                            t +
                                " " +
                                (this.options.className || "") +
                                " leaflet-zoom-animated"
                        )),
                        i = (this._wrapper = E(
                            "div",
                            t + "-content-wrapper",
                            e
                        ));
                    if (
                        ((this._contentNode = E("div", t + "-content", i)),
                        Gt(e),
                        Ge(this._contentNode),
                        P(e, "contextmenu", Tt),
                        (this._tipContainer = E(
                            "div",
                            t + "-tip-container",
                            e
                        )),
                        (this._tip = E("div", t + "-tip", this._tipContainer)),
                        this.options.closeButton)
                    ) {
                        var n = (this._closeButton = E(
                            "a",
                            t + "-close-button",
                            e
                        ));
                        n.setAttribute("role", "button"),
                            n.setAttribute("aria-label", "Close popup"),
                            (n.href = "#close"),
                            (n.innerHTML =
                                '<span aria-hidden="true">&#215;</span>'),
                            P(
                                n,
                                "click",
                                function (o) {
                                    j(o), this.close();
                                },
                                this
                            );
                    }
                },
                _updateLayout: function () {
                    var t = this._contentNode,
                        e = t.style;
                    (e.width = ""), (e.whiteSpace = "nowrap");
                    var i = t.offsetWidth;
                    (i = Math.min(i, this.options.maxWidth)),
                        (i = Math.max(i, this.options.minWidth)),
                        (e.width = i + 1 + "px"),
                        (e.whiteSpace = ""),
                        (e.height = "");
                    var n = t.offsetHeight,
                        o = this.options.maxHeight,
                        s = "leaflet-popup-scrolled";
                    o && n > o ? ((e.height = o + "px"), b(t, s)) : R(t, s),
                        (this._containerWidth = this._container.offsetWidth);
                },
                _animateZoom: function (t) {
                    var e = this._map._latLngToNewLayerPoint(
                            this._latlng,
                            t.zoom,
                            t.center
                        ),
                        i = this._getAnchor();
                    H(this._container, e.add(i));
                },
                _adjustPan: function () {
                    if (this.options.autoPan) {
                        if (
                            (this._map._panAnim && this._map._panAnim.stop(),
                            this._autopanning)
                        ) {
                            this._autopanning = !1;
                            return;
                        }
                        var t = this._map,
                            e =
                                parseInt(
                                    Ft(this._container, "marginBottom"),
                                    10
                                ) || 0,
                            i = this._container.offsetHeight + e,
                            n = this._containerWidth,
                            o = new x(
                                this._containerLeft,
                                -i - this._containerBottom
                            );
                        o._add(bt(this._container));
                        var s = t.layerPointToContainerPoint(o),
                            r = w(this.options.autoPanPadding),
                            h = w(this.options.autoPanPaddingTopLeft || r),
                            u = w(this.options.autoPanPaddingBottomRight || r),
                            l = t.getSize(),
                            m = 0,
                            y = 0;
                        s.x + n + u.x > l.x && (m = s.x + n - l.x + u.x),
                            s.x - m - h.x < 0 && (m = s.x - h.x),
                            s.y + i + u.y > l.y && (y = s.y + i - l.y + u.y),
                            s.y - y - h.y < 0 && (y = s.y - h.y),
                            (m || y) &&
                                (this.options.keepInView &&
                                    (this._autopanning = !0),
                                t.fire("autopanstart").panBy([m, y]));
                    }
                },
                _getAnchor: function () {
                    return w(
                        this._source && this._source._getPopupAnchor
                            ? this._source._getPopupAnchor()
                            : [0, 0]
                    );
                },
            }),
            Ko = function (t, e) {
                return new ge(t, e);
            };
        M.mergeOptions({ closePopupOnClick: !0 }),
            M.include({
                openPopup: function (t, e, i) {
                    return this._initOverlay(ge, t, e, i).openOn(this), this;
                },
                closePopup: function (t) {
                    return (
                        (t = arguments.length ? t : this._popup),
                        t && t.close(),
                        this
                    );
                },
            }),
            rt.include({
                bindPopup: function (t, e) {
                    return (
                        (this._popup = this._initOverlay(
                            ge,
                            this._popup,
                            t,
                            e
                        )),
                        this._popupHandlersAdded ||
                            (this.on({
                                click: this._openPopup,
                                keypress: this._onKeyPress,
                                remove: this.closePopup,
                                move: this._movePopup,
                            }),
                            (this._popupHandlersAdded = !0)),
                        this
                    );
                },
                unbindPopup: function () {
                    return (
                        this._popup &&
                            (this.off({
                                click: this._openPopup,
                                keypress: this._onKeyPress,
                                remove: this.closePopup,
                                move: this._movePopup,
                            }),
                            (this._popupHandlersAdded = !1),
                            (this._popup = null)),
                        this
                    );
                },
                openPopup: function (t) {
                    return (
                        this._popup &&
                            (this instanceof mt || (this._popup._source = this),
                            this._popup._prepareOpen(t || this._latlng) &&
                                this._popup.openOn(this._map)),
                        this
                    );
                },
                closePopup: function () {
                    return this._popup && this._popup.close(), this;
                },
                togglePopup: function () {
                    return this._popup && this._popup.toggle(this), this;
                },
                isPopupOpen: function () {
                    return this._popup ? this._popup.isOpen() : !1;
                },
                setPopupContent: function (t) {
                    return this._popup && this._popup.setContent(t), this;
                },
                getPopup: function () {
                    return this._popup;
                },
                _openPopup: function (t) {
                    if (!(!this._popup || !this._map)) {
                        Ct(t);
                        var e = t.layer || t.target;
                        if (this._popup._source === e && !(e instanceof xt)) {
                            this._map.hasLayer(this._popup)
                                ? this.closePopup()
                                : this.openPopup(t.latlng);
                            return;
                        }
                        (this._popup._source = e), this.openPopup(t.latlng);
                    }
                },
                _movePopup: function (t) {
                    this._popup.setLatLng(t.latlng);
                },
                _onKeyPress: function (t) {
                    t.originalEvent.keyCode === 13 && this._openPopup(t);
                },
            });
        var ve = ct.extend({
                options: {
                    pane: "tooltipPane",
                    offset: [0, 0],
                    direction: "auto",
                    permanent: !1,
                    sticky: !1,
                    opacity: 0.9,
                },
                onAdd: function (t) {
                    ct.prototype.onAdd.call(this, t),
                        this.setOpacity(this.options.opacity),
                        t.fire("tooltipopen", { tooltip: this }),
                        this._source &&
                            (this.addEventParent(this._source),
                            this._source.fire(
                                "tooltipopen",
                                { tooltip: this },
                                !0
                            ));
                },
                onRemove: function (t) {
                    ct.prototype.onRemove.call(this, t),
                        t.fire("tooltipclose", { tooltip: this }),
                        this._source &&
                            (this.removeEventParent(this._source),
                            this._source.fire(
                                "tooltipclose",
                                { tooltip: this },
                                !0
                            ));
                },
                getEvents: function () {
                    var t = ct.prototype.getEvents.call(this);
                    return (
                        this.options.permanent || (t.preclick = this.close), t
                    );
                },
                _initLayout: function () {
                    var t = "leaflet-tooltip",
                        e =
                            t +
                            " " +
                            (this.options.className || "") +
                            " leaflet-zoom-" +
                            (this._zoomAnimated ? "animated" : "hide");
                    (this._contentNode = this._container = E("div", e)),
                        this._container.setAttribute("role", "tooltip"),
                        this._container.setAttribute(
                            "id",
                            "leaflet-tooltip-" + v(this)
                        );
                },
                _updateLayout: function () {},
                _adjustPan: function () {},
                _setPosition: function (t) {
                    var e,
                        i,
                        n = this._map,
                        o = this._container,
                        s = n.latLngToContainerPoint(n.getCenter()),
                        r = n.layerPointToContainerPoint(t),
                        h = this.options.direction,
                        u = o.offsetWidth,
                        l = o.offsetHeight,
                        m = w(this.options.offset),
                        y = this._getAnchor();
                    h === "top"
                        ? ((e = u / 2), (i = l))
                        : h === "bottom"
                        ? ((e = u / 2), (i = 0))
                        : h === "center"
                        ? ((e = u / 2), (i = l / 2))
                        : h === "right"
                        ? ((e = 0), (i = l / 2))
                        : h === "left"
                        ? ((e = u), (i = l / 2))
                        : r.x < s.x
                        ? ((h = "right"), (e = 0), (i = l / 2))
                        : ((h = "left"),
                          (e = u + (m.x + y.x) * 2),
                          (i = l / 2)),
                        (t = t.subtract(w(e, i, !0)).add(m).add(y)),
                        R(o, "leaflet-tooltip-right"),
                        R(o, "leaflet-tooltip-left"),
                        R(o, "leaflet-tooltip-top"),
                        R(o, "leaflet-tooltip-bottom"),
                        b(o, "leaflet-tooltip-" + h),
                        H(o, t);
                },
                _updatePosition: function () {
                    var t = this._map.latLngToLayerPoint(this._latlng);
                    this._setPosition(t);
                },
                setOpacity: function (t) {
                    (this.options.opacity = t),
                        this._container && et(this._container, t);
                },
                _animateZoom: function (t) {
                    var e = this._map._latLngToNewLayerPoint(
                        this._latlng,
                        t.zoom,
                        t.center
                    );
                    this._setPosition(e);
                },
                _getAnchor: function () {
                    return w(
                        this._source &&
                            this._source._getTooltipAnchor &&
                            !this.options.sticky
                            ? this._source._getTooltipAnchor()
                            : [0, 0]
                    );
                },
            }),
            Yo = function (t, e) {
                return new ve(t, e);
            };
        M.include({
            openTooltip: function (t, e, i) {
                return this._initOverlay(ve, t, e, i).openOn(this), this;
            },
            closeTooltip: function (t) {
                return t.close(), this;
            },
        }),
            rt.include({
                bindTooltip: function (t, e) {
                    return (
                        this._tooltip &&
                            this.isTooltipOpen() &&
                            this.unbindTooltip(),
                        (this._tooltip = this._initOverlay(
                            ve,
                            this._tooltip,
                            t,
                            e
                        )),
                        this._initTooltipInteractions(),
                        this._tooltip.options.permanent &&
                            this._map &&
                            this._map.hasLayer(this) &&
                            this.openTooltip(),
                        this
                    );
                },
                unbindTooltip: function () {
                    return (
                        this._tooltip &&
                            (this._initTooltipInteractions(!0),
                            this.closeTooltip(),
                            (this._tooltip = null)),
                        this
                    );
                },
                _initTooltipInteractions: function (t) {
                    if (!(!t && this._tooltipHandlersAdded)) {
                        var e = t ? "off" : "on",
                            i = {
                                remove: this.closeTooltip,
                                move: this._moveTooltip,
                            };
                        this._tooltip.options.permanent
                            ? (i.add = this._openTooltip)
                            : ((i.mouseover = this._openTooltip),
                              (i.mouseout = this.closeTooltip),
                              (i.click = this._openTooltip),
                              this._map
                                  ? this._addFocusListeners()
                                  : (i.add = this._addFocusListeners)),
                            this._tooltip.options.sticky &&
                                (i.mousemove = this._moveTooltip),
                            this[e](i),
                            (this._tooltipHandlersAdded = !t);
                    }
                },
                openTooltip: function (t) {
                    return (
                        this._tooltip &&
                            (this instanceof mt ||
                                (this._tooltip._source = this),
                            this._tooltip._prepareOpen(t) &&
                                (this._tooltip.openOn(this._map),
                                this.getElement
                                    ? this._setAriaDescribedByOnLayer(this)
                                    : this.eachLayer &&
                                      this.eachLayer(
                                          this._setAriaDescribedByOnLayer,
                                          this
                                      ))),
                        this
                    );
                },
                closeTooltip: function () {
                    if (this._tooltip) return this._tooltip.close();
                },
                toggleTooltip: function () {
                    return this._tooltip && this._tooltip.toggle(this), this;
                },
                isTooltipOpen: function () {
                    return this._tooltip.isOpen();
                },
                setTooltipContent: function (t) {
                    return this._tooltip && this._tooltip.setContent(t), this;
                },
                getTooltip: function () {
                    return this._tooltip;
                },
                _addFocusListeners: function () {
                    this.getElement
                        ? this._addFocusListenersOnLayer(this)
                        : this.eachLayer &&
                          this.eachLayer(this._addFocusListenersOnLayer, this);
                },
                _addFocusListenersOnLayer: function (t) {
                    var e = typeof t.getElement == "function" && t.getElement();
                    e &&
                        (P(
                            e,
                            "focus",
                            function () {
                                (this._tooltip._source = t), this.openTooltip();
                            },
                            this
                        ),
                        P(e, "blur", this.closeTooltip, this));
                },
                _setAriaDescribedByOnLayer: function (t) {
                    var e = typeof t.getElement == "function" && t.getElement();
                    e &&
                        e.setAttribute(
                            "aria-describedby",
                            this._tooltip._container.id
                        );
                },
                _openTooltip: function (t) {
                    if (!(!this._tooltip || !this._map)) {
                        if (
                            this._map.dragging &&
                            this._map.dragging.moving() &&
                            !this._openOnceFlag
                        ) {
                            this._openOnceFlag = !0;
                            var e = this;
                            this._map.once("moveend", function () {
                                (e._openOnceFlag = !1), e._openTooltip(t);
                            });
                            return;
                        }
                        (this._tooltip._source = t.layer || t.target),
                            this.openTooltip(
                                this._tooltip.options.sticky ? t.latlng : void 0
                            );
                    }
                },
                _moveTooltip: function (t) {
                    var e = t.latlng,
                        i,
                        n;
                    this._tooltip.options.sticky &&
                        t.originalEvent &&
                        ((i = this._map.mouseEventToContainerPoint(
                            t.originalEvent
                        )),
                        (n = this._map.containerPointToLayerPoint(i)),
                        (e = this._map.layerPointToLatLng(n))),
                        this._tooltip.setLatLng(e);
                },
            });
        var fn = Ot.extend({
            options: {
                iconSize: [12, 12],
                html: !1,
                bgPos: null,
                className: "leaflet-div-icon",
            },
            createIcon: function (t) {
                var e =
                        t && t.tagName === "DIV"
                            ? t
                            : document.createElement("div"),
                    i = this.options;
                if (
                    (i.html instanceof Element
                        ? (oe(e), e.appendChild(i.html))
                        : (e.innerHTML = i.html !== !1 ? i.html : ""),
                    i.bgPos)
                ) {
                    var n = w(i.bgPos);
                    e.style.backgroundPosition = -n.x + "px " + -n.y + "px";
                }
                return this._setIconStyles(e, "icon"), e;
            },
            createShadow: function () {
                return null;
            },
        });
        function Xo(t) {
            return new fn(t);
        }
        Ot.Default = Kt;
        var Yt = rt.extend({
            options: {
                tileSize: 256,
                opacity: 1,
                updateWhenIdle: p.mobile,
                updateWhenZooming: !0,
                updateInterval: 200,
                zIndex: 1,
                bounds: null,
                minZoom: 0,
                maxZoom: void 0,
                maxNativeZoom: void 0,
                minNativeZoom: void 0,
                noWrap: !1,
                pane: "tilePane",
                className: "",
                keepBuffer: 2,
            },
            initialize: function (t) {
                Z(this, t);
            },
            onAdd: function () {
                this._initContainer(),
                    (this._levels = {}),
                    (this._tiles = {}),
                    this._resetView();
            },
            beforeAdd: function (t) {
                t._addZoomLimit(this);
            },
            onRemove: function (t) {
                this._removeAllTiles(),
                    N(this._container),
                    t._removeZoomLimit(this),
                    (this._container = null),
                    (this._tileZoom = void 0);
            },
            bringToFront: function () {
                return (
                    this._map &&
                        (zt(this._container), this._setAutoZIndex(Math.max)),
                    this
                );
            },
            bringToBack: function () {
                return (
                    this._map &&
                        (Et(this._container), this._setAutoZIndex(Math.min)),
                    this
                );
            },
            getContainer: function () {
                return this._container;
            },
            setOpacity: function (t) {
                return (this.options.opacity = t), this._updateOpacity(), this;
            },
            setZIndex: function (t) {
                return (this.options.zIndex = t), this._updateZIndex(), this;
            },
            isLoading: function () {
                return this._loading;
            },
            redraw: function () {
                if (this._map) {
                    this._removeAllTiles();
                    var t = this._clampZoom(this._map.getZoom());
                    t !== this._tileZoom &&
                        ((this._tileZoom = t), this._updateLevels()),
                        this._update();
                }
                return this;
            },
            getEvents: function () {
                var t = {
                    viewprereset: this._invalidateAll,
                    viewreset: this._resetView,
                    zoom: this._resetView,
                    moveend: this._onMoveEnd,
                };
                return (
                    this.options.updateWhenIdle ||
                        (this._onMove ||
                            (this._onMove = G(
                                this._onMoveEnd,
                                this.options.updateInterval,
                                this
                            )),
                        (t.move = this._onMove)),
                    this._zoomAnimated && (t.zoomanim = this._animateZoom),
                    t
                );
            },
            createTile: function () {
                return document.createElement("div");
            },
            getTileSize: function () {
                var t = this.options.tileSize;
                return t instanceof x ? t : new x(t, t);
            },
            _updateZIndex: function () {
                this._container &&
                    this.options.zIndex !== void 0 &&
                    this.options.zIndex !== null &&
                    (this._container.style.zIndex = this.options.zIndex);
            },
            _setAutoZIndex: function (t) {
                for (
                    var e = this.getPane().children,
                        i = -t(-1 / 0, 1 / 0),
                        n = 0,
                        o = e.length,
                        s;
                    n < o;
                    n++
                )
                    (s = e[n].style.zIndex),
                        e[n] !== this._container && s && (i = t(i, +s));
                isFinite(i) &&
                    ((this.options.zIndex = i + t(-1, 1)),
                    this._updateZIndex());
            },
            _updateOpacity: function () {
                if (this._map && !p.ielt9) {
                    et(this._container, this.options.opacity);
                    var t = +new Date(),
                        e = !1,
                        i = !1;
                    for (var n in this._tiles) {
                        var o = this._tiles[n];
                        if (!(!o.current || !o.loaded)) {
                            var s = Math.min(1, (t - o.loaded) / 200);
                            et(o.el, s),
                                s < 1
                                    ? (e = !0)
                                    : (o.active
                                          ? (i = !0)
                                          : this._onOpaqueTile(o),
                                      (o.active = !0));
                        }
                    }
                    i && !this._noPrune && this._pruneTiles(),
                        e &&
                            (tt(this._fadeFrame),
                            (this._fadeFrame = K(this._updateOpacity, this)));
                }
            },
            _onOpaqueTile: I,
            _initContainer: function () {
                this._container ||
                    ((this._container = E(
                        "div",
                        "leaflet-layer " + (this.options.className || "")
                    )),
                    this._updateZIndex(),
                    this.options.opacity < 1 && this._updateOpacity(),
                    this.getPane().appendChild(this._container));
            },
            _updateLevels: function () {
                var t = this._tileZoom,
                    e = this.options.maxZoom;
                if (t !== void 0) {
                    for (var i in this._levels)
                        (i = Number(i)),
                            this._levels[i].el.children.length || i === t
                                ? ((this._levels[i].el.style.zIndex =
                                      e - Math.abs(t - i)),
                                  this._onUpdateLevel(i))
                                : (N(this._levels[i].el),
                                  this._removeTilesAtZoom(i),
                                  this._onRemoveLevel(i),
                                  delete this._levels[i]);
                    var n = this._levels[t],
                        o = this._map;
                    return (
                        n ||
                            ((n = this._levels[t] = {}),
                            (n.el = E(
                                "div",
                                "leaflet-tile-container leaflet-zoom-animated",
                                this._container
                            )),
                            (n.el.style.zIndex = e),
                            (n.origin = o
                                .project(o.unproject(o.getPixelOrigin()), t)
                                .round()),
                            (n.zoom = t),
                            this._setZoomTransform(
                                n,
                                o.getCenter(),
                                o.getZoom()
                            ),
                            I(n.el.offsetWidth),
                            this._onCreateLevel(n)),
                        (this._level = n),
                        n
                    );
                }
            },
            _onUpdateLevel: I,
            _onRemoveLevel: I,
            _onCreateLevel: I,
            _pruneTiles: function () {
                if (this._map) {
                    var t,
                        e,
                        i = this._map.getZoom();
                    if (i > this.options.maxZoom || i < this.options.minZoom) {
                        this._removeAllTiles();
                        return;
                    }
                    for (t in this._tiles)
                        (e = this._tiles[t]), (e.retain = e.current);
                    for (t in this._tiles)
                        if (((e = this._tiles[t]), e.current && !e.active)) {
                            var n = e.coords;
                            this._retainParent(n.x, n.y, n.z, n.z - 5) ||
                                this._retainChildren(n.x, n.y, n.z, n.z + 2);
                        }
                    for (t in this._tiles)
                        this._tiles[t].retain || this._removeTile(t);
                }
            },
            _removeTilesAtZoom: function (t) {
                for (var e in this._tiles)
                    this._tiles[e].coords.z === t && this._removeTile(e);
            },
            _removeAllTiles: function () {
                for (var t in this._tiles) this._removeTile(t);
            },
            _invalidateAll: function () {
                for (var t in this._levels)
                    N(this._levels[t].el),
                        this._onRemoveLevel(Number(t)),
                        delete this._levels[t];
                this._removeAllTiles(), (this._tileZoom = void 0);
            },
            _retainParent: function (t, e, i, n) {
                var o = Math.floor(t / 2),
                    s = Math.floor(e / 2),
                    r = i - 1,
                    h = new x(+o, +s);
                h.z = +r;
                var u = this._tileCoordsToKey(h),
                    l = this._tiles[u];
                return l && l.active
                    ? ((l.retain = !0), !0)
                    : (l && l.loaded && (l.retain = !0),
                      r > n ? this._retainParent(o, s, r, n) : !1);
            },
            _retainChildren: function (t, e, i, n) {
                for (var o = 2 * t; o < 2 * t + 2; o++)
                    for (var s = 2 * e; s < 2 * e + 2; s++) {
                        var r = new x(o, s);
                        r.z = i + 1;
                        var h = this._tileCoordsToKey(r),
                            u = this._tiles[h];
                        if (u && u.active) {
                            u.retain = !0;
                            continue;
                        } else u && u.loaded && (u.retain = !0);
                        i + 1 < n && this._retainChildren(o, s, i + 1, n);
                    }
            },
            _resetView: function (t) {
                var e = t && (t.pinch || t.flyTo);
                this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
            },
            _animateZoom: function (t) {
                this._setView(t.center, t.zoom, !0, t.noUpdate);
            },
            _clampZoom: function (t) {
                var e = this.options;
                return e.minNativeZoom !== void 0 && t < e.minNativeZoom
                    ? e.minNativeZoom
                    : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t
                    ? e.maxNativeZoom
                    : t;
            },
            _setView: function (t, e, i, n) {
                var o = Math.round(e);
                (this.options.maxZoom !== void 0 && o > this.options.maxZoom) ||
                (this.options.minZoom !== void 0 && o < this.options.minZoom)
                    ? (o = void 0)
                    : (o = this._clampZoom(o));
                var s = this.options.updateWhenZooming && o !== this._tileZoom;
                (!n || s) &&
                    ((this._tileZoom = o),
                    this._abortLoading && this._abortLoading(),
                    this._updateLevels(),
                    this._resetGrid(),
                    o !== void 0 && this._update(t),
                    i || this._pruneTiles(),
                    (this._noPrune = !!i)),
                    this._setZoomTransforms(t, e);
            },
            _setZoomTransforms: function (t, e) {
                for (var i in this._levels)
                    this._setZoomTransform(this._levels[i], t, e);
            },
            _setZoomTransform: function (t, e, i) {
                var n = this._map.getZoomScale(i, t.zoom),
                    o = t.origin
                        .multiplyBy(n)
                        .subtract(this._map._getNewPixelOrigin(e, i))
                        .round();
                p.any3d ? Lt(t.el, o, n) : H(t.el, o);
            },
            _resetGrid: function () {
                var t = this._map,
                    e = t.options.crs,
                    i = (this._tileSize = this.getTileSize()),
                    n = this._tileZoom,
                    o = this._map.getPixelWorldBounds(this._tileZoom);
                o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
                    (this._wrapX = e.wrapLng &&
                        !this.options.noWrap && [
                            Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
                            Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y),
                        ]),
                    (this._wrapY = e.wrapLat &&
                        !this.options.noWrap && [
                            Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
                            Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y),
                        ]);
            },
            _onMoveEnd: function () {
                !this._map || this._map._animatingZoom || this._update();
            },
            _getTiledPixelBounds: function (t) {
                var e = this._map,
                    i = e._animatingZoom
                        ? Math.max(e._animateToZoom, e.getZoom())
                        : e.getZoom(),
                    n = e.getZoomScale(i, this._tileZoom),
                    o = e.project(t, this._tileZoom).floor(),
                    s = e.getSize().divideBy(n * 2);
                return new B(o.subtract(s), o.add(s));
            },
            _update: function (t) {
                var e = this._map;
                if (e) {
                    var i = this._clampZoom(e.getZoom());
                    if (
                        (t === void 0 && (t = e.getCenter()),
                        this._tileZoom !== void 0)
                    ) {
                        var n = this._getTiledPixelBounds(t),
                            o = this._pxBoundsToTileRange(n),
                            s = o.getCenter(),
                            r = [],
                            h = this.options.keepBuffer,
                            u = new B(
                                o.getBottomLeft().subtract([h, -h]),
                                o.getTopRight().add([h, -h])
                            );
                        if (
                            !(
                                isFinite(o.min.x) &&
                                isFinite(o.min.y) &&
                                isFinite(o.max.x) &&
                                isFinite(o.max.y)
                            )
                        )
                            throw new Error(
                                "Attempted to load an infinite number of tiles"
                            );
                        for (var l in this._tiles) {
                            var m = this._tiles[l].coords;
                            (m.z !== this._tileZoom ||
                                !u.contains(new x(m.x, m.y))) &&
                                (this._tiles[l].current = !1);
                        }
                        if (Math.abs(i - this._tileZoom) > 1) {
                            this._setView(t, i);
                            return;
                        }
                        for (var y = o.min.y; y <= o.max.y; y++)
                            for (var T = o.min.x; T <= o.max.x; T++) {
                                var q = new x(T, y);
                                if (
                                    ((q.z = this._tileZoom),
                                    !!this._isValidTile(q))
                                ) {
                                    var U =
                                        this._tiles[this._tileCoordsToKey(q)];
                                    U ? (U.current = !0) : r.push(q);
                                }
                            }
                        if (
                            (r.sort(function (J, Bt) {
                                return J.distanceTo(s) - Bt.distanceTo(s);
                            }),
                            r.length !== 0)
                        ) {
                            this._loading ||
                                ((this._loading = !0), this.fire("loading"));
                            var nt = document.createDocumentFragment();
                            for (T = 0; T < r.length; T++)
                                this._addTile(r[T], nt);
                            this._level.el.appendChild(nt);
                        }
                    }
                }
            },
            _isValidTile: function (t) {
                var e = this._map.options.crs;
                if (!e.infinite) {
                    var i = this._globalTileRange;
                    if (
                        (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x)) ||
                        (!e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
                    )
                        return !1;
                }
                if (!this.options.bounds) return !0;
                var n = this._tileCoordsToBounds(t);
                return D(this.options.bounds).overlaps(n);
            },
            _keyToBounds: function (t) {
                return this._tileCoordsToBounds(this._keyToTileCoords(t));
            },
            _tileCoordsToNwSe: function (t) {
                var e = this._map,
                    i = this.getTileSize(),
                    n = t.scaleBy(i),
                    o = n.add(i),
                    s = e.unproject(n, t.z),
                    r = e.unproject(o, t.z);
                return [s, r];
            },
            _tileCoordsToBounds: function (t) {
                var e = this._tileCoordsToNwSe(t),
                    i = new X(e[0], e[1]);
                return (
                    this.options.noWrap || (i = this._map.wrapLatLngBounds(i)),
                    i
                );
            },
            _tileCoordsToKey: function (t) {
                return t.x + ":" + t.y + ":" + t.z;
            },
            _keyToTileCoords: function (t) {
                var e = t.split(":"),
                    i = new x(+e[0], +e[1]);
                return (i.z = +e[2]), i;
            },
            _removeTile: function (t) {
                var e = this._tiles[t];
                e &&
                    (N(e.el),
                    delete this._tiles[t],
                    this.fire("tileunload", {
                        tile: e.el,
                        coords: this._keyToTileCoords(t),
                    }));
            },
            _initTile: function (t) {
                b(t, "leaflet-tile");
                var e = this.getTileSize();
                (t.style.width = e.x + "px"),
                    (t.style.height = e.y + "px"),
                    (t.onselectstart = I),
                    (t.onmousemove = I),
                    p.ielt9 &&
                        this.options.opacity < 1 &&
                        et(t, this.options.opacity);
            },
            _addTile: function (t, e) {
                var i = this._getTilePos(t),
                    n = this._tileCoordsToKey(t),
                    o = this.createTile(
                        this._wrapCoords(t),
                        g(this._tileReady, this, t)
                    );
                this._initTile(o),
                    this.createTile.length < 2 &&
                        K(g(this._tileReady, this, t, null, o)),
                    H(o, i),
                    (this._tiles[n] = { el: o, coords: t, current: !0 }),
                    e.appendChild(o),
                    this.fire("tileloadstart", { tile: o, coords: t });
            },
            _tileReady: function (t, e, i) {
                e && this.fire("tileerror", { error: e, tile: i, coords: t });
                var n = this._tileCoordsToKey(t);
                (i = this._tiles[n]),
                    i &&
                        ((i.loaded = +new Date()),
                        this._map._fadeAnimated
                            ? (et(i.el, 0),
                              tt(this._fadeFrame),
                              (this._fadeFrame = K(this._updateOpacity, this)))
                            : ((i.active = !0), this._pruneTiles()),
                        e ||
                            (b(i.el, "leaflet-tile-loaded"),
                            this.fire("tileload", { tile: i.el, coords: t })),
                        this._noTilesToLoad() &&
                            ((this._loading = !1),
                            this.fire("load"),
                            p.ielt9 || !this._map._fadeAnimated
                                ? K(this._pruneTiles, this)
                                : setTimeout(g(this._pruneTiles, this), 250)));
            },
            _getTilePos: function (t) {
                return t
                    .scaleBy(this.getTileSize())
                    .subtract(this._level.origin);
            },
            _wrapCoords: function (t) {
                var e = new x(
                    this._wrapX ? at(t.x, this._wrapX) : t.x,
                    this._wrapY ? at(t.y, this._wrapY) : t.y
                );
                return (e.z = t.z), e;
            },
            _pxBoundsToTileRange: function (t) {
                var e = this.getTileSize();
                return new B(
                    t.min.unscaleBy(e).floor(),
                    t.max.unscaleBy(e).ceil().subtract([1, 1])
                );
            },
            _noTilesToLoad: function () {
                for (var t in this._tiles)
                    if (!this._tiles[t].loaded) return !1;
                return !0;
            },
        });
        function Jo(t) {
            return new Yt(t);
        }
        var It = Yt.extend({
            options: {
                minZoom: 0,
                maxZoom: 18,
                subdomains: "abc",
                errorTileUrl: "",
                zoomOffset: 0,
                tms: !1,
                zoomReverse: !1,
                detectRetina: !1,
                crossOrigin: !1,
                referrerPolicy: !1,
            },
            initialize: function (t, e) {
                (this._url = t),
                    (e = Z(this, e)),
                    e.detectRetina && p.retina && e.maxZoom > 0
                        ? ((e.tileSize = Math.floor(e.tileSize / 2)),
                          e.zoomReverse
                              ? (e.zoomOffset--,
                                (e.minZoom = Math.min(
                                    e.maxZoom,
                                    e.minZoom + 1
                                )))
                              : (e.zoomOffset++,
                                (e.maxZoom = Math.max(
                                    e.minZoom,
                                    e.maxZoom - 1
                                ))),
                          (e.minZoom = Math.max(0, e.minZoom)))
                        : e.zoomReverse
                        ? (e.minZoom = Math.min(e.maxZoom, e.minZoom))
                        : (e.maxZoom = Math.max(e.minZoom, e.maxZoom)),
                    typeof e.subdomains == "string" &&
                        (e.subdomains = e.subdomains.split("")),
                    this.on("tileunload", this._onTileRemove);
            },
            setUrl: function (t, e) {
                return (
                    this._url === t && e === void 0 && (e = !0),
                    (this._url = t),
                    e || this.redraw(),
                    this
                );
            },
            createTile: function (t, e) {
                var i = document.createElement("img");
                return (
                    P(i, "load", g(this._tileOnLoad, this, e, i)),
                    P(i, "error", g(this._tileOnError, this, e, i)),
                    (this.options.crossOrigin ||
                        this.options.crossOrigin === "") &&
                        (i.crossOrigin =
                            this.options.crossOrigin === !0
                                ? ""
                                : this.options.crossOrigin),
                    typeof this.options.referrerPolicy == "string" &&
                        (i.referrerPolicy = this.options.referrerPolicy),
                    (i.alt = ""),
                    (i.src = this.getTileUrl(t)),
                    i
                );
            },
            getTileUrl: function (t) {
                var e = {
                    r: p.retina ? "@2x" : "",
                    s: this._getSubdomain(t),
                    x: t.x,
                    y: t.y,
                    z: this._getZoomForUrl(),
                };
                if (this._map && !this._map.options.crs.infinite) {
                    var i = this._globalTileRange.max.y - t.y;
                    this.options.tms && (e.y = i), (e["-y"] = i);
                }
                return Pt(this._url, _(e, this.options));
            },
            _tileOnLoad: function (t, e) {
                p.ielt9 ? setTimeout(g(t, this, null, e), 0) : t(null, e);
            },
            _tileOnError: function (t, e, i) {
                var n = this.options.errorTileUrl;
                n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
            },
            _onTileRemove: function (t) {
                t.tile.onload = null;
            },
            _getZoomForUrl: function () {
                var t = this._tileZoom,
                    e = this.options.maxZoom,
                    i = this.options.zoomReverse,
                    n = this.options.zoomOffset;
                return i && (t = e - t), t + n;
            },
            _getSubdomain: function (t) {
                var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                return this.options.subdomains[e];
            },
            _abortLoading: function () {
                var t, e;
                for (t in this._tiles)
                    if (
                        this._tiles[t].coords.z !== this._tileZoom &&
                        ((e = this._tiles[t].el),
                        (e.onload = I),
                        (e.onerror = I),
                        !e.complete)
                    ) {
                        e.src = ee;
                        var i = this._tiles[t].coords;
                        N(e),
                            delete this._tiles[t],
                            this.fire("tileabort", { tile: e, coords: i });
                    }
            },
            _removeTile: function (t) {
                var e = this._tiles[t];
                if (e)
                    return (
                        e.el.setAttribute("src", ee),
                        Yt.prototype._removeTile.call(this, t)
                    );
            },
            _tileReady: function (t, e, i) {
                if (!(!this._map || (i && i.getAttribute("src") === ee)))
                    return Yt.prototype._tileReady.call(this, t, e, i);
            },
        });
        function dn(t, e) {
            return new It(t, e);
        }
        var _n = It.extend({
            defaultWmsParams: {
                service: "WMS",
                request: "GetMap",
                layers: "",
                styles: "",
                format: "image/jpeg",
                transparent: !1,
                version: "1.1.1",
            },
            options: { crs: null, uppercase: !1 },
            initialize: function (t, e) {
                this._url = t;
                var i = _({}, this.defaultWmsParams);
                for (var n in e) n in this.options || (i[n] = e[n]);
                e = Z(this, e);
                var o = e.detectRetina && p.retina ? 2 : 1,
                    s = this.getTileSize();
                (i.width = s.x * o), (i.height = s.y * o), (this.wmsParams = i);
            },
            onAdd: function (t) {
                (this._crs = this.options.crs || t.options.crs),
                    (this._wmsVersion = parseFloat(this.wmsParams.version));
                var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
                (this.wmsParams[e] = this._crs.code),
                    It.prototype.onAdd.call(this, t);
            },
            getTileUrl: function (t) {
                var e = this._tileCoordsToNwSe(t),
                    i = this._crs,
                    n = Y(i.project(e[0]), i.project(e[1])),
                    o = n.min,
                    s = n.max,
                    r = (
                        this._wmsVersion >= 1.3 && this._crs === rn
                            ? [o.y, o.x, s.y, s.x]
                            : [o.x, o.y, s.x, s.y]
                    ).join(","),
                    h = It.prototype.getTileUrl.call(this, t);
                return (
                    h +
                    $t(this.wmsParams, h, this.options.uppercase) +
                    (this.options.uppercase ? "&BBOX=" : "&bbox=") +
                    r
                );
            },
            setParams: function (t, e) {
                return _(this.wmsParams, t), e || this.redraw(), this;
            },
        });
        function Qo(t, e) {
            return new _n(t, e);
        }
        (It.WMS = _n), (dn.wms = Qo);
        var vt = rt.extend({
                options: { padding: 0.1 },
                initialize: function (t) {
                    Z(this, t), v(this), (this._layers = this._layers || {});
                },
                onAdd: function () {
                    this._container ||
                        (this._initContainer(),
                        b(this._container, "leaflet-zoom-animated")),
                        this.getPane().appendChild(this._container),
                        this._update(),
                        this.on("update", this._updatePaths, this);
                },
                onRemove: function () {
                    this.off("update", this._updatePaths, this),
                        this._destroyContainer();
                },
                getEvents: function () {
                    var t = {
                        viewreset: this._reset,
                        zoom: this._onZoom,
                        moveend: this._update,
                        zoomend: this._onZoomEnd,
                    };
                    return (
                        this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
                    );
                },
                _onAnimZoom: function (t) {
                    this._updateTransform(t.center, t.zoom);
                },
                _onZoom: function () {
                    this._updateTransform(
                        this._map.getCenter(),
                        this._map.getZoom()
                    );
                },
                _updateTransform: function (t, e) {
                    var i = this._map.getZoomScale(e, this._zoom),
                        n = this._map
                            .getSize()
                            .multiplyBy(0.5 + this.options.padding),
                        o = this._map.project(this._center, e),
                        s = n
                            .multiplyBy(-i)
                            .add(o)
                            .subtract(this._map._getNewPixelOrigin(t, e));
                    p.any3d ? Lt(this._container, s, i) : H(this._container, s);
                },
                _reset: function () {
                    this._update(),
                        this._updateTransform(this._center, this._zoom);
                    for (var t in this._layers) this._layers[t]._reset();
                },
                _onZoomEnd: function () {
                    for (var t in this._layers) this._layers[t]._project();
                },
                _updatePaths: function () {
                    for (var t in this._layers) this._layers[t]._update();
                },
                _update: function () {
                    var t = this.options.padding,
                        e = this._map.getSize(),
                        i = this._map
                            .containerPointToLayerPoint(e.multiplyBy(-t))
                            .round();
                    (this._bounds = new B(
                        i,
                        i.add(e.multiplyBy(1 + t * 2)).round()
                    )),
                        (this._center = this._map.getCenter()),
                        (this._zoom = this._map.getZoom());
                },
            }),
            mn = vt.extend({
                options: { tolerance: 0 },
                getEvents: function () {
                    var t = vt.prototype.getEvents.call(this);
                    return (t.viewprereset = this._onViewPreReset), t;
                },
                _onViewPreReset: function () {
                    this._postponeUpdatePaths = !0;
                },
                onAdd: function () {
                    vt.prototype.onAdd.call(this), this._draw();
                },
                _initContainer: function () {
                    var t = (this._container =
                        document.createElement("canvas"));
                    P(t, "mousemove", this._onMouseMove, this),
                        P(
                            t,
                            "click dblclick mousedown mouseup contextmenu",
                            this._onClick,
                            this
                        ),
                        P(t, "mouseout", this._handleMouseOut, this),
                        (t._leaflet_disable_events = !0),
                        (this._ctx = t.getContext("2d"));
                },
                _destroyContainer: function () {
                    tt(this._redrawRequest),
                        delete this._ctx,
                        N(this._container),
                        A(this._container),
                        delete this._container;
                },
                _updatePaths: function () {
                    if (!this._postponeUpdatePaths) {
                        var t;
                        this._redrawBounds = null;
                        for (var e in this._layers)
                            (t = this._layers[e]), t._update();
                        this._redraw();
                    }
                },
                _update: function () {
                    if (!(this._map._animatingZoom && this._bounds)) {
                        vt.prototype._update.call(this);
                        var t = this._bounds,
                            e = this._container,
                            i = t.getSize(),
                            n = p.retina ? 2 : 1;
                        H(e, t.min),
                            (e.width = n * i.x),
                            (e.height = n * i.y),
                            (e.style.width = i.x + "px"),
                            (e.style.height = i.y + "px"),
                            p.retina && this._ctx.scale(2, 2),
                            this._ctx.translate(-t.min.x, -t.min.y),
                            this.fire("update");
                    }
                },
                _reset: function () {
                    vt.prototype._reset.call(this),
                        this._postponeUpdatePaths &&
                            ((this._postponeUpdatePaths = !1),
                            this._updatePaths());
                },
                _initPath: function (t) {
                    this._updateDashArray(t), (this._layers[v(t)] = t);
                    var e = (t._order = {
                        layer: t,
                        prev: this._drawLast,
                        next: null,
                    });
                    this._drawLast && (this._drawLast.next = e),
                        (this._drawLast = e),
                        (this._drawFirst = this._drawFirst || this._drawLast);
                },
                _addPath: function (t) {
                    this._requestRedraw(t);
                },
                _removePath: function (t) {
                    var e = t._order,
                        i = e.next,
                        n = e.prev;
                    i ? (i.prev = n) : (this._drawLast = n),
                        n ? (n.next = i) : (this._drawFirst = i),
                        delete t._order,
                        delete this._layers[v(t)],
                        this._requestRedraw(t);
                },
                _updatePath: function (t) {
                    this._extendRedrawBounds(t),
                        t._project(),
                        t._update(),
                        this._requestRedraw(t);
                },
                _updateStyle: function (t) {
                    this._updateDashArray(t), this._requestRedraw(t);
                },
                _updateDashArray: function (t) {
                    if (typeof t.options.dashArray == "string") {
                        var e = t.options.dashArray.split(/[, ]+/),
                            i = [],
                            n,
                            o;
                        for (o = 0; o < e.length; o++) {
                            if (((n = Number(e[o])), isNaN(n))) return;
                            i.push(n);
                        }
                        t.options._dashArray = i;
                    } else t.options._dashArray = t.options.dashArray;
                },
                _requestRedraw: function (t) {
                    this._map &&
                        (this._extendRedrawBounds(t),
                        (this._redrawRequest =
                            this._redrawRequest || K(this._redraw, this)));
                },
                _extendRedrawBounds: function (t) {
                    if (t._pxBounds) {
                        var e = (t.options.weight || 0) + 1;
                        (this._redrawBounds = this._redrawBounds || new B()),
                            this._redrawBounds.extend(
                                t._pxBounds.min.subtract([e, e])
                            ),
                            this._redrawBounds.extend(
                                t._pxBounds.max.add([e, e])
                            );
                    }
                },
                _redraw: function () {
                    (this._redrawRequest = null),
                        this._redrawBounds &&
                            (this._redrawBounds.min._floor(),
                            this._redrawBounds.max._ceil()),
                        this._clear(),
                        this._draw(),
                        (this._redrawBounds = null);
                },
                _clear: function () {
                    var t = this._redrawBounds;
                    if (t) {
                        var e = t.getSize();
                        this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
                    } else
                        this._ctx.save(),
                            this._ctx.setTransform(1, 0, 0, 1, 0, 0),
                            this._ctx.clearRect(
                                0,
                                0,
                                this._container.width,
                                this._container.height
                            ),
                            this._ctx.restore();
                },
                _draw: function () {
                    var t,
                        e = this._redrawBounds;
                    if ((this._ctx.save(), e)) {
                        var i = e.getSize();
                        this._ctx.beginPath(),
                            this._ctx.rect(e.min.x, e.min.y, i.x, i.y),
                            this._ctx.clip();
                    }
                    this._drawing = !0;
                    for (var n = this._drawFirst; n; n = n.next)
                        (t = n.layer),
                            (!e ||
                                (t._pxBounds && t._pxBounds.intersects(e))) &&
                                t._updatePath();
                    (this._drawing = !1), this._ctx.restore();
                },
                _updatePoly: function (t, e) {
                    if (this._drawing) {
                        var i,
                            n,
                            o,
                            s,
                            r = t._parts,
                            h = r.length,
                            u = this._ctx;
                        if (h) {
                            for (u.beginPath(), i = 0; i < h; i++) {
                                for (n = 0, o = r[i].length; n < o; n++)
                                    (s = r[i][n]),
                                        u[n ? "lineTo" : "moveTo"](s.x, s.y);
                                e && u.closePath();
                            }
                            this._fillStroke(u, t);
                        }
                    }
                },
                _updateCircle: function (t) {
                    if (!(!this._drawing || t._empty())) {
                        var e = t._point,
                            i = this._ctx,
                            n = Math.max(Math.round(t._radius), 1),
                            o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                        o !== 1 && (i.save(), i.scale(1, o)),
                            i.beginPath(),
                            i.arc(e.x, e.y / o, n, 0, Math.PI * 2, !1),
                            o !== 1 && i.restore(),
                            this._fillStroke(i, t);
                    }
                },
                _fillStroke: function (t, e) {
                    var i = e.options;
                    i.fill &&
                        ((t.globalAlpha = i.fillOpacity),
                        (t.fillStyle = i.fillColor || i.color),
                        t.fill(i.fillRule || "evenodd")),
                        i.stroke &&
                            i.weight !== 0 &&
                            (t.setLineDash &&
                                t.setLineDash(
                                    (e.options && e.options._dashArray) || []
                                ),
                            (t.globalAlpha = i.opacity),
                            (t.lineWidth = i.weight),
                            (t.strokeStyle = i.color),
                            (t.lineCap = i.lineCap),
                            (t.lineJoin = i.lineJoin),
                            t.stroke());
                },
                _onClick: function (t) {
                    for (
                        var e = this._map.mouseEventToLayerPoint(t),
                            i,
                            n,
                            o = this._drawFirst;
                        o;
                        o = o.next
                    )
                        (i = o.layer),
                            i.options.interactive &&
                                i._containsPoint(e) &&
                                (!(
                                    t.type === "click" || t.type === "preclick"
                                ) ||
                                    !this._map._draggableMoved(i)) &&
                                (n = i);
                    this._fireEvent(n ? [n] : !1, t);
                },
                _onMouseMove: function (t) {
                    if (
                        !(
                            !this._map ||
                            this._map.dragging.moving() ||
                            this._map._animatingZoom
                        )
                    ) {
                        var e = this._map.mouseEventToLayerPoint(t);
                        this._handleMouseHover(t, e);
                    }
                },
                _handleMouseOut: function (t) {
                    var e = this._hoveredLayer;
                    e &&
                        (R(this._container, "leaflet-interactive"),
                        this._fireEvent([e], t, "mouseout"),
                        (this._hoveredLayer = null),
                        (this._mouseHoverThrottled = !1));
                },
                _handleMouseHover: function (t, e) {
                    if (!this._mouseHoverThrottled) {
                        for (var i, n, o = this._drawFirst; o; o = o.next)
                            (i = o.layer),
                                i.options.interactive &&
                                    i._containsPoint(e) &&
                                    (n = i);
                        n !== this._hoveredLayer &&
                            (this._handleMouseOut(t),
                            n &&
                                (b(this._container, "leaflet-interactive"),
                                this._fireEvent([n], t, "mouseover"),
                                (this._hoveredLayer = n))),
                            this._fireEvent(
                                this._hoveredLayer ? [this._hoveredLayer] : !1,
                                t
                            ),
                            (this._mouseHoverThrottled = !0),
                            setTimeout(
                                g(function () {
                                    this._mouseHoverThrottled = !1;
                                }, this),
                                32
                            );
                    }
                },
                _fireEvent: function (t, e, i) {
                    this._map._fireDOMEvent(e, i || e.type, t);
                },
                _bringToFront: function (t) {
                    var e = t._order;
                    if (e) {
                        var i = e.next,
                            n = e.prev;
                        if (i) i.prev = n;
                        else return;
                        n ? (n.next = i) : i && (this._drawFirst = i),
                            (e.prev = this._drawLast),
                            (this._drawLast.next = e),
                            (e.next = null),
                            (this._drawLast = e),
                            this._requestRedraw(t);
                    }
                },
                _bringToBack: function (t) {
                    var e = t._order;
                    if (e) {
                        var i = e.next,
                            n = e.prev;
                        if (n) n.next = i;
                        else return;
                        i ? (i.prev = n) : n && (this._drawLast = n),
                            (e.prev = null),
                            (e.next = this._drawFirst),
                            (this._drawFirst.prev = e),
                            (this._drawFirst = e),
                            this._requestRedraw(t);
                    }
                },
            });
        function pn(t) {
            return p.canvas ? new mn(t) : null;
        }
        var Xt = (function () {
                try {
                    return (
                        document.namespaces.add(
                            "lvml",
                            "urn:schemas-microsoft-com:vml"
                        ),
                        function (t) {
                            return document.createElement(
                                "<lvml:" + t + ' class="lvml">'
                            );
                        }
                    );
                } catch {}
                return function (t) {
                    return document.createElement(
                        "<" +
                            t +
                            ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
                    );
                };
            })(),
            $o = {
                _initContainer: function () {
                    this._container = E("div", "leaflet-vml-container");
                },
                _update: function () {
                    this._map._animatingZoom ||
                        (vt.prototype._update.call(this), this.fire("update"));
                },
                _initPath: function (t) {
                    var e = (t._container = Xt("shape"));
                    b(e, "leaflet-vml-shape " + (this.options.className || "")),
                        (e.coordsize = "1 1"),
                        (t._path = Xt("path")),
                        e.appendChild(t._path),
                        this._updateStyle(t),
                        (this._layers[v(t)] = t);
                },
                _addPath: function (t) {
                    var e = t._container;
                    this._container.appendChild(e),
                        t.options.interactive && t.addInteractiveTarget(e);
                },
                _removePath: function (t) {
                    var e = t._container;
                    N(e),
                        t.removeInteractiveTarget(e),
                        delete this._layers[v(t)];
                },
                _updateStyle: function (t) {
                    var e = t._stroke,
                        i = t._fill,
                        n = t.options,
                        o = t._container;
                    (o.stroked = !!n.stroke),
                        (o.filled = !!n.fill),
                        n.stroke
                            ? (e || (e = t._stroke = Xt("stroke")),
                              o.appendChild(e),
                              (e.weight = n.weight + "px"),
                              (e.color = n.color),
                              (e.opacity = n.opacity),
                              n.dashArray
                                  ? (e.dashStyle = ot(n.dashArray)
                                        ? n.dashArray.join(" ")
                                        : n.dashArray.replace(/( *, *)/g, " "))
                                  : (e.dashStyle = ""),
                              (e.endcap = n.lineCap.replace("butt", "flat")),
                              (e.joinstyle = n.lineJoin))
                            : e && (o.removeChild(e), (t._stroke = null)),
                        n.fill
                            ? (i || (i = t._fill = Xt("fill")),
                              o.appendChild(i),
                              (i.color = n.fillColor || n.color),
                              (i.opacity = n.fillOpacity))
                            : i && (o.removeChild(i), (t._fill = null));
                },
                _updateCircle: function (t) {
                    var e = t._point.round(),
                        i = Math.round(t._radius),
                        n = Math.round(t._radiusY || i);
                    this._setPath(
                        t,
                        t._empty()
                            ? "M0 0"
                            : "AL " +
                                  e.x +
                                  "," +
                                  e.y +
                                  " " +
                                  i +
                                  "," +
                                  n +
                                  " 0," +
                                  65535 * 360
                    );
                },
                _setPath: function (t, e) {
                    t._path.v = e;
                },
                _bringToFront: function (t) {
                    zt(t._container);
                },
                _bringToBack: function (t) {
                    Et(t._container);
                },
            },
            ye = p.vml ? Xt : yi,
            Jt = vt.extend({
                _initContainer: function () {
                    (this._container = ye("svg")),
                        this._container.setAttribute("pointer-events", "none"),
                        (this._rootGroup = ye("g")),
                        this._container.appendChild(this._rootGroup);
                },
                _destroyContainer: function () {
                    N(this._container),
                        A(this._container),
                        delete this._container,
                        delete this._rootGroup,
                        delete this._svgSize;
                },
                _update: function () {
                    if (!(this._map._animatingZoom && this._bounds)) {
                        vt.prototype._update.call(this);
                        var t = this._bounds,
                            e = t.getSize(),
                            i = this._container;
                        (!this._svgSize || !this._svgSize.equals(e)) &&
                            ((this._svgSize = e),
                            i.setAttribute("width", e.x),
                            i.setAttribute("height", e.y)),
                            H(i, t.min),
                            i.setAttribute(
                                "viewBox",
                                [t.min.x, t.min.y, e.x, e.y].join(" ")
                            ),
                            this.fire("update");
                    }
                },
                _initPath: function (t) {
                    var e = (t._path = ye("path"));
                    t.options.className && b(e, t.options.className),
                        t.options.interactive && b(e, "leaflet-interactive"),
                        this._updateStyle(t),
                        (this._layers[v(t)] = t);
                },
                _addPath: function (t) {
                    this._rootGroup || this._initContainer(),
                        this._rootGroup.appendChild(t._path),
                        t.addInteractiveTarget(t._path);
                },
                _removePath: function (t) {
                    N(t._path),
                        t.removeInteractiveTarget(t._path),
                        delete this._layers[v(t)];
                },
                _updatePath: function (t) {
                    t._project(), t._update();
                },
                _updateStyle: function (t) {
                    var e = t._path,
                        i = t.options;
                    e &&
                        (i.stroke
                            ? (e.setAttribute("stroke", i.color),
                              e.setAttribute("stroke-opacity", i.opacity),
                              e.setAttribute("stroke-width", i.weight),
                              e.setAttribute("stroke-linecap", i.lineCap),
                              e.setAttribute("stroke-linejoin", i.lineJoin),
                              i.dashArray
                                  ? e.setAttribute(
                                        "stroke-dasharray",
                                        i.dashArray
                                    )
                                  : e.removeAttribute("stroke-dasharray"),
                              i.dashOffset
                                  ? e.setAttribute(
                                        "stroke-dashoffset",
                                        i.dashOffset
                                    )
                                  : e.removeAttribute("stroke-dashoffset"))
                            : e.setAttribute("stroke", "none"),
                        i.fill
                            ? (e.setAttribute("fill", i.fillColor || i.color),
                              e.setAttribute("fill-opacity", i.fillOpacity),
                              e.setAttribute(
                                  "fill-rule",
                                  i.fillRule || "evenodd"
                              ))
                            : e.setAttribute("fill", "none"));
                },
                _updatePoly: function (t, e) {
                    this._setPath(t, wi(t._parts, e));
                },
                _updateCircle: function (t) {
                    var e = t._point,
                        i = Math.max(Math.round(t._radius), 1),
                        n = Math.max(Math.round(t._radiusY), 1) || i,
                        o = "a" + i + "," + n + " 0 1,0 ",
                        s = t._empty()
                            ? "M0 0"
                            : "M" +
                              (e.x - i) +
                              "," +
                              e.y +
                              o +
                              i * 2 +
                              ",0 " +
                              o +
                              -i * 2 +
                              ",0 ";
                    this._setPath(t, s);
                },
                _setPath: function (t, e) {
                    t._path.setAttribute("d", e);
                },
                _bringToFront: function (t) {
                    zt(t._path);
                },
                _bringToBack: function (t) {
                    Et(t._path);
                },
            });
        p.vml && Jt.include($o);
        function gn(t) {
            return p.svg || p.vml ? new Jt(t) : null;
        }
        M.include({
            getRenderer: function (t) {
                var e =
                    t.options.renderer ||
                    this._getPaneRenderer(t.options.pane) ||
                    this.options.renderer ||
                    this._renderer;
                return (
                    e || (e = this._renderer = this._createRenderer()),
                    this.hasLayer(e) || this.addLayer(e),
                    e
                );
            },
            _getPaneRenderer: function (t) {
                if (t === "overlayPane" || t === void 0) return !1;
                var e = this._paneRenderers[t];
                return (
                    e === void 0 &&
                        ((e = this._createRenderer({ pane: t })),
                        (this._paneRenderers[t] = e)),
                    e
                );
            },
            _createRenderer: function (t) {
                return (this.options.preferCanvas && pn(t)) || gn(t);
            },
        });
        var vn = Zt.extend({
            initialize: function (t, e) {
                Zt.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
            },
            setBounds: function (t) {
                return this.setLatLngs(this._boundsToLatLngs(t));
            },
            _boundsToLatLngs: function (t) {
                return (
                    (t = D(t)),
                    [
                        t.getSouthWest(),
                        t.getNorthWest(),
                        t.getNorthEast(),
                        t.getSouthEast(),
                    ]
                );
            },
        });
        function ts(t, e) {
            return new vn(t, e);
        }
        (Jt.create = ye),
            (Jt.pointsToPath = wi),
            (gt.geometryToLayer = fe),
            (gt.coordsToLatLng = ti),
            (gt.coordsToLatLngs = de),
            (gt.latLngToCoords = ei),
            (gt.latLngsToCoords = _e),
            (gt.getFeature = At),
            (gt.asFeature = me),
            M.mergeOptions({ boxZoom: !0 });
        var yn = lt.extend({
            initialize: function (t) {
                (this._map = t),
                    (this._container = t._container),
                    (this._pane = t._panes.overlayPane),
                    (this._resetStateTimeout = 0),
                    t.on("unload", this._destroy, this);
            },
            addHooks: function () {
                P(this._container, "mousedown", this._onMouseDown, this);
            },
            removeHooks: function () {
                A(this._container, "mousedown", this._onMouseDown, this);
            },
            moved: function () {
                return this._moved;
            },
            _destroy: function () {
                N(this._pane), delete this._pane;
            },
            _resetState: function () {
                (this._resetStateTimeout = 0), (this._moved = !1);
            },
            _clearDeferredResetState: function () {
                this._resetStateTimeout !== 0 &&
                    (clearTimeout(this._resetStateTimeout),
                    (this._resetStateTimeout = 0));
            },
            _onMouseDown: function (t) {
                if (!t.shiftKey || (t.which !== 1 && t.button !== 1)) return !1;
                this._clearDeferredResetState(),
                    this._resetState(),
                    Wt(),
                    Ne(),
                    (this._startPoint =
                        this._map.mouseEventToContainerPoint(t)),
                    P(
                        document,
                        {
                            contextmenu: Ct,
                            mousemove: this._onMouseMove,
                            mouseup: this._onMouseUp,
                            keydown: this._onKeyDown,
                        },
                        this
                    );
            },
            _onMouseMove: function (t) {
                this._moved ||
                    ((this._moved = !0),
                    (this._box = E("div", "leaflet-zoom-box", this._container)),
                    b(this._container, "leaflet-crosshair"),
                    this._map.fire("boxzoomstart")),
                    (this._point = this._map.mouseEventToContainerPoint(t));
                var e = new B(this._point, this._startPoint),
                    i = e.getSize();
                H(this._box, e.min),
                    (this._box.style.width = i.x + "px"),
                    (this._box.style.height = i.y + "px");
            },
            _finish: function () {
                this._moved &&
                    (N(this._box), R(this._container, "leaflet-crosshair")),
                    Ut(),
                    Re(),
                    A(
                        document,
                        {
                            contextmenu: Ct,
                            mousemove: this._onMouseMove,
                            mouseup: this._onMouseUp,
                            keydown: this._onKeyDown,
                        },
                        this
                    );
            },
            _onMouseUp: function (t) {
                if (
                    !(t.which !== 1 && t.button !== 1) &&
                    (this._finish(), !!this._moved)
                ) {
                    this._clearDeferredResetState(),
                        (this._resetStateTimeout = setTimeout(
                            g(this._resetState, this),
                            0
                        ));
                    var e = new X(
                        this._map.containerPointToLatLng(this._startPoint),
                        this._map.containerPointToLatLng(this._point)
                    );
                    this._map
                        .fitBounds(e)
                        .fire("boxzoomend", { boxZoomBounds: e });
                }
            },
            _onKeyDown: function (t) {
                t.keyCode === 27 &&
                    (this._finish(),
                    this._clearDeferredResetState(),
                    this._resetState());
            },
        });
        M.addInitHook("addHandler", "boxZoom", yn),
            M.mergeOptions({ doubleClickZoom: !0 });
        var wn = lt.extend({
            addHooks: function () {
                this._map.on("dblclick", this._onDoubleClick, this);
            },
            removeHooks: function () {
                this._map.off("dblclick", this._onDoubleClick, this);
            },
            _onDoubleClick: function (t) {
                var e = this._map,
                    i = e.getZoom(),
                    n = e.options.zoomDelta,
                    o = t.originalEvent.shiftKey ? i - n : i + n;
                e.options.doubleClickZoom === "center"
                    ? e.setZoom(o)
                    : e.setZoomAround(t.containerPoint, o);
            },
        });
        M.addInitHook("addHandler", "doubleClickZoom", wn),
            M.mergeOptions({
                dragging: !0,
                inertia: !0,
                inertiaDeceleration: 3400,
                inertiaMaxSpeed: 1 / 0,
                easeLinearity: 0.2,
                worldCopyJump: !1,
                maxBoundsViscosity: 0,
            });
        var xn = lt.extend({
            addHooks: function () {
                if (!this._draggable) {
                    var t = this._map;
                    (this._draggable = new wt(t._mapPane, t._container)),
                        this._draggable.on(
                            {
                                dragstart: this._onDragStart,
                                drag: this._onDrag,
                                dragend: this._onDragEnd,
                            },
                            this
                        ),
                        this._draggable.on(
                            "predrag",
                            this._onPreDragLimit,
                            this
                        ),
                        t.options.worldCopyJump &&
                            (this._draggable.on(
                                "predrag",
                                this._onPreDragWrap,
                                this
                            ),
                            t.on("zoomend", this._onZoomEnd, this),
                            t.whenReady(this._onZoomEnd, this));
                }
                b(this._map._container, "leaflet-grab leaflet-touch-drag"),
                    this._draggable.enable(),
                    (this._positions = []),
                    (this._times = []);
            },
            removeHooks: function () {
                R(this._map._container, "leaflet-grab"),
                    R(this._map._container, "leaflet-touch-drag"),
                    this._draggable.disable();
            },
            moved: function () {
                return this._draggable && this._draggable._moved;
            },
            moving: function () {
                return this._draggable && this._draggable._moving;
            },
            _onDragStart: function () {
                var t = this._map;
                if (
                    (t._stop(),
                    this._map.options.maxBounds &&
                        this._map.options.maxBoundsViscosity)
                ) {
                    var e = D(this._map.options.maxBounds);
                    (this._offsetLimit = Y(
                        this._map
                            .latLngToContainerPoint(e.getNorthWest())
                            .multiplyBy(-1),
                        this._map
                            .latLngToContainerPoint(e.getSouthEast())
                            .multiplyBy(-1)
                            .add(this._map.getSize())
                    )),
                        (this._viscosity = Math.min(
                            1,
                            Math.max(0, this._map.options.maxBoundsViscosity)
                        ));
                } else this._offsetLimit = null;
                t.fire("movestart").fire("dragstart"),
                    t.options.inertia &&
                        ((this._positions = []), (this._times = []));
            },
            _onDrag: function (t) {
                if (this._map.options.inertia) {
                    var e = (this._lastTime = +new Date()),
                        i = (this._lastPos =
                            this._draggable._absPos || this._draggable._newPos);
                    this._positions.push(i),
                        this._times.push(e),
                        this._prunePositions(e);
                }
                this._map.fire("move", t).fire("drag", t);
            },
            _prunePositions: function (t) {
                for (; this._positions.length > 1 && t - this._times[0] > 50; )
                    this._positions.shift(), this._times.shift();
            },
            _onZoomEnd: function () {
                var t = this._map.getSize().divideBy(2),
                    e = this._map.latLngToLayerPoint([0, 0]);
                (this._initialWorldOffset = e.subtract(t).x),
                    (this._worldWidth = this._map
                        .getPixelWorldBounds()
                        .getSize().x);
            },
            _viscousLimit: function (t, e) {
                return t - (t - e) * this._viscosity;
            },
            _onPreDragLimit: function () {
                if (!(!this._viscosity || !this._offsetLimit)) {
                    var t = this._draggable._newPos.subtract(
                            this._draggable._startPos
                        ),
                        e = this._offsetLimit;
                    t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
                        t.y < e.min.y &&
                            (t.y = this._viscousLimit(t.y, e.min.y)),
                        t.x > e.max.x &&
                            (t.x = this._viscousLimit(t.x, e.max.x)),
                        t.y > e.max.y &&
                            (t.y = this._viscousLimit(t.y, e.max.y)),
                        (this._draggable._newPos =
                            this._draggable._startPos.add(t));
                }
            },
            _onPreDragWrap: function () {
                var t = this._worldWidth,
                    e = Math.round(t / 2),
                    i = this._initialWorldOffset,
                    n = this._draggable._newPos.x,
                    o = ((n - e + i) % t) + e - i,
                    s = ((n + e + i) % t) - e - i,
                    r = Math.abs(o + i) < Math.abs(s + i) ? o : s;
                (this._draggable._absPos = this._draggable._newPos.clone()),
                    (this._draggable._newPos.x = r);
            },
            _onDragEnd: function (t) {
                var e = this._map,
                    i = e.options,
                    n = !i.inertia || t.noInertia || this._times.length < 2;
                if ((e.fire("dragend", t), n)) e.fire("moveend");
                else {
                    this._prunePositions(+new Date());
                    var o = this._lastPos.subtract(this._positions[0]),
                        s = (this._lastTime - this._times[0]) / 1e3,
                        r = i.easeLinearity,
                        h = o.multiplyBy(r / s),
                        u = h.distanceTo([0, 0]),
                        l = Math.min(i.inertiaMaxSpeed, u),
                        m = h.multiplyBy(l / u),
                        y = l / (i.inertiaDeceleration * r),
                        T = m.multiplyBy(-y / 2).round();
                    !T.x && !T.y
                        ? e.fire("moveend")
                        : ((T = e._limitOffset(T, e.options.maxBounds)),
                          K(function () {
                              e.panBy(T, {
                                  duration: y,
                                  easeLinearity: r,
                                  noMoveStart: !0,
                                  animate: !0,
                              });
                          }));
                }
            },
        });
        M.addInitHook("addHandler", "dragging", xn),
            M.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
        var Pn = lt.extend({
            keyCodes: {
                left: [37],
                right: [39],
                down: [40],
                up: [38],
                zoomIn: [187, 107, 61, 171],
                zoomOut: [189, 109, 54, 173],
            },
            initialize: function (t) {
                (this._map = t),
                    this._setPanDelta(t.options.keyboardPanDelta),
                    this._setZoomDelta(t.options.zoomDelta);
            },
            addHooks: function () {
                var t = this._map._container;
                t.tabIndex <= 0 && (t.tabIndex = "0"),
                    P(
                        t,
                        {
                            focus: this._onFocus,
                            blur: this._onBlur,
                            mousedown: this._onMouseDown,
                        },
                        this
                    ),
                    this._map.on(
                        { focus: this._addHooks, blur: this._removeHooks },
                        this
                    );
            },
            removeHooks: function () {
                this._removeHooks(),
                    A(
                        this._map._container,
                        {
                            focus: this._onFocus,
                            blur: this._onBlur,
                            mousedown: this._onMouseDown,
                        },
                        this
                    ),
                    this._map.off(
                        { focus: this._addHooks, blur: this._removeHooks },
                        this
                    );
            },
            _onMouseDown: function () {
                if (!this._focused) {
                    var t = document.body,
                        e = document.documentElement,
                        i = t.scrollTop || e.scrollTop,
                        n = t.scrollLeft || e.scrollLeft;
                    this._map._container.focus(), window.scrollTo(n, i);
                }
            },
            _onFocus: function () {
                (this._focused = !0), this._map.fire("focus");
            },
            _onBlur: function () {
                (this._focused = !1), this._map.fire("blur");
            },
            _setPanDelta: function (t) {
                var e = (this._panKeys = {}),
                    i = this.keyCodes,
                    n,
                    o;
                for (n = 0, o = i.left.length; n < o; n++)
                    e[i.left[n]] = [-1 * t, 0];
                for (n = 0, o = i.right.length; n < o; n++)
                    e[i.right[n]] = [t, 0];
                for (n = 0, o = i.down.length; n < o; n++)
                    e[i.down[n]] = [0, t];
                for (n = 0, o = i.up.length; n < o; n++)
                    e[i.up[n]] = [0, -1 * t];
            },
            _setZoomDelta: function (t) {
                var e = (this._zoomKeys = {}),
                    i = this.keyCodes,
                    n,
                    o;
                for (n = 0, o = i.zoomIn.length; n < o; n++) e[i.zoomIn[n]] = t;
                for (n = 0, o = i.zoomOut.length; n < o; n++)
                    e[i.zoomOut[n]] = -t;
            },
            _addHooks: function () {
                P(document, "keydown", this._onKeyDown, this);
            },
            _removeHooks: function () {
                A(document, "keydown", this._onKeyDown, this);
            },
            _onKeyDown: function (t) {
                if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                    var e = t.keyCode,
                        i = this._map,
                        n;
                    if (e in this._panKeys) {
                        if (!i._panAnim || !i._panAnim._inProgress)
                            if (
                                ((n = this._panKeys[e]),
                                t.shiftKey && (n = w(n).multiplyBy(3)),
                                i.options.maxBounds &&
                                    (n = i._limitOffset(
                                        w(n),
                                        i.options.maxBounds
                                    )),
                                i.options.worldCopyJump)
                            ) {
                                var o = i.wrapLatLng(
                                    i.unproject(i.project(i.getCenter()).add(n))
                                );
                                i.panTo(o);
                            } else i.panBy(n);
                    } else if (e in this._zoomKeys)
                        i.setZoom(
                            i.getZoom() +
                                (t.shiftKey ? 3 : 1) * this._zoomKeys[e]
                        );
                    else if (
                        e === 27 &&
                        i._popup &&
                        i._popup.options.closeOnEscapeKey
                    )
                        i.closePopup();
                    else return;
                    Ct(t);
                }
            },
        });
        M.addInitHook("addHandler", "keyboard", Pn),
            M.mergeOptions({
                scrollWheelZoom: !0,
                wheelDebounceTime: 40,
                wheelPxPerZoomLevel: 60,
            });
        var Ln = lt.extend({
            addHooks: function () {
                P(this._map._container, "wheel", this._onWheelScroll, this),
                    (this._delta = 0);
            },
            removeHooks: function () {
                A(this._map._container, "wheel", this._onWheelScroll, this);
            },
            _onWheelScroll: function (t) {
                var e = Vi(t),
                    i = this._map.options.wheelDebounceTime;
                (this._delta += e),
                    (this._lastMousePos =
                        this._map.mouseEventToContainerPoint(t)),
                    this._startTime || (this._startTime = +new Date());
                var n = Math.max(i - (+new Date() - this._startTime), 0);
                clearTimeout(this._timer),
                    (this._timer = setTimeout(g(this._performZoom, this), n)),
                    Ct(t);
            },
            _performZoom: function () {
                var t = this._map,
                    e = t.getZoom(),
                    i = this._map.options.zoomSnap || 0;
                t._stop();
                var n =
                        this._delta /
                        (this._map.options.wheelPxPerZoomLevel * 4),
                    o =
                        (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) /
                        Math.LN2,
                    s = i ? Math.ceil(o / i) * i : o,
                    r = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
                (this._delta = 0),
                    (this._startTime = null),
                    r &&
                        (t.options.scrollWheelZoom === "center"
                            ? t.setZoom(e + r)
                            : t.setZoomAround(this._lastMousePos, e + r));
            },
        });
        M.addInitHook("addHandler", "scrollWheelZoom", Ln);
        var es = 600;
        M.mergeOptions({
            tapHold: p.touchNative && p.safari && p.mobile,
            tapTolerance: 15,
        });
        var bn = lt.extend({
            addHooks: function () {
                P(this._map._container, "touchstart", this._onDown, this);
            },
            removeHooks: function () {
                A(this._map._container, "touchstart", this._onDown, this);
            },
            _onDown: function (t) {
                if ((clearTimeout(this._holdTimeout), t.touches.length === 1)) {
                    var e = t.touches[0];
                    (this._startPos = this._newPos =
                        new x(e.clientX, e.clientY)),
                        (this._holdTimeout = setTimeout(
                            g(function () {
                                this._cancel(),
                                    this._isTapValid() &&
                                        (P(document, "touchend", j),
                                        P(
                                            document,
                                            "touchend touchcancel",
                                            this._cancelClickPrevent
                                        ),
                                        this._simulateEvent("contextmenu", e));
                            }, this),
                            es
                        )),
                        P(
                            document,
                            "touchend touchcancel contextmenu",
                            this._cancel,
                            this
                        ),
                        P(document, "touchmove", this._onMove, this);
                }
            },
            _cancelClickPrevent: function t() {
                A(document, "touchend", j),
                    A(document, "touchend touchcancel", t);
            },
            _cancel: function () {
                clearTimeout(this._holdTimeout),
                    A(
                        document,
                        "touchend touchcancel contextmenu",
                        this._cancel,
                        this
                    ),
                    A(document, "touchmove", this._onMove, this);
            },
            _onMove: function (t) {
                var e = t.touches[0];
                this._newPos = new x(e.clientX, e.clientY);
            },
            _isTapValid: function () {
                return (
                    this._newPos.distanceTo(this._startPos) <=
                    this._map.options.tapTolerance
                );
            },
            _simulateEvent: function (t, e) {
                var i = new MouseEvent(t, {
                    bubbles: !0,
                    cancelable: !0,
                    view: window,
                    screenX: e.screenX,
                    screenY: e.screenY,
                    clientX: e.clientX,
                    clientY: e.clientY,
                });
                (i._simulated = !0), e.target.dispatchEvent(i);
            },
        });
        M.addInitHook("addHandler", "tapHold", bn),
            M.mergeOptions({ touchZoom: p.touch, bounceAtZoomLimits: !0 });
        var Tn = lt.extend({
            addHooks: function () {
                b(this._map._container, "leaflet-touch-zoom"),
                    P(
                        this._map._container,
                        "touchstart",
                        this._onTouchStart,
                        this
                    );
            },
            removeHooks: function () {
                R(this._map._container, "leaflet-touch-zoom"),
                    A(
                        this._map._container,
                        "touchstart",
                        this._onTouchStart,
                        this
                    );
            },
            _onTouchStart: function (t) {
                var e = this._map;
                if (
                    !(
                        !t.touches ||
                        t.touches.length !== 2 ||
                        e._animatingZoom ||
                        this._zooming
                    )
                ) {
                    var i = e.mouseEventToContainerPoint(t.touches[0]),
                        n = e.mouseEventToContainerPoint(t.touches[1]);
                    (this._centerPoint = e.getSize()._divideBy(2)),
                        (this._startLatLng = e.containerPointToLatLng(
                            this._centerPoint
                        )),
                        e.options.touchZoom !== "center" &&
                            (this._pinchStartLatLng = e.containerPointToLatLng(
                                i.add(n)._divideBy(2)
                            )),
                        (this._startDist = i.distanceTo(n)),
                        (this._startZoom = e.getZoom()),
                        (this._moved = !1),
                        (this._zooming = !0),
                        e._stop(),
                        P(document, "touchmove", this._onTouchMove, this),
                        P(
                            document,
                            "touchend touchcancel",
                            this._onTouchEnd,
                            this
                        ),
                        j(t);
                }
            },
            _onTouchMove: function (t) {
                if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
                    var e = this._map,
                        i = e.mouseEventToContainerPoint(t.touches[0]),
                        n = e.mouseEventToContainerPoint(t.touches[1]),
                        o = i.distanceTo(n) / this._startDist;
                    if (
                        ((this._zoom = e.getScaleZoom(o, this._startZoom)),
                        !e.options.bounceAtZoomLimits &&
                            ((this._zoom < e.getMinZoom() && o < 1) ||
                                (this._zoom > e.getMaxZoom() && o > 1)) &&
                            (this._zoom = e._limitZoom(this._zoom)),
                        e.options.touchZoom === "center")
                    ) {
                        if (((this._center = this._startLatLng), o === 1))
                            return;
                    } else {
                        var s = i
                            ._add(n)
                            ._divideBy(2)
                            ._subtract(this._centerPoint);
                        if (o === 1 && s.x === 0 && s.y === 0) return;
                        this._center = e.unproject(
                            e
                                .project(this._pinchStartLatLng, this._zoom)
                                .subtract(s),
                            this._zoom
                        );
                    }
                    this._moved || (e._moveStart(!0, !1), (this._moved = !0)),
                        tt(this._animRequest);
                    var r = g(
                        e._move,
                        e,
                        this._center,
                        this._zoom,
                        { pinch: !0, round: !1 },
                        void 0
                    );
                    (this._animRequest = K(r, this, !0)), j(t);
                }
            },
            _onTouchEnd: function () {
                if (!this._moved || !this._zooming) {
                    this._zooming = !1;
                    return;
                }
                (this._zooming = !1),
                    tt(this._animRequest),
                    A(document, "touchmove", this._onTouchMove, this),
                    A(document, "touchend touchcancel", this._onTouchEnd, this),
                    this._map.options.zoomAnimation
                        ? this._map._animateZoom(
                              this._center,
                              this._map._limitZoom(this._zoom),
                              !0,
                              this._map.options.zoomSnap
                          )
                        : this._map._resetView(
                              this._center,
                              this._map._limitZoom(this._zoom)
                          );
            },
        });
        M.addInitHook("addHandler", "touchZoom", Tn),
            (M.BoxZoom = yn),
            (M.DoubleClickZoom = wn),
            (M.Drag = xn),
            (M.Keyboard = Pn),
            (M.ScrollWheelZoom = Ln),
            (M.TapHold = bn),
            (M.TouchZoom = Tn),
            (a.Bounds = B),
            (a.Browser = p),
            (a.CRS = _t),
            (a.Canvas = mn),
            (a.Circle = $e),
            (a.CircleMarker = ce),
            (a.Class = dt),
            (a.Control = st),
            (a.DivIcon = fn),
            (a.DivOverlay = ct),
            (a.DomEvent = yo),
            (a.DomUtil = go),
            (a.Draggable = wt),
            (a.Evented = Nt),
            (a.FeatureGroup = mt),
            (a.GeoJSON = gt),
            (a.GridLayer = Yt),
            (a.Handler = lt),
            (a.Icon = Ot),
            (a.ImageOverlay = pe),
            (a.LatLng = O),
            (a.LatLngBounds = X),
            (a.Layer = rt),
            (a.LayerGroup = kt),
            (a.LineUtil = Oo),
            (a.Map = M),
            (a.Marker = le),
            (a.Mixin = Co),
            (a.Path = xt),
            (a.Point = x),
            (a.PolyUtil = Mo),
            (a.Polygon = Zt),
            (a.Polyline = pt),
            (a.Popup = ge),
            (a.PosAnimation = qi),
            (a.Projection = Zo),
            (a.Rectangle = vn),
            (a.Renderer = vt),
            (a.SVG = Jt),
            (a.SVGOverlay = cn),
            (a.TileLayer = It),
            (a.Tooltip = ve),
            (a.Transformation = Te),
            (a.Util = Rn),
            (a.VideoOverlay = ln),
            (a.bind = g),
            (a.bounds = Y),
            (a.canvas = pn),
            (a.circle = Fo),
            (a.circleMarker = Ho),
            (a.control = Vt),
            (a.divIcon = Xo),
            (a.extend = _),
            (a.featureGroup = No),
            (a.geoJSON = un),
            (a.geoJson = jo),
            (a.gridLayer = Jo),
            (a.icon = Ro),
            (a.imageOverlay = Go),
            (a.latLng = C),
            (a.latLngBounds = D),
            (a.layerGroup = Bo),
            (a.map = wo),
            (a.marker = Do),
            (a.point = w),
            (a.polygon = Uo),
            (a.polyline = Wo),
            (a.popup = Ko),
            (a.rectangle = ts),
            (a.setOptions = Z),
            (a.stamp = v),
            (a.svg = gn),
            (a.svgOverlay = qo),
            (a.tileLayer = dn),
            (a.tooltip = Yo),
            (a.transformation = Rt),
            (a.version = f),
            (a.videoOverlay = Vo);
        var is = window.L;
        (a.noConflict = function () {
            return (window.L = is), this;
        }),
            (window.L = a);
    });
})(ri, ri.exports);
var Qt = ri.exports;
const Ms = ds(Qt);
function ci(d, c, a) {
    return Object.freeze({ instance: d, context: c, container: a });
}
function fi(d, c) {
    return c == null
        ? function (f, _) {
              const z = S.useRef();
              return z.current || (z.current = d(f, _)), z;
          }
        : function (f, _) {
              const z = S.useRef();
              z.current || (z.current = d(f, _));
              const g = S.useRef(f),
                  { instance: W } = z.current;
              return (
                  S.useEffect(
                      function () {
                          g.current !== f &&
                              (c(W, f, g.current), (g.current = f));
                      },
                      [W, f, _]
                  ),
                  z
              );
          };
}
function Ss(d, c) {
    S.useEffect(
        function () {
            return (
                (c.layerContainer ?? c.map).addLayer(d.instance),
                function () {
                    var z;
                    (z = c.layerContainer) == null || z.removeLayer(d.instance),
                        c.map.removeLayer(d.instance);
                }
            );
        },
        [c, d]
    );
}
function Nn(d) {
    return function (a) {
        const f = ui(),
            _ = d(li(a, f), f);
        return (
            Zn(f.map, a.attribution),
            Bn(_.current, a.eventHandlers),
            Ss(_.current, f),
            _
        );
    };
}
function zs(d, c) {
    const a = fi(d, c),
        f = Nn(a);
    return Ls(f);
}
function Es(d, c) {
    const a = fi(d),
        f = Cs(a, c);
    return bs(f);
}
function ks(d, c) {
    const a = fi(d, c),
        f = Nn(a);
    return Ts(f);
}
function Os(d, c, a) {
    const { opacity: f, zIndex: _ } = c;
    f != null && f !== a.opacity && d.setOpacity(f),
        _ != null && _ !== a.zIndex && d.setZIndex(_);
}
function di() {
    return ui().map;
}
function Zs(d) {
    const c = di();
    return (
        S.useEffect(
            function () {
                return (
                    c.on(d),
                    function () {
                        c.off(d);
                    }
                );
            },
            [c, d]
        ),
        c
    );
}
function ai() {
    return (
        (ai =
            Object.assign ||
            function (d) {
                for (var c = 1; c < arguments.length; c++) {
                    var a = arguments[c];
                    for (var f in a)
                        Object.prototype.hasOwnProperty.call(a, f) &&
                            (d[f] = a[f]);
                }
                return d;
            }),
        ai.apply(this, arguments)
    );
}
function As(
    {
        bounds: d,
        boundsOptions: c,
        center: a,
        children: f,
        className: _,
        id: z,
        placeholder: g,
        style: W,
        whenReady: v,
        zoom: G,
        ...at
    },
    I
) {
    const [$] = S.useState({ className: _, id: z, style: W }),
        [V, ft] = S.useState(null);
    S.useImperativeHandle(I, () => (V == null ? void 0 : V.map) ?? null, [V]);
    const Z = S.useCallback((te) => {
        if (te !== null && V === null) {
            const Pt = new Qt.Map(te, at);
            a != null && G != null
                ? Pt.setView(a, G)
                : d != null && Pt.fitBounds(d, c),
                v != null && Pt.whenReady(v),
                ft(xs(Pt));
        }
    }, []);
    S.useEffect(
        () => () => {
            V == null || V.map.remove();
        },
        [V]
    );
    const $t = V ? si.createElement(In, { value: V }, f) : g ?? null;
    return si.createElement("div", ai({}, $, { ref: Z }), $t);
}
const Is = S.forwardRef(As),
    En = zs(
        function ({ position: c, ...a }, f) {
            const _ = new Qt.Marker(c, a);
            return ci(_, Ps(f, { overlayContainer: _ }));
        },
        function (c, a, f) {
            a.position !== f.position && c.setLatLng(a.position),
                a.icon != null && a.icon !== f.icon && c.setIcon(a.icon),
                a.zIndexOffset != null &&
                    a.zIndexOffset !== f.zIndexOffset &&
                    c.setZIndexOffset(a.zIndexOffset),
                a.opacity != null &&
                    a.opacity !== f.opacity &&
                    c.setOpacity(a.opacity),
                c.dragging != null &&
                    a.draggable !== f.draggable &&
                    (a.draggable === !0
                        ? c.dragging.enable()
                        : c.dragging.disable());
        }
    ),
    Bs = Es(
        function (c, a) {
            const f = new Qt.Popup(c, a.overlayContainer);
            return ci(f, a);
        },
        function (c, a, { position: f }, _) {
            S.useEffect(
                function () {
                    const { instance: g } = c;
                    function W(G) {
                        G.popup === g && (g.update(), _(!0));
                    }
                    function v(G) {
                        G.popup === g && _(!1);
                    }
                    return (
                        a.map.on({ popupopen: W, popupclose: v }),
                        a.overlayContainer == null
                            ? (f != null && g.setLatLng(f), g.openOn(a.map))
                            : a.overlayContainer.bindPopup(g),
                        function () {
                            var at;
                            a.map.off({ popupopen: W, popupclose: v }),
                                (at = a.overlayContainer) == null ||
                                    at.unbindPopup(),
                                a.map.removeLayer(g);
                        }
                    );
                },
                [c, a, _, f]
            );
        }
    ),
    Ns = ks(
        function ({ url: c, ...a }, f) {
            const _ = new Qt.TileLayer(c, li(a, f));
            return ci(_, f);
        },
        function (c, a, f) {
            Os(c, a, f);
            const { url: _ } = a;
            _ != null && _ !== f.url && c.setUrl(_);
        }
    ),
    Rs = "_mapContainer_1mfx8_1",
    Ds = "_map_1mfx8_1",
    kn = { mapContainer: Rs, map: Ds };
function Hs(d = null) {
    const [c, a] = S.useState(!1),
        [f, _] = S.useState(d),
        [z, g] = S.useState(null);
    function W() {
        if (!navigator.geolocation)
            return g("Your browser does not support geolocation");
        a(!0),
            navigator.geolocation.getCurrentPosition(
                (v) => {
                    _({ lat: v.coords.latitude, lng: v.coords.longitude }),
                        a(!1);
                },
                (v) => {
                    g(v.message), a(!1);
                }
            );
    }
    return { isLoading: c, position: f, error: z, getPosition: W };
}
const Fs =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC",
    Ws =
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    Us = Ms.icon({
        iconUrl: Ws,
        iconSize: [25, 41],
        iconAnchor: [12.5, 41],
        popupAnchor: [0, -41],
        shadowUrl: Fs,
        shadowSize: [41, 41],
        shadowAnchor: [12.5, 41],
    });
function js() {
    const { cities: d } = _s(),
        [c, a] = S.useState([40, 0]),
        { position: f, getPosition: _, isLoading: z } = Hs(),
        [g] = ms(),
        W = g.get("lat"),
        v = g.get("lng");
    return (
        S.useEffect(() => {
            W && v && a([W, v]);
        }, [W, v]),
        S.useEffect(() => {
            f && a([f.lat, f.lng]);
        }, [f]),
        k.jsxs("div", {
            className: kn.mapContainer,
            children: [
                !f &&
                    k.jsx(ps, {
                        type: "position",
                        onClick: _,
                        children: z ? "Loading..." : "Use your location",
                    }),
                k.jsxs(Is, {
                    center: c,
                    zoom: 7,
                    scrollWheelZoom: !0,
                    className: kn.map,
                    children: [
                        k.jsx(Ns, {
                            attribution:
                                '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                            url: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
                        }),
                        d.map((G) =>
                            k.jsx(
                                En,
                                {
                                    position: [G.position.lat, G.position.lng],
                                    children: k.jsxs(Bs, {
                                        children: [
                                            k.jsx("span", {
                                                children: G.emoji,
                                            }),
                                            " ",
                                            k.jsx("span", {
                                                children: G.cityName,
                                            }),
                                        ],
                                    }),
                                },
                                G.id
                            )
                        ),
                        k.jsx(Gs, { position: c }),
                        f && k.jsx(En, { icon: Us, position: [f.lat, f.lng] }),
                        k.jsx(Vs, {}),
                    ],
                }),
            ],
        })
    );
}
function Gs({ position: d }) {
    return di().setView(d), null;
}
function Vs() {
    const d = hi(),
        c = di();
    return (
        Zs({
            click: (a) => {
                const { lat: f, lng: _ } = a.latlng;
                d(`form?lat=${f}&lng=${_}`), c.setView([f, _], 7);
            },
        }),
        null
    );
}
const qs = "_nav_18bkt_1",
    Ks = { nav: qs };
function Ys() {
    return k.jsx("nav", {
        className: Ks.nav,
        children: k.jsxs("ul", {
            children: [
                k.jsx("li", {
                    children: k.jsx(zn, { to: "cities", children: "Cities" }),
                }),
                k.jsx("li", {
                    children: k.jsx(zn, {
                        to: "countries",
                        children: "Countries",
                    }),
                }),
            ],
        }),
    });
}
const Xs = "_sidebar_1cb67_1",
    Js = "_footer_1cb67_12",
    Qs = "_copyright_1cb67_16",
    oi = { sidebar: Xs, footer: Js, copyright: Qs };
function $s() {
    return k.jsxs("div", {
        className: oi.sidebar,
        children: [
            k.jsx(gs, { to: "/", children: k.jsx(ys, {}) }),
            k.jsx(Ys, {}),
            k.jsx(vs, {}),
            k.jsx("footer", {
                className: oi.footer,
                children: k.jsxs("p", {
                    className: oi.copyright,
                    children: [
                        "© Copyright ",
                        new Date().getFullYear(),
                        " by Worldwise Inc.",
                    ],
                }),
            }),
        ],
    });
}
const tr = "_app_1asv8_1",
    er = { app: tr },
    ir = "_user_ofm1r_1",
    nr = { user: ir },
    or = {
        name: "Mostafa",
        email: "mostafa.asaad@example.com",
        password: "qwerty",
        avatar: "https://i.pravatar.cc/100?u=zz",
    };
function sr() {
    const d = or,
        { handleLogout: c } = On(),
        a = hi();
    function f() {
        a("/"), c();
    }
    return k.jsxs("div", {
        className: nr.user,
        children: [
            k.jsx("img", { src: d.avatar, alt: d.name }),
            k.jsxs("span", { children: ["Welcome, ", d.name] }),
            k.jsx("button", { onClick: f, children: "Logout" }),
        ],
    });
}
function hr() {
    const { isAuthenticated: d } = On(),
        c = hi();
    return (
        S.useEffect(() => {
            d || c("/login");
        }, [d]),
        k.jsxs("div", {
            className: er.app,
            children: [k.jsx($s, {}), k.jsx(js, {}), k.jsx(sr, {})],
        })
    );
}
export { hr as default };
