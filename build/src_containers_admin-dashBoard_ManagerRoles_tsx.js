"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_containers_admin-dashBoard_ManagerRoles_tsx"],{

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

/***/ "./src/containers/admin-dashBoard/AssignRolesMutation.tsx":
/*!****************************************************************!*\
  !*** ./src/containers/admin-dashBoard/AssignRolesMutation.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");

const ASSIGN_ROLE_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation Mutation($updateUserRoleId: ID!, $name: String, $orgToken: String) {
    updateUserRole(id: $updateUserRoleId, name: $name, orgToken: $orgToken) {
      id
      role
      email
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ASSIGN_ROLE_MUTATION);


/***/ }),

/***/ "./src/containers/admin-dashBoard/GetRolesQuery.tsx":
/*!**********************************************************!*\
  !*** ./src/containers/admin-dashBoard/GetRolesQuery.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");

const GET_ROLE_QUERY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query GetAllRoles($orgToken: String) {
    getAllRoles {
      id
      name
    }
    getAllUsers(orgToken: $orgToken) {
      id
      email
      role
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GET_ROLE_QUERY);


/***/ }),

/***/ "./src/containers/admin-dashBoard/ManagerRoles.tsx":
/*!*********************************************************!*\
  !*** ./src/containers/admin-dashBoard/ManagerRoles.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/DataTable */ "./src/components/DataTable.tsx");
/* harmony import */ var _dummyData_rolemanagement_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dummyData/rolemanagement.json */ "./src/dummyData/rolemanagement.json");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _admin_dashBoard_createRoleMutation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin-dashBoard/createRoleMutation */ "./src/containers/admin-dashBoard/createRoleMutation.tsx");
/* harmony import */ var _admin_dashBoard_GetRolesQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin-dashBoard/GetRolesQuery */ "./src/containers/admin-dashBoard/GetRolesQuery.tsx");
/* harmony import */ var _admin_dashBoard_AssignRolesMutation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../admin-dashBoard/AssignRolesMutation */ "./src/containers/admin-dashBoard/AssignRolesMutation.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useApolloClient.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var _Skeletons_Square__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Skeletons/Square */ "./src/Skeletons/Square.tsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* eslint-disable */













