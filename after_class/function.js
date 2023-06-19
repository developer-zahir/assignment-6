function donate_day(last_donate_date) {
  let old_date = new Date(last_donate_date).getTime();
  let new_date = Date.now();
  return diffInDays = Math.floor((new_date - old_date) / (1000 * 60 * 60 * 24));
}
