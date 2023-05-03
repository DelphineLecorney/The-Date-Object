// Exercice 1

const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

function displayTimes() {
  // Tableau stockant les fuseaux horaires selon la norme IANA
  const timeZones = [
    { label: "Anchorage, Alaska", timeZone: "America/Anchorage" },
    { label: "Reykjavik, Iceland", timeZone: "Atlantic/Reykjavik" },
    { label: "Saint-Petersburg, Russia", timeZone: "Europe/Moscow" },
    { label: "Brussels, Belgium", timeZone: "Europe/Brussels" },
  ];
  timeZones.forEach((timeZone) => {
    // Obtient la date et l'heure actuelle
    const now = new Date();
    // Conversion en string
    const timeNow = now.toLocaleString("en-US", {
      timeZone: timeZone.timeZone,
    });
    const timeElement = document.createElement("p");
    timeElement.textContent = `It is currently ${timeNow} in ${timeZone.label}.`;
    container.appendChild(timeElement);
  });
}

displayTimes();

/*----------------------------------------------------------------*/

// Exercice 2

function displayDays(year, month, day) {
  // Calcul pour trouver le nombre de millisecondes en un jour
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const now = new Date();
  // month-1 car janvier = 0, février = 1 ...
  const dateCompare = new Date(year, month - 1, day);
  // getTime() renvoie le nombre de millisecondes depuis le 1er janvier 1970
  const timeDiff = now.getTime() - dateCompare.getTime();
  const daysDiff = Math.floor(timeDiff / millisecondsPerDay);

  return daysDiff;
}

const result = displayDays(1970, 8, 13);
const daysBorn = document.createElement("p");
daysBorn.classList.add("color-text");
daysBorn.innerHTML = `Since my birth it has been: ${result} days but I don't feel old at all :)`;
container.appendChild(daysBorn);
