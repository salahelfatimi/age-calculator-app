const date = new Date();
  const FullYear = date.getFullYear();
  const FullMonth = date.getMonth() + 1;
  const FullDay = date.getDate();

export function MonthJour(Month, Year) {
  return new Date(Year, Month, 0).getDate();
}

export function Age(Year, Month, Jour) {
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

 
    return {
      year: ageYears,
      month: ageMonths,
      day: ageDays,
    };
  
}

export function MsgErrDay(Day, Month,Year) {
  const DayMax = MonthJour(Month, FullYear);
  if (Day > DayMax ||( Day>FullDay && Year==FullYear && Month===FullMonth)) {
    return {Msg:"Must be a valid Day",Coun:false};
  } else if (Day != "" && Day <= DayMax) {
    return  {Coun:true};
  } else {
    return {Msg:"This field is required",Coun:false};
  }
}
export function MsgErrMonth(Month,Year) {
  if (Month > 12 || (Month >FullMonth && Year==FullYear)) {
    return {Msg:"Must be a valid Month",Coun:false};
  } else if (Month != "" && Month <= 12) {
    return {Coun:true};
  } else {
    return {Msg:"This field is required",Coun:false};
  }
}

export function MsgErrYear(Year) {
  if (Year > FullYear ) {
    return {Msg:"Must be in the Past",Coun:false};
  } else if (Year != "" && Year <= FullYear) {
    return  {Coun:true};
  } else {
    return {Msg:"This field is required",Coun:false};
  }
}
