"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_pages_Home_tsx"],{

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "234e199d6d64c52316e4b6f37d42122d.svg");

/***/ }),

/***/ "./src/assets/logoWhite.svg":
/*!**********************************!*\
  !*** ./src/assets/logoWhite.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "6493c483466ec8d11225d80389f7fafe.svg");

/***/ }),

/***/ "./src/components/Buttons.tsx":
/*!************************************!*\
  !*** ./src/components/Buttons.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

const Button = ({ children, style, onClick, variant = 'default', size = 'md', type = 'button', disabled = false, loading = false, ...rest }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: type, className: `btn ${variant} ${size} ${style}`, onClick: onClick, disabled: disabled ? disabled : loading, ...rest }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "loader mr-1" }) : children));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./src/components/Footer.tsx":
/*!***********************************!*\
  !*** ./src/components/Footer.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/App.tsx");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next */ "./node_modules/.pnpm/i18next@21.10.0/node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var _assets_logoWhite_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/logoWhite.svg */ "./src/assets/logoWhite.svg");
/* harmony import */ var _utils_getLanguage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getLanguage */ "./src/utils/getLanguage.tsx");







function Footer({ styles }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const lan = (0,_utils_getLanguage__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const userLang = window.navigator.language;
    const changeLan = (e) => {
        const { value } = e.target;
        i18next__WEBPACK_IMPORTED_MODULE_2__["default"].changeLanguage(value);
    };
    const lanRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (lanRef.current) {
            lanRef.current.value = lan;
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `w-full bg-primary dark:bg-dark-bg text-gray-300 mt-auto ${styles}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-2 flex flex-col lg:flex-row justify-between items-center w-full h-full" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col lg:flex-row items-center py-5" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col mr-12 lg:mr-0" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex mb-2" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "mr-2 lg:mr-0", src: _assets_logoWhite_svg__WEBPACK_IMPORTED_MODULE_3__["default"], alt: "logo" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "text-3xl font-bold text-white dark:text-dark-text-fill", "data-testid": "pulse" }, "PULSE")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex border-none justify-around items-center ml-6 mt-4 cursor-pointer" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaFacebook, { className: " fa-xs " }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaInstagram, { className: " " }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaTwitter, { className: "mr-1 " }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaLinkedin, { className: "mr-1 " }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaPlayCircle, { className: "" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col py-4 lg:py-0 lg:flex-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex py-4" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "lg:flex lg:flex-col mr-[8vh] md:mr-[16vh] lg:mr-0 lg:ml-28 cursor-pointer" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "py-2 text-sm font-bold" }, t('Dev Pulse')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "py-2 text-xs" }, t('About us')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "py-2 text-xs" }, t('Contact us'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "lg:flex lg:flex-col ml-[8vh] md:ml-[16vh] lg:ml-28 cursor-pointer" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "py-2 text-sm font-bold" }, t('Product')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "py-2 text-xs" }, t('Features')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "py-2 text-xs" }, t('Integrations')))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex py-4" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "lg:flex lg:flex-col mr-[8vh] md:mr-[16vh] lg:mr-0 lg:ml-28 cursor-pointer" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "py-2 text-sm font-bold" }, t('Resources')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "py-2 text-xs" }, t('Community')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "py-2 text-xs" }, t('Help Center'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "lg:flex lg:flex-col ml-[8vh] md:ml-[16vh] lg:ml-28 cursor-pointer" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "py-2 text-xs" }, t('Terms and conditions')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "py-2 text-xs" }, t('Privacy and Policies')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { name: "language", defaultValue: userLang, "data-testid": "lanChange", ref: lanRef, onChange: (e) => {
                                    changeLan(e);
                                }, className: "bg-dark-bg mt-2 outline rounded-md px-2 py-1 text-white dark:text-dark-text-fill dark:bg-dark-bg " },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "en" }, "English"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "kn" }, "Kinyarwanda"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "fr" }, "Fran\u00E7ais")))))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " lg:flex" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "px-4 lg:py-3 cursor-pointer text-lg" },
                    "\u00A9 ",
                    new Date().getFullYear(),
                    " Pulse Technologies")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/SunIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/MenuIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/XIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/MoonIcon.js");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_logoWhite_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logoWhite.svg */ "./src/assets/logoWhite.svg");
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useAuth */ "./src/hook/useAuth.tsx");
/* harmony import */ var _hook_useDarkMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hook/useDarkMode */ "./src/hook/useDarkMode.ts");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _WithClickOutside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WithClickOutside */ "./src/components/WithClickOutside.tsx");











const Header = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({ open, setOpen, ...props }, ref) => {
    const orgToken = localStorage.getItem('orgToken');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const [colorTheme, setTheme] = (0,_hook_useDarkMode__WEBPACK_IMPORTED_MODULE_4__["default"])();
    /* istanbul ignore next */
    const handleClick = () => setOpen(!open);
    const { user, logout } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_3__.UserContext);
    const handleTheme = () => {
        /* istanbul ignore next */
        localStorage.setItem('color-theme', colorTheme);
        setTheme(colorTheme);
    };
    const goTo = orgToken ? '/users/login' : '/login/org';
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `w-screen h-[8vh] z-10 bg-white dark:bg-dark-bg fixed border-b ${props?.styles}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-3 flex justify-between items-center w-full h-full" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center h-full justify-between lg:w-full" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, { to: "/", className: "flex flex-row lg:px-5" },
                    colorTheme === 'dark' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "w-full cursor-pointer mr-2", src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"], alt: "logo" })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "w-full cursor-pointer mr-2", src: _assets_logoWhite_svg__WEBPACK_IMPORTED_MODULE_2__["default"], alt: "logoWhite" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "text-3xl font-bold font-lexend text-primary dark:text-dark-text-fill" }, "PULSE")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "hidden lg:flex cursor-pointer" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "px-5 text-xl dark:text-dark-text-fill" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, { to: "/", className: (navData) => {
                                if (navData.isActive)
                                    return 'text-primary';
                                return '';
                            } }, t('Home'))),
                    !user?.auth ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "px-5 text-xl dark:text-dark-text-fill" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, { className: (navData) => {
                                if (navData.isActive)
                                    return 'text-primary';
                                return '';
                            }, to: "/pricing" }, t('Pricing')))) : (' '),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "px-5 text-xl dark:text-dark-text-fill" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, { className: (navData) => {
                                if (navData.isActive)
                                    return 'text-primary';
                                return '';
                            }, to: "/product" }, t('Product'))))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "hidden lg:flex lg:w-full justify-end " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "button", id: "theme-switch", className: "px-4 mt-1 cursor-pointer", onClick: () => handleTheme() }, colorTheme === 'dark' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__["default"], { className: "w-8" })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__["default"], { className: "w-8 text-dark-text-fill" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, { to: user?.auth ? '/dashboard' : goTo },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: "primary", size: "lg" },
                        ' ',
                        !user?.auth ? t('Sign In') : t('Dashboard'),
                        ' ')),
                user?.auth ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: "transparentbtn", size: "lg", onClick: () => logout(), style: "text-red-500 font-bolf dark:text-dark-text-fill mr-8 border border-red-600 dark:border-dark-text-fill" },
                    ' ',
                    t('Logout'),
                    ' ')) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, { to: "/signup/org" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: "transparentbtn", size: "lg", style: "mr-8" },
                        ' ',
                        t('Register an organization'),
                        ' ')))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex px-5 lg:hidden" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "button", className: "px-3", onClick: () => handleTheme() }, colorTheme === 'dark' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__["default"], { className: "w-6 mr-2" })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__["default"], { className: "w-6 mr-2 text-dark-text-fill" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "button", onClick: handleClick }, !open ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__["default"], { className: "w-7 dark:text-dark-text-fill" })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_12__["default"], { className: "w-7 dark:text-dark-text-fill" }))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { ref: ref, className: !open
                ? 'hidden'
                : 'absolute bg-white dark:bg-dark-bg w-1/8 justify-end px-8 m-1 right-0 lg:hidden' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "p-2 w-full mt-2 dark:text-dark-text-fill text-primary" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, { to: "/" }, t('Home'))),
            !user?.auth ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "p-2 w-full dark:text-dark-text-fill" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, { to: "/pricing" }, "Pricing"))) : (' '),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "p-2 w-full dark:text-dark-text-fill" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, { to: "/product", className: "w-full" }, t('Product'))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "p-2 w-full dark:text-dark-text-fill mt-6 mb-2 bg-primary text-white rounded-md px-[35%]" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, { to: user?.auth ? '/dashboard' : goTo, className: "w-full" },
                    ' ',
                    !user?.auth ? t('Sign In') : t('Dashboard'))),
            user?.auth ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: "transparentbtn", size: "lg", onClick: () => logout(), style: "text-red-500 font-bolf dark:text-dark-text-fill mr-8 border border-red-600 dark:border-dark-text-fill" },
                ' ',
                t('Logout'),
                ' ')) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, { to: "/signup/org" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: "transparentbtn", size: "lg", style: "mr-8" },
                    ' ',
                    t('Register an organization'),
                    ' '))))));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_WithClickOutside__WEBPACK_IMPORTED_MODULE_6__["default"])(Header));


