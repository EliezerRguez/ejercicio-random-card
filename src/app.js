/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};

function generateRandomNumber() {
  let number = [
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
  let indexNumber = Math.floor(Math.random() * number.length);
  return number[indexNumber];
}

function generateRandomSuit() {
  let suit = ["spade", "club", "heart", "diamond"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
}
