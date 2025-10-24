import "./styles.css";
import { getUnixTime, formatDistance, subDays, format } from "date-fns";
import getWeatherData from "./weatherData";
import buildDayCard from "./buildDayCard";
import buildWeekCards from "./buildWeekCards";
import buildHourlyTable from "./buildHourlyTable";

const today = new Date();
console.log(today);
console.log(
  formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: false }),
);
console.log(getUnixTime(new Date()));

const weatherData = getWeatherData("lucknow");
weatherData.then((result) => {
  const container = document.querySelector(".container");
  const weekDays = buildWeekCards(result.days);
  container.appendChild(weekDays);
  const hourlyTable = buildHourlyTable(result.days[0].hours);
  container.appendChild(hourlyTable);
});

console.log(format(new Date(), "PP p cccc"));
