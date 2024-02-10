/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n    var list = []; // return the list of modules as css string\n    list.toString = function toString() {\n        return this.map(function (item) {\n            var content = cssWithMappingToString(item, useSourceMap);\n            if (item[2]) {\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n            }\n            return content;\n        }).join('');\n    }; // import a list of modules into the list\n    // eslint-disable-next-line func-names\n    list.i = function (modules, mediaQuery, dedupe) {\n        if (typeof modules === 'string') {\n            // eslint-disable-next-line no-param-reassign\n            modules = [[null, modules, '']];\n        }\n        var alreadyImportedModules = {};\n        if (dedupe) {\n            for (var i = 0; i < this.length; i++) {\n                // eslint-disable-next-line prefer-destructuring\n                var id = this[i][0];\n                if (id != null) {\n                    alreadyImportedModules[id] = true;\n                }\n            }\n        }\n        for (var _i = 0; _i < modules.length; _i++) {\n            var item = [].concat(modules[_i]);\n            if (dedupe && alreadyImportedModules[item[0]]) {\n                // eslint-disable-next-line no-continue\n                continue;\n            }\n            if (mediaQuery) {\n                if (!item[2]) {\n                    item[2] = mediaQuery;\n                }\n                else {\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n                }\n            }\n            list.push(item);\n        }\n    };\n    return list;\n};\nfunction cssWithMappingToString(item, useSourceMap) {\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n    var cssMapping = item[3];\n    if (!cssMapping) {\n        return content;\n    }\n    if (useSourceMap && typeof btoa === 'function') {\n        var sourceMapping = toComment(cssMapping);\n        var sourceURLs = cssMapping.sources.map(function (source) {\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n        });\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n    }\n    return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    return \"/*# \".concat(data, \" */\");\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = exports.store = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\nvar reducers_1 = __importDefault(__webpack_require__(/*! ./shared/reducers */ \"./src/shared/reducers/index.ts\"));\nvar tokenReducer_1 = __webpack_require__(/*! ./shared/reducers/token/tokenReducer */ \"./src/shared/reducers/token/tokenReducer.ts\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar NotFound_1 = __webpack_require__(/*! ./shared/NotFound */ \"./src/shared/NotFound/index.ts\");\nexports.store = (0, redux_1.createStore)(reducers_1.default, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\nfunction AppComponent() {\n    var dispatch = (0, react_redux_1.useDispatch)();\n    (0, react_1.useEffect)(function () {\n        dispatch((0, tokenReducer_1.saveToken)());\n    });\n    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];\n    (0, react_1.useEffect)(function () {\n        setMounted(true);\n    }, []);\n    return (react_1.default.createElement(react_1.default.Fragment, null, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\n        react_1.default.createElement(Layout_1.Layout, null,\n            react_1.default.createElement(Header_1.Header, null),\n            react_1.default.createElement(react_router_dom_1.Switch, null,\n                react_1.default.createElement(react_router_dom_1.Route, { path: '/404' },\n                    react_1.default.createElement(NotFound_1.NotFound, null)),\n                react_1.default.createElement(react_router_dom_1.Route, { path: '/posts' },\n                    react_1.default.createElement(Content_1.Content, null,\n                        react_1.default.createElement(CardsList_1.CardsList, null))),\n                react_1.default.createElement(react_router_dom_1.Redirect, { from: '/auth', to: '/posts' }),\n                react_1.default.createElement(react_router_dom_1.Redirect, { exact: true, from: '/', to: '/posts' }),\n                react_1.default.createElement(react_router_dom_1.Redirect, { from: '*', to: '/404' })))))));\n}\nexports.App = (0, root_1.hot)(function () { return (react_1.default.createElement(react_redux_1.Provider, { store: exports.store },\n    react_1.default.createElement(AppComponent, null))); });\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n  --black: #333;\\n  --white: #fff;\\n  --orange: #c63;\\n  --green: #a4cc33;\\n  --red: #cc3361;\\n  --grayF3: #f3f3f3;\\n  --grayF4: #f4f4f4;\\n  --grayEC: #ececec;\\n  --grayD9: #d9d9d9;\\n  --grayC4: #c4c4c4;\\n  --gray99: #999;\\n  --gray66: #666;\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  background-color: var(--grayF4);\\n  font-size: 14px;\\n  font-weight: 400;\\n  line-height: 16px;\\n  font-family: \\\"Roboto\\\", serif;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  color: var(--black);\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\n.list-reset {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\n.link-reset {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\\n\\n.flex {\\n  display: flex;\\n}\\n\\n#modal_root {\\n  width: 100%;\\n}\\n\\n.nodisplay {\\n  display: none;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nvar indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Discussion Club</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  <script>\\n    window.__token__ = '\".concat(token, \"';\\n  </script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\").concat(content, \"</div>\\n  <div id=\\\"modal_root\\\"></div>\\n</body>\\n\\n</html>\\n\"); };\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nvar app = (0, express_1.default)();\nvar PORT = process.env.PORT || '3000';\nvar IS_DEV = \"development\";\napp.use(\"/static\", express_1.default.static(\"./dist/client\"));\nif (!IS_DEV) {\n    app.use((0, compression_1.default)());\n    app.use((0, helmet_1.default)({\n        contentSecurityPolicy: false,\n    }));\n}\napp.get(\"/auth\", function (req, res) {\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\".concat(req.query.code, \"&redirect_uri=\").concat('http://localhost:3000', \"/auth\"), {\n        auth: { username: 'ogS0hIBKPW2vVzr7Bbv34g', password: process.env.SECRET, },\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\n    })\n        .then(function (_a) {\n        var data = _a.data;\n        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)()), data['access_token']));\n    })\n        .catch(console.error);\n});\napp.get('*', function (req, res) {\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\n});\napp.listen(PORT, function () {\n    console.log(\"server started on port http://localhost:\".concat(PORT));\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Card = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/CardsList/Card/UserBlock/index.ts\");\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/index.ts\");\nvar ControlBlock_1 = __webpack_require__(/*! ./ControlBlock */ \"./src/shared/CardsList/Card/ControlBlock/index.ts\");\nvar CounterBlock_1 = __webpack_require__(/*! ./CounterBlock */ \"./src/shared/CardsList/Card/CounterBlock/index.ts\");\nvar PreviewBlock_1 = __webpack_require__(/*! ./PreviewBlock */ \"./src/shared/CardsList/Card/PreviewBlock/index.ts\");\nfunction Card(_a) {\n    var post = _a.post;\n    var id = post.id, score = post.score, num_comments = post.num_comments;\n    var previewImg = post.thumbnail;\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card + ' flex', id: id },\n        react_1.default.createElement(\"div\", { className: card_css_1.default.card__wrap + ' flex' },\n            react_1.default.createElement(\"div\", { className: card_css_1.default.card__user + ' flex' },\n                react_1.default.createElement(UserBlock_1.UserBlock, { data: post }),\n                react_1.default.createElement(Menu_1.Menu, null))),\n        react_1.default.createElement(PreviewBlock_1.PreviewBlock, { previewImg: previewImg }),\n        react_1.default.createElement(\"div\", { className: card_css_1.default.card__controls + ' flex' },\n            react_1.default.createElement(CounterBlock_1.CounterBlock, { score: score }),\n            react_1.default.createElement(ControlBlock_1.ControlBlock, { comments: num_comments }))));\n}\nexports.Card = Card;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/ControlBlock/ControlBlock.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/ControlBlock/ControlBlock.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ControlBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar controlblock_css_1 = __importDefault(__webpack_require__(/*! ./controlblock.css */ \"./src/shared/CardsList/Card/ControlBlock/controlblock.css\"));\nvar icons_1 = __webpack_require__(/*! ../../../icons */ \"./src/shared/icons/index.ts\");\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\nfunction ControlBlock(_a) {\n    var comments = _a.comments;\n    return (react_1.default.createElement(\"div\", { className: 'flex ' + controlblock_css_1.default.controlBlock },\n        react_1.default.createElement(\"div\", { className: 'flex ' + controlblock_css_1.default.comments },\n            react_1.default.createElement(\"button\", { className: controlblock_css_1.default.comments__btn },\n                react_1.default.createElement(icons_1.CommentsIcon, null)),\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grayC4 }, comments)),\n        react_1.default.createElement(\"div\", { className: 'flex ' + controlblock_css_1.default.controls },\n            react_1.default.createElement(\"button\", { className: 'flex ' + controlblock_css_1.default.controls__btn + ' ' + controlblock_css_1.default.controls__stat },\n                react_1.default.createElement(icons_1.StatisticGrayIcon, null),\n                react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.grayC4 }, \"\\u0421\\u0442\\u0430\\u0442\\u0438\\u0441\\u0442\\u0438\\u043A\\u0430 \\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u0430\\u0446\\u0438\\u0438\")),\n            react_1.default.createElement(\"button\", { className: 'flex ' + controlblock_css_1.default.controls__btn + ' ' + controlblock_css_1.default.controls__share },\n                react_1.default.createElement(icons_1.ShareGrayIcon, null),\n                react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.grayC4 }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\n            react_1.default.createElement(\"button\", { className: 'flex ' + controlblock_css_1.default.controls__btn + ' ' + controlblock_css_1.default.controls__del },\n                react_1.default.createElement(icons_1.DeleteGrayIcon, null),\n                react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.grayC4 }, \"\\u0423\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C\")),\n            react_1.default.createElement(\"button\", { className: 'flex ' + controlblock_css_1.default.controls__btn + ' ' + controlblock_css_1.default.controls__save },\n                react_1.default.createElement(icons_1.SaveGrayIcon, null)))));\n}\nexports.ControlBlock = ControlBlock;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/ControlBlock/ControlBlock.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/ControlBlock/controlblock.css":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/ControlBlock/controlblock.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controlBlock\": \"controlblock__controlBlock--3xMO0\",\n\t\"comments\": \"controlblock__comments--1c4m4\",\n\t\"comments__btn\": \"controlblock__comments__btn--3WEb5\",\n\t\"controls\": \"controlblock__controls--hXPIv\",\n\t\"controls__btn\": \"controlblock__controls__btn--2_bn2\",\n\t\"controls__stat\": \"controlblock__controls__stat--3YbAU\",\n\t\"controls__share\": \"controlblock__controls__share--3C3XX\",\n\t\"controls__del\": \"controlblock__controls__del--105Ge\",\n\t\"controls__save\": \"controlblock__controls__save--3wHy8\",\n\t\"counter__decrement\": \"controlblock__counter__decrement--2OShy\",\n\t\"counter__increment\": \"controlblock__counter__increment--3dVns\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/ControlBlock/controlblock.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/ControlBlock/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/ControlBlock/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ControlBlock */ \"./src/shared/CardsList/Card/ControlBlock/ControlBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/ControlBlock/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CounterBlock/CounterBlock.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CounterBlock/CounterBlock.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CounterBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar counterblock_css_1 = __importDefault(__webpack_require__(/*! ./counterblock.css */ \"./src/shared/CardsList/Card/CounterBlock/counterblock.css\"));\nvar icons_1 = __webpack_require__(/*! ../../../icons */ \"./src/shared/icons/index.ts\");\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\nfunction CounterBlock(_a) {\n    var score = _a.score, classExt = _a.classExt;\n    return (react_1.default.createElement(\"div\", { className: counterblock_css_1.default.counter + ' flex ' + classExt },\n        react_1.default.createElement(\"button\", { className: counterblock_css_1.default.counter__increment + ' flex' },\n            react_1.default.createElement(icons_1.ArrowIcon, null)),\n        react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: Text_1.EColor.grayC4 }, score),\n        react_1.default.createElement(\"button\", { className: counterblock_css_1.default.counter__decrement + ' flex' },\n            react_1.default.createElement(icons_1.ArrowIcon, null))));\n}\nexports.CounterBlock = CounterBlock;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CounterBlock/CounterBlock.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CounterBlock/counterblock.css":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CounterBlock/counterblock.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"counter\": \"counterblock__counter--1gxY6\",\n\t\"counter__decrement\": \"counterblock__counter__decrement--9XMxO\",\n\t\"counter__increment\": \"counterblock__counter__increment--3TZNK\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CounterBlock/counterblock.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CounterBlock/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/CounterBlock/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CounterBlock */ \"./src/shared/CardsList/Card/CounterBlock/CounterBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CounterBlock/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Dropdown/Dropdown.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Dropdown/Dropdown.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Dropdown = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/CardsList/Card/Dropdown/dropdown.css\"));\nvar List_1 = __webpack_require__(/*! ./List */ \"./src/shared/CardsList/Card/Dropdown/List/index.ts\");\nfunction Dropdown(_a) {\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen;\n    var _b = react_1.default.useState(isOpen), isDropdownOpen = _b[0], setIsDropdownOpen = _b[1];\n    var handleOpen = function () {\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, button),\n        isDropdownOpen && (react_1.default.createElement(List_1.List, { onClick: function () { return setIsDropdownOpen(false); }, onClose: function () { setIsDropdownOpen(false); } }, children))));\n}\nexports.Dropdown = Dropdown;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Dropdown/List/List.tsx":
/*!**********************************************************!*\
  !*** ./src/shared/CardsList/Card/Dropdown/List/List.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.List = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\nvar list_css_1 = __importDefault(__webpack_require__(/*! ./list.css */ \"./src/shared/CardsList/Card/Dropdown/List/list.css\"));\nvar useClickEvent_1 = __webpack_require__(/*! ../../../../hooks/useClickEvent */ \"./src/shared/hooks/useClickEvent.ts\");\nfunction List(props) {\n    var children = props.children;\n    var ref = (0, useClickEvent_1.useClickEvent)();\n    var node = document.querySelector('#modal_root');\n    if (!node)\n        return null;\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: list_css_1.default.list }, children)), node);\n}\nexports.List = List;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Dropdown/List/List.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Dropdown/List/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/CardsList/Card/Dropdown/List/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./List */ \"./src/shared/CardsList/Card/Dropdown/List/List.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Dropdown/List/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Dropdown/List/list.css":
