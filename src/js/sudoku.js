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
