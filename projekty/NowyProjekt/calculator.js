//pobranie klawiatury kalkulatora
const previousNumber = document.querySelector('.previuosNumber')
const mathSign = document.querySelector('.mathSign')
const currentNumber = document.querySelector('.currentNumber')
const clearBtn = document.querySelector('.clear')
const operators = document.querySelectorAll('.operator')
const numbers = document.querySelectorAll('.number')
const equalSign = document.querySelector('.equalSign')

let result = ''
function displayNumber(){
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent ==='.' && currentNumber.innerHTML === '')return currentNumber.innerHTML = '.0'
    currentNumber.innerHTML += this.textContent
    
}
function displayMathSign(){
    mathSign.innerHTML += this.textContent
    if(currentNumber.innerHTML ==='' && this.textContent ==='-'){
        currentNumber.innerHTML = '-'
        return
    }else if(currentNumber.innerHTML ===''){
        return
    }
    if(mathSign.innerHTML !=''){
        showResult()
    }
    previousNumber.innerHTML = currentNumber.innerHTML
    mathSign.innerHTML = this.textContent
    currentNumber.innerHTML=''
}
function clearScreen(){
   

}

function showResult(){
    
}






//nasłuchiwanie przycisków
numbers.forEach(button=>{
    button.addEventListener('click',(displayNumber))
})
operators.forEach(btn =>{
    btn.addEventListener('click', displayMathSign)
})
equalSign.addEventListener('click', showResult)

clearBtn.addEventListener('click', clearScreen)