/*!**********************************************************!*\
  !*** ./src/shared/CardsList/Card/Dropdown/List/list.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"list\": \"list__list--3zuNY\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Dropdown/List/list.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Dropdown/dropdown.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Dropdown/dropdown.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--2i255\",\n\t\"listContainer\": \"dropdown__listContainer--3JAPe\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Dropdown/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/Dropdown/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/CardsList/Card/Dropdown/Dropdown.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Menu = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\nvar MenuIcon_1 = __webpack_require__(/*! ../../../icons/MenuIcon */ \"./src/shared/icons/MenuIcon.tsx\");\nvar genericList_1 = __webpack_require__(/*! ../../../../utils/react/genericList */ \"./src/utils/react/genericList.tsx\");\nvar merge_1 = __webpack_require__(/*! ../../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\nvar cardMenuList_1 = __webpack_require__(/*! ../../../../utils/react/cardMenuList */ \"./src/utils/react/cardMenuList.tsx\");\nvar Dropdown_1 = __webpack_require__(/*! ../Dropdown */ \"./src/shared/CardsList/Card/Dropdown/index.ts\");\nvar getCoordinates_1 = __webpack_require__(/*! ../../../../utils/js/getCoordinates */ \"./src/utils/js/getCoordinates.ts\");\nfunction Menu() {\n    var ref = (0, react_1.useRef)(null);\n    var handleItemClick = function (text) {\n        console.log(text);\n    };\n    var _a = (0, react_1.useState)(false), isDropdownOpen = _a[0], setIsDropdownOpen = _a[1];\n    var _b = (0, react_1.useState)(window.innerWidth), widthScreen = _b[0], setWidthScreen = _b[1];\n    (0, react_1.useEffect)(function () {\n        var handleResize = function () {\n            setWidthScreen(window.innerWidth);\n        };\n        window.addEventListener('resize', handleResize);\n        return function () { return window.removeEventListener('resize', handleResize); };\n    }, [isDropdownOpen]);\n    var coords = {\n        right: 0,\n        top: 0\n    };\n    var _c = react_1.default.useState(coords), buttonCoord = _c[0], setButtonCoord = _c[1];\n    (0, react_1.useEffect)(function () {\n        var _a;\n        var btnCkicked = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();\n        var btnTop = btnCkicked === null || btnCkicked === void 0 ? void 0 : btnCkicked.top;\n        var btnRight = btnCkicked === null || btnCkicked === void 0 ? void 0 : btnCkicked.right;\n        var _b = (0, getCoordinates_1.getCoordinates)({ btnTop: btnTop, btnRight: btnRight, widthScreen: widthScreen }), top = _b[0], right = _b[1];\n        coords.right = right;\n        coords.top = top;\n        setButtonCoord(coords);\n    }, [widthScreen]);\n    return (react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menu_css_1.default.buttonDropdown, onClick: function () { return setIsDropdownOpen(function (prevState) { return !prevState; }); }, ref: ref },\n            react_1.default.createElement(MenuIcon_1.MenuIcon, null)) },\n        react_1.default.createElement(\"div\", { className: menu_css_1.default.wrapDropdown, style: { top: buttonCoord.top, right: buttonCoord.right } },\n            react_1.default.createElement(\"ul\", { className: menu_css_1.default.listDropdown },\n                react_1.default.createElement(genericList_1.GenericList, { list: (widthScreen > 1024 ? cardMenuList_1.cardMenuList : cardMenuList_1.cardMenuList.filter(function (item) { return item.isMobile; }))\n                        .map((0, merge_1.merge)({ onClick: handleItemClick })) })),\n            react_1.default.createElement(\"button\", { className: menu_css_1.default.btnClose }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"))));\n}\nexports.Menu = Menu;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/menu.css":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/menu.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"buttonDropdown\": \"menu__buttonDropdown--3g7dt\",\n\t\"wrapDropdown\": \"menu__wrapDropdown--3x7MC\",\n\t\"listDropdown\": \"menu__listDropdown--37ZtB\",\n\t\"dropdownListItem\": \"menu__dropdownListItem--1p4vD\",\n\t\"dropdownItemClose\": \"menu__dropdownItemClose--OkU0i\",\n\t\"btnClose\": \"menu__btnClose--3BqvO\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/PreviewBlock/PreviewBlock.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/PreviewBlock/PreviewBlock.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PreviewBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar previewblock_css_1 = __importDefault(__webpack_require__(/*! ./previewblock.css */ \"./src/shared/CardsList/Card/PreviewBlock/previewblock.css\"));\nvar image1_jpg_1 = __importDefault(__webpack_require__(/*! ./image1.jpg */ \"./src/shared/CardsList/Card/PreviewBlock/image1.jpg\"));\nfunction PreviewBlock(props) {\n    var previewImg = props.previewImg;\n    return (react_1.default.createElement(\"div\", { className: previewblock_css_1.default.previewBlock },\n        react_1.default.createElement(\"img\", { className: previewblock_css_1.default.previewImg, src: (previewImg !== '' && previewImg !== 'self') ? previewImg : image1_jpg_1.default, alt: \"\\u041F\\u0440\\u0435\\u0432\\u044C\\u044E \\u0441\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u044F\" })));\n}\nexports.PreviewBlock = PreviewBlock;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/PreviewBlock/PreviewBlock.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/PreviewBlock/image1.jpg":
/*!***********************************************************!*\
  !*** ./src/shared/CardsList/Card/PreviewBlock/image1.jpg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"image1.jpg\");\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/PreviewBlock/image1.jpg?");

/***/ }),

/***/ "./src/shared/CardsList/Card/PreviewBlock/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/PreviewBlock/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./PreviewBlock */ \"./src/shared/CardsList/Card/PreviewBlock/PreviewBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/PreviewBlock/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/PreviewBlock/previewblock.css":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/PreviewBlock/previewblock.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"previewBlock\": \"previewblock__previewBlock--2Diy1\",\n\t\"previewImg\": \"previewblock__previewImg--tN4tj\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/PreviewBlock/previewblock.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/UserBlock/CardTitle/CardTitle.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/UserBlock/CardTitle/CardTitle.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardTitle = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar cardtitle_css_1 = __importDefault(__webpack_require__(/*! ./cardtitle.css */ \"./src/shared/CardsList/Card/UserBlock/CardTitle/cardtitle.css\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nfunction CardTitle(props) {\n    var _a = props.data, title = _a.title, id = _a.id;\n    var postLink = \"/posts/\".concat(id);\n    return (react_1.default.createElement(\"h2\", { className: cardtitle_css_1.default.cardTitle },\n        react_1.default.createElement(react_router_dom_1.Link, { className: cardtitle_css_1.default.titleAncor, to: postLink }, title)));\n}\nexports.CardTitle = CardTitle;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/UserBlock/CardTitle/CardTitle.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/UserBlock/CardTitle/cardtitle.css":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/UserBlock/CardTitle/cardtitle.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardTitle\": \"cardtitle__cardTitle--1IPr3\",\n\t\"titleAncor\": \"cardtitle__titleAncor--3HFLs\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/UserBlock/CardTitle/cardtitle.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/UserBlock/CardTitle/index.ts":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/UserBlock/CardTitle/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CardTitle */ \"./src/shared/CardsList/Card/UserBlock/CardTitle/CardTitle.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/UserBlock/CardTitle/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/UserBlock/UserBlock.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/CardsList/Card/UserBlock/UserBlock.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/CardsList/Card/UserBlock/userblock.css\"));\nvar CardTitle_1 = __webpack_require__(/*! ./CardTitle */ \"./src/shared/CardsList/Card/UserBlock/CardTitle/index.ts\");\nvar avatar_1_png_1 = __importDefault(__webpack_require__(/*! ./avatar-1.png */ \"./src/shared/CardsList/Card/UserBlock/avatar-1.png\"));\nvar icons_1 = __webpack_require__(/*! ../../../icons */ \"./src/shared/icons/index.ts\");\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\nvar getDatePublished_1 = __webpack_require__(/*! ../../../../utils/js/getDatePublished */ \"./src/utils/js/getDatePublished.ts\");\nfunction UserBlock(props) {\n    var _a = props.data, author = _a.author, created = _a.created, id = _a.id;\n    var icon_img = props.data.sr_detail.icon_img;\n    return (react_1.default.createElement(\"div\", { className: userblock_css_1.default.userBlock + ' flex' },\n        react_1.default.createElement(CardTitle_1.CardTitle, { data: props.data, id: id }),\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.userBlock__wrap + ' flex' },\n            react_1.default.createElement(\"img\", { className: userblock_css_1.default.avatarImage, src: icon_img !== '' ? icon_img : avatar_1_png_1.default, alt: \"\\u0410\\u0432\\u0430\\u0442\\u0430\\u0440 \\u0430\\u0432\\u0442\\u043E\\u0440\\u0430\" }),\n            react_1.default.createElement(\"a\", { className: userblock_css_1.default.username + ' link-reset', href: '#user-url' }, author),\n            react_1.default.createElement(\"div\", { className: userblock_css_1.default.published },\n                react_1.default.createElement(\"span\", { className: userblock_css_1.default.published__span }, \" \\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E\"),\n                react_1.default.createElement(\"span\", { className: userblock_css_1.default.published__time },\n                    \" \",\n                    (0, getDatePublished_1.getDatePublished)(created)))),\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.looked },\n            react_1.default.createElement(icons_1.ViewsIcon, null),\n            react_1.default.createElement(Text_1.Text, { size: 14 }, \"1 \\u0447\\u0430\\u0441 \\u043D\\u0430\\u0437\\u0430\\u0434\")),\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.removeItem },\n            react_1.default.createElement(icons_1.DeleteIcon, null),\n            react_1.default.createElement(Text_1.Text, { size: 14 }, \"\\u0423\\u0431\\u0440\\u0430\\u0442\\u044C \\u0438\\u0437 \\u0441\\u043F\\u0438\\u0441\\u043A\\u0430\"))));\n}\nexports.UserBlock = UserBlock;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/UserBlock/avatar-1.png":
/*!**********************************************************!*\
  !*** ./src/shared/CardsList/Card/UserBlock/avatar-1.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"avatar-1.png\");\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/UserBlock/avatar-1.png?");

/***/ }),

