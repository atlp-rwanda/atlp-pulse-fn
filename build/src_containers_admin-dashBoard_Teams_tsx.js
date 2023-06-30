"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_containers_admin-dashBoard_Teams_tsx"],{

/***/ "./src/components/ButtonLoading.tsx":
/*!******************************************!*\
  !*** ./src/components/ButtonLoading.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* eslint-disable */


const ButtonLoading = ({ style }) => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `flex btn w-fit py-1 px-3 bg-primary font-bold ${style}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "loader mr-1" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "ml-1 text-white font-bold", disabled: true }, t('Processing...'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonLoading);


/***/ }),

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

/***/ "./src/components/ModalDataTable.tsx":
/*!*******************************************!*\
  !*** ./src/components/ModalDataTable.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-table */ "./node_modules/.pnpm/react-table@7.8.0_react@18.2.0/node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _DataPagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataPagination */ "./src/components/DataPagination.tsx");
// @ts-nocheck





function DataTable({ data, columns, title, removeModel }) {
    // const sortedData = React.useMemo(() => [...data], []);
    const sortedColumns = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => [...columns], [columns]);
    const sortedData = data;
    // const sortedColumns = columns;
    const TableInstance = (0,react_table__WEBPACK_IMPORTED_MODULE_1__.useTable)({ data: sortedData, columns: sortedColumns, initialState: { pageSize: 3 } }, react_table__WEBPACK_IMPORTED_MODULE_1__.useGlobalFilter, react_table__WEBPACK_IMPORTED_MODULE_1__.useSortBy, react_table__WEBPACK_IMPORTED_MODULE_1__.usePagination);
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { getTableProps, setGlobalFilter, getTableBodyProps, page, nextPage, previousPage, canPreviousPage, canNextPage, gotoPage, pageCount, setPageSize, pageOptions, headerGroups, prepareRow, state, } = TableInstance;
    // @ts-ignore
    const { globalFilter, pageIndex, pageSize } = state;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-[100%] mx-auto lg:w-[60%]" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " flex items-center justify-between pb-6" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-gray-800 dark:text-white font-semibold text-xl" }, t(title)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { defaultValue: globalFilter || '', placeholder: "Filter", className: "border-gray-300 dark:bg-dark-tertiary dark:text-white border py-2 mt-4 rounded outline-none px-5 font-sans text-xs w-52 md:w-96", onChange: (e) => setGlobalFilter(e.target.value) })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { marginTop: '-1.2cm', color: 'red' } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "", size: "sxm", style: "", "data-testid": "delete", onClick: () => removeModel() }, "x"))),
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
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DataPagination__WEBPACK_IMPORTED_MODULE_3__["default"], { pageOptions: pageOptions, canNextPage: canNextPage, gotoPage: gotoPage, columnLength: columns.length, canPreviousPage: canPreviousPage, pageSize: pageSize, setPageSize: setPageSize, previousPage: previousPage, nextPage: nextPage, pageCount: pageCount, pageIndex: pageIndex }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataTable);


/***/ }),

/***/ "./src/containers/admin-dashBoard/CreateTeamModal.tsx":
/*!************************************************************!*\
  !*** ./src/containers/admin-dashBoard/CreateTeamModal.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddTeam: () => (/* binding */ AddTeam),
/* harmony export */   "default": () => (/* binding */ CreateTeamModal)
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







const AddTeam = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql) `
mutation Mutation($name: String!, $cohortName: String!, $orgToken: String!) {
    addTeam(name: $name, cohortName: $cohortName, orgToken: $orgToken) {
      name
      cohort {
        name
      }
    }
  }
`;
function CreateTeamModal({ data, createTeamModel, removeModel, refetch, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { handleSubmit, watch, formState: { errors }, reset, setValue, register, control, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();
    /* istanbul ignore next */
    const [addTeamMutation, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(AddTeam, {
        onError(error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message.toString());
        },
        onCompleted() {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Team successfully added");
            refetch();
            removeModel();
        },
    });
    /* istanbul ignore next */
    /* istanbul ignore next */
    async function addTeam(data) {
        const newData = { ...data };
        newData.cohortName &&
            (newData.cohortName = newData.cohortName.value);
        Object.keys(newData).forEach((field) => {
            if (!newData[field] || newData[field] === '') {
                delete newData[field];
            }
        });
        await addTeamMutation({
            variables: { orgToken: localStorage.getItem('orgToken'), ...newData },
            onCompleted() {
                reset();
                setValue('coordinatorEmail', { value: undefined, label: undefined });
                setValue('cohortName', { value: undefined, label: undefined });
            },
        });
    }
    /* istanbul ignore next */
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${createTeamModel === true ? 'block' : 'hidden'}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12 uppercase" }, t('Add A Team')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", className: "border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs py-2 w-full", placeholder: t('Team Name'), ...register('name', {
                                    required: `${t('The Team name is required')}`,
                                }) })),
                        errors?.name && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.name?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ControlledSelect__WEBPACK_IMPORTED_MODULE_3__["default"], { placeholder: t('Choose a Cohort'), register: {
                                control,
                                name: 'cohortName',
                                rules: { required: `${t('The Cohort Name is required')}` },
                            }, options: data?.getAllCohorts?.map(({ name }) => ({
                                value: name,
                                label: name,
                            })) }),
                        errors?.programName && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.programName?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "remove", onClick: () => {
                                removeModel();
                                reset();
                            }, disabled: loading },
                            ' ',
                            t('Cancel')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "primary", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans p-0", onClick: handleSubmit(addTeam), loading: loading },
                            ' ',
                            t('Save'))))))));
}


/***/ }),

/***/ "./src/containers/admin-dashBoard/DeleteTeamModal.tsx":
/*!************************************************************!*\
  !*** ./src/containers/admin-dashBoard/DeleteTeamModal.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteTeam: () => (/* binding */ DeleteTeam),
/* harmony export */   "default": () => (/* binding */ DeleteTeamModal)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");





const DeleteTeam = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql) `
  mutation Mutation($deleteTeamId: ID!) {
    deleteTeam(id: $deleteTeamId)
  }
`;
function DeleteTeamModal({ deleteTeamModal, currentTeam, removeModel, refetch, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const [deleteTeamMutation, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(DeleteTeam, {
        onError(error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message.toString());
        },
        onCompleted() {
            refetch();
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(t('Team deleted successfully'));
            removeModel();
        },
    });
    const orgToken = localStorage.getItem('orgToken');
    async function deleteTeam() {
        const data = {};
        data.deleteTeamId = currentTeam?.id;
        orgToken && (data.orgToken = orgToken);
        await deleteTeamMutation({ variables: data });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${deleteTeamModal === true ? 'block' : 'hidden'}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-xl dark:text-white text-center w-11/12" }, t('Delete Team')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-base dark:text-white text-center m-4" }, t('Delete Team Permanently'))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "delete", onClick: () => removeModel() }, t('Cancel')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "danger", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "confirmDeleteBtn", onClick: () => {
                                deleteTeam();
                            } }, t('Delete'))))))));
}


/***/ }),

/***/ "./src/containers/admin-dashBoard/TeamTraineeModal.tsx":
/*!*************************************************************!*\
  !*** ./src/containers/admin-dashBoard/TeamTraineeModal.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TeamTraineeModal)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _components_ModalDataTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ModalDataTable */ "./src/components/ModalDataTable.tsx");
/* harmony import */ var _Mutations_manageStudentMutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Mutations/manageStudentMutations */ "./src/Mutations/manageStudentMutations.tsx");
/* harmony import */ var _components_ButtonLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ButtonLoading */ "./src/components/ButtonLoading.tsx");







const organizationToken = localStorage.getItem('orgToken');
function TeamTraineeModal({ teamTraineeModal, currentTeam, removeModel, refetch, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const [traineeData, setTraineeData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const columns = [
        { Header: t('name'), accessor: 'name' },
        { Header: t('email'), accessor: 'email' },
        { Header: t('rating'), accessor: 'rating' },
        { Header: t('cohort'), accessor: 'cohort' },
        { Header: t('program'), accessor: 'program' },
    ];
    const datum = [];
    const [getTeamTraineesQuery, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useLazyQuery)(_Mutations_manageStudentMutations__WEBPACK_IMPORTED_MODULE_3__.GET_TEAM_TRAINEE_QUERY, {
        variables: {
            orgToken: organizationToken,
            team: currentTeam ? currentTeam.name : '',
        },
    });
    if (traineeData && traineeData.length > 0) {
        traineeData?.map((data, index) => {
            datum[index] = {};
            datum[index].name = data.profile.name;
            datum[index].email = data.email;
            datum[index].rating = '2';
            datum[index].cohort = data.team?.cohort.name;
            datum[index].program = data.team?.cohort.program.name;
            return datum;
        });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        getTeamTraineesQuery({
            fetchPolicy: 'network-only',
            onCompleted: (data) => {
                setTraineeData(data.getTeamTrainees);
            },
            onError: (error) => {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message);
            },
        });
    }, [currentTeam]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${teamTraineeModal === true ? 'block' : 'hidden'}` }, !loading ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ModalDataTable__WEBPACK_IMPORTED_MODULE_2__["default"], { data: traineeData?.length > 0 ? datum : [{}], columns: columns, title: t('Trainees list'), removeModel: removeModel })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ButtonLoading__WEBPACK_IMPORTED_MODULE_4__["default"], { style: "rounded-full inline-block" }))));
}


