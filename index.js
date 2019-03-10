// Code your solution here:

function driversWithRevenueOver(driver, revenue) {
  const result = driver.filter(function(dri) {return dri.revenue >= revenue; });
  return result;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const r = driversWithRevenueOver(drivers, revenue);
  const result = r.map(function(val) {return val.name});
  return result;
}

function exactMatch(drivers, obj) {
  const k = (Object.keys(obj))[0];
  const v = (Object.values(obj))[0];
  const result = drivers.filter(function(driver) {return driver[k] === v} )
  return result;
}

function exactMatchToList(drivers, obj) {
  const r = exactMatch(drivers, obj);
  const result = r.map(function(val) {return val.name});
  return result;
}
