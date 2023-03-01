function pull(nombre) {
  if (money >= nombre * 1000) {
    let tab = [];
    for (let i = 0; i < nombre; i++) {
      tab.push(i);
      money -= 1000;
    }
    alert(`You pulled ${tab}`);
  } else {
    alert("Not enougth money");
  }
}
