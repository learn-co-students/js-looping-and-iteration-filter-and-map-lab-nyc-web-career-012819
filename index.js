// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(function (driver) {
    return driver.revenue > rev
  })
}

function driverNamesWithRevenueOver(drivers, rev) {
  const mdrivers = drivers.filter(function (driver) {
    return driver.revenue > rev
  })
  return mdrivers.map(function (driver) {
    return driver.name
  })
}

function exactMatch(drivers, data) {
  return drivers.filter(function (driver) {
    return (driver.name === Object.values(data)[0]) || (driver.revenue === Object.values(data)[0])
  })
}

function exactMatchToList(drivers, data) {
  const mdrivers = drivers.filter(function (driver) {
    return (driver.name === Object.values(data)[0]) || (driver.revenue === Object.values(data)[0])
  })
  return mdrivers.map(function (driver) {
    return driver.name
  })
}
