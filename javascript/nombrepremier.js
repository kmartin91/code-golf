// Finding prime numbers
f=x=>{i=2;while(x>1)if(x%i)i++;else a.push(i),x/=i,i=2},f(readline(a=[])),print(a.join(" "))

print((x=n=>{a=[],i=2;while(n>1)if(n%i)i++;else a.push(i),n/=i,i=2;return a.join(" ")})(readline()))