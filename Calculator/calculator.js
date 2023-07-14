'use strict'

const inputOne = document.getElementById(`input_1`);
const inputTwo = document.getElementById(`input_2`);
const buttonAdd = document.getElementById(`button_add`);
const buttonSubtract = document.getElementById(`button_subtract`);
const buttonMultiply = document.getElementById(`button_multiply`);
const buttonDivide = document.getElementById(`button_divide`);
const outputItem = document.getElementById(`list_output`)


let addToList =x=> {
    let child = document.createElement(`li`);
    
}


buttonAdd.onclick =()=> {
outputItem.innerHTML = Number(inputOne.value) + Number(inputTwo.value)
}

buttonSubtract.onclick =()=> {
outputItem.innerHTML = Number(inputOne.value) - Number(inputTwo.value)
}

buttonMultiply.onclick =()=> {
outputItem.innerHTML = Number(inputOne.value) * Number(inputTwo.value)
}

buttonMultiply.onclick =()=> {
outputItem.innerHTML = Number(inputOne.value) / Number(inputTwo.value)
}



