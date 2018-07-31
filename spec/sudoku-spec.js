import { Sudoku } from './../src/sudoku.js';

describe('Sudoku', function(){
  var reusableSukoku;

  beforeEach(function(){
    reusableSukoku = new Sudoku();
  })

  it('should show how beforeEach() works', function() {
    console.log(reusableSukoku);
  });

  it('will have 9 rows and 9 columns', function(){
    expect(reusableSukoku.row.length).toEqual(9);
    expect(reusableSukoku.column.length).toEqual(9);
  })

  // it('will have numbers 1-9 in row 1', function(){
  //   var su
  // })
})
