/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React from 'react';

function Dropout() {
  return (
    <div>
      <div className="pt-2 pb-6">
        <hr className="bg-[#868686] h-[2px]" />
      </div>
      <div className="pb-6">
        <h1 className="text-[#5F49AC] font-semibold">Drop Out</h1>
        <div className="pt-6 flex gap-4">
          Date :<div>{/* Drop out date */}</div>
        </div>
        <div className="pt-6 flex gap-4">
          Reason:
          <div>{/* Drop out reason */}</div>
        </div>
      </div>
    </div>
  );
}

export default Dropout;


// function Dropout() {
//   const [traineeId, setTraineeId] = useState('');
//   const [message, setMessage] = useState('');
//   import { ADD_MEMBER_TO_COHORT_MUTATION } from '../Mutations/manageStudentMutations';



//   const handleDropTrainee = async () => {
//     const droppedDate = new Date().toLocaleDateString();
//     const { data } = await ADD_MEMBER_TO_COHORT_MUTATION({
//       variables: { id: traineeId, dropped: droppedDate },
//     });

//     if (data.ADD_MEMBER_TO_COHORT_MUTATION) {
//       setMessage(`Trainee ${data.dropTrainee.name} dropped on ${droppedDate}`);
//     }
//   };

//   return (
//     <div>
//       <div className="pt-2 pb-6">
//         <hr className="bg-[#868686] h-[2px]" />
//       </div>
//       <div className="pb-6">
//         <h1 className="text-[#5F49AC] font-semibold">Drop Out</h1>
//         <div className="pt-6 flex gap-4">
//           Date: <div>{/* Display the drop out date here */}</div>
//         </div>
//         <div className="pt-6 flex gap-4">
//           Reason: <div>{/* Display the drop out reason here */}</div>
//         </div>
//         <div className="pt-6 flex gap-4">
//           Trainee ID:
//           <input
//             type="text"
//             value={traineeId}
//             onChange={(e) => setTraineeId(e.target.value)}
//           />
//         </div>
//         <button onClick={handleDropTrainee}>Drop Trainee</button>
//         <p>{message}</p>
//       </div>
//     </div>
//   );
// }

// export default Dropout;
