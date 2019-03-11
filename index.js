// Code your solution here:
function driversWithRevenueOver(driverArr, revenue) {
  return driverArr.filter(driver => driver.revenue > revenue);
}
// function driversWithRevenueOver(driverArr, revenue) {
//   return driverArr.filter(function(driver) {
//     return driver.revenue > revenue;
//   });
// }
// *********************************

function driverNamesWithRevenueOver(driverArr, revenue) {
  const driverName = driversWithRevenueOver(driverArr, revenue);
  // return driverName.map(function(driver) {
  //   return driver.name;
  // });
  return driverName.map(driver => driver.name);
}
// *********************************

function exactMatch(driverObj, obj) {
  // return driverObj.filter(function(driver) {
  //   return driver[Object.keys(obj)] === obj[Object.keys(obj)];
  // });
  return driverObj.filter(driver => driver[Object.keys(obj)] === obj[Object.keys(obj)]);
}
// *********************************

function exactMatchToList(driverObj, obj) {
  const driverName = exactMatch(driverObj, obj);
  // return driverName.map(function(driver) {
  //   return driver.name;
  // });
  return driverName.map(driver => driver.name);
}
