import React, {
  createContext, ReactNode, useMemo, useState,
} from 'react';

const getInitialState = () => {
  if (window && window.localStorage) {
    const storedUser = window.localStorage.getItem('auth');
    if (storedUser) return JSON.parse(storedUser);
  }
  return { name: '', role: 'user', auth: false };
};
interface Props {
  children: ReactNode;
  // any props that come into the component
}
export const UserContext = createContext<any>(getInitialState);

function UserProvider({ children, ...props }: Props) {
  const [user, setUser] = useState<any>(getInitialState);
  const login = (data: any) => {
    localStorage.setItem(
      'auth',
      JSON.stringify({
        name: data.user?.profile?.name,
        firstName: data.user?.profile?.firstName,
        auth: true,
        role: data.user?.role,
        email: data.user.email,
      }),
    );
    localStorage.setItem('auth_token', data.token);
    setUser(() => ({
      name: data.user?.profile?.name,
      auth: true,
      role: data.user.role,
      email: data.user.email,
      firstName: data.user?.profile?.firstName,
    }));
  };
  const logout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('auth_token');
    setUser(() => ({ name: '', role: 'user', auth: false }));
  };
  const value = useMemo(
    () => ({
      user,
      login,
      logout,
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
