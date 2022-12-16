const convertToCelsius = function (temp) {
  let tempCelcius = (temp - 32) * (5 / 9);
  return parseFloat(tempCelcius.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  let tempFarenheight = temp *(9/5) + 32;
  return parseFloat(tempFarenheight.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
