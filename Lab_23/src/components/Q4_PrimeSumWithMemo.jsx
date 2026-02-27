import React, { useMemo, useState } from "react";

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

function Q4_PrimeSumWithMemo() {
  const [counter, setCounter] = useState(0);

  const sum = useMemo(() => {
    console.log("Calculating primes...");
    return calculatePrimeSum();
  }, []);

  return (
    <div style={{ border: "2px solid purple", padding: "10px" }}>
      <h2>Q4 - Prime Sum With useMemo</h2>
      <p>Sum: {sum}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Re-render ({counter})
      </button>
    </div>
  );
}

export default Q4_PrimeSumWithMemo;