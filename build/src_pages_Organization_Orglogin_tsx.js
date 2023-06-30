"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_pages_Organization_Orglogin_tsx"],{

/***/ "./src/pages/Organization/LoginOrganisationMutation.tsx":
/*!**************************************************************!*\
  !*** ./src/pages/Organization/LoginOrganisationMutation.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");

const LOGIN_ORGANIZATION_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation LoginOrg($orgInput: OrgInput) {
    loginOrg(orgInput: $orgInput) {
      token
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LOGIN_ORGANIZATION_MUTATION);


/***/ }),

/***/ "./src/pages/Organization/Orglogin.tsx":
/*!*********************************************!*\
  !*** ./src/pages/Organization/Orglogin.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _LoginOrganisationMutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginOrganisationMutation */ "./src/pages/Organization/LoginOrganisationMutation.tsx");
/* harmony import */ var _components_ButtonLoading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ButtonLoading */ "./src/components/ButtonLoading.tsx");











function Orglogin() {
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__["default"])('Login');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const [OrgLogin, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_LoginOrganisationMutation__WEBPACK_IMPORTED_MODULE_4__["default"]);
    const { register, handleSubmit, formState: { errors }, setError, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
    const onSubmit = async (orgInput) => {
        /* istanbul ignore next */
        await OrgLogin({
            /* istanbul ignore next */
            variables: { orgInput },
            /* istanbul ignore next */
            onCompleted({ loginOrg }) {
                /* istanbul ignore next */
                localStorage.setItem('orgToken', loginOrg.token);
                /* istanbul ignore next */
                localStorage.setItem('orgName', orgInput.name);
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success('Welcome! Sign in to Continue');
                navigate('/users/login');
            },
            onError() {
                /* istanbul ignore next */
                setError('name', {
                    message: t('Incorrect Organisation Name'),
                });
            },
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grow bg-neutral-100 dark:bg-dark-frame-bg flex flex-col justify-center font-sans" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "max-w-lg w-full mx-auto my-28 bg-white dark:bg-dark-bg p-14 md:shadow-xl sm:shadow-none md:rounded-xl sm:rounded-none" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-center  text-black-600 text-2xl font-bold dark:text-dark-text-fill " }, t('Sign in to your Organization')),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-md  text-black-600 mt-2 text-center font-semibold dark:text-dark-text-fill sm:text-xs" }, t('Enter your organization’s Dev-Pulse URL')),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { action: "#none", className: "space-y-6 mt-4", onSubmit: handleSubmit(onSubmit) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", "data-testid": "orgName", ...register('name', {
                            required: 'Organisation name is required',
                        }), placeholder: t('your-organization.devpulse.co'), className: "w-full p-2 border border-primary rounded mt-1 dark:bg-dark-bg" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "-mt-6" }, errors.name && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { className: "text-red-600" }, errors.name.message))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ButtonLoading__WEBPACK_IMPORTED_MODULE_5__["default"], { style: "rounded-full inline-block" })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "submit", variant: "primary", "data-testid": "loginForm", size: "lg", style: "w-full ml-0 hover:bg-cyan-700 text-sm" },
                    ' ',
                    t('Continue')))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full text-sm  text-light-text dark:text-dark-text-fill" },
                    t('Looking to register an organization instead?'),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, { to: "/signup/org" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "#link", className: "text-primary" }, t('Register a new organization'))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Orglogin);


/***/ })

}]);
//# sourceMappingURL=src_pages_Organization_Orglogin_tsx.js.map