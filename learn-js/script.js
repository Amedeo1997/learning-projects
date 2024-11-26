function canDrive(age) {
  if (age < 18) {
    console.log(`hai ${age} anni! non puoi guidare.`)
  } else if (age >= 18 && age < 70) {
    console.log(`hai ${age} anni! puoi guidare`);
  } else {
    console.log(`hai ${age} anni! Sei troppo vecchio meglio se smetti`);
  }
}

canDrive(17);
canDrive(19);
canDrive(71);

function isPari(n) {
  if (n % 2 === 0) {
    console.log(`${n} e' un numero pari`);
  } else {
    console.log(`${n} e' un numero dispari`);
  }
}

isPari(10);
isPari(9);
