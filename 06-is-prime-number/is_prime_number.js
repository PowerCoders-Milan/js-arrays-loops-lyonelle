// check if a number is prime or not
const isPrime = number => {
for(let i = number - 1; i> 1; i--){
    if (number % i === 0) {
        return false;
    } 
        
    }
    return true
}


const getPrimes = amount => {
    const primeNumbers = [];
  let i = 1 ;
  while (primeNumbers.length <= amount ) {
if(isPrime(i)) {
    primeNumbers.push(i);
}
i++;
  }
  return primeNumbers
}
//console.log(getPrimes(50).length);
console.log(getPrimes(7000))