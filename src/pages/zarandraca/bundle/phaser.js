/*! Phaser v1.1.3 | (c) 2013 Photon Storm Ltd. */
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(b)
    : "object" == typeof exports
    ? (module.exports = b())
    : (a.Phaser = b());
})(this, function () {
  function a(a) {
    return [(255 & (a >> 16)) / 255, (255 & (a >> 8)) / 255, (255 & a) / 255];
  }
  function b() {
    return (
      (c.Matrix = "undefined" != typeof Float32Array ? Float32Array : Array),
      c.Matrix
    );
  }
  function a(a) {
    return [(255 & (a >> 16)) / 255, (255 & (a >> 8)) / 255, (255 & a) / 255];
  }
  var c = c || {},
    d = d || {
      VERSION: "1.1.3",
      DEV_VERSION: "1.1.3",
      GAMES: [],
      AUTO: 0,
      CANVAS: 1,
      WEBGL: 2,
      HEADLESS: 3,
      SPRITE: 0,
      BUTTON: 1,
      BULLET: 2,
      GRAPHICS: 3,
      TEXT: 4,
      TILESPRITE: 5,
      BITMAPTEXT: 6,
      GROUP: 7,
      RENDERTEXTURE: 8,
      TILEMAP: 9,
      TILEMAPLAYER: 10,
      EMITTER: 11,
      POLYGON: 12,
      BITMAPDATA: 13,
      CANVAS_FILTER: 14,
      WEBGL_FILTER: 15,
      NONE: 0,
      LEFT: 1,
      RIGHT: 2,
      UP: 3,
      DOWN: 4,
    };
  (c.InteractionManager = function () {}),
    (d.Utils = {
      shuffle: function (a) {
        for (var b = a.length - 1; b > 0; b--) {
          var c = Math.floor(Math.random() * (b + 1)),
            d = a[b];
          (a[b] = a[c]), (a[c] = d);
        }
        return a;
      },
      pad: function (a, b, c, d) {
        if ("undefined" == typeof b) var b = 0;
        if ("undefined" == typeof c) var c = " ";
        if ("undefined" == typeof d) var d = 3;
        var e = 0;
        if (b + 1 >= a.length)
          switch (d) {
            case 1:
              a = Array(b + 1 - a.length).join(c) + a;
              break;
            case 3:
              var f = Math.ceil((e = b - a.length) / 2),
                g = e - f;
              a = Array(g + 1).join(c) + a + Array(f + 1).join(c);
              break;
            default:
              a += Array(b + 1 - a.length).join(c);
          }
        return a;
      },
      isPlainObject: function (a) {
        if ("object" != typeof a || a.nodeType || a === a.window) return !1;
        try {
          if (
            a.constructor &&
            !hasOwn.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (b) {
          return !1;
        }
        return !0;
      },
      extend: function () {
        var a,
          b,
          c,
          e,
          f,
          g,
          h = arguments[0] || {},
          i = 1,
          j = arguments.length,
          k = !1;
        for (
          "boolean" == typeof h && ((k = h), (h = arguments[1] || {}), (i = 2)),
            j === i && ((h = this), --i);
          j > i;
          i++
        )
          if (null != (a = arguments[i]))
            for (b in a)
              (c = h[b]),
                (e = a[b]),
                h !== e &&
                  (k &&
                  e &&
                  (d.Utils.isPlainObject(e) || (f = Array.isArray(e)))
                    ? (f
                        ? ((f = !1), (g = c && Array.isArray(c) ? c : []))
                        : (g = c && d.Utils.isPlainObject(c) ? c : {}),
                      (h[b] = d.Utils.extend(k, g, e)))
                    : void 0 !== e && (h[b] = e));
        return h;
      },
    }),
    (function () {
      var a = !1;
      a && (window.console = void 0),
        void 0 === window.console &&
          (window.console = {
            debug: function () {
              return !0;
            },
            info: function () {
              return !1;
            },
            warn: function () {
              return !1;
            },
            log: function () {
              return !1;
            },
          }),
        (debug = function (a) {
          window.console.debug(a);
        }),
        (info = function (a) {
          window.console.info(a);
        }),
        (warn = function (a) {
          window.console.warn(a);
        }),
        (log = function (a) {
          window.console.log(a);
        });
    })(),
    "function" != typeof Function.prototype.bind &&
      (Function.prototype.bind = (function () {
        var a = Array.prototype.slice;
        return function (b) {
          function c() {
            var f = e.concat(a.call(arguments));
            d.apply(this instanceof c ? this : b, f);
          }
          var d = this,
            e = a.call(arguments, 1);
          if ("function" != typeof d) throw new TypeError();
          return (
            (c.prototype = (function f(a) {
              return (
                a && (f.prototype = a), this instanceof f ? void 0 : new f()
              );
            })(d.prototype)),
            c
          );
        };
      })()),
    b(),
    (c.mat3 = {}),
    (c.mat3.create = function () {
      var a = new c.Matrix(9);
      return (
        (a[0] = 1),
        (a[1] = 0),
        (a[2] = 0),
        (a[3] = 0),
        (a[4] = 1),
        (a[5] = 0),
        (a[6] = 0),
        (a[7] = 0),
        (a[8] = 1),
        a
      );
    }),
    (c.mat3.identity = function (a) {
      return (
        (a[0] = 1),
        (a[1] = 0),
        (a[2] = 0),
        (a[3] = 0),
        (a[4] = 1),
        (a[5] = 0),
        (a[6] = 0),
        (a[7] = 0),
        (a[8] = 1),
        a
      );
    }),
    (c.mat4 = {}),
    (c.mat4.create = function () {
      var a = new c.Matrix(16);
      return (
        (a[0] = 1),
        (a[1] = 0),
        (a[2] = 0),
        (a[3] = 0),
        (a[4] = 0),
        (a[5] = 1),
        (a[6] = 0),
        (a[7] = 0),
        (a[8] = 0),
        (a[9] = 0),
        (a[10] = 1),
        (a[11] = 0),
        (a[12] = 0),
        (a[13] = 0),
        (a[14] = 0),
        (a[15] = 1),
        a
      );
    }),
    (c.mat3.multiply = function (a, b, c) {
      c || (c = a);
      var d = a[0],
        e = a[1],
        f = a[2],
        g = a[3],
        h = a[4],
        i = a[5],
        j = a[6],
        k = a[7],
        l = a[8],
        m = b[0],
        n = b[1],
        o = b[2],
        p = b[3],
        q = b[4],
        r = b[5],
        s = b[6],
        t = b[7],
        u = b[8];
      return (
        (c[0] = m * d + n * g + o * j),
        (c[1] = m * e + n * h + o * k),
        (c[2] = m * f + n * i + o * l),
        (c[3] = p * d + q * g + r * j),
        (c[4] = p * e + q * h + r * k),
        (c[5] = p * f + q * i + r * l),
        (c[6] = s * d + t * g + u * j),
        (c[7] = s * e + t * h + u * k),
        (c[8] = s * f + t * i + u * l),
        c
      );
    }),
    (c.mat3.clone = function (a) {
      var b = new c.Matrix(9);
      return (
        (b[0] = a[0]),
        (b[1] = a[1]),
        (b[2] = a[2]),
        (b[3] = a[3]),
        (b[4] = a[4]),
        (b[5] = a[5]),
        (b[6] = a[6]),
        (b[7] = a[7]),
        (b[8] = a[8]),
        b
      );
    }),
    (c.mat3.transpose = function (a, b) {
      if (!b || a === b) {
        var c = a[1],
          d = a[2],
          e = a[5];
        return (
          (a[1] = a[3]),
          (a[2] = a[6]),
          (a[3] = c),
          (a[5] = a[7]),
          (a[6] = d),
          (a[7] = e),
          a
        );
      }
      return (
        (b[0] = a[0]),
        (b[1] = a[3]),
        (b[2] = a[6]),
        (b[3] = a[1]),
        (b[4] = a[4]),
        (b[5] = a[7]),
        (b[6] = a[2]),
        (b[7] = a[5]),
        (b[8] = a[8]),
        b
      );
    }),
    (c.mat3.toMat4 = function (a, b) {
      return (
        b || (b = c.mat4.create()),
        (b[15] = 1),
        (b[14] = 0),
        (b[13] = 0),
        (b[12] = 0),
        (b[11] = 0),
        (b[10] = a[8]),
        (b[9] = a[7]),
        (b[8] = a[6]),
        (b[7] = 0),
        (b[6] = a[5]),
        (b[5] = a[4]),
        (b[4] = a[3]),
        (b[3] = 0),
        (b[2] = a[2]),
        (b[1] = a[1]),
        (b[0] = a[0]),
        b
      );
    }),
    (c.mat4.create = function () {
      var a = new c.Matrix(16);
      return (
        (a[0] = 1),
        (a[1] = 0),
        (a[2] = 0),
        (a[3] = 0),
        (a[4] = 0),
        (a[5] = 1),
        (a[6] = 0),
        (a[7] = 0),
        (a[8] = 0),
        (a[9] = 0),
        (a[10] = 1),
        (a[11] = 0),
        (a[12] = 0),
        (a[13] = 0),
        (a[14] = 0),
        (a[15] = 1),
        a
      );
    }),
    (c.mat4.transpose = function (a, b) {
      if (!b || a === b) {
        var c = a[1],
          d = a[2],
          e = a[3],
          f = a[6],
          g = a[7],
          h = a[11];
        return (
          (a[1] = a[4]),
          (a[2] = a[8]),
          (a[3] = a[12]),
          (a[4] = c),
          (a[6] = a[9]),
          (a[7] = a[13]),
          (a[8] = d),
          (a[9] = f),
          (a[11] = a[14]),
          (a[12] = e),
          (a[13] = g),
          (a[14] = h),
          a
        );
      }
      return (
        (b[0] = a[0]),
        (b[1] = a[4]),
        (b[2] = a[8]),
        (b[3] = a[12]),
        (b[4] = a[1]),
        (b[5] = a[5]),
        (b[6] = a[9]),
        (b[7] = a[13]),
        (b[8] = a[2]),
        (b[9] = a[6]),
        (b[10] = a[10]),
        (b[11] = a[14]),
        (b[12] = a[3]),
        (b[13] = a[7]),
        (b[14] = a[11]),
        (b[15] = a[15]),
        b
      );
    }),
    (c.mat4.multiply = function (a, b, c) {
      c || (c = a);
      var d = a[0],
        e = a[1],
        f = a[2],
        g = a[3],
        h = a[4],
        i = a[5],
        j = a[6],
        k = a[7],
        l = a[8],
        m = a[9],
        n = a[10],
        o = a[11],
        p = a[12],
        q = a[13],
        r = a[14],
        s = a[15],
        t = b[0],
        u = b[1],
        v = b[2],
        w = b[3];
      return (
        (c[0] = t * d + u * h + v * l + w * p),
        (c[1] = t * e + u * i + v * m + w * q),
        (c[2] = t * f + u * j + v * n + w * r),
        (c[3] = t * g + u * k + v * o + w * s),
        (t = b[4]),
        (u = b[5]),
        (v = b[6]),
        (w = b[7]),
        (c[4] = t * d + u * h + v * l + w * p),
        (c[5] = t * e + u * i + v * m + w * q),
        (c[6] = t * f + u * j + v * n + w * r),
        (c[7] = t * g + u * k + v * o + w * s),
        (t = b[8]),
        (u = b[9]),
        (v = b[10]),
        (w = b[11]),
        (c[8] = t * d + u * h + v * l + w * p),
        (c[9] = t * e + u * i + v * m + w * q),
        (c[10] = t * f + u * j + v * n + w * r),
        (c[11] = t * g + u * k + v * o + w * s),
        (t = b[12]),
        (u = b[13]),
        (v = b[14]),
        (w = b[15]),
        (c[12] = t * d + u * h + v * l + w * p),
        (c[13] = t * e + u * i + v * m + w * q),
        (c[14] = t * f + u * j + v * n + w * r),
        (c[15] = t * g + u * k + v * o + w * s),
        c
      );
    }),
    (c.Point = function (a, b) {
      (this.x = a || 0), (this.y = b || 0);
    }),
    (c.Point.prototype.clone = function () {
      return new c.Point(this.x, this.y);
    }),
    (c.Point.prototype.constructor = c.Point),
    (c.Rectangle = function (a, b, c, d) {
      (this.x = a || 0),
        (this.y = b || 0),
        (this.width = c || 0),
        (this.height = d || 0);
    }),
    (c.Rectangle.prototype.clone = function () {
      return new c.Rectangle(this.x, this.y, this.width, this.height);
    }),
    (c.Rectangle.prototype.contains = function (a, b) {
      if (this.width <= 0 || this.height <= 0) return !1;
      var c = this.x;
      if (a >= c && a <= c + this.width) {
        var d = this.y;
        if (b >= d && b <= d + this.height) return !0;
      }
      return !1;
    }),
    (c.Rectangle.prototype.constructor = c.Rectangle),
    (c.Polygon = function (a) {
      if (
        (a instanceof Array || (a = Array.prototype.slice.call(arguments)),
        "number" == typeof a[0])
      ) {
        for (var b = [], d = 0, e = a.length; e > d; d += 2)
          b.push(new c.Point(a[d], a[d + 1]));
        a = b;
      }
      this.points = a;
    }),
    (c.Polygon.prototype.clone = function () {
      for (var a = [], b = 0; b < this.points.length; b++)
        a.push(this.points[b].clone());
      return new c.Polygon(a);
    }),
    (c.Polygon.prototype.contains = function (a, b) {
      for (
        var c = !1, d = 0, e = this.points.length - 1;
        d < this.points.length;
        e = d++
      ) {
        var f = this.points[d].x,
          g = this.points[d].y,
          h = this.points[e].x,
          i = this.points[e].y,
          j = g > b != i > b && ((h - f) * (b - g)) / (i - g) + f > a;
        j && (c = !c);
      }
      return c;
    }),
    (c.Polygon.prototype.constructor = c.Polygon),
    (c.DisplayObject = function () {
      (this.last = this),
        (this.first = this),
        (this.position = new c.Point()),
        (this.scale = new c.Point(1, 1)),
        (this.pivot = new c.Point(0, 0)),
        (this.rotation = 0),
        (this.alpha = 1),
        (this.visible = !0),
        (this.hitArea = null),
        (this.buttonMode = !1),
        (this.renderable = !1),
        (this.parent = null),
        (this.stage = null),
        (this.worldAlpha = 1),
        (this._interactive = !1),
        (this.worldTransform = c.mat3.create()),
        (this.localTransform = c.mat3.create()),
        (this.color = []),
        (this.dynamic = !0),
        (this._sr = 0),
        (this._cr = 1),
        (this.filterArea = new c.Rectangle(0, 0, 1, 1));
    }),
    (c.DisplayObject.prototype.constructor = c.DisplayObject),
    (c.DisplayObject.prototype.setInteractive = function (a) {
      this.interactive = a;
    }),
    Object.defineProperty(c.DisplayObject.prototype, "interactive", {
      get: function () {
        return this._interactive;
      },
      set: function (a) {
        (this._interactive = a), this.stage && (this.stage.dirty = !0);
      },
    }),
    Object.defineProperty(c.DisplayObject.prototype, "mask", {
      get: function () {
        return this._mask;
      },
      set: function (a) {
        a
          ? this._mask
            ? ((a.start = this._mask.start), (a.end = this._mask.end))
            : (this.addFilter(a), (a.renderable = !1))
          : (this.removeFilter(this._mask), (this._mask.renderable = !0)),
          (this._mask = a);
      },
    }),
    Object.defineProperty(c.DisplayObject.prototype, "filters", {
      get: function () {
        return this._filters;
      },
      set: function (a) {
        if (a) {
          this._filters && this.removeFilter(this._filters), this.addFilter(a);
          for (var b = [], c = 0; c < a.length; c++)
            for (var d = a[c].passes, e = 0; e < d.length; e++) b.push(d[e]);
          a.start.filterPasses = b;
        } else this._filters && this.removeFilter(this._filters);
        this._filters = a;
      },
    }),
    (c.DisplayObject.prototype.addFilter = function (a) {
      var b = new c.FilterBlock(),
        d = new c.FilterBlock();
      (a.start = b),
        (a.end = d),
        (b.data = a),
        (d.data = a),
        (b.first = b.last = this),
        (d.first = d.last = this),
        (b.open = !0),
        (b.target = this);
      var e,
        f,
        g = b,
        h = b;
      (f = this.first._iPrev),
        f ? ((e = f._iNext), (g._iPrev = f), (f._iNext = g)) : (e = this),
        e && ((e._iPrev = h), (h._iNext = e));
      var g = d,
        h = d,
        e = null,
        f = null;
      (f = this.last),
        (e = f._iNext),
        e && ((e._iPrev = h), (h._iNext = e)),
        (g._iPrev = f),
        (f._iNext = g);
      for (var i = this, j = this.last; i; )
        i.last == j && (i.last = d), (i = i.parent);
      (this.first = b),
        this.__renderGroup && this.__renderGroup.addFilterBlocks(b, d);
    }),
    (c.DisplayObject.prototype.removeFilter = function (a) {
      console.log("YUOIO");
      var b = a.start,
        c = b._iNext,
        d = b._iPrev;
      c && (c._iPrev = d), d && (d._iNext = c), (this.first = b._iNext);
      var e = a.end,
        c = e._iNext,
        d = e._iPrev;
      c && (c._iPrev = d), (d._iNext = c);
      for (
        var f = e._iPrev, g = this;
        g.last == e && ((g.last = f), (g = g.parent));

      );
      this.__renderGroup && this.__renderGroup.removeFilterBlocks(b, e);
    }),
    (c.DisplayObject.prototype.updateTransform = function () {
      this.rotation !== this.rotationCache &&
        ((this.rotationCache = this.rotation),
        (this._sr = Math.sin(this.rotation)),
        (this._cr = Math.cos(this.rotation)));
      var a = this.localTransform,
        b = this.parent.worldTransform,
        d = this.worldTransform;
      (a[0] = this._cr * this.scale.x),
        (a[1] = -this._sr * this.scale.y),
        (a[3] = this._sr * this.scale.x),
        (a[4] = this._cr * this.scale.y);
      var e = this.pivot.x,
        f = this.pivot.y,
        g = a[0],
        h = a[1],
        i = this.position.x - a[0] * e - f * a[1],
        j = a[3],
        k = a[4],
        l = this.position.y - a[4] * f - e * a[3],
        m = b[0],
        n = b[1],
        o = b[2],
        p = b[3],
        q = b[4],
        r = b[5];
      (a[2] = i),
        (a[5] = l),
        (d[0] = m * g + n * j),
        (d[1] = m * h + n * k),
        (d[2] = m * i + n * l + o),
        (d[3] = p * g + q * j),
        (d[4] = p * h + q * k),
        (d[5] = p * i + q * l + r),
        (this.worldAlpha = this.alpha * this.parent.worldAlpha),
        (this.vcount = c.visibleCount);
    }),
    (c.visibleCount = 0),
    (c.DisplayObjectContainer = function () {
      c.DisplayObject.call(this), (this.children = []);
    }),
    (c.DisplayObjectContainer.prototype = Object.create(
      c.DisplayObject.prototype
    )),
    (c.DisplayObjectContainer.prototype.constructor = c.DisplayObjectContainer),
    (c.DisplayObjectContainer.prototype.addChild = function (a) {
      if (
        (void 0 != a.parent && a.parent.removeChild(a),
        (a.parent = this),
        this.children.push(a),
        this.stage)
      ) {
        var b = a;
        do
          b.interactive && (this.stage.dirty = !0),
            (b.stage = this.stage),
            (b = b._iNext);
        while (b);
      }
      var c,
        d,
        e = a.first,
        f = a.last;
      (d = this._filters || this._mask ? this.last._iPrev : this.last),
        (c = d._iNext);
      for (var g = this, h = d; g; )
        g.last == h && (g.last = a.last), (g = g.parent);
      c && ((c._iPrev = f), (f._iNext = c)),
        (e._iPrev = d),
        (d._iNext = e),
        this.__renderGroup &&
          (a.__renderGroup && a.__renderGroup.removeDisplayObjectAndChildren(a),
          this.__renderGroup.addDisplayObjectAndChildren(a));
    }),
    (c.DisplayObjectContainer.prototype.addChildAt = function (a, b) {
      if (!(b >= 0 && b <= this.children.length))
        throw new Error(
          a +
            " The index " +
            b +
            " supplied is out of bounds " +
            this.children.length
        );
      if (
        (void 0 != a.parent && a.parent.removeChild(a),
        (a.parent = this),
        this.stage)
      ) {
        var c = a;
        do
          c.interactive && (this.stage.dirty = !0),
            (c.stage = this.stage),
            (c = c._iNext);
        while (c);
      }
      var d,
        e,
        f = a.first,
        g = a.last;
      if (b == this.children.length) {
        e = this.last;
        for (var h = this, i = this.last; h; )
          h.last == i && (h.last = a.last), (h = h.parent);
      } else e = 0 === b ? this : this.children[b - 1].last;
      (d = e._iNext),
        d && ((d._iPrev = g), (g._iNext = d)),
        (f._iPrev = e),
        (e._iNext = f),
        this.children.splice(b, 0, a),
        this.__renderGroup &&
          (a.__renderGroup && a.__renderGroup.removeDisplayObjectAndChildren(a),
          this.__renderGroup.addDisplayObjectAndChildren(a));
    }),
    (c.DisplayObjectContainer.prototype.swapChildren = function () {}),
    (c.DisplayObjectContainer.prototype.getChildAt = function (a) {
      if (a >= 0 && a < this.children.length) return this.children[a];
      throw new Error(
        child +
          " Both the supplied DisplayObjects must be a child of the caller " +
          this
      );
    }),
    (c.DisplayObjectContainer.prototype.removeChild = function (a) {
      var b = this.children.indexOf(a);
      if (-1 === b)
        throw new Error(
          a +
            " The supplied DisplayObject must be a child of the caller " +
            this
        );
      var c = a.first,
        d = a.last,
        e = d._iNext,
        f = c._iPrev;
      if ((e && (e._iPrev = f), (f._iNext = e), this.last == d))
        for (
          var g = c._iPrev, h = this;
          h.last == d.last && ((h.last = g), (h = h.parent));

        );
      if (((d._iNext = null), (c._iPrev = null), this.stage)) {
        var i = a;
        do
          i.interactive && (this.stage.dirty = !0),
            (i.stage = null),
            (i = i._iNext);
        while (i);
      }
      a.__renderGroup && a.__renderGroup.removeDisplayObjectAndChildren(a),
        (a.parent = void 0),
        this.children.splice(b, 1);
    }),
    (c.DisplayObjectContainer.prototype.updateTransform = function () {
      if (this.visible) {
        c.DisplayObject.prototype.updateTransform.call(this);
        for (var a = 0, b = this.children.length; b > a; a++)
          this.children[a].updateTransform();
      }
    }),
    (c.blendModes = {}),
    (c.blendModes.NORMAL = 0),
    (c.blendModes.SCREEN = 1),
    (c.Sprite = function (a) {
      c.DisplayObjectContainer.call(this),
        (this.anchor = new c.Point()),
        (this.texture = a),
        (this.blendMode = c.blendModes.NORMAL),
        (this._width = 0),
        (this._height = 0),
        a.baseTexture.hasLoaded
          ? (this.updateFrame = !0)
          : ((this.onTextureUpdateBind = this.onTextureUpdate.bind(this)),
            this.texture.addEventListener("update", this.onTextureUpdateBind)),
        (this.renderable = !0);
    }),
    (c.Sprite.prototype = Object.create(c.DisplayObjectContainer.prototype)),
    (c.Sprite.prototype.constructor = c.Sprite),
    Object.defineProperty(c.Sprite.prototype, "width", {
      get: function () {
        return this.scale.x * this.texture.frame.width;
      },
      set: function (a) {
        (this.scale.x = a / this.texture.frame.width), (this._width = a);
      },
    }),
    Object.defineProperty(c.Sprite.prototype, "height", {
      get: function () {
        return this.scale.y * this.texture.frame.height;
      },
      set: function (a) {
        (this.scale.y = a / this.texture.frame.height), (this._height = a);
      },
    }),
    (c.Sprite.prototype.setTexture = function (a) {
      this.texture.baseTexture != a.baseTexture
        ? ((this.textureChange = !0),
          (this.texture = a),
          this.__renderGroup && this.__renderGroup.updateTexture(this))
        : (this.texture = a),
        (this.updateFrame = !0);
    }),
    (c.Sprite.prototype.onTextureUpdate = function () {
      this._width && (this.scale.x = this._width / this.texture.frame.width),
        this._height &&
          (this.scale.y = this._height / this.texture.frame.height),
        (this.updateFrame = !0);
    }),
    (c.Sprite.fromFrame = function (a) {
      var b = c.TextureCache[a];
      if (!b)
        throw new Error(
          "The frameId '" + a + "' does not exist in the texture cache" + this
        );
      return new c.Sprite(b);
    }),
    (c.Sprite.fromImage = function (a) {
      var b = c.Texture.fromImage(a);
      return new c.Sprite(b);
    }),
    (c.Stage = function (a) {
      c.DisplayObjectContainer.call(this),
        (this.worldTransform = c.mat3.create()),
        (this.interactive = !0),
        (this.interactionManager = new c.InteractionManager(this)),
        (this.dirty = !0),
        (this.__childrenAdded = []),
        (this.__childrenRemoved = []),
        (this.stage = this),
        (this.stage.hitArea = new c.Rectangle(0, 0, 1e5, 1e5)),
        this.setBackgroundColor(a),
        (this.worldVisible = !0);
    }),
    (c.Stage.prototype = Object.create(c.DisplayObjectContainer.prototype)),
    (c.Stage.prototype.constructor = c.Stage),
    (c.Stage.prototype.setInteractionDelegate = function (a) {
      this.interactionManager.setTargetDomElement(a);
    }),
    (c.Stage.prototype.updateTransform = function () {
      (this.worldAlpha = 1), (this.vcount = c.visibleCount);
      for (var a = 0, b = this.children.length; b > a; a++)
        this.children[a].updateTransform();
      this.dirty && ((this.dirty = !1), (this.interactionManager.dirty = !0)),
        this.interactive && this.interactionManager.update();
    }),
    (c.Stage.prototype.setBackgroundColor = function (b) {
      (this.backgroundColor = b || 0),
        (this.backgroundColorSplit = a(this.backgroundColor));
      var c = this.backgroundColor.toString(16);
      (c = "000000".substr(0, 6 - c.length) + c),
        (this.backgroundColorString = "#" + c);
    }),
    (c.Stage.prototype.getMousePosition = function () {
      return this.interactionManager.mouse.global;
    }),
    (c.CustomRenderable = function () {
      c.DisplayObject.call(this), (this.renderable = !0);
    }),
    (c.CustomRenderable.prototype = Object.create(c.DisplayObject.prototype)),
    (c.CustomRenderable.prototype.constructor = c.CustomRenderable),
    (c.CustomRenderable.prototype.renderCanvas = function () {}),
    (c.CustomRenderable.prototype.initWebGL = function () {}),
    (c.CustomRenderable.prototype.renderWebGL = function () {}),
    (c.Strip = function (a, b, d) {
      c.DisplayObjectContainer.call(this),
        (this.texture = a),
        (this.blendMode = c.blendModes.NORMAL);
      try {
        (this.uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1])),
          (this.verticies = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0])),
          (this.colors = new Float32Array([1, 1, 1, 1])),
          (this.indices = new Uint16Array([0, 1, 2, 3]));
      } catch (e) {
        (this.uvs = [0, 1, 1, 1, 1, 0, 0, 1]),
          (this.verticies = [0, 0, 0, 0, 0, 0, 0, 0, 0]),
          (this.colors = [1, 1, 1, 1]),
          (this.indices = [0, 1, 2, 3]);
      }
      (this.width = b),
        (this.height = d),
        a.baseTexture.hasLoaded
          ? ((this.width = this.texture.frame.width),
            (this.height = this.texture.frame.height),
            (this.updateFrame = !0))
          : ((this.onTextureUpdateBind = this.onTextureUpdate.bind(this)),
            this.texture.addEventListener("update", this.onTextureUpdateBind)),
        (this.renderable = !0);
    }),
    (c.Strip.prototype = Object.create(c.DisplayObjectContainer.prototype)),
    (c.Strip.prototype.constructor = c.Strip),
    (c.Strip.prototype.setTexture = function (a) {
      (this.texture = a),
        (this.width = a.frame.width),
        (this.height = a.frame.height),
        (this.updateFrame = !0);
    }),
    (c.Strip.prototype.onTextureUpdate = function () {
      this.updateFrame = !0;
    }),
    (c.Rope = function (a, b) {
      c.Strip.call(this, a), (this.points = b);
      try {
        (this.verticies = new Float32Array(4 * b.length)),
          (this.uvs = new Float32Array(4 * b.length)),
          (this.colors = new Float32Array(2 * b.length)),
          (this.indices = new Uint16Array(2 * b.length));
      } catch (d) {
        (this.verticies = verticies),
          (this.uvs = uvs),
          (this.colors = colors),
          (this.indices = indices);
      }
      this.refresh();
    }),
    (c.Rope.prototype = Object.create(c.Strip.prototype)),
    (c.Rope.prototype.constructor = c.Rope),
    (c.Rope.prototype.refresh = function () {
      var a = this.points;
      if (!(a.length < 1)) {
        var b = this.uvs,
          c = this.indices,
          d = this.colors,
          e = a[0],
          f = a[0];
        (this.count -= 0.2),
          (b[0] = 0),
          (b[1] = 1),
          (b[2] = 0),
          (b[3] = 1),
          (d[0] = 1),
          (d[1] = 1),
          (c[0] = 0),
          (c[1] = 1);
        for (var g = a.length, h = 1; g > h; h++) {
          var f = a[h],
            i = 4 * h,
            j = h / (g - 1);
          h % 2
            ? ((b[i] = j), (b[i + 1] = 0), (b[i + 2] = j), (b[i + 3] = 1))
            : ((b[i] = j), (b[i + 1] = 0), (b[i + 2] = j), (b[i + 3] = 1)),
            (i = 2 * h),
            (d[i] = 1),
            (d[i + 1] = 1),
            (i = 2 * h),
            (c[i] = i),
            (c[i + 1] = i + 1),
            (e = f);
        }
      }
    }),
    (c.Rope.prototype.updateTransform = function () {
      var a = this.points;
      if (!(a.length < 1)) {
        var b,
          d = this.verticies,
          e = a[0],
          f = { x: 0, y: 0 },
          g = a[0];
        (this.count -= 0.2),
          (d[0] = g.x + f.x),
          (d[1] = g.y + f.y),
          (d[2] = g.x - f.x),
          (d[3] = g.y - f.y);
        for (var h = a.length, i = 1; h > i; i++) {
          var g = a[i],
            j = 4 * i;
          (b = i < a.length - 1 ? a[i + 1] : g),
            (f.y = -(b.x - e.x)),
            (f.x = b.y - e.y);
          var k = 10 * (1 - i / (h - 1));
          k > 1 && (k = 1);
          var l = Math.sqrt(f.x * f.x + f.y * f.y),
            m = this.texture.height / 2;
          (f.x /= l),
            (f.y /= l),
            (f.x *= m),
            (f.y *= m),
            (d[j] = g.x + f.x),
            (d[j + 1] = g.y + f.y),
            (d[j + 2] = g.x - f.x),
            (d[j + 3] = g.y - f.y),
            (e = g);
        }
        c.DisplayObjectContainer.prototype.updateTransform.call(this);
      }
    }),
    (c.Rope.prototype.setTexture = function (a) {
      (this.texture = a), (this.updateFrame = !0);
    }),
    (c.TilingSprite = function (a, b, d) {
      c.DisplayObjectContainer.call(this),
        (this.texture = a),
        (this.width = b),
        (this.height = d),
        (this.tileScale = new c.Point(1, 1)),
        (this.tilePosition = new c.Point(0, 0)),
        (this.renderable = !0),
        (this.blendMode = c.blendModes.NORMAL);
    }),
    (c.TilingSprite.prototype = Object.create(
      c.DisplayObjectContainer.prototype
    )),
    (c.TilingSprite.prototype.constructor = c.TilingSprite),
    (c.TilingSprite.prototype.setTexture = function (a) {
      (this.texture = a), (this.updateFrame = !0);
    }),
    (c.TilingSprite.prototype.onTextureUpdate = function () {
      this.updateFrame = !0;
    }),
    (c.AbstractFilter = function (a, b) {
      (this.passes = [this]),
        (this.dirty = !0),
        (this.padding = 0),
        (this.uniforms = b || {}),
        (this.fragmentSrc = a || []);
    }),
    (c.FilterBlock = function () {
      (this.visible = !0), (this.renderable = !0);
    }),
    (c.Graphics = function () {
      c.DisplayObjectContainer.call(this),
        (this.renderable = !0),
        (this.fillAlpha = 1),
        (this.lineWidth = 0),
        (this.lineColor = "black"),
        (this.graphicsData = []),
        (this.currentPath = { points: [] });
    }),
    (c.Graphics.prototype = Object.create(c.DisplayObjectContainer.prototype)),
    (c.Graphics.prototype.constructor = c.Graphics),
    (c.Graphics.prototype.lineStyle = function (a, b, d) {
      0 === this.currentPath.points.length && this.graphicsData.pop(),
        (this.lineWidth = a || 0),
        (this.lineColor = b || 0),
        (this.lineAlpha = void 0 == d ? 1 : d),
        (this.currentPath = {
          lineWidth: this.lineWidth,
          lineColor: this.lineColor,
          lineAlpha: this.lineAlpha,
          fillColor: this.fillColor,
          fillAlpha: this.fillAlpha,
          fill: this.filling,
          points: [],
          type: c.Graphics.POLY,
        }),
        this.graphicsData.push(this.currentPath);
    }),
    (c.Graphics.prototype.moveTo = function (a, b) {
      0 === this.currentPath.points.length && this.graphicsData.pop(),
        (this.currentPath = this.currentPath =
          {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [],
            type: c.Graphics.POLY,
          }),
        this.currentPath.points.push(a, b),
        this.graphicsData.push(this.currentPath);
    }),
    (c.Graphics.prototype.lineTo = function (a, b) {
      this.currentPath.points.push(a, b), (this.dirty = !0);
    }),
    (c.Graphics.prototype.beginFill = function (a, b) {
      (this.filling = !0),
        (this.fillColor = a || 0),
        (this.fillAlpha = void 0 == b ? 1 : b);
    }),
    (c.Graphics.prototype.endFill = function () {
      (this.filling = !1), (this.fillColor = null), (this.fillAlpha = 1);
    }),
    (c.Graphics.prototype.drawRect = function (a, b, d, e) {
      0 === this.currentPath.points.length && this.graphicsData.pop(),
        (this.currentPath = {
          lineWidth: this.lineWidth,
          lineColor: this.lineColor,
          lineAlpha: this.lineAlpha,
          fillColor: this.fillColor,
          fillAlpha: this.fillAlpha,
          fill: this.filling,
          points: [a, b, d, e],
          type: c.Graphics.RECT,
        }),
        this.graphicsData.push(this.currentPath),
        (this.dirty = !0);
    }),
    (c.Graphics.prototype.drawCircle = function (a, b, d) {
      0 === this.currentPath.points.length && this.graphicsData.pop(),
        (this.currentPath = {
          lineWidth: this.lineWidth,
          lineColor: this.lineColor,
          lineAlpha: this.lineAlpha,
          fillColor: this.fillColor,
          fillAlpha: this.fillAlpha,
          fill: this.filling,
          points: [a, b, d, d],
          type: c.Graphics.CIRC,
        }),
        this.graphicsData.push(this.currentPath),
        (this.dirty = !0);
    }),
    (c.Graphics.prototype.drawElipse = function (a, b, d, e) {
      0 === this.currentPath.points.length && this.graphicsData.pop(),
        (this.currentPath = {
          lineWidth: this.lineWidth,
          lineColor: this.lineColor,
          lineAlpha: this.lineAlpha,
          fillColor: this.fillColor,
          fillAlpha: this.fillAlpha,
          fill: this.filling,
          points: [a, b, d, e],
          type: c.Graphics.ELIP,
        }),
        this.graphicsData.push(this.currentPath),
        (this.dirty = !0);
    }),
    (c.Graphics.prototype.clear = function () {
      (this.lineWidth = 0),
        (this.filling = !1),
        (this.dirty = !0),
        (this.clearDirty = !0),
        (this.graphicsData = []),
        (this.bounds = null);
    }),
    (c.Graphics.prototype.updateFilterBounds = function () {
      if (!this.bounds) {
        for (
          var a, b, d, e = 1 / 0, f = -1 / 0, g = 1 / 0, h = -1 / 0, i = 0;
          i < this.graphicsData.length;
          i++
        ) {
          var j = this.graphicsData[i],
            k = j.type,
            l = j.lineWidth;
          if (((a = j.points), k === c.Graphics.RECT)) {
            (b = a.x - l / 2), (d = a.y - l / 2);
            var m = a.width + l,
              n = a.height + l;
            (e = e > b ? b : e),
              (f = b + m > f ? b + m : f),
              (g = g > d ? b : g),
              (h = d + n > h ? d + n : h);
          } else if (k === c.Graphics.CIRC || k === c.Graphics.ELIP) {
            (b = a.x), (d = a.y);
            var o = a.radius + l / 2;
            (e = e > b - o ? b - o : e),
              (f = b + o > f ? b + o : f),
              (g = g > d - o ? d - o : g),
              (h = d + o > h ? d + o : h);
          } else
            for (var p = 0; p < a.length; p += 2)
              (b = a[p]),
                (d = a[p + 1]),
                (e = e > b - l ? b - l : e),
                (f = b + l > f ? b + l : f),
                (g = g > d - l ? d - l : g),
                (h = d + l > h ? d + l : h);
        }
        this.bounds = new c.Rectangle(e, g, f - e, h - g);
      }
    }),
    (c.Graphics.POLY = 0),
    (c.Graphics.RECT = 1),
    (c.Graphics.CIRC = 2),
    (c.Graphics.ELIP = 3),
    (c.CanvasGraphics = function () {}),
    (c.CanvasGraphics.renderGraphics = function (a, b) {
      for (var d = a.worldAlpha, e = 0; e < a.graphicsData.length; e++) {
        var f = a.graphicsData[e],
          g = f.points;
        if (
          ((b.strokeStyle = color =
            "#" + ("00000" + (0 | f.lineColor).toString(16)).substr(-6)),
          (b.lineWidth = f.lineWidth),
          f.type == c.Graphics.POLY)
        ) {
          b.beginPath(), b.moveTo(g[0], g[1]);
          for (var h = 1; h < g.length / 2; h++)
            b.lineTo(g[2 * h], g[2 * h + 1]);
          g[0] == g[g.length - 2] && g[1] == g[g.length - 1] && b.closePath(),
            f.fill &&
              ((b.globalAlpha = f.fillAlpha * d),
              (b.fillStyle = color =
                "#" + ("00000" + (0 | f.fillColor).toString(16)).substr(-6)),
              b.fill()),
            f.lineWidth && ((b.globalAlpha = f.lineAlpha * d), b.stroke());
        } else if (f.type == c.Graphics.RECT)
          (f.fillColor || 0 === f.fillColor) &&
            ((b.globalAlpha = f.fillAlpha * d),
            (b.fillStyle = color =
              "#" + ("00000" + (0 | f.fillColor).toString(16)).substr(-6)),
            b.fillRect(g[0], g[1], g[2], g[3])),
            f.lineWidth &&
              ((b.globalAlpha = f.lineAlpha * d),
              b.strokeRect(g[0], g[1], g[2], g[3]));
        else if (f.type == c.Graphics.CIRC)
          b.beginPath(),
            b.arc(g[0], g[1], g[2], 0, 2 * Math.PI),
            b.closePath(),
            f.fill &&
              ((b.globalAlpha = f.fillAlpha * d),
              (b.fillStyle = color =
                "#" + ("00000" + (0 | f.fillColor).toString(16)).substr(-6)),
              b.fill()),
            f.lineWidth && ((b.globalAlpha = f.lineAlpha * d), b.stroke());
        else if (f.type == c.Graphics.ELIP) {
          var i = f.points,
            j = 2 * i[2],
            k = 2 * i[3],
            l = i[0] - j / 2,
            m = i[1] - k / 2;
          b.beginPath();
          var n = 0.5522848,
            o = (j / 2) * n,
            p = (k / 2) * n,
            q = l + j,
            r = m + k,
            s = l + j / 2,
            t = m + k / 2;
          b.moveTo(l, t),
            b.bezierCurveTo(l, t - p, s - o, m, s, m),
            b.bezierCurveTo(s + o, m, q, t - p, q, t),
            b.bezierCurveTo(q, t + p, s + o, r, s, r),
            b.bezierCurveTo(s - o, r, l, t + p, l, t),
            b.closePath(),
            f.fill &&
              ((b.globalAlpha = f.fillAlpha * d),
              (b.fillStyle = color =
                "#" + ("00000" + (0 | f.fillColor).toString(16)).substr(-6)),
              b.fill()),
            f.lineWidth && ((b.globalAlpha = f.lineAlpha * d), b.stroke());
        }
      }
    }),
    (c.CanvasGraphics.renderGraphicsMask = function (a, b) {
      a.worldAlpha;
      var d = a.graphicsData.length;
      if (0 !== d) {
        d > 1 &&
          ((d = 1),
          console.log(
            "Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"
          ));
        for (var e = 0; 1 > e; e++) {
          var f = a.graphicsData[e],
            g = f.points;
          if (f.type == c.Graphics.POLY) {
            b.beginPath(), b.moveTo(g[0], g[1]);
            for (var h = 1; h < g.length / 2; h++)
              b.lineTo(g[2 * h], g[2 * h + 1]);
            g[0] == g[g.length - 2] && g[1] == g[g.length - 1] && b.closePath();
          } else if (f.type == c.Graphics.RECT)
            b.beginPath(), b.rect(g[0], g[1], g[2], g[3]), b.closePath();
          else if (f.type == c.Graphics.CIRC)
            b.beginPath(),
              b.arc(g[0], g[1], g[2], 0, 2 * Math.PI),
              b.closePath();
          else if (f.type == c.Graphics.ELIP) {
            var i = f.points,
              j = 2 * i[2],
              k = 2 * i[3],
              l = i[0] - j / 2,
              m = i[1] - k / 2;
            b.beginPath();
            var n = 0.5522848,
              o = (j / 2) * n,
              p = (k / 2) * n,
              q = l + j,
              r = m + k,
              s = l + j / 2,
              t = m + k / 2;
            b.moveTo(l, t),
              b.bezierCurveTo(l, t - p, s - o, m, s, m),
              b.bezierCurveTo(s + o, m, q, t - p, q, t),
              b.bezierCurveTo(q, t + p, s + o, r, s, r),
              b.bezierCurveTo(s - o, r, l, t + p, l, t),
              b.closePath();
          }
        }
      }
    }),
    (c.CanvasRenderer = function (a, b, c, d) {
      (this.transparent = d),
        (this.width = a || 800),
        (this.height = b || 600),
        (this.view = c || document.createElement("canvas")),
        (this.context = this.view.getContext("2d")),
        (this.refresh = !0),
        (this.view.width = this.width),
        (this.view.height = this.height),
        (this.count = 0);
    }),
    (c.CanvasRenderer.prototype.constructor = c.CanvasRenderer),
    (c.CanvasRenderer.prototype.render = function (a) {
      (c.texturesToUpdate = []),
        (c.texturesToDestroy = []),
        c.visibleCount++,
        a.updateTransform(),
        this.view.style.backgroundColor == a.backgroundColorString ||
          this.transparent ||
          (this.view.style.backgroundColor = a.backgroundColorString),
        this.context.setTransform(1, 0, 0, 1, 0, 0),
        this.context.clearRect(0, 0, this.width, this.height),
        this.renderDisplayObject(a),
        a.interactive &&
          (a._interactiveEventsAdded ||
            ((a._interactiveEventsAdded = !0),
            a.interactionManager.setTarget(this))),
        c.Texture.frameUpdates.length > 0 && (c.Texture.frameUpdates = []);
    }),
    (c.CanvasRenderer.prototype.resize = function (a, b) {
      (this.width = a),
        (this.height = b),
        (this.view.width = a),
        (this.view.height = b);
    }),
    (c.CanvasRenderer.prototype.renderDisplayObject = function (a) {
      var b,
        d = this.context;
      d.globalCompositeOperation = "source-over";
      var e = a.last._iNext;
      a = a.first;
      do
        if (((b = a.worldTransform), a.visible))
          if (a.renderable) {
            if (a instanceof c.Sprite) {
              var f = a.texture.frame;
              f &&
                f.width &&
                f.height &&
                ((d.globalAlpha = a.worldAlpha),
                d.setTransform(b[0], b[3], b[1], b[4], b[2], b[5]),
                d.drawImage(
                  a.texture.baseTexture.source,
                  f.x,
                  f.y,
                  f.width,
                  f.height,
                  a.anchor.x * -f.width,
                  a.anchor.y * -f.height,
                  f.width,
                  f.height
                ));
            } else if (a instanceof c.Strip)
              d.setTransform(b[0], b[3], b[1], b[4], b[2], b[5]),
                this.renderStrip(a);
            else if (a instanceof c.TilingSprite)
              d.setTransform(b[0], b[3], b[1], b[4], b[2], b[5]),
                this.renderTilingSprite(a);
            else if (a instanceof c.CustomRenderable)
              d.setTransform(b[0], b[3], b[1], b[4], b[2], b[5]),
                a.renderCanvas(this);
            else if (a instanceof c.Graphics)
              d.setTransform(b[0], b[3], b[1], b[4], b[2], b[5]),
                c.CanvasGraphics.renderGraphics(a, d);
            else if (
              a instanceof c.FilterBlock &&
              a.data instanceof c.Graphics
            ) {
              var g = a.data;
              if (a.open) {
                d.save();
                var h = g.alpha,
                  i = g.worldTransform;
                d.setTransform(i[0], i[3], i[1], i[4], i[2], i[5]),
                  (g.worldAlpha = 0.5),
                  (d.worldAlpha = 0),
                  c.CanvasGraphics.renderGraphicsMask(g, d),
                  d.clip(),
                  (g.worldAlpha = h);
              } else d.restore();
            }
            a = a._iNext;
          } else a = a._iNext;
        else a = a.last._iNext;
      while (a != e);
    }),
    (c.CanvasRenderer.prototype.renderStripFlat = function (a) {
      var b = this.context,
        c = a.verticies;
      a.uvs;
      var d = c.length / 2;
      this.count++, b.beginPath();
      for (var e = 1; d - 2 > e; e++) {
        var f = 2 * e,
          g = c[f],
          h = c[f + 2],
          i = c[f + 4],
          j = c[f + 1],
          k = c[f + 3],
          l = c[f + 5];
        b.moveTo(g, j), b.lineTo(h, k), b.lineTo(i, l);
      }
      (b.fillStyle = "#FF0000"), b.fill(), b.closePath();
    }),
    (c.CanvasRenderer.prototype.renderTilingSprite = function (a) {
      var b = this.context;
      (b.globalAlpha = a.worldAlpha),
        a.__tilePattern ||
          (a.__tilePattern = b.createPattern(
            a.texture.baseTexture.source,
            "repeat"
          )),
        b.beginPath();
      var c = a.tilePosition,
        d = a.tileScale;
      b.scale(d.x, d.y),
        b.translate(c.x, c.y),
        (b.fillStyle = a.__tilePattern),
        b.fillRect(-c.x, -c.y, a.width / d.x, a.height / d.y),
        b.scale(1 / d.x, 1 / d.y),
        b.translate(-c.x, -c.y),
        b.closePath();
    }),
    (c.CanvasRenderer.prototype.renderStrip = function (a) {
      var b = this.context,
        c = a.verticies,
        d = a.uvs,
        e = c.length / 2;
      this.count++;
      for (var f = 1; e - 2 > f; f++) {
        var g = 2 * f,
          h = c[g],
          i = c[g + 2],
          j = c[g + 4],
          k = c[g + 1],
          l = c[g + 3],
          m = c[g + 5],
          n = d[g] * a.texture.width,
          o = d[g + 2] * a.texture.width,
          p = d[g + 4] * a.texture.width,
          q = d[g + 1] * a.texture.height,
          r = d[g + 3] * a.texture.height,
          s = d[g + 5] * a.texture.height;
        b.save(),
          b.beginPath(),
          b.moveTo(h, k),
          b.lineTo(i, l),
          b.lineTo(j, m),
          b.closePath(),
          b.clip();
        var t = n * r + q * p + o * s - r * p - q * o - n * s,
          u = h * r + q * j + i * s - r * j - q * i - h * s,
          v = n * i + h * p + o * j - i * p - h * o - n * j,
          w =
            n * r * j +
            q * i * p +
            h * o * s -
            h * r * p -
            q * o * j -
            n * i * s,
          x = k * r + q * m + l * s - r * m - q * l - k * s,
          y = n * l + k * p + o * m - l * p - k * o - n * m,
          z =
            n * r * m +
            q * l * p +
            k * o * s -
            k * r * p -
            q * o * m -
            n * l * s;
        b.transform(u / t, x / t, v / t, y / t, w / t, z / t),
          b.drawImage(a.texture.baseTexture.source, 0, 0),
          b.restore();
      }
    }),
    (c.PixiShader = function () {
      this.program,
        (this.fragmentSrc = [
          "precision lowp float;",
          "varying vec2 vTextureCoord;",
          "varying float vColor;",
          "uniform sampler2D uSampler;",
          "void main(void) {",
          "gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor;",
          "}",
        ]),
        (this.textureCount = 0);
    }),
    (c.PixiShader.prototype.init = function () {
      var a = c.compileProgram(
          this.vertexSrc || c.PixiShader.defaultVertexSrc,
          this.fragmentSrc
        ),
        b = c.gl;
      b.useProgram(a),
        (this.uSampler = b.getUniformLocation(a, "uSampler")),
        (this.projectionVector = b.getUniformLocation(a, "projectionVector")),
        (this.offsetVector = b.getUniformLocation(a, "offsetVector")),
        (this.dimensions = b.getUniformLocation(a, "dimensions")),
        (this.aVertexPosition = b.getAttribLocation(a, "aVertexPosition")),
        (this.colorAttribute = b.getAttribLocation(a, "aColor")),
        (this.aTextureCoord = b.getAttribLocation(a, "aTextureCoord"));
      for (var d in this.uniforms)
        this.uniforms[d].uniformLocation = b.getUniformLocation(a, d);
      this.initUniforms(), (this.program = a);
    }),
    (c.PixiShader.prototype.initUniforms = function () {
      this.textureCount = 1;
      var a;
      for (var b in this.uniforms) {
        var a = this.uniforms[b],
          d = a.type;
        "sampler2D" == d
          ? ((a._init = !1), null !== a.value && this.initSampler2D(a))
          : "mat2" == d || "mat3" == d || "mat4" == d
          ? ((a.glMatrix = !0),
            (a.glValueLength = 1),
            "mat2" == d
              ? (a.glFunc = c.gl.uniformMatrix2fv)
              : "mat3" == d
              ? (a.glFunc = c.gl.uniformMatrix3fv)
              : "mat4" == d && (a.glFunc = c.gl.uniformMatrix4fv))
          : ((a.glFunc = c.gl["uniform" + d]),
            (a.glValueLength =
              "2f" == d || "2i" == d
                ? 2
                : "3f" == d || "3i" == d
                ? 3
                : "4f" == d || "4i" == d
                ? 4
                : 1));
      }
    }),
    (c.PixiShader.prototype.initSampler2D = function (a) {
      if (a.value && a.value.baseTexture && a.value.baseTexture.hasLoaded) {
        if (
          (c.gl.activeTexture(c.gl["TEXTURE" + this.textureCount]),
          c.gl.bindTexture(c.gl.TEXTURE_2D, a.value.baseTexture._glTexture),
          a.textureData)
        ) {
          var b = a.textureData,
            d = b.magFilter ? b.magFilter : c.gl.LINEAR,
            e = b.minFilter ? b.minFilter : c.gl.LINEAR,
            f = b.wrapS ? b.wrapS : c.gl.CLAMP_TO_EDGE,
            g = b.wrapT ? b.wrapT : c.gl.CLAMP_TO_EDGE,
            h = b.luminance ? c.gl.LUMINANCE : c.gl.RGBA;
          if (
            (b.repeat && ((f = c.gl.REPEAT), (g = c.gl.REPEAT)),
            c.gl.pixelStorei(c.gl.UNPACK_FLIP_Y_WEBGL, !1),
            b.width)
          ) {
            var i = b.width ? b.width : 512,
              j = b.height ? b.height : 2,
              k = b.border ? b.border : 0;
            c.gl.texImage2D(
              c.gl.TEXTURE_2D,
              0,
              h,
              i,
              j,
              k,
              h,
              c.gl.UNSIGNED_BYTE,
              null
            );
          } else
            c.gl.texImage2D(
              c.gl.TEXTURE_2D,
              0,
              h,
              c.gl.RGBA,
              c.gl.UNSIGNED_BYTE,
              a.value.baseTexture.source
            );
          c.gl.texParameteri(c.gl.TEXTURE_2D, c.gl.TEXTURE_MAG_FILTER, d),
            c.gl.texParameteri(c.gl.TEXTURE_2D, c.gl.TEXTURE_MIN_FILTER, e),
            c.gl.texParameteri(c.gl.TEXTURE_2D, c.gl.TEXTURE_WRAP_S, f),
            c.gl.texParameteri(c.gl.TEXTURE_2D, c.gl.TEXTURE_WRAP_T, g);
        }
        c.gl.uniform1i(a.uniformLocation, this.textureCount),
          (a._init = !0),
          this.textureCount++;
      }
    }),
    (c.PixiShader.prototype.syncUniforms = function () {
      this.textureCount = 1;
      var a;
      for (var b in this.uniforms)
        (a = this.uniforms[b]),
          1 == a.glValueLength
            ? a.glMatrix === !0
              ? a.glFunc.call(c.gl, a.uniformLocation, a.transpose, a.value)
              : a.glFunc.call(c.gl, a.uniformLocation, a.value)
            : 2 == a.glValueLength
            ? a.glFunc.call(c.gl, a.uniformLocation, a.value.x, a.value.y)
            : 3 == a.glValueLength
            ? a.glFunc.call(
                c.gl,
                a.uniformLocation,
                a.value.x,
                a.value.y,
                a.value.z
              )
            : 4 == a.glValueLength
            ? a.glFunc.call(
                c.gl,
                a.uniformLocation,
                a.value.x,
                a.value.y,
                a.value.z,
                a.value.w
              )
            : "sampler2D" == a.type &&
              (a._init
                ? (c.gl.activeTexture(c.gl["TEXTURE" + this.textureCount]),
                  c.gl.bindTexture(
                    c.gl.TEXTURE_2D,
                    a.value.baseTexture._glTexture
                  ),
                  c.gl.uniform1i(a.uniformLocation, this.textureCount),
                  this.textureCount++)
                : this.initSampler2D(a));
    }),
    (c.PixiShader.defaultVertexSrc = [
      "attribute vec2 aVertexPosition;",
      "attribute vec2 aTextureCoord;",
      "attribute float aColor;",
      "uniform vec2 projectionVector;",
      "uniform vec2 offsetVector;",
      "varying vec2 vTextureCoord;",
      "varying float vColor;",
      "const vec2 center = vec2(-1.0, 1.0);",
      "void main(void) {",
      "gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);",
      "vTextureCoord = aTextureCoord;",
      "vColor = aColor;",
      "}",
    ]),
    (c.PrimitiveShader = function () {
      this.program,
        (this.fragmentSrc = [
          "precision mediump float;",
          "varying vec4 vColor;",
          "void main(void) {",
          "gl_FragColor = vColor;",
          "}",
        ]),
        (this.vertexSrc = [
          "attribute vec2 aVertexPosition;",
          "attribute vec4 aColor;",
          "uniform mat3 translationMatrix;",
          "uniform vec2 projectionVector;",
          "uniform vec2 offsetVector;",
          "uniform float alpha;",
          "varying vec4 vColor;",
          "void main(void) {",
          "vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);",
          "v -= offsetVector.xyx;",
          "gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);",
          "vColor = aColor  * alpha;",
          "}",
        ]);
    }),
    (c.PrimitiveShader.prototype.init = function () {
      var a = c.compileProgram(this.vertexSrc, this.fragmentSrc),
        b = c.gl;
      b.useProgram(a),
        (this.projectionVector = b.getUniformLocation(a, "projectionVector")),
        (this.offsetVector = b.getUniformLocation(a, "offsetVector")),
        (this.aVertexPosition = b.getAttribLocation(a, "aVertexPosition")),
        (this.colorAttribute = b.getAttribLocation(a, "aColor")),
        (this.translationMatrix = b.getUniformLocation(a, "translationMatrix")),
        (this.alpha = b.getUniformLocation(a, "alpha")),
        (this.program = a);
    }),
    (c.StripShader = function () {
      this.program,
        (this.fragmentSrc = [
          "precision mediump float;",
          "varying vec2 vTextureCoord;",
          "varying float vColor;",
          "uniform float alpha;",
          "uniform sampler2D uSampler;",
          "void main(void) {",
          "gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));",
          "gl_FragColor = gl_FragColor * alpha;",
          "}",
        ]),
        (this.vertexSrc = [
          "attribute vec2 aVertexPosition;",
          "attribute vec2 aTextureCoord;",
          "attribute float aColor;",
          "uniform mat3 translationMatrix;",
          "uniform vec2 projectionVector;",
          "varying vec2 vTextureCoord;",
          "varying vec2 offsetVector;",
          "varying float vColor;",
          "void main(void) {",
          "vec3 v = translationMatrix * vec3(aVertexPosition, 1.0);",
          "v -= offsetVector.xyx;",
          "gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / projectionVector.y + 1.0 , 0.0, 1.0);",
          "vTextureCoord = aTextureCoord;",
          "vColor = aColor;",
          "}",
        ]);
    }),
    (c.StripShader.prototype.init = function () {
      var a = c.compileProgram(this.vertexSrc, this.fragmentSrc),
        b = c.gl;
      b.useProgram(a),
        (this.uSampler = b.getUniformLocation(a, "uSampler")),
        (this.projectionVector = b.getUniformLocation(a, "projectionVector")),
        (this.offsetVector = b.getUniformLocation(a, "offsetVector")),
        (this.colorAttribute = b.getAttribLocation(a, "aColor")),
        (this.aVertexPosition = b.getAttribLocation(a, "aVertexPosition")),
        (this.aTextureCoord = b.getAttribLocation(a, "aTextureCoord")),
        (this.translationMatrix = b.getUniformLocation(a, "translationMatrix")),
        (this.alpha = b.getUniformLocation(a, "alpha")),
        (this.program = a);
    }),
    (c._batchs = []),
    (c._getBatch = function (a) {
      return 0 === c._batchs.length ? new c.WebGLBatch(a) : c._batchs.pop();
    }),
    (c._returnBatch = function (a) {
      a.clean(), c._batchs.push(a);
    }),
    (c._restoreBatchs = function (a) {
      for (var b = 0; b < c._batchs.length; b++)
        c._batchs[b].restoreLostContext(a);
    }),
    (c.WebGLBatch = function (a) {
      (this.gl = a),
        (this.size = 0),
        (this.vertexBuffer = a.createBuffer()),
        (this.indexBuffer = a.createBuffer()),
        (this.uvBuffer = a.createBuffer()),
        (this.colorBuffer = a.createBuffer()),
        (this.blendMode = c.blendModes.NORMAL),
        (this.dynamicSize = 1);
    }),
    (c.WebGLBatch.prototype.constructor = c.WebGLBatch),
    (c.WebGLBatch.prototype.clean = function () {
      (this.verticies = []),
        (this.uvs = []),
        (this.indices = []),
        (this.colors = []),
        (this.dynamicSize = 1),
        (this.texture = null),
        (this.last = null),
        (this.size = 0),
        this.head,
        this.tail;
    }),
    (c.WebGLBatch.prototype.restoreLostContext = function (a) {
      (this.gl = a),
        (this.vertexBuffer = a.createBuffer()),
        (this.indexBuffer = a.createBuffer()),
        (this.uvBuffer = a.createBuffer()),
        (this.colorBuffer = a.createBuffer());
    }),
    (c.WebGLBatch.prototype.init = function (a) {
      (a.batch = this),
        (this.dirty = !0),
        (this.blendMode = a.blendMode),
        (this.texture = a.texture.baseTexture),
        (this.head = a),
        (this.tail = a),
        (this.size = 1),
        this.growBatch();
    }),
    (c.WebGLBatch.prototype.insertBefore = function (a, b) {
      this.size++, (a.batch = this), (this.dirty = !0);
      var c = b.__prev;
      (b.__prev = a),
        (a.__next = b),
        c ? ((a.__prev = c), (c.__next = a)) : (this.head = a);
    }),
    (c.WebGLBatch.prototype.insertAfter = function (a, b) {
      this.size++, (a.batch = this), (this.dirty = !0);
      var c = b.__next;
      (b.__next = a),
        (a.__prev = b),
        c ? ((a.__next = c), (c.__prev = a)) : (this.tail = a);
    }),
    (c.WebGLBatch.prototype.remove = function (a) {
      return (
        this.size--,
        0 === this.size
          ? ((a.batch = null), (a.__prev = null), (a.__next = null), void 0)
          : (a.__prev
              ? (a.__prev.__next = a.__next)
              : ((this.head = a.__next), (this.head.__prev = null)),
            a.__next
              ? (a.__next.__prev = a.__prev)
              : ((this.tail = a.__prev), (this.tail.__next = null)),
            (a.batch = null),
            (a.__next = null),
            (a.__prev = null),
            (this.dirty = !0),
            void 0)
      );
    }),
    (c.WebGLBatch.prototype.split = function (a) {
      this.dirty = !0;
      var b = new c.WebGLBatch(this.gl);
      b.init(a),
        (b.texture = this.texture),
        (b.tail = this.tail),
        (this.tail = a.__prev),
        (this.tail.__next = null),
        (a.__prev = null);
      for (var d = 0; a; ) d++, (a.batch = b), (a = a.__next);
      return (b.size = d), (this.size -= d), b;
    }),
    (c.WebGLBatch.prototype.merge = function (a) {
      (this.dirty = !0),
        (this.tail.__next = a.head),
        (a.head.__prev = this.tail),
        (this.size += a.size),
        (this.tail = a.tail);
      for (var b = a.head; b; ) (b.batch = this), (b = b.__next);
    }),
    (c.WebGLBatch.prototype.growBatch = function () {
      var a = this.gl;
      (this.dynamicSize = 1 == this.size ? 1 : 1.5 * this.size),
        (this.verticies = new Float32Array(8 * this.dynamicSize)),
        a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer),
        a.bufferData(a.ARRAY_BUFFER, this.verticies, a.DYNAMIC_DRAW),
        (this.uvs = new Float32Array(8 * this.dynamicSize)),
        a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer),
        a.bufferData(a.ARRAY_BUFFER, this.uvs, a.DYNAMIC_DRAW),
        (this.dirtyUVS = !0),
        (this.colors = new Float32Array(4 * this.dynamicSize)),
        a.bindBuffer(a.ARRAY_BUFFER, this.colorBuffer),
        a.bufferData(a.ARRAY_BUFFER, this.colors, a.DYNAMIC_DRAW),
        (this.dirtyColors = !0),
        (this.indices = new Uint16Array(6 * this.dynamicSize));
      for (var b = this.indices.length / 6, c = 0; b > c; c++) {
        var d = 6 * c,
          e = 4 * c;
        (this.indices[d + 0] = e + 0),
          (this.indices[d + 1] = e + 1),
          (this.indices[d + 2] = e + 2),
          (this.indices[d + 3] = e + 0),
          (this.indices[d + 4] = e + 2),
          (this.indices[d + 5] = e + 3);
      }
      a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
        a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW);
    }),
    (c.WebGLBatch.prototype.refresh = function () {
      this.gl, this.dynamicSize < this.size && this.growBatch();
      for (var a, b = 0, c = this.head; c; ) {
        a = 8 * b;
        var d = c.texture,
          e = d.frame,
          f = d.baseTexture.width,
          g = d.baseTexture.height;
        (this.uvs[a + 0] = e.x / f),
          (this.uvs[a + 1] = e.y / g),
          (this.uvs[a + 2] = (e.x + e.width) / f),
          (this.uvs[a + 3] = e.y / g),
          (this.uvs[a + 4] = (e.x + e.width) / f),
          (this.uvs[a + 5] = (e.y + e.height) / g),
          (this.uvs[a + 6] = e.x / f),
          (this.uvs[a + 7] = (e.y + e.height) / g),
          (c.updateFrame = !1),
          (colorIndex = 4 * b),
          (this.colors[colorIndex] =
            this.colors[colorIndex + 1] =
            this.colors[colorIndex + 2] =
            this.colors[colorIndex + 3] =
              c.worldAlpha),
          (c = c.__next),
          b++;
      }
      (this.dirtyUVS = !0), (this.dirtyColors = !0);
    }),
    (c.WebGLBatch.prototype.update = function () {
      this.gl;
      for (
        var a,
          b,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r = 0,
          s = this.head,
          t = this.verticies,
          u = this.uvs,
          v = this.colors;
        s;

      ) {
        if (s.vcount === c.visibleCount) {
          if (
            ((b = s.texture.frame.width),
            (d = s.texture.frame.height),
            (e = s.anchor.x),
            (f = s.anchor.y),
            (g = b * (1 - e)),
            (h = b * -e),
            (i = d * (1 - f)),
            (j = d * -f),
            (k = 8 * r),
            (a = s.worldTransform),
            (l = a[0]),
            (m = a[3]),
            (n = a[1]),
            (o = a[4]),
            (p = a[2]),
            (q = a[5]),
            (t[k + 0] = l * h + n * j + p),
            (t[k + 1] = o * j + m * h + q),
            (t[k + 2] = l * g + n * j + p),
            (t[k + 3] = o * j + m * g + q),
            (t[k + 4] = l * g + n * i + p),
            (t[k + 5] = o * i + m * g + q),
            (t[k + 6] = l * h + n * i + p),
            (t[k + 7] = o * i + m * h + q),
            s.updateFrame || s.texture.updateFrame)
          ) {
            this.dirtyUVS = !0;
            var w = s.texture,
              x = w.frame,
              y = w.baseTexture.width,
              z = w.baseTexture.height;
            (u[k + 0] = x.x / y),
              (u[k + 1] = x.y / z),
              (u[k + 2] = (x.x + x.width) / y),
              (u[k + 3] = x.y / z),
              (u[k + 4] = (x.x + x.width) / y),
              (u[k + 5] = (x.y + x.height) / z),
              (u[k + 6] = x.x / y),
              (u[k + 7] = (x.y + x.height) / z),
              (s.updateFrame = !1);
          }
          if (s.cacheAlpha != s.worldAlpha) {
            s.cacheAlpha = s.worldAlpha;
            var A = 4 * r;
            (v[A] = v[A + 1] = v[A + 2] = v[A + 3] = s.worldAlpha),
              (this.dirtyColors = !0);
          }
        } else
          (k = 8 * r),
            (t[k + 0] =
              t[k + 1] =
              t[k + 2] =
              t[k + 3] =
              t[k + 4] =
              t[k + 5] =
              t[k + 6] =
              t[k + 7] =
                0);
        r++, (s = s.__next);
      }
    }),
    (c.WebGLBatch.prototype.render = function (a, b) {
      if (
        ((a = a || 0),
        void 0 == b && (b = this.size),
        this.dirty && (this.refresh(), (this.dirty = !1)),
        0 !== this.size)
      ) {
        this.update();
        var d = this.gl,
          e = c.defaultShader;
        d.bindBuffer(d.ARRAY_BUFFER, this.vertexBuffer),
          d.bufferSubData(d.ARRAY_BUFFER, 0, this.verticies),
          d.vertexAttribPointer(e.aVertexPosition, 2, d.FLOAT, !1, 0, 0),
          d.bindBuffer(d.ARRAY_BUFFER, this.uvBuffer),
          this.dirtyUVS &&
            ((this.dirtyUVS = !1),
            d.bufferSubData(d.ARRAY_BUFFER, 0, this.uvs)),
          d.vertexAttribPointer(e.aTextureCoord, 2, d.FLOAT, !1, 0, 0),
          d.activeTexture(d.TEXTURE0),
          d.bindTexture(d.TEXTURE_2D, this.texture._glTexture),
          d.bindBuffer(d.ARRAY_BUFFER, this.colorBuffer),
          this.dirtyColors &&
            ((this.dirtyColors = !1),
            d.bufferSubData(d.ARRAY_BUFFER, 0, this.colors)),
          d.vertexAttribPointer(e.colorAttribute, 1, d.FLOAT, !1, 0, 0),
          d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        var f = b - a;
        d.drawElements(d.TRIANGLES, 6 * f, d.UNSIGNED_SHORT, 6 * 2 * a);
      }
    }),
    (c.WebGLFilterManager = function (a) {
      (this.transparent = a),
        (this.filterStack = []),
        (this.texturePool = []),
        (this.offsetX = 0),
        (this.offsetY = 0),
        this.initShaderBuffers();
    }),
    (c.WebGLFilterManager.prototype.begin = function (a, b) {
      (this.width = 2 * a.x), (this.height = 2 * -a.y), (this.buffer = b);
    }),
    (c.WebGLFilterManager.prototype.pushFilter = function (a) {
      var b = c.gl;
      this.filterStack.push(a);
      var d = a.filterPasses[0];
      (this.offsetX += a.target.filterArea.x),
        (this.offsetY += a.target.filterArea.y);
      var e = this.texturePool.pop();
      e || (e = new c.FilterTexture(this.width, this.height)),
        b.bindTexture(b.TEXTURE_2D, e.texture),
        this.getBounds(a.target);
      var f = a.target.filterArea,
        g = d.padding;
      (f.x -= g),
        (f.y -= g),
        (f.width += 2 * g),
        (f.height += 2 * g),
        f.x < 0 && (f.x = 0),
        f.width > this.width && (f.width = this.width),
        f.y < 0 && (f.y = 0),
        f.height > this.height && (f.height = this.height),
        b.bindFramebuffer(b.FRAMEBUFFER, e.frameBuffer),
        b.viewport(0, 0, f.width, f.height),
        (c.projection.x = f.width / 2),
        (c.projection.y = -f.height / 2),
        (c.offset.x = -f.x),
        (c.offset.y = -f.y),
        b.uniform2f(
          c.defaultShader.projectionVector,
          f.width / 2,
          -f.height / 2
        ),
        b.uniform2f(c.defaultShader.offsetVector, -f.x, -f.y),
        b.colorMask(!0, !0, !0, !0),
        b.clearColor(0, 0, 0, 0),
        b.clear(b.COLOR_BUFFER_BIT),
        (a._glFilterTexture = e);
    }),
    (c.WebGLFilterManager.prototype.popFilter = function () {
      var a = c.gl,
        b = this.filterStack.pop(),
        d = b.target.filterArea,
        e = b._glFilterTexture;
      if (b.filterPasses.length > 1) {
        a.viewport(0, 0, d.width, d.height),
          a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer),
          (this.vertexArray[0] = 0),
          (this.vertexArray[1] = d.height),
          (this.vertexArray[2] = d.width),
          (this.vertexArray[3] = d.height),
          (this.vertexArray[4] = 0),
          (this.vertexArray[5] = 0),
          (this.vertexArray[6] = d.width),
          (this.vertexArray[7] = 0),
          a.bufferSubData(a.ARRAY_BUFFER, 0, this.vertexArray),
          a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer),
          (this.uvArray[2] = d.width / this.width),
          (this.uvArray[5] = d.height / this.height),
          (this.uvArray[6] = d.width / this.width),
          (this.uvArray[7] = d.height / this.height),
          a.bufferSubData(a.ARRAY_BUFFER, 0, this.uvArray);
        var f = e,
          g = this.texturePool.pop();
        g || (g = new c.FilterTexture(this.width, this.height)),
          a.bindFramebuffer(a.FRAMEBUFFER, g.frameBuffer),
          a.clear(a.COLOR_BUFFER_BIT),
          a.disable(a.BLEND);
        for (var h = 0; h < b.filterPasses.length - 1; h++) {
          var i = b.filterPasses[h];
          a.bindFramebuffer(a.FRAMEBUFFER, g.frameBuffer),
            a.activeTexture(a.TEXTURE0),
            a.bindTexture(a.TEXTURE_2D, f.texture),
            this.applyFilterPass(i, d, d.width, d.height);
          var j = f;
          (f = g), (g = j);
        }
        a.enable(a.BLEND), (e = f), this.texturePool.push(g);
      }
      var k = b.filterPasses[b.filterPasses.length - 1];
      (this.offsetX -= d.x), (this.offsetY -= d.y);
      var l = this.width,
        m = this.height,
        n = 0,
        o = 0,
        p = this.buffer;
      if (0 === this.filterStack.length)
        a.colorMask(!0, !0, !0, this.transparent);
      else {
        var q = this.filterStack[this.filterStack.length - 1],
          d = q.target.filterArea;
        (l = d.width),
          (m = d.height),
          (n = d.x),
          (o = d.y),
          (p = q._glFilterTexture.frameBuffer);
      }
      (c.projection.x = l / 2),
        (c.projection.y = -m / 2),
        (c.offset.x = n),
        (c.offset.y = o);
      var d = b.target.filterArea,
        r = d.x - n,
        s = d.y - o;
      a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer),
        (this.vertexArray[0] = r),
        (this.vertexArray[1] = s + d.height),
        (this.vertexArray[2] = r + d.width),
        (this.vertexArray[3] = s + d.height),
        (this.vertexArray[4] = r),
        (this.vertexArray[5] = s),
        (this.vertexArray[6] = r + d.width),
        (this.vertexArray[7] = s),
        a.bufferSubData(a.ARRAY_BUFFER, 0, this.vertexArray),
        a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer),
        (this.uvArray[2] = d.width / this.width),
        (this.uvArray[5] = d.height / this.height),
        (this.uvArray[6] = d.width / this.width),
        (this.uvArray[7] = d.height / this.height),
        a.bufferSubData(a.ARRAY_BUFFER, 0, this.uvArray),
        a.viewport(0, 0, l, m),
        a.bindFramebuffer(a.FRAMEBUFFER, p),
        a.activeTexture(a.TEXTURE0),
        a.bindTexture(a.TEXTURE_2D, e.texture),
        this.applyFilterPass(k, d, l, m),
        a.useProgram(c.defaultShader.program),
        a.uniform2f(c.defaultShader.projectionVector, l / 2, -m / 2),
        a.uniform2f(c.defaultShader.offsetVector, -n, -o),
        this.texturePool.push(e),
        (b._glFilterTexture = null);
    }),
    (c.WebGLFilterManager.prototype.applyFilterPass = function (a, b, d, e) {
      var f = c.gl;
      if (!a.shader) {
        var g = new c.PixiShader();
        (g.fragmentSrc = a.fragmentSrc),
          (g.uniforms = a.uniforms),
          g.init(),
          (a.shader = g);
      }
      var g = a.shader;
      f.useProgram(g.program),
        f.uniform2f(g.projectionVector, d / 2, -e / 2),
        f.uniform2f(g.offsetVector, 0, 0),
        a.uniforms.dimensions &&
          ((a.uniforms.dimensions.value[0] = this.width),
          (a.uniforms.dimensions.value[1] = this.height),
          (a.uniforms.dimensions.value[2] = this.vertexArray[0]),
          (a.uniforms.dimensions.value[3] = this.vertexArray[5])),
        g.syncUniforms(),
        f.bindBuffer(f.ARRAY_BUFFER, this.vertexBuffer),
        f.vertexAttribPointer(g.aVertexPosition, 2, f.FLOAT, !1, 0, 0),
        f.bindBuffer(f.ARRAY_BUFFER, this.uvBuffer),
        f.vertexAttribPointer(g.aTextureCoord, 2, f.FLOAT, !1, 0, 0),
        f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
        f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0);
    }),
    (c.WebGLFilterManager.prototype.initShaderBuffers = function () {
      var a = c.gl;
      (this.vertexBuffer = a.createBuffer()),
        (this.uvBuffer = a.createBuffer()),
        (this.indexBuffer = a.createBuffer()),
        (this.vertexArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1])),
        a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer),
        a.bufferData(a.ARRAY_BUFFER, this.vertexArray, a.STATIC_DRAW),
        (this.uvArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1])),
        a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer),
        a.bufferData(a.ARRAY_BUFFER, this.uvArray, a.STATIC_DRAW),
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
        a.bufferData(
          a.ELEMENT_ARRAY_BUFFER,
          new Uint16Array([0, 1, 2, 1, 3, 2]),
          a.STATIC_DRAW
        );
    }),
    (c.WebGLFilterManager.prototype.getBounds = function (a) {
      var b,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A = a.first,
        B = a.last._iNext,
        C = -1 / 0,
        D = -1 / 0,
        E = 1 / 0,
        F = 1 / 0;
      do {
        if (A.visible)
          if (A instanceof c.Sprite)
            (d = A.texture.frame.width),
              (e = A.texture.frame.height),
              (f = A.anchor.x),
              (g = A.anchor.y),
              (h = d * (1 - f)),
              (i = d * -f),
              (j = e * (1 - g)),
              (k = e * -g),
              (l = !0);
          else if (A instanceof c.Graphics) {
            A.updateFilterBounds();
            var G = A.bounds;
            (d = G.width),
              (e = G.height),
              (h = G.x),
              (i = G.x + G.width),
              (j = G.y),
              (k = G.y + G.height),
              (l = !0);
          }
        l &&
          ((b = A.worldTransform),
          (m = b[0]),
          (n = b[3]),
          (o = b[1]),
          (p = b[4]),
          (q = b[2]),
          (r = b[5]),
          (s = m * i + o * k + q),
          (w = p * k + n * i + r),
          (t = m * h + o * k + q),
          (x = p * k + n * h + r),
          (u = m * h + o * j + q),
          (y = p * j + n * h + r),
          (v = m * i + o * j + q),
          (z = p * j + n * i + r),
          (E = E > s ? s : E),
          (E = E > t ? t : E),
          (E = E > u ? u : E),
          (E = E > v ? v : E),
          (F = F > w ? w : F),
          (F = F > x ? x : F),
          (F = F > y ? y : F),
          (F = F > z ? z : F),
          (C = s > C ? s : C),
          (C = t > C ? t : C),
          (C = u > C ? u : C),
          (C = v > C ? v : C),
          (D = w > D ? w : D),
          (D = x > D ? x : D),
          (D = y > D ? y : D),
          (D = z > D ? z : D)),
          (l = !1),
          (A = A._iNext);
      } while (A != B);
      (a.filterArea.x = E),
        (a.filterArea.y = F),
        (a.filterArea.width = C - E),
        (a.filterArea.height = D - F);
    }),
    (c.FilterTexture = function (a, b) {
      var d = c.gl;
      (this.frameBuffer = d.createFramebuffer()),
        (this.texture = d.createTexture()),
        d.bindTexture(d.TEXTURE_2D, this.texture),
        d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.LINEAR),
        d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.LINEAR),
        d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE),
        d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE),
        d.bindFramebuffer(d.FRAMEBUFFER, this.framebuffer),
        d.bindFramebuffer(d.FRAMEBUFFER, this.frameBuffer),
        d.framebufferTexture2D(
          d.FRAMEBUFFER,
          d.COLOR_ATTACHMENT0,
          d.TEXTURE_2D,
          this.texture,
          0
        ),
        this.resize(a, b);
    }),
    (c.FilterTexture.prototype.resize = function (a, b) {
      (this.width = a), (this.height = b);
      var d = c.gl;
      d.bindTexture(d.TEXTURE_2D, this.texture),
        d.texImage2D(
          d.TEXTURE_2D,
          0,
          d.RGBA,
          a,
          b,
          0,
          d.RGBA,
          d.UNSIGNED_BYTE,
          null
        );
    }),
    (c.WebGLGraphics = function () {}),
    (c.WebGLGraphics.renderGraphics = function (a, b) {
      var d = c.gl;
      a._webGL ||
        (a._webGL = {
          points: [],
          indices: [],
          lastIndex: 0,
          buffer: d.createBuffer(),
          indexBuffer: d.createBuffer(),
        }),
        a.dirty &&
          ((a.dirty = !1),
          a.clearDirty &&
            ((a.clearDirty = !1),
            (a._webGL.lastIndex = 0),
            (a._webGL.points = []),
            (a._webGL.indices = [])),
          c.WebGLGraphics.updateGraphics(a)),
        c.activatePrimitiveShader();
      var e = c.mat3.clone(a.worldTransform);
      c.mat3.transpose(e),
        d.blendFunc(d.ONE, d.ONE_MINUS_SRC_ALPHA),
        d.uniformMatrix3fv(c.primitiveShader.translationMatrix, !1, e),
        d.uniform2f(c.primitiveShader.projectionVector, b.x, -b.y),
        d.uniform2f(c.primitiveShader.offsetVector, -c.offset.x, -c.offset.y),
        d.uniform1f(c.primitiveShader.alpha, a.worldAlpha),
        d.bindBuffer(d.ARRAY_BUFFER, a._webGL.buffer),
        d.vertexAttribPointer(
          c.primitiveShader.aVertexPosition,
          2,
          d.FLOAT,
          !1,
          24,
          0
        ),
        d.vertexAttribPointer(
          c.primitiveShader.colorAttribute,
          4,
          d.FLOAT,
          !1,
          24,
          8
        ),
        d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, a._webGL.indexBuffer),
        d.drawElements(
          d.TRIANGLE_STRIP,
          a._webGL.indices.length,
          d.UNSIGNED_SHORT,
          0
        ),
        c.deactivatePrimitiveShader();
    }),
    (c.WebGLGraphics.updateGraphics = function (a) {
      for (var b = a._webGL.lastIndex; b < a.graphicsData.length; b++) {
        var d = a.graphicsData[b];
        d.type == c.Graphics.POLY
          ? (d.fill &&
              d.points.length > 3 &&
              c.WebGLGraphics.buildPoly(d, a._webGL),
            d.lineWidth > 0 && c.WebGLGraphics.buildLine(d, a._webGL))
          : d.type == c.Graphics.RECT
          ? c.WebGLGraphics.buildRectangle(d, a._webGL)
          : (d.type == c.Graphics.CIRC || d.type == c.Graphics.ELIP) &&
            c.WebGLGraphics.buildCircle(d, a._webGL);
      }
      a._webGL.lastIndex = a.graphicsData.length;
      var e = c.gl;
      (a._webGL.glPoints = new Float32Array(a._webGL.points)),
        e.bindBuffer(e.ARRAY_BUFFER, a._webGL.buffer),
        e.bufferData(e.ARRAY_BUFFER, a._webGL.glPoints, e.STATIC_DRAW),
        (a._webGL.glIndicies = new Uint16Array(a._webGL.indices)),
        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, a._webGL.indexBuffer),
        e.bufferData(
          e.ELEMENT_ARRAY_BUFFER,
          a._webGL.glIndicies,
          e.STATIC_DRAW
        );
    }),
    (c.WebGLGraphics.buildRectangle = function (b, d) {
      var e = b.points,
        f = e[0],
        g = e[1],
        h = e[2],
        i = e[3];
      if (b.fill) {
        var j = a(b.fillColor),
          k = b.fillAlpha,
          l = j[0] * k,
          m = j[1] * k,
          n = j[2] * k,
          o = d.points,
          p = d.indices,
          q = o.length / 6;
        o.push(f, g),
          o.push(l, m, n, k),
          o.push(f + h, g),
          o.push(l, m, n, k),
          o.push(f, g + i),
          o.push(l, m, n, k),
          o.push(f + h, g + i),
          o.push(l, m, n, k),
          p.push(q, q, q + 1, q + 2, q + 3, q + 3);
      }
      b.lineWidth &&
        ((b.points = [f, g, f + h, g, f + h, g + i, f, g + i, f, g]),
        c.WebGLGraphics.buildLine(b, d));
    }),
    (c.WebGLGraphics.buildCircle = function (b, d) {
      var e = b.points,
        f = e[0],
        g = e[1],
        h = e[2],
        i = e[3],
        j = 40,
        k = (2 * Math.PI) / j;
      if (b.fill) {
        var l = a(b.fillColor),
          m = b.fillAlpha,
          n = l[0] * m,
          o = l[1] * m,
          p = l[2] * m,
          q = d.points,
          r = d.indices,
          s = q.length / 6;
        r.push(s);
        for (var t = 0; j + 1 > t; t++)
          q.push(f, g, n, o, p, m),
            q.push(
              f + Math.sin(k * t) * h,
              g + Math.cos(k * t) * i,
              n,
              o,
              p,
              m
            ),
            r.push(s++, s++);
        r.push(s - 1);
      }
      if (b.lineWidth) {
        b.points = [];
        for (var t = 0; j + 1 > t; t++)
          b.points.push(f + Math.sin(k * t) * h, g + Math.cos(k * t) * i);
        c.WebGLGraphics.buildLine(b, d);
      }
    }),
    (c.WebGLGraphics.buildLine = function (b, d) {
      var e = b.points;
      if (0 !== e.length) {
        if (b.lineWidth % 2) for (var f = 0; f < e.length; f++) e[f] += 0.5;
        var g = new c.Point(e[0], e[1]),
          h = new c.Point(e[e.length - 2], e[e.length - 1]);
        if (g.x == h.x && g.y == h.y) {
          e.pop(), e.pop(), (h = new c.Point(e[e.length - 2], e[e.length - 1]));
          var i = h.x + 0.5 * (g.x - h.x),
            j = h.y + 0.5 * (g.y - h.y);
          e.unshift(i, j), e.push(i, j);
        }
        var k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z,
          A,
          B,
          C,
          D,
          E,
          F = d.points,
          G = d.indices,
          H = e.length / 2,
          I = e.length,
          J = F.length / 6,
          K = b.lineWidth / 2,
          L = a(b.lineColor),
          M = b.lineAlpha,
          N = L[0] * M,
          O = L[1] * M,
          P = L[2] * M;
        (k = e[0]),
          (l = e[1]),
          (m = e[2]),
          (n = e[3]),
          (q = -(l - n)),
          (r = k - m),
          (E = Math.sqrt(q * q + r * r)),
          (q /= E),
          (r /= E),
          (q *= K),
          (r *= K),
          F.push(k - q, l - r, N, O, P, M),
          F.push(k + q, l + r, N, O, P, M);
        for (var f = 1; H - 1 > f; f++)
          (k = e[2 * (f - 1)]),
            (l = e[2 * (f - 1) + 1]),
            (m = e[2 * f]),
            (n = e[2 * f + 1]),
            (o = e[2 * (f + 1)]),
            (p = e[2 * (f + 1) + 1]),
            (q = -(l - n)),
            (r = k - m),
            (E = Math.sqrt(q * q + r * r)),
            (q /= E),
            (r /= E),
            (q *= K),
            (r *= K),
            (s = -(n - p)),
            (t = m - o),
            (E = Math.sqrt(s * s + t * t)),
            (s /= E),
            (t /= E),
            (s *= K),
            (t *= K),
            (w = -r + l - (-r + n)),
            (x = -q + m - (-q + k)),
            (y = (-q + k) * (-r + n) - (-q + m) * (-r + l)),
            (z = -t + p - (-t + n)),
            (A = -s + m - (-s + o)),
            (B = (-s + o) * (-t + n) - (-s + m) * (-t + p)),
            (C = w * A - z * x),
            Math.abs(C) < 0.1
              ? ((C += 10.1),
                F.push(m - q, n - r, N, O, P, M),
                F.push(m + q, n + r, N, O, P, M))
              : ((px = (x * B - A * y) / C),
                (py = (z * y - w * B) / C),
                (D = (px - m) * (px - m) + (py - n) + (py - n)),
                D > 19600
                  ? ((u = q - s),
                    (v = r - t),
                    (E = Math.sqrt(u * u + v * v)),
                    (u /= E),
                    (v /= E),
                    (u *= K),
                    (v *= K),
                    F.push(m - u, n - v),
                    F.push(N, O, P, M),
                    F.push(m + u, n + v),
                    F.push(N, O, P, M),
                    F.push(m - u, n - v),
                    F.push(N, O, P, M),
                    I++)
                  : (F.push(px, py),
                    F.push(N, O, P, M),
                    F.push(m - (px - m), n - (py - n)),
                    F.push(N, O, P, M)));
        (k = e[2 * (H - 2)]),
          (l = e[2 * (H - 2) + 1]),
          (m = e[2 * (H - 1)]),
          (n = e[2 * (H - 1) + 1]),
          (q = -(l - n)),
          (r = k - m),
          (E = Math.sqrt(q * q + r * r)),
          (q /= E),
          (r /= E),
          (q *= K),
          (r *= K),
          F.push(m - q, n - r),
          F.push(N, O, P, M),
          F.push(m + q, n + r),
          F.push(N, O, P, M),
          G.push(J);
        for (var f = 0; I > f; f++) G.push(J++);
        G.push(J - 1);
      }
    }),
    (c.WebGLGraphics.buildPoly = function (b, d) {
      var e = b.points;
      if (!(e.length < 6)) {
        for (
          var f = d.points,
            g = d.indices,
            h = e.length / 2,
            i = a(b.fillColor),
            j = b.fillAlpha,
            k = i[0] * j,
            l = i[1] * j,
            m = i[2] * j,
            n = c.PolyK.Triangulate(e),
            o = f.length / 6,
            p = 0;
          p < n.length;
          p += 3
        )
          g.push(n[p] + o),
            g.push(n[p] + o),
            g.push(n[p + 1] + o),
            g.push(n[p + 2] + o),
            g.push(n[p + 2] + o);
        for (var p = 0; h > p; p++) f.push(e[2 * p], e[2 * p + 1], k, l, m, j);
      }
    }),
    (c._defaultFrame = new c.Rectangle(0, 0, 1, 1)),
    c.gl,
    (c.WebGLRenderer = function (a, b, d, e, f) {
      (this.transparent = !!e),
        (this.width = a || 800),
        (this.height = b || 600),
        (this.view = d || document.createElement("canvas")),
        (this.view.width = this.width),
        (this.view.height = this.height);
      var g = this;
      this.view.addEventListener(
        "webglcontextlost",
        function (a) {
          g.handleContextLost(a);
        },
        !1
      ),
        this.view.addEventListener(
          "webglcontextrestored",
          function (a) {
            g.handleContextRestored(a);
          },
          !1
        ),
        (this.batchs = []);
      var h = {
        alpha: this.transparent,
        antialias: !!f,
        premultipliedAlpha: !1,
        stencil: !0,
      };
      try {
        c.gl = this.gl = this.view.getContext("experimental-webgl", h);
      } catch (i) {
        try {
          c.gl = this.gl = this.view.getContext("webgl", h);
        } catch (i) {
          throw new Error(
            " This browser does not support webGL. Try using the canvas renderer" +
              this
          );
        }
      }
      c.initDefaultShaders();
      var j = this.gl;
      j.useProgram(c.defaultShader.program),
        (c.WebGLRenderer.gl = j),
        (this.batch = new c.WebGLBatch(j)),
        j.disable(j.DEPTH_TEST),
        j.disable(j.CULL_FACE),
        j.enable(j.BLEND),
        j.colorMask(!0, !0, !0, this.transparent),
        (c.projection = new c.Point(400, 300)),
        (c.offset = new c.Point(0, 0)),
        this.resize(this.width, this.height),
        (this.contextLost = !1),
        (this.stageRenderGroup = new c.WebGLRenderGroup(
          this.gl,
          this.transparent
        ));
    }),
    (c.WebGLRenderer.prototype.constructor = c.WebGLRenderer),
    (c.WebGLRenderer.getBatch = function () {
      return 0 === c._batchs.length
        ? new c.WebGLBatch(c.WebGLRenderer.gl)
        : c._batchs.pop();
    }),
    (c.WebGLRenderer.returnBatch = function (a) {
      a.clean(), c._batchs.push(a);
    }),
    (c.WebGLRenderer.prototype.render = function (a) {
      if (!this.contextLost) {
        this.__stage !== a &&
          ((this.__stage = a), this.stageRenderGroup.setRenderable(a)),
          c.WebGLRenderer.updateTextures(),
          c.visibleCount++,
          a.updateTransform();
        var b = this.gl;
        if (
          (b.colorMask(!0, !0, !0, this.transparent),
          b.viewport(0, 0, this.width, this.height),
          b.bindFramebuffer(b.FRAMEBUFFER, null),
          b.clearColor(
            a.backgroundColorSplit[0],
            a.backgroundColorSplit[1],
            a.backgroundColorSplit[2],
            !this.transparent
          ),
          b.clear(b.COLOR_BUFFER_BIT),
          (this.stageRenderGroup.backgroundColor = a.backgroundColorSplit),
          (c.projection.x = this.width / 2),
          (c.projection.y = -this.height / 2),
          this.stageRenderGroup.render(c.projection),
          a.interactive &&
            (a._interactiveEventsAdded ||
              ((a._interactiveEventsAdded = !0),
              a.interactionManager.setTarget(this))),
          c.Texture.frameUpdates.length > 0)
        ) {
          for (var d = 0; d < c.Texture.frameUpdates.length; d++)
            c.Texture.frameUpdates[d].updateFrame = !1;
          c.Texture.frameUpdates = [];
        }
      }
    }),
    (c.WebGLRenderer.updateTextures = function () {
      for (var a = 0; a < c.texturesToUpdate.length; a++)
        c.WebGLRenderer.updateTexture(c.texturesToUpdate[a]);
      for (var a = 0; a < c.texturesToDestroy.length; a++)
        c.WebGLRenderer.destroyTexture(c.texturesToDestroy[a]);
      (c.texturesToUpdate = []), (c.texturesToDestroy = []);
    }),
    (c.WebGLRenderer.updateTexture = function (a) {
      var b = c.gl;
      a._glTexture || (a._glTexture = b.createTexture()),
        a.hasLoaded &&
          (b.bindTexture(b.TEXTURE_2D, a._glTexture),
          b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
          b.texImage2D(
            b.TEXTURE_2D,
            0,
            b.RGBA,
            b.RGBA,
            b.UNSIGNED_BYTE,
            a.source
          ),
          b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR),
          b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR),
          a._powerOf2
            ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.REPEAT),
              b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.REPEAT))
            : (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE),
              b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE)),
          b.bindTexture(b.TEXTURE_2D, null));
    }),
    (c.WebGLRenderer.destroyTexture = function (a) {
      var b = c.gl;
      a._glTexture &&
        ((a._glTexture = b.createTexture()),
        b.deleteTexture(b.TEXTURE_2D, a._glTexture));
    }),
    (c.WebGLRenderer.prototype.resize = function (a, b) {
      (this.width = a),
        (this.height = b),
        (this.view.width = a),
        (this.view.height = b),
        this.gl.viewport(0, 0, this.width, this.height),
        (c.projection.x = this.width / 2),
        (c.projection.y = -this.height / 2);
    }),
    (c.WebGLRenderer.prototype.handleContextLost = function (a) {
      a.preventDefault(), (this.contextLost = !0);
    }),
    (c.WebGLRenderer.prototype.handleContextRestored = function () {
      (this.gl = this.view.getContext("experimental-webgl", { alpha: !0 })),
        this.initShaders();
      for (var a in c.TextureCache) {
        var b = c.TextureCache[a].baseTexture;
        (b._glTexture = null), c.WebGLRenderer.updateTexture(b);
      }
      for (var d = 0; d < this.batchs.length; d++)
        this.batchs[d].restoreLostContext(this.gl), (this.batchs[d].dirty = !0);
      c._restoreBatchs(this.gl), (this.contextLost = !1);
    }),
    (c.WebGLRenderGroup = function (a, b) {
      (this.gl = a),
        this.root,
        this.backgroundColor,
        (this.transparent = void 0 == b ? !0 : b),
        (this.batchs = []),
        (this.toRemove = []),
        (this.filterManager = new c.WebGLFilterManager(this.transparent));
    }),
    (c.WebGLRenderGroup.prototype.constructor = c.WebGLRenderGroup),
    (c.WebGLRenderGroup.prototype.setRenderable = function (a) {
      this.root && this.removeDisplayObjectAndChildren(this.root),
        (a.worldVisible = a.visible),
        (this.root = a),
        this.addDisplayObjectAndChildren(a);
    }),
    (c.WebGLRenderGroup.prototype.render = function (a, b) {
      c.WebGLRenderer.updateTextures();
      var d = this.gl;
      d.uniform2f(c.defaultShader.projectionVector, a.x, a.y),
        this.filterManager.begin(a, b),
        d.blendFunc(d.ONE, d.ONE_MINUS_SRC_ALPHA);
      for (var e, f = 0; f < this.batchs.length; f++)
        (e = this.batchs[f]),
          e instanceof c.WebGLBatch
            ? this.batchs[f].render()
            : this.renderSpecial(e, a);
    }),
    (c.WebGLRenderGroup.prototype.renderSpecific = function (a, b, d) {
      c.WebGLRenderer.updateTextures();
      var e = this.gl;
      e.uniform2f(c.defaultShader.projectionVector, b.x, b.y),
        this.filterManager.begin(b, d);
      for (
        var f, g, h, i, j = a.first;
        j._iNext && (!j.renderable || !j.__renderGroup);

      )
        j = j._iNext;
      var k = j.batch;
      if (j instanceof c.Sprite) {
        k = j.batch;
        var l = k.head;
        if (l == j) f = 0;
        else for (f = 1; l.__next != j; ) f++, (l = l.__next);
      } else k = j;
      for (var m = a.last; m._iPrev && (!m.renderable || !m.__renderGroup); )
        m = m._iNext;
      if (m instanceof c.Sprite) {
        endBatch = m.batch;
        var l = endBatch.head;
        if (l == m) h = 0;
        else for (h = 1; l.__next != m; ) h++, (l = l.__next);
      } else endBatch = m;
      if (k == endBatch)
        return (
          k instanceof c.WebGLBatch
            ? k.render(f, h + 1)
            : this.renderSpecial(k, b),
          void 0
        );
      (g = this.batchs.indexOf(k)),
        (i = this.batchs.indexOf(endBatch)),
        k instanceof c.WebGLBatch ? k.render(f) : this.renderSpecial(k, b);
      for (var n = g + 1; i > n; n++)
        (renderable = this.batchs[n]),
          renderable instanceof c.WebGLBatch
            ? this.batchs[n].render()
            : this.renderSpecial(renderable, b);
      endBatch instanceof c.WebGLBatch
        ? endBatch.render(0, h + 1)
        : this.renderSpecial(endBatch, b);
    }),
    (c.WebGLRenderGroup.prototype.renderSpecial = function (a, b) {
      var d = a.vcount === c.visibleCount;
      a instanceof c.TilingSprite
        ? d && this.renderTilingSprite(a, b)
        : a instanceof c.Strip
        ? d && this.renderStrip(a, b)
        : a instanceof c.CustomRenderable
        ? d && a.renderWebGL(this, b)
        : a instanceof c.Graphics
        ? d && a.renderable && c.WebGLGraphics.renderGraphics(a, b)
        : a instanceof c.FilterBlock && this.handleFilterBlock(a, b);
    }),
    (flip = !1);
  var e = [],
    f = 0;
  return (
    (c.WebGLRenderGroup.prototype.handleFilterBlock = function (a, b) {
      var d = c.gl;
      if (a.open)
        a.data instanceof Array
          ? this.filterManager.pushFilter(a)
          : (f++,
            e.push(a),
            d.enable(d.STENCIL_TEST),
            d.colorMask(!1, !1, !1, !1),
            d.stencilFunc(d.ALWAYS, 1, 1),
            d.stencilOp(d.KEEP, d.KEEP, d.INCR),
            c.WebGLGraphics.renderGraphics(a.data, b),
            d.colorMask(!0, !0, !0, !0),
            d.stencilFunc(d.NOTEQUAL, 0, e.length),
            d.stencilOp(d.KEEP, d.KEEP, d.KEEP));
      else if (a.data instanceof Array) this.filterManager.popFilter();
      else {
        var g = e.pop(a);
        g &&
          (d.colorMask(!1, !1, !1, !1),
          d.stencilFunc(d.ALWAYS, 1, 1),
          d.stencilOp(d.KEEP, d.KEEP, d.DECR),
          c.WebGLGraphics.renderGraphics(g.data, b),
          d.colorMask(!0, !0, !0, !0),
          d.stencilFunc(d.NOTEQUAL, 0, e.length),
          d.stencilOp(d.KEEP, d.KEEP, d.KEEP)),
          d.disable(d.STENCIL_TEST);
      }
    }),
    (c.WebGLRenderGroup.prototype.updateTexture = function (a) {
      this.removeObject(a);
      for (
        var b = a.first;
        b != this.root && ((b = b._iPrev), !b.renderable || !b.__renderGroup);

      );
      for (
        var c = a.last;
        c._iNext && ((c = c._iNext), !c.renderable || !c.__renderGroup);

      );
      this.insertObject(a, b, c);
    }),
    (c.WebGLRenderGroup.prototype.addFilterBlocks = function (a, b) {
      (a.__renderGroup = this), (b.__renderGroup = this);
      for (
        var c = a;
        c != this.root.first &&
        ((c = c._iPrev), !c.renderable || !c.__renderGroup);

      );
      this.insertAfter(a, c);
      for (
        var d = b;
        d != this.root.first &&
        ((d = d._iPrev), !d.renderable || !d.__renderGroup);

      );
      this.insertAfter(b, d);
    }),
    (c.WebGLRenderGroup.prototype.removeFilterBlocks = function (a, b) {
      this.removeObject(a), this.removeObject(b);
    }),
    (c.WebGLRenderGroup.prototype.addDisplayObjectAndChildren = function (a) {
      a.__renderGroup && a.__renderGroup.removeDisplayObjectAndChildren(a);
      for (
        var b = a.first;
        b != this.root.first &&
        ((b = b._iPrev), !b.renderable || !b.__renderGroup);

      );
      for (
        var c = a.last;
        c._iNext && ((c = c._iNext), !c.renderable || !c.__renderGroup);

      );
      var d = a.first,
        e = a.last._iNext;
      do
        (d.__renderGroup = this),
          d.renderable && (this.insertObject(d, b, c), (b = d)),
          (d = d._iNext);
      while (d != e);
    }),
    (c.WebGLRenderGroup.prototype.removeDisplayObjectAndChildren = function (
      a
    ) {
      if (a.__renderGroup == this) {
        a.last;
        do
          (a.__renderGroup = null),
            a.renderable && this.removeObject(a),
            (a = a._iNext);
        while (a);
      }
    }),
    (c.WebGLRenderGroup.prototype.insertObject = function (a, b, d) {
      var e = b,
        f = d;
      if (a instanceof c.Sprite) {
        var g, h;
        if (e instanceof c.Sprite) {
          if (
            ((g = e.batch),
            g &&
              g.texture == a.texture.baseTexture &&
              g.blendMode == a.blendMode)
          )
            return g.insertAfter(a, e), void 0;
        } else g = e;
        if (f)
          if (f instanceof c.Sprite) {
            if ((h = f.batch)) {
              if (
                h.texture == a.texture.baseTexture &&
                h.blendMode == a.blendMode
              )
                return h.insertBefore(a, f), void 0;
              if (h == g) {
                var i = g.split(f),
                  j = c.WebGLRenderer.getBatch(),
                  k = this.batchs.indexOf(g);
                return j.init(a), this.batchs.splice(k + 1, 0, j, i), void 0;
              }
            }
          } else h = f;
        var j = c.WebGLRenderer.getBatch();
        if ((j.init(a), g)) {
          var k = this.batchs.indexOf(g);
          this.batchs.splice(k + 1, 0, j);
        } else this.batchs.push(j);
      } else
        a instanceof c.TilingSprite
          ? this.initTilingSprite(a)
          : a instanceof c.Strip && this.initStrip(a),
          this.insertAfter(a, e);
    }),
    (c.WebGLRenderGroup.prototype.insertAfter = function (a, b) {
      if (b instanceof c.Sprite) {
        var d = b.batch;
        if (d)
          if (d.tail == b) {
            var e = this.batchs.indexOf(d);
            this.batchs.splice(e + 1, 0, a);
          } else {
            var f = d.split(b.__next),
              e = this.batchs.indexOf(d);
            this.batchs.splice(e + 1, 0, a, f);
          }
        else this.batchs.push(a);
      } else {
        var e = this.batchs.indexOf(b);
        this.batchs.splice(e + 1, 0, a);
      }
    }),
    (c.WebGLRenderGroup.prototype.removeObject = function (a) {
      var b;
      if (a instanceof c.Sprite) {
        var d = a.batch;
        if (!d) return;
        d.remove(a), 0 == d.size && (b = d);
      } else b = a;
      if (b) {
        var e = this.batchs.indexOf(b);
        if (-1 == e) return;
        if (0 === e || e == this.batchs.length - 1)
          return (
            this.batchs.splice(e, 1),
            b instanceof c.WebGLBatch && c.WebGLRenderer.returnBatch(b),
            void 0
          );
        if (
          this.batchs[e - 1] instanceof c.WebGLBatch &&
          this.batchs[e + 1] instanceof c.WebGLBatch &&
          this.batchs[e - 1].texture == this.batchs[e + 1].texture &&
          this.batchs[e - 1].blendMode == this.batchs[e + 1].blendMode
        )
          return (
            this.batchs[e - 1].merge(this.batchs[e + 1]),
            b instanceof c.WebGLBatch && c.WebGLRenderer.returnBatch(b),
            c.WebGLRenderer.returnBatch(this.batchs[e + 1]),
            this.batchs.splice(e, 2),
            void 0
          );
        this.batchs.splice(e, 1),
          b instanceof c.WebGLBatch && c.WebGLRenderer.returnBatch(b);
      }
    }),
    (c.WebGLRenderGroup.prototype.initTilingSprite = function (a) {
      var b = this.gl;
      (a.verticies = new Float32Array([
        0,
        0,
        a.width,
        0,
        a.width,
        a.height,
        0,
        a.height,
      ])),
        (a.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])),
        (a.colors = new Float32Array([1, 1, 1, 1])),
        (a.indices = new Uint16Array([0, 1, 3, 2])),
        (a._vertexBuffer = b.createBuffer()),
        (a._indexBuffer = b.createBuffer()),
        (a._uvBuffer = b.createBuffer()),
        (a._colorBuffer = b.createBuffer()),
        b.bindBuffer(b.ARRAY_BUFFER, a._vertexBuffer),
        b.bufferData(b.ARRAY_BUFFER, a.verticies, b.STATIC_DRAW),
        b.bindBuffer(b.ARRAY_BUFFER, a._uvBuffer),
        b.bufferData(b.ARRAY_BUFFER, a.uvs, b.DYNAMIC_DRAW),
        b.bindBuffer(b.ARRAY_BUFFER, a._colorBuffer),
        b.bufferData(b.ARRAY_BUFFER, a.colors, b.STATIC_DRAW),
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, a._indexBuffer),
        b.bufferData(b.ELEMENT_ARRAY_BUFFER, a.indices, b.STATIC_DRAW),
        a.texture.baseTexture._glTexture
          ? (b.bindTexture(b.TEXTURE_2D, a.texture.baseTexture._glTexture),
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.REPEAT),
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.REPEAT),
            (a.texture.baseTexture._powerOf2 = !0))
          : (a.texture.baseTexture._powerOf2 = !0);
    }),
    (c.WebGLRenderGroup.prototype.renderStrip = function (a, b) {
      var d = this.gl;
      c.activateStripShader();
      var e = c.stripShader;
      e.program;
      var f = c.mat3.clone(a.worldTransform);
      c.mat3.transpose(f),
        d.uniformMatrix3fv(e.translationMatrix, !1, f),
        d.uniform2f(e.projectionVector, b.x, b.y),
        d.uniform2f(e.offsetVector, -c.offset.x, -c.offset.y),
        d.uniform1f(e.alpha, a.worldAlpha),
        a.dirty
          ? ((a.dirty = !1),
            d.bindBuffer(d.ARRAY_BUFFER, a._vertexBuffer),
            d.bufferData(d.ARRAY_BUFFER, a.verticies, d.STATIC_DRAW),
            d.vertexAttribPointer(e.aVertexPosition, 2, d.FLOAT, !1, 0, 0),
            d.bindBuffer(d.ARRAY_BUFFER, a._uvBuffer),
            d.bufferData(d.ARRAY_BUFFER, a.uvs, d.STATIC_DRAW),
            d.vertexAttribPointer(e.aTextureCoord, 2, d.FLOAT, !1, 0, 0),
            d.activeTexture(d.TEXTURE0),
            d.bindTexture(d.TEXTURE_2D, a.texture.baseTexture._glTexture),
            d.bindBuffer(d.ARRAY_BUFFER, a._colorBuffer),
            d.bufferData(d.ARRAY_BUFFER, a.colors, d.STATIC_DRAW),
            d.vertexAttribPointer(e.colorAttribute, 1, d.FLOAT, !1, 0, 0),
            d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, a._indexBuffer),
            d.bufferData(d.ELEMENT_ARRAY_BUFFER, a.indices, d.STATIC_DRAW))
          : (d.bindBuffer(d.ARRAY_BUFFER, a._vertexBuffer),
            d.bufferSubData(d.ARRAY_BUFFER, 0, a.verticies),
            d.vertexAttribPointer(e.aVertexPosition, 2, d.FLOAT, !1, 0, 0),
            d.bindBuffer(d.ARRAY_BUFFER, a._uvBuffer),
            d.vertexAttribPointer(e.aTextureCoord, 2, d.FLOAT, !1, 0, 0),
            d.activeTexture(d.TEXTURE0),
            d.bindTexture(d.TEXTURE_2D, a.texture.baseTexture._glTexture),
            d.bindBuffer(d.ARRAY_BUFFER, a._colorBuffer),
            d.vertexAttribPointer(e.colorAttribute, 1, d.FLOAT, !1, 0, 0),
            d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, a._indexBuffer)),
        d.drawElements(d.TRIANGLE_STRIP, a.indices.length, d.UNSIGNED_SHORT, 0),
        c.deactivateStripShader();
    }),
    (c.WebGLRenderGroup.prototype.renderTilingSprite = function (a, b) {
      var d = this.gl;
      c.shaderProgram;
      var e = a.tilePosition,
        f = a.tileScale,
        g = e.x / a.texture.baseTexture.width,
        h = e.y / a.texture.baseTexture.height,
        i = a.width / a.texture.baseTexture.width / f.x,
        j = a.height / a.texture.baseTexture.height / f.y;
      (a.uvs[0] = 0 - g),
        (a.uvs[1] = 0 - h),
        (a.uvs[2] = 1 * i - g),
        (a.uvs[3] = 0 - h),
        (a.uvs[4] = 1 * i - g),
        (a.uvs[5] = 1 * j - h),
        (a.uvs[6] = 0 - g),
        (a.uvs[7] = 1 * j - h),
        d.bindBuffer(d.ARRAY_BUFFER, a._uvBuffer),
        d.bufferSubData(d.ARRAY_BUFFER, 0, a.uvs),
        this.renderStrip(a, b);
    }),
    (c.WebGLRenderGroup.prototype.initStrip = function (a) {
      var b = this.gl;
      this.shaderProgram,
        (a._vertexBuffer = b.createBuffer()),
        (a._indexBuffer = b.createBuffer()),
        (a._uvBuffer = b.createBuffer()),
        (a._colorBuffer = b.createBuffer()),
        b.bindBuffer(b.ARRAY_BUFFER, a._vertexBuffer),
        b.bufferData(b.ARRAY_BUFFER, a.verticies, b.DYNAMIC_DRAW),
        b.bindBuffer(b.ARRAY_BUFFER, a._uvBuffer),
        b.bufferData(b.ARRAY_BUFFER, a.uvs, b.STATIC_DRAW),
        b.bindBuffer(b.ARRAY_BUFFER, a._colorBuffer),
        b.bufferData(b.ARRAY_BUFFER, a.colors, b.STATIC_DRAW),
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, a._indexBuffer),
        b.bufferData(b.ELEMENT_ARRAY_BUFFER, a.indices, b.STATIC_DRAW);
    }),
    (c.initDefaultShaders = function () {
      (c.primitiveShader = new c.PrimitiveShader()),
        c.primitiveShader.init(),
        (c.stripShader = new c.StripShader()),
        c.stripShader.init(),
        (c.defaultShader = new c.PixiShader()),
        c.defaultShader.init();
      var a = c.gl,
        b = c.defaultShader.program;
      a.useProgram(b),
        a.enableVertexAttribArray(c.defaultShader.aVertexPosition),
        a.enableVertexAttribArray(c.defaultShader.colorAttribute),
        a.enableVertexAttribArray(c.defaultShader.aTextureCoord);
    }),
    (c.activatePrimitiveShader = function () {
      var a = c.gl;
      a.useProgram(c.primitiveShader.program),
        a.disableVertexAttribArray(c.defaultShader.aVertexPosition),
        a.disableVertexAttribArray(c.defaultShader.colorAttribute),
        a.disableVertexAttribArray(c.defaultShader.aTextureCoord),
        a.enableVertexAttribArray(c.primitiveShader.aVertexPosition),
        a.enableVertexAttribArray(c.primitiveShader.colorAttribute);
    }),
    (c.deactivatePrimitiveShader = function () {
      var a = c.gl;
      a.useProgram(c.defaultShader.program),
        a.disableVertexAttribArray(c.primitiveShader.aVertexPosition),
        a.disableVertexAttribArray(c.primitiveShader.colorAttribute),
        a.enableVertexAttribArray(c.defaultShader.aVertexPosition),
        a.enableVertexAttribArray(c.defaultShader.colorAttribute),
        a.enableVertexAttribArray(c.defaultShader.aTextureCoord);
    }),
    (c.activateStripShader = function () {
      var a = c.gl;
      a.useProgram(c.stripShader.program);
    }),
    (c.deactivateStripShader = function () {
      var a = c.gl;
      a.useProgram(c.defaultShader.program);
    }),
    (c.CompileVertexShader = function (a, b) {
      return c._CompileShader(a, b, a.VERTEX_SHADER);
    }),
    (c.CompileFragmentShader = function (a, b) {
      return c._CompileShader(a, b, a.FRAGMENT_SHADER);
    }),
    (c._CompileShader = function (a, b, c) {
      var d = b.join("\n"),
        e = a.createShader(c);
      return (
        a.shaderSource(e, d),
        a.compileShader(e),
        a.getShaderParameter(e, a.COMPILE_STATUS)
          ? e
          : (console.log(a.getShaderInfoLog(e)), null)
      );
    }),
    (c.compileProgram = function (a, b) {
      var d = c.gl,
        e = c.CompileFragmentShader(d, b),
        f = c.CompileVertexShader(d, a),
        g = d.createProgram();
      return (
        d.attachShader(g, f),
        d.attachShader(g, e),
        d.linkProgram(g),
        d.getProgramParameter(g, d.LINK_STATUS) ||
          console.log("Could not initialise shaders"),
        g
      );
    }),
    (c.BitmapText = function (a, b) {
      c.DisplayObjectContainer.call(this),
        this.setText(a),
        this.setStyle(b),
        this.updateText(),
        (this.dirty = !1);
    }),
    (c.BitmapText.prototype = Object.create(
      c.DisplayObjectContainer.prototype
    )),
    (c.BitmapText.prototype.constructor = c.BitmapText),
    (c.BitmapText.prototype.setText = function (a) {
      (this.text = a || " "), (this.dirty = !0);
    }),
    (c.BitmapText.prototype.setStyle = function (a) {
      (a = a || {}), (a.align = a.align || "left"), (this.style = a);
      var b = a.font.split(" ");
      (this.fontName = b[b.length - 1]),
        (this.fontSize =
          b.length >= 2
            ? parseInt(b[b.length - 2], 10)
            : c.BitmapText.fonts[this.fontName].size),
        (this.dirty = !0);
    }),
    (c.BitmapText.prototype.updateText = function () {
      for (
        var a = c.BitmapText.fonts[this.fontName],
          b = new c.Point(),
          d = null,
          e = [],
          f = 0,
          g = [],
          h = 0,
          i = this.fontSize / a.size,
          j = 0;
        j < this.text.length;
        j++
      ) {
        var k = this.text.charCodeAt(j);
        if (/(?:\r\n|\r|\n)/.test(this.text.charAt(j)))
          g.push(b.x),
            (f = Math.max(f, b.x)),
            h++,
            (b.x = 0),
            (b.y += a.lineHeight),
            (d = null);
        else {
          var l = a.chars[k];
          l &&
            (d && l[d] && (b.x += l.kerning[d]),
            e.push({
              texture: l.texture,
              line: h,
              charCode: k,
              position: new c.Point(b.x + l.xOffset, b.y + l.yOffset),
            }),
            (b.x += l.xAdvance),
            (d = k));
        }
      }
      g.push(b.x), (f = Math.max(f, b.x));
      var m = [];
      for (j = 0; h >= j; j++) {
        var n = 0;
        "right" == this.style.align
          ? (n = f - g[j])
          : "center" == this.style.align && (n = (f - g[j]) / 2),
          m.push(n);
      }
      for (j = 0; j < e.length; j++) {
        var o = new c.Sprite(e[j].texture);
        (o.position.x = (e[j].position.x + m[e[j].line]) * i),
          (o.position.y = e[j].position.y * i),
          (o.scale.x = o.scale.y = i),
          this.addChild(o);
      }
      (this.width = b.x * i), (this.height = (b.y + a.lineHeight) * i);
    }),
    (c.BitmapText.prototype.updateTransform = function () {
      if (this.dirty) {
        for (; this.children.length > 0; ) this.removeChild(this.getChildAt(0));
        this.updateText(), (this.dirty = !1);
      }
      c.DisplayObjectContainer.prototype.updateTransform.call(this);
    }),
    (c.BitmapText.fonts = {}),
    (c.Text = function (a, b) {
      (this.canvas = document.createElement("canvas")),
        (this.context = this.canvas.getContext("2d")),
        c.Sprite.call(this, c.Texture.fromCanvas(this.canvas)),
        this.setText(a),
        this.setStyle(b),
        this.updateText(),
        (this.dirty = !1);
    }),
    (c.Text.prototype = Object.create(c.Sprite.prototype)),
    (c.Text.prototype.constructor = c.Text),
    (c.Text.prototype.setStyle = function (a) {
      (a = a || {}),
        (a.font = a.font || "bold 20pt Arial"),
        (a.fill = a.fill || "black"),
        (a.align = a.align || "left"),
        (a.stroke = a.stroke || "black"),
        (a.strokeThickness = a.strokeThickness || 0),
        (a.wordWrap = a.wordWrap || !1),
        (a.wordWrapWidth = a.wordWrapWidth || 100),
        (this.style = a),
        (this.dirty = !0);
    }),
    (c.Text.prototype.setText = function (a) {
      (this.text = a.toString() || " "), (this.dirty = !0);
    }),
    (c.Text.prototype.updateText = function () {
      this.context.font = this.style.font;
      var a = this.text;
      this.style.wordWrap && (a = this.wordWrap(this.text));
      for (
        var b = a.split(/(?:\r\n|\r|\n)/), d = [], e = 0, f = 0;
        f < b.length;
        f++
      ) {
        var g = this.context.measureText(b[f]).width;
        (d[f] = g), (e = Math.max(e, g));
      }
      this.canvas.width = e + this.style.strokeThickness;
      var h =
        this.determineFontHeight("font: " + this.style.font + ";") +
        this.style.strokeThickness;
      for (
        this.canvas.height = h * b.length,
          this.context.fillStyle = this.style.fill,
          this.context.font = this.style.font,
          this.context.strokeStyle = this.style.stroke,
          this.context.lineWidth = this.style.strokeThickness,
          this.context.textBaseline = "top",
          f = 0;
        f < b.length;
        f++
      ) {
        var i = new c.Point(
          this.style.strokeThickness / 2,
          this.style.strokeThickness / 2 + f * h
        );
        "right" == this.style.align
          ? (i.x += e - d[f])
          : "center" == this.style.align && (i.x += (e - d[f]) / 2),
          this.style.stroke &&
            this.style.strokeThickness &&
            this.context.strokeText(b[f], i.x, i.y),
          this.style.fill && this.context.fillText(b[f], i.x, i.y);
      }
      this.updateTexture();
    }),
    (c.Text.prototype.updateTexture = function () {
      (this.texture.baseTexture.width = this.canvas.width),
        (this.texture.baseTexture.height = this.canvas.height),
        (this.texture.frame.width = this.canvas.width),
        (this.texture.frame.height = this.canvas.height),
        (this._width = this.canvas.width),
        (this._height = this.canvas.height),
        c.texturesToUpdate.push(this.texture.baseTexture);
    }),
    (c.Text.prototype.updateTransform = function () {
      this.dirty && (this.updateText(), (this.dirty = !1)),
        c.Sprite.prototype.updateTransform.call(this);
    }),
    (c.Text.prototype.determineFontHeight = function (a) {
      var b = c.Text.heightCache[a];
      if (!b) {
        var d = document.getElementsByTagName("body")[0],
          e = document.createElement("div"),
          f = document.createTextNode("M");
        e.appendChild(f),
          e.setAttribute("style", a + ";position:absolute;top:0;left:0"),
          d.appendChild(e),
          (b = e.offsetHeight),
          (c.Text.heightCache[a] = b),
          d.removeChild(e);
      }
      return b;
    }),
    (c.Text.prototype.wordWrap = function (a) {
      for (var b = "", c = a.split("\n"), d = 0; d < c.length; d++) {
        for (
          var e = this.style.wordWrapWidth, f = c[d].split(" "), g = 0;
          g < f.length;
          g++
        ) {
          var h = this.context.measureText(f[g]).width,
            i = h + this.context.measureText(" ").width;
          i > e
            ? (g > 0 && (b += "\n"),
              (b += f[g] + " "),
              (e = this.style.wordWrapWidth - h))
            : ((e -= i), (b += f[g] + " "));
        }
        b += "\n";
      }
      return b;
    }),
    (c.Text.prototype.destroy = function (a) {
      a && this.texture.destroy();
    }),
    (c.Text.heightCache = {}),
    (c.BaseTextureCache = {}),
    (c.texturesToUpdate = []),
    (c.texturesToDestroy = []),
    (c.BaseTexture = function (a) {
      if (
        (c.EventTarget.call(this),
        (this.width = 100),
        (this.height = 100),
        (this.hasLoaded = !1),
        (this.source = a),
        a)
      ) {
        if (
          this.source instanceof Image ||
          this.source instanceof HTMLImageElement
        )
          if (this.source.complete)
            (this.hasLoaded = !0),
              (this.width = this.source.width),
              (this.height = this.source.height),
              c.texturesToUpdate.push(this);
          else {
            var b = this;
            this.source.onload = function () {
              (b.hasLoaded = !0),
                (b.width = b.source.width),
                (b.height = b.source.height),
                c.texturesToUpdate.push(b),
                b.dispatchEvent({ type: "loaded", content: b });
            };
          }
        else
          (this.hasLoaded = !0),
            (this.width = this.source.width),
            (this.height = this.source.height),
            c.texturesToUpdate.push(this);
        this._powerOf2 = !1;
      }
    }),
    (c.BaseTexture.prototype.constructor = c.BaseTexture),
    (c.BaseTexture.prototype.destroy = function () {
      this.source instanceof Image && (this.source.src = null),
        (this.source = null),
        c.texturesToDestroy.push(this);
    }),
    (c.BaseTexture.fromImage = function (a, b) {
      var d = c.BaseTextureCache[a];
      if (!d) {
        var e = new Image();
        b && (e.crossOrigin = ""),
          (e.src = a),
          (d = new c.BaseTexture(e)),
          (c.BaseTextureCache[a] = d);
      }
      return d;
    }),
    (c.TextureCache = {}),
    (c.FrameCache = {}),
    (c.Texture = function (a, b) {
      if (
        (c.EventTarget.call(this),
        b || ((this.noFrame = !0), (b = new c.Rectangle(0, 0, 1, 1))),
        a instanceof c.Texture && (a = a.baseTexture),
        (this.baseTexture = a),
        (this.frame = b),
        (this.trim = new c.Point()),
        (this.scope = this),
        a.hasLoaded)
      )
        this.noFrame && (b = new c.Rectangle(0, 0, a.width, a.height)),
          this.setFrame(b);
      else {
        var d = this;
        a.addEventListener("loaded", function () {
          d.onBaseTextureLoaded();
        });
      }
    }),
    (c.Texture.prototype.constructor = c.Texture),
    (c.Texture.prototype.onBaseTextureLoaded = function () {
      var a = this.baseTexture;
      a.removeEventListener("loaded", this.onLoaded),
        this.noFrame && (this.frame = new c.Rectangle(0, 0, a.width, a.height)),
        (this.noFrame = !1),
        (this.width = this.frame.width),
        (this.height = this.frame.height),
        this.scope.dispatchEvent({ type: "update", content: this });
    }),
    (c.Texture.prototype.destroy = function (a) {
      a && this.baseTexture.destroy();
    }),
    (c.Texture.prototype.setFrame = function (a) {
      if (
        ((this.frame = a),
        (this.width = a.width),
        (this.height = a.height),
        a.x + a.width > this.baseTexture.width ||
          a.y + a.height > this.baseTexture.height)
      )
        throw new Error(
          "Texture Error: frame does not fit inside the base Texture dimensions " +
            this
        );
      (this.updateFrame = !0), c.Texture.frameUpdates.push(this);
    }),
    (c.Texture.fromImage = function (a, b) {
      var d = c.TextureCache[a];
      return (
        d ||
          ((d = new c.Texture(c.BaseTexture.fromImage(a, b))),
          (c.TextureCache[a] = d)),
        d
      );
    }),
    (c.Texture.fromFrame = function (a) {
      var b = c.TextureCache[a];
      if (!b)
        throw new Error(
          "The frameId '" + a + "' does not exist in the texture cache " + this
        );
      return b;
    }),
    (c.Texture.fromCanvas = function (a) {
      var b = new c.BaseTexture(a);
      return new c.Texture(b);
    }),
    (c.Texture.addTextureToCache = function (a, b) {
      c.TextureCache[b] = a;
    }),
    (c.Texture.removeTextureFromCache = function (a) {
      var b = c.TextureCache[a];
      return (c.TextureCache[a] = null), b;
    }),
    (c.Texture.frameUpdates = []),
    (c.RenderTexture = function (a, b) {
      c.EventTarget.call(this),
        (this.width = a || 100),
        (this.height = b || 100),
        (this.indetityMatrix = c.mat3.create()),
        (this.frame = new c.Rectangle(0, 0, this.width, this.height)),
        c.gl ? this.initWebGL() : this.initCanvas();
    }),
    (c.RenderTexture.prototype = Object.create(c.Texture.prototype)),
    (c.RenderTexture.prototype.constructor = c.RenderTexture),
    (c.RenderTexture.prototype.initWebGL = function () {
      var a = c.gl;
      (this.glFramebuffer = a.createFramebuffer()),
        a.bindFramebuffer(a.FRAMEBUFFER, this.glFramebuffer),
        (this.glFramebuffer.width = this.width),
        (this.glFramebuffer.height = this.height),
        (this.baseTexture = new c.BaseTexture()),
        (this.baseTexture.width = this.width),
        (this.baseTexture.height = this.height),
        (this.baseTexture._glTexture = a.createTexture()),
        a.bindTexture(a.TEXTURE_2D, this.baseTexture._glTexture),
        a.texImage2D(
          a.TEXTURE_2D,
          0,
          a.RGBA,
          this.width,
          this.height,
          0,
          a.RGBA,
          a.UNSIGNED_BYTE,
          null
        ),
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR),
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR),
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE),
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE),
        (this.baseTexture.isRender = !0),
        a.bindFramebuffer(a.FRAMEBUFFER, this.glFramebuffer),
        a.framebufferTexture2D(
          a.FRAMEBUFFER,
          a.COLOR_ATTACHMENT0,
          a.TEXTURE_2D,
          this.baseTexture._glTexture,
          0
        ),
        (this.projection = new c.Point(this.width / 2, -this.height / 2)),
        (this.render = this.renderWebGL);
    }),
    (c.RenderTexture.prototype.resize = function (a, b) {
      if (((this.width = a), (this.height = b), c.gl)) {
        (this.projection.x = this.width / 2),
          (this.projection.y = -this.height / 2);
        var d = c.gl;
        d.bindTexture(d.TEXTURE_2D, this.baseTexture._glTexture),
          d.texImage2D(
            d.TEXTURE_2D,
            0,
            d.RGBA,
            this.width,
            this.height,
            0,
            d.RGBA,
            d.UNSIGNED_BYTE,
            null
          );
      } else
        (this.frame.width = this.width),
          (this.frame.height = this.height),
          this.renderer.resize(this.width, this.height);
    }),
    (c.RenderTexture.prototype.initCanvas = function () {
      (this.renderer = new c.CanvasRenderer(this.width, this.height, null, 0)),
        (this.baseTexture = new c.BaseTexture(this.renderer.view)),
        (this.frame = new c.Rectangle(0, 0, this.width, this.height)),
        (this.render = this.renderCanvas);
    }),
    (c.RenderTexture.prototype.renderWebGL = function (a, b, d) {
      var e = c.gl;
      e.colorMask(!0, !0, !0, !0),
        e.viewport(0, 0, this.width, this.height),
        e.bindFramebuffer(e.FRAMEBUFFER, this.glFramebuffer),
        d && (e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT));
      var f = a.children,
        g = a.worldTransform;
      (a.worldTransform = c.mat3.create()),
        (a.worldTransform[4] = -1),
        (a.worldTransform[5] = -2 * this.projection.y),
        b && ((a.worldTransform[2] = b.x), (a.worldTransform[5] -= b.y)),
        c.visibleCount++,
        (a.vcount = c.visibleCount);
      for (var h = 0, i = f.length; i > h; h++) f[h].updateTransform();
      var j = a.__renderGroup;
      j
        ? a == j.root
          ? j.render(this.projection, this.glFramebuffer)
          : j.renderSpecific(a, this.projection, this.glFramebuffer)
        : (this.renderGroup || (this.renderGroup = new c.WebGLRenderGroup(e)),
          this.renderGroup.setRenderable(a),
          this.renderGroup.render(this.projection, this.glFramebuffer)),
        (a.worldTransform = g);
    }),
    (c.RenderTexture.prototype.renderCanvas = function (a, b, d) {
      var e = a.children;
      (a.worldTransform = c.mat3.create()),
        b && ((a.worldTransform[2] = b.x), (a.worldTransform[5] = b.y));
      for (var f = 0, g = e.length; g > f; f++) e[f].updateTransform();
      d && this.renderer.context.clearRect(0, 0, this.width, this.height),
        this.renderer.renderDisplayObject(a),
        this.renderer.context.setTransform(1, 0, 0, 1, 0, 0);
    }),
    (c.EventTarget = function () {
      var a = {};
      (this.addEventListener = this.on =
        function (b, c) {
          void 0 === a[b] && (a[b] = []),
            -1 === a[b].indexOf(c) && a[b].push(c);
        }),
        (this.dispatchEvent = this.emit =
          function (b) {
            if (a[b.type] && a[b.type].length)
              for (var c = 0, d = a[b.type].length; d > c; c++) a[b.type][c](b);
          }),
        (this.removeEventListener = this.off =
          function (b, c) {
            var d = a[b].indexOf(c);
            -1 !== d && a[b].splice(d, 1);
          });
    }),
    (c.PolyK = {}),
    (c.PolyK.Triangulate = function (a) {
      var b = !0,
        d = a.length >> 1;
      if (3 > d) return [];
      for (var e = [], f = [], g = 0; d > g; g++) f.push(g);
      for (var g = 0, h = d; h > 3; ) {
        var i = f[(g + 0) % h],
          j = f[(g + 1) % h],
          k = f[(g + 2) % h],
          l = a[2 * i],
          m = a[2 * i + 1],
          n = a[2 * j],
          o = a[2 * j + 1],
          p = a[2 * k],
          q = a[2 * k + 1],
          r = !1;
        if (c.PolyK._convex(l, m, n, o, p, q, b)) {
          r = !0;
          for (var s = 0; h > s; s++) {
            var t = f[s];
            if (
              t != i &&
              t != j &&
              t != k &&
              c.PolyK._PointInTriangle(a[2 * t], a[2 * t + 1], l, m, n, o, p, q)
            ) {
              r = !1;
              break;
            }
          }
        }
        if (r) e.push(i, j, k), f.splice((g + 1) % h, 1), h--, (g = 0);
        else if (g++ > 3 * h) {
          if (!b)
            return console.log("PIXI Warning: shape too complex to fill"), [];
          var e = [];
          f = [];
          for (var g = 0; d > g; g++) f.push(g);
          (g = 0), (h = d), (b = !1);
        }
      }
      return e.push(f[0], f[1], f[2]), e;
    }),
    (c.PolyK._PointInTriangle = function (a, b, c, d, e, f, g, h) {
      var i = g - c,
        j = h - d,
        k = e - c,
        l = f - d,
        m = a - c,
        n = b - d,
        o = i * i + j * j,
        p = i * k + j * l,
        q = i * m + j * n,
        r = k * k + l * l,
        s = k * m + l * n,
        t = 1 / (o * r - p * p),
        u = (r * q - p * s) * t,
        v = (o * s - p * q) * t;
      return u >= 0 && v >= 0 && 1 > u + v;
    }),
    (c.PolyK._convex = function (a, b, c, d, e, f, g) {
      return (b - d) * (e - c) + (c - a) * (f - d) >= 0 == g;
    }),
    (d.Camera = function (a, b, c, e, f, g) {
      (this.game = a),
        (this.world = a.world),
        (this.id = 0),
        (this.view = new d.Rectangle(c, e, f, g)),
        (this.screenView = new d.Rectangle(c, e, f, g)),
        (this.bounds = new d.Rectangle(c, e, f, g)),
        (this.deadzone = null),
        (this.visible = !0),
        (this.atLimit = { x: !1, y: !1 }),
        (this.target = null),
        (this._edge = 0),
        (this.displayObject = null);
    }),
    (d.Camera.FOLLOW_LOCKON = 0),
    (d.Camera.FOLLOW_PLATFORMER = 1),
    (d.Camera.FOLLOW_TOPDOWN = 2),
    (d.Camera.FOLLOW_TOPDOWN_TIGHT = 3),
    (d.Camera.prototype = {
      follow: function (a, b) {
        "undefined" == typeof b && (b = d.Camera.FOLLOW_LOCKON),
          (this.target = a);
        var c;
        switch (b) {
          case d.Camera.FOLLOW_PLATFORMER:
            var e = this.width / 8,
              f = this.height / 3;
            this.deadzone = new d.Rectangle(
              (this.width - e) / 2,
              (this.height - f) / 2 - 0.25 * f,
              e,
              f
            );
            break;
          case d.Camera.FOLLOW_TOPDOWN:
            (c = Math.max(this.width, this.height) / 4),
              (this.deadzone = new d.Rectangle(
                (this.width - c) / 2,
                (this.height - c) / 2,
                c,
                c
              ));
            break;
          case d.Camera.FOLLOW_TOPDOWN_TIGHT:
            (c = Math.max(this.width, this.height) / 8),
              (this.deadzone = new d.Rectangle(
                (this.width - c) / 2,
                (this.height - c) / 2,
                c,
                c
              ));
            break;
          case d.Camera.FOLLOW_LOCKON:
            this.deadzone = null;
            break;
          default:
            this.deadzone = null;
        }
      },
      focusOn: function (a) {
        this.setPosition(
          Math.round(a.x - this.view.halfWidth),
          Math.round(a.y - this.view.halfHeight)
        );
      },
      focusOnXY: function (a, b) {
        this.setPosition(
          Math.round(a - this.view.halfWidth),
          Math.round(b - this.view.halfHeight)
        );
      },
      update: function () {
        this.target && this.updateTarget(),
          this.bounds && this.checkBounds(),
          (this.displayObject.position.x = -this.view.x),
          (this.displayObject.position.y = -this.view.y);
      },
      updateTarget: function () {
        this.deadzone
          ? ((this._edge = this.target.x - this.deadzone.x),
            this.view.x > this._edge && (this.view.x = this._edge),
            (this._edge =
              this.target.x +
              this.target.width -
              this.deadzone.x -
              this.deadzone.width),
            this.view.x < this._edge && (this.view.x = this._edge),
            (this._edge = this.target.y - this.deadzone.y),
            this.view.y > this._edge && (this.view.y = this._edge),
            (this._edge =
              this.target.y +
              this.target.height -
              this.deadzone.y -
              this.deadzone.height),
            this.view.y < this._edge && (this.view.y = this._edge))
          : this.focusOnXY(this.target.x, this.target.y);
      },
      setBoundsToWorld: function () {
        this.bounds.setTo(
          this.game.world.x,
          this.game.world.y,
          this.game.world.width,
          this.game.world.height
        );
      },
      checkBounds: function () {
        (this.atLimit.x = !1),
          (this.atLimit.y = !1),
          this.view.x < this.bounds.x &&
            ((this.atLimit.x = !0), (this.view.x = this.bounds.x)),
          this.view.x > this.bounds.right - this.width &&
            ((this.atLimit.x = !0),
            (this.view.x = this.bounds.right - this.width + 1)),
          this.view.y < this.bounds.top &&
            ((this.atLimit.y = !0), (this.view.y = this.bounds.top)),
          this.view.y > this.bounds.bottom - this.height &&
            ((this.atLimit.y = !0),
            (this.view.y = this.bounds.bottom - this.height + 1)),
          this.view.floor();
      },
      setPosition: function (a, b) {
        (this.view.x = a), (this.view.y = b), this.bounds && this.checkBounds();
      },
      setSize: function (a, b) {
        (this.view.width = a), (this.view.height = b);
      },
    }),
    Object.defineProperty(d.Camera.prototype, "x", {
      get: function () {
        return this.view.x;
      },
      set: function (a) {
        (this.view.x = a), this.bounds && this.checkBounds();
      },
    }),
    Object.defineProperty(d.Camera.prototype, "y", {
      get: function () {
        return this.view.y;
      },
      set: function (a) {
        (this.view.y = a), this.bounds && this.checkBounds();
      },
    }),
    Object.defineProperty(d.Camera.prototype, "width", {
      get: function () {
        return this.view.width;
      },
      set: function (a) {
        this.view.width = a;
      },
    }),
    Object.defineProperty(d.Camera.prototype, "height", {
      get: function () {
        return this.view.height;
      },
      set: function (a) {
        this.view.height = a;
      },
    }),
    (d.State = function () {
      (this.game = null),
        (this.add = null),
        (this.camera = null),
        (this.cache = null),
        (this.input = null),
        (this.load = null),
        (this.math = null),
        (this.sound = null),
        (this.stage = null),
        (this.time = null),
        (this.tweens = null),
        (this.world = null),
        (this.particles = null),
        (this.physics = null);
    }),
    (d.State.prototype = {
      preload: function () {},
      loadUpdate: function () {},
      loadRender: function () {},
      create: function () {},
      update: function () {},
      render: function () {},
      paused: function () {},
      destroy: function () {},
    }),
    (d.StateManager = function (a, b) {
      (this.game = a),
        (this.states = {}),
        (this._pendingState = null),
        null !== b && (this._pendingState = b),
        (this._created = !1),
        (this.current = ""),
        (this.onInitCallback = null),
        (this.onPreloadCallback = null),
        (this.onCreateCallback = null),
        (this.onUpdateCallback = null),
        (this.onRenderCallback = null),
        (this.onPreRenderCallback = null),
        (this.onLoadUpdateCallback = null),
        (this.onLoadRenderCallback = null),
        (this.onPausedCallback = null),
        (this.onShutDownCallback = null);
    }),
    (d.StateManager.prototype = {
      boot: function () {
        this.game.onPause.add(this.pause, this),
          this.game.onResume.add(this.resume, this),
          null !== this._pendingState &&
            ("string" == typeof this._pendingState
              ? this.start(this._pendingState, !1, !1)
              : this.add("default", this._pendingState, !0));
      },
      add: function (a, b, c) {
        "undefined" == typeof c && (c = !1);
        var e;
        return (
          b instanceof d.State
            ? (e = b)
            : "object" == typeof b
            ? ((e = b), (e.game = this.game))
            : "function" == typeof b && (e = new b(this.game)),
          (this.states[a] = e),
          c && (this.game.isBooted ? this.start(a) : (this._pendingState = a)),
          e
        );
      },
      remove: function (a) {
        this.current == a &&
          ((this.callbackContext = null),
          (this.onInitCallback = null),
          (this.onShutDownCallback = null),
          (this.onPreloadCallback = null),
          (this.onLoadRenderCallback = null),
          (this.onLoadUpdateCallback = null),
          (this.onCreateCallback = null),
          (this.onUpdateCallback = null),
          (this.onRenderCallback = null),
          (this.onPausedCallback = null),
          (this.onDestroyCallback = null)),
          delete this.states[a];
      },
      start: function (a, b, c) {
        return (
          "undefined" == typeof b && (b = !0),
          "undefined" == typeof c && (c = !1),
          this.game.isBooted === !1
            ? ((this._pendingState = a), void 0)
            : (this.checkState(a) !== !1 &&
                (this.current &&
                  this.onShutDownCallback.call(this.callbackContext, this.game),
                b &&
                  (this.game.tweens.removeAll(),
                  this.game.world.destroy(),
                  c === !0 && this.game.cache.destroy()),
                this.setCurrentState(a),
                this.onPreloadCallback
                  ? (this.game.load.reset(),
                    this.onPreloadCallback.call(
                      this.callbackContext,
                      this.game
                    ),
                    0 === this.game.load.totalQueuedFiles()
                      ? this.game.loadComplete()
                      : this.game.load.start())
                  : this.game.loadComplete()),
              void 0)
        );
      },
      dummy: function () {},
      checkState: function (a) {
        if (this.states[a]) {
          var b = !1;
          return (
            this.states[a].preload && (b = !0),
            b === !1 && this.states[a].loadRender && (b = !0),
            b === !1 && this.states[a].loadUpdate && (b = !0),
            b === !1 && this.states[a].create && (b = !0),
            b === !1 && this.states[a].update && (b = !0),
            b === !1 && this.states[a].preRender && (b = !0),
            b === !1 && this.states[a].render && (b = !0),
            b === !1 && this.states[a].paused && (b = !0),
            b === !1
              ? (console.warn(
                  "Invalid Phaser State object given. Must contain at least a one of the required functions."
                ),
                !1)
              : !0
          );
        }
        return (
          console.warn(
            "Phaser.StateManager - No state found with the key: " + a
          ),
          !1
        );
      },
      link: function (a) {
        (this.states[a].game = this.game),
          (this.states[a].add = this.game.add),
          (this.states[a].camera = this.game.camera),
          (this.states[a].cache = this.game.cache),
          (this.states[a].input = this.game.input),
          (this.states[a].load = this.game.load),
          (this.states[a].math = this.game.math),
          (this.states[a].sound = this.game.sound),
          (this.states[a].stage = this.game.stage),
          (this.states[a].time = this.game.time),
          (this.states[a].tweens = this.game.tweens),
          (this.states[a].world = this.game.world),
          (this.states[a].particles = this.game.particles),
          (this.states[a].physics = this.game.physics),
          (this.states[a].rnd = this.game.rnd);
      },
      setCurrentState: function (a) {
        (this.callbackContext = this.states[a]),
          this.link(a),
          (this.onInitCallback = this.states[a].init || this.dummy),
          (this.onPreloadCallback = this.states[a].preload || null),
          (this.onLoadRenderCallback = this.states[a].loadRender || null),
          (this.onLoadUpdateCallback = this.states[a].loadUpdate || null),
          (this.onCreateCallback = this.states[a].create || null),
          (this.onUpdateCallback = this.states[a].update || null),
          (this.onPreRenderCallback = this.states[a].preRender || null),
          (this.onRenderCallback = this.states[a].render || null),
          (this.onPausedCallback = this.states[a].paused || null),
          (this.onShutDownCallback = this.states[a].shutdown || this.dummy),
          (this.current = a),
          (this._created = !1),
          this.onInitCallback.call(this.callbackContext, this.game);
      },
      loadComplete: function () {
        this._created === !1 && this.onCreateCallback
          ? ((this._created = !0),
            this.onCreateCallback.call(this.callbackContext, this.game))
          : (this._created = !0);
      },
      pause: function () {
        this._created &&
          this.onPausedCallback &&
          this.onPausedCallback.call(this.callbackContext, this.game, !0);
      },
      resume: function () {
        this._created &&
          this.onre &&
          this.onPausedCallback.call(this.callbackContext, this.game, !1);
      },
      update: function () {
        this._created && this.onUpdateCallback
          ? this.onUpdateCallback.call(this.callbackContext, this.game)
          : this.onLoadUpdateCallback &&
            this.onLoadUpdateCallback.call(this.callbackContext, this.game);
      },
      preRender: function () {
        this.onPreRenderCallback &&
          this.onPreRenderCallback.call(this.callbackContext, this.game);
      },
      render: function () {
        this._created && this.onRenderCallback
          ? (this.game.renderType === d.CANVAS &&
              (this.game.context.save(),
              this.game.context.setTransform(1, 0, 0, 1, 0, 0)),
            this.onRenderCallback.call(this.callbackContext, this.game),
            this.game.renderType === d.CANVAS && this.game.context.restore())
          : this.onLoadRenderCallback &&
            this.onLoadRenderCallback.call(this.callbackContext, this.game);
      },
      destroy: function () {
        (this.callbackContext = null),
          (this.onInitCallback = null),
          (this.onShutDownCallback = null),
          (this.onPreloadCallback = null),
          (this.onLoadRenderCallback = null),
          (this.onLoadUpdateCallback = null),
          (this.onCreateCallback = null),
          (this.onUpdateCallback = null),
          (this.onRenderCallback = null),
          (this.onPausedCallback = null),
          (this.onDestroyCallback = null),
          (this.game = null),
          (this.states = {}),
          (this._pendingState = null);
      },
    }),
    (d.LinkedList = function () {
      (this.next = null),
        (this.prev = null),
        (this.first = null),
        (this.last = null),
        (this.total = 0);
    }),
    (d.LinkedList.prototype = {
      add: function (a) {
        return 0 === this.total && null == this.first && null == this.last
          ? ((this.first = a),
            (this.last = a),
            (this.next = a),
            (a.prev = this),
            this.total++,
            a)
          : ((this.last.next = a),
            (a.prev = this.last),
            (this.last = a),
            this.total++,
            a);
      },
      remove: function (a) {
        a == this.first
          ? (this.first = this.first.next)
          : a == this.last && (this.last = this.last.prev),
          a.prev && (a.prev.next = a.next),
          a.next && (a.next.prev = a.prev),
          (a.next = a.prev = null),
          null == this.first && (this.last = null),
          this.total--;
      },
      callAll: function (a) {
        if (this.first && this.last) {
          var b = this.first;
          do b && b[a] && b[a].call(b), (b = b.next);
          while (b != this.last.next);
        }
      },
    }),
    (d.Signal = function () {
      (this._bindings = []), (this._prevParams = null);
      var a = this;
      this.dispatch = function () {
        d.Signal.prototype.dispatch.apply(a, arguments);
      };
    }),
    (d.Signal.prototype = {
      memorize: !1,
      _shouldPropagate: !0,
      active: !0,
      validateListener: function (a, b) {
        if ("function" != typeof a)
          throw new Error(
            "listener is a required param of {fn}() and should be a Function.".replace(
              "{fn}",
              b
            )
          );
      },
      _registerListener: function (a, b, c, e) {
        var f,
          g = this._indexOfListener(a, c);
        if (-1 !== g) {
          if (((f = this._bindings[g]), f.isOnce() !== b))
            throw new Error(
              "You cannot add" +
                (b ? "" : "Once") +
                "() then add" +
                (b ? "Once" : "") +
                "() the same listener without removing the relationship first."
            );
        } else (f = new d.SignalBinding(this, a, b, c, e)), this._addBinding(f);
        return (
          this.memorize && this._prevParams && f.execute(this._prevParams), f
        );
      },
      _addBinding: function (a) {
        var b = this._bindings.length;
        do --b;
        while (this._bindings[b] && a._priority <= this._bindings[b]._priority);
        this._bindings.splice(b + 1, 0, a);
      },
      _indexOfListener: function (a, b) {
        for (var c, d = this._bindings.length; d--; )
          if (((c = this._bindings[d]), c._listener === a && c.context === b))
            return d;
        return -1;
      },
      has: function (a, b) {
        return -1 !== this._indexOfListener(a, b);
      },
      add: function (a, b, c) {
        return (
          this.validateListener(a, "add"), this._registerListener(a, !1, b, c)
        );
      },
      addOnce: function (a, b, c) {
        return (
          this.validateListener(a, "addOnce"),
          this._registerListener(a, !0, b, c)
        );
      },
      remove: function (a, b) {
        this.validateListener(a, "remove");
        var c = this._indexOfListener(a, b);
        return (
          -1 !== c &&
            (this._bindings[c]._destroy(), this._bindings.splice(c, 1)),
          a
        );
      },
      removeAll: function () {
        for (var a = this._bindings.length; a--; ) this._bindings[a]._destroy();
        this._bindings.length = 0;
      },
      getNumListeners: function () {
        return this._bindings.length;
      },
      halt: function () {
        this._shouldPropagate = !1;
      },
      dispatch: function () {
        if (this.active) {
          var a,
            b = Array.prototype.slice.call(arguments),
            c = this._bindings.length;
          if ((this.memorize && (this._prevParams = b), c)) {
            (a = this._bindings.slice()), (this._shouldPropagate = !0);
            do c--;
            while (a[c] && this._shouldPropagate && a[c].execute(b) !== !1);
          }
        }
      },
      forget: function () {
        this._prevParams = null;
      },
      dispose: function () {
        this.removeAll(), delete this._bindings, delete this._prevParams;
      },
      toString: function () {
        return (
          "[Phaser.Signal active:" +
          this.active +
          " numListeners:" +
          this.getNumListeners() +
          "]"
        );
      },
    }),
    (d.SignalBinding = function (a, b, c, d, e) {
      (this._listener = b),
        (this._isOnce = c),
        (this.context = d),
        (this._signal = a),
        (this._priority = e || 0);
    }),
    (d.SignalBinding.prototype = {
      active: !0,
      params: null,
      execute: function (a) {
        var b, c;
        return (
          this.active &&
            this._listener &&
            ((c = this.params ? this.params.concat(a) : a),
            (b = this._listener.apply(this.context, c)),
            this._isOnce && this.detach()),
          b
        );
      },
      detach: function () {
        return this.isBound()
          ? this._signal.remove(this._listener, this.context)
          : null;
      },
      isBound: function () {
        return !!this._signal && !!this._listener;
      },
      isOnce: function () {
        return this._isOnce;
      },
      getListener: function () {
        return this._listener;
      },
      getSignal: function () {
        return this._signal;
      },
      _destroy: function () {
        delete this._signal, delete this._listener, delete this.context;
      },
      toString: function () {
        return (
          "[Phaser.SignalBinding isOnce:" +
          this._isOnce +
          ", isBound:" +
          this.isBound() +
          ", active:" +
          this.active +
          "]"
        );
      },
    }),
    (d.Filter = function (a, b, c) {
      (this.game = a),
        (this.type = d.WEBGL_FILTER),
        (this.passes = [this]),
        (this.dirty = !0),
        (this.padding = 0),
        (this.uniforms = {
          time: { type: "1f", value: 0 },
          resolution: { type: "2f", value: { x: 256, y: 256 } },
          mouse: { type: "2f", value: { x: 0, y: 0 } },
        }),
        (this.fragmentSrc = c || []);
    }),
    (d.Filter.prototype = {
      init: function () {},
      setResolution: function (a, b) {
        (this.uniforms.resolution.value.x = a),
          (this.uniforms.resolution.value.y = b);
      },
      update: function (a) {
        "undefined" != typeof a &&
          (a.x > 0 && (this.uniforms.mouse.x = a.x.toFixed(2)),
          a.y > 0 && (this.uniforms.mouse.y = a.y.toFixed(2))),
          (this.uniforms.time.value = this.game.time.totalElapsedSeconds());
      },
      destroy: function () {
        this.game = null;
      },
    }),
    Object.defineProperty(d.Filter.prototype, "width", {
      get: function () {
        return this.uniforms.resolution.value.x;
      },
      set: function (a) {
        this.uniforms.resolution.value.x = a;
      },
    }),
    Object.defineProperty(d.Filter.prototype, "height", {
      get: function () {
        return this.uniforms.resolution.value.y;
      },
      set: function (a) {
        this.uniforms.resolution.value.y = a;
      },
    }),
    (d.Plugin = function (a, b) {
      "undefined" == typeof b && (b = null),
        (this.game = a),
        (this.parent = b),
        (this.active = !1),
        (this.visible = !1),
        (this.hasPreUpdate = !1),
        (this.hasUpdate = !1),
        (this.hasPostUpdate = !1),
        (this.hasRender = !1),
        (this.hasPostRender = !1);
    }),
    (d.Plugin.prototype = {
      preUpdate: function () {},
      update: function () {},
      render: function () {},
      postRender: function () {},
      destroy: function () {
        (this.game = null),
          (this.parent = null),
          (this.active = !1),
          (this.visible = !1);
      },
    }),
    (d.PluginManager = function (a, b) {
      (this.game = a),
        (this._parent = b),
        (this.plugins = []),
        (this._pluginsLength = 0);
    }),
    (d.PluginManager.prototype = {
      add: function (a) {
        var b = !1;
        return (
          "function" == typeof a
            ? (a = new a(this.game, this._parent))
            : ((a.game = this.game), (a.parent = this._parent)),
          "function" == typeof a.preUpdate && ((a.hasPreUpdate = !0), (b = !0)),
          "function" == typeof a.update && ((a.hasUpdate = !0), (b = !0)),
          "function" == typeof a.postUpdate &&
            ((a.hasPostUpdate = !0), (b = !0)),
          "function" == typeof a.render && ((a.hasRender = !0), (b = !0)),
          "function" == typeof a.postRender &&
            ((a.hasPostRender = !0), (b = !0)),
          b
            ? ((a.hasPreUpdate || a.hasUpdate || a.hasPostUpdate) &&
                (a.active = !0),
              (a.hasRender || a.hasPostRender) && (a.visible = !0),
              (this._pluginsLength = this.plugins.push(a)),
              "function" == typeof a.init && a.init(),
              a)
            : null
        );
      },
      remove: function (a) {
        if (0 !== this._pluginsLength)
          for (this._p = 0; this._p < this._pluginsLength; this._p++)
            if (this.plugins[this._p] === a)
              return (
                a.destroy(),
                this.plugins.splice(this._p, 1),
                this._pluginsLength--,
                void 0
              );
      },
      removeAll: function () {
        for (this._p = 0; this._p < this._pluginsLength; this._p++)
          this.plugins[this._p].destroy();
        (this.plugins.length = 0), (this._pluginsLength = 0);
      },
      preUpdate: function () {
        if (0 !== this._pluginsLength)
          for (this._p = 0; this._p < this._pluginsLength; this._p++)
            this.plugins[this._p].active &&
              this.plugins[this._p].hasPreUpdate &&
              this.plugins[this._p].preUpdate();
      },
      update: function () {
        if (0 !== this._pluginsLength)
          for (this._p = 0; this._p < this._pluginsLength; this._p++)
            this.plugins[this._p].active &&
              this.plugins[this._p].hasUpdate &&
              this.plugins[this._p].update();
      },
      postUpdate: function () {
        if (0 !== this._pluginsLength)
          for (this._p = 0; this._p < this._pluginsLength; this._p++)
            this.plugins[this._p].active &&
              this.plugins[this._p].hasPostUpdate &&
              this.plugins[this._p].postUpdate();
      },
      render: function () {
        if (0 !== this._pluginsLength)
          for (this._p = 0; this._p < this._pluginsLength; this._p++)
            this.plugins[this._p].visible &&
              this.plugins[this._p].hasRender &&
              this.plugins[this._p].render();
      },
      postRender: function () {
        if (0 !== this._pluginsLength)
          for (this._p = 0; this._p < this._pluginsLength; this._p++)
            this.plugins[this._p].visible &&
              this.plugins[this._p].hasPostRender &&
              this.plugins[this._p].postRender();
      },
      destroy: function () {
        (this.plugins.length = 0),
          (this._pluginsLength = 0),
          (this.game = null),
          (this._parent = null);
      },
    }),
    (d.Stage = function (a, b, e) {
      (this.game = a),
        (this._backgroundColor = "rgb(0,0,0)"),
        (this.offset = new d.Point()),
        (this.canvas = d.Canvas.create(b, e)),
        (this.canvas.style["-webkit-full-screen"] =
          "width: 100%; height: 100%"),
        (this._stage = new c.Stage(0, !1)),
        (this._stage.name = "_stage_root"),
        (this._stage.interactive = !1),
        (this.scaleMode = d.StageScaleMode.NO_SCALE),
        (this.scale = new d.StageScaleMode(this.game, b, e)),
        (this.aspectRatio = b / e),
        (this._nextOffsetCheck = 0),
        (this.checkOffsetInterval = 2500);
    }),
    (d.Stage.prototype = {
      boot: function () {
        d.Canvas.getOffset(this.canvas, this.offset),
          (this.bounds = new d.Rectangle(
            this.offset.x,
            this.offset.y,
            this.game.width,
            this.game.height
          ));
        var a = this;
        (this._onChange = function (b) {
          return a.visibilityChange(b);
        }),
          d.Canvas.setUserSelect(this.canvas, "none"),
          d.Canvas.setTouchAction(this.canvas, "none"),
          (this.backgroundColor = "#000"),
          document.addEventListener("visibilitychange", this._onChange, !1),
          document.addEventListener(
            "webkitvisibilitychange",
            this._onChange,
            !1
          ),
          document.addEventListener("pagehide", this._onChange, !1),
          document.addEventListener("pageshow", this._onChange, !1),
          (window.onblur = this._onChange),
          (window.onfocus = this._onChange);
      },
      update: function () {
        this.checkOffsetInterval !== !1 &&
          this.game.time.now > this._nextOffsetCheck &&
          (d.Canvas.getOffset(this.canvas, this.offset),
          (this._nextOffsetCheck =
            this.game.time.now + this.checkOffsetInterval));
      },
      visibilityChange: function (a) {
        this.disableVisibilityChange ||
          (this.game.paused =
            "pagehide" == a.type ||
            "blur" == a.type ||
            document.hidden === !0 ||
            document.webkitHidden === !0
              ? !0
              : !1);
      },
    }),
    Object.defineProperty(d.Stage.prototype, "backgroundColor", {
      get: function () {
        return this._backgroundColor;
      },
      set: function (a) {
        (this._backgroundColor = a),
          this.game.transparent === !1 &&
            (this.game.renderType == d.CANVAS
              ? (this.game.canvas.style.backgroundColor = a)
              : ("string" == typeof a && (a = d.Color.hexToRGB(a)),
                this._stage.setBackgroundColor(a)));
      },
    }),
    (d.Group = function (a, b, e, f) {
      ("undefined" == typeof b || null === typeof b) && (b = a.world),
        "undefined" == typeof f && (f = !1),
        (this.game = a),
        (this.name = e || "group"),
        f
          ? (this._container = this.game.stage._stage)
          : ((this._container = new c.DisplayObjectContainer()),
            (this._container.name = this.name),
            b
              ? b instanceof d.Group
                ? (b._container.addChild(this._container),
                  b._container.updateTransform())
                : (b.addChild(this._container), b.updateTransform())
              : (this.game.stage._stage.addChild(this._container),
                this.game.stage._stage.updateTransform())),
        (this.type = d.GROUP),
        (this.exists = !0),
        (this.scale = new d.Point(1, 1)),
        (this.cursor = null);
    }),
    (d.Group.RETURN_NONE = 0),
    (d.Group.RETURN_TOTAL = 1),
    (d.Group.RETURN_CHILD = 2),
    (d.Group.SORT_ASCENDING = -1),
    (d.Group.SORT_DESCENDING = 1),
    (d.Group.prototype = {
      add: function (a) {
        return (
          a.group !== this &&
            ((a.group = this),
            a.events && a.events.onAddedToGroup.dispatch(a, this),
            this._container.addChild(a),
            a.updateTransform(),
            null === this.cursor && (this.cursor = a)),
          a
        );
      },
      addAt: function (a, b) {
        return (
          a.group !== this &&
            ((a.group = this),
            a.events && a.events.onAddedToGroup.dispatch(a, this),
            this._container.addChildAt(a, b),
            a.updateTransform(),
            null === this.cursor && (this.cursor = a)),
          a
        );
      },
      getAt: function (a) {
        return this._container.getChildAt(a);
      },
      create: function (a, b, c, e, f) {
        "undefined" == typeof f && (f = !0);
        var g = new d.Sprite(this.game, a, b, c, e);
        return (
          (g.group = this),
          (g.exists = f),
          (g.visible = f),
          (g.alive = f),
          g.events && g.events.onAddedToGroup.dispatch(g, this),
          this._container.addChild(g),
          g.updateTransform(),
          null === this.cursor && (this.cursor = g),
          g
        );
      },
      createMultiple: function (a, b, c, e) {
        "undefined" == typeof e && (e = !1);
        for (var f = 0; a > f; f++) {
          var g = new d.Sprite(this.game, 0, 0, b, c);
          (g.group = this),
            (g.exists = e),
            (g.visible = e),
            (g.alive = e),
            g.events && g.events.onAddedToGroup.dispatch(g, this),
            this._container.addChild(g),
            g.updateTransform(),
            null === this.cursor && (this.cursor = g);
        }
      },
      next: function () {
        this.cursor &&
          (this.cursor =
            this.cursor == this._container.last
              ? this._container._iNext
              : this.cursor._iNext);
      },
      previous: function () {
        this.cursor &&
          (this.cursor =
            this.cursor == this._container._iNext
              ? this._container.last
              : this.cursor._iPrev);
      },
      childTest: function (a, b) {
        var c = a + " next: ";
        (c += b._iNext ? b._iNext.name : "-null-"),
          (c = c + " " + a + " prev: "),
          (c += b._iPrev ? b._iPrev.name : "-null-"),
          console.log(c);
      },
      swapIndex: function (a, b) {
        var c = this.getAt(a),
          d = this.getAt(b);
        console.log("swapIndex ", a, " with ", b), this.swap(c, d);
      },
      swap: function (a, b) {
        if (
          a === b ||
          !a.parent ||
          !b.parent ||
          a.group !== this ||
          b.group !== this
        )
          return !1;
        var c = a._iPrev,
          d = a._iNext,
          e = b._iPrev,
          f = b._iNext,
          g = this._container.last._iNext,
          h = this.game.stage._stage;
        do
          h !== a &&
            h !== b &&
            (h.first === a ? (h.first = b) : h.first === b && (h.first = a),
            h.last === a ? (h.last = b) : h.last === b && (h.last = a)),
            (h = h._iNext);
        while (h != g);
        return a._iNext == b
          ? ((a._iNext = f),
            (a._iPrev = b),
            (b._iNext = a),
            (b._iPrev = c),
            c && (c._iNext = b),
            f && (f._iPrev = a),
            a.__renderGroup && a.__renderGroup.updateTexture(a),
            b.__renderGroup && b.__renderGroup.updateTexture(b),
            !0)
          : b._iNext == a
          ? ((a._iNext = b),
            (a._iPrev = e),
            (b._iNext = d),
            (b._iPrev = a),
            e && (e._iNext = a),
            d && (d._iPrev = b),
            a.__renderGroup && a.__renderGroup.updateTexture(a),
            b.__renderGroup && b.__renderGroup.updateTexture(b),
            !0)
          : ((a._iNext = f),
            (a._iPrev = e),
            (b._iNext = d),
            (b._iPrev = c),
            c && (c._iNext = b),
            d && (d._iPrev = b),
            e && (e._iNext = a),
            f && (f._iPrev = a),
            a.__renderGroup && a.__renderGroup.updateTexture(a),
            b.__renderGroup && b.__renderGroup.updateTexture(b),
            !0);
      },
      bringToTop: function (a) {
        return a.group === this && (this.remove(a), this.add(a)), a;
      },
      getIndex: function (a) {
        return this._container.children.indexOf(a);
      },
      replace: function (a, b) {
        if (this._container.first._iNext) {
          var c = this.getIndex(a);
          -1 != c &&
            (void 0 !== b.parent &&
              (b.events.onRemovedFromGroup.dispatch(b, this),
              b.parent.removeChild(b)),
            this._container.removeChild(a),
            this._container.addChildAt(b, c),
            b.events.onAddedToGroup.dispatch(b, this),
            b.updateTransform(),
            this.cursor == a && (this.cursor = this._container._iNext));
        }
      },
      setProperty: function (a, b, c, d) {
        d = d || 0;
        var e = b.length;
        1 == e
          ? 0 === d
            ? (a[b[0]] = c)
            : 1 == d
            ? (a[b[0]] += c)
            : 2 == d
            ? (a[b[0]] -= c)
            : 3 == d
            ? (a[b[0]] *= c)
            : 4 == d && (a[b[0]] /= c)
          : 2 == e
          ? 0 === d
            ? (a[b[0]][b[1]] = c)
            : 1 == d
            ? (a[b[0]][b[1]] += c)
            : 2 == d
            ? (a[b[0]][b[1]] -= c)
            : 3 == d
            ? (a[b[0]][b[1]] *= c)
            : 4 == d && (a[b[0]][b[1]] /= c)
          : 3 == e
          ? 0 === d
            ? (a[b[0]][b[1]][b[2]] = c)
            : 1 == d
            ? (a[b[0]][b[1]][b[2]] += c)
            : 2 == d
            ? (a[b[0]][b[1]][b[2]] -= c)
            : 3 == d
            ? (a[b[0]][b[1]][b[2]] *= c)
            : 4 == d && (a[b[0]][b[1]][b[2]] /= c)
          : 4 == e &&
            (0 === d
              ? (a[b[0]][b[1]][b[2]][b[3]] = c)
              : 1 == d
              ? (a[b[0]][b[1]][b[2]][b[3]] += c)
              : 2 == d
              ? (a[b[0]][b[1]][b[2]][b[3]] -= c)
              : 3 == d
              ? (a[b[0]][b[1]][b[2]][b[3]] *= c)
              : 4 == d && (a[b[0]][b[1]][b[2]][b[3]] /= c));
      },
      setAll: function (a, b, c, d, e) {
        if (
          ((a = a.split(".")),
          "undefined" == typeof c && (c = !1),
          "undefined" == typeof d && (d = !1),
          (e = e || 0),
          this._container.children.length > 0 && this._container.first._iNext)
        ) {
          var f = this._container.first._iNext;
          do
            (c === !1 || (c && f.alive)) &&
              (d === !1 || (d && f.visible)) &&
              this.setProperty(f, a, b, e),
              (f = f._iNext);
          while (f != this._container.last._iNext);
        }
      },
      addAll: function (a, b, c, d) {
        this.setAll(a, b, c, d, 1);
      },
      subAll: function (a, b, c, d) {
        this.setAll(a, b, c, d, 2);
      },
      multiplyAll: function (a, b, c, d) {
        this.setAll(a, b, c, d, 3);
      },
      divideAll: function (a, b, c, d) {
        this.setAll(a, b, c, d, 4);
      },
      callAllExists: function (a, b) {
        var c = Array.prototype.splice.call(arguments, 2);
        if (
          this._container.children.length > 0 &&
          this._container.first._iNext
        ) {
          var d = this._container.first._iNext;
          do d.exists == b && d[a] && d[a].apply(d, c), (d = d._iNext);
          while (d != this._container.last._iNext);
        }
      },
      callbackFromArray: function (a, b, c) {
        if (1 == c) {
          if (a[b[0]]) return a[b[0]];
        } else if (2 == c) {
          if (a[b[0]][b[1]]) return a[b[0]][b[1]];
        } else if (3 == c) {
          if (a[b[0]][b[1]][b[2]]) return a[b[0]][b[1]][b[2]];
        } else if (4 == c) {
          if (a[b[0]][b[1]][b[2]][b[3]]) return a[b[0]][b[1]][b[2]][b[3]];
        } else if (a[b]) return a[b];
        return !1;
      },
      callAll: function (a, b) {
        if ("undefined" != typeof a) {
          a = a.split(".");
          var c = a.length;
          if ("undefined" == typeof b) b = null;
          else if ("string" == typeof b) {
            b = b.split(".");
            var d = b.length;
          }
          var e = Array.prototype.splice.call(arguments, 2),
            f = null,
            g = null;
          if (
            this._container.children.length > 0 &&
            this._container.first._iNext
          ) {
            var h = this._container.first._iNext;
            do
              (f = this.callbackFromArray(h, a, c)),
                b && f
                  ? ((g = this.callbackFromArray(h, b, d)), f && f.apply(g, e))
                  : f && f.apply(h, e),
                (h = h._iNext);
            while (h != this._container.last._iNext);
          }
        }
      },
      forEach: function (a, b, c) {
        "undefined" == typeof c && (c = !1);
        var d = Array.prototype.splice.call(arguments, 3);
        if (
          (d.unshift(null),
          this._container.children.length > 0 && this._container.first._iNext)
        ) {
          var e = this._container.first._iNext;
          do
            (c === !1 || (c && e.exists)) && ((d[0] = e), a.apply(b, d)),
              (e = e._iNext);
          while (e != this._container.last._iNext);
        }
      },
      forEachExists: function (a, b) {
        var c = Array.prototype.splice.call(arguments, 2);
        c.unshift(null),
          this.iterate("exists", !0, d.Group.RETURN_TOTAL, a, b, c);
      },
      forEachAlive: function (a, b) {
        var c = Array.prototype.splice.call(arguments, 2);
        c.unshift(null),
          this.iterate("alive", !0, d.Group.RETURN_TOTAL, a, b, c);
      },
      forEachDead: function (a, b) {
        var c = Array.prototype.splice.call(arguments, 2);
        c.unshift(null),
          this.iterate("alive", !1, d.Group.RETURN_TOTAL, a, b, c);
      },
      sort: function (a, b) {
        "undefined" == typeof a && (a = "y"),
          "undefined" == typeof b && (b = d.Group.SORT_ASCENDING);
        var c, e;
        do {
          c = !1;
          for (var f = 0, g = this._container.children.length - 1; g > f; f++)
            b == d.Group.SORT_ASCENDING
              ? this._container.children[f][a] >
                  this._container.children[f + 1][a] &&
                (this.swap(this.getAt(f), this.getAt(f + 1)),
                (e = this._container.children[f]),
                (this._container.children[f] = this._container.children[f + 1]),
                (this._container.children[f + 1] = e),
                (c = !0))
              : this._container.children[f][a] <
                  this._container.children[f + 1][a] &&
                (this.swap(this.getAt(f), this.getAt(f + 1)),
                (e = this._container.children[f]),
                (this._container.children[f] = this._container.children[f + 1]),
                (this._container.children[f + 1] = e),
                (c = !0));
        } while (c);
      },
      iterate: function (a, b, c, e, f, g) {
        if (c == d.Group.RETURN_TOTAL && 0 === this._container.children.length)
          return -1;
        "undefined" == typeof e && (e = !1);
        var h = 0;
        if (
          this._container.children.length > 0 &&
          this._container.first._iNext
        ) {
          var i = this._container.first._iNext;
          do {
            if (
              i[a] === b &&
              (h++, e && ((g[0] = i), e.apply(f, g)), c == d.Group.RETURN_CHILD)
            )
              return i;
            i = i._iNext;
          } while (i != this._container.last._iNext);
        }
        return c == d.Group.RETURN_TOTAL
          ? h
          : c == d.Group.RETURN_CHILD
          ? null
          : void 0;
      },
      getFirstExists: function (a) {
        return (
          "boolean" != typeof a && (a = !0),
          this.iterate("exists", a, d.Group.RETURN_CHILD)
        );
      },
      getFirstAlive: function () {
        return this.iterate("alive", !0, d.Group.RETURN_CHILD);
      },
      getFirstDead: function () {
        return this.iterate("alive", !1, d.Group.RETURN_CHILD);
      },
      countLiving: function () {
        return this.iterate("alive", !0, d.Group.RETURN_TOTAL);
      },
      countDead: function () {
        return this.iterate("alive", !1, d.Group.RETURN_TOTAL);
      },
      getRandom: function (a, b) {
        return 0 === this._container.children.length
          ? null
          : ((a = a || 0),
            (b = b || this._container.children.length),
            this.game.math.getRandom(this._container.children, a, b));
      },
      remove: function (a) {
        return a.group !== this
          ? !1
          : (a.events && a.events.onRemovedFromGroup.dispatch(a, this),
            a.parent === this._container && this._container.removeChild(a),
            this.cursor == a &&
              (this.cursor = this._container._iNext
                ? this._container._iNext
                : null),
            (a.group = null),
            !0);
      },
      removeAll: function () {
        if (0 !== this._container.children.length) {
          do
            this._container.children[0].events &&
              this._container.children[0].events.onRemovedFromGroup.dispatch(
                this._container.children[0],
                this
              ),
              this._container.removeChild(this._container.children[0]);
          while (this._container.children.length > 0);
          this.cursor = null;
        }
      },
      removeBetween: function (a, b) {
        if (0 !== this._container.children.length) {
          if (a > b || 0 > a || b > this._container.children.length) return !1;
          for (var c = a; b > c; c++) {
            var d = this._container.children[c];
            d.events.onRemovedFromGroup.dispatch(d, this),
              this._container.removeChild(d),
              this.cursor == d &&
                (this.cursor = this._container._iNext
                  ? this._container._iNext
                  : null);
          }
        }
      },
      destroy: function () {
        this.removeAll(),
          this._container.parent.removeChild(this._container),
          (this._container = null),
          (this.game = null),
          (this.exists = !1),
          (this.cursor = null);
      },
      validate: function () {
        var a = this.game.stage._stage.last._iNext,
          b = this.game.stage._stage,
          c = null,
          d = null,
          e = 0;
        do {
          if (e > 0) {
            if (b !== c) return console.log("check next fail"), !1;
            if (b._iPrev !== d) return console.log("check previous fail"), !1;
          }
          (c = b._iNext), (d = b), (b = b._iNext), e++;
        } while (b != a);
        return !0;
      },
      dump: function (a) {
        "undefined" == typeof a && (a = !1);
        var b = 20,
          c =
            "\n" +
            d.Utils.pad("Node", b) +
            "|" +
            d.Utils.pad("Next", b) +
            "|" +
            d.Utils.pad("Previous", b) +
            "|" +
            d.Utils.pad("First", b) +
            "|" +
            d.Utils.pad("Last", b);
        console.log(c);
        var c =
          d.Utils.pad("----------", b) +
          "|" +
          d.Utils.pad("----------", b) +
          "|" +
          d.Utils.pad("----------", b) +
          "|" +
          d.Utils.pad("----------", b) +
          "|" +
          d.Utils.pad("----------", b);
        if ((console.log(c), a))
          var e = this.game.stage._stage.last._iNext,
            f = this.game.stage._stage;
        else
          var e = this._container.last._iNext,
            f = this._container;
        do {
          var g = f.name || "*";
          if (this.cursor == f) var g = "> " + g;
          var h = "-",
            i = "-",
            j = "-",
            k = "-";
          f._iNext && (h = f._iNext.name),
            f._iPrev && (i = f._iPrev.name),
            f.first && (j = f.first.name),
            f.last && (k = f.last.name),
            "undefined" == typeof h && (h = "-"),
            "undefined" == typeof i && (i = "-"),
            "undefined" == typeof j && (j = "-"),
            "undefined" == typeof k && (k = "-");
          var c =
            d.Utils.pad(g, b) +
            "|" +
            d.Utils.pad(h, b) +
            "|" +
            d.Utils.pad(i, b) +
            "|" +
            d.Utils.pad(j, b) +
            "|" +
            d.Utils.pad(k, b);
          console.log(c), (f = f._iNext);
        } while (f != e);
      },
    }),
    Object.defineProperty(d.Group.prototype, "total", {
      get: function () {
        return this.iterate("exists", !0, d.Group.RETURN_TOTAL);
      },
    }),
    Object.defineProperty(d.Group.prototype, "length", {
      get: function () {
        return this.iterate("exists", !0, d.Group.RETURN_TOTAL);
      },
    }),
    Object.defineProperty(d.Group.prototype, "x", {
      get: function () {
        return this._container.position.x;
      },
      set: function (a) {
        this._container.position.x = a;
      },
    }),
    Object.defineProperty(d.Group.prototype, "y", {
      get: function () {
        return this._container.position.y;
      },
      set: function (a) {
        this._container.position.y = a;
      },
    }),
    Object.defineProperty(d.Group.prototype, "angle", {
      get: function () {
        return d.Math.radToDeg(this._container.rotation);
      },
      set: function (a) {
        this._container.rotation = d.Math.degToRad(a);
      },
    }),
    Object.defineProperty(d.Group.prototype, "rotation", {
      get: function () {
        return this._container.rotation;
      },
      set: function (a) {
        this._container.rotation = a;
      },
    }),
    Object.defineProperty(d.Group.prototype, "visible", {
      get: function () {
        return this._container.visible;
      },
      set: function (a) {
        this._container.visible = a;
      },
    }),
    Object.defineProperty(d.Group.prototype, "alpha", {
      get: function () {
        return this._container.alpha;
      },
      set: function (a) {
        this._container.alpha = a;
      },
    }),
    (d.World = function (a) {
      d.Group.call(this, a, null, "__world", !1),
        (this.scale = new d.Point(1, 1)),
        (this.bounds = new d.Rectangle(0, 0, a.width, a.height)),
        (this.camera = null),
        (this.currentRenderOrderID = 0);
    }),
    (d.World.prototype = Object.create(d.Group.prototype)),
    (d.World.prototype.constructor = d.World),
    (d.World.prototype.boot = function () {
      (this.camera = new d.Camera(
        this.game,
        0,
        0,
        0,
        this.game.width,
        this.game.height
      )),
        (this.camera.displayObject = this._container),
        (this.game.camera = this.camera);
    }),
    (d.World.prototype.update = function () {
      if (
        ((this.currentRenderOrderID = 0), this.game.stage._stage.first._iNext)
      ) {
        var a,
          b = this.game.stage._stage.first._iNext;
        do
          (a = !1),
            b.preUpdate && (a = b.preUpdate() === !1),
            b.update && (a = b.update() === !1 || a),
            (b = a ? b.last._iNext : b._iNext);
        while (b != this.game.stage._stage.last._iNext);
      }
    }),
    (d.World.prototype.postUpdate = function () {
      if (this.game.stage._stage.first._iNext) {
        var a = this.game.stage._stage.first._iNext;
        do a.postUpdate && a.postUpdate(), (a = a._iNext);
        while (a != this.game.stage._stage.last._iNext);
      }
      this.camera.update();
    }),
    (d.World.prototype.setBounds = function (a, b, c, d) {
      this.bounds.setTo(a, b, c, d),
        this.camera.bounds && this.camera.bounds.setTo(a, b, c, d);
    }),
    (d.World.prototype.destroy = function () {
      (this.camera.x = 0),
        (this.camera.y = 0),
        this.game.input.reset(!0),
        this.removeAll();
    }),
    Object.defineProperty(d.World.prototype, "width", {
      get: function () {
        return this.bounds.width;
      },
      set: function (a) {
        this.bounds.width = a;
      },
    }),
    Object.defineProperty(d.World.prototype, "height", {
      get: function () {
        return this.bounds.height;
      },
      set: function (a) {
        this.bounds.height = a;
      },
    }),
    Object.defineProperty(d.World.prototype, "centerX", {
      get: function () {
        return this.bounds.halfWidth;
      },
    }),
    Object.defineProperty(d.World.prototype, "centerY", {
      get: function () {
        return this.bounds.halfHeight;
      },
    }),
    Object.defineProperty(d.World.prototype, "randomX", {
      get: function () {
        return this.bounds.x < 0
          ? this.game.rnd.integerInRange(
              this.bounds.x,
              this.bounds.width - Math.abs(this.bounds.x)
            )
          : this.game.rnd.integerInRange(this.bounds.x, this.bounds.width);
      },
    }),
    Object.defineProperty(d.World.prototype, "randomY", {
      get: function () {
        return this.bounds.y < 0
          ? this.game.rnd.integerInRange(
              this.bounds.y,
              this.bounds.height - Math.abs(this.bounds.y)
            )
          : this.game.rnd.integerInRange(this.bounds.y, this.bounds.height);
      },
    }),
    Object.defineProperty(d.World.prototype, "visible", {
      get: function () {
        return this._container.visible;
      },
      set: function (a) {
        this._container.visible = a;
      },
    }),
    (d.Game = function (a, b, c, e, f, g, h) {
      (a = a || 800),
        (b = b || 600),
        (c = c || d.AUTO),
        (e = e || ""),
        (f = f || null),
        "undefined" == typeof g && (g = !1),
        "undefined" == typeof h && (h = !0),
        (this.id = d.GAMES.push(this) - 1),
        (this.parent = e),
        (this.width = a),
        (this.height = b),
        (this.transparent = g),
        (this.antialias = h),
        (this.renderer = null),
        (this.state = new d.StateManager(this, f)),
        (this._paused = !1),
        (this.renderType = c),
        (this._loadComplete = !1),
        (this.isBooted = !1),
        (this.isRunning = !1),
        (this.raf = null),
        (this.add = null),
        (this.cache = null),
        (this.input = null),
        (this.load = null),
        (this.math = null),
        (this.net = null),
        (this.sound = null),
        (this.stage = null),
        (this.time = null),
        (this.tweens = null),
        (this.world = null),
        (this.physics = null),
        (this.rnd = null),
        (this.device = null),
        (this.camera = null),
        (this.canvas = null),
        (this.context = null),
        (this.debug = null),
        (this.particles = null);
      var i = this;
      return (
        (this._onBoot = function () {
          return i.boot();
        }),
        "complete" === document.readyState ||
        "interactive" === document.readyState
          ? window.setTimeout(this._onBoot, 0)
          : (document.addEventListener("DOMContentLoaded", this._onBoot, !1),
            window.addEventListener("load", this._onBoot, !1)),
        this
      );
    }),
    (d.Game.prototype = {
      boot: function () {
        this.isBooted ||
          (document.body
            ? (document.removeEventListener("DOMContentLoaded", this._onBoot),
              window.removeEventListener("load", this._onBoot),
              (this.onPause = new d.Signal()),
              (this.onResume = new d.Signal()),
              (this.isBooted = !0),
              (this.device = new d.Device()),
              (this.math = d.Math),
              (this.rnd = new d.RandomDataGenerator([
                (Date.now() * Math.random()).toString(),
              ])),
              (this.stage = new d.Stage(this, this.width, this.height)),
              this.setUpRenderer(),
              (this.world = new d.World(this)),
              (this.add = new d.GameObjectFactory(this)),
              (this.cache = new d.Cache(this)),
              (this.load = new d.Loader(this)),
              (this.time = new d.Time(this)),
              (this.tweens = new d.TweenManager(this)),
              (this.input = new d.Input(this)),
              (this.sound = new d.SoundManager(this)),
              (this.physics = new d.Physics.Arcade(this)),
              (this.particles = new d.Particles(this)),
              (this.plugins = new d.PluginManager(this, this)),
              (this.net = new d.Net(this)),
              (this.debug = new d.Utils.Debug(this)),
              this.stage.boot(),
              this.world.boot(),
              this.input.boot(),
              this.sound.boot(),
              this.state.boot(),
              this.load.onLoadComplete.add(this.loadComplete, this),
              this.showDebugHeader(),
              (this.isRunning = !0),
              (this._loadComplete = !1),
              (this.raf = new d.RequestAnimationFrame(this)),
              this.raf.start())
            : window.setTimeout(this._onBoot, 20));
      },
      showDebugHeader: function () {
        var a = d.DEV_VERSION,
          b = "Canvas",
          c = "HTML Audio";
        if (
          (this.renderType == d.WEBGL
            ? (b = "WebGL")
            : this.renderType == d.HEADLESS && (b = "Headless"),
          this.device.webAudio && (c = "WebAudio"),
          this.device.chrome)
        ) {
          var e = [
            "%c %c %c  Phaser v" +
              a +
              " - Renderer: " +
              b +
              " - Audio: " +
              c +
              "  %c %c ",
            "background: #00bff3",
            "background: #0072bc",
            "color: #ffffff; background: #003471",
            "background: #0072bc",
            "background: #00bff3",
          ];
          console.log.apply(console, e);
        } else
          console.log("Phaser v" + a + " - Renderer: " + b + " - Audio: " + c);
      },
      setUpRenderer: function () {
        if (
          this.renderType === d.HEADLESS ||
          this.renderType === d.CANVAS ||
          (this.renderType === d.AUTO && this.device.webGL === !1)
        ) {
          if (!this.device.canvas)
            throw new Error(
              "Phaser.Game - cannot create Canvas or WebGL context, aborting."
            );
          this.renderType === d.AUTO && (this.renderType = d.CANVAS),
            (this.renderer = new c.CanvasRenderer(
              this.width,
              this.height,
              this.stage.canvas,
              this.transparent
            )),
            d.Canvas.setSmoothingEnabled(this.renderer.context, this.antialias),
            (this.canvas = this.renderer.view),
            (this.context = this.renderer.context);
        } else
          (this.renderType = d.WEBGL),
            (this.renderer = new c.WebGLRenderer(
              this.width,
              this.height,
              this.stage.canvas,
              this.transparent,
              this.antialias
            )),
            (this.canvas = this.renderer.view),
            (this.context = null);
        d.Canvas.addToDOM(this.renderer.view, this.parent, !0),
          d.Canvas.setTouchAction(this.renderer.view);
      },
      loadComplete: function () {
        (this._loadComplete = !0), this.state.loadComplete();
      },
      update: function (a) {
        this.time.update(a),
          this._paused
            ? (this.renderer.render(this.stage._stage),
              this.plugins.render(),
              this.state.render())
            : (this.plugins.preUpdate(),
              this.physics.preUpdate(),
              this.stage.update(),
              this.input.update(),
              this.tweens.update(),
              this.sound.update(),
              this.world.update(),
              this.particles.update(),
              this.state.update(),
              this.plugins.update(),
              this.world.postUpdate(),
              this.plugins.postUpdate(),
              this.renderType !== d.HEADLESS &&
                (this.renderer.render(this.stage._stage),
                this.plugins.render(),
                this.state.render(),
                this.plugins.postRender()));
      },
      destroy: function () {
        this.raf.stop(),
          this.input.destroy(),
          this.state.destroy(),
          (this.state = null),
          (this.cache = null),
          (this.input = null),
          (this.load = null),
          (this.sound = null),
          (this.stage = null),
          (this.time = null),
          (this.world = null),
          (this.isBooted = !1);
      },
    }),
    Object.defineProperty(d.Game.prototype, "paused", {
      get: function () {
        return this._paused;
      },
      set: function (a) {
        a === !0
          ? this._paused === !1 &&
            ((this._paused = !0), this.onPause.dispatch(this))
          : this._paused && ((this._paused = !1), this.onResume.dispatch(this));
      },
    }),
    (d.Input = function (a) {
      (this.game = a), (this.hitCanvas = null), (this.hitContext = null);
    }),
    (d.Input.MOUSE_OVERRIDES_TOUCH = 0),
    (d.Input.TOUCH_OVERRIDES_MOUSE = 1),
    (d.Input.MOUSE_TOUCH_COMBINE = 2),
    (d.Input.prototype = {
      pollRate: 0,
      _pollCounter: 0,
      _oldPosition: null,
      _x: 0,
      _y: 0,
      disabled: !1,
      multiInputOverride: d.Input.MOUSE_TOUCH_COMBINE,
      position: null,
      speed: null,
      circle: null,
      scale: null,
      maxPointers: 10,
      currentPointers: 0,
      tapRate: 200,
      doubleTapRate: 300,
      holdRate: 2e3,
      justPressedRate: 200,
      justReleasedRate: 200,
      recordPointerHistory: !1,
      recordRate: 100,
      recordLimit: 100,
      pointer1: null,
      pointer2: null,
      pointer3: null,
      pointer4: null,
      pointer5: null,
      pointer6: null,
      pointer7: null,
      pointer8: null,
      pointer9: null,
      pointer10: null,
      activePointer: null,
      mousePointer: null,
      mouse: null,
      keyboard: null,
      touch: null,
      mspointer: null,
      onDown: null,
      onUp: null,
      onTap: null,
      onHold: null,
      interactiveItems: new d.LinkedList(),
      boot: function () {
        (this.mousePointer = new d.Pointer(this.game, 0)),
          (this.pointer1 = new d.Pointer(this.game, 1)),
          (this.pointer2 = new d.Pointer(this.game, 2)),
          (this.mouse = new d.Mouse(this.game)),
          (this.keyboard = new d.Keyboard(this.game)),
          (this.touch = new d.Touch(this.game)),
          (this.mspointer = new d.MSPointer(this.game)),
          (this.onDown = new d.Signal()),
          (this.onUp = new d.Signal()),
          (this.onTap = new d.Signal()),
          (this.onHold = new d.Signal()),
          (this.scale = new d.Point(1, 1)),
          (this.speed = new d.Point()),
          (this.position = new d.Point()),
          (this._oldPosition = new d.Point()),
          (this.circle = new d.Circle(0, 0, 44)),
          (this.activePointer = this.mousePointer),
          (this.currentPointers = 0),
          (this.hitCanvas = document.createElement("canvas")),
          (this.hitCanvas.width = 1),
          (this.hitCanvas.height = 1),
          (this.hitContext = this.hitCanvas.getContext("2d")),
          this.mouse.start(),
          this.keyboard.start(),
          this.touch.start(),
          this.mspointer.start(),
          (this.mousePointer.active = !0);
      },
      destroy: function () {
        this.mouse.stop(),
          this.keyboard.stop(),
          this.touch.stop(),
          this.mspointer.stop();
      },
      addPointer: function () {
        for (var a = 0, b = 10; b > 0; b--)
          null === this["pointer" + b] && (a = b);
        return 0 === a
          ? (console.warn("You can only have 10 Pointer objects"), null)
          : ((this["pointer" + a] = new d.Pointer(this.game, a)),
            this["pointer" + a]);
      },
      update: function () {
        return this.pollRate > 0 && this._pollCounter < this.pollRate
          ? (this._pollCounter++, void 0)
          : ((this.speed.x = this.position.x - this._oldPosition.x),
            (this.speed.y = this.position.y - this._oldPosition.y),
            this._oldPosition.copyFrom(this.position),
            this.mousePointer.update(),
            this.pointer1.update(),
            this.pointer2.update(),
            this.pointer3 && this.pointer3.update(),
            this.pointer4 && this.pointer4.update(),
            this.pointer5 && this.pointer5.update(),
            this.pointer6 && this.pointer6.update(),
            this.pointer7 && this.pointer7.update(),
            this.pointer8 && this.pointer8.update(),
            this.pointer9 && this.pointer9.update(),
            this.pointer10 && this.pointer10.update(),
            (this._pollCounter = 0),
            void 0);
      },
      reset: function (a) {
        if (this.game.isBooted !== !1) {
          "undefined" == typeof a && (a = !1),
            this.keyboard.reset(),
            this.mousePointer.reset();
          for (var b = 1; 10 >= b; b++)
            this["pointer" + b] && this["pointer" + b].reset();
          (this.currentPointers = 0),
            (this.game.stage.canvas.style.cursor = "default"),
            a === !0 &&
              (this.onDown.dispose(),
              this.onUp.dispose(),
              this.onTap.dispose(),
              this.onHold.dispose(),
              (this.onDown = new d.Signal()),
              (this.onUp = new d.Signal()),
              (this.onTap = new d.Signal()),
              (this.onHold = new d.Signal()),
              this.interactiveItems.callAll("reset")),
            (this._pollCounter = 0);
        }
      },
      resetSpeed: function (a, b) {
        this._oldPosition.setTo(a, b), this.speed.setTo(0, 0);
      },
      startPointer: function (a) {
        if (
          this.maxPointers < 10 &&
          this.totalActivePointers == this.maxPointers
        )
          return null;
        if (this.pointer1.active === !1) return this.pointer1.start(a);
        if (this.pointer2.active === !1) return this.pointer2.start(a);
        for (var b = 3; 10 >= b; b++)
          if (this["pointer" + b] && this["pointer" + b].active === !1)
            return this["pointer" + b].start(a);
        return null;
      },
      updatePointer: function (a) {
        if (this.pointer1.active && this.pointer1.identifier == a.identifier)
          return this.pointer1.move(a);
        if (this.pointer2.active && this.pointer2.identifier == a.identifier)
          return this.pointer2.move(a);
        for (var b = 3; 10 >= b; b++)
          if (
            this["pointer" + b] &&
            this["pointer" + b].active &&
            this["pointer" + b].identifier == a.identifier
          )
            return this["pointer" + b].move(a);
        return null;
      },
      stopPointer: function (a) {
        if (this.pointer1.active && this.pointer1.identifier == a.identifier)
          return this.pointer1.stop(a);
        if (this.pointer2.active && this.pointer2.identifier == a.identifier)
          return this.pointer2.stop(a);
        for (var b = 3; 10 >= b; b++)
          if (
            this["pointer" + b] &&
            this["pointer" + b].active &&
            this["pointer" + b].identifier == a.identifier
          )
            return this["pointer" + b].stop(a);
        return null;
      },
      getPointer: function (a) {
        if (((a = a || !1), this.pointer1.active == a)) return this.pointer1;
        if (this.pointer2.active == a) return this.pointer2;
        for (var b = 3; 10 >= b; b++)
          if (this["pointer" + b] && this["pointer" + b].active == a)
            return this["pointer" + b];
        return null;
      },
      getPointerFromIdentifier: function (a) {
        if (this.pointer1.identifier == a) return this.pointer1;
        if (this.pointer2.identifier == a) return this.pointer2;
        for (var b = 3; 10 >= b; b++)
          if (this["pointer" + b] && this["pointer" + b].identifier == a)
            return this["pointer" + b];
        return null;
      },
    }),
    Object.defineProperty(d.Input.prototype, "x", {
      get: function () {
        return this._x;
      },
      set: function (a) {
        this._x = Math.floor(a);
      },
    }),
    Object.defineProperty(d.Input.prototype, "y", {
      get: function () {
        return this._y;
      },
      set: function (a) {
        this._y = Math.floor(a);
      },
    }),
    Object.defineProperty(d.Input.prototype, "pollLocked", {
      get: function () {
        return this.pollRate > 0 && this._pollCounter < this.pollRate;
      },
    }),
    Object.defineProperty(d.Input.prototype, "totalInactivePointers", {
      get: function () {
        return 10 - this.currentPointers;
      },
    }),
    Object.defineProperty(d.Input.prototype, "totalActivePointers", {
      get: function () {
        this.currentPointers = 0;
        for (var a = 1; 10 >= a; a++)
          this["pointer" + a] &&
            this["pointer" + a].active &&
            this.currentPointers++;
        return this.currentPointers;
      },
    }),
    Object.defineProperty(d.Input.prototype, "worldX", {
      get: function () {
        return this.game.camera.view.x + this.x;
      },
    }),
    Object.defineProperty(d.Input.prototype, "worldY", {
      get: function () {
        return this.game.camera.view.y + this.y;
      },
    }),
    (d.Key = function (a, b) {
      (this.game = a),
        (this.isDown = !1),
        (this.isUp = !1),
        (this.altKey = !1),
        (this.ctrlKey = !1),
        (this.shiftKey = !1),
        (this.timeDown = 0),
        (this.duration = 0),
        (this.timeUp = 0),
        (this.repeats = 0),
        (this.keyCode = b),
        (this.onDown = new d.Signal()),
        (this.onUp = new d.Signal());
    }),
    (d.Key.prototype = {
      processKeyDown: function (a) {
        (this.altKey = a.altKey),
          (this.ctrlKey = a.ctrlKey),
          (this.shiftKey = a.shiftKey),
          this.isDown
            ? ((this.duration = a.timeStamp - this.timeDown), this.repeats++)
            : ((this.isDown = !0),
              (this.isUp = !1),
              (this.timeDown = a.timeStamp),
              (this.duration = 0),
              (this.repeats = 0),
              this.onDown.dispatch(this));
      },
      processKeyUp: function (a) {
        (this.isDown = !1),
          (this.isUp = !0),
          (this.timeUp = a.timeStamp),
          this.onUp.dispatch(this);
      },
      justPressed: function (a) {
        return (
          "undefined" == typeof a && (a = 250), this.isDown && this.duration < a
        );
      },
      justReleased: function (a) {
        return (
          "undefined" == typeof a && (a = 250),
          this.isDown === !1 && this.game.time.now - this.timeUp < a
        );
      },
    }),
    (d.Keyboard = function (a) {
      (this.game = a),
        (this._keys = {}),
        (this._hotkeys = {}),
        (this._capture = {}),
        (this.disabled = !1),
        (this._onKeyDown = null),
        (this._onKeyUp = null),
        (this.callbackContext = this),
        (this.onDownCallback = null),
        (this.onUpCallback = null);
    }),
    (d.Keyboard.prototype = {
      addCallbacks: function (a, b, c) {
        (this.callbackContext = a),
          (this.onDownCallback = b),
          "undefined" != typeof c && (this.onUpCallback = c);
      },
      addKey: function (a) {
        return (
          (this._hotkeys[a] = new d.Key(this.game, a)),
          this.addKeyCapture(a),
          this._hotkeys[a]
        );
      },
      removeKey: function (a) {
        delete this._hotkeys[a];
      },
      createCursorKeys: function () {
        return {
          up: this.addKey(d.Keyboard.UP),
          down: this.addKey(d.Keyboard.DOWN),
          left: this.addKey(d.Keyboard.LEFT),
          right: this.addKey(d.Keyboard.RIGHT),
        };
      },
      start: function () {
        var a = this;
        (this._onKeyDown = function (b) {
          return a.processKeyDown(b);
        }),
          (this._onKeyUp = function (b) {
            return a.processKeyUp(b);
          }),
          window.addEventListener("keydown", this._onKeyDown, !1),
          window.addEventListener("keyup", this._onKeyUp, !1);
      },
      stop: function () {
        window.removeEventListener("keydown", this._onKeyDown),
          window.removeEventListener("keyup", this._onKeyUp);
      },
      addKeyCapture: function (a) {
        if ("object" == typeof a) for (var b in a) this._capture[a[b]] = !0;
        else this._capture[a] = !0;
      },
      removeKeyCapture: function (a) {
        delete this._capture[a];
      },
      clearCaptures: function () {
        this._capture = {};
      },
      processKeyDown: function (a) {
        this.game.input.disabled ||
          this.disabled ||
          (this._capture[a.keyCode] && a.preventDefault(),
          this.onDownCallback &&
            this.onDownCallback.call(this.callbackContext, a),
          this._keys[a.keyCode] && this._keys[a.keyCode].isDown
            ? (this._keys[a.keyCode].duration =
                this.game.time.now - this._keys[a.keyCode].timeDown)
            : this._keys[a.keyCode]
            ? ((this._keys[a.keyCode].isDown = !0),
              (this._keys[a.keyCode].timeDown = this.game.time.now),
              (this._keys[a.keyCode].duration = 0))
            : (this._keys[a.keyCode] = {
                isDown: !0,
                timeDown: this.game.time.now,
                timeUp: 0,
                duration: 0,
              }),
          this._hotkeys[a.keyCode] &&
            this._hotkeys[a.keyCode].processKeyDown(a));
      },
      processKeyUp: function (a) {
        this.game.input.disabled ||
          this.disabled ||
          (this._capture[a.keyCode] && a.preventDefault(),
          this.onUpCallback && this.onUpCallback.call(this.callbackContext, a),
          this._hotkeys[a.keyCode] && this._hotkeys[a.keyCode].processKeyUp(a),
          this._keys[a.keyCode]
            ? ((this._keys[a.keyCode].isDown = !1),
              (this._keys[a.keyCode].timeUp = this.game.time.now))
            : (this._keys[a.keyCode] = {
                isDown: !1,
                timeDown: this.game.time.now,
                timeUp: this.game.time.now,
                duration: 0,
              }));
      },
      reset: function () {
        for (var a in this._keys) this._keys[a].isDown = !1;
      },
      justPressed: function (a, b) {
        return (
          "undefined" == typeof b && (b = 250),
          this._keys[a] && this._keys[a].isDown && this._keys[a].duration < b
            ? !0
            : !1
        );
      },
      justReleased: function (a, b) {
        return (
          "undefined" == typeof b && (b = 250),
          this._keys[a] &&
          this._keys[a].isDown === !1 &&
          this.game.time.now - this._keys[a].timeUp < b
            ? !0
            : !1
        );
      },
      isDown: function (a) {
        return this._keys[a] ? this._keys[a].isDown : !1;
      },
    }),
    (d.Keyboard.A = "A".charCodeAt(0)),
    (d.Keyboard.B = "B".charCodeAt(0)),
    (d.Keyboard.C = "C".charCodeAt(0)),
    (d.Keyboard.D = "D".charCodeAt(0)),
    (d.Keyboard.E = "E".charCodeAt(0)),
    (d.Keyboard.F = "F".charCodeAt(0)),
    (d.Keyboard.G = "G".charCodeAt(0)),
    (d.Keyboard.H = "H".charCodeAt(0)),
    (d.Keyboard.I = "I".charCodeAt(0)),
    (d.Keyboard.J = "J".charCodeAt(0)),
    (d.Keyboard.K = "K".charCodeAt(0)),
    (d.Keyboard.L = "L".charCodeAt(0)),
    (d.Keyboard.M = "M".charCodeAt(0)),
    (d.Keyboard.N = "N".charCodeAt(0)),
    (d.Keyboard.O = "O".charCodeAt(0)),
    (d.Keyboard.P = "P".charCodeAt(0)),
    (d.Keyboard.Q = "Q".charCodeAt(0)),
    (d.Keyboard.R = "R".charCodeAt(0)),
    (d.Keyboard.S = "S".charCodeAt(0)),
    (d.Keyboard.T = "T".charCodeAt(0)),
    (d.Keyboard.U = "U".charCodeAt(0)),
    (d.Keyboard.V = "V".charCodeAt(0)),
    (d.Keyboard.W = "W".charCodeAt(0)),
    (d.Keyboard.X = "X".charCodeAt(0)),
    (d.Keyboard.Y = "Y".charCodeAt(0)),
    (d.Keyboard.Z = "Z".charCodeAt(0)),
    (d.Keyboard.ZERO = "0".charCodeAt(0)),
    (d.Keyboard.ONE = "1".charCodeAt(0)),
    (d.Keyboard.TWO = "2".charCodeAt(0)),
    (d.Keyboard.THREE = "3".charCodeAt(0)),
    (d.Keyboard.FOUR = "4".charCodeAt(0)),
    (d.Keyboard.FIVE = "5".charCodeAt(0)),
    (d.Keyboard.SIX = "6".charCodeAt(0)),
    (d.Keyboard.SEVEN = "7".charCodeAt(0)),
    (d.Keyboard.EIGHT = "8".charCodeAt(0)),
    (d.Keyboard.NINE = "9".charCodeAt(0)),
    (d.Keyboard.NUMPAD_0 = 96),
    (d.Keyboard.NUMPAD_1 = 97),
    (d.Keyboard.NUMPAD_2 = 98),
    (d.Keyboard.NUMPAD_3 = 99),
    (d.Keyboard.NUMPAD_4 = 100),
    (d.Keyboard.NUMPAD_5 = 101),
    (d.Keyboard.NUMPAD_6 = 102),
    (d.Keyboard.NUMPAD_7 = 103),
    (d.Keyboard.NUMPAD_8 = 104),
    (d.Keyboard.NUMPAD_9 = 105),
    (d.Keyboard.NUMPAD_MULTIPLY = 106),
    (d.Keyboard.NUMPAD_ADD = 107),
    (d.Keyboard.NUMPAD_ENTER = 108),
    (d.Keyboard.NUMPAD_SUBTRACT = 109),
    (d.Keyboard.NUMPAD_DECIMAL = 110),
    (d.Keyboard.NUMPAD_DIVIDE = 111),
    (d.Keyboard.F1 = 112),
    (d.Keyboard.F2 = 113),
    (d.Keyboard.F3 = 114),
    (d.Keyboard.F4 = 115),
    (d.Keyboard.F5 = 116),
    (d.Keyboard.F6 = 117),
    (d.Keyboard.F7 = 118),
    (d.Keyboard.F8 = 119),
    (d.Keyboard.F9 = 120),
    (d.Keyboard.F10 = 121),
    (d.Keyboard.F11 = 122),
    (d.Keyboard.F12 = 123),
    (d.Keyboard.F13 = 124),
    (d.Keyboard.F14 = 125),
    (d.Keyboard.F15 = 126),
    (d.Keyboard.COLON = 186),
    (d.Keyboard.EQUALS = 187),
    (d.Keyboard.UNDERSCORE = 189),
    (d.Keyboard.QUESTION_MARK = 191),
    (d.Keyboard.TILDE = 192),
    (d.Keyboard.OPEN_BRACKET = 219),
    (d.Keyboard.BACKWARD_SLASH = 220),
    (d.Keyboard.CLOSED_BRACKET = 221),
    (d.Keyboard.QUOTES = 222),
    (d.Keyboard.BACKSPACE = 8),
    (d.Keyboard.TAB = 9),
    (d.Keyboard.CLEAR = 12),
    (d.Keyboard.ENTER = 13),
    (d.Keyboard.SHIFT = 16),
    (d.Keyboard.CONTROL = 17),
    (d.Keyboard.ALT = 18),
    (d.Keyboard.CAPS_LOCK = 20),
    (d.Keyboard.ESC = 27),
    (d.Keyboard.SPACEBAR = 32),
    (d.Keyboard.PAGE_UP = 33),
    (d.Keyboard.PAGE_DOWN = 34),
    (d.Keyboard.END = 35),
    (d.Keyboard.HOME = 36),
    (d.Keyboard.LEFT = 37),
    (d.Keyboard.UP = 38),
    (d.Keyboard.RIGHT = 39),
    (d.Keyboard.DOWN = 40),
    (d.Keyboard.INSERT = 45),
    (d.Keyboard.DELETE = 46),
    (d.Keyboard.HELP = 47),
    (d.Keyboard.NUM_LOCK = 144),
    (d.Mouse = function (a) {
      (this.game = a),
        (this.callbackContext = this.game),
        (this.mouseDownCallback = null),
        (this.mouseMoveCallback = null),
        (this.mouseUpCallback = null),
        (this.capture = !1),
        (this.button = -1),
        (this.disabled = !1),
        (this.locked = !1),
        (this.pointerLock = new d.Signal()),
        (this.event = null),
        (this._onMouseDown = null),
        (this._onMouseMove = null),
        (this._onMouseUp = null);
    }),
    (d.Mouse.NO_BUTTON = -1),
    (d.Mouse.LEFT_BUTTON = 0),
    (d.Mouse.MIDDLE_BUTTON = 1),
    (d.Mouse.RIGHT_BUTTON = 2),
    (d.Mouse.prototype = {
      start: function () {
        var a = this;
        (this.game.device.android && this.game.device.chrome === !1) ||
          ((this._onMouseDown = function (b) {
            return a.onMouseDown(b);
          }),
          (this._onMouseMove = function (b) {
            return a.onMouseMove(b);
          }),
          (this._onMouseUp = function (b) {
            return a.onMouseUp(b);
          }),
          document.addEventListener("mousedown", this._onMouseDown, !0),
          document.addEventListener("mousemove", this._onMouseMove, !0),
          document.addEventListener("mouseup", this._onMouseUp, !0));
      },
      onMouseDown: function (a) {
        (this.event = a),
          this.capture && a.preventDefault(),
          (this.button = a.which),
          this.mouseDownCallback &&
            this.mouseDownCallback.call(this.callbackContext, a),
          this.game.input.disabled ||
            this.disabled ||
            ((a.identifier = 0), this.game.input.mousePointer.start(a));
      },
      onMouseMove: function (a) {
        (this.event = a),
          this.capture && a.preventDefault(),
          this.mouseMoveCallback &&
            this.mouseMoveCallback.call(this.callbackContext, a),
          this.game.input.disabled ||
            this.disabled ||
            ((a.identifier = 0), this.game.input.mousePointer.move(a));
      },
      onMouseUp: function (a) {
        (this.event = a),
          this.capture && a.preventDefault(),
          (this.button = d.Mouse.NO_BUTTON),
          this.mouseUpCallback &&
            this.mouseUpCallback.call(this.callbackContext, a),
          this.game.input.disabled ||
            this.disabled ||
            ((a.identifier = 0), this.game.input.mousePointer.stop(a));
      },
      requestPointerLock: function () {
        if (this.game.device.pointerLock) {
          var a = this.game.stage.canvas;
          (a.requestPointerLock =
            a.requestPointerLock ||
            a.mozRequestPointerLock ||
            a.webkitRequestPointerLock),
            a.requestPointerLock();
          var b = this;
          (this._pointerLockChange = function (a) {
            return b.pointerLockChange(a);
          }),
            document.addEventListener(
              "pointerlockchange",
              this._pointerLockChange,
              !0
            ),
            document.addEventListener(
              "mozpointerlockchange",
              this._pointerLockChange,
              !0
            ),
            document.addEventListener(
              "webkitpointerlockchange",
              this._pointerLockChange,
              !0
            );
        }
      },
      pointerLockChange: function (a) {
        var b = this.game.stage.canvas;
        document.pointerLockElement === b ||
        document.mozPointerLockElement === b ||
        document.webkitPointerLockElement === b
          ? ((this.locked = !0), this.pointerLock.dispatch(!0, a))
          : ((this.locked = !1), this.pointerLock.dispatch(!1, a));
      },
      releasePointerLock: function () {
        (document.exitPointerLock =
          document.exitPointerLock ||
          document.mozExitPointerLock ||
          document.webkitExitPointerLock),
          document.exitPointerLock(),
          document.removeEventListener(
            "pointerlockchange",
            this._pointerLockChange,
            !0
          ),
          document.removeEventListener(
            "mozpointerlockchange",
            this._pointerLockChange,
            !0
          ),
          document.removeEventListener(
            "webkitpointerlockchange",
            this._pointerLockChange,
            !0
          );
      },
      stop: function () {
        document.removeEventListener("mousedown", this._onMouseDown, !0),
          document.removeEventListener("mousemove", this._onMouseMove, !0),
          document.removeEventListener("mouseup", this._onMouseUp, !0);
      },
    }),
    (d.MSPointer = function (a) {
      (this.game = a),
        (this.callbackContext = this.game),
        (this.disabled = !1),
        (this._onMSPointerDown = null),
        (this._onMSPointerMove = null),
        (this._onMSPointerUp = null);
    }),
    (d.MSPointer.prototype = {
      start: function () {
        var a = this;
        this.game.device.mspointer === !0 &&
          ((this._onMSPointerDown = function (b) {
            return a.onPointerDown(b);
          }),
          (this._onMSPointerMove = function (b) {
            return a.onPointerMove(b);
          }),
          (this._onMSPointerUp = function (b) {
            return a.onPointerUp(b);
          }),
          this.game.renderer.view.addEventListener(
            "MSPointerDown",
            this._onMSPointerDown,
            !1
          ),
          this.game.renderer.view.addEventListener(
            "MSPointerMove",
            this._onMSPointerMove,
            !1
          ),
          this.game.renderer.view.addEventListener(
            "MSPointerUp",
            this._onMSPointerUp,
            !1
          ),
          this.game.renderer.view.addEventListener(
            "pointerDown",
            this._onMSPointerDown,
            !1
          ),
          this.game.renderer.view.addEventListener(
            "pointerMove",
            this._onMSPointerMove,
            !1
          ),
          this.game.renderer.view.addEventListener(
            "pointerUp",
            this._onMSPointerUp,
            !1
          ),
          (this.game.renderer.view.style["-ms-content-zooming"] = "none"),
          (this.game.renderer.view.style["-ms-touch-action"] = "none"));
      },
      onPointerDown: function (a) {
        this.game.input.disabled ||
          this.disabled ||
          (a.preventDefault(),
          (a.identifier = a.pointerId),
          this.game.input.startPointer(a));
      },
      onPointerMove: function (a) {
        this.game.input.disabled ||
          this.disabled ||
          (a.preventDefault(),
          (a.identifier = a.pointerId),
          this.game.input.updatePointer(a));
      },
      onPointerUp: function (a) {
        this.game.input.disabled ||
          this.disabled ||
          (a.preventDefault(),
          (a.identifier = a.pointerId),
          this.game.input.stopPointer(a));
      },
      stop: function () {
        this.game.stage.canvas.removeEventListener(
          "MSPointerDown",
          this._onMSPointerDown
        ),
          this.game.stage.canvas.removeEventListener(
            "MSPointerMove",
            this._onMSPointerMove
          ),
          this.game.stage.canvas.removeEventListener(
            "MSPointerUp",
            this._onMSPointerUp
          ),
          this.game.stage.canvas.removeEventListener(
            "pointerDown",
            this._onMSPointerDown
          ),
          this.game.stage.canvas.removeEventListener(
            "pointerMove",
            this._onMSPointerMove
          ),
          this.game.stage.canvas.removeEventListener(
            "pointerUp",
            this._onMSPointerUp
          );
      },
    }),
    (d.Pointer = function (a, b) {
      (this.game = a),
        (this.id = b),
        (this._holdSent = !1),
        (this._history = []),
        (this._nextDrop = 0),
        (this._stateReset = !1),
        (this.withinGame = !1),
        (this.clientX = -1),
        (this.clientY = -1),
        (this.pageX = -1),
        (this.pageY = -1),
        (this.screenX = -1),
        (this.screenY = -1),
        (this.x = -1),
        (this.y = -1),
        (this.isMouse = !1),
        (this.isDown = !1),
        (this.isUp = !0),
        (this.timeDown = 0),
        (this.timeUp = 0),
        (this.previousTapTime = 0),
        (this.totalTouches = 0),
        (this.msSinceLastClick = Number.MAX_VALUE),
        (this.targetObject = null),
        (this.active = !1),
        (this.position = new d.Point()),
        (this.positionDown = new d.Point()),
        (this.circle = new d.Circle(0, 0, 44)),
        0 === b && (this.isMouse = !0);
    }),
    (d.Pointer.prototype = {
      start: function (a) {
        return (
          (this.identifier = a.identifier),
          (this.target = a.target),
          "undefined" != typeof a.button && (this.button = a.button),
          this.game.paused === !0 &&
          this.game.stage.scale.incorrectOrientation === !1
            ? ((this.game.paused = !1), this)
            : ((this._history.length = 0),
              (this.active = !0),
              (this.withinGame = !0),
              (this.isDown = !0),
              (this.isUp = !1),
              (this.msSinceLastClick = this.game.time.now - this.timeDown),
              (this.timeDown = this.game.time.now),
              (this._holdSent = !1),
              this.move(a),
              this.positionDown.setTo(this.x, this.y),
              (this.game.input.multiInputOverride ==
                d.Input.MOUSE_OVERRIDES_TOUCH ||
                this.game.input.multiInputOverride ==
                  d.Input.MOUSE_TOUCH_COMBINE ||
                (this.game.input.multiInputOverride ==
                  d.Input.TOUCH_OVERRIDES_MOUSE &&
                  0 === this.game.input.currentPointers)) &&
                ((this.game.input.x = this.x),
                (this.game.input.y = this.y),
                this.game.input.position.setTo(this.x, this.y),
                this.game.input.onDown.dispatch(this, a),
                this.game.input.resetSpeed(this.x, this.y)),
              (this._stateReset = !1),
              this.totalTouches++,
              this.isMouse === !1 && this.game.input.currentPointers++,
              null !== this.targetObject &&
                this.targetObject._touchedHandler(this),
              this)
        );
      },
      update: function () {
        this.active &&
          (this._holdSent === !1 &&
            this.duration >= this.game.input.holdRate &&
            ((this.game.input.multiInputOverride ==
              d.Input.MOUSE_OVERRIDES_TOUCH ||
              this.game.input.multiInputOverride ==
                d.Input.MOUSE_TOUCH_COMBINE ||
              (this.game.input.multiInputOverride ==
                d.Input.TOUCH_OVERRIDES_MOUSE &&
                0 === this.game.input.currentPointers)) &&
              this.game.input.onHold.dispatch(this),
            (this._holdSent = !0)),
          this.game.input.recordPointerHistory &&
            this.game.time.now >= this._nextDrop &&
            ((this._nextDrop = this.game.time.now + this.game.input.recordRate),
            this._history.push({ x: this.position.x, y: this.position.y }),
            this._history.length > this.game.input.recordLimit &&
              this._history.shift()));
      },
      move: function (a) {
        if (!this.game.input.pollLocked) {
          if (
            ("undefined" != typeof a.button && (this.button = a.button),
            (this.clientX = a.clientX),
            (this.clientY = a.clientY),
            (this.pageX = a.pageX),
            (this.pageY = a.pageY),
            (this.screenX = a.screenX),
            (this.screenY = a.screenY),
            (this.x =
              (this.pageX - this.game.stage.offset.x) *
              this.game.input.scale.x),
            (this.y =
              (this.pageY - this.game.stage.offset.y) *
              this.game.input.scale.y),
            this.position.setTo(this.x, this.y),
            (this.circle.x = this.x),
            (this.circle.y = this.y),
            (this.game.input.multiInputOverride ==
              d.Input.MOUSE_OVERRIDES_TOUCH ||
              this.game.input.multiInputOverride ==
                d.Input.MOUSE_TOUCH_COMBINE ||
              (this.game.input.multiInputOverride ==
                d.Input.TOUCH_OVERRIDES_MOUSE &&
                0 === this.game.input.currentPointers)) &&
              ((this.game.input.activePointer = this),
              (this.game.input.x = this.x),
              (this.game.input.y = this.y),
              this.game.input.position.setTo(
                this.game.input.x,
                this.game.input.y
              ),
              (this.game.input.circle.x = this.game.input.x),
              (this.game.input.circle.y = this.game.input.y)),
            this.game.paused)
          )
            return this;
          if (null !== this.targetObject && this.targetObject.isDragged === !0)
            return (
              this.targetObject.update(this) === !1 &&
                (this.targetObject = null),
              this
            );
          if (
            ((this._highestRenderOrderID = -1),
            (this._highestRenderObject = null),
            (this._highestInputPriorityID = -1),
            this.game.input.interactiveItems.total > 0)
          ) {
            var b = this.game.input.interactiveItems.next;
            do
              (b.pixelPerfect ||
                b.priorityID > this._highestInputPriorityID ||
                (b.priorityID == this._highestInputPriorityID &&
                  b.sprite.renderOrderID > this._highestRenderOrderID)) &&
                b.checkPointerOver(this) &&
                ((this._highestRenderOrderID = b.sprite.renderOrderID),
                (this._highestInputPriorityID = b.priorityID),
                (this._highestRenderObject = b)),
                (b = b.next);
            while (null != b);
          }
          return (
            null == this._highestRenderObject
              ? this.targetObject &&
                (this.targetObject._pointerOutHandler(this),
                (this.targetObject = null))
              : null == this.targetObject
              ? ((this.targetObject = this._highestRenderObject),
                this._highestRenderObject._pointerOverHandler(this))
              : this.targetObject == this._highestRenderObject
              ? this._highestRenderObject.update(this) === !1 &&
                (this.targetObject = null)
              : (this.targetObject._pointerOutHandler(this),
                (this.targetObject = this._highestRenderObject),
                this.targetObject._pointerOverHandler(this)),
            this
          );
        }
      },
      leave: function (a) {
        (this.withinGame = !1), this.move(a);
      },
      stop: function (a) {
        if (this._stateReset) return a.preventDefault(), void 0;
        if (
          ((this.timeUp = this.game.time.now),
          (this.game.input.multiInputOverride ==
            d.Input.MOUSE_OVERRIDES_TOUCH ||
            this.game.input.multiInputOverride == d.Input.MOUSE_TOUCH_COMBINE ||
            (this.game.input.multiInputOverride ==
              d.Input.TOUCH_OVERRIDES_MOUSE &&
              0 === this.game.input.currentPointers)) &&
            (this.game.input.onUp.dispatch(this, a),
            this.duration >= 0 &&
              this.duration <= this.game.input.tapRate &&
              (this.timeUp - this.previousTapTime <
              this.game.input.doubleTapRate
                ? this.game.input.onTap.dispatch(this, !0)
                : this.game.input.onTap.dispatch(this, !1),
              (this.previousTapTime = this.timeUp))),
          this.id > 0 && (this.active = !1),
          (this.withinGame = !1),
          (this.isDown = !1),
          (this.isUp = !0),
          this.isMouse === !1 && this.game.input.currentPointers--,
          this.game.input.interactiveItems.total > 0)
        ) {
          var b = this.game.input.interactiveItems.next;
          do b && b._releasedHandler(this), (b = b.next);
          while (null != b);
        }
        return (
          this.targetObject && this.targetObject._releasedHandler(this),
          (this.targetObject = null),
          this
        );
      },
      justPressed: function (a) {
        return (
          (a = a || this.game.input.justPressedRate),
          this.isDown === !0 && this.timeDown + a > this.game.time.now
        );
      },
      justReleased: function (a) {
        return (
          (a = a || this.game.input.justReleasedRate),
          this.isUp === !0 && this.timeUp + a > this.game.time.now
        );
      },
      reset: function () {
        this.isMouse === !1 && (this.active = !1),
          (this.identifier = null),
          (this.isDown = !1),
          (this.isUp = !0),
          (this.totalTouches = 0),
          (this._holdSent = !1),
          (this._history.length = 0),
          (this._stateReset = !0),
          this.targetObject && this.targetObject._releasedHandler(this),
          (this.targetObject = null);
      },
    }),
    Object.defineProperty(d.Pointer.prototype, "duration", {
      get: function () {
        return this.isUp ? -1 : this.game.time.now - this.timeDown;
      },
    }),
    Object.defineProperty(d.Pointer.prototype, "worldX", {
      get: function () {
        return this.game.world.camera.x + this.x;
      },
    }),
    Object.defineProperty(d.Pointer.prototype, "worldY", {
      get: function () {
        return this.game.world.camera.y + this.y;
      },
    }),
    (d.Touch = function (a) {
      (this.game = a),
        (this.disabled = !1),
        (this.callbackContext = this.game),
        (this.touchStartCallback = null),
        (this.touchMoveCallback = null),
        (this.touchEndCallback = null),
        (this.touchEnterCallback = null),
        (this.touchLeaveCallback = null),
        (this.touchCancelCallback = null),
        (this.preventDefault = !0),
        (this.event = null),
        (this._onTouchStart = null),
        (this._onTouchMove = null),
        (this._onTouchEnd = null),
        (this._onTouchEnter = null),
        (this._onTouchLeave = null),
        (this._onTouchCancel = null),
        (this._onTouchMove = null);
    }),
    (d.Touch.prototype = {
      start: function () {
        var a = this;
        this.game.device.touch &&
          ((this._onTouchStart = function (b) {
            return a.onTouchStart(b);
          }),
          (this._onTouchMove = function (b) {
            return a.onTouchMove(b);
          }),
          (this._onTouchEnd = function (b) {
            return a.onTouchEnd(b);
          }),
          (this._onTouchEnter = function (b) {
            return a.onTouchEnter(b);
          }),
          (this._onTouchLeave = function (b) {
            return a.onTouchLeave(b);
          }),
          (this._onTouchCancel = function (b) {
            return a.onTouchCancel(b);
          }),
          this.game.renderer.view.addEventListener(
            "touchstart",
            this._onTouchStart,
            !1
          ),
          this.game.renderer.view.addEventListener(
            "touchmove",
            this._onTouchMove,
            !1
          ),
          this.game.renderer.view.addEventListener(
            "touchend",
            this._onTouchEnd,
            !1
          ),
          this.game.renderer.view.addEventListener(
            "touchenter",
            this._onTouchEnter,
            !1
          ),
          this.game.renderer.view.addEventListener(
            "touchleave",
            this._onTouchLeave,
            !1
          ),
          this.game.renderer.view.addEventListener(
            "touchcancel",
            this._onTouchCancel,
            !1
          ));
      },
      consumeDocumentTouches: function () {
        (this._documentTouchMove = function (a) {
          a.preventDefault();
        }),
          document.addEventListener("touchmove", this._documentTouchMove, !1);
      },
      onTouchStart: function (a) {
        if (
          ((this.event = a),
          this.touchStartCallback &&
            this.touchStartCallback.call(this.callbackContext, a),
          !this.game.input.disabled && !this.disabled)
        ) {
          this.preventDefault && a.preventDefault();
          for (var b = 0; b < a.changedTouches.length; b++)
            this.game.input.startPointer(a.changedTouches[b]);
        }
      },
      onTouchCancel: function (a) {
        if (
          ((this.event = a),
          this.touchCancelCallback &&
            this.touchCancelCallback.call(this.callbackContext, a),
          !this.game.input.disabled && !this.disabled)
        ) {
          this.preventDefault && a.preventDefault();
          for (var b = 0; b < a.changedTouches.length; b++)
            this.game.input.stopPointer(a.changedTouches[b]);
        }
      },
      onTouchEnter: function (a) {
        (this.event = a),
          this.touchEnterCallback &&
            this.touchEnterCallback.call(this.callbackContext, a),
          this.game.input.disabled ||
            this.disabled ||
            (this.preventDefault && a.preventDefault());
      },
      onTouchLeave: function (a) {
        (this.event = a),
          this.touchLeaveCallback &&
            this.touchLeaveCallback.call(this.callbackContext, a),
          this.preventDefault && a.preventDefault();
      },
      onTouchMove: function (a) {
        (this.event = a),
          this.touchMoveCallback &&
            this.touchMoveCallback.call(this.callbackContext, a),
          this.preventDefault && a.preventDefault();
        for (var b = 0; b < a.changedTouches.length; b++)
          this.game.input.updatePointer(a.changedTouches[b]);
      },
      onTouchEnd: function (a) {
        (this.event = a),
          this.touchEndCallback &&
            this.touchEndCallback.call(this.callbackContext, a),
          this.preventDefault && a.preventDefault();
        for (var b = 0; b < a.changedTouches.length; b++)
          this.game.input.stopPointer(a.changedTouches[b]);
      },
      stop: function () {
        this.game.device.touch &&
          (this.game.stage.canvas.removeEventListener(
            "touchstart",
            this._onTouchStart
          ),
          this.game.stage.canvas.removeEventListener(
            "touchmove",
            this._onTouchMove
          ),
          this.game.stage.canvas.removeEventListener(
            "touchend",
            this._onTouchEnd
          ),
          this.game.stage.canvas.removeEventListener(
            "touchenter",
            this._onTouchEnter
          ),
          this.game.stage.canvas.removeEventListener(
            "touchleave",
            this._onTouchLeave
          ),
          this.game.stage.canvas.removeEventListener(
            "touchcancel",
            this._onTouchCancel
          ));
      },
    }),
    (d.InputHandler = function (a) {
      (this.sprite = a),
        (this.game = a.game),
        (this.enabled = !1),
        (this.priorityID = 0),
        (this.useHandCursor = !1),
        (this.isDragged = !1),
        (this.allowHorizontalDrag = !0),
        (this.allowVerticalDrag = !0),
        (this.bringToTop = !1),
        (this.snapOffset = null),
        (this.snapOnDrag = !1),
        (this.snapOnRelease = !1),
        (this.snapX = 0),
        (this.snapY = 0),
        (this.pixelPerfect = !1),
        (this.pixelPerfectAlpha = 255),
        (this.draggable = !1),
        (this.boundsRect = null),
        (this.boundsSprite = null),
        (this.consumePointerEvent = !1),
        (this._tempPoint = new d.Point()),
        (this._pointerData = []),
        this._pointerData.push({
          id: 0,
          x: 0,
          y: 0,
          isDown: !1,
          isUp: !1,
          isOver: !1,
          isOut: !1,
          timeOver: 0,
          timeOut: 0,
          timeDown: 0,
          timeUp: 0,
          downDuration: 0,
          isDragged: !1,
        });
    }),
    (d.InputHandler.prototype = {
      start: function (a, b) {
        if (
          (console.log("InputHandler start"),
          (a = a || 0),
          "undefined" == typeof b && (b = !1),
          this.enabled === !1)
        ) {
          this.game.input.interactiveItems.add(this),
            (this.useHandCursor = b),
            (this.priorityID = a);
          for (var c = 0; 10 > c; c++)
            this._pointerData[c] = {
              id: c,
              x: 0,
              y: 0,
              isDown: !1,
              isUp: !1,
              isOver: !1,
              isOut: !1,
              timeOver: 0,
              timeOut: 0,
              timeDown: 0,
              timeUp: 0,
              downDuration: 0,
              isDragged: !1,
            };
          (this.snapOffset = new d.Point()),
            (this.enabled = !0),
            this.sprite.events &&
              null == this.sprite.events.onInputOver &&
              ((this.sprite.events.onInputOver = new d.Signal()),
              (this.sprite.events.onInputOut = new d.Signal()),
              (this.sprite.events.onInputDown = new d.Signal()),
              (this.sprite.events.onInputUp = new d.Signal()),
              (this.sprite.events.onDragStart = new d.Signal()),
              (this.sprite.events.onDragStop = new d.Signal()));
        }
        return this.sprite;
      },
      reset: function () {
        this.enabled = !1;
        for (var a = 0; 10 > a; a++)
          this._pointerData[a] = {
            id: a,
            x: 0,
            y: 0,
            isDown: !1,
            isUp: !1,
            isOver: !1,
            isOut: !1,
            timeOver: 0,
            timeOut: 0,
            timeDown: 0,
            timeUp: 0,
            downDuration: 0,
            isDragged: !1,
          };
      },
      stop: function () {
        this.enabled !== !1 &&
          ((this.enabled = !1), this.game.input.interactiveItems.remove(this));
      },
      destroy: function () {
        this.enabled &&
          ((this.enabled = !1),
          this.game.input.interactiveItems.remove(this),
          this.stop(),
          (this.sprite = null));
      },
      pointerX: function (a) {
        return (a = a || 0), this._pointerData[a].x;
      },
      pointerY: function (a) {
        return (a = a || 0), this._pointerData[a].y;
      },
      pointerDown: function (a) {
        return (a = a || 0), this._pointerData[a].isDown;
      },
      pointerUp: function (a) {
        return (a = a || 0), this._pointerData[a].isUp;
      },
      pointerTimeDown: function (a) {
        return (a = a || 0), this._pointerData[a].timeDown;
      },
      pointerTimeUp: function (a) {
        return (a = a || 0), this._pointerData[a].timeUp;
      },
      pointerOver: function (a) {
        if (this.enabled) {
          if ("undefined" != typeof a) return this._pointerData[a].isOver;
          for (var b = 0; 10 > b; b++)
            if (this._pointerData[b].isOver) return !0;
        }
        return !1;
      },
      pointerOut: function (a) {
        if (this.enabled) {
          if ("undefined" != typeof a) return this._pointerData[a].isOut;
          for (var b = 0; 10 > b; b++)
            if (this._pointerData[b].isOut) return !0;
        }
        return !1;
      },
      pointerTimeOver: function (a) {
        return (a = a || 0), this._pointerData[a].timeOver;
      },
      pointerTimeOut: function (a) {
        return (a = a || 0), this._pointerData[a].timeOut;
      },
      pointerDragged: function (a) {
        return (a = a || 0), this._pointerData[a].isDragged;
      },
      checkPointerOver: function (a) {
        return this.enabled === !1 ||
          this.sprite.visible === !1 ||
          (this.sprite.group && this.sprite.group.visible === !1)
          ? !1
          : (this.sprite.getLocalUnmodifiedPosition(this._tempPoint, a.x, a.y),
            this._tempPoint.x >= 0 &&
            this._tempPoint.x <= this.sprite.currentFrame.width &&
            this._tempPoint.y >= 0 &&
            this._tempPoint.y <= this.sprite.currentFrame.height
              ? this.pixelPerfect
                ? this.checkPixel(this._tempPoint.x, this._tempPoint.y)
                : !0
              : void 0);
      },
      checkPixel: function (a, b) {
        if (this.sprite.texture.baseTexture.source) {
          this.game.input.hitContext.clearRect(0, 0, 1, 1),
            (a += this.sprite.texture.frame.x),
            (b += this.sprite.texture.frame.y),
            this.game.input.hitContext.drawImage(
              this.sprite.texture.baseTexture.source,
              a,
              b,
              1,
              1,
              0,
              0,
              1,
              1
            );
          var c = this.game.input.hitContext.getImageData(0, 0, 1, 1);
          if (c.data[3] >= this.pixelPerfectAlpha) return !0;
        }
        return !1;
      },
      update: function (a) {
        return this.enabled === !1 ||
          this.sprite.visible === !1 ||
          (this.sprite.group && this.sprite.group.visible === !1)
          ? (this._pointerOutHandler(a), !1)
          : this.draggable && this._draggedPointerID == a.id
          ? this.updateDrag(a)
          : this._pointerData[a.id].isOver === !0
          ? this.checkPointerOver(a)
            ? ((this._pointerData[a.id].x = a.x - this.sprite.x),
              (this._pointerData[a.id].y = a.y - this.sprite.y),
              !0)
            : (this._pointerOutHandler(a), !1)
          : void 0;
      },
      _pointerOverHandler: function (a) {
        this._pointerData[a.id].isOver === !1 &&
          ((this._pointerData[a.id].isOver = !0),
          (this._pointerData[a.id].isOut = !1),
          (this._pointerData[a.id].timeOver = this.game.time.now),
          (this._pointerData[a.id].x = a.x - this.sprite.x),
          (this._pointerData[a.id].y = a.y - this.sprite.y),
          this.useHandCursor &&
            this._pointerData[a.id].isDragged === !1 &&
            (this.game.stage.canvas.style.cursor = "pointer"),
          this.sprite.events.onInputOver.dispatch(this.sprite, a));
      },
      _pointerOutHandler: function (a) {
        (this._pointerData[a.id].isOver = !1),
          (this._pointerData[a.id].isOut = !0),
          (this._pointerData[a.id].timeOut = this.game.time.now),
          this.useHandCursor &&
            this._pointerData[a.id].isDragged === !1 &&
            (this.game.stage.canvas.style.cursor = "default"),
          this.sprite &&
            this.sprite.events &&
            this.sprite.events.onInputOut.dispatch(this.sprite, a);
      },
      _touchedHandler: function (a) {
        return (
          this._pointerData[a.id].isDown === !1 &&
            this._pointerData[a.id].isOver === !0 &&
            ((this._pointerData[a.id].isDown = !0),
            (this._pointerData[a.id].isUp = !1),
            (this._pointerData[a.id].timeDown = this.game.time.now),
            this.sprite.events.onInputDown.dispatch(this.sprite, a),
            this.draggable && this.isDragged === !1 && this.startDrag(a),
            this.bringToTop && this.sprite.bringToTop()),
          this.consumePointerEvent
        );
      },
      _releasedHandler: function (a) {
        this._pointerData[a.id].isDown &&
          a.isUp &&
          ((this._pointerData[a.id].isDown = !1),
          (this._pointerData[a.id].isUp = !0),
          (this._pointerData[a.id].timeUp = this.game.time.now),
          (this._pointerData[a.id].downDuration =
            this._pointerData[a.id].timeUp - this._pointerData[a.id].timeDown),
          this.checkPointerOver(a)
            ? this.sprite.events.onInputUp.dispatch(this.sprite, a)
            : this.useHandCursor &&
              (this.game.stage.canvas.style.cursor = "default"),
          this.draggable &&
            this.isDragged &&
            this._draggedPointerID == a.id &&
            this.stopDrag(a));
      },
      updateDrag: function (a) {
        return a.isUp
          ? (this.stopDrag(a), !1)
          : (this.allowHorizontalDrag &&
              (this.sprite.x = a.x + this._dragPoint.x + this.dragOffset.x),
            this.allowVerticalDrag &&
              (this.sprite.y = a.y + this._dragPoint.y + this.dragOffset.y),
            this.boundsRect && this.checkBoundsRect(),
            this.boundsSprite && this.checkBoundsSprite(),
            this.snapOnDrag &&
              ((this.sprite.x =
                Math.round(this.sprite.x / this.snapX) * this.snapX),
              (this.sprite.y =
                Math.round(this.sprite.y / this.snapY) * this.snapY)),
            !0);
      },
      justOver: function (a, b) {
        return (
          (a = a || 0),
          (b = b || 500),
          this._pointerData[a].isOver && this.overDuration(a) < b
        );
      },
      justOut: function (a, b) {
        return (
          (a = a || 0),
          (b = b || 500),
          this._pointerData[a].isOut &&
            this.game.time.now - this._pointerData[a].timeOut < b
        );
      },
      justPressed: function (a, b) {
        return (
          (a = a || 0),
          (b = b || 500),
          this._pointerData[a].isDown && this.downDuration(a) < b
        );
      },
      justReleased: function (a, b) {
        return (
          (a = a || 0),
          (b = b || 500),
          this._pointerData[a].isUp &&
            this.game.time.now - this._pointerData[a].timeUp < b
        );
      },
      overDuration: function (a) {
        return (
          (a = a || 0),
          this._pointerData[a].isOver
            ? this.game.time.now - this._pointerData[a].timeOver
            : -1
        );
      },
      downDuration: function (a) {
        return (
          (a = a || 0),
          this._pointerData[a].isDown
            ? this.game.time.now - this._pointerData[a].timeDown
            : -1
        );
      },
      enableDrag: function (a, b, c, e, f, g) {
        "undefined" == typeof a && (a = !1),
          "undefined" == typeof b && (b = !1),
          "undefined" == typeof c && (c = !1),
          "undefined" == typeof e && (e = 255),
          "undefined" == typeof f && (f = null),
          "undefined" == typeof g && (g = null),
          (this._dragPoint = new d.Point()),
          (this.draggable = !0),
          (this.bringToTop = b),
          (this.dragOffset = new d.Point()),
          (this.dragFromCenter = a),
          (this.pixelPerfect = c),
          (this.pixelPerfectAlpha = e),
          f && (this.boundsRect = f),
          g && (this.boundsSprite = g);
      },
      disableDrag: function () {
        if (this._pointerData)
          for (var a = 0; 10 > a; a++) this._pointerData[a].isDragged = !1;
        (this.draggable = !1),
          (this.isDragged = !1),
          (this._draggedPointerID = -1);
      },
      startDrag: function (a) {
        (this.isDragged = !0),
          (this._draggedPointerID = a.id),
          (this._pointerData[a.id].isDragged = !0),
          this.dragFromCenter
            ? (this.sprite.centerOn(a.x, a.y),
              this._dragPoint.setTo(this.sprite.x - a.x, this.sprite.y - a.y))
            : this._dragPoint.setTo(this.sprite.x - a.x, this.sprite.y - a.y),
          this.updateDrag(a),
          this.bringToTop && this.sprite.bringToTop(),
          this.sprite.events.onDragStart.dispatch(this.sprite, a);
      },
      stopDrag: function (a) {
        (this.isDragged = !1),
          (this._draggedPointerID = -1),
          (this._pointerData[a.id].isDragged = !1),
          this.snapOnRelease &&
            ((this.sprite.x =
              Math.round(this.sprite.x / this.snapX) * this.snapX),
            (this.sprite.y =
              Math.round(this.sprite.y / this.snapY) * this.snapY)),
          this.sprite.events.onDragStop.dispatch(this.sprite, a),
          this.sprite.events.onInputUp.dispatch(this.sprite, a),
          this.checkPointerOver(a) === !1 && this._pointerOutHandler(a);
      },
      setDragLock: function (a, b) {
        "undefined" == typeof a && (a = !0),
          "undefined" == typeof b && (b = !0),
          (this.allowHorizontalDrag = a),
          (this.allowVerticalDrag = b);
      },
      enableSnap: function (a, b, c, d) {
        "undefined" == typeof c && (c = !0),
          "undefined" == typeof d && (d = !1),
          (this.snapX = a),
          (this.snapY = b),
          (this.snapOnDrag = c),
          (this.snapOnRelease = d);
      },
      disableSnap: function () {
        (this.snapOnDrag = !1), (this.snapOnRelease = !1);
      },
      checkBoundsRect: function () {
        this.sprite.x < this.boundsRect.left
          ? (this.sprite.x = this.boundsRect.x)
          : this.sprite.x + this.sprite.width > this.boundsRect.right &&
            (this.sprite.x = this.boundsRect.right - this.sprite.width),
          this.sprite.y < this.boundsRect.top
            ? (this.sprite.y = this.boundsRect.top)
            : this.sprite.y + this.sprite.height > this.boundsRect.bottom &&
              (this.sprite.y = this.boundsRect.bottom - this.sprite.height);
      },
      checkBoundsSprite: function () {
        this.sprite.x < this.boundsSprite.x
          ? (this.sprite.x = this.boundsSprite.x)
          : this.sprite.x + this.sprite.width >
              this.boundsSprite.x + this.boundsSprite.width &&
            (this.sprite.x =
              this.boundsSprite.x +
              this.boundsSprite.width -
              this.sprite.width),
          this.sprite.y < this.boundsSprite.y
            ? (this.sprite.y = this.boundsSprite.y)
            : this.sprite.y + this.sprite.height >
                this.boundsSprite.y + this.boundsSprite.height &&
              (this.sprite.y =
                this.boundsSprite.y +
                this.boundsSprite.height -
                this.sprite.height);
      },
    }),
    (d.Events = function (a) {
      (this.parent = a),
        (this.onAddedToGroup = new d.Signal()),
        (this.onRemovedFromGroup = new d.Signal()),
        (this.onKilled = new d.Signal()),
        (this.onRevived = new d.Signal()),
        (this.onOutOfBounds = new d.Signal()),
        (this.onInputOver = null),
        (this.onInputOut = null),
        (this.onInputDown = null),
        (this.onInputUp = null),
        (this.onDragStart = null),
        (this.onDragStop = null),
        (this.onAnimationStart = null),
        (this.onAnimationComplete = null),
        (this.onAnimationLoop = null);
    }),
    (d.Events.prototype = {
      destroy: function () {
        (this.parent = null),
          this.onAddedToGroup.dispose(),
          this.onRemovedFromGroup.dispose(),
          this.onKilled.dispose(),
          this.onRevived.dispose(),
          this.onOutOfBounds.dispose(),
          this.onInputOver &&
            (this.onInputOver.dispose(),
            this.onInputOut.dispose(),
            this.onInputDown.dispose(),
            this.onInputUp.dispose(),
            this.onDragStart.dispose(),
            this.onDragStop.dispose()),
          this.onAnimationStart &&
            (this.onAnimationStart.dispose(),
            this.onAnimationComplete.dispose(),
            this.onAnimationLoop.dispose());
      },
    }),
    (d.GameObjectFactory = function (a) {
      (this.game = a), (this.world = this.game.world);
    }),
    (d.GameObjectFactory.prototype = {
      existing: function (a) {
        return this.world.add(a);
      },
      sprite: function (a, b, c, d) {
        return this.world.create(a, b, c, d);
      },
      child: function (a, b, c, d, e) {
        return a.create(b, c, d, e);
      },
      tween: function (a) {
        return this.game.tweens.create(a);
      },
      group: function (a, b) {
        return new d.Group(this.game, a, b);
      },
      audio: function (a, b, c, d) {
        return this.game.sound.add(a, b, c, d);
      },
      tileSprite: function (a, b, c, e, f, g) {
        return this.world.add(new d.TileSprite(this.game, a, b, c, e, f, g));
      },
      text: function (a, b, c, e) {
        return this.world.add(new d.Text(this.game, a, b, c, e));
      },
      button: function (a, b, c, e, f, g, h, i) {
        return this.world.add(new d.Button(this.game, a, b, c, e, f, g, h, i));
      },
      graphics: function (a, b) {
        return this.world.add(new d.Graphics(this.game, a, b));
      },
      emitter: function (a, b, c) {
        return this.game.particles.add(
          new d.Particles.Arcade.Emitter(this.game, a, b, c)
        );
      },
      bitmapText: function (a, b, c, e) {
        return this.world.add(new d.BitmapText(this.game, a, b, c, e));
      },
      tilemap: function (a) {
        return new d.Tilemap(this.game, a);
      },
      tileset: function (a) {
        return this.game.cache.getTileset(a);
      },
      tilemapLayer: function (a, b, c, e, f, g, h) {
        return this.world.add(
          new d.TilemapLayer(this.game, a, b, c, e, f, g, h)
        );
      },
      renderTexture: function (a, b, c) {
        var e = new d.RenderTexture(this.game, a, b, c);
        return this.game.cache.addRenderTexture(a, e), e;
      },
      bitmapData: function (a, b) {
        return new d.BitmapData(this.game, a, b);
      },
      filter: function (a) {
        var b = Array.prototype.splice.call(arguments, 1),
          a = new d.Filter[a](this.game);
        return a.init.apply(a, b), a;
      },
    }),
    (d.BitmapData = function (a, b, e) {
      "undefined" == typeof b && (b = 256),
        "undefined" == typeof e && (e = 256),
        (this.game = a),
        (this.name = ""),
        (this.width = b),
        (this.height = e),
        (this.canvas = d.Canvas.create(b, e)),
        (this.context = this.canvas.getContext("2d")),
        (this.imageData = this.context.getImageData(0, 0, b, e)),
        (this.pixels = this.imageData.data.buffer
          ? this.imageData.data.buffer
          : this.imageData.data),
        (this.baseTexture = new c.BaseTexture(this.canvas)),
        (this.texture = new c.Texture(this.baseTexture)),
        (this.textureFrame = new d.Frame(
          0,
          0,
          0,
          b,
          e,
          "bitmapData",
          a.rnd.uuid()
        )),
        (this.type = d.BITMAPDATA),
        (this._dirty = !1);
    }),
    (d.BitmapData.prototype = {
      add: function (a) {
        a.loadTexture(this);
      },
      addTo: function (a) {
        for (var b = 0; b < a.length; b++)
          a[b].texture && a[b].loadTexture(this);
      },
      clear: function () {
        this.context.clearRect(0, 0, this.width, this.height),
          (this._dirty = !0);
      },
      refreshBuffer: function () {
        (this.imageData = this.context.getImageData(
          0,
          0,
          this.width,
          this.height
        )),
          (this.pixels = new Int32Array(this.imageData.data.buffer));
      },
      setPixel32: function (a, b, c, d, e, f) {
        a >= 0 &&
          a <= this.width &&
          b >= 0 &&
          b <= this.height &&
          ((this.pixels[b * this.width + a] =
            (f << 24) | (e << 16) | (d << 8) | c),
          this.context.putImageData(this.imageData, 0, 0),
          (this._dirty = !0));
      },
      setPixel: function (a, b, c, d, e) {
        this.setPixel32(a, b, c, d, e, 255);
      },
      getPixel: function (a, b) {
        return a >= 0 && a <= this.width && b >= 0 && b <= this.height
          ? this.data32[b * this.width + a]
          : void 0;
      },
      getPixel32: function (a, b) {
        return a >= 0 && a <= this.width && b >= 0 && b <= this.height
          ? this.data32[b * this.width + a]
          : void 0;
      },
      getPixels: function (a) {
        return this.context.getImageData(a.x, a.y, a.width, a.height);
      },
      arc: function (a, b, c, d, e, f) {
        return (
          "undefined" == typeof f && (f = !1),
          (this._dirty = !0),
          this.context.arc(a, b, c, d, e, f),
          this
        );
      },
      arcTo: function (a, b, c, d, e) {
        return (this._dirty = !0), this.context.arcTo(a, b, c, d, e), this;
      },
      beginFill: function (a) {
        return this.fillStyle(a), this;
      },
      beginLinearGradientFill: function (a, b, c, d, e, f) {
        for (
          var g = this.createLinearGradient(c, d, e, f), h = 0, i = a.length;
          i > h;
          h++
        )
          g.addColorStop(b[h], a[h]);
        return this.fillStyle(g), this;
      },
      beginLinearGradientStroke: function (a, b, c, d, e, f) {
        for (
          var g = this.createLinearGradient(c, d, e, f), h = 0, i = a.length;
          i > h;
          h++
        )
          g.addColorStop(b[h], a[h]);
        return this.strokeStyle(g), this;
      },
      beginRadialGradientStroke: function (a, b, c, d, e, f, g, h) {
        for (
          var i = this.createRadialGradient(c, d, e, f, g, h),
            j = 0,
            k = a.length;
          k > j;
          j++
        )
          i.addColorStop(b[j], a[j]);
        return this.strokeStyle(i), this;
      },
      beginPath: function () {
        return this.context.beginPath(), this;
      },
      beginStroke: function (a) {
        return this.strokeStyle(a), this;
      },
      bezierCurveTo: function (a, b, c, d, e, f) {
        return (
          (this._dirty = !0), this.context.bezierCurveTo(a, b, c, d, e, f), this
        );
      },
      circle: function (a, b, c) {
        return this.arc(a, b, c, 0, 2 * Math.PI), this;
      },
      clearRect: function (a, b, c, d) {
        return (this._dirty = !0), this.context.clearRect(a, b, c, d), this;
      },
      clip: function () {
        return (this._dirty = !0), this.context.clip(), this;
      },
      closePath: function () {
        return (this._dirty = !0), this.context.closePath(), this;
      },
      createLinearGradient: function (a, b, c, d) {
        return this.context.createLinearGradient(a, b, c, d);
      },
      createRadialGradient: function (a, b, c, d, e, f) {
        return this.context.createRadialGradient(a, b, c, d, e, f);
      },
      ellipse: function (a, b, c, d) {
        var e = 0.5522848,
          f = (c / 2) * e,
          g = (d / 2) * e,
          h = a + c,
          i = b + d,
          j = a + c / 2,
          k = b + d / 2;
        return (
          this.moveTo(a, k),
          this.bezierCurveTo(a, k - g, j - f, b, j, b),
          this.bezierCurveTo(j + f, b, h, k - g, h, k),
          this.bezierCurveTo(h, k + g, j + f, i, j, i),
          this.bezierCurveTo(j - f, i, a, k + g, a, k),
          this
        );
      },
      fill: function () {
        return (this._dirty = !0), this.context.fill(), this;
      },
      fillRect: function (a, b, c, d) {
        return (this._dirty = !0), this.context.fillRect(a, b, c, d), this;
      },
      fillStyle: function (a) {
        return (this.context.fillStyle = a), this;
      },
      font: function (a) {
        return (this.context.font = a), this;
      },
      globalAlpha: function (a) {
        return (this.context.globalAlpha = a), this;
      },
      globalCompositeOperation: function (a) {
        return (this.context.globalCompositeOperation = a), this;
      },
      lineCap: function (a) {
        return (this.context.lineCap = a), this;
      },
      lineDashOffset: function (a) {
        return (this.context.lineDashOffset = a), this;
      },
      lineJoin: function (a) {
        return (this.context.lineJoin = a), this;
      },
      lineWidth: function (a) {
        return (this.context.lineWidth = a), this;
      },
      miterLimit: function (a) {
        return (this.context.miterLimit = a), this;
      },
      lineTo: function (a, b) {
        return (this._dirty = !0), this.context.lineTo(a, b), this;
      },
      moveTo: function (a, b) {
        return this.context.moveTo(a, b), this;
      },
      quadraticCurveTo: function (a, b, c, d) {
        return (
          (this._dirty = !0), this.context.quadraticCurveTo(a, b, c, d), this
        );
      },
      rect: function (a, b, c, d) {
        return (this._dirty = !0), this.context.rect(a, b, c, d), this;
      },
      restore: function () {
        return (this._dirty = !0), this.context.restore(), this;
      },
      rotate: function (a) {
        return (this._dirty = !0), this.context.rotate(a), this;
      },
      setStrokeStyle: function (a, b, c, d, e) {
        return (
          "undefined" == typeof a && (a = 1),
          "undefined" == typeof b && (b = "butt"),
          "undefined" == typeof c && (c = "miter"),
          "undefined" == typeof d && (d = 10),
          (e = !1),
          this.lineWidth(a),
          this.lineCap(b),
          this.lineJoin(c),
          this.miterLimit(d),
          this
        );
      },
      save: function () {
        return (this._dirty = !0), this.context.save(), this;
      },
      scale: function (a, b) {
        return (this._dirty = !0), this.context.scale(a, b), this;
      },
      scrollPathIntoView: function () {
        return (this._dirty = !0), this.context.scrollPathIntoView(), this;
      },
      stroke: function () {
        return (this._dirty = !0), this.context.stroke(), this;
      },
      strokeRect: function (a, b, c, d) {
        return (this._dirty = !0), this.context.strokeRect(a, b, c, d), this;
      },
      strokeStyle: function (a) {
        return (this.context.strokeStyle = a), this;
      },
      render: function () {
        this._dirty &&
          (this.game.renderType == d.WEBGL &&
            c.texturesToUpdate.push(this.baseTexture),
          (this._dirty = !1));
      },
    }),
    (d.BitmapData.prototype.mt = d.BitmapData.prototype.moveTo),
    (d.BitmapData.prototype.lt = d.BitmapData.prototype.lineTo),
    (d.BitmapData.prototype.at = d.BitmapData.prototype.arcTo),
    (d.BitmapData.prototype.bt = d.BitmapData.prototype.bezierCurveTo),
    (d.BitmapData.prototype.qt = d.BitmapData.prototype.quadraticCurveTo),
    (d.BitmapData.prototype.a = d.BitmapData.prototype.arc),
    (d.BitmapData.prototype.r = d.BitmapData.prototype.rect),
    (d.BitmapData.prototype.cp = d.BitmapData.prototype.closePath),
    (d.BitmapData.prototype.c = d.BitmapData.prototype.clear),
    (d.BitmapData.prototype.f = d.BitmapData.prototype.beginFill),
    (d.BitmapData.prototype.lf =
      d.BitmapData.prototype.beginLinearGradientFill),
    (d.BitmapData.prototype.rf =
      d.BitmapData.prototype.beginRadialGradientFill),
    (d.BitmapData.prototype.ef = d.BitmapData.prototype.endFill),
    (d.BitmapData.prototype.ss = d.BitmapData.prototype.setStrokeStyle),
    (d.BitmapData.prototype.s = d.BitmapData.prototype.beginStroke),
    (d.BitmapData.prototype.ls =
      d.BitmapData.prototype.beginLinearGradientStroke),
    (d.BitmapData.prototype.rs =
      d.BitmapData.prototype.beginRadialGradientStroke),
    (d.BitmapData.prototype.dr = d.BitmapData.prototype.rect),
    (d.BitmapData.prototype.dc = d.BitmapData.prototype.circle),
    (d.BitmapData.prototype.de = d.BitmapData.prototype.ellipse),
    (d.Sprite = function (a, b, e, f, g) {
      (b = b || 0),
        (e = e || 0),
        (f = f || null),
        (g = g || null),
        (this.game = a),
        (this.exists = !0),
        (this.alive = !0),
        (this.group = null),
        (this.name = ""),
        (this.type = d.SPRITE),
        (this.renderOrderID = -1),
        (this.lifespan = 0),
        (this.events = new d.Events(this)),
        (this.animations = new d.AnimationManager(this)),
        (this.input = new d.InputHandler(this)),
        (this.key = f),
        (this.currentFrame = null),
        f instanceof d.RenderTexture
          ? (c.Sprite.call(this, f),
            (this.currentFrame = this.game.cache.getTextureFrame(f.name)))
          : f instanceof d.BitmapData
          ? (c.Sprite.call(this, f.texture, f.textureFrame),
            (this.currentFrame = f.textureFrame))
          : f instanceof c.Texture
          ? (c.Sprite.call(this, f), (this.currentFrame = g))
          : (null === f || "undefined" == typeof f
              ? ((f = "__default"), (this.key = f))
              : "string" == typeof f &&
                this.game.cache.checkImageKey(f) === !1 &&
                ((f = "__missing"), (this.key = f)),
            c.Sprite.call(this, c.TextureCache[f]),
            this.game.cache.isSpriteSheet(f)
              ? (this.animations.loadFrameData(this.game.cache.getFrameData(f)),
                null !== g &&
                  ("string" == typeof g
                    ? (this.frameName = g)
                    : (this.frame = g)))
              : (this.currentFrame = this.game.cache.getFrame(f))),
        (this.textureRegion = new d.Rectangle(
          this.texture.frame.x,
          this.texture.frame.y,
          this.texture.frame.width,
          this.texture.frame.height
        )),
        (this.anchor = new d.Point()),
        (this.x = b),
        (this.y = e),
        (this.position.x = b),
        (this.position.y = e),
        (this.world = new d.Point(b, e)),
        (this.autoCull = !1),
        (this.scale = new d.Point(1, 1)),
        (this._cache = {
          dirty: !1,
          a00: -1,
          a01: -1,
          a02: -1,
          a10: -1,
          a11: -1,
          a12: -1,
          id: -1,
          i01: -1,
          i10: -1,
          idi: -1,
          left: null,
          right: null,
          top: null,
          bottom: null,
          prevX: b,
          prevY: e,
          x: -1,
          y: -1,
          scaleX: 1,
          scaleY: 1,
          width: this.currentFrame.sourceSizeW,
          height: this.currentFrame.sourceSizeH,
          halfWidth: Math.floor(this.currentFrame.sourceSizeW / 2),
          halfHeight: Math.floor(this.currentFrame.sourceSizeH / 2),
          calcWidth: -1,
          calcHeight: -1,
          frameID: -1,
          frameWidth: this.currentFrame.width,
          frameHeight: this.currentFrame.height,
          cameraVisible: !0,
          cropX: 0,
          cropY: 0,
          cropWidth: this.currentFrame.sourceSizeW,
          cropHeight: this.currentFrame.sourceSizeH,
        }),
        (this.offset = new d.Point()),
        (this.center = new d.Point(
          b + Math.floor(this._cache.width / 2),
          e + Math.floor(this._cache.height / 2)
        )),
        (this.topLeft = new d.Point(b, e)),
        (this.topRight = new d.Point(b + this._cache.width, e)),
        (this.bottomRight = new d.Point(
          b + this._cache.width,
          e + this._cache.height
        )),
        (this.bottomLeft = new d.Point(b, e + this._cache.height)),
        (this.bounds = new d.Rectangle(
          b,
          e,
          this._cache.width,
          this._cache.height
        )),
        (this.body = new d.Physics.Arcade.Body(this)),
        (this.health = 1),
        (this.inWorld = d.Rectangle.intersects(
          this.bounds,
          this.game.world.bounds
        )),
        (this.inWorldThreshold = 0),
        (this.outOfBoundsKill = !1),
        (this._outOfBoundsFired = !1),
        (this.fixedToCamera = !1),
        (this.cameraOffset = new d.Point()),
        (this.crop = new d.Rectangle(
          0,
          0,
          this._cache.width,
          this._cache.height
        )),
        (this.cropEnabled = !1),
        this.updateCache(),
        this.updateBounds();
    }),
    (d.Sprite.prototype = Object.create(c.Sprite.prototype)),
    (d.Sprite.prototype.constructor = d.Sprite),
    (d.Sprite.prototype.preUpdate = function () {
      return !this.exists || (this.group && !this.group.exists)
        ? ((this.renderOrderID = -1), !1)
        : this.lifespan > 0 &&
          ((this.lifespan -= this.game.time.elapsed), this.lifespan <= 0)
        ? (this.kill(), !1)
        : ((this._cache.dirty = !1),
          this.visible &&
            (this.renderOrderID = this.game.world.currentRenderOrderID++),
          this.updateCache(),
          this.updateAnimation(),
          this.updateCrop(),
          (this._cache.dirty ||
            this.world.x !== this._cache.prevX ||
            this.world.y !== this._cache.prevY) &&
            this.updateBounds(),
          this.body && this.body.preUpdate(),
          !0);
    }),
    (d.Sprite.prototype.updateCache = function () {
      (this._cache.prevX = this.world.x),
        (this._cache.prevY = this.world.y),
        this.fixedToCamera &&
          ((this.x = this.game.camera.view.x + this.cameraOffset.x),
          (this.y = this.game.camera.view.y + this.cameraOffset.y)),
        this.world.setTo(
          this.game.camera.x + this.worldTransform[2],
          this.game.camera.y + this.worldTransform[5]
        ),
        (this.worldTransform[1] != this._cache.i01 ||
          this.worldTransform[3] != this._cache.i10 ||
          this.worldTransform[0] != this._cache.a00 ||
          this.worldTransform[41] != this._cache.a11) &&
          ((this._cache.a00 = this.worldTransform[0]),
          (this._cache.a01 = this.worldTransform[1]),
          (this._cache.a10 = this.worldTransform[3]),
          (this._cache.a11 = this.worldTransform[4]),
          (this._cache.i01 = this.worldTransform[1]),
          (this._cache.i10 = this.worldTransform[3]),
          (this._cache.scaleX = Math.sqrt(
            this._cache.a00 * this._cache.a00 +
              this._cache.a01 * this._cache.a01
          )),
          (this._cache.scaleY = Math.sqrt(
            this._cache.a10 * this._cache.a10 +
              this._cache.a11 * this._cache.a11
          )),
          (this._cache.a01 *= -1),
          (this._cache.a10 *= -1),
          (this._cache.id =
            1 /
            (this._cache.a00 * this._cache.a11 +
              this._cache.a01 * -this._cache.a10)),
          (this._cache.idi =
            1 /
            (this._cache.a00 * this._cache.a11 +
              this._cache.i01 * -this._cache.i10)),
          (this._cache.dirty = !0)),
        (this._cache.a02 = this.worldTransform[2]),
        (this._cache.a12 = this.worldTransform[5]);
    }),
    (d.Sprite.prototype.updateAnimation = function () {
      (this.animations.update() ||
        (this.currentFrame && this.currentFrame.uuid != this._cache.frameID)) &&
        ((this._cache.frameID = this.currentFrame.uuid),
        (this._cache.frameWidth = this.texture.frame.width),
        (this._cache.frameHeight = this.texture.frame.height),
        (this._cache.width = this.currentFrame.width),
        (this._cache.height = this.currentFrame.height),
        (this._cache.halfWidth = Math.floor(this._cache.width / 2)),
        (this._cache.halfHeight = Math.floor(this._cache.height / 2)),
        (this._cache.dirty = !0));
    }),
    (d.Sprite.prototype.updateCrop = function () {
      !this.cropEnabled ||
        (this.crop.width == this._cache.cropWidth &&
          this.crop.height == this._cache.cropHeight &&
          this.crop.x == this._cache.cropX &&
          this.crop.y == this._cache.cropY) ||
        (this.crop.floorAll(),
        (this._cache.cropX = this.crop.x),
        (this._cache.cropY = this.crop.y),
        (this._cache.cropWidth = this.crop.width),
        (this._cache.cropHeight = this.crop.height),
        (this.texture.frame = this.crop),
        (this.texture.width = this.crop.width),
        (this.texture.height = this.crop.height),
        (this.texture.updateFrame = !0),
        c.Texture.frameUpdates.push(this.texture));
    }),
    (d.Sprite.prototype.updateBounds = function () {
      this.offset.setTo(
        this._cache.a02 - this.anchor.x * this.width,
        this._cache.a12 - this.anchor.y * this.height
      ),
        this.getLocalPosition(
          this.center,
          this.offset.x + this.width / 2,
          this.offset.y + this.height / 2
        ),
        this.getLocalPosition(this.topLeft, this.offset.x, this.offset.y),
        this.getLocalPosition(
          this.topRight,
          this.offset.x + this.width,
          this.offset.y
        ),
        this.getLocalPosition(
          this.bottomLeft,
          this.offset.x,
          this.offset.y + this.height
        ),
        this.getLocalPosition(
          this.bottomRight,
          this.offset.x + this.width,
          this.offset.y + this.height
        ),
        (this._cache.left = d.Math.min(
          this.topLeft.x,
          this.topRight.x,
          this.bottomLeft.x,
          this.bottomRight.x
        )),
        (this._cache.right = d.Math.max(
          this.topLeft.x,
          this.topRight.x,
          this.bottomLeft.x,
          this.bottomRight.x
        )),
        (this._cache.top = d.Math.min(
          this.topLeft.y,
          this.topRight.y,
          this.bottomLeft.y,
          this.bottomRight.y
        )),
        (this._cache.bottom = d.Math.max(
          this.topLeft.y,
          this.topRight.y,
          this.bottomLeft.y,
          this.bottomRight.y
        )),
        this.bounds.setTo(
          this._cache.left,
          this._cache.top,
          this._cache.right - this._cache.left,
          this._cache.bottom - this._cache.top
        ),
        (this.updateFrame = !0),
        this.inWorld === !1
          ? ((this.inWorld = d.Rectangle.intersects(
              this.bounds,
              this.game.world.bounds,
              this.inWorldThreshold
            )),
            this.inWorld && (this._outOfBoundsFired = !1))
          : ((this.inWorld = d.Rectangle.intersects(
              this.bounds,
              this.game.world.bounds,
              this.inWorldThreshold
            )),
            this.inWorld === !1 &&
              (this.events.onOutOfBounds.dispatch(this),
              (this._outOfBoundsFired = !0),
              this.outOfBoundsKill && this.kill())),
        (this._cache.cameraVisible = d.Rectangle.intersects(
          this.game.world.camera.screenView,
          this.bounds,
          0
        )),
        this.autoCull && (this.renderable = this._cache.cameraVisible),
        this.body &&
          this.body.updateBounds(
            this.center.x,
            this.center.y,
            this._cache.scaleX,
            this._cache.scaleY
          );
    }),
    (d.Sprite.prototype.getLocalPosition = function (a, b, c) {
      return (
        (a.x =
          (this._cache.a11 * this._cache.id * b +
            -this._cache.a01 * this._cache.id * c +
            (this._cache.a12 * this._cache.a01 -
              this._cache.a02 * this._cache.a11) *
              this._cache.id) *
            this.scale.x +
          this._cache.a02),
        (a.y =
          (this._cache.a00 * this._cache.id * c +
            -this._cache.a10 * this._cache.id * b +
            (-this._cache.a12 * this._cache.a00 +
              this._cache.a02 * this._cache.a10) *
              this._cache.id) *
            this.scale.y +
          this._cache.a12),
        a
      );
    }),
    (d.Sprite.prototype.getLocalUnmodifiedPosition = function (a, b, c) {
      return (
        (a.x =
          this._cache.a11 * this._cache.idi * b +
          -this._cache.i01 * this._cache.idi * c +
          (this._cache.a12 * this._cache.i01 -
            this._cache.a02 * this._cache.a11) *
            this._cache.idi +
          this.anchor.x * this._cache.width),
        (a.y =
          this._cache.a00 * this._cache.idi * c +
          -this._cache.i10 * this._cache.idi * b +
          (-this._cache.a12 * this._cache.a00 +
            this._cache.a02 * this._cache.i10) *
            this._cache.idi +
          this.anchor.y * this._cache.height),
        a
      );
    }),
    (d.Sprite.prototype.resetCrop = function () {
      (this.crop = new d.Rectangle(
        0,
        0,
        this._cache.width,
        this._cache.height
      )),
        this.texture.setFrame(this.crop),
        (this.cropEnabled = !1);
    }),
    (d.Sprite.prototype.postUpdate = function () {
      this.key instanceof d.BitmapData && this.key._dirty && this.key.render(),
        this.exists &&
          (this.body && this.body.postUpdate(),
          this.fixedToCamera
            ? ((this._cache.x = this.game.camera.view.x + this.cameraOffset.x),
              (this._cache.y = this.game.camera.view.y + this.cameraOffset.y))
            : ((this._cache.x = this.x), (this._cache.y = this.y)),
          this.world.setTo(
            this.game.camera.x + this.worldTransform[2],
            this.game.camera.y + this.worldTransform[5]
          ),
          (this.position.x = this._cache.x),
          (this.position.y = this._cache.y));
    }),
    (d.Sprite.prototype.loadTexture = function (a, b) {
      (this.key = a),
        a instanceof d.RenderTexture
          ? (this.currentFrame = this.game.cache.getTextureFrame(a.name))
          : a instanceof d.BitmapData
          ? (this.setTexture(a.texture), (this.currentFrame = a.textureFrame))
          : a instanceof c.Texture
          ? (this.currentFrame = b)
          : (("undefined" == typeof a ||
              this.game.cache.checkImageKey(a) === !1) &&
              ((a = "__default"), (this.key = a)),
            this.game.cache.isSpriteSheet(a)
              ? (this.animations.loadFrameData(this.game.cache.getFrameData(a)),
                "undefined" != typeof b &&
                  ("string" == typeof b
                    ? (this.frameName = b)
                    : (this.frame = b)))
              : ((this.currentFrame = this.game.cache.getFrame(a)),
                this.setTexture(c.TextureCache[a])));
    }),
    (d.Sprite.prototype.centerOn = function (a, b) {
      return (
        (this.x = a + (this.x - this.center.x)),
        (this.y = b + (this.y - this.center.y)),
        this
      );
    }),
    (d.Sprite.prototype.revive = function (a) {
      return (
        "undefined" == typeof a && (a = 1),
        (this.alive = !0),
        (this.exists = !0),
        (this.visible = !0),
        (this.health = a),
        this.events && this.events.onRevived.dispatch(this),
        this
      );
    }),
    (d.Sprite.prototype.kill = function () {
      return (
        (this.alive = !1),
        (this.exists = !1),
        (this.visible = !1),
        this.events && this.events.onKilled.dispatch(this),
        this
      );
    }),
    (d.Sprite.prototype.destroy = function () {
      this.group && this.group.remove(this),
        this.input && this.input.destroy(),
        this.events && this.events.destroy(),
        this.animations && this.animations.destroy(),
        (this.alive = !1),
        (this.exists = !1),
        (this.visible = !1),
        (this.game = null);
    }),
    (d.Sprite.prototype.damage = function (a) {
      return (
        this.alive && ((this.health -= a), this.health < 0 && this.kill()), this
      );
    }),
    (d.Sprite.prototype.reset = function (a, b, c) {
      return (
        "undefined" == typeof c && (c = 1),
        (this.x = a),
        (this.y = b),
        (this.position.x = this.x),
        (this.position.y = this.y),
        (this.alive = !0),
        (this.exists = !0),
        (this.visible = !0),
        (this.renderable = !0),
        (this._outOfBoundsFired = !1),
        (this.health = c),
        this.body && this.body.reset(),
        this
      );
    }),
    (d.Sprite.prototype.bringToTop = function () {
      return (
        this.group
          ? this.group.bringToTop(this)
          : this.game.world.bringToTop(this),
        this
      );
    }),
    (d.Sprite.prototype.play = function (a, b, c, d) {
      return this.animations ? this.animations.play(a, b, c, d) : void 0;
    }),
    Object.defineProperty(d.Sprite.prototype, "angle", {
      get: function () {
        return d.Math.wrapAngle(d.Math.radToDeg(this.rotation));
      },
      set: function (a) {
        this.rotation = d.Math.degToRad(d.Math.wrapAngle(a));
      },
    }),
    Object.defineProperty(d.Sprite.prototype, "frame", {
      get: function () {
        return this.animations.frame;
      },
      set: function (a) {
        this.animations.frame = a;
      },
    }),
    Object.defineProperty(d.Sprite.prototype, "frameName", {
      get: function () {
        return this.animations.frameName;
      },
      set: function (a) {
        this.animations.frameName = a;
      },
    }),
    Object.defineProperty(d.Sprite.prototype, "inCamera", {
      get: function () {
        return this._cache.cameraVisible;
      },
    }),
    Object.defineProperty(d.Sprite.prototype, "width", {
      get: function () {
        return this.scale.x * this.currentFrame.width;
      },
      set: function (a) {
        (this.scale.x = a / this.currentFrame.width),
          (this._cache.scaleX = a / this.currentFrame.width),
          (this._width = a);
      },
    }),
    Object.defineProperty(d.Sprite.prototype, "height", {
      get: function () {
        return this.scale.y * this.currentFrame.height;
      },
      set: function (a) {
        (this.scale.y = a / this.currentFrame.height),
          (this._cache.scaleY = a / this.currentFrame.height),
          (this._height = a);
      },
    }),
    Object.defineProperty(d.Sprite.prototype, "inputEnabled", {
      get: function () {
        return this.input.enabled;
      },
      set: function (a) {
        console.log("inputEnabled", a, this.input),
          a
            ? this.input.enabled === !1 && this.input.start()
            : this.input.enabled && this.input.stop();
      },
    }),
    (d.TileSprite = function (a, b, e, f, g, h, i) {
      (b = b || 0),
        (e = e || 0),
        (f = f || 256),
        (g = g || 256),
        (h = h || null),
        (i = i || null),
        d.Sprite.call(this, a, b, e, h, i),
        (this.texture = c.TextureCache[h]),
        c.TilingSprite.call(this, this.texture, f, g),
        (this.type = d.TILESPRITE),
        (this.tileScale = new d.Point(1, 1)),
        (this.tilePosition = new d.Point(0, 0));
    }),
    (d.TileSprite.prototype = d.Utils.extend(
      !0,
      c.TilingSprite.prototype,
      d.Sprite.prototype
    )),
    (d.TileSprite.prototype.constructor = d.TileSprite),
    (d.Text = function (a, b, e, f, g) {
      (b = b || 0),
        (e = e || 0),
        (f = f || ""),
        (g = g || ""),
        (this.game = a),
        (this.exists = !0),
        (this.alive = !0),
        (this.group = null),
        (this.name = ""),
        (this.type = d.TEXT),
        (this._text = f),
        (this._style = g),
        c.Text.call(this, f, g),
        (this.position.x = this.x = b),
        (this.position.y = this.y = e),
        (this.anchor = new d.Point()),
        (this.scale = new d.Point(1, 1)),
        (this._cache = {
          dirty: !1,
          a00: 1,
          a01: 0,
          a02: b,
          a10: 0,
          a11: 1,
          a12: e,
          id: 1,
          x: -1,
          y: -1,
          scaleX: 1,
          scaleY: 1,
        }),
        (this._cache.x = this.x),
        (this._cache.y = this.y),
        (this.renderable = !0);
    }),
    (d.Text.prototype = Object.create(c.Text.prototype)),
    (d.Text.prototype.constructor = d.Text),
    (d.Text.prototype.update = function () {
      this.exists &&
        ((this._cache.dirty = !1),
        (this._cache.x = this.x),
        (this._cache.y = this.y),
        (this.position.x != this._cache.x ||
          this.position.y != this._cache.y) &&
          ((this.position.x = this._cache.x),
          (this.position.y = this._cache.y),
          (this._cache.dirty = !0)));
    }),
    (d.Text.prototype.destroy = function () {
      this.group && this.group.remove(this),
        this.canvas.parentNode
          ? this.canvas.parentNode.removeChild(this.canvas)
          : ((this.canvas = null), (this.context = null)),
        (this.exists = !1),
        (this.group = null);
    }),
    Object.defineProperty(d.Text.prototype, "angle", {
      get: function () {
        return d.Math.radToDeg(this.rotation);
      },
      set: function (a) {
        this.rotation = d.Math.degToRad(a);
      },
    }),
    Object.defineProperty(d.Text.prototype, "x", {
      get: function () {
        return this.position.x;
      },
      set: function (a) {
        this.position.x = a;
      },
    }),
    Object.defineProperty(d.Text.prototype, "y", {
      get: function () {
        return this.position.y;
      },
      set: function (a) {
        this.position.y = a;
      },
    }),
    Object.defineProperty(d.Text.prototype, "content", {
      get: function () {
        return this._text;
      },
      set: function (a) {
        a !== this._text && ((this._text = a), this.setText(a));
      },
    }),
    Object.defineProperty(d.Text.prototype, "font", {
      get: function () {
        return this._style;
      },
      set: function (a) {
        a !== this._style && ((this._style = a), this.setStyle(a));
      },
    }),
    (d.BitmapText = function (a, b, e, f, g) {
      (b = b || 0),
        (e = e || 0),
        (f = f || ""),
        (g = g || ""),
        (this.game = a),
        (this.exists = !0),
        (this.alive = !0),
        (this.group = null),
        (this.name = ""),
        (this.type = d.BITMAPTEXT),
        c.BitmapText.call(this, f, g),
        (this.position.x = b),
        (this.position.y = e),
        (this.anchor = new d.Point()),
        (this.scale = new d.Point(1, 1)),
        (this._cache = {
          dirty: !1,
          a00: 1,
          a01: 0,
          a02: b,
          a10: 0,
          a11: 1,
          a12: e,
          id: 1,
          x: -1,
          y: -1,
          scaleX: 1,
          scaleY: 1,
        }),
        (this._cache.x = this.x),
        (this._cache.y = this.y),
        (this.renderable = !0);
    }),
    (d.BitmapText.prototype = Object.create(c.BitmapText.prototype)),
    (d.BitmapText.prototype.constructor = d.BitmapText),
    (d.BitmapText.prototype.update = function () {
      this.exists &&
        ((this._cache.dirty = !1),
        (this._cache.x = this.x),
        (this._cache.y = this.y),
        (this.position.x != this._cache.x ||
          this.position.y != this._cache.y) &&
          ((this.position.x = this._cache.x),
          (this.position.y = this._cache.y),
          (this._cache.dirty = !0)),
        (this.pivot.x = this.anchor.x * this.width),
        (this.pivot.y = this.anchor.y * this.height));
    }),
    (d.BitmapText.prototype.destroy = function () {
      this.group && this.group.remove(this),
        this.canvas && this.canvas.parentNode
          ? this.canvas.parentNode.removeChild(this.canvas)
          : ((this.canvas = null), (this.context = null)),
        (this.exists = !1),
        (this.group = null);
    }),
    Object.defineProperty(d.BitmapText.prototype, "angle", {
      get: function () {
        return d.Math.radToDeg(this.rotation);
      },
      set: function (a) {
        this.rotation = d.Math.degToRad(a);
      },
    }),
    Object.defineProperty(d.BitmapText.prototype, "x", {
      get: function () {
        return this.position.x;
      },
      set: function (a) {
        this.position.x = a;
      },
    }),
    Object.defineProperty(d.BitmapText.prototype, "y", {
      get: function () {
        return this.position.y;
      },
      set: function (a) {
        this.position.y = a;
      },
    }),
    (d.Button = function (a, b, c, e, f, g, h, i, j) {
      (b = b || 0),
        (c = c || 0),
        (e = e || null),
        (f = f || null),
        (g = g || this),
        d.Sprite.call(this, a, b, c, e, i),
        (this.type = d.BUTTON),
        (this._onOverFrameName = null),
        (this._onOutFrameName = null),
        (this._onDownFrameName = null),
        (this._onUpFrameName = null),
        (this._onOverFrameID = null),
        (this._onOutFrameID = null),
        (this._onDownFrameID = null),
        (this._onUpFrameID = null),
        (this.onOverSound = null),
        (this.onOutSound = null),
        (this.onDownSound = null),
        (this.onUpSound = null),
        (this.onOverSoundMarker = ""),
        (this.onOutSoundMarker = ""),
        (this.onDownSoundMarker = ""),
        (this.onUpSoundMarker = ""),
        (this.onInputOver = new d.Signal()),
        (this.onInputOut = new d.Signal()),
        (this.onInputDown = new d.Signal()),
        (this.onInputUp = new d.Signal()),
        (this.freezeFrames = !1),
        (this.forceOut = !0),
        this.setFrames(h, i, j),
        null !== f && this.onInputUp.add(f, g),
        this.input.start(0, !0),
        this.events.onInputOver.add(this.onInputOverHandler, this),
        this.events.onInputOut.add(this.onInputOutHandler, this),
        this.events.onInputDown.add(this.onInputDownHandler, this),
        this.events.onInputUp.add(this.onInputUpHandler, this);
    }),
    (d.Button.prototype = Object.create(d.Sprite.prototype)),
    (d.Button.prototype = d.Utils.extend(
      !0,
      d.Button.prototype,
      d.Sprite.prototype,
      c.Sprite.prototype
    )),
    (d.Button.prototype.constructor = d.Button),
    (d.Button.prototype.setFrames = function (a, b, c) {
      null !== a &&
        ("string" == typeof a
          ? ((this._onOverFrameName = a),
            this.input.pointerOver() && (this.frameName = a))
          : ((this._onOverFrameID = a),
            this.input.pointerOver() && (this.frame = a))),
        null !== b &&
          ("string" == typeof b
            ? ((this._onOutFrameName = b),
              (this._onUpFrameName = b),
              this.input.pointerOver() === !1 && (this.frameName = b))
            : ((this._onOutFrameID = b),
              (this._onUpFrameID = b),
              this.input.pointerOver() === !1 && (this.frame = b))),
        null !== c &&
          ("string" == typeof c
            ? ((this._onDownFrameName = c),
              this.input.pointerDown() && (this.frameName = c))
            : ((this._onDownFrameID = c),
              this.input.pointerDown() && (this.frame = c)));
    }),
    (d.Button.prototype.setSounds = function (a, b, c, d, e, f, g, h) {
      this.setOverSound(a, b),
        this.setOutSound(e, f),
        this.setUpSound(g, h),
        this.setDownSound(c, d);
    }),
    (d.Button.prototype.setOverSound = function (a, b) {
      (this.onOverSound = null),
        (this.onOverSoundMarker = ""),
        a instanceof d.Sound && (this.onOverSound = a),
        "string" == typeof b && (this.onOverSoundMarker = b);
    }),
    (d.Button.prototype.setOutSound = function (a, b) {
      (this.onOutSound = null),
        (this.onOutSoundMarker = ""),
        a instanceof d.Sound && (this.onOutSound = a),
        "string" == typeof b && (this.onOutSoundMarker = b);
    }),
    (d.Button.prototype.setUpSound = function (a, b) {
      (this.onUpSound = null),
        (this.onUpSoundMarker = ""),
        a instanceof d.Sound && (this.onUpSound = a),
        "string" == typeof b && (this.onUpSoundMarker = b);
    }),
    (d.Button.prototype.setDownSound = function (a, b) {
      (this.onDownSound = null),
        (this.onDownSoundMarker = ""),
        a instanceof d.Sound && (this.onDownSound = a),
        "string" == typeof b && (this.onDownSoundMarker = b);
    }),
    (d.Button.prototype.onInputOverHandler = function (a) {
      this.freezeFrames === !1 &&
        (null != this._onOverFrameName
          ? (this.frameName = this._onOverFrameName)
          : null != this._onOverFrameID && (this.frame = this._onOverFrameID)),
        this.onOverSound && this.onOverSound.play(this.onOverSoundMarker),
        this.onInputOver && this.onInputOver.dispatch(this, a);
    }),
    (d.Button.prototype.onInputOutHandler = function (a) {
      this.freezeFrames === !1 &&
        (null != this._onOutFrameName
          ? (this.frameName = this._onOutFrameName)
          : null != this._onOutFrameID && (this.frame = this._onOutFrameID)),
        this.onOutSound && this.onOutSound.play(this.onOutSoundMarker),
        this.onInputOut && this.onInputOut.dispatch(this, a);
    }),
    (d.Button.prototype.onInputDownHandler = function (a) {
      this.freezeFrames === !1 &&
        (null != this._onDownFrameName
          ? (this.frameName = this._onDownFrameName)
          : null != this._onDownFrameID && (this.frame = this._onDownFrameID)),
        this.onDownSound && this.onDownSound.play(this.onDownSoundMarker),
        this.onInputDown && this.onInputDown.dispatch(this, a);
    }),
    (d.Button.prototype.onInputUpHandler = function (a) {
      this.freezeFrames === !1 &&
        (null != this._onUpFrameName
          ? (this.frameName = this._onUpFrameName)
          : null != this._onUpFrameID && (this.frame = this._onUpFrameID)),
        this.onUpSound && this.onUpSound.play(this.onUpSoundMarker),
        this.forceOut &&
          this.freezeFrames === !1 &&
          (null != this._onOutFrameName
            ? (this.frameName = this._onOutFrameName)
            : null != this._onOutFrameID && (this.frame = this._onOutFrameID)),
        this.onInputUp && this.onInputUp.dispatch(this, a);
    }),
    (d.Graphics = function (a, b, e) {
      (this.game = a),
        c.Graphics.call(this),
        (this.type = d.GRAPHICS),
        (this.position.x = b),
        (this.position.y = e);
    }),
    (d.Graphics.prototype = Object.create(c.Graphics.prototype)),
    (d.Graphics.prototype.constructor = d.Graphics),
    (d.Graphics.prototype.destroy = function () {
      this.clear(), this.group && this.group.remove(this), (this.game = null);
    }),
    (d.Graphics.prototype.drawPolygon = function (a) {
      this.moveTo(a.points[0].x, a.points[0].y);
      for (var b = 1; b < a.points.length; b += 1)
        this.lineTo(a.points[b].x, a.points[b].y);
      this.lineTo(a.points[0].x, a.points[0].y);
    }),
    Object.defineProperty(d.Graphics.prototype, "angle", {
      get: function () {
        return d.Math.wrapAngle(d.Math.radToDeg(this.rotation));
      },
      set: function (a) {
        this.rotation = d.Math.degToRad(d.Math.wrapAngle(a));
      },
    }),
    Object.defineProperty(d.Graphics.prototype, "x", {
      get: function () {
        return this.position.x;
      },
      set: function (a) {
        this.position.x = a;
      },
    }),
    Object.defineProperty(d.Graphics.prototype, "y", {
      get: function () {
        return this.position.y;
      },
      set: function (a) {
        this.position.y = a;
      },
    }),
    (d.RenderTexture = function (a, b, e, f) {
      (this.game = a),
        (this.name = b),
        c.EventTarget.call(this),
        (this.width = e || 100),
        (this.height = f || 100),
        (this.indetityMatrix = c.mat3.create()),
        (this.frame = new c.Rectangle(0, 0, this.width, this.height)),
        (this.type = d.RENDERTEXTURE),
        (this._tempPoint = { x: 0, y: 0 }),
        c.gl ? this.initWebGL() : this.initCanvas();
    }),
    (d.RenderTexture.prototype = Object.create(c.Texture.prototype)),
    (d.RenderTexture.prototype.constructor = c.RenderTexture),
    (d.RenderTexture.prototype.render = function (a, b, e) {
      "undefined" == typeof b && (b = !1),
        "undefined" == typeof e && (e = !1),
        a instanceof d.Group && (a = a._container),
        c.gl ? this.renderWebGL(a, b, e) : this.renderCanvas(a, b, e);
    }),
    (d.RenderTexture.prototype.renderXY = function (a, b, c, d) {
      (this._tempPoint.x = b),
        (this._tempPoint.y = c),
        this.render(a, this._tempPoint, d);
    }),
    (d.RenderTexture.prototype.initWebGL = function () {
      var a = c.gl;
      (this.glFramebuffer = a.createFramebuffer()),
        a.bindFramebuffer(a.FRAMEBUFFER, this.glFramebuffer),
        (this.glFramebuffer.width = this.width),
        (this.glFramebuffer.height = this.height),
        (this.baseTexture = new c.BaseTexture()),
        (this.baseTexture.width = this.width),
        (this.baseTexture.height = this.height),
        (this.baseTexture._glTexture = a.createTexture()),
        a.bindTexture(a.TEXTURE_2D, this.baseTexture._glTexture),
        a.texImage2D(
          a.TEXTURE_2D,
          0,
          a.RGBA,
          this.width,
          this.height,
          0,
          a.RGBA,
          a.UNSIGNED_BYTE,
          null
        ),
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR),
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR),
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE),
        a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE),
        (this.baseTexture.isRender = !0),
        a.bindFramebuffer(a.FRAMEBUFFER, this.glFramebuffer),
        a.framebufferTexture2D(
          a.FRAMEBUFFER,
          a.COLOR_ATTACHMENT0,
          a.TEXTURE_2D,
          this.baseTexture._glTexture,
          0
        ),
        (this.projection = new c.Point(this.width / 2, -this.height / 2));
    }),
    (d.RenderTexture.prototype.resize = function (a, b) {
      if (((this.width = a), (this.height = b), c.gl)) {
        (this.projection.x = this.width / 2),
          (this.projection.y = -this.height / 2);
        var d = c.gl;
        d.bindTexture(d.TEXTURE_2D, this.baseTexture._glTexture),
          d.texImage2D(
            d.TEXTURE_2D,
            0,
            d.RGBA,
            this.width,
            this.height,
            0,
            d.RGBA,
            d.UNSIGNED_BYTE,
            null
          );
      } else
        (this.frame.width = this.width),
          (this.frame.height = this.height),
          this.renderer.resize(this.width, this.height);
    }),
    (d.RenderTexture.prototype.initCanvas = function () {
      (this.renderer = new c.CanvasRenderer(this.width, this.height, null, 0)),
        (this.baseTexture = new c.BaseTexture(this.renderer.view)),
        (this.frame = new c.Rectangle(0, 0, this.width, this.height));
    }),
    (d.RenderTexture.prototype.renderWebGL = function (a, b, d) {
      var e = c.gl;
      e.colorMask(!0, !0, !0, !0),
        e.viewport(0, 0, this.width, this.height),
        e.bindFramebuffer(e.FRAMEBUFFER, this.glFramebuffer),
        d && (e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT));
      var f = a.children,
        g = a.worldTransform;
      (a.worldTransform = c.mat3.create()),
        (a.worldTransform[4] = -1),
        (a.worldTransform[5] = -2 * this.projection.y),
        b && ((a.worldTransform[2] = b.x), (a.worldTransform[5] -= b.y)),
        c.visibleCount++,
        (a.vcount = c.visibleCount);
      for (var h = 0, i = f.length; i > h; h++) f[h].updateTransform();
      var j = a.__renderGroup;
      j
        ? a == j.root
          ? j.render(this.projection, this.glFramebuffer)
          : j.renderSpecific(a, this.projection, this.glFramebuffer)
        : (this.renderGroup || (this.renderGroup = new c.WebGLRenderGroup(e)),
          this.renderGroup.setRenderable(a),
          this.renderGroup.render(this.projection, this.glFramebuffer)),
        (a.worldTransform = g);
    }),
    (d.RenderTexture.prototype.renderCanvas = function (a, b, d) {
      var e = a.children;
      (a.worldTransform = c.mat3.create()),
        b && ((a.worldTransform[2] = b.x), (a.worldTransform[5] = b.y));
      for (var f = 0, g = e.length; g > f; f++) e[f].updateTransform();
      d && this.renderer.context.clearRect(0, 0, this.width, this.height),
        this.renderer.renderDisplayObject(a),
        this.renderer.context.setTransform(1, 0, 0, 1, 0, 0);
    }),
    (d.Canvas = {
      create: function (a, b) {
        (a = a || 256), (b = b || 256);
        var c = document.createElement("canvas");
        return (c.width = a), (c.height = b), (c.style.display = "block"), c;
      },
      getOffset: function (a, b) {
        b = b || new d.Point();
        var c = a.getBoundingClientRect(),
          e = a.clientTop || document.body.clientTop || 0,
          f = a.clientLeft || document.body.clientLeft || 0,
          g = window.pageYOffset || a.scrollTop || document.body.scrollTop,
          h = window.pageXOffset || a.scrollLeft || document.body.scrollLeft;
        return (b.x = c.left + h - f), (b.y = c.top + g - e), b;
      },
      getAspectRatio: function (a) {
        return a.width / a.height;
      },
      setBackgroundColor: function (a, b) {
        return (b = b || "rgb(0,0,0)"), (a.style.backgroundColor = b), a;
      },
      setTouchAction: function (a, b) {
        return (
          (b = b || "none"),
          (a.style.msTouchAction = b),
          (a.style["ms-touch-action"] = b),
          (a.style["touch-action"] = b),
          a
        );
      },
      setUserSelect: function (a, b) {
        return (
          (b = b || "none"),
          (a.style["-webkit-touch-callout"] = b),
          (a.style["-webkit-user-select"] = b),
          (a.style["-khtml-user-select"] = b),
          (a.style["-moz-user-select"] = b),
          (a.style["-ms-user-select"] = b),
          (a.style["user-select"] = b),
          (a.style["-webkit-tap-highlight-color"] = "rgba(0, 0, 0, 0)"),
          a
        );
      },
      addToDOM: function (a, b, c) {
        var d;
        return (
          "undefined" == typeof c && (c = !0),
          b &&
            ("string" == typeof b
              ? (d = document.getElementById(b))
              : "object" == typeof b && 1 === b.nodeType && (d = b),
            c && (d.style.overflow = "hidden")),
          d || (d = document.body),
          d.appendChild(a),
          a
        );
      },
      setTransform: function (a, b, c, d, e, f, g) {
        return a.setTransform(d, f, g, e, b, c), a;
      },
      setSmoothingEnabled: function (a, b) {
        return (
          (a.imageSmoothingEnabled = b),
          (a.mozImageSmoothingEnabled = b),
          (a.oImageSmoothingEnabled = b),
          (a.webkitImageSmoothingEnabled = b),
          (a.msImageSmoothingEnabled = b),
          a
        );
      },
      setImageRenderingCrisp: function (a) {
        return (
          (a.style["image-rendering"] = "crisp-edges"),
          (a.style["image-rendering"] = "-moz-crisp-edges"),
          (a.style["image-rendering"] = "-webkit-optimize-contrast"),
          (a.style.msInterpolationMode = "nearest-neighbor"),
          a
        );
      },
      setImageRenderingBicubic: function (a) {
        return (
          (a.style["image-rendering"] = "auto"),
          (a.style.msInterpolationMode = "bicubic"),
          a
        );
      },
    }),
    (d.StageScaleMode = function (a, b, c) {
      (this.game = a),
        (this.width = b),
        (this.height = c),
        (this.minWidth = null),
        (this.maxWidth = null),
        (this.minHeight = null),
        (this.maxHeight = null),
        (this._startHeight = 0),
        (this.forceLandscape = !1),
        (this.forcePortrait = !1),
        (this.incorrectOrientation = !1),
        (this.pageAlignHorizontally = !1),
        (this.pageAlignVertically = !1),
        (this._width = 0),
        (this._height = 0),
        (this.maxIterations = 5),
        (this.orientationSprite = null),
        (this.enterLandscape = new d.Signal()),
        (this.enterPortrait = new d.Signal()),
        (this.enterIncorrectOrientation = new d.Signal()),
        (this.leaveIncorrectOrientation = new d.Signal()),
        (this.hasResized = new d.Signal()),
        (this.orientation = window.orientation
          ? window.orientation
          : window.outerWidth > window.outerHeight
          ? 90
          : 0),
        (this.scaleFactor = new d.Point(1, 1)),
        (this.scaleFactorInversed = new d.Point(1, 1)),
        (this.margin = new d.Point(0, 0)),
        (this.aspectRatio = 0),
        (this.event = null);
      var e = this;
      window.addEventListener(
        "orientationchange",
        function (a) {
          return e.checkOrientation(a);
        },
        !1
      ),
        window.addEventListener(
          "resize",
          function (a) {
            return e.checkResize(a);
          },
          !1
        ),
        document.addEventListener(
          "webkitfullscreenchange",
          function (a) {
            return e.fullScreenChange(a);
          },
          !1
        ),
        document.addEventListener(
          "mozfullscreenchange",
          function (a) {
            return e.fullScreenChange(a);
          },
          !1
        ),
        document.addEventListener(
          "fullscreenchange",
          function (a) {
            return e.fullScreenChange(a);
          },
          !1
        );
    }),
    (d.StageScaleMode.EXACT_FIT = 0),
    (d.StageScaleMode.NO_SCALE = 1),
    (d.StageScaleMode.SHOW_ALL = 2),
    (d.StageScaleMode.prototype = {
      startFullScreen: function (a) {
        if (!this.isFullScreen) {
          "undefined" != typeof a &&
            d.Canvas.setSmoothingEnabled(this.game.context, a);
          var b = this.game.canvas;
          (this._width = this.width),
            (this._height = this.height),
            console.log("startFullScreen", this._width, this._height),
            b.requestFullScreen
              ? b.requestFullScreen()
              : b.mozRequestFullScreen
              ? b.mozRequestFullScreen()
              : b.webkitRequestFullScreen &&
                b.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      },
      stopFullScreen: function () {
        document.cancelFullScreen
          ? document.cancelFullScreen()
          : document.mozCancelFullScreen
          ? document.mozCancelFullScreen()
          : document.webkitCancelFullScreen &&
            document.webkitCancelFullScreen();
      },
      fullScreenChange: function (a) {
        (this.event = a),
          this.isFullScreen
            ? ((this.game.stage.canvas.style.width = "100%"),
              (this.game.stage.canvas.style.height = "100%"),
              this.setMaximum(),
              this.game.input.scale.setTo(
                this.game.width / this.width,
                this.game.height / this.height
              ),
              (this.aspectRatio = this.width / this.height),
              (this.scaleFactor.x = this.game.width / this.width),
              (this.scaleFactor.y = this.game.height / this.height))
            : ((this.game.stage.canvas.style.width = this.game.width + "px"),
              (this.game.stage.canvas.style.height = this.game.height + "px"),
              (this.width = this._width),
              (this.height = this._height),
              this.game.input.scale.setTo(
                this.game.width / this.width,
                this.game.height / this.height
              ),
              (this.aspectRatio = this.width / this.height),
              (this.scaleFactor.x = this.game.width / this.width),
              (this.scaleFactor.y = this.game.height / this.height));
      },
      forceOrientation: function (a, b, d) {
        "undefined" == typeof b && (b = !1),
          (this.forceLandscape = a),
          (this.forcePortrait = b),
          "undefined" != typeof d &&
            ((null == d || this.game.cache.checkImageKey(d) === !1) &&
              (d = "__default"),
            (this.orientationSprite = new c.Sprite(c.TextureCache[d])),
            (this.orientationSprite.anchor.x = 0.5),
            (this.orientationSprite.anchor.y = 0.5),
            (this.orientationSprite.position.x = this.game.width / 2),
            (this.orientationSprite.position.y = this.game.height / 2),
            this.checkOrientationState(),
            this.incorrectOrientation
              ? ((this.orientationSprite.visible = !0),
                (this.game.world.visible = !1))
              : ((this.orientationSprite.visible = !1),
                (this.game.world.visible = !0)),
            this.game.stage._stage.addChild(this.orientationSprite));
      },
      checkOrientationState: function () {
        this.incorrectOrientation
          ? ((this.forceLandscape && window.innerWidth > window.innerHeight) ||
              (this.forcePortrait && window.innerHeight > window.innerWidth)) &&
            ((this.game.paused = !1),
            (this.incorrectOrientation = !1),
            this.leaveIncorrectOrientation.dispatch(),
            this.orientationSprite &&
              ((this.orientationSprite.visible = !1),
              (this.game.world.visible = !0)),
            this.refresh())
          : ((this.forceLandscape && window.innerWidth < window.innerHeight) ||
              (this.forcePortrait && window.innerHeight < window.innerWidth)) &&
            ((this.game.paused = !0),
            (this.incorrectOrientation = !0),
            this.enterIncorrectOrientation.dispatch(),
            this.orientationSprite &&
              this.orientationSprite.visible === !1 &&
              ((this.orientationSprite.visible = !0),
              (this.game.world.visible = !1)),
            this.refresh());
      },
      checkOrientation: function (a) {
        (this.event = a),
          (this.orientation = window.orientation),
          this.isLandscape
            ? this.enterLandscape.dispatch(this.orientation, !0, !1)
            : this.enterPortrait.dispatch(this.orientation, !1, !0),
          this.game.stage.scaleMode !== d.StageScaleMode.NO_SCALE &&
            this.refresh();
      },
      checkResize: function (a) {
        (this.event = a),
          (this.orientation = window.outerWidth > window.outerHeight ? 90 : 0),
          this.isLandscape
            ? this.enterLandscape.dispatch(this.orientation, !0, !1)
            : this.enterPortrait.dispatch(this.orientation, !1, !0),
          this.game.stage.scaleMode !== d.StageScaleMode.NO_SCALE &&
            this.refresh(),
          this.checkOrientationState();
      },
      refresh: function () {
        if (
          (this.game.device.iPad === !1 &&
            this.game.device.webApp === !1 &&
            this.game.device.desktop === !1 &&
            (this.game.device.android && this.game.device.chrome === !1
              ? window.scrollTo(0, 1)
              : window.scrollTo(0, 0)),
          null == this._check && this.maxIterations > 0)
        ) {
          this._iterations = this.maxIterations;
          var a = this;
          (this._check = window.setInterval(function () {
            return a.setScreenSize();
          }, 10)),
            this.setScreenSize();
        }
      },
      setScreenSize: function (a) {
        "undefined" == typeof a && (a = !1),
          this.game.device.iPad === !1 &&
            this.game.device.webApp === !1 &&
            this.game.device.desktop === !1 &&
            (this.game.device.android && this.game.device.chrome === !1
              ? window.scrollTo(0, 1)
              : window.scrollTo(0, 0)),
          this._iterations--,
          (a ||
            window.innerHeight > this._startHeight ||
            this._iterations < 0) &&
            ((document.documentElement.style.minHeight =
              window.innerHeight + "px"),
            this.incorrectOrientation === !0
              ? this.setMaximum()
              : this.game.stage.scaleMode == d.StageScaleMode.EXACT_FIT
              ? this.setExactFit()
              : this.game.stage.scaleMode == d.StageScaleMode.SHOW_ALL &&
                this.setShowAll(),
            this.setSize(),
            clearInterval(this._check),
            (this._check = null));
      },
      setSize: function () {
        this.incorrectOrientation === !1 &&
          (this.maxWidth &&
            this.width > this.maxWidth &&
            (this.width = this.maxWidth),
          this.maxHeight &&
            this.height > this.maxHeight &&
            (this.height = this.maxHeight),
          this.minWidth &&
            this.width < this.minWidth &&
            (this.width = this.minWidth),
          this.minHeight &&
            this.height < this.minHeight &&
            (this.height = this.minHeight)),
          (this.game.canvas.style.width = this.width + "px"),
          (this.game.canvas.style.height = this.height + "px"),
          this.game.input.scale.setTo(
            this.game.width / this.width,
            this.game.height / this.height
          ),
          this.pageAlignHorizontally &&
            (this.width < window.innerWidth && this.incorrectOrientation === !1
              ? ((this.margin.x = Math.round(
                  (window.innerWidth - this.width) / 2
                )),
                (this.game.canvas.style.marginLeft = this.margin.x + "px"))
              : ((this.margin.x = 0),
                (this.game.canvas.style.marginLeft = "0px"))),
          this.pageAlignVertically &&
            (this.height < window.innerHeight &&
            this.incorrectOrientation === !1
              ? ((this.margin.y = Math.round(
                  (window.innerHeight - this.height) / 2
                )),
                (this.game.canvas.style.marginTop = this.margin.y + "px"))
              : ((this.margin.y = 0),
                (this.game.canvas.style.marginTop = "0px"))),
          d.Canvas.getOffset(this.game.canvas, this.game.stage.offset),
          (this.aspectRatio = this.width / this.height),
          (this.scaleFactor.x = this.game.width / this.width),
          (this.scaleFactor.y = this.game.height / this.height),
          (this.scaleFactorInversed.x = this.width / this.game.width),
          (this.scaleFactorInversed.y = this.height / this.game.height),
          this.hasResized.dispatch(this.width, this.height),
          this.checkOrientationState();
      },
      setMaximum: function () {
        (this.width = window.innerWidth), (this.height = window.innerHeight);
      },
      setShowAll: function () {
        var a = Math.min(
          window.innerHeight / this.game.height,
          window.innerWidth / this.game.width
        );
        (this.width = Math.round(this.game.width * a)),
          (this.height = Math.round(this.game.height * a));
      },
      setExactFit: function () {
        var a = window.innerWidth,
          b = window.innerHeight;
        (this.width = this.maxWidth && a > this.maxWidth ? this.maxWidth : a),
          (this.height =
            this.maxHeight && b > this.maxHeight ? this.maxHeight : b);
      },
    }),
    Object.defineProperty(d.StageScaleMode.prototype, "isFullScreen", {
      get: function () {
        return (
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement
        );
      },
    }),
    Object.defineProperty(d.StageScaleMode.prototype, "isPortrait", {
      get: function () {
        return 0 === this.orientation || 180 == this.orientation;
      },
    }),
    Object.defineProperty(d.StageScaleMode.prototype, "isLandscape", {
      get: function () {
        return 90 === this.orientation || -90 === this.orientation;
      },
    }),
    (d.Device = function () {
      (this.patchAndroidClearRectBug = !1),
        (this.desktop = !1),
        (this.iOS = !1),
        (this.cocoonJS = !1),
        (this.android = !1),
        (this.chromeOS = !1),
        (this.linux = !1),
        (this.macOS = !1),
        (this.windows = !1),
        (this.canvas = !1),
        (this.file = !1),
        (this.fileSystem = !1),
        (this.localStorage = !1),
        (this.webGL = !1),
        (this.worker = !1),
        (this.touch = !1),
        (this.mspointer = !1),
        (this.css3D = !1),
        (this.pointerLock = !1),
        (this.typedArray = !1),
        (this.arora = !1),
        (this.chrome = !1),
        (this.epiphany = !1),
        (this.firefox = !1),
        (this.ie = !1),
        (this.ieVersion = 0),
        (this.mobileSafari = !1),
        (this.midori = !1),
        (this.opera = !1),
        (this.safari = !1),
        (this.webApp = !1),
        (this.audioData = !1),
        (this.webAudio = !1),
        (this.ogg = !1),
        (this.opus = !1),
        (this.mp3 = !1),
        (this.wav = !1),
        (this.m4a = !1),
        (this.webm = !1),
        (this.iPhone = !1),
        (this.iPhone4 = !1),
        (this.iPad = !1),
        (this.pixelRatio = 0),
        (this.littleEndian = !1),
        this._checkAudio(),
        this._checkBrowser(),
        this._checkCSS3D(),
        this._checkDevice(),
        this._checkFeatures(),
        this._checkOS();
    }),
    (d.Device.prototype = {
      _checkOS: function () {
        var a = navigator.userAgent;
        /Android/.test(a)
          ? (this.android = !0)
          : /CrOS/.test(a)
          ? (this.chromeOS = !0)
          : /iP[ao]d|iPhone/i.test(a)
          ? (this.iOS = !0)
          : /Linux/.test(a)
          ? (this.linux = !0)
          : /Mac OS/.test(a)
          ? (this.macOS = !0)
          : /Windows/.test(a) && (this.windows = !0),
          (this.windows || this.macOS || this.linux) && (this.desktop = !0);
      },
      _checkFeatures: function () {
        this.canvas = !!window.CanvasRenderingContext2D;
        try {
          this.localStorage = !!localStorage.getItem;
        } catch (a) {
          this.localStorage = !1;
        }
        (this.file = !!(
          window.File &&
          window.FileReader &&
          window.FileList &&
          window.Blob
        )),
          (this.fileSystem = !!window.requestFileSystem),
          (this.webGL = (function () {
            try {
              var a = document.createElement("canvas");
              return (
                !!window.WebGLRenderingContext &&
                (a.getContext("webgl") || a.getContext("experimental-webgl"))
              );
            } catch (b) {
              return !1;
            }
          })()),
          (this.webGL = null === this.webGL || this.webGL === !1 ? !1 : !0),
          (this.worker = !!window.Worker),
          ("ontouchstart" in document.documentElement ||
            (window.navigator.maxTouchPoints &&
              window.navigator.maxTouchPoints > 1)) &&
            (this.touch = !0),
          (window.navigator.msPointerEnabled ||
            window.navigator.pointerEnabled) &&
            (this.mspointer = !0),
          (this.pointerLock =
            "pointerLockElement" in document ||
            "mozPointerLockElement" in document ||
            "webkitPointerLockElement" in document);
      },
      _checkBrowser: function () {
        var a = navigator.userAgent;
        /Arora/.test(a)
          ? (this.arora = !0)
          : /Chrome/.test(a)
          ? (this.chrome = !0)
          : /Epiphany/.test(a)
          ? (this.epiphany = !0)
          : /Firefox/.test(a)
          ? (this.firefox = !0)
          : /Mobile Safari/.test(a)
          ? (this.mobileSafari = !0)
          : /MSIE (\d+\.\d+);/.test(a)
          ? ((this.ie = !0), (this.ieVersion = parseInt(RegExp.$1, 10)))
          : /Midori/.test(a)
          ? (this.midori = !0)
          : /Opera/.test(a)
          ? (this.opera = !0)
          : /Safari/.test(a) && (this.safari = !0),
          navigator.standalone && (this.webApp = !0),
          navigator.isCocoonJS && (this.cocoonJS = !0);
      },
      _checkAudio: function () {
        (this.audioData = !!window.Audio),
          (this.webAudio = !(
            !window.webkitAudioContext && !window.AudioContext
          ));
        var a = document.createElement("audio"),
          b = !1;
        try {
          (b = !!a.canPlayType) &&
            (a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") &&
              (this.ogg = !0),
            a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, "") &&
              (this.opus = !0),
            a.canPlayType("audio/mpeg;").replace(/^no$/, "") && (this.mp3 = !0),
            a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "") &&
              (this.wav = !0),
            (a.canPlayType("audio/x-m4a;") ||
              a.canPlayType("audio/aac;").replace(/^no$/, "")) &&
              (this.m4a = !0),
            a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "") &&
              (this.webm = !0));
        } catch (c) {}
      },
      _checkDevice: function () {
        (this.pixelRatio = window.devicePixelRatio || 1),
          (this.iPhone =
            -1 != navigator.userAgent.toLowerCase().indexOf("iphone")),
          (this.iPhone4 = 2 == this.pixelRatio && this.iPhone),
          (this.iPad = -1 != navigator.userAgent.toLowerCase().indexOf("ipad")),
          "undefined" != typeof Int8Array
            ? ((this.littleEndian =
                new Int8Array(new Int16Array([1]).buffer)[0] > 0),
              (this.typedArray = !0))
            : ((this.littleEndian = !1), (this.typedArray = !1));
      },
      _checkCSS3D: function () {
        var a,
          b = document.createElement("p"),
          c = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform",
          };
        document.body.insertBefore(b, null);
        for (var d in c)
          void 0 !== b.style[d] &&
            ((b.style[d] = "translate3d(1px,1px,1px)"),
            (a = window.getComputedStyle(b).getPropertyValue(c[d])));
        document.body.removeChild(b),
          (this.css3D = void 0 !== a && a.length > 0 && "none" !== a);
      },
      canPlayAudio: function (a) {
        return "mp3" == a && this.mp3
          ? !0
          : "ogg" == a && (this.ogg || this.opus)
          ? !0
          : "m4a" == a && this.m4a
          ? !0
          : "wav" == a && this.wav
          ? !0
          : "webm" == a && this.webm
          ? !0
          : !1;
      },
      isConsoleOpen: function () {
        return window.console && window.console.firebug
          ? !0
          : window.console
          ? (console.profile(),
            console.profileEnd(),
            console.clear && console.clear(),
            console.profiles.length > 0)
          : !1;
      },
    }),
    (d.RequestAnimationFrame = function (a) {
      (this.game = a), (this.isRunning = !1);
      for (
        var b = ["ms", "moz", "webkit", "o"], c = 0;
        c < b.length && !window.requestAnimationFrame;
        c++
      )
        (window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"]),
          (window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"]);
      (this._isSetTimeOut = !1),
        (this._onLoop = null),
        (this._timeOutID = null);
    }),
    (d.RequestAnimationFrame.prototype = {
      start: function () {
        this.isRunning = !0;
        var a = this;
        window.requestAnimationFrame
          ? ((this._isSetTimeOut = !1),
            (this._onLoop = function (b) {
              return a.updateRAF(b);
            }),
            (this._timeOutID = window.requestAnimationFrame(this._onLoop)))
          : ((this._isSetTimeOut = !0),
            (this._onLoop = function () {
              return a.updateSetTimeout();
            }),
            (this._timeOutID = window.setTimeout(this._onLoop, 0)));
      },
      updateRAF: function (a) {
        this.game.update(a),
          (this._timeOutID = window.requestAnimationFrame(this._onLoop));
      },
      updateSetTimeout: function () {
        this.game.update(Date.now()),
          (this._timeOutID = window.setTimeout(
            this._onLoop,
            this.game.time.timeToCall
          ));
      },
      stop: function () {
        this._isSetTimeOut
          ? clearTimeout(this._timeOutID)
          : window.cancelAnimationFrame(this._timeOutID),
          (this.isRunning = !1);
      },
      isSetTimeOut: function () {
        return this._isSetTimeOut;
      },
      isRAF: function () {
        return this._isSetTimeOut === !1;
      },
    }),
    (d.RandomDataGenerator = function (a) {
      "undefined" == typeof a && (a = []),
        (this.c = 1),
        (this.s0 = 0),
        (this.s1 = 0),
        (this.s2 = 0),
        this.sow(a);
    }),
    (d.RandomDataGenerator.prototype = {
      rnd: function () {
        var a = 2091639 * this.s0 + 2.3283064365386963e-10 * this.c;
        return (
          (this.c = 0 | a),
          (this.s0 = this.s1),
          (this.s1 = this.s2),
          (this.s2 = a - this.c),
          this.s2
        );
      },
      sow: function (a) {
        "undefined" == typeof a && (a = []),
          (this.s0 = this.hash(" ")),
          (this.s1 = this.hash(this.s0)),
          (this.s2 = this.hash(this.s1)),
          (this.c = 1);
        for (var b, c = 0; (b = a[c++]); )
          (this.s0 -= this.hash(b)),
            (this.s0 += ~~(this.s0 < 0)),
            (this.s1 -= this.hash(b)),
            (this.s1 += ~~(this.s1 < 0)),
            (this.s2 -= this.hash(b)),
            (this.s2 += ~~(this.s2 < 0));
      },
      hash: function (a) {
        var b, c, d;
        for (d = 4022871197, a = a.toString(), c = 0; c < a.length; c++)
          (d += a.charCodeAt(c)),
            (b = 0.02519603282416938 * d),
            (d = b >>> 0),
            (b -= d),
            (b *= d),
            (d = b >>> 0),
            (b -= d),
            (d += 4294967296 * b);
        return 2.3283064365386963e-10 * (d >>> 0);
      },
      integer: function () {
        return 4294967296 * this.rnd.apply(this);
      },
      frac: function () {
        return (
          this.rnd.apply(this) +
          1.1102230246251565e-16 * (0 | (2097152 * this.rnd.apply(this)))
        );
      },
      real: function () {
        return this.integer() + this.frac();
      },
      integerInRange: function (a, b) {
        return Math.floor(this.realInRange(a, b));
      },
      realInRange: function (a, b) {
        return this.frac() * (b - a) + a;
      },
      normal: function () {
        return 1 - 2 * this.frac();
      },
      uuid: function () {
        var a = "",
          b = "";
        for (
          b = a = "";
          a++ < 36;
          b +=
            ~a % 5 | (4 & (3 * a))
              ? (15 ^ a ? 8 ^ (this.frac() * (20 ^ a ? 16 : 4)) : 4).toString(
                  16
                )
              : "-"
        );
        return b;
      },
      pick: function (a) {
        return a[this.integerInRange(0, a.length)];
      },
      weightedPick: function (a) {
        return a[~~(Math.pow(this.frac(), 2) * a.length)];
      },
      timestamp: function (a, b) {
        return this.realInRange(a || 9466848e5, b || 1577862e6);
      },
      angle: function () {
        return this.integerInRange(-180, 180);
      },
    }),
    (d.Math = {
      PI2: 2 * Math.PI,
      fuzzyEqual: function (a, b, c) {
        return "undefined" == typeof c && (c = 1e-4), Math.abs(a - b) < c;
      },
      fuzzyLessThan: function (a, b, c) {
        return "undefined" == typeof c && (c = 1e-4), b + c > a;
      },
      fuzzyGreaterThan: function (a, b, c) {
        return "undefined" == typeof c && (c = 1e-4), a > b - c;
      },
      fuzzyCeil: function (a, b) {
        return "undefined" == typeof b && (b = 1e-4), Math.ceil(a - b);
      },
      fuzzyFloor: function (a, b) {
        return "undefined" == typeof b && (b = 1e-4), Math.floor(a + b);
      },
      average: function () {
        for (var a = [], b = 0; b < arguments.length - 0; b++)
          a[b] = arguments[b + 0];
        for (var c = 0, d = 0; d < a.length; d++) c += a[d];
        return c / a.length;
      },
      truncate: function (a) {
        return a > 0 ? Math.floor(a) : Math.ceil(a);
      },
      shear: function (a) {
        return a % 1;
      },
      snapTo: function (a, b, c) {
        return (
          "undefined" == typeof c && (c = 0),
          0 === b ? a : ((a -= c), (a = b * Math.round(a / b)), c + a)
        );
      },
      snapToFloor: function (a, b, c) {
        return (
          "undefined" == typeof c && (c = 0),
          0 === b ? a : ((a -= c), (a = b * Math.floor(a / b)), c + a)
        );
      },
      snapToCeil: function (a, b, c) {
        return (
          "undefined" == typeof c && (c = 0),
          0 === b ? a : ((a -= c), (a = b * Math.ceil(a / b)), c + a)
        );
      },
      snapToInArray: function (a, b, c) {
        if (("undefined" == typeof c && (c = !0), c && b.sort(), a < b[0]))
          return b[0];
        for (var d = 1; b[d] < a; ) d++;
        var e = b[d - 1],
          f = d < b.length ? b[d] : Number.POSITIVE_INFINITY;
        return a - e >= f - a ? f : e;
      },
      roundTo: function (a, b, c) {
        "undefined" == typeof b && (b = 0), "undefined" == typeof c && (c = 10);
        var d = Math.pow(c, -b);
        return Math.round(a * d) / d;
      },
      floorTo: function (a, b, c) {
        "undefined" == typeof b && (b = 0), "undefined" == typeof c && (c = 10);
        var d = Math.pow(c, -b);
        return Math.floor(a * d) / d;
      },
      ceilTo: function (a, b, c) {
        "undefined" == typeof b && (b = 0), "undefined" == typeof c && (c = 10);
        var d = Math.pow(c, -b);
        return Math.ceil(a * d) / d;
      },
      interpolateFloat: function (a, b, c) {
        return (b - a) * c + a;
      },
      angleBetween: function (a, b, c, d) {
        return Math.atan2(d - b, c - a);
      },
      normalizeAngle: function (a, b) {
        "undefined" == typeof b && (b = !0);
        var c = b ? Math.PI : 180;
        return this.wrap(a, -c, c);
      },
      nearestAngleBetween: function (a, b, c) {
        "undefined" == typeof c && (c = !0);
        var d = c ? Math.PI : 180;
        return (
          (a = this.normalizeAngle(a, c)),
          (b = this.normalizeAngle(b, c)),
          -d / 2 > a && b > d / 2 && (a += 2 * d),
          -d / 2 > b && a > d / 2 && (b += 2 * d),
          b - a
        );
      },
      interpolateAngles: function (a, b, c, d, e) {
        return (
          "undefined" == typeof d && (d = !0),
          "undefined" == typeof e && (e = null),
          (a = this.normalizeAngle(a, d)),
          (b = this.normalizeAngleToAnother(b, a, d)),
          "function" == typeof e
            ? e(c, a, b - a, 1)
            : this.interpolateFloat(a, b, c)
        );
      },
      chanceRoll: function (a) {
        return (
          "undefined" == typeof a && (a = 50),
          0 >= a ? !1 : a >= 100 ? !0 : 100 * Math.random() >= a ? !1 : !0
        );
      },
      numberArray: function (a, b) {
        for (var c = [], d = a; b >= d; d++) c.push(d);
        return c;
      },
      maxAdd: function (a, b, c) {
        return (a += b), a > c && (a = c), a;
      },
      minSub: function (a, b, c) {
        return (a -= b), c > a && (a = c), a;
      },
      wrap: function (a, b, c) {
        var d = c - b;
        if (0 >= d) return 0;
        var e = (a - b) % d;
        return 0 > e && (e += d), e + b;
      },
      wrapValue: function (a, b, c) {
        var d;
        return (
          (a = Math.abs(a)),
          (b = Math.abs(b)),
          (c = Math.abs(c)),
          (d = (a + b) % c)
        );
      },
      randomSign: function () {
        return Math.random() > 0.5 ? 1 : -1;
      },
      isOdd: function (a) {
        return 1 & a;
      },
      isEven: function (a) {
        return 1 & a ? !1 : !0;
      },
      max: function () {
        for (var a = 1, b = 0, c = arguments.length; c > a; a++)
          arguments[b] < arguments[a] && (b = a);
        return arguments[b];
      },
      min: function () {
        for (var a = 1, b = 0, c = arguments.length; c > a; a++)
          arguments[a] < arguments[b] && (b = a);
        return arguments[b];
      },
      wrapAngle: function (a) {
        return this.wrap(a, -180, 180);
      },
      angleLimit: function (a, b, c) {
        var d = a;
        return a > c ? (d = c) : b > a && (d = b), d;
      },
      linearInterpolation: function (a, b) {
        var c = a.length - 1,
          d = c * b,
          e = Math.floor(d);
        return 0 > b
          ? this.linear(a[0], a[1], d)
          : b > 1
          ? this.linear(a[c], a[c - 1], c - d)
          : this.linear(a[e], a[e + 1 > c ? c : e + 1], d - e);
      },
      bezierInterpolation: function (a, b) {
        for (var c = 0, d = a.length - 1, e = 0; d >= e; e++)
          c +=
            Math.pow(1 - b, d - e) *
            Math.pow(b, e) *
            a[e] *
            this.bernstein(d, e);
        return c;
      },
      catmullRomInterpolation: function (a, b) {
        var c = a.length - 1,
          d = c * b,
          e = Math.floor(d);
        return a[0] === a[c]
          ? (0 > b && (e = Math.floor((d = c * (1 + b)))),
            this.catmullRom(
              a[(e - 1 + c) % c],
              a[e],
              a[(e + 1) % c],
              a[(e + 2) % c],
              d - e
            ))
          : 0 > b
          ? a[0] - (this.catmullRom(a[0], a[0], a[1], a[1], -d) - a[0])
          : b > 1
          ? a[c] -
            (this.catmullRom(a[c], a[c], a[c - 1], a[c - 1], d - c) - a[c])
          : this.catmullRom(
              a[e ? e - 1 : 0],
              a[e],
              a[e + 1 > c ? c : e + 1],
              a[e + 2 > c ? c : e + 2],
              d - e
            );
      },
      linear: function (a, b, c) {
        return (b - a) * c + a;
      },
      bernstein: function (a, b) {
        return this.factorial(a) / this.factorial(b) / this.factorial(a - b);
      },
      catmullRom: function (a, b, c, d, e) {
        var f = 0.5 * (c - a),
          g = 0.5 * (d - b),
          h = e * e,
          i = e * h;
        return (
          (2 * b - 2 * c + f + g) * i +
          (-3 * b + 3 * c - 2 * f - g) * h +
          f * e +
          b
        );
      },
      difference: function (a, b) {
        return Math.abs(a - b);
      },
      getRandom: function (a, b, c) {
        if (
          ("undefined" == typeof b && (b = 0),
          "undefined" == typeof c && (c = 0),
          null != a)
        ) {
          var d = c;
          if (((0 === d || d > a.length - b) && (d = a.length - b), d > 0))
            return a[b + Math.floor(Math.random() * d)];
        }
        return null;
      },
      floor: function (a) {
        var b = 0 | a;
        return a > 0 ? b : b != a ? b - 1 : b;
      },
      ceil: function (a) {
        var b = 0 | a;
        return a > 0 ? (b != a ? b + 1 : b) : b;
      },
      sinCosGenerator: function (a, b, c, d) {
        "undefined" == typeof b && (b = 1),
          "undefined" == typeof c && (c = 1),
          "undefined" == typeof d && (d = 1);
        for (
          var e = b, f = c, g = (d * Math.PI) / a, h = [], i = [], j = 0;
          a > j;
          j++
        )
          (f -= e * g), (e += f * g), (h[j] = f), (i[j] = e);
        return { sin: i, cos: h, length: a };
      },
      shift: function (a) {
        var b = a.shift();
        return a.push(b), b;
      },
      shuffleArray: function (a) {
        for (var b = a.length - 1; b > 0; b--) {
          var c = Math.floor(Math.random() * (b + 1)),
            d = a[b];
          (a[b] = a[c]), (a[c] = d);
        }
        return a;
      },
      distance: function (a, b, c, d) {
        var e = a - c,
          f = b - d;
        return Math.sqrt(e * e + f * f);
      },
      distanceRounded: function (a, b, c, e) {
        return Math.round(d.Math.distance(a, b, c, e));
      },
      clamp: function (a, b, c) {
        return b > a ? b : a > c ? c : a;
      },
      clampBottom: function (a, b) {
        return b > a ? b : a;
      },
      within: function (a, b, c) {
        return Math.abs(a - b) <= c;
      },
      mapLinear: function (a, b, c, d, e) {
        return d + ((a - b) * (e - d)) / (c - b);
      },
      smoothstep: function (a, b, c) {
        return b >= a
          ? 0
          : a >= c
          ? 1
          : ((a = (a - b) / (c - b)), a * a * (3 - 2 * a));
      },
      smootherstep: function (a, b, c) {
        return b >= a
          ? 0
          : a >= c
          ? 1
          : ((a = (a - b) / (c - b)), a * a * a * (a * (6 * a - 15) + 10));
      },
      sign: function (a) {
        return 0 > a ? -1 : a > 0 ? 1 : 0;
      },
      degToRad: (function () {
        var a = Math.PI / 180;
        return function (b) {
          return b * a;
        };
      })(),
      radToDeg: (function () {
        var a = 180 / Math.PI;
        return function (b) {
          return b * a;
        };
      })(),
    }),
    (d.QuadTree = function (a, b, c, d, e, f, g, h) {
      (this.physicsManager = a),
        (this.ID = a.quadTreeID),
        a.quadTreeID++,
        (this.maxObjects = f || 10),
        (this.maxLevels = g || 4),
        (this.level = h || 0),
        (this.bounds = {
          x: Math.round(b),
          y: Math.round(c),
          width: d,
          height: e,
          subWidth: Math.floor(d / 2),
          subHeight: Math.floor(e / 2),
          right: Math.round(b) + Math.floor(d / 2),
          bottom: Math.round(c) + Math.floor(e / 2),
        }),
        (this.objects = []),
        (this.nodes = []);
    }),
    (d.QuadTree.prototype = {
      split: function () {
        this.level++,
          (this.nodes[0] = new d.QuadTree(
            this.physicsManager,
            this.bounds.right,
            this.bounds.y,
            this.bounds.subWidth,
            this.bounds.subHeight,
            this.maxObjects,
            this.maxLevels,
            this.level
          )),
          (this.nodes[1] = new d.QuadTree(
            this.physicsManager,
            this.bounds.x,
            this.bounds.y,
            this.bounds.subWidth,
            this.bounds.subHeight,
            this.maxObjects,
            this.maxLevels,
            this.level
          )),
          (this.nodes[2] = new d.QuadTree(
            this.physicsManager,
            this.bounds.x,
            this.bounds.bottom,
            this.bounds.subWidth,
            this.bounds.subHeight,
            this.maxObjects,
            this.maxLevels,
            this.level
          )),
          (this.nodes[3] = new d.QuadTree(
            this.physicsManager,
            this.bounds.right,
            this.bounds.bottom,
            this.bounds.subWidth,
            this.bounds.subHeight,
            this.maxObjects,
            this.maxLevels,
            this.level
          ));
      },
      insert: function (a) {
        var b,
          c = 0;
        if (null != this.nodes[0] && ((b = this.getIndex(a)), -1 !== b))
          return this.nodes[b].insert(a), void 0;
        if (
          (this.objects.push(a),
          this.objects.length > this.maxObjects && this.level < this.maxLevels)
        )
          for (null == this.nodes[0] && this.split(); c < this.objects.length; )
            (b = this.getIndex(this.objects[c])),
              -1 !== b
                ? this.nodes[b].insert(this.objects.splice(c, 1)[0])
                : c++;
      },
      getIndex: function (a) {
        var b = -1;
        return (
          a.x < this.bounds.right && a.right < this.bounds.right
            ? a.y < this.bounds.bottom && a.bottom < this.bounds.bottom
              ? (b = 1)
              : a.y > this.bounds.bottom && (b = 2)
            : a.x > this.bounds.right &&
              (a.y < this.bounds.bottom && a.bottom < this.bounds.bottom
                ? (b = 0)
                : a.y > this.bounds.bottom && (b = 3)),
          b
        );
      },
      retrieve: function (a) {
        var b = this.objects;
        return (
          (a.body.quadTreeIndex = this.getIndex(a.body)),
          a.body.quadTreeIDs.push(this.ID),
          this.nodes[0] &&
            (-1 !== a.body.quadTreeIndex
              ? (b = b.concat(this.nodes[a.body.quadTreeIndex].retrieve(a)))
              : ((b = b.concat(this.nodes[0].retrieve(a))),
                (b = b.concat(this.nodes[1].retrieve(a))),
                (b = b.concat(this.nodes[2].retrieve(a))),
                (b = b.concat(this.nodes[3].retrieve(a))))),
          b
        );
      },
      clear: function () {
        this.objects = [];
        for (var a = 0, b = this.nodes.length; b > a; a++)
          this.nodes[a] && (this.nodes[a].clear(), delete this.nodes[a]);
      },
    }),
    (d.Circle = function (a, b, c) {
      (a = a || 0),
        (b = b || 0),
        (c = c || 0),
        (this.x = a),
        (this.y = b),
        (this._diameter = c),
        (this._radius = c > 0 ? 0.5 * c : 0);
    }),
    (d.Circle.prototype = {
      circumference: function () {
        return 2 * Math.PI * this._radius;
      },
      setTo: function (a, b, c) {
        return (
          (this.x = a),
          (this.y = b),
          (this._diameter = c),
          (this._radius = 0.5 * c),
          this
        );
      },
      copyFrom: function (a) {
        return this.setTo(a.x, a.y, a.diameter);
      },
      copyTo: function (a) {
        return (a.x = this.x), (a.y = this.y), (a.diameter = this._diameter), a;
      },
      distance: function (a, b) {
        return (
          "undefined" == typeof b && (b = !1),
          b
            ? d.Math.distanceRound(this.x, this.y, a.x, a.y)
            : d.Math.distance(this.x, this.y, a.x, a.y)
        );
      },
      clone: function (a) {
        return (
          "undefined" == typeof a && (a = new d.Circle()),
          a.setTo(this.x, this.y, this.diameter)
        );
      },
      contains: function (a, b) {
        return d.Circle.contains(this, a, b);
      },
      circumferencePoint: function (a, b, c) {
        return d.Circle.circumferencePoint(this, a, b, c);
      },
      offset: function (a, b) {
        return (this.x += a), (this.y += b), this;
      },
      offsetPoint: function (a) {
        return this.offset(a.x, a.y);
      },
      toString: function () {
        return (
          "[{Phaser.Circle (x=" +
          this.x +
          " y=" +
          this.y +
          " diameter=" +
          this.diameter +
          " radius=" +
          this.radius +
          ")}]"
        );
      },
    }),
    Object.defineProperty(d.Circle.prototype, "diameter", {
      get: function () {
        return this._diameter;
      },
      set: function (a) {
        a > 0 && ((this._diameter = a), (this._radius = 0.5 * a));
      },
    }),
    Object.defineProperty(d.Circle.prototype, "radius", {
      get: function () {
        return this._radius;
      },
      set: function (a) {
        a > 0 && ((this._radius = a), (this._diameter = 2 * a));
      },
    }),
    Object.defineProperty(d.Circle.prototype, "left", {
      get: function () {
        return this.x - this._radius;
      },
      set: function (a) {
        a > this.x
          ? ((this._radius = 0), (this._diameter = 0))
          : (this.radius = this.x - a);
      },
    }),
    Object.defineProperty(d.Circle.prototype, "right", {
      get: function () {
        return this.x + this._radius;
      },
      set: function (a) {
        a < this.x
          ? ((this._radius = 0), (this._diameter = 0))
          : (this.radius = a - this.x);
      },
    }),
    Object.defineProperty(d.Circle.prototype, "top", {
      get: function () {
        return this.y - this._radius;
      },
      set: function (a) {
        a > this.y
          ? ((this._radius = 0), (this._diameter = 0))
          : (this.radius = this.y - a);
      },
    }),
    Object.defineProperty(d.Circle.prototype, "bottom", {
      get: function () {
        return this.y + this._radius;
      },
      set: function (a) {
        a < this.y
          ? ((this._radius = 0), (this._diameter = 0))
          : (this.radius = a - this.y);
      },
    }),
    Object.defineProperty(d.Circle.prototype, "area", {
      get: function () {
        return this._radius > 0 ? Math.PI * this._radius * this._radius : 0;
      },
    }),
    Object.defineProperty(d.Circle.prototype, "empty", {
      get: function () {
        return 0 === this._diameter;
      },
      set: function (a) {
        a === !0 && this.setTo(0, 0, 0);
      },
    }),
    (d.Circle.contains = function (a, b, c) {
      if (b >= a.left && b <= a.right && c >= a.top && c <= a.bottom) {
        var d = (a.x - b) * (a.x - b),
          e = (a.y - c) * (a.y - c);
        return d + e <= a.radius * a.radius;
      }
      return !1;
    }),
    (d.Circle.equals = function (a, b) {
      return a.x == b.x && a.y == b.y && a.diameter == b.diameter;
    }),
    (d.Circle.intersects = function (a, b) {
      return d.Math.distance(a.x, a.y, b.x, b.y) <= a.radius + b.radius;
    }),
    (d.Circle.circumferencePoint = function (a, b, c, e) {
      return (
        "undefined" == typeof c && (c = !1),
        "undefined" == typeof e && (e = new d.Point()),
        c === !0 && (b = d.Math.radToDeg(b)),
        (e.x = a.x + a.radius * Math.cos(b)),
        (e.y = a.y + a.radius * Math.sin(b)),
        e
      );
    }),
    (d.Circle.intersectsRectangle = function (a, b) {
      var c = Math.abs(a.x - b.x - b.halfWidth),
        d = b.halfWidth + a.radius;
      if (c > d) return !1;
      var e = Math.abs(a.y - b.y - b.halfHeight),
        f = b.halfHeight + a.radius;
      if (e > f) return !1;
      if (c <= b.halfWidth || e <= b.halfHeight) return !0;
      var g = c - b.halfWidth,
        h = e - b.halfHeight,
        i = g * g,
        j = h * h,
        k = a.radius * a.radius;
      return k >= i + j;
    }),
    (d.Point = function (a, b) {
      (a = a || 0), (b = b || 0), (this.x = a), (this.y = b);
    }),
    (d.Point.prototype = {
      copyFrom: function (a) {
        return this.setTo(a.x, a.y);
      },
      invert: function () {
        return this.setTo(this.y, this.x);
      },
      setTo: function (a, b) {
        return (this.x = a), (this.y = b), this;
      },
      add: function (a, b) {
        return (this.x += a), (this.y += b), this;
      },
      subtract: function (a, b) {
        return (this.x -= a), (this.y -= b), this;
      },
      multiply: function (a, b) {
        return (this.x *= a), (this.y *= b), this;
      },
      divide: function (a, b) {
        return (this.x /= a), (this.y /= b), this;
      },
      clampX: function (a, b) {
        return (this.x = d.Math.clamp(this.x, a, b)), this;
      },
      clampY: function (a, b) {
        return (this.y = d.Math.clamp(this.y, a, b)), this;
      },
      clamp: function (a, b) {
        return (
          (this.x = d.Math.clamp(this.x, a, b)),
          (this.y = d.Math.clamp(this.y, a, b)),
          this
        );
      },
      clone: function (a) {
        return (
          "undefined" == typeof a && (a = new d.Point()),
          a.setTo(this.x, this.y)
        );
      },
      copyTo: function (a) {
        return (a.x = this.x), (a.y = this.y), a;
      },
      distance: function (a, b) {
        return d.Point.distance(this, a, b);
      },
      equals: function (a) {
        return a.x == this.x && a.y == this.y;
      },
      rotate: function (a, b, c, e, f) {
        return d.Point.rotate(this, a, b, c, e, f);
      },
      getMagnitude: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      },
      setMagnitude: function (a) {
        return this.normalize().multiply(a, a);
      },
      normalize: function () {
        if (!this.isZero()) {
          var a = this.getMagnitude();
          (this.x /= a), (this.y /= a);
        }
        return this;
      },
      isZero: function () {
        return 0 === this.x && 0 === this.y;
      },
      toString: function () {
        return "[{Point (x=" + this.x + " y=" + this.y + ")}]";
      },
    }),
    (d.Point.add = function (a, b, c) {
      return (
        "undefined" == typeof c && (c = new d.Point()),
        (c.x = a.x + b.x),
        (c.y = a.y + b.y),
        c
      );
    }),
    (d.Point.subtract = function (a, b, c) {
      return (
        "undefined" == typeof c && (c = new d.Point()),
        (c.x = a.x - b.x),
        (c.y = a.y - b.y),
        c
      );
    }),
    (d.Point.multiply = function (a, b, c) {
      return (
        "undefined" == typeof c && (c = new d.Point()),
        (c.x = a.x * b.x),
        (c.y = a.y * b.y),
        c
      );
    }),
    (d.Point.divide = function (a, b, c) {
      return (
        "undefined" == typeof c && (c = new d.Point()),
        (c.x = a.x / b.x),
        (c.y = a.y / b.y),
        c
      );
    }),
    (d.Point.equals = function (a, b) {
      return a.x == b.x && a.y == b.y;
    }),
    (d.Point.distance = function (a, b, c) {
      return (
        "undefined" == typeof c && (c = !1),
        c
          ? d.Math.distanceRound(a.x, a.y, b.x, b.y)
          : d.Math.distance(a.x, a.y, b.x, b.y)
      );
    }),
    (d.Point.rotate = function (a, b, c, e, f, g) {
      return (
        (f = f || !1),
        (g = g || null),
        f && (e = d.Math.degToRad(e)),
        null === g &&
          (g = Math.sqrt((b - a.x) * (b - a.x) + (c - a.y) * (c - a.y))),
        a.setTo(b + g * Math.cos(e), c + g * Math.sin(e))
      );
    }),
    (d.Rectangle = function (a, b, c, d) {
      (a = a || 0),
        (b = b || 0),
        (c = c || 0),
        (d = d || 0),
        (this.x = a),
        (this.y = b),
        (this.width = c),
        (this.height = d);
    }),
    (d.Rectangle.prototype = {
      offset: function (a, b) {
        return (this.x += a), (this.y += b), this;
      },
      offsetPoint: function (a) {
        return this.offset(a.x, a.y);
      },
      setTo: function (a, b, c, d) {
        return (
          (this.x = a), (this.y = b), (this.width = c), (this.height = d), this
        );
      },
      floor: function () {
        (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y));
      },
      floorAll: function () {
        (this.x = Math.floor(this.x)),
          (this.y = Math.floor(this.y)),
          (this.width = Math.floor(this.width)),
          (this.height = Math.floor(this.height));
      },
      copyFrom: function (a) {
        return this.setTo(a.x, a.y, a.width, a.height);
      },
      copyTo: function (a) {
        return (
          (a.x = this.x),
          (a.y = this.y),
          (a.width = this.width),
          (a.height = this.height),
          a
        );
      },
      inflate: function (a, b) {
        return d.Rectangle.inflate(this, a, b);
      },
      size: function (a) {
        return d.Rectangle.size(this, a);
      },
      clone: function (a) {
        return d.Rectangle.clone(this, a);
      },
      contains: function (a, b) {
        return d.Rectangle.contains(this, a, b);
      },
      containsRect: function (a) {
        return d.Rectangle.containsRect(this, a);
      },
      equals: function (a) {
        return d.Rectangle.equals(this, a);
      },
      intersection: function (a, b) {
        return d.Rectangle.intersection(this, a, b);
      },
      intersects: function (a, b) {
        return d.Rectangle.intersects(this, a, b);
      },
      intersectsRaw: function (a, b, c, e, f) {
        return d.Rectangle.intersectsRaw(this, a, b, c, e, f);
      },
      union: function (a, b) {
        return d.Rectangle.union(this, a, b);
      },
      toString: function () {
        return (
          "[{Rectangle (x=" +
          this.x +
          " y=" +
          this.y +
          " width=" +
          this.width +
          " height=" +
          this.height +
          " empty=" +
          this.empty +
          ")}]"
        );
      },
    }),
    Object.defineProperty(d.Rectangle.prototype, "halfWidth", {
      get: function () {
        return Math.round(this.width / 2);
      },
    }),
    Object.defineProperty(d.Rectangle.prototype, "halfHeight", {
      get: function () {
        return Math.round(this.height / 2);
      },
    }),
    Object.defineProperty(d.Rectangle.prototype, "bottom", {
      get: function () {
        return this.y + this.height;
      },
      set: function (a) {
        this.height = a <= this.y ? 0 : this.y - a;
      },
    }),
    Object.defineProperty(d.Rectangle.prototype, "bottomRight", {
      get: function () {
        return new d.Point(this.right, this.bottom);
      },
      set: function (a) {
        (this.right = a.x), (this.bottom = a.y);
      },
    }),
    Object.defineProperty(d.Rectangle.prototype, "left", {
      get: function () {
        return this.x;
      },
      set: function (a) {
        (this.width = a >= this.right ? 0 : this.right - a), (this.x = a);
      },
    }),
    Object.defineProperty(d.Rectangle.prototype, "right", {
      get: function () {
        return this.x + this.width;
      },
      set: function (a) {
        this.width = a <= this.x ? 0 : this.x + a;
      },
    }),
    Object.defineProperty(d.Rectangle.prototype, "volume", {
      get: function () {
        return this.width * this.height;
      },
    }),
    Object.defineProperty(d.Rectangle.prototype, "perimeter", {
      get: function () {
        return 2 * this.width + 2 * this.height;
      },
    }),
    Object.defineProperty(d.Rectangle.prototype, "centerX", {
      get: function () {
        return this.x + this.halfWidth;
      },
      set: function (a) {
        this.x = a - this.halfWidth;
      },
    }),
    Object.defineProperty(d.Rectangle.prototype, "centerY", {
      get: function () {
        return this.y + this.halfHeight;
      },
      set: function (a) {
        this.y = a - this.halfHeight;
      },
    }),
    Object.defineProperty(d.Rectangle.prototype, "top", {
      get: function () {
        return this.y;
      },
      set: function (a) {
        a >= this.bottom
          ? ((this.height = 0), (this.y = a))
          : (this.height = this.bottom - a);
      },
    }),
    Object.defineProperty(d.Rectangle.prototype, "topLeft", {
      get: function () {
        return new d.Point(this.x, this.y);
      },
      set: function (a) {
        (this.x = a.x), (this.y = a.y);
      },
    }),
    Object.defineProperty(d.Rectangle.prototype, "empty", {
      get: function () {
        return !this.width || !this.height;
      },
      set: function (a) {
        a === !0 && this.setTo(0, 0, 0, 0);
      },
    }),
    (d.Rectangle.inflate = function (a, b, c) {
      return (a.x -= b), (a.width += 2 * b), (a.y -= c), (a.height += 2 * c), a;
    }),
    (d.Rectangle.inflatePoint = function (a, b) {
      return d.Rectangle.inflate(a, b.x, b.y);
    }),
    (d.Rectangle.size = function (a, b) {
      return (
        "undefined" == typeof b && (b = new d.Point()),
        b.setTo(a.width, a.height)
      );
    }),
    (d.Rectangle.clone = function (a, b) {
      return (
        "undefined" == typeof b && (b = new d.Rectangle()),
        b.setTo(a.x, a.y, a.width, a.height)
      );
    }),
    (d.Rectangle.contains = function (a, b, c) {
      return b >= a.x && b <= a.right && c >= a.y && c <= a.bottom;
    }),
    (d.Rectangle.containsRaw = function (a, b, c, d, e, f) {
      return e >= a && a + c >= e && f >= b && b + d >= f;
    }),
    (d.Rectangle.containsPoint = function (a, b) {
      return d.Rectangle.contains(a, b.x, b.y);
    }),
    (d.Rectangle.containsRect = function (a, b) {
      return a.volume > b.volume
        ? !1
        : a.x >= b.x &&
            a.y >= b.y &&
            a.right <= b.right &&
            a.bottom <= b.bottom;
    }),
    (d.Rectangle.equals = function (a, b) {
      return (
        a.x == b.x && a.y == b.y && a.width == b.width && a.height == b.height
      );
    }),
    (d.Rectangle.intersection = function (a, b, c) {
      return (
        (c = c || new d.Rectangle()),
        d.Rectangle.intersects(a, b) &&
          ((c.x = Math.max(a.x, b.x)),
          (c.y = Math.max(a.y, b.y)),
          (c.width = Math.min(a.right, b.right) - c.x),
          (c.height = Math.min(a.bottom, b.bottom) - c.y)),
        c
      );
    }),
    (d.Rectangle.intersects = function (a, b) {
      return a.x < b.right && b.x < a.right && a.y < b.bottom && b.y < a.bottom;
    }),
    (d.Rectangle.intersectsRaw = function (a, b, c, d, e, f) {
      return (
        "undefined" == typeof f && (f = 0),
        !(
          b > a.right + f ||
          c < a.left - f ||
          d > a.bottom + f ||
          e < a.top - f
        )
      );
    }),
    (d.Rectangle.union = function (a, b, c) {
      return (
        "undefined" == typeof c && (c = new d.Rectangle()),
        c.setTo(
          Math.min(a.x, b.x),
          Math.min(a.y, b.y),
          Math.max(a.right, b.right) - Math.min(a.left, b.left),
          Math.max(a.bottom, b.bottom) - Math.min(a.top, b.top)
        )
      );
    }),
    (d.Polygon = function (a) {
      c.Polygon.call(this, a), (this.type = d.POLYGON);
    }),
    (d.Polygon.prototype = Object.create(c.Polygon.prototype)),
    (d.Polygon.prototype.constructor = d.Polygon),
    (d.Net = function (a) {
      this.game = a;
    }),
    (d.Net.prototype = {
      getHostName: function () {
        return window.location && window.location.hostname
          ? window.location.hostname
          : null;
      },
      checkDomainName: function (a) {
        return -1 !== window.location.hostname.indexOf(a);
      },
      updateQueryString: function (a, b, c, d) {
        "undefined" == typeof c && (c = !1),
          ("undefined" == typeof d || "" === d) && (d = window.location.href);
        var e = "",
          f = new RegExp("([?|&])" + a + "=.*?(&|#|$)(.*)", "gi");
        if (f.test(d))
          e =
            "undefined" != typeof b && null !== b
              ? d.replace(f, "$1" + a + "=" + b + "$2$3")
              : d.replace(f, "$1$3").replace(/(&|\?)$/, "");
        else if ("undefined" != typeof b && null !== b) {
          var g = -1 !== d.indexOf("?") ? "&" : "?",
            h = d.split("#");
          (d = h[0] + g + a + "=" + b), h[1] && (d += "#" + h[1]), (e = d);
        } else e = d;
        return c ? ((window.location.href = e), void 0) : e;
      },
      getQueryString: function (a) {
        "undefined" == typeof a && (a = "");
        var b = {},
          c = location.search.substring(1).split("&");
        for (var d in c) {
          var e = c[d].split("=");
          if (e.length > 1) {
            if (a && a == this.decodeURI(e[0])) return this.decodeURI(e[1]);
            b[this.decodeURI(e[0])] = this.decodeURI(e[1]);
          }
        }
        return b;
      },
      decodeURI: function (a) {
        return decodeURIComponent(a.replace(/\+/g, " "));
      },
    }),
    (d.TweenManager = function (a) {
      (this.game = a),
        (this._tweens = []),
        (this._add = []),
        this.game.onPause.add(this.pauseAll, this),
        this.game.onResume.add(this.resumeAll, this);
    }),
    (d.TweenManager.prototype = {
      REVISION: "11dev",
      getAll: function () {
        return this._tweens;
      },
      removeAll: function () {
        this._tweens = [];
      },
      add: function (a) {
        this._add.push(a);
      },
      create: function (a) {
        return new d.Tween(a, this.game);
      },
      remove: function (a) {
        var b = this._tweens.indexOf(a);
        -1 !== b && (this._tweens[b].pendingDelete = !0);
      },
      update: function () {
        if (0 === this._tweens.length && 0 === this._add.length) return !1;
        for (var a = 0, b = this._tweens.length; b > a; )
          this._tweens[a].update(this.game.time.now)
            ? a++
            : (this._tweens.splice(a, 1), b--);
        return (
          this._add.length > 0 &&
            ((this._tweens = this._tweens.concat(this._add)),
            (this._add.length = 0)),
          !0
        );
      },
      isTweening: function (a) {
        return this._tweens.some(function (b) {
          return b._object === a;
        });
      },
      pauseAll: function () {
        for (var a = this._tweens.length - 1; a >= 0; a--)
          this._tweens[a].pause();
      },
      resumeAll: function () {
        for (var a = this._tweens.length - 1; a >= 0; a--)
          this._tweens[a].resume();
      },
    }),
    (d.Tween = function (a, b) {
      (this._object = a),
        (this.game = b),
        (this._manager = this.game.tweens),
        (this._valuesStart = {}),
        (this._valuesEnd = {}),
        (this._valuesStartRepeat = {}),
        (this._duration = 1e3),
        (this._repeat = 0),
        (this._yoyo = !1),
        (this._reversed = !1),
        (this._delayTime = 0),
        (this._startTime = null),
        (this._easingFunction = d.Easing.Linear.None),
        (this._interpolationFunction = d.Math.linearInterpolation),
        (this._chainedTweens = []),
        (this._onStartCallback = null),
        (this._onStartCallbackFired = !1),
        (this._onUpdateCallback = null),
        (this._onCompleteCallback = null),
        (this._pausedTime = 0),
        (this.pendingDelete = !1);
      for (var c in a) this._valuesStart[c] = parseFloat(a[c], 10);
      (this.onStart = new d.Signal()),
        (this.onComplete = new d.Signal()),
        (this.isRunning = !1);
    }),
    (d.Tween.prototype = {
      to: function (a, b, c, d, e, f, g) {
        (b = b || 1e3),
          (c = c || null),
          (d = d || !1),
          (e = e || 0),
          (f = f || 0),
          (g = g || !1);
        var h;
        return (
          this._parent
            ? ((h = this._manager.create(this._object)),
              this._lastChild.chain(h),
              (this._lastChild = h))
            : ((h = this), (this._parent = this), (this._lastChild = this)),
          (h._repeat = f),
          (h._duration = b),
          (h._valuesEnd = a),
          null !== c && (h._easingFunction = c),
          e > 0 && (h._delayTime = e),
          (h._yoyo = g),
          d ? this.start() : this
        );
      },
      start: function () {
        if (null !== this.game && null !== this._object) {
          this._manager.add(this),
            this.onStart.dispatch(this._object),
            (this.isRunning = !0),
            (this._onStartCallbackFired = !1),
            (this._startTime = this.game.time.now + this._delayTime);
          for (var a in this._valuesEnd) {
            if (this._valuesEnd[a] instanceof Array) {
              if (0 === this._valuesEnd[a].length) continue;
              this._valuesEnd[a] = [this._object[a]].concat(this._valuesEnd[a]);
            }
            (this._valuesStart[a] = this._object[a]),
              this._valuesStart[a] instanceof Array == !1 &&
                (this._valuesStart[a] *= 1),
              (this._valuesStartRepeat[a] = this._valuesStart[a] || 0);
          }
          return this;
        }
      },
      stop: function () {
        return (this.isRunning = !1), this._manager.remove(this), this;
      },
      delay: function (a) {
        return (this._delayTime = a), this;
      },
      repeat: function (a) {
        return (this._repeat = a), this;
      },
      yoyo: function (a) {
        return (this._yoyo = a), this;
      },
      easing: function (a) {
        return (this._easingFunction = a), this;
      },
      interpolation: function (a) {
        return (this._interpolationFunction = a), this;
      },
      chain: function () {
        return (this._chainedTweens = arguments), this;
      },
      loop: function () {
        return this._lastChild.chain(this), this;
      },
      onStartCallback: function (a) {
        return (this._onStartCallback = a), this;
      },
      onUpdateCallback: function (a) {
        return (this._onUpdateCallback = a), this;
      },
      onCompleteCallback: function (a) {
        return (this._onCompleteCallback = a), this;
      },
      pause: function () {
        (this._paused = !0), (this._pausedTime = this.game.time.now);
      },
      resume: function () {
        (this._paused = !1),
          (this._startTime += this.game.time.now - this._pausedTime);
      },
      update: function (a) {
        if (this.pendingDelete) return !1;
        if (this._paused || a < this._startTime) return !0;
        var b;
        if (a < this._startTime) return !0;
        this._onStartCallbackFired === !1 &&
          (null !== this._onStartCallback &&
            this._onStartCallback.call(this._object),
          (this._onStartCallbackFired = !0));
        var c = (a - this._startTime) / this._duration;
        c = c > 1 ? 1 : c;
        var d = this._easingFunction(c);
        for (b in this._valuesEnd) {
          var e = this._valuesStart[b] || 0,
            f = this._valuesEnd[b];
          f instanceof Array
            ? (this._object[b] = this._interpolationFunction(f, d))
            : ("string" == typeof f && (f = e + parseFloat(f, 10)),
              "number" == typeof f && (this._object[b] = e + (f - e) * d));
        }
        if (
          (null !== this._onUpdateCallback &&
            this._onUpdateCallback.call(this._object, d),
          1 == c)
        ) {
          if (this._repeat > 0) {
            isFinite(this._repeat) && this._repeat--;
            for (b in this._valuesStartRepeat) {
              if (
                ("string" == typeof this._valuesEnd[b] &&
                  (this._valuesStartRepeat[b] =
                    this._valuesStartRepeat[b] +
                    parseFloat(this._valuesEnd[b], 10)),
                this._yoyo)
              ) {
                var g = this._valuesStartRepeat[b];
                (this._valuesStartRepeat[b] = this._valuesEnd[b]),
                  (this._valuesEnd[b] = g),
                  (this._reversed = !this._reversed);
              }
              this._valuesStart[b] = this._valuesStartRepeat[b];
            }
            return (
              (this._startTime = a + this._delayTime),
              this.onComplete.dispatch(this._object),
              null !== this._onCompleteCallback &&
                this._onCompleteCallback.call(this._object),
              !0
            );
          }
          (this.isRunning = !1),
            this.onComplete.dispatch(this._object),
            null !== this._onCompleteCallback &&
              this._onCompleteCallback.call(this._object);
          for (var h = 0, i = this._chainedTweens.length; i > h; h++)
            this._chainedTweens[h].start(a);
          return !1;
        }
        return !0;
      },
    }),
    (d.Easing = {
      Linear: {
        None: function (a) {
          return a;
        },
      },
      Quadratic: {
        In: function (a) {
          return a * a;
        },
        Out: function (a) {
          return a * (2 - a);
        },
        InOut: function (a) {
          return (a *= 2) < 1 ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1);
        },
      },
      Cubic: {
        In: function (a) {
          return a * a * a;
        },
        Out: function (a) {
          return --a * a * a + 1;
        },
        InOut: function (a) {
          return (a *= 2) < 1 ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2);
        },
      },
      Quartic: {
        In: function (a) {
          return a * a * a * a;
        },
        Out: function (a) {
          return 1 - --a * a * a * a;
        },
        InOut: function (a) {
          return (a *= 2) < 1
            ? 0.5 * a * a * a * a
            : -0.5 * ((a -= 2) * a * a * a - 2);
        },
      },
      Quintic: {
        In: function (a) {
          return a * a * a * a * a;
        },
        Out: function (a) {
          return --a * a * a * a * a + 1;
        },
        InOut: function (a) {
          return (a *= 2) < 1
            ? 0.5 * a * a * a * a * a
            : 0.5 * ((a -= 2) * a * a * a * a + 2);
        },
      },
      Sinusoidal: {
        In: function (a) {
          return 1 - Math.cos((a * Math.PI) / 2);
        },
        Out: function (a) {
          return Math.sin((a * Math.PI) / 2);
        },
        InOut: function (a) {
          return 0.5 * (1 - Math.cos(Math.PI * a));
        },
      },
      Exponential: {
        In: function (a) {
          return 0 === a ? 0 : Math.pow(1024, a - 1);
        },
        Out: function (a) {
          return 1 === a ? 1 : 1 - Math.pow(2, -10 * a);
        },
        InOut: function (a) {
          return 0 === a
            ? 0
            : 1 === a
            ? 1
            : (a *= 2) < 1
            ? 0.5 * Math.pow(1024, a - 1)
            : 0.5 * (-Math.pow(2, -10 * (a - 1)) + 2);
        },
      },
      Circular: {
        In: function (a) {
          return 1 - Math.sqrt(1 - a * a);
        },
        Out: function (a) {
          return Math.sqrt(1 - --a * a);
        },
        InOut: function (a) {
          return (a *= 2) < 1
            ? -0.5 * (Math.sqrt(1 - a * a) - 1)
            : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
        },
      },
      Elastic: {
        In: function (a) {
          var b,
            c = 0.1,
            d = 0.4;
          return 0 === a
            ? 0
            : 1 === a
            ? 1
            : (!c || 1 > c
                ? ((c = 1), (b = d / 4))
                : (b = (d * Math.asin(1 / c)) / (2 * Math.PI)),
              -(
                c *
                Math.pow(2, 10 * (a -= 1)) *
                Math.sin(((a - b) * 2 * Math.PI) / d)
              ));
        },
        Out: function (a) {
          var b,
            c = 0.1,
            d = 0.4;
          return 0 === a
            ? 0
            : 1 === a
            ? 1
            : (!c || 1 > c
                ? ((c = 1), (b = d / 4))
                : (b = (d * Math.asin(1 / c)) / (2 * Math.PI)),
              c * Math.pow(2, -10 * a) * Math.sin(((a - b) * 2 * Math.PI) / d) +
                1);
        },
        InOut: function (a) {
          var b,
            c = 0.1,
            d = 0.4;
          return 0 === a
            ? 0
            : 1 === a
            ? 1
            : (!c || 1 > c
                ? ((c = 1), (b = d / 4))
                : (b = (d * Math.asin(1 / c)) / (2 * Math.PI)),
              (a *= 2) < 1
                ? -0.5 *
                  c *
                  Math.pow(2, 10 * (a -= 1)) *
                  Math.sin(((a - b) * 2 * Math.PI) / d)
                : 0.5 *
                    c *
                    Math.pow(2, -10 * (a -= 1)) *
                    Math.sin(((a - b) * 2 * Math.PI) / d) +
                  1);
        },
      },
      Back: {
        In: function (a) {
          var b = 1.70158;
          return a * a * ((b + 1) * a - b);
        },
        Out: function (a) {
          var b = 1.70158;
          return --a * a * ((b + 1) * a + b) + 1;
        },
        InOut: function (a) {
          var b = 2.5949095;
          return (a *= 2) < 1
            ? 0.5 * a * a * ((b + 1) * a - b)
            : 0.5 * ((a -= 2) * a * ((b + 1) * a + b) + 2);
        },
      },
      Bounce: {
        In: function (a) {
          return 1 - d.Easing.Bounce.Out(1 - a);
        },
        Out: function (a) {
          return 1 / 2.75 > a
            ? 7.5625 * a * a
            : 2 / 2.75 > a
            ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
            : 2.5 / 2.75 > a
            ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
            : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
        },
        InOut: function (a) {
          return 0.5 > a
            ? 0.5 * d.Easing.Bounce.In(2 * a)
            : 0.5 * d.Easing.Bounce.Out(2 * a - 1) + 0.5;
        },
      },
    }),
    (d.Time = function (a) {
      (this.game = a),
        (this._started = 0),
        (this._timeLastSecond = 0),
        (this._pauseStarted = 0),
        (this.physicsElapsed = 0),
        (this.time = 0),
        (this.pausedTime = 0),
        (this.now = 0),
        (this.elapsed = 0),
        (this.fps = 0),
        (this.fpsMin = 1e3),
        (this.fpsMax = 0),
        (this.msMin = 1e3),
        (this.msMax = 0),
        (this.frames = 0),
        (this.pauseDuration = 0),
        (this.timeToCall = 0),
        (this.lastTime = 0),
        this.game.onPause.add(this.gamePaused, this),
        this.game.onResume.add(this.gameResumed, this),
        (this._justResumed = !1);
    }),
    (d.Time.prototype = {
      update: function (a) {
        (this.now = a),
          this._justResumed &&
            ((this.time = this.now), (this._justResumed = !1)),
          (this.timeToCall = this.game.math.max(0, 16 - (a - this.lastTime))),
          (this.elapsed = this.now - this.time),
          (this.msMin = this.game.math.min(this.msMin, this.elapsed)),
          (this.msMax = this.game.math.max(this.msMax, this.elapsed)),
          this.frames++,
          this.now > this._timeLastSecond + 1e3 &&
            ((this.fps = Math.round(
              (1e3 * this.frames) / (this.now - this._timeLastSecond)
            )),
            (this.fpsMin = this.game.math.min(this.fpsMin, this.fps)),
            (this.fpsMax = this.game.math.max(this.fpsMax, this.fps)),
            (this._timeLastSecond = this.now),
            (this.frames = 0)),
          (this.time = this.now),
          (this.lastTime = a + this.timeToCall),
          (this.physicsElapsed = 1 * (this.elapsed / 1e3)),
          this.physicsElapsed > 1 && (this.physicsElapsed = 1),
          this.game.paused && (this.pausedTime = this.now - this._pauseStarted);
      },
      gamePaused: function () {
        this._pauseStarted = this.now;
      },
      gameResumed: function () {
        (this.time = Date.now()),
          (this.pauseDuration = this.pausedTime),
          (this._justResumed = !0);
      },
      totalElapsedSeconds: function () {
        return 0.001 * (this.now - this._started);
      },
      elapsedSince: function (a) {
        return this.now - a;
      },
      elapsedSecondsSince: function (a) {
        return 0.001 * (this.now - a);
      },
      reset: function () {
        this._started = this.now;
      },
    }),
    (d.Timer = function (a) {
      (this.game = a),
        (this._started = 0),
        (this._timeLastSecond = 0),
        (this.running = !1),
        (this.events = []),
        (this.onEvent = new d.Signal());
    }),
    (d.Timer.prototype = {
      add: function (a) {
        this.events.push({
          delay: a,
          dispatched: !1,
          args: Array.prototype.splice.call(arguments, 1),
        });
      },
      start: function () {
        (this._started = this.game.time.now), (this.running = !0);
      },
      stop: function () {
        (this.running = !1), (this.events.length = 0);
      },
      update: function () {
        if (this.running)
          for (
            var a = this.seconds(), b = 0, c = this.events.length;
            c > b;
            b++
          )
            this.events[b].dispatched === !1 &&
              a >= this.events[b].delay &&
              ((this.events[b].dispatched = !0),
              this.onEvent.dispatch.apply(this, this.events[b].args));
      },
      seconds: function () {
        return 0.001 * (this.game.time.now - this._started);
      },
    }),
    (d.AnimationManager = function (a) {
      (this.sprite = a),
        (this.game = a.game),
        (this.currentFrame = null),
        (this.updateIfVisible = !0),
        (this.isLoaded = !1),
        (this._frameData = null),
        (this._anims = {}),
        (this._outputFrames = []);
    }),
    (d.AnimationManager.prototype = {
      loadFrameData: function (a) {
        (this._frameData = a), (this.frame = 0), (this.isLoaded = !0);
      },
      add: function (a, b, e, f, g) {
        return null == this._frameData
          ? (console.warn("No FrameData available for Phaser.Animation " + a),
            void 0)
          : ((e = e || 60),
            "undefined" == typeof f && (f = !1),
            "undefined" == typeof g &&
              (g = b && "number" == typeof b[0] ? !0 : !1),
            null == this.sprite.events.onAnimationStart &&
              ((this.sprite.events.onAnimationStart = new d.Signal()),
              (this.sprite.events.onAnimationComplete = new d.Signal()),
              (this.sprite.events.onAnimationLoop = new d.Signal())),
            (this._outputFrames.length = 0),
            this._frameData.getFrameIndexes(b, g, this._outputFrames),
            (this._anims[a] = new d.Animation(
              this.game,
              this.sprite,
              a,
              this._frameData,
              this._outputFrames,
              e,
              f
            )),
            (this.currentAnim = this._anims[a]),
            (this.currentFrame = this.currentAnim.currentFrame),
            this.sprite.setTexture(c.TextureCache[this.currentFrame.uuid]),
            this._anims[a]);
      },
      validateFrames: function (a, b) {
        "undefined" == typeof b && (b = !0);
        for (var c = 0; c < a.length; c++)
          if (b === !0) {
            if (a[c] > this._frameData.total) return !1;
          } else if (this._frameData.checkFrameName(a[c]) === !1) return !1;
        return !0;
      },
      play: function (a, b, c, d) {
        if (this._anims[a]) {
          if (this.currentAnim != this._anims[a])
            return (
              (this.currentAnim = this._anims[a]),
              (this.currentAnim.paused = !1),
              this.currentAnim.play(b, c, d)
            );
          if (this.currentAnim.isPlaying === !1)
            return (
              (this.currentAnim.paused = !1), this.currentAnim.play(b, c, d)
            );
        }
      },
      stop: function (a, b) {
        "undefined" == typeof b && (b = !1),
          "string" == typeof a
            ? this._anims[a] &&
              ((this.currentAnim = this._anims[a]), this.currentAnim.stop(b))
            : this.currentAnim && this.currentAnim.stop(b);
      },
      update: function () {
        return this.updateIfVisible && this.sprite.visible === !1
          ? !1
          : this.currentAnim && this.currentAnim.update() === !0
          ? ((this.currentFrame = this.currentAnim.currentFrame),
            (this.sprite.currentFrame = this.currentFrame),
            !0)
          : !1;
      },
      getAnimation: function (a) {
        return "string" == typeof a && this._anims[a] ? this._anims[a] : !1;
      },
      refreshFrame: function () {
        (this.sprite.currentFrame = this.currentFrame),
          this.sprite.setTexture(c.TextureCache[this.currentFrame.uuid]);
      },
      destroy: function () {
        (this._anims = {}),
          (this._frameData = null),
          (this._frameIndex = 0),
          (this.currentAnim = null),
          (this.currentFrame = null);
      },
    }),
    Object.defineProperty(d.AnimationManager.prototype, "frameData", {
      get: function () {
        return this._frameData;
      },
    }),
    Object.defineProperty(d.AnimationManager.prototype, "frameTotal", {
      get: function () {
        return this._frameData ? this._frameData.total : -1;
      },
    }),
    Object.defineProperty(d.AnimationManager.prototype, "paused", {
      get: function () {
        return this.currentAnim.isPaused;
      },
      set: function (a) {
        this.currentAnim.paused = a;
      },
    }),
    Object.defineProperty(d.AnimationManager.prototype, "frame", {
      get: function () {
        return this.currentFrame ? this._frameIndex : void 0;
      },
      set: function (a) {
        "number" == typeof a &&
          this._frameData &&
          null !== this._frameData.getFrame(a) &&
          ((this.currentFrame = this._frameData.getFrame(a)),
          (this._frameIndex = a),
          (this.sprite.currentFrame = this.currentFrame),
          this.sprite.setTexture(c.TextureCache[this.currentFrame.uuid]));
      },
    }),
    Object.defineProperty(d.AnimationManager.prototype, "frameName", {
      get: function () {
        return this.currentFrame ? this.currentFrame.name : void 0;
      },
      set: function (a) {
        "string" == typeof a &&
        this._frameData &&
        null !== this._frameData.getFrameByName(a)
          ? ((this.currentFrame = this._frameData.getFrameByName(a)),
            (this._frameIndex = this.currentFrame.index),
            (this.sprite.currentFrame = this.currentFrame),
            this.sprite.setTexture(c.TextureCache[this.currentFrame.uuid]))
          : console.warn("Cannot set frameName: " + a);
      },
    }),
    (d.Animation = function (a, b, c, d, e, f, g) {
      (this.game = a),
        (this._parent = b),
        (this._frameData = d),
        (this.name = c),
        (this._frames = []),
        (this._frames = this._frames.concat(e)),
        (this.delay = 1e3 / f),
        (this.looped = g),
        (this.killOnComplete = !1),
        (this.isFinished = !1),
        (this.isPlaying = !1),
        (this.isPaused = !1),
        (this._pauseStartTime = 0),
        (this._frameIndex = 0),
        (this._frameDiff = 0),
        (this._frameSkip = 1),
        (this.currentFrame = this._frameData.getFrame(
          this._frames[this._frameIndex]
        ));
    }),
    (d.Animation.prototype = {
      play: function (a, b, d) {
        return (
          "number" == typeof a && (this.delay = 1e3 / a),
          "boolean" == typeof b && (this.looped = b),
          "undefined" != typeof d && (this.killOnComplete = d),
          (this.isPlaying = !0),
          (this.isFinished = !1),
          (this.paused = !1),
          (this._timeLastFrame = this.game.time.now),
          (this._timeNextFrame = this.game.time.now + this.delay),
          (this._frameIndex = 0),
          (this.currentFrame = this._frameData.getFrame(
            this._frames[this._frameIndex]
          )),
          this._parent.setTexture(c.TextureCache[this.currentFrame.uuid]),
          this._parent.events &&
            this._parent.events.onAnimationStart.dispatch(this._parent, this),
          this
        );
      },
      restart: function () {
        (this.isPlaying = !0),
          (this.isFinished = !1),
          (this.paused = !1),
          (this._timeLastFrame = this.game.time.now),
          (this._timeNextFrame = this.game.time.now + this.delay),
          (this._frameIndex = 0),
          (this.currentFrame = this._frameData.getFrame(
            this._frames[this._frameIndex]
          ));
      },
      stop: function (a) {
        "undefined" == typeof a && (a = !1),
          (this.isPlaying = !1),
          (this.isFinished = !0),
          (this.paused = !1),
          a && (this.currentFrame = this._frameData.getFrame(this._frames[0]));
      },
      update: function () {
        return this.isPaused
          ? !1
          : this.isPlaying === !0 && this.game.time.now >= this._timeNextFrame
          ? ((this._frameSkip = 1),
            (this._frameDiff = this.game.time.now - this._timeNextFrame),
            (this._timeLastFrame = this.game.time.now),
            this._frameDiff > this.delay &&
              ((this._frameSkip = Math.floor(this._frameDiff / this.delay)),
              (this._frameDiff -= this._frameSkip * this.delay)),
            (this._timeNextFrame =
              this.game.time.now + (this.delay - this._frameDiff)),
            (this._frameIndex += this._frameSkip),
            this._frameIndex >= this._frames.length
              ? this.looped
                ? ((this._frameIndex %= this._frames.length),
                  (this.currentFrame = this._frameData.getFrame(
                    this._frames[this._frameIndex]
                  )),
                  this.currentFrame &&
                    this._parent.setTexture(
                      c.TextureCache[this.currentFrame.uuid]
                    ),
                  this._parent.events.onAnimationLoop.dispatch(
                    this._parent,
                    this
                  ))
                : this.onComplete()
              : ((this.currentFrame = this._frameData.getFrame(
                  this._frames[this._frameIndex]
                )),
                this.currentFrame &&
                  this._parent.setTexture(
                    c.TextureCache[this.currentFrame.uuid]
                  )),
            !0)
          : !1;
      },
      destroy: function () {
        (this.game = null),
          (this._parent = null),
          (this._frames = null),
          (this._frameData = null),
          (this.currentFrame = null),
          (this.isPlaying = !1);
      },
      onComplete: function () {
        (this.isPlaying = !1),
          (this.isFinished = !0),
          (this.paused = !1),
          this._parent.events &&
            this._parent.events.onAnimationComplete.dispatch(
              this._parent,
              this
            ),
          this.killOnComplete && this._parent.kill();
      },
    }),
    Object.defineProperty(d.Animation.prototype, "paused", {
      get: function () {
        return this.isPaused;
      },
      set: function (a) {
        (this.isPaused = a),
          a
            ? (this._pauseStartTime = this.game.time.now)
            : this.isPlaying &&
              (this._timeNextFrame = this.game.time.now + this.delay);
      },
    }),
    Object.defineProperty(d.Animation.prototype, "frameTotal", {
      get: function () {
        return this._frames.length;
      },
    }),
    Object.defineProperty(d.Animation.prototype, "frame", {
      get: function () {
        return null !== this.currentFrame
          ? this.currentFrame.index
          : this._frameIndex;
      },
      set: function (a) {
        (this.currentFrame = this._frameData.getFrame(a)),
          null !== this.currentFrame &&
            ((this._frameIndex = a),
            this._parent.setTexture(c.TextureCache[this.currentFrame.uuid]));
      },
    }),
    (d.Animation.generateFrameNames = function (a, b, c, e, f) {
      "undefined" == typeof e && (e = "");
      var g = [],
        h = "";
      if (c > b)
        for (var i = b; c >= i; i++)
          (h =
            "number" == typeof f
              ? d.Utils.pad(i.toString(), f, "0", 1)
              : i.toString()),
            (h = a + h + e),
            g.push(h);
      else
        for (var i = b; i >= c; i--)
          (h =
            "number" == typeof f
              ? d.Utils.pad(i.toString(), f, "0", 1)
              : i.toString()),
            (h = a + h + e),
            g.push(h);
      return g;
    }),
    (d.Frame = function (a, b, c, e, f, g, h) {
      (this.index = a),
        (this.x = b),
        (this.y = c),
        (this.width = e),
        (this.height = f),
        (this.name = g),
        (this.uuid = h),
        (this.centerX = Math.floor(e / 2)),
        (this.centerY = Math.floor(f / 2)),
        (this.distance = d.Math.distance(0, 0, e, f)),
        (this.rotated = !1),
        (this.rotationDirection = "cw"),
        (this.trimmed = !1),
        (this.sourceSizeW = e),
        (this.sourceSizeH = f),
        (this.spriteSourceSizeX = 0),
        (this.spriteSourceSizeY = 0),
        (this.spriteSourceSizeW = 0),
        (this.spriteSourceSizeH = 0);
    }),
    (d.Frame.prototype = {
      setTrim: function (a, b, c, d, e, f, g) {
        (this.trimmed = a),
          a &&
            ((this.width = b),
            (this.height = c),
            (this.sourceSizeW = b),
            (this.sourceSizeH = c),
            (this.centerX = Math.floor(b / 2)),
            (this.centerY = Math.floor(c / 2)),
            (this.spriteSourceSizeX = d),
            (this.spriteSourceSizeY = e),
            (this.spriteSourceSizeW = f),
            (this.spriteSourceSizeH = g));
      },
    }),
    (d.FrameData = function () {
      (this._frames = []), (this._frameNames = []);
    }),
    (d.FrameData.prototype = {
      addFrame: function (a) {
        return (
          (a.index = this._frames.length),
          this._frames.push(a),
          "" !== a.name && (this._frameNames[a.name] = a.index),
          a
        );
      },
      getFrame: function (a) {
        return this._frames.length > a ? this._frames[a] : null;
      },
      getFrameByName: function (a) {
        return "number" == typeof this._frameNames[a]
          ? this._frames[this._frameNames[a]]
          : null;
      },
      checkFrameName: function (a) {
        return null == this._frameNames[a] ? !1 : !0;
      },
      getFrameRange: function (a, b, c) {
        "undefined" == typeof c && (c = []);
        for (var d = a; b >= d; d++) c.push(this._frames[d]);
        return c;
      },
      getFrames: function (a, b, c) {
        if (
          ("undefined" == typeof b && (b = !0),
          "undefined" == typeof c && (c = []),
          "undefined" == typeof a || 0 === a.length)
        )
          for (var d = 0; d < this._frames.length; d++) c.push(this._frames[d]);
        else
          for (var d = 0, e = a.length; e > d; d++)
            b ? c.push(this.getFrame(a[d])) : c.push(this.getFrameByName(a[d]));
        return c;
      },
      getFrameIndexes: function (a, b, c) {
        if (
          ("undefined" == typeof b && (b = !0),
          "undefined" == typeof c && (c = []),
          "undefined" == typeof a || 0 === a.length)
        )
          for (var d = 0, e = this._frames.length; e > d; d++)
            c.push(this._frames[d].index);
        else
          for (var d = 0, e = a.length; e > d; d++)
            b
              ? c.push(a[d])
              : this.getFrameByName(a[d]) &&
                c.push(this.getFrameByName(a[d]).index);
        return c;
      },
    }),
    Object.defineProperty(d.FrameData.prototype, "total", {
      get: function () {
        return this._frames.length;
      },
    }),
    (d.AnimationParser = {
      spriteSheet: function (a, b, e, f, g) {
        var h = a.cache.getImage(b);
        if (null == h) return null;
        var i = h.width,
          j = h.height;
        0 >= e && (e = Math.floor(-i / Math.min(-1, e))),
          0 >= f && (f = Math.floor(-j / Math.min(-1, f)));
        var k = Math.round(i / e),
          l = Math.round(j / f),
          m = k * l;
        if (
          (-1 !== g && (m = g), 0 === i || 0 === j || e > i || f > j || 0 === m)
        )
          return (
            console.warn(
              "Phaser.AnimationParser.spriteSheet: width/height zero or width/height < given frameWidth/frameHeight"
            ),
            null
          );
        for (var n = new d.FrameData(), o = 0, p = 0, q = 0; m > q; q++) {
          var r = a.rnd.uuid();
          n.addFrame(new d.Frame(q, o, p, e, f, "", r)),
            (c.TextureCache[r] = new c.Texture(c.BaseTextureCache[b], {
              x: o,
              y: p,
              width: e,
              height: f,
            })),
            (o += e),
            o === i && ((o = 0), (p += f));
        }
        return n;
      },
      JSONData: function (a, b, e) {
        if (!b.frames)
          return (
            console.warn(
              "Phaser.AnimationParser.JSONData: Invalid Texture Atlas JSON given, missing 'frames' array"
            ),
            console.log(b),
            void 0
          );
        for (
          var f, g = new d.FrameData(), h = b.frames, i = 0;
          i < h.length;
          i++
        ) {
          var j = a.rnd.uuid();
          (f = g.addFrame(
            new d.Frame(
              i,
              h[i].frame.x,
              h[i].frame.y,
              h[i].frame.w,
              h[i].frame.h,
              h[i].filename,
              j
            )
          )),
            (c.TextureCache[j] = new c.Texture(c.BaseTextureCache[e], {
              x: h[i].frame.x,
              y: h[i].frame.y,
              width: h[i].frame.w,
              height: h[i].frame.h,
            })),
            h[i].trimmed &&
              (f.setTrim(
                h[i].trimmed,
                h[i].sourceSize.w,
                h[i].sourceSize.h,
                h[i].spriteSourceSize.x,
                h[i].spriteSourceSize.y,
                h[i].spriteSourceSize.w,
                h[i].spriteSourceSize.h
              ),
              (c.TextureCache[j].trimmed = !0),
              (c.TextureCache[j].trim.x = h[i].spriteSourceSize.x),
              (c.TextureCache[j].trim.y = h[i].spriteSourceSize.y));
        }
        return g;
      },
      JSONDataHash: function (a, b, e) {
        if (!b.frames)
          return (
            console.warn(
              "Phaser.AnimationParser.JSONDataHash: Invalid Texture Atlas JSON given, missing 'frames' object"
            ),
            console.log(b),
            void 0
          );
        var f,
          g = new d.FrameData(),
          h = b.frames,
          i = 0;
        for (var j in h) {
          var k = a.rnd.uuid();
          (f = g.addFrame(
            new d.Frame(
              i,
              h[j].frame.x,
              h[j].frame.y,
              h[j].frame.w,
              h[j].frame.h,
              j,
              k
            )
          )),
            (c.TextureCache[k] = new c.Texture(c.BaseTextureCache[e], {
              x: h[j].frame.x,
              y: h[j].frame.y,
              width: h[j].frame.w,
              height: h[j].frame.h,
            })),
            h[j].trimmed &&
              (f.setTrim(
                h[j].trimmed,
                h[j].sourceSize.w,
                h[j].sourceSize.h,
                h[j].spriteSourceSize.x,
                h[j].spriteSourceSize.y,
                h[j].spriteSourceSize.w,
                h[j].spriteSourceSize.h
              ),
              (c.TextureCache[k].trimmed = !0),
              (c.TextureCache[k].trim.x = h[j].spriteSourceSize.x),
              (c.TextureCache[k].trim.y = h[j].spriteSourceSize.y)),
            i++;
        }
        return g;
      },
      XMLData: function (a, b, e) {
        if (!b.getElementsByTagName("TextureAtlas"))
          return (
            console.warn(
              "Phaser.AnimationParser.XMLData: Invalid Texture Atlas XML given, missing <TextureAtlas> tag"
            ),
            void 0
          );
        for (
          var f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r = new d.FrameData(),
            s = b.getElementsByTagName("SubTexture"),
            t = 0;
          t < s.length;
          t++
        )
          (g = a.rnd.uuid()),
            (i = s[t].attributes),
            (h = i.name.nodeValue),
            (j = parseInt(i.x.nodeValue, 10)),
            (k = parseInt(i.y.nodeValue, 10)),
            (l = parseInt(i.width.nodeValue, 10)),
            (m = parseInt(i.height.nodeValue, 10)),
            (n = null),
            (o = null),
            i.frameX &&
              ((n = Math.abs(parseInt(i.frameX.nodeValue, 10))),
              (o = Math.abs(parseInt(i.frameY.nodeValue, 10))),
              (p = parseInt(i.frameWidth.nodeValue, 10)),
              (q = parseInt(i.frameHeight.nodeValue, 10))),
            (f = r.addFrame(new d.Frame(t, j, k, l, m, h, g))),
            (c.TextureCache[g] = new c.Texture(c.BaseTextureCache[e], {
              x: j,
              y: k,
              width: l,
              height: m,
            })),
            (null !== n || null !== o) &&
              (f.setTrim(!0, l, m, n, o, p, q),
              (c.TextureCache[g].realSize = { x: n, y: o, w: p, h: q }),
              (c.TextureCache[g].trimmed = !0),
              (c.TextureCache[g].trim.x = n),
              (c.TextureCache[g].trim.y = o));
        return r;
      },
    }),
    (d.Cache = function (a) {
      (this.game = a),
        (this._canvases = {}),
        (this._images = {}),
        (this._textures = {}),
        (this._sounds = {}),
        (this._text = {}),
        (this._tilemaps = {}),
        (this._tilesets = {}),
        (this._bitmapDatas = {}),
        this.addDefaultImage(),
        this.addMissingImage(),
        (this.onSoundUnlock = new d.Signal());
    }),
    (d.Cache.prototype = {
      addCanvas: function (a, b, c) {
        this._canvases[a] = { canvas: b, context: c };
      },
      addBitmapData: function (a, b) {
        return (this._bitmapDatas[a] = b), b;
      },
      addRenderTexture: function (a, b) {
        var c = new d.Frame(0, 0, 0, b.width, b.height, "", "");
        this._textures[a] = { texture: b, frame: c };
      },
      addSpriteSheet: function (a, b, e, f, g, h) {
        (this._images[a] = {
          url: b,
          data: e,
          spriteSheet: !0,
          frameWidth: f,
          frameHeight: g,
        }),
          (c.BaseTextureCache[a] = new c.BaseTexture(e)),
          (c.TextureCache[a] = new c.Texture(c.BaseTextureCache[a])),
          (this._images[a].frameData = d.AnimationParser.spriteSheet(
            this.game,
            a,
            f,
            g,
            h
          ));
      },
      addTileset: function (a, b, e, f, g, h, i, j) {
        (this._tilesets[a] = {
          url: b,
          data: e,
          tileWidth: f,
          tileHeight: g,
          tileMargin: i,
          tileSpacing: j,
        }),
          (c.BaseTextureCache[a] = new c.BaseTexture(e)),
          (c.TextureCache[a] = new c.Texture(c.BaseTextureCache[a])),
          (this._tilesets[a].tileData = d.TilemapParser.tileset(
            this.game,
            a,
            f,
            g,
            h,
            i,
            j
          ));
      },
      addTilemap: function (a, b, c, e) {
        (this._tilemaps[a] = { url: b, data: c, format: e }),
          (this._tilemaps[a].layers = d.TilemapParser.parse(this.game, c, e));
      },
      addTextureAtlas: function (a, b, e, f, g) {
        (this._images[a] = { url: b, data: e, spriteSheet: !0 }),
          (c.BaseTextureCache[a] = new c.BaseTexture(e)),
          (c.TextureCache[a] = new c.Texture(c.BaseTextureCache[a])),
          g == d.Loader.TEXTURE_ATLAS_JSON_ARRAY
            ? (this._images[a].frameData = d.AnimationParser.JSONData(
                this.game,
                f,
                a
              ))
            : g == d.Loader.TEXTURE_ATLAS_JSON_HASH
            ? (this._images[a].frameData = d.AnimationParser.JSONDataHash(
                this.game,
                f,
                a
              ))
            : g == d.Loader.TEXTURE_ATLAS_XML_STARLING &&
              (this._images[a].frameData = d.AnimationParser.XMLData(
                this.game,
                f,
                a
              ));
      },
      addBitmapFont: function (a, b, e, f) {
        (this._images[a] = { url: b, data: e, spriteSheet: !0 }),
          (c.BaseTextureCache[a] = new c.BaseTexture(e)),
          (c.TextureCache[a] = new c.Texture(c.BaseTextureCache[a])),
          d.LoaderParser.bitmapFont(this.game, f, a);
      },
      addDefaultImage: function () {
        var a = new Image();
        (a.src =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABVJREFUeF7NwIEAAAAAgKD9qdeocAMAoAABm3DkcAAAAABJRU5ErkJggg=="),
          (this._images.__default = { url: null, data: a, spriteSheet: !1 }),
          (this._images.__default.frame = new d.Frame(0, 0, 0, 32, 32, "", "")),
          (c.BaseTextureCache.__default = new c.BaseTexture(a)),
          (c.TextureCache.__default = new c.Texture(
            c.BaseTextureCache.__default
          ));
      },
      addMissingImage: function () {
        var a = new Image();
        (a.src =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ9JREFUeNq01ssOwyAMRFG46v//Mt1ESmgh+DFmE2GPOBARKb2NVjo+17PXLD8a1+pl5+A+wSgFygymWYHBb0FtsKhJDdZlncG2IzJ4ayoMDv20wTmSMzClEgbWYNTAkQ0Z+OJ+A/eWnAaR9+oxCF4Os0H8htsMUp+pwcgBBiMNnAwF8GqIgL2hAzaGFFgZauDPKABmowZ4GL369/0rwACp2yA/ttmvsQAAAABJRU5ErkJggg=="),
          (this._images.__missing = { url: null, data: a, spriteSheet: !1 }),
          (this._images.__missing.frame = new d.Frame(0, 0, 0, 32, 32, "", "")),
          (c.BaseTextureCache.__missing = new c.BaseTexture(a)),
          (c.TextureCache.__missing = new c.Texture(
            c.BaseTextureCache.__missing
          ));
      },
      addText: function (a, b, c) {
        this._text[a] = { url: b, data: c };
      },
      addImage: function (a, b, e) {
        (this._images[a] = { url: b, data: e, spriteSheet: !1 }),
          (this._images[a].frame = new d.Frame(
            0,
            0,
            0,
            e.width,
            e.height,
            a,
            this.game.rnd.uuid()
          )),
          (c.BaseTextureCache[a] = new c.BaseTexture(e)),
          (c.TextureCache[a] = new c.Texture(c.BaseTextureCache[a]));
      },
      addSound: function (a, b, c, d, e) {
        (d = d || !0), (e = e || !1);
        var f = !1;
        e && (f = !0),
          (this._sounds[a] = {
            url: b,
            data: c,
            isDecoding: !1,
            decoded: f,
            webAudio: d,
            audioTag: e,
          });
      },
      reloadSound: function (a) {
        var b = this;
        this._sounds[a] &&
          ((this._sounds[a].data.src = this._sounds[a].url),
          this._sounds[a].data.addEventListener(
            "canplaythrough",
            function () {
              return b.reloadSoundComplete(a);
            },
            !1
          ),
          this._sounds[a].data.load());
      },
      reloadSoundComplete: function (a) {
        this._sounds[a] &&
          ((this._sounds[a].locked = !1), this.onSoundUnlock.dispatch(a));
      },
      updateSound: function (a, b, c) {
        this._sounds[a] && (this._sounds[a][b] = c);
      },
      decodedSound: function (a, b) {
        (this._sounds[a].data = b),
          (this._sounds[a].decoded = !0),
          (this._sounds[a].isDecoding = !1);
      },
      getCanvas: function (a) {
        return this._canvases[a] ? this._canvases[a].canvas : null;
      },
      getBitmapData: function (a) {
        return this._bitmapDatas[a] ? this._bitmapDatas[a] : null;
      },
      checkImageKey: function (a) {
        return this._images[a] ? !0 : !1;
      },
      getImage: function (a) {
        return this._images[a] ? this._images[a].data : null;
      },
      getTilesetImage: function (a) {
        return this._tilesets[a] ? this._tilesets[a].data : null;
      },
      getTileset: function (a) {
        return this._tilesets[a] ? this._tilesets[a].tileData : null;
      },
      getTilemapData: function (a) {
        return this._tilemaps[a] ? this._tilemaps[a] : null;
      },
      getFrameData: function (a) {
        return this._images[a] && this._images[a].frameData
          ? this._images[a].frameData
          : null;
      },
      getFrameByIndex: function (a, b) {
        return this._images[a] && this._images[a].frameData
          ? this._images[a].frameData.getFrame(b)
          : null;
      },
      getFrameByName: function (a, b) {
        return this._images[a] && this._images[a].frameData
          ? this._images[a].frameData.getFrameByName(b)
          : null;
      },
      getFrame: function (a) {
        return this._images[a] && this._images[a].spriteSheet === !1
          ? this._images[a].frame
          : null;
      },
      getTextureFrame: function (a) {
        return this._textures[a] ? this._textures[a].frame : null;
      },
      getTexture: function (a) {
        return this._textures[a] ? this._textures[a] : null;
      },
      getSound: function (a) {
        return this._sounds[a] ? this._sounds[a] : null;
      },
      getSoundData: function (a) {
        return this._sounds[a] ? this._sounds[a].data : null;
      },
      isSoundDecoded: function (a) {
        return this._sounds[a] ? this._sounds[a].decoded : void 0;
      },
      isSoundReady: function (a) {
        return (
          this._sounds[a] &&
          this._sounds[a].decoded &&
          this.game.sound.touchLocked === !1
        );
      },
      isSpriteSheet: function (a) {
        return this._images[a] ? this._images[a].spriteSheet : !1;
      },
      getText: function (a) {
        return this._text[a] ? this._text[a].data : null;
      },
      getKeys: function (a) {
        var b = [];
        for (var c in a) "__default" !== c && b.push(c);
        return b;
      },
      getImageKeys: function () {
        return this.getKeys(this._images);
      },
      getSoundKeys: function () {
        return this.getKeys(this._sounds);
      },
      getTextKeys: function () {
        return this.getKeys(this._text);
      },
      removeCanvas: function (a) {
        delete this._canvases[a];
      },
      removeImage: function (a) {
        delete this._images[a];
      },
      removeSound: function (a) {
        delete this._sounds[a];
      },
      removeText: function (a) {
        delete this._text[a];
      },
      destroy: function () {
        for (var a in this._canvases) delete this._canvases[a.key];
        for (var a in this._images) delete this._images[a.key];
        for (var a in this._sounds) delete this._sounds[a.key];
        for (var a in this._text) delete this._text[a.key];
      },
    }),
    (d.Loader = function (a) {
      (this.game = a),
        (this._fileList = []),
        (this._fileIndex = 0),
        (this._progressChunk = 0),
        (this._xhr = new XMLHttpRequest()),
        (this.isLoading = !1),
        (this.hasLoaded = !1),
        (this.progress = 0),
        (this.preloadSprite = null),
        (this.crossOrigin = ""),
        (this.baseURL = ""),
        (this.onFileComplete = new d.Signal()),
        (this.onFileError = new d.Signal()),
        (this.onLoadStart = new d.Signal()),
        (this.onLoadComplete = new d.Signal());
    }),
    (d.Loader.TEXTURE_ATLAS_JSON_ARRAY = 0),
    (d.Loader.TEXTURE_ATLAS_JSON_HASH = 1),
    (d.Loader.TEXTURE_ATLAS_XML_STARLING = 2),
    (d.Loader.prototype = {
      setPreloadSprite: function (a, b) {
        (b = b || 0),
          (this.preloadSprite = {
            sprite: a,
            direction: b,
            width: a.width,
            height: a.height,
            crop: null,
          }),
          (this.preloadSprite.crop =
            0 === b
              ? new d.Rectangle(0, 0, 1, a.height)
              : new d.Rectangle(0, 0, a.width, 1)),
          (a.crop = this.preloadSprite.crop),
          (a.cropEnabled = !0);
      },
      checkKeyExists: function (a, b) {
        if (this._fileList.length > 0)
          for (var c = 0; c < this._fileList.length; c++)
            if (this._fileList[c].type === a && this._fileList[c].key === b)
              return !0;
        return !1;
      },
      getAsset: function (a, b) {
        if (this._fileList.length > 0)
          for (var c = 0; c < this._fileList.length; c++)
            if (this._fileList[c].type === a && this._fileList[c].key === b)
              return { index: c, file: this._fileList[c] };
        return !1;
      },
      reset: function () {
        (this.preloadSprite = null),
          (this.isLoading = !1),
          (this._fileList.length = 0),
          (this._fileIndex = 0);
      },
      addToFileList: function (a, b, c, d) {
        var e = { type: a, key: b, url: c, data: null, error: !1, loaded: !1 };
        if ("undefined" != typeof d) for (var f in d) e[f] = d[f];
        this.checkKeyExists(a, b) === !1 && this._fileList.push(e);
      },
      replaceInFileList: function (a, b, c, d) {
        var e = { type: a, key: b, url: c, data: null, error: !1, loaded: !1 };
        if ("undefined" != typeof d) for (var f in d) e[f] = d[f];
        this.checkKeyExists(a, b) === !1 && this._fileList.push(e);
      },
      image: function (a, b, c) {
        return (
          "undefined" == typeof c && (c = !1),
          c
            ? this.replaceInFileList("image", a, b)
            : this.addToFileList("image", a, b),
          this
        );
      },
      text: function (a, b, c) {
        return (
          "undefined" == typeof c && (c = !1),
          c
            ? this.replaceInFileList("text", a, b)
            : this.addToFileList("text", a, b),
          this
        );
      },
      script: function (a, b) {
        return this.addToFileList("script", a, b), this;
      },
      spritesheet: function (a, b, c, d, e) {
        return (
          "undefined" == typeof e && (e = -1),
          this.addToFileList("spritesheet", a, b, {
            frameWidth: c,
            frameHeight: d,
            frameMax: e,
          }),
          this
        );
      },
      tileset: function (a, b, c, d, e, f, g) {
        return (
          "undefined" == typeof e && (e = -1),
          "undefined" == typeof f && (f = 0),
          "undefined" == typeof g && (g = 0),
          this.addToFileList("tileset", a, b, {
            tileWidth: c,
            tileHeight: d,
            tileMax: e,
            tileMargin: f,
            tileSpacing: g,
          }),
          this
        );
      },
      audio: function (a, b, c) {
        return (
          "undefined" == typeof c && (c = !0),
          this.addToFileList("audio", a, b, { buffer: null, autoDecode: c }),
          this
        );
      },
      tilemap: function (a, b, c, e) {
        if (
          ("undefined" == typeof b && (b = null),
          "undefined" == typeof c && (c = null),
          "undefined" == typeof e && (e = d.Tilemap.CSV),
          null == b && null == c)
        )
          return (
            console.warn(
              "Phaser.Loader.tilemap - Both mapDataURL and mapData are null. One must be set."
            ),
            this
          );
        if (c) {
          switch (e) {
            case d.Tilemap.CSV:
              break;
            case d.Tilemap.TILED_JSON:
              "string" == typeof c && (c = JSON.parse(c));
          }
          this.game.cache.addTilemap(a, null, c, e);
        } else this.addToFileList("tilemap", a, b, { format: e });
        return this;
      },
      bitmapFont: function (a, b, c, d) {
        if (
          ("undefined" == typeof c && (c = null),
          "undefined" == typeof d && (d = null),
          c)
        )
          this.addToFileList("bitmapfont", a, b, { xmlURL: c });
        else if ("string" == typeof d) {
          var e;
          try {
            if (window.DOMParser) {
              var f = new DOMParser();
              e = f.parseFromString(d, "text/xml");
            } else
              (e = new ActiveXObject("Microsoft.XMLDOM")),
                (e.async = "false"),
                e.loadXML(d);
          } catch (g) {
            e = void 0;
          }
          if (
            !e ||
            !e.documentElement ||
            e.getElementsByTagName("parsererror").length
          )
            throw new Error("Phaser.Loader. Invalid Bitmap Font XML given");
          this.addToFileList("bitmapfont", a, b, { xmlURL: null, xmlData: e });
        }
        return this;
      },
      atlasJSONArray: function (a, b, c, e) {
        return this.atlas(a, b, c, e, d.Loader.TEXTURE_ATLAS_JSON_ARRAY);
      },
      atlasJSONHash: function (a, b, c, e) {
        return this.atlas(a, b, c, e, d.Loader.TEXTURE_ATLAS_JSON_HASH);
      },
      atlasXML: function (a, b, c, e) {
        return this.atlas(a, b, c, e, d.Loader.TEXTURE_ATLAS_XML_STARLING);
      },
      atlas: function (a, b, c, e, f) {
        if (
          ("undefined" == typeof c && (c = null),
          "undefined" == typeof e && (e = null),
          "undefined" == typeof f && (f = d.Loader.TEXTURE_ATLAS_JSON_ARRAY),
          c)
        )
          this.addToFileList("textureatlas", a, b, { atlasURL: c, format: f });
        else {
          switch (f) {
            case d.Loader.TEXTURE_ATLAS_JSON_ARRAY:
              "string" == typeof e && (e = JSON.parse(e));
              break;
            case d.Loader.TEXTURE_ATLAS_XML_STARLING:
              if ("string" == typeof e) {
                var g;
                try {
                  if (window.DOMParser) {
                    var h = new DOMParser();
                    g = h.parseFromString(e, "text/xml");
                  } else
                    (g = new ActiveXObject("Microsoft.XMLDOM")),
                      (g.async = "false"),
                      g.loadXML(e);
                } catch (i) {
                  g = void 0;
                }
                if (
                  !g ||
                  !g.documentElement ||
                  g.getElementsByTagName("parsererror").length
                )
                  throw new Error(
                    "Phaser.Loader. Invalid Texture Atlas XML given"
                  );
                e = g;
              }
          }
          this.addToFileList("textureatlas", a, b, {
            atlasURL: null,
            atlasData: e,
            format: f,
          });
        }
        return this;
      },
      removeFile: function (a, b) {
        var c = this.getAsset(a, b);
        c !== !1 && this._fileList.splice(c.index, 1);
      },
      removeAll: function () {
        this._fileList.length = 0;
      },
      start: function () {
        this.isLoading ||
          ((this.progress = 0),
          (this.hasLoaded = !1),
          (this.isLoading = !0),
          this.onLoadStart.dispatch(this._fileList.length),
          this._fileList.length > 0
            ? ((this._fileIndex = 0),
              (this._progressChunk = 100 / this._fileList.length),
              this.loadFile())
            : ((this.progress = 100),
              (this.hasLoaded = !0),
              this.onLoadComplete.dispatch()));
      },
      loadFile: function () {
        if (!this._fileList[this._fileIndex])
          return (
            console.warn(
              "Phaser.Loader loadFile invalid index " + this._fileIndex
            ),
            void 0
          );
        var a = this._fileList[this._fileIndex],
          b = this;
        switch (a.type) {
          case "image":
          case "spritesheet":
          case "textureatlas":
          case "bitmapfont":
          case "tileset":
            (a.data = new Image()),
              (a.data.name = a.key),
              (a.data.onload = function () {
                return b.fileComplete(b._fileIndex);
              }),
              (a.data.onerror = function () {
                return b.fileError(b._fileIndex);
              }),
              (a.data.crossOrigin = this.crossOrigin),
              (a.data.src = this.baseURL + a.url);
            break;
          case "audio":
            (a.url = this.getAudioURL(a.url)),
              null !== a.url
                ? this.game.sound.usingWebAudio
                  ? (this._xhr.open("GET", this.baseURL + a.url, !0),
                    (this._xhr.responseType = "arraybuffer"),
                    (this._xhr.onload = function () {
                      return b.fileComplete(b._fileIndex);
                    }),
                    (this._xhr.onerror = function () {
                      return b.fileError(b._fileIndex);
                    }),
                    this._xhr.send())
                  : this.game.sound.usingAudioTag &&
                    (this.game.sound.touchLocked
                      ? ((a.data = new Audio()),
                        (a.data.name = a.key),
                        (a.data.preload = "auto"),
                        (a.data.src = this.baseURL + a.url),
                        this.fileComplete(this._fileIndex))
                      : ((a.data = new Audio()),
                        (a.data.name = a.key),
                        (a.data.onerror = function () {
                          return b.fileError(b._fileIndex);
                        }),
                        (a.data.preload = "auto"),
                        (a.data.src = this.baseURL + a.url),
                        a.data.addEventListener(
                          "canplaythrough",
                          d.GAMES[this.game.id].load.fileComplete(
                            this._fileIndex
                          ),
                          !1
                        ),
                        a.data.load()))
                : this.fileError(this._fileIndex);
            break;
          case "tilemap":
            if (
              (this._xhr.open("GET", this.baseURL + a.url, !0),
              (this._xhr.responseType = "text"),
              a.format === d.Tilemap.TILED_JSON)
            )
              this._xhr.onload = function () {
                return b.jsonLoadComplete(b._fileIndex);
              };
            else {
              if (a.format !== d.Tilemap.CSV)
                throw new Error(
                  "Phaser.Loader. Invalid Tilemap format: " + a.format
                );
              this._xhr.onload = function () {
                return b.csvLoadComplete(b._fileIndex);
              };
            }
            (this._xhr.onerror = function () {
              return b.dataLoadError(b._fileIndex);
            }),
              this._xhr.send();
            break;
          case "text":
            this._xhr.open("GET", this.baseURL + a.url, !0),
              (this._xhr.responseType = "text"),
              (this._xhr.onload = function () {
                return b.fileComplete(b._fileIndex);
              }),
              (this._xhr.onerror = function () {
                return b.fileError(b._fileIndex);
              }),
              this._xhr.send();
            break;
          case "script":
            this._xhr.open("GET", this.baseURL + a.url, !0),
              (this._xhr.responseType = "text"),
              (this._xhr.onload = function () {
                return b.fileComplete(b._fileIndex);
              }),
              (this._xhr.onerror = function () {
                return b.fileError(b._fileIndex);
              }),
              this._xhr.send();
        }
      },
      getAudioURL: function (a) {
        var b;
        "string" == typeof a && (a = [a]);
        for (var c = 0; c < a.length; c++)
          if (
            ((b = a[c].toLowerCase()),
            (b = b.substr((Math.max(0, b.lastIndexOf(".")) || 1 / 0) + 1)),
            this.game.device.canPlayAudio(b))
          )
            return a[c];
        return null;
      },
      fileError: function (a) {
        (this._fileList[a].loaded = !0),
          (this._fileList[a].error = !0),
          this.onFileError.dispatch(this._fileList[a].key, this._fileList[a]),
          console.warn(
            "Phaser.Loader error loading file: " +
              this._fileList[a].key +
              " from URL " +
              this._fileList[a].url
          ),
          this.nextFile(a, !1);
      },
      fileComplete: function (a) {
        if (!this._fileList[a])
          return (
            console.warn("Phaser.Loader fileComplete invalid index " + a),
            void 0
          );
        var b = this._fileList[a];
        b.loaded = !0;
        var c = !0,
          e = this;
        switch (b.type) {
          case "image":
            this.game.cache.addImage(b.key, b.url, b.data);
            break;
          case "spritesheet":
            this.game.cache.addSpriteSheet(
              b.key,
              b.url,
              b.data,
              b.frameWidth,
              b.frameHeight,
              b.frameMax
            );
            break;
          case "tileset":
            this.game.cache.addTileset(
              b.key,
              b.url,
              b.data,
              b.tileWidth,
              b.tileHeight,
              b.tileMax,
              b.tileMargin,
              b.tileSpacing
            );
            break;
          case "textureatlas":
            if (null == b.atlasURL)
              this.game.cache.addTextureAtlas(
                b.key,
                b.url,
                b.data,
                b.atlasData,
                b.format
              );
            else {
              if (
                ((c = !1),
                this._xhr.open("GET", this.baseURL + b.atlasURL, !0),
                (this._xhr.responseType = "text"),
                b.format == d.Loader.TEXTURE_ATLAS_JSON_ARRAY ||
                  b.format == d.Loader.TEXTURE_ATLAS_JSON_HASH)
              )
                this._xhr.onload = function () {
                  return e.jsonLoadComplete(a);
                };
              else {
                if (b.format != d.Loader.TEXTURE_ATLAS_XML_STARLING)
                  throw new Error(
                    "Phaser.Loader. Invalid Texture Atlas format: " + b.format
                  );
                this._xhr.onload = function () {
                  return e.xmlLoadComplete(a);
                };
              }
              (this._xhr.onerror = function () {
                return e.dataLoadError(a);
              }),
                this._xhr.send();
            }
            break;
          case "bitmapfont":
            null == b.xmlURL
              ? this.game.cache.addBitmapFont(b.key, b.url, b.data, b.xmlData)
              : ((c = !1),
                this._xhr.open("GET", this.baseURL + b.xmlURL, !0),
                (this._xhr.responseType = "text"),
                (this._xhr.onload = function () {
                  return e.xmlLoadComplete(a);
                }),
                (this._xhr.onerror = function () {
                  return e.dataLoadError(a);
                }),
                this._xhr.send());
            break;
          case "audio":
            if (this.game.sound.usingWebAudio) {
              if (
                ((b.data = this._xhr.response),
                this.game.cache.addSound(b.key, b.url, b.data, !0, !1),
                b.autoDecode)
              ) {
                this.game.cache.updateSound(g, "isDecoding", !0);
                var f = this,
                  g = b.key;
                this.game.sound.context.decodeAudioData(b.data, function (a) {
                  a && f.game.cache.decodedSound(g, a);
                });
              }
            } else
              b.data.removeEventListener(
                "canplaythrough",
                d.GAMES[this.game.id].load.fileComplete
              ),
                this.game.cache.addSound(b.key, b.url, b.data, !1, !0);
            break;
          case "text":
            (b.data = this._xhr.responseText),
              this.game.cache.addText(b.key, b.url, b.data);
            break;
          case "script":
            (b.data = document.createElement("script")),
              (b.data.language = "javascript"),
              (b.data.type = "text/javascript"),
              (b.data.defer = !1),
              (b.data.text = this._xhr.responseText),
              document.head.appendChild(b.data);
        }
        c && this.nextFile(a, !0);
      },
      jsonLoadComplete: function (a) {
        if (!this._fileList[a])
          return (
            console.warn("Phaser.Loader jsonLoadComplete invalid index " + a),
            void 0
          );
        var b = this._fileList[a],
          c = JSON.parse(this._xhr.responseText);
        (b.loaded = !0),
          "tilemap" === b.type
            ? this.game.cache.addTilemap(b.key, b.url, c, b.format)
            : this.game.cache.addTextureAtlas(
                b.key,
                b.url,
                b.data,
                c,
                b.format
              ),
          this.nextFile(a, !0);
      },
      csvLoadComplete: function (a) {
        if (!this._fileList[a])
          return (
            console.warn("Phaser.Loader csvLoadComplete invalid index " + a),
            void 0
          );
        var b = this._fileList[a],
          c = this._xhr.responseText;
        (b.loaded = !0),
          this.game.cache.addTilemap(b.key, b.url, c, b.format),
          this.nextFile(a, !0);
      },
      dataLoadError: function (a) {
        var b = this._fileList[a];
        (b.loaded = !0),
          (b.error = !0),
          console.warn("Phaser.Loader dataLoadError: " + b.key),
          this.nextFile(a, !0);
      },
      xmlLoadComplete: function (a) {
        var b,
          c = this._xhr.responseText;
        try {
          if (window.DOMParser) {
            var d = new DOMParser();
            b = d.parseFromString(c, "text/xml");
          } else
            (b = new ActiveXObject("Microsoft.XMLDOM")),
              (b.async = "false"),
              b.loadXML(c);
        } catch (e) {
          b = void 0;
        }
        if (
          !b ||
          !b.documentElement ||
          b.getElementsByTagName("parsererror").length
        )
          throw new Error("Phaser.Loader. Invalid XML given");
        var f = this._fileList[a];
        (f.loaded = !0),
          "bitmapfont" == f.type
            ? this.game.cache.addBitmapFont(f.key, f.url, f.data, b)
            : "textureatlas" == f.type &&
              this.game.cache.addTextureAtlas(
                f.key,
                f.url,
                f.data,
                b,
                f.format
              ),
          this.nextFile(a, !0);
      },
      nextFile: function (a, b) {
        (this.progress = Math.round(this.progress + this._progressChunk)),
          this.progress > 100 && (this.progress = 100),
          null !== this.preloadSprite &&
            (0 === this.preloadSprite.direction
              ? (this.preloadSprite.crop.width = Math.floor(
                  (this.preloadSprite.width / 100) * this.progress
                ))
              : (this.preloadSprite.crop.height = Math.floor(
                  (this.preloadSprite.height / 100) * this.progress
                )),
            (this.preloadSprite.sprite.crop = this.preloadSprite.crop)),
          this.onFileComplete.dispatch(
            this.progress,
            this._fileList[a].key,
            b,
            this.totalLoadedFiles(),
            this._fileList.length
          ),
          this.totalQueuedFiles() > 0
            ? (this._fileIndex++, this.loadFile())
            : ((this.hasLoaded = !0),
              (this.isLoading = !1),
              this.removeAll(),
              this.onLoadComplete.dispatch());
      },
      totalLoadedFiles: function () {
        for (var a = 0, b = 0; b < this._fileList.length; b++)
          this._fileList[b].loaded && a++;
        return a;
      },
      totalQueuedFiles: function () {
        for (var a = 0, b = 0; b < this._fileList.length; b++)
          this._fileList[b].loaded === !1 && a++;
        return a;
      },
    }),
    (d.LoaderParser = {
      bitmapFont: function (a, b, d) {
        if (!b.getElementsByTagName("font"))
          return (
            console.warn(
              "Phaser.LoaderParser.bitmapFont: Invalid XML given, missing <font> tag"
            ),
            void 0
          );
        var e = c.TextureCache[d],
          f = {},
          g = b.getElementsByTagName("info")[0],
          h = b.getElementsByTagName("common")[0];
        (f.font = g.attributes.getNamedItem("face").nodeValue),
          (f.size = parseInt(g.attributes.getNamedItem("size").nodeValue, 10)),
          (f.lineHeight = parseInt(
            h.attributes.getNamedItem("lineHeight").nodeValue,
            10
          )),
          (f.chars = {});
        for (var i = b.getElementsByTagName("char"), j = 0; j < i.length; j++) {
          var k = parseInt(i[j].attributes.getNamedItem("id").nodeValue, 10),
            l = {
              x: parseInt(i[j].attributes.getNamedItem("x").nodeValue, 10),
              y: parseInt(i[j].attributes.getNamedItem("y").nodeValue, 10),
              width: parseInt(
                i[j].attributes.getNamedItem("width").nodeValue,
                10
              ),
              height: parseInt(
                i[j].attributes.getNamedItem("height").nodeValue,
                10
              ),
            };
          (c.TextureCache[k] = new c.Texture(e, l)),
            (f.chars[k] = {
              xOffset: parseInt(
                i[j].attributes.getNamedItem("xoffset").nodeValue,
                10
              ),
              yOffset: parseInt(
                i[j].attributes.getNamedItem("yoffset").nodeValue,
                10
              ),
              xAdvance: parseInt(
                i[j].attributes.getNamedItem("xadvance").nodeValue,
                10
              ),
              kerning: {},
              texture: new c.Texture(e, l),
            });
        }
        var m = b.getElementsByTagName("kerning");
        for (j = 0; j < m.length; j++) {
          var n = parseInt(m[j].attributes.getNamedItem("first").nodeValue, 10),
            o = parseInt(m[j].attributes.getNamedItem("second").nodeValue, 10),
            p = parseInt(m[j].attributes.getNamedItem("amount").nodeValue, 10);
          f.chars[o].kerning[n] = p;
        }
        c.BitmapText.fonts[f.font] = f;
      },
    }),
    (d.Sound = function (a, b, c, e, f) {
      "undefined" == typeof c && (c = 1),
        "undefined" == typeof e && (e = !1),
        "undefined" == typeof f && (f = a.sound.connectToMaster),
        (this.game = a),
        (this.name = b),
        (this.key = b),
        (this.loop = e),
        (this._volume = c),
        (this.markers = {}),
        (this.context = null),
        (this._buffer = null),
        (this._muted = !1),
        (this.autoplay = !1),
        (this.totalDuration = 0),
        (this.startTime = 0),
        (this.currentTime = 0),
        (this.duration = 0),
        (this.stopTime = 0),
        (this.paused = !1),
        (this.pausedPosition = 0),
        (this.pausedTime = 0),
        (this.isPlaying = !1),
        (this.currentMarker = ""),
        (this.pendingPlayback = !1),
        (this.override = !1),
        (this.usingWebAudio = this.game.sound.usingWebAudio),
        (this.usingAudioTag = this.game.sound.usingAudioTag),
        (this.externalNode = null),
        this.usingWebAudio
          ? ((this.context = this.game.sound.context),
            (this.masterGainNode = this.game.sound.masterGain),
            (this.gainNode =
              "undefined" == typeof this.context.createGain
                ? this.context.createGainNode()
                : this.context.createGain()),
            (this.gainNode.gain.value = c * this.game.sound.volume),
            f && this.gainNode.connect(this.masterGainNode))
          : this.game.cache.getSound(b) && this.game.cache.isSoundReady(b)
          ? ((this._sound = this.game.cache.getSoundData(b)),
            (this.totalDuration = 0),
            this._sound.duration && (this.totalDuration = this._sound.duration))
          : this.game.cache.onSoundUnlock.add(this.soundHasUnlocked, this),
        (this.onDecoded = new d.Signal()),
        (this.onPlay = new d.Signal()),
        (this.onPause = new d.Signal()),
        (this.onResume = new d.Signal()),
        (this.onLoop = new d.Signal()),
        (this.onStop = new d.Signal()),
        (this.onMute = new d.Signal()),
        (this.onMarkerComplete = new d.Signal());
    }),
    (d.Sound.prototype = {
      soundHasUnlocked: function (a) {
        a == this.key &&
          ((this._sound = this.game.cache.getSoundData(this.key)),
          (this.totalDuration = this._sound.duration));
      },
      addMarker: function (a, b, c, d, e) {
        (d = d || 1),
          "undefined" == typeof e && (e = !1),
          (this.markers[a] = {
            name: a,
            start: b,
            stop: b + c,
            volume: d,
            duration: c,
            durationMS: 1e3 * c,
            loop: e,
          });
      },
      removeMarker: function (a) {
        delete this.markers[a];
      },
      update: function () {
        this.pendingPlayback &&
          this.game.cache.isSoundReady(this.key) &&
          ((this.pendingPlayback = !1),
          this.play(
            this._tempMarker,
            this._tempPosition,
            this._tempVolume,
            this._tempLoop
          )),
          this.isPlaying &&
            ((this.currentTime = this.game.time.now - this.startTime),
            this.currentTime >= this.durationMS &&
              (this.usingWebAudio
                ? this.loop
                  ? (this.onLoop.dispatch(this),
                    "" === this.currentMarker
                      ? ((this.currentTime = 0),
                        (this.startTime = this.game.time.now))
                      : this.play(this.currentMarker, 0, this.volume, !0, !0))
                  : this.stop()
                : this.loop
                ? (this.onLoop.dispatch(this),
                  this.play(this.currentMarker, 0, this.volume, !0, !0))
                : this.stop()));
      },
      play: function (a, b, c, d, e) {
        if (
          ((a = a || ""),
          (b = b || 0),
          "undefined" == typeof c && (c = this._volume),
          "undefined" == typeof d && (d = !1),
          "undefined" == typeof e && (e = !0),
          this.isPlaying !== !0 || e !== !1 || this.override !== !1)
        ) {
          if (
            (this.isPlaying &&
              this.override &&
              (this.usingWebAudio
                ? "undefined" == typeof this._sound.stop
                  ? this._sound.noteOff(0)
                  : this._sound.stop(0)
                : this.usingAudioTag &&
                  (this._sound.pause(), (this._sound.currentTime = 0))),
            (this.currentMarker = a),
            "" !== a)
          ) {
            if (!this.markers[a])
              return (
                console.warn(
                  "Phaser.Sound.play: audio marker " + a + " doesn't exist"
                ),
                void 0
              );
            (this.position = this.markers[a].start),
              (this.volume = this.markers[a].volume),
              (this.loop = this.markers[a].loop),
              (this.duration = this.markers[a].duration),
              (this.durationMS = this.markers[a].durationMS),
              (this._tempMarker = a),
              (this._tempPosition = this.position),
              (this._tempVolume = this.volume),
              (this._tempLoop = this.loop);
          } else
            (this.position = b),
              (this.volume = c),
              (this.loop = d),
              (this.duration = 0),
              (this.durationMS = 0),
              (this._tempMarker = a),
              (this._tempPosition = b),
              (this._tempVolume = c),
              (this._tempLoop = d);
          this.usingWebAudio
            ? this.game.cache.isSoundDecoded(this.key)
              ? (null == this._buffer &&
                  (this._buffer = this.game.cache.getSoundData(this.key)),
                (this._sound = this.context.createBufferSource()),
                (this._sound.buffer = this._buffer),
                this.externalNode
                  ? this._sound.connect(this.externalNode.input)
                  : this._sound.connect(this.gainNode),
                (this.totalDuration = this._sound.buffer.duration),
                0 === this.duration &&
                  ((this.duration = this.totalDuration),
                  (this.durationMS = 1e3 * this.totalDuration)),
                this.loop && "" === a && (this._sound.loop = !0),
                "undefined" == typeof this._sound.start
                  ? this._sound.noteGrainOn(0, this.position, this.duration)
                  : this._sound.start(0, this.position, this.duration),
                (this.isPlaying = !0),
                (this.startTime = this.game.time.now),
                (this.currentTime = 0),
                (this.stopTime = this.startTime + this.durationMS),
                this.onPlay.dispatch(this))
              : ((this.pendingPlayback = !0),
                this.game.cache.getSound(this.key) &&
                  this.game.cache.getSound(this.key).isDecoding === !1 &&
                  this.game.sound.decode(this.key, this))
            : this.game.cache.getSound(this.key) &&
              this.game.cache.getSound(this.key).locked
            ? (this.game.cache.reloadSound(this.key),
              (this.pendingPlayback = !0))
            : this._sound && 4 == this._sound.readyState
            ? (this._sound.play(),
              (this.totalDuration = this._sound.duration),
              0 === this.duration &&
                ((this.duration = this.totalDuration),
                (this.durationMS = 1e3 * this.totalDuration)),
              (this._sound.currentTime = this.position),
              (this._sound.muted = this._muted),
              (this._sound.volume = this._muted ? 0 : this._volume),
              (this.isPlaying = !0),
              (this.startTime = this.game.time.now),
              (this.currentTime = 0),
              (this.stopTime = this.startTime + this.durationMS),
              this.onPlay.dispatch(this))
            : (this.pendingPlayback = !0);
        }
      },
      restart: function (a, b, c, d) {
        (a = a || ""),
          (b = b || 0),
          (c = c || 1),
          "undefined" == typeof d && (d = !1),
          this.play(a, b, c, d, !0);
      },
      pause: function () {
        this.isPlaying &&
          this._sound &&
          (this.stop(),
          (this.isPlaying = !1),
          (this.paused = !0),
          (this.pausedPosition = this.currentTime),
          (this.pausedTime = this.game.time.now),
          this.onPause.dispatch(this));
      },
      resume: function () {
        if (this.paused && this._sound) {
          if (this.usingWebAudio) {
            var a = this.position + this.pausedPosition / 1e3;
            (this._sound = this.context.createBufferSource()),
              (this._sound.buffer = this._buffer),
              this._sound.connect(this.gainNode),
              "undefined" == typeof this._sound.start
                ? this._sound.noteGrainOn(0, a, this.duration)
                : this._sound.start(0, a, this.duration);
          } else this._sound.play();
          (this.isPlaying = !0),
            (this.paused = !1),
            (this.startTime += this.game.time.now - this.pausedTime),
            this.onResume.dispatch(this);
        }
      },
      stop: function () {
        this.isPlaying &&
          this._sound &&
          (this.usingWebAudio
            ? "undefined" == typeof this._sound.stop
              ? this._sound.noteOff(0)
              : this._sound.stop(0)
            : this.usingAudioTag &&
              (this._sound.pause(), (this._sound.currentTime = 0))),
          (this.isPlaying = !1);
        var a = this.currentMarker;
        (this.currentMarker = ""), this.onStop.dispatch(this, a);
      },
    }),
    Object.defineProperty(d.Sound.prototype, "isDecoding", {
      get: function () {
        return this.game.cache.getSound(this.key).isDecoding;
      },
    }),
    Object.defineProperty(d.Sound.prototype, "isDecoded", {
      get: function () {
        return this.game.cache.isSoundDecoded(this.key);
      },
    }),
    Object.defineProperty(d.Sound.prototype, "mute", {
      get: function () {
        return this._muted;
      },
      set: function (a) {
        (a = a || null),
          a
            ? ((this._muted = !0),
              this.usingWebAudio
                ? ((this._muteVolume = this.gainNode.gain.value),
                  (this.gainNode.gain.value = 0))
                : this.usingAudioTag &&
                  this._sound &&
                  ((this._muteVolume = this._sound.volume),
                  (this._sound.volume = 0)))
            : ((this._muted = !1),
              this.usingWebAudio
                ? (this.gainNode.gain.value = this._muteVolume)
                : this.usingAudioTag &&
                  this._sound &&
                  (this._sound.volume = this._muteVolume)),
          this.onMute.dispatch(this);
      },
    }),
    Object.defineProperty(d.Sound.prototype, "volume", {
      get: function () {
        return this._volume;
      },
      set: function (a) {
        this.usingWebAudio
          ? ((this._volume = a), (this.gainNode.gain.value = a))
          : this.usingAudioTag &&
            this._sound &&
            a >= 0 &&
            1 >= a &&
            ((this._volume = a), (this._sound.volume = a));
      },
    }),
    (d.SoundManager = function (a) {
      (this.game = a),
        (this.onSoundDecode = new d.Signal()),
        (this._muted = !1),
        (this._unlockSource = null),
        (this._volume = 1),
        (this._sounds = []),
        (this.context = null),
        (this.usingWebAudio = !0),
        (this.usingAudioTag = !1),
        (this.noAudio = !1),
        (this.connectToMaster = !0),
        (this.touchLocked = !1),
        (this.channels = 32);
    }),
    (d.SoundManager.prototype = {
      boot: function () {
        if (
          (this.game.device.iOS &&
            this.game.device.webAudio === !1 &&
            (this.channels = 1),
          this.game.device.iOS ||
          (window.PhaserGlobal && window.PhaserGlobal.fakeiOSTouchLock)
            ? ((this.game.input.touch.callbackContext = this),
              (this.game.input.touch.touchStartCallback = this.unlock),
              (this.game.input.mouse.callbackContext = this),
              (this.game.input.mouse.mouseDownCallback = this.unlock),
              (this.touchLocked = !0))
            : (this.touchLocked = !1),
          window.PhaserGlobal)
        ) {
          if (window.PhaserGlobal.disableAudio === !0)
            return (this.usingWebAudio = !1), (this.noAudio = !0), void 0;
          if (window.PhaserGlobal.disableWebAudio === !0)
            return (
              (this.usingWebAudio = !1),
              (this.usingAudioTag = !0),
              (this.noAudio = !1),
              void 0
            );
        }
        window.AudioContext
          ? (this.context = new window.AudioContext())
          : window.webkitAudioContext
          ? (this.context = new window.webkitAudioContext())
          : window.Audio
          ? ((this.usingWebAudio = !1), (this.usingAudioTag = !0))
          : ((this.usingWebAudio = !1), (this.noAudio = !0)),
          null !== this.context &&
            ((this.masterGain =
              "undefined" == typeof this.context.createGain
                ? this.context.createGainNode()
                : this.context.createGain()),
            (this.masterGain.gain.value = 1),
            this.masterGain.connect(this.context.destination));
      },
      unlock: function () {
        if (this.touchLocked !== !1)
          if (
            this.game.device.webAudio === !1 ||
            (window.PhaserGlobal && window.PhaserGlobal.disableWebAudio === !0)
          )
            (this.touchLocked = !1),
              (this._unlockSource = null),
              (this.game.input.touch.callbackContext = null),
              (this.game.input.touch.touchStartCallback = null),
              (this.game.input.mouse.callbackContext = null),
              (this.game.input.mouse.mouseDownCallback = null);
          else {
            var a = this.context.createBuffer(1, 1, 22050);
            (this._unlockSource = this.context.createBufferSource()),
              (this._unlockSource.buffer = a),
              this._unlockSource.connect(this.context.destination),
              this._unlockSource.noteOn(0);
          }
      },
      stopAll: function () {
        for (var a = 0; a < this._sounds.length; a++)
          this._sounds[a] && this._sounds[a].stop();
      },
      pauseAll: function () {
        for (var a = 0; a < this._sounds.length; a++)
          this._sounds[a] && this._sounds[a].pause();
      },
      resumeAll: function () {
        for (var a = 0; a < this._sounds.length; a++)
          this._sounds[a] && this._sounds[a].resume();
      },
      decode: function (a, b) {
        b = b || null;
        var c = this.game.cache.getSoundData(a);
        if (c && this.game.cache.isSoundDecoded(a) === !1) {
          this.game.cache.updateSound(a, "isDecoding", !0);
          var d = this;
          this.context.decodeAudioData(c, function (c) {
            d.game.cache.decodedSound(a, c), b && d.onSoundDecode.dispatch(b);
          });
        }
      },
      update: function () {
        this.touchLocked &&
          this.game.device.webAudio &&
          null !== this._unlockSource &&
          (this._unlockSource.playbackState ===
            this._unlockSource.PLAYING_STATE ||
            this._unlockSource.playbackState ===
              this._unlockSource.FINISHED_STATE) &&
          ((this.touchLocked = !1),
          (this._unlockSource = null),
          (this.game.input.touch.callbackContext = null),
          (this.game.input.touch.touchStartCallback = null));
        for (var a = 0; a < this._sounds.length; a++) this._sounds[a].update();
      },
      add: function (a, b, c, e) {
        "undefined" == typeof b && (b = 1),
          "undefined" == typeof c && (c = !1),
          "undefined" == typeof e && (e = this.connectToMaster);
        var f = new d.Sound(this.game, a, b, c, e);
        return this._sounds.push(f), f;
      },
      play: function (a, b, c, d) {
        "undefined" == typeof d && (d = !1);
        var e = this.add(a, b, c);
        return e.play(), e;
      },
    }),
    Object.defineProperty(d.SoundManager.prototype, "mute", {
      get: function () {
        return this._muted;
      },
      set: function (a) {
        if ((a = a || null)) {
          if (this._muted) return;
          (this._muted = !0),
            this.usingWebAudio &&
              ((this._muteVolume = this.masterGain.gain.value),
              (this.masterGain.gain.value = 0));
          for (var b = 0; b < this._sounds.length; b++)
            this._sounds[b].usingAudioTag && (this._sounds[b].mute = !0);
        } else {
          if (this._muted === !1) return;
          (this._muted = !1),
            this.usingWebAudio &&
              (this.masterGain.gain.value = this._muteVolume);
          for (var b = 0; b < this._sounds.length; b++)
            this._sounds[b].usingAudioTag && (this._sounds[b].mute = !1);
        }
      },
    }),
    Object.defineProperty(d.SoundManager.prototype, "volume", {
      get: function () {
        return this.usingWebAudio ? this.masterGain.gain.value : this._volume;
      },
      set: function (a) {
        (a = this.game.math.clamp(a, 1, 0)),
          (this._volume = a),
          this.usingWebAudio && (this.masterGain.gain.value = a);
        for (var b = 0; b < this._sounds.length; b++)
          this._sounds[b].usingAudioTag &&
            (this._sounds[b].volume = this._sounds[b].volume * a);
      },
    }),
    (d.Utils.Debug = function (a) {
      (this.game = a),
        (this.context = a.context),
        (this.font = "14px Courier"),
        (this.lineHeight = 16),
        (this.renderShadow = !0),
        (this.currentX = 0),
        (this.currentY = 0),
        (this.currentAlpha = 1);
    }),
    (d.Utils.Debug.prototype = {
      start: function (a, b, c) {
        null != this.context &&
          ("number" != typeof a && (a = 0),
          "number" != typeof b && (b = 0),
          (c = c || "rgb(255,255,255)"),
          (this.currentX = a),
          (this.currentY = b),
          (this.currentColor = c),
          (this.currentAlpha = this.context.globalAlpha),
          this.context.save(),
          this.context.setTransform(1, 0, 0, 1, 0, 0),
          (this.context.fillStyle = c),
          (this.context.font = this.font),
          (this.context.globalAlpha = 1));
      },
      stop: function () {
        this.context.restore(), (this.context.globalAlpha = this.currentAlpha);
      },
      line: function (a, b, c) {
        null != this.context &&
          ((b = b || null),
          (c = c || null),
          null !== b && (this.currentX = b),
          null !== c && (this.currentY = c),
          this.renderShadow &&
            ((this.context.fillStyle = "rgb(0,0,0)"),
            this.context.fillText(a, this.currentX + 1, this.currentY + 1),
            (this.context.fillStyle = this.currentColor)),
          this.context.fillText(a, this.currentX, this.currentY),
          (this.currentY += this.lineHeight));
      },
      renderQuadTree: function (a, b) {
        (b = b || "rgba(255,0,0,0.3)"), this.start();
        var c = a.bounds;
        if (0 === a.nodes.length) {
          (this.context.strokeStyle = b),
            this.context.strokeRect(c.x, c.y, c.width, c.height),
            this.renderText(
              a.ID + " / " + a.objects.length,
              c.x + 4,
              c.y + 16,
              "rgb(0,200,0)",
              "12px Courier"
            ),
            (this.context.strokeStyle = "rgb(0,255,0)");
          for (var d = 0; d < a.objects.length; d++)
            this.context.strokeRect(
              a.objects[d].x,
              a.objects[d].y,
              a.objects[d].width,
              a.objects[d].height
            );
        } else
          for (var d = 0; d < a.nodes.length; d++)
            this.renderQuadTree(a.nodes[d]);
        this.stop();
      },
      renderSpriteCorners: function (a, b, c, d) {
        null != this.context &&
          ((b = b || !1),
          (c = c || !1),
          (d = d || "rgb(255,255,255)"),
          this.start(0, 0, d),
          c &&
            (this.context.beginPath(),
            (this.context.strokeStyle = "rgba(0, 255, 0, 0.7)"),
            this.context.strokeRect(
              a.bounds.x,
              a.bounds.y,
              a.bounds.width,
              a.bounds.height
            ),
            this.context.closePath(),
            this.context.stroke()),
          this.context.beginPath(),
          this.context.moveTo(a.topLeft.x, a.topLeft.y),
          this.context.lineTo(a.topRight.x, a.topRight.y),
          this.context.lineTo(a.bottomRight.x, a.bottomRight.y),
          this.context.lineTo(a.bottomLeft.x, a.bottomLeft.y),
          this.context.closePath(),
          (this.context.strokeStyle = "rgba(255, 0, 255, 0.7)"),
          this.context.stroke(),
          this.renderPoint(a.offset),
          this.renderPoint(a.center),
          this.renderPoint(a.topLeft),
          this.renderPoint(a.topRight),
          this.renderPoint(a.bottomLeft),
          this.renderPoint(a.bottomRight),
          b &&
            ((this.currentColor = d),
            this.line(
              "x: " +
                Math.floor(a.topLeft.x) +
                " y: " +
                Math.floor(a.topLeft.y),
              a.topLeft.x,
              a.topLeft.y
            ),
            this.line(
              "x: " +
                Math.floor(a.topRight.x) +
                " y: " +
                Math.floor(a.topRight.y),
              a.topRight.x,
              a.topRight.y
            ),
            this.line(
              "x: " +
                Math.floor(a.bottomLeft.x) +
                " y: " +
                Math.floor(a.bottomLeft.y),
              a.bottomLeft.x,
              a.bottomLeft.y
            ),
            this.line(
              "x: " +
                Math.floor(a.bottomRight.x) +
                " y: " +
                Math.floor(a.bottomRight.y),
              a.bottomRight.x,
              a.bottomRight.y
            )),
          this.stop());
      },
      renderSoundInfo: function (a, b, c, d) {
        null != this.context &&
          ((d = d || "rgb(255,255,255)"),
          this.start(b, c, d),
          this.line("Sound: " + a.key + " Locked: " + a.game.sound.touchLocked),
          this.line(
            "Is Ready?: " +
              this.game.cache.isSoundReady(a.key) +
              " Pending Playback: " +
              a.pendingPlayback
          ),
          this.line("Decoded: " + a.isDecoded + " Decoding: " + a.isDecoding),
          this.line(
            "Total Duration: " + a.totalDuration + " Playing: " + a.isPlaying
          ),
          this.line("Time: " + a.currentTime),
          this.line("Volume: " + a.volume + " Muted: " + a.mute),
          this.line(
            "WebAudio: " + a.usingWebAudio + " Audio: " + a.usingAudioTag
          ),
          "" !== a.currentMarker &&
            (this.line(
              "Marker: " + a.currentMarker + " Duration: " + a.duration
            ),
            this.line(
              "Start: " +
                a.markers[a.currentMarker].start +
                " Stop: " +
                a.markers[a.currentMarker].stop
            ),
            this.line("Position: " + a.position)),
          this.stop());
      },
      renderCameraInfo: function (a, b, c, d) {
        null != this.context &&
          ((d = d || "rgb(255,255,255)"),
          this.start(b, c, d),
          this.line("Camera (" + a.width + " x " + a.height + ")"),
          this.line("X: " + a.x + " Y: " + a.y),
          this.line(
            "Bounds x: " +
              a.bounds.x +
              " Y: " +
              a.bounds.y +
              " w: " +
              a.bounds.width +
              " h: " +
              a.bounds.height
          ),
          this.line(
            "View x: " +
              a.view.x +
              " Y: " +
              a.view.y +
              " w: " +
              a.view.width +
              " h: " +
              a.view.height
          ),
          this.stop());
      },
      renderPointer: function (a, b, c, d, e) {
        null != this.context &&
          null != a &&
          ("undefined" == typeof b && (b = !1),
          (c = c || "rgba(0,255,0,0.5)"),
          (d = d || "rgba(255,0,0,0.5)"),
          (e = e || "rgb(255,255,255)"),
          (b !== !0 || a.isUp !== !0) &&
            (this.start(a.x, a.y - 100, e),
            this.context.beginPath(),
            this.context.arc(a.x, a.y, a.circle.radius, 0, 2 * Math.PI),
            (this.context.fillStyle = a.active ? c : d),
            this.context.fill(),
            this.context.closePath(),
            this.context.beginPath(),
            this.context.moveTo(a.positionDown.x, a.positionDown.y),
            this.context.lineTo(a.position.x, a.position.y),
            (this.context.lineWidth = 2),
            this.context.stroke(),
            this.context.closePath(),
            this.line("ID: " + a.id + " Active: " + a.active),
            this.line("World X: " + a.worldX + " World Y: " + a.worldY),
            this.line("Screen X: " + a.x + " Screen Y: " + a.y),
            this.line("Duration: " + a.duration + " ms"),
            this.stop()));
      },
      renderSpriteInputInfo: function (a, b, c, d) {
        (d = d || "rgb(255,255,255)"),
          this.start(b, c, d),
          this.line("Sprite Input: (" + a.width + " x " + a.height + ")"),
          this.line(
            "x: " +
              a.input.pointerX().toFixed(1) +
              " y: " +
              a.input.pointerY().toFixed(1)
          ),
          this.line(
            "over: " +
              a.input.pointerOver() +
              " duration: " +
              a.input.overDuration().toFixed(0)
          ),
          this.line(
            "down: " +
              a.input.pointerDown() +
              " duration: " +
              a.input.downDuration().toFixed(0)
          ),
          this.line(
            "just over: " +
              a.input.justOver() +
              " just out: " +
              a.input.justOut()
          ),
          this.stop();
      },
      renderSpriteCollision: function (a, b, c, d) {
        (d = d || "rgb(255,255,255)"),
          this.start(b, c, d),
          this.line("Sprite Collision: (" + a.width + " x " + a.height + ")"),
          this.line("left: " + a.body.touching.left),
          this.line("right: " + a.body.touching.right),
          this.line("up: " + a.body.touching.up),
          this.line("down: " + a.body.touching.down),
          this.line("velocity.x: " + a.body.velocity.x),
          this.line("velocity.y: " + a.body.velocity.y),
          this.stop();
      },
      renderInputInfo: function (a, b, c) {
        null != this.context &&
          ((c = c || "rgb(255,255,0)"),
          this.start(a, b, c),
          this.line("Input"),
          this.line("X: " + this.game.input.x + " Y: " + this.game.input.y),
          this.line(
            "World X: " +
              this.game.input.worldX +
              " World Y: " +
              this.game.input.worldY
          ),
          this.line(
            "Scale X: " +
              this.game.input.scale.x.toFixed(1) +
              " Scale Y: " +
              this.game.input.scale.x.toFixed(1)
          ),
          this.line(
            "Screen X: " +
              this.game.input.activePointer.screenX +
              " Screen Y: " +
              this.game.input.activePointer.screenY
          ),
          this.stop());
      },
      renderSpriteInfo: function (a, b, c, d) {
        null != this.context &&
          ((d = d || "rgb(255, 255, 255)"),
          this.start(b, c, d),
          this.line(
            "Sprite:  (" +
              a.width +
              " x " +
              a.height +
              ") anchor: " +
              a.anchor.x +
              " x " +
              a.anchor.y
          ),
          this.line("x: " + a.x.toFixed(1) + " y: " + a.y.toFixed(1)),
          this.line(
            "angle: " +
              a.angle.toFixed(1) +
              " rotation: " +
              a.rotation.toFixed(1)
          ),
          this.line("visible: " + a.visible + " in camera: " + a.inCamera),
          this.line(
            "body x: " + a.body.x.toFixed(1) + " y: " + a.body.y.toFixed(1)
          ),
          this.line("deltaX: " + a.body.deltaX()),
          this.line("deltaY: " + a.body.deltaY()),
          this.stop());
      },
      renderWorldTransformInfo: function (a, b, c, d) {
        null != this.context &&
          ((d = d || "rgb(255, 255, 255)"),
          this.start(b, c, d),
          this.line("World Transform"),
          this.line("skewX:  " + a.worldTransform[3]),
          this.line("skewY:  " + a.worldTransform[1]),
          this.line("scaleX: " + a.worldTransform[0]),
          this.line("scaleY: " + a.worldTransform[4]),
          this.line("transX: " + a.worldTransform[2]),
          this.line("transY: " + a.worldTransform[5]),
          this.stop());
      },
      renderLocalTransformInfo: function (a, b, c, d) {
        null != this.context &&
          ((d = d || "rgb(255, 255, 255)"),
          this.start(b, c, d),
          this.line("Local Transform"),
          this.line("skewX:  " + a.localTransform[3]),
          this.line("skewY:  " + a.localTransform[1]),
          this.line("scaleX: " + a.localTransform[0]),
          this.line("scaleY: " + a.localTransform[4]),
          this.line("transX: " + a.localTransform[2]),
          this.line("transY: " + a.localTransform[5]),
          this.stop());
      },
      renderSpriteCoords: function (a, b, c, d) {
        null != this.context &&
          ((d = d || "rgb(255, 255, 255)"),
          this.start(b, c, d),
          a.name && this.line(a.name),
          this.line("x: " + a.x),
          this.line("y: " + a.y),
          this.line("pos x: " + a.position.x),
          this.line("pos y: " + a.position.y),
          this.line("local x: " + a.localTransform[2]),
          this.line("local y: " + a.localTransform[5]),
          this.line("t x: " + a.worldTransform[2]),
          this.line("t y: " + a.worldTransform[5]),
          this.line("world x: " + a.world.x),
          this.line("world y: " + a.world.y),
          this.stop());
      },
      renderGroupInfo: function (a, b, c, d) {
        null != this.context &&
          ((d = d || "rgb(255, 255, 255)"),
          this.start(b, c, d),
          this.line("Group (size: " + a.length + ")"),
          this.line("x: " + a.x),
          this.line("y: " + a.y),
          this.stop());
      },
      renderPointInfo: function (a, b, c, d) {
        null != this.context &&
          ((d = d || "rgb(255, 255, 255)"),
          this.start(b, c, d),
          this.line("px: " + a.x.toFixed(1) + " py: " + a.y.toFixed(1)),
          this.stop());
      },
      renderSpriteBody: function (a, b) {
        null != this.context &&
          ((b = b || "rgba(255,0,255, 0.3)"),
          this.start(0, 0, b),
          (this.context.fillStyle = b),
          this.context.fillRect(
            a.body.screenX,
            a.body.screenY,
            a.body.width,
            a.body.height
          ),
          this.stop());
      },
      renderSpriteBounds: function (a, b, c) {
        null != this.context &&
          ((b = b || "rgb(255,0,255)"),
          "undefined" == typeof c && (c = !1),
          this.start(0, 0, b),
          c
            ? ((this.context.fillStyle = b),
              this.context.fillRect(
                a.bounds.x,
                a.bounds.y,
                a.bounds.width,
                a.bounds.height
              ))
            : ((this.context.strokeStyle = b),
              this.context.strokeRect(
                a.bounds.x,
                a.bounds.y,
                a.bounds.width,
                a.bounds.height
              ),
              this.context.stroke()),
          this.stop());
      },
      renderPixel: function (a, b, c) {
        null != this.context &&
          ((c = c || "rgba(0,255,0,1)"),
          this.start(),
          (this.context.fillStyle = c),
          this.context.fillRect(a, b, 2, 2),
          this.stop());
      },
      renderPoint: function (a, b) {
        null != this.context &&
          ((b = b || "rgba(0,255,0,1)"),
          this.start(),
          (this.context.fillStyle = b),
          this.context.fillRect(a.x, a.y, 4, 4),
          this.stop());
      },
      renderRectangle: function (a, b) {
        null != this.context &&
          ((b = b || "rgba(0,255,0,0.3)"),
          this.start(),
          (this.context.fillStyle = b),
          this.context.fillRect(a.x, a.y, a.width, a.height),
          this.stop());
      },
      renderCircle: function (a, b) {
        null != this.context &&
          ((b = b || "rgba(0,255,0,0.3)"),
          this.start(),
          this.context.beginPath(),
          (this.context.fillStyle = b),
          this.context.arc(a.x, a.y, a.radius, 0, 2 * Math.PI, !1),
          this.context.fill(),
          this.context.closePath(),
          this.stop());
      },
      renderText: function (a, b, c, d, e) {
        null != this.context &&
          ((d = d || "rgb(255,255,255)"),
          (e = e || "16px Courier"),
          this.start(),
          (this.context.font = e),
          (this.context.fillStyle = d),
          this.context.fillText(a, b, c),
          this.stop());
      },
      dumpLinkedList: function (a) {
        var b = 20,
          c =
            "\n" +
            d.Utils.pad("Node", b) +
            "|" +
            d.Utils.pad("Next", b) +
            "|" +
            d.Utils.pad("Previous", b) +
            "|" +
            d.Utils.pad("First", b) +
            "|" +
            d.Utils.pad("Last", b);
        console.log(c);
        var c =
          d.Utils.pad("----------", b) +
          "|" +
          d.Utils.pad("----------", b) +
          "|" +
          d.Utils.pad("----------", b) +
          "|" +
          d.Utils.pad("----------", b) +
          "|" +
          d.Utils.pad("----------", b);
        console.log(c);
        var e = a,
          f = e.last.next;
        e = e.first;
        do {
          var g = e.sprite.name || "*",
            h = "-",
            i = "-",
            j = "-",
            k = "-";
          e.next && (h = e.next.sprite.name),
            e.prev && (i = e.prev.sprite.name),
            e.first && (j = e.first.sprite.name),
            e.last && (k = e.last.sprite.name),
            "undefined" == typeof h && (h = "-"),
            "undefined" == typeof i && (i = "-"),
            "undefined" == typeof j && (j = "-"),
            "undefined" == typeof k && (k = "-");
          var c =
            d.Utils.pad(g, b) +
            "|" +
            d.Utils.pad(h, b) +
            "|" +
            d.Utils.pad(i, b) +
            "|" +
            d.Utils.pad(j, b) +
            "|" +
            d.Utils.pad(k, b);
          console.log(c), (e = e.next);
        } while (e != f);
      },
    }),
    (d.Color = {
      getColor32: function (a, b, c, d) {
        return (a << 24) | (b << 16) | (c << 8) | d;
      },
      getColor: function (a, b, c) {
        return (a << 16) | (b << 8) | c;
      },
      hexToRGB: function (a) {
        var b = "#" == a.charAt(0) ? a.substring(1, 7) : a;
        3 == b.length &&
          (b =
            b.charAt(0) +
            b.charAt(0) +
            b.charAt(1) +
            b.charAt(1) +
            b.charAt(2) +
            b.charAt(2));
        var c = parseInt(b.substring(0, 2), 16),
          d = parseInt(b.substring(2, 4), 16),
          e = parseInt(b.substring(4, 6), 16);
        return (c << 16) | (d << 8) | e;
      },
      getColorInfo: function (a) {
        var b = d.Color.getRGB(a),
          c = d.Color.RGBtoHSV(a),
          e = d.Color.RGBtoHexstring(a) + "\n";
        return (
          (e =
            e.concat(
              "Alpha: " +
                b.alpha +
                " Red: " +
                b.red +
                " Green: " +
                b.green +
                " Blue: " +
                b.blue
            ) + "\n"),
          (e = e.concat(
            "Hue: " +
              c.hue +
              " Saturation: " +
              c.saturation +
              " Lightnes: " +
              c.lightness
          ))
        );
      },
      RGBtoHexstring: function (a) {
        var b = d.Color.getRGB(a);
        return (
          "0x" +
          d.Color.colorToHexstring(b.alpha) +
          d.Color.colorToHexstring(b.red) +
          d.Color.colorToHexstring(b.green) +
          d.Color.colorToHexstring(b.blue)
        );
      },
      RGBtoWebstring: function (a) {
        var b = d.Color.getRGB(a);
        return (
          "#" +
          d.Color.colorToHexstring(b.red) +
          d.Color.colorToHexstring(b.green) +
          d.Color.colorToHexstring(b.blue)
        );
      },
      colorToHexstring: function (a) {
        var b = "0123456789ABCDEF",
          c = a % 16,
          d = (a - c) / 16,
          e = b.charAt(d) + b.charAt(c);
        return e;
      },
      interpolateColor: function (a, b, c, e, f) {
        "undefined" == typeof f && (f = 255);
        var g = d.Color.getRGB(a),
          h = d.Color.getRGB(b),
          i = ((h.red - g.red) * e) / c + g.red,
          j = ((h.green - g.green) * e) / c + g.green,
          k = ((h.blue - g.blue) * e) / c + g.blue;
        return d.Color.getColor32(f, i, j, k);
      },
      interpolateColorWithRGB: function (a, b, c, e, f, g) {
        var h = d.Color.getRGB(a),
          i = ((b - h.red) * g) / f + h.red,
          j = ((c - h.green) * g) / f + h.green,
          k = ((e - h.blue) * g) / f + h.blue;
        return d.Color.getColor(i, j, k);
      },
      interpolateRGB: function (a, b, c, e, f, g, h, i) {
        var j = ((e - a) * i) / h + a,
          k = ((f - b) * i) / h + b,
          l = ((g - c) * i) / h + c;
        return d.Color.getColor(j, k, l);
      },
      getRandomColor: function (a, b, c) {
        if (
          ("undefined" == typeof a && (a = 0),
          "undefined" == typeof b && (b = 255),
          "undefined" == typeof c && (c = 255),
          b > 255)
        )
          return d.Color.getColor(255, 255, 255);
        if (a > b) return d.Color.getColor(255, 255, 255);
        var e = a + Math.round(Math.random() * (b - a)),
          f = a + Math.round(Math.random() * (b - a)),
          g = a + Math.round(Math.random() * (b - a));
        return d.Color.getColor32(c, e, f, g);
      },
      getRGB: function (a) {
        return {
          alpha: a >>> 24,
          red: 255 & (a >> 16),
          green: 255 & (a >> 8),
          blue: 255 & a,
        };
      },
      getWebRGB: function (a) {
        var b = (a >>> 24) / 255,
          c = 255 & (a >> 16),
          d = 255 & (a >> 8),
          e = 255 & a;
        return (
          "rgba(" +
          c.toString() +
          "," +
          d.toString() +
          "," +
          e.toString() +
          "," +
          b.toString() +
          ")"
        );
      },
      getAlpha: function (a) {
        return a >>> 24;
      },
      getAlphaFloat: function (a) {
        return (a >>> 24) / 255;
      },
      getRed: function (a) {
        return 255 & (a >> 16);
      },
      getGreen: function (a) {
        return 255 & (a >> 8);
      },
      getBlue: function (a) {
        return 255 & a;
      },
    }),
    (d.Physics = {}),
    (d.Physics.Arcade = function (a) {
      (this.game = a),
        (this.gravity = new d.Point()),
        (this.bounds = new d.Rectangle(0, 0, a.world.width, a.world.height)),
        (this.maxObjects = 10),
        (this.maxLevels = 4),
        (this.OVERLAP_BIAS = 4),
        (this.quadTree = new d.QuadTree(
          this,
          this.game.world.bounds.x,
          this.game.world.bounds.y,
          this.game.world.bounds.width,
          this.game.world.bounds.height,
          this.maxObjects,
          this.maxLevels
        )),
        (this.quadTreeID = 0),
        (this._bounds1 = new d.Rectangle()),
        (this._bounds2 = new d.Rectangle()),
        (this._overlap = 0),
        (this._maxOverlap = 0),
        (this._velocity1 = 0),
        (this._velocity2 = 0),
        (this._newVelocity1 = 0),
        (this._newVelocity2 = 0),
        (this._average = 0),
        (this._mapData = []),
        (this._mapTiles = 0),
        (this._result = !1),
        (this._total = 0),
        (this._angle = 0),
        (this._dx = 0),
        (this._dy = 0);
    }),
    (d.Physics.Arcade.prototype = {
      updateMotion: function (a) {
        (this._velocityDelta =
          60 *
          0.5 *
          (this.computeVelocity(
            0,
            a,
            a.angularVelocity,
            a.angularAcceleration,
            a.angularDrag,
            a.maxAngular
          ) -
            a.angularVelocity) *
          this.game.time.physicsElapsed),
          (a.angularVelocity += this._velocityDelta),
          (a.rotation += a.angularVelocity * this.game.time.physicsElapsed),
          (a.angularVelocity += this._velocityDelta),
          (this._velocityDelta =
            60 *
            0.5 *
            (this.computeVelocity(
              1,
              a,
              a.velocity.x,
              a.acceleration.x,
              a.drag.x,
              a.maxVelocity.x
            ) -
              a.velocity.x) *
            this.game.time.physicsElapsed),
          (a.velocity.x += this._velocityDelta),
          (a.x += a.velocity.x * this.game.time.physicsElapsed),
          (a.velocity.x += this._velocityDelta),
          (this._velocityDelta =
            60 *
            0.5 *
            (this.computeVelocity(
              2,
              a,
              a.velocity.y,
              a.acceleration.y,
              a.drag.y,
              a.maxVelocity.y
            ) -
              a.velocity.y) *
            this.game.time.physicsElapsed),
          (a.velocity.y += this._velocityDelta),
          (a.y += a.velocity.y * this.game.time.physicsElapsed),
          (a.velocity.y += this._velocityDelta);
      },
      computeVelocity: function (a, b, c, d, e, f) {
        return (
          (f = f || 1e4),
          1 == a && b.allowGravity
            ? (c += this.gravity.x + b.gravity.x)
            : 2 == a && b.allowGravity && (c += this.gravity.y + b.gravity.y),
          0 !== d
            ? (c += d * this.game.time.physicsElapsed)
            : 0 !== e &&
              ((this._drag = e * this.game.time.physicsElapsed),
              c - this._drag > 0
                ? (c -= this._drag)
                : c + this._drag < 0
                ? (c += this._drag)
                : (c = 0)),
          c > f ? (c = f) : -f > c && (c = -f),
          c
        );
      },
      preUpdate: function () {
        this.quadTree.clear(),
          (this.quadTreeID = 0),
          (this.quadTree = new d.QuadTree(
            this,
            this.game.world.bounds.x,
            this.game.world.bounds.y,
            this.game.world.bounds.width,
            this.game.world.bounds.height,
            this.maxObjects,
            this.maxLevels
          ));
      },
      postUpdate: function () {
        this.quadTree.clear();
      },
      overlap: function (a, b, c, e, f) {
        return (
          (c = c || null),
          (e = e || null),
          (f = f || c),
          (this._result = !1),
          (this._total = 0),
          a &&
            b &&
            a.exists &&
            b.exists &&
            (a.type == d.SPRITE
              ? b.type == d.SPRITE
                ? this.overlapSpriteVsSprite(a, b, c, e, f)
                : (b.type == d.GROUP || b.type == d.EMITTER) &&
                  this.overlapSpriteVsGroup(a, b, c, e, f)
              : a.type == d.GROUP
              ? b.type == d.SPRITE
                ? this.overlapSpriteVsGroup(b, a, c, e, f)
                : (b.type == d.GROUP || b.type == d.EMITTER) &&
                  this.overlapGroupVsGroup(a, b, c, e, f)
              : a.type == d.EMITTER &&
                (b.type == d.SPRITE
                  ? this.overlapSpriteVsGroup(b, a, c, e, f)
                  : (b.type == d.GROUP || b.type == d.EMITTER) &&
                    this.overlapGroupVsGroup(a, b, c, e, f))),
          this._total > 0
        );
      },
      overlapSpriteVsSprite: function (a, b, c, e, f) {
        (this._result = d.Rectangle.intersects(a.body, b.body)),
          this._result &&
            (e
              ? e.call(f, a, b) && (this._total++, c && c.call(f, a, b))
              : (this._total++, c && c.call(f, a, b)));
      },
      overlapSpriteVsGroup: function (a, b, c, e, f) {
        if (0 !== b.length) {
          this._potentials = this.quadTree.retrieve(a);
          for (var g = 0, h = this._potentials.length; h > g; g++)
            this._potentials[g].sprite.group == b &&
              ((this._result = d.Rectangle.intersects(
                a.body,
                this._potentials[g]
              )),
              this._result &&
                e &&
                (this._result = e.call(f, a, this._potentials[g].sprite)),
              this._result &&
                (this._total++, c && c.call(f, a, this._potentials[g].sprite)));
        }
      },
      overlapGroupVsGroup: function (a, b, c, d, e) {
        if (0 !== a.length && 0 !== b.length && a._container.first._iNext) {
          var f = a._container.first._iNext;
          do
            f.exists && this.overlapSpriteVsGroup(f, b, c, d, e),
              (f = f._iNext);
          while (f != a._container.last._iNext);
        }
      },
      collide: function (a, b, c, e, f) {
        return (
          (c = c || null),
          (e = e || null),
          (f = f || c),
          (this._result = !1),
          (this._total = 0),
          a &&
            b &&
            a.exists &&
            b.exists &&
            (a.type == d.SPRITE
              ? b.type == d.SPRITE
                ? this.collideSpriteVsSprite(a, b, c, e, f)
                : b.type == d.GROUP || b.type == d.EMITTER
                ? this.collideSpriteVsGroup(a, b, c, e, f)
                : b.type == d.TILEMAPLAYER &&
                  this.collideSpriteVsTilemapLayer(a, b, c, e, f)
              : a.type == d.GROUP
              ? b.type == d.SPRITE
                ? this.collideSpriteVsGroup(b, a, c, e, f)
                : b.type == d.GROUP || b.type == d.EMITTER
                ? this.collideGroupVsGroup(a, b, c, e, f)
                : b.type == d.TILEMAPLAYER &&
                  this.collideGroupVsTilemapLayer(a, b, c, e, f)
              : a.type == d.TILEMAPLAYER
              ? b.type == d.SPRITE
                ? this.collideSpriteVsTilemapLayer(b, a, c, e, f)
                : (b.type == d.GROUP || b.type == d.EMITTER) &&
                  this.collideGroupVsTilemapLayer(b, a, c, e, f)
              : a.type == d.EMITTER &&
                (b.type == d.SPRITE
                  ? this.collideSpriteVsGroup(b, a, c, e, f)
                  : b.type == d.GROUP || b.type == d.EMITTER
                  ? this.collideGroupVsGroup(a, b, c, e, f)
                  : b.type == d.TILEMAPLAYER &&
                    this.collideGroupVsTilemapLayer(a, b, c, e, f))),
          this._total > 0
        );
      },
      collideSpriteVsTilemapLayer: function (a, b, c, d, e) {
        if (
          ((this._mapData = b.getTiles(
            a.body.x,
            a.body.y,
            a.body.width,
            a.body.height,
            !0
          )),
          0 !== this._mapData.length)
        )
          for (var f = 0; f < this._mapData.length; f++)
            this.separateTile(a.body, this._mapData[f]) &&
              (d
                ? d.call(e, a, this._mapData[f]) &&
                  (this._total++, c && c.call(e, a, this._mapData[f]))
                : (this._total++, c && c.call(e, a, this._mapData[f])));
      },
      collideGroupVsTilemapLayer: function (a, b, c, d, e) {
        if (0 !== a.length && 0 !== a.length && a._container.first._iNext) {
          var f = a._container.first._iNext;
          do
            f.exists && this.collideSpriteVsTilemapLayer(f, b, c, d, e),
              (f = f._iNext);
          while (f != a._container.last._iNext);
        }
      },
      collideSpriteVsSprite: function (a, b, c, d, e) {
        this.separate(a.body, b.body),
          this._result &&
            (d
              ? d.call(e, a, b) && (this._total++, c && c.call(e, a, b))
              : (this._total++, c && c.call(e, a, b)));
      },
      collideSpriteVsGroup: function (a, b, c, d, e) {
        if (0 !== b.length) {
          this._potentials = this.quadTree.retrieve(a);
          for (var f = 0, g = this._potentials.length; g > f; f++)
            this._potentials[f].sprite.group == b &&
              (this.separate(a.body, this._potentials[f]),
              this._result &&
                d &&
                (this._result = d.call(e, a, this._potentials[f].sprite)),
              this._result &&
                (this._total++, c && c.call(e, a, this._potentials[f].sprite)));
        }
      },
      collideGroupVsGroup: function (a, b, c, d, e) {
        if (0 !== a.length && 0 !== b.length && a._container.first._iNext) {
          var f = a._container.first._iNext;
          do
            f.exists && this.collideSpriteVsGroup(f, b, c, d, e),
              (f = f._iNext);
          while (f != a._container.last._iNext);
        }
      },
      separate: function (a, b) {
        this._result = this.separateX(a, b) || this.separateY(a, b);
      },
      separateX: function (a, b) {
        return a.immovable && b.immovable
          ? !1
          : ((this._overlap = 0),
            d.Rectangle.intersects(a, b) &&
            ((this._maxOverlap =
              a.deltaAbsX() + b.deltaAbsX() + this.OVERLAP_BIAS),
            0 === a.deltaX() && 0 === b.deltaX()
              ? ((a.embedded = !0), (b.embedded = !0))
              : a.deltaX() > b.deltaX()
              ? ((this._overlap = a.x + a.width - b.x),
                this._overlap > this._maxOverlap ||
                a.allowCollision.right === !1 ||
                b.allowCollision.left === !1
                  ? (this._overlap = 0)
                  : ((a.touching.right = !0), (b.touching.left = !0)))
              : a.deltaX() < b.deltaX() &&
                ((this._overlap = a.x - b.width - b.x),
                -this._overlap > this._maxOverlap ||
                a.allowCollision.left === !1 ||
                b.allowCollision.right === !1
                  ? (this._overlap = 0)
                  : ((a.touching.left = !0), (b.touching.right = !0))),
            0 !== this._overlap)
              ? ((a.overlapX = this._overlap),
                (b.overlapX = this._overlap),
                a.customSeparateX || b.customSeparateX
                  ? !0
                  : ((this._velocity1 = a.velocity.x),
                    (this._velocity2 = b.velocity.x),
                    a.immovable || b.immovable
                      ? a.immovable
                        ? b.immovable ||
                          ((b.x += this._overlap),
                          (b.velocity.x =
                            this._velocity1 - this._velocity2 * b.bounce.x))
                        : ((a.x = a.x - this._overlap),
                          (a.velocity.x =
                            this._velocity2 - this._velocity1 * a.bounce.x))
                      : ((this._overlap *= 0.5),
                        (a.x = a.x - this._overlap),
                        (b.x += this._overlap),
                        (this._newVelocity1 =
                          Math.sqrt(
                            (this._velocity2 * this._velocity2 * b.mass) /
                              a.mass
                          ) * (this._velocity2 > 0 ? 1 : -1)),
                        (this._newVelocity2 =
                          Math.sqrt(
                            (this._velocity1 * this._velocity1 * a.mass) /
                              b.mass
                          ) * (this._velocity1 > 0 ? 1 : -1)),
                        (this._average =
                          0.5 * (this._newVelocity1 + this._newVelocity2)),
                        (this._newVelocity1 -= this._average),
                        (this._newVelocity2 -= this._average),
                        (a.velocity.x =
                          this._average + this._newVelocity1 * a.bounce.x),
                        (b.velocity.x =
                          this._average + this._newVelocity2 * b.bounce.x)),
                    a.updateHulls(),
                    b.updateHulls(),
                    !0))
              : !1);
      },
      separateY: function (a, b) {
        return a.immovable && b.immovable
          ? !1
          : ((this._overlap = 0),
            d.Rectangle.intersects(a, b) &&
            ((this._maxOverlap =
              a.deltaAbsY() + b.deltaAbsY() + this.OVERLAP_BIAS),
            0 === a.deltaY() && 0 === b.deltaY()
              ? ((a.embedded = !0), (b.embedded = !0))
              : a.deltaY() > b.deltaY()
              ? ((this._overlap = a.y + a.height - b.y),
                this._overlap > this._maxOverlap ||
                a.allowCollision.down === !1 ||
                b.allowCollision.up === !1
                  ? (this._overlap = 0)
                  : ((a.touching.down = !0), (b.touching.up = !0)))
              : a.deltaY() < b.deltaY() &&
                ((this._overlap = a.y - b.height - b.y),
                -this._overlap > this._maxOverlap ||
                a.allowCollision.up === !1 ||
                b.allowCollision.down === !1
                  ? (this._overlap = 0)
                  : ((a.touching.up = !0), (b.touching.down = !0))),
            0 !== this._overlap)
              ? ((a.overlapY = this._overlap),
                (b.overlapY = this._overlap),
                a.customSeparateY || b.customSeparateY
                  ? !0
                  : ((this._velocity1 = a.velocity.y),
                    (this._velocity2 = b.velocity.y),
                    a.immovable || b.immovable
                      ? a.immovable
                        ? b.immovable ||
                          ((b.y += this._overlap),
                          (b.velocity.y =
                            this._velocity1 - this._velocity2 * b.bounce.y),
                          a.sprite.active &&
                            a.moves &&
                            a.deltaY() < b.deltaY() &&
                            (b.x += a.x - a.lastX))
                        : ((a.y = a.y - this._overlap),
                          (a.velocity.y =
                            this._velocity2 - this._velocity1 * a.bounce.y),
                          b.active &&
                            b.moves &&
                            a.deltaY() > b.deltaY() &&
                            (a.x += b.x - b.lastX))
                      : ((this._overlap *= 0.5),
                        (a.y = a.y - this._overlap),
                        (b.y += this._overlap),
                        (this._newVelocity1 =
                          Math.sqrt(
                            (this._velocity2 * this._velocity2 * b.mass) /
                              a.mass
                          ) * (this._velocity2 > 0 ? 1 : -1)),
                        (this._newVelocity2 =
                          Math.sqrt(
                            (this._velocity1 * this._velocity1 * a.mass) /
                              b.mass
                          ) * (this._velocity1 > 0 ? 1 : -1)),
                        (this._average =
                          0.5 * (this._newVelocity1 + this._newVelocity2)),
                        (this._newVelocity1 -= this._average),
                        (this._newVelocity2 -= this._average),
                        (a.velocity.y =
                          this._average + this._newVelocity1 * a.bounce.y),
                        (b.velocity.y =
                          this._average + this._newVelocity2 * b.bounce.y)),
                    a.updateHulls(),
                    b.updateHulls(),
                    !0))
              : !1);
      },
      separateTile: function (a, b) {
        return (
          (this._result =
            this.separateTileX(a, b, !0) || this.separateTileY(a, b, !0)),
          this._result
        );
      },
      separateTileX: function (a, b, c) {
        return a.immovable ||
          0 === a.deltaX() ||
          d.Rectangle.intersects(a.hullX, b) === !1
          ? !1
          : ((this._overlap = 0),
            a.deltaX() < 0
              ? ((this._overlap = b.right - a.hullX.x),
                a.allowCollision.left === !1 || b.tile.collideRight === !1
                  ? (this._overlap = 0)
                  : (a.touching.left = !0))
              : ((this._overlap = a.hullX.right - b.x),
                a.allowCollision.right === !1 || b.tile.collideLeft === !1
                  ? (this._overlap = 0)
                  : (a.touching.right = !0)),
            0 !== this._overlap
              ? (c &&
                  ((a.x =
                    a.deltaX() < 0 ? a.x + this._overlap : a.x - this._overlap),
                  (a.velocity.x =
                    0 === a.bounce.x ? 0 : -a.velocity.x * a.bounce.x),
                  a.updateHulls()),
                !0)
              : !1);
      },
      separateTileY: function (a, b, c) {
        return a.immovable ||
          0 === a.deltaY() ||
          d.Rectangle.intersects(a.hullY, b) === !1
          ? !1
          : ((this._overlap = 0),
            a.deltaY() < 0
              ? ((this._overlap = b.bottom - a.hullY.y),
                a.allowCollision.up === !1 || b.tile.collideDown === !1
                  ? (this._overlap = 0)
                  : (a.touching.up = !0))
              : ((this._overlap = a.hullY.bottom - b.y),
                a.allowCollision.down === !1 || b.tile.collideUp === !1
                  ? (this._overlap = 0)
                  : (a.touching.down = !0)),
            0 !== this._overlap
              ? (c &&
                  ((a.y =
                    a.deltaY() < 0 ? a.y + this._overlap : a.y - this._overlap),
                  (a.velocity.y =
                    0 === a.bounce.y ? 0 : -a.velocity.y * a.bounce.y),
                  a.updateHulls()),
                !0)
              : !1);
      },
      moveToObject: function (a, b, c, d) {
        return (
          "undefined" == typeof c && (c = 60),
          "undefined" == typeof d && (d = 0),
          (this._angle = Math.atan2(b.y - a.y, b.x - a.x)),
          d > 0 && (c = this.distanceBetween(a, b) / (d / 1e3)),
          (a.body.velocity.x = Math.cos(this._angle) * c),
          (a.body.velocity.y = Math.sin(this._angle) * c),
          this._angle
        );
      },
      moveToPointer: function (a, b, c, d) {
        return (
          "undefined" == typeof b && (b = 60),
          (c = c || this.game.input.activePointer),
          "undefined" == typeof d && (d = 0),
          (this._angle = this.angleToPointer(a, c)),
          d > 0 && (b = this.distanceToPointer(a, c) / (d / 1e3)),
          (a.body.velocity.x = Math.cos(this._angle) * b),
          (a.body.velocity.y = Math.sin(this._angle) * b),
          this._angle
        );
      },
      moveToXY: function (a, b, c, d, e) {
        return (
          "undefined" == typeof d && (d = 60),
          "undefined" == typeof e && (e = 0),
          (this._angle = Math.atan2(c - a.y, b - a.x)),
          e > 0 && (d = this.distanceToXY(a, b, c) / (e / 1e3)),
          (a.body.velocity.x = Math.cos(this._angle) * d),
          (a.body.velocity.y = Math.sin(this._angle) * d),
          this._angle
        );
      },
      velocityFromAngle: function (a, b, c) {
        return (
          "undefined" == typeof b && (b = 60),
          (c = c || new d.Point()),
          c.setTo(
            Math.cos(this.game.math.degToRad(a)) * b,
            Math.sin(this.game.math.degToRad(a)) * b
          )
        );
      },
      velocityFromRotation: function (a, b, c) {
        return (
          "undefined" == typeof b && (b = 60),
          (c = c || new d.Point()),
          c.setTo(Math.cos(a) * b, Math.sin(a) * b)
        );
      },
      accelerationFromRotation: function (a, b, c) {
        return (
          "undefined" == typeof b && (b = 60),
          (c = c || new d.Point()),
          c.setTo(Math.cos(a) * b, Math.sin(a) * b)
        );
      },
      accelerateToObject: function (a, b, c, d, e) {
        return (
          "undefined" == typeof c && (c = 60),
          "undefined" == typeof d && (d = 1e3),
          "undefined" == typeof e && (e = 1e3),
          (this._angle = this.angleBetween(a, b)),
          a.body.acceleration.setTo(
            Math.cos(this._angle) * c,
            Math.sin(this._angle) * c
          ),
          a.body.maxVelocity.setTo(d, e),
          this._angle
        );
      },
      accelerateToPointer: function (a, b, c, d, e) {
        return (
          "undefined" == typeof c && (c = 60),
          "undefined" == typeof b && (b = this.game.input.activePointer),
          "undefined" == typeof d && (d = 1e3),
          "undefined" == typeof e && (e = 1e3),
          (this._angle = this.angleToPointer(a, b)),
          a.body.acceleration.setTo(
            Math.cos(this._angle) * c,
            Math.sin(this._angle) * c
          ),
          a.body.maxVelocity.setTo(d, e),
          this._angle
        );
      },
      accelerateToXY: function (a, b, c, d, e, f) {
        return (
          "undefined" == typeof d && (d = 60),
          "undefined" == typeof e && (e = 1e3),
          "undefined" == typeof f && (f = 1e3),
          (this._angle = this.angleToXY(a, b, c)),
          a.body.acceleration.setTo(
            Math.cos(this._angle) * d,
            Math.sin(this._angle) * d
          ),
          a.body.maxVelocity.setTo(e, f),
          this._angle
        );
      },
      distanceBetween: function (a, b) {
        return (
          (this._dx = a.x - b.x),
          (this._dy = a.y - b.y),
          Math.sqrt(this._dx * this._dx + this._dy * this._dy)
        );
      },
      distanceToXY: function (a, b, c) {
        return (
          (this._dx = a.x - b),
          (this._dy = a.y - c),
          Math.sqrt(this._dx * this._dx + this._dy * this._dy)
        );
      },
      distanceToPointer: function (a, b) {
        return (
          (b = b || this.game.input.activePointer),
          (this._dx = a.x - b.x),
          (this._dy = a.y - b.y),
          Math.sqrt(this._dx * this._dx + this._dy * this._dy)
        );
      },
      angleBetween: function (a, b) {
        return (
          (this._dx = b.x - a.x),
          (this._dy = b.y - a.y),
          Math.atan2(this._dy, this._dx)
        );
      },
      angleToXY: function (a, b, c) {
        return (
          (this._dx = b - a.x),
          (this._dy = c - a.y),
          Math.atan2(this._dy, this._dx)
        );
      },
      angleToPointer: function (a, b) {
        return (
          (b = b || this.game.input.activePointer),
          (this._dx = b.worldX - a.x),
          (this._dy = b.worldY - a.y),
          Math.atan2(this._dy, this._dx)
        );
      },
    }),
    (d.Physics.Arcade.Body = function (a) {
      (this.sprite = a),
        (this.game = a.game),
        (this.offset = new d.Point()),
        (this.x = a.x),
        (this.y = a.y),
        (this.preX = a.x),
        (this.preY = a.y),
        (this.preRotation = a.angle),
        (this.screenX = a.x),
        (this.screenY = a.y),
        (this.sourceWidth = a.currentFrame.sourceSizeW),
        (this.sourceHeight = a.currentFrame.sourceSizeH),
        (this.width = a.currentFrame.sourceSizeW),
        (this.height = a.currentFrame.sourceSizeH),
        (this.halfWidth = Math.floor(a.currentFrame.sourceSizeW / 2)),
        (this.halfHeight = Math.floor(a.currentFrame.sourceSizeH / 2)),
        (this.center = new d.Point(
          this.x + this.halfWidth,
          this.y + this.halfHeight
        )),
        (this._sx = a.scale.x),
        (this._sy = a.scale.y),
        (this.velocity = new d.Point()),
        (this.acceleration = new d.Point()),
        (this.drag = new d.Point()),
        (this.gravity = new d.Point()),
        (this.bounce = new d.Point()),
        (this.maxVelocity = new d.Point(1e4, 1e4)),
        (this.angularVelocity = 0),
        (this.angularAcceleration = 0),
        (this.angularDrag = 0),
        (this.maxAngular = 1e3),
        (this.mass = 1),
        (this.skipQuadTree = !1),
        (this.quadTreeIDs = []),
        (this.quadTreeIndex = -1),
        (this.allowCollision = {
          none: !1,
          any: !0,
          up: !0,
          down: !0,
          left: !0,
          right: !0,
        }),
        (this.touching = { none: !0, up: !1, down: !1, left: !1, right: !1 }),
        (this.wasTouching = {
          none: !0,
          up: !1,
          down: !1,
          left: !1,
          right: !1,
        }),
        (this.facing = d.NONE),
        (this.immovable = !1),
        (this.moves = !0),
        (this.rotation = 0),
        (this.allowRotation = !0),
        (this.allowGravity = !0),
        (this.customSeparateX = !1),
        (this.customSeparateY = !1),
        (this.overlapX = 0),
        (this.overlapY = 0),
        (this.hullX = new d.Rectangle()),
        (this.hullY = new d.Rectangle()),
        (this.embedded = !1),
        (this.collideWorldBounds = !1);
    }),
    (d.Physics.Arcade.Body.prototype = {
      updateBounds: function (a, b, c, d) {
        (c != this._sx || d != this._sy) &&
          ((this.width = this.sourceWidth * c),
          (this.height = this.sourceHeight * d),
          (this.halfWidth = Math.floor(this.width / 2)),
          (this.halfHeight = Math.floor(this.height / 2)),
          (this._sx = c),
          (this._sy = d),
          this.center.setTo(this.x + this.halfWidth, this.y + this.halfHeight));
      },
      preUpdate: function () {
        (this.wasTouching.none = this.touching.none),
          (this.wasTouching.up = this.touching.up),
          (this.wasTouching.down = this.touching.down),
          (this.wasTouching.left = this.touching.left),
          (this.wasTouching.right = this.touching.right),
          (this.touching.none = !0),
          (this.touching.up = !1),
          (this.touching.down = !1),
          (this.touching.left = !1),
          (this.touching.right = !1),
          (this.embedded = !1),
          (this.screenX =
            this.sprite.worldTransform[2] -
            this.sprite.anchor.x * this.width +
            this.offset.x),
          (this.screenY =
            this.sprite.worldTransform[5] -
            this.sprite.anchor.y * this.height +
            this.offset.y),
          (this.preX =
            this.sprite.world.x -
            this.sprite.anchor.x * this.width +
            this.offset.x),
          (this.preY =
            this.sprite.world.y -
            this.sprite.anchor.y * this.height +
            this.offset.y),
          (this.preRotation = this.sprite.angle),
          (this.x = this.preX),
          (this.y = this.preY),
          (this.rotation = this.preRotation),
          this.moves &&
            (this.game.physics.updateMotion(this),
            this.collideWorldBounds && this.checkWorldBounds(),
            this.updateHulls()),
          this.skipQuadTree === !1 &&
            this.allowCollision.none === !1 &&
            this.sprite.visible &&
            this.sprite.alive &&
            ((this.quadTreeIDs = []),
            (this.quadTreeIndex = -1),
            this.game.physics.quadTree.insert(this));
      },
      postUpdate: function () {
        this.deltaX() < 0
          ? (this.facing = d.LEFT)
          : this.deltaX() > 0 && (this.facing = d.RIGHT),
          this.deltaY() < 0
            ? (this.facing = d.UP)
            : this.deltaY() > 0 && (this.facing = d.DOWN),
          (0 !== this.deltaX() || 0 !== this.deltaY()) &&
            ((this.sprite.x += this.deltaX()),
            (this.sprite.y += this.deltaY()),
            this.center.setTo(
              this.x + this.halfWidth,
              this.y + this.halfHeight
            )),
          this.allowRotation && (this.sprite.angle += this.deltaZ());
      },
      updateHulls: function () {
        this.hullX.setTo(this.x, this.preY, this.width, this.height),
          this.hullY.setTo(this.preX, this.y, this.width, this.height);
      },
      checkWorldBounds: function () {
        this.x < this.game.world.bounds.x
          ? ((this.x = this.game.world.bounds.x),
            (this.velocity.x *= -this.bounce.x))
          : this.right > this.game.world.bounds.right &&
            ((this.x = this.game.world.bounds.right - this.width),
            (this.velocity.x *= -this.bounce.x)),
          this.y < this.game.world.bounds.y
            ? ((this.y = this.game.world.bounds.y),
              (this.velocity.y *= -this.bounce.y))
            : this.bottom > this.game.world.bounds.bottom &&
              ((this.y = this.game.world.bounds.bottom - this.height),
              (this.velocity.y *= -this.bounce.y));
      },
      setSize: function (a, b, c, d) {
        (c = c || this.offset.x),
          (d = d || this.offset.y),
          (this.sourceWidth = a),
          (this.sourceHeight = b),
          (this.width = this.sourceWidth * this._sx),
          (this.height = this.sourceHeight * this._sy),
          (this.halfWidth = Math.floor(this.width / 2)),
          (this.halfHeight = Math.floor(this.height / 2)),
          this.offset.setTo(c, d),
          this.center.setTo(this.x + this.halfWidth, this.y + this.halfHeight);
      },
      reset: function () {
        this.velocity.setTo(0, 0),
          this.acceleration.setTo(0, 0),
          (this.angularVelocity = 0),
          (this.angularAcceleration = 0),
          (this.preX =
            this.sprite.world.x -
            this.sprite.anchor.x * this.width +
            this.offset.x),
          (this.preY =
            this.sprite.world.y -
            this.sprite.anchor.y * this.height +
            this.offset.y),
          (this.preRotation = this.sprite.angle),
          (this.x = this.preX),
          (this.y = this.preY),
          (this.rotation = this.preRotation),
          this.center.setTo(this.x + this.halfWidth, this.y + this.halfHeight);
      },
      deltaAbsX: function () {
        return this.deltaX() > 0 ? this.deltaX() : -this.deltaX();
      },
      deltaAbsY: function () {
        return this.deltaY() > 0 ? this.deltaY() : -this.deltaY();
      },
      deltaX: function () {
        return this.x - this.preX;
      },
      deltaY: function () {
        return this.y - this.preY;
      },
      deltaZ: function () {
        return this.rotation - this.preRotation;
      },
    }),
    Object.defineProperty(d.Physics.Arcade.Body.prototype, "bottom", {
      get: function () {
        return this.y + this.height;
      },
      set: function (a) {
        this.height = a <= this.y ? 0 : this.y - a;
      },
    }),
    Object.defineProperty(d.Physics.Arcade.Body.prototype, "right", {
      get: function () {
        return this.x + this.width;
      },
      set: function (a) {
        this.width = a <= this.x ? 0 : this.x + a;
      },
    }),
    (d.Particles = function (a) {
      (this.game = a), (this.emitters = {}), (this.ID = 0);
    }),
    (d.Particles.prototype = {
      add: function (a) {
        return (this.emitters[a.name] = a), a;
      },
      remove: function (a) {
        delete this.emitters[a.name];
      },
      update: function () {
        for (var a in this.emitters)
          this.emitters[a].exists && this.emitters[a].update();
      },
    }),
    (d.Particles.Arcade = {}),
    (d.Particles.Arcade.Emitter = function (a, b, c, e) {
      (this.maxParticles = e || 50),
        d.Group.call(this, a),
        (this.name = "emitter" + this.game.particles.ID++),
        (this.type = d.EMITTER),
        (this.x = 0),
        (this.y = 0),
        (this.width = 1),
        (this.height = 1),
        (this.minParticleSpeed = new d.Point(-100, -100)),
        (this.maxParticleSpeed = new d.Point(100, 100)),
        (this.minParticleScale = 1),
        (this.maxParticleScale = 1),
        (this.minRotation = -360),
        (this.maxRotation = 360),
        (this.gravity = 2),
        (this.particleClass = null),
        (this.particleDrag = new d.Point()),
        (this.angularDrag = 0),
        (this.frequency = 100),
        (this.lifespan = 2e3),
        (this.bounce = new d.Point()),
        (this._quantity = 0),
        (this._timer = 0),
        (this._counter = 0),
        (this._explode = !0),
        (this.on = !1),
        (this.exists = !0),
        (this.emitX = b),
        (this.emitY = c);
    }),
    (d.Particles.Arcade.Emitter.prototype = Object.create(d.Group.prototype)),
    (d.Particles.Arcade.Emitter.prototype.constructor =
      d.Particles.Arcade.Emitter),
    (d.Particles.Arcade.Emitter.prototype.update = function () {
      if (this.on)
        if (this._explode) {
          this._counter = 0;
          do this.emitParticle(), this._counter++;
          while (this._counter < this._quantity);
          this.on = !1;
        } else
          this.game.time.now >= this._timer &&
            (this.emitParticle(),
            this._counter++,
            this._quantity > 0 &&
              this._counter >= this._quantity &&
              (this.on = !1),
            (this._timer = this.game.time.now + this.frequency));
    }),
    (d.Particles.Arcade.Emitter.prototype.makeParticles = function (
      a,
      b,
      c,
      e,
      f
    ) {
      "undefined" == typeof b && (b = 0),
        (c = c || this.maxParticles),
        (e = e || 0),
        "undefined" == typeof f && (f = !1);
      for (var g, h = 0, i = a, j = 0; c > h; )
        null == this.particleClass &&
          ("object" == typeof a && (i = this.game.rnd.pick(a)),
          "object" == typeof b && (j = this.game.rnd.pick(b)),
          (g = new d.Sprite(this.game, 0, 0, i, j))),
          e > 0
            ? ((g.body.allowCollision.any = !0),
              (g.body.allowCollision.none = !1))
            : (g.body.allowCollision.none = !0),
          (g.body.collideWorldBounds = f),
          (g.exists = !1),
          (g.visible = !1),
          g.anchor.setTo(0.5, 0.5),
          this.add(g),
          h++;
      return this;
    }),
    (d.Particles.Arcade.Emitter.prototype.kill = function () {
      (this.on = !1), (this.alive = !1), (this.exists = !1);
    }),
    (d.Particles.Arcade.Emitter.prototype.revive = function () {
      (this.alive = !0), (this.exists = !0);
    }),
    (d.Particles.Arcade.Emitter.prototype.start = function (a, b, c, d) {
      "boolean" != typeof a && (a = !0),
        (b = b || 0),
        (c = c || 250),
        (d = d || 0),
        this.revive(),
        (this.visible = !0),
        (this.on = !0),
        (this._explode = a),
        (this.lifespan = b),
        (this.frequency = c),
        a ? (this._quantity = d) : (this._quantity += d),
        (this._counter = 0),
        (this._timer = this.game.time.now + c);
    }),
    (d.Particles.Arcade.Emitter.prototype.emitParticle = function () {
      var a = this.getFirstExists(!1);
      if (null != a) {
        if (
          (this.width > 1 || this.height > 1
            ? a.reset(
                this.game.rnd.integerInRange(this.left, this.right),
                this.game.rnd.integerInRange(this.top, this.bottom)
              )
            : a.reset(this.emitX, this.emitY),
          (a.lifespan = this.lifespan),
          a.body.bounce.setTo(this.bounce.x, this.bounce.y),
          (a.body.velocity.x =
            this.minParticleSpeed.x != this.maxParticleSpeed.x
              ? this.game.rnd.integerInRange(
                  this.minParticleSpeed.x,
                  this.maxParticleSpeed.x
                )
              : this.minParticleSpeed.x),
          (a.body.velocity.y =
            this.minParticleSpeed.y != this.maxParticleSpeed.y
              ? this.game.rnd.integerInRange(
                  this.minParticleSpeed.y,
                  this.maxParticleSpeed.y
                )
              : this.minParticleSpeed.y),
          (a.body.gravity.y = this.gravity),
          (a.body.angularVelocity =
            this.minRotation != this.maxRotation
              ? this.game.rnd.integerInRange(this.minRotation, this.maxRotation)
              : this.minRotation),
          1 !== this.minParticleScale || 1 !== this.maxParticleScale)
        ) {
          var b = this.game.rnd.realInRange(
            this.minParticleScale,
            this.maxParticleScale
          );
          a.scale.setTo(b, b);
        }
        (a.body.drag.x = this.particleDrag.x),
          (a.body.drag.y = this.particleDrag.y),
          (a.body.angularDrag = this.angularDrag);
      }
    }),
    (d.Particles.Arcade.Emitter.prototype.setSize = function (a, b) {
      (this.width = a), (this.height = b);
    }),
    (d.Particles.Arcade.Emitter.prototype.setXSpeed = function (a, b) {
      (a = a || 0),
        (b = b || 0),
        (this.minParticleSpeed.x = a),
        (this.maxParticleSpeed.x = b);
    }),
    (d.Particles.Arcade.Emitter.prototype.setYSpeed = function (a, b) {
      (a = a || 0),
        (b = b || 0),
        (this.minParticleSpeed.y = a),
        (this.maxParticleSpeed.y = b);
    }),
    (d.Particles.Arcade.Emitter.prototype.setRotation = function (a, b) {
      (a = a || 0),
        (b = b || 0),
        (this.minRotation = a),
        (this.maxRotation = b);
    }),
    (d.Particles.Arcade.Emitter.prototype.at = function (a) {
      (this.emitX = a.center.x), (this.emitY = a.center.y);
    }),
    Object.defineProperty(d.Particles.Arcade.Emitter.prototype, "alpha", {
      get: function () {
        return this._container.alpha;
      },
      set: function (a) {
        this._container.alpha = a;
      },
    }),
    Object.defineProperty(d.Particles.Arcade.Emitter.prototype, "visible", {
      get: function () {
        return this._container.visible;
      },
      set: function (a) {
        this._container.visible = a;
      },
    }),
    Object.defineProperty(d.Particles.Arcade.Emitter.prototype, "x", {
      get: function () {
        return this.emitX;
      },
      set: function (a) {
        this.emitX = a;
      },
    }),
    Object.defineProperty(d.Particles.Arcade.Emitter.prototype, "y", {
      get: function () {
        return this.emitY;
      },
      set: function (a) {
        this.emitY = a;
      },
    }),
    Object.defineProperty(d.Particles.Arcade.Emitter.prototype, "left", {
      get: function () {
        return Math.floor(this.x - this.width / 2);
      },
    }),
    Object.defineProperty(d.Particles.Arcade.Emitter.prototype, "right", {
      get: function () {
        return Math.floor(this.x + this.width / 2);
      },
    }),
    Object.defineProperty(d.Particles.Arcade.Emitter.prototype, "top", {
      get: function () {
        return Math.floor(this.y - this.height / 2);
      },
    }),
    Object.defineProperty(d.Particles.Arcade.Emitter.prototype, "bottom", {
      get: function () {
        return Math.floor(this.y + this.height / 2);
      },
    }),
    (d.Tile = function (a, b, c, d, e, f) {
      (this.tileset = a),
        (this.index = b),
        (this.width = e),
        (this.height = f),
        (this.x = c),
        (this.y = d),
        (this.mass = 1),
        (this.collideNone = !0),
        (this.collideLeft = !1),
        (this.collideRight = !1),
        (this.collideUp = !1),
        (this.collideDown = !1),
        (this.separateX = !0),
        (this.separateY = !0),
        (this.collisionCallback = null),
        (this.collisionCallbackContext = this);
    }),
    (d.Tile.prototype = {
      setCollisionCallback: function (a, b) {
        (this.collisionCallbackContext = b), (this.collisionCallback = a);
      },
      destroy: function () {
        this.tileset = null;
      },
      setCollision: function (a, b, c, d) {
        (this.collideLeft = a),
          (this.collideRight = b),
          (this.collideUp = c),
          (this.collideDown = d),
          (this.collideNone = a || b || c || d ? !1 : !0);
      },
      resetCollision: function () {
        (this.collideNone = !0),
          (this.collideLeft = !1),
          (this.collideRight = !1),
          (this.collideUp = !1),
          (this.collideDown = !1);
      },
    }),
    Object.defineProperty(d.Tile.prototype, "bottom", {
      get: function () {
        return this.y + this.height;
      },
    }),
    Object.defineProperty(d.Tile.prototype, "right", {
      get: function () {
        return this.x + this.width;
      },
    }),
    (d.Tilemap = function (a, b) {
      (this.game = a),
        (this.layers = null),
        "string" == typeof b
          ? ((this.key = b),
            (this.layers = a.cache.getTilemapData(b).layers),
            this.calculateIndexes())
          : (this.layers = []),
        (this.currentLayer = 0),
        (this.debugMap = []),
        (this.dirty = !1),
        (this._results = []),
        (this._tempA = 0),
        (this._tempB = 0);
    }),
    (d.Tilemap.CSV = 0),
    (d.Tilemap.TILED_JSON = 1),
    (d.Tilemap.prototype = {
      create: function (a, b, c) {
        for (var e = [], f = 0; c > f; f++) {
          e[f] = [];
          for (var g = 0; b > g; g++) e[f][g] = 0;
        }
        this.layers.push({
          name: a,
          width: b,
          height: c,
          alpha: 1,
          visible: !0,
          tileMargin: 0,
          tileSpacing: 0,
          format: d.Tilemap.CSV,
          data: e,
          indexes: [],
        }),
          (this.currentLayer = this.layers.length - 1),
          (this.dirty = !0);
      },
      calculateIndexes: function () {
        for (var a = 0; a < this.layers.length; a++) {
          this.layers[a].indexes = [];
          for (var b = 0; b < this.layers[a].height; b++)
            for (var c = 0; c < this.layers[a].width; c++) {
              var d = this.layers[a].data[b][c];
              -1 === this.layers[a].indexes.indexOf(d) &&
                this.layers[a].indexes.push(d);
            }
        }
      },
      setLayer: function (a) {
        this.layers[a] && (this.currentLayer = a);
      },
      putTile: function (a, b, c, d) {
        "undefined" == typeof d && (d = this.currentLayer),
          b >= 0 &&
            b < this.layers[d].width &&
            c >= 0 &&
            c < this.layers[d].height &&
            (this.layers[d].data[c][b] = a),
          (this.dirty = !0);
      },
      getTile: function (a, b, c) {
        return (
          "undefined" == typeof c && (c = this.currentLayer),
          a >= 0 &&
          a < this.layers[c].width &&
          b >= 0 &&
          b < this.layers[c].height
            ? this.layers[c].data[b][a]
            : void 0
        );
      },
      getTileWorldXY: function (a, b, c, d, e) {
        return (
          "undefined" == typeof e && (e = this.currentLayer),
          (a = this.game.math.snapToFloor(a, c) / c),
          (b = this.game.math.snapToFloor(b, d) / d),
          a >= 0 &&
          a < this.layers[e].width &&
          b >= 0 &&
          b < this.layers[e].height
            ? this.layers[e].data[b][a]
            : void 0
        );
      },
      putTileWorldXY: function (a, b, c, d, e, f) {
        "undefined" == typeof f && (f = this.currentLayer),
          (b = this.game.math.snapToFloor(b, d) / d),
          (c = this.game.math.snapToFloor(c, e) / e),
          b >= 0 &&
            b < this.layers[f].width &&
            c >= 0 &&
            c < this.layers[f].height &&
            (this.layers[f].data[c][b] = a),
          (this.dirty = !0);
      },
      copy: function (a, b, c, d, e) {
        if (
          ("undefined" == typeof e && (e = this.currentLayer), !this.layers[e])
        )
          return (this._results.length = 0), void 0;
        "undefined" == typeof a && (a = 0),
          "undefined" == typeof b && (b = 0),
          "undefined" == typeof c && (c = this.layers[e].width),
          "undefined" == typeof d && (d = this.layers[e].height),
          0 > a && (a = 0),
          0 > b && (b = 0),
          c > this.layers[e].width && (c = this.layers[e].width),
          d > this.layers[e].height && (d = this.layers[e].height),
          (this._results.length = 0),
          this._results.push({ x: a, y: b, width: c, height: d, layer: e });
        for (var f = b; b + d > f; f++)
          for (var g = a; a + c > g; g++)
            this._results.push({
              x: g,
              y: f,
              index: this.layers[e].data[f][g],
            });
        return this._results;
      },
      paste: function (a, b, c, d) {
        if (
          ("undefined" == typeof a && (a = 0),
          "undefined" == typeof b && (b = 0),
          "undefined" == typeof d && (d = this.currentLayer),
          c && !(c.length < 2))
        ) {
          for (var e = c[1].x - a, f = c[1].y - b, g = 1; g < c.length; g++)
            this.layers[d].data[f + c[g].y][e + c[g].x] = c[g].index;
          this.dirty = !0;
        }
      },
      swap: function (a, b, c, d, e, f, g) {
        this.copy(c, d, e, f, g),
          this._results.length < 2 ||
            ((this._tempA = a),
            (this._tempB = b),
            this._results.forEach(this.swapHandler, this),
            this.paste(c, d, this._results));
      },
      swapHandler: function (a, b) {
        a.index === this._tempA
          ? (this._results[b].index = this._tempB)
          : a.index === this._tempB && (this._results[b].index = this._tempA);
      },
      forEach: function (a, b, c, d, e, f, g) {
        this.copy(c, d, e, f, g),
          this._results.length < 2 ||
            (this._results.forEach(a, b), this.paste(c, d, this._results));
      },
      replace: function (a, b, c, d, e, f, g) {
        if ((this.copy(c, d, e, f, g), !(this._results.length < 2))) {
          for (var h = 1; h < this._results.length; h++)
            this._results[h].index === a && (this._results[h].index = b);
          this.paste(c, d, this._results);
        }
      },
      random: function (a, b, c, d, e) {
        if (
          ("undefined" == typeof e && (e = this.currentLayer),
          this.copy(a, b, c, d, e),
          !(this._results.length < 2))
        ) {
          for (var f = [], g = 1; g < this._results.length; g++) {
            var h = this._results[g].index;
            -1 === f.indexOf(h) && f.push(h);
          }
          for (var i = 1; i < this._results.length; i++)
            this._results[i].index = this.game.rnd.pick(f);
          this.paste(a, b, this._results);
        }
      },
      shuffle: function (a, b, c, e, f) {
        if (
          ("undefined" == typeof f && (f = this.currentLayer),
          this.copy(a, b, c, e, f),
          !(this._results.length < 2))
        ) {
          var g = this._results.shift();
          d.Utils.shuffle(this._results),
            this._results.unshift(g),
            this.paste(a, b, this._results);
        }
      },
      fill: function (a, b, c, d, e, f) {
        if ((this.copy(b, c, d, e, f), !(this._results.length < 2))) {
          for (var g = 1; g < this._results.length; g++)
            this._results[g].index = a;
          this.paste(b, c, this._results);
        }
      },
      removeAllLayers: function () {
        (this.layers.length = 0), (this.currentLayer = 0);
      },
      dump: function () {
        for (
          var a = "", b = [""], c = 0;
          c < this.layers[this.currentLayer].height;
          c++
        ) {
          for (var d = 0; d < this.layers[this.currentLayer].width; d++)
            (a += "%c  "),
              this.layers[this.currentLayer].data[c][d] > 1
                ? this.debugMap[this.layers[this.currentLayer].data[c][d]]
                  ? b.push(
                      "background: " +
                        this.debugMap[this.layers[this.currentLayer].data[c][d]]
                    )
                  : b.push("background: #ffffff")
                : b.push("background: rgb(0, 0, 0)");
          a += "\n";
        }
        (b[0] = a), console.log.apply(console, b);
      },
      destroy: function () {
        this.removeAllLayers(), (this.game = null);
      },
    }),
    (d.TilemapLayer = function (a, b, e, f, g, h, i, j) {
      (this.game = a),
        (this.canvas = d.Canvas.create(f, g)),
        (this.context = this.canvas.getContext("2d")),
        (this.baseTexture = new c.BaseTexture(this.canvas)),
        (this.texture = new c.Texture(this.baseTexture)),
        (this.textureFrame = new d.Frame(
          0,
          0,
          0,
          f,
          g,
          "tilemaplayer",
          a.rnd.uuid()
        )),
        d.Sprite.call(this, this.game, b, e, this.texture, this.textureFrame),
        (this.type = d.TILEMAPLAYER),
        (this.fixedToCamera = !0),
        (this.tileset = null),
        (this.tileWidth = 0),
        (this.tileHeight = 0),
        (this.tileMargin = 0),
        (this.tileSpacing = 0),
        (this.widthInPixels = 0),
        (this.heightInPixels = 0),
        (this.renderWidth = f),
        (this.renderHeight = g),
        (this._ga = 1),
        (this._dx = 0),
        (this._dy = 0),
        (this._dw = 0),
        (this._dh = 0),
        (this._tx = 0),
        (this._ty = 0),
        (this._tw = 0),
        (this._th = 0),
        (this._tl = 0),
        (this._maxX = 0),
        (this._maxY = 0),
        (this._startX = 0),
        (this._startY = 0),
        (this._results = []),
        (this._x = 0),
        (this._y = 0),
        (this._prevX = 0),
        (this._prevY = 0),
        (this.scrollFactorX = 1),
        (this.scrollFactorY = 1),
        (this.tilemap = null),
        (this.layer = null),
        (this.index = 0),
        (this.dirty = !0),
        (h instanceof d.Tileset || "string" == typeof h) &&
          this.updateTileset(h),
        i instanceof d.Tilemap && this.updateMapData(i, j);
    }),
    (d.TilemapLayer.prototype = Object.create(d.Sprite.prototype)),
    (d.TilemapLayer.prototype = d.Utils.extend(
      !0,
      d.TilemapLayer.prototype,
      d.Sprite.prototype,
      c.Sprite.prototype
    )),
    (d.TilemapLayer.prototype.constructor = d.TilemapLayer),
    (d.TilemapLayer.prototype.update = function () {
      (this.scrollX = this.game.camera.x * this.scrollFactorX),
        (this.scrollY = this.game.camera.y * this.scrollFactorY),
        this.render();
    }),
    (d.TilemapLayer.prototype.resizeWorld = function () {
      this.game.world.setBounds(0, 0, this.widthInPixels, this.heightInPixels);
    }),
    (d.TilemapLayer.prototype.updateTileset = function (a) {
      if (a instanceof d.Tileset) this.tileset = a;
      else {
        if ("string" != typeof a) return;
        this.tileset = this.game.cache.getTileset("tiles");
      }
      (this.tileWidth = this.tileset.tileWidth),
        (this.tileHeight = this.tileset.tileHeight),
        (this.tileMargin = this.tileset.tileMargin),
        (this.tileSpacing = this.tileset.tileSpacing),
        this.updateMax();
    }),
    (d.TilemapLayer.prototype.updateMapData = function (a, b) {
      "undefined" == typeof b && (b = 0),
        a instanceof d.Tilemap &&
          ((this.tilemap = a),
          (this.layer = this.tilemap.layers[b]),
          (this.index = b),
          this.updateMax(),
          (this.tilemap.dirty = !0));
    }),
    (d.TilemapLayer.prototype._fixX = function (a) {
      if (1 === this.scrollFactorX) return a;
      var b = a - this._x / this.scrollFactorX;
      return this._x + b;
    }),
    (d.TilemapLayer.prototype._unfixX = function (a) {
      if (1 === this.scrollFactorX) return a;
      var b = a - this._x;
      return this._x / this.scrollFactorX + b;
    }),
    (d.TilemapLayer.prototype._fixY = function (a) {
      if (1 === this.scrollFactorY) return a;
      var b = a - this._y / this.scrollFactorY;
      return this._y + b;
    }),
    (d.TilemapLayer.prototype._unfixY = function (a) {
      if (1 === this.scrollFactorY) return a;
      var b = a - this._y;
      return this._y / this.scrollFactorY + b;
    }),
    (d.TilemapLayer.prototype.getTileX = function (a) {
      var b = this.tileWidth * this.scale.x;
      return this.game.math.snapToFloor(this._fixX(a), b) / b;
    }),
    (d.TilemapLayer.prototype.getTileY = function (a) {
      var b = this.tileHeight * this.scale.y;
      return this.game.math.snapToFloor(this._fixY(a), b) / b;
    }),
    (d.TilemapLayer.prototype.getTileXY = function (a, b, c) {
      return (c.x = this.getTileX(a)), (c.y = this.getTileY(b)), c;
    }),
    (d.TilemapLayer.prototype.getTiles = function (a, b, c, d, e) {
      if (null !== this.tilemap) {
        "undefined" == typeof e && (e = !1),
          0 > a && (a = 0),
          0 > b && (b = 0),
          (a = this._fixX(a)),
          (b = this._fixY(b)),
          c > this.widthInPixels && (c = this.widthInPixels),
          d > this.heightInPixels && (d = this.heightInPixels);
        var f = this.tileWidth * this.scale.x,
          g = this.tileHeight * this.scale.y;
        (this._tx = this.game.math.snapToFloor(a, f) / f),
          (this._ty = this.game.math.snapToFloor(b, g) / g),
          (this._tw = (this.game.math.snapToCeil(c, f) + f) / f),
          (this._th = (this.game.math.snapToCeil(d, g) + g) / g),
          (this._results = []);
        for (
          var h = 0, i = null, j = 0, k = 0, l = this._ty;
          l < this._ty + this._th;
          l++
        )
          for (var m = this._tx; m < this._tx + this._tw; m++)
            if (
              this.layer.data[l] &&
              this.layer.data[l][m] &&
              ((h = this.layer.data[l][m] - 1),
              (i = this.tileset.getTile(h)),
              (j = i.width * this.scale.x),
              (k = i.height * this.scale.y),
              e === !1 || (e && i.collideNone === !1))
            ) {
              var n = this._unfixX(m * j) / f,
                o = this._unfixY(l * k) / g;
              this._results.push({
                x: n * j,
                right: n * j + j,
                y: o * k,
                bottom: o * k + k,
                width: j,
                height: k,
                tx: n,
                ty: o,
                tile: i,
              });
            }
        return this._results;
      }
    }),
    (d.TilemapLayer.prototype.updateMax = function () {
      (this._maxX =
        this.game.math.ceil(this.canvas.width / this.tileWidth) + 1),
        (this._maxY =
          this.game.math.ceil(this.canvas.height / this.tileHeight) + 1),
        this.layer &&
          (this._maxX > this.layer.width && (this._maxX = this.layer.width),
          this._maxY > this.layer.height && (this._maxY = this.layer.height),
          (this.widthInPixels = this.layer.width * this.tileWidth),
          (this.heightInPixels = this.layer.height * this.tileHeight)),
        (this.dirty = !0);
    }),
    (d.TilemapLayer.prototype.render = function () {
      if (
        (this.tilemap && this.tilemap.dirty && (this.dirty = !0),
        this.dirty && this.tileset && this.tilemap && this.visible)
      ) {
        (this._prevX = this._dx),
          (this._prevY = this._dy),
          (this._dx = -(this._x - this._startX * this.tileWidth)),
          (this._dy = -(this._y - this._startY * this.tileHeight)),
          (this._tx = this._dx),
          (this._ty = this._dy),
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (var a = this._startY; a < this._startY + this._maxY; a++) {
          this._column = this.layer.data[a];
          for (var b = this._startX; b < this._startX + this._maxX; b++) {
            var e = this.tileset.tiles[this._column[b] - 1];
            e &&
              this.context.drawImage(
                this.tileset.image,
                e.x,
                e.y,
                this.tileWidth,
                this.tileHeight,
                Math.floor(this._tx),
                Math.floor(this._ty),
                this.tileWidth,
                this.tileHeight
              ),
              (this._tx += this.tileWidth);
          }
          (this._tx = this._dx), (this._ty += this.tileHeight);
        }
        return (
          this.game.renderType == d.WEBGL &&
            c.texturesToUpdate.push(this.baseTexture),
          (this.dirty = !1),
          this.tilemap.dirty && (this.tilemap.dirty = !1),
          !0
        );
      }
    }),
    (d.TilemapLayer.prototype.deltaAbsX = function () {
      return this.deltaX() > 0 ? this.deltaX() : -this.deltaX();
    }),
    (d.TilemapLayer.prototype.deltaAbsY = function () {
      return this.deltaY() > 0 ? this.deltaY() : -this.deltaY();
    }),
    (d.TilemapLayer.prototype.deltaX = function () {
      return this._dx - this._prevX;
    }),
    (d.TilemapLayer.prototype.deltaY = function () {
      return this._dy - this._prevY;
    }),
    Object.defineProperty(d.TilemapLayer.prototype, "scrollX", {
      get: function () {
        return this._x;
      },
      set: function (a) {
        a !== this._x &&
          a >= 0 &&
          this.layer &&
          ((this._x = a),
          this._x > this.widthInPixels - this.renderWidth &&
            (this._x = this.widthInPixels - this.renderWidth),
          (this._startX = this.game.math.floor(this._x / this.tileWidth)),
          this._startX < 0 && (this._startX = 0),
          this._startX + this._maxX > this.layer.width &&
            (this._startX = this.layer.width - this._maxX),
          (this.dirty = !0));
      },
    }),
    Object.defineProperty(d.TilemapLayer.prototype, "scrollY", {
      get: function () {
        return this._y;
      },
      set: function (a) {
        a !== this._y &&
          a >= 0 &&
          this.layer &&
          ((this._y = a),
          this._y > this.heightInPixels - this.renderHeight &&
            (this._y = this.heightInPixels - this.renderHeight),
          (this._startY = this.game.math.floor(this._y / this.tileHeight)),
          this._startY < 0 && (this._startY = 0),
          this._startY + this._maxY > this.layer.height &&
            (this._startY = this.layer.height - this._maxY),
          (this.dirty = !0));
      },
    }),
    (d.TilemapParser = {
      tileset: function (a, b, c, e, f, g, h) {
        var i = a.cache.getTilesetImage(b);
        if (null == i) return null;
        var j = i.width,
          k = i.height;
        0 >= c && (c = Math.floor(-j / Math.min(-1, c))),
          0 >= e && (e = Math.floor(-k / Math.min(-1, e)));
        var l = Math.round(j / c),
          m = Math.round(k / e),
          n = l * m;
        if (
          (-1 !== f && (n = f), 0 === j || 0 === k || c > j || e > k || 0 === n)
        )
          return (
            console.warn(
              "Phaser.TilemapParser.tileSet: width/height zero or width/height < given tileWidth/tileHeight"
            ),
            null
          );
        for (
          var o = g, p = g, q = new d.Tileset(i, b, c, e, g, h), r = 0;
          n > r;
          r++
        )
          q.addTile(new d.Tile(q, r, o, p, c, e)),
            (o += c + h),
            o === j && ((o = g), (p += e + h));
        return q;
      },
      parse: function (a, b, c) {
        return c === d.Tilemap.CSV
          ? this.parseCSV(b)
          : c === d.Tilemap.TILED_JSON
          ? this.parseTiledJSON(b)
          : void 0;
      },
      parseCSV: function (a) {
        a = a.trim();
        for (
          var b = [], c = a.split("\n"), d = c.length, e = 0, f = 0;
          f < c.length;
          f++
        ) {
          b[f] = [];
          for (var g = c[f].split(","), h = 0; h < g.length; h++)
            b[f][h] = parseInt(g[h], 10);
          0 === e && (e = g.length);
        }
        return [
          {
            name: "csv",
            width: e,
            height: d,
            alpha: 1,
            visible: !0,
            indexes: [],
            tileMargin: 0,
            tileSpacing: 0,
            data: b,
          },
        ];
      },
      parseTiledJSON: function (a) {
        for (var b = [], c = 0; c < a.layers.length; c++)
          if (a.layers[c].data) {
            for (
              var d,
                e = {
                  name: a.layers[c].name,
                  width: a.layers[c].width,
                  height: a.layers[c].height,
                  alpha: a.layers[c].opacity,
                  visible: a.layers[c].visible,
                  indexes: [],
                  tileMargin: a.tilesets[0].margin,
                  tileSpacing: a.tilesets[0].spacing,
                },
                f = [],
                g = 0,
                h = 0;
              h < a.layers[c].data.length;
              h++
            )
              0 === g && (d = []),
                d.push(a.layers[c].data[h]),
                g++,
                g == a.layers[c].width && (f.push(d), (g = 0));
            (e.data = f), b.push(e);
          }
        return b;
      },
    }),
    (d.Tileset = function (a, b, c, d, e, f) {
      "undefined" == typeof e && (e = 0),
        "undefined" == typeof f && (f = 0),
        (this.key = b),
        (this.image = a),
        (this.tileWidth = c),
        (this.tileHeight = d),
        (this.margin = e),
        (this.spacing = f),
        (this.tiles = []);
    }),
    (d.Tileset.prototype = {
      addTile: function (a) {
        return this.tiles.push(a), a;
      },
      getTile: function (a) {
        return this.tiles[a] ? this.tiles[a] : null;
      },
      setSpacing: function (a, b) {
        (this.tileMargin = a), (this.tileSpacing = b);
      },
      canCollide: function (a) {
        return this.tiles[a] ? this.tiles[a].collideNone : null;
      },
      checkTileIndex: function (a) {
        return this.tiles[a];
      },
      setCollisionRange: function (a, b, c, d, e, f) {
        if (this.tiles[a] && this.tiles[b] && b > a)
          for (var g = a; b >= g; g++) this.tiles[g].setCollision(c, d, e, f);
      },
      setCollision: function (a, b, c, d, e) {
        this.tiles[a] && this.tiles[a].setCollision(b, c, d, e);
      },
    }),
    Object.defineProperty(d.Tileset.prototype, "total", {
      get: function () {
        return this.tiles.length;
      },
    }),
    (c.CanvasRenderer.prototype.render = function (a) {
      (c.texturesToUpdate.length = 0),
        (c.texturesToDestroy.length = 0),
        c.visibleCount++,
        a.updateTransform(),
        this.context.setTransform(1, 0, 0, 1, 0, 0),
        this.context.clearRect(0, 0, this.width, this.height),
        this.renderDisplayObject(a),
        c.Texture.frameUpdates.length > 0 &&
          (c.Texture.frameUpdates.length = 0);
    }),
    (c.CanvasRenderer.prototype.renderDisplayObject = function (a) {
      var b = a.last._iNext;
      a = a.first;
      do
        if (a.visible)
          if (a.renderable && 0 !== a.alpha) {
            if (a instanceof c.Sprite)
              a.texture.frame &&
                ((this.context.globalAlpha = a.worldAlpha),
                a.texture.trimmed
                  ? this.context.setTransform(
                      a.worldTransform[0],
                      a.worldTransform[3],
                      a.worldTransform[1],
                      a.worldTransform[4],
                      a.worldTransform[2] + a.texture.trim.x,
                      a.worldTransform[5] + a.texture.trim.y
                    )
                  : this.context.setTransform(
                      a.worldTransform[0],
                      a.worldTransform[3],
                      a.worldTransform[1],
                      a.worldTransform[4],
                      a.worldTransform[2],
                      a.worldTransform[5]
                    ),
                this.context.drawImage(
                  a.texture.baseTexture.source,
                  a.texture.frame.x,
                  a.texture.frame.y,
                  a.texture.frame.width,
                  a.texture.frame.height,
                  a.anchor.x * -a.texture.frame.width,
                  a.anchor.y * -a.texture.frame.height,
                  a.texture.frame.width,
                  a.texture.frame.height
                ));
            else if (a instanceof c.Strip)
              this.context.setTransform(
                a.worldTransform[0],
                a.worldTransform[3],
                a.worldTransform[1],
                a.worldTransform[4],
                a.worldTransform[2],
                a.worldTransform[5]
              ),
                this.renderStrip(a);
            else if (a instanceof c.TilingSprite)
              this.context.setTransform(
                a.worldTransform[0],
                a.worldTransform[3],
                a.worldTransform[1],
                a.worldTransform[4],
                a.worldTransform[2],
                a.worldTransform[5]
              ),
                this.renderTilingSprite(a);
            else if (a instanceof c.CustomRenderable) a.renderCanvas(this);
            else if (a instanceof c.Graphics)
              this.context.setTransform(
                a.worldTransform[0],
                a.worldTransform[3],
                a.worldTransform[1],
                a.worldTransform[4],
                a.worldTransform[2],
                a.worldTransform[5]
              ),
                c.CanvasGraphics.renderGraphics(a, this.context);
            else if (a instanceof c.FilterBlock)
              if (a.open) {
                this.context.save();
                var d = a.mask.alpha,
                  e = a.mask.worldTransform;
                this.context.setTransform(e[0], e[3], e[1], e[4], e[2], e[5]),
                  (a.mask.worldAlpha = 0.5),
                  (this.context.worldAlpha = 0),
                  c.CanvasGraphics.renderGraphicsMask(a.mask, this.context),
                  this.context.clip(),
                  (a.mask.worldAlpha = d);
              } else this.context.restore();
            a = a._iNext;
          } else a = a._iNext;
        else a = a.last._iNext;
      while (a != b);
    }),
    (c.WebGLBatch.prototype.update = function () {
      for (
        var a,
          b,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r = 0,
          s = this.head;
        s;

      ) {
        if (s.vcount === c.visibleCount) {
          if (
            ((b = s.texture.frame.width),
            (d = s.texture.frame.height),
            (e = s.anchor.x),
            (f = s.anchor.y),
            (g = b * (1 - e)),
            (h = b * -e),
            (i = d * (1 - f)),
            (j = d * -f),
            (k = 8 * r),
            (a = s.worldTransform),
            (l = a[0]),
            (m = a[3]),
            (n = a[1]),
            (o = a[4]),
            (p = a[2]),
            (q = a[5]),
            s.texture.trimmed &&
              ((p += s.texture.trim.x), (q += s.texture.trim.y)),
            (this.verticies[k + 0] = l * h + n * j + p),
            (this.verticies[k + 1] = o * j + m * h + q),
            (this.verticies[k + 2] = l * g + n * j + p),
            (this.verticies[k + 3] = o * j + m * g + q),
            (this.verticies[k + 4] = l * g + n * i + p),
            (this.verticies[k + 5] = o * i + m * g + q),
            (this.verticies[k + 6] = l * h + n * i + p),
            (this.verticies[k + 7] = o * i + m * h + q),
            s.updateFrame || s.texture.updateFrame)
          ) {
            this.dirtyUVS = !0;
            var t = s.texture,
              u = t.frame,
              v = t.baseTexture.width,
              w = t.baseTexture.height;
            (this.uvs[k + 0] = u.x / v),
              (this.uvs[k + 1] = u.y / w),
              (this.uvs[k + 2] = (u.x + u.width) / v),
              (this.uvs[k + 3] = u.y / w),
              (this.uvs[k + 4] = (u.x + u.width) / v),
              (this.uvs[k + 5] = (u.y + u.height) / w),
              (this.uvs[k + 6] = u.x / v),
              (this.uvs[k + 7] = (u.y + u.height) / w),
              (s.updateFrame = !1);
          }
          if (s.cacheAlpha != s.worldAlpha) {
            s.cacheAlpha = s.worldAlpha;
            var x = 4 * r;
            (this.colors[x] =
              this.colors[x + 1] =
              this.colors[x + 2] =
              this.colors[x + 3] =
                s.worldAlpha),
              (this.dirtyColors = !0);
          }
        } else
          (k = 8 * r),
            (this.verticies[k + 0] = 0),
            (this.verticies[k + 1] = 0),
            (this.verticies[k + 2] = 0),
            (this.verticies[k + 3] = 0),
            (this.verticies[k + 4] = 0),
            (this.verticies[k + 5] = 0),
            (this.verticies[k + 6] = 0),
            (this.verticies[k + 7] = 0);
        r++, (s = s.__next);
      }
    }),
    d
  );
});
