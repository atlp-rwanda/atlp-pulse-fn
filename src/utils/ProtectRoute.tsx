/* istanbul ignore file */
import React, { ReactNode, useContext } from 'react';
import { Navigate, Routes } from 'react-router-dom';
import { UserContext } from '../hook/useAuth';

interface Props {
  children: ReactNode;
  roles?: string[];
  // any props that come into the component
}

function ProtectedUserRoute({ children, roles = [], ...props }: Props) {
  const { user } = useContext(UserContext);
  if (roles?.includes(user?.role) || roles.length === 0) return <>{children}</>;
  return <Navigate {...props} to="/dashboard" />;
}

export default ProtectedUserRoute;
