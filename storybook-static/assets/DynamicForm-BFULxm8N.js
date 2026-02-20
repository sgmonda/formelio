var Iu = Object.defineProperty;
var Au = (n, r, e) => (r in n ? Iu(n, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (n[r] = e));
var j = (n, r, e) => Au(n, typeof r != 'symbol' ? r + '' : r, e);
import { r as Ss, j as H, O as Fu } from './index-Cws_IRuu.js';
import { g as Cs, r as y, o as Rr, R as O } from './index-C5e9SFkp.js';
const Nu = '_formelio_1557f_1',
  Lu = '_group_1557f_7',
  Yu = '_fieldWrapper_1557f_25',
  Vu = '_field_1557f_25',
  qu = '_icon_1557f_33',
  $u = '_checkbox_1557f_33',
  Hu = '_isFocused_1557f_43',
  Wu = '_isErrored_1557f_43',
  ju = '_isDisabled_1557f_54',
  Bu = '_isEmpty_1557f_80',
  Uu = '_hintTarget_1557f_85',
  zu = '_hint_1557f_85',
  Qu = '_hasHint_1557f_131',
  Ku = '_arrow_1557f_176',
  Gu = '_datepicker_1557f_216',
  Xu = '_header_1557f_225',
  De = {
    formelio: Nu,
    group: Lu,
    fieldWrapper: Yu,
    field: Vu,
    icon: qu,
    checkbox: $u,
    isFocused: Hu,
    isErrored: Wu,
    isDisabled: ju,
    isEmpty: Bu,
    hintTarget: Uu,
    hint: zu,
    hasHint: Qu,
    arrow: Ku,
    datepicker: Gu,
    header: Xu,
  };
var ya = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var $i;
function Zu() {
  return (
    $i ||
      (($i = 1),
      (function (n) {
        (function () {
          var r = {}.hasOwnProperty;
          function e() {
            for (var i = '', o = 0; o < arguments.length; o++) {
              var l = arguments[o];
              l && (i = a(i, t(l)));
            }
            return i;
          }
          function t(i) {
            if (typeof i == 'string' || typeof i == 'number') return i;
            if (typeof i != 'object') return '';
            if (Array.isArray(i)) return e.apply(null, i);
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes('[native code]'))
              return i.toString();
            var o = '';
            for (var l in i) r.call(i, l) && i[l] && (o = a(o, l));
            return o;
          }
          function a(i, o) {
            return o ? (i ? i + ' ' + o : i + o) : i;
          }
          n.exports ? ((e.default = e), (n.exports = e)) : (window.classNames = e);
        })();
      })(ya)),
    ya.exports
  );
}
var Ju = Zu();
const Ht = Cs(Ju);
function Qt(n) {
  '@babel/helpers - typeof';
  return (
    (Qt =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r && typeof Symbol == 'function' && r.constructor === Symbol && r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          }),
    Qt(n)
  );
}
function ec(n, r) {
  if (Qt(n) != 'object' || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var t = e.call(n, r);
    if (Qt(t) != 'object') return t;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (r === 'string' ? String : Number)(n);
}
function Ts(n) {
  var r = ec(n, 'string');
  return Qt(r) == 'symbol' ? r : r + '';
}
function In(n, r, e) {
  return (
    (r = Ts(r)) in n
      ? Object.defineProperty(n, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
      : (n[r] = e),
    n
  );
}
function Hi(n, r) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(n);
    (r &&
      (t = t.filter(function (a) {
        return Object.getOwnPropertyDescriptor(n, a).enumerable;
      })),
      e.push.apply(e, t));
  }
  return e;
}
function Q(n) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? Hi(Object(e), !0).forEach(function (t) {
          In(n, t, e[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e))
        : Hi(Object(e)).forEach(function (t) {
            Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t));
          });
  }
  return n;
}
function tc(n) {
  if (Array.isArray(n)) return n;
}
function nc(n, r) {
  var e = n == null ? null : (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator'];
  if (e != null) {
    var t,
      a,
      i,
      o,
      l = [],
      s = !0,
      u = !1;
    try {
      if (((i = (e = e.call(n)).next), r === 0)) {
        if (Object(e) !== e) return;
        s = !1;
      } else for (; !(s = (t = i.call(e)).done) && (l.push(t.value), l.length !== r); s = !0);
    } catch (c) {
      ((u = !0), (a = c));
    } finally {
      try {
        if (!s && e.return != null && ((o = e.return()), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return l;
  }
}
function $a(n, r) {
  (r == null || r > n.length) && (r = n.length);
  for (var e = 0, t = Array(r); e < r; e++) t[e] = n[e];
  return t;
}
function Os(n, r) {
  if (n) {
    if (typeof n == 'string') return $a(n, r);
    var e = {}.toString.call(n).slice(8, -1);
    return (
      e === 'Object' && n.constructor && (e = n.constructor.name),
      e === 'Map' || e === 'Set'
        ? Array.from(n)
        : e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
          ? $a(n, r)
          : void 0
    );
  }
}
function rc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xt(n, r) {
  return tc(n) || nc(n, r) || Os(n, r) || rc();
}
function ac(n, r) {
  if (n == null) return {};
  var e = {};
  for (var t in n)
    if ({}.hasOwnProperty.call(n, t)) {
      if (r.indexOf(t) !== -1) continue;
      e[t] = n[t];
    }
  return e;
}
function Pt(n, r) {
  if (n == null) return {};
  var e,
    t,
    a = ac(n, r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    for (t = 0; t < i.length; t++)
      ((e = i[t]), r.indexOf(e) === -1 && {}.propertyIsEnumerable.call(n, e) && (a[e] = n[e]));
  }
  return a;
}
var ic = [
  'defaultInputValue',
  'defaultMenuIsOpen',
  'defaultValue',
  'inputValue',
  'menuIsOpen',
  'onChange',
  'onInputChange',
  'onMenuClose',
  'onMenuOpen',
  'value',
];
function oc(n) {
  var r = n.defaultInputValue,
    e = r === void 0 ? '' : r,
    t = n.defaultMenuIsOpen,
    a = t === void 0 ? !1 : t,
    i = n.defaultValue,
    o = i === void 0 ? null : i,
    l = n.inputValue,
    s = n.menuIsOpen,
    u = n.onChange,
    c = n.onInputChange,
    d = n.onMenuClose,
    f = n.onMenuOpen,
    p = n.value,
    v = Pt(n, ic),
    m = y.useState(l !== void 0 ? l : e),
    h = xt(m, 2),
    g = h[0],
    w = h[1],
    D = y.useState(s !== void 0 ? s : a),
    x = xt(D, 2),
    b = x[0],
    C = x[1],
    k = y.useState(p !== void 0 ? p : o),
    T = xt(k, 2),
    _ = T[0],
    I = T[1],
    P = y.useCallback(
      function (q, X) {
        (typeof u == 'function' && u(q, X), I(q));
      },
      [u]
    ),
    E = y.useCallback(
      function (q, X) {
        var se;
        (typeof c == 'function' && (se = c(q, X)), w(se !== void 0 ? se : q));
      },
      [c]
    ),
    L = y.useCallback(
      function () {
        (typeof f == 'function' && f(), C(!0));
      },
      [f]
    ),
    B = y.useCallback(
      function () {
        (typeof d == 'function' && d(), C(!1));
      },
      [d]
    ),
    N = l !== void 0 ? l : g,
    R = s !== void 0 ? s : b,
    Y = p !== void 0 ? p : _;
  return Q(
    Q({}, v),
    {},
    { inputValue: N, menuIsOpen: R, onChange: P, onInputChange: E, onMenuClose: B, onMenuOpen: L, value: Y }
  );
}
function K() {
  return (
    (K = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var r = 1; r < arguments.length; r++) {
            var e = arguments[r];
            for (var t in e) ({}).hasOwnProperty.call(e, t) && (n[t] = e[t]);
          }
          return n;
        }),
    K.apply(null, arguments)
  );
}
function sc(n, r) {
  if (!(n instanceof r)) throw new TypeError('Cannot call a class as a function');
}
function Wi(n, r) {
  for (var e = 0; e < r.length; e++) {
    var t = r[e];
    ((t.enumerable = t.enumerable || !1),
      (t.configurable = !0),
      'value' in t && (t.writable = !0),
      Object.defineProperty(n, Ts(t.key), t));
  }
}
function lc(n, r, e) {
  return (r && Wi(n.prototype, r), e && Wi(n, e), Object.defineProperty(n, 'prototype', { writable: !1 }), n);
}
function Ha(n, r) {
  return (
    (Ha = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    Ha(n, r)
  );
}
function uc(n, r) {
  if (typeof r != 'function' && r !== null) throw new TypeError('Super expression must either be null or a function');
  ((n.prototype = Object.create(r && r.prototype, { constructor: { value: n, writable: !0, configurable: !0 } })),
    Object.defineProperty(n, 'prototype', { writable: !1 }),
    r && Ha(n, r));
}
function Ir(n) {
  return (
    (Ir = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ir(n)
  );
}
function _s() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (_s = function () {
    return !!n;
  })();
}
function cc(n) {
  if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function dc(n, r) {
  if (r && (Qt(r) == 'object' || typeof r == 'function')) return r;
  if (r !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return cc(n);
}
function fc(n) {
  var r = _s();
  return function () {
    var e,
      t = Ir(n);
    if (r) {
      var a = Ir(this).constructor;
      e = Reflect.construct(t, arguments, a);
    } else e = t.apply(this, arguments);
    return dc(this, e);
  };
}
function pc(n) {
  if (Array.isArray(n)) return $a(n);
}
function mc(n) {
  if ((typeof Symbol < 'u' && n[Symbol.iterator] != null) || n['@@iterator'] != null) return Array.from(n);
}
function hc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ui(n) {
  return pc(n) || mc(n) || Os(n) || hc();
}
function vc(n) {
  if (n.sheet) return n.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === n) return document.styleSheets[r];
}
function gc(n) {
  var r = document.createElement('style');
  return (
    r.setAttribute('data-emotion', n.key),
    n.nonce !== void 0 && r.setAttribute('nonce', n.nonce),
    r.appendChild(document.createTextNode('')),
    r.setAttribute('data-s', ''),
    r
  );
}
var yc = (function () {
    function n(e) {
      var t = this;
      ((this._insertTag = function (a) {
        var i;
        (t.tags.length === 0
          ? t.insertionPoint
            ? (i = t.insertionPoint.nextSibling)
            : t.prepend
              ? (i = t.container.firstChild)
              : (i = t.before)
          : (i = t.tags[t.tags.length - 1].nextSibling),
          t.container.insertBefore(a, i),
          t.tags.push(a));
      }),
        (this.isSpeedy = e.speedy === void 0 ? !0 : e.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = e.nonce),
        (this.key = e.key),
        (this.container = e.container),
        (this.prepend = e.prepend),
        (this.insertionPoint = e.insertionPoint),
        (this.before = null));
    }
    var r = n.prototype;
    return (
      (r.hydrate = function (t) {
        t.forEach(this._insertTag);
      }),
      (r.insert = function (t) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(gc(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = vc(a);
          try {
            i.insertRule(t, i.cssRules.length);
          } catch {}
        } else a.appendChild(document.createTextNode(t));
        this.ctr++;
      }),
      (r.flush = function () {
        (this.tags.forEach(function (t) {
          var a;
          return (a = t.parentNode) == null ? void 0 : a.removeChild(t);
        }),
          (this.tags = []),
          (this.ctr = 0));
      }),
      n
    );
  })(),
  Fe = '-ms-',
  Ar = '-moz-',
  ue = '-webkit-',
  Ps = 'comm',
  ci = 'rule',
  di = 'decl',
  bc = '@import',
  Ms = '@keyframes',
  wc = '@layer',
  Dc = Math.abs,
  ra = String.fromCharCode,
  xc = Object.assign;
function kc(n, r) {
  return Ie(n, 0) ^ 45 ? (((((((r << 2) ^ Ie(n, 0)) << 2) ^ Ie(n, 1)) << 2) ^ Ie(n, 2)) << 2) ^ Ie(n, 3) : 0;
}
function Es(n) {
  return n.trim();
}
function Sc(n, r) {
  return (n = r.exec(n)) ? n[0] : n;
}
function ce(n, r, e) {
  return n.replace(r, e);
}
function Wa(n, r) {
  return n.indexOf(r);
}
function Ie(n, r) {
  return n.charCodeAt(r) | 0;
}
function qn(n, r, e) {
  return n.slice(r, e);
}
function it(n) {
  return n.length;
}
function fi(n) {
  return n.length;
}
function ar(n, r) {
  return (r.push(n), n);
}
function Cc(n, r) {
  return n.map(r).join('');
}
var aa = 1,
  fn = 1,
  Rs = 0,
  We = 0,
  _e = 0,
  Sn = '';
function ia(n, r, e, t, a, i, o) {
  return { value: n, root: r, parent: e, type: t, props: a, children: i, line: aa, column: fn, length: o, return: '' };
}
function Tn(n, r) {
  return xc(ia('', null, null, '', null, null, 0), n, { length: -n.length }, r);
}
function Tc() {
  return _e;
}
function Oc() {
  return ((_e = We > 0 ? Ie(Sn, --We) : 0), fn--, _e === 10 && ((fn = 1), aa--), _e);
}
function Be() {
  return ((_e = We < Rs ? Ie(Sn, We++) : 0), fn++, _e === 10 && ((fn = 1), aa++), _e);
}
function ft() {
  return Ie(Sn, We);
}
function yr() {
  return We;
}
function Kn(n, r) {
  return qn(Sn, n, r);
}
function $n(n) {
  switch (n) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Is(n) {
  return ((aa = fn = 1), (Rs = it((Sn = n))), (We = 0), []);
}
function As(n) {
  return ((Sn = ''), n);
}
function br(n) {
  return Es(Kn(We - 1, ja(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function _c(n) {
  for (; (_e = ft()) && _e < 33; ) Be();
  return $n(n) > 2 || $n(_e) > 3 ? '' : ' ';
}
function Pc(n, r) {
  for (; --r && Be() && !(_e < 48 || _e > 102 || (_e > 57 && _e < 65) || (_e > 70 && _e < 97)); );
  return Kn(n, yr() + (r < 6 && ft() == 32 && Be() == 32));
}
function ja(n) {
  for (; Be(); )
    switch (_e) {
      case n:
        return We;
      case 34:
      case 39:
        n !== 34 && n !== 39 && ja(_e);
        break;
      case 40:
        n === 41 && ja(n);
        break;
      case 92:
        Be();
        break;
    }
  return We;
}
function Mc(n, r) {
  for (; Be() && n + _e !== 57; ) if (n + _e === 84 && ft() === 47) break;
  return '/*' + Kn(r, We - 1) + '*' + ra(n === 47 ? n : Be());
}
function Ec(n) {
  for (; !$n(ft()); ) Be();
  return Kn(n, We);
}
function Rc(n) {
  return As(wr('', null, null, null, [''], (n = Is(n)), 0, [0], n));
}
function wr(n, r, e, t, a, i, o, l, s) {
  for (
    var u = 0, c = 0, d = o, f = 0, p = 0, v = 0, m = 1, h = 1, g = 1, w = 0, D = '', x = a, b = i, C = t, k = D;
    h;
  )
    switch (((v = w), (w = Be()))) {
      case 40:
        if (v != 108 && Ie(k, d - 1) == 58) {
          Wa((k += ce(br(w), '&', '&\f')), '&\f') != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += br(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += _c(v);
        break;
      case 92:
        k += Pc(yr() - 1, 7);
        continue;
      case 47:
        switch (ft()) {
          case 42:
          case 47:
            ar(Ic(Mc(Be(), yr()), r, e), s);
            break;
          default:
            k += '/';
        }
        break;
      case 123 * m:
        l[u++] = it(k) * g;
      case 125 * m:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            h = 0;
          case 59 + c:
            (g == -1 && (k = ce(k, /\f/g, '')),
              p > 0 && it(k) - d && ar(p > 32 ? Bi(k + ';', t, e, d - 1) : Bi(ce(k, ' ', '') + ';', t, e, d - 2), s));
            break;
          case 59:
            k += ';';
          default:
            if ((ar((C = ji(k, r, e, u, c, a, l, D, (x = []), (b = []), d)), i), w === 123))
              if (c === 0) wr(k, r, C, C, x, i, d, l, b);
              else
                switch (f === 99 && Ie(k, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    wr(n, C, C, t && ar(ji(n, C, C, 0, 0, a, l, D, a, (x = []), d), b), a, b, d, l, t ? x : b);
                    break;
                  default:
                    wr(k, C, C, C, [''], b, 0, l, b);
                }
        }
        ((u = c = p = 0), (m = g = 1), (D = k = ''), (d = o));
        break;
      case 58:
        ((d = 1 + it(k)), (p = v));
      default:
        if (m < 1) {
          if (w == 123) --m;
          else if (w == 125 && m++ == 0 && Oc() == 125) continue;
        }
        switch (((k += ra(w)), w * m)) {
          case 38:
            g = c > 0 ? 1 : ((k += '\f'), -1);
            break;
          case 44:
            ((l[u++] = (it(k) - 1) * g), (g = 1));
            break;
          case 64:
            (ft() === 45 && (k += br(Be())), (f = ft()), (c = d = it((D = k += Ec(yr())))), w++);
            break;
          case 45:
            v === 45 && it(k) == 2 && (m = 0);
        }
    }
  return i;
}
function ji(n, r, e, t, a, i, o, l, s, u, c) {
  for (var d = a - 1, f = a === 0 ? i : [''], p = fi(f), v = 0, m = 0, h = 0; v < t; ++v)
    for (var g = 0, w = qn(n, d + 1, (d = Dc((m = o[v])))), D = n; g < p; ++g)
      (D = Es(m > 0 ? f[g] + ' ' + w : ce(w, /&\f/g, f[g]))) && (s[h++] = D);
  return ia(n, r, e, a === 0 ? ci : l, s, u, c);
}
function Ic(n, r, e) {
  return ia(n, r, e, Ps, ra(Tc()), qn(n, 2, -2), 0);
}
function Bi(n, r, e, t) {
  return ia(n, r, e, di, qn(n, 0, t), qn(n, t + 1, -1), t);
}
function un(n, r) {
  for (var e = '', t = fi(n), a = 0; a < t; a++) e += r(n[a], a, n, r) || '';
  return e;
}
function Ac(n, r, e, t) {
  switch (n.type) {
    case wc:
      if (n.children.length) break;
    case bc:
    case di:
      return (n.return = n.return || n.value);
    case Ps:
      return '';
    case Ms:
      return (n.return = n.value + '{' + un(n.children, t) + '}');
    case ci:
      n.value = n.props.join(',');
  }
  return it((e = un(n.children, t))) ? (n.return = n.value + '{' + e + '}') : '';
}
function Fc(n) {
  var r = fi(n);
  return function (e, t, a, i) {
    for (var o = '', l = 0; l < r; l++) o += n[l](e, t, a, i) || '';
    return o;
  };
}
function Nc(n) {
  return function (r) {
    r.root || ((r = r.return) && n(r));
  };
}
function Fs(n) {
  var r = Object.create(null);
  return function (e) {
    return (r[e] === void 0 && (r[e] = n(e)), r[e]);
  };
}
var Lc = function (r, e, t) {
    for (var a = 0, i = 0; (a = i), (i = ft()), a === 38 && i === 12 && (e[t] = 1), !$n(i); ) Be();
    return Kn(r, We);
  },
  Yc = function (r, e) {
    var t = -1,
      a = 44;
    do
      switch ($n(a)) {
        case 0:
          (a === 38 && ft() === 12 && (e[t] = 1), (r[t] += Lc(We - 1, e, t)));
          break;
        case 2:
          r[t] += br(a);
          break;
        case 4:
          if (a === 44) {
            ((r[++t] = ft() === 58 ? '&\f' : ''), (e[t] = r[t].length));
            break;
          }
        default:
          r[t] += ra(a);
      }
    while ((a = Be()));
    return r;
  },
  Vc = function (r, e) {
    return As(Yc(Is(r), e));
  },
  Ui = new WeakMap(),
  qc = function (r) {
    if (!(r.type !== 'rule' || !r.parent || r.length < 1)) {
      for (var e = r.value, t = r.parent, a = r.column === t.column && r.line === t.line; t.type !== 'rule'; )
        if (((t = t.parent), !t)) return;
      if (!(r.props.length === 1 && e.charCodeAt(0) !== 58 && !Ui.get(t)) && !a) {
        Ui.set(r, !0);
        for (var i = [], o = Vc(e, i), l = t.props, s = 0, u = 0; s < o.length; s++)
          for (var c = 0; c < l.length; c++, u++) r.props[u] = i[s] ? o[s].replace(/&\f/g, l[c]) : l[c] + ' ' + o[s];
      }
    }
  },
  $c = function (r) {
    if (r.type === 'decl') {
      var e = r.value;
      e.charCodeAt(0) === 108 && e.charCodeAt(2) === 98 && ((r.return = ''), (r.value = ''));
    }
  };
function Ns(n, r) {
  switch (kc(n, r)) {
    case 5103:
      return ue + 'print-' + n + n;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ue + n + n;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ue + n + Ar + n + Fe + n + n;
    case 6828:
    case 4268:
      return ue + n + Fe + n + n;
    case 6165:
      return ue + n + Fe + 'flex-' + n + n;
    case 5187:
      return ue + n + ce(n, /(\w+).+(:[^]+)/, ue + 'box-$1$2' + Fe + 'flex-$1$2') + n;
    case 5443:
      return ue + n + Fe + 'flex-item-' + ce(n, /flex-|-self/, '') + n;
    case 4675:
      return ue + n + Fe + 'flex-line-pack' + ce(n, /align-content|flex-|-self/, '') + n;
    case 5548:
      return ue + n + Fe + ce(n, 'shrink', 'negative') + n;
    case 5292:
      return ue + n + Fe + ce(n, 'basis', 'preferred-size') + n;
    case 6060:
      return ue + 'box-' + ce(n, '-grow', '') + ue + n + Fe + ce(n, 'grow', 'positive') + n;
    case 4554:
      return ue + ce(n, /([^-])(transform)/g, '$1' + ue + '$2') + n;
    case 6187:
      return ce(ce(ce(n, /(zoom-|grab)/, ue + '$1'), /(image-set)/, ue + '$1'), n, '') + n;
    case 5495:
    case 3959:
      return ce(n, /(image-set\([^]*)/, ue + '$1$`$1');
    case 4968:
      return (
        ce(ce(n, /(.+:)(flex-)?(.*)/, ue + 'box-pack:$3' + Fe + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + ue + n + n
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ce(n, /(.+)-inline(.+)/, ue + '$1$2') + n;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (it(n) - 1 - r > 6)
        switch (Ie(n, r + 1)) {
          case 109:
            if (Ie(n, r + 4) !== 45) break;
          case 102:
            return ce(n, /(.+:)(.+)-([^]+)/, '$1' + ue + '$2-$3$1' + Ar + (Ie(n, r + 3) == 108 ? '$3' : '$2-$3')) + n;
          case 115:
            return ~Wa(n, 'stretch') ? Ns(ce(n, 'stretch', 'fill-available'), r) + n : n;
        }
      break;
    case 4949:
      if (Ie(n, r + 1) !== 115) break;
    case 6444:
      switch (Ie(n, it(n) - 3 - (~Wa(n, '!important') && 10))) {
        case 107:
          return ce(n, ':', ':' + ue) + n;
        case 101:
          return (
            ce(
              n,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' + ue + (Ie(n, 14) === 45 ? 'inline-' : '') + 'box$3$1' + ue + '$2$3$1' + Fe + '$2box$3'
            ) + n
          );
      }
      break;
    case 5936:
      switch (Ie(n, r + 11)) {
        case 114:
          return ue + n + Fe + ce(n, /[svh]\w+-[tblr]{2}/, 'tb') + n;
        case 108:
          return ue + n + Fe + ce(n, /[svh]\w+-[tblr]{2}/, 'tb-rl') + n;
        case 45:
          return ue + n + Fe + ce(n, /[svh]\w+-[tblr]{2}/, 'lr') + n;
      }
      return ue + n + Fe + n + n;
  }
  return n;
}
var Hc = function (r, e, t, a) {
    if (r.length > -1 && !r.return)
      switch (r.type) {
        case di:
          r.return = Ns(r.value, r.length);
          break;
        case Ms:
          return un([Tn(r, { value: ce(r.value, '@', '@' + ue) })], a);
        case ci:
          if (r.length)
            return Cc(r.props, function (i) {
              switch (Sc(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return un([Tn(r, { props: [ce(i, /:(read-\w+)/, ':' + Ar + '$1')] })], a);
                case '::placeholder':
                  return un(
                    [
                      Tn(r, { props: [ce(i, /:(plac\w+)/, ':' + ue + 'input-$1')] }),
                      Tn(r, { props: [ce(i, /:(plac\w+)/, ':' + Ar + '$1')] }),
                      Tn(r, { props: [ce(i, /:(plac\w+)/, Fe + 'input-$1')] }),
                    ],
                    a
                  );
              }
              return '';
            });
      }
  },
  Wc = [Hc],
  jc = function (r) {
    var e = r.key;
    if (e === 'css') {
      var t = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(t, function (m) {
        var h = m.getAttribute('data-emotion');
        h.indexOf(' ') !== -1 && (document.head.appendChild(m), m.setAttribute('data-s', ''));
      });
    }
    var a = r.stylisPlugins || Wc,
      i = {},
      o,
      l = [];
    ((o = r.container || document.head),
      Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + e + ' "]'), function (m) {
        for (var h = m.getAttribute('data-emotion').split(' '), g = 1; g < h.length; g++) i[h[g]] = !0;
        l.push(m);
      }));
    var s,
      u = [qc, $c];
    {
      var c,
        d = [
          Ac,
          Nc(function (m) {
            c.insert(m);
          }),
        ],
        f = Fc(u.concat(a, d)),
        p = function (h) {
          return un(Rc(h), f);
        };
      s = function (h, g, w, D) {
        ((c = w), p(h ? h + '{' + g.styles + '}' : g.styles), D && (v.inserted[g.name] = !0));
      };
    }
    var v = {
      key: e,
      sheet: new yc({
        key: e,
        container: o,
        nonce: r.nonce,
        speedy: r.speedy,
        prepend: r.prepend,
        insertionPoint: r.insertionPoint,
      }),
      nonce: r.nonce,
      inserted: i,
      registered: {},
      insert: s,
    };
    return (v.sheet.hydrate(l), v);
  },
  ba = { exports: {} },
  fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zi;
function Bc() {
  if (zi) return fe;
  zi = 1;
  var n = typeof Symbol == 'function' && Symbol.for,
    r = n ? Symbol.for('react.element') : 60103,
    e = n ? Symbol.for('react.portal') : 60106,
    t = n ? Symbol.for('react.fragment') : 60107,
    a = n ? Symbol.for('react.strict_mode') : 60108,
    i = n ? Symbol.for('react.profiler') : 60114,
    o = n ? Symbol.for('react.provider') : 60109,
    l = n ? Symbol.for('react.context') : 60110,
    s = n ? Symbol.for('react.async_mode') : 60111,
    u = n ? Symbol.for('react.concurrent_mode') : 60111,
    c = n ? Symbol.for('react.forward_ref') : 60112,
    d = n ? Symbol.for('react.suspense') : 60113,
    f = n ? Symbol.for('react.suspense_list') : 60120,
    p = n ? Symbol.for('react.memo') : 60115,
    v = n ? Symbol.for('react.lazy') : 60116,
    m = n ? Symbol.for('react.block') : 60121,
    h = n ? Symbol.for('react.fundamental') : 60117,
    g = n ? Symbol.for('react.responder') : 60118,
    w = n ? Symbol.for('react.scope') : 60119;
  function D(b) {
    if (typeof b == 'object' && b !== null) {
      var C = b.$$typeof;
      switch (C) {
        case r:
          switch (((b = b.type), b)) {
            case s:
            case u:
            case t:
            case i:
            case a:
            case d:
              return b;
            default:
              switch (((b = b && b.$$typeof), b)) {
                case l:
                case c:
                case v:
                case p:
                case o:
                  return b;
                default:
                  return C;
              }
          }
        case e:
          return C;
      }
    }
  }
  function x(b) {
    return D(b) === u;
  }
  return (
    (fe.AsyncMode = s),
    (fe.ConcurrentMode = u),
    (fe.ContextConsumer = l),
    (fe.ContextProvider = o),
    (fe.Element = r),
    (fe.ForwardRef = c),
    (fe.Fragment = t),
    (fe.Lazy = v),
    (fe.Memo = p),
    (fe.Portal = e),
    (fe.Profiler = i),
    (fe.StrictMode = a),
    (fe.Suspense = d),
    (fe.isAsyncMode = function (b) {
      return x(b) || D(b) === s;
    }),
    (fe.isConcurrentMode = x),
    (fe.isContextConsumer = function (b) {
      return D(b) === l;
    }),
    (fe.isContextProvider = function (b) {
      return D(b) === o;
    }),
    (fe.isElement = function (b) {
      return typeof b == 'object' && b !== null && b.$$typeof === r;
    }),
    (fe.isForwardRef = function (b) {
      return D(b) === c;
    }),
    (fe.isFragment = function (b) {
      return D(b) === t;
    }),
    (fe.isLazy = function (b) {
      return D(b) === v;
    }),
    (fe.isMemo = function (b) {
      return D(b) === p;
    }),
    (fe.isPortal = function (b) {
      return D(b) === e;
    }),
    (fe.isProfiler = function (b) {
      return D(b) === i;
    }),
    (fe.isStrictMode = function (b) {
      return D(b) === a;
    }),
    (fe.isSuspense = function (b) {
      return D(b) === d;
    }),
    (fe.isValidElementType = function (b) {
      return (
        typeof b == 'string' ||
        typeof b == 'function' ||
        b === t ||
        b === u ||
        b === i ||
        b === a ||
        b === d ||
        b === f ||
        (typeof b == 'object' &&
          b !== null &&
          (b.$$typeof === v ||
            b.$$typeof === p ||
            b.$$typeof === o ||
            b.$$typeof === l ||
            b.$$typeof === c ||
            b.$$typeof === h ||
            b.$$typeof === g ||
            b.$$typeof === w ||
            b.$$typeof === m))
      );
    }),
    (fe.typeOf = D),
    fe
  );
}
var Qi;
function Uc() {
  return (Qi || ((Qi = 1), (ba.exports = Bc())), ba.exports);
}
var wa, Ki;
function zc() {
  if (Ki) return wa;
  Ki = 1;
  var n = Uc(),
    r = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    e = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    t = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    a = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    i = {};
  ((i[n.ForwardRef] = t), (i[n.Memo] = a));
  function o(v) {
    return n.isMemo(v) ? a : i[v.$$typeof] || r;
  }
  var l = Object.defineProperty,
    s = Object.getOwnPropertyNames,
    u = Object.getOwnPropertySymbols,
    c = Object.getOwnPropertyDescriptor,
    d = Object.getPrototypeOf,
    f = Object.prototype;
  function p(v, m, h) {
    if (typeof m != 'string') {
      if (f) {
        var g = d(m);
        g && g !== f && p(v, g, h);
      }
      var w = s(m);
      u && (w = w.concat(u(m)));
      for (var D = o(v), x = o(m), b = 0; b < w.length; ++b) {
        var C = w[b];
        if (!e[C] && !(h && h[C]) && !(x && x[C]) && !(D && D[C])) {
          var k = c(m, C);
          try {
            l(v, C, k);
          } catch {}
        }
      }
    }
    return v;
  }
  return ((wa = p), wa);
}
var Qc = zc();
const Kc = Cs(Qc);
var Gc = !0;
function Xc(n, r, e) {
  var t = '';
  return (
    e.split(' ').forEach(function (a) {
      n[a] !== void 0 ? r.push(n[a] + ';') : a && (t += a + ' ');
    }),
    t
  );
}
var Ls = function (r, e, t) {
    var a = r.key + '-' + e.name;
    (t === !1 || Gc === !1) && r.registered[a] === void 0 && (r.registered[a] = e.styles);
  },
  Zc = function (r, e, t) {
    Ls(r, e, t);
    var a = r.key + '-' + e.name;
    if (r.inserted[e.name] === void 0) {
      var i = e;
      do (r.insert(e === i ? '.' + a : '', i, r.sheet, !0), (i = i.next));
      while (i !== void 0);
    }
  };
function Jc(n) {
  for (var r = 0, e, t = 0, a = n.length; a >= 4; ++t, a -= 4)
    ((e =
      (n.charCodeAt(t) & 255) |
      ((n.charCodeAt(++t) & 255) << 8) |
      ((n.charCodeAt(++t) & 255) << 16) |
      ((n.charCodeAt(++t) & 255) << 24)),
      (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)),
      (e ^= e >>> 24),
      (r =
        ((e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)) ^
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16))));
  switch (a) {
    case 3:
      r ^= (n.charCodeAt(t + 2) & 255) << 16;
    case 2:
      r ^= (n.charCodeAt(t + 1) & 255) << 8;
    case 1:
      ((r ^= n.charCodeAt(t) & 255), (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)));
  }
  return (
    (r ^= r >>> 13),
    (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
    ((r ^ (r >>> 15)) >>> 0).toString(36)
  );
}
var ed = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  td = /[A-Z]|^ms/g,
  nd = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Ys = function (r) {
    return r.charCodeAt(1) === 45;
  },
  Gi = function (r) {
    return r != null && typeof r != 'boolean';
  },
  Da = Fs(function (n) {
    return Ys(n) ? n : n.replace(td, '-$&').toLowerCase();
  }),
  Xi = function (r, e) {
    switch (r) {
      case 'animation':
      case 'animationName':
        if (typeof e == 'string')
          return e.replace(nd, function (t, a, i) {
            return ((ot = { name: a, styles: i, next: ot }), a);
          });
    }
    return ed[r] !== 1 && !Ys(r) && typeof e == 'number' && e !== 0 ? e + 'px' : e;
  };
function Hn(n, r, e) {
  if (e == null) return '';
  var t = e;
  if (t.__emotion_styles !== void 0) return t;
  switch (typeof e) {
    case 'boolean':
      return '';
    case 'object': {
      var a = e;
      if (a.anim === 1) return ((ot = { name: a.name, styles: a.styles, next: ot }), a.name);
      var i = e;
      if (i.styles !== void 0) {
        var o = i.next;
        if (o !== void 0) for (; o !== void 0; ) ((ot = { name: o.name, styles: o.styles, next: ot }), (o = o.next));
        var l = i.styles + ';';
        return l;
      }
      return rd(n, r, e);
    }
    case 'function': {
      if (n !== void 0) {
        var s = ot,
          u = e(n);
        return ((ot = s), Hn(n, r, u));
      }
      break;
    }
  }
  var c = e;
  return c;
}
function rd(n, r, e) {
  var t = '';
  if (Array.isArray(e)) for (var a = 0; a < e.length; a++) t += Hn(n, r, e[a]) + ';';
  else
    for (var i in e) {
      var o = e[i];
      if (typeof o != 'object') {
        var l = o;
        Gi(l) && (t += Da(i) + ':' + Xi(i, l) + ';');
      } else if (Array.isArray(o) && typeof o[0] == 'string' && r == null)
        for (var s = 0; s < o.length; s++) Gi(o[s]) && (t += Da(i) + ':' + Xi(i, o[s]) + ';');
      else {
        var u = Hn(n, r, o);
        switch (i) {
          case 'animation':
          case 'animationName': {
            t += Da(i) + ':' + u + ';';
            break;
          }
          default:
            t += i + '{' + u + '}';
        }
      }
    }
  return t;
}
var Zi = /label:\s*([^\s;{]+)\s*(;|$)/g,
  ot;
function Vs(n, r, e) {
  if (n.length === 1 && typeof n[0] == 'object' && n[0] !== null && n[0].styles !== void 0) return n[0];
  var t = !0,
    a = '';
  ot = void 0;
  var i = n[0];
  if (i == null || i.raw === void 0) ((t = !1), (a += Hn(e, r, i)));
  else {
    var o = i;
    a += o[0];
  }
  for (var l = 1; l < n.length; l++)
    if (((a += Hn(e, r, n[l])), t)) {
      var s = i;
      a += s[l];
    }
  Zi.lastIndex = 0;
  for (var u = '', c; (c = Zi.exec(a)) !== null; ) u += '-' + c[1];
  var d = Jc(a) + u;
  return { name: d, styles: a, next: ot };
}
var ad = function (r) {
    return r();
  },
  id = Rr.useInsertionEffect ? Rr.useInsertionEffect : !1,
  od = id || ad,
  qs = y.createContext(typeof HTMLElement < 'u' ? jc({ key: 'css' }) : null);
qs.Provider;
var sd = function (r) {
    return y.forwardRef(function (e, t) {
      var a = y.useContext(qs);
      return r(e, a, t);
    });
  },
  ld = y.createContext({}),
  pi = {}.hasOwnProperty,
  Ba = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  ud = function (r, e) {
    var t = {};
    for (var a in e) pi.call(e, a) && (t[a] = e[a]);
    return ((t[Ba] = r), t);
  },
  cd = function (r) {
    var e = r.cache,
      t = r.serialized,
      a = r.isStringTag;
    return (
      Ls(e, t, a),
      od(function () {
        return Zc(e, t, a);
      }),
      null
    );
  },
  dd = sd(function (n, r, e) {
    var t = n.css;
    typeof t == 'string' && r.registered[t] !== void 0 && (t = r.registered[t]);
    var a = n[Ba],
      i = [t],
      o = '';
    typeof n.className == 'string'
      ? (o = Xc(r.registered, i, n.className))
      : n.className != null && (o = n.className + ' ');
    var l = Vs(i, void 0, y.useContext(ld));
    o += r.key + '-' + l.name;
    var s = {};
    for (var u in n) pi.call(n, u) && u !== 'css' && u !== Ba && (s[u] = n[u]);
    return (
      (s.className = o),
      e && (s.ref = e),
      y.createElement(
        y.Fragment,
        null,
        y.createElement(cd, { cache: r, serialized: l, isStringTag: typeof a == 'string' }),
        y.createElement(a, s)
      )
    );
  }),
  fd = dd,
  z = function (r, e) {
    var t = arguments;
    if (e == null || !pi.call(e, 'css')) return y.createElement.apply(void 0, t);
    var a = t.length,
      i = new Array(a);
    ((i[0] = fd), (i[1] = ud(r, e)));
    for (var o = 2; o < a; o++) i[o] = t[o];
    return y.createElement.apply(null, i);
  };
(function (n) {
  var r;
  r || (r = n.JSX || (n.JSX = {}));
})(z || (z = {}));
function mi() {
  for (var n = arguments.length, r = new Array(n), e = 0; e < n; e++) r[e] = arguments[e];
  return Vs(r);
}
function pd() {
  var n = mi.apply(void 0, arguments),
    r = 'animation-' + n.name;
  return {
    name: r,
    styles: '@keyframes ' + r + '{' + n.styles + '}',
    anim: 1,
    toString: function () {
      return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
    },
  };
}
function md(n, r) {
  return (r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(r) } })));
}
const pn = Math.min,
  Wt = Math.max,
  Fr = Math.round,
  ir = Math.floor,
  pt = (n) => ({ x: n, y: n }),
  hd = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  vd = { start: 'end', end: 'start' };
function gd(n, r, e) {
  return Wt(n, pn(r, e));
}
function oa(n, r) {
  return typeof n == 'function' ? n(r) : n;
}
function mn(n) {
  return n.split('-')[0];
}
function Gn(n) {
  return n.split('-')[1];
}
function yd(n) {
  return n === 'x' ? 'y' : 'x';
}
function hi(n) {
  return n === 'y' ? 'height' : 'width';
}
const bd = new Set(['top', 'bottom']);
function qt(n) {
  return bd.has(mn(n)) ? 'y' : 'x';
}
function vi(n) {
  return yd(qt(n));
}
function wd(n, r, e) {
  e === void 0 && (e = !1);
  const t = Gn(n),
    a = vi(n),
    i = hi(a);
  let o = a === 'x' ? (t === (e ? 'end' : 'start') ? 'right' : 'left') : t === 'start' ? 'bottom' : 'top';
  return (r.reference[i] > r.floating[i] && (o = Nr(o)), [o, Nr(o)]);
}
function Dd(n) {
  const r = Nr(n);
  return [Ua(n), r, Ua(r)];
}
function Ua(n) {
  return n.replace(/start|end/g, (r) => vd[r]);
}
const Ji = ['left', 'right'],
  eo = ['right', 'left'],
  xd = ['top', 'bottom'],
  kd = ['bottom', 'top'];
function Sd(n, r, e) {
  switch (n) {
    case 'top':
    case 'bottom':
      return e ? (r ? eo : Ji) : r ? Ji : eo;
    case 'left':
    case 'right':
      return r ? xd : kd;
    default:
      return [];
  }
}
function Cd(n, r, e, t) {
  const a = Gn(n);
  let i = Sd(mn(n), e === 'start', t);
  return (a && ((i = i.map((o) => o + '-' + a)), r && (i = i.concat(i.map(Ua)))), i);
}
function Nr(n) {
  return n.replace(/left|right|bottom|top/g, (r) => hd[r]);
}
function Td(n) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...n };
}
function $s(n) {
  return typeof n != 'number' ? Td(n) : { top: n, right: n, bottom: n, left: n };
}
function Lr(n) {
  const { x: r, y: e, width: t, height: a } = n;
  return { width: t, height: a, top: e, left: r, right: r + t, bottom: e + a, x: r, y: e };
}
function to(n, r, e) {
  let { reference: t, floating: a } = n;
  const i = qt(r),
    o = vi(r),
    l = hi(o),
    s = mn(r),
    u = i === 'y',
    c = t.x + t.width / 2 - a.width / 2,
    d = t.y + t.height / 2 - a.height / 2,
    f = t[l] / 2 - a[l] / 2;
  let p;
  switch (s) {
    case 'top':
      p = { x: c, y: t.y - a.height };
      break;
    case 'bottom':
      p = { x: c, y: t.y + t.height };
      break;
    case 'right':
      p = { x: t.x + t.width, y: d };
      break;
    case 'left':
      p = { x: t.x - a.width, y: d };
      break;
    default:
      p = { x: t.x, y: t.y };
  }
  switch (Gn(r)) {
    case 'start':
      p[o] -= f * (e && u ? -1 : 1);
      break;
    case 'end':
      p[o] += f * (e && u ? -1 : 1);
      break;
  }
  return p;
}
async function Od(n, r) {
  var e;
  r === void 0 && (r = {});
  const { x: t, y: a, platform: i, rects: o, elements: l, strategy: s } = n,
    {
      boundary: u = 'clippingAncestors',
      rootBoundary: c = 'viewport',
      elementContext: d = 'floating',
      altBoundary: f = !1,
      padding: p = 0,
    } = oa(r, n),
    v = $s(p),
    h = l[f ? (d === 'floating' ? 'reference' : 'floating') : d],
    g = Lr(
      await i.getClippingRect({
        element:
          (e = await (i.isElement == null ? void 0 : i.isElement(h))) == null || e
            ? h
            : h.contextElement || (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: s,
      })
    ),
    w = d === 'floating' ? { x: t, y: a, width: o.floating.width, height: o.floating.height } : o.reference,
    D = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)),
    x = (await (i.isElement == null ? void 0 : i.isElement(D)))
      ? (await (i.getScale == null ? void 0 : i.getScale(D))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    b = Lr(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: w,
            offsetParent: D,
            strategy: s,
          })
        : w
    );
  return {
    top: (g.top - b.top + v.top) / x.y,
    bottom: (b.bottom - g.bottom + v.bottom) / x.y,
    left: (g.left - b.left + v.left) / x.x,
    right: (b.right - g.right + v.right) / x.x,
  };
}
const _d = async (n, r, e) => {
    const { placement: t = 'bottom', strategy: a = 'absolute', middleware: i = [], platform: o } = e,
      l = i.filter(Boolean),
      s = await (o.isRTL == null ? void 0 : o.isRTL(r));
    let u = await o.getElementRects({ reference: n, floating: r, strategy: a }),
      { x: c, y: d } = to(u, t, s),
      f = t,
      p = {},
      v = 0;
    for (let h = 0; h < l.length; h++) {
      var m;
      const { name: g, fn: w } = l[h],
        {
          x: D,
          y: x,
          data: b,
          reset: C,
        } = await w({
          x: c,
          y: d,
          initialPlacement: t,
          placement: f,
          strategy: a,
          middlewareData: p,
          rects: u,
          platform: { ...o, detectOverflow: (m = o.detectOverflow) != null ? m : Od },
          elements: { reference: n, floating: r },
        });
      ((c = D ?? c),
        (d = x ?? d),
        (p = { ...p, [g]: { ...p[g], ...b } }),
        C &&
          v <= 50 &&
          (v++,
          typeof C == 'object' &&
            (C.placement && (f = C.placement),
            C.rects &&
              (u = C.rects === !0 ? await o.getElementRects({ reference: n, floating: r, strategy: a }) : C.rects),
            ({ x: c, y: d } = to(u, f, s))),
          (h = -1)));
    }
    return { x: c, y: d, placement: f, strategy: a, middlewareData: p };
  },
  Pd = (n) => ({
    name: 'arrow',
    options: n,
    async fn(r) {
      const { x: e, y: t, placement: a, rects: i, platform: o, elements: l, middlewareData: s } = r,
        { element: u, padding: c = 0 } = oa(n, r) || {};
      if (u == null) return {};
      const d = $s(c),
        f = { x: e, y: t },
        p = vi(a),
        v = hi(p),
        m = await o.getDimensions(u),
        h = p === 'y',
        g = h ? 'top' : 'left',
        w = h ? 'bottom' : 'right',
        D = h ? 'clientHeight' : 'clientWidth',
        x = i.reference[v] + i.reference[p] - f[p] - i.floating[v],
        b = f[p] - i.reference[p],
        C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
      let k = C ? C[D] : 0;
      (!k || !(await (o.isElement == null ? void 0 : o.isElement(C)))) && (k = l.floating[D] || i.floating[v]);
      const T = x / 2 - b / 2,
        _ = k / 2 - m[v] / 2 - 1,
        I = pn(d[g], _),
        P = pn(d[w], _),
        E = I,
        L = k - m[v] - P,
        B = k / 2 - m[v] / 2 + T,
        N = gd(E, B, L),
        R = !s.arrow && Gn(a) != null && B !== N && i.reference[v] / 2 - (B < E ? I : P) - m[v] / 2 < 0,
        Y = R ? (B < E ? B - E : B - L) : 0;
      return { [p]: f[p] + Y, data: { [p]: N, centerOffset: B - N - Y, ...(R && { alignmentOffset: Y }) }, reset: R };
    },
  }),
  Md = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: 'flip',
        options: n,
        async fn(r) {
          var e, t;
          const { placement: a, middlewareData: i, rects: o, initialPlacement: l, platform: s, elements: u } = r,
            {
              mainAxis: c = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: p = 'bestFit',
              fallbackAxisSideDirection: v = 'none',
              flipAlignment: m = !0,
              ...h
            } = oa(n, r);
          if ((e = i.arrow) != null && e.alignmentOffset) return {};
          const g = mn(a),
            w = qt(l),
            D = mn(l) === l,
            x = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)),
            b = f || (D || !m ? [Nr(l)] : Dd(l)),
            C = v !== 'none';
          !f && C && b.push(...Cd(l, m, v, x));
          const k = [l, ...b],
            T = await s.detectOverflow(r, h),
            _ = [];
          let I = ((t = i.flip) == null ? void 0 : t.overflows) || [];
          if ((c && _.push(T[g]), d)) {
            const B = wd(a, o, x);
            _.push(T[B[0]], T[B[1]]);
          }
          if (((I = [...I, { placement: a, overflows: _ }]), !_.every((B) => B <= 0))) {
            var P, E;
            const B = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1,
              N = k[B];
            if (
              N &&
              (!(d === 'alignment' ? w !== qt(N) : !1) ||
                I.every((q) => (qt(q.placement) === w ? q.overflows[0] > 0 : !0)))
            )
              return { data: { index: B, overflows: I }, reset: { placement: N } };
            let R =
              (E = I.filter((Y) => Y.overflows[0] <= 0).sort((Y, q) => Y.overflows[1] - q.overflows[1])[0]) == null
                ? void 0
                : E.placement;
            if (!R)
              switch (p) {
                case 'bestFit': {
                  var L;
                  const Y =
                    (L = I.filter((q) => {
                      if (C) {
                        const X = qt(q.placement);
                        return X === w || X === 'y';
                      }
                      return !0;
                    })
                      .map((q) => [q.placement, q.overflows.filter((X) => X > 0).reduce((X, se) => X + se, 0)])
                      .sort((q, X) => q[1] - X[1])[0]) == null
                      ? void 0
                      : L[0];
                  Y && (R = Y);
                  break;
                }
                case 'initialPlacement':
                  R = l;
                  break;
              }
            if (a !== R) return { reset: { placement: R } };
          }
          return {};
        },
      }
    );
  },
  Ed = new Set(['left', 'top']);
async function Rd(n, r) {
  const { placement: e, platform: t, elements: a } = n,
    i = await (t.isRTL == null ? void 0 : t.isRTL(a.floating)),
    o = mn(e),
    l = Gn(e),
    s = qt(e) === 'y',
    u = Ed.has(o) ? -1 : 1,
    c = i && s ? -1 : 1,
    d = oa(r, n);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: v,
  } = typeof d == 'number'
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis };
  return (
    l && typeof v == 'number' && (p = l === 'end' ? v * -1 : v),
    s ? { x: p * c, y: f * u } : { x: f * u, y: p * c }
  );
}
const Id = function (n) {
  return (
    n === void 0 && (n = 0),
    {
      name: 'offset',
      options: n,
      async fn(r) {
        var e, t;
        const { x: a, y: i, placement: o, middlewareData: l } = r,
          s = await Rd(r, n);
        return o === ((e = l.offset) == null ? void 0 : e.placement) && (t = l.arrow) != null && t.alignmentOffset
          ? {}
          : { x: a + s.x, y: i + s.y, data: { ...s, placement: o } };
      },
    }
  );
};
function sa() {
  return typeof window < 'u';
}
function Cn(n) {
  return Hs(n) ? (n.nodeName || '').toLowerCase() : '#document';
}
function Ue(n) {
  var r;
  return (n == null || (r = n.ownerDocument) == null ? void 0 : r.defaultView) || window;
}
function bt(n) {
  var r;
  return (r = (Hs(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : r.documentElement;
}
function Hs(n) {
  return sa() ? n instanceof Node || n instanceof Ue(n).Node : !1;
}
function Ye(n) {
  return sa() ? n instanceof Element || n instanceof Ue(n).Element : !1;
}
function gt(n) {
  return sa() ? n instanceof HTMLElement || n instanceof Ue(n).HTMLElement : !1;
}
function no(n) {
  return !sa() || typeof ShadowRoot > 'u' ? !1 : n instanceof ShadowRoot || n instanceof Ue(n).ShadowRoot;
}
const Ad = new Set(['inline', 'contents']);
function Xn(n) {
  const { overflow: r, overflowX: e, overflowY: t, display: a } = Ze(n);
  return /auto|scroll|overlay|hidden|clip/.test(r + t + e) && !Ad.has(a);
}
const Fd = new Set(['table', 'td', 'th']);
function Nd(n) {
  return Fd.has(Cn(n));
}
const Ld = [':popover-open', ':modal'];
function la(n) {
  return Ld.some((r) => {
    try {
      return n.matches(r);
    } catch {
      return !1;
    }
  });
}
const Yd = ['transform', 'translate', 'scale', 'rotate', 'perspective'],
  Vd = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'],
  qd = ['paint', 'layout', 'strict', 'content'];
function gi(n) {
  const r = yi(),
    e = Ye(n) ? Ze(n) : n;
  return (
    Yd.some((t) => (e[t] ? e[t] !== 'none' : !1)) ||
    (e.containerType ? e.containerType !== 'normal' : !1) ||
    (!r && (e.backdropFilter ? e.backdropFilter !== 'none' : !1)) ||
    (!r && (e.filter ? e.filter !== 'none' : !1)) ||
    Vd.some((t) => (e.willChange || '').includes(t)) ||
    qd.some((t) => (e.contain || '').includes(t))
  );
}
function $d(n) {
  let r = Ft(n);
  for (; gt(r) && !hn(r); ) {
    if (gi(r)) return r;
    if (la(r)) return null;
    r = Ft(r);
  }
  return null;
}
function yi() {
  return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
const Hd = new Set(['html', 'body', '#document']);
function hn(n) {
  return Hd.has(Cn(n));
}
function Ze(n) {
  return Ue(n).getComputedStyle(n);
}
function ua(n) {
  return Ye(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
}
function Ft(n) {
  if (Cn(n) === 'html') return n;
  const r = n.assignedSlot || n.parentNode || (no(n) && n.host) || bt(n);
  return no(r) ? r.host : r;
}
function Ws(n) {
  const r = Ft(n);
  return hn(r) ? (n.ownerDocument ? n.ownerDocument.body : n.body) : gt(r) && Xn(r) ? r : Ws(r);
}
function Wn(n, r, e) {
  var t;
  (r === void 0 && (r = []), e === void 0 && (e = !0));
  const a = Ws(n),
    i = a === ((t = n.ownerDocument) == null ? void 0 : t.body),
    o = Ue(a);
  if (i) {
    const l = za(o);
    return r.concat(o, o.visualViewport || [], Xn(a) ? a : [], l && e ? Wn(l) : []);
  }
  return r.concat(a, Wn(a, [], e));
}
function za(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function js(n) {
  const r = Ze(n);
  let e = parseFloat(r.width) || 0,
    t = parseFloat(r.height) || 0;
  const a = gt(n),
    i = a ? n.offsetWidth : e,
    o = a ? n.offsetHeight : t,
    l = Fr(e) !== i || Fr(t) !== o;
  return (l && ((e = i), (t = o)), { width: e, height: t, $: l });
}
function bi(n) {
  return Ye(n) ? n : n.contextElement;
}
function cn(n) {
  const r = bi(n);
  if (!gt(r)) return pt(1);
  const e = r.getBoundingClientRect(),
    { width: t, height: a, $: i } = js(r);
  let o = (i ? Fr(e.width) : e.width) / t,
    l = (i ? Fr(e.height) : e.height) / a;
  return ((!o || !Number.isFinite(o)) && (o = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: o, y: l });
}
const Wd = pt(0);
function Bs(n) {
  const r = Ue(n);
  return !yi() || !r.visualViewport ? Wd : { x: r.visualViewport.offsetLeft, y: r.visualViewport.offsetTop };
}
function jd(n, r, e) {
  return (r === void 0 && (r = !1), !e || (r && e !== Ue(n)) ? !1 : r);
}
function Kt(n, r, e, t) {
  (r === void 0 && (r = !1), e === void 0 && (e = !1));
  const a = n.getBoundingClientRect(),
    i = bi(n);
  let o = pt(1);
  r && (t ? Ye(t) && (o = cn(t)) : (o = cn(n)));
  const l = jd(i, e, t) ? Bs(i) : pt(0);
  let s = (a.left + l.x) / o.x,
    u = (a.top + l.y) / o.y,
    c = a.width / o.x,
    d = a.height / o.y;
  if (i) {
    const f = Ue(i),
      p = t && Ye(t) ? Ue(t) : t;
    let v = f,
      m = za(v);
    for (; m && t && p !== v; ) {
      const h = cn(m),
        g = m.getBoundingClientRect(),
        w = Ze(m),
        D = g.left + (m.clientLeft + parseFloat(w.paddingLeft)) * h.x,
        x = g.top + (m.clientTop + parseFloat(w.paddingTop)) * h.y;
      ((s *= h.x), (u *= h.y), (c *= h.x), (d *= h.y), (s += D), (u += x), (v = Ue(m)), (m = za(v)));
    }
  }
  return Lr({ width: c, height: d, x: s, y: u });
}
function ca(n, r) {
  const e = ua(n).scrollLeft;
  return r ? r.left + e : Kt(bt(n)).left + e;
}
function Us(n, r) {
  const e = n.getBoundingClientRect(),
    t = e.left + r.scrollLeft - ca(n, e),
    a = e.top + r.scrollTop;
  return { x: t, y: a };
}
function Bd(n) {
  let { elements: r, rect: e, offsetParent: t, strategy: a } = n;
  const i = a === 'fixed',
    o = bt(t),
    l = r ? la(r.floating) : !1;
  if (t === o || (l && i)) return e;
  let s = { scrollLeft: 0, scrollTop: 0 },
    u = pt(1);
  const c = pt(0),
    d = gt(t);
  if ((d || (!d && !i)) && ((Cn(t) !== 'body' || Xn(o)) && (s = ua(t)), gt(t))) {
    const p = Kt(t);
    ((u = cn(t)), (c.x = p.x + t.clientLeft), (c.y = p.y + t.clientTop));
  }
  const f = o && !d && !i ? Us(o, s) : pt(0);
  return {
    width: e.width * u.x,
    height: e.height * u.y,
    x: e.x * u.x - s.scrollLeft * u.x + c.x + f.x,
    y: e.y * u.y - s.scrollTop * u.y + c.y + f.y,
  };
}
function Ud(n) {
  return Array.from(n.getClientRects());
}
function zd(n) {
  const r = bt(n),
    e = ua(n),
    t = n.ownerDocument.body,
    a = Wt(r.scrollWidth, r.clientWidth, t.scrollWidth, t.clientWidth),
    i = Wt(r.scrollHeight, r.clientHeight, t.scrollHeight, t.clientHeight);
  let o = -e.scrollLeft + ca(n);
  const l = -e.scrollTop;
  return (
    Ze(t).direction === 'rtl' && (o += Wt(r.clientWidth, t.clientWidth) - a),
    { width: a, height: i, x: o, y: l }
  );
}
const ro = 25;
function Qd(n, r) {
  const e = Ue(n),
    t = bt(n),
    a = e.visualViewport;
  let i = t.clientWidth,
    o = t.clientHeight,
    l = 0,
    s = 0;
  if (a) {
    ((i = a.width), (o = a.height));
    const c = yi();
    (!c || (c && r === 'fixed')) && ((l = a.offsetLeft), (s = a.offsetTop));
  }
  const u = ca(t);
  if (u <= 0) {
    const c = t.ownerDocument,
      d = c.body,
      f = getComputedStyle(d),
      p = (c.compatMode === 'CSS1Compat' && parseFloat(f.marginLeft) + parseFloat(f.marginRight)) || 0,
      v = Math.abs(t.clientWidth - d.clientWidth - p);
    v <= ro && (i -= v);
  } else u <= ro && (i += u);
  return { width: i, height: o, x: l, y: s };
}
const Kd = new Set(['absolute', 'fixed']);
function Gd(n, r) {
  const e = Kt(n, !0, r === 'fixed'),
    t = e.top + n.clientTop,
    a = e.left + n.clientLeft,
    i = gt(n) ? cn(n) : pt(1),
    o = n.clientWidth * i.x,
    l = n.clientHeight * i.y,
    s = a * i.x,
    u = t * i.y;
  return { width: o, height: l, x: s, y: u };
}
function ao(n, r, e) {
  let t;
  if (r === 'viewport') t = Qd(n, e);
  else if (r === 'document') t = zd(bt(n));
  else if (Ye(r)) t = Gd(r, e);
  else {
    const a = Bs(n);
    t = { x: r.x - a.x, y: r.y - a.y, width: r.width, height: r.height };
  }
  return Lr(t);
}
function zs(n, r) {
  const e = Ft(n);
  return e === r || !Ye(e) || hn(e) ? !1 : Ze(e).position === 'fixed' || zs(e, r);
}
function Xd(n, r) {
  const e = r.get(n);
  if (e) return e;
  let t = Wn(n, [], !1).filter((l) => Ye(l) && Cn(l) !== 'body'),
    a = null;
  const i = Ze(n).position === 'fixed';
  let o = i ? Ft(n) : n;
  for (; Ye(o) && !hn(o); ) {
    const l = Ze(o),
      s = gi(o);
    (!s && l.position === 'fixed' && (a = null),
      (i ? !s && !a : (!s && l.position === 'static' && !!a && Kd.has(a.position)) || (Xn(o) && !s && zs(n, o)))
        ? (t = t.filter((c) => c !== o))
        : (a = l),
      (o = Ft(o)));
  }
  return (r.set(n, t), t);
}
function Zd(n) {
  let { element: r, boundary: e, rootBoundary: t, strategy: a } = n;
  const o = [...(e === 'clippingAncestors' ? (la(r) ? [] : Xd(r, this._c)) : [].concat(e)), t],
    l = o[0],
    s = o.reduce(
      (u, c) => {
        const d = ao(r, c, a);
        return (
          (u.top = Wt(d.top, u.top)),
          (u.right = pn(d.right, u.right)),
          (u.bottom = pn(d.bottom, u.bottom)),
          (u.left = Wt(d.left, u.left)),
          u
        );
      },
      ao(r, l, a)
    );
  return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
}
function Jd(n) {
  const { width: r, height: e } = js(n);
  return { width: r, height: e };
}
function ef(n, r, e) {
  const t = gt(r),
    a = bt(r),
    i = e === 'fixed',
    o = Kt(n, !0, i, r);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const s = pt(0);
  function u() {
    s.x = ca(a);
  }
  if (t || (!t && !i))
    if (((Cn(r) !== 'body' || Xn(a)) && (l = ua(r)), t)) {
      const p = Kt(r, !0, i, r);
      ((s.x = p.x + r.clientLeft), (s.y = p.y + r.clientTop));
    } else a && u();
  i && !t && a && u();
  const c = a && !t && !i ? Us(a, l) : pt(0),
    d = o.left + l.scrollLeft - s.x - c.x,
    f = o.top + l.scrollTop - s.y - c.y;
  return { x: d, y: f, width: o.width, height: o.height };
}
function xa(n) {
  return Ze(n).position === 'static';
}
function io(n, r) {
  if (!gt(n) || Ze(n).position === 'fixed') return null;
  if (r) return r(n);
  let e = n.offsetParent;
  return (bt(n) === e && (e = e.ownerDocument.body), e);
}
function Qs(n, r) {
  const e = Ue(n);
  if (la(n)) return e;
  if (!gt(n)) {
    let a = Ft(n);
    for (; a && !hn(a); ) {
      if (Ye(a) && !xa(a)) return a;
      a = Ft(a);
    }
    return e;
  }
  let t = io(n, r);
  for (; t && Nd(t) && xa(t); ) t = io(t, r);
  return t && hn(t) && xa(t) && !gi(t) ? e : t || $d(n) || e;
}
const tf = async function (n) {
  const r = this.getOffsetParent || Qs,
    e = this.getDimensions,
    t = await e(n.floating);
  return {
    reference: ef(n.reference, await r(n.floating), n.strategy),
    floating: { x: 0, y: 0, width: t.width, height: t.height },
  };
};
function nf(n) {
  return Ze(n).direction === 'rtl';
}
const rf = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Bd,
  getDocumentElement: bt,
  getClippingRect: Zd,
  getOffsetParent: Qs,
  getElementRects: tf,
  getClientRects: Ud,
  getDimensions: Jd,
  getScale: cn,
  isElement: Ye,
  isRTL: nf,
};
function Ks(n, r) {
  return n.x === r.x && n.y === r.y && n.width === r.width && n.height === r.height;
}
function af(n, r) {
  let e = null,
    t;
  const a = bt(n);
  function i() {
    var l;
    (clearTimeout(t), (l = e) == null || l.disconnect(), (e = null));
  }
  function o(l, s) {
    (l === void 0 && (l = !1), s === void 0 && (s = 1), i());
    const u = n.getBoundingClientRect(),
      { left: c, top: d, width: f, height: p } = u;
    if ((l || r(), !f || !p)) return;
    const v = ir(d),
      m = ir(a.clientWidth - (c + f)),
      h = ir(a.clientHeight - (d + p)),
      g = ir(c),
      D = { rootMargin: -v + 'px ' + -m + 'px ' + -h + 'px ' + -g + 'px', threshold: Wt(0, pn(1, s)) || 1 };
    let x = !0;
    function b(C) {
      const k = C[0].intersectionRatio;
      if (k !== s) {
        if (!x) return o();
        k
          ? o(!1, k)
          : (t = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      (k === 1 && !Ks(u, n.getBoundingClientRect()) && o(), (x = !1));
    }
    try {
      e = new IntersectionObserver(b, { ...D, root: a.ownerDocument });
    } catch {
      e = new IntersectionObserver(b, D);
    }
    e.observe(n);
  }
  return (o(!0), i);
}
function Gs(n, r, e, t) {
  t === void 0 && (t = {});
  const {
      ancestorScroll: a = !0,
      ancestorResize: i = !0,
      elementResize: o = typeof ResizeObserver == 'function',
      layoutShift: l = typeof IntersectionObserver == 'function',
      animationFrame: s = !1,
    } = t,
    u = bi(n),
    c = a || i ? [...(u ? Wn(u) : []), ...Wn(r)] : [];
  c.forEach((g) => {
    (a && g.addEventListener('scroll', e, { passive: !0 }), i && g.addEventListener('resize', e));
  });
  const d = u && l ? af(u, e) : null;
  let f = -1,
    p = null;
  o &&
    ((p = new ResizeObserver((g) => {
      let [w] = g;
      (w &&
        w.target === u &&
        p &&
        (p.unobserve(r),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var D;
          (D = p) == null || D.observe(r);
        }))),
        e());
    })),
    u && !s && p.observe(u),
    p.observe(r));
  let v,
    m = s ? Kt(n) : null;
  s && h();
  function h() {
    const g = Kt(n);
    (m && !Ks(m, g) && e(), (m = g), (v = requestAnimationFrame(h)));
  }
  return (
    e(),
    () => {
      var g;
      (c.forEach((w) => {
        (a && w.removeEventListener('scroll', e), i && w.removeEventListener('resize', e));
      }),
        d == null || d(),
        (g = p) == null || g.disconnect(),
        (p = null),
        s && cancelAnimationFrame(v));
    }
  );
}
const of = Id,
  sf = Md,
  oo = Pd,
  lf = (n, r, e) => {
    const t = new Map(),
      a = { platform: rf, ...e },
      i = { ...a.platform, _c: t };
    return _d(n, r, { ...a, platform: i });
  };
var Qa = y.useLayoutEffect,
  uf = [
    'className',
    'clearValue',
    'cx',
    'getStyles',
    'getClassNames',
    'getValue',
    'hasValue',
    'isMulti',
    'isRtl',
    'options',
    'selectOption',
    'selectProps',
    'setValue',
    'theme',
  ],
  Yr = function () {};
function cf(n, r) {
  return r ? (r[0] === '-' ? n + r : n + '__' + r) : n;
}
function df(n, r) {
  for (var e = arguments.length, t = new Array(e > 2 ? e - 2 : 0), a = 2; a < e; a++) t[a - 2] = arguments[a];
  var i = [].concat(t);
  if (r && n) for (var o in r) r.hasOwnProperty(o) && r[o] && i.push(''.concat(cf(n, o)));
  return i
    .filter(function (l) {
      return l;
    })
    .map(function (l) {
      return String(l).trim();
    })
    .join(' ');
}
var so = function (r) {
    return wf(r) ? r.filter(Boolean) : Qt(r) === 'object' && r !== null ? [r] : [];
  },
  Xs = function (r) {
    (r.className,
      r.clearValue,
      r.cx,
      r.getStyles,
      r.getClassNames,
      r.getValue,
      r.hasValue,
      r.isMulti,
      r.isRtl,
      r.options,
      r.selectOption,
      r.selectProps,
      r.setValue,
      r.theme);
    var e = Pt(r, uf);
    return Q({}, e);
  },
  Se = function (r, e, t) {
    var a = r.cx,
      i = r.getStyles,
      o = r.getClassNames,
      l = r.className;
    return { css: i(e, r), className: a(t ?? {}, o(e, r), l) };
  };
function da(n) {
  return [document.documentElement, document.body, window].indexOf(n) > -1;
}
function ff(n) {
  return da(n) ? window.innerHeight : n.clientHeight;
}
function Zs(n) {
  return da(n) ? window.pageYOffset : n.scrollTop;
}
function Vr(n, r) {
  if (da(n)) {
    window.scrollTo(0, r);
    return;
  }
  n.scrollTop = r;
}
function pf(n) {
  var r = getComputedStyle(n),
    e = r.position === 'absolute',
    t = /(auto|scroll)/;
  if (r.position === 'fixed') return document.documentElement;
  for (var a = n; (a = a.parentElement); )
    if (((r = getComputedStyle(a)), !(e && r.position === 'static') && t.test(r.overflow + r.overflowY + r.overflowX)))
      return a;
  return document.documentElement;
}
function mf(n, r, e, t) {
  return e * ((n = n / t - 1) * n * n + 1) + r;
}
function or(n, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200,
    t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Yr,
    a = Zs(n),
    i = r - a,
    o = 10,
    l = 0;
  function s() {
    l += o;
    var u = mf(l, a, i, e);
    (Vr(n, u), l < e ? window.requestAnimationFrame(s) : t(n));
  }
  s();
}
function lo(n, r) {
  var e = n.getBoundingClientRect(),
    t = r.getBoundingClientRect(),
    a = r.offsetHeight / 3;
  t.bottom + a > e.bottom
    ? Vr(n, Math.min(r.offsetTop + r.clientHeight - n.offsetHeight + a, n.scrollHeight))
    : t.top - a < e.top && Vr(n, Math.max(r.offsetTop - a, 0));
}
function hf(n) {
  var r = n.getBoundingClientRect();
  return { bottom: r.bottom, height: r.height, left: r.left, right: r.right, top: r.top, width: r.width };
}
function uo() {
  try {
    return (document.createEvent('TouchEvent'), !0);
  } catch {
    return !1;
  }
}
function vf() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var Js = !1,
  gf = {
    get passive() {
      return (Js = !0);
    },
  },
  sr = typeof window < 'u' ? window : {};
sr.addEventListener &&
  sr.removeEventListener &&
  (sr.addEventListener('p', Yr, gf), sr.removeEventListener('p', Yr, !1));
var yf = Js;
function bf(n) {
  return n != null;
}
function wf(n) {
  return Array.isArray(n);
}
function lr(n, r, e) {
  return n ? r : e;
}
var Df = function (r) {
    for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) t[a - 1] = arguments[a];
    var i = Object.entries(r).filter(function (o) {
      var l = xt(o, 1),
        s = l[0];
      return !t.includes(s);
    });
    return i.reduce(function (o, l) {
      var s = xt(l, 2),
        u = s[0],
        c = s[1];
      return ((o[u] = c), o);
    }, {});
  },
  xf = ['children', 'innerProps'],
  kf = ['children', 'innerProps'];
function Sf(n) {
  var r = n.maxHeight,
    e = n.menuEl,
    t = n.minHeight,
    a = n.placement,
    i = n.shouldScroll,
    o = n.isFixedPosition,
    l = n.controlHeight,
    s = pf(e),
    u = { placement: 'bottom', maxHeight: r };
  if (!e || !e.offsetParent) return u;
  var c = s.getBoundingClientRect(),
    d = c.height,
    f = e.getBoundingClientRect(),
    p = f.bottom,
    v = f.height,
    m = f.top,
    h = e.offsetParent.getBoundingClientRect(),
    g = h.top,
    w = o ? window.innerHeight : ff(s),
    D = Zs(s),
    x = parseInt(getComputedStyle(e).marginBottom, 10),
    b = parseInt(getComputedStyle(e).marginTop, 10),
    C = g - b,
    k = w - m,
    T = C + D,
    _ = d - D - m,
    I = p - w + D + x,
    P = D + m - b,
    E = 160;
  switch (a) {
    case 'auto':
    case 'bottom':
      if (k >= v) return { placement: 'bottom', maxHeight: r };
      if (_ >= v && !o) return (i && or(s, I, E), { placement: 'bottom', maxHeight: r });
      if ((!o && _ >= t) || (o && k >= t)) {
        i && or(s, I, E);
        var L = o ? k - x : _ - x;
        return { placement: 'bottom', maxHeight: L };
      }
      if (a === 'auto' || o) {
        var B = r,
          N = o ? C : T;
        return (N >= t && (B = Math.min(N - x - l, r)), { placement: 'top', maxHeight: B });
      }
      if (a === 'bottom') return (i && Vr(s, I), { placement: 'bottom', maxHeight: r });
      break;
    case 'top':
      if (C >= v) return { placement: 'top', maxHeight: r };
      if (T >= v && !o) return (i && or(s, P, E), { placement: 'top', maxHeight: r });
      if ((!o && T >= t) || (o && C >= t)) {
        var R = r;
        return (
          ((!o && T >= t) || (o && C >= t)) && (R = o ? C - b : T - b),
          i && or(s, P, E),
          { placement: 'top', maxHeight: R }
        );
      }
      return { placement: 'bottom', maxHeight: r };
    default:
      throw new Error('Invalid placement provided "'.concat(a, '".'));
  }
  return u;
}
function Cf(n) {
  var r = { bottom: 'top', top: 'bottom' };
  return n ? r[n] : 'bottom';
}
var el = function (r) {
    return r === 'auto' ? 'bottom' : r;
  },
  Tf = function (r, e) {
    var t,
      a = r.placement,
      i = r.theme,
      o = i.borderRadius,
      l = i.spacing,
      s = i.colors;
    return Q(
      ((t = { label: 'menu' }),
      In(t, Cf(a), '100%'),
      In(t, 'position', 'absolute'),
      In(t, 'width', '100%'),
      In(t, 'zIndex', 1),
      t),
      e
        ? {}
        : {
            backgroundColor: s.neutral0,
            borderRadius: o,
            boxShadow: '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
            marginBottom: l.menuGutter,
            marginTop: l.menuGutter,
          }
    );
  },
  tl = y.createContext(null),
  Of = function (r) {
    var e = r.children,
      t = r.minMenuHeight,
      a = r.maxMenuHeight,
      i = r.menuPlacement,
      o = r.menuPosition,
      l = r.menuShouldScrollIntoView,
      s = r.theme,
      u = y.useContext(tl) || {},
      c = u.setPortalPlacement,
      d = y.useRef(null),
      f = y.useState(a),
      p = xt(f, 2),
      v = p[0],
      m = p[1],
      h = y.useState(null),
      g = xt(h, 2),
      w = g[0],
      D = g[1],
      x = s.spacing.controlHeight;
    return (
      Qa(
        function () {
          var b = d.current;
          if (b) {
            var C = o === 'fixed',
              k = l && !C,
              T = Sf({
                maxHeight: a,
                menuEl: b,
                minHeight: t,
                placement: i,
                shouldScroll: k,
                isFixedPosition: C,
                controlHeight: x,
              });
            (m(T.maxHeight), D(T.placement), c == null || c(T.placement));
          }
        },
        [a, i, o, l, t, c, x]
      ),
      e({ ref: d, placerProps: Q(Q({}, r), {}, { placement: w || el(i), maxHeight: v }) })
    );
  },
  _f = function (r) {
    var e = r.children,
      t = r.innerRef,
      a = r.innerProps;
    return z('div', K({}, Se(r, 'menu', { menu: !0 }), { ref: t }, a), e);
  },
  Pf = _f,
  Mf = function (r, e) {
    var t = r.maxHeight,
      a = r.theme.spacing.baseUnit;
    return Q(
      { maxHeight: t, overflowY: 'auto', position: 'relative', WebkitOverflowScrolling: 'touch' },
      e ? {} : { paddingBottom: a, paddingTop: a }
    );
  },
  Ef = function (r) {
    var e = r.children,
      t = r.innerProps,
      a = r.innerRef,
      i = r.isMulti;
    return z('div', K({}, Se(r, 'menuList', { 'menu-list': !0, 'menu-list--is-multi': i }), { ref: a }, t), e);
  },
  nl = function (r, e) {
    var t = r.theme,
      a = t.spacing.baseUnit,
      i = t.colors;
    return Q(
      { textAlign: 'center' },
      e ? {} : { color: i.neutral40, padding: ''.concat(a * 2, 'px ').concat(a * 3, 'px') }
    );
  },
  Rf = nl,
  If = nl,
  Af = function (r) {
    var e = r.children,
      t = e === void 0 ? 'No options' : e,
      a = r.innerProps,
      i = Pt(r, xf);
    return z(
      'div',
      K(
        {},
        Se(Q(Q({}, i), {}, { children: t, innerProps: a }), 'noOptionsMessage', {
          'menu-notice': !0,
          'menu-notice--no-options': !0,
        }),
        a
      ),
      t
    );
  },
  Ff = function (r) {
    var e = r.children,
      t = e === void 0 ? 'Loading...' : e,
      a = r.innerProps,
      i = Pt(r, kf);
    return z(
      'div',
      K(
        {},
        Se(Q(Q({}, i), {}, { children: t, innerProps: a }), 'loadingMessage', {
          'menu-notice': !0,
          'menu-notice--loading': !0,
        }),
        a
      ),
      t
    );
  },
  Nf = function (r) {
    var e = r.rect,
      t = r.offset,
      a = r.position;
    return { left: e.left, position: a, top: t, width: e.width, zIndex: 1 };
  },
  Lf = function (r) {
    var e = r.appendTo,
      t = r.children,
      a = r.controlElement,
      i = r.innerProps,
      o = r.menuPlacement,
      l = r.menuPosition,
      s = y.useRef(null),
      u = y.useRef(null),
      c = y.useState(el(o)),
      d = xt(c, 2),
      f = d[0],
      p = d[1],
      v = y.useMemo(function () {
        return { setPortalPlacement: p };
      }, []),
      m = y.useState(null),
      h = xt(m, 2),
      g = h[0],
      w = h[1],
      D = y.useCallback(
        function () {
          if (a) {
            var k = hf(a),
              T = l === 'fixed' ? 0 : window.pageYOffset,
              _ = k[f] + T;
            (_ !== (g == null ? void 0 : g.offset) ||
              k.left !== (g == null ? void 0 : g.rect.left) ||
              k.width !== (g == null ? void 0 : g.rect.width)) &&
              w({ offset: _, rect: k });
          }
        },
        [a, l, f, g == null ? void 0 : g.offset, g == null ? void 0 : g.rect.left, g == null ? void 0 : g.rect.width]
      );
    Qa(
      function () {
        D();
      },
      [D]
    );
    var x = y.useCallback(
      function () {
        (typeof u.current == 'function' && (u.current(), (u.current = null)),
          a && s.current && (u.current = Gs(a, s.current, D, { elementResize: 'ResizeObserver' in window })));
      },
      [a, D]
    );
    Qa(
      function () {
        x();
      },
      [x]
    );
    var b = y.useCallback(
      function (k) {
        ((s.current = k), x());
      },
      [x]
    );
    if ((!e && l !== 'fixed') || !g) return null;
    var C = z(
      'div',
      K(
        { ref: b },
        Se(Q(Q({}, r), {}, { offset: g.offset, position: l, rect: g.rect }), 'menuPortal', { 'menu-portal': !0 }),
        i
      ),
      t
    );
    return z(tl.Provider, { value: v }, e ? Ss.createPortal(C, e) : C);
  },
  Yf = function (r) {
    var e = r.isDisabled,
      t = r.isRtl;
    return {
      label: 'container',
      direction: t ? 'rtl' : void 0,
      pointerEvents: e ? 'none' : void 0,
      position: 'relative',
    };
  },
  Vf = function (r) {
    var e = r.children,
      t = r.innerProps,
      a = r.isDisabled,
      i = r.isRtl;
    return z('div', K({}, Se(r, 'container', { '--is-disabled': a, '--is-rtl': i }), t), e);
  },
  qf = function (r, e) {
    var t = r.theme.spacing,
      a = r.isMulti,
      i = r.hasValue,
      o = r.selectProps.controlShouldRenderValue;
    return Q(
      {
        alignItems: 'center',
        display: a && i && o ? 'flex' : 'grid',
        flex: 1,
        flexWrap: 'wrap',
        WebkitOverflowScrolling: 'touch',
        position: 'relative',
        overflow: 'hidden',
      },
      e ? {} : { padding: ''.concat(t.baseUnit / 2, 'px ').concat(t.baseUnit * 2, 'px') }
    );
  },
  $f = function (r) {
    var e = r.children,
      t = r.innerProps,
      a = r.isMulti,
      i = r.hasValue;
    return z(
      'div',
      K(
        {},
        Se(r, 'valueContainer', {
          'value-container': !0,
          'value-container--is-multi': a,
          'value-container--has-value': i,
        }),
        t
      ),
      e
    );
  },
  Hf = function () {
    return { alignItems: 'center', alignSelf: 'stretch', display: 'flex', flexShrink: 0 };
  },
  Wf = function (r) {
    var e = r.children,
      t = r.innerProps;
    return z('div', K({}, Se(r, 'indicatorsContainer', { indicators: !0 }), t), e);
  },
  co,
  jf = ['size'],
  Bf = ['innerProps', 'isRtl', 'size'],
  Uf = {
    name: '8mmkcg',
    styles: 'display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0',
  },
  rl = function (r) {
    var e = r.size,
      t = Pt(r, jf);
    return z(
      'svg',
      K({ height: e, width: e, viewBox: '0 0 20 20', 'aria-hidden': 'true', focusable: 'false', css: Uf }, t)
    );
  },
  wi = function (r) {
    return z(
      rl,
      K({ size: 20 }, r),
      z('path', {
        d: 'M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z',
      })
    );
  },
  al = function (r) {
    return z(
      rl,
      K({ size: 20 }, r),
      z('path', {
        d: 'M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z',
      })
    );
  },
  il = function (r, e) {
    var t = r.isFocused,
      a = r.theme,
      i = a.spacing.baseUnit,
      o = a.colors;
    return Q(
      { label: 'indicatorContainer', display: 'flex', transition: 'color 150ms' },
      e
        ? {}
        : { color: t ? o.neutral60 : o.neutral20, padding: i * 2, ':hover': { color: t ? o.neutral80 : o.neutral40 } }
    );
  },
  zf = il,
  Qf = function (r) {
    var e = r.children,
      t = r.innerProps;
    return z(
      'div',
      K({}, Se(r, 'dropdownIndicator', { indicator: !0, 'dropdown-indicator': !0 }), t),
      e || z(al, null)
    );
  },
  Kf = il,
  Gf = function (r) {
    var e = r.children,
      t = r.innerProps;
    return z('div', K({}, Se(r, 'clearIndicator', { indicator: !0, 'clear-indicator': !0 }), t), e || z(wi, null));
  },
  Xf = function (r, e) {
    var t = r.isDisabled,
      a = r.theme,
      i = a.spacing.baseUnit,
      o = a.colors;
    return Q(
      { label: 'indicatorSeparator', alignSelf: 'stretch', width: 1 },
      e ? {} : { backgroundColor: t ? o.neutral10 : o.neutral20, marginBottom: i * 2, marginTop: i * 2 }
    );
  },
  Zf = function (r) {
    var e = r.innerProps;
    return z('span', K({}, e, Se(r, 'indicatorSeparator', { 'indicator-separator': !0 })));
  },
  Jf = pd(
    co ||
      (co = md([
        `
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`,
      ]))
  ),
  ep = function (r, e) {
    var t = r.isFocused,
      a = r.size,
      i = r.theme,
      o = i.colors,
      l = i.spacing.baseUnit;
    return Q(
      {
        label: 'loadingIndicator',
        display: 'flex',
        transition: 'color 150ms',
        alignSelf: 'center',
        fontSize: a,
        lineHeight: 1,
        marginRight: a,
        textAlign: 'center',
        verticalAlign: 'middle',
      },
      e ? {} : { color: t ? o.neutral60 : o.neutral20, padding: l * 2 }
    );
  },
  ka = function (r) {
    var e = r.delay,
      t = r.offset;
    return z('span', {
      css: mi(
        {
          animation: ''.concat(Jf, ' 1s ease-in-out ').concat(e, 'ms infinite;'),
          backgroundColor: 'currentColor',
          borderRadius: '1em',
          display: 'inline-block',
          marginLeft: t ? '1em' : void 0,
          height: '1em',
          verticalAlign: 'top',
          width: '1em',
        },
        '',
        ''
      ),
    });
  },
  tp = function (r) {
    var e = r.innerProps,
      t = r.isRtl,
      a = r.size,
      i = a === void 0 ? 4 : a,
      o = Pt(r, Bf);
    return z(
      'div',
      K(
        {},
        Se(Q(Q({}, o), {}, { innerProps: e, isRtl: t, size: i }), 'loadingIndicator', {
          indicator: !0,
          'loading-indicator': !0,
        }),
        e
      ),
      z(ka, { delay: 0, offset: t }),
      z(ka, { delay: 160, offset: !0 }),
      z(ka, { delay: 320, offset: !t })
    );
  },
  np = function (r, e) {
    var t = r.isDisabled,
      a = r.isFocused,
      i = r.theme,
      o = i.colors,
      l = i.borderRadius,
      s = i.spacing;
    return Q(
      {
        label: 'control',
        alignItems: 'center',
        cursor: 'default',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        minHeight: s.controlHeight,
        outline: '0 !important',
        position: 'relative',
        transition: 'all 100ms',
      },
      e
        ? {}
        : {
            backgroundColor: t ? o.neutral5 : o.neutral0,
            borderColor: t ? o.neutral10 : a ? o.primary : o.neutral20,
            borderRadius: l,
            borderStyle: 'solid',
            borderWidth: 1,
            boxShadow: a ? '0 0 0 1px '.concat(o.primary) : void 0,
            '&:hover': { borderColor: a ? o.primary : o.neutral30 },
          }
    );
  },
  rp = function (r) {
    var e = r.children,
      t = r.isDisabled,
      a = r.isFocused,
      i = r.innerRef,
      o = r.innerProps,
      l = r.menuIsOpen;
    return z(
      'div',
      K(
        { ref: i },
        Se(r, 'control', {
          control: !0,
          'control--is-disabled': t,
          'control--is-focused': a,
          'control--menu-is-open': l,
        }),
        o,
        { 'aria-disabled': t || void 0 }
      ),
      e
    );
  },
  ap = rp,
  ip = ['data'],
  op = function (r, e) {
    var t = r.theme.spacing;
    return e ? {} : { paddingBottom: t.baseUnit * 2, paddingTop: t.baseUnit * 2 };
  },
  sp = function (r) {
    var e = r.children,
      t = r.cx,
      a = r.getStyles,
      i = r.getClassNames,
      o = r.Heading,
      l = r.headingProps,
      s = r.innerProps,
      u = r.label,
      c = r.theme,
      d = r.selectProps;
    return z(
      'div',
      K({}, Se(r, 'group', { group: !0 }), s),
      z(o, K({}, l, { selectProps: d, theme: c, getStyles: a, getClassNames: i, cx: t }), u),
      z('div', null, e)
    );
  },
  lp = function (r, e) {
    var t = r.theme,
      a = t.colors,
      i = t.spacing;
    return Q(
      { label: 'group', cursor: 'default', display: 'block' },
      e
        ? {}
        : {
            color: a.neutral40,
            fontSize: '75%',
            fontWeight: 500,
            marginBottom: '0.25em',
            paddingLeft: i.baseUnit * 3,
            paddingRight: i.baseUnit * 3,
            textTransform: 'uppercase',
          }
    );
  },
  up = function (r) {
    var e = Xs(r);
    e.data;
    var t = Pt(e, ip);
    return z('div', K({}, Se(r, 'groupHeading', { 'group-heading': !0 }), t));
  },
  cp = sp,
  dp = ['innerRef', 'isDisabled', 'isHidden', 'inputClassName'],
  fp = function (r, e) {
    var t = r.isDisabled,
      a = r.value,
      i = r.theme,
      o = i.spacing,
      l = i.colors;
    return Q(
      Q({ visibility: t ? 'hidden' : 'visible', transform: a ? 'translateZ(0)' : '' }, pp),
      e ? {} : { margin: o.baseUnit / 2, paddingBottom: o.baseUnit / 2, paddingTop: o.baseUnit / 2, color: l.neutral80 }
    );
  },
  ol = { gridArea: '1 / 2', font: 'inherit', minWidth: '2px', border: 0, margin: 0, outline: 0, padding: 0 },
  pp = {
    flex: '1 1 auto',
    display: 'inline-grid',
    gridArea: '1 / 1 / 2 / 3',
    gridTemplateColumns: '0 min-content',
    '&:after': Q({ content: 'attr(data-value) " "', visibility: 'hidden', whiteSpace: 'pre' }, ol),
  },
  mp = function (r) {
    return Q({ label: 'input', color: 'inherit', background: 0, opacity: r ? 0 : 1, width: '100%' }, ol);
  },
  hp = function (r) {
    var e = r.cx,
      t = r.value,
      a = Xs(r),
      i = a.innerRef,
      o = a.isDisabled,
      l = a.isHidden,
      s = a.inputClassName,
      u = Pt(a, dp);
    return z(
      'div',
      K({}, Se(r, 'input', { 'input-container': !0 }), { 'data-value': t || '' }),
      z('input', K({ className: e({ input: !0 }, s), ref: i, style: mp(l), disabled: o }, u))
    );
  },
  vp = hp,
  gp = function (r, e) {
    var t = r.theme,
      a = t.spacing,
      i = t.borderRadius,
      o = t.colors;
    return Q(
      { label: 'multiValue', display: 'flex', minWidth: 0 },
      e ? {} : { backgroundColor: o.neutral10, borderRadius: i / 2, margin: a.baseUnit / 2 }
    );
  },
  yp = function (r, e) {
    var t = r.theme,
      a = t.borderRadius,
      i = t.colors,
      o = r.cropWithEllipsis;
    return Q(
      { overflow: 'hidden', textOverflow: o || o === void 0 ? 'ellipsis' : void 0, whiteSpace: 'nowrap' },
      e ? {} : { borderRadius: a / 2, color: i.neutral80, fontSize: '85%', padding: 3, paddingLeft: 6 }
    );
  },
  bp = function (r, e) {
    var t = r.theme,
      a = t.spacing,
      i = t.borderRadius,
      o = t.colors,
      l = r.isFocused;
    return Q(
      { alignItems: 'center', display: 'flex' },
      e
        ? {}
        : {
            borderRadius: i / 2,
            backgroundColor: l ? o.dangerLight : void 0,
            paddingLeft: a.baseUnit,
            paddingRight: a.baseUnit,
            ':hover': { backgroundColor: o.dangerLight, color: o.danger },
          }
    );
  },
  sl = function (r) {
    var e = r.children,
      t = r.innerProps;
    return z('div', t, e);
  },
  wp = sl,
  Dp = sl;
function xp(n) {
  var r = n.children,
    e = n.innerProps;
  return z('div', K({ role: 'button' }, e), r || z(wi, { size: 14 }));
}
var kp = function (r) {
    var e = r.children,
      t = r.components,
      a = r.data,
      i = r.innerProps,
      o = r.isDisabled,
      l = r.removeProps,
      s = r.selectProps,
      u = t.Container,
      c = t.Label,
      d = t.Remove;
    return z(
      u,
      {
        data: a,
        innerProps: Q(Q({}, Se(r, 'multiValue', { 'multi-value': !0, 'multi-value--is-disabled': o })), i),
        selectProps: s,
      },
      z(c, { data: a, innerProps: Q({}, Se(r, 'multiValueLabel', { 'multi-value__label': !0 })), selectProps: s }, e),
      z(d, {
        data: a,
        innerProps: Q(
          Q({}, Se(r, 'multiValueRemove', { 'multi-value__remove': !0 })),
          {},
          { 'aria-label': 'Remove '.concat(e || 'option') },
          l
        ),
        selectProps: s,
      })
    );
  },
  Sp = kp,
  Cp = function (r, e) {
    var t = r.isDisabled,
      a = r.isFocused,
      i = r.isSelected,
      o = r.theme,
      l = o.spacing,
      s = o.colors;
    return Q(
      {
        label: 'option',
        cursor: 'default',
        display: 'block',
        fontSize: 'inherit',
        width: '100%',
        userSelect: 'none',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      },
      e
        ? {}
        : {
            backgroundColor: i ? s.primary : a ? s.primary25 : 'transparent',
            color: t ? s.neutral20 : i ? s.neutral0 : 'inherit',
            padding: ''.concat(l.baseUnit * 2, 'px ').concat(l.baseUnit * 3, 'px'),
            ':active': { backgroundColor: t ? void 0 : i ? s.primary : s.primary50 },
          }
    );
  },
  Tp = function (r) {
    var e = r.children,
      t = r.isDisabled,
      a = r.isFocused,
      i = r.isSelected,
      o = r.innerRef,
      l = r.innerProps;
    return z(
      'div',
      K(
        {},
        Se(r, 'option', { option: !0, 'option--is-disabled': t, 'option--is-focused': a, 'option--is-selected': i }),
        { ref: o, 'aria-disabled': t },
        l
      ),
      e
    );
  },
  Op = Tp,
  _p = function (r, e) {
    var t = r.theme,
      a = t.spacing,
      i = t.colors;
    return Q(
      { label: 'placeholder', gridArea: '1 / 1 / 2 / 3' },
      e ? {} : { color: i.neutral50, marginLeft: a.baseUnit / 2, marginRight: a.baseUnit / 2 }
    );
  },
  Pp = function (r) {
    var e = r.children,
      t = r.innerProps;
    return z('div', K({}, Se(r, 'placeholder', { placeholder: !0 }), t), e);
  },
  Mp = Pp,
  Ep = function (r, e) {
    var t = r.isDisabled,
      a = r.theme,
      i = a.spacing,
      o = a.colors;
    return Q(
      {
        label: 'singleValue',
        gridArea: '1 / 1 / 2 / 3',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      e ? {} : { color: t ? o.neutral40 : o.neutral80, marginLeft: i.baseUnit / 2, marginRight: i.baseUnit / 2 }
    );
  },
  Rp = function (r) {
    var e = r.children,
      t = r.isDisabled,
      a = r.innerProps;
    return z('div', K({}, Se(r, 'singleValue', { 'single-value': !0, 'single-value--is-disabled': t }), a), e);
  },
  Ip = Rp,
  Ap = {
    ClearIndicator: Gf,
    Control: ap,
    DropdownIndicator: Qf,
    DownChevron: al,
    CrossIcon: wi,
    Group: cp,
    GroupHeading: up,
    IndicatorsContainer: Wf,
    IndicatorSeparator: Zf,
    Input: vp,
    LoadingIndicator: tp,
    Menu: Pf,
    MenuList: Ef,
    MenuPortal: Lf,
    LoadingMessage: Ff,
    NoOptionsMessage: Af,
    MultiValue: Sp,
    MultiValueContainer: wp,
    MultiValueLabel: Dp,
    MultiValueRemove: xp,
    Option: Op,
    Placeholder: Mp,
    SelectContainer: Vf,
    SingleValue: Ip,
    ValueContainer: $f,
  },
  Fp = function (r) {
    return Q(Q({}, Ap), r.components);
  },
  fo =
    Number.isNaN ||
    function (r) {
      return typeof r == 'number' && r !== r;
    };
function Np(n, r) {
  return !!(n === r || (fo(n) && fo(r)));
}
function Lp(n, r) {
  if (n.length !== r.length) return !1;
  for (var e = 0; e < n.length; e++) if (!Np(n[e], r[e])) return !1;
  return !0;
}
function Yp(n, r) {
  r === void 0 && (r = Lp);
  var e = null;
  function t() {
    for (var a = [], i = 0; i < arguments.length; i++) a[i] = arguments[i];
    if (e && e.lastThis === this && r(a, e.lastArgs)) return e.lastResult;
    var o = n.apply(this, a);
    return ((e = { lastResult: o, lastArgs: a, lastThis: this }), o);
  }
  return (
    (t.clear = function () {
      e = null;
    }),
    t
  );
}
var Vp = {
    name: '7pg0cj-a11yText',
    styles:
      'label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap',
  },
  qp = function (r) {
    return z('span', K({ css: Vp }, r));
  },
  po = qp,
  $p = {
    guidance: function (r) {
      var e = r.isSearchable,
        t = r.isMulti,
        a = r.tabSelectsValue,
        i = r.context,
        o = r.isInitialFocus;
      switch (i) {
        case 'menu':
          return 'Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu'.concat(
            a ? ', press Tab to select the option and exit the menu' : '',
            '.'
          );
        case 'input':
          return o
            ? ''
                .concat(r['aria-label'] || 'Select', ' is focused ')
                .concat(e ? ',type to refine list' : '', ', press Down to open the menu, ')
                .concat(t ? ' press left to focus selected values' : '')
            : '';
        case 'value':
          return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
        default:
          return '';
      }
    },
    onChange: function (r) {
      var e = r.action,
        t = r.label,
        a = t === void 0 ? '' : t,
        i = r.labels,
        o = r.isDisabled;
      switch (e) {
        case 'deselect-option':
        case 'pop-value':
        case 'remove-value':
          return 'option '.concat(a, ', deselected.');
        case 'clear':
          return 'All selected options have been cleared.';
        case 'initial-input-focus':
          return 'option'.concat(i.length > 1 ? 's' : '', ' ').concat(i.join(','), ', selected.');
        case 'select-option':
          return o ? 'option '.concat(a, ' is disabled. Select another option.') : 'option '.concat(a, ', selected.');
        default:
          return '';
      }
    },
    onFocus: function (r) {
      var e = r.context,
        t = r.focused,
        a = r.options,
        i = r.label,
        o = i === void 0 ? '' : i,
        l = r.selectValue,
        s = r.isDisabled,
        u = r.isSelected,
        c = r.isAppleDevice,
        d = function (m, h) {
          return m && m.length ? ''.concat(m.indexOf(h) + 1, ' of ').concat(m.length) : '';
        };
      if (e === 'value' && l) return 'value '.concat(o, ' focused, ').concat(d(l, t), '.');
      if (e === 'menu' && c) {
        var f = s ? ' disabled' : '',
          p = ''.concat(u ? ' selected' : '').concat(f);
        return ''.concat(o).concat(p, ', ').concat(d(a, t), '.');
      }
      return '';
    },
    onFilter: function (r) {
      var e = r.inputValue,
        t = r.resultsMessage;
      return ''.concat(t).concat(e ? ' for search term ' + e : '', '.');
    },
  },
  Hp = function (r) {
    var e = r.ariaSelection,
      t = r.focusedOption,
      a = r.focusedValue,
      i = r.focusableOptions,
      o = r.isFocused,
      l = r.selectValue,
      s = r.selectProps,
      u = r.id,
      c = r.isAppleDevice,
      d = s.ariaLiveMessages,
      f = s.getOptionLabel,
      p = s.inputValue,
      v = s.isMulti,
      m = s.isOptionDisabled,
      h = s.isSearchable,
      g = s.menuIsOpen,
      w = s.options,
      D = s.screenReaderStatus,
      x = s.tabSelectsValue,
      b = s.isLoading,
      C = s['aria-label'],
      k = s['aria-live'],
      T = y.useMemo(
        function () {
          return Q(Q({}, $p), d || {});
        },
        [d]
      ),
      _ = y.useMemo(
        function () {
          var N = '';
          if (e && T.onChange) {
            var R = e.option,
              Y = e.options,
              q = e.removedValue,
              X = e.removedValues,
              se = e.value,
              ge = function (M) {
                return Array.isArray(M) ? null : M;
              },
              A = q || R || ge(se),
              F = A ? f(A) : '',
              V = Y || X || void 0,
              U = V ? V.map(f) : [],
              S = Q({ isDisabled: A && m(A, l), label: F, labels: U }, e);
            N = T.onChange(S);
          }
          return N;
        },
        [e, T, m, l, f]
      ),
      I = y.useMemo(
        function () {
          var N = '',
            R = t || a,
            Y = !!(t && l && l.includes(t));
          if (R && T.onFocus) {
            var q = {
              focused: R,
              label: f(R),
              isDisabled: m(R, l),
              isSelected: Y,
              options: i,
              context: R === t ? 'menu' : 'value',
              selectValue: l,
              isAppleDevice: c,
            };
            N = T.onFocus(q);
          }
          return N;
        },
        [t, a, f, m, T, i, l, c]
      ),
      P = y.useMemo(
        function () {
          var N = '';
          if (g && w.length && !b && T.onFilter) {
            var R = D({ count: i.length });
            N = T.onFilter({ inputValue: p, resultsMessage: R });
          }
          return N;
        },
        [i, p, g, T, w, D, b]
      ),
      E = (e == null ? void 0 : e.action) === 'initial-input-focus',
      L = y.useMemo(
        function () {
          var N = '';
          if (T.guidance) {
            var R = a ? 'value' : g ? 'menu' : 'input';
            N = T.guidance({
              'aria-label': C,
              context: R,
              isDisabled: t && m(t, l),
              isMulti: v,
              isSearchable: h,
              tabSelectsValue: x,
              isInitialFocus: E,
            });
          }
          return N;
        },
        [C, t, a, v, m, h, g, T, l, x, E]
      ),
      B = z(
        y.Fragment,
        null,
        z('span', { id: 'aria-selection' }, _),
        z('span', { id: 'aria-focused' }, I),
        z('span', { id: 'aria-results' }, P),
        z('span', { id: 'aria-guidance' }, L)
      );
    return z(
      y.Fragment,
      null,
      z(po, { id: u }, E && B),
      z(po, { 'aria-live': k, 'aria-atomic': 'false', 'aria-relevant': 'additions text', role: 'log' }, o && !E && B)
    );
  },
  Wp = Hp,
  Ka = [
    { base: 'A', letters: 'AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ' },
    { base: 'AA', letters: 'Ꜳ' },
    { base: 'AE', letters: 'ÆǼǢ' },
    { base: 'AO', letters: 'Ꜵ' },
    { base: 'AU', letters: 'Ꜷ' },
    { base: 'AV', letters: 'ꜸꜺ' },
    { base: 'AY', letters: 'Ꜽ' },
    { base: 'B', letters: 'BⒷＢḂḄḆɃƂƁ' },
    { base: 'C', letters: 'CⒸＣĆĈĊČÇḈƇȻꜾ' },
    { base: 'D', letters: 'DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ' },
    { base: 'DZ', letters: 'ǱǄ' },
    { base: 'Dz', letters: 'ǲǅ' },
    { base: 'E', letters: 'EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ' },
    { base: 'F', letters: 'FⒻＦḞƑꝻ' },
    { base: 'G', letters: 'GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ' },
    { base: 'H', letters: 'HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ' },
    { base: 'I', letters: 'IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ' },
    { base: 'J', letters: 'JⒿＪĴɈ' },
    { base: 'K', letters: 'KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ' },
    { base: 'L', letters: 'LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ' },
    { base: 'LJ', letters: 'Ǉ' },
    { base: 'Lj', letters: 'ǈ' },
    { base: 'M', letters: 'MⓂＭḾṀṂⱮƜ' },
    { base: 'N', letters: 'NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ' },
    { base: 'NJ', letters: 'Ǌ' },
    { base: 'Nj', letters: 'ǋ' },
    { base: 'O', letters: 'OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ' },
    { base: 'OI', letters: 'Ƣ' },
    { base: 'OO', letters: 'Ꝏ' },
    { base: 'OU', letters: 'Ȣ' },
    { base: 'P', letters: 'PⓅＰṔṖƤⱣꝐꝒꝔ' },
    { base: 'Q', letters: 'QⓆＱꝖꝘɊ' },
    { base: 'R', letters: 'RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ' },
    { base: 'S', letters: 'SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ' },
    { base: 'T', letters: 'TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ' },
    { base: 'TZ', letters: 'Ꜩ' },
    { base: 'U', letters: 'UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ' },
    { base: 'V', letters: 'VⓋＶṼṾƲꝞɅ' },
    { base: 'VY', letters: 'Ꝡ' },
    { base: 'W', letters: 'WⓌＷẀẂŴẆẄẈⱲ' },
    { base: 'X', letters: 'XⓍＸẊẌ' },
    { base: 'Y', letters: 'YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ' },
    { base: 'Z', letters: 'ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ' },
    { base: 'a', letters: 'aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ' },
    { base: 'aa', letters: 'ꜳ' },
    { base: 'ae', letters: 'æǽǣ' },
    { base: 'ao', letters: 'ꜵ' },
    { base: 'au', letters: 'ꜷ' },
    { base: 'av', letters: 'ꜹꜻ' },
    { base: 'ay', letters: 'ꜽ' },
    { base: 'b', letters: 'bⓑｂḃḅḇƀƃɓ' },
    { base: 'c', letters: 'cⓒｃćĉċčçḉƈȼꜿↄ' },
    { base: 'd', letters: 'dⓓｄḋďḍḑḓḏđƌɖɗꝺ' },
    { base: 'dz', letters: 'ǳǆ' },
    { base: 'e', letters: 'eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ' },
    { base: 'f', letters: 'fⓕｆḟƒꝼ' },
    { base: 'g', letters: 'gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ' },
    { base: 'h', letters: 'hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ' },
    { base: 'hv', letters: 'ƕ' },
    { base: 'i', letters: 'iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı' },
    { base: 'j', letters: 'jⓙｊĵǰɉ' },
    { base: 'k', letters: 'kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ' },
    { base: 'l', letters: 'lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ' },
    { base: 'lj', letters: 'ǉ' },
    { base: 'm', letters: 'mⓜｍḿṁṃɱɯ' },
    { base: 'n', letters: 'nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ' },
    { base: 'nj', letters: 'ǌ' },
    { base: 'o', letters: 'oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ' },
    { base: 'oi', letters: 'ƣ' },
    { base: 'ou', letters: 'ȣ' },
    { base: 'oo', letters: 'ꝏ' },
    { base: 'p', letters: 'pⓟｐṕṗƥᵽꝑꝓꝕ' },
    { base: 'q', letters: 'qⓠｑɋꝗꝙ' },
    { base: 'r', letters: 'rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ' },
    { base: 's', letters: 'sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ' },
    { base: 't', letters: 'tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ' },
    { base: 'tz', letters: 'ꜩ' },
    { base: 'u', letters: 'uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ' },
    { base: 'v', letters: 'vⓥｖṽṿʋꝟʌ' },
    { base: 'vy', letters: 'ꝡ' },
    { base: 'w', letters: 'wⓦｗẁẃŵẇẅẘẉⱳ' },
    { base: 'x', letters: 'xⓧｘẋẍ' },
    { base: 'y', letters: 'yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ' },
    { base: 'z', letters: 'zⓩｚźẑżžẓẕƶȥɀⱬꝣ' },
  ],
  jp = new RegExp(
    '[' +
      Ka.map(function (n) {
        return n.letters;
      }).join('') +
      ']',
    'g'
  ),
  ll = {};
for (var Sa = 0; Sa < Ka.length; Sa++)
  for (var Ca = Ka[Sa], Ta = 0; Ta < Ca.letters.length; Ta++) ll[Ca.letters[Ta]] = Ca.base;
var ul = function (r) {
    return r.replace(jp, function (e) {
      return ll[e];
    });
  },
  Bp = Yp(ul),
  mo = function (r) {
    return r.replace(/^\s+|\s+$/g, '');
  },
  Up = function (r) {
    return ''.concat(r.label, ' ').concat(r.value);
  },
  zp = function (r) {
    return function (e, t) {
      if (e.data.__isNew__) return !0;
      var a = Q({ ignoreCase: !0, ignoreAccents: !0, stringify: Up, trim: !0, matchFrom: 'any' }, r),
        i = a.ignoreCase,
        o = a.ignoreAccents,
        l = a.stringify,
        s = a.trim,
        u = a.matchFrom,
        c = s ? mo(t) : t,
        d = s ? mo(l(e)) : l(e);
      return (
        i && ((c = c.toLowerCase()), (d = d.toLowerCase())),
        o && ((c = Bp(c)), (d = ul(d))),
        u === 'start' ? d.substr(0, c.length) === c : d.indexOf(c) > -1
      );
    };
  },
  Qp = ['innerRef'];
function Kp(n) {
  var r = n.innerRef,
    e = Pt(n, Qp),
    t = Df(e, 'onExited', 'in', 'enter', 'exit', 'appear');
  return z(
    'input',
    K({ ref: r }, t, {
      css: mi(
        {
          label: 'dummyInput',
          background: 0,
          border: 0,
          caretColor: 'transparent',
          fontSize: 'inherit',
          gridArea: '1 / 1 / 2 / 3',
          outline: 0,
          padding: 0,
          width: 1,
          color: 'transparent',
          left: -100,
          opacity: 0,
          position: 'relative',
          transform: 'scale(.01)',
        },
        '',
        ''
      ),
    })
  );
}
var Gp = function (r) {
  (r.cancelable && r.preventDefault(), r.stopPropagation());
};
function Xp(n) {
  var r = n.isEnabled,
    e = n.onBottomArrive,
    t = n.onBottomLeave,
    a = n.onTopArrive,
    i = n.onTopLeave,
    o = y.useRef(!1),
    l = y.useRef(!1),
    s = y.useRef(0),
    u = y.useRef(null),
    c = y.useCallback(
      function (h, g) {
        if (u.current !== null) {
          var w = u.current,
            D = w.scrollTop,
            x = w.scrollHeight,
            b = w.clientHeight,
            C = u.current,
            k = g > 0,
            T = x - b - D,
            _ = !1;
          (T > g && o.current && (t && t(h), (o.current = !1)),
            k && l.current && (i && i(h), (l.current = !1)),
            k && g > T
              ? (e && !o.current && e(h), (C.scrollTop = x), (_ = !0), (o.current = !0))
              : !k && -g > D && (a && !l.current && a(h), (C.scrollTop = 0), (_ = !0), (l.current = !0)),
            _ && Gp(h));
        }
      },
      [e, t, a, i]
    ),
    d = y.useCallback(
      function (h) {
        c(h, h.deltaY);
      },
      [c]
    ),
    f = y.useCallback(function (h) {
      s.current = h.changedTouches[0].clientY;
    }, []),
    p = y.useCallback(
      function (h) {
        var g = s.current - h.changedTouches[0].clientY;
        c(h, g);
      },
      [c]
    ),
    v = y.useCallback(
      function (h) {
        if (h) {
          var g = yf ? { passive: !1 } : !1;
          (h.addEventListener('wheel', d, g),
            h.addEventListener('touchstart', f, g),
            h.addEventListener('touchmove', p, g));
        }
      },
      [p, f, d]
    ),
    m = y.useCallback(
      function (h) {
        h &&
          (h.removeEventListener('wheel', d, !1),
          h.removeEventListener('touchstart', f, !1),
          h.removeEventListener('touchmove', p, !1));
      },
      [p, f, d]
    );
  return (
    y.useEffect(
      function () {
        if (r) {
          var h = u.current;
          return (
            v(h),
            function () {
              m(h);
            }
          );
        }
      },
      [r, v, m]
    ),
    function (h) {
      u.current = h;
    }
  );
}
var ho = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'],
  vo = { boxSizing: 'border-box', overflow: 'hidden', position: 'relative', height: '100%' };
function go(n) {
  n.cancelable && n.preventDefault();
}
function yo(n) {
  n.stopPropagation();
}
function bo() {
  var n = this.scrollTop,
    r = this.scrollHeight,
    e = n + this.offsetHeight;
  n === 0 ? (this.scrollTop = 1) : e === r && (this.scrollTop = n - 1);
}
function wo() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}
var Do = !!(typeof window < 'u' && window.document && window.document.createElement),
  On = 0,
  rn = { capture: !1, passive: !1 };
function Zp(n) {
  var r = n.isEnabled,
    e = n.accountForScrollbars,
    t = e === void 0 ? !0 : e,
    a = y.useRef({}),
    i = y.useRef(null),
    o = y.useCallback(
      function (s) {
        if (Do) {
          var u = document.body,
            c = u && u.style;
          if (
            (t &&
              ho.forEach(function (v) {
                var m = c && c[v];
                a.current[v] = m;
              }),
            t && On < 1)
          ) {
            var d = parseInt(a.current.paddingRight, 10) || 0,
              f = document.body ? document.body.clientWidth : 0,
              p = window.innerWidth - f + d || 0;
            (Object.keys(vo).forEach(function (v) {
              var m = vo[v];
              c && (c[v] = m);
            }),
              c && (c.paddingRight = ''.concat(p, 'px')));
          }
          (u &&
            wo() &&
            (u.addEventListener('touchmove', go, rn),
            s && (s.addEventListener('touchstart', bo, rn), s.addEventListener('touchmove', yo, rn))),
            (On += 1));
        }
      },
      [t]
    ),
    l = y.useCallback(
      function (s) {
        if (Do) {
          var u = document.body,
            c = u && u.style;
          ((On = Math.max(On - 1, 0)),
            t &&
              On < 1 &&
              ho.forEach(function (d) {
                var f = a.current[d];
                c && (c[d] = f);
              }),
            u &&
              wo() &&
              (u.removeEventListener('touchmove', go, rn),
              s && (s.removeEventListener('touchstart', bo, rn), s.removeEventListener('touchmove', yo, rn))));
        }
      },
      [t]
    );
  return (
    y.useEffect(
      function () {
        if (r) {
          var s = i.current;
          return (
            o(s),
            function () {
              l(s);
            }
          );
        }
      },
      [r, o, l]
    ),
    function (s) {
      i.current = s;
    }
  );
}
var Jp = function (r) {
    var e = r.target;
    return e.ownerDocument.activeElement && e.ownerDocument.activeElement.blur();
  },
  em = { name: '1kfdb0e', styles: 'position:fixed;left:0;bottom:0;right:0;top:0' };
function tm(n) {
  var r = n.children,
    e = n.lockEnabled,
    t = n.captureEnabled,
    a = t === void 0 ? !0 : t,
    i = n.onBottomArrive,
    o = n.onBottomLeave,
    l = n.onTopArrive,
    s = n.onTopLeave,
    u = Xp({ isEnabled: a, onBottomArrive: i, onBottomLeave: o, onTopArrive: l, onTopLeave: s }),
    c = Zp({ isEnabled: e }),
    d = function (p) {
      (u(p), c(p));
    };
  return z(y.Fragment, null, e && z('div', { onClick: Jp, css: em }), r(d));
}
var nm = {
    name: '1a0ro4n-requiredInput',
    styles: 'label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%',
  },
  rm = function (r) {
    var e = r.name,
      t = r.onFocus;
    return z('input', {
      required: !0,
      name: e,
      tabIndex: -1,
      'aria-hidden': 'true',
      onFocus: t,
      css: nm,
      value: '',
      onChange: function () {},
    });
  },
  am = rm;
function Di(n) {
  var r;
  return typeof window < 'u' && window.navigator != null
    ? n.test(
        ((r = window.navigator.userAgentData) === null || r === void 0 ? void 0 : r.platform) ||
          window.navigator.platform
      )
    : !1;
}
function im() {
  return Di(/^iPhone/i);
}
function cl() {
  return Di(/^Mac/i);
}
function om() {
  return Di(/^iPad/i) || (cl() && navigator.maxTouchPoints > 1);
}
function sm() {
  return im() || om();
}
function lm() {
  return cl() || sm();
}
var um = function (r) {
    return r.label;
  },
  cm = function (r) {
    return r.label;
  },
  dm = function (r) {
    return r.value;
  },
  fm = function (r) {
    return !!r.isDisabled;
  },
  pm = {
    clearIndicator: Kf,
    container: Yf,
    control: np,
    dropdownIndicator: zf,
    group: op,
    groupHeading: lp,
    indicatorsContainer: Hf,
    indicatorSeparator: Xf,
    input: fp,
    loadingIndicator: ep,
    loadingMessage: If,
    menu: Tf,
    menuList: Mf,
    menuPortal: Nf,
    multiValue: gp,
    multiValueLabel: yp,
    multiValueRemove: bp,
    noOptionsMessage: Rf,
    option: Cp,
    placeholder: _p,
    singleValue: Ep,
    valueContainer: qf,
  },
  mm = {
    primary: '#2684FF',
    primary75: '#4C9AFF',
    primary50: '#B2D4FF',
    primary25: '#DEEBFF',
    danger: '#DE350B',
    dangerLight: '#FFBDAD',
    neutral0: 'hsl(0, 0%, 100%)',
    neutral5: 'hsl(0, 0%, 95%)',
    neutral10: 'hsl(0, 0%, 90%)',
    neutral20: 'hsl(0, 0%, 80%)',
    neutral30: 'hsl(0, 0%, 70%)',
    neutral40: 'hsl(0, 0%, 60%)',
    neutral50: 'hsl(0, 0%, 50%)',
    neutral60: 'hsl(0, 0%, 40%)',
    neutral70: 'hsl(0, 0%, 30%)',
    neutral80: 'hsl(0, 0%, 20%)',
    neutral90: 'hsl(0, 0%, 10%)',
  },
  hm = 4,
  dl = 4,
  vm = 38,
  gm = dl * 2,
  ym = { baseUnit: dl, controlHeight: vm, menuGutter: gm },
  Oa = { borderRadius: hm, colors: mm, spacing: ym },
  bm = {
    'aria-live': 'polite',
    backspaceRemovesValue: !0,
    blurInputOnSelect: uo(),
    captureMenuScroll: !uo(),
    classNames: {},
    closeMenuOnSelect: !0,
    closeMenuOnScroll: !1,
    components: {},
    controlShouldRenderValue: !0,
    escapeClearsValue: !1,
    filterOption: zp(),
    formatGroupLabel: um,
    getOptionLabel: cm,
    getOptionValue: dm,
    isDisabled: !1,
    isLoading: !1,
    isMulti: !1,
    isRtl: !1,
    isSearchable: !0,
    isOptionDisabled: fm,
    loadingMessage: function () {
      return 'Loading...';
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: !1,
    menuPlacement: 'bottom',
    menuPosition: 'absolute',
    menuShouldBlockScroll: !1,
    menuShouldScrollIntoView: !vf(),
    noOptionsMessage: function () {
      return 'No options';
    },
    openMenuOnFocus: !1,
    openMenuOnClick: !0,
    options: [],
    pageSize: 5,
    placeholder: 'Select...',
    screenReaderStatus: function (r) {
      var e = r.count;
      return ''.concat(e, ' result').concat(e !== 1 ? 's' : '', ' available');
    },
    styles: {},
    tabIndex: 0,
    tabSelectsValue: !0,
    unstyled: !1,
  };
function xo(n, r, e, t) {
  var a = ml(n, r, e),
    i = hl(n, r, e),
    o = pl(n, r),
    l = qr(n, r);
  return { type: 'option', data: r, isDisabled: a, isSelected: i, label: o, value: l, index: t };
}
function Dr(n, r) {
  return n.options
    .map(function (e, t) {
      if ('options' in e) {
        var a = e.options
          .map(function (o, l) {
            return xo(n, o, r, l);
          })
          .filter(function (o) {
            return So(n, o);
          });
        return a.length > 0 ? { type: 'group', data: e, options: a, index: t } : void 0;
      }
      var i = xo(n, e, r, t);
      return So(n, i) ? i : void 0;
    })
    .filter(bf);
}
function fl(n) {
  return n.reduce(function (r, e) {
    return (
      e.type === 'group'
        ? r.push.apply(
            r,
            ui(
              e.options.map(function (t) {
                return t.data;
              })
            )
          )
        : r.push(e.data),
      r
    );
  }, []);
}
function ko(n, r) {
  return n.reduce(function (e, t) {
    return (
      t.type === 'group'
        ? e.push.apply(
            e,
            ui(
              t.options.map(function (a) {
                return { data: a.data, id: ''.concat(r, '-').concat(t.index, '-').concat(a.index) };
              })
            )
          )
        : e.push({ data: t.data, id: ''.concat(r, '-').concat(t.index) }),
      e
    );
  }, []);
}
function wm(n, r) {
  return fl(Dr(n, r));
}
function So(n, r) {
  var e = n.inputValue,
    t = e === void 0 ? '' : e,
    a = r.data,
    i = r.isSelected,
    o = r.label,
    l = r.value;
  return (!gl(n) || !i) && vl(n, { label: o, value: l, data: a }, t);
}
function Dm(n, r) {
  var e = n.focusedValue,
    t = n.selectValue,
    a = t.indexOf(e);
  if (a > -1) {
    var i = r.indexOf(e);
    if (i > -1) return e;
    if (a < r.length) return r[a];
  }
  return null;
}
function xm(n, r) {
  var e = n.focusedOption;
  return e && r.indexOf(e) > -1 ? e : r[0];
}
var _a = function (r, e) {
    var t,
      a =
        (t = r.find(function (i) {
          return i.data === e;
        })) === null || t === void 0
          ? void 0
          : t.id;
    return a || null;
  },
  pl = function (r, e) {
    return r.getOptionLabel(e);
  },
  qr = function (r, e) {
    return r.getOptionValue(e);
  };
function ml(n, r, e) {
  return typeof n.isOptionDisabled == 'function' ? n.isOptionDisabled(r, e) : !1;
}
function hl(n, r, e) {
  if (e.indexOf(r) > -1) return !0;
  if (typeof n.isOptionSelected == 'function') return n.isOptionSelected(r, e);
  var t = qr(n, r);
  return e.some(function (a) {
    return qr(n, a) === t;
  });
}
function vl(n, r, e) {
  return n.filterOption ? n.filterOption(r, e) : !0;
}
var gl = function (r) {
    var e = r.hideSelectedOptions,
      t = r.isMulti;
    return e === void 0 ? t : e;
  },
  km = 1,
  yl = (function (n) {
    uc(e, n);
    var r = fc(e);
    function e(t) {
      var a;
      if (
        (sc(this, e),
        (a = r.call(this, t)),
        (a.state = {
          ariaSelection: null,
          focusedOption: null,
          focusedOptionId: null,
          focusableOptionsWithIds: [],
          focusedValue: null,
          inputIsHidden: !1,
          isFocused: !1,
          selectValue: [],
          clearFocusValueOnUpdate: !1,
          prevWasFocused: !1,
          inputIsHiddenAfterUpdate: void 0,
          prevProps: void 0,
          instancePrefix: '',
          isAppleDevice: !1,
        }),
        (a.blockOptionHover = !1),
        (a.isComposing = !1),
        (a.commonProps = void 0),
        (a.initialTouchX = 0),
        (a.initialTouchY = 0),
        (a.openAfterFocus = !1),
        (a.scrollToFocusedOptionOnUpdate = !1),
        (a.userIsDragging = void 0),
        (a.controlRef = null),
        (a.getControlRef = function (s) {
          a.controlRef = s;
        }),
        (a.focusedOptionRef = null),
        (a.getFocusedOptionRef = function (s) {
          a.focusedOptionRef = s;
        }),
        (a.menuListRef = null),
        (a.getMenuListRef = function (s) {
          a.menuListRef = s;
        }),
        (a.inputRef = null),
        (a.getInputRef = function (s) {
          a.inputRef = s;
        }),
        (a.focus = a.focusInput),
        (a.blur = a.blurInput),
        (a.onChange = function (s, u) {
          var c = a.props,
            d = c.onChange,
            f = c.name;
          ((u.name = f), a.ariaOnChange(s, u), d(s, u));
        }),
        (a.setValue = function (s, u, c) {
          var d = a.props,
            f = d.closeMenuOnSelect,
            p = d.isMulti,
            v = d.inputValue;
          (a.onInputChange('', { action: 'set-value', prevInputValue: v }),
            f && (a.setState({ inputIsHiddenAfterUpdate: !p }), a.onMenuClose()),
            a.setState({ clearFocusValueOnUpdate: !0 }),
            a.onChange(s, { action: u, option: c }));
        }),
        (a.selectOption = function (s) {
          var u = a.props,
            c = u.blurInputOnSelect,
            d = u.isMulti,
            f = u.name,
            p = a.state.selectValue,
            v = d && a.isOptionSelected(s, p),
            m = a.isOptionDisabled(s, p);
          if (v) {
            var h = a.getOptionValue(s);
            a.setValue(
              p.filter(function (g) {
                return a.getOptionValue(g) !== h;
              }),
              'deselect-option',
              s
            );
          } else if (!m) d ? a.setValue([].concat(ui(p), [s]), 'select-option', s) : a.setValue(s, 'select-option');
          else {
            a.ariaOnChange(s, { action: 'select-option', option: s, name: f });
            return;
          }
          c && a.blurInput();
        }),
        (a.removeValue = function (s) {
          var u = a.props.isMulti,
            c = a.state.selectValue,
            d = a.getOptionValue(s),
            f = c.filter(function (v) {
              return a.getOptionValue(v) !== d;
            }),
            p = lr(u, f, f[0] || null);
          (a.onChange(p, { action: 'remove-value', removedValue: s }), a.focusInput());
        }),
        (a.clearValue = function () {
          var s = a.state.selectValue;
          a.onChange(lr(a.props.isMulti, [], null), { action: 'clear', removedValues: s });
        }),
        (a.popValue = function () {
          var s = a.props.isMulti,
            u = a.state.selectValue,
            c = u[u.length - 1],
            d = u.slice(0, u.length - 1),
            f = lr(s, d, d[0] || null);
          c && a.onChange(f, { action: 'pop-value', removedValue: c });
        }),
        (a.getFocusedOptionId = function (s) {
          return _a(a.state.focusableOptionsWithIds, s);
        }),
        (a.getFocusableOptionsWithIds = function () {
          return ko(Dr(a.props, a.state.selectValue), a.getElementId('option'));
        }),
        (a.getValue = function () {
          return a.state.selectValue;
        }),
        (a.cx = function () {
          for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++) u[c] = arguments[c];
          return df.apply(void 0, [a.props.classNamePrefix].concat(u));
        }),
        (a.getOptionLabel = function (s) {
          return pl(a.props, s);
        }),
        (a.getOptionValue = function (s) {
          return qr(a.props, s);
        }),
        (a.getStyles = function (s, u) {
          var c = a.props.unstyled,
            d = pm[s](u, c);
          d.boxSizing = 'border-box';
          var f = a.props.styles[s];
          return f ? f(d, u) : d;
        }),
        (a.getClassNames = function (s, u) {
          var c, d;
          return (c = (d = a.props.classNames)[s]) === null || c === void 0 ? void 0 : c.call(d, u);
        }),
        (a.getElementId = function (s) {
          return ''.concat(a.state.instancePrefix, '-').concat(s);
        }),
        (a.getComponents = function () {
          return Fp(a.props);
        }),
        (a.buildCategorizedOptions = function () {
          return Dr(a.props, a.state.selectValue);
        }),
        (a.getCategorizedOptions = function () {
          return a.props.menuIsOpen ? a.buildCategorizedOptions() : [];
        }),
        (a.buildFocusableOptions = function () {
          return fl(a.buildCategorizedOptions());
        }),
        (a.getFocusableOptions = function () {
          return a.props.menuIsOpen ? a.buildFocusableOptions() : [];
        }),
        (a.ariaOnChange = function (s, u) {
          a.setState({ ariaSelection: Q({ value: s }, u) });
        }),
        (a.onMenuMouseDown = function (s) {
          s.button === 0 && (s.stopPropagation(), s.preventDefault(), a.focusInput());
        }),
        (a.onMenuMouseMove = function (s) {
          a.blockOptionHover = !1;
        }),
        (a.onControlMouseDown = function (s) {
          if (!s.defaultPrevented) {
            var u = a.props.openMenuOnClick;
            (a.state.isFocused
              ? a.props.menuIsOpen
                ? s.target.tagName !== 'INPUT' && s.target.tagName !== 'TEXTAREA' && a.onMenuClose()
                : u && a.openMenu('first')
              : (u && (a.openAfterFocus = !0), a.focusInput()),
              s.target.tagName !== 'INPUT' && s.target.tagName !== 'TEXTAREA' && s.preventDefault());
          }
        }),
        (a.onDropdownIndicatorMouseDown = function (s) {
          if (!(s && s.type === 'mousedown' && s.button !== 0) && !a.props.isDisabled) {
            var u = a.props,
              c = u.isMulti,
              d = u.menuIsOpen;
            (a.focusInput(),
              d ? (a.setState({ inputIsHiddenAfterUpdate: !c }), a.onMenuClose()) : a.openMenu('first'),
              s.preventDefault());
          }
        }),
        (a.onClearIndicatorMouseDown = function (s) {
          (s && s.type === 'mousedown' && s.button !== 0) ||
            (a.clearValue(),
            s.preventDefault(),
            (a.openAfterFocus = !1),
            s.type === 'touchend'
              ? a.focusInput()
              : setTimeout(function () {
                  return a.focusInput();
                }));
        }),
        (a.onScroll = function (s) {
          typeof a.props.closeMenuOnScroll == 'boolean'
            ? s.target instanceof HTMLElement && da(s.target) && a.props.onMenuClose()
            : typeof a.props.closeMenuOnScroll == 'function' && a.props.closeMenuOnScroll(s) && a.props.onMenuClose();
        }),
        (a.onCompositionStart = function () {
          a.isComposing = !0;
        }),
        (a.onCompositionEnd = function () {
          a.isComposing = !1;
        }),
        (a.onTouchStart = function (s) {
          var u = s.touches,
            c = u && u.item(0);
          c && ((a.initialTouchX = c.clientX), (a.initialTouchY = c.clientY), (a.userIsDragging = !1));
        }),
        (a.onTouchMove = function (s) {
          var u = s.touches,
            c = u && u.item(0);
          if (c) {
            var d = Math.abs(c.clientX - a.initialTouchX),
              f = Math.abs(c.clientY - a.initialTouchY),
              p = 5;
            a.userIsDragging = d > p || f > p;
          }
        }),
        (a.onTouchEnd = function (s) {
          a.userIsDragging ||
            (a.controlRef &&
              !a.controlRef.contains(s.target) &&
              a.menuListRef &&
              !a.menuListRef.contains(s.target) &&
              a.blurInput(),
            (a.initialTouchX = 0),
            (a.initialTouchY = 0));
        }),
        (a.onControlTouchEnd = function (s) {
          a.userIsDragging || a.onControlMouseDown(s);
        }),
        (a.onClearIndicatorTouchEnd = function (s) {
          a.userIsDragging || a.onClearIndicatorMouseDown(s);
        }),
        (a.onDropdownIndicatorTouchEnd = function (s) {
          a.userIsDragging || a.onDropdownIndicatorMouseDown(s);
        }),
        (a.handleInputChange = function (s) {
          var u = a.props.inputValue,
            c = s.currentTarget.value;
          (a.setState({ inputIsHiddenAfterUpdate: !1 }),
            a.onInputChange(c, { action: 'input-change', prevInputValue: u }),
            a.props.menuIsOpen || a.onMenuOpen());
        }),
        (a.onInputFocus = function (s) {
          (a.props.onFocus && a.props.onFocus(s),
            a.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
            (a.openAfterFocus || a.props.openMenuOnFocus) && a.openMenu('first'),
            (a.openAfterFocus = !1));
        }),
        (a.onInputBlur = function (s) {
          var u = a.props.inputValue;
          if (a.menuListRef && a.menuListRef.contains(document.activeElement)) {
            a.inputRef.focus();
            return;
          }
          (a.props.onBlur && a.props.onBlur(s),
            a.onInputChange('', { action: 'input-blur', prevInputValue: u }),
            a.onMenuClose(),
            a.setState({ focusedValue: null, isFocused: !1 }));
        }),
        (a.onOptionHover = function (s) {
          if (!(a.blockOptionHover || a.state.focusedOption === s)) {
            var u = a.getFocusableOptions(),
              c = u.indexOf(s);
            a.setState({ focusedOption: s, focusedOptionId: c > -1 ? a.getFocusedOptionId(s) : null });
          }
        }),
        (a.shouldHideSelectedOptions = function () {
          return gl(a.props);
        }),
        (a.onValueInputFocus = function (s) {
          (s.preventDefault(), s.stopPropagation(), a.focus());
        }),
        (a.onKeyDown = function (s) {
          var u = a.props,
            c = u.isMulti,
            d = u.backspaceRemovesValue,
            f = u.escapeClearsValue,
            p = u.inputValue,
            v = u.isClearable,
            m = u.isDisabled,
            h = u.menuIsOpen,
            g = u.onKeyDown,
            w = u.tabSelectsValue,
            D = u.openMenuOnFocus,
            x = a.state,
            b = x.focusedOption,
            C = x.focusedValue,
            k = x.selectValue;
          if (!m && !(typeof g == 'function' && (g(s), s.defaultPrevented))) {
            switch (((a.blockOptionHover = !0), s.key)) {
              case 'ArrowLeft':
                if (!c || p) return;
                a.focusValue('previous');
                break;
              case 'ArrowRight':
                if (!c || p) return;
                a.focusValue('next');
                break;
              case 'Delete':
              case 'Backspace':
                if (p) return;
                if (C) a.removeValue(C);
                else {
                  if (!d) return;
                  c ? a.popValue() : v && a.clearValue();
                }
                break;
              case 'Tab':
                if (a.isComposing || s.shiftKey || !h || !w || !b || (D && a.isOptionSelected(b, k))) return;
                a.selectOption(b);
                break;
              case 'Enter':
                if (s.keyCode === 229) break;
                if (h) {
                  if (!b || a.isComposing) return;
                  a.selectOption(b);
                  break;
                }
                return;
              case 'Escape':
                h
                  ? (a.setState({ inputIsHiddenAfterUpdate: !1 }),
                    a.onInputChange('', { action: 'menu-close', prevInputValue: p }),
                    a.onMenuClose())
                  : v && f && a.clearValue();
                break;
              case ' ':
                if (p) return;
                if (!h) {
                  a.openMenu('first');
                  break;
                }
                if (!b) return;
                a.selectOption(b);
                break;
              case 'ArrowUp':
                h ? a.focusOption('up') : a.openMenu('last');
                break;
              case 'ArrowDown':
                h ? a.focusOption('down') : a.openMenu('first');
                break;
              case 'PageUp':
                if (!h) return;
                a.focusOption('pageup');
                break;
              case 'PageDown':
                if (!h) return;
                a.focusOption('pagedown');
                break;
              case 'Home':
                if (!h) return;
                a.focusOption('first');
                break;
              case 'End':
                if (!h) return;
                a.focusOption('last');
                break;
              default:
                return;
            }
            s.preventDefault();
          }
        }),
        (a.state.instancePrefix = 'react-select-' + (a.props.instanceId || ++km)),
        (a.state.selectValue = so(t.value)),
        t.menuIsOpen && a.state.selectValue.length)
      ) {
        var i = a.getFocusableOptionsWithIds(),
          o = a.buildFocusableOptions(),
          l = o.indexOf(a.state.selectValue[0]);
        ((a.state.focusableOptionsWithIds = i),
          (a.state.focusedOption = o[l]),
          (a.state.focusedOptionId = _a(i, o[l])));
      }
      return a;
    }
    return (
      lc(
        e,
        [
          {
            key: 'componentDidMount',
            value: function () {
              (this.startListeningComposition(),
                this.startListeningToTouch(),
                this.props.closeMenuOnScroll &&
                  document &&
                  document.addEventListener &&
                  document.addEventListener('scroll', this.onScroll, !0),
                this.props.autoFocus && this.focusInput(),
                this.props.menuIsOpen &&
                  this.state.focusedOption &&
                  this.menuListRef &&
                  this.focusedOptionRef &&
                  lo(this.menuListRef, this.focusedOptionRef),
                lm() && this.setState({ isAppleDevice: !0 }));
            },
          },
          {
            key: 'componentDidUpdate',
            value: function (a) {
              var i = this.props,
                o = i.isDisabled,
                l = i.menuIsOpen,
                s = this.state.isFocused;
              (((s && !o && a.isDisabled) || (s && l && !a.menuIsOpen)) && this.focusInput(),
                s && o && !a.isDisabled
                  ? this.setState({ isFocused: !1 }, this.onMenuClose)
                  : !s &&
                    !o &&
                    a.isDisabled &&
                    this.inputRef === document.activeElement &&
                    this.setState({ isFocused: !0 }),
                this.menuListRef &&
                  this.focusedOptionRef &&
                  this.scrollToFocusedOptionOnUpdate &&
                  (lo(this.menuListRef, this.focusedOptionRef), (this.scrollToFocusedOptionOnUpdate = !1)));
            },
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              (this.stopListeningComposition(),
                this.stopListeningToTouch(),
                document.removeEventListener('scroll', this.onScroll, !0));
            },
          },
          {
            key: 'onMenuOpen',
            value: function () {
              this.props.onMenuOpen();
            },
          },
          {
            key: 'onMenuClose',
            value: function () {
              (this.onInputChange('', { action: 'menu-close', prevInputValue: this.props.inputValue }),
                this.props.onMenuClose());
            },
          },
          {
            key: 'onInputChange',
            value: function (a, i) {
              this.props.onInputChange(a, i);
            },
          },
          {
            key: 'focusInput',
            value: function () {
              this.inputRef && this.inputRef.focus();
            },
          },
          {
            key: 'blurInput',
            value: function () {
              this.inputRef && this.inputRef.blur();
            },
          },
          {
            key: 'openMenu',
            value: function (a) {
              var i = this,
                o = this.state,
                l = o.selectValue,
                s = o.isFocused,
                u = this.buildFocusableOptions(),
                c = a === 'first' ? 0 : u.length - 1;
              if (!this.props.isMulti) {
                var d = u.indexOf(l[0]);
                d > -1 && (c = d);
              }
              ((this.scrollToFocusedOptionOnUpdate = !(s && this.menuListRef)),
                this.setState(
                  {
                    inputIsHiddenAfterUpdate: !1,
                    focusedValue: null,
                    focusedOption: u[c],
                    focusedOptionId: this.getFocusedOptionId(u[c]),
                  },
                  function () {
                    return i.onMenuOpen();
                  }
                ));
            },
          },
          {
            key: 'focusValue',
            value: function (a) {
              var i = this.state,
                o = i.selectValue,
                l = i.focusedValue;
              if (this.props.isMulti) {
                this.setState({ focusedOption: null });
                var s = o.indexOf(l);
                l || (s = -1);
                var u = o.length - 1,
                  c = -1;
                if (o.length) {
                  switch (a) {
                    case 'previous':
                      s === 0 ? (c = 0) : s === -1 ? (c = u) : (c = s - 1);
                      break;
                    case 'next':
                      s > -1 && s < u && (c = s + 1);
                      break;
                  }
                  this.setState({ inputIsHidden: c !== -1, focusedValue: o[c] });
                }
              }
            },
          },
          {
            key: 'focusOption',
            value: function () {
              var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'first',
                i = this.props.pageSize,
                o = this.state.focusedOption,
                l = this.getFocusableOptions();
              if (l.length) {
                var s = 0,
                  u = l.indexOf(o);
                (o || (u = -1),
                  a === 'up'
                    ? (s = u > 0 ? u - 1 : l.length - 1)
                    : a === 'down'
                      ? (s = (u + 1) % l.length)
                      : a === 'pageup'
                        ? ((s = u - i), s < 0 && (s = 0))
                        : a === 'pagedown'
                          ? ((s = u + i), s > l.length - 1 && (s = l.length - 1))
                          : a === 'last' && (s = l.length - 1),
                  (this.scrollToFocusedOptionOnUpdate = !0),
                  this.setState({
                    focusedOption: l[s],
                    focusedValue: null,
                    focusedOptionId: this.getFocusedOptionId(l[s]),
                  }));
              }
            },
          },
          {
            key: 'getTheme',
            value: function () {
              return this.props.theme
                ? typeof this.props.theme == 'function'
                  ? this.props.theme(Oa)
                  : Q(Q({}, Oa), this.props.theme)
                : Oa;
            },
          },
          {
            key: 'getCommonProps',
            value: function () {
              var a = this.clearValue,
                i = this.cx,
                o = this.getStyles,
                l = this.getClassNames,
                s = this.getValue,
                u = this.selectOption,
                c = this.setValue,
                d = this.props,
                f = d.isMulti,
                p = d.isRtl,
                v = d.options,
                m = this.hasValue();
              return {
                clearValue: a,
                cx: i,
                getStyles: o,
                getClassNames: l,
                getValue: s,
                hasValue: m,
                isMulti: f,
                isRtl: p,
                options: v,
                selectOption: u,
                selectProps: d,
                setValue: c,
                theme: this.getTheme(),
              };
            },
          },
          {
            key: 'hasValue',
            value: function () {
              var a = this.state.selectValue;
              return a.length > 0;
            },
          },
          {
            key: 'hasOptions',
            value: function () {
              return !!this.getFocusableOptions().length;
            },
          },
          {
            key: 'isClearable',
            value: function () {
              var a = this.props,
                i = a.isClearable,
                o = a.isMulti;
              return i === void 0 ? o : i;
            },
          },
          {
            key: 'isOptionDisabled',
            value: function (a, i) {
              return ml(this.props, a, i);
            },
          },
          {
            key: 'isOptionSelected',
            value: function (a, i) {
              return hl(this.props, a, i);
            },
          },
          {
            key: 'filterOption',
            value: function (a, i) {
              return vl(this.props, a, i);
            },
          },
          {
            key: 'formatOptionLabel',
            value: function (a, i) {
              if (typeof this.props.formatOptionLabel == 'function') {
                var o = this.props.inputValue,
                  l = this.state.selectValue;
                return this.props.formatOptionLabel(a, { context: i, inputValue: o, selectValue: l });
              } else return this.getOptionLabel(a);
            },
          },
          {
            key: 'formatGroupLabel',
            value: function (a) {
              return this.props.formatGroupLabel(a);
            },
          },
          {
            key: 'startListeningComposition',
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener('compositionstart', this.onCompositionStart, !1),
                document.addEventListener('compositionend', this.onCompositionEnd, !1));
            },
          },
          {
            key: 'stopListeningComposition',
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener('compositionstart', this.onCompositionStart),
                document.removeEventListener('compositionend', this.onCompositionEnd));
            },
          },
          {
            key: 'startListeningToTouch',
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener('touchstart', this.onTouchStart, !1),
                document.addEventListener('touchmove', this.onTouchMove, !1),
                document.addEventListener('touchend', this.onTouchEnd, !1));
            },
          },
          {
            key: 'stopListeningToTouch',
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener('touchstart', this.onTouchStart),
                document.removeEventListener('touchmove', this.onTouchMove),
                document.removeEventListener('touchend', this.onTouchEnd));
            },
          },
          {
            key: 'renderInput',
            value: function () {
              var a = this.props,
                i = a.isDisabled,
                o = a.isSearchable,
                l = a.inputId,
                s = a.inputValue,
                u = a.tabIndex,
                c = a.form,
                d = a.menuIsOpen,
                f = a.required,
                p = this.getComponents(),
                v = p.Input,
                m = this.state,
                h = m.inputIsHidden,
                g = m.ariaSelection,
                w = this.commonProps,
                D = l || this.getElementId('input'),
                x = Q(
                  Q(
                    Q(
                      {
                        'aria-autocomplete': 'list',
                        'aria-expanded': d,
                        'aria-haspopup': !0,
                        'aria-errormessage': this.props['aria-errormessage'],
                        'aria-invalid': this.props['aria-invalid'],
                        'aria-label': this.props['aria-label'],
                        'aria-labelledby': this.props['aria-labelledby'],
                        'aria-required': f,
                        role: 'combobox',
                        'aria-activedescendant': this.state.isAppleDevice ? void 0 : this.state.focusedOptionId || '',
                      },
                      d && { 'aria-controls': this.getElementId('listbox') }
                    ),
                    !o && { 'aria-readonly': !0 }
                  ),
                  this.hasValue()
                    ? (g == null ? void 0 : g.action) === 'initial-input-focus' && {
                        'aria-describedby': this.getElementId('live-region'),
                      }
                    : { 'aria-describedby': this.getElementId('placeholder') }
                );
              return o
                ? y.createElement(
                    v,
                    K(
                      {},
                      w,
                      {
                        autoCapitalize: 'none',
                        autoComplete: 'off',
                        autoCorrect: 'off',
                        id: D,
                        innerRef: this.getInputRef,
                        isDisabled: i,
                        isHidden: h,
                        onBlur: this.onInputBlur,
                        onChange: this.handleInputChange,
                        onFocus: this.onInputFocus,
                        spellCheck: 'false',
                        tabIndex: u,
                        form: c,
                        type: 'text',
                        value: s,
                      },
                      x
                    )
                  )
                : y.createElement(
                    Kp,
                    K(
                      {
                        id: D,
                        innerRef: this.getInputRef,
                        onBlur: this.onInputBlur,
                        onChange: Yr,
                        onFocus: this.onInputFocus,
                        disabled: i,
                        tabIndex: u,
                        inputMode: 'none',
                        form: c,
                        value: '',
                      },
                      x
                    )
                  );
            },
          },
          {
            key: 'renderPlaceholderOrValue',
            value: function () {
              var a = this,
                i = this.getComponents(),
                o = i.MultiValue,
                l = i.MultiValueContainer,
                s = i.MultiValueLabel,
                u = i.MultiValueRemove,
                c = i.SingleValue,
                d = i.Placeholder,
                f = this.commonProps,
                p = this.props,
                v = p.controlShouldRenderValue,
                m = p.isDisabled,
                h = p.isMulti,
                g = p.inputValue,
                w = p.placeholder,
                D = this.state,
                x = D.selectValue,
                b = D.focusedValue,
                C = D.isFocused;
              if (!this.hasValue() || !v)
                return g
                  ? null
                  : y.createElement(
                      d,
                      K({}, f, {
                        key: 'placeholder',
                        isDisabled: m,
                        isFocused: C,
                        innerProps: { id: this.getElementId('placeholder') },
                      }),
                      w
                    );
              if (h)
                return x.map(function (T, _) {
                  var I = T === b,
                    P = ''.concat(a.getOptionLabel(T), '-').concat(a.getOptionValue(T));
                  return y.createElement(
                    o,
                    K({}, f, {
                      components: { Container: l, Label: s, Remove: u },
                      isFocused: I,
                      isDisabled: m,
                      key: P,
                      index: _,
                      removeProps: {
                        onClick: function () {
                          return a.removeValue(T);
                        },
                        onTouchEnd: function () {
                          return a.removeValue(T);
                        },
                        onMouseDown: function (L) {
                          L.preventDefault();
                        },
                      },
                      data: T,
                    }),
                    a.formatOptionLabel(T, 'value')
                  );
                });
              if (g) return null;
              var k = x[0];
              return y.createElement(c, K({}, f, { data: k, isDisabled: m }), this.formatOptionLabel(k, 'value'));
            },
          },
          {
            key: 'renderClearIndicator',
            value: function () {
              var a = this.getComponents(),
                i = a.ClearIndicator,
                o = this.commonProps,
                l = this.props,
                s = l.isDisabled,
                u = l.isLoading,
                c = this.state.isFocused;
              if (!this.isClearable() || !i || s || !this.hasValue() || u) return null;
              var d = {
                onMouseDown: this.onClearIndicatorMouseDown,
                onTouchEnd: this.onClearIndicatorTouchEnd,
                'aria-hidden': 'true',
              };
              return y.createElement(i, K({}, o, { innerProps: d, isFocused: c }));
            },
          },
          {
            key: 'renderLoadingIndicator',
            value: function () {
              var a = this.getComponents(),
                i = a.LoadingIndicator,
                o = this.commonProps,
                l = this.props,
                s = l.isDisabled,
                u = l.isLoading,
                c = this.state.isFocused;
              if (!i || !u) return null;
              var d = { 'aria-hidden': 'true' };
              return y.createElement(i, K({}, o, { innerProps: d, isDisabled: s, isFocused: c }));
            },
          },
          {
            key: 'renderIndicatorSeparator',
            value: function () {
              var a = this.getComponents(),
                i = a.DropdownIndicator,
                o = a.IndicatorSeparator;
              if (!i || !o) return null;
              var l = this.commonProps,
                s = this.props.isDisabled,
                u = this.state.isFocused;
              return y.createElement(o, K({}, l, { isDisabled: s, isFocused: u }));
            },
          },
          {
            key: 'renderDropdownIndicator',
            value: function () {
              var a = this.getComponents(),
                i = a.DropdownIndicator;
              if (!i) return null;
              var o = this.commonProps,
                l = this.props.isDisabled,
                s = this.state.isFocused,
                u = {
                  onMouseDown: this.onDropdownIndicatorMouseDown,
                  onTouchEnd: this.onDropdownIndicatorTouchEnd,
                  'aria-hidden': 'true',
                };
              return y.createElement(i, K({}, o, { innerProps: u, isDisabled: l, isFocused: s }));
            },
          },
          {
            key: 'renderMenu',
            value: function () {
              var a = this,
                i = this.getComponents(),
                o = i.Group,
                l = i.GroupHeading,
                s = i.Menu,
                u = i.MenuList,
                c = i.MenuPortal,
                d = i.LoadingMessage,
                f = i.NoOptionsMessage,
                p = i.Option,
                v = this.commonProps,
                m = this.state.focusedOption,
                h = this.props,
                g = h.captureMenuScroll,
                w = h.inputValue,
                D = h.isLoading,
                x = h.loadingMessage,
                b = h.minMenuHeight,
                C = h.maxMenuHeight,
                k = h.menuIsOpen,
                T = h.menuPlacement,
                _ = h.menuPosition,
                I = h.menuPortalTarget,
                P = h.menuShouldBlockScroll,
                E = h.menuShouldScrollIntoView,
                L = h.noOptionsMessage,
                B = h.onMenuScrollToTop,
                N = h.onMenuScrollToBottom;
              if (!k) return null;
              var R = function (F, V) {
                  var U = F.type,
                    S = F.data,
                    J = F.isDisabled,
                    M = F.isSelected,
                    le = F.label,
                    re = F.value,
                    te = m === S,
                    Z = J
                      ? void 0
                      : function () {
                          return a.onOptionHover(S);
                        },
                    ke = J
                      ? void 0
                      : function () {
                          return a.selectOption(S);
                        },
                    Pe = ''.concat(a.getElementId('option'), '-').concat(V),
                    ne = {
                      id: Pe,
                      onClick: ke,
                      onMouseMove: Z,
                      onMouseOver: Z,
                      tabIndex: -1,
                      role: 'option',
                      'aria-selected': a.state.isAppleDevice ? void 0 : M,
                    };
                  return y.createElement(
                    p,
                    K({}, v, {
                      innerProps: ne,
                      data: S,
                      isDisabled: J,
                      isSelected: M,
                      key: Pe,
                      label: le,
                      type: U,
                      value: re,
                      isFocused: te,
                      innerRef: te ? a.getFocusedOptionRef : void 0,
                    }),
                    a.formatOptionLabel(F.data, 'menu')
                  );
                },
                Y;
              if (this.hasOptions())
                Y = this.getCategorizedOptions().map(function (A) {
                  if (A.type === 'group') {
                    var F = A.data,
                      V = A.options,
                      U = A.index,
                      S = ''.concat(a.getElementId('group'), '-').concat(U),
                      J = ''.concat(S, '-heading');
                    return y.createElement(
                      o,
                      K({}, v, {
                        key: S,
                        data: F,
                        options: V,
                        Heading: l,
                        headingProps: { id: J, data: A.data },
                        label: a.formatGroupLabel(A.data),
                      }),
                      A.options.map(function (M) {
                        return R(M, ''.concat(U, '-').concat(M.index));
                      })
                    );
                  } else if (A.type === 'option') return R(A, ''.concat(A.index));
                });
              else if (D) {
                var q = x({ inputValue: w });
                if (q === null) return null;
                Y = y.createElement(d, v, q);
              } else {
                var X = L({ inputValue: w });
                if (X === null) return null;
                Y = y.createElement(f, v, X);
              }
              var se = {
                  minMenuHeight: b,
                  maxMenuHeight: C,
                  menuPlacement: T,
                  menuPosition: _,
                  menuShouldScrollIntoView: E,
                },
                ge = y.createElement(Of, K({}, v, se), function (A) {
                  var F = A.ref,
                    V = A.placerProps,
                    U = V.placement,
                    S = V.maxHeight;
                  return y.createElement(
                    s,
                    K({}, v, se, {
                      innerRef: F,
                      innerProps: { onMouseDown: a.onMenuMouseDown, onMouseMove: a.onMenuMouseMove },
                      isLoading: D,
                      placement: U,
                    }),
                    y.createElement(
                      tm,
                      { captureEnabled: g, onTopArrive: B, onBottomArrive: N, lockEnabled: P },
                      function (J) {
                        return y.createElement(
                          u,
                          K({}, v, {
                            innerRef: function (le) {
                              (a.getMenuListRef(le), J(le));
                            },
                            innerProps: {
                              role: 'listbox',
                              'aria-multiselectable': v.isMulti,
                              id: a.getElementId('listbox'),
                            },
                            isLoading: D,
                            maxHeight: S,
                            focusedOption: m,
                          }),
                          Y
                        );
                      }
                    )
                  );
                });
              return I || _ === 'fixed'
                ? y.createElement(
                    c,
                    K({}, v, { appendTo: I, controlElement: this.controlRef, menuPlacement: T, menuPosition: _ }),
                    ge
                  )
                : ge;
            },
          },
          {
            key: 'renderFormField',
            value: function () {
              var a = this,
                i = this.props,
                o = i.delimiter,
                l = i.isDisabled,
                s = i.isMulti,
                u = i.name,
                c = i.required,
                d = this.state.selectValue;
              if (c && !this.hasValue() && !l) return y.createElement(am, { name: u, onFocus: this.onValueInputFocus });
              if (!(!u || l))
                if (s)
                  if (o) {
                    var f = d
                      .map(function (m) {
                        return a.getOptionValue(m);
                      })
                      .join(o);
                    return y.createElement('input', { name: u, type: 'hidden', value: f });
                  } else {
                    var p =
                      d.length > 0
                        ? d.map(function (m, h) {
                            return y.createElement('input', {
                              key: 'i-'.concat(h),
                              name: u,
                              type: 'hidden',
                              value: a.getOptionValue(m),
                            });
                          })
                        : y.createElement('input', { name: u, type: 'hidden', value: '' });
                    return y.createElement('div', null, p);
                  }
                else {
                  var v = d[0] ? this.getOptionValue(d[0]) : '';
                  return y.createElement('input', { name: u, type: 'hidden', value: v });
                }
            },
          },
          {
            key: 'renderLiveRegion',
            value: function () {
              var a = this.commonProps,
                i = this.state,
                o = i.ariaSelection,
                l = i.focusedOption,
                s = i.focusedValue,
                u = i.isFocused,
                c = i.selectValue,
                d = this.getFocusableOptions();
              return y.createElement(
                Wp,
                K({}, a, {
                  id: this.getElementId('live-region'),
                  ariaSelection: o,
                  focusedOption: l,
                  focusedValue: s,
                  isFocused: u,
                  selectValue: c,
                  focusableOptions: d,
                  isAppleDevice: this.state.isAppleDevice,
                })
              );
            },
          },
          {
            key: 'render',
            value: function () {
              var a = this.getComponents(),
                i = a.Control,
                o = a.IndicatorsContainer,
                l = a.SelectContainer,
                s = a.ValueContainer,
                u = this.props,
                c = u.className,
                d = u.id,
                f = u.isDisabled,
                p = u.menuIsOpen,
                v = this.state.isFocused,
                m = (this.commonProps = this.getCommonProps());
              return y.createElement(
                l,
                K({}, m, {
                  className: c,
                  innerProps: { id: d, onKeyDown: this.onKeyDown },
                  isDisabled: f,
                  isFocused: v,
                }),
                this.renderLiveRegion(),
                y.createElement(
                  i,
                  K({}, m, {
                    innerRef: this.getControlRef,
                    innerProps: { onMouseDown: this.onControlMouseDown, onTouchEnd: this.onControlTouchEnd },
                    isDisabled: f,
                    isFocused: v,
                    menuIsOpen: p,
                  }),
                  y.createElement(s, K({}, m, { isDisabled: f }), this.renderPlaceholderOrValue(), this.renderInput()),
                  y.createElement(
                    o,
                    K({}, m, { isDisabled: f }),
                    this.renderClearIndicator(),
                    this.renderLoadingIndicator(),
                    this.renderIndicatorSeparator(),
                    this.renderDropdownIndicator()
                  )
                ),
                this.renderMenu(),
                this.renderFormField()
              );
            },
          },
        ],
        [
          {
            key: 'getDerivedStateFromProps',
            value: function (a, i) {
              var o = i.prevProps,
                l = i.clearFocusValueOnUpdate,
                s = i.inputIsHiddenAfterUpdate,
                u = i.ariaSelection,
                c = i.isFocused,
                d = i.prevWasFocused,
                f = i.instancePrefix,
                p = a.options,
                v = a.value,
                m = a.menuIsOpen,
                h = a.inputValue,
                g = a.isMulti,
                w = so(v),
                D = {};
              if (o && (v !== o.value || p !== o.options || m !== o.menuIsOpen || h !== o.inputValue)) {
                var x = m ? wm(a, w) : [],
                  b = m ? ko(Dr(a, w), ''.concat(f, '-option')) : [],
                  C = l ? Dm(i, w) : null,
                  k = xm(i, x),
                  T = _a(b, k);
                D = {
                  selectValue: w,
                  focusedOption: k,
                  focusedOptionId: T,
                  focusableOptionsWithIds: b,
                  focusedValue: C,
                  clearFocusValueOnUpdate: !1,
                };
              }
              var _ = s != null && a !== o ? { inputIsHidden: s, inputIsHiddenAfterUpdate: void 0 } : {},
                I = u,
                P = c && d;
              return (
                c &&
                  !P &&
                  ((I = { value: lr(g, w, w[0] || null), options: w, action: 'initial-input-focus' }), (P = !d)),
                (u == null ? void 0 : u.action) === 'initial-input-focus' && (I = null),
                Q(Q(Q({}, D), _), {}, { prevProps: a, ariaSelection: I, prevWasFocused: P })
              );
            },
          },
        ]
      ),
      e
    );
  })(y.Component);
yl.defaultProps = bm;
var Sm = y.forwardRef(function (n, r) {
    var e = oc(n);
    return y.createElement(yl, K({ ref: r }, e));
  }),
  Cm = Sm;
const Ne = { ACCENT: '#5196D5', ERROR: '#D65947' };
function bl(n = !1) {
  return (e) => {
    var l;
    const t = {
        control: () => ({
          background: 'none !important',
          borderBottom: 'solid 0.13em',
          borderColor: e.borderColor,
          cursor: 'text',
          display: 'flex',
          paddingTop: n ? '1.2em' : '0',
          transition: '0.2s ease-in-out',
        }),
        indicatorSeparator: () => ({ display: 'none' }),
        indicatorsContainer: () => ({ display: 'none' }),
        input: (s) => ({ ...s, color: 'inherit', marginTop: n ? '-1em' : '0.2em', width: '5em' }),
        multiValue: () => {
          var s;
          return {
            border: `solid 1px ${((s = e.colors) == null ? void 0 : s.accent) || Ne.ACCENT}`,
            display: 'flex',
            marginBottom: '0.2em',
            marginRight: '0.2em',
          };
        },
        multiValueLabel: (s) => ({ ...s, color: 'inherit' }),
        multiValueRemove: (s) => ({
          ...s,
          '&:hover': { background: 'none', cursor: 'pointer', opacity: 1 },
          color: 'inherit !important',
          opacity: 0.5,
        }),
        option: (s, u) => {
          var c, d;
          return {
            background: u.isSelected
              ? ((c = e.colors) == null ? void 0 : c.accent) || Ne.ACCENT
              : u.isFocused
                ? (((d = e.colors) == null ? void 0 : d.accent) || Ne.ACCENT) + '1F'
                : 'white',
            color: u.isSelected ? 'white' : '#555',
            padding: '0.25em 0.5em',
          };
        },
        placeholder: () => ({ display: 'none' }),
        singleValue: () => {
          var s;
          return {
            color: e.isErrored ? ((s = e.colors) == null ? void 0 : s.error) || Ne.ERROR : 'inherit',
            overflow: 'hidden',
            position: 'absolute',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '100%',
          };
        },
        valueContainer: (s) => ({
          ...s,
          alignItems: n ? 'start' : 'flex-end',
          margin: '0',
          marginTop: '0.3em',
          padding: '0',
        }),
      },
      a = (s) => {
        if (n) {
          const u = {};
          ([...s.map((c) => c.value)].forEach((c) => (u[c] = !0)), e.onChange(Object.keys(u)));
        } else e.onChange(s && s.value);
      },
      i = (l = e.options) == null ? void 0 : l.map(({ value: s, label: u }) => ({ label: u || s, value: s })),
      o =
        i == null
          ? void 0
          : i.filter((s) => (Array.isArray(e.value) ? e.value.includes(s.value) : s.value === e.value));
    return H.jsx(Cm, {
      name: e.name,
      menuPlacement: 'bottom',
      options: i,
      styles: t,
      isMulti: n,
      isDisabled: e.disabled,
      onFocus: e.onFocus,
      onBlur: e.onBlur,
      onChange: a,
      value: o,
    });
  };
}
const Tm = bl(!0),
  Om = bl(),
  wl = (n) => {
    var o;
    const r = y.useRef(null),
      e = y.useRef(null),
      t = () => {
        var l, s;
        ((l = e.current) == null || l.blur(),
          (s = r.current) == null || s.click(),
          n.onFocus(),
          (document.body.onfocus = i));
      },
      a = (l) => {
        const s = l.target.files;
        n.onChange([...s]);
      },
      i = () => {
        (n.onBlur(), (document.body.onfocus = null));
      };
    return H.jsxs(y.Fragment, {
      children: [
        H.jsx('input', {
          id: n.id,
          required: n.required,
          disabled: n.disabled,
          max: n.max,
          min: n.min,
          name: n.name,
          autoComplete: void 0,
          value: '',
          ref: r,
          style: { display: 'none' },
          type: 'file',
          multiple: !0,
          accept: ((o = n.extensions) == null ? void 0 : o.join(',')) || void 0,
          onChange: a,
          onBlur: i,
        }),
        H.jsx('input', {
          autoComplete: n.autocomplete,
          className: Ht({ [De.isErrored]: n.isErrored, [De.hasHint]: n.hasHint }),
          style: { borderColor: n.borderColor, color: 'inherit' },
          value: n.value ? n.value.map((l) => `"${l.name}"`).join(', ') : void 0,
          ref: e,
          onFocus: t,
          readOnly: !0,
        }),
      ],
    });
  };
wl.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'FileInput',
  props: {
    id: { required: !1, tsType: { name: 'string' }, description: '' },
    autocomplete: { required: !1, tsType: { name: 'string' }, description: '' },
    required: { required: !1, tsType: { name: 'boolean' }, description: '' },
    colors: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'object',
        raw: `{
  base?: string;
  accent?: string;
  error?: string;
}`,
        signature: {
          properties: [
            { key: 'base', value: { name: 'string', required: !1 } },
            { key: 'accent', value: { name: 'string', required: !1 } },
            { key: 'error', value: { name: 'string', required: !1 } },
          ],
        },
      },
      description: '',
    },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    extensions: {
      required: !1,
      tsType: { name: 'Array', elements: [{ name: 'string' }], raw: 'string[]' },
      description: '',
    },
    format: { required: !1, tsType: { name: 'string' }, description: '' },
    max: { required: !1, tsType: { name: 'number' }, description: '' },
    min: { required: !1, tsType: { name: 'number' }, description: '' },
    name: { required: !1, tsType: { name: 'string' }, description: '' },
    type: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'number' | 'text' | 'text-multiline' | 'select' | 'tags' | 'date' | 'files' | 'check' | 'password'",
        elements: [
          { name: 'literal', value: "'number'" },
          { name: 'literal', value: "'text'" },
          { name: 'literal', value: "'text-multiline'" },
          { name: 'literal', value: "'select'" },
          { name: 'literal', value: "'tags'" },
          { name: 'literal', value: "'date'" },
          { name: 'literal', value: "'files'" },
          { name: 'literal', value: "'check'" },
          { name: 'literal', value: "'password'" },
        ],
      },
      description: '',
    },
    options: {
      required: !1,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'intersection',
            raw: '{ value: T | string; label?: string } & { metadata?: any }',
            elements: [
              {
                name: 'signature',
                type: 'object',
                raw: '{ value: T | string; label?: string }',
                signature: {
                  properties: [
                    {
                      key: 'value',
                      value: {
                        name: 'union',
                        raw: 'T | string',
                        elements: [{ name: 'T' }, { name: 'string' }],
                        required: !0,
                      },
                    },
                    { key: 'label', value: { name: 'string', required: !1 } },
                  ],
                },
              },
              {
                name: 'signature',
                type: 'object',
                raw: '{ metadata?: any }',
                signature: { properties: [{ key: 'metadata', value: { name: 'any', required: !1 } }] },
              },
            ],
          },
        ],
        raw: 'FieldOption<T>[]',
      },
      description: '',
    },
    borderColor: { required: !1, tsType: { name: 'string' }, description: '' },
    value: { required: !1, tsType: { name: 'T' }, description: '' },
    hasHint: { required: !1, tsType: { name: 'boolean' }, description: '' },
    isErrored: { required: !0, tsType: { name: 'boolean' }, description: '' },
    isFocused: { required: !0, tsType: { name: 'boolean' }, description: '' },
    onFocus: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
    onBlur: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
    onChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: T) => void',
        signature: { arguments: [{ type: { name: 'T' }, name: 'value' }], return: { name: 'void' } },
      },
      description: '',
    },
  },
};
function Dl(n) {
  var r,
    e,
    t = '';
  if (typeof n == 'string' || typeof n == 'number') t += n;
  else if (typeof n == 'object')
    if (Array.isArray(n)) {
      var a = n.length;
      for (r = 0; r < a; r++) n[r] && (e = Dl(n[r])) && (t && (t += ' '), (t += e));
    } else for (e in n) n[e] && (t && (t += ' '), (t += e));
  return t;
}
function Ae() {
  for (var n, r, e = 0, t = '', a = arguments.length; e < a; e++)
    (n = arguments[e]) && (r = Dl(n)) && (t && (t += ' '), (t += r));
  return t;
}
function W(n) {
  const r = Object.prototype.toString.call(n);
  return n instanceof Date || (typeof n == 'object' && r === '[object Date]')
    ? new n.constructor(+n)
    : typeof n == 'number' || r === '[object Number]' || typeof n == 'string' || r === '[object String]'
      ? new Date(n)
      : new Date(NaN);
}
function me(n, r) {
  return n instanceof Date ? new n.constructor(r) : new Date(r);
}
function nt(n, r) {
  const e = W(n);
  return isNaN(r) ? me(n, NaN) : (r && e.setDate(e.getDate() + r), e);
}
function rt(n, r) {
  const e = W(n);
  if (isNaN(r)) return me(n, NaN);
  if (!r) return e;
  const t = e.getDate(),
    a = me(n, e.getTime());
  a.setMonth(e.getMonth() + r + 1, 0);
  const i = a.getDate();
  return t >= i ? a : (e.setFullYear(a.getFullYear(), a.getMonth(), t), e);
}
function xi(n, r) {
  const e = +W(n);
  return me(n, e + r);
}
const xl = 6048e5,
  _m = 864e5,
  fa = 6e4,
  pa = 36e5,
  Pm = 1e3;
function Mm(n, r) {
  return xi(n, r * pa);
}
let Em = {};
function en() {
  return Em;
}
function Ot(n, r) {
  var l, s, u, c;
  const e = en(),
    t =
      (r == null ? void 0 : r.weekStartsOn) ??
      ((s = (l = r == null ? void 0 : r.locale) == null ? void 0 : l.options) == null ? void 0 : s.weekStartsOn) ??
      e.weekStartsOn ??
      ((c = (u = e.locale) == null ? void 0 : u.options) == null ? void 0 : c.weekStartsOn) ??
      0,
    a = W(n),
    i = a.getDay(),
    o = (i < t ? 7 : 0) + i - t;
  return (a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a);
}
function vn(n) {
  return Ot(n, { weekStartsOn: 1 });
}
function kl(n) {
  const r = W(n),
    e = r.getFullYear(),
    t = me(n, 0);
  (t.setFullYear(e + 1, 0, 4), t.setHours(0, 0, 0, 0));
  const a = vn(t),
    i = me(n, 0);
  (i.setFullYear(e, 0, 4), i.setHours(0, 0, 0, 0));
  const o = vn(i);
  return r.getTime() >= a.getTime() ? e + 1 : r.getTime() >= o.getTime() ? e : e - 1;
}
function Gt(n) {
  const r = W(n);
  return (r.setHours(0, 0, 0, 0), r);
}
function $r(n) {
  const r = W(n),
    e = new Date(
      Date.UTC(
        r.getFullYear(),
        r.getMonth(),
        r.getDate(),
        r.getHours(),
        r.getMinutes(),
        r.getSeconds(),
        r.getMilliseconds()
      )
    );
  return (e.setUTCFullYear(r.getFullYear()), +n - +e);
}
function gn(n, r) {
  const e = Gt(n),
    t = Gt(r),
    a = +e - $r(e),
    i = +t - $r(t);
  return Math.round((a - i) / _m);
}
function Rm(n) {
  const r = kl(n),
    e = me(n, 0);
  return (e.setFullYear(r, 0, 4), e.setHours(0, 0, 0, 0), vn(e));
}
function Ga(n, r) {
  return xi(n, r * fa);
}
function ki(n, r) {
  const e = r * 3;
  return rt(n, e);
}
function Im(n, r) {
  return xi(n, r * 1e3);
}
function Hr(n, r) {
  const e = r * 7;
  return nt(n, e);
}
function kt(n, r) {
  return rt(n, r * 12);
}
function Co(n) {
  let r;
  return (
    n.forEach(function (e) {
      const t = W(e);
      (r === void 0 || r < t || isNaN(Number(t))) && (r = t);
    }),
    r || new Date(NaN)
  );
}
function To(n) {
  let r;
  return (
    n.forEach((e) => {
      const t = W(e);
      (!r || r > t || isNaN(+t)) && (r = t);
    }),
    r || new Date(NaN)
  );
}
function Am(n, r) {
  const e = Gt(n),
    t = Gt(r);
  return +e == +t;
}
function St(n) {
  return n instanceof Date || (typeof n == 'object' && Object.prototype.toString.call(n) === '[object Date]');
}
function Wr(n) {
  if (!St(n) && typeof n != 'number') return !1;
  const r = W(n);
  return !isNaN(Number(r));
}
function jr(n, r) {
  const e = W(n),
    t = W(r),
    a = e.getFullYear() - t.getFullYear(),
    i = e.getMonth() - t.getMonth();
  return a * 12 + i;
}
function jt(n) {
  const r = W(n);
  return Math.trunc(r.getMonth() / 3) + 1;
}
function Br(n, r) {
  const e = W(n),
    t = W(r),
    a = e.getFullYear() - t.getFullYear(),
    i = jt(e) - jt(t);
  return a * 4 + i;
}
function Ur(n, r) {
  const e = W(n),
    t = W(r);
  return e.getFullYear() - t.getFullYear();
}
function Fm(n, r) {
  const e = W(n),
    t = W(r),
    a = Oo(e, t),
    i = Math.abs(gn(e, t));
  e.setDate(e.getDate() - a * i);
  const o = +(Oo(e, t) === -a),
    l = a * (i - o);
  return l === 0 ? 0 : l;
}
function Oo(n, r) {
  const e =
    n.getFullYear() - r.getFullYear() ||
    n.getMonth() - r.getMonth() ||
    n.getDate() - r.getDate() ||
    n.getHours() - r.getHours() ||
    n.getMinutes() - r.getMinutes() ||
    n.getSeconds() - r.getSeconds() ||
    n.getMilliseconds() - r.getMilliseconds();
  return e < 0 ? -1 : e > 0 ? 1 : e;
}
function Sl(n) {
  const r = W(n);
  return (r.setHours(23, 59, 59, 999), r);
}
function Cl(n) {
  const r = W(n),
    e = r.getMonth();
  return (r.setFullYear(r.getFullYear(), e + 1, 0), r.setHours(23, 59, 59, 999), r);
}
function Xa(n) {
  const r = W(n),
    e = r.getMonth(),
    t = e - (e % 3);
  return (r.setMonth(t, 1), r.setHours(0, 0, 0, 0), r);
}
function Tl(n) {
  const r = W(n);
  return (r.setDate(1), r.setHours(0, 0, 0, 0), r);
}
function Ol(n) {
  const r = W(n),
    e = r.getFullYear();
  return (r.setFullYear(e + 1, 0, 0), r.setHours(23, 59, 59, 999), r);
}
function ma(n) {
  const r = W(n),
    e = me(n, 0);
  return (e.setFullYear(r.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e);
}
function Nm(n, r) {
  var l, s;
  const e = en(),
    t = e.weekStartsOn ?? ((s = (l = e.locale) == null ? void 0 : l.options) == null ? void 0 : s.weekStartsOn) ?? 0,
    a = W(n),
    i = a.getDay(),
    o = (i < t ? -7 : 0) + 6 - (i - t);
  return (a.setDate(a.getDate() + o), a.setHours(23, 59, 59, 999), a);
}
const Lm = {
    lessThanXSeconds: { one: 'less than a second', other: 'less than {{count}} seconds' },
    xSeconds: { one: '1 second', other: '{{count}} seconds' },
    halfAMinute: 'half a minute',
    lessThanXMinutes: { one: 'less than a minute', other: 'less than {{count}} minutes' },
    xMinutes: { one: '1 minute', other: '{{count}} minutes' },
    aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
    xHours: { one: '1 hour', other: '{{count}} hours' },
    xDays: { one: '1 day', other: '{{count}} days' },
    aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
    xWeeks: { one: '1 week', other: '{{count}} weeks' },
    aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
    xMonths: { one: '1 month', other: '{{count}} months' },
    aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
    xYears: { one: '1 year', other: '{{count}} years' },
    overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
    almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
  },
  Ym = (n, r, e) => {
    let t;
    const a = Lm[n];
    return (
      typeof a == 'string' ? (t = a) : r === 1 ? (t = a.one) : (t = a.other.replace('{{count}}', r.toString())),
      e != null && e.addSuffix ? (e.comparison && e.comparison > 0 ? 'in ' + t : t + ' ago') : t
    );
  };
function Pa(n) {
  return (r = {}) => {
    const e = r.width ? String(r.width) : n.defaultWidth;
    return n.formats[e] || n.formats[n.defaultWidth];
  };
}
const Vm = { full: 'EEEE, MMMM do, y', long: 'MMMM do, y', medium: 'MMM d, y', short: 'MM/dd/yyyy' },
  qm = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
  $m = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  Hm = {
    date: Pa({ formats: Vm, defaultWidth: 'full' }),
    time: Pa({ formats: qm, defaultWidth: 'full' }),
    dateTime: Pa({ formats: $m, defaultWidth: 'full' }),
  },
  Wm = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  jm = (n, r, e, t) => Wm[n];
function _n(n) {
  return (r, e) => {
    const t = e != null && e.context ? String(e.context) : 'standalone';
    let a;
    if (t === 'formatting' && n.formattingValues) {
      const o = n.defaultFormattingWidth || n.defaultWidth,
        l = e != null && e.width ? String(e.width) : o;
      a = n.formattingValues[l] || n.formattingValues[o];
    } else {
      const o = n.defaultWidth,
        l = e != null && e.width ? String(e.width) : n.defaultWidth;
      a = n.values[l] || n.values[o];
    }
    const i = n.argumentCallback ? n.argumentCallback(r) : r;
    return a[i];
  };
}
const Bm = { narrow: ['B', 'A'], abbreviated: ['BC', 'AD'], wide: ['Before Christ', 'Anno Domini'] },
  Um = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  zm = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    wide: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  Qm = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  Km = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
  },
  Gm = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
  },
  Xm = (n, r) => {
    const e = Number(n),
      t = e % 100;
    if (t > 20 || t < 10)
      switch (t % 10) {
        case 1:
          return e + 'st';
        case 2:
          return e + 'nd';
        case 3:
          return e + 'rd';
      }
    return e + 'th';
  },
  Zm = {
    ordinalNumber: Xm,
    era: _n({ values: Bm, defaultWidth: 'wide' }),
    quarter: _n({ values: Um, defaultWidth: 'wide', argumentCallback: (n) => n - 1 }),
    month: _n({ values: zm, defaultWidth: 'wide' }),
    day: _n({ values: Qm, defaultWidth: 'wide' }),
    dayPeriod: _n({ values: Km, defaultWidth: 'wide', formattingValues: Gm, defaultFormattingWidth: 'wide' }),
  };
function Pn(n) {
  return (r, e = {}) => {
    const t = e.width,
      a = (t && n.matchPatterns[t]) || n.matchPatterns[n.defaultMatchWidth],
      i = r.match(a);
    if (!i) return null;
    const o = i[0],
      l = (t && n.parsePatterns[t]) || n.parsePatterns[n.defaultParseWidth],
      s = Array.isArray(l) ? eh(l, (d) => d.test(o)) : Jm(l, (d) => d.test(o));
    let u;
    ((u = n.valueCallback ? n.valueCallback(s) : s), (u = e.valueCallback ? e.valueCallback(u) : u));
    const c = r.slice(o.length);
    return { value: u, rest: c };
  };
}
function Jm(n, r) {
  for (const e in n) if (Object.prototype.hasOwnProperty.call(n, e) && r(n[e])) return e;
}
function eh(n, r) {
  for (let e = 0; e < n.length; e++) if (r(n[e])) return e;
}
function th(n) {
  return (r, e = {}) => {
    const t = r.match(n.matchPattern);
    if (!t) return null;
    const a = t[0],
      i = r.match(n.parsePattern);
    if (!i) return null;
    let o = n.valueCallback ? n.valueCallback(i[0]) : i[0];
    o = e.valueCallback ? e.valueCallback(o) : o;
    const l = r.slice(a.length);
    return { value: o, rest: l };
  };
}
const nh = /^(\d+)(th|st|nd|rd)?/i,
  rh = /\d+/i,
  ah = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  ih = { any: [/^b/i, /^(a|c)/i] },
  oh = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
  sh = { any: [/1/i, /2/i, /3/i, /4/i] },
  lh = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  uh = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i],
  },
  ch = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  dh = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  fh = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  ph = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  mh = {
    ordinalNumber: th({ matchPattern: nh, parsePattern: rh, valueCallback: (n) => parseInt(n, 10) }),
    era: Pn({ matchPatterns: ah, defaultMatchWidth: 'wide', parsePatterns: ih, defaultParseWidth: 'any' }),
    quarter: Pn({
      matchPatterns: oh,
      defaultMatchWidth: 'wide',
      parsePatterns: sh,
      defaultParseWidth: 'any',
      valueCallback: (n) => n + 1,
    }),
    month: Pn({ matchPatterns: lh, defaultMatchWidth: 'wide', parsePatterns: uh, defaultParseWidth: 'any' }),
    day: Pn({ matchPatterns: ch, defaultMatchWidth: 'wide', parsePatterns: dh, defaultParseWidth: 'any' }),
    dayPeriod: Pn({ matchPatterns: fh, defaultMatchWidth: 'any', parsePatterns: ph, defaultParseWidth: 'any' }),
  },
  _l = {
    code: 'en-US',
    formatDistance: Ym,
    formatLong: Hm,
    formatRelative: jm,
    localize: Zm,
    match: mh,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function hh(n) {
  const r = W(n);
  return gn(r, ma(r)) + 1;
}
function Si(n) {
  const r = W(n),
    e = +vn(r) - +Rm(r);
  return Math.round(e / xl) + 1;
}
function Ci(n, r) {
  var c, d, f, p;
  const e = W(n),
    t = e.getFullYear(),
    a = en(),
    i =
      (r == null ? void 0 : r.firstWeekContainsDate) ??
      ((d = (c = r == null ? void 0 : r.locale) == null ? void 0 : c.options) == null
        ? void 0
        : d.firstWeekContainsDate) ??
      a.firstWeekContainsDate ??
      ((p = (f = a.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ??
      1,
    o = me(n, 0);
  (o.setFullYear(t + 1, 0, i), o.setHours(0, 0, 0, 0));
  const l = Ot(o, r),
    s = me(n, 0);
  (s.setFullYear(t, 0, i), s.setHours(0, 0, 0, 0));
  const u = Ot(s, r);
  return e.getTime() >= l.getTime() ? t + 1 : e.getTime() >= u.getTime() ? t : t - 1;
}
function vh(n, r) {
  var l, s, u, c;
  const e = en(),
    t =
      (r == null ? void 0 : r.firstWeekContainsDate) ??
      ((s = (l = r == null ? void 0 : r.locale) == null ? void 0 : l.options) == null
        ? void 0
        : s.firstWeekContainsDate) ??
      e.firstWeekContainsDate ??
      ((c = (u = e.locale) == null ? void 0 : u.options) == null ? void 0 : c.firstWeekContainsDate) ??
      1,
    a = Ci(n, r),
    i = me(n, 0);
  return (i.setFullYear(a, 0, t), i.setHours(0, 0, 0, 0), Ot(i, r));
}
function Pl(n, r) {
  const e = W(n),
    t = +Ot(e, r) - +vh(e, r);
  return Math.round(t / xl) + 1;
}
function pe(n, r) {
  const e = n < 0 ? '-' : '',
    t = Math.abs(n).toString().padStart(r, '0');
  return e + t;
}
const Et = {
    y(n, r) {
      const e = n.getFullYear(),
        t = e > 0 ? e : 1 - e;
      return pe(r === 'yy' ? t % 100 : t, r.length);
    },
    M(n, r) {
      const e = n.getMonth();
      return r === 'M' ? String(e + 1) : pe(e + 1, 2);
    },
    d(n, r) {
      return pe(n.getDate(), r.length);
    },
    a(n, r) {
      const e = n.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (r) {
        case 'a':
        case 'aa':
          return e.toUpperCase();
        case 'aaa':
          return e;
        case 'aaaaa':
          return e[0];
        case 'aaaa':
        default:
          return e === 'am' ? 'a.m.' : 'p.m.';
      }
    },
    h(n, r) {
      return pe(n.getHours() % 12 || 12, r.length);
    },
    H(n, r) {
      return pe(n.getHours(), r.length);
    },
    m(n, r) {
      return pe(n.getMinutes(), r.length);
    },
    s(n, r) {
      return pe(n.getSeconds(), r.length);
    },
    S(n, r) {
      const e = r.length,
        t = n.getMilliseconds(),
        a = Math.trunc(t * Math.pow(10, e - 3));
      return pe(a, r.length);
    },
  },
  an = {
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  _o = {
    G: function (n, r, e) {
      const t = n.getFullYear() > 0 ? 1 : 0;
      switch (r) {
        case 'G':
        case 'GG':
        case 'GGG':
          return e.era(t, { width: 'abbreviated' });
        case 'GGGGG':
          return e.era(t, { width: 'narrow' });
        case 'GGGG':
        default:
          return e.era(t, { width: 'wide' });
      }
    },
    y: function (n, r, e) {
      if (r === 'yo') {
        const t = n.getFullYear(),
          a = t > 0 ? t : 1 - t;
        return e.ordinalNumber(a, { unit: 'year' });
      }
      return Et.y(n, r);
    },
    Y: function (n, r, e, t) {
      const a = Ci(n, t),
        i = a > 0 ? a : 1 - a;
      if (r === 'YY') {
        const o = i % 100;
        return pe(o, 2);
      }
      return r === 'Yo' ? e.ordinalNumber(i, { unit: 'year' }) : pe(i, r.length);
    },
    R: function (n, r) {
      const e = kl(n);
      return pe(e, r.length);
    },
    u: function (n, r) {
      const e = n.getFullYear();
      return pe(e, r.length);
    },
    Q: function (n, r, e) {
      const t = Math.ceil((n.getMonth() + 1) / 3);
      switch (r) {
        case 'Q':
          return String(t);
        case 'QQ':
          return pe(t, 2);
        case 'Qo':
          return e.ordinalNumber(t, { unit: 'quarter' });
        case 'QQQ':
          return e.quarter(t, { width: 'abbreviated', context: 'formatting' });
        case 'QQQQQ':
          return e.quarter(t, { width: 'narrow', context: 'formatting' });
        case 'QQQQ':
        default:
          return e.quarter(t, { width: 'wide', context: 'formatting' });
      }
    },
    q: function (n, r, e) {
      const t = Math.ceil((n.getMonth() + 1) / 3);
      switch (r) {
        case 'q':
          return String(t);
        case 'qq':
          return pe(t, 2);
        case 'qo':
          return e.ordinalNumber(t, { unit: 'quarter' });
        case 'qqq':
          return e.quarter(t, { width: 'abbreviated', context: 'standalone' });
        case 'qqqqq':
          return e.quarter(t, { width: 'narrow', context: 'standalone' });
        case 'qqqq':
        default:
          return e.quarter(t, { width: 'wide', context: 'standalone' });
      }
    },
    M: function (n, r, e) {
      const t = n.getMonth();
      switch (r) {
        case 'M':
        case 'MM':
          return Et.M(n, r);
        case 'Mo':
          return e.ordinalNumber(t + 1, { unit: 'month' });
        case 'MMM':
          return e.month(t, { width: 'abbreviated', context: 'formatting' });
        case 'MMMMM':
          return e.month(t, { width: 'narrow', context: 'formatting' });
        case 'MMMM':
        default:
          return e.month(t, { width: 'wide', context: 'formatting' });
      }
    },
    L: function (n, r, e) {
      const t = n.getMonth();
      switch (r) {
        case 'L':
          return String(t + 1);
        case 'LL':
          return pe(t + 1, 2);
        case 'Lo':
          return e.ordinalNumber(t + 1, { unit: 'month' });
        case 'LLL':
          return e.month(t, { width: 'abbreviated', context: 'standalone' });
        case 'LLLLL':
          return e.month(t, { width: 'narrow', context: 'standalone' });
        case 'LLLL':
        default:
          return e.month(t, { width: 'wide', context: 'standalone' });
      }
    },
    w: function (n, r, e, t) {
      const a = Pl(n, t);
      return r === 'wo' ? e.ordinalNumber(a, { unit: 'week' }) : pe(a, r.length);
    },
    I: function (n, r, e) {
      const t = Si(n);
      return r === 'Io' ? e.ordinalNumber(t, { unit: 'week' }) : pe(t, r.length);
    },
    d: function (n, r, e) {
      return r === 'do' ? e.ordinalNumber(n.getDate(), { unit: 'date' }) : Et.d(n, r);
    },
    D: function (n, r, e) {
      const t = hh(n);
      return r === 'Do' ? e.ordinalNumber(t, { unit: 'dayOfYear' }) : pe(t, r.length);
    },
    E: function (n, r, e) {
      const t = n.getDay();
      switch (r) {
        case 'E':
        case 'EE':
        case 'EEE':
          return e.day(t, { width: 'abbreviated', context: 'formatting' });
        case 'EEEEE':
          return e.day(t, { width: 'narrow', context: 'formatting' });
        case 'EEEEEE':
          return e.day(t, { width: 'short', context: 'formatting' });
        case 'EEEE':
        default:
          return e.day(t, { width: 'wide', context: 'formatting' });
      }
    },
    e: function (n, r, e, t) {
      const a = n.getDay(),
        i = (a - t.weekStartsOn + 8) % 7 || 7;
      switch (r) {
        case 'e':
          return String(i);
        case 'ee':
          return pe(i, 2);
        case 'eo':
          return e.ordinalNumber(i, { unit: 'day' });
        case 'eee':
          return e.day(a, { width: 'abbreviated', context: 'formatting' });
        case 'eeeee':
          return e.day(a, { width: 'narrow', context: 'formatting' });
        case 'eeeeee':
          return e.day(a, { width: 'short', context: 'formatting' });
        case 'eeee':
        default:
          return e.day(a, { width: 'wide', context: 'formatting' });
      }
    },
    c: function (n, r, e, t) {
      const a = n.getDay(),
        i = (a - t.weekStartsOn + 8) % 7 || 7;
      switch (r) {
        case 'c':
          return String(i);
        case 'cc':
          return pe(i, r.length);
        case 'co':
          return e.ordinalNumber(i, { unit: 'day' });
        case 'ccc':
          return e.day(a, { width: 'abbreviated', context: 'standalone' });
        case 'ccccc':
          return e.day(a, { width: 'narrow', context: 'standalone' });
        case 'cccccc':
          return e.day(a, { width: 'short', context: 'standalone' });
        case 'cccc':
        default:
          return e.day(a, { width: 'wide', context: 'standalone' });
      }
    },
    i: function (n, r, e) {
      const t = n.getDay(),
        a = t === 0 ? 7 : t;
      switch (r) {
        case 'i':
          return String(a);
        case 'ii':
          return pe(a, r.length);
        case 'io':
          return e.ordinalNumber(a, { unit: 'day' });
        case 'iii':
          return e.day(t, { width: 'abbreviated', context: 'formatting' });
        case 'iiiii':
          return e.day(t, { width: 'narrow', context: 'formatting' });
        case 'iiiiii':
          return e.day(t, { width: 'short', context: 'formatting' });
        case 'iiii':
        default:
          return e.day(t, { width: 'wide', context: 'formatting' });
      }
    },
    a: function (n, r, e) {
      const a = n.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (r) {
        case 'a':
        case 'aa':
          return e.dayPeriod(a, { width: 'abbreviated', context: 'formatting' });
        case 'aaa':
          return e.dayPeriod(a, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
        case 'aaaaa':
          return e.dayPeriod(a, { width: 'narrow', context: 'formatting' });
        case 'aaaa':
        default:
          return e.dayPeriod(a, { width: 'wide', context: 'formatting' });
      }
    },
    b: function (n, r, e) {
      const t = n.getHours();
      let a;
      switch ((t === 12 ? (a = an.noon) : t === 0 ? (a = an.midnight) : (a = t / 12 >= 1 ? 'pm' : 'am'), r)) {
        case 'b':
        case 'bb':
          return e.dayPeriod(a, { width: 'abbreviated', context: 'formatting' });
        case 'bbb':
          return e.dayPeriod(a, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
        case 'bbbbb':
          return e.dayPeriod(a, { width: 'narrow', context: 'formatting' });
        case 'bbbb':
        default:
          return e.dayPeriod(a, { width: 'wide', context: 'formatting' });
      }
    },
    B: function (n, r, e) {
      const t = n.getHours();
      let a;
      switch (
        (t >= 17 ? (a = an.evening) : t >= 12 ? (a = an.afternoon) : t >= 4 ? (a = an.morning) : (a = an.night), r)
      ) {
        case 'B':
        case 'BB':
        case 'BBB':
          return e.dayPeriod(a, { width: 'abbreviated', context: 'formatting' });
        case 'BBBBB':
          return e.dayPeriod(a, { width: 'narrow', context: 'formatting' });
        case 'BBBB':
        default:
          return e.dayPeriod(a, { width: 'wide', context: 'formatting' });
      }
    },
    h: function (n, r, e) {
      if (r === 'ho') {
        let t = n.getHours() % 12;
        return (t === 0 && (t = 12), e.ordinalNumber(t, { unit: 'hour' }));
      }
      return Et.h(n, r);
    },
    H: function (n, r, e) {
      return r === 'Ho' ? e.ordinalNumber(n.getHours(), { unit: 'hour' }) : Et.H(n, r);
    },
    K: function (n, r, e) {
      const t = n.getHours() % 12;
      return r === 'Ko' ? e.ordinalNumber(t, { unit: 'hour' }) : pe(t, r.length);
    },
    k: function (n, r, e) {
      let t = n.getHours();
      return (t === 0 && (t = 24), r === 'ko' ? e.ordinalNumber(t, { unit: 'hour' }) : pe(t, r.length));
    },
    m: function (n, r, e) {
      return r === 'mo' ? e.ordinalNumber(n.getMinutes(), { unit: 'minute' }) : Et.m(n, r);
    },
    s: function (n, r, e) {
      return r === 'so' ? e.ordinalNumber(n.getSeconds(), { unit: 'second' }) : Et.s(n, r);
    },
    S: function (n, r) {
      return Et.S(n, r);
    },
    X: function (n, r, e) {
      const t = n.getTimezoneOffset();
      if (t === 0) return 'Z';
      switch (r) {
        case 'X':
          return Mo(t);
        case 'XXXX':
        case 'XX':
          return Vt(t);
        case 'XXXXX':
        case 'XXX':
        default:
          return Vt(t, ':');
      }
    },
    x: function (n, r, e) {
      const t = n.getTimezoneOffset();
      switch (r) {
        case 'x':
          return Mo(t);
        case 'xxxx':
        case 'xx':
          return Vt(t);
        case 'xxxxx':
        case 'xxx':
        default:
          return Vt(t, ':');
      }
    },
    O: function (n, r, e) {
      const t = n.getTimezoneOffset();
      switch (r) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + Po(t, ':');
        case 'OOOO':
        default:
          return 'GMT' + Vt(t, ':');
      }
    },
    z: function (n, r, e) {
      const t = n.getTimezoneOffset();
      switch (r) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + Po(t, ':');
        case 'zzzz':
        default:
          return 'GMT' + Vt(t, ':');
      }
    },
    t: function (n, r, e) {
      const t = Math.trunc(n.getTime() / 1e3);
      return pe(t, r.length);
    },
    T: function (n, r, e) {
      const t = n.getTime();
      return pe(t, r.length);
    },
  };
function Po(n, r = '') {
  const e = n > 0 ? '-' : '+',
    t = Math.abs(n),
    a = Math.trunc(t / 60),
    i = t % 60;
  return i === 0 ? e + String(a) : e + String(a) + r + pe(i, 2);
}
function Mo(n, r) {
  return n % 60 === 0 ? (n > 0 ? '-' : '+') + pe(Math.abs(n) / 60, 2) : Vt(n, r);
}
function Vt(n, r = '') {
  const e = n > 0 ? '-' : '+',
    t = Math.abs(n),
    a = pe(Math.trunc(t / 60), 2),
    i = pe(t % 60, 2);
  return e + a + r + i;
}
const Eo = (n, r) => {
    switch (n) {
      case 'P':
        return r.date({ width: 'short' });
      case 'PP':
        return r.date({ width: 'medium' });
      case 'PPP':
        return r.date({ width: 'long' });
      case 'PPPP':
      default:
        return r.date({ width: 'full' });
    }
  },
  Ml = (n, r) => {
    switch (n) {
      case 'p':
        return r.time({ width: 'short' });
      case 'pp':
        return r.time({ width: 'medium' });
      case 'ppp':
        return r.time({ width: 'long' });
      case 'pppp':
      default:
        return r.time({ width: 'full' });
    }
  },
  gh = (n, r) => {
    const e = n.match(/(P+)(p+)?/) || [],
      t = e[1],
      a = e[2];
    if (!a) return Eo(n, r);
    let i;
    switch (t) {
      case 'P':
        i = r.dateTime({ width: 'short' });
        break;
      case 'PP':
        i = r.dateTime({ width: 'medium' });
        break;
      case 'PPP':
        i = r.dateTime({ width: 'long' });
        break;
      case 'PPPP':
      default:
        i = r.dateTime({ width: 'full' });
        break;
    }
    return i.replace('{{date}}', Eo(t, r)).replace('{{time}}', Ml(a, r));
  },
  zr = { p: Ml, P: gh },
  yh = /^D+$/,
  bh = /^Y+$/,
  wh = ['D', 'DD', 'YY', 'YYYY'];
function El(n) {
  return yh.test(n);
}
function Rl(n) {
  return bh.test(n);
}
function Za(n, r, e) {
  const t = Dh(n, r, e);
  if ((console.warn(t), wh.includes(n))) throw new RangeError(t);
}
function Dh(n, r, e) {
  const t = n[0] === 'Y' ? 'years' : 'days of the month';
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${r}\`) for formatting ${t} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const xh = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  kh = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Sh = /^'([^]*?)'?$/,
  Ch = /''/g,
  Th = /[a-zA-Z]/;
function Ro(n, r, e) {
  var c, d, f, p, v, m, h, g;
  const t = en(),
    a = (e == null ? void 0 : e.locale) ?? t.locale ?? _l,
    i =
      (e == null ? void 0 : e.firstWeekContainsDate) ??
      ((d = (c = e == null ? void 0 : e.locale) == null ? void 0 : c.options) == null
        ? void 0
        : d.firstWeekContainsDate) ??
      t.firstWeekContainsDate ??
      ((p = (f = t.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ??
      1,
    o =
      (e == null ? void 0 : e.weekStartsOn) ??
      ((m = (v = e == null ? void 0 : e.locale) == null ? void 0 : v.options) == null ? void 0 : m.weekStartsOn) ??
      t.weekStartsOn ??
      ((g = (h = t.locale) == null ? void 0 : h.options) == null ? void 0 : g.weekStartsOn) ??
      0,
    l = W(n);
  if (!Wr(l)) throw new RangeError('Invalid time value');
  let s = r
    .match(kh)
    .map((w) => {
      const D = w[0];
      if (D === 'p' || D === 'P') {
        const x = zr[D];
        return x(w, a.formatLong);
      }
      return w;
    })
    .join('')
    .match(xh)
    .map((w) => {
      if (w === "''") return { isToken: !1, value: "'" };
      const D = w[0];
      if (D === "'") return { isToken: !1, value: Oh(w) };
      if (_o[D]) return { isToken: !0, value: w };
      if (D.match(Th)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + D + '`');
      return { isToken: !1, value: w };
    });
  a.localize.preprocessor && (s = a.localize.preprocessor(l, s));
  const u = { firstWeekContainsDate: i, weekStartsOn: o, locale: a };
  return s
    .map((w) => {
      if (!w.isToken) return w.value;
      const D = w.value;
      ((!(e != null && e.useAdditionalWeekYearTokens) && Rl(D)) ||
        (!(e != null && e.useAdditionalDayOfYearTokens) && El(D))) &&
        Za(D, r, String(n));
      const x = _o[D[0]];
      return x(l, D, a.localize, u);
    })
    .join('');
}
function Oh(n) {
  const r = n.match(Sh);
  return r ? r[1].replace(Ch, "'") : n;
}
function Io(n) {
  return W(n).getDate();
}
function _h(n) {
  return W(n).getDay();
}
function Ph(n) {
  const r = W(n),
    e = r.getFullYear(),
    t = r.getMonth(),
    a = me(n, 0);
  return (a.setFullYear(e, t + 1, 0), a.setHours(0, 0, 0, 0), a.getDate());
}
function Mh() {
  return Object.assign({}, en());
}
function mt(n) {
  return W(n).getHours();
}
function Eh(n) {
  let e = W(n).getDay();
  return (e === 0 && (e = 7), e);
}
function ht(n) {
  return W(n).getMinutes();
}
function Ve(n) {
  return W(n).getMonth();
}
function Ct(n) {
  return W(n).getSeconds();
}
function Ja(n) {
  return W(n).getTime();
}
function ee(n) {
  return W(n).getFullYear();
}
function Nt(n, r) {
  const e = W(n),
    t = W(r);
  return e.getTime() > t.getTime();
}
function Xt(n, r) {
  const e = W(n),
    t = W(r);
  return +e < +t;
}
function Rh(n, r) {
  const e = W(n),
    t = W(r);
  return +e == +t;
}
function Ih(n, r) {
  const e = r instanceof Date ? me(r, 0) : new r(0);
  return (
    e.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()),
    e.setHours(n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()),
    e
  );
}
const Ah = 10;
class Il {
  constructor() {
    j(this, 'subPriority', 0);
  }
  validate(r, e) {
    return !0;
  }
}
class Fh extends Il {
  constructor(r, e, t, a, i) {
    (super(),
      (this.value = r),
      (this.validateValue = e),
      (this.setValue = t),
      (this.priority = a),
      i && (this.subPriority = i));
  }
  validate(r, e) {
    return this.validateValue(r, this.value, e);
  }
  set(r, e, t) {
    return this.setValue(r, e, this.value, t);
  }
}
class Nh extends Il {
  constructor() {
    super(...arguments);
    j(this, 'priority', Ah);
    j(this, 'subPriority', -1);
  }
  set(e, t) {
    return t.timestampIsSet ? e : me(e, Ih(e, Date));
  }
}
class de {
  run(r, e, t, a) {
    const i = this.parse(r, e, t, a);
    return i
      ? { setter: new Fh(i.value, this.validate, this.set, this.priority, this.subPriority), rest: i.rest }
      : null;
  }
  validate(r, e, t) {
    return !0;
  }
}
class Lh extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 140);
    j(this, 'incompatibleTokens', ['R', 'u', 't', 'T']);
  }
  parse(e, t, a) {
    switch (t) {
      case 'G':
      case 'GG':
      case 'GGG':
        return a.era(e, { width: 'abbreviated' }) || a.era(e, { width: 'narrow' });
      case 'GGGGG':
        return a.era(e, { width: 'narrow' });
      case 'GGGG':
      default:
        return a.era(e, { width: 'wide' }) || a.era(e, { width: 'abbreviated' }) || a.era(e, { width: 'narrow' });
    }
  }
  set(e, t, a) {
    return ((t.era = a), e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e);
  }
}
const Te = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/,
  },
  lt = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
  };
function Oe(n, r) {
  return n && { value: r(n.value), rest: n.rest };
}
function xe(n, r) {
  const e = r.match(n);
  return e ? { value: parseInt(e[0], 10), rest: r.slice(e[0].length) } : null;
}
function ut(n, r) {
  const e = r.match(n);
  if (!e) return null;
  if (e[0] === 'Z') return { value: 0, rest: r.slice(1) };
  const t = e[1] === '+' ? 1 : -1,
    a = e[2] ? parseInt(e[2], 10) : 0,
    i = e[3] ? parseInt(e[3], 10) : 0,
    o = e[5] ? parseInt(e[5], 10) : 0;
  return { value: t * (a * pa + i * fa + o * Pm), rest: r.slice(e[0].length) };
}
function Al(n) {
  return xe(Te.anyDigitsSigned, n);
}
function Ce(n, r) {
  switch (n) {
    case 1:
      return xe(Te.singleDigit, r);
    case 2:
      return xe(Te.twoDigits, r);
    case 3:
      return xe(Te.threeDigits, r);
    case 4:
      return xe(Te.fourDigits, r);
    default:
      return xe(new RegExp('^\\d{1,' + n + '}'), r);
  }
}
function Qr(n, r) {
  switch (n) {
    case 1:
      return xe(Te.singleDigitSigned, r);
    case 2:
      return xe(Te.twoDigitsSigned, r);
    case 3:
      return xe(Te.threeDigitsSigned, r);
    case 4:
      return xe(Te.fourDigitsSigned, r);
    default:
      return xe(new RegExp('^-?\\d{1,' + n + '}'), r);
  }
}
function Ti(n) {
  switch (n) {
    case 'morning':
      return 4;
    case 'evening':
      return 17;
    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;
    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}
function Fl(n, r) {
  const e = r > 0,
    t = e ? r : 1 - r;
  let a;
  if (t <= 50) a = n || 100;
  else {
    const i = t + 50,
      o = Math.trunc(i / 100) * 100,
      l = n >= i % 100;
    a = n + o - (l ? 100 : 0);
  }
  return e ? a : 1 - a;
}
function Nl(n) {
  return n % 400 === 0 || (n % 4 === 0 && n % 100 !== 0);
}
class Yh extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 130);
    j(this, 'incompatibleTokens', ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']);
  }
  parse(e, t, a) {
    const i = (o) => ({ year: o, isTwoDigitYear: t === 'yy' });
    switch (t) {
      case 'y':
        return Oe(Ce(4, e), i);
      case 'yo':
        return Oe(a.ordinalNumber(e, { unit: 'year' }), i);
      default:
        return Oe(Ce(t.length, e), i);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, a) {
    const i = e.getFullYear();
    if (a.isTwoDigitYear) {
      const l = Fl(a.year, i);
      return (e.setFullYear(l, 0, 1), e.setHours(0, 0, 0, 0), e);
    }
    const o = !('era' in t) || t.era === 1 ? a.year : 1 - a.year;
    return (e.setFullYear(o, 0, 1), e.setHours(0, 0, 0, 0), e);
  }
}
class Vh extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 130);
    j(this, 'incompatibleTokens', ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']);
  }
  parse(e, t, a) {
    const i = (o) => ({ year: o, isTwoDigitYear: t === 'YY' });
    switch (t) {
      case 'Y':
        return Oe(Ce(4, e), i);
      case 'Yo':
        return Oe(a.ordinalNumber(e, { unit: 'year' }), i);
      default:
        return Oe(Ce(t.length, e), i);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, a, i) {
    const o = Ci(e, i);
    if (a.isTwoDigitYear) {
      const s = Fl(a.year, o);
      return (e.setFullYear(s, 0, i.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Ot(e, i));
    }
    const l = !('era' in t) || t.era === 1 ? a.year : 1 - a.year;
    return (e.setFullYear(l, 0, i.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Ot(e, i));
  }
}
class qh extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 130);
    j(this, 'incompatibleTokens', ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']);
  }
  parse(e, t) {
    return Qr(t === 'R' ? 4 : t.length, e);
  }
  set(e, t, a) {
    const i = me(e, 0);
    return (i.setFullYear(a, 0, 4), i.setHours(0, 0, 0, 0), vn(i));
  }
}
class $h extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 130);
    j(this, 'incompatibleTokens', ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']);
  }
  parse(e, t) {
    return Qr(t === 'u' ? 4 : t.length, e);
  }
  set(e, t, a) {
    return (e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e);
  }
}
class Hh extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 120);
    j(this, 'incompatibleTokens', ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']);
  }
  parse(e, t, a) {
    switch (t) {
      case 'Q':
      case 'QQ':
        return Ce(t.length, e);
      case 'Qo':
        return a.ordinalNumber(e, { unit: 'quarter' });
      case 'QQQ':
        return (
          a.quarter(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.quarter(e, { width: 'narrow', context: 'formatting' })
        );
      case 'QQQQQ':
        return a.quarter(e, { width: 'narrow', context: 'formatting' });
      case 'QQQQ':
      default:
        return (
          a.quarter(e, { width: 'wide', context: 'formatting' }) ||
          a.quarter(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.quarter(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, a) {
    return (e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e);
  }
}
class Wh extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 120);
    j(this, 'incompatibleTokens', ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']);
  }
  parse(e, t, a) {
    switch (t) {
      case 'q':
      case 'qq':
        return Ce(t.length, e);
      case 'qo':
        return a.ordinalNumber(e, { unit: 'quarter' });
      case 'qqq':
        return (
          a.quarter(e, { width: 'abbreviated', context: 'standalone' }) ||
          a.quarter(e, { width: 'narrow', context: 'standalone' })
        );
      case 'qqqqq':
        return a.quarter(e, { width: 'narrow', context: 'standalone' });
      case 'qqqq':
      default:
        return (
          a.quarter(e, { width: 'wide', context: 'standalone' }) ||
          a.quarter(e, { width: 'abbreviated', context: 'standalone' }) ||
          a.quarter(e, { width: 'narrow', context: 'standalone' })
        );
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, a) {
    return (e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e);
  }
}
class jh extends de {
  constructor() {
    super(...arguments);
    j(this, 'incompatibleTokens', ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);
    j(this, 'priority', 110);
  }
  parse(e, t, a) {
    const i = (o) => o - 1;
    switch (t) {
      case 'M':
        return Oe(xe(Te.month, e), i);
      case 'MM':
        return Oe(Ce(2, e), i);
      case 'Mo':
        return Oe(a.ordinalNumber(e, { unit: 'month' }), i);
      case 'MMM':
        return (
          a.month(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.month(e, { width: 'narrow', context: 'formatting' })
        );
      case 'MMMMM':
        return a.month(e, { width: 'narrow', context: 'formatting' });
      case 'MMMM':
      default:
        return (
          a.month(e, { width: 'wide', context: 'formatting' }) ||
          a.month(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.month(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return (e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e);
  }
}
class Bh extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 110);
    j(this, 'incompatibleTokens', ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);
  }
  parse(e, t, a) {
    const i = (o) => o - 1;
    switch (t) {
      case 'L':
        return Oe(xe(Te.month, e), i);
      case 'LL':
        return Oe(Ce(2, e), i);
      case 'Lo':
        return Oe(a.ordinalNumber(e, { unit: 'month' }), i);
      case 'LLL':
        return (
          a.month(e, { width: 'abbreviated', context: 'standalone' }) ||
          a.month(e, { width: 'narrow', context: 'standalone' })
        );
      case 'LLLLL':
        return a.month(e, { width: 'narrow', context: 'standalone' });
      case 'LLLL':
      default:
        return (
          a.month(e, { width: 'wide', context: 'standalone' }) ||
          a.month(e, { width: 'abbreviated', context: 'standalone' }) ||
          a.month(e, { width: 'narrow', context: 'standalone' })
        );
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return (e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e);
  }
}
function Uh(n, r, e) {
  const t = W(n),
    a = Pl(t, e) - r;
  return (t.setDate(t.getDate() - a * 7), t);
}
class zh extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 100);
    j(this, 'incompatibleTokens', ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']);
  }
  parse(e, t, a) {
    switch (t) {
      case 'w':
        return xe(Te.week, e);
      case 'wo':
        return a.ordinalNumber(e, { unit: 'week' });
      default:
        return Ce(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, a, i) {
    return Ot(Uh(e, a, i), i);
  }
}
function Qh(n, r) {
  const e = W(n),
    t = Si(e) - r;
  return (e.setDate(e.getDate() - t * 7), e);
}
class Kh extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 100);
    j(this, 'incompatibleTokens', ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']);
  }
  parse(e, t, a) {
    switch (t) {
      case 'I':
        return xe(Te.week, e);
      case 'Io':
        return a.ordinalNumber(e, { unit: 'week' });
      default:
        return Ce(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, a) {
    return vn(Qh(e, a));
  }
}
const Gh = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  Xh = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
class Zh extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 90);
    j(this, 'subPriority', 1);
    j(this, 'incompatibleTokens', ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);
  }
  parse(e, t, a) {
    switch (t) {
      case 'd':
        return xe(Te.date, e);
      case 'do':
        return a.ordinalNumber(e, { unit: 'date' });
      default:
        return Ce(t.length, e);
    }
  }
  validate(e, t) {
    const a = e.getFullYear(),
      i = Nl(a),
      o = e.getMonth();
    return i ? t >= 1 && t <= Xh[o] : t >= 1 && t <= Gh[o];
  }
  set(e, t, a) {
    return (e.setDate(a), e.setHours(0, 0, 0, 0), e);
  }
}
class Jh extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 90);
    j(this, 'subpriority', 1);
    j(this, 'incompatibleTokens', ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']);
  }
  parse(e, t, a) {
    switch (t) {
      case 'D':
      case 'DD':
        return xe(Te.dayOfYear, e);
      case 'Do':
        return a.ordinalNumber(e, { unit: 'date' });
      default:
        return Ce(t.length, e);
    }
  }
  validate(e, t) {
    const a = e.getFullYear();
    return Nl(a) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
  }
  set(e, t, a) {
    return (e.setMonth(0, a), e.setHours(0, 0, 0, 0), e);
  }
}
function Oi(n, r, e) {
  var d, f, p, v;
  const t = en(),
    a =
      (e == null ? void 0 : e.weekStartsOn) ??
      ((f = (d = e == null ? void 0 : e.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ??
      t.weekStartsOn ??
      ((v = (p = t.locale) == null ? void 0 : p.options) == null ? void 0 : v.weekStartsOn) ??
      0,
    i = W(n),
    o = i.getDay(),
    s = ((r % 7) + 7) % 7,
    u = 7 - a,
    c = r < 0 || r > 6 ? r - ((o + u) % 7) : ((s + u) % 7) - ((o + u) % 7);
  return nt(i, c);
}
class ev extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 90);
    j(this, 'incompatibleTokens', ['D', 'i', 'e', 'c', 't', 'T']);
  }
  parse(e, t, a) {
    switch (t) {
      case 'E':
      case 'EE':
      case 'EEE':
        return (
          a.day(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.day(e, { width: 'short', context: 'formatting' }) ||
          a.day(e, { width: 'narrow', context: 'formatting' })
        );
      case 'EEEEE':
        return a.day(e, { width: 'narrow', context: 'formatting' });
      case 'EEEEEE':
        return (
          a.day(e, { width: 'short', context: 'formatting' }) || a.day(e, { width: 'narrow', context: 'formatting' })
        );
      case 'EEEE':
      default:
        return (
          a.day(e, { width: 'wide', context: 'formatting' }) ||
          a.day(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.day(e, { width: 'short', context: 'formatting' }) ||
          a.day(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, i) {
    return ((e = Oi(e, a, i)), e.setHours(0, 0, 0, 0), e);
  }
}
class tv extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 90);
    j(this, 'incompatibleTokens', ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']);
  }
  parse(e, t, a, i) {
    const o = (l) => {
      const s = Math.floor((l - 1) / 7) * 7;
      return ((l + i.weekStartsOn + 6) % 7) + s;
    };
    switch (t) {
      case 'e':
      case 'ee':
        return Oe(Ce(t.length, e), o);
      case 'eo':
        return Oe(a.ordinalNumber(e, { unit: 'day' }), o);
      case 'eee':
        return (
          a.day(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.day(e, { width: 'short', context: 'formatting' }) ||
          a.day(e, { width: 'narrow', context: 'formatting' })
        );
      case 'eeeee':
        return a.day(e, { width: 'narrow', context: 'formatting' });
      case 'eeeeee':
        return (
          a.day(e, { width: 'short', context: 'formatting' }) || a.day(e, { width: 'narrow', context: 'formatting' })
        );
      case 'eeee':
      default:
        return (
          a.day(e, { width: 'wide', context: 'formatting' }) ||
          a.day(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.day(e, { width: 'short', context: 'formatting' }) ||
          a.day(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, i) {
    return ((e = Oi(e, a, i)), e.setHours(0, 0, 0, 0), e);
  }
}
class nv extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 90);
    j(this, 'incompatibleTokens', ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']);
  }
  parse(e, t, a, i) {
    const o = (l) => {
      const s = Math.floor((l - 1) / 7) * 7;
      return ((l + i.weekStartsOn + 6) % 7) + s;
    };
    switch (t) {
      case 'c':
      case 'cc':
        return Oe(Ce(t.length, e), o);
      case 'co':
        return Oe(a.ordinalNumber(e, { unit: 'day' }), o);
      case 'ccc':
        return (
          a.day(e, { width: 'abbreviated', context: 'standalone' }) ||
          a.day(e, { width: 'short', context: 'standalone' }) ||
          a.day(e, { width: 'narrow', context: 'standalone' })
        );
      case 'ccccc':
        return a.day(e, { width: 'narrow', context: 'standalone' });
      case 'cccccc':
        return (
          a.day(e, { width: 'short', context: 'standalone' }) || a.day(e, { width: 'narrow', context: 'standalone' })
        );
      case 'cccc':
      default:
        return (
          a.day(e, { width: 'wide', context: 'standalone' }) ||
          a.day(e, { width: 'abbreviated', context: 'standalone' }) ||
          a.day(e, { width: 'short', context: 'standalone' }) ||
          a.day(e, { width: 'narrow', context: 'standalone' })
        );
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, i) {
    return ((e = Oi(e, a, i)), e.setHours(0, 0, 0, 0), e);
  }
}
function rv(n, r) {
  const e = W(n),
    t = Eh(e),
    a = r - t;
  return nt(e, a);
}
class av extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 90);
    j(this, 'incompatibleTokens', ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']);
  }
  parse(e, t, a) {
    const i = (o) => (o === 0 ? 7 : o);
    switch (t) {
      case 'i':
      case 'ii':
        return Ce(t.length, e);
      case 'io':
        return a.ordinalNumber(e, { unit: 'day' });
      case 'iii':
        return Oe(
          a.day(e, { width: 'abbreviated', context: 'formatting' }) ||
            a.day(e, { width: 'short', context: 'formatting' }) ||
            a.day(e, { width: 'narrow', context: 'formatting' }),
          i
        );
      case 'iiiii':
        return Oe(a.day(e, { width: 'narrow', context: 'formatting' }), i);
      case 'iiiiii':
        return Oe(
          a.day(e, { width: 'short', context: 'formatting' }) || a.day(e, { width: 'narrow', context: 'formatting' }),
          i
        );
      case 'iiii':
      default:
        return Oe(
          a.day(e, { width: 'wide', context: 'formatting' }) ||
            a.day(e, { width: 'abbreviated', context: 'formatting' }) ||
            a.day(e, { width: 'short', context: 'formatting' }) ||
            a.day(e, { width: 'narrow', context: 'formatting' }),
          i
        );
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 7;
  }
  set(e, t, a) {
    return ((e = rv(e, a)), e.setHours(0, 0, 0, 0), e);
  }
}
class iv extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 80);
    j(this, 'incompatibleTokens', ['b', 'B', 'H', 'k', 't', 'T']);
  }
  parse(e, t, a) {
    switch (t) {
      case 'a':
      case 'aa':
      case 'aaa':
        return (
          a.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
      case 'aaaaa':
        return a.dayPeriod(e, { width: 'narrow', context: 'formatting' });
      case 'aaaa':
      default:
        return (
          a.dayPeriod(e, { width: 'wide', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  set(e, t, a) {
    return (e.setHours(Ti(a), 0, 0, 0), e);
  }
}
class ov extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 80);
    j(this, 'incompatibleTokens', ['a', 'B', 'H', 'k', 't', 'T']);
  }
  parse(e, t, a) {
    switch (t) {
      case 'b':
      case 'bb':
      case 'bbb':
        return (
          a.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
      case 'bbbbb':
        return a.dayPeriod(e, { width: 'narrow', context: 'formatting' });
      case 'bbbb':
      default:
        return (
          a.dayPeriod(e, { width: 'wide', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  set(e, t, a) {
    return (e.setHours(Ti(a), 0, 0, 0), e);
  }
}
class sv extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 80);
    j(this, 'incompatibleTokens', ['a', 'b', 't', 'T']);
  }
  parse(e, t, a) {
    switch (t) {
      case 'B':
      case 'BB':
      case 'BBB':
        return (
          a.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
      case 'BBBBB':
        return a.dayPeriod(e, { width: 'narrow', context: 'formatting' });
      case 'BBBB':
      default:
        return (
          a.dayPeriod(e, { width: 'wide', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  set(e, t, a) {
    return (e.setHours(Ti(a), 0, 0, 0), e);
  }
}
class lv extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 70);
    j(this, 'incompatibleTokens', ['H', 'K', 'k', 't', 'T']);
  }
  parse(e, t, a) {
    switch (t) {
      case 'h':
        return xe(Te.hour12h, e);
      case 'ho':
        return a.ordinalNumber(e, { unit: 'hour' });
      default:
        return Ce(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 12;
  }
  set(e, t, a) {
    const i = e.getHours() >= 12;
    return (
      i && a < 12 ? e.setHours(a + 12, 0, 0, 0) : !i && a === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(a, 0, 0, 0),
      e
    );
  }
}
class uv extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 70);
    j(this, 'incompatibleTokens', ['a', 'b', 'h', 'K', 'k', 't', 'T']);
  }
  parse(e, t, a) {
    switch (t) {
      case 'H':
        return xe(Te.hour23h, e);
      case 'Ho':
        return a.ordinalNumber(e, { unit: 'hour' });
      default:
        return Ce(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 23;
  }
  set(e, t, a) {
    return (e.setHours(a, 0, 0, 0), e);
  }
}
class cv extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 70);
    j(this, 'incompatibleTokens', ['h', 'H', 'k', 't', 'T']);
  }
  parse(e, t, a) {
    switch (t) {
      case 'K':
        return xe(Te.hour11h, e);
      case 'Ko':
        return a.ordinalNumber(e, { unit: 'hour' });
      default:
        return Ce(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return (e.getHours() >= 12 && a < 12 ? e.setHours(a + 12, 0, 0, 0) : e.setHours(a, 0, 0, 0), e);
  }
}
class dv extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 70);
    j(this, 'incompatibleTokens', ['a', 'b', 'h', 'H', 'K', 't', 'T']);
  }
  parse(e, t, a) {
    switch (t) {
      case 'k':
        return xe(Te.hour24h, e);
      case 'ko':
        return a.ordinalNumber(e, { unit: 'hour' });
      default:
        return Ce(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 24;
  }
  set(e, t, a) {
    const i = a <= 24 ? a % 24 : a;
    return (e.setHours(i, 0, 0, 0), e);
  }
}
class fv extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 60);
    j(this, 'incompatibleTokens', ['t', 'T']);
  }
  parse(e, t, a) {
    switch (t) {
      case 'm':
        return xe(Te.minute, e);
      case 'mo':
        return a.ordinalNumber(e, { unit: 'minute' });
      default:
        return Ce(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, a) {
    return (e.setMinutes(a, 0, 0), e);
  }
}
class pv extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 50);
    j(this, 'incompatibleTokens', ['t', 'T']);
  }
  parse(e, t, a) {
    switch (t) {
      case 's':
        return xe(Te.second, e);
      case 'so':
        return a.ordinalNumber(e, { unit: 'second' });
      default:
        return Ce(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, a) {
    return (e.setSeconds(a, 0), e);
  }
}
class mv extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 30);
    j(this, 'incompatibleTokens', ['t', 'T']);
  }
  parse(e, t) {
    const a = (i) => Math.trunc(i * Math.pow(10, -t.length + 3));
    return Oe(Ce(t.length, e), a);
  }
  set(e, t, a) {
    return (e.setMilliseconds(a), e);
  }
}
class hv extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 10);
    j(this, 'incompatibleTokens', ['t', 'T', 'x']);
  }
  parse(e, t) {
    switch (t) {
      case 'X':
        return ut(lt.basicOptionalMinutes, e);
      case 'XX':
        return ut(lt.basic, e);
      case 'XXXX':
        return ut(lt.basicOptionalSeconds, e);
      case 'XXXXX':
        return ut(lt.extendedOptionalSeconds, e);
      case 'XXX':
      default:
        return ut(lt.extended, e);
    }
  }
  set(e, t, a) {
    return t.timestampIsSet ? e : me(e, e.getTime() - $r(e) - a);
  }
}
class vv extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 10);
    j(this, 'incompatibleTokens', ['t', 'T', 'X']);
  }
  parse(e, t) {
    switch (t) {
      case 'x':
        return ut(lt.basicOptionalMinutes, e);
      case 'xx':
        return ut(lt.basic, e);
      case 'xxxx':
        return ut(lt.basicOptionalSeconds, e);
      case 'xxxxx':
        return ut(lt.extendedOptionalSeconds, e);
      case 'xxx':
      default:
        return ut(lt.extended, e);
    }
  }
  set(e, t, a) {
    return t.timestampIsSet ? e : me(e, e.getTime() - $r(e) - a);
  }
}
class gv extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 40);
    j(this, 'incompatibleTokens', '*');
  }
  parse(e) {
    return Al(e);
  }
  set(e, t, a) {
    return [me(e, a * 1e3), { timestampIsSet: !0 }];
  }
}
class yv extends de {
  constructor() {
    super(...arguments);
    j(this, 'priority', 20);
    j(this, 'incompatibleTokens', '*');
  }
  parse(e) {
    return Al(e);
  }
  set(e, t, a) {
    return [me(e, a), { timestampIsSet: !0 }];
  }
}
const bv = {
    G: new Lh(),
    y: new Yh(),
    Y: new Vh(),
    R: new qh(),
    u: new $h(),
    Q: new Hh(),
    q: new Wh(),
    M: new jh(),
    L: new Bh(),
    w: new zh(),
    I: new Kh(),
    d: new Zh(),
    D: new Jh(),
    E: new ev(),
    e: new tv(),
    c: new nv(),
    i: new av(),
    a: new iv(),
    b: new ov(),
    B: new sv(),
    h: new lv(),
    H: new uv(),
    K: new cv(),
    k: new dv(),
    m: new fv(),
    s: new pv(),
    S: new mv(),
    X: new hv(),
    x: new vv(),
    t: new gv(),
    T: new yv(),
  },
  wv = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Dv = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  xv = /^'([^]*?)'?$/,
  kv = /''/g,
  Sv = /\S/,
  Cv = /[a-zA-Z]/;
function Ma(n, r, e, t) {
  var m, h, g, w, D, x, b, C;
  const a = Mh(),
    i = (t == null ? void 0 : t.locale) ?? a.locale ?? _l,
    o =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((h = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null
        ? void 0
        : h.firstWeekContainsDate) ??
      a.firstWeekContainsDate ??
      ((w = (g = a.locale) == null ? void 0 : g.options) == null ? void 0 : w.firstWeekContainsDate) ??
      1,
    l =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((x = (D = t == null ? void 0 : t.locale) == null ? void 0 : D.options) == null ? void 0 : x.weekStartsOn) ??
      a.weekStartsOn ??
      ((C = (b = a.locale) == null ? void 0 : b.options) == null ? void 0 : C.weekStartsOn) ??
      0;
  if (r === '') return n === '' ? W(e) : me(e, NaN);
  const s = { firstWeekContainsDate: o, weekStartsOn: l, locale: i },
    u = [new Nh()],
    c = r
      .match(Dv)
      .map((k) => {
        const T = k[0];
        if (T in zr) {
          const _ = zr[T];
          return _(k, i.formatLong);
        }
        return k;
      })
      .join('')
      .match(wv),
    d = [];
  for (let k of c) {
    (!(t != null && t.useAdditionalWeekYearTokens) && Rl(k) && Za(k, r, n),
      !(t != null && t.useAdditionalDayOfYearTokens) && El(k) && Za(k, r, n));
    const T = k[0],
      _ = bv[T];
    if (_) {
      const { incompatibleTokens: I } = _;
      if (Array.isArray(I)) {
        const E = d.find((L) => I.includes(L.token) || L.token === T);
        if (E)
          throw new RangeError(`The format string mustn't contain \`${E.fullToken}\` and \`${k}\` at the same time`);
      } else if (_.incompatibleTokens === '*' && d.length > 0)
        throw new RangeError(`The format string mustn't contain \`${k}\` and any other token at the same time`);
      d.push({ token: T, fullToken: k });
      const P = _.run(n, k, i.match, s);
      if (!P) return me(e, NaN);
      (u.push(P.setter), (n = P.rest));
    } else {
      if (T.match(Cv)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + T + '`');
      if ((k === "''" ? (k = "'") : T === "'" && (k = Tv(k)), n.indexOf(k) === 0)) n = n.slice(k.length);
      else return me(e, NaN);
    }
  }
  if (n.length > 0 && Sv.test(n)) return me(e, NaN);
  const f = u
    .map((k) => k.priority)
    .sort((k, T) => T - k)
    .filter((k, T, _) => _.indexOf(k) === T)
    .map((k) => u.filter((T) => T.priority === k).sort((T, _) => _.subPriority - T.subPriority))
    .map((k) => k[0]);
  let p = W(e);
  if (isNaN(p.getTime())) return me(e, NaN);
  const v = {};
  for (const k of f) {
    if (!k.validate(p, s)) return me(e, NaN);
    const T = k.set(p, v, s);
    Array.isArray(T) ? ((p = T[0]), Object.assign(v, T[1])) : (p = T);
  }
  return me(e, p);
}
function Tv(n) {
  return n.match(xv)[1].replace(kv, "'");
}
function Ov(n, r) {
  const e = W(n),
    t = W(r);
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth();
}
function _v(n, r) {
  const e = Xa(n),
    t = Xa(r);
  return +e == +t;
}
function Pv(n, r) {
  const e = W(n),
    t = W(r);
  return e.getFullYear() === t.getFullYear();
}
function jn(n, r) {
  const e = +W(n),
    [t, a] = [+W(r.start), +W(r.end)].sort((i, o) => i - o);
  return e >= t && e <= a;
}
function Mv(n, r) {
  return nt(n, -1);
}
function Ev(n, r) {
  const t = Fv(n);
  let a;
  if (t.date) {
    const s = Nv(t.date, 2);
    a = Lv(s.restDateString, s.year);
  }
  if (!a || isNaN(a.getTime())) return new Date(NaN);
  const i = a.getTime();
  let o = 0,
    l;
  if (t.time && ((o = Yv(t.time)), isNaN(o))) return new Date(NaN);
  if (t.timezone) {
    if (((l = Vv(t.timezone)), isNaN(l))) return new Date(NaN);
  } else {
    const s = new Date(i + o),
      u = new Date(0);
    return (
      u.setFullYear(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate()),
      u.setHours(s.getUTCHours(), s.getUTCMinutes(), s.getUTCSeconds(), s.getUTCMilliseconds()),
      u
    );
  }
  return new Date(i + o + l);
}
const ur = { dateTimeDelimiter: /[T ]/, timeZoneDelimiter: /[Z ]/i, timezone: /([Z+-].*)$/ },
  Rv = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  Iv = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  Av = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Fv(n) {
  const r = {},
    e = n.split(ur.dateTimeDelimiter);
  let t;
  if (e.length > 2) return r;
  if (
    (/:/.test(e[0])
      ? (t = e[0])
      : ((r.date = e[0]),
        (t = e[1]),
        ur.timeZoneDelimiter.test(r.date) &&
          ((r.date = n.split(ur.timeZoneDelimiter)[0]), (t = n.substr(r.date.length, n.length)))),
    t)
  ) {
    const a = ur.timezone.exec(t);
    a ? ((r.time = t.replace(a[1], '')), (r.timezone = a[1])) : (r.time = t);
  }
  return r;
}
function Nv(n, r) {
  const e = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + r) + '})|(\\d{2}|[+-]\\d{' + (2 + r) + '})$)'),
    t = n.match(e);
  if (!t) return { year: NaN, restDateString: '' };
  const a = t[1] ? parseInt(t[1]) : null,
    i = t[2] ? parseInt(t[2]) : null;
  return { year: i === null ? a : i * 100, restDateString: n.slice((t[1] || t[2]).length) };
}
function Lv(n, r) {
  if (r === null) return new Date(NaN);
  const e = n.match(Rv);
  if (!e) return new Date(NaN);
  const t = !!e[4],
    a = Mn(e[1]),
    i = Mn(e[2]) - 1,
    o = Mn(e[3]),
    l = Mn(e[4]),
    s = Mn(e[5]) - 1;
  if (t) return jv(r, l, s) ? qv(r, l, s) : new Date(NaN);
  {
    const u = new Date(0);
    return !Hv(r, i, o) || !Wv(r, a) ? new Date(NaN) : (u.setUTCFullYear(r, i, Math.max(a, o)), u);
  }
}
function Mn(n) {
  return n ? parseInt(n) : 1;
}
function Yv(n) {
  const r = n.match(Iv);
  if (!r) return NaN;
  const e = Ea(r[1]),
    t = Ea(r[2]),
    a = Ea(r[3]);
  return Bv(e, t, a) ? e * pa + t * fa + a * 1e3 : NaN;
}
function Ea(n) {
  return (n && parseFloat(n.replace(',', '.'))) || 0;
}
function Vv(n) {
  if (n === 'Z') return 0;
  const r = n.match(Av);
  if (!r) return 0;
  const e = r[1] === '+' ? -1 : 1,
    t = parseInt(r[2]),
    a = (r[3] && parseInt(r[3])) || 0;
  return Uv(t, a) ? e * (t * pa + a * fa) : NaN;
}
function qv(n, r, e) {
  const t = new Date(0);
  t.setUTCFullYear(n, 0, 4);
  const a = t.getUTCDay() || 7,
    i = (r - 1) * 7 + e + 1 - a;
  return (t.setUTCDate(t.getUTCDate() + i), t);
}
const $v = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Ll(n) {
  return n % 400 === 0 || (n % 4 === 0 && n % 100 !== 0);
}
function Hv(n, r, e) {
  return r >= 0 && r <= 11 && e >= 1 && e <= ($v[r] || (Ll(n) ? 29 : 28));
}
function Wv(n, r) {
  return r >= 1 && r <= (Ll(n) ? 366 : 365);
}
function jv(n, r, e) {
  return r >= 1 && r <= 53 && e >= 0 && e <= 6;
}
function Bv(n, r, e) {
  return n === 24 ? r === 0 && e === 0 : e >= 0 && e < 60 && r >= 0 && r < 60 && n >= 0 && n < 25;
}
function Uv(n, r) {
  return r >= 0 && r <= 59;
}
function je(n, r) {
  const e = W(n),
    t = e.getFullYear(),
    a = e.getDate(),
    i = me(n, 0);
  (i.setFullYear(t, r, 15), i.setHours(0, 0, 0, 0));
  const o = Ph(i);
  return (e.setMonth(r, Math.min(a, o)), e);
}
function zv(n, r) {
  let e = W(n);
  return isNaN(+e)
    ? me(n, NaN)
    : (r.year != null && e.setFullYear(r.year),
      r.month != null && (e = je(e, r.month)),
      r.date != null && e.setDate(r.date),
      r.hours != null && e.setHours(r.hours),
      r.minutes != null && e.setMinutes(r.minutes),
      r.seconds != null && e.setSeconds(r.seconds),
      r.milliseconds != null && e.setMilliseconds(r.milliseconds),
      e);
}
function xr(n, r) {
  const e = W(n);
  return (e.setHours(r), e);
}
function kr(n, r) {
  const e = W(n);
  return (e.setMinutes(r), e);
}
function sn(n, r) {
  const e = W(n),
    t = Math.trunc(e.getMonth() / 3) + 1,
    a = r - t;
  return je(e, e.getMonth() + a * 3);
}
function Sr(n, r) {
  const e = W(n);
  return (e.setSeconds(r), e);
}
function at(n, r) {
  const e = W(n);
  return isNaN(+e) ? me(n, NaN) : (e.setFullYear(r), e);
}
function Bt(n, r) {
  return rt(n, -r);
}
function Yl(n, r) {
  return ki(n, -1);
}
function Ao(n, r) {
  return Hr(n, -1);
}
function yn(n, r) {
  return kt(n, -r);
}
var Qv = typeof document < 'u',
  Kv = function () {},
  Kr = Qv ? y.useLayoutEffect : Kv;
const Gv = { ...Rr },
  Xv = Gv.useInsertionEffect,
  Zv = Xv || ((n) => n());
function Jv(n) {
  const r = y.useRef(() => {});
  return (
    Zv(() => {
      r.current = n;
    }),
    y.useCallback(function () {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
      return r.current == null ? void 0 : r.current(...t);
    }, [])
  );
}
var eg = typeof document < 'u',
  tg = function () {},
  Cr = eg ? y.useLayoutEffect : tg;
function Gr(n, r) {
  if (n === r) return !0;
  if (typeof n != typeof r) return !1;
  if (typeof n == 'function' && n.toString() === r.toString()) return !0;
  let e, t, a;
  if (n && r && typeof n == 'object') {
    if (Array.isArray(n)) {
      if (((e = n.length), e !== r.length)) return !1;
      for (t = e; t-- !== 0; ) if (!Gr(n[t], r[t])) return !1;
      return !0;
    }
    if (((a = Object.keys(n)), (e = a.length), e !== Object.keys(r).length)) return !1;
    for (t = e; t-- !== 0; ) if (!{}.hasOwnProperty.call(r, a[t])) return !1;
    for (t = e; t-- !== 0; ) {
      const i = a[t];
      if (!(i === '_owner' && n.$$typeof) && !Gr(n[i], r[i])) return !1;
    }
    return !0;
  }
  return n !== n && r !== r;
}
function Vl(n) {
  return typeof window > 'u' ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fo(n, r) {
  const e = Vl(n);
  return Math.round(r * e) / e;
}
function Ra(n) {
  const r = y.useRef(n);
  return (
    Cr(() => {
      r.current = n;
    }),
    r
  );
}
function ng(n) {
  n === void 0 && (n = {});
  const {
      placement: r = 'bottom',
      strategy: e = 'absolute',
      middleware: t = [],
      platform: a,
      elements: { reference: i, floating: o } = {},
      transform: l = !0,
      whileElementsMounted: s,
      open: u,
    } = n,
    [c, d] = y.useState({ x: 0, y: 0, strategy: e, placement: r, middlewareData: {}, isPositioned: !1 }),
    [f, p] = y.useState(t);
  Gr(f, t) || p(t);
  const [v, m] = y.useState(null),
    [h, g] = y.useState(null),
    w = y.useCallback((q) => {
      q !== C.current && ((C.current = q), m(q));
    }, []),
    D = y.useCallback((q) => {
      q !== k.current && ((k.current = q), g(q));
    }, []),
    x = i || v,
    b = o || h,
    C = y.useRef(null),
    k = y.useRef(null),
    T = y.useRef(c),
    _ = s != null,
    I = Ra(s),
    P = Ra(a),
    E = Ra(u),
    L = y.useCallback(() => {
      if (!C.current || !k.current) return;
      const q = { placement: r, strategy: e, middleware: f };
      (P.current && (q.platform = P.current),
        lf(C.current, k.current, q).then((X) => {
          const se = { ...X, isPositioned: E.current !== !1 };
          B.current &&
            !Gr(T.current, se) &&
            ((T.current = se),
            Ss.flushSync(() => {
              d(se);
            }));
        }));
    }, [f, r, e, P, E]);
  Cr(() => {
    u === !1 && T.current.isPositioned && ((T.current.isPositioned = !1), d((q) => ({ ...q, isPositioned: !1 })));
  }, [u]);
  const B = y.useRef(!1);
  (Cr(
    () => (
      (B.current = !0),
      () => {
        B.current = !1;
      }
    ),
    []
  ),
    Cr(() => {
      if ((x && (C.current = x), b && (k.current = b), x && b)) {
        if (I.current) return I.current(x, b, L);
        L();
      }
    }, [x, b, L, I, _]));
  const N = y.useMemo(() => ({ reference: C, floating: k, setReference: w, setFloating: D }), [w, D]),
    R = y.useMemo(() => ({ reference: x, floating: b }), [x, b]),
    Y = y.useMemo(() => {
      const q = { position: e, left: 0, top: 0 };
      if (!R.floating) return q;
      const X = Fo(R.floating, c.x),
        se = Fo(R.floating, c.y);
      return l
        ? {
            ...q,
            transform: 'translate(' + X + 'px, ' + se + 'px)',
            ...(Vl(R.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: e, left: X, top: se };
    }, [e, l, R.floating, c.x, c.y]);
  return y.useMemo(() => ({ ...c, update: L, refs: N, elements: R, floatingStyles: Y }), [c, L, N, R, Y]);
}
const rg = (n) => {
    function r(e) {
      return {}.hasOwnProperty.call(e, 'current');
    }
    return {
      name: 'arrow',
      options: n,
      fn(e) {
        const { element: t, padding: a } = typeof n == 'function' ? n(e) : n;
        return t && r(t)
          ? t.current != null
            ? oo({ element: t.current, padding: a }).fn(e)
            : {}
          : t
            ? oo({ element: t, padding: a }).fn(e)
            : {};
      },
    };
  },
  ag = (n, r) => ({ ...of(n), options: [n, r] }),
  ig = (n, r) => ({ ...sf(n), options: [n, r] }),
  og = (n, r) => ({ ...rg(n), options: [n, r] }),
  sg = { ...Rr };
let No = !1,
  lg = 0;
const Lo = () => 'floating-ui-' + Math.random().toString(36).slice(2, 6) + lg++;
function ug() {
  const [n, r] = y.useState(() => (No ? Lo() : void 0));
  return (
    Kr(() => {
      n == null && r(Lo());
    }, []),
    y.useEffect(() => {
      No = !0;
    }, []),
    n
  );
}
const cg = sg.useId,
  ql = cg || ug,
  dg = y.forwardRef(function (r, e) {
    const {
        context: {
          placement: t,
          elements: { floating: a },
          middlewareData: { arrow: i, shift: o },
        },
        width: l = 14,
        height: s = 7,
        tipRadius: u = 0,
        strokeWidth: c = 0,
        staticOffset: d,
        stroke: f,
        d: p,
        style: { transform: v, ...m } = {},
        ...h
      } = r,
      g = ql(),
      [w, D] = y.useState(!1);
    if (
      (Kr(() => {
        if (!a) return;
        Ze(a).direction === 'rtl' && D(!0);
      }, [a]),
      !a)
    )
      return null;
    const [x, b] = t.split('-'),
      C = x === 'top' || x === 'bottom';
    let k = d;
    ((C && o != null && o.x) || (!C && o != null && o.y)) && (k = null);
    const T = c * 2,
      _ = T / 2,
      I = (l / 2) * (u / -8 + 1),
      P = ((s / 2) * u) / 4,
      E = !!p,
      L = k && b === 'end' ? 'bottom' : 'top';
    let B = k && b === 'end' ? 'right' : 'left';
    k && w && (B = b === 'end' ? 'left' : 'right');
    const N = (i == null ? void 0 : i.x) != null ? k || i.x : '',
      R = (i == null ? void 0 : i.y) != null ? k || i.y : '',
      Y =
        p ||
        'M0,0' +
          (' H' + l) +
          (' L' + (l - I) + ',' + (s - P)) +
          (' Q' + l / 2 + ',' + s + ' ' + I + ',' + (s - P)) +
          ' Z',
      q = {
        top: E ? 'rotate(180deg)' : '',
        left: E ? 'rotate(90deg)' : 'rotate(-90deg)',
        bottom: E ? '' : 'rotate(180deg)',
        right: E ? 'rotate(-90deg)' : 'rotate(90deg)',
      }[x];
    return H.jsxs('svg', {
      ...h,
      'aria-hidden': !0,
      ref: e,
      width: E ? l : l + T,
      height: l,
      viewBox: '0 0 ' + l + ' ' + (s > l ? s : l),
      style: {
        position: 'absolute',
        pointerEvents: 'none',
        [B]: N,
        [L]: R,
        [x]: C || E ? '100%' : 'calc(100% - ' + T / 2 + 'px)',
        transform: [q, v].filter((X) => !!X).join(' '),
        ...m,
      },
      children: [
        T > 0 &&
          H.jsx('path', { clipPath: 'url(#' + g + ')', fill: 'none', stroke: f, strokeWidth: T + (p ? 0 : 1), d: Y }),
        H.jsx('path', { stroke: T && !p ? h.fill : 'none', d: Y }),
        H.jsx('clipPath', { id: g, children: H.jsx('rect', { x: -_, y: _ * (E ? -1 : 1), width: l + T, height: l }) }),
      ],
    });
  });
function fg() {
  const n = new Map();
  return {
    emit(r, e) {
      var t;
      (t = n.get(r)) == null || t.forEach((a) => a(e));
    },
    on(r, e) {
      (n.has(r) || n.set(r, new Set()), n.get(r).add(e));
    },
    off(r, e) {
      var t;
      (t = n.get(r)) == null || t.delete(e);
    },
  };
}
const pg = y.createContext(null),
  mg = y.createContext(null),
  hg = () => {
    var n;
    return ((n = y.useContext(pg)) == null ? void 0 : n.id) || null;
  },
  vg = () => y.useContext(mg);
function gg(n) {
  const { open: r = !1, onOpenChange: e, elements: t } = n,
    a = ql(),
    i = y.useRef({}),
    [o] = y.useState(() => fg()),
    l = hg() != null,
    [s, u] = y.useState(t.reference),
    c = Jv((p, v, m) => {
      ((i.current.openEvent = p ? v : void 0),
        o.emit('openchange', { open: p, event: v, reason: m, nested: l }),
        e == null || e(p, v, m));
    }),
    d = y.useMemo(() => ({ setPositionReference: u }), []),
    f = y.useMemo(
      () => ({ reference: s || t.reference || null, floating: t.floating || null, domReference: t.reference }),
      [s, t.reference, t.floating]
    );
  return y.useMemo(
    () => ({ dataRef: i, open: r, onOpenChange: c, elements: f, events: o, floatingId: a, refs: d }),
    [r, c, f, o, a, d]
  );
}
function yg(n) {
  n === void 0 && (n = {});
  const { nodeId: r } = n,
    e = gg({ ...n, elements: { reference: null, floating: null, ...n.elements } }),
    t = n.rootContext || e,
    a = t.elements,
    [i, o] = y.useState(null),
    [l, s] = y.useState(null),
    c = (a == null ? void 0 : a.domReference) || i,
    d = y.useRef(null),
    f = vg();
  Kr(() => {
    c && (d.current = c);
  }, [c]);
  const p = ng({ ...n, elements: { ...a, ...(l && { reference: l }) } }),
    v = y.useCallback(
      (D) => {
        const x = Ye(D)
          ? {
              getBoundingClientRect: () => D.getBoundingClientRect(),
              getClientRects: () => D.getClientRects(),
              contextElement: D,
            }
          : D;
        (s(x), p.refs.setReference(x));
      },
      [p.refs]
    ),
    m = y.useCallback(
      (D) => {
        ((Ye(D) || D === null) && ((d.current = D), o(D)),
          (Ye(p.refs.reference.current) || p.refs.reference.current === null || (D !== null && !Ye(D))) &&
            p.refs.setReference(D));
      },
      [p.refs]
    ),
    h = y.useMemo(() => ({ ...p.refs, setReference: m, setPositionReference: v, domReference: d }), [p.refs, m, v]),
    g = y.useMemo(() => ({ ...p.elements, domReference: c }), [p.elements, c]),
    w = y.useMemo(() => ({ ...p, ...t, refs: h, elements: g, nodeId: r }), [p, h, g, r, t]);
  return (
    Kr(() => {
      t.dataRef.current.floatingContext = w;
      const D = f == null ? void 0 : f.nodesRef.current.find((x) => x.id === r);
      D && (D.context = w);
    }),
    y.useMemo(() => ({ ...p, context: w, refs: h, elements: g }), [p, h, g, w])
  );
}
/*!
  react-datepicker v7.6.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/ var ei = function (r, e) {
  return (
    (ei =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, a) {
          t.__proto__ = a;
        }) ||
      function (t, a) {
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
      }),
    ei(r, e)
  );
};
function Re(n, r) {
  if (typeof r != 'function' && r !== null)
    throw new TypeError('Class extends value ' + String(r) + ' is not a constructor or null');
  ei(n, r);
  function e() {
    this.constructor = n;
  }
  n.prototype = r === null ? Object.create(r) : ((e.prototype = r.prototype), new e());
}
var oe = function () {
  return (
    (oe =
      Object.assign ||
      function (e) {
        for (var t, a = 1, i = arguments.length; a < i; a++) {
          t = arguments[a];
          for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
        return e;
      }),
    oe.apply(this, arguments)
  );
};
function ct(n, r, e) {
  if (e || arguments.length === 2)
    for (var t = 0, a = r.length, i; t < a; t++)
      (i || !(t in r)) && (i || (i = Array.prototype.slice.call(r, 0, t)), (i[t] = r[t]));
  return n.concat(i || Array.prototype.slice.call(r));
}
var bg = function (n) {
    var r = n.showTimeSelectOnly,
      e = r === void 0 ? !1 : r,
      t = n.showTime,
      a = t === void 0 ? !1 : t,
      i = n.className,
      o = n.children,
      l = e ? 'Choose Time' : 'Choose Date'.concat(a ? ' and Time' : '');
    return O.createElement('div', { className: i, role: 'dialog', 'aria-label': l, 'aria-modal': 'true' }, o);
  },
  wg = function (n, r) {
    var e = y.useRef(null),
      t = y.useRef(n);
    t.current = n;
    var a = y.useCallback(
      function (i) {
        var o;
        e.current &&
          !e.current.contains(i.target) &&
          ((r && i.target instanceof HTMLElement && i.target.classList.contains(r)) ||
            (o = t.current) === null ||
            o === void 0 ||
            o.call(t, i));
      },
      [r]
    );
    return (
      y.useEffect(
        function () {
          return (
            document.addEventListener('mousedown', a),
            function () {
              document.removeEventListener('mousedown', a);
            }
          );
        },
        [a]
      ),
      e
    );
  },
  ha = function (n) {
    var r = n.children,
      e = n.onClickOutside,
      t = n.className,
      a = n.containerRef,
      i = n.style,
      o = n.ignoreClass,
      l = wg(e, o);
    return O.createElement(
      'div',
      {
        className: t,
        style: i,
        ref: function (s) {
          ((l.current = s), a && (a.current = s));
        },
      },
      r
    );
  },
  $;
(function (n) {
  ((n.ArrowUp = 'ArrowUp'),
    (n.ArrowDown = 'ArrowDown'),
    (n.ArrowLeft = 'ArrowLeft'),
    (n.ArrowRight = 'ArrowRight'),
    (n.PageUp = 'PageUp'),
    (n.PageDown = 'PageDown'),
    (n.Home = 'Home'),
    (n.End = 'End'),
    (n.Enter = 'Enter'),
    (n.Space = ' '),
    (n.Tab = 'Tab'),
    (n.Escape = 'Escape'),
    (n.Backspace = 'Backspace'),
    (n.X = 'x'));
})($ || ($ = {}));
function $l() {
  var n = typeof window < 'u' ? window : globalThis;
  return n;
}
var Zn = 12,
  Dg = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function he(n) {
  if (n == null) return new Date();
  var r = typeof n == 'string' ? Ev(n) : W(n);
  return Dt(r) ? r : new Date();
}
function Ia(n, r, e, t, a) {
  var i,
    o = null,
    l = Ut(e) || Ut(Nn()),
    s = !0;
  if (Array.isArray(r))
    return (
      r.forEach(function (c) {
        var d = Ma(n, c, new Date(), { locale: l, useAdditionalWeekYearTokens: !0, useAdditionalDayOfYearTokens: !0 });
        (t && (s = Dt(d, a) && n === be(d, c, e)), Dt(d, a) && s && (o = d));
      }),
      o
    );
  if (((o = Ma(n, r, new Date(), { locale: l, useAdditionalWeekYearTokens: !0, useAdditionalDayOfYearTokens: !0 })), t))
    s = Dt(o) && n === be(o, r, e);
  else if (!Dt(o)) {
    var u = ((i = r.match(Dg)) !== null && i !== void 0 ? i : [])
      .map(function (c) {
        var d = c[0];
        if (d === 'p' || d === 'P') {
          var f = zr[d];
          return l ? f(c, l.formatLong) : d;
        }
        return c;
      })
      .join('');
    (n.length > 0 &&
      (o = Ma(n, u.slice(0, n.length), new Date(), {
        useAdditionalWeekYearTokens: !0,
        useAdditionalDayOfYearTokens: !0,
      })),
      Dt(o) || (o = new Date(n)));
  }
  return Dt(o) && s ? o : null;
}
function Dt(n, r) {
  return Wr(n) && !Xt(n, r ?? new Date('1/1/1800'));
}
function be(n, r, e) {
  if (e === 'en') return Ro(n, r, { useAdditionalWeekYearTokens: !0, useAdditionalDayOfYearTokens: !0 });
  var t = e ? Ut(e) : void 0;
  return (
    e && !t && console.warn('A locale object was not found for the provided string ["'.concat(e, '"].')),
    !t && Nn() && Ut(Nn()) && (t = Ut(Nn())),
    Ro(n, r, { locale: t, useAdditionalWeekYearTokens: !0, useAdditionalDayOfYearTokens: !0 })
  );
}
function Ke(n, r) {
  var e = r.dateFormat,
    t = r.locale,
    a = Array.isArray(e) && e.length > 0 ? e[0] : e;
  return (n && be(n, a, t)) || '';
}
function xg(n, r, e) {
  if (!n) return '';
  var t = Ke(n, e),
    a = r ? Ke(r, e) : '';
  return ''.concat(t, ' - ').concat(a);
}
function kg(n, r) {
  if (!(n != null && n.length)) return '';
  var e = n[0] ? Ke(n[0], r) : '';
  if (n.length === 1) return e;
  if (n.length === 2 && n[1]) {
    var t = Ke(n[1], r);
    return ''.concat(e, ', ').concat(t);
  }
  var a = n.length - 1;
  return ''.concat(e, ' (+').concat(a, ')');
}
function Aa(n, r) {
  var e = r.hour,
    t = e === void 0 ? 0 : e,
    a = r.minute,
    i = a === void 0 ? 0 : a,
    o = r.second,
    l = o === void 0 ? 0 : o;
  return xr(kr(Sr(n, l), i), t);
}
function Sg(n) {
  return Si(n);
}
function Cg(n, r) {
  return be(n, 'ddd', r);
}
function Tr(n) {
  return Gt(n);
}
function It(n, r, e) {
  var t = Ut(r || Nn());
  return Ot(n, { locale: t, weekStartsOn: e });
}
function Tt(n) {
  return Tl(n);
}
function An(n) {
  return ma(n);
}
function Yo(n) {
  return Xa(n);
}
function Vo() {
  return Gt(he());
}
function qo(n) {
  return Sl(n);
}
function Tg(n) {
  return Nm(n);
}
function Og(n) {
  return Cl(n);
}
function st(n, r) {
  return n && r ? Pv(n, r) : !n && !r;
}
function Le(n, r) {
  return n && r ? Ov(n, r) : !n && !r;
}
function Xr(n, r) {
  return n && r ? _v(n, r) : !n && !r;
}
function ae(n, r) {
  return n && r ? Am(n, r) : !n && !r;
}
function $t(n, r) {
  return n && r ? Rh(n, r) : !n && !r;
}
function Fn(n, r, e) {
  var t,
    a = Gt(r),
    i = Sl(e);
  try {
    t = jn(n, { start: a, end: i });
  } catch {
    t = !1;
  }
  return t;
}
function Nn() {
  var n = $l();
  return n.__localeId__;
}
function Ut(n) {
  if (typeof n == 'string') {
    var r = $l();
    return r.__localeData__ ? r.__localeData__[n] : void 0;
  } else return n;
}
function _g(n, r, e) {
  return r(be(n, 'EEEE', e));
}
function Pg(n, r) {
  return be(n, 'EEEEEE', r);
}
function Mg(n, r) {
  return be(n, 'EEE', r);
}
function _i(n, r) {
  return be(je(he(), n), 'LLLL', r);
}
function Hl(n, r) {
  return be(je(he(), n), 'LLL', r);
}
function Eg(n, r) {
  return be(sn(he(), n), 'QQQ', r);
}
function Ge(n, r) {
  var e = r === void 0 ? {} : r,
    t = e.minDate,
    a = e.maxDate,
    i = e.excludeDates,
    o = e.excludeDateIntervals,
    l = e.includeDates,
    s = e.includeDateIntervals,
    u = e.filterDate;
  return (
    Jn(n, { minDate: t, maxDate: a }) ||
    (i &&
      i.some(function (c) {
        return c instanceof Date ? ae(n, c) : ae(n, c.date);
      })) ||
    (o &&
      o.some(function (c) {
        var d = c.start,
          f = c.end;
        return jn(n, { start: d, end: f });
      })) ||
    (l &&
      !l.some(function (c) {
        return ae(n, c);
      })) ||
    (s &&
      !s.some(function (c) {
        var d = c.start,
          f = c.end;
        return jn(n, { start: d, end: f });
      })) ||
    (u && !u(he(n))) ||
    !1
  );
}
function Pi(n, r) {
  var e = r === void 0 ? {} : r,
    t = e.excludeDates,
    a = e.excludeDateIntervals;
  return a && a.length > 0
    ? a.some(function (i) {
        var o = i.start,
          l = i.end;
        return jn(n, { start: o, end: l });
      })
    : (t &&
        t.some(function (i) {
          var o;
          return i instanceof Date ? ae(n, i) : ae(n, (o = i.date) !== null && o !== void 0 ? o : new Date());
        })) ||
        !1;
}
function Wl(n, r) {
  var e = r === void 0 ? {} : r,
    t = e.minDate,
    a = e.maxDate,
    i = e.excludeDates,
    o = e.includeDates,
    l = e.filterDate;
  return (
    Jn(n, { minDate: t ? Tl(t) : void 0, maxDate: a ? Cl(a) : void 0 }) ||
    (i == null
      ? void 0
      : i.some(function (s) {
          return Le(n, s instanceof Date ? s : s.date);
        })) ||
    (o &&
      !o.some(function (s) {
        return Le(n, s);
      })) ||
    (l && !l(he(n))) ||
    !1
  );
}
function cr(n, r, e, t) {
  var a = ee(n),
    i = Ve(n),
    o = ee(r),
    l = Ve(r),
    s = ee(t);
  return a === o && a === s
    ? i <= e && e <= l
    : a < o
      ? (s === a && i <= e) || (s === o && l >= e) || (s < o && s > a)
      : !1;
}
function Rg(n, r) {
  var e = r === void 0 ? {} : r,
    t = e.minDate,
    a = e.maxDate,
    i = e.excludeDates,
    o = e.includeDates;
  return (
    Jn(n, { minDate: t, maxDate: a }) ||
    (i &&
      i.some(function (l) {
        return Le(l instanceof Date ? l : l.date, n);
      })) ||
    (o &&
      !o.some(function (l) {
        return Le(l, n);
      })) ||
    !1
  );
}
function dr(n, r) {
  var e = r === void 0 ? {} : r,
    t = e.minDate,
    a = e.maxDate,
    i = e.excludeDates,
    o = e.includeDates,
    l = e.filterDate;
  return (
    Jn(n, { minDate: t, maxDate: a }) ||
    (i == null
      ? void 0
      : i.some(function (s) {
          return Xr(n, s instanceof Date ? s : s.date);
        })) ||
    (o &&
      !o.some(function (s) {
        return Xr(n, s);
      })) ||
    (l && !l(he(n))) ||
    !1
  );
}
function fr(n, r, e) {
  if (!r || !e || !Wr(r) || !Wr(e)) return !1;
  var t = ee(r),
    a = ee(e);
  return t <= n && a >= n;
}
function Or(n, r) {
  var e = r === void 0 ? {} : r,
    t = e.minDate,
    a = e.maxDate,
    i = e.excludeDates,
    o = e.includeDates,
    l = e.filterDate,
    s = new Date(n, 0, 1);
  return (
    Jn(s, { minDate: t ? ma(t) : void 0, maxDate: a ? Ol(a) : void 0 }) ||
    (i == null
      ? void 0
      : i.some(function (u) {
          return st(s, u instanceof Date ? u : u.date);
        })) ||
    (o &&
      !o.some(function (u) {
        return st(s, u);
      })) ||
    (l && !l(he(s))) ||
    !1
  );
}
function pr(n, r, e, t) {
  var a = ee(n),
    i = jt(n),
    o = ee(r),
    l = jt(r),
    s = ee(t);
  return a === o && a === s
    ? i <= e && e <= l
    : a < o
      ? (s === a && i <= e) || (s === o && l >= e) || (s < o && s > a)
      : !1;
}
function Jn(n, r) {
  var e,
    t = r === void 0 ? {} : r,
    a = t.minDate,
    i = t.maxDate;
  return (e = (a && gn(n, a) < 0) || (i && gn(n, i) > 0)) !== null && e !== void 0 ? e : !1;
}
function $o(n, r) {
  return r.some(function (e) {
    return mt(e) === mt(n) && ht(e) === ht(n) && Ct(e) === Ct(n);
  });
}
function Ho(n, r) {
  var e = r === void 0 ? {} : r,
    t = e.excludeTimes,
    a = e.includeTimes,
    i = e.filterTime;
  return (t && $o(n, t)) || (a && !$o(n, a)) || (i && !i(n)) || !1;
}
function Wo(n, r) {
  var e = r.minTime,
    t = r.maxTime;
  if (!e || !t) throw new Error('Both minTime and maxTime props required');
  var a = he();
  ((a = xr(a, mt(n))), (a = kr(a, ht(n))), (a = Sr(a, Ct(n))));
  var i = he();
  ((i = xr(i, mt(e))), (i = kr(i, ht(e))), (i = Sr(i, Ct(e))));
  var o = he();
  ((o = xr(o, mt(t))), (o = kr(o, ht(t))), (o = Sr(o, Ct(t))));
  var l;
  try {
    l = !jn(a, { start: i, end: o });
  } catch {
    l = !1;
  }
  return l;
}
function jo(n, r) {
  var e = r === void 0 ? {} : r,
    t = e.minDate,
    a = e.includeDates,
    i = Bt(n, 1);
  return (
    (t && jr(t, i) > 0) ||
    (a &&
      a.every(function (o) {
        return jr(o, i) > 0;
      })) ||
    !1
  );
}
function Bo(n, r) {
  var e = r === void 0 ? {} : r,
    t = e.maxDate,
    a = e.includeDates,
    i = rt(n, 1);
  return (
    (t && jr(i, t) > 0) ||
    (a &&
      a.every(function (o) {
        return jr(i, o) > 0;
      })) ||
    !1
  );
}
function Ig(n, r) {
  var e = r === void 0 ? {} : r,
    t = e.minDate,
    a = e.includeDates,
    i = ma(n),
    o = Yl(i);
  return (
    (t && Br(t, o) > 0) ||
    (a &&
      a.every(function (l) {
        return Br(l, o) > 0;
      })) ||
    !1
  );
}
function Ag(n, r) {
  var e = r === void 0 ? {} : r,
    t = e.maxDate,
    a = e.includeDates,
    i = Ol(n),
    o = ki(i, 1);
  return (
    (t && Br(o, t) > 0) ||
    (a &&
      a.every(function (l) {
        return Br(o, l) > 0;
      })) ||
    !1
  );
}
function Uo(n, r) {
  var e = r === void 0 ? {} : r,
    t = e.minDate,
    a = e.includeDates,
    i = yn(n, 1);
  return (
    (t && Ur(t, i) > 0) ||
    (a &&
      a.every(function (o) {
        return Ur(o, i) > 0;
      })) ||
    !1
  );
}
function Fg(n, r) {
  var e = r === void 0 ? {} : r,
    t = e.minDate,
    a = e.yearItemNumber,
    i = a === void 0 ? Zn : a,
    o = An(yn(n, i)),
    l = Rt(o, i).endPeriod,
    s = t && ee(t);
  return (s && s > l) || !1;
}
function zo(n, r) {
  var e = r === void 0 ? {} : r,
    t = e.maxDate,
    a = e.includeDates,
    i = kt(n, 1);
  return (
    (t && Ur(i, t) > 0) ||
    (a &&
      a.every(function (o) {
        return Ur(i, o) > 0;
      })) ||
    !1
  );
}
function Ng(n, r) {
  var e = r === void 0 ? {} : r,
    t = e.maxDate,
    a = e.yearItemNumber,
    i = a === void 0 ? Zn : a,
    o = kt(n, i),
    l = Rt(o, i).startPeriod,
    s = t && ee(t);
  return (s && s < l) || !1;
}
function jl(n) {
  var r = n.minDate,
    e = n.includeDates;
  if (e && r) {
    var t = e.filter(function (a) {
      return gn(a, r) >= 0;
    });
    return To(t);
  } else return e ? To(e) : r;
}
function Bl(n) {
  var r = n.maxDate,
    e = n.includeDates;
  if (e && r) {
    var t = e.filter(function (a) {
      return gn(a, r) <= 0;
    });
    return Co(t);
  } else return e ? Co(e) : r;
}
function Qo(n, r) {
  var e;
  (n === void 0 && (n = []), r === void 0 && (r = 'react-datepicker__day--highlighted'));
  for (var t = new Map(), a = 0, i = n.length; a < i; a++) {
    var o = n[a];
    if (St(o)) {
      var l = be(o, 'MM.dd.yyyy'),
        s = t.get(l) || [];
      s.includes(r) || (s.push(r), t.set(l, s));
    } else if (typeof o == 'object') {
      var u = Object.keys(o),
        c = (e = u[0]) !== null && e !== void 0 ? e : '',
        d = o[c];
      if (typeof c == 'string' && Array.isArray(d))
        for (var f = 0, p = d.length; f < p; f++) {
          var v = d[f];
          if (v) {
            var l = be(v, 'MM.dd.yyyy'),
              s = t.get(l) || [];
            s.includes(c) || (s.push(c), t.set(l, s));
          }
        }
    }
  }
  return t;
}
function Lg(n, r) {
  return n.length !== r.length
    ? !1
    : n.every(function (e, t) {
        return e === r[t];
      });
}
function Yg(n, r) {
  (n === void 0 && (n = []), r === void 0 && (r = 'react-datepicker__day--holidays'));
  var e = new Map();
  return (
    n.forEach(function (t) {
      var a = t.date,
        i = t.holidayName;
      if (St(a)) {
        var o = be(a, 'MM.dd.yyyy'),
          l = e.get(o) || { className: '', holidayNames: [] };
        if (!('className' in l && l.className === r && Lg(l.holidayNames, [i]))) {
          l.className = r;
          var s = l.holidayNames;
          ((l.holidayNames = s ? ct(ct([], s, !0), [i], !1) : [i]), e.set(o, l));
        }
      }
    }),
    e
  );
}
function Vg(n, r, e, t, a) {
  for (var i = a.length, o = [], l = 0; l < i; l++) {
    var s = n,
      u = a[l];
    u && ((s = Mm(s, mt(u))), (s = Ga(s, ht(u))), (s = Im(s, Ct(u))));
    var c = Ga(n, (e + 1) * t);
    Nt(s, r) && Xt(s, c) && u != null && o.push(u);
  }
  return o;
}
function Ko(n) {
  return n < 10 ? '0'.concat(n) : ''.concat(n);
}
function Rt(n, r) {
  r === void 0 && (r = Zn);
  var e = Math.ceil(ee(n) / r) * r,
    t = e - (r - 1);
  return { startPeriod: t, endPeriod: e };
}
function qg(n) {
  var r = new Date(n.getFullYear(), n.getMonth(), n.getDate()),
    e = new Date(n.getFullYear(), n.getMonth(), n.getDate(), 24);
  return Math.round((+e - +r) / 36e5);
}
function Go(n) {
  var r = n.getSeconds(),
    e = n.getMilliseconds();
  return W(n.getTime() - r * 1e3 - e);
}
function $g(n, r) {
  return Go(n).getTime() === Go(r).getTime();
}
function Xo(n) {
  if (!St(n)) throw new Error('Invalid date');
  var r = new Date(n);
  return (r.setHours(0, 0, 0, 0), r);
}
function Zo(n, r) {
  if (!St(n) || !St(r)) throw new Error('Invalid date received');
  var e = Xo(n),
    t = Xo(r);
  return Xt(e, t);
}
function Ul(n) {
  return n.key === $.Space;
}
var Hg = (function (n) {
    Re(r, n);
    function r(e) {
      var t = n.call(this, e) || this;
      return (
        (t.inputRef = O.createRef()),
        (t.onTimeChange = function (a) {
          var i, o;
          t.setState({ time: a });
          var l = t.props.date,
            s = l instanceof Date && !isNaN(+l),
            u = s ? l : new Date();
          if (a != null && a.includes(':')) {
            var c = a.split(':'),
              d = c[0],
              f = c[1];
            (u.setHours(Number(d)), u.setMinutes(Number(f)));
          }
          (o = (i = t.props).onChange) === null || o === void 0 || o.call(i, u);
        }),
        (t.renderTimeInput = function () {
          var a = t.state.time,
            i = t.props,
            o = i.date,
            l = i.timeString,
            s = i.customTimeInput;
          return s
            ? y.cloneElement(s, { date: o, value: a, onChange: t.onTimeChange })
            : O.createElement('input', {
                type: 'time',
                className: 'react-datepicker-time__input',
                placeholder: 'Time',
                name: 'time-input',
                ref: t.inputRef,
                onClick: function () {
                  var u;
                  (u = t.inputRef.current) === null || u === void 0 || u.focus();
                },
                required: !0,
                value: a,
                onChange: function (u) {
                  t.onTimeChange(u.target.value || l);
                },
              });
        }),
        (t.state = { time: t.props.timeString }),
        t
      );
    }
    return (
      (r.getDerivedStateFromProps = function (e, t) {
        return e.timeString !== t.time ? { time: e.timeString } : null;
      }),
      (r.prototype.render = function () {
        return O.createElement(
          'div',
          { className: 'react-datepicker__input-time-container' },
          O.createElement('div', { className: 'react-datepicker-time__caption' }, this.props.timeInputLabel),
          O.createElement(
            'div',
            { className: 'react-datepicker-time__input-container' },
            O.createElement('div', { className: 'react-datepicker-time__input' }, this.renderTimeInput())
          )
        );
      }),
      r
    );
  })(y.Component),
  Wg = (function (n) {
    Re(r, n);
    function r() {
      var e = (n !== null && n.apply(this, arguments)) || this;
      return (
        (e.dayEl = y.createRef()),
        (e.handleClick = function (t) {
          !e.isDisabled() && e.props.onClick && e.props.onClick(t);
        }),
        (e.handleMouseEnter = function (t) {
          !e.isDisabled() && e.props.onMouseEnter && e.props.onMouseEnter(t);
        }),
        (e.handleOnKeyDown = function (t) {
          var a,
            i,
            o = t.key;
          (o === $.Space && (t.preventDefault(), (t.key = $.Enter)),
            (i = (a = e.props).handleOnKeyDown) === null || i === void 0 || i.call(a, t));
        }),
        (e.isSameDay = function (t) {
          return ae(e.props.day, t);
        }),
        (e.isKeyboardSelected = function () {
          var t;
          if (e.props.disabledKeyboardNavigation) return !1;
          var a = e.props.selectsMultiple
              ? (t = e.props.selectedDates) === null || t === void 0
                ? void 0
                : t.some(function (o) {
                    return e.isSameDayOrWeek(o);
                  })
              : e.isSameDayOrWeek(e.props.selected),
            i = e.props.preSelection && e.isDisabled(e.props.preSelection);
          return !a && e.isSameDayOrWeek(e.props.preSelection) && !i;
        }),
        (e.isDisabled = function (t) {
          return (
            t === void 0 && (t = e.props.day),
            Ge(t, {
              minDate: e.props.minDate,
              maxDate: e.props.maxDate,
              excludeDates: e.props.excludeDates,
              excludeDateIntervals: e.props.excludeDateIntervals,
              includeDateIntervals: e.props.includeDateIntervals,
              includeDates: e.props.includeDates,
              filterDate: e.props.filterDate,
            })
          );
        }),
        (e.isExcluded = function () {
          return Pi(e.props.day, {
            excludeDates: e.props.excludeDates,
            excludeDateIntervals: e.props.excludeDateIntervals,
          });
        }),
        (e.isStartOfWeek = function () {
          return ae(e.props.day, It(e.props.day, e.props.locale, e.props.calendarStartDay));
        }),
        (e.isSameWeek = function (t) {
          return e.props.showWeekPicker && ae(t, It(e.props.day, e.props.locale, e.props.calendarStartDay));
        }),
        (e.isSameDayOrWeek = function (t) {
          return e.isSameDay(t) || e.isSameWeek(t);
        }),
        (e.getHighLightedClass = function () {
          var t = e.props,
            a = t.day,
            i = t.highlightDates;
          if (!i) return !1;
          var o = be(a, 'MM.dd.yyyy');
          return i.get(o);
        }),
        (e.getHolidaysClass = function () {
          var t,
            a = e.props,
            i = a.day,
            o = a.holidays;
          if (!o) return [void 0];
          var l = be(i, 'MM.dd.yyyy');
          return o.has(l) ? [(t = o.get(l)) === null || t === void 0 ? void 0 : t.className] : [void 0];
        }),
        (e.isInRange = function () {
          var t = e.props,
            a = t.day,
            i = t.startDate,
            o = t.endDate;
          return !i || !o ? !1 : Fn(a, i, o);
        }),
        (e.isInSelectingRange = function () {
          var t,
            a = e.props,
            i = a.day,
            o = a.selectsStart,
            l = a.selectsEnd,
            s = a.selectsRange,
            u = a.selectsDisabledDaysInRange,
            c = a.startDate,
            d = a.endDate,
            f = (t = e.props.selectingDate) !== null && t !== void 0 ? t : e.props.preSelection;
          return !(o || l || s) || !f || (!u && e.isDisabled())
            ? !1
            : o && d && (Xt(f, d) || $t(f, d))
              ? Fn(i, f, d)
              : (l && c && (Nt(f, c) || $t(f, c))) || (s && c && !d && (Nt(f, c) || $t(f, c)))
                ? Fn(i, c, f)
                : !1;
        }),
        (e.isSelectingRangeStart = function () {
          var t;
          if (!e.isInSelectingRange()) return !1;
          var a = e.props,
            i = a.day,
            o = a.startDate,
            l = a.selectsStart,
            s = (t = e.props.selectingDate) !== null && t !== void 0 ? t : e.props.preSelection;
          return l ? ae(i, s) : ae(i, o);
        }),
        (e.isSelectingRangeEnd = function () {
          var t;
          if (!e.isInSelectingRange()) return !1;
          var a = e.props,
            i = a.day,
            o = a.endDate,
            l = a.selectsEnd,
            s = a.selectsRange,
            u = (t = e.props.selectingDate) !== null && t !== void 0 ? t : e.props.preSelection;
          return l || s ? ae(i, u) : ae(i, o);
        }),
        (e.isRangeStart = function () {
          var t = e.props,
            a = t.day,
            i = t.startDate,
            o = t.endDate;
          return !i || !o ? !1 : ae(i, a);
        }),
        (e.isRangeEnd = function () {
          var t = e.props,
            a = t.day,
            i = t.startDate,
            o = t.endDate;
          return !i || !o ? !1 : ae(o, a);
        }),
        (e.isWeekend = function () {
          var t = _h(e.props.day);
          return t === 0 || t === 6;
        }),
        (e.isAfterMonth = function () {
          return e.props.month !== void 0 && (e.props.month + 1) % 12 === Ve(e.props.day);
        }),
        (e.isBeforeMonth = function () {
          return e.props.month !== void 0 && (Ve(e.props.day) + 1) % 12 === e.props.month;
        }),
        (e.isCurrentDay = function () {
          return e.isSameDay(he());
        }),
        (e.isSelected = function () {
          var t;
          return e.props.selectsMultiple
            ? (t = e.props.selectedDates) === null || t === void 0
              ? void 0
              : t.some(function (a) {
                  return e.isSameDayOrWeek(a);
                })
            : e.isSameDayOrWeek(e.props.selected);
        }),
        (e.getClassNames = function (t) {
          var a = e.props.dayClassName ? e.props.dayClassName(t) : void 0;
          return Ae(
            'react-datepicker__day',
            a,
            'react-datepicker__day--' + Cg(e.props.day),
            {
              'react-datepicker__day--disabled': e.isDisabled(),
              'react-datepicker__day--excluded': e.isExcluded(),
              'react-datepicker__day--selected': e.isSelected(),
              'react-datepicker__day--keyboard-selected': e.isKeyboardSelected(),
              'react-datepicker__day--range-start': e.isRangeStart(),
              'react-datepicker__day--range-end': e.isRangeEnd(),
              'react-datepicker__day--in-range': e.isInRange(),
              'react-datepicker__day--in-selecting-range': e.isInSelectingRange(),
              'react-datepicker__day--selecting-range-start': e.isSelectingRangeStart(),
              'react-datepicker__day--selecting-range-end': e.isSelectingRangeEnd(),
              'react-datepicker__day--today': e.isCurrentDay(),
              'react-datepicker__day--weekend': e.isWeekend(),
              'react-datepicker__day--outside-month': e.isAfterMonth() || e.isBeforeMonth(),
            },
            e.getHighLightedClass(),
            e.getHolidaysClass()
          );
        }),
        (e.getAriaLabel = function () {
          var t = e.props,
            a = t.day,
            i = t.ariaLabelPrefixWhenEnabled,
            o = i === void 0 ? 'Choose' : i,
            l = t.ariaLabelPrefixWhenDisabled,
            s = l === void 0 ? 'Not available' : l,
            u = e.isDisabled() || e.isExcluded() ? s : o;
          return ''.concat(u, ' ').concat(be(a, 'PPPP', e.props.locale));
        }),
        (e.getTitle = function () {
          var t = e.props,
            a = t.day,
            i = t.holidays,
            o = i === void 0 ? new Map() : i,
            l = t.excludeDates,
            s = be(a, 'MM.dd.yyyy'),
            u = [];
          return (
            o.has(s) && u.push.apply(u, o.get(s).holidayNames),
            e.isExcluded() &&
              u.push(
                l == null
                  ? void 0
                  : l
                      .filter(function (c) {
                        return c instanceof Date ? ae(c, a) : ae(c == null ? void 0 : c.date, a);
                      })
                      .map(function (c) {
                        if (!(c instanceof Date)) return c == null ? void 0 : c.message;
                      })
              ),
            u.join(', ')
          );
        }),
        (e.getTabIndex = function () {
          var t = e.props.selected,
            a = e.props.preSelection,
            i =
              !(e.props.showWeekPicker && (e.props.showWeekNumber || !e.isStartOfWeek())) &&
              (e.isKeyboardSelected() || (e.isSameDay(t) && ae(a, t)))
                ? 0
                : -1;
          return i;
        }),
        (e.handleFocusDay = function () {
          var t;
          e.shouldFocusDay() && ((t = e.dayEl.current) === null || t === void 0 || t.focus({ preventScroll: !0 }));
        }),
        (e.renderDayContents = function () {
          return (e.props.monthShowsDuplicateDaysEnd && e.isAfterMonth()) ||
            (e.props.monthShowsDuplicateDaysStart && e.isBeforeMonth())
            ? null
            : e.props.renderDayContents
              ? e.props.renderDayContents(Io(e.props.day), e.props.day)
              : Io(e.props.day);
        }),
        (e.render = function () {
          return O.createElement(
            'div',
            {
              ref: e.dayEl,
              className: e.getClassNames(e.props.day),
              onKeyDown: e.handleOnKeyDown,
              onClick: e.handleClick,
              onMouseEnter: e.props.usePointerEvent ? void 0 : e.handleMouseEnter,
              onPointerEnter: e.props.usePointerEvent ? e.handleMouseEnter : void 0,
              tabIndex: e.getTabIndex(),
              'aria-label': e.getAriaLabel(),
              role: 'option',
              title: e.getTitle(),
              'aria-disabled': e.isDisabled(),
              'aria-current': e.isCurrentDay() ? 'date' : void 0,
              'aria-selected': e.isSelected() || e.isInRange(),
            },
            e.renderDayContents(),
            e.getTitle() !== '' && O.createElement('span', { className: 'overlay' }, e.getTitle())
          );
        }),
        e
      );
    }
    return (
      (r.prototype.componentDidMount = function () {
        this.handleFocusDay();
      }),
      (r.prototype.componentDidUpdate = function () {
        this.handleFocusDay();
      }),
      (r.prototype.shouldFocusDay = function () {
        var e = !1;
        return (
          this.getTabIndex() === 0 &&
            this.isSameDay(this.props.preSelection) &&
            ((!document.activeElement || document.activeElement === document.body) && (e = !0),
            this.props.inline && !this.props.shouldFocusDayInline && (e = !1),
            this.isDayActiveElement() && (e = !0),
            this.isDuplicateDay() && (e = !1)),
          e
        );
      }),
      (r.prototype.isDayActiveElement = function () {
        var e, t, a;
        return (
          ((t = (e = this.props.containerRef) === null || e === void 0 ? void 0 : e.current) === null || t === void 0
            ? void 0
            : t.contains(document.activeElement)) &&
          ((a = document.activeElement) === null || a === void 0
            ? void 0
            : a.classList.contains('react-datepicker__day'))
        );
      }),
      (r.prototype.isDuplicateDay = function () {
        return (
          (this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth()) ||
          (this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth())
        );
      }),
      r
    );
  })(y.Component),
  jg = (function (n) {
    Re(r, n);
    function r() {
      var e = (n !== null && n.apply(this, arguments)) || this;
      return (
        (e.weekNumberEl = y.createRef()),
        (e.handleClick = function (t) {
          e.props.onClick && e.props.onClick(t);
        }),
        (e.handleOnKeyDown = function (t) {
          var a,
            i,
            o = t.key;
          (o === $.Space && (t.preventDefault(), (t.key = $.Enter)),
            (i = (a = e.props).handleOnKeyDown) === null || i === void 0 || i.call(a, t));
        }),
        (e.isKeyboardSelected = function () {
          return (
            !e.props.disabledKeyboardNavigation &&
            !ae(e.props.date, e.props.selected) &&
            ae(e.props.date, e.props.preSelection)
          );
        }),
        (e.getTabIndex = function () {
          return e.props.showWeekPicker &&
            e.props.showWeekNumber &&
            (e.isKeyboardSelected() ||
              (ae(e.props.date, e.props.selected) && ae(e.props.preSelection, e.props.selected)))
            ? 0
            : -1;
        }),
        (e.handleFocusWeekNumber = function (t) {
          var a = !1;
          (e.getTabIndex() === 0 &&
            !(t != null && t.isInputFocused) &&
            ae(e.props.date, e.props.preSelection) &&
            ((!document.activeElement || document.activeElement === document.body) && (a = !0),
            e.props.inline && !e.props.shouldFocusDayInline && (a = !1),
            e.props.containerRef &&
              e.props.containerRef.current &&
              e.props.containerRef.current.contains(document.activeElement) &&
              document.activeElement &&
              document.activeElement.classList.contains('react-datepicker__week-number') &&
              (a = !0)),
            a && e.weekNumberEl.current && e.weekNumberEl.current.focus({ preventScroll: !0 }));
        }),
        e
      );
    }
    return (
      Object.defineProperty(r, 'defaultProps', {
        get: function () {
          return { ariaLabelPrefix: 'week ' };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (r.prototype.componentDidMount = function () {
        this.handleFocusWeekNumber();
      }),
      (r.prototype.componentDidUpdate = function (e) {
        this.handleFocusWeekNumber(e);
      }),
      (r.prototype.render = function () {
        var e = this.props,
          t = e.weekNumber,
          a = e.isWeekDisabled,
          i = e.ariaLabelPrefix,
          o = i === void 0 ? r.defaultProps.ariaLabelPrefix : i,
          l = e.onClick,
          s = {
            'react-datepicker__week-number': !0,
            'react-datepicker__week-number--clickable': !!l && !a,
            'react-datepicker__week-number--selected': !!l && ae(this.props.date, this.props.selected),
          };
        return O.createElement(
          'div',
          {
            ref: this.weekNumberEl,
            className: Ae(s),
            'aria-label': ''.concat(o, ' ').concat(this.props.weekNumber),
            onClick: this.handleClick,
            onKeyDown: this.handleOnKeyDown,
            tabIndex: this.getTabIndex(),
          },
          t
        );
      }),
      r
    );
  })(y.Component),
  Bg = (function (n) {
    Re(r, n);
    function r() {
      var e = (n !== null && n.apply(this, arguments)) || this;
      return (
        (e.isDisabled = function (t) {
          return Ge(t, {
            minDate: e.props.minDate,
            maxDate: e.props.maxDate,
            excludeDates: e.props.excludeDates,
            excludeDateIntervals: e.props.excludeDateIntervals,
            includeDateIntervals: e.props.includeDateIntervals,
            includeDates: e.props.includeDates,
            filterDate: e.props.filterDate,
          });
        }),
        (e.handleDayClick = function (t, a) {
          e.props.onDayClick && e.props.onDayClick(t, a);
        }),
        (e.handleDayMouseEnter = function (t) {
          e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
        }),
        (e.handleWeekClick = function (t, a, i) {
          for (var o, l, s, u = new Date(t), c = 0; c < 7; c++) {
            var d = new Date(t);
            d.setDate(d.getDate() + c);
            var f = !e.isDisabled(d);
            if (f) {
              u = d;
              break;
            }
          }
          (typeof e.props.onWeekSelect == 'function' && e.props.onWeekSelect(u, a, i),
            e.props.showWeekPicker && e.handleDayClick(u, i),
            ((o = e.props.shouldCloseOnSelect) !== null && o !== void 0 ? o : r.defaultProps.shouldCloseOnSelect) &&
              ((s = (l = e.props).setOpen) === null || s === void 0 || s.call(l, !1)));
        }),
        (e.formatWeekNumber = function (t) {
          return e.props.formatWeekNumber ? e.props.formatWeekNumber(t) : Sg(t);
        }),
        (e.isWeekDisabled = function () {
          for (var t = e.startOfWeek(), a = nt(t, 6), i = new Date(t); i <= a; ) {
            if (!e.isDisabled(i)) return !1;
            i = nt(i, 1);
          }
          return !0;
        }),
        (e.renderDays = function () {
          var t = e.startOfWeek(),
            a = [],
            i = e.formatWeekNumber(t);
          if (e.props.showWeekNumber) {
            var o = e.props.onWeekSelect || e.props.showWeekPicker ? e.handleWeekClick.bind(e, t, i) : void 0;
            a.push(
              O.createElement(
                jg,
                oe({ key: 'W' }, r.defaultProps, e.props, {
                  weekNumber: i,
                  isWeekDisabled: e.isWeekDisabled(),
                  date: t,
                  onClick: o,
                })
              )
            );
          }
          return a.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function (l) {
              var s = nt(t, l);
              return O.createElement(
                Wg,
                oe({}, r.defaultProps, e.props, {
                  ariaLabelPrefixWhenEnabled: e.props.chooseDayAriaLabelPrefix,
                  ariaLabelPrefixWhenDisabled: e.props.disabledDayAriaLabelPrefix,
                  key: s.valueOf(),
                  day: s,
                  onClick: e.handleDayClick.bind(e, s),
                  onMouseEnter: e.handleDayMouseEnter.bind(e, s),
                })
              );
            })
          );
        }),
        (e.startOfWeek = function () {
          return It(e.props.day, e.props.locale, e.props.calendarStartDay);
        }),
        (e.isKeyboardSelected = function () {
          return (
            !e.props.disabledKeyboardNavigation &&
            !ae(e.startOfWeek(), e.props.selected) &&
            ae(e.startOfWeek(), e.props.preSelection)
          );
        }),
        e
      );
    }
    return (
      Object.defineProperty(r, 'defaultProps', {
        get: function () {
          return { shouldCloseOnSelect: !0 };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (r.prototype.render = function () {
        var e = {
          'react-datepicker__week': !0,
          'react-datepicker__week--selected': ae(this.startOfWeek(), this.props.selected),
          'react-datepicker__week--keyboard-selected': this.isKeyboardSelected(),
        };
        return O.createElement('div', { className: Ae(e) }, this.renderDays());
      }),
      r
    );
  })(y.Component),
  En,
  Ug = 6,
  dn = { TWO_COLUMNS: 'two_columns', THREE_COLUMNS: 'three_columns', FOUR_COLUMNS: 'four_columns' },
  Fa =
    ((En = {}),
    (En[dn.TWO_COLUMNS] = {
      grid: [
        [0, 1],
        [2, 3],
        [4, 5],
        [6, 7],
        [8, 9],
        [10, 11],
      ],
      verticalNavigationOffset: 2,
    }),
    (En[dn.THREE_COLUMNS] = {
      grid: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [9, 10, 11],
      ],
      verticalNavigationOffset: 3,
    }),
    (En[dn.FOUR_COLUMNS] = {
      grid: [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
      ],
      verticalNavigationOffset: 4,
    }),
    En),
  mr = 1;
function Jo(n, r) {
  return n ? dn.FOUR_COLUMNS : r ? dn.TWO_COLUMNS : dn.THREE_COLUMNS;
}
var zg = (function (n) {
    Re(r, n);
    function r() {
      var e = (n !== null && n.apply(this, arguments)) || this;
      return (
        (e.MONTH_REFS = ct([], Array(12), !0).map(function () {
          return y.createRef();
        })),
        (e.QUARTER_REFS = ct([], Array(4), !0).map(function () {
          return y.createRef();
        })),
        (e.isDisabled = function (t) {
          return Ge(t, {
            minDate: e.props.minDate,
            maxDate: e.props.maxDate,
            excludeDates: e.props.excludeDates,
            excludeDateIntervals: e.props.excludeDateIntervals,
            includeDateIntervals: e.props.includeDateIntervals,
            includeDates: e.props.includeDates,
            filterDate: e.props.filterDate,
          });
        }),
        (e.isExcluded = function (t) {
          return Pi(t, { excludeDates: e.props.excludeDates, excludeDateIntervals: e.props.excludeDateIntervals });
        }),
        (e.handleDayClick = function (t, a) {
          var i, o;
          (o = (i = e.props).onDayClick) === null || o === void 0 || o.call(i, t, a, e.props.orderInDisplay);
        }),
        (e.handleDayMouseEnter = function (t) {
          var a, i;
          (i = (a = e.props).onDayMouseEnter) === null || i === void 0 || i.call(a, t);
        }),
        (e.handleMouseLeave = function () {
          var t, a;
          (a = (t = e.props).onMouseLeave) === null || a === void 0 || a.call(t);
        }),
        (e.isRangeStartMonth = function (t) {
          var a = e.props,
            i = a.day,
            o = a.startDate,
            l = a.endDate;
          return !o || !l ? !1 : Le(je(i, t), o);
        }),
        (e.isRangeStartQuarter = function (t) {
          var a = e.props,
            i = a.day,
            o = a.startDate,
            l = a.endDate;
          return !o || !l ? !1 : Xr(sn(i, t), o);
        }),
        (e.isRangeEndMonth = function (t) {
          var a = e.props,
            i = a.day,
            o = a.startDate,
            l = a.endDate;
          return !o || !l ? !1 : Le(je(i, t), l);
        }),
        (e.isRangeEndQuarter = function (t) {
          var a = e.props,
            i = a.day,
            o = a.startDate,
            l = a.endDate;
          return !o || !l ? !1 : Xr(sn(i, t), l);
        }),
        (e.isInSelectingRangeMonth = function (t) {
          var a,
            i = e.props,
            o = i.day,
            l = i.selectsStart,
            s = i.selectsEnd,
            u = i.selectsRange,
            c = i.startDate,
            d = i.endDate,
            f = (a = e.props.selectingDate) !== null && a !== void 0 ? a : e.props.preSelection;
          return !(l || s || u) || !f ? !1 : l && d ? cr(f, d, t, o) : (s && c) || (u && c && !d) ? cr(c, f, t, o) : !1;
        }),
        (e.isSelectingMonthRangeStart = function (t) {
          var a;
          if (!e.isInSelectingRangeMonth(t)) return !1;
          var i = e.props,
            o = i.day,
            l = i.startDate,
            s = i.selectsStart,
            u = je(o, t),
            c = (a = e.props.selectingDate) !== null && a !== void 0 ? a : e.props.preSelection;
          return s ? Le(u, c) : Le(u, l);
        }),
        (e.isSelectingMonthRangeEnd = function (t) {
          var a;
          if (!e.isInSelectingRangeMonth(t)) return !1;
          var i = e.props,
            o = i.day,
            l = i.endDate,
            s = i.selectsEnd,
            u = i.selectsRange,
            c = je(o, t),
            d = (a = e.props.selectingDate) !== null && a !== void 0 ? a : e.props.preSelection;
          return s || u ? Le(c, d) : Le(c, l);
        }),
        (e.isInSelectingRangeQuarter = function (t) {
          var a,
            i = e.props,
            o = i.day,
            l = i.selectsStart,
            s = i.selectsEnd,
            u = i.selectsRange,
            c = i.startDate,
            d = i.endDate,
            f = (a = e.props.selectingDate) !== null && a !== void 0 ? a : e.props.preSelection;
          return !(l || s || u) || !f ? !1 : l && d ? pr(f, d, t, o) : (s && c) || (u && c && !d) ? pr(c, f, t, o) : !1;
        }),
        (e.isWeekInMonth = function (t) {
          var a = e.props.day,
            i = nt(t, 6);
          return Le(t, a) || Le(i, a);
        }),
        (e.isCurrentMonth = function (t, a) {
          return ee(t) === ee(he()) && a === Ve(he());
        }),
        (e.isCurrentQuarter = function (t, a) {
          return ee(t) === ee(he()) && a === jt(he());
        }),
        (e.isSelectedMonth = function (t, a, i) {
          return Ve(i) === a && ee(t) === ee(i);
        }),
        (e.isSelectMonthInList = function (t, a, i) {
          return i.some(function (o) {
            return e.isSelectedMonth(t, a, o);
          });
        }),
        (e.isSelectedQuarter = function (t, a, i) {
          return jt(t) === a && ee(t) === ee(i);
        }),
        (e.renderWeeks = function () {
          for (
            var t = [],
              a = e.props.fixedHeight,
              i = 0,
              o = !1,
              l = It(Tt(e.props.day), e.props.locale, e.props.calendarStartDay),
              s = function (v) {
                return e.props.showWeekPicker ? It(v, e.props.locale, e.props.calendarStartDay) : e.props.preSelection;
              },
              u = function (v) {
                return e.props.showWeekPicker ? It(v, e.props.locale, e.props.calendarStartDay) : e.props.selected;
              },
              c = e.props.selected ? u(e.props.selected) : void 0,
              d = e.props.preSelection ? s(e.props.preSelection) : void 0;
            t.push(
              O.createElement(
                Bg,
                oe({}, e.props, {
                  ariaLabelPrefix: e.props.weekAriaLabelPrefix,
                  key: i,
                  day: l,
                  month: Ve(e.props.day),
                  onDayClick: e.handleDayClick,
                  onDayMouseEnter: e.handleDayMouseEnter,
                  selected: c,
                  preSelection: d,
                  showWeekNumber: e.props.showWeekNumbers,
                })
              )
            ),
              !o;
          ) {
            (i++, (l = Hr(l, 1)));
            var f = a && i >= Ug,
              p = !a && !e.isWeekInMonth(l);
            if (f || p)
              if (e.props.peekNextMonth) o = !0;
              else break;
          }
          return t;
        }),
        (e.onMonthClick = function (t, a) {
          var i = e.isMonthDisabledForLabelDate(a),
            o = i.isDisabled,
            l = i.labelDate;
          o || e.handleDayClick(Tt(l), t);
        }),
        (e.onMonthMouseEnter = function (t) {
          var a = e.isMonthDisabledForLabelDate(t),
            i = a.isDisabled,
            o = a.labelDate;
          i || e.handleDayMouseEnter(Tt(o));
        }),
        (e.handleMonthNavigation = function (t, a) {
          var i, o, l, s;
          ((o = (i = e.props).setPreSelection) === null || o === void 0 || o.call(i, a),
            (s = (l = e.MONTH_REFS[t]) === null || l === void 0 ? void 0 : l.current) === null ||
              s === void 0 ||
              s.focus());
        }),
        (e.handleKeyboardNavigation = function (t, a, i) {
          var o,
            l = e.props,
            s = l.selected,
            u = l.preSelection,
            c = l.setPreSelection,
            d = l.minDate,
            f = l.maxDate,
            p = l.showFourColumnMonthYearPicker,
            v = l.showTwoColumnMonthYearPicker;
          if (u) {
            var m = Jo(p, v),
              h = e.getVerticalOffset(m),
              g = (o = Fa[m]) === null || o === void 0 ? void 0 : o.grid,
              w = function (k, T, _) {
                var I,
                  P,
                  E = T,
                  L = _;
                switch (k) {
                  case $.ArrowRight:
                    ((E = rt(T, mr)), (L = _ === 11 ? 0 : _ + mr));
                    break;
                  case $.ArrowLeft:
                    ((E = Bt(T, mr)), (L = _ === 0 ? 11 : _ - mr));
                    break;
                  case $.ArrowUp:
                    ((E = Bt(T, h)),
                      (L =
                        !((I = g == null ? void 0 : g[0]) === null || I === void 0) && I.includes(_)
                          ? _ + 12 - h
                          : _ - h));
                    break;
                  case $.ArrowDown:
                    ((E = rt(T, h)),
                      (L =
                        !((P = g == null ? void 0 : g[g.length - 1]) === null || P === void 0) && P.includes(_)
                          ? _ - 12 + h
                          : _ + h));
                    break;
                }
                return { newCalculatedDate: E, newCalculatedMonth: L };
              },
              D = function (k, T, _) {
                for (
                  var I = 40, P = k, E = !1, L = 0, B = w(P, T, _), N = B.newCalculatedDate, R = B.newCalculatedMonth;
                  !E;
                ) {
                  if (L >= I) {
                    ((N = T), (R = _));
                    break;
                  }
                  if (d && N < d) {
                    P = $.ArrowRight;
                    var Y = w(P, N, R);
                    ((N = Y.newCalculatedDate), (R = Y.newCalculatedMonth));
                  }
                  if (f && N > f) {
                    P = $.ArrowLeft;
                    var Y = w(P, N, R);
                    ((N = Y.newCalculatedDate), (R = Y.newCalculatedMonth));
                  }
                  if (Rg(N, e.props)) {
                    var Y = w(P, N, R);
                    ((N = Y.newCalculatedDate), (R = Y.newCalculatedMonth));
                  } else E = !0;
                  L++;
                }
                return { newCalculatedDate: N, newCalculatedMonth: R };
              };
            if (a === $.Enter) {
              e.isMonthDisabled(i) || (e.onMonthClick(t, i), c == null || c(s));
              return;
            }
            var x = D(a, u, i),
              b = x.newCalculatedDate,
              C = x.newCalculatedMonth;
            switch (a) {
              case $.ArrowRight:
              case $.ArrowLeft:
              case $.ArrowUp:
              case $.ArrowDown:
                e.handleMonthNavigation(C, b);
                break;
            }
          }
        }),
        (e.getVerticalOffset = function (t) {
          var a, i;
          return (i = (a = Fa[t]) === null || a === void 0 ? void 0 : a.verticalNavigationOffset) !== null &&
            i !== void 0
            ? i
            : 0;
        }),
        (e.onMonthKeyDown = function (t, a) {
          var i = e.props,
            o = i.disabledKeyboardNavigation,
            l = i.handleOnMonthKeyDown,
            s = t.key;
          (s !== $.Tab && t.preventDefault(), o || e.handleKeyboardNavigation(t, s, a), l && l(t));
        }),
        (e.onQuarterClick = function (t, a) {
          var i = sn(e.props.day, a);
          dr(i, e.props) || e.handleDayClick(Yo(i), t);
        }),
        (e.onQuarterMouseEnter = function (t) {
          var a = sn(e.props.day, t);
          dr(a, e.props) || e.handleDayMouseEnter(Yo(a));
        }),
        (e.handleQuarterNavigation = function (t, a) {
          var i, o, l, s;
          e.isDisabled(a) ||
            e.isExcluded(a) ||
            ((o = (i = e.props).setPreSelection) === null || o === void 0 || o.call(i, a),
            (s = (l = e.QUARTER_REFS[t - 1]) === null || l === void 0 ? void 0 : l.current) === null ||
              s === void 0 ||
              s.focus());
        }),
        (e.onQuarterKeyDown = function (t, a) {
          var i,
            o,
            l = t.key;
          if (!e.props.disabledKeyboardNavigation)
            switch (l) {
              case $.Enter:
                (e.onQuarterClick(t, a),
                  (o = (i = e.props).setPreSelection) === null || o === void 0 || o.call(i, e.props.selected));
                break;
              case $.ArrowRight:
                if (!e.props.preSelection) break;
                e.handleQuarterNavigation(a === 4 ? 1 : a + 1, ki(e.props.preSelection, 1));
                break;
              case $.ArrowLeft:
                if (!e.props.preSelection) break;
                e.handleQuarterNavigation(a === 1 ? 4 : a - 1, Yl(e.props.preSelection));
                break;
            }
        }),
        (e.isMonthDisabledForLabelDate = function (t) {
          var a,
            i = e.props,
            o = i.day,
            l = i.minDate,
            s = i.maxDate,
            u = i.excludeDates,
            c = i.includeDates,
            d = je(o, t);
          return {
            isDisabled: (a = (l || s || u || c) && Wl(d, e.props)) !== null && a !== void 0 ? a : !1,
            labelDate: d,
          };
        }),
        (e.isMonthDisabled = function (t) {
          var a = e.isMonthDisabledForLabelDate(t).isDisabled;
          return a;
        }),
        (e.getMonthClassNames = function (t) {
          var a = e.props,
            i = a.day,
            o = a.startDate,
            l = a.endDate,
            s = a.preSelection,
            u = a.monthClassName,
            c = u ? u(je(i, t)) : void 0,
            d = e.getSelection();
          return Ae('react-datepicker__month-text', 'react-datepicker__month-'.concat(t), c, {
            'react-datepicker__month-text--disabled': e.isMonthDisabled(t),
            'react-datepicker__month-text--selected': d ? e.isSelectMonthInList(i, t, d) : void 0,
            'react-datepicker__month-text--keyboard-selected':
              !e.props.disabledKeyboardNavigation && s && e.isSelectedMonth(i, t, s) && !e.isMonthDisabled(t),
            'react-datepicker__month-text--in-selecting-range': e.isInSelectingRangeMonth(t),
            'react-datepicker__month-text--in-range': o && l ? cr(o, l, t, i) : void 0,
            'react-datepicker__month-text--range-start': e.isRangeStartMonth(t),
            'react-datepicker__month-text--range-end': e.isRangeEndMonth(t),
            'react-datepicker__month-text--selecting-range-start': e.isSelectingMonthRangeStart(t),
            'react-datepicker__month-text--selecting-range-end': e.isSelectingMonthRangeEnd(t),
            'react-datepicker__month-text--today': e.isCurrentMonth(i, t),
          });
        }),
        (e.getTabIndex = function (t) {
          if (e.props.preSelection == null) return '-1';
          var a = Ve(e.props.preSelection),
            i = e.isMonthDisabledForLabelDate(a).isDisabled,
            o = t === a && !(i || e.props.disabledKeyboardNavigation) ? '0' : '-1';
          return o;
        }),
        (e.getQuarterTabIndex = function (t) {
          if (e.props.preSelection == null) return '-1';
          var a = jt(e.props.preSelection),
            i = dr(e.props.day, e.props),
            o = t === a && !(i || e.props.disabledKeyboardNavigation) ? '0' : '-1';
          return o;
        }),
        (e.getAriaLabel = function (t) {
          var a = e.props,
            i = a.chooseDayAriaLabelPrefix,
            o = i === void 0 ? 'Choose' : i,
            l = a.disabledDayAriaLabelPrefix,
            s = l === void 0 ? 'Not available' : l,
            u = a.day,
            c = a.locale,
            d = je(u, t),
            f = e.isDisabled(d) || e.isExcluded(d) ? s : o;
          return ''.concat(f, ' ').concat(be(d, 'MMMM yyyy', c));
        }),
        (e.getQuarterClassNames = function (t) {
          var a = e.props,
            i = a.day,
            o = a.startDate,
            l = a.endDate,
            s = a.selected,
            u = a.minDate,
            c = a.maxDate,
            d = a.excludeDates,
            f = a.includeDates,
            p = a.filterDate,
            v = a.preSelection,
            m = a.disabledKeyboardNavigation,
            h = (u || c || d || f || p) && dr(sn(i, t), e.props);
          return Ae('react-datepicker__quarter-text', 'react-datepicker__quarter-'.concat(t), {
            'react-datepicker__quarter-text--disabled': h,
            'react-datepicker__quarter-text--selected': s ? e.isSelectedQuarter(i, t, s) : void 0,
            'react-datepicker__quarter-text--keyboard-selected': !m && v && e.isSelectedQuarter(i, t, v) && !h,
            'react-datepicker__quarter-text--in-selecting-range': e.isInSelectingRangeQuarter(t),
            'react-datepicker__quarter-text--in-range': o && l ? pr(o, l, t, i) : void 0,
            'react-datepicker__quarter-text--range-start': e.isRangeStartQuarter(t),
            'react-datepicker__quarter-text--range-end': e.isRangeEndQuarter(t),
          });
        }),
        (e.getMonthContent = function (t) {
          var a = e.props,
            i = a.showFullMonthYearPicker,
            o = a.renderMonthContent,
            l = a.locale,
            s = a.day,
            u = Hl(t, l),
            c = _i(t, l);
          return o ? o(t, u, c, s) : i ? c : u;
        }),
        (e.getQuarterContent = function (t) {
          var a,
            i = e.props,
            o = i.renderQuarterContent,
            l = i.locale,
            s = Eg(t, l);
          return (a = o == null ? void 0 : o(t, s)) !== null && a !== void 0 ? a : s;
        }),
        (e.renderMonths = function () {
          var t,
            a = e.props,
            i = a.showTwoColumnMonthYearPicker,
            o = a.showFourColumnMonthYearPicker,
            l = a.day,
            s = a.selected,
            u = (t = Fa[Jo(o, i)]) === null || t === void 0 ? void 0 : t.grid;
          return u == null
            ? void 0
            : u.map(function (c, d) {
                return O.createElement(
                  'div',
                  { className: 'react-datepicker__month-wrapper', key: d },
                  c.map(function (f, p) {
                    return O.createElement(
                      'div',
                      {
                        ref: e.MONTH_REFS[f],
                        key: p,
                        onClick: function (v) {
                          e.onMonthClick(v, f);
                        },
                        onKeyDown: function (v) {
                          (Ul(v) && (v.preventDefault(), (v.key = $.Enter)), e.onMonthKeyDown(v, f));
                        },
                        onMouseEnter: e.props.usePointerEvent
                          ? void 0
                          : function () {
                              return e.onMonthMouseEnter(f);
                            },
                        onPointerEnter: e.props.usePointerEvent
                          ? function () {
                              return e.onMonthMouseEnter(f);
                            }
                          : void 0,
                        tabIndex: Number(e.getTabIndex(f)),
                        className: e.getMonthClassNames(f),
                        'aria-disabled': e.isMonthDisabled(f),
                        role: 'option',
                        'aria-label': e.getAriaLabel(f),
                        'aria-current': e.isCurrentMonth(l, f) ? 'date' : void 0,
                        'aria-selected': s ? e.isSelectedMonth(l, f, s) : void 0,
                      },
                      e.getMonthContent(f)
                    );
                  })
                );
              });
        }),
        (e.renderQuarters = function () {
          var t = e.props,
            a = t.day,
            i = t.selected,
            o = [1, 2, 3, 4];
          return O.createElement(
            'div',
            { className: 'react-datepicker__quarter-wrapper' },
            o.map(function (l, s) {
              return O.createElement(
                'div',
                {
                  key: s,
                  ref: e.QUARTER_REFS[s],
                  role: 'option',
                  onClick: function (u) {
                    e.onQuarterClick(u, l);
                  },
                  onKeyDown: function (u) {
                    e.onQuarterKeyDown(u, l);
                  },
                  onMouseEnter: e.props.usePointerEvent
                    ? void 0
                    : function () {
                        return e.onQuarterMouseEnter(l);
                      },
                  onPointerEnter: e.props.usePointerEvent
                    ? function () {
                        return e.onQuarterMouseEnter(l);
                      }
                    : void 0,
                  className: e.getQuarterClassNames(l),
                  'aria-selected': i ? e.isSelectedQuarter(a, l, i) : void 0,
                  tabIndex: Number(e.getQuarterTabIndex(l)),
                  'aria-current': e.isCurrentQuarter(a, l) ? 'date' : void 0,
                },
                e.getQuarterContent(l)
              );
            })
          );
        }),
        (e.getClassNames = function () {
          var t = e.props,
            a = t.selectingDate,
            i = t.selectsStart,
            o = t.selectsEnd,
            l = t.showMonthYearPicker,
            s = t.showQuarterYearPicker,
            u = t.showWeekPicker;
          return Ae(
            'react-datepicker__month',
            { 'react-datepicker__month--selecting-range': a && (i || o) },
            { 'react-datepicker__monthPicker': l },
            { 'react-datepicker__quarterPicker': s },
            { 'react-datepicker__weekPicker': u }
          );
        }),
        e
      );
    }
    return (
      (r.prototype.getSelection = function () {
        var e = this.props,
          t = e.selected,
          a = e.selectedDates,
          i = e.selectsMultiple;
        if (i) return a;
        if (t) return [t];
      }),
      (r.prototype.render = function () {
        var e = this.props,
          t = e.showMonthYearPicker,
          a = e.showQuarterYearPicker,
          i = e.day,
          o = e.ariaLabelPrefix,
          l = o === void 0 ? 'Month ' : o,
          s = l ? l.trim() + ' ' : '';
        return O.createElement(
          'div',
          {
            className: this.getClassNames(),
            onMouseLeave: this.props.usePointerEvent ? void 0 : this.handleMouseLeave,
            onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0,
            'aria-label': ''.concat(s).concat(be(i, 'MMMM, yyyy', this.props.locale)),
            role: 'listbox',
          },
          t ? this.renderMonths() : a ? this.renderQuarters() : this.renderWeeks()
        );
      }),
      r
    );
  })(y.Component),
  Qg = (function (n) {
    Re(r, n);
    function r() {
      var e = (n !== null && n.apply(this, arguments)) || this;
      return (
        (e.isSelectedMonth = function (t) {
          return e.props.month === t;
        }),
        (e.renderOptions = function () {
          return e.props.monthNames.map(function (t, a) {
            return O.createElement(
              'div',
              {
                className: e.isSelectedMonth(a)
                  ? 'react-datepicker__month-option react-datepicker__month-option--selected_month'
                  : 'react-datepicker__month-option',
                key: t,
                onClick: e.onChange.bind(e, a),
                'aria-selected': e.isSelectedMonth(a) ? 'true' : void 0,
              },
              e.isSelectedMonth(a)
                ? O.createElement('span', { className: 'react-datepicker__month-option--selected' }, '✓')
                : '',
              t
            );
          });
        }),
        (e.onChange = function (t) {
          return e.props.onChange(t);
        }),
        (e.handleClickOutside = function () {
          return e.props.onCancel();
        }),
        e
      );
    }
    return (
      (r.prototype.render = function () {
        return O.createElement(
          ha,
          { className: 'react-datepicker__month-dropdown', onClickOutside: this.handleClickOutside },
          this.renderOptions()
        );
      }),
      r
    );
  })(y.Component),
  Kg = (function (n) {
    Re(r, n);
    function r() {
      var e = (n !== null && n.apply(this, arguments)) || this;
      return (
        (e.state = { dropdownVisible: !1 }),
        (e.renderSelectOptions = function (t) {
          return t.map(function (a, i) {
            return O.createElement('option', { key: a, value: i }, a);
          });
        }),
        (e.renderSelectMode = function (t) {
          return O.createElement(
            'select',
            {
              value: e.props.month,
              className: 'react-datepicker__month-select',
              onChange: function (a) {
                return e.onChange(parseInt(a.target.value));
              },
            },
            e.renderSelectOptions(t)
          );
        }),
        (e.renderReadView = function (t, a) {
          return O.createElement(
            'div',
            {
              key: 'read',
              style: { visibility: t ? 'visible' : 'hidden' },
              className: 'react-datepicker__month-read-view',
              onClick: e.toggleDropdown,
            },
            O.createElement('span', { className: 'react-datepicker__month-read-view--down-arrow' }),
            O.createElement(
              'span',
              { className: 'react-datepicker__month-read-view--selected-month' },
              a[e.props.month]
            )
          );
        }),
        (e.renderDropdown = function (t) {
          return O.createElement(
            Qg,
            oe({ key: 'dropdown' }, e.props, { monthNames: t, onChange: e.onChange, onCancel: e.toggleDropdown })
          );
        }),
        (e.renderScrollMode = function (t) {
          var a = e.state.dropdownVisible,
            i = [e.renderReadView(!a, t)];
          return (a && i.unshift(e.renderDropdown(t)), i);
        }),
        (e.onChange = function (t) {
          (e.toggleDropdown(), t !== e.props.month && e.props.onChange(t));
        }),
        (e.toggleDropdown = function () {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      (r.prototype.render = function () {
        var e = this,
          t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
            this.props.useShortMonthInDropdown
              ? function (i) {
                  return Hl(i, e.props.locale);
                }
              : function (i) {
                  return _i(i, e.props.locale);
                }
          ),
          a;
        switch (this.props.dropdownMode) {
          case 'scroll':
            a = this.renderScrollMode(t);
            break;
          case 'select':
            a = this.renderSelectMode(t);
            break;
        }
        return O.createElement(
          'div',
          {
            className: 'react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--'.concat(
              this.props.dropdownMode
            ),
          },
          a
        );
      }),
      r
    );
  })(y.Component);
function Gg(n, r) {
  for (var e = [], t = Tt(n), a = Tt(r); !Nt(t, a); ) (e.push(he(t)), (t = rt(t, 1)));
  return e;
}
var Xg = (function (n) {
    Re(r, n);
    function r(e) {
      var t = n.call(this, e) || this;
      return (
        (t.renderOptions = function () {
          return t.state.monthYearsList.map(function (a) {
            var i = Ja(a),
              o = st(t.props.date, a) && Le(t.props.date, a);
            return O.createElement(
              'div',
              {
                className: o
                  ? 'react-datepicker__month-year-option--selected_month-year'
                  : 'react-datepicker__month-year-option',
                key: i,
                onClick: t.onChange.bind(t, i),
                'aria-selected': o ? 'true' : void 0,
              },
              o ? O.createElement('span', { className: 'react-datepicker__month-year-option--selected' }, '✓') : '',
              be(a, t.props.dateFormat, t.props.locale)
            );
          });
        }),
        (t.onChange = function (a) {
          return t.props.onChange(a);
        }),
        (t.handleClickOutside = function () {
          t.props.onCancel();
        }),
        (t.state = { monthYearsList: Gg(t.props.minDate, t.props.maxDate) }),
        t
      );
    }
    return (
      (r.prototype.render = function () {
        var e = Ae({
          'react-datepicker__month-year-dropdown': !0,
          'react-datepicker__month-year-dropdown--scrollable': this.props.scrollableMonthYearDropdown,
        });
        return O.createElement(ha, { className: e, onClickOutside: this.handleClickOutside }, this.renderOptions());
      }),
      r
    );
  })(y.Component),
  Zg = (function (n) {
    Re(r, n);
    function r() {
      var e = (n !== null && n.apply(this, arguments)) || this;
      return (
        (e.state = { dropdownVisible: !1 }),
        (e.renderSelectOptions = function () {
          for (var t = Tt(e.props.minDate), a = Tt(e.props.maxDate), i = []; !Nt(t, a); ) {
            var o = Ja(t);
            (i.push(O.createElement('option', { key: o, value: o }, be(t, e.props.dateFormat, e.props.locale))),
              (t = rt(t, 1)));
          }
          return i;
        }),
        (e.onSelectChange = function (t) {
          e.onChange(parseInt(t.target.value));
        }),
        (e.renderSelectMode = function () {
          return O.createElement(
            'select',
            {
              value: Ja(Tt(e.props.date)),
              className: 'react-datepicker__month-year-select',
              onChange: e.onSelectChange,
            },
            e.renderSelectOptions()
          );
        }),
        (e.renderReadView = function (t) {
          var a = be(e.props.date, e.props.dateFormat, e.props.locale);
          return O.createElement(
            'div',
            {
              key: 'read',
              style: { visibility: t ? 'visible' : 'hidden' },
              className: 'react-datepicker__month-year-read-view',
              onClick: e.toggleDropdown,
            },
            O.createElement('span', { className: 'react-datepicker__month-year-read-view--down-arrow' }),
            O.createElement('span', { className: 'react-datepicker__month-year-read-view--selected-month-year' }, a)
          );
        }),
        (e.renderDropdown = function () {
          return O.createElement(
            Xg,
            oe({ key: 'dropdown' }, e.props, { onChange: e.onChange, onCancel: e.toggleDropdown })
          );
        }),
        (e.renderScrollMode = function () {
          var t = e.state.dropdownVisible,
            a = [e.renderReadView(!t)];
          return (t && a.unshift(e.renderDropdown()), a);
        }),
        (e.onChange = function (t) {
          e.toggleDropdown();
          var a = he(t);
          (st(e.props.date, a) && Le(e.props.date, a)) || e.props.onChange(a);
        }),
        (e.toggleDropdown = function () {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      (r.prototype.render = function () {
        var e;
        switch (this.props.dropdownMode) {
          case 'scroll':
            e = this.renderScrollMode();
            break;
          case 'select':
            e = this.renderSelectMode();
            break;
        }
        return O.createElement(
          'div',
          {
            className:
              'react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--'.concat(
                this.props.dropdownMode
              ),
          },
          e
        );
      }),
      r
    );
  })(y.Component),
  Jg = (function (n) {
    Re(r, n);
    function r() {
      var e = (n !== null && n.apply(this, arguments)) || this;
      return (
        (e.state = { height: null }),
        (e.scrollToTheSelectedTime = function () {
          requestAnimationFrame(function () {
            var t, a, i;
            e.list &&
              (e.list.scrollTop =
                (i =
                  e.centerLi &&
                  r.calcCenterPosition(
                    e.props.monthRef
                      ? e.props.monthRef.clientHeight -
                          ((a = (t = e.header) === null || t === void 0 ? void 0 : t.clientHeight) !== null &&
                          a !== void 0
                            ? a
                            : 0)
                      : e.list.clientHeight,
                    e.centerLi
                  )) !== null && i !== void 0
                  ? i
                  : 0);
          });
        }),
        (e.handleClick = function (t) {
          var a, i;
          ((e.props.minTime || e.props.maxTime) && Wo(t, e.props)) ||
            ((e.props.excludeTimes || e.props.includeTimes || e.props.filterTime) && Ho(t, e.props)) ||
            (i = (a = e.props).onChange) === null ||
            i === void 0 ||
            i.call(a, t);
        }),
        (e.isSelectedTime = function (t) {
          return e.props.selected && $g(e.props.selected, t);
        }),
        (e.isDisabledTime = function (t) {
          return (
            ((e.props.minTime || e.props.maxTime) && Wo(t, e.props)) ||
            ((e.props.excludeTimes || e.props.includeTimes || e.props.filterTime) && Ho(t, e.props))
          );
        }),
        (e.liClasses = function (t) {
          var a,
            i = ['react-datepicker__time-list-item', e.props.timeClassName ? e.props.timeClassName(t) : void 0];
          return (
            e.isSelectedTime(t) && i.push('react-datepicker__time-list-item--selected'),
            e.isDisabledTime(t) && i.push('react-datepicker__time-list-item--disabled'),
            e.props.injectTimes &&
              (mt(t) * 3600 + ht(t) * 60 + Ct(t)) %
                (((a = e.props.intervals) !== null && a !== void 0 ? a : r.defaultProps.intervals) * 60) !==
                0 &&
              i.push('react-datepicker__time-list-item--injected'),
            i.join(' ')
          );
        }),
        (e.handleOnKeyDown = function (t, a) {
          var i, o;
          (t.key === $.Space && (t.preventDefault(), (t.key = $.Enter)),
            (t.key === $.ArrowUp || t.key === $.ArrowLeft) &&
              t.target instanceof HTMLElement &&
              t.target.previousSibling &&
              (t.preventDefault(), t.target.previousSibling instanceof HTMLElement && t.target.previousSibling.focus()),
            (t.key === $.ArrowDown || t.key === $.ArrowRight) &&
              t.target instanceof HTMLElement &&
              t.target.nextSibling &&
              (t.preventDefault(), t.target.nextSibling instanceof HTMLElement && t.target.nextSibling.focus()),
            t.key === $.Enter && e.handleClick(a),
            (o = (i = e.props).handleOnKeyDown) === null || o === void 0 || o.call(i, t));
        }),
        (e.renderTimes = function () {
          for (
            var t,
              a = [],
              i = typeof e.props.format == 'string' ? e.props.format : 'p',
              o = (t = e.props.intervals) !== null && t !== void 0 ? t : r.defaultProps.intervals,
              l = e.props.selected || e.props.openToDate || he(),
              s = Tr(l),
              u =
                e.props.injectTimes &&
                e.props.injectTimes.sort(function (h, g) {
                  return h.getTime() - g.getTime();
                }),
              c = 60 * qg(l),
              d = c / o,
              f = 0;
            f < d;
            f++
          ) {
            var p = Ga(s, f * o);
            if ((a.push(p), u)) {
              var v = Vg(s, p, f, o, u);
              a = a.concat(v);
            }
          }
          var m = a.reduce(function (h, g) {
            return g.getTime() <= l.getTime() ? g : h;
          }, a[0]);
          return a.map(function (h) {
            return O.createElement(
              'li',
              {
                key: h.valueOf(),
                onClick: e.handleClick.bind(e, h),
                className: e.liClasses(h),
                ref: function (g) {
                  h === m && (e.centerLi = g);
                },
                onKeyDown: function (g) {
                  e.handleOnKeyDown(g, h);
                },
                tabIndex: h === m ? 0 : -1,
                role: 'option',
                'aria-selected': e.isSelectedTime(h) ? 'true' : void 0,
                'aria-disabled': e.isDisabledTime(h) ? 'true' : void 0,
              },
              be(h, i, e.props.locale)
            );
          });
        }),
        (e.renderTimeCaption = function () {
          return e.props.showTimeCaption === !1
            ? O.createElement(O.Fragment, null)
            : O.createElement(
                'div',
                {
                  className: 'react-datepicker__header react-datepicker__header--time '.concat(
                    e.props.showTimeSelectOnly ? 'react-datepicker__header--time--only' : ''
                  ),
                  ref: function (t) {
                    e.header = t;
                  },
                },
                O.createElement('div', { className: 'react-datepicker-time__header' }, e.props.timeCaption)
              );
        }),
        e
      );
    }
    return (
      Object.defineProperty(r, 'defaultProps', {
        get: function () {
          return { intervals: 30, todayButton: null, timeCaption: 'Time', showTimeCaption: !0 };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (r.prototype.componentDidMount = function () {
        (this.scrollToTheSelectedTime(),
          this.props.monthRef &&
            this.header &&
            this.setState({ height: this.props.monthRef.clientHeight - this.header.clientHeight }));
      }),
      (r.prototype.render = function () {
        var e = this,
          t,
          a = this.state.height;
        return O.createElement(
          'div',
          {
            className: 'react-datepicker__time-container '.concat(
              ((t = this.props.todayButton) !== null && t !== void 0 ? t : r.defaultProps.todayButton)
                ? 'react-datepicker__time-container--with-today-button'
                : ''
            ),
          },
          this.renderTimeCaption(),
          O.createElement(
            'div',
            { className: 'react-datepicker__time' },
            O.createElement(
              'div',
              { className: 'react-datepicker__time-box' },
              O.createElement(
                'ul',
                {
                  className: 'react-datepicker__time-list',
                  ref: function (i) {
                    e.list = i;
                  },
                  style: a ? { height: a } : {},
                  role: 'listbox',
                  'aria-label': this.props.timeCaption,
                },
                this.renderTimes()
              )
            )
          )
        );
      }),
      (r.calcCenterPosition = function (e, t) {
        return t.offsetTop - (e / 2 - t.clientHeight / 2);
      }),
      r
    );
  })(y.Component),
  es = 3,
  ey = (function (n) {
    Re(r, n);
    function r(e) {
      var t = n.call(this, e) || this;
      return (
        (t.YEAR_REFS = ct([], Array(t.props.yearItemNumber), !0).map(function () {
          return y.createRef();
        })),
        (t.isDisabled = function (a) {
          return Ge(a, {
            minDate: t.props.minDate,
            maxDate: t.props.maxDate,
            excludeDates: t.props.excludeDates,
            includeDates: t.props.includeDates,
            filterDate: t.props.filterDate,
          });
        }),
        (t.isExcluded = function (a) {
          return Pi(a, { excludeDates: t.props.excludeDates });
        }),
        (t.selectingDate = function () {
          var a;
          return (a = t.props.selectingDate) !== null && a !== void 0 ? a : t.props.preSelection;
        }),
        (t.updateFocusOnPaginate = function (a) {
          var i = function () {
            var o, l;
            (l = (o = t.YEAR_REFS[a]) === null || o === void 0 ? void 0 : o.current) === null ||
              l === void 0 ||
              l.focus();
          };
          window.requestAnimationFrame(i);
        }),
        (t.handleYearClick = function (a, i) {
          t.props.onDayClick && t.props.onDayClick(a, i);
        }),
        (t.handleYearNavigation = function (a, i) {
          var o,
            l,
            s,
            u,
            c = t.props,
            d = c.date,
            f = c.yearItemNumber;
          if (!(d === void 0 || f === void 0)) {
            var p = Rt(d, f).startPeriod;
            t.isDisabled(i) ||
              t.isExcluded(i) ||
              ((l = (o = t.props).setPreSelection) === null || l === void 0 || l.call(o, i),
              a - p < 0
                ? t.updateFocusOnPaginate(f - (p - a))
                : a - p >= f
                  ? t.updateFocusOnPaginate(Math.abs(f - (a - p)))
                  : (u = (s = t.YEAR_REFS[a - p]) === null || s === void 0 ? void 0 : s.current) === null ||
                    u === void 0 ||
                    u.focus());
          }
        }),
        (t.isSameDay = function (a, i) {
          return ae(a, i);
        }),
        (t.isCurrentYear = function (a) {
          return a === ee(he());
        }),
        (t.isRangeStart = function (a) {
          return t.props.startDate && t.props.endDate && st(at(he(), a), t.props.startDate);
        }),
        (t.isRangeEnd = function (a) {
          return t.props.startDate && t.props.endDate && st(at(he(), a), t.props.endDate);
        }),
        (t.isInRange = function (a) {
          return fr(a, t.props.startDate, t.props.endDate);
        }),
        (t.isInSelectingRange = function (a) {
          var i = t.props,
            o = i.selectsStart,
            l = i.selectsEnd,
            s = i.selectsRange,
            u = i.startDate,
            c = i.endDate;
          return !(o || l || s) || !t.selectingDate()
            ? !1
            : o && c
              ? fr(a, t.selectingDate(), c)
              : (l && u) || (s && u && !c)
                ? fr(a, u, t.selectingDate())
                : !1;
        }),
        (t.isSelectingRangeStart = function (a) {
          var i;
          if (!t.isInSelectingRange(a)) return !1;
          var o = t.props,
            l = o.startDate,
            s = o.selectsStart,
            u = at(he(), a);
          return s ? st(u, (i = t.selectingDate()) !== null && i !== void 0 ? i : null) : st(u, l ?? null);
        }),
        (t.isSelectingRangeEnd = function (a) {
          var i;
          if (!t.isInSelectingRange(a)) return !1;
          var o = t.props,
            l = o.endDate,
            s = o.selectsEnd,
            u = o.selectsRange,
            c = at(he(), a);
          return s || u ? st(c, (i = t.selectingDate()) !== null && i !== void 0 ? i : null) : st(c, l ?? null);
        }),
        (t.isKeyboardSelected = function (a) {
          if (!(t.props.date === void 0 || t.props.selected == null || t.props.preSelection == null)) {
            var i = t.props,
              o = i.minDate,
              l = i.maxDate,
              s = i.excludeDates,
              u = i.includeDates,
              c = i.filterDate,
              d = An(at(t.props.date, a)),
              f = (o || l || s || u || c) && Or(a, t.props);
            return (
              !t.props.disabledKeyboardNavigation &&
              !t.props.inline &&
              !ae(d, An(t.props.selected)) &&
              ae(d, An(t.props.preSelection)) &&
              !f
            );
          }
        }),
        (t.onYearClick = function (a, i) {
          var o = t.props.date;
          o !== void 0 && t.handleYearClick(An(at(o, i)), a);
        }),
        (t.onYearKeyDown = function (a, i) {
          var o,
            l,
            s = a.key,
            u = t.props,
            c = u.date,
            d = u.yearItemNumber,
            f = u.handleOnKeyDown;
          if ((s !== $.Tab && a.preventDefault(), !t.props.disabledKeyboardNavigation))
            switch (s) {
              case $.Enter:
                if (t.props.selected == null) break;
                (t.onYearClick(a, i),
                  (l = (o = t.props).setPreSelection) === null || l === void 0 || l.call(o, t.props.selected));
                break;
              case $.ArrowRight:
                if (t.props.preSelection == null) break;
                t.handleYearNavigation(i + 1, kt(t.props.preSelection, 1));
                break;
              case $.ArrowLeft:
                if (t.props.preSelection == null) break;
                t.handleYearNavigation(i - 1, yn(t.props.preSelection, 1));
                break;
              case $.ArrowUp: {
                if (c === void 0 || d === void 0 || t.props.preSelection == null) break;
                var p = Rt(c, d).startPeriod,
                  v = es,
                  m = i - v;
                if (m < p) {
                  var h = d % v;
                  (i >= p && i < p + h ? (v = h) : (v += h), (m = i - v));
                }
                t.handleYearNavigation(m, yn(t.props.preSelection, v));
                break;
              }
              case $.ArrowDown: {
                if (c === void 0 || d === void 0 || t.props.preSelection == null) break;
                var g = Rt(c, d).endPeriod,
                  v = es,
                  m = i + v;
                if (m > g) {
                  var h = d % v;
                  (i <= g && i > g - h ? (v = h) : (v += h), (m = i + v));
                }
                t.handleYearNavigation(m, kt(t.props.preSelection, v));
                break;
              }
            }
          f && f(a);
        }),
        (t.getYearClassNames = function (a) {
          var i = t.props,
            o = i.date,
            l = i.minDate,
            s = i.maxDate,
            u = i.selected,
            c = i.excludeDates,
            d = i.includeDates,
            f = i.filterDate,
            p = i.yearClassName;
          return Ae(
            'react-datepicker__year-text',
            'react-datepicker__year-'.concat(a),
            o ? (p == null ? void 0 : p(at(o, a))) : void 0,
            {
              'react-datepicker__year-text--selected': u ? a === ee(u) : void 0,
              'react-datepicker__year-text--disabled': (l || s || c || d || f) && Or(a, t.props),
              'react-datepicker__year-text--keyboard-selected': t.isKeyboardSelected(a),
              'react-datepicker__year-text--range-start': t.isRangeStart(a),
              'react-datepicker__year-text--range-end': t.isRangeEnd(a),
              'react-datepicker__year-text--in-range': t.isInRange(a),
              'react-datepicker__year-text--in-selecting-range': t.isInSelectingRange(a),
              'react-datepicker__year-text--selecting-range-start': t.isSelectingRangeStart(a),
              'react-datepicker__year-text--selecting-range-end': t.isSelectingRangeEnd(a),
              'react-datepicker__year-text--today': t.isCurrentYear(a),
            }
          );
        }),
        (t.getYearTabIndex = function (a) {
          if (t.props.disabledKeyboardNavigation || t.props.preSelection == null) return '-1';
          var i = ee(t.props.preSelection),
            o = Or(a, t.props);
          return a === i && !o ? '0' : '-1';
        }),
        (t.getYearContent = function (a) {
          return t.props.renderYearContent ? t.props.renderYearContent(a) : a;
        }),
        t
      );
    }
    return (
      (r.prototype.render = function () {
        var e = this,
          t = [],
          a = this.props,
          i = a.date,
          o = a.yearItemNumber,
          l = a.onYearMouseEnter,
          s = a.onYearMouseLeave;
        if (i === void 0) return null;
        for (
          var u = Rt(i, o),
            c = u.startPeriod,
            d = u.endPeriod,
            f = function (m) {
              t.push(
                O.createElement(
                  'div',
                  {
                    ref: p.YEAR_REFS[m - c],
                    onClick: function (h) {
                      e.onYearClick(h, m);
                    },
                    onKeyDown: function (h) {
                      (Ul(h) && (h.preventDefault(), (h.key = $.Enter)), e.onYearKeyDown(h, m));
                    },
                    tabIndex: Number(p.getYearTabIndex(m)),
                    className: p.getYearClassNames(m),
                    onMouseEnter: p.props.usePointerEvent
                      ? void 0
                      : function (h) {
                          return l(h, m);
                        },
                    onPointerEnter: p.props.usePointerEvent
                      ? function (h) {
                          return l(h, m);
                        }
                      : void 0,
                    onMouseLeave: p.props.usePointerEvent
                      ? void 0
                      : function (h) {
                          return s(h, m);
                        },
                    onPointerLeave: p.props.usePointerEvent
                      ? function (h) {
                          return s(h, m);
                        }
                      : void 0,
                    key: m,
                    'aria-current': p.isCurrentYear(m) ? 'date' : void 0,
                  },
                  p.getYearContent(m)
                )
              );
            },
            p = this,
            v = c;
          v <= d;
          v++
        )
          f(v);
        return O.createElement(
          'div',
          { className: 'react-datepicker__year' },
          O.createElement(
            'div',
            {
              className: 'react-datepicker__year-wrapper',
              onMouseLeave: this.props.usePointerEvent ? void 0 : this.props.clearSelectingDate,
              onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0,
            },
            t
          )
        );
      }),
      r
    );
  })(y.Component);
function ty(n, r, e, t) {
  for (var a = [], i = 0; i < 2 * r + 1; i++) {
    var o = n + r - i,
      l = !0;
    (e && (l = ee(e) <= o), t && l && (l = ee(t) >= o), l && a.push(o));
  }
  return a;
}
var ny = (function (n) {
    Re(r, n);
    function r(e) {
      var t = n.call(this, e) || this;
      ((t.renderOptions = function () {
        var l = t.props.year,
          s = t.state.yearsList.map(function (d) {
            return O.createElement(
              'div',
              {
                className:
                  l === d
                    ? 'react-datepicker__year-option react-datepicker__year-option--selected_year'
                    : 'react-datepicker__year-option',
                key: d,
                onClick: t.onChange.bind(t, d),
                'aria-selected': l === d ? 'true' : void 0,
              },
              l === d ? O.createElement('span', { className: 'react-datepicker__year-option--selected' }, '✓') : '',
              d
            );
          }),
          u = t.props.minDate ? ee(t.props.minDate) : null,
          c = t.props.maxDate ? ee(t.props.maxDate) : null;
        return (
          (!c ||
            !t.state.yearsList.find(function (d) {
              return d === c;
            })) &&
            s.unshift(
              O.createElement(
                'div',
                { className: 'react-datepicker__year-option', key: 'upcoming', onClick: t.incrementYears },
                O.createElement('a', {
                  className:
                    'react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming',
                })
              )
            ),
          (!u ||
            !t.state.yearsList.find(function (d) {
              return d === u;
            })) &&
            s.push(
              O.createElement(
                'div',
                { className: 'react-datepicker__year-option', key: 'previous', onClick: t.decrementYears },
                O.createElement('a', {
                  className:
                    'react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous',
                })
              )
            ),
          s
        );
      }),
        (t.onChange = function (l) {
          t.props.onChange(l);
        }),
        (t.handleClickOutside = function () {
          t.props.onCancel();
        }),
        (t.shiftYears = function (l) {
          var s = t.state.yearsList.map(function (u) {
            return u + l;
          });
          t.setState({ yearsList: s });
        }),
        (t.incrementYears = function () {
          return t.shiftYears(1);
        }),
        (t.decrementYears = function () {
          return t.shiftYears(-1);
        }));
      var a = e.yearDropdownItemNumber,
        i = e.scrollableYearDropdown,
        o = a || (i ? 10 : 5);
      return (
        (t.state = { yearsList: ty(t.props.year, o, t.props.minDate, t.props.maxDate) }),
        (t.dropdownRef = y.createRef()),
        t
      );
    }
    return (
      (r.prototype.componentDidMount = function () {
        var e = this.dropdownRef.current;
        if (e) {
          var t = e.children ? Array.from(e.children) : null,
            a = t
              ? t.find(function (i) {
                  return i.ariaSelected;
                })
              : null;
          e.scrollTop =
            a && a instanceof HTMLElement
              ? a.offsetTop + (a.clientHeight - e.clientHeight) / 2
              : (e.scrollHeight - e.clientHeight) / 2;
        }
      }),
      (r.prototype.render = function () {
        var e = Ae({
          'react-datepicker__year-dropdown': !0,
          'react-datepicker__year-dropdown--scrollable': this.props.scrollableYearDropdown,
        });
        return O.createElement(
          ha,
          { className: e, containerRef: this.dropdownRef, onClickOutside: this.handleClickOutside },
          this.renderOptions()
        );
      }),
      r
    );
  })(y.Component),
  ry = (function (n) {
    Re(r, n);
    function r() {
      var e = (n !== null && n.apply(this, arguments)) || this;
      return (
        (e.state = { dropdownVisible: !1 }),
        (e.renderSelectOptions = function () {
          for (
            var t = e.props.minDate ? ee(e.props.minDate) : 1900,
              a = e.props.maxDate ? ee(e.props.maxDate) : 2100,
              i = [],
              o = t;
            o <= a;
            o++
          )
            i.push(O.createElement('option', { key: o, value: o }, o));
          return i;
        }),
        (e.onSelectChange = function (t) {
          e.onChange(parseInt(t.target.value));
        }),
        (e.renderSelectMode = function () {
          return O.createElement(
            'select',
            { value: e.props.year, className: 'react-datepicker__year-select', onChange: e.onSelectChange },
            e.renderSelectOptions()
          );
        }),
        (e.renderReadView = function (t) {
          return O.createElement(
            'div',
            {
              key: 'read',
              style: { visibility: t ? 'visible' : 'hidden' },
              className: 'react-datepicker__year-read-view',
              onClick: function (a) {
                return e.toggleDropdown(a);
              },
            },
            O.createElement('span', { className: 'react-datepicker__year-read-view--down-arrow' }),
            O.createElement('span', { className: 'react-datepicker__year-read-view--selected-year' }, e.props.year)
          );
        }),
        (e.renderDropdown = function () {
          return O.createElement(
            ny,
            oe({ key: 'dropdown' }, e.props, { onChange: e.onChange, onCancel: e.toggleDropdown })
          );
        }),
        (e.renderScrollMode = function () {
          var t = e.state.dropdownVisible,
            a = [e.renderReadView(!t)];
          return (t && a.unshift(e.renderDropdown()), a);
        }),
        (e.onChange = function (t) {
          (e.toggleDropdown(), t !== e.props.year && e.props.onChange(t));
        }),
        (e.toggleDropdown = function (t) {
          e.setState({ dropdownVisible: !e.state.dropdownVisible }, function () {
            e.props.adjustDateOnChange && e.handleYearChange(e.props.date, t);
          });
        }),
        (e.handleYearChange = function (t, a) {
          var i;
          ((i = e.onSelect) === null || i === void 0 || i.call(e, t, a), e.setOpen());
        }),
        (e.onSelect = function (t, a) {
          var i, o;
          (o = (i = e.props).onSelect) === null || o === void 0 || o.call(i, t, a);
        }),
        (e.setOpen = function () {
          var t, a;
          (a = (t = e.props).setOpen) === null || a === void 0 || a.call(t, !0);
        }),
        e
      );
    }
    return (
      (r.prototype.render = function () {
        var e;
        switch (this.props.dropdownMode) {
          case 'scroll':
            e = this.renderScrollMode();
            break;
          case 'select':
            e = this.renderSelectMode();
            break;
        }
        return O.createElement(
          'div',
          {
            className: 'react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--'.concat(
              this.props.dropdownMode
            ),
          },
          e
        );
      }),
      r
    );
  })(y.Component),
  ay = ['react-datepicker__year-select', 'react-datepicker__month-select', 'react-datepicker__month-year-select'],
  iy = function (n) {
    var r = (n.className || '').split(/\s+/);
    return ay.some(function (e) {
      return r.indexOf(e) >= 0;
    });
  },
  oy = (function (n) {
    Re(r, n);
    function r(e) {
      var t = n.call(this, e) || this;
      return (
        (t.monthContainer = void 0),
        (t.handleClickOutside = function (a) {
          t.props.onClickOutside(a);
        }),
        (t.setClickOutsideRef = function () {
          return t.containerRef.current;
        }),
        (t.handleDropdownFocus = function (a) {
          var i, o;
          iy(a.target) && ((o = (i = t.props).onDropdownFocus) === null || o === void 0 || o.call(i, a));
        }),
        (t.getDateInView = function () {
          var a = t.props,
            i = a.preSelection,
            o = a.selected,
            l = a.openToDate,
            s = jl(t.props),
            u = Bl(t.props),
            c = he(),
            d = l || o || i;
          return d || (s && Xt(c, s) ? s : u && Nt(c, u) ? u : c);
        }),
        (t.increaseMonth = function () {
          t.setState(
            function (a) {
              var i = a.date;
              return { date: rt(i, 1) };
            },
            function () {
              return t.handleMonthChange(t.state.date);
            }
          );
        }),
        (t.decreaseMonth = function () {
          t.setState(
            function (a) {
              var i = a.date;
              return { date: Bt(i, 1) };
            },
            function () {
              return t.handleMonthChange(t.state.date);
            }
          );
        }),
        (t.handleDayClick = function (a, i, o) {
          (t.props.onSelect(a, i, o), t.props.setPreSelection && t.props.setPreSelection(a));
        }),
        (t.handleDayMouseEnter = function (a) {
          (t.setState({ selectingDate: a }), t.props.onDayMouseEnter && t.props.onDayMouseEnter(a));
        }),
        (t.handleMonthMouseLeave = function () {
          (t.setState({ selectingDate: void 0 }), t.props.onMonthMouseLeave && t.props.onMonthMouseLeave());
        }),
        (t.handleYearMouseEnter = function (a, i) {
          (t.setState({ selectingDate: at(he(), i) }), t.props.onYearMouseEnter && t.props.onYearMouseEnter(a, i));
        }),
        (t.handleYearMouseLeave = function (a, i) {
          t.props.onYearMouseLeave && t.props.onYearMouseLeave(a, i);
        }),
        (t.handleYearChange = function (a) {
          var i, o, l, s;
          ((o = (i = t.props).onYearChange) === null || o === void 0 || o.call(i, a),
            t.setState({ isRenderAriaLiveMessage: !0 }),
            t.props.adjustDateOnChange &&
              (t.props.onSelect(a), (s = (l = t.props).setOpen) === null || s === void 0 || s.call(l, !0)),
            t.props.setPreSelection && t.props.setPreSelection(a));
        }),
        (t.getEnabledPreSelectionDateForMonth = function (a) {
          if (!Ge(a, t.props)) return a;
          for (var i = Tt(a), o = Og(a), l = Fm(o, i), s = null, u = 0; u <= l; u++) {
            var c = nt(i, u);
            if (!Ge(c, t.props)) {
              s = c;
              break;
            }
          }
          return s;
        }),
        (t.handleMonthChange = function (a) {
          var i,
            o,
            l,
            s = (i = t.getEnabledPreSelectionDateForMonth(a)) !== null && i !== void 0 ? i : a;
          (t.handleCustomMonthChange(s),
            t.props.adjustDateOnChange &&
              (t.props.onSelect(s), (l = (o = t.props).setOpen) === null || l === void 0 || l.call(o, !0)),
            t.props.setPreSelection && t.props.setPreSelection(s));
        }),
        (t.handleCustomMonthChange = function (a) {
          var i, o;
          ((o = (i = t.props).onMonthChange) === null || o === void 0 || o.call(i, a),
            t.setState({ isRenderAriaLiveMessage: !0 }));
        }),
        (t.handleMonthYearChange = function (a) {
          (t.handleYearChange(a), t.handleMonthChange(a));
        }),
        (t.changeYear = function (a) {
          t.setState(
            function (i) {
              var o = i.date;
              return { date: at(o, Number(a)) };
            },
            function () {
              return t.handleYearChange(t.state.date);
            }
          );
        }),
        (t.changeMonth = function (a) {
          t.setState(
            function (i) {
              var o = i.date;
              return { date: je(o, Number(a)) };
            },
            function () {
              return t.handleMonthChange(t.state.date);
            }
          );
        }),
        (t.changeMonthYear = function (a) {
          t.setState(
            function (i) {
              var o = i.date;
              return { date: at(je(o, Ve(a)), ee(a)) };
            },
            function () {
              return t.handleMonthYearChange(t.state.date);
            }
          );
        }),
        (t.header = function (a) {
          a === void 0 && (a = t.state.date);
          var i = It(a, t.props.locale, t.props.calendarStartDay),
            o = [];
          return (
            t.props.showWeekNumbers &&
              o.push(
                O.createElement('div', { key: 'W', className: 'react-datepicker__day-name' }, t.props.weekLabel || '#')
              ),
            o.concat(
              [0, 1, 2, 3, 4, 5, 6].map(function (l) {
                var s = nt(i, l),
                  u = t.formatWeekday(s, t.props.locale),
                  c = t.props.weekDayClassName ? t.props.weekDayClassName(s) : void 0;
                return O.createElement(
                  'div',
                  {
                    key: l,
                    'aria-label': be(s, 'EEEE', t.props.locale),
                    className: Ae('react-datepicker__day-name', c),
                  },
                  u
                );
              })
            )
          );
        }),
        (t.formatWeekday = function (a, i) {
          return t.props.formatWeekDay
            ? _g(a, t.props.formatWeekDay, i)
            : t.props.useWeekdaysShort
              ? Mg(a, i)
              : Pg(a, i);
        }),
        (t.decreaseYear = function () {
          t.setState(
            function (a) {
              var i,
                o = a.date;
              return {
                date: yn(
                  o,
                  t.props.showYearPicker
                    ? (i = t.props.yearItemNumber) !== null && i !== void 0
                      ? i
                      : r.defaultProps.yearItemNumber
                    : 1
                ),
              };
            },
            function () {
              return t.handleYearChange(t.state.date);
            }
          );
        }),
        (t.clearSelectingDate = function () {
          t.setState({ selectingDate: void 0 });
        }),
        (t.renderPreviousButton = function () {
          var a, i, o;
          if (!t.props.renderCustomHeader) {
            var l = (a = t.props.monthsShown) !== null && a !== void 0 ? a : r.defaultProps.monthsShown,
              s = t.props.showPreviousMonths ? l - 1 : 0,
              u = (i = t.props.monthSelectedIn) !== null && i !== void 0 ? i : s,
              c = Bt(t.state.date, u),
              d;
            switch (!0) {
              case t.props.showMonthYearPicker:
                d = Uo(t.state.date, t.props);
                break;
              case t.props.showYearPicker:
                d = Fg(t.state.date, t.props);
                break;
              case t.props.showQuarterYearPicker:
                d = Ig(t.state.date, t.props);
                break;
              default:
                d = jo(c, t.props);
                break;
            }
            if (
              !(
                (!((o = t.props.forceShowMonthNavigation) !== null && o !== void 0
                  ? o
                  : r.defaultProps.forceShowMonthNavigation) &&
                  !t.props.showDisabledMonthNavigation &&
                  d) ||
                t.props.showTimeSelectOnly
              )
            ) {
              var f = ['react-datepicker__navigation-icon', 'react-datepicker__navigation-icon--previous'],
                p = ['react-datepicker__navigation', 'react-datepicker__navigation--previous'],
                v = t.decreaseMonth;
              ((t.props.showMonthYearPicker || t.props.showQuarterYearPicker || t.props.showYearPicker) &&
                (v = t.decreaseYear),
                d &&
                  t.props.showDisabledMonthNavigation &&
                  (p.push('react-datepicker__navigation--previous--disabled'), (v = void 0)));
              var m = t.props.showMonthYearPicker || t.props.showQuarterYearPicker || t.props.showYearPicker,
                h = t.props,
                g = h.previousMonthButtonLabel,
                w = g === void 0 ? r.defaultProps.previousMonthButtonLabel : g,
                D = h.previousYearButtonLabel,
                x = D === void 0 ? r.defaultProps.previousYearButtonLabel : D,
                b = t.props,
                C = b.previousMonthAriaLabel,
                k = C === void 0 ? (typeof w == 'string' ? w : 'Previous Month') : C,
                T = b.previousYearAriaLabel,
                _ = T === void 0 ? (typeof x == 'string' ? x : 'Previous Year') : T;
              return O.createElement(
                'button',
                {
                  type: 'button',
                  className: p.join(' '),
                  onClick: v,
                  onKeyDown: t.props.handleOnKeyDown,
                  'aria-label': m ? _ : k,
                },
                O.createElement('span', { className: f.join(' ') }, m ? x : w)
              );
            }
          }
        }),
        (t.increaseYear = function () {
          t.setState(
            function (a) {
              var i,
                o = a.date;
              return {
                date: kt(
                  o,
                  t.props.showYearPicker
                    ? (i = t.props.yearItemNumber) !== null && i !== void 0
                      ? i
                      : r.defaultProps.yearItemNumber
                    : 1
                ),
              };
            },
            function () {
              return t.handleYearChange(t.state.date);
            }
          );
        }),
        (t.renderNextButton = function () {
          var a;
          if (!t.props.renderCustomHeader) {
            var i;
            switch (!0) {
              case t.props.showMonthYearPicker:
                i = zo(t.state.date, t.props);
                break;
              case t.props.showYearPicker:
                i = Ng(t.state.date, t.props);
                break;
              case t.props.showQuarterYearPicker:
                i = Ag(t.state.date, t.props);
                break;
              default:
                i = Bo(t.state.date, t.props);
                break;
            }
            if (
              !(
                (!((a = t.props.forceShowMonthNavigation) !== null && a !== void 0
                  ? a
                  : r.defaultProps.forceShowMonthNavigation) &&
                  !t.props.showDisabledMonthNavigation &&
                  i) ||
                t.props.showTimeSelectOnly
              )
            ) {
              var o = ['react-datepicker__navigation', 'react-datepicker__navigation--next'],
                l = ['react-datepicker__navigation-icon', 'react-datepicker__navigation-icon--next'];
              (t.props.showTimeSelect && o.push('react-datepicker__navigation--next--with-time'),
                t.props.todayButton && o.push('react-datepicker__navigation--next--with-today-button'));
              var s = t.increaseMonth;
              ((t.props.showMonthYearPicker || t.props.showQuarterYearPicker || t.props.showYearPicker) &&
                (s = t.increaseYear),
                i &&
                  t.props.showDisabledMonthNavigation &&
                  (o.push('react-datepicker__navigation--next--disabled'), (s = void 0)));
              var u = t.props.showMonthYearPicker || t.props.showQuarterYearPicker || t.props.showYearPicker,
                c = t.props,
                d = c.nextMonthButtonLabel,
                f = d === void 0 ? r.defaultProps.nextMonthButtonLabel : d,
                p = c.nextYearButtonLabel,
                v = p === void 0 ? r.defaultProps.nextYearButtonLabel : p,
                m = t.props,
                h = m.nextMonthAriaLabel,
                g = h === void 0 ? (typeof f == 'string' ? f : 'Next Month') : h,
                w = m.nextYearAriaLabel,
                D = w === void 0 ? (typeof v == 'string' ? v : 'Next Year') : w;
              return O.createElement(
                'button',
                {
                  type: 'button',
                  className: o.join(' '),
                  onClick: s,
                  onKeyDown: t.props.handleOnKeyDown,
                  'aria-label': u ? D : g,
                },
                O.createElement('span', { className: l.join(' ') }, u ? v : f)
              );
            }
          }
        }),
        (t.renderCurrentMonth = function (a) {
          a === void 0 && (a = t.state.date);
          var i = ['react-datepicker__current-month'];
          return (
            t.props.showYearDropdown && i.push('react-datepicker__current-month--hasYearDropdown'),
            t.props.showMonthDropdown && i.push('react-datepicker__current-month--hasMonthDropdown'),
            t.props.showMonthYearDropdown && i.push('react-datepicker__current-month--hasMonthYearDropdown'),
            O.createElement('h2', { className: i.join(' ') }, be(a, t.props.dateFormat, t.props.locale))
          );
        }),
        (t.renderYearDropdown = function (a) {
          if ((a === void 0 && (a = !1), !(!t.props.showYearDropdown || a)))
            return O.createElement(
              ry,
              oe({}, r.defaultProps, t.props, { date: t.state.date, onChange: t.changeYear, year: ee(t.state.date) })
            );
        }),
        (t.renderMonthDropdown = function (a) {
          if ((a === void 0 && (a = !1), !(!t.props.showMonthDropdown || a)))
            return O.createElement(
              Kg,
              oe({}, r.defaultProps, t.props, { month: Ve(t.state.date), onChange: t.changeMonth })
            );
        }),
        (t.renderMonthYearDropdown = function (a) {
          if ((a === void 0 && (a = !1), !(!t.props.showMonthYearDropdown || a)))
            return O.createElement(
              Zg,
              oe({}, r.defaultProps, t.props, { date: t.state.date, onChange: t.changeMonthYear })
            );
        }),
        (t.handleTodayButtonClick = function (a) {
          (t.props.onSelect(Vo(), a), t.props.setPreSelection && t.props.setPreSelection(Vo()));
        }),
        (t.renderTodayButton = function () {
          if (!(!t.props.todayButton || t.props.showTimeSelectOnly))
            return O.createElement(
              'div',
              { className: 'react-datepicker__today-button', onClick: t.handleTodayButtonClick },
              t.props.todayButton
            );
        }),
        (t.renderDefaultHeader = function (a) {
          var i = a.monthDate,
            o = a.i;
          return O.createElement(
            'div',
            {
              className: 'react-datepicker__header '.concat(
                t.props.showTimeSelect ? 'react-datepicker__header--has-time-select' : ''
              ),
            },
            t.renderCurrentMonth(i),
            O.createElement(
              'div',
              {
                className: 'react-datepicker__header__dropdown react-datepicker__header__dropdown--'.concat(
                  t.props.dropdownMode
                ),
                onFocus: t.handleDropdownFocus,
              },
              t.renderMonthDropdown(o !== 0),
              t.renderMonthYearDropdown(o !== 0),
              t.renderYearDropdown(o !== 0)
            ),
            O.createElement('div', { className: 'react-datepicker__day-names' }, t.header(i))
          );
        }),
        (t.renderCustomHeader = function (a) {
          var i,
            o,
            l = a.monthDate,
            s = a.i;
          if ((t.props.showTimeSelect && !t.state.monthContainer) || t.props.showTimeSelectOnly) return null;
          var u = jo(t.state.date, t.props),
            c = Bo(t.state.date, t.props),
            d = Uo(t.state.date, t.props),
            f = zo(t.state.date, t.props),
            p = !t.props.showMonthYearPicker && !t.props.showQuarterYearPicker && !t.props.showYearPicker;
          return O.createElement(
            'div',
            {
              className: 'react-datepicker__header react-datepicker__header--custom',
              onFocus: t.props.onDropdownFocus,
            },
            (o = (i = t.props).renderCustomHeader) === null || o === void 0
              ? void 0
              : o.call(
                  i,
                  oe(oe({}, t.state), {
                    customHeaderCount: s,
                    monthDate: l,
                    changeMonth: t.changeMonth,
                    changeYear: t.changeYear,
                    decreaseMonth: t.decreaseMonth,
                    increaseMonth: t.increaseMonth,
                    decreaseYear: t.decreaseYear,
                    increaseYear: t.increaseYear,
                    prevMonthButtonDisabled: u,
                    nextMonthButtonDisabled: c,
                    prevYearButtonDisabled: d,
                    nextYearButtonDisabled: f,
                  })
                ),
            p && O.createElement('div', { className: 'react-datepicker__day-names' }, t.header(l))
          );
        }),
        (t.renderYearHeader = function (a) {
          var i = a.monthDate,
            o = t.props,
            l = o.showYearPicker,
            s = o.yearItemNumber,
            u = s === void 0 ? r.defaultProps.yearItemNumber : s,
            c = Rt(i, u),
            d = c.startPeriod,
            f = c.endPeriod;
          return O.createElement(
            'div',
            { className: 'react-datepicker__header react-datepicker-year-header' },
            l ? ''.concat(d, ' - ').concat(f) : ee(i)
          );
        }),
        (t.renderHeader = function (a) {
          var i = a.monthDate,
            o = a.i,
            l = o === void 0 ? 0 : o,
            s = { monthDate: i, i: l };
          switch (!0) {
            case t.props.renderCustomHeader !== void 0:
              return t.renderCustomHeader(s);
            case t.props.showMonthYearPicker || t.props.showQuarterYearPicker || t.props.showYearPicker:
              return t.renderYearHeader(s);
            default:
              return t.renderDefaultHeader(s);
          }
        }),
        (t.renderMonths = function () {
          var a, i;
          if (!(t.props.showTimeSelectOnly || t.props.showYearPicker)) {
            for (
              var o = [],
                l = (a = t.props.monthsShown) !== null && a !== void 0 ? a : r.defaultProps.monthsShown,
                s = t.props.showPreviousMonths ? l - 1 : 0,
                u =
                  t.props.showMonthYearPicker || t.props.showQuarterYearPicker
                    ? kt(t.state.date, s)
                    : Bt(t.state.date, s),
                c = (i = t.props.monthSelectedIn) !== null && i !== void 0 ? i : s,
                d = 0;
              d < l;
              ++d
            ) {
              var f = d - c + s,
                p = t.props.showMonthYearPicker || t.props.showQuarterYearPicker ? kt(u, f) : rt(u, f),
                v = 'month-'.concat(d),
                m = d < l - 1,
                h = d > 0;
              o.push(
                O.createElement(
                  'div',
                  {
                    key: v,
                    ref: function (g) {
                      t.monthContainer = g ?? void 0;
                    },
                    className: 'react-datepicker__month-container',
                  },
                  t.renderHeader({ monthDate: p, i: d }),
                  O.createElement(
                    zg,
                    oe({}, r.defaultProps, t.props, {
                      ariaLabelPrefix: t.props.monthAriaLabelPrefix,
                      day: p,
                      onDayClick: t.handleDayClick,
                      handleOnKeyDown: t.props.handleOnDayKeyDown,
                      handleOnMonthKeyDown: t.props.handleOnKeyDown,
                      onDayMouseEnter: t.handleDayMouseEnter,
                      onMouseLeave: t.handleMonthMouseLeave,
                      orderInDisplay: d,
                      selectingDate: t.state.selectingDate,
                      monthShowsDuplicateDaysEnd: m,
                      monthShowsDuplicateDaysStart: h,
                    })
                  )
                )
              );
            }
            return o;
          }
        }),
        (t.renderYears = function () {
          if (!t.props.showTimeSelectOnly && t.props.showYearPicker)
            return O.createElement(
              'div',
              { className: 'react-datepicker__year--container' },
              t.renderHeader({ monthDate: t.state.date }),
              O.createElement(
                ey,
                oe({}, r.defaultProps, t.props, {
                  selectingDate: t.state.selectingDate,
                  date: t.state.date,
                  onDayClick: t.handleDayClick,
                  clearSelectingDate: t.clearSelectingDate,
                  onYearMouseEnter: t.handleYearMouseEnter,
                  onYearMouseLeave: t.handleYearMouseLeave,
                })
              )
            );
        }),
        (t.renderTimeSection = function () {
          if (t.props.showTimeSelect && (t.state.monthContainer || t.props.showTimeSelectOnly))
            return O.createElement(
              Jg,
              oe({}, r.defaultProps, t.props, {
                onChange: t.props.onTimeChange,
                format: t.props.timeFormat,
                intervals: t.props.timeIntervals,
                monthRef: t.state.monthContainer,
              })
            );
        }),
        (t.renderInputTimeSection = function () {
          var a = t.props.selected ? new Date(t.props.selected) : void 0,
            i = a && Dt(a) && !!t.props.selected,
            o = i ? ''.concat(Ko(a.getHours()), ':').concat(Ko(a.getMinutes())) : '';
          if (t.props.showTimeInput)
            return O.createElement(
              Hg,
              oe({}, r.defaultProps, t.props, { date: a, timeString: o, onChange: t.props.onTimeChange })
            );
        }),
        (t.renderAriaLiveRegion = function () {
          var a,
            i = Rt(
              t.state.date,
              (a = t.props.yearItemNumber) !== null && a !== void 0 ? a : r.defaultProps.yearItemNumber
            ),
            o = i.startPeriod,
            l = i.endPeriod,
            s;
          return (
            t.props.showYearPicker
              ? (s = ''.concat(o, ' - ').concat(l))
              : t.props.showMonthYearPicker || t.props.showQuarterYearPicker
                ? (s = ee(t.state.date))
                : (s = ''.concat(_i(Ve(t.state.date), t.props.locale), ' ').concat(ee(t.state.date))),
            O.createElement(
              'span',
              { role: 'alert', 'aria-live': 'polite', className: 'react-datepicker__aria-live' },
              t.state.isRenderAriaLiveMessage && s
            )
          );
        }),
        (t.renderChildren = function () {
          if (t.props.children)
            return O.createElement('div', { className: 'react-datepicker__children-container' }, t.props.children);
        }),
        (t.containerRef = y.createRef()),
        (t.state = {
          date: t.getDateInView(),
          selectingDate: void 0,
          monthContainer: void 0,
          isRenderAriaLiveMessage: !1,
        }),
        t
      );
    }
    return (
      Object.defineProperty(r, 'defaultProps', {
        get: function () {
          return {
            monthsShown: 1,
            forceShowMonthNavigation: !1,
            timeCaption: 'Time',
            previousYearButtonLabel: 'Previous Year',
            nextYearButtonLabel: 'Next Year',
            previousMonthButtonLabel: 'Previous Month',
            nextMonthButtonLabel: 'Next Month',
            yearItemNumber: Zn,
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (r.prototype.componentDidMount = function () {
        var e = this;
        this.props.showTimeSelect &&
          (this.assignMonthContainer = (function () {
            e.setState({ monthContainer: e.monthContainer });
          })());
      }),
      (r.prototype.componentDidUpdate = function (e) {
        var t = this;
        if (
          this.props.preSelection &&
          (!ae(this.props.preSelection, e.preSelection) || this.props.monthSelectedIn !== e.monthSelectedIn)
        ) {
          var a = !Le(this.state.date, this.props.preSelection);
          this.setState({ date: this.props.preSelection }, function () {
            return a && t.handleCustomMonthChange(t.state.date);
          });
        } else
          this.props.openToDate &&
            !ae(this.props.openToDate, e.openToDate) &&
            this.setState({ date: this.props.openToDate });
      }),
      (r.prototype.render = function () {
        var e = this.props.container || bg;
        return O.createElement(
          ha,
          {
            onClickOutside: this.handleClickOutside,
            style: { display: 'contents' },
            containerRef: this.containerRef,
            ignoreClass: this.props.outsideClickIgnoreClass,
          },
          O.createElement(
            e,
            {
              className: Ae('react-datepicker', this.props.className, {
                'react-datepicker--time-only': this.props.showTimeSelectOnly,
              }),
              showTime: this.props.showTimeSelect || this.props.showTimeInput,
              showTimeSelectOnly: this.props.showTimeSelectOnly,
            },
            this.renderAriaLiveRegion(),
            this.renderPreviousButton(),
            this.renderNextButton(),
            this.renderMonths(),
            this.renderYears(),
            this.renderTodayButton(),
            this.renderTimeSection(),
            this.renderInputTimeSection(),
            this.renderChildren()
          )
        );
      }),
      r
    );
  })(y.Component),
  sy = function (n) {
    var r = n.icon,
      e = n.className,
      t = e === void 0 ? '' : e,
      a = n.onClick,
      i = 'react-datepicker__calendar-icon';
    return typeof r == 'string'
      ? O.createElement('i', {
          className: ''.concat(i, ' ').concat(r, ' ').concat(t),
          'aria-hidden': 'true',
          onClick: a,
        })
      : O.isValidElement(r)
        ? O.cloneElement(r, {
            className: ''
              .concat(r.props.className || '', ' ')
              .concat(i, ' ')
              .concat(t),
            onClick: function (o) {
              (typeof r.props.onClick == 'function' && r.props.onClick(o), typeof a == 'function' && a(o));
            },
          })
        : O.createElement(
            'svg',
            {
              className: ''.concat(i, ' ').concat(t),
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 448 512',
              onClick: a,
            },
            O.createElement('path', {
              d: 'M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z',
            })
          );
  },
  zl = (function (n) {
    Re(r, n);
    function r(e) {
      var t = n.call(this, e) || this;
      return ((t.portalRoot = null), (t.el = document.createElement('div')), t);
    }
    return (
      (r.prototype.componentDidMount = function () {
        ((this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId)),
          this.portalRoot ||
            ((this.portalRoot = document.createElement('div')),
            this.portalRoot.setAttribute('id', this.props.portalId),
            (this.props.portalHost || document.body).appendChild(this.portalRoot)),
          this.portalRoot.appendChild(this.el));
      }),
      (r.prototype.componentWillUnmount = function () {
        this.portalRoot && this.portalRoot.removeChild(this.el);
      }),
      (r.prototype.render = function () {
        return Fu.createPortal(this.props.children, this.el);
      }),
      r
    );
  })(y.Component),
  ly = '[tabindex], a, button, input, select, textarea',
  uy = function (n) {
    return (n instanceof HTMLAnchorElement || !n.disabled) && n.tabIndex !== -1;
  },
  Ql = (function (n) {
    Re(r, n);
    function r(e) {
      var t = n.call(this, e) || this;
      return (
        (t.getTabChildren = function () {
          var a;
          return Array.prototype.slice
            .call((a = t.tabLoopRef.current) === null || a === void 0 ? void 0 : a.querySelectorAll(ly), 1, -1)
            .filter(uy);
        }),
        (t.handleFocusStart = function () {
          var a = t.getTabChildren();
          a && a.length > 1 && a[a.length - 1].focus();
        }),
        (t.handleFocusEnd = function () {
          var a = t.getTabChildren();
          a && a.length > 1 && a[0].focus();
        }),
        (t.tabLoopRef = y.createRef()),
        t
      );
    }
    return (
      (r.prototype.render = function () {
        var e;
        return ((e = this.props.enableTabLoop) !== null && e !== void 0 ? e : r.defaultProps.enableTabLoop)
          ? O.createElement(
              'div',
              { className: 'react-datepicker__tab-loop', ref: this.tabLoopRef },
              O.createElement('div', {
                className: 'react-datepicker__tab-loop__start',
                tabIndex: 0,
                onFocus: this.handleFocusStart,
              }),
              this.props.children,
              O.createElement('div', {
                className: 'react-datepicker__tab-loop__end',
                tabIndex: 0,
                onFocus: this.handleFocusEnd,
              })
            )
          : this.props.children;
      }),
      (r.defaultProps = { enableTabLoop: !0 }),
      r
    );
  })(y.Component);
function cy(n) {
  var r = function (e) {
    var t,
      a = typeof e.hidePopper == 'boolean' ? e.hidePopper : !0,
      i = y.useRef(null),
      o = yg(
        oe(
          {
            open: !a,
            whileElementsMounted: Gs,
            placement: e.popperPlacement,
            middleware: ct(
              [ig({ padding: 15 }), ag(10), og({ element: i })],
              (t = e.popperModifiers) !== null && t !== void 0 ? t : [],
              !0
            ),
          },
          e.popperProps
        )
      ),
      l = oe(oe({}, e), { hidePopper: a, popperProps: oe(oe({}, o), { arrowRef: i }) });
    return O.createElement(n, oe({}, l));
  };
  return r;
}
var dy = (function (n) {
    Re(r, n);
    function r() {
      return (n !== null && n.apply(this, arguments)) || this;
    }
    return (
      Object.defineProperty(r, 'defaultProps', {
        get: function () {
          return { hidePopper: !0 };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (r.prototype.render = function () {
        var e = this.props,
          t = e.className,
          a = e.wrapperClassName,
          i = e.hidePopper,
          o = i === void 0 ? r.defaultProps.hidePopper : i,
          l = e.popperComponent,
          s = e.targetComponent,
          u = e.enableTabLoop,
          c = e.popperOnKeyDown,
          d = e.portalId,
          f = e.portalHost,
          p = e.popperProps,
          v = e.showArrow,
          m = void 0;
        if (!o) {
          var h = Ae('react-datepicker-popper', t);
          m = O.createElement(
            Ql,
            { enableTabLoop: u },
            O.createElement(
              'div',
              {
                ref: p.refs.setFloating,
                style: p.floatingStyles,
                className: h,
                'data-placement': p.placement,
                onKeyDown: c,
              },
              l,
              v &&
                O.createElement(dg, {
                  ref: p.arrowRef,
                  context: p.context,
                  fill: 'currentColor',
                  strokeWidth: 1,
                  height: 8,
                  width: 16,
                  style: { transform: 'translateY(-1px)' },
                  className: 'react-datepicker__triangle',
                })
            )
          );
        }
        (this.props.popperContainer && (m = y.createElement(this.props.popperContainer, {}, m)),
          d && !o && (m = O.createElement(zl, { portalId: d, portalHost: f }, m)));
        var g = Ae('react-datepicker-wrapper', a);
        return O.createElement(
          O.Fragment,
          null,
          O.createElement('div', { ref: p.refs.setReference, className: g }, s),
          m
        );
      }),
      r
    );
  })(y.Component),
  fy = cy(dy),
  ts = 'react-datepicker-ignore-onclickoutside';
function py(n, r) {
  return n && r ? Ve(n) !== Ve(r) || ee(n) !== ee(r) : n !== r;
}
var Na = 'Date input not valid.',
  my = (function (n) {
    Re(r, n);
    function r(e) {
      var t = n.call(this, e) || this;
      return (
        (t.calendar = null),
        (t.input = null),
        (t.getPreSelection = function () {
          return t.props.openToDate
            ? t.props.openToDate
            : t.props.selectsEnd && t.props.startDate
              ? t.props.startDate
              : t.props.selectsStart && t.props.endDate
                ? t.props.endDate
                : he();
        }),
        (t.modifyHolidays = function () {
          var a;
          return (a = t.props.holidays) === null || a === void 0
            ? void 0
            : a.reduce(function (i, o) {
                var l = new Date(o.date);
                return Dt(l) ? ct(ct([], i, !0), [oe(oe({}, o), { date: l })], !1) : i;
              }, []);
        }),
        (t.calcInitialState = function () {
          var a,
            i = t.getPreSelection(),
            o = jl(t.props),
            l = Bl(t.props),
            s = o && Xt(i, Tr(o)) ? o : l && Nt(i, qo(l)) ? l : i;
          return {
            open: t.props.startOpen || !1,
            preventFocus: !1,
            inputValue: null,
            preSelection:
              (a = t.props.selectsRange ? t.props.startDate : t.props.selected) !== null && a !== void 0 ? a : s,
            highlightDates: Qo(t.props.highlightDates),
            focused: !1,
            shouldFocusDayInline: !1,
            isRenderAriaLiveMessage: !1,
            wasHidden: !1,
          };
        }),
        (t.resetHiddenStatus = function () {
          t.setState(oe(oe({}, t.state), { wasHidden: !1 }));
        }),
        (t.setHiddenStatus = function () {
          t.setState(oe(oe({}, t.state), { wasHidden: !0 }));
        }),
        (t.setHiddenStateOnVisibilityHidden = function () {
          document.visibilityState === 'hidden' && t.setHiddenStatus();
        }),
        (t.clearPreventFocusTimeout = function () {
          t.preventFocusTimeout && clearTimeout(t.preventFocusTimeout);
        }),
        (t.safeFocus = function () {
          setTimeout(function () {
            var a, i;
            (i = (a = t.input) === null || a === void 0 ? void 0 : a.focus) === null ||
              i === void 0 ||
              i.call(a, { preventScroll: !0 });
          }, 0);
        }),
        (t.safeBlur = function () {
          setTimeout(function () {
            var a, i;
            (i = (a = t.input) === null || a === void 0 ? void 0 : a.blur) === null || i === void 0 || i.call(a);
          }, 0);
        }),
        (t.setFocus = function () {
          t.safeFocus();
        }),
        (t.setBlur = function () {
          (t.safeBlur(), t.cancelFocusInput());
        }),
        (t.setOpen = function (a, i) {
          (i === void 0 && (i = !1),
            t.setState(
              {
                open: a,
                preSelection: a && t.state.open ? t.state.preSelection : t.calcInitialState().preSelection,
                lastPreSelectChange: La,
              },
              function () {
                a ||
                  t.setState(
                    function (o) {
                      return { focused: i ? o.focused : !1 };
                    },
                    function () {
                      (!i && t.setBlur(), t.setState({ inputValue: null }));
                    }
                  );
              }
            ));
        }),
        (t.inputOk = function () {
          return St(t.state.preSelection);
        }),
        (t.isCalendarOpen = function () {
          return t.props.open === void 0 ? t.state.open && !t.props.disabled && !t.props.readOnly : t.props.open;
        }),
        (t.handleFocus = function (a) {
          var i,
            o,
            l = t.state.wasHidden,
            s = l ? t.state.open : !0;
          (l && t.resetHiddenStatus(),
            !t.state.preventFocus &&
              s &&
              ((o = (i = t.props).onFocus) === null || o === void 0 || o.call(i, a),
              !t.props.preventOpenOnFocus && !t.props.readOnly && t.setOpen(!0)),
            t.setState({ focused: !0 }));
        }),
        (t.sendFocusBackToInput = function () {
          (t.preventFocusTimeout && t.clearPreventFocusTimeout(),
            t.setState({ preventFocus: !0 }, function () {
              t.preventFocusTimeout = setTimeout(function () {
                (t.setFocus(), t.setState({ preventFocus: !1 }));
              });
            }));
        }),
        (t.cancelFocusInput = function () {
          (clearTimeout(t.inputFocusTimeout), (t.inputFocusTimeout = void 0));
        }),
        (t.deferFocusInput = function () {
          (t.cancelFocusInput(),
            (t.inputFocusTimeout = setTimeout(function () {
              return t.setFocus();
            }, 1)));
        }),
        (t.handleDropdownFocus = function () {
          t.cancelFocusInput();
        }),
        (t.handleBlur = function (a) {
          var i, o;
          ((!t.state.open || t.props.withPortal || t.props.showTimeInput) &&
            ((o = (i = t.props).onBlur) === null || o === void 0 || o.call(i, a)),
            t.setState({ focused: !1 }));
        }),
        (t.handleCalendarClickOutside = function (a) {
          var i, o;
          (t.props.inline || t.setOpen(!1),
            (o = (i = t.props).onClickOutside) === null || o === void 0 || o.call(i, a),
            t.props.withPortal && a.preventDefault());
        }),
        (t.handleChange = function () {
          for (var a, i, o = [], l = 0; l < arguments.length; l++) o[l] = arguments[l];
          var s = o[0];
          if (
            !(
              t.props.onChangeRaw &&
              (t.props.onChangeRaw.apply(t, o),
              !s || typeof s.isDefaultPrevented != 'function' || s.isDefaultPrevented())
            )
          ) {
            t.setState({
              inputValue: (s == null ? void 0 : s.target) instanceof HTMLInputElement ? s.target.value : null,
              lastPreSelectChange: hy,
            });
            var u = t.props,
              c = u.dateFormat,
              d = c === void 0 ? r.defaultProps.dateFormat : c,
              f = u.strictParsing,
              p = f === void 0 ? r.defaultProps.strictParsing : f,
              v = u.selectsRange,
              m = u.startDate,
              h = u.endDate,
              g = (s == null ? void 0 : s.target) instanceof HTMLInputElement ? s.target.value : '';
            if (v) {
              var w = g.split('-', 2).map(function (I) {
                  return I.trim();
                }),
                D = w[0],
                x = w[1],
                b = Ia(D ?? '', d, t.props.locale, p),
                C = Ia(x ?? '', d, t.props.locale, p),
                k = (m == null ? void 0 : m.getTime()) !== (b == null ? void 0 : b.getTime()),
                T = (h == null ? void 0 : h.getTime()) !== (C == null ? void 0 : C.getTime());
              if ((!k && !T) || (b && Ge(b, t.props)) || (C && Ge(C, t.props))) return;
              (i = (a = t.props).onChange) === null || i === void 0 || i.call(a, [b, C], s);
            } else {
              var _ = Ia(g, d, t.props.locale, p, t.props.minDate);
              (t.props.showTimeSelectOnly &&
                t.props.selected &&
                _ &&
                !ae(_, t.props.selected) &&
                (_ = zv(t.props.selected, { hours: mt(_), minutes: ht(_), seconds: Ct(_) })),
                (_ || !g) && t.setSelected(_, s, !0));
            }
          }
        }),
        (t.handleSelect = function (a, i, o) {
          if (
            (t.props.shouldCloseOnSelect && !t.props.showTimeSelect && t.sendFocusBackToInput(),
            t.props.onChangeRaw && t.props.onChangeRaw(i),
            t.setSelected(a, i, !1, o),
            t.props.showDateSelect && t.setState({ isRenderAriaLiveMessage: !0 }),
            !t.props.shouldCloseOnSelect || t.props.showTimeSelect)
          )
            t.setPreSelection(a);
          else if (!t.props.inline) {
            t.props.selectsRange || t.setOpen(!1);
            var l = t.props,
              s = l.startDate,
              u = l.endDate;
            s && !u && (t.props.swapRange || !Zo(a, s)) && t.setOpen(!1);
          }
        }),
        (t.setSelected = function (a, i, o, l) {
          var s,
            u,
            c = a;
          if (t.props.showYearPicker) {
            if (c !== null && Or(ee(c), t.props)) return;
          } else if (t.props.showMonthYearPicker) {
            if (c !== null && Wl(c, t.props)) return;
          } else if (c !== null && Ge(c, t.props)) return;
          var d = t.props,
            f = d.onChange,
            p = d.selectsRange,
            v = d.startDate,
            m = d.endDate,
            h = d.selectsMultiple,
            g = d.selectedDates,
            w = d.minTime,
            D = d.swapRange;
          if (!$t(t.props.selected, c) || t.props.allowSameDay || p || h)
            if (
              (c !== null &&
                (t.props.selected &&
                  (!o || (!t.props.showTimeSelect && !t.props.showTimeSelectOnly && !t.props.showTimeInput)) &&
                  (c = Aa(c, {
                    hour: mt(t.props.selected),
                    minute: ht(t.props.selected),
                    second: Ct(t.props.selected),
                  })),
                !o &&
                  (t.props.showTimeSelect || t.props.showTimeSelectOnly) &&
                  w &&
                  (c = Aa(c, { hour: w.getHours(), minute: w.getMinutes(), second: w.getSeconds() })),
                t.props.inline || t.setState({ preSelection: c }),
                t.props.focusSelectedMonth || t.setState({ monthSelectedIn: l })),
              p)
            ) {
              var x = !v && !m,
                b = v && !m,
                C = v && m;
              (x
                ? f == null || f([c, null], i)
                : b &&
                  (c === null
                    ? f == null || f([null, null], i)
                    : Zo(c, v)
                      ? D
                        ? f == null || f([c, v], i)
                        : f == null || f([c, null], i)
                      : f == null || f([v, c], i)),
                C && (f == null || f([c, null], i)));
            } else if (h) {
              if (c !== null)
                if (!(g != null && g.length)) f == null || f([c], i);
                else {
                  var k = g.some(function (_) {
                    return ae(_, c);
                  });
                  if (k) {
                    var T = g.filter(function (_) {
                      return !ae(_, c);
                    });
                    f == null || f(T, i);
                  } else f == null || f(ct(ct([], g, !0), [c], !1), i);
                }
            } else f == null || f(c, i);
          o ||
            ((u = (s = t.props).onSelect) === null || u === void 0 || u.call(s, c, i),
            t.setState({ inputValue: null }));
        }),
        (t.setPreSelection = function (a) {
          var i = St(t.props.minDate),
            o = St(t.props.maxDate),
            l = !0;
          if (a) {
            var s = Tr(a);
            if (i && o) l = Fn(a, t.props.minDate, t.props.maxDate);
            else if (i) {
              var u = Tr(t.props.minDate);
              l = Nt(a, u) || $t(s, u);
            } else if (o) {
              var c = qo(t.props.maxDate);
              l = Xt(a, c) || $t(s, c);
            }
          }
          l && t.setState({ preSelection: a });
        }),
        (t.toggleCalendar = function () {
          t.setOpen(!t.state.open);
        }),
        (t.handleTimeChange = function (a) {
          var i, o;
          if (!(t.props.selectsRange || t.props.selectsMultiple)) {
            var l = t.props.selected ? t.props.selected : t.getPreSelection(),
              s = t.props.selected ? a : Aa(l, { hour: mt(a), minute: ht(a) });
            (t.setState({ preSelection: s }),
              (o = (i = t.props).onChange) === null || o === void 0 || o.call(i, s),
              t.props.shouldCloseOnSelect && !t.props.showTimeInput && (t.sendFocusBackToInput(), t.setOpen(!1)),
              t.props.showTimeInput && t.setOpen(!0),
              (t.props.showTimeSelectOnly || t.props.showTimeSelect) && t.setState({ isRenderAriaLiveMessage: !0 }),
              t.setState({ inputValue: null }));
          }
        }),
        (t.onInputClick = function () {
          var a, i;
          (!t.props.disabled && !t.props.readOnly && t.setOpen(!0),
            (i = (a = t.props).onInputClick) === null || i === void 0 || i.call(a));
        }),
        (t.onInputKeyDown = function (a) {
          var i, o, l, s, u, c;
          (o = (i = t.props).onKeyDown) === null || o === void 0 || o.call(i, a);
          var d = a.key;
          if (!t.state.open && !t.props.inline && !t.props.preventOpenOnFocus) {
            (d === $.ArrowDown || d === $.ArrowUp || d === $.Enter) &&
              ((l = t.onInputClick) === null || l === void 0 || l.call(t));
            return;
          }
          if (t.state.open) {
            if (d === $.ArrowDown || d === $.ArrowUp) {
              a.preventDefault();
              var f = t.props.showTimeSelectOnly
                  ? ".react-datepicker__time-list-item[tabindex='0']"
                  : t.props.showWeekPicker && t.props.showWeekNumbers
                    ? '.react-datepicker__week-number[tabindex="0"]'
                    : t.props.showFullMonthYearPicker || t.props.showMonthYearPicker
                      ? '.react-datepicker__month-text[tabindex="0"]'
                      : '.react-datepicker__day[tabindex="0"]',
                p =
                  ((s = t.calendar) === null || s === void 0 ? void 0 : s.containerRef.current) instanceof Element &&
                  t.calendar.containerRef.current.querySelector(f);
              p instanceof HTMLElement && p.focus({ preventScroll: !0 });
              return;
            }
            var v = he(t.state.preSelection);
            (d === $.Enter
              ? (a.preventDefault(),
                a.target.blur(),
                t.inputOk() && t.state.lastPreSelectChange === La
                  ? (t.handleSelect(v, a), !t.props.shouldCloseOnSelect && t.setPreSelection(v))
                  : t.setOpen(!1))
              : d === $.Escape
                ? (a.preventDefault(), a.target.blur(), t.sendFocusBackToInput(), t.setOpen(!1))
                : d === $.Tab && t.setOpen(!1),
              t.inputOk() ||
                (c = (u = t.props).onInputError) === null ||
                c === void 0 ||
                c.call(u, { code: 1, msg: Na }));
          }
        }),
        (t.onPortalKeyDown = function (a) {
          var i = a.key;
          i === $.Escape &&
            (a.preventDefault(),
            t.setState({ preventFocus: !0 }, function () {
              (t.setOpen(!1),
                setTimeout(function () {
                  (t.setFocus(), t.setState({ preventFocus: !1 }));
                }));
            }));
        }),
        (t.onDayKeyDown = function (a) {
          var i,
            o,
            l,
            s,
            u,
            c,
            d = t.props,
            f = d.minDate,
            p = d.maxDate,
            v = d.disabledKeyboardNavigation,
            m = d.showWeekPicker,
            h = d.shouldCloseOnSelect,
            g = d.locale,
            w = d.calendarStartDay,
            D = d.adjustDateOnChange,
            x = d.inline;
          if (((o = (i = t.props).onKeyDown) === null || o === void 0 || o.call(i, a), !v)) {
            var b = a.key,
              C = a.shiftKey,
              k = he(t.state.preSelection),
              T = function (N, R) {
                var Y = R;
                switch (N) {
                  case $.ArrowRight:
                    Y = m ? Hr(R, 1) : nt(R, 1);
                    break;
                  case $.ArrowLeft:
                    Y = m ? Ao(R) : Mv(R);
                    break;
                  case $.ArrowUp:
                    Y = Ao(R);
                    break;
                  case $.ArrowDown:
                    Y = Hr(R, 1);
                    break;
                  case $.PageUp:
                    Y = C ? yn(R, 1) : Bt(R, 1);
                    break;
                  case $.PageDown:
                    Y = C ? kt(R, 1) : rt(R, 1);
                    break;
                  case $.Home:
                    Y = It(R, g, w);
                    break;
                  case $.End:
                    Y = Tg(R);
                    break;
                }
                return Y;
              },
              _ = function (N, R) {
                for (var Y = 40, q = N, X = !1, se = 0, ge = T(N, R); !X; ) {
                  if (se >= Y) {
                    ge = R;
                    break;
                  }
                  (f && ge < f && ((q = $.ArrowRight), (ge = Ge(f, t.props) ? T(q, ge) : f)),
                    p && ge > p && ((q = $.ArrowLeft), (ge = Ge(p, t.props) ? T(q, ge) : p)),
                    Ge(ge, t.props)
                      ? ((q === $.PageUp || q === $.Home) && (q = $.ArrowRight),
                        (q === $.PageDown || q === $.End) && (q = $.ArrowLeft),
                        (ge = T(q, ge)))
                      : (X = !0),
                    se++);
                }
                return ge;
              };
            if (b === $.Enter) {
              (a.preventDefault(), t.handleSelect(k, a), !h && t.setPreSelection(k));
              return;
            } else if (b === $.Escape) {
              (a.preventDefault(),
                t.setOpen(!1),
                t.inputOk() ||
                  (s = (l = t.props).onInputError) === null ||
                  s === void 0 ||
                  s.call(l, { code: 1, msg: Na }));
              return;
            }
            var I = null;
            switch (b) {
              case $.ArrowLeft:
              case $.ArrowRight:
              case $.ArrowUp:
              case $.ArrowDown:
              case $.PageUp:
              case $.PageDown:
              case $.Home:
              case $.End:
                I = _(b, k);
                break;
            }
            if (!I) {
              (c = (u = t.props).onInputError) === null || c === void 0 || c.call(u, { code: 1, msg: Na });
              return;
            }
            if (
              (a.preventDefault(),
              t.setState({ lastPreSelectChange: La }),
              D && t.setSelected(I),
              t.setPreSelection(I),
              x)
            ) {
              var P = Ve(k),
                E = Ve(I),
                L = ee(k),
                B = ee(I);
              P !== E || L !== B ? t.setState({ shouldFocusDayInline: !0 }) : t.setState({ shouldFocusDayInline: !1 });
            }
          }
        }),
        (t.onPopperKeyDown = function (a) {
          var i = a.key;
          i === $.Escape && (a.preventDefault(), t.sendFocusBackToInput());
        }),
        (t.onClearClick = function (a) {
          (a && a.preventDefault && a.preventDefault(), t.sendFocusBackToInput());
          var i = t.props,
            o = i.selectsRange,
            l = i.onChange;
          (o ? l == null || l([null, null], a) : l == null || l(null, a), t.setState({ inputValue: null }));
        }),
        (t.clear = function () {
          t.onClearClick();
        }),
        (t.onScroll = function (a) {
          typeof t.props.closeOnScroll == 'boolean' && t.props.closeOnScroll
            ? (a.target === document || a.target === document.documentElement || a.target === document.body) &&
              t.setOpen(!1)
            : typeof t.props.closeOnScroll == 'function' && t.props.closeOnScroll(a) && t.setOpen(!1);
        }),
        (t.renderCalendar = function () {
          var a, i;
          return !t.props.inline && !t.isCalendarOpen()
            ? null
            : O.createElement(
                oy,
                oe(
                  {
                    showMonthYearDropdown: void 0,
                    ref: function (o) {
                      t.calendar = o;
                    },
                  },
                  t.props,
                  t.state,
                  {
                    setOpen: t.setOpen,
                    dateFormat:
                      (a = t.props.dateFormatCalendar) !== null && a !== void 0 ? a : r.defaultProps.dateFormatCalendar,
                    onSelect: t.handleSelect,
                    onClickOutside: t.handleCalendarClickOutside,
                    holidays: Yg(t.modifyHolidays()),
                    outsideClickIgnoreClass: ts,
                    onDropdownFocus: t.handleDropdownFocus,
                    onTimeChange: t.handleTimeChange,
                    className: t.props.calendarClassName,
                    container: t.props.calendarContainer,
                    handleOnKeyDown: t.props.onKeyDown,
                    handleOnDayKeyDown: t.onDayKeyDown,
                    setPreSelection: t.setPreSelection,
                    dropdownMode: (i = t.props.dropdownMode) !== null && i !== void 0 ? i : r.defaultProps.dropdownMode,
                  }
                ),
                t.props.children
              );
        }),
        (t.renderAriaLiveRegion = function () {
          var a = t.props,
            i = a.dateFormat,
            o = i === void 0 ? r.defaultProps.dateFormat : i,
            l = a.locale,
            s = t.props.showTimeInput || t.props.showTimeSelect,
            u = s ? 'PPPPp' : 'PPPP',
            c;
          return (
            t.props.selectsRange
              ? (c = 'Selected start date: '
                  .concat(Ke(t.props.startDate, { dateFormat: u, locale: l }), '. ')
                  .concat(t.props.endDate ? 'End date: ' + Ke(t.props.endDate, { dateFormat: u, locale: l }) : ''))
              : t.props.showTimeSelectOnly
                ? (c = 'Selected time: '.concat(Ke(t.props.selected, { dateFormat: o, locale: l })))
                : t.props.showYearPicker
                  ? (c = 'Selected year: '.concat(Ke(t.props.selected, { dateFormat: 'yyyy', locale: l })))
                  : t.props.showMonthYearPicker
                    ? (c = 'Selected month: '.concat(Ke(t.props.selected, { dateFormat: 'MMMM yyyy', locale: l })))
                    : t.props.showQuarterYearPicker
                      ? (c = 'Selected quarter: '.concat(Ke(t.props.selected, { dateFormat: 'yyyy, QQQ', locale: l })))
                      : (c = 'Selected date: '.concat(Ke(t.props.selected, { dateFormat: u, locale: l }))),
            O.createElement(
              'span',
              { role: 'alert', 'aria-live': 'polite', className: 'react-datepicker__aria-live' },
              c
            )
          );
        }),
        (t.renderDateInput = function () {
          var a,
            i,
            o,
            l = Ae(t.props.className, ((a = {}), (a[ts] = t.state.open), a)),
            s = t.props.customInput || O.createElement('input', { type: 'text' }),
            u = t.props.customInputRef || 'ref',
            c = t.props,
            d = c.dateFormat,
            f = d === void 0 ? r.defaultProps.dateFormat : d,
            p = c.locale,
            v =
              typeof t.props.value == 'string'
                ? t.props.value
                : typeof t.state.inputValue == 'string'
                  ? t.state.inputValue
                  : t.props.selectsRange
                    ? xg(t.props.startDate, t.props.endDate, { dateFormat: f, locale: p })
                    : t.props.selectsMultiple
                      ? kg((o = t.props.selectedDates) !== null && o !== void 0 ? o : [], { dateFormat: f, locale: p })
                      : Ke(t.props.selected, { dateFormat: f, locale: p });
          return y.cloneElement(
            s,
            ((i = {}),
            (i[u] = function (m) {
              t.input = m;
            }),
            (i.value = v),
            (i.onBlur = t.handleBlur),
            (i.onChange = t.handleChange),
            (i.onClick = t.onInputClick),
            (i.onFocus = t.handleFocus),
            (i.onKeyDown = t.onInputKeyDown),
            (i.id = t.props.id),
            (i.name = t.props.name),
            (i.form = t.props.form),
            (i.autoFocus = t.props.autoFocus),
            (i.placeholder = t.props.placeholderText),
            (i.disabled = t.props.disabled),
            (i.autoComplete = t.props.autoComplete),
            (i.className = Ae(s.props.className, l)),
            (i.title = t.props.title),
            (i.readOnly = t.props.readOnly),
            (i.required = t.props.required),
            (i.tabIndex = t.props.tabIndex),
            (i['aria-describedby'] = t.props.ariaDescribedBy),
            (i['aria-invalid'] = t.props.ariaInvalid),
            (i['aria-labelledby'] = t.props.ariaLabelledBy),
            (i['aria-required'] = t.props.ariaRequired),
            i)
          );
        }),
        (t.renderClearButton = function () {
          var a = t.props,
            i = a.isClearable,
            o = a.disabled,
            l = a.selected,
            s = a.startDate,
            u = a.endDate,
            c = a.clearButtonTitle,
            d = a.clearButtonClassName,
            f = d === void 0 ? '' : d,
            p = a.ariaLabelClose,
            v = p === void 0 ? 'Close' : p,
            m = a.selectedDates;
          return i && (l != null || s != null || u != null || (m != null && m.length))
            ? O.createElement('button', {
                type: 'button',
                className: Ae('react-datepicker__close-icon', f, { 'react-datepicker__close-icon--disabled': o }),
                disabled: o,
                'aria-label': v,
                onClick: t.onClearClick,
                title: c,
                tabIndex: -1,
              })
            : null;
        }),
        (t.state = t.calcInitialState()),
        (t.preventFocusTimeout = void 0),
        t
      );
    }
    return (
      Object.defineProperty(r, 'defaultProps', {
        get: function () {
          return {
            allowSameDay: !1,
            dateFormat: 'MM/dd/yyyy',
            dateFormatCalendar: 'LLLL yyyy',
            disabled: !1,
            disabledKeyboardNavigation: !1,
            dropdownMode: 'scroll',
            preventOpenOnFocus: !1,
            monthsShown: 1,
            readOnly: !1,
            withPortal: !1,
            selectsDisabledDaysInRange: !1,
            shouldCloseOnSelect: !0,
            showTimeSelect: !1,
            showTimeInput: !1,
            showPreviousMonths: !1,
            showMonthYearPicker: !1,
            showFullMonthYearPicker: !1,
            showTwoColumnMonthYearPicker: !1,
            showFourColumnMonthYearPicker: !1,
            showYearPicker: !1,
            showQuarterYearPicker: !1,
            showWeekPicker: !1,
            strictParsing: !1,
            swapRange: !1,
            timeIntervals: 30,
            timeCaption: 'Time',
            previousMonthAriaLabel: 'Previous Month',
            previousMonthButtonLabel: 'Previous Month',
            nextMonthAriaLabel: 'Next Month',
            nextMonthButtonLabel: 'Next Month',
            previousYearAriaLabel: 'Previous Year',
            previousYearButtonLabel: 'Previous Year',
            nextYearAriaLabel: 'Next Year',
            nextYearButtonLabel: 'Next Year',
            timeInputLabel: 'Time',
            enableTabLoop: !0,
            yearItemNumber: Zn,
            focusSelectedMonth: !1,
            showPopperArrow: !0,
            excludeScrollbar: !0,
            customTimeInput: null,
            calendarStartDay: void 0,
            toggleCalendarOnIconClick: !1,
            usePointerEvent: !1,
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (r.prototype.componentDidMount = function () {
        (window.addEventListener('scroll', this.onScroll, !0),
          document.addEventListener('visibilitychange', this.setHiddenStateOnVisibilityHidden));
      }),
      (r.prototype.componentDidUpdate = function (e, t) {
        var a, i, o, l;
        (e.inline && py(e.selected, this.props.selected) && this.setPreSelection(this.props.selected),
          this.state.monthSelectedIn !== void 0 &&
            e.monthsShown !== this.props.monthsShown &&
            this.setState({ monthSelectedIn: 0 }),
          e.highlightDates !== this.props.highlightDates &&
            this.setState({ highlightDates: Qo(this.props.highlightDates) }),
          !t.focused && !$t(e.selected, this.props.selected) && this.setState({ inputValue: null }),
          t.open !== this.state.open &&
            (t.open === !1 &&
              this.state.open === !0 &&
              ((i = (a = this.props).onCalendarOpen) === null || i === void 0 || i.call(a)),
            t.open === !0 &&
              this.state.open === !1 &&
              ((l = (o = this.props).onCalendarClose) === null || l === void 0 || l.call(o))));
      }),
      (r.prototype.componentWillUnmount = function () {
        (this.clearPreventFocusTimeout(),
          window.removeEventListener('scroll', this.onScroll, !0),
          document.removeEventListener('visibilitychange', this.setHiddenStateOnVisibilityHidden));
      }),
      (r.prototype.renderInputContainer = function () {
        var e = this.props,
          t = e.showIcon,
          a = e.icon,
          i = e.calendarIconClassname,
          o = e.calendarIconClassName,
          l = e.toggleCalendarOnIconClick,
          s = this.state.open;
        return (
          i && console.warn('calendarIconClassname props is deprecated. should use calendarIconClassName props.'),
          O.createElement(
            'div',
            { className: 'react-datepicker__input-container'.concat(t ? ' react-datepicker__view-calendar-icon' : '') },
            t &&
              O.createElement(
                sy,
                oe(
                  { icon: a, className: Ae(o, !o && i, s && 'react-datepicker-ignore-onclickoutside') },
                  l ? { onClick: this.toggleCalendar } : null
                )
              ),
            this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(),
            this.renderDateInput(),
            this.renderClearButton()
          )
        );
      }),
      (r.prototype.render = function () {
        var e = this.renderCalendar();
        if (this.props.inline) return e;
        if (this.props.withPortal) {
          var t = this.state.open
            ? O.createElement(
                Ql,
                { enableTabLoop: this.props.enableTabLoop },
                O.createElement(
                  'div',
                  { className: 'react-datepicker__portal', tabIndex: -1, onKeyDown: this.onPortalKeyDown },
                  e
                )
              )
            : null;
          return (
            this.state.open &&
              this.props.portalId &&
              (t = O.createElement(zl, oe({ portalId: this.props.portalId }, this.props), t)),
            O.createElement('div', null, this.renderInputContainer(), t)
          );
        }
        return O.createElement(
          fy,
          oe({}, this.props, {
            className: this.props.popperClassName,
            hidePopper: !this.isCalendarOpen(),
            targetComponent: this.renderInputContainer(),
            popperComponent: e,
            popperOnKeyDown: this.onPopperKeyDown,
            showArrow: this.props.showPopperArrow,
          })
        );
      }),
      r
    );
  })(y.Component),
  hy = 'input',
  La = 'navigate',
  Ya = { exports: {} },
  ve = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ns;
function vy() {
  if (ns) return ve;
  ns = 1;
  var n = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.portal'),
    e = Symbol.for('react.fragment'),
    t = Symbol.for('react.strict_mode'),
    a = Symbol.for('react.profiler'),
    i = Symbol.for('react.consumer'),
    o = Symbol.for('react.context'),
    l = Symbol.for('react.forward_ref'),
    s = Symbol.for('react.suspense'),
    u = Symbol.for('react.suspense_list'),
    c = Symbol.for('react.memo'),
    d = Symbol.for('react.lazy'),
    f = Symbol.for('react.view_transition'),
    p = Symbol.for('react.client.reference');
  function v(m) {
    if (typeof m == 'object' && m !== null) {
      var h = m.$$typeof;
      switch (h) {
        case n:
          switch (((m = m.type), m)) {
            case e:
            case a:
            case t:
            case s:
            case u:
            case f:
              return m;
            default:
              switch (((m = m && m.$$typeof), m)) {
                case o:
                case l:
                case d:
                case c:
                  return m;
                case i:
                  return m;
                default:
                  return h;
              }
          }
        case r:
          return h;
      }
    }
  }
  return (
    (ve.ContextConsumer = i),
    (ve.ContextProvider = o),
    (ve.Element = n),
    (ve.ForwardRef = l),
    (ve.Fragment = e),
    (ve.Lazy = d),
    (ve.Memo = c),
    (ve.Portal = r),
    (ve.Profiler = a),
    (ve.StrictMode = t),
    (ve.Suspense = s),
    (ve.SuspenseList = u),
    (ve.isContextConsumer = function (m) {
      return v(m) === i;
    }),
    (ve.isContextProvider = function (m) {
      return v(m) === o;
    }),
    (ve.isElement = function (m) {
      return typeof m == 'object' && m !== null && m.$$typeof === n;
    }),
    (ve.isForwardRef = function (m) {
      return v(m) === l;
    }),
    (ve.isFragment = function (m) {
      return v(m) === e;
    }),
    (ve.isLazy = function (m) {
      return v(m) === d;
    }),
    (ve.isMemo = function (m) {
      return v(m) === c;
    }),
    (ve.isPortal = function (m) {
      return v(m) === r;
    }),
    (ve.isProfiler = function (m) {
      return v(m) === a;
    }),
    (ve.isStrictMode = function (m) {
      return v(m) === t;
    }),
    (ve.isSuspense = function (m) {
      return v(m) === s;
    }),
    (ve.isSuspenseList = function (m) {
      return v(m) === u;
    }),
    (ve.isValidElementType = function (m) {
      return (
        typeof m == 'string' ||
        typeof m == 'function' ||
        m === e ||
        m === a ||
        m === t ||
        m === s ||
        m === u ||
        (typeof m == 'object' &&
          m !== null &&
          (m.$$typeof === d ||
            m.$$typeof === c ||
            m.$$typeof === o ||
            m.$$typeof === i ||
            m.$$typeof === l ||
            m.$$typeof === p ||
            m.getModuleId !== void 0))
      );
    }),
    (ve.typeOf = v),
    ve
  );
}
var rs;
function gy() {
  return (rs || ((rs = 1), (Ya.exports = vy())), Ya.exports);
}
var Kl = gy();
function yy(n) {
  function r(A, F, V, U, S) {
    for (
      var J = 0,
        M = 0,
        le = 0,
        re = 0,
        te,
        Z,
        ke = 0,
        Pe = 0,
        ne,
        Me = (ne = te = 0),
        ie = 0,
        Ee = 0,
        Yt = 0,
        ye = 0,
        wt = V.length,
        Mt = wt - 1,
        qe,
        G = '',
        we = '',
        tn = '',
        nn = '',
        tt;
      ie < wt;
    ) {
      if (
        ((Z = V.charCodeAt(ie)),
        ie === Mt && M + re + le + J !== 0 && (M !== 0 && (Z = M === 47 ? 10 : 47), (re = le = J = 0), wt++, Mt++),
        M + re + le + J === 0)
      ) {
        if (ie === Mt && (0 < Ee && (G = G.replace(f, '')), 0 < G.trim().length)) {
          switch (Z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              G += V.charAt(ie);
          }
          Z = 59;
        }
        switch (Z) {
          case 123:
            for (G = G.trim(), te = G.charCodeAt(0), ne = 1, ye = ++ie; ie < wt; ) {
              switch ((Z = V.charCodeAt(ie))) {
                case 123:
                  ne++;
                  break;
                case 125:
                  ne--;
                  break;
                case 47:
                  switch ((Z = V.charCodeAt(ie + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (Me = ie + 1; Me < Mt; ++Me)
                          switch (V.charCodeAt(Me)) {
                            case 47:
                              if (Z === 42 && V.charCodeAt(Me - 1) === 42 && ie + 2 !== Me) {
                                ie = Me + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Z === 47) {
                                ie = Me + 1;
                                break e;
                              }
                          }
                        ie = Me;
                      }
                  }
                  break;
                case 91:
                  Z++;
                case 40:
                  Z++;
                case 34:
                case 39:
                  for (; ie++ < Mt && V.charCodeAt(ie) !== Z; );
              }
              if (ne === 0) break;
              ie++;
            }
            switch (((ne = V.substring(ye, ie)), te === 0 && (te = (G = G.replace(d, '').trim()).charCodeAt(0)), te)) {
              case 64:
                switch ((0 < Ee && (G = G.replace(f, '')), (Z = G.charCodeAt(1)), Z)) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ee = F;
                    break;
                  default:
                    Ee = R;
                }
                if (
                  ((ne = r(F, Ee, ne, Z, S + 1)),
                  (ye = ne.length),
                  0 < q &&
                    ((Ee = e(R, G, Yt)),
                    (tt = l(3, ne, Ee, F, L, E, ye, Z, S, U)),
                    (G = Ee.join('')),
                    tt !== void 0 && (ye = (ne = tt.trim()).length) === 0 && ((Z = 0), (ne = ''))),
                  0 < ye)
                )
                  switch (Z) {
                    case 115:
                      G = G.replace(C, o);
                    case 100:
                    case 109:
                    case 45:
                      ne = G + '{' + ne + '}';
                      break;
                    case 107:
                      ((G = G.replace(w, '$1 $2')),
                        (ne = G + '{' + ne + '}'),
                        (ne = N === 1 || (N === 2 && i('@' + ne, 3)) ? '@-webkit-' + ne + '@' + ne : '@' + ne));
                      break;
                    default:
                      ((ne = G + ne), U === 112 && (ne = ((we += ne), '')));
                  }
                else ne = '';
                break;
              default:
                ne = r(F, e(F, G, Yt), ne, U, S + 1);
            }
            ((tn += ne), (ne = Yt = Ee = Me = te = 0), (G = ''), (Z = V.charCodeAt(++ie)));
            break;
          case 125:
          case 59:
            if (((G = (0 < Ee ? G.replace(f, '') : G).trim()), 1 < (ye = G.length)))
              switch (
                (Me === 0 &&
                  ((te = G.charCodeAt(0)), te === 45 || (96 < te && 123 > te)) &&
                  (ye = (G = G.replace(' ', ':')).length),
                0 < q &&
                  (tt = l(1, G, F, A, L, E, we.length, U, S, U)) !== void 0 &&
                  (ye = (G = tt.trim()).length) === 0 &&
                  (G = '\0\0'),
                (te = G.charCodeAt(0)),
                (Z = G.charCodeAt(1)),
                te)
              ) {
                case 0:
                  break;
                case 64:
                  if (Z === 105 || Z === 99) {
                    nn += G + V.charAt(ie);
                    break;
                  }
                default:
                  G.charCodeAt(ye - 1) !== 58 && (we += a(G, te, Z, G.charCodeAt(2)));
              }
            ((Yt = Ee = Me = te = 0), (G = ''), (Z = V.charCodeAt(++ie)));
        }
      }
      switch (Z) {
        case 13:
        case 10:
          (M === 47 ? (M = 0) : 1 + te === 0 && U !== 107 && 0 < G.length && ((Ee = 1), (G += '\0')),
            0 < q * se && l(0, G, F, A, L, E, we.length, U, S, U),
            (E = 1),
            L++);
          break;
        case 59:
        case 125:
          if (M + re + le + J === 0) {
            E++;
            break;
          }
        default:
          switch ((E++, (qe = V.charAt(ie)), Z)) {
            case 9:
            case 32:
              if (re + J + M === 0)
                switch (ke) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    qe = '';
                    break;
                  default:
                    Z !== 32 && (qe = ' ');
                }
              break;
            case 0:
              qe = '\\0';
              break;
            case 12:
              qe = '\\f';
              break;
            case 11:
              qe = '\\v';
              break;
            case 38:
              re + M + J === 0 && ((Ee = Yt = 1), (qe = '\f' + qe));
              break;
            case 108:
              if (re + M + J + B === 0 && 0 < Me)
                switch (ie - Me) {
                  case 2:
                    ke === 112 && V.charCodeAt(ie - 3) === 58 && (B = ke);
                  case 8:
                    Pe === 111 && (B = Pe);
                }
              break;
            case 58:
              re + M + J === 0 && (Me = ie);
              break;
            case 44:
              M + le + re + J === 0 && ((Ee = 1), (qe += '\r'));
              break;
            case 34:
            case 39:
              M === 0 && (re = re === Z ? 0 : re === 0 ? Z : re);
              break;
            case 91:
              re + M + le === 0 && J++;
              break;
            case 93:
              re + M + le === 0 && J--;
              break;
            case 41:
              re + M + J === 0 && le--;
              break;
            case 40:
              if (re + M + J === 0) {
                if (te === 0)
                  switch (2 * ke + 3 * Pe) {
                    case 533:
                      break;
                    default:
                      te = 1;
                  }
                le++;
              }
              break;
            case 64:
              M + le + re + J + Me + ne === 0 && (ne = 1);
              break;
            case 42:
            case 47:
              if (!(0 < re + J + le))
                switch (M) {
                  case 0:
                    switch (2 * Z + 3 * V.charCodeAt(ie + 1)) {
                      case 235:
                        M = 47;
                        break;
                      case 220:
                        ((ye = ie), (M = 42));
                    }
                    break;
                  case 42:
                    Z === 47 &&
                      ke === 42 &&
                      ye + 2 !== ie &&
                      (V.charCodeAt(ye + 2) === 33 && (we += V.substring(ye, ie + 1)), (qe = ''), (M = 0));
                }
          }
          M === 0 && (G += qe);
      }
      ((Pe = ke), (ke = Z), ie++);
    }
    if (((ye = we.length), 0 < ye)) {
      if (((Ee = F), 0 < q && ((tt = l(2, we, Ee, A, L, E, ye, U, S, U)), tt !== void 0 && (we = tt).length === 0)))
        return nn + we + tn;
      if (((we = Ee.join(',') + '{' + we + '}'), N * B !== 0)) {
        switch ((N !== 2 || i(we, 2) || (B = 0), B)) {
          case 111:
            we = we.replace(x, ':-moz-$1') + we;
            break;
          case 112:
            we = we.replace(D, '::-webkit-input-$1') + we.replace(D, '::-moz-$1') + we.replace(D, ':-ms-input-$1') + we;
        }
        B = 0;
      }
    }
    return nn + we + tn;
  }
  function e(A, F, V) {
    var U = F.trim().split(h);
    F = U;
    var S = U.length,
      J = A.length;
    switch (J) {
      case 0:
      case 1:
        var M = 0;
        for (A = J === 0 ? '' : A[0] + ' '; M < S; ++M) F[M] = t(A, F[M], V).trim();
        break;
      default:
        var le = (M = 0);
        for (F = []; M < S; ++M) for (var re = 0; re < J; ++re) F[le++] = t(A[re] + ' ', U[M], V).trim();
    }
    return F;
  }
  function t(A, F, V) {
    var U = F.charCodeAt(0);
    switch ((33 > U && (U = (F = F.trim()).charCodeAt(0)), U)) {
      case 38:
        return F.replace(g, '$1' + A.trim());
      case 58:
        return A.trim() + F.replace(g, '$1' + A.trim());
      default:
        if (0 < 1 * V && 0 < F.indexOf('\f')) return F.replace(g, (A.charCodeAt(0) === 58 ? '' : '$1') + A.trim());
    }
    return A + F;
  }
  function a(A, F, V, U) {
    var S = A + ';',
      J = 2 * F + 3 * V + 4 * U;
    if (J === 944) {
      A = S.indexOf(':', 9) + 1;
      var M = S.substring(A, S.length - 1).trim();
      return ((M = S.substring(0, A).trim() + M + ';'), N === 1 || (N === 2 && i(M, 1)) ? '-webkit-' + M + M : M);
    }
    if (N === 0 || (N === 2 && !i(S, 1))) return S;
    switch (J) {
      case 1015:
        return S.charCodeAt(10) === 97 ? '-webkit-' + S + S : S;
      case 951:
        return S.charCodeAt(3) === 116 ? '-webkit-' + S + S : S;
      case 963:
        return S.charCodeAt(5) === 110 ? '-webkit-' + S + S : S;
      case 1009:
        if (S.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return '-webkit-' + S + S;
      case 978:
        return '-webkit-' + S + '-moz-' + S + S;
      case 1019:
      case 983:
        return '-webkit-' + S + '-moz-' + S + '-ms-' + S + S;
      case 883:
        if (S.charCodeAt(8) === 45) return '-webkit-' + S + S;
        if (0 < S.indexOf('image-set(', 11)) return S.replace(P, '$1-webkit-$2') + S;
        break;
      case 932:
        if (S.charCodeAt(4) === 45)
          switch (S.charCodeAt(5)) {
            case 103:
              return (
                '-webkit-box-' + S.replace('-grow', '') + '-webkit-' + S + '-ms-' + S.replace('grow', 'positive') + S
              );
            case 115:
              return '-webkit-' + S + '-ms-' + S.replace('shrink', 'negative') + S;
            case 98:
              return '-webkit-' + S + '-ms-' + S.replace('basis', 'preferred-size') + S;
          }
        return '-webkit-' + S + '-ms-' + S + S;
      case 964:
        return '-webkit-' + S + '-ms-flex-' + S + S;
      case 1023:
        if (S.charCodeAt(8) !== 99) break;
        return (
          (M = S.substring(S.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify')),
          '-webkit-box-pack' + M + '-webkit-' + S + '-ms-flex-pack' + M + S
        );
      case 1005:
        return v.test(S) ? S.replace(p, ':-webkit-') + S.replace(p, ':-moz-') + S : S;
      case 1e3:
        switch (((M = S.substring(13).trim()), (F = M.indexOf('-') + 1), M.charCodeAt(0) + M.charCodeAt(F))) {
          case 226:
            M = S.replace(b, 'tb');
            break;
          case 232:
            M = S.replace(b, 'tb-rl');
            break;
          case 220:
            M = S.replace(b, 'lr');
            break;
          default:
            return S;
        }
        return '-webkit-' + S + '-ms-' + M + S;
      case 1017:
        if (S.indexOf('sticky', 9) === -1) break;
      case 975:
        switch (
          ((F = (S = A).length - 10),
          (M = (S.charCodeAt(F) === 33 ? S.substring(0, F) : S).substring(A.indexOf(':', 7) + 1).trim()),
          (J = M.charCodeAt(0) + (M.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > M.charCodeAt(8)) break;
          case 115:
            S = S.replace(M, '-webkit-' + M) + ';' + S;
            break;
          case 207:
          case 102:
            S =
              S.replace(M, '-webkit-' + (102 < J ? 'inline-' : '') + 'box') +
              ';' +
              S.replace(M, '-webkit-' + M) +
              ';' +
              S.replace(M, '-ms-' + M + 'box') +
              ';' +
              S;
        }
        return S + ';';
      case 938:
        if (S.charCodeAt(5) === 45)
          switch (S.charCodeAt(6)) {
            case 105:
              return ((M = S.replace('-items', '')), '-webkit-' + S + '-webkit-box-' + M + '-ms-flex-' + M + S);
            case 115:
              return '-webkit-' + S + '-ms-flex-item-' + S.replace(T, '') + S;
            default:
              return '-webkit-' + S + '-ms-flex-line-pack' + S.replace('align-content', '').replace(T, '') + S;
          }
        break;
      case 973:
      case 989:
        if (S.charCodeAt(3) !== 45 || S.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (I.test(A) === !0)
          return (M = A.substring(A.indexOf(':') + 1)).charCodeAt(0) === 115
            ? a(A.replace('stretch', 'fill-available'), F, V, U).replace(':fill-available', ':stretch')
            : S.replace(M, '-webkit-' + M) + S.replace(M, '-moz-' + M.replace('fill-', '')) + S;
        break;
      case 962:
        if (
          ((S = '-webkit-' + S + (S.charCodeAt(5) === 102 ? '-ms-' + S : '') + S),
          V + U === 211 && S.charCodeAt(13) === 105 && 0 < S.indexOf('transform', 10))
        )
          return S.substring(0, S.indexOf(';', 27) + 1).replace(m, '$1-webkit-$2') + S;
    }
    return S;
  }
  function i(A, F) {
    var V = A.indexOf(F === 1 ? ':' : '{'),
      U = A.substring(0, F !== 3 ? V : 10);
    return ((V = A.substring(V + 1, A.length - 1)), X(F !== 2 ? U : U.replace(_, '$1'), V, F));
  }
  function o(A, F) {
    var V = a(F, F.charCodeAt(0), F.charCodeAt(1), F.charCodeAt(2));
    return V !== F + ';' ? V.replace(k, ' or ($1)').substring(4) : '(' + F + ')';
  }
  function l(A, F, V, U, S, J, M, le, re, te) {
    for (var Z = 0, ke = F, Pe; Z < q; ++Z)
      switch ((Pe = Y[Z].call(c, A, ke, V, U, S, J, M, le, re, te))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ke = Pe;
      }
    if (ke !== F) return ke;
  }
  function s(A) {
    switch (A) {
      case void 0:
      case null:
        q = Y.length = 0;
        break;
      default:
        if (typeof A == 'function') Y[q++] = A;
        else if (typeof A == 'object') for (var F = 0, V = A.length; F < V; ++F) s(A[F]);
        else se = !!A | 0;
    }
    return s;
  }
  function u(A) {
    return (
      (A = A.prefix),
      A !== void 0 && ((X = null), A ? (typeof A != 'function' ? (N = 1) : ((N = 2), (X = A))) : (N = 0)),
      u
    );
  }
  function c(A, F) {
    var V = A;
    if ((33 > V.charCodeAt(0) && (V = V.trim()), (ge = V), (V = [ge]), 0 < q)) {
      var U = l(-1, F, V, V, L, E, 0, 0, 0, 0);
      U !== void 0 && typeof U == 'string' && (F = U);
    }
    var S = r(R, V, F, 0, 0);
    return (
      0 < q && ((U = l(-2, S, V, V, L, E, S.length, 0, 0, 0)), U !== void 0 && (S = U)),
      (ge = ''),
      (B = 0),
      (E = L = 1),
      S
    );
  }
  var d = /^\0+/g,
    f = /[\0\r\f]/g,
    p = /: */g,
    v = /zoo|gra/,
    m = /([,: ])(transform)/g,
    h = /,\r+?/g,
    g = /([\t\r\n ])*\f?&/g,
    w = /@(k\w+)\s*(\S*)\s*/,
    D = /::(place)/g,
    x = /:(read-only)/g,
    b = /[svh]\w+-[tblr]{2}/,
    C = /\(\s*(.*)\s*\)/g,
    k = /([\s\S]*?);/g,
    T = /-self|flex-/g,
    _ = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    I = /stretch|:\s*\w+\-(?:conte|avail)/,
    P = /([^-])(image-set\()/,
    E = 1,
    L = 1,
    B = 0,
    N = 1,
    R = [],
    Y = [],
    q = 0,
    X = null,
    se = 0,
    ge = '';
  return ((c.use = s), (c.set = u), n !== void 0 && u(n), c);
}
var by = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  wy =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  as = Fs(function (n) {
    return wy.test(n) || (n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n.charCodeAt(2) < 91);
  }),
  Qe = {};
function dt() {
  return (dt =
    Object.assign ||
    function (n) {
      for (var r = 1; r < arguments.length; r++) {
        var e = arguments[r];
        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
      }
      return n;
    }).apply(this, arguments);
}
var is = function (n, r) {
    for (var e = [n[0]], t = 0, a = r.length; t < a; t += 1) e.push(r[t], n[t + 1]);
    return e;
  },
  ti = function (n) {
    return (
      n !== null &&
      typeof n == 'object' &&
      (n.toString ? n.toString() : Object.prototype.toString.call(n)) === '[object Object]' &&
      !Kl.typeOf(n)
    );
  },
  Zr = Object.freeze([]),
  At = Object.freeze({});
function Bn(n) {
  return typeof n == 'function';
}
function os(n) {
  return n.displayName || n.name || 'Component';
}
function Mi(n) {
  return n && typeof n.styledComponentId == 'string';
}
var bn = (typeof process < 'u' && Qe !== void 0 && (Qe.REACT_APP_SC_ATTR || Qe.SC_ATTR)) || 'data-styled',
  Ei = typeof window < 'u' && 'HTMLElement' in window,
  Dy = !!(typeof SC_DISABLE_SPEEDY == 'boolean'
    ? SC_DISABLE_SPEEDY
    : typeof process < 'u' &&
      Qe !== void 0 &&
      (Qe.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Qe.REACT_APP_SC_DISABLE_SPEEDY !== ''
        ? Qe.REACT_APP_SC_DISABLE_SPEEDY !== 'false' && Qe.REACT_APP_SC_DISABLE_SPEEDY
        : Qe.SC_DISABLE_SPEEDY !== void 0 &&
          Qe.SC_DISABLE_SPEEDY !== '' &&
          Qe.SC_DISABLE_SPEEDY !== 'false' &&
          Qe.SC_DISABLE_SPEEDY)),
  xy = {};
function er(n) {
  for (var r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) e[t - 1] = arguments[t];
  throw new Error(
    'An error occurred. See https://git.io/JUIaE#' +
      n +
      ' for more information.' +
      (e.length > 0 ? ' Args: ' + e.join(', ') : '')
  );
}
var ky = (function () {
    function n(e) {
      ((this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = e));
    }
    var r = n.prototype;
    return (
      (r.indexOfGroup = function (e) {
        for (var t = 0, a = 0; a < e; a++) t += this.groupSizes[a];
        return t;
      }),
      (r.insertRules = function (e, t) {
        if (e >= this.groupSizes.length) {
          for (var a = this.groupSizes, i = a.length, o = i; e >= o; ) (o <<= 1) < 0 && er(16, '' + e);
          ((this.groupSizes = new Uint32Array(o)), this.groupSizes.set(a), (this.length = o));
          for (var l = i; l < o; l++) this.groupSizes[l] = 0;
        }
        for (var s = this.indexOfGroup(e + 1), u = 0, c = t.length; u < c; u++)
          this.tag.insertRule(s, t[u]) && (this.groupSizes[e]++, s++);
      }),
      (r.clearGroup = function (e) {
        if (e < this.length) {
          var t = this.groupSizes[e],
            a = this.indexOfGroup(e),
            i = a + t;
          this.groupSizes[e] = 0;
          for (var o = a; o < i; o++) this.tag.deleteRule(a);
        }
      }),
      (r.getGroup = function (e) {
        var t = '';
        if (e >= this.length || this.groupSizes[e] === 0) return t;
        for (var a = this.groupSizes[e], i = this.indexOfGroup(e), o = i + a, l = i; l < o; l++)
          t +=
            this.tag.getRule(l) +
            `/*!sc*/
`;
        return t;
      }),
      n
    );
  })(),
  _r = new Map(),
  Jr = new Map(),
  Ln = 1,
  hr = function (n) {
    if (_r.has(n)) return _r.get(n);
    for (; Jr.has(Ln); ) Ln++;
    var r = Ln++;
    return (_r.set(n, r), Jr.set(r, n), r);
  },
  Sy = function (n) {
    return Jr.get(n);
  },
  Cy = function (n, r) {
    (r >= Ln && (Ln = r + 1), _r.set(n, r), Jr.set(r, n));
  },
  Ty = 'style[' + bn + '][data-styled-version="5.3.11"]',
  Oy = new RegExp('^' + bn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  _y = function (n, r, e) {
    for (var t, a = e.split(','), i = 0, o = a.length; i < o; i++) (t = a[i]) && n.registerName(r, t);
  },
  Py = function (n, r) {
    for (
      var e = (r.textContent || '').split(`/*!sc*/
`),
        t = [],
        a = 0,
        i = e.length;
      a < i;
      a++
    ) {
      var o = e[a].trim();
      if (o) {
        var l = o.match(Oy);
        if (l) {
          var s = 0 | parseInt(l[1], 10),
            u = l[2];
          (s !== 0 && (Cy(u, s), _y(n, u, l[3]), n.getTag().insertRules(s, t)), (t.length = 0));
        } else t.push(o);
      }
    }
  },
  My = function () {
    return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null;
  },
  Gl = function (n) {
    var r = document.head,
      e = n || r,
      t = document.createElement('style'),
      a = (function (l) {
        for (var s = l.childNodes, u = s.length; u >= 0; u--) {
          var c = s[u];
          if (c && c.nodeType === 1 && c.hasAttribute(bn)) return c;
        }
      })(e),
      i = a !== void 0 ? a.nextSibling : null;
    (t.setAttribute(bn, 'active'), t.setAttribute('data-styled-version', '5.3.11'));
    var o = My();
    return (o && t.setAttribute('nonce', o), e.insertBefore(t, i), t);
  },
  Ey = (function () {
    function n(e) {
      var t = (this.element = Gl(e));
      (t.appendChild(document.createTextNode('')),
        (this.sheet = (function (a) {
          if (a.sheet) return a.sheet;
          for (var i = document.styleSheets, o = 0, l = i.length; o < l; o++) {
            var s = i[o];
            if (s.ownerNode === a) return s;
          }
          er(17);
        })(t)),
        (this.length = 0));
    }
    var r = n.prototype;
    return (
      (r.insertRule = function (e, t) {
        try {
          return (this.sheet.insertRule(t, e), this.length++, !0);
        } catch {
          return !1;
        }
      }),
      (r.deleteRule = function (e) {
        (this.sheet.deleteRule(e), this.length--);
      }),
      (r.getRule = function (e) {
        var t = this.sheet.cssRules[e];
        return t !== void 0 && typeof t.cssText == 'string' ? t.cssText : '';
      }),
      n
    );
  })(),
  Ry = (function () {
    function n(e) {
      var t = (this.element = Gl(e));
      ((this.nodes = t.childNodes), (this.length = 0));
    }
    var r = n.prototype;
    return (
      (r.insertRule = function (e, t) {
        if (e <= this.length && e >= 0) {
          var a = document.createTextNode(t),
            i = this.nodes[e];
          return (this.element.insertBefore(a, i || null), this.length++, !0);
        }
        return !1;
      }),
      (r.deleteRule = function (e) {
        (this.element.removeChild(this.nodes[e]), this.length--);
      }),
      (r.getRule = function (e) {
        return e < this.length ? this.nodes[e].textContent : '';
      }),
      n
    );
  })(),
  Iy = (function () {
    function n(e) {
      ((this.rules = []), (this.length = 0));
    }
    var r = n.prototype;
    return (
      (r.insertRule = function (e, t) {
        return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
      }),
      (r.deleteRule = function (e) {
        (this.rules.splice(e, 1), this.length--);
      }),
      (r.getRule = function (e) {
        return e < this.length ? this.rules[e] : '';
      }),
      n
    );
  })(),
  ss = Ei,
  Ay = { isServer: !Ei, useCSSOMInjection: !Dy },
  ea = (function () {
    function n(e, t, a) {
      (e === void 0 && (e = At),
        t === void 0 && (t = {}),
        (this.options = dt({}, Ay, {}, e)),
        (this.gs = t),
        (this.names = new Map(a)),
        (this.server = !!e.isServer),
        !this.server &&
          Ei &&
          ss &&
          ((ss = !1),
          (function (i) {
            for (var o = document.querySelectorAll(Ty), l = 0, s = o.length; l < s; l++) {
              var u = o[l];
              u && u.getAttribute(bn) !== 'active' && (Py(i, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this)));
    }
    n.registerId = function (e) {
      return hr(e);
    };
    var r = n.prototype;
    return (
      (r.reconstructWithOptions = function (e, t) {
        return (t === void 0 && (t = !0), new n(dt({}, this.options, {}, e), this.gs, (t && this.names) || void 0));
      }),
      (r.allocateGSInstance = function (e) {
        return (this.gs[e] = (this.gs[e] || 0) + 1);
      }),
      (r.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((a = (t = this.options).isServer),
            (i = t.useCSSOMInjection),
            (o = t.target),
            (e = a ? new Iy(o) : i ? new Ey(o) : new Ry(o)),
            new ky(e)))
        );
        var e, t, a, i, o;
      }),
      (r.hasNameForId = function (e, t) {
        return this.names.has(e) && this.names.get(e).has(t);
      }),
      (r.registerName = function (e, t) {
        if ((hr(e), this.names.has(e))) this.names.get(e).add(t);
        else {
          var a = new Set();
          (a.add(t), this.names.set(e, a));
        }
      }),
      (r.insertRules = function (e, t, a) {
        (this.registerName(e, t), this.getTag().insertRules(hr(e), a));
      }),
      (r.clearNames = function (e) {
        this.names.has(e) && this.names.get(e).clear();
      }),
      (r.clearRules = function (e) {
        (this.getTag().clearGroup(hr(e)), this.clearNames(e));
      }),
      (r.clearTag = function () {
        this.tag = void 0;
      }),
      (r.toString = function () {
        return (function (e) {
          for (var t = e.getTag(), a = t.length, i = '', o = 0; o < a; o++) {
            var l = Sy(o);
            if (l !== void 0) {
              var s = e.names.get(l),
                u = t.getGroup(o);
              if (s && u && s.size) {
                var c = bn + '.g' + o + '[id="' + l + '"]',
                  d = '';
                (s !== void 0 &&
                  s.forEach(function (f) {
                    f.length > 0 && (d += f + ',');
                  }),
                  (i +=
                    '' +
                    u +
                    c +
                    '{content:"' +
                    d +
                    `"}/*!sc*/
`));
              }
            }
          }
          return i;
        })(this);
      }),
      n
    );
  })(),
  Fy = /(a)(d)/gi,
  ls = function (n) {
    return String.fromCharCode(n + (n > 25 ? 39 : 97));
  };
function ni(n) {
  var r,
    e = '';
  for (r = Math.abs(n); r > 52; r = (r / 52) | 0) e = ls(r % 52) + e;
  return (ls(r % 52) + e).replace(Fy, '$1-$2');
}
var ln = function (n, r) {
    for (var e = r.length; e; ) n = (33 * n) ^ r.charCodeAt(--e);
    return n;
  },
  Xl = function (n) {
    return ln(5381, n);
  };
function Zl(n) {
  for (var r = 0; r < n.length; r += 1) {
    var e = n[r];
    if (Bn(e) && !Mi(e)) return !1;
  }
  return !0;
}
var Ny = Xl('5.3.11'),
  Ly = (function () {
    function n(r, e, t) {
      ((this.rules = r),
        (this.staticRulesId = ''),
        (this.isStatic = (t === void 0 || t.isStatic) && Zl(r)),
        (this.componentId = e),
        (this.baseHash = ln(Ny, e)),
        (this.baseStyle = t),
        ea.registerId(e));
    }
    return (
      (n.prototype.generateAndInjectStyles = function (r, e, t) {
        var a = this.componentId,
          i = [];
        if ((this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(r, e, t)), this.isStatic && !t.hash))
          if (this.staticRulesId && e.hasNameForId(a, this.staticRulesId)) i.push(this.staticRulesId);
          else {
            var o = Zt(this.rules, r, e, t).join(''),
              l = ni(ln(this.baseHash, o) >>> 0);
            if (!e.hasNameForId(a, l)) {
              var s = t(o, '.' + l, void 0, a);
              e.insertRules(a, l, s);
            }
            (i.push(l), (this.staticRulesId = l));
          }
        else {
          for (var u = this.rules.length, c = ln(this.baseHash, t.hash), d = '', f = 0; f < u; f++) {
            var p = this.rules[f];
            if (typeof p == 'string') d += p;
            else if (p) {
              var v = Zt(p, r, e, t),
                m = Array.isArray(v) ? v.join('') : v;
              ((c = ln(c, m + f)), (d += m));
            }
          }
          if (d) {
            var h = ni(c >>> 0);
            if (!e.hasNameForId(a, h)) {
              var g = t(d, '.' + h, void 0, a);
              e.insertRules(a, h, g);
            }
            i.push(h);
          }
        }
        return i.join(' ');
      }),
      n
    );
  })(),
  Yy = /^\s*\/\/.*$/gm,
  Vy = [':', '[', '.', '#'];
function qy(n) {
  var r,
    e,
    t,
    a,
    i = At,
    o = i.options,
    l = o === void 0 ? At : o,
    s = i.plugins,
    u = s === void 0 ? Zr : s,
    c = new yy(l),
    d = [],
    f = (function (m) {
      function h(g) {
        if (g)
          try {
            m(g + '}');
          } catch {}
      }
      return function (g, w, D, x, b, C, k, T, _, I) {
        switch (g) {
          case 1:
            if (_ === 0 && w.charCodeAt(0) === 64) return (m(w + ';'), '');
            break;
          case 2:
            if (T === 0) return w + '/*|*/';
            break;
          case 3:
            switch (T) {
              case 102:
              case 112:
                return (m(D[0] + w), '');
              default:
                return w + (I === 0 ? '/*|*/' : '');
            }
          case -2:
            w.split('/*|*/}').forEach(h);
        }
      };
    })(function (m) {
      d.push(m);
    }),
    p = function (m, h, g) {
      return (h === 0 && Vy.indexOf(g[e.length]) !== -1) || g.match(a) ? m : '.' + r;
    };
  function v(m, h, g, w) {
    w === void 0 && (w = '&');
    var D = m.replace(Yy, ''),
      x = h && g ? g + ' ' + h + ' { ' + D + ' }' : D;
    return (
      (r = w),
      (e = h),
      (t = new RegExp('\\' + e + '\\b', 'g')),
      (a = new RegExp('(\\' + e + '\\b){2,}')),
      c(g || !h ? '' : h, x)
    );
  }
  return (
    c.use(
      [].concat(u, [
        function (m, h, g) {
          m === 2 && g.length && g[0].lastIndexOf(e) > 0 && (g[0] = g[0].replace(t, p));
        },
        f,
        function (m) {
          if (m === -2) {
            var h = d;
            return ((d = []), h);
          }
        },
      ])
    ),
    (v.hash = u.length
      ? u
          .reduce(function (m, h) {
            return (h.name || er(15), ln(m, h.name));
          }, 5381)
          .toString()
      : ''),
    v
  );
}
var Jl = O.createContext();
Jl.Consumer;
var eu = O.createContext(),
  $y = (eu.Consumer, new ea()),
  ri = qy();
function tu() {
  return y.useContext(Jl) || $y;
}
function nu() {
  return y.useContext(eu) || ri;
}
var Hy = (function () {
    function n(r, e) {
      var t = this;
      ((this.inject = function (a, i) {
        i === void 0 && (i = ri);
        var o = t.name + i.hash;
        a.hasNameForId(t.id, o) || a.insertRules(t.id, o, i(t.rules, o, '@keyframes'));
      }),
        (this.toString = function () {
          return er(12, String(t.name));
        }),
        (this.name = r),
        (this.id = 'sc-keyframes-' + r),
        (this.rules = e));
    }
    return (
      (n.prototype.getName = function (r) {
        return (r === void 0 && (r = ri), this.name + r.hash);
      }),
      n
    );
  })(),
  Wy = /([A-Z])/,
  jy = /([A-Z])/g,
  By = /^ms-/,
  Uy = function (n) {
    return '-' + n.toLowerCase();
  };
function us(n) {
  return Wy.test(n) ? n.replace(jy, Uy).replace(By, '-ms-') : n;
}
var cs = function (n) {
  return n == null || n === !1 || n === '';
};
function Zt(n, r, e, t) {
  if (Array.isArray(n)) {
    for (var a, i = [], o = 0, l = n.length; o < l; o += 1)
      (a = Zt(n[o], r, e, t)) !== '' && (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
    return i;
  }
  if (cs(n)) return '';
  if (Mi(n)) return '.' + n.styledComponentId;
  if (Bn(n)) {
    if (typeof (u = n) != 'function' || (u.prototype && u.prototype.isReactComponent) || !r) return n;
    var s = n(r);
    return Zt(s, r, e, t);
  }
  var u;
  return n instanceof Hy
    ? e
      ? (n.inject(e, t), n.getName(t))
      : n
    : ti(n)
      ? (function c(d, f) {
          var p,
            v,
            m = [];
          for (var h in d)
            d.hasOwnProperty(h) &&
              !cs(d[h]) &&
              ((Array.isArray(d[h]) && d[h].isCss) || Bn(d[h])
                ? m.push(us(h) + ':', d[h], ';')
                : ti(d[h])
                  ? m.push.apply(m, c(d[h], h))
                  : m.push(
                      us(h) +
                        ': ' +
                        ((p = h),
                        (v = d[h]) == null || typeof v == 'boolean' || v === ''
                          ? ''
                          : typeof v != 'number' || v === 0 || p in by || p.startsWith('--')
                            ? String(v).trim()
                            : v + 'px') +
                        ';'
                    ));
          return f ? [f + ' {'].concat(m, ['}']) : m;
        })(n)
      : n.toString();
}
var ds = function (n) {
  return (Array.isArray(n) && (n.isCss = !0), n);
};
function ru(n) {
  for (var r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) e[t - 1] = arguments[t];
  return Bn(n) || ti(n)
    ? ds(Zt(is(Zr, [n].concat(e))))
    : e.length === 0 && n.length === 1 && typeof n[0] == 'string'
      ? n
      : ds(Zt(is(n, e)));
}
var au = function (n, r, e) {
    return (e === void 0 && (e = At), (n.theme !== e.theme && n.theme) || r || e.theme);
  },
  zy = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Qy = /(^-|-$)/g;
function Va(n) {
  return n.replace(zy, '-').replace(Qy, '');
}
var iu = function (n) {
  return ni(Xl(n) >>> 0);
};
function vr(n) {
  return typeof n == 'string' && !0;
}
var ai = function (n) {
    return typeof n == 'function' || (typeof n == 'object' && n !== null && !Array.isArray(n));
  },
  Ky = function (n) {
    return n !== '__proto__' && n !== 'constructor' && n !== 'prototype';
  };
function Gy(n, r, e) {
  var t = n[e];
  ai(r) && ai(t) ? ou(t, r) : (n[e] = r);
}
function ou(n) {
  for (var r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) e[t - 1] = arguments[t];
  for (var a = 0, i = e; a < i.length; a++) {
    var o = i[a];
    if (ai(o)) for (var l in o) Ky(l) && Gy(n, o[l], l);
  }
  return n;
}
var Ri = O.createContext();
Ri.Consumer;
var qa = {};
function su(n, r, e) {
  var t = Mi(n),
    a = !vr(n),
    i = r.attrs,
    o = i === void 0 ? Zr : i,
    l = r.componentId,
    s =
      l === void 0
        ? (function (w, D) {
            var x = typeof w != 'string' ? 'sc' : Va(w);
            qa[x] = (qa[x] || 0) + 1;
            var b = x + '-' + iu('5.3.11' + x + qa[x]);
            return D ? D + '-' + b : b;
          })(r.displayName, r.parentComponentId)
        : l,
    u = r.displayName,
    c =
      u === void 0
        ? (function (w) {
            return vr(w) ? 'styled.' + w : 'Styled(' + os(w) + ')';
          })(n)
        : u,
    d = r.displayName && r.componentId ? Va(r.displayName) + '-' + r.componentId : r.componentId || s,
    f = t && n.attrs ? Array.prototype.concat(n.attrs, o).filter(Boolean) : o,
    p = r.shouldForwardProp;
  t &&
    n.shouldForwardProp &&
    (p = r.shouldForwardProp
      ? function (w, D, x) {
          return n.shouldForwardProp(w, D, x) && r.shouldForwardProp(w, D, x);
        }
      : n.shouldForwardProp);
  var v,
    m = new Ly(e, d, t ? n.componentStyle : void 0),
    h = m.isStatic && o.length === 0,
    g = function (w, D) {
      return (function (x, b, C, k) {
        var T = x.attrs,
          _ = x.componentStyle,
          I = x.defaultProps,
          P = x.foldedComponentIds,
          E = x.shouldForwardProp,
          L = x.styledComponentId,
          B = x.target,
          N = (function (U, S, J) {
            U === void 0 && (U = At);
            var M = dt({}, S, { theme: U }),
              le = {};
            return (
              J.forEach(function (re) {
                var te,
                  Z,
                  ke,
                  Pe = re;
                for (te in (Bn(Pe) && (Pe = Pe(M)), Pe))
                  M[te] = le[te] =
                    te === 'className' ? ((Z = le[te]), (ke = Pe[te]), Z && ke ? Z + ' ' + ke : Z || ke) : Pe[te];
              }),
              [M, le]
            );
          })(au(b, y.useContext(Ri), I) || At, b, T),
          R = N[0],
          Y = N[1],
          q = (function (U, S, J, M) {
            var le = tu(),
              re = nu(),
              te = S ? U.generateAndInjectStyles(At, le, re) : U.generateAndInjectStyles(J, le, re);
            return te;
          })(_, k, R),
          X = C,
          se = Y.$as || b.$as || Y.as || b.as || B,
          ge = vr(se),
          A = Y !== b ? dt({}, b, {}, Y) : b,
          F = {};
        for (var V in A)
          V[0] !== '$' &&
            V !== 'as' &&
            (V === 'forwardedAs' ? (F.as = A[V]) : (E ? E(V, as, se) : !ge || as(V)) && (F[V] = A[V]));
        return (
          b.style && Y.style !== b.style && (F.style = dt({}, b.style, {}, Y.style)),
          (F.className = Array.prototype
            .concat(P, L, q !== L ? q : null, b.className, Y.className)
            .filter(Boolean)
            .join(' ')),
          (F.ref = X),
          y.createElement(se, F)
        );
      })(v, w, D, h);
    };
  return (
    (g.displayName = c),
    ((v = O.forwardRef(g)).attrs = f),
    (v.componentStyle = m),
    (v.displayName = c),
    (v.shouldForwardProp = p),
    (v.foldedComponentIds = t ? Array.prototype.concat(n.foldedComponentIds, n.styledComponentId) : Zr),
    (v.styledComponentId = d),
    (v.target = t ? n.target : n),
    (v.withComponent = function (w) {
      var D = r.componentId,
        x = (function (C, k) {
          if (C == null) return {};
          var T,
            _,
            I = {},
            P = Object.keys(C);
          for (_ = 0; _ < P.length; _++) ((T = P[_]), k.indexOf(T) >= 0 || (I[T] = C[T]));
          return I;
        })(r, ['componentId']),
        b = D && D + '-' + (vr(w) ? w : Va(os(w)));
      return su(w, dt({}, x, { attrs: f, componentId: b }), e);
    }),
    Object.defineProperty(v, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (w) {
        this._foldedDefaultProps = t ? ou({}, n.defaultProps, w) : w;
      },
    }),
    Object.defineProperty(v, 'toString', {
      value: function () {
        return '.' + v.styledComponentId;
      },
    }),
    a &&
      Kc(v, n, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    v
  );
}
var fs = function (n) {
  return (function r(e, t, a) {
    if ((a === void 0 && (a = At), !Kl.isValidElementType(t))) return er(1, String(t));
    var i = function () {
      return e(t, a, ru.apply(void 0, arguments));
    };
    return (
      (i.withConfig = function (o) {
        return r(e, t, dt({}, a, {}, o));
      }),
      (i.attrs = function (o) {
        return r(e, t, dt({}, a, { attrs: Array.prototype.concat(a.attrs, o).filter(Boolean) }));
      }),
      i
    );
  })(su, n);
};
[
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'marquee',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  'circle',
  'clipPath',
  'defs',
  'ellipse',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'text',
  'textPath',
  'tspan',
].forEach(function (n) {
  fs[n] = fs(n);
});
var Xy = (function () {
  function n(e, t) {
    ((this.rules = e), (this.componentId = t), (this.isStatic = Zl(e)), ea.registerId(this.componentId + 1));
  }
  var r = n.prototype;
  return (
    (r.createStyles = function (e, t, a, i) {
      var o = i(Zt(this.rules, t, a, i).join(''), ''),
        l = this.componentId + e;
      a.insertRules(l, l, o);
    }),
    (r.removeStyles = function (e, t) {
      t.clearRules(this.componentId + e);
    }),
    (r.renderStyles = function (e, t, a, i) {
      (e > 2 && ea.registerId(this.componentId + e), this.removeStyles(e, a), this.createStyles(e, t, a, i));
    }),
    n
  );
})();
function Zy(n) {
  for (var r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) e[t - 1] = arguments[t];
  var a = ru.apply(void 0, [n].concat(e)),
    i = 'sc-global-' + iu(JSON.stringify(a)),
    o = new Xy(a, i);
  function l(u) {
    var c = tu(),
      d = nu(),
      f = y.useContext(Ri),
      p = y.useRef(c.allocateGSInstance(i)).current;
    return (
      c.server && s(p, u, c, f, d),
      y.useLayoutEffect(
        function () {
          if (!c.server)
            return (
              s(p, u, c, f, d),
              function () {
                return o.removeStyles(p, c);
              }
            );
        },
        [p, u, c, f, d]
      ),
      null
    );
  }
  function s(u, c, d, f, p) {
    if (o.isStatic) o.renderStyles(u, xy, d, p);
    else {
      var v = dt({}, c, { theme: au(c, f, l.defaultProps) });
      o.renderStyles(u, v, d, p);
    }
  }
  return O.memo(l);
}
const lu = (n, r, e = 1) => Array.from({ length: Math.ceil((r - n) / e) }, (t, a) => n + a * e),
  ps = Symbol.for('constructDateFrom');
function va(n, r) {
  return typeof n == 'function'
    ? n(r)
    : n && typeof n == 'object' && ps in n
      ? n[ps](r)
      : n instanceof Date
        ? new n.constructor(r)
        : new Date(r);
}
function tr(n, r) {
  return va(n, n);
}
function Jy(n, r) {
  const e = tr(n),
    t = e.getFullYear(),
    a = e.getMonth(),
    i = va(e, 0);
  return (i.setFullYear(t, a + 1, 0), i.setHours(0, 0, 0, 0), i.getDate());
}
function eb(n, r) {
  return tr(n).getMonth();
}
function ms(n, r) {
  return tr(n).getFullYear();
}
function tb(n, r, e) {
  const t = tr(n),
    a = t.getFullYear(),
    i = t.getDate(),
    o = va(n, 0);
  (o.setFullYear(a, r, 15), o.setHours(0, 0, 0, 0));
  const l = Jy(o);
  return (t.setMonth(r, Math.min(i, l)), t);
}
function nb(n, r, e) {
  const t = tr(n);
  return isNaN(+t) ? va(n, NaN) : (t.setFullYear(r), t);
}
const rb = (n, r = 'long') => {
    const e = new Date().getFullYear(),
      t = lu(0, 12),
      a = new Intl.DateTimeFormat(n, { month: r }),
      i = (o) => a.format(new Date(e, o));
    return t.map((o) => i(o));
  },
  ab = Zy`
  .date_picker {
    width: 100%
  }
  .date_picker input {
    color: inherit;
    border-color: ${(n) => n.$borderColor};
  }
`,
  uu = (n) => {
    const r = (i) => {
        i && n.onChange(i);
      },
      e = lu(1900, ms(new Date()) + 1, 1),
      t = rb(),
      a = ({ date: i, changeYear: o, changeMonth: l }) =>
        H.jsxs('div', {
          className: De.header,
          children: [
            H.jsx('select', {
              value: ms(i),
              onChange: ({ target: { value: s } }) => {
                var u = nb(new Date(n.value || new Date()), parseInt(s));
                (r(u), o(s));
              },
              children: e.map((s) => H.jsx('option', { value: s, children: s }, s)),
            }),
            H.jsx('select', {
              value: t[eb(i)],
              onChange: ({ target: { value: s } }) => {
                const u = t.indexOf(s);
                var c = tb(new Date(n.value || new Date()), u);
                (r(c), l(u));
              },
              children: t.map((s) => H.jsx('option', { value: s, children: s }, s)),
            }),
          ],
        });
    return H.jsxs('div', {
      className: De.datepicker,
      children: [
        H.jsx(my, {
          id: n.id,
          selected: n.value ? new Date(n.value) : void 0,
          onChange: r,
          onFocus: n.onFocus,
          onCalendarClose: n.onBlur,
          onBlur: n.onBlur,
          dateFormat: n.format || 'yyyy-MM-dd',
          wrapperClassName: 'date_picker',
          popperPlacement: 'bottom-start',
          renderCustomHeader: a,
        }),
        H.jsx(ab, { $borderColor: n.borderColor }),
      ],
    });
  };
uu.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'DateInput',
  props: {
    id: { required: !1, tsType: { name: 'string' }, description: '' },
    autocomplete: { required: !1, tsType: { name: 'string' }, description: '' },
    required: { required: !1, tsType: { name: 'boolean' }, description: '' },
    colors: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'object',
        raw: `{
  base?: string;
  accent?: string;
  error?: string;
}`,
        signature: {
          properties: [
            { key: 'base', value: { name: 'string', required: !1 } },
            { key: 'accent', value: { name: 'string', required: !1 } },
            { key: 'error', value: { name: 'string', required: !1 } },
          ],
        },
      },
      description: '',
    },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    extensions: {
      required: !1,
      tsType: { name: 'Array', elements: [{ name: 'string' }], raw: 'string[]' },
      description: '',
    },
    format: { required: !1, tsType: { name: 'string' }, description: '' },
    max: { required: !1, tsType: { name: 'number' }, description: '' },
    min: { required: !1, tsType: { name: 'number' }, description: '' },
    name: { required: !1, tsType: { name: 'string' }, description: '' },
    type: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'number' | 'text' | 'text-multiline' | 'select' | 'tags' | 'date' | 'files' | 'check' | 'password'",
        elements: [
          { name: 'literal', value: "'number'" },
          { name: 'literal', value: "'text'" },
          { name: 'literal', value: "'text-multiline'" },
          { name: 'literal', value: "'select'" },
          { name: 'literal', value: "'tags'" },
          { name: 'literal', value: "'date'" },
          { name: 'literal', value: "'files'" },
          { name: 'literal', value: "'check'" },
          { name: 'literal', value: "'password'" },
        ],
      },
      description: '',
    },
    options: {
      required: !1,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'intersection',
            raw: '{ value: T | string; label?: string } & { metadata?: any }',
            elements: [
              {
                name: 'signature',
                type: 'object',
                raw: '{ value: T | string; label?: string }',
                signature: {
                  properties: [
                    {
                      key: 'value',
                      value: {
                        name: 'union',
                        raw: 'T | string',
                        elements: [{ name: 'T' }, { name: 'string' }],
                        required: !0,
                      },
                    },
                    { key: 'label', value: { name: 'string', required: !1 } },
                  ],
                },
              },
              {
                name: 'signature',
                type: 'object',
                raw: '{ metadata?: any }',
                signature: { properties: [{ key: 'metadata', value: { name: 'any', required: !1 } }] },
              },
            ],
          },
        ],
        raw: 'FieldOption<T>[]',
      },
      description: '',
    },
    borderColor: { required: !1, tsType: { name: 'string' }, description: '' },
    value: { required: !1, tsType: { name: 'T' }, description: '' },
    hasHint: { required: !1, tsType: { name: 'boolean' }, description: '' },
    isErrored: { required: !0, tsType: { name: 'boolean' }, description: '' },
    isFocused: { required: !0, tsType: { name: 'boolean' }, description: '' },
    onFocus: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
    onBlur: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
    onChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: T) => void',
        signature: { arguments: [{ type: { name: 'T' }, name: 'value' }], return: { name: 'void' } },
      },
      description: '',
    },
  },
};
const cu = (n) => {
  const r = (e) => {
    const t = !!e.target.checked;
    n.onChange(t);
  };
  return H.jsx('input', {
    id: n.id,
    required: n.required,
    disabled: n.disabled,
    max: n.max,
    min: n.min,
    name: n.name,
    autoComplete: n.autocomplete,
    type: 'checkbox',
    onChange: r,
    checked: !!n.value,
    value: '',
  });
};
cu.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'CheckboxInput',
  props: {
    id: { required: !1, tsType: { name: 'string' }, description: '' },
    autocomplete: { required: !1, tsType: { name: 'string' }, description: '' },
    required: { required: !1, tsType: { name: 'boolean' }, description: '' },
    colors: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'object',
        raw: `{
  base?: string;
  accent?: string;
  error?: string;
}`,
        signature: {
          properties: [
            { key: 'base', value: { name: 'string', required: !1 } },
            { key: 'accent', value: { name: 'string', required: !1 } },
            { key: 'error', value: { name: 'string', required: !1 } },
          ],
        },
      },
      description: '',
    },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    extensions: {
      required: !1,
      tsType: { name: 'Array', elements: [{ name: 'string' }], raw: 'string[]' },
      description: '',
    },
    format: { required: !1, tsType: { name: 'string' }, description: '' },
    max: { required: !1, tsType: { name: 'number' }, description: '' },
    min: { required: !1, tsType: { name: 'number' }, description: '' },
    name: { required: !1, tsType: { name: 'string' }, description: '' },
    type: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'number' | 'text' | 'text-multiline' | 'select' | 'tags' | 'date' | 'files' | 'check' | 'password'",
        elements: [
          { name: 'literal', value: "'number'" },
          { name: 'literal', value: "'text'" },
          { name: 'literal', value: "'text-multiline'" },
          { name: 'literal', value: "'select'" },
          { name: 'literal', value: "'tags'" },
          { name: 'literal', value: "'date'" },
          { name: 'literal', value: "'files'" },
          { name: 'literal', value: "'check'" },
          { name: 'literal', value: "'password'" },
        ],
      },
      description: '',
    },
    options: {
      required: !1,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'intersection',
            raw: '{ value: T | string; label?: string } & { metadata?: any }',
            elements: [
              {
                name: 'signature',
                type: 'object',
                raw: '{ value: T | string; label?: string }',
                signature: {
                  properties: [
                    {
                      key: 'value',
                      value: {
                        name: 'union',
                        raw: 'T | string',
                        elements: [{ name: 'T' }, { name: 'string' }],
                        required: !0,
                      },
                    },
                    { key: 'label', value: { name: 'string', required: !1 } },
                  ],
                },
              },
              {
                name: 'signature',
                type: 'object',
                raw: '{ metadata?: any }',
                signature: { properties: [{ key: 'metadata', value: { name: 'any', required: !1 } }] },
              },
            ],
          },
        ],
        raw: 'FieldOption<T>[]',
      },
      description: '',
    },
    borderColor: { required: !1, tsType: { name: 'string' }, description: '' },
    value: { required: !1, tsType: { name: 'T' }, description: '' },
    hasHint: { required: !1, tsType: { name: 'boolean' }, description: '' },
    isErrored: { required: !0, tsType: { name: 'boolean' }, description: '' },
    isFocused: { required: !0, tsType: { name: 'boolean' }, description: '' },
    onFocus: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
    onBlur: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
    onChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: T) => void',
        signature: { arguments: [{ type: { name: 'T' }, name: 'value' }], return: { name: 'void' } },
      },
      description: '',
    },
  },
};
const du = (n) => {
  var l, s;
  const { colors: r } = n;
  let e = 'inherit';
  n.isErrored && (e = (r == null ? void 0 : r.error) || Ne.ERROR);
  const [t, a] = y.useState(((l = n.value) == null ? void 0 : l.length) || 0),
    i = y.useRef(null),
    o = (u) => {
      var d, f;
      a(
        ((d = i == null ? void 0 : i.current) == null ? void 0 : d.selectionStart) ||
          ((f = n.value) == null ? void 0 : f.length) ||
          0
      );
      let c = u.target.value;
      (n.type === 'number' && (c = parseFloat(c)), n.onChange(c));
    };
  return (
    y.useEffect(() => {
      var u;
      try {
        (u = i == null ? void 0 : i.current) == null || u.setSelectionRange(t, t);
      } catch {
        console.warn('Selection range cannot be set');
      }
    }, [n.value]),
    H.jsx('input', {
      id: n.id,
      ref: i,
      required: n.required,
      disabled: n.disabled,
      max: n.max,
      min: n.min,
      name: n.name,
      className: Ht({ [De.isErrored]: n.isErrored, [De.hasHint]: n.hasHint }),
      style: { borderColor: n.borderColor, color: e },
      autoComplete: n.autocomplete || ((s = n.name) == null ? void 0 : s.split('.').pop()),
      type: n.type || 'text',
      value: n.value || '',
      onFocus: n.onFocus,
      onBlur: n.onBlur,
      onChange: o,
    })
  );
};
du.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'CommonInput',
  props: {
    id: { required: !1, tsType: { name: 'string' }, description: '' },
    autocomplete: { required: !1, tsType: { name: 'string' }, description: '' },
    required: { required: !1, tsType: { name: 'boolean' }, description: '' },
    colors: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'object',
        raw: `{
  base?: string;
  accent?: string;
  error?: string;
}`,
        signature: {
          properties: [
            { key: 'base', value: { name: 'string', required: !1 } },
            { key: 'accent', value: { name: 'string', required: !1 } },
            { key: 'error', value: { name: 'string', required: !1 } },
          ],
        },
      },
      description: '',
    },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    extensions: {
      required: !1,
      tsType: { name: 'Array', elements: [{ name: 'string' }], raw: 'string[]' },
      description: '',
    },
    format: { required: !1, tsType: { name: 'string' }, description: '' },
    max: { required: !1, tsType: { name: 'number' }, description: '' },
    min: { required: !1, tsType: { name: 'number' }, description: '' },
    name: { required: !1, tsType: { name: 'string' }, description: '' },
    type: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'number' | 'text' | 'text-multiline' | 'select' | 'tags' | 'date' | 'files' | 'check' | 'password'",
        elements: [
          { name: 'literal', value: "'number'" },
          { name: 'literal', value: "'text'" },
          { name: 'literal', value: "'text-multiline'" },
          { name: 'literal', value: "'select'" },
          { name: 'literal', value: "'tags'" },
          { name: 'literal', value: "'date'" },
          { name: 'literal', value: "'files'" },
          { name: 'literal', value: "'check'" },
          { name: 'literal', value: "'password'" },
        ],
      },
      description: '',
    },
    options: {
      required: !1,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'intersection',
            raw: '{ value: T | string; label?: string } & { metadata?: any }',
            elements: [
              {
                name: 'signature',
                type: 'object',
                raw: '{ value: T | string; label?: string }',
                signature: {
                  properties: [
                    {
                      key: 'value',
                      value: {
                        name: 'union',
                        raw: 'T | string',
                        elements: [{ name: 'T' }, { name: 'string' }],
                        required: !0,
                      },
                    },
                    { key: 'label', value: { name: 'string', required: !1 } },
                  ],
                },
              },
              {
                name: 'signature',
                type: 'object',
                raw: '{ metadata?: any }',
                signature: { properties: [{ key: 'metadata', value: { name: 'any', required: !1 } }] },
              },
            ],
          },
        ],
        raw: 'FieldOption<T>[]',
      },
      description: '',
    },
    borderColor: { required: !1, tsType: { name: 'string' }, description: '' },
    value: { required: !1, tsType: { name: 'T' }, description: '' },
    hasHint: { required: !1, tsType: { name: 'boolean' }, description: '' },
    isErrored: { required: !0, tsType: { name: 'boolean' }, description: '' },
    isFocused: { required: !0, tsType: { name: 'boolean' }, description: '' },
    onFocus: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
    onBlur: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
    onChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: T) => void',
        signature: { arguments: [{ type: { name: 'T' }, name: 'value' }], return: { name: 'void' } },
      },
      description: '',
    },
  },
};
const fu = (n) => {
  var i, o;
  const [r, e] = y.useState(((i = n.value) == null ? void 0 : i.length) || 0),
    t = y.useRef(null),
    a = (l) => {
      var s, u;
      (e(
        ((s = t == null ? void 0 : t.current) == null ? void 0 : s.selectionStart) ||
          ((u = n.value) == null ? void 0 : u.length) ||
          0
      ),
        n.onChange(l.target.value));
    };
  return (
    y.useEffect(() => {
      var l;
      try {
        (l = t == null ? void 0 : t.current) == null || l.setSelectionRange(r, r);
      } catch {
        console.warn('Selection range cannot be set');
      }
    }, [n.value]),
    H.jsx('textarea', {
      id: n.id,
      ref: t,
      required: n.required,
      disabled: n.disabled,
      name: n.name,
      className: Ht({ [De.isErrored]: n.isErrored, [De.hasHint]: n.hasHint }),
      style: { borderColor: n.borderColor, color: 'inherit' },
      autoComplete: n.autocomplete || ((o = n.name) == null ? void 0 : o.split('.').pop()),
      value: n.value || '',
      onFocus: n.onFocus,
      onBlur: n.onBlur,
      onChange: a,
    })
  );
};
fu.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'TextArea',
  props: {
    id: { required: !1, tsType: { name: 'string' }, description: '' },
    autocomplete: { required: !1, tsType: { name: 'string' }, description: '' },
    required: { required: !1, tsType: { name: 'boolean' }, description: '' },
    colors: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'object',
        raw: `{
  base?: string;
  accent?: string;
  error?: string;
}`,
        signature: {
          properties: [
            { key: 'base', value: { name: 'string', required: !1 } },
            { key: 'accent', value: { name: 'string', required: !1 } },
            { key: 'error', value: { name: 'string', required: !1 } },
          ],
        },
      },
      description: '',
    },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    extensions: {
      required: !1,
      tsType: { name: 'Array', elements: [{ name: 'string' }], raw: 'string[]' },
      description: '',
    },
    format: { required: !1, tsType: { name: 'string' }, description: '' },
    max: { required: !1, tsType: { name: 'number' }, description: '' },
    min: { required: !1, tsType: { name: 'number' }, description: '' },
    name: { required: !1, tsType: { name: 'string' }, description: '' },
    type: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'number' | 'text' | 'text-multiline' | 'select' | 'tags' | 'date' | 'files' | 'check' | 'password'",
        elements: [
          { name: 'literal', value: "'number'" },
          { name: 'literal', value: "'text'" },
          { name: 'literal', value: "'text-multiline'" },
          { name: 'literal', value: "'select'" },
          { name: 'literal', value: "'tags'" },
          { name: 'literal', value: "'date'" },
          { name: 'literal', value: "'files'" },
          { name: 'literal', value: "'check'" },
          { name: 'literal', value: "'password'" },
        ],
      },
      description: '',
    },
    options: {
      required: !1,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'intersection',
            raw: '{ value: T | string; label?: string } & { metadata?: any }',
            elements: [
              {
                name: 'signature',
                type: 'object',
                raw: '{ value: T | string; label?: string }',
                signature: {
                  properties: [
                    {
                      key: 'value',
                      value: {
                        name: 'union',
                        raw: 'T | string',
                        elements: [{ name: 'T' }, { name: 'string' }],
                        required: !0,
                      },
                    },
                    { key: 'label', value: { name: 'string', required: !1 } },
                  ],
                },
              },
              {
                name: 'signature',
                type: 'object',
                raw: '{ metadata?: any }',
                signature: { properties: [{ key: 'metadata', value: { name: 'any', required: !1 } }] },
              },
            ],
          },
        ],
        raw: 'FieldOption<T>[]',
      },
      description: '',
    },
    borderColor: { required: !1, tsType: { name: 'string' }, description: '' },
    value: { required: !1, tsType: { name: 'T' }, description: '' },
    hasHint: { required: !1, tsType: { name: 'boolean' }, description: '' },
    isErrored: { required: !0, tsType: { name: 'boolean' }, description: '' },
    isFocused: { required: !0, tsType: { name: 'boolean' }, description: '' },
    onFocus: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
    onBlur: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
    onChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: T) => void',
        signature: { arguments: [{ type: { name: 'T' }, name: 'value' }], return: { name: 'void' } },
      },
      description: '',
    },
  },
};
const ib = (n) => n !== Object(n),
  ii = (n) => {
    if (n == null) return {};
    const r = {};
    return Object.entries(n).reduce((e, [t, a]) => {
      if (a instanceof Date) e[t] = new Date(Date.parse(a));
      else if (typeof a != 'object' || a instanceof File) e[t] = a;
      else if (Array.isArray(a) && a.every(ib)) e[t] = a;
      else {
        const i = ii(a);
        (Object.entries(i).forEach(([o, l]) => {
          ((i[`${t}.${o}`] = l), delete i[o]);
        }),
          (e = { ...e, ...i }));
      }
      return e;
    }, r);
  },
  ta = (n) => {
    if (!n || y.isValidElement(n)) return n;
    if (Array.isArray(n)) return n.map(ta);
    if (n instanceof Date) return new Date(n);
    if (typeof n == 'function') return n;
    if (typeof n == 'object') {
      const r = {};
      return (
        Object.entries(n).forEach(([e, t]) => {
          r[e] = ta(t);
        }),
        r
      );
    }
    return JSON.parse(JSON.stringify(n));
  },
  pu = (n) => {
    const { colors: r, isErrored: e, isFocused: t } = n;
    let a = 'inherit';
    return (
      e ? (a = (r == null ? void 0 : r.error) || Ne.ERROR) : t && (a = (r == null ? void 0 : r.accent) || Ne.ACCENT),
      { borderColor: a }
    );
  };
function mu(n, r, e) {
  const t = r.split('.');
  if (t.length === 1) {
    n[t[0]] = e;
    return;
  }
  return ((n[t[0]] = n[t[0]] || (/^\d+$/.test(t[1]) ? [] : {})), mu(n[t[0]], t.slice(1).join('.'), e));
}
function oi(n) {
  const r = {};
  return Object.entries(n).reduce((t, [a, i]) => {
    if (!a.includes('.')) t[a] = i;
    else {
      const o = a.split('.');
      ((t[o[0]] = t[o[0]] || (/^\d+$/.test(o[1]) ? [] : {})), mu(t[o[0]], o.slice(1).join('.'), i));
    }
    return t;
  }, r);
}
function ob(n, r) {
  let e;
  const t = (...a) => {
    (clearTimeout(e), (e = setTimeout(() => n(...a), r)));
  };
  return ((t.cancel = () => clearTimeout(e)), t);
}
const sb = (n) => {
    const { options: r, type: e } = n,
      t = { ...n, ...pu(n) };
    return r
      ? e === 'tags'
        ? H.jsx(Tm, { ...t })
        : H.jsx(Om, { ...t })
      : e === 'date'
        ? H.jsx(uu, { ...t })
        : e === 'files'
          ? H.jsx(wl, { ...t })
          : e === 'check'
            ? H.jsx(cu, { ...t })
            : e === 'text-multiline'
              ? H.jsx(fu, { ...t })
              : H.jsx(du, { ...t });
  },
  hu = { color: 'inherit', height: '1.1em', marginRight: '0.25em', verticalAlign: 'middle', width: '1.1em' },
  lb =
    'M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0z',
  ub =
    'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1 0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1 0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1-64 0z',
  vu = () =>
    H.jsx('svg', {
      style: hu,
      viewBox: '0 0 512 512',
      fill: 'currentColor',
      'aria-hidden': 'true',
      children: H.jsx('path', { d: lb }),
    }),
  gu = () =>
    H.jsx('svg', {
      style: { ...hu },
      viewBox: '0 0 512 512',
      fill: 'currentColor',
      'aria-hidden': 'true',
      children: H.jsx('path', { d: ub }),
    });
vu.__docgenInfo = { description: '', methods: [], displayName: 'WarningIcon' };
gu.__docgenInfo = { description: '', methods: [], displayName: 'HelpIcon' };
var $e = 'top',
  Je = 'bottom',
  et = 'right',
  He = 'left',
  Ii = 'auto',
  nr = [$e, Je, et, He],
  wn = 'start',
  Un = 'end',
  cb = 'clippingParents',
  yu = 'viewport',
  Rn = 'popper',
  db = 'reference',
  hs = nr.reduce(function (n, r) {
    return n.concat([r + '-' + wn, r + '-' + Un]);
  }, []),
  bu = [].concat(nr, [Ii]).reduce(function (n, r) {
    return n.concat([r, r + '-' + wn, r + '-' + Un]);
  }, []),
  fb = 'beforeRead',
  pb = 'read',
  mb = 'afterRead',
  hb = 'beforeMain',
  vb = 'main',
  gb = 'afterMain',
  yb = 'beforeWrite',
  bb = 'write',
  wb = 'afterWrite',
  Db = [fb, pb, mb, hb, vb, gb, yb, bb, wb];
function yt(n) {
  return n ? (n.nodeName || '').toLowerCase() : null;
}
function ze(n) {
  if (n == null) return window;
  if (n.toString() !== '[object Window]') {
    var r = n.ownerDocument;
    return (r && r.defaultView) || window;
  }
  return n;
}
function Jt(n) {
  var r = ze(n).Element;
  return n instanceof r || n instanceof Element;
}
function Xe(n) {
  var r = ze(n).HTMLElement;
  return n instanceof r || n instanceof HTMLElement;
}
function Ai(n) {
  if (typeof ShadowRoot > 'u') return !1;
  var r = ze(n).ShadowRoot;
  return n instanceof r || n instanceof ShadowRoot;
}
function xb(n) {
  var r = n.state;
  Object.keys(r.elements).forEach(function (e) {
    var t = r.styles[e] || {},
      a = r.attributes[e] || {},
      i = r.elements[e];
    !Xe(i) ||
      !yt(i) ||
      (Object.assign(i.style, t),
      Object.keys(a).forEach(function (o) {
        var l = a[o];
        l === !1 ? i.removeAttribute(o) : i.setAttribute(o, l === !0 ? '' : l);
      }));
  });
}
function kb(n) {
  var r = n.state,
    e = {
      popper: { position: r.options.strategy, left: '0', top: '0', margin: '0' },
      arrow: { position: 'absolute' },
      reference: {},
    };
  return (
    Object.assign(r.elements.popper.style, e.popper),
    (r.styles = e),
    r.elements.arrow && Object.assign(r.elements.arrow.style, e.arrow),
    function () {
      Object.keys(r.elements).forEach(function (t) {
        var a = r.elements[t],
          i = r.attributes[t] || {},
          o = Object.keys(r.styles.hasOwnProperty(t) ? r.styles[t] : e[t]),
          l = o.reduce(function (s, u) {
            return ((s[u] = ''), s);
          }, {});
        !Xe(a) ||
          !yt(a) ||
          (Object.assign(a.style, l),
          Object.keys(i).forEach(function (s) {
            a.removeAttribute(s);
          }));
      });
    }
  );
}
const Sb = { name: 'applyStyles', enabled: !0, phase: 'write', fn: xb, effect: kb, requires: ['computeStyles'] };
function vt(n) {
  return n.split('-')[0];
}
var zt = Math.max,
  na = Math.min,
  Dn = Math.round;
function si() {
  var n = navigator.userAgentData;
  return n != null && n.brands && Array.isArray(n.brands)
    ? n.brands
        .map(function (r) {
          return r.brand + '/' + r.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function wu() {
  return !/^((?!chrome|android).)*safari/i.test(si());
}
function xn(n, r, e) {
  (r === void 0 && (r = !1), e === void 0 && (e = !1));
  var t = n.getBoundingClientRect(),
    a = 1,
    i = 1;
  r &&
    Xe(n) &&
    ((a = (n.offsetWidth > 0 && Dn(t.width) / n.offsetWidth) || 1),
    (i = (n.offsetHeight > 0 && Dn(t.height) / n.offsetHeight) || 1));
  var o = Jt(n) ? ze(n) : window,
    l = o.visualViewport,
    s = !wu() && e,
    u = (t.left + (s && l ? l.offsetLeft : 0)) / a,
    c = (t.top + (s && l ? l.offsetTop : 0)) / i,
    d = t.width / a,
    f = t.height / i;
  return { width: d, height: f, top: c, right: u + d, bottom: c + f, left: u, x: u, y: c };
}
function Fi(n) {
  var r = xn(n),
    e = n.offsetWidth,
    t = n.offsetHeight;
  return (
    Math.abs(r.width - e) <= 1 && (e = r.width),
    Math.abs(r.height - t) <= 1 && (t = r.height),
    { x: n.offsetLeft, y: n.offsetTop, width: e, height: t }
  );
}
function Du(n, r) {
  var e = r.getRootNode && r.getRootNode();
  if (n.contains(r)) return !0;
  if (e && Ai(e)) {
    var t = r;
    do {
      if (t && n.isSameNode(t)) return !0;
      t = t.parentNode || t.host;
    } while (t);
  }
  return !1;
}
function _t(n) {
  return ze(n).getComputedStyle(n);
}
function Cb(n) {
  return ['table', 'td', 'th'].indexOf(yt(n)) >= 0;
}
function Lt(n) {
  return ((Jt(n) ? n.ownerDocument : n.document) || window.document).documentElement;
}
function ga(n) {
  return yt(n) === 'html' ? n : n.assignedSlot || n.parentNode || (Ai(n) ? n.host : null) || Lt(n);
}
function vs(n) {
  return !Xe(n) || _t(n).position === 'fixed' ? null : n.offsetParent;
}
function Tb(n) {
  var r = /firefox/i.test(si()),
    e = /Trident/i.test(si());
  if (e && Xe(n)) {
    var t = _t(n);
    if (t.position === 'fixed') return null;
  }
  var a = ga(n);
  for (Ai(a) && (a = a.host); Xe(a) && ['html', 'body'].indexOf(yt(a)) < 0; ) {
    var i = _t(a);
    if (
      i.transform !== 'none' ||
      i.perspective !== 'none' ||
      i.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(i.willChange) !== -1 ||
      (r && i.willChange === 'filter') ||
      (r && i.filter && i.filter !== 'none')
    )
      return a;
    a = a.parentNode;
  }
  return null;
}
function rr(n) {
  for (var r = ze(n), e = vs(n); e && Cb(e) && _t(e).position === 'static'; ) e = vs(e);
  return e && (yt(e) === 'html' || (yt(e) === 'body' && _t(e).position === 'static')) ? r : e || Tb(n) || r;
}
function Ni(n) {
  return ['top', 'bottom'].indexOf(n) >= 0 ? 'x' : 'y';
}
function Yn(n, r, e) {
  return zt(n, na(r, e));
}
function Ob(n, r, e) {
  var t = Yn(n, r, e);
  return t > e ? e : t;
}
function xu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ku(n) {
  return Object.assign({}, xu(), n);
}
function Su(n, r) {
  return r.reduce(function (e, t) {
    return ((e[t] = n), e);
  }, {});
}
var _b = function (r, e) {
  return (
    (r = typeof r == 'function' ? r(Object.assign({}, e.rects, { placement: e.placement })) : r),
    ku(typeof r != 'number' ? r : Su(r, nr))
  );
};
function Pb(n) {
  var r,
    e = n.state,
    t = n.name,
    a = n.options,
    i = e.elements.arrow,
    o = e.modifiersData.popperOffsets,
    l = vt(e.placement),
    s = Ni(l),
    u = [He, et].indexOf(l) >= 0,
    c = u ? 'height' : 'width';
  if (!(!i || !o)) {
    var d = _b(a.padding, e),
      f = Fi(i),
      p = s === 'y' ? $e : He,
      v = s === 'y' ? Je : et,
      m = e.rects.reference[c] + e.rects.reference[s] - o[s] - e.rects.popper[c],
      h = o[s] - e.rects.reference[s],
      g = rr(i),
      w = g ? (s === 'y' ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
      D = m / 2 - h / 2,
      x = d[p],
      b = w - f[c] - d[v],
      C = w / 2 - f[c] / 2 + D,
      k = Yn(x, C, b),
      T = s;
    e.modifiersData[t] = ((r = {}), (r[T] = k), (r.centerOffset = k - C), r);
  }
}
function Mb(n) {
  var r = n.state,
    e = n.options,
    t = e.element,
    a = t === void 0 ? '[data-popper-arrow]' : t;
  a != null &&
    ((typeof a == 'string' && ((a = r.elements.popper.querySelector(a)), !a)) ||
      (Du(r.elements.popper, a) && (r.elements.arrow = a)));
}
const Eb = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: Pb,
  effect: Mb,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function kn(n) {
  return n.split('-')[1];
}
var Rb = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function Ib(n, r) {
  var e = n.x,
    t = n.y,
    a = r.devicePixelRatio || 1;
  return { x: Dn(e * a) / a || 0, y: Dn(t * a) / a || 0 };
}
function gs(n) {
  var r,
    e = n.popper,
    t = n.popperRect,
    a = n.placement,
    i = n.variation,
    o = n.offsets,
    l = n.position,
    s = n.gpuAcceleration,
    u = n.adaptive,
    c = n.roundOffsets,
    d = n.isFixed,
    f = o.x,
    p = f === void 0 ? 0 : f,
    v = o.y,
    m = v === void 0 ? 0 : v,
    h = typeof c == 'function' ? c({ x: p, y: m }) : { x: p, y: m };
  ((p = h.x), (m = h.y));
  var g = o.hasOwnProperty('x'),
    w = o.hasOwnProperty('y'),
    D = He,
    x = $e,
    b = window;
  if (u) {
    var C = rr(e),
      k = 'clientHeight',
      T = 'clientWidth';
    if (
      (C === ze(e) &&
        ((C = Lt(e)), _t(C).position !== 'static' && l === 'absolute' && ((k = 'scrollHeight'), (T = 'scrollWidth'))),
      (C = C),
      a === $e || ((a === He || a === et) && i === Un))
    ) {
      x = Je;
      var _ = d && C === b && b.visualViewport ? b.visualViewport.height : C[k];
      ((m -= _ - t.height), (m *= s ? 1 : -1));
    }
    if (a === He || ((a === $e || a === Je) && i === Un)) {
      D = et;
      var I = d && C === b && b.visualViewport ? b.visualViewport.width : C[T];
      ((p -= I - t.width), (p *= s ? 1 : -1));
    }
  }
  var P = Object.assign({ position: l }, u && Rb),
    E = c === !0 ? Ib({ x: p, y: m }, ze(e)) : { x: p, y: m };
  if (((p = E.x), (m = E.y), s)) {
    var L;
    return Object.assign(
      {},
      P,
      ((L = {}),
      (L[x] = w ? '0' : ''),
      (L[D] = g ? '0' : ''),
      (L.transform =
        (b.devicePixelRatio || 1) <= 1
          ? 'translate(' + p + 'px, ' + m + 'px)'
          : 'translate3d(' + p + 'px, ' + m + 'px, 0)'),
      L)
    );
  }
  return Object.assign(
    {},
    P,
    ((r = {}), (r[x] = w ? m + 'px' : ''), (r[D] = g ? p + 'px' : ''), (r.transform = ''), r)
  );
}
function Ab(n) {
  var r = n.state,
    e = n.options,
    t = e.gpuAcceleration,
    a = t === void 0 ? !0 : t,
    i = e.adaptive,
    o = i === void 0 ? !0 : i,
    l = e.roundOffsets,
    s = l === void 0 ? !0 : l,
    u = {
      placement: vt(r.placement),
      variation: kn(r.placement),
      popper: r.elements.popper,
      popperRect: r.rects.popper,
      gpuAcceleration: a,
      isFixed: r.options.strategy === 'fixed',
    };
  (r.modifiersData.popperOffsets != null &&
    (r.styles.popper = Object.assign(
      {},
      r.styles.popper,
      gs(
        Object.assign({}, u, {
          offsets: r.modifiersData.popperOffsets,
          position: r.options.strategy,
          adaptive: o,
          roundOffsets: s,
        })
      )
    )),
    r.modifiersData.arrow != null &&
      (r.styles.arrow = Object.assign(
        {},
        r.styles.arrow,
        gs(
          Object.assign({}, u, { offsets: r.modifiersData.arrow, position: 'absolute', adaptive: !1, roundOffsets: s })
        )
      )),
    (r.attributes.popper = Object.assign({}, r.attributes.popper, { 'data-popper-placement': r.placement })));
}
const Fb = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: Ab, data: {} };
var gr = { passive: !0 };
function Nb(n) {
  var r = n.state,
    e = n.instance,
    t = n.options,
    a = t.scroll,
    i = a === void 0 ? !0 : a,
    o = t.resize,
    l = o === void 0 ? !0 : o,
    s = ze(r.elements.popper),
    u = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return (
    i &&
      u.forEach(function (c) {
        c.addEventListener('scroll', e.update, gr);
      }),
    l && s.addEventListener('resize', e.update, gr),
    function () {
      (i &&
        u.forEach(function (c) {
          c.removeEventListener('scroll', e.update, gr);
        }),
        l && s.removeEventListener('resize', e.update, gr));
    }
  );
}
const Lb = { name: 'eventListeners', enabled: !0, phase: 'write', fn: function () {}, effect: Nb, data: {} };
var Yb = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function Pr(n) {
  return n.replace(/left|right|bottom|top/g, function (r) {
    return Yb[r];
  });
}
var Vb = { start: 'end', end: 'start' };
function ys(n) {
  return n.replace(/start|end/g, function (r) {
    return Vb[r];
  });
}
function Li(n) {
  var r = ze(n),
    e = r.pageXOffset,
    t = r.pageYOffset;
  return { scrollLeft: e, scrollTop: t };
}
function Yi(n) {
  return xn(Lt(n)).left + Li(n).scrollLeft;
}
function qb(n, r) {
  var e = ze(n),
    t = Lt(n),
    a = e.visualViewport,
    i = t.clientWidth,
    o = t.clientHeight,
    l = 0,
    s = 0;
  if (a) {
    ((i = a.width), (o = a.height));
    var u = wu();
    (u || (!u && r === 'fixed')) && ((l = a.offsetLeft), (s = a.offsetTop));
  }
  return { width: i, height: o, x: l + Yi(n), y: s };
}
function $b(n) {
  var r,
    e = Lt(n),
    t = Li(n),
    a = (r = n.ownerDocument) == null ? void 0 : r.body,
    i = zt(e.scrollWidth, e.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
    o = zt(e.scrollHeight, e.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
    l = -t.scrollLeft + Yi(n),
    s = -t.scrollTop;
  return (
    _t(a || e).direction === 'rtl' && (l += zt(e.clientWidth, a ? a.clientWidth : 0) - i),
    { width: i, height: o, x: l, y: s }
  );
}
function Vi(n) {
  var r = _t(n),
    e = r.overflow,
    t = r.overflowX,
    a = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + a + t);
}
function Cu(n) {
  return ['html', 'body', '#document'].indexOf(yt(n)) >= 0 ? n.ownerDocument.body : Xe(n) && Vi(n) ? n : Cu(ga(n));
}
function Vn(n, r) {
  var e;
  r === void 0 && (r = []);
  var t = Cu(n),
    a = t === ((e = n.ownerDocument) == null ? void 0 : e.body),
    i = ze(t),
    o = a ? [i].concat(i.visualViewport || [], Vi(t) ? t : []) : t,
    l = r.concat(o);
  return a ? l : l.concat(Vn(ga(o)));
}
function li(n) {
  return Object.assign({}, n, { left: n.x, top: n.y, right: n.x + n.width, bottom: n.y + n.height });
}
function Hb(n, r) {
  var e = xn(n, !1, r === 'fixed');
  return (
    (e.top = e.top + n.clientTop),
    (e.left = e.left + n.clientLeft),
    (e.bottom = e.top + n.clientHeight),
    (e.right = e.left + n.clientWidth),
    (e.width = n.clientWidth),
    (e.height = n.clientHeight),
    (e.x = e.left),
    (e.y = e.top),
    e
  );
}
function bs(n, r, e) {
  return r === yu ? li(qb(n, e)) : Jt(r) ? Hb(r, e) : li($b(Lt(n)));
}
function Wb(n) {
  var r = Vn(ga(n)),
    e = ['absolute', 'fixed'].indexOf(_t(n).position) >= 0,
    t = e && Xe(n) ? rr(n) : n;
  return Jt(t)
    ? r.filter(function (a) {
        return Jt(a) && Du(a, t) && yt(a) !== 'body';
      })
    : [];
}
function jb(n, r, e, t) {
  var a = r === 'clippingParents' ? Wb(n) : [].concat(r),
    i = [].concat(a, [e]),
    o = i[0],
    l = i.reduce(
      function (s, u) {
        var c = bs(n, u, t);
        return (
          (s.top = zt(c.top, s.top)),
          (s.right = na(c.right, s.right)),
          (s.bottom = na(c.bottom, s.bottom)),
          (s.left = zt(c.left, s.left)),
          s
        );
      },
      bs(n, o, t)
    );
  return ((l.width = l.right - l.left), (l.height = l.bottom - l.top), (l.x = l.left), (l.y = l.top), l);
}
function Tu(n) {
  var r = n.reference,
    e = n.element,
    t = n.placement,
    a = t ? vt(t) : null,
    i = t ? kn(t) : null,
    o = r.x + r.width / 2 - e.width / 2,
    l = r.y + r.height / 2 - e.height / 2,
    s;
  switch (a) {
    case $e:
      s = { x: o, y: r.y - e.height };
      break;
    case Je:
      s = { x: o, y: r.y + r.height };
      break;
    case et:
      s = { x: r.x + r.width, y: l };
      break;
    case He:
      s = { x: r.x - e.width, y: l };
      break;
    default:
      s = { x: r.x, y: r.y };
  }
  var u = a ? Ni(a) : null;
  if (u != null) {
    var c = u === 'y' ? 'height' : 'width';
    switch (i) {
      case wn:
        s[u] = s[u] - (r[c] / 2 - e[c] / 2);
        break;
      case Un:
        s[u] = s[u] + (r[c] / 2 - e[c] / 2);
        break;
    }
  }
  return s;
}
function zn(n, r) {
  r === void 0 && (r = {});
  var e = r,
    t = e.placement,
    a = t === void 0 ? n.placement : t,
    i = e.strategy,
    o = i === void 0 ? n.strategy : i,
    l = e.boundary,
    s = l === void 0 ? cb : l,
    u = e.rootBoundary,
    c = u === void 0 ? yu : u,
    d = e.elementContext,
    f = d === void 0 ? Rn : d,
    p = e.altBoundary,
    v = p === void 0 ? !1 : p,
    m = e.padding,
    h = m === void 0 ? 0 : m,
    g = ku(typeof h != 'number' ? h : Su(h, nr)),
    w = f === Rn ? db : Rn,
    D = n.rects.popper,
    x = n.elements[v ? w : f],
    b = jb(Jt(x) ? x : x.contextElement || Lt(n.elements.popper), s, c, o),
    C = xn(n.elements.reference),
    k = Tu({ reference: C, element: D, placement: a }),
    T = li(Object.assign({}, D, k)),
    _ = f === Rn ? T : C,
    I = {
      top: b.top - _.top + g.top,
      bottom: _.bottom - b.bottom + g.bottom,
      left: b.left - _.left + g.left,
      right: _.right - b.right + g.right,
    },
    P = n.modifiersData.offset;
  if (f === Rn && P) {
    var E = P[a];
    Object.keys(I).forEach(function (L) {
      var B = [et, Je].indexOf(L) >= 0 ? 1 : -1,
        N = [$e, Je].indexOf(L) >= 0 ? 'y' : 'x';
      I[L] += E[N] * B;
    });
  }
  return I;
}
function Bb(n, r) {
  r === void 0 && (r = {});
  var e = r,
    t = e.placement,
    a = e.boundary,
    i = e.rootBoundary,
    o = e.padding,
    l = e.flipVariations,
    s = e.allowedAutoPlacements,
    u = s === void 0 ? bu : s,
    c = kn(t),
    d = c
      ? l
        ? hs
        : hs.filter(function (v) {
            return kn(v) === c;
          })
      : nr,
    f = d.filter(function (v) {
      return u.indexOf(v) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (v, m) {
    return ((v[m] = zn(n, { placement: m, boundary: a, rootBoundary: i, padding: o })[vt(m)]), v);
  }, {});
  return Object.keys(p).sort(function (v, m) {
    return p[v] - p[m];
  });
}
function Ub(n) {
  if (vt(n) === Ii) return [];
  var r = Pr(n);
  return [ys(n), r, ys(r)];
}
function zb(n) {
  var r = n.state,
    e = n.options,
    t = n.name;
  if (!r.modifiersData[t]._skip) {
    for (
      var a = e.mainAxis,
        i = a === void 0 ? !0 : a,
        o = e.altAxis,
        l = o === void 0 ? !0 : o,
        s = e.fallbackPlacements,
        u = e.padding,
        c = e.boundary,
        d = e.rootBoundary,
        f = e.altBoundary,
        p = e.flipVariations,
        v = p === void 0 ? !0 : p,
        m = e.allowedAutoPlacements,
        h = r.options.placement,
        g = vt(h),
        w = g === h,
        D = s || (w || !v ? [Pr(h)] : Ub(h)),
        x = [h].concat(D).reduce(function (V, U) {
          return V.concat(
            vt(U) === Ii
              ? Bb(r, {
                  placement: U,
                  boundary: c,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: v,
                  allowedAutoPlacements: m,
                })
              : U
          );
        }, []),
        b = r.rects.reference,
        C = r.rects.popper,
        k = new Map(),
        T = !0,
        _ = x[0],
        I = 0;
      I < x.length;
      I++
    ) {
      var P = x[I],
        E = vt(P),
        L = kn(P) === wn,
        B = [$e, Je].indexOf(E) >= 0,
        N = B ? 'width' : 'height',
        R = zn(r, { placement: P, boundary: c, rootBoundary: d, altBoundary: f, padding: u }),
        Y = B ? (L ? et : He) : L ? Je : $e;
      b[N] > C[N] && (Y = Pr(Y));
      var q = Pr(Y),
        X = [];
      if (
        (i && X.push(R[E] <= 0),
        l && X.push(R[Y] <= 0, R[q] <= 0),
        X.every(function (V) {
          return V;
        }))
      ) {
        ((_ = P), (T = !1));
        break;
      }
      k.set(P, X);
    }
    if (T)
      for (
        var se = v ? 3 : 1,
          ge = function (U) {
            var S = x.find(function (J) {
              var M = k.get(J);
              if (M)
                return M.slice(0, U).every(function (le) {
                  return le;
                });
            });
            if (S) return ((_ = S), 'break');
          },
          A = se;
        A > 0;
        A--
      ) {
        var F = ge(A);
        if (F === 'break') break;
      }
    r.placement !== _ && ((r.modifiersData[t]._skip = !0), (r.placement = _), (r.reset = !0));
  }
}
const Qb = { name: 'flip', enabled: !0, phase: 'main', fn: zb, requiresIfExists: ['offset'], data: { _skip: !1 } };
function ws(n, r, e) {
  return (
    e === void 0 && (e = { x: 0, y: 0 }),
    {
      top: n.top - r.height - e.y,
      right: n.right - r.width + e.x,
      bottom: n.bottom - r.height + e.y,
      left: n.left - r.width - e.x,
    }
  );
}
function Ds(n) {
  return [$e, et, Je, He].some(function (r) {
    return n[r] >= 0;
  });
}
function Kb(n) {
  var r = n.state,
    e = n.name,
    t = r.rects.reference,
    a = r.rects.popper,
    i = r.modifiersData.preventOverflow,
    o = zn(r, { elementContext: 'reference' }),
    l = zn(r, { altBoundary: !0 }),
    s = ws(o, t),
    u = ws(l, a, i),
    c = Ds(s),
    d = Ds(u);
  ((r.modifiersData[e] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d,
  }),
    (r.attributes.popper = Object.assign({}, r.attributes.popper, {
      'data-popper-reference-hidden': c,
      'data-popper-escaped': d,
    })));
}
const Gb = { name: 'hide', enabled: !0, phase: 'main', requiresIfExists: ['preventOverflow'], fn: Kb };
function Xb(n, r, e) {
  var t = vt(n),
    a = [He, $e].indexOf(t) >= 0 ? -1 : 1,
    i = typeof e == 'function' ? e(Object.assign({}, r, { placement: n })) : e,
    o = i[0],
    l = i[1];
  return ((o = o || 0), (l = (l || 0) * a), [He, et].indexOf(t) >= 0 ? { x: l, y: o } : { x: o, y: l });
}
function Zb(n) {
  var r = n.state,
    e = n.options,
    t = n.name,
    a = e.offset,
    i = a === void 0 ? [0, 0] : a,
    o = bu.reduce(function (c, d) {
      return ((c[d] = Xb(d, r.rects, i)), c);
    }, {}),
    l = o[r.placement],
    s = l.x,
    u = l.y;
  (r.modifiersData.popperOffsets != null &&
    ((r.modifiersData.popperOffsets.x += s), (r.modifiersData.popperOffsets.y += u)),
    (r.modifiersData[t] = o));
}
const Jb = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: Zb };
function ew(n) {
  var r = n.state,
    e = n.name;
  r.modifiersData[e] = Tu({ reference: r.rects.reference, element: r.rects.popper, placement: r.placement });
}
const tw = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: ew, data: {} };
function nw(n) {
  return n === 'x' ? 'y' : 'x';
}
function rw(n) {
  var r = n.state,
    e = n.options,
    t = n.name,
    a = e.mainAxis,
    i = a === void 0 ? !0 : a,
    o = e.altAxis,
    l = o === void 0 ? !1 : o,
    s = e.boundary,
    u = e.rootBoundary,
    c = e.altBoundary,
    d = e.padding,
    f = e.tether,
    p = f === void 0 ? !0 : f,
    v = e.tetherOffset,
    m = v === void 0 ? 0 : v,
    h = zn(r, { boundary: s, rootBoundary: u, padding: d, altBoundary: c }),
    g = vt(r.placement),
    w = kn(r.placement),
    D = !w,
    x = Ni(g),
    b = nw(x),
    C = r.modifiersData.popperOffsets,
    k = r.rects.reference,
    T = r.rects.popper,
    _ = typeof m == 'function' ? m(Object.assign({}, r.rects, { placement: r.placement })) : m,
    I = typeof _ == 'number' ? { mainAxis: _, altAxis: _ } : Object.assign({ mainAxis: 0, altAxis: 0 }, _),
    P = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null,
    E = { x: 0, y: 0 };
  if (C) {
    if (i) {
      var L,
        B = x === 'y' ? $e : He,
        N = x === 'y' ? Je : et,
        R = x === 'y' ? 'height' : 'width',
        Y = C[x],
        q = Y + h[B],
        X = Y - h[N],
        se = p ? -T[R] / 2 : 0,
        ge = w === wn ? k[R] : T[R],
        A = w === wn ? -T[R] : -k[R],
        F = r.elements.arrow,
        V = p && F ? Fi(F) : { width: 0, height: 0 },
        U = r.modifiersData['arrow#persistent'] ? r.modifiersData['arrow#persistent'].padding : xu(),
        S = U[B],
        J = U[N],
        M = Yn(0, k[R], V[R]),
        le = D ? k[R] / 2 - se - M - S - I.mainAxis : ge - M - S - I.mainAxis,
        re = D ? -k[R] / 2 + se + M + J + I.mainAxis : A + M + J + I.mainAxis,
        te = r.elements.arrow && rr(r.elements.arrow),
        Z = te ? (x === 'y' ? te.clientTop || 0 : te.clientLeft || 0) : 0,
        ke = (L = P == null ? void 0 : P[x]) != null ? L : 0,
        Pe = Y + le - ke - Z,
        ne = Y + re - ke,
        Me = Yn(p ? na(q, Pe) : q, Y, p ? zt(X, ne) : X);
      ((C[x] = Me), (E[x] = Me - Y));
    }
    if (l) {
      var ie,
        Ee = x === 'x' ? $e : He,
        Yt = x === 'x' ? Je : et,
        ye = C[b],
        wt = b === 'y' ? 'height' : 'width',
        Mt = ye + h[Ee],
        qe = ye - h[Yt],
        G = [$e, He].indexOf(g) !== -1,
        we = (ie = P == null ? void 0 : P[b]) != null ? ie : 0,
        tn = G ? Mt : ye - k[wt] - T[wt] - we + I.altAxis,
        nn = G ? ye + k[wt] + T[wt] - we - I.altAxis : qe,
        tt = p && G ? Ob(tn, ye, nn) : Yn(p ? tn : Mt, ye, p ? nn : qe);
      ((C[b] = tt), (E[b] = tt - ye));
    }
    r.modifiersData[t] = E;
  }
}
const aw = { name: 'preventOverflow', enabled: !0, phase: 'main', fn: rw, requiresIfExists: ['offset'] };
function iw(n) {
  return { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop };
}
function ow(n) {
  return n === ze(n) || !Xe(n) ? Li(n) : iw(n);
}
function sw(n) {
  var r = n.getBoundingClientRect(),
    e = Dn(r.width) / n.offsetWidth || 1,
    t = Dn(r.height) / n.offsetHeight || 1;
  return e !== 1 || t !== 1;
}
function lw(n, r, e) {
  e === void 0 && (e = !1);
  var t = Xe(r),
    a = Xe(r) && sw(r),
    i = Lt(r),
    o = xn(n, a, e),
    l = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (t || (!t && !e)) &&
      ((yt(r) !== 'body' || Vi(i)) && (l = ow(r)),
      Xe(r) ? ((s = xn(r, !0)), (s.x += r.clientLeft), (s.y += r.clientTop)) : i && (s.x = Yi(i))),
    { x: o.left + l.scrollLeft - s.x, y: o.top + l.scrollTop - s.y, width: o.width, height: o.height }
  );
}
function uw(n) {
  var r = new Map(),
    e = new Set(),
    t = [];
  n.forEach(function (i) {
    r.set(i.name, i);
  });
  function a(i) {
    e.add(i.name);
    var o = [].concat(i.requires || [], i.requiresIfExists || []);
    (o.forEach(function (l) {
      if (!e.has(l)) {
        var s = r.get(l);
        s && a(s);
      }
    }),
      t.push(i));
  }
  return (
    n.forEach(function (i) {
      e.has(i.name) || a(i);
    }),
    t
  );
}
function cw(n) {
  var r = uw(n);
  return Db.reduce(function (e, t) {
    return e.concat(
      r.filter(function (a) {
        return a.phase === t;
      })
    );
  }, []);
}
function dw(n) {
  var r;
  return function () {
    return (
      r ||
        (r = new Promise(function (e) {
          Promise.resolve().then(function () {
            ((r = void 0), e(n()));
          });
        })),
      r
    );
  };
}
function fw(n) {
  var r = n.reduce(function (e, t) {
    var a = e[t.name];
    return (
      (e[t.name] = a
        ? Object.assign({}, a, t, {
            options: Object.assign({}, a.options, t.options),
            data: Object.assign({}, a.data, t.data),
          })
        : t),
      e
    );
  }, {});
  return Object.keys(r).map(function (e) {
    return r[e];
  });
}
var xs = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function ks() {
  for (var n = arguments.length, r = new Array(n), e = 0; e < n; e++) r[e] = arguments[e];
  return !r.some(function (t) {
    return !(t && typeof t.getBoundingClientRect == 'function');
  });
}
function pw(n) {
  n === void 0 && (n = {});
  var r = n,
    e = r.defaultModifiers,
    t = e === void 0 ? [] : e,
    a = r.defaultOptions,
    i = a === void 0 ? xs : a;
  return function (l, s, u) {
    u === void 0 && (u = i);
    var c = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, xs, i),
        modifiersData: {},
        elements: { reference: l, popper: s },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      p = {
        state: c,
        setOptions: function (g) {
          var w = typeof g == 'function' ? g(c.options) : g;
          (m(),
            (c.options = Object.assign({}, i, c.options, w)),
            (c.scrollParents = {
              reference: Jt(l) ? Vn(l) : l.contextElement ? Vn(l.contextElement) : [],
              popper: Vn(s),
            }));
          var D = cw(fw([].concat(t, c.options.modifiers)));
          return (
            (c.orderedModifiers = D.filter(function (x) {
              return x.enabled;
            })),
            v(),
            p.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var g = c.elements,
              w = g.reference,
              D = g.popper;
            if (ks(w, D)) {
              ((c.rects = { reference: lw(w, rr(D), c.options.strategy === 'fixed'), popper: Fi(D) }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (I) {
                  return (c.modifiersData[I.name] = Object.assign({}, I.data));
                }));
              for (var x = 0; x < c.orderedModifiers.length; x++) {
                if (c.reset === !0) {
                  ((c.reset = !1), (x = -1));
                  continue;
                }
                var b = c.orderedModifiers[x],
                  C = b.fn,
                  k = b.options,
                  T = k === void 0 ? {} : k,
                  _ = b.name;
                typeof C == 'function' && (c = C({ state: c, options: T, name: _, instance: p }) || c);
              }
            }
          }
        },
        update: dw(function () {
          return new Promise(function (h) {
            (p.forceUpdate(), h(c));
          });
        }),
        destroy: function () {
          (m(), (f = !0));
        },
      };
    if (!ks(l, s)) return p;
    p.setOptions(u).then(function (h) {
      !f && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function v() {
      c.orderedModifiers.forEach(function (h) {
        var g = h.name,
          w = h.options,
          D = w === void 0 ? {} : w,
          x = h.effect;
        if (typeof x == 'function') {
          var b = x({ state: c, name: g, instance: p, options: D }),
            C = function () {};
          d.push(b || C);
        }
      });
    }
    function m() {
      (d.forEach(function (h) {
        return h();
      }),
        (d = []));
    }
    return p;
  };
}
var mw = [Lb, tw, Fb, Sb, Jb, Qb, aw, Eb, Gb],
  hw = pw({ defaultModifiers: mw });
const Qn = (n) => {
  const r = n.text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  return H.jsx('span', { dangerouslySetInnerHTML: { __html: r } });
};
Qn.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Markdown',
  props: {
    text: { required: !0, tsType: { name: 'string' }, description: '' },
    inline: { required: !1, tsType: { name: 'boolean' }, description: '' },
  },
};
function Ou(n) {
  const { colors: r, errors: e, help: t, isDirty: a, isFocused: i, isTyping: o } = n,
    l = !!e.length && !o && a,
    s = y.useRef(null),
    u = y.useRef(null);
  y.useEffect(() => {
    s.current && u.current && hw(s.current, u.current, { placement: 'top-start' });
  }, []);
  let c;
  l ? (c = (r == null ? void 0 : r.error) || Ne.ERROR) : i && (c = (r == null ? void 0 : r.accent) || Ne.ACCENT);
  const d = l ? e.join('<br/>') : t;
  return H.jsxs(y.Fragment, {
    children: [
      H.jsx('div', { className: De.hintTarget, ref: s }),
      H.jsxs('div', {
        className: De.hint,
        ref: u,
        style: { backgroundColor: c },
        children: [
          H.jsx(Qn, { text: (i && d) || '', inline: !0 }),
          H.jsx('div', { className: De.arrow, 'data-popper-arrow': !0 }),
        ],
      }),
    ],
  });
}
Ou.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Hint',
  props: {
    id: { required: !1, tsType: { name: 'string' }, description: '' },
    autocomplete: { required: !1, tsType: { name: 'string' }, description: '' },
    required: { required: !1, tsType: { name: 'boolean' }, description: '' },
    colors: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'object',
        raw: `{
  base?: string;
  accent?: string;
  error?: string;
}`,
        signature: {
          properties: [
            { key: 'base', value: { name: 'string', required: !1 } },
            { key: 'accent', value: { name: 'string', required: !1 } },
            { key: 'error', value: { name: 'string', required: !1 } },
          ],
        },
      },
      description: '',
    },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    extensions: {
      required: !1,
      tsType: { name: 'Array', elements: [{ name: 'string' }], raw: 'string[]' },
      description: '',
    },
    format: { required: !1, tsType: { name: 'string' }, description: '' },
    max: { required: !1, tsType: { name: 'number' }, description: '' },
    min: { required: !1, tsType: { name: 'number' }, description: '' },
    name: { required: !1, tsType: { name: 'F' }, description: '' },
    type: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'number' | 'text' | 'text-multiline' | 'select' | 'tags' | 'date' | 'files' | 'check' | 'password'",
        elements: [
          { name: 'literal', value: "'number'" },
          { name: 'literal', value: "'text'" },
          { name: 'literal', value: "'text-multiline'" },
          { name: 'literal', value: "'select'" },
          { name: 'literal', value: "'tags'" },
          { name: 'literal', value: "'date'" },
          { name: 'literal', value: "'files'" },
          { name: 'literal', value: "'check'" },
          { name: 'literal', value: "'password'" },
        ],
      },
      description: '',
    },
    options: {
      required: !1,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'intersection',
            raw: '{ value: T | string; label?: string } & { metadata?: any }',
            elements: [
              {
                name: 'signature',
                type: 'object',
                raw: '{ value: T | string; label?: string }',
                signature: {
                  properties: [
                    {
                      key: 'value',
                      value: {
                        name: 'union',
                        raw: 'T | string',
                        elements: [{ name: 'T' }, { name: 'string' }],
                        required: !0,
                      },
                    },
                    { key: 'label', value: { name: 'string', required: !1 } },
                  ],
                },
              },
              {
                name: 'signature',
                type: 'object',
                raw: '{ metadata?: any }',
                signature: { properties: [{ key: 'metadata', value: { name: 'any', required: !1 } }] },
              },
            ],
          },
        ],
        raw: 'FieldOption<T>[]',
      },
      description: '',
    },
    depth: { required: !1, tsType: { name: 'number' }, description: '' },
    help: { required: !1, tsType: { name: 'string' }, description: '' },
    label: { required: !1, tsType: { name: 'string' }, description: '' },
    size: { required: !1, tsType: { name: 'number' }, description: '' },
    icon: { required: !1, tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' }, description: '' },
    validator: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: T) => Promise<string[]>',
        signature: {
          arguments: [{ type: { name: 'T' }, name: 'value' }],
          return: {
            name: 'Promise',
            elements: [{ name: 'Array', elements: [{ name: 'string' }], raw: 'string[]' }],
            raw: 'Promise<string[]>',
          },
        },
      },
      description: '',
    },
    when: {
      required: !1,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'signature',
            type: 'function',
            raw: '(formValue: Partial<F>) => boolean | Promise<boolean>',
            signature: {
              arguments: [
                { type: { name: 'Partial', elements: [{ name: 'F' }], raw: 'Partial<F>' }, name: 'formValue' },
              ],
              return: {
                name: 'union',
                raw: 'boolean | Promise<boolean>',
                elements: [
                  { name: 'boolean' },
                  { name: 'Promise', elements: [{ name: 'boolean' }], raw: 'Promise<boolean>' },
                ],
              },
            },
          },
        ],
        raw: 'TCondition<F>[]',
      },
      description: '',
    },
    length: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(formValue: Partial<F>) => number',
        signature: {
          arguments: [{ type: { name: 'Partial', elements: [{ name: 'F' }], raw: 'Partial<F>' }, name: 'formValue' }],
          return: { name: 'number' },
        },
      },
      description: '',
    },
    fields: { required: !1, tsType: { name: 'Array', raw: "TForm<any>['fields']" }, description: '' },
    formValue: {
      required: !1,
      tsType: { name: 'Partial', elements: [{ name: 'F' }], raw: 'Partial<F>' },
      description: '',
    },
    onChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: T, isValid: boolean) => void',
        signature: {
          arguments: [
            { type: { name: 'T' }, name: 'value' },
            { type: { name: 'boolean' }, name: 'isValid' },
          ],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    value: {
      required: !0,
      tsType: { name: 'union', raw: 'T | undefined', elements: [{ name: 'T' }, { name: 'undefined' }] },
      description: '',
    },
    errors: {
      required: !0,
      tsType: { name: 'Array', elements: [{ name: 'string' }], raw: 'string[]' },
      description: '',
    },
    isFocused: { required: !0, tsType: { name: 'boolean' }, description: '' },
    isTyping: { required: !0, tsType: { name: 'boolean' }, description: '' },
    isDirty: { required: !0, tsType: { name: 'boolean' }, description: '' },
  },
};
function qi() {
  const n = y.useRef(!1);
  return (
    y.useEffect(
      () => (
        (n.current = !0),
        () => {
          n.current = !1;
        }
      ),
      []
    ),
    y.useCallback(() => n.current, [])
  );
}
const vw = 1e3;
function gw(n, r) {
  const e = qi(),
    [t, a] = y.useState([]),
    [i, o] = y.useState(!1),
    [l, s] = y.useState(!1),
    [u, c] = y.useState(!1),
    [d, f] = y.useState(n.value),
    p = y.useCallback(
      (P = n) => {
        var E;
        (E = P.validator) == null ||
          E.call(P, P.value).then((L) => {
            e() && a(L || []);
          });
      },
      [n.validator, n.value, e]
    );
  y.useImperativeHandle(r, () => ({ validate: () => p() }), [p]);
  const v = y.useRef(n.value);
  y.useEffect(() => {
    const P = v.current;
    P !== d && !(Number.isNaN(P) && Number.isNaN(d)) && ((v.current = n.value), f(n.value), p());
  }, [n.value]);
  const m = y.useRef(n.formValue);
  y.useEffect(() => {
    const P = Object.keys(m.current || {}).length && !Object.keys(n.formValue || {}).length;
    ((m.current = n.formValue), P && o(!1));
  }, [n.formValue]);
  const h = y.useCallback(
      async (P) => {
        setTimeout(() => {
          e() && c(!1);
        }, vw);
        const { validator: E } = n,
          L = (await (E == null ? void 0 : E(P))) || [];
        e() && (a(L), o(!0), c(!0), f(P), n.onChange(P, !L.length));
      },
      [n.validator, n.onChange, e]
    ),
    g = !!t.length && !u && i,
    w = () => {
      const { colors: P } = n;
      let E = 'inherit';
      return (
        g ? (E = (P == null ? void 0 : P.error) || Ne.ERROR) : l && (E = (P == null ? void 0 : P.accent) || Ne.ACCENT),
        H.jsx('div', {
          className: Ht({ [De.icon]: !0, [De.isFocused]: l, [De.isErrored]: g }),
          style: { color: E },
          children: g ? H.jsx(vu, {}) : H.jsx(gu, {}),
        })
      );
    },
    D = () => {
      const { help: P } = n;
      return H.jsx(sb, {
        ...n,
        hasHint: g || !!P,
        isErrored: g,
        isFocused: l,
        value: d,
        onChange: h,
        onFocus: () => s(!0),
        onBlur: () => s(!1),
      });
    },
    x = () => {
      const { colors: P, disabled: E, icon: L, id: B, label: N, name: R, required: Y } = n,
        q = !d;
      let X = 'inherit';
      return (
        g ? (X = (P == null ? void 0 : P.error) || Ne.ERROR) : l && (X = (P == null ? void 0 : P.accent) || Ne.ACCENT),
        H.jsxs('label', {
          className: Ht({ [De.isFocused]: l, [De.isEmpty]: q, [De.isDisabled]: E }),
          style: { color: X },
          htmlFor: B,
          children: [
            H.jsxs('span', {
              style: { flex: 1 },
              children: [
                L && H.jsx('span', { style: { fontSize: 'small', marginRight: '0.25em' }, children: L }),
                ' ',
                H.jsx(Qn, { inline: !0, text: N || R || '' }),
                ' ',
                Y && H.jsx('span', { children: '*' }),
              ],
            }),
            Array.isArray(d) && !!d.length && H.jsxs('span', { children: ['(', d.length, ')'] }),
          ],
        })
      );
    },
    b = () => {
      const { colors: P, id: E, label: L, name: B } = n;
      let N = 'inherit';
      g && (N = (P == null ? void 0 : P.error) || Ne.ERROR);
      const R = pu({ isErrored: g });
      return H.jsxs('div', {
        className: `${De.checkbox}`,
        style: { ...R, color: N, position: 'relative' },
        children: [
          D(),
          ' ',
          H.jsx('label', { htmlFor: E, children: H.jsx(Qn, { inline: !0, text: L || B || '' }) }),
          g && w(),
        ],
      });
    },
    { disabled: C, help: k, type: T } = n,
    _ = g || k,
    I = _ && l;
  return T === 'check'
    ? b()
    : H.jsxs('div', {
        className: Ht({ [De.field]: !0, [De.isErrored]: g, [De.isDisabled]: C }),
        children: [
          D(),
          x(),
          _ && w(),
          I && H.jsx(Ou, { ...n, errors: t, isDirty: i, isFocused: l, isTyping: u, value: d }),
        ],
      });
}
const _u = y.forwardRef(gw);
_u.__docgenInfo = {
  description: '',
  methods: [{ name: 'validate', docblock: null, modifiers: [], params: [], returns: null }],
  displayName: 'Field',
  props: {
    id: { required: !1, tsType: { name: 'string' }, description: '' },
    autocomplete: { required: !1, tsType: { name: 'string' }, description: '' },
    required: { required: !1, tsType: { name: 'boolean' }, description: '' },
    colors: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'object',
        raw: `{
  base?: string;
  accent?: string;
  error?: string;
}`,
        signature: {
          properties: [
            { key: 'base', value: { name: 'string', required: !1 } },
            { key: 'accent', value: { name: 'string', required: !1 } },
            { key: 'error', value: { name: 'string', required: !1 } },
          ],
        },
      },
      description: '',
    },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    extensions: {
      required: !1,
      tsType: { name: 'Array', elements: [{ name: 'string' }], raw: 'string[]' },
      description: '',
    },
    format: { required: !1, tsType: { name: 'string' }, description: '' },
    max: { required: !1, tsType: { name: 'number' }, description: '' },
    min: { required: !1, tsType: { name: 'number' }, description: '' },
    name: { required: !1, tsType: { name: 'F' }, description: '' },
    type: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'number' | 'text' | 'text-multiline' | 'select' | 'tags' | 'date' | 'files' | 'check' | 'password'",
        elements: [
          { name: 'literal', value: "'number'" },
          { name: 'literal', value: "'text'" },
          { name: 'literal', value: "'text-multiline'" },
          { name: 'literal', value: "'select'" },
          { name: 'literal', value: "'tags'" },
          { name: 'literal', value: "'date'" },
          { name: 'literal', value: "'files'" },
          { name: 'literal', value: "'check'" },
          { name: 'literal', value: "'password'" },
        ],
      },
      description: '',
    },
    options: {
      required: !1,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'intersection',
            raw: '{ value: T | string; label?: string } & { metadata?: any }',
            elements: [
              {
                name: 'signature',
                type: 'object',
                raw: '{ value: T | string; label?: string }',
                signature: {
                  properties: [
                    {
                      key: 'value',
                      value: {
                        name: 'union',
                        raw: 'T | string',
                        elements: [{ name: 'T' }, { name: 'string' }],
                        required: !0,
                      },
                    },
                    { key: 'label', value: { name: 'string', required: !1 } },
                  ],
                },
              },
              {
                name: 'signature',
                type: 'object',
                raw: '{ metadata?: any }',
                signature: { properties: [{ key: 'metadata', value: { name: 'any', required: !1 } }] },
              },
            ],
          },
        ],
        raw: 'FieldOption<T>[]',
      },
      description: '',
    },
    depth: { required: !1, tsType: { name: 'number' }, description: '' },
    help: { required: !1, tsType: { name: 'string' }, description: '' },
    label: { required: !1, tsType: { name: 'string' }, description: '' },
    size: { required: !1, tsType: { name: 'number' }, description: '' },
    icon: { required: !1, tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' }, description: '' },
    validator: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: T) => Promise<string[]>',
        signature: {
          arguments: [{ type: { name: 'T' }, name: 'value' }],
          return: {
            name: 'Promise',
            elements: [{ name: 'Array', elements: [{ name: 'string' }], raw: 'string[]' }],
            raw: 'Promise<string[]>',
          },
        },
      },
      description: '',
    },
    when: {
      required: !1,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'signature',
            type: 'function',
            raw: '(formValue: Partial<F>) => boolean | Promise<boolean>',
            signature: {
              arguments: [
                { type: { name: 'Partial', elements: [{ name: 'F' }], raw: 'Partial<F>' }, name: 'formValue' },
              ],
              return: {
                name: 'union',
                raw: 'boolean | Promise<boolean>',
                elements: [
                  { name: 'boolean' },
                  { name: 'Promise', elements: [{ name: 'boolean' }], raw: 'Promise<boolean>' },
                ],
              },
            },
          },
        ],
        raw: 'TCondition<F>[]',
      },
      description: '',
    },
    length: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(formValue: Partial<F>) => number',
        signature: {
          arguments: [{ type: { name: 'Partial', elements: [{ name: 'F' }], raw: 'Partial<F>' }, name: 'formValue' }],
          return: { name: 'number' },
        },
      },
      description: '',
    },
    fields: { required: !1, tsType: { name: 'Array', raw: "TForm<any>['fields']" }, description: '' },
    formValue: {
      required: !1,
      tsType: { name: 'Partial', elements: [{ name: 'F' }], raw: 'Partial<F>' },
      description: '',
    },
    onChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: T, isValid: boolean) => void',
        signature: {
          arguments: [
            { type: { name: 'T' }, name: 'value' },
            { type: { name: 'boolean' }, name: 'isValid' },
          ],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    value: { required: !1, tsType: { name: 'T' }, description: '' },
  },
};
const Pu = (n) => n.name || 'noname';
function Mr(n, r) {
  const e = ta(n);
  return (
    e.forEach((t, a) => {
      t.id = t.id || `${r}#${Pu(t)}`;
      const i = t.length ? `${t.id}#${a}` : t.id || '';
      t.fields && Mr(t.fields, i);
    }),
    e
  );
}
function Mu(n) {
  const r = qi(),
    e = y.useMemo(() => n.id || Pu({ name: 'myformid' }), [n.id]),
    [t, a] = y.useState(() => Mr(n.fields, e)),
    [i, o] = y.useState({ something: !1 }),
    [l, s] = y.useState(n.value || {}),
    u = y.useRef(i);
  u.current = i;
  const c = y.useRef(l);
  c.current = l;
  const d = y.useMemo(
      () =>
        ob(() => {
          const g = !Object.values(u.current).some((w) => !w);
          n.onChange(c.current, g);
        }, n.delay || 500),
      [n.onChange, n.delay]
    ),
    f = y.useCallback(
      (g, w = n.value) => {
        Promise.all(g.map(async (D) => (D.name ? await Eu(D, w == null ? void 0 : w[D.name], w) : []).length > 0)).then(
          (D) => {
            if (!r()) return;
            const x = {};
            (g.forEach((b, C) => {
              x[b.name] = !D[C];
            }),
              a(g),
              o(x),
              s(w || {}),
              d());
          }
        );
      },
      [r, d, n.value]
    );
  y.useEffect(() => {
    f(Mr(n.fields, e));
  }, []);
  const p = y.useRef({ fields: n.fields, value: n.value });
  y.useEffect(() => {
    const g = JSON.stringify(p.current.value) !== JSON.stringify(n.value),
      w = JSON.stringify(p.current.fields) !== JSON.stringify(n.fields);
    if (((p.current = { fields: n.fields, value: n.value }), g || w)) {
      const D = w ? Mr(n.fields, e) : t;
      f(D);
    }
  }, [n.value, n.fields]);
  const v = y.useCallback(
      (g, w, D) => {
        g.name &&
          (o((x) => {
            const b = { ...x, [g.name]: D };
            return ((u.current = b), b);
          }),
          s((x) => {
            const b = { ...x, [g.name]: w };
            return ((c.current = b), b);
          }),
          d());
      },
      [d]
    ),
    { colors: m } = n,
    h = yw(t);
  return H.jsx('div', {
    className: De.formelio,
    children: H.jsx('form', {
      id: e,
      children: h.map((g, w) =>
        H.jsx(
          'div',
          {
            className: De.group,
            style: {
              borderLeft: g.depth > 0 ? `solid 0.1em ${(m == null ? void 0 : m.accent) || Ne.ACCENT}20` : 'none',
              marginLeft: `${g.depth > 0 ? 0.5 + (g.depth - 1) : 0}em`,
              paddingLeft: `${g.depth > 0 ? 0.5 : 0}em`,
            },
            children: g.fields.map((D) =>
              H.jsx(
                y.Fragment,
                {
                  children: H.jsxs('div', {
                    className: Ht({ [De.fieldWrapper]: !0 }),
                    style: { flexBasis: (D.size || 1) * 100 + '%' },
                    children: [!D.name && ww(D, m), D.name && bw(D, l, v, n.colors)],
                  }),
                },
                `${g.depth}${D.name || D.label}${w}`
              )
            ),
          },
          w
        )
      ),
    }),
  });
}
const yw = (n) => {
  const r = [];
  let e = { depth: 0, fields: [] };
  return (
    n.forEach((t) => {
      (t.depth || 0) === e.depth ? e.fields.push(t) : (r.push(e), (e = { depth: t.depth || 0, fields: [t] }));
    }),
    r.push(e),
    r
  );
};
function bw(n, r, e, t) {
  switch (n.type) {
    case 'date':
      return H.jsx(on, { colors: t, field: n, formValue: r, onChange: e });
    case 'number':
      return H.jsx(on, { colors: t, field: n, formValue: r, onChange: e });
    case 'files':
      return H.jsx(on, { colors: t, field: n, formValue: r, onChange: e });
    case 'check':
      return H.jsx(on, { colors: t, field: n, formValue: r, onChange: e });
    case 'tags':
      return H.jsx(on, { colors: t, field: n, formValue: r, onChange: e });
    default:
      return H.jsx(on, { colors: t, field: n, formValue: r, onChange: e });
  }
}
const ww = (n, r) =>
  H.jsxs(y.Fragment, {
    children: [
      n.label &&
        H.jsxs('label', { style: { color: (r == null ? void 0 : r.accent) || Ne.ACCENT }, children: [n.label, ':'] }),
      n.help && H.jsx('p', { style: { fontSize: 'small' }, children: H.jsx(Qn, { text: n.help, inline: !0 }) }),
    ],
  });
function on(n) {
  const r = y.useRef(null),
    e = (a, i) => n.onChange(n.field, a, i),
    t = async (a) => Eu(n.field, a, n.formValue);
  return (
    y.useEffect(() => {
      var a;
      (a = r.current) == null || a.validate();
    }, [n.formValue]),
    H.jsx(_u, {
      ...n.field,
      colors: n.colors,
      formValue: n.formValue,
      ref: r,
      value: n.formValue[n.field.name],
      onChange: e,
      validator: t,
    })
  );
}
async function Eu(n, r, e) {
  return n.required && !r
    ? ['Required field']
    : !n.validator || !r
      ? []
      : (n.type === 'date' && typeof r == 'string' && (r = new Date(Date.parse(r))), n.validator(r, e || {}));
}
Mu.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'BasicForm',
  props: {
    id: { required: !1, tsType: { name: 'string' }, description: '' },
    delay: { required: !1, tsType: { name: 'number' }, description: '' },
    colors: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'object',
        raw: `{
  base?: string;
  accent?: string;
  error?: string;
}`,
        signature: {
          properties: [
            { key: 'base', value: { name: 'string', required: !1 } },
            { key: 'accent', value: { name: 'string', required: !1 } },
            { key: 'error', value: { name: 'string', required: !1 } },
          ],
        },
      },
      description: '',
    },
    fields: {
      required: !0,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'union',
            raw: `| (TField<string, T> & { type: 'text' })
| (TField<string, T> & { type: 'password' })
| (TField<string, T> & { type: 'text-multiline' })
| (TField<string, T> & { type: 'select' })
| (TField<string[], T> & { type: 'tags' })
| (TField<Date, T> & { type: 'date' })
| (TField<File[], T> & { type: 'files' })
| (TField<number, T> & { type: 'number' })
| (TField<boolean, T> & { type: 'check' })
| Omit<TField<string, T>, 'type'>`,
            elements: [
              { name: 'unknown' },
              { name: 'unknown' },
              { name: 'unknown' },
              { name: 'unknown' },
              { name: 'unknown' },
              { name: 'unknown' },
              { name: 'unknown' },
              { name: 'unknown' },
              { name: 'unknown' },
              {
                name: 'Omit',
                elements: [
                  {
                    name: 'intersection',
                    raw: `TInput<T> & {
  depth?: number;
  help?: string;
  label?: string;
  size?: number;
  icon?: React.ReactNode;
  name?: keyof F;
  validator?: TFieldValidator<T, F>;
  when?: TCondition<F>[];
  length?: (formValue: Partial<F>) => number;
  fields?: TForm<any>['fields'];
}`,
                    elements: [
                      {
                        name: 'signature',
                        type: 'object',
                        raw: `{
  id?: string;
  autocomplete?: string;
  required?: boolean;
  colors?: TColors;
  disabled?: boolean;
  extensions?: string[];
  format?: string;
  max?: number;
  min?: number;
  name?: string;
  type?: 'number' | 'text' | 'text-multiline' | 'select' | 'tags' | 'date' | 'files' | 'check' | 'password';
  options?: FieldOption<T>[];
}`,
                        signature: {
                          properties: [
                            { key: 'id', value: { name: 'string', required: !1 } },
                            { key: 'autocomplete', value: { name: 'string', required: !1 } },
                            { key: 'required', value: { name: 'boolean', required: !1 } },
                            {
                              key: 'colors',
                              value: {
                                name: 'signature',
                                type: 'object',
                                raw: `{
  base?: string;
  accent?: string;
  error?: string;
}`,
                                signature: {
                                  properties: [
                                    { key: 'base', value: { name: 'string', required: !1 } },
                                    { key: 'accent', value: { name: 'string', required: !1 } },
                                    { key: 'error', value: { name: 'string', required: !1 } },
                                  ],
                                },
                                required: !1,
                              },
                            },
                            { key: 'disabled', value: { name: 'boolean', required: !1 } },
                            {
                              key: 'extensions',
                              value: { name: 'Array', elements: [{ name: 'string' }], raw: 'string[]', required: !1 },
                            },
                            { key: 'format', value: { name: 'string', required: !1 } },
                            { key: 'max', value: { name: 'number', required: !1 } },
                            { key: 'min', value: { name: 'number', required: !1 } },
                            { key: 'name', value: { name: 'string', required: !1 } },
                            {
                              key: 'type',
                              value: {
                                name: 'union',
                                raw: "'number' | 'text' | 'text-multiline' | 'select' | 'tags' | 'date' | 'files' | 'check' | 'password'",
                                elements: [
                                  { name: 'literal', value: "'number'" },
                                  { name: 'literal', value: "'text'" },
                                  { name: 'literal', value: "'text-multiline'" },
                                  { name: 'literal', value: "'select'" },
                                  { name: 'literal', value: "'tags'" },
                                  { name: 'literal', value: "'date'" },
                                  { name: 'literal', value: "'files'" },
                                  { name: 'literal', value: "'check'" },
                                  { name: 'literal', value: "'password'" },
                                ],
                                required: !1,
                              },
                            },
                            {
                              key: 'options',
                              value: {
                                name: 'Array',
                                elements: [
                                  {
                                    name: 'intersection',
                                    raw: '{ value: T | string; label?: string } & { metadata?: any }',
                                    elements: [
                                      {
                                        name: 'signature',
                                        type: 'object',
                                        raw: '{ value: T | string; label?: string }',
                                        signature: {
                                          properties: [
                                            {
                                              key: 'value',
                                              value: {
                                                name: 'union',
                                                raw: 'T | string',
                                                elements: [{ name: 'string' }, { name: 'string' }],
                                                required: !0,
                                              },
                                            },
                                            { key: 'label', value: { name: 'string', required: !1 } },
                                          ],
                                        },
                                      },
                                      {
                                        name: 'signature',
                                        type: 'object',
                                        raw: '{ metadata?: any }',
                                        signature: {
                                          properties: [{ key: 'metadata', value: { name: 'any', required: !1 } }],
                                        },
                                      },
                                    ],
                                  },
                                ],
                                raw: 'FieldOption<T>[]',
                                required: !1,
                              },
                            },
                          ],
                        },
                      },
                      {
                        name: 'signature',
                        type: 'object',
                        raw: `{
  depth?: number;
  help?: string;
  label?: string;
  size?: number;
  icon?: React.ReactNode;
  name?: keyof F;
  validator?: TFieldValidator<T, F>;
  when?: TCondition<F>[];
  length?: (formValue: Partial<F>) => number;
  fields?: TForm<any>['fields'];
}`,
                        signature: {
                          properties: [
                            { key: 'depth', value: { name: 'number', required: !1 } },
                            { key: 'help', value: { name: 'string', required: !1 } },
                            { key: 'label', value: { name: 'string', required: !1 } },
                            { key: 'size', value: { name: 'number', required: !1 } },
                            { key: 'icon', value: { name: 'ReactReactNode', raw: 'React.ReactNode', required: !1 } },
                            { key: 'name', value: { name: 'T', required: !1 } },
                            {
                              key: 'validator',
                              value: {
                                name: 'signature',
                                type: 'function',
                                raw: '(value: T, otherValues: Partial<F>) => string[] | Promise<string[]>',
                                signature: {
                                  arguments: [
                                    { type: { name: 'string' }, name: 'value' },
                                    {
                                      type: { name: 'Partial', elements: [{ name: 'T' }], raw: 'Partial<F>' },
                                      name: 'otherValues',
                                    },
                                  ],
                                  return: {
                                    name: 'union',
                                    raw: 'string[] | Promise<string[]>',
                                    elements: [
                                      { name: 'Array', elements: [{ name: 'string' }], raw: 'string[]' },
                                      {
                                        name: 'Promise',
                                        elements: [{ name: 'Array', elements: [{ name: 'string' }], raw: 'string[]' }],
                                        raw: 'Promise<string[]>',
                                      },
                                    ],
                                  },
                                },
                                required: !1,
                              },
                            },
                            {
                              key: 'when',
                              value: {
                                name: 'Array',
                                elements: [
                                  {
                                    name: 'signature',
                                    type: 'function',
                                    raw: '(formValue: Partial<F>) => boolean | Promise<boolean>',
                                    signature: {
                                      arguments: [
                                        {
                                          type: { name: 'Partial', elements: [{ name: 'T' }], raw: 'Partial<F>' },
                                          name: 'formValue',
                                        },
                                      ],
                                      return: {
                                        name: 'union',
                                        raw: 'boolean | Promise<boolean>',
                                        elements: [
                                          { name: 'boolean' },
                                          { name: 'Promise', elements: [{ name: 'boolean' }], raw: 'Promise<boolean>' },
                                        ],
                                      },
                                    },
                                  },
                                ],
                                raw: 'TCondition<F>[]',
                                required: !1,
                              },
                            },
                            {
                              key: 'length',
                              value: {
                                name: 'signature',
                                type: 'function',
                                raw: '(formValue: Partial<F>) => number',
                                signature: {
                                  arguments: [
                                    {
                                      type: { name: 'Partial', elements: [{ name: 'T' }], raw: 'Partial<F>' },
                                      name: 'formValue',
                                    },
                                  ],
                                  return: { name: 'number' },
                                },
                                required: !1,
                              },
                            },
                            { key: 'fields', value: { name: 'Array', raw: "TForm<any>['fields']", required: !1 } },
                          ],
                        },
                      },
                    ],
                  },
                  { name: 'literal', value: "'type'" },
                ],
                raw: "Omit<TField<string, T>, 'type'>",
              },
            ],
          },
        ],
        raw: 'TypedTField<T>[]',
      },
      description: '',
    },
    onChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: Partial<T>, isValid: boolean) => void',
        signature: {
          arguments: [
            { type: { name: 'Partial', elements: [{ name: 'T' }], raw: 'Partial<T>' }, name: 'value' },
            { type: { name: 'boolean' }, name: 'isValid' },
          ],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    value: { required: !1, tsType: { name: 'Partial', elements: [{ name: 'T' }], raw: 'Partial<T>' }, description: '' },
  },
};
function Dw(n) {
  const r = qi(),
    [e, t] = y.useState(() => Ru(n.fields)),
    [a, i] = y.useState(() => ii(n.value || {})),
    o = y.useCallback(
      async (u, c) => {
        const d = await Er(n.fields, u);
        if (!r()) return;
        const f = xw(u, d);
        (t(d), i(f), n.onChange(oi(f), c));
      },
      [n.fields, n.onChange]
    );
  y.useEffect(() => {
    Er(n.fields, n.value).then((u) => {
      r() && t(u);
    });
  }, []);
  const l = y.useRef(n.value),
    s = y.useRef(n.fields);
  return (
    y.useEffect(() => {
      if (l.current !== n.value || s.current !== n.fields) {
        ((l.current = n.value), (s.current = n.fields));
        const u = ii(n.value || {});
        (i(u),
          Er(n.fields, n.value).then((c) => {
            r() && t(c);
          }));
      }
    }, [n.value, n.fields]),
    H.jsx(Mu, { ...n, fields: e, value: a, onChange: o })
  );
}
function Ru(n) {
  return n.filter((r) => !r.when).map((r) => (r.fields ? { ...r, fields: Ru(r.fields) } : r));
}
async function Er(n, r = {}, e = 0) {
  let t = [];
  const a = async (i) => {
    let o = !1;
    if (i.when) {
      const s = i.when.map((c) => c(oi(r) || {}));
      o = (await Promise.all(s)).every((c) => !!c);
    } else o = !0;
    if (!o) return;
    if (i.validator) {
      const s = i.validator;
      i.validator = (u, c) => s(u, oi(c));
    }
    if (!i.fields) {
      t.push(i);
      return;
    }
    let l = await Er(i.fields || [], r, (i.depth || 0) + 1);
    if (i.length) {
      const s = i.length(r || {});
      for (let u = 0; u < s; u++) {
        t.push({ depth: i.depth || 0, label: `${i.label || i.name} (${u + 1})` });
        for (const c of l)
          await a({
            ...c,
            depth: (c.depth || 0) - 1,
            label: c.label || c.name,
            name: c.name && `${i.name}.${u}.${c.name}`,
          });
      }
    } else {
      t.push({ depth: i.depth, label: `${i.label || i.name}` });
      for (const s of l)
        await a({ ...s, depth: s.depth || 0, label: s.label || s.name, name: s.name && `${i.name}.${s.name}` });
    }
  };
  for (const i of n) await a({ ...i, depth: e });
  return t;
}
function xw(n, r) {
  const e = r.reduce((a, i) => (i.name && (a[i.name] = !0), a), {}),
    t = ta(n);
  return (
    Object.keys(t).forEach((a) => {
      e[a] || delete t[a];
    }),
    t
  );
}
Dw.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Form',
  props: {
    id: { required: !1, tsType: { name: 'string' }, description: '' },
    delay: { required: !1, tsType: { name: 'number' }, description: '' },
    colors: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'object',
        raw: `{
  base?: string;
  accent?: string;
  error?: string;
}`,
        signature: {
          properties: [
            { key: 'base', value: { name: 'string', required: !1 } },
            { key: 'accent', value: { name: 'string', required: !1 } },
            { key: 'error', value: { name: 'string', required: !1 } },
          ],
        },
      },
      description: '',
    },
    fields: {
      required: !0,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'union',
            raw: `| (TField<string, T> & { type: 'text' })
| (TField<string, T> & { type: 'password' })
| (TField<string, T> & { type: 'text-multiline' })
| (TField<string, T> & { type: 'select' })
| (TField<string[], T> & { type: 'tags' })
| (TField<Date, T> & { type: 'date' })
| (TField<File[], T> & { type: 'files' })
| (TField<number, T> & { type: 'number' })
| (TField<boolean, T> & { type: 'check' })
| Omit<TField<string, T>, 'type'>`,
            elements: [
              { name: 'unknown' },
              { name: 'unknown' },
              { name: 'unknown' },
              { name: 'unknown' },
              { name: 'unknown' },
              { name: 'unknown' },
              { name: 'unknown' },
              { name: 'unknown' },
              { name: 'unknown' },
              {
                name: 'Omit',
                elements: [
                  {
                    name: 'intersection',
                    raw: `TInput<T> & {
  depth?: number;
  help?: string;
  label?: string;
  size?: number;
  icon?: React.ReactNode;
  name?: keyof F;
  validator?: TFieldValidator<T, F>;
  when?: TCondition<F>[];
  length?: (formValue: Partial<F>) => number;
  fields?: TForm<any>['fields'];
}`,
                    elements: [
                      {
                        name: 'signature',
                        type: 'object',
                        raw: `{
  id?: string;
  autocomplete?: string;
  required?: boolean;
  colors?: TColors;
  disabled?: boolean;
  extensions?: string[];
  format?: string;
  max?: number;
  min?: number;
  name?: string;
  type?: 'number' | 'text' | 'text-multiline' | 'select' | 'tags' | 'date' | 'files' | 'check' | 'password';
  options?: FieldOption<T>[];
}`,
                        signature: {
                          properties: [
                            { key: 'id', value: { name: 'string', required: !1 } },
                            { key: 'autocomplete', value: { name: 'string', required: !1 } },
                            { key: 'required', value: { name: 'boolean', required: !1 } },
                            {
                              key: 'colors',
                              value: {
                                name: 'signature',
                                type: 'object',
                                raw: `{
  base?: string;
  accent?: string;
  error?: string;
}`,
                                signature: {
                                  properties: [
                                    { key: 'base', value: { name: 'string', required: !1 } },
                                    { key: 'accent', value: { name: 'string', required: !1 } },
                                    { key: 'error', value: { name: 'string', required: !1 } },
                                  ],
                                },
                                required: !1,
                              },
                            },
                            { key: 'disabled', value: { name: 'boolean', required: !1 } },
                            {
                              key: 'extensions',
                              value: { name: 'Array', elements: [{ name: 'string' }], raw: 'string[]', required: !1 },
                            },
                            { key: 'format', value: { name: 'string', required: !1 } },
                            { key: 'max', value: { name: 'number', required: !1 } },
                            { key: 'min', value: { name: 'number', required: !1 } },
                            { key: 'name', value: { name: 'string', required: !1 } },
                            {
                              key: 'type',
                              value: {
                                name: 'union',
                                raw: "'number' | 'text' | 'text-multiline' | 'select' | 'tags' | 'date' | 'files' | 'check' | 'password'",
                                elements: [
                                  { name: 'literal', value: "'number'" },
                                  { name: 'literal', value: "'text'" },
                                  { name: 'literal', value: "'text-multiline'" },
                                  { name: 'literal', value: "'select'" },
                                  { name: 'literal', value: "'tags'" },
                                  { name: 'literal', value: "'date'" },
                                  { name: 'literal', value: "'files'" },
                                  { name: 'literal', value: "'check'" },
                                  { name: 'literal', value: "'password'" },
                                ],
                                required: !1,
                              },
                            },
                            {
                              key: 'options',
                              value: {
                                name: 'Array',
                                elements: [
                                  {
                                    name: 'intersection',
                                    raw: '{ value: T | string; label?: string } & { metadata?: any }',
                                    elements: [
                                      {
                                        name: 'signature',
                                        type: 'object',
                                        raw: '{ value: T | string; label?: string }',
                                        signature: {
                                          properties: [
                                            {
                                              key: 'value',
                                              value: {
                                                name: 'union',
                                                raw: 'T | string',
                                                elements: [{ name: 'string' }, { name: 'string' }],
                                                required: !0,
                                              },
                                            },
                                            { key: 'label', value: { name: 'string', required: !1 } },
                                          ],
                                        },
                                      },
                                      {
                                        name: 'signature',
                                        type: 'object',
                                        raw: '{ metadata?: any }',
                                        signature: {
                                          properties: [{ key: 'metadata', value: { name: 'any', required: !1 } }],
                                        },
                                      },
                                    ],
                                  },
                                ],
                                raw: 'FieldOption<T>[]',
                                required: !1,
                              },
                            },
                          ],
                        },
                      },
                      {
                        name: 'signature',
                        type: 'object',
                        raw: `{
  depth?: number;
  help?: string;
  label?: string;
  size?: number;
  icon?: React.ReactNode;
  name?: keyof F;
  validator?: TFieldValidator<T, F>;
  when?: TCondition<F>[];
  length?: (formValue: Partial<F>) => number;
  fields?: TForm<any>['fields'];
}`,
                        signature: {
                          properties: [
                            { key: 'depth', value: { name: 'number', required: !1 } },
                            { key: 'help', value: { name: 'string', required: !1 } },
                            { key: 'label', value: { name: 'string', required: !1 } },
                            { key: 'size', value: { name: 'number', required: !1 } },
                            { key: 'icon', value: { name: 'ReactReactNode', raw: 'React.ReactNode', required: !1 } },
                            { key: 'name', value: { name: 'T', required: !1 } },
                            {
                              key: 'validator',
                              value: {
                                name: 'signature',
                                type: 'function',
                                raw: '(value: T, otherValues: Partial<F>) => string[] | Promise<string[]>',
                                signature: {
                                  arguments: [
                                    { type: { name: 'string' }, name: 'value' },
                                    {
                                      type: { name: 'Partial', elements: [{ name: 'T' }], raw: 'Partial<F>' },
                                      name: 'otherValues',
                                    },
                                  ],
                                  return: {
                                    name: 'union',
                                    raw: 'string[] | Promise<string[]>',
                                    elements: [
                                      { name: 'Array', elements: [{ name: 'string' }], raw: 'string[]' },
                                      {
                                        name: 'Promise',
                                        elements: [{ name: 'Array', elements: [{ name: 'string' }], raw: 'string[]' }],
                                        raw: 'Promise<string[]>',
                                      },
                                    ],
                                  },
                                },
                                required: !1,
                              },
                            },
                            {
                              key: 'when',
                              value: {
                                name: 'Array',
                                elements: [
                                  {
                                    name: 'signature',
                                    type: 'function',
                                    raw: '(formValue: Partial<F>) => boolean | Promise<boolean>',
                                    signature: {
                                      arguments: [
                                        {
                                          type: { name: 'Partial', elements: [{ name: 'T' }], raw: 'Partial<F>' },
                                          name: 'formValue',
                                        },
                                      ],
                                      return: {
                                        name: 'union',
                                        raw: 'boolean | Promise<boolean>',
                                        elements: [
                                          { name: 'boolean' },
                                          { name: 'Promise', elements: [{ name: 'boolean' }], raw: 'Promise<boolean>' },
                                        ],
                                      },
                                    },
                                  },
                                ],
                                raw: 'TCondition<F>[]',
                                required: !1,
                              },
                            },
                            {
                              key: 'length',
                              value: {
                                name: 'signature',
                                type: 'function',
                                raw: '(formValue: Partial<F>) => number',
                                signature: {
                                  arguments: [
                                    {
                                      type: { name: 'Partial', elements: [{ name: 'T' }], raw: 'Partial<F>' },
                                      name: 'formValue',
                                    },
                                  ],
                                  return: { name: 'number' },
                                },
                                required: !1,
                              },
                            },
                            { key: 'fields', value: { name: 'Array', raw: "TForm<any>['fields']", required: !1 } },
                          ],
                        },
                      },
                    ],
                  },
                  { name: 'literal', value: "'type'" },
                ],
                raw: "Omit<TField<string, T>, 'type'>",
              },
            ],
          },
        ],
        raw: 'TypedTField<T>[]',
      },
      description: '',
    },
    onChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: Partial<T>, isValid: boolean) => void',
        signature: {
          arguments: [
            { type: { name: 'Partial', elements: [{ name: 'T' }], raw: 'Partial<T>' }, name: 'value' },
            { type: { name: 'boolean' }, name: 'isValid' },
          ],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    value: { required: !1, tsType: { name: 'Partial', elements: [{ name: 'T' }], raw: 'Partial<T>' }, description: '' },
  },
};
export { Dw as F, ta as c };
