import { format } from 'date-fns';

export default function formatDate(date: any) {
  if (!date) {
    return '--no date--';
  }
  return format(new Date(date.toString()), 'do MMM yyyy');
}
