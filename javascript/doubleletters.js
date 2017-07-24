// Finding double letters
print(readline().split('/(.)\1+/').length)

// Or
print(readline().toLowerCase().match(/(.)\1/).length)