import React from "react";

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function calculatePrimeSum() {
  let count = 0;
  let num = 2;
  let sum = 0;

  while (count < 5000) {
    if (isPrime(num)) {
      sum += num;
      count++;
    }
    num++;
  }

  return sum;
}

function Q3_PrimeSum() {
  const sum = calculatePrimeSum();

  return (
    <div style={{ border: "2px solid red", padding: "10px" }}>
      <h2>Q3 - Prime Sum (No Memo)</h2>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default Q3_PrimeSum;