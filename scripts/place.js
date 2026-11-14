const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;

document.getElementById("lastModified").textContent =
"Last Modification: " + lastModified;

const temperature = 9;
const windSpeed = 12;

const calculateWindChill = (temp, speed) =>
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.innerHTML = `${calculateWindChill(temperature, windSpeed)} &deg;C`;
} else {
    windChillElement.textContent = "N/A";
}
