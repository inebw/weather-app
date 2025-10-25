import buildDayCard from "./buildDayCard";

export default function buildWeekCards(weatherData, isMetric = true) {
  const weekCardContainer = document.querySelector(".week-card-container");
  if (weekCardContainer) weekCardContainer.remove();

  const leftButton = document.createElement("button");
  const rightButton = document.createElement("button");
  leftButton.classList.add("left-button");
  leftButton.textContent = "«";
  rightButton.classList.add("right-button");
  rightButton.textContent = "»";
  const outerContainer = document.createElement("div");
  outerContainer.classList.add("week-card-container");
  const container = document.createElement("div");
  container.classList.add("week-cards");

  outerContainer.appendChild(leftButton);
  outerContainer.appendChild(container);
  outerContainer.appendChild(rightButton);

  for (let i = 0; i < weatherData.length; i += 1) {
    const day = buildDayCard(weatherData[i], isMetric);
    day.id = i;
    if (i === 0) day.classList.add("current");
    container.append(day);
  }

  leftButton.addEventListener("click", () => {
    container.scrollLeft -= 200;
  });

  rightButton.addEventListener("click", () => {
    container.scrollLeft += 200;
  });

  return outerContainer;
}
