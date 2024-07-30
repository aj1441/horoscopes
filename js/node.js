

import horoscopeData from "../data/data.js";


let signList = horoscopeData.horoscopes.astroSigns;
// let userHoroscope = horoscopeData.horoscopes.astroSigns.dailyHoroscope
let showHoroscope = document.getElementById("userHoroscope");
// let showSign = document.getElementById("yourSign");
let form= document.getElementById("form");
// let userSign;
let display;
// let newUserSign = document.getElementById("userSign")
// console.log(showHoroscope)
// console.log(showSign)







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
	//above is boiler plate code
    form.reset();
    let userSign = dataObject.sign;

    for (let item of signList) {
        if (item.sign === userSign){
            let selectedSign=item.sign;
            let selectedHoroscope = item.dailyHoroscope;
        let horoscopeContainer =document.createElement("div");
        horoscopeContainer.className = "horoscope-wrapper";
        horoscopeContainer.innerHTML = `<div class="card" id="card">
        <p class="selected-sign">Your sign is ${selectedSign}</p>
        <p class="selected-horoscope">Your daily horoscope is: ${selectedHoroscope}</p>`

        showHoroscope.appendChild(horoscopeContainer);
        }
    // let userHoroscope = signList[userSign].dailyHoroscope;
	// displayHoroscope ();
    console.log(userSign);
}
}
