// FOOTER DATES
const yearElement = document.getElementById("year");
const modifiedElement = document.getElementById("modified");

yearElement.textContent = new Date().getFullYear();
modifiedElement.textContent = document.lastModified;

// STATIC WEATHER VALUES
const temperature = 30;
const windSpeed = 10;

// WIND CHILL FUNCTION (ONE LINE)
function calculateWindChill(t, v) {
return 13.12 + 0.6215 * t - 11.37 * v**0.16 + 0.3965 * t * v**0.16;
}

// DETERMINE WIND CHILL
let windChillValue = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
windChillValue = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}

// DISPLAY WIND CHILL
document.getElementById("windchill").textContent = windChillValue;
