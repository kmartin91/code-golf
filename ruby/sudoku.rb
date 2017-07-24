# Find the miss number in Sudoku Line (two solutions)
p 45-gets.split("").map(&:to_i).inject(:+)

p ((1..9).to_a-gets.split("").map(&:to_i))[0]