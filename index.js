// Code your solution here:
function driversWithRevenueOver(driverArray, revenue) {
  return driverArray.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(driverArray, revenue) {
  return driversWithRevenueOver(driverArray, revenue).map(function (driver) {
    return driver.name;
  });
}

function exactMatch(driverArray, attributeValueObj) {
  return driverArray.filter(function (driver) {
    return driver[Object.keys(attributeValueObj)] === attributeValueObj[Object.keys(attributeValueObj)];
  });
}

function exactMatchToList(driverArray, attributeValueObj) {
  return exactMatch(driverArray, attributeValueObj).map(function (driver) {
    return driver.name;
  });
}
