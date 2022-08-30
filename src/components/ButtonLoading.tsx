/* eslint-disable */
import React from 'react';

interface Props {
  style?: any;
}
const ButtonLoading: React.FC<Props> = ({ style }) => (
  <div className={`flex btn w-fit py-1 px-3 bg-purple-500 font-bold ${style}`}>
    <div className="loader mr-1" />
    <button className="ml-1 text-white font-bold" disabled>
      Processing...
    </button>
  </div>
);

export default ButtonLoading;
