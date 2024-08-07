import React from 'react';
import { NavLink } from 'react-router-dom';

function SideBarDocs() {


    return (
        <section className = "py-8 px-5 ">
            <ul className ="p-2 flex flex-col gap-4" >
              <NavLink className={(navData) => {if (navData.isActive) return 'text-primary'; return ''}} to='/docs/getting-started'>Getting started (new users)</NavLink>
                <NavLink
                 className={(navData) => {
                    if (navData.isActive) return 'text-primary';
                    return '';
                  }}
                to="/docs/org-signin">
                <li>How To SignIn An Organization</li>
                </NavLink>
                <NavLink 
                 className={(navData) => {
                    if (navData.isActive) return 'text-primary';
                    return '';
                  }}to="/docs/org-signup">
                <li>How To SignUp A New Organization</li>
                </NavLink>
            </ul>
        </section>
    );
}

export default SideBarDocs;