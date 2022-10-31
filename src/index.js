const fibonacci = (num) => {
  let num1 = 0;
  let num2 = 1;
  let total;
  for (let i = 1; i < num; i++) {
    console.log(num1);
    total = num1 + num2;
    num1 = num2;
    num2 = total;
  }
  return num2;
};
console.log(fibonacci(9));
