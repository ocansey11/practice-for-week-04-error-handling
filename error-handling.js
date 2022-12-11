// 1.
function sum(array) {
  // create error within function
  if(!(array instanceof Array)){
    throw new Error('Type Error!. Input should be an array')
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Try function and catch error
try {
  let res = sum(null);
  console.log(res);
} catch (error) {
  console.error(error)
}


// 2.

// Your code here

  function sayName (name){
  if(typeof name !== "string"){
    throw Error("Invalid name! Must be a string!")
  }
  console.log(`${name}`)
}

// tests
  try {
    sayName("Alex");
    sayName(1);
  } catch (error) {
    console.log(error)
  }


3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet()
} catch (error) {
  // console.log(error)
  console.log('Hello World!')
}
