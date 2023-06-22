"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_containers_DashRoutes_tsx"],{

/***/ "./src/assets/NotFoundImg.svg":
/*!************************************!*\
  !*** ./src/assets/NotFoundImg.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8e16752119c7ac81567dc525aeef088f.svg");

/***/ }),

/***/ "./src/assets/avatar.png":
/*!*******************************!*\
  !*** ./src/assets/avatar.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e5117e8e0cea57c9a92f0603011083a3.png");

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "234e199d6d64c52316e4b6f37d42122d.svg");

/***/ }),

/***/ "./src/assets/logoWhite.svg":
/*!**********************************!*\
  !*** ./src/assets/logoWhite.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "6493c483466ec8d11225d80389f7fafe.svg");

/***/ }),

/***/ "./src/Mutations/User.tsx":
/*!********************************!*\
  !*** ./src/Mutations/User.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GET_PROFILE: () => (/* binding */ GET_PROFILE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");

const GET_PROFILE = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query {
    getProfile {
      firstName
      lastName
      phoneNumber
      address
      city
      country
      avatar
      cover
      name
      biography
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GET_PROFILE);


/***/ }),

/***/ "./src/Mutations/notificationMutation.tsx":
/*!************************************************!*\
  !*** ./src/Mutations/notificationMutation.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationSubscription: () => (/* binding */ NotificationSubscription),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   deleteNotification: () => (/* binding */ deleteNotification),
/* harmony export */   getAllNotification: () => (/* binding */ getAllNotification),
/* harmony export */   markAllAsRead: () => (/* binding */ markAllAsRead),
/* harmony export */   markAsRead: () => (/* binding */ markAsRead)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");

