"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_pages_Pricing_tsx"],{

/***/ "./src/components/PricingCard.tsx":
/*!****************************************!*\
  !*** ./src/components/PricingCard.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PricingCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/react */ "./node_modules/.pnpm/@iconify+react@3.2.2_react@18.2.0/node_modules/@iconify/react/dist/iconify.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buttons */ "./src/components/Buttons.tsx");
/* eslint-disable */





function PricingCard(props) {
    /* istanbul ignore next */
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "border-2 w-60 md:w-80 rounded-lg m-10" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-center items-center m-6" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-light-text dark:text-dark-text-fill text-2xl font-bold m-4" }, props.plan),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-light-text dark:text-dark-text-fill text-4xl font-bold m-4" }, "$0"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-center items-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "text-light-text text-center dark:text-dark-text-fill text-sm" },
                    "$1 ",
                    t('per month, paid annually')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "text-primary text-sm" }, t('Annual plan')),
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: "bxs:hand-right", color: "#148fb6" })))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "m-4" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "primary", size: "lg" },
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, { to: "/pricing-form" }, t('Get Started')),
                    ' ')),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "mr-2" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: "ant-design:check-circle-filled", color: "#148fb6" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "text-light-text dark:text-dark-text-fill text-sm" }, t('Comprehensive security'))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "mr-2" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: "ant-design:check-circle-filled", color: "#148fb6" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "text-light-text dark:text-dark-text-fill text-sm" }, t('Comprehensive security'))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "mr-2" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: "ant-design:check-circle-filled", color: "#148fb6" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "text-light-text dark:text-dark-text-fill text-sm" }, t('Comprehensive security'))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "mr-2" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: "ant-design:check-circle-filled", color: "#148fb6" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "text-light-text dark:text-dark-text-fill text-sm" }, t('Comprehensive security'))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "mr-2" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: "ant-design:check-circle-filled", color: "#148fb6" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "text-light-text dark:text-dark-text-fill text-sm" }, t('Comprehensive security'))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "mr-2" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: "ant-design:check-circle-filled", color: "#148fb6" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "text-light-text dark:text-dark-text-fill text-sm" }, t('Comprehensive security')))))));
}


/***/ }),

/***/ "./src/pages/Pricing.tsx":
/*!*******************************!*\
  !*** ./src/pages/Pricing.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pricing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _components_PricingCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PricingCard */ "./src/components/PricingCard.tsx");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _dummyData_comingSoonPage_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dummyData/comingSoonPage.json */ "./src/dummyData/comingSoonPage.json");





function Pricing() {
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_dummyData_comingSoonPage_json__WEBPACK_IMPORTED_MODULE_3__);
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_2__["default"])('Pricing');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, data ? (data.map((item) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center justify-center h-screen bg-light-bg dark:bg-dark-frame-bg md:-mt-16 md:-mb-44", key: item.id },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "dark:bg-dark-bg bg-gray-100 rounded-lg shadow-lg p-5 md:p-20 mx-2" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-4xl tracking-tight leading-10 font-extrabold text-light-text dark:text-dark-text-fill sm:text-5xl sm:leading-none md:text-6xl" }, item.title),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "text-xl text-light-text dark:text-dark-text-fill md:text-3xl mt-10" }, item.name),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-md md:text-xl mt-10 text-light-text dark:text-dark-text-fill" }, item.content))))))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg flex-grow pt-14 md:pt-10" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-center items-center mx-auto grow" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "text-primary text-lg text-center w-3/4 my-3 md:text-4xl flex justify-center md:my-9 mx-auto" }, t('pricing_page_header')),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "text-light-text dark:text-dark-text-fill text-sm text-center w-3/4 md:text-2xl flex justify-center" }, t('pricing_page_paragraph')),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-wrap justify-center m-10" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PricingCard__WEBPACK_IMPORTED_MODULE_1__["default"], { plan: t('Free') }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PricingCard__WEBPACK_IMPORTED_MODULE_1__["default"], { plan: t('Premium') }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PricingCard__WEBPACK_IMPORTED_MODULE_1__["default"], { plan: t('Pro') })))))));
}


/***/ }),

/***/ "./src/dummyData/comingSoonPage.json":
/*!*******************************************!*\
  !*** ./src/dummyData/comingSoonPage.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":"Pricing page","name":"Coming Soon","content":"Something new is coming","image":"placide.png"}]');

/***/ })

}]);
//# sourceMappingURL=src_pages_Pricing_tsx.js.map