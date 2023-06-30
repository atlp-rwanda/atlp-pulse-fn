"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_components_TraineeAttendance_tsx"],{

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

/***/ "./src/components/TraineeAttendance.tsx":
/*!**********************************************!*\
  !*** ./src/components/TraineeAttendance.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Pagination */ "./src/components/Pagination.tsx");
/* harmony import */ var _dummyData_attendance_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dummyData/attendance.json */ "./src/dummyData/attendance.json");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Buttons */ "./src/components/Buttons.tsx");
/* eslint-disable */







const TraineeAttendance = () => {
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__["default"])('Attendance');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { firstContentIndex, lastContentIndex, nextPage, prevPage, page, gaps, setPage, totalPages, } = (0,_components_Pagination__WEBPACK_IMPORTED_MODULE_1__["default"])({
        contentPerPage: 3,
        count: _dummyData_attendance_json__WEBPACK_IMPORTED_MODULE_2__.length,
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg min-h-screen lg:px-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-3 md:px-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-full lg:w-[80%] lg:ml-56 mt-[90px]" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex ml-2 items-center justify-between" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-gray-800 dark:text-white font-semibold" }, t('Attendance'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex ml-[-25px] px-7 py-2  mt-4" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { className: "flex bg-primary px-4 py-2 rounded-md text-white font-medium cursor-pointer" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, t('phases')),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, t('Phase 1')),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, t('Phase 2')),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, t('Phase 3')),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, t('Phase 4')),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, t('Phase 5'))))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "-mx-4 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: "min-w-full leading-normal" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider" }, t('Sprint')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase md:table-cell sm:hidden tracking-wider" }, t('Session')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider" }, t('Record')),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-center text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider" })),
                                        _dummyData_attendance_json__WEBPACK_IMPORTED_MODULE_2__.slice(firstContentIndex, lastContentIndex).map((item) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { key: item.id },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-center items-center" },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "" },
                                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-900 text-center dark:text-white whitespace-no-wrap" }, item.sprint)))),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm md:table-cell sm:hidden" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-900  dark:text-white whitespace-no-wrap text-center " }, item.session)),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-900  dark:text-white whitespace-no-wrap text-center" }, item.record)),
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm" },
                                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, { to: "/dashboard/attendance-details" },
                                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_4__["default"], { variant: "primary", size: "sm", style: "px-4 py-0 text-sm" }, t('Details'))))))))))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center justify-center gap-1 mt-12 mb-0" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: prevPage, "data-testid": "prev", className: `page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${page === 1 && 'disabled'}` }, "\u2190"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: () => setPage(1), "data-testid": "page1", className: `page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${page === 1 && 'disabled'}` }, "1"),
                    gaps.paginationGroup.map((el) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: () => setPage(el), "data-testid": "page2", key: el, className: `page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${page === el ? 'active' : ''}` }, el))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: () => setPage(totalPages), "data-testid": "page3", className: `page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${page === totalPages && 'disabled'}` }, totalPages),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: nextPage, "data-testid": "next", className: `page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${page === totalPages && 'disabled'}` }, "\u2192"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TraineeAttendance);


/***/ }),

/***/ "./src/dummyData/attendance.json":
/*!***************************************!*\
  !*** ./src/dummyData/attendance.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"1","sprint":"Sprint 1","session":"Demo","record":"1"},{"id":"2","sprint":"Sprint 2","session":"Standup","record":"2"},{"id":"3","sprint":"Sprint 3","session":"Demo","record":"1"},{"id":"4","sprint":"Sprint 4","session":"E-level up","record":"1"},{"id":"5","sprint":"Sprint 5","session":"Stand up","record":"2"}]');

/***/ })

}]);
//# sourceMappingURL=src_components_TraineeAttendance_tsx.js.map