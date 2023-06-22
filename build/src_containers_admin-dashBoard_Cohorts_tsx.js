"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_containers_admin-dashBoard_Cohorts_tsx"],{

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

/***/ "./src/containers/admin-dashBoard/CohortTeamsModal.tsx":
/*!*************************************************************!*\
  !*** ./src/containers/admin-dashBoard/CohortTeamsModal.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CohortTeamsModel),
/* harmony export */   getAllTeam: () => (/* binding */ getAllTeam)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _components_ModalDataTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ModalDataTable */ "./src/components/ModalDataTable.tsx");
/* harmony import */ var _components_ButtonLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ButtonLoading */ "./src/components/ButtonLoading.tsx");





const organizationToken = localStorage.getItem('orgToken');
const getAllTeam = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql) `
  query GetAllTeamInCohort($cohort: String, $orgToken: String) {
    getAllTeamInCohort(cohort: $cohort, orgToken: $orgToken) {
      name
      id
      cohort {
        name
        phase {
          name
        }
        program {
          name
        }
        coordinator {
          email
        }
      }
    }
  }
`;
function CohortTeamsModel({ cohortTeamsModel, currentCohort, removeModel, refetch, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const [traineeData, setTraineeData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const teamColumns = [
        { Header: t('name'), accessor: 'name' },
        { Header: t('Phase'), accessor: 'phase' },
        { Header: t('Cohort'), accessor: 'cohortName' },
        { Header: t('Program'), accessor: 'programName' },
        { Header: t('Coordinator'), accessor: 'coordinator' },
    ];
    const { data: getData, loading: getLoading, error: getError, refetch: getRefetch, } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(getAllTeam, {
        variables: {
            orgToken: localStorage.getItem('orgToken'),
            cohort: currentCohort?.name,
        },
    });
    const teamData = getData?.getAllTeamInCohort?.map(({ name, cohort }) => ({
        name,
        cohortName: cohort?.name,
        coordinator: cohort?.coordinator?.email,
        phase: cohort?.phase.name,
        programName: cohort?.program?.name,
    }));
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${cohortTeamsModel === true ? 'block' : 'hidden'}` }, !getLoading ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ModalDataTable__WEBPACK_IMPORTED_MODULE_1__["default"], { data: teamData ? teamData : [{}], columns: teamColumns, title: t('Teams list'), removeModel: removeModel })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ButtonLoading__WEBPACK_IMPORTED_MODULE_2__["default"], { style: "rounded-full inline-block" }))));
}


/***/ }),

/***/ "./src/containers/admin-dashBoard/CohortTraineeModal.tsx":
/*!***************************************************************!*\
  !*** ./src/containers/admin-dashBoard/CohortTraineeModal.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CohortTraineeModal)
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
function CohortTraineeModal({ cohortTraineeModal, currentCohort, removeModel, refetch, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const [traineeData, setTraineeData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const columns = [
        { Header: t('name'), accessor: 'name' },
        { Header: t('email'), accessor: 'email' },
        { Header: t('rating'), accessor: 'rating' },
        { Header: t('team'), accessor: 'team' },
        { Header: t('cohort'), accessor: 'cohort' },
        { Header: t('program'), accessor: 'program' },
    ];
    const datum = [];
    const [getCohortTraineesQuery, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useLazyQuery)(_Mutations_manageStudentMutations__WEBPACK_IMPORTED_MODULE_3__.GET_COHORT_TRAINEES_QUERY, {
        variables: {
            orgToken: organizationToken,
            cohort: currentCohort ? currentCohort.name : '',
        },
    });
    if (traineeData && traineeData.length > 0) {
        traineeData?.map((data, index) => {
            datum[index] = {};
            datum[index].name = data.profile.name;
            datum[index].email = data.email;
            datum[index].rating = '2';
            datum[index].team = data.team.name;
            datum[index].cohort = data.team.cohort.name;
            datum[index].program = data.team.cohort.program.name;
            return datum;
        });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        getCohortTraineesQuery({
            fetchPolicy: 'network-only',
            onCompleted: (data) => {
                setTraineeData(data.getCohortTrainees);
            },
            onError: (error) => {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message);
            },
        });
    }, [currentCohort]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${cohortTraineeModal === true ? 'block' : 'hidden'}` }, !loading ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ModalDataTable__WEBPACK_IMPORTED_MODULE_2__["default"], { data: traineeData?.length > 0 ? datum : [{}], columns: columns, title: t('Trainees list'), removeModel: removeModel })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ButtonLoading__WEBPACK_IMPORTED_MODULE_4__["default"], { style: "rounded-full inline-block" }))));
}


