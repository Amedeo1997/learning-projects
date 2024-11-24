function reverseString(str) {
  return str.split('').reverse().join('');
  console.log(str);
}
reverseString("hello");

function countVowels(str) {
  return str.match(/[aeiou]/gi).length;
  console.log(str);
}
countVowels("hello");
