/* eslint-disable no-else-return */
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";







const checkTokenExpiration = async() => {
  const token= window.localStorage.getItem('auth_token');
  let expiration:any = ''
  token ? expiration=await jwt_decode(token): expiration=null;
  
      if (expiration !== null && (expiration.exp*1000) < Date.now()) {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('orgToken')
        localStorage.removeItem('auth')
        return false

      }else if(expiration !== null && (expiration.exp*1000) > Date.now()){
        return true
      }else{
        return false
      }
      
    
  };

  export default checkTokenExpiration
