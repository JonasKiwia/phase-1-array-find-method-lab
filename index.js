// code your solution here

function superbowlWin(record) {
  // find() method to locate the first object with result "W"
  const winningRecord = record.find(game => game.result === "W");
  // Returns the year if a win is found
  return winningRecord ? winningRecord.year : undefined;
}

//Example
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

// Test the function
console.log(superbowlWin(record)); // Output: "2015"