/***/ "./src/shared/CardsList/Card/UserBlock/index.ts":
/*!******************************************************!*\
  !*** ./src/shared/CardsList/Card/UserBlock/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/CardsList/Card/UserBlock/UserBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/UserBlock/userblock.css":
/*!***********************************************************!*\
  !*** ./src/shared/CardsList/Card/UserBlock/userblock.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBlock\": \"userblock__userBlock--mA5GO\",\n\t\"userBlock__wrap\": \"userblock__userBlock__wrap--3-LOA\",\n\t\"userBox\": \"userblock__userBox--2n1Ca\",\n\t\"avatarImage\": \"userblock__avatarImage--1rF0U\",\n\t\"username\": \"userblock__username--3Wgzt\",\n\t\"published\": \"userblock__published--plDef\",\n\t\"looked\": \"userblock__looked--2QE_j\",\n\t\"removeItem\": \"userblock__removeItem--2oqvZ\",\n\t\"published__span\": \"userblock__published__span--2pSwp\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--7bN6-\",\n\t\"card__user\": \"card__card__user--1TiHP\",\n\t\"card__wrap\": \"card__card__wrap--NvlKy\",\n\t\"card__controls\": \"card__card__controls--2qshf\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardsList = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\");\nvar LoaderSpinner_1 = __webpack_require__(/*! ../LoaderSpinner */ \"./src/shared/LoaderSpinner/index.ts\");\nvar NoPosts_1 = __webpack_require__(/*! ../NoPosts */ \"./src/shared/NoPosts/index.ts\");\nvar postsReducer_1 = __webpack_require__(/*! ../reducers/posts/postsReducer */ \"./src/shared/reducers/posts/postsReducer.ts\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar Post_1 = __webpack_require__(/*! ../Post */ \"./src/shared/Post/index.ts\");\nfunction CardsList() {\n    var dispatch = (0, react_redux_1.useDispatch)();\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.tokenReducer.token; });\n    var _a = (0, react_1.useState)([]), postsData = _a[0], setPostsData = _a[1];\n    var _b = (0, react_1.useState)(false), loading = _b[0], setLoading = _b[1];\n    var _c = (0, react_1.useState)(''), errorLoading = _c[0], setErrorLoading = _c[1];\n    var _d = (0, react_1.useState)(''), nextAfter = _d[0], setNextAfter = _d[1];\n    var _e = (0, react_1.useState)(-2), refreshCounter = _e[0], setRefreshCounter = _e[1];\n    var _f = (0, react_1.useState)(false), isMore = _f[0], setIsMore = _f[1];\n    var bottomPoint = (0, react_1.useRef)(null);\n    var after = String((0, react_redux_1.useSelector)(function (state) { return state.postsReducer.posts.after; }));\n    var error = String((0, react_redux_1.useSelector)(function (state) { return state.postsReducer.posts.error; }));\n    (0, react_1.useEffect)(function () {\n        if (token && token !== 'undeifned') {\n            setLoading(true);\n            dispatch((0, postsReducer_1.postsRequestQuery)());\n        }\n    }, [token]);\n    var data = (0, react_redux_1.useSelector)(function (state) { return state.postsReducer.posts.data; });\n    (0, react_1.useEffect)(function () {\n        setPostsData(data);\n        setLoading(false);\n    }, [data]);\n    (0, react_1.useEffect)(function () {\n        setErrorLoading(error);\n        setLoading(false);\n    }, [error]);\n    (0, react_1.useEffect)(function () {\n        setNextAfter(after);\n    }, [after]);\n    (0, react_1.useEffect)(function () {\n        if (!loading) {\n            if (refreshCounter < 1) {\n                setRefreshCounter(function (prevState) { return prevState + 1; });\n                var observer_1 = new IntersectionObserver(function (entries) {\n                    if (entries[0].isIntersecting) {\n                        setLoading(true);\n                        dispatch((0, postsReducer_1.postsRequestQuery)());\n                    }\n                }, {\n                    rootMargin: '100px',\n                });\n                if (bottomPoint.current !== null)\n                    observer_1.observe(bottomPoint.current);\n                return function () {\n                    if (bottomPoint.current !== null)\n                        observer_1.unobserve(bottomPoint.current);\n                };\n            }\n            else {\n                setIsMore(true);\n            }\n        }\n    }, [bottomPoint.current, nextAfter, loading]);\n    function handlerClick() {\n        setRefreshCounter(0);\n        setIsMore(false);\n        setLoading(true);\n        dispatch((0, postsReducer_1.postsRequestQuery)());\n    }\n    return (react_1.default.createElement(\"div\", { className: cardslist_css_1.default.cardsListWrapper },\n        errorLoading && errorLoading,\n        typeof postsData !== 'undefined' && postsData.length === 0 && !loading && !errorLoading && react_1.default.createElement(NoPosts_1.NoPosts, null),\n        typeof postsData !== 'undefined' && postsData.length > 0 && (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList + (postsData.length === 0 && ' nodisplay') }, postsData && postsData.map(function (item) {\n            return react_1.default.createElement(Card_1.Card, { post: item, key: item.id });\n        }))),\n        react_1.default.createElement(\"div\", { className: cardslist_css_1.default.messagesWrapper, ref: bottomPoint },\n            refreshCounter < 3 && loading && !errorLoading && react_1.default.createElement(LoaderSpinner_1.LoaderSpinner, null),\n            isMore && !errorLoading && (react_1.default.createElement(\"div\", null,\n                react_1.default.createElement(\"button\", { className: cardslist_css_1.default.btnMore, onClick: handlerClick }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0451...\")))),\n        react_1.default.createElement(react_router_dom_1.Route, { path: '/posts/:id' },\n            react_1.default.createElement(Post_1.Post, null))));\n}\nexports.CardsList = CardsList;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--1DoiZ\",\n\t\"messagesWrapper\": \"cardslist__messagesWrapper--2U1s6\",\n\t\"btnMore\": \"cardslist__btnMore--23YK2\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentForm = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\nvar formik_1 = __webpack_require__(/*! formik */ \"formik\");\nfunction CommentForm(props) {\n    var author = props.author;\n    var refTextArea = (0, react_1.useRef)(null);\n    (0, react_1.useEffect)(function () {\n        if (refTextArea.current !== null) {\n            var input = refTextArea.current;\n            input.setSelectionRange(input.value.length, input.value.length);\n            input.focus();\n        }\n    });\n    var formik = (0, formik_1.useFormik)({\n        initialValues: {\n            comment: \"\".concat(author, \", \"),\n        },\n        onSubmit: function (values) {\n            console.log(values.comment);\n            alert(values.comment);\n        },\n    });\n    return (react_1.default.createElement(\"form\", { className: 'flex ' + commentform_css_1.default.form, onSubmit: formik.handleSubmit },\n        react_1.default.createElement(\"textarea\", { className: commentform_css_1.default.input, name: \"comment\", value: formik.values.comment, onChange: formik.handleChange, ref: refTextArea }),\n        react_1.default.createElement(\"button\", { className: commentform_css_1.default.button, type: \"submit\" },\n            react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.white }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"))));\n}\nexports.CommentForm = CommentForm;\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/commentform.css":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/commentform.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentform__form--Cs1Oi\",\n\t\"input\": \"commentform__input--2fC-z\",\n\t\"button\": \"commentform__button--35eLT\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\nfunction Content(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children));\n}\nexports.Content = Content;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\nfunction Header() {\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SearchBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\nvar useUserData_1 = __webpack_require__(/*! ../../hooks/useUserData */ \"./src/shared/hooks/useUserData.ts\");\nfunction SearchBlock() {\n    var _a = (0, useUserData_1.useUserData)(), data = _a.data, loading = _a.loading;\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));\n}\nexports.SearchBlock = SearchBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\nvar icons_1 = __webpack_require__(/*! ../../../icons */ \"./src/shared/icons/index.ts\");\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\nfunction UserBlock(_a) {\n    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;\n    return (react_1.default.createElement(\"a\", { className: userblock_css_1.default.userBox, href: \"https://www.reddit.com/api/v1/authorize?client_id=\".concat('ogS0hIBKPW2vVzr7Bbv34g', \"&response_type=code&state=random_string&redirect_uri=\").concat('http://localhost:3000', \"/auth&duration=permanent&scope=read submit identity\") },\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\n            ? react_1.default.createElement(\"img\", { className: userblock_css_1.default.avatarImage, src: avatarSrc, alt: \"user avatar\" })\n            : react_1.default.createElement(icons_1.AnonimIcon, null)),\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username }, loading ? (react_1.default.createElement(Text_1.Text, { size: 20, color: Text_1.EColor.gray99 }, \"'\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...'\")) : (react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.gray99 }, username || 'Аноним')))));\n}\nexports.UserBlock = UserBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--24rEF\",\n\t\"avatarBox\": \"userblock__avatarBox--2OTfi\",\n\t\"avatarImage\": \"userblock__avatarImage--2ryXC\",\n\t\"username\": \"userblock__username--3bLc0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--3aDPv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SortBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\nfunction SortBlock() {\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \"sorting dropdown\"));\n}\nexports.SortBlock = SortBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--141aZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ThreadTitle = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\nvar Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\nfunction ThreadTitle() {\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle },\n        react_1.default.createElement(Text_1.Text, { size: 28, mobileSize: 20 }, \"Header\")));\n}\nexports.ThreadTitle = ThreadTitle;\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--oxugx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _a;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Icon = exports.iconList = exports.EIcons = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar icons = __importStar(__webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\"));\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\nvar EIcons;\n(function (EIcons) {\n    EIcons[\"comments\"] = \"commentsIcon\";\n    EIcons[\"share\"] = \"shareIcon\";\n    EIcons[\"hide\"] = \"hideIcon\";\n    EIcons[\"save\"] = \"saveIcon\";\n    EIcons[\"complain\"] = \"complainIcon\";\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\nexports.iconList = (_a = {},\n    _a[EIcons.comments] = react_1.default.createElement(icons.CommentsIcon, null),\n    _a[EIcons.share] = react_1.default.createElement(icons.ShareIcon, null),\n    _a[EIcons.hide] = react_1.default.createElement(icons.HideIcon, null),\n    _a[EIcons.save] = react_1.default.createElement(icons.SaveIcon, null),\n    _a[EIcons.complain] = react_1.default.createElement(icons.ComplainIcon, null),\n    _a);\nfunction Icon(props) {\n    var iconName = props.iconName, _a = props.iconWidth, iconWidth = _a === void 0 ? 16 : _a, _b = props.iconHeight, iconHeight = _b === void 0 ? iconWidth : _b;\n    var classes = (0, classnames_1.default)(icon_css_1.default['icon-container'], icon_css_1.default[\"w\".concat(iconWidth)], icon_css_1.default[\"h\".concat(iconHeight)]);\n    return (react_1.default.createElement(\"div\", { className: classes }, exports.iconList[iconName]));\n}\nexports.Icon = Icon;\n;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/icon.css":
/*!**********************************!*\
  !*** ./src/shared/Icon/icon.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"w8\": \"icon__w8--1GAou\",\n\t\"h8\": \"icon__h8--JSLWY\",\n\t\"w16\": \"icon__w16--QcrLt\",\n\t\"h16\": \"icon__h16--2KAyK\",\n\t\"w24\": \"icon__w24--1mXyx\",\n\t\"h24\": \"icon__h24--1fFce\",\n\t\"w32\": \"icon__w32--4nG6a\",\n\t\"h32\": \"icon__h32--hf-08\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Icon/icon.css?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layout = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\nfunction Layout(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout, id: 'layout' }, children));\n}\nexports.Layout = Layout;\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/LoaderSpinner/LoaderSpinner.tsx":
/*!****************************************************!*\
  !*** ./src/shared/LoaderSpinner/LoaderSpinner.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.LoaderSpinner = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar loaderspinner_css_1 = __importDefault(__webpack_require__(/*! ./loaderspinner.css */ \"./src/shared/LoaderSpinner/loaderspinner.css\"));\nfunction LoaderSpinner() {\n    var ref = (0, react_1.useRef)(null);\n    var _a = (0, react_1.useState)(''), heightParent = _a[0], setHeightParent = _a[1];\n    (0, react_1.useEffect)(function () {\n        var _a;\n        var parentElement = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.parentElement;\n        setHeightParent(\"\".concat(parentElement === null || parentElement === void 0 ? void 0 : parentElement.scrollHeight, \"px\"));\n    });\n    var inlineStyle = {\n        height: heightParent,\n    };\n    return (react_1.default.createElement(\"div\", { className: loaderspinner_css_1.default.spinnerWrapper, ref: ref, style: inlineStyle },\n        react_1.default.createElement(\"div\", { className: loaderspinner_css_1.default.spinner },\n            react_1.default.createElement(\"svg\", { version: \"1.1\", id: \"Layer_1\", xmlns: \"http://www.w3.org/2000/svg\", xmlnsXlink: \"http://www.w3.org/1999/xlink\", viewBox: \"0 0 496 496\", xmlSpace: \"preserve\" },\n                react_1.default.createElement(\"path\", { fill: \"rgba(204, 102, 51, 1)\", d: \"M248,92c-13.6,0-24-10.4-24-24V24c0-13.6,10.4-24,24-24s24,10.4,24,24v44C272,80.8,261.6,92,248,92z\" }),\n                react_1.default.createElement(\"path\", { fill: \"rgba(204, 102, 51, .7)\", d: \"M248,496c-13.6,0-24-10.4-24-24v-44c0-13.6,10.4-24,24-24s24,10.4,24,24v44C272,485.6,261.6,496,248,496z\" }),\n                react_1.default.createElement(\"path\", { fill: \"rgba(204, 102, 51, .95)\", d: \"M157.6,116c-8,0-16-4-20.8-12l-21.6-37.6c-6.4-11.2-2.4-26.4,8.8-32.8s26.4-2.4,32.8,8.8L178.4,80c6.4,11.2,2.4,26.4-8.8,32.8C166.4,114.4,161.6,116,157.6,116z\" }),\n                react_1.default.createElement(\"path\", { fill: \"rgba(204, 102, 51, .65)\", d: \"M360,465.6c-8,0-16-4-20.8-12L317.6,416c-6.4-11.2-2.4-26.4,8.8-32.8c11.2-6.4,26.4-2.4,32.8,8.8l21.6,37.6c6.4,11.2,2.4,26.4-8.8,32.8C368,464.8,364,465.6,360,465.6z\" }),\n                react_1.default.createElement(\"path\", { fill: \"rgba(204, 102, 51, .9)\", d: \"M92,181.6c-4,0-8-0.8-12-3.2l-37.6-21.6c-11.2-6.4-15.2-21.6-8.8-32.8s21.6-15.2,32.8-8.8l37.6,21.6c11.2,6.4,15.2,21.6,8.8,32.8C108,177.6,100,181.6,92,181.6z\" }),\n                react_1.default.createElement(\"path\", { fill: \"rgba(204, 102, 51, 0.6)\", d: \"M442.4,384c-4,0-8-0.8-12-3.2L392,359.2c-11.2-6.4-15.2-21.6-8.8-32.8c6.4-11.2,21.6-15.2,32.8-8.8l37.6,21.6c11.2,6.4,15.2,21.6,8.8,32.8C458.4,380,450.4,384,442.4,384z\" }),\n                react_1.default.createElement(\"path\", { fill: \"rgba(204, 102, 51, 0.85)\", d: \"M68,272H24c-13.6,0-24-10.4-24-24s10.4-24,24-24h44c13.6,0,24,10.4,24,24S80.8,272,68,272z\" }),\n                react_1.default.createElement(\"path\", { fill: \"rgba(204, 102, 51, 0.55)\", d: \"M472,272h-44c-13.6,0-24-10.4-24-24s10.4-24,24-24h44c13.6,0,24,10.4,24,24S485.6,272,472,272z\" }),\n                react_1.default.createElement(\"path\", { fill: \"rgba(204, 102, 51, 0.8)\", d: \"M53.6,384c-8,0-16-4-20.8-12c-6.4-11.2-2.4-26.4,8.8-32.8l37.6-21.6c11.2-6.4,26.4-2.4,32.8,8.8c6.4,11.2,2.4,26.4-8.8,32.8l-37.6,21.6C62.4,383.2,58.4,384,53.6,384z\" }),\n                react_1.default.createElement(\"path\", { fill: \"rgba(204, 102, 51, 0.5)\", d: \"M404,181.6c-8,0-16-4-20.8-12c-6.4-11.2-2.4-26.4,8.8-32.8l37.6-21.6c11.2-6.4,26.4-2.4,32.8,8.8s2.4,26.4-8.8,32.8L416,178.4C412,180.8,408,181.6,404,181.6z\" }),\n                react_1.default.createElement(\"path\", { fill: \"rgba(204, 102, 51, 0.75)\", d: \"M136,465.6c-4,0-8-0.8-12-3.2c-11.2-6.4-15.2-21.6-8.8-32.8l21.6-37.6c6.4-11.2,21.6-15.2,32.8-8.8c11.2,6.4,15.2,21.6,8.8,32.8l-21.6,37.6C152,461.6,144,465.6,136,465.6z\" }),\n                react_1.default.createElement(\"path\", { fill: \"rgba(204, 102, 51, 0.45)\", d: \"M338.4,116c-4,0-8-0.8-12-3.2c-11.2-6.4-15.2-21.6-8.8-32.8l21.6-37.6c6.4-11.2,21.6-15.2,32.8-8.8c11.2,6.4,15.2,21.6,8.8,32.8L359.2,104C354.4,111.2,346.4,116,338.4,116z\" })))));\n}\nexports.LoaderSpinner = LoaderSpinner;\n\n\n//# sourceURL=webpack:///./src/shared/LoaderSpinner/LoaderSpinner.tsx?");

