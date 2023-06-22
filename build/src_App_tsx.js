"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_App_tsx"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */ var _components_Payment_steps_contexts_StepperContex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Payment-steps/contexts/StepperContex */ "./src/components/Payment-steps/contexts/StepperContex.tsx");
/* harmony import */ var _components_ScrollToTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ScrollToTop */ "./src/components/ScrollToTop.tsx");
/* harmony import */ var _components_Skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Skeleton */ "./src/components/Skeleton.tsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");






const DashRoutes = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_react-i18next_11_18_6_vfm63zmruocgezzfl2v26zlzpy_node_modules_react-14889a"), __webpack_require__.e("vendors-node_modules_pnpm_graphql-tag_2_12_6_graphql_16_7_0_node_modules_graphql-tag_lib_inde-37aa76"), __webpack_require__.e("vendors-node_modules_pnpm_date-fns_2_30_0_node_modules_date-fns_esm_format_index_js-node_modu-5f5934"), __webpack_require__.e("src_containers_DashRoutes_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/DashRoutes */ "./src/containers/DashRoutes.tsx")));
const MainRoutes = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_react-hook-form_7_45_0_react_18_2_0_node_modules_react-hook-form_di-a42c5d"), __webpack_require__.e("vendors-node_modules_pnpm_react-select_5_7_3_b2wlzab4o7ehpxv6mvz3buccci_node_modules_react-se-b8ae43"), __webpack_require__.e("vendors-node_modules_pnpm_react-i18next_11_18_6_vfm63zmruocgezzfl2v26zlzpy_node_modules_react-14889a"), __webpack_require__.e("vendors-node_modules_pnpm_react-icons_4_10_1_react_18_2_0_node_modules_react-icons_fa_index_e-752f5c"), __webpack_require__.e("vendors-node_modules_pnpm_graphql-tag_2_12_6_graphql_16_7_0_node_modules_graphql-tag_lib_inde-37aa76"), __webpack_require__.e("vendors-node_modules_pnpm_react-icons_4_10_1_react_18_2_0_node_modules_react-icons_fi_index_e-a56be9"), __webpack_require__.e("src_pages_Home_tsx"), __webpack_require__.e("src_containers_Routes_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./containers/Routes */ "./src/containers/Routes.tsx")));
const LandingPage = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_react-i18next_11_18_6_vfm63zmruocgezzfl2v26zlzpy_node_modules_react-14889a"), __webpack_require__.e("vendors-node_modules_pnpm_react-icons_4_10_1_react_18_2_0_node_modules_react-icons_fa_index_e-752f5c"), __webpack_require__.e("src_pages_Home_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Home */ "./src/pages/Home.tsx")));
function App() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col h-screen" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Payment_steps_contexts_StepperContex__WEBPACK_IMPORTED_MODULE_1__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ScrollToTop__WEBPACK_IMPORTED_MODULE_2__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], null) },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LandingPage, null) }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/dashboard/*", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DashRoutes, null) }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/*", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainRoutes, null) }))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/components/Payment-steps/contexts/StepperContex.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/Payment-steps/contexts/StepperContex.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormContext: () => (/* binding */ FormContext),
/* harmony export */   FormProvider: () => (/* binding */ FormProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

const FormContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function FormProvider({ children, ...props }) {
    const [currentStep, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const setCurrentStep = (step) => {
        setStep(step);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FormContext.Provider, { ...props, value: {
            currentStep,
            setCurrentStep,
        } }, children));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormProvider);


/***/ }),

/***/ "./src/components/ScrollToTop.tsx":
/*!****************************************!*\
  !*** ./src/components/ScrollToTop.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* eslint-disable */


const ScrollToTop = (props) => {
    const location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        /* istanbul ignore next */
        window.scrollTo(0, 0);
    }, [location]);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToTop);


/***/ })

}]);
//# sourceMappingURL=src_App_tsx.js.map