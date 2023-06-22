"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_containers_Routes_tsx"],{

/***/ "./src/assets/NotFoundImg.svg":
/*!************************************!*\
  !*** ./src/assets/NotFoundImg.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8e16752119c7ac81567dc525aeef088f.svg");

/***/ }),

/***/ "./src/ProtectedRoute.tsx":
/*!********************************!*\
  !*** ./src/ProtectedRoute.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProtectedRoutes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Notify */ "./src/components/Notify.tsx");
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hook/useAuth */ "./src/hook/useAuth.tsx");
/* harmony import */ var _utils_validateOrgToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/validateOrgToken */ "./src/utils/validateOrgToken.tsx");




// eslint-disable-next-line react/prop-types
function ProtectedRoutes(obj) {
    /* istanbul ignore if */
    if (window.location.pathname === '/users/login') {
        /* istanbul ignore next */
        (0,_utils_validateOrgToken__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_2__.UserContext);
    if (!user?.auth) {
        return obj.children;
    }
    /* istanbul ignore next */
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Notify__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}


/***/ }),

/***/ "./src/components/ButtonLoading.tsx":
/*!******************************************!*\
  !*** ./src/components/ButtonLoading.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* eslint-disable */


const ButtonLoading = ({ style }) => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `flex btn w-fit py-1 px-3 bg-primary font-bold ${style}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "loader mr-1" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "ml-1 text-white font-bold", disabled: true }, t('Processing...'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonLoading);


/***/ }),

/***/ "./src/components/ControlledSelect.tsx":
/*!*********************************************!*\
  !*** ./src/components/ControlledSelect.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ControlledSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "./node_modules/.pnpm/react-select@5.7.3_b2wlzab4o7ehpxv6mvz3buccci/node_modules/react-select/dist/react-select.esm.js");
/* eslint-disable react/require-default-props */



const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'red' : '#148FB6',
    }),
    valueLabel: (styles) => ({
        ...styles,
        text: 'white',
    }),
    control: (styles) => ({
        ...styles,
        height: 20,
        // height: '30px',
        width: '100%',
        backgroundColor: '#374151',
        borderColor: 'rgb(20 143 182)',
        text: 'white',
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition };
    },
};
function CustomSelect({ placeholder, name, value, defaultValue, options, onChange, ...props }) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], { value: defaultValue ? defaultValue : value, className: "my-react-select-container", classNamePrefix: "my-react-select", styles: customStyles, onChange: onChange, options: options, placeholder: placeholder, isSearchable: true, ...props }));
}
function ControlledSelect({ options, defaultValue, placeholder = 'Select...', register, noRegister, ...props }) {
    let onChange;
    let name = '';
    let control = [];
    let rules;
    noRegister && ({ onChange } = noRegister);
    register && ({ control, name, rules } = register);
    return register ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, { name: name, control: control, rules: rules, render: ({ field: { value, onChange } }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomSelect, { placeholder: placeholder, options: options, value: value, onChange: onChange, ...props })) })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomSelect, { placeholder: placeholder, defaultValue: defaultValue, name: name, onChange: onChange, options: options, ...props }));
}


/***/ }),

/***/ "./src/components/Notify.tsx":
/*!***********************************!*\
  !*** ./src/components/Notify.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Notify)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Notify() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " dark:bg-dark-frame-bg flex flex-col py-8 px-5  items-center justify-evenly md:justify-evenly grow h-full w-full" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "flex font-semibold text-primary dark:text-dark-text-fill text-3xl" },
            "Hello",
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "animate-[wave_5s_ease-in-out_2]" }, "\uD83D\uDC4B\uD83C\uDFFB"),
            ", User"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-center text-gray-400 text-sm" }, "You are currently logged in, please logout to switch to another account!")));
}


/***/ }),

/***/ "./src/containers/Routes.tsx":
/*!***********************************!*\
  !*** ./src/containers/Routes.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home */ "./src/pages/Home.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.tsx");
/* harmony import */ var _pages_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../pages/Error */ "./src/pages/Error.tsx");
/* harmony import */ var _components_Skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Skeleton */ "./src/components/Skeleton.tsx");
/* harmony import */ var _pages_Organization_UserRegister__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/Organization/UserRegister */ "./src/pages/Organization/UserRegister.tsx");
/* harmony import */ var _pages_Organization_Message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Organization/Message */ "./src/pages/Organization/Message.tsx");
/* harmony import */ var _pages_Noredirect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/Noredirect */ "./src/pages/Noredirect.tsx");
/* harmony import */ var _ProtectedRoute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ProtectedRoute */ "./src/ProtectedRoute.tsx");
/* harmony import */ var _utils_RemoveTokenPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/RemoveTokenPage */ "./src/utils/RemoveTokenPage.tsx");
/* eslint-disable */









/* istanbul ignore next */
const OrgRegister = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_OrgRegister_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/OrgRegister */ "./src/pages/OrgRegister.tsx")));
/* istanbul ignore next */
const Orglogin = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_Organization_Orglogin_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Organization/Orglogin */ "./src/pages/Organization/Orglogin.tsx")));
/* istanbul ignore next */
const ResetPassword = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_ResetPassword_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/ResetPassword */ "./src/pages/ResetPassword.tsx")));
/* istanbul ignore next */
const ForgotPassword = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_ForgotPassword_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/ForgotPassword */ "./src/pages/ForgotPassword.tsx")));
/* istanbul ignore next */
const Adminlogin = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_Organization_AdminLogin_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Organization/AdminLogin */ "./src/pages/Organization/AdminLogin.tsx")));
/* istanbul ignore next */
const Pricing = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_iconify_react_3_2_2_react_18_2_0_node_modules_iconify_react_dist_ic-68b696"), __webpack_require__.e("src_pages_Pricing_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Pricing */ "./src/pages/Pricing.tsx")));
/* istanbul ignore next */
const Product = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_Comingsoon_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Comingsoon */ "./src/pages/Comingsoon.tsx")));
/* istanbul ignore next */
const Pay = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_iconify_react_3_2_2_react_18_2_0_node_modules_iconify_react_dist_ic-68b696"), __webpack_require__.e("vendors-node_modules_pnpm_cleave_js_1_6_0_node_modules_cleave_js_react_js"), __webpack_require__.e("src_components_Payment_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Payment */ "./src/components/Payment.tsx")));



function MainRoutes() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col min-h-screen" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Skeleton__WEBPACK_IMPORTED_MODULE_5__["default"], null) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, { path: "/", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"], null) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, { path: "/register/:token", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Organization_UserRegister__WEBPACK_IMPORTED_MODULE_6__["default"], null) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, { path: "/register-successful", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Organization_Message__WEBPACK_IMPORTED_MODULE_7__["default"], null) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, { path: "/signup/org", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OrgRegister, null) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, { path: "/signup/org/:token", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_RemoveTokenPage__WEBPACK_IMPORTED_MODULE_10__["default"], null) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, { path: "/reset-password", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ResetPassword, null) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, { path: "/forgot-password/:token", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ForgotPassword, null) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, { path: "/login/org", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProtectedRoute__WEBPACK_IMPORTED_MODULE_9__["default"], null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Orglogin, null)) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, { path: "/users/login", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProtectedRoute__WEBPACK_IMPORTED_MODULE_9__["default"], null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Adminlogin, null)) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, { path: "/pricing", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Pricing, null) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, { path: "/product", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Product, { title: 'Productpage' }) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, { path: "/noredirect", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Noredirect__WEBPACK_IMPORTED_MODULE_8__["default"], null) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, { path: "/pricing-form", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Pay, null) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, { path: "*", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Error__WEBPACK_IMPORTED_MODULE_4__["default"], null) }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainRoutes);


/***/ }),

/***/ "./src/pages/Error.tsx":
/*!*****************************!*\
  !*** ./src/pages/Error.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _assets_NotFoundImg_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/NotFoundImg.svg */ "./src/assets/NotFoundImg.svg");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");






function Error() {
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__["default"])('Page not found');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    const navigateHome = () => {
        navigate('/');
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "errorImg flex items-center justify-center h-screen w-screen text-center" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: _assets_NotFoundImg_svg__WEBPACK_IMPORTED_MODULE_2__["default"], className: "max-w-36 max-h-32 md:max-w-44 md:max-h-40 lg:max-w-52 lg:max-h-48 xl:max-w-2xl xl:max-h-96", alt: "404" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "max-w-screen-md mt-5 text-white" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl" }, t('PAGE NOT FOUND')),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "my-3 px-8 md:px-14 lg:px-0" }, t('error_page_paragraph')),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], { onClick: navigateHome, variant: "primary", size: "lg", "data-testid": "button-back", style: "mt-2 lg:mt-5 px-8 text-xl font-bold" }, t('Back Home')))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);


/***/ }),

/***/ "./src/pages/Noredirect.tsx":
/*!**********************************!*\
  !*** ./src/pages/Noredirect.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Noredirect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Buttons */ "./src/components/Buttons.tsx");



function Noredirect() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " dark:bg-dark-frame-bg flex flex-col py-8 px-5  items-center justify-evenly md:justify-evenly grow h-full w-full" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "flex font-semibold text-primary dark:text-dark-text-fill text-3xl" },
            "Hello",
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "animate-[wave_5s_ease-in-out_2]" }, "\uD83D\uDC4B\uD83C\uDFFB"),
            ", Users"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-center text-gray-400 text-sm" }, "The System is under development, redirection is not found !!"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, { to: "/pricing-form" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "primary", size: "lg", "data-testid": "buttonback" }, "back"))));
}


/***/ }),

/***/ "./src/pages/Organization/Message.tsx":
/*!********************************************!*\
  !*** ./src/pages/Organization/Message.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_logoWhite_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/logoWhite.svg */ "./src/assets/logoWhite.svg");
/* harmony import */ var _hook_useDarkMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hook/useDarkMode */ "./src/hook/useDarkMode.ts");





function Message() {
    const [colorTheme] = (0,_hook_useDarkMode__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "md:flex md:flex-col md:items-center md:justify-center w-full  grow  text-center py-2  dark:bg-dark-bg bg-gray-100  sm:flex sm:flex-row sm:items-center sm:justify-center" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mt-3  sm:mt-20 xs:mt-15 md:w-3/5 md:p-5 sm:w-full sm:p-2 dark:bg-dark-frame-bg  dark:rounded-none max-w-md" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "py-10 sm:py-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-center m-auto w-1/2 h-20 " }, colorTheme === 'dark' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "w-2 cursor-pointer mr-2 h-2 ", src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"], alt: "logo" })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "w-full cursor-pointer", src: _assets_logoWhite_svg__WEBPACK_IMPORTED_MODULE_2__["default"], alt: "logoWhite" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-2xl font-bold text-primary dark:text-dark-text-fill mb-10" }, t('Thanks for signing up.')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-400 mx-10 dark:text-dark-text-fill text-left mb-5" }, t('We are delighted to have you with us. Soon you shall be receiving an email that contains an organization you will be part of.')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-400 mx-10 dark:text-dark-text-fill text-left x" }, t('DevPulse'))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);


/***/ }),

/***/ "./src/pages/Organization/Mutations.tsx":
/*!**********************************************!*\
  !*** ./src/pages/Organization/Mutations.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GET_SIGNUP_ORGANIZATION: () => (/* binding */ GET_SIGNUP_ORGANIZATION),
/* harmony export */   SIGN_UP_MUTATION: () => (/* binding */ SIGN_UP_MUTATION)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");

const SIGN_UP_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation Mutation(
    $firstName: String!
    $lastName: String!
    $dateOfBirth: DateTime!
    $gender: String!
    $email: String!
    $password: String!
    $orgToken: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      dateOfBirth: $dateOfBirth
      gender: $gender
      email: $email
      password: $password
      orgToken: $orgToken
    ) {
      user {
        profile {
          name
        }
      }
    }
  }
`;
const GET_SIGNUP_ORGANIZATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query GetSignupOrganization($orgToken: String!) {
    getSignupOrganization(orgToken: $orgToken) {
      name
    }
  }
