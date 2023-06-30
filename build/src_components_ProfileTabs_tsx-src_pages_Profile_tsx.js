"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_components_ProfileTabs_tsx-src_pages_Profile_tsx"],{

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

/***/ "./src/components/ProfileTabs.tsx":
/*!****************************************!*\
  !*** ./src/components/ProfileTabs.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditPassword: () => (/* binding */ EditPassword),
/* harmony export */   "default": () => (/* binding */ ProfileTabs)
/* harmony export */ });
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/MailIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/PhoneIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/HomeIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Input */ "./src/components/Input.tsx");
/* harmony import */ var _constants_formFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/formFields */ "./src/constants/formFields.ts");
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hook/useAuth */ "./src/hook/useAuth.tsx");
/* harmony import */ var _pages_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Profile */ "./src/pages/Profile.tsx");
/* harmony import */ var _Mutations_Ratings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Mutations/Ratings */ "./src/Mutations/Ratings.tsx");













const organizationToken = localStorage.getItem('orgToken');
const token = localStorage.getItem('orgToken');
const orgName = window.localStorage.getItem('orgName');
function EditPassword() {
    const fieldState = {};
    _constants_formFields__WEBPACK_IMPORTED_MODULE_5__.passwordFields.forEach((field) => {
        fieldState[field.id] = '';
    });
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    const { register, handleSubmit, formState: { errors }, reset, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm)();
    /* istanbul ignore next */
    const onSubmit = () => {
        reset();
    };
    const [passwordFieldState, setPasswordField] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(fieldState);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg min-h-screen lg:px-8" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "border bg-white dark:border-dark-bg  dark:bg-dark-bg dark:text-white w-[90vw] md:w-[92vw] lg:w-[75%] h-[56vh] md:h-[52vh] lg:h-[52vh] mx-0  mr-24  md:mr-0 md:mx-4  mb-6 lg:-ml-8 rounded-lg" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-4" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: "mt-12 grid grid-cols-1 gap-4", onSubmit: handleSubmit(onSubmit) },
                    _constants_formFields__WEBPACK_IMPORTED_MODULE_5__.passwordFields.map((field) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], { key: field.id, labelText: field.labelText, labelFor: field.labelFor, id: field.id, name: field.name, type: field.type, isRequired: field.isRequired, placeholder: t(`${field.placeholder}`), customClass: "dark:bg-dark-bg", handleChange: (e) => {
                            /* istanbul ignore next */
                            setPasswordField({
                                ...passwordFieldState,
                                [field.id]: e.target.value,
                            });
                        }, register: register, errors: errors }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "default", size: "md", style: "group relative md:w-2/3 sm:w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-[#1280a3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-secondary sm:mx-0", 
                        /* istanbul ignore next */
                        onClick: () => { }, "data-testid": "change_password" }, t('Change Password')))))));
}
function ProfileTabs({ data }) {
    const [openTab, setOpenTab] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('About');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    const tabs = ['About', 'Organizations', 'Account'];
    const { user, setName } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_6__.UserContext);
    const [traineeData, setTraineeData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [singleUser, setSingleUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    /* istanbul ignore next */
    const [fetchData2] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useLazyQuery)(_Mutations_Ratings__WEBPACK_IMPORTED_MODULE_8__.GET_ALL_TRAINEES, {
        variables: {
            orgToken: organizationToken,
        },
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        fetchData2({
            fetchPolicy: 'network-only',
            onCompleted: (data) => {
                setTraineeData(data.getAllUsers);
            },
            onError: (error) => {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message);
            },
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const singleTrainne = traineeData.filter((item) => item.email === user.email);
        setSingleUser(singleTrainne[0]); // returns an object with single trainnee data that can be accessed singleUser.email
    }, [traineeData]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-wrap lg:ml-60 lg:mr-8" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "lg:w-[40vw]" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row text-black dark:text-dark-text-fill", role: "tablist" }, tabs.map((tab) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { key: tab, className: "-mb-px mr-2 last:mr-0 flex-auto text-center" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: `text-xs font-bold uppercase px-3 md:px-5 py-3 shadow-sm rounded block leading-normal ${openTab === `${tab}`
                            ? 'bg-white dark:bg-dark-bg border-b-4 border-b-primary '
                            : ''}`, onClick: (e) => {
                            e.preventDefault();
                            setOpenTab(`${tab}`);
                        }, "data-toggle": "tab", href: "#link1", role: "tablist", "data-testid": "tab-link" }, t(tab))))))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative flex flex-col min-w-0 break-words text-light-text dark:text-dark-text-fill  w-full rounded" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "py-2 flex-auto" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "tab-content tab-space" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: openTab === 'About' ? 'block' : 'hidden', id: "link1" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid md:grid-cols-5 gap-4 md:gap-6 " },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "p-2 flex flex-col md:col-span-2 justify-start items-start bg-white  dark:bg-dark-bg shadow " },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "text-2xl font-bold m-2  mb-4" },
                                        data?.name,
                                        ' '),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "py-4 flex  justify-center" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__["default"], { className: "w-6 mr-2 dark:text-dark-text-fill" }),
                                        user?.email),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_13__["default"], { className: "w-6 mr-2 dark:text-dark-text-fill" }),
                                        data?.phoneNumber),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "py-4 flex " },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_14__["default"], { className: "w-6 mr-2 dark:text-dark-text-fill" }),
                                        data?.city,
                                        ",",
                                        data?.country && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Profile__WEBPACK_IMPORTED_MODULE_7__.CountryComponent, { country: data.country })))),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "p-2 md:col-span-3 bg-white  dark:bg-dark-bg shadow" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-xl font-bold m-2  mb-4" },
                                        "Biography",
                                        t('Biography')),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, data?.biography || 'Add biography'))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid m-1 p-2 -ml-2 -mr-2 relative" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-primary p-2 flex md:col-span-2 justify-start items-start shadow rounded-t-2xl" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "w-16 h-16 md:w-20 md:h-20 rounded-full cursor-pointer mt-6 ml-8 bg-white dark:bg-dark-bg absolute border border-primary", src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__["default"], alt: "logo" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-start items-start ml-36" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "font-bold text-dark-text-fill text-center text-2xl md:text-3xl" }, orgName),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-dark-text-fill text-center text-sm md:text-lg " }, "https://andela.pulse.com/"))),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "p-2 m-2 mt-9 flex flex-col justify-start items-start  bg-white  dark:bg-dark-bg shadow " },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "text-2xl font-bold m-2  mb-4" }, t('You in the organization')),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "py-4 flex  justify-center" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "font-bold text-base mr-4" },
                                            t('Joined'),
                                            ":"),
                                        singleUser && singleUser.team
                                            ? singleUser.team.cohort.startDate.split('T')[0]
                                            : 'Unavailabe'),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "font-bold text-base mr-4" },
                                            t('Role'),
                                            ":"),
                                        user?.role),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "py-4 flex " },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "font-bold text-base mr-4" },
                                            t('Team'),
                                            ":"),
                                        singleUser && singleUser.team
                                            ? singleUser.team.name
                                            : 'Unavailabe')),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "p-2 m-2 mt-0 md:mt-9 flex flex-col justify-start items-start  bg-white  dark:bg-dark-bg shadow " },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "text-2xl font-bold m-2  mb-4" }, t('Management')),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "py-4 flex  justify-center" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "font-bold text-base mr-4" },
                                            t('program'),
                                            ":"),
                                        singleUser && singleUser.team
                                            ? singleUser.team.cohort.program.name
                                            : 'Unavailabe'),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "font-bold text-base mr-4" },
                                            t('Stage(current)'),
                                            ":",
                                            singleUser && singleUser.team
                                                ? singleUser.team.cohort.phase.name
                                                : 'Unavailabe')),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "py-4 flex " },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "font-bold text-base mr-4" },
                                            t('Manager'),
                                            ":"),
                                        singleUser && singleUser.team
                                            ? singleUser.team.cohort.program.manager.profile.name
                                            : 'Unavailabe')))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: openTab === 'Organizations' ? 'block' : 'hidden', id: "link3" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid m-1 p-2 -ml-2 -mr-2 relative" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-primary p-1 flex md:col-span-2 justify-start items-start shadow rounded-t-2xl" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "w-12 h-12 md:w-16 md:h-16 rounded-full cursor-pointer mt-6 ml-8 bg-white dark:bg-dark-bg absolute border border-primary", src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__["default"], alt: "logo" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-start items-start ml-36" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "font-bold text-dark-text-fill text-center text-lg md:text-xl" }, singleUser && singleUser.team
                                            ? singleUser.team.cohort.program.organization.name
                                            : 'Unavailabe'),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-dark-text-fill text-center text-sm md:text-lg " }, "https://andela.pusle.com"))),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "p-2 m-2 mt-6 flex flex-col justify-start items-start  bg-white  dark:bg-dark-bg shadow " },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "text-2xl font-bold m-2  mb-4" }, t('You in the organization')),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "py-4 flex  justify-center" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "font-bold text-base mr-4" },
                                            t('Joined'),
                                            ":"),
                                        singleUser && singleUser.team
                                            ? singleUser.team.cohort.startDate.split('T')[0]
                                            : 'Unavailabe'),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "font-bold text-base mr-4" },
                                            t('Role'),
                                            ":"),
                                        user?.role),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "py-4 flex " },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "font-bold text-base mr-4" },
                                            t('Team'),
                                            ":"),
                                        singleUser && singleUser.team
                                            ? singleUser.team.name
                                            : 'Unavailabe')),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "p-2 m-2 mt-2  md:mt-6 flex flex-col justify-start items-start  bg-white  dark:bg-dark-bg shadow " },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "text-2xl font-bold m-2  mb-4" }, t('Management')),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "py-4 flex  justify-center" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "font-bold text-base mr-4" },
                                            t('Program'),
                                            ":"),
                                        singleUser && singleUser.team
                                            ? singleUser.team.cohort.program.name
                                            : 'Unavailabe'),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "font-bold text-base mr-4" },
                                            t('Stage(current)'),
                                            ":",
                                            singleUser && singleUser.team
                                                ? singleUser.team.cohort.phase.name
                                                : 'Unavailabe')),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "py-4 flex " },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: "font-bold text-base mr-4" },
                                            t('Manager'),
                                            ":"),
                                        singleUser && singleUser.team
                                            ? singleUser.team.cohort.program.manager.profile.name
                                            : 'Unavailabe')))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: openTab === 'Account' ? 'block' : 'hidden', id: "link2" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditPassword, null))))))));
}


