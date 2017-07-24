#Find prime number from 2 to number (gets.to_i) (two solutions)
require'prime'
Prime.each(gets.to_i)do|a|p a end

require'prime'
Prime.each(gets.to_i).each{|a|p a}