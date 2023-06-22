"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_containers_admin-dashBoard_Programs_tsx"],{

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

/***/ "./src/containers/admin-dashBoard/CreateProgramModal.tsx":
/*!***************************************************************!*\
  !*** ./src/containers/admin-dashBoard/CreateProgramModal.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddProgram: () => (/* binding */ AddProgram),
/* harmony export */   "default": () => (/* binding */ CreateProgramModal)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _components_ControlledSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ControlledSelect */ "./src/components/ControlledSelect.tsx");







const AddProgram = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql) `
  mutation AddProgram(
    $name: String!
    $description: String!
    $managerEmail: String!
    $orgToken: String!
  ) {
    addProgram(
      name: $name
      description: $description
      managerEmail: $managerEmail
      orgToken: $orgToken
    ) {
      id
    }
  }
`;
function CreateProgramModal({ data, createProgramModel, removeModel, refetch, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { handleSubmit, formState: { errors }, reset, setValue, register, control, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();
    const [addProgramMutation, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(AddProgram, {
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
    const managers = data?.getAllUsers?.filter(
    /* istanbul ignore next */
    (user) => user.role === 'manager');
    /* istanbul ignore next */
    async function addProgram(data) {
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
        await addProgramMutation({
            variables: { orgToken: localStorage.getItem('orgToken'), ...newData },
            onCompleted() {
                reset();
                setValue('managerEmail', { value: undefined, label: undefined });
            },
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${createProgramModel === true ? 'block' : 'hidden'}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12 uppercase" }, t('Add Program')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", className: "border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs py-2 w-full", placeholder: t('name'), ...register('name', {
                                    required: `${t('The Program name is required')}`,
                                }) })),
                        errors?.name && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.name?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ControlledSelect__WEBPACK_IMPORTED_MODULE_3__["default"], { placeholder: t('Manager Email'), register: {
                                    control,
                                    name: 'managerEmail',
                                    rules: {
                                        required: `${t('The Manager email is required')}`,
                                    },
                                }, options: managers?.map(
                                /* istanbul ignore next */
                                ({ email }) => ({
                                    value: email,
                                    label: email,
                                })) })),
                        errors?.managerEmail && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.managerEmail?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", className: "border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full", placeholder: t('Description'), ...register('description', {
                                    required: `${t('The Description is required')}`,
                                }) })),
                        errors?.description && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.description?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "info", size: "sm", 
                            /* istanbul ignore next */
                            style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "remove", onClick: 
                            /* istanbul ignore next */
                            () => {
                                removeModel();
                                reset();
                            }, disabled: loading },
                            ' ',
                            t('cancel')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "primary", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans p-0", 
                            /* istanbul ignore next */
                            onClick: handleSubmit(addProgram), loading: loading },
                            ' ',
                            t('save'))))))));
}


/***/ }),

/***/ "./src/containers/admin-dashBoard/DeleteProgramModal.tsx":
/*!***************************************************************!*\
  !*** ./src/containers/admin-dashBoard/DeleteProgramModal.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteProgram: () => (/* binding */ DeleteProgram),
/* harmony export */   "default": () => (/* binding */ DeleteProgramModal)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");





const DeleteProgram = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql) `
  mutation DeleteProgram($deleteProgramId: ID!, $orgToken: String) {
    deleteProgram(id: $deleteProgramId, orgToken: $orgToken) {
      id
    }
  }
`;
function DeleteProgramModal({ deleteProgramModal, currentProgram, removeModel, refetch, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const [deleteProgramMutation, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(DeleteProgram, {
        onError(error) {
            /* istanbul ignore next */
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message.toString());
        },
        onCompleted() {
            /* istanbul ignore next */
            refetch();
            removeModel();
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Program deleted");
        },
    });
    const orgToken = localStorage.getItem('orgToken');
    async function deleteProgram() {
        const data = {};
        data.deleteProgramId = currentProgram?.id;
        orgToken && (data.orgToken = orgToken);
        await deleteProgramMutation({ variables: data });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${deleteProgramModal === true ? 'block' : 'hidden'}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-xl dark:text-white text-center w-11/12" }, t('Delete Program')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-base dark:text-white text-center m-4" }, t('reallyRemoveProgram'))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "delete", onClick: () => removeModel() }, t('Cancel')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "danger", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "confirmDeleteBtn", onClick: () => {
                                deleteProgram();
                            } }, t('Delete'))))))));
}


