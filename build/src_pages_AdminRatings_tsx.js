"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_pages_AdminRatings_tsx"],{

/***/ "./src/Mutations/Ratings.tsx":
/*!***********************************!*\
  !*** ./src/Mutations/Ratings.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_RATING: () => (/* binding */ ADD_RATING),
/* harmony export */   APPROVE_RATING: () => (/* binding */ APPROVE_RATING),
/* harmony export */   FETCH_ALL_RATINGS: () => (/* binding */ FETCH_ALL_RATINGS),
/* harmony export */   GET_ALL_TRAINEES: () => (/* binding */ GET_ALL_TRAINEES),
/* harmony export */   GET_COORDINATOR_COHORTS_QUERY: () => (/* binding */ GET_COORDINATOR_COHORTS_QUERY),
/* harmony export */   GET_RATINGS: () => (/* binding */ GET_RATINGS),
/* harmony export */   GET_USERS: () => (/* binding */ GET_USERS),
/* harmony export */   RATING_BY_COHORT: () => (/* binding */ RATING_BY_COHORT),
/* harmony export */   REJECT_RATING: () => (/* binding */ REJECT_RATING),
/* harmony export */   TRAINEE_RATING: () => (/* binding */ TRAINEE_RATING),
/* harmony export */   UPDATE_RATING: () => (/* binding */ UPDATE_RATING)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");

const GET_RATINGS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query Query($orgToken: String) {
    fetchRatings(orgToken: $orgToken) {
      user {
        id
        email
      }
      sprint
      quantity
      bodyQuantity
      quantityRemark
      quality
      bodyProfessional
      qualityRemark
      professional_Skills
      professionalRemark
      bodyQuality
      coordinator
      average
      cohort {
        name
        phase {
          name
        }
      }
    }
  }
`;
const RATING_BY_COHORT = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
query GetAllCohorts( $cohortName: String) {
  fetchRatingByCohort(  CohortName: $cohortName) {
    sprint
    quantity
    approved
    coordinator
    average
    cohort {
      name
      id
      phase {
        name
      }
    }
    user {
      id
      email
    }
    quantityRemark
    bodyQuantity
    quality
    qualityRemark
    bodyQuality
    professional_Skills
    professionalRemark
    bodyProfessional
  }
}
`;
const FETCH_ALL_RATINGS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query FetchAllRatings($orgToken: String) {
    fetchAllRatings(orgToken: $orgToken) {
      user {
        id
        email
      }
      sprint
      quantity
      quantityRemark
      quality
      qualityRemark
      professional_Skills
      professionalRemark
      average
      cohort {
        name
        phase {
          name
        }
      }
      coordinator
    }
  }
`;
const ADD_RATING = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
mutation AddRatings($user: String!, $sprint: Int!, $quantity: String!, $quality: String!, $cohort: String!, $professionalSkills: String!, $orgToken: String!, $quantityRemark: String, $bodyQuality: String, $qualityRemark: String, $bodyQuantity: String, $professionalRemark: String, $bodyProfessional: String) {
  addRatings(user: $user, sprint: $sprint, quantity: $quantity, quality: $quality, cohort: $cohort, professional_Skills: $professionalSkills, orgToken: $orgToken, quantityRemark: $quantityRemark, bodyQuality: $bodyQuality, qualityRemark: $qualityRemark, bodyQuantity: $bodyQuantity, professionalRemark: $professionalRemark, bodyProfessional: $bodyProfessional) {
    user {
      id
      email
    }
    sprint
    cohort {
      name
      id
      phase {
        name
      }
    }
    quantity
    quantityRemark
    bodyQuantity
    quality
    qualityRemark
    bodyQuality
    professional_Skills
    professionalRemark
    bodyProfessional
    approved
    coordinator
  }
}
`;
const UPDATE_RATING = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation Mutation(
    $user: String!
    $sprint: Int!
    $quantity: [String]
    $quantityRemark: [String]
    $quality: [String]
    $qualityRemark: [String]
    $professionalSkills: [String]
    $professionalRemark: [String]
    $orgToken: String!
  ) {
    updateRating(
      user: $user
      sprint: $sprint
      quantity: $quantity
      quantityRemark: $quantityRemark
      quality: $quality
      qualityRemark: $qualityRemark
      professional_Skills: $professionalSkills
      professionalRemark: $professionalRemark
      orgToken: $orgToken
    ) {
      user
      sprint
      quantity
      quantityRemark
      quality
      qualityRemark
      professional_Skills
      professionalRemark
    }
  }
`;
const APPROVE_RATING = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation Mutation($user: String!, $sprint: Int!) {
    approveRating(user: $user, sprint: $sprint) {
      user
      sprint
      quantity
      quantityRemark
      qualityRemark
      professionalRemark
      professional_Skills
      approved
      quality
    }
  }
`;
const REJECT_RATING = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation Mutation($user: String!, $sprint: Int!) {
    rejectRating(user: $user, sprint: $sprint)
  }
