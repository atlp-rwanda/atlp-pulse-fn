/* istanbul ignore file */
/* eslint-disable no-else-return */
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import { toast} from 'react-toastify';
import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import { UserContext } from '../hook/useAuth';



const checkTokenExpiration = async() => {
  const { t } = useTranslation();
  const { logout } = useContext(UserContext);

  const token= window.localStorage.getItem('auth_token');
  let expiration:any = ''
  token ? expiration=await jwt_decode(token): expiration=null;
  
      if (expiration !== null && (expiration.exp*1000) < Date.now()) {
        localStorage.removeItem('auth');
        localStorage.removeItem('auth_token');
        toast.error(t('Your token has expired, try to login again'));
        logout()
        return false

      }else if(expiration !== null && (expiration.exp*1000) > Date.now()){
        return true
      }else{
        return false
      }
      
    
  };

  export default checkTokenExpiration