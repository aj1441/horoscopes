

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


// i need a function to loop through signList and when item.sign is equal to userSign global variable; i want to then display in html "userSign" using textContent `Your sign is ${userSign}` and display to user item.dailyHoroscope in the html "userHoroscope" using textContent.
// function displayHoroscope () {
//     for (let item of signList) {
//         if (item.sign === userSign){
//             let selectedSign=item.sign;
//             let selectedHoroscope = item.dailyHoroscope;
//         let horoscopeContainer =document.createElement("div");
//         horoscopeContainer.className = "horoscope-wrapper";
//         horoscopeContainer.innerHTML = `<div class="card" id="card">
//         <p class="selected-sign">Your sign is ${selectedSign}</p>
//         <p class="selected-horoscope">Your daily horoscope is: ${selectedHoroscope}</p>`

//         showHoroscope.appendChild(horoscopeContainer);
//         // if (item.sign === userSign) {
//         //     showSign.innerHTML = `Your sign is ${item.sign}`;
//         //     showHoroscope.innerHTML = ${item.dailyHoroscope};
//         // }
//         // console.log(showSign)
    
// }
// }
// }
// displayHoroscope ()


// function userHoroscope () {
//     for (let item of signList) {
//         let sign = item.sign;
//         let userHoroscope = item.dailyHoroscope;
//         if (item === newUserArray) {
//         let signSentence = `Your sign is ${sign}!`
//         newUserSign.textContent = signSentence;
//         document.getElementById("userHoroscope").textContent = userHoroscope;
//         console.log(sign);
//         console.log(userHoroscope);
//         console.log(signSentence);
//         }
//     }
// }

// userHoroscope()


// function userHoroscope() {
//     for (let item of signList) {
//         let signs = item.sign;
//         if (signs === newUserArray) {
//             document.getElementsById("userSign").textContent = signList.sign;
//             document.getElementsById("userHoroscope").textContent = signList.dailyHoroscope;
//         }
//         console.log (userSign);
//     }
// }

// userHoroscope()


//submit function that grabs the value from the user and stores it in a variable
//then, loop through the data and use an if statement to see if the value from the user is the same as item.sign
//inside the code block for the if statement, (so the code that will run when the if statement evaloustes to true) reassign the value of the sign variable and the description variable to be item.sign and item.dailyHoroscope
//display the info back to the user


// function for reset button on form-----------------------------------------------------------
// function onFormReset () {
//     form.reset();
// }

//original boilerplate for the submit button-------------------------------------------------------
// function onFormSubmit(event) {
// 	event.preventDefault();
// 	const data = new FormData(event.target);
// 	const dataObject = Object.fromEntries(data.entries());
// 	console.log(dataObject);
// 	//above is boiler plate code
// 	form.reset();
// }


// function forEachLoop(item) {
//     return sign.innerHTML += `<option value=${item.sign}>${item.sign}</option>`
// }

// function addTwo(num1, num2) {
//     return num1 + num2
// }

// let answer = addTwo(56, 4)
// let answer1 = addTwo(45, 4)
// console.log(answer)







// function yourSign () {
// for (let item of signList){
//     let signIs = documment.getElementsById("select");
//     console.log(signIs)
// }
// }

// yourSign()
// need to loop through and find array object that has same value as 






// function showHoroscope() {
//     for (let item of signList) {
//         if (item.sign === selectedSign) {
//          document.getElementsByClassName("your-sign").textContent => "Your sign is ${selectedSign}";
//         }
//         // let showSign = document.getElementsByClassName("your-sign").${item.sign}
//     }
// }



// function selectList() {
//     for (let item of signList) {
//     let listItem =`<option>${item.sign}</option>`;
//     let select = document.getElementsByTagName("select");
//     console.log(listItem);
//     select.innerHTML = listItem;
//     document.getElementById("sign")[0].appendChild(listItem);
//     newArray.push(listItem);
// }
// }
// selectList();



// ["option1", "option2", "option3", "option4", "option5"]
// .forEach(op => rec_mode.innerHTML += `<option value="${op}">${op}</option>`);

// function yourSignIs() {
// 	for (let item of signList) {
// 		let listItem = `<option>${item.sign}</option>`;
//         let select = document.createElement("select");
//         console.log(listItem);
// 		select.innerHTML = listItem;
// 		document.getElementsById("sign")[0].appendChild(option);
// 		newArray.push(listItemtem);
// 	}
// }
// yourSignIs();



// function listOfBooks() {
// 	for (let item of bookList) {
// 		let listItem = `<li>${item.title}</li>`;
// 		let ul = document.createElement("ul");
// 		console.log(listItem);
// 		ul.innerHTML = listItem;
// 		document.getElementsByClassName("list")[0].appendChild(ul);
// 		newArray.push(item);
// 	}
// }

// console.log(signList);

