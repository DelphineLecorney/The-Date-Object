const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const photoContainer = document.createElement("div");
photoContainer.classList.add("photoContainer");
container.appendChild(photoContainer);

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer");
document.body.appendChild(buttonContainer);

const timeZone = { label: "", timeZone: "Europe/Brussels" };

const dateContainer = document.createElement("div");
dateContainer.classList.add("dateContainer");
photoContainer.appendChild(dateContainer);

const dayOfWeekElement = document.createElement("p");
dayOfWeekElement.classList.add("dayOfWeekElement");
dateContainer.appendChild(dayOfWeekElement);

const dateElement = document.createElement("p");
dateElement.classList.add("dateElement");
dateContainer.appendChild(dateElement);

const monthElement = document.createElement("p");
monthElement.classList.add("monthElement");
dateContainer.appendChild(monthElement);

const yearElement = document.createElement("p");
yearElement.classList.add("yearElement");
dateContainer.appendChild(yearElement);

const timeElement = document.createElement("p");
timeElement.classList.add("timeElement");
photoContainer.appendChild(timeElement);

const toggleButton = document.createElement("button");
toggleButton.textContent = "12/24";
toggleButton.setAttribute("id", "toggleButton");
buttonContainer.appendChild(toggleButton);

function updateDateTime() {
  const now = new Date();

  const dateOptions = {
    year: "numeric",
    month: "long",
    // afficher les 2 chiffres du jour
    day: "2-digit",
    timeZone: timeZone.timeZone,
  };
  const dateNow = now.toLocaleDateString("en-US", dateOptions);
  const dayOfWeek = now.toLocaleString("en-US", { weekday: "short" });
  // IndexOf pour extraire les sous-chaînes
  const month = dateNow.substring(0, dateNow.indexOf(" "));
  const year = dateNow.substring(dateNow.lastIndexOf(" ") + 1);

  dayOfWeekElement.textContent = `${dayOfWeek}`;
  const day = now.toLocaleString("en-US", { day: "2-digit" });
  dateElement.textContent = `${day}`;
  monthElement.textContent = `${month}`;
  yearElement.textContent = `${year}`;

  const hourFormat = localStorage.getItem("hourFormat");

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: hourFormat === "12",
    timeZone: timeZone.timeZone,
  };

  const timeNow = now.toLocaleString("en-US", timeOptions);
  timeElement.textContent = ` ${timeNow} ${timeZone.label}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);

const toggleButtonElement = document.getElementById("toggleButton");
toggleButtonElement.addEventListener("click", () => {
  const hourFormat = localStorage.getItem("hourFormat");
  let newFormat;
  if (hourFormat === "12") {
    newFormat = "24";
  } else {
    newFormat = "12";
  }
  localStorage.setItem("hourFormat", newFormat);
  updateDateTime();
});

if (!localStorage.getItem("hourFormat")) {
  localStorage.setItem("hourFormat", "12");
}