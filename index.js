function driversWithRevenueOver(drivers, threshold) {
  return drivers.filter(function(driver) {
    return driver.revenue > threshold;
  });
}

function driverNamesWithRevenueOver(drivers, threshold) {
  return driversWithRevenueOver(drivers, threshold).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function(driver) {
    for (entry of Object.entries(driver)) {
      if (entry.toString() === Object.entries(attribute).toString()) {
        return driver;
      }
    }
  });
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(function(driver) {
    return driver.name;
  });
}