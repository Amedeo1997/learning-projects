// somma di numeri che prenda due numeri e restituisca la loro somma
function somma(a, b) {
    return a + b;
}
console.log(somma(3, 4)); // 7

function isPari(n) {
  if (n % 2 === 0) {
    return true;
  } else {

  }
}

console.log(isPari(4)); // true
console.log(isPari(5)); // false

function rovesciaStringa(str) {
  return str.split('').reverse().join('');
}

console.log(rovesciaStringa('ciao')); // oaic

function cicloFor(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

cicloFor(10); // 0 1 2 3 4 5 6 7 8 9 10
