"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_components_Payment_tsx"],{

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Payment-steps/Steper.tsx":
/*!*************************************************!*\
  !*** ./src/components/Payment-steps/Steper.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_StepperContex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contexts/StepperContex */ "./src/components/Payment-steps/contexts/StepperContex.tsx");
/* eslint-disable */


const Stepper = ({ steps }) => {
    const [newStep, setNewStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const stepsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const { currentStep } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_StepperContex__WEBPACK_IMPORTED_MODULE_1__.FormContext);
    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps];
        let count = 0;
        while (count < newSteps.length) {
            //current step
            if (count === stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true,
                };
                count++;
            }
            //step completed
            else if (count < stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true,
                };
                count++;
            }
            //step pending
            else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false,
                };
                count++;
            }
        }
        return newSteps;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const stepsState = steps.map((step, index) => Object.assign({}, {
            description: step,
            completed: false,
            highlighted: index === 0 ? true : false,
            selected: index === 0 ? true : false,
        }));
        stepsRef.current = stepsState;
        const current = updateStep(currentStep - 1, stepsRef.current);
        setNewStep(current);
    }, [steps, currentStep]);
    const stepsDisplay = newStep.map((step, index) => {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: index, className: index !== newStep.length - 1
                ? 'w-full flex items-center'
                : 'flex items-center' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative flex flex-col items-center text-teal-600" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3  ${step.selected ? 'bg-primary text-white font-bold border' : ''}` }, step.completed ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-white font-bold text-xl" }, "\u2713")) : (index + 1)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `absolute top-0  text-center mt-16 w-32 text-xs font-medium uppercase ${step.highlighted ? 'text-primary' : 'text-gray-400'}` }, step.description)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `flex-auto border-t-2 transition duration-500 ease-in-out  ${step.completed ? 'bg-primary' : 'border-gray-300 '}  ` })));
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mx-4 p-4 flex justify-between items-center" }, stepsDisplay));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stepper);


/***/ }),

/***/ "./src/components/Payment-steps/steps/Account.tsx":
/*!********************************************************!*\
  !*** ./src/components/Payment-steps/steps/Account.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/react */ "./node_modules/.pnpm/@iconify+react@3.2.2_react@18.2.0/node_modules/@iconify/react/dist/iconify.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../style.css */ "./src/style.css");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _contexts_StepperContex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/StepperContex */ "./src/components/Payment-steps/contexts/StepperContex.tsx");
/* eslint-disable */







const Account = () => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { setCurrentStep } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_StepperContex__WEBPACK_IMPORTED_MODULE_4__.FormContext);
    const { register, formState: { errors }, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useFormContext)();
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col w-3/4 mx-auto " },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "md:w-full" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", { className: "text-lg font-semibold" },
                "1. ",
                t('Billing Contact')),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col flex-wrap" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col md:flex-row md:gap-3  my-2" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col mx-0 w-full" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: "organizationName", className: "text-light-text mb-2 required dark:text-dark-text-fill text-base pt-2" }, t('Organization name')),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { ...register('organization', {
                                required: `${t('The organization name is required')}`,
                            }), className: "dark:bg-dark-frame-bg py-2 appearance-none border  rounded w-full  px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline", id: "organization", type: "text", "data-testid": "organization", placeholder: t('Organization') }),
                        errors?.organization && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "font-bold text-red-300" }, errors.organization.message))),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col mx-0 w-full" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: "streetAddress", className: "text-light-text dark:text-dark-text-fill text-base mb-2 pt-2" }, t('Street address')),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { ...register('street', {
                                required: `${t('Street name is required')}`,
                            }), name: "street", className: "dark:bg-dark-frame-bg py-2 appearance-none border rounded w-full  px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline", id: "street", type: "text", "data-testid": "street", placeholder: t('Street') }),
                        errors?.street && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "font-bold text-red-300" }, errors.street.message)))),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col md:flex-row md:gap-3  my-2" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col mx-0 w-full" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: "city", className: "text-light-text mb-2 dark:text-dark-text-fill text-base pt-2" }, t('City')),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { ...register('city', {
                                required: `${t('The city name is required')}`,
                            }), className: "dark:bg-dark-frame-bg py-2 appearance-none border my-1 rounded w-full  px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline", id: "city", type: "text", placeholder: t('City') }),
                        errors?.city && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "font-bold text-red-300" }, errors.city.message))),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col mx-0 w-full" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: "postal", className: "text-light-text mb-2 dark:text-dark-text-fill text-base pt-2" }, t('Postal code')),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { ...register('postal'), className: "dark:bg-dark-frame-bg py-2 appearance-none border my-1 rounded w-full  px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline", id: "Postal", type: "text", "data-testid": "postal", "aria-label": "cost-input", placeholder: t(' Ex: 12345') }),
                        errors?.postal && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "font-bold text-red-300" }, errors.postal.message)))))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", { className: "text-lg font-semibold" },
                "2. ",
                t('Payment Method')),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex w-full justify-around mx-auto py-4", "data-testid": "icon" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: "credit-card", className: "focus:bg-white selection:bg-white" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col" },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, { icon: "bi:credit-card-fill", color: "#148fb6", width: "59", height: "53", "data-testid": "iconx" }),
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", { className: "text-sm" }, t('Credit card')))),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { className: "focus:bg-white cursor-pointer appearance-none selection:bg-white", type: "radio", value: "credit-card", ...register('method', {
                            required: `${t('A payment method is required')}`,
                        }), id: "credit-card" })),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: "apple-pay", className: "focus:bg-white selection:bg-white" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col" },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col  selection:bg-white" },
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, { icon: "la:cc-apple-pay", color: "#148fb6", width: "59", height: "53" }),
                                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", { className: "text-sm" }, t('Apple Pay'))))),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { className: "focus:bg-white cursor-pointer appearance-none selection:bg-white", type: "radio", value: "apple-pay", ...register('method', {
                            required: `${t('A payment method is required')}`,
                        }), id: "apple-pay" })),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: "paypal", className: "focus:bg-white checked:bg-white selection:bg-white" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col" },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, { icon: "fa:cc-paypal", color: "#148fb6", width: "59", height: "53" }),
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", { className: "text-sm" }, "PayPal"))),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { className: "focus:bg-white cursor-pointer appearance-none selection:bg-white", type: "radio", value: "paypal", ...register('method', {
                            required: `${t('A payment method is required')}`,
                        }), id: "paypal" }))),
            errors?.method && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "font-bold text-red-300 text-sm" }, errors.method.message))),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "container flex justify-end mt-4 mb-8" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "primary", size: "lg", type: 'submit' }, t('Next')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Account);


