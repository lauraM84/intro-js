//1) create un oggetto studente per ogni partecipante al corso
//   l'oggetto dovrà avere le seguenti keys: name, surname, gender, marks, yob, nationality,
//   mettete tutti gli oggetti dentro un array

const lorenzo = {
    name: 'lorenzo',
    surname: 'puppo',
    yob: 1995,
    nationality: 'italy',
    gender: 'm',
    marks: [8, 9, 10],
}

const jan = {
    name: 'jan',
    surname: 'stigliani',
    yob: 2000,
    nationality: 'italy',
    gender: 'm',
    marks: [7, 7, 8],
}

const giovanni = {
    name: 'giovanni',
    surname: 'sussarellu',
    yob: 1981,
    nationality: 'italy',
    gender: 'm',
    marks: [7, 6, 8]
}

const sara = {
    name: 'sara',
    surname: 'de prà',
    yob: 1989,
    nationality: 'italy',
    gender: 'fluid',
    marks: [9, 6, 8]
}

const jeremias = {
    name: 'jeremias',
    surname: 'cedeno',
    yob: 2003,
    nationality: 'ecuador',
    gender: 'm',
    marks: [6, 10, 7]
}

const laura = {
    name: 'laura',
    surname: 'mazza',
    yob: 1984,
    nationality: 'italy',
    gender: 'f',
    marks: [4, 2, 6]
}

const eusebio = {
    name: 'eusebio',
    surname: 'veizi',
    yob: 1993,
    nationality: 'albanese',
    gender: 'peanut',
    marks: [5, 7, 6]
}

const hugo = {
    name: 'hugo',
    surname: 'martinez',
    yob: 1994,
    nationality: 'elSalvador',
    gender: 'f',
    marks: [10, 10, 8]
}

const allStudents = [lorenzo, jan, giovanni, sara, jeremias, laura, eusebio, hugo]
/* console.log(allStudents) */



//2) scrivete una funzione che restituisca l'età media degli studenti

const currentYear = 2025
function avgAge(arrayOfStudents) {
    let sumOfAges = 0

    arrayOfStudents.forEach(element => {      //element=student
        let age = currentYear - element.yob
        sumOfAges = sumOfAges + age
    });

    let avgAge = sumOfAges / arrayOfStudents.length  //usare const invece di let
    return avgAge
}

console.log("esercizio 2", avgAge(allStudents))


//3) scrivere una funzione che restituisca un array di stringhe
//   ogni stringa dovrà avere questo formato "nome/cognome"                          

function nameSurname(students) {
    let allData = []

    students.forEach(element => {
        const data = element.name + "/" + element.surname
        allData.push(data);

    });
    return allData
}
console.log("esercizio 3", nameSurname(allStudents))


//4) scrivete una funzione che restituisca la somma dei maschi e delle femmine      

function maleAndFemeale(students) {
    let males = 0
    let femeales = 0

    students.forEach(element => {
        let typeOfGender = element.gender

        if (typeOfGender === "m") {
            males++
        } else if (typeOfGender === "f") {
            femeales++
        }
    });
    return { males, femeales }
}
console.log("esercizio 4", maleAndFemeale(allStudents))


//5) scrivete una funzione che restituisca la media delle medie degli studenti

function avgOfAvgs(students) {
    let sumOfAvgs = 0

    students.forEach(element => {
        let sumOfMarks = 0
        let marks = element.marks
        marks.forEach(mark => {
            sumOfMarks = sumOfMarks + mark
        });
        let avg = sumOfMarks / marks.length

        sumOfAvgs = sumOfAvgs + avg
    });
    const result = sumOfAvgs / students.length
    return result
}
console.log("esercizio 5", avgOfAvgs(allStudents))



//6) scrivete una funzione che restituisca un oggetto così strutturato:
//   {nationality1:[student1Name, student2Name, ...], nationality2: [student1Name, student2Name, ...]...}

function groupByNationality(students) {
    const groupBy = {};
    students.forEach(element => {
        const nationality = element.nationality;
        if (groupBy[nationality] === undefined) {
            groupBy[nationality] = []
        }
        groupBy[nationality].push(element.name)
    });
    return groupBy
}
console.log("esercizio 6", groupByNationality(allStudents));

//7) replicare https://jessbayer.com/ 