"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_pages_TraineeRatingDashboard_tsx"],{

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


/***/ }),

/***/ "./src/pages/TraineeRatingDashboard.tsx":
/*!**********************************************!*\
  !*** ./src/pages/TraineeRatingDashboard.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/.pnpm/@headlessui+react@1.7.15_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/listbox/listbox.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/.pnpm/@headlessui+react@1.7.15_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/.pnpm/@headlessui+react@1.7.15_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/dialog/dialog.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/.pnpm/@headlessui+react@1.7.15_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/combobox/combobox.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/SelectorIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/CheckIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/PlusIcon.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ "./src/components/Sidebar.tsx");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _Mutations_MakeDefault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Mutations/MakeDefault */ "./src/Mutations/MakeDefault.tsx");
/* harmony import */ var _Mutations_Ratings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Mutations/Ratings */ "./src/Mutations/Ratings.tsx");
/* harmony import */ var _Mutations_manageStudentMutations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Mutations/manageStudentMutations */ "./src/Mutations/manageStudentMutations.tsx");
/* harmony import */ var _dummyData_ratings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dummyData/ratings */ "./src/dummyData/ratings.ts");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DataTable */ "./src/components/DataTable.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/react */ "./node_modules/.pnpm/@iconify+react@3.2.2_react@18.2.0/node_modules/@iconify/react/dist/iconify.mjs");
/* harmony import */ var _GradingSystemQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GradingSystemQuery */ "./src/pages/GradingSystemQuery.ts");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useQuery.js");


















