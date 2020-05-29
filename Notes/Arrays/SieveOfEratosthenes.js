const primeFinder = (n) => {
  //loop from 2 until n, and test each number that is < square root of n, and cross off all its multiples up to n as not prime
  //start with array; indices 0 and 1 will be automatically set to false
  //can stop at square root: if x * y <= n is to be true, and x > Math.sqrt(n), then y must be < Math.sqrt(n) 
  //(which we will have already thus tested primality for) and vice versa
  let allNums = [0,0];
  let primes = [];
  for (let i = 2; i < n + 1; i++) {
    allNums.push(1);
  }
  for (let i = 2; i <= Math.pow(n, 0.5); i++) {
    if (allNums[i] === 1) {
      let j = 2; 
      while ((i * j) <= n) {
        allNums[i * j] = 0;
        j++;
      }
    }
  }
  for (let k = 0; k < allNums.length; k++) {
    if (allNums[k] === 1) {
      primes.push(k);
    }
  }
  return primes;
}