const getAllNotification = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  query Query {
    getAllNotification {
      message
      id
      receiver
      createdAt
      read
      sender {
        profile {
          firstName
          lastName
          name
          cover
          country
          address
          phoneNumber
          id
          avatar
        }
      }
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllNotification);
const NotificationSubscription = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  subscription Subscription($receiver: String!) {
    newRating(receiver: $receiver) {
      sender {
        profile {
          name
          avatar
        }
      }
      createdAt
      message
      read
      receiver
      id
    }
  }
`;
const deleteNotification = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation Mutation($deleteNotificationsId: ID!) {
    deleteNotifications(id: $deleteNotificationsId)
  }
`;
const markAsRead = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation Mutation($markAsReadId: ID!) {
    markAsRead(id: $markAsReadId)
  }
`;
const markAllAsRead = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql) `
  mutation Mutation {
    markAllAsRead
  }
`;


/***/ }),

/***/ "./src/Skeletons/Square.tsx":
/*!**********************************!*\
  !*** ./src/Skeletons/Square.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Square)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Square() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full overflow-hidden h-full grow flex flex-col" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col grow bg-light-bg dark:bg-dark-frame-bg overflow-hidden px-4" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row pb-8 justify-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "lg:ml-44 w-[90%] pt-[4vh] lg:pt-[6vh]" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid grid-cols-2 lg:grid-cols-4 px-4" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " bg-gray-300 py-4 dark:bg-gray-600 md:w-[70%] h-24 md:h-28 mx-2 md:ml-16 lg:ml-10 mt-12 md:mt-20 lg:mt-8 text-center flex flex-col justify-center items-center rounded-lg animate-pulse" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " bg-gray-300 py-4 dark:bg-gray-600 md:w-[70%] h-24 md:h-28 mx-2 md:ml-16 lg:ml-10 mt-12 md:mt-20 lg:mt-8 text-center flex flex-col justify-center items-center rounded-lg animate-pulse" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " bg-gray-300 py-4 dark:bg-gray-600 md:w-[70%] h-24 md:h-28 mx-2 md:ml-16 lg:ml-10 mt-12 md:mt-20 lg:mt-8 text-center flex flex-col justify-center items-center rounded-lg animate-pulse" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: " bg-gray-300 py-4 dark:bg-gray-600 md:w-[70%] h-24 md:h-28 mx-2 md:ml-16 lg:ml-10 mt-12 md:mt-20 lg:mt-8 text-center flex flex-col justify-center items-center rounded-lg animate-pulse" })))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "items-center px-4 " },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-[100%] h-[46vh] lg:h-[62vh] pb-14 lg:w-[84%] mx-auto lg:ml-52 lg:mr-2  mt-8 bottom-0 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" })))));
}


/***/ }),

/***/ "./src/components/Buttons.tsx":
/*!************************************!*\
  !*** ./src/components/Buttons.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

const Button = ({ children, style, onClick, variant = 'default', size = 'md', type = 'button', disabled = false, loading = false, ...rest }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { type: type, className: `btn ${variant} ${size} ${style}`, onClick: onClick, disabled: disabled ? disabled : loading, ...rest }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "loader mr-1" }) : children));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./src/components/DashHeader.tsx":
/*!***************************************!*\
  !*** ./src/components/DashHeader.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/MenuIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/XIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/BellIcon.js");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_logoWhite_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/logoWhite.svg */ "./src/assets/logoWhite.svg");
/* harmony import */ var _assets_avatar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/avatar.png */ "./src/assets/avatar.png");
/* harmony import */ var _hook_useDarkMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hook/useDarkMode */ "./src/hook/useDarkMode.ts");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar.tsx");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Notification */ "./src/components/Notification.tsx");
/* harmony import */ var _ProfileDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProfileDropdown */ "./src/components/ProfileDropdown.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useSubscription.js");
/* harmony import */ var _Mutations_User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Mutations/User */ "./src/Mutations/User.tsx");
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hook/useAuth */ "./src/hook/useAuth.tsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _Mutations_notificationMutation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../Mutations/notificationMutation */ "./src/Mutations/notificationMutation.tsx");
/* eslint-disable */
















function DashHeader() {
    /* istanbul ignore next */
    const [showNotification, setShowNotification] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [showProfileDropdown, setShowprofileDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [profileData, setProfileData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [getProfile, { refetch }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_12__.useLazyQuery)(_Mutations_User__WEBPACK_IMPORTED_MODULE_8__.GET_PROFILE);
    const { user, setNotificationData } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_9__.UserContext);
    const [getNotification] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_12__.useLazyQuery)(_Mutations_notificationMutation__WEBPACK_IMPORTED_MODULE_11__.getAllNotification);
    const notifications = user?.notifications;
    const [colorTheme] = (0,_hook_useDarkMode__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    /* istanbul ignore next*/
    const handleClick = () => setNav(!nav);
    const handleShowNotification = () => setShowNotification(!showNotification);
    const { data, loading } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_13__.useSubscription)(_Mutations_notificationMutation__WEBPACK_IMPORTED_MODULE_11__.NotificationSubscription, {
        onData: (data) => {
            setNotificationData([data.data.data.newRating, ...notifications]);
        },
        variables: {
            receiver: user?.userId
        }
    });
    /* istanbul ignore next */
    const handleShowProfileDropdown = () => setShowprofileDropdown(!showProfileDropdown);
    /* istanbul ignore next*/
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        /* istanbul ignore next*/
        const fetchData = async () => {
            try {
                const { data } = await getProfile();
                /* istanbul ignore next*/
                setProfileData(data);
            }
            catch (error) {
                /* istanbul ignore next*/
                react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast.error(error?.message || 'Something went wrong');
            }
        };
        /* istanbul ignore next*/
        fetchData();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const fetchData = async () => {
            try {
                const { data } = await getNotification();
                setNotificationData(data.getAllNotification);
            }
            catch (error) {
                console.log("error");
            }
        };
        fetchData();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        showNotification && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Notification__WEBPACK_IMPORTED_MODULE_6__["default"], { handleShowNotification: handleShowNotification })),
        showProfileDropdown && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProfileDropdown__WEBPACK_IMPORTED_MODULE_7__["default"], { handleShowProfileDropdown: handleShowProfileDropdown })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-screen h-[8vh] z-10 bg-white dark:bg-dark-bg fixed border-b" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-3 flex items-center w-full h-full" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex px-5 lg:hidden" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { onClick: handleClick, onKeyDown: handleClick, role: "button", tabIndex: 0 }, !nav ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_14__["default"], { className: "w-7 dark:text-dark-text-fill" })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_15__["default"], { className: "w-7 dark:text-dark-text-fill" })))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center h-full lg:w-full" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, { to: "/dashboard/super-admin", className: "flex flex-row lg:px-5" },
                        colorTheme === 'dark' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "w-full cursor-pointer mr-2", src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"], alt: "logo" })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "w-full cursor-pointer", src: _assets_logoWhite_svg__WEBPACK_IMPORTED_MODULE_2__["default"], alt: "logoWhite" })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "text-3xl font-bold font-lexend text-primary dark:text-dark-text-fill" }, "PULSE"))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "inline-flex relative items-center p-0 text-sm font-medium text-center text-black  ml-auto dark:bg-dark-bg rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300   dark:focus:ring-blue-800" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_17__["default"], { className: "w-6 cursor-pointer ml-auto  dark:text-dark-text-fill", onClick: handleShowNotification }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "sr-only" }, "Notifications"),
                    notifications?.filter((item) => item.read == "false").length ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "inline-flex absolute -top-2 -right-2 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900" }, notifications?.filter((item) => item.read == "false").length) : ""),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { onClick: handleShowProfileDropdown },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "w-8 cursor-pointer ml-4 mr-4 h-8 rounded-full", src: user?.profileImage
                            ? user?.profileImage
                            : profileData?.getProfile?.avatar
                                ? profileData?.getProfile?.avatar
                                : _assets_avatar_png__WEBPACK_IMPORTED_MODULE_3__["default"], alt: "avatar" }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: !nav
                    ? 'hidden'
                    : 'bg-white dark:bg-dark-bg cursor-pointer lg:hidden' },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], { toggle: handleClick, style: "flex pt-2 h-[92%]" })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashHeader);


/***/ }),

/***/ "./src/components/Notification.tsx":
/*!*****************************************!*\
  !*** ./src/components/Notification.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/XIcon.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/format/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */ var _Mutations_notificationMutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Mutations/notificationMutation */ "./src/Mutations/notificationMutation.tsx");
/* harmony import */ var _assets_avatar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/avatar.png */ "./src/assets/avatar.png");
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useAuth */ "./src/hook/useAuth.tsx");









function Notification({ handleShowNotification, }) {
    const [delNotification] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_Mutations_notificationMutation__WEBPACK_IMPORTED_MODULE_1__.deleteNotification);
    const [readNotification] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_Mutations_notificationMutation__WEBPACK_IMPORTED_MODULE_1__.markAsRead);
    const [readAllNotification] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_Mutations_notificationMutation__WEBPACK_IMPORTED_MODULE_1__.markAllAsRead);
    const { user, setNotificationData } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_3__.UserContext);
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    const notifications = user?.notifications;
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    function removeNotification(id) {
        setNotificationData(notifications.filter((notification) => notification.id !== id));
        delNotification({
            variables: {
                deleteNotificationsId: id,
            },
        });
    }
    function markRead(id) {
        setNotificationData(notifications.map((notification) => {
            if (notification.id === id) {
                return {
                    ...notification,
                    read: true,
                };
            }
            return notification;
        }));
        readNotification({
            variables: {
                markAsReadId: id,
            },
        });
    }
    function markAllRead() {
        setNotificationData(notifications?.map((notification) => {
            if (notification.read !== true) {
                return { ...notification, read: true };
            }
            return notification;
        }));
        readAllNotification();
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-screen h-screen fixed top-0 left-0 z-50 px-4" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-dark-45 w-full h-full absolute top-0 left-0 z-1", role: "button", "aria-label": "background", tabIndex: 0, onClick: handleShowNotification, onKeyDown: handleShowNotification, "data-testid": "keyClick" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute top-[60px] right-0 left-0 mx-auto px-2 md:mx-0 md:left-auto md:right-[80px] z-2  w-full max-w-[392px] h-[calc(100%-70px)]" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col flex-nowrap w-full h-max max-h-full bg-[#E5EAFF] dark:bg-dark-tertiary rounded-[20px]" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-between items-center w-full p-3 border-border-dark dark:border-white border-b-[0.5px]" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-semibold dark:text-white" }, t('Notification')),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__["default"], { fontSize: "70px", "data-testid": "closeIcon", className: "border-black dark:fill-white h-[25px] w-[25px] cursor-pointer md:hidden", onClick: handleShowNotification })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col w-full overflow-auto", "data-testid": "notificationsContainer" }, notifications?.map((notification, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full p-5 border-border-dark dark:border-white border-b-[0.5px] ", key: notification.id },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `flex flex-row justify-between align-center gap-x-[10px] ${notification.read === 'false'
                            ? 'bg-[#E5EAFF] font-bold dark:bg-dark-tertiary'
                            : 'border-border-dark dark:border-white dark:bg-dark-tertiary opacity-30 hover:bg-[#E5EAFF] hover:opacity-100 dark:hover:bg-dark-tertiary'}` },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: notification.sender.profile.avatar
                                ? notification.sender.profile.avatar
                                : _assets_avatar_png__WEBPACK_IMPORTED_MODULE_2__["default"], alt: "oldMan", className: "rounded-[1000px] w-[60px] h-[60px] object-cover cursor-pointer" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col w-full gap-[5px] cursor-pointer", onClick: () => {
                                markRead(notification.id);
                                user.role === 'trainee'
                                    ? navigate('/dashboard/performance')
                                    : navigate('/dashboard/ratings');
                                handleShowNotification();
                            }, "data-testid": index === 0 && 'read' },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-bold dark:text-white" }, notification.sender.profile.name),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-[#111827] dark:text-white text-[12px]" }, notification.message),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-[12px] dark:text-white" }, (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(notification.createdAt), 'MMMM dd, p'))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col items-center transition-all" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `h-[15px] w-[15px] rounded-full ${notification.read === 'false'
                                    ? 'bg-[#148FB6]'
                                    : 'border-border-dark dark:border-white border-[1px]'}  mt-[7px] mb-[10px]` }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__["default"], { className: "border-border-dark dark:fill-white h-[20px] w-[20px] cursor-pointer", onClick: () => {
                                    removeNotification(notification.id);
                                }, "data-testid": index === 0 && 'delete' }))))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full p-3 flex flex-row align-center justify-between" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-normal text-xs m-1 dark:text-white cursor-pointer", "data-testid": "seeAllNotification" }, "See all notification"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "font-normal text-xs m-1 dark:text-white cursor-pointer ml-auto", onClick: () => {
                            markAllRead();
                        }, "data-testid": "markAllRead" }, t('Mark all as read')))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notification);


/***/ }),

/***/ "./src/components/ProfileDropdown.tsx":
/*!********************************************!*\
  !*** ./src/components/ProfileDropdown.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/LogoutIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hook/useAuth */ "./src/hook/useAuth.tsx");





function ProfileDropdown({ handleShowProfileDropdown, }) {
    const { logout, user } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_1__.UserContext);
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-screen h-screen fixed top-0 left-0 z-50 px-4" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-dark-20 w-full h-full absolute top-0 left-0 z-1", role: "button", "aria-label": "background", tabIndex: 0, onClick: handleShowProfileDropdown, onKeyDown: handleShowProfileDropdown, "data-testid": "keyClick" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute top-[60px] right-0 left-0 ml-auto px-2 md:mx-0 md:left-auto md:right-[10px] z-2  w-full max-w-[220px] h-[calc(100%-70px)]" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col flex-nowrap w-full h-max max-h-full bg-white shadow-xl border  dark:border-0 dark:bg-dark-tertiary rounded-[20px]" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col w-full p-3 border-border-dark dark:border-white border-b-[0.5px]" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-bold dark:text-white" }, user?.name),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-bold text-sm text-gray-700 dark:text-gray-300" }, user?.email),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-bold text-sm text-gray-700 dark:text-gray-300" }, user?.role)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col w-full overflow-auto", "data-testid": "notificationsContainer" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full border-border-dark dark:border-white border-b-[0.5px]" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row justify-between align-center gap-x-[20px] " },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col w-full gap-[5px] cursor-pointer" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { onClick: handleShowProfileDropdown, to: "/dashboard/profile", className: "font-semibold text-gray-600 dark:text-white px-4 py-2 hover:bg-gray-600 hover:text-gray-200 dark:hover:bg-gray-300 dark:hover:text-gray-900" }, t('Profile')),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { onClick: handleShowProfileDropdown, to: "settings", className: "font-semibold text-gray-600 dark:text-white px-4 py-2 pb-4 hover:bg-gray-600 hover:text-gray-200 dark:hover:bg-gray-300 dark:hover:text-gray-900" }, t('Preferences')))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full p-3 flex flex-row align-center justify-start text-gray-900 dark:text-gray-100 dark:hover:bg-gray-300 dark:hover:text-gray-900  hover:bg-gray-600 hover:rounded-b-[20px] hover:text-gray-100 ", onClick: logout },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__["default"], { className: "w-4 h-4 mt-1 cursor-pointer " }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "font-boldml-1 cursor-pointer" }, t('Sign out')))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileDropdown);


/***/ }),

/***/ "./src/components/ProgramIcon.tsx":
/*!****************************************!*\
  !*** ./src/components/ProgramIcon.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable react/require-default-props */

function ProgramIcon({ className }) {
    /* istanbul ignore next */
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "25", height: "20", viewBox: "0 0 25 20", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", className: className },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M9.65186 0.056282C9.45498 0.142973 9.2533 0.388596 9.21969 0.581244C9.20528 0.667934 9.19568 1.84308 9.20528 3.20123C9.21969 5.6045 9.22449 5.66711 9.32053 5.79714C9.55582 6.11501 9.59904 6.12946 10.593 6.14391L11.5006 6.15836V7.69471V9.23588L7.13565 9.24551C2.80912 9.25996 2.76591 9.25996 2.63625 9.3611C2.56423 9.41408 2.45858 9.52004 2.40576 9.59228C2.30972 9.72231 2.30492 9.78974 2.29052 11.7884L2.27611 13.8546L1.36855 13.869C0.379352 13.8835 0.336134 13.8979 0.10084 14.2158C0 14.3458 0 14.3988 0 16.9417C0 19.4847 0 19.5376 0.10084 19.6677C0.153661 19.7399 0.259304 19.8459 0.331333 19.8989C0.460984 20 0.513806 20 3.04922 20C5.58463 20 5.63745 20 5.76711 19.8989C5.83914 19.8459 5.94478 19.7399 5.9976 19.6677C6.09844 19.5376 6.09844 19.4847 6.09844 16.9417C6.09844 14.3988 6.09844 14.3458 5.9976 14.2158C5.7623 13.8979 5.71909 13.8835 4.72509 13.869L3.81753 13.8546V12.3134V10.7771H7.65906H11.5006V12.3134V13.8546L10.593 13.869C9.59904 13.8835 9.55582 13.8979 9.32053 14.2158C9.21969 14.3458 9.21969 14.3988 9.21969 16.9417C9.21969 19.4847 9.21969 19.5376 9.32053 19.6677C9.37335 19.7399 9.47899 19.8459 9.55102 19.8989C9.68067 20 9.73349 20 12.2689 20C14.8043 20 14.8571 20 14.9868 19.8989C15.0588 19.8459 15.1645 19.7399 15.2173 19.6677C15.3181 19.5376 15.3181 19.4847 15.3181 16.9417C15.3181 14.3988 15.3181 14.3458 15.2173 14.2158C14.982 13.8979 14.9388 13.8835 13.9448 13.869L13.0372 13.8546V12.3134V10.7771H16.8788H20.7203V12.3134V13.8546L19.8127 13.869C18.8187 13.8835 18.7755 13.8979 18.5402 14.2158C18.4394 14.3458 18.4394 14.3988 18.4394 16.9417C18.4394 19.4847 18.4394 19.5376 18.5402 19.6677C18.593 19.7399 18.6987 19.8459 18.7707 19.8989C18.9004 20 18.9532 20 21.4886 20C24.024 20 24.0768 20 24.2065 19.8989C24.2785 19.8459 24.3842 19.7399 24.437 19.6677C24.5378 19.5376 24.5378 19.4847 24.5378 16.9417C24.5378 14.3988 24.5378 14.3458 24.437 14.2158C24.2017 13.8979 24.1585 13.8835 23.1693 13.869L22.2617 13.8546L22.2473 11.7884C22.2329 9.78974 22.2281 9.72231 22.1321 9.59228C22.0792 9.52004 21.9736 9.41408 21.9016 9.3611C21.7719 9.25996 21.7287 9.25996 17.4022 9.24551L13.0372 9.23588V7.69471V6.15836L13.9448 6.14391C14.9388 6.12946 14.982 6.11501 15.2173 5.79714C15.3181 5.66711 15.3181 5.61413 15.3181 3.0712C15.3181 0.528265 15.3181 0.475286 15.2173 0.345251C15.1645 0.273008 15.0588 0.167053 14.9868 0.114075C14.8571 0.0129356 14.7947 0.0129356 12.3265 0.00330353C10.2953 -0.00632858 9.76711 0.00330353 9.65186 0.056282Z" })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgramIcon);


/***/ }),

/***/ "./src/components/SideNavLink.tsx":
/*!****************************************!*\
  !*** ./src/components/SideNavLink.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideNavLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");



function SideNavLink({ to, name, onClick, children, ...props }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "mb-4 hover:text-primary transition-all group-hover:transition-all", ...props },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, { onClick: onClick, to: to, className: (navData) => {
                if (navData.isActive) {
                    return 'flex flex-row font-bold text-primary dark:text-primary';
                }
                return 'flex flex-row dark:text-dark-text-fill';
            } },
            children,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-base " }, t(name)))));
}


/***/ }),

/***/ "./src/components/Sidebar.tsx":
/*!************************************!*\
  !*** ./src/components/Sidebar.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.13.0_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/ChartPieIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/HomeIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/UsersIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/GlobeAltIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/UserGroupIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/MoonIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/ClipboardListIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/RefreshIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/TemplateIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/KeyIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/ClipboardCheckIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/TrendingUpIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/CalendarIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/FolderIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/SupportIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/LogoutIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/AcademicCapIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/BookOpenIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/CogIcon.js");
/* harmony import */ var _ProgramIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgramIcon */ "./src/components/ProgramIcon.tsx");
/* harmony import */ var _ToolTip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToolTip */ "./src/components/ToolTip.tsx");
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useAuth */ "./src/hook/useAuth.tsx");
/* harmony import */ var _utils_CheckRoles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/CheckRoles */ "./src/utils/CheckRoles.tsx");
/* harmony import */ var _SideNavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SideNavLink */ "./src/components/SideNavLink.tsx");









function Sidebar({ style, toggle }) {
    const { logout } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_3__.UserContext);
    const [togglei, setTogglei] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => { }, [togglei]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `${style} flex-col fixed h-[100%] pt-[3vh] lg:pt-[11vh] bg-white dark:bg-dark-bg border-r p-2` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "list-none pr-8" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, name: "Dashboard", to: "/dashboard/" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__["default"], { className: "w-5 mr-2 " })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_CheckRoles__WEBPACK_IMPORTED_MODULE_4__["default"], { roles: ['superAdmin'] },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, name: "Organizations", to: "/dashboard/organizations" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__["default"], { className: "w-5 mr-2 " })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, name: "Admins", "data-testid": "keppi", to: "/dashboard/admins" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__["default"], { className: "w-5 mr-2 " })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, name: "Domains", to: "/dashboard/domains" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__["default"], { className: "w-5 mr-2 " }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_CheckRoles__WEBPACK_IMPORTED_MODULE_4__["default"], { roles: ['admin', 'coordinator'] },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, to: "/dashboard/trainees", name: "Trainees" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_10__["default"], { className: "w-5 mr-2 dark:text-dark-text-fill" }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_CheckRoles__WEBPACK_IMPORTED_MODULE_4__["default"], { roles: ['admin'] },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, to: "/dashboard/coordinators", name: "Coordinators" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__["default"], { className: "w-5 mr-2 dark:text-dark-text-fill" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, to: "/dashboard/teams", name: "Teams" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_10__["default"], { className: "w-5 mr-2 dark:text-dark-text-fill" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, to: "/dashboard/cohorts", name: "Cohorts" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__["default"], { className: "w-5 mr-2 dark:text-dark-text-fill" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, to: "/dashboard/phases", name: "Phases" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_12__["default"], { className: "w-5 mr-2 dark:text-dark-text-fill" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, to: "/dashboard/programs", name: "Programs" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProgramIcon__WEBPACK_IMPORTED_MODULE_1__["default"], { className: "w-5 mr-2 dark:text-dark-text-fill" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, to: "/dashboard/admin/ratings", name: "Ratings" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_13__["default"], { className: "w-5 mr-2 dark:text-dark-text-fill" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, to: "/dashboard/updated-ratings", name: "Updated Ratings" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_14__["default"], { className: "w-5 mr-2 dark:text-dark-text-fill" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, to: "/dashboard/grading", name: "Grading System" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_15__["default"], { className: "w-5 mr-2 dark:text-dark-text-fill" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, to: "/dashboard/manage", name: "Roles & Access" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_16__["default"], { className: "w-5 mr-2 dark:text-dark-text-fill" }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_CheckRoles__WEBPACK_IMPORTED_MODULE_4__["default"], { roles: ['coordinator'] },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, to: "/dashboard/sessions", name: "Sessions" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_17__["default"], { className: "w-5 mr-2 dark:text-dark-text-fill" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, to: "/dashboard/ratings", name: "Ratings" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_13__["default"], { className: "w-5 mr-2 dark:text-dark-text-fill" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, name: "Attendance", to: "/dashboard/attendance-rating" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_18__["default"], { className: "w-5 mr-2 " }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_CheckRoles__WEBPACK_IMPORTED_MODULE_4__["default"], { roles: ['trainee'] },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, name: "Attendance", to: "/dashboard/attendance" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_18__["default"], { className: "w-5 mr-2 " })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: () => {
                        toggle();
                        setTogglei(true);
                    }, name: "Performance", to: "/dashboard/performance" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_19__["default"], { className: "w-5 mr-2 " }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, name: "Calendar", to: "/dashboard/calendar" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_20__["default"], { className: "w-5 mr-2" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, name: "Docs", to: "/dashboard/docs" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_21__["default"], { className: "w-5 mr-2 " })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideNavLink__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: toggle, name: "Help", to: "/dashboard/support" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_22__["default"], { className: "w-5 mr-2 " })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-row ml-10 mt-auto list-none" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "px-2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.NavLink, { to: "#link" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ToolTip__WEBPACK_IMPORTED_MODULE_2__["default"], { message: "Logout" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_24__["default"], { onClick: logout, className: "w-5 text-red-700 dark:text-red-600 hover:text-red-900" })))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: "px-2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_23__.NavLink, { to: "/dashboard/settings", className: (navData) => {
                            if (navData.isActive) {
                                return 'flex flex-row font-bold text-primary dark:text-primary';
                            }
                            return 'flex flex-row dark:text-dark-text-fill';
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ToolTip__WEBPACK_IMPORTED_MODULE_2__["default"], { message: "Settings" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_25__["default"], { className: "w-5 hover:text-primary ", onClick: toggle }))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ }),

/***/ "./src/components/ToolTip.tsx":
/*!************************************!*\
  !*** ./src/components/ToolTip.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");


function Tooltip({ message, children, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "relative flex flex-col items-center group" },
        children,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute bottom-0 hidden flex-col items-center mb-6 group-hover:flex" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md" }, t(message)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-3 h-3 -mt-2 rotate-45 bg-gray-600" }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);


/***/ }),

/***/ "./src/containers/DashRoutes.tsx":
/*!***************************************!*\
  !*** ./src/containers/DashRoutes.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */ var _components_DashHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DashHeader */ "./src/components/DashHeader.tsx");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ "./src/components/Sidebar.tsx");
/* harmony import */ var _pages_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Error */ "./src/pages/Error.tsx");
/* harmony import */ var _utils_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/PrivateRoute */ "./src/utils/PrivateRoute.tsx");
/* harmony import */ var _Skeletons_Square__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Skeletons/Square */ "./src/Skeletons/Square.tsx");
/* eslint-disable */
/* istanbul ignore file */




const Dashboard = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_Dashboard_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Dashboard */ "./src/pages/Dashboard.tsx")));
const Settings = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_headlessui_react_1_7_15_biqbaboplfbrettd7655fr4n2y_node_modules_hea-53493c"), __webpack_require__.e("src_pages_Settings_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Settings */ "./src/pages/Settings.tsx")));
const PerformanceDetails = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_headlessui_react_1_7_15_biqbaboplfbrettd7655fr4n2y_node_modules_hea-999299"), __webpack_require__.e("src_containers_Trainee_PerformanceDetails_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../containers/Trainee/PerformanceDetails */ "./src/containers/Trainee/PerformanceDetails.tsx")));
const TraineePerfomance = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_components_TraineePerformance_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/TraineePerformance */ "./src/components/TraineePerformance.tsx")));
const TraineeAttendance = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_components_TraineeAttendance_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/TraineeAttendance */ "./src/components/TraineeAttendance.tsx")));
const AttendanceDetails = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_containers_Trainee_AttendanceDetails_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../containers/Trainee/AttendanceDetails */ "./src/containers/Trainee/AttendanceDetails.tsx")));
const AdminTeams = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_react-table_7_8_0_react_18_2_0_node_modules_react-table_index_js-no-1d705f"), __webpack_require__.e("vendors-node_modules_pnpm_react-hook-form_7_45_0_react_18_2_0_node_modules_react-hook-form_di-a42c5d"), __webpack_require__.e("vendors-node_modules_pnpm_iconify_react_3_2_2_react_18_2_0_node_modules_iconify_react_dist_ic-68b696"), __webpack_require__.e("vendors-node_modules_pnpm_react-select_5_7_3_b2wlzab4o7ehpxv6mvz3buccci_node_modules_react-se-b8ae43"), __webpack_require__.e("src_Mutations_manageStudentMutations_tsx-src_components_DataTable_tsx"), __webpack_require__.e("src_containers_admin-dashBoard_Teams_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-dashBoard/Teams */ "./src/containers/admin-dashBoard/Teams.tsx")));
const AdminCohorts = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_react-table_7_8_0_react_18_2_0_node_modules_react-table_index_js-no-1d705f"), __webpack_require__.e("vendors-node_modules_pnpm_react-hook-form_7_45_0_react_18_2_0_node_modules_react-hook-form_di-a42c5d"), __webpack_require__.e("vendors-node_modules_pnpm_iconify_react_3_2_2_react_18_2_0_node_modules_iconify_react_dist_ic-68b696"), __webpack_require__.e("vendors-node_modules_pnpm_react-select_5_7_3_b2wlzab4o7ehpxv6mvz3buccci_node_modules_react-se-b8ae43"), __webpack_require__.e("src_Mutations_manageStudentMutations_tsx-src_components_DataTable_tsx"), __webpack_require__.e("src_containers_admin-dashBoard_Cohorts_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-dashBoard/Cohorts */ "./src/containers/admin-dashBoard/Cohorts.tsx")));
const AdminPrograms = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_react-table_7_8_0_react_18_2_0_node_modules_react-table_index_js-no-1d705f"), __webpack_require__.e("vendors-node_modules_pnpm_react-hook-form_7_45_0_react_18_2_0_node_modules_react-hook-form_di-a42c5d"), __webpack_require__.e("vendors-node_modules_pnpm_iconify_react_3_2_2_react_18_2_0_node_modules_iconify_react_dist_ic-68b696"), __webpack_require__.e("vendors-node_modules_pnpm_react-select_5_7_3_b2wlzab4o7ehpxv6mvz3buccci_node_modules_react-se-b8ae43"), __webpack_require__.e("src_containers_admin-dashBoard_Programs_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-dashBoard/Programs */ "./src/containers/admin-dashBoard/Programs.tsx")));
const AdminSession = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_react-table_7_8_0_react_18_2_0_node_modules_react-table_index_js-no-1d705f"), __webpack_require__.e("vendors-node_modules_pnpm_iconify_react_3_2_2_react_18_2_0_node_modules_iconify_react_dist_ic-68b696"), __webpack_require__.e("src_containers_admin-dashBoard_Sessions_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-dashBoard/Sessions */ "./src/containers/admin-dashBoard/Sessions.tsx")));
const AdminPhases = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_react-table_7_8_0_react_18_2_0_node_modules_react-table_index_js-no-1d705f"), __webpack_require__.e("vendors-node_modules_pnpm_react-hook-form_7_45_0_react_18_2_0_node_modules_react-hook-form_di-a42c5d"), __webpack_require__.e("vendors-node_modules_pnpm_iconify_react_3_2_2_react_18_2_0_node_modules_iconify_react_dist_ic-68b696"), __webpack_require__.e("src_containers_admin-dashBoard_Phases_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-dashBoard/Phases */ "./src/containers/admin-dashBoard/Phases.tsx")));
const AdminManageRoles = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_react-table_7_8_0_react_18_2_0_node_modules_react-table_index_js-no-1d705f"), __webpack_require__.e("src_containers_admin-dashBoard_ManagerRoles_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-dashBoard/ManagerRoles */ "./src/containers/admin-dashBoard/ManagerRoles.tsx")));


const AdminTraineeDashboard = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_react-table_7_8_0_react_18_2_0_node_modules_react-table_index_js-no-1d705f"), __webpack_require__.e("vendors-node_modules_pnpm_react-hook-form_7_45_0_react_18_2_0_node_modules_react-hook-form_di-a42c5d"), __webpack_require__.e("vendors-node_modules_pnpm_iconify_react_3_2_2_react_18_2_0_node_modules_iconify_react_dist_ic-68b696"), __webpack_require__.e("vendors-node_modules_pnpm_react-select_5_7_3_b2wlzab4o7ehpxv6mvz3buccci_node_modules_react-se-b8ae43"), __webpack_require__.e("vendors-node_modules_pnpm_prop-types_15_8_1_node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_pnpm_mui_material_5_13_5_oop2qdrl2yflboaypw5tjwfy24_node_modules_mui_mat-6d8eb6"), __webpack_require__.e("src_Mutations_manageStudentMutations_tsx-src_components_DataTable_tsx"), __webpack_require__.e("src_pages_AdminTraineeDashboard_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/AdminTraineeDashboard */ "./src/pages/AdminTraineeDashboard.tsx")));
const TraineeRatingDashboard = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_react-table_7_8_0_react_18_2_0_node_modules_react-table_index_js-no-1d705f"), __webpack_require__.e("vendors-node_modules_pnpm_iconify_react_3_2_2_react_18_2_0_node_modules_iconify_react_dist_ic-68b696"), __webpack_require__.e("vendors-node_modules_pnpm_headlessui_react_1_7_15_biqbaboplfbrettd7655fr4n2y_node_modules_hea-999299"), __webpack_require__.e("vendors-node_modules_pnpm_headlessui_react_1_7_15_biqbaboplfbrettd7655fr4n2y_node_modules_hea-bb8462"), __webpack_require__.e("src_Mutations_manageStudentMutations_tsx-src_components_DataTable_tsx"), __webpack_require__.e("src_pages_TraineeRatingDashboard_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/TraineeRatingDashboard */ "./src/pages/TraineeRatingDashboard.tsx")));
const AdminRatings = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_react-table_7_8_0_react_18_2_0_node_modules_react-table_index_js-no-1d705f"), __webpack_require__.e("vendors-node_modules_pnpm_headlessui_react_1_7_15_biqbaboplfbrettd7655fr4n2y_node_modules_hea-999299"), __webpack_require__.e("src_pages_AdminRatings_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/AdminRatings */ "./src/pages/AdminRatings.tsx")));
const UpdatedRatingDashboard = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_react-table_7_8_0_react_18_2_0_node_modules_react-table_index_js-no-1d705f"), __webpack_require__.e("vendors-node_modules_pnpm_iconify_react_3_2_2_react_18_2_0_node_modules_iconify_react_dist_ic-68b696"), __webpack_require__.e("src_pages_UpdatedRatingDashboard_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/UpdatedRatingDashboard */ "./src/pages/UpdatedRatingDashboard.tsx")));
const SupAdDashboard = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_pages_SupAdDashboard_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/SupAdDashboard */ "./src/pages/SupAdDashboard.tsx")));
const Calendar = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_prop-types_15_8_1_node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_pnpm_fullcalendar_daygrid_5_11_5_node_modules_fullcalendar_daygrid_main_-50cd71"), __webpack_require__.e("src_components_Calendar_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Calendar */ "./src/components/Calendar.tsx")));
const GradingSystem = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_react-table_7_8_0_react_18_2_0_node_modules_react-table_index_js-no-1d705f"), __webpack_require__.e("vendors-node_modules_pnpm_react-hook-form_7_45_0_react_18_2_0_node_modules_react-hook-form_di-a42c5d"), __webpack_require__.e("src_pages_GradingSystem_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/GradingSystem */ "./src/pages/GradingSystem.tsx")));
const Profile = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_react-hook-form_7_45_0_react_18_2_0_node_modules_react-hook-form_di-a42c5d"), __webpack_require__.e("vendors-node_modules_pnpm_axios_0_27_2_node_modules_axios_index_js-node_modules_pnpm_heroicon-3239d4"), __webpack_require__.e("src_components_Input_tsx-src_components_ProfileCoverpage_tsx-src_constants_countries_ts-src_c-3fb002"), __webpack_require__.e("src_components_ProfileTabs_tsx-src_pages_Profile_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/Profile */ "./src/pages/Profile.tsx")));
const EditProfile = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_react-hook-form_7_45_0_react_18_2_0_node_modules_react-hook-form_di-a42c5d"), __webpack_require__.e("vendors-node_modules_pnpm_axios_0_27_2_node_modules_axios_index_js-node_modules_pnpm_heroicon-3239d4"), __webpack_require__.e("vendors-node_modules_pnpm_heroicons_react_1_0_6_react_18_2_0_node_modules_heroicons_react_sol-4e2d8d"), __webpack_require__.e("src_components_Input_tsx-src_components_ProfileCoverpage_tsx-src_constants_countries_ts-src_c-3fb002"), __webpack_require__.e("src_pages_ProfileEdit_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/ProfileEdit */ "./src/pages/ProfileEdit.tsx")));
const Organizations = react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_react-hook-form_7_45_0_react_18_2_0_node_modules_react-hook-form_di-a42c5d"), __webpack_require__.e("src_components_Organizations_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Organizations */ "./src/components/Organizations.tsx")));

function DashRoutes() {
    const [nav, setNav] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleClick = () => setNav(!nav);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_PrivateRoute__WEBPACK_IMPORTED_MODULE_4__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-testid": "cohorts-route", className: "flex flex-col  min-h-screen" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DashHeader__WEBPACK_IMPORTED_MODULE_1__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], { toggle: handleClick, style: "hidden lg:flex" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Skeletons_Square__WEBPACK_IMPORTED_MODULE_5__["default"], null) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Dashboard, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/trainees", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AdminTraineeDashboard, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/ratings", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TraineeRatingDashboard, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/admin/ratings", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AdminRatings, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/updated-ratings", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UpdatedRatingDashboard, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/settings", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Settings, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/performance", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TraineePerfomance, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/attendance", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TraineeAttendance, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/attendance-details", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AttendanceDetails, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/teams", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AdminTeams, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/cohorts", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AdminCohorts, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/phases", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AdminPhases, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/programs", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AdminPrograms, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/sessions", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AdminSession, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/manage", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AdminManageRoles, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/grading", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GradingSystem, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/performance-details", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PerformanceDetails, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/profile", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Profile, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/profile/edit", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditProfile, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "*", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Error__WEBPACK_IMPORTED_MODULE_3__["default"], null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/super-admin", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SupAdDashboard, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/settings", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Settings, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/calendar", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Calendar, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "/organizations", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Organizations, null) }))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashRoutes);


/***/ }),

/***/ "./src/hook/useDarkMode.ts":
/*!*********************************!*\
  !*** ./src/hook/useDarkMode.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const getInitialState = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (storedPrefs)
            return storedPrefs;
        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches)
            return 'dark';
        return 'light';
    }
    return 'light';
};
const useDarkMode = () => {
    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialState);
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
    }, [theme]);
    return [colorTheme, setTheme];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDarkMode);


/***/ }),

/***/ "./src/hook/useDocumentTitle.tsx":
/*!***************************************!*\
  !*** ./src/hook/useDocumentTitle.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _utils_getLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getLanguage */ "./src/utils/getLanguage.tsx");



function useDocumentTitle(title) {
    const language = (0,_utils_getLanguage__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        document.title = `${t(title)} | Devpulse`;
    }, [title, language]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDocumentTitle);


/***/ }),

/***/ "./src/pages/Error.tsx":
/*!*****************************!*\
  !*** ./src/pages/Error.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _assets_NotFoundImg_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/NotFoundImg.svg */ "./src/assets/NotFoundImg.svg");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");






function Error() {
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_3__["default"])('Page not found');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    const navigateHome = () => {
        navigate('/');
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "errorImg flex items-center justify-center h-screen w-screen text-center" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: _assets_NotFoundImg_svg__WEBPACK_IMPORTED_MODULE_2__["default"], className: "max-w-36 max-h-32 md:max-w-44 md:max-h-40 lg:max-w-52 lg:max-h-48 xl:max-w-2xl xl:max-h-96", alt: "404" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "max-w-screen-md mt-5 text-white" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl" }, t('PAGE NOT FOUND')),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "my-3 px-8 md:px-14 lg:px-0" }, t('error_page_paragraph')),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], { onClick: navigateHome, variant: "primary", size: "lg", "data-testid": "button-back", style: "mt-2 lg:mt-5 px-8 text-xl font-bold" }, t('Back Home')))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);


/***/ }),

/***/ "./src/utils/CheckRoles.tsx":
/*!**********************************!*\
  !*** ./src/utils/CheckRoles.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hook/useAuth */ "./src/hook/useAuth.tsx");


function CheckRole({ children, roles, ...props }) {
    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_1__.UserContext);
    if (roles?.includes(user?.role))
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), { ...props }, children);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), { ...props });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckRole);


/***/ }),

/***/ "./src/utils/PrivateRoute.tsx":
/*!************************************!*\
  !*** ./src/utils/PrivateRoute.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hook/useAuth */ "./src/hook/useAuth.tsx");
/* harmony import */ var _utils_tokenValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/tokenValidation */ "./src/utils/tokenValidation.tsx");
/* harmony import */ var _validateOrgToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validateOrgToken */ "./src/utils/validateOrgToken.tsx");





function CheckRole({ children, ...props }) {
    (0,_utils_tokenValidation__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_validateOrgToken__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const orgToken = localStorage.getItem('orgToken');
    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_1__.UserContext);
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)();
    if (user?.auth)
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), { ...props }, children);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Navigate, { ...props, to: orgToken ? '/users/login' : '/login/org', state: location.pathname }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckRole);


/***/ }),

/***/ "./src/utils/getLanguage.tsx":
/*!***********************************!*\
  !*** ./src/utils/getLanguage.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/.pnpm/i18next@21.10.0/node_modules/i18next/dist/esm/i18next.js");
/* eslint-disable */

const getLanguage = () => {
    const lan = i18next__WEBPACK_IMPORTED_MODULE_0__["default"].language ||
        (typeof window !== 'undefined' && window.localStorage.i18nextLng) ||
        'en';
    return lan.split('-')[0];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLanguage);


/***/ }),

/***/ "./src/utils/tokenValidation.tsx":
/*!***************************************!*\
  !*** ./src/utils/tokenValidation.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "./node_modules/.pnpm/jwt-decode@3.1.2/node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useAuth */ "./src/hook/useAuth.tsx");
/* istanbul ignore file */
/* eslint-disable no-else-return */
// eslint-disable-next-line camelcase





const checkTokenExpiration = async () => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { logout } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_3__.UserContext);
    const token = window.localStorage.getItem('auth_token');
    let expiration = '';
    token ? expiration = await (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token) : expiration = null;
    if (expiration !== null && (expiration.exp * 1000) < Date.now()) {
        localStorage.removeItem('auth');
        localStorage.removeItem('auth_token');
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(t('Your token has expired, try to login again'));
        logout();
        return false;
    }
    else if (expiration !== null && (expiration.exp * 1000) > Date.now()) {
        return true;
    }
    else {
        return false;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTokenExpiration);


/***/ }),

/***/ "./src/utils/validateOrgToken.tsx":
/*!****************************************!*\
  !*** ./src/utils/validateOrgToken.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "./node_modules/.pnpm/jwt-decode@3.1.2/node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/useAuth */ "./src/hook/useAuth.tsx");
/* istanbul ignore file */
/* eslint-disable no-else-return */
// eslint-disable-next-line camelcase


// Rest of the code...



const checkOrgTokenExpiration = async () => {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const { logout } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_3__.UserContext);
    const token = window.localStorage.getItem('orgToken');
    const orgName = window.localStorage.getItem('orgName');
    let expiration = '';
    token ? (expiration = await (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token)) : (expiration = null);
    if (expiration !== null && expiration.exp * 1000 < Date.now()) {
        localStorage.removeItem('orgToken');
        localStorage.removeItem('orgName');
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(t('Your Org token has expired, try to login again'));
        logout();
        window.location.pathname = '/login/org';
        return false;
    }
    else if (!orgName) {
        window.location.pathname = '/login/org';
        return false;
    }
    else if (expiration !== null && expiration.exp * 1000 > Date.now()) {
        return true;
    }
    else {
        return false;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkOrgTokenExpiration);


/***/ })

}]);
//# sourceMappingURL=src_containers_DashRoutes_tsx.js.map