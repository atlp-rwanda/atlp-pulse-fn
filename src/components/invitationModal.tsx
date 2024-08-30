import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import {
  IoIosCloseCircleOutline,
  IoIosArrowDown,
  IoIosArrowUp,
} from 'react-icons/io';
import { BsExclamationCircleFill } from 'react-icons/bs';
import { SEND_INVITATION } from '../Mutations/invitationMutation';
import ButtonLoading from './ButtonLoading';
import validateEmail from '../utils/emailValidation';

const roles: ('trainee' | 'admin' | 'ttl' | 'coordinator')[] = [
  'trainee',
  'admin',
  'ttl',
  'coordinator',
];
interface InviteFormProps {
  onClose: () => void;
}
function InviteForm({ onClose }: InviteFormProps) {
  const [email, setEmail] = useState<string>('');
  const [role, setRole] = useState<string>('Role');
  const [orgToken, setOrgToken] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');
  const [sendInvitation, { loading, error }] = useMutation(SEND_INVITATION);

  const organisationToken = localStorage.getItem('orgToken');

  useEffect(() => {
    if (organisationToken) {
      setOrgToken(organisationToken);
    }
  }, [organisationToken]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError('');

    try {
      await sendInvitation({
        variables: {
          invitees: [{ email, role }],
          orgToken,
        },
      });
      toast.success('Invitation sent successfully!');
      setEmail('');
      setRole('Role');
      setOrgToken('');
    } catch (e: any) {
      toast.error(`Error sending invitation: ${e.message}`);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRoleSelect = (selectedRole: string) => {
    setRole(selectedRole);
    setIsDropdownOpen(true);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  return (
    <div className="relative bg-white dark:bg-[#020917]  p-6 rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-xl font-bold mb-4">Invite users</h2>
      <button
        type="button"
        className="absolute top-2 right-2 text-black dark:text-white hover:text-gray-800"
        onClick={onClose}
        aria-label="Toggle role dropdown"
      >
        <IoIosCloseCircleOutline size={24} />
      </button>
      <form onSubmit={handleSubmit} className=" pb-12 sm:pb-16">
        <div className="text-black dark:text-white py-2 mb-2">
          Anyone you invite will be able to access the dashboard of this
          application.
        </div>
        <input
          value={email}
          type="emai"
          onChange={handleEmailChange}
          placeholder="Email address"
          className="border border-[#d9d0fb] px-1 py-1 text-sm dark:bg-[#020917] rounded-md w-full mb-1 focus:outline-none focus:border-[#d9d0fb]"
        />
        {emailError && (
          <p className="text-red-600 text-sm mb-4">{emailError}</p>
        )}
        <div>
          <label className="pb-2">
            <div className="flex justify-between pt-2 mb-8">
              <div className="relative w-[50%]">
                <button
                  type="button"
                  aria-label="Toggle role dropdown"
                  onClick={toggleDropdown}
                  className="border border-[#d9d0fb] dark:bg-[#020917] py-1 rounded-md w-full focus:outline-none focus:border-[#d9d0fb] bg-white px-2 text-sm flex justify-between items-center"
                >
                  {role}
                  {isDropdownOpen ? (
                    <IoIosArrowUp size={20} />
                  ) : (
                    <IoIosArrowDown size={20} />
                  )}
                </button>
                {isDropdownOpen && (
                  <div className="absolute mt-1 w-full bg-[#f3f0fe] dark:bg-[#04122F] border border-[#d9d0fb] dark:border-[#020917] rounded-md shadow-lg z-10">
                    {roles.map((roleOption) => (
                      <div
                        key={roleOption}
                        onClick={() => handleRoleSelect(roleOption)}
                        className="px-4 hover:bg-[#8667f2] cursor-pointer"
                      >
                        {roleOption.charAt(0).toUpperCase() +
                          roleOption.slice(1)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="ml-4 py-1 flex justify-center bg-[#7a5edc] text-white px-4 rounded"
                >
                  {loading ? (
                    <ButtonLoading style="rounded-md inline-block w-full sm:px-4 py-1 sm:py-0 opacity-50" />
                  ) : (
                    'Invite'
                  )}
                </button>
              </div>
            </div>
          </label>
        </div>
      </form>
      <div className="border-t-[1px] border-[#d9d0fb] m-0" />
      <div className="flex justify-between pt-2">
        <p className="flex justify-center items-center text-gray-400 gap-1">
          <BsExclamationCircleFill />
          Learn more
        </p>
        <button
          type="button"
          aria-label="Toggle role dropdown"
          disabled={loading}
          className="flex justify-center bg-[#7a5edc] text-white px-4 py-1 rounded"
        >
          Upload users file
        </button>
      </div>
    </div>
  );
}

export default InviteForm;
