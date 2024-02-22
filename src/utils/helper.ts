interface Options {
    year: "numeric" | "2-digit" | undefined;
    month: "numeric" | "2-digit" | "narrow" | "short" | "long" | undefined;
    day: "numeric" | "2-digit" | undefined;
  }
  
export  const dateFormat = (date: string) => {
    const dateObject = new Date(date);
    const options: Options = { year: "numeric", month: "long", day: "numeric" };
    const humanReadableDate = dateObject.toLocaleString("en-US", options);
    return humanReadableDate;
  };
  