const AdminSission = () => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
    const client = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useApolloClient)();
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__["default"])('Roles & Access');
    const [addMemberModel, setAddMemberModel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [deleteModel, setDeleteModel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [GetAllRoles, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_12__.useLazyQuery)(_admin_dashBoard_GetRolesQuery__WEBPACK_IMPORTED_MODULE_6__["default"]);
    const [developers, setDevelopers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_dummyData_rolemanagement_json__WEBPACK_IMPORTED_MODULE_2__);
    const [tabName, setTabName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
    const [dataDev, setDataDev] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_dummyData_rolemanagement_json__WEBPACK_IMPORTED_MODULE_2__);
    const [showRoles, setShowRoles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [roleName, setRoleName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [selectedUser, setSelectedUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({ id: '', role: '' });
    const [err, setErr] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [selectedRole, setSelectedRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [subTitle, setSubTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Available roles');
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [createUserRole] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_13__.useMutation)(_admin_dashBoard_createRoleMutation__WEBPACK_IMPORTED_MODULE_5__["default"]);
    const [updateUserRole] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_13__.useMutation)(_admin_dashBoard_AssignRolesMutation__WEBPACK_IMPORTED_MODULE_7__["default"]);
    const [findFilter, setFindFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [allRoles, setallRoles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    let newUsers = [];
    /* istanbul ignore next */
    const handleAll = () => {
        setTabName('all');
    };
    /* istanbul ignore next */
    const handleAdmin = () => {
        setTabName('admin');
    };
    /* istanbul ignore next */
    const handleCoord = () => {
        setTabName('coordinator');
    };
    /* istanbul ignore next */
    const handletrainee = () => {
        setTabName('trainee');
    };
    /* istanbul ignore next */
    const removeModel = () => {
        let newState = !addMemberModel;
        setAddMemberModel(newState);
    };
    /* istanbul ignore next */
    const removeDeleteModel = (e) => {
        e.preventDefault();
        let newState = !deleteModel;
        setDeleteModel(newState);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (tabName === 'all') {
            setDataDev(_dummyData_rolemanagement_json__WEBPACK_IMPORTED_MODULE_2__);
        }
        else {
            /* istanbul ignore next */
            setDataDev(_dummyData_rolemanagement_json__WEBPACK_IMPORTED_MODULE_2__.filter((item) => item.role === tabName));
        }
    }, [tabName]);
    const removeAssignModel = /* istanbul ignore next */ (user) => {
        /* istanbul ignore next */
        setSelectedUser({ id: user.id, role: user.role });
        /* istanbul ignore next */
        let newState = !deleteModel;
        /* istanbul ignore next */
        setDeleteModel(newState);
    };
    const handleShowRole = /* istanbul ignore next */ () => {
        /* istanbul ignore next */
        setShowRoles(!showRoles);
        /* istanbul ignore next */
        if (showRoles)
            setSubTitle('Available Roles');
        /* istanbul ignore next */
        else
            setSubTitle('Manage Roles');
    };
    const [handleCreateRole] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_13__.useMutation)(_admin_dashBoard_createRoleMutation__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variables: { name: roleName },
        /* istanbul ignore next */
        onCompleted: /* istanbul ignore next */ (data) => {
            /* istanbul ignore next */
            setToggle(!toggle);
            /* istanbul ignore next */
            let newState = !addMemberModel;
            /* istanbul ignore next */
            setTimeout(/* istanbul ignore next */ () => {
                /* istanbul ignore next */
                setAddMemberModel(newState);
            }, 1000);
        },
        onError: /* istanbul ignore next */ (err) => {
            /* istanbul ignore next */
            console.log('Error ', err);
        },
    });
    /* istanbul ignore next */
    const handleSelectRole = (e, name) => {
        /* istanbul ignore next */
        e.preventDefault();
        /* istanbul ignore next */
        setSelectedRole(name);
    };
    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [handleAssignRole2] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_13__.useMutation)(_admin_dashBoard_AssignRolesMutation__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variables: {
            updateUserRoleId: selectedUser.id,
            name: selectedRole,
            orgToken: localStorage.getItem('orgToken'),
        },
        onCompleted: (data) => {
            /* istanbul ignore next */
            react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success('Role assigned successful');
            /* istanbul ignore next */
            setToggle(!toggle);
            /* istanbul ignore next */
            let newState = !deleteModel;
            /* istanbul ignore next */
            setTimeout(() => {
                /* istanbul ignore next */
                setDeleteModel(newState);
            }, 1000);
        },
        /* istanbul ignore next */
        onError: /* istanbul ignore next */ (err) => {
            /* istanbul ignore next */
            react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(err.message);
        },
    });
    const [fetchData2] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_12__.useLazyQuery)(_admin_dashBoard_GetRolesQuery__WEBPACK_IMPORTED_MODULE_6__["default"], {
        variables: {
            orgToken: localStorage.getItem('orgToken'),
        },
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        fetchData2({
            fetchPolicy: 'network-only',
            /* istanbul ignore next */
            onCompleted: (data) => {
                /* istanbul ignore next */
                setUsers(data?.getAllUsers);
                /* istanbul ignore next */
                data.getAllUsers.map((user, index) => {
                    /* istanbul ignore next */
                    newUsers[index] = {};
                    newUsers[index].role = user.role;
                    newUsers[index].email = user.email;
                    newUsers[index].id = user.id;
                });
                /* istanbul ignore next */
                setallRoles(data?.getAllRoles);
            },
            /* istanbul ignore next */
            onError: (error) => {
                /* istanbul ignore next */
                console.log(error, 'error');
            },
        });
        // fetchData();
    }, [handleAssignRole2, toggle]);
    const columns = [
        {
            Header: 'Email',
            accessor: 'email',
            /* istanbul ignore next */
            Cell: ({ row }) => (
            /* istanbul ignore next */
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-left" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "hidden  ml-2 md:inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100 dark:bg-dark-tertiary" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "h-full w-full text-gray-300 dark:text-white", fill: "currentColor", viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col  leading-4 px-3 py-2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm sm:text-xs text-gray-400 dark:text-white" }, row.original.email)))),
        },
        { Header: 'Role', accessor: 'role' },
        {
            Header: 'Action',
            accessor: '',
            /* istanbul ignore next */
            Cell: ({ row }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-red-500 whitespace-no-wrap cursor-pointer", onClick: /* istanbul ignore next */ () => {
                    /* istanbul ignore next */
                    console.log(row.original.role);
                    removeAssignModel(row.original);
                } }, t('Assign'))),
        },
    ];
    const allRoless = [
        {
            name: 'coordinator',
        },
        {
            name: 'manager',
        },
        {
            name: 'admin',
        },
    ];
    /* istanbul ignore next */
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, users && allRoless ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `min-h-screen w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm fixed flex items-center justify-center px-4 ${deleteModel === true ? 'block' : 'hidden'}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm text-gray-700 dark:text-white text-center w-11/12" }, t('Select role')),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-center" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-wrap" }, allRoless.filter((item) => item.name != selectedUser.role).map((obj, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: index, onClick: (e) => handleSelectRole(e, obj.name), className: "border-solid active:bg-sky-500 rounded-xl border-2 border-sky-500 flex justify-center cursor-pointer m-2 " },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "button", className: "p-2  hover:bg-sky-500 focus:bg-sky-500 focus:ring-4 focus:ring-sky-700 focus:outline-none rounded-lg" }, obj.name))))))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_4__["default"], { variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", "data-testid": "delete", onClick: (e) => removeDeleteModel(e) },
                                ' ',
                                t('Cancel'),
                                ' '),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_4__["default"], { variant: "primary", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", onClick: () => handleAssignRole2() }, t('Assign'))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg min-h-screen pb-16 overflow-y-auto overflow-x-hidden" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-3 pt-24 md:px-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DataTable__WEBPACK_IMPORTED_MODULE_1__["default"], { data: newUsers.length > 0 ? newUsers : users, columns: columns, title: "Manageaccess" }))))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Skeletons_Square__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminSission);


/***/ }),

/***/ "./src/containers/admin-dashBoard/createRoleMutation.tsx":
/*!***************************************************************!*\
  !*** ./src/containers/admin-dashBoard/createRoleMutation.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");

const CREATE_ROLE_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation Mutation($name: String!) {
    createUserRole(name: $name) {
      id
      name
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CREATE_ROLE_MUTATION);


/***/ }),

/***/ "./src/dummyData/rolemanagement.json":
/*!*******************************************!*\
  !*** ./src/dummyData/rolemanagement.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Keza Alice","email":"keza@gmail.com","value":"1","role":"admin","status":"Active"},{"name":"cyifuzo Didider","email":"cyifuzo@gmail.com","value":"2","role":"admin","status":"Active"},{"name":"Kaka Makombe","email":"kaka@gmail.com","value":"3","role":"coordinator","status":"Active"},{"name":"Keza Alice","email":"keza@gmail.com","value":"1","role":"trainee","status":"Active"},{"name":"Ella Didider","email":"kdidier@gmail.com","value":"2","role":"trainee","status":"Active"},{"name":"Kaka Makombe","email":"kaka@gmail.com","value":"3","role":"coordinator","status":"Active"},{"name":"Keza Alice","email":"keza@gmail.com","value":"1","role":"admin","status":"Active"},{"name":"Kamanzi Didider","email":"kdidier@gmail.com","value":"2","role":"trainee","status":"Active"},{"name":"cyifuzo Makombe","email":"kaka@gmail.com","value":"3","role":"coordinator","status":"Active"}]');

/***/ })

}]);
//# sourceMappingURL=src_containers_admin-dashBoard_ManagerRoles_tsx.js.map