function divider(title){
	console.log("===================");
    console.log(title);
    console.log("===================");
	}

var MyObject1={
	firstName: "George",
	lastName:"Washington",
	fullName: function(){"use strict";
		return this.firstName+" "+this.lastName;
		}
	};

divider("Person")
console.log(MyObject1.firstName);
console.log(MyObject1.lastName);
console.log(MyObject1.fullName());

var MyObject2={
	operand01: 6,
	operand02: 10
	};

divider("Caculator");
console.log("operand01="+MyObject2.operand01);
console.log("operand02="+MyObject2.operand02);
console.log("Add: "+(MyObject2.operand01+MyObject2.operand02));
console.log("Subtract: "+(MyObject2.operand01-MyObject2.operand02));
console.log("Multiply: "+(MyObject2.operand01*MyObject2.operand02));
