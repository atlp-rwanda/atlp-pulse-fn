"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_pages_Organization_AdminLogin_tsx"],{

/***/ "./src/pages/Organization/AdminLogin.tsx":
/*!***********************************************!*\
  !*** ./src/pages/Organization/AdminLogin.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useApolloClient.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/md */ "./node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _components_ButtonLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ButtonLoading */ "./src/components/ButtonLoading.tsx");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hook/useAuth */ "./src/hook/useAuth.tsx");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _LoginMutation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginMutation */ "./src/pages/Organization/LoginMutation.tsx");
/* eslint-disable */














function AdminLogin() {
    const orgToken = localStorage.getItem('orgToken');
    const orgName = localStorage.getItem('orgName');
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_5__["default"])('Login');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const [passwordShown, setPasswordShown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    /* istanbul ignore next */
    const tooglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const { register, handleSubmit, formState: { errors }, setError, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();
    const { login } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_4__.UserContext);
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
    const { state } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useLocation)();
    const [LoginUser, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useMutation)(_LoginMutation__WEBPACK_IMPORTED_MODULE_6__["default"]);
    const client = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useApolloClient)();
    const onSubmit = async (userInput) => {
        userInput.orgToken = orgToken;
        try {
            const { data } = await LoginUser({
                variables: { loginInput: userInput },
                onCompleted: async (data) => {
                    /* istanbul ignore next */
                    react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(data.addMemberToCohort);
                    /* istanbul ignore next */
                    login(data.loginUser);
                    /* istanbul ignore next */
                    await client.resetStore();
                    /* istanbul ignore next */
                    react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(t(`Welcome`));
                    if (state) {
                        navigate(`${state}`);
                    }
                    else {
                        navigate('/dashboard/');
                    }
                    /* istanbul ignore if */
                    if (data.loginUser) {
                        //navigate to ${state},in case you want to make it default (/dashboard),  
                        /* istanbul ignore next */
                        {
                            data.loginUser.user.role === 'superAdmin' ?
                                navigate(`/dashboard/organizations`) : (data.loginUser.user.role === "admin") ?
                                navigate(`/dashboard/trainees`) : (data.loginUser.user.role === 'coordinator') ?
                                navigate(`/dashboard/trainees`) : (data.loginUser.user.role === 'manager') ?
                                navigate(`/dashboard/coordinators`) : navigate('/dashboard/performance');
                        }
                    }
                    /* istanbul ignore next */
                    return;
                },
                onError: (err) => {
                    /* istanbul ignore next */
                    if (err.message.toLowerCase() !== 'invalid credential') {
                        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(err.message);
                    }
                    else {
                        /* istanbul ignore next */
                        setError('password', {
                            type: 'custom',
                            message: t('Invalid credentials'),
                        });
                        /* istanbul ignore next */
                        setError('email', {
                            type: 'custom',
                            message: t('Invalid credentials'),
                        });
                    }
                },
            });
        }
        catch (error) {
            /* istanbul ignore next */
            setError('password', {
                type: 'custom',
                message: t('Invalid credentials'),
            });
            /* istanbul ignore next */
            setError('email', {
                type: 'custom',
                message: t('Invalid credentials'),
            });
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full text-center py-2  dark:bg-dark-bg bg-gray-100  sm:flex sm:items-center sm:justify-center h-full" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "md:rounded-xl md:shadow-xl md:w-full mt-20 sm:max-w-xl sm:rounded-none sm:shadow-none dark:shadow-2xl mb-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "py-10 sm:py-8 " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-2xl font-bold text-primary dark:text-dark-text-fill " },
                    t('Welcome to'),
                    " ",
                    orgName),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "border-[1px] w-10 bg-primary border-primary inline-block mb-2" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " text-sm text-center dark:text-dark-text-fill" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, { to: "/login/org", className: "mx-1 text-primary", "data-testid": "switch" },
                        t('Switch'),
                        " ",
                        t('your organization'))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col items-center" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { action: "#none", onSubmit: handleSubmit(onSubmit), "data-testid": "loginForm" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full border border-gray rounded-md bg-gray-100 p-2 my-4 flex items-center mb-2 dark:bg-dark-bg " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__.FaRegEnvelope, { className: "text-gray-400 mr-2" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { "data-testid": "email", type: "email", ...register('email', { required: 'Email is required' }), placeholder: t('Email'), className: "bg-gray-100 outline-none text-sm flex-1 px-2 dark:border-white dark:bg-dark-bg dark:text-white " })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-left mb-1 pl-4" }, errors.email && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { className: "text-red-600" }, errors.email.message))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "md:w-full border border-gray rounded-md bg-gray-100 p-2 my-4 flex items-center  mb-2 dark:border-white dark:bg-dark-bg" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_14__.MdLockOutline, { className: "text-gray-400 mr-2 " }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { "data-testid": "password", type: passwordShown ? 'text' : 'password', ...register('password', {
                                    required: 'Password is required',
                                }), placeholder: t('Password'), className: "bg-gray-100 outline-none text-sm flex-1 dark:border-white dark:bg-dark-bg dark:text-white" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-gray-400 cursor-pointer onClick= {()=> handleShowPassword}" }, passwordShown ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__.FaRegEye, { onClick: tooglePassword })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_15__.FiEyeOff, { onClick: tooglePassword })))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-left mb-1 pl-4" }, errors.password ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { className: "text-red-600" }, errors.password.message)) : ('')),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-64 justify-between rounded mb-5 mt-5" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: "checkbox", className: "flex items-center text-xs dark:text-dark-text-fill " },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "checkbox", name: "remember", className: "mr-1  dark:text-dark-text-fill dark:border-white dark:bg-dark-frame-bg" }),
                                t('Remember me')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, { to: "/reset-password", className: "text-xs dark:text-dark-text-fill " }, t('Forgot Password?'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full justify-center ml-[-7px]" }, loading ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ButtonLoading__WEBPACK_IMPORTED_MODULE_2__["default"], { style: 'rounded-full inline-block' })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"], { type: "submit", variant: "transparentbtn", size: "md", style: " w-full bg-primary inline-block rounded-md lg:px-12 lg:py-2 sm:px-4 sm:py-1 md:font-semibold sm:mt-2 sm:font-medium text-white" }, t('Sign In')))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "my-4 text-sm text-center dark:text-dark-text-fill" },
                    t('First time here?'),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, { to: "/signup/org", className: "mx-1 text-primary" }, t('Register')),
                    t('your organization'))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminLogin);


/***/ }),

/***/ "./src/pages/Organization/LoginMutation.tsx":
/*!**************************************************!*\
  !*** ./src/pages/Organization/LoginMutation.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");

const LOGIN_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation Mutation($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      token
      user {
        id
        role
        email
        password
        profile {
          id
          firstName
          lastName
          user {
            id
            role
            email
            password
            profile {
              id
              firstName
              lastName
              name
              address
              city
              country
              phoneNumber
              biography
              avatar
              cover
            }
          }
        }
      }
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LOGIN_MUTATION);


/***/ })

}]);
//# sourceMappingURL=src_pages_Organization_AdminLogin_tsx.js.map