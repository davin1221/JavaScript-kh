let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let resultArea = document.getElementById("result")
let result;


function fnPlus() {
    result = parseInt(num1.value) + parseInt(num2.value)
    resultArea.innerHTML = result;
}

function fnMinus() {
    result = parseInt(num1.value) - parseInt(num2.value)
    resultArea.innerHTML = result;
}

function fnMulti() {
    result = parseInt(num1.value) * parseInt(num2.value)
    resultArea.innerHTML = result;
}

function fnDiv() {
    result = parseInt(num1.value) / parseInt(num2.value)
    resultArea.innerHTML = result;
}

function fnLeave() {
    result = parseInt(num1.value) % parseInt(num2.value)
    resultArea.innerHTML = result;
}

