
const gridaSchiappa = function () {
    console.log('schiappa!!!')
}

console.log(typeof gridaSchiappa)

gridaSchiappa()

// const gridaSchiappa2 = function (name) {
//     console.log(name + " schiappa")
// }



function gridaSchiappa2(name) {
    console.log(name + ' schiappa!!')
}

gridaSchiappa2('pippo')
gridaSchiappa2(2)
gridaSchiappa2(true)


const logDouble = (number) => console.log(number * 2)

logDouble(20)

function sum(number1, number2) {
    const sum = number1 + number2;
    return sum;
}

const sumArrow = (n1, n2) => n1 + n2;

const sumArrow2 = (n1, n2) => {
    const sum = n1 + n2;
    return sum
}
console.log(sum(10, 8))

const result = sum(20, 12)
console.log(result)

const result2 = sum(20, 30, 50, 120)  //prende comunque solo i primi due valori
console.log(result2);

const result3 = sum(20)  //il econdo valore non inserito lo interpreta come undefined, restituirà NaN
console.log(result3);