/***/ }),

/***/ "./src/containers/admin-dashBoard/Cohorts.tsx":
/*!****************************************************!*\
  !*** ./src/containers/admin-dashBoard/Cohorts.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getAllCohorts: () => (/* binding */ getAllCohorts)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/react */ "./node_modules/.pnpm/@iconify+react@3.2.2_react@18.2.0/node_modules/@iconify/react/dist/iconify.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/DataTable */ "./src/components/DataTable.tsx");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/formatDate */ "./src/utils/formatDate.tsx");
/* harmony import */ var _CreateCohortModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CreateCohortModal */ "./src/containers/admin-dashBoard/CreateCohortModal.tsx");
/* harmony import */ var _DeleteCohortModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeleteCohortModal */ "./src/containers/admin-dashBoard/DeleteCohortModal.tsx");
/* harmony import */ var _UpdateCohortModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UpdateCohortModal */ "./src/containers/admin-dashBoard/UpdateCohortModal.tsx");
/* harmony import */ var _CohortTraineeModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CohortTraineeModal */ "./src/containers/admin-dashBoard/CohortTraineeModal.tsx");
/* harmony import */ var _CohortTeamsModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CohortTeamsModal */ "./src/containers/admin-dashBoard/CohortTeamsModal.tsx");













