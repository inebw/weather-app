import { format, isToday, isTomorrow } from "date-fns";
import weatherPNG from "./icons/cloudy.png";

export default function buildDayCard(day, isMetric = true) {
  const container = document.createElement("div");
  container.classList.add("day-card");
  const myDay = document.createElement("div");
  myDay.classList.add("my-day");
  if (isToday(new Date(day.datetime))) myDay.textContent = "Today";
  else if (isTomorrow(new Date(day.datetime))) myDay.textContent = "Tomorrow";
  else myDay.textContent = format(new Date(day.datetime), "cccc");
  container.appendChild(myDay);

  const myDate = document.createElement("div");
  myDate.classList.add("my-date");
  myDate.textContent = format(new Date(day.datetime), "PP");
  container.appendChild(myDate);

  const iconDIV = document.createElement("div");
  iconDIV.classList.add("icon-div");

  const iconIMG = document.createElement("img");
  iconIMG.classList.add("icon-img");
  iconDIV.appendChild(iconIMG);
  iconIMG.src = weatherPNG;
  container.appendChild(iconDIV);

  const myTemp = document.createElement("div");
  myTemp.classList.add("my-temp");
  myTemp.textContent = `${day.temp} ${isMetric ? "℃" : "℉"}`;
  container.appendChild(myTemp);

  const myHumidity = document.createElement("div");
  myHumidity.classList.add("my-humidity");
  myHumidity.textContent = `Humidity: ${day.humidity}%`;
  container.appendChild(myHumidity);

  const myMinTemp = document.createElement("div");
  myMinTemp.classList.add("my-min-temp");
  myMinTemp.textContent = `Min: ${day.tempmin} ${isMetric ? "℃" : "℉"}`;
  container.appendChild(myMinTemp);

  const myWind = document.createElement("div");
  myWind.classList.add("my-wind");
  myWind.textContent = `Windspeed: ${day.windspeed}`;
  container.appendChild(myWind);

  const myMaxTemp = document.createElement("div");
  myMaxTemp.classList.add("my-max-temp");
  myMaxTemp.textContent = `Max: ${day.tempmax} ${isMetric ? "℃" : "℉"}`;
  container.appendChild(myMaxTemp);

  return container;
}
