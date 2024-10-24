export const seperateTimeUnits = (milliseconds: number) => {
  const time = new Date(milliseconds);

  const months = time.getUTCMonth();
  const days = time.getUTCDate() - 1;
  const hours = time.getUTCHours();
  const minutes = time.getUTCMinutes();
  const seconds = time.getUTCSeconds();

  let formattedTime = '';

  if (months > 0) {
    formattedTime += String(months).padStart(2, '0') + ':';
  }

  if (days > 0 || formattedTime) {
    formattedTime += String(days).padStart(2, '0') + ':';
  }

  if (hours > 0 || formattedTime) {
    formattedTime += String(hours).padStart(2, '0') + ':';
  }

  formattedTime += String(minutes).padStart(2, '0') + ':';
  formattedTime += String(seconds).padStart(2, '0');

  return formattedTime;
};
