/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_Provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/Provider */ "./src/store/Provider.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Search */ "./src/components/Search.js");
/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Item */ "./src/components/Item.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 // import data from './last';
// console.log(data);
// chrome.bookmarks.search({ title: 'todo2' }, newFolder => {
//   data.map(v => {
//     const { title, url } = v;
//     if (url) {
//       chrome.bookmarks.create({ parentId: newFolder[0].id, title, url });
//     }
//   });
// });

var App = function App() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_Provider__WEBPACK_IMPORTED_MODULE_2__["Context"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      filtxt = _useContext2[0].filtxt,
      dispatch = _useContext2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      Bookmark = _useState2[0],
      setBookmark = _useState2[1];

  var iteration = function iteration(acc, i) {
    return Array.isArray(i.children) ? [i.children].reduce(iteration, acc) : acc.concat(i);
  };

  var filterHandler = function filterHandler(v) {
    return (v.title + v.url).toLowerCase().includes(filtxt.toLowerCase());
  };

  var getSubTree = function getSubTree(id) {
    chrome.bookmarks.getSubTree(id, function (v) {
      var BookmarkList = v[0].children.reduce(iteration, []);
      console.log(BookmarkList);
      setBookmark(BookmarkList);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    chrome.bookmarks.search({
      title: 'new'
    }, function (v) {
      getSubTree(v[0].id);
      chrome.bookmarks.onRemoved.addListener(function (_) {
        return getSubTree(v[0].id);
      });
      chrome.bookmarks.onCreated.addListener(function (_) {
        return getSubTree(v[0].id);
      });
      chrome.bookmarks.onChildrenReordered.addListener(function (_) {
        return console.log('onChildrenReordered');
      });
      chrome.bookmarks.onMoved.addListener(function (_) {
        return getSubTree(v[0].id);
      });
      chrome.bookmarks.onChanged.addListener(function (_) {
        return getSubTree(v[0].id);
      });
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      border: '1px solid',
      width: '80%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      margin: 'auto'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item-conent"
  }, Bookmark.filter(filterHandler).map(function (v) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Item__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: v.id,
      Bookmark: v
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Item.js":
/*!********************************!*\
  !*** ./src/components/Item.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Item = function Item(_ref) {
  var Bookmark = _ref.Bookmark;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('none'),
      _useState2 = _slicedToArray(_useState, 2),
      Dis = _useState2[0],
      setDis = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Bookmark.title),
      _useState4 = _slicedToArray(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Bookmark.url),
      _useState6 = _slicedToArray(_useState5, 2),
      url = _useState6[0],
      setUrl = _useState6[1];

  var changeHandler = function changeHandler(id) {
    chrome.bookmarks.update(id, {
      title: title,
      url: url
    });
  };

  var submit = function submit(e) {
    e.preventDefault();
    setDis('none');
    changeHandler(Bookmark.id, {
      title: title,
      url: url
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: Bookmark.url,
    target: "_blank",
    title: Bookmark.title
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "chrome://favicon/size/24/".concat(Bookmark.url)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Bookmark.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: function onClick() {
      setDis(function (d) {
        return d === 'none' ? 'flex' : 'none';
      });
    },
    className: "menu"
  }, "\u6539"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: submit,
    className: "form",
    style: {
      display: Dis
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "title",
    value: title,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "url",
    value: url,
    onChange: function onChange(e) {
      return setUrl(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "\u5B8C\u6210")));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./src/components/Search.js":
/*!**********************************!*\
  !*** ./src/components/Search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_Provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Provider */ "./src/store/Provider.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Search = function Search() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_Provider__WEBPACK_IMPORTED_MODULE_1__["Context"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      filtxt = _useContext2[0].filtxt,
      dispatch = _useContext2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "search",
    value: filtxt,
    onChange: function onChange(e) {
      return dispatch({
        type: 'filtxt',
        filtxt: e.target.value
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/components/Todo.js":
/*!********************************!*\
  !*** ./src/components/Todo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Todo = function Todo() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      Bookmark = _useState2[0],
      setBookmark = _useState2[1];

  var iteration = function iteration(acc, i) {
    return Array.isArray(i.children) ? [i.children].reduce(iteration, acc) : acc.concat(i);
  };

  var getSubTree = function getSubTree(id) {
    chrome.bookmarks.getSubTree(id, function (v) {
      var BookmarkList = v[0].children.reduce(iteration, []);
      console.log(BookmarkList);
      setBookmark(BookmarkList);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    chrome.bookmarks.search({
      title: 'todo'
    }, function (v) {
      getSubTree(v[0].id);
      console.log(v);
      chrome.bookmarks.onRemoved.addListener(function (_) {
        return getSubTree(v[0].id);
      });
      chrome.bookmarks.onCreated.addListener(function (_) {
        return getSubTree(v[0].id);
      });
      chrome.bookmarks.onChildrenReordered.addListener(function (_) {
        return console.log('onChildrenReordered');
      });
      chrome.bookmarks.onMoved.addListener(function (_) {
        return getSubTree(v[0].id);
      });
      chrome.bookmarks.onChanged.addListener(function (_) {
        return getSubTree(v[0].id);
      });
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "todo"
  }, Bookmark.map(function (Bookmark) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: Bookmark.id,
      href: Bookmark.url,
      target: "_blank",
      title: Bookmark.title
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "chrome://favicon/size/24/".concat(Bookmark.url)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Bookmark.title));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Todo);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors/blue */ "./node_modules/@material-ui/core/colors/blue.js");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _store_Provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/Provider */ "./src/store/Provider.js");
/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Todo */ "./src/components/Todo.js");









var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])({
  palette: {
    primary: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_5___default.a
  }
});
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
  theme: theme
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_store_Provider__WEBPACK_IMPORTED_MODULE_7__["default"], null, location.hash === '#todo' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Todo__WEBPACK_IMPORTED_MODULE_8__["default"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_6__["default"], null))), document.getElementById('root'));

/***/ }),

