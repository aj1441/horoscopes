

import horoscopeData from "../data/data.js";


let signList = horoscopeData.horoscopes.astroSigns;
let showHoroscope = document.getElementById("userHoroscope");
let form = document.getElementById("form");


function forEachTest() {
    signList.forEach(item => sign.innerHTML += `<option value=${item.sign}>${item.sign}</option>`);
}
forEachTest()

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries());
    console.log(dataObject);
    form.reset();
    let userSign = dataObject.sign;
     // Clear previous horoscope content before adding the new one
     showHoroscope.innerHTML = '';
    for (let item of signList) {
        if (item.sign === userSign) {
            let selectedSign = item.sign;
            let selectedHoroscope = item.dailyHoroscope;
            let horoscopeContainer = document.createElement("div");
            horoscopeContainer.className = "horoscope-wrapper";
            horoscopeContainer.innerHTML = `<div class="card" id="card">
        <p class="selected-sign">Your sign is ${selectedSign}</p>
        <p class="selected-horoscope">Your daily horoscope is: ${selectedHoroscope}</p>`

            showHoroscope.appendChild(horoscopeContainer);
            break;
        }
        console.log(userSign);
    }
}

const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
    location.reload();
}

refreshButton.addEventListener('click', refreshPage)