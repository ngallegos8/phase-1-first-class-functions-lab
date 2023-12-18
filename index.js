const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}
// console.log(returnFirstTwoDrivers());

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}
// console.log(returnLastTwoDrivers());

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function(multiplyFare) {
    return function (fare) {
        return multiplyFare * fare;
    }
}

// function fareDoubler(fare) {
//     return fare * 2;
// }
const fareDoubler = createFareMultiplier(2)

// function fareTripler(fare) {
//     return fare * 3;
// }
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
}
