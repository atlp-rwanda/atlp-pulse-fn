import React from 'react';
import { NavLink } from 'react-router-dom';

function SideBarDocs() {
  return (
    <section className="py-5 font-serif">
      <ul className="py-2 flex flex-col gap-4 text-[16px]">
        <NavLink
          className={(navData) => {
            if (navData.isActive) return 'text-[#4f30be] dark:text-[#a791f5]';
            return '';
          }}
          to="/docs/getting-started"
        >
          Getting started (new users)
        </NavLink>

        <NavLink
          className={(navData) => {
            if (navData.isActive) return 'text-[#4f30be] dark:text-[#a791f5]';
            return '';
          }}
          to="/docs/org-signin"
        >
          <li>How To SignIn An Organization</li>
        </NavLink>
        <NavLink
          className={(navData) => {
            if (navData.isActive) return 'text-[#4f30be] dark:text-[#a791f5]';
            return '';
          }}
          to="/docs/org-signup"
        >
          <li>How To SignUp A New Organization</li>
        </NavLink>
      </ul>
    </section>
  );
}

export default SideBarDocs;
