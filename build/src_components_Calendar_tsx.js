"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_components_Calendar_tsx"],{

/***/ "./src/components/Calendar.tsx":
/*!*************************************!*\
  !*** ./src/components/Calendar.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/react */ "./node_modules/.pnpm/@fullcalendar+react@5.11.5_biqbaboplfbrettd7655fr4n2y/node_modules/@fullcalendar/react/dist/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/.pnpm/@fullcalendar+daygrid@5.11.5/node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/.pnpm/@fullcalendar+interaction@5.11.5/node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker */ "./node_modules/.pnpm/react-datepicker@4.14.1_biqbaboplfbrettd7655fr4n2y/node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/.pnpm/react-datepicker@4.14.1_biqbaboplfbrettd7655fr4n2y/node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-tooltip */ "./node_modules/.pnpm/react-tooltip@4.5.1_biqbaboplfbrettd7655fr4n2y/node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* eslint-disable */









/* istanbul ignore next */
const initialData = [
    {
        title: 'Event title 1',
        start: '2022-07-21',
        end: '2022-07-21',
        hostName: 'Samuel NISHIMWE',
        timeToStart: '14:00',
        timeToFinish: '16:00',
    },
    {
        title: 'Event title 2',
        start: '2022-07-29',
        end: '2022-07-29',
        hostName: 'Jean MAKARA',
        timeToStart: '11:00',
        timeToFinish: '12:00',
    },
    {
        title: 'Event title 3',
        start: '2022-07-23',
        end: '2022-07-23',
        hostName: 'Eric MALABA',
        timeToStart: '8:00',
        timeToFinish: '11:00',
    },
];
const Calendar = () => {
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_6__["default"])('Calendar');
    const [addEventModel, setAddEventModel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [newEvent, setNewEvent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        title: '',
        start: '',
        end: '',
        hostName: '',
        timeToStart: '',
        timeToFinish: '',
    });
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialData);
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const renderEvent = /* istanbul ignore next */ (e) => (
    /* istanbul ignore next */
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-html": true, "data-tip": `<div >  ${e.event.title} <br> ${e.event.extendedProps.hostName}  <br> ${e.event.extendedProps.timeToStart} - ${e.event.extendedProps.timeToFinish}</div> `, className: "bg-primary text-white max-w-full min-w-full overflow-auto text-xs md:text-sm" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "px-3 py-1 " }, e.event.title),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "px-3 py-1 " }, e.event.extendedProps.hostName),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "px-3 py-1 " },
            e.event.extendedProps.timeToStart,
            " -",
            ' ',
            e.event.extendedProps.timeToFinish),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], { "data-html": true })));
    const removeModel = (e) => {
        e.preventDefault();
        const newState = !addEventModel;
        setAddEventModel(newState);
    };
    const handleDateClick = () => {
        const newState = !addEventModel;
        setAddEventModel(newState);
    };
    /* istanbul ignore next */
    const handleAddEvent = (e) => {
        e.preventDefault();
        setData([...data, newEvent]);
        setNewEvent({
            title: '',
            start: '',
            end: '',
            hostName: '',
            timeToStart: '',
            timeToFinish: '',
        });
        setTimeout(() => {
            setAddEventModel(false);
        }, 1000);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${addEventModel === true ? 'block' : 'hidden'}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-title w-full flex  flex-wrap justify-center items-center  " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-bold text-sm dark:text-white text-center w-11/12" }, t('Add event')),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: " bg-primary border-b my-3 w-full" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { "data-testid": "handleAddEvent", className: " py-3 px-8", onSubmit /* istanbul ignore next */: (e) => 
                        /* istanbul ignore next */
                        handleAddEvent(e) },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", "data-testid": "setNewEvent", name: "eventTitle", className: " dark:bg-dark-tertiary border dark:text-white border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full", placeholder: t('Event title'), value: newEvent.title, 
                                    // eslint-disable-next-line prettier/prettier
                                    onChange: (e) => setNewEvent({ ...newEvent, title: e.target.value }) }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", name: "hostName", className: " dark:bg-dark-tertiary dark:text-white border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full", placeholder: t('Host name'), value: newEvent.hostName, onChange /* istanbul ignore next */: (e) => 
                                    /* istanbul ignore next */ setNewEvent({
                                        ...newEvent,
                                        hostName: e.target.value,
                                    }) }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_8___default()), { className: " dark:bg-dark-tertiary dark:text-white border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full", placeholderText: t('Start Date'), style: { marginRight: '10px' }, selected: newEvent.start, onChange /* istanbul ignore next */: (start) => 
                                    /* istanbul ignore next */ setNewEvent({
                                        ...newEvent,
                                        start,
                                    }) }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_8___default()), { className: "dark:bg-dark-tertiary dark:text-white border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full", placeholderText: t('End Date'), style: { marginRight: '10px' }, selected: newEvent.end, onChange: (end) => 
                                    /* istanbul ignore next */
                                    setNewEvent({ ...newEvent, end }) }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "time", name: "hostName", className: "dark:bg-dark-tertiary dark:text-white border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full", placeholder: t('Start time'), value: newEvent.timeToStart, onChange /* istanbul ignore next */: (e) => 
                                    /* istanbul ignore next */
                                    setNewEvent({ ...newEvent, timeToStart: e.target.value }) }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input my-3 h-9 " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grouped-input flex items-center h-full w-full rounded-md" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "time", name: "hostName", className: "dark:bg-dark-tertiary dark:text-white border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full", placeholder: t('End time'), value: newEvent.timeToFinish, onChange: (e) => 
                                    /* istanbul ignore next */
                                    setNewEvent({ ...newEvent, timeToFinish: e.target.value }) }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-between" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { "data-testid": "removeModel", className: "py-2 w-[40%] md:w-1/3 bg-[#31699C] rounded font-sans text-sm text-white", onClick: (e) => removeModel(e) }, t('cancel')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "text-white py-2 w-[40%] md:w-1/3 bg-primary rounded" }, t('save'))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "pt-24 px-4 md:px-40 md:pl-80 pb-20  w-full dark:bg-dark-frame-bg dark:text-white h-full overflow-y-scroll" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full flex justify-center text-xl md:text-4xl dark:text-primary mb-10" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, t('Calendar'))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { "data-testid": "handleDateClick", className: "text-white py-2 w-1/2 md:w-1/3 bg-primary rounded", onClick: handleDateClick }, t('Add event')),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_1__["default"], { eventContent: renderEvent, events: data, plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__["default"]], initialView: "dayGridMonth" }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calendar);


/***/ })

}]);
//# sourceMappingURL=src_components_Calendar_tsx.js.map