/***/ }),

/***/ "./src/containers/admin-dashBoard/Programs.tsx":
/*!*****************************************************!*\
  !*** ./src/containers/admin-dashBoard/Programs.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getAllPrograms: () => (/* binding */ getAllPrograms)
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
/* harmony import */ var _CreateProgramModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateProgramModal */ "./src/containers/admin-dashBoard/CreateProgramModal.tsx");
/* harmony import */ var _DeleteProgramModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeleteProgramModal */ "./src/containers/admin-dashBoard/DeleteProgramModal.tsx");
/* harmony import */ var _UpdateProgramModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UpdateProgramModal */ "./src/containers/admin-dashBoard/UpdateProgramModal.tsx");










const getAllPrograms = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.gql) `
  query GetAllPrograms($orgToken: String) {
    getAllPrograms(orgToken: $orgToken) {
      id
      name
      cohorts {
        name
      }
      manager {
        email
      }
      organization {
        name
      }
      description
    }
    getAllUsers(orgToken: $orgToken) {
      id
      email
      role
    }
  }
`;
function ActionButtons({ getData, setCurrentProgram, setUpdateProgramModal, setDeleteProgramModal, ...props }) {
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex relative flex-row align-middle justify-center items-center" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-testid": "updateIcon", onClick: () => {
                const program = getData?.getAllPrograms[props.row.index];
                setCurrentProgram(program);
                setUpdateProgramModal(true);
            } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, { icon: "el:file-edit-alt", className: "mr-2", width: "25", height: "25", cursor: "pointer", color: "#148fb6" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-testid": "deleteIcon", 
            /* istanbul ignore next */
            onClick: () => {
                /* istanbul ignore next */
                const program = getData?.getAllPrograms[props.row.index];
                setCurrentProgram(program);
                setDeleteProgramModal(true);
            } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, { icon: "mdi:close-circle-outline", width: "30", height: "30", cursor: "pointer", color: "#148fb6" }))));
}
function AdminPrograms() {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    const { data: getData, loading: getLoading, refetch: getRefetch, } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useQuery)(getAllPrograms, {
        variables: {
            orgToken: localStorage.getItem('orgToken'),
        },
    });
    const [createProgramModel, setCreateProgramModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [updateProgramModal, setUpdateProgramModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [deleteProgramModal, setDeleteProgramModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentProgram, setCurrentProgram] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_4__["default"])('Programs');
    const programListColumns = [
        { Header: t('name'), accessor: 'name' },
        { Header: t('number of cohorts'), accessor: 'numberOfCohorts' },
        { Header: t('Manager'), accessor: 'manager' },
        { Header: t('Organization'), accessor: 'organization' },
        { Header: t('Description'), accessor: 'description' },
        {
            Header: t('Actions'),
            accessor: '',
            Cell: (props) => ActionButtons({
                getData,
                setCurrentProgram,
                setUpdateProgramModal,
                setDeleteProgramModal,
                ...props,
            }),
        },
    ];
    /* istanbul ignore next */
    const programListData = getData
        ? getData.getAllPrograms.map(({ name, cohorts, manager, organization: { name: orgName }, description, }) => ({
            name,
            numberOfCohorts: cohorts.length,
            manager: manager ? manager.email : 'Not Assigned',
            organization: orgName,
            description,
        }))
        : [{}];
    /* istanbul ignore next */
    const removeModel = () => {
        const newState = !createProgramModel;
        setCreateProgramModel(newState);
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CreateProgramModal__WEBPACK_IMPORTED_MODULE_5__["default"], { data: getData, createProgramModel: createProgramModel, removeModel: removeModel, refetch: getRefetch }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UpdateProgramModal__WEBPACK_IMPORTED_MODULE_7__["default"], { data: getData, updateProgramModal: updateProgramModal, 
            /* istanbul ignore next */
            currentProgram: currentProgram, removeModel: () => {
                setUpdateProgramModal(false);
            }, refetch: getRefetch }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_DeleteProgramModal__WEBPACK_IMPORTED_MODULE_6__["default"], { deleteProgramModal: deleteProgramModal, 
            /* istanbul ignore next */
            currentProgram: currentProgram, removeModel: () => {
                setDeleteProgramModal(false);
            }, refetch: getRefetch }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg min-h-screen overflow-y-auto overflow-x-hidden" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex items-left px-7 lg:px-60 pt-24 pb-8" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "space-x-8 lg:ml-10" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "primary", size: "lg", onClick: removeModel, "data-testid": "removeModel" },
                        ' ',
                        t('Program'),
                        " ",
                        '  ',
                        "+"))),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "px-3 md:px-8" }, !getLoading && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_DataTable__WEBPACK_IMPORTED_MODULE_3__["default"], { data: programListData, columns: programListColumns, title: "Program list" }))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminPrograms);


