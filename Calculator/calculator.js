'use strict'

const inputOne = document.getElementById(`input_1`);
const inputTwo = document.getElementById(`input_2`);
const buttonAdd = document.getElementById(`button_add`);
const buttonSubtract = document.getElementById(`button_add`);
const buttonMultiply = document.getElementById(`button_multiply`);
const buttonDivide = document.getElementById(`button_divide`);
const outputItem = document.getElementById(`list-group-item`)


buttonAdd.onclick =()=> {
let sum = parseInt(inputOne.value) + parseInt(inputTwo.value);
//outputItem.appendChild(sum)
//outputItem.innerText = sum
}

buttonSubtract.onclick =()=> {
let sum = parseInt(inputOne.value) - parseInt(inputTwo.value)
}

buttonMultiply.onclick =()=> {
let sum = parseInt(inputOne.value) * parseInt(inputTwo.value)
}

buttonMultiply.onclick =()=> {
let sum = parseInt(inputOne.value) / parseInt(inputTwo.value)
}



