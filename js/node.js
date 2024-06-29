// let bookList = data.results.books;
// let newArray = [];
// let list = document.getElementById("list");

import horoscopeData from "../data/data.js";


let signList = horoscopeData.horoscopes.astroSigns;
let showHorsocope = horoscopeData.horoscopes.astroSigns[0].dailyHoroscope;
let userArray = [];
let sign = document.getElementById("sign");
let showDiv = document.getElementsByClassName("show-div");
// let singToPin = option.textcontent
// var yourSign = documment.getElementsById("option");


function forEachTest() {
    signList.forEach(item => sign.innerHTML += `<option value=${item.sign}>${item.sign}</option>`);
}
forEachTest()

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const  yourSign= new FormData(event.target);
	const dataObject = Object.fromEntries(yourSign.entries());
	//above is boiler plate code
    userArray.push(dataObject);
    console.log(userArray);
    console.log(dataObject);
	// form.reset();
}
function userHoroscope() {
    for (let item of signList) {
        if (signList.sign === userArray) {
            document.getElementsByClassName("your-sign").textContent = signList.sign;
        }
    }
}





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
