"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_components_Organizations_tsx"],{

/***/ "./src/components/CreateOrganizationModal.tsx":
/*!****************************************************!*\
  !*** ./src/components/CreateOrganizationModal.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddOrganization: () => (/* binding */ AddOrganization),
/* harmony export */   "default": () => (/* binding */ CreateOrganizationModal)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buttons */ "./src/components/Buttons.tsx");






const AddOrganization = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql) `
  mutation AddOrganization($organizationInput: OrganizationInput) {
    addOrganization(organizationInput: $organizationInput) {
      id
    }
  }
`;
function CreateOrganizationModal({ createOrganizationModel, removeModel, refetch, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { handleSubmit, formState: { errors }, reset, register, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();
    const [addOrganizationMutation, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation)(AddOrganization, {
        onError(error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message.toString());
        },
        onCompleted() {
            refetch();
            reset();
            removeModel();
        },
    });
    async function addOrganization(data) {
        await addOrganizationMutation({
            variables: { organizationInput: data },
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${createOrganizationModel === true ? 'block' : 'hidden'}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12 uppercase" }, t('Add Organization')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", className: "border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs py-2 w-full", placeholder: t('name'), ...register('name', {
                                    required: `${t('The Organization name is required')}`,
                                }) })),
                        errors?.name && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.name?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", className: "border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full", placeholder: t('Email'), ...register('email', {
                                    required: `${t('The Email is required')}`,
                                }) })),
                        errors?.email && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.email?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", className: "border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full", placeholder: t('Description'), ...register('description', {
                                    required: `${t('The Description is required')}`,
                                }) })),
                        errors?.description && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.description?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "remove", onClick: () => {
                                removeModel();
                                reset();
                            }, disabled: loading },
                            ' ',
                            t('Cancel')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "primary", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans p-0", onClick: handleSubmit(addOrganization), loading: loading },
                            ' ',
                            t('Save'))))))));
}


/***/ }),

/***/ "./src/components/Organizations.tsx":
/*!******************************************!*\
  !*** ./src/components/Organizations.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getOrganizations: () => (/* binding */ getOrganizations)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _CreateOrganizationModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateOrganizationModal */ "./src/components/CreateOrganizationModal.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Buttons */ "./src/components/Buttons.tsx");
/* eslint-disable */






const getOrganizations = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql) `
  query GetOrganizations {
    getOrganizations {
      id
      name
      description
      admin {
        id
        email
      }
    }
  }
`;
const Organizations = () => {
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_2__["default"])('Organizations');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { data: getData, loading: getLoading, error: getError, refetch: getRefetch, } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(getOrganizations);
    const [createOrganizationModel, setCreateOrganizationModel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [deleteOrganizationModel, setDeleteOrganizationModel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [showActions, setShowActions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleShowActions = () => {
        setShowActions(!showActions);
    };
    const removeDeleteModel = () => {
        let newState = !deleteOrganizationModel;
        setDeleteOrganizationModel(newState);
    };
    const removeModel = () => {
        const newState = !createOrganizationModel;
        setCreateOrganizationModel(newState);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CreateOrganizationModal__WEBPACK_IMPORTED_MODULE_1__["default"], { createOrganizationModel: createOrganizationModel, removeModel: removeModel, refetch: getRefetch }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${deleteOrganizationModel === true ? 'block' : 'hidden'}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-xl dark:text-white text-center w-11/12" }, t('DeleteOrganization')),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-base dark:text-white text-center m-4" }, t('reallyRemoveOrganization'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "delete", onClick: () => removeDeleteModel() },
                                ' ',
                                t('Cancel'),
                                ' '),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "danger", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans" },
                                ' ',
                                t('Delete'),
                                ' ')))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg min-h-screen" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-left px-7 lg:px-60 pt-24 pb-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "space-x-8 lg:ml-10" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "primary", size: "lg", onClick: removeModel, "data-testid": "removeModel" },
                        ' ',
                        t('Organization'),
                        " +",
                        ' '))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-3 md:px-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-full lg:w-[80%] lg:ml-64" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " flex items-center justify-between pb-6" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-gray-800 dark:text-white font-semibold" }, t('Organization List')))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: "min-w-full leading-normal" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider" }, t('name')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "px-5  border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider" }, t('Admin')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider" }, t('Description')))),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, getData?.getOrganizations?.map(({ id, name, description, admin: { email } }) => {
                                        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { key: id },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center" },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-900 dark:text-white whitespace-no-wrap" }, name)))),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-900 dark:text-white whitespace-no-wrap" }, email)),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-900 dark:text-white whitespace-no-wrap break-words" }, description))));
                                    })))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Organizations);


/***/ })

}]);
//# sourceMappingURL=src_components_Organizations_tsx.js.map