 /* eslint-disable */
 import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ENABLE_TWO_FACTOR_AUTH } from '../../Mutations/Twofactor2fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VerifyOneTimeCodeComponent from "./Verify2fa";
import { GET_PROFILE } from '../../Mutations/User'; // Import your GET_PROFILE query
import Loader1 from '../loaders/loader2/index'; // Import your loader component

const EnableTwoFactorAuthComponent: React.FC = () => {
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch user's profile to get the email
  const { loading, error, data } = useQuery(GET_PROFILE);

  const [enableTwoFactorAuth] = useMutation(ENABLE_TWO_FACTOR_AUTH);

  const handleEnableTwoFactorAuth = async () => {
    try {
      setIsLoading(true);

      // Check if the GET_PROFILE query has loaded
      if (loading) {
        toast.error('Profile data is loading. Please wait.');
        setIsLoading(false);
        return;
      }
      if (error) {
        toast.error('Error fetching profile data. Please try again.');
        setIsLoading(false);
        return;
      }

      // Extract the email from the profile data
      const userProfile = data.getProfile;
      const userProfileEmail = userProfile.user.email;

      // Send the OTP to the user's email
      const response = await enableTwoFactorAuth({
        variables: { email: userProfileEmail },
      });

      console.log(response.data.enableTwoFactorAuth);
      toast.success('OTP check email sent! Check your inbox.');
      setIsTwoFactorEnabled(true);
    } catch (error) {
      console.error(error);
      toast.error('Error sending OTP check email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='border-b border-gray-400 pt-2 pb-1'>
      <button onClick={handleEnableTwoFactorAuth} disabled={isLoading}>
        {isLoading ? <Loader1 /> : 'Enable 2FA'}
      </button>

      {isTwoFactorEnabled && <VerifyOneTimeCodeComponent />}
    </div>
  );
};

export default EnableTwoFactorAuthComponent;

