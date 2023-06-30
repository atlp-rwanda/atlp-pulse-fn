"use strict";
(self["webpackChunkatlp_pulse_fn"] = self["webpackChunkatlp_pulse_fn"] || []).push([["src_components_Input_tsx-src_components_ProfileCoverpage_tsx-src_constants_countries_ts-src_c-3fb002"],{

/***/ "./src/components/Input.tsx":
/*!**********************************!*\
  !*** ./src/components/Input.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");


const inputDefaultProps = {
    customClass: '',
};
function Input({ labelFor, labelText, id, name, type, errors, placeholder, customClass, isRequired, register, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    /* Format error message to remove the tick and capitilize the first letter */
    let fieldName = name.replace(/-/gi, ' ');
    fieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
    /* Format error message end */
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col justify-start items-start" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { htmlFor: labelFor, className: "font-semibold mb-2" }, t(labelText)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { ...register(name, {
                required: {
                    value: isRequired,
                    message: `${t(`${fieldName} is required`)}`,
                },
            }), id: id, type: type, className: `rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white  ${customClass}`, placeholder: placeholder }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { className: "text-red-600" }, errors[name] && errors[name].message))));
}
Input.defaultProps = inputDefaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ "./src/components/ProfileCoverpage.tsx":
/*!*********************************************!*\
  !*** ./src/components/ProfileCoverpage.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfileCoverpage)
/* harmony export */ });
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/PencilAltIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/PencilIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/.pnpm/axios@0.27.2/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.7.0/node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useApolloClient.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/client */ "./node_modules/.pnpm/@apollo+client@3.7.16_psgauoalwbb6gskyexcppj5xy4/node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/CameraIcon.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.13.0_react@18.2.0/node_modules/react-router/dist/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/.pnpm/react-toastify@9.1.3_biqbaboplfbrettd7655fr4n2y/node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Buttons */ "./src/components/Buttons.tsx");
/* harmony import */ var _Mutations_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Mutations/User */ "./src/Mutations/User.tsx");
/* harmony import */ var _assets_avatar_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/avatar.png */ "./src/assets/avatar.png");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Spinner */ "./src/components/Spinner.tsx");
/* harmony import */ var _hook_useAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hook/useAuth */ "./src/hook/useAuth.tsx");













