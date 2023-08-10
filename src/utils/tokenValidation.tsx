/* eslint-disable camelcase */
/* istanbul ignore file */
import jwt_decode from 'jwt-decode';
import { toast, ToastContent } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { UserContext } from '../hook/useAuth';

const checkTokenExpiration = async () => {
  const { t } = useTranslation();
  const { logout } = useContext(UserContext);

  const token = window.localStorage.getItem('auth_token');
  let expiration: any = '';
  token ? (expiration = await jwt_decode(token)) : (expiration = null);

  if (expiration !== null && expiration.exp * 1000 < Date.now()) {
    localStorage.removeItem('auth');
    localStorage.removeItem('auth_token');
    toast.error(
      t('Your token has expired, try to login again') as ToastContent<unknown>,
    );
    logout('expired');
    return false;
  }
  if (expiration !== null && expiration.exp * 1000 > Date.now()) {
    return true;
  }
  return false;
};

export default checkTokenExpiration;
