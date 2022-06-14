// Create a functiona that will remove all the beginning spaces from a multiline string
export const trimSpacesAndRemoveMultiline = (multiline: string): string => {
  const lines = multiline.split("\n");
  const trimmedLines = lines.map((line) => line.trim());
  return trimmedLines.join("");
};

// create a function that will take as first parameter a ISO8601 serialized date string and will return a date object
export const parseISO8601Date = (dateString: string): Date => {
  // ✅ Create Date object (setting date to UTC)
  const date1 = new Date(dateString);
  console.log(date1); // 👉️ Thu Jul 21 2022 12:35:31 GMT+0300

  console.log(date1.getUTCHours()); // 👉️ 9

  // ✅ Create Date object (setting date to local time)
  const date2 = new Date(dateString.slice(0, -1));
  console.log(date2); // 👉️ Thu Jul 21 2022 09:35:31 GMT+0300

  console.log(date2.getUTCHours());

  return new Date(dateString);
};
