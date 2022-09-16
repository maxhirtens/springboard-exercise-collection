it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 5,
    rate: 3
  }
  expect(calculateMonthlyPayment(values)).toEqual('179.69');
  values.amount = 0;
  expect(calculateMonthlyPayment(values)).toEqual('0.00');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10000.56,
    years: 5,
    rate: 3.98
  }
  expect(calculateMonthlyPayment(values)).toEqual('184.09')
});

it("should not return a negative amount", function() {
  const values = {
    amount: 10000,
    years: 5,
    rate: -3
  }
  expect(calculateMonthlyPayment(values)).toEqual('154.27')
});
