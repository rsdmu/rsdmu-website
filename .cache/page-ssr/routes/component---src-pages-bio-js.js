exports.id = "component---src-pages-bio-js";
exports.ids = ["component---src-pages-bio-js"];
exports.modules = {

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3000541721_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3000541721.json */ "./public/page-data/sq/d/3000541721.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation */ "./src/components/Navigation.js");
/* harmony import */ var _SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SEO */ "./src/components/SEO.js");
/* harmony import */ var prismjs_themes_prism_okaidia_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/themes/prism-okaidia.css */ "./node_modules/prismjs/themes/prism-okaidia.css");
/* harmony import */ var prismjs_themes_prism_okaidia_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_okaidia_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/global.scss */ "./src/styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_6__);

// src/components/Layout.js






var Layout = function Layout(_ref) {
  var children = _ref.children;
  var data = _public_page_data_sq_d_3000541721_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "site-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SEO__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: data.site.siteMetadata.title,
    description: data.site.siteMetadata.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("header", {
    className: "site-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "background-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "centered-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", {
    className: "site-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/"
  }, data.site.siteMetadata.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("main", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "\xA9 ", new Date().getFullYear(), " Rashid A. Mushkani")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/Navigation.js":
/*!**************************************!*\
  !*** ./src/components/Navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _ThemeChanger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeChanger */ "./src/components/ThemeChanger.js");
// src/components/Navigation.js



var Navigation = function Navigation() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "main-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/bio"
  }, "Bio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/projects"
  }, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/books"
  }, "Books"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/contact"
  }, "Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ThemeChanger__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./src/components/SEO.js":
/*!*******************************!*\
  !*** ./src/components/SEO.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1719329430_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1719329430.json */ "./public/page-data/sq/d/1719329430.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");

// src/components/SEO.js



var SEO = function SEO(_ref) {
  var _site$siteMetadata, _site$siteMetadata2;
  var title = _ref.title,
    description = _ref.description;
  var site = _public_page_data_sq_d_1719329430_json__WEBPACK_IMPORTED_MODULE_0__.data.site;
  var metaDescription = description || site.siteMetadata.description;
  var defaultTitle = (_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
    htmlAttributes: {
      lang: "en"
    },
    title: title,
    titleTemplate: defaultTitle ? "%s | ".concat(defaultTitle) : null,
    meta: [{
      name: "description",
      content: metaDescription
    }, {
      name: "google-site-verification",
      content: site.siteMetadata.googleVerification
    }, {
      property: "og:title",
      content: title
    }, {
      property: "og:description",
      content: metaDescription
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:creator",
      content: ((_site$siteMetadata2 = site.siteMetadata) === null || _site$siteMetadata2 === void 0 ? void 0 : _site$siteMetadata2.author) || ""
    }, {
      name: "twitter:title",
      content: title
    }, {
      name: "twitter:description",
      content: metaDescription
    }]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

/***/ }),

/***/ "./src/components/ThemeChanger.js":
/*!****************************************!*\
  !*** ./src/components/ThemeChanger.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

// src/components/ThemeChanger.js

var ThemeChanger = function ThemeChanger() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('light'),
    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    theme = _useState2[0],
    setTheme = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (typeof window !== 'undefined') {
      var savedTheme = window.localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    }
  }, []);
  var toggleTheme = function toggleTheme() {
    var newTheme = theme === 'light' ? 'dark' : 'light';
    if (typeof window !== 'undefined') {
      document.body.classList.remove(theme);
      document.body.classList.add(newTheme);
      window.localStorage.setItem('theme', newTheme);
    }
    setTheme(newTheme);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    onClick: toggleTheme,
    className: "theme-changer"
  }, "Switch to ", theme === 'light' ? 'Dark' : 'Light', " Mode");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeChanger);

/***/ }),

/***/ "./src/pages/bio.js?export=default":
/*!*****************************************!*\
  !*** ./src/pages/bio.js?export=default ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SEO */ "./src/components/SEO.js");
// src/pages/bio.js



var BioPage = function BioPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "About Rashid Mushkani"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "About Rashid Mushkani"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Rashid Ahmad Mushkani is a specialist in urban planning, AI, and architecture, focusing on their intersection. He is a doctoral candidate at the University of Montreal."));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BioPage);

/***/ }),

/***/ "./node_modules/prismjs/themes/prism-okaidia.css":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/themes/prism-okaidia.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./public/page-data/sq/d/1719329430.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1719329430.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Rashid Mushkani Portfolio","description":"Portfolio of Rashid Ahmad Mushkani, specializing in urban planning, AI, and architecture.","author":"Rashid Ahmad Mushkani","siteUrl":"https://rsdmu.com","googleVerification":"google39150de1d9b66663"}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/3000541721.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3000541721.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Rashid Mushkani Portfolio","description":"Portfolio of Rashid Ahmad Mushkani, specializing in urban planning, AI, and architecture."}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-bio-js.js.map