/***/ }),

/***/ "./src/pages/Profile.tsx":
/*!*******************************!*\
  !*** ./src/pages/Profile.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountryComponent: () => (/* binding */ CountryComponent),
/* harmony export */   "default": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hook/useAuth */ "./src/hook/useAuth.tsx");
/* harmony import */ var _components_ProfileCoverpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProfileCoverpage */ "./src/components/ProfileCoverpage.tsx");
/* harmony import */ var _components_ProfileTabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProfileTabs */ "./src/components/ProfileTabs.tsx");
/* harmony import */ var _constants_countries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/countries */ "./src/constants/countries.ts");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _Mutations_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Mutations/User */ "./src/Mutations/User.tsx");
/* harmony import */ var _Skeletons_Square__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Skeletons/Square */ "./src/Skeletons/Square.tsx");










function CountryComponent({ country }) {
    /* istanbul ignore next */
    const userCountry = _constants_countries__WEBPACK_IMPORTED_MODULE_5__.COUNTRIES.filter((c) => c.value === country)[0];
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "truncate flex items-center", "data-testid": "country-selector-title" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { alt: `${userCountry?.value}`, "data-testid": "country-selector-flag", src: `https://purecatamphetamine.github.io/country-flag-icons/3x2/${userCountry?.value}.svg`, className: "inline mx-2 h-4 rounded-sm " }),
        ' ',
        userCountry?.title));
}
function Profile() {
    const { setName, setProfileImage } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_2__.UserContext);
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_6__["default"])('Profile');
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [getProfile, { refetch }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useLazyQuery)(_Mutations_User__WEBPACK_IMPORTED_MODULE_7__.GET_PROFILE);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const fetchData = async () => {
            /* istanbul ignore next */
            try {
                const { data } = await getProfile();
                setData(data);
                setName(data.getProfile.name);
                setProfileImage(data.getProfile.avatar);
            }
            catch (error) {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error?.message || 'Something went wrong');
            }
        };
        fetchData();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg overflow-y-scroll" }, data ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ProfileCoverpage__WEBPACK_IMPORTED_MODULE_3__["default"], { data: data?.getProfile, currentPage: "viewProfile" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mt-2 p-6 h-full" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ProfileTabs__WEBPACK_IMPORTED_MODULE_4__["default"], { data: data?.getProfile })))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Skeletons_Square__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
}


/***/ }),

/***/ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/MailIcon.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/MailIcon.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");


function MailIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MailIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/PhoneIcon.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/PhoneIcon.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");


function PhoneIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PhoneIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=src_components_ProfileTabs_tsx-src_pages_Profile_tsx.js.map