/***********************
 1.BOOTSTRAP
 2.EASING
 3.ISOTOP
 4.MAGNIFIC POPUPS
 5.SLY SLIDER
 6.OWL CAROUSEL
 7.WOW

 ************************/

/* Bootstrap v4.3.1 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, g, u) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
        }
    }

    function s(t, e, n) {
        return e && i(t.prototype, e),
            n && i(t, n),
            t
    }

    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable
                }))),
                e.forEach(function(t) {
                    var e, n, i;
                    e = o,
                        i = r[n = t],
                        n in e ? Object.defineProperty(e, n, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = i
                })
        }
        return o
    }
    g = g && g.hasOwnProperty("default") ? g.default : g,
        u = u && u.hasOwnProperty("default") ? u.default : u;
    var e = "transitionend";

    function n(t) {
        var e = this,
            n = !1;
        return g(this).one(_.TRANSITION_END, function() {
                n = !0
            }),
            setTimeout(function() {
                n || _.triggerTransitionEnd(e)
            }, t),
            this
    }
    var _ = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            for (; t += ~~(1e6 * Math.random()),
                document.getElementById(t);)
            ;
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t)
                return 0;
            var e = g(t).css("transition-duration"),
                n = g(t).css("transition-delay"),
                i = parseFloat(e),
                o = parseFloat(n);
            return i || o ? (e = e.split(",")[0],
                n = n.split(",")[0],
                1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            g(t).trigger(e)
        },
        supportsTransitionEnd: function() {
            return Boolean(e)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = e[i],
                        s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s))
                        throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                }
            var a
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof t.getRootNode)
                return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
    };
    g.fn.emulateTransitionEnd = n,
        g.event.special[_.TRANSITION_END] = {
            bindType: e,
            delegateType: e,
            handle: function(t) {
                if (g(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        };
    var o = "alert",
        r = "bs.alert",
        a = "." + r,
        c = g.fn[o],
        h = {
            CLOSE: "close" + a,
            CLOSED: "closed" + a,
            CLICK_DATA_API: "click" + a + ".data-api"
        },
        f = "alert",
        d = "fade",
        m = "show",
        p = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.close = function(t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t)),
                        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                },
                t.dispose = function() {
                    g.removeData(this._element, r),
                        this._element = null
                },
                t._getRootElement = function(t) {
                    var e = _.getSelectorFromElement(t),
                        n = !1;
                    return e && (n = document.querySelector(e)),
                        n || (n = g(t).closest("." + f)[0]),
                        n
                },
                t._triggerCloseEvent = function(t) {
                    var e = g.Event(h.CLOSE);
                    return g(t).trigger(e),
                        e
                },
                t._removeElement = function(e) {
                    var n = this;
                    if (g(e).removeClass(m),
                        g(e).hasClass(d)) {
                        var t = _.getTransitionDurationFromElement(e);
                        g(e).one(_.TRANSITION_END, function(t) {
                            return n._destroyElement(e, t)
                        }).emulateTransitionEnd(t)
                    } else
                        this._destroyElement(e)
                },
                t._destroyElement = function(t) {
                    g(t).detach().trigger(h.CLOSED).remove()
                },
                i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = g(this),
                            e = t.data(r);
                        e || (e = new i(this),
                                t.data(r, e)),
                            "close" === n && e[n](this)
                    })
                },
                i._handleDismiss = function(e) {
                    return function(t) {
                        t && t.preventDefault(),
                            e.close(this)
                    }
                },
                s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }]),
                i
        }();
    g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)),
        g.fn[o] = p._jQueryInterface,
        g.fn[o].Constructor = p,
        g.fn[o].noConflict = function() {
            return g.fn[o] = c,
                p._jQueryInterface
        };
    var v = "button",
        y = "bs.button",
        E = "." + y,
        C = ".data-api",
        T = g.fn[v],
        S = "active",
        b = "btn",
        I = "focus",
        D = '[data-toggle^="button"]',
        w = '[data-toggle="buttons"]',
        A = 'input:not([type="hidden"])',
        N = ".active",
        O = ".btn",
        k = {
            CLICK_DATA_API: "click" + E + C,
            FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C
        },
        P = function() {
            function n(t) {
                this._element = t
            }
            var t = n.prototype;
            return t.toggle = function() {
                    var t = !0,
                        e = !0,
                        n = g(this._element).closest(w)[0];
                    if (n) {
                        var i = this._element.querySelector(A);
                        if (i) {
                            if ("radio" === i.type)
                                if (i.checked && this._element.classList.contains(S))
                                    t = !1;
                                else {
                                    var o = n.querySelector(N);
                                    o && g(o).removeClass(S)
                                }
                            if (t) {
                                if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                                    return;
                                i.checked = !this._element.classList.contains(S),
                                    g(i).trigger("change")
                            }
                            i.focus(),
                                e = !1
                        }
                    }
                    e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)),
                        t && g(this._element).toggleClass(S)
                },
                t.dispose = function() {
                    g.removeData(this._element, y),
                        this._element = null
                },
                n._jQueryInterface = function(e) {
                    return this.each(function() {
                        var t = g(this).data(y);
                        t || (t = new n(this),
                                g(this).data(y, t)),
                            "toggle" === e && t[e]()
                    })
                },
                s(n, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }]),
                n
        }();
    g(document).on(k.CLICK_DATA_API, D, function(t) {
            t.preventDefault();
            var e = t.target;
            g(e).hasClass(b) || (e = g(e).closest(O)),
                P._jQueryInterface.call(g(e), "toggle")
        }).on(k.FOCUS_BLUR_DATA_API, D, function(t) {
            var e = g(t.target).closest(O)[0];
            g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
        }),
        g.fn[v] = P._jQueryInterface,
        g.fn[v].Constructor = P,
        g.fn[v].noConflict = function() {
            return g.fn[v] = T,
                P._jQueryInterface
        };
    var L = "carousel",
        j = "bs.carousel",
        H = "." + j,
        R = ".data-api",
        x = g.fn[L],
        F = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        U = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        W = "next",
        q = "prev",
        M = "left",
        K = "right",
        Q = {
            SLIDE: "slide" + H,
            SLID: "slid" + H,
            KEYDOWN: "keydown" + H,
            MOUSEENTER: "mouseenter" + H,
            MOUSELEAVE: "mouseleave" + H,
            TOUCHSTART: "touchstart" + H,
            TOUCHMOVE: "touchmove" + H,
            TOUCHEND: "touchend" + H,
            POINTERDOWN: "pointerdown" + H,
            POINTERUP: "pointerup" + H,
            DRAG_START: "dragstart" + H,
            LOAD_DATA_API: "load" + H + R,
            CLICK_DATA_API: "click" + H + R
        },
        B = "carousel",
        V = "active",
        Y = "slide",
        z = "carousel-item-right",
        X = "carousel-item-left",
        $ = "carousel-item-next",
        G = "carousel-item-prev",
        J = "pointer-event",
        Z = ".active",
        tt = ".active.carousel-item",
        et = ".carousel-item",
        nt = ".carousel-item img",
        it = ".carousel-item-next, .carousel-item-prev",
        ot = ".carousel-indicators",
        rt = "[data-slide], [data-slide-to]",
        st = '[data-ride="carousel"]',
        at = {
            TOUCH: "touch",
            PEN: "pen"
        },
        lt = function() {
            function r(t, e) {
                this._items = null,
                    this._interval = null,
                    this._activeElement = null,
                    this._isPaused = !1,
                    this._isSliding = !1,
                    this.touchTimeout = null,
                    this.touchStartX = 0,
                    this.touchDeltaX = 0,
                    this._config = this._getConfig(e),
                    this._element = t,
                    this._indicatorsElement = this._element.querySelector(ot),
                    this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints,
                    this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
                    this._addEventListeners()
            }
            var t = r.prototype;
            return t.next = function() {
                    this._isSliding || this._slide(W)
                },
                t.nextWhenVisible = function() {
                    !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next()
                },
                t.prev = function() {
                    this._isSliding || this._slide(q)
                },
                t.pause = function(t) {
                    t || (this._isPaused = !0),
                        this._element.querySelector(it) && (_.triggerTransitionEnd(this._element),
                            this.cycle(!0)),
                        clearInterval(this._interval),
                        this._interval = null
                },
                t.cycle = function(t) {
                    t || (this._isPaused = !1),
                        this._interval && (clearInterval(this._interval),
                            this._interval = null),
                        this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                },
                t.to = function(t) {
                    var e = this;
                    this._activeElement = this._element.querySelector(tt);
                    var n = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding)
                            g(this._element).one(Q.SLID, function() {
                                return e.to(t)
                            });
                        else {
                            if (n === t)
                                return this.pause(),
                                    void this.cycle();
                            var i = n < t ? W : q;
                            this._slide(i, this._items[t])
                        }
                },
                t.dispose = function() {
                    g(this._element).off(H),
                        g.removeData(this._element, j),
                        this._items = null,
                        this._config = null,
                        this._element = null,
                        this._interval = null,
                        this._isPaused = null,
                        this._isSliding = null,
                        this._activeElement = null,
                        this._indicatorsElement = null
                },
                t._getConfig = function(t) {
                    return t = l({}, F, t),
                        _.typeCheckConfig(L, t, U),
                        t
                },
                t._handleSwipe = function() {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        0 < e && this.prev(),
                            e < 0 && this.next()
                    }
                },
                t._addEventListeners = function() {
                    var e = this;
                    this._config.keyboard && g(this._element).on(Q.KEYDOWN, function(t) {
                            return e._keydown(t)
                        }),
                        "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function(t) {
                            return e.pause(t)
                        }).on(Q.MOUSELEAVE, function(t) {
                            return e.cycle(t)
                        }),
                        this._config.touch && this._addTouchEventListeners()
                },
                t._addTouchEventListeners = function() {
                    var n = this;
                    if (this._touchSupported) {
                        var e = function(t) {
                                n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
                            },
                            i = function(t) {
                                n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                                    n._handleSwipe(),
                                    "hover" === n._config.pause && (n.pause(),
                                        n.touchTimeout && clearTimeout(n.touchTimeout),
                                        n.touchTimeout = setTimeout(function(t) {
                                            return n.cycle(t)
                                        }, 500 + n._config.interval))
                            };
                        g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function(t) {
                                return t.preventDefault()
                            }),
                            this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function(t) {
                                    return e(t)
                                }),
                                g(this._element).on(Q.POINTERUP, function(t) {
                                    return i(t)
                                }),
                                this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function(t) {
                                    return e(t)
                                }),
                                g(this._element).on(Q.TOUCHMOVE, function(t) {
                                    var e;
                                    (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
                                }),
                                g(this._element).on(Q.TOUCHEND, function(t) {
                                    return i(t)
                                }))
                    }
                },
                t._keydown = function(t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                            case 37:
                                t.preventDefault(),
                                    this.prev();
                                break;
                            case 39:
                                t.preventDefault(),
                                    this.next()
                        }
                },
                t._getItemIndex = function(t) {
                    return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [],
                        this._items.indexOf(t)
                },
                t._getItemByDirection = function(t, e) {
                    var n = t === W,
                        i = t === q,
                        o = this._getItemIndex(e),
                        r = this._items.length - 1;
                    if ((i && 0 === o || n && o === r) && !this._config.wrap)
                        return e;
                    var s = (o + (t === q ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                },
                t._triggerSlideEvent = function(t, e) {
                    var n = this._getItemIndex(t),
                        i = this._getItemIndex(this._element.querySelector(tt)),
                        o = g.Event(Q.SLIDE, {
                            relatedTarget: t,
                            direction: e,
                            from: i,
                            to: n
                        });
                    return g(this._element).trigger(o),
                        o
                },
                t._setActiveIndicatorElement = function(t) {
                    if (this._indicatorsElement) {
                        var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                        g(e).removeClass(V);
                        var n = this._indicatorsElement.children[this._getItemIndex(t)];
                        n && g(n).addClass(V)
                    }
                },
                t._slide = function(t, e) {
                    var n, i, o, r = this,
                        s = this._element.querySelector(tt),
                        a = this._getItemIndex(s),
                        l = e || s && this._getItemByDirection(t, s),
                        c = this._getItemIndex(l),
                        h = Boolean(this._interval);
                    if (o = t === W ? (n = X,
                            i = $,
                            M) : (n = z,
                            i = G,
                            K),
                        l && g(l).hasClass(V))
                        this._isSliding = !1;
                    else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                        this._isSliding = !0,
                            h && this.pause(),
                            this._setActiveIndicatorElement(l);
                        var u = g.Event(Q.SLID, {
                            relatedTarget: l,
                            direction: o,
                            from: a,
                            to: c
                        });
                        if (g(this._element).hasClass(Y)) {
                            g(l).addClass(i),
                                _.reflow(l),
                                g(s).addClass(n),
                                g(l).addClass(n);
                            var f = parseInt(l.getAttribute("data-interval"), 10);
                            this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                                f) : this._config.defaultInterval || this._config.interval;
                            var d = _.getTransitionDurationFromElement(s);
                            g(s).one(_.TRANSITION_END, function() {
                                g(l).removeClass(n + " " + i).addClass(V),
                                    g(s).removeClass(V + " " + i + " " + n),
                                    r._isSliding = !1,
                                    setTimeout(function() {
                                        return g(r._element).trigger(u)
                                    }, 0)
                            }).emulateTransitionEnd(d)
                        } else
                            g(s).removeClass(V),
                            g(l).addClass(V),
                            this._isSliding = !1,
                            g(this._element).trigger(u);
                        h && this.cycle()
                    }
                },
                r._jQueryInterface = function(i) {
                    return this.each(function() {
                        var t = g(this).data(j),
                            e = l({}, F, g(this).data());
                        "object" == typeof i && (e = l({}, e, i));
                        var n = "string" == typeof i ? i : e.slide;
                        if (t || (t = new r(this, e),
                                g(this).data(j, t)),
                            "number" == typeof i)
                            t.to(i);
                        else if ("string" == typeof n) {
                            if ("undefined" == typeof t[n])
                                throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        } else
                            e.interval && e.ride && (t.pause(),
                                t.cycle())
                    })
                },
                r._dataApiClickHandler = function(t) {
                    var e = _.getSelectorFromElement(this);
                    if (e) {
                        var n = g(e)[0];
                        if (n && g(n).hasClass(B)) {
                            var i = l({}, g(n).data(), g(this).data()),
                                o = this.getAttribute("data-slide-to");
                            o && (i.interval = !1),
                                r._jQueryInterface.call(g(n), i),
                                o && g(n).data(j).to(o),
                                t.preventDefault()
                        }
                    }
                },
                s(r, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return F
                    }
                }]),
                r
        }();
    g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler),
        g(window).on(Q.LOAD_DATA_API, function() {
            for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
                var i = g(t[e]);
                lt._jQueryInterface.call(i, i.data())
            }
        }),
        g.fn[L] = lt._jQueryInterface,
        g.fn[L].Constructor = lt,
        g.fn[L].noConflict = function() {
            return g.fn[L] = x,
                lt._jQueryInterface
        };
    var ct = "collapse",
        ht = "bs.collapse",
        ut = "." + ht,
        ft = g.fn[ct],
        dt = {
            toggle: !0,
            parent: ""
        },
        gt = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        _t = {
            SHOW: "show" + ut,
            SHOWN: "shown" + ut,
            HIDE: "hide" + ut,
            HIDDEN: "hidden" + ut,
            CLICK_DATA_API: "click" + ut + ".data-api"
        },
        mt = "show",
        pt = "collapse",
        vt = "collapsing",
        yt = "collapsed",
        Et = "width",
        Ct = "height",
        Tt = ".show, .collapsing",
        St = '[data-toggle="collapse"]',
        bt = function() {
            function a(e, t) {
                this._isTransitioning = !1,
                    this._element = e,
                    this._config = this._getConfig(t),
                    this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        s = _.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                            return t === e
                        });
                    null !== s && 0 < a.length && (this._selector = s,
                        this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null,
                    this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                    this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function() {
                    g(this._element).hasClass(mt) ? this.hide() : this.show()
                },
                t.show = function() {
                    var t, e, n = this;
                    if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t) {
                            return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt)
                        })).length && (t = null), !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
                        var i = g.Event(_t.SHOW);
                        if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
                            t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"),
                                e || g(t).data(ht, null));
                            var o = this._getDimension();
                            g(this._element).removeClass(pt).addClass(vt),
                                this._element.style[o] = 0,
                                this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                            var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                                s = _.getTransitionDurationFromElement(this._element);
                            g(this._element).one(_.TRANSITION_END, function() {
                                    g(n._element).removeClass(vt).addClass(pt).addClass(mt),
                                        n._element.style[o] = "",
                                        n.setTransitioning(!1),
                                        g(n._element).trigger(_t.SHOWN)
                                }).emulateTransitionEnd(s),
                                this._element.style[o] = this._element[r] + "px"
                        }
                    }
                },
                t.hide = function() {
                    var t = this;
                    if (!this._isTransitioning && g(this._element).hasClass(mt)) {
                        var e = g.Event(_t.HIDE);
                        if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
                            var n = this._getDimension();
                            this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                                _.reflow(this._element),
                                g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
                            var i = this._triggerArray.length;
                            if (0 < i)
                                for (var o = 0; o < i; o++) {
                                    var r = this._triggerArray[o],
                                        s = _.getSelectorFromElement(r);
                                    if (null !== s)
                                        g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1)
                                }
                            this.setTransitioning(!0);
                            this._element.style[n] = "";
                            var a = _.getTransitionDurationFromElement(this._element);
                            g(this._element).one(_.TRANSITION_END, function() {
                                t.setTransitioning(!1),
                                    g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)
                            }).emulateTransitionEnd(a)
                        }
                    }
                },
                t.setTransitioning = function(t) {
                    this._isTransitioning = t
                },
                t.dispose = function() {
                    g.removeData(this._element, ht),
                        this._config = null,
                        this._parent = null,
                        this._element = null,
                        this._triggerArray = null,
                        this._isTransitioning = null
                },
                t._getConfig = function(t) {
                    return (t = l({}, dt, t)).toggle = Boolean(t.toggle),
                        _.typeCheckConfig(ct, t, gt),
                        t
                },
                t._getDimension = function() {
                    return g(this._element).hasClass(Et) ? Et : Ct
                },
                t._getParent = function() {
                    var t, n = this;
                    _.isElement(this._config.parent) ? (t = this._config.parent,
                        "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                    var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        i = [].slice.call(t.querySelectorAll(e));
                    return g(i).each(function(t, e) {
                            n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                        }),
                        t
                },
                t._addAriaAndCollapsedClass = function(t, e) {
                    var n = g(t).hasClass(mt);
                    e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n)
                },
                a._getTargetFromElement = function(t) {
                    var e = _.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null
                },
                a._jQueryInterface = function(i) {
                    return this.each(function() {
                        var t = g(this),
                            e = t.data(ht),
                            n = l({}, dt, t.data(), "object" == typeof i && i ? i : {});
                        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                            e || (e = new a(this, n),
                                t.data(ht, e)),
                            "string" == typeof i) {
                            if ("undefined" == typeof e[i])
                                throw new TypeError('No method named "' + i + '"');
                            e[i]()
                        }
                    })
                },
                s(a, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return dt
                    }
                }]),
                a
        }();
    g(document).on(_t.CLICK_DATA_API, St, function(t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = g(this),
                e = _.getSelectorFromElement(this),
                i = [].slice.call(document.querySelectorAll(e));
            g(i).each(function() {
                var t = g(this),
                    e = t.data(ht) ? "toggle" : n.data();
                bt._jQueryInterface.call(t, e)
            })
        }),
        g.fn[ct] = bt._jQueryInterface,
        g.fn[ct].Constructor = bt,
        g.fn[ct].noConflict = function() {
            return g.fn[ct] = ft,
                bt._jQueryInterface
        };
    var It = "dropdown",
        Dt = "bs.dropdown",
        wt = "." + Dt,
        At = ".data-api",
        Nt = g.fn[It],
        Ot = new RegExp("38|40|27"),
        kt = {
            HIDE: "hide" + wt,
            HIDDEN: "hidden" + wt,
            SHOW: "show" + wt,
            SHOWN: "shown" + wt,
            CLICK: "click" + wt,
            CLICK_DATA_API: "click" + wt + At,
            KEYDOWN_DATA_API: "keydown" + wt + At,
            KEYUP_DATA_API: "keyup" + wt + At
        },
        Pt = "disabled",
        Lt = "show",
        jt = "dropup",
        Ht = "dropright",
        Rt = "dropleft",
        xt = "dropdown-menu-right",
        Ft = "position-static",
        Ut = '[data-toggle="dropdown"]',
        Wt = ".dropdown form",
        qt = ".dropdown-menu",
        Mt = ".navbar-nav",
        Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Qt = "top-start",
        Bt = "top-end",
        Vt = "bottom-start",
        Yt = "bottom-end",
        zt = "right-start",
        Xt = "left-start",
        $t = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        Gt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        Jt = function() {
            function c(t, e) {
                this._element = t,
                    this._popper = null,
                    this._config = this._getConfig(e),
                    this._menu = this._getMenuElement(),
                    this._inNavbar = this._detectNavbar(),
                    this._addEventListeners()
            }
            var t = c.prototype;
            return t.toggle = function() {
                    if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
                        var t = c._getParentFromElement(this._element),
                            e = g(this._menu).hasClass(Lt);
                        if (c._clearMenus(), !e) {
                            var n = {
                                    relatedTarget: this._element
                                },
                                i = g.Event(kt.SHOW, n);
                            if (g(t).trigger(i), !i.isDefaultPrevented()) {
                                if (!this._inNavbar) {
                                    if ("undefined" == typeof u)
                                        throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                    var o = this._element;
                                    "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference,
                                            "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])),
                                        "scrollParent" !== this._config.boundary && g(t).addClass(Ft),
                                        this._popper = new u(o, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop),
                                    this._element.focus(),
                                    this._element.setAttribute("aria-expanded", !0),
                                    g(this._menu).toggleClass(Lt),
                                    g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n))
                            }
                        }
                    }
                },
                t.show = function() {
                    if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
                        var t = {
                                relatedTarget: this._element
                            },
                            e = g.Event(kt.SHOW, t),
                            n = c._getParentFromElement(this._element);
                        g(n).trigger(e),
                            e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt),
                                g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)))
                    }
                },
                t.hide = function() {
                    if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
                        var t = {
                                relatedTarget: this._element
                            },
                            e = g.Event(kt.HIDE, t),
                            n = c._getParentFromElement(this._element);
                        g(n).trigger(e),
                            e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt),
                                g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)))
                    }
                },
                t.dispose = function() {
                    g.removeData(this._element, Dt),
                        g(this._element).off(wt),
                        this._element = null,
                        (this._menu = null) !== this._popper && (this._popper.destroy(),
                            this._popper = null)
                },
                t.update = function() {
                    this._inNavbar = this._detectNavbar(),
                        null !== this._popper && this._popper.scheduleUpdate()
                },
                t._addEventListeners = function() {
                    var e = this;
                    g(this._element).on(kt.CLICK, function(t) {
                        t.preventDefault(),
                            t.stopPropagation(),
                            e.toggle()
                    })
                },
                t._getConfig = function(t) {
                    return t = l({}, this.constructor.Default, g(this._element).data(), t),
                        _.typeCheckConfig(It, t, this.constructor.DefaultType),
                        t
                },
                t._getMenuElement = function() {
                    if (!this._menu) {
                        var t = c._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(qt))
                    }
                    return this._menu
                },
                t._getPlacement = function() {
                    var t = g(this._element.parentNode),
                        e = Vt;
                    return t.hasClass(jt) ? (e = Qt,
                            g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt),
                        e
                },
                t._detectNavbar = function() {
                    return 0 < g(this._element).closest(".navbar").length
                },
                t._getOffset = function() {
                    var e = this,
                        t = {};
                    return "function" == typeof this._config.offset ? t.fn = function(t) {
                            return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}),
                                t
                        } :
                        t.offset = this._config.offset,
                        t
                },
                t._getPopperConfig = function() {
                    var t = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (t.modifiers.applyStyle = {
                            enabled: !1
                        }),
                        t
                },
                c._jQueryInterface = function(e) {
                    return this.each(function() {
                        var t = g(this).data(Dt);
                        if (t || (t = new c(this, "object" == typeof e ? e : null),
                                g(this).data(Dt, t)),
                            "string" == typeof e) {
                            if ("undefined" == typeof t[e])
                                throw new TypeError('No method named "' + e + '"');
                            t[e]()
                        }
                    })
                },
                c._clearMenus = function(t) {
                    if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                        for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
                            var o = c._getParentFromElement(e[n]),
                                r = g(e[n]).data(Dt),
                                s = {
                                    relatedTarget: e[n]
                                };
                            if (t && "click" === t.type && (s.clickEvent = t),
                                r) {
                                var a = r._menu;
                                if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
                                    var l = g.Event(kt.HIDE, s);
                                    g(o).trigger(l),
                                        l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                                            e[n].setAttribute("aria-expanded", "false"),
                                            g(a).removeClass(Lt),
                                            g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)))
                                }
                            }
                        }
                },
                c._getParentFromElement = function(t) {
                    var e, n = _.getSelectorFromElement(t);
                    return n && (e = document.querySelector(n)),
                        e || t.parentNode
                },
                c._dataApiKeydownHandler = function(t) {
                    if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(),
                            t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))) {
                        var e = c._getParentFromElement(this),
                            n = g(e).hasClass(Lt);
                        if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                            var i = [].slice.call(e.querySelectorAll(Kt));
                            if (0 !== i.length) {
                                var o = i.indexOf(t.target);
                                38 === t.which && 0 < o && o--,
                                    40 === t.which && o < i.length - 1 && o++,
                                    o < 0 && (o = 0),
                                    i[o].focus()
                            }
                        } else {
                            if (27 === t.which) {
                                var r = e.querySelector(Ut);
                                g(r).trigger("focus")
                            }
                            g(this).trigger("click")
                        }
                    }
                },
                s(c, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return $t
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Gt
                    }
                }]),
                c
        }();
    g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function(t) {
            t.preventDefault(),
                t.stopPropagation(),
                Jt._jQueryInterface.call(g(this), "toggle")
        }).on(kt.CLICK_DATA_API, Wt, function(t) {
            t.stopPropagation()
        }),
        g.fn[It] = Jt._jQueryInterface,
        g.fn[It].Constructor = Jt,
        g.fn[It].noConflict = function() {
            return g.fn[It] = Nt,
                Jt._jQueryInterface
        };
    var Zt = "modal",
        te = "bs.modal",
        ee = "." + te,
        ne = g.fn[Zt],
        ie = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        oe = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        re = {
            HIDE: "hide" + ee,
            HIDDEN: "hidden" + ee,
            SHOW: "show" + ee,
            SHOWN: "shown" + ee,
            FOCUSIN: "focusin" + ee,
            RESIZE: "resize" + ee,
            CLICK_DISMISS: "click.dismiss" + ee,
            KEYDOWN_DISMISS: "keydown.dismiss" + ee,
            MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
            CLICK_DATA_API: "click" + ee + ".data-api"
        },
        se = "modal-dialog-scrollable",
        ae = "modal-scrollbar-measure",
        le = "modal-backdrop",
        ce = "modal-open",
        he = "fade",
        ue = "show",
        fe = ".modal-dialog",
        de = ".modal-body",
        ge = '[data-toggle="modal"]',
        _e = '[data-dismiss="modal"]',
        me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        pe = ".sticky-top",
        ve = function() {
            function o(t, e) {
                this._config = this._getConfig(e),
                    this._element = t,
                    this._dialog = t.querySelector(fe),
                    this._backdrop = null,
                    this._isShown = !1,
                    this._isBodyOverflowing = !1,
                    this._ignoreBackdropClick = !1,
                    this._isTransitioning = !1,
                    this._scrollbarWidth = 0
            }
            var t = o.prototype;
            return t.toggle = function(t) {
                    return this._isShown ? this.hide() : this.show(t)
                },
                t.show = function(t) {
                    var e = this;
                    if (!this._isShown && !this._isTransitioning) {
                        g(this._element).hasClass(he) && (this._isTransitioning = !0);
                        var n = g.Event(re.SHOW, {
                            relatedTarget: t
                        });
                        g(this._element).trigger(n),
                            this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                g(this._element).on(re.CLICK_DISMISS, _e, function(t) {
                                    return e.hide(t)
                                }),
                                g(this._dialog).on(re.MOUSEDOWN_DISMISS, function() {
                                    g(e._element).one(re.MOUSEUP_DISMISS, function(t) {
                                        g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                                    })
                                }),
                                this._showBackdrop(function() {
                                    return e._showElement(t)
                                }))
                    }
                },
                t.hide = function(t) {
                    var e = this;
                    if (t && t.preventDefault(),
                        this._isShown && !this._isTransitioning) {
                        var n = g.Event(re.HIDE);
                        if (g(this._element).trigger(n),
                            this._isShown && !n.isDefaultPrevented()) {
                            this._isShown = !1;
                            var i = g(this._element).hasClass(he);
                            if (i && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                g(document).off(re.FOCUSIN),
                                g(this._element).removeClass(ue),
                                g(this._element).off(re.CLICK_DISMISS),
                                g(this._dialog).off(re.MOUSEDOWN_DISMISS),
                                i) {
                                var o = _.getTransitionDurationFromElement(this._element);
                                g(this._element).one(_.TRANSITION_END, function(t) {
                                    return e._hideModal(t)
                                }).emulateTransitionEnd(o)
                            } else
                                this._hideModal()
                        }
                    }
                },
                t.dispose = function() {
                    [window, this._element, this._dialog].forEach(function(t) {
                            return g(t).off(ee)
                        }),
                        g(document).off(re.FOCUSIN),
                        g.removeData(this._element, te),
                        this._config = null,
                        this._element = null,
                        this._dialog = null,
                        this._backdrop = null,
                        this._isShown = null,
                        this._isBodyOverflowing = null,
                        this._ignoreBackdropClick = null,
                        this._isTransitioning = null,
                        this._scrollbarWidth = null
                },
                t.handleUpdate = function() {
                    this._adjustDialog()
                },
                t._getConfig = function(t) {
                    return t = l({}, ie, t),
                        _.typeCheckConfig(Zt, t, oe),
                        t
                },
                t._showElement = function(t) {
                    var e = this,
                        n = g(this._element).hasClass(he);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                        this._element.style.display = "block",
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0,
                        n && _.reflow(this._element),
                        g(this._element).addClass(ue),
                        this._config.focus && this._enforceFocus();
                    var i = g.Event(re.SHOWN, {
                            relatedTarget: t
                        }),
                        o = function() {
                            e._config.focus && e._element.focus(),
                                e._isTransitioning = !1,
                                g(e._element).trigger(i)
                        };
                    if (n) {
                        var r = _.getTransitionDurationFromElement(this._dialog);
                        g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else
                        o()
                },
                t._enforceFocus = function() {
                    var e = this;
                    g(document).off(re.FOCUSIN).on(re.FOCUSIN, function(t) {
                        document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus()
                    })
                },
                t._setEscapeEvent = function() {
                    var e = this;
                    this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function(t) {
                        27 === t.which && (t.preventDefault(),
                            e.hide())
                    }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS)
                },
                t._setResizeEvent = function() {
                    var e = this;
                    this._isShown ? g(window).on(re.RESIZE, function(t) {
                        return e.handleUpdate(t)
                    }) : g(window).off(re.RESIZE)
                },
                t._hideModal = function() {
                    var t = this;
                    this._element.style.display = "none",
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._isTransitioning = !1,
                        this._showBackdrop(function() {
                            g(document.body).removeClass(ce),
                                t._resetAdjustments(),
                                t._resetScrollbar(),
                                g(t._element).trigger(re.HIDDEN)
                        })
                },
                t._removeBackdrop = function() {
                    this._backdrop && (g(this._backdrop).remove(),
                        this._backdrop = null)
                },
                t._showBackdrop = function(t) {
                    var e = this,
                        n = g(this._element).hasClass(he) ? he : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"),
                            this._backdrop.className = le,
                            n && this._backdrop.classList.add(n),
                            g(this._backdrop).appendTo(document.body),
                            g(this._element).on(re.CLICK_DISMISS, function(t) {
                                e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                            }),
                            n && _.reflow(this._backdrop),
                            g(this._backdrop).addClass(ue), !t)
                            return;
                        if (!n)
                            return void t();
                        var i = _.getTransitionDurationFromElement(this._backdrop);
                        g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
                    } else if (!this._isShown && this._backdrop) {
                        g(this._backdrop).removeClass(ue);
                        var o = function() {
                            e._removeBackdrop(),
                                t && t()
                        };
                        if (g(this._element).hasClass(he)) {
                            var r = _.getTransitionDurationFromElement(this._backdrop);
                            g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                        } else
                            o()
                    } else
                        t && t()
                },
                t._adjustDialog = function() {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                        this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                },
                t._resetAdjustments = function() {
                    this._element.style.paddingLeft = "",
                        this._element.style.paddingRight = ""
                },
                t._checkScrollbar = function() {
                    var t = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = t.left + t.right < window.innerWidth,
                        this._scrollbarWidth = this._getScrollbarWidth()
                },
                t._setScrollbar = function() {
                    var o = this;
                    if (this._isBodyOverflowing) {
                        var t = [].slice.call(document.querySelectorAll(me)),
                            e = [].slice.call(document.querySelectorAll(pe));
                        g(t).each(function(t, e) {
                                var n = e.style.paddingRight,
                                    i = g(e).css("padding-right");
                                g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                            }),
                            g(e).each(function(t, e) {
                                var n = e.style.marginRight,
                                    i = g(e).css("margin-right");
                                g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                            });
                        var n = document.body.style.paddingRight,
                            i = g(document.body).css("padding-right");
                        g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                    }
                    g(document.body).addClass(ce)
                },
                t._resetScrollbar = function() {
                    var t = [].slice.call(document.querySelectorAll(me));
                    g(t).each(function(t, e) {
                        var n = g(e).data("padding-right");
                        g(e).removeData("padding-right"),
                            e.style.paddingRight = n || ""
                    });
                    var e = [].slice.call(document.querySelectorAll("" + pe));
                    g(e).each(function(t, e) {
                        var n = g(e).data("margin-right");
                        "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right")
                    });
                    var n = g(document.body).data("padding-right");
                    g(document.body).removeData("padding-right"),
                        document.body.style.paddingRight = n || ""
                },
                t._getScrollbarWidth = function() {
                    var t = document.createElement("div");
                    t.className = ae,
                        document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t),
                        e
                },
                o._jQueryInterface = function(n, i) {
                    return this.each(function() {
                        var t = g(this).data(te),
                            e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {});
                        if (t || (t = new o(this, e),
                                g(this).data(te, t)),
                            "string" == typeof n) {
                            if ("undefined" == typeof t[n])
                                throw new TypeError('No method named "' + n + '"');
                            t[n](i)
                        } else
                            e.show && t.show(i)
                    })
                },
                s(o, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return ie
                    }
                }]),
                o
        }();
    g(document).on(re.CLICK_DATA_API, ge, function(t) {
            var e, n = this,
                i = _.getSelectorFromElement(this);
            i && (e = document.querySelector(i));
            var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var r = g(e).one(re.SHOW, function(t) {
                t.isDefaultPrevented() || r.one(re.HIDDEN, function() {
                    g(n).is(":visible") && n.focus()
                })
            });
            ve._jQueryInterface.call(g(e), o, this)
        }),
        g.fn[Zt] = ve._jQueryInterface,
        g.fn[Zt].Constructor = ve,
        g.fn[Zt].noConflict = function() {
            return g.fn[Zt] = ne,
                ve._jQueryInterface
        };
    var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Ee = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function Se(t, s, e) {
        if (0 === t.length)
            return t;
        if (e && "function" == typeof e)
            return e(t);
        for (var n = (new window.DOMParser).parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function(t, e) {
                var n = l[t],
                    i = n.nodeName.toLowerCase();
                if (-1 === a.indexOf(n.nodeName.toLowerCase()))
                    return n.parentNode.removeChild(n),
                        "continue";
                var o = [].slice.call(n.attributes),
                    r = [].concat(s["*"] || [], s[i] || []);
                o.forEach(function(t) {
                    (function(t, e) {
                        var n = t.nodeName.toLowerCase();
                        if (-1 !== e.indexOf(n))
                            return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));
                        for (var i = e.filter(function(t) {
                                return t instanceof RegExp
                            }), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o]))
                                return !0;
                        return !1
                    })(t, r) || n.removeAttribute(t.nodeName)
                })
            }, o = 0, r = l.length; o < r; o++)
            i(o);
        return n.body.innerHTML
    }
    var be = "tooltip",
        Ie = "bs.tooltip",
        De = "." + Ie,
        we = g.fn[be],
        Ae = "bs-tooltip",
        Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g"),
        Oe = ["sanitize", "whiteList", "sanitizeFn"],
        ke = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        },
        Pe = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Le = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Ee
        },
        je = "show",
        He = "out",
        Re = {
            HIDE: "hide" + De,
            HIDDEN: "hidden" + De,
            SHOW: "show" + De,
            SHOWN: "shown" + De,
            INSERTED: "inserted" + De,
            CLICK: "click" + De,
            FOCUSIN: "focusin" + De,
            FOCUSOUT: "focusout" + De,
            MOUSEENTER: "mouseenter" + De,
            MOUSELEAVE: "mouseleave" + De
        },
        xe = "fade",
        Fe = "show",
        Ue = ".tooltip-inner",
        We = ".arrow",
        qe = "hover",
        Me = "focus",
        Ke = "click",
        Qe = "manual",
        Be = function() {
            function i(t, e) {
                if ("undefined" == typeof u)
                    throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0,
                    this._timeout = 0,
                    this._hoverState = "",
                    this._activeTrigger = {},
                    this._popper = null,
                    this.element = t,
                    this.config = this._getConfig(e),
                    this.tip = null,
                    this._setListeners()
            }
            var t = i.prototype;
            return t.enable = function() {
                    this._isEnabled = !0
                },
                t.disable = function() {
                    this._isEnabled = !1
                },
                t.toggleEnabled = function() {
                    this._isEnabled = !this._isEnabled
                },
                t.toggle = function(t) {
                    if (this._isEnabled)
                        if (t) {
                            var e = this.constructor.DATA_KEY,
                                n = g(t.currentTarget).data(e);
                            n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()),
                                    g(t.currentTarget).data(e, n)),
                                n._activeTrigger.click = !n._activeTrigger.click,
                                n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                        } else {
                            if (g(this.getTipElement()).hasClass(Fe))
                                return void this._leave(null, this);
                            this._enter(null, this)
                        }
                },
                t.dispose = function() {
                    clearTimeout(this._timeout),
                        g.removeData(this.element, this.constructor.DATA_KEY),
                        g(this.element).off(this.constructor.EVENT_KEY),
                        g(this.element).closest(".modal").off("hide.bs.modal"),
                        this.tip && g(this.tip).remove(),
                        this._isEnabled = null,
                        this._timeout = null,
                        this._hoverState = null,
                        (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
                        this._popper = null,
                        this.element = null,
                        this.config = null,
                        this.tip = null
                },
                t.show = function() {
                    var e = this;
                    if ("none" === g(this.element).css("display"))
                        throw new Error("Please use show on visible elements");
                    var t = g.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        g(this.element).trigger(t);
                        var n = _.findShadowRoot(this.element),
                            i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                        if (t.isDefaultPrevented() || !i)
                            return;
                        var o = this.getTipElement(),
                            r = _.getUID(this.constructor.NAME);
                        o.setAttribute("id", r),
                            this.element.setAttribute("aria-describedby", r),
                            this.setContent(),
                            this.config.animation && g(o).addClass(xe);
                        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                            a = this._getAttachment(s);
                        this.addAttachmentClass(a);
                        var l = this._getContainer();
                        g(o).data(this.constructor.DATA_KEY, this),
                            g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l),
                            g(this.element).trigger(this.constructor.Event.INSERTED),
                            this._popper = new u(this.element, o, {
                                placement: a,
                                modifiers: {
                                    offset: this._getOffset(),
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: We
                                    },
                                    preventOverflow: {
                                        boundariesElement: this.config.boundary
                                    }
                                },
                                onCreate: function(t) {
                                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                                },
                                onUpdate: function(t) {
                                    return e._handlePopperPlacementChange(t)
                                }
                            }),
                            g(o).addClass(Fe),
                            "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                        var c = function() {
                            e.config.animation && e._fixTransition();
                            var t = e._hoverState;
                            e._hoverState = null,
                                g(e.element).trigger(e.constructor.Event.SHOWN),
                                t === He && e._leave(null, e)
                        };
                        if (g(this.tip).hasClass(xe)) {
                            var h = _.getTransitionDurationFromElement(this.tip);
                            g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
                        } else
                            c()
                    }
                },
                t.hide = function(t) {
                    var e = this,
                        n = this.getTipElement(),
                        i = g.Event(this.constructor.Event.HIDE),
                        o = function() {
                            e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n),
                                e._cleanTipClass(),
                                e.element.removeAttribute("aria-describedby"),
                                g(e.element).trigger(e.constructor.Event.HIDDEN),
                                null !== e._popper && e._popper.destroy(),
                                t && t()
                        };
                    if (g(this.element).trigger(i), !i.isDefaultPrevented()) {
                        if (g(n).removeClass(Fe),
                            "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                            this._activeTrigger[Ke] = !1,
                            this._activeTrigger[Me] = !1,
                            this._activeTrigger[qe] = !1,
                            g(this.tip).hasClass(xe)) {
                            var r = _.getTransitionDurationFromElement(n);
                            g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                        } else
                            o();
                        this._hoverState = ""
                    }
                },
                t.update = function() {
                    null !== this._popper && this._popper.scheduleUpdate()
                },
                t.isWithContent = function() {
                    return Boolean(this.getTitle())
                },
                t.addAttachmentClass = function(t) {
                    g(this.getTipElement()).addClass(Ae + "-" + t)
                },
                t.getTipElement = function() {
                    return this.tip = this.tip || g(this.config.template)[0],
                        this.tip
                },
                t.setContent = function() {
                    var t = this.getTipElement();
                    this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()),
                        g(t).removeClass(xe + " " + Fe)
                },
                t.setElementContent = function(t, e) {
                    "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)),
                        t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text())
                },
                t.getTitle = function() {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                        t
                },
                t._getOffset = function() {
                    var e = this,
                        t = {};
                    return "function" == typeof this.config.offset ? t.fn = function(t) {
                            return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}),
                                t
                        } :
                        t.offset = this.config.offset,
                        t
                },
                t._getContainer = function() {
                    return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
                },
                t._getAttachment = function(t) {
                    return Pe[t.toUpperCase()]
                },
                t._setListeners = function() {
                    var i = this;
                    this.config.trigger.split(" ").forEach(function(t) {
                            if ("click" === t)
                                g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                                    return i.toggle(t)
                                });
                            else if (t !== Qe) {
                                var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                                    n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                                g(i.element).on(e, i.config.selector, function(t) {
                                    return i._enter(t)
                                }).on(n, i.config.selector, function(t) {
                                    return i._leave(t)
                                })
                            }
                        }),
                        g(this.element).closest(".modal").on("hide.bs.modal", function() {
                            i.element && i.hide()
                        }),
                        this.config.selector ? this.config = l({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                },
                t._fixTitle = function() {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                        this.element.setAttribute("title", ""))
                },
                t._enter = function(t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()),
                        g(t.currentTarget).data(n, e)),
                    t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0),
                        g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout),
                            e._hoverState = je,
                            e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                                e._hoverState === je && e.show()
                            }, e.config.delay.show) : e.show())
                },
                t._leave = function(t, e) {
                    var n = this.constructor.DATA_KEY;
                    (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()),
                        g(t.currentTarget).data(n, e)),
                    t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1),
                        e._isWithActiveTrigger() || (clearTimeout(e._timeout),
                            e._hoverState = He,
                            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                                e._hoverState === He && e.hide()
                            }, e.config.delay.hide) : e.hide())
                },
                t._isWithActiveTrigger = function() {
                    for (var t in this._activeTrigger)
                        if (this._activeTrigger[t])
                            return !0;
                    return !1
                },
                t._getConfig = function(t) {
                    var e = g(this.element).data();
                    return Object.keys(e).forEach(function(t) {
                            -1 !== Oe.indexOf(t) && delete e[t]
                        }),
                        "number" == typeof(t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                            show: t.delay,
                            hide: t.delay
                        }),
                        "number" == typeof t.title && (t.title = t.title.toString()),
                        "number" == typeof t.content && (t.content = t.content.toString()),
                        _.typeCheckConfig(be, t, this.constructor.DefaultType),
                        t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)),
                        t
                },
                t._getDelegateConfig = function() {
                    var t = {};
                    if (this.config)
                        for (var e in this.config)
                            this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t
                },
                t._cleanTipClass = function() {
                    var t = g(this.getTipElement()),
                        e = t.attr("class").match(Ne);
                    null !== e && e.length && t.removeClass(e.join(""))
                },
                t._handlePopperPlacementChange = function(t) {
                    var e = t.instance;
                    this.tip = e.popper,
                        this._cleanTipClass(),
                        this.addAttachmentClass(this._getAttachment(t.placement))
                },
                t._fixTransition = function() {
                    var t = this.getTipElement(),
                        e = this.config.animation;
                    null === t.getAttribute("x-placement") && (g(t).removeClass(xe),
                        this.config.animation = !1,
                        this.hide(),
                        this.show(),
                        this.config.animation = e)
                },
                i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = g(this).data(Ie),
                            e = "object" == typeof n && n;
                        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e),
                                    g(this).data(Ie, t)),
                                "string" == typeof n)) {
                            if ("undefined" == typeof t[n])
                                throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        }
                    })
                },
                s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Le
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return be
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return Ie
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return Re
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return De
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return ke
                    }
                }]),
                i
        }();
    g.fn[be] = Be._jQueryInterface,
        g.fn[be].Constructor = Be,
        g.fn[be].noConflict = function() {
            return g.fn[be] = we,
                Be._jQueryInterface
        };
    var Ve = "popover",
        Ye = "bs.popover",
        ze = "." + Ye,
        Xe = g.fn[Ve],
        $e = "bs-popover",
        Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g"),
        Je = l({}, Be.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        Ze = l({}, Be.DefaultType, {
            content: "(string|element|function)"
        }),
        tn = "fade",
        en = "show",
        nn = ".popover-header",
        on = ".popover-body",
        rn = {
            HIDE: "hide" + ze,
            HIDDEN: "hidden" + ze,
            SHOW: "show" + ze,
            SHOWN: "shown" + ze,
            INSERTED: "inserted" + ze,
            CLICK: "click" + ze,
            FOCUSIN: "focusin" + ze,
            FOCUSOUT: "focusout" + ze,
            MOUSEENTER: "mouseenter" + ze,
            MOUSELEAVE: "mouseleave" + ze
        },
        sn = function(t) {
            var e, n;

            function i() {
                return t.apply(this, arguments) || this
            }
            n = t,
                (e = i).prototype = Object.create(n.prototype),
                (e.prototype.constructor = e).__proto__ = n;
            var o = i.prototype;
            return o.isWithContent = function() {
                    return this.getTitle() || this._getContent()
                },
                o.addAttachmentClass = function(t) {
                    g(this.getTipElement()).addClass($e + "-" + t)
                },
                o.getTipElement = function() {
                    return this.tip = this.tip || g(this.config.template)[0],
                        this.tip
                },
                o.setContent = function() {
                    var t = g(this.getTipElement());
                    this.setElementContent(t.find(nn), this.getTitle());
                    var e = this._getContent();
                    "function" == typeof e && (e = e.call(this.element)),
                        this.setElementContent(t.find(on), e),
                        t.removeClass(tn + " " + en)
                },
                o._getContent = function() {
                    return this.element.getAttribute("data-content") || this.config.content
                },
                o._cleanTipClass = function() {
                    var t = g(this.getTipElement()),
                        e = t.attr("class").match(Ge);
                    null !== e && 0 < e.length && t.removeClass(e.join(""))
                },
                i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = g(this).data(Ye),
                            e = "object" == typeof n ? n : null;
                        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e),
                                    g(this).data(Ye, t)),
                                "string" == typeof n)) {
                            if ("undefined" == typeof t[n])
                                throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        }
                    })
                },
                s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return Je
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return Ve
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return Ye
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return rn
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return ze
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Ze
                    }
                }]),
                i
        }(Be);
    g.fn[Ve] = sn._jQueryInterface,
        g.fn[Ve].Constructor = sn,
        g.fn[Ve].noConflict = function() {
            return g.fn[Ve] = Xe,
                sn._jQueryInterface
        };
    var an = "scrollspy",
        ln = "bs.scrollspy",
        cn = "." + ln,
        hn = g.fn[an],
        un = {
            offset: 10,
            method: "auto",
            target: ""
        },
        fn = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        dn = {
            ACTIVATE: "activate" + cn,
            SCROLL: "scroll" + cn,
            LOAD_DATA_API: "load" + cn + ".data-api"
        },
        gn = "dropdown-item",
        _n = "active",
        mn = '[data-spy="scroll"]',
        pn = ".nav, .list-group",
        vn = ".nav-link",
        yn = ".nav-item",
        En = ".list-group-item",
        Cn = ".dropdown",
        Tn = ".dropdown-item",
        Sn = ".dropdown-toggle",
        bn = "offset",
        In = "position",
        Dn = function() {
            function n(t, e) {
                var n = this;
                this._element = t,
                    this._scrollElement = "BODY" === t.tagName ? window : t,
                    this._config = this._getConfig(e),
                    this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn,
                    this._offsets = [],
                    this._targets = [],
                    this._activeTarget = null,
                    this._scrollHeight = 0,
                    g(this._scrollElement).on(dn.SCROLL, function(t) {
                        return n._process(t)
                    }),
                    this.refresh(),
                    this._process()
            }
            var t = n.prototype;
            return t.refresh = function() {
                    var e = this,
                        t = this._scrollElement === this._scrollElement.window ? bn : In,
                        o = "auto" === this._config.method ? t : this._config.method,
                        r = o === In ? this._getScrollTop() : 0;
                    this._offsets = [],
                        this._targets = [],
                        this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                            var e, n = _.getSelectorFromElement(t);
                            if (n && (e = document.querySelector(n)),
                                e) {
                                var i = e.getBoundingClientRect();
                                if (i.width || i.height)
                                    return [g(e)[o]().top + r, n]
                            }
                            return null
                        }).filter(function(t) {
                            return t
                        }).sort(function(t, e) {
                            return t[0] - e[0]
                        }).forEach(function(t) {
                            e._offsets.push(t[0]),
                                e._targets.push(t[1])
                        })
                },
                t.dispose = function() {
                    g.removeData(this._element, ln),
                        g(this._scrollElement).off(cn),
                        this._element = null,
                        this._scrollElement = null,
                        this._config = null,
                        this._selector = null,
                        this._offsets = null,
                        this._targets = null,
                        this._activeTarget = null,
                        this._scrollHeight = null
                },
                t._getConfig = function(t) {
                    if ("string" != typeof(t = l({}, un, "object" == typeof t && t ? t : {})).target) {
                        var e = g(t.target).attr("id");
                        e || (e = _.getUID(an),
                                g(t.target).attr("id", e)),
                            t.target = "#" + e
                    }
                    return _.typeCheckConfig(an, t, fn),
                        t
                },
                t._getScrollTop = function() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                },
                t._getScrollHeight = function() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                },
                t._getOffsetHeight = function() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                },
                t._process = function() {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(),
                        n <= t) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                            return this._activeTarget = null,
                                void this._clear();
                        for (var o = this._offsets.length; o--;) {
                            this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                        }
                    }
                },
                t._activate = function(e) {
                    this._activeTarget = e,
                        this._clear();
                    var t = this._selector.split(",").map(function(t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                        }),
                        n = g([].slice.call(document.querySelectorAll(t.join(","))));
                    n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n),
                            n.addClass(_n)) : (n.addClass(_n),
                            n.parents(pn).prev(vn + ", " + En).addClass(_n),
                            n.parents(pn).prev(yn).children(vn).addClass(_n)),
                        g(this._scrollElement).trigger(dn.ACTIVATE, {
                            relatedTarget: e
                        })
                },
                t._clear = function() {
                    [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                        return t.classList.contains(_n)
                    }).forEach(function(t) {
                        return t.classList.remove(_n)
                    })
                },
                n._jQueryInterface = function(e) {
                    return this.each(function() {
                        var t = g(this).data(ln);
                        if (t || (t = new n(this, "object" == typeof e && e),
                                g(this).data(ln, t)),
                            "string" == typeof e) {
                            if ("undefined" == typeof t[e])
                                throw new TypeError('No method named "' + e + '"');
                            t[e]()
                        }
                    })
                },
                s(n, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return un
                    }
                }]),
                n
        }();
    g(window).on(dn.LOAD_DATA_API, function() {
            for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--;) {
                var n = g(t[e]);
                Dn._jQueryInterface.call(n, n.data())
            }
        }),
        g.fn[an] = Dn._jQueryInterface,
        g.fn[an].Constructor = Dn,
        g.fn[an].noConflict = function() {
            return g.fn[an] = hn,
                Dn._jQueryInterface
        };
    var wn = "bs.tab",
        An = "." + wn,
        Nn = g.fn.tab,
        On = {
            HIDE: "hide" + An,
            HIDDEN: "hidden" + An,
            SHOW: "show" + An,
            SHOWN: "shown" + An,
            CLICK_DATA_API: "click" + An + ".data-api"
        },
        kn = "dropdown-menu",
        Pn = "active",
        Ln = "disabled",
        jn = "fade",
        Hn = "show",
        Rn = ".dropdown",
        xn = ".nav, .list-group",
        Fn = ".active",
        Un = "> li > .active",
        Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        qn = ".dropdown-toggle",
        Mn = "> .dropdown-menu .active",
        Kn = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.show = function() {
                    var n = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) {
                        var t, i, e = g(this._element).closest(xn)[0],
                            o = _.getSelectorFromElement(this._element);
                        if (e) {
                            var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;
                            i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
                        }
                        var s = g.Event(On.HIDE, {
                                relatedTarget: this._element
                            }),
                            a = g.Event(On.SHOW, {
                                relatedTarget: i
                            });
                        if (i && g(i).trigger(s),
                            g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                            o && (t = document.querySelector(o)),
                                this._activate(this._element, e);
                            var l = function() {
                                var t = g.Event(On.HIDDEN, {
                                        relatedTarget: n._element
                                    }),
                                    e = g.Event(On.SHOWN, {
                                        relatedTarget: i
                                    });
                                g(i).trigger(t),
                                    g(n._element).trigger(e)
                            };
                            t ? this._activate(t, t.parentNode, l) : l()
                        }
                    }
                },
                t.dispose = function() {
                    g.removeData(this._element, wn),
                        this._element = null
                },
                t._activate = function(t, e, n) {
                    var i = this,
                        o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0],
                        r = n && o && g(o).hasClass(jn),
                        s = function() {
                            return i._transitionComplete(t, o, n)
                        };
                    if (o && r) {
                        var a = _.getTransitionDurationFromElement(o);
                        g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a)
                    } else
                        s()
                },
                t._transitionComplete = function(t, e, n) {
                    if (e) {
                        g(e).removeClass(Pn);
                        var i = g(e.parentNode).find(Mn)[0];
                        i && g(i).removeClass(Pn),
                            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                    }
                    if (g(t).addClass(Pn),
                        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                        _.reflow(t),
                        t.classList.contains(jn) && t.classList.add(Hn),
                        t.parentNode && g(t.parentNode).hasClass(kn)) {
                        var o = g(t).closest(Rn)[0];
                        if (o) {
                            var r = [].slice.call(o.querySelectorAll(qn));
                            g(r).addClass(Pn)
                        }
                        t.setAttribute("aria-expanded", !0)
                    }
                    n && n()
                },
                i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = g(this),
                            e = t.data(wn);
                        if (e || (e = new i(this),
                                t.data(wn, e)),
                            "string" == typeof n) {
                            if ("undefined" == typeof e[n])
                                throw new TypeError('No method named "' + n + '"');
                            e[n]()
                        }
                    })
                },
                s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }]),
                i
        }();
    g(document).on(On.CLICK_DATA_API, Wn, function(t) {
            t.preventDefault(),
                Kn._jQueryInterface.call(g(this), "show")
        }),
        g.fn.tab = Kn._jQueryInterface,
        g.fn.tab.Constructor = Kn,
        g.fn.tab.noConflict = function() {
            return g.fn.tab = Nn,
                Kn._jQueryInterface
        };
    var Qn = "toast",
        Bn = "bs.toast",
        Vn = "." + Bn,
        Yn = g.fn[Qn],
        zn = {
            CLICK_DISMISS: "click.dismiss" + Vn,
            HIDE: "hide" + Vn,
            HIDDEN: "hidden" + Vn,
            SHOW: "show" + Vn,
            SHOWN: "shown" + Vn
        },
        Xn = "fade",
        $n = "hide",
        Gn = "show",
        Jn = "showing",
        Zn = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        ti = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        ei = '[data-dismiss="toast"]',
        ni = function() {
            function i(t, e) {
                this._element = t,
                    this._config = this._getConfig(e),
                    this._timeout = null,
                    this._setListeners()
            }
            var t = i.prototype;
            return t.show = function() {
                    var t = this;
                    g(this._element).trigger(zn.SHOW),
                        this._config.animation && this._element.classList.add(Xn);
                    var e = function() {
                        t._element.classList.remove(Jn),
                            t._element.classList.add(Gn),
                            g(t._element).trigger(zn.SHOWN),
                            t._config.autohide && t.hide()
                    };
                    if (this._element.classList.remove($n),
                        this._element.classList.add(Jn),
                        this._config.animation) {
                        var n = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
                    } else
                        e()
                },
                t.hide = function(t) {
                    var e = this;
                    this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE),
                        t ? this._close() : this._timeout = setTimeout(function() {
                            e._close()
                        }, this._config.delay))
                },
                t.dispose = function() {
                    clearTimeout(this._timeout),
                        this._timeout = null,
                        this._element.classList.contains(Gn) && this._element.classList.remove(Gn),
                        g(this._element).off(zn.CLICK_DISMISS),
                        g.removeData(this._element, Bn),
                        this._element = null,
                        this._config = null
                },
                t._getConfig = function(t) {
                    return t = l({}, ti, g(this._element).data(), "object" == typeof t && t ? t : {}),
                        _.typeCheckConfig(Qn, t, this.constructor.DefaultType),
                        t
                },
                t._setListeners = function() {
                    var t = this;
                    g(this._element).on(zn.CLICK_DISMISS, ei, function() {
                        return t.hide(!0)
                    })
                },
                t._close = function() {
                    var t = this,
                        e = function() {
                            t._element.classList.add($n),
                                g(t._element).trigger(zn.HIDDEN)
                        };
                    if (this._element.classList.remove(Gn),
                        this._config.animation) {
                        var n = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
                    } else
                        e()
                },
                i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var t = g(this),
                            e = t.data(Bn);
                        if (e || (e = new i(this, "object" == typeof n && n),
                                t.data(Bn, e)),
                            "string" == typeof n) {
                            if ("undefined" == typeof e[n])
                                throw new TypeError('No method named "' + n + '"');
                            e[n](this)
                        }
                    })
                },
                s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1"
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return Zn
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return ti
                    }
                }]),
                i
        }();
    g.fn[Qn] = ni._jQueryInterface,
        g.fn[Qn].Constructor = ni,
        g.fn[Qn].noConflict = function() {
            return g.fn[Qn] = Yn,
                ni._jQueryInterface
        },
        function() {
            if ("undefined" == typeof g)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = g.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0])
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(),
        t.Util = _,
        t.Alert = p,
        t.Button = P,
        t.Carousel = lt,
        t.Collapse = bt,
        t.Dropdown = Jt,
        t.Modal = ve,
        t.Popover = sn,
        t.Scrollspy = Dn,
        t.Tab = Kn,
        t.Toast = ni,
        t.Tooltip = Be,
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
});

/* Easing  */
! function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return n(e)
    }) : "object" == typeof module && "object" == typeof module.exports ? exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    function e(n) {
        var e = 7.5625,
            t = 2.75;
        return n < 1 / t ? e * n * n : n < 2 / t ? e * (n -= 1.5 / t) * n + .75 : n < 2.5 / t ? e * (n -= 2.25 / t) * n + .9375 : e * (n -= 2.625 / t) * n + .984375
    }
    void 0 !== n.easing && (n.easing.jswing = n.easing.swing);
    var t = Math.pow,
        u = Math.sqrt,
        r = Math.sin,
        i = Math.cos,
        a = Math.PI,
        c = 1.70158,
        o = 1.525 * c,
        s = 2 * a / 3,
        f = 2 * a / 4.5;
    n.extend(n.easing, {
        def: "easeOutQuad",
        swing: function(e) {
            return n.easing[n.easing.def](e)
        },
        easeInQuad: function(n) {
            return n * n
        },
        easeOutQuad: function(n) {
            return 1 - (1 - n) * (1 - n)
        },
        easeInOutQuad: function(n) {
            return n < .5 ? 2 * n * n : 1 - t(-2 * n + 2, 2) / 2
        },
        easeInCubic: function(n) {
            return n * n * n
        },
        easeOutCubic: function(n) {
            return 1 - t(1 - n, 3)
        },
        easeInOutCubic: function(n) {
            return n < .5 ? 4 * n * n * n : 1 - t(-2 * n + 2, 3) / 2
        },
        easeInQuart: function(n) {
            return n * n * n * n
        },
        easeOutQuart: function(n) {
            return 1 - t(1 - n, 4)
        },
        easeInOutQuart: function(n) {
            return n < .5 ? 8 * n * n * n * n : 1 - t(-2 * n + 2, 4) / 2
        },
        easeInQuint: function(n) {
            return n * n * n * n * n
        },
        easeOutQuint: function(n) {
            return 1 - t(1 - n, 5)
        },
        easeInOutQuint: function(n) {
            return n < .5 ? 16 * n * n * n * n * n : 1 - t(-2 * n + 2, 5) / 2
        },
        easeInSine: function(n) {
            return 1 - i(n * a / 2)
        },
        easeOutSine: function(n) {
            return r(n * a / 2)
        },
        easeInOutSine: function(n) {
            return -(i(a * n) - 1) / 2
        },
        easeInExpo: function(n) {
            return 0 === n ? 0 : t(2, 10 * n - 10)
        },
        easeOutExpo: function(n) {
            return 1 === n ? 1 : 1 - t(2, -10 * n)
        },
        easeInOutExpo: function(n) {
            return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? t(2, 20 * n - 10) / 2 : (2 - t(2, -20 * n + 10)) / 2
        },
        easeInCirc: function(n) {
            return 1 - u(1 - t(n, 2))
        },
        easeOutCirc: function(n) {
            return u(1 - t(n - 1, 2))
        },
        easeInOutCirc: function(n) {
            return n < .5 ? (1 - u(1 - t(2 * n, 2))) / 2 : (u(1 - t(-2 * n + 2, 2)) + 1) / 2
        },
        easeInElastic: function(n) {
            return 0 === n ? 0 : 1 === n ? 1 : -t(2, 10 * n - 10) * r((10 * n - 10.75) * s)
        },
        easeOutElastic: function(n) {
            return 0 === n ? 0 : 1 === n ? 1 : t(2, -10 * n) * r((10 * n - .75) * s) + 1
        },
        easeInOutElastic: function(n) {
            return 0 === n ? 0 : 1 === n ? 1 : n < .5 ? -(t(2, 20 * n - 10) * r((20 * n - 11.125) * f)) / 2 : t(2, -20 * n + 10) * r((20 * n - 11.125) * f) / 2 + 1
        },
        easeInBack: function(n) {
            return (c + 1) * n * n * n - c * n * n
        },
        easeOutBack: function(n) {
            return 1 + (c + 1) * t(n - 1, 3) + c * t(n - 1, 2)
        },
        easeInOutBack: function(n) {
            return n < .5 ? t(2 * n, 2) * (7.189819 * n - o) / 2 : (t(2 * n - 2, 2) * ((o + 1) * (2 * n - 2) + o) + 2) / 2
        },
        easeInBounce: function(n) {
            return 1 - e(1 - n)
        },
        easeOutBounce: e,
        easeInOutBounce: function(n) {
            return n < .5 ? (1 - e(1 - 2 * n)) / 2 : (1 + e(2 * n - 1)) / 2
        }
    })
});

