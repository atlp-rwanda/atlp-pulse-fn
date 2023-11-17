 /* eslint-disable */
import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DISABLE_TWO_FACTOR_AUTH } from '../../Mutations/Twofactor2fa';
import Loader1 from '../../components/loaders/loader2/index'; // Import your loader component
import { GET_PROFILE } from '../../Mutations/User'; // Import your GET_PROFILE query

const DisableTwoFactorAuthComponent: React.FC = () => {
  const [isTwoFactorDisabled, setIsTwoFactorDisabled] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage loading state

  // Fetch user's profile to get the email
  const { error, data } = useQuery(GET_PROFILE);

  const [disableTwoFactorAuth] = useMutation(DISABLE_TWO_FACTOR_AUTH);

  const handleDisableTwoFactorAuth = async () => {
    try {
      // Check if the GET_PROFILE query has loaded
      if (loading) {
        toast.error('Profile data is loading. Please wait.');
        return;
      }
      if (error) {
        toast.error('Error fetching profile data. Please try again.');
        return;
      }

      setLoading(true); // Set loading state to true

      // Extract the email from the profile data
      const userProfile = data.getProfile;
      const userProfileEmail = userProfile.user.email;

      // Disable two-factor authentication using the user's email
      const response = await disableTwoFactorAuth({
        variables: { email: userProfileEmail },
      });

      console.log(response.data.disableTwoFactorAuth);
      toast.success('2FA Disabled'); // Display success toast
      setIsTwoFactorDisabled(true);
    } catch (error) {
      console.error(error);
      toast.error('Error disabling 2FA'); // Display error toast
    } finally {
      setLoading(false); // Set loading state back to false when done
    }
  };

  return (
    <div className='border-b border-gray-400 pt-2 pb-1 text-black-400'>
      <button onClick={handleDisableTwoFactorAuth} disabled={loading}>
        {loading ? <Loader1 /> : 'Disable 2FA'}
      </button>
      <ToastContainer />
    </div>
  );
};

export default DisableTwoFactorAuthComponent;
