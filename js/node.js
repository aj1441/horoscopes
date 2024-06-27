// let bookList = data.results.books;
// let newArray = [];
// let list = document.getElementById("list");

import horoscopeData from "../data/data.js";


let signList = horoscopeData.horoscopes.astroSigns;
let showHorsocope = horoscopeData.horoscopes.astroSigns[0].dailyHoroscope;
let newArray = [];
let sign = document.getElementById("sign");
let showDiv = document.getElementsByClassName("show-div");
// var selectedSign = documment.getElementsById(option);


function forEachTest() {
    signList.forEach(item => sign.innerHTML += `<option>${item.sign}</option>`);
    
    console.log(sign);

}
    
forEachTest()

// need to loop through and find array object that has same value as 

function showHoroscope () {

  
}





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
