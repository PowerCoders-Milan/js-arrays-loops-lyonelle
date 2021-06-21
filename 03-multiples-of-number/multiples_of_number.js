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
        // console.log(multiplesOf(2, 20))
 
 const multiplesOfTwo = multiplesOf(2, 200);    
console.log(multiplesOfTwo );
