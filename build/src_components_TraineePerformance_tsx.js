"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_components_TraineePerformance_tsx"],{

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

/***/ "./src/components/Pagination.tsx":
/*!***************************************!*\
  !*** ./src/components/Pagination.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Pagination = ({ contentPerPage, count, }) => {
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const [gaps, setGaps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        before: false,
        paginationGroup: [],
        after: true,
    });
    const pageCount = Math.ceil(count / contentPerPage);
    const lastContentIndex = page * contentPerPage;
    const firstContentIndex = lastContentIndex - contentPerPage;
    const [pagesInBetween, setPagesInBetween] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        /* istanbul ignore next */
        if (pageCount > 2) {
            const temp = new Array(pageCount - 2).fill(1).map((_, i) => i + 2);
            setPagesInBetween(temp);
        }
    }, [pageCount]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const currentLocation = pagesInBetween.indexOf(page);
        let paginationGroup = [];
        let before = false;
        let after = false;
        if (page === 1) {
            paginationGroup = pagesInBetween.slice(0, 3);
        }
        else if (page === pageCount ||
            page === pageCount - 1 ||
            page === pageCount - 2) {
            paginationGroup = pagesInBetween.slice(-3, pageCount);
        }
        else if (page === 2) {
            paginationGroup = pagesInBetween.slice(currentLocation, currentLocation + 3);
        }
        else {
            paginationGroup = [page - 1, page, page + 1];
        }
        if (pageCount <= 5) {
            /* istanbul ignore next */
            before = false;
            after = false;
        } /* istanbul ignore next */
        else {
            before = false;
            after = false;
            if (paginationGroup[0] > 2) {
                before = true;
            }
            /* istanbul ignore next */
            if (paginationGroup[2] < pageCount - 1) {
                after = true;
            }
        }
        setGaps({ paginationGroup, before, after });
    }, [page, pagesInBetween, pageCount]);
    const changePage = (direction) => {
        setPage((state) => {
            if (direction) {
                if (state === pageCount) {
                    /* istanbul ignore next */
                    return state;
                }
                return state + 1;
            }
            if (state === 1) {
                return state;
            }
            /* istanbul ignore next */
            return state - 1;
        });
    };
    const setPageSAFE = (num) => {
        if (num > pageCount) {
            /* istanbul ignore next */
            setPage(pageCount);
        }
        else if (num < 1) {
            /* istanbul ignore next */
            setPage(1);
        }
        else {
            setPage(num);
        }
    };
    return {
        totalPages: pageCount,
        nextPage: () => changePage(true),
        prevPage: () => changePage(false),
        setPage: setPageSAFE,
        firstContentIndex,
        lastContentIndex,
        page,
        gaps,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ }),

/***/ "./src/components/TraineePerformance.tsx":
/*!***********************************************!*\
  !*** ./src/components/TraineePerformance.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _dummyData_performance_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dummyData/performance.json */ "./src/dummyData/performance.json");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony import */ var _Mutations_Ratings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Mutations/Ratings */ "./src/Mutations/Ratings.tsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagination */ "./src/components/Pagination.tsx");
/* eslint-disable */









