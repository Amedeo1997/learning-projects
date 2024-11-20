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
