"use strict";

const inputPerson = document.querySelector("#order__persons");
const inputBudget = document.querySelector("#order__price");
const budgetTotal = document.querySelector("#budget");
const inputVegetarian = document.querySelector("#order__vegetarian");
const inputVegan = document.querySelector("#order__vegan");

function multiply(a, b) {
  const budget = a * b;
  return budget;
}

function calcBudget() {
  const persons = Number(inputPerson.value);
  const budgetPerPerson = Number(inputBudget.value);
  budgetTotal.innerHTML = multiply(persons, budgetPerPerson);
}

function blockExtraUser() {
  if (Number(inputVegan.value) > Number(inputPerson.value)) {
    alert("the number of vegan users exceeds the number of people");
  } else if (Number(inputVegetarian.value) > Number(inputPerson.value)) {
    alert("the number of vegatarian users exceeds the number of people");
  } else if (
    Number(inputVegetarian.value) + Number(inputVegan.value) >
    Number(inputPerson.value)
  ) {
    alert(
      "the number of vegatarian or vegan users exceeds the number of people"
    );
  } else {
  }
}

inputPerson.addEventListener("input", calcBudget);
inputBudget.addEventListener("input", calcBudget);
inputVegan.addEventListener("input", blockExtraUser);
inputVegetarian.addEventListener("input", blockExtraUser);
