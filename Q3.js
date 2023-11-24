function countBoomerangs(arr) {
  //   return arr
  //     .map((el, i, arr) => {
  //       return arr[i] === arr[i + 2] && arr[i] !== arr[i + 1];
  //     })
  //     .filter((el) => el === true).length;
  return arr.filter((el, i, arr) => {
    return arr[i] === arr[i + 2] && arr[i] !== arr[i + 1];
  }).length;
}
console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