/* Isotope PACKAGED v3.0.2 */
! function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";

    function i(i, s, a) {
        function u(t, e, n) {
            var o, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                    var h = a.data(u, i);
                    if (!h)
                        return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                    var d = h[e];
                    if (!d || "_" == e.charAt(0))
                        return void r(s + " is not a valid method");
                    var l = d.apply(h, n);
                    o = void 0 === o ? l : o
                }),
                void 0 !== o ? o : t
        }

        function h(t, e) {
            t.each(function(t, n) {
                var o = a.data(n, i);
                o ? (o.option(e),
                    o._init()) : (o = new s(n, e),
                    a.data(n, i, o))
            })
        }
        a = a || e || t.jQuery,
            a && (s.prototype.option || (s.prototype.option = function(t) {
                    a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
                }),
                a.fn[i] = function(t) {
                    if ("string" == typeof t) {
                        var e = o.call(arguments, 1);
                        return u(this, t, e)
                    }
                    return h(this, t),
                        this
                },
                n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice,
        s = t.console,
        r = "undefined" == typeof s ? function() {} :
        function(t) {
            s.error(t)
        };
    return n(e || t.jQuery),
        i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return n.indexOf(e) == -1 && n.push(e),
                    this
            }
        },
        e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[t] = i[t] || {};
                return n[e] = !0,
                    this
            }
        },
        e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return n != -1 && i.splice(n, 1),
                    this
            }
        },
        e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                e = e || [];
                for (var s = this._onceEvents && this._onceEvents[t]; o;) {
                    var r = s && s[o];
                    r && (this.off(t, o),
                            delete s[o]),
                        o.apply(this, e),
                        n += r ? 0 : 1,
                        o = i[n]
                }
                return this
            }
        },
        t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }

    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
            e
    }

    function o() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
                e.style.padding = "1px 2px 3px 4px",
                e.style.borderStyle = "solid",
                e.style.borderWidth = "1px 2px 3px 4px",
                e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            s.isBoxSizeOuter = r = 200 == t(o.width),
                i.removeChild(e)
        }
    }

    function s(e) {
        if (o(),
            "string" == typeof e && (e = document.querySelector(e)),
            e && "object" == typeof e && e.nodeType) {
            var s = n(e);
            if ("none" == s.display)
                return i();
            var a = {};
            a.width = e.offsetWidth,
                a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l],
                    c = s[f],
                    m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight,
                y = a.paddingTop + a.paddingBottom,
                g = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                I = a.borderTopWidth + a.borderBottomWidth,
                z = d && r,
                x = t(s.width);
            x !== !1 && (a.width = x + (z ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (z ? 0 : y + I)),
                a.innerWidth = a.width - (p + _),
                a.innerHeight = a.height - (y + I),
                a.outerWidth = a.width + g,
                a.outerHeight = a.height + v,
                a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length,
        d = !1;
    return s
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n + "MatchesSelector";
            if (t[o])
                return o
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
            for (var i in e)
                t[i] = e[i];
            return t
        },
        i.modulo = function(t, e) {
            return (t % e + e) % e
        },
        i.makeArray = function(t) {
            var e = [];
            if (Array.isArray(t))
                e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0; i < t.length; i++)
                    e.push(t[i]);
            else
                e.push(t);
            return e
        },
        i.removeFrom = function(t, e) {
            var i = t.indexOf(e);
            i != -1 && t.splice(i, 1)
        },
        i.getParent = function(t, i) {
            for (; t != document.body;)
                if (t = t.parentNode,
                    e(t, i))
                    return t
        },
        i.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        },
        i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        },
        i.filterFindElements = function(t, n) {
            t = i.makeArray(t);
            var o = [];
            return t.forEach(function(t) {
                    if (t instanceof HTMLElement) {
                        if (!n)
                            return void o.push(t);
                        e(t, n) && o.push(t);
                        for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++)
                            o.push(i[s])
                    }
                }),
                o
        },
        i.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[o];
                t && clearTimeout(t);
                var e = arguments,
                    s = this;
                this[o] = setTimeout(function() {
                    n.apply(s, e),
                        delete s[o]
                }, i || 100)
            }
        },
        i.docReady = function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        },
        i.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
    var n = t.console;
    return i.htmlInit = function(e, o) {
            i.docReady(function() {
                var s = i.toDashed(o),
                    r = "data-" + s,
                    a = document.querySelectorAll("[" + r + "]"),
                    u = document.querySelectorAll(".js-" + s),
                    h = i.makeArray(a).concat(i.makeArray(u)),
                    d = r + "-options",
                    l = t.jQuery;
                h.forEach(function(t) {
                    var i, s = t.getAttribute(r) || t.getAttribute(d);
                    try {
                        i = s && JSON.parse(s)
                    } catch (a) {
                        return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
                    }
                    var u = new e(t, i);
                    l && l.data(t, o, u)
                })
            })
        },
        i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
        t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        for (var e in t)
            return !1;
        return e = null, !0
    }

    function n(t, e) {
        t && (this.element = t,
            this.layout = e,
            this.position = {
                x: 0,
                y: 0
            },
            this._create())
    }

    function o(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style,
        r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[r],
        h = {
            transform: a,
            transition: r,
            transitionDuration: r + "Duration",
            transitionProperty: r + "Property",
            transitionDelay: r + "Delay"
        },
        d = n.prototype = Object.create(t.prototype);
    d.constructor = n,
        d._create = function() {
            this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                },
                this.css({
                    position: "absolute"
                })
        },
        d.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        },
        d.getSize = function() {
            this.size = e(this.element)
        },
        d.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var n = h[i] || i;
                e[n] = t[i]
            }
        },
        d.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                n = t[e ? "left" : "right"],
                o = t[i ? "top" : "bottom"],
                s = this.layout.size,
                r = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
                a = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.height : parseInt(o, 10);
            r = isNaN(r) ? 0 : r,
                a = isNaN(a) ? 0 : a,
                r -= e ? s.paddingLeft : s.paddingRight,
                a -= i ? s.paddingTop : s.paddingBottom,
                this.position.x = r,
                this.position.y = a
        },
        d.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                o = i ? "paddingLeft" : "paddingRight",
                s = i ? "left" : "right",
                r = i ? "right" : "left",
                a = this.position.x + t[o];
            e[s] = this.getXValue(a),
                e[r] = "";
            var u = n ? "paddingTop" : "paddingBottom",
                h = n ? "top" : "bottom",
                d = n ? "bottom" : "top",
                l = this.position.y + t[u];
            e[h] = this.getYValue(l),
                e[d] = "",
                this.css(e),
                this.emitEvent("layout", [this])
        },
        d.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        },
        d.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        },
        d._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                o = parseInt(t, 10),
                s = parseInt(e, 10),
                r = o === this.position.x && s === this.position.y;
            if (this.setPosition(t, e),
                r && !this.isTransitioning)
                return void this.layoutPosition();
            var a = t - i,
                u = e - n,
                h = {};
            h.transform = this.getTranslate(a, u),
                this.transition({
                    to: h,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
        },
        d.getTranslate = function(t, e) {
            var i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop");
            return t = i ? t : -t,
                e = n ? e : -e,
                "translate3d(" + t + "px, " + e + "px, 0)"
        },
        d.goTo = function(t, e) {
            this.setPosition(t, e),
                this.layoutPosition()
        },
        d.moveTo = d._transitionTo,
        d.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10),
                this.position.y = parseInt(e, 10)
        },
        d._nonTransition = function(t) {
            this.css(t.to),
                t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd)
                t.onTransitionEnd[e].call(this)
        },
        d.transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration))
                return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd)
                e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to)
                e.ingProperties[i] = !0,
                t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to),
                this.css(t.to),
                this.isTransitioning = !0
        };
    var l = "opacity," + o(a);
    d.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t,
                    this.css({
                        transitionProperty: l,
                        transitionDuration: t,
                        transitionDelay: this.staggerDelay || 0
                    }),
                    this.element.addEventListener(u, this, !1)
            }
        },
        d.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        },
        d.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = f[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n],
                    i(e.ingProperties) && this.disableTransition(),
                    n in e.clean && (this.element.style[t.propertyName] = "",
                        delete e.clean[n]),
                    n in e.onEnd) {
                    var o = e.onEnd[n];
                    o.call(this),
                        delete e.onEnd[n]
                }
                this.emitEvent("transitionEnd", [this])
            }
        },
        d.disableTransition = function() {
            this.removeTransitionStyles(),
                this.element.removeEventListener(u, this, !1),
                this.isTransitioning = !1
        },
        d._removeStyles = function(t) {
            var e = {};
            for (var i in t)
                e[i] = "";
            this.css(e)
        };
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
            this.css(c)
        },
        d.stagger = function(t) {
            t = isNaN(t) ? 0 : t,
                this.staggerDelay = t + "ms"
        },
        d.removeElem = function() {
            this.element.parentNode.removeChild(this.element),
                this.css({
                    display: ""
                }),
                this.emitEvent("remove", [this])
        },
        d.remove = function() {
            return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                    this.removeElem()
                }),
                void this.hide()) : void this.removeElem()
        },
        d.reveal = function() {
            delete this.isHidden,
                this.css({
                    display: ""
                });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd,
                this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0,
                    onTransitionEnd: e
                })
        },
        d.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        },
        d.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity)
                return "opacity";
            for (var i in e)
                return i
        },
        d.hide = function() {
            this.isHidden = !0,
                this.css({
                    display: ""
                });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd,
                this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: e
                })
        },
        d.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                    display: "none"
                }),
                this.emitEvent("hide"))
        },
        d.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        },
        n
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, s) {
        return e(t, i, n, o, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
    "use strict";

    function s(t, e) {
        var i = n.getQueryElement(t);
        if (!i)
            return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i,
            h && (this.$element = h(this.element)),
            this.options = n.extend({}, this.constructor.defaults),
            this.option(e);
        var o = ++l;
        this.element.outlayerGUID = o,
            f[o] = this,
            this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }

    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype),
            e.prototype.constructor = e,
            e
    }

    function a(t) {
        if ("number" == typeof t)
            return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];
        if (!i.length)
            return 0;
        i = parseFloat(i);
        var o = m[n] || 1;
        return i * o
    }
    var u = t.console,
        h = t.jQuery,
        d = function() {},
        l = 0,
        f = {};
    s.namespace = "outlayer",
        s.Item = o,
        s.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
    var c = s.prototype;
    n.extend(c, e.prototype),
        c.option = function(t) {
            n.extend(this.options, t)
        },
        c._getOption = function(t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        },
        s.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        },
        c._create = function() {
            this.reloadItems(),
                this.stamps = [],
                this.stamp(this.options.stamp),
                n.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize()
        },
        c.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        },
        c._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
                var s = e[o],
                    r = new i(s, this);
                n.push(r)
            }
            return n
        },
        c._filterFindItemElements = function(t) {
            return n.filterFindElements(t, this.options.itemSelector)
        },
        c.getItemElements = function() {
            return this.items.map(function(t) {
                return t.element
            })
        },
        c.layout = function() {
            this._resetLayout(),
                this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e),
                this._isLayoutInited = !0
        },
        c._init = c.layout,
        c._resetLayout = function() {
            this.getSize()
        },
        c.getSize = function() {
            this.size = i(this.element)
        },
        c._getMeasurement = function(t, e) {
            var n, o = this.options[t];
            o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o),
                this[t] = n ? i(n)[e] : o) : this[t] = 0
        },
        c.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t),
                this._layoutItems(t, e),
                this._postLayout()
        },
        c._getItemsForLayout = function(t) {
            return t.filter(function(t) {
                return !t.isIgnored
            })
        },
        c._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t),
                t && t.length) {
                var i = [];
                t.forEach(function(t) {
                        var n = this._getItemLayoutPosition(t);
                        n.item = t,
                            n.isInstant = e || t.isLayoutInstant,
                            i.push(n)
                    }, this),
                    this._processLayoutQueue(i)
            }
        },
        c._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        },
        c._processLayoutQueue = function(t) {
            this.updateStagger(),
                t.forEach(function(t, e) {
                    this._positionItem(t.item, t.x, t.y, t.isInstant, e)
                }, this)
        },
        c.updateStagger = function() {
            var t = this.options.stagger;
            return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t),
                this.stagger)
        },
        c._positionItem = function(t, e, i, n, o) {
            n ? t.goTo(e, i) : (t.stagger(o * this.stagger),
                t.moveTo(e, i))
        },
        c._postLayout = function() {
            this.resizeContainer()
        },
        c.resizeContainer = function() {
            var t = this._getOption("resizeContainer");
            if (t) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0),
                    this._setContainerMeasure(e.height, !1))
            }
        },
        c._getContainerSize = d,
        c._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                    t = Math.max(t, 0),
                    this.element.style[e ? "width" : "height"] = t + "px"
            }
        },
        c._emitCompleteOnItems = function(t, e) {
            function i() {
                o.dispatchEvent(t + "Complete", null, [e])
            }

            function n() {
                r++,
                r == s && i()
            }
            var o = this,
                s = e.length;
            if (!e || !s)
                return void i();
            var r = 0;
            e.forEach(function(e) {
                e.once(t, n)
            })
        },
        c.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n),
                h)
                if (this.$element = this.$element || h(this.element),
                    e) {
                    var o = h.Event(e);
                    o.type = t,
                        this.$element.trigger(o, i)
                } else
                    this.$element.trigger(t, i)
        },
        c.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        },
        c.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        },
        c.stamp = function(t) {
            t = this._find(t),
                t && (this.stamps = this.stamps.concat(t),
                    t.forEach(this.ignore, this))
        },
        c.unstamp = function(t) {
            t = this._find(t),
                t && t.forEach(function(t) {
                    n.removeFrom(this.stamps, t),
                        this.unignore(t)
                }, this)
        },
        c._find = function(t) {
            if (t)
                return "string" == typeof t && (t = this.element.querySelectorAll(t)),
                    t = n.makeArray(t)
        },
        c._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(),
                this.stamps.forEach(this._manageStamp, this))
        },
        c._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        },
        c._manageStamp = d,
        c._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                n = this._boundingRect,
                o = i(t),
                s = {
                    left: e.left - n.left - o.marginLeft,
                    top: e.top - n.top - o.marginTop,
                    right: n.right - e.right - o.marginRight,
                    bottom: n.bottom - e.bottom - o.marginBottom
                };
            return s
        },
        c.handleEvent = n.handleEvent,
        c.bindResize = function() {
            t.addEventListener("resize", this),
                this.isResizeBound = !0
        },
        c.unbindResize = function() {
            t.removeEventListener("resize", this),
                this.isResizeBound = !1
        },
        c.onresize = function() {
            this.resize()
        },
        n.debounceMethod(s, "onresize", 100),
        c.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        },
        c.needsResizeLayout = function() {
            var t = i(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        },
        c.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)),
                e
        },
        c.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0),
                this.reveal(e))
        },
        c.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i),
                    this._resetLayout(),
                    this._manageStamps(),
                    this.layoutItems(e, !0),
                    this.reveal(e),
                    this.layoutItems(i)
            }
        },
        c.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t),
                t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e),
                        t.reveal()
                })
            }
        },
        c.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t),
                t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e),
                        t.hide()
                })
            }
        },
        c.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        },
        c.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        },
        c.getItem = function(t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t)
                    return i
            }
        },
        c.getItems = function(t) {
            t = n.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                    var i = this.getItem(t);
                    i && e.push(i)
                }, this),
                e
        },
        c.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e),
                e && e.length && e.forEach(function(t) {
                    t.remove(),
                        n.removeFrom(this.items, t)
                }, this)
        },
        c.destroy = function() {
            var t = this.element.style;
            t.height = "",
                t.position = "",
                t.width = "",
                this.items.forEach(function(t) {
                    t.destroy()
                }),
                this.unbindResize();
            var e = this.element.outlayerGUID;
            delete f[e],
                delete this.element.outlayerGUID,
                h && h.removeData(this.element, this.constructor.namespace)
        },
        s.data = function(t) {
            t = n.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && f[e]
        },
        s.create = function(t, e) {
            var i = r(s);
            return i.defaults = n.extend({}, s.defaults),
                n.extend(i.defaults, e),
                i.compatOptions = n.extend({}, s.compatOptions),
                i.namespace = t,
                i.data = s.data,
                i.Item = r(o),
                n.htmlInit(i, t),
                h && h.bridget && h.bridget(t, i),
                i
        };
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = o,
        s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {},
        t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
        n = i._create;
    i._create = function() {
            this.id = this.layout.itemGUID++,
                n.call(this),
                this.sortData = {}
        },
        i.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id,
                    this.sortData["original-order"] = this.id,
                    this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var n = e[i];
                    this.sortData[i] = n(this.element, this)
                }
            }
        };
    var o = i.destroy;
    return i.destroy = function() {
            o.apply(this, arguments),
                this.css({
                    display: ""
                })
        },
        e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
        t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        this.isotope = t,
            t && (this.options = t.options[this.namespace],
                this.element = t.element,
                this.items = t.filteredItems,
                this.size = t.size)
    }
    var n = i.prototype,
        o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return o.forEach(function(t) {
            n[t] = function() {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }),
        n.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element),
                i = this.isotope.size && e;
            return i && e.innerHeight != this.isotope.size.innerHeight
        },
        n._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        },
        n.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        },
        n.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        },
        n.getSegmentSize = function(t, e) {
            var i = t + e,
                n = "outer" + e;
            if (this._getMeasurement(i, n), !this[i]) {
                var o = this.getFirstItemSize();
                this[i] = o && o[n] || this.isotope.size["inner" + e]
            }
        },
        n.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        },
        n.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        },
        n.getSize = function() {
            this.isotope.getSize(),
                this.size = this.isotope.size
        },
        i.modes = {},
        i.create = function(t, e) {
            function o() {
                i.apply(this, arguments)
            }
            return o.prototype = Object.create(n),
                o.prototype.constructor = o,
                e && (o.options = e),
                o.prototype.namespace = t,
                i.modes[t] = o,
                o
        },
        i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    return i.compatOptions.fitWidth = "isFitWidth",
        i.prototype._resetLayout = function() {
            this.getSize(),
                this._getMeasurement("columnWidth", "outerWidth"),
                this._getMeasurement("gutter", "outerWidth"),
                this.measureColumns(),
                this.colYs = [];
            for (var t = 0; t < this.cols; t++)
                this.colYs.push(0);
            this.maxY = 0
        },
        i.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter,
                o = this.containerWidth + this.gutter,
                s = o / n,
                r = n - o % n,
                a = r && r < 1 ? "round" : "floor";
            s = Math[a](s),
                this.cols = Math.max(s, 1)
        },
        i.prototype.getContainerWidth = function() {
            var t = this._getOption("fitWidth"),
                i = t ? this.element.parentNode : this.element,
                n = e(i);
            this.containerWidth = n && n.innerWidth
        },
        i.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                i = e && e < 1 ? "round" : "ceil",
                n = Math[i](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var o = this._getColGroup(n), s = Math.min.apply(Math, o), r = o.indexOf(s), a = {
                    x: this.columnWidth * r,
                    y: s
                }, u = s + t.size.outerHeight, h = this.cols + 1 - o.length, d = 0; d < h; d++)
                this.colYs[r + d] = u;
            return a
        },
        i.prototype._getColGroup = function(t) {
            if (t < 2)
                return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) {
                var o = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, o)
            }
            return e
        },
        i.prototype._manageStamp = function(t) {
            var i = e(t),
                n = this._getElementOffset(t),
                o = this._getOption("originLeft"),
                s = o ? n.left : n.right,
                r = s + i.outerWidth,
                a = Math.floor(s / this.columnWidth);
            a = Math.max(0, a);
            var u = Math.floor(r / this.columnWidth);
            u -= r % this.columnWidth ? 0 : 1,
                u = Math.min(this.cols - 1, u);
            for (var h = this._getOption("originTop"), d = (h ? n.top : n.bottom) + i.outerHeight, l = a; l <= u; l++)
                this.colYs[l] = Math.max(d, this.colYs[l])
        },
        i.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
                t
        },
        i.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)
                t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        },
        i.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(),
                t != this.containerWidth
        },
        i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry"),
        n = i.prototype,
        o = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var s in e.prototype)
        o[s] || (n[s] = e.prototype[s]);
    var r = n.measureColumns;
    n.measureColumns = function() {
        this.items = this.isotope.filteredItems,
            r.call(this)
    };
    var a = n._getOption;
    return n._getOption = function(t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
        },
        i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function() {
            this.x = 0,
                this.y = 0,
                this.maxY = 0,
                this._getMeasurement("gutter", "outerWidth")
        },
        i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0,
                this.y = this.maxY);
            var n = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
                this.x += e,
                n
        },
        i._getContainerSize = function() {
            return {
                height: this.maxY
            }
        },
        e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
            horizontalAlignment: 0
        }),
        i = e.prototype;
    return i._resetLayout = function() {
            this.y = 0
        },
        i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        },
        i._getContainerSize = function() {
            return {
                height: this.y
            }
        },
        e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, s, r, a) {
        return e(t, i, n, o, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, n, o, s, r) {
    function a(t, e) {
        return function(i, n) {
            for (var o = 0; o < t.length; o++) {
                var s = t[o],
                    r = i.sortData[s],
                    a = n.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e,
                        h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery,
        h = String.prototype.trim ? function(t) {
            return t.trim()
        } :
        function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        d = e.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    d.Item = s,
        d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() {
            this.itemGUID = 0,
                this._sorters = {},
                this._getSorters(),
                e.prototype._create.call(this),
                this.modes = {},
                this.filteredItems = this.items,
                this.sortHistory = ["original-order"];
            for (var t in r.modes)
                this._initLayoutMode(t)
        },
        l.reloadItems = function() {
            this.itemGUID = 0,
                e.prototype.reloadItems.call(this)
        },
        l._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                var n = t[i];
                n.id = this.itemGUID++
            }
            return this._updateItemsSortData(t),
                t
        },
        l._initLayoutMode = function(t) {
            var e = r.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? o.extend(e.options, i) : i,
                this.modes[t] = new e(this)
        },
        l.layout = function() {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
        },
        l._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(),
                this._manageStamps(),
                this.layoutItems(this.filteredItems, t),
                this._isLayoutInited = !0
        },
        l.arrange = function(t) {
            this.option(t),
                this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches,
                this._bindArrangeComplete(),
                this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
                this._sort(),
                this._layout()
        },
        l._init = l.arrange,
        l._hideReveal = function(t) {
            this.reveal(t.needReveal),
                this.hide(t.needHide)
        },
        l._getIsInstant = function() {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e,
                e
        },
        l._bindArrangeComplete = function() {
            function t() {
                e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
            }
            var e, i, n, o = this;
            this.once("layoutComplete", function() {
                    e = !0,
                        t()
                }),
                this.once("hideComplete", function() {
                    i = !0,
                        t()
                }),
                this.once("revealComplete", function() {
                    n = !0,
                        t()
                })
        },
        l._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
                var a = t[r];
                if (!a.isIgnored) {
                    var u = s(a);
                    u && i.push(a),
                        u && a.isHidden ? n.push(a) : u || a.isHidden || o.push(a)
                }
            }
            return {
                matches: i,
                needReveal: n,
                needHide: o
            }
        },
        l._getFilterTest = function(t) {
            return u && this.options.isJQueryFiltering ? function(e) {
                    return u(e.element).is(t)
                } :
                "function" == typeof t ? function(e) {
                    return t(e.element)
                } :
                function(e) {
                    return n(e.element, t)
                }
        },
        l.updateSortData = function(t) {
            var e;
            t ? (t = o.makeArray(t),
                    e = this.getItems(t)) : e = this.items,
                this._getSorters(),
                this._updateItemsSortData(e)
        },
        l._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = f(i)
            }
        },
        l._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && i < e; i++) {
                var n = t[i];
                n.updateSortData()
            }
        };
    var f = function() {
        function t(t) {
            if ("string" != typeof t)
                return t;
            var i = h(t).split(" "),
                n = i[0],
                o = n.match(/^\[(.+)\]$/),
                s = o && o[1],
                r = e(s, n),
                a = d.sortDataParsers[i[1]];
            return t = a ? function(t) {
                    return t && a(r(t))
                } :
                function(t) {
                    return t && r(t)
                }
        }

        function e(t, e) {
            return t ? function(e) {
                    return e.getAttribute(t)
                } :
                function(t) {
                    var i = t.querySelector(e);
                    return i && i.textContent
                }
        }
        return t
    }();
    d.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        },
        l._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory),
                    i = a(e, this.options.sortAscending);
                this.filteredItems.sort(i),
                    t != this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        },
        l._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e)
                throw new Error("No layout mode: " + t);
            return e.options = this.options[t],
                e
        },
        l._resetLayout = function() {
            e.prototype._resetLayout.call(this),
                this._mode()._resetLayout()
        },
        l._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        },
        l._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        },
        l._getContainerSize = function() {
            return this._mode()._getContainerSize()
        },
        l.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        },
        l.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        },
        l.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(),
                    this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems),
                    this.filteredItems = i.concat(this.filteredItems),
                    this.items = e.concat(this.items)
            }
        },
        l._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide),
                this.reveal(e.matches),
                this.layoutItems(e.matches, !0),
                e.matches
        },
        l.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, n, o = e.length;
                for (i = 0; i < o; i++)
                    n = e[i],
                    this.element.appendChild(n.element);
                var s = this._filter(e).matches;
                for (i = 0; i < o; i++)
                    e[i].isLayoutInstant = !0;
                for (this.arrange(),
                    i = 0; i < o; i++)
                    delete e[i].isLayoutInstant;
                this.reveal(s)
            }
        };
    var c = l.remove;
    return l.remove = function(t) {
            t = o.makeArray(t);
            var e = this.getItems(t);
            c.call(this, t);
            for (var i = e && e.length, n = 0; i && n < i; n++) {
                var s = e[n];
                o.removeFrom(this.filteredItems, s)
            }
        },
        l.shuffle = function() {
            for (var t = 0; t < this.items.length; t++) {
                var e = this.items[t];
                e.sortData.random = Math.random()
            }
            this.options.sortBy = "random",
                this._sort(),
                this._layout()
        },
        l._noTransition = function(t, e) {
            var i = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var n = t.apply(this, e);
            return this.options.transitionDuration = i,
                n
        },
        l.getFilteredItemElements = function() {
            return this.filteredItems.map(function(t) {
                return t.element
            })
        },
        d
});

