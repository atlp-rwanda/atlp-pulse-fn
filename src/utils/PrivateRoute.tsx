import React, { ReactNode, useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../hook/useAuth';
import checkTokenExpiration from '../utils/tokenValidation';



interface Props {
  children: ReactNode;
  // any props that come into the component
}

function CheckRole({ children, ...props }: Props) {
  const [token, setToken] = useState(true);
  const { logout } = useContext(UserContext);


   setInterval(() =>{ 
    checkTokenExpiration();        
        const promise1 = Promise.resolve(checkTokenExpiration());
        promise1.then((value) => {
          setToken(value)
        });
  },2000)

  if(!token){
    logout()
    return(
        <Navigate to="/login" replace/>  
    )
  }


  const orgToken: any = localStorage.getItem('orgToken');
  const { user } = useContext(UserContext);
  const location = useLocation();
  if (user?.auth) return <React.Fragment {...props}>{children}</React.Fragment>;
  return (
    <Navigate
      {...props}
      to={orgToken ? '/users/login' : '/login/org'}
      state={location.pathname}
    />
  );
}

export default CheckRole;
