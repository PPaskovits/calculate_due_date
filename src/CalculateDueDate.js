const START_HOUR = 9;
const END_HOUR = 17;

function isWorkingHours(date) {
    return date.getUTCHours() >= START_HOUR && 
          (date.getUTCHours() < END_HOUR  || 
          (date.getUTCHours() === END_HOUR && date.getUTCMinutes() === 0 && date.getUTCSeconds() === 0 && date.getUTCMilliseconds() === 0))
}

function isWeekday(date) {
    return (date.getUTCDay() > 0 && date.getUTCDay() < 6);
}

function validSubmitDate(submitDate) {
    return (submitDate instanceof Date && typeof submitDate.getMonth === 'function' && isWeekday(submitDate) && isWorkingHours(submitDate));
}

function addDay(date) {
  date.setDate(date.getDate() + 1);
}

function addWorkDays(date, days) {
    while (days) {
        addDay(date);
        if (isWeekday(date)) {
            --days;
        }
    }
}

function setToNextWorkDay(date) {
    addWorkDays(date, 1);
    date.setUTCHours(START_HOUR);
    date.setUTCMinutes(0);
    date.setUTCSeconds(0);
    date.setUTCMilliseconds(0);
}

function getRemaingWorkTime(date) {
    var day = new Date(date);
    day.setUTCHours(END_HOUR);
    day.setUTCMinutes(0);
    day.setUTCSeconds(0);
    day.setUTCMilliseconds(0);
    return day.getTime() - date.getTime();
}


function calculateDueDate(submitDate, turnaroundHours) {
    if (isNaN(turnaroundHours) || turnaroundHours < 0)
        throw new Error("InvalidTurnaroundTime")

    if (!validSubmitDate(submitDate))
        throw new Error("InvalidSubmitDate");

    var result = new Date(submitDate);

    var turnaroundMillis = turnaroundHours * 60 * 60 * 1000;
    while (turnaroundMillis > 0) {
        var remainingWorkTime = getRemaingWorkTime(result);
        var workTime = Math.min(remainingWorkTime, turnaroundMillis);
        result.setTime(result.getTime() + workTime);
        turnaroundMillis -= workTime;
        if (turnaroundMillis > 0) {
            setToNextWorkDay(result);
        }
    } 

    return result;
};

module.exports = {
    calculateDueDate: calculateDueDate
};
