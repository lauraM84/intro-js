console.log("hello word");

console.log("ciao mondo");

//typeof  ci dice cosa è un elemento

console.log(typeof 5);
console.log(typeof "hello word");
console.log(typeof true);

//NUMBER

5 //integer
7.68 //float

//310000 es di esponenziale
3.1e5

Infinity //n più grande possibile

    - Infinity //n più piccolo possibile

NaN //NotaNumber anche se poi è u numero, ma è un'operazione matematica che produce qualcosa che non è proprio un numero, es divisione per zero
console.log(typeof NaN);
console.log(0 / 0);  //NaN

console.log("somma 5 + 7", 5 + 7, "ciao"); //somma
console.log("moltiplica 5 x 7", 5 * 7);  //moltiplicazione
console.log("dividi 5 / 7", 5 / 7);  //divisione
console.log("sottrai 5 - 7", 5 - 7);  //sottrazione
console.log("negativo -7", - 7);
console.log("eleva potenza 2**5", 2 ** 5);  //eleva a 

//modulo - resto della divisione intero
console.log('modulo 5 % 2', 5 % 2);
console.log('modulo 12 % 5', 12 % 5);

//MATH 
console.log('radice quadrata 9', Math.sqrt(9));
console.log('arrotondamento 9.6', Math.round(9.6));


//STRING
//`` alt+96
console.log("234", 234);
console.log("io sono una stringa");
console.log('io sono una stringa');
console.log('io sono una "stringa"');
console.log("l'apostro è importante");
console.log("\"l'apostrofo\" è importante");
console.log("\"l'apostrofo\" è importante\nnon ne posso fare a meno");

console.log(`"l'apostrofo" è importante
    non ne posso fare a meno`);

console.log(`la somma di 5 e 7 è ${5 + 7}`);

console.log('ciao a tutti' + ' ' + 'mi chiamo pippo');

//BOOLEAN  operatori logici true e false
console.log("vero", true);
console.log("falso", false);

//not false o true
console.log("not vero", !true);
console.log("not false", !false);

//and
console.log("true and true", true && true);
console.log("true and false", true && false);
console.log("false and true", false && true);
console.log("false and false", false && false);

//or
console.log("true or true", true || true);
console.log("true or false", true || false);
console.log("false or true", false || true);
console.log("false or false", false || false);

//undefind e null
console.log(typeof undefined);  //non definito mai in precedenza
console.log(typeof null); //forzare un vuoto

//operatori di confronto 

//ugualianza == / ===
console.log("5 è uguale a 5", 5 == 5);
console.log("5 è uguale a 6", 5 == 6);

console.log("5 è uguale a 5", 5 === 5);
console.log("5 è uguale a 6", 5 === 6);

console.log("la stringa 5 è uguale al numero 5", "5" == 5);
console.log("la stringa 5 è uguale al numero 5", "5" === 5);

//disugualianza
//ugualianza != / !==
console.log("la stringa 6 è diversa dal numero 6", "6" != 6);
console.log("la stringa 6 è diversa dal numero 6", "6" !== 6);

//confronto   < / <= / > />=
console.log("5 è minore di 6", 5 < 6);
console.log("5 è maggiore di 6", 5 > 6);

console.log("a è maggiore di b", "a" > "b");
console.log("a è maggiore di b", "a" < "b");
console.log("a è maggiore di A", "a" > "A");
console.log("b è maggiore di A", "b" < "A");


//variabili  - var, let, const  scatola a cui do un valore

let pippo = 5;  //dichiarazione standard, scatola che può essere riutilizzata

console.log(pippo);
console.log(pippo + 2);

pippo = 'stopazzo';
console.log(pippo);

const pluto = 9;  //è un valore costante, non può essere cambiata come let

console.log(pluto);
console.log(pluto + 2);

//pluto = 'stopazzo';
//console.log(pluto);


//console.log(paperino + 10);
//var paperino = 5; non usare var! maiiii! va usato let

//CamelCase  per dichiarare variabili con nome composta da più parole (parole con prima lettera in maiuscolo)
const numeroDaElevareAPotenza = 9;
const esponenteDellaPotenza = 2;

console.log(numeroDaElevareAPotenza ** esponenteDellaPotenza);

//short circuit operator 

const qui = 5 || 6;
console.log(qui);

const qui2 = false || 6;  //doppio or controlla la falsità
console.log(qui2);

const qua = 5 ?? 6;
console.log(qua);

const qua2 = false ?? 6;
console.log(qua2);

const qua3 = undefined ?? 6; //doppio interrogativo controlla se è un vuoto
console.log(qua3);

//Operatore ternario ? :

const quo = (5 > 4) ? 10 : 20;
console.log(quo);

const quo2 = (5 < 4) ? 10 : 20;
console.log(quo2);




//const quo = false || 6;
//console.log(quo);


