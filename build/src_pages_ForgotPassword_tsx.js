"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_pages_ForgotPassword_tsx"],{

/***/ "./src/Mutations/resetPassword.tsx":
/*!*****************************************!*\
  !*** ./src/Mutations/resetPassword.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FORGOT_PASSWORD: () => (/* binding */ FORGOT_PASSWORD),
/* harmony export */   RESET_PASSWORD_EMAIL: () => (/* binding */ RESET_PASSWORD_EMAIL),
/* harmony export */   VERIFY_RESET_PASSWORD_TOKEN: () => (/* binding */ VERIFY_RESET_PASSWORD_TOKEN)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");

const FORGOT_PASSWORD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation ResetUserPassword(
    $password: String!
    $confirmPassword: String!
    $token: String!
  ) {
    resetUserPassword(
      password: $password
      confirmPassword: $confirmPassword
      token: $token
    )
  }
`;
const RESET_PASSWORD_EMAIL = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;
const VERIFY_RESET_PASSWORD_TOKEN = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query Query($token: String!) {
    verifyResetPasswordToken(token: $token)
  }
`;


/***/ }),

/***/ "./src/pages/ForgotPassword.tsx":
/*!**************************************!*\
  !*** ./src/pages/ForgotPassword.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotPassword)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "./node_modules/.pnpm/react-hook-form@7.45.0_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");
/* harmony import */ var _components_ButtonLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ButtonLoading */ "./src/components/ButtonLoading.tsx");
/* harmony import */ var _Mutations_resetPassword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Mutations/resetPassword */ "./src/Mutations/resetPassword.tsx");











function ForgotPassword() {
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
    const token = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    const originalToken = token.replaceAll('*', '.');
    const [passwordShown, setPasswordShown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [buttonLoading, setButtonLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const tooglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__["default"])('Forgot Password');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const { reset, register, handleSubmit, formState: { errors }, setError, } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();
    const [ResetPassword, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(_Mutations_resetPassword__WEBPACK_IMPORTED_MODULE_5__.FORGOT_PASSWORD, {
        onCompleted: (data) => {
            setTimeout(() => {
                setButtonLoading(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(t('You have Successfully reset your password!'));
                navigate('/login/org');
            }, 2000);
        },
        onError: (err) => {
            setTimeout(() => {
                setButtonLoading(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(err.message);
            }, 1000);
        },
    });
    const [VerifyResetPassword] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useLazyQuery)(_Mutations_resetPassword__WEBPACK_IMPORTED_MODULE_5__.VERIFY_RESET_PASSWORD_TOKEN, {
        variables: {
            token: originalToken,
        },
        onError: (err) => {
            navigate('/pageNotFound');
        },
    });
    const onSubmit = async (userInput) => {
        setButtonLoading(true);
        setTimeout(async () => {
            try {
                await ResetPassword({
                    variables: {
                        password: userInput.password,
                        confirmPassword: userInput.confirmPassword,
                        token: originalToken,
                    },
                });
                return;
            }
            catch (error) {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.message);
            }
        }, 2000);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        VerifyResetPassword();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "md:flex md:flex-col md:items-center md:justify-center w-full min-h-screen -mt-3 -mb-16 xl:-mt-14  xl:-mb-28 text-left dark:bg-dark-frame-bg bg-gray-100 sm:flex sm:flex-row sm:items-center sm:justify-center" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white sm:rounded-2xl py-8 md:py-0 md:shadow-2xl md:flex xl:w-3/4 md:w-[90%] md:max-w-4xl sm:w-full px-2 md:px-0 mx-20 md:mx-0 sm:shadow-none dark:shadow-2xl " },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "2xl:w-3/5 md:justify-center md:w-screen md:pl-14 lg:pl-48 xl:pl-24 py-20 md:py-8 sm:w-full sm:p-2 dark:bg-dark-bg dark:rounded-tl-xl dark:rounded-bl-xl" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-2xl ml-4 md:ml-32 lg:text-3xl pb-6 font-bold text-primary dark:text-dark-text-fill " }, t('Reset your password')),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { onSubmit: handleSubmit(onSubmit) },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col items-left md:justify-center", "data-testid": "dataid" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "tracking-wide text-gray-700 dark:text-white font-normal" }, t('Enter new password')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "rounded border border-primary dark:border-white w-full md:w-3/4 p-2 flex items-center mb-6 dark:bg-dark-bg " },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__.FaLock, { className: "text-gray-400 mr-2" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { "data-testid": "password", type: passwordShown ? 'text' : 'password', ...register('password', {
                                        required: 'Password is required',
                                    }), placeholder: t('Password'), className: "bg-white outline-none text-sm flex-1 dark:border-white dark:bg-dark-bg dark:text-white" })),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "-mt-6" }, errors.email && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { className: "text-red-600" }, errors.email.message))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "tracking-wide mt-3 text-gray-700 dark:text-white font-normal mb-2" }, t('Re-write your password')),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "rounded border border-primary dark:border-white w-full md:w-3/4 p-2 flex items-center mb-6 dark:bg-dark-bg " },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__.FaPen, { className: "text-gray-400 mr-2" }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: passwordShown ? 'text' : 'password', "data-testid": "input1", ...register('confirmPassword', {
                                        required: 'Password confirmation is Required',
                                    }), value: name, onChange: (e) => {
                                        setName(e.target.value);
                                    }, placeholder: t('Confirm password'), className: "bg-white outline-none text-sm flex-1 dark:border-white dark:bg-dark-bg dark:text-white" })),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "-mt-6" }, errors.name && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { className: "text-red-600" }, errors.name.message))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "-mt-4" }, errors.description && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { className: "text-red-600" }, errors.description.message))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full md:w-3/4 p-2 flex items-center mb-6 justify-center" }, loading ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ButtonLoading__WEBPACK_IMPORTED_MODULE_4__["default"], { style: "rounded-full inline-block" })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "submit", variant: "primary", size: "lg", style: "w-2/4 ml-0 hover:bg-cyan-700 text-sm" },
                                ' ',
                                t('Confirm')))))))))));
}


/***/ })

}]);
//# sourceMappingURL=src_pages_ForgotPassword_tsx.js.map