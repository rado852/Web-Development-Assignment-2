# Whether Weather

This project displays current and 7 days forecas data for Berlin using a dynamic user interface.

https://whether-weather-rado.netlify.app/

## Table of Contents

1. Overview
2. Directory Structure
3. Key Constants
4. HTML Structure
5. Functions Overview
6. Styling
7. Bulma Integration
8. How to Use

## Overview

The weather application retrieves and displays weather information in a user-friendly format. It uses a combination of hourly and daily data to show the current temperature, wind speed, and forecasted conditions.

## Directory Structure

The project has the following essential files and folders:
- `/assets`: Contains weather condition images.
- `/constants`: Holds JavaScript files with day and time constants.
- `/data`: Stores weather data in JSON format.
- `/js`: JavaScript files implementing the application logic.

## Key Constants

The application uses several constants to represent different weather conditions and their corresponding image paths. Days of the week are also mapped to help manage the daily forecast information.

## HTML Structure

The HTML structure comprises the following main sections:
- Header with current city and today's date.
- Weather statistics (current temperature, wind speed).
- Forecast images and values.
- Daily forecast for the week.

## Functions Overview

**Utility Functions**:
- **getCurrentDay**: Retrieves the current day of the week.
- **getNextDaysByDay**: Lists upcoming days starting from the current day.
- **getTimeImage**: Maps a weather condition key to an image path.

**Main Script**:
- **getBerlinHourlyDataTime**: Retrieves hourly and daily weather data for Berlin.
- **timeChecker**: Monitors hourly changes and adjusts day/hour values.
- **updateWeather**: Refreshes and displays weather data periodically.

**Template Generation**:
- **DayBoxHtmlTemplate**: Generates HTML templates for the daily forecast.
- **setMainStatsHtml**: Updates the main weather statistics section.
- **setDailysOfWeekHtml**: Populates the daily weather forecast boxes.

## Styling

The CSS employs a custom font ("Poetsen One") and sets specific sizes for the weather images. The "weather-image" class controls the width and height of the forecast images.

## Bulma Integration

The Bulma CSS framework provides responsive design classes. Key Bulma classes used include:
- `hero`: For the main weather data container.
- `columns`: For grid layout.
- `container`: To contain and center content.
- `has-background-primary-80`: For background styling.

## How to Use

1. **Clone Repository**: Download the project files via Git or directly.
2. **Open `index.html`**: Load the application in your preferred web browser.