const getAllCohorts = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.gql) `
  query GetAllCohorts($orgToken: String!) {
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
      teams
      startDate
      endDate
    }
    getAllUsers(orgToken: $orgToken) {
      id
      email
      role
    }
    getAllPrograms(orgToken: $orgToken) {
      id
      name
    }
    getAllPhases(orgToken: $orgToken) {
      id
      name
    }
  }
`;
function ActionButtons({ getData, setCurrentCohort, setUpdateCohortModal, setDeleteCohortModal, setCohortTrainneModal, ...props }) {
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex relative flex-row align-middle justify-center items-center" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-testid": "traineeIcon", onClick: 
            /* istanbul ignore next */
            () => {
                /* istanbul ignore next */
                setCurrentCohort(getData?.getAllCohorts[props.row.index]);
                /* istanbul ignore next */
                setCohortTrainneModal(true);
            } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, { icon: "akar-icons:people-group", className: "mr-2", width: "25", height: "25", cursor: "pointer", color: "#148fb6" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-testid": "updateIcon", onClick: () => {
                setCurrentCohort(getData?.getAllCohorts[props.row.index]);
                setUpdateCohortModal(true);
            } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, { icon: "el:file-edit-alt", className: "mr-2", width: "25", height: "25", cursor: "pointer", color: "#148fb6" })),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { "data-testid": "deleteIcon", onClick: 
            /* istanbul ignore next */
            () => {
                /* istanbul ignore next */
                setCurrentCohort(getData?.getAllCohorts[props.row.index]);
                /* istanbul ignore next */
                setDeleteCohortModal(true);
            } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, { icon: "mdi:close-circle-outline", width: "30", height: "30", cursor: "pointer", color: "#148fb6" }))));
}
function TeamsButtons({ getData, setCurrentCohort, setCohortTeamsModel, ...props }) {
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex relative flex-row align-middle justify-center items-center" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "cursor-pointer", onClick: 
            /* istanbul ignore next */
            () => {
                /* istanbul ignore next */
                setCurrentCohort(getData?.getAllCohorts[props.row.index]);
                /* istanbul ignore next */
                setCohortTeamsModel(true);
            } }, getData?.getAllCohorts[props.row.index].teams)));
}
function AdminCohort() {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation)();
    const { data: getData, loading: getLoading, error: getError, refetch: getRefetch, } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_13__.useQuery)(getAllCohorts, {
        variables: {
            orgToken: localStorage.getItem('orgToken'),
        },
    });
    const [createCohortModal, setCreateCohortModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [updateCohortModal, setUpdateCohortModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [cohortTrainneModal, setCohortTrainneModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [cohortTeamsModel, setCohortTeamsModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentCohort, setCurrentCohort] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const [deleteCohortModal, setDeleteCohortModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_4__["default"])('Cohorts');
    /* istanbul ignore next */
    const removeDeleteModel = 
    /* istanbul ignore next */
    () => {
        const newState = !deleteCohortModal;
        setDeleteCohortModal(newState);
    };
    const removeModel = () => {
        const newState = 
        /* istanbul ignore next */
        !createCohortModal;
        setCreateCohortModal(newState);
    };
    const cohortColumns = [
        { Header: t('name'), accessor: 'name' },
        { Header: t('phase'), accessor: 'phase' },
        {
            Header: t('Teams'),
            accessor: '',
            Cell: (props) => TeamsButtons({
                getData,
                setCurrentCohort,
                setCohortTeamsModel,
                ...props,
            }),
        },
        { Header: t('Coordinator'), accessor: 'coordinator' },
        { Header: t('program'), accessor: 'program' },
        { Header: t('starting date'), accessor: 'startDate' },
        { Header: t('closing date'), accessor: 'endDate' },
        {
            Header: t('action'),
            accessor: '',
            Cell: (props) => ActionButtons({
                getData,
                setCurrentCohort,
                setUpdateCohortModal,
                setDeleteCohortModal,
                setCohortTrainneModal,
                ...props,
            }),
        },
    ];
    /* istanbul ignore next */
    const cohortData = getData?.getAllCohorts.map(
    /* istanbul ignore next */
    ({ name, phase: { name: phaseName }, coordinator, program: { name: programName }, teams, startDate, endDate, }) => 
    /* istanbul ignore next */
    ({
        name,
        phase: phaseName,
        coordinator: coordinator ? coordinator.email : 'Not Assigned',
        program: programName,
        teams,
        startDate: (0,_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__["default"])(startDate),
        endDate: (0,_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__["default"])(endDate),
    }));
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CreateCohortModal__WEBPACK_IMPORTED_MODULE_6__["default"], { data: getData, createCohortModel: createCohortModal, removeModel: removeModel, refetch: getRefetch }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_UpdateCohortModal__WEBPACK_IMPORTED_MODULE_8__["default"]
        /* istanbul ignore next */
        , { 
            /* istanbul ignore next */
            data: getData, updateCohortModal: updateCohortModal, currentCohort: currentCohort, refetch: getRefetch, removeModel: 
            /* istanbul ignore next */
            () => /* istanbul ignore next */ {
                setUpdateCohortModal(false);
            } }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CohortTraineeModal__WEBPACK_IMPORTED_MODULE_9__["default"]
        /* istanbul ignore next */
        , { 
            /* istanbul ignore next */
            cohortTraineeModal: cohortTrainneModal, currentCohort: currentCohort, refetch: getRefetch, removeModel: 
            /* istanbul ignore next */
            () => /* istanbul ignore next */ {
                setCohortTrainneModal(false);
            } }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_DeleteCohortModal__WEBPACK_IMPORTED_MODULE_7__["default"]
        /* istanbul ignore next */
        , { 
            /* istanbul ignore next */
            deleteCohortModal: deleteCohortModal, currentCohort: currentCohort, removeModel: removeDeleteModel, refetch: getRefetch }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CohortTeamsModal__WEBPACK_IMPORTED_MODULE_10__["default"]
        /* istanbul ignore next */
        , { 
            /* istanbul ignore next */
            cohortTeamsModel: cohortTeamsModel, currentCohort: currentCohort, removeModel: 
            /* istanbul ignore next */
            () => /* istanbul ignore next */ {
                setCohortTeamsModel(false);
            }, refetch: getRefetch }),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg min-h-screen overflow-y-auto overflow-x-hidden" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex items-left px-7 lg:px-60 pt-24 pb-8" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "space-x-8 lg:ml-10" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "primary", size: "lg", onClick: removeModel, "data-testid": "removeModel" },
                        ' ',
                        t('Cohort'),
                        " +"))),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "px-3 m d:px-8 w-screen overflow-x-auto" }, !getLoading && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_DataTable__WEBPACK_IMPORTED_MODULE_3__["default"], { columns: cohortColumns, data: cohortData ? cohortData : [{}], title: t('Cohorts List') }))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminCohort);