`;


/***/ }),

/***/ "./src/pages/Organization/UserRegister.tsx":
/*!*************************************************!*\
  !*** ./src/pages/Organization/UserRegister.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/md */ "./node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _components_ButtonLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ButtonLoading */ "./src/components/ButtonLoading.tsx");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hook/useAuth */ "./src/hook/useAuth.tsx");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _Mutations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Mutations */ "./src/pages/Organization/Mutations.tsx");
/* harmony import */ var _components_ControlledSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ControlledSelect */ "./src/components/ControlledSelect.tsx");
/* eslint-disable */















function Signup() {
    const token = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    const originalToken = token.replaceAll('*', '.');
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_5__["default"])('Login');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    const [passwordShown, setPasswordShown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [buttonLoading, setButtonLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const tooglePassword = /* istanbul ignore next */ () => {
        /* istanbul ignore next */
        setPasswordShown(!passwordShown);
    };
    const { register, handleSubmit, formState: { errors }, setError, control, controller, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)();
    const { UserSignup } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_4__.UserContext);
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
    const { state } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useLocation)();
    const [Signup, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useMutation)(_Mutations__WEBPACK_IMPORTED_MODULE_6__.SIGN_UP_MUTATION);
    const [getOrganizationName] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_12__.useLazyQuery)(_Mutations__WEBPACK_IMPORTED_MODULE_6__.GET_SIGNUP_ORGANIZATION, {
        variables: {
            orgToken: originalToken,
        },
        onError: /* istanbul ignore next */ (err) => {
            /* istanbul ignore next */
            if (err.message === 'expired organization token') {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Your signup link has expired');
                navigate('/');
            }
            else {
                navigate('/pageNotFound');
            }
        },
    });
    const [SignupUser] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useMutation)(_Mutations__WEBPACK_IMPORTED_MODULE_6__.SIGN_UP_MUTATION, {
        /* istanbul ignore next */
        /* istanbul ignore next */
        onCompleted: (data) => {
            /* istanbul ignore next */
            setTimeout(() => {
                setButtonLoading(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success('You have successfully created an account!');
                navigate('/register-successful');
            }, 2000);
        },
        onError: /* istanbul ignore next */ (err) => {
            /* istanbul ignore next */
            setTimeout(() => {
                setButtonLoading(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(err.message);
            }, 1000);
        },
    });
    /* istanbul ignore next */
    const onSubmit = async (userInput) => {
        setButtonLoading(true);
        setTimeout(async () => {
            try {
                await SignupUser({
                    variables: {
                        email: userInput.email,
                        password: userInput.password,
                        firstName: userInput.firstName,
                        lastName: userInput.lastName,
                        dateOfBirth: userInput.dateOfBirth,
                        gender: userInput.gender.value,
                        orgToken: originalToken,
                    },
                });
                return;
            }
            catch (error) {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message);
            }
        }, 2000);
    };
    /* istanbul ignore next */
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : '#148FB6',
        }),
        valueLabel: (styles) => ({
            ...styles,
            text: 'white',
        }),
        control: (styles) => ({
            ...styles,
            height: 20,
            width: 370,
            backgroundColor: '#374151',
            borderColor: 'rgb(20 143 182)',
            text: 'white',
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            return { ...provided, opacity, transition };
        },
    };
    const options = [
        { value: 'male', label: 'male' },
        { value: 'female', label: 'female' },
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        getOrganizationName();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "md:flex md:flex-col md:items-center md:justify-center w-full  grow  text-center py-2  dark:bg-dark-bg bg-gray-100  sm:flex sm:flex-row sm:items-center sm:justify-center" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "  mt-3  w-full sm:mt-20 xs:mt-15 md:w-3/5 md:p-5 sm:w-full sm:p-2 dark:bg-dark-bg  dark:rounded-none " },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "py-10 sm:py-8 w-full m-auto  md:shadow-xl rounded-xl" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-2xl font-bold text-primary dark:text-dark-text-fill " }, t('Sign up using')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "border-2 w-10 bg-primary border-primary inline-block mb-2" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-center my-2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "#link", className: "border-2 border-gray-200 rounded-full p-3 mx-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__.FaGoogle, { className: "text-sm dark:text-white" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-400 my-3 dark:text-dark-text-fill " }, t('or use your email account')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col items-center" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { action: "#none", className: "flex flex-col gap-2", onSubmit: handleSubmit(onSubmit), "data-testid": "loginForm" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-between flex-col md:flex-row gap-2" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-gray-100 border border-primary rounded p-2 flex justify-between  dark:bg-dark-bg w-full mr-2" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { "data-testid": "fName", type: "name", placeholder: t('First Name'), ...register('firstName', {
                                        required: 'First Name is required',
                                    }), className: "bg-gray-100 outline-none text-sm flex-1 text-gray-400 dark:border-white dark:bg-dark-bg dark:text-white " })),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-gray-100 border border-primary rounded p-2 flex justify-between dark:bg-dark-bg w-full" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { "data-testid": "lName", type: "name", placeholder: t('Last Name'), ...register('lastName', {
                                        required: 'Last Name is required',
                                    }), className: "bg-gray-100 outline-none text-sm flex-1 text-gray-400 dark:border-white dark:bg-dark-bg dark:text-white " }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-between flex-col md:flex-row gap-2" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center  w-full  rounded-md mr-2" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "date", className: "text-gray-400 border border-primary py-2 dark:bg-dark-bg rounded outline-none px-5 font-sans text-xs w-full h-[38px] ", id: "date-placeholder", max: new Date().toISOString().split('T')[0], "data-placeholder": "Date of birth", required: true, ...register('dateOfBirth', {
                                        valueAsDate: true,
                                        required: `${t('The BirthDate is required')}`,
                                    }) })),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ControlledSelect__WEBPACK_IMPORTED_MODULE_7__["default"], { placeholder: t('Select gender'), register: {
                                    control,
                                    name: 'gender',
                                    rules: {
                                        required: `${t('Gender is required')}`,
                                    },
                                }, options: options })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-gray-100 w-70 p-2 flex justify-between  dark:bg-dark-bg border border-primary rounded xs:w-full gap-2" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__.FaRegEnvelope, { className: "text-gray-400 " }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { "data-testid": "email", type: "email", ...register('email', { required: 'Email is required' }), placeholder: t('Email'), className: "bg-gray-100 outline-none text-sm flex-1 text-gray-400 dark:border-white dark:bg-dark-bg dark:text-white  " })),
                        errors.email && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-left  pl-4" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { className: "text-red-600" }, errors.email.message))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-gray-100  p-2 flex items-center border border-primary rounded   dark:bg-dark-bg xs:w-full md:w-70 gap-2" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_14__.MdLockOutline, { className: "text-gray-400 " }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { "data-testid": "password", type: passwordShown ? 'text' : 'password', ...register('password', {
                                    required: 'Password is required',
                                }), placeholder: t('Password'), className: "bg-gray-100 outline-none text-sm flex-1 text-gray-400 dark:border-white dark:bg-dark-bg dark:text-white" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-gray-400 cursor-pointer onClick= {()=> handleShowPassword}" }, passwordShown ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__.FaRegEye, { onClick: tooglePassword })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_15__.FiEyeOff, { onClick: tooglePassword })))),
                        errors.password && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-left mb-1 pl-4" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { className: "text-red-600" }, errors.password.message))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-64  rounded mb-5 mt-5 items-center " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " text-sm mr-1" }, t('Already have an account?')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, { to: "/login/org", className: "text-xs text-primary " }, t('Log in'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full justify-center" }, loading ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ButtonLoading__WEBPACK_IMPORTED_MODULE_2__["default"], { style: 'rounded-full inline-block' })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"], { type: "submit", variant: "transparentbtn", size: "md", style: "border-2 hover:bg-primary inline-block rounded-full lg:px-12 lg:py-2 sm:px-4 sm:py-1 md:font-semibold sm:mt-2 sm:font-medium hover:text-white", loading: buttonLoading }, t('Sign Up')))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "md:hidden mt-2 text-xs text-center dark:text-dark-text-fill" },
                    t('First time here?'),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, { to: "/signup/org", className: "mx-1 text-primary" }, t('Register')),
                    t('your organization'))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);


/***/ }),

/***/ "./src/utils/RemoveTokenPage.tsx":
/*!***************************************!*\
  !*** ./src/utils/RemoveTokenPage.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");


function RemoveTokenPage() {
    const location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    /* istanbul ignore next */
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const { pathname } = location;
        const urlParts = pathname.split('/org/');
        if (urlParts.length > 1) {
            const newUrl = `${urlParts[0]}/org`;
            navigate(newUrl);
        }
    }, [location, navigate]);
    return null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoveTokenPage);


/***/ }),

/***/ "./src/utils/validateOrgToken.tsx":
/*!****************************************!*\
  !*** ./src/utils/validateOrgToken.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "./node_modules/.pnpm/jwt-decode@3.1.2/node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useAuth */ "./src/hook/useAuth.tsx");
/* istanbul ignore file */
/* eslint-disable no-else-return */
// eslint-disable-next-line camelcase


// Rest of the code...



const checkOrgTokenExpiration = async () => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { logout } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_3__.UserContext);
    const token = window.localStorage.getItem('orgToken');
    const orgName = window.localStorage.getItem('orgName');
    let expiration = '';
    token ? (expiration = await (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token)) : (expiration = null);
    if (expiration !== null && expiration.exp * 1000 < Date.now()) {
        localStorage.removeItem('orgToken');
        localStorage.removeItem('orgName');
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(t('Your Org token has expired, try to login again'));
        logout();
        window.location.pathname = '/login/org';
        return false;
    }
    else if (!orgName) {
        window.location.pathname = '/login/org';
        return false;
    }
    else if (expiration !== null && expiration.exp * 1000 > Date.now()) {
        return true;
    }
    else {
        return false;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkOrgTokenExpiration);


/***/ })

}]);
//# sourceMappingURL=src_containers_Routes_tsx.js.map