"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_pages_ProfileEdit_tsx"],{

/***/ "./src/components/CountrySelector.tsx":
/*!********************************************!*\
  !*** ./src/components/CountrySelector.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _constants_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/countries */ "./src/constants/countries.ts");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/.pnpm/framer-motion@6.5.1_biqbaboplfbrettd7655fr4n2y/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/.pnpm/framer-motion@6.5.1_biqbaboplfbrettd7655fr4n2y/node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* eslint-disable */




const CountrySelector = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((props, ref) => {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const mutableRef = ref;
        const handleClickOutside = (event) => {
            if (mutableRef.current &&
                !mutableRef.current.contains(event.target) &&
                props.open) {
                props.onToggle();
                setQuery('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: ref, "data-testid": "countries" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "button", "data-testid": "country-selector-button", className: "bg-white  dark:bg-dark-bg relative w-full border border-gray-300  rounded-md shadow-sm pl-2 pr-1 py-2 text-left cursor-default focus:outline-none focus:ring-1  focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white  darksm:text-sm", "aria-haspopup": "listbox", "aria-expanded": "true", "aria-labelledby": "listbox-label", onClick: props.onToggle },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "truncate flex items-center", "data-testid": "country-selector-title" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { alt: `${props.selectedValue?.value || ''}`, "data-testid": "country-selector-flag", src: `https://purecatamphetamine.github.io/country-flag-icons/3x2/${props.selectedValue?.value}.svg`, className: 'inline mr-2 h-4 rounded-sm' }),
                    props.selectedValue?.title || 'Select a country'),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "h-5 w-5 text-gray-400 ", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fillRule: "evenodd", d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z", clipRule: "evenodd" })))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, null, props.open && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.ul, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.1 }, className: "absolute z-10  w-full bg-white dark:bg-dark-bg shadow-lg max-h-80 rounded-md text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", tabIndex: -1, role: "listbox", "aria-labelledby": "listbox-label", "aria-activedescendant": "listbox-option-3" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "sticky top-0 z-10 bg-white dark:bg-dark-bg" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: " text-gray-900 dark:text-dark-text-fill cursor-default select-none relative py-2 px-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "search", name: "search", "data-testid": "countrySearch", autoComplete: 'off', className: "rounded-md appearance-none relative block w-full px-2 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm dark:text-dark-bg dark:border-white", placeholder: t('Search a country'), onChange: (e) => setQuery(e.target.value) })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'max-h-64 scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-600 scrollbar-thumb-rounded scrollbar-thin overflow-y-scroll' }, _constants_countries__WEBPACK_IMPORTED_MODULE_1__.COUNTRIES.filter((country) => country.title.toLowerCase().startsWith(query.toLowerCase())).length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "text-gray-900  dark:text-dark-text-fill cursor-default select-none relative py-2 pl-3 pr-9", "data-testid": "no-country-option" }, t(' No countries found'))) : (_constants_countries__WEBPACK_IMPORTED_MODULE_1__.COUNTRIES.filter((country) => country.title.toLowerCase().startsWith(query.toLowerCase())).map((value, index) => {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { key: `${props.id}-${index}`, className: "text-gray-900 dark:text-dark-text-fill cursor-default select-none relative py-2 pl-3 pr-9 flex items-center hover:bg-gray-50 dark:hover:text-dark-bg transition", id: "listbox-option-0", role: "option", onClick: () => {
                            props.onChange(value.value);
                            setQuery('');
                            props.onToggle();
                        }, "data-testid": "country-selector-option" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { alt: `${value.value}`, src: `https://purecatamphetamine.github.io/country-flag-icons/3x2/${value.value}.svg`, className: 'inline mr-2 h-4 rounded-sm' }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "font-normal truncate" }, value.title),
                        value.value === props.selectedValue?.value ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-blue-600 absolute inset-y-0 right-0 flex items-center pr-8" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "h-5 w-5", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" })))) : null));
                })))))))));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountrySelector);


/***/ }),

/***/ "./src/pages/ProfileEdit.tsx":
/*!***********************************!*\
  !*** ./src/pages/ProfileEdit.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useApolloClient.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/ArrowLeftIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hook/useAuth */ "./src/hook/useAuth.tsx");
/* harmony import */ var _components_CountrySelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CountrySelector */ "./src/components/CountrySelector.tsx");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Input */ "./src/components/Input.tsx");
/* harmony import */ var _components_ProfileCoverpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProfileCoverpage */ "./src/components/ProfileCoverpage.tsx");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _constants_countries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/countries */ "./src/constants/countries.ts");
/* harmony import */ var _constants_formFields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/formFields */ "./src/constants/formFields.ts");
















