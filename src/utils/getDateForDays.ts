import { toast } from "react-toastify";

export interface Weekdays {
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
}

const days: ('mon'| 'tue'| 'wed'| 'thu'| 'fri')[] = ['mon', 'tue', 'wed', 'thu', 'fri'];

export const getDateForDays = (inputDate: string) => {
  try{
    const date = new Date(Number(inputDate));
    let dayOfWeek = date.getDay();
    if (dayOfWeek === 0) {
      dayOfWeek = 7
    }
    const dateObj: Weekdays = { mon: '', tue: '', wed: '', thu: '', fri: '' };
    
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= 5; i++) {
      const daysToAdd = i - dayOfWeek; 
      const weekdayDate = new Date(date);
      weekdayDate.setDate(date.getDate() + daysToAdd);
      // eslint-disable-next-line prefer-destructuring
      dateObj[days[i - 1]] = weekdayDate.toISOString().split('T')[0];
    }

    return dateObj;
  } catch(error){
    toast.error('Something went wrong, Try again!')
    // eslint-disable-next-line consistent-return
    return {
          mon: '',
          tue: '',
          wed: '',
          thu: '',
          fri: '',
        };
  }

};
