export const convertTZ = (date: Date, tzString = 'Asia/Hong_Kong') => {
  return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
}