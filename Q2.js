function towerHanoi(disks) {
  let value = 1;
  for (let i = 1; i <= disks; i++) {
    value *= 2;
  }
  return value - 1;
}
console.log(towerHanoi(19));
