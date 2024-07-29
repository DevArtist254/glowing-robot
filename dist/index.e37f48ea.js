// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hycaY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _model = require("./model");
var _introView = require("./View/introView");
var _introViewDefault = parcelHelpers.interopDefault(_introView);
var _activityView = require("./View/activityView");
var _activityViewDefault = parcelHelpers.interopDefault(_activityView);
var _userView = require("./View/userView");
var _userViewDefault = parcelHelpers.interopDefault(_userView);
var _notesView = require("./View/notesView");
var _notesViewDefault = parcelHelpers.interopDefault(_notesView);
const userActivity = function() {
    _model.setUserModel((0, _userViewDefault.default).userInfo());
    (0, _userViewDefault.default).updateUI();
    (0, _introViewDefault.default).updateUI(_model.state.users);
};
const phaseEntry = function() {
    _model.setActivityPhase((0, _activityViewDefault.default).getPhase());
    (0, _activityViewDefault.default).generatePhaseMarkup(_model.state.phases);
    console.log(_model.state.phases);
};
const notesEntry = function() {
    console.log("1");
};
const init = function() {
    (0, _userViewDefault.default).getUserInfo(userActivity);
    (0, _activityViewDefault.default).submitNewPhase(phaseEntry);
    (0, _notesViewDefault.default).addNotes(notesEntry);
};
init();

},{"./View/userView":"i1cKk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./model":"Y4A21","./View/introView":"2IOc6","./View/activityView":"68aQa","./View/notesView":"cfLv5"}],"i1cKk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class UserView {
    _activityUser = document.querySelector("#activityUser");
    _user = document.querySelector("#user");
    _date = document.querySelector("#date");
    _userInfo = document.querySelector(".popup__submit");
    _popup = document.querySelector(".popup");
    _main = document.querySelector("main");
    getUserInfo(handler) {
        this._userInfo.addEventListener("click", handler);
    }
    updateUI() {
        this._popup.style.display = "none";
        this._main.style.display = "flex";
    }
    userInfo() {
        const userObj = {};
        userObj.activity = this._activityUser.value;
        userObj.user = this._user.value;
        userObj.date = this._date.value;
        return userObj;
    }
}
exports.default = new UserView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "setUserModel", ()=>setUserModel);
parcelHelpers.export(exports, "setActivityPhase", ()=>setActivityPhase);
parcelHelpers.export(exports, "createNotes", ()=>createNotes);
var _uuid = require("uuid");
const state = {
    users: {
        user: "",
        date: "",
        activity: ""
    },
    phases: [],
    notes: [],
    note: {
        note: "",
        noteId: "",
        done: 0
    }
};
const setUserModel = function(newUser) {
    const { user, date, activity } = newUser;
    state.users = {
        user,
        date,
        activity
    };
};
const setActivityPhase = function(newPhase) {
    const { date, activity, order } = newPhase;
    const phase = {
        phaseId: (0, _uuid.v1)(),
        date,
        percentageDone: 0,
        order,
        activity
    };
    state.phases.push(phase);
};
const createNotes = function(note, done, id) {
    const newNote = {
        note,
        done
    };
    state.users.phases.find((el)=>el.phaseId === id).notes.push(newNote);
}; // const state2 = {
 //   userId: "62731945",
 //   user: "Kevin Wasonga",
 //   date: "2024-07-22",
 //   activity: "Home remodel",
 //   phases: [
 //     {
 //       phaseId: "62731945",
 //       dateDealine: "2024-07-18",
 //       percentageDone: 100,
 //       order: 1,
 //       notes: [
 //         {
 //           note: "Milk cow",
 //           done: 1,
 //         },
 //         {
 //           note: "Watch tv",
 //           done: 0,
 //         },
 //         {
 //           note: "Build a chair",
 //           done: 1,
 //         },
 //       ],
 //     },
 //     {
 //       phaseId: "62731946",
 //       dateDealine: "2024-07-18",
 //       percentageDone: 100,
 //       order: 1,
 //       notes: [
 //         {
 //           note: "Milk cow",
 //           done: 1,
 //         },
 //         {
 //           note: "Watch tv",
 //           done: 0,
 //         },
 //         {
 //           note: "Build a chair",
 //           done: 1,
 //         },
 //       ],
 //     },
 //   ],
 // };
 // createNotes("love island", 0, "62731946");
 // createNotes("Read a book", 0, "62731946");
 // console.log(state2);
 // function stateSetter() {
 //   user = {
 //     userId: "62731945",
 //     user: "Kevin Wasonga",
 //     date: "2024-07-22",
 //     activity: "Home remodel",
 //     phases: [
 //       {
 //         userId: "62731945",
 //         dateDealine: "2024-07-18",
 //         percentageDone: 100,
 //         order: 1,
 //         notes: [
 //           {
 //             note: "Milk cow",
 //             done: 1,
 //           },
 //           {
 //             note: "Watch tv",
 //             done: 0,
 //           },
 //           {
 //             note: "Build a chair",
 //             done: 1,
 //           },
 //         ],
 //       },
 //     ],
 //   };
 // }
 // stateSetter();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","uuid":"j4KJi"}],"j4KJi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MAX", ()=>(0, _maxJsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v1ToV6", ()=>(0, _v1ToV6JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "v6", ()=>(0, _v6JsDefault.default));
