import React, { createContext, ReactNode, useMemo, useState } from 'react';

const getInitialState = () => {
  if (window && window.localStorage) {
    const storedUser = window.localStorage.getItem('auth');
    /* istanbul ignore if */
    if (storedUser) return JSON.parse(storedUser);
  }
  return { name: '', role: 'user', auth: false, notifications: [] };
};
interface Props {
  children: ReactNode;
  // any props that come into the component
}
export const UserContext = createContext<any>(getInitialState);

function UserProvider({ children, ...props }: Props) {
  const [user, setUser] = useState<any>(getInitialState);

  const login = (data: any) => {
    /* istanbul ignore next */
    localStorage.setItem(
      'auth',
      JSON.stringify({
        name: data.user?.profile?.name,
        firstName: data.user?.profile?.firstName,
        auth: true,
        role: data.user?.role,
        email: data.user.email,
        userId: data.user?.id,
      }),
    );
    /* istanbul ignore next */
    localStorage.setItem('auth_token', data.token);
    /* istanbul ignore next */
    setUser(() => ({
      name: data.user?.profile?.name,
      auth: true,
      role: data.user.role,
      email: data.user.email,
      firstName: data.user?.profile?.firstName,
      id: data.user?.profile?.id,
      profileImage: data.user?.profile?.avatar,
      userId: data.user?.id,
    }));
  };
  /* istanbul ignore next */
  const logout = (reason: string = '') => {
    localStorage.removeItem('auth');
    localStorage.removeItem('auth_token');
    if (reason !== 'expired') localStorage.setItem('loggedout', '1');
    setUser(() => ({ name: '', role: 'user', auth: false }));
  };
  /* istanbul ignore next */
  const setName = (name: string) => {
    setUser({ ...user, name });
  };
  const setProfileImage = (profileImage: string) => {
    setUser({ ...user, profileImage });
  };
  const setNotificationData = (data: any) => {
    setUser({ ...user, notifications: data });
  };
  const addNotification = (notification: any) => {
    setUser((user: any) => ({
      ...user,
      notifications: [notification, ...user.notifications],
    }));
  };

  const value = useMemo(
    () => ({
      user,
      setName,
      setProfileImage,
      login,
      logout,
      setNotificationData,
      addNotification,
    }),
    [user],
  );

  return (
    <UserContext.Provider {...props} value={value}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
