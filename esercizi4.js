//1) create un oggetto studente per ogni partecipante al corso
//   l'oggetto dovrà avere le seguenti keys: name, surname, gender, marks, yob, nationality,
//   mettete tutti gli oggetti dentro un array

const lorenzo = {
    name: 'lorenzo',
    surname: 'puppo',
    yob: 1995,
    nationality: 'italy',
    gender: 'm',
}

const Jan = {
    name: 'jan',
    surname: 'stigliani',
    yob: 2000,
    nationality: 'italy',
    gender: 'm'
}

const giovanni = {
    name: 'giovanni',
    surname: 'sussarellu',
    yob: 1981,
    nationality: 'italy',
    gender: 'm'
}

const sara = {
    name: 'sara',
    surname: 'de prà',
    yob: 1989,
    nationality: 'italy',
    gender: 'fluid'
}

const jeremias = {
    name: 'jeremias',
    surname: 'cedeno',
    yob: 2003,
    nationality: 'ecuador',
    gender: 'm'
}

const laura = {
    name: 'laura',
    surname: 'mazza',
    yob: 1984,
    nationality: 'italy',
    gender: 'f'
}

const eusebio = {
    name: 'eusebio',
    surname: 'veizi',
    yob: 1993,
    nationality: 'albanese',
    gender: 'peanut'
}

const hugo = {
    name: 'hugo',
    surname: 'martinez',
    yob: 1994,
    nationality: 'elSalvador',
    gender: 'f'
}

const allStudents = [lorenzo, Jan, giovanni, sara, jeremias, laura, eusebio, hugo]
console.log(allStudents)


//2) scrivete una funzione che restituisca l'età media degli studenti

function ageMean(array)
let average = 0;

for (let if = 0; if < allStudents.length; if++) {
    const element = array[if];

}

//3) scerivere una funzione che restituisca un array di stringhe
//   ogni stringa dovrà avere questo formato "nome/cognome"                           (mapping)

//4) scrivete una funzione che restituisca la somma dei maschi e delle femmine        (reduce)

//5) scrivete una funzione che restituisca la media delle medie degli studenti

//6) scrivete una funzione che restituisca un oggetto così strutturato:
//   {nationality1:[student1Name, student2Name, ...], nationality2: [student1Name, student2Name, ...]...}

//7) replicare https://jessbayer.com/ 