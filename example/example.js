var calculateDueDate = require("../src/CalculateDueDate.js").calculateDueDate;

var taskDate = new Date(Date.UTC(2018, 5, 8, 12, 30));
// var taskDateInvalid = new Date(Date.UTC(2018, 5, 5, 7, 30));

var turnaroundTime = 8;
console.log("Task/Bug report date: " + taskDate.toLocaleString());
console.log("Turnaround Time: " + turnaroundTime + " hour(s)\n");

try {
	var dueDate = calculateDueDate(taskDate, turnaroundTime);
	
	// var dueDateInvalid = calculateDueDate(taskDateInvalid, turnaroundTime);
	
	console.log("Due date: " + dueDate.toLocaleString());
} catch (e) {
	console.log("Some error happened: "+e);
}
