function pull(nombre) {
  if (money >= nombre * 1000) {
    let tab = [];
    for (let i = 1; i < nombre + 1; i++) {
      dropRarity = Math.random() * 100;
      if (dropRarity <= 3) {
        tab.push(`${i} : SSR 3%`);
        money -= 1000;
      } else if (dropRarity <= 10) {
        tab.push(`${i} : SR 7%`);
        money -= 1000;
      } else if (dropRarity <= 40) {
        tab.push(`${i} : R 30%`);
        money -= 1000;
      } else if (dropRarity <= 100) {
        tab.push(`${i} : C 60%`);
        money -= 1000;
      }
    }
    alert(`${tab}`);
  } else {
    alert("Not enougth money");
  }
}
