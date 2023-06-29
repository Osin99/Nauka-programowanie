//Pobieranie referencji do przycisków
const convertApp = document.getElementById("money");
const weatherApp = document.getElementById("weather");
const changeColorApp = document.getElementById("color");
const calculatorApp = document.getElementById("calc");
const przeliczBtn = document.getElementById('przeliczBtn')
const inputZloty = document.getElementById('zloty')
const startView = document.getElementById('startSection')
//Pobieranie refencji do sekcji zawierających treść
const converterSection = document.querySelector('.containerToConvert');
const weatherSection = document.querySelector('.weather');
const colorSection = document.querySelector('.changeColor');
const calculatorSection = document.querySelector('.calculatorApp');
const resultSection = document.querySelector('.resultSection')
const startSection = document.querySelector('.startView')
//funkcje ukrywania sekcji oraz pokazywania sekcji
function hideAllSections(){
    converterSection.style.display = 'none'
    weatherSection.style.display = 'none'
    colorSection.style.display = 'none'
    calculatorSection.style.display = 'none'
    startSection.style.display = 'none'
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
function showMainPage(){
    hideAllSections();
    startSection.style.display = 'block'
}




//nasłóchiwanie przycisków
convertApp.addEventListener('click', showConverterSection);
weatherApp.addEventListener('click', showWeatherSection);
changeColorApp.addEventListener('click', showColorSection);
calculatorApp.addEventListener('click', showCalculatorSection);
przeliczBtn.addEventListener('click', zlIntoEuro)
startView.addEventListener('click', showMainPage)


//ukryj wszystkie sekcje na starcie strony (po załadowaniu)

showMainPage();

//Oblicznie euro na podstawie zł podanych w input

function zlIntoEuro(){
    if(inputZloty.value === ""){
        resultSection.innerHTML = 'Podałeś złą wartość początkową'
    }else if(inputZloty.value === "0"){
        resultSection.innerHTML = '0 = 0'
    }else{
    let wynik =  parseFloat(inputZloty.value) / 4.5

    resultSection.innerHTML = inputZloty.value + ' zł jest równe' + wynik + '&euro;'
}}

//Zmiana koloru strony 

//Uchwycenie 
const colorSelect = document.querySelectorAll('.color-change-list')
const changeColorBtn = document.getElementById('changeColorBtn')
const colorBtn = document.querySelectorAll('.colorBtn')
const background = document.getElementsByTagName('body')


//nasłuchiwani
changeColorBtn.addEventListener('click', chooseColor)
colorBtn.forEach(btn=>{
    btn.addEventListener('click', (event)=>{
        const clickedButton = event.target
        const color = clickedButton.textContent
        changeColor(color)
    })
})


//funkcja
function chooseColor(){
   colorSelect.forEach(element => {
        if(element.style.display === 'block'){
            element.style.display = 'none'
        }else{
            element.style.display='block'
        }
        
   });
}

function changeColor(color){
    
        if(color ==='Green'){
            document.body.style.backgroundColor = 'green',document.body.style.color = 'black'
        }
        else if(color ==='Red'){
            document.body.style.backgroundColor = 'red', document.body.style.color = 'black'
        }
        else if(color ==='Black'){
            document.body.style.backgroundColor = 'black', document.body.style.color = 'white'
        }
        else if(color ==='Yellow'){
            document.body.style.backgroundColor = 'yellow',document.body.style.color = 'black'
        }
        else if(color ==='White'){
            document.body.style.backgroundColor = 'white',document.body.style.color = 'black'
        }
}


