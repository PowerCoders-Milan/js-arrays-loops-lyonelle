// function declaration
const nMultiplesOf = (number, limit) => {
    const multiples = [];
   let  i = 0 ;
   
    while (multiples.length <= limit ){ 
        if(i%number === 0) {
          multiples.push(i); 
           

       }
        
     
        i++;
    }
    
  return multiples
}

console.log(nMultiplesOf(2, 10))