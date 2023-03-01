function addPoke() {
  if (money >= 25) {
    money -= 25;
    nbPokeball += 1;
    document.getElementById("pokeball").innerHTML =
      "Pokeball : " + nbPokeball + " (25 money)";
    document.getElementById("money").innerHTML = "Money : " + money;
  }
}
function addSuper() {
  if (money >= 50) {
    money -= 50;
    nbSuperball += 1;
    document.getElementById("superball").innerHTML =
      "Superball : " + nbSuperball + " (50 money)";
    document.getElementById("money").innerHTML = "Money : " + money;
  }
}
function addHyper() {
  if (money >= 100) {
    money -= 100;
    nbHyperball += 1;
    document.getElementById("hyperball").innerHTML =
      "Hyperball : " + nbHyperball + " (100 money)";
    document.getElementById("money").innerHTML = "Money : " + money;
  }
}
