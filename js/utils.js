import { daysOfWeek } from "../constants/dateConstants.js"; // Imports a list of weekdays
import { TIME_VARIANTS } from "../constants/timeConstants.js"; // Imports a mapping of time variants to images

export const getCurrentDay = () => {
  return daysOfWeek[new Date().getDay()]; // Gets the current days index and retrieves the corresponding day name from `daysOfWeek`.
};

export const getNextDaysByDay = (currentDay) => {
  const currentDayIndex = daysOfWeek.indexOf(currentDay);  // Finds the index of the specified `currentDay` in the `daysOfWeek` array.

  if (currentDayIndex === -1) {
    return []; 
  }  // If the day is not found, returns an empty array.

  const result = [];  // Initializes an empty array to hold the ordered days.

  let index = currentDayIndex;

  // Loops through the days of the week, starting from the current day,
  // and cycles back to the start once reaching the end of the week.
  while (result.length !== daysOfWeek.length) {
    result.push(daysOfWeek[index]);
    index = index === daysOfWeek.length - 1 ? 0 : index + 1;  // Wraps around when the end of the week is reached.
  }

  return result; // Returns the ordered days of the week.
};
export const getTimeImage = (key) => TIME_VARIANTS?.[key];
//Retrieves the image associated with a particular time variant 