/***/ }),

/***/ "./src/containers/admin-dashBoard/CreateCohortModal.tsx":
/*!**************************************************************!*\
  !*** ./src/containers/admin-dashBoard/CreateCohortModal.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddCohort: () => (/* binding */ AddCohort),
/* harmony export */   "default": () => (/* binding */ CreateCohortModal)
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







const AddCohort = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql) `
  mutation AddCohort(
    $name: String!
    $phaseName: String!
    $coordinatorEmail: String!
    $programName: String!
    $startDate: DateTime!
    $endDate: DateTime
    $orgToken: String!
  ) {
    addCohort(
      name: $name
      phaseName: $phaseName
      coordinatorEmail: $coordinatorEmail
      programName: $programName
      startDate: $startDate
      endDate: $endDate
      orgToken: $orgToken
    ) {
      id
      name
      phase{
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
function CreateCohortModal({ data, createCohortModel, removeModel, refetch, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { handleSubmit, watch, formState: { errors }, reset, setValue, register, control, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();
    /* istanbul ignore next */
    const [addCohortMutation, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(AddCohort, {
        onError(error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message.toString());
        },
        onCompleted() {
            refetch();
            removeModel();
        },
    });
    /* istanbul ignore next */
    const coordinators = data?.getAllUsers.filter((user) => user.role === 'coordinator');
    const programs = data?.getAllPrograms;
    const phases = data?.getAllPhases;
    /* istanbul ignore next */
    async function addCohort(data) {
        const newData = { ...data };
        newData.coordinatorEmail &&
            (newData.coordinatorEmail = newData.coordinatorEmail.value);
        newData.programName && (newData.programName = newData.programName.value);
        newData.phaseName && (newData.phaseName = newData.phaseName.value);
        Object.keys(newData).forEach((field) => {
            if (!newData[field] || newData[field] === '') {
                delete newData[field];
            }
        });
        await addCohortMutation({
            variables: { orgToken: localStorage.getItem('orgToken'), ...newData },
            onCompleted() {
                reset();
                setValue('coordinatorEmail', { value: undefined, label: undefined });
                setValue('programName', { value: undefined, label: undefined });
                setValue('phaseName', { value: undefined, label: undefined });
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Cohort Created successful");
            },
        });
    }
    /* istanbul ignore next */
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${createCohortModel === true ? 'block' : 'hidden'}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12 uppercase" }, t('Add Cohort')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", className: "border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs py-2 w-full", placeholder: t('name'), ...register('name', {
                                    required: `${t('The Cohort name is required')}`,
                                }) })),
                        errors?.name && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.name?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ControlledSelect__WEBPACK_IMPORTED_MODULE_3__["default"], { placeholder: t('Select Phase Name'), register: {
                                control,
                                name: 'phaseName',
                                rules: { required: `${t('The Phase Name is required')}` },
                            }, options: phases?.map(({ name }) => ({
                                value: name,
                                label: name,
                            })) }),
                        errors?.phaseName && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.phaseName?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ControlledSelect__WEBPACK_IMPORTED_MODULE_3__["default"], { placeholder: t('Select Coordinator'), register: {
                                    control,
                                    name: 'coordinatorEmail',
                                    rules: {
                                        required: `${t('The Coordinator Email is required')}`,
                                    },
                                }, options: coordinators?.map(({ email }) => ({
                                    value: email,
                                    label: email,
                                })) })),
                        errors?.coordinatorEmail && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.coordinatorEmail?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ControlledSelect__WEBPACK_IMPORTED_MODULE_3__["default"], { placeholder: t('Select Program Name'), register: {
                                control,
                                name: 'programName',
                                rules: { required: `${t('The Program Name is required')}` },
                            }, options: programs?.map(({ name }) => ({
                                value: name,
                                label: name,
                            })) }),
                        errors?.programName && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.programName?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "date", className: "border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full", placeholder: t('StartingDate'), ...register('startDate', {
                                    required: `${t('The StartingDate is required')}`,
                                }) })),
                        errors?.startDate && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.startDate?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { min: watch().startDate, type: "date", className: " border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full", placeholder: t('ClosingDate'), ...register('endDate') })),
                        errors?.endDate && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.endDate?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "remove", onClick: () => {
                                removeModel();
                                reset();
                            }, disabled: loading },
                            ' ',
                            t('Cancel')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "primary", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans p-0", onClick: handleSubmit(addCohort), loading: loading },
                            ' ',
                            t('Save'))))))));
}


/***/ }),

/***/ "./src/containers/admin-dashBoard/DeleteCohortModal.tsx":
/*!**************************************************************!*\
  !*** ./src/containers/admin-dashBoard/DeleteCohortModal.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteCohort: () => (/* binding */ DeleteCohort),
/* harmony export */   "default": () => (/* binding */ DeleteCohortModal)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");





const DeleteCohort = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql) `
  mutation DeleteCohort($deleteCohortId: ID!, $orgToken: String) {
    deleteCohort(id: $deleteCohortId, orgToken: $orgToken) {
      id
    }
  }