/***/ }),

/***/ "./src/containers/admin-dashBoard/UpdateProgramModal.tsx":
/*!***************************************************************!*\
  !*** ./src/containers/admin-dashBoard/UpdateProgramModal.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateProgram: () => (/* binding */ UpdateProgram),
/* harmony export */   "default": () => (/* binding */ UpdateProgramModal)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _components_ControlledSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ControlledSelect */ "./src/components/ControlledSelect.tsx");







const UpdateProgram = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql) `
  mutation UpdateProgram(
    $updateProgramId: ID!
    $orgToken: String
    $name: String
    $description: String
    $managerEmail: String!
  ) {
    updateProgram(
      id: $updateProgramId
      name: $name
      description: $description
      orgToken: $orgToken
      managerEmail: $managerEmail
    ) {
      id
    }
  }
`;
function UpdateProgramModal({ data, updateProgramModal, currentProgram, removeModel, refetch, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { handleSubmit, formState: { errors }, reset, control, register, setValue, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();
    /* istanbul ignore next */
    const [updateProgramMutation, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(UpdateProgram, {
        onError(error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message.toString());
        },
        onCompleted() {
            refetch();
            removeModel();
        },
    });
    const orgToken = localStorage.getItem('orgToken');
    const managers = data?.getAllUsers?.filter(
    /* istanbul ignore next */
    (user) => user.role === 'manager');
    /* istanbul ignore next */
    async function updateProgram(data) {
        const newData = { ...data };
        /* istanbul ignore next */
        newData.managerEmail && (newData.managerEmail = newData.managerEmail.value);
        /* istanbul ignore next */
        Object.keys(newData).forEach((field) => {
            /* istanbul ignore if */
            if (!newData[field] || newData[field] === '') {
                delete newData[field];
            }
        });
        /* istanbul ignore next */
        newData.updateProgramId = currentProgram?.id;
        /* istanbul ignore next */
        orgToken && (newData.orgToken = orgToken);
        /* istanbul ignore next */
        await updateProgramMutation({ variables: newData });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setValue('name', currentProgram?.name);
        setValue('managerEmail', {
            value: currentProgram?.manager?.email,
            label: currentProgram?.manager?.email,
        });
        setValue('description', currentProgram?.description);
    }, [currentProgram, updateProgramModal]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${updateProgramModal === true ? 'block' : 'hidden'}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12 uppercase" }, t('Update Program')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", className: "border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs py-2 w-full", placeholder: t('name'), ...register('name') })),
                        errors?.name && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.name?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ControlledSelect__WEBPACK_IMPORTED_MODULE_3__["default"], { placeholder: t('Manager Email'), register: {
                                    control,
                                    name: 'managerEmail',
                                    rules: {
                                        required: `${t('The Manager email is required')}`,
                                    },
                                }, options: managers?.map(
                                /* istanbul ignore next */
                                ({ email }) => ({
                                    value: email,
                                    label: email,
                                })) })),
                        errors?.managerEmail && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.managerEmail?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", className: "border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full", placeholder: t('Description'), ...register('description', {
                                    required: `${t('The Description is required')}`,
                                }) })),
                        errors?.description && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.description?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "remove", onClick: 
                            /* istanbul ignore next */
                            () => {
                                removeModel();
                                reset();
                            }, disabled: loading },
                            ' ',
                            t('cancel')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "primary", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans p-0", onClick: handleSubmit(updateProgram), loading: loading, "data-testid": "confirmUpdateBtn" },
                            ' ',
                            t('save'))))))));
}


/***/ })

}]);
//# sourceMappingURL=src_containers_admin-dashBoard_Programs_tsx.js.map