/* istanbul ignore file */
/* eslint-disable no-else-return */
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { UserContext } from '../hook/useAuth';

const checkOrgTokenExpiration = async () => {
  const { t } = useTranslation();
  const { logout } = useContext(UserContext);

  const token = window.localStorage.getItem('orgToken');
  const orgName = window.localStorage.getItem('orgName');
  let expiration: any = '';
  token ? (expiration = await jwt_decode(token)) : (expiration = null);

  if (expiration !== null && expiration.exp * 1000 < Date.now()) {
    localStorage.removeItem('orgToken');
    localStorage.removeItem('orgName');
    toast.error(t('Your Org token has expired, try to login again'));
    logout();
    window.location.pathname = '/login/org';
    return false;
  } else if (!orgName) {
    window.location.pathname = '/login/org';
    return false;
  } else if (expiration !== null && expiration.exp * 1000 > Date.now()) {
    return true;
  } else {
    return false;
  }
};

export default checkOrgTokenExpiration;