/***/ }),

/***/ "./src/components/Payment-steps/steps/Complete.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Payment-steps/steps/Complete.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Final)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _contexts_StepperContex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/StepperContex */ "./src/components/Payment-steps/contexts/StepperContex.tsx");





function Final() {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const { setCurrentStep } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_StepperContex__WEBPACK_IMPORTED_MODULE_2__.FormContext);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col items-center" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mt-3 text-xl font-semibold uppercase text-primary" }, t('Congratulations!')),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-lg font-semibold text-gray-500" }, t('Your Payment is successfully done!!')),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "my-4" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "primary", size: "lg", "data-testid": "link1", onClick: () => setCurrentStep(2) }, t('Back')),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, { to: "/signup/org" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "primary", size: "lg", "data-testid": "link" }, t('Continue registration')))))));
}


/***/ }),

/***/ "./src/components/Payment-steps/steps/Details.tsx":
/*!********************************************************!*\
  !*** ./src/components/Payment-steps/steps/Details.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cleave_js_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cleave.js/react */ "./node_modules/.pnpm/cleave.js@1.6.0/node_modules/cleave.js/react.js");
/* harmony import */ var cleave_js_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cleave_js_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _contexts_StepperContex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/StepperContex */ "./src/components/Payment-steps/contexts/StepperContex.tsx");
/* eslint-disable */






