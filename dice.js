function mySubmitFunction() {
  var player1 = Math.floor(Math.random() * 6) + 1;
  var player2 = Math.floor(Math.random() * 6) + 1;

  document
    .getElementById("player1")
    .setAttribute("src", "./" + player1 + ".png");

  document
    .getElementById("player2")
    .setAttribute("src", "./" + player2 + ".png");

  if (player1 > player2) {
    document.querySelector("h1").textContent = "Player1 wins";
  } else if (player2 > player1) {
    document.querySelector("h1").textContent = "Player2 wins";
  } else {
    document.querySelector("h1").textContent = "Draw! Roll again!";
  }
}
