"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_pages_AdminTraineeDashboard_tsx"],{

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

/***/ "./src/pages/AdminTraineeDashboard.tsx":
/*!*********************************************!*\
  !*** ./src/pages/AdminTraineeDashboard.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/react */ "./node_modules/.pnpm/@iconify+react@3.2.2_react@18.2.0/node_modules/@iconify/react/dist/iconify.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Dialog */ "./node_modules/.pnpm/@mui+material@5.13.5_oop2qdrl2yflboaypw5tjwfy24/node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/DialogContent */ "./node_modules/.pnpm/@mui+material@5.13.5_oop2qdrl2yflboaypw5tjwfy24/node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/DialogContentText */ "./node_modules/.pnpm/@mui+material@5.13.5_oop2qdrl2yflboaypw5tjwfy24/node_modules/@mui/material/DialogContentText/DialogContentText.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/.pnpm/@mui+material@5.13.5_oop2qdrl2yflboaypw5tjwfy24/node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-draggable */ "./node_modules/.pnpm/react-draggable@4.4.5_biqbaboplfbrettd7655fr4n2y/node_modules/react-draggable/build/cjs/cjs.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DataTable */ "./src/components/DataTable.tsx");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Sidebar */ "./src/components/Sidebar.tsx");
/* harmony import */ var _dummyData_developers2_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dummyData/developers2.json */ "./src/dummyData/developers2.json");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-select */ "./node_modules/.pnpm/react-select@5.7.3_b2wlzab4o7ehpxv6mvz3buccci/node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _assets_avatar_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/avatar.png */ "./src/assets/avatar.png");
/* harmony import */ var _Mutations_manageStudentMutations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Mutations/manageStudentMutations */ "./src/Mutations/manageStudentMutations.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var _components_ControlledSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ControlledSelect */ "./src/components/ControlledSelect.tsx");
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hook/useAuth */ "./src/hook/useAuth.tsx");
/* eslint-disable */
/* istanbul ignore file */




















