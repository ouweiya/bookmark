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
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









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
      setBookmark(BookmarkList);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    chrome.bookmarks.search({
      title: 'nav'
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    spacing: 1
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
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _MyMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MyMenu */ "./src/components/MyMenu.js");








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      display: 'flex',
      padding: theme.spacing(1),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      margin: theme.spacing(0),
      width: 112,
      height: 112,
      background: 'none',
      position: 'relative',
      transition: '0.3s',
      '&:hover': {
        background: 'rgba(32, 33, 36, 0.06)'
      }
    },
    image: {
      width: 48,
      height: 48,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: 'auto',
      background: '#f1f3f4',
      borderRadius: '50%'
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%'
    },
    link: {
      flex: 1,
      textAlign: 'center',
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  };
});

var Item = function Item(_ref) {
  var Bookmark = _ref.Bookmark;
  var title = Bookmark.title,
      url = Bookmark.url,
      id = Bookmark.id;
  var classes = useStyles();

  var changeHandler = function changeHandler(id) {
    chrome.bookmarks.update(id, {
      title: title,
      url: url
    });
  };

  var submit = function submit(e) {
    e.preventDefault();
    changeHandler(Bookmark.id, {
      title: title,
      url: url
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    elevation: 0,
    id: "par"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    item: true,
    container: true,
    direction: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: Bookmark.url,
    title: Bookmark.title,
    color: "inherit",
    underline: "none",
    className: classes.link
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.image,
    display: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.img,
    src: "chrome://favicon/size/24/".concat(Bookmark.url)
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body2",
    noWrap: true,
    style: {
      fontSize: '12px'
    }
  }, Bookmark.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: {
      title: title,
      url: url
    },
    id: id
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./src/components/MyDialog.js":
/*!************************************!*\
  !*** ./src/components/MyDialog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomizedDialogs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var styles = function styles(theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(2),
      paddingBottom: 0,
      display: 'flex',
      alignItems: 'center'
    }
  };
};

var DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(function (props) {
  var children = props.children,
      classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disableTypography: true,
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "body2"
  }, children));
});
var DialogContent = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function (theme) {
  return {
    root: {
      padding: theme.spacing(1)
    }
  };
})(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__["default"]);
var DialogActions = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function (theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  };
})(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__["default"]);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    box: {
      '& .MuiBackdrop-root': {
        background: '#ffffff8a'
      }
    },
    container: {
      display: 'flex',
      flexFlow: 'column wrap',
      width: 352
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  };
});
function CustomizedDialogs(props) {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.data),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  var handleChange = function handleChange(name) {
    return function (e) {
      return setValues(_objectSpread({}, values, _defineProperty({}, name, e.target.value)));
    };
  };

  var submit = function submit() {
    props.onClose();
    chrome.bookmarks.update(props.id, {
      title: values.title,
      url: values.url
    });
  };

  var cancel = function cancel(init) {
    return function (_) {
      props.onClose();
      setValues(init);
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClose: props.onClose,
    open: props.open,
    className: classes.box
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogTitle, {
    onClose: props.onClose
  }, "\u4FEE\u6539\u5FEB\u6377\u65B9\u5F0F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogContent, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: classes.container,
    noValidate: true,
    autoComplete: "off"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "\u6807\u9898",
    className: classes.textField,
    value: values.title,
    onChange: handleChange('title'),
    margin: "normal",
    InputLabelProps: {
      shrink: true
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "\u5730\u5740",
    className: classes.textField,
    value: values.url,
    onChange: handleChange('url'),
    margin: "normal",
    InputLabelProps: {
      shrink: true
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogActions, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: cancel(props.data),
    color: "primary",
    variant: "outlined",
    size: "small"
  }, "\u53D6\u6D88"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: submit,
    color: "primary",
    variant: "contained",
    size: "small"
  }, "\u4FDD\u5B58"))));
}

/***/ }),

/***/ "./src/components/MyMenu.js":
/*!**********************************!*\
  !*** ./src/components/MyMenu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MyDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyDialog */ "./src/components/MyDialog.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var options = ['None', 'Atria', 'Callisto', 'Dione', 'Ganymede'];
var ITEM_HEIGHT = 48;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    btn: {
      position: 'absolute',
      right: 0,
      top: 0,
      fontSize: 12,
      '&:hover': {
        background: 'none',
        color: '#000'
      }
    },
    icon: {
      transform: 'scale(0.8)'
    },
    dis: {
      visibility: 'hidden'
    }
  };
});