function classNames(...classes) {
    /* istanbul ignore next */
    return classes.filter(Boolean).join(' ');
}
const TraineeRatingDashboard = () => {
    const organizationToken = localStorage.getItem('orgToken');
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_1__["default"])('Ratings');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation)();
    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [trainee, setTrainee] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [cohorts, setCohorts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [selectedCohort, setSelectedCohort] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(cohorts[0]);
    const [selectedUser, setSelectedUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [selectedSprint, setSelectedSprint] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_dummyData_ratings__WEBPACK_IMPORTED_MODULE_7__.sprint[0]);
    const [cohortName, setCohortName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({ cohortName: '' });
    const [disable, setDisable] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const [ratingData, setRatingData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        quality: '0',
        qualityRemark: '',
        quantity: '0',
        quantityRemark: '',
        professional: '0',
        professionalRemark: '',
        userEmail: '',
        average: '',
    });
    const [rows, setRows] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        quality: '0',
        qualityremark: '',
        quantity: '0',
        quantityremark: '',
        professional: '0',
        professionalRemark: '',
        bodyQuantity: '',
        bodyQuality: '',
        bodyProfessional: '',
        sprint: '0',
        user: '',
        id: '',
    });
    /* istanbul ignore next */
    let [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [showActions, setShowActions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [showRemarks, setShowRemarks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [ratings, setRatings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [trainees, setTrainees] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [ratingsByCohort, setRatingsByCohort] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [defaultGrading, setDefaultGrading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [selectedTrainee, setSelectedTrainee] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(trainee[0]);
    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    /* istanbul ignore next */
    const filteredTrainees = query === ''
        ? trainee
        : trainee.filter((trainee) => trainee?.email
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')));
    /* istanbul ignore next */
    const filteredcohorts = query === ''
        ? cohorts
        : cohorts.filter((cohorts) => cohorts?.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')));
    const closeModal = /* istanbul ignore next */ () => {
        /* istanbul ignore next */
        // setIsOpen(false);
        /* istanbul ignore next */
        setShowActions(false);
        /* istanbul ignore next */
        setShowRemarks(false);
    };
    const closeCancel = () => {
        /* istanbul ignore next */
        setIsOpen(false);
        /* istanbul ignore next */
        setShowActions(false);
        /* istanbul ignore next */
        setShowRemarks(false);
    };
    const openModal = () => {
        setIsOpen(true);
    };
    const handleClick = 
    /* istanbul ignore next */
    () => 
    /* istanbul ignore next */
    setNav(!nav);
    const handleToggle = /* istanbul ignore next */ () => {
        /* istanbul ignore next */
        setToggle(!toggle);
    };
    const handleSubmit = /* istanbul ignore next */ (e) => {
        /* istanbul ignore next */
        e.preventDefault();
        /* istanbul ignore next */
        createRatings();
        /* istanbul ignore next */
        handleToggle();
        /* istanbul ignore next */
    };
    const handleUpdate = (e) => {
        /* istanbul ignore next */
        e.preventDefault();
        /* istanbul ignore next */
        updateRatings();
        /* istanbul ignore next */
        handleToggle();
        /* istanbul ignore next */
        closeModal();
    };
    const handleRatingChange = (e) => {
        /* istanbul ignore next */
        setRatingData((prevRatingData) => {
            /* istanbul ignore next */
            return {
                ...prevRatingData,
                [e.target.name]: e.target.value,
            };
        });
    };
    const vardata = ratingsByCohort;
    /* istanbul ignore next */
    const columns = [
        { Header: `${t('Email')}`, accessor: 'user[email]' },
        { Header: `${t('Phase')}`, accessor: 'cohort[phase[name]]' },
        { Header: `${t('Sprint')}`, accessor: 'sprint' },
        { Header: `${t('Quantity')}`, accessor: 'quantity' },
        { Header: `${t('Quality')}`, accessor: 'quality' },
        { Header: `${t('Professional skills')}`, accessor: 'professional_Skills' },
        { Header: `${t('Average')}`, accessor: 'average' },
        {
            Header: `${t('Actions')}`,
            accessor: '',
            Cell: ({ row }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cursor-pointer" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_10__.Icon, { icon: "bx:edit-alt", color: "#148fb6", onClick: () => {
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
                            });
                        } })))),
        },
        {
            Header: `${t('Remarks')}`,
            accessor: '',
            Cell: ({ row }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cursor-pointer" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_10__.Icon, { icon: "ant-design:comment-outlined", width: "25", height: "25", color: "#148fb6", onClick: () => {
                            setShowRemarks(!showRemarks);
                            setShowActions(!showActions);
                            setRows({
                                ...rows,
                                quality: row.original.quality,
                                qualityremark: row.original.qualityRemark,
                                bodyQuality: row.original.bodyQuality,
                                quantity: row.original.quantity,
                                quantityremark: row.original.quantityRemark,
                                bodyQuantity: row.original.bodyQuantity,
                                professional: row.original.professional_Skills,
                                professionalRemark: row.original.professionalRemark,
                                bodyProfessional: row.original.bodyProfessional,
                                sprint: row.original.sprint,
                                user: row.original.user.email,
                                id: row.original.user.id,
                            });
                        } })))),
        },
    ];
    /* istanbul ignore next */
    const [createRatings] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_13__.useMutation)(_Mutations_Ratings__WEBPACK_IMPORTED_MODULE_5__.ADD_RATING, {
        variables: {
            cohort: selectedCohort?.id,
            user: ratingData.userEmail,
            sprint: selectedSprint.name,
            quantity: ratingData.quantity.toString(),
            quantityRemark: ratingData.quantityRemark.toString(),
            quality: ratingData.quality.toString(),
            qualityRemark: ratingData.qualityRemark.toString(),
            professionalSkills: ratingData.professional.toString(),
            professionalRemark: ratingData.professionalRemark.toString(),
            orgToken: organizationToken,
        },
        onError: (err) => {
            react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(err.message || 'Something went wrong');
            openModal();
        },
        onCompleted: ({ createRatings }) => {
            handleToggle();
            closeCancel();
            react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success('Successfully done');
        },
    });
    /* istanbul ignore next */
    const [updateRatings] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_13__.useMutation)(_Mutations_Ratings__WEBPACK_IMPORTED_MODULE_5__.UPDATE_RATING, {
        variables: {
            user: rows.id,
            sprint: rows.sprint,
            quantity: rows?.quantity,
            quantityRemark: rows?.quantityremark,
            quality: rows?.quality,
            qualityRemark: rows?.qualityremark,
            professionalSkills: rows?.professional,
            professionalRemark: rows?.professionalRemark,
            orgToken: organizationToken,
        },
        onError: (err) => {
            react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(err.message || 'something went wrong');
            setShowActions(true);
        },
        onCompleted: (data) => {
            react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success('Successfully updated!');
        },
    });
    const [DefaultGrade] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_14__.useLazyQuery)(_Mutations_MakeDefault__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_GRADE, {});
    const [getRatings] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_14__.useLazyQuery)(_Mutations_Ratings__WEBPACK_IMPORTED_MODULE_5__.GET_RATINGS, {
        variables: {
            orgToken: organizationToken,
        },
    });
    const [RatingByCohort] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_14__.useLazyQuery)(_Mutations_Ratings__WEBPACK_IMPORTED_MODULE_5__.RATING_BY_COHORT, {
        variables: {
            cohortName: selectedCohort?.name,
        },
    });
    // const [getTraineesCohorts] = useLazyQuery(GET_COHORT_TRAINEES_QUERY, {
    //   variables: {
    //   orgToken: organizationToken,
    //   cohort: cohortName,
    //   }
    //   });
    const [getCohorts] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_14__.useLazyQuery)(_Mutations_manageStudentMutations__WEBPACK_IMPORTED_MODULE_6__.GET_COHORTS_QUERY, {
        variables: {
            orgToken: organizationToken,
        },
    });
    const [getUsers] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_14__.useLazyQuery)(_Mutations_manageStudentMutations__WEBPACK_IMPORTED_MODULE_6__.GET_COHORT_TRAINEES_QUERY, {
        variables: {
            orgToken: organizationToken,
            cohort: cohortName,
        },
    });
    const { data } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_15__.useQuery)(_GradingSystemQuery__WEBPACK_IMPORTED_MODULE_11__["default"]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        getRatings({
            fetchPolicy: 'network-only',
            /* istanbul ignore next */
            onCompleted: (data) => {
                /* istanbul ignore next */
                setRatings(data?.fetchRatings);
            },
            onError: /* istanbul ignore next */ (error) => {
                /* istanbul ignore next */
                react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(error?.message || 'Failed to load the data');
            },
        });
        DefaultGrade({
            fetchPolicy: 'network-only',
            onCompleted: (data) => {
                /* istanbul ignore next */
                setDefaultGrading(data?.getDefaultGrading[0]?.grade);
            },
            onError: (error) => {
                /* istanbul ignore next */
                react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(error?.message || 'Failed to load the data');
            },
        });
        getCohorts({
            fetchPolicy: 'network-only',
            /* istanbul ignore next */
            onCompleted: (data) => {
                /* istanbul ignore next */
                const cohorts = data?.getCohorts;
                /* istanbul ignore next */
                data?.getCohorts?.length !== 0
                    ? setCohorts(cohorts)
                    : setCohorts(cohorts);
            },
            onError: (error) => {
                /* istanbul ignore next */
                react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(error?.message || 'Failed to load the data');
            },
        });
    }, [toggle, updateRatings]);
    /* istanbul ignore next */
    const defaultRating = data?.getDefaultGrading?.filter((x) => x.defaultGrading);
    function getRatingByCohort() {
        /* istanbul ignore next */
        RatingByCohort({
            fetchPolicy: 'network-only',
            onCompleted: (data) => {
                /* istanbul ignore next */
                setRatingsByCohort(data?.fetchRatingByCohort);
            },
            onError: (error) => {
                /* istanbul ignore next */
                react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(error?.message || 'Failed to load the data');
            },
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col h-screen bg-light-bg dark:bg-dark-frame-bg" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], { toggle: handleClick, style: "hidden lg:flex" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg max-h-full overflow-y-auto overflow-x-hidden" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col w-3/5 mx-auto md:flex-row relative  justify-between px-2 md:px-5 lg:px-10 pt-24 pb-8 mt-4" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col md:ml-a w-40" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Listbox, { value: selectedCohort, onChange: 
                                        /* istanbul ignore next */
                                        (e) => {
                                            /* istanbul ignore next */
                                            setSelectedCohort(e);
                                            setCohortName(e.name);
                                            setDisable(false);
                                            getUsers({
                                                fetchPolicy: 'network-only',
                                                /* istanbul ignore next */
                                                onCompleted: (data) => {
                                                    setTrainee(data?.getCohortTrainees);
                                                    /* istanbul ignore next */
                                                },
                                                onError: /* istanbul ignore next */ (error) => {
                                                    /* istanbul ignore next */
                                                    react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(error?.message || 'Something went wrong');
                                                },
                                            });
                                            getRatingByCohort();
                                        } }, ({ open }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Listbox.Label, { className: "block text-lg font-medium text-gray-700 dark:text-dark-text-fill mt-2" }, t('Cohort')),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative mt-1" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Listbox.Button, { className: "relative md:w-full p-30 h-8 cursor-default rounded-md border border-primary bg-primary py-2 pl-3 pr-10 text-left shadow-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:text-sm", "data-testid": "cohortList" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "flex items-center" },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "ml-3 block truncate text-white" }, selectedCohort?.name)),
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2" },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_17__["default"], { className: "h-5 w-5 text-white", "aria-hidden": "true" }))),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_18__.Transition, { show: open, as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Listbox.Options, { className: "absolute z-10 mt-1 max-h-56 w-1/2 md:w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, cohorts?.map((cohort) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Listbox.Option, { key: cohort?.id, className: ({ active }) => classNames(active
                                                        ? 'text-white bg-primary'
                                                        : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9'), value: cohort }, ({ selected, active }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center" },
                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: classNames(selected
                                                                ? 'font-semibold'
                                                                : 'font-normal', 'ml-3 block truncate') }, cohort?.name)),
                                                    selected ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: classNames(active
                                                            ? 'text-white'
                                                            : 'text-primary', 'absolute inset-y-0 right-0 flex items-center pr-4') },
                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_19__["default"], { className: "h-5 w-5", "aria-hidden": "true" }))) : null)))))))))))),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mt-8" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "button", onClick: openModal, "data-testid": "addRatingButton", className: "rounded-md w-40 text-base flex flex-row bg-primary p-3 font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" },
                                        t('Add New Rating'),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_20__["default"], { className: "w-4 mt-1" }))),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_18__.Transition, { appear: true, show: isOpen, as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, "data-testid": "modalTransistion" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_21__.Dialog, { as: "div", className: "relative z-10", onClose: closeModal },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_18__.Transition.Child, { as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50" })),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed inset-0 overflow-y-auto" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex min-h-full  items-center justify-center p-4 text-center" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_18__.Transition.Child, { as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_21__.Dialog.Panel, { className: "w-full overflow-auto lg:mx-60 xl:mx-96 h-[800px] md:h-[600px] transform  rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all" },
                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { onSubmit: handleSubmit },
                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_21__.Dialog.Title, { as: "h3", className: "text-lg font-medium leading-6 text-gray-900 dark:text-dark-text-fill" }, t('Add New Trainee Rating')),
                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mt-10 md:mt-12 grid grid-cols-4" },
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_22__.Combobox, { value: selectedUser, onChange: (e) => {
                                                                        /* istanbul ignore next */
                                                                        setSelectedUser(e);
                                                                        /* istanbul ignore next */
                                                                        setRatingData({
                                                                            ...ratingData,
                                                                            userEmail: e.id,
                                                                        });
                                                                    }, "data-testid": "traineesCombo" },
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col col-span-6 md:col-span-1" },
                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_22__.Combobox.Label, { className: "text-lg  font-bold pr-2 " }, t('Trainee')),
                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative mt-0 md:mt-4" },
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative w-full cursor-default overflow-hidden rounded-lg bg-primary text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm" },
                                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_22__.Combobox.Input, { className: "w-full border-none py-2 pl-3 pr-10 text-sm leading-5 bg-primary text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white", displayValue: (trainee) => trainee?.email, onChange: (event) => setQuery(event.target.value), "data-testid": "traineeComboInput" }),
                                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_22__.Combobox.Button, { className: "absolute inset-y-0 right-0 flex items-center pr-2", "data-testid": "traineeList" },
                                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_17__["default"], { className: "h-5 w-5 text-white", "aria-hidden": "true" }))),
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_18__.Transition, { as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", afterLeave: () => setQuery('') },
                                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_22__.Combobox.Options, { className: "z-20 absolute mt-1 ml-auto max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" },
                                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_22__.Combobox.Option, { key: trainee.id, className: `relative cursor-default select-none py-2 pl-10 pr-4 bg-gray-200 text-gray-900`, value: trainee.id, disabled: true },
                                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: `block truncate font-medium` }, t('Select Trainee'))),
                                                                                    filteredTrainees?.length === 0 &&
                                                                                        query !== '' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative cursor-default select-none py-2 px-4 text-gray-700", "data-testid": "notFoundDiv" }, t('No trainee found.'))) : (filteredTrainees?.map((trainee) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_22__.Combobox.Option, { "data-testid": "traineeOption", key: trainee?.id, className: ({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                                                                                            ? 'bg-primary text-white'
                                                                                            : 'text-gray-900'}`, value: trainee }, ({ selected, active }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: `block truncate ${selected
                                                                                                ? 'font-medium'
                                                                                                : 'font-normal'}` }, trainee?.email),
                                                                                        selected ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: `absolute inset-y-0 left-0 flex items-center pl-3 ${active
                                                                                                ? 'text-white'
                                                                                                : 'text-primary'}` },
                                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_19__["default"], { className: "h-5 w-5", "aria-hidden": "true" }))) : null))))))))))),
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col ml-auto col-span-0 md:col-span-3" },
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Listbox, { value: selectedSprint, onChange: setSelectedSprint }, ({ open }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Listbox.Label, { className: "block text-lg font-bold mt-2" }, t(' Sprint')),
                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative mt-1 w-full" },
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Listbox.Button, { "data-testid": "sprintList", className: "relative w-full cursor-default rounded-md border border-primary bg-primary py-2 pl-3 pr-10 text-left shadow-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:text-sm" },
                                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "flex items-center" },
                                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "ml-3 block truncate text-white" }, selectedSprint.name)),
                                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2" },
                                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_17__["default"], { className: "h-5 w-5 text-white", "aria-hidden": "true" }))),
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_18__.Transition, { show: open, as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Listbox.Options, { className: "absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, _dummyData_ratings__WEBPACK_IMPORTED_MODULE_7__.sprint.map((sprint) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Listbox.Option, { key: sprint.id, className: ({ active }) => classNames(active
                                                                                        ? 'text-white bg-primary'
                                                                                        : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9'), value: sprint }, ({ selected, active }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center" },
                                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: classNames(selected
                                                                                                ? 'font-semibold'
                                                                                                : 'font-normal', 'ml-3 block truncate') }, sprint.name)),
                                                                                    selected ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: classNames(active
                                                                                            ? 'text-white'
                                                                                            : 'text-primary', 'absolute inset-y-0 right-0 flex items-center pr-4') },
                                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_19__["default"], { className: "h-5 w-5", "aria-hidden": "true" }))) : null))))))))))))),
                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-gray-100 dark:bg-dark-frame-bg rounded-md p-2 my-2 mt-6 md:mt-8 flex flex-col md:flex-row" },
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mx-0 md:mx-2 my-1 w-full flex flex-col md:flex-col justify-start items-center " },
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "default", size: "md", style: "text-center w-full rounded-lg bg-gray-700 text-white focus:outline-none p-1 md:p-2" }, t(' Quality')),
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-start items-start w-full my-0 md:my-2" },
                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { name: "quality", value: ratingData.quality, onChange: (e) => setRatingData({
                                                                                ...ratingData,
                                                                                quality: e.target.value,
                                                                            }), id: "qualityRating", className: "rounded-md appearance-none relative block w-full px-3 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white " },
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "-1", disabled: true }, t('Select rating')),
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, defaultGrading?.map((grade) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, grade))))),
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { onChange: (e) => setRatingData({
                                                                            ...ratingData,
                                                                            qualityRemark: e.target.value,
                                                                        }), id: "", rows: 5, className: "rounded-md w-full my-1 md:my-3  p-3 border dark:bg-dark-bg sm:text-sm  dark:text-dark-text-fill dark:border-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10", placeholder: t('Quality ratings remark'), name: "qualityDescription", "data-testid": "qualityDescriptionTextArea" })),
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mx-0 md:mx-2  my-1 w-full flex flex-col md:flex-col justify-start items-center " },
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "default", size: "md", style: "text-center w-full rounded-lg bg-gray-700 text-white focus:outline-none p-1 md:p-2" }, t('Quantity')),
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-start items-start w-full my-0 md:my-2" },
                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { name: "quantity", id: "quantityRating", value: ratingData.quantity, onChange: (e) => setRatingData({
                                                                                ...ratingData,
                                                                                quantity: e.target.value,
                                                                            }), className: "rounded-md appearance-none relative block w-full px-3 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white " },
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "-1", disabled: true }, t('Select rating')),
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, defaultGrading?.map((grade) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, grade))))),
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { name: "quantityDescription", id: "", onChange: (e) => setRatingData({
                                                                            ...ratingData,
                                                                            quantityRemark: e.target.value,
                                                                        }), rows: 5, className: "rounded-md w-full  my-1 md:my-3  p-3 border dark:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white", placeholder: t('Quantity rating remark') })),
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mx-0 md:mx-2 my-1 w-full flex flex-col md:flex-col justify-start items-center " },
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "default", size: "md", style: "text-center w-full rounded-lg bg-gray-700 text-white focus:outline-none p-1 md:p-2" }, t('Professionalism')),
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-start items-start w-full my-0 md:my-2" },
                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { name: "professional", id: "qualityRating", value: ratingData.professional, onChange: handleRatingChange, className: "rounded-md appearance-none relative block w-full px-3 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white " },
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "-1", disabled: true }, t('Select rating')),
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, defaultGrading?.map((grade) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, grade))))),
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { name: "proffessionalDescription", id: "", onChange: (e) => setRatingData({
                                                                            ...ratingData,
                                                                            professionalRemark: e.target.value,
                                                                        }), rows: 5, className: "rounded-md w-full my-1 md:my-3  p-3 border dark:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white", placeholder: t('Professional rating remark') }))),
                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mt-4 md:mt-8" },
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "button", className: "inline-flex justify-center rounded-md border border-transparent bg-gray-400 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2", onClick: closeCancel }, t('Cancel')),
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "submit", className: "inline-flex justify-center float-right rounded-md border border-transparent  bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2", onClick: closeModal, disabled: disable }, t('Save ratings')))))))))),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_18__.Transition, { appear: true, show: showActions, as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, "data-testid": "modalTransistion" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_21__.Dialog, { as: "div", className: "relative z-10", onClose: closeModal },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_18__.Transition.Child, { as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50" })),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed inset-0 overflow-y-auto" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex min-h-full  items-center justify-center p-4 text-center" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_18__.Transition.Child, { as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_21__.Dialog.Panel, { className: "w-full overflow-auto lg:mx-60 xl:mx-96 h-[800px] md:h-[500px] transform  rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all" },
                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { onSubmit: handleUpdate },
                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_21__.Dialog.Title, { as: "h3", className: "text-lg font-medium leading-6 text-gray-900 dark:text-dark-text-fill" }, t('Update rating')),
                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-gray-100 dark:bg-dark-frame-bg rounded-md p-2 my-2 mt-6 md:mt-8 flex flex-col md:flex-row" },
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mx-0 md:mx-2 my-1 w-full flex flex-col md:flex-col justify-start items-center " },
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "default", size: "md", style: "text-center w-full rounded-lg bg-gray-700 text-white focus:outline-none p-1 md:p-2" }, t('Quality')),
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-start items-start w-full my-0 md:my-2" },
                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { name: "quality", value: rows.quality, onChange: (e) => {
                                                                                setRows({
                                                                                    ...rows,
                                                                                    quality: e.target.value,
                                                                                });
                                                                            }, id: "qualityRating", className: "rounded-md appearance-none relative block w-full px-3 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white " },
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "-1", disabled: true }, t('Select rating')),
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, defaultGrading?.map((grade) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, grade))))),
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { value: rows.qualityremark, onChange: (e) => setRows({
                                                                            ...rows,
                                                                            qualityremark: e.target.value,
                                                                        }), id: "", rows: 5, className: "rounded-md w-full my-1 md:my-3  p-3 border dark:bg-dark-bg sm:text-sm  dark:text-dark-text-fill dark:border-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10", placeholder: "Quality ratings remark", name: "qualityDescription", "data-testid": "qualityDescriptionTextArea" }),
                                                                    ' '),
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mx-0 md:mx-2  my-1 w-full flex flex-col md:flex-col justify-start items-center " },
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "default", size: "md", style: "text-center w-full rounded-lg bg-gray-700 text-white focus:outline-none p-1 md:p-2" }, t('Quantity')),
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-start items-start w-full my-0 md:my-2" },
                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { name: "quantity", id: "quantityRating", value: rows.quantity, onChange: (e) => setRows({
                                                                                ...rows,
                                                                                quantity: e.target.value,
                                                                            }), className: "rounded-md appearance-none relative block w-full px-3 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white " },
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "-1", disabled: true }, t('Select rating')),
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, defaultGrading?.map((grade) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, grade))))),
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { name: "quantityDescription", id: "", value: rows.quantityremark, onChange: (e) => setRows({
                                                                            ...rows,
                                                                            quantityremark: e.target.value,
                                                                        }), rows: 5, className: "rounded-md w-full  my-1 md:my-3  p-3 border dark:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white", placeholder: "Quantity rating remark" })),
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mx-0 md:mx-2 my-1 w-full flex flex-col md:flex-col justify-start items-center " },
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "default", size: "md", style: "text-center w-full rounded-lg bg-gray-700 text-white focus:outline-none p-1 md:p-2" }, t('Professionalism')),
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-start items-start w-full my-0 md:my-2" },
                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { name: "professional", id: "qualityRating", value: rows.professional, onChange: (e) => setRows({
                                                                                ...rows,
                                                                                professional: e.target.value,
                                                                            }), className: "rounded-md appearance-none relative block w-full px-3 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white " },
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "-1", disabled: true }, t('Select rating')),
                                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, defaultGrading?.map((grade) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, grade))))),
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { name: "proffessionalDescription", id: "", value: rows.professionalRemark, onChange: (e) => setRows({
                                                                            ...rows,
                                                                            professionalRemark: e.target.value,
                                                                        }), rows: 5, className: "rounded-md w-full my-1 md:my-3  p-3 border dark:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white", placeholder: "Professional rating remark" }))),
                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mt-4 md:mt-8" },
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "submit", className: "inline-flex justify-center float-right rounded-md border border-transparent  bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" }, t('Save')),
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "button", className: "inline-flex justify-center rounded-md border border-transparent bg-gray-400 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2", onClick: closeCancel }, t('Cancel')))))))))),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_18__.Transition, { appear: true, show: showRemarks, as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, "data-testid": "modalTransistion" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_21__.Dialog, { as: "div", className: "relative z-10", onClose: closeModal },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_18__.Transition.Child, { as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50" })),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed inset-0 overflow-y-auto" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex min-h-full  items-center justify-center p-4 text-center" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_18__.Transition.Child, { as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_21__.Dialog.Panel, { className: "w-full overflow-auto lg:mx-60 xl:mx-96 h-[800px] md:h-[460px] transform  rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all" },
                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { onSubmit: handleUpdate },
                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_21__.Dialog.Title, { as: "h3", className: "text-lg font-medium leading-6 text-gray-900 dark:text-dark-text-fill items-center" }, t('Remarking Conversation')),
                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-gray-100 dark:bg-dark-frame-bg rounded-md p-2 my-2 mt-6 md:mt-8 flex flex-col md:flex-row" },
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mx-0 md:mx-2 my-1 w-full flex flex-col md:flex-col justify-start items-center " },
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { value: rows.qualityremark, id: "", rows: 5, className: "rounded-md w-full my-1 md:my-3  p-3 border dark:bg-dark-bg sm:text-sm  dark:text-dark-text-fill dark:border-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10", placeholder: "No quality ratings remark", name: "qualityDescription", "data-testid": "qualityDescriptionTextArea" }),
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "rounded-md relative w-full bg-white border-none border dark:bg-dark-bg sm:text-sm  dark:text-dark-text-fill dark:border-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10" },
                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { className: "rounded-md w-full h-full p-3 border dark:bg-dark-bg sm:text-sm  dark:text-dark-text-fill focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10", rows: 2, placeholder: "No reply here", value: rows.bodyQuality }))),
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mx-0 md:mx-2  my-1 w-full flex flex-col md:flex-col justify-start items-center " },
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { name: "quantityDescription", id: "", value: rows.quantityremark, rows: 5, className: "rounded-md w-full  my-1 md:my-3  p-3 border dark:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white", placeholder: " No quantity rating remark" }),
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "rounded-md relative w-full bg-white border-none border dark:bg-dark-bg sm:text-sm  dark:text-dark-text-fill dark:border-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10" },
                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { className: "rounded-md w-full h-full p-3 border dark:bg-dark-bg sm:text-sm  dark:text-dark-text-fill focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10", value: rows.bodyQuantity, rows: 2, placeholder: "No reply here" }))),
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mx-0 md:mx-2 my-1 w-full flex flex-col md:flex-col justify-start items-center " },
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { name: "proffessionalDescription", id: "", value: rows.professionalRemark, rows: 5, className: "rounded-md w-full my-1 md:my-3  p-3 border dark:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white", placeholder: "No professional rating remark" }),
                                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "rounded-md relative w-full bg-white border-none border dark:bg-dark-bg sm:text-sm  dark:text-dark-text-fill dark:border-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10" },
                                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { value: rows.bodyProfessional, placeholder: "No reply here", className: "rounded-md w-full h-full p-3 border dark:bg-dark-bg sm:text-sm  dark:text-dark-text-fill focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10", rows: 2 })))),
                                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mt-4 md:mt-8" },
                                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "button", className: "inline-flex justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2", onClick: closeModal }, t('Close'))))))))))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg min-h-screen overflow-y-auto overflow-x-hidden" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-3 md:px-8 mt-10" }, data == 0 ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-center mt-7 text-lg uppercase" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
                                                " ",
                                                t('No ratings data found')))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DataTable__WEBPACK_IMPORTED_MODULE_8__["default"], { data: vardata, columns: columns, title: t('Performance Ratings') })))))))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TraineeRatingDashboard);


/***/ })

}]);
//# sourceMappingURL=src_pages_TraineeRatingDashboard_tsx.js.map