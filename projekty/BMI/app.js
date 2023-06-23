const obliczButton = document.getElementById("Oblicz");
const waga = document.getElementById("Waga");
const wzrost = document.getElementById("wzrost");
const result = document.getElementById("testowe");
let ciezar;
let wysokosc;

waga.addEventListener("input", (event) => {
  ciezar = parseFloat(waga.value);
});

wzrost.addEventListener("input", (event) => {
  wysokosc = parseFloat(wzrost.value);
});

function obliczBmi(waga, wzrost) {
  let wynik = (ciezar / wysokosc)**2;
  return (wynik);
}

obliczButton.addEventListener("click", (event) => {
  result.innerHTML = "Twoje BMI wynosi: " + obliczBmi(waga, wzrost);
});
