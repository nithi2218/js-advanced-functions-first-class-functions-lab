// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);    
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2, 4);
}


let createFareMultiplier = (num) => {
    return function fareQuintupler() {
        return num*num;
    }
}


function fareDoubler(num) {
    return num * 2;
}

const fareTripler = (num) => num * 3;


let selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];


const selectDifferentDrivers = (drivers, driversToReturn) => {
    return driversToReturn(drivers);
}

