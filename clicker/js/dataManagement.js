function loadData() {
  money = parseFloat(localStorage.getItem("moneySaved"));
  nbPokeball = parseFloat(localStorage.getItem("nbPokeballSaved"));
  nbSuperball = parseFloat(localStorage.getItem("nbSuperballSaved"));
  nbHyperball = parseFloat(localStorage.getItem("nbHyperballSaved"));
  //console.log("Load : money=",money,", nbPokeball=",nbPokeball,", nbSuperball=",nbSuperball,", nbHyperball=",nbHyperball);
  update();
}
function saveData() {
  localStorage.setItem("moneySaved", money);
  localStorage.setItem("nbPokeballSaved", nbPokeball);
  localStorage.setItem("nbSuperballSaved", nbSuperball);
  localStorage.setItem("nbHyperballSaved", nbHyperball);
  //console.log("Save : money=",money,", nbPokeball=",nbPokeball,", nbSuperball=",nbSuperball,", nbHyperball=",nbHyperball);
  alert("saved");
}
function resetData() {
  money = 0;
  nbPokeball = 0;
  nbSuperball = 0;
  nbHyperball = 0;
  //console.log("Reset : money=",money,", nbPokeball=",nbPokeball,", nbSuperball=",nbSuperball,", nbHyperball=",nbHyperball);
  saveData();
  update();
}
