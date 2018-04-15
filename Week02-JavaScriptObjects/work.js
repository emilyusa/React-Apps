//objects practice
//create person object and caculator object

function divider(title){
	console.log("===================");
        console.log(title);
        console.log("===================");
	}

var person={
	firstName: "Chunyan",
	lastName:"Li",
	fullName: function(){"use strict";
		return this.firstName+" "+this.lastName;
		}
	};

divider("Person");
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());

var caculator={
	operand01: -1,
	operand02: -1,
	add: function(){"use strict";
		return this.operand01+this.operand02;		
		},
	substract: function(){"use strict";
		return this.operand01-this.operand02;
		}
	};
	
caculator.multiply=function(){"use strict";
	return this.operand01*this.operand02;
	};
	
caculator.operand01 = person.firstName.length;
caculator.operand02 = person.lastName.length;

divider("Caculator");
console.log("operand01="+caculator.operand01);
console.log("operand02="+caculator.operand02);
console.log("Add: "+caculator.add());
console.log("Subtract: "+caculator.substract());
console.log("Multiply: "+caculator.multiply());
