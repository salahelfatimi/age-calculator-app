export function MonthJour(Month, Year) {
  return new Date(Year, Month, 0).getDate();
}

export function Age(Year, Month, Jour) {
  if (!Year || !Month || !Jour) {
    return {
      year: "",
      month: "",
      day: "",
    };
  }

  const date = new Date();
  const FullYear = date.getFullYear();
  const FullMonth = date.getMonth() + 1;
  const FullDay = date.getDate();

  // Calculate the age in years, months, and days
  let ageYears = FullYear - Year;
  let ageMonths = FullMonth - Month;
  let ageDays = FullDay - Jour;

  // Adjust the age if birthdate hasn't occurred yet this year
  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }

  // Adjust the age if the day is negative
  if (ageDays < 0) {
    const daysInLastMonth = MonthJour(FullMonth - 1, FullYear);
    ageDays += daysInLastMonth;
    ageMonths--;
  }

  if (ageYears === 0 && ageMonths === 0 && ageDays === 0) {
    return {
      year: "",
      month: "",
      day: "",
    };
  } else {
    return {
      year: ageYears,
      month: ageMonths,
      day: ageDays,
    };
  }
}

export function MsgErrDay(Day, Month) {
  const date = new Date();
  const FullYear = date.getFullYear();
  const DayMax = MonthJour(Month, FullYear);
  if (Day > DayMax) {
    return "Must be a valid date";
  } else if (Day != "" && Day < DayMax) {
    return true;
  } else {
    return "This field is required";
  }
}
export function MsgErrMonth(Month) {
  if (Month > 12) {
    return "Must be a valid month";
  } else if (Month != "" && Month < 12) {
    return true;
  } else {
    return "This field is required";
  }
}

export function MsgErrYear(Year) {
  const date = new Date();
  const FullYear = date.getFullYear();
  if (Year > FullYear) {
    return "Must be in the past";
  } else if (Year != "" && Year < FullYear) {
    return true;
  } else {
    return "This field is required";
  }
}
