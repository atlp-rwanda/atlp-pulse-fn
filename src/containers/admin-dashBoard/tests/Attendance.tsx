import React, { useState } from 'react';

import { gql } from '@apollo/client';



export const attendanceData = gql `
query GetTraineeAttendance {
    getTraineeAttendance {
      id
      week
    
      trainees {
        traineeId
        status {
          value
          days
        }
      }
    
    }
  }
`