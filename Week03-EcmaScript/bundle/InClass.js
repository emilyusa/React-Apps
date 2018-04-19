"use strict";

(function () {
    console.log("Immediately invoke with ES5");
})();

(function () {
    console.log("Immediate invocation ES6");
})();

var logger = function logger(numbers) {
    numbers.forEach(function (number) {
        console.log(number);
    });
};

var numbers = ['four', 'five', 'six'];
logger(numbers);