function ProfileCoverpage({ currentPage, data, }) {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
    const UPDATE_AVATAR = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.gql) `
    mutation UpdateAvatar($avatar: String) {
      updateAvatar(avatar: $avatar) {
        avatar
      }
    }
  `;
    const UPDATE_COVER = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.gql) `
    mutation UpdateCover($cover: String) {
      updateCoverImage(cover: $cover) {
        cover
      }
    }
  `;
    const client = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useApolloClient)();
    const [UpdateAvatar, { loading }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_12__.useMutation)(UPDATE_AVATAR);
    const [UpdateCover, { loading: loading2 }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_12__.useMutation)(UPDATE_COVER);
    const [profileData, setProfileData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [getProfile, { refetch }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_13__.useLazyQuery)(_Mutations_User__WEBPACK_IMPORTED_MODULE_4__.GET_PROFILE);
    const [spinner, setSpinner] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { setProfileImage } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hook_useAuth__WEBPACK_IMPORTED_MODULE_7__.UserContext);
    const [spinnerCover, setSpinnerCover] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        isUploaded: false,
    });
    const uploadImage = async (files) => {
        try {
            const formData = new FormData();
            formData.append('file', files[0]);
            formData.append('upload_preset', 'my_upload');
            const avatar = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('https://api.cloudinary.com/v1_1/dj24yfas5/image/upload', formData);
            /* istanbul ignore next */
            const updated = await UpdateAvatar({
                variables: { avatar: avatar?.data?.secure_url },
            });
            /* istanbul ignore next */
            setSpinner(true);
            /* istanbul ignore if */
            if (updated) {
                setSpinner(false);
                setProfileImage(updated?.data?.updateAvatar?.avatar);
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success('updated');
            }
            /* istanbul ignore next */
            if (updated?.data?.updateAvatar?.avatar) {
                /* istanbul ignore next */
                setStatus({
                    isUploaded: true,
                });
            }
            /* istanbul ignore next */
            await client.resetStore();
        }
        catch (error) { }
    };
    const uploadCover = async (files) => {
        try {
            const formData = new FormData();
            formData.append('file', files[0]);
            formData.append('upload_preset', 'my_upload');
            const cover = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('https://api.cloudinary.com/v1_1/dj24yfas5/image/upload', formData);
            /* istanbul ignore next */
            const updated = await UpdateCover({
                variables: { cover: cover?.data?.secure_url },
            });
            /* istanbul ignore next */
            setSpinnerCover(true);
            /* istanbul ignore if */
            if (updated) {
                setSpinnerCover(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success('updated');
            }
            /* istanbul ignore next */
            if (updated?.data?.updateCoverImage?.cover) {
                /* istanbul ignore next */
                setStatus({
                    isUploaded: true,
                });
            }
            /* istanbul ignore next */
            await client.resetStore();
        }
        catch (error) { }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const fetchData = async () => {
            try {
                const { data } = await getProfile();
                /* istanbul ignore next */
                setProfileData(data);
            }
            catch (error) {
                /* istanbul ignore next */
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(error?.message || 'Something went wrong');
            }
        };
        fetchData();
    }, [status.isUploaded]);
    const handleEdit = () => {
        /* istanbul ignore next */
        navigate('edit', {
            state: {
                profile: data,
            },
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
            backgroundImage: profileData?.getProfile?.cover
                ? `url(${profileData?.getProfile?.cover})`
                : `url(${'https://images.unsplash.com/photo-1483168527879-c66136b56105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3016&q=80'})`,
        }, className: " mt-[4.4rem] bg-cover bg-no-repeat bg-defaultCover bg-center bg-fixed h-[28vh] md:h-[26vh] lg:ml-48 flex flex-row text-center  align-center items-center" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: profileData?.getProfile?.avatar
                ? profileData?.getProfile?.avatar
                : _assets_avatar_png__WEBPACK_IMPORTED_MODULE_5__["default"], className: "w-20 md:w-28 h-20 md:h-28 m-4 relative ml-6 md:ml-20 mt-36 md:mt-12 rounded-full", alt: "profile-avatar" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex h-full items-center justify-center bg-grey-lighter  -ml-10 md:-ml-12 mt-36 md:mt-20 z-0 mr-auto" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { role: "button" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "flex flex-row text-center ml-auto mr-4 rounded-lg bg-primary text-white hover:bg-[#1eaad6] focus:outline-none p-1" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_14__["default"], { className: "w-5 md:w-3 mr-1 mt-0 dark:text-dark-text-fill" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-lg md:text-sm dark:text-dark-text-fill" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "hidden md:block" },
                            t('Edit'),
                            " ")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "file", className: "hidden", "data-testid": "upload-image", onChange: (event) => {
                            uploadImage(event.target.files);
                            setSpinner(true);
                        } }))),
            spinner ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__["default"], null) : ''),
        currentPage !== 'editProfile' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_3__["default"], { onClick: () => handleEdit(), variant: "default", size: "md", style: "text-center ml-auto mr-4 mt-40 md:mt-24  rounded-lg bg-primary text-white hover:bg-[#1eaad6] focus:outline-none p-1 md:p-2 flex flex-row" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_15__["default"], { className: "w-6 mr-1 md:mr-2 dark:text-dark-text-fill " }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "hidden md:block" },
                " ",
                t('Edit Profile'),
                " "))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full h-screen items-center justify-center bg-grey-lighter  ml-auto  mt-24" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "flex flex-row text-center ml-auto mr-4 rounded-lg bg-primary text-white hover:bg-[#1eaad6] focus:outline-none p-2" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_16__["default"], { className: "w-6 mr-1 mt-0  dark:text-dark-text-fill" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: " dark:text-dark-text-fill" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "hidden md:block" },
                        t('Change Picture'),
                        " ")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "file", className: "hidden", "data-testid": "upload-cover", onChange: (event) => {
                        uploadCover(event.target.files);
                        setSpinnerCover(true);
                    } }),
                spinnerCover ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__["default"], null) : '')))));
}
/* istanbul ignore next */
function setData(data) {
    /* istanbul ignore next */
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "./src/components/Spinner.tsx":
/*!************************************!*\
  !*** ./src/components/Spinner.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/.pnpm/react-i18next@11.18.6_vfm63zmruocgezzfl2v26zlzpy/node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var _hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hook/useDocumentTitle */ "./src/hook/useDocumentTitle.tsx");



function Spinner() {
    (0,_hook_useDocumentTitle__WEBPACK_IMPORTED_MODULE_1__["default"])('Product');
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center justify-center  h-5 opacity-90" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { role: "status" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: "mr-1 ml-1 inline h-5 w-5 animate-spin fill-gray-300 text-gray-100 dark:text-gray-600", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentFill" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "sr-only" }, "Loading..."))));
}


