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
}
