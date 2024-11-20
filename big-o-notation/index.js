// Learning Big O Linear Notation O(n);
const nemo = ['nemo'];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel",
  "squirt", "darla", "hank"];
 const large = new Array(10000).fill("nemo");

 function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!');
    }
  }
 }

  findNemo(large); // O(n) --> Linear Time

 // Learning Big O Constant Time O(1);

  const boxes = [1,2,3,4,5];

  function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
  }

  logFirstTwoBoxes(boxes); // O(2) --> Constant Time

  function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for (let i = 0; i < input.length; i++) { // O(n)
      anotherFunction(); // O(n)
      let stranger = true; // O(n)
      a++; // O(n)
    }
    return a; // O(1)
  }

  funChallenge(); // O(3 + 4n) --> O(n)

  // What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// Big O = 4 + 7n = O(n)
