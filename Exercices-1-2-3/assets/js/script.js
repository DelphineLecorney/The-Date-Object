// Exercice 1
const timeZonesContainer = document.createElement("div");
timeZonesContainer.classList.add("timeZonesContainer");
document.body.appendChild(timeZonesContainer);

function displayTimes() {
  // Table storing time zones according to the IANA standard
  const timeZones = [
    { label: "Anchorage, Alaska", timeZone: "America/Anchorage" },
    { label: "Reykjavik, Iceland", timeZone: "Atlantic/Reykjavik" },
    { label: "Saint-Petersburg, Russia", timeZone: "Europe/Moscow" },
    { label: "Brussels, Belgium", timeZone: "Europe/Brussels" },
  ];
  timeZones.forEach((timeZone) => {
    // Gets the current date and time
    const now = new Date();
    // Conversion to string
    const timeNow = now.toLocaleString("en-US", {
      timeZone: timeZone.timeZone,
    });
    const timeElement = document.createElement("p");
    timeElement.textContent = `It's currently ${timeNow} in ${timeZone.label}.`;
    timeZonesContainer.appendChild(timeElement);
  });
}

displayTimes();

// Exercice 2
const daysSinceBirthContainer = document.createElement("div");
daysSinceBirthContainer.classList.add("daysSinceBirthContainer");
document.body.appendChild(daysSinceBirthContainer);

function displayDays(year, month, day) {
  // Calculation to find the number of milliseconds in a day
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const now = new Date();
  // month-1 because janvier = 0, février = 1 ...
  const dateCompare = new Date(year, month - 1, day);
  // getTime() returns the number of milliseconds since January 1, 1970
  const timeDiff = now.getTime() - dateCompare.getTime();
  const daysDiff = Math.floor(timeDiff / millisecondsPerDay);

  return daysDiff;
}

const result = displayDays(1970, 8, 13);
const daysBorn = document.createElement("p");
daysBorn.classList.add("color-text");
daysBorn.innerHTML = `Since my birth it has been: ${result}  days <br> but I don't feel old at all :)`;
daysSinceBirthContainer.appendChild(daysBorn);

// Exercice 3

const messageNbHours = document.createElement("div");
messageNbHours.classList.add("messageNbHours");
messageNbHours.textContent = `Enter a number of hours :`;
document.body.appendChild(messageNbHours);

const futureDateTimeContainer = document.createElement("div");
futureDateTimeContainer.classList.add("futureDateTimeContainer");
document.body.appendChild(futureDateTimeContainer);

function displayFutureDateTime(hours) {
  const now = new Date();
  const future = new Date(now.getTime() + hours * 60 * 60 * 1000);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  // toLocaleString() format the date in string
  const dateFormat = future.toLocaleString(undefined, options);

  // Removes old results to display only the latest one
  futureDateTimeContainer
    .querySelectorAll(".future-date")
    .forEach((span) => span.remove());

  const resultElement = document.createElement("span");
  resultElement.classList.add("future-date");
  resultElement.textContent = `The date and time in ${hours} hours will be : ${dateFormat}`;
  futureDateTimeContainer.appendChild(resultElement);
}
//  Create a number input
const input = document.createElement("input");
input.setAttribute("type", "number");
input.addEventListener("input", (event) => {
  const hours = parseInt(event.target.value);
  displayFutureDateTime(hours);
});

const inputResultContainer = document.createElement("div");
inputResultContainer.classList.add("result-container");
futureDateTimeContainer.appendChild(input);
futureDateTimeContainer.appendChild(inputResultContainer);

displayFutureDateTime(80000);