/* Magnific Popup - v1.1.0 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b,
                d && (f.innerHTML = d),
                e ? c && c.appendChild(f) : (f = a(f),
                    c && f.appendTo(c)),
                f
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d),
                b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1),
                    b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)),
                    g = c),
                b.currTemplate.closeBtn
        },
        A = function() {
            a.magnificPopup.instance || (b = new t,
                b.init(),
                a.magnificPopup.instance = b)
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition)
                return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a)
                    return !0;
            return !1
        };
    t.prototype = {
            constructor: t,
            init: function() {
                var c = navigator.appVersion;
                b.isLowIE = b.isIE8 = document.all && !document.addEventListener,
                    b.isAndroid = /android/gi.test(c),
                    b.isIOS = /iphone|ipad|ipod/gi.test(c),
                    b.supportsTransition = B(),
                    b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
                    d = a(document),
                    b.popupsCache = {}
            },
            open: function(c) {
                var e;
                if (c.isObj === !1) {
                    b.items = c.items.toArray(),
                        b.index = 0;
                    var g, h = c.items;
                    for (e = 0; e < h.length; e++)
                        if (g = h[e],
                            g.parsed && (g = g.el[0]),
                            g === c.el[0]) {
                            b.index = e;
                            break
                        }
                } else
                    b.items = a.isArray(c.items) ? c.items : [c.items],
                    b.index = c.index || 0;
                if (b.isOpen)
                    return void b.updateItemHTML();
                b.types = [],
                    f = "",
                    c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d,
                    c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
                        b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {},
                    b.st = a.extend(!0, {}, a.magnificPopup.defaults, c),
                    b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos,
                    b.st.modal && (b.st.closeOnContentClick = !1,
                        b.st.closeOnBgClick = !1,
                        b.st.showCloseBtn = !1,
                        b.st.enableEscapeKey = !1),
                    b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                            b.close()
                        }),
                        b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                            b._checkIfClose(a.target) && b.close()
                        }),
                        b.container = x("container", b.wrap)),
                    b.contentContainer = x("content"),
                    b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
                var i = a.magnificPopup.modules;
                for (e = 0; e < i.length; e++) {
                    var j = i[e];
                    j = j.charAt(0).toUpperCase() + j.slice(1),
                        b["init" + j].call(b)
                }
                y("BeforeOpen"),
                    b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                            c.close_replaceWith = z(d.type)
                        }),
                        f += " mfp-close-btn-in") : b.wrap.append(z())),
                    b.st.alignTop && (f += " mfp-align-top"),
                    b.fixedContentPos ? b.wrap.css({
                        overflow: b.st.overflowY,
                        overflowX: "hidden",
                        overflowY: b.st.overflowY
                    }) : b.wrap.css({
                        top: v.scrollTop(),
                        position: "absolute"
                    }),
                    (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                        height: d.height(),
                        position: "absolute"
                    }),
                    b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                        27 === a.keyCode && b.close()
                    }),
                    v.on("resize" + p, function() {
                        b.updateSize()
                    }),
                    b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
                    f && b.wrap.addClass(f);
                var k = b.wH = v.height(),
                    n = {};
                if (b.fixedContentPos && b._hasScrollBar(k)) {
                    var o = b._getScrollbarSize();
                    o && (n.marginRight = o)
                }
                b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
                var r = b.st.mainClass;
                return b.isIE7 && (r += " mfp-ie7"),
                    r && b._addClassToMFP(r),
                    b.updateItemHTML(),
                    y("BuildControls"),
                    a("html").css(n),
                    b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
                    b._lastFocusedEl = document.activeElement,
                    setTimeout(function() {
                        b.content ? (b._addClassToMFP(q),
                                b._setFocus()) : b.bgOverlay.addClass(q),
                            d.on("focusin" + p, b._onFocusIn)
                    }, 16),
                    b.isOpen = !0,
                    b.updateSize(k),
                    y(m),
                    c
            },
            close: function() {
                b.isOpen && (y(i),
                    b.isOpen = !1,
                    b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r),
                        setTimeout(function() {
                            b._close()
                        }, b.st.removalDelay)) : b._close())
            },
            _close: function() {
                y(h);
                var c = r + " " + q + " ";
                if (b.bgOverlay.detach(),
                    b.wrap.detach(),
                    b.container.empty(),
                    b.st.mainClass && (c += b.st.mainClass + " "),
                    b._removeClassFromMFP(c),
                    b.fixedContentPos) {
                    var e = {
                        marginRight: ""
                    };
                    b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "",
                        a("html").css(e)
                }
                d.off("keyup" + p + " focusin" + p),
                    b.ev.off(p),
                    b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                    b.bgOverlay.attr("class", "mfp-bg"),
                    b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(),
                    b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
                    b.currItem = null,
                    b.content = null,
                    b.currTemplate = null,
                    b.prevHeight = 0,
                    y(j)
            },
            updateSize: function(a) {
                if (b.isIOS) {
                    var c = document.documentElement.clientWidth / window.innerWidth,
                        d = window.innerHeight * c;
                    b.wrap.css("height", d),
                        b.wH = d
                } else
                    b.wH = a || v.height();
                b.fixedContentPos || b.wrap.css("height", b.wH),
                    y("Resize")
            },
            updateItemHTML: function() {
                var c = b.items[b.index];
                b.contentContainer.detach(),
                    b.content && b.content.detach(),
                    c.parsed || (c = b.parseEl(b.index));
                var d = c.type;
                if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
                    b.currItem = c, !b.currTemplate[d]) {
                    var f = b.st[d] ? b.st[d].markup : !1;
                    y("FirstMarkupParse", f),
                        f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
                }
                e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
                var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
                b.appendContent(g, d),
                    c.preloaded = !0,
                    y(n, c),
                    e = c.type,
                    b.container.prepend(b.contentContainer),
                    y("AfterChange")
            },
            appendContent: function(a, c) {
                b.content = a,
                    a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "",
                    y(k),
                    b.container.addClass("mfp-" + c + "-holder"),
                    b.contentContainer.append(b.content)
            },
            parseEl: function(c) {
                var d, e = b.items[c];
                if (e.tagName ? e = {
                        el: a(e)
                    } : (d = e.type,
                        e = {
                            data: e,
                            src: e.src
                        }),
                    e.el) {
                    for (var f = b.types, g = 0; g < f.length; g++)
                        if (e.el.hasClass("mfp-" + f[g])) {
                            d = f[g];
                            break
                        }
                    e.src = e.el.attr("data-mfp-src"),
                        e.src || (e.src = e.el.attr("href"))
                }
                return e.type = d || b.st.type || "inline",
                    e.index = c,
                    e.parsed = !0,
                    b.items[c] = e,
                    y("ElementParse", e),
                    b.items[c]
            },
            addGroup: function(a, c) {
                var d = function(d) {
                    d.mfpEl = this,
                        b._openClick(d, a, c)
                };
                c || (c = {});
                var e = "click.magnificPopup";
                c.mainEl = a,
                    c.items ? (c.isObj = !0,
                        a.off(e).on(e, d)) : (c.isObj = !1,
                        c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a,
                            a.off(e).on(e, d)))
            },
            _openClick: function(c, d, e) {
                var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
                if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                    var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                    if (g)
                        if (a.isFunction(g)) {
                            if (!g.call(b))
                                return !0
                        } else if (v.width() < g)
                        return !0;
                    c.type && (c.preventDefault(),
                            b.isOpen && c.stopPropagation()),
                        e.el = a(c.mfpEl),
                        e.delegate && (e.items = d.find(e.delegate)),
                        b.open(e)
                }
            },
            updateStatus: function(a, d) {
                if (b.preloader) {
                    c !== a && b.container.removeClass("mfp-s-" + c),
                        d || "loading" !== a || (d = b.st.tLoading);
                    var e = {
                        status: a,
                        text: d
                    };
                    y("UpdateStatus", e),
                        a = e.status,
                        d = e.text,
                        b.preloader.html(d),
                        b.preloader.find("a").on("click", function(a) {
                            a.stopImmediatePropagation()
                        }),
                        b.container.addClass("mfp-s-" + a),
                        c = a
                }
            },
            _checkIfClose: function(c) {
                if (!a(c).hasClass(s)) {
                    var d = b.st.closeOnContentClick,
                        e = b.st.closeOnBgClick;
                    if (d && e)
                        return !0;
                    if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0])
                        return !0;
                    if (c === b.content[0] || a.contains(b.content[0], c)) {
                        if (d)
                            return !0
                    } else if (e && a.contains(document, c))
                        return !0;
                    return !1
                }
            },
            _addClassToMFP: function(a) {
                b.bgOverlay.addClass(a),
                    b.wrap.addClass(a)
            },
            _removeClassFromMFP: function(a) {
                this.bgOverlay.removeClass(a),
                    b.wrap.removeClass(a)
            },
            _hasScrollBar: function(a) {
                return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
            },
            _setFocus: function() {
                (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
            },
            _onFocusIn: function(c) {
                return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
            },
            _parseMarkup: function(b, c, d) {
                var e;
                d.data && (c = a.extend(d.data, c)),
                    y(l, [b, c, d]),
                    a.each(c, function(c, d) {
                        if (void 0 === d || d === !1)
                            return !0;
                        if (e = c.split("_"),
                            e.length > 1) {
                            var f = b.find(p + "-" + e[0]);
                            if (f.length > 0) {
                                var g = e[1];
                                "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                            }
                        } else
                            b.find(p + "-" + c).html(d)
                    })
            },
            _getScrollbarSize: function() {
                if (void 0 === b.scrollbarSize) {
                    var a = document.createElement("div");
                    a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                        document.body.appendChild(a),
                        b.scrollbarSize = a.offsetWidth - a.clientWidth,
                        document.body.removeChild(a)
                }
                return b.scrollbarSize
            }
        },
        a.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function(b, c) {
                return A(),
                    b = b ? a.extend(!0, {}, b) : {},
                    b.isObj = !0,
                    b.index = c || 0,
                    this.instance.open(b)
            },
            close: function() {
                return a.magnificPopup.instance && a.magnificPopup.instance.close()
            },
            registerModule: function(b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options),
                    a.extend(this.proto, c.proto),
                    this.modules.push(b)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        },
        a.fn.magnificPopup = function(c) {
            A();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items ? e = f.items[g] : (e = d,
                            f.delegate && (e = e.find(f.delegate)),
                            e = e.eq(g)),
                        b._openClick({
                            mfpEl: e
                        }, d, f)
                } else
                    b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else
                c = a.extend(!0, {}, c),
                u ? d.data("magnificPopup", c) : d[0].magnificPopup = c,
                b.addGroup(d, c);
            return d
        };
    var C, D, E, F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(),
                E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F),
                    w(h + "." + F, function() {
                        G()
                    })
            },
            getInline: function(c, d) {
                if (G(),
                    c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass,
                                    D = x(C),
                                    C = "mfp-" + C),
                                E = f.after(D).detach().removeClass(C)),
                            b.updateStatus("ready")
                    } else
                        b.updateStatus("error", e.tNotFound),
                        f = a("<div>");
                    return c.inlineElement = f,
                        f
                }
                return b.updateStatus("ready"),
                    b._parseMarkup(d, {}, c),
                    d
            }
        }
    });
    var H, I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H)
        },
        K = function() {
            J(),
                b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I),
                    H = b.st.ajax.cursor,
                    w(h + "." + I, K),
                    w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H),
                    b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g),
                            b.appendContent(a(g.data), I),
                            c.finished = !0,
                            J(),
                            b._setFocus(),
                            setTimeout(function() {
                                b.wrap.addClass(q)
                            }, 16),
                            b.updateStatus("ready"),
                            y("AjaxContentAdded")
                    },
                    error: function() {
                        J(),
                            c.finished = c.loadError = !0,
                            b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d),
                    ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title)
            return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d))
                return d.call(b, c);
            if (c.el)
                return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"),
                    w(m + d, function() {
                        "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                    }),
                    w(h + d, function() {
                        c.cursor && a(document.body).removeClass(c.cursor),
                            v.off("resize" + p)
                    }),
                    w("Resize" + d, b.resizeImage),
                    b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)),
                        a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0,
                    L && clearInterval(L),
                    a.isCheckingImgSize = !1,
                    y("ImageHasSize", a),
                    a.imgHidden && (b.content && b.content.removeClass("mfp-loading"),
                        a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L),
                            L = setInterval(function() {
                                return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L),
                                    c++,
                                    void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                            }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"),
                            c === b.currItem && (b._onImageHasSize(c),
                                b.updateStatus("ready")),
                            c.hasSize = !0,
                            c.loaded = !0,
                            y("ImageLoadComplete")) : (e++,
                            200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"),
                            c === b.currItem && (b._onImageHasSize(c),
                                b.updateStatus("error", h.tError.replace("%url%", c.src))),
                            c.hasSize = !0,
                            c.loaded = !0,
                            c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img",
                        c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
                        c.img = a(j).on("load.mfploader", f).on("error.mfploader", g),
                        j.src = c.src,
                        i.is("img") && (c.img = c.img.clone()),
                        j = c.img[0],
                        j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                        title: M(c),
                        img_replaceWith: c.img
                    }, c),
                    b.resizeImage(),
                    c.hasSize ? (L && clearInterval(L),
                        c.loadError ? (d.addClass("mfp-loading"),
                            b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"),
                            b.updateStatus("ready")),
                        d) : (b.updateStatus("loading"),
                        c.loading = !0,
                        c.hasSize || (c.imgHidden = !0,
                            d.addClass("mfp-loading"),
                            b.findImageSize(c)),
                        d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform),
            N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d,
                                b.css(e),
                                b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e),
                                    b.content.css("visibility", "hidden"),
                                    a = b._getItemToZoom(), !a)
                                    return void k();
                                f = j(a),
                                    f.css(b._getOffset()),
                                    b.wrap.append(f),
                                    e = setTimeout(function() {
                                        f.css(b._getOffset(!0)),
                                            e = setTimeout(function() {
                                                k(),
                                                    setTimeout(function() {
                                                        f.remove(),
                                                            a = f = null,
                                                            y("ZoomAnimationEnded")
                                                    }, 16)
                                            }, g)
                                    }, 16)
                            }
                        }),
                        w(i + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e),
                                    b.st.removalDelay = g, !a) {
                                    if (a = b._getItemToZoom(), !a)
                                        return;
                                    f = j(a)
                                }
                                f.css(b._getOffset(!0)),
                                    b.wrap.append(f),
                                    b.content.css("visibility", "hidden"),
                                    setTimeout(function() {
                                        f.css(b._getOffset())
                                    }, 16)
                            }
                        }),
                        w(h + d, function() {
                            b._allowZoom() && (k(),
                                f && f.remove(),
                                a = null)
                        })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left,
                        h.top = e.top),
                    h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q),
                    b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P),
                    w("BeforeChange", function(a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0))
                    }),
                    w(h + "." + P, function() {
                        R()
                    })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)),
                        e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e),
                    b._parseMarkup(d, g, c),
                    b.updateStatus("ready"),
                    d
            }
        }
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return b.direction = !0,
                    c && c.enabled ? (f += " mfp-gallery",
                        w(m + e, function() {
                            c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                                    return b.items.length > 1 ? (b.next(), !1) : void 0
                                }),
                                d.on("keydown" + e, function(a) {
                                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                                })
                        }),
                        w("UpdateStatus" + e, function(a, c) {
                            c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                        }),
                        w(l + e, function(a, d, e, f) {
                            var g = b.items.length;
                            e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                        }),
                        w("BuildControls" + e, function() {
                            if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                                var d = c.arrowMarkup,
                                    e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                                    f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                                e.click(function() {
                                        b.prev()
                                    }),
                                    f.click(function() {
                                        b.next()
                                    }),
                                    b.container.append(e.add(f))
                            }
                        }),
                        w(n + e, function() {
                            b._preloadTimeout && clearTimeout(b._preloadTimeout),
                                b._preloadTimeout = setTimeout(function() {
                                    b.preloadNearbyImages(),
                                        b._preloadTimeout = null
                                }, 16)
                        }),
                        void w(h + e, function() {
                            d.off(e),
                                b.wrap.off("click" + e),
                                b.arrowRight = b.arrowLeft = null
                        })) : !1
            },
            next: function() {
                b.direction = !0,
                    b.index = S(b.index + 1),
                    b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1,
                    b.index = S(b.index - 1),
                    b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index,
                    b.index = a,
                    b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++)
                    b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++)
                    b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                        y("LazyLoad", d),
                        "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                            d.hasSize = !0
                        }).on("error.mfploader", function() {
                            d.hasSize = !0,
                                d.loadError = !0,
                                y("LazyLoadError", d)
                        }).attr("src", d.src)),
                        d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
            options: {
                replaceSrc: function(a) {
                    return a.src.replace(/\.\w+$/, function(a) {
                        return "@2x" + a
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var a = b.st.retina,
                            c = a.ratio;
                        c = isNaN(c) ? c() : c,
                            c > 1 && (w("ImageHasSize." + U, function(a, b) {
                                    b.img.css({
                                        "max-width": b.img[0].naturalWidth / c,
                                        width: "100%"
                                    })
                                }),
                                w("ElementParse." + U, function(b, d) {
                                    d.src = a.replaceSrc(d, c)
                                }))
                    }
                }
            }
        }),
        A()
});

/* sly 1.6.1 */
! function(a, b, c) {
    "use strict";

    function d(b, p, q) {
        function K(c) {
            var d = 0,
                e = Gb.length;
            if (yb.old = a.extend({}, yb),
                wb = tb ? 0 : ub[rb.horizontal ? "width" : "height"](),
                Bb = zb[rb.horizontal ? "width" : "height"](),
                xb = tb ? b : vb[rb.horizontal ? "outerWidth" : "outerHeight"](),
                Gb.length = 0,
                yb.start = 0,
                yb.end = H(xb - wb, 0),
                Rb) {
                d = Ib.length,
                    Hb = vb.children(rb.itemSelector),
                    Ib.length = 0;
                var f, g = j(vb, rb.horizontal ? "paddingLeft" : "paddingTop"),
                    h = j(vb, rb.horizontal ? "paddingRight" : "paddingBottom"),
                    i = "border-box" === a(Hb).css("boxSizing"),
                    l = "none" !== Hb.css("float"),
                    m = 0,
                    n = Hb.length - 1;
                xb = 0,
                    Hb.each(function(b, c) {
                        var d = a(c),
                            e = c.getBoundingClientRect(),
                            i = G(rb.horizontal ? e.width || e.right - e.left : e.height || e.bottom - e.top),
                            k = j(d, rb.horizontal ? "marginLeft" : "marginTop"),
                            o = j(d, rb.horizontal ? "marginRight" : "marginBottom"),
                            p = i + k + o,
                            q = !k || !o,
                            r = {};
                        r.el = c,
                            r.size = q ? i : p,
                            r.half = r.size / 2,
                            r.start = xb + (q ? k : 0),
                            r.center = r.start - G(wb / 2 - r.size / 2),
                            r.end = r.start - wb + r.size,
                            b || (xb += g),
                            xb += p,
                            rb.horizontal || l || o && k && b > 0 && (xb -= I(k, o)),
                            b === n && (r.end += h,
                                xb += h,
                                m = q ? o : 0),
                            Ib.push(r),
                            f = r
                    }),
                    vb[0].style[rb.horizontal ? "width" : "height"] = (i ? xb : xb - g - h) + "px",
                    xb -= m,
                    Ib.length ? (yb.start = Ib[0][Pb ? "center" : "start"],
                        yb.end = Pb ? f.center : xb > wb ? f.end : yb.start) : yb.start = yb.end = 0
            }
            if (yb.center = G(yb.end / 2 + yb.start / 2),
                V(),
                Ab.length && Bb > 0 && (rb.dynamicHandle ? (Cb = yb.start === yb.end ? Bb : G(Bb * wb / xb),
                        Cb = k(Cb, rb.minHandleSize, Bb),
                        Ab[0].style[rb.horizontal ? "width" : "height"] = Cb + "px") : Cb = Ab[rb.horizontal ? "outerWidth" : "outerHeight"](),
                    Db.end = Bb - Cb,
                    ec || N()), !tb && wb > 0) {
                var o = yb.start,
                    p = "";
                if (Rb)
                    a.each(Ib, function(a, b) {
                        Pb ? Gb.push(b.center) : b.start + b.size > o && o <= yb.end && (o = b.start,
                            Gb.push(o),
                            o += wb,
                            o > yb.end && o < yb.end + wb && Gb.push(yb.end))
                    });
                else
                    for (; o - wb < yb.end;)
                        Gb.push(o),
                        o += wb;
                if (Eb[0] && e !== Gb.length) {
                    for (var q = 0; q < Gb.length; q++)
                        p += rb.pageBuilder.call(sb, q);
                    Fb = Eb.html(p).children(),
                        Fb.eq(Jb.activePage).addClass(rb.activeClass)
                }
            }
            if (Jb.slideeSize = xb,
                Jb.frameSize = wb,
                Jb.sbSize = Bb,
                Jb.handleSize = Cb,
                Rb) {
                c && null != rb.startAt && (T(rb.startAt),
                    sb[Qb ? "toCenter" : "toStart"](rb.startAt));
                var r = Ib[Jb.activeItem];
                L(Qb && r ? r.center : k(yb.dest, yb.start, yb.end))
            } else
                c ? null != rb.startAt && L(rb.startAt, 1) : L(k(yb.dest, yb.start, yb.end));
            ob("load")
        }

        function L(a, b, c) {
            if (Rb && cc.released && !c) {
                var d = U(a),
                    e = a > yb.start && a < yb.end;
                Qb ? (e && (a = Ib[d.centerItem].center),
                    Pb && rb.activateMiddle && T(d.centerItem)) : e && (a = Ib[d.firstItem].start)
            }
            cc.init && cc.slidee && rb.elasticBounds ? a > yb.end ? a = yb.end + (a - yb.end) / 6 : a < yb.start && (a = yb.start + (a - yb.start) / 6) : a = k(a, yb.start, yb.end),
                ac.start = +new Date,
                ac.time = 0,
                ac.from = yb.cur,
                ac.to = a,
                ac.delta = a - yb.cur,
                ac.tweesing = cc.tweese || cc.init && !cc.slidee,
                ac.immediate = !ac.tweesing && (b || cc.init && cc.slidee || !rb.speed),
                cc.tweese = 0,
                a !== yb.dest && (yb.dest = a,
                    ob("change"),
                    ec || M()),
                Z(),
                V(),
                W(),
                O()
        }

        function M() {
            if (sb.initialized) {
                if (!ec)
                    return ec = t(M),
                        void(cc.released && ob("moveStart"));
                ac.immediate ? yb.cur = ac.to : ac.tweesing ? (ac.tweeseDelta = ac.to - yb.cur,
                        D(ac.tweeseDelta) < .1 ? yb.cur = ac.to : yb.cur += ac.tweeseDelta * (cc.released ? rb.swingSpeed : rb.syncSpeed)) : (ac.time = I(+new Date - ac.start, rb.speed),
                        yb.cur = ac.from + ac.delta * a.easing[rb.easing](ac.time / rb.speed, ac.time, 0, 1, rb.speed)),
                    ac.to === yb.cur ? (yb.cur = ac.to,
                        cc.tweese = ec = 0) : ec = t(M),
                    ob("move"),
                    tb || (m ? vb[0].style[m] = n + (rb.horizontal ? "translateX" : "translateY") + "(" + -yb.cur + "px)" : vb[0].style[rb.horizontal ? "left" : "top"] = -G(yb.cur) + "px"), !ec && cc.released && ob("moveEnd"),
                    N()
            }
        }

        function N() {
            Ab.length && (Db.cur = yb.start === yb.end ? 0 : ((cc.init && !cc.slidee ? yb.dest : yb.cur) - yb.start) / (yb.end - yb.start) * Db.end,
                Db.cur = k(G(Db.cur), Db.start, Db.end),
                _b.hPos !== Db.cur && (_b.hPos = Db.cur,
                    m ? Ab[0].style[m] = n + (rb.horizontal ? "translateX" : "translateY") + "(" + Db.cur + "px)" : Ab[0].style[rb.horizontal ? "left" : "top"] = Db.cur + "px"))
        }

        function O() {
            Fb[0] && _b.page !== Jb.activePage && (_b.page = Jb.activePage,
                Fb.removeClass(rb.activeClass).eq(Jb.activePage).addClass(rb.activeClass),
                ob("activePage", _b.page))
        }

        function P() {
            bc.speed && yb.cur !== (bc.speed > 0 ? yb.end : yb.start) || sb.stop(),
                hc = cc.init ? t(P) : 0,
                bc.now = +new Date,
                bc.pos = yb.cur + (bc.now - bc.lastTime) / 1e3 * bc.speed,
                L(cc.init ? bc.pos : G(bc.pos)),
                cc.init || yb.cur !== yb.dest || ob("moveEnd"),
                bc.lastTime = bc.now
        }

        function Q(a, b, d) {
            if ("boolean" === e(b) && (d = b,
                    b = c),
                b === c)
                L(yb[a], d);
            else {
                if (Qb && "center" !== a)
                    return;
                var f = sb.getPos(b);
                f && L(f[a], d, !Qb)
            }
        }

        function R(a) {
            return null != a ? i(a) ? a >= 0 && a < Ib.length ? a : -1 : Hb.index(a) : -1
        }

        function S(a) {
            return R(i(a) && 0 > a ? a + Ib.length : a)
        }

        function T(a, b) {
            var c = R(a);
            return !Rb || 0 > c ? !1 : ((_b.active !== c || b) && (Hb.eq(Jb.activeItem).removeClass(rb.activeClass),
                    Hb.eq(c).addClass(rb.activeClass),
                    _b.active = Jb.activeItem = c,
                    W(),
                    ob("active", c)),
                c)
        }

        function U(a) {
            a = k(i(a) ? a : yb.dest, yb.start, yb.end);
            var b = {},
                c = Pb ? 0 : wb / 2;
            if (!tb)
                for (var d = 0, e = Gb.length; e > d; d++) {
                    if (a >= yb.end || d === Gb.length - 1) {
                        b.activePage = Gb.length - 1;
                        break
                    }
                    if (a <= Gb[d] + c) {
                        b.activePage = d;
                        break
                    }
                }
            if (Rb) {
                for (var f = !1, g = !1, h = !1, j = 0, l = Ib.length; l > j; j++)
                    if (f === !1 && a <= Ib[j].start + Ib[j].half && (f = j),
                        h === !1 && a <= Ib[j].center + Ib[j].half && (h = j),
                        j === l - 1 || a <= Ib[j].end + Ib[j].half) {
                        g = j;
                        break
                    }
                b.firstItem = i(f) ? f : 0,
                    b.centerItem = i(h) ? h : b.firstItem,
                    b.lastItem = i(g) ? g : b.centerItem
            }
            return b
        }

        function V(b) {
            a.extend(Jb, U(b))
        }

        function W() {
            var a = yb.dest <= yb.start,
                b = yb.dest >= yb.end,
                c = (a ? 1 : 0) | (b ? 2 : 0);
            if (_b.slideePosState !== c && (_b.slideePosState = c,
                    Yb.is("button,input") && Yb.prop("disabled", a),
                    Zb.is("button,input") && Zb.prop("disabled", b),
                    Yb.add(Vb)[a ? "addClass" : "removeClass"](rb.disabledClass),
                    Zb.add(Ub)[b ? "addClass" : "removeClass"](rb.disabledClass)),
                _b.fwdbwdState !== c && cc.released && (_b.fwdbwdState = c,
                    Vb.is("button,input") && Vb.prop("disabled", a),
                    Ub.is("button,input") && Ub.prop("disabled", b)),
                Rb && null != Jb.activeItem) {
                var d = 0 === Jb.activeItem,
                    e = Jb.activeItem >= Ib.length - 1,
                    f = (d ? 1 : 0) | (e ? 2 : 0);
                _b.itemsButtonState !== f && (_b.itemsButtonState = f,
                    Wb.is("button,input") && Wb.prop("disabled", d),
                    Xb.is("button,input") && Xb.prop("disabled", e),
                    Wb[d ? "addClass" : "removeClass"](rb.disabledClass),
                    Xb[e ? "addClass" : "removeClass"](rb.disabledClass))
            }
        }

        function X(a, b, c) {
            if (a = S(a),
                b = S(b),
                a > -1 && b > -1 && a !== b && (!c || b !== a - 1) && (c || b !== a + 1)) {
                Hb.eq(a)[c ? "insertAfter" : "insertBefore"](Ib[b].el);
                var d = b > a ? a : c ? b : b - 1,
                    e = a > b ? a : c ? b + 1 : b,
                    f = a > b;
                null != Jb.activeItem && (a === Jb.activeItem ? _b.active = Jb.activeItem = c ? f ? b + 1 : b : f ? b : b - 1 : Jb.activeItem > d && Jb.activeItem < e && (_b.active = Jb.activeItem += f ? 1 : -1)),
                    K()
            }
        }

        function Y(a, b) {
            for (var c = 0, d = $b[a].length; d > c; c++)
                if ($b[a][c] === b)
                    return c;
            return -1
        }

        function Z() {
            cc.released && !sb.isPaused && sb.resume()
        }

        function $(a) {
            return G(k(a, Db.start, Db.end) / Db.end * (yb.end - yb.start)) + yb.start
        }

        function _() {
            cc.history[0] = cc.history[1],
                cc.history[1] = cc.history[2],
                cc.history[2] = cc.history[3],
                cc.history[3] = cc.delta
        }

        function ab(a) {
            cc.released = 0,
                cc.source = a,
                cc.slidee = "slidee" === a
        }

        function bb(b) {
            var c = "touchstart" === b.type,
                d = b.data.source,
                e = "slidee" === d;
            cc.init || !c && eb(b.target) || ("handle" !== d || rb.dragHandle && Db.start !== Db.end) && (!e || (c ? rb.touchDragging : rb.mouseDragging && b.which < 2)) && (c || f(b),
                ab(d),
                cc.init = 0,
                cc.$source = a(b.target),
                cc.touch = c,
                cc.pointer = c ? b.originalEvent.touches[0] : b,
                cc.initX = cc.pointer.pageX,
                cc.initY = cc.pointer.pageY,
                cc.initPos = e ? yb.cur : Db.cur,
                cc.start = +new Date,
                cc.time = 0,
                cc.path = 0,
                cc.delta = 0,
                cc.locked = 0,
                cc.history = [0, 0, 0, 0],
                cc.pathToLock = e ? c ? 30 : 10 : 0,
                u.on(c ? x : w, cb),
                sb.pause(1),
                (e ? vb : Ab).addClass(rb.draggedClass),
                ob("moveStart"),
                e && (fc = setInterval(_, 10)))
        }

        function cb(a) {
            if (cc.released = "mouseup" === a.type || "touchend" === a.type,
                cc.pointer = cc.touch ? a.originalEvent[cc.released ? "changedTouches" : "touches"][0] : a,
                cc.pathX = cc.pointer.pageX - cc.initX,
                cc.pathY = cc.pointer.pageY - cc.initY,
                cc.path = E(F(cc.pathX, 2) + F(cc.pathY, 2)),
                cc.delta = rb.horizontal ? cc.pathX : cc.pathY,
                cc.released || !(cc.path < 1)) {
                if (!cc.init) {
                    if (cc.path < rb.dragThreshold)
                        return cc.released ? db() : c;
                    if (!(rb.horizontal ? D(cc.pathX) > D(cc.pathY) : D(cc.pathX) < D(cc.pathY)))
                        return db();
                    cc.init = 1
                }
                f(a), !cc.locked && cc.path > cc.pathToLock && cc.slidee && (cc.locked = 1,
                        cc.$source.on(z, g)),
                    cc.released && (db(),
                        rb.releaseSwing && cc.slidee && (cc.swing = (cc.delta - cc.history[0]) / 40 * 300,
                            cc.delta += cc.swing,
                            cc.tweese = D(cc.swing) > 10)),
                    L(cc.slidee ? G(cc.initPos - cc.delta) : $(cc.initPos + cc.delta))
            }
        }

        function db() {
            clearInterval(fc),
                cc.released = !0,
                u.off(cc.touch ? x : w, cb),
                (cc.slidee ? vb : Ab).removeClass(rb.draggedClass),
                setTimeout(function() {
                    cc.$source.off(z, g)
                }),
                yb.cur === yb.dest && cc.init && ob("moveEnd"),
                sb.resume(1),
                cc.init = 0
        }

        function eb(b) {
            return ~a.inArray(b.nodeName, B) || a(b).is(rb.interactive)
        }

        function fb() {
            sb.stop(),
                u.off("mouseup", fb)
        }

        function gb(a) {
            switch (f(a),
                this) {
                case Ub[0]:
                case Vb[0]:
                    sb.moveBy(Ub.is(this) ? rb.moveBy : -rb.moveBy),
                        u.on("mouseup", fb);
                    break;
                case Wb[0]:
                    sb.prev();
                    break;
                case Xb[0]:
                    sb.next();
                    break;
                case Yb[0]:
                    sb.prevPage();
                    break;
                case Zb[0]:
                    sb.nextPage()
            }
        }

        function hb(a) {
            return dc.curDelta = (rb.horizontal ? a.deltaY || a.deltaX : a.deltaY) || -a.wheelDelta,
                dc.curDelta /= 1 === a.deltaMode ? 3 : 100,
                Rb ? (o = +new Date,
                    dc.last < o - dc.resetTime && (dc.delta = 0),
                    dc.last = o,
                    dc.delta += dc.curDelta,
                    D(dc.delta) < 1 ? dc.finalDelta = 0 : (dc.finalDelta = G(dc.delta / 1),
                        dc.delta %= 1),
                    dc.finalDelta) : dc.curDelta
        }

        function ib(a) {
            a.originalEvent[r] = sb;
            var b = +new Date;
            if (J + rb.scrollHijack > b && Sb[0] !== document && Sb[0] !== window)
                return void(J = b);
            if (rb.scrollBy && yb.start !== yb.end) {
                var c = hb(a.originalEvent);
                (rb.scrollTrap || c > 0 && yb.dest < yb.end || 0 > c && yb.dest > yb.start) && f(a, 1),
                    sb.slideBy(rb.scrollBy * c)
            }
        }

        function jb(a) {
            rb.clickBar && a.target === zb[0] && (f(a),
                L($((rb.horizontal ? a.pageX - zb.offset().left : a.pageY - zb.offset().top) - Cb / 2)))
        }

        function kb(a) {
            if (rb.keyboardNavBy)
                switch (a.which) {
                    case rb.horizontal ? 37:
                        38:
                            f(a),
                            sb["pages" === rb.keyboardNavBy ? "prevPage" : "prev"]();
                        break;
                    case rb.horizontal ? 39:
                        40:
                            f(a),
                            sb["pages" === rb.keyboardNavBy ? "nextPage" : "next"]()
                }
        }

        function lb(a) {
            return eb(this) ? void(a.originalEvent[r + "ignore"] = !0) : void(this.parentNode !== vb[0] || a.originalEvent[r + "ignore"] || sb.activate(this))
        }

        function mb() {
            this.parentNode === Eb[0] && sb.activatePage(Fb.index(this))
        }

        function nb(a) {
            rb.pauseOnHover && sb["mouseenter" === a.type ? "pause" : "resume"](2)
        }

        function ob(a, b) {
            if ($b[a]) {
                for (qb = $b[a].length,
                    C.length = 0,
                    pb = 0; qb > pb; pb++)
                    C.push($b[a][pb]);
                for (pb = 0; qb > pb; pb++)
                    C[pb].call(sb, a, b)
            }
        }
        if (!(this instanceof d))
            return new d(b, p, q);
        var pb, qb, rb = a.extend({}, d.defaults, p),
            sb = this,
            tb = i(b),
            ub = a(b),
            vb = rb.slidee ? a(rb.slidee).eq(0) : ub.children().eq(0),
            wb = 0,
            xb = 0,
            yb = {
                start: 0,
                center: 0,
                end: 0,
                cur: 0,
                dest: 0
            },
            zb = a(rb.scrollBar).eq(0),
            Ab = zb.children().eq(0),
            Bb = 0,
            Cb = 0,
            Db = {
                start: 0,
                end: 0,
                cur: 0
            },
            Eb = a(rb.pagesBar),
            Fb = 0,
            Gb = [],
            Hb = 0,
            Ib = [],
            Jb = {
                firstItem: 0,
                lastItem: 0,
                centerItem: 0,
                activeItem: null,
                activePage: 0
            },
            Kb = new l(ub[0]),
            Lb = new l(vb[0]),
            Mb = new l(zb[0]),
            Nb = new l(Ab[0]),
            Ob = "basic" === rb.itemNav,
            Pb = "forceCentered" === rb.itemNav,
            Qb = "centered" === rb.itemNav || Pb,
            Rb = !tb && (Ob || Qb || Pb),
            Sb = rb.scrollSource ? a(rb.scrollSource) : ub,
            Tb = rb.dragSource ? a(rb.dragSource) : ub,
            Ub = a(rb.forward),
            Vb = a(rb.backward),
            Wb = a(rb.prev),
            Xb = a(rb.next),
            Yb = a(rb.prevPage),
            Zb = a(rb.nextPage),
            $b = {},
            _b = {},
            ac = {},
            bc = {},
            cc = {
                released: 1
            },
            dc = {
                last: 0,
                delta: 0,
                resetTime: 200
            },
            ec = 0,
            fc = 0,
            gc = 0,
            hc = 0;
        tb || (b = ub[0]),
            sb.initialized = 0,
            sb.frame = b,
            sb.slidee = vb[0],
            sb.pos = yb,
            sb.rel = Jb,
            sb.items = Ib,
            sb.pages = Gb,
            sb.isPaused = 0,
            sb.options = rb,
            sb.dragging = cc,
            sb.reload = function() {
                K()
            },
            sb.getPos = function(a) {
                if (Rb) {
                    var b = R(a);
                    return -1 !== b ? Ib[b] : !1
                }
                var c = vb.find(a).eq(0);
                if (c[0]) {
                    var d = rb.horizontal ? c.offset().left - vb.offset().left : c.offset().top - vb.offset().top,
                        e = c[rb.horizontal ? "outerWidth" : "outerHeight"]();
                    return {
                        start: d,
                        center: d - wb / 2 + e / 2,
                        end: d - wb + e,
                        size: e
                    }
                }
                return !1
            },
            sb.moveBy = function(a) {
                bc.speed = a, !cc.init && bc.speed && yb.cur !== (bc.speed > 0 ? yb.end : yb.start) && (bc.lastTime = +new Date,
                    bc.startPos = yb.cur,
                    ab("button"),
                    cc.init = 1,
                    ob("moveStart"),
                    s(hc),
                    P())
            },
            sb.stop = function() {
                "button" === cc.source && (cc.init = 0,
                    cc.released = 1)
            },
            sb.prev = function() {
                sb.activate(null == Jb.activeItem ? 0 : Jb.activeItem - 1)
            },
            sb.next = function() {
                sb.activate(null == Jb.activeItem ? 0 : Jb.activeItem + 1)
            },
            sb.prevPage = function() {
                sb.activatePage(Jb.activePage - 1)
            },
            sb.nextPage = function() {
                sb.activatePage(Jb.activePage + 1)
            },
            sb.slideBy = function(a, b) {
                a && (Rb ? sb[Qb ? "toCenter" : "toStart"](k((Qb ? Jb.centerItem : Jb.firstItem) + rb.scrollBy * a, 0, Ib.length)) : L(yb.dest + a, b))
            },
            sb.slideTo = function(a, b) {
                L(a, b)
            },
            sb.toStart = function(a, b) {
                Q("start", a, b)
            },
            sb.toEnd = function(a, b) {
                Q("end", a, b)
            },
            sb.toCenter = function(a, b) {
                Q("center", a, b)
            },
            sb.getIndex = R,
            sb.activate = function(a, b) {
                var c = T(a);
                rb.smart && c !== !1 && (Qb ? sb.toCenter(c, b) : c >= Jb.lastItem ? sb.toStart(c, b) : c <= Jb.firstItem ? sb.toEnd(c, b) : Z())
            },
            sb.activatePage = function(a, b) {
                i(a) && L(Gb[k(a, 0, Gb.length - 1)], b)
            },
            sb.resume = function(a) {
                rb.cycleBy && rb.cycleInterval && ("items" !== rb.cycleBy || Ib[0] && null != Jb.activeItem) && !(a < sb.isPaused) && (sb.isPaused = 0,
                    gc ? gc = clearTimeout(gc) : ob("resume"),
                    gc = setTimeout(function() {
                        switch (ob("cycle"),
                            rb.cycleBy) {
                            case "items":
                                sb.activate(Jb.activeItem >= Ib.length - 1 ? 0 : Jb.activeItem + 1);
                                break;
                            case "pages":
                                sb.activatePage(Jb.activePage >= Gb.length - 1 ? 0 : Jb.activePage + 1)
                        }
                    }, rb.cycleInterval))
            },
            sb.pause = function(a) {
                a < sb.isPaused || (sb.isPaused = a || 100,
                    gc && (gc = clearTimeout(gc),
                        ob("pause")))
            },
            sb.toggle = function() {
                sb[gc ? "pause" : "resume"]()
            },
            sb.set = function(b, c) {
                a.isPlainObject(b) ? a.extend(rb, b) : rb.hasOwnProperty(b) && (rb[b] = c)
            },
            sb.add = function(b, c) {
                var d = a(b);
                Rb ? (null == c || !Ib[0] || c >= Ib.length ? d.appendTo(vb) : Ib.length && d.insertBefore(Ib[c].el),
                        null != Jb.activeItem && c <= Jb.activeItem && (_b.active = Jb.activeItem += d.length)) : vb.append(d),
                    K()
            },
            sb.remove = function(b) {
                if (Rb) {
                    var c = S(b);
                    if (c > -1) {
                        Hb.eq(c).remove();
                        var d = c === Jb.activeItem;
                        null != Jb.activeItem && c < Jb.activeItem && (_b.active = --Jb.activeItem),
                            K(),
                            d && (_b.active = null,
                                sb.activate(Jb.activeItem))
                    }
                } else
                    a(b).remove(),
                    K()
            },
            sb.moveAfter = function(a, b) {
                X(a, b, 1)
            },
            sb.moveBefore = function(a, b) {
                X(a, b)
            },
            sb.on = function(a, b) {
                if ("object" === e(a))
                    for (var c in a)
                        a.hasOwnProperty(c) && sb.on(c, a[c]);
                else if ("function" === e(b))
                    for (var d = a.split(" "), f = 0, g = d.length; g > f; f++)
                        $b[d[f]] = $b[d[f]] || [], -1 === Y(d[f], b) && $b[d[f]].push(b);
                else if ("array" === e(b))
                    for (var h = 0, i = b.length; i > h; h++)
                        sb.on(a, b[h])
            },
            sb.one = function(a, b) {
                function c() {
                    b.apply(sb, arguments),
                        sb.off(a, c)
                }
                sb.on(a, c)
            },
            sb.off = function(a, b) {
                if (b instanceof Array)
                    for (var c = 0, d = b.length; d > c; c++)
                        sb.off(a, b[c]);
                else
                    for (var e = a.split(" "), f = 0, g = e.length; g > f; f++)
                        if ($b[e[f]] = $b[e[f]] || [],
                            null == b)
                            $b[e[f]].length = 0;
                        else {
                            var h = Y(e[f], b); -
                            1 !== h && $b[e[f]].splice(h, 1)
                        }
            },
            sb.destroy = function() {
                return d.removeInstance(b),
                    Sb.add(Ab).add(zb).add(Eb).add(Ub).add(Vb).add(Wb).add(Xb).add(Yb).add(Zb).off("." + r),
                    u.off("keydown", kb),
                    Wb.add(Xb).add(Yb).add(Zb).removeClass(rb.disabledClass),
                    Hb && null != Jb.activeItem && Hb.eq(Jb.activeItem).removeClass(rb.activeClass),
                    Eb.empty(),
                    tb || (ub.off("." + r),
                        Kb.restore(),
                        Lb.restore(),
                        Mb.restore(),
                        Nb.restore(),
                        a.removeData(b, r)),
                    Ib.length = Gb.length = 0,
                    _b = {},
                    sb.initialized = 0,
                    sb
            },
            sb.init = function() {
                if (!sb.initialized) {
                    if (d.getInstance(b))
                        throw new Error("There is already a Sly instance on this element");
                    d.storeInstance(b, sb),
                        sb.on(q);
                    var a = ["overflow", "position"],
                        c = ["position", "webkitTransform", "msTransform", "transform", "left", "top", "width", "height"];
                    Kb.save.apply(Kb, a),
                        Mb.save.apply(Mb, a),
                        Lb.save.apply(Lb, c),
                        Nb.save.apply(Nb, c);
                    var e = Ab;
                    return tb || (e = e.add(vb),
                            ub.css("overflow", "hidden"),
                            m || "static" !== ub.css("position") || ub.css("position", "relative")),
                        m ? n && e.css(m, n) : ("static" === zb.css("position") && zb.css("position", "relative"),
                            e.css({
                                position: "absolute"
                            })),
                        rb.forward && Ub.on(A, gb),
                        rb.backward && Vb.on(A, gb),
                        rb.prev && Wb.on(z, gb),
                        rb.next && Xb.on(z, gb),
                        rb.prevPage && Yb.on(z, gb),
                        rb.nextPage && Zb.on(z, gb),
                        Sb.on(y, ib),
                        zb[0] && zb.on(z, jb),
                        Rb && rb.activateOn && ub.on(rb.activateOn + "." + r, "*", lb),
                        Eb[0] && rb.activatePageOn && Eb.on(rb.activatePageOn + "." + r, "*", mb),
                        Tb.on(v, {
                            source: "slidee"
                        }, bb),
                        Ab && Ab.on(v, {
                            source: "handle"
                        }, bb),
                        u.on("keydown", kb),
                        tb || (ub.on("mouseenter." + r + " mouseleave." + r, nb),
                            ub.on("scroll." + r, h)),
                        sb.initialized = 1,
                        K(!0),
                        rb.cycleBy && !tb && sb[rb.startPaused ? "pause" : "resume"](),
                        sb
                }
            }
    }

    function e(a) {
        return null == a ? String(a) : "object" == typeof a || "function" == typeof a ? Object.prototype.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase() || "object" : typeof a
    }

    function f(a, b) {
        a.preventDefault(),
            b && a.stopPropagation()
    }

    function g(b) {
        f(b, 1),
            a(this).off(b.type, g)
    }

    function h() {
        this.scrollLeft = 0,
            this.scrollTop = 0
    }

    function i(a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
    }

    function j(a, b) {
        return 0 | G(String(a.css(b)).replace(/[^\-0-9.]/g, ""))
    }

    function k(a, b, c) {
        return b > a ? b : a > c ? c : a
    }

    function l(a) {
        var b = {};
        return b.style = {},
            b.save = function() {
                if (a && a.nodeType) {
                    for (var c = 0; c < arguments.length; c++)
                        b.style[arguments[c]] = a.style[arguments[c]];
                    return b
                }
            },
            b.restore = function() {
                if (a && a.nodeType) {
                    for (var c in b.style)
                        b.style.hasOwnProperty(c) && (a.style[c] = b.style[c]);
                    return b
                }
            },
            b
    }
    var m, n, o, p = "sly",
        q = "Sly",
        r = p,
        s = b.cancelAnimationFrame || b.cancelRequestAnimationFrame,
        t = b.requestAnimationFrame,
        u = a(document),
        v = "touchstart." + r + " mousedown." + r,
        w = "mousemove." + r + " mouseup." + r,
        x = "touchmove." + r + " touchend." + r,
        y = (document.implementation.hasFeature("Event.wheel", "3.0") ? "wheel." : "mousewheel.") + r,
        z = "click." + r,
        A = "mousedown." + r,
        B = ["INPUT", "SELECT", "BUTTON", "TEXTAREA"],
        C = [],
        D = Math.abs,
        E = Math.sqrt,
        F = Math.pow,
        G = Math.round,
        H = Math.max,
        I = Math.min,
        J = 0;
    u.on(y, function(a) {
            var b = a.originalEvent[r],
                c = +new Date;
            (!b || b.options.scrollHijack < c - J) && (J = c)
        }),
        d.getInstance = function(b) {
            return a.data(b, r)
        },
        d.storeInstance = function(b, c) {
            return a.data(b, r, c)
        },
        d.removeInstance = function(b) {
            return a.removeData(b, r)
        },
        function(a) {
            function b(a) {
                var b = (new Date).getTime(),
                    d = Math.max(0, 16 - (b - c)),
                    e = setTimeout(a, d);
                return c = b,
                    e
            }
            t = a.requestAnimationFrame || a.webkitRequestAnimationFrame || b;
            var c = (new Date).getTime(),
                d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.clearTimeout;
            s = function(b) {
                d.call(a, b)
            }
        }(window),
        function() {
            function a(a) {
                for (var d = 0, e = b.length; e > d; d++) {
                    var f = b[d] ? b[d] + a.charAt(0).toUpperCase() + a.slice(1) : a;
                    if (null != c.style[f])
                        return f
                }
            }
            var b = ["", "Webkit", "Moz", "ms", "O"],
                c = document.createElement("div");
            m = a("transform"),
                n = a("perspective") ? "translateZ(0) " : ""
        }(),
        b[q] = d,
        a.fn[p] = function(b, c) {
            var f, g;
            return a.isPlainObject(b) || (("string" === e(b) || b === !1) && (f = b === !1 ? "destroy" : b,
                        g = Array.prototype.slice.call(arguments, 1)),
                    b = {}),
                this.each(function(a, e) {
                    var h = d.getInstance(e);
                    h || f ? h && f && h[f] && h[f].apply(h, g) : h = new d(e, b, c).init()
                })
        },
        d.defaults = {
            slidee: null,
            horizontal: !1,
            itemNav: null,
            itemSelector: null,
            smart: !1,
            activateOn: null,
            activateMiddle: !1,
            scrollSource: null,
            scrollBy: 0,
            scrollHijack: 300,
            scrollTrap: !1,
            dragSource: null,
            mouseDragging: !1,
            touchDragging: !1,
            releaseSwing: !1,
            swingSpeed: .2,
            elasticBounds: !1,
            dragThreshold: 3,
            interactive: null,
            scrollBar: null,
            dragHandle: !1,
            dynamicHandle: !1,
            minHandleSize: 50,
            clickBar: !1,
            syncSpeed: .5,
            pagesBar: null,
            activatePageOn: null,
            pageBuilder: function(a) {
                return "<li>" + (a + 1) + "</li>"
            },
            forward: null,
            backward: null,
            prev: null,
            next: null,
            prevPage: null,
            nextPage: null,
            cycleBy: null,
            cycleInterval: 5e3,
            pauseOnHover: !1,
            startPaused: !1,
            moveBy: 300,
            speed: 0,
            easing: "swing",
            startAt: null,
            keyboardNavBy: null,
            draggedClass: "dragged",
            activeClass: "active",
            disabledClass: "disabled"
        }
}(jQuery, window);