const fieldState = {};
_constants_formFields__WEBPACK_IMPORTED_MODULE_9__["default"].forEach((field) => {
    fieldState[field.id] = '';
});
const UPDATE_PROFILE = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.gql) `
  mutation UpdateProfile(
    $lastName: String
    $firstName: String
    $address: String
    $city: String
    $country: String
    $phoneNumber: String
    $biography: String
    $fileName: String
    $cover: String
  ) {
    updateProfile(
      lastName: $lastName
      firstName: $firstName
      address: $address
      city: $city
      country: $country
      phoneNumber: $phoneNumber
      biography: $biography
      fileName: $fileName
      cover: $cover
    ) {
      id
      lastName
      firstName
      biography
      phoneNumber
      address
      city
      country
    }
  }
`;
function EditProfile() {
    // eslint-disable-next-line  operator-linebreak
    const { setName } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_2__.UserContext);
    const [profileFieldState, setProfileFieldState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(fieldState);
    const myRef = react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_11__.useTranslation)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useLocation)();
    const { profile } = location.state;
    // eslint-disable-next-line no-underscore-dangle
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_6__["default"])('Edit Profile');
    const { control, register, handleSubmit, formState: { errors }, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm)({ mode: 'all', defaultValues: profile });
    const client = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_14__.useApolloClient)();
    const [UpdateProfile, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_15__.useMutation)(UPDATE_PROFILE);
    const onSubmit = async (data) => {
        try {
            await UpdateProfile({
                variables: { ...data },
            });
            await client.resetStore();
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success('Profile has been updated');
            navigate('/dashboard/profile');
        }
        catch (error) { }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-light-bg dark:bg-dark-frame-bg h-full overflow-y-scroll" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ProfileCoverpage__WEBPACK_IMPORTED_MODULE_5__["default"], { data: profile, currentPage: "editProfile" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-wrap ml-4 lg:ml-64" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "lg:w-[25vw] mt-3" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row text-black dark:text-dark-text-fill", role: "tablist" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "-mb-px mr-2 last:mr-0 flex-auto text-center" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-xs font-bold uppercase px-5 py-3 shadow-sm rounded block leading-normal border-b-4 border-b-primary " }, t('Editing Profile')))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " lg:px-4 border bg-white dark:border-dark-bg  dark:bg-dark-bg dark:text-white w-[94vw] md:w-[96vw] lg:w-[75%] h-fit mx-4 lg:ml-72 my-6 rounded-lg" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-4" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "default", size: "md", style: "text-center mb-4 rounded-lg bg-primary text-white hover:bg-[#1eaad6] focus:outline-none p-1 mt-4" },
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, { to: "/dashboard/profile", className: "flex flex-row" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_17__["default"], { className: "w-6 mr-1 md:mr-2 dark:text-dark-text-fill p-1" }),
                        t('Back to Profile'))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: "mt-12 grid md:grid-cols-2 grid-cols-1 gap-4", onSubmit: handleSubmit(onSubmit) },
                    _constants_formFields__WEBPACK_IMPORTED_MODULE_9__["default"].map((field) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], { key: field.id, labelText: field.labelText, labelFor: field.labelFor, id: field.id, register: register, errors: errors, name: field.name, type: field.type, isRequired: field.isRequired, placeholder: t(`${field.placeholder}`), customClass: "dark:bg-dark-bg", handleChange: (e) => {
                            setProfileFieldState({
                                ...profileFieldState,
                                [field.id]: e.target.value,
                            });
                        } }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-start items-start mt-auto" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "Country", className: "font-semibold mb-2" }, t('Country')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.Controller, { control: control, name: "country", render: ({ field: { onChange, value, ref } }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CountrySelector__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "countries", ref: myRef, open: isOpen, onToggle: () => setIsOpen(!isOpen), onChange: (val) => {
                                        onChange(val);
                                    }, selectedValue: _constants_countries__WEBPACK_IMPORTED_MODULE_8__.COUNTRIES.find((option) => option.value === value) })) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-start items-start md:col-span-2" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "Biography", className: "font-semibold mb-2" }, t('Biography')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { name: "bio", id: "", cols: 20, rows: 5, ...register('biography'), placeholder: "Add your biography here", className: "rounded-md w-full border p-2 dark:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: "submit", className: "group md:px-4 relative my-4 md:w-fit sm:w-full flex flex-row justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-[#1280a3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-secondary sm:mx-0" },
                        loading && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { "aria-hidden": "true", className: "mr-2 w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-purple-700", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentFill" }))),
                        t('Update Profile')))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditProfile);


/***/ })

}]);
//# sourceMappingURL=src_pages_ProfileEdit_tsx.js.map