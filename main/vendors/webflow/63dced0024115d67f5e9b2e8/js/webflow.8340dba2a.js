/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Bi = u(() => {
    window.tram = (function (e) {
      function t(f, b) {
        var R = new l.Bare();
        return R.init(f, b);
      }
      function r(f) {
        return f.replace(/[A-Z]/g, function (b) {
          return "-" + b.toLowerCase();
        });
      }
      function n(f) {
        var b = parseInt(f.slice(1), 16),
          R = (b >> 16) & 255,
          D = (b >> 8) & 255,
          A = 255 & b;
        return [R, D, A];
      }
      function o(f, b, R) {
        return (
          "#" + ((1 << 24) | (f << 16) | (b << 8) | R).toString(16).slice(1)
        );
      }
      function i() {}
      function a(f, b) {
        h("Type warning: Expected: [" + f + "] Got: [" + typeof b + "] " + b);
      }
      function s(f, b, R) {
        h("Units do not match [" + f + "]: " + b + ", " + R);
      }
      function c(f, b, R) {
        if ((b !== void 0 && (R = b), f === void 0)) return R;
        var D = R;
        return (
          xe.test(f) || !Fe.test(f)
            ? (D = parseInt(f, 10))
            : Fe.test(f) && (D = 1e3 * parseFloat(f)),
          0 > D && (D = 0),
          D === D ? D : R
        );
      }
      function h(f) {
        ne.debug && window && window.console.warn(f);
      }
      function I(f) {
        for (var b = -1, R = f ? f.length : 0, D = []; ++b < R; ) {
          var A = f[b];
          A && D.push(A);
        }
        return D;
      }
      var d = (function (f, b, R) {
          function D(se) {
            return typeof se == "object";
          }
          function A(se) {
            return typeof se == "function";
          }
          function F() {}
          function ie(se, _e) {
            function te() {
              var Ge = new de();
              return A(Ge.init) && Ge.init.apply(Ge, arguments), Ge;
            }
            function de() {}
            _e === R && ((_e = se), (se = Object)), (te.Bare = de);
            var pe,
              we = (F[f] = se[f]),
              at = (de[f] = te[f] = new F());
            return (
              (at.constructor = te),
              (te.mixin = function (Ge) {
                return (de[f] = te[f] = ie(te, Ge)[f]), te;
              }),
              (te.open = function (Ge) {
                if (
                  ((pe = {}),
                  A(Ge)
                    ? (pe = Ge.call(te, at, we, te, se))
                    : D(Ge) && (pe = Ge),
                  D(pe))
                )
                  for (var Ar in pe) b.call(pe, Ar) && (at[Ar] = pe[Ar]);
                return A(at.init) || (at.init = se), te;
              }),
              te.open(_e)
            );
          }
          return ie;
        })("prototype", {}.hasOwnProperty),
        T = {
          ease: [
            "ease",
            function (f, b, R, D) {
              var A = (f /= D) * f,
                F = A * f;
              return (
                b +
                R * (-2.75 * F * A + 11 * A * A + -15.5 * F + 8 * A + 0.25 * f)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (f, b, R, D) {
              var A = (f /= D) * f,
                F = A * f;
              return b + R * (-1 * F * A + 3 * A * A + -3 * F + 2 * A);
            },
          ],
          "ease-out": [
            "ease-out",
            function (f, b, R, D) {
              var A = (f /= D) * f,
                F = A * f;
              return (
                b +
                R * (0.3 * F * A + -1.6 * A * A + 2.2 * F + -1.8 * A + 1.9 * f)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (f, b, R, D) {
              var A = (f /= D) * f,
                F = A * f;
              return b + R * (2 * F * A + -5 * A * A + 2 * F + 2 * A);
            },
          ],
          linear: [
            "linear",
            function (f, b, R, D) {
              return (R * f) / D + b;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (f, b, R, D) {
              return R * (f /= D) * f + b;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (f, b, R, D) {
              return -R * (f /= D) * (f - 2) + b;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (f, b, R, D) {
              return (f /= D / 2) < 1
                ? (R / 2) * f * f + b
                : (-R / 2) * (--f * (f - 2) - 1) + b;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (f, b, R, D) {
              return R * (f /= D) * f * f + b;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (f, b, R, D) {
              return R * ((f = f / D - 1) * f * f + 1) + b;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (f, b, R, D) {
              return (f /= D / 2) < 1
                ? (R / 2) * f * f * f + b
                : (R / 2) * ((f -= 2) * f * f + 2) + b;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (f, b, R, D) {
              return R * (f /= D) * f * f * f + b;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (f, b, R, D) {
              return -R * ((f = f / D - 1) * f * f * f - 1) + b;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (f, b, R, D) {
              return (f /= D / 2) < 1
                ? (R / 2) * f * f * f * f + b
                : (-R / 2) * ((f -= 2) * f * f * f - 2) + b;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (f, b, R, D) {
              return R * (f /= D) * f * f * f * f + b;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (f, b, R, D) {
              return R * ((f = f / D - 1) * f * f * f * f + 1) + b;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (f, b, R, D) {
              return (f /= D / 2) < 1
                ? (R / 2) * f * f * f * f * f + b
                : (R / 2) * ((f -= 2) * f * f * f * f + 2) + b;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (f, b, R, D) {
              return -R * Math.cos((f / D) * (Math.PI / 2)) + R + b;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (f, b, R, D) {
              return R * Math.sin((f / D) * (Math.PI / 2)) + b;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (f, b, R, D) {
              return (-R / 2) * (Math.cos((Math.PI * f) / D) - 1) + b;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (f, b, R, D) {
              return f === 0 ? b : R * Math.pow(2, 10 * (f / D - 1)) + b;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (f, b, R, D) {
              return f === D
                ? b + R
                : R * (-Math.pow(2, (-10 * f) / D) + 1) + b;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (f, b, R, D) {
              return f === 0
                ? b
                : f === D
                ? b + R
                : (f /= D / 2) < 1
                ? (R / 2) * Math.pow(2, 10 * (f - 1)) + b
                : (R / 2) * (-Math.pow(2, -10 * --f) + 2) + b;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (f, b, R, D) {
              return -R * (Math.sqrt(1 - (f /= D) * f) - 1) + b;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (f, b, R, D) {
              return R * Math.sqrt(1 - (f = f / D - 1) * f) + b;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (f, b, R, D) {
              return (f /= D / 2) < 1
                ? (-R / 2) * (Math.sqrt(1 - f * f) - 1) + b
                : (R / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + b;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (f, b, R, D, A) {
              return (
                A === void 0 && (A = 1.70158),
                R * (f /= D) * f * ((A + 1) * f - A) + b
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (f, b, R, D, A) {
              return (
                A === void 0 && (A = 1.70158),
                R * ((f = f / D - 1) * f * ((A + 1) * f + A) + 1) + b
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (f, b, R, D, A) {
              return (
                A === void 0 && (A = 1.70158),
                (f /= D / 2) < 1
                  ? (R / 2) * f * f * (((A *= 1.525) + 1) * f - A) + b
                  : (R / 2) *
                      ((f -= 2) * f * (((A *= 1.525) + 1) * f + A) + 2) +
                    b
              );
            },
          ],
        },
        E = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        y = document,
        O = window,
        C = "bkwld-tram",
        x = /[\-\.0-9]/g,
        L = /[A-Z]/,
        S = "number",
        U = /^(rgb|#)/,
        G = /(em|cm|mm|in|pt|pc|px)$/,
        W = /(em|cm|mm|in|pt|pc|px|%)$/,
        K = /(deg|rad|turn)$/,
        J = "unitless",
        ee = /(all|none) 0s ease 0s/,
        oe = /^(width|height)$/,
        z = " ",
        q = y.createElement("a"),
        m = ["Webkit", "Moz", "O", "ms"],
        M = ["-webkit-", "-moz-", "-o-", "-ms-"],
        N = function (f) {
          if (f in q.style) return { dom: f, css: f };
          var b,
            R,
            D = "",
            A = f.split("-");
          for (b = 0; b < A.length; b++)
            D += A[b].charAt(0).toUpperCase() + A[b].slice(1);
          for (b = 0; b < m.length; b++)
            if (((R = m[b] + D), R in q.style))
              return { dom: R, css: M[b] + f };
        },
        B = (t.support = {
          bind: Function.prototype.bind,
          transform: N("transform"),
          transition: N("transition"),
          backface: N("backface-visibility"),
          timing: N("transition-timing-function"),
        });
      if (B.transition) {
        var P = B.timing.dom;
        if (((q.style[P] = T["ease-in-back"][0]), !q.style[P]))
          for (var H in E) T[H][0] = E[H];
      }
      var w = (t.frame = (function () {
          var f =
            O.requestAnimationFrame ||
            O.webkitRequestAnimationFrame ||
            O.mozRequestAnimationFrame ||
            O.oRequestAnimationFrame ||
            O.msRequestAnimationFrame;
          return f && B.bind
            ? f.bind(O)
            : function (b) {
                O.setTimeout(b, 16);
              };
        })()),
        k = (t.now = (function () {
          var f = O.performance,
            b = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
          return b && B.bind
            ? b.bind(f)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        v = d(function (f) {
          function b(ae, he) {
            var Te = I(("" + ae).split(z)),
              ge = Te[0];
            he = he || {};
            var Xe = $[ge];
            if (!Xe) return h("Unsupported property: " + ge);
            if (!he.weak || !this.props[ge]) {
              var Qe = Xe[0],
                ke = this.props[ge];
              return (
                ke || (ke = this.props[ge] = new Qe.Bare()),
                ke.init(this.$el, Te, Xe, he),
                ke
              );
            }
          }
          function R(ae, he, Te) {
            if (ae) {
              var ge = typeof ae;
              if (
                (he ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ge == "number" && he)
              )
                return (
                  (this.timer = new Z({
                    duration: ae,
                    context: this,
                    complete: F,
                  })),
                  void (this.active = !0)
                );
              if (ge == "string" && he) {
                switch (ae) {
                  case "hide":
                    te.call(this);
                    break;
                  case "stop":
                    ie.call(this);
                    break;
                  case "redraw":
                    de.call(this);
                    break;
                  default:
                    b.call(this, ae, Te && Te[1]);
                }
                return F.call(this);
              }
              if (ge == "function") return void ae.call(this, this);
              if (ge == "object") {
                var Xe = 0;
                at.call(
                  this,
                  ae,
                  function (Ae, Zy) {
                    Ae.span > Xe && (Xe = Ae.span), Ae.stop(), Ae.animate(Zy);
                  },
                  function (Ae) {
                    "wait" in Ae && (Xe = c(Ae.wait, 0));
                  }
                ),
                  we.call(this),
                  Xe > 0 &&
                    ((this.timer = new Z({ duration: Xe, context: this })),
                    (this.active = !0),
                    he && (this.timer.complete = F));
                var Qe = this,
                  ke = !1,
                  vn = {};
                w(function () {
                  at.call(Qe, ae, function (Ae) {
                    Ae.active && ((ke = !0), (vn[Ae.name] = Ae.nextStyle));
                  }),
                    ke && Qe.$el.css(vn);
                });
              }
            }
          }
          function D(ae) {
            (ae = c(ae, 0)),
              this.active
                ? this.queue.push({ options: ae })
                : ((this.timer = new Z({
                    duration: ae,
                    context: this,
                    complete: F,
                  })),
                  (this.active = !0));
          }
          function A(ae) {
            return this.active
              ? (this.queue.push({ options: ae, args: arguments }),
                void (this.timer.complete = F))
              : h(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function F() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ae = this.queue.shift();
              R.call(this, ae.options, !0, ae.args);
            }
          }
          function ie(ae) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var he;
            typeof ae == "string"
              ? ((he = {}), (he[ae] = 1))
              : (he = typeof ae == "object" && ae != null ? ae : this.props),
              at.call(this, he, Ge),
              we.call(this);
          }
          function se(ae) {
            ie.call(this, ae), at.call(this, ae, Ar, Qy);
          }
          function _e(ae) {
            typeof ae != "string" && (ae = "block"),
              (this.el.style.display = ae);
          }
          function te() {
            ie.call(this), (this.el.style.display = "none");
          }
          function de() {
            this.el.offsetHeight;
          }
          function pe() {
            ie.call(this),
              e.removeData(this.el, C),
              (this.$el = this.el = null);
          }
          function we() {
            var ae,
              he,
              Te = [];
            this.upstream && Te.push(this.upstream);
            for (ae in this.props)
              (he = this.props[ae]), he.active && Te.push(he.string);
            (Te = Te.join(",")),
              this.style !== Te &&
                ((this.style = Te), (this.el.style[B.transition.dom] = Te));
          }
          function at(ae, he, Te) {
            var ge,
              Xe,
              Qe,
              ke,
              vn = he !== Ge,
              Ae = {};
            for (ge in ae)
              (Qe = ae[ge]),
                ge in ve
                  ? (Ae.transform || (Ae.transform = {}),
                    (Ae.transform[ge] = Qe))
                  : (L.test(ge) && (ge = r(ge)),
                    ge in $ ? (Ae[ge] = Qe) : (ke || (ke = {}), (ke[ge] = Qe)));
            for (ge in Ae) {
              if (((Qe = Ae[ge]), (Xe = this.props[ge]), !Xe)) {
                if (!vn) continue;
                Xe = b.call(this, ge);
              }
              he.call(this, Xe, Qe);
            }
            Te && ke && Te.call(this, ke);
          }
          function Ge(ae) {
            ae.stop();
          }
          function Ar(ae, he) {
            ae.set(he);
          }
          function Qy(ae) {
            this.$el.css(ae);
          }
          function Ye(ae, he) {
            f[ae] = function () {
              return this.children
                ? $y.call(this, he, arguments)
                : (this.el && he.apply(this, arguments), this);
            };
          }
          function $y(ae, he) {
            var Te,
              ge = this.children.length;
            for (Te = 0; ge > Te; Te++) ae.apply(this.children[Te], he);
            return this;
          }
          (f.init = function (ae) {
            if (
              ((this.$el = e(ae)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ne.keepInherited && !ne.fallback)
            ) {
              var he = Q(this.el, "transition");
              he && !ee.test(he) && (this.upstream = he);
            }
            B.backface &&
              ne.hideBackface &&
              _(this.el, B.backface.css, "hidden");
          }),
            Ye("add", b),
            Ye("start", R),
            Ye("wait", D),
            Ye("then", A),
            Ye("next", F),
            Ye("stop", ie),
            Ye("set", se),
            Ye("show", _e),
            Ye("hide", te),
            Ye("redraw", de),
            Ye("destroy", pe);
        }),
        l = d(v, function (f) {
          function b(R, D) {
            var A = e.data(R, C) || e.data(R, C, new v.Bare());
            return A.el || A.init(R), D ? A.start(D) : A;
          }
          f.init = function (R, D) {
            var A = e(R);
            if (!A.length) return this;
            if (A.length === 1) return b(A[0], D);
            var F = [];
            return (
              A.each(function (ie, se) {
                F.push(b(se, D));
              }),
              (this.children = F),
              this
            );
          };
        }),
        p = d(function (f) {
          function b() {
            var F = this.get();
            this.update("auto");
            var ie = this.get();
            return this.update(F), ie;
          }
          function R(F, ie, se) {
            return ie !== void 0 && (se = ie), F in T ? F : se;
          }
          function D(F) {
            var ie = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(F);
            return (ie ? o(ie[1], ie[2], ie[3]) : F).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var A = { duration: 500, ease: "ease", delay: 0 };
          (f.init = function (F, ie, se, _e) {
            (this.$el = F), (this.el = F[0]);
            var te = ie[0];
            se[2] && (te = se[2]),
              re[te] && (te = re[te]),
              (this.name = te),
              (this.type = se[1]),
              (this.duration = c(ie[1], this.duration, A.duration)),
              (this.ease = R(ie[2], this.ease, A.ease)),
              (this.delay = c(ie[3], this.delay, A.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = oe.test(this.name)),
              (this.unit = _e.unit || this.unit || ne.defaultUnit),
              (this.angle = _e.angle || this.angle || ne.defaultAngle),
              ne.fallback || _e.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    z +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? z + T[this.ease][0] : "") +
                    (this.delay ? z + this.delay + "ms" : "")));
          }),
            (f.set = function (F) {
              (F = this.convert(F, this.type)), this.update(F), this.redraw();
            }),
            (f.transition = function (F) {
              (this.active = !0),
                (F = this.convert(F, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  F == "auto" && (F = b.call(this))),
                (this.nextStyle = F);
            }),
            (f.fallback = function (F) {
              var ie =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (F = this.convert(F, this.type)),
                this.auto &&
                  (ie == "auto" && (ie = this.convert(this.get(), this.type)),
                  F == "auto" && (F = b.call(this))),
                (this.tween = new Y({
                  from: ie,
                  to: F,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (f.get = function () {
              return Q(this.el, this.name);
            }),
            (f.update = function (F) {
              _(this.el, this.name, F);
            }),
            (f.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                _(this.el, this.name, this.get()));
              var F = this.tween;
              F && F.context && F.destroy();
            }),
            (f.convert = function (F, ie) {
              if (F == "auto" && this.auto) return F;
              var se,
                _e = typeof F == "number",
                te = typeof F == "string";
              switch (ie) {
                case S:
                  if (_e) return F;
                  if (te && F.replace(x, "") === "") return +F;
                  se = "number(unitless)";
                  break;
                case U:
                  if (te) {
                    if (F === "" && this.original) return this.original;
                    if (ie.test(F))
                      return F.charAt(0) == "#" && F.length == 7 ? F : D(F);
                  }
                  se = "hex or rgb string";
                  break;
                case G:
                  if (_e) return F + this.unit;
                  if (te && ie.test(F)) return F;
                  se = "number(px) or string(unit)";
                  break;
                case W:
                  if (_e) return F + this.unit;
                  if (te && ie.test(F)) return F;
                  se = "number(px) or string(unit or %)";
                  break;
                case K:
                  if (_e) return F + this.angle;
                  if (te && ie.test(F)) return F;
                  se = "number(deg) or string(angle)";
                  break;
                case J:
                  if (_e || (te && W.test(F))) return F;
                  se = "number(unitless) or string(unit or %)";
              }
              return a(se, F), F;
            }),
            (f.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        g = d(p, function (f, b) {
          f.init = function () {
            b.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), U));
          };
        }),
        X = d(p, function (f, b) {
          (f.init = function () {
            b.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (f.get = function () {
              return this.$el[this.name]();
            }),
            (f.update = function (R) {
              this.$el[this.name](R);
            });
        }),
        j = d(p, function (f, b) {
          function R(D, A) {
            var F, ie, se, _e, te;
            for (F in D)
              (_e = ve[F]),
                (se = _e[0]),
                (ie = _e[1] || F),
                (te = this.convert(D[F], se)),
                A.call(this, ie, te, se);
          }
          (f.init = function () {
            b.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                ve.perspective &&
                  ne.perspective &&
                  ((this.current.perspective = ne.perspective),
                  _(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (f.set = function (D) {
              R.call(this, D, function (A, F) {
                this.current[A] = F;
              }),
                _(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (f.transition = function (D) {
              var A = this.values(D);
              this.tween = new ce({
                current: this.current,
                values: A,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var F,
                ie = {};
              for (F in this.current) ie[F] = F in A ? A[F] : this.current[F];
              (this.active = !0), (this.nextStyle = this.style(ie));
            }),
            (f.fallback = function (D) {
              var A = this.values(D);
              this.tween = new ce({
                current: this.current,
                values: A,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (f.update = function () {
              _(this.el, this.name, this.style(this.current));
            }),
            (f.style = function (D) {
              var A,
                F = "";
              for (A in D) F += A + "(" + D[A] + ") ";
              return F;
            }),
            (f.values = function (D) {
              var A,
                F = {};
              return (
                R.call(this, D, function (ie, se, _e) {
                  (F[ie] = se),
                    this.current[ie] === void 0 &&
                      ((A = 0),
                      ~ie.indexOf("scale") && (A = 1),
                      (this.current[ie] = this.convert(A, _e)));
                }),
                F
              );
            });
        }),
        Y = d(function (f) {
          function b(te) {
            se.push(te) === 1 && w(R);
          }
          function R() {
            var te,
              de,
              pe,
              we = se.length;
            if (we)
              for (w(R), de = k(), te = we; te--; )
                (pe = se[te]), pe && pe.render(de);
          }
          function D(te) {
            var de,
              pe = e.inArray(te, se);
            pe >= 0 &&
              ((de = se.slice(pe + 1)),
              (se.length = pe),
              de.length && (se = se.concat(de)));
          }
          function A(te) {
            return Math.round(te * _e) / _e;
          }
          function F(te, de, pe) {
            return o(
              te[0] + pe * (de[0] - te[0]),
              te[1] + pe * (de[1] - te[1]),
              te[2] + pe * (de[2] - te[2])
            );
          }
          var ie = { ease: T.ease[1], from: 0, to: 1 };
          (f.init = function (te) {
            (this.duration = te.duration || 0), (this.delay = te.delay || 0);
            var de = te.ease || ie.ease;
            T[de] && (de = T[de][1]),
              typeof de != "function" && (de = ie.ease),
              (this.ease = de),
              (this.update = te.update || i),
              (this.complete = te.complete || i),
              (this.context = te.context || this),
              (this.name = te.name);
            var pe = te.from,
              we = te.to;
            pe === void 0 && (pe = ie.from),
              we === void 0 && (we = ie.to),
              (this.unit = te.unit || ""),
              typeof pe == "number" && typeof we == "number"
                ? ((this.begin = pe), (this.change = we - pe))
                : this.format(we, pe),
              (this.value = this.begin + this.unit),
              (this.start = k()),
              te.autoplay !== !1 && this.play();
          }),
            (f.play = function () {
              this.active ||
                (this.start || (this.start = k()), (this.active = !0), b(this));
            }),
            (f.stop = function () {
              this.active && ((this.active = !1), D(this));
            }),
            (f.render = function (te) {
              var de,
                pe = te - this.start;
              if (this.delay) {
                if (pe <= this.delay) return;
                pe -= this.delay;
              }
              if (pe < this.duration) {
                var we = this.ease(pe, 0, 1, this.duration);
                return (
                  (de = this.startRGB
                    ? F(this.startRGB, this.endRGB, we)
                    : A(this.begin + we * this.change)),
                  (this.value = de + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (de = this.endHex || this.begin + this.change),
                (this.value = de + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (f.format = function (te, de) {
              if (((de += ""), (te += ""), te.charAt(0) == "#"))
                return (
                  (this.startRGB = n(de)),
                  (this.endRGB = n(te)),
                  (this.endHex = te),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var pe = de.replace(x, ""),
                  we = te.replace(x, "");
                pe !== we && s("tween", de, te), (this.unit = pe);
              }
              (de = parseFloat(de)),
                (te = parseFloat(te)),
                (this.begin = this.value = de),
                (this.change = te - de);
            }),
            (f.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var se = [],
            _e = 1e3;
        }),
        Z = d(Y, function (f) {
          (f.init = function (b) {
            (this.duration = b.duration || 0),
              (this.complete = b.complete || i),
              (this.context = b.context),
              this.play();
          }),
            (f.render = function (b) {
              var R = b - this.start;
              R < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        ce = d(Y, function (f, b) {
          (f.init = function (R) {
            (this.context = R.context),
              (this.update = R.update),
              (this.tweens = []),
              (this.current = R.current);
            var D, A;
            for (D in R.values)
              (A = R.values[D]),
                this.current[D] !== A &&
                  this.tweens.push(
                    new Y({
                      name: D,
                      from: this.current[D],
                      to: A,
                      duration: R.duration,
                      delay: R.delay,
                      ease: R.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (f.render = function (R) {
              var D,
                A,
                F = this.tweens.length,
                ie = !1;
              for (D = F; D--; )
                (A = this.tweens[D]),
                  A.context &&
                    (A.render(R), (this.current[A.name] = A.value), (ie = !0));
              return ie
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (f.destroy = function () {
              if ((b.destroy.call(this), this.tweens)) {
                var R,
                  D = this.tweens.length;
                for (R = D; R--; ) this.tweens[R].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ne = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !B.transition,
          agentTests: [],
        });
      (t.fallback = function (f) {
        if (!B.transition) return (ne.fallback = !0);
        ne.agentTests.push("(" + f + ")");
        var b = new RegExp(ne.agentTests.join("|"), "i");
        ne.fallback = b.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (f) {
          return new Y(f);
        }),
        (t.delay = function (f, b, R) {
          return new Z({ complete: b, duration: f, context: R });
        }),
        (e.fn.tram = function (f) {
          return t.call(null, this, f);
        });
      var _ = e.style,
        Q = e.css,
        re = { transform: B.transform && B.transform.css },
        $ = {
          color: [g, U],
          background: [g, U, "background-color"],
          "outline-color": [g, U],
          "border-color": [g, U],
          "border-top-color": [g, U],
          "border-right-color": [g, U],
          "border-bottom-color": [g, U],
          "border-left-color": [g, U],
          "border-width": [p, G],
          "border-top-width": [p, G],
          "border-right-width": [p, G],
          "border-bottom-width": [p, G],
          "border-left-width": [p, G],
          "border-spacing": [p, G],
          "letter-spacing": [p, G],
          margin: [p, G],
          "margin-top": [p, G],
          "margin-right": [p, G],
          "margin-bottom": [p, G],
          "margin-left": [p, G],
          padding: [p, G],
          "padding-top": [p, G],
          "padding-right": [p, G],
          "padding-bottom": [p, G],
          "padding-left": [p, G],
          "outline-width": [p, G],
          opacity: [p, S],
          top: [p, W],
          right: [p, W],
          bottom: [p, W],
          left: [p, W],
          "font-size": [p, W],
          "text-indent": [p, W],
          "word-spacing": [p, W],
          width: [p, W],
          "min-width": [p, W],
          "max-width": [p, W],
          height: [p, W],
          "min-height": [p, W],
          "max-height": [p, W],
          "line-height": [p, J],
          "scroll-top": [X, S, "scrollTop"],
          "scroll-left": [X, S, "scrollLeft"],
        },
        ve = {};
      B.transform &&
        (($.transform = [j]),
        (ve = {
          x: [W, "translateX"],
          y: [W, "translateY"],
          rotate: [K],
          rotateX: [K],
          rotateY: [K],
          scale: [S],
          scaleX: [S],
          scaleY: [S],
          skew: [K],
          skewX: [K],
          skewY: [K],
        })),
        B.transform &&
          B.backface &&
          ((ve.z = [W, "translateZ"]),
          (ve.rotateZ = [K]),
          (ve.scaleZ = [S]),
          (ve.perspective = [G]));
      var xe = /ms/,
        Fe = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ns = u((Tk, Cs) => {
    var Jy = window.$,
      eI = Bi() && Jy.tram;
    Cs.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        o = Function.prototype,
        i = r.push,
        a = r.slice,
        s = r.concat,
        c = n.toString,
        h = n.hasOwnProperty,
        I = r.forEach,
        d = r.map,
        T = r.reduce,
        E = r.reduceRight,
        y = r.filter,
        O = r.every,
        C = r.some,
        x = r.indexOf,
        L = r.lastIndexOf,
        S = Array.isArray,
        U = Object.keys,
        G = o.bind,
        W =
          (e.each =
          e.forEach =
            function (m, M, N) {
              if (m == null) return m;
              if (I && m.forEach === I) m.forEach(M, N);
              else if (m.length === +m.length) {
                for (var B = 0, P = m.length; B < P; B++)
                  if (M.call(N, m[B], B, m) === t) return;
              } else
                for (var H = e.keys(m), B = 0, P = H.length; B < P; B++)
                  if (M.call(N, m[H[B]], H[B], m) === t) return;
              return m;
            });
      (e.map = e.collect =
        function (m, M, N) {
          var B = [];
          return m == null
            ? B
            : d && m.map === d
            ? m.map(M, N)
            : (W(m, function (P, H, w) {
                B.push(M.call(N, P, H, w));
              }),
              B);
        }),
        (e.find = e.detect =
          function (m, M, N) {
            var B;
            return (
              K(m, function (P, H, w) {
                if (M.call(N, P, H, w)) return (B = P), !0;
              }),
              B
            );
          }),
        (e.filter = e.select =
          function (m, M, N) {
            var B = [];
            return m == null
              ? B
              : y && m.filter === y
              ? m.filter(M, N)
              : (W(m, function (P, H, w) {
                  M.call(N, P, H, w) && B.push(P);
                }),
                B);
          });
      var K =
        (e.some =
        e.any =
          function (m, M, N) {
            M || (M = e.identity);
            var B = !1;
            return m == null
              ? B
              : C && m.some === C
              ? m.some(M, N)
              : (W(m, function (P, H, w) {
                  if (B || (B = M.call(N, P, H, w))) return t;
                }),
                !!B);
          });
      (e.contains = e.include =
        function (m, M) {
          return m == null
            ? !1
            : x && m.indexOf === x
            ? m.indexOf(M) != -1
            : K(m, function (N) {
                return N === M;
              });
        }),
        (e.delay = function (m, M) {
          var N = a.call(arguments, 2);
          return setTimeout(function () {
            return m.apply(null, N);
          }, M);
        }),
        (e.defer = function (m) {
          return e.delay.apply(e, [m, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (m) {
          var M, N, B;
          return function () {
            M ||
              ((M = !0),
              (N = arguments),
              (B = this),
              eI.frame(function () {
                (M = !1), m.apply(B, N);
              }));
          };
        }),
        (e.debounce = function (m, M, N) {
          var B,
            P,
            H,
            w,
            k,
            v = function () {
              var l = e.now() - w;
              l < M
                ? (B = setTimeout(v, M - l))
                : ((B = null), N || ((k = m.apply(H, P)), (H = P = null)));
            };
          return function () {
            (H = this), (P = arguments), (w = e.now());
            var l = N && !B;
            return (
              B || (B = setTimeout(v, M)),
              l && ((k = m.apply(H, P)), (H = P = null)),
              k
            );
          };
        }),
        (e.defaults = function (m) {
          if (!e.isObject(m)) return m;
          for (var M = 1, N = arguments.length; M < N; M++) {
            var B = arguments[M];
            for (var P in B) m[P] === void 0 && (m[P] = B[P]);
          }
          return m;
        }),
        (e.keys = function (m) {
          if (!e.isObject(m)) return [];
          if (U) return U(m);
          var M = [];
          for (var N in m) e.has(m, N) && M.push(N);
          return M;
        }),
        (e.has = function (m, M) {
          return h.call(m, M);
        }),
        (e.isObject = function (m) {
          return m === Object(m);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var J = /(.)^/,
        ee = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        oe = /\\|'|\r|\n|\u2028|\u2029/g,
        z = function (m) {
          return "\\" + ee[m];
        },
        q = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (m, M, N) {
          !M && N && (M = N), (M = e.defaults({}, M, e.templateSettings));
          var B = RegExp(
              [
                (M.escape || J).source,
                (M.interpolate || J).source,
                (M.evaluate || J).source,
              ].join("|") + "|$",
              "g"
            ),
            P = 0,
            H = "__p+='";
          m.replace(B, function (l, p, g, X, j) {
            return (
              (H += m.slice(P, j).replace(oe, z)),
              (P = j + l.length),
              p
                ? (H +=
                    `'+
((__t=(` +
                    p +
                    `))==null?'':_.escape(__t))+
'`)
                : g
                ? (H +=
                    `'+
((__t=(` +
                    g +
                    `))==null?'':__t)+
'`)
                : X &&
                  (H +=
                    `';
` +
                    X +
                    `
__p+='`),
              l
            );
          }),
            (H += `';
`);
          var w = M.variable;
          if (w) {
            if (!q.test(w))
              throw new Error("variable is not a bare identifier: " + w);
          } else
            (H =
              `with(obj||{}){
` +
              H +
              `}
`),
              (w = "obj");
          H =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            H +
            `return __p;
`;
          var k;
          try {
            k = new Function(M.variable || "obj", "_", H);
          } catch (l) {
            throw ((l.source = H), l);
          }
          var v = function (l) {
            return k.call(this, l, e);
          };
          return (
            (v.source =
              "function(" +
              w +
              `){
` +
              H +
              "}"),
            v
          );
        }),
        e
      );
    })();
  });
  var Ne = u((bk, Xs) => {
    var Ee = {},
      Yt = {},
      Qt = [],
      ji = window.Webflow || [],
      Tt = window.jQuery,
      Ze = Tt(window),
      tI = Tt(document),
      st = Tt.isFunction,
      $e = (Ee._ = Ns()),
      Ls = (Ee.tram = Bi() && Tt.tram),
      gn = !1,
      Ki = !1;
    Ls.config.hideBackface = !1;
    Ls.config.keepInherited = !0;
    Ee.define = function (e, t, r) {
      Yt[e] && Ds(Yt[e]);
      var n = (Yt[e] = t(Tt, $e, r) || {});
      return Ps(n), n;
    };
    Ee.require = function (e) {
      return Yt[e];
    };
    function Ps(e) {
      Ee.env() &&
        (st(e.design) && Ze.on("__wf_design", e.design),
        st(e.preview) && Ze.on("__wf_preview", e.preview)),
        st(e.destroy) && Ze.on("__wf_destroy", e.destroy),
        e.ready && st(e.ready) && rI(e);
    }
    function rI(e) {
      if (gn) {
        e.ready();
        return;
      }
      $e.contains(Qt, e.ready) || Qt.push(e.ready);
    }
    function Ds(e) {
      st(e.design) && Ze.off("__wf_design", e.design),
        st(e.preview) && Ze.off("__wf_preview", e.preview),
        st(e.destroy) && Ze.off("__wf_destroy", e.destroy),
        e.ready && st(e.ready) && nI(e);
    }
    function nI(e) {
      Qt = $e.filter(Qt, function (t) {
        return t !== e.ready;
      });
    }
    Ee.push = function (e) {
      if (gn) {
        st(e) && e();
        return;
      }
      ji.push(e);
    };
    Ee.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var hn = navigator.userAgent.toLowerCase(),
      Ms = (Ee.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      iI = (Ee.env.chrome =
        /chrome/.test(hn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(hn.match(/chrome\/(\d+)\./)[1], 10)),
      oI = (Ee.env.ios = /(ipod|iphone|ipad)/.test(hn));
    Ee.env.safari = /safari/.test(hn) && !iI && !oI;
    var Hi;
    Ms &&
      tI.on("touchstart mousedown", function (e) {
        Hi = e.target;
      });
    Ee.validClick = Ms
      ? function (e) {
          return e === Hi || Tt.contains(e, Hi);
        }
      : function () {
          return !0;
        };
    var Fs = "resize.webflow orientationchange.webflow load.webflow",
      aI = "scroll.webflow " + Fs;
    Ee.resize = zi(Ze, Fs);
    Ee.scroll = zi(Ze, aI);
    Ee.redraw = zi();
    function zi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = $e.throttle(function (o) {
          $e.each(r, function (i) {
            i(o);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (o) {
          typeof o == "function" && ($e.contains(r, o) || r.push(o));
        }),
        (n.off = function (o) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = $e.filter(r, function (i) {
            return i !== o;
          });
        }),
        n
      );
    }
    Ee.location = function (e) {
      window.location = e;
    };
    Ee.env() && (Ee.location = function () {});
    Ee.ready = function () {
      (gn = !0), Ki ? sI() : $e.each(Qt, qs), $e.each(ji, qs), Ee.resize.up();
    };
    function qs(e) {
      st(e) && e();
    }
    function sI() {
      (Ki = !1), $e.each(Yt, Ps);
    }
    var Dt;
    Ee.load = function (e) {
      Dt.then(e);
    };
    function Gs() {
      Dt && (Dt.reject(), Ze.off("load", Dt.resolve)),
        (Dt = new Tt.Deferred()),
        Ze.on("load", Dt.resolve);
    }
    Ee.destroy = function (e) {
      (e = e || {}),
        (Ki = !0),
        Ze.triggerHandler("__wf_destroy"),
        e.domready != null && (gn = e.domready),
        $e.each(Yt, Ds),
        Ee.resize.off(),
        Ee.scroll.off(),
        Ee.redraw.off(),
        (Qt = []),
        (ji = []),
        Dt.state() === "pending" && Gs();
    };
    Tt(Ee.ready);
    Gs();
    Xs.exports = window.Webflow = Ee;
  });
  var Vs = u((Ok, Ws) => {
    var Us = Ne();
    Us.define(
      "brand",
      (Ws.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          o = e("body"),
          i = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          h;
        t.ready = function () {
          var E = n.attr("data-wf-status"),
            y = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(y) && a.hostname !== y && (E = !0),
            E &&
              !s &&
              ((h = h || d()),
              T(),
              setTimeout(T, 500),
              e(r).off(c, I).on(c, I));
        };
        function I() {
          var E =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(h).attr("style", E ? "display: none !important;" : "");
        }
        function d() {
          var E = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            y = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "8px", width: "16px" }),
            O = e("<img>")
              .attr(
                "src",
                "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"
              )
              .attr("alt", "Made in Webflow");
          return E.append(y, O), E[0];
        }
        function T() {
          var E = o.children(i),
            y = E.length && E.get(0) === h,
            O = Us.env("editor");
          if (y) {
            O && E.remove();
            return;
          }
          E.length && E.remove(), O || o.append(h);
        }
        return t;
      })
    );
  });
  var Bs = u((wk, ks) => {
    var Yi = Ne();
    Yi.define(
      "edit",
      (ks.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Yi.env("test") || Yi.env("frame")) && !r.fixture && !uI())
        )
          return { exit: 1 };
        var n = {},
          o = e(window),
          i = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          c,
          h = r.load || T,
          I = !1;
        try {
          I =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        I
          ? h()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            h()
          : o.on(s, d).triggerHandler(s);
        function d() {
          c || (/\?edit/.test(a.hash) && h());
        }
        function T() {
          (c = !0),
            (window.WebflowEditor = !0),
            o.off(s, d),
            L(function (U) {
              e.ajax({
                url: x("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: i.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: E(U),
              });
            });
        }
        function E(U) {
          return function (G) {
            if (!G) {
              console.error("Could not load editor data");
              return;
            }
            (G.thirdPartyCookiesSupported = U),
              y(C(G.bugReporterScriptPath), function () {
                y(C(G.scriptPath), function () {
                  window.WebflowEditor(G);
                });
              });
          };
        }
        function y(U, G) {
          e.ajax({ type: "GET", url: U, dataType: "script", cache: !0 }).then(
            G,
            O
          );
        }
        function O(U, G, W) {
          throw (console.error("Could not load editor script: " + G), W);
        }
        function C(U) {
          return U.indexOf("//") >= 0
            ? U
            : x("https://editor-api.webflow.com" + U);
        }
        function x(U) {
          return U.replace(/([^:])\/\//g, "$1/");
        }
        function L(U) {
          var G = window.document.createElement("iframe");
          (G.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (G.style.display = "none"),
            (G.sandbox = "allow-scripts allow-same-origin");
          var W = function (K) {
            K.data === "WF_third_party_cookies_unsupported"
              ? (S(G, W), U(!1))
              : K.data === "WF_third_party_cookies_supported" &&
                (S(G, W), U(!0));
          };
          (G.onerror = function () {
            S(G, W), U(!1);
          }),
            window.addEventListener("message", W, !1),
            window.document.body.appendChild(G);
        }
        function S(U, G) {
          window.removeEventListener("message", G, !1), U.remove();
        }
        return n;
      })
    );
    function uI() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var js = u((Ak, Hs) => {
    var cI = Ne();
    cI.define(
      "focus-visible",
      (Hs.exports = function () {
        function e(r) {
          var n = !0,
            o = !1,
            i = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(S) {
            return !!(
              S &&
              S !== document &&
              S.nodeName !== "HTML" &&
              S.nodeName !== "BODY" &&
              "classList" in S &&
              "contains" in S.classList
            );
          }
          function c(S) {
            var U = S.type,
              G = S.tagName;
            return !!(
              (G === "INPUT" && a[U] && !S.readOnly) ||
              (G === "TEXTAREA" && !S.readOnly) ||
              S.isContentEditable
            );
          }
          function h(S) {
            S.getAttribute("data-wf-focus-visible") ||
              S.setAttribute("data-wf-focus-visible", "true");
          }
          function I(S) {
            S.getAttribute("data-wf-focus-visible") &&
              S.removeAttribute("data-wf-focus-visible");
          }
          function d(S) {
            S.metaKey ||
              S.altKey ||
              S.ctrlKey ||
              (s(r.activeElement) && h(r.activeElement), (n = !0));
          }
          function T() {
            n = !1;
          }
          function E(S) {
            s(S.target) && (n || c(S.target)) && h(S.target);
          }
          function y(S) {
            s(S.target) &&
              S.target.hasAttribute("data-wf-focus-visible") &&
              ((o = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                o = !1;
              }, 100)),
              I(S.target));
          }
          function O() {
            document.visibilityState === "hidden" && (o && (n = !0), C());
          }
          function C() {
            document.addEventListener("mousemove", L),
              document.addEventListener("mousedown", L),
              document.addEventListener("mouseup", L),
              document.addEventListener("pointermove", L),
              document.addEventListener("pointerdown", L),
              document.addEventListener("pointerup", L),
              document.addEventListener("touchmove", L),
              document.addEventListener("touchstart", L),
              document.addEventListener("touchend", L);
          }
          function x() {
            document.removeEventListener("mousemove", L),
              document.removeEventListener("mousedown", L),
              document.removeEventListener("mouseup", L),
              document.removeEventListener("pointermove", L),
              document.removeEventListener("pointerdown", L),
              document.removeEventListener("pointerup", L),
              document.removeEventListener("touchmove", L),
              document.removeEventListener("touchstart", L),
              document.removeEventListener("touchend", L);
          }
          function L(S) {
            (S.target.nodeName && S.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), x());
          }
          document.addEventListener("keydown", d, !0),
            document.addEventListener("mousedown", T, !0),
            document.addEventListener("pointerdown", T, !0),
            document.addEventListener("touchstart", T, !0),
            document.addEventListener("visibilitychange", O, !0),
            C(),
            r.addEventListener("focus", E, !0),
            r.addEventListener("blur", y, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var zs = u((Sk, Ks) => {
    var lI = Ne();
    lI.define(
      "focus-within",
      (Ks.exports = function () {
        function e(i) {
          for (
            var a = [i], s = null;
            (s = i.parentNode || i.host || i.defaultView);

          )
            a.push(s), (i = s);
          return a;
        }
        function t(i) {
          typeof i.getAttribute != "function" ||
            i.getAttribute("data-wf-focus-within") ||
            i.setAttribute("data-wf-focus-within", "true");
        }
        function r(i) {
          typeof i.getAttribute != "function" ||
            !i.getAttribute("data-wf-focus-within") ||
            i.removeAttribute("data-wf-focus-within");
        }
        function n() {
          var i = function (a) {
            var s;
            function c() {
              (s = !1),
                a.type === "blur" &&
                  Array.prototype.slice.call(e(a.target)).forEach(r),
                a.type === "focus" &&
                  Array.prototype.slice.call(e(a.target)).forEach(t);
            }
            s || (window.requestAnimationFrame(c), (s = !0));
          };
          return (
            document.addEventListener("focus", i, !0),
            document.addEventListener("blur", i, !0),
            t(document.body),
            !0
          );
        }
        function o() {
          if (
            typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within")
          )
            try {
              document.querySelector(":focus-within");
            } catch {
              n();
            }
        }
        return { ready: o };
      })
    );
  });
  var $s = u((Rk, Qs) => {
    var Ys = Ne();
    Ys.define(
      "focus",
      (Qs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            c = s.tagName;
          return (
            (/^a$/i.test(c) && s.href != null) ||
            (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && s.controls === !0)
          );
        }
        function o(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Ys.env.safari &&
            (document.addEventListener("mousedown", o, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: i };
      })
    );
  });
  var mn = u((xk, Js) => {
    "use strict";
    var Qi = window.jQuery,
      ut = {},
      En = [],
      Zs = ".w-ix",
      _n = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Qi(t).triggerHandler(ut.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Qi(t).triggerHandler(ut.types.OUTRO));
        },
      };
    ut.triggers = {};
    ut.types = { INTRO: "w-ix-intro" + Zs, OUTRO: "w-ix-outro" + Zs };
    ut.init = function () {
      for (var e = En.length, t = 0; t < e; t++) {
        var r = En[t];
        r[0](0, r[1]);
      }
      (En = []), Qi.extend(ut.triggers, _n);
    };
    ut.async = function () {
      for (var e in _n) {
        var t = _n[e];
        _n.hasOwnProperty(e) &&
          (ut.triggers[e] = function (r, n) {
            En.push([t, n]);
          });
      }
    };
    ut.async();
    Js.exports = ut;
  });
  var tu = u((Ck, eu) => {
    var Je = Ne(),
      yn = mn();
    Je.define(
      "ix",
      (eu.exports = function (e, t) {
        var r = {},
          n,
          o = e(window),
          i = ".w-ix",
          a = e.tram,
          s = Je.env,
          c = s(),
          h = s.chrome && s.chrome < 35,
          I = "none 0s ease 0s",
          d = e(),
          T = {},
          E = [],
          y = [],
          O = [],
          C,
          x = 1,
          L = {
            tabs: ".w-tab-link, .w-tab-pane",
            dropdown: ".w-dropdown",
            slider: ".w-slide",
            navbar: ".w-nav",
          };
        (r.init = function (P) {
          setTimeout(function () {
            S(P);
          }, 1);
        }),
          (r.preview = function () {
            (n = !1),
              (x = 100),
              setTimeout(function () {
                S(window.__wf_ix);
              }, 1);
          }),
          (r.design = function () {
            (n = !0), r.destroy();
          }),
          (r.destroy = function () {
            (C = !0),
              d.each(J),
              Je.scroll.off(ee),
              yn.async(),
              (E = []),
              (y = []),
              (O = []);
          }),
          (r.ready = function () {
            if (c) return s("design") ? r.design() : r.preview();
            T && C && ((C = !1), U());
          }),
          (r.run = q),
          (r.style = c ? M : N);
        function S(P) {
          P &&
            ((T = {}),
            t.each(P, function (H) {
              T[H.slug] = H.value;
            }),
            U());
        }
        function U() {
          G(), yn.init(), Je.redraw.up();
        }
        function G() {
          var P = e("[data-ix]");
          P.length &&
            (P.each(J),
            P.each(W),
            E.length && (Je.scroll.on(ee), setTimeout(ee, 1)),
            y.length && Je.load(oe),
            O.length && setTimeout(z, x));
        }
        function W(P, H) {
          var w = e(H),
            k = w.attr("data-ix"),
            v = T[k];
          if (v) {
            var l = v.triggers;
            l &&
              (r.style(w, v.style),
              t.each(l, function (p) {
                var g = {},
                  X = p.type,
                  j = p.stepsB && p.stepsB.length;
                function Y() {
                  q(p, w, { group: "A" });
                }
                function Z() {
                  q(p, w, { group: "B" });
                }
                if (X === "load") {
                  p.preload && !c ? y.push(Y) : O.push(Y);
                  return;
                }
                if (X === "click") {
                  w.on("click" + i, function (_) {
                    Je.validClick(_.currentTarget) &&
                      (w.attr("href") === "#" && _.preventDefault(),
                      q(p, w, { group: g.clicked ? "B" : "A" }),
                      j && (g.clicked = !g.clicked));
                  }),
                    (d = d.add(w));
                  return;
                }
                if (X === "hover") {
                  w.on("mouseenter" + i, Y),
                    w.on("mouseleave" + i, Z),
                    (d = d.add(w));
                  return;
                }
                if (X === "scroll") {
                  E.push({
                    el: w,
                    trigger: p,
                    state: { active: !1 },
                    offsetTop: K(p.offsetTop),
                    offsetBot: K(p.offsetBot),
                  });
                  return;
                }
                var ce = L[X];
                if (ce) {
                  var ne = w.closest(ce);
                  ne.on(yn.types.INTRO, Y).on(yn.types.OUTRO, Z),
                    (d = d.add(ne));
                  return;
                }
              }));
          }
        }
        function K(P) {
          if (!P) return 0;
          P = String(P);
          var H = parseInt(P, 10);
          return H !== H
            ? 0
            : (P.indexOf("%") > 0 && ((H /= 100), H >= 1 && (H = 0.999)), H);
        }
        function J(P, H) {
          e(H).off(i);
        }
        function ee() {
          for (
            var P = o.scrollTop(), H = o.height(), w = E.length, k = 0;
            k < w;
            k++
          ) {
            var v = E[k],
              l = v.el,
              p = v.trigger,
              g = p.stepsB && p.stepsB.length,
              X = v.state,
              j = l.offset().top,
              Y = l.outerHeight(),
              Z = v.offsetTop,
              ce = v.offsetBot;
            Z < 1 && Z > 0 && (Z *= H), ce < 1 && ce > 0 && (ce *= H);
            var ne = j + Y - Z >= P && j + ce <= P + H;
            ne !== X.active &&
              ((ne === !1 && !g) ||
                ((X.active = ne), q(p, l, { group: ne ? "A" : "B" })));
          }
        }
        function oe() {
          for (var P = y.length, H = 0; H < P; H++) y[H]();
        }
        function z() {
          for (var P = O.length, H = 0; H < P; H++) O[H]();
        }
        function q(P, H, w, k) {
          w = w || {};
          var v = w.done,
            l = P.preserve3d;
          if (n && !w.force) return;
          var p = w.group || "A",
            g = P["loop" + p],
            X = P["steps" + p];
          if (!X || !X.length) return;
          if ((X.length < 2 && (g = !1), !k)) {
            var j = P.selector;
            j &&
              (P.descend
                ? (H = H.find(j))
                : P.siblings
                ? (H = H.siblings(j))
                : (H = e(j)),
              c && H.attr("data-ix-affect", 1)),
              h && H.addClass("w-ix-emptyfix"),
              l && H.css("transform-style", "preserve-3d");
          }
          for (var Y = a(H), Z = { omit3d: !l }, ce = 0; ce < X.length; ce++)
            m(Y, X[ce], Z);
          function ne() {
            if (g) return q(P, H, w, !0);
            Z.width === "auto" && Y.set({ width: "auto" }),
              Z.height === "auto" && Y.set({ height: "auto" }),
              v && v();
          }
          Z.start ? Y.then(ne) : ne();
        }
        function m(P, H, w) {
          var k = "add",
            v = "start";
          w.start && (k = v = "then");
          var l = H.transition;
          if (l) {
            l = l.split(",");
            for (var p = 0; p < l.length; p++) {
              var g = l[p];
              P[k](g);
            }
          }
          var X = B(H, w) || {};
          if (
            (X.width != null && (w.width = X.width),
            X.height != null && (w.height = X.height),
            l == null)
          ) {
            w.start
              ? P.then(function () {
                  var Z = this.queue;
                  this.set(X),
                    X.display && (P.redraw(), Je.redraw.up()),
                    (this.queue = Z),
                    this.next();
                })
              : (P.set(X), X.display && (P.redraw(), Je.redraw.up()));
            var j = X.wait;
            j != null && (P.wait(j), (w.start = !0));
          } else {
            if (X.display) {
              var Y = X.display;
              delete X.display,
                w.start
                  ? P.then(function () {
                      var Z = this.queue;
                      this.set({ display: Y }).redraw(),
                        Je.redraw.up(),
                        (this.queue = Z),
                        this.next();
                    })
                  : (P.set({ display: Y }).redraw(), Je.redraw.up());
            }
            P[v](X), (w.start = !0);
          }
        }
        function M(P, H) {
          var w = a(P);
          if (!e.isEmptyObject(H)) {
            P.css("transition", "");
            var k = P.css("transition");
            k === I && (k = w.upstream = null),
              (w.upstream = I),
              w.set(B(H)),
              (w.upstream = k);
          }
        }
        function N(P, H) {
          a(P).set(B(H));
        }
        function B(P, H) {
          var w = H && H.omit3d,
            k = {},
            v = !1;
          for (var l in P)
            l !== "transition" &&
              l !== "keysort" &&
              ((w &&
                (l === "z" ||
                  l === "rotateX" ||
                  l === "rotateY" ||
                  l === "scaleZ")) ||
                ((k[l] = P[l]), (v = !0)));
          return v ? k : null;
        }
        return r;
      })
    );
  });
  var Sr = u((Nk, iu) => {
    "use strict";
    var $i = mn();
    function ru(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var fI = window.jQuery,
      In = {},
      nu = ".w-ix",
      dI = {
        reset: function (e, t) {
          $i.triggers.reset(e, t);
        },
        intro: function (e, t) {
          $i.triggers.intro(e, t), ru(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          $i.triggers.outro(e, t), ru(t, "COMPONENT_INACTIVE");
        },
      };
    In.triggers = {};
    In.types = { INTRO: "w-ix-intro" + nu, OUTRO: "w-ix-outro" + nu };
    fI.extend(In.triggers, dI);
    iu.exports = In;
  });
  var ou = u((qk, _t) => {
    function Zi(e) {
      return (
        (_t.exports = Zi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (_t.exports.__esModule = !0),
        (_t.exports.default = _t.exports),
        Zi(e)
      );
    }
    (_t.exports = Zi),
      (_t.exports.__esModule = !0),
      (_t.exports.default = _t.exports);
  });
  var $t = u((Lk, Rr) => {
    var pI = ou().default;
    function au(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (au = function (o) {
        return o ? r : t;
      })(e);
    }
    function vI(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (pI(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = au(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, i, a)
            : (n[i] = e[i]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Rr.exports = vI),
      (Rr.exports.__esModule = !0),
      (Rr.exports.default = Rr.exports);
  });
  var ct = u((Pk, xr) => {
    function hI(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (xr.exports = hI),
      (xr.exports.__esModule = !0),
      (xr.exports.default = xr.exports);
  });
  var Ie = u((Dk, su) => {
    var Tn = function (e) {
      return e && e.Math == Math && e;
    };
    su.exports =
      Tn(typeof globalThis == "object" && globalThis) ||
      Tn(typeof window == "object" && window) ||
      Tn(typeof self == "object" && self) ||
      Tn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Zt = u((Mk, uu) => {
    uu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Mt = u((Fk, cu) => {
    var gI = Zt();
    cu.exports = !gI(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var bn = u((Gk, lu) => {
    var Cr = Function.prototype.call;
    lu.exports = Cr.bind
      ? Cr.bind(Cr)
      : function () {
          return Cr.apply(Cr, arguments);
        };
  });
  var vu = u((pu) => {
    "use strict";
    var fu = {}.propertyIsEnumerable,
      du = Object.getOwnPropertyDescriptor,
      EI = du && !fu.call({ 1: 2 }, 1);
    pu.f = EI
      ? function (t) {
          var r = du(this, t);
          return !!r && r.enumerable;
        }
      : fu;
  });
  var Ji = u((Uk, hu) => {
    hu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var et = u((Wk, Eu) => {
    var gu = Function.prototype,
      eo = gu.bind,
      to = gu.call,
      _I = eo && eo.bind(to);
    Eu.exports = eo
      ? function (e) {
          return e && _I(to, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return to.apply(e, arguments);
            }
          );
        };
  });
  var yu = u((Vk, mu) => {
    var _u = et(),
      mI = _u({}.toString),
      yI = _u("".slice);
    mu.exports = function (e) {
      return yI(mI(e), 8, -1);
    };
  });
  var Tu = u((kk, Iu) => {
    var II = Ie(),
      TI = et(),
      bI = Zt(),
      OI = yu(),
      ro = II.Object,
      wI = TI("".split);
    Iu.exports = bI(function () {
      return !ro("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return OI(e) == "String" ? wI(e, "") : ro(e);
        }
      : ro;
  });
  var no = u((Bk, bu) => {
    var AI = Ie(),
      SI = AI.TypeError;
    bu.exports = function (e) {
      if (e == null) throw SI("Can't call method on " + e);
      return e;
    };
  });
  var Nr = u((Hk, Ou) => {
    var RI = Tu(),
      xI = no();
    Ou.exports = function (e) {
      return RI(xI(e));
    };
  });
  var lt = u((jk, wu) => {
    wu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Jt = u((Kk, Au) => {
    var CI = lt();
    Au.exports = function (e) {
      return typeof e == "object" ? e !== null : CI(e);
    };
  });
  var qr = u((zk, Su) => {
    var io = Ie(),
      NI = lt(),
      qI = function (e) {
        return NI(e) ? e : void 0;
      };
    Su.exports = function (e, t) {
      return arguments.length < 2 ? qI(io[e]) : io[e] && io[e][t];
    };
  });
  var xu = u((Yk, Ru) => {
    var LI = et();
    Ru.exports = LI({}.isPrototypeOf);
  });
  var Nu = u((Qk, Cu) => {
    var PI = qr();
    Cu.exports = PI("navigator", "userAgent") || "";
  });
  var Gu = u(($k, Fu) => {
    var Mu = Ie(),
      oo = Nu(),
      qu = Mu.process,
      Lu = Mu.Deno,
      Pu = (qu && qu.versions) || (Lu && Lu.version),
      Du = Pu && Pu.v8,
      tt,
      On;
    Du &&
      ((tt = Du.split(".")),
      (On = tt[0] > 0 && tt[0] < 4 ? 1 : +(tt[0] + tt[1])));
    !On &&
      oo &&
      ((tt = oo.match(/Edge\/(\d+)/)),
      (!tt || tt[1] >= 74) &&
        ((tt = oo.match(/Chrome\/(\d+)/)), tt && (On = +tt[1])));
    Fu.exports = On;
  });
  var ao = u((Zk, Uu) => {
    var Xu = Gu(),
      DI = Zt();
    Uu.exports =
      !!Object.getOwnPropertySymbols &&
      !DI(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Xu && Xu < 41)
        );
      });
  });
  var so = u((Jk, Wu) => {
    var MI = ao();
    Wu.exports = MI && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var uo = u((eB, Vu) => {
    var FI = Ie(),
      GI = qr(),
      XI = lt(),
      UI = xu(),
      WI = so(),
      VI = FI.Object;
    Vu.exports = WI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = GI("Symbol");
          return XI(t) && UI(t.prototype, VI(e));
        };
  });
  var Bu = u((tB, ku) => {
    var kI = Ie(),
      BI = kI.String;
    ku.exports = function (e) {
      try {
        return BI(e);
      } catch {
        return "Object";
      }
    };
  });
  var ju = u((rB, Hu) => {
    var HI = Ie(),
      jI = lt(),
      KI = Bu(),
      zI = HI.TypeError;
    Hu.exports = function (e) {
      if (jI(e)) return e;
      throw zI(KI(e) + " is not a function");
    };
  });
  var zu = u((nB, Ku) => {
    var YI = ju();
    Ku.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : YI(r);
    };
  });
  var Qu = u((iB, Yu) => {
    var QI = Ie(),
      co = bn(),
      lo = lt(),
      fo = Jt(),
      $I = QI.TypeError;
    Yu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && lo((r = e.toString)) && !fo((n = co(r, e)))) ||
        (lo((r = e.valueOf)) && !fo((n = co(r, e)))) ||
        (t !== "string" && lo((r = e.toString)) && !fo((n = co(r, e))))
      )
        return n;
      throw $I("Can't convert object to primitive value");
    };
  });
  var Zu = u((oB, $u) => {
    $u.exports = !1;
  });
  var wn = u((aB, ec) => {
    var Ju = Ie(),
      ZI = Object.defineProperty;
    ec.exports = function (e, t) {
      try {
        ZI(Ju, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Ju[e] = t;
      }
      return t;
    };
  });
  var An = u((sB, rc) => {
    var JI = Ie(),
      eT = wn(),
      tc = "__core-js_shared__",
      tT = JI[tc] || eT(tc, {});
    rc.exports = tT;
  });
  var po = u((uB, ic) => {
    var rT = Zu(),
      nc = An();
    (ic.exports = function (e, t) {
      return nc[e] || (nc[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: rT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var ac = u((cB, oc) => {
    var nT = Ie(),
      iT = no(),
      oT = nT.Object;
    oc.exports = function (e) {
      return oT(iT(e));
    };
  });
  var bt = u((lB, sc) => {
    var aT = et(),
      sT = ac(),
      uT = aT({}.hasOwnProperty);
    sc.exports =
      Object.hasOwn ||
      function (t, r) {
        return uT(sT(t), r);
      };
  });
  var vo = u((fB, uc) => {
    var cT = et(),
      lT = 0,
      fT = Math.random(),
      dT = cT((1).toString);
    uc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + dT(++lT + fT, 36);
    };
  });
  var ho = u((dB, pc) => {
    var pT = Ie(),
      vT = po(),
      cc = bt(),
      hT = vo(),
      lc = ao(),
      dc = so(),
      er = vT("wks"),
      Ft = pT.Symbol,
      fc = Ft && Ft.for,
      gT = dc ? Ft : (Ft && Ft.withoutSetter) || hT;
    pc.exports = function (e) {
      if (!cc(er, e) || !(lc || typeof er[e] == "string")) {
        var t = "Symbol." + e;
        lc && cc(Ft, e)
          ? (er[e] = Ft[e])
          : dc && fc
          ? (er[e] = fc(t))
          : (er[e] = gT(t));
      }
      return er[e];
    };
  });
  var Ec = u((pB, gc) => {
    var ET = Ie(),
      _T = bn(),
      vc = Jt(),
      hc = uo(),
      mT = zu(),
      yT = Qu(),
      IT = ho(),
      TT = ET.TypeError,
      bT = IT("toPrimitive");
    gc.exports = function (e, t) {
      if (!vc(e) || hc(e)) return e;
      var r = mT(e, bT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = _T(r, e, t)), !vc(n) || hc(n))
        )
          return n;
        throw TT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), yT(e, t);
    };
  });
  var go = u((vB, _c) => {
    var OT = Ec(),
      wT = uo();
    _c.exports = function (e) {
      var t = OT(e, "string");
      return wT(t) ? t : t + "";
    };
  });
  var _o = u((hB, yc) => {
    var AT = Ie(),
      mc = Jt(),
      Eo = AT.document,
      ST = mc(Eo) && mc(Eo.createElement);
    yc.exports = function (e) {
      return ST ? Eo.createElement(e) : {};
    };
  });
  var mo = u((gB, Ic) => {
    var RT = Mt(),
      xT = Zt(),
      CT = _o();
    Ic.exports =
      !RT &&
      !xT(function () {
        return (
          Object.defineProperty(CT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var yo = u((bc) => {
    var NT = Mt(),
      qT = bn(),
      LT = vu(),
      PT = Ji(),
      DT = Nr(),
      MT = go(),
      FT = bt(),
      GT = mo(),
      Tc = Object.getOwnPropertyDescriptor;
    bc.f = NT
      ? Tc
      : function (t, r) {
          if (((t = DT(t)), (r = MT(r)), GT))
            try {
              return Tc(t, r);
            } catch {}
          if (FT(t, r)) return PT(!qT(LT.f, t, r), t[r]);
        };
  });
  var Lr = u((_B, wc) => {
    var Oc = Ie(),
      XT = Jt(),
      UT = Oc.String,
      WT = Oc.TypeError;
    wc.exports = function (e) {
      if (XT(e)) return e;
      throw WT(UT(e) + " is not an object");
    };
  });
  var Pr = u((Rc) => {
    var VT = Ie(),
      kT = Mt(),
      BT = mo(),
      Ac = Lr(),
      HT = go(),
      jT = VT.TypeError,
      Sc = Object.defineProperty;
    Rc.f = kT
      ? Sc
      : function (t, r, n) {
          if ((Ac(t), (r = HT(r)), Ac(n), BT))
            try {
              return Sc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw jT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var Sn = u((yB, xc) => {
    var KT = Mt(),
      zT = Pr(),
      YT = Ji();
    xc.exports = KT
      ? function (e, t, r) {
          return zT.f(e, t, YT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var To = u((IB, Cc) => {
    var QT = et(),
      $T = lt(),
      Io = An(),
      ZT = QT(Function.toString);
    $T(Io.inspectSource) ||
      (Io.inspectSource = function (e) {
        return ZT(e);
      });
    Cc.exports = Io.inspectSource;
  });
  var Lc = u((TB, qc) => {
    var JT = Ie(),
      eb = lt(),
      tb = To(),
      Nc = JT.WeakMap;
    qc.exports = eb(Nc) && /native code/.test(tb(Nc));
  });
  var bo = u((bB, Dc) => {
    var rb = po(),
      nb = vo(),
      Pc = rb("keys");
    Dc.exports = function (e) {
      return Pc[e] || (Pc[e] = nb(e));
    };
  });
  var Rn = u((OB, Mc) => {
    Mc.exports = {};
  });
  var Vc = u((wB, Wc) => {
    var ib = Lc(),
      Uc = Ie(),
      Oo = et(),
      ob = Jt(),
      ab = Sn(),
      wo = bt(),
      Ao = An(),
      sb = bo(),
      ub = Rn(),
      Fc = "Object already initialized",
      Ro = Uc.TypeError,
      cb = Uc.WeakMap,
      xn,
      Dr,
      Cn,
      lb = function (e) {
        return Cn(e) ? Dr(e) : xn(e, {});
      },
      fb = function (e) {
        return function (t) {
          var r;
          if (!ob(t) || (r = Dr(t)).type !== e)
            throw Ro("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    ib || Ao.state
      ? ((Ot = Ao.state || (Ao.state = new cb())),
        (Gc = Oo(Ot.get)),
        (So = Oo(Ot.has)),
        (Xc = Oo(Ot.set)),
        (xn = function (e, t) {
          if (So(Ot, e)) throw new Ro(Fc);
          return (t.facade = e), Xc(Ot, e, t), t;
        }),
        (Dr = function (e) {
          return Gc(Ot, e) || {};
        }),
        (Cn = function (e) {
          return So(Ot, e);
        }))
      : ((Gt = sb("state")),
        (ub[Gt] = !0),
        (xn = function (e, t) {
          if (wo(e, Gt)) throw new Ro(Fc);
          return (t.facade = e), ab(e, Gt, t), t;
        }),
        (Dr = function (e) {
          return wo(e, Gt) ? e[Gt] : {};
        }),
        (Cn = function (e) {
          return wo(e, Gt);
        }));
    var Ot, Gc, So, Xc, Gt;
    Wc.exports = { set: xn, get: Dr, has: Cn, enforce: lb, getterFor: fb };
  });
  var Hc = u((AB, Bc) => {
    var xo = Mt(),
      db = bt(),
      kc = Function.prototype,
      pb = xo && Object.getOwnPropertyDescriptor,
      Co = db(kc, "name"),
      vb = Co && function () {}.name === "something",
      hb = Co && (!xo || (xo && pb(kc, "name").configurable));
    Bc.exports = { EXISTS: Co, PROPER: vb, CONFIGURABLE: hb };
  });
  var Qc = u((SB, Yc) => {
    var gb = Ie(),
      jc = lt(),
      Eb = bt(),
      Kc = Sn(),
      _b = wn(),
      mb = To(),
      zc = Vc(),
      yb = Hc().CONFIGURABLE,
      Ib = zc.get,
      Tb = zc.enforce,
      bb = String(String).split("String");
    (Yc.exports = function (e, t, r, n) {
      var o = n ? !!n.unsafe : !1,
        i = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (jc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!Eb(r, "name") || (yb && r.name !== s)) && Kc(r, "name", s),
          (c = Tb(r)),
          c.source || (c.source = bb.join(typeof s == "string" ? s : ""))),
        e === gb)
      ) {
        i ? (e[t] = r) : _b(t, r);
        return;
      } else o ? !a && e[t] && (i = !0) : delete e[t];
      i ? (e[t] = r) : Kc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (jc(this) && Ib(this).source) || mb(this);
    });
  });
  var No = u((RB, $c) => {
    var Ob = Math.ceil,
      wb = Math.floor;
    $c.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? wb : Ob)(t);
    };
  });
  var Jc = u((xB, Zc) => {
    var Ab = No(),
      Sb = Math.max,
      Rb = Math.min;
    Zc.exports = function (e, t) {
      var r = Ab(e);
      return r < 0 ? Sb(r + t, 0) : Rb(r, t);
    };
  });
  var tl = u((CB, el) => {
    var xb = No(),
      Cb = Math.min;
    el.exports = function (e) {
      return e > 0 ? Cb(xb(e), 9007199254740991) : 0;
    };
  });
  var nl = u((NB, rl) => {
    var Nb = tl();
    rl.exports = function (e) {
      return Nb(e.length);
    };
  });
  var qo = u((qB, ol) => {
    var qb = Nr(),
      Lb = Jc(),
      Pb = nl(),
      il = function (e) {
        return function (t, r, n) {
          var o = qb(t),
            i = Pb(o),
            a = Lb(n, i),
            s;
          if (e && r != r) {
            for (; i > a; ) if (((s = o[a++]), s != s)) return !0;
          } else
            for (; i > a; a++)
              if ((e || a in o) && o[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    ol.exports = { includes: il(!0), indexOf: il(!1) };
  });
  var Po = u((LB, sl) => {
    var Db = et(),
      Lo = bt(),
      Mb = Nr(),
      Fb = qo().indexOf,
      Gb = Rn(),
      al = Db([].push);
    sl.exports = function (e, t) {
      var r = Mb(e),
        n = 0,
        o = [],
        i;
      for (i in r) !Lo(Gb, i) && Lo(r, i) && al(o, i);
      for (; t.length > n; ) Lo(r, (i = t[n++])) && (~Fb(o, i) || al(o, i));
      return o;
    };
  });
  var Nn = u((PB, ul) => {
    ul.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var ll = u((cl) => {
    var Xb = Po(),
      Ub = Nn(),
      Wb = Ub.concat("length", "prototype");
    cl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return Xb(t, Wb);
      };
  });
  var dl = u((fl) => {
    fl.f = Object.getOwnPropertySymbols;
  });
  var vl = u((FB, pl) => {
    var Vb = qr(),
      kb = et(),
      Bb = ll(),
      Hb = dl(),
      jb = Lr(),
      Kb = kb([].concat);
    pl.exports =
      Vb("Reflect", "ownKeys") ||
      function (t) {
        var r = Bb.f(jb(t)),
          n = Hb.f;
        return n ? Kb(r, n(t)) : r;
      };
  });
  var gl = u((GB, hl) => {
    var zb = bt(),
      Yb = vl(),
      Qb = yo(),
      $b = Pr();
    hl.exports = function (e, t) {
      for (var r = Yb(t), n = $b.f, o = Qb.f, i = 0; i < r.length; i++) {
        var a = r[i];
        zb(e, a) || n(e, a, o(t, a));
      }
    };
  });
  var _l = u((XB, El) => {
    var Zb = Zt(),
      Jb = lt(),
      eO = /#|\.prototype\./,
      Mr = function (e, t) {
        var r = rO[tO(e)];
        return r == iO ? !0 : r == nO ? !1 : Jb(t) ? Zb(t) : !!t;
      },
      tO = (Mr.normalize = function (e) {
        return String(e).replace(eO, ".").toLowerCase();
      }),
      rO = (Mr.data = {}),
      nO = (Mr.NATIVE = "N"),
      iO = (Mr.POLYFILL = "P");
    El.exports = Mr;
  });
  var yl = u((UB, ml) => {
    var Do = Ie(),
      oO = yo().f,
      aO = Sn(),
      sO = Qc(),
      uO = wn(),
      cO = gl(),
      lO = _l();
    ml.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        o = e.stat,
        i,
        a,
        s,
        c,
        h,
        I;
      if (
        (n
          ? (a = Do)
          : o
          ? (a = Do[r] || uO(r, {}))
          : (a = (Do[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((h = t[s]),
            e.noTargetGet ? ((I = oO(a, s)), (c = I && I.value)) : (c = a[s]),
            (i = lO(n ? s : r + (o ? "." : "#") + s, e.forced)),
            !i && c !== void 0)
          ) {
            if (typeof h == typeof c) continue;
            cO(h, c);
          }
          (e.sham || (c && c.sham)) && aO(h, "sham", !0), sO(a, s, h, e);
        }
    };
  });
  var Tl = u((WB, Il) => {
    var fO = Po(),
      dO = Nn();
    Il.exports =
      Object.keys ||
      function (t) {
        return fO(t, dO);
      };
  });
  var Ol = u((VB, bl) => {
    var pO = Mt(),
      vO = Pr(),
      hO = Lr(),
      gO = Nr(),
      EO = Tl();
    bl.exports = pO
      ? Object.defineProperties
      : function (t, r) {
          hO(t);
          for (var n = gO(r), o = EO(r), i = o.length, a = 0, s; i > a; )
            vO.f(t, (s = o[a++]), n[s]);
          return t;
        };
  });
  var Al = u((kB, wl) => {
    var _O = qr();
    wl.exports = _O("document", "documentElement");
  });
  var Pl = u((BB, Ll) => {
    var mO = Lr(),
      yO = Ol(),
      Sl = Nn(),
      IO = Rn(),
      TO = Al(),
      bO = _o(),
      OO = bo(),
      Rl = ">",
      xl = "<",
      Fo = "prototype",
      Go = "script",
      Nl = OO("IE_PROTO"),
      Mo = function () {},
      ql = function (e) {
        return xl + Go + Rl + e + xl + "/" + Go + Rl;
      },
      Cl = function (e) {
        e.write(ql("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      wO = function () {
        var e = bO("iframe"),
          t = "java" + Go + ":",
          r;
        return (
          (e.style.display = "none"),
          TO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(ql("document.F=Object")),
          r.close(),
          r.F
        );
      },
      qn,
      Ln = function () {
        try {
          qn = new ActiveXObject("htmlfile");
        } catch {}
        Ln =
          typeof document < "u"
            ? document.domain && qn
              ? Cl(qn)
              : wO()
            : Cl(qn);
        for (var e = Sl.length; e--; ) delete Ln[Fo][Sl[e]];
        return Ln();
      };
    IO[Nl] = !0;
    Ll.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((Mo[Fo] = mO(t)), (n = new Mo()), (Mo[Fo] = null), (n[Nl] = t))
            : (n = Ln()),
          r === void 0 ? n : yO(n, r)
        );
      };
  });
  var Ml = u((HB, Dl) => {
    var AO = ho(),
      SO = Pl(),
      RO = Pr(),
      Xo = AO("unscopables"),
      Uo = Array.prototype;
    Uo[Xo] == null && RO.f(Uo, Xo, { configurable: !0, value: SO(null) });
    Dl.exports = function (e) {
      Uo[Xo][e] = !0;
    };
  });
  var Fl = u(() => {
    "use strict";
    var xO = yl(),
      CO = qo().includes,
      NO = Ml();
    xO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return CO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    NO("includes");
  });
  var Xl = u((zB, Gl) => {
    var qO = Ie(),
      LO = et();
    Gl.exports = function (e, t) {
      return LO(qO[e].prototype[t]);
    };
  });
  var Wl = u((YB, Ul) => {
    Fl();
    var PO = Xl();
    Ul.exports = PO("Array", "includes");
  });
  var kl = u((QB, Vl) => {
    var DO = Wl();
    Vl.exports = DO;
  });
  var Hl = u(($B, Bl) => {
    var MO = kl();
    Bl.exports = MO;
  });
  var Kl = u((ZB, jl) => {
    var FO =
      typeof global == "object" && global && global.Object === Object && global;
    jl.exports = FO;
  });
  var Yl = u((JB, zl) => {
    var GO = Kl(),
      XO = typeof self == "object" && self && self.Object === Object && self,
      UO = GO || XO || Function("return this")();
    zl.exports = UO;
  });
  var Wo = u((eH, Ql) => {
    var WO = Yl(),
      VO = WO.Symbol;
    Ql.exports = VO;
  });
  var ef = u((tH, Jl) => {
    var $l = Wo(),
      Zl = Object.prototype,
      kO = Zl.hasOwnProperty,
      BO = Zl.toString,
      Fr = $l ? $l.toStringTag : void 0;
    function HO(e) {
      var t = kO.call(e, Fr),
        r = e[Fr];
      try {
        e[Fr] = void 0;
        var n = !0;
      } catch {}
      var o = BO.call(e);
      return n && (t ? (e[Fr] = r) : delete e[Fr]), o;
    }
    Jl.exports = HO;
  });
  var rf = u((rH, tf) => {
    var jO = Object.prototype,
      KO = jO.toString;
    function zO(e) {
      return KO.call(e);
    }
    tf.exports = zO;
  });
  var sf = u((nH, af) => {
    var nf = Wo(),
      YO = ef(),
      QO = rf(),
      $O = "[object Null]",
      ZO = "[object Undefined]",
      of = nf ? nf.toStringTag : void 0;
    function JO(e) {
      return e == null
        ? e === void 0
          ? ZO
          : $O
        : of && of in Object(e)
        ? YO(e)
        : QO(e);
    }
    af.exports = JO;
  });
  var cf = u((iH, uf) => {
    function ew(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    uf.exports = ew;
  });
  var ff = u((oH, lf) => {
    var tw = cf(),
      rw = tw(Object.getPrototypeOf, Object);
    lf.exports = rw;
  });
  var pf = u((aH, df) => {
    function nw(e) {
      return e != null && typeof e == "object";
    }
    df.exports = nw;
  });
  var Vo = u((sH, hf) => {
    var iw = sf(),
      ow = ff(),
      aw = pf(),
      sw = "[object Object]",
      uw = Function.prototype,
      cw = Object.prototype,
      vf = uw.toString,
      lw = cw.hasOwnProperty,
      fw = vf.call(Object);
    function dw(e) {
      if (!aw(e) || iw(e) != sw) return !1;
      var t = ow(e);
      if (t === null) return !0;
      var r = lw.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && vf.call(r) == fw;
    }
    hf.exports = dw;
  });
  var gf = u((ko) => {
    "use strict";
    Object.defineProperty(ko, "__esModule", { value: !0 });
    ko.default = pw;
    function pw(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Ef = u((Ho, Bo) => {
    "use strict";
    Object.defineProperty(Ho, "__esModule", { value: !0 });
    var vw = gf(),
      hw = gw(vw);
    function gw(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var tr;
    typeof self < "u"
      ? (tr = self)
      : typeof window < "u"
      ? (tr = window)
      : typeof global < "u"
      ? (tr = global)
      : typeof Bo < "u"
      ? (tr = Bo)
      : (tr = Function("return this")());
    var Ew = (0, hw.default)(tr);
    Ho.default = Ew;
  });
  var jo = u((Gr) => {
    "use strict";
    Gr.__esModule = !0;
    Gr.ActionTypes = void 0;
    Gr.default = If;
    var _w = Vo(),
      mw = yf(_w),
      yw = Ef(),
      _f = yf(yw);
    function yf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var mf = (Gr.ActionTypes = { INIT: "@@redux/INIT" });
    function If(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(If)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var o = e,
        i = t,
        a = [],
        s = a,
        c = !1;
      function h() {
        s === a && (s = a.slice());
      }
      function I() {
        return i;
      }
      function d(O) {
        if (typeof O != "function")
          throw new Error("Expected listener to be a function.");
        var C = !0;
        return (
          h(),
          s.push(O),
          function () {
            if (C) {
              (C = !1), h();
              var L = s.indexOf(O);
              s.splice(L, 1);
            }
          }
        );
      }
      function T(O) {
        if (!(0, mw.default)(O))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof O.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (i = o(i, O));
        } finally {
          c = !1;
        }
        for (var C = (a = s), x = 0; x < C.length; x++) C[x]();
        return O;
      }
      function E(O) {
        if (typeof O != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (o = O), T({ type: mf.INIT });
      }
      function y() {
        var O,
          C = d;
        return (
          (O = {
            subscribe: function (L) {
              if (typeof L != "object")
                throw new TypeError("Expected the observer to be an object.");
              function S() {
                L.next && L.next(I());
              }
              S();
              var U = C(S);
              return { unsubscribe: U };
            },
          }),
          (O[_f.default] = function () {
            return this;
          }),
          O
        );
      }
      return (
        T({ type: mf.INIT }),
        (n = { dispatch: T, subscribe: d, getState: I, replaceReducer: E }),
        (n[_f.default] = y),
        n
      );
    }
  });
  var zo = u((Ko) => {
    "use strict";
    Ko.__esModule = !0;
    Ko.default = Iw;
    function Iw(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var Of = u((Yo) => {
    "use strict";
    Yo.__esModule = !0;
    Yo.default = Aw;
    var Tf = jo(),
      Tw = Vo(),
      fH = bf(Tw),
      bw = zo(),
      dH = bf(bw);
    function bf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Ow(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function ww(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: Tf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var o =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: o }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                Tf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function Aw(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        typeof e[o] == "function" && (r[o] = e[o]);
      }
      var i = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        ww(r);
      } catch (c) {
        s = c;
      }
      return function () {
        var h =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          I = arguments[1];
        if (s) throw s;
        if (!1) var d;
        for (var T = !1, E = {}, y = 0; y < i.length; y++) {
          var O = i[y],
            C = r[O],
            x = h[O],
            L = C(x, I);
          if (typeof L > "u") {
            var S = Ow(O, I);
            throw new Error(S);
          }
          (E[O] = L), (T = T || L !== x);
        }
        return T ? E : h;
      };
    }
  });
  var Af = u((Qo) => {
    "use strict";
    Qo.__esModule = !0;
    Qo.default = Sw;
    function wf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function Sw(e, t) {
      if (typeof e == "function") return wf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
        var i = r[o],
          a = e[i];
        typeof a == "function" && (n[i] = wf(a, t));
      }
      return n;
    }
  });
  var Zo = u(($o) => {
    "use strict";
    $o.__esModule = !0;
    $o.default = Rw;
    function Rw() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        o = t.slice(0, -1);
      return function () {
        return o.reduceRight(function (i, a) {
          return a(i);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var Sf = u((Jo) => {
    "use strict";
    Jo.__esModule = !0;
    var xw =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Jo.default = Lw;
    var Cw = Zo(),
      Nw = qw(Cw);
    function qw(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Lw() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (o, i, a) {
          var s = n(o, i, a),
            c = s.dispatch,
            h = [],
            I = {
              getState: s.getState,
              dispatch: function (T) {
                return c(T);
              },
            };
          return (
            (h = t.map(function (d) {
              return d(I);
            })),
            (c = Nw.default.apply(void 0, h)(s.dispatch)),
            xw({}, s, { dispatch: c })
          );
        };
      };
    }
  });
  var ea = u((Ke) => {
    "use strict";
    Ke.__esModule = !0;
    Ke.compose =
      Ke.applyMiddleware =
      Ke.bindActionCreators =
      Ke.combineReducers =
      Ke.createStore =
        void 0;
    var Pw = jo(),
      Dw = rr(Pw),
      Mw = Of(),
      Fw = rr(Mw),
      Gw = Af(),
      Xw = rr(Gw),
      Uw = Sf(),
      Ww = rr(Uw),
      Vw = Zo(),
      kw = rr(Vw),
      Bw = zo(),
      EH = rr(Bw);
    function rr(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Ke.createStore = Dw.default;
    Ke.combineReducers = Fw.default;
    Ke.bindActionCreators = Xw.default;
    Ke.applyMiddleware = Ww.default;
    Ke.compose = kw.default;
  });
  var Rf = u((qe) => {
    "use strict";
    Object.defineProperty(qe, "__esModule", { value: !0 });
    qe.QuickEffectIds =
      qe.QuickEffectDirectionConsts =
      qe.EventTypeConsts =
      qe.EventLimitAffectedElements =
      qe.EventContinuousMouseAxes =
      qe.EventBasedOn =
      qe.EventAppliesTo =
        void 0;
    var Hw = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    };
    qe.EventTypeConsts = Hw;
    var jw = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    qe.EventAppliesTo = jw;
    var Kw = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    qe.EventBasedOn = Kw;
    var zw = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    qe.EventContinuousMouseAxes = zw;
    var Yw = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
    };
    qe.EventLimitAffectedElements = Yw;
    var Qw = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
    };
    qe.QuickEffectIds = Qw;
    var $w = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
    };
    qe.QuickEffectDirectionConsts = $w;
  });
  var ta = u((nr) => {
    "use strict";
    Object.defineProperty(nr, "__esModule", { value: !0 });
    nr.ActionTypeConsts = nr.ActionAppliesTo = void 0;
    var Zw = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    };
    nr.ActionTypeConsts = Zw;
    var Jw = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
    };
    nr.ActionAppliesTo = Jw;
  });
  var xf = u((Pn) => {
    "use strict";
    Object.defineProperty(Pn, "__esModule", { value: !0 });
    Pn.InteractionTypeConsts = void 0;
    var eA = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
    Pn.InteractionTypeConsts = eA;
  });
  var Cf = u((Dn) => {
    "use strict";
    Object.defineProperty(Dn, "__esModule", { value: !0 });
    Dn.ReducedMotionTypes = void 0;
    var tA = ta(),
      {
        TRANSFORM_MOVE: rA,
        TRANSFORM_SCALE: nA,
        TRANSFORM_ROTATE: iA,
        TRANSFORM_SKEW: oA,
        STYLE_SIZE: aA,
        STYLE_FILTER: sA,
        STYLE_FONT_VARIATION: uA,
      } = tA.ActionTypeConsts,
      cA = {
        [rA]: !0,
        [nA]: !0,
        [iA]: !0,
        [oA]: !0,
        [aA]: !0,
        [sA]: !0,
        [uA]: !0,
      };
    Dn.ReducedMotionTypes = cA;
  });
  var Nf = u((le) => {
    "use strict";
    Object.defineProperty(le, "__esModule", { value: !0 });
    le.IX2_VIEWPORT_WIDTH_CHANGED =
      le.IX2_TEST_FRAME_RENDERED =
      le.IX2_STOP_REQUESTED =
      le.IX2_SESSION_STOPPED =
      le.IX2_SESSION_STARTED =
      le.IX2_SESSION_INITIALIZED =
      le.IX2_RAW_DATA_IMPORTED =
      le.IX2_PREVIEW_REQUESTED =
      le.IX2_PLAYBACK_REQUESTED =
      le.IX2_PARAMETER_CHANGED =
      le.IX2_MEDIA_QUERIES_DEFINED =
      le.IX2_INSTANCE_STARTED =
      le.IX2_INSTANCE_REMOVED =
      le.IX2_INSTANCE_ADDED =
      le.IX2_EVENT_STATE_CHANGED =
      le.IX2_EVENT_LISTENER_ADDED =
      le.IX2_ELEMENT_STATE_CHANGED =
      le.IX2_CLEAR_REQUESTED =
      le.IX2_ANIMATION_FRAME_CHANGED =
      le.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        void 0;
    var lA = "IX2_RAW_DATA_IMPORTED";
    le.IX2_RAW_DATA_IMPORTED = lA;
    var fA = "IX2_SESSION_INITIALIZED";
    le.IX2_SESSION_INITIALIZED = fA;
    var dA = "IX2_SESSION_STARTED";
    le.IX2_SESSION_STARTED = dA;
    var pA = "IX2_SESSION_STOPPED";
    le.IX2_SESSION_STOPPED = pA;
    var vA = "IX2_PREVIEW_REQUESTED";
    le.IX2_PREVIEW_REQUESTED = vA;
    var hA = "IX2_PLAYBACK_REQUESTED";
    le.IX2_PLAYBACK_REQUESTED = hA;
    var gA = "IX2_STOP_REQUESTED";
    le.IX2_STOP_REQUESTED = gA;
    var EA = "IX2_CLEAR_REQUESTED";
    le.IX2_CLEAR_REQUESTED = EA;
    var _A = "IX2_EVENT_LISTENER_ADDED";
    le.IX2_EVENT_LISTENER_ADDED = _A;
    var mA = "IX2_EVENT_STATE_CHANGED";
    le.IX2_EVENT_STATE_CHANGED = mA;
    var yA = "IX2_ANIMATION_FRAME_CHANGED";
    le.IX2_ANIMATION_FRAME_CHANGED = yA;
    var IA = "IX2_PARAMETER_CHANGED";
    le.IX2_PARAMETER_CHANGED = IA;
    var TA = "IX2_INSTANCE_ADDED";
    le.IX2_INSTANCE_ADDED = TA;
    var bA = "IX2_INSTANCE_STARTED";
    le.IX2_INSTANCE_STARTED = bA;
    var OA = "IX2_INSTANCE_REMOVED";
    le.IX2_INSTANCE_REMOVED = OA;
    var wA = "IX2_ELEMENT_STATE_CHANGED";
    le.IX2_ELEMENT_STATE_CHANGED = wA;
    var AA = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    le.IX2_ACTION_LIST_PLAYBACK_CHANGED = AA;
    var SA = "IX2_VIEWPORT_WIDTH_CHANGED";
    le.IX2_VIEWPORT_WIDTH_CHANGED = SA;
    var RA = "IX2_MEDIA_QUERIES_DEFINED";
    le.IX2_MEDIA_QUERIES_DEFINED = RA;
    var xA = "IX2_TEST_FRAME_RENDERED";
    le.IX2_TEST_FRAME_RENDERED = xA;
  });
  var qf = u((V) => {
    "use strict";
    Object.defineProperty(V, "__esModule", { value: !0 });
    V.W_MOD_JS =
      V.W_MOD_IX =
      V.WILL_CHANGE =
      V.WIDTH =
      V.WF_PAGE =
      V.TRANSLATE_Z =
      V.TRANSLATE_Y =
      V.TRANSLATE_X =
      V.TRANSLATE_3D =
      V.TRANSFORM =
      V.SKEW_Y =
      V.SKEW_X =
      V.SKEW =
      V.SIBLINGS =
      V.SCALE_Z =
      V.SCALE_Y =
      V.SCALE_X =
      V.SCALE_3D =
      V.ROTATE_Z =
      V.ROTATE_Y =
      V.ROTATE_X =
      V.RENDER_TRANSFORM =
      V.RENDER_STYLE =
      V.RENDER_PLUGIN =
      V.RENDER_GENERAL =
      V.PRESERVE_3D =
      V.PLAIN_OBJECT =
      V.PARENT =
      V.OPACITY =
      V.IX2_ID_DELIMITER =
      V.IMMEDIATE_CHILDREN =
      V.HTML_ELEMENT =
      V.HEIGHT =
      V.FONT_VARIATION_SETTINGS =
      V.FLEX =
      V.FILTER =
      V.DISPLAY =
      V.CONFIG_Z_VALUE =
      V.CONFIG_Z_UNIT =
      V.CONFIG_Y_VALUE =
      V.CONFIG_Y_UNIT =
      V.CONFIG_X_VALUE =
      V.CONFIG_X_UNIT =
      V.CONFIG_VALUE =
      V.CONFIG_UNIT =
      V.COMMA_DELIMITER =
      V.COLOR =
      V.COLON_DELIMITER =
      V.CHILDREN =
      V.BOUNDARY_SELECTOR =
      V.BORDER_COLOR =
      V.BAR_DELIMITER =
      V.BACKGROUND_COLOR =
      V.BACKGROUND =
      V.AUTO =
      V.ABSTRACT_NODE =
        void 0;
    var CA = "|";
    V.IX2_ID_DELIMITER = CA;
    var NA = "data-wf-page";
    V.WF_PAGE = NA;
    var qA = "w-mod-js";
    V.W_MOD_JS = qA;
    var LA = "w-mod-ix";
    V.W_MOD_IX = LA;
    var PA = ".w-dyn-item";
    V.BOUNDARY_SELECTOR = PA;
    var DA = "xValue";
    V.CONFIG_X_VALUE = DA;
    var MA = "yValue";
    V.CONFIG_Y_VALUE = MA;
    var FA = "zValue";
    V.CONFIG_Z_VALUE = FA;
    var GA = "value";
    V.CONFIG_VALUE = GA;
    var XA = "xUnit";
    V.CONFIG_X_UNIT = XA;
    var UA = "yUnit";
    V.CONFIG_Y_UNIT = UA;
    var WA = "zUnit";
    V.CONFIG_Z_UNIT = WA;
    var VA = "unit";
    V.CONFIG_UNIT = VA;
    var kA = "transform";
    V.TRANSFORM = kA;
    var BA = "translateX";
    V.TRANSLATE_X = BA;
    var HA = "translateY";
    V.TRANSLATE_Y = HA;
    var jA = "translateZ";
    V.TRANSLATE_Z = jA;
    var KA = "translate3d";
    V.TRANSLATE_3D = KA;
    var zA = "scaleX";
    V.SCALE_X = zA;
    var YA = "scaleY";
    V.SCALE_Y = YA;
    var QA = "scaleZ";
    V.SCALE_Z = QA;
    var $A = "scale3d";
    V.SCALE_3D = $A;
    var ZA = "rotateX";
    V.ROTATE_X = ZA;
    var JA = "rotateY";
    V.ROTATE_Y = JA;
    var eS = "rotateZ";
    V.ROTATE_Z = eS;
    var tS = "skew";
    V.SKEW = tS;
    var rS = "skewX";
    V.SKEW_X = rS;
    var nS = "skewY";
    V.SKEW_Y = nS;
    var iS = "opacity";
    V.OPACITY = iS;
    var oS = "filter";
    V.FILTER = oS;
    var aS = "font-variation-settings";
    V.FONT_VARIATION_SETTINGS = aS;
    var sS = "width";
    V.WIDTH = sS;
    var uS = "height";
    V.HEIGHT = uS;
    var cS = "backgroundColor";
    V.BACKGROUND_COLOR = cS;
    var lS = "background";
    V.BACKGROUND = lS;
    var fS = "borderColor";
    V.BORDER_COLOR = fS;
    var dS = "color";
    V.COLOR = dS;
    var pS = "display";
    V.DISPLAY = pS;
    var vS = "flex";
    V.FLEX = vS;
    var hS = "willChange";
    V.WILL_CHANGE = hS;
    var gS = "AUTO";
    V.AUTO = gS;
    var ES = ",";
    V.COMMA_DELIMITER = ES;
    var _S = ":";
    V.COLON_DELIMITER = _S;
    var mS = "|";
    V.BAR_DELIMITER = mS;
    var yS = "CHILDREN";
    V.CHILDREN = yS;
    var IS = "IMMEDIATE_CHILDREN";
    V.IMMEDIATE_CHILDREN = IS;
    var TS = "SIBLINGS";
    V.SIBLINGS = TS;
    var bS = "PARENT";
    V.PARENT = bS;
    var OS = "preserve-3d";
    V.PRESERVE_3D = OS;
    var wS = "HTML_ELEMENT";
    V.HTML_ELEMENT = wS;
    var AS = "PLAIN_OBJECT";
    V.PLAIN_OBJECT = AS;
    var SS = "ABSTRACT_NODE";
    V.ABSTRACT_NODE = SS;
    var RS = "RENDER_TRANSFORM";
    V.RENDER_TRANSFORM = RS;
    var xS = "RENDER_GENERAL";
    V.RENDER_GENERAL = xS;
    var CS = "RENDER_STYLE";
    V.RENDER_STYLE = CS;
    var NS = "RENDER_PLUGIN";
    V.RENDER_PLUGIN = NS;
  });
  var Be = u((Se) => {
    "use strict";
    var Lf = $t().default;
    Object.defineProperty(Se, "__esModule", { value: !0 });
    var Mn = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    Se.IX2EngineConstants = Se.IX2EngineActionTypes = void 0;
    var ra = Rf();
    Object.keys(ra).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Mn, e) ||
        (e in Se && Se[e] === ra[e]) ||
        Object.defineProperty(Se, e, {
          enumerable: !0,
          get: function () {
            return ra[e];
          },
        });
    });
    var na = ta();
    Object.keys(na).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Mn, e) ||
        (e in Se && Se[e] === na[e]) ||
        Object.defineProperty(Se, e, {
          enumerable: !0,
          get: function () {
            return na[e];
          },
        });
    });
    var ia = xf();
    Object.keys(ia).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Mn, e) ||
        (e in Se && Se[e] === ia[e]) ||
        Object.defineProperty(Se, e, {
          enumerable: !0,
          get: function () {
            return ia[e];
          },
        });
    });
    var oa = Cf();
    Object.keys(oa).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Mn, e) ||
        (e in Se && Se[e] === oa[e]) ||
        Object.defineProperty(Se, e, {
          enumerable: !0,
          get: function () {
            return oa[e];
          },
        });
    });
    var qS = Lf(Nf());
    Se.IX2EngineActionTypes = qS;
    var LS = Lf(qf());
    Se.IX2EngineConstants = LS;
  });
  var Pf = u((Fn) => {
    "use strict";
    Object.defineProperty(Fn, "__esModule", { value: !0 });
    Fn.ixData = void 0;
    var PS = Be(),
      { IX2_RAW_DATA_IMPORTED: DS } = PS.IX2EngineActionTypes,
      MS = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case DS:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
    Fn.ixData = MS;
  });
  var Xr = u((SH, mt) => {
    function aa() {
      return (
        (mt.exports = aa =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
        (mt.exports.__esModule = !0),
        (mt.exports.default = mt.exports),
        aa.apply(this, arguments)
      );
    }
    (mt.exports = aa),
      (mt.exports.__esModule = !0),
      (mt.exports.default = mt.exports);
  });
  var ir = u((be) => {
    "use strict";
    Object.defineProperty(be, "__esModule", { value: !0 });
    var FS =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    be.clone = Xn;
    be.addLast = Ff;
    be.addFirst = Gf;
    be.removeLast = Xf;
    be.removeFirst = Uf;
    be.insert = Wf;
    be.removeAt = Vf;
    be.replaceAt = kf;
    be.getIn = Un;
    be.set = Wn;
    be.setIn = Vn;
    be.update = Hf;
    be.updateIn = jf;
    be.merge = Kf;
    be.mergeDeep = zf;
    be.mergeIn = Yf;
    be.omit = Qf;
    be.addDefaults = $f;
    var Df = "INVALID_ARGS";
    function Mf(e) {
      throw new Error(e);
    }
    function sa(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var GS = {}.hasOwnProperty;
    function Xn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = sa(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        r[o] = e[o];
      }
      return r;
    }
    function He(e, t, r) {
      var n = r;
      n == null && Mf(Df);
      for (
        var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3;
        s < i;
        s++
      )
        a[s - 3] = arguments[s];
      for (var c = 0; c < a.length; c++) {
        var h = a[c];
        if (h != null) {
          var I = sa(h);
          if (I.length)
            for (var d = 0; d <= I.length; d++) {
              var T = I[d];
              if (!(e && n[T] !== void 0)) {
                var E = h[T];
                t && Gn(n[T]) && Gn(E) && (E = He(e, t, n[T], E)),
                  !(E === void 0 || E === n[T]) &&
                    (o || ((o = !0), (n = Xn(n))), (n[T] = E));
              }
            }
        }
      }
      return n;
    }
    function Gn(e) {
      var t = typeof e > "u" ? "undefined" : FS(e);
      return e != null && (t === "object" || t === "function");
    }
    function Ff(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Gf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Xf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Uf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Wf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Vf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function kf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
      return (o[t] = r), o;
    }
    function Un(e, t) {
      if ((!Array.isArray(t) && Mf(Df), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var o = t[n];
          if (((r = r?.[o]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Wn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        o = e ?? n;
      if (o[t] === r) return o;
      var i = Xn(o);
      return (i[t] = r), i;
    }
    function Bf(e, t, r, n) {
      var o = void 0,
        i = t[n];
      if (n === t.length - 1) o = r;
      else {
        var a =
          Gn(e) && Gn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
        o = Bf(a, t, r, n + 1);
      }
      return Wn(e, i, o);
    }
    function Vn(e, t, r) {
      return t.length ? Bf(e, t, r, 0) : r;
    }
    function Hf(e, t, r) {
      var n = e?.[t],
        o = r(n);
      return Wn(e, t, o);
    }
    function jf(e, t, r) {
      var n = Un(e, t),
        o = r(n);
      return Vn(e, t, o);
    }
    function Kf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? He.call.apply(He, [null, !1, !1, e, t, r, n, o, i].concat(s))
        : He(!1, !1, e, t, r, n, o, i);
    }
    function zf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? He.call.apply(He, [null, !1, !0, e, t, r, n, o, i].concat(s))
        : He(!1, !0, e, t, r, n, o, i);
    }
    function Yf(e, t, r, n, o, i, a) {
      var s = Un(e, t);
      s == null && (s = {});
      for (
        var c = void 0,
          h = arguments.length,
          I = Array(h > 7 ? h - 7 : 0),
          d = 7;
        d < h;
        d++
      )
        I[d - 7] = arguments[d];
      return (
        I.length
          ? (c = He.call.apply(He, [null, !1, !1, s, r, n, o, i, a].concat(I)))
          : (c = He(!1, !1, s, r, n, o, i, a)),
        Vn(e, t, c)
      );
    }
    function Qf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
        if (GS.call(e, r[o])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var i = {}, a = sa(e), s = 0; s < a.length; s++) {
        var c = a[s];
        r.indexOf(c) >= 0 || (i[c] = e[c]);
      }
      return i;
    }
    function $f(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? He.call.apply(He, [null, !0, !1, e, t, r, n, o, i].concat(s))
        : He(!0, !1, e, t, r, n, o, i);
    }
    var XS = {
      clone: Xn,
      addLast: Ff,
      addFirst: Gf,
      removeLast: Xf,
      removeFirst: Uf,
      insert: Wf,
      removeAt: Vf,
      replaceAt: kf,
      getIn: Un,
      set: Wn,
      setIn: Vn,
      update: Hf,
      updateIn: jf,
      merge: Kf,
      mergeDeep: zf,
      mergeIn: Yf,
      omit: Qf,
      addDefaults: $f,
    };
    be.default = XS;
  });
  var Jf = u((kn) => {
    "use strict";
    var US = ct().default;
    Object.defineProperty(kn, "__esModule", { value: !0 });
    kn.ixRequest = void 0;
    var WS = US(Xr()),
      VS = Be(),
      kS = ir(),
      {
        IX2_PREVIEW_REQUESTED: BS,
        IX2_PLAYBACK_REQUESTED: HS,
        IX2_STOP_REQUESTED: jS,
        IX2_CLEAR_REQUESTED: KS,
      } = VS.IX2EngineActionTypes,
      zS = { preview: {}, playback: {}, stop: {}, clear: {} },
      Zf = Object.create(null, {
        [BS]: { value: "preview" },
        [HS]: { value: "playback" },
        [jS]: { value: "stop" },
        [KS]: { value: "clear" },
      }),
      YS = (e = zS, t) => {
        if (t.type in Zf) {
          let r = [Zf[t.type]];
          return (0, kS.setIn)(e, [r], (0, WS.default)({}, t.payload));
        }
        return e;
      };
    kn.ixRequest = YS;
  });
  var td = u((Bn) => {
    "use strict";
    Object.defineProperty(Bn, "__esModule", { value: !0 });
    Bn.ixSession = void 0;
    var QS = Be(),
      ft = ir(),
      {
        IX2_SESSION_INITIALIZED: $S,
        IX2_SESSION_STARTED: ZS,
        IX2_TEST_FRAME_RENDERED: JS,
        IX2_SESSION_STOPPED: e0,
        IX2_EVENT_LISTENER_ADDED: t0,
        IX2_EVENT_STATE_CHANGED: r0,
        IX2_ANIMATION_FRAME_CHANGED: n0,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: i0,
        IX2_VIEWPORT_WIDTH_CHANGED: o0,
        IX2_MEDIA_QUERIES_DEFINED: a0,
      } = QS.IX2EngineActionTypes,
      ed = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      s0 = 20,
      u0 = (e = ed, t) => {
        switch (t.type) {
          case $S: {
            let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
            return (0, ft.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
          }
          case ZS:
            return (0, ft.set)(e, "active", !0);
          case JS: {
            let {
              payload: { step: r = s0 },
            } = t;
            return (0, ft.set)(e, "tick", e.tick + r);
          }
          case e0:
            return ed;
          case n0: {
            let {
              payload: { now: r },
            } = t;
            return (0, ft.set)(e, "tick", r);
          }
          case t0: {
            let r = (0, ft.addLast)(e.eventListeners, t.payload);
            return (0, ft.set)(e, "eventListeners", r);
          }
          case r0: {
            let { stateKey: r, newState: n } = t.payload;
            return (0, ft.setIn)(e, ["eventState", r], n);
          }
          case i0: {
            let { actionListId: r, isPlaying: n } = t.payload;
            return (0, ft.setIn)(e, ["playbackState", r], n);
          }
          case o0: {
            let { width: r, mediaQueries: n } = t.payload,
              o = n.length,
              i = null;
            for (let a = 0; a < o; a++) {
              let { key: s, min: c, max: h } = n[a];
              if (r >= c && r <= h) {
                i = s;
                break;
              }
            }
            return (0, ft.merge)(e, { viewportWidth: r, mediaQueryKey: i });
          }
          case a0:
            return (0, ft.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
    Bn.ixSession = u0;
  });
  var nd = u((NH, rd) => {
    function c0() {
      (this.__data__ = []), (this.size = 0);
    }
    rd.exports = c0;
  });
  var Hn = u((qH, id) => {
    function l0(e, t) {
      return e === t || (e !== e && t !== t);
    }
    id.exports = l0;
  });
  var Ur = u((LH, od) => {
    var f0 = Hn();
    function d0(e, t) {
      for (var r = e.length; r--; ) if (f0(e[r][0], t)) return r;
      return -1;
    }
    od.exports = d0;
  });
  var sd = u((PH, ad) => {
    var p0 = Ur(),
      v0 = Array.prototype,
      h0 = v0.splice;
    function g0(e) {
      var t = this.__data__,
        r = p0(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : h0.call(t, r, 1), --this.size, !0;
    }
    ad.exports = g0;
  });
  var cd = u((DH, ud) => {
    var E0 = Ur();
    function _0(e) {
      var t = this.__data__,
        r = E0(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    ud.exports = _0;
  });
  var fd = u((MH, ld) => {
    var m0 = Ur();
    function y0(e) {
      return m0(this.__data__, e) > -1;
    }
    ld.exports = y0;
  });
  var pd = u((FH, dd) => {
    var I0 = Ur();
    function T0(e, t) {
      var r = this.__data__,
        n = I0(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    dd.exports = T0;
  });
  var Wr = u((GH, vd) => {
    var b0 = nd(),
      O0 = sd(),
      w0 = cd(),
      A0 = fd(),
      S0 = pd();
    function or(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    or.prototype.clear = b0;
    or.prototype.delete = O0;
    or.prototype.get = w0;
    or.prototype.has = A0;
    or.prototype.set = S0;
    vd.exports = or;
  });
  var gd = u((XH, hd) => {
    var R0 = Wr();
    function x0() {
      (this.__data__ = new R0()), (this.size = 0);
    }
    hd.exports = x0;
  });
  var _d = u((UH, Ed) => {
    function C0(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    Ed.exports = C0;
  });
  var yd = u((WH, md) => {
    function N0(e) {
      return this.__data__.get(e);
    }
    md.exports = N0;
  });
  var Td = u((VH, Id) => {
    function q0(e) {
      return this.__data__.has(e);
    }
    Id.exports = q0;
  });
  var ua = u((kH, bd) => {
    var L0 =
      typeof global == "object" && global && global.Object === Object && global;
    bd.exports = L0;
  });
  var rt = u((BH, Od) => {
    var P0 = ua(),
      D0 = typeof self == "object" && self && self.Object === Object && self,
      M0 = P0 || D0 || Function("return this")();
    Od.exports = M0;
  });
  var ar = u((HH, wd) => {
    var F0 = rt(),
      G0 = F0.Symbol;
    wd.exports = G0;
  });
  var xd = u((jH, Rd) => {
    var Ad = ar(),
      Sd = Object.prototype,
      X0 = Sd.hasOwnProperty,
      U0 = Sd.toString,
      Vr = Ad ? Ad.toStringTag : void 0;
    function W0(e) {
      var t = X0.call(e, Vr),
        r = e[Vr];
      try {
        e[Vr] = void 0;
        var n = !0;
      } catch {}
      var o = U0.call(e);
      return n && (t ? (e[Vr] = r) : delete e[Vr]), o;
    }
    Rd.exports = W0;
  });
  var Nd = u((KH, Cd) => {
    var V0 = Object.prototype,
      k0 = V0.toString;
    function B0(e) {
      return k0.call(e);
    }
    Cd.exports = B0;
  });
  var Xt = u((zH, Pd) => {
    var qd = ar(),
      H0 = xd(),
      j0 = Nd(),
      K0 = "[object Null]",
      z0 = "[object Undefined]",
      Ld = qd ? qd.toStringTag : void 0;
    function Y0(e) {
      return e == null
        ? e === void 0
          ? z0
          : K0
        : Ld && Ld in Object(e)
        ? H0(e)
        : j0(e);
    }
    Pd.exports = Y0;
  });
  var dt = u((YH, Dd) => {
    function Q0(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Dd.exports = Q0;
  });
  var ca = u((QH, Md) => {
    var $0 = Xt(),
      Z0 = dt(),
      J0 = "[object AsyncFunction]",
      eR = "[object Function]",
      tR = "[object GeneratorFunction]",
      rR = "[object Proxy]";
    function nR(e) {
      if (!Z0(e)) return !1;
      var t = $0(e);
      return t == eR || t == tR || t == J0 || t == rR;
    }
    Md.exports = nR;
  });
  var Gd = u(($H, Fd) => {
    var iR = rt(),
      oR = iR["__core-js_shared__"];
    Fd.exports = oR;
  });
  var Wd = u((ZH, Ud) => {
    var la = Gd(),
      Xd = (function () {
        var e = /[^.]+$/.exec((la && la.keys && la.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function aR(e) {
      return !!Xd && Xd in e;
    }
    Ud.exports = aR;
  });
  var fa = u((JH, Vd) => {
    var sR = Function.prototype,
      uR = sR.toString;
    function cR(e) {
      if (e != null) {
        try {
          return uR.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Vd.exports = cR;
  });
  var Bd = u((ej, kd) => {
    var lR = ca(),
      fR = Wd(),
      dR = dt(),
      pR = fa(),
      vR = /[\\^$.*+?()[\]{}|]/g,
      hR = /^\[object .+?Constructor\]$/,
      gR = Function.prototype,
      ER = Object.prototype,
      _R = gR.toString,
      mR = ER.hasOwnProperty,
      yR = RegExp(
        "^" +
          _R
            .call(mR)
            .replace(vR, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function IR(e) {
      if (!dR(e) || fR(e)) return !1;
      var t = lR(e) ? yR : hR;
      return t.test(pR(e));
    }
    kd.exports = IR;
  });
  var jd = u((tj, Hd) => {
    function TR(e, t) {
      return e?.[t];
    }
    Hd.exports = TR;
  });
  var wt = u((rj, Kd) => {
    var bR = Bd(),
      OR = jd();
    function wR(e, t) {
      var r = OR(e, t);
      return bR(r) ? r : void 0;
    }
    Kd.exports = wR;
  });
  var jn = u((nj, zd) => {
    var AR = wt(),
      SR = rt(),
      RR = AR(SR, "Map");
    zd.exports = RR;
  });
  var kr = u((ij, Yd) => {
    var xR = wt(),
      CR = xR(Object, "create");
    Yd.exports = CR;
  });
  var Zd = u((oj, $d) => {
    var Qd = kr();
    function NR() {
      (this.__data__ = Qd ? Qd(null) : {}), (this.size = 0);
    }
    $d.exports = NR;
  });
  var ep = u((aj, Jd) => {
    function qR(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Jd.exports = qR;
  });
  var rp = u((sj, tp) => {
    var LR = kr(),
      PR = "__lodash_hash_undefined__",
      DR = Object.prototype,
      MR = DR.hasOwnProperty;
    function FR(e) {
      var t = this.__data__;
      if (LR) {
        var r = t[e];
        return r === PR ? void 0 : r;
      }
      return MR.call(t, e) ? t[e] : void 0;
    }
    tp.exports = FR;
  });
  var ip = u((uj, np) => {
    var GR = kr(),
      XR = Object.prototype,
      UR = XR.hasOwnProperty;
    function WR(e) {
      var t = this.__data__;
      return GR ? t[e] !== void 0 : UR.call(t, e);
    }
    np.exports = WR;
  });
  var ap = u((cj, op) => {
    var VR = kr(),
      kR = "__lodash_hash_undefined__";
    function BR(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = VR && t === void 0 ? kR : t),
        this
      );
    }
    op.exports = BR;
  });
  var up = u((lj, sp) => {
    var HR = Zd(),
      jR = ep(),
      KR = rp(),
      zR = ip(),
      YR = ap();
    function sr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    sr.prototype.clear = HR;
    sr.prototype.delete = jR;
    sr.prototype.get = KR;
    sr.prototype.has = zR;
    sr.prototype.set = YR;
    sp.exports = sr;
  });
  var fp = u((fj, lp) => {
    var cp = up(),
      QR = Wr(),
      $R = jn();
    function ZR() {
      (this.size = 0),
        (this.__data__ = {
          hash: new cp(),
          map: new ($R || QR)(),
          string: new cp(),
        });
    }
    lp.exports = ZR;
  });
  var pp = u((dj, dp) => {
    function JR(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    dp.exports = JR;
  });
  var Br = u((pj, vp) => {
    var ex = pp();
    function tx(e, t) {
      var r = e.__data__;
      return ex(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    vp.exports = tx;
  });
  var gp = u((vj, hp) => {
    var rx = Br();
    function nx(e) {
      var t = rx(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    hp.exports = nx;
  });
  var _p = u((hj, Ep) => {
    var ix = Br();
    function ox(e) {
      return ix(this, e).get(e);
    }
    Ep.exports = ox;
  });
  var yp = u((gj, mp) => {
    var ax = Br();
    function sx(e) {
      return ax(this, e).has(e);
    }
    mp.exports = sx;
  });
  var Tp = u((Ej, Ip) => {
    var ux = Br();
    function cx(e, t) {
      var r = ux(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    Ip.exports = cx;
  });
  var Kn = u((_j, bp) => {
    var lx = fp(),
      fx = gp(),
      dx = _p(),
      px = yp(),
      vx = Tp();
    function ur(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    ur.prototype.clear = lx;
    ur.prototype.delete = fx;
    ur.prototype.get = dx;
    ur.prototype.has = px;
    ur.prototype.set = vx;
    bp.exports = ur;
  });
  var wp = u((mj, Op) => {
    var hx = Wr(),
      gx = jn(),
      Ex = Kn(),
      _x = 200;
    function mx(e, t) {
      var r = this.__data__;
      if (r instanceof hx) {
        var n = r.__data__;
        if (!gx || n.length < _x - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new Ex(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    Op.exports = mx;
  });
  var da = u((yj, Ap) => {
    var yx = Wr(),
      Ix = gd(),
      Tx = _d(),
      bx = yd(),
      Ox = Td(),
      wx = wp();
    function cr(e) {
      var t = (this.__data__ = new yx(e));
      this.size = t.size;
    }
    cr.prototype.clear = Ix;
    cr.prototype.delete = Tx;
    cr.prototype.get = bx;
    cr.prototype.has = Ox;
    cr.prototype.set = wx;
    Ap.exports = cr;
  });
  var Rp = u((Ij, Sp) => {
    var Ax = "__lodash_hash_undefined__";
    function Sx(e) {
      return this.__data__.set(e, Ax), this;
    }
    Sp.exports = Sx;
  });
  var Cp = u((Tj, xp) => {
    function Rx(e) {
      return this.__data__.has(e);
    }
    xp.exports = Rx;
  });
  var qp = u((bj, Np) => {
    var xx = Kn(),
      Cx = Rp(),
      Nx = Cp();
    function zn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new xx(); ++t < r; ) this.add(e[t]);
    }
    zn.prototype.add = zn.prototype.push = Cx;
    zn.prototype.has = Nx;
    Np.exports = zn;
  });
  var Pp = u((Oj, Lp) => {
    function qx(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    Lp.exports = qx;
  });
  var Mp = u((wj, Dp) => {
    function Lx(e, t) {
      return e.has(t);
    }
    Dp.exports = Lx;
  });
  var pa = u((Aj, Fp) => {
    var Px = qp(),
      Dx = Pp(),
      Mx = Mp(),
      Fx = 1,
      Gx = 2;
    function Xx(e, t, r, n, o, i) {
      var a = r & Fx,
        s = e.length,
        c = t.length;
      if (s != c && !(a && c > s)) return !1;
      var h = i.get(e),
        I = i.get(t);
      if (h && I) return h == t && I == e;
      var d = -1,
        T = !0,
        E = r & Gx ? new Px() : void 0;
      for (i.set(e, t), i.set(t, e); ++d < s; ) {
        var y = e[d],
          O = t[d];
        if (n) var C = a ? n(O, y, d, t, e, i) : n(y, O, d, e, t, i);
        if (C !== void 0) {
          if (C) continue;
          T = !1;
          break;
        }
        if (E) {
          if (
            !Dx(t, function (x, L) {
              if (!Mx(E, L) && (y === x || o(y, x, r, n, i))) return E.push(L);
            })
          ) {
            T = !1;
            break;
          }
        } else if (!(y === O || o(y, O, r, n, i))) {
          T = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), T;
    }
    Fp.exports = Xx;
  });
  var Xp = u((Sj, Gp) => {
    var Ux = rt(),
      Wx = Ux.Uint8Array;
    Gp.exports = Wx;
  });
  var Wp = u((Rj, Up) => {
    function Vx(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, o) {
          r[++t] = [o, n];
        }),
        r
      );
    }
    Up.exports = Vx;
  });
  var kp = u((xj, Vp) => {
    function kx(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Vp.exports = kx;
  });
  var zp = u((Cj, Kp) => {
    var Bp = ar(),
      Hp = Xp(),
      Bx = Hn(),
      Hx = pa(),
      jx = Wp(),
      Kx = kp(),
      zx = 1,
      Yx = 2,
      Qx = "[object Boolean]",
      $x = "[object Date]",
      Zx = "[object Error]",
      Jx = "[object Map]",
      eC = "[object Number]",
      tC = "[object RegExp]",
      rC = "[object Set]",
      nC = "[object String]",
      iC = "[object Symbol]",
      oC = "[object ArrayBuffer]",
      aC = "[object DataView]",
      jp = Bp ? Bp.prototype : void 0,
      va = jp ? jp.valueOf : void 0;
    function sC(e, t, r, n, o, i, a) {
      switch (r) {
        case aC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case oC:
          return !(e.byteLength != t.byteLength || !i(new Hp(e), new Hp(t)));
        case Qx:
        case $x:
        case eC:
          return Bx(+e, +t);
        case Zx:
          return e.name == t.name && e.message == t.message;
        case tC:
        case nC:
          return e == t + "";
        case Jx:
          var s = jx;
        case rC:
          var c = n & zx;
          if ((s || (s = Kx), e.size != t.size && !c)) return !1;
          var h = a.get(e);
          if (h) return h == t;
          (n |= Yx), a.set(e, t);
          var I = Hx(s(e), s(t), n, o, i, a);
          return a.delete(e), I;
        case iC:
          if (va) return va.call(e) == va.call(t);
      }
      return !1;
    }
    Kp.exports = sC;
  });
  var Yn = u((Nj, Yp) => {
    function uC(e, t) {
      for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
      return e;
    }
    Yp.exports = uC;
  });
  var Le = u((qj, Qp) => {
    var cC = Array.isArray;
    Qp.exports = cC;
  });
  var ha = u((Lj, $p) => {
    var lC = Yn(),
      fC = Le();
    function dC(e, t, r) {
      var n = t(e);
      return fC(e) ? n : lC(n, r(e));
    }
    $p.exports = dC;
  });
  var Jp = u((Pj, Zp) => {
    function pC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (i[o++] = a);
      }
      return i;
    }
    Zp.exports = pC;
  });
  var ga = u((Dj, ev) => {
    function vC() {
      return [];
    }
    ev.exports = vC;
  });
  var Ea = u((Mj, rv) => {
    var hC = Jp(),
      gC = ga(),
      EC = Object.prototype,
      _C = EC.propertyIsEnumerable,
      tv = Object.getOwnPropertySymbols,
      mC = tv
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                hC(tv(e), function (t) {
                  return _C.call(e, t);
                }));
          }
        : gC;
    rv.exports = mC;
  });
  var iv = u((Fj, nv) => {
    function yC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    nv.exports = yC;
  });
  var At = u((Gj, ov) => {
    function IC(e) {
      return e != null && typeof e == "object";
    }
    ov.exports = IC;
  });
  var sv = u((Xj, av) => {
    var TC = Xt(),
      bC = At(),
      OC = "[object Arguments]";
    function wC(e) {
      return bC(e) && TC(e) == OC;
    }
    av.exports = wC;
  });
  var Hr = u((Uj, lv) => {
    var uv = sv(),
      AC = At(),
      cv = Object.prototype,
      SC = cv.hasOwnProperty,
      RC = cv.propertyIsEnumerable,
      xC = uv(
        (function () {
          return arguments;
        })()
      )
        ? uv
        : function (e) {
            return AC(e) && SC.call(e, "callee") && !RC.call(e, "callee");
          };
    lv.exports = xC;
  });
  var dv = u((Wj, fv) => {
    function CC() {
      return !1;
    }
    fv.exports = CC;
  });
  var Qn = u((jr, lr) => {
    var NC = rt(),
      qC = dv(),
      hv = typeof jr == "object" && jr && !jr.nodeType && jr,
      pv = hv && typeof lr == "object" && lr && !lr.nodeType && lr,
      LC = pv && pv.exports === hv,
      vv = LC ? NC.Buffer : void 0,
      PC = vv ? vv.isBuffer : void 0,
      DC = PC || qC;
    lr.exports = DC;
  });
  var $n = u((Vj, gv) => {
    var MC = 9007199254740991,
      FC = /^(?:0|[1-9]\d*)$/;
    function GC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? MC),
        !!t &&
          (r == "number" || (r != "symbol" && FC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    gv.exports = GC;
  });
  var Zn = u((kj, Ev) => {
    var XC = 9007199254740991;
    function UC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= XC;
    }
    Ev.exports = UC;
  });
  var mv = u((Bj, _v) => {
    var WC = Xt(),
      VC = Zn(),
      kC = At(),
      BC = "[object Arguments]",
      HC = "[object Array]",
      jC = "[object Boolean]",
      KC = "[object Date]",
      zC = "[object Error]",
      YC = "[object Function]",
      QC = "[object Map]",
      $C = "[object Number]",
      ZC = "[object Object]",
      JC = "[object RegExp]",
      eN = "[object Set]",
      tN = "[object String]",
      rN = "[object WeakMap]",
      nN = "[object ArrayBuffer]",
      iN = "[object DataView]",
      oN = "[object Float32Array]",
      aN = "[object Float64Array]",
      sN = "[object Int8Array]",
      uN = "[object Int16Array]",
      cN = "[object Int32Array]",
      lN = "[object Uint8Array]",
      fN = "[object Uint8ClampedArray]",
      dN = "[object Uint16Array]",
      pN = "[object Uint32Array]",
      ye = {};
    ye[oN] =
      ye[aN] =
      ye[sN] =
      ye[uN] =
      ye[cN] =
      ye[lN] =
      ye[fN] =
      ye[dN] =
      ye[pN] =
        !0;
    ye[BC] =
      ye[HC] =
      ye[nN] =
      ye[jC] =
      ye[iN] =
      ye[KC] =
      ye[zC] =
      ye[YC] =
      ye[QC] =
      ye[$C] =
      ye[ZC] =
      ye[JC] =
      ye[eN] =
      ye[tN] =
      ye[rN] =
        !1;
    function vN(e) {
      return kC(e) && VC(e.length) && !!ye[WC(e)];
    }
    _v.exports = vN;
  });
  var Iv = u((Hj, yv) => {
    function hN(e) {
      return function (t) {
        return e(t);
      };
    }
    yv.exports = hN;
  });
  var bv = u((Kr, fr) => {
    var gN = ua(),
      Tv = typeof Kr == "object" && Kr && !Kr.nodeType && Kr,
      zr = Tv && typeof fr == "object" && fr && !fr.nodeType && fr,
      EN = zr && zr.exports === Tv,
      _a = EN && gN.process,
      _N = (function () {
        try {
          var e = zr && zr.require && zr.require("util").types;
          return e || (_a && _a.binding && _a.binding("util"));
        } catch {}
      })();
    fr.exports = _N;
  });
  var Jn = u((jj, Av) => {
    var mN = mv(),
      yN = Iv(),
      Ov = bv(),
      wv = Ov && Ov.isTypedArray,
      IN = wv ? yN(wv) : mN;
    Av.exports = IN;
  });
  var ma = u((Kj, Sv) => {
    var TN = iv(),
      bN = Hr(),
      ON = Le(),
      wN = Qn(),
      AN = $n(),
      SN = Jn(),
      RN = Object.prototype,
      xN = RN.hasOwnProperty;
    function CN(e, t) {
      var r = ON(e),
        n = !r && bN(e),
        o = !r && !n && wN(e),
        i = !r && !n && !o && SN(e),
        a = r || n || o || i,
        s = a ? TN(e.length, String) : [],
        c = s.length;
      for (var h in e)
        (t || xN.call(e, h)) &&
          !(
            a &&
            (h == "length" ||
              (o && (h == "offset" || h == "parent")) ||
              (i &&
                (h == "buffer" || h == "byteLength" || h == "byteOffset")) ||
              AN(h, c))
          ) &&
          s.push(h);
      return s;
    }
    Sv.exports = CN;
  });
  var ei = u((zj, Rv) => {
    var NN = Object.prototype;
    function qN(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || NN;
      return e === r;
    }
    Rv.exports = qN;
  });
  var ya = u((Yj, xv) => {
    function LN(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    xv.exports = LN;
  });
  var Nv = u((Qj, Cv) => {
    var PN = ya(),
      DN = PN(Object.keys, Object);
    Cv.exports = DN;
  });
  var ti = u(($j, qv) => {
    var MN = ei(),
      FN = Nv(),
      GN = Object.prototype,
      XN = GN.hasOwnProperty;
    function UN(e) {
      if (!MN(e)) return FN(e);
      var t = [];
      for (var r in Object(e)) XN.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    qv.exports = UN;
  });
  var Ut = u((Zj, Lv) => {
    var WN = ca(),
      VN = Zn();
    function kN(e) {
      return e != null && VN(e.length) && !WN(e);
    }
    Lv.exports = kN;
  });
  var Yr = u((Jj, Pv) => {
    var BN = ma(),
      HN = ti(),
      jN = Ut();
    function KN(e) {
      return jN(e) ? BN(e) : HN(e);
    }
    Pv.exports = KN;
  });
  var Mv = u((e5, Dv) => {
    var zN = ha(),
      YN = Ea(),
      QN = Yr();
    function $N(e) {
      return zN(e, QN, YN);
    }
    Dv.exports = $N;
  });
  var Xv = u((t5, Gv) => {
    var Fv = Mv(),
      ZN = 1,
      JN = Object.prototype,
      eq = JN.hasOwnProperty;
    function tq(e, t, r, n, o, i) {
      var a = r & ZN,
        s = Fv(e),
        c = s.length,
        h = Fv(t),
        I = h.length;
      if (c != I && !a) return !1;
      for (var d = c; d--; ) {
        var T = s[d];
        if (!(a ? T in t : eq.call(t, T))) return !1;
      }
      var E = i.get(e),
        y = i.get(t);
      if (E && y) return E == t && y == e;
      var O = !0;
      i.set(e, t), i.set(t, e);
      for (var C = a; ++d < c; ) {
        T = s[d];
        var x = e[T],
          L = t[T];
        if (n) var S = a ? n(L, x, T, t, e, i) : n(x, L, T, e, t, i);
        if (!(S === void 0 ? x === L || o(x, L, r, n, i) : S)) {
          O = !1;
          break;
        }
        C || (C = T == "constructor");
      }
      if (O && !C) {
        var U = e.constructor,
          G = t.constructor;
        U != G &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof U == "function" &&
            U instanceof U &&
            typeof G == "function" &&
            G instanceof G
          ) &&
          (O = !1);
      }
      return i.delete(e), i.delete(t), O;
    }
    Gv.exports = tq;
  });
  var Wv = u((r5, Uv) => {
    var rq = wt(),
      nq = rt(),
      iq = rq(nq, "DataView");
    Uv.exports = iq;
  });
  var kv = u((n5, Vv) => {
    var oq = wt(),
      aq = rt(),
      sq = oq(aq, "Promise");
    Vv.exports = sq;
  });
  var Hv = u((i5, Bv) => {
    var uq = wt(),
      cq = rt(),
      lq = uq(cq, "Set");
    Bv.exports = lq;
  });
  var Ia = u((o5, jv) => {
    var fq = wt(),
      dq = rt(),
      pq = fq(dq, "WeakMap");
    jv.exports = pq;
  });
  var ri = u((a5, Jv) => {
    var Ta = Wv(),
      ba = jn(),
      Oa = kv(),
      wa = Hv(),
      Aa = Ia(),
      Zv = Xt(),
      dr = fa(),
      Kv = "[object Map]",
      vq = "[object Object]",
      zv = "[object Promise]",
      Yv = "[object Set]",
      Qv = "[object WeakMap]",
      $v = "[object DataView]",
      hq = dr(Ta),
      gq = dr(ba),
      Eq = dr(Oa),
      _q = dr(wa),
      mq = dr(Aa),
      Wt = Zv;
    ((Ta && Wt(new Ta(new ArrayBuffer(1))) != $v) ||
      (ba && Wt(new ba()) != Kv) ||
      (Oa && Wt(Oa.resolve()) != zv) ||
      (wa && Wt(new wa()) != Yv) ||
      (Aa && Wt(new Aa()) != Qv)) &&
      (Wt = function (e) {
        var t = Zv(e),
          r = t == vq ? e.constructor : void 0,
          n = r ? dr(r) : "";
        if (n)
          switch (n) {
            case hq:
              return $v;
            case gq:
              return Kv;
            case Eq:
              return zv;
            case _q:
              return Yv;
            case mq:
              return Qv;
          }
        return t;
      });
    Jv.exports = Wt;
  });
  var sh = u((s5, ah) => {
    var Sa = da(),
      yq = pa(),
      Iq = zp(),
      Tq = Xv(),
      eh = ri(),
      th = Le(),
      rh = Qn(),
      bq = Jn(),
      Oq = 1,
      nh = "[object Arguments]",
      ih = "[object Array]",
      ni = "[object Object]",
      wq = Object.prototype,
      oh = wq.hasOwnProperty;
    function Aq(e, t, r, n, o, i) {
      var a = th(e),
        s = th(t),
        c = a ? ih : eh(e),
        h = s ? ih : eh(t);
      (c = c == nh ? ni : c), (h = h == nh ? ni : h);
      var I = c == ni,
        d = h == ni,
        T = c == h;
      if (T && rh(e)) {
        if (!rh(t)) return !1;
        (a = !0), (I = !1);
      }
      if (T && !I)
        return (
          i || (i = new Sa()),
          a || bq(e) ? yq(e, t, r, n, o, i) : Iq(e, t, c, r, n, o, i)
        );
      if (!(r & Oq)) {
        var E = I && oh.call(e, "__wrapped__"),
          y = d && oh.call(t, "__wrapped__");
        if (E || y) {
          var O = E ? e.value() : e,
            C = y ? t.value() : t;
          return i || (i = new Sa()), o(O, C, r, n, i);
        }
      }
      return T ? (i || (i = new Sa()), Tq(e, t, r, n, o, i)) : !1;
    }
    ah.exports = Aq;
  });
  var Ra = u((u5, lh) => {
    var Sq = sh(),
      uh = At();
    function ch(e, t, r, n, o) {
      return e === t
        ? !0
        : e == null || t == null || (!uh(e) && !uh(t))
        ? e !== e && t !== t
        : Sq(e, t, r, n, ch, o);
    }
    lh.exports = ch;
  });
  var dh = u((c5, fh) => {
    var Rq = da(),
      xq = Ra(),
      Cq = 1,
      Nq = 2;
    function qq(e, t, r, n) {
      var o = r.length,
        i = o,
        a = !n;
      if (e == null) return !i;
      for (e = Object(e); o--; ) {
        var s = r[o];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++o < i; ) {
        s = r[o];
        var c = s[0],
          h = e[c],
          I = s[1];
        if (a && s[2]) {
          if (h === void 0 && !(c in e)) return !1;
        } else {
          var d = new Rq();
          if (n) var T = n(h, I, c, e, t, d);
          if (!(T === void 0 ? xq(I, h, Cq | Nq, n, d) : T)) return !1;
        }
      }
      return !0;
    }
    fh.exports = qq;
  });
  var xa = u((l5, ph) => {
    var Lq = dt();
    function Pq(e) {
      return e === e && !Lq(e);
    }
    ph.exports = Pq;
  });
  var hh = u((f5, vh) => {
    var Dq = xa(),
      Mq = Yr();
    function Fq(e) {
      for (var t = Mq(e), r = t.length; r--; ) {
        var n = t[r],
          o = e[n];
        t[r] = [n, o, Dq(o)];
      }
      return t;
    }
    vh.exports = Fq;
  });
  var Ca = u((d5, gh) => {
    function Gq(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    gh.exports = Gq;
  });
  var _h = u((p5, Eh) => {
    var Xq = dh(),
      Uq = hh(),
      Wq = Ca();
    function Vq(e) {
      var t = Uq(e);
      return t.length == 1 && t[0][2]
        ? Wq(t[0][0], t[0][1])
        : function (r) {
            return r === e || Xq(r, e, t);
          };
    }
    Eh.exports = Vq;
  });
  var Qr = u((v5, mh) => {
    var kq = Xt(),
      Bq = At(),
      Hq = "[object Symbol]";
    function jq(e) {
      return typeof e == "symbol" || (Bq(e) && kq(e) == Hq);
    }
    mh.exports = jq;
  });
  var ii = u((h5, yh) => {
    var Kq = Le(),
      zq = Qr(),
      Yq = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Qq = /^\w*$/;
    function $q(e, t) {
      if (Kq(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        zq(e)
        ? !0
        : Qq.test(e) || !Yq.test(e) || (t != null && e in Object(t));
    }
    yh.exports = $q;
  });
  var bh = u((g5, Th) => {
    var Ih = Kn(),
      Zq = "Expected a function";
    function Na(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(Zq);
      var r = function () {
        var n = arguments,
          o = t ? t.apply(this, n) : n[0],
          i = r.cache;
        if (i.has(o)) return i.get(o);
        var a = e.apply(this, n);
        return (r.cache = i.set(o, a) || i), a;
      };
      return (r.cache = new (Na.Cache || Ih)()), r;
    }
    Na.Cache = Ih;
    Th.exports = Na;
  });
  var wh = u((E5, Oh) => {
    var Jq = bh(),
      eL = 500;
    function tL(e) {
      var t = Jq(e, function (n) {
          return r.size === eL && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    Oh.exports = tL;
  });
  var Sh = u((_5, Ah) => {
    var rL = wh(),
      nL =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      iL = /\\(\\)?/g,
      oL = rL(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(nL, function (r, n, o, i) {
            t.push(o ? i.replace(iL, "$1") : n || r);
          }),
          t
        );
      });
    Ah.exports = oL;
  });
  var qa = u((m5, Rh) => {
    function aL(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
        o[r] = t(e[r], r, e);
      return o;
    }
    Rh.exports = aL;
  });
  var Ph = u((y5, Lh) => {
    var xh = ar(),
      sL = qa(),
      uL = Le(),
      cL = Qr(),
      lL = 1 / 0,
      Ch = xh ? xh.prototype : void 0,
      Nh = Ch ? Ch.toString : void 0;
    function qh(e) {
      if (typeof e == "string") return e;
      if (uL(e)) return sL(e, qh) + "";
      if (cL(e)) return Nh ? Nh.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -lL ? "-0" : t;
    }
    Lh.exports = qh;
  });
  var Mh = u((I5, Dh) => {
    var fL = Ph();
    function dL(e) {
      return e == null ? "" : fL(e);
    }
    Dh.exports = dL;
  });
  var $r = u((T5, Fh) => {
    var pL = Le(),
      vL = ii(),
      hL = Sh(),
      gL = Mh();
    function EL(e, t) {
      return pL(e) ? e : vL(e, t) ? [e] : hL(gL(e));
    }
    Fh.exports = EL;
  });
  var pr = u((b5, Gh) => {
    var _L = Qr(),
      mL = 1 / 0;
    function yL(e) {
      if (typeof e == "string" || _L(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -mL ? "-0" : t;
    }
    Gh.exports = yL;
  });
  var oi = u((O5, Xh) => {
    var IL = $r(),
      TL = pr();
    function bL(e, t) {
      t = IL(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[TL(t[r++])];
      return r && r == n ? e : void 0;
    }
    Xh.exports = bL;
  });
  var ai = u((w5, Uh) => {
    var OL = oi();
    function wL(e, t, r) {
      var n = e == null ? void 0 : OL(e, t);
      return n === void 0 ? r : n;
    }
    Uh.exports = wL;
  });
  var Vh = u((A5, Wh) => {
    function AL(e, t) {
      return e != null && t in Object(e);
    }
    Wh.exports = AL;
  });
  var Bh = u((S5, kh) => {
    var SL = $r(),
      RL = Hr(),
      xL = Le(),
      CL = $n(),
      NL = Zn(),
      qL = pr();
    function LL(e, t, r) {
      t = SL(t, e);
      for (var n = -1, o = t.length, i = !1; ++n < o; ) {
        var a = qL(t[n]);
        if (!(i = e != null && r(e, a))) break;
        e = e[a];
      }
      return i || ++n != o
        ? i
        : ((o = e == null ? 0 : e.length),
          !!o && NL(o) && CL(a, o) && (xL(e) || RL(e)));
    }
    kh.exports = LL;
  });
  var jh = u((R5, Hh) => {
    var PL = Vh(),
      DL = Bh();
    function ML(e, t) {
      return e != null && DL(e, t, PL);
    }
    Hh.exports = ML;
  });
  var zh = u((x5, Kh) => {
    var FL = Ra(),
      GL = ai(),
      XL = jh(),
      UL = ii(),
      WL = xa(),
      VL = Ca(),
      kL = pr(),
      BL = 1,
      HL = 2;
    function jL(e, t) {
      return UL(e) && WL(t)
        ? VL(kL(e), t)
        : function (r) {
            var n = GL(r, e);
            return n === void 0 && n === t ? XL(r, e) : FL(t, n, BL | HL);
          };
    }
    Kh.exports = jL;
  });
  var si = u((C5, Yh) => {
    function KL(e) {
      return e;
    }
    Yh.exports = KL;
  });
  var La = u((N5, Qh) => {
    function zL(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Qh.exports = zL;
  });
  var Zh = u((q5, $h) => {
    var YL = oi();
    function QL(e) {
      return function (t) {
        return YL(t, e);
      };
    }
    $h.exports = QL;
  });
  var eg = u((L5, Jh) => {
    var $L = La(),
      ZL = Zh(),
      JL = ii(),
      eP = pr();
    function tP(e) {
      return JL(e) ? $L(eP(e)) : ZL(e);
    }
    Jh.exports = tP;
  });
  var St = u((P5, tg) => {
    var rP = _h(),
      nP = zh(),
      iP = si(),
      oP = Le(),
      aP = eg();
    function sP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? iP
        : typeof e == "object"
        ? oP(e)
          ? nP(e[0], e[1])
          : rP(e)
        : aP(e);
    }
    tg.exports = sP;
  });
  var Pa = u((D5, rg) => {
    var uP = St(),
      cP = Ut(),
      lP = Yr();
    function fP(e) {
      return function (t, r, n) {
        var o = Object(t);
        if (!cP(t)) {
          var i = uP(r, 3);
          (t = lP(t)),
            (r = function (s) {
              return i(o[s], s, o);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? o[i ? t[a] : a] : void 0;
      };
    }
    rg.exports = fP;
  });
  var Da = u((M5, ng) => {
    function dP(e, t, r, n) {
      for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    ng.exports = dP;
  });
  var og = u((F5, ig) => {
    var pP = /\s/;
    function vP(e) {
      for (var t = e.length; t-- && pP.test(e.charAt(t)); );
      return t;
    }
    ig.exports = vP;
  });
  var sg = u((G5, ag) => {
    var hP = og(),
      gP = /^\s+/;
    function EP(e) {
      return e && e.slice(0, hP(e) + 1).replace(gP, "");
    }
    ag.exports = EP;
  });
  var ui = u((X5, lg) => {
    var _P = sg(),
      ug = dt(),
      mP = Qr(),
      cg = 0 / 0,
      yP = /^[-+]0x[0-9a-f]+$/i,
      IP = /^0b[01]+$/i,
      TP = /^0o[0-7]+$/i,
      bP = parseInt;
    function OP(e) {
      if (typeof e == "number") return e;
      if (mP(e)) return cg;
      if (ug(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = ug(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = _P(e);
      var r = IP.test(e);
      return r || TP.test(e) ? bP(e.slice(2), r ? 2 : 8) : yP.test(e) ? cg : +e;
    }
    lg.exports = OP;
  });
  var pg = u((U5, dg) => {
    var wP = ui(),
      fg = 1 / 0,
      AP = 17976931348623157e292;
    function SP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = wP(e)), e === fg || e === -fg)) {
        var t = e < 0 ? -1 : 1;
        return t * AP;
      }
      return e === e ? e : 0;
    }
    dg.exports = SP;
  });
  var Ma = u((W5, vg) => {
    var RP = pg();
    function xP(e) {
      var t = RP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    vg.exports = xP;
  });
  var gg = u((V5, hg) => {
    var CP = Da(),
      NP = St(),
      qP = Ma(),
      LP = Math.max;
    function PP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = r == null ? 0 : qP(r);
      return o < 0 && (o = LP(n + o, 0)), CP(e, NP(t, 3), o);
    }
    hg.exports = PP;
  });
  var Fa = u((k5, Eg) => {
    var DP = Pa(),
      MP = gg(),
      FP = DP(MP);
    Eg.exports = FP;
  });
  var li = u((Ue) => {
    "use strict";
    var GP = ct().default;
    Object.defineProperty(Ue, "__esModule", { value: !0 });
    Ue.withBrowser =
      Ue.TRANSFORM_STYLE_PREFIXED =
      Ue.TRANSFORM_PREFIXED =
      Ue.IS_BROWSER_ENV =
      Ue.FLEX_PREFIXED =
      Ue.ELEMENT_MATCHES =
        void 0;
    var XP = GP(Fa()),
      mg = typeof window < "u";
    Ue.IS_BROWSER_ENV = mg;
    var ci = (e, t) => (mg ? e() : t);
    Ue.withBrowser = ci;
    var UP = ci(() =>
      (0, XP.default)(
        [
          "matches",
          "matchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
          "webkitMatchesSelector",
        ],
        (e) => e in Element.prototype
      )
    );
    Ue.ELEMENT_MATCHES = UP;
    var WP = ci(() => {
      let e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
        r = "";
      try {
        let { length: n } = t;
        for (let o = 0; o < n; o++) {
          let i = t[o];
          if (((e.style.display = i), e.style.display === i)) return i;
        }
        return r;
      } catch {
        return r;
      }
    }, "flex");
    Ue.FLEX_PREFIXED = WP;
    var yg = ci(() => {
      let e = document.createElement("i");
      if (e.style.transform == null) {
        let t = ["Webkit", "Moz", "ms"],
          r = "Transform",
          { length: n } = t;
        for (let o = 0; o < n; o++) {
          let i = t[o] + r;
          if (e.style[i] !== void 0) return i;
        }
      }
      return "transform";
    }, "transform");
    Ue.TRANSFORM_PREFIXED = yg;
    var _g = yg.split("transform")[0],
      VP = _g ? _g + "TransformStyle" : "transformStyle";
    Ue.TRANSFORM_STYLE_PREFIXED = VP;
  });
  var Ga = u((H5, wg) => {
    var kP = 4,
      BP = 0.001,
      HP = 1e-7,
      jP = 10,
      Zr = 11,
      fi = 1 / (Zr - 1),
      KP = typeof Float32Array == "function";
    function Ig(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Tg(e, t) {
      return 3 * t - 6 * e;
    }
    function bg(e) {
      return 3 * e;
    }
    function di(e, t, r) {
      return ((Ig(t, r) * e + Tg(t, r)) * e + bg(t)) * e;
    }
    function Og(e, t, r) {
      return 3 * Ig(t, r) * e * e + 2 * Tg(t, r) * e + bg(t);
    }
    function zP(e, t, r, n, o) {
      var i,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (i = di(a, n, o) - e), i > 0 ? (r = a) : (t = a);
      while (Math.abs(i) > HP && ++s < jP);
      return a;
    }
    function YP(e, t, r, n) {
      for (var o = 0; o < kP; ++o) {
        var i = Og(t, r, n);
        if (i === 0) return t;
        var a = di(t, r, n) - e;
        t -= a / i;
      }
      return t;
    }
    wg.exports = function (t, r, n, o) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = KP ? new Float32Array(Zr) : new Array(Zr);
      if (t !== r || n !== o)
        for (var a = 0; a < Zr; ++a) i[a] = di(a * fi, t, n);
      function s(c) {
        for (var h = 0, I = 1, d = Zr - 1; I !== d && i[I] <= c; ++I) h += fi;
        --I;
        var T = (c - i[I]) / (i[I + 1] - i[I]),
          E = h + T * fi,
          y = Og(E, t, n);
        return y >= BP ? YP(c, E, t, n) : y === 0 ? E : zP(c, h, h + fi, t, n);
      }
      return function (h) {
        return t === r && n === o
          ? h
          : h === 0
          ? 0
          : h === 1
          ? 1
          : di(s(h), r, o);
      };
    };
  });
  var Xa = u((ue) => {
    "use strict";
    var QP = ct().default;
    Object.defineProperty(ue, "__esModule", { value: !0 });
    ue.bounce = qD;
    ue.bouncePast = LD;
    ue.easeOut = ue.easeInOut = ue.easeIn = ue.ease = void 0;
    ue.inBack = bD;
    ue.inCirc = mD;
    ue.inCubic = iD;
    ue.inElastic = AD;
    ue.inExpo = gD;
    ue.inOutBack = wD;
    ue.inOutCirc = ID;
    ue.inOutCubic = aD;
    ue.inOutElastic = RD;
    ue.inOutExpo = _D;
    ue.inOutQuad = nD;
    ue.inOutQuart = cD;
    ue.inOutQuint = dD;
    ue.inOutSine = hD;
    ue.inQuad = tD;
    ue.inQuart = sD;
    ue.inQuint = lD;
    ue.inSine = pD;
    ue.outBack = OD;
    ue.outBounce = TD;
    ue.outCirc = yD;
    ue.outCubic = oD;
    ue.outElastic = SD;
    ue.outExpo = ED;
    ue.outQuad = rD;
    ue.outQuart = uD;
    ue.outQuint = fD;
    ue.outSine = vD;
    ue.swingFrom = CD;
    ue.swingFromTo = xD;
    ue.swingTo = ND;
    var pi = QP(Ga()),
      yt = 1.70158,
      $P = (0, pi.default)(0.25, 0.1, 0.25, 1);
    ue.ease = $P;
    var ZP = (0, pi.default)(0.42, 0, 1, 1);
    ue.easeIn = ZP;
    var JP = (0, pi.default)(0, 0, 0.58, 1);
    ue.easeOut = JP;
    var eD = (0, pi.default)(0.42, 0, 0.58, 1);
    ue.easeInOut = eD;
    function tD(e) {
      return Math.pow(e, 2);
    }
    function rD(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function nD(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function iD(e) {
      return Math.pow(e, 3);
    }
    function oD(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function aD(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function sD(e) {
      return Math.pow(e, 4);
    }
    function uD(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function cD(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function lD(e) {
      return Math.pow(e, 5);
    }
    function fD(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function dD(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function pD(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function vD(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function hD(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function gD(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function ED(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function _D(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function mD(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function yD(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function ID(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function TD(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function bD(e) {
      let t = yt;
      return e * e * ((t + 1) * e - t);
    }
    function OD(e) {
      let t = yt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function wD(e) {
      let t = yt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function AD(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
    }
    function SD(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) +
            1);
    }
    function RD(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
              (n *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) *
                0.5 +
              1);
    }
    function xD(e) {
      let t = yt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function CD(e) {
      let t = yt;
      return e * e * ((t + 1) * e - t);
    }
    function ND(e) {
      let t = yt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function qD(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function LD(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var Wa = u((Jr) => {
    "use strict";
    var PD = ct().default,
      DD = $t().default;
    Object.defineProperty(Jr, "__esModule", { value: !0 });
    Jr.applyEasing = GD;
    Jr.createBezierEasing = FD;
    Jr.optimizeFloat = Ua;
    var Ag = DD(Xa()),
      MD = PD(Ga());
    function Ua(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
        o = Number(Math.round(e * n) / n);
      return Math.abs(o) > 1e-4 ? o : 0;
    }
    function FD(e) {
      return (0, MD.default)(...e);
    }
    function GD(e, t, r) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : Ua(r ? (t > 0 ? r(t) : t) : t > 0 && e && Ag[e] ? Ag[e](t) : t);
    }
  });
  var Cg = u((vr) => {
    "use strict";
    Object.defineProperty(vr, "__esModule", { value: !0 });
    vr.createElementState = xg;
    vr.ixElements = void 0;
    vr.mergeActionState = Va;
    var vi = ir(),
      Rg = Be(),
      {
        HTML_ELEMENT: z5,
        PLAIN_OBJECT: XD,
        ABSTRACT_NODE: Y5,
        CONFIG_X_VALUE: UD,
        CONFIG_Y_VALUE: WD,
        CONFIG_Z_VALUE: VD,
        CONFIG_VALUE: kD,
        CONFIG_X_UNIT: BD,
        CONFIG_Y_UNIT: HD,
        CONFIG_Z_UNIT: jD,
        CONFIG_UNIT: KD,
      } = Rg.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: zD,
        IX2_INSTANCE_ADDED: YD,
        IX2_ELEMENT_STATE_CHANGED: QD,
      } = Rg.IX2EngineActionTypes,
      Sg = {},
      $D = "refState",
      ZD = (e = Sg, t = {}) => {
        switch (t.type) {
          case zD:
            return Sg;
          case YD: {
            let {
                elementId: r,
                element: n,
                origin: o,
                actionItem: i,
                refType: a,
              } = t.payload,
              { actionTypeId: s } = i,
              c = e;
            return (
              (0, vi.getIn)(c, [r, n]) !== n && (c = xg(c, n, a, r, i)),
              Va(c, r, s, o, i)
            );
          }
          case QD: {
            let {
              elementId: r,
              actionTypeId: n,
              current: o,
              actionItem: i,
            } = t.payload;
            return Va(e, r, n, o, i);
          }
          default:
            return e;
        }
      };
    vr.ixElements = ZD;
    function xg(e, t, r, n, o) {
      let i =
        r === XD ? (0, vi.getIn)(o, ["config", "target", "objectId"]) : null;
      return (0, vi.mergeIn)(e, [n], { id: n, ref: t, refId: i, refType: r });
    }
    function Va(e, t, r, n, o) {
      let i = eM(o),
        a = [t, $D, r];
      return (0, vi.mergeIn)(e, a, n, i);
    }
    var JD = [
      [UD, BD],
      [WD, HD],
      [VD, jD],
      [kD, KD],
    ];
    function eM(e) {
      let { config: t } = e;
      return JD.reduce((r, n) => {
        let o = n[0],
          i = n[1],
          a = t[o],
          s = t[i];
        return a != null && s != null && (r[i] = s), r;
      }, {});
    }
  });
  var Ng = u((Pe) => {
    "use strict";
    Object.defineProperty(Pe, "__esModule", { value: !0 });
    Pe.renderPlugin =
      Pe.getPluginOrigin =
      Pe.getPluginDuration =
      Pe.getPluginDestination =
      Pe.getPluginConfig =
      Pe.createPluginInstance =
      Pe.clearPlugin =
        void 0;
    var tM = (e) => e.value;
    Pe.getPluginConfig = tM;
    var rM = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Pe.getPluginDuration = rM;
    var nM = (e) => e || { value: 0 };
    Pe.getPluginOrigin = nM;
    var iM = (e) => ({ value: e.value });
    Pe.getPluginDestination = iM;
    var oM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Pe.createPluginInstance = oM;
    var aM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Pe.renderPlugin = aM;
    var sM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Pe.clearPlugin = sM;
  });
  var ka = u((Ce) => {
    "use strict";
    Object.defineProperty(Ce, "__esModule", { value: !0 });
    Ce.getPluginOrigin =
      Ce.getPluginDuration =
      Ce.getPluginDestination =
      Ce.getPluginConfig =
      Ce.createPluginInstance =
      Ce.clearPlugin =
        void 0;
    Ce.isPluginType = lM;
    Ce.renderPlugin = void 0;
    var Vt = Ng(),
      qg = Be(),
      uM = li(),
      cM = {
        [qg.ActionTypeConsts.PLUGIN_LOTTIE]: {
          getConfig: Vt.getPluginConfig,
          getOrigin: Vt.getPluginOrigin,
          getDuration: Vt.getPluginDuration,
          getDestination: Vt.getPluginDestination,
          createInstance: Vt.createPluginInstance,
          render: Vt.renderPlugin,
          clear: Vt.clearPlugin,
        },
      };
    function lM(e) {
      return e === qg.ActionTypeConsts.PLUGIN_LOTTIE;
    }
    var kt = (e) => (t) => {
        if (!uM.IS_BROWSER_ENV) return () => null;
        let r = cM[t];
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      },
      fM = kt("getConfig");
    Ce.getPluginConfig = fM;
    var dM = kt("getOrigin");
    Ce.getPluginOrigin = dM;
    var pM = kt("getDuration");
    Ce.getPluginDuration = pM;
    var vM = kt("getDestination");
    Ce.getPluginDestination = vM;
    var hM = kt("createInstance");
    Ce.createPluginInstance = hM;
    var gM = kt("render");
    Ce.renderPlugin = gM;
    var EM = kt("clear");
    Ce.clearPlugin = EM;
  });
  var Pg = u((J5, Lg) => {
    function _M(e, t) {
      return e == null || e !== e ? t : e;
    }
    Lg.exports = _M;
  });
  var Mg = u((eK, Dg) => {
    function mM(e, t, r, n) {
      var o = -1,
        i = e == null ? 0 : e.length;
      for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
      return r;
    }
    Dg.exports = mM;
  });
  var Gg = u((tK, Fg) => {
    function yM(e) {
      return function (t, r, n) {
        for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
          var c = a[e ? s : ++o];
          if (r(i[c], c, i) === !1) break;
        }
        return t;
      };
    }
    Fg.exports = yM;
  });
  var Ug = u((rK, Xg) => {
    var IM = Gg(),
      TM = IM();
    Xg.exports = TM;
  });
  var Ba = u((nK, Wg) => {
    var bM = Ug(),
      OM = Yr();
    function wM(e, t) {
      return e && bM(e, t, OM);
    }
    Wg.exports = wM;
  });
  var kg = u((iK, Vg) => {
    var AM = Ut();
    function SM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!AM(r)) return e(r, n);
        for (
          var o = r.length, i = t ? o : -1, a = Object(r);
          (t ? i-- : ++i < o) && n(a[i], i, a) !== !1;

        );
        return r;
      };
    }
    Vg.exports = SM;
  });
  var Ha = u((oK, Bg) => {
    var RM = Ba(),
      xM = kg(),
      CM = xM(RM);
    Bg.exports = CM;
  });
  var jg = u((aK, Hg) => {
    function NM(e, t, r, n, o) {
      return (
        o(e, function (i, a, s) {
          r = n ? ((n = !1), i) : t(r, i, a, s);
        }),
        r
      );
    }
    Hg.exports = NM;
  });
  var zg = u((sK, Kg) => {
    var qM = Mg(),
      LM = Ha(),
      PM = St(),
      DM = jg(),
      MM = Le();
    function FM(e, t, r) {
      var n = MM(e) ? qM : DM,
        o = arguments.length < 3;
      return n(e, PM(t, 4), r, o, LM);
    }
    Kg.exports = FM;
  });
  var Qg = u((uK, Yg) => {
    var GM = Da(),
      XM = St(),
      UM = Ma(),
      WM = Math.max,
      VM = Math.min;
    function kM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = n - 1;
      return (
        r !== void 0 &&
          ((o = UM(r)), (o = r < 0 ? WM(n + o, 0) : VM(o, n - 1))),
        GM(e, XM(t, 3), o, !0)
      );
    }
    Yg.exports = kM;
  });
  var Zg = u((cK, $g) => {
    var BM = Pa(),
      HM = Qg(),
      jM = BM(HM);
    $g.exports = jM;
  });
  var eE = u((hi) => {
    "use strict";
    Object.defineProperty(hi, "__esModule", { value: !0 });
    hi.default = void 0;
    var KM = Object.prototype.hasOwnProperty;
    function Jg(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function zM(e, t) {
      if (Jg(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let o = 0; o < r.length; o++)
        if (!KM.call(t, r[o]) || !Jg(e[r[o]], t[r[o]])) return !1;
      return !0;
    }
    var YM = zM;
    hi.default = YM;
  });
  var IE = u((me) => {
    "use strict";
    var _i = ct().default;
    Object.defineProperty(me, "__esModule", { value: !0 });
    me.cleanupHTMLElement = j1;
    me.clearAllStyles = H1;
    me.getActionListProgress = z1;
    me.getAffectedElements = $a;
    me.getComputedStyle = y1;
    me.getDestinationValues = S1;
    me.getElementId = g1;
    me.getInstanceId = v1;
    me.getInstanceOrigin = b1;
    me.getItemConfigByKey = void 0;
    me.getMaxDurationItemIndex = yE;
    me.getNamespacedParameterId = $1;
    me.getRenderType = EE;
    me.getStyleProp = R1;
    me.mediaQueriesEqual = J1;
    me.observeStore = m1;
    me.reduceListToGroup = Y1;
    me.reifyState = E1;
    me.renderHTMLElement = x1;
    Object.defineProperty(me, "shallowEqual", {
      enumerable: !0,
      get: function () {
        return lE.default;
      },
    });
    me.shouldAllowMediaQuery = Z1;
    me.shouldNamespaceEventParameter = Q1;
    me.stringifyTarget = eF;
    var Rt = _i(Pg()),
      Ka = _i(zg()),
      ja = _i(Zg()),
      tE = ir(),
      Bt = Be(),
      lE = _i(eE()),
      QM = Wa(),
      ht = ka(),
      We = li(),
      {
        BACKGROUND: $M,
        TRANSFORM: ZM,
        TRANSLATE_3D: JM,
        SCALE_3D: e1,
        ROTATE_X: t1,
        ROTATE_Y: r1,
        ROTATE_Z: n1,
        SKEW: i1,
        PRESERVE_3D: o1,
        FLEX: a1,
        OPACITY: gi,
        FILTER: en,
        FONT_VARIATION_SETTINGS: tn,
        WIDTH: pt,
        HEIGHT: vt,
        BACKGROUND_COLOR: fE,
        BORDER_COLOR: s1,
        COLOR: u1,
        CHILDREN: rE,
        IMMEDIATE_CHILDREN: c1,
        SIBLINGS: nE,
        PARENT: l1,
        DISPLAY: Ei,
        WILL_CHANGE: hr,
        AUTO: xt,
        COMMA_DELIMITER: rn,
        COLON_DELIMITER: f1,
        BAR_DELIMITER: iE,
        RENDER_TRANSFORM: dE,
        RENDER_GENERAL: za,
        RENDER_STYLE: Ya,
        RENDER_PLUGIN: pE,
      } = Bt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: gr,
        TRANSFORM_SCALE: Er,
        TRANSFORM_ROTATE: _r,
        TRANSFORM_SKEW: nn,
        STYLE_OPACITY: vE,
        STYLE_FILTER: on,
        STYLE_FONT_VARIATION: an,
        STYLE_SIZE: mr,
        STYLE_BACKGROUND_COLOR: yr,
        STYLE_BORDER: Ir,
        STYLE_TEXT_COLOR: Tr,
        GENERAL_DISPLAY: mi,
      } = Bt.ActionTypeConsts,
      d1 = "OBJECT_VALUE",
      hE = (e) => e.trim(),
      Qa = Object.freeze({ [yr]: fE, [Ir]: s1, [Tr]: u1 }),
      gE = Object.freeze({
        [We.TRANSFORM_PREFIXED]: ZM,
        [fE]: $M,
        [gi]: gi,
        [en]: en,
        [pt]: pt,
        [vt]: vt,
        [tn]: tn,
      }),
      oE = {},
      p1 = 1;
    function v1() {
      return "i" + p1++;
    }
    var h1 = 1;
    function g1(e, t) {
      for (let r in e) {
        let n = e[r];
        if (n && n.ref === t) return n.id;
      }
      return "e" + h1++;
    }
    function E1({ events: e, actionLists: t, site: r } = {}) {
      let n = (0, Ka.default)(
          e,
          (a, s) => {
            let { eventTypeId: c } = s;
            return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
          },
          {}
        ),
        o = r && r.mediaQueries,
        i = [];
      return (
        o
          ? (i = o.map((a) => a.key))
          : ((o = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: n,
            mediaQueries: o,
            mediaQueryKeys: i,
          },
        }
      );
    }
    var _1 = (e, t) => e === t;
    function m1({ store: e, select: t, onChange: r, comparator: n = _1 }) {
      let { getState: o, subscribe: i } = e,
        a = i(c),
        s = t(o());
      function c() {
        let h = t(o());
        if (h == null) {
          a();
          return;
        }
        n(h, s) || ((s = h), r(s, e));
      }
      return a;
    }
    function aE(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: n,
          selector: o,
          selectorGuids: i,
          appliesTo: a,
          useEventTarget: s,
        } = e;
        return {
          id: r,
          objectId: n,
          selector: o,
          selectorGuids: i,
          appliesTo: a,
          useEventTarget: s,
        };
      }
      return {};
    }
    function $a({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: o,
    }) {
      var i, a, s;
      if (!o) throw new Error("IX2 missing elementApi");
      let { targets: c } = e;
      if (Array.isArray(c) && c.length > 0)
        return c.reduce(
          (N, B) =>
            N.concat(
              $a({
                config: { target: B },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: o,
              })
            ),
          []
        );
      let {
          getValidDocument: h,
          getQuerySelector: I,
          queryDocument: d,
          getChildElements: T,
          getSiblingElements: E,
          matchSelector: y,
          elementContains: O,
          isSiblingNode: C,
        } = o,
        { target: x } = e;
      if (!x) return [];
      let {
        id: L,
        objectId: S,
        selector: U,
        selectorGuids: G,
        appliesTo: W,
        useEventTarget: K,
      } = aE(x);
      if (S) return [oE[S] || (oE[S] = {})];
      if (W === Bt.EventAppliesTo.PAGE) {
        let N = h(L);
        return N ? [N] : [];
      }
      let ee =
          ((i =
            t == null ||
            (a = t.action) === null ||
            a === void 0 ||
            (s = a.config) === null ||
            s === void 0
              ? void 0
              : s.affectedElements) !== null && i !== void 0
            ? i
            : {})[L || U] || {},
        oe = !!(ee.id || ee.selector),
        z,
        q,
        m,
        M = t && I(aE(t.target));
      if (
        (oe
          ? ((z = ee.limitAffectedElements), (q = M), (m = I(ee)))
          : (q = m = I({ id: L, selector: U, selectorGuids: G })),
        t && K)
      ) {
        let N = r && (m || K === !0) ? [r] : d(M);
        if (m) {
          if (K === l1) return d(m).filter((B) => N.some((P) => O(B, P)));
          if (K === rE) return d(m).filter((B) => N.some((P) => O(P, B)));
          if (K === nE) return d(m).filter((B) => N.some((P) => C(P, B)));
        }
        return N;
      }
      return q == null || m == null
        ? []
        : We.IS_BROWSER_ENV && n
        ? d(m).filter((N) => n.contains(N))
        : z === rE
        ? d(q, m)
        : z === c1
        ? T(d(q)).filter(y(m))
        : z === nE
        ? E(d(q)).filter(y(m))
        : d(m);
    }
    function y1({ element: e, actionItem: t }) {
      if (!We.IS_BROWSER_ENV) return {};
      let { actionTypeId: r } = t;
      switch (r) {
        case mr:
        case yr:
        case Ir:
        case Tr:
        case mi:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var sE = /px/,
      I1 = (e, t) =>
        t.reduce(
          (r, n) => (r[n.type] == null && (r[n.type] = C1[n.type]), r),
          e || {}
        ),
      T1 = (e, t) =>
        t.reduce(
          (r, n) => (
            r[n.type] == null &&
              (r[n.type] = N1[n.type] || n.defaultValue || 0),
            r
          ),
          e || {}
        );
    function b1(e, t = {}, r = {}, n, o) {
      let { getStyle: i } = o,
        { actionTypeId: a } = n;
      if ((0, ht.isPluginType)(a)) return (0, ht.getPluginOrigin)(a)(t[a]);
      switch (n.actionTypeId) {
        case gr:
        case Er:
        case _r:
        case nn:
          return t[n.actionTypeId] || Za[n.actionTypeId];
        case on:
          return I1(t[n.actionTypeId], n.config.filters);
        case an:
          return T1(t[n.actionTypeId], n.config.fontVariations);
        case vE:
          return { value: (0, Rt.default)(parseFloat(i(e, gi)), 1) };
        case mr: {
          let s = i(e, pt),
            c = i(e, vt),
            h,
            I;
          return (
            n.config.widthUnit === xt
              ? (h = sE.test(s) ? parseFloat(s) : parseFloat(r.width))
              : (h = (0, Rt.default)(parseFloat(s), parseFloat(r.width))),
            n.config.heightUnit === xt
              ? (I = sE.test(c) ? parseFloat(c) : parseFloat(r.height))
              : (I = (0, Rt.default)(parseFloat(c), parseFloat(r.height))),
            { widthValue: h, heightValue: I }
          );
        }
        case yr:
        case Ir:
        case Tr:
          return V1({
            element: e,
            actionTypeId: n.actionTypeId,
            computedStyle: r,
            getStyle: i,
          });
        case mi:
          return { value: (0, Rt.default)(i(e, Ei), r.display) };
        case d1:
          return t[n.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var O1 = (e, t) => (t && (e[t.type] = t.value || 0), e),
      w1 = (e, t) => (t && (e[t.type] = t.value || 0), e),
      A1 = (e, t, r) => {
        if ((0, ht.isPluginType)(e)) return (0, ht.getPluginConfig)(e)(r, t);
        switch (e) {
          case on: {
            let n = (0, ja.default)(r.filters, ({ type: o }) => o === t);
            return n ? n.value : 0;
          }
          case an: {
            let n = (0, ja.default)(r.fontVariations, ({ type: o }) => o === t);
            return n ? n.value : 0;
          }
          default:
            return r[t];
        }
      };
    me.getItemConfigByKey = A1;
    function S1({ element: e, actionItem: t, elementApi: r }) {
      if ((0, ht.isPluginType)(t.actionTypeId))
        return (0, ht.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case gr:
        case Er:
        case _r:
        case nn: {
          let { xValue: n, yValue: o, zValue: i } = t.config;
          return { xValue: n, yValue: o, zValue: i };
        }
        case mr: {
          let { getStyle: n, setStyle: o, getProperty: i } = r,
            { widthUnit: a, heightUnit: s } = t.config,
            { widthValue: c, heightValue: h } = t.config;
          if (!We.IS_BROWSER_ENV) return { widthValue: c, heightValue: h };
          if (a === xt) {
            let I = n(e, pt);
            o(e, pt, ""), (c = i(e, "offsetWidth")), o(e, pt, I);
          }
          if (s === xt) {
            let I = n(e, vt);
            o(e, vt, ""), (h = i(e, "offsetHeight")), o(e, vt, I);
          }
          return { widthValue: c, heightValue: h };
        }
        case yr:
        case Ir:
        case Tr: {
          let { rValue: n, gValue: o, bValue: i, aValue: a } = t.config;
          return { rValue: n, gValue: o, bValue: i, aValue: a };
        }
        case on:
          return t.config.filters.reduce(O1, {});
        case an:
          return t.config.fontVariations.reduce(w1, {});
        default: {
          let { value: n } = t.config;
          return { value: n };
        }
      }
    }
    function EE(e) {
      if (/^TRANSFORM_/.test(e)) return dE;
      if (/^STYLE_/.test(e)) return Ya;
      if (/^GENERAL_/.test(e)) return za;
      if (/^PLUGIN_/.test(e)) return pE;
    }
    function R1(e, t) {
      return e === Ya ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function x1(e, t, r, n, o, i, a, s, c) {
      switch (s) {
        case dE:
          return P1(e, t, r, o, a);
        case Ya:
          return k1(e, t, r, o, i, a);
        case za:
          return B1(e, o, a);
        case pE: {
          let { actionTypeId: h } = o;
          if ((0, ht.isPluginType)(h)) return (0, ht.renderPlugin)(h)(c, t, o);
        }
      }
    }
    var Za = {
        [gr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Er]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [_r]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [nn]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      C1 = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      N1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      q1 = (e, t) => {
        let r = (0, ja.default)(t.filters, ({ type: n }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      L1 = Object.keys(Za);
    function P1(e, t, r, n, o) {
      let i = L1.map((s) => {
          let c = Za[s],
            {
              xValue: h = c.xValue,
              yValue: I = c.yValue,
              zValue: d = c.zValue,
              xUnit: T = "",
              yUnit: E = "",
              zUnit: y = "",
            } = t[s] || {};
          switch (s) {
            case gr:
              return `${JM}(${h}${T}, ${I}${E}, ${d}${y})`;
            case Er:
              return `${e1}(${h}${T}, ${I}${E}, ${d}${y})`;
            case _r:
              return `${t1}(${h}${T}) ${r1}(${I}${E}) ${n1}(${d}${y})`;
            case nn:
              return `${i1}(${h}${T}, ${I}${E})`;
            default:
              return "";
          }
        }).join(" "),
        { setStyle: a } = o;
      Ht(e, We.TRANSFORM_PREFIXED, o),
        a(e, We.TRANSFORM_PREFIXED, i),
        F1(n, r) && a(e, We.TRANSFORM_STYLE_PREFIXED, o1);
    }
    function D1(e, t, r, n) {
      let o = (0, Ka.default)(t, (a, s, c) => `${a} ${c}(${s}${q1(c, r)})`, ""),
        { setStyle: i } = n;
      Ht(e, en, n), i(e, en, o);
    }
    function M1(e, t, r, n) {
      let o = (0, Ka.default)(
          t,
          (a, s, c) => (a.push(`"${c}" ${s}`), a),
          []
        ).join(", "),
        { setStyle: i } = n;
      Ht(e, tn, n), i(e, tn, o);
    }
    function F1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
      return (
        (e === gr && n !== void 0) ||
        (e === Er && n !== void 0) ||
        (e === _r && (t !== void 0 || r !== void 0))
      );
    }
    var G1 = "\\(([^)]+)\\)",
      X1 = /^rgb/,
      U1 = RegExp(`rgba?${G1}`);
    function W1(e, t) {
      let r = e.exec(t);
      return r ? r[1] : "";
    }
    function V1({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n,
    }) {
      let o = Qa[t],
        i = n(e, o),
        a = X1.test(i) ? i : r[o],
        s = W1(U1, a).split(rn);
      return {
        rValue: (0, Rt.default)(parseInt(s[0], 10), 255),
        gValue: (0, Rt.default)(parseInt(s[1], 10), 255),
        bValue: (0, Rt.default)(parseInt(s[2], 10), 255),
        aValue: (0, Rt.default)(parseFloat(s[3]), 1),
      };
    }
    function k1(e, t, r, n, o, i) {
      let { setStyle: a } = i;
      switch (n.actionTypeId) {
        case mr: {
          let { widthUnit: s = "", heightUnit: c = "" } = n.config,
            { widthValue: h, heightValue: I } = r;
          h !== void 0 &&
            (s === xt && (s = "px"), Ht(e, pt, i), a(e, pt, h + s)),
            I !== void 0 &&
              (c === xt && (c = "px"), Ht(e, vt, i), a(e, vt, I + c));
          break;
        }
        case on: {
          D1(e, r, n.config, i);
          break;
        }
        case an: {
          M1(e, r, n.config, i);
          break;
        }
        case yr:
        case Ir:
        case Tr: {
          let s = Qa[n.actionTypeId],
            c = Math.round(r.rValue),
            h = Math.round(r.gValue),
            I = Math.round(r.bValue),
            d = r.aValue;
          Ht(e, s, i),
            a(
              e,
              s,
              d >= 1 ? `rgb(${c},${h},${I})` : `rgba(${c},${h},${I},${d})`
            );
          break;
        }
        default: {
          let { unit: s = "" } = n.config;
          Ht(e, o, i), a(e, o, r.value + s);
          break;
        }
      }
    }
    function B1(e, t, r) {
      let { setStyle: n } = r;
      switch (t.actionTypeId) {
        case mi: {
          let { value: o } = t.config;
          o === a1 && We.IS_BROWSER_ENV
            ? n(e, Ei, We.FLEX_PREFIXED)
            : n(e, Ei, o);
          return;
        }
      }
    }
    function Ht(e, t, r) {
      if (!We.IS_BROWSER_ENV) return;
      let n = gE[t];
      if (!n) return;
      let { getStyle: o, setStyle: i } = r,
        a = o(e, hr);
      if (!a) {
        i(e, hr, n);
        return;
      }
      let s = a.split(rn).map(hE);
      s.indexOf(n) === -1 && i(e, hr, s.concat(n).join(rn));
    }
    function _E(e, t, r) {
      if (!We.IS_BROWSER_ENV) return;
      let n = gE[t];
      if (!n) return;
      let { getStyle: o, setStyle: i } = r,
        a = o(e, hr);
      !a ||
        a.indexOf(n) === -1 ||
        i(
          e,
          hr,
          a
            .split(rn)
            .map(hE)
            .filter((s) => s !== n)
            .join(rn)
        );
    }
    function H1({ store: e, elementApi: t }) {
      let { ixData: r } = e.getState(),
        { events: n = {}, actionLists: o = {} } = r;
      Object.keys(n).forEach((i) => {
        let a = n[i],
          { config: s } = a.action,
          { actionListId: c } = s,
          h = o[c];
        h && uE({ actionList: h, event: a, elementApi: t });
      }),
        Object.keys(o).forEach((i) => {
          uE({ actionList: o[i], elementApi: t });
        });
    }
    function uE({ actionList: e = {}, event: t, elementApi: r }) {
      let { actionItemGroups: n, continuousParameterGroups: o } = e;
      n &&
        n.forEach((i) => {
          cE({ actionGroup: i, event: t, elementApi: r });
        }),
        o &&
          o.forEach((i) => {
            let { continuousActionGroups: a } = i;
            a.forEach((s) => {
              cE({ actionGroup: s, event: t, elementApi: r });
            });
          });
    }
    function cE({ actionGroup: e, event: t, elementApi: r }) {
      let { actionItems: n } = e;
      n.forEach(({ actionTypeId: o, config: i }) => {
        let a;
        (0, ht.isPluginType)(o)
          ? (a = (0, ht.clearPlugin)(o))
          : (a = mE({ effect: K1, actionTypeId: o, elementApi: r })),
          $a({ config: i, event: t, elementApi: r }).forEach(a);
      });
    }
    function j1(e, t, r) {
      let { setStyle: n, getStyle: o } = r,
        { actionTypeId: i } = t;
      if (i === mr) {
        let { config: a } = t;
        a.widthUnit === xt && n(e, pt, ""), a.heightUnit === xt && n(e, vt, "");
      }
      o(e, hr) && mE({ effect: _E, actionTypeId: i, elementApi: r })(e);
    }
    var mE =
      ({ effect: e, actionTypeId: t, elementApi: r }) =>
      (n) => {
        switch (t) {
          case gr:
          case Er:
          case _r:
          case nn:
            e(n, We.TRANSFORM_PREFIXED, r);
            break;
          case on:
            e(n, en, r);
            break;
          case an:
            e(n, tn, r);
            break;
          case vE:
            e(n, gi, r);
            break;
          case mr:
            e(n, pt, r), e(n, vt, r);
            break;
          case yr:
          case Ir:
          case Tr:
            e(n, Qa[t], r);
            break;
          case mi:
            e(n, Ei, r);
            break;
        }
      };
    function K1(e, t, r) {
      let { setStyle: n } = r;
      _E(e, t, r),
        n(e, t, ""),
        t === We.TRANSFORM_PREFIXED && n(e, We.TRANSFORM_STYLE_PREFIXED, "");
    }
    function yE(e) {
      let t = 0,
        r = 0;
      return (
        e.forEach((n, o) => {
          let { config: i } = n,
            a = i.delay + i.duration;
          a >= t && ((t = a), (r = o));
        }),
        r
      );
    }
    function z1(e, t) {
      let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
        { actionItem: o, verboseTimeElapsed: i = 0 } = t,
        a = 0,
        s = 0;
      return (
        r.forEach((c, h) => {
          if (n && h === 0) return;
          let { actionItems: I } = c,
            d = I[yE(I)],
            { config: T, actionTypeId: E } = d;
          o.id === d.id && (s = a + i);
          let y = EE(E) === za ? 0 : T.duration;
          a += T.delay + y;
        }),
        a > 0 ? (0, QM.optimizeFloat)(s / a) : 0
      );
    }
    function Y1({ actionList: e, actionItemId: t, rawData: r }) {
      let { actionItemGroups: n, continuousParameterGroups: o } = e,
        i = [],
        a = (s) => (
          i.push((0, tE.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
          s.id === t
        );
      return (
        n && n.some(({ actionItems: s }) => s.some(a)),
        o &&
          o.some((s) => {
            let { continuousActionGroups: c } = s;
            return c.some(({ actionItems: h }) => h.some(a));
          }),
        (0, tE.setIn)(r, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
        })
      );
    }
    function Q1(e, { basedOn: t }) {
      return (
        (e === Bt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === Bt.EventBasedOn.ELEMENT || t == null)) ||
        (e === Bt.EventTypeConsts.MOUSE_MOVE && t === Bt.EventBasedOn.ELEMENT)
      );
    }
    function $1(e, t) {
      return e + f1 + t;
    }
    function Z1(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function J1(e, t) {
      return (0, lE.default)(e && e.sort(), t && t.sort());
    }
    function eF(e) {
      if (typeof e == "string") return e;
      let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
      return t + iE + r + iE + n;
    }
  });
  var jt = u((Ve) => {
    "use strict";
    var br = $t().default;
    Object.defineProperty(Ve, "__esModule", { value: !0 });
    Ve.IX2VanillaUtils =
      Ve.IX2VanillaPlugins =
      Ve.IX2ElementsReducer =
      Ve.IX2Easings =
      Ve.IX2EasingUtils =
      Ve.IX2BrowserSupport =
        void 0;
    var tF = br(li());
    Ve.IX2BrowserSupport = tF;
    var rF = br(Xa());
    Ve.IX2Easings = rF;
    var nF = br(Wa());
    Ve.IX2EasingUtils = nF;
    var iF = br(Cg());
    Ve.IX2ElementsReducer = iF;
    var oF = br(ka());
    Ve.IX2VanillaPlugins = oF;
    var aF = br(IE());
    Ve.IX2VanillaUtils = aF;
  });
  var wE = u((Ii) => {
    "use strict";
    Object.defineProperty(Ii, "__esModule", { value: !0 });
    Ii.ixInstances = void 0;
    var TE = Be(),
      bE = jt(),
      Or = ir(),
      {
        IX2_RAW_DATA_IMPORTED: sF,
        IX2_SESSION_STOPPED: uF,
        IX2_INSTANCE_ADDED: cF,
        IX2_INSTANCE_STARTED: lF,
        IX2_INSTANCE_REMOVED: fF,
        IX2_ANIMATION_FRAME_CHANGED: dF,
      } = TE.IX2EngineActionTypes,
      {
        optimizeFloat: yi,
        applyEasing: OE,
        createBezierEasing: pF,
      } = bE.IX2EasingUtils,
      { RENDER_GENERAL: vF } = TE.IX2EngineConstants,
      {
        getItemConfigByKey: Ja,
        getRenderType: hF,
        getStyleProp: gF,
      } = bE.IX2VanillaUtils,
      EF = (e, t) => {
        let {
            position: r,
            parameterId: n,
            actionGroups: o,
            destinationKeys: i,
            smoothing: a,
            restingValue: s,
            actionTypeId: c,
            customEasingFn: h,
            skipMotion: I,
            skipToValue: d,
          } = e,
          { parameters: T } = t.payload,
          E = Math.max(1 - a, 0.01),
          y = T[n];
        y == null && ((E = 1), (y = s));
        let O = Math.max(y, 0) || 0,
          C = yi(O - r),
          x = I ? d : yi(r + C * E),
          L = x * 100;
        if (x === r && e.current) return e;
        let S, U, G, W;
        for (let J = 0, { length: ee } = o; J < ee; J++) {
          let { keyframe: oe, actionItems: z } = o[J];
          if ((J === 0 && (S = z[0]), L >= oe)) {
            S = z[0];
            let q = o[J + 1],
              m = q && L !== oe;
            (U = m ? q.actionItems[0] : null),
              m && ((G = oe / 100), (W = (q.keyframe - oe) / 100));
          }
        }
        let K = {};
        if (S && !U)
          for (let J = 0, { length: ee } = i; J < ee; J++) {
            let oe = i[J];
            K[oe] = Ja(c, oe, S.config);
          }
        else if (S && U && G !== void 0 && W !== void 0) {
          let J = (x - G) / W,
            ee = S.config.easing,
            oe = OE(ee, J, h);
          for (let z = 0, { length: q } = i; z < q; z++) {
            let m = i[z],
              M = Ja(c, m, S.config),
              P = (Ja(c, m, U.config) - M) * oe + M;
            K[m] = P;
          }
        }
        return (0, Or.merge)(e, { position: x, current: K });
      },
      _F = (e, t) => {
        let {
            active: r,
            origin: n,
            start: o,
            immediate: i,
            renderType: a,
            verbose: s,
            actionItem: c,
            destination: h,
            destinationKeys: I,
            pluginDuration: d,
            instanceDelay: T,
            customEasingFn: E,
            skipMotion: y,
          } = e,
          O = c.config.easing,
          { duration: C, delay: x } = c.config;
        d != null && (C = d),
          (x = T ?? x),
          a === vF ? (C = 0) : (i || y) && (C = x = 0);
        let { now: L } = t.payload;
        if (r && n) {
          let S = L - (o + x);
          if (s) {
            let J = L - o,
              ee = C + x,
              oe = yi(Math.min(Math.max(0, J / ee), 1));
            e = (0, Or.set)(e, "verboseTimeElapsed", ee * oe);
          }
          if (S < 0) return e;
          let U = yi(Math.min(Math.max(0, S / C), 1)),
            G = OE(O, U, E),
            W = {},
            K = null;
          return (
            I.length &&
              (K = I.reduce((J, ee) => {
                let oe = h[ee],
                  z = parseFloat(n[ee]) || 0,
                  m = (parseFloat(oe) - z) * G + z;
                return (J[ee] = m), J;
              }, {})),
            (W.current = K),
            (W.position = U),
            U === 1 && ((W.active = !1), (W.complete = !0)),
            (0, Or.merge)(e, W)
          );
        }
        return e;
      },
      mF = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case sF:
            return t.payload.ixInstances || Object.freeze({});
          case uF:
            return Object.freeze({});
          case cF: {
            let {
                instanceId: r,
                elementId: n,
                actionItem: o,
                eventId: i,
                eventTarget: a,
                eventStateKey: s,
                actionListId: c,
                groupIndex: h,
                isCarrier: I,
                origin: d,
                destination: T,
                immediate: E,
                verbose: y,
                continuous: O,
                parameterId: C,
                actionGroups: x,
                smoothing: L,
                restingValue: S,
                pluginInstance: U,
                pluginDuration: G,
                instanceDelay: W,
                skipMotion: K,
                skipToValue: J,
              } = t.payload,
              { actionTypeId: ee } = o,
              oe = hF(ee),
              z = gF(oe, ee),
              q = Object.keys(T).filter((M) => T[M] != null),
              { easing: m } = o.config;
            return (0, Or.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: d,
              destination: T,
              destinationKeys: q,
              immediate: E,
              verbose: y,
              current: null,
              actionItem: o,
              actionTypeId: ee,
              eventId: i,
              eventTarget: a,
              eventStateKey: s,
              actionListId: c,
              groupIndex: h,
              renderType: oe,
              isCarrier: I,
              styleProp: z,
              continuous: O,
              parameterId: C,
              actionGroups: x,
              smoothing: L,
              restingValue: S,
              pluginInstance: U,
              pluginDuration: G,
              instanceDelay: W,
              skipMotion: K,
              skipToValue: J,
              customEasingFn:
                Array.isArray(m) && m.length === 4 ? pF(m) : void 0,
            });
          }
          case lF: {
            let { instanceId: r, time: n } = t.payload;
            return (0, Or.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n,
            });
          }
          case fF: {
            let { instanceId: r } = t.payload;
            if (!e[r]) return e;
            let n = {},
              o = Object.keys(e),
              { length: i } = o;
            for (let a = 0; a < i; a++) {
              let s = o[a];
              s !== r && (n[s] = e[s]);
            }
            return n;
          }
          case dF: {
            let r = e,
              n = Object.keys(e),
              { length: o } = n;
            for (let i = 0; i < o; i++) {
              let a = n[i],
                s = e[a],
                c = s.continuous ? EF : _F;
              r = (0, Or.set)(r, a, c(s, t));
            }
            return r;
          }
          default:
            return e;
        }
      };
    Ii.ixInstances = mF;
  });
  var AE = u((Ti) => {
    "use strict";
    Object.defineProperty(Ti, "__esModule", { value: !0 });
    Ti.ixParameters = void 0;
    var yF = Be(),
      {
        IX2_RAW_DATA_IMPORTED: IF,
        IX2_SESSION_STOPPED: TF,
        IX2_PARAMETER_CHANGED: bF,
      } = yF.IX2EngineActionTypes,
      OF = (e = {}, t) => {
        switch (t.type) {
          case IF:
            return t.payload.ixParameters || {};
          case TF:
            return {};
          case bF: {
            let { key: r, value: n } = t.payload;
            return (e[r] = n), e;
          }
          default:
            return e;
        }
      };
    Ti.ixParameters = OF;
  });
  var SE = u((bi) => {
    "use strict";
    Object.defineProperty(bi, "__esModule", { value: !0 });
    bi.default = void 0;
    var wF = ea(),
      AF = Pf(),
      SF = Jf(),
      RF = td(),
      xF = jt(),
      CF = wE(),
      NF = AE(),
      { ixElements: qF } = xF.IX2ElementsReducer,
      LF = (0, wF.combineReducers)({
        ixData: AF.ixData,
        ixRequest: SF.ixRequest,
        ixSession: RF.ixSession,
        ixElements: qF,
        ixInstances: CF.ixInstances,
        ixParameters: NF.ixParameters,
      });
    bi.default = LF;
  });
  var RE = u((gK, sn) => {
    function PF(e, t) {
      if (e == null) return {};
      var r = {},
        n = Object.keys(e),
        o,
        i;
      for (i = 0; i < n.length; i++)
        (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
      return r;
    }
    (sn.exports = PF),
      (sn.exports.__esModule = !0),
      (sn.exports.default = sn.exports);
  });
  var CE = u((EK, xE) => {
    var DF = Xt(),
      MF = Le(),
      FF = At(),
      GF = "[object String]";
    function XF(e) {
      return typeof e == "string" || (!MF(e) && FF(e) && DF(e) == GF);
    }
    xE.exports = XF;
  });
  var qE = u((_K, NE) => {
    var UF = La(),
      WF = UF("length");
    NE.exports = WF;
  });
  var PE = u((mK, LE) => {
    var VF = "\\ud800-\\udfff",
      kF = "\\u0300-\\u036f",
      BF = "\\ufe20-\\ufe2f",
      HF = "\\u20d0-\\u20ff",
      jF = kF + BF + HF,
      KF = "\\ufe0e\\ufe0f",
      zF = "\\u200d",
      YF = RegExp("[" + zF + VF + jF + KF + "]");
    function QF(e) {
      return YF.test(e);
    }
    LE.exports = QF;
  });
  var kE = u((yK, VE) => {
    var ME = "\\ud800-\\udfff",
      $F = "\\u0300-\\u036f",
      ZF = "\\ufe20-\\ufe2f",
      JF = "\\u20d0-\\u20ff",
      e2 = $F + ZF + JF,
      t2 = "\\ufe0e\\ufe0f",
      r2 = "[" + ME + "]",
      es = "[" + e2 + "]",
      ts = "\\ud83c[\\udffb-\\udfff]",
      n2 = "(?:" + es + "|" + ts + ")",
      FE = "[^" + ME + "]",
      GE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      XE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      i2 = "\\u200d",
      UE = n2 + "?",
      WE = "[" + t2 + "]?",
      o2 = "(?:" + i2 + "(?:" + [FE, GE, XE].join("|") + ")" + WE + UE + ")*",
      a2 = WE + UE + o2,
      s2 = "(?:" + [FE + es + "?", es, GE, XE, r2].join("|") + ")",
      DE = RegExp(ts + "(?=" + ts + ")|" + s2 + a2, "g");
    function u2(e) {
      for (var t = (DE.lastIndex = 0); DE.test(e); ) ++t;
      return t;
    }
    VE.exports = u2;
  });
  var HE = u((IK, BE) => {
    var c2 = qE(),
      l2 = PE(),
      f2 = kE();
    function d2(e) {
      return l2(e) ? f2(e) : c2(e);
    }
    BE.exports = d2;
  });
  var KE = u((TK, jE) => {
    var p2 = ti(),
      v2 = ri(),
      h2 = Ut(),
      g2 = CE(),
      E2 = HE(),
      _2 = "[object Map]",
      m2 = "[object Set]";
    function y2(e) {
      if (e == null) return 0;
      if (h2(e)) return g2(e) ? E2(e) : e.length;
      var t = v2(e);
      return t == _2 || t == m2 ? e.size : p2(e).length;
    }
    jE.exports = y2;
  });
  var YE = u((bK, zE) => {
    var I2 = "Expected a function";
    function T2(e) {
      if (typeof e != "function") throw new TypeError(I2);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    zE.exports = T2;
  });
  var rs = u((OK, QE) => {
    var b2 = wt(),
      O2 = (function () {
        try {
          var e = b2(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    QE.exports = O2;
  });
  var ns = u((wK, ZE) => {
    var $E = rs();
    function w2(e, t, r) {
      t == "__proto__" && $E
        ? $E(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    ZE.exports = w2;
  });
  var e_ = u((AK, JE) => {
    var A2 = ns(),
      S2 = Hn(),
      R2 = Object.prototype,
      x2 = R2.hasOwnProperty;
    function C2(e, t, r) {
      var n = e[t];
      (!(x2.call(e, t) && S2(n, r)) || (r === void 0 && !(t in e))) &&
        A2(e, t, r);
    }
    JE.exports = C2;
  });
  var n_ = u((SK, r_) => {
    var N2 = e_(),
      q2 = $r(),
      L2 = $n(),
      t_ = dt(),
      P2 = pr();
    function D2(e, t, r, n) {
      if (!t_(e)) return e;
      t = q2(t, e);
      for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
        var c = P2(t[o]),
          h = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (o != a) {
          var I = s[c];
          (h = n ? n(I, c, s) : void 0),
            h === void 0 && (h = t_(I) ? I : L2(t[o + 1]) ? [] : {});
        }
        N2(s, c, h), (s = s[c]);
      }
      return e;
    }
    r_.exports = D2;
  });
  var o_ = u((RK, i_) => {
    var M2 = oi(),
      F2 = n_(),
      G2 = $r();
    function X2(e, t, r) {
      for (var n = -1, o = t.length, i = {}; ++n < o; ) {
        var a = t[n],
          s = M2(e, a);
        r(s, a) && F2(i, G2(a, e), s);
      }
      return i;
    }
    i_.exports = X2;
  });
  var s_ = u((xK, a_) => {
    var U2 = ya(),
      W2 = U2(Object.getPrototypeOf, Object);
    a_.exports = W2;
  });
  var c_ = u((CK, u_) => {
    var V2 = Yn(),
      k2 = s_(),
      B2 = Ea(),
      H2 = ga(),
      j2 = Object.getOwnPropertySymbols,
      K2 = j2
        ? function (e) {
            for (var t = []; e; ) V2(t, B2(e)), (e = k2(e));
            return t;
          }
        : H2;
    u_.exports = K2;
  });
  var f_ = u((NK, l_) => {
    function z2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    l_.exports = z2;
  });
  var p_ = u((qK, d_) => {
    var Y2 = dt(),
      Q2 = ei(),
      $2 = f_(),
      Z2 = Object.prototype,
      J2 = Z2.hasOwnProperty;
    function eG(e) {
      if (!Y2(e)) return $2(e);
      var t = Q2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !J2.call(e, n))) || r.push(n);
      return r;
    }
    d_.exports = eG;
  });
  var h_ = u((LK, v_) => {
    var tG = ma(),
      rG = p_(),
      nG = Ut();
    function iG(e) {
      return nG(e) ? tG(e, !0) : rG(e);
    }
    v_.exports = iG;
  });
  var E_ = u((PK, g_) => {
    var oG = ha(),
      aG = c_(),
      sG = h_();
    function uG(e) {
      return oG(e, sG, aG);
    }
    g_.exports = uG;
  });
  var m_ = u((DK, __) => {
    var cG = qa(),
      lG = St(),
      fG = o_(),
      dG = E_();
    function pG(e, t) {
      if (e == null) return {};
      var r = cG(dG(e), function (n) {
        return [n];
      });
      return (
        (t = lG(t)),
        fG(e, r, function (n, o) {
          return t(n, o[0]);
        })
      );
    }
    __.exports = pG;
  });
  var I_ = u((MK, y_) => {
    var vG = St(),
      hG = YE(),
      gG = m_();
    function EG(e, t) {
      return gG(e, hG(vG(t)));
    }
    y_.exports = EG;
  });
  var b_ = u((FK, T_) => {
    var _G = ti(),
      mG = ri(),
      yG = Hr(),
      IG = Le(),
      TG = Ut(),
      bG = Qn(),
      OG = ei(),
      wG = Jn(),
      AG = "[object Map]",
      SG = "[object Set]",
      RG = Object.prototype,
      xG = RG.hasOwnProperty;
    function CG(e) {
      if (e == null) return !0;
      if (
        TG(e) &&
        (IG(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          bG(e) ||
          wG(e) ||
          yG(e))
      )
        return !e.length;
      var t = mG(e);
      if (t == AG || t == SG) return !e.size;
      if (OG(e)) return !_G(e).length;
      for (var r in e) if (xG.call(e, r)) return !1;
      return !0;
    }
    T_.exports = CG;
  });
  var w_ = u((GK, O_) => {
    var NG = ns(),
      qG = Ba(),
      LG = St();
    function PG(e, t) {
      var r = {};
      return (
        (t = LG(t, 3)),
        qG(e, function (n, o, i) {
          NG(r, o, t(n, o, i));
        }),
        r
      );
    }
    O_.exports = PG;
  });
  var S_ = u((XK, A_) => {
    function DG(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    A_.exports = DG;
  });
  var x_ = u((UK, R_) => {
    var MG = si();
    function FG(e) {
      return typeof e == "function" ? e : MG;
    }
    R_.exports = FG;
  });
  var N_ = u((WK, C_) => {
    var GG = S_(),
      XG = Ha(),
      UG = x_(),
      WG = Le();
    function VG(e, t) {
      var r = WG(e) ? GG : XG;
      return r(e, UG(t));
    }
    C_.exports = VG;
  });
  var L_ = u((VK, q_) => {
    var kG = rt(),
      BG = function () {
        return kG.Date.now();
      };
    q_.exports = BG;
  });
  var M_ = u((kK, D_) => {
    var HG = dt(),
      is = L_(),
      P_ = ui(),
      jG = "Expected a function",
      KG = Math.max,
      zG = Math.min;
    function YG(e, t, r) {
      var n,
        o,
        i,
        a,
        s,
        c,
        h = 0,
        I = !1,
        d = !1,
        T = !0;
      if (typeof e != "function") throw new TypeError(jG);
      (t = P_(t) || 0),
        HG(r) &&
          ((I = !!r.leading),
          (d = "maxWait" in r),
          (i = d ? KG(P_(r.maxWait) || 0, t) : i),
          (T = "trailing" in r ? !!r.trailing : T));
      function E(W) {
        var K = n,
          J = o;
        return (n = o = void 0), (h = W), (a = e.apply(J, K)), a;
      }
      function y(W) {
        return (h = W), (s = setTimeout(x, t)), I ? E(W) : a;
      }
      function O(W) {
        var K = W - c,
          J = W - h,
          ee = t - K;
        return d ? zG(ee, i - J) : ee;
      }
      function C(W) {
        var K = W - c,
          J = W - h;
        return c === void 0 || K >= t || K < 0 || (d && J >= i);
      }
      function x() {
        var W = is();
        if (C(W)) return L(W);
        s = setTimeout(x, O(W));
      }
      function L(W) {
        return (s = void 0), T && n ? E(W) : ((n = o = void 0), a);
      }
      function S() {
        s !== void 0 && clearTimeout(s), (h = 0), (n = c = o = s = void 0);
      }
      function U() {
        return s === void 0 ? a : L(is());
      }
      function G() {
        var W = is(),
          K = C(W);
        if (((n = arguments), (o = this), (c = W), K)) {
          if (s === void 0) return y(c);
          if (d) return clearTimeout(s), (s = setTimeout(x, t)), E(c);
        }
        return s === void 0 && (s = setTimeout(x, t)), a;
      }
      return (G.cancel = S), (G.flush = U), G;
    }
    D_.exports = YG;
  });
  var G_ = u((BK, F_) => {
    var QG = M_(),
      $G = dt(),
      ZG = "Expected a function";
    function JG(e, t, r) {
      var n = !0,
        o = !0;
      if (typeof e != "function") throw new TypeError(ZG);
      return (
        $G(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (o = "trailing" in r ? !!r.trailing : o)),
        QG(e, t, { leading: n, maxWait: t, trailing: o })
      );
    }
    F_.exports = JG;
  });
  var Oi = u((fe) => {
    "use strict";
    var eX = ct().default;
    Object.defineProperty(fe, "__esModule", { value: !0 });
    fe.viewportWidthChanged =
      fe.testFrameRendered =
      fe.stopRequested =
      fe.sessionStopped =
      fe.sessionStarted =
      fe.sessionInitialized =
      fe.rawDataImported =
      fe.previewRequested =
      fe.playbackRequested =
      fe.parameterChanged =
      fe.mediaQueriesDefined =
      fe.instanceStarted =
      fe.instanceRemoved =
      fe.instanceAdded =
      fe.eventStateChanged =
      fe.eventListenerAdded =
      fe.elementStateChanged =
      fe.clearRequested =
      fe.animationFrameChanged =
      fe.actionListPlaybackChanged =
        void 0;
    var X_ = eX(Xr()),
      U_ = Be(),
      tX = jt(),
      {
        IX2_RAW_DATA_IMPORTED: rX,
        IX2_SESSION_INITIALIZED: nX,
        IX2_SESSION_STARTED: iX,
        IX2_SESSION_STOPPED: oX,
        IX2_PREVIEW_REQUESTED: aX,
        IX2_PLAYBACK_REQUESTED: sX,
        IX2_STOP_REQUESTED: uX,
        IX2_CLEAR_REQUESTED: cX,
        IX2_EVENT_LISTENER_ADDED: lX,
        IX2_TEST_FRAME_RENDERED: fX,
        IX2_EVENT_STATE_CHANGED: dX,
        IX2_ANIMATION_FRAME_CHANGED: pX,
        IX2_PARAMETER_CHANGED: vX,
        IX2_INSTANCE_ADDED: hX,
        IX2_INSTANCE_STARTED: gX,
        IX2_INSTANCE_REMOVED: EX,
        IX2_ELEMENT_STATE_CHANGED: _X,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: mX,
        IX2_VIEWPORT_WIDTH_CHANGED: yX,
        IX2_MEDIA_QUERIES_DEFINED: IX,
      } = U_.IX2EngineActionTypes,
      { reifyState: TX } = tX.IX2VanillaUtils,
      bX = (e) => ({ type: rX, payload: (0, X_.default)({}, TX(e)) });
    fe.rawDataImported = bX;
    var OX = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
      type: nX,
      payload: { hasBoundaryNodes: e, reducedMotion: t },
    });
    fe.sessionInitialized = OX;
    var wX = () => ({ type: iX });
    fe.sessionStarted = wX;
    var AX = () => ({ type: oX });
    fe.sessionStopped = AX;
    var SX = ({ rawData: e, defer: t }) => ({
      type: aX,
      payload: { defer: t, rawData: e },
    });
    fe.previewRequested = SX;
    var RX = ({
      actionTypeId: e = U_.ActionTypeConsts.GENERAL_START_ACTION,
      actionListId: t,
      actionItemId: r,
      eventId: n,
      allowEvents: o,
      immediate: i,
      testManual: a,
      verbose: s,
      rawData: c,
    }) => ({
      type: sX,
      payload: {
        actionTypeId: e,
        actionListId: t,
        actionItemId: r,
        testManual: a,
        eventId: n,
        allowEvents: o,
        immediate: i,
        verbose: s,
        rawData: c,
      },
    });
    fe.playbackRequested = RX;
    var xX = (e) => ({ type: uX, payload: { actionListId: e } });
    fe.stopRequested = xX;
    var CX = () => ({ type: cX });
    fe.clearRequested = CX;
    var NX = (e, t) => ({
      type: lX,
      payload: { target: e, listenerParams: t },
    });
    fe.eventListenerAdded = NX;
    var qX = (e = 1) => ({ type: fX, payload: { step: e } });
    fe.testFrameRendered = qX;
    var LX = (e, t) => ({ type: dX, payload: { stateKey: e, newState: t } });
    fe.eventStateChanged = LX;
    var PX = (e, t) => ({ type: pX, payload: { now: e, parameters: t } });
    fe.animationFrameChanged = PX;
    var DX = (e, t) => ({ type: vX, payload: { key: e, value: t } });
    fe.parameterChanged = DX;
    var MX = (e) => ({ type: hX, payload: (0, X_.default)({}, e) });
    fe.instanceAdded = MX;
    var FX = (e, t) => ({ type: gX, payload: { instanceId: e, time: t } });
    fe.instanceStarted = FX;
    var GX = (e) => ({ type: EX, payload: { instanceId: e } });
    fe.instanceRemoved = GX;
    var XX = (e, t, r, n) => ({
      type: _X,
      payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
    });
    fe.elementStateChanged = XX;
    var UX = ({ actionListId: e, isPlaying: t }) => ({
      type: mX,
      payload: { actionListId: e, isPlaying: t },
    });
    fe.actionListPlaybackChanged = UX;
    var WX = ({ width: e, mediaQueries: t }) => ({
      type: yX,
      payload: { width: e, mediaQueries: t },
    });
    fe.viewportWidthChanged = WX;
    var VX = () => ({ type: IX });
    fe.mediaQueriesDefined = VX;
  });
  var k_ = u((De) => {
    "use strict";
    Object.defineProperty(De, "__esModule", { value: !0 });
    De.elementContains = eU;
    De.getChildElements = rU;
    De.getClosestElement = void 0;
    De.getProperty = YX;
    De.getQuerySelector = $X;
    De.getRefType = oU;
    De.getSiblingElements = nU;
    De.getStyle = zX;
    De.getValidDocument = ZX;
    De.isSiblingNode = tU;
    De.matchSelector = QX;
    De.queryDocument = JX;
    De.setStyle = KX;
    var kX = jt(),
      BX = Be(),
      { ELEMENT_MATCHES: os } = kX.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: W_,
        HTML_ELEMENT: HX,
        PLAIN_OBJECT: jX,
        WF_PAGE: V_,
      } = BX.IX2EngineConstants;
    function KX(e, t, r) {
      e.style[t] = r;
    }
    function zX(e, t) {
      return e.style[t];
    }
    function YX(e, t) {
      return e[t];
    }
    function QX(e) {
      return (t) => t[os](e);
    }
    function $X({ id: e, selector: t }) {
      if (e) {
        let r = e;
        if (e.indexOf(W_) !== -1) {
          let n = e.split(W_),
            o = n[0];
          if (((r = n[1]), o !== document.documentElement.getAttribute(V_)))
            return null;
        }
        return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
      }
      return t;
    }
    function ZX(e) {
      return e == null || e === document.documentElement.getAttribute(V_)
        ? document
        : null;
    }
    function JX(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function eU(e, t) {
      return e.contains(t);
    }
    function tU(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function rU(e) {
      let t = [];
      for (let r = 0, { length: n } = e || []; r < n; r++) {
        let { children: o } = e[r],
          { length: i } = o;
        if (i) for (let a = 0; a < i; a++) t.push(o[a]);
      }
      return t;
    }
    function nU(e = []) {
      let t = [],
        r = [];
      for (let n = 0, { length: o } = e; n < o; n++) {
        let { parentNode: i } = e[n];
        if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
          continue;
        r.push(i);
        let a = i.firstElementChild;
        for (; a != null; )
          e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
      }
      return t;
    }
    var iU = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[os] && r[os](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    De.getClosestElement = iU;
    function oU(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? HX
          : jX
        : null;
    }
  });
  var as = u((KK, H_) => {
    var aU = dt(),
      B_ = Object.create,
      sU = (function () {
        function e() {}
        return function (t) {
          if (!aU(t)) return {};
          if (B_) return B_(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    H_.exports = sU;
  });
  var wi = u((zK, j_) => {
    function uU() {}
    j_.exports = uU;
  });
  var Si = u((YK, K_) => {
    var cU = as(),
      lU = wi();
    function Ai(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Ai.prototype = cU(lU.prototype);
    Ai.prototype.constructor = Ai;
    K_.exports = Ai;
  });
  var $_ = u((QK, Q_) => {
    var z_ = ar(),
      fU = Hr(),
      dU = Le(),
      Y_ = z_ ? z_.isConcatSpreadable : void 0;
    function pU(e) {
      return dU(e) || fU(e) || !!(Y_ && e && e[Y_]);
    }
    Q_.exports = pU;
  });
  var em = u(($K, J_) => {
    var vU = Yn(),
      hU = $_();
    function Z_(e, t, r, n, o) {
      var i = -1,
        a = e.length;
      for (r || (r = hU), o || (o = []); ++i < a; ) {
        var s = e[i];
        t > 0 && r(s)
          ? t > 1
            ? Z_(s, t - 1, r, n, o)
            : vU(o, s)
          : n || (o[o.length] = s);
      }
      return o;
    }
    J_.exports = Z_;
  });
  var rm = u((ZK, tm) => {
    var gU = em();
    function EU(e) {
      var t = e == null ? 0 : e.length;
      return t ? gU(e, 1) : [];
    }
    tm.exports = EU;
  });
  var im = u((JK, nm) => {
    function _U(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    nm.exports = _U;
  });
  var sm = u((ez, am) => {
    var mU = im(),
      om = Math.max;
    function yU(e, t, r) {
      return (
        (t = om(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, o = -1, i = om(n.length - t, 0), a = Array(i);
            ++o < i;

          )
            a[o] = n[t + o];
          o = -1;
          for (var s = Array(t + 1); ++o < t; ) s[o] = n[o];
          return (s[t] = r(a)), mU(e, this, s);
        }
      );
    }
    am.exports = yU;
  });
  var cm = u((tz, um) => {
    function IU(e) {
      return function () {
        return e;
      };
    }
    um.exports = IU;
  });
  var dm = u((rz, fm) => {
    var TU = cm(),
      lm = rs(),
      bU = si(),
      OU = lm
        ? function (e, t) {
            return lm(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: TU(t),
              writable: !0,
            });
          }
        : bU;
    fm.exports = OU;
  });
  var vm = u((nz, pm) => {
    var wU = 800,
      AU = 16,
      SU = Date.now;
    function RU(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = SU(),
          o = AU - (n - r);
        if (((r = n), o > 0)) {
          if (++t >= wU) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    pm.exports = RU;
  });
  var gm = u((iz, hm) => {
    var xU = dm(),
      CU = vm(),
      NU = CU(xU);
    hm.exports = NU;
  });
  var _m = u((oz, Em) => {
    var qU = rm(),
      LU = sm(),
      PU = gm();
    function DU(e) {
      return PU(LU(e, void 0, qU), e + "");
    }
    Em.exports = DU;
  });
  var Im = u((az, ym) => {
    var mm = Ia(),
      MU = mm && new mm();
    ym.exports = MU;
  });
  var bm = u((sz, Tm) => {
    function FU() {}
    Tm.exports = FU;
  });
  var ss = u((uz, wm) => {
    var Om = Im(),
      GU = bm(),
      XU = Om
        ? function (e) {
            return Om.get(e);
          }
        : GU;
    wm.exports = XU;
  });
  var Sm = u((cz, Am) => {
    var UU = {};
    Am.exports = UU;
  });
  var us = u((lz, xm) => {
    var Rm = Sm(),
      WU = Object.prototype,
      VU = WU.hasOwnProperty;
    function kU(e) {
      for (
        var t = e.name + "", r = Rm[t], n = VU.call(Rm, t) ? r.length : 0;
        n--;

      ) {
        var o = r[n],
          i = o.func;
        if (i == null || i == e) return o.name;
      }
      return t;
    }
    xm.exports = kU;
  });
  var xi = u((fz, Cm) => {
    var BU = as(),
      HU = wi(),
      jU = 4294967295;
    function Ri(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = jU),
        (this.__views__ = []);
    }
    Ri.prototype = BU(HU.prototype);
    Ri.prototype.constructor = Ri;
    Cm.exports = Ri;
  });
  var qm = u((dz, Nm) => {
    function KU(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    Nm.exports = KU;
  });
  var Pm = u((pz, Lm) => {
    var zU = xi(),
      YU = Si(),
      QU = qm();
    function $U(e) {
      if (e instanceof zU) return e.clone();
      var t = new YU(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = QU(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    Lm.exports = $U;
  });
  var Fm = u((vz, Mm) => {
    var ZU = xi(),
      Dm = Si(),
      JU = wi(),
      eW = Le(),
      tW = At(),
      rW = Pm(),
      nW = Object.prototype,
      iW = nW.hasOwnProperty;
    function Ci(e) {
      if (tW(e) && !eW(e) && !(e instanceof ZU)) {
        if (e instanceof Dm) return e;
        if (iW.call(e, "__wrapped__")) return rW(e);
      }
      return new Dm(e);
    }
    Ci.prototype = JU.prototype;
    Ci.prototype.constructor = Ci;
    Mm.exports = Ci;
  });
  var Xm = u((hz, Gm) => {
    var oW = xi(),
      aW = ss(),
      sW = us(),
      uW = Fm();
    function cW(e) {
      var t = sW(e),
        r = uW[t];
      if (typeof r != "function" || !(t in oW.prototype)) return !1;
      if (e === r) return !0;
      var n = aW(r);
      return !!n && e === n[0];
    }
    Gm.exports = cW;
  });
  var km = u((gz, Vm) => {
    var Um = Si(),
      lW = _m(),
      fW = ss(),
      cs = us(),
      dW = Le(),
      Wm = Xm(),
      pW = "Expected a function",
      vW = 8,
      hW = 32,
      gW = 128,
      EW = 256;
    function _W(e) {
      return lW(function (t) {
        var r = t.length,
          n = r,
          o = Um.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var i = t[n];
          if (typeof i != "function") throw new TypeError(pW);
          if (o && !a && cs(i) == "wrapper") var a = new Um([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          i = t[n];
          var s = cs(i),
            c = s == "wrapper" ? fW(i) : void 0;
          c &&
          Wm(c[0]) &&
          c[1] == (gW | vW | hW | EW) &&
          !c[4].length &&
          c[9] == 1
            ? (a = a[cs(c[0])].apply(a, c[3]))
            : (a = i.length == 1 && Wm(i) ? a[s]() : a.thru(i));
        }
        return function () {
          var h = arguments,
            I = h[0];
          if (a && h.length == 1 && dW(I)) return a.plant(I).value();
          for (var d = 0, T = r ? t[d].apply(this, h) : I; ++d < r; )
            T = t[d].call(this, T);
          return T;
        };
      });
    }
    Vm.exports = _W;
  });
  var Hm = u((Ez, Bm) => {
    var mW = km(),
      yW = mW();
    Bm.exports = yW;
  });
  var Km = u((_z, jm) => {
    function IW(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    jm.exports = IW;
  });
  var Ym = u((mz, zm) => {
    var TW = Km(),
      ls = ui();
    function bW(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ls(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ls(t)), (t = t === t ? t : 0)),
        TW(ls(e), t, r)
      );
    }
    zm.exports = bW;
  });
  var py = u((Di) => {
    "use strict";
    var Pi = ct().default;
    Object.defineProperty(Di, "__esModule", { value: !0 });
    Di.default = void 0;
    var ze = Pi(Xr()),
      OW = Pi(Hm()),
      wW = Pi(ai()),
      AW = Pi(Ym()),
      Kt = Be(),
      fs = hs(),
      Ni = Oi(),
      SW = jt(),
      {
        MOUSE_CLICK: RW,
        MOUSE_SECOND_CLICK: xW,
        MOUSE_DOWN: CW,
        MOUSE_UP: NW,
        MOUSE_OVER: qW,
        MOUSE_OUT: LW,
        DROPDOWN_CLOSE: PW,
        DROPDOWN_OPEN: DW,
        SLIDER_ACTIVE: MW,
        SLIDER_INACTIVE: FW,
        TAB_ACTIVE: GW,
        TAB_INACTIVE: XW,
        NAVBAR_CLOSE: UW,
        NAVBAR_OPEN: WW,
        MOUSE_MOVE: VW,
        PAGE_SCROLL_DOWN: iy,
        SCROLL_INTO_VIEW: oy,
        SCROLL_OUT_OF_VIEW: kW,
        PAGE_SCROLL_UP: BW,
        SCROLLING_IN_VIEW: HW,
        PAGE_FINISH: ay,
        ECOMMERCE_CART_CLOSE: jW,
        ECOMMERCE_CART_OPEN: KW,
        PAGE_START: sy,
        PAGE_SCROLL: zW,
      } = Kt.EventTypeConsts,
      ds = "COMPONENT_ACTIVE",
      uy = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: Qm } = Kt.IX2EngineConstants,
      { getNamespacedParameterId: $m } = SW.IX2VanillaUtils,
      cy = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      cn = cy(({ element: e, nativeEvent: t }) => e === t.target),
      YW = cy(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      gt = (0, OW.default)([cn, YW]),
      ly = (e, t) => {
        if (t) {
          let { ixData: r } = e.getState(),
            { events: n } = r,
            o = n[t];
          if (o && !$W[o.eventTypeId]) return o;
        }
        return null;
      },
      QW = ({ store: e, event: t }) => {
        let { action: r } = t,
          { autoStopEventId: n } = r.config;
        return !!ly(e, n);
      },
      je = ({ store: e, event: t, element: r, eventStateKey: n }, o) => {
        let { action: i, id: a } = t,
          { actionListId: s, autoStopEventId: c } = i.config,
          h = ly(e, c);
        return (
          h &&
            (0, fs.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: r,
              eventStateKey: c + Qm + n.split(Qm)[1],
              actionListId: (0, wW.default)(h, "action.config.actionListId"),
            }),
          (0, fs.stopActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          (0, fs.startActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          o
        );
      },
      nt = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      ln = { handler: nt(gt, je) },
      fy = (0, ze.default)({}, ln, { types: [ds, uy].join(" ") }),
      ps = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      Zm = "mouseover mouseout",
      vs = { types: ps },
      $W = { PAGE_START: sy, PAGE_FINISH: ay },
      un = (() => {
        let e = window.pageXOffset !== void 0,
          r =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, AW.default)(
            e ? window.pageYOffset : r.scrollTop,
            0,
            r.scrollHeight - window.innerHeight
          ),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      ZW = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      JW = ({ element: e, nativeEvent: t }) => {
        let { type: r, target: n, relatedTarget: o } = t,
          i = e.contains(n);
        if (r === "mouseover" && i) return !0;
        let a = e.contains(o);
        return !!(r === "mouseout" && i && a);
      },
      eV = (e) => {
        let {
            element: t,
            event: { config: r },
          } = e,
          { clientWidth: n, clientHeight: o } = un(),
          i = r.scrollOffsetValue,
          c = r.scrollOffsetUnit === "PX" ? i : (o * (i || 0)) / 100;
        return ZW(t.getBoundingClientRect(), {
          left: 0,
          top: c,
          right: n,
          bottom: o - c,
        });
      },
      dy = (e) => (t, r) => {
        let { type: n } = t.nativeEvent,
          o = [ds, uy].indexOf(n) !== -1 ? n === ds : r.isActive,
          i = (0, ze.default)({}, r, { isActive: o });
        return ((!r || i.isActive !== r.isActive) && e(t, i)) || i;
      },
      Jm = (e) => (t, r) => {
        let n = { elementHovered: JW(t) };
        return (
          ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
            e(t, n)) ||
          n
        );
      },
      tV = (e) => (t, r) => {
        let n = (0, ze.default)({}, r, { elementVisible: eV(t) });
        return (
          ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
            e(t, n)) ||
          n
        );
      },
      ey =
        (e) =>
        (t, r = {}) => {
          let { stiffScrollTop: n, scrollHeight: o, innerHeight: i } = un(),
            {
              event: { config: a, eventTypeId: s },
            } = t,
            { scrollOffsetValue: c, scrollOffsetUnit: h } = a,
            I = h === "PX",
            d = o - i,
            T = Number((n / d).toFixed(2));
          if (r && r.percentTop === T) return r;
          let E = (I ? c : (i * (c || 0)) / 100) / d,
            y,
            O,
            C = 0;
          r &&
            ((y = T > r.percentTop),
            (O = r.scrollingDown !== y),
            (C = O ? T : r.anchorTop));
          let x = s === iy ? T >= C + E : T <= C - E,
            L = (0, ze.default)({}, r, {
              percentTop: T,
              inBounds: x,
              anchorTop: C,
              scrollingDown: y,
            });
          return (r && x && (O || L.inBounds !== r.inBounds) && e(t, L)) || L;
        },
      rV = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      nV = (e) => (t, r) => {
        let n = { finished: document.readyState === "complete" };
        return n.finished && !(r && r.finshed) && e(t), n;
      },
      iV = (e) => (t, r) => {
        let n = { started: !0 };
        return r || e(t), n;
      },
      ty =
        (e) =>
        (t, r = { clickCount: 0 }) => {
          let n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && e(t, n)) || n;
        },
      qi = (e = !0) =>
        (0, ze.default)({}, fy, {
          handler: nt(
            e ? gt : cn,
            dy((t, r) => (r.isActive ? ln.handler(t, r) : r))
          ),
        }),
      Li = (e = !0) =>
        (0, ze.default)({}, fy, {
          handler: nt(
            e ? gt : cn,
            dy((t, r) => (r.isActive ? r : ln.handler(t, r)))
          ),
        }),
      ry = (0, ze.default)({}, vs, {
        handler: tV((e, t) => {
          let { elementVisible: r } = t,
            { event: n, store: o } = e,
            { ixData: i } = o.getState(),
            { events: a } = i;
          return !a[n.action.config.autoStopEventId] && t.triggered
            ? t
            : (n.eventTypeId === oy) === r
            ? (je(e), (0, ze.default)({}, t, { triggered: !0 }))
            : t;
        }),
      }),
      ny = 0.05,
      oV = {
        [MW]: qi(),
        [FW]: Li(),
        [DW]: qi(),
        [PW]: Li(),
        [WW]: qi(!1),
        [UW]: Li(!1),
        [GW]: qi(),
        [XW]: Li(),
        [KW]: { types: "ecommerce-cart-open", handler: nt(gt, je) },
        [jW]: { types: "ecommerce-cart-close", handler: nt(gt, je) },
        [RW]: {
          types: "click",
          handler: nt(
            gt,
            ty((e, { clickCount: t }) => {
              QW(e) ? t === 1 && je(e) : je(e);
            })
          ),
        },
        [xW]: {
          types: "click",
          handler: nt(
            gt,
            ty((e, { clickCount: t }) => {
              t === 2 && je(e);
            })
          ),
        },
        [CW]: (0, ze.default)({}, ln, { types: "mousedown" }),
        [NW]: (0, ze.default)({}, ln, { types: "mouseup" }),
        [qW]: {
          types: Zm,
          handler: nt(
            gt,
            Jm((e, t) => {
              t.elementHovered && je(e);
            })
          ),
        },
        [LW]: {
          types: Zm,
          handler: nt(
            gt,
            Jm((e, t) => {
              t.elementHovered || je(e);
            })
          ),
        },
        [VW]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: r,
              nativeEvent: n,
              eventStateKey: o,
            },
            i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: a,
                selectedAxis: s,
                continuousParameterGroupId: c,
                reverse: h,
                restingState: I = 0,
              } = r,
              {
                clientX: d = i.clientX,
                clientY: T = i.clientY,
                pageX: E = i.pageX,
                pageY: y = i.pageY,
              } = n,
              O = s === "X_AXIS",
              C = n.type === "mouseout",
              x = I / 100,
              L = c,
              S = !1;
            switch (a) {
              case Kt.EventBasedOn.VIEWPORT: {
                x = O
                  ? Math.min(d, window.innerWidth) / window.innerWidth
                  : Math.min(T, window.innerHeight) / window.innerHeight;
                break;
              }
              case Kt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: U,
                  scrollTop: G,
                  scrollWidth: W,
                  scrollHeight: K,
                } = un();
                x = O ? Math.min(U + E, W) / W : Math.min(G + y, K) / K;
                break;
              }
              case Kt.EventBasedOn.ELEMENT:
              default: {
                L = $m(o, c);
                let U = n.type.indexOf("mouse") === 0;
                if (U && gt({ element: t, nativeEvent: n }) !== !0) break;
                let G = t.getBoundingClientRect(),
                  { left: W, top: K, width: J, height: ee } = G;
                if (!U && !rV({ left: d, top: T }, G)) break;
                (S = !0), (x = O ? (d - W) / J : (T - K) / ee);
                break;
              }
            }
            return (
              C && (x > 1 - ny || x < ny) && (x = Math.round(x)),
              (a !== Kt.EventBasedOn.ELEMENT || S || S !== i.elementHovered) &&
                ((x = h ? 1 - x : x),
                e.dispatch((0, Ni.parameterChanged)(L, x))),
              { elementHovered: S, clientX: d, clientY: T, pageX: E, pageY: y }
            );
          },
        },
        [zW]: {
          types: ps,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: r, reverse: n } = t,
              { scrollTop: o, scrollHeight: i, clientHeight: a } = un(),
              s = o / (i - a);
            (s = n ? 1 - s : s), e.dispatch((0, Ni.parameterChanged)(r, s));
          },
        },
        [HW]: {
          types: ps,
          handler: (
            { element: e, store: t, eventConfig: r, eventStateKey: n },
            o = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: i,
                scrollTop: a,
                scrollWidth: s,
                scrollHeight: c,
                clientHeight: h,
              } = un(),
              {
                basedOn: I,
                selectedAxis: d,
                continuousParameterGroupId: T,
                startsEntering: E,
                startsExiting: y,
                addEndOffset: O,
                addStartOffset: C,
                addOffsetValue: x = 0,
                endOffsetValue: L = 0,
              } = r,
              S = d === "X_AXIS";
            if (I === Kt.EventBasedOn.VIEWPORT) {
              let U = S ? i / s : a / c;
              return (
                U !== o.scrollPercent &&
                  t.dispatch((0, Ni.parameterChanged)(T, U)),
                { scrollPercent: U }
              );
            } else {
              let U = $m(n, T),
                G = e.getBoundingClientRect(),
                W = (C ? x : 0) / 100,
                K = (O ? L : 0) / 100;
              (W = E ? W : 1 - W), (K = y ? K : 1 - K);
              let J = G.top + Math.min(G.height * W, h),
                oe = G.top + G.height * K - J,
                z = Math.min(h + oe, c),
                m = Math.min(Math.max(0, h - J), z) / z;
              return (
                m !== o.scrollPercent &&
                  t.dispatch((0, Ni.parameterChanged)(U, m)),
                { scrollPercent: m }
              );
            }
          },
        },
        [oy]: ry,
        [kW]: ry,
        [iy]: (0, ze.default)({}, vs, {
          handler: ey((e, t) => {
            t.scrollingDown && je(e);
          }),
        }),
        [BW]: (0, ze.default)({}, vs, {
          handler: ey((e, t) => {
            t.scrollingDown || je(e);
          }),
        }),
        [ay]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: nt(cn, nV(je)),
        },
        [sy]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: nt(cn, iV(je)),
        },
      };
    Di.default = oV;
  });
  var hs = u((Nt) => {
    "use strict";
    var ot = ct().default,
      aV = $t().default;
    Object.defineProperty(Nt, "__esModule", { value: !0 });
    Nt.observeRequests = DV;
    Nt.startActionGroup = Ts;
    Nt.startEngine = Xi;
    Nt.stopActionGroup = Is;
    Nt.stopAllActionGroups = Ty;
    Nt.stopEngine = Ui;
    var sV = ot(Xr()),
      uV = ot(RE()),
      cV = ot(Fa()),
      Ct = ot(ai()),
      lV = ot(KE()),
      fV = ot(I_()),
      dV = ot(b_()),
      pV = ot(w_()),
      fn = ot(N_()),
      vV = ot(G_()),
      it = Be(),
      gy = jt(),
      Oe = Oi(),
      Re = aV(k_()),
      hV = ot(py()),
      gV = ["store", "computedStyle"],
      EV = Object.keys(it.QuickEffectIds),
      gs = (e) => EV.includes(e),
      {
        COLON_DELIMITER: Es,
        BOUNDARY_SELECTOR: Mi,
        HTML_ELEMENT: Ey,
        RENDER_GENERAL: _V,
        W_MOD_IX: vy,
      } = it.IX2EngineConstants,
      {
        getAffectedElements: Fi,
        getElementId: mV,
        getDestinationValues: _s,
        observeStore: zt,
        getInstanceId: yV,
        renderHTMLElement: IV,
        clearAllStyles: _y,
        getMaxDurationItemIndex: TV,
        getComputedStyle: bV,
        getInstanceOrigin: OV,
        reduceListToGroup: wV,
        shouldNamespaceEventParameter: AV,
        getNamespacedParameterId: SV,
        shouldAllowMediaQuery: Gi,
        cleanupHTMLElement: RV,
        stringifyTarget: xV,
        mediaQueriesEqual: CV,
        shallowEqual: NV,
      } = gy.IX2VanillaUtils,
      {
        isPluginType: ms,
        createPluginInstance: ys,
        getPluginDuration: qV,
      } = gy.IX2VanillaPlugins,
      hy = navigator.userAgent,
      LV = hy.match(/iPad/i) || hy.match(/iPhone/),
      PV = 12;
    function DV(e) {
      zt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: GV }),
        zt({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: XV,
        }),
        zt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: UV }),
        zt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: WV });
    }
    function MV(e) {
      zt({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          Ui(e),
            _y({ store: e, elementApi: Re }),
            Xi({ store: e, allowEvents: !0 }),
            my();
        },
      });
    }
    function FV(e, t) {
      let r = zt({
        store: e,
        select: ({ ixSession: n }) => n.tick,
        onChange: (n) => {
          t(n), r();
        },
      });
    }
    function GV({ rawData: e, defer: t }, r) {
      let n = () => {
        Xi({ store: r, rawData: e, allowEvents: !0 }), my();
      };
      t ? setTimeout(n, 0) : n();
    }
    function my() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function XV(e, t) {
      let {
          actionTypeId: r,
          actionListId: n,
          actionItemId: o,
          eventId: i,
          allowEvents: a,
          immediate: s,
          testManual: c,
          verbose: h = !0,
        } = e,
        { rawData: I } = e;
      if (n && o && I && s) {
        let d = I.actionLists[n];
        d && (I = wV({ actionList: d, actionItemId: o, rawData: I }));
      }
      if (
        (Xi({ store: t, rawData: I, allowEvents: a, testManual: c }),
        (n && r === it.ActionTypeConsts.GENERAL_START_ACTION) || gs(r))
      ) {
        Is({ store: t, actionListId: n }),
          Iy({ store: t, actionListId: n, eventId: i });
        let d = Ts({
          store: t,
          eventId: i,
          actionListId: n,
          immediate: s,
          verbose: h,
        });
        h &&
          d &&
          t.dispatch(
            (0, Oe.actionListPlaybackChanged)({
              actionListId: n,
              isPlaying: !s,
            })
          );
      }
    }
    function UV({ actionListId: e }, t) {
      e ? Is({ store: t, actionListId: e }) : Ty({ store: t }), Ui(t);
    }
    function WV(e, t) {
      Ui(t), _y({ store: t, elementApi: Re });
    }
    function Xi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
      let { ixSession: o } = e.getState();
      t && e.dispatch((0, Oe.rawDataImported)(t)),
        o.active ||
          (e.dispatch(
            (0, Oe.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(Mi),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          r &&
            (KV(e),
            VV(),
            e.getState().ixSession.hasDefinedMediaQueries && MV(e)),
          e.dispatch((0, Oe.sessionStarted)()),
          kV(e, n));
    }
    function VV() {
      let { documentElement: e } = document;
      e.className.indexOf(vy) === -1 && (e.className += ` ${vy}`);
    }
    function kV(e, t) {
      let r = (n) => {
        let { ixSession: o, ixParameters: i } = e.getState();
        o.active &&
          (e.dispatch((0, Oe.animationFrameChanged)(n, i)),
          t ? FV(e, r) : requestAnimationFrame(r));
      };
      r(window.performance.now());
    }
    function Ui(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: r } = t;
        r.forEach(BV), e.dispatch((0, Oe.sessionStopped)());
      }
    }
    function BV({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function HV({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: o,
      actionListId: i,
      parameterGroup: a,
      smoothing: s,
      restingValue: c,
    }) {
      let { ixData: h, ixSession: I } = e.getState(),
        { events: d } = h,
        T = d[n],
        { eventTypeId: E } = T,
        y = {},
        O = {},
        C = [],
        { continuousActionGroups: x } = a,
        { id: L } = a;
      AV(E, o) && (L = SV(t, L));
      let S = I.hasBoundaryNodes && r ? Re.getClosestElement(r, Mi) : null;
      x.forEach((U) => {
        let { keyframe: G, actionItems: W } = U;
        W.forEach((K) => {
          let { actionTypeId: J } = K,
            { target: ee } = K.config;
          if (!ee) return;
          let oe = ee.boundaryMode ? S : null,
            z = xV(ee) + Es + J;
          if (((O[z] = jV(O[z], G, K)), !y[z])) {
            y[z] = !0;
            let { config: q } = K;
            Fi({
              config: q,
              event: T,
              eventTarget: r,
              elementRoot: oe,
              elementApi: Re,
            }).forEach((m) => {
              C.push({ element: m, key: z });
            });
          }
        });
      }),
        C.forEach(({ element: U, key: G }) => {
          let W = O[G],
            K = (0, Ct.default)(W, "[0].actionItems[0]", {}),
            { actionTypeId: J } = K,
            ee = ms(J) ? ys(J)(U, K) : null,
            oe = _s({ element: U, actionItem: K, elementApi: Re }, ee);
          bs({
            store: e,
            element: U,
            eventId: n,
            actionListId: i,
            actionItem: K,
            destination: oe,
            continuous: !0,
            parameterId: L,
            actionGroups: W,
            smoothing: s,
            restingValue: c,
            pluginInstance: ee,
          });
        });
    }
    function jV(e = [], t, r) {
      let n = [...e],
        o;
      return (
        n.some((i, a) => (i.keyframe === t ? ((o = a), !0) : !1)),
        o == null && ((o = n.length), n.push({ keyframe: t, actionItems: [] })),
        n[o].actionItems.push(r),
        n
      );
    }
    function KV(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: r } = t;
      yy(e),
        (0, fn.default)(r, (o, i) => {
          let a = hV.default[i];
          if (!a) {
            console.warn(`IX2 event type not configured: ${i}`);
            return;
          }
          JV({ logic: a, store: e, events: o });
        });
      let { ixSession: n } = e.getState();
      n.eventListeners.length && YV(e);
    }
    var zV = ["resize", "orientationchange"];
    function YV(e) {
      let t = () => {
        yy(e);
      };
      zV.forEach((r) => {
        window.addEventListener(r, t),
          e.dispatch((0, Oe.eventListenerAdded)(window, [r, t]));
      }),
        t();
    }
    function yy(e) {
      let { ixSession: t, ixData: r } = e.getState(),
        n = window.innerWidth;
      if (n !== t.viewportWidth) {
        let { mediaQueries: o } = r;
        e.dispatch((0, Oe.viewportWidthChanged)({ width: n, mediaQueries: o }));
      }
    }
    var QV = (e, t) => (0, fV.default)((0, pV.default)(e, t), dV.default),
      $V = (e, t) => {
        (0, fn.default)(e, (r, n) => {
          r.forEach((o, i) => {
            let a = n + Es + i;
            t(o, n, a);
          });
        });
      },
      ZV = (e) => {
        let t = { target: e.target, targets: e.targets };
        return Fi({ config: t, elementApi: Re });
      };
    function JV({ logic: e, store: t, events: r }) {
      ek(r);
      let { types: n, handler: o } = e,
        { ixData: i } = t.getState(),
        { actionLists: a } = i,
        s = QV(r, ZV);
      if (!(0, lV.default)(s)) return;
      (0, fn.default)(s, (d, T) => {
        let E = r[T],
          { action: y, id: O, mediaQueries: C = i.mediaQueryKeys } = E,
          { actionListId: x } = y.config;
        CV(C, i.mediaQueryKeys) || t.dispatch((0, Oe.mediaQueriesDefined)()),
          y.actionTypeId === it.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(E.config) ? E.config : [E.config]).forEach((S) => {
              let { continuousParameterGroupId: U } = S,
                G = (0, Ct.default)(a, `${x}.continuousParameterGroups`, []),
                W = (0, cV.default)(G, ({ id: ee }) => ee === U),
                K = (S.smoothing || 0) / 100,
                J = (S.restingState || 0) / 100;
              W &&
                d.forEach((ee, oe) => {
                  let z = O + Es + oe;
                  HV({
                    store: t,
                    eventStateKey: z,
                    eventTarget: ee,
                    eventId: O,
                    eventConfig: S,
                    actionListId: x,
                    parameterGroup: W,
                    smoothing: K,
                    restingValue: J,
                  });
                });
            }),
          (y.actionTypeId === it.ActionTypeConsts.GENERAL_START_ACTION ||
            gs(y.actionTypeId)) &&
            Iy({ store: t, actionListId: x, eventId: O });
      });
      let c = (d) => {
          let { ixSession: T } = t.getState();
          $V(s, (E, y, O) => {
            let C = r[y],
              x = T.eventState[O],
              { action: L, mediaQueries: S = i.mediaQueryKeys } = C;
            if (!Gi(S, T.mediaQueryKey)) return;
            let U = (G = {}) => {
              let W = o(
                {
                  store: t,
                  element: E,
                  event: C,
                  eventConfig: G,
                  nativeEvent: d,
                  eventStateKey: O,
                },
                x
              );
              NV(W, x) || t.dispatch((0, Oe.eventStateChanged)(O, W));
            };
            L.actionTypeId === it.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(C.config) ? C.config : [C.config]).forEach(U)
              : U();
          });
        },
        h = (0, vV.default)(c, PV),
        I = ({ target: d = document, types: T, throttle: E }) => {
          T.split(" ")
            .filter(Boolean)
            .forEach((y) => {
              let O = E ? h : c;
              d.addEventListener(y, O),
                t.dispatch((0, Oe.eventListenerAdded)(d, [y, O]));
            });
        };
      Array.isArray(n) ? n.forEach(I) : typeof n == "string" && I(e);
    }
    function ek(e) {
      if (!LV) return;
      let t = {},
        r = "";
      for (let n in e) {
        let { eventTypeId: o, target: i } = e[n],
          a = Re.getQuerySelector(i);
        t[a] ||
          ((o === it.EventTypeConsts.MOUSE_CLICK ||
            o === it.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[a] = !0),
            (r += a + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (r) {
        let n = document.createElement("style");
        (n.textContent = r), document.body.appendChild(n);
      }
    }
    function Iy({ store: e, actionListId: t, eventId: r }) {
      let { ixData: n, ixSession: o } = e.getState(),
        { actionLists: i, events: a } = n,
        s = a[r],
        c = i[t];
      if (c && c.useFirstGroupAsInitialState) {
        let h = (0, Ct.default)(c, "actionItemGroups[0].actionItems", []),
          I = (0, Ct.default)(s, "mediaQueries", n.mediaQueryKeys);
        if (!Gi(I, o.mediaQueryKey)) return;
        h.forEach((d) => {
          var T;
          let { config: E, actionTypeId: y } = d,
            O =
              (E == null || (T = E.target) === null || T === void 0
                ? void 0
                : T.useEventTarget) === !0
                ? { target: s.target, targets: s.targets }
                : E,
            C = Fi({ config: O, event: s, elementApi: Re }),
            x = ms(y);
          C.forEach((L) => {
            let S = x ? ys(y)(L, d) : null;
            bs({
              destination: _s({ element: L, actionItem: d, elementApi: Re }, S),
              immediate: !0,
              store: e,
              element: L,
              eventId: r,
              actionItem: d,
              actionListId: t,
              pluginInstance: S,
            });
          });
        });
      }
    }
    function Ty({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, fn.default)(t, (r) => {
        if (!r.continuous) {
          let { actionListId: n, verbose: o } = r;
          Os(r, e),
            o &&
              e.dispatch(
                (0, Oe.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Is({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: o,
    }) {
      let { ixInstances: i, ixSession: a } = e.getState(),
        s = a.hasBoundaryNodes && r ? Re.getClosestElement(r, Mi) : null;
      (0, fn.default)(i, (c) => {
        let h = (0, Ct.default)(c, "actionItem.config.target.boundaryMode"),
          I = n ? c.eventStateKey === n : !0;
        if (c.actionListId === o && c.eventId === t && I) {
          if (s && h && !Re.elementContains(s, c.element)) return;
          Os(c, e),
            c.verbose &&
              e.dispatch(
                (0, Oe.actionListPlaybackChanged)({
                  actionListId: o,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Ts({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: o,
      groupIndex: i = 0,
      immediate: a,
      verbose: s,
    }) {
      var c;
      let { ixData: h, ixSession: I } = e.getState(),
        { events: d } = h,
        T = d[t] || {},
        { mediaQueries: E = h.mediaQueryKeys } = T,
        y = (0, Ct.default)(h, `actionLists.${o}`, {}),
        { actionItemGroups: O, useFirstGroupAsInitialState: C } = y;
      if (!O || !O.length) return !1;
      i >= O.length && (0, Ct.default)(T, "config.loop") && (i = 0),
        i === 0 && C && i++;
      let L =
          (i === 0 || (i === 1 && C)) &&
          gs((c = T.action) === null || c === void 0 ? void 0 : c.actionTypeId)
            ? T.config.delay
            : void 0,
        S = (0, Ct.default)(O, [i, "actionItems"], []);
      if (!S.length || !Gi(E, I.mediaQueryKey)) return !1;
      let U = I.hasBoundaryNodes && r ? Re.getClosestElement(r, Mi) : null,
        G = TV(S),
        W = !1;
      return (
        S.forEach((K, J) => {
          let { config: ee, actionTypeId: oe } = K,
            z = ms(oe),
            { target: q } = ee;
          if (!q) return;
          let m = q.boundaryMode ? U : null;
          Fi({
            config: ee,
            event: T,
            eventTarget: r,
            elementRoot: m,
            elementApi: Re,
          }).forEach((N, B) => {
            let P = z ? ys(oe)(N, K) : null,
              H = z ? qV(oe)(N, K) : null;
            W = !0;
            let w = G === J && B === 0,
              k = bV({ element: N, actionItem: K }),
              v = _s({ element: N, actionItem: K, elementApi: Re }, P);
            bs({
              store: e,
              element: N,
              actionItem: K,
              eventId: t,
              eventTarget: r,
              eventStateKey: n,
              actionListId: o,
              groupIndex: i,
              isCarrier: w,
              computedStyle: k,
              destination: v,
              immediate: a,
              verbose: s,
              pluginInstance: P,
              pluginDuration: H,
              instanceDelay: L,
            });
          });
        }),
        W
      );
    }
    function bs(e) {
      var t;
      let { store: r, computedStyle: n } = e,
        o = (0, uV.default)(e, gV),
        {
          element: i,
          actionItem: a,
          immediate: s,
          pluginInstance: c,
          continuous: h,
          restingValue: I,
          eventId: d,
        } = o,
        T = !h,
        E = yV(),
        { ixElements: y, ixSession: O, ixData: C } = r.getState(),
        x = mV(y, i),
        { refState: L } = y[x] || {},
        S = Re.getRefType(i),
        U = O.reducedMotion && it.ReducedMotionTypes[a.actionTypeId],
        G;
      if (U && h)
        switch (
          (t = C.events[d]) === null || t === void 0 ? void 0 : t.eventTypeId
        ) {
          case it.EventTypeConsts.MOUSE_MOVE:
          case it.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            G = I;
            break;
          default:
            G = 0.5;
            break;
        }
      let W = OV(i, L, n, a, Re, c);
      if (
        (r.dispatch(
          (0, Oe.instanceAdded)(
            (0, sV.default)(
              {
                instanceId: E,
                elementId: x,
                origin: W,
                refType: S,
                skipMotion: U,
                skipToValue: G,
              },
              o
            )
          )
        ),
        by(document.body, "ix2-animation-started", E),
        s)
      ) {
        tk(r, E);
        return;
      }
      zt({ store: r, select: ({ ixInstances: K }) => K[E], onChange: Oy }),
        T && r.dispatch((0, Oe.instanceStarted)(E, O.tick));
    }
    function Os(e, t) {
      by(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: r, actionItem: n } = e,
        { ixElements: o } = t.getState(),
        { ref: i, refType: a } = o[r] || {};
      a === Ey && RV(i, n, Re), t.dispatch((0, Oe.instanceRemoved)(e.id));
    }
    function by(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    }
    function tk(e, t) {
      let { ixParameters: r } = e.getState();
      e.dispatch((0, Oe.instanceStarted)(t, 0)),
        e.dispatch((0, Oe.animationFrameChanged)(performance.now(), r));
      let { ixInstances: n } = e.getState();
      Oy(n[t], e);
    }
    function Oy(e, t) {
      let {
          active: r,
          continuous: n,
          complete: o,
          elementId: i,
          actionItem: a,
          actionTypeId: s,
          renderType: c,
          current: h,
          groupIndex: I,
          eventId: d,
          eventTarget: T,
          eventStateKey: E,
          actionListId: y,
          isCarrier: O,
          styleProp: C,
          verbose: x,
          pluginInstance: L,
        } = e,
        { ixData: S, ixSession: U } = t.getState(),
        { events: G } = S,
        W = G[d] || {},
        { mediaQueries: K = S.mediaQueryKeys } = W;
      if (Gi(K, U.mediaQueryKey) && (n || r || o)) {
        if (h || (c === _V && o)) {
          t.dispatch((0, Oe.elementStateChanged)(i, s, h, a));
          let { ixElements: J } = t.getState(),
            { ref: ee, refType: oe, refState: z } = J[i] || {},
            q = z && z[s];
          switch (oe) {
            case Ey: {
              IV(ee, z, q, d, a, C, Re, c, L);
              break;
            }
          }
        }
        if (o) {
          if (O) {
            let J = Ts({
              store: t,
              eventId: d,
              eventTarget: T,
              eventStateKey: E,
              actionListId: y,
              groupIndex: I + 1,
              verbose: x,
            });
            x &&
              !J &&
              t.dispatch(
                (0, Oe.actionListPlaybackChanged)({
                  actionListId: y,
                  isPlaying: !1,
                })
              );
          }
          Os(e, t);
        }
      }
    }
  });
  var Ay = u((It) => {
    "use strict";
    var rk = $t().default,
      nk = ct().default;
    Object.defineProperty(It, "__esModule", { value: !0 });
    It.actions = void 0;
    It.destroy = wy;
    It.init = uk;
    It.setEnv = sk;
    It.store = void 0;
    Hl();
    var ik = ea(),
      ok = nk(SE()),
      ws = hs(),
      ak = rk(Oi());
    It.actions = ak;
    var Wi = (0, ik.createStore)(ok.default);
    It.store = Wi;
    function sk(e) {
      e() && (0, ws.observeRequests)(Wi);
    }
    function uk(e) {
      wy(), (0, ws.startEngine)({ store: Wi, rawData: e, allowEvents: !0 });
    }
    function wy() {
      (0, ws.stopEngine)(Wi);
    }
  });
  var Cy = u((bz, xy) => {
    var Sy = Ne(),
      Ry = Ay();
    Ry.setEnv(Sy.env);
    Sy.define(
      "ix2",
      (xy.exports = function () {
        return Ry;
      })
    );
  });
  var qy = u((Oz, Ny) => {
    var wr = Ne();
    wr.define(
      "links",
      (Ny.exports = function (e, t) {
        var r = {},
          n = e(window),
          o,
          i = wr.env(),
          a = window.location,
          s = document.createElement("a"),
          c = "w--current",
          h = /index\.(html|php)$/,
          I = /\/$/,
          d,
          T;
        r.ready = r.design = r.preview = E;
        function E() {
          (o = i && wr.env("design")),
            (T = wr.env("slug") || a.pathname || ""),
            wr.scroll.off(O),
            (d = []);
          for (var x = document.links, L = 0; L < x.length; ++L) y(x[L]);
          d.length && (wr.scroll.on(O), O());
        }
        function y(x) {
          var L =
            (o && x.getAttribute("href-disabled")) || x.getAttribute("href");
          if (((s.href = L), !(L.indexOf(":") >= 0))) {
            var S = e(x);
            if (
              s.hash.length > 1 &&
              s.host + s.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var U = e(s.hash);
              U.length && d.push({ link: S, sec: U, active: !1 });
              return;
            }
            if (!(L === "#" || L === "")) {
              var G = s.href === a.href || L === T || (h.test(L) && I.test(T));
              C(S, c, G);
            }
          }
        }
        function O() {
          var x = n.scrollTop(),
            L = n.height();
          t.each(d, function (S) {
            var U = S.link,
              G = S.sec,
              W = G.offset().top,
              K = G.outerHeight(),
              J = L * 0.5,
              ee = G.is(":visible") && W + K - J >= x && W + J <= x + L;
            S.active !== ee && ((S.active = ee), C(U, c, ee));
          });
        }
        function C(x, L, S) {
          var U = x.hasClass(L);
          (S && U) || (!S && !U) || (S ? x.addClass(L) : x.removeClass(L));
        }
        return r;
      })
    );
  });
  var Py = u((wz, Ly) => {
    var Vi = Ne();
    Vi.define(
      "scroll",
      (Ly.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = y() ? null : window.history,
          o = e(window),
          i = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (q) {
              window.setTimeout(q, 15);
            },
          c = Vi.env("editor") ? ".w-editor-body" : "body",
          h =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          I = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + I + ")",
          T = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          E = document.createElement("style");
        E.appendChild(document.createTextNode(T));
        function y() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var O = /^#[a-zA-Z0-9][\w:.-]*$/;
        function C(q) {
          return O.test(q.hash) && q.host + q.pathname === r.host + r.pathname;
        }
        let x =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function L() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            x.matches
          );
        }
        function S(q, m) {
          var M;
          switch (m) {
            case "add":
              (M = q.attr("tabindex")),
                M
                  ? q.attr("data-wf-tabindex-swap", M)
                  : q.attr("tabindex", "-1");
              break;
            case "remove":
              (M = q.attr("data-wf-tabindex-swap")),
                M
                  ? (q.attr("tabindex", M),
                    q.removeAttr("data-wf-tabindex-swap"))
                  : q.removeAttr("tabindex");
              break;
          }
          q.toggleClass("wf-force-outline-none", m === "add");
        }
        function U(q) {
          var m = q.currentTarget;
          if (
            !(
              Vi.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(m.className))
            )
          ) {
            var M = C(m) ? m.hash : "";
            if (M !== "") {
              var N = e(M);
              N.length &&
                (q && (q.preventDefault(), q.stopPropagation()),
                G(M, q),
                window.setTimeout(
                  function () {
                    W(N, function () {
                      S(N, "add"),
                        N.get(0).focus({ preventScroll: !0 }),
                        S(N, "remove");
                    });
                  },
                  q ? 0 : 300
                ));
            }
          }
        }
        function G(q) {
          if (
            r.hash !== q &&
            n &&
            n.pushState &&
            !(Vi.env.chrome && r.protocol === "file:")
          ) {
            var m = n.state && n.state.hash;
            m !== q && n.pushState({ hash: q }, "", q);
          }
        }
        function W(q, m) {
          var M = o.scrollTop(),
            N = K(q);
          if (M !== N) {
            var B = J(q, M, N),
              P = Date.now(),
              H = function () {
                var w = Date.now() - P;
                window.scroll(0, ee(M, N, w, B)),
                  w <= B ? s(H) : typeof m == "function" && m();
              };
            s(H);
          }
        }
        function K(q) {
          var m = e(h),
            M = m.css("position") === "fixed" ? m.outerHeight() : 0,
            N = q.offset().top - M;
          if (q.data("scroll") === "mid") {
            var B = o.height() - M,
              P = q.outerHeight();
            P < B && (N -= Math.round((B - P) / 2));
          }
          return N;
        }
        function J(q, m, M) {
          if (L()) return 0;
          var N = 1;
          return (
            a.add(q).each(function (B, P) {
              var H = parseFloat(P.getAttribute("data-scroll-time"));
              !isNaN(H) && H >= 0 && (N = H);
            }),
            (472.143 * Math.log(Math.abs(m - M) + 125) - 2e3) * N
          );
        }
        function ee(q, m, M, N) {
          return M > N ? m : q + (m - q) * oe(M / N);
        }
        function oe(q) {
          return q < 0.5
            ? 4 * q * q * q
            : (q - 1) * (2 * q - 2) * (2 * q - 2) + 1;
        }
        function z() {
          var { WF_CLICK_EMPTY: q, WF_CLICK_SCROLL: m } = t;
          i.on(m, d, U),
            i.on(q, I, function (M) {
              M.preventDefault();
            }),
            document.head.insertBefore(E, document.head.firstChild);
        }
        return { ready: z };
      })
    );
  });
  var My = u((Az, Dy) => {
    var ck = Ne();
    ck.define(
      "touch",
      (Dy.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new n(i) : null
            );
          });
        function n(i) {
          var a = !1,
            s = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            h,
            I;
          i.addEventListener("touchstart", d, !1),
            i.addEventListener("touchmove", T, !1),
            i.addEventListener("touchend", E, !1),
            i.addEventListener("touchcancel", y, !1),
            i.addEventListener("mousedown", d, !1),
            i.addEventListener("mousemove", T, !1),
            i.addEventListener("mouseup", E, !1),
            i.addEventListener("mouseout", y, !1);
          function d(C) {
            var x = C.touches;
            (x && x.length > 1) ||
              ((a = !0),
              x ? ((s = !0), (h = x[0].clientX)) : (h = C.clientX),
              (I = h));
          }
          function T(C) {
            if (a) {
              if (s && C.type === "mousemove") {
                C.preventDefault(), C.stopPropagation();
                return;
              }
              var x = C.touches,
                L = x ? x[0].clientX : C.clientX,
                S = L - I;
              (I = L),
                Math.abs(S) > c &&
                  r &&
                  String(r()) === "" &&
                  (o("swipe", C, { direction: S > 0 ? "right" : "left" }), y());
            }
          }
          function E(C) {
            if (a && ((a = !1), s && C.type === "mouseup")) {
              C.preventDefault(), C.stopPropagation(), (s = !1);
              return;
            }
          }
          function y() {
            a = !1;
          }
          function O() {
            i.removeEventListener("touchstart", d, !1),
              i.removeEventListener("touchmove", T, !1),
              i.removeEventListener("touchend", E, !1),
              i.removeEventListener("touchcancel", y, !1),
              i.removeEventListener("mousedown", d, !1),
              i.removeEventListener("mousemove", T, !1),
              i.removeEventListener("mouseup", E, !1),
              i.removeEventListener("mouseout", y, !1),
              (i = null);
          }
          this.destroy = O;
        }
        function o(i, a, s) {
          var c = e.Event(i, { originalEvent: a });
          e(a.target).trigger(c, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var Fy = u((As) => {
    "use strict";
    Object.defineProperty(As, "__esModule", { value: !0 });
    As.default = lk;
    function lk(e, t, r, n, o, i, a, s, c, h, I, d, T) {
      return function (E) {
        e(E);
        var y = E.form,
          O = {
            name: y.attr("data-name") || y.attr("name") || "Untitled Form",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              y.html()
            ),
            trackingCookies: n(),
          };
        let C = y.attr("data-wf-flow");
        C && (O.wfFlow = C), o(E);
        var x = i(y, O.fields);
        if (x) return a(x);
        if (((O.fileUploads = s(y)), c(E), !h)) {
          I(E);
          return;
        }
        d.ajax({
          url: T,
          type: "POST",
          data: O,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (L) {
            L && L.code === 200 && (E.success = !0), I(E);
          })
          .fail(function () {
            I(E);
          });
      };
    }
  });
  var Xy = u((Rz, Gy) => {
    var ki = Ne();
    ki.define(
      "forms",
      (Gy.exports = function (e, t) {
        var r = {},
          n = e(document),
          o,
          i = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          c,
          h = /e(-)?mail/i,
          I = /^\S+@\S+$/,
          d = window.alert,
          T = ki.env(),
          E,
          y,
          O,
          C = /list-manage[1-9]?.com/i,
          x = t.debounce(function () {
            d(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              L(), !T && !E && U();
            };
        function L() {
          (c = e("html").attr("data-wf-site")),
            (y = "https://webflow.com/api/v1/form/" + c),
            a &&
              y.indexOf("https://webflow.com") >= 0 &&
              (y = y.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (O = `${y}/signFile`),
            (o = e(s + " form")),
            o.length && o.each(S);
        }
        function S(w, k) {
          var v = e(k),
            l = e.data(k, s);
          l || (l = e.data(k, s, { form: v })), G(l);
          var p = v.closest("div.w-form");
          (l.done = p.find("> .w-form-done")),
            (l.fail = p.find("> .w-form-fail")),
            (l.fileUploads = p.find(".w-file-upload")),
            l.fileUploads.each(function (j) {
              B(j, l);
            });
          var g =
            l.form.attr("aria-label") || l.form.attr("data-name") || "Form";
          l.done.attr("aria-label") || l.form.attr("aria-label", g),
            l.done.attr("tabindex", "-1"),
            l.done.attr("role", "region"),
            l.done.attr("aria-label") ||
              l.done.attr("aria-label", g + " success"),
            l.fail.attr("tabindex", "-1"),
            l.fail.attr("role", "region"),
            l.fail.attr("aria-label") ||
              l.fail.attr("aria-label", g + " failure");
          var X = (l.action = v.attr("action"));
          if (
            ((l.handler = null),
            (l.redirect = v.attr("data-redirect")),
            C.test(X))
          ) {
            l.handler = m;
            return;
          }
          if (!X) {
            if (c) {
              l.handler = (() => {
                let j = Fy().default;
                return j(G, i, ki, oe, N, K, d, J, W, c, M, e, y);
              })();
              return;
            }
            x();
          }
        }
        function U() {
          (E = !0),
            n.on("submit", s + " form", function (j) {
              var Y = e.data(this, s);
              Y.handler && ((Y.evt = j), Y.handler(Y));
            });
          let w = ".w-checkbox-input",
            k = ".w-radio-input",
            v = "w--redirected-checked",
            l = "w--redirected-focus",
            p = "w--redirected-focus-visible",
            g = ":focus-visible, [data-wf-focus-visible]",
            X = [
              ["checkbox", w],
              ["radio", k],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + w + ")",
            (j) => {
              e(j.target).siblings(w).toggleClass(v);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (j) => {
              e(`input[name="${j.target.name}"]:not(${w})`).map((Z, ce) =>
                e(ce).siblings(k).removeClass(v)
              );
              let Y = e(j.target);
              Y.hasClass("w-radio-input") || Y.siblings(k).addClass(v);
            }),
            X.forEach(([j, Y]) => {
              n.on(
                "focus",
                s + ` form input[type="${j}"]:not(` + Y + ")",
                (Z) => {
                  e(Z.target).siblings(Y).addClass(l),
                    e(Z.target).filter(g).siblings(Y).addClass(p);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${j}"]:not(` + Y + ")",
                  (Z) => {
                    e(Z.target).siblings(Y).removeClass(`${l} ${p}`);
                  }
                );
            });
        }
        function G(w) {
          var k = (w.btn = w.form.find(':input[type="submit"]'));
          (w.wait = w.btn.attr("data-wait") || null),
            (w.success = !1),
            k.prop("disabled", !1),
            w.label && k.val(w.label);
        }
        function W(w) {
          var k = w.btn,
            v = w.wait;
          k.prop("disabled", !0), v && ((w.label = k.val()), k.val(v));
        }
        function K(w, k) {
          var v = null;
          return (
            (k = k || {}),
            w
              .find(':input:not([type="submit"]):not([type="file"])')
              .each(function (l, p) {
                var g = e(p),
                  X = g.attr("type"),
                  j =
                    g.attr("data-name") || g.attr("name") || "Field " + (l + 1),
                  Y = g.val();
                if (X === "checkbox") Y = g.is(":checked");
                else if (X === "radio") {
                  if (k[j] === null || typeof k[j] == "string") return;
                  Y =
                    w
                      .find('input[name="' + g.attr("name") + '"]:checked')
                      .val() || null;
                }
                typeof Y == "string" && (Y = e.trim(Y)),
                  (k[j] = Y),
                  (v = v || z(g, X, j, Y));
              }),
            v
          );
        }
        function J(w) {
          var k = {};
          return (
            w.find(':input[type="file"]').each(function (v, l) {
              var p = e(l),
                g = p.attr("data-name") || p.attr("name") || "File " + (v + 1),
                X = p.attr("data-value");
              typeof X == "string" && (X = e.trim(X)), (k[g] = X);
            }),
            k
          );
        }
        let ee = { _mkto_trk: "marketo" };
        function oe() {
          return document.cookie.split("; ").reduce(function (k, v) {
            let l = v.split("="),
              p = l[0];
            if (p in ee) {
              let g = ee[p],
                X = l.slice(1).join("=");
              k[g] = X;
            }
            return k;
          }, {});
        }
        function z(w, k, v, l) {
          var p = null;
          return (
            k === "password"
              ? (p = "Passwords cannot be submitted.")
              : w.attr("required")
              ? l
                ? h.test(w.attr("type")) &&
                  (I.test(l) ||
                    (p = "Please enter a valid email address for: " + v))
                : (p = "Please fill out the required field: " + v)
              : v === "g-recaptcha-response" &&
                !l &&
                (p = "Please confirm you\u2019re not a robot."),
            p
          );
        }
        function q(w) {
          N(w), M(w);
        }
        function m(w) {
          G(w);
          var k = w.form,
            v = {};
          if (/^https/.test(i.href) && !/^https/.test(w.action)) {
            k.attr("method", "post");
            return;
          }
          N(w);
          var l = K(k, v);
          if (l) return d(l);
          W(w);
          var p;
          t.each(v, function (Y, Z) {
            h.test(Z) && (v.EMAIL = Y),
              /^((full[ _-]?)?name)$/i.test(Z) && (p = Y),
              /^(first[ _-]?name)$/i.test(Z) && (v.FNAME = Y),
              /^(last[ _-]?name)$/i.test(Z) && (v.LNAME = Y);
          }),
            p &&
              !v.FNAME &&
              ((p = p.split(" ")),
              (v.FNAME = p[0]),
              (v.LNAME = v.LNAME || p[1]));
          var g = w.action.replace("/post?", "/post-json?") + "&c=?",
            X = g.indexOf("u=") + 2;
          X = g.substring(X, g.indexOf("&", X));
          var j = g.indexOf("id=") + 3;
          (j = g.substring(j, g.indexOf("&", j))),
            (v["b_" + X + "_" + j] = ""),
            e
              .ajax({ url: g, data: v, dataType: "jsonp" })
              .done(function (Y) {
                (w.success = Y.result === "success" || /already/.test(Y.msg)),
                  w.success || console.info("MailChimp error: " + Y.msg),
                  M(w);
              })
              .fail(function () {
                M(w);
              });
        }
        function M(w) {
          var k = w.form,
            v = w.redirect,
            l = w.success;
          if (l && v) {
            ki.location(v);
            return;
          }
          w.done.toggle(l),
            w.fail.toggle(!l),
            l ? w.done.focus() : w.fail.focus(),
            k.toggle(!l),
            G(w);
        }
        function N(w) {
          w.evt && w.evt.preventDefault(), (w.evt = null);
        }
        function B(w, k) {
          if (!k.fileUploads || !k.fileUploads[w]) return;
          var v,
            l = e(k.fileUploads[w]),
            p = l.find("> .w-file-upload-default"),
            g = l.find("> .w-file-upload-uploading"),
            X = l.find("> .w-file-upload-success"),
            j = l.find("> .w-file-upload-error"),
            Y = p.find(".w-file-upload-input"),
            Z = p.find(".w-file-upload-label"),
            ce = Z.children(),
            ne = j.find(".w-file-upload-error-msg"),
            _ = X.find(".w-file-upload-file"),
            Q = X.find(".w-file-remove-link"),
            re = _.find(".w-file-upload-file-name"),
            $ = ne.attr("data-w-size-error"),
            ve = ne.attr("data-w-type-error"),
            xe = ne.attr("data-w-generic-error");
          if (
            (T ||
              Z.on("click keydown", function (A) {
                (A.type === "keydown" && A.which !== 13 && A.which !== 32) ||
                  (A.preventDefault(), Y.click());
              }),
            Z.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            Q.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            T)
          )
            Y.on("click", function (A) {
              A.preventDefault();
            }),
              Z.on("click", function (A) {
                A.preventDefault();
              }),
              ce.on("click", function (A) {
                A.preventDefault();
              });
          else {
            Q.on("click keydown", function (A) {
              if (A.type === "keydown") {
                if (A.which !== 13 && A.which !== 32) return;
                A.preventDefault();
              }
              Y.removeAttr("data-value"),
                Y.val(""),
                re.html(""),
                p.toggle(!0),
                X.toggle(!1),
                Z.focus();
            }),
              Y.on("change", function (A) {
                (v = A.target && A.target.files && A.target.files[0]),
                  v &&
                    (p.toggle(!1),
                    j.toggle(!1),
                    g.toggle(!0),
                    g.focus(),
                    re.text(v.name),
                    D() || W(k),
                    (k.fileUploads[w].uploading = !0),
                    P(v, b));
              });
            var Fe = Z.outerHeight();
            Y.height(Fe), Y.width(1);
          }
          function f(A) {
            var F = A.responseJSON && A.responseJSON.msg,
              ie = xe;
            typeof F == "string" && F.indexOf("InvalidFileTypeError") === 0
              ? (ie = ve)
              : typeof F == "string" &&
                F.indexOf("MaxFileSizeError") === 0 &&
                (ie = $),
              ne.text(ie),
              Y.removeAttr("data-value"),
              Y.val(""),
              g.toggle(!1),
              p.toggle(!0),
              j.toggle(!0),
              j.focus(),
              (k.fileUploads[w].uploading = !1),
              D() || G(k);
          }
          function b(A, F) {
            if (A) return f(A);
            var ie = F.fileName,
              se = F.postData,
              _e = F.fileId,
              te = F.s3Url;
            Y.attr("data-value", _e), H(te, se, v, ie, R);
          }
          function R(A) {
            if (A) return f(A);
            g.toggle(!1),
              X.css("display", "inline-block"),
              X.focus(),
              (k.fileUploads[w].uploading = !1),
              D() || G(k);
          }
          function D() {
            var A = (k.fileUploads && k.fileUploads.toArray()) || [];
            return A.some(function (F) {
              return F.uploading;
            });
          }
        }
        function P(w, k) {
          var v = new URLSearchParams({ name: w.name, size: w.size });
          e.ajax({ type: "GET", url: `${O}?${v}`, crossDomain: !0 })
            .done(function (l) {
              k(null, l);
            })
            .fail(function (l) {
              k(l);
            });
        }
        function H(w, k, v, l, p) {
          var g = new FormData();
          for (var X in k) g.append(X, k[X]);
          g.append("file", v, l),
            e
              .ajax({
                type: "POST",
                url: w,
                data: g,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                p(null);
              })
              .fail(function (j) {
                p(j);
              });
        }
        return r;
      })
    );
  });
  var Vy = u((xz, Wy) => {
    var Ss = Ne(),
      Uy = "w-condition-invisible",
      fk = "." + Uy;
    function dk(e) {
      return e.filter(function (t) {
        return !pn(t);
      });
    }
    function pn(e) {
      return !!(e.$el && e.$el.closest(fk).length);
    }
    function Rs(e, t) {
      for (var r = e; r >= 0; r--) if (!pn(t[r])) return r;
      return -1;
    }
    function xs(e, t) {
      for (var r = e; r <= t.length - 1; r++) if (!pn(t[r])) return r;
      return -1;
    }
    function pk(e, t) {
      return Rs(e - 1, t) === -1;
    }
    function vk(e, t) {
      return xs(e + 1, t) === -1;
    }
    function dn(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t);
    }
    function hk(e, t, r, n) {
      var o = r.tram,
        i = Array.isArray,
        a = "w-lightbox",
        s = a + "-",
        c = /(^|\s+)/g,
        h = [],
        I,
        d,
        T,
        E = [];
      function y(l, p) {
        return (
          (h = i(l) ? l : [l]),
          d || y.build(),
          dk(h).length > 1 &&
            ((d.items = d.empty),
            h.forEach(function (g, X) {
              var j = k("thumbnail"),
                Y = k("item")
                  .prop("tabIndex", 0)
                  .attr("aria-controls", "w-lightbox-view")
                  .attr("role", "tab")
                  .append(j);
              dn(Y, `show item ${X + 1} of ${h.length}`),
                pn(g) && Y.addClass(Uy),
                (d.items = d.items.add(Y)),
                oe(g.thumbnailUrl || g.url, function (Z) {
                  Z.prop("width") > Z.prop("height")
                    ? B(Z, "wide")
                    : B(Z, "tall"),
                    j.append(B(Z, "thumbnail-image"));
                });
            }),
            d.strip.empty().append(d.items),
            B(d.content, "group")),
          o(P(d.lightbox, "hide").trigger("focus"))
            .add("opacity .3s")
            .start({ opacity: 1 }),
          B(d.html, "noscroll"),
          y.show(p || 0)
        );
      }
      (y.build = function () {
        return (
          y.destroy(),
          (d = { html: r(t.documentElement), empty: r() }),
          (d.arrowLeft = k("control left inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (d.arrowRight = k("control right inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (d.close = k("control close").attr("role", "button")),
          dn(d.arrowLeft, "previous image"),
          dn(d.arrowRight, "next image"),
          dn(d.close, "close lightbox"),
          (d.spinner = k("spinner")
            .attr("role", "progressbar")
            .attr("aria-live", "polite")
            .attr("aria-hidden", !1)
            .attr("aria-busy", !0)
            .attr("aria-valuemin", 0)
            .attr("aria-valuemax", 100)
            .attr("aria-valuenow", 0)
            .attr("aria-valuetext", "Loading image")),
          (d.strip = k("strip").attr("role", "tablist")),
          (T = new m(d.spinner, M("hide"))),
          (d.content = k("content").append(
            d.spinner,
            d.arrowLeft,
            d.arrowRight,
            d.close
          )),
          (d.container = k("container").append(d.content, d.strip)),
          (d.lightbox = k("backdrop hide").append(d.container)),
          d.strip.on("click", N("item"), S),
          d.content
            .on("swipe", U)
            .on("click", N("left"), C)
            .on("click", N("right"), x)
            .on("click", N("close"), L)
            .on("click", N("image, caption"), x),
          d.container.on("click", N("view"), L).on("dragstart", N("img"), W),
          d.lightbox.on("keydown", K).on("focusin", G),
          r(n).append(d.lightbox),
          y
        );
      }),
        (y.destroy = function () {
          d && (P(d.html, "noscroll"), d.lightbox.remove(), (d = void 0));
        }),
        (y.show = function (l) {
          if (l !== I) {
            var p = h[l];
            if (!p) return y.hide();
            if (pn(p)) {
              if (l < I) {
                var g = Rs(l - 1, h);
                l = g > -1 ? g : l;
              } else {
                var X = xs(l + 1, h);
                l = X > -1 ? X : l;
              }
              p = h[l];
            }
            var j = I;
            (I = l),
              d.spinner
                .attr("aria-hidden", !1)
                .attr("aria-busy", !0)
                .attr("aria-valuenow", 0)
                .attr("aria-valuetext", "Loading image"),
              T.show();
            var Y = (p.html && v(p.width, p.height)) || p.url;
            return (
              oe(Y, function (Z) {
                if (l !== I) return;
                var ce = k("figure", "figure").append(B(Z, "image")),
                  ne = k("frame").append(ce),
                  _ = k("view")
                    .prop("tabIndex", 0)
                    .attr("id", "w-lightbox-view")
                    .append(ne),
                  Q,
                  re;
                p.html &&
                  ((Q = r(p.html)),
                  (re = Q.is("iframe")),
                  re && Q.on("load", $),
                  ce.append(B(Q, "embed"))),
                  p.caption &&
                    ce.append(k("caption", "figcaption").text(p.caption)),
                  d.spinner.before(_),
                  re || $();
                function $() {
                  if (
                    (d.spinner
                      .attr("aria-hidden", !0)
                      .attr("aria-busy", !1)
                      .attr("aria-valuenow", 100)
                      .attr("aria-valuetext", "Loaded image"),
                    T.hide(),
                    l !== I)
                  ) {
                    _.remove();
                    return;
                  }
                  let ve = pk(l, h);
                  H(d.arrowLeft, "inactive", ve),
                    w(d.arrowLeft, ve),
                    ve && d.arrowLeft.is(":focus") && d.arrowRight.focus();
                  let xe = vk(l, h);
                  if (
                    (H(d.arrowRight, "inactive", xe),
                    w(d.arrowRight, xe),
                    xe && d.arrowRight.is(":focus") && d.arrowLeft.focus(),
                    d.view
                      ? (o(d.view)
                          .add("opacity .3s")
                          .start({ opacity: 0 })
                          .then(z(d.view)),
                        o(_)
                          .add("opacity .3s")
                          .add("transform .3s")
                          .set({ x: l > j ? "80px" : "-80px" })
                          .start({ opacity: 1, x: 0 }))
                      : _.css("opacity", 1),
                    (d.view = _),
                    d.view.prop("tabIndex", 0),
                    d.items)
                  ) {
                    P(d.items, "active"), d.items.removeAttr("aria-selected");
                    var Fe = d.items.eq(l);
                    B(Fe, "active"), Fe.attr("aria-selected", !0), q(Fe);
                  }
                }
              }),
              d.close.prop("tabIndex", 0),
              r(":focus").addClass("active-lightbox"),
              E.length === 0 &&
                (r("body")
                  .children()
                  .each(function () {
                    r(this).hasClass("w-lightbox-backdrop") ||
                      r(this).is("script") ||
                      (E.push({
                        node: r(this),
                        hidden: r(this).attr("aria-hidden"),
                        tabIndex: r(this).attr("tabIndex"),
                      }),
                      r(this).attr("aria-hidden", !0).attr("tabIndex", -1));
                  }),
                d.close.focus()),
              y
            );
          }
        }),
        (y.hide = function () {
          return (
            o(d.lightbox).add("opacity .3s").start({ opacity: 0 }).then(ee), y
          );
        }),
        (y.prev = function () {
          var l = Rs(I - 1, h);
          l > -1 && y.show(l);
        }),
        (y.next = function () {
          var l = xs(I + 1, h);
          l > -1 && y.show(l);
        });
      function O(l) {
        return function (p) {
          this === p.target && (p.stopPropagation(), p.preventDefault(), l());
        };
      }
      var C = O(y.prev),
        x = O(y.next),
        L = O(y.hide),
        S = function (l) {
          var p = r(this).index();
          l.preventDefault(), y.show(p);
        },
        U = function (l, p) {
          l.preventDefault(),
            p.direction === "left"
              ? y.next()
              : p.direction === "right" && y.prev();
        },
        G = function () {
          this.focus();
        };
      function W(l) {
        l.preventDefault();
      }
      function K(l) {
        var p = l.keyCode;
        p === 27 || J(p, "close")
          ? y.hide()
          : p === 37 || J(p, "left")
          ? y.prev()
          : p === 39 || J(p, "right")
          ? y.next()
          : J(p, "item") && r(":focus").click();
      }
      function J(l, p) {
        if (l !== 13 && l !== 32) return !1;
        var g = r(":focus").attr("class"),
          X = M(p).trim();
        return g.includes(X);
      }
      function ee() {
        d &&
          (d.strip.scrollLeft(0).empty(),
          P(d.html, "noscroll"),
          B(d.lightbox, "hide"),
          d.view && d.view.remove(),
          P(d.content, "group"),
          B(d.arrowLeft, "inactive"),
          B(d.arrowRight, "inactive"),
          (I = d.view = void 0),
          E.forEach(function (l) {
            var p = l.node;
            p &&
              (l.hidden
                ? p.attr("aria-hidden", l.hidden)
                : p.removeAttr("aria-hidden"),
              l.tabIndex
                ? p.attr("tabIndex", l.tabIndex)
                : p.removeAttr("tabIndex"));
          }),
          (E = []),
          r(".active-lightbox").removeClass("active-lightbox").focus());
      }
      function oe(l, p) {
        var g = k("img", "img");
        return (
          g.one("load", function () {
            p(g);
          }),
          g.attr("src", l),
          g
        );
      }
      function z(l) {
        return function () {
          l.remove();
        };
      }
      function q(l) {
        var p = l.get(0),
          g = d.strip.get(0),
          X = p.offsetLeft,
          j = p.clientWidth,
          Y = g.scrollLeft,
          Z = g.clientWidth,
          ce = g.scrollWidth - Z,
          ne;
        X < Y
          ? (ne = Math.max(0, X + j - Z))
          : X + j > Z + Y && (ne = Math.min(X, ce)),
          ne != null &&
            o(d.strip).add("scroll-left 500ms").start({ "scroll-left": ne });
      }
      function m(l, p, g) {
        (this.$element = l),
          (this.className = p),
          (this.delay = g || 200),
          this.hide();
      }
      (m.prototype.show = function () {
        var l = this;
        l.timeoutId ||
          (l.timeoutId = setTimeout(function () {
            l.$element.removeClass(l.className), delete l.timeoutId;
          }, l.delay));
      }),
        (m.prototype.hide = function () {
          var l = this;
          if (l.timeoutId) {
            clearTimeout(l.timeoutId), delete l.timeoutId;
            return;
          }
          l.$element.addClass(l.className);
        });
      function M(l, p) {
        return l.replace(c, (p ? " ." : " ") + s);
      }
      function N(l) {
        return M(l, !0);
      }
      function B(l, p) {
        return l.addClass(M(p));
      }
      function P(l, p) {
        return l.removeClass(M(p));
      }
      function H(l, p, g) {
        return l.toggleClass(M(p), g);
      }
      function w(l, p) {
        return l.attr("aria-hidden", p).attr("tabIndex", p ? -1 : 0);
      }
      function k(l, p) {
        return B(r(t.createElement(p || "div")), l);
      }
      function v(l, p) {
        var g =
          '<svg xmlns="http://www.w3.org/2000/svg" width="' +
          l +
          '" height="' +
          p +
          '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(g);
      }
      return (
        (function () {
          var l = e.navigator.userAgent,
            p = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
            g = l.match(p),
            X = l.indexOf("Android ") > -1 && l.indexOf("Chrome") === -1;
          if (!X && (!g || g[2] > 7)) return;
          var j = t.createElement("style");
          t.head.appendChild(j), e.addEventListener("resize", Y, !0);
          function Y() {
            var Z = e.innerHeight,
              ce = e.innerWidth,
              ne =
                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                Z +
                "px}.w-lightbox-view {width:" +
                ce +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.86 * Z +
                "px}.w-lightbox-image {max-width:" +
                ce +
                "px;max-height:" +
                Z +
                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                0.86 * Z +
                "px}.w-lightbox-strip {padding: 0 " +
                0.01 * Z +
                "px}.w-lightbox-item {width:" +
                0.1 * Z +
                "px;padding:" +
                0.02 * Z +
                "px " +
                0.01 * Z +
                "px}.w-lightbox-thumbnail {height:" +
                0.1 * Z +
                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                0.96 * Z +
                "px}.w-lightbox-content {margin-top:" +
                0.02 * Z +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.84 * Z +
                "px}.w-lightbox-image {max-width:" +
                0.96 * ce +
                "px;max-height:" +
                0.96 * Z +
                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                0.823 * ce +
                "px;max-height:" +
                0.84 * Z +
                "px}}";
            j.textContent = ne;
          }
          Y();
        })(),
        y
      );
    }
    Ss.define(
      "lightbox",
      (Wy.exports = function (e) {
        var t = {},
          r = Ss.env(),
          n = hk(window, document, e, r ? "#lightbox-mountpoint" : "body"),
          o = e(document),
          i,
          a,
          s = ".w-lightbox",
          c;
        t.ready = t.design = t.preview = h;
        function h() {
          (a = r && Ss.env("design")),
            n.destroy(),
            (c = {}),
            (i = o.find(s)),
            i.webflowLightBox(),
            i.each(function () {
              dn(e(this), "open lightbox"),
                e(this).attr("aria-haspopup", "dialog");
            });
        }
        jQuery.fn.extend({
          webflowLightBox: function () {
            var E = this;
            e.each(E, function (y, O) {
              var C = e.data(O, s);
              C ||
                (C = e.data(O, s, {
                  el: e(O),
                  mode: "images",
                  images: [],
                  embed: "",
                })),
                C.el.off(s),
                I(C),
                a
                  ? C.el.on("setting" + s, I.bind(null, C))
                  : C.el.on("click" + s, d(C)).on("click" + s, function (x) {
                      x.preventDefault();
                    });
            });
          },
        });
        function I(E) {
          var y = E.el.children(".w-json").html(),
            O,
            C;
          if (!y) {
            E.items = [];
            return;
          }
          try {
            y = JSON.parse(y);
          } catch (x) {
            console.error("Malformed lightbox JSON configuration.", x);
          }
          T(y),
            y.items.forEach(function (x) {
              x.$el = E.el;
            }),
            (O = y.group),
            O
              ? ((C = c[O]),
                C || (C = c[O] = []),
                (E.items = C),
                y.items.length &&
                  ((E.index = C.length), C.push.apply(C, y.items)))
              : ((E.items = y.items), (E.index = 0));
        }
        function d(E) {
          return function () {
            E.items.length && n(E.items, E.index || 0);
          };
        }
        function T(E) {
          E.images &&
            (E.images.forEach(function (y) {
              y.type = "image";
            }),
            (E.items = E.images)),
            E.embed && ((E.embed.type = "video"), (E.items = [E.embed])),
            E.groupId && (E.group = E.groupId);
        }
        return t;
      })
    );
  });
  var By = u((Cz, ky) => {
    var qt = Ne(),
      gk = Sr(),
      Me = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    qt.define(
      "navbar",
      (ky.exports = function (e, t) {
        var r = {},
          n = e.tram,
          o = e(window),
          i = e(document),
          a = t.debounce,
          s,
          c,
          h,
          I,
          d = qt.env(),
          T = '<div class="w-nav-overlay" data-wf-ignore />',
          E = ".w-nav",
          y = "w--open",
          O = "w--nav-dropdown-open",
          C = "w--nav-dropdown-toggle-open",
          x = "w--nav-dropdown-list-open",
          L = "w--nav-link-open",
          S = gk.triggers,
          U = e();
        (r.ready = r.design = r.preview = G),
          (r.destroy = function () {
            (U = e()), W(), c && c.length && c.each(oe);
          });
        function G() {
          (h = d && qt.env("design")),
            (I = qt.env("editor")),
            (s = e(document.body)),
            (c = i.find(E)),
            c.length && (c.each(ee), W(), K());
        }
        function W() {
          qt.resize.off(J);
        }
        function K() {
          qt.resize.on(J);
        }
        function J() {
          c.each(p);
        }
        function ee(_, Q) {
          var re = e(Q),
            $ = e.data(Q, E);
          $ ||
            ($ = e.data(Q, E, {
              open: !1,
              el: re,
              config: {},
              selectedIdx: -1,
            })),
            ($.menu = re.find(".w-nav-menu")),
            ($.links = $.menu.find(".w-nav-link")),
            ($.dropdowns = $.menu.find(".w-dropdown")),
            ($.dropdownToggle = $.menu.find(".w-dropdown-toggle")),
            ($.dropdownList = $.menu.find(".w-dropdown-list")),
            ($.button = re.find(".w-nav-button")),
            ($.container = re.find(".w-container")),
            ($.overlayContainerId = "w-nav-overlay-" + _),
            ($.outside = v($));
          var ve = re.find(".w-nav-brand");
          ve &&
            ve.attr("href") === "/" &&
            ve.attr("aria-label") == null &&
            ve.attr("aria-label", "home"),
            $.button.attr("style", "-webkit-user-select: text;"),
            $.button.attr("aria-label") == null &&
              $.button.attr("aria-label", "menu"),
            $.button.attr("role", "button"),
            $.button.attr("tabindex", "0"),
            $.button.attr("aria-controls", $.overlayContainerId),
            $.button.attr("aria-haspopup", "menu"),
            $.button.attr("aria-expanded", "false"),
            $.el.off(E),
            $.button.off(E),
            $.menu.off(E),
            m($),
            h
              ? (z($), $.el.on("setting" + E, M($)))
              : (q($),
                $.button.on("click" + E, w($)),
                $.menu.on("click" + E, "a", k($)),
                $.button.on("keydown" + E, N($)),
                $.el.on("keydown" + E, B($))),
            p(_, Q);
        }
        function oe(_, Q) {
          var re = e.data(Q, E);
          re && (z(re), e.removeData(Q, E));
        }
        function z(_) {
          _.overlay && (ne(_, !0), _.overlay.remove(), (_.overlay = null));
        }
        function q(_) {
          _.overlay ||
            ((_.overlay = e(T).appendTo(_.el)),
            _.overlay.attr("id", _.overlayContainerId),
            (_.parent = _.menu.parent()),
            ne(_, !0));
        }
        function m(_) {
          var Q = {},
            re = _.config || {},
            $ = (Q.animation = _.el.attr("data-animation") || "default");
          (Q.animOver = /^over/.test($)),
            (Q.animDirect = /left$/.test($) ? -1 : 1),
            re.animation !== $ && _.open && t.defer(H, _),
            (Q.easing = _.el.attr("data-easing") || "ease"),
            (Q.easing2 = _.el.attr("data-easing2") || "ease");
          var ve = _.el.attr("data-duration");
          (Q.duration = ve != null ? Number(ve) : 400),
            (Q.docHeight = _.el.attr("data-doc-height")),
            (_.config = Q);
        }
        function M(_) {
          return function (Q, re) {
            re = re || {};
            var $ = o.width();
            m(_),
              re.open === !0 && Z(_, !0),
              re.open === !1 && ne(_, !0),
              _.open &&
                t.defer(function () {
                  $ !== o.width() && H(_);
                });
          };
        }
        function N(_) {
          return function (Q) {
            switch (Q.keyCode) {
              case Me.SPACE:
              case Me.ENTER:
                return w(_)(), Q.preventDefault(), Q.stopPropagation();
              case Me.ESCAPE:
                return ne(_), Q.preventDefault(), Q.stopPropagation();
              case Me.ARROW_RIGHT:
              case Me.ARROW_DOWN:
              case Me.HOME:
              case Me.END:
                return _.open
                  ? (Q.keyCode === Me.END
                      ? (_.selectedIdx = _.links.length - 1)
                      : (_.selectedIdx = 0),
                    P(_),
                    Q.preventDefault(),
                    Q.stopPropagation())
                  : (Q.preventDefault(), Q.stopPropagation());
            }
          };
        }
        function B(_) {
          return function (Q) {
            if (_.open)
              switch (
                ((_.selectedIdx = _.links.index(document.activeElement)),
                Q.keyCode)
              ) {
                case Me.HOME:
                case Me.END:
                  return (
                    Q.keyCode === Me.END
                      ? (_.selectedIdx = _.links.length - 1)
                      : (_.selectedIdx = 0),
                    P(_),
                    Q.preventDefault(),
                    Q.stopPropagation()
                  );
                case Me.ESCAPE:
                  return (
                    ne(_),
                    _.button.focus(),
                    Q.preventDefault(),
                    Q.stopPropagation()
                  );
                case Me.ARROW_LEFT:
                case Me.ARROW_UP:
                  return (
                    (_.selectedIdx = Math.max(-1, _.selectedIdx - 1)),
                    P(_),
                    Q.preventDefault(),
                    Q.stopPropagation()
                  );
                case Me.ARROW_RIGHT:
                case Me.ARROW_DOWN:
                  return (
                    (_.selectedIdx = Math.min(
                      _.links.length - 1,
                      _.selectedIdx + 1
                    )),
                    P(_),
                    Q.preventDefault(),
                    Q.stopPropagation()
                  );
              }
          };
        }
        function P(_) {
          if (_.links[_.selectedIdx]) {
            var Q = _.links[_.selectedIdx];
            Q.focus(), k(Q);
          }
        }
        function H(_) {
          _.open && (ne(_, !0), Z(_, !0));
        }
        function w(_) {
          return a(function () {
            _.open ? ne(_) : Z(_);
          });
        }
        function k(_) {
          return function (Q) {
            var re = e(this),
              $ = re.attr("href");
            if (!qt.validClick(Q.currentTarget)) {
              Q.preventDefault();
              return;
            }
            $ && $.indexOf("#") === 0 && _.open && ne(_);
          };
        }
        function v(_) {
          return (
            _.outside && i.off("click" + E, _.outside),
            function (Q) {
              var re = e(Q.target);
              (I && re.closest(".w-editor-bem-EditorOverlay").length) ||
                l(_, re);
            }
          );
        }
        var l = a(function (_, Q) {
          if (_.open) {
            var re = Q.closest(".w-nav-menu");
            _.menu.is(re) || ne(_);
          }
        });
        function p(_, Q) {
          var re = e.data(Q, E),
            $ = (re.collapsed = re.button.css("display") !== "none");
          if ((re.open && !$ && !h && ne(re, !0), re.container.length)) {
            var ve = X(re);
            re.links.each(ve), re.dropdowns.each(ve);
          }
          re.open && ce(re);
        }
        var g = "max-width";
        function X(_) {
          var Q = _.container.css(g);
          return (
            Q === "none" && (Q = ""),
            function (re, $) {
              ($ = e($)), $.css(g, ""), $.css(g) === "none" && $.css(g, Q);
            }
          );
        }
        function j(_, Q) {
          Q.setAttribute("data-nav-menu-open", "");
        }
        function Y(_, Q) {
          Q.removeAttribute("data-nav-menu-open");
        }
        function Z(_, Q) {
          if (_.open) return;
          (_.open = !0),
            _.menu.each(j),
            _.links.addClass(L),
            _.dropdowns.addClass(O),
            _.dropdownToggle.addClass(C),
            _.dropdownList.addClass(x),
            _.button.addClass(y);
          var re = _.config,
            $ = re.animation;
          ($ === "none" || !n.support.transform || re.duration <= 0) &&
            (Q = !0);
          var ve = ce(_),
            xe = _.menu.outerHeight(!0),
            Fe = _.menu.outerWidth(!0),
            f = _.el.height(),
            b = _.el[0];
          if (
            (p(0, b),
            S.intro(0, b),
            qt.redraw.up(),
            h || i.on("click" + E, _.outside),
            Q)
          ) {
            A();
            return;
          }
          var R = "transform " + re.duration + "ms " + re.easing;
          if (
            (_.overlay &&
              ((U = _.menu.prev()), _.overlay.show().append(_.menu)),
            re.animOver)
          ) {
            n(_.menu)
              .add(R)
              .set({ x: re.animDirect * Fe, height: ve })
              .start({ x: 0 })
              .then(A),
              _.overlay && _.overlay.width(Fe);
            return;
          }
          var D = f + xe;
          n(_.menu).add(R).set({ y: -D }).start({ y: 0 }).then(A);
          function A() {
            _.button.attr("aria-expanded", "true");
          }
        }
        function ce(_) {
          var Q = _.config,
            re = Q.docHeight ? i.height() : s.height();
          return (
            Q.animOver
              ? _.menu.height(re)
              : _.el.css("position") !== "fixed" &&
                (re -= _.el.outerHeight(!0)),
            _.overlay && _.overlay.height(re),
            re
          );
        }
        function ne(_, Q) {
          if (!_.open) return;
          (_.open = !1), _.button.removeClass(y);
          var re = _.config;
          if (
            ((re.animation === "none" ||
              !n.support.transform ||
              re.duration <= 0) &&
              (Q = !0),
            S.outro(0, _.el[0]),
            i.off("click" + E, _.outside),
            Q)
          ) {
            n(_.menu).stop(), b();
            return;
          }
          var $ = "transform " + re.duration + "ms " + re.easing2,
            ve = _.menu.outerHeight(!0),
            xe = _.menu.outerWidth(!0),
            Fe = _.el.height();
          if (re.animOver) {
            n(_.menu)
              .add($)
              .start({ x: xe * re.animDirect })
              .then(b);
            return;
          }
          var f = Fe + ve;
          n(_.menu).add($).start({ y: -f }).then(b);
          function b() {
            _.menu.height(""),
              n(_.menu).set({ x: 0, y: 0 }),
              _.menu.each(Y),
              _.links.removeClass(L),
              _.dropdowns.removeClass(O),
              _.dropdownToggle.removeClass(C),
              _.dropdownList.removeClass(x),
              _.overlay &&
                _.overlay.children().length &&
                (U.length ? _.menu.insertAfter(U) : _.menu.prependTo(_.parent),
                _.overlay.attr("style", "").hide()),
              _.el.triggerHandler("w-close"),
              _.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var Ky = u((Nz, jy) => {
    var Lt = Ne(),
      Ek = Sr(),
      Et = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      Hy =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Lt.define(
      "slider",
      (jy.exports = function (e, t) {
        var r = {},
          n = e.tram,
          o = e(document),
          i,
          a,
          s = Lt.env(),
          c = ".w-slider",
          h = '<div class="w-slider-dot" data-wf-ignore />',
          I =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          d = "w-slider-force-show",
          T = Ek.triggers,
          E,
          y = !1;
        (r.ready = function () {
          (a = Lt.env("design")), O();
        }),
          (r.design = function () {
            (a = !0), setTimeout(O, 1e3);
          }),
          (r.preview = function () {
            (a = !1), O();
          }),
          (r.redraw = function () {
            (y = !0), O(), (y = !1);
          }),
          (r.destroy = C);
        function O() {
          (i = o.find(c)), i.length && (i.each(S), !E && (C(), x()));
        }
        function C() {
          Lt.resize.off(L), Lt.redraw.off(r.redraw);
        }
        function x() {
          Lt.resize.on(L), Lt.redraw.on(r.redraw);
        }
        function L() {
          i.filter(":visible").each(B);
        }
        function S(v, l) {
          var p = e(l),
            g = e.data(l, c);
          g ||
            (g = e.data(l, c, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: p,
              config: {},
            })),
            (g.mask = p.children(".w-slider-mask")),
            (g.left = p.children(".w-slider-arrow-left")),
            (g.right = p.children(".w-slider-arrow-right")),
            (g.nav = p.children(".w-slider-nav")),
            (g.slides = g.mask.children(".w-slide")),
            g.slides.each(T.reset),
            y && (g.maskWidth = 0),
            p.attr("role") === void 0 && p.attr("role", "region"),
            p.attr("aria-label") === void 0 && p.attr("aria-label", "carousel");
          var X = g.mask.attr("id");
          if (
            (X || ((X = "w-slider-mask-" + v), g.mask.attr("id", X)),
            !a && !g.ariaLiveLabel && (g.ariaLiveLabel = e(I).appendTo(g.mask)),
            g.left.attr("role", "button"),
            g.left.attr("tabindex", "0"),
            g.left.attr("aria-controls", X),
            g.left.attr("aria-label") === void 0 &&
              g.left.attr("aria-label", "previous slide"),
            g.right.attr("role", "button"),
            g.right.attr("tabindex", "0"),
            g.right.attr("aria-controls", X),
            g.right.attr("aria-label") === void 0 &&
              g.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            g.left.hide(), g.right.hide(), g.nav.hide(), (E = !0);
            return;
          }
          g.el.off(c),
            g.left.off(c),
            g.right.off(c),
            g.nav.off(c),
            U(g),
            a
              ? (g.el.on("setting" + c, m(g)), q(g), (g.hasTimer = !1))
              : (g.el.on("swipe" + c, m(g)),
                g.left.on("click" + c, J(g)),
                g.right.on("click" + c, ee(g)),
                g.left.on("keydown" + c, K(g, J)),
                g.right.on("keydown" + c, K(g, ee)),
                g.nav.on("keydown" + c, "> div", m(g)),
                g.config.autoplay &&
                  !g.hasTimer &&
                  ((g.hasTimer = !0), (g.timerCount = 1), z(g)),
                g.el.on("mouseenter" + c, W(g, !0, "mouse")),
                g.el.on("focusin" + c, W(g, !0, "keyboard")),
                g.el.on("mouseleave" + c, W(g, !1, "mouse")),
                g.el.on("focusout" + c, W(g, !1, "keyboard"))),
            g.nav.on("click" + c, "> div", m(g)),
            s ||
              g.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var j = p.filter(":hidden");
          j.addClass(d);
          var Y = p.parents(":hidden");
          Y.addClass(d), y || B(v, l), j.removeClass(d), Y.removeClass(d);
        }
        function U(v) {
          var l = {};
          (l.crossOver = 0),
            (l.animation = v.el.attr("data-animation") || "slide"),
            l.animation === "outin" &&
              ((l.animation = "cross"), (l.crossOver = 0.5)),
            (l.easing = v.el.attr("data-easing") || "ease");
          var p = v.el.attr("data-duration");
          if (
            ((l.duration = p != null ? parseInt(p, 10) : 500),
            G(v.el.attr("data-infinite")) && (l.infinite = !0),
            G(v.el.attr("data-disable-swipe")) && (l.disableSwipe = !0),
            G(v.el.attr("data-hide-arrows"))
              ? (l.hideArrows = !0)
              : v.config.hideArrows && (v.left.show(), v.right.show()),
            G(v.el.attr("data-autoplay")))
          ) {
            (l.autoplay = !0),
              (l.delay = parseInt(v.el.attr("data-delay"), 10) || 2e3),
              (l.timerMax = parseInt(v.el.attr("data-autoplay-limit"), 10));
            var g = "mousedown" + c + " touchstart" + c;
            a ||
              v.el.off(g).one(g, function () {
                q(v);
              });
          }
          var X = v.right.width();
          (l.edge = X ? X + 40 : 100), (v.config = l);
        }
        function G(v) {
          return v === "1" || v === "true";
        }
        function W(v, l, p) {
          return function (g) {
            if (l) v.hasFocus[p] = l;
            else if (
              e.contains(v.el.get(0), g.relatedTarget) ||
              ((v.hasFocus[p] = l),
              (v.hasFocus.mouse && p === "keyboard") ||
                (v.hasFocus.keyboard && p === "mouse"))
            )
              return;
            l
              ? (v.ariaLiveLabel.attr("aria-live", "polite"),
                v.hasTimer && q(v))
              : (v.ariaLiveLabel.attr("aria-live", "off"), v.hasTimer && z(v));
          };
        }
        function K(v, l) {
          return function (p) {
            switch (p.keyCode) {
              case Et.SPACE:
              case Et.ENTER:
                return l(v)(), p.preventDefault(), p.stopPropagation();
            }
          };
        }
        function J(v) {
          return function () {
            N(v, { index: v.index - 1, vector: -1 });
          };
        }
        function ee(v) {
          return function () {
            N(v, { index: v.index + 1, vector: 1 });
          };
        }
        function oe(v, l) {
          var p = null;
          l === v.slides.length && (O(), P(v)),
            t.each(v.anchors, function (g, X) {
              e(g.els).each(function (j, Y) {
                e(Y).index() === l && (p = X);
              });
            }),
            p != null && N(v, { index: p, immediate: !0 });
        }
        function z(v) {
          q(v);
          var l = v.config,
            p = l.timerMax;
          (p && v.timerCount++ > p) ||
            (v.timerId = window.setTimeout(function () {
              v.timerId == null || a || (ee(v)(), z(v));
            }, l.delay));
        }
        function q(v) {
          window.clearTimeout(v.timerId), (v.timerId = null);
        }
        function m(v) {
          return function (l, p) {
            p = p || {};
            var g = v.config;
            if (a && l.type === "setting") {
              if (p.select === "prev") return J(v)();
              if (p.select === "next") return ee(v)();
              if ((U(v), P(v), p.select == null)) return;
              oe(v, p.select);
              return;
            }
            if (l.type === "swipe")
              return g.disableSwipe || Lt.env("editor")
                ? void 0
                : p.direction === "left"
                ? ee(v)()
                : p.direction === "right"
                ? J(v)()
                : void 0;
            if (v.nav.has(l.target).length) {
              var X = e(l.target).index();
              if (
                (l.type === "click" && N(v, { index: X }), l.type === "keydown")
              )
                switch (l.keyCode) {
                  case Et.ENTER:
                  case Et.SPACE: {
                    N(v, { index: X }), l.preventDefault();
                    break;
                  }
                  case Et.ARROW_LEFT:
                  case Et.ARROW_UP: {
                    M(v.nav, Math.max(X - 1, 0)), l.preventDefault();
                    break;
                  }
                  case Et.ARROW_RIGHT:
                  case Et.ARROW_DOWN: {
                    M(v.nav, Math.min(X + 1, v.pages)), l.preventDefault();
                    break;
                  }
                  case Et.HOME: {
                    M(v.nav, 0), l.preventDefault();
                    break;
                  }
                  case Et.END: {
                    M(v.nav, v.pages), l.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function M(v, l) {
          var p = v.children().eq(l).focus();
          v.children().not(p);
        }
        function N(v, l) {
          l = l || {};
          var p = v.config,
            g = v.anchors;
          v.previous = v.index;
          var X = l.index,
            j = {};
          X < 0
            ? ((X = g.length - 1),
              p.infinite &&
                ((j.x = -v.endX), (j.from = 0), (j.to = g[0].width)))
            : X >= g.length &&
              ((X = 0),
              p.infinite &&
                ((j.x = g[g.length - 1].width),
                (j.from = -g[g.length - 1].x),
                (j.to = j.from - j.x))),
            (v.index = X);
          var Y = v.nav
            .children()
            .eq(X)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          v.nav
            .children()
            .not(Y)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            p.hideArrows &&
              (v.index === g.length - 1 ? v.right.hide() : v.right.show(),
              v.index === 0 ? v.left.hide() : v.left.show());
          var Z = v.offsetX || 0,
            ce = (v.offsetX = -g[v.index].x),
            ne = { x: ce, opacity: 1, visibility: "" },
            _ = e(g[v.index].els),
            Q = e(g[v.previous] && g[v.previous].els),
            re = v.slides.not(_),
            $ = p.animation,
            ve = p.easing,
            xe = Math.round(p.duration),
            Fe = l.vector || (v.index > v.previous ? 1 : -1),
            f = "opacity " + xe + "ms " + ve,
            b = "transform " + xe + "ms " + ve;
          if (
            (_.find(Hy).removeAttr("tabindex"),
            _.removeAttr("aria-hidden"),
            _.find("*").removeAttr("aria-hidden"),
            re.find(Hy).attr("tabindex", "-1"),
            re.attr("aria-hidden", "true"),
            re.find("*").attr("aria-hidden", "true"),
            a || (_.each(T.intro), re.each(T.outro)),
            l.immediate && !y)
          ) {
            n(_).set(ne), A();
            return;
          }
          if (v.index === v.previous) return;
          if (
            (a || v.ariaLiveLabel.text(`Slide ${X + 1} of ${g.length}.`),
            $ === "cross")
          ) {
            var R = Math.round(xe - xe * p.crossOver),
              D = Math.round(xe - R);
            (f = "opacity " + R + "ms " + ve),
              n(Q).set({ visibility: "" }).add(f).start({ opacity: 0 }),
              n(_)
                .set({ visibility: "", x: ce, opacity: 0, zIndex: v.depth++ })
                .add(f)
                .wait(D)
                .then({ opacity: 1 })
                .then(A);
            return;
          }
          if ($ === "fade") {
            n(Q).set({ visibility: "" }).stop(),
              n(_)
                .set({ visibility: "", x: ce, opacity: 0, zIndex: v.depth++ })
                .add(f)
                .start({ opacity: 1 })
                .then(A);
            return;
          }
          if ($ === "over") {
            (ne = { x: v.endX }),
              n(Q).set({ visibility: "" }).stop(),
              n(_)
                .set({
                  visibility: "",
                  zIndex: v.depth++,
                  x: ce + g[v.index].width * Fe,
                })
                .add(b)
                .start({ x: ce })
                .then(A);
            return;
          }
          p.infinite && j.x
            ? (n(v.slides.not(Q))
                .set({ visibility: "", x: j.x })
                .add(b)
                .start({ x: ce }),
              n(Q).set({ visibility: "", x: j.from }).add(b).start({ x: j.to }),
              (v.shifted = Q))
            : (p.infinite &&
                v.shifted &&
                (n(v.shifted).set({ visibility: "", x: Z }),
                (v.shifted = null)),
              n(v.slides).set({ visibility: "" }).add(b).start({ x: ce }));
          function A() {
            (_ = e(g[v.index].els)),
              (re = v.slides.not(_)),
              $ !== "slide" && (ne.visibility = "hidden"),
              n(re).set(ne);
          }
        }
        function B(v, l) {
          var p = e.data(l, c);
          if (p) {
            if (w(p)) return P(p);
            a && k(p) && P(p);
          }
        }
        function P(v) {
          var l = 1,
            p = 0,
            g = 0,
            X = 0,
            j = v.maskWidth,
            Y = j - v.config.edge;
          Y < 0 && (Y = 0),
            (v.anchors = [{ els: [], x: 0, width: 0 }]),
            v.slides.each(function (ce, ne) {
              g - p > Y &&
                (l++,
                (p += j),
                (v.anchors[l - 1] = { els: [], x: g, width: 0 })),
                (X = e(ne).outerWidth(!0)),
                (g += X),
                (v.anchors[l - 1].width += X),
                v.anchors[l - 1].els.push(ne);
              var _ = ce + 1 + " of " + v.slides.length;
              e(ne).attr("aria-label", _), e(ne).attr("role", "group");
            }),
            (v.endX = g),
            a && (v.pages = null),
            v.nav.length && v.pages !== l && ((v.pages = l), H(v));
          var Z = v.index;
          Z >= l && (Z = l - 1), N(v, { immediate: !0, index: Z });
        }
        function H(v) {
          var l = [],
            p,
            g = v.el.attr("data-nav-spacing");
          g && (g = parseFloat(g) + "px");
          for (var X = 0, j = v.pages; X < j; X++)
            (p = e(h)),
              p
                .attr("aria-label", "Show slide " + (X + 1) + " of " + j)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              v.nav.hasClass("w-num") && p.text(X + 1),
              g != null && p.css({ "margin-left": g, "margin-right": g }),
              l.push(p);
          v.nav.empty().append(l);
        }
        function w(v) {
          var l = v.mask.width();
          return v.maskWidth !== l ? ((v.maskWidth = l), !0) : !1;
        }
        function k(v) {
          var l = 0;
          return (
            v.slides.each(function (p, g) {
              l += e(g).outerWidth(!0);
            }),
            v.slidesWidth !== l ? ((v.slidesWidth = l), !0) : !1
          );
        }
        return r;
      })
    );
  });
  var Yy = u((qz, zy) => {
    var Pt = Ne(),
      _k = Sr();
    Pt.define(
      "tabs",
      (zy.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          o,
          i,
          a = Pt.env,
          s = a.safari,
          c = a(),
          h = "data-w-tab",
          I = "data-w-pane",
          d = ".w-tabs",
          T = "w--current",
          E = "w--tab-active",
          y = _k.triggers,
          O = !1;
        (t.ready = t.design = t.preview = C),
          (t.redraw = function () {
            (O = !0), C(), (O = !1);
          }),
          (t.destroy = function () {
            (o = n.find(d)), o.length && (o.each(S), x());
          });
        function C() {
          (i = c && Pt.env("design")),
            (o = n.find(d)),
            o.length &&
              (o.each(U), Pt.env("preview") && !O && o.each(S), x(), L());
        }
        function x() {
          Pt.redraw.off(t.redraw);
        }
        function L() {
          Pt.redraw.on(t.redraw);
        }
        function S(z, q) {
          var m = e.data(q, d);
          m &&
            (m.links && m.links.each(y.reset),
            m.panes && m.panes.each(y.reset));
        }
        function U(z, q) {
          var m = d.substr(1) + "-" + z,
            M = e(q),
            N = e.data(q, d);
          if (
            (N || (N = e.data(q, d, { el: M, config: {} })),
            (N.current = null),
            (N.tabIdentifier = m + "-" + h),
            (N.paneIdentifier = m + "-" + I),
            (N.menu = M.children(".w-tab-menu")),
            (N.links = N.menu.children(".w-tab-link")),
            (N.content = M.children(".w-tab-content")),
            (N.panes = N.content.children(".w-tab-pane")),
            N.el.off(d),
            N.links.off(d),
            N.menu.attr("role", "tablist"),
            N.links.attr("tabindex", "-1"),
            G(N),
            !i)
          ) {
            N.links.on("click" + d, K(N)), N.links.on("keydown" + d, J(N));
            var B = N.links.filter("." + T),
              P = B.attr(h);
            P && ee(N, { tab: P, immediate: !0 });
          }
        }
        function G(z) {
          var q = {};
          q.easing = z.el.attr("data-easing") || "ease";
          var m = parseInt(z.el.attr("data-duration-in"), 10);
          m = q.intro = m === m ? m : 0;
          var M = parseInt(z.el.attr("data-duration-out"), 10);
          (M = q.outro = M === M ? M : 0),
            (q.immediate = !m && !M),
            (z.config = q);
        }
        function W(z) {
          var q = z.current;
          return Array.prototype.findIndex.call(
            z.links,
            (m) => m.getAttribute(h) === q,
            null
          );
        }
        function K(z) {
          return function (q) {
            q.preventDefault();
            var m = q.currentTarget.getAttribute(h);
            m && ee(z, { tab: m });
          };
        }
        function J(z) {
          return function (q) {
            var m = W(z),
              M = q.key,
              N = {
                ArrowLeft: m - 1,
                ArrowUp: m - 1,
                ArrowRight: m + 1,
                ArrowDown: m + 1,
                End: z.links.length - 1,
                Home: 0,
              };
            if (M in N) {
              q.preventDefault();
              var B = N[M];
              B === -1 && (B = z.links.length - 1),
                B === z.links.length && (B = 0);
              var P = z.links[B],
                H = P.getAttribute(h);
              H && ee(z, { tab: H });
            }
          };
        }
        function ee(z, q) {
          q = q || {};
          var m = z.config,
            M = m.easing,
            N = q.tab;
          if (N !== z.current) {
            z.current = N;
            var B;
            z.links.each(function (p, g) {
              var X = e(g);
              if (q.immediate || m.immediate) {
                var j = z.panes[p];
                g.id || (g.id = z.tabIdentifier + "-" + p),
                  j.id || (j.id = z.paneIdentifier + "-" + p),
                  (g.href = "#" + j.id),
                  g.setAttribute("role", "tab"),
                  g.setAttribute("aria-controls", j.id),
                  g.setAttribute("aria-selected", "false"),
                  j.setAttribute("role", "tabpanel"),
                  j.setAttribute("aria-labelledby", g.id);
              }
              g.getAttribute(h) === N
                ? ((B = g),
                  X.addClass(T)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(y.intro))
                : X.hasClass(T) &&
                  X.removeClass(T)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(y.outro);
            });
            var P = [],
              H = [];
            z.panes.each(function (p, g) {
              var X = e(g);
              g.getAttribute(h) === N ? P.push(g) : X.hasClass(E) && H.push(g);
            });
            var w = e(P),
              k = e(H);
            if (q.immediate || m.immediate) {
              w.addClass(E).each(y.intro),
                k.removeClass(E),
                O || Pt.redraw.up();
              return;
            } else {
              var v = window.scrollX,
                l = window.scrollY;
              B.focus(), window.scrollTo(v, l);
            }
            k.length && m.outro
              ? (k.each(y.outro),
                r(k)
                  .add("opacity " + m.outro + "ms " + M, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => oe(m, k, w)))
              : oe(m, k, w);
          }
        }
        function oe(z, q, m) {
          if (
            (q
              .removeClass(E)
              .css({
                opacity: "",
                transition: "",
                transform: "",
                width: "",
                height: "",
              }),
            m.addClass(E).each(y.intro),
            Pt.redraw.up(),
            !z.intro)
          )
            return r(m).set({ opacity: 1 });
          r(m)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + z.intro + "ms " + z.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Vs();
  Bs();
  js();
  zs();
  $s();
  mn();
  tu();
  Sr();
  Cy();
  qy();
  Py();
  My();
  Xy();
  Vy();
  By();
  Ky();
  Yy();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require("ix").init([
  {
    slug: "slide-in",
    name: "Slide in",
    value: {
      style: {},
      triggers: [
        {
          type: "click",
          selector: ".overlay-impressum",
          preserve3d: true,
          stepsA: [
            { display: "flex" },
            {
              opacity: 1,
              transition:
                "transform 400ms ease 0, opacity 400ms ease 0, height 200 ease 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
      ],
    },
  },
  {
    slug: "slide-in-2",
    name: "Slide in 2",
    value: {
      style: {},
      triggers: [
        {
          type: "click",
          selector: ".overlay-impressum",
          preserve3d: true,
          stepsA: [
            { display: "flex" },
            {
              opacity: 1,
              transition:
                "transform 400ms ease 0, opacity 400ms ease-out 0, height 200 ease 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
      ],
    },
  },
  {
    slug: "slide-in-2haftung",
    name: "Slide in 2Haftung",
    value: {
      style: {},
      triggers: [
        {
          type: "click",
          selector: ".overlay-haftung",
          preserve3d: true,
          stepsA: [
            { display: "flex" },
            {
              opacity: 1,
              transition:
                "transform 300ms ease-out 0, opacity 300ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
      ],
    },
  },
  {
    slug: "slide-in-datenschutz",
    name: "Slide in Datenschutz",
    value: {
      style: {},
      triggers: [
        {
          type: "click",
          selector: ".overlay-datenschutz",
          preserve3d: true,
          stepsA: [
            { display: "flex" },
            {
              opacity: 1,
              transition:
                "transform 300ms ease-out 0, opacity 300ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
      ],
    },
  },
  {
    slug: "slide-out",
    name: "Slide out",
    value: {
      style: {},
      triggers: [
        {
          type: "click",
          selector: ".overlay-impressum",
          preserve3d: true,
          stepsA: [
            {
              opacity: 0,
              transition:
                "transform 300ms ease-out 0, opacity 300ms ease-out 0",
              x: "0px",
              y: "100%",
              z: "0px",
            },
            { display: "none" },
          ],
          stepsB: [],
        },
      ],
    },
  },
  {
    slug: "slide-out-2haftung",
    name: "Slide out 2haftung",
    value: {
      style: {},
      triggers: [
        {
          type: "click",
          selector: ".overlay-haftung",
          preserve3d: true,
          stepsA: [
            {
              opacity: 0,
              transition:
                "transform 300ms ease-out 0, opacity 300ms ease-out 0",
              x: "0px",
              y: "100%",
              z: "0px",
            },
            { display: "none" },
          ],
          stepsB: [],
        },
      ],
    },
  },
  {
    slug: "slide-out-datenschutz",
    name: "Slide out Datenschutz",
    value: {
      style: {},
      triggers: [
        {
          type: "click",
          selector: ".overlay-datenschutz",
          preserve3d: true,
          stepsA: [
            {
              opacity: 0,
              transition:
                "transform 300ms ease-out 0, opacity 300ms ease-out 0",
              x: "0px",
              y: "100%",
              z: "0px",
            },
            { display: "none" },
          ],
          stepsB: [],
        },
      ],
    },
  },
  {
    slug: "team-loader",
    name: "team loader",
    value: {
      style: {},
      triggers: [
        {
          type: "load",
          selector: ".container-karte",
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition: "opacity 400ms ease 0, transform 400ms ease 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".hero-heading-1",
          descend: true,
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".section-mutter-und-sohn",
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition: "transform 1000ms ease-out 0, opacity 1000ms ease 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".schlieen-link-block",
          preload: true,
          stepsA: [
            { wait: "1000ms" },
            { opacity: 1, transition: "opacity 1000ms ease-out 0" },
          ],
          stepsB: [],
        },
      ],
    },
  },
  {
    slug: "geschichte-loader",
    name: "geschichte loader",
    value: {
      style: {},
      triggers: [
        {
          type: "load",
          selector: ".container-karte",
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition: "opacity 400ms ease 0, transform 400ms ease 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".hero-heading-1",
          descend: true,
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".rich-text-historia",
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition: "transform 1000ms ease-out 0, opacity 1000ms ease 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".schlieen-link-block",
          preload: true,
          stepsA: [
            { wait: "1000ms" },
            { opacity: 1, transition: "opacity 1000ms ease-out 0" },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".im-giovanna-geste",
          preload: true,
          preserve3d: true,
          stepsA: [
            { wait: "250ms" },
            {
              opacity: 1,
              transition: "transform 1000ms ease-out 0, opacity 1000ms ease 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
      ],
    },
  },
  {
    slug: "karte-loader-2",
    name: "karte loader 2",
    value: {
      style: {},
      triggers: [
        {
          type: "load",
          selector: ".hero-heading-1",
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".tabs-karte",
          preload: true,
          stepsA: [
            { wait: "250ms" },
            {
              opacity: 1,
              transition: "transform 1000ms ease-out 0, opacity 1000ms ease 0",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".reservieren-karte",
          preload: true,
          stepsA: [
            { wait: "1250ms" },
            { opacity: 1, transition: "opacity 300ms ease-out 0" },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".container-karte",
          preload: true,
          stepsA: [{ opacity: 1, transition: "opacity 400ms ease 0" }],
          stepsB: [],
        },
      ],
    },
  },
  {
    slug: "leader-hero-ristorante",
    name: "leader hero ristorante",
    value: {
      style: {},
      triggers: [
        {
          type: "load",
          selector: ".barba-container",
          preload: true,
          preserve3d: true,
          stepsA: [
            { wait: "1250ms" },
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".pulpo-hero",
          preload: true,
          preserve3d: true,
          stepsA: [
            { wait: "1250ms" },
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".giovanna-hero-cooking",
          preload: true,
          preserve3d: true,
          stepsA: [
            { wait: "1250ms" },
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".hero-heading-1",
          preload: true,
          preserve3d: true,
          stepsA: [
            { wait: "1500ms" },
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".wrapper-inpage-nav",
          preload: true,
          preserve3d: true,
          stepsA: [
            { wait: "1750ms" },
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 300ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
      ],
    },
  },
  {
    slug: "loader-hero-cursi",
    name: "loader hero cursi",
    value: {
      style: {},
      triggers: [
        {
          type: "load",
          selector: ".barba-container",
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".hero-background-cursi",
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".hero-cursi-fabio",
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".wrap-headings-cursi",
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".wrapper-inpage-nav",
          preload: true,
          preserve3d: true,
          stepsA: [
            { wait: "1000ms" },
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 300ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
      ],
    },
  },
  {
    slug: "loader-hero-acasatua",
    name: "loader hero acasatua",
    value: {
      style: {},
      triggers: [
        {
          type: "load",
          selector: ".barba-container",
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".hero-background-a-casa-tua",
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".wrap-headings-a-casa-tua",
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".hero-desciption-wrap-cursi-mobil",
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".wrapper-inpage-nav",
          preload: true,
          preserve3d: true,
          stepsA: [
            { wait: "1000ms" },
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 300ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
      ],
    },
  },
  {
    slug: "loader-hero-acasatua-2",
    name: "loader hero acasatua 2",
    value: {
      style: {},
      triggers: [
        {
          type: "load",
          selector: ".barba-container",
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".oliven-ll-hero",
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".wrap-headings-a-casa-tua",
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".hero-desciption-wrap-produit",
          preload: true,
          preserve3d: true,
          stepsA: [
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 1000ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
        {
          type: "load",
          selector: ".wrapper-inpage-nav",
          preload: true,
          preserve3d: true,
          stepsA: [
            { wait: "1000ms" },
            {
              opacity: 1,
              transition:
                "transform 1000ms ease-out 0, opacity 300ms ease-out 0",
              x: "0px",
              y: "0px",
              z: "0px",
            },
          ],
          stepsB: [],
        },
      ],
    },
  },
  {
    slug: "loader-logo",
    name: "loader logo",
    value: {
      style: {},
      triggers: [
        {
          type: "load",
          selector: ".full-screen-overlay",
          stepsA: [
            { wait: "2250ms" },
            { opacity: 0, transition: "opacity 750ms ease-out 0" },
            { display: "none" },
          ],
          stepsB: [],
        },
      ],
    },
  },
  {
    slug: "loader-fade-out-tablet",
    name: "loader fade out tablet",
    value: {
      style: {},
      triggers: [
        {
          type: "load",
          selector: ".full-screen-overlay",
          preload: true,
          stepsA: [
            { wait: "1000ms" },
            { opacity: 0, transition: "opacity 750ms ease-out 0" },
            { display: "none" },
          ],
          stepsB: [],
        },
      ],
    },
  },
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|75ccc250-1eb0-43bd-9280-47f87919763f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|75ccc250-1eb0-43bd-9280-47f87919763f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1516206096032,
    },
    "e-2": {
      id: "e-2",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|75ccc250-1eb0-43bd-9280-47f87919763f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|75ccc250-1eb0-43bd-9280-47f87919763f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516206096034,
    },
    "e-3": {
      id: "e-3",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|e068cd69-42b8-0ad8-b348-40fe719be438",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|e068cd69-42b8-0ad8-b348-40fe719be438",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516220959690,
    },
    "e-4": {
      id: "e-4",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|e068cd69-42b8-0ad8-b348-40fe719be438",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|e068cd69-42b8-0ad8-b348-40fe719be438",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516220959690,
    },
    "e-5": {
      id: "e-5",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|0485484c-8935-db9f-4407-5040257aa74f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|0485484c-8935-db9f-4407-5040257aa74f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516224011352,
    },
    "e-6": {
      id: "e-6",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-5",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|0485484c-8935-db9f-4407-5040257aa74f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|0485484c-8935-db9f-4407-5040257aa74f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516224011353,
    },
    "e-7": {
      id: "e-7",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|b3ccee14-6e51-08bd-391b-ec9f6f371322",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|b3ccee14-6e51-08bd-391b-ec9f6f371322",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516229915235,
    },
    "e-8": {
      id: "e-8",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-7",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|b3ccee14-6e51-08bd-391b-ec9f6f371322",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|b3ccee14-6e51-08bd-391b-ec9f6f371322",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516229915236,
    },
    "e-9": {
      id: "e-9",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|52647542-0cd4-cc65-225f-5fffc9a06c7a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|52647542-0cd4-cc65-225f-5fffc9a06c7a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516276450405,
    },
    "e-10": {
      id: "e-10",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-9",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|52647542-0cd4-cc65-225f-5fffc9a06c7a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|52647542-0cd4-cc65-225f-5fffc9a06c7a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516276450405,
    },
    "e-11": {
      id: "e-11",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|1d2eaa32-a46a-e7be-d7ac-f8d0bf9878e6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|1d2eaa32-a46a-e7be-d7ac-f8d0bf9878e6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516276523273,
    },
    "e-12": {
      id: "e-12",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|1d2eaa32-a46a-e7be-d7ac-f8d0bf9878e6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|1d2eaa32-a46a-e7be-d7ac-f8d0bf9878e6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516276523274,
    },
    "e-13": {
      id: "e-13",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|a7543a1e-2dcb-3b6a-09b7-b30f089c285d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|a7543a1e-2dcb-3b6a-09b7-b30f089c285d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516276613268,
    },
    "e-14": {
      id: "e-14",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|a7543a1e-2dcb-3b6a-09b7-b30f089c285d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|a7543a1e-2dcb-3b6a-09b7-b30f089c285d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516276613269,
    },
    "e-15": {
      id: "e-15",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|083cc3cc-8c2c-9142-cc54-32da3c12cdaf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|083cc3cc-8c2c-9142-cc54-32da3c12cdaf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516276682058,
    },
    "e-16": {
      id: "e-16",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|083cc3cc-8c2c-9142-cc54-32da3c12cdaf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|083cc3cc-8c2c-9142-cc54-32da3c12cdaf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516276682058,
    },
    "e-17": {
      id: "e-17",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|0d5bbb68-7ba9-af69-1c8f-dcf89de40db7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|0d5bbb68-7ba9-af69-1c8f-dcf89de40db7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516277094247,
    },
    "e-18": {
      id: "e-18",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-17",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|0d5bbb68-7ba9-af69-1c8f-dcf89de40db7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|0d5bbb68-7ba9-af69-1c8f-dcf89de40db7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516277094249,
    },
    "e-19": {
      id: "e-19",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-20",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".wrap-scroll-arrow",
        originalId:
          "63dced0024115d57a6e9b2e9|271f007e-f2bd-64d4-7dda-f6e2cc3a353d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".wrap-scroll-arrow",
          originalId:
            "63dced0024115d57a6e9b2e9|271f007e-f2bd-64d4-7dda-f6e2cc3a353d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516279835574,
    },
    "e-23": {
      id: "e-23",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|9962638c-4a79-c594-e333-e43d2103ed04",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|9962638c-4a79-c594-e333-e43d2103ed04",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 26,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516301290690,
    },
    "e-24": {
      id: "e-24",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-49",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|9962638c-4a79-c594-e333-e43d2103ed04",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|9962638c-4a79-c594-e333-e43d2103ed04",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516301290692,
    },
    "e-29": {
      id: "e-29",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|9c455bee-099f-04ac-ce6e-cfbde9720faa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|9c455bee-099f-04ac-ce6e-cfbde9720faa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516363517278,
    },
    "e-31": {
      id: "e-31",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|396b2984-2638-d325-c4f5-617c3c71ae61",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|396b2984-2638-d325-c4f5-617c3c71ae61",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516365769671,
    },
    "e-33": {
      id: "e-33",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-34",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|b2a83497-c5e0-05fd-3229-a045b599359d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|b2a83497-c5e0-05fd-3229-a045b599359d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516365809415,
    },
    "e-35": {
      id: "e-35",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {
            "63dced0024115d57a6e9b2e9|e42aef1a-a327-e136-ae57-e05a756d3659": {
              selector: ".heading.philosophie.esperienza",
              selectorGuids: [
                "8effcdc8-d176-35c2-4b6d-1eba06b1e4ac",
                "1308007a-8c15-4de3-20d5-c9386d94d816",
                "59eca32a-7051-9412-00d0-669b8f88f308",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|a4d5baff-75fe-f1ad-a352-516cced3590c": {
              selector: ".img-slider",
              selectorGuids: ["0a3cb0b6-444a-6e43-42ff-44633a04f263"],
              limitAffectedElements: "CHILDREN",
            },
            "63dced0024115d57a6e9b2e9|7e992478-2c1b-9965-db2d-9571753a729c": {
              selector: ".slider-img-background",
              selectorGuids: ["7049ca8a-9cf9-8f80-62c9-c6de6230217a"],
              limitAffectedElements: "CHILDREN",
            },
            "63dced0024115d57a6e9b2e9|263b6a01-74ea-83b2-f09a-65334ffb568d": {
              selector: ".slider-annotation",
              selectorGuids: ["7c0a8e8c-5e15-c72b-4294-ffbe15df84ee"],
              limitAffectedElements: "CHILDREN",
            },
          },
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|396b2984-2638-d325-c4f5-617c3c71ae61",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|396b2984-2638-d325-c4f5-617c3c71ae61",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516378666772,
    },
    "e-36": {
      id: "e-36",
      animationType: "custom",
      eventTypeId: "SLIDER_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {
            "63dced0024115d57a6e9b2e9|e42aef1a-a327-e136-ae57-e05a756d3659": {
              selector: ".heading.philosophie.esperienza",
              selectorGuids: [
                "8effcdc8-d176-35c2-4b6d-1eba06b1e4ac",
                "1308007a-8c15-4de3-20d5-c9386d94d816",
                "59eca32a-7051-9412-00d0-669b8f88f308",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|7e992478-2c1b-9965-db2d-9571753a729c": {
              selector: ".slider-img-background",
              selectorGuids: ["7049ca8a-9cf9-8f80-62c9-c6de6230217a"],
              limitAffectedElements: "CHILDREN",
            },
            "63dced0024115d57a6e9b2e9|263b6a01-74ea-83b2-f09a-65334ffb568d": {
              selector: ".slider-annotation",
              selectorGuids: ["7c0a8e8c-5e15-c72b-4294-ffbe15df84ee"],
              limitAffectedElements: "CHILDREN",
            },
            "63dced0024115d57a6e9b2e9|a4d5baff-75fe-f1ad-a352-516cced3590c": {
              selector: ".img-slider",
              selectorGuids: ["0a3cb0b6-444a-6e43-42ff-44633a04f263"],
              limitAffectedElements: "CHILDREN",
            },
          },
          playInReverse: false,
          autoStopEventId: "e-35",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|396b2984-2638-d325-c4f5-617c3c71ae61",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|396b2984-2638-d325-c4f5-617c3c71ae61",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516378666773,
    },
    "e-37": {
      id: "e-37",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {
            "63dced0024115d57a6e9b2e9|e42aef1a-a327-e136-ae57-e05a756d3659": {
              selector: ".heading.philosophie.passione",
              selectorGuids: [
                "8effcdc8-d176-35c2-4b6d-1eba06b1e4ac",
                "1308007a-8c15-4de3-20d5-c9386d94d816",
                "b6d9d594-28cf-d0aa-cd4d-9f9edad744d4",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|a4d5baff-75fe-f1ad-a352-516cced3590c": {
              selector: ".img-slider",
              selectorGuids: ["0a3cb0b6-444a-6e43-42ff-44633a04f263"],
              limitAffectedElements: "CHILDREN",
            },
            "63dced0024115d57a6e9b2e9|7e992478-2c1b-9965-db2d-9571753a729c": {
              selector: ".slider-img-background",
              selectorGuids: ["7049ca8a-9cf9-8f80-62c9-c6de6230217a"],
              limitAffectedElements: "CHILDREN",
            },
            "63dced0024115d57a6e9b2e9|263b6a01-74ea-83b2-f09a-65334ffb568d": {
              selector: ".slider-annotation",
              selectorGuids: ["7c0a8e8c-5e15-c72b-4294-ffbe15df84ee"],
              limitAffectedElements: "CHILDREN",
            },
          },
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|b2a83497-c5e0-05fd-3229-a045b599359d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|b2a83497-c5e0-05fd-3229-a045b599359d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516459543927,
    },
    "e-38": {
      id: "e-38",
      animationType: "custom",
      eventTypeId: "SLIDER_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {
            "63dced0024115d57a6e9b2e9|e42aef1a-a327-e136-ae57-e05a756d3659": {
              selector: ".heading.philosophie.passione",
              selectorGuids: [
                "8effcdc8-d176-35c2-4b6d-1eba06b1e4ac",
                "1308007a-8c15-4de3-20d5-c9386d94d816",
                "b6d9d594-28cf-d0aa-cd4d-9f9edad744d4",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|7e992478-2c1b-9965-db2d-9571753a729c": {
              selector: ".slider-img-background",
              selectorGuids: ["7049ca8a-9cf9-8f80-62c9-c6de6230217a"],
              limitAffectedElements: "CHILDREN",
            },
            "63dced0024115d57a6e9b2e9|263b6a01-74ea-83b2-f09a-65334ffb568d": {
              selector: ".slider-annotation",
              selectorGuids: ["7c0a8e8c-5e15-c72b-4294-ffbe15df84ee"],
              limitAffectedElements: "CHILDREN",
            },
            "63dced0024115d57a6e9b2e9|a4d5baff-75fe-f1ad-a352-516cced3590c": {
              selector: ".img-slider",
              selectorGuids: ["0a3cb0b6-444a-6e43-42ff-44633a04f263"],
              limitAffectedElements: "CHILDREN",
            },
          },
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|b2a83497-c5e0-05fd-3229-a045b599359d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|b2a83497-c5e0-05fd-3229-a045b599359d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516459543929,
    },
    "e-39": {
      id: "e-39",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {
            "63dced0024115d57a6e9b2e9|e42aef1a-a327-e136-ae57-e05a756d3659": {
              selector: ".heading.philosophie.nannina",
              selectorGuids: [
                "8effcdc8-d176-35c2-4b6d-1eba06b1e4ac",
                "1308007a-8c15-4de3-20d5-c9386d94d816",
                "96cef894-ed9b-06e1-815a-63c6dfd3b532",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|a4d5baff-75fe-f1ad-a352-516cced3590c": {
              selector: ".img-slider",
              selectorGuids: ["0a3cb0b6-444a-6e43-42ff-44633a04f263"],
              limitAffectedElements: "CHILDREN",
            },
            "63dced0024115d57a6e9b2e9|7e992478-2c1b-9965-db2d-9571753a729c": {
              selector: ".slider-img-background",
              selectorGuids: ["7049ca8a-9cf9-8f80-62c9-c6de6230217a"],
              limitAffectedElements: "CHILDREN",
            },
            "63dced0024115d57a6e9b2e9|263b6a01-74ea-83b2-f09a-65334ffb568d": {
              selector: ".slider-annotation",
              selectorGuids: ["7c0a8e8c-5e15-c72b-4294-ffbe15df84ee"],
              limitAffectedElements: "CHILDREN",
            },
          },
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|9c455bee-099f-04ac-ce6e-cfbde9720faa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|9c455bee-099f-04ac-ce6e-cfbde9720faa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516460586220,
    },
    "e-40": {
      id: "e-40",
      animationType: "custom",
      eventTypeId: "SLIDER_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {
            "63dced0024115d57a6e9b2e9|7e992478-2c1b-9965-db2d-9571753a729c": {
              selector: ".slider-img-background",
              selectorGuids: ["7049ca8a-9cf9-8f80-62c9-c6de6230217a"],
              limitAffectedElements: "CHILDREN",
            },
            "63dced0024115d57a6e9b2e9|e42aef1a-a327-e136-ae57-e05a756d3659": {
              selector: ".heading.philosophie.nannina",
              selectorGuids: [
                "8effcdc8-d176-35c2-4b6d-1eba06b1e4ac",
                "1308007a-8c15-4de3-20d5-c9386d94d816",
                "96cef894-ed9b-06e1-815a-63c6dfd3b532",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|263b6a01-74ea-83b2-f09a-65334ffb568d": {
              selector: ".slider-annotation",
              selectorGuids: ["7c0a8e8c-5e15-c72b-4294-ffbe15df84ee"],
              limitAffectedElements: "CHILDREN",
            },
            "63dced0024115d57a6e9b2e9|a4d5baff-75fe-f1ad-a352-516cced3590c": {
              selector: ".img-slider",
              selectorGuids: ["0a3cb0b6-444a-6e43-42ff-44633a04f263"],
              limitAffectedElements: "CHILDREN",
            },
          },
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|9c455bee-099f-04ac-ce6e-cfbde9720faa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|9c455bee-099f-04ac-ce6e-cfbde9720faa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516460586222,
    },
    "e-43": {
      id: "e-43",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-44",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63dced0024115d57a6e9b2e9|591fc26d-be7c-6770-10a4-b02b6ff4c1b3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|591fc26d-be7c-6770-10a4-b02b6ff4c1b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516540498092,
    },
    "e-44": {
      id: "e-44",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-43",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63dced0024115d57a6e9b2e9|591fc26d-be7c-6770-10a4-b02b6ff4c1b3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|591fc26d-be7c-6770-10a4-b02b6ff4c1b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516540498094,
    },
    "e-45": {
      id: "e-45",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|396b2984-2638-d325-c4f5-617c3c71ae61",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|396b2984-2638-d325-c4f5-617c3c71ae61",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516542225924,
    },
    "e-47": {
      id: "e-47",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-48",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|b2a83497-c5e0-05fd-3229-a045b599359d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|b2a83497-c5e0-05fd-3229-a045b599359d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516628384594,
    },
    "e-49": {
      id: "e-49",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-50",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|9c455bee-099f-04ac-ce6e-cfbde9720faa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|9c455bee-099f-04ac-ce6e-cfbde9720faa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516628468452,
    },
    "e-51": {
      id: "e-51",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {
            "63dced0024115d57a6e9b2e9|1adf63ee-f385-fe01-b362-fc49fdb55dc6": {
              selector: ".number-current-slide-2.voce",
              selectorGuids: [
                "62a888af-9efa-0df3-ccca-df1207b33b24",
                "180e9242-3568-94a8-d14a-190a62027952",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|8892eded-2668-c251-13c9-3eea35b0a763": {
              selector: ".number-current-slide-3.voce",
              selectorGuids: [
                "18a4c5d7-3f3d-2a06-3d85-fceddab5ec9b",
                "d6f76d15-07fd-7553-3c40-da6392736e13",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|3ce83360-35bc-75ca-47af-f25138c6fdf3": {
              selector: ".number-current-slide-1.voce",
              selectorGuids: [
                "0d69c3aa-1fd8-d689-e8fb-8d8078bbab09",
                "0b956f7e-1137-1e6b-2109-20379ef9242c",
              ],
              limitAffectedElements: null,
            },
          },
          playInReverse: false,
          autoStopEventId: "e-52",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|fde7f868-1812-00fb-f56a-895e7d5c57c1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|fde7f868-1812-00fb-f56a-895e7d5c57c1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516628765512,
    },
    "e-53": {
      id: "e-53",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {
            "63dced0024115d57a6e9b2e9|3ce83360-35bc-75ca-47af-f25138c6fdf3": {
              selector: ".number-current-slide-1.voce",
              selectorGuids: [
                "0d69c3aa-1fd8-d689-e8fb-8d8078bbab09",
                "0b956f7e-1137-1e6b-2109-20379ef9242c",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|8892eded-2668-c251-13c9-3eea35b0a763": {
              selector: ".number-current-slide-3.voce",
              selectorGuids: [
                "18a4c5d7-3f3d-2a06-3d85-fceddab5ec9b",
                "d6f76d15-07fd-7553-3c40-da6392736e13",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|1adf63ee-f385-fe01-b362-fc49fdb55dc6": {
              selector: ".number-current-slide-2.voce",
              selectorGuids: [
                "62a888af-9efa-0df3-ccca-df1207b33b24",
                "180e9242-3568-94a8-d14a-190a62027952",
              ],
              limitAffectedElements: null,
            },
          },
          playInReverse: false,
          autoStopEventId: "e-54",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|e5729465-3917-fcd1-0b42-787f89a4ac45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|e5729465-3917-fcd1-0b42-787f89a4ac45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516629110704,
    },
    "e-55": {
      id: "e-55",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {
            "63dced0024115d57a6e9b2e9|3ce83360-35bc-75ca-47af-f25138c6fdf3": {
              selector: ".number-current-slide-1.voce",
              selectorGuids: [
                "0d69c3aa-1fd8-d689-e8fb-8d8078bbab09",
                "0b956f7e-1137-1e6b-2109-20379ef9242c",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|8892eded-2668-c251-13c9-3eea35b0a763": {
              selector: ".number-current-slide-3.voce",
              selectorGuids: [
                "18a4c5d7-3f3d-2a06-3d85-fceddab5ec9b",
                "d6f76d15-07fd-7553-3c40-da6392736e13",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|1adf63ee-f385-fe01-b362-fc49fdb55dc6": {
              selector: ".number-current-slide-2.voce",
              selectorGuids: [
                "62a888af-9efa-0df3-ccca-df1207b33b24",
                "180e9242-3568-94a8-d14a-190a62027952",
              ],
              limitAffectedElements: null,
            },
          },
          playInReverse: false,
          autoStopEventId: "e-56",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|02c20f00-0de9-e68e-1b3a-15c1d34db24c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|02c20f00-0de9-e68e-1b3a-15c1d34db24c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516629210468,
    },
    "e-57": {
      id: "e-57",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {
            "63dced0024115d57a6e9b2e9|154b3d3f-c7e3-4cfb-cee3-29d028beab32": {
              selector: ".section-indicator-moving",
              selectorGuids: ["55fabc06-171d-d4ed-863c-e7ac2341c173"],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|d4098951-24e6-6c75-d094-e775d2406d37": {
              selector: ".number-section-nav",
              selectorGuids: ["e075c236-a796-a2c9-6461-c6c465c4b93e"],
              limitAffectedElements: null,
            },
          },
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|29df489e-185d-656c-b970-e5d4c82883c0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|29df489e-185d-656c-b970-e5d4c82883c0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516985612439,
    },
    "e-58": {
      id: "e-58",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {
            "63dced0024115d57a6e9b2e9|154b3d3f-c7e3-4cfb-cee3-29d028beab32": {
              selector: ".section-indicator-moving",
              selectorGuids: ["55fabc06-171d-d4ed-863c-e7ac2341c173"],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|d4098951-24e6-6c75-d094-e775d2406d37": {
              selector: ".number-section-nav",
              selectorGuids: ["e075c236-a796-a2c9-6461-c6c465c4b93e"],
              limitAffectedElements: null,
            },
          },
          playInReverse: false,
          autoStopEventId: "e-57",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|29df489e-185d-656c-b970-e5d4c82883c0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|29df489e-185d-656c-b970-e5d4c82883c0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1516985612442,
    },
    "e-63": {
      id: "e-63",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {
            "63dced0024115d57a6e9b2e9|1adf63ee-f385-fe01-b362-fc49fdb55dc6": {
              selector: ".number-current-slide-2.voce",
              selectorGuids: [
                "62a888af-9efa-0df3-ccca-df1207b33b24",
                "180e9242-3568-94a8-d14a-190a62027952",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|8892eded-2668-c251-13c9-3eea35b0a763": {
              selector: ".number-current-slide-3.voce",
              selectorGuids: [
                "18a4c5d7-3f3d-2a06-3d85-fceddab5ec9b",
                "d6f76d15-07fd-7553-3c40-da6392736e13",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|3ce83360-35bc-75ca-47af-f25138c6fdf3": {
              selector: ".number-current-slide-1.voce",
              selectorGuids: [
                "0d69c3aa-1fd8-d689-e8fb-8d8078bbab09",
                "0b956f7e-1137-1e6b-2109-20379ef9242c",
              ],
              limitAffectedElements: null,
            },
          },
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115ddf70e9b2ef|17ca95ec-acca-bc7f-3fde-041396c73334",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115ddf70e9b2ef|17ca95ec-acca-bc7f-3fde-041396c73334",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521542000028,
    },
    "e-65": {
      id: "e-65",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {
            "63dced0024115d57a6e9b2e9|3ce83360-35bc-75ca-47af-f25138c6fdf3": {
              selector: ".number-current-slide-1.voce",
              selectorGuids: [
                "0d69c3aa-1fd8-d689-e8fb-8d8078bbab09",
                "0b956f7e-1137-1e6b-2109-20379ef9242c",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|8892eded-2668-c251-13c9-3eea35b0a763": {
              selector: ".number-current-slide-3.voce",
              selectorGuids: [
                "18a4c5d7-3f3d-2a06-3d85-fceddab5ec9b",
                "d6f76d15-07fd-7553-3c40-da6392736e13",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|1adf63ee-f385-fe01-b362-fc49fdb55dc6": {
              selector: ".number-current-slide-2.voce",
              selectorGuids: [
                "62a888af-9efa-0df3-ccca-df1207b33b24",
                "180e9242-3568-94a8-d14a-190a62027952",
              ],
              limitAffectedElements: null,
            },
          },
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115ddf70e9b2ef|17ca95ec-acca-bc7f-3fde-041396c73349",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115ddf70e9b2ef|17ca95ec-acca-bc7f-3fde-041396c73349",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521542000028,
    },
    "e-67": {
      id: "e-67",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {
            "63dced0024115d57a6e9b2e9|3ce83360-35bc-75ca-47af-f25138c6fdf3": {
              selector: ".number-current-slide-1.voce",
              selectorGuids: [
                "0d69c3aa-1fd8-d689-e8fb-8d8078bbab09",
                "0b956f7e-1137-1e6b-2109-20379ef9242c",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|8892eded-2668-c251-13c9-3eea35b0a763": {
              selector: ".number-current-slide-3.voce",
              selectorGuids: [
                "18a4c5d7-3f3d-2a06-3d85-fceddab5ec9b",
                "d6f76d15-07fd-7553-3c40-da6392736e13",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|1adf63ee-f385-fe01-b362-fc49fdb55dc6": {
              selector: ".number-current-slide-2.voce",
              selectorGuids: [
                "62a888af-9efa-0df3-ccca-df1207b33b24",
                "180e9242-3568-94a8-d14a-190a62027952",
              ],
              limitAffectedElements: null,
            },
          },
          playInReverse: false,
          autoStopEventId: "e-68",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115ddf70e9b2ef|17ca95ec-acca-bc7f-3fde-041396c7335e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115ddf70e9b2ef|17ca95ec-acca-bc7f-3fde-041396c7335e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521542000028,
    },
    "e-69": {
      id: "e-69",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-70",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "fe9cd8c2-45c5-5fcb-0a7d-e063cb259afb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "fe9cd8c2-45c5-5fcb-0a7d-e063cb259afb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521543752999,
    },
    "e-71": {
      id: "e-71",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-72",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521546688267,
    },
    "e-77": {
      id: "e-77",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68127a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68127a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521552700058,
    },
    "e-78": {
      id: "e-78",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-77",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68127a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68127a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521552700058,
    },
    "e-79": {
      id: "e-79",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68129f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68129f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521552700058,
    },
    "e-80": {
      id: "e-80",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-79",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68129f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68129f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521552700058,
    },
    "e-81": {
      id: "e-81",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-82",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812a4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812a4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1521552700058,
    },
    "e-82": {
      id: "e-82",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-81",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812a4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812a4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521552700058,
    },
    "e-83": {
      id: "e-83",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-84",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812a9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812a9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521552700058,
    },
    "e-84": {
      id: "e-84",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-83",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812a9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812a9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521552700058,
    },
    "e-85": {
      id: "e-85",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-39",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-86",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521552700058,
    },
    "e-86": {
      id: "e-86",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-85",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521552700058,
    },
    "e-87": {
      id: "e-87",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-88",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812b3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521552700058,
    },
    "e-88": {
      id: "e-88",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-87",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812b3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521552700058,
    },
    "e-95": {
      id: "e-95",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-96",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812c8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec6812c8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521552700058,
    },
    "e-97": {
      id: "e-97",
      animationType: "custom",
      eventTypeId: "TAB_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-98",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dba4ee9b2f2|cb4ff9d2-e8cd-2cf2-7384-c116b3eb571d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dba4ee9b2f2|cb4ff9d2-e8cd-2cf2-7384-c116b3eb571d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521896621276,
    },
    "e-99": {
      id: "e-99",
      animationType: "custom",
      eventTypeId: "TAB_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-100",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dba4ee9b2f2|eded2a97-2def-b3c9-0bac-a35977076a7b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dba4ee9b2f2|eded2a97-2def-b3c9-0bac-a35977076a7b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521896725359,
    },
    "e-101": {
      id: "e-101",
      animationType: "custom",
      eventTypeId: "TAB_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-102",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dba4ee9b2f2|e101ed6e-4444-f6e6-212e-26dcafec3585",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dba4ee9b2f2|e101ed6e-4444-f6e6-212e-26dcafec3585",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521896797958,
    },
    "e-103": {
      id: "e-103",
      animationType: "custom",
      eventTypeId: "TAB_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-104",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dba4ee9b2f2|d71b379a-e77c-0d41-7fdd-cbd420d35c6b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dba4ee9b2f2|d71b379a-e77c-0d41-7fdd-cbd420d35c6b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521896854435,
    },
    "e-105": {
      id: "e-105",
      animationType: "custom",
      eventTypeId: "TAB_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-106",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dba4ee9b2f2|6677a136-66a1-6f03-dbcb-191b72efe54d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dba4ee9b2f2|6677a136-66a1-6f03-dbcb-191b72efe54d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1521896877270,
    },
    "e-109": {
      id: "e-109",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-48",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-110",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|fe757b01-85e6-672d-8484-a3b35e4827eb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|fe757b01-85e6-672d-8484-a3b35e4827eb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522339685037,
    },
    "e-110": {
      id: "e-110",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {
            "63dced0024115d57a6e9b2e9|d4098951-24e6-6c75-d094-e775d2406d37": {
              selector: ".number-section-nav",
              selectorGuids: ["e075c236-a796-a2c9-6461-c6c465c4b93e"],
              limitAffectedElements: null,
            },
            "63dced0024115d57a6e9b2e9|154b3d3f-c7e3-4cfb-cee3-29d028beab32": {
              selector: ".section-indicator-moving",
              selectorGuids: ["55fabc06-171d-d4ed-863c-e7ac2341c173"],
              limitAffectedElements: null,
            },
          },
          playInReverse: false,
          autoStopEventId: "e-109",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|fe757b01-85e6-672d-8484-a3b35e4827eb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|fe757b01-85e6-672d-8484-a3b35e4827eb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522339685037,
    },
    "e-111": {
      id: "e-111",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-112",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff195f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff195f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522344689291,
    },
    "e-112": {
      id: "e-112",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-111",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff195f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff195f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522344689291,
    },
    "e-113": {
      id: "e-113",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-43",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-114",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff197e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff197e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522344689291,
    },
    "e-114": {
      id: "e-114",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-113",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff197e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff197e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522344689291,
    },
    "e-115": {
      id: "e-115",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-116",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1983",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1983",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1522344689291,
    },
    "e-116": {
      id: "e-116",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-115",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1983",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1983",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522344689291,
    },
    "e-117": {
      id: "e-117",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-46",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-118",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1988",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1988",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522344689291,
    },
    "e-118": {
      id: "e-118",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-117",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1988",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1988",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522344689291,
    },
    "e-119": {
      id: "e-119",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-47",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-120",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff198d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff198d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522344689291,
    },
    "e-120": {
      id: "e-120",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-119",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff198d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff198d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522344689291,
    },
    "e-123": {
      id: "e-123",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-124",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1998",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1998",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522344689291,
    },
    "e-135": {
      id: "e-135",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-55",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-136",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d37ffe9b2f3",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d37ffe9b2f3",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522416034806,
    },
    "e-137": {
      id: "e-137",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-56",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-138",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d20b7e9b2ed",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d20b7e9b2ed",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522498368847,
    },
    "e-139": {
      id: "e-139",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-140",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d37ffe9b2f3|1558051c-5bb7-c372-0743-5801f8290ee1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d37ffe9b2f3|1558051c-5bb7-c372-0743-5801f8290ee1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522592264445,
    },
    "e-141": {
      id: "e-141",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-142",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|593857b5-3e83-66bc-f8ef-7b5568a3e0c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|593857b5-3e83-66bc-f8ef-7b5568a3e0c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522592471739,
    },
    "e-143": {
      id: "e-143",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-57",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-144",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115ddf70e9b2ef|ce16f4fa-f619-88bb-f94a-972198b40761",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115ddf70e9b2ef|ce16f4fa-f619-88bb-f94a-972198b40761",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522592556775,
    },
    "e-145": {
      id: "e-145",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-57",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-146",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|bd6f358b-1072-27ee-5df5-42cdb32795af",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|bd6f358b-1072-27ee-5df5-42cdb32795af",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522592962183,
    },
    "e-147": {
      id: "e-147",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-57",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-148",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d20b7e9b2ed|d8e312e5-c579-2d6d-77f6-75c5b181f96f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d20b7e9b2ed|d8e312e5-c579-2d6d-77f6-75c5b181f96f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522598418219,
    },
    "e-173": {
      id: "e-173",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-72",
          affectedElements: {
            "63dced0024115d3c17e9b2f0|1adf63ee-f385-fe01-b362-fc49fdb55dc6": {
              selector: ".number-current-slide-2.voce",
              selectorGuids: [
                "62a888af-9efa-0df3-ccca-df1207b33b24",
                "180e9242-3568-94a8-d14a-190a62027952",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d3c17e9b2f0|8892eded-2668-c251-13c9-3eea35b0a763": {
              selector: ".number-current-slide-3.voce",
              selectorGuids: [
                "18a4c5d7-3f3d-2a06-3d85-fceddab5ec9b",
                "d6f76d15-07fd-7553-3c40-da6392736e13",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d3c17e9b2f0|3ce83360-35bc-75ca-47af-f25138c6fdf3": {
              selector: ".number-current-slide-1.voce",
              selectorGuids: [
                "0d69c3aa-1fd8-d689-e8fb-8d8078bbab09",
                "0b956f7e-1137-1e6b-2109-20379ef9242c",
              ],
              limitAffectedElements: null,
            },
          },
          playInReverse: false,
          autoStopEventId: "e-174",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|17ca95ec-acca-bc7f-3fde-041396c73334",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|17ca95ec-acca-bc7f-3fde-041396c73334",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522930101405,
    },
    "e-175": {
      id: "e-175",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-73",
          affectedElements: {
            "63dced0024115d3c17e9b2f0|3ce83360-35bc-75ca-47af-f25138c6fdf3": {
              selector: ".number-current-slide-1.voce",
              selectorGuids: [
                "0d69c3aa-1fd8-d689-e8fb-8d8078bbab09",
                "0b956f7e-1137-1e6b-2109-20379ef9242c",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d3c17e9b2f0|8892eded-2668-c251-13c9-3eea35b0a763": {
              selector: ".number-current-slide-3.voce",
              selectorGuids: [
                "18a4c5d7-3f3d-2a06-3d85-fceddab5ec9b",
                "d6f76d15-07fd-7553-3c40-da6392736e13",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d3c17e9b2f0|1adf63ee-f385-fe01-b362-fc49fdb55dc6": {
              selector: ".number-current-slide-2.voce",
              selectorGuids: [
                "62a888af-9efa-0df3-ccca-df1207b33b24",
                "180e9242-3568-94a8-d14a-190a62027952",
              ],
              limitAffectedElements: null,
            },
          },
          playInReverse: false,
          autoStopEventId: "e-176",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|17ca95ec-acca-bc7f-3fde-041396c73349",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|17ca95ec-acca-bc7f-3fde-041396c73349",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522930101405,
    },
    "e-177": {
      id: "e-177",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-74",
          affectedElements: {
            "63dced0024115d3c17e9b2f0|3ce83360-35bc-75ca-47af-f25138c6fdf3": {
              selector: ".number-current-slide-1.voce",
              selectorGuids: [
                "0d69c3aa-1fd8-d689-e8fb-8d8078bbab09",
                "0b956f7e-1137-1e6b-2109-20379ef9242c",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d3c17e9b2f0|8892eded-2668-c251-13c9-3eea35b0a763": {
              selector: ".number-current-slide-3.voce",
              selectorGuids: [
                "18a4c5d7-3f3d-2a06-3d85-fceddab5ec9b",
                "d6f76d15-07fd-7553-3c40-da6392736e13",
              ],
              limitAffectedElements: null,
            },
            "63dced0024115d3c17e9b2f0|1adf63ee-f385-fe01-b362-fc49fdb55dc6": {
              selector: ".number-current-slide-2.voce",
              selectorGuids: [
                "62a888af-9efa-0df3-ccca-df1207b33b24",
                "180e9242-3568-94a8-d14a-190a62027952",
              ],
              limitAffectedElements: null,
            },
          },
          playInReverse: false,
          autoStopEventId: "e-178",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|17ca95ec-acca-bc7f-3fde-041396c7335e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|17ca95ec-acca-bc7f-3fde-041396c7335e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522930101405,
    },
    "e-179": {
      id: "e-179",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-75",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-180",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522930101405,
    },
    "e-181": {
      id: "e-181",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-76",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-182",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68127a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68127a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522930101405,
    },
    "e-182": {
      id: "e-182",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-77",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-181",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68127a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68127a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522930101405,
    },
    "e-183": {
      id: "e-183",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-78",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-184",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68129f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68129f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522930101405,
    },
    "e-184": {
      id: "e-184",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-79",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-183",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68129f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68129f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522930101405,
    },
    "e-185": {
      id: "e-185",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-80",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-186",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812a4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812a4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1522930101405,
    },
    "e-186": {
      id: "e-186",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-79",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-185",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812a4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812a4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522930101405,
    },
    "e-187": {
      id: "e-187",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-81",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-188",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812a9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812a9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522930101405,
    },
    "e-188": {
      id: "e-188",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-79",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-187",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812a9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812a9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522930101405,
    },
    "e-189": {
      id: "e-189",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-82",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-190",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522930101405,
    },
    "e-190": {
      id: "e-190",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-79",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-189",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522930101405,
    },
    "e-191": {
      id: "e-191",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-83",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-192",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812b3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522930101405,
    },
    "e-192": {
      id: "e-192",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-79",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-191",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812b3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522930101405,
    },
    "e-193": {
      id: "e-193",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-84",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-194",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812c8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec6812c8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522930101405,
    },
    "e-195": {
      id: "e-195",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-85",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-196",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|ce16f4fa-f619-88bb-f94a-972198b40761",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|ce16f4fa-f619-88bb-f94a-972198b40761",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522930101405,
    },
    "e-197": {
      id: "e-197",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-71",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-198",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|982a0354-5622-0f9f-acec-5008a6cf33fe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|982a0354-5622-0f9f-acec-5008a6cf33fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522944514309,
    },
    "e-199": {
      id: "e-199",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-86",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-200",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63dced0024115d3c17e9b2f0|90c022ed-e4e3-d10f-562f-4fc85fad305b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|90c022ed-e4e3-d10f-562f-4fc85fad305b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522947209100,
    },
    "e-200": {
      id: "e-200",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-87",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-199",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63dced0024115d3c17e9b2f0|90c022ed-e4e3-d10f-562f-4fc85fad305b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|90c022ed-e4e3-d10f-562f-4fc85fad305b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522947209109,
    },
    "e-201": {
      id: "e-201",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-88",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-202",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|896e7e6a-84c0-23b8-1189-f83cdfc24f16",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|896e7e6a-84c0-23b8-1189-f83cdfc24f16",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522947287347,
    },
    "e-202": {
      id: "e-202",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-89",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-201",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|896e7e6a-84c0-23b8-1189-f83cdfc24f16",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|896e7e6a-84c0-23b8-1189-f83cdfc24f16",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1522947287347,
    },
    "e-215": {
      id: "e-215",
      animationType: "custom",
      eventTypeId: "NAVBAR_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-95",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-216",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        selector: ".navigation-sidebar",
        originalId: "d3c66cde-9f0f-a2b0-ef91-d0b2a5006978",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".navigation-sidebar",
          originalId: "d3c66cde-9f0f-a2b0-ef91-d0b2a5006978",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523462460421,
    },
    "e-216": {
      id: "e-216",
      animationType: "custom",
      eventTypeId: "NAVBAR_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-97",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-215",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        selector: ".navigation-sidebar",
        originalId: "d3c66cde-9f0f-a2b0-ef91-d0b2a5006978",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".navigation-sidebar",
          originalId: "d3c66cde-9f0f-a2b0-ef91-d0b2a5006978",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523462460437,
    },
    "e-217": {
      id: "e-217",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-93",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-218",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".hover-sub-menu",
        originalId:
          "63dced0024115d57a6e9b2e9|5b1cc119-eda6-130a-0982-c5e781e0c9f7",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".hover-sub-menu",
          originalId:
            "63dced0024115d57a6e9b2e9|5b1cc119-eda6-130a-0982-c5e781e0c9f7",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523533452164,
    },
    "e-218": {
      id: "e-218",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-94",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-217",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".hover-sub-menu",
        originalId:
          "63dced0024115d57a6e9b2e9|5b1cc119-eda6-130a-0982-c5e781e0c9f7",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".hover-sub-menu",
          originalId:
            "63dced0024115d57a6e9b2e9|5b1cc119-eda6-130a-0982-c5e781e0c9f7",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523533452164,
    },
    "e-219": {
      id: "e-219",
      animationType: "custom",
      eventTypeId: "NAVBAR_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-95",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-220",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".navbar-mobil",
        originalId:
          "63dced0024115d57a6e9b2e9|024e0bce-7eea-4fbb-2208-02bcc6803053",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".navbar-mobil",
          originalId:
            "63dced0024115d57a6e9b2e9|024e0bce-7eea-4fbb-2208-02bcc6803053",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523627658344,
    },
    "e-220": {
      id: "e-220",
      animationType: "custom",
      eventTypeId: "NAVBAR_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-97",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-219",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".navbar-mobil",
        originalId:
          "63dced0024115d57a6e9b2e9|024e0bce-7eea-4fbb-2208-02bcc6803053",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".navbar-mobil",
          originalId:
            "63dced0024115d57a6e9b2e9|024e0bce-7eea-4fbb-2208-02bcc6803053",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523627658356,
    },
    "e-221": {
      id: "e-221",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-93",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-222",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        selector: ".hover-sub-menu",
        originalId:
          "63dced0024115d57a6e9b2e9|3d8dcb88-9ff9-4b17-1352-e38b2d707a14",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".hover-sub-menu",
          originalId:
            "63dced0024115d57a6e9b2e9|3d8dcb88-9ff9-4b17-1352-e38b2d707a14",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523628950607,
    },
    "e-222": {
      id: "e-222",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-94",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-221",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        selector: ".hover-sub-menu",
        originalId:
          "63dced0024115d57a6e9b2e9|3d8dcb88-9ff9-4b17-1352-e38b2d707a14",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".hover-sub-menu",
          originalId:
            "63dced0024115d57a6e9b2e9|3d8dcb88-9ff9-4b17-1352-e38b2d707a14",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1523628950628,
    },
    "e-227": {
      id: "e-227",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-98",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-228",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63dced0024115d3c17e9b2f0|92a2fab8-f7fa-3e43-7964-11f9406b4e3e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|92a2fab8-f7fa-3e43-7964-11f9406b4e3e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524090941156,
    },
    "e-228": {
      id: "e-228",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-99",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-227",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63dced0024115d3c17e9b2f0|92a2fab8-f7fa-3e43-7964-11f9406b4e3e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|92a2fab8-f7fa-3e43-7964-11f9406b4e3e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524090941170,
    },
    "e-229": {
      id: "e-229",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-98",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-230",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|b310df14-299f-7a77-bfa1-7adde7213f3a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|b310df14-299f-7a77-bfa1-7adde7213f3a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524091117917,
    },
    "e-230": {
      id: "e-230",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-99",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-229",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|b310df14-299f-7a77-bfa1-7adde7213f3a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|b310df14-299f-7a77-bfa1-7adde7213f3a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524091117917,
    },
    "e-231": {
      id: "e-231",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-100",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-232",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|7b6cbbba-d09f-bbeb-9511-cbb2b9257977",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|7b6cbbba-d09f-bbeb-9511-cbb2b9257977",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524092380870,
    },
    "e-232": {
      id: "e-232",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-101",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-231",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|7b6cbbba-d09f-bbeb-9511-cbb2b9257977",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|7b6cbbba-d09f-bbeb-9511-cbb2b9257977",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524092380882,
    },
    "e-233": {
      id: "e-233",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-98",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-234",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b01",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b01",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524139988518,
    },
    "e-234": {
      id: "e-234",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-99",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-233",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b01",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b01",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524139988518,
    },
    "e-235": {
      id: "e-235",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-100",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-236",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b24",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b24",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524139988518,
    },
    "e-236": {
      id: "e-236",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-101",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-235",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b24",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b24",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524139988518,
    },
    "e-237": {
      id: "e-237",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-98",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-238",
        },
      },
      mediaQueries: ["medium", "small"],
      target: {
        id: "63dced0024115d3c17e9b2f0|92a2fab8-f7fa-3e43-7964-11f9406b4e3e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|92a2fab8-f7fa-3e43-7964-11f9406b4e3e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524145866315,
    },
    "e-238": {
      id: "e-238",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-99",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-237",
        },
      },
      mediaQueries: ["medium", "small"],
      target: {
        id: "63dced0024115d3c17e9b2f0|92a2fab8-f7fa-3e43-7964-11f9406b4e3e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|92a2fab8-f7fa-3e43-7964-11f9406b4e3e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524145866326,
    },
    "e-239": {
      id: "e-239",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-100",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-240",
        },
      },
      mediaQueries: ["medium", "small"],
      target: {
        id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b24",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b24",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524145910388,
    },
    "e-240": {
      id: "e-240",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-101",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-239",
        },
      },
      mediaQueries: ["medium", "small"],
      target: {
        id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b24",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b24",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524145910394,
    },
    "e-244": {
      id: "e-244",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-104",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-243",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "63dced0024115d57a6e9b2e9",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524222526990,
    },
    "e-245": {
      id: "e-245",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-105",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-246",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|6b7ed0a2-f20b-baf0-0aaf-6b8768bf2b15",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|6b7ed0a2-f20b-baf0-0aaf-6b8768bf2b15",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524234930272,
    },
    "e-247": {
      id: "e-247",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-106",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-248",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|01c2b2d2-4c2a-4f01-d305-aae75ef10d0b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|01c2b2d2-4c2a-4f01-d305-aae75ef10d0b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524237514629,
    },
    "e-259": {
      id: "e-259",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-125",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-260",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|e7bbfdfa-3dec-9a2e-2a1f-d5e5f8ffa388",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|e7bbfdfa-3dec-9a2e-2a1f-d5e5f8ffa388",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524240553845,
    },
    "e-265": {
      id: "e-265",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-112",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-266",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|5bff4358-3b51-d8a1-4714-66cd326d9b1c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|5bff4358-3b51-d8a1-4714-66cd326d9b1c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524241770211,
    },
    "e-267": {
      id: "e-267",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-113",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-268",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".container-voce",
        originalId:
          "63dced0024115d57a6e9b2e9|f68ea0a3-a8cc-0b63-dcff-b6359abc4dd6",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".container-voce",
          originalId:
            "63dced0024115d57a6e9b2e9|f68ea0a3-a8cc-0b63-dcff-b6359abc4dd6",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524243392925,
    },
    "e-273": {
      id: "e-273",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-114",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-274",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".footer-link-section",
        originalId:
          "63dced0024115d57a6e9b2e9|593857b5-3e83-66bc-f8ef-7b5568a3e0c1",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".footer-link-section",
          originalId:
            "63dced0024115d57a6e9b2e9|593857b5-3e83-66bc-f8ef-7b5568a3e0c1",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524249586174,
    },
    "e-283": {
      id: "e-283",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-284",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|447736f2-16e2-c2ce-c72c-10820b0c9753",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|447736f2-16e2-c2ce-c72c-10820b0c9753",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524406406394,
    },
    "e-284": {
      id: "e-284",
      animationType: "custom",
      eventTypeId: "SCROLL_OUT_OF_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-49",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-283",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|447736f2-16e2-c2ce-c72c-10820b0c9753",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|447736f2-16e2-c2ce-c72c-10820b0c9753",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1524406406403,
    },
    "e-285": {
      id: "e-285",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-121",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-286",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".thml-embed-back-link",
        originalId:
          "63dced0024115d20b7e9b2ed|6ece22db-aeb6-6501-bd9c-eb71d33d61a9",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".thml-embed-back-link",
          originalId:
            "63dced0024115d20b7e9b2ed|6ece22db-aeb6-6501-bd9c-eb71d33d61a9",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1525189347109,
    },
    "e-286": {
      id: "e-286",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-122",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-285",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".thml-embed-back-link",
        originalId:
          "63dced0024115d20b7e9b2ed|6ece22db-aeb6-6501-bd9c-eb71d33d61a9",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".thml-embed-back-link",
          originalId:
            "63dced0024115d20b7e9b2ed|6ece22db-aeb6-6501-bd9c-eb71d33d61a9",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1525189347145,
    },
    "e-288": {
      id: "e-288",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-123",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-287",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dba4ee9b2f2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dba4ee9b2f2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1525727206441,
    },
    "e-289": {
      id: "e-289",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-124",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-290",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|e7bbfdfa-3dec-9a2e-2a1f-d5e5f8ffa37b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|e7bbfdfa-3dec-9a2e-2a1f-d5e5f8ffa37b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544022729809,
    },
    "e-291": {
      id: "e-291",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-126",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-292",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|e7bbfdfa-3dec-9a2e-2a1f-d5e5f8ffa396",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|e7bbfdfa-3dec-9a2e-2a1f-d5e5f8ffa396",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544023265847,
    },
    "e-293": {
      id: "e-293",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-127",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-294",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|913175e0-6a12-fe92-50e6-c62a24152fff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|913175e0-6a12-fe92-50e6-c62a24152fff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544391169495,
    },
    "e-295": {
      id: "e-295",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-128",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-296",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|a89d6077-e1eb-c586-04be-344844da40f2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|a89d6077-e1eb-c586-04be-344844da40f2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544391469799,
    },
    "e-297": {
      id: "e-297",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-129",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-298",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|66254870-3df1-b0e3-c418-294ffa5c0773",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|66254870-3df1-b0e3-c418-294ffa5c0773",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544391591969,
    },
    "e-299": {
      id: "e-299",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-130",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-300",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|64fb0643-70c1-507f-9114-cd02ea69eb7a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|64fb0643-70c1-507f-9114-cd02ea69eb7a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544391710075,
    },
    "e-301": {
      id: "e-301",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-131",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-302",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|24de2650-8bbf-9dff-22e2-0d7f69c79558",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|24de2650-8bbf-9dff-22e2-0d7f69c79558",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544392558553,
    },
    "e-303": {
      id: "e-303",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-132",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-304",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|34ece02f-89d1-26be-e387-93579c8b5c64",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|34ece02f-89d1-26be-e387-93579c8b5c64",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544392837165,
    },
    "e-305": {
      id: "e-305",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-133",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-306",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|2f93fd4d-f004-4b44-6ebb-7908e725a3fe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|2f93fd4d-f004-4b44-6ebb-7908e725a3fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544393338295,
    },
    "e-307": {
      id: "e-307",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-134",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-308",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|e173009b-7410-2b1e-abb7-34d66eff4b8f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|e173009b-7410-2b1e-abb7-34d66eff4b8f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544393470731,
    },
    "e-309": {
      id: "e-309",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-135",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-310",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|6c007636-2148-0d16-7f1e-944755dd3b47",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|6c007636-2148-0d16-7f1e-944755dd3b47",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544394348089,
    },
    "e-311": {
      id: "e-311",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-136",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-312",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|6475986e-8a74-b1ae-c6e3-86ebe0a8a7ec",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|6475986e-8a74-b1ae-c6e3-86ebe0a8a7ec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544394438487,
    },
    "e-313": {
      id: "e-313",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-137",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-314",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115d57a6e9b2e9|67d9bbb3-0d2a-fc05-9d66-10801e009cc5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115d57a6e9b2e9|67d9bbb3-0d2a-fc05-9d66-10801e009cc5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544394486174,
    },
    "e-315": {
      id: "e-315",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-138",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-316",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|58ba868f-0c3c-69ed-8706-102e2f5116e4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|58ba868f-0c3c-69ed-8706-102e2f5116e4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544451680963,
    },
    "e-317": {
      id: "e-317",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-139",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-318",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|58ba868f-0c3c-69ed-8706-102e2f5116d4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|58ba868f-0c3c-69ed-8706-102e2f5116d4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544451806992,
    },
    "e-319": {
      id: "e-319",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-140",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-320",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|58ba868f-0c3c-69ed-8706-102e2f5116d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|58ba868f-0c3c-69ed-8706-102e2f5116d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544451896102,
    },
    "e-321": {
      id: "e-321",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-141",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-322",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|58ba868f-0c3c-69ed-8706-102e2f5116dc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|58ba868f-0c3c-69ed-8706-102e2f5116dc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544452019185,
    },
    "e-323": {
      id: "e-323",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-142",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-324",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63dced0024115dc6ede9b2ec|58ba868f-0c3c-69ed-8706-102e2f5116e0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63dced0024115dc6ede9b2ec|58ba868f-0c3c-69ed-8706-102e2f5116e0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544452124821,
    },
  },
  actionLists: {
    "a-42": {
      id: "a-42",
      title: "Section Name Hover 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-42-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|541d0544-94ad-74b5-02f8-00c8a6bd583a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-42-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|9b40be98-462e-e359-08d5-48ea9a1250bc",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-42-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|68118997-b303-7b36-1477-ae1bc2da4e6c",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-42-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7804d16a-ce97-9f28-5803-cf28d63ceeaa",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-42-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|d8162e4d-e1f1-e6d5-64e8-778c6c71d1ca",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-42-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|70857364-5076-7e2b-31d4-c56ebb8f0994",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-42-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|4a0d9c47-37f1-1b5f-b58e-6bb01e61be70",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-42-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|33295d21-d94b-7058-44c3-d70a1209a4d4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-42-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|786d795c-1411-f447-7684-ce3488b8727f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-42-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c54764da-3991-80ff-3275-7dbc9777b585",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-41": {
      id: "a-41",
      title: "Section Name HoverOut Ristorant",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-41-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c54764da-3991-80ff-3275-7dbc9777b585",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-41-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|9b40be98-462e-e359-08d5-48ea9a1250bc",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-41-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|68118997-b303-7b36-1477-ae1bc2da4e6c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-41-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7804d16a-ce97-9f28-5803-cf28d63ceeaa",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-41-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|d8162e4d-e1f1-e6d5-64e8-778c6c71d1ca",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-41-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|70857364-5076-7e2b-31d4-c56ebb8f0994",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-41-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|4a0d9c47-37f1-1b5f-b58e-6bb01e61be70",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-41-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|33295d21-d94b-7058-44c3-d70a1209a4d4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-41-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|786d795c-1411-f447-7684-ce3488b8727f",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-3": {
      id: "a-3",
      title: "Section Name Hover 1",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|541d0544-94ad-74b5-02f8-00c8a6bd583a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-3-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|9b40be98-462e-e359-08d5-48ea9a1250bc",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-3-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|68118997-b303-7b36-1477-ae1bc2da4e6c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-3-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7804d16a-ce97-9f28-5803-cf28d63ceeaa",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-3-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|d8162e4d-e1f1-e6d5-64e8-778c6c71d1ca",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-3-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|70857364-5076-7e2b-31d4-c56ebb8f0994",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-3-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|4a0d9c47-37f1-1b5f-b58e-6bb01e61be70",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-3-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|33295d21-d94b-7058-44c3-d70a1209a4d4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-3-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|786d795c-1411-f447-7684-ce3488b8727f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-3-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c54764da-3991-80ff-3275-7dbc9777b585",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-4": {
      id: "a-4",
      title: "Section Name Hover 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|33295d21-d94b-7058-44c3-d70a1209a4d4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|541d0544-94ad-74b5-02f8-00c8a6bd583a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|68118997-b303-7b36-1477-ae1bc2da4e6c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7804d16a-ce97-9f28-5803-cf28d63ceeaa",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|786d795c-1411-f447-7684-ce3488b8727f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|d8162e4d-e1f1-e6d5-64e8-778c6c71d1ca",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|70857364-5076-7e2b-31d4-c56ebb8f0994",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|4a0d9c47-37f1-1b5f-b58e-6bb01e61be70",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|33295d21-d94b-7058-44c3-d70a1209a4d4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c54764da-3991-80ff-3275-7dbc9777b585",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-5": {
      id: "a-5",
      title: "Hide dark section links",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  selector: ".wrap-section-names",
                  selectorGuids: ["2e643855-fdc2-387d-9803-bba54d158e2e"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68128e",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516229920481,
    },
    "a-6": {
      id: "a-6",
      title: "Hide dark section links out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".wrap-section-names",
                  selectorGuids: ["2e643855-fdc2-387d-9803-bba54d158e2e"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-6-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c54764da-3991-80ff-3275-7dbc9777b585",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516229920481,
    },
    "a-7": {
      id: "a-7",
      title: "Section Name Hover 4",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|33295d21-d94b-7058-44c3-d70a1209a4d4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|541d0544-94ad-74b5-02f8-00c8a6bd583a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|68118997-b303-7b36-1477-ae1bc2da4e6c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7804d16a-ce97-9f28-5803-cf28d63ceeaa",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|786d795c-1411-f447-7684-ce3488b8727f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-7-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|9b40be98-462e-e359-08d5-48ea9a1250bc",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|d8162e4d-e1f1-e6d5-64e8-778c6c71d1ca",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|4a0d9c47-37f1-1b5f-b58e-6bb01e61be70",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|70857364-5076-7e2b-31d4-c56ebb8f0994",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c54764da-3991-80ff-3275-7dbc9777b585",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-8": {
      id: "a-8",
      title: "Section Name Hover 5",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|33295d21-d94b-7058-44c3-d70a1209a4d4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|541d0544-94ad-74b5-02f8-00c8a6bd583a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|68118997-b303-7b36-1477-ae1bc2da4e6c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7804d16a-ce97-9f28-5803-cf28d63ceeaa",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|9b40be98-462e-e359-08d5-48ea9a1250bc",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|d8162e4d-e1f1-e6d5-64e8-778c6c71d1ca",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-8-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|70857364-5076-7e2b-31d4-c56ebb8f0994",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|4a0d9c47-37f1-1b5f-b58e-6bb01e61be70",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|786d795c-1411-f447-7684-ce3488b8727f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c54764da-3991-80ff-3275-7dbc9777b585",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-9": {
      id: "a-9",
      title: "Section Name Hover 6",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|33295d21-d94b-7058-44c3-d70a1209a4d4",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-9-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|541d0544-94ad-74b5-02f8-00c8a6bd583a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|68118997-b303-7b36-1477-ae1bc2da4e6c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|786d795c-1411-f447-7684-ce3488b8727f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|d8162e4d-e1f1-e6d5-64e8-778c6c71d1ca",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|70857364-5076-7e2b-31d4-c56ebb8f0994",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|4a0d9c47-37f1-1b5f-b58e-6bb01e61be70",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|9b40be98-462e-e359-08d5-48ea9a1250bc",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c54764da-3991-80ff-3275-7dbc9777b585",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-9-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7804d16a-ce97-9f28-5803-cf28d63ceeaa",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-10": {
      id: "a-10",
      title: "Section Name Hover 7",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|33295d21-d94b-7058-44c3-d70a1209a4d4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-10-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|541d0544-94ad-74b5-02f8-00c8a6bd583a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-10-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|68118997-b303-7b36-1477-ae1bc2da4e6c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-10-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7804d16a-ce97-9f28-5803-cf28d63ceeaa",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-10-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|786d795c-1411-f447-7684-ce3488b8727f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-10-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|d8162e4d-e1f1-e6d5-64e8-778c6c71d1ca",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-10-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|70857364-5076-7e2b-31d4-c56ebb8f0994",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-10-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|4a0d9c47-37f1-1b5f-b58e-6bb01e61be70",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-10-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|9b40be98-462e-e359-08d5-48ea9a1250bc",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-10-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c54764da-3991-80ff-3275-7dbc9777b585",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-11": {
      id: "a-11",
      title: "Section Name Hover 8",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|33295d21-d94b-7058-44c3-d70a1209a4d4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-11-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|541d0544-94ad-74b5-02f8-00c8a6bd583a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-11-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|68118997-b303-7b36-1477-ae1bc2da4e6c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-11-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7804d16a-ce97-9f28-5803-cf28d63ceeaa",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-11-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|786d795c-1411-f447-7684-ce3488b8727f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-11-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|d8162e4d-e1f1-e6d5-64e8-778c6c71d1ca",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-11-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|70857364-5076-7e2b-31d4-c56ebb8f0994",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-11-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|4a0d9c47-37f1-1b5f-b58e-6bb01e61be70",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-11-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|9b40be98-462e-e359-08d5-48ea9a1250bc",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-11-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c54764da-3991-80ff-3275-7dbc9777b585",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-12": {
      id: "a-12",
      title: "Scroll Arrow Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".arrow-scroll",
                  selectorGuids: ["773b2df4-fc2c-d1f1-aace-e7bbcdaec57e"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".arrow-scroll",
                  selectorGuids: ["773b2df4-fc2c-d1f1-aace-e7bbcdaec57e"],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".arrow-scroll",
                  selectorGuids: ["773b2df4-fc2c-d1f1-aace-e7bbcdaec57e"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  selector: ".arrow-scroll",
                  selectorGuids: ["773b2df4-fc2c-d1f1-aace-e7bbcdaec57e"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516279839776,
    },
    "a-14": {
      id: "a-14",
      title: "Change color scroll in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".scroll-text",
                  selectorGuids: ["782874e4-fdb9-d445-bd74-3ebbf30ce110"],
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".number-section-nav",
                  selectorGuids: ["e075c236-a796-a2c9-6461-c6c465c4b93e"],
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|bffb9939-c571-d68f-c098-5fd0b04caf3f",
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-6",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".section-indicator-moving",
                  selectorGuids: ["55fabc06-171d-d4ed-863c-e7ac2341c173"],
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-7",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".center-indicator",
                  selectorGuids: ["bfb1e3cc-c8aa-27ea-c73b-f890b7156fc3"],
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-5",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|a4aa07be-098a-2742-d9cc-16d319519372",
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-8",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|e954ae9f-65a0-92c9-6539-2feff55042b7",
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-9",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|edd972c2-dd72-a8fc-4da8-1b6c000548af",
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-10",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|f236189d-a98b-c46a-5e58-f21c038191b3",
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-11",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|873239ec-7a46-2473-53cb-2b98ede576ac",
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-12",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|3053ffa1-fc0a-15a1-783b-a46fb555d409",
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-14-n-13",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|f2d90c4a-dbfa-90d5-20bd-127c2314d9f0",
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516301302184,
    },
    "a-49": {
      id: "a-49",
      title: "Change color scroll out 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-49-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".scroll-text",
                  selectorGuids: ["782874e4-fdb9-d445-bd74-3ebbf30ce110"],
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-49-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".number-section-nav",
                  selectorGuids: ["e075c236-a796-a2c9-6461-c6c465c4b93e"],
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-49-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|bffb9939-c571-d68f-c098-5fd0b04caf3f",
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-49-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".section-indicator-moving",
                  selectorGuids: ["55fabc06-171d-d4ed-863c-e7ac2341c173"],
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-49-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".center-indicator",
                  selectorGuids: ["bfb1e3cc-c8aa-27ea-c73b-f890b7156fc3"],
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-49-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|a4aa07be-098a-2742-d9cc-16d319519372",
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-49-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|e954ae9f-65a0-92c9-6539-2feff55042b7",
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-49-n-8",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|edd972c2-dd72-a8fc-4da8-1b6c000548af",
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-49-n-9",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|f236189d-a98b-c46a-5e58-f21c038191b3",
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-49-n-10",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|873239ec-7a46-2473-53cb-2b98ede576ac",
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-49-n-11",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|3053ffa1-fc0a-15a1-783b-a46fb555d409",
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-49-n-12",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".section-link-neuigkeiten",
                  selectorGuids: ["cc49f953-e64d-dca8-baa1-28bba8a16847"],
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516301302184,
    },
    "a-16": {
      id: "a-16",
      title: "Progress bar",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63dced0024115d57a6e9b2e9|784dedec-2598-a83f-dfb3-5f11b0b3c09b",
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63dced0024115d57a6e9b2e9|784dedec-2598-a83f-dfb3-5f11b0b3c09b",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 5000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|784dedec-2598-a83f-dfb3-5f11b0b3c09b",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516362916171,
    },
    "a-21": {
      id: "a-21",
      title: "Slider title change",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n-5",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|e42aef1a-a327-e136-ae57-e05a756d3659",
                },
                widthValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-21-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|a4d5baff-75fe-f1ad-a352-516cced3590c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7e992478-2c1b-9965-db2d-9571753a729c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7e992478-2c1b-9965-db2d-9571753a729c",
                },
                xValue: -32,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|a4d5baff-75fe-f1ad-a352-516cced3590c",
                },
                xValue: -32,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|e42aef1a-a327-e136-ae57-e05a756d3659",
                },
                value: 0.91,
                unit: "",
              },
            },
            {
              id: "a-21-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|263b6a01-74ea-83b2-f09a-65334ffb568d",
                },
                xValue: -32,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|263b6a01-74ea-83b2-f09a-65334ffb568d",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-21-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7e992478-2c1b-9965-db2d-9571753a729c",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-21-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7e992478-2c1b-9965-db2d-9571753a729c",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 250,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|a4d5baff-75fe-f1ad-a352-516cced3590c",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-21-n-22",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 250,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|a4d5baff-75fe-f1ad-a352-516cced3590c",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|263b6a01-74ea-83b2-f09a-65334ffb568d",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-21-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|263b6a01-74ea-83b2-f09a-65334ffb568d",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-21-n-6",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 750,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|e42aef1a-a327-e136-ae57-e05a756d3659",
                },
                widthUnit: "AUTO",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-21-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 750,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|e42aef1a-a327-e136-ae57-e05a756d3659",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1516378677834,
    },
    "a-22": {
      id: "a-22",
      title: "Slider title change out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-22-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|a4d5baff-75fe-f1ad-a352-516cced3590c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-22-n-29",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|263b6a01-74ea-83b2-f09a-65334ffb568d",
                },
                xValue: 32,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|a4d5baff-75fe-f1ad-a352-516cced3590c",
                },
                xValue: 32,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|263b6a01-74ea-83b2-f09a-65334ffb568d",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-22-n-28",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 250,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7e992478-2c1b-9965-db2d-9571753a729c",
                },
                xValue: 32,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 250,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7e992478-2c1b-9965-db2d-9571753a729c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-22-n-31",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 250,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|e42aef1a-a327-e136-ae57-e05a756d3659",
                },
                xValue: 32,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 250,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|e42aef1a-a327-e136-ae57-e05a756d3659",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-22-n-22",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115d57a6e9b2e9|a4d5baff-75fe-f1ad-a352-516cced3590c",
                },
                xValue: -32,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-24",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115d57a6e9b2e9|263b6a01-74ea-83b2-f09a-65334ffb568d",
                },
                xValue: -32,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-25",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63dced0024115d57a6e9b2e9|e42aef1a-a327-e136-ae57-e05a756d3659",
                },
                widthValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-22-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7e992478-2c1b-9965-db2d-9571753a729c",
                },
                xValue: -32,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-22-n-32",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63dced0024115d57a6e9b2e9|e42aef1a-a327-e136-ae57-e05a756d3659",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516378677834,
    },
    "a-23": {
      id: "a-23",
      title: "Hover karte",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-23-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 500,
                target: {
                  selector: ".button-blttern",
                  selectorGuids: ["cc9733e3-a3ba-e819-4d23-e644d91f7218"],
                },
                yValue: 32,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 500,
                target: {
                  selector: ".button-blttern",
                  selectorGuids: ["cc9733e3-a3ba-e819-4d23-e644d91f7218"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-23-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".heading.orange.karte",
                  selectorGuids: [
                    "8effcdc8-d176-35c2-4b6d-1eba06b1e4ac",
                    "a871687f-1b03-9163-2fe7-8531b98a947f",
                    "599181c2-a291-f718-7fab-d4618fc1fac8",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-23-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".subhead.light.kart",
                  selectorGuids: [
                    "5aa65875-74a2-f11e-caff-8f901eda4856",
                    "ce7111ce-571b-f079-9ab2-6821572e7e95",
                    "733a438d-cf65-eb7f-09cf-09be3282c64d",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-23-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 500,
                target: {
                  selector: ".button-blttern",
                  selectorGuids: ["cc9733e3-a3ba-e819-4d23-e644d91f7218"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 500,
                target: {
                  selector: ".button-blttern",
                  selectorGuids: ["cc9733e3-a3ba-e819-4d23-e644d91f7218"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-23-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".vert-line-karte",
                  selectorGuids: ["44963b76-2359-af55-26c2-b17c07b1d007"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1516540507404,
    },
    "a-24": {
      id: "a-24",
      title: "Hover karte out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-24-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 500,
                target: {
                  selector: ".subhead.light.kart",
                  selectorGuids: [
                    "5aa65875-74a2-f11e-caff-8f901eda4856",
                    "ce7111ce-571b-f079-9ab2-6821572e7e95",
                    "733a438d-cf65-eb7f-09cf-09be3282c64d",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-24-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".button-blttern",
                  selectorGuids: ["cc9733e3-a3ba-e819-4d23-e644d91f7218"],
                },
                yValue: 32,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".button-blttern",
                  selectorGuids: ["cc9733e3-a3ba-e819-4d23-e644d91f7218"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-24-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 500,
                target: {
                  selector: ".heading.orange.karte",
                  selectorGuids: [
                    "8effcdc8-d176-35c2-4b6d-1eba06b1e4ac",
                    "a871687f-1b03-9163-2fe7-8531b98a947f",
                    "599181c2-a291-f718-7fab-d4618fc1fac8",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-24-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 500,
                target: {
                  selector: ".vert-line-karte",
                  selectorGuids: ["44963b76-2359-af55-26c2-b17c07b1d007"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516540507404,
    },
    "a-26": {
      id: "a-26",
      title: "number slider animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|1adf63ee-f385-fe01-b362-fc49fdb55dc6",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|8892eded-2668-c251-13c9-3eea35b0a763",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|3ce83360-35bc-75ca-47af-f25138c6fdf3",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-27": {
      id: "a-27",
      title: "number slider animation 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|1adf63ee-f385-fe01-b362-fc49fdb55dc6",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-27-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|8892eded-2668-c251-13c9-3eea35b0a763",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-27-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|3ce83360-35bc-75ca-47af-f25138c6fdf3",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-28": {
      id: "a-28",
      title: "number slider animation 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|1adf63ee-f385-fe01-b362-fc49fdb55dc6",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-28-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|8892eded-2668-c251-13c9-3eea35b0a763",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-28-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|3ce83360-35bc-75ca-47af-f25138c6fdf3",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-15": {
      id: "a-15",
      title: "Change color scroll out acasatua",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1968",
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".number-section-nav",
                  selectorGuids: ["e075c236-a796-a2c9-6461-c6c465c4b93e"],
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1999",
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".section-indicator-moving",
                  selectorGuids: ["55fabc06-171d-d4ed-863c-e7ac2341c173"],
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".center-indicator",
                  selectorGuids: ["bfb1e3cc-c8aa-27ea-c73b-f890b7156fc3"],
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|a4aa07be-098a-2742-d9cc-16d319519372",
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|e954ae9f-65a0-92c9-6539-2feff55042b7",
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-8",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|edd972c2-dd72-a8fc-4da8-1b6c000548af",
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-9",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|f236189d-a98b-c46a-5e58-f21c038191b3",
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-10",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|873239ec-7a46-2473-53cb-2b98ede576ac",
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-11",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|3053ffa1-fc0a-15a1-783b-a46fb555d409",
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-12",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|f2d90c4a-dbfa-90d5-20bd-127c2314d9f0",
                },
                globalSwatchId: "f927954c",
                rValue: 39,
                bValue: 37,
                gValue: 38,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516301302184,
    },
    "a-29": {
      id: "a-29",
      title: "Scroll Arrow Hover Up",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".arrow-up",
                  selectorGuids: ["5a59e1cd-6f41-f454-6e76-efdfb13c64d5"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".arrow-up",
                  selectorGuids: ["5a59e1cd-6f41-f454-6e76-efdfb13c64d5"],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".arrow-up",
                  selectorGuids: ["5a59e1cd-6f41-f454-6e76-efdfb13c64d5"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  selector: ".arrow-up",
                  selectorGuids: ["5a59e1cd-6f41-f454-6e76-efdfb13c64d5"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516279839776,
    },
    "a-30": {
      id: "a-30",
      title: "Loader 1",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-30-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {
                  id: "63dced0024115d57a6e9b2e9|29323411-7af1-e861-3667-1cd88734ab8d",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-30-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2050,
                easing: "easeOut",
                duration: 750,
                target: { id: "ffa60ea5-b697-cf27-a2a6-b394db0201a2" },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-30-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: { id: "ffa60ea5-b697-cf27-a2a6-b394db0201a2" },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1521546700392,
    },
    "a-36": {
      id: "a-36",
      title: "Section Name Hover 1 Cursi",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-36-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68127c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-36-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681291",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-36-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681293",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-36-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681295",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-36-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681297",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-36-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {},
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-36-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {},
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-36-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {},
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-36-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68128f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-36-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68128e",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-2": {
      id: "a-2",
      title: "Section Name HoverOut",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68127c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68128f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681291",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681293",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681295",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681297",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: { id: null },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68128e",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: { id: null },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-37": {
      id: "a-37",
      title: "Section Name Hover 2 Cursi",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-37-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68127c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-37-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681291",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-37-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68128f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-37-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681293",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-37-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681295",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-37-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681297",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-37-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".section-nav-text-anfahrt",
                  selectorGuids: ["15ce7c0c-4b07-15af-df07-af782ec40f0f"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-37-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".section-nav-text-intro",
                  selectorGuids: ["e52f9dba-aa17-f2bc-54cc-ff7545c5c964"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-37-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".section-nav-text-team",
                  selectorGuids: ["ff9c7af8-53bc-4ae4-1089-f6f15ec6f11d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-37-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68128e",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-38": {
      id: "a-38",
      title: "Section Name Hover 3 Cursi",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-38-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|33295d21-d94b-7058-44c3-d70a1209a4d4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-38-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|541d0544-94ad-74b5-02f8-00c8a6bd583a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-38-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|68118997-b303-7b36-1477-ae1bc2da4e6c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-38-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68128e",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-38-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|786d795c-1411-f447-7684-ce3488b8727f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-38-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681297",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-38-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681295",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-38-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681291",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-38-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68128f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-38-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681293",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-39": {
      id: "a-39",
      title: "Section Name Hove 4 Cursi",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-39-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|33295d21-d94b-7058-44c3-d70a1209a4d4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-39-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|541d0544-94ad-74b5-02f8-00c8a6bd583a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-39-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|68118997-b303-7b36-1477-ae1bc2da4e6c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-39-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7804d16a-ce97-9f28-5803-cf28d63ceeaa",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-39-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68128e",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-39-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68128f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-39-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681291",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-39-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681293",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-39-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681297",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-39-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681295",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-40": {
      id: "a-40",
      title: "Section Name Hover 5 Cursi",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-40-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|33295d21-d94b-7058-44c3-d70a1209a4d4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-40-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|541d0544-94ad-74b5-02f8-00c8a6bd583a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-40-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|68118997-b303-7b36-1477-ae1bc2da4e6c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-40-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|7804d16a-ce97-9f28-5803-cf28d63ceeaa",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-40-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68128f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-40-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68128e",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-40-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681291",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-40-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681293",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-40-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681295",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-40-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681297",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-31": {
      id: "a-31",
      title: "Tab Progress Karte",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-31-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115dba4ee9b2f2|3639d92f-95ce-a07d-ec66-064a4680c525",
                },
                heightValue: 20,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1521896637455,
    },
    "a-32": {
      id: "a-32",
      title: "Tab Progress Karte 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-32-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115dba4ee9b2f2|3639d92f-95ce-a07d-ec66-064a4680c525",
                },
                heightValue: 40,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1521896637455,
    },
    "a-33": {
      id: "a-33",
      title: "Tab Progress Karte 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-33-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115dba4ee9b2f2|3639d92f-95ce-a07d-ec66-064a4680c525",
                },
                heightValue: 60,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1521896637455,
    },
    "a-34": {
      id: "a-34",
      title: "Tab Progress Karte 4",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115dba4ee9b2f2|3639d92f-95ce-a07d-ec66-064a4680c525",
                },
                heightValue: 80,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1521896637455,
    },
    "a-35": {
      id: "a-35",
      title: "Tab Progress Karte 5",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115dba4ee9b2f2|3639d92f-95ce-a07d-ec66-064a4680c525",
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "%",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1521896637455,
    },
    "a-48": {
      id: "a-48",
      title: "Change color scroll in ACASA TUA",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-48-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1968",
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-48-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1999",
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-48-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".number-section-nav",
                  selectorGuids: ["e075c236-a796-a2c9-6461-c6c465c4b93e"],
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-48-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".section-indicator-moving",
                  selectorGuids: ["55fabc06-171d-d4ed-863c-e7ac2341c173"],
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-48-n-5",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".center-indicator",
                  selectorGuids: ["bfb1e3cc-c8aa-27ea-c73b-f890b7156fc3"],
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-48-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|a4aa07be-098a-2742-d9cc-16d319519372",
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-48-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|e954ae9f-65a0-92c9-6539-2feff55042b7",
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-48-n-8",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|edd972c2-dd72-a8fc-4da8-1b6c000548af",
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-48-n-9",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|f236189d-a98b-c46a-5e58-f21c038191b3",
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-48-n-10",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|873239ec-7a46-2473-53cb-2b98ede576ac",
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-48-n-11",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|3053ffa1-fc0a-15a1-783b-a46fb555d409",
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
            {
              id: "a-48-n-12",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|f2d90c4a-dbfa-90d5-20bd-127c2314d9f0",
                },
                globalSwatchId: "7d5a46f4",
                rValue: 205,
                bValue: 192,
                gValue: 198,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516301302184,
    },
    "a-43": {
      id: "a-43",
      title: "Section Name Hover ACASATUA 1",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-43-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1961",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-43-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1976",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-43-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff197a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-43-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1978",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-43-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1974",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-43-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1973",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-44": {
      id: "a-44",
      title: "Section Name HoverOut ACASATUA",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-44-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1973",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-44-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1974",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-44-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1976",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-44-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff197a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-44-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1978",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-44-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec681297",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-44-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: { id: null },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-44-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115ddf70e9b2ef|191eba70-8faa-7292-6735-ddb1ec68128e",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-44-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: { id: null },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-45": {
      id: "a-45",
      title: "Section Name Hover ACASATUA 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-45-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1961",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-45-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1974",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-45-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff197a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-45-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1978",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-45-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1976",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-45-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1973",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-46": {
      id: "a-46",
      title: "Section Name Hover ACASATUA 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-46-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1961",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-46-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1976",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-46-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1974",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-46-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1978",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-46-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff197a",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-46-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1973",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-47": {
      id: "a-47",
      title: "Section Name Hover ACASATUA 4",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-47-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1961",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-47-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1976",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-47-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1974",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-47-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff197a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-47-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1978",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-47-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115dc6ede9b2ec|e21cf000-cb3d-cfe9-95a6-92c180ff1973",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-55": {
      id: "a-55",
      title: "Loader 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-55-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2250,
                easing: "easeOut",
                duration: 750,
                target: {
                  id: "63dced0024115d37ffe9b2f3|ffa60ea5-b697-cf27-a2a6-b394db0201a2",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-55-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63dced0024115d37ffe9b2f3|ffa60ea5-b697-cf27-a2a6-b394db0201a2",
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1521546700392,
    },
    "a-56": {
      id: "a-56",
      title: "Loader 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-56-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2250,
                easing: "easeOut",
                duration: 750,
                target: {
                  id: "63dced0024115d20b7e9b2ed|ffa60ea5-b697-cf27-a2a6-b394db0201a2",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-56-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63dced0024115d20b7e9b2ed|ffa60ea5-b697-cf27-a2a6-b394db0201a2",
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1521546700392,
    },
    "a-57": {
      id: "a-57",
      title: "Scroll Arrow Hover Up light",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-57-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".arrow-up",
                  selectorGuids: ["5a59e1cd-6f41-f454-6e76-efdfb13c64d5"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-57-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".arrow-up",
                  selectorGuids: ["5a59e1cd-6f41-f454-6e76-efdfb13c64d5"],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-57-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".arrow-up",
                  selectorGuids: ["5a59e1cd-6f41-f454-6e76-efdfb13c64d5"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-57-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  selector: ".arrow-up",
                  selectorGuids: ["5a59e1cd-6f41-f454-6e76-efdfb13c64d5"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516279839776,
    },
    "a-72": {
      id: "a-72",
      title: "number slider animation 7",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-72-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|1adf63ee-f385-fe01-b362-fc49fdb55dc6",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|8892eded-2668-c251-13c9-3eea35b0a763",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|3ce83360-35bc-75ca-47af-f25138c6fdf3",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-73": {
      id: "a-73",
      title: "number slider animation 8",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-73-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|1adf63ee-f385-fe01-b362-fc49fdb55dc6",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-73-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|8892eded-2668-c251-13c9-3eea35b0a763",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|3ce83360-35bc-75ca-47af-f25138c6fdf3",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-74": {
      id: "a-74",
      title: "number slider animation 9",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-74-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|1adf63ee-f385-fe01-b362-fc49fdb55dc6",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-74-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|8892eded-2668-c251-13c9-3eea35b0a763",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-74-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|3ce83360-35bc-75ca-47af-f25138c6fdf3",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-75": {
      id: "a-75",
      title: "Loader 5",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-75-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2250,
                easing: "easeOut",
                duration: 750,
                target: {
                  id: "63dced0024115d3c17e9b2f0|ffa60ea5-b697-cf27-a2a6-b394db0201a2",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-75-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|ffa60ea5-b697-cf27-a2a6-b394db0201a2",
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1521546700392,
    },
    "a-76": {
      id: "a-76",
      title: "Hide dark section links 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-76-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  selector: ".wrap-section-names",
                  selectorGuids: ["2e643855-fdc2-387d-9803-bba54d158e2e"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-76-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68128e",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516229920481,
    },
    "a-77": {
      id: "a-77",
      title: "Hide dark section links out 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-77-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".wrap-section-names",
                  selectorGuids: ["2e643855-fdc2-387d-9803-bba54d158e2e"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-77-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|c54764da-3991-80ff-3275-7dbc9777b585",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516229920481,
    },
    "a-78": {
      id: "a-78",
      title: "Section Name Hover 1 Cursi 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-78-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68127c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-78-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681291",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-78-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681293",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-78-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681295",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-78-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681297",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-78-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {},
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-78-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {},
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-78-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {},
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-78-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68128f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-78-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68128e",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-79": {
      id: "a-79",
      title: "Section Name HoverOut 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-79-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68127c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-79-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68128f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-79-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681291",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-79-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681293",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-79-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681295",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-79-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681297",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-79-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: { id: "63dced0024115d3c17e9b2f0|null" },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-79-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68128e",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-79-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: { id: "63dced0024115d3c17e9b2f0|null" },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-80": {
      id: "a-80",
      title: "Section Name Hover 2 Cursi 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-80-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68127c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-80-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681291",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-80-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68128f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-80-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681293",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-80-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681295",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-80-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681297",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-80-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".section-nav-text-anfahrt",
                  selectorGuids: ["15ce7c0c-4b07-15af-df07-af782ec40f0f"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-80-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".section-nav-text-intro",
                  selectorGuids: ["e52f9dba-aa17-f2bc-54cc-ff7545c5c964"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-80-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".section-nav-text-team",
                  selectorGuids: ["ff9c7af8-53bc-4ae4-1089-f6f15ec6f11d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-80-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68128e",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-81": {
      id: "a-81",
      title: "Section Name Hover 3 Cursi 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-81-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|33295d21-d94b-7058-44c3-d70a1209a4d4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|541d0544-94ad-74b5-02f8-00c8a6bd583a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|68118997-b303-7b36-1477-ae1bc2da4e6c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68128e",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|786d795c-1411-f447-7684-ce3488b8727f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681297",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681295",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681291",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68128f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681293",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-82": {
      id: "a-82",
      title: "Section Name Hove 4 Cursi 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-82-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|33295d21-d94b-7058-44c3-d70a1209a4d4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|541d0544-94ad-74b5-02f8-00c8a6bd583a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|68118997-b303-7b36-1477-ae1bc2da4e6c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|7804d16a-ce97-9f28-5803-cf28d63ceeaa",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68128e",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-82-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68128f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681291",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681293",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681297",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681295",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-83": {
      id: "a-83",
      title: "Section Name Hover 5 Cursi 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-83-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|33295d21-d94b-7058-44c3-d70a1209a4d4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-83-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|541d0544-94ad-74b5-02f8-00c8a6bd583a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-83-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|68118997-b303-7b36-1477-ae1bc2da4e6c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-83-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|7804d16a-ce97-9f28-5803-cf28d63ceeaa",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-83-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68128f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-83-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec68128e",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-83-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681291",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-83-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681293",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-83-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681295",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-83-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d3c17e9b2f0|191eba70-8faa-7292-6735-ddb1ec681297",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516206182751,
    },
    "a-84": {
      id: "a-84",
      title: "Scroll Arrow Hover 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-84-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|58c505cb-1794-0c07-9fe0-afcbfeeaf3e1",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-84-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|58c505cb-1794-0c07-9fe0-afcbfeeaf3e1",
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-84-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d3c17e9b2f0|58c505cb-1794-0c07-9fe0-afcbfeeaf3e1",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-84-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|58c505cb-1794-0c07-9fe0-afcbfeeaf3e1",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516279839776,
    },
    "a-85": {
      id: "a-85",
      title: "Scroll Arrow Hover Up light 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-85-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|d8e312e5-c579-2d6d-77f6-75c5b181f973",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-85-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|d8e312e5-c579-2d6d-77f6-75c5b181f973",
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-85-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  id: "63dced0024115d3c17e9b2f0|d8e312e5-c579-2d6d-77f6-75c5b181f973",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-85-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|d8e312e5-c579-2d6d-77f6-75c5b181f973",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516279839776,
    },
    "a-71": {
      id: "a-71",
      title: "Scroll Arrow Hover Up light 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-71-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".arrow-up",
                  selectorGuids: ["5a59e1cd-6f41-f454-6e76-efdfb13c64d5"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-71-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".arrow-up",
                  selectorGuids: ["5a59e1cd-6f41-f454-6e76-efdfb13c64d5"],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-71-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  selector: ".arrow-up",
                  selectorGuids: ["5a59e1cd-6f41-f454-6e76-efdfb13c64d5"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 0,
                target: {
                  selector: ".arrow-up",
                  selectorGuids: ["5a59e1cd-6f41-f454-6e76-efdfb13c64d5"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516279839776,
    },
    "a-86": {
      id: "a-86",
      title: "Hover produkt open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-86-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|90c022ed-e4e3-d10f-562f-4fc85fad305b",
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-86-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 150,
                target: {
                  id: "63dced0024115d3c17e9b2f0|896e7e6a-84c0-23b8-1189-f83cdfc24f16",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-86-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|896e7e6a-84c0-23b8-1189-f83cdfc24f16",
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1522946807800,
    },
    "a-87": {
      id: "a-87",
      title: "hover product close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-87-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 150,
                target: {
                  id: "63dced0024115d3c17e9b2f0|90c022ed-e4e3-d10f-562f-4fc85fad305b",
                },
                widthValue: 46.29000000000001,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-87-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|896e7e6a-84c0-23b8-1189-f83cdfc24f16",
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-87-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|896e7e6a-84c0-23b8-1189-f83cdfc24f16",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1522947068769,
    },
    "a-88": {
      id: "a-88",
      title: "Hover produkt open 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-88-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|896e7e6a-84c0-23b8-1189-f83cdfc24f16",
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-88-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 150,
                target: {
                  id: "63dced0024115d3c17e9b2f0|90c022ed-e4e3-d10f-562f-4fc85fad305b",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-88-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|90c022ed-e4e3-d10f-562f-4fc85fad305b",
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1522946807800,
    },
    "a-89": {
      id: "a-89",
      title: "hover product close 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-89-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 150,
                target: {
                  id: "63dced0024115d3c17e9b2f0|896e7e6a-84c0-23b8-1189-f83cdfc24f16",
                },
                widthValue: 46.29000000000001,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-89-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|90c022ed-e4e3-d10f-562f-4fc85fad305b",
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-89-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|90c022ed-e4e3-d10f-562f-4fc85fad305b",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1522947068769,
    },
    "a-95": {
      id: "a-95",
      title: "Nav open mobil",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-95-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".wrap-nav-sub",
                  selectorGuids: ["c157717a-2d2b-499f-fe4b-6a512749d9e1"],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-95-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".wrap-nav-sub",
                  selectorGuids: ["c157717a-2d2b-499f-fe4b-6a512749d9e1"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-95-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link._2",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "bf603bc0-4a87-9ea6-2780-e0ca3336cd47",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-95-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link._2",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "bf603bc0-4a87-9ea6-2780-e0ca3336cd47",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-95-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link.third",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "7560263c-8af2-c990-4e85-a21896d30623",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-95-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link.third",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "7560263c-8af2-c990-4e85-a21896d30623",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-95-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link.fourth",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "7cda6aa8-aae8-0225-06ac-b6ee5eb8234c",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-95-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link.fourth",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "7cda6aa8-aae8-0225-06ac-b6ee5eb8234c",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-95-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".vert_line_nav",
                  selectorGuids: ["f5e518bd-3d42-2052-db21-480ceb27e5cc"],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-95-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".vert_line_nav",
                  selectorGuids: ["f5e518bd-3d42-2052-db21-480ceb27e5cc"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-95-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link.anruf",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "c02e8206-f39f-003a-4a3d-69ec8e88abce",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-95-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link.anruf",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "c02e8206-f39f-003a-4a3d-69ec8e88abce",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-95-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link.reservieren",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "9c12b5c8-c2ae-3b5a-e58f-49e201e67ef8",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-95-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link.reservieren",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "9c12b5c8-c2ae-3b5a-e58f-49e201e67ef8",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-95-n-44",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".bg-bg-mobil-nav",
                  selectorGuids: ["0ee67af2-d642-e2bb-4f65-1e48583e78c2"],
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "VH",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-95-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 250,
                target: {
                  selector: ".overlay-dark-navbar.mobile",
                  selectorGuids: [
                    "a0d20981-0ea2-eaf4-3f74-c745efe46673",
                    "8dc7cb52-696f-ac73-6fe0-f5e1ff2b1041",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-95-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inQuint",
                duration: 250,
                target: {
                  selector: ".line-1-btn",
                  selectorGuids: ["0289d8db-1a14-ea2b-e5a7-150376c00b30"],
                },
                yValue: 5,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-95-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inQuint",
                duration: 250,
                target: {
                  selector: ".line-3-btn",
                  selectorGuids: ["bf1c380e-d5d5-1070-3ef0-19e5a8f4103c"],
                },
                yValue: -5,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-95-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 250,
                target: {
                  selector: ".logo_nannina",
                  selectorGuids: ["ba368131-9099-87bb-8fb4-ffac7549269b"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-95-n-43",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 250,
                target: {
                  selector: ".bg-bg-mobil-nav",
                  selectorGuids: ["0ee67af2-d642-e2bb-4f65-1e48583e78c2"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-95-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".wrap-nav-sub",
                  selectorGuids: ["c157717a-2d2b-499f-fe4b-6a512749d9e1"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-95-n-28",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".wrap-nav-sub",
                  selectorGuids: ["c157717a-2d2b-499f-fe4b-6a512749d9e1"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-95-n-8",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".line-3-btn",
                  selectorGuids: ["bf1c380e-d5d5-1070-3ef0-19e5a8f4103c"],
                },
                zValue: -45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-95-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".line-2-btn",
                  selectorGuids: ["a84813a5-2a36-c12c-34f3-ede698f39635"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-95-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".line-1-btn",
                  selectorGuids: ["0289d8db-1a14-ea2b-e5a7-150376c00b30"],
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-95-n-29",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link._2",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "bf603bc0-4a87-9ea6-2780-e0ca3336cd47",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-95-n-30",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link._2",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "bf603bc0-4a87-9ea6-2780-e0ca3336cd47",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-95-n-31",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link.third",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "7560263c-8af2-c990-4e85-a21896d30623",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-95-n-32",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link.third",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "7560263c-8af2-c990-4e85-a21896d30623",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-95-n-33",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link.fourth",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "7cda6aa8-aae8-0225-06ac-b6ee5eb8234c",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-95-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link.fourth",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "7cda6aa8-aae8-0225-06ac-b6ee5eb8234c",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-95-n-35",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".vert_line_nav",
                  selectorGuids: ["f5e518bd-3d42-2052-db21-480ceb27e5cc"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-95-n-36",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".vert_line_nav",
                  selectorGuids: ["f5e518bd-3d42-2052-db21-480ceb27e5cc"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-95-n-38",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link.anruf",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "c02e8206-f39f-003a-4a3d-69ec8e88abce",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-95-n-37",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link.anruf",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "c02e8206-f39f-003a-4a3d-69ec8e88abce",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-95-n-40",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link.reservieren",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "9c12b5c8-c2ae-3b5a-e58f-49e201e67ef8",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-95-n-39",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link.reservieren",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "9c12b5c8-c2ae-3b5a-e58f-49e201e67ef8",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1523462838915,
    },
    "a-97": {
      id: "a-97",
      title: "Nav close mobil 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-97-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 250,
                target: {
                  selector: ".overlay-dark-navbar.mobile",
                  selectorGuids: [
                    "a0d20981-0ea2-eaf4-3f74-c745efe46673",
                    "8dc7cb52-696f-ac73-6fe0-f5e1ff2b1041",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-97-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 250,
                target: {
                  selector: ".logo_nannina",
                  selectorGuids: ["ba368131-9099-87bb-8fb4-ffac7549269b"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-97-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".bg-bg-mobil-nav",
                  selectorGuids: ["0ee67af2-d642-e2bb-4f65-1e48583e78c2"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-97-n-23",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".line-3-btn",
                  selectorGuids: ["bf1c380e-d5d5-1070-3ef0-19e5a8f4103c"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-97-n-22",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".line-1-btn",
                  selectorGuids: ["0289d8db-1a14-ea2b-e5a7-150376c00b30"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-97-n-21",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 250,
                easing: "",
                duration: 0,
                target: {
                  selector: ".line-2-btn",
                  selectorGuids: ["a84813a5-2a36-c12c-34f3-ede698f39635"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-97-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 250,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".line-3-btn",
                  selectorGuids: ["bf1c380e-d5d5-1070-3ef0-19e5a8f4103c"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-97-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 250,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".line-1-btn",
                  selectorGuids: ["0289d8db-1a14-ea2b-e5a7-150376c00b30"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-97-n-24",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".bg-bg-mobil-nav",
                  selectorGuids: ["0ee67af2-d642-e2bb-4f65-1e48583e78c2"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-97-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".wrap-nav-sub",
                  selectorGuids: ["c157717a-2d2b-499f-fe4b-6a512749d9e1"],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-97-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".wrap-nav-sub",
                  selectorGuids: ["c157717a-2d2b-499f-fe4b-6a512749d9e1"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-97-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-link._2",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "bf603bc0-4a87-9ea6-2780-e0ca3336cd47",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-97-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-link._2",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "bf603bc0-4a87-9ea6-2780-e0ca3336cd47",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-97-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-link.third",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "7560263c-8af2-c990-4e85-a21896d30623",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-97-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-link.third",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "7560263c-8af2-c990-4e85-a21896d30623",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-97-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-link.fourth",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "7cda6aa8-aae8-0225-06ac-b6ee5eb8234c",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-97-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-link.fourth",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "7cda6aa8-aae8-0225-06ac-b6ee5eb8234c",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-97-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".vert_line_nav",
                  selectorGuids: ["f5e518bd-3d42-2052-db21-480ceb27e5cc"],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-97-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".vert_line_nav",
                  selectorGuids: ["f5e518bd-3d42-2052-db21-480ceb27e5cc"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-97-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-link.anruf",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "c02e8206-f39f-003a-4a3d-69ec8e88abce",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-97-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-link.anruf",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "c02e8206-f39f-003a-4a3d-69ec8e88abce",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-97-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-link.reservieren",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "9c12b5c8-c2ae-3b5a-e58f-49e201e67ef8",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-97-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".nav-link.reservieren",
                  selectorGuids: [
                    "8ec3cb0c-86f3-fd45-1c61-e9889aae88d8",
                    "9c12b5c8-c2ae-3b5a-e58f-49e201e67ef8",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1523462838915,
    },
    "a-93": {
      id: "a-93",
      title: "Nav Submenu",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-93-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {
                  selector: ".cursi-link",
                  selectorGuids: ["76779d2a-54fd-8885-974c-7794d6b6326d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-93-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {
                  selector: ".acasatua-link",
                  selectorGuids: ["dc211c3b-5742-410c-5a21-60ef15d029ec"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-93-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {
                  selector: ".produti-link",
                  selectorGuids: ["1e16deb7-9c8f-2cff-85b2-390fcac6f1ec"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-93-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".hover-sub-menu",
                  selectorGuids: ["153c2a58-37e0-b89c-5960-b52e9811ec4e"],
                },
                heightValue: 144,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1523121202100,
    },
    "a-94": {
      id: "a-94",
      title: "Nav Submenu reverse",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-94-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {
                  selector: ".hover-sub-menu",
                  selectorGuids: ["153c2a58-37e0-b89c-5960-b52e9811ec4e"],
                },
                heightValue: 40,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-94-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".cursi-link",
                  selectorGuids: ["76779d2a-54fd-8885-974c-7794d6b6326d"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-94-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".acasatua-link",
                  selectorGuids: ["dc211c3b-5742-410c-5a21-60ef15d029ec"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-94-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".produti-link",
                  selectorGuids: ["1e16deb7-9c8f-2cff-85b2-390fcac6f1ec"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1523121202100,
    },
    "a-98": {
      id: "a-98",
      title: "Hover product new scalable in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-98-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|dcb45c60-6d68-5f1e-cd4c-4376e68065dd",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-98-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|8c71863b-35f9-1cb4-d707-63d839f52966",
                },
                xValue: -116,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-98-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|5f00289b-94e8-fbc1-b534-28849f276c40",
                },
                widthValue: 46.16000000000001,
                heightValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-98-n-8",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|92a2fab8-f7fa-3e43-7964-11f9406b4e3e",
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-98-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|5f00289b-94e8-fbc1-b534-28849f276c40",
                },
                widthValue: 100,
                heightValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-98-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|dcb45c60-6d68-5f1e-cd4c-4376e68065dd",
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-98-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|8c71863b-35f9-1cb4-d707-63d839f52966",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-98-n-7",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|92a2fab8-f7fa-3e43-7964-11f9406b4e3e",
                },
                widthValue: 216,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-98-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 200,
                target: {
                  id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b0f",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1524089084095,
    },
    "a-99": {
      id: "a-99",
      title: "Hover product new scalable OUT",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-99-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|5f00289b-94e8-fbc1-b534-28849f276c40",
                },
                widthValue: 46.16000000000001,
                heightValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-99-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|8c71863b-35f9-1cb4-d707-63d839f52966",
                },
                xValue: -116,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-99-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|dcb45c60-6d68-5f1e-cd4c-4376e68065dd",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-99-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|92a2fab8-f7fa-3e43-7964-11f9406b4e3e",
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-99-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b0f",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1524089084095,
    },
    "a-100": {
      id: "a-100",
      title: "Hover product new scalable in 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-100-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b1b",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-100-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b10",
                },
                widthValue: 46.16000000000001,
                heightValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-100-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b24",
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-100-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b12",
                },
                xValue: 116,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-100-n-5",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b10",
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-100-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b1b",
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-100-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b12",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-100-n-8",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b24",
                },
                widthValue: 216,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-100-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {
                  id: "63dced0024115d3c17e9b2f0|5f00289b-94e8-fbc1-b534-28849f276c36",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1524089084095,
    },
    "a-101": {
      id: "a-101",
      title: "Hover product new scalable OUT 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-101-n-5",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b10",
                },
                widthValue: 46.16000000000001,
                heightValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
            {
              id: "a-101-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b1b",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-101-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b12",
                },
                xValue: 116,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-101-n-8",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|986f530f-f8a0-7a9f-c84a-c05a6bc93b24",
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-101-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  id: "63dced0024115d3c17e9b2f0|5f00289b-94e8-fbc1-b534-28849f276c36",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1524089084095,
    },
    "a-104": {
      id: "a-104",
      title: "nav slider in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-104-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".wrapper-side-nav",
                  selectorGuids: ["171ac9e7-30fa-68b0-e2b0-f4676cbe844a"],
                },
                yValue: -48,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-104-n-33",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".wrapper-side-nav",
                  selectorGuids: ["171ac9e7-30fa-68b0-e2b0-f4676cbe844a"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-104-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".wrap-nav-sub-desktop",
                  selectorGuids: ["9bcb23cf-98fa-cbbf-51d8-3dfd93b6ebeb"],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-104-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".wrap-nav-sub-desktop",
                  selectorGuids: ["9bcb23cf-98fa-cbbf-51d8-3dfd93b6ebeb"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-104-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link-desktop-2._2",
                  selectorGuids: [
                    "a4032454-d267-b604-e3c8-bdc0c649f4b9",
                    "7d7a869d-1703-6e46-4d1a-ecf2ae737915",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-104-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link-desktop-2._2",
                  selectorGuids: [
                    "a4032454-d267-b604-e3c8-bdc0c649f4b9",
                    "7d7a869d-1703-6e46-4d1a-ecf2ae737915",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-104-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link-desktop.third",
                  selectorGuids: [
                    "0d93d7a2-43ab-2761-2605-2b35f4683a9d",
                    "0b303742-421e-d3d4-95ac-8e42df0aea55",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-104-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link-desktop.third",
                  selectorGuids: [
                    "0d93d7a2-43ab-2761-2605-2b35f4683a9d",
                    "0b303742-421e-d3d4-95ac-8e42df0aea55",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-104-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link-desktop.fourth",
                  selectorGuids: [
                    "0d93d7a2-43ab-2761-2605-2b35f4683a9d",
                    "e96180d9-0a1b-bc1b-4a33-a616a1420d7e",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-104-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link-desktop.fourth",
                  selectorGuids: [
                    "0d93d7a2-43ab-2761-2605-2b35f4683a9d",
                    "e96180d9-0a1b-bc1b-4a33-a616a1420d7e",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-104-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link-desktop.anruf",
                  selectorGuids: [
                    "0d93d7a2-43ab-2761-2605-2b35f4683a9d",
                    "0d2ed461-04d6-ccd0-7527-52dfc924f5ab",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-104-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link-desktop.anruf",
                  selectorGuids: [
                    "0d93d7a2-43ab-2761-2605-2b35f4683a9d",
                    "0d2ed461-04d6-ccd0-7527-52dfc924f5ab",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-104-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".vert_line_nav-desktop",
                  selectorGuids: ["332d4ce4-01d3-bf70-07b6-25812acf1399"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-104-n-16",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".vert_line_nav-desktop",
                  selectorGuids: ["332d4ce4-01d3-bf70-07b6-25812acf1399"],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-104-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link-desktop.reservieren",
                  selectorGuids: [
                    "0d93d7a2-43ab-2761-2605-2b35f4683a9d",
                    "b62456ae-06da-1e0b-a69b-fb5896980043",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-104-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".nav-link-desktop.reservieren",
                  selectorGuids: [
                    "0d93d7a2-43ab-2761-2605-2b35f4683a9d",
                    "b62456ae-06da-1e0b-a69b-fb5896980043",
                  ],
                },
                yValue: -16,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-104-n-35",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 750,
                target: {
                  id: "63dced0024115d57a6e9b2e9|9df5ba02-c9b1-3521-5194-4e18294f7bd5",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-104-n-36",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63dced0024115d57a6e9b2e9|9df5ba02-c9b1-3521-5194-4e18294f7bd5",
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-104-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  selector: ".wrapper-side-nav",
                  selectorGuids: ["171ac9e7-30fa-68b0-e2b0-f4676cbe844a"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-104-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  selector: ".wrapper-side-nav",
                  selectorGuids: ["171ac9e7-30fa-68b0-e2b0-f4676cbe844a"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-104-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".wrap-nav-sub-desktop",
                  selectorGuids: ["9bcb23cf-98fa-cbbf-51d8-3dfd93b6ebeb"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-104-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".wrap-nav-sub-desktop",
                  selectorGuids: ["9bcb23cf-98fa-cbbf-51d8-3dfd93b6ebeb"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-104-n-21",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link-desktop-2._2",
                  selectorGuids: [
                    "a4032454-d267-b604-e3c8-bdc0c649f4b9",
                    "7d7a869d-1703-6e46-4d1a-ecf2ae737915",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-104-n-22",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link-desktop-2._2",
                  selectorGuids: [
                    "a4032454-d267-b604-e3c8-bdc0c649f4b9",
                    "7d7a869d-1703-6e46-4d1a-ecf2ae737915",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-104-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link-desktop.third",
                  selectorGuids: [
                    "0d93d7a2-43ab-2761-2605-2b35f4683a9d",
                    "0b303742-421e-d3d4-95ac-8e42df0aea55",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-104-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link-desktop.third",
                  selectorGuids: [
                    "0d93d7a2-43ab-2761-2605-2b35f4683a9d",
                    "0b303742-421e-d3d4-95ac-8e42df0aea55",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-104-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link-desktop.fourth",
                  selectorGuids: [
                    "0d93d7a2-43ab-2761-2605-2b35f4683a9d",
                    "e96180d9-0a1b-bc1b-4a33-a616a1420d7e",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-104-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link-desktop.fourth",
                  selectorGuids: [
                    "0d93d7a2-43ab-2761-2605-2b35f4683a9d",
                    "e96180d9-0a1b-bc1b-4a33-a616a1420d7e",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-104-n-29",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".vert_line_nav-desktop",
                  selectorGuids: ["332d4ce4-01d3-bf70-07b6-25812acf1399"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-104-n-30",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".vert_line_nav-desktop",
                  selectorGuids: ["332d4ce4-01d3-bf70-07b6-25812acf1399"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-104-n-27",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link-desktop.anruf",
                  selectorGuids: [
                    "0d93d7a2-43ab-2761-2605-2b35f4683a9d",
                    "0d2ed461-04d6-ccd0-7527-52dfc924f5ab",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-104-n-28",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link-desktop.anruf",
                  selectorGuids: [
                    "0d93d7a2-43ab-2761-2605-2b35f4683a9d",
                    "0d2ed461-04d6-ccd0-7527-52dfc924f5ab",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-104-n-32",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link-desktop.reservieren",
                  selectorGuids: [
                    "0d93d7a2-43ab-2761-2605-2b35f4683a9d",
                    "b62456ae-06da-1e0b-a69b-fb5896980043",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-104-n-31",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "outQuint",
                duration: 250,
                target: {
                  selector: ".nav-link-desktop.reservieren",
                  selectorGuids: [
                    "0d93d7a2-43ab-2761-2605-2b35f4683a9d",
                    "b62456ae-06da-1e0b-a69b-fb5896980043",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1524222535523,
    },
    "a-105": {
      id: "a-105",
      title: "left scroll",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-105-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|b0b8e020-f45f-d745-05a3-9f5b0c7e73e0",
                },
                xValue: -24,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-105-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|b0b8e020-f45f-d745-05a3-9f5b0c7e73e0",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-105-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|9b7a09f0-6cb7-cd53-bbac-aaa705c460d2",
                },
                xValue: -24,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-105-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|9b7a09f0-6cb7-cd53-bbac-aaa705c460d2",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-105-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|b5734873-4a2b-a5a7-c87d-292526845742",
                },
                xValue: -24,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-105-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|b5734873-4a2b-a5a7-c87d-292526845742",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-105-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|9b7a09f0-6cb7-cd53-bbac-aaa705c460d2",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-105-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|b0b8e020-f45f-d745-05a3-9f5b0c7e73e0",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-105-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|9b7a09f0-6cb7-cd53-bbac-aaa705c460d2",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-105-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|b0b8e020-f45f-d745-05a3-9f5b0c7e73e0",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-105-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|b5734873-4a2b-a5a7-c87d-292526845742",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-105-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|b5734873-4a2b-a5a7-c87d-292526845742",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1524233485257,
    },
    "a-106": {
      id: "a-106",
      title: "left scroll karte",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-106-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|591fc26d-be7c-6770-10a4-b02b6ff4c1b3",
                },
                yValue: 24,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-106-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|591fc26d-be7c-6770-10a4-b02b6ff4c1b3",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-106-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|69c6d5eb-ee23-b8be-d53b-1c949335aca5",
                },
                yValue: 24,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-106-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|69c6d5eb-ee23-b8be-d53b-1c949335aca5",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-106-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|09910424-f05e-633a-174f-ff83baaf5134",
                },
                xValue: 0,
                yValue: 24,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-106-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|09910424-f05e-633a-174f-ff83baaf5134",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-106-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|1219fe9b-f2fa-2691-ac7d-3d3f141e8cca",
                },
                yValue: 24,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-106-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|1219fe9b-f2fa-2691-ac7d-3d3f141e8cca",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-106-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|69c6d5eb-ee23-b8be-d53b-1c949335aca5",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-106-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|591fc26d-be7c-6770-10a4-b02b6ff4c1b3",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-106-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|69c6d5eb-ee23-b8be-d53b-1c949335aca5",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-106-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|591fc26d-be7c-6770-10a4-b02b6ff4c1b3",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-106-n-16",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|1219fe9b-f2fa-2691-ac7d-3d3f141e8cca",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-106-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|1219fe9b-f2fa-2691-ac7d-3d3f141e8cca",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-106-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|09910424-f05e-633a-174f-ff83baaf5134",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-106-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|09910424-f05e-633a-174f-ff83baaf5134",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1524233485257,
    },
    "a-125": {
      id: "a-125",
      title: "number slider animation Impressione 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-125-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|886cf672-2ad3-9053-92f7-05a3f3750dd2",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-125-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|886cf672-2ad3-9053-92f7-05a3f3750dd4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-125-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|886cf672-2ad3-9053-92f7-05a3f3750dd0",
                },
                value: 0.68,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-112": {
      id: "a-112",
      title: "scroll_in left double",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-112-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|eb1c3a70-5749-106a-b143-aff0e2cbe9f6",
                },
                xValue: 0,
                yValue: 24,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-112-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|eb1c3a70-5749-106a-b143-aff0e2cbe9f6",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-112-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|5eeb754b-abf0-62a1-28db-d89345dd58ae",
                },
                xValue: 0,
                yValue: 24,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-112-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115d57a6e9b2e9|5eeb754b-abf0-62a1-28db-d89345dd58ae",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-112-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|eb1c3a70-5749-106a-b143-aff0e2cbe9f6",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-112-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|eb1c3a70-5749-106a-b143-aff0e2cbe9f6",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-112-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|5eeb754b-abf0-62a1-28db-d89345dd58ae",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-112-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115d57a6e9b2e9|5eeb754b-abf0-62a1-28db-d89345dd58ae",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1524241784435,
    },
    "a-113": {
      id: "a-113",
      title: "scroll_in left single",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-113-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "63dced0024115d57a6e9b2e9|f68ea0a3-a8cc-0b63-dcff-b6359abc4dd6",
                },
                xValue: -24,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-113-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "63dced0024115d57a6e9b2e9|f68ea0a3-a8cc-0b63-dcff-b6359abc4dd6",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-113-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: "63dced0024115d57a6e9b2e9|f68ea0a3-a8cc-0b63-dcff-b6359abc4dd6",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-113-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: "63dced0024115d57a6e9b2e9|f68ea0a3-a8cc-0b63-dcff-b6359abc4dd6",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1524241784435,
    },
    "a-114": {
      id: "a-114",
      title: "scroll footer",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-114-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".footer-col-left",
                  selectorGuids: ["530b60a3-b4d2-6e04-d08b-de05fdd9ccec"],
                },
                xValue: -24,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-114-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".footer-col-left",
                  selectorGuids: ["530b60a3-b4d2-6e04-d08b-de05fdd9ccec"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-114-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".footer-col-right",
                  selectorGuids: ["4b3cff18-dec9-f6a1-89a5-e92e1ef7d68f"],
                },
                xValue: 24,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-114-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".footer-col-right",
                  selectorGuids: ["4b3cff18-dec9-f6a1-89a5-e92e1ef7d68f"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-114-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".logo-footer",
                  selectorGuids: ["2bdbd547-97a2-c338-a842-d2878eb6b381"],
                },
                xValue: 0,
                yValue: 24,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-114-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".logo-footer",
                  selectorGuids: ["2bdbd547-97a2-c338-a842-d2878eb6b381"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-114-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  selector: ".footer-col-right",
                  selectorGuids: ["4b3cff18-dec9-f6a1-89a5-e92e1ef7d68f"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-114-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  selector: ".footer-col-left",
                  selectorGuids: ["530b60a3-b4d2-6e04-d08b-de05fdd9ccec"],
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-114-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  selector: ".footer-col-right",
                  selectorGuids: ["4b3cff18-dec9-f6a1-89a5-e92e1ef7d68f"],
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-114-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  selector: ".footer-col-left",
                  selectorGuids: ["530b60a3-b4d2-6e04-d08b-de05fdd9ccec"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-114-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "easeOut",
                duration: 1000,
                target: {
                  selector: ".logo-footer",
                  selectorGuids: ["2bdbd547-97a2-c338-a842-d2878eb6b381"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-114-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "easeOut",
                duration: 1000,
                target: {
                  selector: ".logo-footer",
                  selectorGuids: ["2bdbd547-97a2-c338-a842-d2878eb6b381"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1524233485257,
    },
    "a-121": {
      id: "a-121",
      title: "hover schließen embed",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-121-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 100,
                target: {
                  selector: ".schlieen-link-block.team",
                  selectorGuids: [
                    "5b19eb9d-d862-f795-7fee-d9b2ea06c565",
                    "02d6a001-c914-ce70-c052-2418bf624005",
                  ],
                },
                value: 0.5,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1525189357121,
    },
    "a-122": {
      id: "a-122",
      title: "hover schließen embed out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-122-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  selector: ".schlieen-link-block.team",
                  selectorGuids: [
                    "5b19eb9d-d862-f795-7fee-d9b2ea06c565",
                    "02d6a001-c914-ce70-c052-2418bf624005",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1525189357121,
    },
    "a-123": {
      id: "a-123",
      title: "karte intro new",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-123-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115dba4ee9b2f2|ac90411e-2e27-c179-fa03-8bd1ee18fdf4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-123-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115dba4ee9b2f2|b7e58a60-bb22-7a74-5dcf-c1700cc21044",
                },
                xValue: 24,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-123-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  id: "63dced0024115dba4ee9b2f2|b7e58a60-bb22-7a74-5dcf-c1700cc21044",
                },
                value: 0.1,
                unit: "",
              },
            },
            {
              id: "a-123-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115dba4ee9b2f2|229a4ced-eb95-6ebe-741e-61cf5014f134",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-123-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115dba4ee9b2f2|77bded60-d5e8-904a-5e6d-0bdac0d14056",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-123-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63dced0024115dba4ee9b2f2|1333513d-5796-5b72-f413-f1a0b09cc377",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-123-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  id: "63dced0024115dba4ee9b2f2|ac90411e-2e27-c179-fa03-8bd1ee18fdf4",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-123-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115dba4ee9b2f2|b7e58a60-bb22-7a74-5dcf-c1700cc21044",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-123-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115dba4ee9b2f2|b7e58a60-bb22-7a74-5dcf-c1700cc21044",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-123-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 250,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115dba4ee9b2f2|229a4ced-eb95-6ebe-741e-61cf5014f134",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-123-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 250,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115dba4ee9b2f2|1333513d-5796-5b72-f413-f1a0b09cc377",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-123-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "easeOut",
                duration: 1000,
                target: {
                  id: "63dced0024115dba4ee9b2f2|77bded60-d5e8-904a-5e6d-0bdac0d14056",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1525727215739,
    },
    "a-124": {
      id: "a-124",
      title: "number slider animation Impressione 1",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-124-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|886cf672-2ad3-9053-92f7-05a3f3750dd2",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-124-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|886cf672-2ad3-9053-92f7-05a3f3750dd4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-124-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|886cf672-2ad3-9053-92f7-05a3f3750dd0",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-126": {
      id: "a-126",
      title: "number slider animation Impressione 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-126-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|886cf672-2ad3-9053-92f7-05a3f3750dd2",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-126-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|886cf672-2ad3-9053-92f7-05a3f3750dd4",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-126-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|886cf672-2ad3-9053-92f7-05a3f3750dd0",
                },
                value: 0.68,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-127": {
      id: "a-127",
      title: "mobil number 1 slide",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-127-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|0c1f38f1-e77c-4762-9304-1b7f9a55f857",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-127-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c8161499-d5d1-725e-0f01-333639f1bf73",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-127-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c8161499-d5d1-725e-0f01-333639f1bf71",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-128": {
      id: "a-128",
      title: "mobil number slide 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-128-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c8161499-d5d1-725e-0f01-333639f1bf71",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-128-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c8161499-d5d1-725e-0f01-333639f1bf75",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-128-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c8161499-d5d1-725e-0f01-333639f1bf73",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-129": {
      id: "a-129",
      title: "mobil number slide 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-129-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c8161499-d5d1-725e-0f01-333639f1bf73",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-129-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|00f22db5-7e22-1744-ff60-70895bca75d5",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-129-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c8161499-d5d1-725e-0f01-333639f1bf75",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-130": {
      id: "a-130",
      title: "mobil number slide 4",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-130-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c8161499-d5d1-725e-0f01-333639f1bf75",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-130-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|84192c05-b41e-d04e-43bb-8b1e291c67ae",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-130-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|00f22db5-7e22-1744-ff60-70895bca75d5",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-131": {
      id: "a-131",
      title: "mobil number slide 5",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-131-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|00f22db5-7e22-1744-ff60-70895bca75d5",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-131-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|6f61e338-9a59-875f-ceec-d27206d0ad39",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-131-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|84192c05-b41e-d04e-43bb-8b1e291c67ae",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-132": {
      id: "a-132",
      title: "mobil number slide 6",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-132-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|84192c05-b41e-d04e-43bb-8b1e291c67ae",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-132-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|1044ecce-ce49-781d-14e9-2f6f2c473acd",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-132-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|6f61e338-9a59-875f-ceec-d27206d0ad39",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-133": {
      id: "a-133",
      title: "mobil number slide 7",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-133-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|6f61e338-9a59-875f-ceec-d27206d0ad39",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-133-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|6039a6a7-b99a-7a06-f902-09ec5324fcc7",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-133-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|1044ecce-ce49-781d-14e9-2f6f2c473acd",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-134": {
      id: "a-134",
      title: "mobil number slide 8",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-134-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|1044ecce-ce49-781d-14e9-2f6f2c473acd",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-134-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|6039a6a7-b99a-7a06-f902-09ec5324fcc7",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-134-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|68f878c6-c8e8-f4ad-12b1-6882f5088850",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-135": {
      id: "a-135",
      title: "mobil number slide 9",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-135-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|6039a6a7-b99a-7a06-f902-09ec5324fcc7",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-135-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|68f878c6-c8e8-f4ad-12b1-6882f5088850",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-135-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|8fb697a4-abc8-aba8-45d0-9640987e624a",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-136": {
      id: "a-136",
      title: "mobil number slide 10",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-136-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|68f878c6-c8e8-f4ad-12b1-6882f5088850",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-136-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|8fb697a4-abc8-aba8-45d0-9640987e624a",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-136-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|0c1f38f1-e77c-4762-9304-1b7f9a55f857",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-137": {
      id: "a-137",
      title: "mobil number slide 11",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-137-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|8fb697a4-abc8-aba8-45d0-9640987e624a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-137-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|0c1f38f1-e77c-4762-9304-1b7f9a55f857",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-137-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115d57a6e9b2e9|c8161499-d5d1-725e-0f01-333639f1bf71",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-138": {
      id: "a-138",
      title: "mobil number catering 1",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-138-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|01c81076-84f0-fc52-242f-a962c3e3f880",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-138-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|01c81076-84f0-fc52-242f-a962c3e3f87a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-138-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|01c81076-84f0-fc52-242f-a962c3e3f878",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-139": {
      id: "a-139",
      title: "mobil number catering 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-139-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|01c81076-84f0-fc52-242f-a962c3e3f878",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-139-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|01c81076-84f0-fc52-242f-a962c3e3f87c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-139-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|01c81076-84f0-fc52-242f-a962c3e3f87a",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-140": {
      id: "a-140",
      title: "mobil number catering 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-140-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|01c81076-84f0-fc52-242f-a962c3e3f87a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-140-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|01c81076-84f0-fc52-242f-a962c3e3f87e",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-140-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|01c81076-84f0-fc52-242f-a962c3e3f87c",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-141": {
      id: "a-141",
      title: "mobil number catering 4",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-141-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|01c81076-84f0-fc52-242f-a962c3e3f87c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-141-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|01c81076-84f0-fc52-242f-a962c3e3f880",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-141-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|01c81076-84f0-fc52-242f-a962c3e3f87e",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
    "a-142": {
      id: "a-142",
      title: "mobil number catering 5",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-142-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|01c81076-84f0-fc52-242f-a962c3e3f87e",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-142-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|01c81076-84f0-fc52-242f-a962c3e3f878",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-142-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "63dced0024115dc6ede9b2ec|01c81076-84f0-fc52-242f-a962c3e3f880",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1516628009801,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