var LongMenu = function LongMenu(_ref) {
  var data = _ref.data,
      id = _ref.id;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: function onClick(_) {
      return setOpen(true);
    },
    className: "".concat(classes.btn, " ").concat(classes.dis),
    disableRipple: false,
    size: "small",
    disableFocusRipple: true,
    edge: "end",
    classes: {
      label: classes.icon
    },
    id: "dis"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyDialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: open,
    onClose: function onClose(_) {
      return setOpen(false);
    },
    data: data,
    id: id
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LongMenu);

/***/ }),

/***/ "./src/components/Search.js":
/*!**********************************!*\
  !*** ./src/components/Search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchAppBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_Provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Provider */ "./src/store/Provider.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center'
    },
    search: {
      display: 'flex',
      height: 40,
      width: '39%',
      maxWidth: 460,
      minWidth: 280,
      borderRadius: '100px',
      color: '#757575',
      background: 'white',
      boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)',
      boxSizing: 'border-box',
      transition: '0.2s',
      '&:hover': {
        boxShadow: '0 1px 9px 0 rgba(32, 33, 36, .30)'
      }
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit',
      flex: 1
    }
  };
});
function SearchAppBar() {
  var classes = useStyles();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_Provider__WEBPACK_IMPORTED_MODULE_1__["Context"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      filtxt = _useContext2[0].filtxt,
      dispatch = _useContext2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.search
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.searchIcon
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_5__["default"], {
    placeholder: "Search\u2026",
    value: filtxt,
    onChange: function onChange(e) {
      return dispatch({
        type: 'filtxt',
        filtxt: e.target.value
      });
    },
    classes: {
      root: classes.inputRoot
    }
  }))));
}

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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      width: 'auto',
      backgroundColor: theme.palette.background.paper
    },
    inputRoot: {
      color: 'inherit',
      paddingLeft: 0
    },
    iconRoot: {
      minWidth: 'auto'
    },
    avatar: {
      width: 30,
      height: 30,
      marginRight: 10
    },
    img: {
      width: 'auto',
      height: 'auto'
    },
    item: {
      padding: '0 16px'
    }
  };
});

var ListItemLink = function ListItemLink(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    component: "a"
  }, props, {
    classes: {
      root: classes.inputRoot
    }
  }));
};

