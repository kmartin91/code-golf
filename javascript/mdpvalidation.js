// Password validation (UPCASE, lowercase, digits and lenght equals or more than 8 characters)
print(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}/g.test(readline()))