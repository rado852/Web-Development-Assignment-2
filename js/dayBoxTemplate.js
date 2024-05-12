// Import constants and utility functions
import { daysOfWeek } from "../constants/dateConstants.js";
import { getCurrentDay, getNextDaysByDay, getTimeImage } from "./utils.js";
// Cache DOM elements for the main weather stats display
const currentTemperatureEl = document.getElementById("currentTemperature");
const currentWindSpeedEl = document.getElementById("currentWindSpeed");
const maxTemperatureEl = document.getElementById("maxTemperature");
const maxWindEl = document.getElementById("maxWind");
const weatherImageEl = document.getElementById("weatherImage");
// Function to generate an HTML template for each day box in the weekly forecast
export const DayBoxHtmlTemplate = ({
  day,
  minTemperature,
  maxTemperature,
  weatherImage,
}) => {
   // Returns an HTML string representing a weather day box
  return ` <article class="column is-flex  ml-3 is-flex-direction-column has-text-light is-align-items-center has-background-primary-00 is-bordered ">
        <h4>${day}</h4>
        <figure class="image is-32x32">
            <img src="${weatherImage}" alt="weatherImageImage">
        </figure>
        <div class="is-flex columns is-center is-justify-content-space-between">
            <span class ="column">${minTemperature}°C</span>
            <span class= "column">${maxTemperature}°C</span>
        </div>
        

    </article>
    `;
};
// Function to set the main weather stats on the page (current and max values)
export const setMainStatsHtml = ({
  cityHourlyData,
  cityDailyData,
  lastTime,
  currentDay,
}) => {
  // Set the current temperature and wind speed using hourly data
  currentTemperatureEl.innerText = `${cityHourlyData.hourly.temperature_2m[lastTime]}${cityHourlyData.hourly_units.temperature_2m}`;
  currentWindSpeedEl.innerText = `${cityHourlyData.hourly.wind_speed_10m[lastTime]}${cityHourlyData.hourly_units.wind_speed_10m}`;
  // Set the maximum temperature and wind speed for today using daily data
  maxTemperatureEl.innerText = `${cityDailyData.daily.temperature_2m_max[currentDay]}${cityDailyData.daily_units.temperature_2m_max}`;
  maxWindEl.innerText = `${cityDailyData.daily.wind_speed_10m_max[currentDay]}${cityDailyData.daily_units.wind_speed_10m_max}`;
   // Set the current weather image based on the current hourly weather code
  weatherImageEl.src = getTimeImage(cityHourlyData.hourly.weather_code[lastTime]);
};
// Function to set the daily weather forecast boxes on the page
export const setDailysOfWeekHtml = ({ cityDailyData }) => {
  const nextDaysByDays = getNextDaysByDay(getCurrentDay());
   // Generate HTML for each day box using map
  const daysOfWeekHtml = nextDaysByDays.map((day, index) => {
    const minTemperature = cityDailyData.daily.temperature_2m_min[index];
    const maxTemperature = cityDailyData.daily.temperature_2m_max[index];
    const weatherCode = cityDailyData.daily.weather_code[index];
 // Generate the HTML for the individual day box
    return DayBoxHtmlTemplate({
      day: index === 0 ? "Today" : day,
      minTemperature,
      maxTemperature,
      weatherImage: getTimeImage(weatherCode), // Map weather code to image
    });
  });
   // Update the weekly forecast container with the generated HTML
  document.getElementById("daysOfWeekContainer").innerHTML =
    daysOfWeekHtml.join("");
};