`;
function DeleteCohortModal({ deleteCohortModal, currentCohort, removeModel, refetch, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const [deleteCohortMutation, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(DeleteCohort, {
        onError(error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message.toString());
        },
        onCompleted() {
            refetch();
            removeModel();
        },
    });
    const orgToken = localStorage.getItem('orgToken');
    async function deleteCohort() {
        const data = {};
        data.deleteCohortId = currentCohort?.id;
        orgToken && (data.orgToken = orgToken);
        await deleteCohortMutation({ variables: data });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${deleteCohortModal === true ? 'block' : 'hidden'}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-xl dark:text-white text-center w-11/12" }, t('Delete Cohort')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-base dark:text-white text-center m-4" }, t('reallyRemoveCohort'))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "delete", onClick: () => removeModel() }, t('Cancel')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "danger", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "confirmDeleteBtn", onClick: () => {
                                deleteCohort();
                            } }, t('Delete'))))))));
}


/***/ }),

/***/ "./src/containers/admin-dashBoard/UpdateCohortModal.tsx":
/*!**************************************************************!*\
  !*** ./src/containers/admin-dashBoard/UpdateCohortModal.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateCohort: () => (/* binding */ UpdateCohort),
/* harmony export */   "default": () => (/* binding */ UpdateCohortModal)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/format/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _components_ControlledSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ControlledSelect */ "./src/components/ControlledSelect.tsx");








const UpdateCohort = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql) `
  mutation UpdateCohort(
    $updateCohortId: ID!
    $orgToken: String
    $coordinatorEmail: String!
    $programName: String!
    $name: String
    $phaseName: String
    $startDate: DateTime
    $endDate: DateTime
  ) {
    updateCohort(
      id: $updateCohortId
      orgToken: $orgToken
      name: $name
      coordinatorEmail: $coordinatorEmail
      programName: $programName
      phaseName: $phaseName
      startDate: $startDate
      endDate: $endDate
    ) {
      id
    }
  }