/* Owl Carousel v2.3.4 */
! function(a, b, c, d) {
    function e(b, c) {
        this.settings = null,
            this.options = a.extend({}, e.Defaults, c),
            this.$element = a(b),
            this._handlers = {},
            this._plugins = {},
            this._supress = {},
            this._current = null,
            this._speed = null,
            this._coordinates = [],
            this._breakpoint = null,
            this._width = null,
            this._items = [],
            this._clones = [],
            this._mergers = [],
            this._widths = [],
            this._invalidated = {},
            this._pipe = [],
            this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            },
            this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            },
            a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
                this._handlers[c] = a.proxy(this[c], this)
            }, this)),
            a.each(e.Plugins, a.proxy(function(a, b) {
                this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
            }, this)),
            a.each(e.Workers, a.proxy(function(b, c) {
                this._pipe.push({
                    filter: c.filter,
                    run: a.proxy(c.run, this)
                })
            }, this)),
            this.setup(),
            this.initialize()
    }
    e.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            checkVisibility: !0,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: b,
            fallbackEasing: "swing",
            slideTransition: "",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        },
        e.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        },
        e.Type = {
            Event: "event",
            State: "state"
        },
        e.Plugins = {},
        e.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                a.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = this.settings.margin || "",
                    c = !this.settings.autoWidth,
                    d = this.settings.rtl,
                    e = {
                        width: "auto",
                        "margin-left": d ? b : "",
                        "margin-right": d ? "" : b
                    };
                !c && this.$stage.children().css(e),
                    a.css = e
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    c = null,
                    d = this._items.length,
                    e = !this.settings.autoWidth,
                    f = [];
                for (a.items = {
                        merge: !1,
                        width: b
                    }; d--;)
                    c = this._mergers[d],
                    c = this.settings.mergeFit && Math.min(c, this.settings.items) || c,
                    a.items.merge = c > 1 || a.items.merge,
                    f[d] = e ? b * c : this._items[d].width();
                this._widths = f
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var b = [],
                    c = this._items,
                    d = this.settings,
                    e = Math.max(2 * d.items, 4),
                    f = 2 * Math.ceil(c.length / 2),
                    g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                    h = "",
                    i = "";
                for (g /= 2; g > 0;)
                    b.push(this.normalize(b.length / 2, !0)),
                    h += c[b[b.length - 1]][0].outerHTML,
                    b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
                    i = c[b[b.length - 1]][0].outerHTML + i,
                    g -= 1;
                this._clones = b,
                    a(h).addClass("cloned").appendTo(this.$stage),
                    a(i).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;)
                    d = f[c - 1] || 0,
                    e = this._widths[this.relative(c)] + this.settings.margin,
                    f.push(d + e * a);
                this._coordinates = f
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var a = this.settings.stagePadding,
                    b = this._coordinates,
                    c = {
                        width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                        "padding-left": a || "",
                        "padding-right": a || ""
                    };
                this.$stage.css(c)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = this._coordinates.length,
                    c = !this.settings.autoWidth,
                    d = this.$stage.children();
                if (c && a.items.merge)
                    for (; b--;)
                        a.css.width = this._widths[this.relative(b)],
                        d.eq(b).css(a.css);
                else
                    c && (a.css.width = a.items.width,
                        d.css(a.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                a.current = a.current ? this.$stage.children().index(a.current) : 0,
                    a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)),
                    this.reset(a.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                    f = 2 * this.settings.stagePadding,
                    g = this.coordinates(this.current()) + f,
                    h = g + this.width() * e,
                    i = [];
                for (c = 0,
                    d = this._coordinates.length; c < d; c++)
                    a = this._coordinates[c - 1] || 0,
                    b = Math.abs(this._coordinates[c]) + f * e,
                    (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
                this.$stage.children(".active").removeClass("active"),
                    this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
                    this.$stage.children(".center").removeClass("center"),
                    this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
            }
        }],
        e.prototype.initializeStage = function() {
            this.$stage = this.$element.find("." + this.settings.stageClass),
                this.$stage.length || (this.$element.addClass(this.options.loadingClass),
                    this.$stage = a("<" + this.settings.stageElement + ">", {
                        class: this.settings.stageClass
                    }).wrap(a("<div/>", {
                        class: this.settings.stageOuterClass
                    })),
                    this.$element.append(this.$stage.parent()))
        },
        e.prototype.initializeItems = function() {
            var b = this.$element.find(".owl-item");
            if (b.length)
                return this._items = b.get().map(function(b) {
                        return a(b)
                    }),
                    this._mergers = this._items.map(function() {
                        return 1
                    }),
                    void this.refresh();
            this.replace(this.$element.children().not(this.$stage.parent())),
                this.isVisible() ? this.refresh() : this.invalidate("width"),
                this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
        },
        e.prototype.initialize = function() {
            if (this.enter("initializing"),
                this.trigger("initialize"),
                this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
                this.settings.autoWidth && !this.is("pre-loading")) {
                var a, b, c;
                a = this.$element.find("img"),
                    b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d,
                    c = this.$element.children(b).width(),
                    a.length && c <= 0 && this.preloadAutoWidthImages(a)
            }
            this.initializeStage(),
                this.initializeItems(),
                this.registerEventHandlers(),
                this.leave("initializing"),
                this.trigger("initialized")
        },
        e.prototype.isVisible = function() {
            return !this.settings.checkVisibility || this.$element.is(":visible")
        },
        e.prototype.setup = function() {
            var b = this.viewport(),
                c = this.options.responsive,
                d = -1,
                e = null;
            c ? (a.each(c, function(a) {
                        a <= b && a > d && (d = Number(a))
                    }),
                    e = a.extend({}, this.options, c[d]),
                    "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
                    delete e.responsive,
                    e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options),
                this.trigger("change", {
                    property: {
                        name: "settings",
                        value: e
                    }
                }),
                this._breakpoint = d,
                this.settings = e,
                this.invalidate("settings"),
                this.trigger("changed", {
                    property: {
                        name: "settings",
                        value: this.settings
                    }
                })
        },
        e.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1,
                this.settings.merge = !1)
        },
        e.prototype.prepare = function(b) {
            var c = this.trigger("prepare", {
                content: b
            });
            return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)),
                this.trigger("prepared", {
                    content: c.data
                }),
                c.data
        },
        e.prototype.update = function() {
            for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                    return this[a]
                }, this._invalidated), e = {}; b < c;)
                (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e),
                b++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        },
        e.prototype.width = function(a) {
            switch (a = a || e.Width.Default) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        },
        e.prototype.refresh = function() {
            this.enter("refreshing"),
                this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$element.addClass(this.options.refreshClass),
                this.update(),
                this.$element.removeClass(this.options.refreshClass),
                this.leave("refreshing"),
                this.trigger("refreshed")
        },
        e.prototype.onThrottledResize = function() {
            b.clearTimeout(this.resizeTimer),
                this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        },
        e.prototype.onResize = function() {
            return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"),
                this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"),
                    this.refresh(),
                    this.leave("resizing"),
                    void this.trigger("resized")))))
        },
        e.prototype.registerEventHandlers = function() {
            a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize),
                this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
                    this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
                    this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                        return !1
                    })),
                this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)),
                    this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
        },
        e.prototype.onDragStart = function(b) {
            var d = null;
            3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","),
                    d = {
                        x: d[16 === d.length ? 12 : 4],
                        y: d[16 === d.length ? 13 : 5]
                    }) : (d = this.$stage.position(),
                    d = {
                        x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
                        y: d.top
                    }),
                this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
                    this.invalidate("position")),
                this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
                this.speed(0),
                this._drag.time = (new Date).getTime(),
                this._drag.target = a(b.target),
                this._drag.stage.start = d,
                this._drag.stage.current = d,
                this._drag.pointer = this.pointer(b),
                a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
                a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
                    var d = this.difference(this._drag.pointer, this.pointer(b));
                    a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)),
                        Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(),
                            this.enter("dragging"),
                            this.trigger("drag"))
                }, this)))
        },
        e.prototype.onDragMove = function(a) {
            var b = null,
                c = null,
                d = null,
                e = this.difference(this._drag.pointer, this.pointer(a)),
                f = this.difference(this._drag.stage.start, e);
            this.is("dragging") && (a.preventDefault(),
                this.settings.loop ? (b = this.coordinates(this.minimum()),
                    c = this.coordinates(this.maximum() + 1) - b,
                    f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
                    c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
                    d = this.settings.pullDrag ? -1 * e.x / 5 : 0,
                    f.x = Math.max(Math.min(f.x, b + d), c + d)),
                this._drag.stage.current = f,
                this.animate(f.x))
        },
        e.prototype.onDragEnd = function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b)),
                e = this._drag.stage.current,
                f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
            a(c).off(".owl.core"),
                this.$element.removeClass(this.options.grabClass),
                (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                    this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
                    this.invalidate("position"),
                    this.update(),
                    this._drag.direction = f,
                    (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                        return !1
                    })),
                this.is("dragging") && (this.leave("dragging"),
                    this.trigger("dragged"))
        },
        e.prototype.closest = function(b, c) {
            var e = -1,
                f = 30,
                g = this.width(),
                h = this.coordinates();
            return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) {
                    return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e
                }, this)),
                this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
                e
        },
        e.prototype.animate = function(b) {
            var c = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(),
                c && (this.enter("animating"),
                    this.trigger("translate")),
                a.support.transform3d && a.support.transition ? this.$stage.css({
                    transform: "translate3d(" + b + "px,0px,0px)",
                    transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
                }) : c ? this.$stage.animate({
                    left: b + "px"
                }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                    left: b + "px"
                })
        },
        e.prototype.is = function(a) {
            return this._states.current[a] && this._states.current[a] > 0
        },
        e.prototype.current = function(a) {
            if (a === d)
                return this._current;
            if (0 === this._items.length)
                return d;
            if (a = this.normalize(a),
                this._current !== a) {
                var b = this.trigger("change", {
                    property: {
                        name: "position",
                        value: a
                    }
                });
                b.data !== d && (a = this.normalize(b.data)),
                    this._current = a,
                    this.invalidate("position"),
                    this.trigger("changed", {
                        property: {
                            name: "position",
                            value: this._current
                        }
                    })
            }
            return this._current
        },
        e.prototype.invalidate = function(b) {
            return "string" === a.type(b) && (this._invalidated[b] = !0,
                    this.is("valid") && this.leave("valid")),
                a.map(this._invalidated, function(a, b) {
                    return b
                })
        },
        e.prototype.reset = function(a) {
            (a = this.normalize(a)) !== d && (this._speed = 0,
                this._current = a,
                this.suppress(["translate", "translated"]),
                this.animate(this.coordinates(a)),
                this.release(["translate", "translated"]))
        },
        e.prototype.normalize = function(a, b) {
            var c = this._items.length,
                e = b ? 0 : this._clones.length;
            return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2),
                a
        },
        e.prototype.relative = function(a) {
            return a -= this._clones.length / 2,
                this.normalize(a, !0)
        },
        e.prototype.maximum = function(a) {
            var b, c, d, e = this.settings,
                f = this._coordinates.length;
            if (e.loop)
                f = this._clones.length / 2 + this._items.length - 1;
            else if (e.autoWidth || e.merge) {
                if (b = this._items.length)
                    for (c = this._items[--b].width(),
                        d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d);)
                ;
                f = b + 1
            } else
                f = e.center ? this._items.length - 1 : this._items.length - e.items;
            return a && (f -= this._clones.length / 2),
                Math.max(f, 0)
        },
        e.prototype.minimum = function(a) {
            return a ? 0 : this._clones.length / 2
        },
        e.prototype.items = function(a) {
            return a === d ? this._items.slice() : (a = this.normalize(a, !0),
                this._items[a])
        },
        e.prototype.mergers = function(a) {
            return a === d ? this._mergers.slice() : (a = this.normalize(a, !0),
                this._mergers[a])
        },
        e.prototype.clones = function(b) {
            var c = this._clones.length / 2,
                e = c + this._items.length,
                f = function(a) {
                    return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
                };
            return b === d ? a.map(this._clones, function(a, b) {
                return f(b)
            }) : a.map(this._clones, function(a, c) {
                return a === b ? f(c) : null
            })
        },
        e.prototype.speed = function(a) {
            return a !== d && (this._speed = a),
                this._speed
        },
        e.prototype.coordinates = function(b) {
            var c, e = 1,
                f = b - 1;
            return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
                return this.coordinates(b)
            }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1,
                        f = b + 1),
                    c = this._coordinates[b],
                    c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0,
                c = Math.ceil(c))
        },
        e.prototype.duration = function(a, b, c) {
            return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
        },
        e.prototype.to = function(a, b) {
            var c = this.current(),
                d = null,
                e = a - this.relative(c),
                f = (e > 0) - (e < 0),
                g = this._items.length,
                h = this.minimum(),
                i = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
                    a = c + e,
                    (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e,
                        a = d,
                        this.reset(c))) : this.settings.rewind ? (i += 1,
                    a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)),
                this.speed(this.duration(c, a, b)),
                this.current(a),
                this.isVisible() && this.update()
        },
        e.prototype.next = function(a) {
            a = a || !1,
                this.to(this.relative(this.current()) + 1, a)
        },
        e.prototype.prev = function(a) {
            a = a || !1,
                this.to(this.relative(this.current()) - 1, a)
        },
        e.prototype.onTransitionEnd = function(a) {
            if (a !== d && (a.stopPropagation(),
                    (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)))
                return !1;
            this.leave("animating"),
                this.trigger("translated")
        },
        e.prototype.viewport = function() {
            var d;
            return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."),
                d
        },
        e.prototype.replace = function(b) {
            this.$stage.empty(),
                this._items = [],
                b && (b = b instanceof jQuery ? b : a(b)),
                this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
                b.filter(function() {
                    return 1 === this.nodeType
                }).each(a.proxy(function(a, b) {
                    b = this.prepare(b),
                        this.$stage.append(b),
                        this._items.push(b),
                        this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
                }, this)),
                this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                this.invalidate("items")
        },
        e.prototype.add = function(b, c) {
            var e = this.relative(this._current);
            c = c === d ? this._items.length : this.normalize(c, !0),
                b = b instanceof jQuery ? b : a(b),
                this.trigger("add", {
                    content: b,
                    position: c
                }),
                b = this.prepare(b),
                0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b),
                    0 !== this._items.length && this._items[c - 1].after(b),
                    this._items.push(b),
                    this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b),
                    this._items.splice(c, 0, b),
                    this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
                this._items[e] && this.reset(this._items[e].index()),
                this.invalidate("items"),
                this.trigger("added", {
                    content: b,
                    position: c
                })
        },
        e.prototype.remove = function(a) {
            (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
                    content: this._items[a],
                    position: a
                }),
                this._items[a].remove(),
                this._items.splice(a, 1),
                this._mergers.splice(a, 1),
                this.invalidate("items"),
                this.trigger("removed", {
                    content: null,
                    position: a
                }))
        },
        e.prototype.preloadAutoWidthImages = function(b) {
            b.each(a.proxy(function(b, c) {
                this.enter("pre-loading"),
                    c = a(c),
                    a(new Image).one("load", a.proxy(function(a) {
                        c.attr("src", a.target.src),
                            c.css("opacity", 1),
                            this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                    }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
            }, this))
        },
        e.prototype.destroy = function() {
            this.$element.off(".owl.core"),
                this.$stage.off(".owl.core"),
                a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer),
                    this.off(b, "resize", this._handlers.onThrottledResize));
            for (var d in this._plugins)
                this._plugins[d].destroy();
            this.$stage.children(".cloned").remove(),
                this.$stage.unwrap(),
                this.$stage.children().contents().unwrap(),
                this.$stage.children().unwrap(),
                this.$stage.remove(),
                this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        },
        e.prototype.op = function(a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : a < c;
                case ">":
                    return d ? a < c : a > c;
                case ">=":
                    return d ? a <= c : a >= c;
                case "<=":
                    return d ? a >= c : a <= c
            }
        },
        e.prototype.on = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        e.prototype.off = function(a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        e.prototype.trigger = function(b, c, d, f, g) {
            var h = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                i = a.camelCase(a.grep(["on", b, d], function(a) {
                    return a
                }).join("-").toLowerCase()),
                j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                    relatedTarget: this
                }, h, c));
            return this._supress[b] || (a.each(this._plugins, function(a, b) {
                        b.onTrigger && b.onTrigger(j)
                    }),
                    this.register({
                        type: e.Type.Event,
                        name: b
                    }),
                    this.$element.trigger(j),
                    this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
                j
        },
        e.prototype.enter = function(b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                this._states.current[b] === d && (this._states.current[b] = 0),
                    this._states.current[b]++
            }, this))
        },
        e.prototype.leave = function(b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                this._states.current[b]--
            }, this))
        },
        e.prototype.register = function(b) {
            if (b.type === e.Type.Event) {
                if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                    var c = a.event.special[b.name]._default;
                    a.event.special[b.name]._default = function(a) {
                            return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                        },
                        a.event.special[b.name].owl = !0
                }
            } else
                b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags,
                    this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
                        return a.inArray(c, this._states.tags[b.name]) === d
                    }, this)))
        },
        e.prototype.suppress = function(b) {
            a.each(b, a.proxy(function(a, b) {
                this._supress[b] = !0
            }, this))
        },
        e.prototype.release = function(b) {
            a.each(b, a.proxy(function(a, b) {
                delete this._supress[b]
            }, this))
        },
        e.prototype.pointer = function(a) {
            var c = {
                x: null,
                y: null
            };
            return a = a.originalEvent || a || b.event,
                a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a,
                a.pageX ? (c.x = a.pageX,
                    c.y = a.pageY) : (c.x = a.clientX,
                    c.y = a.clientY),
                c
        },
        e.prototype.isNumeric = function(a) {
            return !isNaN(parseFloat(a))
        },
        e.prototype.difference = function(a, b) {
            return {
                x: a.x - b.x,
                y: a.y - b.y
            }
        },
        a.fn.owlCarousel = function(b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var d = a(this),
                    f = d.data("owl.carousel");
                f || (f = new e(this, "object" == typeof b && b),
                        d.data("owl.carousel", f),
                        a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                            f.register({
                                    type: e.Type.Event,
                                    name: c
                                }),
                                f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                                    a.namespace && a.relatedTarget !== this && (this.suppress([c]),
                                        f[c].apply(this, [].slice.call(arguments, 1)),
                                        this.release([c]))
                                }, f))
                        })),
                    "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
            })
        },
        a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
            this._interval = null,
            this._visible = null,
            this._handlers = {
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this._core.$element.on(this._handlers)
    };
    e.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        },
        e.prototype.watch = function() {
            this._interval || (this._visible = this._core.isVisible(),
                this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        },
        e.prototype.refresh = function() {
            this._core.isVisible() !== this._visible && (this._visible = !this._visible,
                this._core.$element.toggleClass("owl-hidden", !this._visible),
                this._visible && this._core.invalidate("width") && this._core.refresh())
        },
        e.prototype.destroy = function() {
            var a, c;
            b.clearInterval(this._interval);
            for (a in this._handlers)
                this._core.$element.off(a, this._handlers[a]);
            for (c in Object.getOwnPropertyNames(this))
                "function" != typeof this[c] && (this[c] = null)
        },
        a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
            this._loaded = [],
            this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                    if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
                        var c = this._core.settings,
                            e = c.center && Math.ceil(c.items / 2) || c.items,
                            f = c.center && -1 * e || 0,
                            g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                            h = this._core.clones().length,
                            i = a.proxy(function(a, b) {
                                this.load(b)
                            }, this);
                        for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager,
                                c.loop && (g -= c.lazyLoadEager,
                                    e++)); f++ < e;)
                            this.load(h / 2 + this._core.relative(g)),
                            h && a.each(this._core.clones(this._core.relative(g)), i),
                            g++
                    }
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this._core.$element.on(this._handlers)
    };
    e.Defaults = {
            lazyLoad: !1,
            lazyLoadEager: 0
        },
        e.prototype.load = function(c) {
            var d = this._core.$stage.children().eq(c),
                e = d && d.find(".owl-lazy");
            !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
                    var e, f = a(d),
                        g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
                    this._core.trigger("load", {
                            element: f,
                            url: g
                        }, "lazy"),
                        f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                            f.css("opacity", 1),
                                this._core.trigger("loaded", {
                                    element: f,
                                    url: g
                                }, "lazy")
                        }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() {
                            this._core.trigger("loaded", {
                                element: f,
                                url: g
                            }, "lazy")
                        }, this)).attr("srcset", g) : (e = new Image,
                            e.onload = a.proxy(function() {
                                f.css({
                                        "background-image": 'url("' + g + '")',
                                        opacity: "1"
                                    }),
                                    this._core.trigger("loaded", {
                                        element: f,
                                        url: g
                                    }, "lazy")
                            }, this),
                            e.src = g)
                }, this)),
                this._loaded.push(d.get(0)))
        },
        e.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers)
                this._core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        },
        a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(c) {
        this._core = c,
            this._previousHeight = null,
            this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update()
                }, this),
                "loaded.owl.lazy": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this._core.$element.on(this._handlers),
            this._intervalId = null;
        var d = this;
        a(b).on("load", function() {
                d._core.settings.autoHeight && d.update()
            }),
            a(b).resize(function() {
                d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId),
                    d._intervalId = setTimeout(function() {
                        d.update()
                    }, 250))
            })
    };
    e.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        },
        e.prototype.update = function() {
            var b = this._core._current,
                c = b + this._core.settings.items,
                d = this._core.settings.lazyLoad,
                e = this._core.$stage.children().toArray().slice(b, c),
                f = [],
                g = 0;
            a.each(e, function(b, c) {
                    f.push(a(c).height())
                }),
                g = Math.max.apply(null, f),
                g <= 1 && d && this._previousHeight && (g = this._previousHeight),
                this._previousHeight = g,
                this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)
        },
        e.prototype.destroy = function() {
            var a, b;
            for (a in this._handlers)
                this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        },
        a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
            this._videos = {},
            this._playing = null,
            this._handlers = {
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
                }, this),
                "refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" === a.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": a.proxy(function(b) {
                    if (b.namespace) {
                        var c = a(b.content).find(".owl-video");
                        c.length && (c.css("display", "none"),
                            this.fetch(c, a(b.content)))
                    }
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this._core.$element.on(this._handlers),
            this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
                this.play(a)
            }, this))
    };
    e.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        },
        e.prototype.fetch = function(a, b) {
            var c = function() {
                    return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
                }(),
                d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
                e = a.attr("data-width") || this._core.settings.videoWidth,
                f = a.attr("data-height") || this._core.settings.videoHeight,
                g = a.attr("href");
            if (!g)
                throw new Error("Missing video URL.");
            if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
                d[3].indexOf("youtu") > -1)
                c = "youtube";
            else if (d[3].indexOf("vimeo") > -1)
                c = "vimeo";
            else {
                if (!(d[3].indexOf("vzaar") > -1))
                    throw new Error("Video URL not supported.");
                c = "vzaar"
            }
            d = d[6],
                this._videos[g] = {
                    type: c,
                    id: d,
                    width: e,
                    height: f
                },
                b.attr("data-video", g),
                this.thumbnail(a, this._videos[g])
        },
        e.prototype.thumbnail = function(b, c) {
            var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
                h = b.find("img"),
                i = "src",
                j = "",
                k = this._core.settings,
                l = function(c) {
                    e = '<div class="owl-video-play-icon"></div>',
                        d = k.lazyLoad ? a("<div/>", {
                            class: "owl-video-tn " + j,
                            srcType: c
                        }) : a("<div/>", {
                            class: "owl-video-tn",
                            style: "opacity:1;background-image:url(" + c + ")"
                        }),
                        b.after(d),
                        b.after(e)
                };
            if (b.wrap(a("<div/>", {
                    class: "owl-video-wrapper",
                    style: g
                })),
                this._core.settings.lazyLoad && (i = "data-src",
                    j = "owl-lazy"),
                h.length)
                return l(h.attr(i)),
                    h.remove(), !1;
            "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg",
                l(f)) : "vimeo" === c.type ? a.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(a) {
                    f = a[0].thumbnail_large,
                        l(f)
                }
            }) : "vzaar" === c.type && a.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(a) {
                    f = a.framegrab_url,
                        l(f)
                }
            })
        },
        e.prototype.stop = function() {
            this._core.trigger("stop", null, "video"),
                this._playing.find(".owl-video-frame").remove(),
                this._playing.removeClass("owl-video-playing"),
                this._playing = null,
                this._core.leave("playing"),
                this._core.trigger("stopped", null, "video")
        },
        e.prototype.play = function(b) {
            var c, d = a(b.target),
                e = d.closest("." + this._core.settings.itemClass),
                f = this._videos[e.attr("data-video")],
                g = f.width || "100%",
                h = f.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"),
                this._core.trigger("play", null, "video"),
                e = this._core.items(this._core.relative(e.index())),
                this._core.reset(e.index()),
                c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),
                c.attr("height", h),
                c.attr("width", g),
                "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"),
                a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),
                this._playing = e.addClass("owl-video-playing"))
        },
        e.prototype.isInFullScreen = function() {
            var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
            return b && a(b).parent().hasClass("owl-video-frame")
        },
        e.prototype.destroy = function() {
            var a, b;
            this._core.$element.off("click.owl.video");
            for (a in this._handlers)
                this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        },
        a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b,
            this.core.options = a.extend({}, e.Defaults, this.core.options),
            this.swapping = !0,
            this.previous = d,
            this.next = d,
            this.handlers = {
                "change.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" == a.property.name && (this.previous = this.core.current(),
                        this.next = a.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                    a.namespace && (this.swapping = "translated" == a.type)
                }, this),
                "translate.owl.carousel": a.proxy(function(a) {
                    a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            },
            this.core.$element.on(this.handlers)
    };
    e.Defaults = {
            animateOut: !1,
            animateIn: !1
        },
        e.prototype.swap = function() {
            if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                this.core.speed(0);
                var b, c = a.proxy(this.clear, this),
                    d = this.core.$stage.children().eq(this.previous),
                    e = this.core.$stage.children().eq(this.next),
                    f = this.core.settings.animateIn,
                    g = this.core.settings.animateOut;
                this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
                        d.one(a.support.animation.end, c).css({
                            left: b + "px"
                        }).addClass("animated owl-animated-out").addClass(g)),
                    f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
            }
        },
        e.prototype.clear = function(b) {
            a(b.target).css({
                    left: ""
                }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
                this.core.onTransitionEnd()
        },
        e.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers)
                this.core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        },
        a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
            this._call = null,
            this._time = 0,
            this._timeout = 0,
            this._paused = !0,
            this._handlers = {
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
                }, this),
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": a.proxy(function(a, b, c) {
                    a.namespace && this.play(b, c)
                }, this),
                "stop.owl.autoplay": a.proxy(function(a) {
                    a.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            },
            this._core.$element.on(this._handlers),
            this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        },
        e.prototype._next = function(d) {
            this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()),
                this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
        },
        e.prototype.read = function() {
            return (new Date).getTime() - this._time
        },
        e.prototype.play = function(c, d) {
            var e;
            this._core.is("rotating") || this._core.enter("rotating"),
                c = c || this._core.settings.autoplayTimeout,
                e = Math.min(this._time % (this._timeout || c), c),
                this._paused ? (this._time = this.read(),
                    this._paused = !1) : b.clearTimeout(this._call),
                this._time += this.read() % c - e,
                this._timeout = c,
                this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
        },
        e.prototype.stop = function() {
            this._core.is("rotating") && (this._time = 0,
                this._paused = !0,
                b.clearTimeout(this._call),
                this._core.leave("rotating"))
        },
        e.prototype.pause = function() {
            this._core.is("rotating") && !this._paused && (this._time = this.read(),
                this._paused = !0,
                b.clearTimeout(this._call))
        },
        e.prototype.destroy = function() {
            var a, b;
            this.stop();
            for (a in this._handlers)
                this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        },
        a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this._core = b,
            this._initialized = !1,
            this._pages = [],
            this._controls = {},
            this._templates = [],
            this.$element = this._core.$element,
            this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            },
            this._handlers = {
                "prepared.owl.carousel": a.proxy(function(b) {
                    b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" == a.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                        this.initialize(),
                        this.update(),
                        this.draw(),
                        this._initialized = !0,
                        this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                        this.update(),
                        this.draw(),
                        this._core.trigger("refreshed", null, "navigation"))
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this.$element.on(this._handlers)
    };
    e.Defaults = {
            nav: !1,
            navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        },
        e.prototype.initialize = function() {
            var b, c = this._core.settings;
            this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),
                this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
                    this.prev(c.navSpeed)
                }, this)),
                this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
                    this.next(c.navSpeed)
                }, this)),
                c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
                this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),
                this._controls.$absolute.on("click", "button", a.proxy(function(b) {
                    var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                    b.preventDefault(),
                        this.to(d, c.dotsSpeed)
                }, this));
            for (b in this._overrides)
                this._core[b] = a.proxy(this[b], this)
        },
        e.prototype.destroy = function() {
            var a, b, c, d, e;
            e = this._core.settings;
            for (a in this._handlers)
                this.$element.off(a, this._handlers[a]);
            for (b in this._controls)
                "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
            for (d in this.overides)
                this._core[d] = this._overrides[d];
            for (c in Object.getOwnPropertyNames(this))
                "function" != typeof this[c] && (this[c] = null)
        },
        e.prototype.update = function() {
            var a, b, c, d = this._core.clones().length / 2,
                e = d + this._core.items().length,
                f = this._core.maximum(!0),
                g = this._core.settings,
                h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
            if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
                g.dots || "page" == g.slideBy)
                for (this._pages = [],
                    a = d,
                    b = 0,
                    c = 0; a < e; a++) {
                    if (b >= h || 0 === b) {
                        if (this._pages.push({
                                start: Math.min(f, a - d),
                                end: a - d + h - 1
                            }),
                            Math.min(f, a - d) === f)
                            break;
                        b = 0,
                            ++c
                    }
                    b += this._core.mergers(this._core.relative(a))
                }
        },
        e.prototype.draw = function() {
            var b, c = this._core.settings,
                d = this._core.items().length <= c.items,
                e = this._core.relative(this._core.current()),
                f = c.loop || c.rewind;
            this._controls.$relative.toggleClass("disabled", !c.nav || d),
                c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)),
                    this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
                this._controls.$absolute.toggleClass("disabled", !c.dots || d),
                c.dots && (b = this._pages.length - this._controls.$absolute.children().length,
                    c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(),
                    this._controls.$absolute.find(".active").removeClass("active"),
                    this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
        },
        e.prototype.onTrigger = function(b) {
            var c = this._core.settings;
            b.page = {
                index: a.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
            }
        },
        e.prototype.current = function() {
            var b = this._core.relative(this._core.current());
            return a.grep(this._pages, a.proxy(function(a, c) {
                return a.start <= b && a.end >= b
            }, this)).pop()
        },
        e.prototype.getPosition = function(b) {
            var c, d, e = this._core.settings;
            return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages),
                    d = this._pages.length,
                    b ? ++c : --c,
                    c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()),
                    d = this._core.items().length,
                    b ? c += e.slideBy : c -= e.slideBy),
                c
        },
        e.prototype.next = function(b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
        },
        e.prototype.prev = function(b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
        },
        e.prototype.to = function(b, c, d) {
            var e;
            !d && this._pages.length ? (e = this._pages.length,
                a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
        },
        a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c,
            this._hashes = {},
            this.$element = this._core.$element,
            this._handlers = {
                "initialized.owl.carousel": a.proxy(function(c) {
                    c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": a.proxy(function(b) {
                    if (b.namespace) {
                        var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!c)
                            return;
                        this._hashes[c] = b.content
                    }
                }, this),
                "changed.owl.carousel": a.proxy(function(c) {
                    if (c.namespace && "position" === c.property.name) {
                        var d = this._core.items(this._core.relative(this._core.current())),
                            e = a.map(this._hashes, function(a, b) {
                                return a === d ? b : null
                            }).join();
                        if (!e || b.location.hash.slice(1) === e)
                            return;
                        b.location.hash = e
                    }
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this.$element.on(this._handlers),
            a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
                var c = b.location.hash.substring(1),
                    e = this._core.$stage.children(),
                    f = this._hashes[c] && e.index(this._hashes[c]);
                f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
            }, this))
    };
    e.Defaults = {
            URLhashListener: !1
        },
        e.prototype.destroy = function() {
            var c, d;
            a(b).off("hashchange.owl.navigation");
            for (c in this._handlers)
                this._core.$element.off(c, this._handlers[c]);
            for (d in Object.getOwnPropertyNames(this))
                "function" != typeof this[d] && (this[d] = null)
        },
        a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
                if (g[b] !== d)
                    return e = !c || b, !1
            }),
            e
    }

    function f(a) {
        return e(a, !0)
    }
    var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        j = {
            csstransforms: function() {
                return !!e("transform")
            },
            csstransforms3d: function() {
                return !!e("perspective")
            },
            csstransitions: function() {
                return !!e("transition")
            },
            cssanimations: function() {
                return !!e("animation")
            }
        };
    j.csstransitions() && (a.support.transition = new String(f("transition")),
            a.support.transition.end = i.transition.end[a.support.transition]),
        j.cssanimations() && (a.support.animation = new String(f("animation")),
            a.support.animation.end = i.animation.end[a.support.animation]),
        j.csstransforms() && (a.support.transform = new String(f("transform")),
            a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);

