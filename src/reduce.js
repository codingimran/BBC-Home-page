const nums = [12, 13, 14, 15, 16, 17, 18, 19, 20];
nums.map((num) => num * 2);
nums.filter((num) => num > 20);
nums.find((num) => num > 16);
const sums = nums.reduce((sum, num) => {
  console.log(sum, num);
  return sum + num;
}, 0);
console.log(sums);
