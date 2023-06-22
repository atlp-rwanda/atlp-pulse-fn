"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_containers_admin-dashBoard_Phases_tsx"],{

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

/***/ "./src/containers/admin-dashBoard/CreatePhaseModal.tsx":
/*!*************************************************************!*\
  !*** ./src/containers/admin-dashBoard/CreatePhaseModal.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddPhase: () => (/* binding */ AddPhase),
/* harmony export */   "default": () => (/* binding */ CreatePhaseModal)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");






const AddPhase = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql) `
mutation AddPhase(
  $name: String!
  $description: String!
  $orgToken: String!
) {
  addPhase(
    name: $name
    description: $description
    orgToken: $orgToken
  ) {
    id
  }
}
`;
function CreatePhaseModal({ createPhaseModel, removeModel, refetch, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { handleSubmit, formState: { errors }, reset, setValue, register, control, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();
    const [addPhaseMutation, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation)(AddPhase, {
        /* istanbul ignore next */
        onError(error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message.toString());
        },
        /* istanbul ignore next */
        onCompleted() {
            refetch();
            removeModel();
        },
    });
    /* istanbul ignore next */
    async function addPhase(data) {
        /* istanbul ignore next */
        const newData = { ...data };
        /* istanbul ignore next */
        /* istanbul ignore next */
        Object.keys(newData).forEach((field) => {
            if (!newData[field] || newData[field] === '') {
                delete newData[field];
            }
        });
        /* istanbul ignore next */
        await addPhaseMutation({
            /* istanbul ignore next */
            variables: { orgToken: localStorage.getItem('orgToken'), ...newData },
            /* istanbul ignore next */
            onCompleted() {
                reset();
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Phase Created successful");
            },
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${createPhaseModel === true ? 'block' : 'hidden'}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12 uppercase" }, t('Add Phase')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", className: "border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs py-2 w-full", placeholder: t('name'), ...register('name', {
                                    required: `${t('The Phase name is required')}`,
                                }) })),
                        errors?.name && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.name?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", className: "border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full", placeholder: t('Description'), ...register('description', {
                                    required: `${t('The Description is required')}`,
                                }) })),
                        errors?.description && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.description?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "remove", onClick: () => {
                                removeModel();
                                /* istanbul ignore next */
                                reset();
                            }, disabled: loading },
                            ' ',
                            t('cancel')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "primary", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans p-0", 
                            /* istanbul ignore next */
                            onClick: handleSubmit(addPhase), loading: loading },
                            ' ',
                            t('save'))))))));
}


/***/ }),

/***/ "./src/containers/admin-dashBoard/DeletePhaseModal.tsx":
/*!*************************************************************!*\
  !*** ./src/containers/admin-dashBoard/DeletePhaseModal.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeletePhase: () => (/* binding */ DeletePhase),
/* harmony export */   "default": () => (/* binding */ DeletePhaseModal)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");





const DeletePhase = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql) `
    mutation DeletePhase($deletePhaseId: ID!, $orgToken: String) {
    deletePhase(id: $deletePhaseId, orgToken: $orgToken) {
      id
    }
  }
`;
function DeletePhaseModal({ deletePhaseModal, currentPhase, removeModel, refetch, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const [deletePhaseMutation, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(DeletePhase, {
        onError(error) {
            /* istanbul ignore next */
            removeModel();
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message.toString());
        },
        onCompleted() {
            /* istanbul ignore next */
            refetch();
            removeModel();
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Phase deleted successfully");
        },
    });
    const orgToken = localStorage.getItem('orgToken');
    async function deletePhase() {
        const data = {};
        data.deletePhaseId = currentPhase?.id;
        orgToken && (data.orgToken = orgToken);
        await deletePhaseMutation({ variables: data });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${deletePhaseModal === true ? 'block' : 'hidden'}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-xl dark:text-white text-center w-11/12" }, t('Delete Phase')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-base dark:text-white text-center m-4" }, t('do you really want to remove this Phase?'))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "delete", onClick: () => removeModel() }, t('Cancel')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "danger", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "confirmDeleteBtn", onClick: () => {
                                deletePhase();
                            } }, t('Delete'))))))));
}


/***/ }),

/***/ "./src/containers/admin-dashBoard/Phases.tsx":
/*!***************************************************!*\
  !*** ./src/containers/admin-dashBoard/Phases.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getAllPhases: () => (/* binding */ getAllPhases)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/react */ "./node_modules/.pnpm/@iconify+react@3.2.2_react@18.2.0/node_modules/@iconify/react/dist/iconify.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/DataTable */ "./src/components/DataTable.tsx");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _CreatePhaseModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreatePhaseModal */ "./src/containers/admin-dashBoard/CreatePhaseModal.tsx");
/* harmony import */ var _UpdatePhaseModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UpdatePhaseModal */ "./src/containers/admin-dashBoard/UpdatePhaseModal.tsx");
/* harmony import */ var _DeletePhaseModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeletePhaseModal */ "./src/containers/admin-dashBoard/DeletePhaseModal.tsx");










