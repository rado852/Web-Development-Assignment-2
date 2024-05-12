import { setDailysOfWeekHtml, setMainStatsHtml } from "./dayBoxTemplate.js";  // Functions to update the UI with new weather data
import { getTimeImage } from "./utils.js"; // Utility function for getting time variant images

// Initialize tracking variables for time and day
let currentTime = 0;
let lastTime = new Date().getHours();
let currentDay = 0;

//Fetches hourly and daily weather data for Berlin.
//Fetches weather data from a JSON file on the server
const getBerlinHourlyDataTime = async () => {
  const res = await fetch("/data/complete_data.json");
  const { berlin_daily, berlin_hourly } = await res.json();
  return {
    berlin_daily,
    berlin_hourly,
  };
};

//Checks the current time and adjusts the day index if necessary.
const timeChecker = () => {
  const date = new Date();
  currentTime = date.getHours();

  if (lastTime !== currentTime) {
    lastTime = currentTime;
  }
   // Increments `currentDay` if the time rolls over to the next day
  if (currentTime === 0 && lastTime === 23) {
    currentDay++;
  }
};

const updateWeather = async () => {
  const currentWeather = await getBerlinHourlyDataTime();
  const cityHourlyData = currentWeather.berlin_hourly;
  const cityDailyData = currentWeather.berlin_daily;
// Updates the main stats and daily forecasts in the HTML
  setMainStatsHtml({ cityHourlyData, cityDailyData, lastTime, currentDay });

  setDailysOfWeekHtml({ cityDailyData });
};
// Sets an interval to check the time and update the weather every second (1000 ms)
const interval = setInterval(() => {
  timeChecker();
  updateWeather();
}, 1000);
// Initial weather update call to populate the UI on page load
updateWeather();

