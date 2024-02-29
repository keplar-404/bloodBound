interface Options {
  year: "numeric" | "2-digit" | undefined;
  month: "numeric" | "2-digit" | "narrow" | "short" | "long" | undefined;
  day: "numeric" | "2-digit" | undefined;
}

// From this "2024-02-29T00:00:00.000Z" to this "February 29, 2024" func
export const dateFormat = (date: string): string => {
  const dateObject = new Date(date);
  const options: Options = { year: "numeric", month: "long", day: "numeric" };
  const humanReadableDate = dateObject.toLocaleString("en-US", options);
  return humanReadableDate;
};

// From this "2024-02-29T00:00:00.000Z" to this "2024-02-29" func

export const dateFormat2 = (originalDateString: Date): string => {
  // Parse the original date string
  const originalDate = new Date(originalDateString);

  // Extract the year, month, and day
  const year = originalDate.getFullYear();
  const month = String(originalDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
  const day = String(originalDate.getDate()).padStart(2, "0");

  // Create the new date string
  const newDateString = `${year}-${month}-${day}`;

  return newDateString;
};