const getAllPhases = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.gql) `
query Query($orgToken: String!) {
  getAllPhases(orgToken: $orgToken) {
    description
    name
    id
  }
}
`;
function ActionButtons({ getData, setCurrentPhase, setUpdatePhaseModal, setDeletePhaseModal, ...props }) {
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex relative flex-row align-middle items-center" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-testid": "updateIcon", onClick: () => {
                const phase = getData?.getAllPhases[props.row.index];
                setCurrentPhase(phase);
                setUpdatePhaseModal(true);
            } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, { icon: "el:file-edit-alt", className: "mr-2", width: "25", height: "25", cursor: "pointer", color: "#148fb6" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-testid": "deleteIcon", onClick: () => {
                const phase = getData?.getAllPhases[props.row.index];
                setCurrentPhase(phase);
                setDeletePhaseModal(true);
            } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, { icon: "mdi:close-circle-outline", width: "30", height: "30", cursor: "pointer", color: "#148fb6" }))));
}
function AdminPhases() {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    const { data: getData, loading: getLoading, refetch: getRefetch, } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useQuery)(getAllPhases, {
        variables: {
            orgToken: localStorage.getItem('orgToken'),
        },
    });
    const [createPhaseModel, setCreatePhaseModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [updatePhaseModal, setUpdatePhaseModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [deletePhaseModal, setDeletePhaseModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentPhase, setCurrentPhase] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_4__["default"])('Phase');
    const phaseListColumns = [
        { Header: t('name'), accessor: 'name' },
        { Header: t('Description'), accessor: 'description' },
        {
            Header: t('Actions'),
            accessor: '',
            Cell: (props) => ActionButtons({
                getData,
                setCurrentPhase,
                setUpdatePhaseModal,
                setDeletePhaseModal,
                ...props,
            }),
        },
    ];
    const phaseListData = getData
        ? getData.getAllPhases.map(({ name, description, }) => ({
            name,
            description,
        }))
        : [{}];
    const removeModel = () => {
        const newState = !createPhaseModel;
        setCreatePhaseModel(newState);
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CreatePhaseModal__WEBPACK_IMPORTED_MODULE_5__["default"], { createPhaseModel: createPhaseModel, removeModel: removeModel, refetch: getRefetch }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UpdatePhaseModal__WEBPACK_IMPORTED_MODULE_6__["default"], { data: getData, UpdatePhaseModal: updatePhaseModal, currentPhase: currentPhase, removeModel: () => {
                setUpdatePhaseModal(false);
            }, refetch: getRefetch }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_DeletePhaseModal__WEBPACK_IMPORTED_MODULE_7__["default"], { deletePhaseModal: deletePhaseModal, currentPhase: currentPhase, removeModel: () => {
                setDeletePhaseModal(false);
            }, refetch: getRefetch }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg min-h-screen overflow-y-auto overflow-x-hidden" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex items-right px-7 lg:px-60 pt-24 pb-8" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "space-x-8 lg:ml-10" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "primary", size: "lg", onClick: removeModel, "data-testid": "removeModel" },
                        ' ',
                        t('Phase'),
                        " ",
                        '  ',
                        "+"))),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "px-3 md:px-8" }, !getLoading && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_DataTable__WEBPACK_IMPORTED_MODULE_3__["default"], { data: phaseListData, columns: phaseListColumns, title: "Phase list" }))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminPhases);


/***/ }),

/***/ "./src/containers/admin-dashBoard/UpdatePhaseModal.tsx":
/*!*************************************************************!*\
  !*** ./src/containers/admin-dashBoard/UpdatePhaseModal.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdatePhase: () => (/* binding */ UpdatePhase),
/* harmony export */   "default": () => (/* binding */ UpdatePhaseModal)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");






const UpdatePhase = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql) `
mutation UpdatePhase(
    $updatePhaseId: ID!, 
    $orgToken: String, 
    $name: String, 
    $description: String
    ) {
    updatePhase(
        id: $updatePhaseId, 
        orgToken: $orgToken, 
        name: $name, 
        description: $description
    ) {
      id
    }
  }
`;
function UpdatePhaseModal({ data, UpdatePhaseModal, currentPhase, removeModel, refetch, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { handleSubmit, formState: { errors }, reset, control, register, setValue, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();
    /* istanbul ignore next */
    const [updatePhaseMutation, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation)(UpdatePhase, {
        onError(error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message.toString());
        },
        onCompleted() {
            refetch();
            removeModel();
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Phase Updated successful");
        },
    });
    const orgToken = localStorage.getItem('orgToken');
    /* istanbul ignore next */
    const managers = data?.getAllUsers?.filter((user) => user.role === 'manager');
    /* istanbul ignore next */
    async function updatePhase(data) {
        /* istanbul ignore next */
        const newData = { ...data };
        /* istanbul ignore next */
        newData.managerEmail && (newData.managerEmail = newData.managerEmail.value);
        /* istanbul ignore next */
        Object.keys(newData).forEach((field) => {
            if (!newData[field] || newData[field] === '') {
                delete newData[field];
            }
        });
        /* istanbul ignore next */
        newData.updatePhaseId = currentPhase?.id;
        /* istanbul ignore next */
        orgToken && (newData.orgToken = orgToken);
        /* istanbul ignore next */
        await updatePhaseMutation({ variables: newData });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setValue('name', currentPhase?.name);
        setValue('description', currentPhase?.description);
    }, [currentPhase, UpdatePhaseModal]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${UpdatePhaseModal === true ? 'block' : 'hidden'}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12 uppercase" }, t('Update Phase')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", className: "border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs py-2 w-full", placeholder: t('name'), ...register('name') })),
                        errors?.name && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.name?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", className: "border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full", placeholder: t('Description'), ...register('description', {
                                    required: `${t('The Description is required')}`,
                                }) })),
                        errors?.description && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.description?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "remove", 
                            /* istanbul ignore next */
                            onClick: () => {
                                /* istanbul ignore next */
                                removeModel();
                                reset();
                            }, disabled: loading },
                            ' ',
                            t('cancel')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "primary", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans p-0", onClick: handleSubmit(updatePhase), loading: loading, "data-testid": "confirmUpdateBtn" },
                            ' ',
                            t('save'))))))));
}


/***/ })

}]);
//# sourceMappingURL=src_containers_admin-dashBoard_Phases_tsx.js.map