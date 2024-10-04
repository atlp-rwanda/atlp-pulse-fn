import React, { useEffect, useState } from 'react';
import AttendanceSymbols from './AttendanceSymbols';
import { TraineeAttendanceDataInterface } from '../pages/TraineeAttendanceTracker';

interface EditAttendanceProps {
  setTraineeAttendanceData: React.Dispatch<React.SetStateAction<any[]>>;
  setUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  week: string;
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

  const handleUpdateAttendance = (score: string) => {
    setTraineeAttendanceData((prev) =>
      prev.map((attendanceData) => {
        if (attendanceData.week === week && attendanceData.phase === phase) {
          const updatedDay = attendanceData.days[
            day as keyof typeof attendanceData.days
          ].map((traineeData: TraineeAttendanceDataInterface) => {
            if (
              traineeData.trainee.id === traineeId &&
              traineeData.status.toString() !== score.toString()
            ) {
              setUpdated(true);
              return {
                trainee: traineeData.trainee,
                status: score,
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
          className="px-2 py-[2px] border dark:border-white border-black rounded-md text-[.85rem]"
          data-testid="edit-button"
        >
          Edit
        </span>
      )}
      {openEdit && (
        <div className="flex items-center gap-1 xmd:gap-2">
          <div
            onClick={() => handleUpdateAttendance('2')}
            data-testid="score-2"
          >
            <AttendanceSymbols status={2} />
          </div>
          <div
            onClick={() => handleUpdateAttendance('1')}
            data-testid="score-1"
          >
            <AttendanceSymbols status={1} />
          </div>
          <div
            onClick={() => handleUpdateAttendance('0')}
            data-testid="score-0"
          >
            <AttendanceSymbols status={0} />
          </div>
        </div>
      )}
    </div>
  );
}

export default EditAttendanceButton;
