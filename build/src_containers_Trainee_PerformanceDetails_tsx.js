"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_containers_Trainee_PerformanceDetails_tsx"],{

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

/***/ "./src/Mutations/replyMutation.tsx":
/*!*****************************************!*\
  !*** ./src/Mutations/replyMutation.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_REPLY: () => (/* binding */ ADD_REPLY),
/* harmony export */   GET_REPLIES: () => (/* binding */ GET_REPLIES),
/* harmony export */   GET_REPLIES_BY_USER: () => (/* binding */ GET_REPLIES_BY_USER),
/* harmony export */   REMOVE_REPLY: () => (/* binding */ REMOVE_REPLY),
/* harmony export */   UPDATE_TO_REPLY: () => (/* binding */ UPDATE_TO_REPLY)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");

const GET_REPLIES = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query Query {
    getReplies {
      id
      user
      sprint
      quantityRemark
      qualityRemark
      professionalRemark
      bodyQuantity
      bodyQuality
      bodyProfessional
      createdAt
    }
  }
`;
const GET_REPLIES_BY_USER = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query Query($userId: String) {
    getRepliesByUser(userId: $userId) {
      id
      user
      sprint
      quantityRemark
      qualityRemark
      professionalRemark
      bodyQuantity
      bodyQuality
      bodyProfessional
      createdAt
    }
  }
`;
const ADD_REPLY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation AddReply(
    $sprint: Int!
    $bodyQuantity: String
    $bodyQuality: String
    $bodyProfessional: String
  ) {
    addReply(
      sprint: $sprint
      bodyQuantity: $bodyQuantity
      bodyQuality: $bodyQuality
      bodyProfessional: $bodyProfessional
    ) {
      id
      user
      sprint
      quantityRemark
      qualityRemark
      professionalRemark
      bodyQuantity
      bodyQuality
      bodyProfessional
      createdAt
    }
  }
`;
const UPDATE_TO_REPLY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation UpdateToReply(
    $user: String!
    $sprint: Int!
    $orgToken: String!
    $bodyQuality: [String]
    $bodyQuantity: [String]
    $bodyProfessional: [String]
    $quantity: [String]
    $quantityRemark: [String]
    $quality: [String]
    $qualityRemark: [String]
    $professionalSkills: [String]
    $professionalRemark: [String]
  ) {
    updateToReply(
      user: $user
      sprint: $sprint
      orgToken: $orgToken
      bodyQuality: $bodyQuality
      bodyQuantity: $bodyQuantity
      bodyProfessional: $bodyProfessional
      quantity: $quantity
      quantityRemark: $quantityRemark
      quality: $quality
      qualityRemark: $qualityRemark
      professional_Skills: $professionalSkills
      professionalRemark: $professionalRemark
    ) {
      user
      sprint
      bodyProfessional
      bodyQuality
      bodyQuantity
      quantity
      quantityRemark
      quality
      qualityRemark
      professional_Skills
      professionalRemark
      approved
    }
  }
`;
const REMOVE_REPLY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation DeleteReply($deleteReplyId: ID) {
    deleteReply(id: $deleteReplyId)
  }
