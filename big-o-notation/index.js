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
