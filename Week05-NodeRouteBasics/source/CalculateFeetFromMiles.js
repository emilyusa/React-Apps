 var MyObject=(function(){
    'use strict';
    function MyObject(){
        console.log("MyObject constructor");
    }

    MyObject.prototype.transToFeet=function (userInput){
        return userInput*5280;
     };

    return MyObject;
 }());

exports.myObject=new MyObject();