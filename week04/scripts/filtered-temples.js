// ===============================
// FOOTER (DATE + LAST MODIFIED)
// ===============================

const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

document.getElementById("lastModified").textContent =
"Last Modified: " + document.lastModified;


// ===============================
// HAMBURGER MENU
// ===============================

const menuButton = document.getElementById("menu");
const header = document.querySelector("header");

menuButton.addEventListener("click", function ()
{
    header.classList.toggle("open");
});


// ===============================
// TEMPLE ARRAY (10 TEMPLES ✔)
// ===============================

const temples = [

{
templeName: "Aba Nigeria",
location: "Aba, Nigeria",
dedicated: "2005, August, 7",
area: 11500,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
},

{
templeName: "Manti Utah",
location: "Manti, Utah, USA",
dedicated: "1888, May, 21",
area: 74792,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
},

{
templeName: "Payson Utah",
location: "Payson, Utah, USA",
dedicated: "2015, June, 7",
area: 96630,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
},

{
templeName: "Yigo Guam",
location: "Yigo, Guam",
dedicated: "2020, May, 2",
area: 6861,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
},

{
templeName: "Washington DC",
location: "Maryland, USA",
dedicated: "1974, November, 19",
area: 156558,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},

{
templeName: "Lima Peru",
location: "Lima, Peru",
dedicated: "1986, January, 10",
area: 9600,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
},

{
templeName: "Mexico City",
location: "Mexico City, Mexico",
dedicated: "1983, December, 2",
area: 116642,
imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},

{
templeName: "Accra Ghana",
location: "Accra, Ghana",
dedicated: "2004, January, 11",
area: 17500,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-lds-2486.jpg"
},

{
templeName: "Rome Italy",
location: "Rome, Italy",
dedicated: "2019, March, 10",
area: 41010,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-lds-3455.jpg"
},

{
templeName: "Johannesburg South Africa",
location: "Johannesburg, South Africa",
dedicated: "1985, August, 24",
area: 19184,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-lds-2491.jpg"
}

];


// ===============================
// SELECT ELEMENTS
// ===============================

const gallery = document.getElementById("gallery");
const navLinks = document.querySelectorAll("nav a");


// ===============================
// DISPLAY FUNCTION
// ===============================

function displayTemples(templeList)
{
    gallery.innerHTML = "";

    templeList.forEach(function (temple)
    {
        const card = document.createElement("div");

        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const img = document.createElement("img");

        name.textContent = temple.templeName;
        location.textContent = "Location: " + temple.location;
        dedicated.textContent = "Dedicated: " + temple.dedicated;
        area.textContent = "Area: " + temple.area + " sq ft";

        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";

        card.append(name, location, dedicated, area, img);

        gallery.append(card);
    });
}


// ===============================
// ACTIVE MENU FUNCTION
// ===============================

function setActive(id)
{
    navLinks.forEach(function (link)
    {
        link.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


// ===============================
// FILTER FUNCTIONS
// ===============================

function showHome()
{
    displayTemples(temples);
    setActive("home");
}

function showOld()
{
    const filtered = temples.filter(function (t)
    {
        return parseInt(t.dedicated) < 1900;
    });

    displayTemples(filtered);
    setActive("old");
}

function showNew()
{
    const filtered = temples.filter(function (t)
    {
        return parseInt(t.dedicated) > 2000;
    });

    displayTemples(filtered);
    setActive("new");
}

function showLarge()
{
    const filtered = temples.filter(function (t)
    {
        return t.area > 90000;
    });

    displayTemples(filtered);
    setActive("large");
}

function showSmall()
{
    const filtered = temples.filter(function (t)
    {
        return t.area < 10000;
    });

    displayTemples(filtered);
    setActive("small");
}


// ===============================
// EVENT LISTENERS
// ===============================

document.getElementById("home").addEventListener("click", function ()
{
    showHome();
    header.classList.remove("open"); // closes mobile menu
});

document.getElementById("old").addEventListener("click", function ()
{
    showOld();
    header.classList.remove("open");
});

document.getElementById("new").addEventListener("click", function ()
{
    showNew();
    header.classList.remove("open");
});

document.getElementById("large").addEventListener("click", function ()
{
    showLarge();
    header.classList.remove("open");
});

document.getElementById("small").addEventListener("click", function ()
{
    showSmall();
    header.classList.remove("open");
});


// ===============================
// INITIAL LOAD
// ===============================

showHome();