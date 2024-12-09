const people = [ {
    name: "Alice", 
    address: 
    { city: "New York", 
    street: 
    { name: "Broadway", number: 123 } } },
     { name: "Bob", 
        address: 
        { city:"Los Angeles",
     street: 
     { name: "Sunset Boulevard", number: 456 } } } ];
     const result=people.map(({name:myName,address: {city:myCity="Unknown",street:{name:streetName="No street"}={}}={}})=>{
      return (`"${myName} lives in ${myCity} on ${streetName}"`);
     });

     console.log(result);