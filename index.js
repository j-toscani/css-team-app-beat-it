"use strict";

const inputPerson = document.querySelector("#order__persons");
const inputBudget = document.querySelector("#order__price");
const budgetTotal = document.querySelector("#budget");

function multiply(a, b) {
  const budget = a * b;
  return budget;
}

function calcBudget() {
  const persons = Number(inputPerson.value);
  const budgetPerPerson = Number(inputBudget.value);
  budgetTotal.innerHTML = multiply(persons, budgetPerPerson);
}

inputPerson.addEventListener("input", calcBudget);
inputBudget.addEventListener("input", calcBudget);