const Account = () => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { setCurrentStep } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_StepperContex__WEBPACK_IMPORTED_MODULE_3__.FormContext);
    const { register, control, formState: { errors }, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useFormContext)();
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col  justify-center items-center w-3/4 mx-auto " },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "w-full md:items-center" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", { className: "text-lg font-semibold" }, t('Enter your card details')),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col w-full items-center flex-wrap mx-auto" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "md:flex md:flex-row w-full gap-3 " },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col py-2 w-full" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: "holdername", className: "text-light-text dark:text-dark-text-fill text-base mb-2" }, t('Card holder name')),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { ...register('cardName', {
                                required: `${t('A valid card holder name is required')}`,
                            }), className: "dark:bg-dark-frame-bg py-2 appearance-none border rounded w-full  px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline", id: "holder", type: "text", "data-testid": "cardname", placeholder: t('name') }),
                        errors?.cardName && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "font-bold text-red-300" }, errors.cardName.message))),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col py-2 w-full" },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: "Cardnumber", className: "text-light-text dark:text-dark-text-fill text-base mb-2" }, t('Card number')),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, { name: "cardNumber", rules: { required: `${t('The card number is required')}` }, control: control, render: ({ field: { onChange, onBlur, value, name, ref } }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((cleave_js_react__WEBPACK_IMPORTED_MODULE_0___default()), { options: { creditCard: true }, name: "card name", value: value, className: "dark:bg-dark-frame-bg py-2 appearance-none border w-full rounded px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline masked", onChange: onChange, "data-testid": "cardnumber", placeholder: t('Enter Credit card number') })) }),
                        errors?.cardNumber && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "font-bold text-red-300" }, errors.cardNumber.message)))),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex lg:flex-row flex-col  justify-around  my-3 w-full " },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col md:flex-row md:gap-3 w-full " },
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col py-2 w-full" },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: "holdername", className: "text-light-text dark:text-dark-text-fill text-base mb-2" }, t('Expiration')),
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.Controller, { name: "mm", control: control, rules: {
                                    required: `${t('The expiration date is required')}`,
                                }, render: ({ field: { onChange, onBlur, value, name, ref }, }) => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((cleave_js_react__WEBPACK_IMPORTED_MODULE_0___default()), { onChange: onChange, className: "dark:bg-dark-frame-bg py-2 appearance-none border w-full rounded px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline", id: "holder", type: "text", value: value, "data-testid": "mm", placeholder: t('MM / YY'), options: { date: true, datePattern: ['m', 'y'] } })) }),
                            errors?.mm && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "font-bold text-red-300" }, errors.mm.message))),
                        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "flex flex-col py-2 w-full" },
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { htmlFor: "Cardnumber", className: "text-light-text dark:text-dark-text-fill text-base mb-2" }, t('CVV')),
                            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { ...register('cvv', {
                                    required: `${t('CVV Must be 3 number')}`,
                                }), maxLength: 3, onInput: (e) => {
                                    if (e.target.value.length > e.target.maxLength)
                                        e.target.value = e.target.value.slice(0, e.target.maxLength);
                                }, className: "dark:bg-dark-frame-bg py-2 appearance-none border  rounded  w-full px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline", type: "number", "data-testid": "cvv", "data-slots": "0", placeholder: t('000') }),
                            errors?.cvv && (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "font-bold text-red-300" }, errors.cvv.message)))))),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "container flex justify-around mt-4 mb-8" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "primary", size: "lg", "data-testid": "btn-2", onClick: () => setCurrentStep(1) }, "Back"),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "primary", size: "lg", type: 'submit' }, "Next")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Account);


/***/ }),

/***/ "./src/components/Payment.tsx":
/*!************************************!*\
  !*** ./src/components/Payment.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _Payment_steps_contexts_StepperContex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Payment-steps/contexts/StepperContex */ "./src/components/Payment-steps/contexts/StepperContex.tsx");
/* harmony import */ var _Payment_steps_Steper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Payment-steps/Steper */ "./src/components/Payment-steps/Steper.tsx");
/* harmony import */ var _Payment_steps_steps_Account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Payment-steps/steps/Account */ "./src/components/Payment-steps/steps/Account.tsx");
/* harmony import */ var _Payment_steps_steps_Complete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Payment-steps/steps/Complete */ "./src/components/Payment-steps/steps/Complete.tsx");
/* harmony import */ var _Payment_steps_steps_Details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Payment-steps/steps/Details */ "./src/components/Payment-steps/steps/Details.tsx");
/* eslint-disable */










function Pay() {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    const { currentStep, setCurrentStep } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Payment_steps_contexts_StepperContex__WEBPACK_IMPORTED_MODULE_3__.FormContext);
    const steps = [
        `${t('Account Information')}`,
        `${t('Payment')}`,
        `${t('Complete')}`,
    ];
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({ mode: 'all' });
    /* istanbul ignore next */
    const onSubmit = async (data) => {
        /* istanbul ignore next */
        if (currentStep == 1) {
            setCurrentStep(2);
        }
        else if (currentStep === 2) {
            setCurrentStep(3);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${t('The payment from')} ${data.cardName} ${t('has been logged')}`);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_9__.FormProvider, { ...methods },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "md:flex md:flex-col md:items-center md:justify-center w-full  grow  py-2  dark:bg-dark-bg bg-gray-100  sm:flex sm:flex-row sm:items-center sm:justify-center" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "md:w-3/4 mx-auto md:mx-auto  rounded-2xl dark:bg-dark-frame-bg bg-light-bg py-2 my-16" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "my-4" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-primary text-center text-lg md:w-96 sm:w-56 mx-auto", "data-testid": "text1" }, t("Let's get started with the realistic management in edutech"))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { action: "", onSubmit: methods.handleSubmit(onSubmit) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "container horizontal mt-5 mx-auto" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Payment_steps_Steper__WEBPACK_IMPORTED_MODULE_4__["default"], { steps: steps, currentStep: currentStep }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "my-10 p-10" },
                            currentStep === 1 && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Payment_steps_steps_Account__WEBPACK_IMPORTED_MODULE_5__["default"], null),
                            currentStep === 2 && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Payment_steps_steps_Details__WEBPACK_IMPORTED_MODULE_7__["default"], null),
                            currentStep === 3 && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Payment_steps_steps_Complete__WEBPACK_IMPORTED_MODULE_6__["default"], null))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pay);


/***/ })

}]);
//# sourceMappingURL=src_components_Payment_tsx.js.map