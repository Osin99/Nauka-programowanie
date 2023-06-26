//Pobieranie referencji do przycisków
const convertApp = document.getElementById("money");
const weatherApp = document.getElementById("weather");
const changeColorApp = document.getElementById("color");
const calculatorApp = document.getElementById("calc");
const przeliczBtn = document.getElementById('przeliczBtn')
const inputZloty = document.getElementById('zloty')
//Pobieranie refencji do sekcji zawierających treść
const converterSection = document.querySelector('.containerToConvert');
const weatherSection = document.querySelector('.weather');
const colorSection = document.querySelector('.changeColor');
const calculatorSection = document.querySelector('.calculatorApp');
const resultSection = document.querySelector('.resultSection')
//funkcje ukrywania sekcji oraz pokazywania sekcji
function hideAllSections(){
    converterSection.style.display = 'none'
    weatherSection.style.display = 'none'
    colorSection.style.display = 'none'
    calculatorSection.style.display = 'none'
}

function showConverterSection(){
    hideAllSections();
    converterSection.style.display = 'block'
}
function showWeatherSection(){
    hideAllSections();
    weatherSection.style.display = 'block'
}
function showColorSection(){
    hideAllSections();
    colorSection.style.display = 'block'
}
function showCalculatorSection(){
    hideAllSections();
    calculatorSection.style.display = 'block'
}

function zlIntoEuro(){
    
    let wynik =  parseFloat(inputZloty) * 4.5

    resultSection.innerHTML = inputZloty+'zł jest równe'+wynik+'&euro;'
}



//nasłóchiwanie przycisków
convertApp.addEventListener('click', showConverterSection);
weatherApp.addEventListener('click', showWeatherSection);
changeColorApp.addEventListener('click', showColorSection);
calculatorApp.addEventListener('click', showCalculatorSection);
przeliczBtn.addEventListener('click', zlIntoEuro)


//ukryj wszystkie sekcje na starcie strony (po załadowaniu)

hideAllSections();