const organizationToken = localStorage.getItem('orgToken');
const AdminTraineeDashboard = () => {
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_6__["default"])('Trainees');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)();
    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_12__.UserContext);
    const [registerTraineeModel, setRegisterTraineeModel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [removeTraineeModel, setRemoveTraineeModel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [editTraineeModel, setEditTraineeModel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [inviteTraineeModel, setInviteTraineeModel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [traineeData, setTraineeData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [allUserEmail, setAllUserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [cohorts, setCohorts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [cohortName, setCohortName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [teams, setTeams] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [traineeDetails, setTraineeDetails] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [selectedOptionUpdate, setSelectedOptionUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const [selectedTeamOptionUpdate, setSelectedTeamOptionUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const [selectedOption2, setSelectedOption2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [selectedTeamOption, setSelectedTeamOption] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [deleteEmail, setDeleteEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [deleteFromCohort, setDeleteFromCohort] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [editEmail, setEditEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [editCohort, setEditCohort] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [editTeam, setEditTeam] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [inviteEmail, setInviteEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [buttonLoading, setButtonLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const options = [];
    const teamsOptions = [];
    const traineeOptions = [];
    const teamOptions = [];
    function PaperComponent(props) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_draggable__WEBPACK_IMPORTED_MODULE_2___default()), { handle: "#draggable-dialog-title", cancel: '[class*="MuiDialogContent-root"]' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_14__["default"], { ...props })));
    }
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
    const handleClickOpen = (rowData) => {
        const filteredUser = traineeData.filter((item) => item.email == rowData);
        setTraineeDetails(filteredUser[0]);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    /* istanbul ignore next */
    const removeTraineeMod = () => {
        let newState = !removeTraineeModel;
        setRemoveTraineeModel(newState);
    };
    const removeModel = () => {
        let newState = !registerTraineeModel;
        setRegisterTraineeModel(newState);
    };
    /* istanbul ignore next */
    const removeEditModel = () => {
        let newState = !editTraineeModel;
        setEditTraineeModel(newState);
    };
    const inviteModel = () => {
        let newState = !inviteTraineeModel;
        setInviteTraineeModel(newState);
    };
    /* istanbul ignore next */
    const handleToggle = () => {
        setToggle(!toggle);
    };
    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleClick = () => setNav(!nav);
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
            width: 370,
            backgroundColor: '#374151',
            borderColor: 'rgb(20 143 182)',
            text: 'white',
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            /* istanbul ignore next */
            return { ...provided, opacity, transition };
        },
    };
    const columns = [
        { Header: t('name'), accessor: 'name' },
        { Header: t('email'), accessor: 'email' },
        { Header: t('rating'), accessor: 'rating' },
        { Header: t('Team'), accessor: 'team' },
        { Header: t('cohort'), accessor: 'cohort' },
        { Header: t('program'), accessor: 'program' },
        {
            Header: t('action'),
            accessor: '',
            Cell: ({ row }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: ' items-center' + (traineeData?.length > 0 ? ' flex' : ' hidden') },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: "el:file-edit-alt", className: "mr-2", width: "25", height: "25", cursor: "pointer", color: "#148fb6", 
                    /* istanbul ignore next */
                    onClick: () => {
                        setSelectedOptionUpdate({ value: row.original.cohort, label: row.original.cohort });
                        setSelectedTeamOptionUpdate({ value: row.original.team, label: row.original.team });
                        console.log(selectedOption2);
                        console.log(row.original.team);
                        removeEditModel();
                        setEditEmail(row.original.email);
                        setEditCohort(row.original.cohort);
                        setEditTeam(row.original.team);
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: "mdi:close-circle-outline", width: "30", height: "30", cursor: "pointer", color: "#148fb6", 
                    /* istanbul ignore next */
                    onClick: () => {
                        removeTraineeMod();
                        setDeleteEmail(row.original.email);
                        setDeleteFromCohort(row.original.team);
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: "flat-color-icons:view-details", width: "30", height: "30", cursor: "pointer", color: "#148fb6", onClick: () => handleClickOpen(row.original.email) }))),
        },
    ];
    const data = _dummyData_developers2_json__WEBPACK_IMPORTED_MODULE_5__;
    let datum = [];
    const [getUsers] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_15__.useLazyQuery)(_Mutations_manageStudentMutations__WEBPACK_IMPORTED_MODULE_10__.GET_USERS_QUERY, {
        variables: {
            orgToken: organizationToken,
        },
    });
    const [getTraineesQuery] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_15__.useLazyQuery)(_Mutations_manageStudentMutations__WEBPACK_IMPORTED_MODULE_10__.GET_TRAINEES_QUERY, {
        variables: {
            orgToken: organizationToken,
        },
    });
    const [getCohortsQuery] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_15__.useLazyQuery)(_Mutations_manageStudentMutations__WEBPACK_IMPORTED_MODULE_10__.GET_COHORTS_QUERY, {
        variables: {
            orgToken: organizationToken,
        },
    });
    const [getTeamQuery] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_15__.useLazyQuery)(_Mutations_manageStudentMutations__WEBPACK_IMPORTED_MODULE_10__.GET_TEAM_QUERY, {
        variables: {
            orgToken: organizationToken,
            cohort: cohortName,
        },
    });
    function getTeam() {
        getTeamQuery({
            fetchPolicy: 'network-only',
            onCompleted: (data) => {
                setTeams(data.getAllTeamInCohort);
            },
            onError: (error) => {
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(error.message);
            },
        });
    }
    /* istanbul ignore if */
    if (traineeData && traineeData.length > 0) {
        traineeData?.map((data, index) => {
            datum[index] = {};
            datum[index].name = data.profile ? data.profile.name : 'undefined';
            datum[index].email = data.email;
            datum[index].rating = '2';
            datum[index].team = data.team?.name;
            datum[index].cohort = data.team?.cohort?.name;
            datum[index].program = data.team?.cohort?.program?.name;
        });
    }
    const [addMemberToTeam] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_16__.useMutation)(_Mutations_manageStudentMutations__WEBPACK_IMPORTED_MODULE_10__.ADD_MEMBER_TO_TEAM, {
        variables: {
            teamName: Object.values(selectedTeamOption)[1],
            email: Object.values(email)[1],
            orgToken: organizationToken,
        },
        /* istanbul ignore next */
        onCompleted: (data) => {
            setTimeout(() => {
                setButtonLoading(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success(data.addMemberToTeam);
                removeModel();
            }, 500);
        },
        /* istanbul ignore next */
        onError: (err) => {
            setTimeout(() => {
                setButtonLoading(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(err.message);
            }, 1000);
        },
    });
    const [editMemberMutation] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_16__.useMutation)(_Mutations_manageStudentMutations__WEBPACK_IMPORTED_MODULE_10__.EDIT_MEMBER_MUTATION, {
        variables: {
            removedFromTeamName: editTeam,
            addedToTeamName: selectedTeamOptionUpdate.value,
            email: editEmail,
            orgToken: organizationToken,
        },
        onCompleted: (data) => {
            handleToggle();
            setTimeout(() => {
                setButtonLoading(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("Edit trainee's cohort successfully done!");
                removeEditModel();
            }, 500);
        },
        onError: (err) => {
            setTimeout(() => {
                setButtonLoading(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(err.message);
            }, 1000);
        },
    });
    const [removeMemberFromCohort] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_16__.useMutation)(_Mutations_manageStudentMutations__WEBPACK_IMPORTED_MODULE_10__.REMOVE_MEMBER_FROM_COHORT_MUTATION, {
        variables: {
            teamName: deleteFromCohort,
            orgToken: organizationToken,
            email: deleteEmail,
        },
        onCompleted: (data) => {
            setTimeout(() => {
                setButtonLoading(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success(data.removeMemberFromCohort);
                removeTraineeMod();
            }, 1000);
        },
        onError: (err) => {
            setTimeout(() => {
                setButtonLoading(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(err.message);
            }, 500);
        },
    });
    const [inviteUser] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_16__.useMutation)(_Mutations_manageStudentMutations__WEBPACK_IMPORTED_MODULE_10__.INVITE_USER_MUTATION, {
        variables: {
            email: inviteEmail,
            orgToken: organizationToken,
        },
        onCompleted: (data) => {
            setTimeout(() => {
                setButtonLoading(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success(data.inviteUser);
                inviteModel();
            }, 1000);
        },
        onError: (err) => {
            setTimeout(() => {
                setButtonLoading(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(err.message);
            }, 1000);
        },
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        getUsers({
            fetchPolicy: 'network-only',
            onCompleted: (data) => {
                setAllUserEmail(data.getUsers);
            },
            onError: (error) => {
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(error.message);
            },
        });
        getTraineesQuery({
            fetchPolicy: 'network-only',
            onCompleted: (data) => {
                setTraineeData(data.getTrainees);
            },
            onError: (error) => {
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(error.message);
            },
        });
        getCohortsQuery({
            fetchPolicy: 'network-only',
            onCompleted: (data) => {
                setCohorts(data.getCohorts);
            },
            onError: (error) => {
                react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(error.message);
            },
        });
    }, [registerTraineeModel, removeTraineeModel, toggle]);
    /* istanbul ignore if */
    if (allUserEmail.length > 0) {
        allUserEmail.map((trainee, index) => {
            traineeOptions[index] = {};
            traineeOptions[index].value = trainee.email;
            traineeOptions[index].label = trainee.email;
        });
    }
    /* istanbul ignore if */
    if (cohorts.length > 0) {
        cohorts.map((cohort, index) => {
            options[index] = {};
            options[index].value = cohort.name;
            options[index].label = cohort.name;
        });
    }
    if (teams.length > 0) {
        teams.map((team, index) => {
            teamsOptions[index] = {};
            teamsOptions[index].value = team.name;
            teamsOptions[index].label = team.name;
        });
    }
    if (teams.length > 0) {
        teams.map((team, index) => {
            teamOptions[index] = {};
            teamOptions[index].value = team?.name;
            teamOptions[index].label = team?.name;
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " dark:bg-dark-bg rounded-lg" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_17__["default"], { open: open, onClose: handleClose, PaperComponent: PaperComponent, "aria-labelledby": "draggable-dialog-title", className: "rounded-lg", fullWidth: true },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_18__["default"], { className: "dark:bg-dark-bg font-sans" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_19__["default"], { className: " dark:bg-dark-bg font-sans" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "font-bold text-sm dark:text-white text-center  dark:bg-dark-bg font-sans" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-[#4aa5be] h-[150px]" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "absolute top-[80px] left-[40px] border-4 border-white font-sans", style: {
                                        margin: '0 auto',
                                        borderRadius: '50%',
                                        marginBottom: '20px',
                                        width: '150px',
                                        height: '150px',
                                    }, src: traineeDetails &&
                                        traineeDetails.profile &&
                                        traineeDetails.profile.avatar
                                        ? traineeDetails.profile.avatar
                                        : _assets_avatar_png__WEBPACK_IMPORTED_MODULE_9__["default"], alt: "Logo" })),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "font-bold text-[18px]  capitalize pt-5 dark:text-white text-right dark:bg-dark-bg text-sm font-sans", style: { cursor: 'move', fontWeight: 'bold' }, id: "draggable-dialog-title" }, traineeDetails && traineeDetails.profile
                                ? traineeDetails.profile.name
                                : 'Un availabe'),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-sm font-sans", style: {
                                    display: 'flex',
                                    gap: '50px',
                                    justifyContent: 'space-between',
                                    paddingBlock: '10px',
                                    marginTop: '30px',
                                    borderBottom: '0.5px solid #EAECEE',
                                } },
                                ' ',
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "EMAIL"),
                                    ' '),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null,
                                        ' ',
                                        traineeDetails && traineeDetails.profile
                                            ? traineeDetails.email
                                            : 'Un availabe'))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-sm font-sans", style: {
                                    display: 'flex',
                                    gap: '50px',
                                    justifyContent: 'space-between',
                                    paddingBlock: '10px',
                                    marginTop: '30px',
                                    borderBottom: '0.5px solid #EAECEE',
                                } },
                                ' ',
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "START DATE")),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, traineeDetails && traineeDetails.team
                                    ? traineeDetails.team.cohort.startDate.split('T')[0]
                                    : 'Un availabe')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-sm font-sans", style: {
                                    display: 'flex',
                                    gap: '50px',
                                    justifyContent: 'space-between',
                                    paddingBlock: '10px',
                                    borderBottom: '0.5px solid #EAECEE',
                                } },
                                ' ',
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "PROGRAM"),
                                    ' '),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null,
                                        ' ',
                                        traineeDetails && traineeDetails.team
                                            ? traineeDetails.team.cohort.program.name
                                            : 'Un availabe'))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-sm font-sans", style: {
                                    display: 'flex',
                                    gap: '50px',
                                    justifyContent: 'space-between',
                                    paddingBlock: '10px',
                                    borderBottom: '0.5px solid #EAECEE',
                                } },
                                ' ',
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "PHASE"),
                                    ' '),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, traineeDetails && traineeDetails.team
                                        ? traineeDetails.team.cohort.phase.name
                                        : 'Un availabe'))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-sm font-sans", style: {
                                    display: 'flex',
                                    gap: '50px',
                                    justifyContent: 'space-between',
                                    paddingBlock: '10px',
                                    marginBottom: '20px',
                                    borderBottom: '0.5px solid #EAECEE',
                                } },
                                ' ',
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "COHORT"),
                                    ' '),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null,
                                        ' ',
                                        traineeDetails && traineeDetails.team
                                            ? traineeDetails.team.cohort.name
                                            : 'Un availabe'))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-sm font-sans", style: {
                                    display: 'flex',
                                    gap: '50px',
                                    justifyContent: 'space-between',
                                    paddingBlock: '10px',
                                    marginBottom: '20px',
                                    borderBottom: '0.5px solid #EAECEE',
                                } },
                                ' ',
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "MANAGER"),
                                    ' '),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null,
                                        ' ',
                                        traineeDetails && traineeDetails.team
                                            ? traineeDetails.team.cohort.program.manager.profile
                                                .name
                                            : 'Un availabe'))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], { "data-testid": "removeInviteModel", variant: "info", size: "sm", style: "w-[20%] md:w-1/4 text-sm font-sans", onClick: () => handleClose() }, t('Close'))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center  px-4 ${inviteTraineeModel === true ? 'block' : 'hidden'}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12 " }, t('Send Invitation')),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12 " }, t('Fill in the email to invite a user to DevPulse.'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-white input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-white grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { value: inviteEmail, onChange: (e) => {
                                        setInviteEmail(e.target.value);
                                    }, type: "email", name: "email", className: " dark:bg-dark-tertiary text-black border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full", placeholder: t('email') }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], { "data-testid": "removeInviteModel", variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", onClick: () => inviteModel() }, t('Cancel')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "primary", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", onClick: () => {
                                    setButtonLoading(true);
                                    inviteUser();
                                }, loading: buttonLoading }, t('Invite'))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen z-20 bg-black bg-opacity-40 backdrop-blur-sm absolute flex items-center justify-center  px-4 ${editTraineeModel === true ? 'block' : 'hidden'}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12 " }, t('Edit Trainee')),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12 " }, t('Choose a different cohort for the trainee from the dropdown below.'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-white input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-white grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ControlledSelect__WEBPACK_IMPORTED_MODULE_11__["default"], { placeholder: t('Select cohort'), defaultValue: selectedOptionUpdate, noRegister: {
                                        onChange: (e) => {
                                            setSelectedOptionUpdate(e);
                                            setSelectedTeamOptionUpdate({ value: '', label: 'Select team' });
                                            setCohortName(e.value);
                                            getTeam();
                                        },
                                    }, options: options }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-white input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-white grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ControlledSelect__WEBPACK_IMPORTED_MODULE_11__["default"], { placeholder: t('Select team'), defaultValue: selectedTeamOptionUpdate, noRegister: {
                                        onChange: (e) => {
                                            setSelectedTeamOptionUpdate(e);
                                        },
                                    }, options: teamsOptions.filter((option) => {
                                        return option.value !== editTeam;
                                    }) }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], { "data-testid": "removeModel1", variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", onClick: () => removeEditModel() }, t('Cancel')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "primary", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", onClick: () => {
                                    setButtonLoading(true);
                                    setButtonLoading(true);
                                    if (editEmail && editCohort) {
                                        editMemberMutation();
                                    }
                                    else {
                                        react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error('Please select the trainee again ');
                                    }
                                }, loading: buttonLoading }, t('Proceed'))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center  px-4 ${removeTraineeModel === true ? 'block' : 'hidden'}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12 " }, t('Remove Trainee')),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12 " }, t('Are you sure you want to remove trainee from this cohort?'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], { "data-testid": "removeModel2", variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", onClick: () => removeTraineeMod() }, t('Cancel')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "primary", size: "sm", "data-testid": "removeMemberFromCohort", style: "w-[30%] md:w-1/4 text-sm font-sans", onClick: () => {
                                    setButtonLoading(true);
                                    if (deleteEmail && deleteFromCohort) {
                                        removeMemberFromCohort();
                                    }
                                    else {
                                        react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error('Please select the trainee again ');
                                    }
                                }, loading: buttonLoading }, t('Proceed'))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center  px-4 ${registerTraineeModel === true ? 'block' : 'hidden'}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12 " }, t('Add Trainee')),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: " py-3 px-8" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_20__["default"], { placeholder: t('choose trainee'), className: "my-react-select-container", classNamePrefix: "my-react-select", styles: customStyles, defaultValue: email, onChange: (e) => {
                                        setEmail(e);
                                        // setSelectedOption2(e);
                                    }, options: traineeOptions, isSearchable: true }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-white input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-white grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ControlledSelect__WEBPACK_IMPORTED_MODULE_11__["default"], { placeholder: t('Select cohort'), defaultValue: selectedOption, noRegister: {
                                        onChange: (e) => {
                                            setSelectedOption(e);
                                            setCohortName(e.value);
                                            getTeam();
                                        },
                                    }, options: options }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-white input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-white grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ControlledSelect__WEBPACK_IMPORTED_MODULE_11__["default"], { placeholder: t('Select Team'), defaultValue: selectedTeamOption, noRegister: {
                                        onChange: (e) => {
                                            setSelectedTeamOption(e);
                                        },
                                    }, options: teamOptions }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], { "data-testid": "removeModel", variant: "info", size: "sm", style: "w-[30%] md:w-1/4 text-sm font-sans", onClick: () => removeModel() }, t('Cancel')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "primary", size: "sm", "data-testid": "saveButton", style: "w-[30%] md:w-1/4 text-sm font-sans", onClick: () => {
                                    setButtonLoading(true);
                                    addMemberToTeam();
                                }, loading: buttonLoading }, t('save'))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col h-screen" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], { toggle: handleClick, style: "hidden lg:flex" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg  min-h-screen overflow-y-auto overflow-x-hidden" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-left px-10 lg:px-60 pt-24 pb-8" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "space-x-8 lg:ml-7" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "primary", size: "lg", "data-testid": "registerModel", onClick: removeModel },
                                        ' ',
                                        t('add'),
                                        " +",
                                        ' '),
                                    user?.role === 'coordinator' || undefined ? ('') : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "primary", size: "lg", "data-testid": "inviteModel", onClick: inviteModel }, t('Invite'))))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-3 md:px-8" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DataTable__WEBPACK_IMPORTED_MODULE_3__["default"], { data: traineeData?.length > 0 ? datum : [{}], columns: columns, title: t('Trainees list') })))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminTraineeDashboard);