/***/ }),

/***/ "./src/shared/LoaderSpinner/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/LoaderSpinner/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./LoaderSpinner */ \"./src/shared/LoaderSpinner/LoaderSpinner.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/LoaderSpinner/index.ts?");

/***/ }),

/***/ "./src/shared/LoaderSpinner/loaderspinner.css":
/*!****************************************************!*\
  !*** ./src/shared/LoaderSpinner/loaderspinner.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"spinnerWrapper\": \"loaderspinner__spinnerWrapper--2EnnY\",\n\t\"spinner\": \"loaderspinner__spinner--3QhWS\",\n\t\"waiting\": \"loaderspinner__waiting--3STbf\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/LoaderSpinner/loaderspinner.css?");

/***/ }),

/***/ "./src/shared/NoPosts/NoPosts.tsx":
/*!****************************************!*\
  !*** ./src/shared/NoPosts/NoPosts.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.NoPosts = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar noposts_css_1 = __importDefault(__webpack_require__(/*! ./noposts.css */ \"./src/shared/NoPosts/noposts.css\"));\nfunction NoPosts() {\n    return (react_1.default.createElement(\"div\", { className: noposts_css_1.default.noPostsWrapper },\n        react_1.default.createElement(\"div\", null,\n            react_1.default.createElement(\"svg\", { width: \"40\", height: \"40\", viewBox: \"0 0 40 40\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\", xmlnsXlink: \"http://www.w3.org/1999/xlink\" },\n                react_1.default.createElement(\"rect\", { width: \"40\", height: \"40\", fill: \"url(#pattern0)\" }),\n                react_1.default.createElement(\"defs\", null,\n                    react_1.default.createElement(\"pattern\", { id: \"pattern0\", patternContentUnits: \"objectBoundingBox\", width: \"1\", height: \"1\" },\n                        react_1.default.createElement(\"use\", { xlinkHref: \"#image0_16_2280\", transform: \"scale(0.00833333)\" })),\n                    react_1.default.createElement(\"image\", { id: \"image0_16_2280\", width: \"120\", height: \"120\", xlinkHref: \"data:image/png;base64,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\" })))),\n        react_1.default.createElement(\"div\", null, \"\\u0425\\u043C\\u043C... \\u0437\\u0434\\u0435\\u0441\\u044C \\u043F\\u043E\\u043A\\u0430 \\u043F\\u0443\\u0441\\u0442\\u043E\")));\n}\nexports.NoPosts = NoPosts;\n\n\n//# sourceURL=webpack:///./src/shared/NoPosts/NoPosts.tsx?");

/***/ }),

/***/ "./src/shared/NoPosts/index.ts":
/*!*************************************!*\
  !*** ./src/shared/NoPosts/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./NoPosts */ \"./src/shared/NoPosts/NoPosts.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/NoPosts/index.ts?");

/***/ }),

/***/ "./src/shared/NoPosts/noposts.css":
/*!****************************************!*\
  !*** ./src/shared/NoPosts/noposts.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"noPostsWrapper\": \"noposts__noPostsWrapper--zrOjA\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/NoPosts/noposts.css?");

/***/ }),

/***/ "./src/shared/NotFound/NotFound.tsx":
/*!******************************************!*\
  !*** ./src/shared/NotFound/NotFound.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.NotFound = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar notfound_css_1 = __importDefault(__webpack_require__(/*! ./notfound.css */ \"./src/shared/NotFound/notfound.css\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\nfunction NotFound() {\n    return (react_1.default.createElement(\"div\", { className: notfound_css_1.default.wrapper + ' flex' },\n        react_1.default.createElement(Text_1.Text, { As: 'h2', size: 76, color: Text_1.EColor.red }, \"404\"),\n        react_1.default.createElement(Text_1.Text, { As: 'p', size: 28 }, \"\\u0423\\u043F-\\u0441! \\u0427\\u0442\\u043E-\\u0442\\u043E \\u043F\\u043E\\u0448\\u043B\\u043E \\u043D\\u0435 \\u0442\\u0430\\u043A!\"),\n        react_1.default.createElement(Text_1.Text, { As: 'p', size: 28 }, \"\\u0421\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\"),\n        react_1.default.createElement(react_router_dom_1.Link, { to: '/posts' }, \"\\u0412\\u0435\\u0440\\u043D\\u0443\\u0442\\u044C\\u0441\\u044F \\u043D\\u0430 \\u0433\\u043B\\u0430\\u0432\\u043D\\u0443\\u044E \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0443!\")));\n}\nexports.NotFound = NotFound;\n\n\n//# sourceURL=webpack:///./src/shared/NotFound/NotFound.tsx?");

/***/ }),

/***/ "./src/shared/NotFound/index.ts":
/*!**************************************!*\
  !*** ./src/shared/NotFound/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./NotFound */ \"./src/shared/NotFound/NotFound.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/NotFound/index.ts?");

/***/ }),

/***/ "./src/shared/NotFound/notfound.css":
/*!******************************************!*\
  !*** ./src/shared/NotFound/notfound.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"notfound__wrapper--QysBw\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/NotFound/notfound.css?");

/***/ }),

/***/ "./src/shared/Post/CommentsList/CommentsList.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Post/CommentsList/CommentsList.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentsList = exports.createCommentsList = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar getDatePublished_1 = __webpack_require__(/*! ../../../utils/js/getDatePublished */ \"./src/utils/js/getDatePublished.ts\");\nvar commentslist_css_1 = __importDefault(__webpack_require__(/*! ./commentslist.css */ \"./src/shared/Post/CommentsList/commentslist.css\"));\nvar Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\nvar genericList_1 = __webpack_require__(/*! ../../../utils/react/genericList */ \"./src/utils/react/genericList.tsx\");\nvar postControlList_1 = __webpack_require__(/*! ../../../utils/react/postControlList */ \"./src/utils/react/postControlList.tsx\");\nvar merge_1 = __webpack_require__(/*! ../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\nvar Icon_1 = __webpack_require__(/*! ../../Icon */ \"./src/shared/Icon/index.ts\");\nvar CounterBlock_1 = __webpack_require__(/*! ../../CardsList/Card/CounterBlock */ \"./src/shared/CardsList/Card/CounterBlock/index.ts\");\nvar CommentForm_1 = __webpack_require__(/*! ../../CommentForm */ \"./src/shared/CommentForm/index.ts\");\nfunction createCommentsList(comments) {\n    var _a = (0, react_1.useState)(null), openedFormIndex = _a[0], setOpenedFormIndex = _a[1];\n    var handleItemClick = function (text) {\n        console.log(text);\n    };\n    var handleClick = function (index) {\n        if (index === openedFormIndex) {\n            setOpenedFormIndex(null);\n        }\n        else {\n            setOpenedFormIndex(index);\n        }\n    };\n    return (react_1.default.createElement(\"ul\", { className: commentslist_css_1.default.list }, comments.map(function (element) {\n        return react_1.default.createElement(\"li\", { className: commentslist_css_1.default.item, key: element.id },\n            react_1.default.createElement(\"header\", { className: 'flex ' + commentslist_css_1.default.header },\n                react_1.default.createElement(CounterBlock_1.CounterBlock, { score: element.score, classExt: commentslist_css_1.default.counter }),\n                react_1.default.createElement(\"div\", { className: 'flex ' + commentslist_css_1.default.authorBlock },\n                    (element.author_img && element.author_img !== '') && element.author_img,\n                    react_1.default.createElement(\"div\", { className: commentslist_css_1.default.author },\n                        react_1.default.createElement(\"a\", { className: 'link-reset ', href: \"#\" },\n                            react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.orange }, element.author))),\n                    react_1.default.createElement(\"div\", null, (0, getDatePublished_1.getDatePublished)(element.created)))),\n            react_1.default.createElement(\"main\", { className: commentslist_css_1.default.main },\n                react_1.default.createElement(\"div\", { className: commentslist_css_1.default.commentBody }, element.body),\n                react_1.default.createElement(\"div\", { className: 'flex ' + commentslist_css_1.default.footer },\n                    react_1.default.createElement(\"div\", { className: 'flex ' + commentslist_css_1.default.footer__controls },\n                        react_1.default.createElement(\"button\", { className: 'flex ' + commentslist_css_1.default.responseBtn, onClick: function () { handleClick(element.id); }, type: 'button' },\n                            react_1.default.createElement(Icon_1.Icon, { iconName: Icon_1.EIcons.comments, iconWidth: 16 }),\n                            \" \",\n                            react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.gray99 }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\")),\n                        react_1.default.createElement(\"ul\", { className: 'flex ' + commentslist_css_1.default.controlList },\n                            react_1.default.createElement(genericList_1.GenericList, { list: (postControlList_1.postControlList)\n                                    .filter(function (item) { return item.isResponce; })\n                                    .map((0, merge_1.merge)({ onClick: handleItemClick })) }))),\n                    element.id === openedFormIndex && (react_1.default.createElement(CommentForm_1.CommentForm, { onClose: function () { setOpenedFormIndex(element.id); }, author: element.author }))),\n                element.children && createCommentsList(element.children)));\n    })));\n}\nexports.createCommentsList = createCommentsList;\nfunction CommentsList(props) {\n    var comments = Object.values(props);\n    return (react_1.default.createElement(\"div\", null, createCommentsList(comments)));\n}\nexports.CommentsList = CommentsList;\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentsList/CommentsList.tsx?");

/***/ }),

/***/ "./src/shared/Post/CommentsList/commentslist.css":
/*!*******************************************************!*\
  !*** ./src/shared/Post/CommentsList/commentslist.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"list\": \"commentslist__list--16Tc6\",\n\t\"item\": \"commentslist__item--1eTNt\",\n\t\"header\": \"commentslist__header--1ekNj\",\n\t\"btnClose\": \"commentslist__btnClose--35qZx\",\n\t\"authorBlock\": \"commentslist__authorBlock--1__uw\",\n\t\"author\": \"commentslist__author--2N7Ad\",\n\t\"main\": \"commentslist__main--bdaj9\",\n\t\"commentBody\": \"commentslist__commentBody---3VL2\",\n\t\"footer\": \"commentslist__footer--2CsL-\",\n\t\"footer__controls\": \"commentslist__footer__controls--_A7Vw\",\n\t\"responseBtn\": \"commentslist__responseBtn--1CLmy\",\n\t\"controlList\": \"commentslist__controlList--pfeP-\",\n\t\"counter\": \"commentslist__counter--23re4\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentsList/commentslist.css?");

/***/ }),

