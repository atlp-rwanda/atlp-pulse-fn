/* eslint-disable no-restricted-syntax */
import React, { ReactNode, useContext } from 'react';
import { UserContext } from '../hook/useAuth';

interface Props {
  children: ReactNode;
  roles: string[];
  // any props that come into the component
}

function filterRoles(arr: string[]) {
  const good: string[] = [];
  const bad: string[] = [];

  for (const el of arr) {
    const value = el.trim();
    if (value[0] === '-') {
      const [_one, ...badRole] = value;
      bad.push(badRole.join('').trim());
    } else {
      good.push(value);
    }
  }

  return { good, bad };
}

function CheckRole({ children, roles, ...props }: Props) {
  const { good, bad } = filterRoles(roles);
  const { user } = useContext(UserContext);
  if (
    roles.length === 0 ||
    (bad.length && !bad.includes(user?.role)) ||
    (good.length && good?.includes(user?.role))
  )
    return <React.Fragment {...props}>{children}</React.Fragment>;
  return <React.Fragment {...props} />;
}

export default CheckRole;
