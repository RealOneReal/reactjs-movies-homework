export const truncateString = (str, number) => {
  if (str.length < number) return str;
  return str.slice(0, number - 4) + " ...";
};
