# Finding double letter in word (two solutions)
p gets.split.map{|x|x.scan(/(.)\1/i).length}.inject(:+)

p gets.split.map{|x|x[/(.)\1/i].length>1?1:x[/(.)\1/i].length}.inject(:+)