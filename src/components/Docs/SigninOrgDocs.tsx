/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
import React from 'react';
import DocsMain from './DocsMain';

function SigninOrgDocs() {
  return (
    <div>
      <DocsMain
        content={
          <div className="flex items-start box-border font-serif">
            <div className="w-full">
              <div className=" w-full sm:px-10 mb-10 text-gray-600  dark:text-slate-300 text-lg ml-0 pt-4">
                <h2 className="mb-4 mt-4 text-4xl font-[800] text-primary">
                  How to Login to an Organisation.
                </h2>
                <div className="mt-5 w-[100%] sm:w-full mb-4">
                  To sign in to our website, users need to choose an
                  organization they belong to. This selection is essential for
                  access control, data security, and providing a personalized
                  user experience. Users can belong to multiple organizations,
                  and they need to indicate which side of the website
                  (organization) they want to access during the login process.
                  This ensures that users can access specific data, features,
                  and workflows relevant to each organization they are
                  affiliated with. The process streamlines login, enhances
                  security, and tailors the user experience to the needs of
                  individual organizations.
                </div>
                <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
                  Steps on how to:
                </h2>
                <p className="text-gray-800 mb-4 dark:text-slate-300">
                  Welcome to our website! To access an organization's account,
                  follow these simple steps:
                </p>
                <ol className="list-decimal ml-6">
                  <li className="mb-2">
                    <b className=" text-black dark:text-white">
                      {' '}
                      Locate the Sign In Button:
                    </b>{' '}
                    Once you are on the homepage, look for the Sign In button in
                    the navigation bar.
                  </li>
                  <li className="mb-2">
                    <b className="text-black dark:text-white">
                      {' '}
                      Choose the Organization:
                    </b>{' '}
                    After clicking the Sign In button, you will be prompted to
                    either{' '}
                    <span className="text-primary">
                      select an organization from the available options or type
                      in the name of the organization you belong to
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    <b className="text-black dark:text-white">Verification:</b>{' '}
                    If the organization you selected or typed in is registered
                    on our platform, you will be directed to a user login page.
                  </li>
                  <li className="mb-2">
                    <b className="text-black dark:text-white">
                      Provide Valid Credentials:
                    </b>{' '}
                    On the user login page, you must
                    <span className="text-primary">
                      {' '}
                      enter correct credentials
                    </span>
                    . These credentials include your registered email and
                    password of an existing user within the organization.
                  </li>
                  <li className="mb-2">
                    <b className="text-black dark:text-white">
                      {' '}
                      Access Granted:
                    </b>{' '}
                    If your provided credentials match those of an existing user
                    in the organization, you will be granted access to proceed
                    further into the organization's account.
                  </li>
                  <li className="mb-2">
                    <b className="text-black dark:text-white">
                      {' '}
                      Access Denied:
                    </b>{' '}
                    If the organization you selected is not registered or the
                    credentials you provided are incorrect, access will be
                    denied, and you will not be able to proceed.
                  </li>
                </ol>
                <p className="text-gray-800 mt-4">
                  Please make sure you have the correct organization name and
                  valid credentials to access the organization's account
                  successfully. If you encounter any issues during the login
                  process, feel free to contact our support team for assistance.
                </p>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default SigninOrgDocs;
