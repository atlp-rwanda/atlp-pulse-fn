import React, { ReactNode, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../hook/useAuth';
import checkTokenExpiration from '../utils/tokenValidation';

interface Props {
  children: ReactNode;
  // any props that come into the component
}

function CheckRole({ children, ...props }: Props) {
  checkTokenExpiration()
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
