// Finding anagram

[a,b]=readline().split(' ')
f=x=>x.split("").sort().join(0)
print(+(f(b)==f(a)))

[a,b]=readline().split(' ')
print(+(f=x=>x.split("").sort()+"")(b)==f(a)))

[a,b]=readline().split(' ')
print(+((f=x=>x.split("").sort()+"")(b)==f(a)))