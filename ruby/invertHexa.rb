# Finding inverse of hexa code
puts "#"+sprintf("%06X",gets.chomp[1..-1].hex^0xFFFFFF)