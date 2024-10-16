/* istanbul ignore file */
import React, { ReactNode, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../hook/useAuth';

interface Props {
  children: ReactNode;
  roles?: string[];
  // any props that come into the component
}

function ProtectedUserRoute({ children, roles = [], ...props }: Props) {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if (roles?.includes(user?.role) || roles.length === 0) {
    return <>{children}</>;
  }

  // Redirect to login if user is not authenticated, and append the current path
  return <Navigate {...props} to={`/login?redirect=${location.pathname}`} />;
}

export default ProtectedUserRoute;
