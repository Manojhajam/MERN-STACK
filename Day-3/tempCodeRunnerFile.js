customers.forEach(() => {
  const customerInTurn = tokenMachineTurnsOFCustomer.shift();
  console.log(`Customer in turn is: ${customerInTurn}`);
  console.log(`Customer in Queue: ${tokenMachineTurnsOFCustomer.join(",")}`);
});