/***/ "./src/shared/Post/CommentsList/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/Post/CommentsList/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CommentsList */ \"./src/shared/Post/CommentsList/CommentsList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Post/CommentsList/index.ts?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Post = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\nvar useClickEvent_1 = __webpack_require__(/*! ../hooks/useClickEvent */ \"./src/shared/hooks/useClickEvent.ts\");\nvar Text_1 = __webpack_require__(/*! ../Text */ \"./src/shared/Text/index.ts\");\nvar useGetComments_1 = __webpack_require__(/*! ../hooks/useGetComments */ \"./src/shared/hooks/useGetComments.tsx\");\nvar CounterBlock_1 = __webpack_require__(/*! ../CardsList/Card/CounterBlock */ \"./src/shared/CardsList/Card/CounterBlock/index.ts\");\nvar CommentsList_1 = __webpack_require__(/*! ./CommentsList */ \"./src/shared/Post/CommentsList/index.ts\");\nvar getDatePublished_1 = __webpack_require__(/*! ../../utils/js/getDatePublished */ \"./src/utils/js/getDatePublished.ts\");\nvar icons_1 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\nvar genericList_1 = __webpack_require__(/*! ../../utils/react/genericList */ \"./src/utils/react/genericList.tsx\");\nvar merge_1 = __webpack_require__(/*! ../../utils/js/merge */ \"./src/utils/js/merge.ts\");\nvar Icon_1 = __webpack_require__(/*! ../Icon */ \"./src/shared/Icon/index.ts\");\nvar postControlList_1 = __webpack_require__(/*! ../../utils/react/postControlList */ \"./src/utils/react/postControlList.tsx\");\nvar declOfNum_1 = __webpack_require__(/*! ../../utils/js/declOfNum */ \"./src/utils/js/declOfNum.ts\");\nvar SortBlock_1 = __webpack_require__(/*! ../Header/SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm */ \"./src/shared/CommentForm/index.ts\");\nvar LoaderSpinner_1 = __webpack_require__(/*! ../LoaderSpinner */ \"./src/shared/LoaderSpinner/index.ts\");\nvar NoPosts_1 = __webpack_require__(/*! ../NoPosts */ \"./src/shared/NoPosts/index.ts\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nfunction Post() {\n    var postsData = (0, react_redux_1.useSelector)(function (state) { return state.postsReducer.posts.data; });\n    var location = (0, react_router_dom_1.useLocation)();\n    var id = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);\n    var postData = postsData.find(function (item) { return item.id === id; });\n    if (!postData)\n        return react_1.default.createElement(react_router_dom_1.Redirect, { to: '/404' });\n    var _a = (0, react_1.useState)(false), isLoaded = _a[0], setIsLoaded = _a[1];\n    var _b = postData, author = _b.author, created = _b.created, num_comments = _b.num_comments, score = _b.score, selftext = _b.selftext, subreddit = _b.subreddit, title = _b.title, upvote_ratio = _b.upvote_ratio, sr_detail = _b.sr_detail;\n    var icon_img = sr_detail.icon_img;\n    var ref = (0, useClickEvent_1.useClickEvent)();\n    var comments = (0, useGetComments_1.useGetComments)(id, subreddit);\n    (0, react_1.useEffect)(function () {\n        if (comments && comments.length !== 0) {\n            setIsLoaded(true);\n        }\n    }, [comments]);\n    var handleItemClick = function (text) {\n        console.log(text);\n    };\n    var node = document.querySelector('#modal_root');\n    if (!node)\n        return null;\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\n        react_1.default.createElement(\"div\", { className: 'flex ' + post_css_1.default.header },\n            react_1.default.createElement(\"div\", { className: post_css_1.default.counter }, isLoaded &&\n                react_1.default.createElement(CounterBlock_1.CounterBlock, { classExt: post_css_1.default.counter, score: score })),\n            react_1.default.createElement(\"div\", { className: 'flex ' + post_css_1.default.titleBlock },\n                react_1.default.createElement(\"h2\", { className: post_css_1.default.title },\n                    react_1.default.createElement(Text_1.Text, { size: 20 }, title)),\n                react_1.default.createElement(\"div\", { className: 'flex ' + post_css_1.default.userBlock },\n                    react_1.default.createElement(\"div\", { className: post_css_1.default.published },\n                        react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.gray99 },\n                            \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \",\n                            (0, getDatePublished_1.getDatePublished)(created))),\n                    react_1.default.createElement(\"div\", { className: 'flex ' + post_css_1.default.user },\n                        react_1.default.createElement(\"span\", { className: post_css_1.default.autorIcon }, icon_img !== null && react_1.default.createElement(icons_1.AnonimIcon, null)),\n                        \" \",\n                        react_1.default.createElement(\"span\", { className: post_css_1.default.author }, author))))),\n        react_1.default.createElement(\"div\", null),\n        react_1.default.createElement(\"div\", { className: post_css_1.default.content }, selftext !== '' && selftext),\n        react_1.default.createElement(\"div\", { className: post_css_1.default.sortBlock },\n            react_1.default.createElement(SortBlock_1.SortBlock, null)),\n        react_1.default.createElement(\"div\", { className: 'flex ' + post_css_1.default.controlBlock },\n            react_1.default.createElement(\"ul\", { className: 'flex ' + post_css_1.default.controlList },\n                react_1.default.createElement(\"li\", { className: post_css_1.default.controlItem },\n                    react_1.default.createElement(Icon_1.Icon, { iconName: Icon_1.EIcons.comments, iconWidth: 16 }),\n                    \" \",\n                    num_comments,\n                    \" \",\n                    (0, declOfNum_1.declOfNum)(num_comments, ['Комментарий', 'Комментария', 'Комментариев'])),\n                react_1.default.createElement(genericList_1.GenericList, { list: (postControlList_1.postControlList)\n                        .map((0, merge_1.merge)({ onClick: handleItemClick })) })),\n            react_1.default.createElement(\"span\", { className: post_css_1.default.upvoteRatio },\n                react_1.default.createElement(Text_1.Text, { size: 14, color: Text_1.EColor.gray99 },\n                    upvote_ratio * 100,\n                    \"% \\u041F\\u0440\\u043E\\u0433\\u043E\\u043B\\u043E\\u0441\\u043E\\u0432\\u0430\\u043B\\u0438\"))),\n        react_1.default.createElement(CommentForm_1.CommentForm, { author: author }),\n        isLoaded && !comments && react_1.default.createElement(NoPosts_1.NoPosts, null),\n        comments && react_1.default.createElement(CommentsList_1.CommentsList, __assign({}, comments)),\n        react_1.default.createElement(\"div\", { className: post_css_1.default.messagesWrapper }, !isLoaded && react_1.default.createElement(LoaderSpinner_1.LoaderSpinner, null)))), node);\n}\nexports.Post = Post;\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Post/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Post/Post.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Post/index.ts?");

/***/ }),

/***/ "./src/shared/Post/post.css":
/*!**********************************!*\
  !*** ./src/shared/Post/post.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"post__modal--yRo-c\",\n\t\"header\": \"post__header--1d6RT\",\n\t\"counter\": \"post__counter--3MuGt\",\n\t\"titleBlock\": \"post__titleBlock--2Crqk\",\n\t\"title\": \"post__title--xhpd2\",\n\t\"userBlock\": \"post__userBlock--25A49\",\n\t\"published\": \"post__published--1RsfU\",\n\t\"user\": \"post__user--36Aw_\",\n\t\"author\": \"post__author--212Oo\",\n\t\"autorIcon\": \"post__autorIcon--2mLyX\",\n\t\"controlBlock\": \"post__controlBlock--2_08j\",\n\t\"controlList\": \"post__controlList--1zx_c\",\n\t\"controlItem\": \"post__controlItem--2L4GN\",\n\t\"content\": \"post__content--2gFMc\",\n\t\"sortBlock\": \"post__sortBlock--1PbSa\",\n\t\"close\": \"post__close--1HSqz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/post.css?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Text = exports.EColor = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\nvar EColor;\n(function (EColor) {\n    EColor[\"black\"] = \"black\";\n    EColor[\"white\"] = \"white\";\n    EColor[\"orange\"] = \"orange\";\n    EColor[\"green\"] = \"green\";\n    EColor[\"red\"] = \"red\";\n    EColor[\"grayC4\"] = \"grayC4\";\n    EColor[\"grayEC\"] = \"grayEC\";\n    EColor[\"grayD9\"] = \"grayD9\";\n    EColor[\"grayF3\"] = \"grayF3\";\n    EColor[\"grayF4\"] = \"grayF4\";\n    EColor[\"gray99\"] = \"gray99\";\n    EColor[\"gray66\"] = \"gray66\";\n})(EColor = exports.EColor || (exports.EColor = {}));\nfunction Text(props) {\n    var _a, _b, _c;\n    var _d = props.As, As = _d === void 0 ? 'span' : _d, _e = props.color, color = _e === void 0 ? EColor.black : _e, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\n    var classes = (0, classnames_1.default)(text_css_1.default[\"s\".concat(size)], (_a = {}, _a[text_css_1.default[\"m\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[text_css_1.default[\"t\".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[text_css_1.default[\"d\".concat(desktopSize)]] = desktopSize, _c), text_css_1.default[color]);\n    return (react_1.default.createElement(As, { className: classes }, children));\n}\nexports.Text = Text;\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s76\": \"text__s76--2gYl-\",\n\t\"s28\": \"text__s28--Puvgs\",\n\t\"s20\": \"text__s20--3Xq66\",\n\t\"s16\": \"text__s16--G_lUr\",\n\t\"s14\": \"text__s14--jvCoO\",\n\t\"s12\": \"text__s12--2S2T2\",\n\t\"s10\": \"text__s10--DYLfy\",\n\t\"black\": \"text__black--1zchg\",\n\t\"orange\": \"text__orange--1RyAM\",\n\t\"green\": \"text__green--3mYQn\",\n\t\"red\": \"text__red--PlSN4\",\n\t\"white\": \"text__white--13JGE\",\n\t\"grayF4\": \"text__grayF4--2X2jV\",\n\t\"grayF3\": \"text__grayF3--1zp-f\",\n\t\"grayD9\": \"text__grayD9--3Y4yY\",\n\t\"grayEC\": \"text__grayEC--3Eu3l\",\n\t\"grayC4\": \"text__grayC4--3U0c5\",\n\t\"gray99\": \"text__gray99--DhweW\",\n\t\"gray66\": \"text__gray66--3ORMR\",\n\t\"upperCase\": \"text__upperCase--2EMyT\",\n\t\"m28\": \"text__m28--2u2zs\",\n\t\"m20\": \"text__m20--1gFlM\",\n\t\"m16\": \"text__m16--cSY4u\",\n\t\"m14\": \"text__m14--s6pnr\",\n\t\"m12\": \"text__m12--1W0av\",\n\t\"m10\": \"text__m10--UtIkW\",\n\t\"bold\": \"text__bold--gb02H\",\n\t\"t28\": \"text__t28--A4rHF\",\n\t\"t20\": \"text__t20--78tCz\",\n\t\"t16\": \"text__t16--nkVMz\",\n\t\"t14\": \"text__t14--1Rj72\",\n\t\"t12\": \"text__t12--7txjW\",\n\t\"t10\": \"text__t10--n2R7f\",\n\t\"d28\": \"text__d28--3oIok\",\n\t\"d20\": \"text__d20--uwHxr\",\n\t\"d16\": \"text__d16--1Pwd1\",\n\t\"d14\": \"text__d14--3Futo\",\n\t\"d12\": \"text__d12--5X_qc\",\n\t\"d10\": \"text__d10--3pWnc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ }),

/***/ "./src/shared/hooks/useClickEvent.ts":
/*!*******************************************!*\
  !*** ./src/shared/hooks/useClickEvent.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useClickEvent = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nfunction useClickEvent() {\n    var ref = (0, react_1.useRef)(null);\n    var history = (0, react_router_dom_1.useHistory)();\n    (0, react_1.useEffect)(function () {\n        function handleClick(event) {\n            var _a;\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\n                history.push('/posts');\n            }\n        }\n        document.addEventListener('click', handleClick);\n        return function () {\n            document.removeEventListener('click', handleClick);\n        };\n    }, []);\n    return ref;\n}\nexports.useClickEvent = useClickEvent;\n\n\n//# sourceURL=webpack:///./src/shared/hooks/useClickEvent.ts?");

/***/ }),

/***/ "./src/shared/hooks/useGetComments.tsx":
/*!*********************************************!*\
  !*** ./src/shared/hooks/useGetComments.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useGetComments = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar clearComments_1 = __webpack_require__(/*! ../../utils/react/clearComments */ \"./src/utils/react/clearComments.ts\");\nfunction useGetComments(id, subreddit) {\n    var _a = (0, react_1.useState)(), data = _a[0], setData = _a[1];\n    (0, react_1.useEffect)(function () {\n        axios_1.default.get(\"https://api.reddit.com/r/\".concat(subreddit, \"/comments/\").concat(id), {})\n            .then(function (resp) {\n            var commentsData = resp.data;\n            if (commentsData || commentsData.length !== 0) {\n                var comments = (0, clearComments_1.clearComments)(commentsData[1].data.children);\n                setData(comments);\n            }\n        })\n            .catch(console.error);\n    }, []);\n    if (data) {\n        return data;\n    }\n    ;\n}\nexports.useGetComments = useGetComments;\n\n\n//# sourceURL=webpack:///./src/shared/hooks/useGetComments.tsx?");

/***/ }),

/***/ "./src/shared/hooks/useUserData.ts":
/*!*****************************************!*\
  !*** ./src/shared/hooks/useUserData.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useUserData = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar meReducer_1 = __webpack_require__(/*! ../reducers/me/meReducer */ \"./src/shared/reducers/me/meReducer.ts\");\nfunction useUserData() {\n    var dispatch = (0, react_redux_1.useDispatch)();\n    var loading = (0, react_redux_1.useSelector)(function (state) { return state.meReducer.loading; });\n    var data = (0, react_redux_1.useSelector)(function (state) { return state.meReducer.me.data; });\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.tokenReducer.token; });\n    (0, react_1.useEffect)(function () {\n        if (token && token !== 'undefined') {\n            dispatch((0, meReducer_1.meRequestQuery)());\n        }\n    }, [token]);\n    return {\n        data: data,\n        loading: loading,\n    };\n}\nexports.useUserData = useUserData;\n\n\n//# sourceURL=webpack:///./src/shared/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/shared/icons/AnonimIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/icons/AnonimIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AnonimIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction AnonimIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\n}\nexports.AnonimIcon = AnonimIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/AnonimIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/ArrowIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/ArrowIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ArrowIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction ArrowIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" })));\n}\nexports.ArrowIcon = ArrowIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/ArrowIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/CommentsIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/icons/CommentsIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentsIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction CommentsIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })));\n}\nexports.CommentsIcon = CommentsIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/CommentsIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/ComplainIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/icons/ComplainIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ComplainIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction ComplainIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"16\", height: \"14\", viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })));\n}\nexports.ComplainIcon = ComplainIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/ComplainIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/DeleteGrayIcon.tsx":
