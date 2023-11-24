 /* eslint-disable */
import React, { useState } from 'react';

const TwoFactorAuthentication = ({ t }:any) => {
  const [twoFactorCode, setTwoFactorCodeState] = useState(''); // Renamed the variable

  return (
    <div className="md:w-full border border-gray rounded-md bg-gray-100 p-2 my-4 flex items-center mb-2">
      <input
        data-testid="two-factor-code"
        type="text"
        value={twoFactorCode}
        onChange={(e) => setTwoFactorCodeState(e.target.value)} // Updated variable name
        placeholder={t('2FA Code')}
        className="bg-gray-100 outline-none text-sm flex-1"
      />
    </div>
  );
};

export default TwoFactorAuthentication;
