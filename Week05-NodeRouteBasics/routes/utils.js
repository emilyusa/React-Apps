var Circum=(function(){
    'use strict';
    function Circum(){
        console.log("Circum constructor");
    }

    Circum.prototype.calculateCircumference =function (radius){
        return (2*radius*Math.PI).toFixed(2);
    };

    return Circum;
}());

exports.myCircum=new Circum();