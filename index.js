// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);    
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2, 4);
}


function createFareMultiplier(num) {
    return function fareQuintupler() {
        return num*num;
    }
}createFareMultiplier(5);


function fareDoubler(num) {
    return num * 2;
}

const fareTripler = (num) => num * 3;

function selectingDrivers(drivers) {
    drivers[0]= returnFirstTwoDrivers;
    return drivers[0];
}


const selectDifferentDrivers = (arrayOfDrivers, function1) => {
    return function1;
}
selectDifferentDrivers(drivers, returnFirstTwoDrivers);
selectDifferentDrivers(drivers, returnLastTwoDrivers);

