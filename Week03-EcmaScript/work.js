function divider(title){
    console.log();
    console.log("===================");
    console.log(title);
    console.log("===================");
}

divider('Invoke Immediately');

((operator1,operator2)=>{
    const mathResult=(operator1+operator2)*12;
    console.log(mathResult);
})(4,6);

divider('Array and forEach');

((numbers) => {
    console.log('[')
    numbers.forEach((number) => {
        console.log(number+', ');
    })
    console.log(']')
})([0,1,1,2,3,5,8,13,21,34]);

divider('Array and for..of');

const primeNumbers = (numbers) => {
    console.log('[');
    for (let number of numbers) {
        console.log(number+', ');
    }
    console.log(']');
};

primeNumbers([2,3,5,7,11,13,17,19,23,29,31,37]);

divider('Property Enumeration');

const myObject = { firstName: 'Chunyan', lastName: 'Li',address:'4185 129th',city:'Bellevue',state:'WA',zip:'98006' };
const address = (myObject) => {
    for (let property in myObject) {
        if (myObject.hasOwnProperty(property)) {
            console.log(property+': '+myObject[property]);

        }
    }
};

address(myObject);

divider('ES6 Class');

class caculator {
    constructor(operanda,operandb) {
        this.a = operanda;
        this.b = operandb;
    }

    add(a,b) {
        return a+b;
    }

    substract(a,b){
        return a-b;
    }

    multiply(a,b){
        return a*b;
    }

    divide(a,b){
        return a/b;
    }
}

var mycaculation = new caculator();
console.log(mycaculation.add(2,3));
console.log(mycaculation.substract(5,2));
console.log(mycaculation.multiply(3,5));
console.log(mycaculation.divide(15,3));

