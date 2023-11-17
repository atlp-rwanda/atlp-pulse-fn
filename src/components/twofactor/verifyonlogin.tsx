  /* eslint-disable */
 // Verify2FAForm.tsx
import React, { useState } from 'react';

interface Props {
  onSubmit: (code: string) => void;
}

const Verify2FAForm: React.FC<Props> = ({ onSubmit }) => {
  const [code, setCode] = useState('');

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(code);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="code"
        value={code}
        onChange={handleCodeChange}
        placeholder="Enter 2FA code"
        className="border border-gray-300 p-2 w-full rounded text-black"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
        Verify
      </button>
    </form>
  );
};

export default Verify2FAForm;

