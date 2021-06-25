function fibonacci(val) {
  
  let aux, initial=0, next=1;

  for(let i=0; i<val; i++) {
    aux = initial;
    console.log(`${initial}, `);
    initial += next;
    next = aux;
  }
  
  return 0;
}

fibonacci(10);