/***/ }),

/***/ "./src/constants/countries.ts":
/*!************************************!*\
  !*** ./src/constants/countries.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COUNTRIES: () => (/* binding */ COUNTRIES)
/* harmony export */ });
const COUNTRIES = [
    {
        title: 'Afghanistan',
        value: 'AF',
    },
    {
        title: 'Albania',
        value: 'AL',
    },
    {
        title: 'Algeria',
        value: 'DZ',
    },
    {
        title: 'American Samoa',
        value: 'AS',
    },
    {
        title: 'Andorra',
        value: 'AD',
    },
    {
        title: 'Angola',
        value: 'AO',
    },
    {
        title: 'Anguilla',
        value: 'AI',
    },
    {
        title: 'Argentina',
        value: 'AR',
    },
    {
        title: 'Armenia',
        value: 'AM',
    },
    {
        title: 'Aruba',
        value: 'AW',
    },
    {
        title: 'Australia',
        value: 'AU',
    },
    {
        title: 'Azerbaijan',
        value: 'AZ',
    },
    {
        title: 'Bahamas',
        value: 'BS',
    },
    {
        title: 'Bahrain',
        value: 'BH',
    },
    {
        title: 'Bangladesh',
        value: 'BD',
    },
    {
        title: 'Barbados',
        value: 'BB',
    },
    {
        title: 'Belarus',
        value: 'BY',
    },
    {
        title: 'Belgium',
        value: 'BE',
    },
    {
        title: 'Belize',
        value: 'BZ',
    },
    {
        title: 'Benin',
        value: 'BJ',
    },
    {
        title: 'Bermuda',
        value: 'BM',
    },
    {
        title: 'Bhutan',
        value: 'BT',
    },
    {
        title: 'Bolivia',
        value: 'BO',
    },
    {
        title: 'Bosnia and Herzegovina',
        value: 'BA',
    },
    {
        title: 'Botswana',
        value: 'BW',
    },
    {
        title: 'Brazil',
        value: 'BR',
    },
    {
        title: 'British Virgin Islands',
        value: 'VG',
    },
    {
        title: 'Brunei',
        value: 'BN',
    },
    {
        title: 'Bulgaria',
        value: 'BG',
    },
    {
        title: 'Burkina Faso',
        value: 'BF',
    },
    {
        title: 'Burundi',
        value: 'BI',
    },
    {
        title: 'Cambodia',
        value: 'KH',
    },
    {
        title: 'Cameroon',
        value: 'CM',
    },
    {
        title: 'Canada',
        value: 'CA',
    },
    {
        title: 'Cape Verde',
        value: 'CV',
    },
    {
        title: 'Cayman Islands',
        value: 'KY',
    },
    {
        title: 'Central African Republic',
        value: 'CF',
    },
    {
        title: 'Chad',
        value: 'TD',
    },
    {
        title: 'Chile',
        value: 'CL',
    },
    {
        title: 'China',
        value: 'CN',
    },
    {
        title: 'Columbia',
        value: 'CO',
    },
    {
        title: 'Comoros',
        value: 'KM',
    },
    {
        title: 'Cook Islands',
        value: 'CK',
    },
    {
        title: 'Costa Rica',
        value: 'CR',
    },
    {
        title: 'Croatia',
        value: 'HR',
    },
    {
        title: 'Cuba',
        value: 'CU',
    },
    {
        title: 'Curacao',
        value: 'CW',
    },
    {
        title: 'Cyprus',
        value: 'CY',
    },
    {
        title: 'Czech Republic',
        value: 'CZ',
    },
    {
        title: 'Democratic Republic of the Congo',
        value: 'CD',
    },
    {
        title: 'Denmark',
        value: 'DK',
    },
    {
        title: 'Djibouti',
        value: 'DJ',
    },
    {
        title: 'Dominica',
        value: 'DM',
    },
    {
        title: 'Dominican Republic',
        value: 'DO',
    },
    {
        title: 'East Timor',
        value: 'TL',
    },
    {
        title: 'Ecuador',
        value: 'EC',
    },
    {
        title: 'Egypt',
        value: 'EG',
    },
    {
        title: 'El Salvador',
        value: 'SV',
    },
    {
        title: 'Eritrea',
        value: 'ER',
    },
    {
        title: 'Estonia',
        value: 'EE',
    },
    {
        title: 'Faroe Islands',
        value: 'FO',
    },
    {
        title: 'Fiji',
        value: 'FJ',
    },
    {
        title: 'Finland',
        value: 'FI',
    },
    {
        title: 'France',
        value: 'FR',
    },
    {
        title: 'French Polynesia',
        value: 'PF',
    },
    {
        title: 'Gabon',
        value: 'GA',
    },
    {
        title: 'Gambia',
        value: 'GM',
    },
    {
        title: 'Georgia',
        value: 'GE',
    },
    {
        title: 'Germany',
        value: 'DE',
    },
    {
        title: 'Ghana',
        value: 'GH',
    },
    {
        title: 'Greece',
        value: 'GR',
    },
    {
        title: 'Greenland',
        value: 'GL',
    },
    {
        title: 'Grenada',
        value: 'GD',
    },
    {
        title: 'Guam',
        value: 'GU',
    },
    {
        title: 'Guatemala',
        value: 'GT',
    },
    {
        title: 'Guernsey',
        value: 'GG',
    },
    {
        title: 'Guinea',
        value: 'GN',
    },
    {
        title: 'Guinea-Bissau',
        value: 'GW',
    },
    {
        title: 'Guyana',
        value: 'GY',
    },
    {
        title: 'Haiti',
        value: 'HT',
    },
    {
        title: 'Honduras',
        value: 'HN',
    },
    {
        title: 'Hong Kong',
        value: 'HK',
    },
    {
        title: 'Hungary',
        value: 'HU',
    },
    {
        title: 'Iceland',
        value: 'IS',
    },
    {
        title: 'India',
        value: 'IN',
    },
    {
        title: 'Indonesia',
        value: 'ID',
    },
    {
        title: 'Iran',
        value: 'IR',
    },
    {
        title: 'Iraq',
        value: 'IQ',
    },
    {
        title: 'Ireland',
        value: 'IE',
    },
    {
        title: 'Isle of Man',
        value: 'IM',
    },
    {
        title: 'Israel',
        value: 'IL',
    },
    {
        title: 'Italy',
        value: 'IT',
    },
    {
        title: 'Ivory Coast',
        value: 'CI',
    },
    {
        title: 'Jamaica',
        value: 'JM',
    },
    {
        title: 'Japan',
        value: 'JP',
    },
    {
        title: 'Jersey',
        value: 'JE',
    },
    {
        title: 'Jordan',
        value: 'JO',
    },
    {
        title: 'Kazakhstan',
        value: 'KZ',
    },
    {
        title: 'Kenya',
        value: 'KE',
    },
    {
        title: 'Kiribati',
        value: 'KI',
    },
    {
        title: 'Kosovo',
        value: 'XK',
    },
    {
        title: 'Kuwait',
        value: 'KW',
    },
    {
        title: 'Kyrgyzstan',
        value: 'KG',
    },
    {
        title: 'Laos',
        value: 'LA',
    },
    {
        title: 'Latvia',
        value: 'LV',
    },
    {
        title: 'Lebanon',
        value: 'LB',
    },
    {
        title: 'Lesotho',
        value: 'LS',
    },
    {
        title: 'Liberia',
        value: 'LB',
    },
    {
        title: 'Libya',
        value: 'LY',
    },
    {
        title: 'Liechtenstein',
        value: 'LI',
    },
    {
        title: 'Lithuania',
        value: 'LT',
    },
    {
        title: 'Luxembourg',
        value: 'LU',
    },
    {
        title: 'Macau',
        value: 'MO',
    },
    {
        title: 'Macedonia',
        value: 'MK',
    },
    {
        title: 'Madagascar',
        value: 'MG',
    },
    {
        title: 'Malawi',
        value: 'MW',
    },
    {
        title: 'Malaysia',
        value: 'MY',
    },
    {
        title: 'Maldives',
        value: 'MV',
    },
    {
        title: 'Mali',
        value: 'ML',
    },
    {
        title: 'Malta',
        value: 'MT',
    },
    {
        title: 'Marshall Islands',
        value: 'MH',
    },
    {
        title: 'Mauritania',
        value: 'MR',
    },
    {
        title: 'Mauritius',
        value: 'MU',
    },
    {
        title: 'Mayotte',
        value: 'YT',
    },
    {
        title: 'Mexico',
        value: 'MX',
    },
    {
        title: 'Micronesia',
        value: 'FM',
    },
    {
        title: 'Moldova',
        value: 'MD',
    },
    {
        title: 'Monaco',
        value: 'MC',
    },
    {
        title: 'Mongolia',
        value: 'MN',
    },
    {
        title: 'Montenegro',
        value: 'ME',
    },
    {
        title: 'Morocco',
        value: 'MA',
    },
    {
        title: 'Mozambique',
        value: 'MZ',
    },
    {
        title: 'Myanmar',
        value: 'MM',
    },
    {
        title: 'Namibia',
        value: 'NA',
    },
    {
        title: 'Nepal',
        value: 'NP',
    },
    {
        title: 'Netherlands',
        value: 'NL',
    },
    {
        title: 'Netherlands Antilles',
        value: 'AN',
    },
    {
        title: 'New Caledonia',
        value: 'NC',
    },
    {
        title: 'New Zealand',
        value: 'NZ',
    },
    {
        title: 'Nicaragua',
        value: 'NI',
    },
    {
        title: 'Niger',
        value: 'NE',
    },
    {
        title: 'Nigeria',
        value: 'NG',
    },
    {
        title: 'North Korea',
        value: 'KP',
    },
    {
        title: 'Northern Mariana Islands',
        value: 'MP',
    },
    {
        title: 'Norway',
        value: 'NO',
    },
    {
        title: 'Oman',
        value: 'OM',
    },
    {
        title: 'Pakistan',
        value: 'PK',
    },
    {
        title: 'Palestine',
        value: 'PS',
    },
    {
        title: 'Panama',
        value: 'PA',
    },
    {
        title: 'Papua New Guinea',
        value: 'PG',
    },
    {
        title: 'Paraguay',
        value: 'PY',
    },
    {
        title: 'Peru',
        value: 'PE',
    },
    {
        title: 'Philippines',
        value: 'PH',
    },
    {
        title: 'Poland',
        value: 'PL',
    },
    {
        title: 'Portugal',
        value: 'PT',
    },
    {
        title: 'Puerto Rico',
        value: 'PR',
    },
    {
        title: 'Qatar',
        value: 'QA',
    },
    {
        title: 'Republic of the Congo',
        value: 'CG',
    },
    {
        title: 'Reunion',
        value: 'RE',
    },
    {
        title: 'Romania',
        value: 'RO',
    },
    {
        title: 'Russia',
        value: 'RU',
    },
    {
        title: 'Rwanda',
        value: 'RW',
    },
    {
        title: 'Saint Kitts and Nevis',
        value: 'KN',
    },
    {
        title: 'Saint Lucia',
        value: 'LC',
    },
    {
        title: 'Saint Martin',
        value: 'MF',
    },
    {
        title: 'Saint Pierre and Miquelon',
        value: 'PM',
    },
    {
        title: 'Saint Vincent and the Grenadines',
        value: 'VC',
    },
    {
        title: 'Samoa',
        value: 'WS',
    },
    {
        title: 'San Marino',
        value: 'SM',
    },
    {
        title: 'Sao Tome and Principe',
        value: 'ST',
    },
    {
        title: 'Saudi Arabia',
        value: 'SA',
    },
    {
        title: 'Senegal',
        value: 'SN',
    },
    {
        title: 'Serbia',
        value: 'RS',
    },
    {
        title: 'Seychelles',
        value: 'SC',
    },
    {
        title: 'Sierra Leone',
        value: 'SL',
    },
    {
        title: 'Singapore',
        value: 'SG',
    },
    {
        title: 'Sint Maarten',
        value: 'SX',
    },
    {
        title: 'Slovakia',
        value: 'SK',
    },
    {
        title: 'Slovenia',
        value: 'SI',
    },
    {
        title: 'Solomon Islands',
        value: 'SB',
    },
    {
        title: 'Somalia',
        value: 'SO',
    },
    {
        title: 'South Africa',
        value: 'ZA',
    },
    {
        title: 'South Korea',
        value: 'KR',
    },
    {
        title: 'South Sudan',
        value: 'SS',
    },
    {
        title: 'Spain',
        value: 'ES',
    },
    {
        title: 'Sri Lanka',
        value: 'LK',
    },
    {
        title: 'Sudan',
        value: 'SD',
    },
    {
        title: 'Suriname',
        value: 'SR',
    },
    {
        title: 'Swaziland',
        value: 'SZ',
    },
    {
        title: 'Sweden',
        value: 'SE',
    },
    {
        title: 'Switzerland',
        value: 'CH',
    },
    {
        title: 'Syria',
        value: 'SY',
    },
    {
        title: 'Taiwan',
        value: 'TW',
    },
    {
        title: 'Tajikistan',
        value: 'TJ',
    },
    {
        title: 'Tanzania',
        value: 'TZ',
    },
    {
        title: 'Thailand',
        value: 'TH',
    },
    {
        title: 'Togo',
        value: 'TG',
    },
    {
        title: 'Tonga',
        value: 'TO',
    },
    {
        title: 'Trinidad and Tobago',
        value: 'TT',
    },
    {
        title: 'Tunisia',
        value: 'TN',
    },
    {
        title: 'Turkey',
        value: 'TR',
    },
    {
        title: 'Turkmenistan',
        value: 'TM',
    },
    {
        title: 'Turks and Caicos Islands',
        value: 'TC',
    },
    {
        title: 'Tuvalu',
        value: 'TV',
    },
    {
        title: 'U.S. Virgin Islands',
        value: 'VI',
    },
    {
        title: 'Uganda',
        value: 'UG',
    },
    {
        title: 'Ukraine',
        value: 'UA',
    },
    {
        title: 'United Arab Emirates',
        value: 'AE',
    },
    {
        title: 'United Kingdom',
        value: 'GB',
    },
    {
        title: 'United States',
        value: 'US',
    },
    {
        title: 'Uruguay',
        value: 'UY',
    },
    {
        title: 'Uzbekistan',
        value: 'UZ',
    },
    {
        title: 'Vanuatu',
        value: 'VU',
    },
    {
        title: 'Venezuela',
        value: 'VE',
    },
    {
        title: 'Vietnam',
        value: 'VN',
    },
    {
        title: 'Western Sahara',
        value: 'EH',
    },
    {
        title: 'Yemen',
        value: 'YE',
    },
    {
        title: 'Zambia',
        value: 'ZM',
    },
    {
        title: 'Zimbabwe',
        value: 'ZW',
    },
];


