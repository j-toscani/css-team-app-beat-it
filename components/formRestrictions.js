"use strict";

const inputPerson = document.querySelector("#order__persons");
const inputBudget = document.querySelector("#order__price");
const inputVegan = document.querySelector("#order__vegan");
const inputVegetarian = document.querySelector("#order__vegetarian");
const budgetTotal = document.querySelector("#budget");

function multiply(a, b) {
  const budget = a * b;
  return budget;
}
// Enable/Disable Vegans and Vegetarians
function inputStatusCheck() {
  if (inputPerson.max === 0 || inputPerson.value == 0) {
    inputVegan.disabled = true;
    inputVegan.value = null;
    inputVegetarian.disabled = true;
    inputVegetarian.value = null;
  } else {
    inputVegan.disabled = false;
    inputVegetarian.disabled = false;
    inputVegan.max = inputPerson.max;
    inputVegetarian.max = inputPerson.max;
  }
  inputPerson.max = inputPerson.value;
}
// Adjust min and max input for Vegans and Vegetarians
function setMaxVeganAndVegetarian() {
  if (Number(inputVegan.value) > Number(inputVegan.max)) {
    inputVegan.value = inputVegan.max;
  } else {
  }
  if (Number(inputVegetarian.value) > Number(inputVegetarian.max)) {
    inputVegetarian.value = inputVegetarian.max;
  } else {
  }
  inputVegan.max = 0;
  inputVegetarian.max = 0;
  inputVegan.max = inputPerson.max - inputVegetarian.value;
  inputVegetarian.max = inputPerson.max - inputVegan.value;
}
function setMinVeganAndVegetarian() {
  if (Number(inputVegan.min) > Number(inputVegan.value)) {
    inputVegan.value = inputVegan.min;
  } else {
  }
  if (Number(inputVegetarian.min) > Number(inputVegetarian.value)) {
    inputVegetarian.value = inputVegetarian.min;
  } else {
  }
}
//Calculate Budget for Offer
function calcBudget() {
  inputStatusCheck();
  const persons = Number(inputPerson.value);
  const budgetPerPerson = Number(inputBudget.value);
  budgetTotal.innerHTML = multiply(persons, budgetPerPerson);
}
//Inform User of Error
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
  setMaxVeganAndVegetarian();
  setMinVeganAndVegetarian();
}

export function addEventListeners() {
  inputPerson.addEventListener("input", calcBudget);
  inputBudget.addEventListener("input", calcBudget);
  inputVegan.addEventListener("input", blockExtraUser);
  inputVegetarian.addEventListener("input", blockExtraUser);
}
