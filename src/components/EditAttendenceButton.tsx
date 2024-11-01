import React, { useEffect, useState } from 'react';
import { number } from 'zod';
import AttendanceSymbols from './AttendanceSymbols';
import { TraineeAttendanceDataInterface } from '../pages/TraineeAttendanceTracker';

interface EditAttendanceProps {
  setTraineeAttendanceData: React.Dispatch<React.SetStateAction<any[]>>;
  setUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  week: number;
  day: string;
  phase: string;
  traineeId: string;
}

function EditAttendanceButton({
  week,
  day,
  phase,
  traineeId,
  setTraineeAttendanceData,
  setUpdated,
}: EditAttendanceProps) {
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  useEffect(() => {
    setOpenEdit(false);
  }, [week, phase, day]);

  const handleUpdateAttendance = (score: number) => {
    
    setTraineeAttendanceData((prev) =>
      prev.map((attendanceData) => {
        if (attendanceData.week === week && attendanceData.phase.id === phase) {
          const updatedDay = attendanceData.days[
            day as keyof typeof attendanceData.days
          ].map((traineeData: TraineeAttendanceDataInterface) => {
            if (
              traineeData.trainee.id === traineeId &&
              traineeData.score !== score
            ) {
              setUpdated(true);
              return {
                trainee: traineeData.trainee,
                score,
              };
            }
            return traineeData;
          });

          return {
            ...attendanceData,
            days: { ...attendanceData.days, [day]: updatedDay },
          };
        }
        return attendanceData;
      }),
    );
    setOpenEdit(false);
  };

  return (
    <div className="inline-block cursor-pointer relative">
      {!openEdit && (
        <span
          onClick={() => setOpenEdit(true)}
          className="px-3 py-[3px] border dark:border-white border-black rounded-md font-medium text-[.85rem]"
          data-testid="edit-button"
        >
          Edit
        </span>
      )}
      {openEdit && (
        <div className="flex items-center gap-1 xmd:gap-2">
          <div onClick={() => handleUpdateAttendance(2)} data-testid="score-2">
            <AttendanceSymbols status={2} />
          </div>
          <div onClick={() => handleUpdateAttendance(1)} data-testid="score-1">
            <AttendanceSymbols status={1} />
          </div>
          <div onClick={() => handleUpdateAttendance(0)} data-testid="score-0">
            <AttendanceSymbols status={0} />
          </div>
        </div>
      )}
    </div>
  );
}

export default EditAttendanceButton;
