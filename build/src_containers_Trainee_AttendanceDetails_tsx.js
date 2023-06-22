"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_containers_Trainee_AttendanceDetails_tsx"],{

/***/ "./src/components/TraineeAttendanceDetails.tsx":
/*!*****************************************************!*\
  !*** ./src/components/TraineeAttendanceDetails.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons */ "./src/components/Buttons.tsx");
/* eslint-disable */



const TraineeAttendanceDetails = () => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-neutral-100  dark:bg-dark-frame-bg md:flex sm:hidden flex-col justify-start items-center  min-h-screen " },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: "lg:w-9/12 md:w-11/12 lg:h-[70%] md:h-[60%] md:ml-0 lg:ml-32 dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md mt-32 mb-[-120px]" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-gray-300  bg-gray-100  dark:bg-dark-tertiary" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "lg:py-3 md:py-2 lg:px-3 md:px-2  text-left  text-[#6B7280] dark:text-dark-text-fill " }, t('Session')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "lg:py-3 md:py-2 lg:px-10 md:px-7 text-center text-[#6B7280] dark:text-dark-text-fill" }, t('Record')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "lg:py-3 md:py-2 text-left text-[#6B7280] dark:text-dark-text-fill" }, t('Comment')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "lg:py-3 md:py-2" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", { className: " text-center " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-light-text dark:text-dark-text-fill bg-light-bg dark:bg-dark-bg " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "lg:py-10 md:py-0 px-10 text-left  " }, t('Demo')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3 " }, "1"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "lg:py-6 md:py-3 text-start lg:text-sm" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3 px-8" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "primary", size: "sm", style: "px-4 py-0 text-sm" }, t('Reply')))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-black dark:text-dark-text-fill bg-gray-100 dark:bg-dark-tertiary " },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-10 px-10 text-left" }, t('Standup')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3 " }, "1"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3  text-start text-sm" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "primary", size: "sm", style: "px-4 py-0 text-sm" }, t('Reply'))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "sm:flex sm:flex-col md:hidden justify-center items-center bg-light-bg dark:bg-dark-frame-bg dark:text-white  text-black" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-center items-start w-full py-4 px-4 ml-4 mt-4" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "font-semibold mt-12 " },
                    " ",
                    t('Sprint 1')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-medium text-left text-[#6B7280] dark:text-white " }, "June 20, 2022 - June 24, 2022")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-center items-center w-11/12 border shadow rounded-lg dark:border-dark-frame-bg bg-white  dark:bg-dark-bg pb-4 mt-4 pt-16" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: " rounded-lg w-7/12 h-[70%] overflow-hidden  md:shadow mt-[-40px]" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-gray-300 dark:text-white  bg-gray-100 dark:bg-dark-tertiary " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "py-2 px-3 text-center text-[#6B7280] dark:text-dark-text-fill " }, t('Session')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "py-2 px-10 text-center text-[#6B7280] dark:text-dark-text-fill" }, t('Demo')))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", { className: " text-center" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-light-text bg-light-bg dark:bg-dark-bg dark:text-dark-text-fill  " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3 px-10" }, t('Record')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: " " }, "1")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-black bg-gray-100 dark:bg-dark-tertiary dark:text-dark-text-fill  " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-10 px-10 text-left" }, t('Comments')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3  text-start text-sm" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit")))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "px-4 py-1 ml-40 mt-4 rounded-md dark:text-dark-text-fill text-center bg-primary text-white  text-sm" }, t('Reply'))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-center items-center w-11/12 border shadow rounded-lg dark:border-dark-frame-bg bg-white dark:bg-dark-bg  pb-4 mt-4 pt-16" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: " rounded-lg w-7/12 h-[70%] overflow-hidden  md:shadow mt-[-40px]" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-gray-300 dark:text-dark-text-fill bg-gray-100 dark:bg-dark-tertiary" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "py-2 px-3 text-center text-[#6B7280] dark:text-dark-text-fill  " }, t('Session')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "py-2 px-10 text-center text-[#6B7280] dark:text-dark-text-fill" }, t('Standup')))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", { className: " text-center" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-light-text bg-light-bg dark:bg-dark-bg dark:text-dark-text-fill " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3 px-10" }, t('Record')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: " " }, "1")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { className: "text-black bg-gray-100 dark:bg-dark-tertiary dark:text-dark-text-fill  " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-10 px-10 text-left" }, t('Comments')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "py-3  text-start text-sm" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit")))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "px-4 py-1 ml-40 mt-4 rounded-md dark:text-dark-text-fill text-center bg-primary text-white  text-sm" }, t('Reply'))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TraineeAttendanceDetails);


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

/***/ "./src/containers/Trainee/AttendanceDetails.tsx":
/*!******************************************************!*\
  !*** ./src/containers/Trainee/AttendanceDetails.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TraineeAttendanceDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TraineeAttendanceDetails */ "./src/components/TraineeAttendanceDetails.tsx");
/* harmony import */ var _components_TraineeComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TraineeComments */ "./src/components/TraineeComments.tsx");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* eslint-disable */




function AttendanceDetails() {
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__["default"])('Attendance details');
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-neutral-100 dark:bg-dark-frame-bg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TraineeAttendanceDetails__WEBPACK_IMPORTED_MODULE_1__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TraineeComments__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttendanceDetails);


/***/ })

}]);
//# sourceMappingURL=src_containers_Trainee_AttendanceDetails_tsx.js.map