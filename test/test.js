var chai = require('chai');
var assert = require('chai').assert;
var calculateDueDate = require("../src/CalculateDueDate.js").calculateDueDate;

describe('Calculate Due Date Test', function() {
    describe('Simple 8 hours due date next day', function() {
        it('should be equal ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 5, 12, 30));
            var date = calculateDueDate(taskDate, 8);
            var dueDate = new Date(Date.UTC(2018, 5, 6, 12, 30));
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('Simple 4 hours due date next day', function() {
        it('should be equal ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 5, 16, 30));
            var date = calculateDueDate(taskDate, 4);
            var dueDate = new Date(Date.UTC(2018, 5, 6, 12, 30));
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('Same day 4 hours due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 5, 9, 0));
            var date = calculateDueDate(taskDate, 4);
            var dueDate = new Date(Date.UTC(2018, 5, 5, 13, 0));
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('Same day 8 hours due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 5, 9, 0));
            var date = calculateDueDate(taskDate, 8);
            var dueDate = new Date(Date.UTC(2018, 5, 5, 17, 0));
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('Simple 16 hours due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 5, 12, 30));
            var date = calculateDueDate(taskDate, 16);
            var dueDate = new Date(Date.UTC(2018, 5, 7, 12, 30));
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('Simple 20 hours due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 5, 12, 30));
            var date = calculateDueDate(taskDate, 20);
            var dueDate = new Date(Date.UTC(2018, 5, 7, 16, 30));
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('Friday 16 hours due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 8, 9, 0));
            var date = calculateDueDate(taskDate, 16);
            var dueDate = new Date(Date.UTC(2018, 5, 11, 17, 0));
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('Friday 20 hours due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 8, 9, 0));
            var date = calculateDueDate(taskDate, 20);
            var dueDate = new Date(Date.UTC(2018, 5, 12, 13, 0));
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('Weekday 17pm 8hours same day due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 5, 17, 0));
            var date = calculateDueDate(taskDate, 8);
            var dueDate = new Date(Date.UTC(2018, 5, 6, 17, 0));
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('End year due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(Date.UTC(2018, 11, 31, 12, 30));
            var date = calculateDueDate(taskDate, 16);
            var dueDate = new Date(Date.UTC(2019, 0, 2, 12, 30));
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('Weekday invalid submit date 1', function() {
        it('should throw InvalidSubmitDate ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 8, 8, 59));
            chai.expect(() => {
                calculateDueDate(taskDate, 16);
            }).to.throw(Error, "InvalidSubmitDate");
        });
    });

    describe('Weekday invalid submit date 2', function() {
        it('should throw InvalidSubmitDate ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 8, 17, 30));
            chai.expect(() => {
                calculateDueDate(taskDate, 16);
            }).to.throw(Error, "InvalidSubmitDate");
        });
    });

    describe('Weekend invalid submit date 1', function() {
        it('should throw InvalidSubmitDate ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 9, 9, 30));
            chai.expect(() => {
                calculateDueDate(taskDate, 16);
            }).to.throw(Error, "InvalidSubmitDate");
        });
    });

    describe('Weekend invalid submit date 2', function() {
        it('should throw InvalidSubmitDate ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 10, 16, 30));
            chai.expect(() => {
                calculateDueDate(taskDate, 16);
            }).to.throw(Error, "InvalidSubmitDate");
        });
    });    

    describe('Invalid turnaround time', function() {
        it('should throw InvalidTurnaroundTime ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 9, 9, 30));
            chai.expect(() => {
                calculateDueDate(taskDate, 'text');
            }).to.throw(Error, "InvalidTurnaroundTime");
        });
    });

    describe('Not a date object', function() {
        it('should throw InvalidSubmitDate ', function() {
            var taskDate = 'not a date';
            chai.expect(() => {
                calculateDueDate(taskDate, 1);
            }).to.throw(Error, "InvalidSubmitDate");
        });
    });

    describe('Performance test', function() {
        it('should not exceed time limit ', function() {
            var startTime = Date.now();
            var taskDate = new Date(Date.UTC(2018, 5, 8, 9, 0));
            var date = calculateDueDate(taskDate, 2000000);
            var endTime = Date.now();
            console.log(endTime - startTime);
            assert.isBelow(endTime - startTime, 1000);
        });
    });
});