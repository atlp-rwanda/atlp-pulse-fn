function timePassedCalculator(date: any) {
  const passedDate: any = new Date(date);
  const diffInMilliSeconds: number = Math.abs(passedDate - Date.now()) / 1000;

  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400);
  if (days === 1) return 'Yesterday';
  if (days > 10)
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(date));
  if (days > 0) return `${days} days ago.`;

  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  if (hours === 1) return 'An hour ago';
  if (hours > 0) return `${hours} hours ago.`;

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  if (minutes === 1) return 'A minute ago';
  if (minutes > 0) return `${minutes} minutes ago.`;

  // Return Seconds
  if (diffInMilliSeconds < 30) return 'A few seconds ago';
  return `${Math.floor(diffInMilliSeconds)} seconds ago.`;
}

export default timePassedCalculator;
