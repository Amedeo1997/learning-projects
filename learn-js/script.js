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

function dayOfTheWeek(day) {
  switch (day) {
    case "lunedì":
      console.log(`e' ${day}! Inizia la settimana`);
      break;

    case "martedì":
      console.log(`e' ${day}! Ancora un po' di fatica`);
      break;

    case "mercoledì":
      console.log(`e' ${day}! Meta settimana andata dai`);
      break;

    case "giovedì":
      console.log(`e' ${day}! Non mollare ci sei quasi`);
      break;
      case "venerdì":
        console.log(`e' ${day}! Siamo alla fine!!!`);
        break;

    case "sabato":
    case "domenica":
        console.log(`e' ${day}! Buon weekend :)`);
        break;
   }
}

dayOfTheWeek("sabato");
dayOfTheWeek("domenica");
dayOfTheWeek('lunedì');
dayOfTheWeek('martedì');
dayOfTheWeek('mercoledì');
dayOfTheWeek('giovedì');
dayOfTheWeek('venerdì');

function comparareValori(a, b) {
  if (a <= b && a === b) {
    console.log(`${a} e ${b} sono lo stesso numero`);
  } else if ( a >= b || a <= b ) {
    console.log("non sono lo stesso numero");
  } else {
    console.log("non hanno valore");
  }
}


comparareValori(1, 1);
comparareValori(1, 2);
comparareValori(2, 1);

function numberToTen() {
  for (let i = 0; i <= 10; i++) {
    if (i === 11) break;
    console.log(i);
  }
}

//numberToTen();

function numberSum() {
  let i = 0
  let b = 1
  while (i <= 100) {
    console.log(`${i + b}`);
    i++
    b++
  }
}

//numberSum();

function numeriDispari() {
  for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i)
  }
}

//numeriDispari();

let numbers = [3, 7, 12, 45, 23];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 20) {
    console.log(`trovato: ${numbers[i]}`);
    break;
  }
}

// Numero segreto da indovinare
const numeroSegreto = 7;

// Variabile per memorizzare il tentativo dell'utente
let tentativo;

// Ciclo do...while
do {
    // Chiediamo all'utente di inserire un numero
    tentativo = parseInt(prompt("Indovina il numero (tra 1 e 10):"));

    // Controlliamo il tentativo
    if (tentativo > numeroSegreto) {
        console.log("Troppo alto! Riprova.");
    } else if (tentativo < numeroSegreto) {
        console.log("Troppo basso! Riprova.");
    }

} while (tentativo !== numeroSegreto); // Continua finché l'utente non indovina

// Quando il ciclo termina
console.log("Complimenti! Hai indovinato il numero:", numeroSegreto);
