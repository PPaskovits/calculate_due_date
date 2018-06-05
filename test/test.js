var chai = require('chai');
var assert = require('chai').assert;
var CalculateDueDate = require("../src/CalculateDueDate.js").CalculateDueDate;

describe('Calculate Due Date Test', function() {
    describe('Simple 8 hours due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(2018, 06, 05, 12, 30);
            var date = CalculateDueDate(taskDate, 8);
            var dueDate = new Date(2018, 06, 06, 12, 30);
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('Same day 8 hours due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(2018, 06, 05, 09, 00);
            var date = CalculateDueDate(taskDate, 8);
            var dueDate = new Date(2018, 06, 05, 17, 00);
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('Simple 16 hours due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(2018, 06, 05, 12, 30);
            var date = CalculateDueDate(taskDate, 16);
            var dueDate = new Date(2018, 06, 07, 12, 30);
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('Weekend 16 hours due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(2018, 06, 08, 12, 30);
            var date = CalculateDueDate(taskDate, 16);
            var dueDate = new Date(2018, 06, 12, 12, 30);
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('End year due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(2018, 12, 31, 12, 30);
            var date = CalculateDueDate(taskDate, 16);
            var dueDate = new Date(2019, 01, 02, 12, 30);
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('Weekday invalid submit date 1', function() {
        it('should throw InvalidSubmitDate ', function() {
            var taskDate = new Date(2018, 06, 08, 08, 30);
            chai.expect(() => {
                CalculateDueDate(taskDate, 16)
            }).to.throw(Error, "InvalidSubmitDate");
        });
    });

    describe('Weekday invalid submit date 2', function() {
        it('should throw InvalidSubmitDate ', function() {
            var taskDate = new Date(2018, 06, 08, 17, 30);
            chai.expect(() => {
                CalculateDueDate(taskDate, 16)
            }).to.throw(Error, "InvalidSubmitDate");
        });
    });

    describe('Weekday invalid submit date weekend', function() {
        it('should throw InvalidSubmitDate ', function() {
            var taskDate = new Date(2018, 06, 09, 08, 30);
            chai.expect(() => {
                CalculateDueDate(taskDate, 16)
            }).to.throw(Error, "InvalidSubmitDate");
        });
    });
});