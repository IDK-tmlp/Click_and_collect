function pull(nombre) {
  for (let i = 0; i < nombre; i++) {
    if (money >= 1000) {
      alert("PULLL");
      money -= 1000;
    } else {
      alert("Not enought money");
    }
  }
}
