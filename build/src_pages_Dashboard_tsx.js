"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_pages_Dashboard_tsx"],{

/***/ "./src/pages/AdminDashboard.tsx":
/*!**************************************!*\
  !*** ./src/pages/AdminDashboard.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _Comingsoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comingsoon */ "./src/pages/Comingsoon.tsx");

// eslint-disable-next-line import/no-useless-path-segments


function SupAdDashboard() {
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_1__["default"])('Dashboard');
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col grow bg-light-bg dark:bg-dark-frame-bg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row pb-8 justify-center" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "lg:ml-56 w-[90%] pt-[8vh] h-[100%]" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comingsoon__WEBPACK_IMPORTED_MODULE_2__["default"], { title: 'Dashboard' })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SupAdDashboard);


/***/ }),

/***/ "./src/pages/Comingsoon.tsx":
/*!**********************************!*\
  !*** ./src/pages/Comingsoon.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Comingsoon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");



function Comingsoon(props) {
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_1__["default"])('Product');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center justify-center h-screen bg-light-bg dark:bg-dark-frame-bg md:-mt-16 md:-mb-44" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "dark:bg-dark-bg bg-gray-100 rounded-lg shadow-lg p-5 md:p-20 mx-2" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-4xl tracking-tight leading-10 font-extrabold text-light-text dark:text-dark-text-fill sm:text-5xl sm:leading-none md:text-6xl" }, t(`${props.title}`)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "text-xl text-light-text dark:text-dark-text-fill md:text-3xl mt-10" }, t('comingsoon')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-md md:text-xl mt-10 text-light-text dark:text-dark-text-fill" }, t('Somethingnewiscoming'))))));
}


/***/ }),

/***/ "./src/pages/Dashboard.tsx":
/*!*********************************!*\
  !*** ./src/pages/Dashboard.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dashboard: () => (/* binding */ Dashboard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_CheckRoles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/CheckRoles */ "./src/utils/CheckRoles.tsx");
/* harmony import */ var _SupAdDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SupAdDashboard */ "./src/pages/SupAdDashboard.tsx");
/* harmony import */ var _AdminDashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdminDashboard */ "./src/pages/AdminDashboard.tsx");
/* harmony import */ var _TraineeDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TraineeDashboard */ "./src/pages/TraineeDashboard.tsx");





function Dashboard() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_CheckRoles__WEBPACK_IMPORTED_MODULE_1__["default"], { roles: ['superAdmin'] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SupAdDashboard__WEBPACK_IMPORTED_MODULE_2__["default"], null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_CheckRoles__WEBPACK_IMPORTED_MODULE_1__["default"], { roles: ['admin'] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AdminDashboard__WEBPACK_IMPORTED_MODULE_3__["default"], null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_CheckRoles__WEBPACK_IMPORTED_MODULE_1__["default"], { roles: ['trainee'] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TraineeDashboard__WEBPACK_IMPORTED_MODULE_4__["default"], null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_CheckRoles__WEBPACK_IMPORTED_MODULE_1__["default"], { roles: ['user'] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TraineeDashboard__WEBPACK_IMPORTED_MODULE_4__["default"], null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_CheckRoles__WEBPACK_IMPORTED_MODULE_1__["default"], { roles: ['coordinator'] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AdminDashboard__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);


/***/ }),

/***/ "./src/pages/SupAdDashboard.tsx":
/*!**************************************!*\
  !*** ./src/pages/SupAdDashboard.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _Comingsoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comingsoon */ "./src/pages/Comingsoon.tsx");




function SupAdDashboard() {
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_1__["default"])('Dashboard');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col grow bg-light-bg dark:bg-dark-frame-bg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row pb-8 justify-center" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "lg:ml-44 w-[90%] pt-[4vh] lg:pt-[6vh]" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comingsoon__WEBPACK_IMPORTED_MODULE_2__["default"], { title: 'Dashboard' })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SupAdDashboard);


/***/ }),

/***/ "./src/pages/TraineeDashboard.tsx":
/*!****************************************!*\
  !*** ./src/pages/TraineeDashboard.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Comingsoon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comingsoon */ "./src/pages/Comingsoon.tsx");


function SupAdDashboard() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col grow bg-light-bg dark:bg-dark-frame-bg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row pb-8 justify-center" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "lg:ml-44 w-[90%] pt-[8vh] h-[100%]" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comingsoon__WEBPACK_IMPORTED_MODULE_1__["default"], { title: 'Dashboard' })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SupAdDashboard);


/***/ })

}]);
//# sourceMappingURL=src_pages_Dashboard_tsx.js.map