import getWeatherData from "./weatherData";
import buildWeekCards from "./buildWeekCards";
import buildHourlyTable from "./buildHourlyTable";

async function getCityWeather(city) {
  const weatherData = await getWeatherData(city);
  const container = document.querySelector(".container");
  container.innerHTML = "";
  
  if (!weatherData) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = "Please enter a valid city name";
    container.appendChild(errorMessage);
    return
  }
  const weekDays = buildWeekCards(weatherData.days);
  container.appendChild(weekDays);
  const hourlyTable = buildHourlyTable(weatherData.days[0].hours);
  container.appendChild(hourlyTable);
  const allDayCard = document.querySelectorAll(".day-card");

  allDayCard.forEach((element) => {
    element.addEventListener("click", () => {
      const newHourlyTable = buildHourlyTable(
        weatherData.days[element.id].hours,
      );
      container.appendChild(newHourlyTable);
    });
  });
}

export default function startApp() {
  const searchButton = document.querySelector(".search-button");
  const searchInput = document.getElementById("search");

  searchButton.addEventListener("click", () => {
    // add Loading Code Here
    getCityWeather(searchInput.value);
  });
}