/***/ }),

/***/ "./src/constants/formFields.ts":
/*!*************************************!*\
  !*** ./src/constants/formFields.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   passwordFields: () => (/* binding */ passwordFields)
/* harmony export */ });
const profileFields = [
    {
        labelText: 'First Name',
        labelFor: 'first-name',
        id: 'firstname',
        name: 'firstName',
        type: 'text',
        autoComplete: 'firstname',
        isRequired: true,
        placeholder: 'Enter your First Name',
    },
    {
        labelText: 'Last Name',
        labelFor: 'lastname',
        id: 'lastname',
        name: 'lastName',
        type: 'text',
        autoComplete: 'lastname',
        isRequired: true,
        placeholder: 'Enter your Last Name',
    },
    {
        labelText: 'Address',
        labelFor: 'address',
        id: 'address',
        name: 'address',
        type: 'text',
        autoComplete: 'address',
        isRequired: false,
        placeholder: 'Enter your address',
    },
    {
        labelText: 'City',
        labelFor: 'city',
        id: 'city',
        name: 'city',
        type: 'text',
        autoComplete: 'city',
        isRequired: false,
        placeholder: 'Enter the City where you live',
    },
    {
        labelText: 'Telephone',
        labelFor: 'telephone',
        id: 'telephone',
        name: 'phoneNumber',
        type: 'phone',
        autoComplete: 'telephone',
        isRequired: false,
        placeholder: 'Your Telephone Number',
    },
];
const passwordFields = [
    {
        labelText: 'Current Password',
        labelFor: 'current-password',
        id: 'current-password',
        name: 'current-password',
        type: 'passsword',
        autoComplete: 'current-password',
        isRequired: true,
        placeholder: 'Enter your current password',
    },
    {
        labelText: 'New Password',
        labelFor: 'new-password',
        id: 'new-password',
        name: 'new-password',
        type: 'password',
        autoComplete: 'new-password',
        isRequired: true,
        placeholder: 'Enter new password',
    },
    {
        labelText: 'Confirm Password',
        labelFor: 'confirm-password',
        id: 'confirm-password',
        name: 'confirm-password',
        type: 'password',
        autoComplete: 'confirm-password',
        isRequired: true,
        placeholder: 'Re-enter the new password',
    },
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profileFields);


/***/ })

}]);
//# sourceMappingURL=src_components_Input_tsx-src_components_ProfileCoverpage_tsx-src_constants_countries_ts-src_c-3fb002.js.map