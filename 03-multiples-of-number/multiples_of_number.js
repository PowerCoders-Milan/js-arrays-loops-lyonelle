// define your function here

//const multiplesOfNumber = multiplesOf(number)
const multiplesOf = (number, limit) => {
    const multiples = [];
     for ( i = 0; i <limit; i++){
      if (i%number === 0) { 

        multiples.push(i);
     } 
       
     
    }    
      return multiples;     
        }
 
 const multiplesOfTwo = multiplesOf(4, 18)   ;    
console.log(multiplesOfTwo );