/***/ }),

/***/ "./src/dummyData/developers2.json":
/*!****************************************!*\
  !*** ./src/dummyData/developers2.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Kevin Shema","email":"keshem5@gmail.com","rating":"1","cohort":"1","program":"Core concept"},{"name":"Muneza John","email":"John@gmail.com","rating":"2","cohort":"1","program":"Apprenticeship"},{"name":"Gatare Olivier","email":"gatareo@gmail.com","rating":"0","cohort":"2","program":"Team project"},{"name":"Kevin Uwitonze","email":"keuwit@gmail.com","rating":"1","cohort":"2","program":"Apprenticeship"},{"name":"Nsabimana Blaise","email":"blaise@gmail.com","rating":"2","cohort":"3","program":"Core concept"},{"name":"Damascene Kaneza","email":"damkan@gmail.com","rating":"2","cohort":"3","program":"Team project"},{"name":"Umutoni Alice","email":"ali@gmail.com","rating":"0","cohort":"4","program":"Team project"},{"name":"Ange Ishimwe","email":"ishange@gmail.com","rating":"1","cohort":"4","program":"Core concept"},{"name":"Keza Belinda","email":"kezabe5@gmail.com","rating":"1","cohort":"5","program":"Apprenticeship"},{"name":"Bwiza Gisele","email":"bwiza@gmail.com","rating":"2","cohort":"5","program":"Team project"}]');

/***/ })

}]);
//# sourceMappingURL=src_pages_AdminTraineeDashboard_tsx.js.map