import getWeatherData from "./weatherData";
import buildWeekCards from "./buildWeekCards";
import buildHourlyTable from "./buildHourlyTable";

function showLoading(container) {
  container.innerHTML = "";
  const loader = document.createElement("div");
  loader.classList.add("loader");
  container.appendChild(loader);
}

async function getCityWeather(city, isMetric = true) {
  const weatherData = await getWeatherData(city, isMetric);
  const container = document.querySelector(".container");
  container.innerHTML = "";

  if (!weatherData) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = "Please enter a valid city name";
    container.appendChild(errorMessage);
    return;
  }
  const weekDays = buildWeekCards(weatherData.days, isMetric);
  container.appendChild(weekDays);
  const hourlyTable = buildHourlyTable(weatherData.days[0].hours, isMetric);
  container.appendChild(hourlyTable);
  const allDayCard = document.querySelectorAll(".day-card");

  allDayCard.forEach((element) => {
    element.addEventListener("click", () => {
      const currentElement = document.querySelector(".current");
      currentElement.classList.remove("current");
      element.classList.add("current");
      showLoading(document.querySelector(".hourly-container"));
      setTimeout(() => {
        const newHourlyTable = buildHourlyTable(
          weatherData.days[element.id].hours,
          isMetric,
        );
        container.appendChild(newHourlyTable);
      }, 1000);
    });
  });
}

export default function startApp(isMetric) {
  const searchButton = document.querySelector(".search-button");
  const searchInput = document.getElementById("search");
  const metricButton = document.querySelector(".degree-changer");
  metricButton.addEventListener("click", () => {
    metricButton.textContent = `${metricButton.textContent === "℃" ? "℉" : "℃"}`;
    if (searchInput.value) {
      showLoading(document.querySelector(".container"));
      const currMetric = metricButton.textContent === "℃";
      getCityWeather(searchInput.value, currMetric);
    }
  });
  searchButton.addEventListener("click", () => {
    showLoading(document.querySelector(".container"));
    const currMetric = metricButton.textContent === "℃";
    getCityWeather(searchInput.value, currMetric);
  });
}
