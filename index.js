// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);    
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2, 4);
}


const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };


function fareDoubler(num) {
    return num * 2;
}

const fareTripler = (num) => num * 3;


let selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];


const selectDifferentDrivers = (drivers, driversToReturn) => {
    return driversToReturn(drivers);
}

