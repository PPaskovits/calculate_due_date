# calculate_due_date
Calculate Due Date for Emarsys


Installation:
----------------
```
npm install
```

Usage:
----------------

calculateDueDate(submitDate, turnaroundTime);
 - submitDate should be Date type
 - turnaroundTime is non-negative number

 - Throws "InvalidSubmitDate" if bug report/task submit date is not valid.
 - Throws "InvalidTurnaroundTime if something wrong with Ti
 

Example:
----------------
```
var calculateDueDate = require("../src/CalculateDueDate.js").calculateDueDate;

var taskDate = new Date(Date.UTC(2018, 5, 8, 12, 30));

var turnaroundTime = 8;

try {
	var dueDate = calculateDueDate(taskDate, turnaroundTime);
} catch (e) {
	console.log("Some error happened: "+e);
}
```

Testing:
----------------
```
npm test
```