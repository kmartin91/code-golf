// Writing pyramid word
var l = readline();
print(l)
for(i=1;i<=l.length;i++)
    print(l.substr(-i)+l.substr(0,l.length-i))