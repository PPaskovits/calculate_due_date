# calculate_due_date
Calculate Due Date for Emarsys

Installation:
npm install

usage:
var calculateDueDate = require("../src/CalculateDueDate.js").calculateDueDate;

var taskDate = new Date(Date.UTC(2018, 5, 8, 12, 30));

var turnaroundTime = 8;

try {
	var dueDate = calculateDueDate(taskDate, turnaroundTime);
} catch (e) {
	console.log("Some error happened: "+e);
}


Testing:
npm test