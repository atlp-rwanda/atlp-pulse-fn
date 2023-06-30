"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_containers_admin-dashBoard_Sessions_tsx"],{

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

/***/ "./src/containers/admin-dashBoard/Sessions.tsx":
/*!*****************************************************!*\
  !*** ./src/containers/admin-dashBoard/Sessions.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/react */ "./node_modules/.pnpm/@iconify+react@3.2.2_react@18.2.0/node_modules/@iconify/react/dist/iconify.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/DataTable */ "./src/components/DataTable.tsx");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Sidebar */ "./src/components/Sidebar.tsx");
/* harmony import */ var _dummyData_session_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dummyData/session.json */ "./src/dummyData/session.json");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/Buttons */ "./src/components/Buttons.tsx");
/* eslint-disable */








const AdminSission = () => {
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_5__["default"])('Sessions');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const [deleteSessionModel, setDeleteSessionModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [updateTraineeModel, setUpdateTraineeModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [addSessionModel, setAddSessionModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const removeModel = () => {
        let newState = !addSessionModel;
        setAddSessionModel(newState);
    };
    const removeDeleteModel = () => {
        let newState = !deleteSessionModel;
        setDeleteSessionModel(newState);
    };
    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClick = () => setNav(!nav);
    const data = _dummyData_session_json__WEBPACK_IMPORTED_MODULE_4__;
    const columns = [
        { Header: 'Session', accessor: 'session' },
        { Header: 'Description', accessor: 'desc' },
        { Header: 'Platform', accessor: 'place' },
        { Header: 'Duration', accessor: 'duration' },
        { Header: 'Organizer', accessor: 'organizer' },
        {
            Header: 'Action',
            accessor: '',
            Cell: () => react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, { icon: "entypo:dots-three-vertical", color: "#148fb6" }),
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: `h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${addSessionModel === true ? 'block' : 'hidden'}` },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", { className: "font-bold text-sm text-gray-700 text-center w-11/12 uppercase" }, t('AddSession')),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", { className: " py-3 px-8" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { type: "text", name: "name", className: "border border-primary rounded outline-none px-5 font-sans dark:bg-dark-frame-bg dark:text-white text-xs py-2 w-full", placeholder: t('SessionName') }))),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { type: "text", name: "name", className: " border border-primary py-2 rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs w-full", placeholder: t('Description') }))),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { type: "text", name: "name", className: "border border-primary py-2 rounded dark:bg-dark-frame-bg dark:text-white outline-none px-5 font-sans text-xs w-full", placeholder: t('Platform') }))),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { type: "time", name: "name", className: "border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full", placeholder: t('Duration') }))),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { type: "text", name: "name", className: " border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full", placeholder: t('Organizer') }))),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "w-full flex justify-between" },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "remove", onClick: () => removeModel() },
                                ' ',
                                t('Cancel'),
                                ' '),
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: "primary", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans" },
                                ' ',
                                t('Save'),
                                ' ')))))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: `min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${deleteSessionModel === true ? 'block' : 'hidden'}` },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", { className: "font-bold text-sm text-gray-700 dark:text-white text-center w-11/12" }, t('DeleteSession')),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", { className: " py-3 px-8" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", { className: "text-base dark:text-white text-center m-4" }, t('reallydeleteSession'))),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "w-full flex justify-between" },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "delete", onClick: () => removeDeleteModel() },
                                ' ',
                                t('Cancel'),
                                ' '),
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: "danger", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans" },
                                ' ',
                                t('Delete'),
                                ' ')))))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: `min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${updateTraineeModel === true ? 'block' : 'hidden'}` },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", { className: "font-bold text-sm text-gray-700 dark:text-white text-center w-11/12" }, t('UpdateSession')),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", { className: " py-3 px-8" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { type: "text", name: "name", defaultValue: t('demo'), className: "border border-primary rounded outline-none dark:bg-dark-frame-bg dark:text-white px-5 font-sans text-xs py-2 w-full" }))),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { type: "text", name: "desc", defaultValue: t('Jointime'), className: " border border-primary py-2 rounded dark:bg-dark-frame-bg dark:text-white outline-none px-5 font-sans text-xs w-full" }))),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { type: "text", defaultValue: t('Zoom'), name: "place", className: "border border-primary py-2 rounded dark:bg-dark-frame-bg dark:text-white outline-none px-5 font-sans text-xs w-full" }))),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { type: "text", name: "duration", defaultValue: t('11am-12am'), className: "border border-primary py-2 rounded outline-none dark:bg-dark-frame-bg dark:text-white px-5 font-sans text-xs w-full" }))),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { type: "text", name: "organizer", defaultValue: 'John deo', className: "border border-primary py-2 rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs w-full" }))),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "w-full flex justify-between" },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", onClick: () => removeModel() },
                                ' ',
                                t('Cancel'),
                                ' '),
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: "primary", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans" },
                                ' ',
                                t('Save'),
                                ' ')))))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col h-screen" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-row" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], { toggle: handleClick, style: "hidden lg:flex" }),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "w-full" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg  min-h-screen overflow-y-auto overflow-x-hidden" },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex items-left px-10 lg:px-60 pt-24 pb-8" },
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "space-x-8 lg:ml-7" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: "primary", size: "lg", "data-testid": "registerModel", onClick: removeModel },
                                        ' ',
                                        t('register'),
                                        " +",
                                        ' '))),
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "px-3 md:px-8" },
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_DataTable__WEBPACK_IMPORTED_MODULE_2__["default"], { data: data, columns: columns, title: "Developers list" })))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminSission);


/***/ }),

/***/ "./src/dummyData/session.json":
/*!************************************!*\
  !*** ./src/dummyData/session.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"1","session":"Demo","desc":"Join on time","place":"Zoom","duration":"11am - 12am","organizer":"John deo"},{"id":"2","session":"Stand up","desc":"Join on time","place":"Zoom","duration":"11am - 12am","organizer":"John deo"},{"id":"3","session":"E-level up","desc":"Join on time","place":"Zoom","duration":"11am - 12am","organizer":"John deo"},{"id":"4","session":"Code review","desc":"Join on time","place":"Zoom","duration":"11am - 12am","organizer":"John deo"},{"id":"5","session":"Professional skills","desc":"Join on time","place":"Zoom","duration":"11am - 12am","organizer":"John deo"}]');

/***/ })

}]);
//# sourceMappingURL=src_containers_admin-dashBoard_Sessions_tsx.js.map