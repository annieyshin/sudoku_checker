//sudoku spec file constructor

export function Sudoku(userRow, userColumn) {
  this.row = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  this.column = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  this.userRow = [userRow]
  this.userColumn = [userColumn]
}
