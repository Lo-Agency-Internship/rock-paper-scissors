const options = ["rock", "paper", "scissors"];
let result1 = [];
let result2 = [];

function player1() {
  let result = options[Math.floor(Math.random() * 3)];
  result1.push(result);
  let p = document.createElement("p");
  const text = document.createTextNode(`${result}`);
  p.appendChild(text);
  document.getElementById("player1").appendChild(p);
}

function player2() {
  let result = options[Math.floor(Math.random() * 3)];
  result2.push(result);
  let p = document.createElement("p");
  const text = document.createTextNode(`${result}`);
  p.appendChild(text);
  document.getElementById("player2").appendChild(p);
}

function winner1() {
  if (result1[result1.length - 1] === result2[result2.length - 1]) {
    document.getElementById("winner1").innerHTML = "truce";
  } else if (
    result1[result1.length - 1] === "rock" &&
    result2[result2.length - 1] === "paper"
  ) {
    document.getElementById("winner1").innerHTML = "player2 wins";
  } else if (
    result1[result1.length - 1] === "rock" &&
    result2[result2.length - 1] === "scissors"
  ) {
    document.getElementById("winner1").innerHTML = "player1 wins";
  } else if (
    result1[result1.length - 1] === "paper" &&
    result2[result2.length - 1] === "rock"
  ) {
    document.getElementById("winner1").innerHTML = "player1 wins";
  } else if (
    result1[result1.length - 1] === "paper" &&
    result2[result2.length - 1] === "scissors"
  ) {
    document.getElementById("winner1").innerHTML = "player2 wins";
  } else if (
    result1[result1.length - 1] === "scissors" &&
    result2[result2.length - 1] === "rock"
  ) {
    document.getElementById("winner1").innerHTML = "player2 wins";
  } else if (
    result1[result1.length - 1] === "scissors" &&
    result2[result2.length - 1] === "paper"
  ) {
    document.getElementById("winner1").innerHTML = "player1 wins";
  } else {
    document.getElementById("winner1").innerHTML =
      "something went wrong refresh the page";
  }
}
