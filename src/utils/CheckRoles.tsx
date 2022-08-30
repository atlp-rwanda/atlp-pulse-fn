import React, { ReactNode, useContext } from 'react';
import { UserContext } from '../hook/useAuth';

interface Props {
  children: ReactNode;
  roles: String[];
  // any props that come into the component
}

function CheckRole({ children, roles, ...props }: Props) {
  const { user } = useContext(UserContext);
  if (roles?.includes(user?.role))
    return <React.Fragment {...props}>{children}</React.Fragment>;
  return <React.Fragment {...props} />;
}

export default CheckRole;
