import React, { useContext } from 'react';
import Notify from './components/Notify';
import { UserContext } from './hook/useAuth';

interface SomeType {
  children: any;
}
// eslint-disable-next-line react/prop-types
export default function ProtectedRoutes(obj: SomeType) {
  const { user } = useContext(UserContext);
  if (!user?.auth) {
    return obj.children;
  }
  return <Notify />;
}