`;


/***/ }),

/***/ "./src/components/TraineeComments.tsx":
/*!********************************************!*\
  !*** ./src/components/TraineeComments.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");



function TraineeComments() {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg shadow-lg px-5 py-1 rounded-md w-[90%] mx-auto lg:w-[70%] lg:ml-60 mb-10 mt-80" }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TraineeComments);


/***/ }),

/***/ "./src/components/TraineePerformanceDetails.tsx":
/*!******************************************************!*\
  !*** ./src/components/TraineePerformanceDetails.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */ var _Mutations_Ratings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Mutations/Ratings */ "./src/Mutations/Ratings.tsx");
/* harmony import */ var _Mutations_replyMutation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Mutations/replyMutation */ "./src/Mutations/replyMutation.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/.pnpm/@headlessui+react@1.7.15_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/.pnpm/@headlessui+react@1.7.15_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/dialog/dialog.js");
/* eslint-disable */









const TraineePerfomanceDetails = () => {
    const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    const organizationToken = localStorage.getItem('orgToken');
    const [replyData, setReplyData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        userEmail: '',
        bodyQuantity: '',
        bodyQuality: '',
        bodyProfessional: '',
        id: '',
    });
    const [rows, setRows] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        user: '',
        bodyQuantity: '',
        bodyQuality: '',
        bodyProfessional: '',
        id: '',
    });
    const [trainee, setTrainee] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [selectedTrainee, setSelectedTrainee] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(trainee[0]);
    const [coordinator, setCoordinator] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({ coordinator: '' });
    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    let [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let [isOpen2, setIsOpen2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let [isOpen3, setIsOpen3] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [showActions, setShowActions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [ratings, setRatings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const data = sessionStorage.getItem('data');
        const getData = JSON.parse(data);
        setRatings(getData);
    }, []);
    const closeModel = () => {
        setIsOpen(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setShowActions(false);
    };
    const openModal = () => {
        setIsOpen(true);
    };
    const openModalQuality = () => {
        setIsOpen2(true);
    };
    const openModalProfessional = () => {
        setIsOpen3(true);
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        updateToReply();
        handleToggle();
        closeModel();
    };
    const handleUpdateRow = (e) => {
        e.preventDefault();
        updateToReply();
        handleToggle();
        closeModel();
    };
    const handleUpdateColumn = (e) => {
        e.preventDefault();
        updateToReply();
        handleToggle();
        closeModel();
    };
    const handleClick = () => setNav(nav);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleToggle();
        updateToReply();
        closeModel();
    };
    const [updateToReply] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation)(_Mutations_replyMutation__WEBPACK_IMPORTED_MODULE_3__.UPDATE_TO_REPLY, {
        variables: {
            user: ratings.user_id,
            sprint: ratings.user_sprint,
            bodyQuantity: rows?.bodyQuantity,
            bodyQuality: rows?.bodyQuality,
            bodyProfessional: rows?.bodyProfessional,
            orgToken: organizationToken,
        },
        onError: (err) => {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error('Unable to proceed');
            openModal();
            openModalQuality();
            openModalProfessional();
        },
        onCompleted: ({ updateToReply }) => {
            handleToggle();
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success('Reply sent successfully');
        },
    });
    const [createReply] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useMutation)(_Mutations_replyMutation__WEBPACK_IMPORTED_MODULE_3__.ADD_REPLY, {
        variables: {
            user: ratings.user_id,
            sprint: ratings.user_sprint,
            bodyQuantity: rows.bodyQuantity.toString(),
            bodyQuality: rows.bodyQuality.toString(),
            bodyProfessional: rows.bodyProfessional.toString(),
        },
        onError: (err) => {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error('Unable to procced');
        },
        onCompleted: ({ createReply }) => {
            handleToggle();
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success('Reply sent successfully');
        },
    });
    const [getUsers] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useLazyQuery)(_Mutations_Ratings__WEBPACK_IMPORTED_MODULE_2__.GET_USERS, {
        variables: {
            email: coordinator,
        },
    });
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-neutral-100  dark:bg-dark-frame-bg md:flex sm:hidden flex-col justify-start items-center " },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: "lg:w-9/12 md:w-11/12 lg:h-[70%] md:h-[60%] md:ml-0 lg:ml-32 dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md mt-32 " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-gray-300  bg-gray-100  dark:bg-dark-tertiary" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "lg:py-3 md:py-2 lg:px-3 md:px-2  text-left  text-[#6B7280] dark:text-dark-text-fill " }, t('Metric')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "lg:py-3 md:py-2 lg:px-10 md:px-7 text-center text-[#6B7280] dark:text-dark-text-fill" }, t('Grade')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "lg:py-3 md:py-2 text-left text-[#6B7280] dark:text-dark-text-fill" }, t('Remarks')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "lg:py-3 md:py-2" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", { className: " text-center " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-black dark:text-dark-text-fill bg-gray-100 dark:bg-dark-tertiary " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-10 px-10 text-left" }, t('Quality')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3 " }, ratings.quality),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3  text-start text-sm" }, ratings?.quality_remark),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "primary", size: "sm", style: "px-4 py-0 text-sm", onClick: openModalQuality }, t('Reply')))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-light-text dark:text-dark-text-fill bg-light-bg dark:bg-dark-bg " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "lg:py-10 md:py-0 px-10 text-left  " }, t('Quantity')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3 " }, ratings.quantity),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "lg:py-6 md:py-3 text-start lg:text-sm" }, ratings?.quantity_remark),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3 px-8" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "primary", size: "sm", style: "px-4 py-0 text-sm", onClick: openModal }, t('Reply')))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-black dark:text-dark-text-fill bg-light-bg dark:bg-dark-bg " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-10 px-10 text-left" }, t('Professional skills')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3 " }, ratings.professional),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3  text-start text-sm" }, ratings?.professional_remark),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "primary", size: "sm", style: "px-4 py-0 text-sm", onClick: openModalProfessional }, t('Reply'))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Transition, { appear: true, show: isOpen, as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, "data-testid": "modalTransistion" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Dialog, { as: "div", className: "relative z-10", onClose: closeModel },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Transition.Child, { as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed inset-0 overflow-y-auto" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex min-h-full  items-center justify-center p-4 text-center" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Transition.Child, { as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Dialog.Panel, { className: " bg-white dark:bg-dark-bg shadow-lg px-5 py-4 rounded-md w-[90%] mx-auto lg:w-[65%] lg:ml-90 mb-10 mt-10" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { onSubmit: handleUpdate },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Dialog.Title, { as: "h3", className: " font-medium content-center  text-gray-900 dark:text-dark-text-fill" }, t('Reply on Quantity Remarks')),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mt-4 md:mt-8" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-2/3 flex flex-col border border-gray-200 mb-4 float-left rounded-tr-lg rounded-bl-lg" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "m-8" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "float-left" }, ratings?.quantity_remark)),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "ml-9 text-primary " },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "float-left" }))),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex flex-col border border-gray-400 rounded-md" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "m-4" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " " },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { value: rows.bodyQuantity, onChange: (e) => setRows({
                                                            ...rows,
                                                            bodyQuantity: e.target.value,
                                                        }), className: "w-full bg-inherit px-2 outline-0", type: "text", placeholder: "Type a reply ..." }),
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "flex mt-2 bg-primary px-4 md:py-2 sm:py-1 rounded-tl-lg rounded-br-lg md:mt-3 text-white font-semibold cursor-pointer float-right", onClick: handleSubmit }, "Send")))),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: closeModel, className: "flex mt-2 bg-primary px-4 md:py-2 sm:py-1 md:mt-3 rounded-md text-white font-semibold cursor-pointer" }, t('Close'))))))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Transition, { appear: true, show: isOpen2, as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, "data-testid": "modalTransistion" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Dialog, { as: "div", className: "relative z-10", onClose: closeModel },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Transition.Child, { as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed inset-0 overflow-y-auto" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex min-h-full  items-center justify-center p-4 text-center" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Transition.Child, { as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Dialog.Panel, { className: " bg-white dark:bg-dark-bg shadow-lg px-5 py-4 rounded-md w-[90%] mx-auto lg:w-[65%] lg:ml-90 mb-10 mt-10" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { onSubmit: handleUpdate },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Dialog.Title, { as: "h3", className: " font-medium content-center  text-gray-900 dark:text-dark-text-fill" }, t('Reply on Quantity Remarks')),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mt-4 md:mt-8" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-2/3 flex flex-col border border-gray-200 mb-4 float-left rounded-tr-lg rounded-bl-lg" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "m-8" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "float-left" }, ratings?.quality_remark)),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "ml-9 text-primary " },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "float-left" }))),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex flex-col border border-gray-400 rounded-md" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "m-4" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " " },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { value: rows.bodyQuality, onChange: (e) => setRows({
                                                            ...rows,
                                                            bodyQuality: e.target.value,
                                                        }), className: "w-full bg-inherit px-2 outline-0", type: "text", placeholder: "Type a reply ..." }),
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "flex mt-2 bg-primary px-4 md:py-2 sm:py-1 rounded-tl-lg rounded-br-lg md:mt-3 text-white font-semibold cursor-pointer float-right", onClick: handleSubmit }, "Send")))),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: closeModel, className: "flex mt-2 bg-primary px-4 md:py-2 sm:py-1 md:mt-3 rounded-md text-white font-semibold cursor-pointer" }, t('Close'))))))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Transition, { appear: true, show: isOpen3, as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, "data-testid": "modalTransistion" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Dialog, { as: "div", className: "relative z-10", onClose: closeModel },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Transition.Child, { as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed inset-0 overflow-y-auto" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex min-h-full  items-center justify-center p-4 text-center" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Transition.Child, { as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Dialog.Panel, { className: " bg-white dark:bg-dark-bg shadow-lg px-5 py-4 rounded-md w-[90%] mx-auto lg:w-[65%] lg:ml-90 mb-10 mt-10" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { onSubmit: handleUpdateColumn },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Dialog.Title, { as: "h3", className: " font-medium content-center  text-gray-900 dark:text-dark-text-fill" }, t('Reply on Professional Remarks')),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mt-4 md:mt-8" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-2/3 flex flex-col border border-gray-200 mb-4 float-left rounded-tr-lg rounded-bl-lg" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "m-8" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "float-left" }, ratings?.professional_remark)),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "ml-9 text-primary " },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "float-left" }))),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex flex-col border border-gray-400 rounded-md" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "m-4" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " " },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { value: rows.bodyProfessional, onChange: (e) => setRows({
                                                            ...rows,
                                                            bodyProfessional: e.target.value,
                                                        }), className: "w-full bg-inherit px-2 outline-0", type: "text", placeholder: "Type a reply ..." }),
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "flex mt-2 bg-primary px-4 md:py-2 sm:py-1 rounded-tl-lg rounded-br-lg md:mt-3 text-white font-semibold cursor-pointer float-right", onClick: handleSubmit }, "Send")))),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: closeModel, className: "flex mt-2 bg-primary px-4 md:py-2 sm:py-1 md:mt-3 rounded-md text-white font-semibold cursor-pointer" }, t('Close'))))))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "sm:flex sm:flex-col md:hidden justify-center items-center bg-light-bg dark:bg-dark-frame-bg dark:text-white  text-black" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-center items-start w-full py-4 px-4 ml-4 mt-4" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "font-semibold mt-12 text-center text-[#6B7280]" }, "Trainee Performance")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-center items-center w-11/12 border shadow rounded-lg dark:border-dark-frame-bg bg-white  dark:bg-dark-bg pb-4 mt-4 pt-16" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: " rounded-lg w-7/12 h-[70%] overflow-hidden  md:shadow mt-[-40px]" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-gray-300 dark:text-white  bg-gray-100 dark:bg-dark-tertiary " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "py-2 px-3 text-center text-[#6B7280] dark:text-dark-text-fill " }, t('Metric')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "py-2 px-10 text-center text-[#6B7280] dark:text-dark-text-fill" }, t('Quantity')))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", { className: " text-center" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-light-text bg-light-bg dark:bg-dark-bg dark:text-dark-text-fill  " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3 px-10" }, 'Grade'),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: " " }, "1")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-black bg-gray-100 dark:bg-dark-tertiary dark:text-dark-text-fill  " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-10 px-10 text-left" }, t('Remark')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3  text-start text-sm" }, ratings?.quantity_remark)))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "px-4 py-1 ml-40 mt-4 rounded-md dark:text-dark-text-fill text-center bg-primary text-white  text-sm", onClick: openModal }, t('Reply'))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-center items-center w-11/12 border shadow rounded-lg dark:border-dark-frame-bg bg-white dark:bg-dark-bg  pb-4 mt-4 pt-16" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: " rounded-lg w-7/12 h-[70%] overflow-hidden  md:shadow mt-[-40px]" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-gray-300 dark:text-dark-text-fill bg-gray-100 dark:bg-dark-tertiary" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "py-2 px-3 text-center text-[#6B7280] dark:text-dark-text-fill  " }, t('Metric')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "py-2 px-10 text-center text-[#6B7280] dark:text-dark-text-fill" }, t('Quality')))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", { className: " text-center" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-light-text bg-light-bg dark:bg-dark-bg dark:text-dark-text-fill " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3 px-10" }, t('Grade')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: " " }, "1")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-black bg-gray-100 dark:bg-dark-tertiary dark:text-dark-text-fill  " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-10 px-10 text-left" }, t('Remark')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3  text-start text-sm" }, ratings?.quality_remark)))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "px-4 py-1 ml-40 mt-4 rounded-md dark:text-dark-text-fill text-center bg-primary text-white  text-sm", onClick: openModal }, t('Reply'))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-center items-center w-11/12 border shadow rounded-lg dark:border-dark-frame-bg bg-white dark:bg-dark-bg  pb-4 mt-4 pt-16" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: " rounded-lg w-7/12 h-[70%] overflow-hidden  md:shadow mt-[-40px]" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-gray-300  bg-gray-100 dark:bg-dark-tertiary " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "py-2 px-0 text-center text-[#6B7280] dark:text-dark-text-fill " }, t('Metric')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "py-4 px-10 text-justify  text-[#6B7280] dark:text-dark-text-fill" }, t('Professional skills')))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", { className: " text-center" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-light-text bg-light-bg dark-bg dark:bg-dark-bg dark:text-dark-text-fill " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3 px-10" }, t('Grade')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: " " })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-black bg-gray-100 dark:bg-dark-tertiary dark:text-dark-text-fill " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-10 px-10 text-left" }, t('Remark')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3  text-start text-sm" }, ratings?.professional_remark)))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "px-4 py-1 ml-40 mt-4 rounded-md dark:text-dark-text-fill text-center bg-primary text-white  text-sm", onClick: openModal }, t('Reply'))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TraineePerfomanceDetails);


/***/ }),

/***/ "./src/containers/Trainee/PerformanceDetails.tsx":
/*!*******************************************************!*\
  !*** ./src/containers/Trainee/PerformanceDetails.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TraineePerformanceDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TraineePerformanceDetails */ "./src/components/TraineePerformanceDetails.tsx");
/* harmony import */ var _components_TraineeComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TraineeComments */ "./src/components/TraineeComments.tsx");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* eslint-disable */




function PerformanceDetails() {
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__["default"])('Performance details');
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-neutral-100 dark:bg-dark-frame-bg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TraineePerformanceDetails__WEBPACK_IMPORTED_MODULE_1__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TraineeComments__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PerformanceDetails);


/***/ })

}]);
//# sourceMappingURL=src_containers_Trainee_PerformanceDetails_tsx.js.map