/*!*********************************************!*\
  !*** ./src/shared/icons/DeleteGrayIcon.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DeleteGrayIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction DeleteGrayIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n        react_1.default.createElement(\"path\", { d: \"M6.57143 13.8889C6.57143 14.5 7.08571 15 7.71429 15H12.2857C12.9143 15 13.4286 14.5 13.4286 13.8889V7.22222H6.57143V13.8889ZM7.71429 8.33333H12.2857V13.8889H7.71429V8.33333ZM12 5.55556L11.4286 5H8.57143L8 5.55556H6V6.66667H14V5.55556H12Z\", fill: \"white\" })));\n}\nexports.DeleteGrayIcon = DeleteGrayIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/DeleteGrayIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/DeleteIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/icons/DeleteIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DeleteIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction DeleteIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"10\", height: \"12\", viewBox: \"0 0 10 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M0.714286 10.6667C0.714286 11.4 1.35714 12 2.14286 12H7.85714C8.64286 12 9.28571 11.4 9.28571 10.6667V2.66667H0.714286V10.6667ZM2.14286 4H7.85714V10.6667H2.14286V4ZM7.5 0.666667L6.78571 0H3.21429L2.5 0.666667H0V2H10V0.666667H7.5Z\", fill: \"#999999\" })));\n}\nexports.DeleteIcon = DeleteIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/DeleteIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/HideIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/HideIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.HideIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction HideIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#999999\" })));\n}\nexports.HideIcon = HideIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/HideIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/MailIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/MailIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MailIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction MailIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"13\", height: \"11\", viewBox: \"0 0 13 11\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M11.7235 0.276367H1.51072C0.808598 0.276367 0.240514 0.850834 0.240514 1.55296L0.234131 9.21252C0.234131 9.91465 0.808598 10.4891 1.51072 10.4891H11.7235C12.4256 10.4891 13.0001 9.91465 13.0001 9.21252V1.55296C13.0001 0.850834 12.4256 0.276367 11.7235 0.276367ZM11.7235 2.82955L6.6171 6.02104L1.51072 2.82955V1.55296L6.6171 4.74444L11.7235 1.55296V2.82955Z\", fill: \"#D9D9D9\" })));\n}\nexports.MailIcon = MailIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/MailIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/MenuIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/MenuIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MenuIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction MenuIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"20\", height: \"5\", viewBox: \"0 0 20 5\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"circle\", { cx: \"17.5\", cy: \"2.5\", r: \"2.5\", transform: \"rotate(90 17.5 2.5)\", fill: \"#D9D9D9\" }),\n        react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"2.5\", r: \"2.5\", transform: \"rotate(90 10 2.5)\", fill: \"#D9D9D9\" }),\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", transform: \"rotate(90 2.5 2.5)\", fill: \"#D9D9D9\" })));\n}\nexports.MenuIcon = MenuIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/MyPostIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/icons/MyPostIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MyPostIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction MyPostIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"10\", height: \"10\", viewBox: \"0 0 10 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M0 7.91696V10H2.08304L8.22664 3.85641L6.14359 1.77336L0 7.91696ZM9.83752 2.24552C10.0542 2.02888 10.0542 1.67893 9.83752 1.4623L8.5377 0.162477C8.32107 -0.0541591 7.97112 -0.0541591 7.75448 0.162477L6.73795 1.179L8.821 3.26205L9.83752 2.24552Z\", fill: \"#CC6633\" })));\n}\nexports.MyPostIcon = MyPostIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/MyPostIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/SaveGrayIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/icons/SaveGrayIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SaveGrayIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction SaveGrayIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n        react_1.default.createElement(\"path\", { d: \"M6.57143 13.8889C6.57143 14.5 7.08571 15 7.71429 15H12.2857C12.9143 15 13.4286 14.5 13.4286 13.8889V7.22222H6.57143V13.8889ZM7.71429 8.33333H12.2857V13.8889H7.71429V8.33333ZM12 5.55556L11.4286 5H8.57143L8 5.55556H6V6.66667H14V5.55556H12Z\", fill: \"white\" })));\n}\nexports.SaveGrayIcon = SaveGrayIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/SaveGrayIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/SaveIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/SaveIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SaveIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction SaveIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"rect\", { width: \"14\", height: \"14\", fill: \"#E5E5E5\" }),\n        react_1.default.createElement(\"g\", { id: \"Tablet 1024 (\\u00D0\\u009B\\u00D0\\u00B5\\u00D0\\u00BD\\u00D1\\u0082\\u00D0\\u00B0 \\u00D0\\u00BD\\u00D0\\u00BE\\u00D0\\u00B2\\u00D0\\u00BE\\u00D1\\u0081\\u00D1\\u0082\\u00D0\\u00B5\\u00D0\\u00B9)\" },\n            react_1.default.createElement(\"rect\", { className: \"rectWhite\", width: \"1024\", height: \"1085\", transform: \"translate(-864 -386)\", fill: \"white\" }),\n            react_1.default.createElement(\"rect\", { id: \"Rectangle 2\", x: \"-864\", y: \"-386\", width: \"1024\", height: \"1085\", fill: \"#F4F4F4\" }),\n            react_1.default.createElement(\"path\", { id: \"Rectangle 1\", d: \"M-864 -249C-864 -252.866 -860.866 -256 -857 -256H153C156.866 -256 160 -252.866 160 -249V692C160 695.866 156.866 699 153 699H-857C-860.866 699 -864 695.866 -864 692V-249Z\", fill: \"white\" }),\n            react_1.default.createElement(\"g\", { id: \"Post 2\" }),\n            react_1.default.createElement(\"g\", { id: \"\\u00D0\\u0094\\u00D1\\u0080\\u00D0\\u00BE\\u00D0\\u00BF\\u00D0\\u00B4\\u00D0\\u00B0\\u00D1\\u0083\\u00D0\\u00BD (\\u00D0\\u00BF\\u00D0\\u00BE\\u00D1\\u0081\\u00D1\\u0082)\" },\n                react_1.default.createElement(\"g\", { id: \"Rectangle 24\", filter: \"url(#filter0_d_94_2)\" },\n                    react_1.default.createElement(\"rect\", { className: \"rectWhite\", x: \"-20\", y: \"-127\", width: \"157\", height: \"229\", rx: \"3\", fill: \"white\" })),\n                react_1.default.createElement(\"path\", { id: \"Vector\", d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" }))),\n        react_1.default.createElement(\"defs\", null,\n            react_1.default.createElement(\"filter\", { id: \"filter0_d_94_2\", x: \"-40\", y: \"-147\", width: \"197\", height: \"269\", filterUnits: \"userSpaceOnUse\" },\n                react_1.default.createElement(\"feColorMatrix\", { in: \"SourceAlpha\", type: \"matrix\", values: \"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\", result: \"hardAlpha\" }),\n                react_1.default.createElement(\"feOffset\", null),\n                react_1.default.createElement(\"feGaussianBlur\", { stdDeviation: \"10\" }),\n                react_1.default.createElement(\"feColorMatrix\", { type: \"matrix\", values: \"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0\" }),\n                react_1.default.createElement(\"feBlend\", { mode: \"normal\", in2: \"BackgroundImageFix\", result: \"effect1_dropShadow_94_2\" }),\n                react_1.default.createElement(\"feBlend\", { mode: \"normal\", in: \"SourceGraphic\", in2: \"effect1_dropShadow_94_2\", result: \"shape\" })))));\n}\nexports.SaveIcon = SaveIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/SaveIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/SearchIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/icons/SearchIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SearchIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction SearchIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"19\", height: \"19\", viewBox: \"0 0 19 19\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"rect\", { width: \"19\", height: \"19\", fill: \"#E5E5E5\" }),\n        react_1.default.createElement(\"g\", { id: \"Tablet 1024 \\u00D0\\u009B\\u00D0\\u009A (\\u00D0\\u00BC\\u00D0\\u00BE\\u00D0\\u00B8 \\u00D0\\u00BF\\u00D0\\u00BE\\u00D1\\u0081\\u00D1\\u0082\\u00D1\\u008B)\", clipPath: \"url(#clip0_94_2)\" },\n            react_1.default.createElement(\"rect\", { width: \"1024\", height: \"1085\", transform: \"translate(-527 -55)\", fill: \"white\" }),\n            react_1.default.createElement(\"rect\", { id: \"Rectangle 2\", x: \"-527\", y: \"-55\", width: \"1024\", height: \"1085\", fill: \"#F4F4F4\" }),\n            react_1.default.createElement(\"g\", { id: \"\\u00D0\\u00A8\\u00D0\\u00B0\\u00D0\\u00BF\\u00D0\\u00BA\\u00D0\\u00B0\" },\n                react_1.default.createElement(\"g\", { id: \"\\u00D0\\u009F\\u00D0\\u00BE\\u00D0\\u00B8\\u00D1\\u0081\\u00D0\\u00BA\" },\n                    react_1.default.createElement(\"g\", { id: \"Rectangle 13\", filter: \"url(#filter0_d_94_2)\" },\n                        react_1.default.createElement(\"rect\", { x: \"-28\", y: \"-15\", width: \"280\", height: \"50\", rx: \"25\", fill: \"white\" })),\n                    react_1.default.createElement(\"path\", { id: \"Vector\", d: \"M13.5407 11.9497H12.7035L12.4067 11.6564C13.4454 10.418 14.0707 8.81018 14.0707 7.06118C14.0707 3.16124 10.9865 0 7.18169 0C3.37686 0 0.292725 3.16124 0.292725 7.06118C0.292725 10.9611 3.37686 14.1224 7.18169 14.1224C8.88804 14.1224 10.4566 13.4814 11.6648 12.4168L11.951 12.721V13.5792L17.2502 19L18.8293 17.3814L13.5407 11.9497ZM7.18169 11.9497C4.54269 11.9497 2.41241 9.76615 2.41241 7.06118C2.41241 4.3562 4.54269 2.17267 7.18169 2.17267C9.8207 2.17267 11.951 4.3562 11.951 7.06118C11.951 9.76615 9.8207 11.9497 7.18169 11.9497Z\", fill: \"#C4C4C4\" })))),\n        react_1.default.createElement(\"defs\", null,\n            react_1.default.createElement(\"filter\", { id: \"filter0_d_94_2\", x: \"-48\", y: \"-35\", width: \"320\", height: \"90\", filterUnits: \"userSpaceOnUse\", \"color-interpolation-filters\": \"sRGB\" },\n                react_1.default.createElement(\"feFlood\", { \"flood-opacity\": \"0\", result: \"BackgroundImageFix\" }),\n                react_1.default.createElement(\"feColorMatrix\", { in: \"SourceAlpha\", type: \"matrix\", values: \"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\", result: \"hardAlpha\" }),\n                react_1.default.createElement(\"feOffset\", null),\n                react_1.default.createElement(\"feGaussianBlur\", { stdDeviation: \"10\" }),\n                react_1.default.createElement(\"feColorMatrix\", { type: \"matrix\", values: \"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0\" }),\n                react_1.default.createElement(\"feBlend\", { mode: \"normal\", in2: \"BackgroundImageFix\", result: \"effect1_dropShadow_94_2\" }),\n                react_1.default.createElement(\"feBlend\", { mode: \"normal\", in: \"SourceGraphic\", in2: \"effect1_dropShadow_94_2\", result: \"shape\" })),\n            react_1.default.createElement(\"clipPath\", { id: \"clip0_94_2\" },\n                react_1.default.createElement(\"rect\", { width: \"1024\", height: \"1085\", fill: \"white\", transform: \"translate(-527 -55)\" })))));\n}\nexports.SearchIcon = SearchIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/SearchIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/ShareGrayIcon.tsx":
/*!********************************************!*\
  !*** ./src/shared/icons/ShareGrayIcon.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ShareGrayIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction ShareGrayIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n        react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" })));\n}\nexports.ShareGrayIcon = ShareGrayIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/ShareGrayIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/ShareIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/ShareIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ShareIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction ShareIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\n}\nexports.ShareIcon = ShareIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/ShareIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/StatisticGrayIcon.tsx":
/*!************************************************!*\
  !*** ./src/shared/icons/StatisticGrayIcon.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.StatisticGrayIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction StatisticGrayIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n        react_1.default.createElement(\"path\", { d: \"M12.1 6L13.5885 7.52667L10.4165 10.78L7.8165 8.11333L3 13.06L3.9165 14L7.8165 10L10.4165 12.6667L14.5115 8.47333L16 10V6H12.1Z\", fill: \"white\" })));\n}\nexports.StatisticGrayIcon = StatisticGrayIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/StatisticGrayIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/StatisticIcon.tsx":
/*!********************************************!*\
  !*** ./src/shared/icons/StatisticIcon.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.StatisticIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction StatisticIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"16\", height: \"10\", viewBox: \"0 0 16 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M11.2 0L13.032 1.90833L9.128 5.975L5.928 2.64167L0 8.825L1.128 10L5.928 5L9.128 8.33333L14.168 3.09167L16 5V0H11.2Z\", fill: \"#999999\" })));\n}\nexports.StatisticIcon = StatisticIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/StatisticIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/ViewsIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/ViewsIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ViewsIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction ViewsIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"16\", height: \"11\", viewBox: \"0 0 16 11\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"rect\", { width: \"16\", height: \"11\", fill: \"#E5E5E5\" }),\n        react_1.default.createElement(\"g\", { id: \"Tablet 1024 \\u00D0\\u009B\\u00D0\\u009A (\\u00D0\\u00BF\\u00D1\\u0080\\u00D0\\u00BE\\u00D1\\u0081\\u00D0\\u00BC\\u00D0\\u00BE\\u00D1\\u0082\\u00D1\\u0080\\u00D0\\u00B5\\u00D0\\u00BD\\u00D0\\u00BD\\u00D0\\u00BE\\u00D0\\u00B5)\", clipPath: \"url(#clip0_94_2)\" },\n            react_1.default.createElement(\"rect\", { width: \"1024\", height: \"1085\", transform: \"translate(-268 -279)\", fill: \"white\" }),\n            react_1.default.createElement(\"rect\", { id: \"Rectangle 2\", x: \"-268\", y: \"-279\", width: \"1024\", height: \"1085\", fill: \"#F4F4F4\" }),\n            react_1.default.createElement(\"path\", { id: \"Rectangle 1\", d: \"M-268 -113C-268 -116.866 -264.866 -120 -261 -120H749C752.866 -120 756 -116.866 756 -113V799C756 802.866 752.866 806 749 806H-261C-264.866 806 -268 802.866 -268 799V-113Z\", fill: \"white\" }),\n            react_1.default.createElement(\"g\", { id: \"Post 1\" },\n                react_1.default.createElement(\"g\", { id: \"Group 1\" },\n                    react_1.default.createElement(\"path\", { id: \"Vector\", d: \"M8 0C4.36364 0 1.25818 2.28067 0 5.5C1.25818 8.71933 4.36364 11 8 11C11.6364 11 14.7418 8.71933 16 5.5C14.7418 2.28067 11.6364 0 8 0ZM8 9.16667C5.99273 9.16667 4.36364 7.524 4.36364 5.5C4.36364 3.476 5.99273 1.83333 8 1.83333C10.0073 1.83333 11.6364 3.476 11.6364 5.5C11.6364 7.524 10.0073 9.16667 8 9.16667ZM8 3.3C6.79273 3.3 5.81818 4.28267 5.81818 5.5C5.81818 6.71733 6.79273 7.7 8 7.7C9.20727 7.7 10.1818 6.71733 10.1818 5.5C10.1818 4.28267 9.20727 3.3 8 3.3Z\", fill: \"#999999\" })))),\n        react_1.default.createElement(\"defs\", null,\n            react_1.default.createElement(\"clipPath\", { id: \"clip0_94_2\" },\n                react_1.default.createElement(\"rect\", { width: \"1024\", height: \"1085\", fill: \"white\", transform: \"translate(-268 -279)\" })))));\n}\nexports.ViewsIcon = ViewsIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/ViewsIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./AnonimIcon */ \"./src/shared/icons/AnonimIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./ArrowIcon */ \"./src/shared/icons/ArrowIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./CommentsIcon */ \"./src/shared/icons/CommentsIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./ComplainIcon */ \"./src/shared/icons/ComplainIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./DeleteIcon */ \"./src/shared/icons/DeleteIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./DeleteGrayIcon */ \"./src/shared/icons/DeleteGrayIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./HideIcon */ \"./src/shared/icons/HideIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./MailIcon */ \"./src/shared/icons/MailIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/icons/MenuIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./MyPostIcon */ \"./src/shared/icons/MyPostIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/icons/SaveIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./SaveGrayIcon */ \"./src/shared/icons/SaveGrayIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./SearchIcon */ \"./src/shared/icons/SearchIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./src/shared/icons/ShareIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./ShareGrayIcon */ \"./src/shared/icons/ShareGrayIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./StatisticIcon */ \"./src/shared/icons/StatisticIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./StatisticGrayIcon */ \"./src/shared/icons/StatisticGrayIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./ViewsIcon */ \"./src/shared/icons/ViewsIcon.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/icons/index.ts?");

