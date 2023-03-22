function clicke() {
    click += 1;
}

function update() {
    money += click + nbPokeball * gainPB + nbSuperball * gainSB + nbHyperball * gainHB;
    var income = (nbPokeball * gainPB + nbSuperball * gainSB + nbHyperball * gainHB) * 10;
    document.getElementById("income").innerHTML = "Income  : " + income;
    click = 0;
    document.getElementById("money").innerHTML = "Money : " + money;
    //console.log(money);
    if (money >= 20 || nbPokeball > 0) {
        document.getElementById("pokeball").style.visibility = "visible";
    } else {
        document.getElementById("pokeball").style.display = "hidden";
    }
    if (money >= 40 || nbSuperball > 0) {
        document.getElementById("superball").style.visibility = "visible";
    } else {
        document.getElementById("superball").style.visibility = "hidden";
    }
    if (money >= 90 || nbHyperball > 0) {
        document.getElementById("hyperball").style.visibility = "visible";
    } else {
        document.getElementById("hyperball").style.visibility = "hidden";
    }
    document.getElementById("pokeball").innerHTML = "Pokeball : " + nbPokeball + " (25 money)";
    document.getElementById("superball").innerHTML = "Superball : " + nbSuperball + " (50 money)";
    document.getElementById("hyperball").innerHTML = "Hyperball : " + nbHyperball + " (100 money)";
    document.getElementById("money").innerHTML = "Money : " + money;
}
// Appel de update toutes les secondes
setInterval("update()", 100);
