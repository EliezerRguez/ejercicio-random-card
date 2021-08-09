/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let card = document.querySelector(".card");
  card.classList.add(generateRandomSuit());
  card.innerHTML = generateRandomNumber();
};

function generateRandomNumber() {
  let numbers = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumber = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumber];
}

function generateRandomSuit() {
  let suits = ["spade", "club", "heart", "diamond"];
  let indexSuit = Math.floor(Math.random() * suits.length);
  return suits[indexSuit];
}
