// program to generate fibonacci series up to a certain number
const maxNumber = Math.ceil(Math.random()*200);

const getFibonacciSequence = maxNumber => {
    let  n1 = 0; n2 = 1; nextTerm = null;
        const fibonacciSequence = [n1, n2];
        nextTerm= n1 + n2
       
        // console.log("fibonacci di sequenza"); 
        // console.log(n1);
        // console.log(n2);

    while (nextTerm <= maxNumber) {
        fibonacciSequence.push(nextTerm);
        
		 console.log(nextTerm)
		n1 = n2
		n2 = nextTerm
		nextTerm = n1 + n2
	}
return fibonacciSequence;
}
getFibonacciSequence(maxNumber);




