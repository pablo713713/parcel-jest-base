import { sumar, multiplicar } from "./sumador";

const formSumar = document.querySelector("#sumar-form");
const formMultiplicar = document.querySelector("#multiplicar-form");
const divResultado = document.querySelector("#resultado-div");

formSumar.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(document.querySelector("#primer-numero-sumar").value);
  const secondNumber = Number.parseInt(document.querySelector("#segundo-numero-sumar").value);

  divResultado.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

formMultiplicar.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(document.querySelector("#primer-numero-multiplicar").value);
  const secondNumber = Number.parseInt(document.querySelector("#segundo-numero-multiplicar").value);

  divResultado.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
