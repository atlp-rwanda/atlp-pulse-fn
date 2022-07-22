import React, { createContext, ReactNode, useState } from 'react';

const getInitialState = () => {
  if (window && window.localStorage) {
    const storedUser = window.localStorage.getItem('auth');
    if (storedUser) return JSON.parse(storedUser);
  }
  return { name: '', role: 'user', auth: false };
};
interface Props {
  children?: ReactNode;
  // any props that come into the component
}
export const UserContext = createContext<any>(getInitialState);

const UserProvider = ({ children, ...props }: Props) => {
  const [user, setUser] = useState<any>(getInitialState);
  const login = (data: any) => {
    localStorage.setItem(
      'auth',
      JSON.stringify({ name: data.name, auth: true, role: data.role }),
    );
    setUser(() => ({ name: data.name, auth: true, role: data.role }));
  };
  const logout = () => {
    setUser(() => ({ name: '', role: 'user', auth: false }));
  };

  return (
    <UserContext.Provider {...props} value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
