"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_pages_GradingSystem_tsx"],{

/***/ "./src/Mutations/DeleteGrading.tsx":
/*!*****************************************!*\
  !*** ./src/Mutations/DeleteGrading.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");

const DELETE_GRADING_SYSTEM = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation DeleteRatingSystem($deleteRatingSystemId: ID!) {
    deleteRatingSystem(id: $deleteRatingSystemId)
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DELETE_GRADING_SYSTEM);


/***/ }),

/***/ "./src/Mutations/MakeDefault.tsx":
/*!***************************************!*\
  !*** ./src/Mutations/MakeDefault.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_GRADE: () => (/* binding */ DEFAULT_GRADE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");

const DEFAULT_GRADE = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
query GetDefaultGrading {
  getDefaultGrading {
    id
    name
    grade
    description
    percentage
    userId
    defaultGrading
  }
}
`;
const MAKE_DEFAULT_GRADING_SYSTEM = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
mutation MakeRatingdefault($makeRatingdefaultId: ID) {
  makeRatingdefault(id: $makeRatingdefaultId)
}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MAKE_DEFAULT_GRADING_SYSTEM);


/***/ }),

/***/ "./src/components/DataPagination.tsx":
/*!*******************************************!*\
  !*** ./src/components/DataPagination.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/ArrowCircleLeftIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/ArrowCircleRightIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DataPagination({ pageOptions, columnLength, canNextPage, canPreviousPage, pageSize, setPageSize, gotoPage, previousPage, nextPage, pageIndex, }) {
    /* istanbul ignore next */
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, pageOptions.length >= 0 && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: "w-full mt-2" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tfoot", { className: "w-full py-2" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "w-full py-2" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { colSpan: columnLength },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full justify-center flex mx-auto flex-row items-center overflow-x-auto" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "button", className: "page mx-2 text-white rounded-circle appearance-none font-bold flex items-center justify-center bg-primary h-[30px] w-[60px] cursor-pointer", onClick: () => previousPage(), disabled: !canPreviousPage },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__["default"], { className: "w-5", fontSize: "sm" })),
                        ' ',
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "button", onClick: () => nextPage(), disabled: !canNextPage, className: "page mx-2 text-white rounded-circle font-bold flex items-center justify-center bg-primary h-[30px] w-[60px] cursor-pointer" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__["default"], { className: "w-5", fontSize: "sm" })),
                        ' ',
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row justify-center w-full sm:text-[12px] items-center " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "inline-block mx-2" },
                                "Page",
                                ' ',
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null,
                                    pageIndex + 1,
                                    " of",
                                    ` ${pageOptions.length}`),
                                ' '),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "inline-block mx-2" },
                                "| Go to page:",
                                ' ',
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "number", className: " outline-none border rounded-md appearance-none border-primary dark:bg-primary pl-1", defaultValue: pageIndex + 1, onChange: (e) => {
                                        const pageNumber = e.target.value
                                            ? Number(e.target.value) - 1
                                            : 0;
                                        gotoPage(pageNumber);
                                    }, style: {
                                        width: '50px',
                                        height: '30px',
                                        border: 'solid 0.1rem #4aa5be',
                                        paddingLeft: '1.2rem',
                                    } })),
                            ' ',
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { className: "px-1/2 font-raleway rounded-md border border-primary dark:bg-primary", value: pageSize, onChange: (e) => setPageSize(Number(e.target.value)), style: { height: '30px', border: 'solid 0.1rem #4aa5be' } }, [3, 5, 10, 25, 50, 100].map((pgSize) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { key: pgSize, value: pgSize },
                                "Show ",
                                pgSize)))))))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataPagination);


/***/ }),

/***/ "./src/components/DataTable.tsx":
/*!**************************************!*\
  !*** ./src/components/DataTable.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-table */ "./node_modules/.pnpm/react-table@7.8.0_react@18.2.0/node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DataPagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataPagination */ "./src/components/DataPagination.tsx");
// @ts-nocheck




function DataTable({ data, columns, title }) {
    // const sortedData = React.useMemo(() => [...data], []);
    const sortedColumns = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => [...columns], [columns]);
    const sortedData = data;
    // const sortedColumns = columns;
    const TableInstance = (0,react_table__WEBPACK_IMPORTED_MODULE_1__.useTable)({ data: sortedData, columns: sortedColumns, initialState: { pageSize: 3 } }, react_table__WEBPACK_IMPORTED_MODULE_1__.useGlobalFilter, react_table__WEBPACK_IMPORTED_MODULE_1__.useSortBy, react_table__WEBPACK_IMPORTED_MODULE_1__.usePagination);
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const { getTableProps, setGlobalFilter, getTableBodyProps, page, nextPage, previousPage, canPreviousPage, canNextPage, gotoPage, pageCount, setPageSize, pageOptions, headerGroups, prepareRow, state, } = TableInstance;
    // @ts-ignore
    const { globalFilter, pageIndex, pageSize } = state;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-[100%] mx-auto lg:w-[80%] lg:ml-60 mb-10" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " flex items-center justify-between pb-6" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-gray-800 dark:text-white font-semibold text-xl" }, t(title)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { defaultValue: globalFilter || '', placeholder: "Filter", className: "border-gray-300 dark:bg-dark-tertiary dark:text-white border py-2 mt-4 rounded outline-none px-5 font-sans text-xs w-52 md:w-96", 
                    /* istanbul ignore next */
                    onChange: (e) => setGlobalFilter(e.target.value) }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { overflowX: 'auto' } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: "min-w-full leading-normal", ...getTableProps() },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, headerGroups.map((headerGroup) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { ...headerGroup.getHeaderGroupProps() }, headerGroup.headers.map((column) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: column.isSorted ? 'sort-asc thead' : ' thead', ...column.getHeaderProps(column.getSortByToggleProps()) }, column.render('Header')))))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", { ...getTableBodyProps() }, page.map((row) => {
                    prepareRow(row);
                    // eslint-disable-next-line operator-linebreak
                    const rowTheme = row.index % 2 !== 0
                        ? 'bg-light-bg dark:bg-dark-tertiary'
                        : 'bg-white dark:bg-dark-bg';
                    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: ` ${rowTheme}} `, ...row.getRowProps() }, row.cells.map((cell) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "data-cell", ...cell.getCellProps() }, cell.render('Cell'))))));
                }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DataPagination__WEBPACK_IMPORTED_MODULE_2__["default"], { pageOptions: pageOptions, canNextPage: canNextPage, gotoPage: gotoPage, columnLength: columns.length, canPreviousPage: canPreviousPage, pageSize: pageSize, setPageSize: setPageSize, previousPage: previousPage, nextPage: nextPage, pageCount: pageCount, pageIndex: pageIndex }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataTable);


/***/ }),

/***/ "./src/containers/admin-dashBoard/DeleteGradingsModal.tsx":
/*!****************************************************************!*\
  !*** ./src/containers/admin-dashBoard/DeleteGradingsModal.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteGradingsModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");



function DeleteGradingsModal({ deleteGradingModal, removeModel, deleteFunc, setValue, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${deleteGradingModal === true ? 'block' : 'hidden'}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-xl dark:text-white text-center w-11/12" }, t('DeleteGRADINGSYSTEM')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-base dark:text-white text-center m-4" }, t('reallyRemoveGrading'))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "delete", 
                            /* istanbul ignore next */
                            onClick: 
                            /* istanbul ignore next */
                            () => removeModel() }, t('Cancel')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "danger", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "confirmDeleteBtn", onClick: 
                            /* istanbul ignore next */
                            () => {
                                /* istanbul ignore next */
                                deleteFunc();
                                /* istanbul ignore next */
                                setValue('');
                            } }, t('Delete'))))))));
}


/***/ }),

/***/ "./src/containers/admin-dashBoard/MakeDefaultModal.tsx":
/*!*************************************************************!*\
  !*** ./src/containers/admin-dashBoard/MakeDefaultModal.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MakeDefaultModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");



function MakeDefaultModal({ makeDefaultModal, removeModel, makeDefaultFunc, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${makeDefaultModal === true ? 'block' : 'hidden'}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-xl dark:text-white text-center w-11/12" }, t('MakeDefaultTitle')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-base dark:text-white text-center m-4" }, t('reallyMakeDefaultGrading'))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "delete", onClick: 
                            /* istanbul ignore next */
                            () => removeModel() }, t('No')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "success", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "confirmDeleteBtn", onClick: 
                            /* istanbul ignore next */
                            () => {
                                /* istanbul ignore next */
                                makeDefaultFunc();
                            } }, t('Yes'))))))));
}


/***/ }),

/***/ "./src/pages/GradingSystem.tsx":
/*!*************************************!*\
  !*** ./src/pages/GradingSystem.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Sidebar */ "./src/components/Sidebar.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DataTable */ "./src/components/DataTable.tsx");
/* harmony import */ var _containers_admin_dashBoard_DeleteGradingsModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/admin-dashBoard/DeleteGradingsModal */ "./src/containers/admin-dashBoard/DeleteGradingsModal.tsx");
/* harmony import */ var _containers_admin_dashBoard_MakeDefaultModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/admin-dashBoard/MakeDefaultModal */ "./src/containers/admin-dashBoard/MakeDefaultModal.tsx");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useApolloClient.js");
/* harmony import */ var _Mutations_DeleteGrading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Mutations/DeleteGrading */ "./src/Mutations/DeleteGrading.tsx");
/* harmony import */ var _GradingSystemQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GradingSystemQuery */ "./src/pages/GradingSystemQuery.ts");
/* harmony import */ var _Mutations_MakeDefault__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Mutations/MakeDefault */ "./src/Mutations/MakeDefault.tsx");
/* harmony import */ var _GradingSystemMutation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GradingSystemMutation */ "./src/pages/GradingSystemMutation.ts");
/* eslint-disable */















const GradingSystem = () => {
    const [addGradingSystemModel, setAddGradingSystemModel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [defaultGrade, setDefaultGrade] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const { register, handleSubmit, reset, formState: { errors }, setError, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_12__.useForm)();
    const { data } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_13__.useQuery)(_GradingSystemQuery__WEBPACK_IMPORTED_MODULE_9__["default"], { variables: { orgToken: localStorage.getItem('orgToken') } });
    const [CreateRatingSystem, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_14__.useMutation)(_GradingSystemMutation__WEBPACK_IMPORTED_MODULE_11__["default"]);
    const [deleteGradingModal, setDeleteGradingModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [removeMakeDefaultModal, setRemoveMakeDefaultModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_2__["default"])('Cohorts');
    const removeDeleteModel = () => {
        /* istanbul ignore next */
        const newState = !deleteGradingModal;
        setDeleteGradingModal(newState);
    };
    const makeGradeDefaultModel = () => {
        /* istanbul ignore next */
        const newState = !removeMakeDefaultModal;
        setRemoveMakeDefaultModal(newState);
    };
    const removeModel = () => {
        let newState = !addGradingSystemModel;
        setAddGradingSystemModel(newState);
    };
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_15__.useTranslation)();
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const client = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_16__.useApolloClient)();
    /* istanbul ignore next */
    const onSubmit = async (userInput) => {
        let filter = {
            name: userInput.name,
            grade: userInput.grade.split(','),
            percentage: userInput.percentage.split(','),
            description: userInput.description.split(','),
        };
        const { data } = await CreateRatingSystem({
            variables: {
                name: filter.name,
                grade: filter.grade,
                percentage: filter.percentage,
                description: filter.description,
                orgToken: localStorage.getItem('orgToken')
            },
        });
        await client.refetchQueries({
            include: [_GradingSystemQuery__WEBPACK_IMPORTED_MODULE_9__["default"]],
        });
        reset();
        removeModel();
        setValue('');
    };
    const handleClick = () => setNav(!nav);
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_2__["default"])('Grading System');
    let dataValues = [];
    !loading &&
        data?.getRatingSystems &&
        data?.getRatingSystems.forEach((rating) => {
            for (let i = 0; i < rating.grade.length; i++) {
                const ratingObj = {
                    id: rating.id,
                    name: rating.name,
                    grade: rating.grade[i],
                    definition: rating.description[i],
                    percentage: rating.percentage[i],
                    userId: rating.userId,
                };
                dataValues.push(ratingObj);
            }
        });
    let fileteredData;
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        label: '',
        id: '',
    });
    const [deleteRatingSystem] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_14__.useMutation)(_Mutations_DeleteGrading__WEBPACK_IMPORTED_MODULE_8__["default"], {
        variables: {
            deleteRatingSystemId: formData.id,
        },
        onCompleted: () => {
            /* istanbul ignore next */
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success('grading system deleted');
            setDeleteGradingModal(false);
        },
        onError() {
            /* istanbul ignore next */
            setDeleteGradingModal(false);
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('Something went wrong!?!?');
        },
        refetchQueries: [{ query: _GradingSystemQuery__WEBPACK_IMPORTED_MODULE_9__["default"] }],
    });
    const [makeRatingdefault] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_14__.useMutation)(_Mutations_MakeDefault__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variables: {
            makeRatingdefaultId: defaultGrade,
        },
        onCompleted: () => {
            /* istanbul ignore next */
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success('make a default grading ');
            setRemoveMakeDefaultModal(false);
        },
        /* istanbul ignore next */
        onError() {
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error('Something went wrong!?!?');
            setRemoveMakeDefaultModal(false);
        },
        refetchQueries: [{ query: _GradingSystemQuery__WEBPACK_IMPORTED_MODULE_9__["default"] }],
    });
    if (!loading) {
        fileteredData = dataValues.filter((item) => item.name === formData.label);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (formData.label === 'custom') {
            /* istanbul ignore next */
            setValue('');
            setTitle('custom Name');
            setAddGradingSystemModel(true);
        }
        else {
            setTitle(formData.label);
            fileteredData = dataValues.filter((item) => item.name === formData.label);
            if (fileteredData[0] != undefined) {
                formData.id = fileteredData[0].id;
                setFormData({ ...formData });
            }
        }
    }, [formData.label, value]);
    const GradingsColumn = [
        { Header: t('Names'), accessor: 'name' },
        {
            Header: t('action'),
            accessor: 'id',
            Cell: ({ row }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "primary", size: "sm", onClick: () => {
                    const ID = row?.cells[1].value;
                    setDefaultGrade(ID);
                    makeGradeDefaultModel();
                }, style: "px-4 py-0 text-sm" }, t('Make default'))),
        },
    ];
    const gradingData = data &&
        data?.getRatingSystems.length &&
        data?.getRatingSystems.map(({ name, id }) => ({
            name,
            id,
        }));
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_admin_dashBoard_DeleteGradingsModal__WEBPACK_IMPORTED_MODULE_5__["default"], { deleteGradingModal: deleteGradingModal, removeModel: removeDeleteModel, 
            /* istanbul ignore next */
            deleteFunc: () => deleteRatingSystem(), setValue: setValue }),
        ";",
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_admin_dashBoard_MakeDefaultModal__WEBPACK_IMPORTED_MODULE_6__["default"], { removeModel: makeGradeDefaultModel, makeDefaultModal: removeMakeDefaultModal, makeDefaultFunc: () => makeRatingdefault() }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${addGradingSystemModel === true ? 'block' : 'hidden'}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-full sm:w-3/4 xl:w-4/12 rounded-lg p-4 pb-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex flex-wrap justify-center items-center " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12 " }, t('Add Grading System')),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { onSubmit: handleSubmit(onSubmit), className: " py-3 px-8" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", name: "name", ...register('name', { required: 'Grade is required' }), className: " dark:bg-dark-tertiary border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full", placeholder: t('Label. eg:Name of grading system') }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-left mb-1 pl-4" }, errors.name && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { className: "text-red-600" }, errors.name.message))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", name: "percentage", ...register('percentage'), className: " dark:bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full", placeholder: t('Grading Ranges') }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-left mb-1 pl-4" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", name: "description", ...register('description', {
                                        required: 'Description is required',
                                    }), className: " dark:bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full", placeholder: t(' Grade description') }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-left mb-1 pl-4" }, errors.description && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { className: "text-red-600" }, errors.description.message))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", name: "grade", ...register('grade', { required: 'Grade is required' }), className: " dark:bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full", placeholder: t('Grade') }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-left mb-1 pl-4" }, errors.grade && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { className: "text-red-600" }, errors.grade.message))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], { "data-testid": "removeModel", variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", onClick: () => {
                                    removeModel(), setValue('');
                                } }, t('Cancel')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], { type: "submit", variant: "primary", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", onClick: () => {
                                    react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success('grading system created');
                                } }, t('Save'))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col h-screen" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], { toggle: handleClick, style: "hidden lg:flex" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg min-h-screen overflow-y-auto overflow-x-hidden" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-left px-7 lg:px-64 pt-24" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex px-5 py-2 pb-8 w-fit" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { className: "flex bg-primary rounded-md py-2 px-1 text-white font-medium cursor-pointer", value: value, onChange: (event) => {
                                            /* istanbul ignore next */
                                            setFormData({
                                                ...formData,
                                                label: event.target.value,
                                            });
                                            setValue(event.target.value);
                                        } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { selected: true, value: "" },
                                            ' ',
                                            "---Select Grading System---",
                                            ' '),
                                        !loading &&
                                            data !== undefined &&
                                            data?.getRatingSystems?.map((item) => (
                                            /* istanbul ignore next */
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: item.name },
                                                ' ',
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                                    item.name,
                                                    " "))))),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "primary", size: "lg", onClick: removeModel, "data-testid": "removeModel" },
                                        ' ',
                                        t('Grading'),
                                        " +"))),
                            value === '' && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-3 md:px-8" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-gray-800 dark:text-white font-semibold text-xl" }, t('Available gradings')),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-3 m d:px-8 w-screen overflow-x-auto" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DataTable__WEBPACK_IMPORTED_MODULE_4__["default"], { columns: GradingsColumn, data: gradingData ? gradingData : [{}], title: t('Gradings List') })))),
                            value !== 'custom' && value !== '' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-3 md:px-8" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-[100%] mx-auto lg:w-[80%] lg:ml-60 mb-10" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " flex items-center justify-between pb-6" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center justify-between w-full" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-gray-800 dark:text-white font-semibold text-xl" }, title),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], { "data-testid": "removeModel", variant: "primary", size: "sm", onClick: () => {
                                                    removeDeleteModel();
                                                } }, t('Delete')))),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: "min-w-full leading-normal" },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", { className: " w-full px-32" },
                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary sm:text-center text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider" }, t('grade')),
                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary sm:text-center text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider" }, t('Approximate Range')),
                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary sm:text-center text-left text-xs font-semibold text-gray-600 dark:text-white uppercase md:table-cell tracking-wider" }, t('Grade Description')))),
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, !loading &&
                                                        fileteredData.map((item, index) => {
                                                            let rowTheme = index % 2 !== 0
                                                                ? 'bg-light-bg dark:bg-dark-tertiary'
                                                                : 'bg-white dark:bg-dark-bg';
                                                            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: `${rowTheme} `, key: index },
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm" },
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex sm:justify-center items-center" },
                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "" },
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-900 text-center dark:text-white whitespace-no-wrap" }, item.grade)))),
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm" },
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex sm:justify-center items-center" },
                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "" },
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-900 items-center dark:text-white whitespace-no-wrap" }, item.percentage)))),
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm" },
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex sm:justify-center items-center" },
                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "" },
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-900 text-center dark:text-white whitespace-no-wrap" }, item.definition))))));
                                                        }))))))))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradingSystem);


/***/ }),

/***/ "./src/pages/GradingSystemMutation.ts":
/*!********************************************!*\
  !*** ./src/pages/GradingSystemMutation.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");

const GRADING_SYSTEM_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation CreateRatingSystem(
    $name: String!
    $grade: [String]!
    $description: [String]!
    $percentage: [String]!
    $orgToken: String!
  ) {
    createRatingSystem(
      name: $name
      grade: $grade
      description: $description
      percentage: $percentage
      orgToken: $orgToken
    ) {
      id
      name
      grade
      description
      percentage
      defaultGrading
      userId
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GRADING_SYSTEM_MUTATION);


/***/ }),

/***/ "./src/pages/GradingSystemQuery.ts":
/*!*****************************************!*\
  !*** ./src/pages/GradingSystemQuery.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");

const GRADING_SYSTEM_QUERY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
query Query($orgToken: String!) {
    getRatingSystems(orgToken: $orgToken) {
      description
      grade
      id
      defaultGrading
      name
      percentage
      userId
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GRADING_SYSTEM_QUERY);


/***/ })

}]);
//# sourceMappingURL=src_pages_GradingSystem_tsx.js.map