/* class Human {
    #yob;                ////#->variabile protetta
    constructor(name, surname, yob, nationality, gender, subject, students = []) {
        this.name = name;
        this.surname = surname;
        this.#yob = yob;
        this.nationality = nationality;
        this.gender = gender;
    }
    /////getter e settet sono strumenti per accedere alle variabili private
    get yob() {         ////crea una variabile in sola lettura
        return this.#yob
    }
    set yob(value) {    ////può fare dei controlli prima di assegnare yob
        if (value > year) {
            const now = new Date();
            const year = now.getFullYear();
            console.log('errore: data futura')
        } else if (value < (year - 150)) {
            console.log('errore: questo è un vampiro')
        } else {
            this.#yob = value;
        }
    }

    #getAge() {       ////#->variabile protetta (evitare problemi di scrittura nell'inserire dati)
        const now = new Date();
        const year = now.getFullYear();
        const age = year - this.#yob;
        return age;
    }

    toString() {
        const humanStr = `
        nome:${this.name}
        cognome:${this.surname}
        età:${this.#getAge()}`
        return humanStr;
    }
}

class Student extends Human {

    constructor(name, surname, yob, nationality, gender, marks = []) {
        super(name, surname, yob, nationality, gender)
        this.marks = marks;
    }

    addMark(mark) {
        this.marks.push(mark);
    }

    calculateMean() {
        if (this.marks.length === 0) {
            return -1;
        }

        let sumOfMarks = 0;
        for (let i = 0; i < this.marks.length; i++) {
            const mark = this.marks[i];

            sumOfMarks += mark;
        }
        const mean = sumOfMarks / this.marks.length;
        return mean;
    }

    getBestMark() {
        let best = -1;
        for (const mark of this.marks) {
            if (mark > best) {
                best = mark;
            }
        }
        return best;
    }

    toString() {
        let studentStr = `${super.toString()}
        media voti:${this.calculateMean()}`
        return studentStr;
    }

    compareTo(otherStudents) {
        const name1 = this.name;
        const name2 = otherStudents.name;

        if (name1 === name2) {
            const yob1 = this.yob;
            const yob2 = otherStudents.yob;
            return yob1 - yob2;
        }

        return name1.localeCompare(name2);
    }
}

class Teacher extends Human {
    constructor(name, surname, yob, nationality, gender, subject, students = []) {
        super(name, surname, yob, nationality, gender)
        this.subject = subject;
        this.students = students;
    }

    toString() {
        const teacherStr = `${super.toString()}
        materia: ${this.subject}
        numero di studenti:${this.students.length}`
        return teacherStr;
    }
}



const student1 = new Student('laura', 'mazza', '1984', 'it', 'f', [8, 7]);
student1.addMark(2);
const student2 = new Student('eusebio', 'veizi', '1993', 'alb', 'm', [6, 6.5]);
const student3 = new Student('lorenzo', 'puppo', '1995', 'it', 'm',);
const students = [student1, student2, student3]

const teacher = new Teacher('andrea', 'asioli', 1978, 'it', 'm', 'CS', students)

console.log(student1.toString());
console.log(student2.toString());
console.log(student3.toString());
console.log(teacher.toString());

students.sort((s1, s2) => s1.compareTo(s2));

console.log(student1.getBestMark());
console.log(student3.getBestMark()); */

/* class Circle {
    static PI = 3.14

    constructor(centerX, centerY, r) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.r = r;
    }

    get diameter() {
        return this.r * 2;
    }

    calculatePerimeter() {
        return 2 * this.r * Circle.PI;
    }

    calculateArea() {
        return (this.r ** 2) * Circle.PI;
    }
}


const circle1 = new Circle(0, 0, 10)
console.log(circle1.diameter)
console.log(circle1.calculatePerimeter())

const circle2 = new Circle(0, 0, 20)
console.log(circle2.diameter)
console.log(circle2.calculateArea()) */

class Math2 {

    /**
     * The function "sum" takes two parameters and returns their sum.
     * @param {number} n1 - The parameter `n1` is the first number that will be added in the `sum` function.
     * @param {number} n2 - The parameter `n2` is the second number that will be added to `n1` in the `sum`
     * function.
     * @returns The `sum` function is returning the sum of the two input parameters `n1` and `n2`.
     */
    static sum(n1, n2) {
        return n1 + n2;
    }

    static absolute(n) {
        if (n >= 0) {
            return n;
        }
        return n * -1;
    }

    static cube(n) {
        return n * n * n;
    }
}

console.log(Math2.cube(5));
console.log(Math2.sum(Math2.cube(5), Math2.cube(Math2.absolute(-3))));
///////////////////POLIMORFISMO
/* class Animal {

    constructor(name) {
        this.name = name;
    }

    sayName() {
        return `I'm ${this.name}`;
    }

    speak() {
        return '?';
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        return 'bau';
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        return 'miao';
    }
}

const cat1 = new Cat('laura');
const cat2 = new Cat('lorenzo');
const dog1 = new Dog('giovanni');
const dog2 = new Dog('jan');
const cat3 = new Cat('hugo');
const cat4 = new Cat('eusebio');
const cat5 = new Cat('jeremias');

const animals = [cat1, cat2, dog1, dog2, cat3, cat4, cat5];

for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];

    console.log(animal.sayName(), animal.speak())

} */

