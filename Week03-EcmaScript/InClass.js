(function () {
    console.log("Immediately invoke with ES5");
})();


(() => {
    console.log("Immediate invocation ES6");
})();

const logger = (numbers) => {
    numbers.forEach((number) => {
        console.log(number);
    })
}

var numbers = ['four', 'five', 'six'];
logger(numbers);