parcelHelpers.export(exports, "v6ToV1", ()=>(0, _v6ToV1JsDefault.default));
parcelHelpers.export(exports, "v7", ()=>(0, _v7JsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v1ToV6Js = require("./v1ToV6.js");
var _v1ToV6JsDefault = parcelHelpers.interopDefault(_v1ToV6Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _v6Js = require("./v6.js");
var _v6JsDefault = parcelHelpers.interopDefault(_v6Js);
var _v6ToV1Js = require("./v6ToV1.js");
var _v6ToV1JsDefault = parcelHelpers.interopDefault(_v6ToV1Js);
var _v7Js = require("./v7.js");
var _v7JsDefault = parcelHelpers.interopDefault(_v7Js);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);

},{"./max.js":false,"./nil.js":false,"./parse.js":false,"./stringify.js":false,"./v1.js":"9qfh9","./v1ToV6.js":false,"./v3.js":false,"./v4.js":false,"./v5.js":false,"./v6.js":false,"./v6ToV1.js":false,"./v7.js":false,"./validate.js":false,"./version.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Y9F1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ var byteToHex = [];
for(var i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    //
    // Note to future-self: No, you can't remove the `toLowerCase()` call.
    // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    var uuid = unsafeStringify(arr, offset);
    // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Stringified UUID is invalid");
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"eHPgI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHPgI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === "string" && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"bUa5g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUa5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9qfh9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
var _nodeId;
var _clockseq;
// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;
// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || new Array(16);
    options = options || {};
    var node = options.node;
    var clockseq = options.clockseq;
    // v1 only: Use cached `node` and `clockseq` values
    if (!options._v6) {
        if (!node) node = _nodeId;
        if (clockseq == null) clockseq = _clockseq;
    }
    // Handle cases where we need entropy.  We do this lazily to minimize issues
    // related to insufficient system entropy.  See #189
    if (node == null || clockseq == null) {
        var seedBytes = options.random || (options.rng || (0, _rngJsDefault.default))();
        // Randomize node
        if (node == null) {
            node = [
                seedBytes[0],
                seedBytes[1],
                seedBytes[2],
                seedBytes[3],
                seedBytes[4],
                seedBytes[5]
            ];
            // v1 only: cache node value for reuse
            if (!_nodeId && !options._v6) {
                // per RFC4122 4.5: Set MAC multicast bit (v1 only)
                node[0] |= 0x01; // Set multicast bit
                _nodeId = node;
            }
        }
        // Randomize clockseq
        if (clockseq == null) {
            // Per 4.2.2, randomize (14 bit) clockseq
            clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
            if (_clockseq === undefined && !options._v6) _clockseq = clockseq;
        }
    }
    // v1 & v6 timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so time is
    // handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs !== undefined ? options.msecs : Date.now();
    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
    // Time since last uuid creation (in msecs)
    var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;
    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) clockseq = clockseq + 1 & 0x3fff;
    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) nsecs = 0;
    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;
    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;
    // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;
    // `time_mid`
    var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;
    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;
    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;
    // `clock_seq_low`
    b[i++] = clockseq & 0xff;
    // `node`
    for(var n = 0; n < 6; ++n)b[i + n] = node[n];
    return buf || (0, _stringifyJs.unsafeStringify)(b);
}
exports.default = v1;

},{"./rng.js":"2psyE","./stringify.js":"5Y9F1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2psyE":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rng);
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return getRandomValues(rnds8);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2IOc6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class IntroView {
    _activityEntry = document.querySelector("#activityEntry");
    _dateEntry = document.querySelector("#dateEntry");
    _userEntry = document.querySelector("#userEntry");
    updateUI(user = null) {
        if (user.user !== this._userEntry.textContent) this._userEntry.textContent = user.user;
        if (user.date !== this._dateEntry.textContent) this._dateEntry.textContent = user.date;
        if (user.activity !== this._activityEntry.textContent) this._activityEntry.textContent = user.activity;
    }
}
exports.default = new IntroView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"68aQa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _phaseView = require("./phaseView");
var _phaseViewDefault = parcelHelpers.interopDefault(_phaseView);
class ActivityView {
    _parent = document.querySelector("#tbody");
    _phase = document.querySelector(".phase-btn");
    _phaseActivity = document.querySelector("#activityPhase");
    _deadline = document.querySelector("#deadlineActivityDate");
    _count = 1;
    submitNewPhase(handler) {
        this._phase.addEventListener("click", handler);
    }
    getPhase() {
        const phase = {};
        phase.date = this._deadline.value;
        phase.activity = this._phaseActivity.value;
        phase.order = this._count++;
        return phase;
    }
    generatePhaseMarkup(data) {
        this._parent.innerHTML = "";
        const markup = data.map((el)=>(0, _phaseViewDefault.default).render(el)).join("");
        this._parent.insertAdjacentHTML("beforeend", markup);
    }
}
exports.default = new ActivityView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./phaseView":"kzmgg"}],"kzmgg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class PhaseView {
    render(data) {
        return `
        <tr class="phases__table--tr" id="${data.phaseId}">
            <td class="phases__table--td" id="order">${data.order}</td>
            <td class="phases__table--td" id="percentagePhaseDone">
              <span id="percentagePhaseDone__p">${data.percentageDone} %</span>
              <span id="percentagePhaseDone__c"></span>
            </td>
            <td class="phases__table--td" id="phaseDate">${data.date}</td>
            <td class="phases__table--td" id="activity">${data.activity}</td>
            <td class="phases__table--td" id="notes">
              <span class="note__btns">
                <p id="submitDone">Done</p>
                <p id="submitUnable">Unable</p>
                <p id="addNote">Add a note</p>
              </span>
            </td>
        </tr>
        `;
    }
}
exports.default = new PhaseView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cfLv5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class NotesView {
    _addNotes = document.querySelector("#addNote");
    addNotes(handler) {
        if (this._addNotes !== null) this._addNotes.addEventListener("click", ()=>{
            console.log("Hello worldd");
            handler();
        });
        else console.log("Nothing happened");
    }
}
exports.default = new NotesView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hycaY","aenu9"], "aenu9", "parcelRequire4f33")

//# sourceMappingURL=index.e37f48ea.js.map
