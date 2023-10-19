function calculateInterest(principalAmt, interestRate, monthsOfPlacement) {
  const step1 = principalAmt * (interestRate / 100);
  const step2 = (step1 / 365) * 31;
  return step2 * monthsOfPlacement;
}

console.log(calculateInterest(5000, 3.85, 6));
