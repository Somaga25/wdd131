const year = new Date().getFullYear();

document.getElementById("year").textContent = year;


document.getElementById("lastModified").textContent =
document.lastModified;



const menuButton = document.getElementById("menu");

const header = document.querySelector("header");



menuButton.addEventListener("click", function ()
{
header.classList.toggle("open");
});