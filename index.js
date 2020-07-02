const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, ISSPassing) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(ISSPassing);
});

const printPassTimes = function(ISSPassing) {
  for (const passing of ISSPassing) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(passing.risetime);
    const duration = passing.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

module.exports = { printPassTimes };