/***/ "./src/store/Provider.js":
/*!*******************************!*\
  !*** ./src/store/Provider.js ***!
  \*******************************/
/*! exports provided: Context, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Context = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

var reducer = function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case 'filtxt':
      return _objectSpread({}, state, {
        filtxt: action.filtxt
      });

    case 'two':
      return _objectSpread({}, state, {
        num: state.num - 1
      });

    default:
      return state;
  }
};

var initState = {
  filtxt: ''
};

var Provider = function Provider(props) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {
    value: [state, dispatch]
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvUHJvdmlkZXIuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJmaWx0eHQiLCJkaXNwYXRjaCIsInVzZVN0YXRlIiwiQm9va21hcmsiLCJzZXRCb29rbWFyayIsIml0ZXJhdGlvbiIsImFjYyIsImkiLCJBcnJheSIsImlzQXJyYXkiLCJjaGlsZHJlbiIsInJlZHVjZSIsImNvbmNhdCIsImZpbHRlckhhbmRsZXIiLCJ2IiwidGl0bGUiLCJ1cmwiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZ2V0U3ViVHJlZSIsImlkIiwiY2hyb21lIiwiYm9va21hcmtzIiwiQm9va21hcmtMaXN0IiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInNlYXJjaCIsIm9uUmVtb3ZlZCIsImFkZExpc3RlbmVyIiwiXyIsIm9uQ3JlYXRlZCIsIm9uQ2hpbGRyZW5SZW9yZGVyZWQiLCJvbk1vdmVkIiwib25DaGFuZ2VkIiwiYm9yZGVyIiwid2lkdGgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW4iLCJmaWx0ZXIiLCJtYXAiLCJJdGVtIiwiRGlzIiwic2V0RGlzIiwic2V0VGl0bGUiLCJzZXRVcmwiLCJjaGFuZ2VIYW5kbGVyIiwidXBkYXRlIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZCIsInRhcmdldCIsInZhbHVlIiwiU2VhcmNoIiwidHlwZSIsIlRvZG8iLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJibHVlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJsb2NhdGlvbiIsImhhc2giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwibnVtIiwiaW5pdFN0YXRlIiwiUHJvdmlkZXIiLCJwcm9wcyIsInVzZVJlZHVjZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFD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WTtBQUFwQzs7QUFDRjtBQUNFLGFBQU9GLEtBQVA7QUFOSjtBQVFELENBVkQ7O0FBWUEsSUFBTUcsU0FBUyxHQUFHO0FBQ2hCNUUsUUFBTSxFQUFFO0FBRFEsQ0FBbEI7O0FBSUEsSUFBTTZFLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEtBQUssRUFBSTtBQUFBLG9CQUNFQyx3REFBVSxDQUFDUCxPQUFELEVBQVVJLFNBQVYsQ0FEWjtBQUFBO0FBQUEsTUFDakJILEtBRGlCO0FBQUEsTUFDVnhFLFFBRFU7O0FBR3hCLFNBQU8sMkRBQUMsT0FBRCxDQUFTLFFBQVQ7QUFBa0IsU0FBSyxFQUFFLENBQUN3RSxLQUFELEVBQVF4RSxRQUFSO0FBQXpCLEtBQTZDNkUsS0FBSyxDQUFDcEUsUUFBbkQsQ0FBUDtBQUNELENBSkQ7O0FBTWVtRSx1RUFBZixFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vQXBwLmNzcyc7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi9zdG9yZS9Qcm92aWRlcic7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2gnO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL0l0ZW0nO1xuLy8gaW1wb3J0IGRhdGEgZnJvbSAnLi9sYXN0JztcblxuLy8gY29uc29sZS5sb2coZGF0YSk7XG5cbi8vIGNocm9tZS5ib29rbWFya3Muc2VhcmNoKHsgdGl0bGU6ICd0b2RvMicgfSwgbmV3Rm9sZGVyID0+IHtcbi8vICAgZGF0YS5tYXAodiA9PiB7XG4vLyAgICAgY29uc3QgeyB0aXRsZSwgdXJsIH0gPSB2O1xuLy8gICAgIGlmICh1cmwpIHtcbi8vICAgICAgIGNocm9tZS5ib29rbWFya3MuY3JlYXRlKHsgcGFyZW50SWQ6IG5ld0ZvbGRlclswXS5pZCwgdGl0bGUsIHVybCB9KTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfSk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW3sgZmlsdHh0IH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGNvbnN0IFtCb29rbWFyaywgc2V0Qm9va21hcmtdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGl0ZXJhdGlvbiA9IChhY2MsIGkpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpLmNoaWxkcmVuKSA/IFtpLmNoaWxkcmVuXS5yZWR1Y2UoaXRlcmF0aW9uLCBhY2MpIDogYWNjLmNvbmNhdChpKTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJIYW5kbGVyID0gdiA9PiB7XG4gICAgcmV0dXJuICh2LnRpdGxlICsgdi51cmwpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdHh0LnRvTG93ZXJDYXNlKCkpO1xuICB9O1xuXG4gIGNvbnN0IGdldFN1YlRyZWUgPSBpZCA9PiB7XG4gICAgY2hyb21lLmJvb2ttYXJrcy5nZXRTdWJUcmVlKGlkLCB2ID0+IHtcbiAgICAgIGNvbnN0IEJvb2ttYXJrTGlzdCA9IHZbMF0uY2hpbGRyZW4ucmVkdWNlKGl0ZXJhdGlvbiwgW10pO1xuICAgICAgY29uc29sZS5sb2coQm9va21hcmtMaXN0KTtcbiAgICAgIHNldEJvb2ttYXJrKEJvb2ttYXJrTGlzdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaHJvbWUuYm9va21hcmtzLnNlYXJjaCh7IHRpdGxlOiAnbmV3JyB9LCB2ID0+IHtcbiAgICAgIGdldFN1YlRyZWUodlswXS5pZCk7XG4gICAgICBjaHJvbWUuYm9va21hcmtzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcihfID0+IGdldFN1YlRyZWUodlswXS5pZCkpO1xuICAgICAgY2hyb21lLmJvb2ttYXJrcy5vbkNyZWF0ZWQuYWRkTGlzdGVuZXIoXyA9PiBnZXRTdWJUcmVlKHZbMF0uaWQpKTtcbiAgICAgIGNocm9tZS5ib29rbWFya3Mub25DaGlsZHJlblJlb3JkZXJlZC5hZGRMaXN0ZW5lcihfID0+IGNvbnNvbGUubG9nKCdvbkNoaWxkcmVuUmVvcmRlcmVkJykpO1xuICAgICAgY2hyb21lLmJvb2ttYXJrcy5vbk1vdmVkLmFkZExpc3RlbmVyKF8gPT4gZ2V0U3ViVHJlZSh2WzBdLmlkKSk7XG4gICAgICBjaHJvbWUuYm9va21hcmtzLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihfID0+IGdldFN1YlRyZWUodlswXS5pZCkpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgICB3aWR0aDogJzgwJScsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBtYXJnaW46ICdhdXRvJ1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8U2VhcmNoIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbS1jb25lbnQnPlxuICAgICAgICB7Qm9va21hcmsuZmlsdGVyKGZpbHRlckhhbmRsZXIpLm1hcCh2ID0+IChcbiAgICAgICAgICA8SXRlbSBrZXk9e3YuaWR9IEJvb2ttYXJrPXt2fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJdGVtID0gKHsgQm9va21hcmsgfSkgPT4ge1xuICBjb25zdCBbRGlzLCBzZXREaXNdID0gdXNlU3RhdGUoJ25vbmUnKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShCb29rbWFyay50aXRsZSk7XG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShCb29rbWFyay51cmwpO1xuXG4gIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSBpZCA9PiB7XG4gICAgY2hyb21lLmJvb2ttYXJrcy51cGRhdGUoaWQsIHsgdGl0bGUsIHVybCB9KTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0RGlzKCdub25lJyk7XG4gICAgY2hhbmdlSGFuZGxlcihCb29rbWFyay5pZCwgeyB0aXRsZSwgdXJsIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2l0ZW0nPlxuICAgICAgPGEgaHJlZj17Qm9va21hcmsudXJsfSB0YXJnZXQ9J19ibGFuaycgdGl0bGU9e0Jvb2ttYXJrLnRpdGxlfT5cbiAgICAgICAgPGltZyBzcmM9e2BjaHJvbWU6Ly9mYXZpY29uL3NpemUvMjQvJHtCb29rbWFyay51cmx9YH0gLz5cbiAgICAgICAgPHA+e0Jvb2ttYXJrLnRpdGxlfTwvcD5cbiAgICAgIDwvYT5cbiAgICAgIDxzcGFuXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXREaXMoZCA9PiAoZCA9PT0gJ25vbmUnID8gJ2ZsZXgnIDogJ25vbmUnKSk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT0nbWVudSdcbiAgICAgID5cbiAgICAgICAg5pS5XG4gICAgICA8L3NwYW4+XG5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXR9IGNsYXNzTmFtZT0nZm9ybScgc3R5bGU9e3sgZGlzcGxheTogRGlzIH19PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0ndGl0bGUnIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9e2UgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0ndXJsJyB2YWx1ZT17dXJsfSBvbkNoYW5nZT17ZSA9PiBzZXRVcmwoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8YnV0dG9uPuWujOaIkDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL1Byb3ZpZGVyJztcblxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xuICBjb25zdCBbeyBmaWx0eHQgfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgY2xhc3NOYW1lPSdzZWFyY2gnXG4gICAgICAgIHZhbHVlPXtmaWx0eHR9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IGRpc3BhdGNoKHsgdHlwZTogJ2ZpbHR4dCcsIGZpbHR4dDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IFtCb29rbWFyaywgc2V0Qm9va21hcmtdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGl0ZXJhdGlvbiA9IChhY2MsIGkpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpLmNoaWxkcmVuKSA/IFtpLmNoaWxkcmVuXS5yZWR1Y2UoaXRlcmF0aW9uLCBhY2MpIDogYWNjLmNvbmNhdChpKTtcbiAgfTtcblxuICBjb25zdCBnZXRTdWJUcmVlID0gaWQgPT4ge1xuICAgIGNocm9tZS5ib29rbWFya3MuZ2V0U3ViVHJlZShpZCwgdiA9PiB7XG4gICAgICBjb25zdCBCb29rbWFya0xpc3QgPSB2WzBdLmNoaWxkcmVuLnJlZHVjZShpdGVyYXRpb24sIFtdKTtcbiAgICAgIGNvbnNvbGUubG9nKEJvb2ttYXJrTGlzdCk7XG4gICAgICBzZXRCb29rbWFyayhCb29rbWFya0xpc3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hyb21lLmJvb2ttYXJrcy5zZWFyY2goeyB0aXRsZTogJ3RvZG8nIH0sIHYgPT4ge1xuICAgICAgZ2V0U3ViVHJlZSh2WzBdLmlkKTtcbiAgICAgIGNvbnNvbGUubG9nKHYpO1xuICAgICAgY2hyb21lLmJvb2ttYXJrcy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoXyA9PiBnZXRTdWJUcmVlKHZbMF0uaWQpKTtcbiAgICAgIGNocm9tZS5ib29rbWFya3Mub25DcmVhdGVkLmFkZExpc3RlbmVyKF8gPT4gZ2V0U3ViVHJlZSh2WzBdLmlkKSk7XG4gICAgICBjaHJvbWUuYm9va21hcmtzLm9uQ2hpbGRyZW5SZW9yZGVyZWQuYWRkTGlzdGVuZXIoXyA9PiBjb25zb2xlLmxvZygnb25DaGlsZHJlblJlb3JkZXJlZCcpKTtcbiAgICAgIGNocm9tZS5ib29rbWFya3Mub25Nb3ZlZC5hZGRMaXN0ZW5lcihfID0+IGdldFN1YlRyZWUodlswXS5pZCkpO1xuICAgICAgY2hyb21lLmJvb2ttYXJrcy5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoXyA9PiBnZXRTdWJUcmVlKHZbMF0uaWQpKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3RvZG8nPlxuICAgICAge0Jvb2ttYXJrLm1hcChCb29rbWFyayA9PiAoXG4gICAgICAgIDxhIGtleT17Qm9va21hcmsuaWR9IGhyZWY9e0Jvb2ttYXJrLnVybH0gdGFyZ2V0PSdfYmxhbmsnIHRpdGxlPXtCb29rbWFyay50aXRsZX0+XG4gICAgICAgICAgPGltZyBzcmM9e2BjaHJvbWU6Ly9mYXZpY29uL3NpemUvMjQvJHtCb29rbWFyay51cmx9YH0gLz5cbiAgICAgICAgICA8cD57Qm9va21hcmsudGl0bGV9PC9wPlxuICAgICAgICA8L2E+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGJsdWUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5pbXBvcnQgUHJvdmlkZXIgZnJvbSAnLi9zdG9yZS9Qcm92aWRlcic7XG5pbXBvcnQgVG9kbyBmcm9tICcuL2NvbXBvbmVudHMvVG9kbyc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeTogYmx1ZVxuICB9XG59KTtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgIDxDc3NCYXNlbGluZSAvPlxuICAgIDxQcm92aWRlcj57bG9jYXRpb24uaGFzaCA9PT0gJyN0b2RvJyA/IDxUb2RvIC8+IDogPEFwcCAvPn08L1Byb3ZpZGVyPlxuICA8L1RoZW1lUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zb2xlLmxvZyhzdGF0ZSwgYWN0aW9uKTtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ2ZpbHR4dCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZmlsdHh0OiBhY3Rpb24uZmlsdHh0IH07XG4gICAgY2FzZSAndHdvJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBudW06IHN0YXRlLm51bSAtIDEgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gIGZpbHR4dDogJydcbn07XG5cbmNvbnN0IFByb3ZpZGVyID0gcHJvcHMgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdFN0YXRlKTtcblxuICByZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgZGlzcGF0Y2hdfT57cHJvcHMuY2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb3ZpZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==