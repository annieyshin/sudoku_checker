import { Sudoku } from './../src/js/sudoku.js';

describe('Sudoku', function(){
  var reusableSudoku;

  beforeEach(function(){
    reusableSudoku = new Sudoku([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9,1, 2, 3, 4, 5, 6, 7, 8, 9]);
  })

  it('should show how beforeEach() works', function() {
    console.log(reusableSudoku)
  })
  it('will have 81 user inputted numbers', function(){
    expect(reusableSudoku.userAnswer.length).toEqual(81)
  })

  it('user has put in 81 numbers for the puzzle', function(){
    expect(reusableSudoku.checkIfAllNumbersEntered()).toEqual(true)
  })

  it('will have 9 rows with digits 1-9', function(){
    expect(reusableSudoku.checkRows()).toEqual(true)
  })

})
