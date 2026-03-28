// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

// WEATHER VALUES
const temperature = 30;
const windSpeed = 10;

// WIND CHILL FUNCTION (ONE LINE)
function calculateWindChill(t, v) {
return 13.12 + 0.6215 * t - 11.37 * v**0.16 + 0.3965 * t * v**0.16;
}

// APPLY CONDITIONS
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}

// DISPLAY
document.getElementById("windchill").textContent = windChill;
