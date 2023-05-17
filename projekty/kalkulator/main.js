const currentNumber = document.querySelector(".currentNumber")
const previousNumber = document.querySelector(".previosuNumber p")
const mathSign = document.querySelector(".mathSign")
const numbersButton = document.querySelector(".number")
const operatorsButtons = document.querySelector(".operator")
const equalsButton = document.querySelector(".equals")
const clearButton = document.querySelector(".clear")
const calculatorHsitory = document.querySelector(".history")
const historyBtn = document.querySelector(".history-btn")



let result ='';




























//nasłuchiwanie przycisków

operatorsButtons.forEeach((button)=>button.addEventListener('click', operate))

equalsButton.addEventListener('click', showResult)

clearButton.addEventListener('click', clearScreen)
numbersButton.forEach((button)=> {
    <button classname="ad"></button>
});