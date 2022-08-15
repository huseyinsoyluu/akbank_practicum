const oddishOrEvenish = (number) => {
  _num = number.toString();
  let total = [..._num].reduce((prev, sum) => prev + +sum, 0);
  console.log(total % 2 === 0 ? "Even" : "Odd");
};

oddishOrEvenish(43); // Odd

oddishOrEvenish(373); // Odd

oddishOrEvenish(4433); // Even
