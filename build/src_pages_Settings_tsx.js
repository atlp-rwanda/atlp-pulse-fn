"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_pages_Settings_tsx"],{

/***/ "./src/pages/Settings.tsx":
/*!********************************!*\
  !*** ./src/pages/Settings.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ "./node_modules/.pnpm/i18next@21.10.0/node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/.pnpm/@headlessui+react@1.7.15_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/switch/switch.js");
/* harmony import */ var _hook_useDarkMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hook/useDarkMode */ "./src/hook/useDarkMode.ts");
/* harmony import */ var _utils_getLanguage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getLanguage */ "./src/utils/getLanguage.tsx");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");








function Settings() {
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_4__["default"])('Settings');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const lanRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const lan = (0,_utils_getLanguage__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const [colorTheme, setTheme] = (0,_hook_useDarkMode__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const [emailEnabled, setEmailEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [pushEnabled, setPushEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleThemeChange = (e) => {
        const { value } = e.target;
        setTheme(value);
        localStorage.setItem('color-theme', colorTheme);
    };
    const defaultTheme = localStorage.getItem('color-theme') ? localStorage.getItem('color-theme') : "light";
    const userLang = window.navigator.language;
    const handleLanChange = (e) => {
        const { value } = e.target;
        i18next__WEBPACK_IMPORTED_MODULE_1__["default"].changeLanguage(value);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (lanRef.current) {
            lanRef.current.value = lan;
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col grow bg-light-bg dark:bg-dark-frame-bg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row justify-center pt-[12vh]" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "rounded-lg w-[90%] lg:w-80vh lg:ml-[38vh] lg:mr-[2vh] lg:mb-10 p-6 bg-white dark:bg-dark-bg" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "mb-4 font-bold text-xl dark:text-dark-text-fill" }, t('Settings')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "flex items-center border-b pt-2 pb-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-[33vh]" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "font-bold dark:text-dark-text-fill" }, t('Profile')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm text-gray-600 dark:text-dark-text-fill" }, t('Edit profile, export account data, ...'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, { className: "ml-auto text-gray-600 text-xs md:text-base dark:text-dark-text-fill", to: "#link" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, { to: "/dashboard/profile" }, t('Change'))))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "flex items-center border-b pt-2 pb-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-[33vh]" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "font-bold dark:text-dark-text-fill" }, t('Appearance')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm text-gray-600 dark:text-dark-text-fill" }, t('Theme preferences'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { defaultValue: defaultTheme, "data-testid": "themeChange", onChange: (e) => handleThemeChange(e), className: "ml-auto bg-white border px-[2vh] h-8 rounded-md text-xs md:text-sm text-gray-600 dark:text-dark-text-fill dark:bg-dark-bg outline-none" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "light" }, t('Light theme')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "dark" }, t('Dark theme')))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "flex items-center border-b pt-2 pb-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-[33vh]" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "font-bold dark:text-dark-text-fill" }, t('Language')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm text-gray-600 dark:text-dark-text-fill" }, t('Language preferences'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { defaultValue: userLang, "data-testid": "lanChange", ref: lanRef, onChange: (e) => handleLanChange(e), className: "ml-auto bg-white border px-2 h-8 rounded-md text-xs md:text-sm text-gray-600 dark:text-dark-text-fill dark:bg-dark-bg outline-none" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "en" }, "English"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "fr" }, "Fran\u00E7ais"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "kn" }, "Ikinyarwanda"))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "flex items-center border-b pt-2 pb-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-[33vh]" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "font-bold dark:text-dark-text-fill" }, t('Email notifications')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm text-gray-600 dark:text-dark-text-fill" }, t('Feedback emails, reminder emails, news emails'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Switch, { checked: emailEnabled, "data-testid": "emailChange", onChange: setEmailEnabled, className: `ml-auto border ${emailEnabled ? 'dark:border-primary' : ''} relative inline-flex h-6 w-12 items-center rounded-full` },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: `${emailEnabled
                                    ? 'bg-primary   translate-x-6'
                                    : 'bg-gray-300 translate-x-1'} inline-block h-4 w-4 transform rounded-full` }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "flex items-center border-b pt-2 pb-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-[33vh]" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "font-bold dark:text-dark-text-fill" }, t('Push notifications')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm text-gray-600 dark:text-dark-text-fill" }, t('Grade updates, session reminders, performance comments'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Switch, { checked: pushEnabled, "data-testid": "pushChange", onChange: setPushEnabled, className: ` ml-auto border ${pushEnabled ? 'dark:border-primary' : ''} relative inline-flex h-6 w-12 items-center rounded-full` },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: `${pushEnabled
                                    ? 'bg-primary   translate-x-6'
                                    : 'bg-gray-300 translate-x-1'} inline-block h-4 w-4 transform rounded-full ` }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "flex items-center border-b pt-2 pb-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-[33vh]" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "font-bold dark:text-dark-text-fill" }, t('Privacy and Security')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm text-gray-600 dark:text-dark-text-fill" }, t('Privacy and Security'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, { className: "ml-auto mt-2 text-xs md:text-base text-gray-600 dark:text-dark-text-fill", to: "#link" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, t('Change')))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "flex items-center pt-2 pb-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-[33vh]" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "font-bold dark:text-dark-text-fill" }, t('Login Activity')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm text-gray-600 dark:text-dark-text-fill" }, t('History of your login sessions'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, { to: "#link", className: "ml-auto mt-2 text-xs md:text-base text-gray-600 dark:text-dark-text-fill" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, t('View')))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);


/***/ })

}]);
//# sourceMappingURL=src_pages_Settings_tsx.js.map