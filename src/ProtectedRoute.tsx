import React from 'react';
import Notify from './components/Notify';

interface SomeType {
  children: any,
}
// eslint-disable-next-line react/prop-types
export default function ProtectedRoutes(obj: SomeType) {
  const token = localStorage.getItem('auth');
  if (!token) {
    return obj.children;
  }
  return <Notify />;
}
