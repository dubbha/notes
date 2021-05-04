const roundHalfDown = (x) => Math.round(x * 100 - 0.1) / 100;

roundHalfDown(2.224); // 2.22
roundHalfDown(2.225); // 2.22
roundHalfDown(2.226); // 2.23

const roundHalfDownWithPrecision = (x, precision = 2) =>
    Math.round(x * Math.pow(10, precision) - 0.1) / Math.pow(10, precision);

roundHalfDownWithPrecision(2.224); // 2.22
roundHalfDownWithPrecision(2.225); // 2.22
roundHalfDownWithPrecision(2.226); // 2.23

roundHalfDownWithPrecision(2.22224, 4); // 2.2222
roundHalfDownWithPrecision(2.22225, 4); // 2.2222
roundHalfDownWithPrecision(2.22226, 4); // 2.2223
