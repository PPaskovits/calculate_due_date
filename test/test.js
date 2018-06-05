var chai = require('chai');
var assert = require('chai').assert;
var CalculateDueDate = require("../src/CalculateDueDate.js").CalculateDueDate;

describe('Calculate Due Date Test', function() {
    describe('Simple 8 hours due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 5, 12, 30));
            var date = CalculateDueDate(taskDate, 8);
            var dueDate = new Date(Date.UTC(2018, 5, 6, 12, 30));
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('Same day 8 hours due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 5, 9, 0));
            var date = CalculateDueDate(taskDate, 8);
            var dueDate = new Date(Date.UTC(2018, 5, 5, 17, 0));
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('Simple 16 hours due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 5, 12, 30));
            var date = CalculateDueDate(taskDate, 16);
            var dueDate = new Date(Date.UTC(2018, 5, 7, 12, 30));
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('Friday 16 hours due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 8, 9, 0));
            var date = CalculateDueDate(taskDate, 16);
            var dueDate = new Date(Date.UTC(2018, 5, 12, 9, 0));
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });


    describe('Weekday 17pm 8hours same day due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 5, 17, 0));
            var date = CalculateDueDate(taskDate, 8);
            var dueDate = new Date(Date.UTC(2018, 5, 6, 17, 0));
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('End year due date', function() {
        it('should be equal ', function() {
            var taskDate = new Date(Date.UTC(2018, 11, 31, 12, 30));
            var date = CalculateDueDate(taskDate, 16);
            var dueDate = new Date(Date.UTC(2019, 0, 2, 12, 30));
            assert.equal(dueDate.getTime(), date.getTime());
        });
    });

    describe('Weekday invalid submit date 1', function() {
        it('should throw InvalidSubmitDate ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 8, 8, 59));
            chai.expect(() => {
                CalculateDueDate(taskDate, 16)
            }).to.throw(Error, "InvalidSubmitDate");
        });
    });

    describe('Weekday invalid submit date 2', function() {
        it('should throw InvalidSubmitDate ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 8, 17, 30));
            chai.expect(() => {
                CalculateDueDate(taskDate, 16)
            }).to.throw(Error, "InvalidSubmitDate");
        });
    });

    describe('Weekday invalid submit date weekend', function() {
        it('should throw InvalidSubmitDate ', function() {
            var taskDate = new Date(Date.UTC(2018, 5, 9, 9, 30));
            chai.expect(() => {
                CalculateDueDate(taskDate, 16)
            }).to.throw(Error, "InvalidSubmitDate");
        });
    });
});