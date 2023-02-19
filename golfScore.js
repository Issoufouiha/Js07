const names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!",
  ];
  
  function golfScore(par, strokes) {
    let score = strokes - par;
    if (score === -1) {
      return names[0];
    } else if (score <= -2) {
      return names[1];
    } else if (score === -2) {
      return names[2];
    } else if (score === 0) {
      return names[3];
    } else if (score === 1) {
      return names[4];
    } else if (score === 2) {
      return names[5];
    } else {
      return names[6];
    }
  }
  console.log(golfScore(4, 1)); // Output: "Hole-in-one!"
  console.log(golfScore(4, 2)); // Output: "Eagle"
  console.log(golfScore(5, 2)); // Output: "Eagle"
  console.log(golfScore(4, 3)); // Output: "Birdie"
  console.log(golfScore(4, 4)); // Output: "Par"
  console.log(golfScore(1, 1)); // Output: "Hole-in-one!"
  console.log(golfScore(5, 5)); // Output: "Par"


  module.exports = golfScore
    