/* Wow js */
(function() {
    var a, b, c, d, e, f = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        },
        g = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a)
                    return b;
            return -1
        };
    b = function() {
            function a() {}
            return a.prototype.extend = function(a, b) {
                    var c, d;
                    for (c in b)
                        d = b[c],
                        null == a[c] && (a[c] = d);
                    return a
                },
                a.prototype.isMobile = function(a) {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
                },
                a.prototype.createEvent = function(a, b, c, d) {
                    var e;
                    return null == b && (b = !1),
                        null == c && (c = !1),
                        null == d && (d = null),
                        null != document.createEvent ? (e = document.createEvent("CustomEvent"),
                            e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
                            e.eventType = a) : e.eventName = a,
                        e
                },
                a.prototype.emitEvent = function(a, b) {
                    return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
                },
                a.prototype.addEvent = function(a, b, c) {
                    return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
                },
                a.prototype.removeEvent = function(a, b, c) {
                    return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
                },
                a.prototype.innerHeight = function() {
                    return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
                },
                a
        }(),
        c = this.WeakMap || this.MozWeakMap || (c = function() {
            function a() {
                this.keys = [],
                    this.values = []
            }
            return a.prototype.get = function(a) {
                    var b, c, d, e, f;
                    for (f = this.keys,
                        b = d = 0,
                        e = f.length; e > d; b = ++d)
                        if (c = f[b],
                            c === a)
                            return this.values[b]
                },
                a.prototype.set = function(a, b) {
                    var c, d, e, f, g;
                    for (g = this.keys,
                        c = e = 0,
                        f = g.length; f > e; c = ++e)
                        if (d = g[c],
                            d === a)
                            return void(this.values[c] = b);
                    return this.keys.push(a),
                        this.values.push(b)
                },
                a
        }()),
        a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
            function a() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
                    "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return a.notSupported = !0,
                a.prototype.observe = function() {},
                a
        }()),
        d = this.getComputedStyle || function(a, b) {
            return this.getPropertyValue = function(b) {
                    var c;
                    return "float" === b && (b = "styleFloat"),
                        e.test(b) && b.replace(e, function(a, b) {
                            return b.toUpperCase()
                        }),
                        (null != (c = a.currentStyle) ? c[b] : void 0) || null
                },
                this
        },
        e = /(\-([a-z]){1})/g,
        this.WOW = function() {
            function e(a) {
                null == a && (a = {}),
                    this.scrollCallback = f(this.scrollCallback, this),
                    this.scrollHandler = f(this.scrollHandler, this),
                    this.resetAnimation = f(this.resetAnimation, this),
                    this.start = f(this.start, this),
                    this.scrolled = !0,
                    this.config = this.util().extend(a, this.defaults),
                    null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)),
                    this.animationNameCache = new c,
                    this.wowEvent = this.util().createEvent(this.config.boxClass)
            }
            return e.prototype.defaults = {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0,
                    callback: null,
                    scrollContainer: null
                },
                e.prototype.init = function() {
                    var a;
                    return this.element = window.document.documentElement,
                        "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
                        this.finished = []
                },
                e.prototype.start = function() {
                    var b, c, d, e;
                    if (this.stopped = !1,
                        this.boxes = function() {
                            var a, c, d, e;
                            for (d = this.element.querySelectorAll("." + this.config.boxClass),
                                e = [],
                                a = 0,
                                c = d.length; c > a; a++)
                                b = d[a],
                                e.push(b);
                            return e
                        }
                        .call(this),
                        this.all = function() {
                            var a, c, d, e;
                            for (d = this.boxes,
                                e = [],
                                a = 0,
                                c = d.length; c > a; a++)
                                b = d[a],
                                e.push(b);
                            return e
                        }
                        .call(this),
                        this.boxes.length)
                        if (this.disabled())
                            this.resetStyle();
                        else
                            for (e = this.boxes,
                                c = 0,
                                d = e.length; d > c; c++)
                                b = e[c],
                                this.applyStyle(b, !0);
                    return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                            this.util().addEvent(window, "resize", this.scrollHandler),
                            this.interval = setInterval(this.scrollCallback, 50)),
                        this.config.live ? new a(function(a) {
                            return function(b) {
                                var c, d, e, f, g;
                                for (g = [],
                                    c = 0,
                                    d = b.length; d > c; c++)
                                    f = b[c],
                                    g.push(function() {
                                            var a, b, c, d;
                                            for (c = f.addedNodes || [],
                                                d = [],
                                                a = 0,
                                                b = c.length; b > a; a++)
                                                e = c[a],
                                                d.push(this.doSync(e));
                                            return d
                                        }
                                        .call(a));
                                return g
                            }
                        }(this)).observe(document.body, {
                            childList: !0,
                            subtree: !0
                        }) : void 0
                },
                e.prototype.stop = function() {
                    return this.stopped = !0,
                        this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                        this.util().removeEvent(window, "resize", this.scrollHandler),
                        null != this.interval ? clearInterval(this.interval) : void 0
                },
                e.prototype.sync = function(b) {
                    return a.notSupported ? this.doSync(this.element) : void 0
                },
                e.prototype.doSync = function(a) {
                    var b, c, d, e, f;
                    if (null == a && (a = this.element),
                        1 === a.nodeType) {
                        for (a = a.parentNode || a,
                            e = a.querySelectorAll("." + this.config.boxClass),
                            f = [],
                            c = 0,
                            d = e.length; d > c; c++)
                            b = e[c],
                            g.call(this.all, b) < 0 ? (this.boxes.push(b),
                                this.all.push(b),
                                this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0),
                                f.push(this.scrolled = !0)) : f.push(void 0);
                        return f
                    }
                },
                e.prototype.show = function(a) {
                    return this.applyStyle(a),
                        a.className = a.className + " " + this.config.animateClass,
                        null != this.config.callback && this.config.callback(a),
                        this.util().emitEvent(a, this.wowEvent),
                        this.util().addEvent(a, "animationend", this.resetAnimation),
                        this.util().addEvent(a, "oanimationend", this.resetAnimation),
                        this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
                        this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
                        a
                },
                e.prototype.applyStyle = function(a, b) {
                    var c, d, e;
                    return d = a.getAttribute("data-wow-duration"),
                        c = a.getAttribute("data-wow-delay"),
                        e = a.getAttribute("data-wow-iteration"),
                        this.animate(function(f) {
                            return function() {
                                return f.customStyle(a, b, d, c, e)
                            }
                        }(this))
                },
                e.prototype.animate = function() {
                    return "requestAnimationFrame" in window ? function(a) {
                            return window.requestAnimationFrame(a)
                        } :
                        function(a) {
                            return a()
                        }
                }(),
                e.prototype.resetStyle = function() {
                    var a, b, c, d, e;
                    for (d = this.boxes,
                        e = [],
                        b = 0,
                        c = d.length; c > b; b++)
                        a = d[b],
                        e.push(a.style.visibility = "visible");
                    return e
                },
                e.prototype.resetAnimation = function(a) {
                    var b;
                    return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement,
                        b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
                },
                e.prototype.customStyle = function(a, b, c, d, e) {
                    return b && this.cacheAnimationName(a),
                        a.style.visibility = b ? "hidden" : "visible",
                        c && this.vendorSet(a.style, {
                            animationDuration: c
                        }),
                        d && this.vendorSet(a.style, {
                            animationDelay: d
                        }),
                        e && this.vendorSet(a.style, {
                            animationIterationCount: e
                        }),
                        this.vendorSet(a.style, {
                            animationName: b ? "none" : this.cachedAnimationName(a)
                        }),
                        a
                },
                e.prototype.vendors = ["moz", "webkit"],
                e.prototype.vendorSet = function(a, b) {
                    var c, d, e, f;
                    d = [];
                    for (c in b)
                        e = b[c],
                        a["" + c] = e,
                        d.push(function() {
                                var b, d, g, h;
                                for (g = this.vendors,
                                    h = [],
                                    b = 0,
                                    d = g.length; d > b; b++)
                                    f = g[b],
                                    h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                                return h
                            }
                            .call(this));
                    return d
                },
                e.prototype.vendorCSS = function(a, b) {
                    var c, e, f, g, h, i;
                    for (h = d(a),
                        g = h.getPropertyCSSValue(b),
                        f = this.vendors,
                        c = 0,
                        e = f.length; e > c; c++)
                        i = f[c],
                        g = g || h.getPropertyCSSValue("-" + i + "-" + b);
                    return g
                },
                e.prototype.animationName = function(a) {
                    var b;
                    try {
                        b = this.vendorCSS(a, "animation-name").cssText
                    } catch (c) {
                        b = d(a).getPropertyValue("animation-name")
                    }
                    return "none" === b ? "" : b
                },
                e.prototype.cacheAnimationName = function(a) {
                    return this.animationNameCache.set(a, this.animationName(a))
                },
                e.prototype.cachedAnimationName = function(a) {
                    return this.animationNameCache.get(a)
                },
                e.prototype.scrollHandler = function() {
                    return this.scrolled = !0
                },
                e.prototype.scrollCallback = function() {
                    var a;
                    return !this.scrolled || (this.scrolled = !1,
                        this.boxes = function() {
                            var b, c, d, e;
                            for (d = this.boxes,
                                e = [],
                                b = 0,
                                c = d.length; c > b; b++)
                                a = d[b],
                                a && (this.isVisible(a) ? this.show(a) : e.push(a));
                            return e
                        }
                        .call(this),
                        this.boxes.length || this.config.live) ? void 0 : this.stop()
                },
                e.prototype.offsetTop = function(a) {
                    for (var b; void 0 === a.offsetTop;)
                        a = a.parentNode;
                    for (b = a.offsetTop; a = a.offsetParent;)
                        b += a.offsetTop;
                    return b
                },
                e.prototype.isVisible = function(a) {
                    var b, c, d, e, f;
                    return c = a.getAttribute("data-wow-offset") || this.config.offset,
                        f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
                        e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c,
                        d = this.offsetTop(a),
                        b = d + a.clientHeight,
                        e >= d && b >= f
                },
                e.prototype.util = function() {
                    return null != this._util ? this._util : this._util = new b
                },
                e.prototype.disabled = function() {
                    return !this.config.mobile && this.util().isMobile(navigator.userAgent)
                },
                e
        }()
}).call(this)