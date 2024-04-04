/* istanbul ignore file */
import React, { ReactNode, useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../hook/useAuth';
import checkTokenExpiration from '../utils/tokenValidation';
import checkOrgTokenExpiration from './validateOrgToken';

interface Props {
  children: ReactNode;
  // any props that come into the component
}

function CheckRole({ children, ...props }: Props) {
  useEffect(() => {
    async function protectRoutes() {
      checkTokenExpiration();
      checkOrgTokenExpiration();
    }
    protectRoutes;
  }, []);
  const loggedout = localStorage.getItem('loggedout');
  const orgToken: any = localStorage.getItem('orgToken');
  const { user } = useContext(UserContext);
  const location = useLocation();
  const params =
    loggedout !== '1' && location.pathname !== '/users/login'
      ? `?redirect=${location.pathname}${location.search}`
      : '';
  localStorage.removeItem('loggedout');
  if (user?.auth) return <React.Fragment {...props}>{children}</React.Fragment>;
  return (
    <Navigate
      {...props}
      to={orgToken ? `/users/login${params}` : '/login/org'}
      state={location.pathname}
    />
  );
}

export default CheckRole;