/***/ }),

/***/ "./src/components/WithClickOutside.tsx":
/*!*********************************************!*\
  !*** ./src/components/WithClickOutside.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* eslint-disable */


const WithClickOutside = (WrappedComponent) => {
    const Component = ({ styles }) => {
        const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
        const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
        const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
        const clickOutside = () => {
            /* istanbul ignore next */
            const handleClickOutside = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpen(false);
                }
            };
            document.addEventListener('mousedown', handleClickOutside);
        };
        const setRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
            clickOutside();
            return [ref];
        }, []);
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            /* istanbul ignore next */
            if (open)
                setOpen(false);
        }, [location.key]);
        const [newRef] = setRef();
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WrappedComponent, { open: open, setOpen: setOpen, ref: newRef, styles: styles }));
    };
    return Component;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithClickOutside);


/***/ }),

/***/ "./src/hook/useDarkMode.ts":
/*!*********************************!*\
  !*** ./src/hook/useDarkMode.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const getInitialState = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (storedPrefs)
            return storedPrefs;
        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches)
            return 'dark';
        return 'light';
    }
    return 'light';
};
const useDarkMode = () => {
    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialState);
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
    }, [theme]);
    return [colorTheme, setTheme];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDarkMode);


/***/ }),

/***/ "./src/hook/useDocumentTitle.tsx":
/*!***************************************!*\
  !*** ./src/hook/useDocumentTitle.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _utils_getLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getLanguage */ "./src/utils/getLanguage.tsx");



