import React, { ReactNode, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../hook/useAuth';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const CheckRole = ({ children, ...props }: Props) => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  if (user?.auth) return <React.Fragment {...props}>{children}</React.Fragment>;
  return <Navigate {...props} to="/login-admin" state={location.pathname} />;
};

export default CheckRole;
