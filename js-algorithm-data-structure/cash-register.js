function checkCashRegister(price, cash, cid) {
  let change = cash * 100 - price * 100;  // Calculate the total change needed in cents.
  let cidTotal = 0;  // Initialize the total amount in the cash register.

  // Calculate the total amount in the cash register by summing up each denomination's value.
  for (let elem of cid) {
    cidTotal += elem[1] * 100;  // Convert the amount to cents and add to cidTotal.
    console.log(cidTotal);  // Log the cumulative total as we iterate through the denominations.
  }

  if (change > cidTotal) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };  // Not enough money in the register.
  } else if (change === cidTotal) {
    return { status: "CLOSED", change: cid };  // Exactly enough money in the register.
  } else {
    let answer = [];  // Initialize an array to store the change denominations.

    cid = cid.reverse();  // Reverse the order of denominations for easier processing.

    // Define the monetary units and their corresponding values in cents.
    let moneyUnits = {
      "ONE HUNDRED": 10000,
      "TWENTY": 2000,
      "TEN": 1000,
      "FIVE": 500,
      "ONE": 100,
      "QUARTER": 25,
      "DIME": 10,
      "NICKEL": 5,
      "PENNY": 1
    };

    // Iterate through the denominations in the cash register.
    for (let elem of cid) {
      let holder = [elem[0], 0];  // Create a placeholder to store the change for each denomination.

      elem[1] = elem[1] * 100;  // Convert the amount in the denomination to cents.

      // Keep giving out the highest denomination coins until change becomes smaller.
      while (change >= moneyUnits[elem[0]] && elem[1] > 0) {
        change -= moneyUnits[elem[0]];
        elem[1] -= moneyUnits[elem[0]];
        holder[1] += moneyUnits[elem[0]] / 100;
      }

      // If we gave out some change for this denomination, add it to the answer.
      if (holder[1] > 0) {
        answer.push(holder);
      }
    }

    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };  // Unable to provide exact change.
    }

    return { status: "OPEN", change: answer };  // Provide the remaining change in specific denominations.
  }
}

// Example usage of the function with specific inputs.
checkCashRegister(
  19.5,
  20,
  [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]
);
