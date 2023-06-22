"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_Mutations_manageStudentMutations_tsx-src_components_DataTable_tsx"],{

/***/ "./src/Mutations/manageStudentMutations.tsx":
/*!**************************************************!*\
  !*** ./src/Mutations/manageStudentMutations.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_MEMBER_TO_COHORT_MUTATION: () => (/* binding */ ADD_MEMBER_TO_COHORT_MUTATION),
/* harmony export */   ADD_MEMBER_TO_TEAM: () => (/* binding */ ADD_MEMBER_TO_TEAM),
/* harmony export */   EDIT_MEMBER_MUTATION: () => (/* binding */ EDIT_MEMBER_MUTATION),
/* harmony export */   GET_COHORTS_QUERY: () => (/* binding */ GET_COHORTS_QUERY),
/* harmony export */   GET_COHORT_TRAINEES_QUERY: () => (/* binding */ GET_COHORT_TRAINEES_QUERY),
/* harmony export */   GET_TEAM_QUERY: () => (/* binding */ GET_TEAM_QUERY),
/* harmony export */   GET_TEAM_TRAINEE_QUERY: () => (/* binding */ GET_TEAM_TRAINEE_QUERY),
/* harmony export */   GET_TRAINEES_QUERY: () => (/* binding */ GET_TRAINEES_QUERY),
/* harmony export */   GET_TRAINEE_PROFILE: () => (/* binding */ GET_TRAINEE_PROFILE),
/* harmony export */   GET_USERS_QUERY: () => (/* binding */ GET_USERS_QUERY),
/* harmony export */   INVITE_USER_MUTATION: () => (/* binding */ INVITE_USER_MUTATION),
/* harmony export */   REMOVE_MEMBER_FROM_COHORT_MUTATION: () => (/* binding */ REMOVE_MEMBER_FROM_COHORT_MUTATION)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");

const GET_USERS_QUERY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query GetUsers($orgToken: String) {
    getUsers(orgToken: $orgToken) {
      email
      id
    }
  }
`;
const GET_TRAINEES_QUERY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query GetTrainees($orgToken: String) {
    getTrainees(orgToken: $orgToken) {
      profile {
        firstName
        lastName
        city
        country
        phoneNumber
        biography
        avatar
        id
        name
      }
      email
      team {
        name
        cohort {
          startDate
          program {
            name
            manager {
              profile {
                name
              }
              email
            }
          }
          name
          phase {
            name
          }
        }
      }
    }
  }
`;
const GET_COHORT_TRAINEES_QUERY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query GetCohortTrainees($cohort: String, $orgToken: String) {
    getCohortTrainees(cohort: $cohort, orgToken: $orgToken) {
      profile {
        name
      }
      email
      id
      team {
        name
        cohort {
          name
          program {
            name
          }
        }
      }
    }
  }
`;
const GET_COHORTS_QUERY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query GetCohorts($orgToken: String) {
    getCohorts(orgToken: $orgToken) {
      name
      id
    }
  }
`;
const GET_TRAINEE_PROFILE = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query GetProfile {
    getProfile {
      firstName
      name
      city
      country
      address
      phoneNumber
      biography
      avatar
      coverImage
      lastName
    }
  }
`;
const ADD_MEMBER_TO_COHORT_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation AddMemberToCohort(
    $cohortName: String!
    $email: String!
    $orgToken: String!
  ) {
    addMemberToCohort(
      cohortName: $cohortName
      email: $email
      orgToken: $orgToken
    )
  }
`;
const REMOVE_MEMBER_FROM_COHORT_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation RemoveMemberFromCohort(
    $teamName: String!
    $orgToken: String!
    $email: String!
  ) {
    removeMemberFromCohort(
      teamName: $teamName
      orgToken: $orgToken
      email: $email
    )
  }
`;
const EDIT_MEMBER_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation EditMember(
    $removedFromTeamName: String!
    $addedToTeamName: String!
    $email: String!
    $orgToken: String!
  ) {
    editMember(
      removedFromTeamName: $removedFromTeamName
      addedToTeamName: $addedToTeamName
      email: $email
      orgToken: $orgToken
    )
  }
`;
const INVITE_USER_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation InviteUser($email: String!, $orgToken: String!) {
    inviteUser(email: $email, orgToken: $orgToken)
  }
`;
const GET_TEAM_QUERY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query GetAllTeamInCohort($orgToken: String, $cohort: String) {
    getAllTeamInCohort(orgToken: $orgToken, cohort: $cohort) {
      cohort {
        name
      }
      name
    }
  }
`;
const ADD_MEMBER_TO_TEAM = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation Mutation($teamName: String!, $email: String!, $orgToken: String!) {
    addMemberToTeam(teamName: $teamName, email: $email, orgToken: $orgToken)
  }
`;
const GET_TEAM_TRAINEE_QUERY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query GetTeamTrainees($orgToken: String, $team: String) {
    getTeamTrainees(orgToken: $orgToken, team: $team) {
      profile {
        firstName
        lastName
        city
        country
        phoneNumber
        biography
        avatar
        id
        name
      }
      email
      team {
        name
        cohort {
          startDate
          program {
            name
            manager {
              profile {
                name
              }
              email
            }
          }
          name
          phase {
            name
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


/***/ })

}]);
//# sourceMappingURL=src_Mutations_manageStudentMutations_tsx-src_components_DataTable_tsx.js.map