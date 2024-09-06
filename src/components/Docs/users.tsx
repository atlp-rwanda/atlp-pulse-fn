import React from 'react';
import DocsMain from './DocsMain';

function UsersDocs() {
  return (
    <div>
      <DocsMain
        content={
          <div className="box-border flex items-start font-serif">
            <div className="w-full">
              <div className="w-full pt-4 mb-10 ml-0 text-lg text-gray-600 sm:px-10 dark:text-slate-300">
                <h2 className="mb-4 mt-4 text-4xl font-[800] text-primary">
                  Getting started
                </h2>
                <div className="mt-5 w-[100%] sm:w-full mb-4">
                  Devpulse is a semi-open platform i.e. using it, requires a
                  certain level of approval from the owners/managers. If you
                  browse the homepage, you might wonder why there is no signup
                  button, this is because to sign up you need an invitation.
                  <h3 className="m-2 mb-4 text-2xl font-bold">
                    Terminology to be familiar with:
                  </h3>
                  <ul className="ml-12 list-disc ">
                    <li>
                      <b>Organizations</b>: each Devpulse user belongs to an
                      organization. The default organization is Andela. The
                      admin of a given organisation has the highest privilege;
                      they are the one in charge of managing the rest of the
                      users and different administrative tasks
                    </li>

                    <li>
                      <b>Programs</b>: each organization should have a program
                      that it is running.
                    </li>
                    <li>
                      <b>Managers:</b> each program should have managers with
                      different access levels. (coordinators, technical team
                      leads, managers)
                    </li>
                    <li>
                      <b>Trainees:</b> an ordinary user of the app will fall
                      under the role of a trainee. As a trainee, you belong to a
                      team, which in turn belongs to a cohort, which in turn
                      belongs to a program
                    </li>
                  </ul>
                  <h3 className="m-2 mb-4 text-2xl font-bold">
                    Signing up as a user
                  </h3>
                  <p>
                    To sign up,{' '}
                    <b>
                      <u>your org admin must send you an invite</u>
                    </b>
                    . The invitation email will contain the details of how to
                    sign up
                  </p>
                  <h3 className="m-2 mb-4 text-2xl font-bold">
                    Signing in as a user
                  </h3>
                  <p>
                    To sign in, go to the signin page, provide the correct name
                    of your organization, on the next screen enter username and
                    password.
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
export default UsersDocs;