`;
function UpdateCohortModal({ data, updateCohortModal, currentCohort, removeModel, refetch, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { handleSubmit, watch, formState: { errors }, reset, register, control, setValue, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();
    const [updateCohortMutation, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(UpdateCohort, {
        onError(error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message.toString());
        },
        /* istanbul ignore next */
        onCompleted() {
            refetch();
            removeModel();
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success('Cohort Updated successful');
        },
    });
    const coordinators = data?.getAllUsers.filter((user) => user.role === 'coordinator');
    const programs = data?.getAllPrograms;
    const phases = data?.getAllPhases;
    const orgToken = localStorage.getItem('orgToken');
    async function updateCohort(data) {
        const newData = { ...data };
        newData.coordinatorEmail &&
            (newData.coordinatorEmail = newData.coordinatorEmail.value);
        newData.programName && (newData.programName = newData.programName.value);
        newData.phaseName && (newData.phaseName = newData.phaseName.value);
        Object.keys(newData).forEach((field) => {
            if (!newData[field] || newData[field] === '') {
                delete newData[field];
            }
        });
        newData.updateCohortId = currentCohort?.id;
        orgToken && (newData.orgToken = orgToken);
        await updateCohortMutation({ variables: newData });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setValue('name', currentCohort?.name);
        setValue('phaseName', {
            value: currentCohort?.phase.name,
            label: currentCohort?.phase.name,
        });
        setValue('coordinatorEmail', {
            value: currentCohort?.coordinator?.email,
            label: currentCohort?.coordinator?.email,
        });
        setValue('programName', {
            value: currentCohort?.program.name,
            label: currentCohort?.program.name,
        });
        if (currentCohort?.startDate) {
            setValue('startDate', (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(currentCohort?.startDate), 'yyyy-MM-dd'));
        }
        if (currentCohort?.endDate) {
            setValue('endDate', (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(currentCohort?.endDate), 'yyyy-MM-dd'));
        }
    }, [currentCohort, updateCohortModal]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${updateCohortModal === true ? 'block' : 'hidden'}`, "data-testid": "updateCohortModal" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12 uppercase" }, t('Update Cohort')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", className: "border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs py-2 w-full", placeholder: t('name'), ...register('name') })),
                        errors?.name && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.name?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ControlledSelect__WEBPACK_IMPORTED_MODULE_3__["default"], { placeholder: t('Phase Name'), register: {
                                control,
                                name: 'phaseName',
                                rules: { required: `${t('The Phase Name is required')}` },
                            }, 
                            /* istanbul ignore next */
                            options: phases?.map(({ name }) => ({
                                value: name,
                                label: name,
                            })) }),
                        errors?.phaseName && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.phaseName?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ControlledSelect__WEBPACK_IMPORTED_MODULE_3__["default"], { placeholder: t('Select Coordinator'), register: {
                                    control,
                                    name: 'coordinatorEmail',
                                    rules: {
                                        required: `${t('The Coordinator Email is required')}`,
                                    },
                                }, options: coordinators?.map(({ email }) => ({
                                    value: email,
                                    label: email,
                                })) })),
                        errors?.coordinatorEmail && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.coordinatorEmail?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ControlledSelect__WEBPACK_IMPORTED_MODULE_3__["default"], { placeholder: t('Program Name'), register: {
                                control,
                                name: 'programName',
                                rules: { required: `${t('The Program Name is required')}` },
                            }, options: programs?.map(({ name }) => ({
                                value: name,
                                label: name,
                            })) }),
                        errors?.programName && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.programName?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "date", className: "border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full", placeholder: t('StartingDate'), ...register('startDate') })),
                        errors?.startDate && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.startDate?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-5 h-9 " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { min: watch().startDate, type: "date", className: " border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full", placeholder: t('ClosingDate'), ...register('endDate') })),
                        errors?.endDate && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-thin text-[12px] text-red-300" }, errors?.endDate?.message?.toString()))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "remove", onClick: () => {
                                removeModel();
                                reset();
                            }, disabled: loading },
                            ' ',
                            t('Cancel')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "primary", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans p-0", onClick: handleSubmit(updateCohort), loading: loading, "data-testid": "confirmUpdateBtn" },
                            ' ',
                            t('Save'))))))));
}


/***/ }),

/***/ "./src/utils/formatDate.tsx":
/*!**********************************!*\
  !*** ./src/utils/formatDate.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDate)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/format/index.js");

/* istanbul ignore next */
function formatDate(date) {
    if (!date) {
        return '--no date--';
    }
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(date.toString()), 'do MMM yyyy');
}


/***/ })

}]);
//# sourceMappingURL=src_containers_admin-dashBoard_Cohorts_tsx.js.map