import { getDateForDays } from '../../src/utils/getDateForDays';

describe('getDateForDays', () => {
  it('should return correct weekdays for a valid date input', () => {
    const result = getDateForDays('1696118400000');
    expect(result).toEqual({
      fri: '2023-09-29',
      mon: '2023-09-25',
      thu: '2023-09-28',
      tue: '2023-09-26',
      wed: '2023-09-27',
    });
  });
  it('should return error  for a invalid date input', () => {
    const result = getDateForDays('16962048-00000');
    expect(result).toEqual({
      mon: '',
      tue: '',
      wed: '',
      thu: '',
      fri: '',
    });
  });
});