/***/ }),

/***/ "./src/containers/admin-dashBoard/Teams.tsx":
/*!**************************************************!*\
  !*** ./src/containers/admin-dashBoard/Teams.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getAllTeam: () => (/* binding */ getAllTeam)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/react */ "./node_modules/.pnpm/@iconify+react@3.2.2_react@18.2.0/node_modules/@iconify/react/dist/iconify.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/DataTable */ "./src/components/DataTable.tsx");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _DeleteTeamModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeleteTeamModal */ "./src/containers/admin-dashBoard/DeleteTeamModal.tsx");
/* harmony import */ var _UpdateTeamModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UpdateTeamModal */ "./src/containers/admin-dashBoard/UpdateTeamModal.tsx");
/* harmony import */ var _TeamTraineeModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TeamTraineeModal */ "./src/containers/admin-dashBoard/TeamTraineeModal.tsx");
/* harmony import */ var _CreateTeamModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CreateTeamModal */ "./src/containers/admin-dashBoard/CreateTeamModal.tsx");











const getAllTeam = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.gql) `
  query GetAllTeams($orgToken: String!) {
    getAllTeams(orgToken: $orgToken) {
      id
      name
      cohort {
        coordinator {
          email
        }
        phase {
          name
        }
        program {
          name
        }
        name
      }
    }

    getAllCohorts(orgToken: $orgToken) {
      id
      name
      phase {
        name
      }
      coordinator {
        email
      }
      program {
        name
      }
      startDate
      endDate
    }
  }
`;
function ActionButtons({ getData, setCurrentTeam, setUpdateTeamModal, setDeleteTeamModal, setTeamTrainneModal, ...props }) {
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex relative flex-row align-middle justify-center items-center" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-testid": "traineeIcon", onClick: () => {
                setCurrentTeam(getData?.getAllTeams[props.row.index]);
                setTeamTrainneModal(true);
            } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, { icon: "akar-icons:people-group", className: "mr-2", width: "25", height: "25", cursor: "pointer", color: "#148fb6" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-testid": "updateIcon", onClick: () => {
                setCurrentTeam(getData?.getAllTeams[props.row.index]);
                setUpdateTeamModal(true);
            } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, { icon: "el:file-edit-alt", className: "mr-2", width: "25", height: "25", cursor: "pointer", color: "#148fb6" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-testid": "deleteIcon", onClick: () => {
                setCurrentTeam(getData?.getAllTeams[props.row.index]);
                setDeleteTeamModal(true);
            } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, { icon: "mdi:close-circle-outline", width: "30", height: "30", cursor: "pointer", color: "#148fb6" }))));
}
function AdminTeams() {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
    const { data: getData, loading: getLoading, error: getError, refetch: getRefetch, } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useQuery)(getAllTeam, {
        variables: {
            orgToken: localStorage.getItem('orgToken'),
        },
    });
    const [createTeamModal, setCreateTeamModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [updateTeamModal, setUpdateTeamModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [teamTrainneModal, setTeamTrainneModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentTeam, setCurrentTeam] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const [deleteTeamModal, setDeleteTeamModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_4__["default"])('Teams');
    const removeDeleteModel = () => {
        const newState = !deleteTeamModal;
        setDeleteTeamModal(newState);
    };
    const removeModel = () => {
        setCreateTeamModal(false);
    };
    const teamColumns = [
        { Header: t('name'), accessor: 'name' },
        { Header: t('Phase'), accessor: 'phase' },
        { Header: t('Cohort'), accessor: 'cohortName' },
        { Header: t('Program'), accessor: 'programName' },
        { Header: t('Coordinator'), accessor: 'coordinator' },
        {
            Header: t('action'),
            accessor: '',
            Cell: (props) => ActionButtons({
                getData,
                setCurrentTeam,
                setUpdateTeamModal,
                setDeleteTeamModal,
                setTeamTrainneModal,
                ...props,
            }),
        },
    ];
    const teamData = getData?.getAllTeams.map(({ name, cohort }) => ({
        name,
        cohortName: cohort?.name,
        coordinator: cohort?.coordinator?.email
            ? cohort?.coordinator?.email
            : 'Not Assigned',
        phase: cohort?.phase.name,
        programName: cohort?.program?.name,
    }));
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CreateTeamModal__WEBPACK_IMPORTED_MODULE_8__["default"], { data: getData, createTeamModel: createTeamModal, removeModel: removeModel, refetch: getRefetch }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UpdateTeamModal__WEBPACK_IMPORTED_MODULE_6__["default"], { data: getData, updateTeamModal: updateTeamModal, currentTeam: currentTeam, refetch: getRefetch, removeModel: () => {
                setUpdateTeamModal(false);
            } }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_TeamTraineeModal__WEBPACK_IMPORTED_MODULE_7__["default"], { teamTraineeModal: teamTrainneModal, currentTeam: currentTeam, refetch: getRefetch, removeModel: () => {
                setTeamTrainneModal(false);
            } }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_DeleteTeamModal__WEBPACK_IMPORTED_MODULE_5__["default"], { deleteTeamModal: deleteTeamModal, currentTeam: currentTeam, removeModel: removeDeleteModel, refetch: getRefetch }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg min-h-screen overflow-y-auto overflow-x-hidden" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex items-left px-7 lg:px-60 pt-24 pb-8" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "space-x-8 lg:ml-10" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "primary", size: "lg", onClick: () => setCreateTeamModal(true), "data-testid": "removeModel" },
                        ' ',
                        t('Team'),
                        " +"))),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "px-3 m d:px-8 w-screen overflow-x-auto" }, !getLoading && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_DataTable__WEBPACK_IMPORTED_MODULE_3__["default"], { columns: teamColumns, data: teamData ? teamData : [{}], title: t('Teams list') }))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminTeams);