const TraineePerfomance = () => {
    const [ratings, setRatings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const { firstContentIndex, lastContentIndex, nextPage, prevPage, page, gaps, setPage, totalPages, } = (0,_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"])({
        contentPerPage: 3,
        count: _dummyData_performance_json__WEBPACK_IMPORTED_MODULE_2__.length,
    });
    const [getRatings] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useLazyQuery)(_Mutations_Ratings__WEBPACK_IMPORTED_MODULE_3__.TRAINEE_RATING, {});
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        getRatings({
            fetchPolicy: 'network-only',
            onCompleted: /* istanbul ignore next */ (data) => {
                /* istanbul ignore next */
                setRatings(data?.fetchRatingsTrainee);
                /* istanbul ignore next */
                sessionStorage.removeItem('data');
            },
            onError: /* istanbul ignore next */ (error) => {
                /* istanbul ignore next */
                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error?.message || 'Something went wrong');
            },
        });
    }, [toggle]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg min-h-screen lg:px-8 pb-10" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-3 md:px-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-full lg:w-[80%] lg:ml-56 mt-[90px]" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex ml-2 items-center justify-between" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-gray-800 dark:text-white font-semibold" }, t('Performance score'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex ml-[-25px] px-7 py-2  mt-4" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "-mx-4 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: "min-w-full leading-normal" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", { className: "dark:text-white " }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider" }, t('Sprint')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider" }, t('Phase')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "px-5  border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase md:table-cell sm:hidden tracking-wider" }, t('Quantity')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase md:table-cell sm:hidden tracking-wider" }, t('Quality')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase md:table-cell sm:hidden tracking-wider" }, t('Professional skills')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider" }, t('Average')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider" }, ('Actions'))),
                                        ratings?.slice(firstContentIndex, lastContentIndex).map(
                                        /* istanbul ignore next */
                                        (item) => (
                                        /* istanbul ignore next */
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { key: item.id },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-center items-center" },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "" },
                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-900 text-center dark:text-white whitespace-no-wrap" }, item.sprint)))),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-900  dark:text-white whitespace-no-wrap text-center" }, item.cohort.phase?.name)),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-900  dark:text-white whitespace-no-wrap text-center" }, item.quantity)),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-900  dark:text-white whitespace-no-wrap text-center " }, item.quality)),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-900  dark:text-white whitespace-no-wrap text-center " }, item.professional_Skills)),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-900  dark:text-white whitespace-no-wrap text-center" }, item.average)),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, { to: "/dashboard/performance-details" },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "primary", size: "sm", style: "px-4 py-0 text-sm", onClick: 
                                                        /* istanbul ignore next */
                                                        () => {
                                                            /* istanbul ignore next */
                                                            setToggle(!toggle);
                                                            sessionStorage.setItem('data', JSON.stringify({
                                                                user_sprint: item?.sprint,
                                                                quantity_remark: item?.quantityRemark,
                                                                quality_remark: item?.qualityRemark,
                                                                professional_remark: item?.professionalRemark,
                                                                quality: item?.quality,
                                                                quantity: item?.quantity,
                                                                professional: item?.professional_Skills,
                                                                user_id: item?.user.id,
                                                            }));
                                                        } }, t('Details'))))))))))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center justify-center gap-1 mt-12 mb-0" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: prevPage, "data-testid": "prev", className: `page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${page === 1 && 'disabled'}` }, "\u2190"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: () => setPage(1), "data-testid": "page1", className: `page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${page === 1 && 'disabled'}` }, "1"),
                    gaps.paginationGroup.map(/* istanbul ignore next */ (el) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: /* istanbul ignore next */ () => setPage(el), "data-testid": "page", key: el, className: `page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${page === el ? 'active' : ''}` }, el))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: () => setPage(totalPages), "data-testid": "page3", className: `page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${page === totalPages && 'disabled'}` }, totalPages),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: nextPage, "data-testid": "next", className: `page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${page === totalPages && 'disabled'}` }, "\u2192"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TraineePerfomance);


/***/ }),

/***/ "./src/dummyData/performance.json":
/*!****************************************!*\
  !*** ./src/dummyData/performance.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"1","sprint":"Sprint 1","quantity":"2","quality":"2","skills":"1","average":"2"},{"id":"2","sprint":"Sprint 2","quantity":"2","quality":"1","skills":"1","average":"1"},{"id":"3","sprint":"Sprint 3","quantity":"2","quality":"1","skills":"2","average":"1"},{"id":"4","sprint":"Sprint 4","quantity":"1","quality":"1","skills":"1","average":"2"},{"id":"5","sprint":"Sprint 5","quantity":"1","quality":"2","skills":"1","average":"2"},{"id":"6","sprint":"Average","quantity":"1.5","quality":"1.7","skills":"1.8","average":"1.4"}]');

/***/ })

}]);
//# sourceMappingURL=src_components_TraineePerformance_tsx.js.map