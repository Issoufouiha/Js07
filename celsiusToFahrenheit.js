function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
  }
console.log(celsiusToFahrenheit(30));

module.exports = celsiusToFahrenheit