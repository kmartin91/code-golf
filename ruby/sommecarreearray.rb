# Sum square number (entry example: 10 3 2 4 5)
gets;p gets.split.map{|x|x.to_i**2}.inject(:+)