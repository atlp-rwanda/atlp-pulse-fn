"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_pages_OrgRegister_tsx"],{

/***/ "./src/pages/OrgRegister.tsx":
/*!***********************************!*\
  !*** ./src/pages/OrgRegister.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrgRegister)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _RegisterOrgMutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RegisterOrgMutation */ "./src/pages/RegisterOrgMutation.tsx");
/* harmony import */ var _OrgRegisterSuccessModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OrgRegisterSuccessModel */ "./src/pages/OrgRegisterSuccessModel.tsx");











function OrgRegister() {
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__["default"])('Register organization');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const [addOrganization, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_RegisterOrgMutation__WEBPACK_IMPORTED_MODULE_4__["default"]);
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const { reset, register, handleSubmit, formState: { errors }, setError, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();
    const [orgRegisterSuccessModel, setOrgRegisterSuccessModel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [orgName, setOrgName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const removeModel = () => {
        setOrgRegisterSuccessModel(false);
    };
    const onSubmit = async (organizationInput) => {
        setOrgName(name);
        /* istanbul ignore next */
        try {
            await addOrganization({
                variables: { organizationInput },
                onError(error) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message);
                },
                onCompleted(data) {
                    // toast.success(data.requestOrganization);
                    setOrgRegisterSuccessModel(true);
                    setName('');
                    reset();
                },
            });
        }
        catch (error) {
            setError('name', {
                type: 'custom',
                message: t('Organisation Name already exist'),
            });
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OrgRegisterSuccessModel__WEBPACK_IMPORTED_MODULE_5__["default"], { removeModel: removeModel, OrgRegisterSuccessModel: orgRegisterSuccessModel, orgName: orgName }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "md:flex md:flex-col md:items-center md:justify-center w-full min-h-screen -mt-3 -mb-16 xl:-mt-14  xl:-mb-28 text-left dark:bg-dark-frame-bg bg-gray-100 sm:flex sm:flex-row sm:items-center sm:justify-center" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white sm:rounded-2xl py-8 md:py-0 md:shadow-2xl md:flex xl:w-3/4 md:w-[90%] md:max-w-4xl sm:w-full px-2 md:px-0 mx-20 md:mx-0 sm:shadow-none dark:shadow-2xl " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "2xl:w-3/5 md:w-screen md:pl-14 lg:pl-32 xl:pl-24 py-20 md:py-8 sm:w-full sm:p-2 dark:bg-dark-bg dark:rounded-tl-xl dark:rounded-bl-xl" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-2xl ml-4 md:ml-0 lg:text-3xl pb-6 font-bold text-primary dark:text-dark-text-fill " }, t('Register your organization')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { onSubmit: handleSubmit(onSubmit) },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col items-left", "data-testid": "dataid" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "tracking-wide text-gray-700 dark:text-white font-normal" }, t('Email')),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "rounded border border-primary dark:border-white w-full md:w-3/4 p-2 flex items-center mb-6 dark:bg-dark-bg " },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaRegEnvelope, { className: "text-gray-400 mr-2" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", ...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email',
                                            },
                                        }), className: "bg-white outline-none text-sm flex-1 dark:border-white dark:bg-dark-bg dark:text-white" })),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "-mt-6" }, errors.email && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { className: "text-red-600" }, errors.email.message))),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "tracking-wide mt-3 text-gray-700 dark:text-white font-normal mb-2" }, t('Organization name')),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "rounded border border-primary dark:border-white w-full md:w-3/4 p-2 flex items-center mb-6 dark:bg-dark-bg " },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaRegUser, { className: "text-gray-400 mr-2" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", "data-testid": "input1", ...register('name', { required: 'Name is required' }), value: name, onChange: (e) => {
                                            setName(e.target.value);
                                        }, className: "bg-white outline-none text-sm flex-1 dark:border-white dark:bg-dark-bg dark:text-white" })),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "-mt-6" }, errors.name && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { className: "text-red-600" }, errors.name.message))),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "tracking-wide text-gray-700 mt-3 dark:text-white font-normal mb-2" }, t('Organization Description')),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "rounded border border-primary dark:border-white w-full md:w-3/4 p-2 flex items-center mb-3 dark:bg-dark-bg " },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaPen, { className: "text-gray-400 mr-2 -mt-5" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { ...register('description', {
                                            required: 'Description is required',
                                        }), className: "bg-white outline-none text-sm flex-1 dark:border-white dark:bg-dark-bg dark:text-white" })),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "-mt-4" }, errors.description && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { className: "text-red-600" }, errors.description.message))),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-80  md:w-[75%] justify-between rounded mb-5 mt-5" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "flex items-left text-xs dark:text-dark-text-fill " },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "checkbox", name: "remember", className: "mr-1 dark:text-dark-text-fill dark:border-white dark:bg-dark-frame-bg" }),
                                        t('I agree to the'),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-primary mx-1" }, t('Terms & Conditions of')),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "DevPulse"))),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "submit", variant: "primary", size: "lg", style: "w-1/4 mx-[20%]", loading: loading },
                                    ' ',
                                    t('Register')))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "md:w-2/5 bg-primary text-white rounded-tr-2xl rounded-br-2xl dark:rounded-br-2xl dark:rounded-tr-2xl md:py-4 md:px-2 sm:w-full sm:px-12 sm:py-4 md:block sm:hidden dark:text-dark-text-fill " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "2xl:text-xl md:text-xl md:font-bold md:pb-6 text-center" }, t('Get Started')),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-lg font-bold text-dark-text-fill text-center pb-4 px-2 font-sans" }, t('Registration_page_heading')),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "max-w-[600px] text-left text-white pl-5 pb-6 text-md" },
                        t('Registration_page_paragraph'),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, { to: "get-started", className: "border-b-1 font-bold text-white ml-4 pr-52" }, t('Explore'))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-left text-white text-lg mb-2 px-5" }, t("Your organization's link")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "button", className: "rounded bg-white text-primary ml-20 px-3 font-bold py-2 mt-3" },
                        name.replace(/ /gi, '').toLowerCase(),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, ".pulse.org")))))));
}


/***/ }),

/***/ "./src/pages/OrgRegisterSuccessModel.tsx":
/*!***********************************************!*\
  !*** ./src/pages/OrgRegisterSuccessModel.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrgRegisterSuccessModel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Buttons */ "./src/components/Buttons.tsx");



function OrgRegisterSuccessModel({ OrgRegisterSuccessModel, removeModel, orgName, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${OrgRegisterSuccessModel === true ? 'block' : 'hidden'}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-xl dark:text-white text-center w-11/12" }, t('Register organization')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-base dark:text-white text-center m-4" },
                            t('Request to create'),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, orgName),
                            ' ',
                            t('has been sent. You should receive an email with login credentials once the organization is approved.'))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-center" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "delete", onClick: () => removeModel() }, t('Ok'))))))));
}


/***/ }),

/***/ "./src/pages/RegisterOrgMutation.tsx":
/*!*******************************************!*\
  !*** ./src/pages/RegisterOrgMutation.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");

const REGISTER_ORGANIZATION_REQUEST = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation RequestOrganization($organizationInput: OrganizationInput!) {
    requestOrganization(organizationInput: $organizationInput)
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (REGISTER_ORGANIZATION_REQUEST);


/***/ })

}]);
//# sourceMappingURL=src_pages_OrgRegister_tsx.js.map