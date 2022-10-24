import { format } from 'date-fns';
/* istanbul ignore next */
export default function formatDate(date: any) {
  if (!date) {
    return '--no date--';
  }
  return format(new Date(date.toString()), 'do MMM yyyy');
}
