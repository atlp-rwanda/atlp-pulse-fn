/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
import React from 'react';
import DocsMain from './DocsMain';

function SignupOrgDocs() {
  return (
    <div>
      <DocsMain
        content={
          <div className="flex items-start font-serif">
            <div className="w-full">
              <div className=" w-full sm:px-10 mb-10 ml-0 text-lg text-gray-600 dark:text-slate-300 sm:w-full pt-4">
                <h2 className="mb-4 mt-4 text-4xl font-[800] text-primary">
                  How to Register an Organisation.
                </h2>
                <div className="mt-5 w-[100%] sm:w-full mb-4">
                  Signing up an organization on our website involves the process
                  where users can register and create an account for their
                  organization. During signup, users provide essential
                  information about their organization, such as the
                  organization's name, email address, and a brief description.
                  This information is used to create a dedicated account and
                  profile for the organization within our platform, granting
                  access to specific features and tools tailored to their
                  organizational needs. Once signed up, the organization becomes
                  an active member, enabling users to collaborate efficiently,
                  manage their organization's profile, and utilize our
                  platform's services effectively.
                </div>
                <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
                  Steps on how to:
                </h2>
                <ol className="list-decimal ml-6">
                  <li className="mb-2">
                    <span className="font-bold">
                      Locate the <span className="text-primary">"Register an Organisation"</span> Button on the
                      navigation Bar on the Homepage:
                    </span>
                  </li>
                  <li className="mb-2">
                    <span className="font-bold text-black dark:text-white">
                      Click the "Register an Organisation" Button:
                    </span>{' '}
                    Clicking the button will redirect you to an input registration
                    form.
                  </li>
                  <li className="mb-2">
                    <span className="font-bold text-black dark:text-white">
                      Fill in the Registration Form:
                    </span>{' '}
                    In this form, you will be required to provide the following
                    details:
                    <ul className=" list-disc ml-12">
                      <li>
                        <b className="text-primary">Organisation Name:</b> Enter the desired name for the
                        new organization.
                      </li>
                      <li>
                        <b className="text-primary">Email Address:</b> Provide a valid email address
                        associated with the organization.
                      </li>
                      <li>
                        <b className="text-primary">Company Description:</b> Enter a brief description of
                        the company or organization.
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    <span className="font-bold text-black dark:text-white">
                      Submit the Registration Form:
                    </span>{' '}
                    After filling in the required details, you can click the
                    <span className="text-primary"> "Register"</span> button to submit the form.
                  </li>
                  <li className="mb-2">
                    <span className="font-bold text-black dark:text-white">
                      Organization Link Generation:
                    </span>{' '}
                    Upon successful registration, a card on the right-hand side of
                    the registration form will display the newly generated
                    organization link, which you can use to access their
                    organization's profile and settings.
                  </li>
                  <li className="mb-2">
                    <span className="font-bold text-black dark:text-white">Confirmation Email:</span> An
                    email will be sent to the provided email address, containing
                    important information and instructions for the next steps.
                    This email will help the visitor proceed with the setup and
                    management of their organization on the website.
                  </li>
                  <li>
                    <span className="font-bold text-black dark:text-white">Completion and Access:</span> With
                    the organization link and confirmation email, you now has
                    access to their registered organization's dashboard. From
                    there, you can further customize their organization's profile,
                    invite team members, and begin utilizing the platform's
                    features.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default SignupOrgDocs;
