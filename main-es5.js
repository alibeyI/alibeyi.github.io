(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!-- Navbar-->\n    <header class=\"header\">\n      <nav\n        class=\"navbar navbar-expand-md   py-3 bg-light  d-flex justify-content-center\"\n      >\n        <div class=\"container\">\n          <a\n            href=\"#\"\n            class=\"navbar-brand text-uppercase font-weight-bold text-dark \"\n            style=\"font-size: x-large;\"\n            >Surf co.</a\n          >\n          <!-- <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler navbar-toggler-right\"><i class=\"fa fa-bars\"></i></button> -->\n  \n          <div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\">\n            <ul class=\"navbar-nav ml-5 mr-5\">\n              <li class=\"nav-item\">\n                <a href=\"#\" id=\"surfer\" class=\" nav-link text-lowercase font-weight-bold\"\n                  >Home <span class=\"sr-only\">(current)</span></a\n                >\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"#\" id=\"surfer\" class=\" nav-link text-uppercase font-weight-bold\"\n                  >About</a\n                >\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"#\" id=\"surfer\" class=\" nav-link text-uppercase font-weight-bold\"\n                  >Gallery</a\n                >\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"#\" id=\"surfer\" class=\" nav-link text-uppercase font-weight-bold\"\n                  >Portfolio</a\n                >\n              </li>\n              <li class=\"nav-item\">\n                <a href=\"#\" id=\"surfer\" class=\" nav-link text-uppercase font-weight-bold\"\n                  >Contact</a\n                >\n              </li>\n              <li class=\"nav-item ml-5\"><i class=\"fab fa-facebook\"></i></li>\n              <li class=\"nav-item ml-5\"><i class=\"fab fa-instagram\"></i></li>\n              <li class=\"nav-item ml-5\"><i class=\"fas fa-envelope\"></i></li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n    </header>\n    <!-- body -->\n    <div  class=\"clearfix\"></div>\n    <div class=\"mainbox\">\n     \n      <div class=\"container\">\n        <div class=\"d-flex\">\n          <div class=\"firstbox\" >\n            <img [src]=\"products.image\" alt=\"Surfboard\">\n          </div>\n          <div class=\"secondbox\" >\n            <h3>{{products.name}}</h3>\n            <br>\n            <div class=\"container\">\n              <div class=\"starrating risingstar  flex-row-reverse\">\n                  <input  id=\"star5\"  /><label for=\"star5\" ><i class=\"fas fa-star\"></i></label>\n                  <input type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\" /><label for=\"star4\" title=\"4 star\"><i class=\"fas fa-star\"></i></label>\n                  <input type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\" /><label for=\"star3\" title=\"3 star\"><i class=\"fas fa-star\"></i></label>\n                  <input type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\" /><label for=\"star2\" title=\"2 star\"><i class=\"fas fa-star\"></i></label>\n                  <input type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\" /><label for=\"star1\" title=\"1 star\"><i class=\"fas fa-star\"></i></label>\n                  <span>Reviews: {{products.reviews}}</span>\n              </div>\n        </div>\t\n            <!-- <ul class=\"nav nav-tabs routerL\">\n              <li class=\"nav-item \">\n                <a class=\"nav-link\" href=\"#\">Description</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">Feature</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">Dimention</a>\n              </li>\n            </ul> -->\n            <mat-tab-group>\n              <mat-tab label=\"Description\">\n                 <p class=\"textS\">{{products.description}}</p>\n            </mat-tab>\n              <mat-tab label=\"Features\"><h4>{{products.features}}</h4></mat-tab>\n              <mat-tab label=\"Dimensions\">{{products.dimensions}}</mat-tab>\n            </mat-tab-group>\n            \n            <div class=\"foot\">\n              <div class=\"price\">\n                <p> {{ products.price | currency:'USD' }}</p>\n              </div>\n              <div class=\"buton\">\n                <button class=\"btn btn-primary\">Buy</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        \n\n      </div>\n    </div>\n  \n  </div>\n  \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/surf-board/surf-board.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/surf-board/surf-board.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSurfBoardSurfBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"container bg-light\">\n    <h3>Tabs With Dropdown Menu</h3>\n    <ul class=\"nav nav-tabs\">\n      <li class=\"active\"><a href=\"#\">Home</a></li>\n      <li class=\"dropdown\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Menu 1 <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Submenu 1-1</a></li>\n          <li><a href=\"#\">Submenu 1-2</a></li>\n          <li><a href=\"#\">Submenu 1-3</a></li>                        \n        </ul>\n      </li>\n      <li><a href=\"#\">Menu 2</a></li>\n      <li><a href=\"#\">Menu 3</a></li>\n    </ul>\n  </div>\n   -->\n   <div>\n       <div class=\"back\"></div>\n   </div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    const routes = [];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-item{\r\n    border: 1px transparent solid;\r\n\r\n}\r\n.navbar-expand-md::after{\r\n    content: \"\";\r\n    background-color: white;\r\n    opacity: 0.5;\r\n    z-index: -99; \r\n}\r\n.nav-item:hover{\r\n    background-color: rgb(66, 139, 228);\r\n    color: white;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n#navbarSupportedContent{\r\n    margin-left: 200px;\r\n}\r\n.header{\r\n width: 100%;\r\n}\r\n.fab{\r\n    margin: 5px;\r\n    font-weight: bold;\r\n    font-size: 33px !important;\r\n    border-radius: 100px;\r\n}\r\n.fas{\r\n    margin: 5px;\r\n    font-weight: bold;\r\n    font-size: 33px !important;\r\n    border-radius: 100px;\r\n\r\n}\r\n.fa-star{\r\n    font-size: 10px;\r\n}\r\n.diff{\r\n    margin-top: 300px;\r\n    margin-left: 700px;\r\n    width: 400px;\r\n}\r\n.mainbox{\r\n    padding: 200px 0px 200px 0px;\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n.firstbox{\r\n    width: 50%;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    background-color: white;\r\n    padding: 30px 0px 30px;\r\n    position: relative;\r\n}\r\n.firstbox::before{\r\n    content: '';\r\n    background-color:#00D2FF;\r\n    height: 560px;\r\n    width: 500px;\r\n    z-index: 1;\r\n    left: 0px ;\r\n    top: 0px;\r\n    position: absolute;\r\n    -webkit-clip-path: polygon(0 0, 0 100%, 100% 0);\r\n            clip-path: polygon(0 0, 0 100%, 100% 0);\r\n    \r\n}\r\n.firstbox img{\r\n    height: 500px;\r\n    width: 500px;\r\n    z-index: 99;\r\n}\r\n.secondbox{\r\n    width: 50%;\r\n    background-color: white;\r\n}\r\nh1[alt=\"Simple\"] {color: white;}\r\na[href], a[href]:hover {color: grey; font-size: 0.5em; text-decoration: none}\r\n.starrating > input {display: none;}\r\n/* Remove radio buttons */\r\n.starrating > label:before { \r\n  content: \"\\f005\"; /* Star */\r\n  margin: 2px;\r\n  font-size: 1px;\r\n  display: inline-block; \r\n}\r\n.starrating > label\r\n{\r\n  color: #222222; /* Start color when not clicked */\r\n}\r\n.starrating > input:checked ~ label\r\n{ color: #ffca08 ; }\r\n/* Set yellow color when star checked */\r\n.starrating > input:hover ~ label\r\n{ color: #ffca08 ;  }\r\n/* Set yellow color when star hover */\r\n.routerL li a{\r\n    font-size: 15px;\r\n}\r\n.foot{\r\n    position: relative;\r\n    float: left;\r\n}\r\n.price{\r\n    margin-top: 100px;\r\n    float: left;\r\n    margin-right: 50px;\r\n}\r\n.buton{\r\n    margin-top: 100px;\r\n    float: left;\r\n}\r\n.textS{\r\n    border: 1px solid transparent;\r\n  padding: 10px;\r\n  width: 500px;\r\n  height: 200px;\r\n  text-align: justify;\r\n}\r\n#surfer{\r\n    font-size: 22px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7O0FBRWpDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLHdCQUFnQjtJQUFoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLG9CQUFvQjs7QUFFeEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLFVBQVU7SUFDVixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLCtDQUF1QztZQUF2Qyx1Q0FBdUM7O0FBRTNDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjtBQUNBLGtCQUFrQixZQUFZLENBQUM7QUFDL0Isd0JBQXdCLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUI7QUFDNUUscUJBQXFCLGFBQWEsQ0FBQztBQUFHLHlCQUF5QjtBQUUvRDtFQUNFLGdCQUFnQixFQUFFLFNBQVM7RUFDM0IsV0FBVztFQUNYLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFFQTs7RUFFRSxjQUFjLEVBQUUsaUNBQWlDO0FBQ25EO0FBRUE7RUFDRSxlQUFlLEVBQUU7QUFBRSx1Q0FBdUM7QUFFNUQ7RUFDRSxlQUFlLEdBQUc7QUFBRSxxQ0FBcUM7QUFFM0Q7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksNkJBQTZCO0VBQy9CLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1pdGVte1xyXG4gICAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQgc29saWQ7XHJcblxyXG59XHJcbi5uYXZiYXItZXhwYW5kLW1kOjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIHotaW5kZXg6IC05OTsgXHJcbn0gXHJcbi5uYXYtaXRlbTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgMTM5LCAyMjgpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4jbmF2YmFyU3VwcG9ydGVkQ29udGVudHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG4uaGVhZGVye1xyXG4gd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZhYntcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMzcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcbi5mYXN7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHJcbn1cclxuLmZhLXN0YXJ7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLmRpZmZ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MDBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxufVxyXG4ubWFpbmJveHtcclxuICAgIHBhZGRpbmc6IDIwMHB4IDBweCAyMDBweCAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmZpcnN0Ym94e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDBweCAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5maXJzdGJveDo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMEQyRkY7XHJcbiAgICBoZWlnaHQ6IDU2MHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDBweCA7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDAgMTAwJSwgMTAwJSAwKTtcclxuICAgIFxyXG59XHJcbi5maXJzdGJveCBpbWd7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgei1pbmRleDogOTk7XHJcbn1cclxuLnNlY29uZGJveHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5oMVthbHQ9XCJTaW1wbGVcIl0ge2NvbG9yOiB3aGl0ZTt9XHJcbmFbaHJlZl0sIGFbaHJlZl06aG92ZXIge2NvbG9yOiBncmV5OyBmb250LXNpemU6IDAuNWVtOyB0ZXh0LWRlY29yYXRpb246IG5vbmV9XHJcbi5zdGFycmF0aW5nID4gaW5wdXQge2Rpc3BsYXk6IG5vbmU7fSAgLyogUmVtb3ZlIHJhZGlvIGJ1dHRvbnMgKi9cclxuXHJcbi5zdGFycmF0aW5nID4gbGFiZWw6YmVmb3JlIHsgXHJcbiAgY29udGVudDogXCJcXGYwMDVcIjsgLyogU3RhciAqL1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbn1cclxuXHJcbi5zdGFycmF0aW5nID4gbGFiZWxcclxue1xyXG4gIGNvbG9yOiAjMjIyMjIyOyAvKiBTdGFydCBjb2xvciB3aGVuIG5vdCBjbGlja2VkICovXHJcbn1cclxuXHJcbi5zdGFycmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsXHJcbnsgY29sb3I6ICNmZmNhMDggOyB9IC8qIFNldCB5ZWxsb3cgY29sb3Igd2hlbiBzdGFyIGNoZWNrZWQgKi9cclxuXHJcbi5zdGFycmF0aW5nID4gaW5wdXQ6aG92ZXIgfiBsYWJlbFxyXG57IGNvbG9yOiAjZmZjYTA4IDsgIH0gLyogU2V0IHllbGxvdyBjb2xvciB3aGVuIHN0YXIgaG92ZXIgKi9cclxuXHJcbi5yb3V0ZXJMIGxpIGF7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmZvb3R7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4ucHJpY2V7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcbi5idXRvbntcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnRleHRTe1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbiNzdXJmZXJ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/data.service.ts");

    let AppComponent = class AppComponent {
      constructor(dataService) {
        this.dataService = dataService;
        this.URL = 'http://salimov.site/mahammad/frontend-test/shark-eater.json';
        this.prod = "http://localhost:3000/products";
      }

      ngOnInit() {
        return this.dataService.getData().subscribe(data => {
          this.products = data;
          console.log(this.products);
        });
      }

    };

    AppComponent.ctorParameters = () => [{
      type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
    }];

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _surf_board_surf_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./surf-board/surf-board.component */
    "./src/app/surf-board/surf-board.component.ts");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/data.service.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _surf_board_surf_board_component__WEBPACK_IMPORTED_MODULE_7__["SurfBoardComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__["CdkTreeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]],
      providers: [_data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/data.service.ts":
  /*!*********************************!*\
    !*** ./src/app/data.service.ts ***!
    \*********************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let DataService = class DataService {
      constructor(http) {
        this.http = http;
        this.apiUrl = "/mahammad/frontend-test/shark-eater.json";
        this.Url = '/mahammad/frontend-test/shark-eater.json';
      }

      getData() {
        return this.http.get(this.apiUrl);
      }

    };

    DataService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/app/surf-board/surf-board.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/surf-board/surf-board.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSurfBoardSurfBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cmYtYm9hcmQvc3VyZi1ib2FyZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/surf-board/surf-board.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/surf-board/surf-board.component.ts ***!
    \****************************************************/

  /*! exports provided: SurfBoardComponent */

  /***/
  function srcAppSurfBoardSurfBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurfBoardComponent", function () {
      return SurfBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SurfBoardComponent = class SurfBoardComponent {
      constructor() {}

      ngOnInit() {}

    };
    SurfBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-surf-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./surf-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/surf-board/surf-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./surf-board.component.css */
      "./src/app/surf-board/surf-board.component.css")).default]
    })], SurfBoardComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\ng2apps\intervue\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map