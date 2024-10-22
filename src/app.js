/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("boton").onclick = miau;
};
function miau() {
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "my phone ", "the car "];
  let when = [
    "before the class ",
    "when I was sleeping ",
    "while I was exercising ",
    "during my lunch ",
    "while I was praying "
  ];
  let excuse1 = Math.floor(Math.random() * who.length);
  let excuse2 = Math.floor(Math.random() * action.length);
  let excuse3 = Math.floor(Math.random() * what.length);
  let excuse4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[excuse1] + action[excuse2] + what[excuse3] + when[excuse4];
}
