//! Greed is Good

// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

function score(dice) {
  let points = 0;
  let counts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };
  for (let i = 0; i < dice.length; i++) {
    counts[dice[i]] += 1;
  }
  if (counts[6] / 3 >= 1) {
    let newSix = counts[6] - (counts[6] % 3);
    points += (newSix / 3) * 600;
  }
  if (counts[5] > 0) {
    if (counts[5] % 3 === 0) {
      points += (counts[5] / 3) * 500;
    } else if (counts[5] / 3 >= 1) {
      let newFive = counts[5] - (counts[5] % 3);
      points += (newFive / 3) * 500 + (counts[5] % 3) * 50;
    } else {
      points += (counts[5] % 3) * 50;
    }
  }
  if (counts[4] / 3 >= 1) {
    let newFour = counts[4] - (counts[4] % 3);
    points += (newFour / 3) * 400;
  }
  if (counts[3] / 3 >= 1) {
    let newThree = counts[3] - (counts[3] % 3);
    points += (newThree / 3) * 300;
  }
  if (counts[2] / 3 >= 1) {
    let newTwo = counts[2] - (counts[2] % 3);
    points += (newTwo / 3) * 200;
  }
  if (counts[1] > 0) {
    if (counts[1] % 3 === 0) {
      points += (counts[1] / 3) * 1000;
    } else if (counts[1] / 3 >= 1) {
      let newOne = counts[1] - (counts[1] % 3);
      points += (newOne / 3) * 1000 + (counts[1] % 3) * 100;
    } else {
      points += (counts[1] % 3) * 100;
    }
  }
  return points;
}

console.log(score([1, 1, 1, 1, 3]));