var Todo = function Todo() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      Bookmark = _useState2[0],
      setBookmark = _useState2[1];

  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    document.title = 'todo';
  }, []);

  var iteration = function iteration(acc, i) {
    return Array.isArray(i.children) ? [i.children].reduce(iteration, acc) : acc.concat(i);
  };

  var getSubTree = function getSubTree(id) {
    chrome.bookmarks.getSubTree(id, function (v) {
      var BookmarkList = v[0].children.reduce(iteration, []);
      setBookmark(BookmarkList);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    chrome.bookmarks.search({
      title: 'todo'
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
  var rows = [];
  var lastCategory = null;
  Bookmark.forEach(function (mark) {
    var time = new Date(mark.dateAdded);

    if (time.getDate() !== lastCategory) {
      if (!rows[rows.length]) {
        rows[rows.length] = [];
      }

      rows[rows.length - 1].push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: time.getDate(),
        component: "div"
      }, time.toLocaleDateString().split('/').join('-')));
    }

    rows[rows.length - 1].push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      button: true,
      key: mark.id,
      className: classes.item
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemLink, {
      href: mark.url,
      title: mark.title
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      classes: {
        root: classes.iconRoot
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      src: "chrome://favicon/size/16/".concat(mark.url),
      className: classes.avatar,
      classes: {
        img: classes.img
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
      primary: mark.title
    }))));
    lastCategory = time.getDate();
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "nav",
    dense: true
  }, rows.reverse())));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5jc3M/OWI3MiIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTXlEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTXlNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub2RvLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvUHJvdmlkZXIuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJmaWx0eHQiLCJkaXNwYXRjaCIsInVzZVN0YXRlIiwiQm9va21hcmsiLCJzZXRCb29rbWFyayIsIml0ZXJhdGlvbiIsImFjYyIsImkiLCJBcnJheSIsImlzQXJyYXkiLCJjaGlsZHJlbiIsInJlZHVjZSIsImNvbmNhdCIsImZpbHRlckhhbmRsZXIiLCJ2IiwidGl0bGUiLCJ1cmwiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZ2V0U3ViVHJlZSIsImlkIiwiY2hyb21lIiwiYm9va21hcmtzIiwiQm9va21hcmtMaXN0IiwidXNlRWZmZWN0Iiwic2VhcmNoIiwib25SZW1vdmVkIiwiYWRkTGlzdGVuZXIiLCJfIiwib25DcmVhdGVkIiwib25DaGlsZHJlblJlb3JkZXJlZCIsImNvbnNvbGUiLCJsb2ciLCJvbk1vdmVkIiwib25DaGFuZ2VkIiwiZmlsdGVyIiwibWFwIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwicGFwZXIiLCJkaXNwbGF5IiwicGFkZGluZyIsInNwYWNpbmciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbiIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwidHJhbnNpdGlvbiIsImltYWdlIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luQm90dG9tIiwiYm9yZGVyUmFkaXVzIiwiaW1nIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJsaW5rIiwiZmxleCIsInRleHRBbGlnbiIsImZsZXhEaXJlY3Rpb24iLCJJdGVtIiwiY2xhc3NlcyIsImNoYW5nZUhhbmRsZXIiLCJ1cGRhdGUiLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb250U2l6ZSIsInN0eWxlcyIsImFsaWduSXRlbXMiLCJEaWFsb2dUaXRsZSIsIndpdGhTdHlsZXMiLCJwcm9wcyIsIkRpYWxvZ0NvbnRlbnQiLCJNdWlEaWFsb2dDb250ZW50IiwiRGlhbG9nQWN0aW9ucyIsIk11aURpYWxvZ0FjdGlvbnMiLCJib3giLCJjb250YWluZXIiLCJmbGV4RmxvdyIsInRleHRGaWVsZCIsIkN1c3RvbWl6ZWREaWFsb2dzIiwiUmVhY3QiLCJkYXRhIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwib25DbG9zZSIsImNhbmNlbCIsImluaXQiLCJvcGVuIiwic2hyaW5rIiwib3B0aW9ucyIsIklURU1fSEVJR0hUIiwiYnRuIiwicmlnaHQiLCJ0b3AiLCJjb2xvciIsImljb24iLCJ0cmFuc2Zvcm0iLCJkaXMiLCJ2aXNpYmlsaXR5IiwiTG9uZ01lbnUiLCJzZXRPcGVuIiwibGFiZWwiLCJqdXN0aWZ5Q29udGVudCIsIm1pbldpZHRoIiwiYm94U2hhZG93IiwiYm94U2l6aW5nIiwic2VhcmNoSWNvbiIsInBvaW50ZXJFdmVudHMiLCJpbnB1dFJvb3QiLCJTZWFyY2hBcHBCYXIiLCJ0eXBlIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsInBhZGRpbmdMZWZ0IiwiaWNvblJvb3QiLCJhdmF0YXIiLCJpdGVtIiwiTGlzdEl0ZW1MaW5rIiwiVG9kbyIsInVzZUxheW91dEVmZmVjdCIsImRvY3VtZW50Iiwicm93cyIsImxhc3RDYXRlZ29yeSIsImZvckVhY2giLCJtYXJrIiwidGltZSIsIkRhdGUiLCJkYXRlQWRkZWQiLCJnZXREYXRlIiwibGVuZ3RoIiwicHVzaCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInNwbGl0Iiwiam9pbiIsInJldmVyc2UiLCJjcmVhdGVNdWlUaGVtZSIsInByaW1hcnkiLCJibHVlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJsb2NhdGlvbiIsImhhc2giLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZUNvbnRleHQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJudW0iLCJpbml0U3RhdGUiLCJQcm92aWRlciIsInVzZVJlZHVjZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7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QUFELENBQVMsUUFBVDtBQUFrQixTQUFLLEVBQUUsQ0FBQzRKLEtBQUQsRUFBUTVKLFFBQVI7QUFBekIsS0FBNkM2RSxLQUFLLENBQUNwRSxRQUFuRCxDQUFQO0FBQ0QsQ0FKRDs7QUFNZXVKLHVFQUFmLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9BcHAuY3NzJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuL3N0b3JlL1Byb3ZpZGVyJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaCc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvSXRlbSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbeyBmaWx0eHQgfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAgY29uc3QgW0Jvb2ttYXJrLCBzZXRCb29rbWFya10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaXRlcmF0aW9uID0gKGFjYywgaSkgPT4ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGkuY2hpbGRyZW4pID8gW2kuY2hpbGRyZW5dLnJlZHVjZShpdGVyYXRpb24sIGFjYykgOiBhY2MuY29uY2F0KGkpO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlckhhbmRsZXIgPSB2ID0+IHtcbiAgICByZXR1cm4gKHYudGl0bGUgKyB2LnVybCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0eHQudG9Mb3dlckNhc2UoKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U3ViVHJlZSA9IGlkID0+IHtcbiAgICBjaHJvbWUuYm9va21hcmtzLmdldFN1YlRyZWUoaWQsIHYgPT4ge1xuICAgICAgY29uc3QgQm9va21hcmtMaXN0ID0gdlswXS5jaGlsZHJlbi5yZWR1Y2UoaXRlcmF0aW9uLCBbXSk7XG4gICAgICBzZXRCb29rbWFyayhCb29rbWFya0xpc3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hyb21lLmJvb2ttYXJrcy5zZWFyY2goeyB0aXRsZTogJ25hdicgfSwgdiA9PiB7XG4gICAgICBnZXRTdWJUcmVlKHZbMF0uaWQpO1xuICAgICAgY2hyb21lLmJvb2ttYXJrcy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoXyA9PiBnZXRTdWJUcmVlKHZbMF0uaWQpKTtcbiAgICAgIGNocm9tZS5ib29rbWFya3Mub25DcmVhdGVkLmFkZExpc3RlbmVyKF8gPT4gZ2V0U3ViVHJlZSh2WzBdLmlkKSk7XG4gICAgICBjaHJvbWUuYm9va21hcmtzLm9uQ2hpbGRyZW5SZW9yZGVyZWQuYWRkTGlzdGVuZXIoXyA9PiBjb25zb2xlLmxvZygnb25DaGlsZHJlblJlb3JkZXJlZCcpKTtcbiAgICAgIGNocm9tZS5ib29rbWFya3Mub25Nb3ZlZC5hZGRMaXN0ZW5lcihfID0+IGdldFN1YlRyZWUodlswXS5pZCkpO1xuICAgICAgY2hyb21lLmJvb2ttYXJrcy5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoXyA9PiBnZXRTdWJUcmVlKHZbMF0uaWQpKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTZWFyY2ggLz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cbiAgICAgICAge0Jvb2ttYXJrLmZpbHRlcihmaWx0ZXJIYW5kbGVyKS5tYXAodiA9PiAoXG4gICAgICAgICAgPEl0ZW0ga2V5PXt2LmlkfSBCb29rbWFyaz17dn0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgTXlNZW51IGZyb20gJy4vTXlNZW51JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDFcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDApLFxuICAgIHdpZHRoOiAxMTIsXG4gICAgaGVpZ2h0OiAxMTIsXG4gICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRyYW5zaXRpb246ICcwLjNzJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDMyLCAzMywgMzYsIDAuMDYpJ1xuICAgIH1cbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICB3aWR0aDogNDgsXG4gICAgaGVpZ2h0OiA0OCxcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2YxZjNmNCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICB9LFxuICBpbWc6IHtcbiAgICBtYXJnaW46ICdhdXRvJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJSdcbiAgfSxcbiAgbGluazoge1xuICAgIGZsZXg6IDEsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICB9XG59KSk7XG5cbmNvbnN0IEl0ZW0gPSAoeyBCb29rbWFyayB9KSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIHVybCwgaWQgfSA9IEJvb2ttYXJrO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgY2hhbmdlSGFuZGxlciA9IGlkID0+IHtcbiAgICBjaHJvbWUuYm9va21hcmtzLnVwZGF0ZShpZCwgeyB0aXRsZSwgdXJsIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjaGFuZ2VIYW5kbGVyKEJvb2ttYXJrLmlkLCB7IHRpdGxlLCB1cmwgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9IGlkPSdwYXInPlxuICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9e0Jvb2ttYXJrLnVybH1cbiAgICAgICAgICB0aXRsZT17Qm9va21hcmsudGl0bGV9XG4gICAgICAgICAgY29sb3I9J2luaGVyaXQnXG4gICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxuICAgICAgICA+XG4gICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IGRpc3BsYXk9J2ZsZXgnPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfSBzcmM9e2BjaHJvbWU6Ly9mYXZpY29uL3NpemUvMjQvJHtCb29rbWFyay51cmx9YH0gLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Micgbm9XcmFwIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcgfX0+XG4gICAgICAgICAgICB7Qm9va21hcmsudGl0bGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPE15TWVudSBkYXRhPXt7IHRpdGxlLCB1cmwgfX0gaWQ9e2lkfSAvPlxuICAgICAgPC9HcmlkPlxuICAgIDwvUGFwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IE11aURpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcbmltcG9ydCBNdWlEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IE11aURpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgcGFkZGluZ0JvdHRvbTogMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfVxufSk7XG5cbmNvbnN0IERpYWxvZ1RpdGxlID0gd2l0aFN0eWxlcyhzdHlsZXMpKHByb3BzID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NlcyB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8TXVpRGlhbG9nVGl0bGUgZGlzYWJsZVR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInPntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XG4gICAgPC9NdWlEaWFsb2dUaXRsZT5cbiAgKTtcbn0pO1xuXG5jb25zdCBEaWFsb2dDb250ZW50ID0gd2l0aFN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKVxuICB9XG59KSkoTXVpRGlhbG9nQ29udGVudCk7XG5cbmNvbnN0IERpYWxvZ0FjdGlvbnMgPSB3aXRoU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKVxuICB9XG59KSkoTXVpRGlhbG9nQWN0aW9ucyk7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgYm94OiB7XG4gICAgJyYgLk11aUJhY2tkcm9wLXJvb3QnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZmZmZjhhJ1xuICAgIH1cbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhGbG93OiAnY29sdW1uIHdyYXAnLFxuICAgIHdpZHRoOiAzNTJcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKVxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWl6ZWREaWFsb2dzKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLmRhdGEpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IG5hbWUgPT4gZSA9PiBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG5cbiAgY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xuICAgIHByb3BzLm9uQ2xvc2UoKTtcbiAgICBjaHJvbWUuYm9va21hcmtzLnVwZGF0ZShwcm9wcy5pZCwgeyB0aXRsZTogdmFsdWVzLnRpdGxlLCB1cmw6IHZhbHVlcy51cmwgfSk7XG4gIH07XG5cbiAgY29uc3QgY2FuY2VsID0gaW5pdCA9PiBfID0+IHtcbiAgICBwcm9wcy5vbkNsb3NlKCk7XG4gICAgc2V0VmFsdWVzKGluaXQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxEaWFsb2cgb25DbG9zZT17cHJvcHMub25DbG9zZX0gb3Blbj17cHJvcHMub3Blbn0gY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XG4gICAgICAgIDxEaWFsb2dUaXRsZSBvbkNsb3NlPXtwcm9wcy5vbkNsb3NlfT7kv67mlLnlv6vmjbfmlrnlvI88L0RpYWxvZ1RpdGxlPlxuICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT0nb2ZmJz5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9J+agh+mimCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy50aXRsZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgndGl0bGUnKX1cbiAgICAgICAgICAgICAgbWFyZ2luPSdub3JtYWwnXG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9J+WcsOWdgCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy51cmx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3VybCcpfVxuICAgICAgICAgICAgICBtYXJnaW49J25vcm1hbCdcbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2NhbmNlbChwcm9wcy5kYXRhKX0gY29sb3I9J3ByaW1hcnknIHZhcmlhbnQ9J291dGxpbmVkJyBzaXplPSdzbWFsbCc+XG4gICAgICAgICAgICDlj5bmtohcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdH0gY29sb3I9J3ByaW1hcnknIHZhcmlhbnQ9J2NvbnRhaW5lZCcgc2l6ZT0nc21hbGwnPlxuICAgICAgICAgICAg5L+d5a2YXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnQnO1xuaW1wb3J0IE15RGlhbG9nIGZyb20gJy4vTXlEaWFsb2cnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IG9wdGlvbnMgPSBbJ05vbmUnLCAnQXRyaWEnLCAnQ2FsbGlzdG8nLCAnRGlvbmUnLCAnR2FueW1lZGUnXTtcblxuY29uc3QgSVRFTV9IRUlHSFQgPSA0ODtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBidG46IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICByaWdodDogMCxcbiAgICB0b3A6IDAsXG4gICAgZm9udFNpemU6IDEyLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgY29sb3I6ICcjMDAwJ1xuICAgIH1cbiAgfSxcbiAgaWNvbjoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gIH0sXG4gIGRpczoge1xuICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gIH1cbn0pKTtcblxuY29uc3QgTG9uZ01lbnUgPSAoeyBkYXRhLCBpZCB9KSA9PiB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e18gPT4gc2V0T3Blbih0cnVlKX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmJ0bn0gJHtjbGFzc2VzLmRpc31gfVxuICAgICAgICBkaXNhYmxlUmlwcGxlPXtmYWxzZX1cbiAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgIGRpc2FibGVGb2N1c1JpcHBsZT17dHJ1ZX1cbiAgICAgICAgZWRnZT0nZW5kJ1xuICAgICAgICBjbGFzc2VzPXt7IGxhYmVsOiBjbGFzc2VzLmljb24gfX1cbiAgICAgICAgaWQ9J2RpcydcbiAgICAgID5cbiAgICAgICAgPE1vcmVWZXJ0SWNvbiAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuXG4gICAgICA8TXlEaWFsb2cgb3Blbj17b3Blbn0gb25DbG9zZT17XyA9PiBzZXRPcGVuKGZhbHNlKX0gZGF0YT17ZGF0YX0gaWQ9e2lkfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9uZ01lbnU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9zdG9yZS9Qcm92aWRlcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgSW5wdXRCYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QmFzZSc7XG5pbXBvcnQgeyBmYWRlLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICB9LFxuICBzZWFyY2g6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgaGVpZ2h0OiA0MCxcbiAgICB3aWR0aDogJzM5JScsXG4gICAgbWF4V2lkdGg6IDQ2MCxcbiAgICBtaW5XaWR0aDogMjgwLFxuICAgIGJvcmRlclJhZGl1czogJzEwMHB4JyxcbiAgICBjb2xvcjogJyM3NTc1NzUnLFxuICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgYm94U2hhZG93OiAnMCAxcHggNnB4IDAgcmdiYSgzMiwgMzMsIDM2LCAuMjgpJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB0cmFuc2l0aW9uOiAnMC4ycycsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3hTaGFkb3c6ICcwIDFweCA5cHggMCByZ2JhKDMyLCAzMywgMzYsIC4zMCknXG4gICAgfVxuICB9LFxuICBzZWFyY2hJY29uOiB7XG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgfSxcbiAgaW5wdXRSb290OiB7XG4gICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICBmbGV4OiAxXG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoQXBwQmFyKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFt7IGZpbHR4dCB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJY29ufT5cbiAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8SW5wdXRCYXNlXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNo4oCmJ1xuICAgICAgICAgICAgdmFsdWU9e2ZpbHR4dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGRpc3BhdGNoKHsgdHlwZTogJ2ZpbHR4dCcsIGZpbHR4dDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuaW5wdXRSb290XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ub29sYmFyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IExpc3RTdWJoZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlcic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXJcbiAgfSxcbiAgaW5wdXRSb290OiB7XG4gICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICBwYWRkaW5nTGVmdDogMFxuICB9LFxuICBpY29uUm9vdDoge1xuICAgIG1pbldpZHRoOiAnYXV0bydcbiAgfSxcbiAgYXZhdGFyOiB7XG4gICAgd2lkdGg6IDMwLFxuICAgIGhlaWdodDogMzAsXG4gICAgbWFyZ2luUmlnaHQ6IDEwXG4gIH0sXG4gIGltZzoge1xuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgaGVpZ2h0OiAnYXV0bydcbiAgfSxcbiAgaXRlbToge1xuICAgIHBhZGRpbmc6ICcwIDE2cHgnXG4gIH1cbn0pKTtcblxuY29uc3QgTGlzdEl0ZW1MaW5rID0gcHJvcHMgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdEl0ZW1cbiAgICAgIGNvbXBvbmVudD0nYSdcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3RcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn07XG5cbmNvbnN0IFRvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IFtCb29rbWFyaywgc2V0Qm9va21hcmtdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC50aXRsZSA9ICd0b2RvJztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGl0ZXJhdGlvbiA9IChhY2MsIGkpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpLmNoaWxkcmVuKSA/IFtpLmNoaWxkcmVuXS5yZWR1Y2UoaXRlcmF0aW9uLCBhY2MpIDogYWNjLmNvbmNhdChpKTtcbiAgfTtcblxuICBjb25zdCBnZXRTdWJUcmVlID0gaWQgPT4ge1xuICAgIGNocm9tZS5ib29rbWFya3MuZ2V0U3ViVHJlZShpZCwgdiA9PiB7XG4gICAgICBjb25zdCBCb29rbWFya0xpc3QgPSB2WzBdLmNoaWxkcmVuLnJlZHVjZShpdGVyYXRpb24sIFtdKTtcbiAgICAgIHNldEJvb2ttYXJrKEJvb2ttYXJrTGlzdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaHJvbWUuYm9va21hcmtzLnNlYXJjaCh7IHRpdGxlOiAndG9kbycgfSwgdiA9PiB7XG4gICAgICBnZXRTdWJUcmVlKHZbMF0uaWQpO1xuICAgICAgY2hyb21lLmJvb2ttYXJrcy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoXyA9PiBnZXRTdWJUcmVlKHZbMF0uaWQpKTtcbiAgICAgIGNocm9tZS5ib29rbWFya3Mub25DcmVhdGVkLmFkZExpc3RlbmVyKF8gPT4gZ2V0U3ViVHJlZSh2WzBdLmlkKSk7XG4gICAgICBjaHJvbWUuYm9va21hcmtzLm9uQ2hpbGRyZW5SZW9yZGVyZWQuYWRkTGlzdGVuZXIoXyA9PiBjb25zb2xlLmxvZygnb25DaGlsZHJlblJlb3JkZXJlZCcpKTtcbiAgICAgIGNocm9tZS5ib29rbWFya3Mub25Nb3ZlZC5hZGRMaXN0ZW5lcihfID0+IGdldFN1YlRyZWUodlswXS5pZCkpO1xuICAgICAgY2hyb21lLmJvb2ttYXJrcy5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoXyA9PiBnZXRTdWJUcmVlKHZbMF0uaWQpKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJvd3MgPSBbXTtcbiAgbGV0IGxhc3RDYXRlZ29yeSA9IG51bGw7XG5cbiAgQm9va21hcmsuZm9yRWFjaChtYXJrID0+IHtcbiAgICBjb25zdCB0aW1lID0gbmV3IERhdGUobWFyay5kYXRlQWRkZWQpO1xuXG4gICAgaWYgKHRpbWUuZ2V0RGF0ZSgpICE9PSBsYXN0Q2F0ZWdvcnkpIHtcbiAgICAgIGlmICghcm93c1tyb3dzLmxlbmd0aF0pIHtcbiAgICAgICAgcm93c1tyb3dzLmxlbmd0aF0gPSBbXTtcbiAgICAgIH1cbiAgICAgIHJvd3Nbcm93cy5sZW5ndGggLSAxXS5wdXNoKFxuICAgICAgICA8TGlzdFN1YmhlYWRlciBrZXk9e3RpbWUuZ2V0RGF0ZSgpfSBjb21wb25lbnQ9J2Rpdic+XG4gICAgICAgICAge3RpbWVcbiAgICAgICAgICAgIC50b0xvY2FsZURhdGVTdHJpbmcoKVxuICAgICAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgICAgIC5qb2luKCctJyl9XG4gICAgICAgIDwvTGlzdFN1YmhlYWRlcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcm93c1tyb3dzLmxlbmd0aCAtIDFdLnB1c2goXG4gICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT17bWFyay5pZH0gY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxuICAgICAgICA8TGlzdEl0ZW1MaW5rIGhyZWY9e21hcmsudXJsfSB0aXRsZT17bWFyay50aXRsZX0+XG4gICAgICAgICAgPExpc3RJdGVtSWNvbiBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMuaWNvblJvb3QgfX0+XG4gICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgIHNyYz17YGNocm9tZTovL2Zhdmljb24vc2l6ZS8xNi8ke21hcmsudXJsfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9XG4gICAgICAgICAgICAgIGNsYXNzZXM9e3sgaW1nOiBjbGFzc2VzLmltZyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e21hcmsudGl0bGV9IC8+XG4gICAgICAgIDwvTGlzdEl0ZW1MaW5rPlxuICAgICAgPC9MaXN0SXRlbT5cbiAgICApO1xuXG4gICAgbGFzdENhdGVnb3J5ID0gdGltZS5nZXREYXRlKCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICA8TGlzdCBjb21wb25lbnQ9J25hdicgZGVuc2U+XG4gICAgICAgICAge3Jvd3MucmV2ZXJzZSgpfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGJsdWUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2JsdWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5pbXBvcnQgUHJvdmlkZXIgZnJvbSAnLi9zdG9yZS9Qcm92aWRlcic7XG5pbXBvcnQgVG9kbyBmcm9tICcuL2NvbXBvbmVudHMvVG9kbyc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeTogYmx1ZVxuICB9XG59KTtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgIDxDc3NCYXNlbGluZSAvPlxuICAgIDxQcm92aWRlcj57bG9jYXRpb24uaGFzaCA9PT0gJyN0b2RvJyA/IDxUb2RvIC8+IDogPEFwcCAvPn08L1Byb3ZpZGVyPlxuICA8L1RoZW1lUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdmaWx0eHQnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZpbHR4dDogYWN0aW9uLmZpbHR4dCB9O1xuICAgIGNhc2UgJ3R3byc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbnVtOiBzdGF0ZS5udW0gLSAxIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuICBmaWx0eHQ6ICcnXG59O1xuXG5jb25zdCBQcm92aWRlciA9IHByb3BzID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRTdGF0ZSk7XG5cbiAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIGRpc3BhdGNoXX0+e3Byb3BzLmNoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm92aWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=