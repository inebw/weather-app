import getWeatherData from "./weatherData";
import buildWeekCards from "./buildWeekCards";
import buildHourlyTable from "./buildHourlyTable";

export default async function startApp() {
  const weatherData = await getWeatherData("lucknow");
  const container = document.querySelector(".container");
  const weekDays = buildWeekCards(weatherData.days);
  container.appendChild(weekDays);
  const hourlyTable = buildHourlyTable(weatherData.days[0].hours);
  container.appendChild(hourlyTable);
  const allDayCard = document.querySelectorAll(".day-card");

  allDayCard.forEach((element) => {
    element.addEventListener("click", () => {
      const newHourlyTable = buildHourlyTable(weatherData.days[element.id].hours);
      container.appendChild(newHourlyTable);
    });
  });
}
