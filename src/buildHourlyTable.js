import { format } from "date-fns";

export default function buildHourlyTable(hours, isMetric=true) {
  console.log(hours)
  const container = document.createElement("div");
  container.classList.add("hourly-container");

  const tableHeader = document.createElement("div");
  tableHeader.classList.add("table-header");
  container.appendChild(tableHeader);

  const hour = document.createElement("div");
  hour.classList.add("hour");
  hour.textContent = "Time";
  tableHeader.appendChild(hour);

  const temp = document.createElement("div");
  temp.classList.add("temp");
  temp.textContent = "Temp";
  tableHeader.appendChild(temp);

  const feelsLike = document.createElement("div");
  feelsLike.classList.add("feels-like");
  feelsLike.textContent = "Feels like";
  tableHeader.appendChild(feelsLike);

  const humidity = document.createElement("div");
  humidity.classList.add("humidity");
  humidity.textContent = "Humidity";
  tableHeader.appendChild(humidity);

  const windspeed = document.createElement("div");
  windspeed.classList.add("windspeed");
  windspeed.textContent = "Windspeed";
  tableHeader.appendChild(windspeed);

  for (let i = 0; i < hours.length; i += 1) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");
    container.appendChild(rowContainer);

    const rowHour = document.createElement("div");
    rowHour.classList.add("hour");
    rowHour.textContent = format(new Date(hours[i].datetimeEpoch), "p")
    rowContainer.appendChild(rowHour);

    const rowTemp = document.createElement("div");
    rowTemp.classList.add("temp");
    rowTemp.textContent = `${hours[i].temp} ${isMetric ? "℃" : "℉"}`;
    rowContainer.appendChild(rowTemp);

    const rowFeelsLike = document.createElement("div");
    rowFeelsLike.classList.add("feels-like");
    rowFeelsLike.textContent = `${hours[i].feelslike} ${isMetric ? "℃" : "℉"}`;
    rowContainer.appendChild(rowFeelsLike);

    const rowHumidity = document.createElement("div");
    rowHumidity.classList.add("humidity");
    rowHumidity.textContent = `${hours[i].humidity}%`
    rowContainer.appendChild(rowHumidity);

    const rowWindspeed = document.createElement("div");
    rowWindspeed.classList.add("windspeed");
    rowWindspeed.textContent = `${hours[i].windspeed}`
    rowContainer.appendChild(rowWindspeed);
  }

  return container;
}
