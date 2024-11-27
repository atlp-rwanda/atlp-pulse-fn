import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notify from './components/Notify';
import { UserContext } from './hook/useAuth';
import checkOrgTokenExpiration from './utils/validateOrgToken';

interface SomeType {
  children: any;
}
// eslint-disable-next-line react/prop-types
export default function ProtectedRoutes(obj: SomeType) {
  const [searchParams] = useSearchParams();
  const { user } = useContext(UserContext);
  /* istanbul ignore next */
  checkOrgTokenExpiration();

  if (!user?.auth) {
    if (searchParams) {
      sessionStorage.setItem('redirectParams', searchParams.toString());
    }
    return obj.children;
  }
  /* istanbul ignore next */
  return <Notify />;
}
