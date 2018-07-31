export function Sudoku(userAnswer) {
  this.userAnswer = userAnswer;
}

Sudoku.prototype.checkIfAllNumbersEntered = function(){
  if (this.userAnswer.length == 81) {
    return true;
  }
  else {
    return false;
  }
};

Sudoku.prototype.checkRows = function(){
  var row = []
  var rows = []
  for (var i = 0; i <= this.userAnswer.length; i+=9) {
    for (var j = 0; j <= 8; j++) {
      row.push(this.userAnswer[j])
    }
    rows.push(row);
    console.log(row);
    row = []
  }

  for (var k = 1; k <= 9; k++) {
    for (var m = 0; m <= 9; m++) {

      if (rows[m].includes(k)) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}