/***/ }),

/***/ "./src/shared/reducers/index.ts":
/*!**************************************!*\
  !*** ./src/shared/reducers/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\nvar meReducer_1 = __webpack_require__(/*! ./me/meReducer */ \"./src/shared/reducers/me/meReducer.ts\");\nvar tokenReducer_1 = __webpack_require__(/*! ./token/tokenReducer */ \"./src/shared/reducers/token/tokenReducer.ts\");\nvar postsReducer_1 = __webpack_require__(/*! ./posts/postsReducer */ \"./src/shared/reducers/posts/postsReducer.ts\");\nexports.default = (0, redux_1.combineReducers)({\n    tokenReducer: tokenReducer_1.tokenReducer,\n    meReducer: meReducer_1.meReducer,\n    postsReducer: postsReducer_1.postsReducer,\n});\n\n\n//# sourceURL=webpack:///./src/shared/reducers/index.ts?");

/***/ }),

/***/ "./src/shared/reducers/me/actions.ts":
/*!*******************************************!*\
  !*** ./src/shared/reducers/me/actions.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.meRequestSuccess = exports.meRequestError = exports.meRequestStart = exports.ME_REQUEST_SUCCESS = exports.ME_REQUEST_ERROR = exports.ME_START_REQUEST = void 0;\nexports.ME_START_REQUEST = 'ME_START_REQUEST';\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\nvar meRequestStart = function () { return ({\n    type: exports.ME_START_REQUEST,\n}); };\nexports.meRequestStart = meRequestStart;\nvar meRequestError = function (error) { return ({\n    type: exports.ME_REQUEST_ERROR,\n    error: error,\n}); };\nexports.meRequestError = meRequestError;\nvar meRequestSuccess = function (data) { return ({\n    type: exports.ME_REQUEST_SUCCESS,\n    data: data,\n}); };\nexports.meRequestSuccess = meRequestSuccess;\n\n\n//# sourceURL=webpack:///./src/shared/reducers/me/actions.ts?");

/***/ }),

/***/ "./src/shared/reducers/me/meReducer.ts":
/*!*********************************************!*\
  !*** ./src/shared/reducers/me/meReducer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.meRequestQuery = exports.meReducer = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/shared/reducers/me/actions.ts\");\nvar meState = {\n    loading: false,\n    me: {\n        error: '',\n        data: {},\n    },\n};\nvar meReducer = function (state, action) {\n    if (state === void 0) { state = meState; }\n    switch (action.type) {\n        case actions_1.ME_START_REQUEST:\n            return __assign(__assign({}, state), { loading: true });\n        case actions_1.ME_REQUEST_ERROR:\n            return __assign(__assign({}, state), { loading: false, me: __assign(__assign({}, state.me), { error: action.error }) });\n        case actions_1.ME_REQUEST_SUCCESS:\n            return __assign(__assign({}, state), { loading: false, me: __assign(__assign({}, state.me), { data: action.data }) });\n        default:\n            return state;\n    }\n};\nexports.meReducer = meReducer;\nvar meRequestQuery = function () { return function (dispatch, getState) {\n    dispatch((0, actions_1.meRequestStart)());\n    axios_1.default\n        .get('https://oauth.reddit.com/api/v1/me', {\n        headers: { Authorization: \"Bearer \".concat(getState().tokenReducer.token) },\n    })\n        .then(function (resp) {\n        var userData = resp.data;\n        dispatch((0, actions_1.meRequestSuccess)({ name: userData.name, iconImg: userData.icon_img }));\n    })\n        .catch(function (error) {\n        console.error(error);\n        dispatch((0, actions_1.meRequestError)(String(error)));\n    });\n}; };\nexports.meRequestQuery = meRequestQuery;\n\n\n//# sourceURL=webpack:///./src/shared/reducers/me/meReducer.ts?");

/***/ }),

/***/ "./src/shared/reducers/posts/actions.ts":
/*!**********************************************!*\
  !*** ./src/shared/reducers/posts/actions.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.postsRequestSuccess = exports.postsRequestError = exports.postsRequestStart = exports.POSTS_REQUEST_SUCCESS = exports.POSTS_REQUEST_ERROR = exports.POSTS_START_REQUEST = void 0;\nexports.POSTS_START_REQUEST = 'POSTS_START_REQUEST';\nexports.POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';\nexports.POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';\nvar postsRequestStart = function () { return ({\n    type: exports.POSTS_START_REQUEST,\n}); };\nexports.postsRequestStart = postsRequestStart;\nvar postsRequestError = function (error) { return ({\n    type: exports.POSTS_REQUEST_ERROR,\n    error: error,\n}); };\nexports.postsRequestError = postsRequestError;\nvar postsRequestSuccess = function (data, after) { return ({\n    type: exports.POSTS_REQUEST_SUCCESS,\n    data: data,\n    after: after,\n}); };\nexports.postsRequestSuccess = postsRequestSuccess;\n\n\n//# sourceURL=webpack:///./src/shared/reducers/posts/actions.ts?");

/***/ }),

/***/ "./src/shared/reducers/posts/postsReducer.ts":
/*!***************************************************!*\
  !*** ./src/shared/reducers/posts/postsReducer.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.postsRequestQuery = exports.postsReducer = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/shared/reducers/posts/actions.ts\");\nvar postsState = {\n    loading: false,\n    posts: {\n        error: '',\n        data: [],\n        after: '',\n    },\n};\nvar postsReducer = function (state, action) {\n    if (state === void 0) { state = postsState; }\n    switch (action.type) {\n        case actions_1.POSTS_START_REQUEST:\n            return __assign(__assign({}, state), { loading: true });\n        case actions_1.POSTS_REQUEST_ERROR:\n            return __assign(__assign({}, state), { loading: false, posts: __assign(__assign({}, state.posts), { error: action.error }) });\n        case actions_1.POSTS_REQUEST_SUCCESS:\n            return __assign(__assign({}, state), { loading: false, posts: __assign(__assign({}, state.posts), { data: __spreadArray([], action.data, true), after: action.after }) });\n        default:\n            return state;\n    }\n};\nexports.postsReducer = postsReducer;\nvar postsRequestQuery = function () { return function (dispatch, getState) {\n    var token = getState().tokenReducer.token;\n    var nextAfter = getState().postsReducer.posts.after;\n    var currentPosts = [];\n    currentPosts.push.apply(currentPosts, getState().postsReducer.posts.data);\n    dispatch((0, actions_1.postsRequestStart)());\n    if (token && token !== 'undefined') {\n        axios_1.default\n            .get('https://oauth.reddit.com/best.json?sr_detail=true', {\n            headers: { Authorization: \"bearer \".concat(token) },\n            params: {\n                limit: 10,\n                after: nextAfter,\n            },\n        })\n            .then(function (resp) {\n            var postsData = resp.data.data.children;\n            if (postsData || postsData.length !== 0) {\n                var posts = postsData.map(function (item) {\n                    return {\n                        author: item.data.author,\n                        author_img: item.data.sr_detail.icon_img,\n                        created: item.data.created,\n                        id: item.data.id,\n                        score: item.data.score,\n                        selftext: item.data.selftext,\n                        selftext_html: item.data.selftext_html,\n                        sr_detail: {\n                            icon_img: item.data.sr_detail.icon_img,\n                            public_description: item.data.sr_detail.public_description,\n                        },\n                        subreddit: item.data.subreddit,\n                        title: item.data.title,\n                        thumbnail: item.data.thumbnail,\n                        num_comments: item.data.num_comments,\n                        upvote_ratio: item.data.upvote_ratio,\n                        url: item.data.url,\n                    };\n                });\n                currentPosts.push.apply(currentPosts, posts);\n                dispatch((0, actions_1.postsRequestSuccess)(currentPosts, resp.data.data.after));\n            }\n        })\n            .catch(function (error) {\n            console.error(error);\n            dispatch((0, actions_1.postsRequestError)(String(error)));\n        });\n    }\n}; };\nexports.postsRequestQuery = postsRequestQuery;\n\n\n//# sourceURL=webpack:///./src/shared/reducers/posts/postsReducer.ts?");

/***/ }),

/***/ "./src/shared/reducers/token/actions.ts":
/*!**********************************************!*\
  !*** ./src/shared/reducers/token/actions.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setToken = exports.tokenState = exports.SET_TOKEN = void 0;\nexports.SET_TOKEN = 'SET_TOKEN';\nexports.tokenState = {\n    laoding: false,\n    error: '',\n    token: '',\n};\nvar setToken = function (token) { return ({\n    type: exports.SET_TOKEN,\n    token: token,\n}); };\nexports.setToken = setToken;\n\n\n//# sourceURL=webpack:///./src/shared/reducers/token/actions.ts?");

/***/ }),