`;
const TRAINEE_RATING = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query Query {
    fetchRatingsTrainee {
      user {
        id
      }
      sprint
      quantity
      quantityRemark
      quality
      qualityRemark
      professional_Skills
      professionalRemark
      average
      cohort {
        phase {
          name
        }
      }
    }
  }
`;
const GET_USERS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query GetAllUsers($cohortName: ID!) {
    fetchCohortsCoordinator(cohortName: $cohortName) {
      name
      phase {
        name
      }
      coordinator {
        id
      }
      members {
        id
        role
        email
      }
      program {
        name
      }
      id
    }
  }
`;
const GET_COORDINATOR_COHORTS_QUERY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query GetCoordinatorCohorts($orgToken: String) {
    getCoordinatorCohorts(orgToken: $orgToken) {
      name
      id
    }
  }
`;
const GET_ALL_TRAINEES = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query GetAllUsers($orgToken: String) {
  getAllUsers(orgToken: $orgToken) {
    role
    email
    team {
      name
      cohort {
        endDateb
        startDate
        phase {
          name
        }
        name
        program {
          organization {
            name
          }
          name
          manager {
            role
            email
            profile {
              name
              firstName
              lastName
            }
          }
        }
      }
    }
  }
}
`;


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

/***/ "./src/dummyData/ratings.ts":
/*!**********************************!*\
  !*** ./src/dummyData/ratings.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cohort: () => (/* binding */ cohort),
/* harmony export */   people: () => (/* binding */ people),
/* harmony export */   phase: () => (/* binding */ phase),
/* harmony export */   sprint: () => (/* binding */ sprint)
/* harmony export */ });
const phase = [
    {
        id: 1,
        name: 'Select',
    },
    {
        id: 2,
        name: '1',
    },
    {
        id: 3,
        name: '2',
    },
    {
        id: 4,
        name: '3',
    },
    {
        id: 5,
        name: '4',
    },
];
const cohort = [
    {
        id: 1,
        name: 'All Cohorts',
    },
    {
        id: 2,
        name: 'Cohort 1',
    },
    {
        id: 3,
        name: 'Cohort 2',
    },
    {
        id: 4,
        name: 'Cohort 3',
    },
    {
        id: 5,
        name: 'Cohort 4',
    },
];
const sprint = [
    {
        id: 1,
        name: 1,
    },
    {
        id: 2,
        name: 2,
    },
    {
        id: 3,
        name: 3,
    },
    {
        id: 4,
        name: 4,
    },
    {
        id: 5,
        name: 5,
    },
];
const people = [
    { id: 1, name: 'Shema Kevin' },
    { id: 2, name: 'Keza Alice' },
    { id: 3, name: 'Mutoni Aline' },
    { id: 4, name: 'Abawe Merchior' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Mugisha Danny' },
];


/***/ }),

/***/ "./src/pages/AdminRatings.tsx":
/*!************************************!*\
  !*** ./src/pages/AdminRatings.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _Skeletons_Square__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Skeletons/Square */ "./src/Skeletons/Square.tsx");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sidebar */ "./src/components/Sidebar.tsx");
/* harmony import */ var _Mutations_Ratings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Mutations/Ratings */ "./src/Mutations/Ratings.tsx");
/* harmony import */ var _dummyData_ratings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dummyData/ratings */ "./src/dummyData/ratings.ts");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DataTable */ "./src/components/DataTable.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/.pnpm/@headlessui+react@1.7.15_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/.pnpm/@headlessui+react@1.7.15_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/dialog/dialog.js");
/* eslint-disable */











function classNames(...classes) {
    /* istanbul ignore next */
    return classes.filter(Boolean).join(' ');
}
const TraineeRatingDashboard = () => {
    const organizationToken = localStorage.getItem('orgToken');
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_1__["default"])('Ratings');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [trainee, setTrainee] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [cohorts, setCohorts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [selectedPhase, setselectedPhase] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_dummyData_ratings__WEBPACK_IMPORTED_MODULE_5__.phase[0]);
    const [selectedCohort, setSelectedCohort] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(cohorts[0]);
    const [selectedSprint, setSelectedSprint] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_dummyData_ratings__WEBPACK_IMPORTED_MODULE_5__.sprint[0]);
    const [cohortName, setCohortName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({ cohortName: '' });
    const [disable, setDisable] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    let [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [ratingData, setRatingData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        quality: '0',
        qualityRemark: '',
        quantity: '0',
        quantityRemark: '',
        professional: '0',
        professionalRemark: '',
        userEmail: '',
    });
    const [rows, setRows] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        quality: '0',
        qualityremark: 'no remarks',
        quantity: '0',
        quantityremark: 'no remarks',
        professional: '0',
        professionalRemark: 'no remarks',
        sprint: '0',
        user: '',
        id: '',
        cohort: '',
    });
    const [showActions, setShowActions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [ratings, setRatings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleClick = () => setNav(!nav);
    const closeModal = () => {
        setIsOpen(false);
        setShowActions(false);
    };
    const data = ratings;
    const columns = [
        { Header: `${t('Email')}`, accessor: 'user[email]' },
        { Header: `${t('Cohort')}`, accessor: 'cohort[name]' },
        { Header: `${t('Sprint')}`, accessor: 'sprint' },
        { Header: `${t('Quantity')}`, accessor: 'quantity' },
        { Header: `${t('Quality')}`, accessor: 'quality' },
        { Header: `${t('Professional skills')}`, accessor: 'professional_Skills' },
        {
            Header: `${t('Actions')}`,
            accessor: '',
            Cell: ({ row }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cursor-pointer" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded", onClick: () => {
                            setShowActions(!showActions);
                            setRows({
                                ...rows,
                                quality: row.original.quality,
                                qualityremark: row.original.qualityRemark,
                                quantity: row.original.quantity,
                                quantityremark: row.original.quantityRemark,
                                professional: row.original.professional_Skills,
                                professionalRemark: row.original.professionalRemark,
                                sprint: row.original.sprint,
                                user: row.original.user.email,
                                id: row.original.user.id,
                                cohort: row.original.cohort.name,
                            });
                        } }, t('Details'))))),
        },
    ];
    const [getRatings] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useLazyQuery)(_Mutations_Ratings__WEBPACK_IMPORTED_MODULE_4__.FETCH_ALL_RATINGS, {
        variables: {
            orgToken: organizationToken,
        },
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        getRatings({
            fetchPolicy: 'network-only',
            onCompleted: (data) => {
                setRatings(data?.fetchAllRatings);
            },
            onError: (error) => {
                react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(error?.message || 'Something went wrong');
            },
        });
    }, [toggle]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Transition, { appear: true, show: showActions, as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, "data-testid": "modalTransistion" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Dialog, { as: "div", className: "relative z-10", onClose: closeModal },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Transition.Child, { as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed inset-0 overflow-y-auto" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex min-h-full  items-center justify-center p-4 text-center" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Transition.Child, { as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Dialog.Panel, { className: "w-full overflow-auto lg:mx-60 xl:mx-96 h-[800px] md:h-[600px] transform  rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mb-4 uppercase text-center text-lg text-bold text-primary dark:text-white" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, t('Detailed performance Ratings of Trainee'))),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: "table min-w-full leading-normal overflow-auto" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "border-b-primary" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "p-4 text-semibold" }, t('User email')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, rows.user)),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "bg-slate-200 dark:text-slate-200 border dark:bg-dark-frame-bg border-spacing-4 border-b-white" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "p-4 text-semibold" }, t('Cohort')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, rows.cohort)),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "bg-slate-200 dark:text-slate-200  dark:bg-dark-frame-bg border border-spacing-4 border-b-white" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "p-4 text-semibold" }, t('Sprint')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, rows.sprint)),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "bg-slate-200 dark:text-slate-200  dark:bg-dark-frame-bg border border-spacing-4 border-b-white" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "p-4 text-semibold" }, t('Quantity Ratings')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, rows.quantity)),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "bg-slate-200 dark:text-slate-200 dark:bg-dark-frame-bg border border-spacing-4 border-b-white" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "p-4 text-semibold" }, t('Quantity Remarks')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, rows.quantityremark)),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "bg-slate-200 dark:text-slate-200  dark:bg-dark-frame-bg border border-spacing-4 border-b-white" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "p-4 text-semibold" }, t('Quality Ratings')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, rows.quality)),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "bg-slate-200 dark:text-slate-200  dark:bg-dark-frame-bg border border-spacing-4 border-b-white" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "p-4 text-semibold" }, t('Quality Remarks')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, rows.qualityremark)),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "bg-slate-200 dark:text-slate-200  dark:bg-dark-frame-bg border border-spacing-4 border-b-white" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "p-4 text-semibold" }, t('Professionalism')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, rows.professional)),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "border dark:text-slate-200  dark:bg-dark-frame-bg border-spacing-4 bg-slate-200 border-b-white" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "p-4 text-semibold" }, t('Professionalism Remarks')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, rows.professionalRemark))),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-center mt-4" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "bg-primary text-white font-semibold py-2 px-4 border border-primary hover:border-transparent rounded", onClick: () => setShowActions(!showActions) }, t('Cancel')))))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col h-screen bg-light-bg dark:bg-dark-frame-bg" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], { toggle: handleClick, style: "hidden lg:flex" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg min-h-screen overflow-y-auto overflow-x-hidden" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-3 md:px-8 mt-28" }, data.length !== 0 ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DataTable__WEBPACK_IMPORTED_MODULE_6__["default"], { data: data, columns: columns, title: t('Performance Ratings') })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-center mt-7 text-lg uppercase" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Skeletons_Square__WEBPACK_IMPORTED_MODULE_2__["default"], null)))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TraineeRatingDashboard);


/***/ })

}]);
//# sourceMappingURL=src_pages_AdminRatings_tsx.js.map