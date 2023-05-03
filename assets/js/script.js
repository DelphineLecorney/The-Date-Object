// Exercice 1

function displayTimes() {
  const container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);
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