/***/ }),

/***/ "./src/containers/admin-dashBoard/UpdateTeamModal.tsx":
/*!************************************************************!*\
  !*** ./src/containers/admin-dashBoard/UpdateTeamModal.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateTeam: () => (/* binding */ UpdateTeam),
/* harmony export */   "default": () => (/* binding */ UpdateTeamModal)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");






const UpdateTeam = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql) `
  mutation UpdateTeam($updateTeamId: ID!, $name: String, $orgToken: String) {
    updateTeam(id: $updateTeamId, name: $name, orgToken: $orgToken) {
      name
    }
  }
`;
function UpdateTeamModal({ data, updateTeamModal, currentTeam, removeModel, refetch, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { handleSubmit, watch, formState: { errors }, reset, register, control, setValue, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();
    const [updateTeamMutation, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation)(UpdateTeam, {
        onError(error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message.toString());
        },
        onCompleted() {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(t('Team updated successfully'));
            refetch();
            removeModel();
        },
    });
    const orgToken = localStorage.getItem('orgToken');
    async function updateTeam(data) {
        const newData = { ...data };
        newData.coordinatorEmail &&
            (newData.coordinatorEmail = newData.coordinatorEmail.value);
        newData.programName && (newData.programName = newData.programName.value);
        Object.keys(newData).forEach((field) => {
            if (!newData[field] || newData[field] === '') {
                delete newData[field];
            }
        });
        newData.updateTeamId = currentTeam?.id;
        orgToken && (newData.orgToken = orgToken);
        await updateTeamMutation({ variables: newData });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setValue('name', currentTeam?.name);
    }, [currentTeam, updateTeamModal]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${updateTeamModal === true ? 'block' : 'hidden'}`, "data-testid": "updateTeamModal" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12 uppercase" }, t('Update Team')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", className: "border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs py-2 w-full", placeholder: t('name'), ...register('name') })),
                        errors?.name && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.name?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "remove", onClick: () => {
                                removeModel();
                                reset();
                            }, disabled: loading },
                            ' ',
                            t('Cancel')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "primary", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans p-0", onClick: handleSubmit(updateTeam), loading: loading, "data-testid": "confirmUpdateBtn" },
                            ' ',
                            t('Save'))))))));
}


/***/ })

}]);
//# sourceMappingURL=src_containers_admin-dashBoard_Teams_tsx.js.map