/* jumble.js */
(function (t) {
  var r = function (t, r, n, i, a) {
    (this.el = t),
      (this.col = r),
      (this.rgb2 = n ? n : !1),
      (this.bright = i ? !0 : !1),
      (this.satuation = a ? !0 : !1),
      (this.num = t.html().length),
      (this.pin = ~~(Math.random() * 1e3)),
      this.init();
  };
  (r.prototype.init = function () {
    var r = 0,
      n = this.pin,
      i = t.map(this.el.text().split(""), function (t) {
        return r++, '<span class="' + n + "jumble_" + r + '">' + t + "</span>";
      });
    this.el.html(i.join("")), this.format();
  }),
    (r.prototype.format = function () {
      for (var t = 1; t <= this.num; t++) {
        var r = this.swatch();
        this.el.children("." + this.pin + "jumble_" + t).css("color", r);
      }
    }),
    (r.prototype.swatch = function () {
      var t;
      if (this.col) {
        var r = this.hsl(this.col);
        t = "rgb(" + this.filter(r) + ")";
      } else
        t =
          "#" + (16777216 + Math.random() * 16777215).toString(16).substr(1, 6);
      return t;
    }),
    (r.prototype.filter = function (t) {
      function r(t, r) {
        return ~~(Math.random() * (r - t + 1) + t);
      }
      var n = t,
        i = t[2],
        a = i / 2,
        o = i;
      this.bright &&
        (o =
          30 > i
            ? i + Math.random() * i
            : i > 70
            ? i - Math.random() * i
            : i - a + Math.random() * i);
      var h = t[0],
        s = t[1];
      if (this.rgb2) {
        var e = this.hsl(this.rgb2),
          u = t[0],
          c = e[0];
        h = r(u, c);
      }
      return (
        this.satuation && (s = ~~(Math.random() * 100)),
        (n[0] = h),
        (n[1] = s),
        (n[2] = o),
        this.rgb(n)
      );
    }),
    (t.fn.jumble = function (i, a, o, h, s) {
      var e = t(this),
        u = s ? s : !1;
      return (
        t(this).each(function () {
          var s = t(this),
            e = !0;
          n.any() && (e = !1),
            u && e
              ? setInterval(function () {
                  new r(s, i, a, o, h);
                }, u)
              : new r(s, i, a, o, h);
        }),
        e
      );
    }),
    (r.prototype.colourFilter = function () {
      var t = this.colours;
      (t.c1 = this.colstep(t.c1)),
        t.c1.push(t.alpha),
        (t.c2 = this.colstep(t.c2)),
        t.c2.push(t.alpha),
        (t.shade = this.colstep(t.shade)),
        t.shade.push(t.alpha);
    }),
    (r.prototype.colstep = function (t) {
      var r = this.hsl(t),
        n = this.colours.wheel,
        i = 360 * n;
      return (
        (r[0] =
          r[0] - ~~((Math.random() * i) / 2) + ~~((Math.random() * i) / 2)),
        (r[1] = 100 * n),
        (r[2] = 30 * this.colours.light),
        this.rgb(r)
      );
    }),
    (r.prototype.hsl = function (t) {
      var r = t[0] / 255,
        n = t[1] / 255,
        i = t[2] / 255,
        a = Math.max(r, n, i),
        o = Math.min(r, n, i),
        h = (a + o) / 2,
        s = 0,
        e = 0;
      a != o &&
        ((s = 0.5 > h ? (a - o) / (a + o) : (a - o) / (2 - a - o)),
        (e =
          r == a
            ? (n - i) / (a - o)
            : n == a
            ? 2 + (i - r) / (a - o)
            : 4 + (r - n) / (a - o))),
        (h = 100 * h),
        (s = 100 * s),
        (e = 60 * e),
        0 > e && (e += 360);
      var u = [e, s, h];
      return u;
    }),
    (r.prototype.rgb = function (t) {
      var r,
        n,
        i,
        a,
        o,
        h,
        s = t[0],
        e = t[1],
        u = t[2];
      return (
        (e /= 100),
        (u /= 100),
        0 == e
          ? (a = o = h = 255 * u)
          : ((n = 0.5 >= u ? u * (e + 1) : u + e - u * e),
            (r = 2 * u - n),
            (i = s / 360),
            (a = this.hue2rgb(r, n, i + 1 / 3)),
            (o = this.hue2rgb(r, n, i)),
            (h = this.hue2rgb(r, n, i - 1 / 3))),
        [Math.round(a), Math.round(o), Math.round(h)]
      );
    }),
    (r.prototype.hue2rgb = function (t, r, n) {
      var i;
      return (
        0 > n ? (n += 1) : n > 1 && (n -= 1),
        (i =
          1 > 6 * n
            ? t + 6 * (r - t) * n
            : 1 > 2 * n
            ? r
            : 2 > 3 * n
            ? t + 6 * (r - t) * (2 / 3 - n)
            : t),
        255 * i
      );
    });
  var n = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        n.Android() || n.BlackBerry() || n.iOS() || n.Opera() || n.Windows()
      );
    },
  };
})(jQuery);