/***/ "./src/shared/reducers/token/tokenReducer.ts":
/*!***************************************************!*\
  !*** ./src/shared/reducers/token/tokenReducer.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.saveToken = exports.tokenReducer = void 0;\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/shared/reducers/token/actions.ts\");\nvar code = '';\nif (typeof window !== 'undefined') {\n    code = new URLSearchParams(window.location.href).get('code');\n}\nvar tokenReducer = function (state, action) {\n    if (state === void 0) { state = actions_1.tokenState; }\n    switch (action.type) {\n        case actions_1.SET_TOKEN:\n            return __assign(__assign({}, state), { token: action.token });\n        default:\n            return state;\n    }\n};\nexports.tokenReducer = tokenReducer;\nvar saveToken = function () { return function (dispatch) {\n    if (!window.__token__ || window.__token__ === 'undefined') {\n        var lsToken = localStorage.getItem('redditToken');\n        if (lsToken && lsToken !== 'undefined')\n            dispatch((0, actions_1.setToken)(lsToken));\n    }\n    if (window.__token__ && window.__token__ !== 'undefined') {\n        dispatch((0, actions_1.setToken)(window.__token__));\n        localStorage.setItem('redditToken', window.__token__);\n    }\n}; };\nexports.saveToken = saveToken;\n\n\n//# sourceURL=webpack:///./src/shared/reducers/token/tokenReducer.ts?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.assoc = void 0;\nfunction assoc(key, value) {\n    return function (obj) {\n        var _a;\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\n    };\n}\nexports.assoc = assoc;\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/js/declOfNum.ts":
/*!***********************************!*\
  !*** ./src/utils/js/declOfNum.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.declOfNum = void 0;\nvar declOfNum = function (n, t) {\n    n = Math.abs(n) % 100;\n    var n1 = n % 10;\n    if (n > 10 && n < 20) {\n        return t[2];\n    }\n    if (n1 > 1 && n1 < 5) {\n        return t[1];\n    }\n    if (n1 == 1) {\n        return t[0];\n    }\n    return t[2];\n};\nexports.declOfNum = declOfNum;\n\n\n//# sourceURL=webpack:///./src/utils/js/declOfNum.ts?");

/***/ }),

/***/ "./src/utils/js/generateRandomIndex.ts":
/*!*********************************************!*\
  !*** ./src/utils/js/generateRandomIndex.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.generateId = exports.generateRandomString = void 0;\nvar assoc_1 = __webpack_require__(/*! ./assoc */ \"./src/utils/js/assoc.ts\");\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\nexports.generateRandomString = generateRandomString;\nvar generateId = function (obj) { return (0, assoc_1.assoc)('id', (0, exports.generateRandomString)())(obj); };\nexports.generateId = generateId;\n\n\n//# sourceURL=webpack:///./src/utils/js/generateRandomIndex.ts?");

/***/ }),

/***/ "./src/utils/js/getCoordinates.ts":
/*!****************************************!*\
  !*** ./src/utils/js/getCoordinates.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getCoordinates = void 0;\nfunction getCoordinates(args) {\n    var btnTop = args.btnTop, btnRight = args.btnRight, widthScreen = args.widthScreen;\n    if (!btnTop || !btnRight)\n        return [0, 0];\n    if (widthScreen <= 1024) {\n        return [\n            window.scrollY + btnTop + 41,\n            window.innerWidth - btnRight - 15\n        ];\n    }\n    else {\n        return [\n            window.scrollY + btnTop + 51,\n            window.innerWidth - btnRight - 78\n        ];\n    }\n}\nexports.getCoordinates = getCoordinates;\n\n\n//# sourceURL=webpack:///./src/utils/js/getCoordinates.ts?");

/***/ }),

/***/ "./src/utils/js/getDatePublished.ts":
/*!******************************************!*\
  !*** ./src/utils/js/getDatePublished.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getDatePublished = void 0;\nvar declOfNum_1 = __webpack_require__(/*! ./declOfNum */ \"./src/utils/js/declOfNum.ts\");\nvar getHours_1 = __webpack_require__(/*! ./getHours */ \"./src/utils/js/getHours.ts\");\nvar EMonths;\n(function (EMonths) {\n    EMonths[EMonths[\"\\u044F\\u043D\\u0432\\u0430\\u0440\\u044F\"] = 0] = \"\\u044F\\u043D\\u0432\\u0430\\u0440\\u044F\";\n    EMonths[EMonths[\"\\u0444\\u0435\\u0432\\u0440\\u0430\\u043B\\u044F\"] = 1] = \"\\u0444\\u0435\\u0432\\u0440\\u0430\\u043B\\u044F\";\n    EMonths[EMonths[\"\\u043C\\u0430\\u0440\\u0442\\u0430\"] = 2] = \"\\u043C\\u0430\\u0440\\u0442\\u0430\";\n    EMonths[EMonths[\"\\u0430\\u043F\\u0440\\u0435\\u043B\\u044F\"] = 3] = \"\\u0430\\u043F\\u0440\\u0435\\u043B\\u044F\";\n    EMonths[EMonths[\"\\u043C\\u0430\\u044F\"] = 4] = \"\\u043C\\u0430\\u044F\";\n    EMonths[EMonths[\"\\u0438\\u044E\\u043D\\u044F\"] = 5] = \"\\u0438\\u044E\\u043D\\u044F\";\n    EMonths[EMonths[\"\\u0438\\u044E\\u043B\\u044F\"] = 6] = \"\\u0438\\u044E\\u043B\\u044F\";\n    EMonths[EMonths[\"\\u0430\\u0432\\u0433\\u0443\\u0441\\u0442\\u0430\"] = 7] = \"\\u0430\\u0432\\u0433\\u0443\\u0441\\u0442\\u0430\";\n    EMonths[EMonths[\"\\u0441\\u0435\\u043D\\u0442\\u044F\\u0431\\u0440\\u044F\"] = 8] = \"\\u0441\\u0435\\u043D\\u0442\\u044F\\u0431\\u0440\\u044F\";\n    EMonths[EMonths[\"\\u043E\\u043A\\u0442\\u044F\\u0431\\u0440\\u044F\"] = 9] = \"\\u043E\\u043A\\u0442\\u044F\\u0431\\u0440\\u044F\";\n    EMonths[EMonths[\"\\u043D\\u043E\\u044F\\u0431\\u0440\\u044F\"] = 10] = \"\\u043D\\u043E\\u044F\\u0431\\u0440\\u044F\";\n    EMonths[EMonths[\"\\u0434\\u0435\\u043A\\u0430\\u0431\\u0440\\u044F\"] = 11] = \"\\u0434\\u0435\\u043A\\u0430\\u0431\\u0440\\u044F\";\n})(EMonths || (EMonths = {}));\nvar getDatePublished = function (a) {\n    var createdMult = a * 1000;\n    var nowDate = new Date().valueOf();\n    if (((nowDate - createdMult) / 86400000) < 1) {\n        return (\"\".concat((0, getHours_1.getHours)(createdMult), \" \").concat((0, declOfNum_1.declOfNum)((0, getHours_1.getHours)(createdMult), ['час', 'часа', 'часов']), \" \\u043D\\u0430\\u0437\\u0430\\u0434\"));\n    }\n    return \"\".concat(new Date(createdMult).getDate(), \" \").concat(EMonths[new Date(createdMult).getMonth()], \" \").concat(new Date(createdMult).getFullYear());\n};\nexports.getDatePublished = getDatePublished;\n\n\n//# sourceURL=webpack:///./src/utils/js/getDatePublished.ts?");

/***/ }),

/***/ "./src/utils/js/getHours.ts":
/*!**********************************!*\
  !*** ./src/utils/js/getHours.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getHours = void 0;\nvar getHours = function (a) { return Math.floor((Date.now() - a) / 3600000); };\nexports.getHours = getHours;\n\n\n//# sourceURL=webpack:///./src/utils/js/getHours.ts?");

/***/ }),

/***/ "./src/utils/js/merge.ts":
/*!*******************************!*\
  !*** ./src/utils/js/merge.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.merge = void 0;\nfunction merge(obj) {\n    return function (obj2) { return (__assign(__assign({}, obj), obj2)); };\n}\nexports.merge = merge;\n\n\n//# sourceURL=webpack:///./src/utils/js/merge.ts?");

/***/ }),

/***/ "./src/utils/react/cardMenuList.tsx":
/*!******************************************!*\
  !*** ./src/utils/react/cardMenuList.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.cardMenuList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Icon_1 = __webpack_require__(/*! ../../shared/Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\nvar generateRandomIndex_1 = __webpack_require__(/*! ../js/generateRandomIndex */ \"./src/utils/js/generateRandomIndex.ts\");\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ../../shared/CardsList/Card/Menu/menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\nexports.cardMenuList = [\n    {\n        As: 'li',\n        image: react_1.default.createElement(Icon_1.Icon, { iconName: Icon_1.EIcons.comments, iconWidth: 16 }),\n        text: 'Комментарии',\n        className: menu_css_1.default.dropdownListItem,\n        isMobile: false,\n    },\n    {\n        As: 'li',\n        image: react_1.default.createElement(Icon_1.Icon, { iconName: Icon_1.EIcons.share, iconWidth: 16 }),\n        text: 'Поделиться',\n        className: menu_css_1.default.dropdownListItem,\n        isMobile: false,\n    },\n    {\n        As: 'li',\n        image: react_1.default.createElement(Icon_1.Icon, { iconName: Icon_1.EIcons.hide, iconWidth: 16 }),\n        text: 'Скрыть',\n        className: menu_css_1.default.dropdownListItem,\n        isMobile: true,\n    },\n    {\n        As: 'li',\n        image: react_1.default.createElement(Icon_1.Icon, { iconName: Icon_1.EIcons.save, iconWidth: 16 }),\n        text: 'Сохранить',\n        className: menu_css_1.default.dropdownListItem,\n        isMobile: false,\n    },\n    {\n        As: 'li',\n        image: react_1.default.createElement(Icon_1.Icon, { iconName: Icon_1.EIcons.complain, iconWidth: 16 }),\n        text: 'Пожаловаться',\n        className: menu_css_1.default.dropdownListItem,\n        isMobile: true,\n    },\n].map(generateRandomIndex_1.generateId);\n\n\n//# sourceURL=webpack:///./src/utils/react/cardMenuList.tsx?");

/***/ }),

/***/ "./src/utils/react/clearComments.ts":
/*!******************************************!*\
  !*** ./src/utils/react/clearComments.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.clearComments = void 0;\nfunction clearComments(comments) {\n    var newArray = [];\n    comments.forEach(function (comment) {\n        var _a, _b, _c;\n        var cleared = {\n            author: comment.data.author,\n            author_img: (_a = comment.data.author_img) !== null && _a !== void 0 ? _a : undefined,\n            body: comment.data.body,\n            body_html: comment.data.body_html,\n            created: comment.data.created,\n            id: comment.data.id,\n            score: comment.data.score,\n            subreddit: comment.data.subreddit,\n        };\n        if (typeof comment.data.replies !== 'string') {\n            cleared.children = clearComments((_c = (_b = comment.data.replies) === null || _b === void 0 ? void 0 : _b.data.children) !== null && _c !== void 0 ? _c : []);\n        }\n        newArray.push(cleared);\n    });\n    return newArray;\n}\nexports.clearComments = clearComments;\n\n\n//# sourceURL=webpack:///./src/utils/react/clearComments.ts?");

/***/ }),

/***/ "./src/utils/react/genericList.tsx":
/*!*****************************************!*\
  !*** ./src/utils/react/genericList.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GenericList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction GenericList(_a) {\n    var list = _a.list;\n    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {\n        var _b = _a.As, As = _b === void 0 ? 'div' : _b, text = _a.text, image = _a.image, onClick = _a.onClick, className = _a.className, id = _a.id, href = _a.href;\n        return (react_1.default.createElement(As, { className: className, onClick: function () { return onClick(text); }, key: id, href: href },\n            image,\n            \" \",\n            text));\n    })));\n}\nexports.GenericList = GenericList;\n\n\n//# sourceURL=webpack:///./src/utils/react/genericList.tsx?");

/***/ }),

/***/ "./src/utils/react/postControlList.tsx":
/*!*********************************************!*\
  !*** ./src/utils/react/postControlList.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.postControlList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Icon_1 = __webpack_require__(/*! ../../shared/Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\nvar generateRandomIndex_1 = __webpack_require__(/*! ../js/generateRandomIndex */ \"./src/utils/js/generateRandomIndex.ts\");\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ../../shared/CardsList/Card/Menu/menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\nexports.postControlList = [\n    {\n        As: 'li',\n        image: react_1.default.createElement(Icon_1.Icon, { iconName: Icon_1.EIcons.share, iconWidth: 16 }),\n        text: 'Поделиться',\n        className: menu_css_1.default.dropdownListItem,\n        isResponce: true,\n    },\n    {\n        As: 'li',\n        image: react_1.default.createElement(Icon_1.Icon, { iconName: Icon_1.EIcons.hide, iconWidth: 16 }),\n        text: 'Скрыть',\n        className: menu_css_1.default.dropdownListItem,\n        isResponce: false,\n    },\n    {\n        As: 'li',\n        image: react_1.default.createElement(Icon_1.Icon, { iconName: Icon_1.EIcons.save, iconWidth: 16 }),\n        text: 'Сохранить',\n        className: menu_css_1.default.dropdownListItem,\n        isResponce: false,\n    },\n    {\n        As: 'li',\n        image: react_1.default.createElement(Icon_1.Icon, { iconName: Icon_1.EIcons.complain, iconWidth: 16 }),\n        text: 'Пожаловаться',\n        className: menu_css_1.default.dropdownListItem,\n        isResponce: true,\n    },\n].map(generateRandomIndex_1.generateId);\n\n\n//# sourceURL=webpack:///./src/utils/react/postControlList.tsx?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formik\");\n\n//# sourceURL=webpack:///external_%22formik%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });