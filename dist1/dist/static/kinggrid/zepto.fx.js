(function(b, d) {
    var p = "", r, n = {
        Webkit: "webkit",
        Moz: "",
        O: "o"
    }, j = document.createElement("div"), l = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, h, o, i, s, c, e, k, q, g, m = {};
    function f(t) {
        return t.replace(/([A-Z])/g, "-$1").toLowerCase()
    }
    function a(t) {
        return r ? r + t : t.toLowerCase()
    }
    if (j.style.transform === d) {
        b.each(n, function(u, t) {
            if (j.style[u + "TransitionProperty"] !== d) {
                p = "-" + u.toLowerCase() + "-";
                r = t;
                return false
            }
        })
    }
    h = p + "transform";
    m[o = p + "transition-property"] = m[i = p + "transition-duration"] = m[c = p + "transition-delay"] = m[s = p + "transition-timing-function"] = m[e = p + "animation-name"] = m[k = p + "animation-duration"] = m[g = p + "animation-delay"] = m[q = p + "animation-timing-function"] = "";
    b.fx = {
        off: (r === d && j.style.transitionProperty === d),
        speeds: {
            _default: 400,
            fast: 200,
            slow: 600
        },
        cssPrefix: p,
        transitionEnd: a("TransitionEnd"),
        animationEnd: a("AnimationEnd")
    };
    b.fn.animate = function(u, x, w, v, t) {
        if (b.isFunction(x)) {
            v = x,
            w = d,
            x = d
        }
        if (b.isFunction(w)) {
            v = w,
            w = d
        }
        if (b.isPlainObject(x)) {
            w = x.easing,
            v = x.complete,
            t = x.delay,
            x = x.duration
        }
        if (x) {
            x = (typeof x == "number" ? x : (b.fx.speeds[x] || b.fx.speeds._default)) / 1000
        }
        if (t) {
            t = parseFloat(t) / 1000
        }
        return this.anim(u, x, w, v, t)
    }
    ;
    b.fn.anim = function(v, x, w, D, y) {
        var E, A = {}, C, u = "", z = this, B, F = b.fx.transitionEnd, t = false;
        if (x === d) {
            x = b.fx.speeds._default / 1000
        }
        if (y === d) {
            y = 0
        }
        if (b.fx.off) {
            x = 0
        }
        if (typeof v == "string") {
            A[e] = v;
            A[k] = x + "s";
            A[g] = y + "s";
            A[q] = (w || "linear");
            F = b.fx.animationEnd
        } else {
            C = [];
            for (E in v) {
                if (l.test(E)) {
                    u += E + "(" + v[E] + ") "
                } else {
                    A[E] = v[E],
                    C.push(f(E))
                }
            }
            if (u) {
                A[h] = u,
                C.push(h)
            }
            if (x > 0 && typeof v === "object") {
                A[o] = C.join(", ");
                A[i] = x + "s";
                A[c] = y + "s";
                A[s] = (w || "linear")
            }
        }
        B = function(G) {
            if (typeof G !== "undefined") {
                if (G.target !== G.currentTarget) {
                    return
                }
                b(G.target).unbind(F, B)
            } else {
                b(this).unbind(F, B)
            }
            t = true;
            b(this).css(m);
            D && D.call(this)
        }
        ;
        if (x > 0) {
            this.bind(F, B);
            setTimeout(function() {
                if (t) {
                    return
                }
                B.call(z)
            }, ((x + y) * 1000) + 25)
        }
        this.size() && this.get(0).clientLeft;
        this.css(A);
        if (x <= 0) {
            setTimeout(function() {
                z.each(function() {
                    B.call(this)
                })
            }, 0)
        }
        return this
    }
    ;
    j = null
}
)(Zepto);
