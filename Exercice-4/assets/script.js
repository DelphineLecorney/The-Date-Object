const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const photoContainer = document.createElement("div");
photoContainer.classList.add("photoContainer");
container.appendChild(photoContainer);

const timeZone = { label: "", timeZone: "Europe/Brussels" };

const dateElement = document.createElement("p");
container.appendChild(dateElement);

const timeElement = document.createElement("p");
container.appendChild(timeElement);

function updateDateTime() {
    const now = new Date();

    const dateOptions = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        timeZone: timeZone.timeZone
    }; 
    const dateNow = now.toLocaleString("en-US", dateOptions);
    dateElement.textContent = ` ${dateNow}`;

    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: timeZone.timeZone
    };
    const timeNow = now.toLocaleString("en-US", timeOptions);
    timeElement.textContent = ` ${timeNow} ${timeZone.label}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);