function useDocumentTitle(title) {
    const language = (0,_utils_getLanguage__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        document.title = `${t(title)} | Devpulse`;
    }, [title, language]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDocumentTitle);


/***/ }),

/***/ "./src/pages/Home.tsx":
/*!****************************!*\
  !*** ./src/pages/Home.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.tsx");
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useAuth */ "./src/hook/useAuth.tsx");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Buttons */ "./src/components/Buttons.tsx");








function LandingPage() {
    /* istanbul ignore next */
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_3__.UserContext);
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_4__["default"])('Welcome');
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "hero" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], { styles: "bg-opacity-50 dark:bg-opacity-50" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "hero w-full min-h-full flex flex-col justify-center grow items-center py-20" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid h-full lg:grid-cols-2 w-full justify-around content-center pb-6" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex h-full flex-col items-center justify-start  w-full px-4 py-2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "mt-28 sm:mt-20 text-3xl sm:text-4xl md:pl-10 md:text-6xl font-bold text-white dark:text-dark-text-fill font-lexend text-center md:text-left" }, t('Welcome to DevPulse')),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-2xl md:text-4xl lg:text-3xl mt-8 md:mt-8 lg:mt-8 w-full sm:w-3/4 md:w-4/5 lg:w-full md:px-0 lg:px-8 text-white dark:text-dark-text-fill font-sans text-center" },
                        t('The number one platform for'),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("em", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null,
                                " ",
                                t('managing trainees'),
                                " ")),
                        t('or'),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("em", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null,
                                " ",
                                t('students'),
                                " ")),
                        t('in any'),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("em", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null,
                                " ",
                                t('ed-tech organization'),
                                " "))),
                    !user?.auth ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full text-center justify-center items-center mt-8" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, { to: "/signup/org" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: "primary", size: "lg", style: "mt-12 lg:mt-0 px-8 text-xl font-bold uppercase my-4" },
                                ' ',
                                t('Get Started'),
                                ' ')))) : (' ')))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], { styles: "dark:bg-opacity-75 bg-opacity-100" })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);


/***/ }),

/***/ "./src/utils/getLanguage.tsx":
/*!***********************************!*\
  !*** ./src/utils/getLanguage.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/.pnpm/i18next@21.10.0/node_modules/i18next/dist/esm/i18next.js");
/* eslint-disable */

const getLanguage = () => {
    const lan = i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language ||
        (typeof window !== 'undefined' && window.localStorage.i18nextLng) ||
        'en';
    return lan.split('-')[0];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLanguage);


/***/ })

}]);
//# sourceMappingURL=src_pages_Home_tsx.js.map