// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter( d => d.revenue > revenue)
};
//Takes in an array of driver objects and returns the driver object where the driver revenue is greater than the given revenue

function driverNamesWithRevenueOver(drivers, revenue) {
  let newDrivers = drivers.filter( d => d.revenue > revenue);

  return newDrivers.map( d => d.name );
};
//Return the names of the drivers whose revenue is greater than the given revenue

function exactMatch (drivers, qualifications) {
  return drivers.filter( function (driver) {
    let matches = false;

    for (const key in qualifications) {
      matches = driver[key] === qualifications[key];
    }

    return matches;
  });
};

function exactMatchToList(drivers, qualifications) {
  return exactMatch(drivers, qualifications).map(function(match) {
    return match.name;
  });
}
