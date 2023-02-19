function squarePerimeter(multiplication) {
    const perimeter = 4 * multiplication;
    const area = multiplication * multiplication;
    return { perimeter, area };
  }
console.log(squarePerimeter(5));

module.exports = squarePerimeter
  