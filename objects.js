//objects --> struttura dati in cui vengono associati dei valori a delle key (key-values). Si inizializza con graffe
// mappiamo degli oggetti nel mondo reale
/* const emptyObj = {};

const student = {
    name: "andrea",
    surname: "asioli",
    yob: 1978,
    marks: [9, 10, 8],
    address: {
        street: "via canneto il curto",
        streetNumber: 12,
        cap: 16123
    },
    isMarried: false
}

console.log(student);

console.log(student.name);           //accesso a un dato(value) preciso
console.log(student["surname"]);     //accesso a un dato(value) preciso
console.log(student.address.street); //gerarchicamente */


/* const startingObj = {}

console.log(startingObj);

startingObj.name = "starting Object"
startingObj.creationDate = "21/02/2025"

console.log(startingObj); */

/* const book1 = {
    title: "eloquent JS",
    author: "Marijn H",
    edition: "4th",
    yop: 2024,
    isAvailable: true
} */

/* for (const key in book1) {
    if (Object.prototype.hasOwnProperty.call(book1, key)) {
        const values = book1[key];
        console.log(`il valore associato alla chiave ${key} è ${values}`)

    }
} */


/* const arrayOfKeys = Object.keys(book1); //restituisce tutte le keys di un oggetto
console.log(arrayOfKeys)

const arrayOfValues = Object.values(book1);
console.log(arrayOfValues);

const arrayOfEntries = Object.entries(book1);
console.log(arrayOfEntries); */


//const number1 = 6
//number1 = 12 ; //ERROREEEEE èuna Costante!

/* book1 = {
    title: "odissea",
    author: "Omero",
    edition: 112000,
    yop: 2023,
    isAvailable: false
} */

/* Object.freeze(book1)

book1.title = "odissea";
book1.author = "Omero";

console.log(book1) */

/* const book2 = book1;

book2.title = 'le porno avventure di biancaneve';
console.log(book1) */

const student = {
    name: "andrea",
    surname: "asioli",
    yob: 1978,
    marks: [9, 10, 8],
    address: {
        street: "via canneto il curto",
        streetNumber: 12,
        cap: 16123
    },

}
console.table(JSON.stringify(student));

student.name = "andreino";
student.address.streetNumber = 1564135121;
console.table(JSON.stringify(student))

const studentString = '{"name":"giovanni","surname":"sussarello","yob":1981,"marks":[9,10,8],"address":{"street":"via ccalda","streetNumber":21,"cap":16123}}'
const student2 = JSON.parse(studentString);

console.log(student2);
console.log(student2.surname)