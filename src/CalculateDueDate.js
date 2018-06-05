function IsWorkingHours(date) {
    return date.getUTCHours() >= 9 && (date.getUTCHours() < 17  || date.getUTCMinutes() === 0)
}

function IsWeekday(date) {
    return (date.getUTCDay() > 0 && date.getUTCDay() < 6);
}

function ValidSubmitDate(submitDate) {
    return (IsWeekday(submitDate) && IsWorkingHours(submitDate));
}


function CalculateDueDate(submitDate, turnaroundTime) {
    if (!ValidSubmitDate(submitDate))
        throw new Error("InvalidSubmitDate");

    return new Date();
};

module.exports = {
    CalculateDueDate: CalculateDueDate
};
