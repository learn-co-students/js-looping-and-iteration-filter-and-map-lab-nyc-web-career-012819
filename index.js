driversWithRevenueOver = function(drivers, revenue){
  return drivers.filter(function(driver) {
    return driver["revenue"] > revenue
  });
}

driverNamesWithRevenueOver = function(drivers, revenue){
  arr = []
  drivers.filter(function(driver) {
    if(driver['revenue'] > revenue){
       arr.push(driver['name']);
    }
  });
  return arr
}

function exactMatch(drivers, obj){
  arrayOfDrivers = [];

  for(const driver in drivers){
    for(const attribute in drivers[driver]){
      if(drivers[driver][attribute] == obj[attribute]){
          arrayOfDrivers.push(drivers[driver]);
      }
    }
  }
  return arrayOfDrivers;
}

function exactMatchToList(drivers, obj){
  arrayOfDriverNames = [];

  for(const driver in drivers){
    for(const attribute in drivers[driver]){
      if(drivers[driver][attribute] == obj[attribute]){
          arrayOfDriverNames.push(drivers[driver]['name']);
      }
    }
  }
  return arrayOfDriverNames;
}
