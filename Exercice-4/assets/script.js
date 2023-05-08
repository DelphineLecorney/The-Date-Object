const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const photoContainer = document.createElement("div");
photoContainer.classList.add("photoContainer");
container.appendChild(photoContainer);

const timeZone = { label: "", timeZone: "Europe/Brussels" };

const dateElement = document.createElement("p");
dateElement.classList.add('dateElement');
photoContainer.appendChild(dateElement);

const timeElement = document.createElement("p");
timeElement.classList.add('timeElement');
photoContainer.appendChild(timeElement);

const toggleButton = document.createElement('button');
toggleButton.textContent = '12/24';
toggleButton.setAttribute("id", "toggleButton");
container.appendChild(toggleButton);

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

    const hourFormat = localStorage.getItem('hourFormat');

    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: hourFormat === '12',
        timeZone: timeZone.timeZone
    };

    const timeNow = now.toLocaleString("en-US", timeOptions);
    timeElement.textContent = ` ${timeNow} ${timeZone.label}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);

const toggleButtonElement = document.getElementById('toggleButton');
toggleButtonElement.addEventListener('click', () => {
    const hourFormat = localStorage.getItem('hourFormat');
    let newFormat;
    if (hourFormat === '12'){
        newFormat = '24';    
    }else {
        newFormat = '12';
    }   
    localStorage.setItem('hourFormat', newFormat);
    updateDateTime();
});

if (!localStorage.getItem('hourFormat')) {
    localStorage.setItem('hourFormat', '12');
};
// Retirer le button du container, si body plus rien (à voir)
document.body.insertAdjacentElement('beforeend', toggleButton);